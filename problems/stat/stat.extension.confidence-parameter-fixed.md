# Confidence parameter fixed

*Medium · [Statistics and probability](index.md)*

A data-dependent random set $C(X)$ satisfies $P_\theta\{\theta\in C(X)\}=0.9$ for every fixed $\theta$. Explain rigorously why this frequentist statement does not imply that, after observing $x$, a fixed $\theta$ has probability $0.9$ of lying in the realized set $C(x)$, absent a probability model on $\theta$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Specify the sample space on which $P_\theta$ acts, and identify what is random before observation.

</details>

<details>
<summary>Hint 2</summary>

Compare the event indexed by the random sample with membership in a particular realized set; a distribution on the parameter would be additional information.

</details>

<details>
<summary>Model proof</summary>

Coverage averages an indicator over sampling variation, rather than assigning a distribution to the parameter.

1. For each fixed $\theta$, write coverage as $\int 1_{\{\theta\in C(x)\}}\,P_\theta(dx)=0.9$. The integration is over possible data $x$.
2. For a particular realized $x$, the set $C(x)$ and the parameter $\theta$ are fixed. The indicator $1_{\{\theta\in C(x)\}}$ is either zero or one, though the observer need not know which.
3. The integral being $0.9$ does not make each integrand $0.9$. In particular it does not specify a conditional distribution of $\theta$ given the data.
4. A posterior probability would require a joint model for parameter and data, such as a prior together with a likelihood. Its numerical value does not follow from the coverage statement alone. No conditioning on a probability-zero observation is needed for this argument.

**Self-assessment rubric**

- Express coverage as a sampling probability with fixed parameter.
- Distinguish the random set from a particular realized membership statement.
- Explain what additional model a posterior parameter probability requires.

</details>
