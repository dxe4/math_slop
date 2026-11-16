var e=`---
parent_id: book-finite-algebra-computation
chapter_id: cohomology-of-groups
title: "Cohomology of Groups"
level: undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Cohomology of Groups

## Why cohomology?

Group cohomology measures the obstructions to constructing objects with prescribed symmetry. It classifies group extensions, determines whether a group action can be lifted to a covering space, and appears in algebraic number theory and topology. For finite groups, the cohomology groups $H^{n}(G, M)$ can be computed explicitly from a projective resolution, and low-degree cases have concrete interpretations.

## Group actions on modules

Let $G$ be a group and $M$ an abelian group. A **$G$-module** structure on $M$ is a group homomorphism $G \\to \\operatorname{Aut}(M)$, or equivalently an action satisfying $g \\cdot (m_{1} + m_{2}) = g \\cdot m_{1} + g \\cdot m_{2}$. If $M$ is a module over a ring $R$, we often require the $G$-action to be $R$-linear.

**Examples.**
- The trivial module: $g \\cdot m = m$ for all $g \\in G$.
- For a subgroup $H \\leq G$, the permutation module $\\mathbb{Z}[G/H]$.
- For a Galois extension $K/F$, the multiplicative group $K^{\\times}$ is a $\\operatorname{Gal}(K/F)$-module.

## The bar resolution and cohomology

The **standard bar resolution** is a free $\\mathbb{Z}[G]$-resolution of the trivial module $\\mathbb{Z}$:

$$\\dots \\to B_{2} \\to B_{1} \\to B_{0} \\to \\mathbb{Z} \\to 0$$

where $B_{n}$ is the free $\\mathbb{Z}[G]$-module on symbols $[g_{1} | \\dots | g_{n}]$. The boundary maps are

$$\\partial_{n}([g_{1} | \\dots | g_{n}]) = g_{1}[g_{2} | \\dots | g_{n}] + \\sum_{i=1}^{n-1} (-1)^{i} [g_{1} | \\dots | g_{i} g_{i+1} | \\dots | g_{n}] + (-1)^{n} [g_{1} | \\dots | g_{n-1}].$$

Applying $\\operatorname{Hom}_{\\mathbb{Z}[G]}(-, M)$ yields the **cochain complex** $C^{n}(G, M) = \\operatorname{Hom}_{\\mathbb{Z}[G]}(B_{n}, M)$, whose cohomology is $H^{n}(G, M)$.

After identifying equivariant maps out of the bar resolution with inhomogeneous cochains, an $n$-cochain is simply a function $f:G^n\\to M$; it has no further equivariance condition. The $G$-action instead appears in the coboundary:

$$(\\delta f)(g_{1}, \\dots, g_{n+1}) = g_{1} \\cdot f(g_{2}, \\dots, g_{n+1}) + \\sum_{i=1}^{n} (-1)^{i} f(g_{1}, \\dots, g_{i} g_{i+1}, \\dots, g_{n+1}) + (-1)^{n+1} f(g_{1}, \\dots, g_{n}).$$

## Low-degree interpretations

**$H^{0}(G, M)$.** The $0$-cocycles are elements $m \\in M$ with $g \\cdot m = m$ for all $g$. Thus $H^{0}(G, M) = M^{G}$, the $G$-invariants.

**$H^{1}(G, M)$.** A $1$-cocycle is a function $f : G \\to M$ with $f(gh) = f(g) + g \\cdot f(h)$. Such functions are **crossed homomorphisms**. A $1$-coboundary has the form $f(g) = g \\cdot m - m$ for some $m \\in M$. If $G$ acts trivially, crossed homomorphisms are ordinary homomorphisms and coboundaries are zero, so $H^{1}(G, M) = \\operatorname{Hom}(G, M)$.

**$H^{2}(G, M)$.** A $2$-cocycle is a function $f : G \\times G \\to M$ satisfying

$$g \\cdot f(h, k) + f(g, hk) = f(gh, k) + f(g, h).$$

Two cocycles differ by a coboundary if $f'(g, h) = f(g, h) + g \\cdot \\alpha(h) - \\alpha(gh) + \\alpha(g)$ for some $\\alpha : G \\to M$. The group $H^{2}(G, M)$ classifies equivalence classes of extensions

$$0 \\to M \\to E \\to G \\to 1$$

where the $G$-action on $M$ by conjugation in $E$ is the given module structure.

**Worked example.** Compute $H^{2}(C_{2}, \\mathbb{Z}/2\\mathbb{Z})$ with trivial action.

**Solution.** Every cohomology class has a normalised representative with $f(e,-)=f(-,e)=0$; these equalities are a normalisation choice, not a consequence for every cocycle. A normalised cocycle is determined by $a=f(g,g)\\in\\mathbb{Z}/2\\mathbb{Z}$, and the cocycle equation on $(g,g,g)$ imposes no further condition. Normalized coboundaries have value $2\\alpha(g)=0$ at $(g,g)$, so the two values of $a$ give the two classes. Hence $H^2(C_2,C_2)\\cong C_2$. The zero class gives the split extension $V_4$ and the nonzero class gives $C_4$; these are extension-equivalence classes with the specified kernel, quotient, and action, not merely a classification of abstract middle groups.

## Group homology

Dually, for a left $\\mathbb{Z}[G]$-module $M$, **group homology** uses the standard bar resolution as a complex of free right $\\mathbb{Z}[G]$-modules and tensors it with $M$:

$$H_{n}(G, M) = H_{n}(B_{\\bullet} \\otimes_{\\mathbb{Z}[G]} M).$$

In particular, $H_{0}(G, M) = M / \\langle g \\cdot m - m \\rangle = M_{G}$, the **coinvariants**.

## Common errors

- **Confusing cohomology with homology.** Cohomology has contravariant functoriality and is computed with $\\operatorname{Hom}$; homology is covariant and uses $\\otimes$.
- **Forgetting the $G$-action in the cocycle condition.** The term $g \\cdot f(h, k)$ is essential when the action is non-trivial.
- **Assuming $H^{n}(G, M) = 0$ for $n$ large.** Cohomology can be non-trivial in arbitrarily high degree, though for finite groups it is periodic in certain cases.

## Practice exercises

### Exercise 1

Compute $H^{0}(S_{3}, \\mathbb{Z})$ where $\\mathbb{Z}$ is the trivial $S_{3}$-module.

**Solution.** $H^{0}(S_{3}, \\mathbb{Z}) = \\mathbb{Z}^{S_{3}} = \\mathbb{Z}$ because every integer is fixed by the trivial action.

### Exercise 2

Compute $H^{1}(C_{n}, \\mathbb{Z})$ with trivial action.

**Solution.** With trivial action, $H^{1}(C_{n}, \\mathbb{Z}) = \\operatorname{Hom}(C_{n}, \\mathbb{Z})$. Since $\\mathbb{Z}$ is torsion-free and $C_{n}$ is finite, every homomorphism is trivial. Thus $H^{1}(C_{n}, \\mathbb{Z}) = 0$.

### Exercise 3

Show that $H^{2}(C_{p}, C_{p}) \\cong C_{p}$ for a prime $p$, with trivial action on both sides.

**Solution.** Write exponents in $\\{0,\\dots,p-1\\}$. For each $a\\in C_p$, the normalised carry function

$f_a(g^i,g^j)=a\\left\\lfloor\\frac{i+j}{p}\\right\\rfloor$

is a $2$-cocycle: both sides of the cocycle identity count the same carry in adding $i,j,k$ modulo $p$. Given an extension, choose a lift $u$ of $g$; then $u^p=a$ lies in the kernel and is unchanged by replacing $u$ by another lift because the kernel has exponent $p$. This invariant gives every $a$, and two extensions are equivalent exactly when their invariants agree. Hence $H^2(C_p,C_p)\\cong C_p$. The zero class is split. The nonzero classes have abstract middle group $C_{p^2}$, but remain distinct as extensions with fixed kernel and quotient identifications.

### Exercise 4

Let $G$ act on $M = \\mathbb{Z}[G]$ by left multiplication. Compute $H^{0}(G, M)$ and $H_{0}(G, M)$.

**Solution.** If $G$ is finite, the invariants are $\\mathbb{Z}\\cdot\\sum_{g\\in G}g\\cong\\mathbb{Z}$: invariance forces all coefficients to agree. If $G$ is infinite, finite support forces that common coefficient to be zero, so the invariants vanish. In either case the coinvariant relations identify every group-basis element, and the augmentation induces $M_G\\cong\\mathbb{Z}$.

## Looking backward and forward

Group cohomology provides the language for obstructions and extensions. In **Algebraic Coding Theory** we use finite fields and polynomial rings---structures whose automorphism groups are Galois groups---to construct error-correcting codes. The cohomological perspective on extensions will reappear when we study cyclic codes as modules over group algebras.
`;export{e as default};