# A nonnegative-martingale maximal bound

*Easy · [Probability problems](index.md)*

For an integrable nonnegative martingale $(M_k,\mathcal F_k)_{k=0}^n$, Doob's inequality gives $P(\max_{0\le k\le n}M_k\ge a)\le E[M_n]/a$ for $a>0$. If $E[M_n]=4$, what bound does it give at $a=8$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks substitution into the supplied finite-horizon maximal bound only; no proof or exact maximum probability is automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Check the nonnegative-martingale hypothesis and the positive threshold in the supplied inequality.

</details>

<details>
<summary>Hint 2</summary>

Insert the terminal mean and threshold into the ratio; it is an upper bound rather than an exact probability.

</details>

<details>
<summary>Worked solution</summary>

Apply the supplied maximal inequality at the specified threshold.

1. The process meets the stated nonnegativity and martingale assumptions over the finite time horizon.
2. Doob's bound at threshold eight is $E[M_n]/8$.
3. The numerical bound is $4/8=1/2$. It controls the whole running maximum event; an ordinary terminal-time Markov bound alone would address only $M_n\ge8$.

The given data produce the bound $1/2$.

</details>
