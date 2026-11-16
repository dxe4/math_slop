# Count integer triples from a squared-difference identity

*Hard · [Original olympiad-style problems](index.md)*

How many ordered triples $(x,y,z)$ of integers in $\{0,\ldots,10\}$ satisfy $x^2+y^2+z^2-xy-yz-zx=1$?

```answer
{"answer":{"kind":"integer","expected":"60","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Rewrite twice the left side as a sum of three squared differences.

</details>

<details>
<summary>Hint 2</summary>

An integer sum of three squares equal to two severely restricts the coordinate gaps.

</details>

<details>
<summary>Worked solution</summary>

The quadratic identity reduces the solutions to two adjacent coordinate values.

1. The equation is equivalent to $(x-y)^2+(y-z)^2+(z-x)^2=2$. The squared differences are therefore one, one and zero in some order.
2. Two coordinates are equal and the third differs by one. For each adjacent value pair k,k+1 with $0\leq k\leq9$, there are three placements with the higher value once and three with it twice.
3. The disjoint count is $10\cdot6=60$.

</details>
