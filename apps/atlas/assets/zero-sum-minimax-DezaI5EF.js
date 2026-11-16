var e=`---
parent_id: book-game-theory
chapter_id: zero-sum-minimax
title: "Zero-Sum Games and Minimax"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Zero-Sum Games and Minimax

Zero-sum games separate strategic calculation from agreement about a shared objective. The row player maximizes one payoff and the column player minimizes that same number. A guarantee must survive every opponent choice. The finite minimax theorem says that allowing independent randomisation closes the apparent gap between the two players' security levels.

This chapter proves that theorem using finite-dimensional convex geometry. The proof does not infer minimax from a Nash theorem that has yet to be proved. Preparation is finite mixed strategies, expected payoffs, elementary Euclidean inner products, and compactness of a closed bounded simplex. The next chapter translates the same guarantees into linear-programming constraints.

## 1. Lower and upper guarantees

**Definition 5.1 (Finite matrix game).** Let $A$ be an $m\\times n$ real matrix with $m,n\\ge1$. The row player's mixed strategy belongs to $\\Delta_m=\\{x\\in\\mathbb R^m:x_i\\ge0,\\sum_i x_i=1\\}$, and the column player's belongs to $\\Delta_n$. Their independent expected row payoff is $x^{\\mathsf T}Ay$, and the column payoff is its negative.

For fixed $x$, linearity in $y$ gives
$$
\\min_{y\\in\\Delta_n}x^{\\mathsf T}Ay=\\min_j(x^{\\mathsf T}A)_j.
$$
Indeed every mixed payoff is a convex combination of the displayed pure-column payoffs, and the smallest is attained by a pure column. Similarly, for fixed $y$, the largest row payoff is $\\max_i(Ay)_i$.

Define the lower and upper values
$$
v_-=\\max_{x\\in\\Delta_m}\\min_j(x^{\\mathsf T}A)_j,\\qquad
v_+=\\min_{y\\in\\Delta_n}\\max_i(Ay)_i.
$$
The extrema exist: the simplices are compact, and a minimum or maximum of finitely many continuous linear functions is continuous.

For completeness, bounded sequences in a finite-dimensional box have convergent subsequences by repeatedly choosing a smaller closed sub-box containing infinitely many terms. The diameters tend to zero, and completeness of the real coordinates gives the limit. A closed subset keeps that limit. This sequential compactness yields attainment of a continuous function's supremum by taking a sequence of values tending to the supremum. These elementary compactness facts are the analytic input used here.

**Lemma 5.2 (Weak minimax inequality).** Always $v_-\\le v_+$.

**Proof.** For every $x,y$,
$$
\\min_j(x^{\\mathsf T}A)_j\\le x^{\\mathsf T}Ay
\\le\\max_i(Ay)_i.
$$
Fix $y$ and maximize the left expression over $x$; the resulting $v_-$ is still at most the right expression. Then minimize that right expression over $y$. ∎

A pure-strategy gap is possible. In matching pennies, with matrix $\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}$, each pure row has worst payoff minus one, while each pure column permits a payoff one. These pure security levels differ. The theorem concerns the mixed simplices, not a claim that pure optimal actions always exist.

## 2. A separating direction built from nearest points

We need one geometric statement and prove the exact form used.

**Lemma 5.3 (Compact convex set below an orthant).** Let $C\\subset\\mathbb R^n$ be nonempty, compact, and convex. Suppose $C$ is disjoint from $D_\\alpha=\\{d:d_j\\ge\\alpha\\text{ for all }j\\}$. Then some $y\\in\\Delta_n$ satisfies $c\\cdot y<\\alpha$ for every $c\\in C$.

**Proof.** For each $c$, its closest point in $D_\\alpha$ has coordinates $d_j(c)=\\max(c_j,\\alpha)$. This follows by minimizing the sum of squared coordinate distances separately. The continuous function
$$
F(c)=\\sum_j\\max(\\alpha-c_j,0)^2
$$
attains its minimum on compact $C$, at $c^*$. Put $d^*=d(c^*)$ and $p=d^*-c^*$. Disjointness gives $\\|p\\|^2>0$, while $p_j\\ge0$ for every coordinate.

For any $c\\in C$, the segment $c^*+t(c-c^*)$ stays in $C$ for $0\\le t\\le1$. No such point can be closer to the fixed $d^*$ than the globally closest pair. Expanding its squared distance gives
$$
\\|p-t(c-c^*)\\|^2\\ge\\|p\\|^2.
$$
Divide the resulting inequality by $t>0$ and let $t$ decrease to zero. It follows that $p\\cdot(c-c^*)\\le0$.

Whenever $p_j>0$, we have $d_j^*=\\alpha$. Coordinates with $p_j=0$ contribute nothing, so $p\\cdot d^*=\\alpha\\sum_jp_j$. Consequently
$$
p\\cdot c\\le p\\cdot c^*
=p\\cdot d^*-\\|p\\|^2
<\\alpha\\sum_jp_j.
$$
The positive sum $\\sum_jp_j$ allows normalization $y=p/\\sum_jp_j$. It belongs to $\\Delta_n$ and gives the required strict inequality. ∎

The direction is nonnegative because the excluded target is an upper orthant. A general separating vector without that sign condition would not define an opponent's probability distribution. This is why the geometry must match the strategic question.

## 3. The finite minimax theorem

**Theorem 5.4 (Finite minimax).** Every finite real matrix game has optimal mixed strategies $x^*,y^*$ and a value $v$ such that
$$
x^{\\mathsf T}Ay^*\\le v\\le (x^*)^{\\mathsf T}Ay
\\quad\\text{for all }x\\in\\Delta_m,\\ y\\in\\Delta_n.
$$
In particular $v_-=v_+=v$.

**Proof.** Choose a row strategy $x^*$ attaining $v_-$ and put $v=v_-$. Let
$$
C=\\{x^{\\mathsf T}A:x\\in\\Delta_m\\}\\subset\\mathbb R^n.
$$
It is a nonempty compact convex set, being the continuous linear image of a simplex. For every $\\alpha>v$, it is disjoint from $D_\\alpha$: a point in their intersection would give a row strategy whose every pure-column payoff is at least $\\alpha$, contradicting the definition of $v$.

Lemma 5.3 therefore provides a column strategy $y_\\alpha$ such that $x^{\\mathsf T}Ay_\\alpha<\\alpha$ for every row strategy $x$. Take $\\alpha_r=v+1/r$. Compactness of $\\Delta_n$ gives a subsequence of $y_{\\alpha_r}$ converging to some $y^*\\in\\Delta_n$. For each pure row $i$, passing to the limit gives $(Ay^*)_i\\le v$. Every row mixture is a convex combination of those inequalities, so $x^{\\mathsf T}Ay^*\\le v$.

By the choice of $x^*$, all its pure-column payoffs are at least $v$, hence $(x^*)^{\\mathsf T}Ay\\ge v$ for every mixed column strategy. These are the desired inequalities. Evaluating them at the pair $(x^*,y^*)$ forces equality there. Weak minimax and the displayed guarantees then give $v_-=v_+=v$. ∎

Finiteness is used in the compact simplices and the continuous bilinear payoff. An infinite action game needs additional assumptions; the theorem is not obtained merely by replacing a finite minimum by an infimum. Nor does existence specify a unique strategy. Several mixtures can satisfy the same complete guarantee.

## 4. Certificates that can be checked directly

**Proposition 5.5 (Matching bounds certify the value).** If $x\\in\\Delta_m,y\\in\\Delta_n$ satisfy $x^{\\mathsf T}A\\ge c\\mathbf1^{\\mathsf T}$ and $Ay\\le c\\mathbf1$, then the game value is $c$ and both strategies are optimal.

**Proof.** The first inequality guarantees at least $c$ against every pure column and therefore every mixture. The second permits at most $c$ against every pure row and therefore every mixture. Weak minimax traps both security levels at $c$, and the finite minimax theorem identifies their common value. ∎

The inequalities are componentwise. They inspect every opponent action, including unused actions. Equalising only two selected payoffs is not sufficient if another omitted action can do better.

**Worked example 5.6 (An asymmetric two-by-two game).** Take
$$
A=\\begin{pmatrix}2&-1\\\\-2&3\\end{pmatrix}.
$$
If row one has probability $p$, the pure-column payoffs are $4p-2$ and $3-4p$. Their intersection occurs at $p=5/8$, giving both payoffs $1/2$. If column one has probability $q$, the pure-row payoffs are $3q-1$ and $3-5q$. At $q=1/2$, both equal $1/2$. These two normalized mixtures provide a lower and upper certificate of $1/2$. The calculation proves the value without relying on a numerical optimizer or assuming that indifference alone always suffices.

**Worked example 5.7 (A support smaller than the action set).** Let
$$
A=\\begin{pmatrix}3&0\\\\0&2\\\\-1&-1\\end{pmatrix}.
$$
The row strategy $(2/5,3/5,0)$ earns $6/5$ against either column. The column strategy $(2/5,3/5)$ gives payoffs $6/5,6/5,-1$ to the three pure rows. Thus the value is $6/5$. The unused third row is strictly worse under the proposed opponent strategy, which is allowed. Requiring every row, including unused ones, to be indifferent would incorrectly reject the equilibrium.

**Worked example 5.8 (A pure saddle point).** For $A=\\begin{pmatrix}4&2\\\\5&3\\end{pmatrix}$, row two guarantees three, and column two allows at most three. Hence the pure pair in row two, column two is optimal and the value is three. Randomisation is permitted but unnecessary. Pure optimal strategies occur when the row minimum and column maximum meet at a common saddle point.

## 5. Optimal supports and zero-sum Nash equilibrium

**Proposition 5.9 (Saddle points and equilibrium).** A pair of mixed strategies is a Nash equilibrium of the zero-sum game exactly when its row and column strategies are optimal security strategies.

**Proof.** If the strategies are optimal, the value inequalities show that neither player can improve by a unilateral deviation. Conversely, at a Nash pair $(x,y)$ with payoff $c$, every row deviation gives at most $c$ and every column deviation leaves the row payoff at least $c$. Thus $x$ guarantees $c$ and $y$ limits the payoff to $c$, so Proposition 5.5 makes both optimal. ∎

All optimal row strategies can be paired with all optimal column strategies. The equilibrium set is the Cartesian product of two convex sets defined by linear inequalities. This rectangular structure is a special zero-sum property; it need not hold for general games.

**Proposition 5.10 (Support equalities).** At an optimal pair of value $v$, every row used with positive probability has payoff $v$ against $y$, and every positively used column yields payoff $v$ against $x$.

**Proof.** All pure-row payoffs are at most $v$, while their average with weights $x_i$ is $v$. A positively weighted value strictly below $v$ would make that average smaller, so every used row has equality. The column argument averages numbers at least $v$ with weights $y_j$ and is symmetric. ∎

Unused rows still satisfy the upper inequality and unused columns the lower inequality. This gives a systematic support check: verify probabilities, equalities on support, and inequalities off support. A candidate that satisfies only the equalities may fail against an unused deviation.

## 6. Interpretation and the next algebraic formulation

A minimax guarantee protects against every strategy in the written opponent action set. It does not protect against an omitted action, an unmodelled payoff change, or a different information structure. Randomisation here represents independent probability distributions, not a theorem that real players will sample at those frequencies.

The guarantee variable can now be made an explicit unknown. Row maximizes $v$ subject to $A^{\\mathsf T}x\\ge v\\mathbf1$, $x\\ge0$, and $\\mathbf1^{\\mathsf T}x=1$. Column minimizes an upper bound with reversed inequalities. These are linear programs. The next chapter proves their dual certificate logic and explains feasibility, boundedness, and complementary slackness, so an equilibrium calculation can be presented as an exact mathematical witness.

## Worked example: a guarantee under payoff uncertainty

Suppose every payoff in Worked example 5.6 may differ from its stated value by
at most one tenth. Keep the two mixtures already constructed. Against any pure
column, the row player's changed payoff is an average of entry changes, with
nonnegative weights adding to one. That average cannot fall below minus one
tenth. The old row strategy therefore guarantees at least four tenths in every
admissible changed matrix. The old column strategy similarly limits the row
payoff to at most six tenths. These statements survive arbitrary independent
entry changes within the stated interval; no probabilistic error model is
being assumed.

More generally, a uniform entry error bounded by a nonnegative number epsilon
changes every mixed-pair payoff by at most epsilon. Apply this observation to
an optimal row strategy for the original matrix and then to an optimal column
strategy. The new game value lies between the old value minus epsilon and the
old value plus epsilon. This proves continuity of the value directly from
security certificates, without claiming that the optimal strategies themselves
change continuously or remain unique.

The original row mixture need not be exactly optimal in the changed game. Its
worst-case loss relative to the new value is at most twice epsilon, because
the new value can rise while its old guarantee falls. Distinguishing a robust
approximate guarantee from an exact equilibrium is essential when a payoff
table comes from measurements rather than a stipulated mathematical model.

## Exercises

### Exercise 5.1
<a id="zero-sum-minimax-ex-1"></a>

Prove that against a fixed row mixture, a minimizing column mixture can be chosen pure.

<details>
<summary>Hint 1</summary>

**Hint.** Write its expected payoff as a convex combination of pure-column payoffs.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A convex combination cannot be below its smallest entry.

</details>

<details>
<summary>Solution</summary>

**Solution.** For fixed $x$, the payoff is $\\sum_j y_j(x^{\\mathsf T}A)_j$. Since $y_j\\ge0$ and sums to one, this is at least the smallest pure-column payoff. Concentrating all probability on a column attaining that smallest value achieves equality. Thus a pure minimizing response exists, even though the row's optimal security strategy itself may need to mix.

</details>

### Exercise 5.2
<a id="zero-sum-minimax-ex-2"></a>

Find both optimal mixtures and the value for $A=\\begin{pmatrix}0&2\\\\1&0\\end{pmatrix}$, checking lower and upper bounds.

<details>
<summary>Hint 1</summary>

**Hint.** Equalise the two pure-column payoffs from a row mixture.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then equalise the pure-row payoffs from a column mixture and check their common value.

</details>

<details>
<summary>Solution</summary>

**Solution.** If row one has probability $p$, the column payoffs are $1-p$ and $2p$, equal at $p=1/3$ with value $2/3$. If column one has probability $q$, the row payoffs are $2-2q$ and $q$, equal at $q=2/3$. The two mixtures certify the common lower and upper bound $2/3$, so they are optimal.

</details>

### Exercise 5.3
<a id="zero-sum-minimax-ex-3"></a>

For matching pennies, compare pure security levels with mixed security levels.

<details>
<summary>Hint 1</summary>

**Hint.** Compute each pure row's minimum and each pure column's maximum.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The equal mixture makes both opponent pure responses yield zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each pure row has a worst payoff minus one, and each pure column permits a best row payoff one, so the pure maximin and minimax levels are minus one and one. Mixing each player's actions equally makes all pure response payoffs zero. The matching certificates prove a mixed value zero. The finite minimax theorem concerns these mixed strategy spaces, so there is no contradiction.

</details>

### Exercise 5.4
<a id="zero-sum-minimax-ex-4"></a>

Show that optimal row strategies form a convex set.

<details>
<summary>Hint 1</summary>

**Hint.** Use the componentwise guarantee inequalities at the common value.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A convex combination preserves nonnegativity, normalization, and all linear lower bounds.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $x,x'$ are optimal and $0\\le t\\le1$, then $z=tx+(1-t)x'$ is in the simplex. For every column, $z^{\\mathsf T}Ae_j=t x^{\\mathsf T}Ae_j+(1-t)(x')^{\\mathsf T}Ae_j\\ge tv+(1-t)v=v$. Thus $z$ guarantees $v$ and is optimal. The same argument with upper bounds proves convexity of optimal column strategies.

</details>

### Exercise 5.5
<a id="zero-sum-minimax-ex-5"></a>

Why can support equalities alone fail? Use $A=\\begin{pmatrix}1&-1&-2\\\\-1&1&-2\\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

**Hint.** The equal row mixture earns zero against the first two columns.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Inspect the omitted third column.

</details>

<details>
<summary>Solution</summary>

**Solution.** The row mixture $(1/2,1/2)$ equalises the first two column payoffs at zero, but the third column gives minus two. It therefore does not guarantee zero. In fact pure column three limits every row mixture to minus two, and every row mixture guarantees at least minus two, so the value is minus two. Omitting one deviation invalidates the claimed certificate.

</details>

### Exercise 5.6
<a id="zero-sum-minimax-ex-6"></a>

Prove that positively used rows have payoff equal to the value, while unused rows need not have a strict inequality.

<details>
<summary>Hint 1</summary>

**Hint.** Average the pure-row inequalities with the optimal row probabilities.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An unused row receives zero weight and may still tie.

</details>

<details>
<summary>Solution</summary>

**Solution.** All pure-row payoffs against an optimal column are at most $v$, and their optimal weighted average is $v$. Any positively weighted strict inequality would lower the average, so used rows have equality. No strictness follows for zero-weight rows: in an all-zero matrix every row has payoff zero, including rows unused by a chosen optimal mixture. Off-support conditions are weak inequalities.

</details>

### Exercise 5.7
<a id="zero-sum-minimax-ex-7"></a>

If $B=aA+b\\mathbf1\\mathbf1^{\\mathsf T}$ with $a>0$, prove that its value is $av+b$ and its optimal strategy sets are unchanged.

<details>
<summary>Hint 1</summary>

**Hint.** Normalized mixtures make the constant term contribute exactly $b$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Positive scaling preserves all maximization and minimization comparisons.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every $x,y$, the transformed payoff is $x^{\\mathsf T}By=a x^{\\mathsf T}Ay+b$. Taking either security optimization therefore multiplies its value by $a$ and adds $b$. Since $a>0$, the strategies attaining an optimum are exactly the old ones. At $a=0$, every strategy becomes optimal, so positivity matters for preserving the full optimal sets.

</details>

### Exercise 5.8
<a id="zero-sum-minimax-ex-8"></a>

Apply Lemma5.3 to the singleton convex set $C=\\{(-1,2)\\}$ and $\\alpha=0$, finding $d^*,p,y$.

<details>
<summary>Hint 1</summary>

**Hint.** Project each coordinate upward to zero when necessary.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Normalize the nonnegative difference vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** The nearest point in the upper orthant is $d^*=(0,2)$. Hence $p=d^*-c^*=(1,0)$ and $y=(1,0)$. The certificate gives $c^*\\cdot y=-1<0=\\alpha$. This concrete example shows how the upper-orthant geometry produces nonnegative probability weights rather than an arbitrary signed separating vector.

</details>

### Exercise 5.9
<a id="zero-sum-minimax-ex-9"></a>

Prove that any optimal row strategy can be paired with any optimal column strategy to form an equilibrium.

<details>
<summary>Hint 1</summary>

**Hint.** Write the guarantees for the two chosen strategies separately.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Evaluate their cross-pair payoff between the same lower and upper value.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $x$ is optimal it earns at least $v$ against every column, including a chosen optimal $y$. If $y$ is optimal it allows at most $v$ against every row, including $x$. Thus their payoff is $v$, and neither unilateral deviation improves it. This product property uses the zero-sum objective and does not generally hold for unrelated Nash equilibria in a general-sum game.

</details>

### Exercise 5.10
<a id="zero-sum-minimax-ex-10"></a>

Show directly that two pairs of matching lower/upper certificates cannot certify different game values.

<details>
<summary>Hint 1</summary>

**Hint.** Cross the row certificate from one pair with the column certificate from the other.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Reverse the crossing to obtain the opposite inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** Suppose one pair certifies $c$ and another $d$. Playing the first row strategy against the second column strategy gives a payoff at least $c$ and at most $d$, so $c\\le d$. Crossing the second row strategy with the first column gives $d\\le c$. Therefore $c=d$. Optimal strategies may be nonunique, but their matching certified value is unique.

</details>

## Sources

Original exposition extending the zero-sum example in [Games, Equilibria, and Strategic Response](../applied-modeling-proof-reference/games-equilibria-response.md), whose source and solutions remain unchanged. A primary book route is Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/). The separating-direction and finite minimax proofs needed here are given in full; the presentation does not copy the reference's examples.

## Summary

Finite mixed matrix games have matching lower and upper guarantees. The proof constructs a nonnegative separating direction and takes a compactness limit, yielding optimal strategies and a unique value. Exact row and column inequalities certify a candidate; support equalities must be accompanied by off-support inequalities. The linear-programming chapter next packages these guarantees as primal and dual constraints.

`;export{e as default};