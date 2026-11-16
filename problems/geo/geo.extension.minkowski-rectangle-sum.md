# Measure a Minkowski sum of rectangles

*Easy · [Geometry and trigonometry problems](index.md)*

For sets $A,B$, define $A+B=\{a+b:a\in A,b\in B\}$. Let $A=[0,2]\times[0,1]$ and $B=[0,3]\times[0,4]$. Use interval sums to find the area of $A+B$.

```answer
{"answer":{"kind":"integer","expected":"25","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Horizontal coordinates range over $[0,2]+[0,3]=[0,5]$.

</details>

<details>
<summary>Hint 2</summary>

Vertical coordinates can be chosen independently and range over $[0,5]$.

</details>

<details>
<summary>Worked solution</summary>

Add the two coordinate intervals separately.

1. Independent horizontal choices produce the full interval $[0,5]$.
2. Independent vertical choices likewise produce $[0,5]$.
3. The sum set is therefore a $5$ by $5$ rectangle of area $25$.

</details>
