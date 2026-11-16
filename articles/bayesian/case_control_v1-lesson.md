# Learn association from a sample with fixed outcome totals

A service audit deliberately includes more delayed jobs than their share in the source population. Can it still teach us whether a binary job characteristic is associated with delay? Can the same audit estimate the population delay rate? The answers depend on which quantities the sampling design leaves random.

We will first transform a **known probability table**, then start a separate Bayesian study whose outcome totals are fixed before sampling. The core calculation learns an odds ratio while leaving an independent prior for source prevalence unchanged. Absolute source risks require that prevalence as well as the association parameters. Optional sections establish an exact posterior odds-ratio identity under compatible priors and derive a different likelihood when control recruitment depends on the characteristic.

Core preparation: conditional probability, odds, independent observations and Beta updating. The [binary-outcome chapter](../../books/bayesian/08_glm.md) introduces odds ratios and distinguishes them from probability differences. Work through the core and tasks 1–4 before the optional extensions. Allow an unpiloted 90–120 minutes for that route, with a further 60–90 minutes for the advanced material. No fitted regression or MCMC is needed.

> Predict first: if delayed jobs are nine times as likely to enter an audit, will the audited delay risks equal source risks? Which ratio might survive that selection? If the audit requests exactly 21 delayed jobs and 11 other jobs, does the fraction $21/32$ estimate source prevalence?

## Transform a known source distribution

Let $Y=1$ mean that a job misses its specified service deadline, and $Y=0$ that it does not. Let $X=1$ indicate a recorded binary job characteristic and $X=0$ its absence. These labels describe an association; no intervention on $X$ is specified.

For this first calculation, the entire source joint distribution is **known**:

| Source probability | $Y=1$ delayed | $Y=0$ other | Total |
| --- | ---: | ---: | ---: |
| $X=0$ | $6/120$ | $54/120$ | $1/2$ |
| $X=1$ | $15/120$ | $45/120$ | $1/2$ |
| Total | $21/120=7/40$ | $99/120=33/40$ | $1$ |

The numerators are probability-mass weights, **not observed counts of jobs**. The source risks are

$$q_0=\Pr(Y=1\mid X=0)=\frac1{10},\qquad
q_1=\Pr(Y=1\mid X=1)=\frac14.$$

Their risk ratio is $q_1/q_0=5/2$. Their odds ratio is a different quantity:

$$\operatorname{OR}
=\frac{q_1/(1-q_1)}{q_0/(1-q_0)}
=\frac{(1/4)/(3/4)}{(1/10)/(9/10)}=3.$$

Write $S=1$ for inclusion. Include each delayed job with probability one and each other job with probability $1/9$, independently of $X$ conditional on $Y$. Multiplying each source cell by its inclusion probability gives unnormalized weights $(6,6,15,5)/120$. Their sum is $32/120$, so the included distribution is

| Probability conditional on inclusion | $Y=1$ delayed | $Y=0$ other | Total |
| --- | ---: | ---: | ---: |
| $X=0$ | $6/32$ | $6/32$ | $12/32$ |
| $X=1$ | $15/32$ | $5/32$ | $20/32$ |
| Total | $21/32$ | $11/32$ | $1$ |

The included risks are $1/2$ and $3/4$, giving risk ratio $3/2$. The odds ratio is still three. The included outcome prevalence, $21/32$, is also different from the source prevalence $7/40$. Even weighting the included risks by the known **source** $X$ proportions would give $(1/2)(1/2)+(1/2)(3/4)=5/8$, which is not the source outcome prevalence: the conditional risks themselves were changed by selection.

## Derive the cancellation in the odds ratio

More generally, let $s_y(x)=\Pr(S=1\mid Y=y,X=x)$ be known positive inclusion probabilities. Conditional probability gives

$$\frac{\Pr(Y=1\mid X=x,S=1)}{\Pr(Y=0\mid X=x,S=1)}
=\frac{s_1(x)}{s_0(x)}\frac{q_x}{1-q_x}.$$

Thus the included odds ratio is the source odds ratio multiplied by

$$\frac{s_1(1)/s_0(1)}{s_1(0)/s_0(0)}.$$

When selection depends only on $Y$, this factor is one. Each outcome odds changes, but the common multiplier cancels in their ratio. No rare-outcome approximation is involved. If inclusion also depends on $X$, that cancellation requires the same selection-odds multiplier at both $X$ values.

In logit form the exact probability identity is

$$\operatorname{logit}\Pr(Y=1\mid X=x,S=1)
=\operatorname{logit}(q_x)+\log\frac{s_1(x)}{s_0(x)}.$$

[Fithian and Hastie, section 2, equations 7–10](https://arxiv.org/pdf/1306.3706), derive this selection identity. Their section 2.2 also explains why a misspecified logistic approximation need not retain its population coefficient after outcome-based sampling. The identity for the true conditional probabilities does not guarantee invariance of every fitted regression coefficient. Our binary-$X$ table represents both conditional probabilities directly.

<!-- EXPLORER -->

The explorer changes only the known-population inclusion ratio $R\in\{1,3,9\}$: delayed jobs enter with probability one and other jobs with probability $1/R$. It replaces the selection rule for this known table; it does not collect data or update a prior. Predict the risks, prevalence and odds ratio before switching. The separate fixed-quota analysis below always uses the same 21/11 design, recorded counts and priors. The changed-count and characteristic-dependent selection tasks are outside these controls.

## Start a separate study with fixed outcome totals

We now leave the known population calculation. **The source probabilities in the following study are unknown.** The audit decides in advance to obtain exactly 21 delayed jobs, called cases, and 11 other jobs, called controls. Within each outcome stratum, it draws jobs independently from the corresponding source conditional distribution. Use a with-replacement or superpopulation model, so no finite-register depletion occurs. The two strata are conditionally independent.

The outcome totals are design choices. What is observed is each selected job's characteristic:

| Observed counts under fixed quotas | $Y=1$ cases | $Y=0$ controls |
| --- | ---: | ---: |
| $X=0$ | $6$ | $6$ |
| $X=1$ | $15$ | $5$ |
| Fixed total | $21$ | $11$ |

These integers happen to match the included probability weights in the earlier example. Here they are **random observed $X$ counts within fixed $Y$ totals**, not a known source table and not evidence that the earlier source probabilities hold.

The parameters matching this sampling story are

$$a=\Pr(X=1\mid Y=1),\qquad
b=\Pr(X=1\mid Y=0),\qquad
\pi=\Pr(Y=1).$$

$\pi$ refers to the source population, not the case fraction requested by the audit. Use independent priors

$$a\sim\operatorname{Beta}(1,1),\qquad
b\sim\operatorname{Beta}(1,1),\qquad
\pi\sim\operatorname{Beta}(2,2).$$

The Beta$(1,1)$ distribution is uniform on $(0,1)$. These are a complete prior specification, not estimates imported from the known-table example. The choice Beta$(2,2)$ for prevalence will also permit a compatible-prior construction in the optional section.

## Update the parameters that generated random observations

Let $n_{xy}$ be the number of recorded items with $X=x$ and $Y=y$. The case characteristic count is Binomial$(21,a)$ and the control characteristic count is independently Binomial$(11,b)$. Their exact count-data probability is

$$\Pr(n_{11}=15,n_{10}=5\mid a,b,\text{fixed quotas})
=\binom{21}{15}\binom{11}{5}
a^{15}(1-a)^6b^5(1-b)^6.$$

The binomial coefficients do not depend on the parameters. For posterior updating we can therefore use

$$L(a,b,\pi)\propto a^{15}(1-a)^6b^5(1-b)^6.$$

There is **no** $\pi^{21}(1-\pi)^{11}$ factor: the study did not randomly observe 21 cases among 32 unfiltered source jobs. It fixed the outcome totals first and sampled characteristics within them. Recording an ordered characteristic sequence instead of only counts would remove the binomial coefficients, but leave this posterior unchanged.

Multiplication by the independent priors gives

$$a\mid D\sim\operatorname{Beta}(16,7),\qquad
b\mid D\sim\operatorname{Beta}(6,7),\qquad
\pi\mid D\sim\operatorname{Beta}(2,2),$$

independently. The likelihood contains no $\pi$, and its prior is independent of $a,b$, so the marginal prevalence prior remains unchanged. The same conclusion holds for any other independent proper prior on $\pi$. With a dependent prior, learning $a,b$ can transmit information to $\pi$ through that dependence.

Knowing how the investigator filled fixed outcome quotas does not turn the quota fraction into a random population prevalence observation. A random included outcome margin, a known number of source proposals, or external source information would define an additional observation model. None is part of this dataset.

## Recover an odds ratio without a source prevalence

For any $(a,b,\pi)$ in the interior of the parameter space, the source cells are

$$p_{11}=\pi a,\quad p_{01}=\pi(1-a),\quad
p_{10}=(1-\pi)b,\quad p_{00}=(1-\pi)(1-b),$$

where $p_{xy}=\Pr(X=x,Y=y)$. Hence the source outcome odds ratio is

$$\operatorname{OR}
=\frac{p_{11}p_{00}}{p_{10}p_{01}}
=\boxed{\frac{a(1-b)}{(1-a)b}}.$$

The prevalence cancels. The posterior therefore supplies a distribution for the source odds ratio using the learned $a,b$, even though the marginal prevalence distribution has not changed. A posterior probability that the association is positive has the particularly simple event

$$\Pr(\operatorname{OR}>1\mid D)=\Pr(a>b\mid D)
=\frac{57095}{62031}\approx0.9204.$$

This is a probability about an unknown association parameter. It is neither the probability that a future job is delayed nor a causal effect of changing its characteristic. The exact fraction comes from integrating the two independent Beta densities; task 3 supplies an optional finite-sum route.

The posterior mean odds ratio is different from the odds ratio evaluated at posterior means. For $U\sim\operatorname{Beta}(\alpha,\beta)$,

$$E\!\left[\frac{U}{1-U}\right]=\frac{\alpha}{\beta-1}\quad(\beta>1),\qquad
E\!\left[\frac{1-U}{U}\right]=\frac{\beta}{\alpha-1}\quad(\alpha>1).$$

These follow by changing the exponents in the Beta density integral. Independence gives

$$E(\operatorname{OR}\mid D)
=\frac{16}{7-1}\frac{7}{6-1}
=\frac{56}{15}\approx3.7333.$$

But $E(a\mid D)=16/23$ and $E(b\mid D)=6/13$, so

$$\operatorname{OR}\bigl(Ea,Eb\bigr)
=\frac{(16/23)(7/13)}{(7/23)(6/13)}
=\frac83\approx2.6667.$$

A nonlinear function of posterior means need not equal the posterior mean of that function. The observed cross-product ratio, $(15\times6)/(5\times6)=3$, is a third summary. None of these numbers replaces the posterior distribution or its assumptions.

## State the information needed for absolute source risks

The source probabilities of delay at each $X$ value are

$$q_1=\frac{\pi a}{\pi a+(1-\pi)b},\qquad
q_0=\frac{\pi(1-a)}{\pi(1-a)+(1-\pi)(1-b)}.$$

They depend on $\pi$ as well as on $a,b$. To see the nonidentification directly, fix $a=5/7$ and $b=5/11$. With $\pi=7/40$, the risks are $q_0=1/10,q_1=1/4$. With $\pi=1/2$, they instead are $q_0=11/32,q_1=11/18$. Both candidate populations have the same characteristic distributions within each outcome stratum, and so exactly the same fixed-quota likelihood. Both have odds ratio three.

This does not mean a Bayesian source-risk posterior is impossible or that updating $a,b$ teaches nothing about those risks. The stated prevalence prior and the updated $a,b$ induce such a posterior. Its interpretation must retain the prevalence assumption. Calculate each risk at a joint posterior parameter draw before summarizing it; substituting three marginal posterior means would give a different nonlinear calculation.

An independent unfiltered source sample with recorded $Y$ values would add information about prevalence. If it recorded only $Y$, its likelihood would depend only on $\pi$ under this parameterization. In contrast, an exact source $X$ margin $t$ would impose $t=\pi a+(1-\pi)b$. Such information couples the parameters; one cannot impose it and retain the same independent posterior Beta distributions unchanged.

## Complete the core route

Before continuing, explain why the known selection example and the fixed-quota study have different probability experiments despite their matching integers. Then reconstruct the likelihood with new outcome quotas and new characteristic counts in task 4. A fraction fixed by the investigator cannot serve as a random observation of source prevalence.

Use [practice tasks 1–4](./case_control_v1-practice.md), then the separate [hints](./case_control_v1-hints.md) and [worked answers](./case_control_v1-answers.md). These tasks complete the core route. The next sections are optional and require additional distribution theory and integration.

## Optional advanced route with compatible priors

Preparation: Gamma and Dirichlet distributions, the Beta distribution from a ratio of independent Gamma variables, and the distinction between a marginal distribution and a full joint posterior. The goal is an identity for the **entire odds-ratio distribution**, not permission to replace the sampling design for every parameter.

Consider a common prior on the four source-cell probabilities,

$$ (p_{00},p_{01},p_{10},p_{11})
\sim\operatorname{Dirichlet}(1,1,1,1).$$

Its induced retrospective coordinates are independent $a,b\sim\operatorname{Beta}(1,1)$ and $\pi\sim\operatorname{Beta}(2,2)$, exactly our core prior. Its induced prospective coordinates $q_0=\Pr(Y=1\mid X=0)$ and $q_1=\Pr(Y=1\mid X=1)$ are also independent Beta$(1,1)$. These compatible coordinate priors come from one joint law; their compatibility is additional structure.

A **formal prospective calculation** for the recorded table uses

$$L_{\mathrm{pro}}(q_0,q_1)
\propto q_0^6(1-q_0)^6q_1^{15}(1-q_1)^5,$$

which, with those induced priors, gives independent $q_0\sim\operatorname{Beta}(7,7)$ and $q_1\sim\operatorname{Beta}(16,6)$. This is not the actual fixed-outcome sampling likelihood. We now prove that it nevertheless produces the same posterior odds-ratio law in this compatible construction.

Generate four independent Gamma variables with rate one:

$$G_{00}\sim\operatorname{Gamma}(7,1),\quad
G_{01}\sim\operatorname{Gamma}(7,1),\quad
G_{10}\sim\operatorname{Gamma}(6,1),\quad
G_{11}\sim\operatorname{Gamma}(16,1).$$

Here the second argument is the **rate**. Define

$$A=\frac{G_{11}}{G_{11}+G_{01}},\qquad
B=\frac{G_{10}}{G_{10}+G_{00}},$$

$$Q_0=\frac{G_{01}}{G_{01}+G_{00}},\qquad
Q_1=\frac{G_{11}}{G_{11}+G_{10}}.$$

$A,B$ are independent with the actual posterior laws Beta$(16,7)$ and Beta$(6,7)$. Separately, $Q_0,Q_1$ are independent with the formal prospective posterior laws Beta$(7,7)$ and Beta$(16,6)$. The two pairs are not independent of one another in this construction. For every realized positive Gamma quadruple,

$$\frac{A(1-B)}{(1-A)B}
=\frac{G_{11}G_{00}}{G_{10}G_{01}}
=\frac{Q_1(1-Q_0)}{(1-Q_1)Q_0}.$$

This pathwise equality proves equality of the **full** odds-ratio distributions, including all their probabilities and existing moments. Agreement of one mean alone would not prove it.

The normalized Gamma table must not be called the actual source-population posterior. Its outcome margin would be Beta$(23,13)$, whereas the actual fixed-quota posterior for $\pi$ is still Beta$(2,2)$. To generate the actual joint posterior, use the retrospective $A,B$ with a separate independent Beta$(2,2)$ prevalence. The resulting source risks are not automatically the formal $Q_0,Q_1$.

[Byrne and Dawid, theorem 2 and example 7](https://discovery.ucl.ac.uk/id/eprint/1348504/1/Biometrika-2014-Byrne-189-204.pdf), provide a broader sufficient framework using a strong hyper Markov joint prior and its induced coordinate priors. The theorem does not assert necessity, nor equality of full posteriors for source risks. Our Gamma construction proves the present odds-ratio claim directly.

Changing a coordinate prior requires a new compatibility check. Task 5 changes only the formal prospective priors to independent Beta$(1/2,1/2)$ while retaining the **core uniform retrospective priors**, and asks you to compare the resulting OR laws. Half priors are not intrinsically incompatible: a common Dirichlet$(1/2,1/2,1/2,1/2)$ prior also gives matching retrospective and prospective odds-ratio laws, now for that different common prior. Distinguish changing one calculation from changing a common joint prior and both of its induced coordinate priors.

## Optional advanced route with characteristic dependent control recruitment

Preparation: a geometric series, Beta densities and one-variable integration. This is a **new study**, outside the explorer. Start again from the original independent priors. Record two ordered case characteristics, first $X=1$ and then $X=0$. For controls, repeatedly propose independent source controls with replacement, conditional on one persistent unknown $b$. Draw a fresh ticket uniformly from $\{1,\ldots,9\}$ on each proposal. An $X=0$ control accepts only ticket one; an $X=1$ control accepts tickets one, two or three. Stop at the first accepted control, which has $X=1$. The number of failed proposals is unrecorded.

On one control proposal,

$$\Pr(\text{accepted }X=1\mid b)=\frac b3,\qquad
\Pr(\text{accepted }X=0\mid b)=\frac{1-b}{9}.$$

Write $\rho(b)$ for the remaining one-proposal rejection probability. For exactly $k$ rejected controls followed by accepted $X=1$, multiply the raw accepted-$X=1$ probability by $\rho(b)^k$. Sum over $k\ge0$ before combining the result with the ordered case record. Keep the same $b$ throughout those proposals. Redrawing it after each rejection would specify a different experiment.

Task 6 asks for the resulting likelihood, its normalization and posterior association summaries. The parameter-dependent acceptance mechanism must be retained before deciding whether a familiar conjugate update applies. Its integrals can be evaluated by polynomial division and a logarithm; use the separate hints for a route into those calculations. The completed likelihood and exact answers remain in the worked-answer document.

The sampling design determines the likelihood, a compatible prior construction can preserve a particular parameter's law across two analyses, and the target population determines the risk being predicted. Keep those three ingredients explicit when transferring a result to a new study.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/case_control_v1.pdf), the lesson and practice without worked answers.
