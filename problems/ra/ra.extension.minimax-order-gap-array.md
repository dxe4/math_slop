# Expose a strict gap when infimum and supremum are interchanged

*Medium · [Real analysis](index.md)*

For positive integers m,n let $a_{m,n}=1$ if m=n and zero otherwise. Enter \[sup\_m inf\_n a\_(m,n), inf\_n sup\_m a\_(m,n)\] in that order.

```answer
{"answer":{"kind":"vector","expected":["0","1"],"checker_scope":"Exact requested order quantity or extremization observation only; no general argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

For each fixed row there is a zero somewhere.

</details>

<details>
<summary>Hint 2</summary>

For each fixed column there is a one somewhere.

</details>

<details>
<summary>Worked solution</summary>

The two orders of extremization retain different witness dependencies.

1. For any fixed m, choosing n different from m gives a zero and all entries are nonnegative, so inf\_n a\_(m,n)=0. Taking sup\_m leaves zero.
2. For any fixed n, choosing m=n gives a one and no entry exceeds one, so sup\_m a\_(m,n)=1. Taking inf\_n leaves one.
3. The ordered vector is \[0,1\]; swapping infimum and supremum changes this result.

</details>
