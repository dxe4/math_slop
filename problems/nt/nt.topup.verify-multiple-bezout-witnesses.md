# Check complete signed witness pairs

*Medium · [Number theory](index.md)*

For $\gcd(84,30)=6$, which labeled pairs (x,y) satisfy 84x+30y=6? A=(-1,3), B=(4,-11), C=(1,-3), D=(0,1). Return a set of labels.

```answer
{"answer":{"kind":"set","expected":["A","B"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Evaluate each full signed combination.

</details>

<details>
<summary>Hint 2</summary>

A combination equal to negative six is not the requested identity.

</details>

<details>
<summary>Worked solution</summary>

Witness verification requires the specified value and both coefficient signs.

1. For A, $84(-1)+30(3)=-84+90=6$. For B, $84(4)+30(-11)=336-330=6$.
2. For C the value is $84-90=-6$, and for D it is thirty.
3. Only A and B satisfy the displayed positive-gcd identity.

</details>
