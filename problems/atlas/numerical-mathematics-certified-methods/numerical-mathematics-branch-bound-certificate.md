# Complete a branch-and-bound proof

*Difficulty 5 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 15 of 16*

Maximize `5x+4y` subject to `6x+4y<=17` and nonnegative integer x,y. Build a branch-and-bound certificate beginning with the LP relaxation, branching first on y, and report every bound and pruning reason.

<details>
<summary>Hint 1</summary>

In the relaxation, y gives more objective per unit of the single constraint

</details>

<details>
<summary>Hint 2</summary>

After imposing y<=4, the relaxed solution has x=1/6 and y=4

</details>

<details>
<summary>Worked solution</summary>

At the root, y yields value per constraint unit `4/4=1`, larger than x's `5/6`, so the LP optimum is `(0,17/4)` with upper bound 17. Branch on fractional y: node B with `y>=5` is infeasible because `4y>=20>17`. Node A with `y<=4` has LP optimum `y=4,x=1/6`, upper bound `16+5/6=101/6`. Branch on x. A1 with `x<=0` forces x=0 and has integer optimum `(0,4)`, value 16, establishing the incumbent. A2 with `x>=1` has relaxed optimum `(1,11/4)`, value 16. Branch on y there. A2-high with `y>=3` is infeasible because `6+12>17`. A2-low with `y<=2` has relaxed optimum `y=2,x=3/2`, value `8+15/2=15.5`, below incumbent 16, so prune by bound. No live node can exceed 16, and `(0,4)` is feasible; therefore 16 is certified optimal.

**Answer.** Root upper bound 17; branches close by infeasibility, integer incumbent 16, and a final 15.5 bound, certifying (0,4) as optimal.

</details>

*Tags: integer-optimization, branch-and-bound, certificate, exact-search*
