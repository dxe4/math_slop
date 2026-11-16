# Explain why a divergent linear zero sequence needs a canonical factor

*Medium · [Complex analysis problems](index.md)*

Prove that $P(z)=\prod_{n=1}^{\infty}(1+z/n)e^{-z/n}$ defines an entire function with exactly the simple zeros -1,-2,... and P(0)=1. Explain how the exponential factor repairs the divergent first-order logarithmic term.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Expand log(1+w)-w, rather than log(1+w) alone.

</details>

<details>
<summary>Hint 2</summary>

The repaired tail is summable uniformly on compact sets.

</details>

<details>
<summary>Model proof</summary>

Canonical factors cancel the nonsummable linear logarithmic contribution.

1. On \|z\|&lt;=R choose n&gt;2R and the logarithm near one. Then log(1+z/n)-z/n is bounded in modulus by a constant depending on R times 1/n^2, from its Taylor series beginning at degree two.
2. This logarithmic tail converges uniformly, so its exponential is nonvanishing and the full product is a locally uniform entire limit. The removed linear term z/n would otherwise have a divergent harmonic sum.
3. The exponential factors have no zeros. Isolating a factor at z=-m shows a simple zero there, and the nonvanishing tail excludes any other zero. At z=0 every factor is one.

**Self-assessment rubric**

- Identify exactly the first-order term removed by the exponential.
- Give a compact-uniform summable logarithmic bound.
- Control zero locations, multiplicities and the value at zero.

</details>
