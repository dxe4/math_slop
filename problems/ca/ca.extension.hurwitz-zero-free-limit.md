# Prove the zero-free limit alternative using a small contour

*Hard · [Complex analysis problems](index.md)*

Let zero-free holomorphic functions f\_n on a connected domain converge locally uniformly to f. Prove that $f$ is either identically zero or zero-free. You may use Rouche's theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

If the nonzero limit had a zero, isolate it with a small circle.

</details>

<details>
<summary>Hint 2</summary>

Uniform convergence on that circle is exactly the estimate Rouche needs.

</details>

<details>
<summary>Model proof</summary>

A zero of a nontrivial limit would force nearby zeros in the approximating functions.

1. The locally uniform limit is holomorphic. If it is not identically zero, any zero a is isolated by the identity theorem.
2. Choose a small closed disk about a inside the domain with no zero of f on its boundary. The positive minimum m of \|f\| on that circle exists.
3. For all large n, \|f\_n-f\|&lt;m on the circle. Rouche's theorem then gives f\_n the same positive number of zeros as f inside, counted with multiplicity, contradicting that f\_n is zero-free.

**Self-assessment rubric**

- Use connectedness and nontriviality to isolate a proposed zero.
- Obtain a positive contour minimum and a uniform approximation bound.
- Transfer the positive zero count and contradict zero-freeness.

</details>
