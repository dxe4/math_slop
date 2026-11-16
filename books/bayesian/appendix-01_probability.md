# Appendix 1 · Probability and conditioning

## How to use this bridge

Probability notation becomes useful when it identifies what is uncertain, what has been observed, and which population a statement concerns. This appendix develops those distinctions with small examples you can reconstruct by hand. Only algebra is required; an integral can initially be read as a continuous weighted sum. The examples are invented teaching situations, not empirical claims about equipment or services.

**Required bridge.** Read through the shared-probability example if conditioning, density, or predictive variation is unfamiliar. It supports [Chapter 0, Events, support, and conditioning](./00_preparation.md#events-support-and-conditioning), [Chapter 1, Deriving the update from joint probability](./01_bayes.md#deriving-the-update-from-joint-probability), and [Chapter 3, Conditional independence does not imply marginal independence](./03_prediction.md#conditional-independence-does-not-imply-marginal-independence). The last section is optional depth for hierarchical predictions and decisions. The short prompts are retrieval practice, not additional graded exercises.

## Random quantities and their realised values {#random-quantities-and-their-realised-values}

A random variable is a rule assigning a numerical value to each possible outcome of an experiment. Before an inspection, the number of faults is uncertain; after inspection, its observed value is fixed. Probability describes the former, while a likelihood uses the latter as an input. A parameter can be unknown without physically changing between observations: Bayesian randomness represents uncertainty about it within a specified model.

| Appendix notation | Meaning and connection to the chapters |
|---|---|
| $Y$, $y$ | Random observation and observed value; chapters often suppress the capital when writing a distribution |
| $\Theta$, $\theta$ | Uncertain parameter and a possible parameter value; chapter notation commonly uses $\theta$ for both, distinguished by context |
| $\widetilde Y$, $\tilde y$ | Future random outcome and possible future value, with the prediction target stated |
| $P(A)$ | Probability of event $A$, a dimensionless number between zero and one |
| $p(y\mid\theta)$ | Conditional mass or density, evaluated at specified values; as a function of $\theta$ with $y$ fixed, the likelihood |
| $E[Y\mid\Theta]$ | A random function of the still-uncertain parameter; at $\Theta=\theta$ it becomes $E[Y\mid\Theta=\theta]$ |

For example, if $Y\mid\Theta=\theta\sim\operatorname{Binomial}(5,\theta)$, the expression $E[Y\mid\Theta]=5\Theta$ is itself random before learning the parameter. The observed count $y=3$ has no posterior variance: it is already recorded. We can still be uncertain about a latent true count behind an imperfect recording, but that requires another random variable and an observation model. Distinguishing those variables prevents uncertainty from being attached to the wrong target.

Conditioning on information does not make everything in that information's causal neighbourhood fixed. Knowing the inspection result leaves the machine's hidden state uncertain. Conversely, fixed design inputs can be conditioned on without giving them a probability distribution. Regression in this course often treats workloads this way.

## Mass, density, support, and normalisation {#mass-density-support-and-normalisation}

A discrete probability mass function assigns probabilities to possible values. Its nonnegative entries sum to one over its support, the set of allowed values. For a Bernoulli observation, the support is zero and one; a negative count is impossible under that model. A model may be inappropriate if actual recording errors create values outside its intended support.

A continuous density instead gives probability per unit of the variable:

$$P(a<Y<b)=\int_a^b f_Y(t)\,dt,\qquad
\int_{-\infty}^{\infty}f_Y(t)\,dt=1.$$

If a waiting time is measured in minutes, its density has units of inverse minutes. The integration width contributes minutes, leaving a dimensionless probability. A uniform wait between zero and half a minute has density two per minute. That height exceeds one legitimately; the area over the full interval is one. At any single point the continuous probability is zero, even where the density is large. [Appendix 2](./appendix-02_calculus.md#probability-as-an-integral) develops this area calculation and its behaviour under changes of units.

The likelihood need not sum or integrate to one over parameter values. Its normalisation property concerns possible data values at a fixed parameter. A posterior must normalise over the parameter instead. Confusing these directions can turn a useful likelihood curve into a falsely labelled probability distribution.

## Worked example: a joint table and two conditionals {#worked-example-a-joint-table-and-two-conditionals}

Suppose a hypothetical component is worn with probability one quarter and sound otherwise. An alarm sounds with probability 0.40 for a worn component and 0.08 for a sound component. Let $W$ indicate worn and $A$ indicate alarm. Multiplying each state probability by its conditional alarm probability produces this joint distribution:

| State | Alarm | No alarm | State total |
|---|---:|---:|---:|
| Worn | 0.10 | 0.15 | 0.25 |
| Sound | 0.06 | 0.69 | 0.75 |
| Outcome total | 0.16 | 0.84 | 1.00 |

Marginalising means adding over a variable we are no longer distinguishing. The alarm probability is the column sum 0.16. Conditioning restricts attention to a column or row, then renormalises its entries. Among alarm cases, the worn fraction is $0.10/0.16=0.625$. Among worn components, the alarm fraction remains $0.10/0.25=0.40$. These calculations answer different questions despite sharing the same numerator.

Bayes' rule follows by writing that joint numerator in two ways:

$$P(W,A)=P(A\mid W)P(W)=P(W\mid A)P(A),$$

$$P(W\mid A)=\frac{P(A\mid W)P(W)}{P(A)},\qquad P(A)>0.$$

The prior odds of wear are one to three. The alarm's likelihood ratio is five, so posterior odds are five to three, equivalent to probability five eighths. The high posterior does not mean alarms cause wear. Nor can we transfer it unchanged to a population with a different worn fraction.

```python
import numpy as np

joint = np.array([[0.10, 0.15], [0.06, 0.69]])
state_mass = joint.sum(axis=1)       # one entry per state
alarm_mass = joint.sum(axis=0)       # one entry per alarm outcome
worn_given_alarm = joint[0, 0] / alarm_mass[0]
assert np.isclose(joint.sum(), 1.0)
assert np.isclose(worn_given_alarm, 0.625)
```

The axis labels are part of the calculation. Swapping them can return valid-looking probabilities about the wrong variable. Before using an array operation, describe in words which labels disappear when you sum.

**Check your understanding.** Find the worn probability after no alarm. Which table entries form its denominator? Explain why multiplying two alarm probabilities would require an additional assumption about two inspections.

## Conditional densities and independence

For continuous variables with a joint density, the analogous construction is

$$f_X(x)=\int f_{X,Y}(x,y)\,dy,\qquad
f_{Y\mid X}(y\mid x)=\frac{f_{X,Y}(x,y)}{f_X(x)},\quad f_X(x)>0.$$

This defines a conditional density at a value where the marginal density is positive; it does not divide by the zero probability of the point event. One intuition is conditioning on progressively smaller neighbourhoods around that value. Formal conditioning for more general distributions is beyond this bridge.

Independence means the joint distribution factorises into the marginal distributions. Conditional independence means it factorises after particular information is given. The conditioning clause matters: observations sharing an uncertain probability can be independent given that probability and dependent after averaging over it. Neither separate rows in a dataset nor the absence of an obvious causal connection establishes independence.

For repeated measurements, write the shared quantities explicitly before multiplying likelihood contributions. A common calibration offset, day effect, or centre effect can create dependence. Conditioning on that effect may justify a product; omitting the effect from the model does not make the dependence disappear.

## Deriving total expectation and total variance {#deriving-total-expectation-and-total-variance}

Assume the moments below exist. For discrete $G$, expand the joint distribution and regroup a sum:

$$E[Y]=\sum_g\sum_y y\,p(y\mid g)p(g)
=\sum_g E[Y\mid G=g]p(g)=E[E[Y\mid G]].$$

For continuous variables use integrals, with integrability conditions permitting the regrouping. This is the law of total expectation. First average within each group; then weight those group averages by the group's probability. An unweighted average answers the same question only when the group weights are equal.

For variance, write the deviation from the overall mean as

$$Y-E[Y]=\{Y-E[Y\mid G]\}+\{E[Y\mid G]-E[Y]\}.$$

Squaring and averaging gives two squared terms and a cross term. Conditional on $G$, the first bracket has expectation zero and the second is fixed. Consequently the cross term vanishes, giving

$$\operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid G)]
+\operatorname{Var}(E[Y\mid G]).$$

The first term measures variation within the conditional distributions; the second measures variation between their centres. Both have squared outcome units. The formula does not assume that $Y$ and $G$ are independent.

For an original numerical example, suppose a repair is routine with probability 0.75 and difficult otherwise. Conditional mean duration is two or six hours; conditional variance is one or four squared hours. The overall mean is three hours. Average conditional variance is $0.75(1)+0.25(4)=1.75$. Variation between conditional means is $0.75(2-3)^2+0.25(6-3)^2=3$. Total variance is therefore 4.75 squared hours, much larger than 1.75. These moments describe a mixture of duration distributions; they do not assert that the mixture is Normal.

## Worked example: dependence from a shared probability

Let a future batch share one uncertain success probability $\Theta\sim\operatorname{Beta}(3,2)$. Its mean is 0.6 and variance is 0.04. Given that probability, five Bernoulli outcomes are independent. Marginally each individual outcome is Bernoulli with probability 0.6, hence variance 0.24. However, two outcomes have joint success probability

$$P(Y_1=1,Y_2=1)=E[\Theta^2]
=\operatorname{Var}(\Theta)+E[\Theta]^2=0.40.$$

Independent marginal outcomes would instead give 0.36. Their covariance is therefore 0.04 and their correlation is $0.04/0.24=1/6$. Observing one success changes the second success probability to $0.40/0.60=2/3$. The first outcome supplies evidence about their shared parameter; it need not physically influence the second.

Calculate the variance of their total $K$ in two ways. Summing variances and pairwise covariances gives

$$\operatorname{Var}(K)=5(0.24)+5(4)(0.04)=2.$$

Alternatively, conditional variance is $5\Theta(1-\Theta)$ and conditional mean is $5\Theta$. Since $E[\Theta(1-\Theta)]=0.60-0.40=0.20$, total variance gives $5(0.20)+25(0.04)=2$ again. The mean count is three. Redrawing an independent probability for each observation would define a different model, with count variance only 1.2.

SciPy's beta-binomial distribution integrates the shared probability analytically. The following enumeration verifies both moments without simulation error:

```python
import numpy as np
from scipy import stats

k = np.arange(6)
mass = stats.betabinom.pmf(k, n=5, a=3, b=2)
mean = k @ mass
variance = ((k - mean) ** 2) @ mass
assert np.isclose(mean, 3.0)
assert np.isclose(variance, 2.0)
```

**Check your understanding.** To predict two batches from the same installation, should a simulation draw one probability or two? State what additional assumption would justify two independent probabilities.

## Optional depth: covariance, mixtures, and decisions

**Extended route.** The same zero-cross-term argument yields total covariance:

$$\operatorname{Cov}(Y,Z)
=E[\operatorname{Cov}(Y,Z\mid G)]
+\operatorname{Cov}(E[Y\mid G],E[Z\mid G]).$$

Thus conditional independence removes the first term but need not remove the second. [Chapter 9, Existing and new groups need different predictions](./09_hierarchical.md#existing-and-new-groups-need-different-predictions) uses this distinction when several future visits share an unseen centre effect. Preserve that common effect in each simulated batch.

Linearity of expectation requires no independence: the expected sum of costs is the sum of expected costs. Variance of a sum does require covariance accounting. Nonlinear functions require still more care. For squared loss around a proposed value $a$,

$$E[(Y-a)^2]=\operatorname{Var}(Y)+(E[Y]-a)^2.$$

Plugging the mean into the loss drops the variance term. For the repair example, squared error around three hours averages 4.75 squared hours even though the error at the mean is zero. This explains why substituting a posterior mean before applying nonlinear utility can misrepresent consequences.

Finally, averaging must match the target population. Giving each centre equal weight differs from giving each visitor equal weight when centre sizes differ. [Chapter 12, Population weights can change the answer](./12_decisions.md#population-weights-can-change-the-answer) applies this principle to actions. A conditional bar, a weight, and an observation unit are modelling choices with substantive meaning; calculation cannot supply them automatically.

**Check your understanding.** Explain, without a formula, why uncertainty about a shared centre mean does not vanish when predicting an average over many future visitors at that centre. Then identify the surviving term in total variance.
