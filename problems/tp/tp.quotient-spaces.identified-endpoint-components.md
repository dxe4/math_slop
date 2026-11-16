# Connectedness after identifying interval endpoints

*Medium · [Topology problems](index.md)*

Give $[0,1]$ its usual topology, and form the quotient identifying $0$ with $1$ while leaving all other points distinct. How many connected components does the quotient have?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The natural quotient map is continuous and surjective.

</details>

<details>
<summary>Hint 2</summary>

Use connectedness of the interval and the continuous-image theorem.

</details>

<details>
<summary>Worked solution</summary>

Identifying points by a quotient cannot disconnect the continuous image of a connected space.

1. The interval is connected.
2. The quotient map is a continuous surjection, so its whole image, the quotient space, is connected.
3. The quotient is nonempty and therefore has exactly $1$ connected component.

</details>
