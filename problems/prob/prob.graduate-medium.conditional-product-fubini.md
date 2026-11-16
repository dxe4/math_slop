# Project on the product space before integrating a parameter

*Medium · [Probability problems](index.md)*

Let $(\Omega,\mathcal F,P)$ be a probability space, $\mathcal G\subseteq\mathcal F$, and $(S,\Sigma,\mu)$ sigma-finite. Let $f\in L^1(P\otimes\mu)$, and let $F=E_{P\otimes\mu}[f\mid\mathcal G\otimes\Sigma]$, using conditional expectation for a sigma-finite measure whose restriction to the conditioning sigma-field is sigma-finite. Prove $\int_S F(\omega,s)\,\mu(ds)=E_P[\int_S f(\omega,s)\,\mu(ds)\mid\mathcal G]$ almost surely. If $f_n\to f$ in $L^1(P\otimes\mu)$ and $F_n$ are the corresponding product conditional expectations, prove convergence of the integrated $F_n$ in $L^1(P)$. Do not assume arbitrary separately chosen conditional-expectation versions are jointly measurable.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Work with the jointly measurable product representative already supplied. Apply Fubini to its absolute value before defining the parameter integral.

</details>

<details>
<summary>Hint 2</summary>

Use tests of the form $A\times S$ for $A\in\mathcal G$, and bound the integrated difference by the product-space $L^1$ difference. The conditional-expectation contraction controls that latter difference.

</details>

<details>
<summary>Model proof</summary>

Product-space projection supplies the joint measurability that a formal parameterwise conditional expectation would otherwise leave unjustified.

1. The measure $P\otimes\mu$ restricted to $\mathcal G\otimes\Sigma$ is sigma-finite: use $\Omega\times S_j$ for a finite-measure exhaustion of $S$. Thus the stated product conditional expectation is legitimate and satisfies $\|F\|_1\le\|f\|_1$. Fubini gives finite parameter integrals of $|f|$ and $|F|$ almost surely. The integral of the $\mathcal G\otimes\Sigma$-measurable $F$ has a $\mathcal G$-measurable version, obtained by signed Tonelli and setting exceptional values to zero.
2. Write $g(\omega)=\int f(\omega,s)\,\mu(ds)$ and $H(\omega)=\int F(\omega,s)\,\mu(ds)$. Both are in $L^1(P)$. For every $A\in\mathcal G$, Fubini and the product conditional-expectation identity on $A\times S$ give $\int_AH\,dP=\int_{A\times S}F\,d(P\otimes\mu)=\int_{A\times S}f\,d(P\otimes\mu)=\int_Ag\,dP$. Hence $H=E_P[g\mid\mathcal G]$ almost surely.
3. If $f_n\to f$ in product $L^1$, the contraction gives $\|F_n-F\|_{L^1(P\otimes\mu)}\le\|f_n-f\|_{L^1(P\otimes\mu)}$. Another application of Fubini and the integral triangle inequality yields $\|\int(F_n-F)\,d\mu\|_{L^1(P)}\le\|F_n-F\|_{L^1(P\otimes\mu)}\to0$. Every step uses jointly measurable product representatives, not a simultaneous choice of sectionwise conditional versions.

**Self-assessment rubric**

- Check sigma-finiteness of the restricted product measure and use absolute integrability to define the parameter integrals.
- Verify the conditional-expectation identity on every $A\in\mathcal G$ via the product event $A\times S$.
- Combine the product conditional-expectation contraction with Fubini to obtain the stated $L^1(P)$ convergence.

</details>
