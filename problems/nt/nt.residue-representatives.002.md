# Find all representatives in a bounded range

*Easy · [Number theory](index.md)*

Find every x in $\{0,1,...,14\}$ with x congruent to −2 modulo $5$. Return the solution set. Here x ≡ $-2$ (mod 5) means that $5$ divides $x - (-2)$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[3,8,13],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

Rewrite the difference as $x + 2$.

</details>

<details>
<summary>Hint 2</summary>

Starting from any successful candidate, adding $5$ preserves congruence.

</details>

<details>
<summary>Worked solution</summary>

A congruence class has many representatives; a bounded question asks for every permitted one.

1. The condition requires $x + 2$ to be a multiple of $5$.
2. Within the stated range, these multiples are $5,10,15$, corresponding to $x = 3,8,13$.
3. The solution set is $\{3,8,13\}$; the range excludes the next and previous representatives.

</details>
