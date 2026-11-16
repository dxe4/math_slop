# Lose distinguishability when information is restricted

*Medium · [Probability problems](index.md)*

Let $P,Q$ be probability measures on $(\Omega,\mathcal F)$ with $Q\ll P$ and density $Z=dQ/dP$. For a sub-sigma-field $\mathcal G$, define $d_{\mathcal G}(P,Q)=\sup_{A\in\mathcal G}|Q(A)-P(A)|$. Prove $d_{\mathcal G}(P,Q)=\tfrac12 E_P|E_P[Z\mid\mathcal G]-1|$ and deduce $d_{\mathcal G}(P,Q)\le\sup_{A\in\mathcal F}|Q(A)-P(A)|$. Identify a $\mathcal G$-event attaining the supremum.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Express $Q(A)-P(A)$ for $A\in\mathcal G$ using the conditional density. Its signed integrand has expectation zero.

</details>

<details>
<summary>Hint 2</summary>

Separate that integrand into positive and negative parts and consider the event on which it is nonnegative. Then compare its absolute conditional mean with a conditional mean of its absolute value.

</details>

<details>
<summary>Model proof</summary>

Restriction replaces the likelihood ratio by a conditional mean, which cannot increase its absolute deviation from one.

1. Set $z=E_P[Z\mid\mathcal G]$ and $H=z-1$. For $A\in\mathcal G$, $Q(A)-P(A)=E_P[H1_A]$. Here $H$ is integrable, $\mathcal G$-measurable, and $E_PH=E_PZ-1=0$. Thus $E_PH^+=E_PH^-=\tfrac12E_P|H|$.
2. For every $A$, the signed integral lies between $-E_PH^-$ and $E_PH^+$. The event $A_+=\{z\ge1\}\in\mathcal G$ attains the positive bound, since its zero part contributes nothing. Hence the supremum is exactly $\tfrac12E_P|z-1|$. This also treats $P=Q$ and zero-valued densities without dividing by them.
3. Conditional Jensen gives $|z-1|=|E_P[Z-1\mid\mathcal G]|\le E_P[|Z-1|\mid\mathcal G]$. Integrate and apply the same positive/negative-part argument with the full sigma-field: $d_{\mathcal G}(P,Q)\le\tfrac12E_P|Z-1|=\sup_{A\in\mathcal F}|Q(A)-P(A)|$.

**Self-assessment rubric**

- Represent differences on $\mathcal G$ by $H=E_P[Z\mid\mathcal G]-1$ and use its zero integral.
- Bound every signed integral and exhibit the measurable sign event attaining the bound.
- Apply conditional Jensen and identify the full-information total-variation expression with the same convention.

</details>
