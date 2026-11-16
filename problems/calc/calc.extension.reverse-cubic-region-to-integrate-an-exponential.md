# Reverse order to remove a nonelementary inner integral

*Medium · [Calculus](index.md)*

Let $I=\int_0^1\int_{y^{1/3}}^1e^{x^4}\,dx\,dy$. Find I/(e−1) by reversing order.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The region equivalently satisfies 0≤x≤1 and 0≤y≤x³.

</details>

<details>
<summary>Hint 2</summary>

The new inner y integral contributes exactly x³.

</details>

<details>
<summary>Worked solution</summary>

Region geometry can provide the derivative factor needed for a substitution.

1. Reversing order gives I=∫₀¹∫₀^{x³}e^{x⁴}dy dx=∫₀¹x³e^{x⁴}dx.
2. Set u=x⁴, du=4x³dx, to obtain I=(1/4)∫₀¹eᵘdu=(e−1)/4.
3. Thus the normalized value is 1/4. Continuity on the compact region justifies order exchange.

</details>
