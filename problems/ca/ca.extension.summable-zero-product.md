# Construct an entire function from summable linear factors

*Medium · [Complex analysis problems](index.md)*

Prove that $\prod_{n=1}^{\infty}(1+z/n^2)$ converges locally uniformly to an entire function whose zeros are exactly -n^2, each simple, and whose value at zero is one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

On a fixed compact set, choose the tail so every z/n^2 has modulus at most one half.

</details>

<details>
<summary>Hint 2</summary>

A normally convergent logarithmic tail is nonvanishing; analyze the finitely many earlier factors separately.

</details>

<details>
<summary>Model proof</summary>

Summability of the factor perturbations controls the product and its zeros.

1. Fix \|z\|&lt;=R and choose N so \|z/n^2\|&lt;=1/2 for n&gt;N. On this disk use the logarithm near one: \|log(1+z/n^2)\|&lt;=2R/n^2. The logarithmic tail converges uniformly, so its exponential converges uniformly and is nonzero.
2. Multiplication by the finite initial product gives a locally uniform limit of entire partial products. The limits agree on nested disks, yielding an entire function. At zero every factor equals one.
3. On a small neighborhood of -m^2, remove the single factor 1+z/m^2. All other finite factors and the logarithmic tail are nonzero there. Thus -m^2 is a simple zero, and the same reasoning away from these points excludes other zeros.

**Self-assessment rubric**

- Choose a uniform tail branch and prove compact uniform logarithmic convergence.
- Build consistent entire limits and check normalization.
- Separate the unique vanishing factor and exclude hidden zeros.

</details>
