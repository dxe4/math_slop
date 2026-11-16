# Forecast which failure happens first

A machine stops when either its bearing fails or its controller fails. A bearing failure rate describes machines that are still working. The fraction whose **first** failure is a bearing failure also depends on how quickly controller failures remove machines from that working state.

We will derive those different quantities in a three-state model, learn its two rates from four synthetic records, and average forecasts over an exact posterior. The worked example gives bearing-first probability $0.268928$ by two weeks. Applying the bearing hazard alone gives a different quantity, $0.36$. The difference comes from the prediction target, even though both calculations use the same posterior distribution for the bearing hazard.

Preparation: survival and hazard, Gamma–exponential updating, conditional probability and one-variable integration. The existing [survival module A12](../../books/bayesian/adv-12_survival.md) develops administrative censoring and explicitly leaves competing risks outside its scope. This additive investigation develops that next case with constant hazards; it does not revise A12's single-failure model. Allow about 120–150 minutes including [six practice tasks](./competing_events_v1-practice.md), an unpiloted study estimate. Separate [hints](./competing_events_v1-hints.md) and [worked answers](./competing_events_v1-answers.md) let you control when to inspect the derivations.

> Predict first: can bearing-first failures become more common while the bearing hazard stays unchanged? If controller failures are coded zero in a bearing-hazard analysis, has the analysis necessarily made a mistake?

## Define the model through observed transitions

Every new machine starts in state 0, working. Its first exit is either to state 1, bearing failure, or state 2, controller failure. Both exit states are absorbing for this investigation: observation of the failure process stops at its first exit.

$$\text{working}\ \longrightarrow\ \text{bearing failure},
\qquad
\text{working}\ \longrightarrow\ \text{controller failure}.$$

Time is measured in weeks. At fixed positive hazards $\lambda_1,\lambda_2$, a working machine has probability $\lambda_jh+o(h)$ of an exit of type $j$ during a short interval of length $h$. The probability of multiple transitions in that interval is negligible at first order. These are **cause-specific hazards**, with units of inverse weeks, defined among machines that have had neither failure yet.

We define these observed transitions directly. We do not posit two unobservable independent lifetimes, nor claim to know when a controller-failed machine would later have suffered bearing failure. A model can specify first-exit probabilities without identifying that additional joint counterfactual history.

Machines are independent conditional on the two common hazards. Cause labels are recorded completely and correctly, entry is at installation, event times are observed exactly, and there are no repairs or recurring events. The hazards remain constant over the modeled period. Administrative observation limits are independent of the first-exit process given the model conditions, with a censoring mechanism that introduces no additional hazard-parameter factor into the likelihood. Withdrawal after an unrecorded warning would need a different observation model.

## Derive the three state probabilities

Let $S(t)$ be the probability that a new machine is still working at age $t$, and let $F_j(t)$ be the probability that its first failure has been of type $j$ by then. Starting with $S(0)=1$ and $F_1(0)=F_2(0)=0$, the transition rules give

$$S'(t)=-(\lambda_1+\lambda_2)S(t),\qquad
F_j'(t)=\lambda_jS(t).$$

Solving the first equation and integrating the second gives

$$S(t)=e^{-(\lambda_1+\lambda_2)t},$$

$$F_j(t)=\int_0^t \lambda_j e^{-(\lambda_1+\lambda_2)u}\,du
=\frac{\lambda_j}{\lambda_1+\lambda_2}
\left[1-e^{-(\lambda_1+\lambda_2)t}\right].$$

The probability $F_j(t)$ is the **cumulative incidence** of cause $j$. It is dimensionless and nondecreasing. The density of an exit of that type at time $t$ is $f_j(t)=\lambda_jS(t)$, with units of inverse weeks. The hazard is $f_j(t)/S(t)$, rather than $f_j(t)/(1-F_j(t))$: the at-risk state excludes machines that already left by either cause.

Adding the derivatives shows $(S+F_1+F_2)'=0$, so

$$S(t)+F_1(t)+F_2(t)=1.$$

This is a useful full-distribution check: every machine must be in exactly one state. The general cumulative-incidence identity, with overall event-free survival inside the integral, is given in [Therneau, Crowson and Atkinson, equation 3, printed page 3](https://cran.r-project.org/web/packages/survival/vignettes/compete.pdf).

## Keep one hazard fixed and change the competing hazard

Use known hazards $\lambda_1=0.1$ and $\lambda_2=0.2$ per week. At five weeks,

$$F_1(5)=\frac{0.1}{0.3}(1-e^{-1.5})
\approx0.2589566133.$$

Using the bearing hazard alone instead gives

$$N_1(5)=1-e^{-0.1(5)}\approx0.3934693403.$$

We call $N_1$ the cause-1-only exponential **net risk**. It omits competing exits and is not the actual bearing-first probability in the declared three-state process.

Now change only the controller hazard to $0.05$. The actual bearing-first probability becomes

$$F_1(5)=\frac{0.1}{0.15}(1-e^{-0.75})
\approx0.3517556315.$$

The bearing hazard stayed $0.1$, but more machines remain available to have a bearing-first exit. This calculation compares two stipulated generators. It does not establish that an engineering intervention would leave the bearing hazard unchanged.

## Retain exposure from every machine

For a machine, observe its time $t_i$ to the earlier of first exit and administrative observation end. Record $\delta_i=1$ for bearing failure, $2$ for controller failure, and $0$ for administrative censoring while still working. Administrative censoring is an observation status, not a third failure cause or an absorbing engineering state.

The synthetic teaching data are:

| Machine | Observed weeks $t_i$ | Recorded status $\delta_i$ |
| --- | ---: | --- |
| A | $1$ | $1$ Bearing failure |
| B | $2$ | $2$ Controller failure |
| C | $1$ | $0$ Still working at observation end |
| D | $2$ | $2$ Controller failure |

At fixed hazards, an observed type-$j$ failure contributes the event density $\lambda_j e^{-(\lambda_1+\lambda_2)t_i}$. A censored record contributes survival $e^{-(\lambda_1+\lambda_2)t_i}$. Omitting independent administrative-censoring factors, multiply these contributions:

$$L(\lambda_1,\lambda_2)\propto
\lambda_1^{d_1}\lambda_2^{d_2}
e^{-E(\lambda_1+\lambda_2)},\qquad
d_j=\sum_i\mathbf1\{\delta_i=j\},\quad E=\sum_i t_i.$$

Here $d_1=1$, $d_2=2$ and $E=6$ machine-weeks. Every machine contributes its time in the working state to both cause-specific exposure totals. A controller-failed machine stops contributing at its controller failure; it is not retained in the working risk set afterward.

Use independent proper Gamma priors, with positive **shape and rate** parameters:

$$\lambda_j\sim\operatorname{Gamma}(a_{j0},b_{j0}),\qquad
p(\lambda_j)=\frac{b_{j0}^{a_{j0}}}{\Gamma(a_{j0})}
\lambda_j^{a_{j0}-1}e^{-b_{j0}\lambda_j}.$$

The Gamma rate $b_{j0}$ has units of weeks, so $b_{j0}\lambda_j$ is dimensionless. The likelihood factors by cause. Consequently independent priors give independent posteriors

$$\lambda_j\mid D\sim\operatorname{Gamma}(a_j,b_j),\qquad
a_j=a_{j0}+d_j,\quad b_j=b_{j0}+E.$$

With Gamma$(1,2)$ priors for both hazards, these are Gamma$(2,8)$ for bearing and Gamma$(3,8)$ for controller. Their posterior mean hazards are $1/4$ and $3/8$ per week.

## Distinguish fitting a cause hazard from predicting incidence

For bearing-hazard fitting, the relevant likelihood factor is

$$L_1(\lambda_1)\propto\lambda_1^{d_1}e^{-E\lambda_1}.$$

A binary event indicator $\mathbf1\{\delta_i=1\}$, with controller exits coded zero at their observed exit times, supplies exactly this factor when every machine's exposure is retained until its first exit or administrative censoring. This is a valid way to fit the **observed cause-specific hazard** under the stated model. It does not require independent latent bearing and controller lifetimes.

The mistake would be to convert that hazard alone into $1-e^{-\lambda_1t}$ and label it the actual bearing-first incidence. Actual incidence uses both hazards through overall survival. The [official survival tutorial, sections 1.1–1.2](https://cran.r-project.org/web/packages/survivalVignettes/vignettes/tutorial.html) illustrates the same distinction between fitting individual cause hazards and calculating joint state probabilities.

Do not discard controller-failed machines from the dataset: their earlier working time informs the bearing hazard. Do not include time after their controller failures in this first-exit risk set. Coding a controller exit as zero for the bearing event indicator is a data representation for a particular likelihood; it does not turn that exit into independent administrative follow-up or identify a failure-removal intervention.

## Average future state probabilities over the posterior

For a new exchangeable machine, the posterior predictive probabilities are

$$\bar S(t)=E[S(t)\mid D],\qquad
\bar F_j(t)=E[F_j(t)\mid D].$$

They concern its first exit by age $t$ even if a future observation schedule might end earlier. Predicting which records a future study observes would additionally require that study's observation mechanism.

The main posterior has a useful exact transformation. Let

$$R=\lambda_1+\lambda_2,\qquad Q=\frac{\lambda_1}{\lambda_1+\lambda_2}.$$

For independent Gamma hazards with a **common rate** $b$, the inverse transformation is $\lambda_1=RQ$, $\lambda_2=R(1-Q)$, with Jacobian $R$. Their transformed density factors as

$$p(R,Q\mid D)\propto
R^{a_1+a_2-1}e^{-bR}\,
Q^{a_1-1}(1-Q)^{a_2-1}.$$

The first factor is a Gamma kernel and the second is a Beta kernel, each on its own support. Normalizing proves

$$R\sim\operatorname{Gamma}(a_1+a_2,b),\qquad
Q\sim\operatorname{Beta}(a_1,a_2),\qquad R\perp Q.$$

Here $R\sim\operatorname{Gamma}(5,8)$ and $Q\sim\operatorname{Beta}(2,3)$. Since $S(t)=e^{-Rt}$ and $F_1(t)=Q(1-e^{-Rt})$, independence and the Gamma Laplace transform give

$$\bar S(t)=\left(\frac8{8+t}\right)^5,\qquad
\bar F_1(t)=\frac25[1-\bar S(t)],\qquad
\bar F_2(t)=\frac35[1-\bar S(t)].$$

At two weeks the exact values are

$$\bar S(2)=\frac{1024}{3125}=0.32768,$$

$$\bar F_1(2)=\frac{4202}{15625}=0.268928,\qquad
\bar F_2(2)=\frac{6303}{15625}=0.403392.$$

They sum to one. The posterior mean rates substituted into the fixed-parameter formula instead give bearing-first probability about $0.2853980813$, and survival about $0.2865047969$. A nonlinear function evaluated at mean rates need not equal its posterior expectation.

The predictive probabilities average both parameter uncertainty and the new machine's possible outcome. They are not credible-interval endpoints for a parameter-specific risk, nor a promise about the state of any particular machine.

## Compare bounded offline forecasts

The explorer has six declared cases: horizons one, two and four weeks for the common-rate posterior above and for an unequal-rate prior sensitivity described below. The same four observation records are used throughout. Its state probabilities retain explicit survival and both first-exit causes; the cause-1-only net-risk comparison is labeled separately.

<!-- EXPLORER -->

## Update the predictive hazard when a new machine survives

At fixed parameters the two hazards are constant. The posterior predictive hazard, conditional on a new machine still working at age $s$, averages parameters using its survival information. For independent posterior Gamma$(a_j,b_j)$ hazards, survival to $s$ multiplies the joint density by $e^{-s(\lambda_1+\lambda_2)}$. The updated hazard distributions are independent Gamma$(a_j,b_j+s)$, so the predictive cause-specific hazards are

$$\bar h_j(s)=E[\lambda_j\mid D,\text{new machine working at }s]
=\frac{a_j}{b_j+s}.$$

They are the initial posterior means only at $s=0$. In the main example they start at $1/4$ and $3/8$; among new machines still working at two weeks they are $1/5$ and $3/10$. This decline arises from survival reweighting of uncertain constant parameters, not from an assumed physical improvement with age.

Equivalently, differentiating the predictive cumulative incidences gives densities $\bar f_j(s)$ satisfying $\bar f_j(s)=\bar h_j(s)\bar S(s)$. Taking the posterior mean of a hazard and multiplying it by mean survival without this reweighting would generally be incorrect.

## Change one prior and derive the unequal-rate forecast

Keep the four observations and the bearing prior Gamma$(1,2)$, but change only the controller prior to Gamma$(1,4)$. This is a sensitivity to a different proper prior, not an intervention on the observed machines. The posteriors become

$$\lambda_1\mid D\sim\operatorname{Gamma}(2,8),\qquad
\lambda_2\mid D\sim\operatorname{Gamma}(3,10),$$

still independent. The bearing-hazard posterior is unchanged, but actual bearing-first incidence can change because the posterior for the competing hazard changed.

The common-rate Gamma–Beta shortcut no longer applies. For unequal $b_1,b_2$, the transformed exponential factor is

$$e^{-R[b_2+(b_1-b_2)Q]},$$

which couples total hazard $R$ and share $Q$. In general $R$ is not a Gamma variable of shape $a_1+a_2$, $Q$ is not Beta$(a_1,a_2)$, and their independence cannot be reused.

We can instead integrate the original observed-state model. Define the posterior Laplace factors

$$L_j(u)=E[e^{-u\lambda_j}\mid D]
=\left(\frac{b_j}{b_j+u}\right)^{a_j}.$$

Posterior independence gives

$$\bar S(t)=L_1(t)L_2(t).$$

Because all integrands are nonnegative, exchanging posterior expectation and the incidence integral is valid. Differentiating the Gamma Laplace transform, or integrating one extra power of $\lambda_j$, gives

$$E[\lambda_j e^{-u\lambda_j}\mid D]
=\frac{a_j}{b_j+u}L_j(u).$$

Hence the general one-dimensional formulas are

$$\bar F_j(t)=\int_0^t
\frac{a_j}{b_j+u}L_1(u)L_2(u)\,du.$$

These formulas apply to positive real Gamma shapes and unequal positive rates. They also show $\bar f_j(u)/\bar S(u)=a_j/(b_j+u)$ directly. Moreover,

$$-\bar S'(u)=
\left[\frac{a_1}{b_1+u}+\frac{a_2}{b_2+u}\right]\bar S(u),$$

so $\bar S+\bar F_1+\bar F_2=1$ follows without numerical approximation.

For the changed posterior and horizon two,

$$\bar S(2)=\left(\frac8{10}\right)^2
\left(\frac{10}{12}\right)^3=\frac{10}{27},$$

$$\bar F_1(2)=24000\log(25/24)-\frac{8815}{9}
\approx0.2834240417,$$

$$\bar F_2(2)=\frac{26462}{27}-24000\log(25/24)
\approx0.3462055880.$$

The large terms in the two logarithmic expressions nearly cancel; evaluating them at ordinary precision requires care. Their integral representations are positive and give independent numerical checks. The [worked answers](./competing_events_v1-answers.md) derive the first expression by partial fractions and recover the second from conservation of probability.

## State what removing a competing failure would assume

For the main bearing posterior, the posterior-averaged cause-1-only exponential net risk is

$$\bar N_1(t)=E[1-e^{-\lambda_1t}\mid D]
=1-\left(\frac8{8+t}\right)^2.$$

Thus $\bar N_1(2)=9/25=0.36$. This is an analytic model quantity. We have not fitted a Kaplan–Meier estimator, and this number is not a reported KM estimate from the four records.

At fixed hazards, $F_1(t)=\int_0^t\lambda_1e^{-\lambda_1u}e^{-\lambda_2u}\,du$ whereas $N_1(t)=\int_0^t\lambda_1e^{-\lambda_1u}\,du$. The former is no larger; it is strictly smaller for positive hazards and $t>0$. Averaging preserves that inequality. Competing exits account for the different targets.

If a modified generator sets $\lambda_2=0$ **and** leaves $\lambda_1$ unchanged, the cause-1-only expression becomes that modified generator's failure probability. Treating it as the effect of eliminating controller failures requires the additional assumption that the intervention leaves the bearing transition mechanism unchanged, along with any other conditions needed to transport the forecast. The observed cause-specific hazards alone do not establish that assumption. No assertion about independent unobservable failure times is needed for our ordinary first-exit analysis, and none is established by its likelihood.

The [survival competing-risks vignette, printed pages 8–9](https://cran.r-project.org/web/packages/survival/vignettes/compete.pdf) explains why separate KM-based event curves should not be labeled actual competing-event incidences. Its discussion of hypothetical removal should be kept separate from the validity of fitting a cause-specific hazard with the other event coded zero.

These examples use a deliberately small constant-hazard model. Changing failure rates with age, unrecorded machine differences, incorrect cause labels, repairs and informative withdrawal would require further modeling and checks. The synthetic records supply a transparent mathematical investigation, not evidence about actual bearings or controllers. Attempt [practice](./competing_events_v1-practice.md), then return after a delay and reconstruct the likelihood, all three state probabilities, and the assumption needed for a removal forecast.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/competing_events_v1.pdf), the lesson and practice without worked answers.
