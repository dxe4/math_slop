# Find the first half-integer mode from mixed boundary data

*Easy · [Differential equations problems](index.md)*

For $-y''=\lambda y$ on \[0,pi\], impose y(0)=0 and y'(pi)=0. Find the smallest eigenvalue.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested spectral quantity or trial bound only; no general spectral proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The first condition selects a sine for positive eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

The second requires a cosine zero at the right endpoint.

</details>

<details>
<summary>Worked solution</summary>

Mixed boundary data shift the fundamental frequency by a half step.

1. For lambda=k^2&gt;0, y(0)=0 gives y=C\*sin(k\*t). The right condition gives cos(k\*pi)=0.
2. The smallest positive k is 1/2, hence lambda=1/4.
3. Zero gives only the zero affine solution, and negative lambda gives a hyperbolic sine with nonzero terminal derivative unless its coefficient vanishes. Thus 1/4 is the smallest eigenvalue.

</details>
