# Prove the three-circle inequality without a multivalued power

*Hard · [Complex analysis problems](index.md)*

Let f be holomorphic on a neighborhood of the closed annulus $r_1\le|z|\le r_3$, where 0&lt;r\_1&lt;r\_2&lt;r\_3. Put M(r)=max on \|z\|=r of \|f(z)\|. Prove log M(r\_2) is at most the linear interpolation of log M(r\_1) and log M(r\_3) in the variable log r. Treat the identically zero case separately.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Subtract the radial harmonic function matching the two boundary logarithms.

</details>

<details>
<summary>Hint 2</summary>

Use the subharmonic maximum principle, allowing negative infinity at zeros.

</details>

<details>
<summary>Model proof</summary>

A harmonic logarithmic barrier avoids any need to define a fractional power globally.

1. If f is identically zero, the modulus version M(r\_2)&lt;=M(r\_1)^theta\*M(r\_3)^(1-theta) is immediate. Otherwise both boundary maxima are positive; a zero maximum on an entire circle would force f to vanish identically by the identity theorem.
2. Let h(z) be the affine function of log\|z\| taking values log M(r\_1) and log M(r\_3) on the two boundary circles. It is harmonic on the annulus.
3. The function log\|f\|-h is subharmonic, with value negative infinity permitted at zeros, and has boundary values at most zero. The subharmonic maximum principle gives log\|f(z)\|&lt;=h(z). Taking the maximum on radius r\_2 gives the claimed interpolation.

**Self-assessment rubric**

- Separate the zero function and justify positive boundary maxima otherwise.
- Construct the single-valued harmonic radial interpolation.
- Apply the correct maximum principle despite zeros and then take the circle maximum.

</details>
