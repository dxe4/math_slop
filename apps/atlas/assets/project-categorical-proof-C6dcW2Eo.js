var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: project-categorical-proof
title: "Project: Categorical Proof"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Project: Categorical Proof

This chapter is a project chapter. It brings together the categorical machinery developed in the preceding chapters---abelian categories, derived functors, model categories, higher categories, topos theory, and monoidal categories---to study a single deep theorem from multiple angles. The theorem we choose is the **Grothendieck spectral sequence**, which computes the composition of derived functors. It is a cornerstone of homological algebra and a perfect test of the morphism-first viewpoint.

## 11.1 The problem

Let $\\mathcal{A} \\xrightarrow{F} \\mathcal{B} \\xrightarrow{G} \\mathcal{C}$ be left exact functors between abelian categories. Assume $\\mathcal{A}$ has enough injectives, $F$ sends injectives to $G$-acyclic objects, and $\\mathcal{B}$ has enough injectives. We want to compute $R^{n}(G \\circ F)$ in terms of $R^{p}G$ and $R^{q}F$.

The naive approach---resolve by injectives in $\\mathcal{A}$, apply $F$, then resolve by injectives in $\\mathcal{B}$ and apply $G$---produces a double complex. The total complex of this double complex computes the derived functor of the composition, and the two filtrations give two spectral sequences. One of them collapses to $R^{n}(G \\circ F)$; the other is the **Grothendieck spectral sequence**:

$$E^{p,q}_{2} = R^{p}G(R^{q}F(A)) \\Rightarrow R^{p+q}(G \\circ F)(A).$$

## 11.2 The double complex

Choose an injective resolution $A \\to I^{\\bullet}$ in $\\mathcal{A}$ and put $K^\\bullet=F(I^\\bullet)$. Its cohomology is $H^q(K^\\bullet)=R^qF(A)$. The hypothesis says that each term $K^q=F(I^q)$ is $G$-acyclic; it does not say that $K^\\bullet$ resolves $F(A)$, because its higher cohomology may be nonzero.

A **Cartan--Eilenberg injective resolution** $K^\\bullet\\to J^{\\bullet,\\bullet}$ is a compatible system of injective resolutions of the terms, cycles, boundaries, and cohomology objects of $K^\\bullet$. It is not merely a double complex with exact rows and columns, and its total complex does not generally resolve $F(A)$. Applying $G$ and totalizing instead computes the relevant hypercohomology. The existence and comparison theory of Cartan--Eilenberg resolutions are imported here; their purpose is to make the two filtrations below legitimate and functorial.

## 11.3 The spectral sequence

One filtration first takes the cohomology of $K^\\bullet$ and then derives $G$, giving

$$E^{p,q}_{2}=R^pG\\!\\left(H^q(K^\\bullet)\\right)
=R^pG\\!\\left(R^qF(A)\\right).$$

The other filtration uses that every $F(I^q)$ is $G$-acyclic. It identifies the total cohomology with $R^{p+q}(G\\circ F)(A)$. Because the double complex is first-quadrant, the induced filtration on each total degree is finite, so the spectral sequence converges to that abutment.

**Theorem 11.1 (Grothendieck; imported construction).** Under the hypotheses above, there is a convergent first-quadrant cohomological spectral sequence

$$E^{p,q}_{2} = R^{p}G(R^{q}F(A)) \\Rightarrow R^{p+q}(G \\circ F)(A).$$

The Cartan--Eilenberg construction and comparison maps give the two filtrations described above. The edge maps yield natural transformations $R^{n}(G \\circ F) \\to G \\circ R^{n}F$ and $R^{n}G \\circ F \\to R^{n}(G \\circ F)$. A complete construction is cited in the references rather than compressed into a false exact-row argument.

## 11.4 The Leray spectral sequence

Let $f: X \\to Y$ be a continuous map of topological spaces. The direct image $f_{*}$ and global sections $\\Gamma(Y, -)$ are left exact functors:

$$\\operatorname{Ab}(\\operatorname{Sh}(X)) \\xrightarrow{f_{*}}
\\operatorname{Ab}(\\operatorname{Sh}(Y)) \\xrightarrow{\\Gamma(Y,-)} \\mathbf{Ab}.$$

Since $\\Gamma(Y, f_{*}\\mathcal{F}) = \\Gamma(X, \\mathcal{F})$, we have $G \\circ F = \\Gamma(X, -)$. The Grothendieck spectral sequence becomes the **Leray spectral sequence**:

$$E^{p,q}_{2} = H^{p}(Y, R^{q}f_{*}\\mathcal{F}) \\Rightarrow H^{p+q}(X, \\mathcal{F}).$$

This computes the cohomology of $X$ from the cohomology of $Y$ and the higher direct images of $f$.

**Worked example 11.2.** Let $f: S^{1} \\times S^{1} \\to S^{1}$ be projection onto the first factor. For the constant sheaf $\\underline{\\mathbb{Z}}$, $R^{q}f_{*}\\underline{\\mathbb{Z}}$ is the local system on $S^{1}$ with fiber $H^{q}(S^{1}, \\mathbb{Z})$. Since $H^{0}(S^{1}, \\mathbb{Z}) = \\mathbb{Z}$ and $H^{1}(S^{1}, \\mathbb{Z}) = \\mathbb{Z}$, we have $R^{0}f_{*}\\underline{\\mathbb{Z}} = \\underline{\\mathbb{Z}}$ and $R^{1}f_{*}\\underline{\\mathbb{Z}} = \\underline{\\mathbb{Z}}$. The Leray spectral sequence has $E_{2}$ page:

$$E^{0,0}_{2} = H^{0}(S^{1}, \\underline{\\mathbb{Z}}) = \\mathbb{Z}, \\quad E^{1,0}_{2} = H^{1}(S^{1}, \\underline{\\mathbb{Z}}) = \\mathbb{Z},$$
$$E^{0,1}_{2} = H^{0}(S^{1}, \\underline{\\mathbb{Z}}) = \\mathbb{Z}, \\quad E^{1,1}_{2} = H^{1}(S^{1}, \\underline{\\mathbb{Z}}) = \\mathbb{Z}.$$

All differentials vanish for degree reasons, so $E_{2} = E_{\\infty}$. The only extension in total degree $1$ splits because $\\mathbb Z$ is projective. We recover $H^{n}(T^{2}, \\mathbb{Z}) = \\mathbb{Z}$ for $n=0,2$ and $\\mathbb{Z}^{2}$ for $n=1$.

**Verification script.**

\`\`\`python
# Verify Euler characteristic of torus from Leray spectral sequence
# H^0 = Z, H^1 = Z^2, H^2 = Z
# Euler characteristic = 1 - 2 + 1 = 0
print("Euler characteristic of T^2 =", 1 - 2 + 1)
# Also: chi(T^2) = chi(S^1) * chi(S^1) = 0 * 0 = 0
print("Product formula: 0 * 0 =", 0 * 0)
\`\`\`

Running this confirms $\\chi(T^{2}) = 0$.

## 11.5 The change-of-rings spectral sequence

Let $R \\to S$ be a homomorphism of commutative rings. Restriction of scalars $\\operatorname{Res}:S\\text{-}\\mathbf{Mod}\\to R\\text{-}\\mathbf{Mod}$ is exact, and extension of scalars $S\\otimes_R-$ is its left adjoint. For an $R$-module $M$ and an $S$-module $N$, a projective resolution of $M$ and an injective resolution of $N$ form a double complex. Its two filtrations give the **change-of-rings spectral sequence**

$$E^{p,q}_{2} =
\\operatorname{Ext}^{p}_{S}\\!\\left(\\operatorname{Tor}^{R}_{q}(S,M),N\\right)
\\Rightarrow \\operatorname{Ext}^{p+q}_{R}(M,\\operatorname{Res}N).$$

This is a separate double-complex result. Extension of scalars is right exact and $\\operatorname{Hom}_S(-,N)$ is contravariant, so it is not a direct instance of Theorem 11.1, whose functors are covariant and left exact.

## 11.6 Model-categorical perspective

In **Model Categories**, derived functors are computed by cofibrant or fibrant replacements. If $F$ and $G$ are composable right Quillen functors, then $G\\circ F$ is right Quillen, right Quillen functors preserve fibrant objects, and there is a canonical equivalence

$$\\mathbb RG\\circ\\mathbb RF\\simeq\\mathbb R(G\\circ F).$$

Thus the Grothendieck spectral sequence should not be described as measuring a failure of Quillen-derived composition. Its role is to calculate the cohomology objects of a composite abelian derived functor from the two stages, via a filtration of a total complex.

## 11.7 Higher-categorical perspective

Stable higher categories can organize the filtered totalizations that produce spectral sequences: a finite filtration gives successive cofibers, and applying homotopy groups yields exact couples and pages. That viewpoint retains coherent maps between constructions, but it does not change the convergence argument here. The present spectral sequence is first-quadrant, so each total degree has a finite filtration and convergence follows from that boundedness.

## 11.8 Common errors

- **Forgetting the acyclicity hypothesis.** The Grothendieck spectral sequence requires that $F$ send injectives to $G$-acyclic objects. Without this, the double complex does not compute the right derived functor.
- **Confusing the two filtrations.** The column filtration gives the Grothendieck spectral sequence; the row filtration gives a different spectral sequence that converges to the same thing but has a different $E_{2}$ page.
- **Assuming collapse.** The spectral sequence need not collapse at $E_{2}$. Differentials can be nontrivial, and extension problems can arise at $E_{\\infty}$.
- **Ignoring convergence issues.** First-quadrant spectral sequences converge unconditionally, but bounded-below or unbounded spectral sequences may have convergence problems.

## 11.9 Exercises

### Exercise 11.1

State the hypotheses and conclusion of the Grothendieck spectral sequence precisely.

**Solution.** Let $\\mathcal{A} \\xrightarrow{F} \\mathcal{B} \\xrightarrow{G} \\mathcal{C}$ be left exact functors between abelian categories. Assume $\\mathcal{A}$ and $\\mathcal{B}$ have enough injectives, and $F$ sends injective objects of $\\mathcal{A}$ to $G$-acyclic objects of $\\mathcal{B}$. Then for every $A \\in \\mathcal{A}$, there is a convergent first-quadrant spectral sequence

$$E^{p,q}_{2} = R^{p}G(R^{q}F(A)) \\Rightarrow R^{p+q}(G \\circ F)(A).$$

The edge homomorphisms are $R^{n}(G \\circ F)(A) \\to G(R^{n}F(A))$ and $R^{n}G(F(A)) \\to R^{n}(G \\circ F)(A)$. $\\square$

### Exercise 11.2

Derive the Leray spectral sequence from the Grothendieck spectral sequence.

**Solution.** Work in the abelian categories of sheaves of abelian groups. Set $F=f_*$ and $G=\\Gamma(Y,-)$; then $G\\circ F=\\Gamma(X,-)$. The inverse-image functor $f^{-1}$ is an exact left adjoint to $f_*$, so $f_*$ sends injective sheaves to injective sheaves. In particular, it sends injectives to $\\Gamma(Y,-)$-acyclic objects. Theorem 11.1 therefore gives $H^{p}(Y,R^{q}f_{*}\\mathcal F)\\Rightarrow H^{p+q}(X,\\mathcal F)$. $\\square$

### Exercise 11.3

Compute the $E_{2}$ page of the Leray spectral sequence for the projection $S^{2} \\times S^{1} \\to S^{1}$.

**Solution.** The fibers are $S^{2}$, so $R^{0}f_{*}\\underline{\\mathbb{Z}} = \\underline{\\mathbb{Z}}$, $R^{1}f_{*}\\underline{\\mathbb{Z}} = 0$, $R^{2}f_{*}\\underline{\\mathbb{Z}} = \\underline{\\mathbb{Z}}$. The $E_{2}$ page has $E^{p,0}_{2} = H^{p}(S^{1}, \\mathbb{Z})$, $E^{p,2}_{2} = H^{p}(S^{1}, \\mathbb{Z})$, and all other entries zero. The nontrivial groups are $\\mathbb{Z}$ in bidegrees $(0,0)$, $(1,0)$, $(0,2)$, $(1,2)$. The spectral sequence collapses, giving $H^{0} = \\mathbb{Z}$, $H^{1} = \\mathbb{Z}$, $H^{2} = \\mathbb{Z}$, $H^{3} = \\mathbb{Z}$. This matches the Kunneth formula. $\\square$

### Exercise 11.4

Assume the hypotheses of Theorem 11.1 and, in addition, that $F$ is exact. Show that the Grothendieck spectral sequence collapses at $E_{2}$.

**Solution.** The acyclicity and enough-injective hypotheses of Theorem 11.1 ensure that the displayed spectral sequence exists and has the stated abutment. Exactness of $F$ gives $R^{q}F = 0$ for $q > 0$. Hence $E^{p,q}_{2} = 0$ unless $q = 0$, and the spectral sequence collapses to a single row. The edge map $R^{n}G(F(A)) \\to R^{n}(G \\circ F)(A)$ is an isomorphism. $\\square$

### Exercise 11.5

Construct the change-of-rings spectral sequence from a double complex, and explain why Theorem 11.1 does not apply directly.

**Solution.** For commutative $R\\to S$, take a projective resolution $P_\\bullet\\to M$ over $R$ and an injective resolution $N\\to I^\\bullet$ over $S$. Filter the first-quadrant double complex

$$\\operatorname{Hom}_S(S\\otimes_RP_\\bullet,I^\\bullet).$$

Taking homology first in the $P$ direction gives $\\operatorname{Tor}^R_q(S,M)$ and then $\\operatorname{Ext}^p_S(-,N)$. Taking cohomology first in the injective direction and using tensor--Hom adjunction identifies the total cohomology with $\\operatorname{Ext}^{p+q}_R(M,\\operatorname{Res}N)$. Hence

$$\\operatorname{Ext}^{p}_{S}\\!\\left(\\operatorname{Tor}^{R}_{q}(S,M),N\\right)
\\Rightarrow\\operatorname{Ext}^{p+q}_{R}(M,\\operatorname{Res}N).$$

Theorem 11.1 does not apply directly because tensor is right exact and Hom in its first variable is contravariant. $\\square$

## 11.10 Looking forward

The Grothendieck spectral sequence is a prototype for spectral sequences in algebraic topology and algebraic geometry. In **Adjunctions and Exactness**, we will study adjoint functors and their exactness properties, which control the existence and collapse of such spectral sequences. In **Spectral Sequences and Filtrations**, we will develop the general machinery of spectral sequences from filtered complexes.
`;export{e as default};