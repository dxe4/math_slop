# List product pairs with an ordered-coordinate filter

*Medium · [Set theory](index.md)*

Let $A=\{1,2\}$ and $B=\{0,2,3\}$. List the pairs (x,y) in $A\times B$ for which x+y is even. Enter them as matrix rows ordered by x, then by y.

```answer
{"answer":{"kind":"matrix","rows":3,"columns":2,"expected":[["1","3"],["2","0"],["2","2"]],"checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

For an even sum the two coordinates must have the same parity.

</details>

<details>
<summary>Hint 2</summary>

The first coordinate must come from A and the second from B.

</details>

<details>
<summary>Worked solution</summary>

The product order and the parity condition both restrict the row list.

1. For x=1 the only odd choice in B is y=3, giving (1,3).
2. For x=2 the even choices in B are y=0 and y=2.
3. The requested ordered rows are (1,3),(2,0),(2,2).

</details>
