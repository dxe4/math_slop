var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: prior-specification-sensitivity
title: "Prior Specification and Sensitivity"
level: graduate
license: CC BY-SA 4.0
---

# Prior Specification and Sensitivity

Prior specification is a mathematical description of uncertainty before the current observations. It is neither a mandatory display of ignorance nor a nuisance to be eliminated after fitting. A useful specification connects parameter units to observable implications, states support and dependence, and shows how conclusions move under defensible alternatives.

This L4 chapter assumes the primary Bayesian course, conditional probability, integration, covariance and total variation. The preceding modeling and conjugate chapters supply exact references. We prove local and bounded global sensitivity results, with explicit hypotheses; neither result says that a posterior insensitive within one chosen family is insensitive to every possible modeling change.

## Specify a scale through quantities that can be discussed

A density is relative to a parameterisation and a reference measure. Uniformity in a rate is not uniformity in its logarithm. For a positive rate $\\lambda$, setting $\\eta=\\log\\lambda$ gives density $\\pi_\\eta(\\eta)=\\pi_\\lambda(e^\\eta)e^\\eta$. The Jacobian expresses the same probability law in new coordinates, rather than an extra arbitrary penalty.

For a lognormal rate prior, write $\\eta\\sim N(m,s^2)$. Its median rate is $e^m$ and its mean rate is $e^{m+s^2/2}$. If plausible central quantiles are $L,U>0$, symmetric on the log scale at normal quantiles $\\pm z$, solve
$$
m=\\tfrac12(\\log L+\\log U),\\qquad
s=\\frac{\\log U-\\log L}{2z}.
$$
The assumptions are that the chosen quantile levels and lognormal shape are appropriate. Two elicited numbers do not empirically identify that shape.

For a Bernoulli probability, a beta prior can be described by mean $m\\in(0,1)$ and concentration $c>0$, with parameters $a=cm$, $b=c(1-m)$. Calling $c$ a prior sample size is an algebraic interpretation in the conjugate model. It is not a universal count of actual previous observations or a guarantee that every prior feature has equivalent information.

Joint priors matter as much as marginal priors. Independent priors for an intercept and slope on one centered predictor scale generally become dependent after recentering. If parameters share physical constraints, assigning independent broad marginals can put mass on impossible combinations.

## Prior predictions retain units and dependence

For $Y\\mid\\lambda\\sim\\operatorname{Poisson}(t\\lambda)$ with a proper rate prior,
$$
EY=tE\\lambda,\\qquad
\\operatorname{Var}(Y)=tE\\lambda+t^2\\operatorname{Var}(\\lambda)
$$
when the respective moments exist. This follows from total expectation and variance. A plausible rate quantile range can still imply implausibly large observed counts at a long exposure, or excessive predictive dispersion.

A replicated dataset sharing one parameter draw has dependent observations after that parameter is integrated out. Drawing a new independent parameter for every row instead changes the population model. Prior predictive checks should preserve which latent quantity is shared and what the observation protocol records.

Heavy-tailed priors can be proper while lacking moments. In that case quantile-based predictions or probabilities can remain well-defined even when a requested mean or variance is infinite. One must not replace an undefined expectation with a finite simulation average and call the theoretical issue resolved.

## Local sensitivity through an exponential tilt

Let a proper baseline prior have density $\\pi_0$ and likelihood $L$. Consider $\\pi_\\eta(\\theta)\\propto e^{\\eta h(\\theta)}\\pi_0(\\theta)$. Assume the prior normalisers and posterior normalisers are finite near zero and that a local integrable envelope permits differentiating the relevant integrals involving $g$, $h$ and their product.

**Theorem 11.1 (posterior covariance sensitivity).**
$$
\\left.\\frac{d}{d\\eta}E_\\eta[g(\\theta)\\mid y]\\right|_{\\eta=0}
=\\operatorname{Cov}_0(g(\\theta),h(\\theta)\\mid y).
$$

**Proof.** The prior normaliser cancels from the posterior ratio. Write the posterior expectation as
$$
\\frac{\\int gL e^{\\eta h}\\pi_0}{\\int L e^{\\eta h}\\pi_0}.
$$
Differentiate numerator and denominator under the assumed envelope. The quotient rule gives $E_0[gh\\mid y]-E_0[g\\mid y]E_0[h\\mid y]$. ∎

This derivative is local to one specified perturbation. A small covariance with one $h$ does not control directions not explored. The derivative also needs its moments: an unstable importance-weight calculation cannot establish the needed differentiation theorem.

If $g$ is an action's loss, the derivative concerns posterior expected loss for that fixed action. The derivative of the minimising action can require additional uniqueness and curvature. At a decision threshold, a small probability change can switch an optimal action discontinuously even while the expectation itself changes smoothly.

## A global bound from a bounded density ratio

Let priors $P,Q$ share support and have density ratio $r=dQ/dP$ satisfying $0<a\\le r\\le b<\\infty$. Assume their likelihood normalisers are positive and finite. With $P_y$ the baseline posterior, the alternative posterior ratio is
$$
\\frac{dQ_y}{dP_y}=\\frac r{E_{P_y}r}.
$$

**Theorem 11.2 (posterior total-variation bound).**
$$
\\|P_y-Q_y\\|_{\\rm TV}
\\le\\frac{\\sqrt b-\\sqrt a}{\\sqrt b+\\sqrt a}.
$$

**Proof.** Put $m=E_{P_y}r\\in[a,b]$. Total variation is $E|r-m|/(2m)$. Convexity of absolute value bounds it by its chord between endpoints: averaging yields
$$
E|r-m|\\le\\frac{2(m-a)(b-m)}{b-a}.
$$
Thus the distance is at most $(m-a)(b-m)/\\{m(b-a)\\}$. This expression is maximised at $m=\\sqrt{ab}$: rewrite its numerator after division by $m$ as $a+b-m-ab/m$, and use $m+ab/m\\ge2\\sqrt{ab}$. Substitution gives the stated bound. The case $a=b$ is zero directly. ∎

For a function whose range lies in an interval of length $R$, posterior expectations differ by at most $R$ times this distance. This follows from the event or layer-cake characterisation of total variation after centring and scaling to $[0,1]$. Unbounded target functions require additional tail control; a small probability distance alone does not bound their mean difference.

The ratio condition is strong. Priors with different tail scales can have an unbounded ratio, and a prior assigning zero mass to a region cannot be repaired by data there under that prior. Failure of this bound is not proof of instability, but it prevents claiming its guarantee.

## Likelihood identification and prior sensitivity

If data depend only on $u=\\theta_1+\\theta_2$, they do not distinguish values along a contrast direction $v=\\theta_1-\\theta_2$. Bayes' theorem may still produce a proper joint posterior under a proper prior. Conditional on $u$, however, the posterior law of $v$ remains its prior conditional law because the likelihood contains no further factor in $v$.

This is a substantive sensitivity direction. More observations of the same design can concentrate $u$ while leaving that contrast prior-driven. A future prediction depending only on $u$ may be stable, while a decision depending on one component is not. Name the target before describing a prior as influential or negligible.

Improper priors require special care for model comparison. A posterior can be proper while a marginal likelihood retains an arbitrary multiplicative constant from an improper prior. Bayes factors then cannot be justified by cancelling constants across unrelated models. Proper predictive specifications or a separately justified comparison method are needed.

## Reporting a sensitivity family

Record why each alternative changes support, scale, dependence or tails and whether the alternatives represent the same scientific interpretation. A coordinate change with the correct Jacobian is the same prior law, not a new sensitivity analysis. Changing a uniform prior after reparameterisation is a new law.

Separate prior sensitivity from likelihood sensitivity and computational error. A small Monte Carlo difference can be noise rather than a real change; a repeated exact conjugate calculation can isolate the modelling component. Conversely, numerical stability across several samplers does not establish stability across plausible observation models.

The conclusions should identify which target moved, which family was explored and which important directions remain outside it. This is more informative than a generic statement that “the prior did not matter”.

## From probability sensitivity to a decision guarantee

Suppose losses lie between zero and a finite $L$, and the posterior TV distance is at most $\\epsilon$. For every fixed action $a$, its two posterior expected losses differ by at most $L\\epsilon$. Let $a_P$ and $a_Q$ minimise expected loss under the two posterior laws, assuming such minimisers exist.

The regret of taking the alternative action under the baseline posterior satisfies
$$
R_P(a_Q)-R_P(a_P)
=[R_P(a_Q)-R_Q(a_Q)]
+[R_Q(a_Q)-R_Q(a_P)]
+[R_Q(a_P)-R_P(a_P)]
\\le2L\\epsilon.
$$
The middle term is nonpositive by optimality under $Q$, and the outside terms each obey the bounded-loss TV consequence. This is a statement about decision loss, not necessarily closeness of the action values themselves. Two very different actions can have nearly equal loss.

If a finite action set has a unique baseline optimum with a risk gap larger than $2L\\epsilon$ to every other action, the optimum cannot change under such a posterior perturbation. Without a gap, the earlier threshold example shows why a tiny probability change can alter the selected action. Reporting an expected-loss margin makes that distinction visible.

Unbounded losses need additional integrability. A squared-error action can have infinite posterior risk under a heavy-tailed prior even when posterior quantiles exist. A TV bound alone does not justify comparing such risks as finite numbers.

## Exact concentration sensitivity in a beta model

Take prior mean $m\\in(0,1)$ and concentration $c>0$, with $s$ successes in $n\\ge1$ trials. The posterior mean is $(cm+s)/(c+n)$. Holding $c$ fixed, its derivative with respect to prior mean is $c/(c+n)$. Holding $m$ fixed, its concentration derivative is
$$
\\frac{mn-s}{(c+n)^2}.
$$
These follow by elementary differentiation of the conjugate expression. They distinguish moving the prior center from changing its strength. The concentration derivative changes sign according to whether the prior center exceeds the sample proportion.

**Worked example: two different elicitation changes.** With $n=20,s=8,c=5,m=1/2$, the posterior mean is $10.5/25=0.42$. A small prior-centre shift has derivative $5/25=0.2$, while changing concentration has derivative $(10-8)/25^2=2/625$. These are local sensitivities in the specified beta family. A change in support or a new observation mechanism is not covered by either number.

The prior-centre derivative tends to zero for fixed $c$ as $n$ grows, but not when concentration itself grows proportionally with $n$. Thus a general claim that “enough data makes every prior irrelevant” needs a specified sequence of priors, likelihood information and target. The exact finite formula already exposes that qualification.

## The same bound can compare observation models

Keep the prior fixed but compare likelihoods $L_0,L_1$ for the same recorded observation, with positive finite normalisers. If $a\\le L_1(\\theta)/L_0(\\theta)\\le b$ on the prior-supported region, the posterior ratio is again that likelihood ratio divided by its baseline posterior expectation. The proof of the TV theorem therefore applies unchanged.

This is a bound for a declared likelihood perturbation. It requires a common observation space and the same event or density reference. Comparing an exact measurement density with a differently selected sample density without its normaliser would not supply the stated likelihood ratio.

If both prior and likelihood are perturbed, their positive bounded ratios multiply. Bounds $a\\le dQ/dP\\le b$ and $c\\le L_1/L_0\\le d$ yield bounds $ac$ and $bd$ for the combined unnormalised posterior ratio. Normalisation then gives the corresponding square-root TV bound. The result can be conservative, but it states exactly which changes are controlled.

In many realistic tail changes the ratio is unbounded, so this theorem is unavailable. That is a limitation of the bound, not proof that the posterior must change substantially. One can instead examine target-specific moment control, explicit sensitivity families or identification regions. The mathematical guarantee should match the actual perturbation considered rather than a convenient bounded-ratio fiction.

## Worked example 1: a prior mean can misrepresent a typical rate

For $\\log\\lambda\\sim N(0,1)$, median rate is one but mean rate is $e^{1/2}$. At exposure two, prior mean count is $2e^{1/2}$. Plugging the median rate into a Poisson mean gives two instead. This difference follows from integrating uncertainty once, not from simulation error.

## Worked example 2: sensitivity of a normal posterior

If a baseline posterior is $N(m,v)$ and the prior is locally tilted by $e^{\\eta\\theta}$, the posterior is $N(m+\\eta v,v)$. Completing the square proves it. The derivative of its mean is $v$, matching $\\operatorname{Cov}(\\theta,\\theta\\mid y)$. A well-identified small variance reduces this particular sensitivity direction.

## Worked example 3: a decision threshold can move abruptly

For a binary state with posterior probability $p$, suppose action one has loss $1-p$ and action zero has loss $2p$. The optimal choice switches at $p=1/3$. Probabilities $0.32$ and $0.34$ are close, but choose different actions. Report both the expected-loss margin and the decision, rather than treating a changed action as evidence of a huge probability change.

## A coordinate change is different from a different prior

Suppose a positive parameter is re-expressed by its logarithm. Transforming an existing prior into that coordinate requires the density Jacobian. Doing so preserves the probability law on the underlying parameter and therefore preserves every posterior probability for equivalent events under the transformed likelihood.

Choosing a fresh uniform density in the logarithmic coordinate is instead a new prior. For example, a uniform law on a finite log interval induces a density proportional to the reciprocal parameter over the corresponding positive interval. It is not the same law as a uniform density over that positive interval.

A sensitivity report should distinguish these operations. Agreement after a correct bijective reparametrisation is a consistency requirement for the same model. Disagreement between two separately chosen uniform priors can be a meaningful prior-sensitivity result because those priors assign different masses to the same scientific events.

The point is especially important near boundaries or across several orders of magnitude, where a superficially flat plot in one coordinate can correspond to substantial concentration in another.

## Symmetry is an exact posterior consequence with a scope

Suppose a scalar parameter has a prior density symmetric about zero and the likelihood is also an even function of that parameter. If the posterior normalizing integral is finite and positive, its density remains even: replacing the parameter by its negative changes neither factor nor the normalizer. When the posterior first absolute moment is finite, its mean is therefore zero by cancellation of the positive and negative integrals. If the posterior has no atom at zero, its probability of being positive is one half.

These are consequences of the complete likelihood-prior symmetry, not assurances that the data contain no information. The posterior can concentrate strongly around two symmetric nonzero values while preserving that mean and sign probability. A small asymmetric prior perturbation may then shift mass between the two regions even though within-region concentration is strong. Sensitivity summaries should therefore include quantities that distinguish competing regions, rather than relying only on a posterior mean that symmetry fixes in advance.

## Exercises

### Exercise 1
<a id="prior-specification-sensitivity-ex-1"></a>

For a lognormal rate prior with m=0 and s squared one, give its median and mean.

<details>
<summary>Hint 1</summary>

Use two different summaries.

</details>
<details>
<summary>Hint 2</summary>

The mean includes a half-variance correction.

</details>
<details>
<summary>Solution</summary>

The median is one and mean is $e^{1/2}$. The difference comes from the nonlinear exponential map. A statement about the central rate must identify which summary it uses.

</details>

### Exercise 2
<a id="prior-specification-sensitivity-ex-2"></a>

Transform a rate prior when time units change from hours to minutes.

<details>
<summary>Hint 1</summary>

The rate per minute is the hourly rate divided by sixty.

</details>
<details>
<summary>Hint 2</summary>

Shift the log rate.

</details>
<details>
<summary>Solution</summary>

The log-rate location decreases by $\\log60$ and its log-scale standard deviation is unchanged. Exposure numbers multiply by sixty, so expected counts stay the same. Keeping the old rate prior unchanged would alter the physical model.

</details>

### Exercise 3
<a id="prior-specification-sensitivity-ex-3"></a>

Write a beta prior with mean one-quarter and concentration eight.

<details>
<summary>Hint 1</summary>

Use a=cm and b=c(1-m).

</details>
<details>
<summary>Hint 2</summary>

Both parameters must be positive.

</details>
<details>
<summary>Solution</summary>

The parameters are two and six. Its mean is $2/8=1/4$. The concentration is an algebraic scale of this beta family, not evidence that eight real observations were collected.

</details>

### Exercise 4
<a id="prior-specification-sensitivity-ex-4"></a>

Derive the covariance sensitivity formula for a bounded target.

<details>
<summary>Hint 1</summary>

Differentiate the posterior ratio.

</details>
<details>
<summary>Hint 2</summary>

The prior normaliser cancels.

</details>
<details>
<summary>Solution</summary>

The quotient derivative is the posterior average of $gh$ minus the product of posterior averages of $g$ and $h$. Boundedness plus the stated local envelope justifies differentiating; without integrability the formal derivative need not be valid.

</details>

### Exercise 5
<a id="prior-specification-sensitivity-ex-5"></a>

For density-ratio bounds a=1 and b=4, give the posterior TV bound.

<details>
<summary>Hint 1</summary>

Take square roots.

</details>
<details>
<summary>Hint 2</summary>

Use the theorem's ratio.

</details>
<details>
<summary>Solution</summary>

The bound is $(2-1)/(2+1)=1/3$. It holds for any observation with valid normalisers under the stated common-support ratio condition. It does not bound arbitrary unbounded posterior means.

</details>

### Exercise 6
<a id="prior-specification-sensitivity-ex-6"></a>

Why is a correct parameter transformation not a prior sensitivity alternative?

<details>
<summary>Hint 1</summary>

It represents the same measure.

</details>
<details>
<summary>Hint 2</summary>

The Jacobian preserves probabilities.

</details>
<details>
<summary>Solution</summary>

Transforming a prior with its Jacobian changes coordinates, not the law on underlying states. Sensitivity requires changing that law or model assumptions. Choosing a new flat density in the transformed coordinate is a different prior and must be described as such.

</details>

### Exercise 7
<a id="prior-specification-sensitivity-ex-7"></a>

Show that a shared Poisson rate creates predictive covariance.

<details>
<summary>Hint 1</summary>

Condition on the common rate.

</details>
<details>
<summary>Hint 2</summary>

Conditional covariance is zero but conditional means vary.

</details>
<details>
<summary>Solution</summary>

For two exposures $t_1,t_2$ with conditionally independent counts, total covariance is $t_1t_2\\operatorname{Var}(\\lambda)$ when finite. Independent parameter draws per row would remove this term and specify another model.

</details>

### Exercise 8
<a id="prior-specification-sensitivity-ex-8"></a>

Why can a proper posterior remain sensitive along an unidentified direction?

<details>
<summary>Hint 1</summary>

The likelihood is constant along that direction at fixed identified coordinates.

</details>
<details>
<summary>Hint 2</summary>

The prior conditional law remains.

</details>
<details>
<summary>Solution</summary>

If the likelihood depends only on $u$, posterior conditioning on $u$ leaves the prior law of $v$ unchanged. Normalisation and concentration of $u$ do not provide information about $v$. Targets depending on $v$ remain sensitive to its prior specification.

</details>

### Exercise 9
<a id="prior-specification-sensitivity-ex-9"></a>

Can small TV distance alone bound the difference of unbounded means?

<details>
<summary>Hint 1</summary>

A tiny tail probability can carry a large value.

</details>
<details>
<summary>Hint 2</summary>

The bounded-range consequence has a hypothesis.

</details>
<details>
<summary>Solution</summary>

No. Move a small probability to an arbitrarily large value and the mean change can be arbitrarily large while probability distance stays small. A moment or tail condition is required for such a target.

</details>

### Exercise 10
<a id="prior-specification-sensitivity-ex-10"></a>

Why can an improper prior obstruct a Bayes factor even with a proper posterior?

<details>
<summary>Hint 1</summary>

Its density has an arbitrary multiplicative constant.

</details>
<details>
<summary>Hint 2</summary>

The marginal likelihood retains that constant.

</details>
<details>
<summary>Solution</summary>

Within one posterior ratio the constant cancels. A model evidence integrates the unnormalised prior and therefore scales with it. Comparing unrelated models cannot generally cancel arbitrary choices, so the Bayes factor is not well-defined without further construction.

</details>

## Summary

Prior laws are specified through support, units, joint structure and observable implications. Covariance derivatives quantify a stated local tilt; bounded density ratios give a global posterior TV guarantee. Neither controls every target or unexamined direction. Identification, likelihood sensitivity and numerical uncertainty remain separate questions.
`;export{e as default};