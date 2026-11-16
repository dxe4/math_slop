
# Decision Rules, Loss, and Risk {#section-1-decision-rules-loss-and-risk}

An inferential procedure is a rule that turns observations into an action: a point estimate, a prediction, a rejected hypothesis, an interval, a selected model, or a treatment. “Best” has no mathematical meaning until errors are assigned consequences and the parameter states over which performance is compared are declared.

This chapter develops statistical decision problems, frequentist risk, bias–variance decomposition, dominance, minimax and Bayes criteria, randomised rules, and cost-sensitive testing. It uses the experiment and estimand definitions of the preceding chapters.

<a id="section-5-1-a-decision-problem-exposes-four-objects"></a>
## 1. A decision problem exposes four objects {#section-7-1-a-decision-problem-exposes-four-objects}

A statistical decision problem specifies:

1. an experiment $\{P_\theta :\theta \in \Theta \}$;
2. an action space $A$;
3. a decision rule $\delta $, mapping observed data $X$ into an action;
4. a loss function $L(\theta ,a)$ measuring the consequence of action $a$ when the state is $\theta $.

The **risk function** is the repeated-sampling expected loss

$R(\theta ,\delta )=E_\theta [L(\theta ,\delta (X))]$.

Risk is a function of the unknown state, not usually one number. Two rules may cross: one performs better near one region and worse elsewhere. Any scalar comparison—maximum risk, average risk, local risk, constrained risk—adds a criterion.

<a id="section-20-worked-distinction-estimate-versus-decision-rule"></a>
### Worked distinction: estimate versus decision rule {#section-22-worked-distinction-estimate-versus-decision-rule}

For Bernoulli data, $\bar{X}$ is an estimator of $p$. If the action is whether to deploy a treatment whenever $p>0.6$, the operational decision might be

$\delta (X)=1_{\bar{X}>c}$.

The estimate and threshold together determine the action. Squared error for $\bar{X}$ and false-deployment cost for $\delta $ are different loss functions and can prefer different procedures.

<a id="section-28-2-squared-error-risk-decomposes-into-variance-and-bias"></a>
## 2. Squared-error risk decomposes into variance and bias {#section-30-2-squared-error-risk-decomposes-into-variance-and-bias}

For scalar target $\tau (\theta )$ and estimator $T$, squared loss is

$L(\theta ,T)=[T-\tau (\theta )]^{2}$.

Let $m_\theta =E_\theta [T]$. Write

$T-\tau =(T-m_\theta )+(m_\theta -\tau )$.

After squaring and taking expectation, the cross term vanishes because $E_\theta [T-m_\theta ]=0$. Hence

$R(\theta ,T)=\operatorname{Var}_\theta (T)+\operatorname{Bias}_\theta (T)^{2}$,

where $\operatorname{Bias}_\theta (T)=m_\theta -\tau (\theta )$.

Unbiasedness removes one term but does not minimise the sum automatically.

<a id="section-46-worked-shrinkage-comparison"></a>
### Worked shrinkage comparison {#section-48-worked-shrinkage-comparison}

Let $\bar{X}\sim Normal(\mu ,v)$ and estimate $\mu $ by $T_a=a\bar{X}$. Then

$R(\mu ,T_a)=a^{2}v+(1-a)^{2}\mu ^{2}$.

For every fixed $0<a<1$, shrinkage improves variance but introduces bias away from zero. It cannot dominate $\bar{X}$ on all $\mu \in R$, because the bias term grows without bound. On the restricted parameter set $|\mu |\le M$, its worst risk is

$a^{2}v+(1-a)^{2}M^{2}$.

Differentiation shows the best linear shrinkage coefficient for this worst-risk criterion is

$a*=M^{2}/(M^{2}+v)$,

with maximum risk $vM^{2}/(M^{2}+v)<v$, the constant risk of $\bar{X}$. The improvement depends on the bounded parameter scope.

<a id="section-62-3-loss-determines-the-relevant-centre"></a>
## 3. Loss determines the relevant centre {#section-64-3-loss-determines-the-relevant-centre}

Under a predictive distribution for real $Y$, the action minimising expected squared loss $E[(Y-a)^{2}]$ is $a=E[Y]$ when the second moment exists. Expanding around the mean gives

$E[(Y-a)^{2}]=\operatorname{Var}(Y)+(E[Y]-a)^{2}$.

Under absolute loss $E[|Y-a|]$, any median minimises risk. To see this for a continuous distribution, differentiating where legal gives

$\frac{d}{da}E|Y-a|=P(Y<a)-P(Y>a)=2F(a)-1$.

The sign changes at a median. For distributions with atoms, one-sided derivatives yield the median inequalities.

Under asymmetric absolute loss

$L(y,a)=c_+(y-a)$ when $y\ge a$, and $c_-(a-y)$ when $y<a$,

an appropriate quantile rather than the median is optimal. The target summary is induced by consequences.

<a id="section-80-a-common-category-error"></a>
### A common category error {#section-82-a-common-category-error}

The mean is not universally “more accurate” than the median. They solve different decision problems and estimate different functionals. Under a symmetric light-tailed model and squared loss, the mean may be efficient; under absolute loss or contamination, the median can be preferable. The comparison is incomplete until the estimand, loss, and model neighbourhood are fixed.

<a id="section-84-4-dominance-and-admissibility-are-global-statements"></a>
## 4. Dominance and admissibility are global statements {#section-86-4-dominance-and-admissibility-are-global-statements}

A rule $\delta _1$ **dominates** $\delta _2$ if

$R(\theta ,\delta _1)\le R(\theta ,\delta _2)$ for every $\theta $,

with strict inequality for at least one state. A rule is **admissible** if no other rule dominates it.

Admissibility is a weak filter. Many rules can be admissible, including rules with poor performance in regions a user cares about. Conversely, inadmissibility gives a compelling mathematical criticism only relative to the declared model, action space, and loss.

Risk curves that cross imply neither rule dominates the other. Reporting only one simulation state can conceal that crossing.

<a id="section-96-5-minimax-protects-against-the-worst-state"></a>
## 5. Minimax protects against the worst state {#section-98-5-minimax-protects-against-the-worst-state}

The **maximum risk** of $\delta $ is

$\sup_{\theta \in \Theta }R(\theta ,\delta )$.

A minimax rule minimises this supremum over a declared rule class. It protects against the worst parameter state in $\Theta $, including states that may be scientifically implausible unless the space was chosen carefully.

Minimax is not synonymous with conservative in every sense. It may equalise risk across states, randomise between actions, or sacrifice large gains in common regions to protect a rare boundary. Its meaning comes from the chosen loss and uncertainty set.

<a id="section-106-finite-two-action-example"></a>
### Finite two-action example {#section-108-finite-two-action-example}

Suppose no-data actions $a_0,a_1$ have losses

| state | $a_0$ | $a_1$ |
|---|---:|---:|
| $\theta _0$ | 0 | 3 |
| $\theta _1$ | 2 | 0 |

The maximum losses are 2 and 3, so among deterministic actions $a_0$ is minimax. If randomisation is allowed—choose $a_1$ with probability $q$—risks are $3q$ at $\theta _0$ and $2(1-q)$ at $\theta _1$. Equalising gives $3q=2(1-q)$, so $q=2/5$ and maximum risk $6/5$, better than either deterministic maximum.

<a id="section-117-6-bayes-risk-averages-over-a-declared-distribution-on-s"></a>
## 6. Bayes risk averages over a declared distribution on states {#section-119-6-bayes-risk-averages-over-a-declared-distribution-on-s}

**Optional advanced formulation.** Constructing a posterior regular conditional distribution on a general measurable space requires measure-theoretic conditional probability and suitable existence assumptions. The finite-state posterior calculations and the explicit normal examples below can be read directly from their displayed joint laws; no general kernel-existence theorem is needed for those calculations.

Given a prior probability distribution $\Pi $ on $\Theta $, the **Bayes risk** is

$r(\Pi ,\delta )=\int R(\theta ,\delta )d\Pi (\theta )$.

A Bayes rule minimises this average risk. Under regular conditional distributions, it can be found pointwise: after observing $x$, choose an action minimising posterior expected loss

$\int L(\theta ,a)d\Pi (\theta |x)$.

Squared loss selects the posterior mean; absolute loss selects a posterior median; zero-one loss on a finite state space selects a posterior mode.

This is the conceptual bridge to Bayesian inference. The present volume studies decision structure and repeated-sampling guarantees; the computational Bayesian book develops posterior construction, hierarchical modelling, algorithms, and diagnostics. A Bayes calculation is only as credible as its likelihood, prior, computation, and loss.

<a id="section-133-7-randomised-rules-convexify-risk"></a>
## 7. Randomised rules convexify risk {#section-135-7-randomised-rules-convexify-risk}

A randomised decision rule gives a distribution over actions conditional on data. If $\delta $ chooses rule $\delta _1$ with probability $q$ and $\delta _0$ otherwise, using independent randomisation, then

$R(\theta ,\delta )=qR(\theta ,\delta _1)+(1-q)R(\theta ,\delta _0)$.

Thus randomisation forms convex combinations of risk functions. It can improve a minimax criterion in discrete problems or attain an exact test size when deterministic rejection probabilities jump over the desired level.

Randomisation must be part of the protocol and reproducible. Secretly choosing the more favourable analysis after seeing outcomes is selection, not a randomised rule with a known law.

<a id="section-143-8-testing-is-a-decision-problem-with-error-costs"></a>
## 8. Testing is a decision problem with error costs {#section-145-8-testing-is-a-decision-problem-with-error-costs}

For simple states $\theta _0$ and $\theta _1$, let action $1$ reject $\theta _0$. Give false rejection loss $c_0$ and missed-detection loss $c_1$:

$L(\theta _0,1)=c_0$, $L(\theta _0,0)=0$,

$L(\theta _1,0)=c_1$, $L(\theta _1,1)=0$.

Then

$R(\theta _0,\delta )=c_0P_{\theta _0}(\delta =1)$,

$R(\theta _1,\delta )=c_1P_{\theta _1}(\delta =0)$.

Type I error and Type II error are risk components under different states. A level constraint prioritises control of the first across a null set; power measures one minus the second under alternatives. Neither is the posterior probability that a hypothesis is true.

<a id="section-159-cost-sensitive-classification-threshold"></a>
### Cost-sensitive classification threshold {#section-161-cost-sensitive-classification-threshold}

Suppose a joint model gives posterior probability $q(x)=P(Y=1|X=x)$. Predict 1 with nonnegative false-positive cost $c_{FP}$ and false-negative cost $c_{FN}$, with positive sum. Conditional expected loss is

$c_{FP}[1-q(x)]$ for action 1,

and $c_{FN} q(x)$ for action 0.

Action 1 has strictly smaller conditional expected loss exactly when

$q(x)>c_{FP}/(c_{FP}+c_{FN})$.

The cost-derived threshold equals one-half when the two positive costs are equal. If $q(x)$ equals the threshold, either action is optimal.

<a id="section-173-9-set-valued-actions-and-coverage"></a>
## 9. Set-valued actions and coverage {#section-175-9-set-valued-actions-and-coverage}

If the action is a set $C(X)\subseteq \Theta $, a loss can penalise noncoverage and size. Coverage alone can be made perfect by always reporting $\Theta $; usefulness requires a width, volume, or informativeness criterion as well.

For example,

\[L(\theta ,C)=1_{\theta \notin C}+\lambda \cdot length(C)\]

balances missed coverage with interval length. Classical confidence procedures usually impose a coverage constraint and then compare expected length or another size criterion. Again, a guarantee and an optimisation goal are separate.

<a id="section-183-10-procedure-comparisons-need-a-scope-ledger"></a>
## 10. Procedure comparisons need a scope ledger {#section-185-10-procedure-comparisons-need-a-scope-ledger}

Before calling a rule better, record:

1. observation model and target population;
2. estimand and action space;
3. loss, including units and asymmetry;
4. parameter space or neighbourhood;
5. whether comparison is pointwise, dominant, average, constrained, or minimax;
6. allowance for randomisation;
7. computational and data-collection costs;
8. misspecification scenarios outside the central model.

A rule can be optimal under one row of this ledger and poor under another without contradiction.

<a id="section-198-11-exercises-with-complete-solutions"></a>
## 12. Investigation: construct a risk atlas {#section-728-12-investigation-construct-a-risk-atlas}

Choose two estimators for one scalar target. Derive their exact or theorem-backed risk functions under a central model, plot or tabulate those functions with a complete numerical alternative, identify crossings, and compare pointwise, bounded-parameter minimax, and prior-average criteria. Add one controlled misspecification and state whether the estimand itself changes. The final report must not call one procedure universally better unless it proves dominance on the declared space.

<a id="section-730-14-a-finite-risk-diagram-that-can-be-checked-completely"></a>
## 14. A finite risk diagram that can be checked completely {#section-732-14-a-finite-risk-diagram-that-can-be-checked-completely}

**Worked example 3.1.**
The risk function becomes easier to reason about when every possible observation is visible. Consider two states, $\theta_0$ and $\theta_1$, and a binary diagnostic signal $X$. Its laws are $P_0(X=1)=1/4$ and $P_1(X=1)=3/4$. Action 1 incurs loss 3 at $\theta_0$; action 0 incurs loss 2 at $\theta_1$; correct actions have loss zero. These costs describe consequences, not probabilities. The signal is informative because its two distributions differ, but a positive signal still occurs under either state.

There are four deterministic rules. Their entire repeated-sampling performance is:

| rule | action at $X=0$ | action at $X=1$ | $R_0$ | $R_1$ |
|---|---:|---:|---:|---:|
| always 0 | 0 | 0 | 0 | 2 |
| always 1 | 1 | 1 | 3 | 0 |
| follow the signal | 0 | 1 | $3/4$ | $1/2$ |
| reverse the signal | 1 | 0 | $9/4$ | $3/2$ |

For example, following the signal makes a costly false positive on one quarter of state-0 samples and a costly false negative on one quarter of state-1 samples. Multiplying those probabilities by their respective costs gives the third row. The reverse rule is dominated by following the signal. The remaining three rows do not dominate one another: the constant rules achieve zero risk at one state while following the signal trades that perfection for much smaller risk at the other.

A risk diagram places $R_0$ horizontally and $R_1$ vertically. Better rules lie towards the lower left. A randomized rule is specified by $q_0=P(\text{action }1\mid X=0)$ and $q_1=P(\text{action }1\mid X=1)$, with both numbers in $[0,1]$. Independent randomization gives

\[
R_0=(9q_0+3q_1)/4,\qquad
R_1=2-q_0/2-3q_1/2.
\]

These equations describe every attainable risk pair for this experiment, not merely the four corners. A coin that selects a complete deterministic rule before observation and coins applied after each signal can represent the same risk point. Either construction must be specified before its performance is interpreted.

Among deterministic rules, following the signal has the smallest maximum risk, $3/4$. Randomization improves it. Set $q_0=0$ and $q_1=8/9$. Then both risks equal $2/3$: positive signals lead to action 1 with probability $8/9$, whereas negative signals always lead to action 0. Equalizing two risks suggests a candidate, but does not itself prove minimaxity. There might have been another point below both. The next section supplies a lower bound valid for every rule and therefore closes the proof.

This example also explains why “use the data” is incomplete advice. Reversing the diagnostic uses the data and is dominated. The useful object is a specified map from the observed signal to actions, evaluated under a specified experiment and loss. A classifier's accuracy alone would conceal the unequal error costs that determine this risk diagram.

<a id="section-759-15-posterior-decisions-and-a-minimax-lower-bound"></a>
## 15. Posterior decisions and a minimax lower bound {#section-761-15-posterior-decisions-and-a-minimax-lower-bound}

**Worked example 3.2.**
A prior can be used as a comparison weight without claiming that it is the only scientifically appropriate description of uncertainty. Write $\pi=P(\theta=\theta_1)$. For any finite experiment with state weights $\pi_j$, observation probabilities $p_j(x)$, and finite losses, the average risk of a randomized action kernel $K(a\mid x)$ is the finite sum

\[
r(\pi,K)=\sum_x\sum_a K(a\mid x)\sum_j\pi_jp_j(x)L(\theta_j,a).
\]

When the predictive mass $m(x)=\sum_j\pi_jp_j(x)$ is positive, the inner state sum equals $m(x)$ times the posterior expected loss of action $a$. Consequently minimizing each observation's posterior loss minimizes the whole sum. At a predictive-null observation, the action makes no contribution to this average. This is a finite-sum proof; general spaces require a conditional distribution and a measurable minimizing decision, whose existence should not be assumed from notation alone.

In the diagnostic example, choose action 1 when its unnormalized posterior loss is smaller than action 0's. At $X=1$ the comparison is $3(1-\pi)/4<6\pi/4$, so action 1 is preferred for $\pi>1/3$. At $X=0$ it is $9(1-\pi)/4<2\pi/4$, requiring $\pi>9/11$. Equality permits either action or a randomized tie. For $\pi=1/2$, following the signal is Bayes, with average risk $(3/4+1/2)/2=5/8$. A different prior can favor a constant action. There is no contradiction: the averaging criterion has changed.

For any prior and any rule, an average of state risks cannot exceed their maximum. Therefore

\[
\sup_j R_j(K)\ \ge\ r(\pi,K)\ \ge\ \inf_D r(\pi,D).
\]

The final quantity is a lower bound on the maximum risk of every conceivable rule in this experiment. Choose $\pi=1/3$. At $X=0$, action 0 contributes $(1/3)(1/4)2=1/6$ to the average risk. At $X=1$, either action contributes $1/2$. Thus the optimal average risk is $2/3$. Since the preceding randomized rule attains maximum risk $2/3$, it is minimax over all randomized rules. No general minimax interchange theorem is needed for this finite certificate.

A useful caution appears at the tie. Following the signal is also Bayes for $\pi=1/3$, but its maximum risk is $3/4$. Being Bayes for a prior that supplies the sharp lower bound does not automatically make every tied Bayes rule minimax. The particular tie randomization must attain that bound.

In a finite state problem, a Bayes rule for a prior giving positive mass to every state is admissible: a dominating rule would have no larger risk everywhere and strictly smaller risk at some positively weighted state, contradicting optimal average risk. This argument does not establish that every admissible rule is Bayes, nor does it extend unchanged to infinite spaces where a strict improvement may occur on a prior-null set.

<a id="section-784-16-quantiles-with-atoms-and-honest-moment-conditions"></a>
## 16. Quantiles with atoms and honest moment conditions {#section-786-16-quantiles-with-atoms-and-honest-moment-conditions}

**Worked example 3.3.**
The squared-error identities earlier in this chapter are finite-risk statements when $E_\theta[T^2]<\infty$ and the scalar target is finite. Under that hypothesis the mean and variance exist and the expansion is legitimate. Without it, writing an infinite variance plus a formally computed bias can conceal an undefined expectation. Likewise, the predictive squared-loss optimum uses $E[Y^2]<\infty$. These conditions are part of the comparison, even when they are routine in a normal example.

For absolute and asymmetric absolute loss, assume $E|Y|<\infty$ and positive finite costs $c_+,c_-$. Define

\[
\rho(a)=c_+E[(Y-a)_+]+c_-E[(a-Y)_+],\qquad t_+=\max(t,0).
\]

The first term charges underprediction; the second charges overprediction. Each summand is convex in $a$, and their expectations are finite because $(Y-a)_+\le |Y|+|a|$. At an atom, an ordinary derivative need not exist. The left and right derivatives instead are

\[
\rho'_-(a)=(c_++c_-)F(a-)-c_+,\qquad
\rho'_+(a)=(c_++c_-)F(a)-c_+.
\]

To verify the signs, first fix a realized $y$. Below $y$, increasing $a$ reduces loss at rate $c_+$; above $y$, it increases loss at rate $c_-$. At $a=y$ the left slope is $-c_+$ and the right slope is $c_-$. Difference quotients are bounded by $\max(c_+,c_-)$, so passing to expectations is justified by bounded domination. Counting values below, at, and above $a$ gives the displayed formulas.

A convex function is minimized exactly when its left slope is nonpositive and its right slope nonnegative. With $\gamma=c_+/(c_++c_-)$, the optimal actions satisfy

\[
F(a-)\le\gamma\le F(a).
\]

This includes an interval of minimizers when the distribution has a gap at the relevant cumulative probability. A quantile is therefore a set of acceptable actions unless a convention or additional strictness selects one.

Take $P(Y=0)=3/4$ and $P(Y=4)=1/4$. If underprediction costs three times as much, $\gamma=3/4$. Every action in $[0,4]$ minimizes loss: inside that interval, the contribution from the zero outcome is $(3/4)a$, while that from the four outcome is $(1/4)3(4-a)$, whose sum is 3. The mean, 1, happens to be one minimizer, but is selected here by a flat loss surface rather than a universal rule favoring means.

If underprediction instead costs four times as much, $\gamma=4/5$ and only $a=4$ satisfies the quantile inequalities. A small change in consequences can move an optimal decision discontinuously when the law has atoms. Reporting “the 80th percentile” without an atom convention can obscure precisely the situation where decisions are sensitive.

<a id="section-816-17-what-convexity-can-and-cannot-remove"></a>
## 17. What convexity can and cannot remove {#section-818-17-what-convexity-can-and-cannot-remove}
Randomization helps the finite classification problem because the two available actions are discrete and the criterion penalizes the worst state. For a real-valued estimation action and convex loss, extra randomness can instead be unnecessary. Suppose conditional randomization chooses among finitely many real actions $a_j(X)$ with nonnegative weights $w_j(X)$ summing to one. Write $A$ for the resulting action and $m(X)=\sum_jw_j(X)a_j(X)$. Assume the risk expectations are well-defined; for the squared-loss identity below, take the relevant second moments finite. Repeated application of the defining two-point convexity inequality gives

\[
L(\theta,m(X))\le E[L(\theta,A)\mid X].
\]

Taking $P_\theta$ expectations shows that the deterministic action $m(X)$ has no larger risk at every state, provided the same conditional randomization mechanism is used under all states. The conditional distribution here belongs to the procedure, not to a posterior on $\theta$. The displayed inequality follows first for two actions from convexity, and then for finitely many by grouping the first actions with their total weight; a zero-weight group contributes nothing. This proof makes no assertion about a general measurable minimizing action.

For squared loss the result has a direct proof that avoids an imported convexity theorem:

\[
E[(A-\tau)^2\mid X]
=\operatorname{Var}(A\mid X)+(m(X)-\tau)^2.
\]

An independent mean-zero coin perturbation adds conditional variance without improving the mean. This is why “randomization is good” cannot be transferred from discrete testing to unrestricted squared-error estimation. The admissible action set matters: averaging two labels may not produce an allowed label, while averaging two real estimates remains a real estimate.

The bounded normal shrinkage calculation earlier has a different scope. It optimizes the coefficient within the class $T_a=a\bar X$. It proves an explicit improvement over $\bar X$ on $|\mu|\le M$. It does not prove that this coefficient is minimax over every measurable estimator. A nonlinear estimator using the boundary information may have a different maximum risk. To prove a global minimax claim one needs a lower bound over the entire declared rule class, as the finite Bayes certificate provided above.

Loss units also need care. If measurements are rescaled by $Y'=bY$ with $b\ne0$, the correspondingly rescaled action $a'=ba$ has squared error $b^2(Y-a)^2$. Multiplication by a common positive constant preserves risk ordering for these matched actions. By contrast, comparing dollar error with logarithmic dollar error does not merely change units: it changes the shape of the loss and the estimand's scale. The action “estimate expected dollars” generally transforms differently from “exponentiate expected log dollars.”

Decision criteria can also include the cost of acquiring an observation. If one experiment reduces worst statistical loss from $6/5$ to $2/3$, the reduction is $8/15$ in the same loss units. A fixed acquisition cost larger than that difference would reverse this particular total-cost comparison. Converting a monetary cost to the loss scale is itself a substantive modelling choice; the arithmetic does not supply a value judgment.

<a id="section-840-18-information-has-value-through-available-decisions"></a>
## 18. Information has value through available decisions {#section-842-18-information-has-value-through-available-decisions}
The value of a signal can be proved without claiming that every observed dataset improves every realized outcome. Suppose experiment $E$ reveals $X$ and a less informative experiment reveals only $Z=g(X)$. Every decision rule based on $Z$ can be reproduced from $X$: compute $g(X)$ and use that rule. Thus the collection of attainable risk functions with the fuller observation includes the collection attainable after deterministic coarsening. The best Bayes risk or minimax risk cannot increase when a procedure is allowed to ignore the extra data.

The same reasoning applies to a stochastic coarsening with known, state-independent kernel $Q(z\mid x)$. Given $X=x$, a procedure can simulate $Z$ using this kernel and apply the reduced-data decision. The reproduced joint law is exactly the reduced experiment's law, so its risk is identical at every state. This argument explains what is required for an “information reduction”: a single coarsening rule must work under every state. A transformation chosen with knowledge of the unknown state is not an implementable comparison.

In the binary example, discarding $X$ leaves the no-data problem from Section 5. Its randomized minimax risk is $6/5$; retaining the diagnostic reduces it to $2/3$. Under equal state weights, discarding the signal gives optimal average risk 1 by always choosing action 0, whereas the signal gives $5/8$. Those are different scalar summaries of the same improvement in the available decision set. Neither quantity is the probability that the state was correctly identified.

More information need not strictly improve the criterion. If the loss makes one action best at every state, observation is irrelevant to that decision. If a prior puts probability one on a known state, learning which state is present has no remaining value under that prior. If data collection has cost, a statistically informative experiment may have unfavorable total risk. It is therefore useful to say which decision problem gives an experiment value rather than to rank experiments by the number of recorded variables.

This connects decision theory to sufficiency. A sufficient reduction is intended to preserve all parameter-relevant decision opportunities through a state-independent conditional reconstruction. The later sufficiency chapter states the required conditional-kernel hypotheses. The current argument proves the easier direction: once such a reconstruction is actually supplied, its risk preservation follows by the law of total expectation.

<a id="section-851-19-a-sensitivity-ledger-distinguishes-changed-laws-from"></a>
## 19. A sensitivity ledger distinguishes changed laws from changed targets {#section-853-19-a-sensitivity-ledger-distinguishes-changed-laws-from}
Risk calculations are statements about entire possible samples. They do not become robust merely because their algebra is exact. To audit a comparison, separate three choices: the data-generating law, the target assigned to that law, and the consequences of an action. A perturbation can change one, two, or all three. Keeping the same parameter symbol does not settle which target is intended.

For instance, start with $X\sim N(\mu,1)$ and target its mean. Replace the law by a mixture with a small remote component. If the remote component is centred symmetrically around $\mu$, the mean can remain $\mu$ while variance increases; the target is unchanged but the risk changes. If the component is shifted in one direction, the mixture mean moves. One may target the new population mean or retain the centre of the uncontaminated component as a scientific parameter. These are distinct estimands with different biases for the same estimator.

An operational report should therefore specify the perturbation as an actual probability law, not simply write “outliers added.” It should calculate the law's mean and second moment when squared risk is used; state the target; and derive each procedure's risk again. If a proposed perturbation has infinite second moment, a finite squared-risk table is unavailable. A different loss may be appropriate, but that is a new comparison rather than a repaired number in the old table.

The risk-atlas reference below demonstrates this protocol for a single synthetic observation. Its finite table is hand-derived. It is not a report of a simulation or an empirical performance study. The point is to make each crossing and scope change reproducible before more elaborate numerical work is attempted.


A related trap is the statewise oracle. In the normal shrinkage example with variance $v>0$, minimizing $a^2v+(1-a)^2\mu^2$ for a fixed known $\mu$ gives $a_{\rm oracle}=\mu^2/(\mu^2+v)$. This is a valid lower benchmark within the linear class at that state, but it is not an estimator one can implement when $\mu$ is unknown. Selecting a different coefficient at each parameter value is not one rule with a risk function; it is a family of rules indexed by information the procedure does not possess.

Replacing $\mu$ by a data estimate does create an implementable rule, but its risk must be calculated afresh. The fixed-coefficient identity cannot simply receive a random coefficient as a substitution. To see the issue without integration, let $X$ take $-1$ and 1 equally, with target zero, and choose $a(X)=1$ when $X=1$ and 0 otherwise. Then $a(X)X$ takes 0 and 1 equally. Its squared risk is $1/2$, its mean is $1/2$, and its variance is $1/4$. Dependence between the coefficient and observation is part of this new rule. Replacing the coefficient by $E[a(X)]=1/2$ in the fixed linear risk formula would incorrectly give $1/4$.

Risk comparisons therefore require one fixed analysis protocol, even when that protocol adapts to observed data. Adaptation is allowed; treating an adaptive rule as though its choices were fixed independently of the data is the problem. The same distinction returns in model selection, selective inference and tuning a prediction algorithm. A fully specified adaptive procedure has an observation law and a risk, but both must include its adaptation.

<a id="section-867-20-si-03-risk-one-complete-reference-risk-atlas"></a>
## 20. SI-03-RISK: one complete reference risk atlas {#section-869-20-si-03-risk-one-complete-reference-risk-atlas}
This is one admissible public instantiation of the open investigation in Section 12. It fixes a model and two estimators for comparison; it does not change that investigation's original choices or deliverables. The primary model is one observation $X\sim N(\mu,1)$, $\mu\in\mathbb R$, with target $\mu$, real actions and squared loss. Compare $T_1=X$ with $T_2=X/2$. Their risks are

\[
R_1(\mu)=1,\qquad R_2(\mu)=1/4+\mu^2/4.
\]

The exact finite alternative to a plot is:

| $\mu$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---:|---:|---:|---:|---:|
| $R_1$ | 1 | 1 | 1 | 1 | 1 |
| $R_2$ | $5/4$ | $1/2$ | $1/4$ | $1/2$ | $5/4$ |

The curves cross at $\mu=\pm\sqrt3$. Neither procedure dominates on $\mathbb R$. On $[-1,1]$, $T_2$ strictly dominates $T_1$ and has maximum risk $1/2$ against 1. It is the best linear coefficient $a=1/2$ from Section 2 for this bounded space; the table does not prove minimaxity among all estimators. On $[-2,2]$, the maximum risks are 1 and $5/4$, so $T_1$ wins the maximum-risk comparison between these two procedures.

For a uniform prior on $[-2,2]$, $E[\mu^2]=4/3$. The prior-average risks are 1 and $1/4+(4/3)/4=7/12$: $T_2$ wins even though it loses the two-rule worst-case comparison on that same interval. For a uniform prior on $[-4,4]$, $E[\mu^2]=16/3$, giving $R_2$ average $19/12$; $T_1$ then wins. These are actual declared priors, not claims that bounded parameter values occur with such empirical frequencies.

For the controlled primary misspecification, use

\[
P_\mu=\tfrac9{10}N(\mu,1)+\tfrac1{20}\delta_{\mu-3}
+\tfrac1{20}\delta_{\mu+3}.
\]

Here $\delta_c$ is a point mass at $c$. The target mean remains $\mu$ and variance is $(9/10)1+(1/10)9=9/5$. Repeating the bias–variance calculation gives $R_1=9/5$ and $R_2=9/20+\mu^2/4$. Their crossings now satisfy $\mu^2=27/5$. At $\mu=2$, the risks are $9/5$ and $29/20$, reversing the central-model ranking at that state. This is a changed observation law with unchanged mean target, not an unexplained numerical improvement.

For a changed-case reconstruction, replace the symmetric contamination by

\[
Q_\mu=\tfrac9{10}N(\mu,1)+\tfrac1{10}\delta_{\mu+3},
\]

while retaining the target $\mu$ as the centre of the normal component. Then $E_QX=\mu+3/10$ and $\operatorname{Var}_Q(X)=9/10+(1/10)(9/10)9=171/100$. Consequently

\[
R_Q(\mu,T_1)=9/5,\qquad
R_Q(\mu,T_2)=171/400+(3/20-\mu/2)^2.
\]

At $\mu=-1,0,1$, the second risk is respectively $17/20,9/20,11/20$. The asymmetry is caused by the fixed positive contamination shift. If the target were instead the mixture mean $\nu=\mu+3/10$, the risks would be $171/100$ and $171/400+\nu^2/4$; that is a changed estimand and must be labelled as such.

A complete comparison should earn five separate checks: correct observation law and target; finite-moment risk derivation; exact table and crossings; distinct pointwise, bounded-worst-case and prior-average conclusions; and a perturbation calculation stating whether the target moves. Failure in one check calls for repairing that part of the argument. This public model supplies no learner score, observed computation or qualification evidence.

<a id="section-911-21-optional-practice-extensions-for-decision-scope"></a>

## Summary

<a id="section-979-13-summary-and-forward-route"></a>
Decision theory turns vague comparisons into experiment, action, loss, and risk. Bias and variance are components of squared-error risk; other losses select other summaries. Dominance is pointwise, minimax protects a declared worst case, Bayes risk averages over a declared state distribution, and randomisation convexifies attainable risks. The next chapter develops likelihood as a way to compare candidate states inside a dominated experiment.

## Exercises {#section-200-11-exercises-with-complete-solutions}

<a id="section-200-1-bias-variance-identity"></a>
### 1. Bias–variance identity {#section-202-1-bias-variance-identity}

**Exercise 3.1**

Prove the squared-error decomposition for an estimator $T$ of scalar target $\tau $.

<details>
<summary>Hint 1</summary>

Add and subtract the estimator's expectation inside its error.

</details>
<details>
<summary>Hint 2</summary>

After squaring, the centred term has expectation zero, eliminating the cross term.

</details>
<details>
<summary>Solution</summary>

**Solution.** Write $T-\tau =(T-E[T])+(E[T]-\tau )$, square, and take expectation. The cross term is

$2(E[T]-\tau )E[T-E[T]]=0$.

The remaining terms are $\operatorname{Var}(T)$ and $\operatorname{Bias}(T)^{2}$.

</details>

<a id="section-229-2-a-biased-estimator"></a>
### 2. A biased estimator {#section-231-2-a-biased-estimator}

**Exercise 3.2**

If independent observations have mean $\mu $ and variance $\sigma ^{2}$, find the MSE of $T=\sum _iX_i/(n+1)$.

<details>
<summary>Hint 1</summary>

Compute the estimator's mean and variance separately.

</details>
<details>
<summary>Hint 2</summary>

The sum's variance adds under independence, and scaling divides by the square of the denominator.

</details>
<details>
<summary>Solution</summary>

**Solution.** $E[T]=n\mu /(n+1)$, so bias is $-\mu /(n+1)$. Independence gives variance $n\sigma ^{2}/(n+1)^{2}$. Thus

$MSE(T)=[n\sigma ^{2}+\mu ^{2}]/(n+1)^{2}$.

</details>

<a id="section-256-3-compare-with-the-sample-mean"></a>
### 3. Compare with the sample mean {#section-258-3-compare-with-the-sample-mean}

**Exercise 3.3**

For Exercise 2, when does $T$ have lower MSE than $\bar{X}$?

<details>
<summary>Hint 1</summary>

Compare the two exact mean-squared errors from the previous exercise.

</details>
<details>
<summary>Hint 2</summary>

Multiply only by positive denominators before simplifying the parameter region.

</details>
<details>
<summary>Solution</summary>

**Solution.** The sample mean MSE is $\sigma ^{2}/n$. We require

$[n\sigma ^{2}+\mu ^{2}]/(n+1)^{2}<\sigma ^{2}/n$.

Multiplying by positive denominators and simplifying gives $n\mu ^{2}<(2n+1)\sigma ^{2}$, or $\mu ^{2}<(2+1/n)\sigma ^{2}$. The risk advantage is local in $\mu $.

</details>

<a id="section-285-4-squared-loss-optimum"></a>
### 4. Squared-loss optimum {#section-287-4-squared-loss-optimum}

**Exercise 3.4**

Prove $a=E[Y]$ minimises $E[(Y-a)^{2}]$.

<details>
<summary>Hint 1</summary>

Expand loss around the predictive mean.

</details>
<details>
<summary>Hint 2</summary>

The excess above its variance is a nonnegative squared displacement of the action.

</details>
<details>
<summary>Solution</summary>

**Solution.** The identity

\[E[(Y-a)^{2}]=\operatorname{Var}(Y)+(E[Y]-a)^{2}\]

has a constant first term and a nonnegative second term uniquely minimised at $a=E[Y]$.

</details>

<a id="section-314-5-absolute-loss-optimum-for-three-points"></a>
### 5. Absolute-loss optimum for three points {#section-316-5-absolute-loss-optimum-for-three-points}

**Exercise 3.5**

If $Y$ takes ordered values $1,4,10$ with probabilities $0.2,0.5,0.3$, find an absolute-loss optimal action.

<details>
<summary>Hint 1</summary>

Use the median inequalities rather than the predictive mean.

</details>
<details>
<summary>Hint 2</summary>

Check cumulative mass on both sides of the middle support point.

</details>
<details>
<summary>Solution</summary>

**Solution.** Value 4 is a median because $P(Y\le 4)=0.7\ge 1/2$ and $P(Y\ge 4)=0.8\ge 1/2$. Therefore $a=4$ minimises expected absolute loss.

</details>

<a id="section-339-6-asymmetric-quantile"></a>
### 6. Asymmetric quantile {#section-341-6-asymmetric-quantile}

**Exercise 3.6**

False underprediction costs three times as much per unit as overprediction. Which quantile solves the piecewise-linear prediction problem?

<details>
<summary>Hint 1</summary>

Identify which cost applies when the response exceeds the prediction.

</details>
<details>
<summary>Hint 2</summary>

The optimal quantile level is underprediction cost divided by total directional cost.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $c_+=3$ for $Y>a$ and $c_-=1$ for $Y<a$. The optimum satisfies $F(a)\ge c_+/(c_++c_-)=3/4$ with the corresponding left-limit condition, so a 75th percentile is optimal.

</details>

<a id="section-364-7-crossing-risks"></a>
### 7. Crossing risks {#section-366-7-crossing-risks}

**Exercise 3.7**

Rules have risks $R_1(\theta )=\theta ^{2}$ and $R_2(\theta )=1$ on $\Theta =R$. Does either dominate?

<details>
<summary>Hint 1</summary>

Inspect the risk ordering near zero and for large parameter magnitude.

</details>
<details>
<summary>Hint 2</summary>

A crossing prevents either rule from having the required global ordering.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $|\theta |<1$, $R_1<R_2$; for $|\theta |>1$, $R_2<R_1$; at $|\theta |=1$ they tie. The curves cross, so neither dominates.

</details>

<a id="section-389-8-strict-dominance"></a>
### 8. Strict dominance {#section-391-8-strict-dominance}

**Exercise 3.8**

On $\Theta =[0,1]$, compare $R_1(\theta )=\theta $ and $R_2(\theta )=\theta +0.1$.

<details>
<summary>Hint 1</summary>

Compare the risks at an arbitrary state in the entire declared interval.

</details>
<details>
<summary>Hint 2</summary>

The constant positive gap makes the ordering strict everywhere.

</details>
<details>
<summary>Solution</summary>

**Solution.** $R_1(\theta )<R_2(\theta )$ at every state, so rule 1 strictly dominates rule 2.

</details>

<a id="section-414-9-restricted-shrinkage"></a>
### 9. Restricted shrinkage {#section-416-9-restricted-shrinkage}

**Exercise 3.9**

For $v=1$, $M=2$, find the worst-risk optimal coefficient $a*=M^{2}/(M^{2}+v)$ and maximum risk.

<details>
<summary>Hint 1</summary>

Insert the variance and parameter bound into the minimising coefficient.

</details>
<details>
<summary>Hint 2</summary>

The optimal worst risk uses the same two quantities and belongs to the restricted space.

</details>
<details>
<summary>Solution</summary>

**Solution.** $a*=4/5$. The maximum risk is $vM^{2}/(M^{2}+v)=4/5$, below the sample mean's constant risk 1 on the restricted parameter space.

</details>

<a id="section-439-10-why-shrinkage-fails-globally-in-one-dimension"></a>
### 10. Why shrinkage fails globally in one dimension {#section-441-10-why-shrinkage-fails-globally-in-one-dimension}

**Exercise 3.10**

For fixed $a<1$, show $T_a=a\bar{X}$ cannot dominate $\bar{X}$ for all real $\mu $ under squared loss.

<details>
<summary>Hint 1</summary>

Subtract the usual mean's constant risk from the shrinkage risk.

</details>
<details>
<summary>Hint 2</summary>

A fixed nonzero bias coefficient makes the squared-mean term grow without bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** Its risk difference is

$(a^{2}-1)v+(1-a)^{2}\mu ^{2}$.

The second term grows without bound as $|\mu |\to \infty $, while the first is constant. The difference eventually becomes positive.

</details>

<a id="section-468-11-randomised-minimax-action"></a>
### 11. Randomised minimax action {#section-470-11-randomised-minimax-action}

**Exercise 3.11**

Verify the $q=2/5$ mixture in the two-state table has equal risks.

<details>
<summary>Hint 1</summary>

Write risk at each of the two simple states for the mixed action.

</details>
<details>
<summary>Hint 2</summary>

Use the stated mixture probability in both linear risk expressions.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $\theta _0$, only choosing $a_1$ loses, so risk is $3q=6/5$. At $\theta _1$, only choosing $a_0$ loses, so risk is $2(1-q)=2(3/5)=6/5$.

</details>

<a id="section-493-12-bayes-action-under-squared-loss"></a>
### 12. Bayes action under squared loss {#section-495-12-bayes-action-under-squared-loss}

**Exercise 3.12**

Given posterior mean $m$ and variance $s^{2}$, find posterior expected squared loss of action $a$.

<details>
<summary>Hint 1</summary>

Condition on the realised data before expanding the square.

</details>
<details>
<summary>Hint 2</summary>

The posterior variance is action-independent and the squared posterior-mean deviation is nonnegative.

</details>
<details>
<summary>Solution</summary>

**Solution.** Apply the same decomposition conditionally:

$E[(\theta -a)^{2}|x]=s^{2}+(m-a)^{2}$.

It is minimised at $a=m$.

</details>

<a id="section-522-13-bayes-classification"></a>
### 13. Bayes classification {#section-524-13-bayes-classification}

**Exercise 3.13**

With posterior $P(\theta =1|x)=0.7$ and equal zero-one losses, which state minimises posterior loss?

<details>
<summary>Hint 1</summary>

Calculate the posterior error probability for each action.

</details>
<details>
<summary>Hint 2</summary>

Under equal zero-one loss the larger posterior state probability has smaller loss.

</details>
<details>
<summary>Solution</summary>

**Solution.** Action 1 has loss probability $0.3$; action 0 has loss probability $0.7$. Choose state 1, the posterior mode.

</details>

<a id="section-547-14-cost-sensitive-threshold"></a>
### 14. Cost-sensitive threshold {#section-549-14-cost-sensitive-threshold}

**Exercise 3.14**

False positives cost 1 and false negatives cost 4. At what posterior probability should action 1 become preferable?

<details>
<summary>Hint 1</summary>

Compare the two posterior expected costs directly.

</details>
<details>
<summary>Hint 2</summary>

Solve the strict inequality and retain a tie rule at equality.

</details>
<details>
<summary>Solution</summary>

**Solution.** The threshold is $1/(1+4)=0.2$. Choose action 1 when $P(Y=1\mid x)>0.2$.

</details>

<a id="section-572-15-testing-risks"></a>
### 15. Testing risks {#section-574-15-testing-risks}

**Exercise 3.15**

A test has Type I error $0.04$ and power $0.8$ at one alternative. With false-rejection cost 5 and missed-detection cost 2, give risks at the two simple states.

<details>
<summary>Hint 1</summary>

Multiply error probability by the cost applying at that state.

</details>
<details>
<summary>Hint 2</summary>

At the alternative, use one minus power for the missed-detection probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** Null-state risk is $5(0.04)=0.20$. Alternative-state Type II error is $1-0.8=0.2$, so risk is $2(0.2)=0.40$.

</details>

<a id="section-597-16-randomisation-and-exact-size"></a>
### 16. Randomisation and exact size {#section-599-16-randomisation-and-exact-size}

**Exercise 3.16**

One deterministic rejection region has null probability $0.03$; adding one boundary outcome would raise it to $0.07$. How can a 0.05 test be formed?

<details>
<summary>Hint 1</summary>

The added boundary event contributes only its incremental null mass.

</details>
<details>
<summary>Hint 2</summary>

Choose a rejection fraction to fill the gap between the smaller size and the target.

</details>
<details>
<summary>Solution</summary>

**Solution.** Reject on the 0.03 region and, when the boundary outcome occurs, reject with probability $q$ satisfying

$0.03+q(0.07-0.03)=0.05$.

Thus $q=1/2$, assuming the boundary increment is exactly 0.04.

</details>

<a id="section-626-17-perfect-coverage"></a>
### 17. Perfect coverage {#section-628-17-perfect-coverage}

**Exercise 3.17**

Why is $C(X)=\Theta $ not automatically a useful confidence procedure despite 100% coverage?

<details>
<summary>Hint 1</summary>

Check both localisation and coverage for the full parameter set.

</details>
<details>
<summary>Hint 2</summary>

Perfect inclusion supplies no useful exclusion without a set-size criterion.

</details>
<details>
<summary>Solution</summary>

**Solution.** It never excludes any parameter value and therefore conveys no localisation. Coverage is one constraint; interval length, volume, or another informativeness criterion is needed to compare procedures.

</details>

<a id="section-651-18-units-of-loss"></a>
### 18. Units of loss {#section-653-18-units-of-loss}

**Exercise 3.18**

Why can squared error in dollars and squared error in log dollars rank estimators differently?

<details>
<summary>Hint 1</summary>

The two coordinate choices induce different penalties for the same pair of actions.

</details>
<details>
<summary>Hint 2</summary>

A nonlinear scale change is not merely multiplication by a common positive loss constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** They are different losses and emphasise different deviations. Squared dollar error heavily weights absolute mistakes at high values; squared log error weights multiplicative discrepancies more evenly. Transforming the scale changes the action consequences.

</details>

<a id="section-676-19-computational-cost"></a>
### 19. Computational cost {#section-678-19-computational-cost}

**Exercise 3.19**

Two estimators have identical statistical risk but one requires a week of computation and one second. Is risk alone sufficient for an operational choice?

<details>
<summary>Hint 1</summary>

Inspect which consequences were included in the loss function.

</details>
<details>
<summary>Hint 2</summary>

A statistical risk equality cannot compare an omitted computational cost.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The declared loss omitted computational time or resource cost. Adding those consequences can distinguish the rules. Equality under an incomplete loss does not imply operational equivalence.

</details>

<a id="section-701-20-misspecification-scope"></a>
### 20. Misspecification scope {#section-703-20-misspecification-scope}

**Exercise 3.20**

An estimator is minimax over a normal model. What remains unknown about contamination performance?

<details>
<summary>Hint 1</summary>

Identify the parameter and distribution space over which minimaxity was proved.

</details>
<details>
<summary>Hint 2</summary>

A contamination law outside that space needs its own risk calculation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Minimaxity controls only states inside the declared normal family and under the chosen loss. A contaminated distribution lies outside that space, so its risk can be poor. Robustness requires a larger neighbourhood or separate sensitivity analysis.

</details>

<a id="section-726-12-investigation-construct-a-risk-atlas"></a>

<a id="section-913-21-optional-practice-extensions-for-decision-scope"></a>
### 21. SI-03-E21. A tied Bayes rule need not be minimax {#section-916-si-03-e21-a-tied-bayes-rule-need-not-be-minimax}

**Exercise 3.21**

In the binary diagnostic model of Section 14, set prior weight $\pi=1/3$. Show that following the signal and the rule $q_0=0,q_1=8/9$ have the same Bayes risk but different maximum risks. Explain why this does not contradict Bayes optimality.


<details>
<summary>Hint 1</summary>

Use the two pointwise risk pairs already calculated for the diagnostic experiment.

</details>
<details>
<summary>Hint 2</summary>

The specified prior makes their averages agree even though their maxima differ.

</details>

<a id="section-934-si-03-e22-a-flat-quantile-decision"></a>
### 22. SI-03-E22. A flat quantile decision {#section-936-si-03-e22-a-flat-quantile-decision}

**Exercise 3.22**

Let $P(Y=0)=3/4$, $P(Y=4)=1/4$, with finite underprediction cost $c_+=3$ and overprediction cost $c_-=1$. Find every optimal real action. Recompute the answer when $c_+=4$, keeping $c_-=1$.


<details>
<summary>Hint 1</summary>

Use the atom-sensitive quantile condition with both CDF limits.

</details>
<details>
<summary>Hint 2</summary>

A flat interval of optimal actions occurs when the quantile level equals the lower atom's cumulative mass.

</details>

<a id="section-954-22-solutions-to-the-decision-scope-extensions"></a>

## Solutions

<a id="section-956-22-solutions-to-the-decision-scope-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-958-si-03-e21-a-tied-bayes-rule-need-not-be-minimax-solutio"></a>
### SI-03-E21. A tied Bayes rule need not be minimax — solution {#section-960-si-03-e21-a-tied-bayes-rule-need-not-be-minimax-solutio}

Following the signal has risks $(3/4,1/2)$, so its prior average is $(2/3)(3/4)+(1/3)(1/2)=2/3$, with maximum $3/4$. The randomized rule has risks $(2/3,2/3)$, hence the same prior average $2/3$ and maximum $2/3$. At $\pi=1/3$, both actions at $X=1$ tie in posterior loss, while action 0 is uniquely better at $X=0$. Any randomization at the tied observation is Bayes, but only appropriate risk balancing attains the minimax bound. Bayes optimality controls the average, not each state's risk separately.

</details>

<details>
<summary>Solution</summary>

<a id="section-967-si-03-e22-a-flat-quantile-decision-solution"></a>
### SI-03-E22. A flat quantile decision — solution {#section-969-si-03-e22-a-flat-quantile-decision-solution}

The quantile level is $3/4$. At $a=0$, $F(a-)=0$ and $F(a)=3/4$; for $0<a<4$, both limits equal $3/4$; at $a=4$, the limits are $3/4$ and 1. Thus every $a\in[0,4]$ satisfies $F(a-)\le3/4\le F(a)$. Outside this interval the appropriate slope has a strict sign towards it. Equivalently the expected loss inside is $(3/4)a+(1/4)3(4-a)=3$. Changing the underprediction cost to 4 makes the level $4/5$; only $a=4$ brackets this level, so it is the unique optimum.

</details>

<a id="section-973-sources"></a>

## Sources {#section-975-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-977-13-summary-and-forward-route"></a>
