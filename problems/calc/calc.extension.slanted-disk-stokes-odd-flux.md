# Apply Stokes on a tilted disk with variable curl

*Medium · [Calculus](index.md)*

Let S be z=x above x²+y²≤1, oriented upward, and C its induced boundary. For F=(0,0,xy), evaluate $\oint_CF\cdot dr$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The curl is (x,−y,0).

</details>

<details>
<summary>Hint 2</summary>

The upward graph vector-area element is (−1,0,1)dxdy, making the flux an odd disk integral.

</details>

<details>
<summary>Worked solution</summary>

The area-vector form handles the tilt without separate unit-normal square roots.

1. The curl is ∇×F=(x,−y,0), and its dot product with (−1,0,1) is −x.
2. Stokes gives the circulation as ∬\_D−x dA.
3. Reflection symmetry of the centered unit disk makes this zero. The induced boundary projects counterclockwise from above.

</details>
