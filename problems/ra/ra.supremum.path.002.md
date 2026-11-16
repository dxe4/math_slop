# Inspect a reciprocal set with a missing lower endpoint

*Medium · [Real analysis](index.md)*

Let S={3+4/n:n is a positive integer}. Give inf S, sup S, min S and max S, using null if needed. You may use the supplied fact that positive integers exceed every real bound. An explanation is unassessed.

```answer
{"answer":{"kind":"bounds_record_with_open_reasoning","expected":{"inf":"3","sup":"7","min":null,"max":"7"},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The first term is the largest and every term is greater than $3$.

</details>

<details>
<summary>Hint 2</summary>

For $b>3$, choose an integer $n>4/(b-3)$ to find a term below b.

</details>

<details>
<summary>Worked solution</summary>

A shrinking positive reciprocal gap yields an unattained infimum.

1. The first value is $7$, and 0&lt;4/n≤4, so sup S=max $S=7$.
2. Every term exceeds $3$. For any $b>3$ an integer $n>4/(b-3)$ makes 3+4/n&lt;b, so inf $S=3$.
3. The value $3$ is never attained, and terms strictly decrease, so there is no minimum.

</details>
