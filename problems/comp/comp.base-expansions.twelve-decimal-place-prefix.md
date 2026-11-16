# Extract a decimal prefix by exact division

*Medium · [Computational arithmetic problems](index.md)*

Let $N=\lfloor10^{12}/28\rfloor$. This is the first twelve fractional decimal positions of $1/28$, read as an integer so that initial zeros are dropped. Find $N$.

```answer
{"answer":{"kind":"integer","expected":"35714285714","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Use exact division rather than rounding a decimal approximation.

</details>

<details>
<summary>Hint 2</summary>

A candidate quotient is established by a remainder between zero and the divisor minus one.

</details>

<details>
<summary>Worked solution</summary>

The floor is the unique quotient in Euclidean division.

1. Exact multiplication gives $28\cdot35714285714=999999999992$.
2. Therefore $10^{12}=28\cdot35714285714+8$, with $0\leq8<28$.
3. The quotient, and hence the required prefix integer, is $35714285714$.

</details>
