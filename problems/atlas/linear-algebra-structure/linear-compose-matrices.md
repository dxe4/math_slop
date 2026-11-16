# Why matrix order matters

*Difficulty 3 of 5 · [Linear algebra as structure](index.md) · exercise 3 of 11*

Let $R$ rotate the plane $90^\circ$ counterclockwise and $S$ reflect across the $x$-axis. Compute $RS(1,2)$ and $SR(1,2)$. Interpret why they differ.

<details>
<summary>Hint 1</summary>

Products act right to left

</details>

<details>
<summary>Hint 2</summary>

$R(x,y)=(-y,x)$ and $S(x,y)=(x,-y)$

</details>

<details>
<summary>Worked solution</summary>

First $RS$ means reflect then rotate: $S(1,2)=(1,-2)$, then $R(1,-2)=(2,1)$. For $SR$, rotate then reflect: $R(1,2)=(-2,1)$, then $S(-2,1)=(-2,-1)$. They differ because reflection changes orientation and the axes relative to which the later rotation or reflection acts. Composition of transformations is generally noncommutative.

**Answer.** $RS(1,2)=(2,1)$, while $SR(1,2)=(-2,-1)$.

</details>

*Tags: composition, transformation, noncommutative*
