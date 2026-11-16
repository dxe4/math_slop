var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: obstruction-theory-and-characteristic-classes
title: "Obstruction Theory and Characteristic Classes"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Obstruction Theory and Characteristic Classes

## Obstruction theory

Given a fibration $p:E \\to B$ with fiber $F$ and a map $f:X \\to B$, when does $f$ lift to $\\tilde{f}:X \\to E$? Obstruction theory answers this inductively over skeleta.

Assume $X$ is a CW complex and a lift is defined on the $(n-1)$-skeleton $X^{(n-1)}$. For each $n$-cell, its attaching sphere determines an extension obstruction in $\\pi_{n-1}(F)$. As the cell moves around $X$, these groups form a local coefficient system $\\boldsymbol\\pi_{n-1}(F)$ pulled back along $f$ from the monodromy action over the base. This system is constant when that pulled-back action is trivial, for example when $X$ is simply connected. A simply connected fiber alone does not force the base monodromy action on its higher homotopy groups to be trivial.

**Theorem (primary obstruction, stated scope).** Let $p:E\\to B$ be a fibration with $(n-2)$-connected fiber $F$, let $X$ be a CW complex, and take $n\\ge3$. Given a lift of $f:X\\to B$ through the $(n-1)$-skeleton, the cellwise obstructions form a cocycle with class

$$[c^n]\\in H^n(X;\\boldsymbol\\pi_{n-1}(F)).$$

Its vanishing is equivalent to extension over the $n$-skeleton after an allowed modification on the previous skeleton. When monodromy is trivial this becomes ordinary cohomology with constant coefficients $\\pi_{n-1}(F)$. Degrees $1$ and $2$ require separate component and possibly nonabelian pointed-set formulations.

When $F$ is a $K(G,n-1)$ with $G$ abelian and $n\\ge3$, the primary obstruction is the only one. For a discrete possibly nonabelian group $G$, principal $G$-bundles are classified by a nonabelian $H^1$ pointed set; this is an ordinary cohomology group only in an abelian coefficient setting.

## Characteristic classes

A **characteristic class** assigns to each vector bundle $E \\to X$ a cohomology class $c(E) \\in H^*(X;R)$, naturally in $X$: for $f:Y \\to X$, $c(f^*E)=f^*c(E)$. By the Yoneda lemma, characteristic classes correspond to cohomology classes of the classifying space $BG$.

**Stiefel--Whitney classes** $w_i(E) \\in H^i(X;\\mathbb{F}_2)$ give necessary obstructions to systems of independent sections. For a rank-$r$ bundle with $k$ everywhere independent sections, $w_i(E)=0$ for $i>r-k$; the converse need not follow from these classes alone. They satisfy $w_0=1$, $w_i(E)=0$ for $i>r$, and the Whitney sum formula $w(E \\oplus F)=w(E) \\smile w(F)$.

**Chern classes** $c_i(E) \\in H^{2i}(X;\\mathbb{Z})$ are defined for complex vector bundles. They satisfy analogous properties and generate the integral cohomology of $BU(n)$.

**Euler class** $e(E) \\in H^n(X;\\mathbb{Z})$ for an oriented rank-$n$ bundle measures the obstruction to a nowhere-vanishing section. For $n$ odd, $2e(E)=0$.

## Common errors

**Error: applying characteristic classes to unoriented bundles.** Chern classes require complex bundles; Stiefel--Whitney classes work for any real bundle but use $\\mathbb{F}_2$ coefficients. The Euler class requires orientability.

**Error: forgetting the Whitney sum formula.** The total Stiefel--Whitney class $w(E)=1+w_1+w_2+\\cdots$ is multiplicative under direct sum: $w(E \\oplus F)=w(E) \\smile w(F)$. The individual classes satisfy more complicated formulas.

**Error: assuming vanishing characteristic classes imply triviality.** A bundle can have all relevant characteristic classes zero and still be nontrivial. The real tangent bundle $TS^5$ is nontrivial but all its positive Stiefel--Whitney classes vanish; because $S^5$ is odd-dimensional it does have a nowhere-zero tangent field. Chern classes are not defined for a real bundle unless one first forms a complex bundle such as its complexification.

## Worked example: $w(TS^n)$

The tangent bundle $TS^n$ of the $n$-sphere has Stiefel--Whitney classes $w_i(TS^n)=0$ for all $i>0$. This follows from the Whitney sum formula applied to $TS^n \\oplus \\nu \\cong \\varepsilon^{n+1}$, where $\\nu$ is the normal bundle (trivial for $S^n \\subseteq \\mathbb{R}^{n+1}$) and $\\varepsilon^{n+1}$ is the trivial bundle. Thus $w(TS^n) \\smile w(\\nu)=w(\\varepsilon^{n+1})=1$, and since $w(\\nu)=1$, we get $w(TS^n)=1$.

Among positive-dimensional spheres, $TS^n$ is trivial only for $n=1,3,7$. The Stiefel--Whitney classes do not detect this distinction.

## Practice exercises

### Exercise 14.1

For $n\\ge1$, compute the total Stiefel--Whitney class of the tautological line bundle $\\gamma^1$ over $\\mathbb{RP}^n$.

**Solution.** The tautological bundle has $w(\\gamma^1)=1+x$ where $x \\in H^1(\\mathbb{RP}^n;\\mathbb{F}_2)$ is the generator. This follows from the fact that $w_1$ is the obstruction to orientability, and $\\gamma^1$ is non-orientable. $\\square$

### Exercise 14.2

For $n\\ge1$, prove that $\\mathbb{RP}^n$ is orientable if and only if $n$ is odd.

**Solution.** A manifold is orientable if and only if $w_1(TM)=0$. For $\\mathbb{RP}^n$, the tangent bundle satisfies $T\\mathbb{RP}^n \\oplus \\varepsilon^1 \\cong (n+1)\\gamma^1$. Thus $w(T\\mathbb{RP}^n)=(1+x)^{n+1}$. The coefficient of $x$ is $n+1 \\pmod{2}$, so $w_1=0$ if and only if $n+1$ is even, i.e., $n$ is odd. $\\square$

### Exercise 14.3

Show that the Chern classes of a complex line bundle $L$ satisfy $c_1(L_1 \\otimes L_2)=c_1(L_1)+c_1(L_2)$.

**Solution.** The classifying space for line bundles is $\\mathbb{CP}^\\infty=BU(1)$. Tensor product of line bundles corresponds to addition of classifying maps, and $c_1$ is the generator of $H^2(\\mathbb{CP}^\\infty;\\mathbb{Z})$. Thus $c_1(L_1 \\otimes L_2)=c_1(L_1)+c_1(L_2)$. $\\square$

### Exercise 14.4

Use the Euler class to prove that $S^{2n}$ has no nowhere-vanishing vector field.

**Solution.** For $n\\ge1$, a nowhere-vanishing tangent field would give a splitting $TS^{2n}\\cong\\varepsilon^1\\oplus\\xi$, forcing its Euler class to vanish. Let $u\\in H^{2n}(S^{2n};\\mathbb Z)$ be the cohomological orientation generator. The Euler characteristic formula says

$$\\langle e(TS^{2n}),[S^{2n}]\\rangle=\\chi(S^{2n})=2,$$

so $e(TS^{2n})=2u\\ne0$, a contradiction. $\\square$

## Looking forward

Chapter 15 develops sheaf cohomology, which generalizes ordinary cohomology to local coefficient systems and provides the natural language for duality theorems on non-orientable manifolds. Chapter 16 applies these ideas to persistent homology and topological data analysis.
`;export{e as default};