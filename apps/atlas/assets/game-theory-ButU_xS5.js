var e=`---
id: book-game-theory
title: "Game Theory"
level: undergraduate
license: CC BY-SA 4.0
---

# Game Theory

A strategic model specifies whose choices matter, what each participant can
choose and how the joint choices determine outcomes. This fifteen-chapter
L3 route develops finite strategic-form games, equilibrium, zero-sum games,
information, cooperation and design. It is a **Draft**. Each primary chapter
includes worked examples and ten exercises with two hints and full solutions.
The [reader guide](game-theory/front-matter/reader-guide.md) explains the
progression and preparation.

## Preparation

Begin with [Introduction to Proof](/books/library-book-introduction-to-proof/)
and [Discrete Mathematics](/books/library-book-discrete-mathematics-proof-counting-structure/),
including its [finite probability chapter](/books/library-book-discrete-mathematics-proof-counting-structure/discrete-probability/).
The complete route also uses
[Finite-Dimensional Linear Algebra](/books/library-book-linear-algebra-structure-proofs/)
and [Calculus](/books/textbooks-calculus/). Each chapter states its local
needs; the first uses finite sets, real payoff comparisons and quantified
arguments. The book uses British spelling.

## Chapters

1. [Strategic-Form Games](game-theory/strategic-form-games.md) — specify players,
   actions, profiles and payoff functions; read matrices; distinguish unilateral
   comparisons from joint outcome improvements; understand the scope of payoff
   transformations. It contains worked examples and ten exercises with two
   hints and complete revealed solutions.

2. [Dominance and Rationalisability](game-theory/dominance-and-rationalisability.md)
3. [Nash Equilibrium](game-theory/nash-equilibrium.md)
4. [Mixed Strategies](game-theory/mixed-strategies.md)
5. [Zero-Sum Games and Minimax](game-theory/zero-sum-minimax.md)
6. [Linear Programming and Matrix Games](game-theory/linear-programming-matrix-games.md)
7. [Fixed Points and Equilibrium Existence](game-theory/fixed-points-equilibrium-existence.md)
8. [Extensive Form and Backward Induction](game-theory/extensive-form-backward-induction.md)
9. [Subgame-Perfect Equilibrium](game-theory/subgame-perfect-equilibrium.md)
10. [Repeated Games and Folk Theorems](game-theory/repeated-games-folk-theorems.md)
11. [Bayesian Games](game-theory/bayesian-games.md)
12. [Cooperative Games and the Shapley Value](game-theory/cooperative-games-shapley-value.md)
13. [Auctions and Mechanism Design](game-theory/auctions-mechanism-design.md)
14. [Social Choice and Arrow's Theorem](game-theory/social-choice-arrow.md)
15. [Evolutionary Games](game-theory/evolutionary-games.md)

The minimax, Sperner–Brouwer–Nash and finite strict-ranking Arrow proofs are
developed in the corresponding chapters. Kakutani and stronger repeated-game
continuations are explicitly identified as cited results with their scope.
The [alternative pure-dominance reading](game-theory/dominance.md) preserves a
separate treatment of strict deletion and weak ties outside the primary route.

## Other Euler readings

[Winning with Invariants](/books/library-book-winning-with-invariants/) is a
separate L2 treatment of finite combinatorial games: move graphs, Nim, impartial
sums and partizan examples. Its game model differs from the simultaneous
strategic choices introduced here. Neither title replaces the preparation and
scope of the other.

The existing [Games, Equilibria, and Response](applied-modeling-proof-reference/games-equilibria-response.md)
chapter remains a separate modelling reading. The local Unhurried payoff-matrix
and social-choice articles are seeds for the book commission and remain in
their collection. Those earlier sources have not been deleted or silently moved.

## Scope benchmarks

The chapter plan follows the breadth commissioned in roadmap tasks 13.A23–A24.
Its benchmarks are Martin J. Osborne and Ariel Rubinstein, *A Course in Game
Theory*, and Michael Maschler, Eilon Solan and Shmuel Zamir, *Game Theory*.
The explanations and exercise sequence are written for this book. The
[references and provenance](game-theory/back-matter/references-and-provenance.md)
identify primary theorem sources and explicitly cited continuations.
`;export{e as default};