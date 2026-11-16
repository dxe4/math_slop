var e=`---
parent_id: book-analytic-computational-geometry
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Points, vectors, and coordinates

- $P = (P_{x}, P_{y})$ or $(P_{x}, P_{y}, P_{z})$: a point in $\\mathbb{R}^{2}$ or $\\mathbb{R}^{3}$.
- $v = (v_{x}, v_{y})$ or $(v_{x}, v_{y}, v_{z})$: a vector representing displacement.
- $Q - P$: the vector from point $P$ to point $Q$.
- $\\|v\\| = \\sqrt{v_{x}^{2} + v_{y}^{2}}$ or $\\sqrt{v_{x}^{2} + v_{y}^{2} + v_{z}^{2}}$: the Euclidean norm.
- $\\hat{v} = v / \\|v\\|$: the unit vector in the direction of $v$, defined only for $v \\neq 0$.
- $[x, y, w]^{T}$: homogeneous coordinates for a point $(x/w, y/w)$ when $w \\neq 0$.

## Lines and planes

- $L(t) = P + t v$, $t \\in \\mathbb{R}$: parametric line through $P$ with direction $v \\neq 0$.
- $n \\cdot X = c$: implicit line in $\\mathbb{R}^{2}$ or plane in $\\mathbb{R}^{3}$, with normal $n \\neq 0$.
- $d(X, L) = |n \\cdot X - c| / \\|n\\|$: perpendicular distance from point $X$ to line $L$.
- $d(X, \\Pi) = |n \\cdot X - c| / \\|n\\|$: perpendicular distance from point $X$ to plane $\\Pi$.

## Predicates and products

- $\\operatorname{orient}(A, B, C) = (B_{x} - A_{x})(C_{y} - A_{y}) - (B_{y} - A_{y})(C_{x} - A_{x})$: signed area of parallelogram spanned by $B - A$ and $C - A$.
- $\\operatorname{cross}(u, v) = u_{x} v_{y} - u_{y} v_{x}$: scalar cross product in $\\mathbb{R}^{2}$.
- $u \\times v = (u_{y} v_{z} - u_{z} v_{y},\\; u_{z} v_{x} - u_{x} v_{z},\\; u_{x} v_{y} - u_{y} v_{x})$: vector cross product in $\\mathbb{R}^{3}$.
- $u \\cdot (v \\times w)$: scalar triple product; equals the determinant of the matrix with columns $u, v, w$.
- $\\det(A)$: determinant of a square matrix $A$.

## Transformations

- $X \\mapsto A X + b$: planar affine map with $2 \\times 2$ matrix $A$ and translation vector $b$.
- $M = \\begin{pmatrix} A & b \\\\ 0 & 0 & 1 \\end{pmatrix}$: $3 \\times 3$ homogeneous matrix for the same affine map.
- $R(P) = P - 2 \\frac{(P - M) \\cdot n}{n \\cdot n} n$: reflection of $P$ across the line (or plane) through $M$ with normal $n$.
- $[x, y, w]^{T} \\mapsto [x'/w', y'/w', 1]^{T}$ where $(x', y', w')^{T} = M (x, y, w)^{T}$: projective transformation, valid only when $w' \\neq 0$ for finite points.

## Conics and quadratic forms

- $X^{T} Q X + q^{T} X + f = 0$: general conic equation with symmetric $2 \\times 2$ matrix $Q$, vector $q$, and scalar $f$.
- $A x^{2} + B x y + C y^{2} + D x + E y + F = 0$: coordinate expansion, with $Q = \\begin{pmatrix} A & B/2 \\\\ B/2 & C \\end{pmatrix}$.
- $Q = R^{T} D R$: orthogonal diagonalization with $D = \\operatorname{diag}(\\lambda_{1}, \\lambda_{2})$.
- $e$: eccentricity in the focus--directrix definition.
- $a, b$: semiaxes of an ellipse or hyperbola.

## Curved metrics

- $d_{S}(u, v) = \\arccos(\\operatorname{clamp}(\\hat{u} \\cdot \\hat{v}, -1, 1))$: spherical distance on the unit sphere.
- $\\cosh d_{H}(u, v) = 1 + \\frac{2 \\|u - v\\|^{2}}{(1 - \\|u\\|^{2})(1 - \\|v\\|^{2})}$: hyperbolic distance in the Poincar\\'{e} disk.
- $\\operatorname{clamp}(x, a, b) = \\max(a, \\min(b, x))$: clamping function.

## Complexity and algorithms

- $O(f(n))$: asymptotic upper bound on running time or space.
- $\\Theta(f(n))$: asymptotically tight bound.
- $\\Omega(f(n))$: asymptotic lower bound.
- $n$: number of input points or objects.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Definitions, algebraic manipulation |
| Computation | Verifiable formula or algorithm | Substitution, algorithm trace |
| Approximation | Explicit error bound or heuristic | Numerical analysis, empirical test |
| Open problem | None; record current bounds | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Orientation Is the Central Planar Predicate".
- Chapter IDs are used in internal links: \`orientation-is-the-central-planar-predicate\`.
- Theorem and computation claims should state material hypotheses. Some derivations are local; any deferred or imported result must be labeled and sourced.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\\leq$, $\\to$, and $\\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};