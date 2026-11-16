# Normal and misère subtraction

*Difficulty 3 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 10 of 15*

A heap game removes 1 or 2 tokens. Classify P-positions under normal play and under misère play, and prove both modular patterns rather than relying on a table.

<details>
<summary>Hint 1</summary>

Under normal play the terminal heap 0 is P

</details>

<details>
<summary>Hint 2</summary>

Under misère play heap 1 is P because taking the last token loses

</details>

<details>
<summary>Worked solution</summary>

Under normal play, P-positions are multiples of 3. From 3k every move reaches residue 1 or 2; from either nonzero residue, remove that residue to reach a multiple. Base 0 is P, so induction through the recursive P/N rule proves the pattern. Under misère play, terminal heap 0 is N because the player with no move wins, and among positive heaps the P-positions are n≡1 mod 3. Heap 1 is P. From 3k+1, removing 1 or 2 reaches residues 0 or 2, both N; from a positive residue-0 heap n≥3 remove 2 to reach residue 1, and from residue 2 remove 1. The changed terminal rule shifts the pattern.

**Answer.** Normal P: n≡0 mod 3. Misère: n=0 is N, and positive P-heaps satisfy n≡1 mod 3.

</details>

*Tags: combinatorial-games, induction, boundary*
