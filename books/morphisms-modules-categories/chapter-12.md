
# Adjunctions and Exactness

In the earlier Euler sequence and in **Project: Categorical Proof**, adjunctions appeared as the organizing principle behind free objects, tensor-hom relationships, and derived functors. This chapter studies adjunctions systematically, with emphasis on their interaction with exactness in abelian categories. The central question is: when does a left or right adjoint preserve exactness, and what obstructions arise when it does not?

## 12.1 Adjunctions recalled

An **adjunction** $F \dashv G$ between categories $\mathcal{C}$ and $\mathcal{D}$ consists of functors $F: \mathcal{C} \to \mathcal{D}$ and $G: \mathcal{D} \to \mathcal{C}$ together with a natural isomorphism

$$\operatorname{Hom}_{\mathcal{D}}(F(X), Y) \cong \operatorname{Hom}_{\mathcal{C}}(X, G(Y))$$

for all $X \in \mathcal{C}$ and $Y \in \mathcal{D}$. The morphism $\eta_{X}: X \to G(F(X))$ corresponding to $\operatorname{id}_{F(X)}$ is the **unit**; the morphism $\varepsilon_{Y}: F(G(Y)) \to Y$ corresponding to $\operatorname{id}_{G(Y)}$ is the **counit**.

**Example 12.1 (Free-forgetful).** The free $R$-module functor $F: \mathbf{Set} \to R\text{-}\mathbf{Mod}$ is left adjoint to the forgetful functor $U: R\text{-}\mathbf{Mod} \to \mathbf{Set}$. The unit sends an element to the corresponding basis element; the counit evaluates a formal linear combination.

**Example 12.2 (Tensor--Hom).** If $R$ is commutative and $M$ is an $R$-module, the endofunctor $M \otimes_{R} -$ on $R\text{-}\mathbf{Mod}$ is left adjoint to $\operatorname{Hom}_{R}(M, -)$. For noncommutative rings, the module sides and resulting Hom module must be specified separately.

**Example 12.3 (Restriction--extension).** For a ring homomorphism $\varphi: R \to S$, extension of scalars on left modules, $S\otimes_R-$, is left adjoint to restriction of scalars $\operatorname{Res}_{R}^{S}$.

## 12.2 Exactness of adjoints

An additive functor between abelian categories is **left exact** if it preserves finite limits, equivalently kernels, and **right exact** if it preserves finite colimits, equivalently cokernels. It is **exact** if it is both left and right exact. Additivity is needed for the kernel/cokernel equivalences.

**Proposition 12.4.** A left adjoint between abelian categories is right exact. A right adjoint is left exact.

*Proof sketch.* Left adjoints preserve all colimits, hence cokernels. Right adjoints preserve all limits, hence kernels. $\square$

**Corollary 12.5.** For commutative $R$, the tensor functor $M \otimes_{R} -$ is right exact and $\operatorname{Hom}_{R}(M, -)$ is left exact. Separately, the free-module functor $\mathbf{Set}\to R\text{-}\mathbf{Mod}$ preserves all colimits and the forgetful functor preserves all limits; “right exact” and “left exact” in the abelian sense do not apply to a functor whose source or target is $\mathbf{Set}$.

The failure of exactness is measured by derived functors, as studied in **Derived Categories**.

## 12.3 Preservation of injectives and projectives

**Proposition 12.6.** Let $F \dashv G$ be an adjunction between abelian categories. If $F$ is exact, then $G$ preserves injectives. If $G$ is exact, then $F$ preserves projectives.

*Proof sketch.* Suppose $F$ is exact and $I$ is injective. To show $G(I)$ is injective, we must show $\operatorname{Hom}(-, G(I))$ is exact. By adjunction, this is $\operatorname{Hom}(F(-), I)$, which is exact because $F$ is exact and $I$ is injective. The projective case is dual. $\square$

This proposition transports injective objects along the right adjoint $G$ and projective objects along the left adjoint $F$. Exactness of $F$ alone does not make the objects $F(I)$ injective; any later use of such images as an acyclic resolution needs a separate $G$-acyclicity hypothesis.

## 12.4 The adjoint functor theorem

When does a functor have a left adjoint? The **General Adjoint Functor Theorem** gives sufficient conditions.

**Theorem 12.7 (Freyd; imported).** Let $G: \mathcal{D} \to \mathcal{C}$ be a functor. Assume $\mathcal{D}$ is complete and locally small, and $G$ preserves small limits. Then $G$ has a left adjoint if and only if it satisfies the **solution set condition**: for every $X \in \mathcal{C}$, there exists a set $S_{X}$ of morphisms $f: X \to G(Y)$ such that every morphism $X \to G(Y')$ factors through some $f \in S_{X}$ via a morphism $Y \to Y'$.

The proof constructs an initial object in each comma category $(X\downarrow G)$ from a weakly initial set and completeness. The required equalizer/product construction and size bookkeeping are imported from the references.

The exact source is Mac Lane, *Categories for the Working Mathematician*, Chapter V, Section 6, Theorem 2, pp. 121--122.

**Example 12.8.** The forgetful functor $U: \mathbf{Grp} \to \mathbf{Set}$ preserves limits and satisfies the solution set condition (every map from a set $X$ to a group factors through the free group on $X$). Hence it has a left adjoint, the free group functor.

## 12.5 Monadicity and comonadicity

An adjunction $F \dashv G$ induces a **monad** $T = G \circ F$ on $\mathcal{C}$ and a **comonad** $C = F \circ G$ on $\mathcal{D}$. The Eilenberg-Moore category $\mathcal{C}^{T}$ is the category of algebras for the monad. There is a natural comparison functor $K: \mathcal{D} \to \mathcal{C}^{T}$.

**Theorem 12.9 (Beck's monadicity theorem; imported form).** The comparison functor $K$ is an equivalence if $G$ is conservative and $\mathcal D$ has coequalizers of $G$-split pairs that $G$ preserves. Conversely, a monadic right adjoint has these properties; an equivalent common formulation says that $G$ creates the relevant coequalizers.

A coequalizer $q:B\to Q$ of $u,v:A\rightrightarrows B$ is **split** when there are maps $s:Q\to B$ and $t:B\to A$ with $qs=\operatorname{id}_Q$, $ut=\operatorname{id}_B$, and $vt=sq$ (up to swapping the names of $u,v$). A pair is $G$-split when its image admits such data. The reconstruction of a $T$-algebra from this coequalizer is the substantive imported proof.

Mac Lane, Chapter VI, Section 7, Theorem 1, pp. 151--154, gives the stricter isomorphism/created-coequalizer form. Exercise 6, p. 155, gives the up-to-equivalence version stated here.

**Example 12.10.** The forgetful functor $U: R\text{-}\mathbf{Mod} \to \mathbf{Ab}$ is monadic. For left modules the monad is $R\otimes_{\mathbb{Z}}-$, and its Eilenberg--Moore category is $R\text{-}\mathbf{Mod}$.

## 12.6 Common errors

- **Assuming left adjoints preserve limits.** Left adjoints preserve colimits, not limits. The free group functor does not preserve products: $F(X \times Y) \not\cong F(X) \times F(Y)$.
- **Confusing exactness directions.** A left adjoint is right exact; a right adjoint is left exact. The names refer to the side of the adjunction, not the exactness property.
- **Checking only the solution set condition.** Freyd's theorem also requires a complete, locally small source for the proposed right adjoint and preservation of all small limits. The category of finitely generated abelian groups is essentially small and satisfies the relevant solution-set size condition, but it is not complete because infinite products usually leave the category.
- **Forgetting that derived functors need resolutions.** Even if $F$ is left exact, $R^{1}F$ may be nonzero. One must always resolve before deriving.

## 12.7 Exercises

### Exercise 12.1

For commutative $R$, prove that the tensor--Hom adjunction $M \otimes_{R} - \dashv \operatorname{Hom}_{R}(M, -)$ is contravariantly natural in $M$.

**Solution.** Let $f:M\to M'$ and $g:M'\otimes_RN\to P$. Currying sends $g$ to $\widetilde g:N\to\operatorname{Hom}_R(M',P)$. Both routes around the naturality square send $n\in N$ to the function

$$m\longmapsto g(f(m)\otimes n).$$

Equivalently,

$$\operatorname{curry}\!\left(g\circ(f\otimes\operatorname{id}_N)\right)
=\operatorname{Hom}_R(f,P)\circ\operatorname{curry}(g).$$

This is the required contravariant naturality in $M$. $\square$

### Exercise 12.2

Show that if $F\dashv G$, $F$ is exact, and $F$ sends injective objects to $G$-acyclic objects, then $R^{n}(G \circ F) \cong R^{n}G \circ F$.

**Solution.** If $A\to I^\bullet$ is an injective resolution, exactness makes $F(A)\to F(I^\bullet)$ an exact resolution. Its terms are $G$-acyclic by hypothesis, so the acyclic-resolution theorem computes

$$R^nG(F(A))=H^n(G(F(I^\bullet)))=R^n(G\circ F)(A).$$

The acyclicity hypothesis is essential. Let $A=k[\varepsilon]/(\varepsilon^2)$, let $F:k\text{-}\mathbf{Vect}\to A\text{-}\mathbf{Mod}$ give a vector space the trivial $\varepsilon$-action, and let $G=\operatorname{Hom}_A(k,-)$. Then $F\dashv G$, $F$ is exact, and $GF$ is the identity, but $R^1G(Fk)=\operatorname{Ext}^1_A(k,k)\cong k$ whereas $R^1(GF)(k)=0$. $\square$

### Exercise 12.3

Prove that the forgetful functor $U: \mathbf{Grp} \to \mathbf{Set}$ satisfies the solution set condition.

**Solution.** For a set $X$, consider the set $S_{X}$ of all maps $f: X \to U(G)$ where $G$ is a quotient of the free group $F(X)$. Every map $g: X \to U(H)$ factors through $F(X) \to H$, and the image of $F(X)$ in $H$ is a quotient of $F(X)$. Hence $g$ factors through some $f \in S_{X}$. Since there is only a set of quotients of $F(X)$, $S_{X}$ is a set. $\square$

### Exercise 12.4

Show that the inclusion of finitely generated abelian groups into all abelian groups does not have a left adjoint.

**Solution.** Let $i:\mathbf{fgAb}\hookrightarrow\mathbf{Ab}$ and suppose $L\dashv i$. For $X=\mathbb Z^{(\mathbb N)}$, adjunction with the target $\mathbb Z$ would give

$$\operatorname{Hom}_{\mathbf{fgAb}}(LX,\mathbb Z)
\cong\operatorname{Hom}_{\mathbf{Ab}}(X,\mathbb Z)
\cong\mathbb Z^{\mathbb N}.$$

The group on the left is finitely generated because $LX$ is a finitely generated abelian group; the product $\mathbb Z^{\mathbb N}$ on the right is not. This contradiction proves that no left adjoint exists. The failure is not the solution-set condition: $\mathbf{fgAb}$ is essentially small. It also fails the completeness hypothesis of Freyd's theorem. $\square$

### Exercise 12.5

Let $F \dashv G$ be an adjunction between abelian categories. Show that $F$ is faithful if and only if the unit $\eta$ is monic.

**Solution.** ($\Rightarrow$) If $F$ is faithful and $\eta_{X}: X \to G(F(X))$ has $\eta_{X} \circ f = \eta_{X} \circ g$, then $F(f) = F(g)$ by the adjunction identity, so $f = g$. ($\Leftarrow$) If $\eta$ is monic and $F(f) = F(g)$, then $\eta_{Y} \circ f = G(F(f)) \circ \eta_{X} = G(F(g)) \circ \eta_{X} = \eta_{Y} \circ g$, so $f = g$. $\square$

## 12.8 Looking forward

Adjunctions are the lens through which exactness is best understood. In **Spectral Sequences and Filtrations**, we will see how adjunctions between filtered categories give rise to spectral sequences. In **Homological Dimension**, the exactness properties of adjoints will control the vanishing of derived functors and the global dimension of rings.
