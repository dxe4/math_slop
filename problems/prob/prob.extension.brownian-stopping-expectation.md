# A bounded Brownian stopping time preserves its mean

*Medium · [Probability problems](index.md)*

Let $B$ be standard Brownian motion in its completed right-continuous natural filtration. Let $T$ be a stopping time with $0\le T\le K$ almost surely for a deterministic finite $K$. Use the following bounded optional-stopping theorem: for a continuous martingale $M$ on $[0,K]$ with $E[\sup_{t\le K}|M_t|]<\infty$, any such stopping time satisfies $E[M_T]=E[M_0]$. You may also use Doob's L2 maximal bound. Prove that $B_T$ is integrable and $E[B_T]=0$, stating the hypotheses used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Brownian motion is a continuous square-integrable martingale in the specified filtration.

</details>

<details>
<summary>Hint 2</summary>

Use the allowed maximal bound to obtain an integrable finite-horizon supremum. This both controls the stopped value and supplies the stated optional-stopping theorem's hypothesis.

</details>

<details>
<summary>Model proof</summary>

Finite-horizon square-integrable maximal control justifies the stated stopping theorem.

1. Brownian increments are centred and independent of the natural past, and this martingale property is preserved by the stated usual augmentation. Brownian paths are continuous, $B_0=0$, and $E[B_K^2]=K$. If $K=0$, the result follows immediately from $T=0$ almost surely.
2. For $K>0$, the allowed Doob L2 bound gives $E[\sup_{0\le t\le K}|B_t|^2]\le4E[B_K^2]=4K$. Cauchy–Schwarz implies $E[\sup_{t\le K}|B_t|]\le2\sqrt K<\infty$. Since $|B_T|$ is bounded by that supremum almost surely, $B_T$ is integrable.
3. The process is therefore a continuous martingale with the integrable supremum required by the supplied theorem, and $T$ is a stopping time with the deterministic bound $K$. Applying the theorem gives $E[B_T]=E[B_0]=0$. The argument uses the deterministic finite horizon and does not extend by itself to arbitrary almost-surely finite hitting times.

Doob's bound controls the finite-horizon supremum, so the stopped value is integrable and bounded optional stopping gives mean zero.

**Self-assessment rubric**

- Identify the Brownian martingale, continuity and second moments in the specified filtration.
- Use the allowed L2 maximal bound to prove the integrable supremum and stopped-value integrability, including the zero-horizon case.
- Check every hypothesis of the stated bounded stopping theorem and retain its finite-horizon scope.

</details>
