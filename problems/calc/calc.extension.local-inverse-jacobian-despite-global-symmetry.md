# Compute a local inverse derivative for a globally noninjective map

*Medium · [Calculus](index.md)*

Let $T(x,y)=(x+y,xy)$. At (2,1), find the 2×2 derivative matrix of the local inverse at T(2,1), with inverse outputs ordered (x,y).

```answer
{"answer":{"kind":"matrix","expected":[["2","-1"],["-1","1"]],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Compute DT at the source point.

</details>

<details>
<summary>Hint 2</summary>

Invert that matrix; swapping x,y elsewhere does not prevent this local inverse.

</details>

<details>
<summary>Worked solution</summary>

Local inversion uses the derivative at a selected branch.

1. The derivative is DT=\[\[1,1\],\[y,x\]\], giving \[\[1,1\],\[1,2\]\] at (2,1). Its determinant is 1.
2. The inverse matrix is \[\[2,−1\],\[−1,1\]\], so this is the local inverse derivative at image (3,2).
3. T is globally symmetric under exchanging x,y, but the nonsingular derivative yields a separate inverse branch near the chosen source point.

</details>
