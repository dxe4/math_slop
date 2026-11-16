# Turn infinite-order local decay into global rigidity

*Hard · [Complex analysis problems](index.md)*

Let f be holomorphic on a connected domain containing zero. Suppose that for every positive integer N there are constants C\_N and delta\_N&gt;0 such that $|f(z)|\le C_N|z|^N$ whenever \|z\|&lt;delta\_N. Prove f is identically zero on the domain.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Fix a Taylor index and choose a decay exponent larger than that index.

</details>

<details>
<summary>Hint 2</summary>

Use arbitrarily small Cauchy circles, then use connectedness only after local vanishing.

</details>

<details>
<summary>Model proof</summary>

Infinite-order analytic flatness forces every Taylor coefficient to vanish.

1. Fix k&gt;=0 and choose N=k+1. On sufficiently small circles of radius r, Cauchy's coefficient estimate gives \|a\_k\|&lt;=C\_(k+1)\*r^(k+1)/r^k=C\_(k+1)\*r.
2. Letting r tend to zero proves a\_k=0. This works for every Taylor coefficient, so f vanishes on a neighborhood of zero.
3. The identity theorem on the connected domain then gives f identically zero.

**Self-assessment rubric**

- Choose a decay order strictly larger than a fixed Taylor index.
- Apply Cauchy's estimate and take the radius to zero.
- Pass from local Taylor vanishing to the connected domain.

</details>
