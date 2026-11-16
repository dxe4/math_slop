# Prove polynomial approximation from finite binomial concentration

*Hard · [Real analysis](index.md)*

For continuous f on \[0,1\], define $B_nf(x)=\sum_{k=0}^n f(k/n)\binom nk x^k(1-x)^{n-k}$. Prove B\_n f converges uniformly to f. You may use that the nonnegative binomial weights sum to one and their weighted mean-square distance of k/n from x is x(1-x)/n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Split the weights into samples close to x and samples at least delta away.

</details>

<details>
<summary>Hint 2</summary>

Uniform continuity controls the close samples; the supplied second moment controls the far mass.

</details>

<details>
<summary>Model proof</summary>

A common modulus plus a uniform variance estimate yields constructive polynomial density.

1. Continuity on \[0,1\] gives a bound \|f\|&lt;=M and uniform continuity. For epsilon&gt;0 choose delta&gt;0 so \|f(u)-f(x)\|&lt;epsilon/2 when \|u-x\|&lt;delta.
2. In B\_n f(x)-f(x), the total close-sample contribution has modulus at most epsilon/2 because the weights sum to one. On the far samples use \|f(k/n)-f(x)\|&lt;=2M and bound their total weight by the weighted squared distance divided by delta^2.
3. The supplied identity bounds the far contribution by 2M\*x\*(1-x)/(n\*delta^2)&lt;=M/(2n\*delta^2), uniformly in x. For sufficiently large n this is below epsilon/2. Thus the total uniform error is below epsilon, proving the theorem.

**Self-assessment rubric**

- Obtain one boundedness and continuity budget for the whole interval.
- Split the finite weighted sum and control both error types.
- Use the second-moment identity and its common n threshold.

</details>
