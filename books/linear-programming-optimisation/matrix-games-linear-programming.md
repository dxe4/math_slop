
# Matrix Games and Linear Programming


## A guarantee against an opposing choice

A finite matrix game has two decision makers with opposite objectives. One chooses a row, the other a column, and the selected entry is paid to the row player. Linear programming describes the best guarantee each can secure by randomising. The result is an exact minimax theorem for this specified zero-sum model, not a claim that every strategic interaction has one shared numerical payoff.

Required preparation is [duality theory](duality-theory.md), [complementary slackness](complementary-slackness-farkas.md) and elementary probability on a finite set. Let $G\in\mathbb R^{m\times n}$ contain row-player payoffs. A positive entry benefits the row player; the column player minimises that same expected payoff.

**Definition 12.1 (Mixed strategy and expected payoff).** A row strategy is $p\ge0$ with $\mathbf1^{\mathsf T}p=1$; a column strategy is $q\ge0$ with $\mathbf1^{\mathsf T}q=1$. If their random choices are independent, expected payoff is $p^{\mathsf T}Gq$. A pure strategy is a simplex vertex, assigning probability one to one action.

Independence is part of this product formula. A correlated joint distribution has separate probabilities for action pairs and is not determined by its marginals alone. A mixed strategy is also different from randomly switching the problem data after observing the opponent's realised action. The timing and information rules define the game.

For a fixed p, the worst column mixture is a pure column attaining the smallest component of $G^{\mathsf T}p$. Indeed a weighted average cannot be below the smallest of its entries, and assigning full weight there attains it. Similarly the strongest response to q is a pure row attaining the largest component of Gq. This elementary reduction turns infinitely many mixed-response checks into finitely many linear inequalities.

## The two linear programmes

The row player solves
$$\max v,\qquad G^{\mathsf T}p\ge v\mathbf1,\quad
\mathbf1^{\mathsf T}p=1,\quad p\ge0,$$
where v is a free real variable. Every feasible pair guarantees expected payoff at least v against every column strategy. The column player solves
$$\min w,\qquad Gq\le w\mathbf1,\quad
\mathbf1^{\mathsf T}q=1,\quad q\ge0,$$
with unrestricted w. It protects an upper bound w against every row strategy.

The row maximisation has finite bounds between the smallest and largest entries of G. A strategy exists because the simplex is nonempty. Its guarantee is a continuous minimum of finitely many affine functions on a compact simplex, so it attains a maximum. The column problem has the analogous compactness property.

**Proposition 12.2 (Game weak duality).** Every row-feasible $(p,v)$ and column-feasible $(q,w)$ satisfy $v\le p^{\mathsf T}Gq\le w$.

*Proof.* Multiply each lower column-payoff inequality by its nonnegative q component and sum. Since the probabilities sum to one, the result is $v\le p^{\mathsf T}Gq$. Multiply the upper row-payoff inequalities by p and sum for the other bound. ∎

The proposed column problem is exactly the LP dual, not just one convenient family of upper bounds. To see its variables, combine the row inequalities with weights q and its equality with unrestricted multiplier w. The Lagrangian upper expression is
$$
v+q^{\mathsf T}(G^{\mathsf T}p-v\mathbf1)
+w(1-\mathbf1^{\mathsf T}p)
=w+v(1-\mathbf1^{\mathsf T}q)
+p^{\mathsf T}(Gq-w\mathbf1).
$$
Its supremum over free v and nonnegative p is finite exactly when
$\mathbf1^{\mathsf T}q=1$ and $Gq\le w\mathbf1$, with $q\ge0$. Its finite value is then w. This agrees with the duality conventions already proved in the book.

**Theorem 12.3 (Finite zero-sum minimax).** There are mixed strategies $p_*,q_*$ and a value V with
$$
\min_q p_*^{\mathsf T}Gq=V
=\max_p p^{\mathsf T}Gq_*.
$$
Equivalently, the row max–min equals the column min–max.

*Proof.* The two displayed LPs are a primal–dual pair, and the row problem has an attained finite optimum as shown above. Apply the strong-duality theorem from the preceding chapters to obtain a feasible dual optimum of the same value. Game weak duality then forces the displayed bounds and equality at $(p_*,q_*)$. Conversely those inequalities show neither player can improve its guarantee. ∎

The only deeper dependency in this proof is the already established LP strong-duality theorem. It does not assume minimax in order to prove that theorem. The argument works for negative entries and zero value; no division by V is needed.

## Pure saddles and mixtures

**Definition 12.4 (Saddle pair).** A pure pair $(i_*,j_*)$ is a saddle when
$$G_{i,j_*}\le G_{i_*,j_*}\le G_{i_*,j}
\quad\text{for all }i,j.$$
The selected entry is a maximum in its column and a minimum in its row. It is then simultaneously a row guarantee and a column bound.

**Example 12.5 (A pure saddle from two bounds).** For
$$G=\begin{pmatrix}2&1\\4&3\end{pmatrix},$$
the row minima are one and three, while the column maxima are four and three. Row two guarantees three and column two limits the row player to three. Thus $(2,2)$ is a saddle with value three. The second row dominates the first componentwise, and the second column is no larger than the first for either row.

Pure strategies need not attain the minimax value. Matching pennies has matrix
$\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$: every pure row has worst payoff minus one, while every pure column permits payoff one. Equal mixtures make every opposing pure response worth zero, proving mixed value zero. The theorem concerns the simplex strategy sets; it does not assert that a pure saddle always exists.

**Example 12.6 (Solving a nonsymmetric two-by-two game).** Let
$$G=\begin{pmatrix}3&0\\1&2\end{pmatrix}.$$
If p puts probability t on row one, its two column payoffs are $1+2t$ and $2-2t$. Their minimum is maximised where they meet: $t=1/4$, value $3/2$. Values left of that intersection are limited by the increasing first line, and values right of it by the decreasing second line, proving optimality on $[0,1]$.

If q puts probability s on column one, its two row payoffs are $3s$ and $2-s$. Their maximum is minimised at $s=1/2$, also value $3/2$. Thus $p=(1/4,3/4)$ and $q=(1/2,1/2)$ are a matching certificate. All supported pure actions have the same payoff against the opposing optimum, but their probabilities need not be equal.

## Complementary slackness and support

The LP gap can be written as a sum of nonnegative support terms:
$$
w-v=\sum_i p_i\bigl(w-(Gq)_i\bigr)
+\sum_jq_j\bigl((G^{\mathsf T}p)_j-v\bigr).
$$
Expand the two sums, use both probability normalisations and cancel the two copies of $p^{\mathsf T}Gq$. At an optimum the gap is zero, so every summand vanishes.

**Corollary 12.7 (Support indifference).** At an optimal pair, every row with positive p probability has payoff V against q, and every column with positive q probability has payoff V against p. Unused actions satisfy the relevant one-sided inequalities but can also tie at V.

*Proof.* Each bracket is nonnegative by feasibility. A positive probability multiplying a nonnegative bracket can contribute zero only when that bracket is zero. Zero probabilities impose no equality, while feasibility still supplies the inequality. ∎

This is a certificate-checking rule, not a complete shortcut for guessing support. Solving indifference equations on an assumed support can yield negative probabilities, omit a stronger unused action or select a singular system. Check normalisation, nonnegativity and every payoff inequality before calling the result an equilibrium.

**Example 12.8 (A missing row invalidates an indifference calculation).** Consider
$$G=\begin{pmatrix}2&0\\0&2\\3/2&3/2\end{pmatrix}.$$
Equalising just the first two rows suggests p probabilities $(1/2,1/2,0)$ with guarantee one. But the third row alone guarantees $3/2$, so the restricted calculation is not optimal for the full game. Taking $p=e_3$ and $q=(1/2,1/2)$ gives row-response payoffs $(1,1,3/2)$ and matching value $3/2$.

The full set of optimal q is $q=(s,1-s)$ with $1/4\le s\le3/4$: the first two row payoffs $2s$ and $2(1-s)$ must not exceed $3/2$. Thus an optimum strategy need not be unique even though the game value is. The unused rows can become tied at the endpoints, illustrating why zero probability does not imply a strict inequality.

## Dominance and transformations

**Proposition 12.9 (Deleting a dominated row preserves value).** If row r is componentwise no larger than another available row k, deleting r leaves the game value unchanged.

*Proof.* The reduced row strategy set is contained in the original, so its best guarantee cannot be larger. Given any original mixture, transfer its mass on r to k. Every column payoff weakly increases, so this reduced-game mixture guarantees at least as much. Taking optimal guarantees gives the reverse inequality. ∎

The same proof works when a convex combination of other rows dominates r. For the minimising player, a column componentwise no smaller than another is removable. Weak dominance preserves the value under this argument but can remove some equilibrium strategies; it does not preserve every description of optimal play.

If $\widetilde G=aG+b\mathbf1\mathbf1^{\mathsf T}$ with $a>0$, every expected payoff becomes $a p^{\mathsf T}Gq+b$. Guarantees are ordered the same way, so optimal strategies are unchanged and the value becomes $aV+b$. Positive scaling changes payoff units; a common additive offset changes the reference level. Negative scaling exchanges maximising and minimising roles and is not covered by this statement.

Adding a different constant to each row or column is not a common offset. It changes the incentives associated with selecting that action and can change the optimal strategies. In applications, normalising columns separately can therefore alter the strategic model instead of merely improving numerical conditioning.

## Feasibility gaps and approximate protection

An exactly feasible strategy pair with row guarantee v and column bound w traps V in $[v,w]$. If probabilities are only approximate, recompute the simplex constraints before using that conclusion. A vector summing to 0.999 is not literally a mixed strategy; normalisation can change its worst-case payoff and must be reflected in the certificate.

For any valid p, calculate $\ell=\min_j(G^{\mathsf T}p)_j$ directly. For any valid q, calculate $u=\max_i(Gq)_i$. Then $\ell\le V\le u$ irrespective of whether a solver declared success. The gap $u-\ell$ measures unresolved game value. It does not by itself bound the distance between computed and optimal strategy vectors: nearly indifferent games can have many far-apart near-optimal mixtures.

A mixed-strategy guarantee is an expectation. In a single realised play, the payoff can be above or below V. Repeated independent plays support additional probabilistic statements under their own assumptions, but the LP certificate does not promise a deterministic realised average after a specified finite number of rounds. Opponent adaptation, dependence and information timing require a separately specified model.

Store the payoff matrix with units and its row/column meanings, the two probability vectors, all pure-response payoffs and the gap. This gives a small mathematical certificate a reader can inspect. The next [interior-point chapter](interior-point-methods.md) returns to optimisation algorithms and uses primal–dual feasibility and gaps in a different computational form.

## Sensitivity of value and sensitivity of play

**Proposition 12.10 (Game-value perturbation bound).** Suppose every payoff entry changes by at most epsilon in absolute value, producing $\widetilde G$. Then the minimax values differ by at most epsilon. For any two mixed strategies,
$|p^{\mathsf T}(\widetilde G-G)q|
\le\epsilon\sum_i p_i\sum_jq_j=\epsilon.$
Taking worst responses and then best guarantees preserves this uniform bound, so the two minimax values differ by at most epsilon. To see both directions, apply the perturbed lower estimate to an optimal strategy for G and then interchange the two games.

This is an absolute value-sensitivity statement in the entrywise maximum perturbation model. It does not bound the change in optimal probabilities. For example a one-column game with payoffs $(0,\delta)$ selects row two when delta is positive and row one when it is negative, while the value changes continuously through zero. A tiny payoff perturbation can therefore switch a pure recommendation completely.

A report should distinguish those two types of robustness. A stable value may coexist with unstable action choices because several actions are nearly tied. Display the interval of near-optimal strategies or the gap to alternatives when interpretation depends on a particular row. For modelled opponents, also distinguish uncertainty about payoff coefficients from uncertainty about the timing and information rules; changing the latter can define an entirely different game.

## Mixed strategies model independent randomisation

The expected-payoff formula uses a product distribution over the players' actions. If the row and column players randomise independently with probability vectors $p$ and $q$, the joint probability of an action pair is $p_iq_j$, giving expected payoff $p^{\mathsf T}Gq$. This independence belongs to the strategic model. An arbitrary joint table with the same marginals need not give the same expectation, because it can correlate favourable or unfavourable action pairs.

For example, use a two-action payoff equal to one when the actions agree and minus one when they differ. Independent uniform choices give expected payoff zero. A joint table putting probability one half on each agreeing pair has the same uniform marginals but expected payoff one. A table supported on the disagreeing pairs instead gives minus one. Thus the marginals alone do not determine payoff when an external device correlates the actions.

The minimax theorem here concerns unilateral guarantees against the opponent's independently chosen mixed strategy. It does not silently introduce a common random recommendation device. In repeated play, an empirical joint distribution may show correlation because players respond to history, even if each current random generator uses private randomness. Interpreting that distribution requires the repeated-game model and its information assumptions.

When applying the LP, state the action sets, whose payoff is maximised, the zero-sum convention, and the randomisation available to each player. These are the hypotheses that connect a correct primal–dual calculation to a strategic conclusion. The same numerical matrix can describe a different decision problem when the players share information or coordinate their actions.

## Exercises

### Exercise 1: A protected interval
<a id="matrix-games-linear-programming-ex-1"></a>

For valid p and q, the minimum column payoff is 4.2 and maximum row payoff is 4.5. What is certified?

<details>
<summary>Hint 1</summary>

**Hint.** Apply game weak duality to the directly evaluated responses.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Keep strategy accuracy separate from value accuracy.

</details>

<details>
<summary>Solution</summary>

**Solution.** The game value lies in $[4.2,4.5]$ and the unresolved absolute value gap is at most 0.3. This does not certify unique optimal strategies or a deterministic realised payoff in one play.

</details>

### Exercise 2: Matching pennies
<a id="matrix-games-linear-programming-ex-2"></a>

Certify value zero for $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

**Hint.** Use equal probability mixtures.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Evaluate both pure responses.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both p and q equal $(1/2,1/2)$. Every column payoff against p and every row payoff against q is zero, giving matching lower and upper bounds. The pure-strategy bounds minus one and one do not contradict the mixed result.

</details>

### Exercise 3: Two-by-two mixture
<a id="matrix-games-linear-programming-ex-3"></a>

For the worked nonsymmetric game, calculate each column payoff at p=(1/4,3/4).

<details>
<summary>Hint 1</summary>

**Hint.** Take weighted sums down the two columns.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** They should meet at the guaranteed value.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first is $3/4+3/4=3/2$ and the second is $0+2(3/4)=3/2$. Thus this p guarantees $3/2$ against every column mixture.

</details>

### Exercise 4: Column certificate
<a id="matrix-games-linear-programming-ex-4"></a>

For that game, compute Gq at q=(1/2,1/2).

<details>
<summary>Hint 1</summary>

**Hint.** Average each row's entries.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the largest result with the row guarantee.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both row payoffs equal $3/2$, so q limits every row mixture to that value. It matches the preceding lower bound and certifies optimality.

</details>

### Exercise 5: Unused action
<a id="matrix-games-linear-programming-ex-5"></a>

Why is the equal mixture of the first two rows suboptimal in the three-row example?

<details>
<summary>Hint 1</summary>

**Hint.** Check the omitted row.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A full certificate must test all rows.

</details>

<details>
<summary>Solution</summary>

**Solution.** The restricted mixture guarantees one, while the omitted third row guarantees $3/2$. Indifference equations on an assumed support do not establish all missing inequalities.

</details>

### Exercise 6: Optimal column interval
<a id="matrix-games-linear-programming-ex-6"></a>

Find all optimal column-one probabilities in the three-row example.

<details>
<summary>Hint 1</summary>

**Hint.** Keep both of the first two row payoffs below 3/2.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The third payoff is always 3/2.

</details>

<details>
<summary>Solution</summary>

**Solution.** The inequalities $2s\le3/2$ and $2(1-s)\le3/2$ give $s\le3/4$ and $s\ge1/4$. Every such q has upper bound $3/2$, matching the third row's guarantee.

</details>

### Exercise 7: Dominance
<a id="matrix-games-linear-programming-ex-7"></a>

If one row is componentwise worse than another, must its probability be zero in every optimum?

<details>
<summary>Hint 1</summary>

**Hint.** Weak dominance can tie on the opponent's support.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The deletion theorem preserves value, not every optimal strategy.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. If the strict disadvantage occurs only in columns receiving zero probability, a dominated row can still appear in some equilibrium. Deleting it preserves game value, but the set of equilibrium representations can shrink.

</details>

### Exercise 8: Payoff units
<a id="matrix-games-linear-programming-ex-8"></a>

If payoffs are transformed to 2G+3, how do value and strategies change?

<details>
<summary>Hint 1</summary>

**Hint.** The offset is common to every action pair.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Positive scaling preserves order.

</details>

<details>
<summary>Solution</summary>

**Solution.** The value becomes $2V+3$ and optimal strategies stay the same. This follows because every expected payoff transforms by exactly that affine expression.

</details>

### Exercise 9: Support complementarity
<a id="matrix-games-linear-programming-ex-9"></a>

At value V, a row has payoff strictly below V against an optimal q. What is its optimal p probability?

<details>
<summary>Hint 1</summary>

**Hint.** Use the nonnegative gap decomposition.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its slack is strictly positive.

</details>

<details>
<summary>Solution</summary>

**Solution.** It must be zero. Otherwise its positive probability times positive row slack would make the total primal–dual gap positive, contradicting optimality.

</details>

### Exercise 10: Expectation and one play
<a id="matrix-games-linear-programming-ex-10"></a>

Does an optimal mixed strategy guarantee the realised payoff V in a single random play?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish an expectation from a realised matrix entry.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The LP considers expected payoffs.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. It guarantees the expected payoff against permitted opponent strategies under the specified randomisation model. One outcome is a matrix entry and can differ substantially; finite repeated-play accuracy requires additional probability analysis.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. The finite minimax theorem is derived here from the book's LP strong-duality theorem, with the primal–dual pairing shown explicitly. No broader nonzero-sum equilibrium or repeated-play convergence theorem is asserted.

## Summary

Finite zero-sum games are a primal–dual pair of linear programmes. A row mixture protects a lower bound and a column mixture an upper bound; equal feasible bounds prove the minimax value. Complementary slackness explains support indifference while requiring every unused-action inequality to be checked. Dominance and common payoff transformations preserve value under precise conventions, and a small gap controls the value rather than uniqueness of strategies.
