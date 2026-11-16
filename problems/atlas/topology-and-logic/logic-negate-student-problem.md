# Order nested quantifiers

*Difficulty 2 of 5 · [Logic, sets, and topology](index.md) · exercise 2 of 4*

With variables $s$ ranging over students and $p$ over problems, formalize 'Every student solved at least one problem' using $S(s,p)$, then negate it in symbols and plain language.

<details>
<summary>Hint 1</summary>

The statement begins $\forall s\,\exists p$

</details>

<details>
<summary>Hint 2</summary>

Negation reverses both quantifiers and negates $S$

</details>

<details>
<summary>Worked solution</summary>

The statement is $\forall s\,\exists p\, S(s,p)$. Its negation is $\exists s\,\forall p\, \neg S(s,p)$: there is a student who solved no problem. The negation is not $\exists p\,\forall s\, \neg S(s,p)$, which would only say that one particular problem was solved by nobody. Quantifier order records whether the selected problem may depend on the student.

**Answer.** Statement: $\forall s\,\exists p\, S(s,p)$. Negation: $\exists s\,\forall p\, \neg S(s,p)$, meaning some student solved no problem.

</details>

*Tags: first-order logic, quantifiers, negation*
