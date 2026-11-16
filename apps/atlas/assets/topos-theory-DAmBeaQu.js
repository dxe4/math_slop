var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: topos-theory
title: "Topos Theory"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Topos Theory

In **Higher Categories**, we saw that $(\\infty,1)$-topoi generalize the category of spaces and provide a homotopy-theoretic setting for sheaf theory. This chapter studies ordinary topoi---categories that look like sheaves of sets on a topological space---and explains why they are the natural home for categorical logic, cohomology, and geometric morphisms.

Modern topos theory joins Grothendieck's sheaf-theoretic route with the independently developed categorical route associated with Lawvere and later work by Tierney and others. Mac Lane and Moerdijk, *Sheaves in Geometry and Logic*, Prologue, pp. 1--8, gives this as secondary historical context rather than an exhaustive account of original sources. The resulting theory unifies topology, logic, and geometry: every topos has an internal language in which one can do mathematics, and every geometric morphism is a generalized continuous map.

## 7.1 Sheaves on a site

Let $\\mathcal{C}$ be a small category with pullbacks. A **Grothendieck pretopology** specifies families $\\{U_i\\to U\\}$ called **covering families**: isomorphisms cover, pullbacks of covers are covers, and composites of covering families cover. These families generate a Grothendieck topology whose covers are certain subfunctors of representables called **covering sieves**. A **site** is a category with such a topology; we use the covering-family presentation below.

A **presheaf** on $\\mathcal{C}$ is a functor $F: \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}$. It is a **sheaf** if for every covering family $\\{U_{i} \\to U\\}$, the natural map

$$F(U) \\to \\operatorname{eq}\\left( \\prod_{i} F(U_{i}) \\rightrightarrows \\prod_{i,j} F(U_{i} \\times_{U} U_{j}) \\right)$$

is an isomorphism. In words: compatible local data glue uniquely to global data.

**Example 7.1.** Let $X$ be a topological space and $\\mathcal{C}$ the poset of open subsets. The usual open covers define a Grothendieck topology. Sheaves in this sense are ordinary sheaves of sets on $X$.

**Example 7.2.** Let $\\mathcal{C} = \\mathbf{Aff}$ be the category of affine schemes with the étale topology. Sheaves on this site are the foundation of étale cohomology.

## 7.2 Definition of a topos

A **Grothendieck topos** is a category $\\mathcal{E}$ equivalent to the category $\\operatorname{Sh}(\\mathcal{C})$ of sheaves of sets on some site $\\mathcal{C}$.

**Theorem 7.3 (Giraud; imported).** A locally small category $\\mathcal{E}$ is a Grothendieck topos if and only if it satisfies the following conditions:

1. $\\mathcal{E}$ has all finite limits;
2. $\\mathcal{E}$ has all small coproducts, which are disjoint and stable under pullback;
3. every epimorphism is a coequalizer;
4. equivalence relations are effective, and exact forks---hence their quotient maps---are stable under pullback;
5. $\\mathcal{E}$ has a small set of generators.

This is the formulation in Mac Lane and Moerdijk, Appendix, Theorem 1, p. 575. Limits in a sheaf category are computed as presheaf limits, while colimits generally require sheafifying the presheaf colimit. On a non-subcanonical site, representables need not themselves be sheaves; their sheafifications form a generating family. The reverse construction of a site from generators is the substantial part of Giraud's theorem; Appendix Section 3, pp. 578--586, is the imported construction.

## 7.3 The internal language

Every topos $\\mathcal{E}$ has an **internal logic** that is intuitionistic higher-order logic. Objects of $\\mathcal{E}$ are types, morphisms are terms, and the subobject classifier $\\Omega$ is the object of truth values.

**Definition 7.4.** A **subobject classifier** is an object $\\Omega$ equipped with a universal monomorphism $\\mathrm{true}: 1 \\to \\Omega$ such that every monomorphism $U \\hookrightarrow X$ is the pullback of $\\mathrm{true}$ along a unique morphism $\\chi_{U}: X \\to \\Omega$.

In $\\mathbf{Set}$, $\\Omega = \\{0,1\\}$ and $\\chi_{U}$ is the characteristic function. In $\\operatorname{Sh}(X)$, $\\Omega$ is the sheaf of open sets: $\\Omega(U)$ is the set of open subsets of $U$.

The internal logic allows one to prove theorems inside the topos and then interpret them externally. For example, the statement "every function is injective or not" is true in $\\mathbf{Set}$ but false in most sheaf topoi, reflecting the constructive nature of the internal logic.

## 7.4 Geometric morphisms

A **geometric morphism** $f: \\mathcal{F} \\to \\mathcal{E}$ between topoi is an adjoint pair

$$f^{*}: \\mathcal{E} \\rightleftarrows \\mathcal{F}: f_{*}$$

where $f^{*}$ preserves finite limits. The functor $f_{*}$ is the **direct image** and $f^{*}$ is the **inverse image**.

**Example 7.5.** Let $f: X \\to Y$ be a continuous map of topological spaces. Then $f^{*}: \\operatorname{Sh}(Y) \\to \\operatorname{Sh}(X)$ is pullback of sheaves, and $f_{*}: \\operatorname{Sh}(X) \\to \\operatorname{Sh}(Y)$ is pushforward. This is a geometric morphism.

**Example 7.6.** Let $\\mathcal{E}$ be a topos and $X \\in \\mathcal{E}$ an object. The slice topos $\\mathcal{E}/X$ is a topos, and the projection $\\mathcal{E}/X \\to \\mathcal{E}$ is a geometric morphism. This generalizes the passage from a space to an open subset.

## 7.5 Cohomology in a topos

Let $\\operatorname{Ab}(\\mathcal E)$ be the abelian category of abelian group objects. The global-sections functor is

$$\\Gamma:\\operatorname{Ab}(\\mathcal E)\\longrightarrow\\mathbf{Ab},
\\qquad \\Gamma(A)=\\operatorname{Hom}_{\\mathcal E}(1,A).$$

The cohomology of the topos with coefficients in $A$ is

$$H^{n}(\\mathcal E,A)=R^{n}\\Gamma(A).$$

For an object $X\\in\\mathcal E$, cohomology over $X$ is defined in the slice topos $\\mathcal E/X$, with the coefficient object pulled back there. When $\\mathcal{E} = \\operatorname{Sh}(X)$ for a topological space $X$, this recovers sheaf cohomology. When $\\mathcal{E}$ is the étale topos of a scheme, it recovers étale cohomology.

**Worked example 7.7.** Compute $H^{1}(S^{1}, \\underline{\\mathbb{Z}})$, where $\\underline{\\mathbb{Z}}$ is the constant sheaf on the circle.

Using Cech cohomology with respect to the cover by two overlapping intervals $U$ and $V$, we have $U \\cap V \\cong \\mathbb{R} \\sqcup \\mathbb{R}$. The Cech complex is

$$\\check{C}^{0} = \\mathbb{Z}^{2}, \\qquad \\check{C}^{1} = \\mathbb{Z}^{2},$$

with differential $(a,b) \\mapsto (b-a, b-a)$. The kernel is $\\{(a,a)\\} \\cong \\mathbb{Z}$, and the image is $\\{(c,c)\\} \\cong \\mathbb{Z}$. Hence $H^{1} = \\mathbb{Z}^{2}/\\mathbb{Z} \\cong \\mathbb{Z}$.

**Verification script.**

\`\`\`python
from sympy import Matrix, ZZ
from sympy.matrices.normalforms import smith_normal_form

d = Matrix([[-1, 1], [-1, 1]])
print(smith_normal_form(d, domain=ZZ))  # diag(-1, 0)
\`\`\`

The Smith normal form of the integer matrix is $\\operatorname{diag}(1,0)$, so its cokernel is $\\mathbb Z$ with no torsion; a vector-space rank alone would not establish that integral conclusion.

## 7.6 Classifying topoi

A topos $\\mathcal{E}$ is a **classifying topos** for a geometric theory $\\mathbb{T}$ if geometric morphisms $f: \\mathcal{F} \\to \\mathcal{E}$ correspond to models of $\\mathbb{T}$ in $\\mathcal{F}$. For example, the theory of one object is classified by the functor topos $[\\mathbf{FinSet},\\mathbf{Set}]$, equivalently the presheaf topos on $\\mathbf{FinSet}^{\\mathrm{op}}$. The topos of sheaves on the appropriate site of finitely presented local-ring syntax classifies local rings.

The imported existence and universal-property theorem for a general geometric theory is Mac Lane and Moerdijk, Chapter X, Section 6, Theorem 1, pp. 559--566. The present paragraph records its orientation and examples; it does not reproduce the syntactic-site construction.

This perspective makes topos theory a bridge between syntax and semantics: a theory determines a topos, and the topos encodes all models of the theory in all topoi.

## 7.7 Common errors

- **Confusing presheaves and sheaves.** A presheaf need not satisfy the gluing axiom. The sheafification functor $a: \\operatorname{PSh}(\\mathcal{C}) \\to \\operatorname{Sh}(\\mathcal{C})$ is left adjoint to the inclusion, but it changes the underlying presheaf.
- **Assuming classical logic internally.** The internal logic of a topos is intuitionistic. The law of excluded middle holds if and only if the topos is Boolean (e.g., $\\mathbf{Set}$), which is rare.
- **Ignoring the site.** Different sites can give equivalent topoi. The topos is the invariant object; the site is a presentation.
- **Treating geometric morphisms as functors.** A geometric morphism is an adjoint pair, not a single functor. Both $f^{*}$ and $f_{*}$ carry information.

## 7.8 Exercises

### Exercise 7.1

Show that the category of sheaves on a topological space $X$ is a Grothendieck topos.

**Solution.** Limits are computed pointwise. Colimits are obtained by taking the presheaf colimit and then sheafifying; left exactness of sheafification supplies pullback stability. The sheafifications of representables form a small generating family. Every epimorphism is the coequalizer of its kernel pair: form the presheaf coequalizer and sheafify. More generally, if $R\\rightrightarrows F$ is an equivalence relation of sheaves, its effective quotient is the sheafification of the presheaf quotient; the presheaf quotient need not already be a sheaf. These exact forks remain exact after pullback. Thus all five stated Giraud conditions hold, so $\\operatorname{Sh}(X)$ is a Grothendieck topos. $\\square$

### Exercise 7.2

Prove that the subobject classifier in $\\operatorname{Sh}(X)$ is the sheaf of open sets.

**Solution.** Define $\\Omega(U) = \\{V \\subseteq U : V \\text{ open}\\}$. For $W \\subseteq U$, the restriction map is $V \\mapsto V \\cap W$. Given a subsheaf $F \\hookrightarrow G$, define $\\chi_{F}(U): G(U) \\to \\Omega(U)$ by sending $s \\in G(U)$ to the largest open $V \\subseteq U$ such that $s|_{V} \\in F(V)$. This is well defined because $F$ is a sheaf. The pullback of $\\mathrm{true}: 1 \\to \\Omega$ along $\\chi_{F}$ is exactly $F \\hookrightarrow G$. $\\square$

### Exercise 7.3

Compute $H^{0}(X, \\underline{\\mathbb{Z}})$ for a nonempty connected topological space $X$.

**Solution.** $H^{0}(X, \\underline{\\mathbb{Z}}) = \\Gamma(X, \\underline{\\mathbb{Z}})$ is the group of global sections of the constant sheaf. Since $X$ is connected, every locally constant $\\mathbb{Z}$-valued function is constant. Hence $H^{0}(X, \\underline{\\mathbb{Z}}) \\cong \\mathbb{Z}$. $\\square$

### Exercise 7.4

Show that the slice topos $\\mathbf{Set}/X$ is equivalent to the category of $X$-indexed families of sets.

**Solution.** An object of $\\mathbf{Set}/X$ is a map $p: E \\to X$. Its fibers $E_{x} = p^{-1}(x)$ form an $X$-indexed family. Conversely, given a family $\\{E_{x}\\}_{x \\in X}$, the disjoint union $E = \\bigsqcup_{x} E_{x}$ with projection to $X$ is an object of $\\mathbf{Set}/X$. These constructions are functorial and inverse. $\\square$

### Exercise 7.5

Prove that every Grothendieck topos is locally presentable.

**Solution.** A Grothendieck topos is an accessible left-exact localization of a presheaf category. For some sufficiently large regular cardinal $\\kappa$, the reflector preserves $\\kappa$-filtered colimits and the localized images of a small collection of $\\kappa$-presentable presheaves generate. Adámek and Rosický, *Locally Presentable and Accessible Categories*, Proposition 1.46, identifies accessible reflective localizations of presheaf categories with locally presentable categories. Applying that imported result proves the claim; left exactness is the additional topos property, and an arbitrary reflective subcategory would not suffice. $\\square$

## 7.9 Looking forward

Topos theory provides the geometric stage for categorical logic. In **Categorical Logic**, we will study the internal language systematically and prove that geometric theories classify topoi. In **Monoidal Categories**, we will see how sheaves of modules over a ringed topos form monoidal categories, leading to tensor products in geometry.
`;export{e as default};