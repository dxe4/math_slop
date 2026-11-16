# The first odd numbers sum to a square

*Easy · [Combinatorics](index.md)*

Prove by induction that $1+3+\cdots+(2n-1)=n^2$ for every integer $n\ge1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Check the first permitted value before assuming a later case.

</details>

<details>
<summary>Hint 2</summary>

To pass from one case to the next, add the next odd term to both sides of the induction hypothesis.

</details>

<details>
<summary>Model proof</summary>

The difference between consecutive squares is the next odd number.

1. For $n=1$, the statement reads $1=1^2$, so the base case holds.
2. Assume the sum through $2k-1$ is $k^2$. The next term is $2(k+1)-1=2k+1$.
3. The sum through that term is $k^2+2k+1=(k+1)^2$, proving the inductive step and hence the identity.

**Self-assessment rubric**

- Verify the first permitted index.
- State the induction hypothesis and identify the next odd term correctly.
- Derive the next square and conclude the induction.

</details>
