# Find counterexamples to a quantified statement by rows

*Easy · [Set theory](index.md)*

On D={a,b,c}, a predicate P has truth matrix $\begin{pmatrix}1&0&1\\0&0&0\\1&1&0\end{pmatrix}$, with rows x and columns y both ordered a,b,c. How many x in D are counterexamples to the claim that for every x there exists y with P(x,y)?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact finite witness or truth count only; no proof or automatic expansion of legacy required objectives is supplied."}}
```

<details>
<summary>Hint 1</summary>

A fixed x is a counterexample precisely when its entire row is false.

</details>

<details>
<summary>Hint 2</summary>

The universal claim fails if even one such row exists.

</details>

<details>
<summary>Worked solution</summary>

The outer quantifier asks which rows lack any inner witness.

1. The row for a has witnesses y=a and y=c, so a is not a counterexample.
2. The row for b has no true entry, while the row for c has true entries at y=a,b.
3. Thus exactly one value, b, is a counterexample.

</details>
