# Prove the Taylor little-o remainder from a pointwise highest derivative

*Hard · [Real analysis](index.md)*

Let n&gt;=2. Suppose f has derivatives through order n-1 on a neighborhood of zero and f^(n-1) is differentiable at zero. Prove $f(x)=\sum_{k=0}^n f^{(k)}(0)x^k/k!+o(|x|^n)$. Do not assume an nth derivative exists away from zero or use an integral nth-derivative remainder.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Subtract the stated polynomial so every derivative at zero through order n vanishes.

</details>

<details>
<summary>Hint 2</summary>

The highest available derivative is o(\|x\|); repeatedly apply the mean value theorem to descend to the function.

</details>

<details>
<summary>Model proof</summary>

Pointwise highest-order information propagates down through lower-order mean-value bounds.

1. Let P be the stated polynomial and g=f-P. Then g^(k)(0)=0 for 0&lt;=k&lt;=n, with the nth value understood at zero. Differentiability of g^(n-1) at zero gives g^(n-1)(x)=o(\|x\|).
2. Given epsilon&gt;0 choose delta so \|g^(n-1)(t)\|&lt;=epsilon\*\|t\| for \|t\|&lt;delta. Apply the mean value theorem to g^(n-2) between zero and t; since its value at zero is zero, \|g^(n-2)(t)\|&lt;=epsilon\*\|t\|^2. The theorem is legitimate because that derivative function is continuous on the segment and differentiable inside it.
3. Continue inductively: if \|g^(k+1)(s)\|&lt;=epsilon\*\|s\|^(n-k-1), the mean value theorem and g^(k)(0)=0 give \|g^(k)(t)\|&lt;=epsilon\*\|t\|^(n-k). At k=0 this is \|g(t)\|&lt;=epsilon\*\|t\|^n, proving the little-o claim without a neighborhood nth derivative.

**Self-assessment rubric**

- Define the polynomial and identify the exact pointwise highest-derivative information.
- Apply mean-value bounds only to derivatives that actually exist on the segment.
- Carry a uniform tolerance through all lower orders to the claimed remainder.

</details>
