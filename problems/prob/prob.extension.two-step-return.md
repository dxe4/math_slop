# Return to zero after two steps

*Medium · [Probability problems](index.md)*

A homogeneous chain on $\{0,1\}$ has $P_{00}=1/3$, $P_{01}=2/3$ and $P_{10}=1/4$, with the remaining row probability $P_{11}=3/4$. Starting at $X_0=0$, find $P(X_2=0)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":18},"checker_scope":"Checks the two-step state-zero probability from the specified initial state only."}}
```

<details>
<summary>Hint 1</summary>

Both possible intermediate states can contribute to the return.

</details>

<details>
<summary>Hint 2</summary>

Sum the probabilities of the two disjoint paths; the self-stay path also counts as being at zero at time two.

</details>

<details>
<summary>Worked solution</summary>

Use the two-step transition sum.

1. The path $0\to0\to0$ has probability $(1/3)^2=1/9$.
2. The other contributing path is $0\to1\to0$, with probability $(2/3)(1/4)=1/6$.
3. The two paths exhaust the possible intermediate states and are disjoint, so the total is $1/9+1/6=2/18+3/18=5/18$. No first-return restriction is imposed.

The two return paths contribute $1/9$ and $1/6$, totalling $5/18$.

</details>
