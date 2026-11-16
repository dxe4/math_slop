# Construct and uniquely identify the additive Jordan-Chevalley parts

*Hard · [Linear algebra problems](index.md)*

For a complex endomorphism A of a nonzero finite-dimensional space, prove there are unique commuting S,N with $A=S+N$, S diagonalizable and N nilpotent. Prove both are polynomials in A. Preparation: primary decomposition and polynomial Chinese remainders.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

On each generalized eigenspace the desired semisimple part is the corresponding eigenvalue times the identity.

</details>

<details>
<summary>Hint 2</summary>

Use Chinese remainders to interpolate that constant action to the full primary multiplicity; for uniqueness examine any other commuting decomposition on its semisimple eigenspaces.

</details>

<details>
<summary>Model proof</summary>

Primary polynomial interpolation makes the decomposition intrinsic.

1. Factor the minimal polynomial as $\prod_\lambda(t-\lambda)^{m_\lambda}$. Chinese remainders give p with $p(t)\equiv\lambda$ modulo each corresponding power. Set $S=p(A)$ and $N=A-p(A)$; these polynomial parts commute.
2. On the generalized lambda-eigenspace, S is scalar lambda and N is $A-\lambda I$, nilpotent there. Primary decomposition therefore proves S diagonalizable and N globally nilpotent.
3. For another commuting decomposition $A=S_1+N_1$, each eigenspace of $S_1$ is preserved by $N_1$. On its mu-eigenspace A is $\mu I+N_1$. Thus $A-\lambda I$ is nilpotent there if mu equals lambda and invertible there otherwise, by a finite geometric inverse.
4. Consequently the generalized lambda-eigenspace of A is exactly the lambda-eigenspace of $S_1$. That determines $S_1$ to be scalar lambda on every primary space, so $S_1=S$ and $N_1=N$.

**Self-assessment rubric**

- Apply Chinese remainders with the full primary exponents and define both polynomial parts.
- Verify commutation, semisimplicity and nilpotence on all primary summands.
- Analyze an arbitrary commuting decomposition on its semisimple eigenspaces.
- Identify those eigenspaces with the generalized eigenspaces of A and conclude uniqueness.

</details>
