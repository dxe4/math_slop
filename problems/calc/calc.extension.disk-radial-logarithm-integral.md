# Use radial area and a squared-radius substitution

*Medium · [Calculus](index.md)*

For the unit disk D let $I=\iint_D\log(1+x^2+y^2)\,dA$. Find exp(I/π+1).

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Polar coordinates give a factor 2πr.

</details>

<details>
<summary>Hint 2</summary>

Set u=r² before integrating the remaining logarithm.

</details>

<details>
<summary>Worked solution</summary>

The radial area factor pairs naturally with a squared-radius variable.

1. Polar coordinates give I=2π∫₀¹r log(1+r²)dr=π∫₀¹log(1+u)du.
2. The last integral is \[(1+u)log(1+u)−(1+u)\]₀¹=2log2−1.
3. Thus I/π+1=2log2, whose exponential is 4.

</details>
