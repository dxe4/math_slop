# Verify a martingale CLT for stationary ergodic predictable stakes

*Medium · [Probability problems](index.md)*

Let $(\mathcal F_k)_{k\ge0}$ be a filtration and let $\xi_k\in\{-1,1\}$ be $\mathcal F_k$-measurable with $P(\xi_k=1\mid\mathcal F_{k-1})=P(\xi_k=-1\mid\mathcal F_{k-1})=1/2$. Let $(H_j)_{j\ge0}$ be stationary and ergodic, with $H_{k-1}$ measurable with respect to $\mathcal F_{k-1}$, $|H_j|\le C<\infty$, and $\sigma^2=E[H_0^2]>0$. Prove $n^{-1/2}\sum_{k=1}^nH_{k-1}\xi_k\Rightarrow N(0,\sigma^2)$. You may use the ergodic theorem and the martingale difference-array CLT: summed conditional variances converging in probability to a deterministic variance, together with the Lindeberg condition $\sum_kE[D_{n,k}^2 1_{\{|D_{n,k}|>\varepsilon\}}]\to0$ for each $\varepsilon>0$, imply the corresponding centered normal limit. Verify the hypotheses rather than treating the summands as iid.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use a triangular array with one row for each normalization $n$. Check the conditional first and second moments using predictability of the stakes.

</details>

<details>
<summary>Hint 2</summary>

The ergodic theorem applies to squared stakes. Separately exploit the deterministic bound on individual normalized increments to control the Lindeberg events.

</details>

<details>
<summary>Model proof</summary>

Dependence of predictable stakes is compatible with a Gaussian limit when ergodicity stabilizes the conditional variance and no normalized increment remains large.

1. Set $D_{n,k}=H_{k-1}\xi_k/\sqrt n$ for $1\le k\le n$. Predictability and the conditional fair-sign law give $E[D_{n,k}\mid\mathcal F_{k-1}]=0$ and $E[D_{n,k}^2\mid\mathcal F_{k-1}]=H_{k-1}^2/n$. Boundedness guarantees square integrability, so each row is a martingale difference array for the indicated filtration.
2. Its summed conditional variance is $V_n=n^{-1}\sum_{k=1}^nH_{k-1}^2$. Stationarity and ergodicity of the stake process, applied to the integrable square function, give $V_n\to E[H_0^2]=\sigma^2$ almost surely and hence in probability. The limiting variance is the mean square of the stake, not the square of its mean.
3. For any $\varepsilon>0$, the bound $|D_{n,k}|\le C/\sqrt n$ makes every event $\{|D_{n,k}|>\varepsilon\}$ empty up to null sets once $n>C^2/\varepsilon^2$. The entire unconditional Lindeberg sum is then zero; the corresponding conditional sum is zero as well.
4. The stated martingale CLT therefore applies and gives the desired $N(0,\sigma^2)$ limit for the row sum. Conditional fairness, predictability, ergodic variance stabilization and bounded increments each supplied a separate hypothesis. Independence or identical distribution of the products $H_{k-1}\xi_k$ was neither assumed nor used.

**Self-assessment rubric**

- Construct the normalized array and verify conditional centering and square integrability with the correct filtration.
- Use the ergodic theorem on squared stakes to obtain the deterministic limiting conditional variance.
- Show that the normalized increment bound makes the required Lindeberg sums vanish.
- Apply the stated theorem after verification and do not substitute an unsupported iid CLT or an incorrect variance.

</details>
