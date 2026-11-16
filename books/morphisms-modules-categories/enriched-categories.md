
# Enriched Categories

In **Monoidal Categories**, we studied categories equipped with a tensor product. This chapter asks: what if the hom-sets $\operatorname{Hom}(A,B)$ are not sets but objects of some monoidal category $\mathcal{V}$? The result is an **enriched category**, a vast generalization that includes metric spaces, posets, abelian categories, and spectra under one roof.

We define $\mathcal{V}$-categories, enriched functors, natural transformations, and the Yoneda lemma in the enriched setting. The examples stay concrete: categories enriched over abelian groups, over simplicial sets, and over the category of chain complexes.

## 10.1 Enriched categories

Let $(\mathcal{V}, \otimes, I)$ be a monoidal category. A **category enriched over $\mathcal{V}$** (or **$\mathcal{V}$-category**) $\mathcal{C}$ consists of:

1. a class $\operatorname{Ob}(\mathcal{C})$ of objects;
2. for each pair $A, B \in \operatorname{Ob}(\mathcal{C})$, an object $\mathcal{C}(A,B) \in \mathcal{V}$, called the **hom-object**;
3. for each $A$, a morphism $I \to \mathcal{C}(A,A)$ in $\mathcal{V}$, the **identity**;
4. for each triple $A, B, C$, a morphism $\mathcal{C}(B,C) \otimes \mathcal{C}(A,B) \to \mathcal{C}(A,C)$, the **composition**,

such that associativity and unit diagrams commute in $\mathcal{V}$.

When $\mathcal{V} = \mathbf{Set}$ with $\otimes = \times$, this is exactly the definition of an ordinary category.

**Example 10.1 ($\mathbf{Ab}$-enriched categories).** Let $\mathcal{V} = \mathbf{Ab}$, the category of abelian groups with $\otimes = \otimes_{\mathbb{Z}}$. A category enriched over $\mathbf{Ab}$ has abelian groups of morphisms, and composition is bilinear. The category $R\text{-}\mathbf{Mod}$ is $\mathbf{Ab}$-enriched: $\operatorname{Hom}_{R}(M,N)$ is an abelian group.

**Example 10.2 (Metric spaces).** Let $\mathcal{V}$ be the poset $([0, \infty], \geq)$ with monoidal product $+$ and unit $0$. A category enriched over this monoidal poset is a **generalized metric space**: objects are points, and $\mathcal{C}(x,y)$ is the distance from $x$ to $y$. The triangle inequality is the composition axiom, and $0 \geq d(x,x)$ forces $d(x,x) = 0$.

**Example 10.3 (Simplicial categories).** Let $\mathcal{V} = \mathbf{sSet}$, the category of simplicial sets with cartesian product. A simplicial category has a simplicial set of morphisms between any two objects. If those mapping spaces are Kan complexes, its homotopy coherent nerve is a quasicategory, as discussed in **Higher Categories**; otherwise one first takes a locally Kan fibrant replacement.

## 10.2 Underlying category and change of enrichment

Given a $\mathcal{V}$-category $\mathcal{C}$, the **underlying ordinary category** $\mathcal{C}_{0}$ has the same objects, and morphisms $A \to B$ are morphisms $I \to \mathcal{C}(A,B)$ in $\mathcal{V}$.

A **lax monoidal functor** $F: \mathcal{V} \to \mathcal{W}$ induces a **change of enrichment** from $\mathcal{V}$-categories to $\mathcal{W}$-categories: given a $\mathcal{V}$-category $\mathcal{C}$, define $F\mathcal{C}$ by $F\mathcal{C}(A,B) = F(\mathcal{C}(A,B))$.

**Example 10.4.** The forgetful functor $U: \mathbf{Ab} \to \mathbf{Set}$ is lax monoidal via $U(A) \times U(B) \to U(A \otimes B)$ sending $(a,b) \mapsto a \otimes b$. It sends an $\mathbf{Ab}$-enriched category to its underlying ordinary category.

## 10.3 Enriched functors and natural transformations

A **$\mathcal{V}$-functor** $F: \mathcal{C} \to \mathcal{D}$ assigns to each object $A \in \mathcal{C}$ an object $F(A) \in \mathcal{D}$ and to each pair $A, B$ a morphism $F_{A,B}: \mathcal{C}(A,B) \to \mathcal{D}(F(A), F(B))$ in $\mathcal{V}$, preserving composition and identities.

A **$\mathcal{V}$-natural transformation** $\eta: F \Rightarrow G$ assigns to each $A$ a morphism $\eta_{A}: I \to \mathcal{D}(F(A), G(A))$ such that the enriched naturality square commutes in $\mathcal{V}$.

**Example 10.5.** An $\mathbf{Ab}$-functor between $R\text{-}\mathbf{Mod}$ and $S\text{-}\mathbf{Mod}$ is a functor preserving the abelian group structure on hom-sets, i.e., an additive functor.

## 10.4 The enriched Yoneda lemma

For this section assume that $\mathcal V$ is complete, symmetric monoidal closed, and locally small, and that $\mathcal C$ is a small $\mathcal V$-category. Then the **$\mathcal{V}$-category of $\mathcal{V}$-functors** $[\mathcal{C}^{\mathrm{op}}, \mathcal{V}]$ exists, with hom-objects given by enriched ends. The **Yoneda embedding** $y: \mathcal{C} \to [\mathcal{C}^{\mathrm{op}}, \mathcal{V}]$ sends $A$ to the representable functor $\mathcal{C}(-, A)$.

**Theorem 10.6 (Enriched Yoneda lemma).** For every $\mathcal{V}$-functor $F: \mathcal{C}^{\mathrm{op}} \to \mathcal{V}$ and every $A \in \mathcal{C}$, there is a natural isomorphism in $\mathcal{V}$:

$$[\mathcal{C}^{\mathrm{op}}, \mathcal{V}](\mathcal{C}(-, A), F) \cong F(A).$$

*Proof sketch.* The isomorphism is constructed by evaluating at the identity $I \to \mathcal{C}(A,A)$. Naturality in $A$ and $F$ follows from the enriched functor axioms. $\square$

## 10.5 Tensored and cotensored categories

Assume here that $\mathcal V$ is closed. A $\mathcal{V}$-category $\mathcal{C}$ is **tensored** if for every $V \in \mathcal{V}$ and $A \in \mathcal{C}$, there exists $V \odot A \in \mathcal{C}$ with a natural isomorphism

$$\mathcal{C}(V \odot A, B) \cong [V, \mathcal{C}(A,B)],$$

where $[-,-]$ is the internal hom of $\mathcal{V}$. It is **cotensored** if there exists $A^{V}$ with

$$\mathcal{C}(A, B^{V}) \cong [V, \mathcal{C}(A,B)].$$

**Example 10.7.** $R\text{-}\mathbf{Mod}$ is tensored and cotensored over $\mathbf{Ab}$: $A \odot M = A \otimes_{\mathbb{Z}} M$ and $M^{A} = \operatorname{Hom}_{\mathbb{Z}}(A, M)$.

**Example 10.8.** The category of chain complexes is tensored and cotensored over chain complexes: the tensor is the usual tensor product of complexes, and the cotensor is the internal hom complex.

## 10.6 Common errors

- **Confusing the enriching category with the enriched category.** $\mathcal{V}$ is a monoidal category; $\mathcal{C}$ is a category whose hom-sets have been replaced by objects of $\mathcal{V}$. They are different kinds of objects.
- **Forgetting that composition is a morphism in $\mathcal{V}$.** In a $\mathcal{V}$-category, composition is not a function but a morphism $\mathcal{C}(B,C) \otimes \mathcal{C}(A,B) \to \mathcal{C}(A,C)$. One cannot evaluate it on elements unless $\mathcal{V}$ has elements.
- **Assuming all enriched categories are tensored.** Tensoredness is an extra condition. For example, the category of finitely generated $R$-modules is $\mathbf{Ab}$-enriched but not tensored over $\mathbf{Ab}$ because $A \otimes_{\mathbb{Z}} M$ need not be finitely generated.
- **Ignoring the monoidal structure on $\mathcal{V}$.** The associator and unit isomorphisms of $\mathcal{V}$ appear in the associativity and unit axioms of a $\mathcal{V}$-category. If $\mathcal{V}$ is not strict, these isomorphisms must be carried along.

## 10.7 Exercises

### Exercise 10.1

Show that a category enriched over the poset $(\{0,1\}, \leq)$ with $\otimes = \wedge$ is exactly a preorder.

**Solution.** The hom-object $\mathcal{C}(A,B)$ is either $0$ (false) or $1$ (true). Composition $\mathcal{C}(B,C) \wedge \mathcal{C}(A,B) \leq \mathcal{C}(A,C)$ is the transitive law. The identity $1 \leq \mathcal{C}(A,A)$ is reflexivity. Hence objects with truth-valued hom-objects form a preorder. $\square$

### Exercise 10.2

Prove that the underlying category of a $\mathcal{V}$-category $\mathcal{C}$ is indeed a category.

**Solution.** Morphisms $A \to B$ in $\mathcal{C}_{0}$ are morphisms $I \to \mathcal{C}(A,B)$. Composition of $f: I \to \mathcal{C}(A,B)$ and $g: I \to \mathcal{C}(B,C)$ is $I \xrightarrow{\cong} I \otimes I \xrightarrow{g \otimes f} \mathcal{C}(B,C) \otimes \mathcal{C}(A,B) \xrightarrow{\circ} \mathcal{C}(A,C)$. Associativity and units follow from the enriched category axioms. $\square$

### Exercise 10.3

Show that an $\mathbf{Ab}$-functor between $R\text{-}\mathbf{Mod}$ and $S\text{-}\mathbf{Mod}$ is the same as an additive functor.

**Solution.** An $\mathbf{Ab}$-functor gives maps $\operatorname{Hom}_{R}(M,N) \to \operatorname{Hom}_{S}(F(M), F(N))$ that are homomorphisms of abelian groups. This means $F(f+g) = F(f) + F(g)$, which is the definition of an additive functor. Conversely, an additive functor induces homomorphisms on hom-groups. $\square$

### Exercise 10.4

Prove that if $\mathcal{C}$ is tensored over $\mathcal{V}$, then the tensor $V \odot A$ is unique up to unique isomorphism.

**Solution.** The defining isomorphism $\mathcal{C}(V \odot A, B) \cong [V, \mathcal{C}(A,B)]$ determines $V \odot A$ as a representing object. Representing objects are unique up to unique isomorphism by the Yoneda lemma. $\square$

### Exercise 10.5

Let $\mathcal{V} = \mathbf{Ch}(\mathbb{Z})$ be the category of chain complexes. Show that a category enriched over $\mathbf{Ch}(\mathbb{Z})$ has a natural notion of homotopy between morphisms.

**Solution.** In $\mathbf{Ch}(\mathbb{Z})$, a morphism $I \to \mathcal{C}(A,B)$ is a $0$-cycle in the hom-complex. A degree-$1$ element $h$ with $dh=g-f$ is a chain homotopy from $f$ to $g$. Passing to degree-zero homology identifies maps that differ by such a boundary. A full track category also needs a coherent choice of 2-morphisms and their vertical and horizontal compositions, usually obtained from a suitable truncation or simplicial enrichment; the raw equation $dh=g-f$ alone does not supply all that structure. $\square$

## 10.8 Looking forward

Enriched categories unify linear algebra, topology, and homological algebra under one framework. In **Project: Categorical Proof**, dg and simplicial enrichments explain why derived mapping objects contain more information than ordinary derived-category hom-sets. The enrichment perspective also underlies spectral algebraic geometry, where categories are enriched over spectra.
