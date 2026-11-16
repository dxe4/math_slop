var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: higher-categories
title: "Higher Categories"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Higher Categories

In **Model Categories**, we saw that homotopy theory can be encoded by weak equivalences in a model category, and that the homotopy category loses information (for instance, the derived category does not remember why two complexes are quasi-isomorphic). Higher categories restore this lost information by keeping track of homotopies between homotopies, all the way up.

This chapter introduces $(\\infty,1)$-categories via quasicategories, explains their relationship to model categories and triangulated categories, and gives examples from algebraic topology and algebraic geometry.

## 6.1 From categories to higher categories

An ordinary category has objects and morphisms. A **bicategory** has objects, 1-morphisms between objects, and 2-morphisms between 1-morphisms, with composition associative up to specified coherent 2-isomorphisms. A strict 2-category is the special case with strictly associative composition. Iterating gives several equivalent models of higher categories.

An **$(\\infty,1)$-category** is a higher category in which all $k$-morphisms for $k \\geq 2$ are invertible. This means we have objects, morphisms, homotopies between morphisms, homotopies between homotopies, and so on, but every higher homotopy is reversible. The $(\\infty,1)$-category of spaces is the natural setting for homotopy theory.

## 6.2 Quasicategories

One widely used model of $(\\infty,1)$-categories is the **quasicategory**, also called a weak Kan complex. Boardman and Vogt introduced the weak-Kan formulation, Joyal developed the theory of quasicategories, and Lurie gave a major systematic treatment and further development. This lineage and terminology are recorded in Lurie's *Higher Topos Theory*, §1.1.2, p. 14; it is not a two-author origin claim.

Recall from **Model Categories** that a simplicial set $X$ is a **Kan complex** if every horn $\\Lambda^{n}_{k} \\to X$ ($0 \\leq k \\leq n$) has a filler $\\Delta^{n} \\to X$. A **quasicategory** is a simplicial set in which every **inner horn** $\\Lambda^{n}_{k} \\to X$ ($0 < k < n$) has a filler. The outer horns ($k=0$ and $k=n$) need not fill: they correspond to non-invertible morphisms.

**Definition 6.1.** A **quasicategory** is a simplicial set $\\mathcal{C}$ such that for every $n \\geq 2$ and every $0 < k < n$, every map $\\Lambda^{n}_{k} \\to \\mathcal{C}$ extends to $\\Delta^{n} \\to \\mathcal{C}$.

The $0$-simplices of $\\mathcal{C}$ are its **objects**. The $1$-simplices are its **morphisms**. A $2$-simplex with boundary $(f,g,h)$ is a witness that $h$ is a composition of $f$ and $g$. Because inner horns fill, composition is associative up to homotopy, and the homotopies cohere.

**Example 6.2.** Every Kan complex is a quasicategory. The nerve of an ordinary category is a quasicategory: every inner horn has a unique filler because composition in a category is strictly associative.

**Example 6.3.** Let $\\mathcal{M}$ be a model category. Its ordinary nerve $N(\\mathcal M)$ is always a quasicategory, because it is the nerve of an ordinary category. It does not, however, encode the desired localization at weak equivalences. The **Dwyer--Kan simplicial localization** $L^{H}\\mathcal{M}$ supplies derived mapping spaces; after replacing it by a simplicial category with Kan mapping spaces, its homotopy coherent nerve is a quasicategory presenting the localized homotopy theory.

## 6.3 The quasicategory of spaces

The most important example is the quasicategory of spaces $\\mathcal{S}$. It can be constructed as the homotopy coherent nerve of the locally Kan simplicial category of Kan complexes.

An object of $\\mathcal{S}$ is a Kan complex $X$. A morphism $X \\to Y$ is a map of simplicial sets. A $2$-simplex is a homotopy between composites. The fact that Kan complexes are the fibrant objects of the Kan-Quillen model structure ensures that all higher morphisms are invertible.

**Proposition 6.4.** The homotopy category of the quasicategory $\\mathcal{S}$ is the ordinary homotopy category of spaces: $h\\mathcal{S} \\cong \\operatorname{Ho}(\\mathbf{Top})$.

*Proof sketch.* The homotopy category of a quasicategory has objects the $0$-simplices and morphisms given by homotopy classes of $1$-simplices. For Kan complexes, this is exactly the classical homotopy category. $\\square$

## 6.4 Limits and colimits in quasicategories

In an ordinary category, a limit is a terminal cone. In a quasicategory, a **limit** of a diagram $K \\to \\mathcal{C}$ is a terminal object in the quasicategory of cones. Because terminality is a universal property up to contractible choice, limits in quasicategories are unique up to a contractible space of choices.

**Theorem 6.5.** The quasicategory $\\mathcal{S}$ has all small limits and colimits. They are computed by homotopy limits and homotopy colimits in the underlying model category of simplicial sets.

This means that when we pass from model categories to quasicategories, we do not lose homotopical information: the homotopy limit in the model category is exactly the limit in the quasicategory.

## 6.5 Stable $(\\infty,1)$-categories

An $(\\infty,1)$-category is **stable** if it has finite limits and finite colimits, has a zero object, and a commutative square is a pushout if and only if it is a pullback. Equivalently, fiber and cofiber constructions determine one another. This is the $(\\infty,1)$-categorical analogue of a triangulated category.

**Theorem 6.6 (imported).** The homotopy category of a stable $(\\infty,1)$-category is triangulated. The distinguished triangles are the cofiber sequences. A precise source is Lurie, *Higher Algebra*, Theorem 1.1.2.14, p. 27; Remark 1.1.2.15 records the canonical triangulation.

This explains why triangulated categories appear everywhere in homological algebra: they are the shadows of stable $(\\infty,1)$-categories. The derived category $D(\\mathcal{A})$ is the homotopy category of the stable $(\\infty,1)$-category of chain complexes in $\\mathcal{A}$.

**Example 6.7.** The $(\\infty,1)$-category of spectra is stable. Its homotopy category is the classical stable homotopy category, which is triangulated with shift given by suspension.

## 6.6 Higher topos theory

An **$(\\infty,1)$-topos** is an $(\\infty,1)$-category that looks like the $(\\infty,1)$-category of sheaves of spaces on a site. Lurie's *Higher Topos Theory* gives a systematic modern development that generalizes Grothendieck topos theory to the homotopical setting.

The key example is the $(\\infty,1)$-category of sheaves of spaces on a topological space $X$, or more generally on a Grothendieck site. Such higher-topos methods form part of the foundations used in derived algebraic geometry, whose additional algebraic constructions lie beyond this chapter and beyond the scope of *Higher Topos Theory* alone.

## 6.7 Common errors

- **Confusing quasicategories with simplicial categories.** A quasicategory is a simplicial set with a horn-filling condition. A simplicial category is a category enriched over simplicial sets. They are equivalent models via the homotopy coherent nerve, but the combinatorics differ.
- **Assuming strict associativity.** In a quasicategory, composition of morphisms is not a function but a relation: there may be many composites, and they are related by higher simplices. One must never write $h = g \\circ f$ as an equality without specifying a witness.
- **Ignoring the difference between $(\\infty,1)$ and $(\\infty,\\infty)$.** In an $(\\infty,1)$-category, all higher morphisms are invertible. In a general $(\\infty,\\infty)$-category, they need not be. The latter is much harder and is the subject of ongoing research.
- **Treating the homotopy category as sufficient.** The homotopy category of a stable $(\\infty,1)$-category loses the higher homotopical information. For example, the mapping space $\\operatorname{Map}(X,Y)$ in the $(\\infty,1)$-category carries a space of extensions, not just an abelian group of morphisms.

## 6.8 Exercises

### Exercise 6.1

Show that the nerve of a category $\\mathcal{C}$ is a quasicategory, and that it is a Kan complex if and only if $\\mathcal{C}$ is a groupoid.

**Solution.** For the nerve $N\\mathcal{C}$, an inner horn $\\Lambda^{n}_{k} \\to N\\mathcal{C}$ ($0 < k < n$) corresponds to composable arrows with one composite missing. Strict composition supplies the unique filler. If $\\mathcal{C}$ is a groupoid, outer horns fill as well: in dimension $2$, the two specified sides determine the missing side by composing with an inverse, and the general case reduces to this. Conversely, filling the two outer $2$-horns associated with any arrow produces a left and a right inverse, so every arrow is invertible. Thus $N\\mathcal C$ is Kan exactly when $\\mathcal C$ is a groupoid. $\\square$

### Exercise 6.2

Prove that in a quasicategory, a morphism $f: x \\to y$ is an equivalence if and only if it extends to a map $\\Delta^{2} \\to \\mathcal{C}$ witnessing a left inverse and a map witnessing a right inverse.

**Solution.** By definition, $f$ is an equivalence if there exists $g: y \\to x$ and $2$-simplices showing $g \\circ f \\simeq \\operatorname{id}_{x}$ and $f \\circ g \\simeq \\operatorname{id}_{y}$. The existence of both $2$-simplices is exactly the condition. In a quasicategory, having a left and right inverse implies they are homotopic, so a single inverse suffices. $\\square$

### Exercise 6.3

Show that the homotopy category of a stable $(\\infty,1)$-category satisfies the octahedral axiom (TR4).

**Solution.** In a stable $(\\infty,1)$-category, cofiber sequences are functorial and satisfy the pushout axiom. Given $A \\xrightarrow{f} B \\xrightarrow{g} C$, the cofiber of $f$ is $B/A$, the cofiber of $g$ is $C/B$, and the cofiber of $gf$ is $C/A$. The pushout square

$$
\\begin{array}{ccc}
B/A & \\to & C/A \\\\
\\downarrow & & \\downarrow \\\\
0 & \\to & C/B
\\end{array}
$$

in the $(\\infty,1)$-category induces the octahedral diagram in the homotopy category. The higher coherences in the $(\\infty,1)$-category guarantee that the diagram commutes and satisfies TR4. $\\square$

### Exercise 6.4

Explain why projective, injective, or flat model structures can be different presentations of the same derived $(\\infty,1)$-category, and why this does not by itself exhibit two inequivalent enhancements.

**Solution.** When the relevant model structures exist and their comparison functors are Quillen equivalences, their simplicial localizations present equivalent $(\\infty,1)$-categories. Their cofibrations and fibrations may differ, so the model structures are different presentations, while the resulting enhancement is the same up to equivalence. Establishing genuinely nonunique enhancements would require two non-equivalent stable $(\\infty,1)$-categories with equivalent homotopy categories; equivalent model presentations provide no such example. $\\square$

### Exercise 6.5

Construct the quasicategory of chain complexes over a ring $R$ as a simplicial set.

**Solution.** Regard $\\operatorname{Ch}(R)$ together with its quasi-isomorphisms as a relative category. Form its Dwyer--Kan simplicial localization, replace the resulting simplicial category by an equivalent locally Kan simplicial category, and take the homotopy coherent nerve. The result is a quasicategory whose homotopy category is $D(R)$. This construction retains the derived mapping spaces and inverts the quasi-isomorphisms. The ordinary nerve alone would retain only strict chain maps and would not perform that localization. $\\square$

## 6.9 Looking forward

Higher categories remove the artificial strictness of ordinary categories and triangulated categories. In **Topos Theory**, we will see how $(\\infty,1)$-topoi provide the correct framework for sheaf cohomology and derived algebraic geometry. In **Categorical Logic**, the internal language of an $(\\infty,1)$-topos will allow us to do homotopy theory synthetically.
`;export{e as default};