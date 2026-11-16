# Negate nested quantifiers

*Medium · [Foundations bridge](index.md)*

Over fixed nonempty domains X and Y, which statement is the negation of “For every x in X, there exists y in Y with R(x,y)”? Select the mathematically correct statement from the four alternatives.

**Options**

1. There exists x in X such that for every y in Y, not R(x,y).
2. For every x in X, there exists y in Y with not R(x,y).
3. There exists y in Y such that for every x in X, R(x,y).
4. There exists x in X and there exists y in Y such that not R(x,y).

```answer
{"answer":{"kind":"multiple_choice","expected":"there_exists_x_in","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["there_exists_x_in","for_every_x_in","there_exists_y_in","not_r_x_y"]}
```

<details>
<summary>Hint 1</summary>

Negate the outer quantifier first.

</details>

<details>
<summary>Hint 2</summary>

Then negate the inner existential quantifier and finally the relation.

</details>

<details>
<summary>Worked solution</summary>

Nested quantifier negation preserves order while switching each quantifier.

1. Negating the outer universal gives “there exists x” followed by the negation of the inner statement.
2. Negating the inner existential gives “for every y, not R.” Thus the full negation is “there exists x such that for every y, not R(x,y).”

</details>
