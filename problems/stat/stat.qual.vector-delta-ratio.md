# Make the ratio denominator asymptotically admissible

*Medium · [Statistics and probability](index.md)*

Suppose $\sqrt n((A_n,B_n)-(a,b))$ converges in distribution to $N_2(0,\Sigma)$, where $b\ne0$. Define $A_n/B_n$ arbitrarily when $B_n=0$. Prove its centered, scaled limit is normal with variance $v^{\mathsf T}\Sigma v$, $v=(1/b,-a/b^2)^{\mathsf T}$. Show that the arbitrary definition on zero denominators has no effect on the limit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The assumed scaled convergence first implies consistency of both coordinates.

</details>

<details>
<summary>Hint 2</summary>

Work on a fixed neighborhood of $b$ separated from zero and use a differentiable remainder there.

</details>

<details>
<summary>Model proof</summary>

A local denominator bound justifies the ratio expansion with probability tending to one.

1. The assumed convergence makes $\sqrt n((A_n,B_n)-(a,b))$ tight, so $(A_n,B_n)\to(a,b)$ in probability. Consequently $P(|B_n-b|<|b|/2)\to1$, and on this event the denominator is nonzero.
2. The map $g(x,y)=x/y$ is differentiable near $(a,b)$, with derivative $v$. Its remainder is $o(\|(x,y)-(a,b)\|)$, so after multiplication by $\sqrt n$ the remainder is $o_P(1)$ by tightness.
3. The linear term converges to $v^{\mathsf T}Z$ for $Z\sim N_2(0,\Sigma)$, which has the stated possibly zero variance. All definitions on $B_n=0$ differ only on an event whose probability tends to zero, and hence have the same distributional limit.

**Self-assessment rubric**

- Derive consistency and a neighborhood with denominator bounded away from zero.
- Control the differentiability remainder at the central-limit scale.
- Identify the variance and justify arbitrary values on the vanishing exceptional event.

</details>
