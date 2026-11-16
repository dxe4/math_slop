# Enumerate smooth integers without duplicate generation paths

*Hard · [Computational arithmetic problems](index.md)*

How many positive integers $n\le1000$ have no prime factors other than $2,3,5$? Include $n=1$.

```answer
{"answer":{"kind":"integer","expected":"86","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use the unique prime-exponent representation rather than generating products in arbitrary order.

</details>

<details>
<summary>Hint 2</summary>

Fix the exponent of $5$, then for each allowed exponent of $3$ count the powers of $2$ below the remaining bound.

</details>

<details>
<summary>Worked solution</summary>

Prime-exponent layers replace a duplicate-prone product search by disjoint finite loops.

1. Each integer has exactly one representation $2^a3^b5^c$ with $a,b,c\ge0$. The possible $c$ are $0,1,2,3,4$.
2. For $c=0$, successive $b$ layers admit $10,9,7,6,4,3,1$ choices of $a$, totaling $40$. For $c=1$, the counts are $8,7,5,3,2$, totaling $25$.
3. For $c=2$ the counts are $6,4,3,1$, totaling $14$; for $c=3$ they are $4,2$, totaling $6$; for $c=4$ only $a=b=0$ is possible.
4. The disjoint layers therefore give $40+25+14+6+1=86$, with the all-zero exponents accounting for $1$.

</details>
