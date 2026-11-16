# Prove Schur with every boundary equality case

*Hard · [Original olympiad-style problems](index.md)*

For nonnegative a,b,c, prove $a^3+b^3+c^3+3abc\ge a^2b+a^2c+b^2a+b^2c+c^2a+c^2b$, and determine every equality case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The difference is $\sum a(a-b)(a-c)$ and is symmetric, so order the variables.

</details>

<details>
<summary>Hint 2</summary>

Combine the first two terms after taking $a\ge b\ge c$.

</details>

<details>
<summary>Model proof</summary>

Use ordering to turn a symmetric cubic into explicitly nonnegative pieces.

1. Order $a\ge b\ge c\ge0$. The difference equals $a(a-b)(a-c)+b(b-a)(b-c)+c(c-a)(c-b)$.
2. The first two terms combine to $(a-b)^2(a+b-c)$; the last is $c(a-c)(b-c)$. Both are nonnegative under the ordering.
3. If $a>b$, the first term is positive because $a+b-c>0$. Thus equality requires $a=b$. The remaining term is then $c(a-c)^2$.
4. It vanishes exactly when all three variables are equal or c is zero with a equal to b. Undoing the order gives all permutations of $(t,t,0)$ and triples $(t,t,t)$ for nonnegative t.
5. Each listed triple gives equality directly, including the all-zero overlap.

**Self-assessment rubric**

- Justify ordering and write the exact cubic difference.
- Obtain both nonnegative terms with correct signs.
- Trace each zero condition without losing boundary cases.
- Verify every stated family and its permutations.

</details>
