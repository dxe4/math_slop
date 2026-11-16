# A geometric recurrence record

*Medium · [Combinatorics](index.md)*

Let a0=$1$ and $a_{n}=3a_{n-1}$ for $n\geq 1$. For $A(x)=\sum$ $a_{n}$ $x^n$, write A=N/(1+Dx). Enter numerator\_constant N, denominator\_x D, and a3.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"numerator_constant":1,"denominator_x":-3,"a3":27},"checker_scope":"Exact normalized numerator and denominator coefficients and one sequence term; no unrestricted symbolic derivation is checked."}}
```

<details>
<summary>Hint 1</summary>

Sum from $n=1$: the left side is A−a0.

</details>

<details>
<summary>Hint 2</summary>

The shifted earlier terms sum to xA.

</details>

<details>
<summary>Worked solution</summary>

A first-order shift produces a formal rational record.

1. A−1=3xA implies ($1-3x$)A=1, so $N=1$ and $D=-3$.
2. The recurrence gives a1=$3$,a2=$9$,a3=$27$.

</details>
