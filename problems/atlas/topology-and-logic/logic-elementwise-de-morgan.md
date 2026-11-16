# Prove a set identity elementwise

*Difficulty 2 of 5 · [Logic, sets, and topology](index.md) · exercise 1 of 4*

For arbitrary sets $A$, $B$, and $C$, prove $A\setminus(B\cup C) = (A\setminus B)\cap(A\setminus C)$ by following an arbitrary element through both descriptions.

<details>
<summary>Hint 1</summary>

Translate set difference as 'in the first set and not in the second'

</details>

<details>
<summary>Hint 2</summary>

Apply De Morgan's law to membership statements

</details>

<details>
<summary>Worked solution</summary>

Let $x$ be arbitrary. Then $x\in A\setminus(B\cup C)$ exactly when $x\in A$ and $x\notin B\cup C$. The latter nonmembership means $x\notin B$ and $x\notin C$. Thus the condition is equivalent to $(x\in A \text{ and } x\notin B)$ and $(x\in A \text{ and } x\notin C)$, which says $x\in(A\setminus B)\cap(A\setminus C)$. Every $x$ belongs to the left side exactly when it belongs to the right side, so the sets are equal.

**Answer.** Both sides contain exactly those $x$ in $A$ that are in neither $B$ nor $C$.

</details>

*Tags: set identity, De Morgan law, elementwise proof*
