# Combine a convergent geometric expansion with a nonzero Fourier weight

*Hard · [Complex analysis problems](index.md)*

For a primitive eighth root zeta, find $\sum_{k=0}^{7}\zeta^{3k}/(2-\zeta^k)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":32,"denominator":255},"checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Expand the denominator as a convergent geometric series on the unit circle.

</details>

<details>
<summary>Hint 2</summary>

The root sum survives only when its total exponent is divisible by eight.

</details>

<details>
<summary>Worked solution</summary>

A nonzero root weight shifts which terms survive the reciprocal expansion.

1. For each root u, 1/(2-u)=the sum of u^j/2^(j+1) for j&gt;=0, absolutely convergent because \|u\|=1. Multiplication by u cubed shifts the root exponent to j+3.
2. Summing over the eight roots keeps exactly j=5+8m, with root sum eight. The desired sum is therefore the sum of 8/2^(6+8m) for m&gt;=0.
3. This geometric sum is (1/8)/(1-1/256)=32/255. The finite root sum and the absolutely convergent expansion may be interchanged.

</details>
