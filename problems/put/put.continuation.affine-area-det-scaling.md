# Affine area det scaling

*Hard · [Original Putnam-style training](index.md)*

For invertible linear $T:\mathbb R^2\to\mathbb R^2$, prove every triangle area scales by $|\det T|$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Express triangle area as half an edge-vector determinant.

</details>

<details>
<summary>Hint 2</summary>

Apply determinant multiplicativity to the transformed edges.

</details>

<details>
<summary>Model proof</summary>

Taking absolute values and dividing by two gives image area $|\det T|$ times original area.

1. For vertices $A,B,C$, the area is $\frac12|\det(B-A,C-A)|$.
2. After $T$, edge vectors are $T(B-A)$ and $T(C-A)$; their determinant is $\det(T)\det(B-A,C-A)$.
3. Taking absolute values and dividing by two gives image area $|\det T|$ times original area.

**Self-assessment rubric**

- Represent original triangle area by edge-vector determinant.
- Apply T to both edge vectors and determinant multiplicativity.
- Take absolute value and conclude area scales by \|det T\|.

</details>
