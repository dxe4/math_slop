# Find the threshold at one fixed input

*Medium · [Real analysis](index.md)*

For $f_{n}(x)=x^n$ on $[0,1)$, fix $x=1/2$. Give any positive integer N such that \|$f_{n}(1/2)$\|&lt;$1/16$ for all integers $n\geq N$. Work at this fixed input and tolerance. You may add a whole-tail explanation in the optional notebook.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":5},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

After fixing $x=1/2$, the problem is a geometric sequence.

</details>

<details>
<summary>Hint 2</summary>

At $n=4$ the value equals the tolerance rather than being strictly smaller.

</details>

<details>
<summary>Worked solution</summary>

A pointwise threshold may be computed from the chosen input.

1. At the fixed input, the estimate is $2^{-n}<1/16$, equivalent to $n>4$.
2. Any $N\geq 5$ works because all later reciprocal powers decrease. $N=4$ fails by equality.

</details>
