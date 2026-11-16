# Retain both root branches before filtering

*Hard · [Foundations bridge](index.md)*

Find the integer n satisfying $\sqrt{(n-2)^2}=5$ and $n^2<40$. The square root is principal.

```answer
{"answer":{"kind":"integer","expected":"-3","checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The square root of a real square is its absolute value.

</details>

<details>
<summary>Hint 2</summary>

Both signs from the absolute-value equation must be checked against the second condition.

</details>

<details>
<summary>Worked solution</summary>

The principal root produces two candidate inputs, and the bound selects one.

1. The equation is $|n-2|=5$, so n-2 is either five or minus five.
2. The candidates are n=7 and n=-3. Their squares are 49 and 9.
3. Only n=-3 has square less than forty, so the requested integer is $-3$.

</details>
