# Do not forget the filled simplices

*Difficulty 2 of 5 · [Research frontiers claim-boundary studio](index.md) · exercise 8 of 12*

For four Euclidean points at the unit-square corners, build the Vietoris–Rips complex with an edge at distance at most r and every clique filled. Give `(beta0,beta1)` for `0<=r<1`, `r=1`, and `r>=sqrt(2)`, and identify the H1 lifetime thresholds.

<details>
<summary>Hint 1</summary>

Side lengths are 1 and diagonal lengths are sqrt(2)

</details>

<details>
<summary>Hint 2</summary>

At the diagonal threshold every triple is a clique and hence a 2-simplex

</details>

<details>
<summary>Worked solution</summary>

For `0<=r<1`, there are four isolated vertices, so `(beta0,beta1)=(4,0)`. At `r=1`, the side edges form one connected four-cycle without triangles, so `(1,1)`. At `r>=sqrt(2)`, both diagonals appear and the four vertices form a complete clique; all triangles and the 3-simplex are filled, so the complex is contractible and `(1,0)`. Under this closed-threshold convention the H1 class is born at 1 and dies at `sqrt(2)`. Treating the construction as only a graph would incorrectly retain extra cycles.

**Answer.** `(4,0)`, then `(1,1)`, then `(1,0)`; the H1 interval runs from 1 to `sqrt(2)` under the stated convention.

</details>

*Tags: topological-data-analysis, vietoris-rips, persistent-homology*
