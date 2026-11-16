# Optimize production at a feasible vertex

*Difficulty 3 of 5 · [Information, coding, and optimization](index.md) · exercise 4 of 4*

Maximize 3x+2y subject to $x+y\le 4$, $2x+y\le 6$, and $x,y\ge 0$. List the feasible vertices and identify the optimal production plan.

<details>
<summary>Hint 1</summary>

Find intercepts on both nonnegative axes

</details>

<details>
<summary>Hint 2</summary>

Solve the two sloping boundary equations together

</details>

<details>
<summary>Hint 3</summary>

Evaluate the objective at every vertex

</details>

<details>
<summary>Worked solution</summary>

The feasible vertices are (0,0), (0,4), (3,0), and the intersection of $x+y=4$ with $2x+y=6$. Subtracting gives $x=2$ and then $y=2$, so the intersection is (2,2). The objective values are respectively 0, 8, 9, and 10. A linear objective on this bounded polygon attains a maximum at a vertex, and the largest tested value is 10 at (2,2).

**Answer.** The maximum is 10 at $(x,y)=(2,2)$.

</details>

*Tags: linear programming, feasible region, vertex method*
