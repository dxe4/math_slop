# Identified treatment means can have infinite information bounds

*Hard · [Statistics and probability](index.md)*

Let $X$ be uniform on $(0,1)$ and $A\mid X=x\sim\operatorname{Bernoulli}(x)$. Given $A=1,X$, let $Y$ be a fair sign in $\{-1,1\}$; given $A=0$, set $Y=0$. In the unrestricted observed-law model with positive treatment probability almost surely, the treated regression mean target is $\Psi(P)=E_P[E_P(Y\mid A=1,X)]$. Prove that this target has no square-integrable influence gradient at the stated law, despite being identified. Establish the obstruction through valid regular score paths, rather than merely writing a candidate with infinite variance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Keep the covariate and treatment laws fixed while tilting the treated conditional outcome distribution.

</details>

<details>
<summary>Hint 2</summary>

Localize inverse-probability residual scores away from zero, normalize their score norm, and examine their target derivatives as the localization expands.

</details>

<details>
<summary>Model proof</summary>

Arbitrarily weak overlap makes the target derivative unbounded on unit-norm valid scores.

1. For $0<h<1$, put $L_h=\log(1/h)$ and $s_h=A Y1_{\{X\ge h\}}/(X\sqrt{L_h})$. Each score is bounded, has conditional mean zero given $(A,X)$, and satisfies $E s_h^2=L_h^{-1}\int_h^1x^{-1}dx=1$.
2. For sufficiently small two-sided $t$, the density ratio $1+ts_h$ is positive and normalized. It leaves the laws of $X$ and $A\mid X$ fixed. The bounded square-root expansion verifies a DQM path with score $s_h$.
3. On this path the treated conditional outcome mean is $t1_{\{x\ge h\}}/(x\sqrt{L_h})$. The target derivative is consequently $L_h^{-1/2}\int_h^1x^{-1}dx=\sqrt{L_h}\to\infty$.
4. If an $L^2$ gradient $g$ represented all path derivatives, their magnitudes would be at most $\|g\|_2\|s_h\|_2=\|g\|_2$, a contradiction. Thus there is no finite-variance influence function for regular asymptotically linear estimation at this law.
5. The treated mean remains an identified observed-law functional because $P(A=1\mid X)>0$ almost surely. Identification alone does not supply the uniform overlap or integrability needed for finite first-order efficiency.

**Self-assessment rubric**

- Construct bounded valid scores with unit information.
- Verify normalization, positivity, and DQM while preserving the other laws.
- Compute derivatives diverging along the valid score family.
- Prove the gradient obstruction and distinguish it from nonidentification.

</details>
