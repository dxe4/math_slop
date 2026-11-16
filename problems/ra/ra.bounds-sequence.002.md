# Identify the missing lower endpoint

*Medium · [Real analysis](index.md)*

Let S={−1+2/n : n is a positive integer}. Give inf S, sup S, min S and max S, using null when no extremum exists. Explain the lower bound if you wish; you may add that explanation in the optional notebook.

```answer
{"answer":{"kind":"bounds_record_with_open_reasoning","expected":{"inf":"-1","sup":"1","min":null,"max":"1"},"checker_scope":"Checks infimum, supremum, minimum and maximum entries only. Any explanation is an unassessed draft; no automatic proof validity or proof mastery claim."}}
```

<details>
<summary>Hint 1</summary>

The first term is the largest because $2/n$ decreases for positive n.

</details>

<details>
<summary>Hint 2</summary>

Every term is greater than $-1$. To approach that number, make $2/n$ smaller than any supplied positive gap.

</details>

<details>
<summary>Worked solution</summary>

An unattained lower bound can still be the greatest lower bound.

1. At $n=1$ the value is $1$. Since $0<2/n\leq 2$, every term lies in (−1,1\], so sup S=max $S=1$.
2. For any $b>-1, an$ integer $n>2/(b+1)$ gives −1+2/n&lt;b, so no number greater than $-1$ can be a lower bound.
3. Thus inf $S=-1$. It is not a term, and every term has a smaller successor, so min S does not exist.

</details>
