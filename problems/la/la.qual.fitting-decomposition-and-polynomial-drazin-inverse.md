# Derive the Fitting decomposition and its unique inverse on the stable part

*Hard · [Linear algebra problems](index.md)*

For an endomorphism A of an n-dimensional real space and $m\ge n$, prove $V=\ker A^m\oplus\operatorname{im}A^m$. Construct the unique commuting D with $DAD=D$ and $A^{m+1}D=A^m$, and prove D is a polynomial in A. Preparation: stabilized kernels and polynomial Chinese remainders.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use stabilization to show the intersection of the two proposed summands is zero.

</details>

<details>
<summary>Hint 2</summary>

On the summands A is respectively nilpotent and invertible. For polynomiality separate the zero primary factor of the minimal polynomial from the factor nonzero at zero.

</details>

<details>
<summary>Model proof</summary>

The same decomposition controls existence, uniqueness and algebraic functional calculus.

1. The increasing kernels stabilize by exponent n; once two consecutive kernels agree, all later ones agree. If $v=A^mw$ and $A^mv=0$, then $w\in\ker A^{2m}=\ker A^m$, so v is zero. Rank-nullity now gives the stated direct sum, and both summands are invariant.
2. A is nilpotent on the kernel summand and injective, hence invertible, on the image summand. Define D as zero on the former and the inverse of A on the latter. It commutes with A and satisfies both displayed equations.
3. Any competing commuting D preserves both summands. On the invertible one its second equation forces $D=A^{-1}$. On the nilpotent one, commutation and $DAD=D$ give $D=AD^2$, hence by iteration $D=A^kD^{k+1}$ and finally zero at k=m. This proves uniqueness.
4. Write the minimal polynomial $t^rq(t)$ with $q(0)\ne0$. Chinese remainders and Bezout give a polynomial d equal to zero modulo $t^r$ and to the inverse of t modulo q. Then $d(A)$ has exactly the constructed actions on the two primary parts. The case of an absent factor imposes no condition for that factor.

**Self-assessment rubric**

- Prove zero intersection using kernel stabilization and complete the dimension argument.
- Establish the nilpotent/invertible restrictions and verify the constructed D equations.
- Prove uniqueness separately on both invariant summands.
- Construct a polynomial with the correct two primary congruences, including absent factors.

</details>
