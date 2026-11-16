var e=`---
parent_id: book-game-theory
chapter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

These six prompts locate preparation gaps; they are not a graded assessment. Solve them on paper before opening the short repair. A checkmark records that you worked on a prompt. It does not certify that your explanation is correct. The chapter exercises provide longer practice with the strategic concepts themselves.

## Quantifiers and a proposed equilibrium

Suppose a candidate profile s satisfies: for every player i and every alternative action a of that player, changing only i's action to a does not increase i's payoff. Write the inequality with the opponent profile fixed. Does this statement rule out a profitable change by two players together?

<details>
<summary>Repair and answer</summary>

Write u_i(s_i,s_{-i}) ≥ u_i(a,s_{-i}) for every i and every a in A_i. It does not compare with a joint change of two coordinates. For example, in a two-player coordination game, (L,L) may be an equilibrium even though both players prefer (R,R). Repair quantifiers and negation in [Introduction to Proof](/books/library-book-introduction-to-proof/), then read [Strategic-Form Games](../strategic-form-games.md) and [Nash Equilibrium and Unilateral Stability](../nash-equilibrium.md).

</details>

## Finite expectation and independent mixing

A row player uses probabilities (1/4,3/4), and a column player independently uses (2/3,1/3). For row payoffs A = [[3,0],[−1,2]], calculate the expected row payoff and explain why the four joint probabilities have the values you use.

<details>
<summary>Repair and answer</summary>

Independence gives joint probabilities 1/6, 1/12, 1/2 and 1/4 in row-major order. The expected payoff is 3/6 + 0 − 1/2 + 2/4 = 1/2. A pair of marginal distributions does not determine these joint probabilities without the independence assumption. Repair finite expectation and independence in [Discrete Probability](/books/library-book-discrete-mathematics-proof-counting-structure/discrete-probability/), then read [Mixed Strategies, Supports and Indifference](../mixed-strategies.md).

</details>

## Conditioning on private information

Two types H and L have prior probabilities 1/4 and 3/4. An event E has conditional probabilities P(E|H)=1 and P(E|L)=2/3. Calculate P(H|E). What goes wrong if P(E)=0?

<details>
<summary>Repair and answer</summary>

P(E)=1/4+(3/4)(2/3)=3/4, so P(H|E)=(1/4)/(3/4)=1/3. In elementary finite conditioning the expression is undefined when P(E)=0; a belief at such an information event requires an additional convention or equilibrium refinement rather than division by zero. Repair conditional probability in [Introduction to Probability](/books/library-book-introduction-to-probability/), then use the explicit typewise conventions in [Bayesian Games](../bayesian-games.md).

</details>

## Linear certificates

For A = [[2,−1],[−2,3]], let x=(5/8,3/8) and y=(1/2,1/2). Calculate xᵀA and Ay. Explain how coordinatewise inequalities against a common value certify optimality in a zero-sum game.

<details>
<summary>Repair and answer</summary>

Both entries of xᵀA are 1/2, and both entries of Ay are 1/2. Therefore x guarantees at least 1/2 against every column mixture, while y holds every row mixture to at most 1/2. Their expected payoff is exactly 1/2. The argument uses convex combinations of the pure-action inequalities, so it covers every mixed opponent action. Repair matrix multiplication in [Finite-Dimensional Linear Algebra](/books/library-book-linear-algebra-structure-proofs/), then read [Zero-Sum Games and Minimax](../zero-sum-minimax.md).

</details>

## Discounted sums

For 0<δ<1, simplify (1−δ)Σ_{t≥0}δᵗc. A player receives g immediately and w forever afterward. Write the normalised discounted payoff of that sequence.

<details>
<summary>Repair and answer</summary>

The constant stream has payoff c because Σδᵗ=1/(1−δ). The second stream has payoff (1−δ)g+δw. A different convention that omits the leading factor 1−δ rescales all payoffs and must be used consistently. At δ=1 this geometric calculation is invalid. Repair geometric series in the [Calculus book](/books/calculus-course/), then read [Repeated Games and Folk Theorems](../repeated-games-folk-theorems.md).

</details>

## A global optimum, not just a stationary point

For v in [0,1] and integer n≥2, maximise (v−z)z^{n−1} over z in [0,1]. Find the derivative, its sign on either side of a candidate, and the endpoint values.

<details>
<summary>Repair and answer</summary>

For z>0 the derivative is z^{n−2}((n−1)v−nz). It is positive below z*=(n−1)v/n and negative above it, so z* is a global maximiser. At z=0 the value is zero; at z=1 it is v−1≤0. If v=0 the maximum is attained at zero. This calculation is one part of a first-price auction argument; an actual deviation check must also cover bids outside the rivals' equilibrium bid range. Repair differentiation and endpoint optimisation in the [Calculus book](/books/calculus-course/), then read [Auctions and Mechanism Design](../auctions-mechanism-design.md).

</details>

## Sources

These original diagnostic calculations prepare the definitions and worked cases developed in the linked chapters. They use the elementary proof, probability, linear-algebra and calculus conventions of the linked Euler books.

## Summary

Repair the specific missing operation: quantifiers, independent expectation, conditioning, matrix certificates, geometric sums or global optimisation. Return to the corresponding chapter and explain why the repaired operation is legitimate in that model.
`;export{e as default};