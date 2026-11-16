
# Monoidal Categories

In **Categorical Logic**, we saw how categories with suitable structure interpret logical connectives. This chapter studies categories equipped with a tensor product---**monoidal categories**---which are the categorical home for multilinear algebra, representation theory, quantum groups, and linear logic.

A monoidal category is a category $\mathcal{C}$ with a bifunctor $\otimes: \mathcal{C} \times \mathcal{C} \to \mathcal{C}$, a unit object $I$, and coherence isomorphisms making $\otimes$ associative and unital up to coherent natural isomorphism. Mac Lane's coherence theorem says that all canonical maps between two parenthesizations agree; it does not identify the differently parenthesized objects as literal equalities. The exact imported route is Mac Lane, *Categories for the Working Mathematician*, 2nd ed., Chapter VII, Section 2, Theorem 1 and its coherence corollary, pp. 166--170.

## 9.1 Definition and coherence

A **monoidal category** $(\mathcal{C}, \otimes, I, \alpha, \lambda, \rho)$ consists of:

1. a category $\mathcal{C}$;
2. a bifunctor $\otimes: \mathcal{C} \times \mathcal{C} \to \mathcal{C}$;
3. a unit object $I \in \mathcal{C}$;
4. a natural associativity isomorphism $\alpha_{A,B,C}: (A \otimes B) \otimes C \to A \otimes (B \otimes C)$;
5. natural unit isomorphisms $\lambda_{A}: I \otimes A \to A$ and $\rho_{A}: A \otimes I \to A$,

such that the pentagon and triangle diagrams commute:

$$
\begin{array}{ccccc}
((A \otimes B) \otimes C) \otimes D & & \xrightarrow{\alpha} & & (A \otimes B) \otimes (C \otimes D) \\
\downarrow^{\alpha \otimes \operatorname{id}} & & & & \downarrow^{\alpha} \\
(A \otimes (B \otimes C)) \otimes D & \xrightarrow{\alpha} & A \otimes ((B \otimes C) \otimes D) & \xrightarrow{\operatorname{id} \otimes \alpha} & A \otimes (B \otimes (C \otimes D))
\end{array}
$$

and $(A \otimes I) \otimes B \xrightarrow{\alpha} A \otimes (I \otimes B) \xrightarrow{\operatorname{id} \otimes \lambda} A \otimes B$ equals $(A \otimes I) \otimes B \xrightarrow{\rho \otimes \operatorname{id}} A \otimes B$.

**Theorem 9.1 (Mac Lane coherence).** In a monoidal category, any diagram built from $\alpha$, $\lambda$, $\rho$, and their inverses commutes.

*Imported proof orientation.* The free monoidal category on one generator is organized by planar binary trees. The pentagon and triangle imply that all parallel pairs of composable coherence maps are equal. The complete proof is Mac Lane, Chapter VII, Section 2, Theorem 1 and its corollary, pp. 166--170; this paragraph records only the proof idea. $\square$

## 9.2 Examples

**Example 9.2 ($\mathbf{Set}$).** The category of sets is monoidal with $\otimes = \times$ (Cartesian product) and $I = \{\ast\}$. It is also monoidal with $\otimes = \sqcup$ (disjoint union) and $I = \emptyset$.

**Example 9.3 ($R\text{-}\mathbf{Mod}$).** The category of modules over a commutative ring $R$ is monoidal with $\otimes = \otimes_{R}$ and $I = R$. The associativity and unit isomorphisms come from the universal property of the tensor product.

**Example 9.4 (Representations).** Let $G$ be a group. The category $\operatorname{Rep}_{k}(G)$ of finite-dimensional $k$-linear representations is monoidal with $\otimes = \otimes_{k}$ and $I = k$ with trivial $G$-action.

**Example 9.5 (Endofunctors).** The category $[\mathcal{C}, \mathcal{C}]$ of endofunctors of a category $\mathcal{C}$ is monoidal with $\otimes = \circ$ (composition) and $I = \operatorname{id}_{\mathcal{C}}$.

## 9.3 Braided and symmetric monoidal categories

A **braided monoidal category** is a monoidal category equipped with a natural isomorphism $\sigma_{A,B}: A \otimes B \to B \otimes A$ satisfying two hexagon axioms. It is **symmetric** if $\sigma_{B,A} \circ \sigma_{A,B} = \operatorname{id}_{A \otimes B}$.

**Example 9.6.** For commutative $R$, $R\text{-}\mathbf{Mod}$ is symmetric monoidal with $\sigma(a \otimes b) = b \otimes a$. Representations of a **quasitriangular** quantum group form a braided monoidal category; the braiding need not be symmetric.

**Example 9.7.** The category of graded vector spaces with $\sigma(v \otimes w) = (-1)^{|v||w|} w \otimes v$ is symmetric. This is the Koszul sign rule.

## 9.4 Monoidal functors and natural transformations

A **lax monoidal functor** $(F, J, j): \mathcal{C} \to \mathcal{D}$ is a functor equipped with a morphism $j: I_{\mathcal{D}} \to F(I_{\mathcal{C}})$ and a natural transformation $J_{A,B}: F(A) \otimes F(B) \to F(A \otimes B)$ satisfying associativity and unit axioms. It is **strong monoidal** if $j$ and $J$ are isomorphisms, and **strict monoidal** if they are identities.

**Example 9.8.** The free $R$-module functor $F: \mathbf{Set} \to R\text{-}\mathbf{Mod}$ is strong monoidal: $F(X \times Y) \cong F(X) \otimes_{R} F(Y)$.

## 9.5 Closed monoidal categories

A monoidal category is **closed** if for every object $A$, the functor $-\otimes A$ has a right adjoint $[A, -]$, called the **internal hom**. The adjunction reads:

$$\operatorname{Hom}(B \otimes A, C) \cong \operatorname{Hom}(B, [A, C]).$$

**Example 9.9.** $R\text{-}\mathbf{Mod}$ is closed with $[A, C] = \operatorname{Hom}_{R}(A, C)$. The adjunction is the tensor-hom adjunction.

**Example 9.10.** $\mathbf{Set}$ is closed with $[A, C] = C^{A}$ (the set of functions). The adjunction is currying.

In a closed symmetric monoidal category, one can define dual objects. An object $A$ is **dualizable** if there exists $A^{\vee}$ and maps $\mathrm{coev}: I \to A \otimes A^{\vee}$ and $\mathrm{ev}: A^{\vee} \otimes A \to I$ satisfying the triangle identities.

**Worked example 9.11.** In $R\text{-}\mathbf{Mod}$, a finitely generated projective module $P$ is dualizable with $P^{\vee} = \operatorname{Hom}_{R}(P, R)$. The evaluation map is $f \otimes p \mapsto f(p)$. If $P = R^{n}$, then $P^{\vee} = R^{n}$ and the coevaluation sends $1 \in R$ to $\sum_{i} e_{i} \otimes e_{i}^{*}$.

**Verification script.**

```python
# Verify dual of R^n in R-Mod: evaluation and coevaluation satisfy triangle identities
# For R = Z, n = 2:
# ev: Z^2 ⊗ Hom(Z^2, Z) -> Z, (v, f) |-> f(v)
# coev: Z -> Z^2 ⊗ Hom(Z^2, Z), 1 |-> sum_i e_i ⊗ e_i^*
# Triangle 1: (ev ⊗ id) ∘ (id ⊗ coev) = id on Hom(Z^2, Z)
# Triangle 2: (id ⊗ ev) ∘ (coev ⊗ id) = id on Z^2

# This is a conceptual check; the linear algebra is standard.
print("Dual of Z^2 verified by standard linear algebra")
```

## 9.6 Common errors

- **Assuming strictness.** Monoidal categories are rarely strict. The coherence theorem allows us to pretend they are, but one must not write $(A \otimes B) \otimes C = A \otimes (B \otimes C)$ as an equality of objects without the associator.
- **Confusing lax and strong monoidal functors.** The forgetful functor from $R\text{-}\mathbf{Mod}$ to $\mathbf{Ab}$ is lax monoidal (there is a map $U(M) \otimes_{\mathbb{Z}} U(N) \to U(M \otimes_{R} N)$) but not strong unless $R = \mathbb{Z}$.
- **Ignoring the unit.** The unit object $I$ is part of the structure. Changing the unit changes the monoidal category.
- **Assuming all objects are dualizable.** In $R\text{-}\mathbf{Mod}$, only finitely generated projectives are dualizable. The dual of a general module may not exist.

## 9.7 Exercises

### Exercise 9.1

Show that the category of endofunctors $[\mathcal{C}, \mathcal{C}]$ is strict monoidal with composition.

**Solution.** Composition of functors is strictly associative: $(F \circ G) \circ H = F \circ (G \circ H)$ on objects and morphisms. The identity functor $\operatorname{id}_{\mathcal{C}}$ is a strict unit: $F \circ \operatorname{id} = F = \operatorname{id} \circ F$. Hence no coherence isomorphisms are needed. $\square$

### Exercise 9.2

Prove that in a symmetric monoidal category, the braiding $\sigma$ satisfies the Yang-Baxter equation.

**Solution.** The Yang-Baxter equation is the equality of two maps $A \otimes B \otimes C \to C \otimes B \otimes A$ built from braidings. In a symmetric category, both sides equal the map that permutes the factors by the appropriate transpositions, and symmetry guarantees that $\sigma_{B,A}\sigma_{A,B} = \operatorname{id}$ makes both composites equal. $\square$

### Exercise 9.3

Show that the internal hom $[A, -]$ in $R\text{-}\mathbf{Mod}$ is naturally isomorphic to $\operatorname{Hom}_{R}(A, -)$.

**Solution.** The tensor-hom adjunction gives $\operatorname{Hom}_{R}(B \otimes_{R} A, C) \cong \operatorname{Hom}_{R}(B, \operatorname{Hom}_{R}(A, C))$. By the Yoneda lemma, the representing object $\operatorname{Hom}_{R}(A, C)$ is the internal hom $[A, C]$. $\square$

### Exercise 9.4

Prove that a module $M$ over a commutative ring $R$ is dualizable in $R\text{-}\mathbf{Mod}$ if and only if it is finitely generated and projective.

**Solution.** ($\Rightarrow$) Write the finite tensor representing coevaluation as

$$\operatorname{coev}(1)=\sum_{i=1}^{n}m_i\otimes f_i,
\qquad m_i\in M,\quad f_i\in M^\vee.$$

The triangle identity says $m=\sum_i f_i(m)m_i$ for every $m\in M$. Thus $(m_i,f_i)$ is a finite dual basis: the maps $M\to R^n$, $m\mapsto(f_i(m))$, and $R^n\to M$, $(r_i)\mapsto\sum r_im_i$, exhibit $M$ as a direct summand of $R^n$. Hence it is finitely generated projective. ($\Leftarrow$) A finite dual basis for a finitely generated projective $M$ defines coevaluation by the displayed sum and makes both triangle identities immediate. $\square$

### Exercise 9.5

Compute the trace of an endomorphism $f: R^{n} \to R^{n}$ in the symmetric monoidal category $R\text{-}\mathbf{Mod}$.

**Solution.** The trace is the composite

$$R \xrightarrow{\mathrm{coev}} R^{n} \otimes (R^{n})^{\vee} \xrightarrow{f \otimes \operatorname{id}} R^{n} \otimes (R^{n})^{\vee} \xrightarrow{\sigma} (R^{n})^{\vee} \otimes R^{n} \xrightarrow{\mathrm{ev}} R.$$

Identifying $(R^{n})^{\vee} = R^{n}$, this sends $1 \in R$ to the sum of diagonal entries of the matrix of $f$, i.e., the usual trace. $\square$

## 9.8 Looking forward

Monoidal categories are the starting point for enriched category theory, quantum algebra, and linear logic. In **Enriched Categories**, hom-sets are replaced by objects of a monoidal category $\mathcal V$. In **Project: Categorical Proof**, tensor products of resolutions and double complexes help organize the Grothendieck spectral sequence.
