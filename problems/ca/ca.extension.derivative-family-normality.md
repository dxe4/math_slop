# Pass local bounds to a derivative family

*Medium · [Complex analysis problems](index.md)*

Let a family F of holomorphic functions on a domain be locally uniformly bounded. Prove the family of derivatives $\{f':f\in F\}$ is locally uniformly bounded and hence normal. You may use Cauchy's estimate and Montel's local-boundedness theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Surround a compact set by disks whose radii stay uniformly away from the domain boundary.

</details>

<details>
<summary>Hint 2</summary>

Obtain a single bound on a slightly larger compact neighborhood.

</details>

<details>
<summary>Model proof</summary>

Cauchy estimates transfer a common local bound to a common derivative bound.

1. Fix a compact K in the domain. Choose delta&gt;0 so its closed delta-neighborhood K\_delta is compactly contained in the domain; local uniform boundedness and a finite cover give a common bound M for all f on K\_delta.
2. For every z in K, Cauchy's derivative estimate on the circle centered at z of radius delta/2 gives \|fprime(z)\|&lt;=2M/delta, uniformly in f.
3. Thus the derivative family is locally uniformly bounded. Montel's theorem applied to that family gives normality with finite holomorphic subsequential limits.

**Self-assessment rubric**

- Choose a uniformly available compact neighborhood and common family bound.
- Use a radius independent of both z in K and f.
- Apply the stated normality theorem to the derivative family.

</details>
