# Recognize an exponential potential

*Medium · [Calculus](index.md)*

For $F(x,y)=(ye^{xy},xe^{xy})$, find work along any piecewise-C¹ path from (0,0) to (log2,1). State why the choice of path does not matter.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Both components are partial derivatives of e^{xy}.

</details>

<details>
<summary>Hint 2</summary>

Evaluate that potential at the endpoints.

</details>

<details>
<summary>Worked solution</summary>

A global nonlinear potential reduces every path to the same endpoint difference.

1. The scalar φ(x,y)=e^{xy} has gradient exactly F throughout R².
2. The endpoint values are φ(0,0)=1 and φ(log2,1)=2.
3. Thus the work is 2−1=1 on every such path.

</details>
