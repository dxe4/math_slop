
# Classes, Hitting Times and Stationarity

A stationary equation can be easy to solve while answering the wrong question. A finite chain may have several closed classes, and its initial state determines which class it eventually enters. A class can have a unique stationary law while its time-dependent distribution oscillates. Hitting a set almost surely is also a different statement from solving a boundary equation without specifying what happens outside the target.

This chapter develops the structure behind those distinctions. Preparation is [Discrete-time Markov Chains](finite-markov-chains.md), including stochastic matrices, path probabilities, communication and stationary rows. We use finite state spaces throughout. Countably infinite spaces introduce null recurrence, possible nonarrival and other difficulties that the arguments here deliberately do not assume away.

## Communication creates a directed structure

**Definition 3.1 (closed class).** States communicate when each can reach the other with positive probability in finitely many steps. A communicating class is closed if every one-step transition from a state in the class stays inside it.

Allowing zero steps makes reachability reflexive. Concatenating positive-probability paths makes it transitive, so mutual reachability is an equivalence relation. Collapse each class to a vertex. The resulting directed graph has no directed cycle involving different vertices: such a cycle would make all its classes communicate. Every finite directed acyclic graph has a sink, and its sink classes are exactly the closed classes.

A state outside the union of closed classes has a directed path to a closed class. Finiteness makes this elementary graph fact probabilistically useful.

**Theorem 3.2 (eventual entrance).** Let $C$ be the union of the closed communicating classes of a finite chain, and $\tau_C=\inf\{n\ge0:X_n\in C\}$. Then $\tau_C$ is almost surely finite and has finite expectation from every initial state.

**Proof.** For each state outside $C$, choose a path to $C$ whose transitions all have positive probability. There are finitely many such chosen paths. Let $m\ge1$ bound their lengths, and let $\varepsilon>0$ be the smallest product of their transition probabilities. From any state outside $C$, the chance of reaching $C$ within $m$ steps is at least $\varepsilon$.

By the Markov property, the same lower bound applies conditional on survival outside $C$ to any block boundary. Thus
$$
P_x(\tau_C>km)\le(1-\varepsilon)^k.
$$
The right side tends to zero. Grouping the tail sum into blocks gives $E_x\tau_C\le m/\varepsilon$. States in $C$ have entrance time zero. ∎

Once inside a closed class, the chain never leaves. The theorem does not identify which class will be reached. Nor does it say that every named state is reached: a state in a different closed class is inaccessible after the choice has been made.

**Worked example 3.3 (two incompatible long-run outcomes).** On states $0,1,2$, let $0$ and $2$ be absorbing and let the row from $1$ be $(1/4,1/2,1/4)$. The closed classes are $\{0\}$ and $\{2\}$; state $1$ lies outside them. Starting from one, survival there for $n$ transitions has probability $2^{-n}$, so its mean departure time is two steps. On departure the two targets have equal probability. Every stationary law is $(a,0,1-a)$ with $0\le a\le1$. There is no unique stationary law for the full chain, even though each closed class has one.

## The transient block and occupation counts

List the states outside $C$ first, and write the transition matrix in block form
$$
P=\begin{pmatrix}Q&R\\0&P_C\end{pmatrix}.
$$
The matrix $Q$ is substochastic: its row sums can be below one because mass can leave for $C$. For $x,y$ outside $C$, $(Q^n)_{xy}$ is the probability of being at $y$ at time $n$ without having entered $C$. Because $C$ is closed, this is also the ordinary probability $P_x(X_n=y)$.

**Definition 3.4 (fundamental matrix).** The occupation matrix is
$$
N=\sum_{n=0}^{\infty}Q^n.
$$
The symbol $N$ here denotes a matrix, not a time horizon. Its entry $N_{xy}$ is the expected number of visits to $y$ before entrance into $C$, including the initial time when $x=y$.

**Theorem 3.5 (occupation and absorption equations).** The series converges entrywise, $N=(I-Q)^{-1}$, and the vector of mean entrance times is $t=N\mathbf1$. The matrix of probabilities of first entering each state of $C$ is $B=NR$.

**Proof.** Theorem 3.2 bounds every row sum of $Q^n$ by $(1-\varepsilon)^{\lfloor n/m\rfloor}$. This is summable. Consequently the nonnegative matrix series converges to a finite matrix, and $Q^n$ tends to zero. Finite telescoping gives
$$
(I-Q)\sum_{n=0}^kQ^n=I-Q^{k+1}
=\left(\sum_{n=0}^kQ^n\right)(I-Q).
$$
Passing to the limit proves both inverse identities.

For occupations, sum the indicators $\mathbf1_{\{X_n=y,n<\tau_C\}}$ and exchange expectation with the nonnegative series. Their expectations are $(Q^n)_{xy}$. Summing occupations over transient states counts exactly $\tau_C$ time instants, so $t=N\mathbf1$.

Entrance into a particular state $z\in C$ after exactly $n$ transient transitions has probability $(Q^nR)_{xz}$. These disjoint possibilities exhaust entrance, and summation gives $B=NR$. All its row sums equal one, since entrance is almost sure. ∎

The matrix inverse is therefore justified by a probabilistic tail bound before it is used as a computational formula. An arbitrary substochastic matrix need not have this property: $Q=(1)$ would describe a state that never leaves.

## Worked example: an absorbing calculation with repeated visits

Take absorbing states $0,3$ and transient states $1,2$. From state one, stay at one or move to two with probabilities one-half each. From state two, move to zero, one or three with probabilities $1/4,1/4,1/2$. In the transient order $(1,2)$,
$$
Q=\begin{pmatrix}1/2&1/2\\1/4&0\end{pmatrix},
\qquad
N=\begin{pmatrix}8/3&4/3\\2/3&4/3\end{pmatrix}.
$$
Multiplying $(I-Q)N$ gives the identity. The mean absorption times are the row sums, four and two. From state one the expected number of visits to state two is $4/3$, even though its probability of ever reaching state two is one. Expected visit count can exceed a hitting probability because repeated visits contribute separately.

With absorbing-state order $(0,3)$,
$$
R=\begin{pmatrix}0&0\\1/4&1/2\end{pmatrix},
\qquad
NR=\begin{pmatrix}1/3&2/3\\1/3&2/3\end{pmatrix}.
$$
Both starting states therefore give probability $2/3$ of eventual absorption at three. This equality does not imply equal durations; initial holding at one changes time but not the relative chances at the eventual exits from state two.

For a reward $g(y)$ paid at each transient visit, the same occupation argument gives expected total reward $Ng$. Signed rewards are allowed here because the finite state space bounds $|g|$ and the entrance time is integrable. If one pays two units at state one and five at state two, the expected total starting from one is $2(8/3)+5(4/3)=12$.

## Every stationary law lives on closed classes

**Theorem 3.6 (stationary decomposition).** Each closed communicating class has a unique stationary probability supported on that class. Every stationary probability of the full finite chain is a convex combination of those class probabilities.

**Proof.** Restriction to a closed class is an irreducible finite stochastic matrix, so the existence and uniqueness arguments from the preceding chapter apply. Extend its stationary row by zeros outside the class.

Conversely, write a stationary row as $(a,b)$ in the transient/closed order. The block equation gives $a=aQ$, hence $a=aQ^n$ for every $n$. Since $Q^n\to0$, $a=0$. Within $C$ there are no transitions between distinct closed classes. The mass on each class is preserved; if its total mass is positive, dividing its restricted row by that mass gives that class’s unique stationary probability. The nonnegative class masses sum to one, proving the decomposition. ∎

Starting outside the closed classes, eventual entrance probabilities provide natural weights. If each closed class is aperiodic, these weights also describe the limiting distribution after the within-class chains have converged. With periodic classes, the ordinary marginal limit can fail. Stationary decomposition itself needs no aperiodicity assumption.

**Worked example 3.7 (a stationary law without marginal convergence).** The chain alternating deterministically between zero and one is irreducible and has stationary law $(1/2,1/2)$. Starting at zero, its distribution is concentrated at zero at every even time and at one at every odd time. It has one closed class but no marginal limit from this start. Its empirical fractions nevertheless tend to one-half each: after $n$ observations the two visit counts differ by at most one. Stationarity, convergence of marginals and time-average convergence are separate claims.

## Mean return times inside a class

Let the finite chain be irreducible and set $T_i^+=\inf\{n\ge1:X_n=i\}$ when $X_0=i$. By a uniform path argument, the hitting time of $i$ has finite mean from every state. Taking one initial step proves $E_iT_i^+<\infty$ as well.

**Theorem 3.8 (return-time formula).** For the unique stationary law $\pi$,
$$
\pi_i=\frac1{E_iT_i^+}.
$$

**Proof.** Let $a_j=E_i\sum_{k=0}^{T_i^+-1}\mathbf1_{\{X_k=j\}}$. These expected occupation counts are finite. Conditioning the next transition on the history gives
$$
(aP)_j=E_i\sum_{k=0}^{T_i^+-1}\mathbf1_{\{X_{k+1}=j\}}.
$$
The justification is absolute integrability: each sum is bounded by $T_i^+$ in expectation. The shifted sum differs from the original by $\mathbf1_{\{X_{T_i^+}=j\}}-\mathbf1_{\{X_0=j\}}=0$, since both endpoints are $i$. Thus $aP=a$. Also $\sum_ja_j=E_iT_i^+$, so normalising $a$ gives a stationary probability. Uniqueness identifies it as $\pi$. Before the first return, state $i$ is visited exactly once, at time zero, so $a_i=1$. This yields the formula. ∎

The proof does not require aperiodicity. For a deterministic two-cycle, return time is exactly two and stationary mass is one-half. The formula can therefore hold even when the distribution from a deterministic start oscillates forever.

## A target set need not contain every closed class

The fundamental-matrix calculation used the union of all closed classes as its absorbing region. For another target $A$, the complement can contain a closed class that never reaches $A$. In that case its submatrix is not transient, and $(I-Q)^{-1}$ may fail to exist. This is an issue about the event being modelled, rather than a numerical failure to repair by adding a small diagonal term.

**Worked example 3.9 (a boundary equation with extra solutions).** Let $P=I$ on states zero and one, and take target $A=\{1\}$. The true hitting probability from zero is zero because the chain never moves. A putative hitting function must satisfy $h(1)=1$, while its equation at zero is only $h(0)=h(0)$. Every value of $h(0)$ satisfies that equation. Even restricting to $0\le h\le1$ does not restore uniqueness.

The actual hitting probability is the minimal nonnegative solution. To see the reason more generally, start with the finite-horizon probabilities $h^{(n)}(x)=P_x(\tau_A\le n)$. They increase to $h(x)=P_x(\tau_A<\infty)$. A nonnegative function $u$ with target value one and harmonicity outside the target dominates $h^{(0)}=\mathbf1_A$. First-step conditioning propagates this domination to every finite horizon, so $u\ge h^{(n)}$ for every $n$ and hence $u\ge h$. The minimality statement remains informative even when uniqueness is false.

For an expected hitting time, the same example gives the equation $e(0)=1+e(0)$, which has no finite solution. The actual hitting time is infinite. Treating infinity as an ordinary unknown in Gaussian elimination would conceal the distinction. Before solving a hitting problem, identify all classes that avoid the target and state which starting states can enter them.

A related issue arises when solving for the probability of hitting $A$ before $B$. If a third closed class avoids both, the probability of either named event can sum to less than one. The missing mass corresponds to never hitting either target. Complementing one probability to obtain the other is justified only after almost-sure arrival in their union has been established. In a finite irreducible chain this follows for a nonempty target, but reducibility requires the argument to be made explicitly.

## Exercises

### Exercise 3.1
<a id="classes-hitting-times-stationarity-ex-1"></a>

For $P=\begin{pmatrix}1&0&0\\1/4&1/2&1/4\\0&0&1\end{pmatrix}$ identify closed classes and every stationary probability.

<details><summary>Hint 1</summary>

Draw arrows only for positive transition probabilities.
</details>
<details><summary>Hint 2</summary>

A stationary row cannot retain mass in the middle state.
</details>
<details><summary>Solution</summary>

The closed classes are $\{0\}$ and $\{2\}$. State one can leave for either and cannot be reached again from either. Its stationary mass satisfies $\pi_1=\pi_1/2$, hence is zero. Every remaining row $(a,0,1-a)$ with $0\le a\le1$ is stationary, and no other probability row is.
</details>

### Exercise 3.2
<a id="classes-hitting-times-stationarity-ex-2"></a>

In that chain, start from state one. Find the mean entrance time into the closed classes and the two entrance probabilities.

<details><summary>Hint 1</summary>

There is only one transient state.
</details>
<details><summary>Hint 2</summary>

Use $Q=(1/2)$ and $N=(2)$.
</details>
<details><summary>Solution</summary>

The expected time is $N\mathbf1=2$. Multiplication by $R=(1/4,1/4)$ gives entrance probabilities $(1/2,1/2)$. This is also a geometric waiting-time calculation: departure occurs each step with probability one-half, and each departure destination is equally likely.
</details>

### Exercise 3.3
<a id="classes-hitting-times-stationarity-ex-3"></a>

Use the two-transient-state example to compute the expected total number of visits to state one when starting from state two.

<details><summary>Hint 1</summary>

Select an entry of the occupation matrix rather than an absorption probability.
</details>
<details><summary>Hint 2</summary>

The starting state selects the row.
</details>
<details><summary>Solution</summary>

The required count is $N_{21}=2/3$. It is not a probability of a single event: the number of visits can be zero, one or larger. Its expectation can be below one while still including possible repeated visits. The entry does not include time zero because the starting state is two, not one.
</details>

### Exercise 3.4
<a id="classes-hitting-times-stationarity-ex-4"></a>

Explain why a finite substochastic matrix need not satisfy $(I-Q)^{-1}=\sum_{n\ge0}Q^n$.

<details><summary>Hint 1</summary>

Allow a row sum equal to one.
</details>
<details><summary>Hint 2</summary>

Consider the one-by-one matrix $(1)$.
</details>
<details><summary>Solution</summary>

With $Q=(1)$, every power equals one, the series diverges and $I-Q$ is singular. This describes a state that never exits the proposed transient region. The matrix theorem requires actual transience, supplied here by eventual entrance into all closed classes and the uniform geometric block bound. Substochasticity alone does not imply it.
</details>

### Exercise 3.5
<a id="classes-hitting-times-stationarity-ex-5"></a>

If $\pi=(1/4,3/4)$ is the stationary law of an irreducible two-state chain, find both mean first-return times. Is aperiodicity needed?

<details><summary>Hint 1</summary>

Use the return-time formula.
</details>
<details><summary>Hint 2</summary>

The occupation-cycle proof did not assert marginal convergence.
</details>
<details><summary>Solution</summary>

The means are four and $4/3$ steps. Aperiodicity is not needed: the cycle-occupation argument proves the identity using irreducibility, finite state space and integrable return times. A stationary mass is the reciprocal of a mean duration, not generally the reciprocal of an integer period.
</details>

### Exercise 3.6
<a id="classes-hitting-times-stationarity-ex-6"></a>

Show that a transient state has zero mass under every stationary law, using $a=aQ^n$.

<details><summary>Hint 1</summary>

The entire finite transient block tends to zero.
</details>
<details><summary>Hint 2</summary>

Take the coordinatewise limit of the stationary identity.
</details>
<details><summary>Solution</summary>

The geometric survival estimate implies $(Q^n)_{xy}\to0$ for all transient $x,y$. The finite sum $(aQ^n)_y$ therefore tends to zero for every $y$. Since it equals the fixed value $a_y$ for all $n$, every coordinate of $a$ is zero. This uses a finite sum; an infinite-state extension would need additional control.
</details>

### Exercise 3.7
<a id="classes-hitting-times-stationarity-ex-7"></a>

For a deterministic three-cycle, find the stationary law, the first-return mean, and the behaviour of the marginal distribution from one state.

<details><summary>Hint 1</summary>

Every step rotates the labels.
</details>
<details><summary>Hint 2</summary>

The period is three.
</details>
<details><summary>Solution</summary>

The stationary law is uniform on the three states. First return occurs exactly at time three, matching reciprocal mass three. From a fixed starting state, the marginal distribution rotates among three point masses and does not converge. Empirical visit proportions do converge to one-third, because in every complete block of three observations each state appears once.
</details>

### Exercise 3.8
<a id="classes-hitting-times-stationarity-ex-8"></a>

Prove that the row sums of $B=NR$ are one from $(I-Q)\mathbf1=R\mathbf1$.

<details><summary>Hint 1</summary>

The two blocks form complete stochastic rows.
</details>
<details><summary>Hint 2</summary>

Multiply by the fundamental matrix.
</details>
<details><summary>Solution</summary>

Stochasticity gives $Q\mathbf1+R\mathbf1=\mathbf1$. Multiplying the rearranged identity by $N=(I-Q)^{-1}$ yields $NR\mathbf1=\mathbf1$. Entries are nonnegative because $N,R$ are nonnegative. Thus each row is a probability vector, consistent with almost-sure eventual entrance into the closed region.
</details>

### Exercise 3.9
<a id="classes-hitting-times-stationarity-ex-9"></a>

In the worked two-transient-state model, pay three units at every visit to either transient state. Find the mean total reward from each starting state.

<details><summary>Hint 1</summary>

The reward is three times the duration.
</details>
<details><summary>Hint 2</summary>

Use the row sums four and two.
</details>
<details><summary>Solution</summary>

The reward vector is $g=3\mathbf1$, so expected total reward is $Ng=3N\mathbf1=(12,6)^\mathsf T$. Rewards are paid before absorption and include time zero when starting transiently. A reward paid at the absorbing time would be an additional term and must not be silently included in this count.
</details>

### Exercise 3.10
<a id="classes-hitting-times-stationarity-ex-10"></a>

A chain has two closed classes. Why does solving $\pi P=\pi$ not identify the limiting class weights from a particular initial distribution?

<details><summary>Hint 1</summary>

Stationary laws describe preservation, whereas entrance depends on the starting law.
</details>
<details><summary>Hint 2</summary>

Any convex combination of the two class laws is stationary.
</details>
<details><summary>Solution</summary>

The stationary equation permits every convex combination of the class stationary rows. From a specified initial distribution, the relevant weights are probabilities of eventual entrance into each class, computed by boundary equations or $NR$ and the initial masses. Aperiodicity within the classes is additionally needed for ordinary marginal convergence. Without an initial law, no one set of entrance weights has been selected.
</details>

## Sources and continuation

These finite-state arguments and exercises are original Euler treatments. The broader references are Norris, *Markov Chains*, and Grimmett and Stirzaker, *Probability and Random Processes*. [Coupling and Convergence](coupling-and-convergence.md) studies quantitative convergence after the class and period assumptions have been established. [Random Walks and Gambler’s Ruin](random-walks-gamblers-ruin.md) uses absorbing equations and explains why an infinite state space changes arrival-time integrability.

## Summary

A finite chain reaches some closed class in finite mean time. The transient block has a convergent occupation series, yielding absorption probabilities, mean durations and rewards. Every stationary law is a convex combination of closed-class stationary laws. Initial conditions determine entrance weights, while periods affect marginal convergence. Inside an irreducible finite class, mean first-return time is the reciprocal of stationary mass, even when periodicity prevents a marginal limit.
