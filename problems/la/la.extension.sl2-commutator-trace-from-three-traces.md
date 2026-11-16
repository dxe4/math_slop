# Recover a commutator trace through characteristic identities

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $A,B\in SL_2(\mathbb R)$ satisfy $\operatorname{tr}A=\operatorname{tr}B=\operatorname{tr}(AB)=3$. Find $\operatorname{tr}(ABA^{-1}B^{-1})$.

```answer
{"answer":{"kind":"integer","expected":-2,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Cayley-Hamilton expresses each inverse as its trace times the identity minus the matrix.

</details>

<details>
<summary>Hint 2</summary>

After expanding, reduce the traces involving $A^2$, $B^2$ and $(AB)^2$ by their own characteristic identities.

</details>

<details>
<summary>Worked solution</summary>

Three coupled trace identities reduce a noncommutative expression to scalars.

1. Write $x=\operatorname{tr}A$, $y=\operatorname{tr}B$, $z=\operatorname{tr}(AB)$. Determinant one gives $A^{-1}=xI-A$, $B^{-1}=yI-B$.
2. Expanding inside the trace gives $xyz-x\operatorname{tr}(AB^2)-y\operatorname{tr}(A^2B)+\operatorname{tr}((AB)^2)$, using cyclicity for $ABA$.
3. The characteristic identities give $\operatorname{tr}(AB^2)=yz-x$, $\operatorname{tr}(A^2B)=xz-y$ and $\operatorname{tr}((AB)^2)=z^2-2$. The result is $x^2+y^2+z^2-xyz-2$.
4. At $x=y=z=3$ this is $27-27-2=-2$. The supplied trace data are consistent, for example with $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ and $B=\begin{pmatrix}2&-1\\-1&1\end{pmatrix}$.

</details>
