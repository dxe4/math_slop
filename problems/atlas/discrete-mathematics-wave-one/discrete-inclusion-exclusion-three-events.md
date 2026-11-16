# Three-way inclusion–exclusion

*Difficulty 2 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 4 of 15*

Among 80 learners, 46 study graphs, 41 study counting, and 35 study logic. The pairwise intersections have sizes 24, 19, and 18, and 11 study all three. Find how many study at least one and how many study none.

<details>
<summary>Hint 1</summary>

Add single counts, subtract pair counts, then restore the triple intersection

</details>

<details>
<summary>Hint 2</summary>

Subtract the union from 80 for the second answer

</details>

<details>
<summary>Worked solution</summary>

Let G,C,L denote the three sets. Inclusion–exclusion gives |G∪C∪L|=46+41+35-24-19-18+11. The singles total 122; subtracting pair overlaps gives 61; restoring the triple intersection gives 72. Thus 72 study at least one and 80-72=8 study none. The triple intersection is restored because it was added three times and then subtracted three times.

**Answer.** 72 study at least one; 8 study none.

</details>

*Tags: inclusion-exclusion, computation, combinatorics*
