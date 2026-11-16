# Use a doubling identity in an integer recurrence

*Hard · [Computational arithmetic problems](index.md)*

Let $F_0=0$, $F_1=1$ and $F_n=F_{n-1}+F_{n-2}$ for $n\geq2$. Compute $F_{40}$.

```answer
{"answer":{"kind":"integer","expected":"102334155","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Addition identities allow a doubling step instead of forty separate updates.

</details>

<details>
<summary>Hint 2</summary>

The identity $F_{2n}=F_n(F_{n-1}+F_{n+1})$ follows from the recurrence addition formula.

</details>

<details>
<summary>Worked solution</summary>

An addition identity reduces a long index to a smaller exact block.

1. The recurrence addition formula, proved by induction, gives $F_{2n}=F_n(F_{n-1}+F_{n+1})$.
2. Finite recurrence updates give $F_{19}=4181$, $F_{20}=6765$ and $F_{21}=10946$.
3. Therefore $F_{40}=6765(4181+10946)=6765\cdot15127=102334155$.

</details>
