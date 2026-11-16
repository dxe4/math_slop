# Combine logarithmic endpoint terms through exponentiation

*Medium · [Calculus](index.md)*

For $I=\int_0^1[(x+1)(x+2)]^{-1}\,dx$, find eᴵ exactly.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":3},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Resolve the fraction as a difference of two simple reciprocals.

</details>

<details>
<summary>Hint 2</summary>

Combine the endpoint logarithms before exponentiating.

</details>

<details>
<summary>Worked solution</summary>

An exact logarithmic integral can be represented by its positive exponential.

1. The decomposition is 1/\[(x+1)(x+2)\]=1/(x+1)−1/(x+2).
2. Thus I=\[log(x+1)−log(x+2)\]₀¹=log(2/3)−log(1/2)=log(4/3).
3. Exponentiating gives eᴵ=4/3.

</details>
