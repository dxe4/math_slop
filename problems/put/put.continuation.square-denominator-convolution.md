# Square denominator convolution

*Hard · [Original Putnam-style training](index.md)*

Prove $\sum_{n=1}^{\infty}1/[n^2(n+1)^2]=2\sum_{n=1}^{\infty}1/n^2-3$, without evaluating the square-reciprocal series.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Decompose the rational summand into reciprocal squares and a telescoping part.

</details>

<details>
<summary>Hint 2</summary>

Keep finite partial sums until the endpoint terms are controlled.

</details>

<details>
<summary>Model proof</summary>

Writing $Z=\sum_{n\ge1}1/n^2$, the shifted square sum is $Z-1$; hence the value is $Z+(Z-1)-2=2Z-3$.

1. The algebraic identity $1/[n^2(n+1)^2]=1/n^2+1/(n+1)^2-2/[n(n+1)]$ follows after multiplying by the common denominator.
2. All three resulting series converge absolutely: the square sums by comparison, and $1/[n(n+1)]$ telescopes to one.
3. Writing $Z=\sum_{n\ge1}1/n^2$, the shifted square sum is $Z-1$; hence the value is $Z+(Z-1)-2=2Z-3$.

**Self-assessment rubric**

- Verify the exact decomposition of 1/\[n²(n+1)²\].
- Justify all series and account for the shifted first square term.
- Combine the square sums and telescoping term into 2Σ1/n²−3.

</details>
