# Use spherical derivative bounds and local target charts

*Hard · [Complex analysis problems](index.md)*

Let F be meromorphic functions on a connected plane domain. Their spherical derivatives are $f^\#=|f'|/(1+|f|^2)$, extended through poles using 1/f. Suppose f# is bounded uniformly over F on each compact subset. Prove every sequence has a locally uniformly chordal-convergent subsequence whose limit is meromorphic or identically infinity. You may use Arzela-Ascoli and the fact that chordal distance is bounded by the spherical length integral.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use derivative bounds for equicontinuity with values in the compact sphere.

</details>

<details>
<summary>Hint 2</summary>

After extraction, work in a finite chart near a finite limit value and in the reciprocal chart near infinity.

</details>

<details>
<summary>Model proof</summary>

Target charts turn metric compactness into meromorphic compactness.

1. On small disks compactly in the domain, uniform bounds on f# control the spherical lengths of images of straight segments. The family is therefore equicontinuous in chordal distance on each compact set. The sphere is compact, so Arzela-Ascoli and a diagonal exhaustion give a locally uniform chordal limit F, continuous as a sphere-valued map.
2. If F(a) is finite, continuity keeps F in a bounded finite chart near a. Uniform chordal convergence keeps all sufficiently late f\_n in a common bounded finite chart on a smaller neighborhood. There they have no poles and converge in the Euclidean metric to a holomorphic function. If F(a) is infinity, the same argument applied to 1/f\_n gives a holomorphic reciprocal chart near a.
3. If the reciprocal chart is not identically zero, its isolated zeros describe poles of F. If F equals infinity on an open set, the identity theorem in reciprocal charts shows that this open infinity set is also closed: every boundary point has a reciprocal chart vanishing on a nonempty open subset. Connectedness then forces F identically infinity. Otherwise the local charts give a meromorphic F.

**Self-assessment rubric**

- Derive local chordal equicontinuity and extract one continuous sphere-valued limit.
- Explain why finite or reciprocal coordinates give ordinary holomorphic limits.
- Handle an identically zero reciprocal chart using connectedness and the identity theorem.

</details>
