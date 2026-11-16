# Multiply derivative maps with an intermediate dimension

*Medium · [Calculus](index.md)*

At the appropriate points, DF=\[\[1,2\],\[0,1\],\[1,−1\]\] and DG=\[\[1,0,2\],\[0,1,1\]\]. Find $D(G\circ F)=DG\,DF$ as a 2×2 matrix.

```answer
{"answer":{"kind":"matrix","expected":[["3","0"],["1","0"]],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The intermediate dimension is three, so multiply in the displayed order.

</details>

<details>
<summary>Hint 2</summary>

Each product row is a linear combination of the three rows of DF.

</details>

<details>
<summary>Worked solution</summary>

The derivative chain rule composes linear maps in function-composition order.

1. The first row is row 1 of DF plus twice row 3, giving \[3,0\].
2. The second row is row 2 plus row 3, giving \[1,0\].
3. Therefore the matrix is \[\[3,0\],\[1,0\]\], which is singular despite both factors being well-defined derivatives.

</details>
