# Reverse the likelihood on each information set

*Medium · [Probability problems](index.md)*

Let $Z>0$ almost surely on $(\Omega,\mathcal F,P)$, with $E_PZ=1$, and set $dQ=Z\,dP$. Let $(\mathcal F_n)_{n\ge0}$ be a filtration and put $Z_n=E_P[Z\mid\mathcal F_n]$. Identify $d(P|_{\mathcal F_n})/d(Q|_{\mathcal F_n})$ as an $\mathcal F_n$-measurable random variable, and prove that these derivatives form a $Q$-martingale. Justify positivity, integrability, and the direction of the measure change.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

First identify the density of $Q|_{\mathcal F_n}$ relative to $P|_{\mathcal F_n}$ by testing events in $\mathcal F_n$. What does strict positivity of $Z$ imply about its conditional expectation?

</details>

<details>
<summary>Hint 2</summary>

Test the proposed reverse density on an event in an earlier sigma-field. Compare that integral at two times rather than assuming that taking reciprocals preserves a martingale under $P$.

</details>

<details>
<summary>Model proof</summary>

A reciprocal likelihood is a martingale under the reverse reference law, not in general under the original law.

1. For $A\in\mathcal F_n$, $Q(A)=E_P[Z1_A]=E_P[Z_n1_A]$, so $Z_n$ is the restricted forward density. It is finite almost surely. If $D=\{Z_n=0\}$, then $E_P[Z1_D]=0$; strict positivity of $Z$ forces $P(D)=0$. Hence $Z_n>0$ almost surely, and $P,Q$ are equivalent.
2. Put $L_n=1/Z_n$, modifying null sets arbitrarily. For $A\in\mathcal F_n$, conditional weighting gives $E_Q[L_n1_A]=E_P[ZL_n1_A]=E_P[Z_nL_n1_A]=P(A)$. Nonnegative truncation justifies using the possibly unbounded multiplier. In particular $E_QL_n=1$, so it is integrable and is the required reverse derivative.
3. If $m\le n$ and $A\in\mathcal F_m$, the preceding identity at both times gives $E_Q[L_n1_A]=P(A)=E_Q[L_m1_A]$. Adaptedness and integrability now imply $E_Q[L_n\mid\mathcal F_m]=L_m$. No reciprocal-martingale assertion under $P$ was used.

**Self-assessment rubric**

- Identify $Z_n$ as the forward restricted density and prove its positivity from $Z>0$.
- Verify the reverse integral identity with justified unbounded weighting and obtain $L_n\in L^1(Q)$.
- Use all earlier measurable events to prove the martingale property under $Q$, with the correct measure direction.

</details>
