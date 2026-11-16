# Retain the modulus when checking a statement

*Easy · [Number theory](index.md)*

Which numbered congruence statements are true? Return the set of statement numbers. $1$: $17$ ≡ $2$ (mod 5). $2$: $17$ ≡ $3$ (mod 5). $3$: $17$ ≡ $2$ (mod 6).

```answer
{"answer":{"kind":"finite_integer_set","expected":[1],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

For each statement, subtract the two integers and test divisibility by its own modulus.

</details>

<details>
<summary>Hint 2</summary>

The same difference may be divisible by one modulus but not another.

</details>

<details>
<summary>Worked solution</summary>

The modulus is part of a congruence statement and cannot be silently changed.

1. Statement $1$ has difference $17 - 2 = 15$, which is divisible by $5$.
2. Statement $2$ has difference $14$, not divisible by $5$; statement $3$ has difference $15$, not divisible by $6$.
3. Only statement $1$ is true, giving $\{1\}$.

</details>
