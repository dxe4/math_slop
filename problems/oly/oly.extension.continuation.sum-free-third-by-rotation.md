# Find a large sum-free subset by rotating residues

*Hard · [Original olympiad-style problems](index.md)*

Let $A$ be a finite set of $n$ positive integers. Prove that it contains a subset $B$ with $|B|\ge\lceil n/3\rceil$ such that $x+y\ne z$ for all $x,y,z\in B$; the two summands may be equal. Elementary averaging over a real parameter may be used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For $0\le t<1$, select $a$ when the fractional part of $at$ lies in $(1/3,2/3)$.

</details>

<details>
<summary>Hint 2</summary>

Each fixed positive integer is selected for a total parameter length $1/3$. Two selected fractional parts cannot add modulo one to another selected fractional part.

</details>

<details>
<summary>Model proof</summary>

An arc avoiding its own pairwise sums gives a sum-free set for each parameter, and averaging supplies the size.

1. For parameter $t$, define $B_t=\{a\in A:\{at\}\in(1/3,2/3)\}$. If $x,y$ belong to it, the sum of their fractional parts lies in $(2/3,4/3)$. Reduced modulo one, it lies in $(2/3,1)$ or $[0,1/3)$, never in $(1/3,2/3)$. Thus $x+y$ cannot be another member, including when $x=y$.
2. For a positive integer $a$, the map $t\mapsto\{at\}$ traverses the unit interval exactly $a$ times at constant speed as $t$ ranges over $[0,1)$. The total length of parameters selecting $a$ is therefore exactly $1/3$.
3. Adding these finitely many selection lengths gives $\int_0^1|B_t|\,dt=n/3$. Hence some parameter has integer size at least $\lceil n/3\rceil$: otherwise every size would be at most that ceiling minus one, strictly below the average.
4. The finite boundary parameters where $at$ hits $1/3$ or $2/3$ have zero length and do not affect the average. For $n=0$, take the empty set directly. The method proves existence and the displayed lower bound, without claiming it is optimal for every input set.

**Self-assessment rubric**

- Check addition modulo one including equal summands and interval endpoints.
- Compute the exact one-third selection length for each positive integer.
- Pass from the finite integral to the ceiling lower bound.
- Handle the empty input and avoid an unjustified optimality claim.

</details>
