# Glossary and notation {#sec-glossary}

## Maps and domains

**Positive integers, $\mathbb N_{>0}$.** The domain
$\{1,2,3,\ldots\}$ used for the classical conjecture.

**Unaccelerated map, $C$.** The map $n\mapsto n/2$ for even $n$ and
$n\mapsto3n+1$ for odd $n$.

**Shortcut map, $S$.** The map $n\mapsto n/2$ for even $n$ and
$n\mapsto(3n+1)/2$ for odd $n$.

**Odd-to-odd or Syracuse map, $U$.** For odd $n$,
$U(n)=(3n+1)/2^{\nu_2(3n+1)}$.

**Iterate, $C^j(n)$.** The value after composing $C$ with itself $j$ times;
$C^0(n)=n$.

**Forward orbit.** The ordered sequence
$n,C(n),C^2(n),\ldots$.

**Tail.** The future orbit beginning at a selected iterate. Orbits that meet have
the same tail.

**Acceleration.** Replacing several original transitions by one transition.
Acceleration changes time statistics.

**Conjugacy.** A bijective change of coordinates $\phi$ satisfying
$\phi\circ F=G\circ\phi$.

## Orbit measurements

**Stopping time, $\sigma(n)$.** The least positive $j$ such that $C^j(n)<n$.

**Total stopping time, $\tau(n)$.** The least nonnegative $j$ such that
$C^j(n)=1$.

**Peak, $M(n)$.** The greatest value through first arrival at 1 for a certified
convergent orbit.

**Altitude.** Usually $\log_2(C^j(n)/n)$ in this book; captions specify the base
and normalization.

**Record.** A start whose chosen statistic exceeds that of all smaller starts in
the declared experiment.

**Censoring.** Ending observation before the event of interest occurs. A capped
orbit is unresolved, not completed.

## Arithmetic encodings

**2-adic valuation, $\nu_2(m)$.** The largest $a\ge0$ for which $2^a$ divides
nonzero $m$.

**Parity vector, $\boldsymbol\varepsilon$.** A finite bit string recording even
and odd shortcut branches.

**Odd count, $s_k$.** The number of 1s among the first $k$ parity bits.

**Affine slope.** The coefficient $3^{s_k}/2^k$ in a shortcut parity segment.

**Additive term, $A(\boldsymbol\varepsilon)$.** The exact contribution of all
$+1$ operations in the affine iterate.

**Admissible word.** A formal parity word whose branch conditions are actually
realized by the stated starting value or residue class.

**Residue class.** Integers sharing one remainder modulo a declared modulus.

**Uniform class certificate.** A symbolic proof applying to every integer in a
residue class, not only its representative.

## Graph and cycle language

**Functional graph.** The directed graph with one outgoing edge $n\to C(n)$ from
each vertex.

**Inverse graph.** The same edges explored backward from a target set.

**Predecessor.** An integer $n$ satisfying $C(n)=m$ for a specified target $m$.

**Layer.** Vertices first discovered at one breadth-first distance from a root
set under a declared duplicate policy.

**Cycle.** A finite orbit segment returning to its start.

**Primitive period.** The least positive cycle length, excluding repetitions of a
shorter word.

**Nontrivial positive cycle.** Any positive cycle other than the familiar
$1\to4\to2\to1$ behavior, with convention translated as needed.

## Density and probability

**Natural density, $d(A)$.** The limiting proportion of integers at most $x$
belonging to $A$, when it exists.

**Logarithmic density, $\delta(A)$.** The limiting $1/n$-weighted proportion,
normalized by $\log x$, when it exists.

**Upper/lower density.** Limsup/liminf versions used when a limit is unknown.

**Almost all.** All except a density-zero set, with the density notion always
specified.

**Almost bounded.** Attaining a value below every prescribed threshold
$f(N)\to\infty$ for almost all starts; not the same as a fixed universal bound.

**Heuristic.** A model-based explanation or prediction not established as a
theorem for the arithmetic map.

**Logarithmic drift.** The average change of the logarithm of modeled orbit
height.

**Geometric valuation model.** The distribution
$\Pr(A=a)=2^{-a}$ for $a\ge1$ used for one-step odd-to-odd exponents and, with
extra assumptions, for heuristic successive steps.

## Evidence and computation

**Theorem.** A conclusion deduced from explicit assumptions by a valid proof.

**Finite verification.** A certified statement about every input in a specified
bounded range.

**Computer-assisted proof.** A general proof containing a finite computation
whose correctness and role are justified.

**Preprint.** Public scholarly manuscript not thereby guaranteed to have passed
peer review.

**Certificate.** Data that a simpler independent checker can validate against a
mathematical specification.

**Frontier.** The endpoint of a declared verified half-open range. The word must
be paired with a source and date; Barina's 2025 paper reports $n<2^{71}$.

**Provenance.** Code version, parameters, environment, partition, hashes, and
other metadata needed to audit a computation.

**Overflow.** Arithmetic exceeding a fixed representation; wraparound can create
false descent.

**Open conjecture.** A claim for which no accepted proof or counterexample is
known. The Collatz conjecture is open at this book's status date.

**Discrete dynamical system.** A state space together with a function iterated
at integer times.

**Lyapunov or rank function.** A quantity whose proved pointwise decrease can
force entry into a target set; negative average drift alone is not enough.

**Finite automaton.** A computation with finitely many internal states and a
transition determined by the current state and input symbol.

**Transducer.** A finite-state machine that emits output as it reads input.

**2-adic integer.** A compatible system of residues modulo every power of two,
equivalently an infinite low-to-high binary expansion.

**Haar measure.** The translation-invariant probability measure on the compact
additive group $\mathbb Z_2$.

**Transfer operator.** A linear operator that pushes a density forward by
collecting mass over all preimages of each state.

**Spectral gap.** Separation between the invariant eigenvalue and the remaining
spectrum in a specified function space and norm; the space and norm are part of
the claim.

**Martingale.** A stochastic process whose conditional next expectation equals
its present value relative to a declared information history.

**Claim ledger.** A research table that keeps each assertion beside its domain,
quantifiers, evidence status, and unresolved proof obligations.

## Structural, statistical, and logical terms

**Adjacency matrix.** A matrix whose $(i,j)$ entry counts directed edges from
vertex $i$ to vertex $j$, under this book's convention. Its powers count
walks.

**Block or cluster bootstrap.** A resampling method that samples dependent
groups together rather than pretending every row is independent. Its validity
depends on the chosen dependence model.

**Control or decision problem.** A family of inputs paired with a yes/no
question. Decidability concerns one algorithm that halts correctly on every
input in the family.

**Effective sample size.** A model-based estimate of how many independent
observations would carry information comparable to a dependent sample. It is
not an intrinsic property of a Collatz table.

**Ergodic system.** A measure-preserving system whose invariant measurable sets
have measure zero or one. Ergodic does not mean every orbit is dense or
convergent.

**Formal independence.** Failure of both a sentence and its negation to be
provable in a named formal theory, subject to consistency qualifications.

**Graph conductance.** A normalized measure of the edge boundary of a vertex
set. Directed or weighted use requires the network and stationary measure to be
specified.

**Lumpability.** A condition allowing detailed Markov states to be projected to
blocks without hidden within-block information changing transition
probabilities.

**Merkle tree.** A tree of cryptographic hashes whose root commits to an ordered
collection of records. It detects changes but does not prove the records'
mathematical content.

**Mixing.** Asymptotic independence of an event and a far-future shifted event
in a measure-preserving system. Mixing implies ergodicity.

**Poincaré recurrence.** The theorem that almost every point of a set in a
finite measure-preserving system returns to it infinitely often.

**Renewal process.** A stochastic process whose event times are sums of
independent identically distributed waiting times. Accelerated Collatz blocks
motivate an analogy but are not proved classical renewals.

**Right censoring.** Knowing only that an event time exceeds the observation
cap. An unresolved capped orbit must not be assigned the cap as its total
stopping time.

**Semidecidable.** Having an algorithm that halts on every yes-instance and may
run forever on no-instances. Reaching 1 from one fixed start has this property.

**Shift space.** A space of infinite symbol sequences with the map that deletes
the first symbol. Parity itineraries conjugate the 2-adic shortcut map to a
binary shift.

**Spectral radius.** The largest absolute value of a finite matrix eigenvalue,
or its operator-theoretic extension. Its meaning depends on the matrix,
boundary rule, weights, and function space.

**Trusted computing base.** Every unverified component on which acceptance of a
certificate relies, including specification, checker, runtime, and relevant
hardware assumptions.

**Undecidable family.** A parameterized decision problem for which no algorithm
decides all instances. This does not imply that every fixed member is difficult
or independent.

## Rare-event, optimization, and verification terms

**Branching process.** A random population model in which individuals produce
offspring according to a declared law. An inverse Collatz graph motivates a
comparison, but its residue-dependent branches are not independent offspring.

**Chernoff bound.** An exponential tail bound obtained by applying Markov's
inequality to an exponential transform and optimizing its parameter.

**Ergodic optimization.** Maximization or minimization of long-run averages over
orbits or invariant measures. On a finite weighted graph it reduces to a cycle-
mean problem.

**Large-deviation rate function.** A nonnegative function controlling the
exponential scale of rare-event probabilities under a specified probabilistic
model. It is not automatically a theorem about deterministic Collatz orbits.

**Maximum cycle mean.** The greatest average edge weight among directed cycles
of a finite weighted graph. A cycle and a compatible potential can certify the
value exactly.

**Proof assistant.** Software whose small kernel checks formal terms against
precise definitions and inference rules. It narrows the trusted base but does
not choose the intended theorem statement for the user.

**Proof certificate.** Finite evidence emitted by a solver or computation and
checked by an independent, preferably small program. Its format and checker
define the accepted claim.

**Refinement theorem.** A proof that a lower-level implementation, such as
fixed-width arithmetic, faithfully represents a higher-level mathematical
specification under explicit bounds.

**SAT and SMT.** SAT decides satisfiability of finite Boolean formulas. SMT adds
theories such as integers or bit-vectors; those two arithmetic theories have
different overflow semantics.

**Subaction or potential certificate.** Vertex values $h$ and a bound $\beta$
satisfying $w(u,v)+h(v)-h(u)\le\beta$ on every edge. Telescoping proves that
every cycle mean is at most $\beta$.

**Verified dataset.** A finite data release accompanied by a precise predicate,
coverage manifest, arithmetic specification, provenance, integrity hashes, and
a stated independent-checking or proof-certificate regime.

## Combinatorial, information, and validated-numerics terms

**Language.** A set of finite words over a declared alphabet. A parity language
selects formal orbit prefixes; arithmetic admissibility remains a separate
condition.

**Generating function.** A formal power series whose coefficient at a power
stores a sequence value. A bivariate generating function can mark both word
length and odd-step count.

**Regular language.** A language recognized by a finite automaton. Its weighted
counting generating function is rational, but regular recognition of bounded
prefixes does not decide an unbounded orbit property.

**Kraft sum.** For prefix-free binary words of lengths $d_i$, the sum
$\sum_i2^{-d_i}$. Equality to one certifies complete symbolic prefix coverage,
not the arithmetic truth of labels attached to the leaves.

**Shannon entropy.** The average $-\sum_xp(x)\log_2p(x)$ for a declared finite
probability law, measured in bits. It is not intrinsic randomness of one
deterministic orbit.

**Conditional entropy.** The uncertainty remaining in one random variable after
another is revealed, averaged over the revealed values.

**Mutual information.** The reduction in uncertainty about either of two random
variables when the other is learned. It detects dependence beyond covariance.

**Relative entropy.** The nonnegative quantity
$\sum_xp(x)\log(p(x)/q(x))$ measuring model mismatch. It is asymmetric and is
not a probability that either model is true.

**Supermartingale.** An adapted stochastic process whose conditional next
expectation is no greater than its present value.

**Stopping time.** A random time whose occurrence by time $t$ is decidable from
information available at time $t$. A deterministic Collatz stopping statistic
needs a probability space before this meaning applies.

**Coupling.** A joint construction of two random variables or processes that
preserves their declared marginal laws. Meeting probability can bound total
variation distance.

**Dependency graph.** A graph connecting random variables that may depend on one
another; nonadjacent vertex sets index independent families under the declared
model.

**Presburger arithmetic.** First-order integer arithmetic with addition, order,
fixed constants, logic, and quantifiers but without multiplication of variables.
Every fixed-horizon Collatz trace is expressible in it.

**Semilinear set.** A finite union of linear periodic sets. In one dimension,
Presburger-definable sets are eventually periodic.

**Outward rounding.** Rounding a lower numerical endpoint downward and an upper
endpoint upward so the resulting interval continues to enclose the exact value.

**Interval certificate.** An expression, input domains, rational or directed-
rounded endpoints, remainder bounds, and a checker proving that the exact value
lies in the reported enclosure.
