# Build analytic compactness from equicontinuity and a diagonal argument

*Hard · [Complex analysis problems](index.md)*

Prove Montel's theorem for a locally uniformly bounded family of holomorphic functions $f:D\to\mathbb C$ on a plane domain: every sequence has a locally uniformly convergent subsequence with holomorphic limit. You may use Arzela-Ascoli, Cauchy's formula and a compact exhaustion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Cauchy's derivative bound gives equicontinuity on each compact set.

</details>

<details>
<summary>Hint 2</summary>

Choose nested subsequences along a countable compact exhaustion, then use a diagonal subsequence.

</details>

<details>
<summary>Model proof</summary>

Local derivative control supplies compactness, and Cauchy's formula preserves analyticity.

1. Choose a compact exhaustion K\_j with each K\_j contained in the interior of K\_(j+1). Uniform bounds on the larger compact neighborhoods and Cauchy's derivative estimates give equicontinuity on every K\_j, as well as uniform boundedness there.
2. Arzela-Ascoli gives a subsequence converging uniformly on K\_1; extract from it one converging on K\_2, and continue. The diagonal subsequence converges uniformly on every K\_j, with consistent limits on overlaps, hence locally uniformly on the domain.
3. On each closed disk compactly inside the domain, pass to the limit in Cauchy's integral formula on a slightly larger circle. The resulting limit is holomorphic there, and therefore throughout the domain.

**Self-assessment rubric**

- Derive equicontinuity on compacts from bounds on larger neighborhoods.
- Construct one subsequence converging on the whole exhaustion.
- Use the integral formula to justify analyticity of the limit.

</details>
