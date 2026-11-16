# Evaluate a complex-linear form without conjugation

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb C$ with the algebraic complex-linear dual, not a conjugate-linear identification. For $f(z_1,z_2)=z_1+iz_2$, compute $f(i,1)$.

```answer
{"answer":{"kind":"complex","expected":"2i","checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

The algebraic functional is complex linear in its input.

</details>

<details>
<summary>Hint 2</summary>

Substitute the coordinates directly; no conjugation occurs in this formula.

</details>

<details>
<summary>Worked solution</summary>

Keep algebraic duality separate from a Hermitian inner product.

1. The first input contributes $i$.
2. The second contributes $i\cdot1=i$.
3. The value is $2i$. A conjugated-coordinate expression would define a different kind of map.

</details>
