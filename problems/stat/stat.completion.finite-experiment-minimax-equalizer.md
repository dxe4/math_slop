# Minimax testing with an equalizing randomization

*Hard · [Statistics and probability](index.md)*

Two simple hypotheses give probabilities $P_0=(3/5,3/10,1/10)$ and $P_1=(1/5,3/10,1/2)$ on $a,b,c$. A test $\varphi\in[0,1]^3$ has errors $e_0=E_0\varphi$ and $e_1=E_1(1-\varphi)$. Find $\inf_\varphi\max(e_0,e_1)$, construct an optimizer, and prove a lower bound valid for every randomized test. No significance level is prescribed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For any rule, its largest error is at least an average of the two errors.

</details>

<details>
<summary>Hint 2</summary>

Minimize that average outcome by outcome, then use the outcome with equal hypothesis probabilities to balance the two errors.

</details>

<details>
<summary>Model proof</summary>

A least-favorable equal prior gives a lower bound that an equalizer rule attains.

1. For any test, $\max(e_0,e_1)\ge(e_0+e_1)/2$. At each outcome, the average-error contribution is minimized by choosing the more probable hypothesis, and its minimum is half the smaller of the two probabilities.
2. Therefore every test has maximum error at least $\tfrac12[\min(3/5,1/5)+\min(3/10,3/10)+\min(1/10,1/2)]=3/10$.
3. Choose $\varphi(a)=0$, $\varphi(c)=1$, and write $r=\varphi(b)$. Then $e_0=1/10+3r/10$ and $e_1=1/2-3r/10$.
4. Equalizing gives $r=2/3$, for which both errors equal $3/10$. This attains the universal lower bound and is minimax. The randomization at $b$ changes the error balance without changing their average.

**Self-assessment rubric**

- Bound maximum error by the optimized average error.
- Use the equal-probability outcome to balance the errors.
- Compute both errors and match the lower bound.

</details>
