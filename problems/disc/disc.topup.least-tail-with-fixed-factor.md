# Find a tail threshold for one fixed constant

*Medium · [Discrete mathematics](index.md)*

Fix the factor $C=10$ and let $T(n)=8n+20$ for positive integers n. Find the least positive integer N such that $T(n)\leq Cn$ for every integer n&gt;=N.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

The factor C is fixed and cannot be increased to improve the threshold.

</details>

<details>
<summary>Hint 2</summary>

Solve the inequality for n and check the last integer just before the proposed tail.

</details>

<details>
<summary>Worked solution</summary>

The same fixed constant must control every input after the threshold.

1. The inequality is $8n+20\leq10n$, equivalent to n&gt;=10.
2. Therefore every n&gt;=10 satisfies it, while n=9 fails.
3. The least positive threshold is $N=10$.

</details>
