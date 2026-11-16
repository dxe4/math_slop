# Optimise an integer tail using a non-obvious moment polynomial

*Hard · [Probability problems](index.md)*

A nonnegative integer-valued random variable $N$ satisfies $EN=1$ and $EN^2=2$. Find the largest possible value of $P(N\ge3)$, and give a joint moment-and-attainment justification in your working.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Only the requested exact bounded result is checked; the construction, proof and optimality argument remain personal mathematical work, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Search for a nonnegative polynomial on the nonnegative integers that is small at the low states and bounded below on the tail.

</details>

<details>
<summary>Hint 2</summary>

After obtaining a moment bound, choose a small support that makes each inequality an equality.

</details>

<details>
<summary>Worked solution</summary>

An integer factorial-moment majorant is sharper than applying a raw second-moment bound.

1. The constraints imply $E[N(N-1)]=EN^2-EN=1$. This polynomial is nonnegative at every nonnegative integer.
2. On $N\ge3$, its value is at least $6$, so $1\ge6P(N\ge3)$ and the tail is at most $1/6$.
3. Put masses $1/3,1/2,1/6$ at $0,1,3$ respectively. Their first moment is $1/2+3/6=1$ and their second moment is $1/2+9/6=2$.
4. The constructed tail probability is $1/6$, so the bound is attainable and optimal.

</details>
