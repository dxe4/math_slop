# Prove density from the removable reciprocal obstruction

*Hard · [Complex analysis problems](index.md)*

If f has an essential isolated singularity at zero, prove the image of every punctured neighborhood of zero is dense in $\mathbb C$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A missing open disk gives a bounded reciprocal of a shifted function.

</details>

<details>
<summary>Hint 2</summary>

Analyze separately whether its removable extension is zero at the center.

</details>

<details>
<summary>Model proof</summary>

A non-dense image would convert an essential singularity into a meromorphic one.

1. If some punctured-neighborhood image were not dense, it would omit an open disk centered at a with radius delta&gt;0. The function u=1/(f-a) would then be holomorphic and bounded by 1/delta there.
2. By the removable-singularity theorem, u extends holomorphically across zero. It is not identically zero. If u(0) is nonzero, f=a+1/u extends holomorphically; if u(0)=0, its finite-order zero makes f meromorphic with a pole.
3. Both alternatives contradict essentiality. Thus no open disk can be missing from the closure of any such image, proving density.

**Self-assessment rubric**

- Translate failure of density into a uniform lower bound on a shifted function.
- Construct the bounded reciprocal and apply removability.
- Treat its possible central values and derive a removable or pole contradiction.

</details>
