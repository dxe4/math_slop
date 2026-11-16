# Breadth-first search layers

*Difficulty 3 of 5 · [Discrete algorithms and invariants](index.md) · exercise 3 of 4*

An undirected graph has edges AB, AC, BD, CD, CE, DF, and EF. Run breadth-first search from A, give every vertex's distance from A, and exhibit a shortest path to F.

<details>
<summary>Hint 1</summary>

The first layer after A is {B,C}

</details>

<details>
<summary>Hint 2</summary>

Discover neighbors layer by layer with a queue

</details>

<details>
<summary>Worked solution</summary>

Start with layer $0$: $\{A\}$. Its undiscovered neighbors form layer $1$: $\{B,C\}$. From $B$ and $C$, the new vertices are $D$ and $E$, giving layer $2$: $\{D,E\}$. From either $D$ or $E$, discover $F$ in layer $3$. Thus $d(A)=0$, $d(B)=d(C)=1$, $d(D)=d(E)=2$, and $d(F)=3$. For example $A-B-D-F$ is a path of length $3$. BFS cannot have missed a shorter path because it fully explores all vertices at distances $0$, $1$, and $2$ before assigning distance $3$.

**Answer.** Distances are $0,1,1,2,2,3$ for $A,B,C,D,E,F$; $A-B-D-F$ is one shortest path.

</details>

*Tags: breadth-first search, graph distance, shortest path*
