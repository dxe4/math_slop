# Quantifier order on the identity relation

*Difficulty 2 of 5 · [Logic and foundations audit studio](index.md) · exercise 1 of 11*

Let $U={a,b}$ and let $R={(a,a),(b,b)}$. Decide the truth of ∀x∃y R(x,y) and ∃y∀x R(x,y). Then push the negation of the first sentence through both quantifiers and evaluate that negation in the same model.

<details>
<summary>Hint 1</summary>

A witness for y may depend on x in the first sentence

</details>

<details>
<summary>Hint 2</summary>

Negating a quantifier changes ∀ to ∃ and ∃ to ∀

</details>

<details>
<summary>Hint 3</summary>

To refute the common-target sentence, check both candidate targets

</details>

<details>
<summary>Worked solution</summary>

For each source x, choose $y=x$, so ∀x∃y R(x,y) is true. No single y works for both sources: $y=a$ fails at $x=b$ and $y=b$ fails at $x=a$, so ∃y∀x R(x,y) is false. The negation of ∀x∃y R(x,y) is ∃x∀y ¬R(x,y). It is false here because every x is related to itself. This also checks that the original sentence and its correctly formed negation receive opposite truth values.

**Answer.** The universal–existential sentence is true, the existential–universal sentence is false, and ¬∀x∃yR is ∃x∀y¬R, which is false here.

</details>

*Tags: quantifier order, negation, finite model*
