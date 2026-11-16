# A geometric recurrence step

*Medium · [Combinatorics](index.md)*

Given a0=$1$ and $a_{n}=2a_{n-1}$ for $n\geq 1$, the proposed formula is $a_{n}=2^n$. After checking $n=0$, which step is valid for arbitrary $k\geq 0$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Assume $a_{k+1}=2^{k+1}$, which proves it.
2. Assume $a_{k}=2^k$, then $a_{k+1}=2a_{k}=2\cdot 2^k=2^{k+1}$.
3. Check $n=1$ only and stop.
4. Checking the first six indices proves the formula for every later index without an induction step.

```answer
{"answer":{"kind":"multiple_choice","expected":"assume_a_k_2","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["assume_a_k_1","assume_a_k_2","check_n_1_only","checking_the_first_s"]}
```

<details>
<summary>Hint 1</summary>

The induction hypothesis belongs at an earlier index.

</details>

<details>
<summary>Hint 2</summary>

Use the recurrence at $k+1$ and simplify.

</details>

<details>
<summary>Worked solution</summary>

A recurrence step must transfer an earlier hypothesis to the next index.

1. The base case is $a_0=1=2^0$.
2. For an arbitrary $k\geq0$, assume $a_k=2^k$. The recurrence gives $a_{k+1}=2a_k=2\cdot2^k=2^{k+1}$.
3. This transfers the earlier hypothesis to the next index, so the checked base and the successor implication prove the formula at every nonnegative index.

</details>
