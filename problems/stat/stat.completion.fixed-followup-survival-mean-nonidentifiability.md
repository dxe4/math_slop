# What fixed follow-up cannot identify

*Hard · [Statistics and probability](index.md)*

An event time $T\ge0$ is observed only through $(U,\Delta)=(\min(T,1),1_{\{T\le1\}})$. Construct a family of continuous event-time distributions, all with finite variances, that produce exactly the same observed-data law but have arbitrarily large and unequal means. Explain why independent censoring alone does not identify the full mean under this observation scheme.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Keep the distribution below the follow-up limit and the total mass beyond it fixed.

</details>

<details>
<summary>Hint 2</summary>

Move the unobserved tail farther away without moving any recorded event or censoring indicator.

</details>

<details>
<summary>Model proof</summary>

The observed law fixes tail probability beyond follow-up, but not tail location.

1. For each $a>1$, let $T$ have density $f_a(t)=\tfrac12 1_{(0,1)}(t)+\tfrac12 1_{(a,a+1)}(t)$. This is a continuous-distribution event time with bounded support for each fixed $a$, hence finite variance.
2. Every member produces uncensored observations with density $1/2$ on $0<U<1$, with $\Delta=1$. Its remaining probability $1/2$ is the identical censored observation $(U,\Delta)=(1,0)$.
3. Thus the entire observed-data distribution, and consequently every finite observed sample distribution, is independent of $a$. But $E_aT=\tfrac12(1/2)+\tfrac12(a+1/2)=a/2+1/2$, which is unequal across $a$ and unbounded.
4. The censoring time here is the constant one and is therefore independent of every event time. Independence does not provide observations beyond that time; identification of the unrestricted mean needs further tail information or sufficient follow-up support.

**Self-assessment rubric**

- Construct proper continuous-distribution examples with finite variances.
- Compute and match the complete censored-data laws.
- Compute the means and state the precise identification obstruction.

</details>
