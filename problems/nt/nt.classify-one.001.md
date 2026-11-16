# Place 1 correctly in the prime classification

*Easy · [Number theory](index.md)*

A prime is a positive integer greater than $1$ with exactly two positive divisors. A composite is a positive integer greater than $1$ with more than two positive divisors. Which classification statements about $1$ are true? Return the set of statement numbers. $1$: $1$ is prime. $2$: $1$ is composite. $3$: $1$ is neither prime nor composite.

```answer
{"answer":{"kind":"finite_integer_set","expected":[3],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

Check the condition greater than $1$ before counting divisors.

</details>

<details>
<summary>Hint 2</summary>

The only positive divisor of $1$ is $1$ itself.

</details>

<details>
<summary>Worked solution</summary>

The definition intentionally excludes $1$ from both prime and composite numbers.

1. The number $1$ does not satisfy the greater-than-$1$ condition in either definition.
2. It is therefore neither prime nor composite, so statement $3$ is the only true classification.

</details>
