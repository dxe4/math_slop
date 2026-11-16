# Transform a quadratic Hessian through rotated coordinates

*Medium · [Calculus](index.md)*

Let f have Hessian diag(2,6), and g(u,v)=f((u−v)/√2,(u+v)/√2). Find $H_g$; the coordinate change is linear.

```answer
{"answer":{"kind":"matrix","expected":[["4","2"],["2","4"]],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Use H\_g=QᵀH\_fQ with the displayed coordinate matrix Q.

</details>

<details>
<summary>Hint 2</summary>

The diagonal averages and signed off-diagonal difference can be computed without leaving irrational entries.

</details>

<details>
<summary>Worked solution</summary>

A linear coordinate change acts on both slots of the Hessian.

1. The coordinate columns are q₁=(1,1)/√2 and q₂=(−1,1)/√2.
2. Both diagonal entries q\_iᵀHq\_i equal (2+6)/2=4. The mixed entry is (−2+6)/2=2.
3. Thus H\_g=\[\[4,2\],\[2,4\]\]. No extra coordinate-curvature term occurs for a linear map.

</details>
