# Find the cycle-count bias caused by even parity

*Hard · [Probability problems](index.md)*

Let $C_n$ be the number of cycles of a uniform permutation of $\{1,\ldots,n\}$, where $n\ge2$. Derive an exact formula for $E[C_n\mid\operatorname{sgn}(\pi)=1]$. Derive the cycle generating polynomial from insertion of the largest label, and justify the parity conditioning; a formula for the unconditional mean alone is insufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Insertion either creates one new singleton cycle or inserts the new label after an existing label.

</details>

<details>
<summary>Hint 2</summary>

Use $\operatorname{sgn}(\pi)=(-1)^{n-C_n}$ and evaluate a derivative of the generating polynomial at a negative argument.

</details>

<details>
<summary>Model proof</summary>

Combine the cycle insertion recurrence with a signed first moment.

1. Write $G_n(z)=E[z^{C_n}]$. Inserting label $n$ gives one new-cycle option and $n-1$ cycle-preserving options, so $G_n(z)=(z+n-1)G_{n-1}(z)/n$. Thus $G_n(z)=z(z+1)\cdots(z+n-1)/n!$.
2. Logarithmic differentiation at $z=1$ gives $E C_n=G_n^{\prime}(1)=H_n$. At $z=-1$ the factor $z+1$ is the only zero, and $G_n^{\prime}(-1)=-(n-2)!/n!=-1/[n(n-1)]$.
3. Consequently $E[C_n(-1)^{C_n}]=-G_n^{\prime}(-1)=1/[n(n-1)]$, and $E[C_n\operatorname{sgn}(\pi)]=(-1)^n/[n(n-1)]$. Also $E\operatorname{sgn}(\pi)=(-1)^nG_n(-1)=0$, so the even event has probability $1/2$.
4. Use its indicator $(1+\operatorname{sgn}(\pi))/2$. Dividing the corresponding mixed first moment by $1/2$ yields $E[C_n\mid\pi\text{ even}]=H_n+(-1)^n/[n(n-1)]$.

**Self-assessment rubric**

- Derive the generating polynomial by a probability-preserving insertion argument.
- Evaluate the signed cycle first moment including its sign.
- Establish the even-event probability and condition with its indicator.

</details>
