# Include the endpoint atom

*Easy · [Probability problems](index.md)*

Suppose $P(X=-1)=1/5$, $P(X=0)=2/5$ and $P(X=3)=2/5$. Define $F(t)=P(X\le t)$. Find $F(0)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks the distribution-function value at zero, including its atom, only."}}
```

<details>
<summary>Hint 1</summary>

The definition uses a non-strict inequality.

</details>

<details>
<summary>Hint 2</summary>

Include all masses at values below or equal to zero; omit masses at larger values.

</details>

<details>
<summary>Worked solution</summary>

A distribution-function value includes mass at its argument.

1. The supplied three masses sum to one and exhaust the law.
2. The event $X\le0$ contains the support points $-1$ and $0$, while excluding $3$.
3. Its probability is $1/5+2/5=3/5$. Using $X<0$ would incorrectly omit the endpoint atom and give the left limit rather than $F(0)$.

The included atoms have total mass $1/5+2/5=3/5$.

</details>
