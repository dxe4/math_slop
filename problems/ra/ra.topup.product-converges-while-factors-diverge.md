# Calculate a product limit without misusing factor limit laws

*Hard · [Real analysis](index.md)*

For $a_n=(-1)^n$ and b\_n=(-1)^n+1/n, find the limit of a\_n b\_n. Do not assume either factor converges.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Multiply the expressions before taking a limit.

</details>

<details>
<summary>Hint 2</summary>

Bound the remaining oscillating error in absolute value.

</details>

<details>
<summary>Worked solution</summary>

A convergent product need not have individually convergent factors.

1. The product is 1+(-1)^n/n.
2. Its distance from one is exactly 1/n, which tends to zero.
3. Thus the product limit is one, even though both factors have distinct even and odd subsequential limits.

</details>
