# Identify a dual derivative action by endpoint data

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $D:P_3(\mathbb R)\to P_2(\mathbb R)$ be differentiation and $\ell(q)=\int_0^1q(x)\,dx$. Return the coefficient covector of $D^*\ell$ on the ordered basis $(1,x,x^2,x^3)$, meaning its four values on those basis vectors.

```answer
{"answer":{"kind":"vector","expected":["0","1","1","1"],"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

The dual map composes the integral functional with differentiation.

</details>

<details>
<summary>Hint 2</summary>

Either integrate each monomial derivative or use endpoint evaluation.

</details>

<details>
<summary>Worked solution</summary>

A pullback can turn an integral into an endpoint difference.

1. The pulled-back functional is $(D^*\ell)(p)=\int_0^1p^{\prime}(x)\,dx=p(1)-p(0)$.
2. It has value zero on the constant basis vector and one on each positive-degree monomial in the displayed list.
3. The resulting covector is $[0,1,1,1]$, with no conjugation because this is algebraic real duality.

</details>
