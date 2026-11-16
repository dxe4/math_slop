# Use a moving input to refute uniform convergence

*Medium · [Real analysis](index.md)*

For $f_{n}(x)=x^n$ on $[0,1]$, the pointwise limit f is $0$ for $x<1$ and $1$ at $x=1$. Let x\_n=(1/2)^(1/n), so $x_{n}<1$ and $x_{n}^n=1/2$. Which conclusion follows? Select the mathematically correct statement from the four alternatives.

**Options**

1. The moving inputs prove pointwise convergence fails at every fixed $x<1$.
2. The error at $x_{n}$ tends to $0$ because $x_{n}$ tends to $1$.
3. For every n the error at $x_{n}$ is 1/2, so convergence is not uniform.
4. For each n the error is zero everywhere because every fixed $x<1$ has limiting value zero.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_every_n_the","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["the_moving_inputs_pr","the_error_at_x","for_every_n_the","for_each_n_the"]}
```

<details>
<summary>Hint 1</summary>

At each $x_{n}<1$, the limit function equals $0$.

</details>

<details>
<summary>Hint 2</summary>

Uniform convergence must control the worst input at every sufficiently late n.

</details>

<details>
<summary>Worked solution</summary>

A nonvanishing error at a moving input obstructs one global threshold.

1. The error is \|$f_{n}(x_{n})-f(x_{n}) |=|1/2-0|=1/2$ for every n.
2. At tolerance $1/4$ no threshold controls all x, so uniform convergence fails. The moving input does not contradict fixed-input pointwise convergence.

</details>
