# Append the correct next term

*Medium · [Discrete mathematics](index.md)*

To prove $1$+...+$n=n(n+1)/2$ for $n\geq 1$, assume the formula at arbitrary $k\geq 1$. Which derives the next case? Select the mathematically correct statement from the four alternatives.

**Options**

1. Add $k+1$, giving $k(k+1)/2+(k+1)=(k+1) (k+2)/2$.
2. Add k and leave the right side unchanged.
3. Assume the formula at $k+1$.
4. Add $k+1$ to the left side but add k to the right side.

```answer
{"answer":{"kind":"multiple_choice","expected":"add_k_1_giving","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["add_k_1_giving","add_k_and_leave","assume_the_formula_a","add_k_1_to"]}
```

<details>
<summary>Hint 1</summary>

The new term is $k+1$.

</details>

<details>
<summary>Hint 2</summary>

Factor $k+1$ after adding it.

</details>

<details>
<summary>Worked solution</summary>

Ordinary induction needs a base case and a successor implication for an arbitrary index.

1. The new sum is the old sum plus $k+1$.
2. The induction hypothesis gives $(k+1)(k/2+1)=(k+1)(k+2)/2$, exactly the next claimed case.

</details>
