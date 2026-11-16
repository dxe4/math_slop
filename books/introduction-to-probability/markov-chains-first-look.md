
# Markov Chains: A First Look

Independent observations forget everything about the past. Many evolving systems have a different structure: the next state depends on the current state, while the earlier history adds no further information once that current state is known. A simple weather model, a token moving on a finite graph and a walk between absorbing walls can all be described in this way.

A Markov chain makes this dependence explicit. Its transition probabilities specify how one state leads to another; an initial distribution specifies where the process begins. Together they determine probabilities of whole paths. We will calculate time-dependent distributions, hitting probabilities and stationary laws, while keeping these three questions distinct.

Read [conditional probability](conditional-probability-bayes.md), [joint distributions and covariance](joint-distributions-covariance.md), and [expectation and variance](expectation-variance.md). Matrix multiplication is introduced as a compact form of finite probability sums. No eigenvalue theory or measure theory is required.

The random-walk calculations adapt Euler's [Random Walks from Coins](../../articles/random-walks-from-coins.md), whose original presentation remains available. We retain its distinction between exact model calculations, the behaviour of a single realised path, and uncertainty from independent simulation.

## States, transitions and initial law

**Definition 14.1 (Finite time-homogeneous Markov chain).** Let $E$ be a finite set of states. A sequence $X_0,X_1,\ldots$ taking values in $E$ is a time-homogeneous Markov chain with transition matrix $P=(p_{ij})$ if, for every history having positive probability,

$$
P(X_{n+1}=j\mid X_0=i_0,\ldots,X_n=i)=p_{ij}.
$$

The entries satisfy $p_{ij}\ge0$ and $\sum_{j\in E}p_{ij}=1$ for each state $i$. Such a matrix is row-stochastic. The initial law is the row vector $\alpha$, with $\alpha_i=P(X_0=i)$.

The positive-history condition prevents conditioning on a zero probability event. The matrix specifies the conditional law after a current state, rather than a claim that every displayed history can occur. The adjective time-homogeneous says that the same row is used at every time. A model whose transition probabilities change with the season is not time-homogeneous without enlarging its state description.

The Markov property does not mean consecutive states are independent. If a row strongly favours staying in its current state, observing the present is highly informative about the next state. A transition model with all rows equal gives a next-state law independent of the current state. Rows for states that can never be reached need not be inferred from independence in the realised process.

**Proposition 14.2 (Path probability).** A finite path $i_0,i_1,\ldots,i_m$ has probability

$$
\alpha_{i_0}p_{i_0i_1}p_{i_1i_2}\cdots p_{i_{m-1}i_m}.
$$

*Proof.* Apply the multiplication rule to the successive state events. When the preceding path has positive probability, the Markov property replaces the next conditional factor by its transition entry. If the initial factor or any transition factor is zero, the whole path is impossible and both its probability and the displayed product are zero. ∎

## Worked Example 14.3: an idealised two-state weather model

Let the states be dry and wet, in that order, with

$$
P=\begin{pmatrix}3/4&1/4\\1/2&1/2\end{pmatrix},
\qquad \alpha=(1,0).
$$

The rows sum to one. The initial law says that today is dry with certainty; it is extra information, not something supplied by the matrix alone.

The path dry, wet, dry has probability $(1)(1/4)(1/2)=1/8$. The chance that the weather is dry two days from now includes two possible middle states:

$$
P(X_2=\text{dry})=
\frac34\frac34+\frac14\frac12=\frac{11}{16}.
$$

The complementary probability of wet is $5/16$. Adding the path probabilities is necessary: multiplying the two most likely transitions would answer a path question instead of the endpoint question.

The Markov model assumes that today's state contains all information relevant to tomorrow's stated transition law. Real weather involves many more variables. Exact arithmetic inside this simplified model does not establish that its assumptions describe an actual location.

## Distribution evolution is matrix multiplication

**Proposition 14.4 (One-step evolution).** If $\beta$ is the row distribution of $X_n$, then the row distribution of $X_{n+1}$ is $\beta P$. Hence the distribution at time $n$ is $\alpha P^n$.

*Proof.* Partition according to the current state. For each $j$,

$$
P(X_{n+1}=j)=\sum_i P(X_n=i)p_{ij}.
$$

Terms with zero current-state probability contribute zero. This is exactly the $j$th coordinate of row-vector matrix multiplication. Repeated application gives the stated power formula, with $P^0$ the identity matrix. ∎

The entry $(P^2)_{ij}$ adds probabilities of all two-step paths from $i$ to $j$. Higher powers have the same interpretation. Rows of every power remain nonnegative and sum to one because they represent conditional endpoint distributions.

A distribution at one time is not a description of the whole path. Two chains may have the same distribution at every time but different dependence between times. A stationary chain can remain strongly dependent, as the alternating example below will show.

## Stationarity and convergence are different claims

**Definition 14.5 (Stationary distribution).** A probability row vector $\pi$ is stationary if $\pi P=\pi$.

**Proposition 14.6 (Starting in stationarity).** If $X_0$ has law $\pi$ and $\pi P=\pi$, then $X_n$ has law $\pi$ for every $n$.

*Proof.* The distribution evolution formula gives $\pi P^n=\pi$ by induction. The case $n=0$ is the initial assumption; multiplying a stationary row by $P$ leaves it unchanged. ∎

Solving stationary equations requires nonnegative entries and a total of one, as well as the matrix equation. A zero row solves the homogeneous equation but is not a probability distribution.

A finite chain is irreducible if every state can reach every other in some positive number of steps with positive probability. A state's period is the greatest common divisor of the positive return times to that state. In an irreducible chain all states have the same period; period one is called aperiodic.

We cite, without proving, the finite-chain theorem: an irreducible finite chain has a unique stationary distribution, and if it is also aperiodic, $\alpha P^n$ converges to that distribution for every initial law. Introductory treatments appear in [Grinstead and Snell, chapter 11](https://math.dartmouth.edu/~prob/prob/prob.pdf). The caveats matter: stationarity alone does not establish this convergence.

## Worked Example 14.7: stationary law and a periodic counterexample

For the weather chain write $\pi=(r,1-r)$. Stationarity in the dry coordinate requires

$$
r=\frac34r+\frac12(1-r).
$$

Solving gives $r=2/3$, so $\pi=(2/3,1/3)$. These entries are nonnegative and sum to one. Let $d_n$ be the probability of dry at time $n$. The recurrence is $d_{n+1}=1/2+d_n/4$. Subtracting its fixed point gives

$$
d_n-\frac23=\left(\frac14\right)^n\left(d_0-\frac23\right).
$$

Thus convergence follows directly in this example without using the general theorem.

Now consider $Q=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Its stationary distribution is $(1/2,1/2)$, but starting from the first state produces alternating distributions $(1,0),(0,1),(1,0),\ldots$. The chain is irreducible with period two, so the aperiodicity hypothesis fails.

Starting that alternating chain in its stationary law gives the same marginal distribution at every time, yet the next state is completely determined by the current one. Stationarity therefore does not imply independence.

## Random walks from independent coins

Before introducing walls, let independent increments $Y_i$ equal plus or minus one with equal probabilities, and put $S_n=\sum_{i=1}^nY_i$, with $S_0=0$. After $n$ steps the endpoint lies between $-n$ and $n$ and has the same parity as $n$.

If the endpoint is $s$, the number of right steps is $(n+s)/2$. Therefore

$$
P(S_n=s)=2^{-n}\binom{n}{(n+s)/2}
$$

when this is an integer between zero and $n$, and the probability is zero otherwise. The binomial count arises because each permitted path has probability $2^{-n}$.

Each increment has mean zero and variance one. Consequently $E[S_n]=0$ and $\operatorname{Var}(S_n)=n$. A mean-zero endpoint does not mean that a typical path stays at zero; its displacement scale grows like $\sqrt n$. Total distance travelled is $n$, a different quantity from signed displacement.

For a right-step probability $p$, independent increments instead have mean $2p-1$ and variance $4p(1-p)$. Thus drift accumulates linearly as $n(2p-1)$ while standard deviation grows with $\sqrt n$. A small bias can be difficult to identify from one finite path.

The unrestricted walk has infinitely many states, so it lies outside the finite-state theorem stated above. Adding two walls produces a finite model to which elementary first-step arguments apply.

## Hitting and absorption between walls

Fix an integer $N\ge2$. The state space is $\{0,1,\ldots,N\}$. Interior states move one unit left or right with probabilities one half each, while states zero and $N$ stay where they are. These endpoints are absorbing.

**Definition 14.8 (Absorption time).** Let $\tau$ be the first time the chain visits either endpoint. Starting at $i$, define $h(i)=P_i(X_\tau=N)$ and $e(i)=E_i[\tau]$.

Absorption is indeed certain and the expectation is finite. From any interior state there is probability at least $2^{-N}$ of reaching the right wall within the next $N$ steps by taking right moves until it is reached. Conditional on survival to a block boundary, this same lower bound still applies. Thus

$$
P_i(\tau>kN)\le(1-2^{-N})^k.
$$

The geometric bound tends to zero and its sum is finite, proving both claims. This justification should precede using a recurrence for an allegedly finite expected time.

Conditioning on the first step gives $h(0)=0$, $h(N)=1$, and

$$
h(i)=\tfrac12h(i-1)+\tfrac12h(i+1).
$$

Successive differences are equal, so the unique solution is $h(i)=i/N$. Similarly $e(0)=e(N)=0$ and

$$
e(i)=1+\tfrac12e(i-1)+\tfrac12e(i+1).
$$

The quadratic $e(i)=i(N-i)$ satisfies the recurrence and endpoint values. Uniqueness follows because the difference of any two solutions has constant first differences and zero endpoint values. The extra one counts the first step and must not be omitted.

## Worked Example 14.9: the two wall questions

Take walls at zero and eight, and start at state three. The chance of reaching eight first is $3/8$. The expected number of steps before absorption is $3(8-3)=15$.

These answers concern different aspects of the same path. A path can reach the upper wall quickly or after a long excursion; knowing the probability of that endpoint does not determine the expected duration.

If right moves instead have probability $p\in(0,1)$ and left moves have probability $q=1-p$, the hitting recurrence becomes $h(i)=ph(i+1)+qh(i-1)$. For $p\ne q$, its solution is

$$
h(i)=\frac{1-(q/p)^i}{1-(q/p)^N}.
$$

Substituting this expression verifies the recurrence and endpoint values. Uniqueness follows from a maximum argument: a nonzero interior maximum or minimum of the difference of two solutions would force the same extremum at neighbouring states and eventually at a zero endpoint.

The fair formula is recovered when $p=q=1/2$, but it cannot be reused unchanged for a biased walk. At $p=0$ or $p=1$, the motion is deterministic and those endpoint cases should be analysed directly rather than inserted into a formula containing division by $p$.

## Simulation and interpretation

A simulation can generate each transition by selecting a state from the current row of $P$. Independent runs starting from a specified state estimate hitting probabilities. If one run succeeds with probability $h(i)$, the average of $M$ independent success indicators has variance $h(i)(1-h(i))/M\le1/(4M)$.

Positions along one path are correlated. Treating them as $M$ independent runs would give the wrong uncertainty calculation. Similarly, an estimate of expected absorption time requires independent path durations and an appropriate moment calculation; it cannot borrow the indicator variance bound.

A model should also state whether a path is stopped at a wall, whether a time limit is imposed, and what happens to paths that have not stopped by that limit. Discarding long paths changes the distribution being estimated. The [next chapter](simulation-monte-carlo.md) develops these numerical questions while retaining exact mathematical benchmarks.

## Exercises

### Exercise 14.1
<a id="markov-chains-first-look-ex-1"></a>

Is $\begin{pmatrix}0.6&0.4\\0.2&0.7\end{pmatrix}$ a transition matrix on two states? Explain.

<details>
<summary>Hint 1</summary>

Each row must describe a complete conditional distribution.
</details>
<details>
<summary>Hint 2</summary>

Check row sums as well as signs.
</details>
<details>
<summary>Solution</summary>

No. The second row sums to $0.9$, so it leaves probability $0.1$ unassigned. Nonnegative entries alone do not suffice. An additional state could receive the missing mass, but that would be a different specified state space and matrix.
</details>

### Exercise 14.2
<a id="markov-chains-first-look-ex-2"></a>

For the weather chain of Worked Example 14.3, starting dry, find the probability of the path dry, dry, wet, wet.

<details>
<summary>Hint 1</summary>

Use the transition attached to each consecutive pair.
</details>
<details>
<summary>Hint 2</summary>

There are three transition factors after the initial factor.
</details>
<details>
<summary>Solution</summary>

The probability is $1\cdot(3/4)(1/4)(1/2)=3/32$. This specifies the entire three-step history, whereas the chance of being wet at time three would sum this and all other permitted paths ending wet.
</details>

### Exercise 14.3
<a id="markov-chains-first-look-ex-3"></a>

With weather initial law $(1/2,1/2)$, find the law after one step.

<details>
<summary>Hint 1</summary>

Multiply the probability row by the transition matrix.
</details>
<details>
<summary>Hint 2</summary>

Each output coordinate sums over the two possible starting states.
</details>
<details>
<summary>Solution</summary>

The dry probability is $(1/2)(3/4)+(1/2)(1/2)=5/8$, and wet probability is $3/8$. The result is a probability row. The matrix alone did not determine it; the initial distribution was also needed.
</details>

### Exercise 14.4
<a id="markov-chains-first-look-ex-4"></a>

Find the stationary distribution of $P=\begin{pmatrix}4/5&1/5\\2/5&3/5\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

Write the distribution as $(r,1-r)$.
</details>
<details>
<summary>Hint 2</summary>

Solve the first stationary coordinate equation.
</details>
<details>
<summary>Solution</summary>

The equation is $r=(4/5)r+(2/5)(1-r)$, giving $3r=2$ and $\pi=(2/3,1/3)$. Substitution checks both coordinates. All entries are positive, so the chain is irreducible and aperiodic; the cited finite-chain theorem also supplies convergence from every initial law.
</details>

### Exercise 14.5
<a id="markov-chains-first-look-ex-5"></a>

For the deterministic alternating chain, find $P(X_2=1\mid X_0=1)$ and explain why its unique stationary distribution does not imply convergence from state one.

<details>
<summary>Hint 1</summary>

Two transitions return to the starting state.
</details>
<details>
<summary>Hint 2</summary>

Compare the even and odd time distributions.
</details>
<details>
<summary>Solution</summary>

The probability is one. Starting from state one, the chain alternates between the two point-mass distributions forever. Its stationary distribution is $(1/2,1/2)$, but its period is two. Thus the aperiodicity condition for convergence fails.
</details>

### Exercise 14.6
<a id="markov-chains-first-look-ex-6"></a>

A fair unrestricted walk takes eight steps. Find the probability of endpoint four and explain why endpoint three is impossible.

<details>
<summary>Hint 1</summary>

Solve for the number of right steps.
</details>
<details>
<summary>Hint 2</summary>

The endpoint parity equals the number of steps' parity.
</details>
<details>
<summary>Solution</summary>

Endpoint four needs six right steps, so its probability is $\binom86/2^8=28/256=7/64$. Eight steps can only produce even endpoints, making three impossible. A smooth approximation must respect such support restrictions when interpreting point probabilities.
</details>

### Exercise 14.7
<a id="markov-chains-first-look-ex-7"></a>

A fair walk has absorbing walls at zero and ten and starts at four. Find upper-wall probability and expected duration.

<details>
<summary>Hint 1</summary>

Use the two separately derived wall functions.
</details>
<details>
<summary>Hint 2</summary>

The duration is $i(N-i)$.
</details>
<details>
<summary>Solution</summary>

The upper-wall probability is $4/10=2/5$, and the expected duration is $4(10-4)=24$ steps. Both formulas rely on fair independent increments until absorption. They would not automatically survive a bias or a different boundary rule.
</details>

### Exercise 14.8
<a id="markov-chains-first-look-ex-8"></a>

For walls zero and three, right probability $2/3$, and starting state one, find the chance of hitting three before zero.

<details>
<summary>Hint 1</summary>

Use $q/p=1/2$ in the biased formula.
</details>
<details>
<summary>Hint 2</summary>

The numerator uses power one and the denominator power three.
</details>
<details>
<summary>Solution</summary>

The chance is $(1-1/2)/(1-1/8)=4/7$. This exceeds the fair probability $1/3$, consistently with the rightward bias. One can also solve $h(1)=(2/3)h(2)$ and $h(2)=(2/3)+(1/3)h(1)$ to obtain the same result.
</details>

### Exercise 14.9
<a id="markov-chains-first-look-ex-9"></a>

The identity matrix on two states is a transition matrix. Find all its stationary distributions and explain what happens from an arbitrary initial law.

<details>
<summary>Hint 1</summary>

The chain never leaves its starting state.
</details>
<details>
<summary>Hint 2</summary>

Multiplying any row by the identity leaves it unchanged.
</details>
<details>
<summary>Solution</summary>

Every probability row $(r,1-r)$, with $0\le r\le1$, is stationary. The initial law remains unchanged at every time. The chain is reducible, so the uniqueness claim for irreducible finite chains does not apply.
</details>

### Exercise 14.10
<a id="markov-chains-first-look-ex-10"></a>

You estimate an upper-wall probability from ten thousand independent complete walks. Give a worst-case standard deviation bound. Why cannot ten thousand positions along one walk use the same argument?

<details>
<summary>Hint 1</summary>

One complete walk supplies one success indicator.
</details>
<details>
<summary>Hint 2</summary>

The indicator variance is at most one quarter.
</details>
<details>
<summary>Solution</summary>

The estimated fraction has standard deviation at most $1/(2\sqrt{10000})=0.005$. Positions within one walk are dependent and are not independent indicators of separate absorption outcomes. Their average has covariance terms and may target a different quantity entirely.
</details>

## Sources

The coin-walk and wall arguments adapt Euler's [Random Walks from Coins](../../articles/random-walks-from-coins.md), preserving the original source. For finite-chain terminology and the cited convergence theorem see [Grinstead and Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf), chapter 11; compare the broader introductory route through [Harvard Stat 110](https://stat110.hsites.harvard.edu/). The finite-chain examples and exercises here are original.

## Summary

A finite Markov model needs a state space, row-stochastic transition matrix and initial law. Path probabilities are products; endpoint laws add over paths through matrix multiplication. A stationary law remains stationary but need not attract other laws, with irreducibility and aperiodicity controlling the cited convergence result. First-step recurrences yield fair-wall probability $i/N$ and expected duration $i(N-i)$ once absorption and finite expectation are justified. Independent simulation runs can estimate these quantities with visible uncertainty.
