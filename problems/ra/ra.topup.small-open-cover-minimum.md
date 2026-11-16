# Find a smallest subcover of a supplied compact interval cover

*Hard · [Real analysis](index.md)*

For j=0,1,2,3,4 let $U_j=(j/4-1/3,j/4+1/3)$. These open intervals cover \[0,1\]. What is the smallest number of them needed for a subcover?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Find a pair that overlaps and reaches past both endpoints.

</details>

<details>
<summary>Hint 2</summary>

A single interval has length only two thirds.

</details>

<details>
<summary>Worked solution</summary>

An explicit subcover and an impossibility bound together prove minimality.

1. The intervals U\_1=(-1/12,7/12) and U\_3=(5/12,13/12) overlap and jointly contain \[0,1\].
2. Thus two intervals suffice.
3. No single supplied interval can contain both zero and one because each has length two thirds, so two is the minimum.

</details>
