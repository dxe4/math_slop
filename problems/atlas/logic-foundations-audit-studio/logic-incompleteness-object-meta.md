# Place incompleteness at the metalevel

*Difficulty 5 of 5 · [Logic and foundations audit studio](index.md) · exercise 10 of 11*

Let T be a consistent effectively axiomatized theory extending enough arithmetic for the Rosser theorem. State what Rosser incompleteness supplies. Then, under the standard additional derivability setup for the second incompleteness theorem, state the conditional conclusion about Con(T). Distinguish each metatheoretic assertion from a sentence written inside T.

<details>
<summary>Hint 1</summary>

Rosser strengthens the original consistency hypothesis for an undecidable sentence

</details>

<details>
<summary>Hint 2</summary>

Con(T) is an arithmetized object-language sentence

</details>

<details>
<summary>Hint 3</summary>

The theorem saying T does not prove it is stated in a metatheory

</details>

<details>
<summary>Worked solution</summary>

Rosser's theorem supplies an arithmetic sentence R_T such that, if T is consistent, neither T⊢R_T nor T⊢¬R_T. The displayed nonderivability claims are metatheoretic statements about the proof relation of T; R_T and ¬R_T are object-language sentences. With an adequate arithmetization of proof and the usual derivability conditions, the second incompleteness theorem says: if T is consistent, then T⊬Con(T), where Con(T) is the particular arithmetic sentence expressing that T has no proof of contradiction. It does not say T proves ¬Con(T), and it does not by itself prove in a weak metatheory that T really is consistent.

**Answer.** Conditionally on consistency, Rosser gives a sentence with neither it nor its negation provable in T, and the second theorem gives T⊬Con(T); both unprovability claims are metatheoretic.

</details>

*Tags: incompleteness, object language, metatheory*
