# Read a relative independence result correctly

*Difficulty 4 of 5 · [Logic and foundations audit studio](index.md) · exercise 5 of 11*

Suppose the metatheory has established both Con(ZFC)⇒Con(ZFC+CH) and Con(ZFC)⇒Con(ZFC+¬CH). Assuming ZFC is consistent, what follows about proving or refuting CH in ZFC? List two conclusions that do not follow from these implications.

<details>
<summary>Hint 1</summary>

If ZFC proved CH, adding ¬CH would create an inconsistency

</details>

<details>
<summary>Hint 2</summary>

Both implications begin with a consistency assumption

</details>

<details>
<summary>Hint 3</summary>

Truth is evaluated inside a model, not by combining incompatible extensions

</details>

<details>
<summary>Worked solution</summary>

Assume ZFC is consistent. If ZFC proved CH, then ZFC+¬CH would be inconsistent, contradicting the second relative-consistency implication. If ZFC proved ¬CH, then ZFC+CH would be inconsistent, contradicting the first. Thus CH is neither provable nor refutable in ZFC, under the stated metatheoretic results and consistency assumption. The implications do not prove Con(ZFC), because they are conditional on it. They also do not say CH and ¬CH are simultaneously true in one model, nor that CH lacks a determinate truth value in every stronger foundational setting.

**Answer.** Conditionally on Con(ZFC), CH is independent of ZFC; this neither proves ZFC consistent nor makes CH and ¬CH true in one model.

</details>

*Tags: relative consistency, independence, continuum hypothesis*
