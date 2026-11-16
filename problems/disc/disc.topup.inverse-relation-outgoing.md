# Reverse ordered pairs before reading a row

*Medium · [Discrete mathematics](index.md)*

Let $R=\{(1,3),(2,3),(3,3),(3,4),(4,2)\}$ on {1,2,3,4}. Define its inverse relation $S=\{(b,a):(a,b)\in R\}$. Find {z:(3,z) is in S}.

```answer
{"answer":{"kind":"set","expected":"{1, 2, 3}","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Pairs beginning with three in S come from pairs ending with three in R.

</details>

<details>
<summary>Hint 2</summary>

The original loop remains a loop after reversal.

</details>

<details>
<summary>Worked solution</summary>

Inverting a relation exchanges incoming and outgoing descriptions.

1. The R pairs ending with three are (1,3), (2,3) and (3,3).
2. Reversing them gives (3,1), (3,2) and (3,3) in S.
3. The requested outgoing set is $\{1,2,3\}$.

</details>
