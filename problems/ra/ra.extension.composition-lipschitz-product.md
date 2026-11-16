# Track two different moduli through a composition

*Easy · [Real analysis](index.md)*

A map g is 3-Lipschitz and a map f on its range is 2-Lipschitz. What Lipschitz constant does the standard composition estimate give for $f\circ g$?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact requested local variation or sufficient modulus only; no full continuity argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Apply the outer estimate first.

</details>

<details>
<summary>Hint 2</summary>

Then bound the inner output distance by its own input distance.

</details>

<details>
<summary>Worked solution</summary>

The constants multiply because the two distance estimates are nested.

1. One has \|f(g(x))-f(g(y))\|&lt;=2\*\|g(x)-g(y)\|.
2. The inner estimate is \|g(x)-g(y)\|&lt;=3\*\|x-y\|.
3. Combining gives constant 2\*3=6; this is a guaranteed constant, without a claim of sharpness for unspecified maps.

</details>
