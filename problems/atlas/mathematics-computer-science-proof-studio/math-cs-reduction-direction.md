# Repair an NP-hardness argument

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 14 of 15*

A student maps every instance of new problem X in polynomial time to SAT and concludes X is NP-hard. Diagnose the direction error. State the two obligations for proving X is NP-complete.

<details>
<summary>Hint 1</summary>

A solver for the destination solves the source

</details>

<details>
<summary>Hint 2</summary>

To show X hard, begin with a known hard source

</details>

<details>
<summary>Hint 3</summary>

Completeness also requires membership

</details>

<details>
<summary>Worked solution</summary>

A reduction $X\le pSAT$ says that a SAT solver can solve X after translation, so X is no harder than SAT under this reduction. It does not show every NP problem can be solved using X. To prove X NP-hard, reduce a known NP-hard problem Y to X, constructing f with $y\in Y$ iff $f(y)\in X$ and bounding time and output size. To prove X NP-complete, also show $X\in NP$ by providing polynomial-length certificates and a polynomial-time verifier for yes-instances. Merely having an exponential algorithm, or reducing X to a hard problem, establishes neither obligation.

**Answer.** $X\le pSAT$ is the wrong direction for hardness; prove $Y\le pX$ from known NP-hard Y and separately prove $X\in NP$.

</details>

*Tags: algorithms and complexity, reduction, NP-completeness, proof repair*
