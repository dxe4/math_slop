# Use derivative data at the composed input

*Medium · [Calculus](index.md)*

Suppose $g(5)=2$, gprime(5)=7, f(2)=3 and fprime(2)=-4. Find the derivative of f(g(x)) at x=5. Assume the indicated derivatives exist.

```answer
{"answer":{"kind":"integer","expected":"-28","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The outer derivative is evaluated at g(5), not at five.

</details>

<details>
<summary>Hint 2</summary>

The value f(2) is not itself the outer derivative.

</details>

<details>
<summary>Worked solution</summary>

Composition uses the inner value to choose which derivative datum applies.

1. At x=5, the inner input to f is g(5)=2.
2. The chain rule multiplies fprime(2) by gprime(5).
3. Thus the derivative is negative four times seven, or negative twenty-eight.

</details>
