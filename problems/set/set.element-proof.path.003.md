# A fixed universe makes negations precise

*Medium · [Set theory](index.md)*

Let $A,B\subseteq U$. Which argument correctly proves $U\setminus (A\cup B)=(U\setminus A)\cap (U\setminus B)$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Outside $A\cup B$ means outside A or outside B, so the result follows.
2. A drawing of one example proves the identity for every possible A and B.
3. For arbitrary $x\in U$, being outside $A\cup B$ is equivalent to being outside both A and B.
4. Outside $A\cup B$ is equivalent to belonging to both A and B.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_arbitrary_xu_bei","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["outside_ab_means_out","a_drawing_of_one","for_arbitrary_xu_bei","outside_ab_is_equiva"]}
```

<details>
<summary>Hint 1</summary>

For equality, compare membership on both sides for an arbitrary $x\in U$.

</details>

<details>
<summary>Hint 2</summary>

Not being in an inclusive union means being in neither set.

</details>

<details>
<summary>Worked solution</summary>

Equivalence of membership conditions proves both inclusions at once.

1. For arbitrary $x\in U, x\notin A\cup B$ means not($x\in A$ or $x\in B$).
2. This is equivalent to $x\notin A$ and $x\notin B$, hence to $x\in (U\setminus A)\cap (U\setminus B)$. Membership agrees for every $x\in U$, proving equality. Select the statement “For arbitrary $x\in U$, being outside $A\cup B$ is equivalent to being outside both A and B.”.

</details>
