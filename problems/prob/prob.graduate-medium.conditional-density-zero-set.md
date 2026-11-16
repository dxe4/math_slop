# Condition after a density change without strict positivity

*Medium · [Probability problems](index.md)*

Let $(\Omega,\mathcal F,P)$ be a probability space, let $Z\ge0$ satisfy $E_PZ=1$, and define $Q(A)=E_P[Z1_A]$. Let $\mathcal G\subseteq\mathcal F$ and let $X$ be real and $Q$-integrable. Put $z=E_P[Z\mid\mathcal G]$ and $a=E_P[ZX\mid\mathcal G]$. Prove that $Q(z=0)=0$ and that $Y=1_{\{z>0\}}a/z$ is a version of $E_Q[X\mid\mathcal G]$. Do not assume $Z>0$ or that $X$ is $P$-integrable; justify the required integrability and the zero-denominator convention.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

First compare $Q(D)$ with $E_P[z1_D]$ for a $\mathcal G$-measurable event $D$. Which notion of null set matters for the final conditional expectation?

</details>

<details>
<summary>Hint 2</summary>

Control the proposed quotient using $E_P[Z|X|\mid\mathcal G]$. Establish the weighted integral identity first for nonnegative $\mathcal G$-measurable multipliers, then use it to justify integrability before testing signed identities.

</details>

<details>
<summary>Model proof</summary>

A conditional density changes both the conditional numerator and the reference measure; its zeros must be handled before division.

1. Since $E_Q|X|=E_P[Z|X|]<\infty$, the product $ZX$ is $P$-integrable (take it to be zero where $Z=0$), so $a$ is defined. Set $b=E_P[Z|X|\mid\mathcal G]$. Conditional positivity gives $|a|\le b$, and $z,b$ are finite almost surely.
2. The event $D=\{z=0\}$ belongs to $\mathcal G$, and $Q(D)=E_P[Z1_D]=E_P[z1_D]=0$. Nonnegativity also gives $Z=0$ $P$-almost surely on $D$, whence $E_P[b1_D]=E_P[Z|X|1_D]=0$ and $a=0$ almost surely there. The convention $Y=0$ on $D$ is therefore harmless for $Q$.
3. For any nonnegative $\mathcal G$-measurable $V$, truncation and monotone convergence give $E_P[ZV]=E_P[zV]$, allowing infinite values. Apply this to $V=|Y|$. Then $E_Q|Y|=E_P[z|Y|]=E_P[1_{\{z>0\}}|a|]\le E_Pb<\infty$. Thus $Y$ is genuinely $Q$-integrable, even when it is not $P$-integrable.
4. For $A\in\mathcal G$, apply the preceding identity to the positive and negative parts of $Y1_A$: $E_Q[Y1_A]=E_P[zY1_A]=E_P[a1_A]=E_P[ZX1_A]=E_Q[X1_A]$. Here $zY=a$ almost surely, including on $D$. Together with $\mathcal G$-measurability and $Q$-integrability, this is the defining conditional-expectation identity.

**Self-assessment rubric**

- Use $Q$-integrability to obtain $ZX\in L^1(P)$ and dominate the conditional numerator by $E_P[Z|X|\mid\mathcal G]$.
- Show $\{z=0\}$ is $Q$-null and that the numerator also vanishes there $P$-almost surely.
- Justify the nonnegative unbounded multiplier identity and deduce $Y\in L^1(Q)$ without assuming $Y\in L^1(P)$.
- Verify the conditional-expectation integral identity for every $A\in\mathcal G$ using legitimate signed integrals.

</details>
