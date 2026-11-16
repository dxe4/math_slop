# Recognize the collision argument

*Medium · [Combinatorics](index.md)*

Choose any ten distinct integers from $\{0,1,\ldots,11\}$. Group them by their remainders modulo $3$. What is the smallest size that the largest remainder group is guaranteed to have? Enter the exact integer.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

There are three remainder classes.

</details>

<details>
<summary>Hint 2</summary>

If every class had at most one less than the proposed guarantee, count the total number that could be chosen.

</details>

<details>
<summary>Worked solution</summary>

Remainder classes turn the divisibility question into a pigeonhole count.

1. If every remainder class contained at most $3$ chosen integers, there would be at most $9$ chosen integers.
2. Ten choices therefore force some class to contain at least $4$.
3. Each class in the supplied universe has only $4$ members, so the largest group has size $4$. Two of its members have difference divisible by $3$.

</details>
