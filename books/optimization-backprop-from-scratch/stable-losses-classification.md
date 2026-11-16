
# Stable Regression and Classification Losses

## Purpose and decision boundary

A loss is not merely the last line of a program. It declares what prediction means, how errors are valued, which conditional functional a model targets, and what numerical path backpropagation follows. This chapter derives regression and classification losses, proves properness for key probability scores, implements stable logit formulas, and shows how class weighting changes the target.

The prerequisites are empirical risk, matrix pullbacks, and finite-precision conditioning. The chapter does not turn fitted scores into decisions automatically. A probability forecast, a class label, and an operational action have different codomains and different losses. Medical, financial, legal, or safety-critical actions require domain-specific decision authority; the mathematical examples here are not advice.

For a prediction $a$ and outcome $y$, a loss $\ell (a,y)$ assigns a real cost. Given features $X=x$, the **conditional risk** is

$r_{x}(a)=\mathbb{E}[\ell (a,Y) | X=x]$.

A population-optimal prediction minimizes this conditional risk pointwise when the model class can represent it. The loss determines the target functional; optimization only searches for it within the chosen class and data protocol.

## Squared loss targets a conditional mean

For real $Y$ with finite second moment and action $a\in R$, squared loss is

$\ell (a,Y)=(a-Y)^{2}$.

Let $\mu =\mathbb{E}[Y|X=x]$. Expand:

$\mathbb{E}[(a-Y)^{2}|x]$

$=\mathbb{E}[((a-\mu )+(\mu -Y))^{2}|x]$

$=(a-\mu )^{2}+\mathbb{E}[(Y-\mu )^{2}|x]$,

because the cross term contains $\mathbb{E}[\mu -Y|x]=0$. The second term is independent of $a$, so the unique conditional minimizer is $a=\mu$.

This result needs a finite second moment. It does not say the mean is robust to contamination, that a linear model equals the conditional mean, or that squared loss matches operational value.

For half-squared loss $(\frac{1}{2})(a-y)^{2}$, the gradient with respect to $a$ is $a-y$. The factor $\frac{1}{2}$ changes gradient scale but not minimizers.

### Worked asymmetric distribution

Suppose $Y=0$ with probability $0.9$ and $Y=10$ with probability $0.1$. The mean is 1, so squared loss targets 1 even though the most likely outcome and median are zero. Its conditional risk is

$0.9(1-0)^{2}+0.1(1-10)^{2}=0.9+8.1=9$.

Predicting zero has risk $0.1\cdot 100=10$. Squared loss prefers 1 by one risk unit. Whether that tradeoff is appropriate is a loss-contract question.

## Absolute and quantile losses

Absolute loss $\lvert a-y\rvert$ targets a conditional median. For a finite distribution, moving $a$ to the right changes the slope by the probability mass passed. Where differentiable,

$d/da \mathbb{E} \lvert a-Y\rvert=P(Y<a)-P(Y>a)$.

A minimizer is any $a$ with at least half the mass at or below it and at least half at or above it. Nonuniqueness is possible.

For quantile level $\tau \in (0,1)$, define residual $r=y-a$ and **pinball loss**

$\rho _\tau (r)=r(\tau -1[r<0])$.

Equivalently, the loss is $\tau (y-a)$ when $y\ge a$ and $(1-\tau )(a-y)$ when $y<a$. A minimizer is a $\tau$-quantile. Away from atoms, the derivative with respect to $a$ is

$P(Y<a)-\tau$,

so a zero occurs where the conditional distribution function reaches $\tau$.

Quantile predictions at several levels need not be ordered when fitted separately. Enforcing noncrossing is an additional constraint or joint-model choice.

### Huber transition

For threshold $\delta >0$, Huber loss on residual $r=a-y$ is

$h_\delta (r)=(\frac{1}{2})r^{2}$ when $\lvert r\rvert\le \delta$,

$h_\delta (r)=\delta (\lvert r\rvert-\delta /2)$ when $\lvert r\rvert>\delta$.

Its derivative is $r$ inside and $\delta \operatorname{sign}(r)$ outside. The pieces meet with equal value and slope at $\pm \delta$, so the loss is differentiable and convex, but its second derivative changes abruptly. It caps residual influence on the score gradient; it does not protect against high-leverage feature values or adversarial data pipelines.

## Probability forecasts and proper scoring losses

For binary outcome $Y\in {0,1}$, a forecast $q\in [0,1]$ claims probability of $Y=1$. A scoring loss $L(q,y)$ is **proper** if, when the true event probability is $p$, expected loss

$R_{p}(q)=pL(q,1)+(1-p)L(q,0)$

is minimized at $q=p$. It is strictly proper if that minimizer is unique for every $p$ in the domain.

Properness aligns honest probability reporting with expected score minimization under the modeled law. It does not prove a fitted model is calibrated under shift, nor does it choose an action.

## Log loss is strictly proper

Binary log loss is

$L_{\log}(q,y)=-y \log q-(1-y)\log\left(1-q\right)$.

For $0<p<1$ and $0<q<1$, expected loss is

$R_{p}(q)=-p \log q-(1-p)\log\left(1-q\right)$.

Differentiate:

$R_{p}'(q)=-p/q+(1-p)/(1-q)=(q-p)/[q(1-q)]$.

The derivative is negative for $q<p$, zero at $q=p$, and positive for $q>p$. Thus the unique minimizer is $q=p$. Boundary cases follow by limits: when $p=0$, $q=0$ is optimal; when $p=1$, $q=1$ is optimal.

The excess risk is a Bernoulli Kullback–Leibler divergence:

$R_{p}(q)-R_{p}(p)=p \log\left(p/q\right)+(1-p)\log\left((1-p)/(1-q)\right)\ge 0$.

The nonnegativity is another properness proof, but using it requires the separate Gibbs inequality.

### Infinite penalty and model semantics

Assigning $q=0$ to an event that occurs gives infinite ideal log loss. In floating code, probabilities are often clipped. Clipping prevents infinities but changes the score and gradient. A more faithful computation accepts unconstrained logits and evaluates log loss through stable softplus, avoiding explicit probability clipping.

## Brier loss is strictly proper

Binary Brier loss is

$L_{B}(q,y)=(q-y)^{2}$.

Its expected risk is

$p(q-1)^{2}+(1-p)q^{2}$

$=(q-p)^{2}+p(1-p)$.

The unique minimizer is again $q=p$. Brier and log loss are both strictly proper but value errors differently. Log loss penalizes confident wrong forecasts without a finite bound; binary Brier lies in $[0,1]$.

Choosing between proper scores is a modeling choice involving sensitivity, tail behavior, and evaluation purpose. Properness alone does not rank them universally.

## Stable binary logit loss

Let a model return logit $z\in R$ and probability

$\sigma (z)=1/(1+\exp\left(-z\right))$.

Substituting $q=\sigma (z)$ into log loss gives

$\ell (z,y)=\operatorname{softplus}(z)-yz$,

where

$\operatorname{softplus}(z)=\log\left(1+\exp\left(z\right)\right)$.

Direct $\exp\left(z\right)$ overflows for large positive $z$. Use

$\operatorname{softplus}(z)=\max\left(z,0\right)+\log\left(1+\exp\left(-\lvert z\rvert\right)\right)$.

The derivative is

$d\ell /dz=\sigma (z)-y$.

A stable sigmoid uses separate branches:

```text
function sigmoid(z):
    if z >= 0:
        t = exp(-z)
        return 1 / (1 + t)
    else:
        t = exp(z)
        return t / (1 + t)

function binary_logit_loss(z, y):
    require y == 0 or y == 1
    return max(z, 0) + log1p(exp(-abs(z))) - y*z
```

At $z=1000,y=1$, the stable loss is approximately zero and the gradient is approximately zero without evaluating $\exp\left(1000\right)$. At $z=-1000,y=1$, loss is approximately 1000 and gradient approximately $-1$, again finite.

## Multiclass softmax cross-entropy

For logits $z\in \mathbb{R}^K$, softmax probabilities are

$q_{k}=\exp\left(z_{k}\right)/\sum_{j} \exp(z_{j})$.

For observed class $y$, cross-entropy loss is

$\ell (z,y)=-\log q_{y}=\log \sum_{j} \exp(z_{j})-z_{y}$.

Let $m=\max_{j} z_{j}$. The stable log-sum-exp identity is

$\log \sum_{j} \exp(z_{j})=m+\log \sum_{j} \exp(z_{j}-m)$.

Every shifted exponent is at most one. Subtracting the same constant from all logits leaves softmax unchanged, so this shift changes no probability.

Differentiate:

$\partial \ell /\partial z_{k}=q_{k}-1[k=y]$.

The gradient components sum to zero, matching the logit-shift symmetry. A test fixture should verify both the stable value and this null-direction invariant.

### Multiclass properness

For true class-probability vector $p\in \Delta _{K}$, expected cross-entropy of forecast $q\in \Delta _{K}$ is

$-\sum_{k} p_{k} \log q_{k}$.

Its excess above forecasting $p$ is $\sum_{k} p_{k} \log\left(p_{k}/q_{k}\right)$, nonnegative and zero only at $q=p$ on the supported simplex. Thus multiclass log loss is strictly proper, with standard qualifications at zero-probability coordinates.

## Margin losses are not probability scores

For labels $y\in {-1,1}$ and score $s\in R$, hinge loss is

$\max\left(0,1-ys\right)$.

It rewards a correct margin of at least one and is convex but nonsmooth. Its score $s$ is not inherently a probability, and hinge risk does not identify the full conditional event probability. A separate calibration map can be fitted, using held-out data and a declared score, but that is another learned component.

Exponential loss $\exp\left(-ys\right)$ is smooth and emphasizes negative margins strongly. Logistic margin loss $\operatorname{softplus}(-ys)$ corresponds to binary logit loss under $y\in {-1,1}$. Similar-looking curves can target different score semantics and have different robustness.

## Class imbalance and weighting

Suppose the true positive probability at $x$ is $p$. Weight positive log loss by $a>0$ and negative log loss by $b>0$:

$R(q)=-ap \log q-b(1-p)\log\left(1-q\right)$.

Stationarity gives

$-ap/q+b(1-p)/(1-q)=0$,

so the minimizer is

$q^{\star} = ap/[ap+b(1-p)]$.

Unless $a=b$, this is not the original probability $p$. Its odds satisfy

$q^{\star}/(1-q^{\star})=(a/b) p/(1-p)$.

Class weighting can be useful for a cost-sensitive surrogate or a changed target distribution, but the raw output should not be called calibrated for the original prevalence. If weights and sampling assumptions are known, original odds can sometimes be recovered:

$p=bq^{\star}/[a(1-q^{\star})+bq^{\star}]$.

That algebra does not repair model misspecification or distribution shift.

Oversampling positives without importance correction has a similar effect: it changes their mass in the empirical objective. Oversampling plus class weighting can apply the change twice.

### Weighted reduction denominators

Two implementations may report

$L_{1}=(1/n)\sum_{i} w_{i}\ell _{i}$

or

$L_{2}=[\sum_{i} w_{i}\ell _{i}]/[\sum_{i} w_{i}]$.

For a fixed dataset and positive constant denominator, they have the same minimizers but gradients differ by $n/\sum_{i} w_{i}$. Batch-to-batch sums of weights fluctuate, so the update scale can fluctuate too. Record which denominator is used and what happens when a batch has zero total weight.

## From probability to a cost-sensitive action

Suppose a binary action predicts positive or negative. Let a false positive cost $C_{\mathrm{FP}}>0$ and a false negative cost $C_{\mathrm{FN}}>0$, with zero cost for correct decisions. Given calibrated event probability $p$, expected costs are

$cost(positive)=C_{\mathrm{FP}}(1-p)$,

$cost(negative)=C_{\mathrm{FN}} p$.

Choose positive when

$p\ge C_{\mathrm{FP}}/(C_{\mathrm{FP}}+C_{\mathrm{FN}})$.

The familiar $0.5$ threshold occurs only when the two costs are equal. Changing the training loss and changing the decision threshold are distinct interventions. Constraints, capacity, delayed consequences, and group-dependent utilities can require a richer decision model.

## Label smoothing and target modification

For one-hot target $e_{y}$ and smoothing $\varepsilon \in [0,1]$, a common target is

$t=(1-\varepsilon )e_{y}+(\varepsilon /K)1$.

Cross-entropy gradient becomes $q-t$. This prevents the finite target from being exactly one-hot and changes the optimum from the empirical one-hot distribution toward uniform. It can alter optimization and confidence, but it is not evidence of calibrated probabilities. The smoothing convention differs when $\varepsilon$ is spread only across incorrect classes; state the formula.

## Focal modulation and properness boundary

Binary focal-style loss multiplies log loss by a factor such as $(1-q)^\gamma$ for a positive outcome and $q^\gamma$ for a negative outcome. It downweights easy cases for $\gamma >0$, but the modulated score is generally not strictly proper for the original event probability. Its optimum can be distorted even with unlimited model capacity.

Lin, Goyal, Girshick, He, and Dollár define this focal modulation in §3 of “Focal Loss for Dense Object Detection.” Charoenphakdee, Vongkulbhisal, Chairatanakul, and Sugiyama analyze the resulting class-posterior estimation boundary; see the bibliography.

Thus “handles imbalance” is incomplete. One must state whether the goal is probability estimation, ranking, a cost-sensitive action, tail emphasis, or optimization under a finite compute budget.

## Robust regression does not solve data validity

Absolute and Huber losses reduce the growth of response-residual influence compared with squared loss. They do not automatically handle:

- leverage points with extreme feature values;
- labels measured by a biased process;
- missing-not-at-random outcomes;
- dependence or distribution shift;
- contamination targeted to the model;
- an incorrect conditional functional.

Robustness is always with respect to a declared perturbation or data model. A bounded score derivative is one property, not a universal guarantee.

## Verification ledger

For each implemented loss, retain:

1. action and outcome domains;
2. reduction and weighting formula;
3. exact tiny values and derivatives;
4. finite-difference checks away from kinks;
5. extreme-logit finite checks;
6. shift invariance for multiclass logits;
7. gradient-sum and shape invariants;
8. properness or target-functional derivation;
9. the effect of weighting, smoothing, or clipping on that target;
10. probability, decision, causal, and deployment nonclaims.

## Exercises

1. A conditional outcome is 0 with probability $\frac{3}{4}$ and 8 with probability $\frac{1}{4}$. Find squared-loss and absolute-loss optimal predictions.
2. Prove the conditional-mean decomposition for squared loss, naming the needed moment assumption.
3. For observations $1,4,9,20$, find all empirical absolute-loss minimizers.
4. Compute pinball loss at $\tau =0.8$ for residuals $r=5$ and $r=-5$. Explain the asymmetry.
5. Verify value and derivative continuity of Huber loss at $r=\delta$.
6. Prove binary Brier loss is strictly proper by completing the square.
7. For true probability $p=0.2$, compare expected log loss of forecasts $q=0.2$ and $q=0.5$ numerically or symbolically.
8. Derive $d[\operatorname{softplus}(z)-yz]/dz=\sigma (z)-y$.
9. For logits $(1000,999,998)$ and class 2 using one-based indexing, write the stable cross-entropy expression without evaluating a huge exponential.
10. Prove softmax is invariant under adding $c1$ and show its cross-entropy gradient sums to zero.
11. With positive/negative log-loss weights $a=4,b=1$ and original probability $p=0.2$, find the weighted-risk optimum $q^{\star}$.
12. Invert the weighting transform in Exercise 11 to recover $p$ from $q^{\star}$.
13. False positives cost 2 and false negatives cost 8. Find the probability threshold for a positive action.
14. For $K=4$, class 3, and $\varepsilon =0.2$, write the smoothed target under the uniform-mixture convention.
15. Show that duplicating every positive row four times changes the uncorrected empirical class mass, and give an importance weight that restores the original row mean.
16. Design a loss verification suite with at least two exact cases, two extreme cases, one invariance, and three explicit claim boundaries.

## Full solutions

1. The mean is $(\frac{3}{4})0+(\frac{1}{4})8=2$, so squared loss targets 2. At least three quarters of mass is at zero, so the unique median and absolute-loss optimum is 0.
2. Let $\mu =\mathbb{E}[Y|x]$ and assume $\mathbb{E}[Y^{2}|x]<\infty$. Expand $(a-Y)^{2}=(a-\mu )^{2}+2(a-\mu )(\mu -Y)+(\mu -Y)^{2}$. Conditional expectation kills the cross term because $\mathbb{E}[\mu -Y|x]=0$, leaving $(a-\mu )^{2}+\operatorname{Var}(Y|x)$, uniquely minimized at $a=\mu$.
3. For an even sample, every point between the two middle order statistics minimizes the sum of absolute deviations. The middle values are 4 and 9, so all $a\in [4,9]$ minimize.
4. For $r=5\ge 0$, $\rho =\tau r=4$. For $r=-5<0$, $\rho =r(\tau -1)=(-5)(-0.2)=1$. Underprediction ($y-a>0$) is penalized four times as much per unit as overprediction in this convention.
5. At $r=\delta$, the quadratic value is $\delta ^{2}/2$; the linear-tail value is $\delta (\delta -\delta /2)=\delta ^{2}/2$. The inner derivative is $r$, giving $\delta$; the outer derivative is $\delta \operatorname{sign}(r)$, also $\delta$. The negative boundary is analogous.
6. Expected Brier risk is $p(q-1)^{2}+(1-p)q^{2}=q^{2}-2pq+p=(q-p)^{2}+p-p^{2}$. The second term is constant and the square is uniquely minimized at $q=p$.
7. At the truthful forecast, risk is $-0.2\log(0.2)-0.8\log(0.8)$. At $q=0.5$, risk is $-\log\left(0.5\right)$. Their difference is the positive Bernoulli KL divergence $0.2\log(0.2/0.5)+0.8\log(0.8/0.5)>0$, so $q=0.2$ is better in expected log loss.
8. $d \operatorname{softplus}(z)/dz=\exp\left(z\right)/(1+\exp\left(z\right))=\sigma (z)$, while $d(-yz)/dz=-y$. Subtract to obtain $\sigma (z)-y$.
9. The maximum is $m=1000$. Stable log-sum-exp is $1000+\log\left(1+\exp\left(-1\right)+\exp\left(-2\right)\right)$. Class 2 has logit 999, so loss is $1+\log\left(1+\exp\left(-1\right)+\exp\left(-2\right)\right)$.
10. $\exp\left(z_{k}+c\right)/\sum_{j} \exp(z_{j}+c)=\exp\left(c\right)\exp\left(z_{k}\right)/[\exp\left(c\right)\sum_{j} \exp(z_{j})]=q_{k}$. Gradient is $q-e_{y}$; its sum is $\sum_{k} q_{k}-1=0$.
11. $q^{\star}=ap/[ap+b(1-p)]=(4\cdot 0.2)/(0.8+0.8)=0.5$. Weighting makes the optimum 0.5, not the original 0.2.
12. Use $p=bq/[a(1-q)+bq]$. With $q=0.5,a=4,b=1$, $p=0.5/[4(0.5)+0.5]=0.5/2.5=0.2$.
13. Threshold is $C_{\mathrm{FP}}/(C_{\mathrm{FP}}+C_{\mathrm{FN}})=2/(2+8)=0.2$. Choose positive at or above 0.2 under the stated two-action costs and calibrated probability.
14. Uniform mass is $\varepsilon /K=0.05$ in every class, plus $1-\varepsilon =0.8$ at class 3. Thus $t=(0.05,0.05,0.85,0.05)$.
15. If there are $n_+$ positive and $n_-$ negative rows, duplication changes positive mass from $n_+/(n_++n_-)$ to $4n_+/(4n_++n_-)$. Give each duplicated positive copy weight $\frac{1}{4}$ and each negative weight 1; the weighted sum and total weight recover the original row mean.
16. Exact cases can include zero logit binary loss $\log 2$ with gradient $\frac{1}{2}-y$ and uniform multiclass logits with loss $\log K$. Extreme cases use logits $\pm 1000$ and require finite values/gradients. Test common-logit shift invariance and gradient sum zero. Boundaries: passing derivatives does not prove proper data semantics, held-out calibration, causal effect, or decision utility; any three should be explicit.

## Verification checkpoint and forward links

Implement dependency-free scalar binary-logit loss, multiclass log-sum-exp loss, Huber loss, and pinball loss. Compare values and derivatives with exact fixtures, extreme inputs, branch-margin finite differences, and reduction invariants. Enumerate weighted binary expected risk on a fine probability grid and verify that its minimum moves from $p$ to $ap/[ap+b(1-p)]$.

Chapter 16 uses these stable output losses while deriving signal propagation through depth. Chapter 21 will compare loss choice, class weighting, threshold choice, and finite evaluation without presenting any toy operational action as advice.
