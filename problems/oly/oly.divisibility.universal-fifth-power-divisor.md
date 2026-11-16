# Find a divisor valid for every integer input

*Hard · [Original olympiad-style problems](index.md)*

Find the greatest positive integer $d$ that divides $n^5-n$ for every integer $n$.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Any universal divisor must divide the value at a convenient small input.

</details>

<details>
<summary>Hint 2</summary>

Then prove a matching divisibility statement separately for the relevant prime factors.

</details>

<details>
<summary>Worked solution</summary>

One upper bound and a universal lower divisibility bound identify the same integer.

1. At $n=2$, the value is $32-2=30$, so every possible d divides 30.
2. Modulo two and three, every integer satisfies $n^5\equiv n$. Modulo five the same follows from Fermat for nonmultiples of five and directly for multiples.
3. The coprime primes two, three and five therefore all divide every value, so $30$ is the greatest possible d.

</details>
