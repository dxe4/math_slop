# Obstruct exponential type using Jensen's zero budget

*Hard · [Complex analysis problems](index.md)*

Suppose f is entire, f(0)=1, and f vanishes at both sqrt(n) and -sqrt(n) for every positive integer n. Prove that f cannot satisfy $|f(z)|\le C e^{A|z|}$ for any constants C,A&gt;0. You may use Jensen's formula.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

At radius R, count the prescribed zeros in the smaller disk of radius R/2.

</details>

<details>
<summary>Hint 2</summary>

Every such zero contributes at least log 2 to Jensen's sum.

</details>

<details>
<summary>Model proof</summary>

Quadratically many separated zeros force quadratic logarithmic growth.

1. For a radius R whose circle contains no zero of f, Jensen's formula gives log M(R) at least the sum of log(R/\|a\|) over its interior zeros, because f(0)=1. Such radii can be chosen arbitrarily large, since zeros are discrete.
2. The prescribed pairs with n&lt;=R^2/4 give at least 2\*floor(R^2/4) zeros in \|z\|&lt;=R/2. Each contributes at least log2, so log M(R)&gt;=(R^2/2-2)\*log2.
3. An exponential-type bound would instead give log M(R)&lt;=log C+A\*R. This contradicts the quadratic lower bound along the arbitrarily large allowed radii. Thus no such constants exist.

**Self-assessment rubric**

- Use Jensen at radii avoiding boundary zeros and explain their availability.
- Count both prescribed roots and their logarithmic contribution.
- Compare the resulting quadratic lower bound with a linear exponential-type upper bound.

</details>
