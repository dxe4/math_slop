# Maximum three uniform mean

*Medium · [Original Putnam-style training](index.md)*

If $U_1,U_2,U_3$ are independent Uniform$(0,1)$ variables, find $E[\max(U_1,U_2,U_3)]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

First find the CDF of the maximum.

</details>

<details>
<summary>Hint 2</summary>

Integrate its tail probability over $[0,1]$.

</details>

<details>
<summary>Worked solution</summary>

The integral equals $1-1/4=3/4$.

1. For $0\le t\le1$, independence gives $P(\max U_i\le t)=t^3$.
2. For a nonnegative variable supported on $[0,1]$, $EM=\int_0^1P(M>t)dt=\int_0^1(1-t^3)dt$.
3. The integral equals $1-1/4=3/4$.

</details>
