# Prove a parity implication through its contrapositive

*Medium · [Discrete mathematics](index.md)*

Prove that if integers a,b have $a+b$ odd, then exactly one of a,b is even, using a contrapositive argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Failure of opposite parity means the two numbers have the same parity.

</details>

<details>
<summary>Hint 2</summary>

Cover both same-parity possibilities in the contrapositive.

</details>

<details>
<summary>Model proof</summary>

The contrapositive has two simple integer-representation cases.

1. The contrapositive says that if both numbers have the same parity, their sum is even.
2. For even a=2r,b=2s, the sum is 2(r+s). For odd a=2r+1,b=2s+1, it is 2(r+s+1). Both are even.
3. Therefore an odd sum cannot come from same-parity integers. Integers have exactly one of the two parities, so exactly one summand is even.

**Self-assessment rubric**

- Negate the opposite-parity conclusion correctly.
- Prove evenness for even-even and odd-odd inputs.
- Use logical equivalence and the parity dichotomy to conclude exactly one is even.

</details>
