
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the conventions governing game values and outcome classes, and the policies for diagrams and computational examples.

## Game notation

### Positions and moves

- $P$, $Q$: game positions.
- $P \to Q$: a legal move from position $P$ to position $Q$.
- $\operatorname{Opt}(P)$: the set of positions reachable by one legal move from $P$.
- A position with no outgoing moves is **terminal**. Under normal play, the player who cannot move loses.

### Outcome classes

Every position belongs to exactly one outcome class:

- **P-position**: the **Previous** player wins (the player who just moved). Equivalently, the Next player loses with optimal play.
- **N-position**: the **Next** player to move wins.
- **L-position**: **Left** wins no matter who moves first (partizan games only).
- **R-position**: **Right** wins no matter who moves first (partizan games only).

In impartial games, only P and N occur. In partizan games, all four classes are possible.

### Grundy numbers and mex

- $g(P)$: the **Grundy number** (or nim-value) of position $P$.
- $\operatorname{mex}(S)$: the **minimum excluded value** of a finite set $S$ of nonnegative integers:
  $$\operatorname{mex}(S) = \min \{ k \in \mathbb{Z}_{\geq 0} : k \notin S \}.$$
- The Grundy number is defined recursively by $g(P) = \operatorname{mex}(\{ g(Q) : P \to Q \})$.
- A position is P if and only if $g(P) = 0$.

### Nim addition

- $a \oplus b$: the **nim sum** of $a$ and $b$, equal to their bitwise exclusive-or.
- Nim sum is associative, commutative, has identity $0$, and satisfies $a \oplus a = 0$.
- For a disjoint sum of impartial games, $g(G + H) = g(G) \oplus g(H)$.

### Partizan game notation

- $G = \{ G^{L} \mid G^{R} \}$: a partizan game with Left options $G^{L}$ and Right options $G^{R}$.
- $-G$: the **negative** of $G$, obtained by swapping Left and Right options.
- $G + H$: the **disjoint sum** of $G$ and $H$; a player moves in exactly one component.
- $G \geq H$: $G$ is greater than or equal to $H$ in the standard game ordering.
- $\ast$ (star): the game $\{ 0 \mid 0 \}$, the simplest nonzero impartial game.
- $\uparrow$ (up): the game $\{ 0 \mid \ast \}$, a positive infinitesimal.
- $\downarrow$ (down): the game $\{ \ast \mid 0 \}$, a negative infinitesimal.

### Hackenbush values

- A blue-red Hackenbush stalk with $n$ blue edges and no red edges has value $n$.
- A stalk with $n$ red edges and no blue edges has value $-n$.
- Mixed stalks represent dyadic rationals $m / 2^{k}$.
- The **simplicity theorem** states that if $G = \{ G^{L} \mid G^{R} \}$ and there is a dyadic rational $x$ strictly between all $G^{L}$ and all $G^{R}$, and no simpler dyadic rational lies in between, then $G = x$.

## Number sets and arithmetic

- $\mathbb{N}$: the natural numbers $\{1, 2, 3, \dots\}$. When $0$ is included, the text says so explicitly.
- $\mathbb{Z}_{\geq 0}$: the nonnegative integers $\{0, 1, 2, \dots\}$.
- $\mathbb{Z}$: the integers.
- $\mathbb{Q}$: the rational numbers.
- $\gcd(a,b)$: the greatest common divisor of $a$ and $b$.
- $a \bmod b$: the remainder when $a$ is divided by $b$, with $0 \leq a \bmod b < |b|$.
- $\lfloor x \rfloor$: the greatest integer less than or equal to $x$.
- $\lceil x \rceil$: the least integer greater than or equal to $x$.

## Go and chess notation

- Board coordinates: columns labeled $a$–$j$ or $a$–$t$ from left to right; rows numbered from bottom to top.
- In Go, a **dame** is a neutral point adjacent to both Black and White stones.
- In chess, **zugzwang** is a position where any legal move worsens the mover's position.
- **Opposition**: two kings face each other with one square between them on a rank, file, or diagonal.

## Claim-status conventions

The book uses a flat status system. The question is not "how certain" but "what kind of warrant does this claim need and does the evidence provide it."

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Mathematical theorem | Proof by induction, construction, or deduction | Definitions, axioms, previously proved theorems |
| Computational observation | Reproducible calculation for stated cases | Programs, dynamic-programming tables |
| Heuristic | Examples, intuition, local pattern | Rules of thumb with known exceptions |
| Open problem | None; the claim is that no proof is known | Literature, partial results |

## Diagram and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Diagrams of game positions are accompanied by exact descriptions in coordinates or words. Plain-source formulas use readable tokens such as $\leq$, $\to$, $\oplus$, and $\mid$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
