"""Exact and simulated operating characteristics for a completely specified policy."""
from dataclasses import dataclass
from fractions import Fraction
from itertools import product
import math
import numpy as np
from scipy.stats import beta, betabinom
from continuation_common import finite_scalar


@dataclass(frozen=True)
class Policy:
    looks: tuple[int, ...] = (8, 20)
    analysis: tuple[float, float] = (1., 1.)
    p0: float = .7
    success: float = .95
    futility: float = .10
    test_cost: float = .25
    false_approve: float = 190.
    false_reject: float = 10.

    def __post_init__(self):
        if not self.looks or any(isinstance(n, bool) or not isinstance(n, int) or n < 1 for n in self.looks):
            raise ValueError('Looks must be positive integers')
        if tuple(sorted(set(self.looks))) != self.looks or len(self.looks) > 2:
            raise ValueError('Declare one or two increasing looks')
        positive_pair(self.analysis)
        for name in ('p0', 'success', 'futility', 'test_cost', 'false_approve', 'false_reject'):
            finite_scalar(getattr(self, name), name=name)
        if not 0 < self.p0 < 1 or not 0 <= self.futility < self.success <= 1:
            raise ValueError('Invalid probability thresholds')
        if min(self.test_cost, self.false_approve, self.false_reject) < 0:
            raise ValueError('Costs must be nonnegative')


def positive_pair(pair: tuple[float, float]) -> tuple[float, float]:
    if len(pair) != 2 or any(finite_scalar(v, name='beta shape') <= 0 for v in pair):
        raise ValueError('Two positive beta shapes required')
    return pair


def posterior(s: int, n: int, policy: Policy) -> tuple[float, float]:
    if isinstance(s, bool) or isinstance(n, bool) or not isinstance(s, (int, np.integer)) or not isinstance(n, (int, np.integer)) or not 0 <= s <= n:
        raise ValueError('Require integer 0 <= successes <= trials')
    return policy.analysis[0] + s, policy.analysis[1] + n - s


def action(s: int, n: int, policy: Policy) -> str:
    a, b = posterior(s, n, policy)
    if n not in policy.looks:
        return 'continue'
    # Proper finite beta posteriors have strictly interior tails at interior p0.
    # Rounded/underflowed floating probabilities cannot establish support endpoints.
    q = beta.sf(policy.p0, a, b)
    if policy.success < 1 and q >= policy.success:
        return 'approve'
    if n == policy.looks[-1] or (policy.futility > 0 and q <= policy.futility):
        return 'reject'
    return 'continue'


def enumerate_stages(policy: Policy, design=(8., 2.)) -> list[dict]:
    """Count enumeration, independently of the trial-by-trial recursion below."""
    a, b = positive_pair(design)
    first = policy.looks[0]
    terminal = {}
    for s in range(first + 1):
        mass = float(betabinom.pmf(s, first, a, b))
        decision = action(s, first, policy)
        if decision != 'continue':
            terminal[first, s, decision] = mass
        else:
            extra = policy.looks[-1] - first
            for t in range(extra + 1):
                key = (first + extra, s + t, action(s + t, first + extra, policy))
                terminal[key] = terminal.get(key, 0.) + mass * betabinom.pmf(t, extra, a+s, b+first-s)
    return [dict(n=n, s=s, action=d, probability=float(p)) for (n,s,d),p in sorted(terminal.items())]


def recurse(policy: Policy, design=(8., 2.), *, truth: float | None = None) -> list[dict]:
    a, b = positive_pair(design)
    if truth is not None and not 0 <= finite_scalar(truth, name='truth') <= 1:
        raise ValueError('Truth must lie in [0,1]')
    active = {0: 1.}
    terminal = []
    for n in range(policy.looks[-1] + 1):
        next_states = {}
        for s, mass in active.items():
            decision = action(s, n, policy)
            if decision != 'continue':
                terminal.append(dict(n=n, s=s, action=decision, probability=mass))
                continue
            p = (a+s)/(a+b+n) if truth is None else truth
            next_states[s+1] = next_states.get(s+1, 0.) + mass*p
            next_states[s] = next_states.get(s, 0.) + mass*(1-p)
        active = next_states
    return terminal


def summarize(states: list[dict], policy: Policy, design=(8.,2.), *, truth=None) -> dict:
    a,b = positive_pair(design)
    assurance = size = loss = 0.
    stopping = {}
    for row in states:
        n,s,d,m = row['n'],row['s'],row['action'],row['probability']
        low = beta.cdf(policy.p0,a+s,b+n-s) if truth is None else float(truth <= policy.p0)
        terminal_loss = policy.false_approve*low if d == 'approve' else policy.false_reject*(1-low)
        assurance += m*(d == 'approve')
        size += m*n
        loss += m*(policy.test_cost*n + terminal_loss)
        key = f'{n}:{d}'
        stopping[key] = stopping.get(key,0.)+m
    # A fixed-size policy has a deterministic size; avoid summation roundoff
    # masquerading as Monte Carlo error when its true MCSE is exactly zero.
    if len(policy.looks) == 1:
        size = policy.looks[0]
    return dict(assurance=float(assurance),expected_n=float(size),expected_loss=float(loss),
                mass=float(sum(v['probability'] for v in states)),stopping=stopping)


def simulate(policy: Policy, design: tuple, generator: np.random.Generator, count=100000) -> dict:
    if isinstance(count, bool) or not isinstance(count,int) or count < 2:
        raise ValueError('At least two simulated studies required')
    a,b = positive_pair(design)
    truth = generator.beta(a,b,count)
    outcomes = generator.random((count,policy.looks[-1])) < truth[:,None]
    counts = outcomes.cumsum(axis=1)
    active = np.ones(count,dtype=bool)
    sizes = np.zeros(count)
    approve = np.zeros(count,dtype=bool)
    for n in policy.looks:
        q = beta.sf(policy.p0,policy.analysis[0]+counts[:,n-1],policy.analysis[1]+n-counts[:,n-1])
        yes = active & (policy.success < 1) & (q >= policy.success)
        futile = (policy.futility > 0) & (q <= policy.futility)
        stop = active & (yes | futile | (n == policy.looks[-1]))
        approve[yes] = True
        sizes[stop] = n
        active[stop] = False
    losses = policy.test_cost*sizes + policy.false_approve*(approve & (truth<=policy.p0)) + policy.false_reject*(~approve & (truth>policy.p0))
    values = dict(assurance=approve.astype(float),expected_n=sizes,expected_loss=losses)
    result = {key:dict(mean=float(v.mean()),mcse=float(v.std(ddof=1)/math.sqrt(count))) for key,v in values.items()}
    result['count'] = count
    result['approval_count'] = int(approve.sum())
    result['zero_success_upper_95'] = float(1-.05**(1/count)) if not approve.any() else None
    return result


def rational_anchor() -> dict:
    """Enumerate *ordered* length-four paths with exact uniform-prior path masses."""
    assurance = expected = Fraction(0)
    fixed = Fraction(0)
    for path in product((0,1),repeat=4):
        s = sum(path)
        mass = Fraction(math.factorial(s)*math.factorial(4-s),math.factorial(5))
        first = sum(path[:2])
        n = 2 if first in (0,2) else 4
        approved = first == 2 or (first == 1 and s >= 3)
        assurance += mass*approved
        expected += mass*n
        fixed += mass*(s >= 3)
    return dict(assurance=str(assurance),expected_n=str(expected),fixed_assurance=str(fixed))
