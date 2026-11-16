# Find a sharp Cauchy threshold whose error supremum is not attained

*Hard · [Real analysis](index.md)*

For $a_n=1/(n+1)$, find the least positive N for which \|a\_m-a\_n\|&lt;1/10 for every m,n&gt;=N.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

For a tail starting at N, the largest term is 1/(N+1), but zero is not a term.

</details>

<details>
<summary>Hint 2</summary>

Check whether equality of the error supremum with the tolerance actually produces a violating pair.

</details>

<details>
<summary>Worked solution</summary>

A nonattained difference supremum allows a sharp strict tail at equality.

1. If m,n&gt;=9, both terms are positive and at most one tenth, so their absolute difference is strictly below one tenth.
2. For N&lt;=8, indices n=8 and m=89 belong to the tail and give difference 1/9-1/90=1/10, violating strictness.
3. Thus N=9 is least. The tail difference supremum is one tenth but is not attained when N=9.

</details>
