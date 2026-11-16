# Compute an attained uniform error despite pointwise convergence

*Hard · [Real analysis](index.md)*

For $f_n(x)=nx/(1+n^2x^2)$ on the real line, find sup over x of \|f\_n(x)\| for any fixed positive integer n. The proposed pointwise limit is zero.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Substitute u=n x to remove the index from the maximization.

</details>

<details>
<summary>Hint 2</summary>

The inequality 2\|u\|&lt;=1+u^2 is sharp at \|u\|=1.

</details>

<details>
<summary>Worked solution</summary>

The maximizing location moves with n, which pointwise control does not prevent.

1. Writing u=nx gives error \|u\|/(1+u^2).
2. The nonnegative square (\|u\|-1)^2 shows this is at most one half, with equality when \|u\|=1.
3. Thus the supremum is exactly one half, attained at x=1/n and x=-1/n; the nonvanishing errors exclude uniform convergence to zero.

</details>
