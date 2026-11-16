# Evaluate empty-domain statements with an explicitly nonempty second domain

*Easy · [Set theory](index.md)*

Let X be empty and $Y=\{0,1\}$. For any predicate P, how many of these three statements are true: (A) every x in X has some y in Y with P(x,y); (B) some y in Y satisfies P(x,y) for every x in X; (C) some x in X satisfies P(x,y) for every y in Y?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact finite witness or truth count only; no proof or automatic expansion of legacy required objectives is supplied."}}
```

<details>
<summary>Hint 1</summary>

A universal statement over an empty domain has no counterexample.

</details>

<details>
<summary>Hint 2</summary>

An existential statement over an empty domain has no witness.

</details>

<details>
<summary>Worked solution</summary>

An empty outer domain and an empty inner domain affect different quantifiers.

1. Statement A is true because its outer universal quantifier ranges over the empty set.
2. For B, either y in the nonempty set Y works: its inner universal statement has no x counterexample. Hence B is true.
3. Statement C is false because no x belongs to X. Thus exactly two statements are true.

</details>
