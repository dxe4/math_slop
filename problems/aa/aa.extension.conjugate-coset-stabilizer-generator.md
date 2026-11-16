# Compute the stabilizer at a moved coset

*Easy · [Abstract algebra problems](index.md)*

Let G=S3 and H=&lt;(12)&gt;. In the left action on G/H, the stabilizer of gH is gHg^(-1). For g=(123), enter the image vector of the nonidentity stabilizer element, in the order $1,2,3$.

```answer
{"answer":{"kind":"vector","expected":["1","3","2"],"checker_scope":"Exact requested finite action quantity only; no general action proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Conjugation sends a transposition's two labels through g.

</details>

<details>
<summary>Hint 2</summary>

The image vector lists outputs, not cycle labels.

</details>

<details>
<summary>Worked solution</summary>

Moving the point conjugates its stabilizer.

1. Conjugating (12) by (123) gives (g(1),g(2))=(23).
2. This transposition fixes one and exchanges two and three.
3. Its image vector is \[1,3,2\].

</details>
