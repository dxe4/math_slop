# Distinguish a path rate from its unit-direction derivative

*Medium · [Calculus](index.md)*

At p, $\nabla f=(2,-1)$ and a path has velocity v=(3,4). Return \[d(f∘r)/dt, unit-direction derivative along v\] at p. Use the Euclidean norm.

```answer
{"answer":{"kind":"vector","expected":["2","2/5"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The path rate uses v itself.

</details>

<details>
<summary>Hint 2</summary>

The unit-direction rate uses v/\|\|v\|\|, and \|\|v\|\|=5.

</details>

<details>
<summary>Worked solution</summary>

Speed multiplies the unit-direction response to give the time rate.

1. The path rate is ∇f·v=2×3−4=2.
2. The unit direction is (3/5,4/5), so its derivative is (∇f·v)/5=2/5.
3. The vector is \[2,2/5\]; normalization changes which rate is requested.

</details>
