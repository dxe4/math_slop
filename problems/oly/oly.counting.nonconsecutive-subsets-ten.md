# Count subsets with no neighboring integers

*Medium · [Original olympiad-style problems](index.md)*

How many subsets of $\{1,2,\ldots,10\}$ contain no two consecutive integers? Include the empty subset.

```answer
{"answer":{"kind":"integer","expected":"144","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Split subsets according to whether the largest element is included.

</details>

<details>
<summary>Hint 2</summary>

Including it forbids its predecessor and leaves a shorter instance.

</details>

<details>
<summary>Worked solution</summary>

A last-element decomposition gives an exact finite recurrence.

1. Let A\_n count qualifying subsets of the first n integers. Excluding n gives A\_(n-1), while including n gives A\_(n-2), so $A_n=A_{n-1}+A_{n-2}$.
2. The initial counts are A\_0=1 and A\_1=2. Successive counts through n=10 are 1,2,3,5,8,13,21,34,55,89,144.
3. Thus the required number is $144$.

</details>
