# Strictly separate a point from a compact convex set

*Hard · [Geometry and trigonometry problems](index.md)*

Let $K\subset\mathbb R^2$ be nonempty, compact and convex, and let $P\notin K$. Prove that a straight line strictly separates $P$ from all of $K$. Construct the line from a nearest point of $K$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Compactness gives a nearest point $Q\in K$.

</details>

<details>
<summary>Hint 2</summary>

For $X\in K$, points $Q+t(X-Q)$ stay in $K$; compare their squared distances to $P$ for small positive $t$.

</details>

<details>
<summary>Model proof</summary>

Use the first-order inequality of a nearest point and place a line in the positive gap.

1. The continuous distance to $P$ attains its minimum at $Q\in K$. Set $n=P-Q\ne0$.
2. For $X\in K$ and $0\le t\le1$, convexity gives $Q+t(X-Q)\in K$. Its squared distance to $P$ is $|n|^2-2t\,n\cdot(X-Q)+t^2|X-Q|^2$.
3. Minimality at $t=0$ forces $n\cdot(X-Q)\le0$: if it were positive, a sufficiently small positive $t$ would lower the squared distance.
4. Thus $n\cdot X\le n\cdot Q$ for every $X\in K$, whereas $n\cdot P=n\cdot Q+|n|^2$.
5. The line $n\cdot x=n\cdot Q+|n|^2/2$ leaves $K$ strictly on one side and $P$ strictly on the other, providing the required explicit separating line.

**Self-assessment rubric**

- Use compactness and exterior placement to obtain a nonzero nearest-point displacement.
- Compare squared distances along every permitted segment.
- Derive the correct sign of the supporting inequality.
- Place the line in a positive gap and verify strict separation.

</details>
