# Three factor tail series

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\sum_{n=1}^{\infty}1/[n(n+1)(n+2)]$ exactly.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Split a term into a difference of two adjacent two-factor fractions.

</details>

<details>
<summary>Hint 2</summary>

Telescope finite partial sums before taking the limit.

</details>

<details>
<summary>Worked solution</summary>

The tail term tends to zero, giving $1/4$.

1. The identity $1/[n(n+1)(n+2)]=\frac12[1/(n(n+1))-1/((n+1)(n+2))]$ follows by common denominator.
2. The partial sum through $N$ is $\frac12[1/(1\cdot2)-1/((N+1)(N+2))]$.
3. The tail term tends to zero, giving $1/4$.

</details>
