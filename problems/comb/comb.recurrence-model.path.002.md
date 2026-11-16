# Binary words without adjacent ones

*Medium · [Combinatorics](index.md)*

Let $b_{n}$ count length-n binary words with no adjacent $1s$. For $n\geq 2$, write $b_{n}=p$ $b_{n-1}+q$ $b_{n-2}$. Enter p,q,b0,b1,b4.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"p":1,"q":1,"b0":1,"b1":2,"b4":8},"checker_scope":"Exact supplied-form recurrence coefficients and counts; not an automatically certified general modeling proof."}}
```

<details>
<summary>Hint 1</summary>

Words ending in $0$ arise by appending $0$ to any valid shorter word.

</details>

<details>
<summary>Hint 2</summary>

For words ending in $1$ and $n\geq 2$, the final two symbols must be $01$.

</details>

<details>
<summary>Worked solution</summary>

A constrained ending can remove two symbols rather than one.

1. The last-symbol cases contribute $b_{n-1}$ and $b_{n-2}$, giving $p=q=1$.
2. The initial counts are b0=$1$,b1=$2$; then b2=$3$,b3=$5$,b4=$8$.

</details>
