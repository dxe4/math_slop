# Recompute the limits after damping the oscillation

*Medium · [Real analysis](index.md)*

Change the sequence to $b_{n}=(-1)^n/n$ for positive integer n. Give the limits of b\_{$2j$} and b\_{$2j-1$} as $j\to \infty$ in fields even\_limit and odd\_limit. The index maps remain positive and strictly increasing, but recompute the selected values: they are no longer constant $1$ and $-1$. In your personal reasoning notebook, explain why alternating signs alone do not decide whether the full sequence converges.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"even_limit":"0","odd_limit":"0"},"checker_scope":"Checks the two exact subsequential-limit entries for this stated damped sequence. The written explanation and a general convergence proof remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

Substitute each index into BOTH the sign and the denominator.

</details>

<details>
<summary>Hint 2</summary>

Along either increasing parity map the denominator grows without bound. Examine the magnitude, not only the sign.

</details>

<details>
<summary>Worked solution</summary>

Changing the amplitude changes the limit behavior even when the sign pattern and index maps stay familiar.

1. At even indices b\_{$2j$}=$1/(2j)$, which tends to $0$. At odd indices b\_{$2j-1$}=$-1/(2j-1)$, which also tends to $0$. Thus both requested limit entries are $0$.
2. The undamped sequence $(-1)^n$ had constant parity values ±$1$; dividing by n changes their magnitudes. Reusing ±$1$ without substituting into the new denominator answers a different question.
3. The whole damped sequence also converges to $0$: \|b\_n\|=1/n, so any positive integer N&gt;1/ε gives \|b\_n\|&lt;ε for all $n\geq N$. This argument handles all terms, not just a few selected values.
4. An increasing index map with odd step can also produce a convergent subsequence here. For example $k_{j}=j$ is valid and b\_{$k_{j}$}→$0$, although its selected signs alternate. Even steps were needed for the earlier constant-output task, not for every subsequence.

</details>
