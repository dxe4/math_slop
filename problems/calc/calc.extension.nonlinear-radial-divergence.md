# Differentiate a radial field with a varying scalar factor

*Medium · [Calculus](index.md)*

For F(x,y,z)=(x,y,z)/(1+x²+y²+z²), compute $\nabla\cdot F$ at (1,0,0).

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Each diagonal derivative includes a numerator derivative and a denominator derivative.

</details>

<details>
<summary>Hint 2</summary>

Sum the three terms before evaluating the radius.

</details>

<details>
<summary>Worked solution</summary>

The divergence of a scaled radial field includes the scale’s spatial variation.

1. With r²=x²+y²+z², each ∂\_i\[x\_i/(1+r²)\]=1/(1+r²)−2x\_i²/(1+r²)².
2. Adding gives div F=3/(1+r²)−2r²/(1+r²)²=(3+r²)/(1+r²)².
3. At r²=1 this is 4/4=1.

</details>
