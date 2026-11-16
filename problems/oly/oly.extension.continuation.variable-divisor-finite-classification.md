# Reduce a variable divisor to a fixed prime

*Medium · [Original olympiad-style problems](index.md)*

Find all integers $n$ such that $n\ne-3$ and $n+3$ divides $n^2+2$. Enter the finite set of integers.

```answer
{"answer":{"kind":"set","expected":["-14","-4","-2","8"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Replace $n$ by $-3$ in the numerator modulo the proposed divisor.

</details>

<details>
<summary>Hint 2</summary>

The nonzero divisor $n+3$ must divide $11$, including negative divisors.

</details>

<details>
<summary>Worked solution</summary>

Use polynomial remainder and enumerate every signed divisor.

1. Modulo $n+3$, the numerator is congruent to $(-3)^2+2=11$. Thus the condition is exactly $n+3\mid11$.
2. The possible nonzero divisors are $1,-1,11,-11$.
3. Subtracting $3$ gives $n=-2,-4,8,-14$. The equivalence verifies every value and excludes every other integer.

</details>
