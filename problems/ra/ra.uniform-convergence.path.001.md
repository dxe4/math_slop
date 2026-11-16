# Choose one threshold for a bounded input interval

*Medium · [Real analysis](index.md)*

Let $f_{n}(x)=x/n$ on $D=[-2,2]$, with limit function $0$. Give any positive integer N such that \|$f_{n}(x)$\|&lt;$1/10$ for every $x\in D$ and every integer $n\geq N$. You may add an explanation in the optional notebook.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":21},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The largest possible input magnitude is $2$, attained at both endpoints.

</details>

<details>
<summary>Hint 2</summary>

The worst-case error is therefore $2/n$, and the tolerance is strict.

</details>

<details>
<summary>Worked solution</summary>

A worst-case error bound produces one threshold for all inputs.

1. The supremum error is $2/n$. The uniform estimate requires 2/n&lt;1/10, or $n>20$.
2. Any $N\geq 21$ works. At $N=20$ an endpoint has error exactly 1/10, so the strict uniform request fails.

</details>
