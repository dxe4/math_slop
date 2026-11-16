# A set that is neither open nor closed

*Difficulty 3 of 5 · [Logic, sets, and topology](index.md) · exercise 3 of 4*

In $\mathbb{R}$ with its usual metric, determine whether $[0,1)$ is open, closed, both, or neither. Justify each failed property directly.

<details>
<summary>Hint 1</summary>

Look at open balls centered at 0

</details>

<details>
<summary>Hint 2</summary>

The missing point 1 is approached by points of the set

</details>

<details>
<summary>Worked solution</summary>

The set is not open: every radius $r>0$ gives a ball around $0$ containing a negative number, so no open ball centered at $0$ lies entirely in $[0,1)$. It is not closed: the sequence $x_n=1-1/n$ lies in $[0,1)$ for $n\ge1$ and converges to $1$, but $1$ is absent. Equivalently, $1$ is a limit point not included in the set. Therefore $[0,1)$ is neither open nor closed.

**Answer.** $[0,1)$ is neither open nor closed in the usual topology on $\mathbb{R}$.

</details>

*Tags: open set, closed set, limit point*
