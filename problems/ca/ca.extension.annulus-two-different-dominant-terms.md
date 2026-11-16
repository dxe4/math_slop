# Count roots in an annulus using different comparisons on its two circles

*Hard · [Complex analysis problems](index.md)*

How many zeros of $z^5-5z+12$ lie in 1&lt;\|z\|&lt;2, counted with multiplicity?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The best comparison term may change between the two radii.

</details>

<details>
<summary>Hint 2</summary>

Subtract the inner disk count only after verifying neither boundary has zeros.

</details>

<details>
<summary>Worked solution</summary>

Two strict Rouche comparisons trap all polynomial zeros in an annulus.

1. On \|z\|=1, the constant twelve has modulus greater than \|z^5-5z\|, which is at most six. Thus the inner disk has no zeros and its boundary has none.
2. On \|z\|=2, the term z^5 has modulus thirty-two, exceeding \|-5z+12\| at most twenty-two. Thus the outer disk contains five zeros and its boundary has none.
3. The annulus count is five minus zero, or five.

</details>
