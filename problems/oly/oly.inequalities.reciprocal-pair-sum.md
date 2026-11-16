# Bound a cyclic reciprocal sum sharply

*Hard · [Original olympiad-style problems](index.md)*

Positive reals a,b,c have sum $2$. Find the minimum of $1/(a+b)+1/(b+c)+1/(c+a)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":4},"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The three positive denominators have a fixed total.

</details>

<details>
<summary>Hint 2</summary>

Apply Cauchy-Schwarz to a sum of reciprocals and identify when all denominators coincide.

</details>

<details>
<summary>Worked solution</summary>

A reciprocal Cauchy inequality uses the fixed denominator sum.

1. The denominator sum is (a+b)+(b+c)+(c+a)=4.
2. Cauchy-Schwarz gives the reciprocal sum at least $3^2/4=9/4$.
3. Equality requires a+b=b+c=c+a, attained at a=b=c=2/3. The minimum is $9/4$.

</details>
