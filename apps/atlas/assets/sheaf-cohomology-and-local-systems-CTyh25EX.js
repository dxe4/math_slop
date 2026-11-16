var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: sheaf-cohomology-and-local-systems
title: "Sheaf Cohomology and Local Systems"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Sheaf Cohomology and Local Systems

## Sheaves

A **presheaf** $\\mathcal{F}$ on a topological space $X$ assigns to each open set $U \\subseteq X$ an abelian group $\\mathcal{F}(U)$ and to each inclusion $V \\subseteq U$ a restriction map $\\rho_{UV}:\\mathcal{F}(U) \\to \\mathcal{F}(V)$. These satisfy $\\rho_{UU}=\\operatorname{id}$ and, for $W\\subseteq V\\subseteq U$,

$$\\rho_{UW}=\\rho_{VW}\\circ\\rho_{UV}.$$

A presheaf is a **sheaf** if it satisfies:
- **Local identity:** If $s \\in \\mathcal{F}(U)$ and $\\{U_i\\}$ covers $U$ with $s|_{U_i}=0$ for all $i$, then $s=0$.
- **Local gluing:** If $\\{U_i\\}$ covers $U$ and $s_i \\in \\mathcal{F}(U_i)$ satisfy $s_i|_{U_i \\cap U_j}=s_j|_{U_i \\cap U_j}$, then there exists $s \\in \\mathcal{F}(U)$ with $s|_{U_i}=s_i$.

**Examples.**
- The sheaf of continuous functions $C^0_X$.
- The constant sheaf $\\underline{G}$ for an abelian group $G$.
- The sheaf of sections of a vector bundle.

## Sheaf cohomology

Sheaf cohomology $H^*(X;\\mathcal{F})$ is the right derived functor of the global sections functor $\\Gamma(X,-)$. Concretely, take an injective resolution $0 \\to \\mathcal{F} \\to \\mathcal{I}^0 \\to \\mathcal{I}^1 \\to \\cdots$ and define

$$H^k(X;\\mathcal{F}) = H^k(\\Gamma(X,\\mathcal{I}^*)).$$

For the constant sheaf $\\underline{G}$, sheaf cohomology agrees with singular cohomology when $X$ is locally contractible and paracompact.

## Local systems

A **local system** (or locally constant sheaf) on $X$ is a sheaf locally isomorphic to a constant sheaf. On a path-connected, locally path-connected, semilocally simply connected space it is equivalent to a representation of $\\pi_1(X,x_0)$ on a stalk $G$; more generally one uses the fundamental groupoid. Monodromy around loops gives automorphisms of the stalk.

**Example.** The orientation local system $\\mathcal{O}_X$ on a manifold $X$ has stalk $\\mathbb{Z}$ and monodromy given by the orientation character $\\pi_1(X) \\to \\{\\pm 1\\}$. For non-orientable $X$, this is a nontrivial local system.

For a closed $n$-manifold $M$ and local system $\\mathcal{L}$, Poincar\\'e duality with local coefficients states

$$H^k(M;\\mathcal{L}) \\cong H_{n-k}(M;\\mathcal{L} \\otimes \\mathcal{O}_M).$$

This removes the orientability hypothesis: even for non-orientable closed manifolds, duality holds with the orientation system. Manifolds with boundary require relative groups, and noncompact manifolds require compactly supported cohomology or locally finite homology.

## Common errors

**Error: confusing sheaf cohomology with Cech cohomology.** Cech cohomology $\\check{H}^*(X;\\mathcal{F})$ agrees with sheaf cohomology for paracompact spaces and reasonable covers, but not in general. For well-behaved spaces, they coincide.

**Error: assuming constant sheaf cohomology equals singular cohomology without hypotheses.** The agreement requires $X$ to be locally contractible. For pathological spaces, sheaf cohomology of the constant sheaf may differ from singular cohomology.

**Error: forgetting that local systems encode monodromy.** A local system is not just a collection of groups; the monodromy representation is part of the data. Two local systems with isomorphic stalks but different monodromy are different.

## Worked example: cohomology with local coefficients on $\\mathbb{RP}^n$

For $n\\ge2$, the orientation local system $\\mathcal O$ on $\\mathbb{RP}^n$ is trivial when $n$ is odd and has the nontrivial sign monodromy when $n$ is even. Twisted Poincar\\'e duality gives $H^k(\\mathbb{RP}^n;\\mathcal O)\\cong H_{n-k}(\\mathbb{RP}^n;\\mathbb Z)$. Consequently:

- if $n$ is even, the group is $\\mathbb Z$ for $k=n$, is $\\mathbb Z/2$ for odd $k$ with $0<k<n$, and is zero otherwise;
- if $n$ is odd, $\\mathcal O$ is constant, and the group is $\\mathbb Z$ for $k=0,n$, is $\\mathbb Z/2$ for even $k$ with $0<k<n$, and is zero otherwise.

This twisted cohomology pairs with ordinary cohomology to give Poincar\\'e duality without orientability.

## Practice exercises

### Exercise 15.1

Show that the constant sheaf $\\underline{\\mathbb{Z}}$ on a path-connected space $X$ has $H^0(X;\\underline{\\mathbb{Z}})=\\mathbb{Z}$.

**Solution.** $H^0(X;\\mathcal{F})=\\Gamma(X,\\mathcal{F})$ for any sheaf. For the constant sheaf, global sections are locally constant functions $X \\to \\mathbb{Z}$. Since $X$ is path-connected, such functions are constant, so $\\Gamma(X,\\underline{\\mathbb{Z}})=\\mathbb{Z}$. $\\square$

### Exercise 15.2

Prove that a rank-$n$ real vector bundle $E\\to X$ is trivial if and only if its sheaf of continuous sections is isomorphic, as a module sheaf over $C_X^0$, to $(C_X^0)^n$.

**Solution.** If $E\\cong X\\times\\mathbb R^n$, sections over $U$ are $n$-tuples of continuous functions on $U$, so the section sheaf is $(C_X^0)^n$. Conversely, an isomorphism of $C_X^0$-module sheaves sends the standard basis to $n$ global sections that form a basis in every stalk and hence in every fiber. They define a bundle isomorphism $X\\times\\mathbb R^n\\to E$. The constant sheaf $\\underline{\\mathbb R}^n$ would describe locally constant functions and is not the section sheaf of a trivial bundle in general. $\\square$

### Exercise 15.3

Compute $H^*(S^1;\\mathcal{L})$ where $\\mathcal{L}$ is the local system with monodromy $-1$ on $\\mathbb{Z}$.

**Solution.** The twisted cohomology of $S^1$ with monodromy $-1$ is computed by the chain complex $C^0=\\mathbb{Z}$, $C^1=\\mathbb{Z}$ with $\\delta=\\cdot 2$. Thus $H^0=0$ (no invariant sections) and $H^1=\\mathbb{Z}/2\\mathbb{Z}$. $\\square$

### Exercise 15.4

Explain why Poincar\\'e duality with local coefficients implies that a closed $n$-manifold $M$ has $\\chi(M)=0$ when $n$ is odd, even if $M$ is non-orientable.

**Solution.** Tensor the orientation system with $\\mathbb Q$. Duality gives $H^k(M;\\mathcal O_{\\mathbb Q})\\cong H_{n-k}(M;\\mathbb Q)$. A finite CW structure computes the Euler characteristic of any rank-one rational local system from cochain dimensions, so $\\chi(M;\\mathcal O_{\\mathbb Q})=\\chi(M)$. Duality also gives $\\chi(M;\\mathcal O_{\\mathbb Q})=(-1)^n\\chi(M)$. For odd $n$, these equalities force $\\chi(M)=0$. $\\square$

## Looking forward

Chapter 16 applies the algebraic tools developed throughout this book to the emerging field of topological data analysis, where persistent homology extracts robust topological features from finite data sets.
`;export{e as default};