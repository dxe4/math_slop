# Choose a remainder-process measure

*Medium · [Discrete mathematics](index.md)*

A running state is integers $a\geq b>0$. Write a=qb+r with $0\leq r<b$ and move to (b,r), stopping when the second coordinate is zero. Which proves termination? Select the mathematically correct statement from the four alternatives.

**Options**

1. The first coordinate stays unchanged forever.
2. The nonnegative integer second coordinate strictly decreases from b to r each running step.
3. The maximum strictly decreases even if $a=b$.
4. The second coordinate is bounded by its starting value, and every bounded integer sequence terminates.

```answer
{"answer":{"kind":"multiple_choice","expected":"the_nonnegative_inte","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["the_first_coordinate","the_nonnegative_inte","the_maximum_strictly","the_second_coordinat"]}
```

<details>
<summary>Hint 1</summary>

The remainder bounds give strict descent.

</details>

<details>
<summary>Hint 2</summary>

If $a=b$, the maximum can stay unchanged.

</details>

<details>
<summary>Worked solution</summary>

A strictly decreasing nonnegative integer ranking measure proves that a run cannot continue forever. Preserved invariants address different questions.

1. The second coordinate changes from b to r with $0\leq r<b$.
2. Infinite strict nonnegative integer descent is impossible. B works; at $a=b$ the maximum stays b on moving to $(b,0)$.

</details>
