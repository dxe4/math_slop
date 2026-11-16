# Use the variables themselves as inequality weights

*Medium · [Original olympiad-style problems](index.md)*

For positive $a+b=1$, find the minimum of $a^a b^b$ as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Apply weighted arithmetic-geometric mean to the two numbers $1/a$ and $1/b$ with weights a and b.

</details>

<details>
<summary>Hint 2</summary>

The weighted arithmetic mean is exactly two.

</details>

<details>
<summary>Worked solution</summary>

Choose a reciprocal weighted product that reverses into the requested bound.

1. Weighted AM-GM gives $2=a(1/a)+b(1/b)\ge(1/a)^a(1/b)^b$.
2. All quantities are positive, so reciprocation yields $a^ab^b\ge1/2$.
3. Equality requires $1/a=1/b$, hence $a=b=1/2$, which indeed gives one half.

</details>
