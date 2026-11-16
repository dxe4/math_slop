# Condition a singular Gaussian on its actual affine support

*Medium · [Statistics and probability](index.md)*

Let $(X,Y)$ be jointly Gaussian, with means $\mu_X,\mu_Y$ and block covariance $\begin{pmatrix}A&C^{\mathsf T}\\C&D\end{pmatrix}$, where $A$ may be singular. Let $A^+$ be its spectral Moore–Penrose inverse. Prove $C=CA^+A$, and identify a conditional Gaussian law of $Y$ given $X$ with mean $\mu_Y+CA^+(X-\mu_X)$ and covariance $D-CA^+C^{\mathsf T}$. Explain why claims about this version outside the affine support of $X$ are not determined by the joint law. You may use Gaussian zero-covariance independence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

If $vinker A$, then $v^{mathsf T}(X-mu_X)=0$ almost surely, which constrains $Cv$.

</details>

<details>
<summary>Hint 2</summary>

Subtract $CA^+(X-mu_X)$ from the centered $Y$ and calculate its covariance with $X$.

</details>

<details>
<summary>Model proof</summary>

Singular Gaussian conditioning uses an inverse on the covariance range and ignores null directions.

1. For $v\in\ker A$, the centered scalar $v^{\mathsf T}(X-\mu_X)$ has variance zero. Its covariance with $Y$ is therefore $Cv=0$. Thus $C$ vanishes on $\ker A$, giving $C=CA^+A$ by the spectral projection onto $\operatorname{range}A$.
2. Set $R=Y-\mu_Y-CA^+(X-\mu_X)$. It is jointly Gaussian with $X$, and $\operatorname{Cov}(R,X)=C-CA^+A=0$. Hence $R$ is independent of $X$. Its covariance simplifies to $D-CA^+C^{\mathsf T}$, which is positive semidefinite as the covariance of $R$.
3. This independent residual representation gives the stated conditional Gaussian kernel; it remains meaningful when the residual covariance is singular. Almost surely $X$ lies in $\mu_X+\operatorname{range}A$. Any changes to a conditional kernel off that affine support occur on a null set and cannot be fixed by the joint law.

**Self-assessment rubric**

- Derive the cross-covariance constraint from deterministic null directions.
- Calculate both residual covariances and justify independence even in the singular case.
- Identify the Gaussian kernel and distinguish almost-sure identification from values off support.

</details>
