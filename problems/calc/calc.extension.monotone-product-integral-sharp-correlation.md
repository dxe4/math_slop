# Prove a sharp monotone-product integral inequality

*Hard · [Calculus](index.md)*

For continuous nondecreasing f,g on \[0,1\], prove $\int_0^1fg\ge(\int_0^1f)(\int_0^1g)$. Prove equality holds exactly when at least one function is constant. Derive the two-variable identity you use rather than citing a named correlation inequality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Integrate (f(x)−f(y))(g(x)−g(y)) over the unit square.

</details>

<details>
<summary>Hint 2</summary>

Its expansion is twice the desired difference; for strictness use neighborhoods of opposite endpoints when both functions are nonconstant.

</details>

<details>
<summary>Model proof</summary>

Agreement of order makes every pairwise output difference product nonnegative.

1. Since f,g are nondecreasing, (f(x)−f(y))(g(x)−g(y))≥0 for every x,y. It is continuous on the square, so its double integral is nonnegative.
2. Expanding and applying Fubini gives that double integral as 2∫₀¹f(x)g(x)dx−2(∫₀¹f)(∫₀¹g). This proves the inequality.
3. If one function is constant, direct substitution gives equality. Conversely if both are nonconstant, monotonicity gives f(1)&gt;f(0) and g(1)&gt;g(0). At (x,y)=(1,0) the difference product is strictly positive.
4. Continuity keeps it positive on a small rectangle of positive area near that corner, while it is nonnegative elsewhere. Its integral is therefore positive, making the inequality strict. This proves the exact equality characterization.

**Self-assessment rubric**

- Shows nonnegativity of the difference product for every ordered pair.
- Expands its integral and derives exactly twice the desired difference.
- Verifies equality for either constant function.
- Uses endpoint differences and continuity to prove strictness when both functions are nonconstant.

</details>
