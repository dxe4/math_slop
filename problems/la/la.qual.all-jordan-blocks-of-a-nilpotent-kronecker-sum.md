# Derive the complete nilpotent tensor-sum rule in characteristic zero

*Hard · [Linear algebra problems](index.md)*

Over $\mathbb C$, let $K=J_m(0)\otimes I_n+I_m\otimes J_n(0)$ with unit superdiagonals. Prove its Jordan block sizes are $m+n-1,m+n-3,\ldots,|m-n|+1$. Give a polynomial representation proof, including completeness of the proposed blocks, rather than quoting the tensor rule. Preparation: homogeneous polynomials and finite-dimensional operator decompositions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Realize a nilpotent block on degree-a binary forms by $E=x\partial_y$, with $a=m-1$. On two factors use the summed raising and lowering operators.

</details>

<details>
<summary>Hint 2</summary>

The vectors $(x_1y_2-y_1x_2)^k x_1^{a-k}x_2^{b-k}$ are highest-weight vectors. Separate their generated spaces by a commuting quadratic operator and count dimensions.

</details>

<details>
<summary>Model proof</summary>

Explicit polynomial chains and a separating operator prove both their lengths and their directness.

1. Put $a=m-1$, $b=n-1$ and use polynomials of bidegree (a,b) in the two coordinate pairs. Let $E=\sum x_i\partial_{y_i}$, $F=\sum y_i\partial_{x_i}$ and $H=\sum(x_i\partial_{x_i}-y_i\partial_{y_i})$. Direct differentiation gives $[E,F]=H$, $[H,E]=2E$, $[H,F]=-2F$. In divided-factorial monomial bases each factor E is one unit nilpotent Jordan block, so the summed E represents K.
2. For $0\le k\le\min(a,b)$ put $\Delta=x_1y_2-y_1x_2$, $w_k=\Delta^k x_1^{a-k}x_2^{b-k}$ and $L=a+b-2k$. One has $Ew_k=0$, $Hw_k=Lw_k$ and $F\Delta=0$. Thus $F^{L+1}w_k=0$. The commutators give $EF^jw_k=j(L-j+1)F^{j-1}w_k$; these nonzero characteristic-zero coefficients show the vectors through j=L form one E-chain of length L+1.
3. The span $W_k$ of that chain is stable under E,F,H. The operator $C=H^2+2H+4FE$ commutes with E,F,H by the displayed relations and acts on $W_k$ by the scalar $L(L+2)$, first on $w_k$ and then on all its F iterates.
4. The nonnegative L values are distinct, so the scalars $L(L+2)$ are distinct. Their eigenspaces make the $W_k$ a direct sum. The dimension sum is $\sum_{k=0}^{\min(a,b)}(a+b-2k+1)=(a+1)(b+1)=mn$, so these spaces fill the tensor product.
5. Each space contributes exactly one Jordan block of length $L+1=m+n-1-2k$. This yields precisely the stated list. Characteristic zero is used in the nonvanishing coefficients and the separating eigenvalues; the proof does not assert the same rule in small positive characteristic.

**Self-assessment rubric**

- Construct the raising/lowering operators and verify their relation to the original unit blocks.
- Check the highest vectors, the coefficient formula and exact chain lengths.
- Verify the commuting quadratic operator and its scalar on each generated space.
- Prove distinctness and the full dimension sum, not just existence of some chains.
- Extract the complete size list and identify the characteristic-zero assumptions.

</details>
