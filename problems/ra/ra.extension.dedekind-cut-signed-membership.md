# Read the negative branch of a rational cut before squaring

*Easy · [Real analysis](index.md)*

Define the rational cut $A=\{q\in\mathbb Q:q<0\ \text{or}\ q^2<2\}$. How many of -2,0,7/5,3/2 belong to A?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested order quantity or extremization observation only; no general argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A negative number already satisfies the first alternative.

</details>

<details>
<summary>Hint 2</summary>

For nonnegative candidates compare exact squares with two.

</details>

<details>
<summary>Worked solution</summary>

The cut's negative branch matters; squaring alone would lose its order information.

1. The value -2 belongs because it is negative, regardless of its square. Zero belongs because its square is below two.
2. The square of 7/5 is 49/25&lt;50/25=2, so it belongs. The square of 3/2 is 9/4&gt;2, and it is not negative, so it does not belong.
3. Exactly three candidates belong to A.

</details>
