# Compress gaps in a constrained subset selection

*Hard · [Combinatorics](index.md)*

How many three-element subsets of $\{1,2,\ldots,10\}$ contain no consecutive integers?

```answer
{"answer":{"kind":"integer","expected":"56","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Write the selected values as a&lt;b&lt;c.

</details>

<details>
<summary>Hint 2</summary>

Subtract zero, one and two respectively to remove the mandatory gaps.

</details>

<details>
<summary>Worked solution</summary>

A gap-removing bijection turns the constrained subsets into ordinary subsets.

1. For selected $a<b<c$ with gaps at least two, define $(u,v,w)=(a,b-1,c-2)$.
2. These are exactly the strictly increasing triples in one through eight, and the inverse adds zero, one and two to restore the gaps.
3. Hence the count is the number of three-element subsets of eight, $\binom83=56$.

</details>
