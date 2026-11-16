# Swap integration order without reversing orientation

*Easy · [Calculus](index.md)*

f is continuous on \[0,1\]² and $\int_0^1\int_0^1f(x,y)\,dy\,dx=5$. Find the integral with order dx dy over the same square.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Fubini permits exchanging the integration order here.

</details>

<details>
<summary>Hint 2</summary>

This is not a reversal of either interval’s endpoints.

</details>

<details>
<summary>Worked solution</summary>

Order exchange on the same region introduces no minus sign.

1. Continuity on a compact rectangle ensures integrability and Fubini’s equality.
2. The reversed order covers exactly the same square.
3. Its value remains 5.

</details>
