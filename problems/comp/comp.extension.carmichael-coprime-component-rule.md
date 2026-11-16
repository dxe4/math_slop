# Combine universal exponents through a coprime decomposition

*Easy · [Computational arithmetic problems](index.md)*

For coprime m,n use lambda(mn)=lcm(lambda(m),lambda(n)). Given lambda(8)=2 and lambda(9)=6, find $\lambda(72)$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The two supplied moduli are coprime.

</details>

<details>
<summary>Hint 2</summary>

A universal exponent must be a multiple of both component exponents.

</details>

<details>
<summary>Worked solution</summary>

Chinese remaindering makes the universal exponent the least common multiple of the component exponents.

1. Since 72=8 times 9 with coprime factors, the stated rule applies.
2. The least common multiple of two and six is six.
3. Therefore lambda(72)=6; this need not equal phi(72), which is larger.

</details>
