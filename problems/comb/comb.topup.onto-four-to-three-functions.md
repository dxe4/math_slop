# Subtract missing-output function families

*Hard · [Combinatorics](index.md)*

How many surjective functions map a labeled set of size $4$ to a three-element labeled set?

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Represent a function by four ordered output labels.

</details>

<details>
<summary>Hint 2</summary>

A missing output leaves two choices per input; two missing outputs leave one.

</details>

<details>
<summary>Worked solution</summary>

Surjectivity is the complement of omitting at least one output.

1. There are $3^4=81$ unrestricted functions. For each of three missing outputs there are sixteen functions.
2. Each pair of missing outputs leaves one constant function; there are three such pairs, and omitting all outputs is impossible.
3. Inclusion-exclusion gives $81-3(16)+3=36$ surjections.

</details>
