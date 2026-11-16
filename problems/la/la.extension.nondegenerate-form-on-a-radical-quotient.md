# Remove a radical and record the remaining inertia

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. On $\mathbb R^3$ use $B(u,v)=u_1v_1-u_3v_3$. Return \[dimension of the quotient by the radical, positive index, negative index\] for its induced nondegenerate form.

```answer
{"answer":{"kind":"vector","expected":["2","1","1"],"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

A radical vector pairs to zero with every test vector.

</details>

<details>
<summary>Hint 2</summary>

The surviving first and third coordinate directions have opposite signs.

</details>

<details>
<summary>Worked solution</summary>

Quotienting a degenerate form removes exactly its invisible direction.

1. Testing against the first and third coordinate vectors shows the radical consists of vectors with $u_1=u_3=0$, namely the second coordinate line.
2. The quotient therefore has dimension two, represented by the first and third coordinate classes.
3. The induced matrix is $\operatorname{diag}(1,-1)$, so its positive and negative indices are each one.

</details>
