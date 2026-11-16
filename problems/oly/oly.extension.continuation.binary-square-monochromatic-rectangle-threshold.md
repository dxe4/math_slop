# The first square board forcing a one-color rectangle

*Medium · [Original olympiad-style problems](index.md)*

Every cell of an $n\times n$ array is colored red or blue. Find the smallest $n$ for which every coloring contains two rows and two columns whose four intersection cells have the same color.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

For a $5\times5$ board without such a rectangle, each row must contain two or three red cells; a row with at least four of one color forces a repeated pair with another row.

</details>

<details>
<summary>Hint 2</summary>

Count same-colored column pairs separately in the two colors. A $4\times4$ counterexample has red column pairs $12,13,24,34$ in its four rows.

</details>

<details>
<summary>Worked solution</summary>

Separate pair budgets in the two colors rule out the only possible five-row balance.

1. If a row has at least four red cells, any other row has at most one red in those columns, or a red rectangle occurs. Thus each of the other four rows has at least three blue among those four columns. Their blue column-pair contributions total at least $4\binom32=12$, exceeding the six available pairs, forcing a blue rectangle. The same holds with colors exchanged. Therefore every row of a hypothetical rectangle-free $5\times5$ board has two or three red cells.
2. Let $r$ rows have two red cells and $5-r$ have three. Since no red column pair may repeat across rows, $r\binom22+(5-r)\binom32=15-2r\le\binom52=10$, so $r\ge3$. Blue pairs similarly give $3r+(5-r)=5+2r\le10$, so $r\le2$. Contradiction.
3. For a $4\times4$ counterexample take red pairs $\{1,2\},\{1,3\},\{2,4\},\{3,4\}$ in successive rows. These are distinct, and their blue complementary pairs are also distinct, so no monochromatic rectangle occurs. Restricting to smaller square subarrays supplies counterexamples for every $n<4$ as well.
4. Therefore the least $n$ is $5$.

</details>
