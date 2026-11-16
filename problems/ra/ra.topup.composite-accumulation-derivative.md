# Combine the fundamental theorem with the upper-limit chain rule

*Medium · [Real analysis](index.md)*

For $F(x)=\int_1^{x^2}(t^3+1)\,dt$, find Fprime(2).

```answer
{"answer":{"kind":"integer","expected":"260","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The integrand is continuous, so differentiate the accumulation at its current upper limit.

</details>

<details>
<summary>Hint 2</summary>

Multiply by the derivative of that upper limit.

</details>

<details>
<summary>Worked solution</summary>

The accumulation derivative is evaluated at the transformed endpoint before the chain factor is applied.

1. The fundamental theorem and chain rule give Fprime(x)=((x^2)^3+1)2x.
2. At x=2 the upper limit is four and the integrand value is sixty-five.
3. Multiplying by the chain factor four gives Fprime(2)=260.

</details>
