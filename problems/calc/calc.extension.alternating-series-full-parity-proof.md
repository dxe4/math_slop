# Prove alternating convergence and the signed remainder estimate

*Hard · [Calculus](index.md)*

Let b\_n≥0 decrease to zero. Prove $\sum_{n=1}^\infty(-1)^{n+1}b_n$ converges, and for every N prove 0≤(−1)ᴺ(S−S\_N)≤b\_(N+1). Do not assume strict decrease or positivity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the even partial sums with one another and the odd partial sums with one another.

</details>

<details>
<summary>Hint 2</summary>

Their gap tends to zero; the limiting sum stays between any consecutive even and odd bounds.

</details>

<details>
<summary>Model proof</summary>

Monotone interlaced partial sums give convergence and error direction in one argument.

1. The even partial sums increase because S\_{2m+2}−S\_{2m}=b\_{2m+1}−b\_{2m+2}≥0. The odd partial sums decrease because S\_{2m+3}−S\_{2m+1}=−b\_{2m+2}+b\_{2m+3}≤0.
2. Every even partial sum lies below the odd upper bounds, so both monotone sequences are bounded and converge. Their corresponding gap S\_{2m+1}−S\_{2m}=b\_{2m+1} tends to zero, forcing a common limit S and hence convergence of the whole series.
3. For even N, S\_N≤S≤S\_{N+1}=S\_N+b\_{N+1}. For odd N, S\_{N+1}=S\_N−b\_{N+1}≤S≤S\_N. Both cases combine as 0≤(−1)ᴺ(S−S\_N)≤b\_{N+1}.
4. Weak inequalities cover repeated or zero magnitudes, including eventually zero series. No unsupported strict error inequality or exact-error claim is needed.

**Self-assessment rubric**

- Proves the two correct monotonic directions from the weak decrease of b\_n.
- Establishes boundedness and uses the vanishing interlaced gap to get one full limit.
- Derives the exact signed remainder inequality for both parities.
- Keeps weak inequalities valid for equal or zero terms.

</details>
