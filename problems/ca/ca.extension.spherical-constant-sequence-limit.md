# Separate spherical convergence from finite Euclidean convergence

*Medium · [Complex analysis problems](index.md)*

For the constant holomorphic functions $f_n(z)=n$ on a nonempty domain, prove that f\_n tends uniformly to infinity in the chordal metric but no subsequence converges locally uniformly to a finite holomorphic function in the Euclidean metric.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The chordal error is independent of the point z.

</details>

<details>
<summary>Hint 2</summary>

A single point already rules out a finite Euclidean limit.

</details>

<details>
<summary>Model proof</summary>

The target metric changes which limits are available.

1. For every z, the chordal distance from f\_n(z) to infinity is 1/sqrt(1+n^2), which tends to zero independently of z. This proves even global uniform spherical convergence.
2. If a subsequence converged locally uniformly in the Euclidean metric to a finite holomorphic function g, its values at any fixed point z\_0 would converge to the finite number g(z\_0).
3. Those values are the increasing positive integers of the subsequence and cannot have a finite limit. Thus such Euclidean convergence is impossible.

**Self-assessment rubric**

- Compute a bound independent of z that tends to zero.
- Reduce any proposed Euclidean local limit to convergence at one point.
- Explain why no subsequence of the constants has that finite limit.

</details>
