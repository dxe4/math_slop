# Represent a nonnegative real polynomial by two squares

*Hard · [Original olympiad-style problems](index.md)*

Prove every real polynomial nonnegative on the entire real line is a sum $A(x)^2+B(x)^2$ of two real polynomial squares. For degree $2d$, prove the two degrees can be at most d. You may use the fundamental theorem of algebra.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Every real root has even multiplicity, and nonreal roots pair with their complex conjugates.

</details>

<details>
<summary>Hint 2</summary>

Choose one member of every conjugate pair to form a complex polynomial Q with $P=Q\overline Q$.

</details>

<details>
<summary>Model proof</summary>

Factor nonnegativity into a complex polynomial norm.

1. The zero polynomial has the required representation. A nonzero everywhere-nonnegative polynomial has positive leading coefficient, even degree, and even multiplicity at every real root, because an odd multiplicity would change sign locally.
2. By the allowed factorization theorem, split its real-root multiplicities evenly and choose one member of each nonreal conjugate pair, with full multiplicity, into a complex polynomial Q. Use the positive square root of the leading coefficient.
3. Then the coefficient-conjugate polynomial obeys $P=Q\overline Q$. Its degree is half the degree of P.
4. Write $Q=A+iB$ with real polynomial components. Multiplication gives $Q\overline Q=A^2+B^2$, with each component degree at most d.
5. Conversely every such sum is nonnegative on the real line, so the construction identifies precisely the stated class.

**Self-assessment rubric**

- Prove the degree, leading sign and even real-root multiplicities.
- Construct Q with all multiplicities accounted for.
- Convert the complex norm into two real squares with degree control.
- Treat zero and verify nonnegativity of the final form.

</details>
