var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: multiplicity-and-post-selection-scope
title: "Multiplicity and Post-Selection Scope"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Multiplicity and Post-Selection Scope

This chapter addresses the problem of multiple comparisons and the challenges of inference after model selection. When many hypotheses are tested or many models are considered, naive application of standard errors and p-values leads to inflated error rates.

## Familywise error control

Consider testing $m$ null hypotheses $H_{0,1},\\dots,H_{0,m}$, of which $m_{0}$ are true. Let $V$ be the number of true nulls falsely rejected. The *familywise error rate* (FWER) is $\\mathbb{P}(V\\ge 1)$.

### Bonferroni's inequality

For any collection of tests with marginal level $\\alpha$,

$$\\mathbb{P}(V\\ge 1)\\le\\sum_{j\\in H_{0}}\\mathbb{P}(\\text{reject }H_{0,j})\\le m_{0}\\alpha\\le m\\alpha.$$

Thus testing each hypothesis at level $\\alpha/m$ controls FWER at $\\alpha$. No independence assumption is required.

### Holm's step-down procedure

Order the p-values $p_{(1)}\\le p_{(2)}\\le\\dots\\le p_{(m)}$. Holm's procedure rejects $H_{0,(j)}$ for all $j\\le k^{*}$ where

$$k^{*}=\\max\\Bigl\\{k:p_{(j)}\\le\\frac{\\alpha}{m-j+1}\\text{ for every }j\\le k\\Bigr\\},$$

with $k^{*}=0$ if the first comparison fails. Equivalently, compare in
increasing p-value order and stop at the first failed comparison. The
\`\`for every $j\\le k$'' clause is essential: a later, larger threshold cannot
restart rejection after an earlier failure.

![Holm step-down procedure shown as a sequence that stops at the first failed ordered p-value comparison](figures/holm-step-down.svg)

*Figure 11.1. Holm's rejection set is an initial segment of the ordered
p-values; it cannot resume after a failed comparison.*

The diagram's four ordered tests use $m=4$ and $\\alpha=0.05$. The first two
p-values pass thresholds $0.0125$ and $0.0167$; the third fails its $0.025$
threshold, so the fourth is not tested even though its own displayed p-value
would be below $0.05$.

Holm controls FWER strongly (under any configuration of true and false nulls) and is uniformly more powerful than Bonferroni.

## False discovery rate

The *false discovery rate* (FDR) is

$$\\text{FDR}=\\mathbb{E}\\Bigl[\\frac{V}{\\max(R,1)}\\Bigr],$$

where $R$ is the total number of rejections. FDR is weaker than FWER: controlling FDR at $0.05$ allows some false rejections, provided they are a small fraction of all rejections.

### Benjamini–Hochberg procedure

Order p-values as above. Reject $H_{0,(j)}$ for all $j\\le k^{*}$ where

$$k^{*}=\\max\\Bigl\\{k:p_{(k)}\\le\\frac{\\alpha k}{m}\\Bigr\\}.$$

### Theorem 11.1 — FDR control

If the p-values corresponding to true nulls are independent of each other and of the false null p-values, and each is valid marginally, then the Benjamini–Hochberg procedure controls FDR at level $\\alpha m_{0}/m\\le\\alpha$.

Under positive regression dependence (PRDS), FDR control still holds. Under arbitrary dependence, the Benjamini–Yekutieli modification controls FDR at $\\alpha$.

## Post-selection inference

When a model is selected by examining the data, standard inference that conditions on the selected model is generally invalid. The selection event introduces bias: variables that appear significant were selected precisely because they appeared significant.

### Data splitting

The simplest honest approach is to split the data: use one portion for model selection, the other for inference. Inference on the selected model using the held-out portion is valid at nominal level, at the cost of reduced efficiency.

### Selective inference

More sophisticated approaches condition on the selection event. For example, if variable $j$ is selected because its marginal correlation exceeds a threshold, inference for $\\beta_{j}$ should condition on that selection. This leads to truncated normal distributions and adjusted confidence intervals.

### Bootstrap and selection

Bootstrap resampling must repeat the selection procedure in each bootstrap sample to approximate the full sampling distribution. Even then, nonregular selection boundaries (where the true coefficient is exactly at the selection threshold) can defeat naive bootstrap theory.

## Worked example: Bonferroni versus Holm

Suppose $m=5$ tests yield p-values $(0.01, 0.03, 0.04, 0.20, 0.50)$.

**Bonferroni:** Reject if $p\\le 0.05/5=0.01$. Only the first hypothesis is rejected.

**Holm:** Compare $p_{(1)}=0.01$ to $0.05/5=0.01$ (reject), $p_{(2)}=0.03$ to $0.05/4=0.0125$ (fail to reject), and stop. Only the first hypothesis is rejected.

Now suppose p-values are $(0.01, 0.02, 0.025, 0.20, 0.50)$.

**Bonferroni:** Reject only $p_{(1)}=0.01$.

**Holm:** $p_{(1)}=0.01\\le 0.01$ (reject), $p_{(2)}=0.02>0.0125$ (fail). Still only one rejection.

With $(0.001, 0.008, 0.015, 0.04, 0.10)$:

**Bonferroni:** Reject $p\\le 0.01$: hypotheses 1 and 2.

**Holm:** $p_{(1)}=0.001\\le 0.01$ (reject), $p_{(2)}=0.008\\le 0.0125$ (reject), $p_{(3)}=0.015\\le 0.0167$ (reject), $p_{(4)}=0.04>0.025$ (stop). Holm rejects three hypotheses; Bonferroni rejects two.

## Common errors and misconceptions

- **Screening hypotheses informally and testing formally.** The FDR guarantee applies to the family actually entered, not hypotheses silently screened out beforehand. If $1000$ variables are screened to $10$ by inspection and then tested, the $10$ tests do not have FDR control unless the screening is accounted for.

- **Confusing FDR with FWER.** FDR controls the expected false fraction among rejections, whereas FWER controls the probability of making one or more false rejections. Neither guarantee says that a realized analysis must contain no error. Using FDR control when a bound on the probability of any false rejection is required changes the error criterion.

- **Assuming independence for Benjamini–Hochberg.** The standard BH procedure requires independence or PRDS. With arbitrary dependence, use Benjamini–Yekutieli or permutation-based methods.

- **Reporting p-values after selection without adjustment.** Post-selection p-values are generally optimistic. Data splitting or selective inference is required for honest reporting.

## Practice exercises

**Exercise 11.1.** Show that Holm's procedure is uniformly more powerful than Bonferroni.

**Solution.** Suppose Bonferroni rejects the hypothesis with ordered rank $j$,
so $p_{(j)}\\le\\alpha/m$. For every $i\\le j$, ordering gives
$p_{(i)}\\le p_{(j)}\\le\\alpha/m\\le\\alpha/(m-i+1)$. Thus every Holm comparison
through rank $j$ passes, and Holm rejects that hypothesis. The argument
respects Holm's stopping rule; comparing only the rank-$j$ thresholds would
not suffice. Holm can reject additional hypotheses because its thresholds
increase after each successful step. ∎

**Exercise 11.2.** For $m=100$ independent tests, all null hypotheses true and all p-values exactly uniform, at what threshold does Bonferroni reject? What is the expected number of rejections?

**Solution.** Bonferroni rejects if $p\\le 0.05/100=0.0005$. Exact uniformity gives $\\mathbb{P}(p\\le0.0005)=0.0005$, so the expected number of rejections is exactly $0.05$. Under independence the FWER is $1-(1-0.0005)^{100}\\approx0.0488$. If null p-values are merely valid (superuniform), the expected count and FWER are bounded above by these values rather than necessarily equal to them. ∎

**Exercise 11.3.** Explain why the ordinary bootstrap can fail for post-selection inference at nonregular boundaries.

**Solution.** At a nonregular boundary, such as a coefficient on the local scale where a selection rule changes active set, the selected estimator is not a smooth functional and its limiting law can change across $n^{-1/2}$-local parameter sequences. A bootstrap centred at the empirical estimate need not reproduce that local law uniformly, so ordinary intervals can under- or overcover. This is not a claim that every finite-sample selection probability is discontinuous in the parameter; a Gaussian threshold probability, for example, is continuous. A particular bootstrap procedure needs its own local/uniform validity theorem. ∎

## Forward and backward connections

This chapter addressed the inferential challenges that arise when multiple procedures are applied. In *Boundary Map: What This Book Does Not Prove*, we summarize the limitations of all inference procedures, including multiplicity adjustments. In *Functional Delta Method and Bootstrap Boundaries*, we examine bootstrap methods more generally and their validity conditions.
`;export{e as default};