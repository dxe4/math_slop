# Combine sharp adjacent distance bounds

*Medium · [Real analysis](index.md)*

Real u,v,w satisfy \|u−v\|≤2/7 and \|v−w\|≤3/14. Give the smallest B guaranteed to satisfy \|u−w\|≤B for every permitted triple.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Use the triangle inequality through v.

</details>

<details>
<summary>Hint 2</summary>

For sharpness, align the two displacements in the same direction.

</details>

<details>
<summary>Worked solution</summary>

Aligned displacements attain the sum of the permitted distances.

1. The triangle inequality bounds $|u-w|$ by $2/7+3/14=7/14=1/2$.
2. Take $w=0, v=3/14$ and $u=1/2$. The assumptions hold with equality and \|u−w\|=1/2, so no smaller bound works.

</details>
