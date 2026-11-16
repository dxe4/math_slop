# Factor a quartic to classify prime values

*Hard · [Original olympiad-style problems](index.md)*

How many positive integers n make $n^4+4$ a prime number?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Try writing the expression as a difference of squares after adding and subtracting a quadratic term.

</details>

<details>
<summary>Hint 2</summary>

Check when either positive integer factor can equal one.

</details>

<details>
<summary>Worked solution</summary>

A quartic identity turns primality into a small exceptional-factor question.

1. The factorization is $n^4+4=(n^2-2n+2)(n^2+2n+2)$.
2. For n&gt;=2 the first factor is $(n-1)^2+1\geq2$ and the second exceeds one, so the value is composite.
3. For n=1 the value is five, which is prime. Thus exactly $1$ positive integer qualifies.

</details>
