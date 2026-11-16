# Exploit an order constraint before optimizing

*Medium · [Original olympiad-style problems](index.md)*

Positive reals satisfy $a\le b\le c$ and $a+b+c=9$. Find the maximum of ac as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":81,"denominator":8},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The order gives $2a+c\le9$.

</details>

<details>
<summary>Hint 2</summary>

Apply AM-GM to the two positive quantities $2a$ and c.

</details>

<details>
<summary>Worked solution</summary>

Reduce to a weighted product bound with compatible order equality.

1. Because $b\ge a$, the sum condition gives $2a+c\le9$.
2. AM-GM gives $2ac\le((2a+c)/2)^2\le81/4$, so $ac\le81/8$.
3. At $a=b=9/4$, $c=9/2$, both inequalities are equalities and the required ordering holds.

</details>
