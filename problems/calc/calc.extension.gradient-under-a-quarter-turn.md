# Transform a gradient through an orthogonal coordinate map

*Easy · [Calculus](index.md)*

Let ∇f(0,0)=(1,0) and g(u,v)=f(−v,u). Find $\nabla g(0,0)$.

```answer
{"answer":{"kind":"vector","expected":["0","-1"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use g\_u=f\_y and g\_v=−f\_x for this coordinate substitution.

</details>

<details>
<summary>Hint 2</summary>

The origin maps to itself.

</details>

<details>
<summary>Worked solution</summary>

Gradient components transform by the transpose coordinate derivative.

1. At the origin, f\_x=1 and f\_y=0.
2. Hence g\_u=0 and g\_v=−1.
3. The gradient is \[0,−1\].

</details>
