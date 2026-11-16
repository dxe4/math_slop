# Split a real primary module after complexification

*Medium · [Linear algebra problems](index.md)*

Work first over $\mathbb R$. A real operator on dimension four has minimal polynomial $(t^2+1)^2$. After extending scalars to $\mathbb C$, return \[size of the Jordan block at i, size of the Jordan block at minus i\]. All coordinates are dimensionless.

```answer
{"answer":{"kind":"vector","expected":["2","2"],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The minimal polynomial already has the full space dimension, so the real module is cyclic.

</details>

<details>
<summary>Hint 2</summary>

Over the complex field the two coprime factors each retain exponent two.

</details>

<details>
<summary>Worked solution</summary>

Separate scalar extension from replacing the operator by a smaller one.

1. The minimal polynomial has degree four, equal to the dimension, so the rational canonical representation is the cyclic module $\mathbb R[t]/((t^2+1)^2)$.
2. After complexification the Chinese remainder decomposition is $\mathbb C[t]/((t-i)^2)\oplus\mathbb C[t]/((t+i)^2)$.
3. Each cyclic primary summand is one Jordan block of size two at its indicated eigenvalue, giving $[2,2]$.

</details>
