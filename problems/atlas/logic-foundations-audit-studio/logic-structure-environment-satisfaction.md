# Evaluate an open formula under assignments

*Difficulty 2 of 5 · [Logic and foundations audit studio](index.md) · exercise 2 of 11*

In a first-order language with unary P and binary R, let $U={0,1}$, $P={1}$, and $R={(0,1),(1,1)}$. For $φ(x)=P(x)\to ∃y$ R(x,y), evaluate φ under $x=0$ and $x=1$, then evaluate ∀xφ(x). Explain the roles of the variable assignment and the interpretation.

<details>
<summary>Hint 1</summary>

Material implication is false only when its antecedent is true and consequent false

</details>

<details>
<summary>Hint 2</summary>

The assignment supplies x; the existential quantifier searches values for y

</details>

<details>
<summary>Hint 3</summary>

The interpretation tells which tuples belong to P and R

</details>

<details>
<summary>Worked solution</summary>

Under $x=0$, P(0) is false, so the implication is true regardless of its consequent; in fact $y=1$ also satisfies R(0,y). Under $x=1$, P(1) is true and $y=1$ witnesses R(1,y), so the implication is true. Therefore ∀xφ(x) is true. The assignment changes the value denoted by the free occurrence of x. The fixed interpretation supplies the extension {1} of P and the two ordered pairs of R. After x is universally bound, the result is a sentence and no external assignment is needed.

**Answer.** φ is true at $x=0$ and $x=1$, hence ∀xφ(x) is true; assignments value free variables while the model interprets predicate symbols.

</details>

*Tags: structure, assignment, satisfaction*
