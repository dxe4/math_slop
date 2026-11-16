# Extract a fourth-power sum from symmetric data

*Medium · [Original olympiad-style problems](index.md)*

Real numbers x,y satisfy $x+y=5$ and $xy=6$. Find $x^4+y^4$ without choosing an order for x and y.

```answer
{"answer":{"kind":"integer","expected":"97","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

First compute the sum of their squares from the two symmetric data.

</details>

<details>
<summary>Hint 2</summary>

Squaring that new sum counts the mixed square product twice.

</details>

<details>
<summary>Worked solution</summary>

Symmetric identities determine the value without solving for the individual roots.

1. The square sum is $x^2+y^2=(x+y)^2-2xy=25-12=13$.
2. Then $x^4+y^4=(x^2+y^2)^2-2x^2y^2=13^2-2\cdot6^2$.
3. The result is $169-72=97$.

</details>
