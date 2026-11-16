# Antiderivative families: fix constant with initial value

*Medium · [Calculus](index.md)*

Find the polynomial F satisfying $F^{\prime}(x)=3x^{2}+2$ and $F(0)=5$. Return F(x) and an empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"x^3+2x+5","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Increase each power by one and divide by its new exponent.

</details>

<details>
<summary>Hint 2</summary>

Use the initial value after forming the family.

</details>

<details>
<summary>Worked solution</summary>

The condition $F(0)=5$ fixes $C=5$, giving $x^{3}+2x+5$.

1. The full antiderivative family is $x^{3}+2x+C$.
2. The condition $F(0)=5$ fixes $C=5$, giving $x^{3}+2x+5$.

</details>
