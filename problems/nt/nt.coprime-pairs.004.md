# Distinguish coprimality from primality

*Easy · [Number theory](index.md)*

Two positive integers are coprime when their gcd is $1$. Which numbered pairs are coprime? Return the set of pair numbers. $1$: $(8,15)$. $2$: $(9,21)$. $3$: $(14,28)$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

Coprime does not mean that both inputs must themselves be prime.

</details>

<details>
<summary>Hint 2</summary>

Look for common divisors larger than $1$ in each pair.

</details>

<details>
<summary>Worked solution</summary>

Two composite numbers can be coprime; coprimality is a relation between their divisor sets.

1. The only positive common divisor of $8$ and $15$ is 1, so pair $1$ is coprime.
2. Pair $2$ has gcd $3$, and pair $3$ has gcd $14$.
3. Only pair $1$ qualifies, giving $\{1\}$.

</details>
