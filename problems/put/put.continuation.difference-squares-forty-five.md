# Difference squares forty five

*Medium · [Original Putnam-style training](index.md)*

How many pairs of integers $(x,y)$ satisfy $x>y\ge0$ and $x^2-y^2=45$?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Factor as $(x-y)(x+y)=45$.

</details>

<details>
<summary>Hint 2</summary>

Each factor pair must have the same parity and the smaller factor first.

</details>

<details>
<summary>Worked solution</summary>

Each gives one $(x,y)$, so the count is $3$.

1. Put $u=x-y>0$, $v=x+y\ge u$. Then $uv=45$ and $u,v$ have the same parity; conversely $x=(u+v)/2$, $y=(v-u)/2$.
2. All positive factor pairs with $u\le v$ are $(1,45),(3,15),(5,9)$; all are odd pairs and give valid integers.
3. Each gives one $(x,y)$, so the count is $3$.

</details>
