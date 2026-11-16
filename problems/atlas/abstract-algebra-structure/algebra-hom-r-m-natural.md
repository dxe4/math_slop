# A natural isomorphism represented by the free rank-one module

*Difficulty 4 of 5 · [Abstract algebra through structure-preserving maps](index.md) · exercise 7 of 7*

Let R be a ring with identity and work with left R-modules. Prove that $Φ_M:Hom_R(R,M)\to M$, defined by $Φ_M(f)=f(1)$, is an isomorphism for every M, construct its inverse, and verify naturality in M.

<details>
<summary>Hint 1</summary>

An R-linear map out of R is determined by the image of 1

</details>

<details>
<summary>Hint 2</summary>

Given $m\in M$, define $f_m(r)=rm$

</details>

<details>
<summary>Hint 3</summary>

For $u:M\to N$ compare u(f(1)) with (u∘f)(1)

</details>

<details>
<summary>Worked solution</summary>

For $m\in M$ define $\Psi_M(m):R\to M$ by $\Psi_M(m)(r)=rm$. This map is $R$-linear for left modules. Evaluating at 1 gives $\Phi_M(\Psi_M(m))=1m=m$. Conversely, for $f\in\operatorname{Hom}_R(R,M)$, linearity gives $\Psi_M(\Phi_M(f))(r)=r f(1)=f(r\cdot 1)=f(r)$, so $\Psi_M$ and $\Phi_M$ are inverse isomorphisms. If $u:M\to N$ is $R$-linear, then $u(\Phi_M(f))=u(f(1))=(u\circ f)(1)=\Phi_N(\operatorname{Hom}_R(R,u)(f))$. Thus the square commutes for every $u$, which is precisely naturality. The identity element of $R$ and the left-module convention are essential to the displayed inverse formula.

**Answer.** The inverse sends m to the map $r\mapsto rm$, and naturality follows from $u(f(1))=(u∘f)(1)$.

</details>

*Tags: naturality, Hom functor, universal property*
