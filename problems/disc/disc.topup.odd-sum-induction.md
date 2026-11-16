# Prove an odd-number sum for every index

*Medium · [Discrete mathematics](index.md)*

Prove by ordinary induction that $\sum_{j=1}^n(2j-1)=n^2$ for every positive integer n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Check the first allowed index.

</details>

<details>
<summary>Hint 2</summary>

The next sum is the previous sum plus one new odd term.

</details>

<details>
<summary>Model proof</summary>

The induction step turns the old square into the next square.

1. For n=1, the sum is one, equal to 1 squared.
2. Assume the formula holds for an arbitrary integer k&gt;=1. The sum through k+1 equals the sum through k plus 2k+1.
3. Using the hypothesis gives $k^2+2k+1=(k+1)^2$. Thus the formula holds at k+1 and hence for all positive integers.

**Self-assessment rubric**

- Check the first quantified index.
- State the formula at an arbitrary k without assuming the successor.
- Add exactly the new term and derive the next claimed expression.

</details>
