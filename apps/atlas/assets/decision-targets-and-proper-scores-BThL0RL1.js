var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: decision-targets-and-proper-scores
title: "Decision Targets and Proper Scores"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Decision Targets and Proper Scores

This chapter separates the problem of estimating a parameter from the problem of selecting a decision. A point forecast minimizes expected loss under the predictive distribution; the choice of loss determines the optimal forecast. Scoring rules evaluate probabilistic forecasts, and proper scores encourage honest reporting.

## Decision-theoretic targets

A *decision* $d$ is chosen from a set $\\mathcal{D}$ to minimize expected loss $\\mathbb{E}[L(d,Y)]$ where $Y$ is the outcome and $L$ is a loss function.

### Common loss functions and their optima

The following finite-risk statements require $\\mathbb E[Y^2]<\\infty$ for squared error and $\\mathbb E|Y|<\\infty$ for the absolute and quantile losses. Without these conditions every candidate can have infinite risk, so a formal difference-of-risks convention or another restricted decision problem is needed.

- **Squared error:** $L(d,y)=(d-y)^{2}$. The optimal forecast is $d^{*}=\\mathbb{E}[Y]$.
- **Absolute error:** $L(d,y)=|d-y|$. The optimal forecast is $d^{*}=\\operatorname{median}(Y)$.
- **Quantile loss:** $L_{\\tau}(d,y)=(y-d)(\\tau-\\mathbf{1}_{\\{y\\le d\\}})$. The optimal forecast is the $\\tau$th quantile of $Y$.
- **Asymmetric absolute loss:** $L(d,y)=\\alpha|d-y|\\mathbf{1}_{\\{y\\le d\\}}+\\beta|d-y|\\mathbf{1}_{\\{y>d\\}}$. The optimal forecast is a weighted quantile.

A classifier threshold depends on relative costs and prevalence, not AUC alone. A model with high AUC may still produce poor decisions if the cost structure is ignored.

## Proper scoring rules

A *scoring rule* $S(Q,y)$ evaluates a probabilistic forecast $Q$ against an observed outcome $y$. It is *proper* if, for every true law $P$,

$$\\mathbb{E}_{P}[S(P,Y)]\\le\\mathbb{E}_{P}[S(Q,Y)]\\quad\\text{for all }Q.$$

It is *strictly proper* if equality implies $Q=P$ (in distribution).

### Examples

- **Negative log score:** $S(Q,y)=-\\log q(y)$, where $q$ is the density of $Q$. This is strictly proper. It heavily penalizes assigning tiny probability to realized outcomes.
- **Brier score (quadratic):** For binary $Y\\in\\{0,1\\}$ and forecast probability $p$, $S(p,y)=(y-p)^{2}$. This is proper.
- **Spherical loss:** $S(Q,y)=-q(y)/\\|q\\|_{2}$ for square-integrable densities
  (or finite probability vectors). The minus sign matches this chapter's
  lower-is-better convention. Cauchy--Schwarz proves propriety; on probability
  vectors, and on densities identified up to almost-everywhere equality, the
  minimizer is uniquely $Q=P$ when the relevant $L^2$ norms are finite.

### Decomposition

For the Brier score, the expected score decomposes as

$$\\mathbb{E}[(Y-p)^{2}]=\\mathbb{E}[(Y-\\bar{Y})^{2}]+(\\bar{Y}-p)^{2},$$

where $\\bar{Y}=\\mathbb{E}[Y]$. This shows that calibration (matching the true probability) and sharpness (concentration of the forecast) together determine the score. Marginal calibration alone is not sufficient for an honest predictive distribution.

## Survey weights and evaluation

Survey weights may be needed to evaluate a target population rather than the observed sample. The weighted score

$$S_{w}(Q,y)=w\\cdot S(Q,y)$$

targets the population represented by the weights. Time and spatial predictions require evaluation over the intended horizon and geometry.

## Censored-outcome scores

For censored survival data, standard scores require modification. One approach uses inverse-probability-of-censoring weighting:

$$S_{IPCW}(Q,y,\\delta)=\\frac{\\delta}{\\hat{G}_{C}(y-)}S(Q,y),$$

where $G_C(y-)=\\mathbb P(C\\ge y\\mid\\text{declared history or covariates})$ is the left-limit censoring survival probability under the convention that an event at $y$ is observed when $T\\le C$. This inherits the assumptions of the censoring model, including conditional independent censoring and positivity. Other tie conventions require the matching survival endpoint.

## Worked example: proper score comparison

Consider a binary outcome with true probability $p=0.7$. Two forecasters report $Q_{1}$ with $p_{1}=0.7$ and $Q_{2}$ with $p_{2}=0.9$.

**Brier score expectations:**

$$\\mathbb{E}[S(Q_{1},Y)]=0.7(1-0.7)^{2}+0.3(0-0.7)^{2}=0.7\\cdot 0.09+0.3\\cdot 0.49=0.063+0.147=0.21.$$

$$\\mathbb{E}[S(Q_{2},Y)]=0.7(1-0.9)^{2}+0.3(0-0.9)^{2}=0.7\\cdot 0.01+0.3\\cdot 0.81=0.007+0.243=0.25.$$

The calibrated forecaster $Q_{1}$ has lower expected loss. The overconfident forecaster $Q_{2}$ is penalized for assigning high probability to the less likely outcome.

**Log score expectations:**

$$\\mathbb{E}[S(Q_{1},Y)]=-0.7\\log(0.7)-0.3\\log(0.3)\\approx 0.611.$$

$$\\mathbb{E}[S(Q_{2},Y)]=-0.7\\log(0.9)-0.3\\log(0.1)\\approx 0.765.$$

Again, $Q_{1}$ is preferred. Forecast $Q_2$ overstates the probability of the more likely event and assigns only $0.1$ to its complement; the log score penalizes that understated complement sharply whenever it occurs.

## Common errors and misconceptions

- **Evaluating point forecasts with improper scoring rules.** The mean squared error is proper for the mean, but using it to evaluate a median forecast is misleading. Match the score to the decision target.

- **Ignoring survey weights in evaluation.** An unweighted score evaluates performance in the observed sample. If the target is a population, weights are necessary.

- **Using a single scalar score.** A scalar score does not reveal subgroup or tail failures. A well-calibrated forecast on average may be poorly calibrated for high-risk subgroups.

- **Confusing properness with usefulness.** A proper score encourages honest forecasts, but it does not guarantee that the forecast is useful for the decision at hand. The choice of score should reflect the decision problem.

## Practice exercises

**Exercise 15.1.** Show that the Brier score is strictly proper for binary outcomes.

**Solution.** For forecast $p$ and true probability $\\pi$, the expected score is $\\pi(1-p)^{2}+(1-\\pi)p^{2}=\\pi-2\\pi p+p^{2}$. Differentiating with respect to $p$: $-2\\pi+2p=0$, so $p=\\pi$ is the unique minimizer. The second derivative is $2>0$, confirming a minimum. ∎

**Exercise 15.2.** For a continuous outcome with $\\mathbb E|Y|<\\infty$, show that the quantile loss $L_{\\tau}(d,y)=(y-d)(\\tau-\\mathbf{1}_{\\{y\\le d\\}})$ is minimized at the $\\tau$th quantile.

**Solution.** The subgradient with respect to $d$ is $-\\tau\\mathbb{P}(Y>d)+(1-\\tau)\\mathbb{P}(Y\\le d)=F(d)-\\tau$, where $F$ is the continuous CDF. At a $\\tau$th quantile it contains zero. For $d<q_{\\tau}$ the subgradient is nonpositive, and for $d>q_{\\tau}$ it is nonnegative; a plateau with $F(d)=\\tau$ can therefore give an interval of minimizers. If $F$ is strictly increasing, the two signs are strict away from $q_{\\tau}$ and the minimizer is unique. ∎

**Exercise 15.3.** A forecaster reports $p=0.99$ for an event that occurs with true probability $0.5$. Compute the expected log score and explain why it is heavily penalized.

**Solution.** $\\mathbb{E}[S]=-0.5\\log(0.99)-0.5\\log(0.01)\\approx -0.5(-0.01)-0.5(-4.605)=0.005+2.303=2.308$. The term $-\\log(0.01)=4.605$ dominates because the forecaster assigned only $1\\%$ probability to the event that occurs half the time. The log score heavily penalizes overconfidence. ∎

## Forward and backward connections

This chapter connected estimation to decision-making through scoring rules. In *Missingness and Weighting as Identification*, we examined how missing data complicates evaluation; here we saw how censored data requires modified scores. In *Small-Sample and Boundary Diagnostics*, we study what happens when the asymptotic approximations underlying score comparisons fail.
`;export{e as default};