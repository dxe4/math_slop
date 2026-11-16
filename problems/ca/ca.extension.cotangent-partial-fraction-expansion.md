# Justify logarithmic differentiation of a normal sine product

*Hard · [Complex analysis problems](index.md)*

Starting from Euler's normal sine product, prove $\pi\cot(\pi z)=1/z+\sum_{n=1}^{\infty}2z/(z^2-n^2)$ away from the integers. Justify the locally uniform convergence and differentiation used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Differentiate finite products through their logarithmic derivatives.

</details>

<details>
<summary>Hint 2</summary>

Keep compact sets away from the zeros before passing to the quotient limit.

</details>

<details>
<summary>Model proof</summary>

Normal product convergence and a normally convergent derivative tail identify the meromorphic expansion.

1. Let P\_N=product from n=1 to N of (1-z^2/n^2). Away from its zeros, P\_Nprime/P\_N=sum from n=1 to N of 2z/(z^2-n^2). On any compact set avoiding the nonzero integers, the summand tail is bounded by a compact-dependent constant times 1/n^2.
2. The given locally uniform product convergence gives P\_N to P=sin(pi\*z)/(pi\*z), and Cauchy's formula gives local uniform derivative convergence. On compact sets avoiding all zeros of P, the quotients therefore converge to Pprime/P.
3. The latter quotient is pi\*cot(pi\*z)-1/z. Taking the normally convergent sum limit proves the formula away from the integers, with its removable interpretation at zero after subtracting 1/z.

**Self-assessment rubric**

- Compute the finite logarithmic derivative with the correct signs.
- Bound the tail and justify convergence of derivatives and quotients away from zeros.
- Identify the sine logarithmic derivative on the claimed domain.

</details>
