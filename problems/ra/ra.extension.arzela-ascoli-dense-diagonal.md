# Build sup-norm compactness from pointwise extraction and a finite net

*Hard · [Real analysis](index.md)*

Prove every uniformly bounded equicontinuous sequence in $C([a,b])$ has a uniformly convergent subsequence with continuous limit. Use a countable dense set, Bolzano-Weierstrass and a finite-net argument; do not cite Arzela-Ascoli itself.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Extract convergence at countably many dense points by a diagonal subsequence.

</details>

<details>
<summary>Hint 2</summary>

Equicontinuity turns finitely many nearby dense samples into a uniform Cauchy estimate.

</details>

<details>
<summary>Model proof</summary>

Dense-point compactness becomes function-space compactness only through a common modulus.

1. Enumerate a countable dense subset of \[a,b\]. Uniform boundedness and Bolzano-Weierstrass give a subsequence converging at its first point; extract successively at each later point and choose the diagonal subsequence. It converges at every dense sample.
2. For epsilon&gt;0, equicontinuity and a finite neighborhood subcover of the compact interval give a single delta so every function changes by less than epsilon/3 over distances below delta. Compactness gives a finite delta-net chosen from the dense set. At these finitely many points the extracted values are Cauchy with one common index threshold and error below epsilon/3.
3. For any x choose a nearby net point. Two equicontinuity errors and the sample error show the subsequence uniformly Cauchy. Completeness of the real numbers gives a pointwise limit, the same estimate makes convergence uniform, and the uniform limit of continuous functions is continuous.

**Self-assessment rubric**

- Construct one subsequence with convergence at every point of the dense set.
- Use equicontinuity and compactness for one finite uniform approximation net.
- Prove a full sup-norm Cauchy bound and continuous limit.

</details>
