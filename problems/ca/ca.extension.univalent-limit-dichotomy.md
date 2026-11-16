# Preserve injectivity under a nonconstant locally uniform limit

*Medium · [Complex analysis problems](index.md)*

Suppose injective holomorphic functions f\_n on a connected domain converge locally uniformly to f. Prove $f$ is either constant or injective. You may use Hurwitz's zero-free-limit theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Fix a point a and divide f\_n(z)-f\_n(a) by z-a, removing the singularity at a.

</details>

<details>
<summary>Hint 2</summary>

Local uniform convergence includes convergence of the derivatives at a.

</details>

<details>
<summary>Model proof</summary>

Divided differences convert injectivity into a zero-free property.

1. The limit f is holomorphic. Assume it is not constant and fix a in the domain. Define G\_n(z)=(f\_n(z)-f\_n(a))/(z-a), with removable value f\_nprime(a) at a.
2. Each G\_n is zero-free: injectivity handles z different from a, and an injective holomorphic function has nonzero derivative at a. Cauchy's formula gives local uniform convergence G\_n to the analogous holomorphic G built from f, including at a.
3. Since f is not constant, G is not identically zero. Hurwitz implies G is zero-free, so f(z) differs from f(a) whenever z differs from a. As a was arbitrary, f is injective.

**Self-assessment rubric**

- Define and justify the divided differences at the chosen point.
- Establish zero-freeness and locally uniform convergence including the central value.
- Apply Hurwitz and use an arbitrary basepoint to obtain injectivity.

</details>
