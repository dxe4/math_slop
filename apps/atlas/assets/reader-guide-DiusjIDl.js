var e=`---
parent_id: book-winning-with-invariants
matter_id: reader-guide
title: "Reader Guide and Notation"
license: CC BY-SA 4.0
---

# Reader Guide and Notation

## Why this book exists

Combinatorial game theory asks a simple question with surprisingly deep answers: who wins a game when both players play perfectly? This introductory undergraduate (L2) book is for readers who can work with finite sets, functions, induction, and elementary graphs, and who want to understand the structure of games. It is not a chess manual, a Go strategy guide, or a programming textbook. It is a mathematics book that uses games as its raw material.

Prepare with [Introduction to Proof](/books/library-book-introduction-to-proof/) and [Discrete Mathematics: Proof, Counting, and Structure](/books/library-book-discrete-mathematics-proof-counting-structure/). Binary arithmetic is developed in the Nim chapter. The eleven primary chapters state their game rules and theorem hypotheses; deeper imported continuations are identified separately. Use the prerequisite diagnostic and notation guide when a local definition needs repair.

## Four reading routes

### The continuous route

1. [Positions as a directed graph](../positions-as-a-directed-graph.md)
2. [Impartial Games and Mex](../impartial-games-and-mex.md)
3. [Nim and Nim-Sum](../nim-and-nim-sum.md)
4. [Sprague–Grundy Theory](../sprague-grundy-theory.md)
5. [Kayles, Splitting, and Misère Play](../kayles-splitting-misere.md)
6. [Partizan Games](../partizan-games.md)
7. [Hackenbush](../hackenbush.md)
8. [Domineering](../domineering.md)
9. [Go, Amazons, and Chess: Case Studies](../go-amazons-chess-case-studies.md)
10. [Algorithmic Game Solving](../algorithmic-game-solving.md)
11. [Finite Games and Strategy](../finite-games-and-strategy.md)

The four earlier readings remain registered separately. Numerical section and exercise labels in those sources keep their original identities; use chapter names for the current order.

### The impartial-only route

Read positions, mex, Nim, the sum theorem, and Kayles in the first five primary chapters. Add Algorithmic Game Solving and Finite Games and Strategy for policy extraction and the limits of finite calculations.

### The partizan-and-numbers route

Read Partizan Games, Hackenbush, Domineering, and the combined board-game case studies. The finite-number results have their stated hypotheses; the retained Go reading provides specialist continuations beyond the elementary scoring model.

### The games-and-computation route

Read positions, mex, the sum theorem, the combined case studies, Algorithmic Game Solving, and Finite Games and Strategy. Keep the exact rules and input encoding attached to each algorithmic claim.

## How to work a chapter

First read the opening question and write down the exact game, position, and claim at stake. On a second pass, cover each worked example and predict the next move before reading it. Work at least four exercises before reading their solutions: one definition check, one computation, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same invariant and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a mathematical theorem, a computational observation, a heuristic, or an open problem;
2. a **move ledger** recording the decisive move or invariant in each winning strategy;
3. a **cross-reference ledger** recording which definitions and theorems reappear in later chapters.

## Claim-status conventions used across chapters

Every chapter uses the same four-part classification. The convention determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Mathematical theorem** | True by definition, induction, or deduction within stated axioms. | The Sprague–Grundy theorem. | Produce a proof; identify a hidden hypothesis or an incorrect base case. |
| **Computational observation** | A verified calculation for a finite set of cases. | Grundy numbers for Kayles up to $n = 12$. | Reproduce the computation; check for off-by-one errors or missing cases. |
| **Heuristic** | A rule of thumb supported by examples and intuition, not a universal proof. | "Play in the hottest region first" in Go endgames. | Test on counterexamples; state the conditions under which it fails. |
| **Open problem** | A question whose answer is not known, or not known in full generality. | A specifically stated unresolved classification, supported by its source. | Keep its hypotheses and known partial results explicit. |
| **Solved continuation** | A known theorem or classification whose proof is outside this introductory route. | The misère Kayles solution. | Follow the cited full argument rather than inferring it from a short table. |

**Correction to the earlier example.** Misère row Kayles is solved. Plambeck's [primary account](https://math.colgate.edu/~integers/fg5/fg5.pdf), §11.4, presents the Sibert–Conway analysis. The earlier open-problem label was incorrect; the full quotient calculation remains a deeper continuation.

A theorem is not uncertain because a position is hard to analyze. A heuristic is not a theorem because it works in many examples. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

## Exercise markers

Exercises are numbered within each chapter. Markers indicate the expected reasoning demand:

- **R** — retrieval or notation check;
- **F** — routine fluency or computation;
- **P** — proof, justification, or reasoning;
- **C** — counterexample, repair, or misconception diagnosis;
- **T** — transfer to a new game or surface form;
- **I** — investigation or project requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, invariant selection, or proof structure, the solution explains why that choice is warranted.

## How to report a suspected error

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

## Scope and deliberate boundaries

This book reaches a first treatment of impartial and partizan combinatorial game theory, including the Sprague–Grundy theorem, Hackenbush numbers, Domineering analysis, and algorithmic solvers. It does not attempt temperature theory in full generality, misère analysis beyond Nim, infinite games, or the complete theory of surreal numbers. Those are separate volumes because each needs its own prerequisites, examples, and proof techniques.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.

`;export{e as default};