# Each output used exactly once

*Easy · [Set theory](index.md)*

Let $f:\{a,b,c\}\to\{1,2,3\}$ have $f(a)=1$, $f(b)=3$, $f(c)=2$. Among the standard properties injective and surjective, enter every property that holds as a set.

```answer
{"answer":{"kind":"set","expected":"{injective,surjective}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Compare the outputs of distinct inputs.

</details>

<details>
<summary>Hint 2</summary>

Check the entire declared codomain rather than only the values in the displayed range.

</details>

<details>
<summary>Worked solution</summary>

Injectivity concerns collisions and surjectivity concerns the declared codomain.

1. The three inputs have distinct outputs, so $f$ is injective.
2. Every member of the codomain $\{1,2,3\}$ is reached, so $f$ is surjective.
3. Both properties hold; equivalently, $f$ is bijective.

</details>
