# A repeated output does not prevent surjectivity

*Easy · [Set theory](index.md)*

Let $f:\{a,b,c\}\to\{0,1\}$ have $f(a)=0$, $f(b)=1$, $f(c)=1$. Among the standard properties injective and surjective, enter every property that holds as a set.

```answer
{"answer":{"kind":"set","expected":"{surjective}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Look for two distinct inputs with the same output.

</details>

<details>
<summary>Hint 2</summary>

Separately check whether every declared codomain element occurs.

</details>

<details>
<summary>Worked solution</summary>

The two function properties must be checked separately.

1. Distinct inputs $b,c$ share the output $1$, so injectivity fails.
2. Both $0$ and $1$ are reached, so the function is surjective.
3. The property set is therefore $\{\mathrm{surjective}\}$, and the function is not bijective.

</details>
