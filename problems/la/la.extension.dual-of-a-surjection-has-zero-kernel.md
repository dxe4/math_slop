# Read the injectivity of a pullback from surjectivity

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. If $T:V\to W$ is onto, find $\dim\ker T^*$, where $T^*(f)=f\circ T$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

A functional in the kernel vanishes on every output of $T$.

</details>

<details>
<summary>Hint 2</summary>

Every vector of $W$ is such an output.

</details>

<details>
<summary>Worked solution</summary>

Surjectivity turns zero pullback into a zero functional.

1. If $f\circ T=0$, then $f(Tv)=0$ for every $v\in V$.
2. Onto-ness makes these vectors cover all of $W$, so $f=0$.
3. The dual map is injective and its kernel dimension is zero.

</details>
