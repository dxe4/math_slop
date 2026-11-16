# Remove finitely many exceptional boundary values from a uniqueness argument

*Hard · [Complex analysis problems](index.md)*

Let u be a bounded real harmonic function on the unit disk. Suppose $u(r e^{it})\to0$ as r increases to one for every t except finitely many. Prove u is identically zero. You may use the Poisson formula on every smaller concentric disk.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Apply Poisson's formula for a fixed interior point using boundary circles of radius R.

</details>

<details>
<summary>Hint 2</summary>

For R close to one, the kernels are uniformly bounded; finitely many boundary exceptions have measure zero.

</details>

<details>
<summary>Model proof</summary>

Boundedness permits passage from almost-everywhere radial data to the interior value.

1. Fix z with \|z\|&lt;1 and choose R&gt;\|z\|. The smaller-disk Poisson formula gives u(z) as the integral of u(R\*e^(it)) against the Poisson kernel for z/R, divided by 2\*pi.
2. As R tends to one, z/R stays in a compact subdisk, so these kernels have a common finite bound. The functions u(R\*e^(it)) are bounded by the assumed global bound and tend to zero except at finitely many t.
3. Dominated convergence makes the integral zero. Since z was arbitrary, u vanishes throughout the disk.

**Self-assessment rubric**

- Use Poisson's formula before taking a boundary limit.
- Bound both the harmonic data and the moving kernels.
- Use the measure-zero exception set and dominated convergence.

</details>
