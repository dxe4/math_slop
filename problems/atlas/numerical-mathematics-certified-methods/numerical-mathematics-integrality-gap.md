# Certify the five-cycle gap

*Difficulty 5 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 14 of 16*

For a five-cycle, maximize `sum x_i` with binary variables and edge constraints `x_i+x_(i+1)<=1`. Prove the integer optimum is 2, prove the LP relaxation optimum is 5/2, and give one valid inequality that closes the gap.

<details>
<summary>Hint 1</summary>

Exhibit two nonadjacent vertices

</details>

<details>
<summary>Hint 2</summary>

Sum all five edge inequalities

</details>

<details>
<summary>Worked solution</summary>

Selecting any two nonadjacent vertices is binary feasible, so the integer optimum is at least 2. No three vertices can be chosen: among three selected positions on a five-cycle, two must be adjacent, violating an edge constraint. Thus the integer optimum is exactly 2. In the relaxation, setting every `x_i=1/2` is feasible and has value `5/2`. Summing the five edge inequalities counts every variable twice and gives `2 sum x_i<=5`, so no relaxed point has value above `5/2`; the LP optimum is exactly `5/2`. The odd-cycle inequality `sum x_i<=2` is valid for every binary feasible point by the no-three argument and removes the fractional half-vector. It closes this objective gap and strengthens the relaxation without removing integer solutions.

**Answer.** Integer optimum 2, LP optimum 5/2, and the valid odd-cycle cut `sum x_i<=2` closes the gap.

</details>

*Tags: integer-optimization, relaxation, integrality-gap, valid-inequality*
