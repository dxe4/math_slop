# An increasing set approaches an excluded upper bound

*Medium · [Real analysis](index.md)*

Let T={4−3/n : n is a positive integer}. Give inf T, sup T, min T and max T, using null if needed. You may add an explanation in the optional notebook.

```answer
{"answer":{"kind":"bounds_record_with_open_reasoning","expected":{"inf":"1","sup":"4","min":"1","max":null},"checker_scope":"Checks infimum, supremum, minimum and maximum entries only. Any explanation is an unassessed draft; no automatic proof validity or proof mastery claim."}}
```

<details>
<summary>Hint 1</summary>

Find the first value, then compare later positive reciprocal terms.

</details>

<details>
<summary>Hint 2</summary>

For a proposed upper bound $b<4$, choose n so that $3/n<4-b$.

</details>

<details>
<summary>Worked solution</summary>

A reciprocal gap can shrink without ever becoming zero.

1. The first value is $1$, and every value is at least 1, so inf T=min $T=1$.
2. Every term is less than $4$. If $b<4$, choose a positive integer $n>3/(4-b)$; then $4-3/n>b$. Therefore no smaller number is an upper bound.
3. Thus sup $T=4$. It is never attained, and each term has a larger successor, so max T does not exist.

</details>
