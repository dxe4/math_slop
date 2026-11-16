
# Notation and Conventions {#section-1-notation-and-conventions}

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern proof depth, and the domain conventions that apply to geometric arguments in this book.

<a id="section-3-general-logical-and-set-theoretic-notation"></a>
## General logical and set-theoretic notation {#section-5-general-logical-and-set-theoretic-notation}

- $\mathbb{N}$: the natural numbers $\{1, 2, 3, \dots\}$. When $0$ is included, the text says so explicitly.
- $\mathbb{Z}$: the integers.
- $\mathbb{Q}$: the rational numbers.
- $\mathbb{R}$: the real numbers.
- $\mathbb{C}$: the complex numbers.
- $\mathbb{R}^{n}$: $n$-dimensional Euclidean space.
- $\subseteq$: subset (not necessarily proper).
- $\setminus$: set difference.
- $\forall$, $\exists$: universal and existential quantifiers.
- $\Rightarrow$, $\Leftrightarrow$: implication and equivalence.
- $\square$: end-of-proof marker.

<a id="section-17-incidence-notation"></a>
## Incidence notation {#section-19-incidence-notation}

- $\mathcal{P}$: a set of points.
- $\mathcal{L}$: a set of lines.
- $P \in \ell$: point $P$ lies on line $\ell$ (incidence).
- $AB$: the line through points $A$ and $B$.
- $\ell \parallel m$: lines $\ell$ and $m$ are parallel (do not intersect).
- $\ell \cap m$: the intersection of lines $\ell$ and $m$.

<a id="section-26-betweenness-and-order-notation"></a>
## Betweenness and order notation {#section-28-betweenness-and-order-notation}

- $B(A,C,B)$: point $C$ is between $A$ and $B$.
- $AB$: the segment with endpoints $A$ and $B$ (including interior points).
- $AB^{\rightarrow}$: the ray from $A$ through $B$.
- $\angle ABC$: the angle with vertex $B$ and sides $BA^{\rightarrow}$ and $BC^{\rightarrow}$.
- $\angle ABC \cong \angle DEF$: angle congruence.

<a id="section-34-congruence-and-measure-notation"></a>
## Congruence and measure notation {#section-36-congruence-and-measure-notation}

- $AB \cong CD$: segment congruence.
- $AB = CD$: equality of lengths (in a metric model).
- $|AB|$: the length of segment $AB$.
- $m\angle ABC$: the measure of angle $\angle ABC$ (in radians unless degrees are specified).
- $\pi$: in Euclidean geometry, the ratio of a circle's circumference to its diameter; also the radian measure of a straight angle.

<a id="section-42-curvature-sign-conventions"></a>
## Curvature sign conventions {#section-44-curvature-sign-conventions}

The sign of curvature follows the standard convention used in differential geometry:

- **Euclidean plane:** Gaussian curvature $K = 0$.
- **Hyperbolic plane:** Gaussian curvature $K < 0$. The standard upper half-plane and Poincaré disk models have $K = -1$ unless otherwise stated.
- **Elliptic geometry / sphere:** Gaussian curvature $K > 0$. The unit sphere has $K = 1$.
- **Angle defect and excess:**
  - In hyperbolic geometry, the **defect** of a triangle with angles $A,B,C$ is $\delta = \pi - (A+B+C) > 0$. The area is proportional to $\delta$.
  - For a convex elliptic triangle lifting injectively to the unit sphere, the **excess** is $\varepsilon = (A+B+C) - \pi > 0$ and equals its area. On a sphere of radius $R$, area is $R^2\varepsilon$.
  - In Euclidean geometry, both defect and excess are zero.

**Common error:** confusing the sign of curvature with the sign of the Gaussian curvature formula. A surface of revolution can have $K > 0$ at some points and $K < 0$ at others; the sign is a local property.

<a id="section-56-hyperbolic-geometry-notation"></a>
## Hyperbolic geometry notation {#section-58-hyperbolic-geometry-notation}

- $\mathbb{H}$: the hyperbolic upper half-plane $\{z \in \mathbb{C} : \operatorname{Im}(z) > 0\}$.
- $D$: the Poincaré unit disk $\{z \in \mathbb{C} : |z| < 1\}$.
- $d(z,w)$: hyperbolic distance. In the disk model with curvature $-1$:
  $$d(z,w) = \operatorname{arccosh}\!\left(1 + \frac{2|z-w|^{2}}{(1-|z|^{2})(1-|w|^{2})}\right).$$
- $\sinh$, $\cosh$, $\tanh$: hyperbolic sine, cosine, tangent.
- $\operatorname{arccosh}$: inverse hyperbolic cosine.

<a id="section-65-projective-geometry-notation"></a>
## Projective geometry notation {#section-67-projective-geometry-notation}

- $\mathbb{P}^{n}(\mathbb{R})$: real projective $n$-space.
- $(x:y:z)$: homogeneous coordinates, with $(x:y:z) \sim (\lambda x : \lambda y : \lambda z)$ for $\lambda \neq 0$.
- $\ell_{\infty}$: the line at infinity in the affine embedding.
- $PGL(n+1,\mathbb{R})$: the projective general linear group.
- $(A,B;C,D)$: cross-ratio of four collinear points.

<a id="section-73-finite-geometry-notation"></a>
## Finite geometry notation {#section-75-finite-geometry-notation}

- $\mathbb{F}_{q}$: the finite field with $q$ elements ($q$ a prime power).
- $\mathbb{P}^{2}(\mathbb{F}_{q})$: the projective plane over $\mathbb{F}_{q}$.
- $v$: number of points.
- $b$: number of lines (or blocks).
- $r$: number of lines through each point.
- $k$: number of points on each line.
- $\lambda$: number of lines through each pair of points (in a BIBD).

<a id="section-83-convexity-and-measure-notation"></a>
## Convexity and measure notation {#section-85-convexity-and-measure-notation}

- $\operatorname{conv}(S)$: the convex hull of set $S$.
- $\operatorname{ext}(C)$: the set of extreme points of convex set $C$.
- $\mu(S)$: Jordan measure of $S$.
- $m^{*}(S)$: Lebesgue outer measure of $S$.
- $\mathcal{H}^{s}(S)$: $s$-dimensional Hausdorff measure.
- $\dim_{H}(S)$: Hausdorff dimension.
- $Jf(x)$: generalized Jacobian of a Lipschitz map $f$.

<a id="section-93-transformation-notation"></a>
## Transformation notation {#section-95-transformation-notation}

- $\operatorname{Aff}(n,\mathbb{R})$: the affine group of $\mathbb{R}^{n}$.
- $GL(n,\mathbb{R})$: the general linear group.
- $O(n)$: the orthogonal group.
- $SO(n)$: the special orthogonal group.
- $E(n)$: the Euclidean group (rigid motions of $\mathbb{R}^{n}$).

<a id="section-101-claim-status-conventions"></a>
## Claim-status conventions {#section-103-claim-status-conventions}

The prose uses the following three-part classification. These are status words, not literal tags attached to every theorem:

| Status | Symbol | Meaning |
| --- | --- | --- |
| Full proof | proof | A complete deductive argument from stated axioms. |
| Proof sketch | proof sketch or proof architecture | A compressed argument with identified details left to the reader or an imported result. |
| Open problem | open problem | A statement whose truth value is currently unresolved. A proved conditional theorem remains a theorem with hypotheses, not an open problem. |

When a proof is called a sketch or architecture, the text should indicate which steps are compressed and what the reader must supply.

<a id="section-113-diagram-and-figure-conventions"></a>
## Diagram and figure conventions {#section-115-diagram-and-figure-conventions}

- Diagrams are illustrative, not probative. No proof depends on a diagram for case coverage.
- When a proof requires case analysis, all cases are stated in text.
- Directed angles are used when orientation matters; undirected angles are denoted by absolute value or context.

<a id="section-119-indexing-and-numbering-conventions"></a>
## Indexing and numbering conventions {#section-121-indexing-and-numbering-conventions}

- The current main route has chapters 1–16 in reading order; retained earlier-edition references use their original 1–14 numbering.
- Theorems, definitions, and exercises are numbered within each chapter.
- Cross-references use chapter titles when the target is a full chapter, and theorem numbers when the target is a specific result.

<a id="section-125-accessibility-and-notation-policy"></a>
## Accessibility and notation policy {#section-127-accessibility-and-notation-policy}

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

<a id="section-129-citation-policy"></a>
## Citation policy {#section-131-citation-policy}

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.

<a id="section-137-current-route-and-canonical-identities"></a>
## Current route and canonical identities {#section-139-current-route-and-canonical-identities}

The current route has sixteen semantic main chapters. Earlier numeric chapter references retain their edition meaning. The four old identities now resolve by native aliases to chapters that integrate the earlier material and original solutions, rather than to unrelated exercises. Affine and projective collineation classifications in the transformation chapter are proved over the real numbers; other fields may require semilinear qualifications. Inversion acts on the punctured plane unless a different compactification is explicitly specified. The working order and neutral metric packages and their imported-equivalence boundaries are stated in the reader guide.
