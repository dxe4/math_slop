# A face kills a cycle

*Difficulty 4 of 5 · [Topology and modern geometry](index.md) · exercise 4 of 8*

Over F₂, orienting signs are unnecessary. A complex has vertices 0,1,2, edges 01,02,12, and the filled face 012. Write the boundary matrices D₁ and D₂ using those row and column orders, verify $D_1D_2=0$, compute their ranks, and find all Betti numbers and the Euler characteristic.

<details>
<summary>Hint 1</summary>

Each edge column has ones at its two endpoints

</details>

<details>
<summary>Hint 2</summary>

The face boundary contains all three edges

</details>

<details>
<summary>Hint 3</summary>

Use $\beta_k=n_k-rank$ D_k-rank D_(k+1)

</details>

<details>
<summary>Worked solution</summary>

With vertex rows 0,1,2 and edge columns 01,02,12, $D_1=[[1,1,0],[1,0,1],[0,1,1]]$. With edge rows in that same order and face column 012, $D_2=[[1],[1],[1]]$. Multiplying gives the zero column because each vertex appears in exactly two boundary edges and $1+1=0$ in F₂. Row reduction gives rank $D_1=2$ and rank $D_2=1$. Counts are $n_0=3,n_1=3,n_2=1$, so $\beta_0=3-0-2=1$, $\beta_1=3-2-1=0$, and $\beta_2=1-1-0=0$. The simplex sum is $3-3+1=1$ and the homology sum is $1-0+0=1$.

**Answer.** Ranks are 2 and 1, Betti numbers are (1,0,0), and $\chi=1$ by both alternating sums.

</details>

*Tags: simplicial homology, boundary matrix, Euler characteristic*
