# Order of a rotated reflection

*Medium · [Abstract algebra problems](index.md)*

In the symmetry group of a regular pentagon, let $r$ be a rotation through $72$ degrees and $s$ a reflection, with $srs=r^{-1}$. Find the order of $r^2s$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Use the conjugation relation to move a reflection past a power of the rotation.

</details>

<details>
<summary>Hint 2</summary>

After squaring the element, also rule out that the element itself is the identity.

</details>

<details>
<summary>Worked solution</summary>

The conjugation relation cancels the rotation when the element is squared.

1. From the relation, $sr^2=r^{-2}s$ and $s^2=e$.
2. Therefore $(r^2s)^2=r^2sr^2s=r^2r^{-2}s^2=e$.
3. The element is not the identity: that would make the reflection a rotation. Hence its order is $2$.

</details>
