# Prove an allocation optimum without a graph

*Difficulty 3 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 5 of 12*

Maximize 3x+2y subject to $x+y\le 4$, $2x+y\le 6$, and $x,y\ge 0$. Verify that (2,2) is optimal by constructing nonnegative multipliers for the two capacity constraints.

<details>
<summary>Hint 1</summary>

The candidate makes both constraints tight

</details>

<details>
<summary>Hint 2</summary>

Try multiplier one on each

</details>

<details>
<summary>Hint 3</summary>

Add the weighted constraints

</details>

<details>
<summary>Worked solution</summary>

The point (2,2) is feasible because $2+2=4$ and $4+2=6$; its objective is 10. Add one copy of each constraint: $(x+y)+(2x+y)\le 4+6$, so $3x+2y\le 10$ for every feasible nonnegative point. Equivalently dual multipliers $u=v=1$ satisfy coefficient bounds $u+2v=3$ and $u+v=2$ and have dual value 10. The candidate attains the universal upper bound, proving optimality. This certificate applies to the written continuous allocation, not omitted integer or welfare constraints.

**Answer.** Multipliers (1,1) give upper bound 10, attained at (2,2), so the continuous model optimum is 10.

</details>

*Tags: operations research, linear program, duality, allocation*
