var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: mayer-vietoris
title: "Mayer--Vietoris"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Mayer--Vietoris

## The theorem

Let $X$ be a topological space and $A,B \\subseteq X$ subspaces whose interiors cover $X$: $\\operatorname{int}(A) \\cup \\operatorname{int}(B)=X$. Then there is a long exact sequence

$$\\cdots \\to H_k(A \\cap B) \\xrightarrow{(i_{A*},-i_{B*})} H_k(A) \\oplus H_k(B) \\xrightarrow{j_{A*}+j_{B*}} H_k(X) \\xrightarrow{\\partial} H_{k-1}(A \\cap B) \\to \\cdots$$

called the **Mayer--Vietoris sequence**. The maps $i_A,i_B$ are inclusions of $A \\cap B$ into $A$ and $B$; the maps $j_A,j_B$ are inclusions of $A$ and $B$ into $X$.

The condition on interiors is essential. It ensures that the inclusion of chains supported in $A$ or $B$ into all chains of $X$ induces an isomorphism on homology, via the **excision theorem**.

**Excision theorem.** If $Z \\subseteq A \\subseteq X$ with $\\overline{Z} \\subseteq \\operatorname{int}(A)$, then $H_*(X \\setminus Z, A \\setminus Z) \\cong H_*(X,A)$.

Removing a subspace whose closure lies in the interior of $A$ does not change relative homology. Removing an arbitrary closed set without checking the hypothesis can change the result.

## Sphere homology from Mayer--Vietoris

Use slightly thickened upper and lower hemispheres $A$ and $B$, whose interiors cover $S^n$. Each piece deformation retracts to a closed hemisphere, and their overlap deformation retracts to the equator $S^{n-1}$. Thus $A$ and $B$ are contractible and $A\\cap B\\simeq S^{n-1}$.

The reduced Mayer--Vietoris sequence is

$$\\cdots \\to \\widetilde{H}_k(A\\cap B) \\to \\widetilde{H}_k(A) \\oplus \\widetilde{H}_k(B) \\to \\widetilde{H}_k(S^n) \\xrightarrow{\\partial} \\widetilde{H}_{k-1}(A\\cap B) \\to \\cdots.$$

Since $\\widetilde{H}_k(A)=\\widetilde{H}_k(B)=0$ and $A\\cap B\\simeq S^{n-1}$, the connecting homomorphism is an isomorphism:

$$\\widetilde{H}_k(S^n) \\cong \\widetilde{H}_{k-1}(S^{n-1}).$$

Starting from $\\widetilde{H}_0(S^0) \\cong \\mathbb{Z}$ (since $S^0$ has two points), induction gives

For $n\\ge1$,

$$H_k(S^n;\\mathbb{Z}) = \\begin{cases} \\mathbb{Z} & k=0,n, \\\\ 0 & \\text{otherwise}. \\end{cases}$$

For $n=0$, the two components give $H_0(S^0;\\mathbb Z)\\cong\\mathbb Z^2$.

This agrees with the cellular computation and is a foundational result.

## The Klein bottle

Write the Klein bottle $K$ as two M\\"obius bands glued along their boundary circles, and thicken each band slightly across the gluing circle so that the interiors cover. Each piece retracts onto a core circle, while the overlap retracts onto the common boundary circle. Thus $H_0(M_i)=\\mathbb Z$, $H_1(M_i)=\\mathbb Z$, and $H_k(M_i)=0$ for $k\\ge2$, while the overlap has the homology of $S^1$.

The Mayer--Vietoris sequence in low degrees is

$$H_1(M_1 \\cap M_2) \\to H_1(M_1) \\oplus H_1(M_2) \\to H_1(K) \\to H_0(M_1 \\cap M_2) \\to H_0(M_1) \\oplus H_0(M_2) \\to H_0(K) \\to 0.$$

The map $H_0(M_1 \\cap M_2) \\to H_0(M_1) \\oplus H_0(M_2)$ sends $1 \\mapsto (1,-1)$ under the displayed Mayer--Vietoris sign convention, and is injective. Thus $H_1(K)$ is the cokernel of $H_1(M_1 \\cap M_2) \\to H_1(M_1) \\oplus H_1(M_2)$. Each inclusion of the boundary into a M\\"obius band sends the generator to twice the core generator (the boundary wraps twice around the core). The signed map is $(1 \\mapsto (2,-2))$ after compatible generator choices, so its cokernel is $\\mathbb{Z} \\oplus \\mathbb{Z}/2\\mathbb{Z}$. Therefore

$$H_1(K;\\mathbb{Z}) \\cong \\mathbb{Z} \\oplus \\mathbb{Z}/2\\mathbb{Z}, \\qquad H_2(K;\\mathbb{Z})=0.$$

## Common errors

**Error: applying Mayer--Vietoris without the interior covering hypothesis.** If $A$ and $B$ are closed sets whose union is $X$ but whose interiors do not cover $X$, the displayed theorem does not apply. The unthickened closed hemispheres meet only along their boundary, for example; slightly overlapping collar neighborhoods repair that cover. By contrast, $A=B=X$ does satisfy the hypothesis and gives a valid, if uninformative, exact sequence.

**Error: forgetting reduced homology for $H_0$.** In the reduced sequence, $\\widetilde{H}_0$ of a contractible space is 0. In the unreduced sequence, if $A,B,$ and $A\\cap B$ are nonempty and path-connected, the map $H_0(A\\cap B)\\to H_0(A)\\oplus H_0(B)$ is $1\\mapsto(1,-1)$ and is injective. Reduced homology often simplifies the bookkeeping, but it does not reverse that fact.

**Error: miscomputing the connecting homomorphism.** The map $\\partial:H_k(X) \\to H_{k-1}(A \\cap B)$ is defined by splitting a cycle in $X$ into chains in $A$ and $B$, taking the boundary of one piece, and observing that boundary lies in $A \\cap B$. The sign convention matters.

## Worked example: the wedge $S^n \\vee S^m$

Let $X=S^n \\vee S^m$ with $n,m \\geq 1$. Take $A$ a neighborhood of $S^n$ and $B$ a neighborhood of $S^m$, with $A \\cap B$ contractible. Mayer--Vietoris gives

$$\\cdots \\to H_k(A \\cap B) \\to H_k(A) \\oplus H_k(B) \\to H_k(X) \\to H_{k-1}(A \\cap B) \\to \\cdots.$$

Since $A \\cap B$ is contractible, $H_k(A \\cap B)=0$ for $k>0$. Thus $H_k(X) \\cong H_k(S^n) \\oplus H_k(S^m)$ for $k>0$, and $H_0(X)=\\mathbb{Z}$. The homology is the direct sum of the homologies of the summands.

## Practice exercises

### Exercise 8.1

Compute $H_*(\\mathbb{RP}^2)$ using Mayer--Vietoris with $A$ a M\\"obius band and $B$ a disk.

**Solution.** Write $\\mathbb{RP}^2=M \\cup D^2$ where $M$ is a M\\"obius band and $D^2$ is a disk glued along the boundary circle, then thicken the pieces so their interiors cover. Their overlap retracts to $S^1$. We have $H_0(M)=H_0(D^2)=\\mathbb{Z}$, $H_1(M)=\\mathbb{Z}$, and no higher homology in either piece. The map $H_1(S^1) \\to H_1(M) \\oplus H_1(D^2)$ sends $1 \\mapsto (2,0)$ because the boundary of the M\\"obius band wraps twice around the core. Thus $H_1(\\mathbb{RP}^2)=\\mathbb{Z}/2\\mathbb{Z}$ and $H_2(\\mathbb{RP}^2)=0$. $\\square$

### Exercise 8.2

Let $A$ and $B$ be finite subcomplexes of a finite CW complex. Prove that $\\chi(A \\cup B)=\\chi(A)+\\chi(B)-\\chi(A \\cap B)$.

**Solution.** Finite subcomplexes form an excisive pair, and their homology groups over a field are finite-dimensional and vanish above a finite degree. The alternating sum of dimensions in the resulting Mayer--Vietoris sequence is zero. Grouping the terms by space gives the formula. $\\square$

### Exercise 8.3

Compute $H_*(S^1 \\times S^1)$ using Mayer--Vietoris.

**Solution.** Let $A$ be a torus with the interior of a small disk removed and let $B$ be a slightly enlarged disk filling that hole; thicken both across the boundary so their interiors cover. Then $A\\simeq S^1\\vee S^1$, $B\\simeq pt$, and $A\\cap B\\simeq S^1$. The boundary circle represents the commutator in $\\pi_1(A)$ and hence maps to zero in $H_1(A)\\cong\\mathbb Z^2$; it also maps to zero in $H_1(B)$. Exactness gives $H_2(T^2)\\cong H_1(S^1)\\cong\\mathbb Z$, $H_1(T^2)\\cong H_1(A)\\cong\\mathbb Z^2$, and $H_0(T^2)\\cong\\mathbb Z$. $\\square$

### Exercise 8.4

Assume the interiors of contractible subspaces $A$ and $B$ cover $X$. Express $\\widetilde H_k(X)$ in terms of $\\widetilde H_{k-1}(A\\cap B)$. What follows if $A\\cap B$ is path-connected, and what stronger conclusion follows if it is acyclic?

**Solution.** Reduced Mayer--Vietoris gives

$$\\widetilde H_k(X)\\cong\\widetilde H_{k-1}(A\\cap B).$$

Path-connectedness of the intersection implies only $\\widetilde H_1(X)=0$; its higher reduced homology may remain. If $A\\cap B$ is acyclic, then $X$ is acyclic. This homology calculation alone does not prove that $X$ is contractible. $\\square$

## Looking forward

Chapter 9 introduces cohomology, the dual theory to homology with a rich multiplicative structure. The cup product distinguishes spaces that homology groups alone cannot. Chapter 10 develops homotopy invariance and degree theory, connecting the fundamental group and homology through the Hurewicz theorem and the degree of maps between spheres.
`;export{e as default};