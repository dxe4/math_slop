# Account for both moving bounds in an accumulation

*Medium · [Calculus](index.md)*

Let $F(x)=\int_x^{x^2}e^{t^2}\,dt$. Find F′(1)/e.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The upper-bound contribution is positive and includes derivative 2x.

</details>

<details>
<summary>Hint 2</summary>

The lower-bound contribution is subtracted and includes derivative 1.

</details>

<details>
<summary>Worked solution</summary>

Two moving endpoints contribute separately even when they coincide at the evaluation point.

1. Leibniz’s endpoint rule gives F′(x)=2x e^{x⁴}−e^{x²}.
2. At x=1 both integrand values are e, so F′(1)=2e−e=e.
3. Therefore F′(1)/e=1. The zero interval length at x=1 does not force a zero derivative.

</details>
