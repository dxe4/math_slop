# Count ordered product-bounded triples by nested quotient blocks

*Hard · [Computational arithmetic problems](index.md)*

How many ordered triples of positive integers $(a,b,c)$ satisfy $abc\le60$?

```answer
{"answer":{"kind":"integer","expected":"738","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Fix $a$ and let $D(N)$ count ordered positive pairs with product at most $N$.

</details>

<details>
<summary>Hint 2</summary>

Use the hyperbola formula for $D(N)$ and group the equal values of $\lfloor60/a\rfloor$; do not divide for permutations.

</details>

<details>
<summary>Worked solution</summary>

Nested divisor counting preserves ordered triples while compressing both inner loops.

1. For fixed $a$, there are $D(\lfloor60/a\rfloor)$ pairs, where $D(N)=\sum_{j=1}^N\lfloor N/j\rfloor=2\sum_{j=1}^{\lfloor\sqrt N\rfloor}\lfloor N/j\rfloor-\lfloor\sqrt N\rfloor^2$.
2. For $a=1,\ldots,8$, these values are $261,111,66,45,35,27,20,16$, totaling $581$.
3. The remaining quotient blocks contribute $2D(6)=28$, $2D(5)=20$, $3D(4)=24$, $5D(3)=25$, $10D(2)=30$, and $30D(1)=30$.
4. The sum is $581+28+20+24+25+30+30=738$. Each ordered triple is counted once through its actual first coordinate.

</details>
