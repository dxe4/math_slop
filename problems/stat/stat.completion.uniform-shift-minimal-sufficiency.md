# Finding the information in a moving support

*Hard · [Statistics and probability](index.md)*

For $n\ge2$, independent observations are uniform on $(\theta,\theta+1)$, with $\theta\in\mathbb R$. Find a minimal sufficient statistic and prove minimality on the sample configurations having positive likelihood for some parameter, up to null boundary configurations. Also prove that the sample mean is not sufficient. You may use the dominated-family likelihood-proportionality criterion for minimal sufficiency.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the set of parameter values compatible with a given full sample.

</details>

<details>
<summary>Hint 2</summary>

Compare two likelihood functions through their positive-support intervals; equal averages need not give the same interval.

</details>

<details>
<summary>Model proof</summary>

The compatible parameter interval is determined by both sample extremes.

1. For a sample $x$, put $m=\min_i x_i$ and $M=\max_i x_i$. Its likelihood is $L_\theta(x)=1_{\{M-1<\theta<m\}}$. Realized samples have $M-m<1$ almost surely, so the compatible interval is nonempty.
2. The likelihood depends on $x$ only through $(m,M)$; factorization therefore proves sufficiency of that pair.
3. Two nonzero likelihood functions of this form are proportional for every $\theta$ exactly when their open compatible intervals are equal. As their nonzero heights are both one, proportionality forces equality of the intervals, hence equality of both endpoints $M-1$ and $m$. The likelihood-proportionality criterion gives minimal sufficiency.
4. For $n=2$, samples $(0,1/2)$ and $(1/10,2/5)$ have the same mean but compatible intervals $(-1/2,0)$ and $(-3/5,1/10)$. For larger $n$, append $n-2$ values $1/4$ to both samples; their sums still agree and their extremes remain different.
5. To make the failure an almost-sure sufficiency obstruction, compare $\theta_1=-11/20$ and $\theta_2=-1/4$. Near these two sample configurations, on sum fibers near $n/4$, both configurations have positive conditional $(n-1)$-dimensional volume under $\theta_2$. The neighborhood of the first is excluded under $\theta_1$ because its maximum is near $1/2>9/20$, while the second is allowed. Both sum distributions have positive density near $n/4$. Thus the conditional distribution on a positive-measure set of sums depends on the parameter, ruling out sufficiency of the mean beyond isolated sample points.

**Self-assessment rubric**

- Derive the compatible parameter interval from the full sample.
- Establish sufficiency and apply the likelihood-proportionality criterion.
- Exhibit equal-mean samples with different likelihood support and explain the null-set qualification.

</details>
