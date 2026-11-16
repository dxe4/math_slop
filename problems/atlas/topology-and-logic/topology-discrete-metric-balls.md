# Open balls in the discrete metric

*Difficulty 3 of 5 · [Logic, sets, and topology](index.md) · exercise 4 of 4*

On a set $X$ define $d(x,y)=0$ when $x=y$ and $d(x,y)=1$ otherwise. Describe every open ball $B_r(x)$ for $r>0$ and prove that every subset of $X$ is open.

<details>
<summary>Hint 1</summary>

Separate the cases $0<r\le1$ and $r>1$

</details>

<details>
<summary>Hint 2</summary>

For an arbitrary subset $U$, choose a small ball around each $x\in U$

</details>

<details>
<summary>Worked solution</summary>

If $0<r\le1$, the strict inequality $d(x,y)<r$ holds only for $y=x$, so $B_r(x)=\{x\}$. If $r>1$, both possible distances $0$ and $1$ are less than $r$, so $B_r(x)=X$. Given any $U\subseteq X$ and any $x\in U$, the ball $B_1(x)=\{x\}$ is contained in $U$. Hence every point of $U$ has an open ball contained in $U$, and $U$ is open. Thus the metric induces the discrete topology; complements are also open, so every subset is closed as well.

**Answer.** $B_r(x)=\{x\}$ for $0<r\le1$ and $X$ for $r>1$; consequently every subset is open.

</details>

*Tags: discrete metric, open ball, discrete topology*
