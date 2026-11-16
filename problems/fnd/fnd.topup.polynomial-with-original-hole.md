# Simplify a factored quotient without filling its hole

*Medium · [Foundations bridge](index.md)*

Simplify $[(x-2)(x+3)]/(x-2)$ to a polynomial rule p(x), and separately enter all original excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"x+3","domain":{"variable":"x","excluded":["2"]},"checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The common factor can be divided out only when it is nonzero.

</details>

<details>
<summary>Hint 2</summary>

The simplified rule and the original domain are two separate pieces of the answer.

</details>

<details>
<summary>Worked solution</summary>

An algebraic cancellation preserves values on the original domain and preserves its exclusion.

1. The original denominator vanishes exactly at x=2.
2. For every other real x, canceling x-2 gives the polynomial p(x)=x+3.
3. The result is rule x+3 together with excluded-input set $\{2\}$; the original expression remains undefined there.

</details>
