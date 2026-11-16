# Read an order from a central carry term

*Easy · [Abstract algebra problems](index.md)*

On pairs (a,u) in F2 times F2 define $(a,u)(b,v)=(a+b,u+v+ab)$. Find the order of (1,0), with identity (0,0).

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact requested finite extension observation only; no splitting or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The square gains the bilinear carry in its second coordinate.

</details>

<details>
<summary>Hint 2</summary>

Square the result again before deciding the order.

</details>

<details>
<summary>Worked solution</summary>

A central extension can turn a quotient involution into an element of order four.

1. The square of (1,0) is (0,1).
2. The square of (0,1) is (0,0), while (0,1) is not the identity.
3. Thus (1,0) has order four.

</details>
