# Locate the false implication case

*Medium · [Discrete mathematics](index.md)*

Let p be true and q be false. Evaluate p→q (implication), q→p (converse), and (not p) or q (rewrite). Enter $1$ for true and $0$ for false. A material implication is false exactly when its premise is true and its conclusion is false; 'or' is inclusive.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"implication":"0","converse":"1","rewrite":"0"},"checker_scope":"Checks only this specified truth-table row and the three supplied formulas; no general proof of logical equivalence is certified."}}
```

<details>
<summary>Hint 1</summary>

p→q now has a true premise and a false conclusion.

</details>

<details>
<summary>Hint 2</summary>

Both not p and q are false in the rewritten expression.

</details>

<details>
<summary>Worked solution</summary>

The direction of an implication matters.

1. p→q is false, while q→p is true because its premise q is false.
2. Since not p and q are both false, their inclusive or is false. Thus implication=$0$, converse=$1$, rewrite=$0$.

</details>
