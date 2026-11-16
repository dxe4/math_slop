# Rationalize a second-order cancellation

*Hard · [Original Putnam-style training](index.md)*

Evaluate $\lim_{n\to\infty}n[\sqrt{n^2+n}-n-1/2]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":8},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

First rationalize the difference between the square root and n.

</details>

<details>
<summary>Hint 2</summary>

Rationalize the remaining small difference once more rather than subtracting approximate decimals.

</details>

<details>
<summary>Worked solution</summary>

Two exact rationalizations retain the second-order term.

1. Put $s_n=\sqrt{1+1/n}$. Then $\sqrt{n^2+n}-n=1/(s_n+1)$.
2. The expression becomes $n(1-s_n)/[2(s_n+1)]=-1/[2(s_n+1)^2]$.
3. As s\_n tends to one, the limit is $-1/8$.

</details>
