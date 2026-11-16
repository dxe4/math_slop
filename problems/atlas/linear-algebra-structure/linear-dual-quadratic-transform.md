# Do not confuse similarity and congruence

*Difficulty 4 of 5 · [Linear algebra as structure](index.md) · exercise 10 of 11*

A quadratic form is $q(x)=x^\mathsf{T}Bx$. Under coordinates $x=Py$, derive its new matrix. Contrast this with the coordinate matrix of an operator $A$ under the same basis change.

<details>
<summary>Hint 1</summary>

Substitute $x=Py$ in both occurrences

</details>

<details>
<summary>Hint 2</summary>

An operator output must be converted back

</details>

<details>
<summary>Worked solution</summary>

Substitution gives $q(Py)=(Py)^\mathsf{T}B(Py)=y^\mathsf{T}(P^\mathsf{T}BP)y$, so the form matrix changes by congruence to $P^\mathsf{T}BP$. An operator sends $x$ to $Ax$; converting both input and output coordinates gives $P^{-1}AP$. Forms have two vector slots feeding a scalar, whereas an operator has an input and an output in the same vector space.

**Answer.** The form becomes $P^\mathsf{T}BP$; an operator becomes $P^{-1}AP$.

</details>

*Tags: duality, quadratic form, congruence*
