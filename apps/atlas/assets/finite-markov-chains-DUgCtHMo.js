var e=`---
parent_id: book-stochastic-processes-paths
chapter_id: finite-markov-chains
title: "Discrete-time Markov Chains"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Discrete-time Markov Chains

## Motivation: memory in random motion

Imagine a particle moving among a finite set of states. At each step it jumps to a new state according to probabilities that depend only on its current location, not on how it got there. This **Markov property** — that the future is conditionally independent of the past given the present — is both a powerful modelling assumption and a mathematically fruitful restriction.

Markov chains model queues, genetic inheritance, board games, web surfing, chemical reactions, and countless other phenomena. Their tractability comes from linear algebra: transition probabilities evolve by matrix powers, stationary distributions solve linear equations, and hitting probabilities solve boundary-value problems.

## Definition and the Markov property

Let $S$ be a finite set, called the **state space**. A **Markov chain** $(X_{n})_{n \\ge 0}$ with state space $S$ is a sequence of $S$-valued random variables such that for all $n \\ge 0$ and all states $i_{0}, i_{1}, \\dots, i_{n+1}$ whose conditioning history has positive probability,
$$\\mathbb{P}(X_{n+1}=i_{n+1} \\mid X_{0}=i_{0}, X_{1}=i_{1}, \\dots, X_{n}=i_{n}) = \\mathbb{P}(X_{n+1}=i_{n+1} \\mid X_{n}=i_{n}).$$

The chain is **time-homogeneous** if the right-hand side does not depend on $n$. Then there exists a **transition matrix** $P = (P_{ij})_{i,j \\in S}$ with $P_{ij} \\ge 0$ and $\\sum_{j} P_{ij} = 1$ for all $i$, such that
$$\\mathbb{P}(X_{n+1}=j \\mid X_{n}=i) = P_{ij}.$$ The conditional formula applies when $\\mathbb P(X_n=i)>0$; a transition row at a state never visited at any time may be chosen arbitrarily.

In matrix notation, if $\\mu_{n}$ is the row vector with $\\mu_{n}(i) = \\mathbb{P}(X_{n}=i)$, then
$$\\mu_{n+1} = \\mu_{n} P, \\qquad \\mu_{n} = \\mu_{0} P^{n}.$$

The Markov property can also be stated in terms of filtrations. Let $\\mathcal{F}_{n} = \\sigma(X_{0}, X_{1}, \\dots, X_{n})$. Then
$$\\mathbb{P}(X_{n+1}=j \\mid \\mathcal{F}_{n}) = P(X_{n}, j) \\quad \\text{almost surely.}$$

The almost-sure form is important: it avoids dividing by the probability of an impossible history.

## Chapman–Kolmogorov equations

**Theorem 2.1.** For any $m, n \\ge 0$ and any $i, j \\in S$,
$$P^{m+n}_{ij} = \\sum_{k \\in S} P^{m}_{ik} P^{n}_{kj}.$$

**Proof.** Condition on the intermediate state $X_{m}$:
$$\\mathbb{P}_{i}(X_{m+n}=j) = \\sum_{k} \\mathbb{P}_{i}(X_{m}=k) \\mathbb{P}(X_{m+n}=j \\mid X_{m}=k) = \\sum_{k} P^{m}_{ik} P^{n}_{kj}.$$
The Markov property and time homogeneity justify the second equality. In matrix form, this is simply $(P^{m})(P^{n}) = P^{m+n}$.

## Communication, irreducibility, and aperiodicity

State $j$ is **accessible** from state $i$, written $i \\to j$, if $P^{n}_{ij} > 0$ for some $n \\ge 0$. States $i$ and $j$ **communicate**, written $i \\leftrightarrow j$, if $i \\to j$ and $j \\to i$. Communication is an equivalence relation, partitioning $S$ into **communication classes**.

A chain is **irreducible** if there is only one communication class: every state can reach every other state.

The **period** of state $i$ is $d(i) = \\gcd\\{n \\ge 1 : P^{n}_{ii} > 0\\}$. If $d(i)=1$, the state is **aperiodic**. In an irreducible chain, all states share the same period. An irreducible, aperiodic chain is called **ergodic**.

## Stationary distributions

A probability distribution $\\pi$ on $S$ is **stationary** (or invariant, or equilibrium) if $\\pi P = \\pi$. In components,
$$\\pi_{j} = \\sum_{i} \\pi_{i} P_{ij} \\quad \\text{for all } j \\in S.$$

If $X_{0} \\sim \\pi$, then $X_{n} \\sim \\pi$ for all $n$: the distribution is preserved by the dynamics.

**Theorem 2.2.** Every finite-state Markov chain has at least one stationary distribution.

**Proof.** Fix any probability row $\\mu$ and define the Cesàro average $a_n=n^{-1}\\sum_{k=0}^{n-1}\\mu P^k$. Each $a_n$ belongs to the compact finite-dimensional probability simplex, so some subsequence converges to a probability row $\\pi$. Furthermore,
$$
a_nP-a_n=\\frac{\\mu P^n-\\mu}{n}.
$$
The right side tends to zero in every coordinate. Passing to the convergent subsequence and using continuity of multiplication by $P$ gives $\\pi P=\\pi$. No irreducibility or aperiodicity was used. ∎

**Theorem 2.3 (uniqueness for irreducible chains).** If the finite chain is irreducible, its stationary distribution is strictly positive and unique.

**Proof.** Choose a state $i$ with $\\pi_i>0$. For any $j$, irreducibility supplies $n$ with $(P^n)_{ij}>0$, whence
$$
\\pi_j=(\\pi P^n)_j\\ge\\pi_i(P^n)_{ij}>0.
$$
If $\\nu$ is another stationary probability row, set $r=\\min_j\\nu_j/\\pi_j$. Then $w=\\nu-r\\pi$ is nonnegative and stationary, and at least one of its coordinates is zero. If any coordinate were positive, the same irreducibility argument would make every coordinate positive, a contradiction. Thus $w=0$. Since both probabilities sum to one, $r=1$ and $\\nu=\\pi$. ∎

## Convergence to stationarity

**Theorem 2.4 (finite-chain convergence; cited).** Let $P$ be the transition matrix of a finite, irreducible, aperiodic Markov chain with stationary distribution $\\pi$. Then for every initial state $i$,
$$P^{n}_{ij} \\to \\pi_{j} \\quad \\text{as } n \\to \\infty.$$

The general convergence argument is supplied by Durrett, *Probability: Theory and Examples*, fifth edition, Theorem 5.6.6. The following explicit example shows why its period assumption is material.

Aperiodicity is essential. Consider the two-state chain with transition matrix
$$P = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}.$$

This chain is irreducible with period $2$. Its unique stationary distribution is $\\pi = (1/2, 1/2)$. But $P^{n}$ alternates:
$$P^{n} = \\begin{cases} I & \\text{if } n \\text{ is even}, \\\\ P & \\text{if } n \\text{ is odd}. \\end{cases}$$
So $P^{n}_{00}$ oscillates between $1$ and $0$, never converging to $1/2$.

**Common error.** Students often claim that irreducibility alone implies convergence. It does not: periodicity can cause oscillation. However, the **Cesàro averages** $(1/n)\\sum_{k=0}^{n-1} P^{k}$ always converge to a matrix whose rows are stationary distributions.

## Return times and the stationary distribution

For state $i$, let $T_{i} = \\min\\{n \\ge 1 : X_{n}=i\\}$ be the **first return time**. State $i$ is **positive recurrent** if $\\mathbb{E}_{i}[T_{i}] < \\infty$.

**Theorem 2.5 (return-time formula).** For a finite irreducible chain, every state is positive recurrent, and
$$\\pi_{i} = \\frac{1}{\\mathbb{E}_{i}[T_{i}]}.$$

**Interpretation.** In a long stationary path, the fraction of time spent at state $i$ is $\\pi_{i}$. Visits to $i$ are spaced by mean time $1/\\pi_{i}$.

**Proof sketch.** Let $N_{i}(n) = \\sum_{k=0}^{n-1} \\mathbf{1}_{\\{X_{k}=i\\}}$ be the number of visits to $i$ by time $n$. By the strong law of large numbers for regenerative processes, $N_{i}(n)/n \\to 1/\\mathbb{E}_{i}[T_{i}]$ almost surely. But for a stationary chain, $\\mathbb{E}[N_{i}(n)]/n = \\pi_{i}$. Equating limits gives the result.

## Hitting probabilities and expected hitting times

Let $A \\subset S$ be a nonempty set of target states and $B \\subset S$ a nonempty set of forbidden states, with $A \\cap B = \\emptyset$. Define $T_{A} = \\min\\{n \\ge 0 : X_{n} \\in A\\}$ and similarly $T_{B}$.

**Hitting probabilities.** The function $h(i) = \\mathbb{P}_{i}(T_{A} < T_{B})$ satisfies:
- $h(i) = 1$ for $i \\in A$,
- $h(i) = 0$ for $i \\in B$,
- $h(i) = \\sum_{j} P_{ij} h(j)$ for $i \\notin A \\cup B$.

The last equation is **first-step analysis**: condition on the first jump and use the Markov property.

**Expected hitting times.** The function $e(i) = \\mathbb{E}_{i}[T_{A}]$ (with $B = \\emptyset$) satisfies:
- $e(i) = 0$ for $i \\in A$,
- $e(i) = 1 + \\sum_{j} P_{ij} e(j)$ for $i \\notin A$.

If the chain hits $A\\cup B$ almost surely from every state under consideration, the displayed boundary-value problem has a unique bounded solution $h$. If it hits $A$ with finite mean from every state, the expected-time equations have a unique finite solution $e$. A finite irreducible chain and a nonempty target satisfy these conditions. Finiteness of the state space alone is not enough; without accessibility, the hitting equations can be nonunique and the expected time can be infinite.

## Worked example: a three-state chain

Consider the transition matrix
$$P = \\begin{pmatrix} 0.5 & 0.3 & 0.2 \\\\ 0.2 & 0.5 & 0.3 \\\\ 0.3 & 0.2 & 0.5 \\end{pmatrix}.$$

This chain is irreducible and aperiodic (since $P_{ii} > 0$ for all $i$). To find the stationary distribution, solve $\\pi P = \\pi$ with $\\sum_{i} \\pi_{i} = 1$.

By symmetry of the cyclic structure, try $\\pi = (1/3, 1/3, 1/3)$. Check:
$$(\\pi P)_{1} = \\tfrac{1}{3}(0.5 + 0.2 + 0.3) = \\tfrac{1}{3} = \\pi_{1}.$$
Similarly for the other components. So $\\pi = (1/3, 1/3, 1/3)$ is stationary.

Now compute $P^{2}$:
$$P^{2}_{11} = 0.5 \\cdot 0.5 + 0.3 \\cdot 0.2 + 0.2 \\cdot 0.3 = 0.25 + 0.06 + 0.06 = 0.37.$$

By the convergence theorem, $P^{n}_{11} \\to 1/3 \\approx 0.333$ as $n \\to \\infty$.

## Worked example: gambler's ruin hitting probabilities

A gambler with $i$ dollars bets repeatedly on fair coin flips, winning or losing $1$ dollar each time. The game ends when the gambler reaches $N$ dollars (win) or $0$ dollars (ruin). What is the probability of winning?

Let $h(i) = \\mathbb{P}_{i}(\\text{hit } N \\text{ before } 0)$. First-step analysis gives:
$$h(i) = \\tfrac{1}{2} h(i-1) + \\tfrac{1}{2} h(i+1), \\quad 1 \\le i \\le N-1,$$
with $h(0)=0$ and $h(N)=1$.

This is a linear recurrence with characteristic equation $r = \\tfrac{1}{2} + \\tfrac{1}{2} r^{2}$, giving $r=1$ as a double root. The general solution is $h(i) = A + Bi$. Boundary conditions give $A=0$ and $B=1/N$, so
$$h(i) = \\frac{i}{N}.$$

**Verification.** For $N=10$ and $i=3$, $h(3) = 0.3$. Check the recurrence: $\\tfrac{1}{2}(2/10) + \\tfrac{1}{2}(4/10) = 3/10$. The boundary values are $0$ and $1$. Uniqueness for the finite linear system confirms this is the answer.

## Worked example: an exact two-state convergence law

Take
$$
P=\\begin{pmatrix}3/4&1/4\\\\1/2&1/2\\end{pmatrix}
$$
and start in state zero. Writing $r_n=P(X_n=0)$, conditioning gives
$$
r_{n+1}=\\tfrac34r_n+\\tfrac12(1-r_n)
=\\tfrac12+\\tfrac14r_n.
$$
Its fixed point is $2/3$. Subtracting that fixed point gives $r_{n+1}-2/3=(r_n-2/3)/4$, hence
$$
r_n=\\tfrac23+\\tfrac13\\,4^{-n}.
$$
Thus the exact distribution is $(2/3+4^{-n}/3,\\ 1/3-4^{-n}/3)$, and its total-variation distance from $(2/3,1/3)$ is $4^{-n}/3$. This calculation supplies a rate for this particular kernel; the general convergence theorem alone did not supply the number.

Detailed balance holds because $(2/3)(1/4)=(1/3)(1/2)=1/6$. The return-time formula gives mean first return to zero of $3/2$ updates. A return may happen after one update through the self-loop, so a noninteger mean is entirely consistent with an integer-valued return time.

## Common errors and misconceptions

**Error 1: Forgetting aperiodicity.** Students often state that $P^{n} \\to \\Pi$ (the matrix with all rows equal to $\\pi$) for any irreducible chain. This fails for periodic chains, as shown by the alternating chain above.

**Error 2: Assuming finiteness guarantees uniqueness.** Let $P=I$ on $\\{0,1\\}$ and take target $A=\\{1\\}$. The boundary condition fixes $h(1)=1$, but the equation at $0$ is merely $h(0)=h(0)$; the actual hitting probability $h(0)=0$ is the minimal nonnegative solution. For expected time, the formal equation $e(0)=1+e(0)$ has no finite solution because $T_A=\\infty$ from $0$. Accessibility or almost-sure absorption is the material condition.

**Error 3: Stationary vs. limiting distribution.** A chain may have a stationary distribution that is not a limiting distribution. The periodic two-state chain has $\\pi = (1/2, 1/2)$ stationary, but $P^{n}$ does not converge.

## Practice exercises

### Exercise 1

<a id="stochastic-finite-markov-chains-original-ex-1"></a>

For the transition matrix
$$P = \\begin{pmatrix} 0.7 & 0.3 \\\\ 0.4 & 0.6 \\end{pmatrix},$$
find the stationary distribution $\\pi$ and compute $P^{10}$ numerically. Verify that $P^{10}_{ij} \\approx \\pi_{j}$.

<details>
<summary>Hint</summary>

Write the first-step or stationarity equations and check every endpoint separately.

</details>
<details>
<summary>Solution</summary>

**Solution.** Solve $\\pi P = \\pi$ with $\\pi_{0} + \\pi_{1} = 1$:
$$\\pi_{0} = 0.7 \\pi_{0} + 0.4 \\pi_{1}, \\quad \\pi_{1} = 0.3 \\pi_{0} + 0.6 \\pi_{1}.$$
From the first equation: $0.3 \\pi_{0} = 0.4 \\pi_{1}$, so $\\pi_{0}/\\pi_{1} = 4/3$. With $\\pi_{0} + \\pi_{1} = 1$, we get $\\pi_{0} = 4/7 \\approx 0.571$ and $\\pi_{1} = 3/7 \\approx 0.429$.

The eigenvalues of $P$ are $1$ and $0.3$. If $\\Pi$ has both rows equal to $\\pi$, then

$$P^n=\\Pi+(0.3)^n(I-\\Pi)\\qquad(n\\ge0),$$

equivalently $P^n=\\Pi+(0.3)^{n-1}(P-\\Pi)$ for $n\\ge1$. Thus $P^n\\to\\Pi$. For $n=10$, $(0.3)^{10}\\approx5.9\\times10^{-6}$, so $P^{10}$ is extremely close to $\\Pi$.

</details>

### Exercise 2

<a id="stochastic-finite-markov-chains-original-ex-2"></a>

A particle moves on $\\{0,1,2,3,4\\}$ with reflecting boundaries: from $0$ it moves to $1$ with probability $1$; from $4$ it moves to $3$ with probability $1$; from interior states it moves left or right with probability $1/2$ each. Find the expected time to hit state $4$ starting from state $0$.

<details>
<summary>Hint</summary>

Write the first-step or stationarity equations and check every endpoint separately.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $e(i) = \\mathbb{E}_{i}[T_{4}]$. Then $e(4)=0$ and for $i=0,1,2,3$:
$$e(0) = 1 + e(1),$$
$$e(1) = 1 + \\tfrac{1}{2} e(0) + \\tfrac{1}{2} e(2),$$
$$e(2) = 1 + \\tfrac{1}{2} e(1) + \\tfrac{1}{2} e(3),$$
$$e(3) = 1 + \\tfrac{1}{2} e(2) + \\tfrac{1}{2} e(4) = 1 + \\tfrac{1}{2} e(2).$$

Substituting $e(0) = 1 + e(1)$ into the second equation:
$$e(1) = 1 + \\tfrac{1}{2}(1 + e(1)) + \\tfrac{1}{2} e(2) = 1.5 + 0.5 e(1) + 0.5 e(2),$$
so $0.5 e(1) = 1.5 + 0.5 e(2)$, giving $e(1) = 3 + e(2)$.

From $e(3) = 1 + 0.5 e(2)$ and $e(2) = 1 + 0.5 e(1) + 0.5 e(3)$:
$$e(2) = 1 + 0.5(3 + e(2)) + 0.5(1 + 0.5 e(2)) = 1 + 1.5 + 0.5 e(2) + 0.5 + 0.25 e(2) = 3 + 0.75 e(2).$$
Thus $0.25 e(2) = 3$, so $e(2) = 12$. Then $e(1) = 15$, $e(0) = 16$, and $e(3) = 7$.

</details>

### Exercise 3

<a id="stochastic-finite-markov-chains-original-ex-3"></a>

Show that if $P$ is the transition matrix of an irreducible Markov chain and $P_{ii} > 0$ for some $i$, then the chain is aperiodic.

<details>
<summary>Hint</summary>

Write the first-step or stationarity equations and check every endpoint separately.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $P_{ii} > 0$, the set $\\{n \\ge 1 : P^{n}_{ii} > 0\\}$ contains $1$. The period $d(i)$ divides every element of this set, so $d(i) = 1$. In an irreducible chain, all states share the same period, so the chain is aperiodic.

</details>


## Further development from proof-based probability

The following arguments and exercises extend the preceding treatment. They bring together the complementary material previously taught in the probability book; its exercise identifiers and mathematical hypotheses are preserved. The original three questions above remain separate exercises.

## Mixing by coupling and spectra

Total variation mixing distance is

$d(t)=\\max_{x} \\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}$.

If chains begun at $x$ and stationarity are coupled so that they move together forever after their coupling time $T$, then $\\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}\\le \\mathbb{P}(T>t)$. Merely defining $T$ as the first time two arbitrary chains meet is insufficient: a non-coalescent coupling may let them separate again. For a finite irreducible reversible chain, the transition operator is self-adjoint in $L^{2}(\\pi )$. If the absolute nontrivial eigenvalue radius is $\\lambda_*<1$, Cauchy–Schwarz gives

$\\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}\\le (1/2)\\sqrt{1/\\pi (x)} \\lambda_*^{t}$.

The absolute value matters: a negative eigenvalue near $-1$ also slows an unlazied chain.

## Markov-chain audit

1. Is the state sufficient for the Markov property, or was history omitted?
2. Are matrix conventions row-stochastic and used consistently?
3. Are irreducibility and aperiodicity both checked before claiming convergence?
4. Is a stationary law distinguished from the current law?
5. Is reversibility proved rather than inferred from stationarity?
6. Does a hitting-time equation include boundary values and the correct stopping convention?
7. Is a mixing bound tied to a declared metric and initial state?

## Further exercises with complete solutions

### 1. Kernel audit

**Exercise S3.1**

<a id="finite-markov-chains-ex-1"></a>

Is $[[0.2,0.8],[0.4,0.5]]$ a transition matrix?

<details>
<summary>Hint 1</summary>

A transition matrix must have nonnegative entries and every row sum one.

</details>

<details>
<summary>Hint 2</summary>

The second proposed row sums to $0.9$, so it does not specify a probability distribution.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Its second row sums to $0.9$, not one.

</details>

### 2. Two-step transition

**Exercise S3.2**

<a id="finite-markov-chains-ex-2"></a>

For $P=[[1/2,1/2],[1/4,3/4]]$, find $P^{2}(0,0)$.

<details>
<summary>Hint 1</summary>

Matrix multiplication sums over possible intermediate states.

</details>

<details>
<summary>Hint 2</summary>

Compute $P(0,0)P(0,0)+P(0,1)P(1,0)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Condition on the intermediate state: $(1/2)(1/2)+(1/2)(1/4)=3/8$.

</details>

### 3. Path mass

**Exercise S3.3**

<a id="finite-markov-chains-ex-3"></a>

With initial state zero and the kernel above, find $\\mathbb{P}(X_{1}=1,X_{2}=1)$.

<details>
<summary>Hint 1</summary>

Use the product formula for a specified path from its given start.

</details>

<details>
<summary>Hint 2</summary>

Multiply the transition probability from zero to one by the probability from one to one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiply transitions $\\mathbb{P}(0,1)\\mathbb{P}(1,1)=(1/2)(3/4)=3/8$.

</details>

### 4. Markov sufficiency failure

**Exercise S3.4**

<a id="finite-markov-chains-ex-4"></a>

Why may position alone fail to be Markov for a walk that keeps moving in its previous direction with probability $0.9$?

<details>
<summary>Hint 1</summary>

A position alone may not determine the conditional distribution of the next step.

</details>

<details>
<summary>Hint 2</summary>

Include the persistent direction in the state to retain the predictive information.

</details>

<details>
<summary>Solution</summary>

**Solution.** The next-position law depends on the previous direction, which is not determined by current position. Adding direction to the state repairs the Markov representation.

</details>

### 5. Communicating classes

**Exercise S3.5**

<a id="finite-markov-chains-ex-5"></a>

For edges $0\\to 1$, $1\\to 0$, $1\\to 2$, $2\\to 2$, identify classes.

<details>
<summary>Hint 1</summary>

Find which states can reach each other in both directions.

</details>

<details>
<summary>Hint 2</summary>

The class containing zero and one has an exit to two, while the singleton two has no exit.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\{0,1\\}$ is one communicating class but is not closed because of $1\\to 2$; $\\{2\\}$ is a closed class.

</details>

### 6. Harmonic hitting equation

**Exercise S3.6**

<a id="finite-markov-chains-ex-6"></a>

Derive the hitting equation outside $A\\cup B$.

<details>
<summary>Hint 1</summary>

Condition the eventual-hit event on the first transition.

</details>

<details>
<summary>Hint 2</summary>

For a nonboundary state, the hitting probability is the transition-weighted average of the probabilities from the next state.

</details>

<details>
<summary>Solution</summary>

**Solution.** Condition on $X_{1}=y$. By the Markov property, the remaining success probability is $h(y)$, so total probability yields $h(x)=\\sum_{y}\\mathbb{P}(x,y)h(y)$.

</details>

### 7. Gambler's ruin probability

**Exercise S3.7**

<a id="finite-markov-chains-ex-7"></a>

For simple symmetric walk on $\\{0,...,N\\}$ absorbed at endpoints, find the chance of hitting $N$ before zero from $i$.

<details>
<summary>Hint 1</summary>

Use the first-step harmonic equation at interior states.

</details>

<details>
<summary>Hint 2</summary>

The equation makes successive differences constant; impose boundary values zero and one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Harmonicity gives $h(i)=[h(i-1)+h(i+1)]/2$, so differences are constant. Boundary values $h(0)=0,h(N)=1$ give $h(i)=i/N$.

</details>

### 8. Stationary two-state law

**Exercise S3.8**

<a id="finite-markov-chains-ex-8"></a>

For $P=[[1-a,a],[b,1-b]]$ with $a,b>0$, find $\\pi$.

<details>
<summary>Hint 1</summary>

Solve $\\pi P=\\pi$ together with total mass one.

</details>

<details>
<summary>Hint 2</summary>

The balance equation is $\\pi_0a=\\pi_1b$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Balance flow $\\pi_{0}a=\\pi_{1}b$ and normalise, obtaining $\\pi =(b/(a+b),a/(a+b))$.

</details>

### 9. Verify graph stationarity

**Exercise S3.9**

<a id="finite-markov-chains-ex-9"></a>

Prove degree-proportional stationarity for simple random walk on a finite undirected graph with no isolated vertices and at least one edge.

<details>
<summary>Hint 1</summary>

For a simple random walk on an undirected graph, check detailed balance across an edge.

</details>

<details>
<summary>Hint 2</summary>

Weights proportional to degree cancel the reciprocal degree transition probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** For an edge, $\\pi(x)P(x,y)=\\operatorname{deg}(x)/(2\\lvert E\\rvert)\\cdot 1/\\operatorname{deg}(x)=1/(2\\lvert E\\rvert)$, symmetric in $x,y$. Detailed balance implies stationarity.

</details>

### 10. Stationary but not reversible

**Exercise S3.10**

<a id="finite-markov-chains-ex-10"></a>

Show the deterministic three-cycle is not reversible.

<details>
<summary>Hint 1</summary>

Uniform mass is stationary for the directed cycle.

</details>

<details>
<summary>Hint 2</summary>

Reversibility would require reverse flow along each directed edge, which this chain lacks.

</details>

<details>
<summary>Solution</summary>

**Solution.** Uniform law is stationary under rotation. But $\\pi (0)\\mathbb{P}(0,1)=1/3$ while $\\pi (1)\\mathbb{P}(1,0)=0$, violating detailed balance.

</details>

### 11. Period two

**Exercise S3.11**

<a id="finite-markov-chains-ex-11"></a>

Find the period of the alternating two-state chain.

<details>
<summary>Hint 1</summary>

List the times at which the chain can return to its starting state.

</details>

<details>
<summary>Hint 2</summary>

Only even positive times occur, and their greatest common divisor is two.

</details>

<details>
<summary>Solution</summary>

**Solution.** Returns occur exactly at positive even times, whose gcd is two.

</details>

### 12. Laziness

**Exercise S3.12**

<a id="finite-markov-chains-ex-12"></a>

Show $\\mathbb{P}_{L}=(I+P)/2$ preserves any stationary $\\pi$.

<details>
<summary>Hint 1</summary>

Multiply a stationary row vector by $(I+P)/2$.

</details>

<details>
<summary>Hint 2</summary>

Both $\\pi I$ and $\\pi P$ equal $\\pi$; a positive self-loop also supplies a one-step return.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\pi \\mathbb{P}_{L}=(\\pi +\\pi P)/2=(\\pi +\\pi )/2=\\pi$.

</details>

### 13. Reducible stationary laws

**Exercise S3.13**

<a id="finite-markov-chains-ex-13"></a>

If states zero and one are both absorbing, describe stationary laws.

<details>
<summary>Hint 1</summary>

A closed communicating class can support its own stationary law.

</details>

<details>
<summary>Hint 2</summary>

Distinct closed classes can yield different stationary distributions and their convex mixtures.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every mixture $(q,1-q)$ is unchanged by the identity kernel, so uniqueness fails.

</details>

### 14. TV of binary laws

**Exercise S3.14**

<a id="finite-markov-chains-ex-14"></a>

Find TV distance between Bernoulli $p$ and Bernoulli $q$.

<details>
<summary>Hint 1</summary>

Use the half-$L^1$ formula on the two-point state space.

</details>

<details>
<summary>Hint 2</summary>

The two mass discrepancies have equal absolute size, leaving the difference in one success probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** Half the absolute mass difference sum is $(1/2)(\\lvert p-q\\rvert +\\lvert (1-p)-(1-q)\\rvert )=\\lvert p-q\\rvert$.

</details>

### 15. Coupling bound

**Exercise S3.15**

<a id="finite-markov-chains-ex-15"></a>

If a coalescent coupling has coupling time $T$ with $\\mathbb{P}(T>t)\\le 3(0.8)^{t}$, bound its marginal TV distance.

<details>
<summary>Hint 1</summary>

After coalescence, the two coupled chains agree at every later time.

</details>

<details>
<summary>Hint 2</summary>

Disagreement at time $t$ is contained in $\\{T>t\\}$; also cap any total-variation bound by one.

</details>

<details>
<summary>Solution</summary>

**Solution.** The coupling inequality gives at most $\\min(1,3(0.8)^{t})$.

</details>

### 16. Eigenvalues of a symmetric two-state chain

**Exercise S3.16**

<a id="finite-markov-chains-ex-16"></a>

For $P=[[1-a,a],[a,1-a]]$, find eigenvalues.

<details>
<summary>Hint 1</summary>

Find the two eigenvalues of the symmetric two-state transition matrix.

</details>

<details>
<summary>Hint 2</summary>

The constant direction has eigenvalue one, and the contrast direction has the other eigenvalue.

</details>

<details>
<summary>Solution</summary>

**Solution.** Vectors $(1,1)$ and $(1,-1)$ have eigenvalues $1$ and $1-2a$. The absolute nontrivial radius is $\\lvert 1-2a\\rvert$.

</details>

### 17. Negative eigenvalue warning

**Exercise S3.17**

<a id="finite-markov-chains-ex-17"></a>

Why does $1-\\lambda_{2}$ alone misdescribe the alternating chain?

<details>
<summary>Hint 1</summary>

Calculate the nonconstant eigenvalue of the alternating kernel.

</details>

<details>
<summary>Hint 2</summary>

It equals minus one, so its absolute value is one and its powers do not decay despite the value of $1-\\lambda_2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its nontrivial eigenvalue is $-1$: although $1-(-1)=2$, powers do not contract because the absolute eigenvalue is one. Laziness or an absolute spectral gap is needed.

</details>

### 18. Kac calculation

**Exercise S3.18**

<a id="finite-markov-chains-ex-18"></a>

If $\\pi(x)=1/5$ in a finite irreducible chain, what is $\\mathbb{E}_{x}[T_{x}^{+}]$?

<details>
<summary>Hint 1</summary>

Check that the finite irreducible-chain return-time identity applies.

</details>

<details>
<summary>Hint 2</summary>

Take the reciprocal of stationary mass $1/5$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Kac's identity gives $1/\\pi (x)=5$.

</details>

### 19. Empirical occupation under stationarity

**Exercise S3.19**

<a id="finite-markov-chains-ex-19"></a>

If $X_{0}\\sim \\pi$, find $\\mathbb{E}[(1/n)\\sum_{k=0}^{n-1}\\mathbf{1}_{X_{k}=x}]$.

<details>
<summary>Hint 1</summary>

Stationarity gives the same marginal distribution at every time.

</details>

<details>
<summary>Hint 2</summary>

Take the expectation term by term in the empirical occupation average; independence is unnecessary.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every time marginal is $\\pi$, so linearity gives $(1/n)n\\pi (x)=\\pi (x)$; independence is unnecessary.

</details>

### 20. Aperiodicity criterion

**Exercise S3.20**

<a id="finite-markov-chains-ex-20"></a>

In an irreducible finite chain, show one positive self-loop implies period one for every state.

<details>
<summary>Hint 1</summary>

The period is the greatest common divisor of possible positive return times.

</details>

<details>
<summary>Hint 2</summary>

A positive self-loop gives return time one, forcing period one for the communicating class.

</details>

<details>
<summary>Solution</summary>

**Solution.** The self-loop state has return time one, hence period one. Period is constant across an irreducible communicating class, so every state has period one.

</details>


## Investigation: a three-state mixing audit

Study

$P=[[1/2,1/2,0],[1/4,1/2,1/4],[0,1/2,1/2]]$.

Find its stationary law, verify reversibility, compute eigenvalues, and give a spectral TV bound from each starting state.

**Worked solution.** Symmetry suggests weights proportional to $(1,2,1)$, so $\\pi =(1/4,1/2,1/4)$. Edge flows are $\\pi_{0}\\mathbb{P}(0,1)=1/8=\\pi_{1}\\mathbb{P}(1,0)$ and similarly on the edge joining states $1$ and $2$; loops are automatic, proving detailed balance. Direct multiplication shows eigenvectors $(1,1,1)$, $(1,0,-1)$, and $(1,-1,1)$ with eigenvalues $1,1/2,0$. Thus $\\lambda_*=1/2$. The bound is

$\\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}\\le (1/2)\\sqrt{1/\\pi (x)}2^{-t}$.

It equals $2^{-t}$ from endpoints and $2^{-t}/\\sqrt{2}$ from the middle. These are valid upper bounds, not necessarily exact distances. Exact matrix powers can audit them without replacing the proof.


## Sources

This chapter combines Euler's original stochastic-process and proof-based probability treatments. Specific cited theorems retain their attributions. See Rick Durrett, *Probability: Theory and Examples*, fifth edition, and the book's reference guide. Exercises retain their original semantic identifiers.

## Summary

A transition law and an initial distribution specify the path law. Stationarity concerns preservation; convergence needs additional communication and period assumptions. First-step equations require boundary conditions and absorption hypotheses. Coupling and reversible spectral estimates quantify convergence rather than inferring it from a stationary solution.
`;export{e as default};