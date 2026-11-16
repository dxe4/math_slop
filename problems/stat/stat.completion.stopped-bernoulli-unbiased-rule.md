# What unbiasedness permits after a data-dependent stop

*Hard · [Statistics and probability](index.md)*

Draw independent $\operatorname{Bernoulli}(p)$ trials, $0<p<1$. Stop after the first trial if it is a success; otherwise draw a second trial and stop. Thus the recorded outcomes are $(1)$, $(0,0)$, and $(0,1)$. Determine every real-valued function of the recorded outcome that is unbiased for $p$ for all $p$. Then prove that the ordinary mean of the observed trials is biased, despite the identity $E[\sum_{i=1}^NX_i]=pE[N]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Assign a separate value to each of the three possible recorded paths and write its expectation as a function of the parameter.

</details>

<details>
<summary>Hint 2</summary>

Unbiasedness over an interval imposes coefficient identities. Compare averaging a ratio with taking a ratio of expectations.

</details>

<details>
<summary>Model proof</summary>

The stopped paths form a finite experiment whose unbiasedness equations are restrictive.

1. Let the estimator take values $a,b,c$ on the three paths. Their probabilities are $p,(1-p)^2,(1-p)p$, so its expectation is $b+(a-2b+c)p+(b-c)p^2$.
2. Equality with $p$ for every interior parameter forces $b=0$, $b-c=0$, and $a-2b+c=1$. Hence $a=1,b=c=0$: the unique unbiased rule is the first trial itself.
3. The stopped sample mean instead takes values $1,0,1/2$. Its expectation is $p+\tfrac12p(1-p)$, strictly larger than $p$ for every $0<p<1$.
4. The stopping time has $E[N]=2-p$ and the observed total has expectation $p+p(1-p)=p(2-p)$, so the stated identity holds. Dividing a random total by a dependent random sample size does not preserve that expectation identity.

**Self-assessment rubric**

- Compute the complete recorded-data law.
- Solve the coefficient identities for every unbiased rule.
- Compute and sign the stopped mean bias.
- Verify the total identity and explain why it does not imply mean unbiasedness.

</details>
