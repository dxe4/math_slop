# Prove completeness of a modular root list

*Medium · [Original olympiad-style problems](index.md)*

How many residues $x\in\{0,\ldots,16\}$ satisfy $x^4\equiv1\pmod{17}$?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Factor the fourth-power difference over the prime residue field.

</details>

<details>
<summary>Hint 2</summary>

Find roots of the two quadratic factors and account for all of them.

</details>

<details>
<summary>Worked solution</summary>

Factoring over a field gives a complete finite root count.

1. The condition is $(x^2-1)(x^2+1)\equiv0\pmod{17}$. Since seventeen is prime, one factor vanishes.
2. The first factor gives $x=1,16$; the second gives $x=4,13$, since $4^2\equiv-1$. Each quadratic has at most two roots over a field.
3. The four distinct residues exhaust the solutions, so the count is $4$.

</details>
