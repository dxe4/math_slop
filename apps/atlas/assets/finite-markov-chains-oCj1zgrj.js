var e=`---
parent_id: book-probability-models-proofs
chapter_id: finite-markov-chains
title: "Finite Markov Chains, Recurrence, and Mixing"
level: advanced-undergraduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Finite Markov Chains, Recurrence, and Mixing

A Markov chain is not merely a random walk picture. It is a law on paths whose next-state conditional distribution depends on the present state through a declared transition kernel. This chapter develops finite chains, communication, recurrence, stationary laws, time reversal, spectral and coupling bounds, and the precise hypotheses behind convergence to equilibrium.

## 1. Transition kernels and path laws

On finite state space $S$, a transition matrix $P=(\\mathbb{P}(x,y))$ has nonnegative entries and row sums one. A process $(X_{n})$ is Markov with kernel $P$ when

$\\mathbb{P}(X_{n+1}=y \\mid X_{0},...,X_{n})=\\mathbb{P}(X_{n},y)$

on conditioning events of positive probability. Given initial row law $\\mu$, the path mass is

$\\mu (x_{0})\\prod_{k=0}^{n-1}\\mathbb{P}(x_{k},x_{k+1})$.

The Chapman–Kolmogorov identity $P^{m+n}=P^{m}P^{n}$ follows by conditioning on the state at time $m$. Thus $\\mu P^{n}$ is the time-$n$ law.

## 2. Classes, hitting, and recurrence

Write $x\\to y$ if $P^{n}(x,y)>0$ for some $n\\ge 0$; states communicate when each reaches the other. Communication is an equivalence relation. A closed class has no transition leaving it. Every finite chain eventually enters some closed communicating class with probability one.

For disjoint $A,B\\subseteq S$, let $\\tau_{A}=\\inf\\{n\\ge 0:X_{n}\\in A\\}$. The hitting probabilities $h(x)=\\mathbb{P}_{x}(\\tau_{A}<\\tau_{B})$ satisfy boundary values $h=1$ on $A$, $h=0$ on $B$, and the harmonic equations

$h(x)=\\sum_{y}\\mathbb{P}(x,y)h(y)$ outside $A\\cup B$.

In a finite irreducible chain every state is positive recurrent. If $T_{x}^{+}=\\inf\\{n\\ge 1:X_{n}=x\\}$, then the stationary mass obeys Kac's identity $\\pi(x)=1/\\mathbb{E}_{x}[T_{x}^{+}]$. This identity is imported from Durrett, *Probability: Theory and Examples*, 5th ed., Theorem 5.5.11, pp. 305--306.

## 3. Stationarity and reversibility

A row probability $\\pi$ is stationary when $\\pi P=\\pi$. Every finite chain has at least one stationary distribution; irreducibility makes it unique and strictly positive. Reducible chains may have a simplex of stationary laws supported on closed classes.

Detailed balance,

$\\pi (x)\\mathbb{P}(x,y)=\\pi (y)\\mathbb{P}(y,x)$,

implies stationarity after summing in $x$. Such a chain is reversible in stationarity. Stationarity need not imply detailed balance: a deterministic directed cycle has uniform stationary law but carries a one-way probability current.

For a random walk on a finite undirected graph with no isolated vertices, $P(x,y)=1/\\operatorname{deg}(x)$ along edges and

$\\pi(x)=\\operatorname{deg}(x)/(2\\lvert E\\rvert)$

satisfies detailed balance, where $E$ is the edge set.

## 4. Periodicity and convergence

The period of $x$ is the gcd of $\\{n\\ge 1:P^{n}(x,x)>0\\}$. All states in an irreducible class have the same period. Irreducibility alone does not imply $P^{n}(x,\\cdot )\\to \\pi$: the two-state alternating chain has period two. A finite irreducible aperiodic chain is ergodic and converges to its unique stationary law in total variation. This convergence theorem is imported from Durrett, 5th ed., Theorem 5.6.6, beginning on p. 313.

Adding laziness $\\mathbb{P}_{L}=(I+P)/2$ preserves $\\pi$ and gives every state a positive self-loop, hence period one. It changes time scale but removes parity oscillation within every communicating class.

## 5. Mixing by coupling and spectra

Total variation mixing distance is

$d(t)=\\max_{x} \\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}$.

If chains begun at $x$ and stationarity are coupled so that they move together forever after their coupling time $T$, then $\\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}\\le \\mathbb{P}(T>t)$. Merely defining $T$ as the first time two arbitrary chains meet is insufficient: a non-coalescent coupling may let them separate again. For a finite irreducible reversible chain, the transition operator is self-adjoint in $L^{2}(\\pi )$. If the absolute nontrivial eigenvalue radius is $\\lambda_*<1$, Cauchy–Schwarz gives

$\\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}\\le (1/2)\\sqrt{1/\\pi (x)} \\lambda_*^{t}$.

The absolute value matters: a negative eigenvalue near $-1$ also slows an unlazied chain.

## 6. Markov-chain audit

1. Is the state sufficient for the Markov property, or was history omitted?
2. Are matrix conventions row-stochastic and used consistently?
3. Are irreducibility and aperiodicity both checked before claiming convergence?
4. Is a stationary law distinguished from the current law?
5. Is reversibility proved rather than inferred from stationarity?
6. Does a hitting-time equation include boundary values and the correct stopping convention?
7. Is a mixing bound tied to a declared metric and initial state?

## 7. Exercises with complete solutions

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

**Solution.** Balance flow $\\pi_{0}a=\\pi_{1}b$ and normalize, obtaining $\\pi =(b/(a+b),a/(a+b))$.

</details>

### 9. Verify graph stationarity

**Exercise S3.9**

<a id="finite-markov-chains-ex-9"></a>

Prove degree-proportional stationarity for undirected random walk.

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


## 8. Investigation: a three-state mixing audit

Study

$P=[[1/2,1/2,0],[1/4,1/2,1/4],[0,1/2,1/2]]$.

Find its stationary law, verify reversibility, compute eigenvalues, and give a spectral TV bound from each starting state.

**Worked solution.** Symmetry suggests weights proportional to $(1,2,1)$, so $\\pi =(1/4,1/2,1/4)$. Edge flows are $\\pi_{0}\\mathbb{P}(0,1)=1/8=\\pi_{1}\\mathbb{P}(1,0)$ and similarly on the edge joining states $1$ and $2$; loops are automatic, proving detailed balance. Direct multiplication shows eigenvectors $(1,1,1)$, $(1,0,-1)$, and $(1,-1,1)$ with eigenvalues $1,1/2,0$. Thus $\\lambda_*=1/2$. The bound is

$\\lVert P^{t}(x,\\cdot )-\\pi \\rVert_{TV}\\le (1/2)\\sqrt{1/\\pi (x)}2^{-t}$.

It equals $2^{-t}$ from endpoints and $2^{-t}/\\sqrt{2}$ from the middle. These are valid upper bounds, not necessarily exact distances. Exact matrix powers can audit them without replacing the proof.

## Sources and retained-continuation status

This chapter remains available with its original semantic chapter ID, original mathematical development, exercises, investigations, and source attributions. It is a retained continuation rather than a numbered step in the twenty-chapter main route. The added exercise hints are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) supplies the primary probability reference; more specific imported-result and transport references remain identified where those results are used.


## 9. Summary and forward route

Finite Markov chains turn local transition rules into path laws. Communication and closed classes control long-term location; irreducibility gives a unique stationary law, while aperiodicity is additionally needed for convergence. Harmonic equations solve hitting questions, detailed balance gives reversible structure, and coupling or spectral contraction quantifies mixing.

The next chapter, **Monte Carlo and Randomized Estimation**, uses these probability bounds to distinguish iid sampling error from dependent-chain error.
`;export{e as default};