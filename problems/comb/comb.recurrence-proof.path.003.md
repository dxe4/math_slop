# Two initial cases and two hypotheses

*Medium · [Combinatorics](index.md)*

Let c0=$2$,c1=$4$, and $c_{n}=3c_{n-1}-2c_{n-2}$ for $n\geq 2$. The proposed formula is $c_{n}=2^{n+1}$. Which proof structure is valid? Select the mathematically correct statement from the four alternatives.

**Options**

1. Check $n=0,1$; for arbitrary $k\geq 1$ assume the formulas at k and $k-1$, then compute $c_{k+1}=3\cdot 2^{k+1}-2\cdot 2^k=2^{k+2}$.
2. Check $n=0$ only and apply the recurrence at $n=1$.
3. Assume only the formula at k and leave $c_{k-1}$ unjustified.
4. Check both base cases, then assume the formula at $k+1$ in order to compute $c_{k+1}$.

```answer
{"answer":{"kind":"multiple_choice","expected":"check_n_0_1","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["check_n_0_1","check_n_0_only","assume_only_the_form","check_both_base_case"]}
```

<details>
<summary>Hint 1</summary>

The recurrence first applies at $n=2$.

</details>

<details>
<summary>Hint 2</summary>

A next-step calculation references two earlier terms.

</details>

<details>
<summary>Worked solution</summary>

Match the base range and induction assumptions to the recurrence order.

1. A checks both initial values and supplies both hypotheses needed for the recurrence at $k+1$.
2. The algebra simplifies to ($6-2$)2^k=2^(k+2), as required.

</details>
