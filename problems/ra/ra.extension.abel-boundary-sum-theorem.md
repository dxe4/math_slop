# Pass from an ordinary series sum to its radial generating limit

*Hard · [Real analysis](index.md)*

If the real series sum from n=0 to infinity of a\_n converges to S, prove $\lim_{r\uparrow1}\sum_{n=0}^{\infty}a_n r^n=S$. Justify the generating series and use summation by parts rather than exchanging two uncontrolled limits.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use the bounded partial sums A\_n and the identity sum a\_n\*r^n=(1-r)\*sum A\_n\*r^n.

</details>

<details>
<summary>Hint 2</summary>

Split A\_n-S into a fixed beginning and a uniformly small tail.

</details>

<details>
<summary>Model proof</summary>

Geometric weights turn convergent partial sums into a controlled averaging kernel.

1. Convergence of sum a\_n makes both the terms and partial sums bounded. Hence for each 0&lt;=r&lt;1 the series sum a\_n\*r^n and sum A\_n\*r^n converge absolutely. Finite summation by parts, with its boundary term tending to zero, gives sum a\_n\*r^n=(1-r)\*sum A\_n\*r^n.
2. Subtract S=(1-r)\*sum S\*r^n. Given epsilon&gt;0, choose N with \|A\_n-S\|&lt;epsilon for n&gt;=N. The weighted tail error is at most epsilon\*(1-r)\*sum\_(n=N)^infinity r^n&lt;=epsilon.
3. The finite beginning, multiplied by 1-r, tends to zero as r increases to one. Thus the limsup error is at most epsilon for every epsilon, proving the stated limit.

**Self-assessment rubric**

- Establish convergence and the summation-by-parts identity with the endpoint term controlled.
- Use one tail bound on all partial sums beyond a fixed index.
- Control the fixed beginning and then remove the arbitrary tolerance.

</details>
