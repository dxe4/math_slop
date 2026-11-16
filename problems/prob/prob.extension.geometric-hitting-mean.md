# Mean time to an absorbing state

*Medium · [Probability problems](index.md)*

A time-homogeneous chain starts at $0$, stays there with probability $3/4$ per transition, and moves to absorbing state $1$ with probability $1/4$. For $T=\inf\{n\ge0:X_n=1\}$, find $E_0[T]$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks the mean hitting time from zero with the stated time-zero convention only."}}
```

<details>
<summary>Hint 1</summary>

Avoid assuming a finite mean merely to solve an equation for it.

</details>

<details>
<summary>Hint 2</summary>

Use the probability of staying at zero for a fixed number of steps, then sum the nonnegative tails of the hitting time.

</details>

<details>
<summary>Worked solution</summary>

A geometric tail both proves finiteness and gives the mean.

1. Starting at zero, $T>n$ means staying at zero for all first $n$ steps. The homogeneous Markov property gives $P_0(T>n)=(3/4)^n$ for $n\ge0$.
2. The tail tends to zero, so $T$ is finite almost surely. The nonnegative tail-sum formula gives $E_0[T]=\sum_{n\ge0}P_0(T>n)$, whether initially finite or infinite.
3. The convergent geometric series equals $1/(1-3/4)=4$. Finiteness now also justifies the familiar first-step equation $E_0[T]=1+(3/4)E_0[T]$.

The hitting-time tail is $(3/4)^n$, whose sum gives mean four.

</details>
