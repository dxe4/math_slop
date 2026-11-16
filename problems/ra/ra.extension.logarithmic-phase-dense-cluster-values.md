# Use integer rounding to realize every phase limit

*Medium · [Real analysis](index.md)*

Prove the set of subsequential limits of $a_n=\sin(\log n)$, n&gt;=1, is exactly \[-1,1\]. Construct strictly increasing integer indices for any chosen value in that interval.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose a phase theta with sin(theta) equal to the desired value.

</details>

<details>
<summary>Hint 2</summary>

Round exp(2\*pi\*k+theta) to a nearby integer and estimate its relative rounding error.

</details>

<details>
<summary>Model proof</summary>

Exponential index growth makes integer rounding invisible to logarithmic phase.

1. Every term lies in \[-1,1\], so no subsequential limit can lie outside this closed interval. Given c in \[-1,1\], choose theta in \[0,2\*pi\] with sin(theta)=c.
2. Let n\_k be the nearest positive integer to exp(2\*pi\*k+theta), for sufficiently large k. The rounding error has absolute value at most one half, so n\_k/exp(2\*pi\*k+theta) tends to one and log(n\_k)-(2\*pi\*k+theta) tends to zero.
3. These indices are strictly increasing for all sufficiently large k because the unrounded values grow by factor exp(2\*pi). Discard a finite beginning and reindex. Continuity and periodicity of sine give sin(log n\_k) tending to c.

**Self-assessment rubric**

- Exclude values outside the closed trigonometric range.
- Control relative rounding and obtain the intended logarithmic phase.
- Ensure strictly increasing indices and derive every requested limit.

</details>
