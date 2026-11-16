# Local shifts cannot be consistently separated

*Hard · [Statistics and probability](index.md)*

Let $P_n$ be the law of $n$ independent $N(0,1)$ observations, and $Q_n$ that of $n$ independent $N(h/\sqrt n,1)$ observations for a fixed nonzero real $h$. Prove mutual contiguity: any events with probability tending to zero under one law also have probability tending to zero under the other. Deduce that no tests can have null rejection probability tending to zero and local-alternative power tending to one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the full likelihood ratio using the standardized sample mean.

</details>

<details>
<summary>Hint 2</summary>

Control a probability under one law by a second likelihood-ratio moment under the other.

</details>

<details>
<summary>Model proof</summary>

Bounded likelihood-ratio second moments transfer vanishing probabilities in both directions.

1. Under $P_n$, $Z_n=\sqrt n\overline X_n\sim N(0,1)$ and $L_n=dQ_n/dP_n=\exp(hZ_n-h^2/2)$. The normal moment-generating function gives $E_{P_n}L_n^2=e^{h^2}$ for every $n$.
2. Cauchy–Schwarz gives $Q_n(A_n)=E_{P_n}[L_n1_{A_n}]\le e^{h^2/2}P_n(A_n)^{1/2}$. Thus $P_n(A_n)\to0$ implies $Q_n(A_n)\to0$.
3. Under $Q_n$, $Z_n-h$ is standard normal, and $dP_n/dQ_n=\exp[-h(Z_n-h)-h^2/2]$ has the same second moment. The reverse inequality proves mutual contiguity.
4. For a randomized test $0\le\varphi_n\le1$, the same argument gives $E_{Q_n}\varphi_n\le e^{h^2/2}(E_{P_n}\varphi_n^2)^{1/2}\le e^{h^2/2}(E_{P_n}\varphi_n)^{1/2}$. A null rejection probability tending to zero therefore forces local power to tend to zero, not one.

**Self-assessment rubric**

- Compute the likelihood ratio and its second moment.
- Establish contiguity in both directions.
- Extend the bound to randomized tests and state the impossibility conclusion.

</details>
