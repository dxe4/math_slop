# Respect the index in a varying recurrence

*Medium · [Foundations bridge](index.md)*

Let $a_0=2$ and $a_{n+1}=a_n+n+1$ for integers n&gt;=0. Find $a_4$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The first recurrence use has n=0, not n=1.

</details>

<details>
<summary>Hint 2</summary>

The added quantity changes at each subsequent index.

</details>

<details>
<summary>Worked solution</summary>

The initial index determines all four required increments.

1. For n=0, $a_1=2+1=3$.
2. The next values are $a_2=3+2=5$ and $a_3=5+3=8$.
3. The fourth term is $a_4=8+4=12$.

</details>
