# Find a recurrence period instead of iterating thousands of times

*Hard · [Foundations bridge](index.md)*

Let $b_1=-1$ and $b_{n+1}=3-b_n$ for n&gt;=1. Find $b_{2026}$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Apply the recurrence twice symbolically.

</details>

<details>
<summary>Hint 2</summary>

Once a two-step cycle is established, use the parity of the requested index.

</details>

<details>
<summary>Worked solution</summary>

The two-step composition is the identity.

1. We have $b_2=3-(-1)=4$.
2. For every n&gt;=1, $b_{n+2}=3-(3-b_n)=b_n$, so odd-indexed terms equal -1 and even-indexed terms equal 4.
3. Because 2026 is even, the requested term is $4$.

</details>
