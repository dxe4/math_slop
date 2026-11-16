var e=`---
parent_id: book-game-theory
chapter_id: cooperative-games-shapley-value
title: "Cooperative Games and the Shapley Value"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Cooperative Games and the Shapley Value

A strategic-form game specifies individual actions and unilateral deviations. A cooperative transferable-utility game instead records what each coalition can obtain together and asks how to allocate the total. These are different mathematical objects. A coalition value does not itself specify negotiation rules or a process selecting an allocation.

This chapter develops the core and the Shapley value, proves the Shapley axiomatization, and connects core existence to balanced weights using the linear-programming theorem already proved. Preparation is finite subsets, permutations, linear inequalities, and elementary expectation.

## 1. Transferable utility is a substantive assumption

**Definition 12.1 (Finite TU game).** A game consists of a nonempty finite player set $N$ and a function $v:2^N\\to\\mathbb R$ with $v(\\varnothing)=0$. The number $v(S)$ is the transferable worth available to coalition $S$. An allocation is a vector $x\\in\\mathbb R^N$, and write $x(S)=\\sum_{i\\in S}x_i$.

Transferability assumes a common unit in which coalition members can redistribute worth. It is not justified by adding arbitrary utility labels from a noncooperative payoff table. The characteristic function also assumes coalition worth is specified without a further dependence on how outsiders partition themselves. Games with externalities need a richer model.

An allocation is efficient when $x(N)=v(N)$ and individually rational when $x_i\\ge v(\\{i\\})$. Negative worths and negative transfers are allowed in the basic model; nonnegativity should not be inserted without checking the application.

**Definition 12.2 (Core).** The core is
$$
\\operatorname{Core}(v)=\\{x:x(N)=v(N),\\ x(S)\\ge v(S)
\\text{ for every }S\\subseteq N\\}.
$$
Its coalition inequalities mean no coalition can strictly improve all its members by redistributing its own worth.

Indeed, if $x(S)<v(S)$, the positive surplus can be distributed to make every member strictly better. If $x(S)\\ge v(S)$, no redistribution of a total at most $v(S)$ can raise every member's payoff above $x_i$. This conclusion uses transferable worth and the specified deviation notion.

## 2. Stability can fail

**Worked example 12.3 (The three-player majority game).** Let $N=\\{1,2,3\\}$, with $v(S)=1$ when $|S|\\ge2$ and zero otherwise. A core vector would have total one and satisfy
$$
x_1+x_2\\ge1,\\quad x_1+x_3\\ge1,\\quad x_2+x_3\\ge1.
$$
Adding gives $2(x_1+x_2+x_3)\\ge3$, contradicting total one. The core is empty. Equal division gives each player $1/3$, but any pair receives only $2/3$ and can use its worth one to improve both. Symmetry of an allocation does not guarantee coalitional stability.

When the core is nonempty it may contain many allocations. It is a convex set: efficiency is a linear equality and every coalitional requirement is a linear inequality, all preserved by convex combinations. Nonemptiness, uniqueness, and selection are separate questions.

## 3. Average marginal contributions

For a permutation $\\pi$ of $N$, let $P_i^\\pi$ be the set of players preceding $i$. The marginal contribution of $i$ in that order is
$$
m_i^\\pi(v)=v(P_i^\\pi\\cup\\{i\\})-v(P_i^\\pi).
$$

**Definition 12.4 (Shapley value).** For $n=|N|$,
$$
\\phi_i(v)=\\frac1{n!}\\sum_\\pi m_i^\\pi(v)
=\\sum_{S\\subseteq N\\setminus\\{i\\}}
\\frac{|S|!(n-|S|-1)!}{n!}
[v(S\\cup\\{i\\})-v(S)].
$$
The second formula follows because exactly $|S|!(n-|S|-1)!$ permutations have predecessor set $S$.

This is an average over orderings, not a claim that players actually arrive randomly or negotiate in that order. Its appeal comes from the properties proved next.

**Proposition 12.5 (Four axioms).** The Shapley value is efficient, symmetric, null-player respecting, and additive. Here symmetric players $i,j$ satisfy $v(S\\cup\\{i\\})=v(S\\cup\\{j\\})$ for every $S$ excluding both; a null player has $v(S\\cup\\{i\\})=v(S)$ for every $S$ excluding it; additivity means $\\phi(v+w)=\\phi(v)+\\phi(w)$.

**Proof.** In each permutation, marginal contributions telescope to $v(N)-v(\\varnothing)=v(N)$, proving efficiency after averaging. Swapping two symmetric player labels gives a bijection of permutations that swaps their marginal contributions, proving equal values. A null player's every marginal is zero. Finally each marginal of $v+w$ is the sum of the corresponding marginals, and finite averaging preserves that sum. ∎

A dummy player with constant marginal contribution $c$ receives $c$, directly from the formula. This is different from a null player, for which the constant is zero.

**Worked example 12.6 (One left glove and two right gloves).** Player one owns a left glove; players two and three each own a right glove. A coalition is worth one if it contains player one and at least one right-glove owner, and zero otherwise. Player one's arrival creates value unless it comes before both right gloves, so it is pivotal in four of six permutations and receives $2/3$. Player two is pivotal only in order $(1,2,3)$ and receives $1/6$; player three similarly receives $1/6$.

The core is instead the singleton $(1,0,0)$. Its constraints include $x_1+x_2\\ge1$, $x_1+x_3\\ge1$, nonnegative singleton payoffs, and total one. Combining the first two forces $x_1\\ge1$, so efficiency and nonnegativity force the stated vector. The Shapley allocation is outside the core because coalition $\\{1,2\\}$ receives only $5/6$. The two solution concepts answer different questions even in this small game.

## 4. A complete uniqueness proof

For nonempty $T\\subseteq N$, define the unanimity game $u_T(S)=1$ if $T\\subseteq S$, and zero otherwise.

**Lemma 12.7 (Unanimity expansion).** Every game has the unique representation
$$
v=\\sum_{\\varnothing\\ne T\\subseteq N} c_Tu_T,\\qquad
c_T=\\sum_{R\\subseteq T}(-1)^{|T|-|R|}v(R).
$$

**Proof.** Evaluate the proposed sum at $S$. Interchanging finite sums gives
$$
\\sum_{T\\subseteq S}c_T
=\\sum_{R\\subseteq S}v(R)
\\sum_{R\\subseteq T\\subseteq S}(-1)^{|T|-|R|}.
$$
The inner sum is $(1-1)^{|S\\setminus R|}$, zero unless $R=S$, when it is one. Thus the result is $v(S)$. The empty coefficient is zero because $v(\\varnothing)=0$. Uniqueness also follows recursively: the value at $T$ determines $c_T$ after every coefficient for a proper subset is known. ∎

**Theorem 12.8 (Shapley uniqueness).** The four axioms in Proposition12.5 determine exactly the Shapley value on all real-valued finite games on $N$.

**Proof.** Consider any proposed value rule satisfying the axioms. In the game $c\\,u_T$, every player outside $T$ is null, all players inside $T$ are symmetric, and total worth is $c$. Efficiency and symmetry therefore force each member of $T$ to receive $c/|T|$ and every outsider zero, for every real $c$.

Use the unanimity expansion. Finite additivity forces the value of $v$ to be the sum of these already determined values of $c_Tu_T$. Hence there is at most one rule satisfying the axioms. Proposition12.5 proves the Shapley formula satisfies them, establishing existence as well as uniqueness. ∎

This proof does not silently assume real homogeneity from additivity alone. Each real multiple of a unanimity game is determined directly by efficiency, symmetry, and null players, including negative coefficients. That avoids a hidden regularity assumption about arbitrary additive real functions.

## 5. Convex games have stable marginal allocations

A TU game is called convex when its worth function is supermodular:
$$
v(A)+v(B)\\le v(A\\cup B)+v(A\\cap B).
$$

**Lemma 12.9 (Increasing marginal contributions).** Convexity is equivalent to
$$
v(S\\cup\\{i\\})-v(S)\\le v(T\\cup\\{i\\})-v(T)
\\quad\\text{whenever }S\\subseteq T,\\ i\\notin T.
$$

**Proof.** Apply supermodularity to $S\\cup\\{i\\}$ and $T$ to get the displayed inequality. Conversely, list the elements of $A\\setminus B$ and add them one by one to $A\\cap B$ and to $B$. At each step the first predecessor set is contained in the second, so increasing marginals make the first gain at most the second. Summing yields $v(A)-v(A\\cap B)\\le v(A\\cup B)-v(B)$, which is supermodularity. ∎

**Theorem 12.10 (Convex-game Shapley value is in the core).** In a convex game, every permutation marginal vector belongs to the core, and therefore so does the Shapley value.

**Proof.** A marginal vector is efficient by telescoping. Fix coalition $S$ and list its members in permutation order. When member $i$ arrives, its earlier coalition members form a subset of its full predecessor set $P_i^\\pi$. Increasing marginal contributions imply
$$
m_i^\\pi\\ge
v(\\{\\text{earlier members of }S\\}\\cup\\{i\\})
-v(\\{\\text{earlier members of }S\\}).
$$
Sum over members of $S$. The right side telescopes to $v(S)$, proving the core inequality for $S$. This works for every coalition. Finally the core is convex and the Shapley value averages these core vectors. ∎

**Worked example 12.11 (Pairwise synergy).** On three players, set $v(S)=\\binom{|S|}{2}$. A new player's marginal is the number of predecessors, so it increases with the predecessor set. The game is convex by Lemma12.9. A permutation produces marginal values zero, one, two in its order. For example $(0,1,2)$ has total three; every pair receives at least one, its coalition worth, and every singleton at least zero. Symmetry makes the Shapley value $(1,1,1)$, also in the core.

Convexity is a sufficient condition for core nonemptiness, not a necessary one. The glove game's core was nonempty even though its Shapley value failed a core inequality. Core nonemptiness alone therefore cannot be used to infer convexity.

## 6. Balanced weights characterize core existence

**Definition 12.12 (Balanced coalition weights).** A collection $\\lambda_S\\ge0$ for nonempty coalitions is balanced when
$$
\\sum_{S\\ni i}\\lambda_S=1\\quad\\text{for each player }i.
$$
Each player's total coalition weight is exactly one.

**Theorem 12.13 (Balancedness and the core).** A finite TU game has a nonempty core exactly when every balanced collection satisfies
$$
\\sum_{S\\ne\\varnothing}\\lambda_Sv(S)\\le v(N).
$$

**Proof.** If $x$ is in the core, multiply each coalition inequality by $\\lambda_S$ and sum. Balancedness makes the left allocation sum $\\sum_i x_i=v(N)$, giving the required bound.

For the converse, minimize $\\sum_i x_i$ over all real vectors $x$ satisfying $x(S)\\ge v(S)$ for every nonempty $S$. The problem is feasible: a sufficiently large common positive coordinate meets all finitely many lower constraints. Its objective is bounded below by the constraint for $N$.

Its linear-programming dual maximizes $\\sum_S\\lambda_Sv(S)$ over nonnegative balanced weights. To see the equality constraints, the Lagrangian is
$$
\\sum_i x_i+\\sum_S\\lambda_S(v(S)-x(S))
=\\sum_S\\lambda_Sv(S)+
\\sum_i x_i\\left(1-\\sum_{S\\ni i}\\lambda_S\\right).
$$
An infimum over free real $x_i$ is finite only when every coefficient vanishes. The primal's free variables can be written as differences of nonnegative variables, so the proved finite LP strong-duality and attainment theorem applies.

By the assumed balanced inequality the dual maximum is at most $v(N)$. Giving weight one to coalition $N$ and zero elsewhere is balanced and achieves $v(N)$. Thus the attained primal minimum is exactly $v(N)$. Its optimizer satisfies every coalition inequality and efficiency, hence lies in the core. ∎

**Worked example 12.14 (A balanced certificate of emptiness).** In the majority game, give each of the three two-player coalitions weight one half and all other coalitions weight zero. Each player appears in exactly two weighted pairs, so the collection is balanced. Its weighted worth is $3/2$, exceeding $v(N)=1$. The violated balanced inequality is an exact core-emptiness certificate, matching the earlier elementary contradiction.

## 7. Allocation axioms and strategic implementation

The Shapley value is unique under its stated axioms; the core expresses stability against the stated coalition deviations. Neither conclusion says that a particular bargaining process will produce the allocation. Strategic implementation would require an explicit mechanism, actions, information, and an equilibrium argument.

Characteristic worths may be uncertain or estimated. A cooperative theorem applies conditionally to the written $v$, not automatically to every possible way of evaluating a coalition. Transfer restrictions, externalities, and nontransferable preferences can change the model fundamentally.

The mechanism-design chapter next turns the direction of analysis around: instead of taking rules as fixed and solving the game, it asks which rules produce specified incentive properties. The distinction between an allocation formula and an implemented outcome remains essential.

## Worked example: two overlapping sources of cooperation

Consider three players. A coalition earns six units when it contains both
players one and two, and a further three units when it contains both players
two and three. These contributions add when both conditions hold. Singleton
coalitions earn zero, the two specified pairs earn six and three respectively,
the remaining pair earns zero, and the grand coalition earns nine.

Each contribution is a scaled unanimity game. In the first contribution,
players one and two divide the six units equally and player three is null.
In the second, players two and three divide the three units equally and
player one is null. Additivity therefore gives allocations three, four and
a half, and one and a half. Their total is nine. The first productive pair
receives seven and a half, exceeding its worth six; the second receives six,
exceeding its worth three. The remaining pair and each singleton receive
nonnegative totals. These exhaust the proper nonempty coalitions, so this
allocation belongs to the core.

The calculation illustrates what the unanimity expansion contributes beyond
a large permutation table: separate productive mechanisms can be priced
individually and then combined. It does not make player two a dictator or
deduce a bargaining procedure. Its larger share records participation in
both productive pairs under the stated characteristic function. Changing
either pair's worth changes the allocation, and replacing additive synergy
with substitutable partners can change core membership, as the glove example
already demonstrated.

## Exercises

### Exercise 12.1
<a id="cooperative-games-shapley-value-ex-1"></a>

Prove the core is convex when nonempty.

<details>
<summary>Hint 1</summary>

**Hint.** Check the efficiency equality and each coalition inequality on a convex combination.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All defining conditions are linear.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $x,y$ are in the core and $0\\le t\\le1$, their combination $z=tx+(1-t)y$ has total $tv(N)+(1-t)v(N)=v(N)$. For every coalition, $z(S)=tx(S)+(1-t)y(S)\\ge v(S)$. Thus $z$ is in the core. Convexity does not by itself establish nonemptiness or uniqueness.

</details>

### Exercise 12.2
<a id="cooperative-games-shapley-value-ex-2"></a>

Show directly that the three-player majority game has empty core.

<details>
<summary>Hint 1</summary>

**Hint.** Add its three pair inequalities.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use efficiency to replace the total allocation by one.

</details>

<details>
<summary>Solution</summary>

**Solution.** The pair requirements sum to $2(x_1+x_2+x_3)\\ge3$. Efficiency gives $x_1+x_2+x_3=1$, producing $2\\ge3$, a contradiction. The proof rules out every allocation, not only equal division. It also supplies the balanced-weight certificate with weight one half on each pair.

</details>

### Exercise 12.3
<a id="cooperative-games-shapley-value-ex-3"></a>

Compute the Shapley value of the majority game and compare it with its core.

<details>
<summary>Hint 1</summary>

**Hint.** All players are symmetric.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The permutation marginals telescope to total worth one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Symmetry gives equal Shapley coordinates and efficiency makes their sum one, so the value is $(1/3,1/3,1/3)$. It is not in the core: every pair receives $2/3<1$. In fact the core is empty. The Shapley axioms define an allocation rule even when coalitional stability is impossible.

</details>

### Exercise 12.4
<a id="cooperative-games-shapley-value-ex-4"></a>

For a unanimity game $c\\,u_T$, derive its value using only efficiency, symmetry and null players.

<details>
<summary>Hint 1</summary>

**Hint.** Players outside $T$ never change coalition worth.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Players inside $T$ are interchangeable in this game.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every outsider is null and receives zero. Every member of $T$ has the same value by symmetry. Efficiency requires their total to equal the grand-coalition worth $c$, so each receives $c/|T|$. This works for every real $c$, including negative values, without assuming homogeneity from additivity.

</details>

### Exercise 12.5
<a id="cooperative-games-shapley-value-ex-5"></a>

For two players with $v(\\{1\\})=a$, $v(\\{2\\})=b$, $v(N)=c$, compute both Shapley coordinates.

<details>
<summary>Hint 1</summary>

**Hint.** There are two equally weighted arrival orders.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each player sometimes arrives first and sometimes second.

</details>

<details>
<summary>Solution</summary>

**Solution.** Player one's marginals are $a$ when first and $c-b$ when second, so $\\phi_1=(a+c-b)/2$. Similarly $\\phi_2=(b+c-a)/2$. Their sum is $c$. Whether they satisfy the singleton core inequalities depends on the data; the formula alone does not guarantee stability.

</details>

### Exercise 12.6
<a id="cooperative-games-shapley-value-ex-6"></a>

Prove the glove game's Shapley vector is outside its nonempty core.

<details>
<summary>Hint 1</summary>

**Hint.** Use the calculated marginals and the worth of coalition $\\{1,2\\}$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare that pair's allocation sum with one.

</details>

<details>
<summary>Solution</summary>

**Solution.** The Shapley vector is $(2/3,1/6,1/6)$. Coalition $\\{1,2\\}$ receives $5/6$, less than its worth one, so the vector fails a core inequality. The core vector $(1,0,0)$ satisfies efficiency and all coalitions; the earlier constraints force it uniquely. Hence core nonemptiness does not guarantee that the Shapley value belongs to it.

</details>

### Exercise 12.7
<a id="cooperative-games-shapley-value-ex-7"></a>

Show that the pairwise-synergy game $v(S)=\\binom{|S|}{2}$ is convex.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the marginal when one player joins $S$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Apply increasing marginal contributions.

</details>

<details>
<summary>Solution</summary>

**Solution.** The marginal is $\\binom{|S|+1}{2}-\\binom{|S|}{2}=|S|$. This is weakly increasing as the predecessor coalition grows. Lemma12.9 therefore gives supermodularity and convexity. The marginal-vector theorem then places every permutation marginal and their Shapley average in the core.

</details>

### Exercise 12.8
<a id="cooperative-games-shapley-value-ex-8"></a>

Explain why balancedness gives the identity $\\sum_S\\lambda_S x(S)=x(N)$.

<details>
<summary>Hint 1</summary>

**Hint.** Interchange the two finite sums.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each player's total coalition weight is one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand $\\sum_S\\lambda_S\\sum_{i\\in S}x_i=\\sum_i x_i\\sum_{S\\ni i}\\lambda_S$. Balancedness makes the inner sum one, leaving $\\sum_i x_i=x(N)$. This equality is the exact reason weighted coalition inequalities can test whether the grand-coalition worth is sufficient.

</details>

### Exercise 12.9
<a id="cooperative-games-shapley-value-ex-9"></a>

In a four-player game, suppose every three-player coalition has worth two and the grand coalition worth is $5/2$. Show the core is empty, regardless of other coalition values.

<details>
<summary>Hint 1</summary>

**Hint.** Choose equal weights on the four three-player coalitions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each player belongs to three of them.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assign weight $1/3$ to each three-player coalition and zero elsewhere. Every player has total weight one, so the collection is balanced. Its weighted worth is $4(1/3)2=8/3>5/2$. The balancedness inequality fails, so no core allocation exists. Additional coalition requirements cannot repair this contradiction.

</details>

### Exercise 12.10
<a id="cooperative-games-shapley-value-ex-10"></a>

Why does a unique Shapley allocation not prove that a bargaining procedure implements it?

<details>
<summary>Hint 1</summary>

**Hint.** The value rule's axioms do not specify actions or a negotiation process.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Implementation is a separate strategic model.

</details>

<details>
<summary>Solution</summary>

**Solution.** The uniqueness theorem says exactly one rule on characteristic functions satisfies the four stated axioms. It supplies no bargaining actions, timing, information, enforcement, or equilibrium of such a process. A proposed procedure must be modeled and analysed separately. Normative allocation axioms and strategic implementation are different mathematical questions.

</details>

## Sources

Original exposition. A primary value reference is Lloyd S. Shapley, [*A Value for n-Person Games*](https://doi.org/10.1515/9781400881970-018). A primary balancedness reference is Shapley, [*On Balanced Sets and Cores*](https://doi.org/10.1002/nav.3800140404),1967. The proof above is derived from the finite linear-programming duality established in this book. Further primary book reading is Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/). No unverified theorem or page locator is asserted.

## Summary

A TU game specifies transferable coalition worths. The core tests coalitional stability, while the Shapley value uniquely satisfies efficiency, symmetry, null players, and additivity. A unanimity expansion proves uniqueness without hidden homogeneity assumptions. Convex games have core marginal allocations, and balanced weights characterize core existence through LP duality. These allocation results do not by themselves provide a bargaining mechanism.

`;export{e as default};