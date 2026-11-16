# Separate an exact p-value from posterior odds

*Hard · [Statistics and probability](index.md)*

An experiment has outcomes E and not E, with $P(E\mid H_0)=1/20$ and $P(E\mid H_1)=1/2$. The prespecified test rejects on E, with p(E)=1/20 and p(not E)=1. After observing E, compute P(H0\|E) first for prior P(H0)=1/2, then for prior P(H0)=99/100. Explain why the same exact p-value does not determine a posterior null probability.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Multiply each prior by its own likelihood before normalizing.

</details>

<details>
<summary>Hint 2</summary>

The p-value is unchanged when only the prior changes.

</details>

<details>
<summary>Model proof</summary>

Posterior odds require priors, whereas the null-tail p-value uses the null sampling distribution.

1. For equal priors, the null and alternative weights are $1/40$ and $1/4$, so the posterior null probability is $1/11$.
2. For prior null probability ninety-nine hundredths, the weights are $99/2000$ and $1/200=10/2000$, giving posterior $99/109$.
3. The p-value on E remains one twentieth in both cases. These distinct posteriors show that a p-value alone is not a posterior null probability; the specified p-values are valid under the null since P(p&lt;=t) is zero below 1/20, 1/20 up to t&lt;1, and one at t=1.

**Self-assessment rubric**

- Normalize the two likelihood-weighted equal priors.
- Normalize the ninety-nine-to-one prior weights.
- Compare the different posteriors with the identical valid null-tail p-value.

</details>
