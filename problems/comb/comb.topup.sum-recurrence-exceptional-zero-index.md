# Prove a sum recurrence while preserving an exceptional initial value

*Hard · [Combinatorics](index.md)*

Define $c_0=1$ and c\_n=sum of c\_k for k=0,...,n-1 when n&gt;=1. Prove c\_n=2^(n-1) for n&gt;=1, explaining why the formula is not asserted at n=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compute c1 directly from the original sum.

</details>

<details>
<summary>Hint 2</summary>

For n&gt;=1 compare the sums defining c\_(n+1) and c\_n.

</details>

<details>
<summary>Model proof</summary>

Subtracting nested sums reveals a simpler recurrence after the first exceptional index.

1. The first sum gives c\_1=c\_0=1, agreeing with the formula at index one.
2. For n&gt;=1, the defining sums give c\_(n+1)=c\_n+c\_n=2c\_n. Induction from c\_1=1 gives c\_n=2^(n-1).
3. At index zero that expression would give one half, whereas the defined value is one, so the exceptional initial index must remain separate.

**Self-assessment rubric**

- Compute c1 from the sum rather than assume the later formula.
- Derive the doubling relation on its correct index range.
- Complete induction and explain the excluded zero index.

</details>
