# Find a scaled error in a nonstationary recurrence

*Medium · [Real analysis](index.md)*

Let x\_1=0 and $x_{n+1}=1-x_n/(n+1)$ for n&gt;=1. Find the limit of n\*(1-x\_n).

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested asymptotic observation only; no full convergence argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

First trap all terms between zero and one.

</details>

<details>
<summary>Hint 2</summary>

Rewrite the scaled error using the preceding term.

</details>

<details>
<summary>Worked solution</summary>

A time-dependent contraction makes the leading correction visible from the recurrence itself.

1. Induction gives 0&lt;=x\_n&lt;=1: the recurrence sends that interval into \[n/(n+1),1\]. Therefore \|1-x\_(n+1)\|&lt;=1/(n+1), so x\_n tends to one.
2. For n&gt;=2, the same recurrence reads 1-x\_n=x\_(n-1)/n.
3. Hence n\*(1-x\_n)=x\_(n-1) tends to one.

</details>
