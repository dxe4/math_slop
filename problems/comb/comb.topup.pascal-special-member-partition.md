# Partition a subset family by one designated member

*Medium · [Combinatorics](index.md)*

Three-element subsets are chosen from a set of $7$ elements with designated member A. Return containing\_A, excluding\_A and total.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"containing_A":"15","excluding_A":"20","total":"35"},"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

If A is included, choose two further elements from the other six.

</details>

<details>
<summary>Hint 2</summary>

If A is excluded, choose all three from those six.

</details>

<details>
<summary>Worked solution</summary>

A designated-member partition gives the two disjoint Pascal cases.

1. The containing-A family has fifteen members, choosing two of six.
2. The excluding-A family has twenty members, choosing three of six.
3. Their disjoint union is every three-element subset, giving total thirty-five.

</details>
