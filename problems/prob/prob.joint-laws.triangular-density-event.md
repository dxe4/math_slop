# Integrate an event in a triangular joint density

*Hard · [Probability problems](index.md)*

A pair $(X,Y)$ has density $f(x,y)=2$ for $0<x<y<1$ and zero elsewhere. Find $P(X+Y<1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Intersect the event with the triangular support before integrating.

</details>

<details>
<summary>Hint 2</summary>

The upper bound on the first coordinate changes where the second coordinate reaches one half.

</details>

<details>
<summary>Worked solution</summary>

Split the triangular integration region where its two possible upper boundaries cross.

1. The support has area $1/2$, so density $2$ is correctly normalized.
2. For $0<y<1/2$, the event allows $0<x<y$; for $1/2\le y<1$, it allows $0<x<1-y$.
3. The probability is $2\int_0^{1/2}y\,dy+2\int_{1/2}^1(1-y)\,dy$.
4. Each unweighted integral equals $1/8$, so the total is $2(1/8+1/8)=1/2$.

</details>
