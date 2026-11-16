# Include the extra endpoint in a Farey length formula

*Easy · [Computational arithmetic problems](index.md)*

The Farey sequence of order N includes 0/1 and 1/1 and has length $1+\sum_{n=1}^N\varphi(n)$. Given the totient sum through twelve is 46, find the sequence length at order twelve.

```answer
{"answer":{"kind":"integer","expected":"47","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the stated convention including both endpoints.

</details>

<details>
<summary>Hint 2</summary>

The totient sum does not by itself include every displayed sequence entry.

</details>

<details>
<summary>Worked solution</summary>

The endpoint convention determines the additive constant in the length formula.

1. The supplied totient total is forty-six.
2. The displayed length formula adds one further entry.
3. Thus the Farey sequence has forty-seven entries at this order.

</details>
