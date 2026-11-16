# Ambient space changes the classification

*Difficulty 2 of 5 · [Topology and modern geometry](index.md) · exercise 1 of 8*

Let $X=[0,1]$ with the subspace topology inherited from R, and let $A=[0,1/2)$. Decide whether A is open and whether it is closed in X. Then make the same decisions for A as a subset of R, justifying each answer from definitions.

<details>
<summary>Hint 1</summary>

Express A as X intersected with an open subset of R

</details>

<details>
<summary>Hint 2</summary>

A set is closed when its complement is open in the named ambient space

</details>

<details>
<summary>Hint 3</summary>

Test the endpoint 0 when the ambient space is R

</details>

<details>
<summary>Worked solution</summary>

In X, $A=X\cap (-1,1/2)$, so A is open in the subspace topology. Its complement in X is [1/2,1], which equals X∩[1/2,∞) and is closed in X, not open: every relative neighborhood of 1/2 contains points less than 1/2. Thus A is not closed in X. In R, A is not open because no open interval around 0 lies inside A, and it is not closed because 1/2 is a limit point not included in A. The same underlying set can have different open status after the ambient space changes.

**Answer.** In X, A is open but not closed. In R, A is neither open nor closed.

</details>

*Tags: subspace topology, open set, closed set*
