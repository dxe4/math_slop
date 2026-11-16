# Prove pointwise convergence with a point-dependent threshold

*Hard · [Real analysis](index.md)*

On the real line define $f_n(x)=nx/(1+n^2x^2)$. Prove f\_n tends pointwise to zero, handling x=0 separately and giving a sufficient threshold for each fixed nonzero x and tolerance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The point x=0 has exactly zero error for every n.

</details>

<details>
<summary>Hint 2</summary>

For fixed nonzero x, bound the denominator below by n squared times x squared.

</details>

<details>
<summary>Model proof</summary>

A fixed-input estimate may legitimately depend on that input in pointwise convergence.

1. At x=0 the function value is zero for every index.
2. For fixed x!=0, \|f\_n(x)\|&lt;=1/(n\|x\|). Given epsilon&gt;0, choose N&gt;1/(epsilon\|x\|).
3. For n&gt;=N the error is below epsilon, proving pointwise convergence. This estimate depends on the fixed input, so it makes no uniform-convergence claim.

**Self-assessment rubric**

- Treat the exceptional zero input without division by zero.
- Derive a valid bound for every fixed nonzero input.
- Give a sufficient threshold and identify its allowed pointwise dependencies.

</details>
