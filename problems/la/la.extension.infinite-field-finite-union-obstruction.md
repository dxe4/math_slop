# Prove proper subspaces cannot finitely cover over an infinite field

*Hard · [Linear algebra problems](index.md)*

All spaces are finite-dimensional over the stated field. Let $V$ be a positive-dimensional finite-dimensional vector space over an infinite field $F$. Prove no finite union of proper linear subspaces equals $V$. Give a counterexample over $\mathbb F_2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For each proper subspace, extend a basis and construct a nonzero functional annihilating it.

</details>

<details>
<summary>Hint 2</summary>

The product of these functionals is a nonzero polynomial; prove a nonzero polynomial cannot vanish on every point of an infinite field.

</details>

<details>
<summary>Model proof</summary>

Turn finitely many linear exclusions into a polynomial nonvanishing argument.

1. For each proper $U_j$, extend a basis to one of $V$ and choose a nonzero coordinate functional $f_j$ vanishing on $U_j$. The product $P=\prod_j f_j$ is nonzero because the coordinate polynomial ring over a field is an integral domain.
2. A nonzero polynomial in one variable has finitely many roots. Induct on the number of variables: choose values for all but the last variable where a nonzero coefficient polynomial stays nonzero, then choose the last value outside the finitely many roots. Infinitude of $F$ makes both choices possible.
3. Thus some $v$ has $P(v)\ne0$, so it lies in none of the $U_j$. Over $\mathbb F_2$, the three lines spanned by $(1,0)$, $(0,1)$ and $(1,1)$ do cover the whole two-dimensional space, showing the field assumption is necessary.

**Self-assessment rubric**

- Construct nonzero functionals vanishing on each proper subspace.
- Explain why their product is a nonzero coordinate polynomial.
- Prove nonvanishing at some field-valued input using induction and the root bound.
- Give a finite-field union of proper subspaces that really covers.

</details>
