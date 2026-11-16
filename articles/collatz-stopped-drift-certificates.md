
# Stopped Potentials Give a Conditional Drift Theorem
<a id="sec-collatz-martingale-drift"></a>

A stopped nonnegative potential proves a finite expected hitting-time bound under a stated conditional drift inequality, with a complete rational-chain certificate.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](#/books/collatz-conjecture/index) and the relevant finite-model
foundations of the [Collatz Research Toolkit](#/books/collatz-research-toolkit/index).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](#/books/collatz-conjecture/42-martingale-drift).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

The argument uses an explicit probability model, adapted finite-time observations and integrable conditional expectations. Take the initial state as fixed with finite potential; the stated drift inequality bounds the required finite-time expectations. Independence of successive increments is not assumed.

An **information history** $\mathcal F_t$ records everything observed by time
$t$. In a finite experiment it can be understood as a partition of all outcomes:
two outcomes lie in one cell when the observations through time $t$ cannot
distinguish them. As time passes, cells may split but never merge.

A process $X_0,X_1,\ldots$ is **adapted** when $X_t$ is known from
$\mathcal F_t$. The **conditional expectation**
$\mathbb E[Y\mid\mathcal F_t]$ is constant on every information cell and equals
the probability-weighted average of $Y$ inside that cell.

For example, toss two fair coins. After the first toss, the four outcomes split
into the cells $\{HH,HT\}$ and $\{TH,TT\}$. If $Y$ is the total number of heads,
then its conditional expectation is $3/2$ in the first cell and $1/2$ in the
second. Before observing anything its expectation is one; after both tosses it
equals the observed count.

## Martingales and one-sided drift

An integrable adapted process $(M_t)$ is a **martingale** when

$$
\mathbb E[M_{t+1}\mid\mathcal F_t]=M_t.
$$

It is a **supermartingale** when the left side is at most $M_t$, and a
**submartingale** when it is at least $M_t$. The prefix “super” refers to the
current value being above the next conditional mean, not to upward growth.

Let $B_i$ be independent fair bits and

$$
M_t=\sum_{i=1}^t(B_i-1/2).
$$

The new centered increment has conditional mean zero, so $M_t$ is a
martingale. If instead each bit has probability $p<1/2$ of one and we retain
the centering $1/2$, then the process is a supermartingale.

A nonexample is a single deterministic Collatz orbit with no random starting
rule. Its next state is already fixed, so conditional expectation adds nothing.
Putting probability on uniformly chosen residues creates a legitimate finite
probability space, but the resulting theorem inherits that sampling scope.

Every integrable adapted finite-time process has a **Doob decomposition**. Let

$$
D_t=\mathbb E[X_{t+1}-X_t\mid\mathcal F_t]
$$

and define $A_0=0$, $A_t=\sum_{j<t}D_j$. Then $M_t=X_t-A_t$ has conditional
mean-zero increments and is a martingale. This decomposition separates the
predictable drift from the residual fluctuation; it does not say the residuals
are independent.

## Stopping times and stopped processes

A random time $\tau$ is a **stopping time** when the event $\{\tau\le t\}$ can
be decided from $\mathcal F_t$. First arrival in a visible target is a stopping
time. “The last visit to a target” usually is not, because deciding that no
future return occurs requires future information.

The stopped process is

$$
M_{t\wedge\tau},
\qquad t\wedge\tau=\min(t,\tau).
$$

Before the target it follows $M_t$; after the target it remains fixed. If $M_t$
is a martingale and $\tau$ is a stopping time, the stopped process is again a
martingale under ordinary integrability conditions.

For a bounded stopping time $\tau\le N$, optional stopping gives

$$
\mathbb E[M_\tau]=\mathbb E[M_0].
$$

One proof writes

$$
M_\tau-M_0
=\sum_{t=0}^{N-1}
\mathbf1_{\{\tau>t\}}(M_{t+1}-M_t).
$$

The indicator is known at time $t$. Conditional expectation makes every summand
have mean zero. Unbounded stopping requires additional hypotheses such as
uniform integrability or suitable increment and expectation bounds.

The phrase “Collatz stopping time” names a deterministic orbit statistic. It
becomes a probabilistic stopping time only after a start or transition model is
declared, and its finiteness cannot be assumed when finiteness is the question.

## Additive drift theorem

Let $A$ be a target set and

$$
\tau=\inf\{t\ge0:X_t\in A\}.
$$

Suppose $V(X_t)\ge0$ and, for a constant $\delta>0$,

$$
\mathbb E[V(X_{t+1})\mid\mathcal F_t]
\le V(X_t)-\delta
\quad\text{on }\{t<\tau\}. \tag{42.1}
$$

The function $V$ is a probabilistic Lyapunov function. Define

$$
Y_t=V(X_{t\wedge\tau})+\delta(t\wedge\tau).
$$

On $t\ge\tau$, $Y$ is unchanged. On $t<\tau$, inequality (42.1) shows
$\mathbb E[Y_{t+1}\mid\mathcal F_t]\le Y_t$. Hence $Y_t$ is a
supermartingale. Taking expectations at a fixed time $n$ gives

$$
\mathbb E[V(X_{n\wedge\tau})]
+\delta\mathbb E[n\wedge\tau]
\le V(X_0).
$$

Discarding the nonnegative first term,

$$
\mathbb E[n\wedge\tau]\le\frac{V(X_0)}\delta.
$$

As $n$ grows, $n\wedge\tau$ increases to $\tau$. Monotone convergence yields

$$
\mathbb E\tau\le\frac{V(X_0)}\delta. \tag{42.2}
$$

A nonnegative random variable with finite expectation is finite almost surely,
so the target is reached with probability one in this model. The proof did not
require independent increments. It required the stronger conditional drift
inequality at every non-target history.

## Complete case study: a rational drift certificate

Consider states $H$ (high), $M$ (middle), and $A$ (absorbed), with transition
matrix, in that order,

$$
P=\begin{pmatrix}
1/4&3/4&0\\
1/4&0&3/4\\
0&0&1
\end{pmatrix}.
$$

Set

$$
V(H)=2,\qquad V(M)=1,\qquad V(A)=0.
$$

The conditional next potentials are

$$
PV(H)=\frac14(2)+\frac34(1)=\frac54,
$$

$$
PV(M)=\frac14(2)+\frac34(0)=\frac12.
$$

Thus the drift amounts are $3/4$ and $1/2$. Taking $\delta=1/2$ gives the
certificate

$$
PV(x)\le V(x)-\frac12
$$

outside $A$. The drift theorem proves

$$
\mathbb E_H\tau\le4,
\qquad
\mathbb E_M\tau\le2.
$$

We can solve the exact hitting times independently. First-step conditioning
gives

$$
h_H=1+\frac14h_H+\frac34h_M,
$$

$$
h_M=1+\frac14h_H.
$$

Substitution yields

$$
\frac9{16}h_H=\frac74,
\qquad
h_H=\frac{28}{9},
\qquad
h_M=\frac{16}{9}.
$$

The exact values lie below the certified bounds. A checker needs only rational
transition rows, the three rational potentials, the target label, and the
claimed $\delta$. It verifies row sums, nonnegativity, and two dot-product
inequalities.



The displayed rational calculation concerns this chain, not measured Collatz behaviour.

## Failure clinic: three tempting shortcuts

**Unconditional averaging.** Averaging drift over all residues may hide a small
state class with positive conditional drift. A universal conclusion must control
that class rather than average it away.

**Assuming the stopping event.** Writing $\mathbb E[M_\tau]=\mathbb E[M_0]$
before proving $\tau$ finite and the stopped family integrable uses the desired
conclusion as a hypothesis.

**Changing probability spaces.** Exact uniformity for every fixed prefix length
does not create one probability measure on positive integers that is uniform at
all scales. The compatible 2-adic measure exists, but positive integers are a
null subset and ordinary height is not controlled by it.

Each shortcut begins with a correct-looking formula. The audit must locate the
specific missing hypothesis, not merely label the whole approach “probabilistic.”

## Drift certificate versus pointwise rank

A rank function for deterministic termination satisfies

$$
R(F(x))<R(x)
$$

for every non-target state. A probabilistic drift certificate permits some
transitions to increase $V$ provided their conditional weighted average
decreases. The latter proves an almost-sure statement in its probability model;
the former proves termination of every represented path.

For the three-state chain, $H$ can transition to itself, so $V$ does not strictly
decrease on every step. The probability of leaving $H$ makes its expected next
value smaller. If one adversarially selected the self-loop forever, the path
would never absorb, although that infinite selection has probability zero under
the chain.

This distinction is exactly the universal Collatz barrier. A positive integer
orbit is one deterministic path, and it cannot be dismissed because a model
assigns its symbolic itinerary probability zero. A successful stochastic
transfer would need a theorem that converts modeled exceptional probability
into an arithmetic exceptional-set result with the advertised density. A
universal theorem then needs an additional mechanism eliminating the remaining
set entirely.

## Theorem-scope and failure audit

- Martingale and drift theorems require a declared probability space and
  information history.
- Conditional negative drift is stronger than a negative unconditional mean.
- Bounded optional stopping is safe; unbounded optional stopping needs further
  hypotheses.
- The rational three-state certificate is exact and independently checkable.
- Almost-sure target hitting may still allow a probability-zero exceptional
  path; the Collatz conjecture allows no exceptional positive integer.
- Exact one-step residue frequencies do not prove repeated fresh sampling.
- A deterministic graph potential and a probabilistic supermartingale are
  different certificate types.
- No known Collatz drift certificate satisfying all universal transfer
  obligations proves the conjecture.


## Exercises

### Exercise 1
<a id="deep-dive-collatz-stopped-drift-certificates-ex-1"></a>

A chain starts outside an absorbing target. At each step it reaches the target with probability one third and otherwise stays put. Use potential one outside and zero inside to bound and compute its expected hitting time.

<details>
<summary>Hint 1</summary>

Compute the conditional next potential outside the target.

</details>

<details>
<summary>Hint 2</summary>

Use a first-step equation for the exact expectation.

</details>

<details>
<summary>Solution</summary>

The next expected potential outside is two thirds, so the decrease is one third and the drift theorem bounds the expected hitting time by three. First-step conditioning gives $h=1+(2/3)h$, hence $h=3$, matching the bound. The waiting time is finite almost surely as a consequence, not an assumption needed for optional stopping at an unbounded time. The result concerns this declared chain and its transition probabilities.

</details>

### Exercise 2
<a id="deep-dive-collatz-stopped-drift-certificates-ex-2"></a>

Explain why a negative average log multiplier from independent fair parity bits does not supply the conditional drift hypothesis for every deterministic Collatz start.

<details>
<summary>Hint 1</summary>

The theorem conditions on each non-target history.

</details>

<details>
<summary>Hint 2</summary>

A deterministic next step is fixed unless a sampling rule has been introduced.

</details>

<details>
<summary>Solution</summary>

The drift theorem requires an inequality for the conditional next potential at every relevant history under a specified probability law. Independent fair bits define one law; a fixed Collatz orbit has branch choices determined by arithmetic, and a negative expectation under the bit model does not prove the required conditional inequality there. Randomising a finite residue gives a legitimate but bounded sampling statement. A separate arithmetic transfer theorem, with its scope and history conditions proved, would be required for a universal positive-integer conclusion.

</details>

## Continue with the full argument

Return to the [research toolkit](#/books/collatz-research-toolkit/index) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
