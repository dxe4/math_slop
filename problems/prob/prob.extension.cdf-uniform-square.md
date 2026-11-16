# A squared uniform variable

*Medium · [Probability problems](index.md)*

Let $X$ be uniform on $[0,1]$ and set $Y=X^2$. Find $P(Y\le1/4)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks this transformed-event probability on the stated nonnegative support only."}}
```

<details>
<summary>Hint 1</summary>

Translate the condition on $Y$ into a condition on $X$.

</details>

<details>
<summary>Hint 2</summary>

Squaring is increasing on the support of $X$; choose the inverse branch that lies in that support.

</details>

<details>
<summary>Worked solution</summary>

Pull the event back through the square map.

1. On $[0,1]$, $X$ is nonnegative, so $X^2\le1/4$ is equivalent to $0\le X\le1/2$.
2. The uniform law on $[0,1]$ assigns this interval its length $1/2$.
3. Therefore $P(Y\le1/4)=1/2$. No negative square-root branch contributes because $X$ has no negative support.

The pulled-back event is $X\le1/2$, giving probability $1/2$.

</details>
