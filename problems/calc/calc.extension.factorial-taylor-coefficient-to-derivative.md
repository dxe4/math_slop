# Recover a derivative from a factorial-normalized coefficient

*Easy · [Calculus](index.md)*

A function has a degree-five Taylor expansion at zero whose x⁵ coefficient is $2/5!$. Find f⁽⁵⁾(0). Assume the needed Taylor hypotheses.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The Taylor coefficient equals the fifth derivative divided by 5!.

</details>

<details>
<summary>Hint 2</summary>

Undo that normalization.

</details>

<details>
<summary>Worked solution</summary>

Taylor coefficients and derivatives differ by the order factorial.

1. The coefficient identity is f⁽⁵⁾(0)/5!=2/5!.
2. Multiplying by the nonzero integer 5! gives f⁽⁵⁾(0)=2.
3. Thus the requested derivative is 2.

</details>
