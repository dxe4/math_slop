# A pairwise-independent triple

*Hard · [Probability problems](index.md)*

Independent fair bits $U,V\in\{0,1\}$ define events $A=\{U=0\}$, $B=\{V=0\}$ and $C=\{U=V\}$. Find $P(A\cap B\cap C)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

List the four equally likely underlying bit pairs.

</details>

<details>
<summary>Hint 2</summary>

Pairwise independence does not by itself justify multiplying three event probabilities.

</details>

<details>
<summary>Worked solution</summary>

The underlying joint model determines the triple intersection directly.

1. The pairs $00,01,10,11$ each have probability $1/4$.
2. The conditions $A$ and $B$ select only $00$, which also satisfies $C$.
3. Thus the triple probability is $1/4$.
4. Each event has probability $1/2$ and each pairwise intersection has probability $1/4$, but their three-way intersection is not the product $1/8$.

</details>
