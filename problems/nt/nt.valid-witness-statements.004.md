# Recognize an integer witness

*Easy · [Number theory](index.md)*

Which displayed statements give a valid integer witness that $-4$ divides $28$? Return the set of statement numbers. $1$: $28 = (-4) (-7)$. $2$: $28 = (-4) (7)$. $3$: $28 = (-4) (-7/2)$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

A witness must be an integer and make the displayed multiplication true.

</details>

<details>
<summary>Hint 2</summary>

Check the sign and product separately for each statement.

</details>

<details>
<summary>Worked solution</summary>

A divisibility witness must satisfy the equality and the integer restriction together.

1. Statement $1$ uses the integer $-7$ and has product $(-4) (-7) = 28$.
2. Statement $2$ has product $-28$. Statement $3$ has product $14$ and a noninteger multiplier.
3. Only statement $1$ meets both requirements, so the set is $\{1\}$.

</details>
