
# Mixed Strategies, Supports and Indifference

Randomization enlarges a player's choices from individual actions to probability distributions. This change is essential in games such as matching pennies, where every deterministic profile permits an improvement. A mixed strategy does not mean choosing after seeing the opponent's realized action, and a mixed equilibrium is not automatically a statement about observed frequencies. It is an exact expected-payoff condition on distributions.

The preparation is finite probability from Discrete Mathematics, the payoff functions of [Strategic-Form Games](strategic-form-games.md), and the support criterion from [Nash Equilibrium](nash-equilibrium.md). Elementary vectors and matrices make the formulas shorter. The fixed-point existence proof later uses the geometry developed here; this chapter concentrates on finite calculations and their checks.

## Probability simplices

**Definition 4.1 (Mixed strategy and support).** If a player has $m$ actions, their mixed-strategy set is
\[
\Delta_m=\{p\in\mathbb R^m:p_j\ge0,\ \sum_jp_j=1\}.
\]
The support of $p$ is the set of indices with $p_j>0$. A pure action is the corresponding unit vector. A fully mixed strategy has every coordinate positive.

The simplex is convex: combining two probability vectors with weights between zero and one preserves nonnegativity and total mass. It is closed and bounded in finite-dimensional Euclidean space and hence compact. Those properties belong to the strategy domain; they do not by themselves prove that best-response correspondences have a fixed point.

For two players with row payoff matrix $A$ and column payoff matrix $B$, the expected payoffs under independent mixtures are $p^{\mathsf T}Aq$ and $p^{\mathsf T}Bq$. The probability of cell $(i,j)$ is $p_iq_j$. For several players the probability of a profile is the product of its coordinates, giving a multilinear expected-payoff function.

Linearity applies in a player's own mixture with opponents fixed. Jointly the expected payoff is generally not linear, because it contains products of different players' probabilities. Calling the extension multilinear records exactly which variables can be averaged while holding the others constant.

## Independence and information

A player samples their action using their own random device without observing the opponent's current realization. If both instead receive correlated recommendations from a common signal, their joint law need not factor into a product. Its marginals do not determine the outcome distribution.

For a coordination payoff of one for matching and zero otherwise, independent half mixtures match with probability one half. A device recommending $(A,A)$ half the time and $(B,B)$ half the time has the same individual marginals but matches with probability one. Thus correlation changes expected payoffs even when each player's action frequencies are unchanged. Whether obeying recommendations is incentive compatible is another question, not answered by merely constructing the joint law.

Randomization can represent deliberate unpredictable play, population heterogeneity or uncertainty in a model. These interpretations should not be interchanged without explanation. A single player's fixed unknown type and repeated fresh random draws may generate similar marginal data but have different conditional implications when observations accumulate.

## Why supported actions must tie

**Proposition 4.2 (Best-response face).** Against fixed opponents, let $M$ be the largest pure-action payoff. The best-response mixtures are exactly the probability distributions supported on actions earning $M$. They form the face of the simplex spanned by those actions.

*Proof.* A mixture has payoff $\sum_jp_jv_j$ with every $v_j\le M$. If it places positive mass on any $v_j<M$, the average is strictly below $M$. If its support lies entirely on maximizing actions, the average equals $M$. Thus these and only these mixtures maximize. Convex combinations of their unit vectors describe precisely the indicated simplex face. ∎

This result is the source of indifference equations. A player randomizing between two actions must be indifferent between them against the opponent's distribution. The opponent's probability is determined by that player's indifference, not by making the opponent's own payoffs equal in the wrong variable.

The face description includes ties outside a chosen support. A zero coordinate does not force strict payoff inferiority. Degenerate games may have many maximizing actions and whole continua of equilibrium mixtures. Any calculation assuming a particular support must later verify all actions outside it.

## A complete two-by-two calculation

Write row payoffs as $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and column payoffs as $\begin{pmatrix}w&x\\y&z\end{pmatrix}$. Let $p$ be the probability of the top row and $q$ the probability of the left column. The two row payoffs are $qa+(1-q)b$ and $qc+(1-q)d$. If both rows are supported, their equality gives
\[
q=\frac{d-b}{a-b-c+d},
\]
provided the denominator is nonzero. Similarly column indifference gives
\[
p=\frac{z-y}{w-x-y+z}.
\]

A candidate is fully mixed only when both numbers lie strictly between zero and one. A boundary value means the assumed full support was wrong, although it may identify a boundary equilibrium after the remaining inequalities are checked. A probability outside the unit interval is not repaired by clipping it to an endpoint; the clipped pair generally no longer solves the incentive conditions.

If a denominator vanishes, return to the original affine equality. Its two sides may be identical for every probability, or may never agree. Division by zero hides this important distinction. For example, identical row payoffs at every column make the row player indifferent for all opponent mixtures, not uniquely indifferent at an undefined fraction.

**Worked example 4.3 (An asymmetric zero-sum game).** Let the row payoff matrix be
\[
A=\begin{pmatrix}2&-1\\-2&3\end{pmatrix},
\]
and the column player's payoff its negative. If the row player uses the top row with probability $p$, the payoffs against the two columns are $4p-2$ and $3-4p$. Equality gives $p=5/8$ and common payoff one half.

If the column player uses the left column with probability $q$, the two row payoffs are $3q-1$ and $3-5q$. Equality gives $q=1/2$, also with payoff one half. Against either pure column the row mixture earns one half, and against either pure row the column mixture allows one half. Therefore neither mixed deviation improves payoff, proving equilibrium. This verification uses both players' comparisons; solving only the first equality would not determine the opponent's best-response condition.

## Supports beyond two actions

For a proposed row support $I$ and column support $J$, assign positive probabilities on those supports, impose total mass one, and equalize every supported action's payoff. Then require every excluded action to earn no more than the common supported payoff. The equations are linear in the opponent's probabilities once the supports are fixed.

Some supports yield inconsistent equations, some yield isolated solutions and some yield families. Enumerating supports is finite but can be expensive because the number of subsets grows exponentially. The method is an exact finite specification, not a claim of polynomial-time solvability for arbitrary games.

**Worked example 4.4 (An excluded action invalidates indifference).** Consider row payoffs U:$(2,0)$, D:$(0,2)$ and M:$(3/2,3/2)$, with column payoffs the negatives. Equalizing U and D gives $q=1/2$, at which both earn one. A calculation restricted to those two rows might propose a half-half row mixture.

But the excluded row M earns $3/2$, so the proposed row strategy is not a best response. In fact M is best whenever $1/4\le q\le3/4$, because both $2q$ and $2(1-q)$ are at most $3/2$. If the row player uses M purely, the column player is indifferent between columns. Hence pure M together with any such $q$ is an equilibrium. This example shows both a failed support assumption and a continuum of valid equilibria.

**Worked example 4.5 (An equilibrium with an unused tied action).** Let both players receive zero at every cell of a two-by-two matrix. Every action and mixture is a best response against every opponent mixture. In particular, the pure profile top-left is an equilibrium although the unused bottom row and right column tie the used actions.

There is no contradiction with support indifference. Supported actions must maximize, but need not exhaust all maximizers. This degenerate game has the whole product of simplices as its equilibrium set. A solver reporting one point has found a valid equilibrium but has not described all equilibria. An attempt to force unique probabilities by dividing indifference equations would encounter identities rather than independent equations.

## Expected payoff and deviations

A mixed deviation can be checked through pure deviations because own expected payoff is linear. This is not a license to ignore mixed strategies entirely. A player's own equilibrium distribution may be nontrivial, and the opponent's distribution determines which pure deviations are best.

For three or more players, a pure action's expected payoff is calculated against the product of all other players' mixtures. The dependence on those opponents is multilinear. A player may be indifferent against one joint distribution and not against another with the same marginals if correlations are allowed; Nash fixes the product structure rather than all possible joint beliefs.

An equilibrium player's random device need not be observed by anyone else. If the opponent sees the realized action before selecting a response, the strategic interaction is sequential and the unconditional product calculation is no longer the appropriate model. Information is part of the rule, not an afterthought attached to an equilibrium formula.

## Interpreting probabilities carefully

Indifference means every action in the support gives the same expected payoff given the specified opponents. It does not mean every realized outcome has the same payoff. In matching pennies, equilibrium expected payoff is zero but every realized payoff is plus or minus one. Expected value summarizes the distribution, not each sample.

Nor does equilibrium imply that a player should alternate actions to guarantee exact frequencies over a short run. A predictable alternating pattern can be exploited by an observer, while independent random draws remain unpredictable under the model. Conversely a statistical sample need not have frequencies exactly equal to the equilibrium probabilities, even when generated by the equilibrium distribution.

Sensitivity matters when payoffs are estimated. A small perturbation can move mixing probabilities, change which support is feasible or break a continuum into isolated equilibria. Reporting the support, indifference equations and excluded-action margins makes the calculation inspectable. Reporting only decimal probabilities conceals those structural facts.

The next zero-sum chapters turn mixtures into lower and upper payoff guarantees. The existence chapter then explains why every finite game has some mixed equilibrium even when support enumeration gives no immediate intuition. The present chapter provides the probability geometry and exact algebra those arguments require.

## Rounding probabilities without losing the certificate

Exact fractions are valuable in small examples because they preserve support and indifference visibly. Large computations may instead return decimals. A rounded vector must still have nonnegative entries summing to one; coordinate rounding followed by an unexamined use of the original equations is not a complete equilibrium check.

There is a simple bound for the payoff effect of probability error. Suppose every entry of a two-player payoff matrix A has absolute value at most M, and p,p',q,q' are probability vectors. Then
\[
|p^{\mathsf T}Aq-p'^{\mathsf T}Aq'|
\le M\big(\|p-p'\|_1+\|q-q'\|_1\big).
\]
To prove it, insert the intermediate expression $p'^{\mathsf T}Aq$. The first difference is a signed weighted sum of pure-row payoffs against q, each bounded in absolute value by M, giving $M\|p-p'\|_1$. The second uses pure-column payoffs against p' and gives the corresponding q bound. The triangle inequality completes the argument.

This proves continuity with an explicit finite constant. It does not preserve the exact support: a tiny positive coordinate can round to zero, and a tied excluded action can become superior after payoff perturbation. Thus support labels and regret margins should be reported alongside approximate probabilities.

When a fixed support yields a family of solutions, decimal output can also disguise multiplicity. In the three-row example, pure M paired with any left-column probability in an interval is an equilibrium. A routine returning the midpoint has found one valid profile. It has not established uniqueness, and its display precision says nothing about the size of the equilibrium family.

A systematic support calculation has four logically separate stages. First choose the nonempty supports. Next solve normalization and indifference equalities. Then impose positivity for supported coordinates and nonnegativity for all probabilities. Finally verify the payoff inequalities for excluded actions. Keeping those stages visible makes a failed candidate informative: it tells us whether the obstacle was probability feasibility, inconsistent equalities or an overlooked deviation.

The same calculation explains why blindly clipping a negative coordinate is unsound. Clipping changes normalization or moves onto a different face, so the old equalities no longer certify the new point. A boundary candidate is a fresh support problem with its own inequalities. One may solve it, but must not treat it as the unchanged interior solution.

These bounds concern the mathematical distributions. A finite sequence generated from them has sampling variation, and a deliberately correlated sequence may violate the product model. Numerical approximation, statistical estimation and strategic randomization are three distinct sources of uncertainty; each should be named rather than combined into one vague error bar.

## Exercises

<a id="mixed-strategies-ex-1"></a>
### Exercise 4.1

Compute the expected row payoff for $A=\begin{pmatrix}1&3\\0&2\end{pmatrix}$, $p=(1/4,3/4)$ and $q=(1/2,1/2)$.

<details>
<summary>Hint 1</summary>

First compute each pure row's payoff against q.

</details>

<details>
<summary>Hint 2</summary>

Then average those values using p.

</details>

<details>
<summary>Solution</summary>

The top row earns $(1+3)/2=2$, while the bottom earns $(0+2)/2=1$. The mixture earns $(1/4)2+(3/4)1=5/4$. The top row is strictly better against this q, so the supplied p is not a best response despite being a feasible probability vector.

</details>

<a id="mixed-strategies-ex-2"></a>
### Exercise 4.2

Prove convexity of the probability simplex.

<details>
<summary>Hint 1</summary>

Take two probability vectors and a coefficient between zero and one.

</details>

<details>
<summary>Hint 2</summary>

Check coordinates and total mass separately.

</details>

<details>
<summary>Solution</summary>

If p and r have nonnegative coordinates, so does $tp+(1-t)r$ for $0\le t\le1$. Its coordinate sum is $t+(1-t)=1$. Thus it lies in the simplex. This elementary fact is one geometric ingredient in mixed existence, but does not alone prove a fixed point.

</details>

<a id="mixed-strategies-ex-3"></a>
### Exercise 4.3

Derive the row-indifference formula for a general two-by-two game.

<details>
<summary>Hint 1</summary>

Expand both affine pure payoffs.

</details>

<details>
<summary>Hint 2</summary>

Collect the coefficient of q on one side.

</details>

<details>
<summary>Solution</summary>

Equality is $qa+(1-q)b=qc+(1-q)d$, which rearranges to $q(a-b-c+d)=d-b$. If the coefficient is nonzero, divide to obtain the formula. If zero, equality holds for all q when $d=b$ and for none otherwise. Feasibility and the other player's condition still require checking.

</details>

<a id="mixed-strategies-ex-4"></a>
### Exercise 4.4

In Worked example 4.3, verify the row player's guarantee against an arbitrary column mixture.

<details>
<summary>Hint 1</summary>

The two pure-column payoffs are equal.

</details>

<details>
<summary>Hint 2</summary>

Average them with any column probabilities.

</details>

<details>
<summary>Solution</summary>

At p equal to five eighths, each pure column gives one half. Against left probability q, expected payoff is $q/2+(1-q)/2=1/2$. Hence every opponent mixture gives the same payoff. Together with the column player's matching upper guarantee this certifies the equilibrium value.

</details>

<a id="mixed-strategies-ex-5"></a>
### Exercise 4.5

Why does a calculated probability of 1.4 not establish a fully mixed equilibrium?

<details>
<summary>Hint 1</summary>

A probability vector has nonnegative coordinates summing to one.

</details>

<details>
<summary>Hint 2</summary>

The complementary probability would be negative.

</details>

<details>
<summary>Solution</summary>

Probability 1.4 forces the other coordinate to be minus0.4, outside the simplex. The assumed interior support is inconsistent. One must inspect boundary supports and their best-response inequalities rather than clip the answer, since clipping generally destroys the original indifference conditions.

</details>

<a id="mixed-strategies-ex-6"></a>
### Exercise 4.6

Find the q range where M is best in Worked example 4.4.

<details>
<summary>Hint 1</summary>

Compare its payoff three halves with both alternatives.

</details>

<details>
<summary>Hint 2</summary>

Solve two linear inequalities.

</details>

<details>
<summary>Solution</summary>

The requirements are $2q\le3/2$ and $2(1-q)\le3/2$, giving q at most three quarters and at least one quarter. With row pure M, both columns tie, so every q in this interval gives equilibrium. At the endpoints an unused row ties but does not improve.

</details>

<a id="mixed-strategies-ex-7"></a>
### Exercise 4.7

Show that equal marginals need not determine a joint payoff.

<details>
<summary>Hint 1</summary>

Compare independent half mixtures with a common matching recommendation.

</details>

<details>
<summary>Hint 2</summary>

Use payoff one for matching and zero otherwise.

</details>

<details>
<summary>Solution</summary>

Independent half mixtures put probability one quarter on each cell, so matching has probability one half. A joint law assigning one half to AA and one half to BB has identical half-half marginals but matching probability one. Expected payoff therefore differs. Correlation is extra data beyond individual strategy marginals.

</details>

<a id="mixed-strategies-ex-8"></a>
### Exercise 4.8

Can a supported action earn strictly less than another supported action at equilibrium?

<details>
<summary>Hint 1</summary>

Transfer probability from the lower-payoff action.

</details>

<details>
<summary>Hint 2</summary>

The opponents' distribution remains fixed.

</details>

<details>
<summary>Solution</summary>

No. Moving any positive mass from the inferior action to the superior one strictly raises expected payoff by that mass times the positive difference. This is a feasible unilateral deviation. Therefore every supported action must attain the same maximum, although unused actions may tie.

</details>

<a id="mixed-strategies-ex-9"></a>
### Exercise 4.9

Explain why expected payoff zero does not mean every realized payoff is zero.

<details>
<summary>Hint 1</summary>

Use matching pennies.

</details>

<details>
<summary>Hint 2</summary>

List its two possible payoff values.

</details>

<details>
<summary>Solution</summary>

At half mixtures matching pennies produces plus one or minus one, each with probability one half for the row player. Their expectation is zero. The equilibrium condition concerns expected utility of deviations, not equality of realized samples or absence of risk.

</details>

<a id="mixed-strategies-ex-10"></a>
### Exercise 4.10

In an all-zero finite game, describe every equilibrium rather than one example.

<details>
<summary>Hint 1</summary>

Every strategy earns the same payoff against every profile.

</details>

<details>
<summary>Hint 2</summary>

The entire product of simplices satisfies all inequalities.

</details>

<details>
<summary>Solution</summary>

Every mixed profile is an equilibrium because no deviation changes payoff from zero. Pure profiles are included as vertices. Thus the equilibrium set is the whole product of strategy simplices, illustrating why indifference equations can be identities and why one computed point need not describe all solutions.

</details>

## Sources

Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/index.html), provides the primary author-maintained reference for mixed strategies and finite equilibrium. The support calculations and finite examples here are original exposition.

## Summary

Mixed strategies are probability vectors, and independent profiles produce multilinear expected payoffs. Best-response mixtures are supported on maximizing pure actions. Indifference supplies candidate supports, but probability feasibility and all excluded-action inequalities complete the check. Correlation, realized frequencies, behavioral learning and equilibrium existence require their own explicit assumptions.
