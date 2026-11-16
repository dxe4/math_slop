# The sign of a positive-time Brownian value

*Easy · [Probability problems](index.md)*

For standard Brownian motion, find $P(B_2>0)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the positive-half-line probability at this strictly positive time only."}}
```

<details>
<summary>Hint 1</summary>

Identify the centred normal law of the Brownian value.

</details>

<details>
<summary>Hint 2</summary>

Use symmetry together with its lack of an atom at zero; positive time ensures a nondegenerate normal law.

</details>

<details>
<summary>Worked solution</summary>

A centred nondegenerate normal law splits equally at zero.

1. Standard Brownian normalisation gives $B_2\sim N(0,2)$.
2. This law is symmetric about zero and has a density, so $P(B_2=0)=0$ and $P(B_2>0)=P(B_2<0)$.
3. The two equal probabilities add to one, yielding $P(B_2>0)=1/2$. The time-zero value would instead be deterministically zero.

The positive half-line has probability $1/2$.

</details>
