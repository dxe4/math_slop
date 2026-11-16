# Prove the inverse characterization with both directions

*Hard · [Set theory](index.md)*

For a map $f:X\to Y$, prove that a map g:Y to X with g composed with f equal to the identity on X and f composed with g equal to the identity on Y exists exactly when f is bijective.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

One composition identity gives injectivity and the other gives surjectivity.

</details>

<details>
<summary>Hint 2</summary>

For a bijection, assign each target its unique preimage and check both compositions.

</details>

<details>
<summary>Model proof</summary>

Two inverse identities express two different required mapping properties.

1. If the identities hold and f(x)=f(x prime), applying g gives x=x prime, so f is injective.
2. For each y in Y, the identity f(g(y))=y supplies a preimage, so f is surjective.
3. Conversely, when f is bijective, define g(y) as the unique x with f(x)=y. Existence and uniqueness follow from surjectivity and injectivity.
4. This definition gives both stated composition identities, completing the equivalence.

**Self-assessment rubric**

- Use the left-inverse identity to compare two inputs.
- Use the right-inverse identity to produce every target value.
- Construct the inverse from a bijection and check both identities.

</details>
