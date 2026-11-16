# Keep soundness and completeness facing the right way

*Difficulty 3 of 5 · [Logic and foundations audit studio](index.md) · exercise 6 of 11*

For a standard sound and complete proof calculus for classical first-order logic, classify and justify: (a) Γ⊢φ implies Γ⊨φ; (b) Γ⊨φ implies Γ⊢φ; (c) Γ⊬φ implies Γ⊨¬φ; (d) one finite model satisfying φ implies ⊢φ.

<details>
<summary>Hint 1</summary>

Soundness goes from derivation to semantic consequence

</details>

<details>
<summary>Hint 2</summary>

Completeness goes from semantic consequence to derivation

</details>

<details>
<summary>Hint 3</summary>

Failure of consequence gives some countermodel, not agreement of every model

</details>

<details>
<summary>Hint 4</summary>

Validity quantifies over all structures

</details>

<details>
<summary>Worked solution</summary>

Statement (a) is soundness and (b) is completeness. Statement (c) is false: by the contrapositive of completeness, Γ⊬φ implies Γ⊭φ, so some model of Γ makes φ false; it does not follow that every model of Γ makes φ false. Different models may disagree. Statement (d) is false because one satisfying model establishes only local truth. To infer ⊢φ from completeness one first needs ⊨φ, meaning truth in every structure under the chosen semantics. These are metatheorems about the named calculus and semantics, not formulas inside Γ.

**Answer.** (a) and (b) are true by soundness and completeness; (c) and (d) are false because a countermodel or one satisfying model does not determine all models.

</details>

*Tags: soundness, completeness, semantic consequence*
