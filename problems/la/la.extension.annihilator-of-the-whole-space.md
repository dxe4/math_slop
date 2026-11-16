# Identify the zero dual subspace

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. For a five-dimensional real vector space $V$, find $\dim V^0$, where $V^0=\{f\in V^*:f(v)=0\text{ for every }v\in V\}$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

The vanishing condition applies to every input vector.

</details>

<details>
<summary>Hint 2</summary>

It applies in particular to every member of a basis.

</details>

<details>
<summary>Worked solution</summary>

Annihilating the whole space leaves no functional freedom.

1. Every admitted functional has value zero on a basis of $V$.
2. Linearity then makes it the zero functional on the entire space.
3. The annihilator is the zero subspace and has dimension zero.

</details>
