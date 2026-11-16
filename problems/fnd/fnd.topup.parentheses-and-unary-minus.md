# Distinguish a negative base from a leading minus

*Medium · [Foundations bridge](index.md)*

Evaluate $-3^2+(-3)^2-(-1)^5$ using the usual operation order.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

In the first term, the exponent applies before the leading minus.

</details>

<details>
<summary>Hint 2</summary>

The parenthesized bases include their signs inside the power.

</details>

<details>
<summary>Worked solution</summary>

Parentheses distinguish which negative signs belong to the repeated base.

1. The first two terms are $-3^2=-9$ and $(-3)^2=9$.
2. The odd power $(-1)^5$ equals -1.
3. The full value is $-9+9-(-1)=1$.

</details>
