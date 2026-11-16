var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: model-categories
title: "Model Categories"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Model Categories

Triangulated categories, as studied in **Triangulated Categories**, capture the homotopy theory of chain complexes and spectra. But the triangulated structure is a shadow of something richer: a **model category**, introduced by Quillen, provides an explicit framework for homotopy theory inside an ordinary category. Model categories unify topological spaces, simplicial sets, chain complexes, and spectra under one roof.

This chapter defines model categories, studies the homotopy category construction, and shows how derived categories and stable homotopy categories arise as homotopy categories of model structures.

## 5.1 The definition

A **model category** is a category $\\mathcal{M}$ equipped with three classes of morphisms:

- **weak equivalences** ($\\xrightarrow{\\sim}$),
- **fibrations** ($\\twoheadrightarrow$),
- **cofibrations** ($\\hookrightarrow$),

satisfying the following axioms:

**MC1.** $\\mathcal{M}$ is complete and cocomplete (all small limits and colimits exist).

**MC2.** (2-out-of-3) If $f$ and $g$ are composable and two of $f$, $g$, $gf$ are weak equivalences, so is the third.

**MC3.** (Retracts) If $f$ is a retract of $g$ and $g$ is a weak equivalence (resp. fibration, cofibration), so is $f$.

**MC4.** (Lifting) In any commutative square

$$
\\begin{array}{ccc}
A & \\to & X \\\\
\\downarrow & & \\downarrow \\\\
B & \\to & Y
\\end{array}
$$

with $A \\to B$ a cofibration and $X \\to Y$ a fibration, a lift $B \\to X$ exists if either $A \\to B$ or $X \\to Y$ is a weak equivalence.

**MC5.** (Factorization) Every morphism $f$ factors as

1. $f = p \\circ i$ where $i$ is a cofibration and $p$ is an acyclic fibration (a fibration that is also a weak equivalence);
2. $f = p \\circ i$ where $i$ is an acyclic cofibration and $p$ is a fibration.

An object $X$ is **fibrant** if $X \\to 1$ is a fibration (where $1$ is the terminal object). It is **cofibrant** if $0 \\to X$ is a cofibration (where $0$ is the initial object).

## 5.2 The standard model structure on topological spaces

Let $\\mathbf{Top}$ be the category of topological spaces. The **Quillen model structure** is defined as follows:

- Weak equivalences: weak homotopy equivalences (induce isomorphisms on all $\\pi_{n}$ with arbitrary basepoint).
- Fibrations: Serre fibrations (maps with the homotopy lifting property with respect to all disks $D^{n}$).
- Cofibrations: retracts of relative cell complexes.

Every space is fibrant. A space is cofibrant if and only if it is a retract of a CW complex. CW complexes are the cofibrant objects par excellence.

**Example 5.1.** The inclusion $S^{n-1} \\hookrightarrow D^{n}$ is a cofibration. The projection $D^{n} \\to *$ is a fibration (since $D^{n}$ is contractible). The map $D^{n} \\to *$ is a weak equivalence.

## 5.3 The projective model structure on chain complexes

Let $R$ be a ring and $\\operatorname{Ch}(R)$ the category of chain complexes of left $R$-modules.

**Theorem 5.2 (imported).** There is a model structure on the category of unbounded complexes $\\operatorname{Ch}(R)$, called the **projective model structure**, with:

- Weak equivalences: quasi-isomorphisms.
- Fibrations: degree-wise surjections.
- Cofibrations: monomorphisms whose cokernels are dg-projective (equivalently, retracts of suitable semifree complexes).

Here **dg-projective** means that every component is projective and every chain map from the complex to an acyclic complex is null-homotopic. The complete lifting and factorization proof uses generating cofibrations and the small object argument.

Every complex is fibrant because its map to the zero complex is degreewise surjective. The cofibrant objects are the dg-projective complexes. Every bounded-below complex of projective modules is dg-projective, so ordinary projective resolutions supply cofibrant replacements, but boundedness is a sufficient condition rather than a characterization: over a field, for example, an unbounded complex with zero differential is cofibrant.

**Worked example 5.3.** Let $M$ be an $R$-module, viewed as a complex concentrated in degree $0$. A cofibrant replacement is a quasi-isomorphism $P_{\\bullet} \\xrightarrow{\\sim} M$ with $P_{\\bullet}$ a bounded below complex of projectives. This is precisely a projective resolution.

## 5.4 The homotopy category

Given a model category $\\mathcal{M}$, the **homotopy category** $\\operatorname{Ho}(\\mathcal{M})$ is obtained by formally inverting the weak equivalences. Quillen proved that $\\operatorname{Ho}(\\mathcal{M})$ is equivalent to the category whose objects are the cofibrant-fibrant objects of $\\mathcal{M}$ and whose morphisms are homotopy classes of maps.

**Theorem 5.4.** The localization functor $\\gamma: \\mathcal{M} \\to \\operatorname{Ho}(\\mathcal{M})$ exists and is universal among functors sending weak equivalences to isomorphisms.

For $\\operatorname{Ch}(R)$ with the projective model structure, $\\operatorname{Ho}(\\operatorname{Ch}(R))$ is the unbounded derived category $D(R)$. Since every complex is fibrant, the fibrant-cofibrant objects are the dg-projective complexes. A bounded-below projective resolution is enough for bounded-below calculations; genuinely unbounded objects may require a dg-projective or semifree replacement.

## 5.5 Quillen adjunctions and derived functors

An adjunction $F: \\mathcal{M} \\rightleftarrows \\mathcal{N}: G$ between model categories is a **Quillen adjunction** if $F$ preserves cofibrations and acyclic cofibrations, equivalently if $G$ preserves fibrations and acyclic fibrations.

Given a Quillen adjunction, the **left derived functor** $\\mathbb{L}F$ and **right derived functor** $\\mathbb{R}G$ exist on homotopy categories. Concretely, $\\mathbb{L}F(X)$ is computed by applying $F$ to a cofibrant replacement of $X$, and $\\mathbb{R}G(Y)$ by applying $G$ to a fibrant replacement of $Y$.

**Example 5.5.** Let $R \\to S$ be a ring homomorphism. On left modules, extension of scalars $S\\otimes_R-$ and restriction of scalars form an adjunction between $R\\text{-}\\mathbf{Mod}$ and $S\\text{-}\\mathbf{Mod}$. This extends to a Quillen adjunction on chain complexes, and its left derived functor is $S\\otimes_R^{\\mathbb L}-$.

## 5.6 Simplicial sets and Kan complexes

The category $\\mathbf{sSet}$ of simplicial sets carries the **Kan-Quillen model structure**:

- Weak equivalences: maps whose geometric realization is a weak homotopy equivalence.
- Fibrations: Kan fibrations.
- Cofibrations: monomorphisms.

Every simplicial set is cofibrant. The fibrant objects are the **Kan complexes**: simplicial sets in which every horn has a filler. The homotopy category $\\operatorname{Ho}(\\mathbf{sSet})$ is equivalent to the homotopy category of CW complexes.

This model structure is **combinatorial**: its underlying category is locally presentable and the model structure is cofibrantly generated. This is an accessibility condition, not a claim that every construction is finitary. It is a gateway to higher category theory.

## 5.7 Common errors

- **Confusing fibrations with surjections.** In topological spaces, fibrations need not be surjective: the inclusion of one point into a discrete two-point space is a Serre fibration. In chain complexes, fibrations are degreewise surjections, but this is special to the projective model structure.
- **Forgetting that not every object is cofibrant or fibrant.** Derived functors require replacements. Computing $F(X)$ directly without replacing $X$ is a common mistake.
- **Assuming the homotopy category is concrete.** The homotopy category of spaces is not concrete: there is no faithful functor to $\\mathbf{Set}$. This means one cannot treat homotopy classes of maps as functions.
- **Ignoring the model structure.** A category may admit multiple model structures with the same weak equivalences but different cofibrations and fibrations. The choice matters for computations.

## 5.8 Exercises

### Exercise 5.1

Show that in any model category, the composition of two cofibrations is a cofibration.

**Solution.** Let $A \\xrightarrow{i} B \\xrightarrow{j} C$ be cofibrations. By MC4, cofibrations have the left lifting property against acyclic fibrations. Given a lifting square with $ji$ on the left, first apply the property for $i$ to obtain a map $B$ to the upper-right object, using $B\\to C\\to Y$ along the bottom. Then apply it for $j$ to extend that map from $B$ to $C$. Hence $ji$ has the required lifting property and is a cofibration. $\\square$

### Exercise 5.2

Prove that in $\\operatorname{Ch}(R)$ with the projective model structure, every bounded below complex of projectives is cofibrant.

**Solution.** We must lift a chain map $P_\\bullet\\to Y_\\bullet$ through a degreewise surjective quasi-isomorphism $X_\\bullet\\to Y_\\bullet$. Its kernel $K_\\bullet$ is acyclic. Starting at the lowest nonzero degree, projectivity gives a module lift. Inductively, the defect of a tentative lift commuting with the differential is a cycle in $K$; acyclicity writes that cycle as a boundary, and projectivity lets us adjust the next lift by a preimage. This produces a chain-compatible lift in every degree. Thus $0\\to P_\\bullet$ has the left lifting property against acyclic fibrations. $\\square$

### Exercise 5.3

Show that the derived tensor product $M \\otimes_{R}^{\\mathbb{L}} N$ can be computed by taking a projective resolution of either variable.

**Solution.** Assume $R$ is commutative. If $P_{\\bullet} \\xrightarrow{\\sim} M$ is a projective resolution, then $P_{\\bullet} \\otimes_R N$ represents the derived tensor product. Resolving $N$ instead gives $M\\otimes_R Q_\\bullet$. A double-resolution comparison, or the total complex $P_\\bullet\\otimes_R Q_\\bullet$, gives canonical isomorphisms between these objects in $D(R)$. For noncommutative $R$, use a right-module resolution in the first variable and a left-module resolution in the second. $\\square$

### Exercise 5.4

Verify that the geometric realization of a Kan complex is a CW complex.

**Solution.** The geometric realization $|X|$ of a simplicial set $X$ is a CW complex by construction: the $n$-simplices of $X$ correspond to $n$-cells of $|X|$, and the attaching maps are determined by the face maps. If $X$ is a Kan complex, $|X|$ is a topological space with the homotopy type of a CW complex; in fact, Milnor proved that $|X|$ is a CW complex with one cell for each nondegenerate simplex of $X$. $\\square$

### Exercise 5.5

For a nonzero integer $n$, construct an explicit cofibrant replacement of the $\\mathbb{Z}$-module $\\mathbb{Z}/n\\mathbb{Z}$ in $\\operatorname{Ch}(\\mathbb{Z})$.

**Solution.** For $n\\ne0$, the projective resolution $0 \\to \\mathbb{Z} \\xrightarrow{\\times n} \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z} \\to 0$ yields the complex

$$P_{\\bullet}: \\quad \\cdots \\to 0 \\to \\mathbb{Z} \\xrightarrow{\\times n} \\mathbb{Z} \\to 0$$

with the rightmost $\\mathbb{Z}$ in degree $0$. The augmentation $P_{\\bullet} \\to \\mathbb{Z}/n\\mathbb{Z}$ is reduction modulo $n$ in degree $0$ and zero elsewhere. It is a quasi-isomorphism, and $P_\\bullet$ is cofibrant because it is a bounded-below complex of free modules. $\\square$

## 5.9 Looking forward

Model categories provide the computational engine for homotopy theory. In **Higher Categories**, we will see how model categories of simplicial sets give rise to quasicategories, where composition is associative only up to coherent homotopy. In **Topos Theory**, model structures on simplicial sheaves will allow us to do homotopy theory inside a topos.
`;export{e as default};