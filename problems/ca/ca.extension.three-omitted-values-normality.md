# Combine rescaling and omitted-value rigidity

*Hard · [Complex analysis problems](index.md)*

Prove that a family of meromorphic functions on a plane domain omitting the same three distinct values of $\widehat{\mathbb C}$ is normal in the chordal metric. You may assume Zalcman's lemma (nonnormality produces a nonconstant meromorphic limit on the whole plane after affine source rescaling), meromorphic Little Picard (a nonconstant meromorphic function on the plane omits at most two sphere values), and Hurwitz's zero-free-limit theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A source rescaling preserves every omitted target value.

</details>

<details>
<summary>Hint 2</summary>

Show that a nonconstant spherical limit still omits each value, using a finite or reciprocal target chart.

</details>

<details>
<summary>Model proof</summary>

A nonnormal family would create a global function with forbidden omissions.

1. Assume the family is nonnormal at a point. Zalcman's lemma gives affine rescalings of selected functions converging locally uniformly chordally on the plane to a nonconstant meromorphic function g.
2. Each rescaled function omits the same three values. For any one value a, choose a Mobius target coordinate sending a to zero. If g attained a, this coordinate of g would be holomorphic and have an isolated zero on a small disk. On that disk the transformed approximants are eventually holomorphic, converge ordinarily, and are zero-free. Hurwitz would force the limit identically zero there, and hence g constant by the identity theorem, a contradiction. Thus g omits every a.
3. The nonconstant meromorphic g on the whole plane would omit three distinct sphere values, contradicting the stated Little Picard theorem. Therefore the original family is normal.

**Self-assessment rubric**

- Preserve the fixed omitted values through Zalcman rescaling.
- Justify preservation of each omission in a local target chart.
- Use the correct meromorphic omitted-value bound on the whole plane.

</details>
