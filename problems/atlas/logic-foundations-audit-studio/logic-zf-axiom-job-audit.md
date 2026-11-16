# Match set constructions to their axiom jobs

*Difficulty 3 of 5 · [Logic and foundations audit studio](index.md) · exercise 4 of 11*

Work in ZF. For a set A and a formula φ(x), identify the main axiom or schema used to form (i) ${x\in A:φ(x)}$, (ii) ${{x}:x\in A}$, and (iii) P(A). Which of these principles are schemas? Finally, say whether choosing one element from every member of an arbitrary family of nonempty sets follows from these constructions alone.

<details>
<summary>Hint 1</summary>

Separation cuts down an already available set

</details>

<details>
<summary>Hint 2</summary>

Replacement collects the image of a set under a definable functional rule

</details>

<details>
<summary>Hint 3</summary>

Power set collects all subsets

</details>

<details>
<summary>Hint 4</summary>

Arbitrary simultaneous choice is the additional issue

</details>

<details>
<summary>Worked solution</summary>

Construction (i) uses an instance of the Separation schema: it selects from the bounding set A. Construction (ii) can be obtained by Replacement applied to the definable functional rule $x\mapsto {x}$, with Pairing supplying each singleton. Construction (iii) uses the Power Set axiom. Separation and Replacement are schemas because there is an instance for each suitable formula in the first-order language; Power Set is one axiom. None of these alone supplies a choice function for every arbitrary family of nonempty sets. That general statement is the Axiom of Choice, added in ZFC; finite choices and many specially structured choices can be proved in ZF.

**Answer.** (i) Separation, (ii) Replacement plus Pairing, (iii) Power Set; Separation and Replacement are schemas, and arbitrary family choice is not thereby obtained in ZF.

</details>

*Tags: ZF, separation, replacement, choice*
