# Find a monic polynomial evaluation kernel

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For $E:P_3(\mathbb R)\to\mathbb R^3$, $E(p)=(p(-1),p(0),p(1))$, give the coefficient vector of the monic generator of $\ker E$, in increasing powers $1,x,x^2,x^3$.

```answer
{"answer":{"kind":"vector","expected":["0","-1","0","1"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The three distinct zeros force three linear factors.

</details>

<details>
<summary>Hint 2</summary>

A cubic divisible by their product is only a scalar multiple of that product.

</details>

<details>
<summary>Worked solution</summary>

Use polynomial divisibility to identify an entire kernel.

1. A kernel polynomial vanishes at minus one, zero and one, so it is divisible by $(x+1)x(x-1)$.
2. This product is monic of degree three, so every kernel element in $P_3$ is a scalar multiple of it.
3. The normalized generator is $x^3-x$, with coefficient vector $[0,-1,0,1]$.

</details>
