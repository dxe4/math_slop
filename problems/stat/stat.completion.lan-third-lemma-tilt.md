# A local-alternative limit by the third lemma

*Medium · [Statistics and probability](index.md)*

Under $P_{n,0}$, suppose $(T_n,\Delta_n)\Rightarrow N_2(0,\begin{psmallmatrix}V&C\\C&I\end{psmallmatrix})$, with $I>0$. For fixed $h$, the full likelihood ratio satisfies $\log(dP_{n,h}/dP_{n,0})=h\Delta_n-h^2I/2+o_{P_{n,0}}(1)$. Use Le Cam’s third lemma to find the limit of $T_n$ under $P_{n,h}$. Verify the normalization of the limiting tilt; the covariance matrix may be singular.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The local likelihood ratio depends on the central sequence, which is jointly convergent with the statistic.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the joint Gaussian exponential transform with an imaginary coefficient on the statistic and a real coefficient on the central sequence.

</details>

<details>
<summary>Model proof</summary>

Exponential tilting shifts a jointly Gaussian statistic by its covariance with the central sequence.

1. The joint limit of the statistic and likelihood ratio is $(T,L)$ with $L=\exp(h\Delta-h^2I/2)$. Since $\Delta\sim N(0,I)$, $EL=1$, the normalization required for the limiting likelihood tilt.
2. Le Cam’s third lemma identifies the limiting characteristic function under $P_{n,h}$ as $E[e^{itT}L]$. The Gaussian exponential formula gives $\exp\{-t^2V/2+ithC\}$.
3. This is the characteristic function of $N(hC,V)$, including a degenerate normal if $V=0$. Thus $T_n\Rightarrow N(hC,V)$ under the local alternative.
4. The shift is $hC$, not $hI$ unless the statistic has the corresponding covariance. The likelihood expansion and joint convergence, rather than a null marginal limit alone, justify this transfer.

**Self-assessment rubric**

- Identify the joint likelihood limit and verify its mean is one.
- Apply the selected lemma and compute the Gaussian transform.
- State the limit with the correct covariance-driven shift and singular case.

</details>
