# Euclidean algorithm: common divisor invariant

*Medium · [Number theory](index.md)*

Given $91 = 2 \times  35 + 21$, which numbered reason correctly establishes $\gcd (91,35) = \gcd (35,21)$? Return all valid reason numbers. $1$: A divisor of $91$ and $35$ divides $21$, and a divisor of $35$ and $21$ divides $91$. $2$: Every remainder is prime. $3$: The two pairs have the same sum.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Use subtraction for one direction and addition for the other.

</details>

<details>
<summary>Hint 2</summary>

Equality of the whole common-divisor sets justifies equality of their greatest members.

</details>

<details>
<summary>Worked solution</summary>

Euclid works by preserving a common-divisor problem, rather than by a numerical coincidence.

1. If d divides $91$ and $35$, then it divides $91 - 2 \times  35 = 21$. Conversely, if d divides $35$ and 21, it divides $2 \times  35 + 21 = 91$.
2. Thus the common divisors are the same. Reason $2$ is false (21 is composite), and the pair sums $126$ and $56$ differ. Only reason $1$ works.

</details>
