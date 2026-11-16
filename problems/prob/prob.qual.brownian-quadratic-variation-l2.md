# Control the squared-increment sum in L2

*Medium · [Probability problems](index.md)*

For standard Brownian motion on $[0,1]$, put $Q_n=\sum_{k=1}^n(B_{k/n}-B_{(k-1)/n})^2$. Prove $Q_n\to1$ in $L^2$. You may use $E[Z^4]=3v^2$ for a centered normal variable of variance $v$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the expectation and variance of one squared increment.

</details>

<details>
<summary>Hint 2</summary>

Independence survives taking squares, so the variances add.

</details>

<details>
<summary>Model proof</summary>

The fourth normal moment gives a vanishing variance for the quadratic-variation approximation.

1. Every increment has distribution $N(0,1/n)$, so its square has mean $1/n$ and variance $3/n^2-1/n^2=2/n^2$.
2. The increments, and hence their squares, are independent. Therefore $E[Q_n]=1$ and $\operatorname{Var}(Q_n)=n(2/n^2)=2/n$.
3. Consequently $E[(Q_n-1)^2]=2/n\to0$, which is exactly the asserted L2 convergence. This calculation alone does not assert almost-sure convergence for arbitrary partition sequences.

**Self-assessment rubric**

- Obtain the variance of each squared increment with the correct scaling.
- Calculate the mean and variance of the sum.
- Identify the mean-square convergence being proved.

</details>
