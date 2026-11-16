# Minimize three pair-sum factors

*Medium · [Original olympiad-style problems](index.md)*

Positive reals satisfy $abc=1$. Find the minimum of $(a+b)(b+c)(c+a)$.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Apply the two-variable arithmetic-geometric mean inequality to each factor.

</details>

<details>
<summary>Hint 2</summary>

When the three resulting lower bounds are multiplied, their square-root product is abc.

</details>

<details>
<summary>Worked solution</summary>

Use three compatible equality conditions.

1. The three factors are at least $2\sqrt{ab}$, $2\sqrt{bc}$ and $2\sqrt{ca}$ respectively.
2. Multiplication gives the lower bound $8abc=8$.
3. Equality requires all variables equal, and the product condition then makes them all one, so the bound is attained.

</details>
