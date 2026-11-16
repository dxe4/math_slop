var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: fibrations-and-spectral-sequences
title: "Fibrations and Spectral Sequences"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Fibrations and Spectral Sequences

## Fibrations

A map $p:E \\to B$ is a **fibration** if it satisfies the **homotopy lifting property**: for any space $X$, map $f:X \\to E$, and homotopy $H:X \\times [0,1] \\to B$ with $H(-,0)=p \\circ f$, there exists a lift $\\tilde{H}:X \\times [0,1] \\to E$ with $\\tilde{H}(-,0)=f$ and $p \\circ \\tilde{H}=H$.

Every covering space is a fibration with discrete fiber. More generally, every numerable fiber bundle is a fibration; this includes ordinary bundles over paracompact bases. Without numerability or a comparable hypothesis, local triviality alone does not supply the global homotopy lifting property used here. The **path-loop fibration** $\\Omega X \\to PX \\to X$ has total space $PX=\\{\\gamma:[0,1] \\to X \\mid \\gamma(0)=x_0\\}$, the contractible space of paths based at $x_0$, and fiber $\\Omega X=\\{\\gamma:[0,1] \\to X \\mid \\gamma(0)=\\gamma(1)=x_0\\}$, the loop space. The projection sends a path to its endpoint.

**Long exact sequence of a fibration.** For a fibration $p:E \\to B$ with fiber $F$ and $B$ path-connected, there is a long exact sequence

$$\\cdots \\to \\pi_{k+1}(B) \\to \\pi_k(F) \\to \\pi_k(E) \\to \\pi_k(B) \\to \\pi_{k-1}(F) \\to \\cdots.$$

For the path-loop fibration, since $PX$ is contractible, this gives $\\pi_k(X) \\cong \\pi_{k-1}(\\Omega X)$.

## Spectral sequences

A **spectral sequence** is a sequence of pages $(E_r,d_r)$ where each $E_r$ is a bigraded module and $d_r:E_r^{p,q} \\to E_r^{p+r,q-r+1}$ is a differential with $d_r^2=0$. The next page is the homology: $E_{r+1}=H(E_r,d_r)$.

Under suitable convergence hypotheses, a spectral sequence **converges** to a graded object associated to a filtration of some target module. The notation $E_2^{p,q} \\Rightarrow H^{p+q}$ means the limiting page $E_\\infty$ gives the successive quotients of a filtration on $H^*$.

**The Leray--Serre spectral sequence.** For a fibration $F \\to E \\to B$ with $B$ simply connected, there is a spectral sequence with

$$E_2^{p,q}=H^p(B;H^q(F;R)) \\Rightarrow H^{p+q}(E;R).$$

This is the primary computational tool for the cohomology of fiber bundles.

## Common errors

**Error: assuming a spectral sequence collapses to the answer.** Even when all differentials vanish, there may be nontrivial **extension problems**: the filtration on the target may not split, so $E_\\infty$ determines the target only up to extensions. For example, two successive quotients both isomorphic to $\\mathbb Z/2$ can assemble as either $\\mathbb Z/2\\oplus\\mathbb Z/2$ or $\\mathbb Z/4$.

**Error: confusing fibrations with fiber bundles.** Numerable fiber bundles are fibrations, but not every fibration is locally trivial. For computations, the Leray--Serre spectral sequence applies directly to fibrations under its stated base and coefficient hypotheses.

**Error: forgetting the simple connectivity hypothesis.** The Leray--Serre spectral sequence requires $\\pi_1(B)$ to act trivially on $H^*(F)$, which holds when $B$ is simply connected. For non-simply-connected bases, one must use local coefficients.

## Worked example: $H^*(\\mathbb{CP}^n)$ via the fibration $S^1 \\to S^{2n+1} \\to \\mathbb{CP}^n$

The Hopf fibration $S^1 \\to S^{2n+1} \\to \\mathbb{CP}^n$ has fiber $S^1$ and total space $S^{2n+1}$. The Serre spectral sequence has $E_2^{p,q}=H^p(\\mathbb{CP}^n;H^q(S^1;\\mathbb{Z}))$. Since $H^q(S^1)$ is $\\mathbb{Z}$ for $q=0,1$ and 0 otherwise, the $E_2$ page has only two rows.

The total space $S^{2n+1}$ has $H^k=0$ for $0<k<2n+1$. This forces all differentials to be zero except $d_2:E_2^{p,1} \\to E_2^{p+2,0}$, which must be an isomorphism for $p<2n$. Thus $H^p(\\mathbb{CP}^n;\\mathbb{Z}) \\cong \\mathbb{Z}$ for even $p$ between $0$ and $2n$, and 0 otherwise.

The multiplicative structure supplies more than these additive groups. Let $u\\in E_2^{0,1}$ generate $H^1(S^1;\\mathbb Z)$ and put $x=d_2(u)\\in E_2^{2,0}=H^2(\\mathbb{CP}^n;\\mathbb Z)$. The differential is a derivation, so for an even-degree base class $a$,

$$d_2(a\\,u)=a\\,d_2(u)=a\\,x.$$

Since the displayed $d_2$ maps are isomorphisms through total degree $2n$, successive multiplication by $x$ generates every even-degree group. The finite dimension of $\\mathbb{CP}^n$ gives $x^{n+1}=0$. Therefore the ring, not only its additive groups, is

$$H^*(\\mathbb{CP}^n;\\mathbb Z)\\cong\\mathbb Z[x]/(x^{n+1}),\\qquad |x|=2.$$

## Practice exercises

### Exercise 12.1

Compute $\\pi_3(S^2)$ using the Hopf fibration $S^1 \\to S^3 \\to S^2$.

**Solution.** The long exact sequence of homotopy groups gives $\\cdots \\to \\pi_3(S^1) \\to \\pi_3(S^3) \\to \\pi_3(S^2) \\to \\pi_2(S^1) \\to \\cdots$. Since $\\pi_3(S^1)=\\pi_2(S^1)=0$ and $\\pi_3(S^3)=\\mathbb{Z}$, we get $\\pi_3(S^2) \\cong \\mathbb{Z}$. The Hopf map $S^3 \\to S^2$ generates this group. $\\square$

### Exercise 12.2

Show that if $F \\to E \\to B$ is a fibration and $B$ is contractible, then $E \\simeq F$.

**Solution.** Choose a contraction of $B$ to $b_0$. Lifting it from $\\operatorname{id}_E$ produces a map $r:E\\to F=p^{-1}(b_0)$ and a homotopy from $\\operatorname{id}_E$ to the composite $E\\xrightarrow{r}F\\hookrightarrow E$. A second lifted homotopy shows that $r$ restricted to $F$ is homotopic to $\\operatorname{id}_F$. Thus the fiber inclusion is a homotopy equivalence. The lift need not fix $F$ pointwise throughout, so it does not automatically give a deformation retraction. $\\square$

### Exercise 12.3

Prove that $\\pi_k(S^n)=0$ for $k<n$.

**Solution.** Use the path-loop fibration $\\Omega S^n \\to PS^n \\to S^n$. The long exact sequence gives $\\pi_k(S^n) \\cong \\pi_{k-1}(\\Omega S^n)$. Iterating, $\\pi_k(S^n) \\cong \\pi_0(\\Omega^k S^n)$. For $k<n$, cellular approximation shows that every map $S^k \\to S^n$ is homotopic to a constant. $\\square$

### Exercise 12.4

Let $F$ and $B$ have finite-dimensional cohomology in each degree over a field $\\mathbb F$. Explain why the cohomological spectral sequence of the product fibration $F \\times B \\to B$ collapses at $E_2$.

**Solution.** Over $\\mathbb F$, K\\"unneth gives

$$H^*(F\\times B;\\mathbb F)\\cong H^*(F;\\mathbb F)\\otimes_{\\mathbb F}H^*(B;\\mathbb F).$$

The $E_2$ page is the same bigraded vector space. Finite dimension in each total degree means any nonzero differential would strictly lower the total dimension available at $E_\\infty$, contradicting the K\\"unneth dimension of the abutment. Hence all differentials vanish. Over a field the resulting filtration splits as vector spaces, though not canonically as a filtered ring. Integral product formulas require Tor terms and are not covered by this argument. $\\square$

## Looking forward

Chapters 13--16 develop advanced topics building on the foundations established here. Chapter 13 introduces generalized cohomology theories and spectra, Chapter 14 develops obstruction theory and characteristic classes, Chapter 15 covers sheaf cohomology and local systems, and Chapter 16 applies these ideas to persistent homology and topological data analysis.
`;export{e as default};