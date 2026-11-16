# Prove the pullback residue rule including essential singularities

*Hard · [Complex analysis problems](index.md)*

Let f be holomorphic on a punctured neighborhood of w=0 with any Laurent principal part, and let $g(z)=z^m h(z)$ near zero, m&gt;=1, h holomorphic and h(0) nonzero. Prove Res at zero of f(g(z))gprime(z) equals m times Res at zero of f(w). Include the essential-singularity case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose a small z-annulus whose image stays inside a compact punctured w-annulus.

</details>

<details>
<summary>Hint 2</summary>

Every Laurent monomial except the simple reciprocal becomes an exact derivative after the chain factor.

</details>

<details>
<summary>Model proof</summary>

Termwise integration treats finite and infinite principal parts uniformly.

1. Choose a sufficiently small punctured z-disk with no additional zero of g and with g-values inside the Laurent convergence region. On a fixed small circle its image is a compact set bounded away from w=0, so the Laurent series for f may be integrated termwise after composition.
2. For every exponent n not equal to negative one, g(z)^n gprime(z) is the derivative of g(z)^(n+1)/(n+1), a single-valued holomorphic function along the punctured contour, and has zero contour integral.
3. The simple reciprocal term contributes gprime/g=m/z+hprime/h, whose residue is m because h is nonvanishing. Multiplying by the original simple Laurent coefficient proves the formula.

**Self-assessment rubric**

- Isolate the zero of g and keep the composed contour in the Laurent domain.
- Justify termwise contour integration even for an infinite principal part.
- Show every nonresidue Laurent monomial contributes zero.
- Compute the simple reciprocal contribution with the full local multiplicity.

</details>
