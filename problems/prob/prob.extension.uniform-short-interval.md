# Uniform mass of a short interval

*Easy · [Probability problems](index.md)*

Let $X$ be uniform on $[0,4]$. Find $P(1\le X\le2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks this interval probability under the stated uniform law only."}}
```

<details>
<summary>Hint 1</summary>

A uniform density assigns probability in proportion to interval length.

</details>

<details>
<summary>Hint 2</summary>

Compare the target interval length with the full support length.

</details>

<details>
<summary>Worked solution</summary>

Integrate the constant density over the target interval.

1. The uniform law has density $1/4$ on $[0,4]$ and zero elsewhere.
2. The interval $[1,2]$ has length $2-1=1$ and lies entirely in the support.
3. Thus $P(1\le X\le2)=\int_1^2(1/4)\,dx=1/4$. Endpoints have probability zero.

The ratio of lengths is $1/4$.

</details>
