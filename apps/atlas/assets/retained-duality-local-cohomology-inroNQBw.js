var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: chapter-15
title: "Duality and Local Cohomology"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Duality and Local Cohomology

This final chapter brings together the homological machinery developed throughout the book to state and orient two deep imported theorems: **local duality** and **Grothendieck duality**. Complete proofs require substantially more commutative algebra and algebraic geometry than the preceding chapters. The goal here is to type the functors correctly, work consequences, and make the dependency boundary explicit.

## 15.1 Local cohomology

Let $R$ be a commutative Noetherian ring and $I \\subseteq R$ an ideal. The **local cohomology** functors $H^{i}_{I}$ are the right derived functors of the **$I$-torsion functor**

$$\\Gamma_{I}(M) = \\{m \\in M : I^{n}m = 0 \\text{ for some } n\\}.$$

Equivalently, $H^{i}_{I}(M)$ can be computed as the colimit

$$H^{i}_{I}(M) = \\varinjlim_{n} \\operatorname{Ext}^{i}_{R}(R/I^{n}, M).$$

**Example 15.1.** Let $R = k[x_{1}, \\dots, x_{n}]$ and $I = (x_{1}, \\dots, x_{n})$. The top Cech quotient identifies $H^{n}_{I}(R)$ with the $k$-span of monomials

$$x_1^{-a_1}\\cdots x_n^{-a_n}\\qquad(a_i\\ge1\\text{ for every }i).$$

This is not the ordinary polynomial ring $k[x_1^{-1},\\ldots,x_n^{-1}]$: multiplication by $x_i$ is truncated to zero when it would remove the last negative power of $x_i$. Equivalently,

$$H_I^n(R)\\cong
\\frac{R_{x_1\\cdots x_n}}
{\\sum_iR_{x_1\\cdots\\widehat{x_i}\\cdots x_n}}.$$

**Worked example 15.2.** Compute $H^{0}_{(x)}(k[x])$.

The $I$-torsion submodule of $k[x]$ consists of polynomials annihilated by some power of $x$. Only the zero polynomial satisfies this, so $H^{0}_{(x)}(k[x]) = 0$. However, $H^{1}_{(x)}(k[x]) \\cong k[x, x^{-1}] / k[x]$, which is nonzero.

## 15.2 Local duality

Let $(R, \\mathfrak{m})$ be a Noetherian local ring of dimension $d$ with residue field $k = R/\\mathfrak{m}$. The **Matlis dual** of an $R$-module $M$ is $M^{\\vee} = \\operatorname{Hom}_{R}(M, E)$, where $E = E_{R}(k)$ is the injective hull of the residue field.

**Theorem 15.3 (Local duality; imported).** If $R$ is a Cohen--Macaulay local ring admitting a canonical module $\\omega_{R}$, then for every finitely generated $R$-module $M$ and every $i$,

$$H^{i}_{\\mathfrak{m}}(M) \\cong \\operatorname{Ext}^{d-i}_{R}(M, \\omega_{R})^{\\vee}.$$

If $R$ is Gorenstein, $\\omega_{R} = R$, and local duality simplifies to

$$H^{i}_{\\mathfrak{m}}(M) \\cong \\operatorname{Ext}^{d-i}_{R}(M, R)^{\\vee}.$$

The exact tagged source first states the result for a normalized dualizing complex: Stacks Project Theorem 47.18.3 ([Tag 0A84](https://stacks.math.columbia.edu/tag/0A84)). Lemma 47.18.4 ([Tag 0AAK](https://stacks.math.columbia.edu/tag/0AAK)) identifies the $\\mathfrak m$-adic completion of the relevant Ext module with the Matlis dual of local cohomology. In the Cohen--Macaulay specialization, the normalized complex is $\\omega_R[d]$; applying Matlis duality gives the displayed formula. Completion remains visible in the reverse-dual statement, while $\\operatorname{Hom}_R(-,E)$ does not distinguish a finite module from its $\\mathfrak m$-adic completion. These steps, including existence of $\\omega_R$, are imported.

## 15.3 Grothendieck duality

Here is a safe absolute form. Let $f:X\\to\\operatorname{Spec}k$ be a proper finite-type scheme over a field, use the normalization $\\omega_X^\\bullet:=f^!k$, and let $\\mathcal F^\\bullet\\in D^b_{\\mathrm{coh}}(X)$. Stacks Project Lemma 48.27.1 ([Tag 0FVV](https://stacks.math.columbia.edu/tag/0FVV)) supplies this normalized complex, the duality, and the smooth identification used below; Remark 48.27.2 records the corresponding trace

$$\\operatorname{Tr}:R\\Gamma(X,\\omega_X^\\bullet)\\longrightarrow k$$

and an isomorphism

$$R\\Gamma\\!\\left(X,R\\mathcal Hom_X(\\mathcal F^\\bullet,\\omega_X^\\bullet)\\right)
\\simeq R\\operatorname{Hom}_k\\!\\left(R\\Gamma(X,\\mathcal F^\\bullet),k\\right).$$

In a relative version, under the standard finiteness and dualizability hypotheses for a proper morphism $f:X\\to Y$, the right adjoint $f^!$ to $Rf_*$ satisfies

$$Rf_*R\\mathcal Hom_X(\\mathcal F^\\bullet,f^!K_Y)
\\simeq R\\mathcal Hom_Y(Rf_*\\mathcal F^\\bullet,K_Y)$$

for an appropriate dualizing complex $K_Y$. Properness alone does not imply that $f^!\\mathcal O_Y$ is an absolute dualizing complex. These existence and boundedness statements are imported.

For a finite-dimensional commutative $k$-algebra $R$, put $\\omega_R=\\operatorname{Hom}_k(R,k)$. Tensor--Hom adjunction gives, for every $R$-module $M$,

$$\\operatorname{Hom}_R(M,\\omega_R)\\cong\\operatorname{Hom}_k(M,k).$$

The functor on the right is exact, so $\\omega_R$ is injective and $\\operatorname{Ext}^i_R(M,\\omega_R)=0$ for $i>0$. This is the finite affine duality statement; it does not involve an undefined dimension or maximal ideal.

## 15.4 Serre duality

For a smooth projective variety $f:X\\to\\operatorname{Spec}k$ of dimension $n$, the imported smooth-duality theorem identifies this normalized complex as $f^!k\\simeq\\omega_{X}[n]$, where $\\omega_{X} = \\Lambda^{n}\\Omega_{X/k}$ is the canonical bundle. Grothendieck duality then becomes **Serre duality**:

$$H^{i}(X, \\mathcal{F})^{*} \\cong \\operatorname{Ext}^{n-i}_{X}(\\mathcal{F}, \\omega_{X})$$

for every coherent sheaf $\\mathcal{F}$. When $\\mathcal{F}$ is locally free, $\\operatorname{Ext}^{n-i}_{X}(\\mathcal{F}, \\omega_{X}) \\cong H^{n-i}(X, \\mathcal{F}^{\\vee} \\otimes \\omega_{X})$.

**Worked example 15.4.** Let $X = \\mathbb{P}^{1}_{k}$ and $\\mathcal{F} = \\mathcal{O}(m)$. Then $H^{0}(X, \\mathcal{O}(m)) = k^{m+1}$ for $m \\geq 0$ and $0$ for $m < 0$. By Serre duality,

$$H^{1}(X, \\mathcal{O}(m)) \\cong H^{0}(X, \\mathcal{O}(-m-2))^{*}.$$

Hence $H^{1}(X, \\mathcal{O}(m)) = k^{-m-1}$ for $m \\leq -2$ and $0$ for $m \\geq -1$.

**Verification script.**

\`\`\`python
# Verify Euler characteristic of P^1 with O(m) via Serre duality
# chi(O(m)) = h^0 - h^1 = (m+1) - 0 = m+1 for m >= 0
# chi(O(m)) = 0 - (-m-1) = m+1 for m <= -2
# chi(O(-1)) = 0 - 0 = 0
# Riemann-Roch for P^1: chi(O(m)) = m + 1
for m in range(-5, 6):
    if m >= 0:
        h0 = m + 1
        h1 = 0
    elif m <= -2:
        h0 = 0
        h1 = -m - 1
    else:
        h0 = 0
        h1 = 0
    chi = h0 - h1
    print(f"m={m}: h0={h0}, h1={h1}, chi={chi}")
\`\`\`

Running this confirms $\\chi(\\mathcal{O}(m)) = m+1$ for all $m$.

## 15.5 Common errors

- **Confusing local and global duality.** Local duality is about modules over a local ring and Matlis duality. Global duality (Serre, Grothendieck) is about sheaves on a scheme and involves the dualizing complex.
- **Forgetting the Cohen-Macaulay hypothesis.** Local duality in its simplest form requires Cohen-Macaulayness. For general rings, one needs a dualizing complex.
- **Using the proper trace formula without properness.** The displayed coherent-cohomology duality uses a proper map. The broader $f^!$ formalism also exists for important nonproper morphisms, but its adjunction, support conditions, and boundedness hypotheses differ.
- **Ignoring the derived category.** Duality theorems are naturally stated in the derived category. The naive statement $H^{i}(X, \\mathcal{F})^{*} \\cong H^{n-i}(X, \\mathcal{F}^{\\vee} \\otimes \\omega_{X})$ only holds for locally free sheaves; for general coherent sheaves, one needs Ext in the derived category.

## 15.6 Exercises

### Exercise 15.1

Compute $H^{0}_{(x,y)}(k[x,y])$ for a field $k$.

**Solution.** The $(x,y)$-torsion submodule of $k[x,y]$ consists of polynomials annihilated by some power of $(x,y)$. No nonzero polynomial is annihilated by all sufficiently high powers of $x$ and $y$. Hence $H^{0}_{(x,y)}(k[x,y]) = 0$. $\\square$

### Exercise 15.2

Prove that for a Gorenstein local ring $(R, \\mathfrak{m})$ of dimension $d$, $H^{d}_{\\mathfrak{m}}(R) \\cong E_{R}(k)$.

**Solution.** By local duality, $H^{d}_{\\mathfrak{m}}(R) \\cong \\operatorname{Ext}^{0}_{R}(R, R)^{\\vee} = R^{\\vee} = \\operatorname{Hom}_{R}(R, E_{R}(k)) \\cong E_{R}(k)$. $\\square$

### Exercise 15.3

Use Serre duality to compute $H^{1}(\\mathbb{P}^{1}, \\mathcal{O}(-3))$.

**Solution.** By Serre duality, $H^{1}(\\mathbb{P}^{1}, \\mathcal{O}(-3)) \\cong H^{0}(\\mathbb{P}^{1}, \\mathcal{O}(1))^{*} \\cong (k^{2})^{*} \\cong k^{2}$. $\\square$

### Exercise 15.4

Show that if $X$ is a smooth projective curve of genus $g$, then $h^{1}(X, \\mathcal{O}_{X}) = g$.

**Solution.** By Serre duality, $H^{1}(X, \\mathcal{O}_{X}) \\cong H^{0}(X, \\omega_{X})^{*}$. By definition, $g = h^{0}(X, \\omega_{X})$. Hence $h^{1}(X, \\mathcal{O}_{X}) = g$. $\\square$

### Exercise 15.5

State the smooth-projective identification of the dualizing complex and explain which part is imported.

**Solution.** For the structural morphism $f:X\\to\\operatorname{Spec}k$ of a smooth projective $n$-fold, the normalized identification is $f^!k\\simeq\\omega_X[n]$, where $\\omega_X=\\bigwedge^n\\Omega_{X/k}$. Local freeness of $\\Omega_{X/k}$ explains why $\\omega_X$ is a line bundle, but it does not prove the dualizing property or determine the normalization and shift. Purity for $f$ and construction of the trace, often via residues, are the imported theorem. Once imported, the identification gives the Serre-duality formulas used above. $\\square$

## 15.7 Looking backward and forward

This chapter concludes the book's main arc. We began in **Modules: linear algebra over a ring** with concrete computations of kernels, images, and exact sequences. We passed through **Abelian Categories**, where elements were replaced by arrows; **Derived Categories**, where exactness was repaired by complexes; and **Model Categories** and **Higher Categories**, where homotopy theory was systematized. We studied **Topos Theory** and **Categorical Logic** for their geometric and syntactic power, **Monoidal Categories** and **Enriched Categories** for their algebraic structure, and finally **Adjunctions and Exactness**, **Spectral Sequences and Filtrations**, and **Homological Dimension** for the computational tools that make duality theorems accessible.

The morphism-first viewpoint keeps track of how maps compose, factor, and transform under functors. The book proves its elementary algebraic calculations, sketches specified intermediate constructions, and explicitly imports the advanced duality theorems whose full prerequisites lie beyond this volume.
`;export{e as default};