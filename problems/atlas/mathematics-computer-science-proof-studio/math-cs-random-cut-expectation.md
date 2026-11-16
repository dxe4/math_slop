# From random cut to deterministic existence

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 9 of 15*

Independently place each vertex of an undirected graph left or right with probability 1/2. Prove expected crossing edges equal |E|/2 and conclude a cut of at least that size exists. Which part needs independence?

<details>
<summary>Hint 1</summary>

Use one indicator per edge

</details>

<details>
<summary>Hint 2</summary>

Each edge crosses when endpoints differ

</details>

<details>
<summary>Hint 3</summary>

Linearity of expectation does not require indicators to be independent

</details>

<details>
<summary>Worked solution</summary>

For edge $e=\{u,v\}$, let $I_e$ be one if endpoints land on different sides. The four equally likely endpoint assignments are LL, LR, RL, RR, and two cross, so $\mathbb{E}[I_e]=\Pr(I_e=1)=1/2$. Cut size $C=\sum_e I_e$, hence $\mathbb{E}[C]=\sum_e\mathbb{E}[I_e]=|E|/2$ by linearity. If every cut had fewer than $|E|/2$ edges, their probability-weighted average would also be smaller, contradiction; therefore some cut has at least half the edges. Independent fair vertex assignments justify the one-edge probability calculation. The edge indicators themselves are generally dependent, but their independence is not needed for linearity.

**Answer.** Each edge crosses with probability 1/2, so E[C]=|E|/2 and at least one cut meets the expectation.

</details>

*Tags: randomized algorithms, linearity of expectation, probabilistic method, cut*
