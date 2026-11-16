# Tail of a linear density

*Easy · [Probability problems](index.md)*

A variable $X$ has density $f(x)=2x$ on $[0,1]$ and zero elsewhere. Find $P(X>1/2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks the density tail over the stated support only."}}
```

<details>
<summary>Hint 1</summary>

Integrate the density over the upper part of its support.

</details>

<details>
<summary>Hint 2</summary>

An antiderivative of $2x$ is $x^2$; evaluate it at the two integration limits.

</details>

<details>
<summary>Worked solution</summary>

The tail is an integral of the nonuniform density, not an interval-length ratio.

1. The density is nonnegative on $[0,1]$ and has integral $[x^2]_0^1=1$.
2. The requested event occupies the part of the support from $1/2$ to one, so its mass is $\int_{1/2}^1 2x\,dx$.
3. Evaluation gives $1-(1/2)^2=3/4$. There is no atom at $1/2$, so strictness at that endpoint is immaterial.

The density integral over $(1/2,1]$ is $3/4$.

</details>
