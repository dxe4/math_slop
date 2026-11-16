# Recognize an exact polynomial Taylor representation

*Easy · [Calculus](index.md)*

Let p be a polynomial of degree at most 4. What is the error $p(x)-T_4(x)$ for its degree-four Taylor polynomial about any real a?

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

No polynomial derivative of order five or higher contributes.

</details>

<details>
<summary>Hint 2</summary>

The Taylor representation includes every degree present in p.

</details>

<details>
<summary>Worked solution</summary>

A sufficiently high polynomial Taylor truncation is exact.

1. A degree-at-most-four polynomial is exactly the sum of its Taylor terms through order four.
2. Thus p(x)=T₄(x) for every real x.
3. The error is identically 0.

</details>
