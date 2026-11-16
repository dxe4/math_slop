# Find moduli satisfying one congruence and excluding another

*Hard · [Number theory](index.md)*

Find every integer modulus m&gt;1 for which $-14\equiv10\pmod m$ but 22 is not congruent to 10 modulo m. Return a set.

```answer
{"answer":{"kind":"set","expected":["8","24"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The first condition says m divides twenty-four.

</details>

<details>
<summary>Hint 2</summary>

The second removes the divisors of twelve from that candidate list.

</details>

<details>
<summary>Worked solution</summary>

A modulus is constrained by differences, including the failure of another congruence.

1. The first difference is negative twenty-four, so the candidate moduli are 2,3,4,6,8,12,24.
2. The second difference is twelve, and the forbidden moduli are its divisors among those candidates: 2,3,4,6,12.
3. Only eight and twenty-four remain, and both satisfy the required inclusion and exclusion.

</details>
