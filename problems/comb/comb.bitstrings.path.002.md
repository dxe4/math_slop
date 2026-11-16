# Write four membership bits

*Easy · [Combinatorics](index.md)*

Use ordered universe $(1,2,3,4)$. Encode subset $\{2,4\}$, with $1$ for included and $0$ for excluded. Enter b1, b2, b3, b4.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"b1":0,"b2":1,"b3":0,"b4":1},"checker_scope":"Exact finite structured answer for encode-subset-as-membership-bits; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Make one decision for each universe position.

</details>

<details>
<summary>Hint 2</summary>

Membership determines each bit independently.

</details>

<details>
<summary>Worked solution</summary>

A subset determines exactly one membership word.

1. Elements $1$ and $3$ are excluded, so b1=b3=$0$.
2. Elements $2$ and $4$ are included, so b2=b4=$1$.

</details>
