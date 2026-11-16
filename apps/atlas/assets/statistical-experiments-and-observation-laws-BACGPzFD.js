var e=`---
parent_id: book-principles-statistical-inference
chapter_id: statistical-experiments-and-observation-laws
title: "Statistical Experiments and Observation Laws"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Statistical Experiments and Observation Laws {#section-1-statistical-experiments-and-observation-laws}

Statistics begins with a repeated-world question: if the unknown state were fixed and the data-producing procedure were run again, what could change and according to which law? A table of observed numbers does not answer that question. Sampling, assignment, measurement, censoring, stopping, and preprocessing determine the probability experiment whose guarantees an inferential procedure can possess.

This chapter constructs statistical experiments explicitly and distinguishes data from parameters, populations, designs, and observation maps. The local prerequisite is a working knowledge of random variables, joint laws, conditional probability, and expectation. The probability volume supplies those foundations; this book starts where probability laws become families indexed by unknown features.

<a id="section-5-1-an-experiment-is-a-family-of-possible-observation-law"></a>
## 1. An experiment is a family of possible observation laws {#section-7-1-an-experiment-is-a-family-of-possible-observation-law}

A **statistical experiment** is a measurable observation space $(X,A)$ together with a family

\\[P={P_\\theta :\\theta \\in \\Theta }\\]

of probability measures on that space. The parameter space $\\Theta $ indexes candidate laws. Data $X$ are drawn according to one of those laws, but the observed value $x$ is fixed after observation.

The index $\\theta $ need not be a physical constant or a scalar. It may contain a regression function, a finite population, a covariance matrix, a missingness mechanism, or a distribution itself. Different parameterisations may describe the same family of observable laws.

Three levels must not be merged:

- the **world or target population**, about which a question is asked;
- the **data-producing protocol**, which selects and measures units;
- the **observation law**, which is the mathematical distribution induced by that protocol under a specified state.

An elegant law for the third level cannot repair a mismatch at the first two.

<a id="section-23-worked-experiment-independent-bernoulli-observations"></a>
### Worked experiment: independent Bernoulli observations {#section-25-worked-experiment-independent-bernoulli-observations}

For $n$ independent binary observations with success probability $p$, take

$X={0,1}^n$, $\\Theta =[0,1]$,

and

$P_p(X=x)=p^{\\sum x_i}(1-p)^{n-\\sum x_i}$.

This formula contains both identical marginals and independence. If one binary response per household is sampled but households were selected with unequal probabilities, or if outcomes share a latent condition, the displayed experiment need not describe the observations.

<a id="section-35-worked-experiment-randomised-treatment-assignment"></a>
### Worked experiment: randomised treatment assignment {#section-37-worked-experiment-randomised-treatment-assignment}

There are $N$ fixed units. Exactly $m$ treatment labels are assigned uniformly among the $\\binom{N}{m}$ possible allocations. Potential responses $Y_i(1),Y_i(0)$ are treated as fixed for this design-based experiment; randomness comes from the assignment vector $Z$.

The observed response is

$Y_i^obs=Z_iY_i(1)+(1-Z_i)Y_i(0)$.

Here the parameter may be the entire finite table of potential responses. The observation law is induced by randomisation, not by assuming the units are iid draws from a superpopulation. A superpopulation model may be added, but it is a different layer.

<a id="section-45-2-the-observation-map-records-what-the-instrument-prese"></a>
## 2. The observation map records what the instrument preserves {#section-47-2-the-observation-map-records-what-the-instrument-prese}

Often a latent object $W$ exists but the recorded data are

$X=h(W,R)$,

where $R$ represents measurement noise, censoring, rounding, or randomised reporting. The law of $X$ is the pushforward of the joint law of $(W,R)$ through $h$.

Inference can use only distinctions preserved by this observation map. If $h(w)=|w|$, sign information is lost. If a device reports only whether a concentration exceeds a detection limit, exact sub-threshold values are not observed. Treating the recorded value as though it were the latent value changes the experiment.

<a id="section-55-censoring-is-not-deletion"></a>
### Censoring is not deletion {#section-57-censoring-is-not-deletion}

Let latent event time be $T$ and censoring time $C$. The observation is

$X=(\\min(T,C), \\Delta )$, where $\\Delta =1_{T\\le C}$.

Keeping only $\\min(T,C)$ discards the indicator that says whether the recorded time is an event or a censoring time. Dropping censored units altogether selects observations according to an outcome-related process. A valid likelihood must describe the actual pair and the assumptions relating $T$ and $C$.

<a id="section-63-3-sampling-design-determines-the-route-to-a-target"></a>
## 3. Sampling design determines the route to a target {#section-65-3-sampling-design-determines-the-route-to-a-target}

Suppose a finite population contains values $y_1,\\dots,y_N$. Under simple random sampling without replacement of $n$ units, the sample set is uniform among $n$-subsets. The finite-population mean

\\[\\bar{y}_N=N^{-1}\\sum _{i=1}^N y_i\\]

is fixed, while the sample mean is random through the selected indices.

Under unequal-probability sampling with inclusion probabilities $\\pi _i$, an unweighted mean generally targets the distribution of sampled units rather than the population mean. Design weights or a model for selection may be required. The observed values alone do not reveal the missing inclusion mechanism.

<a id="section-73-selection-changes-a-distribution"></a>
### Selection changes a distribution {#section-75-selection-changes-a-distribution}

Let $S$ indicate inclusion and $Y$ be a response. The observed response law is

$P(Y\\in B|S=1)$,

not automatically $P(Y\\in B)$. They agree if selection is independent of $Y$ under the relevant law, but that is a model or design property. A large selected sample estimates the selected distribution precisely; it need not estimate the target distribution accurately.

This separates **sampling variability** from **selection bias**. Increasing $n$ reduces the former under suitable designs but does not force the latter toward zero.

<a id="section-83-4-assignment-sampling-and-measurement-answer-different-"></a>
## 4. Assignment, sampling, and measurement answer different questions {#section-85-4-assignment-sampling-and-measurement-answer-different-}

Random sampling supports generalisation from sampled units to a target population under the design. Random assignment supports comparison of treatment regimes within assigned units by breaking systematic association between assignment and potential responses. Blinding and measurement protocols address yet another bias pathway.

None implies the others. A randomised trial on a convenience sample can support an internally calibrated treatment contrast for participating units while leaving population transport uncertain. A random population sample with no random treatment assignment supports descriptive generalisation but not an unconfounded causal effect without additional assumptions.

<a id="section-89-units-and-interference"></a>
### Units and interference {#section-91-units-and-interference}

If one unit's outcome can depend on other units' assignments, the observation law must specify that interference. Writing potential outcomes as only $Y_i(1),Y_i(0)$ assumes no relevant versions of treatment and no cross-unit effects. In a network or household experiment, assignment vectors rather than individual labels may be the appropriate treatment states.

<a id="section-93-5-the-iid-model-is-useful-and-strong"></a>
## 5. The iid model is useful and strong {#section-95-5-the-iid-model-is-useful-and-strong}

The statement

\\[X_1,\\dots,X_n iid\\sim P_\\theta \\]

asserts two things: each observation has marginal law $P_\\theta $, and the joint law is the product $P_\\theta ^n$. It implies exchangeability but not the reverse. It excludes temporal dependence, clustering, changing measurement conditions, and most adaptive sampling.

An iid model can be a useful approximation. Its legitimacy depends on the procedure and claim. Mild dependence may leave a point estimator approximately stable while badly understating its uncertainty. A cluster sample with many observations per cluster can contain far less independent information than its row count suggests.

<a id="section-103-conditional-iid-and-mixtures"></a>
### Conditional iid and mixtures {#section-105-conditional-iid-and-mixtures}

Measurements may be iid conditional on a latent group effect $G$ but dependent marginally. For example, if

\\[X_i|G iid\\sim Bernoulli(G)\\]

and $G$ varies between groups, then observations within a group share the same random success propensity. Treating them as marginally independent repeats evidence about $G$.

<a id="section-111-6-dominated-experiments-prepare-likelihood-theory"></a>
## 6. Dominated experiments prepare likelihood theory {#section-113-6-dominated-experiments-prepare-likelihood-theory}

**Optional advanced formulation.** Constructing general Radon–Nikodym densities on arbitrary measurable spaces uses measure-theoretic integration. For the main calculations here, a stated count mass or Lebesgue density is enough; the finite and elementary density examples do not require proving that general existence theorem.

An experiment is **dominated** if one sigma-finite measure $\\mu $ exists such that every $P_\\theta $ has a density or mass $f_\\theta =dP_\\theta /d\\mu $. Then probabilities can be written

$P_\\theta (X\\in B)=\\int _B f_\\theta (x)d\\mu (x)$.

Discrete models are dominated by counting measure; many continuous models are dominated by Lebesgue measure. A common dominating measure lets likelihoods be compared consistently. The choice of $\\mu $ is not unique. Replacing it by an equivalent dominating measure multiplies every $f_\\theta (x)$ by the same positive data-dependent factor where the Radon–Nikodym derivatives are defined. This invariance is almost everywhere; changing a density's arbitrary value on a common null set has no probabilistic meaning.

Not all useful experiments are conveniently dominated. The abstract family-of-measures definition comes first so likelihood notation is recognised as a special representation rather than the definition of statistics.

<a id="section-123-7-nuisance-parameters-are-part-of-the-experiment"></a>
## 7. Nuisance parameters are part of the experiment {#section-125-7-nuisance-parameters-are-part-of-the-experiment}

Partition $\\theta =(\\psi ,\\lambda )$, where $\\psi $ is the feature of interest and $\\lambda $ is a nuisance parameter. Calling $\\lambda $ a nuisance does not make it known or irrelevant. Its uncertainty can change the sampling distribution of every procedure for $\\psi $.

For normal observations with unknown mean and variance, interest may lie in $\\mu $, but $\\sigma ^{2}$ determines the scale of the sample mean. Replacing unknown $\\sigma $ by an estimate changes an exact normal pivot into a Student t pivot under normality. Ignoring the nuisance parameter would report the wrong finite-sample law.

A nuisance parameter can be finite-dimensional, infinite-dimensional, or structural. Missingness probabilities, baseline hazards, error distributions, and selection laws may all be nuisance components whose treatment controls the validity of the main conclusion.

<a id="section-131-8-stopping-and-preprocessing-belong-in-the-protocol"></a>
## 8. Stopping and preprocessing belong in the protocol {#section-133-8-stopping-and-preprocessing-belong-in-the-protocol}

A fixed-sample experiment and a sequential experiment can yield proportional likelihoods for the same observed counts while having different repeated-sampling calibrations. A test promised to reject with probability at most $\\alpha $ under a fixed design does not automatically retain that guarantee after continual unadjusted monitoring.

Similarly, choosing transformations, outcomes, subgroups, or models after examining the data creates a compound procedure. Its observation-to-decision map includes the selection step. Calibration that treats the selected analysis as pre-specified describes a different experiment.

This does not forbid exploration. It requires honest labels and either fresh confirmatory data, a design-aware adjustment, or a guarantee that incorporates the adaptive rule.

<a id="section-139-9-an-experiment-audit"></a>
## 9. An experiment audit {#section-141-9-an-experiment-audit}

Before deriving an estimator or test, record:

1. the target population or finite collection;
2. the observational unit and the unit of independent randomisation, if any;
3. the sampling, assignment, measurement, censoring, and stopping rules;
4. the recorded data space and any latent-to-observed map;
5. the family of candidate observation laws;
6. parameter components of interest and nuisance components;
7. independence, exchangeability, positivity, and missingness assumptions;
8. which steps were chosen before and after seeing data;
9. the scope of repetition underlying each probability guarantee.

The audit is mathematical content: it determines what probability measure appears in every later expectation.

<a id="section-155-10-exercises-with-complete-solutions"></a>
## 12. Development: calculate the law of the recorded experiment {#section-671-12-development-calculate-the-law-of-the-recorded-experi}

An experiment ledger becomes useful when it lets us calculate the probability of an actual record. Start with a latent variable $W$ taking finitely many values, with probabilities $p_\\theta(w)$. A deterministic instrument records $X=h(W)$. For each possible record $x$, collect its **fibre**, the set of latent values mapped to that record. Then

$$P_\\theta(X=x)=\\sum_{w:h(w)=x}p_\\theta(w).$$

This follows because the events $\\{W=w\\}$ in a fibre are disjoint. The probability is a sum over possibilities the instrument cannot distinguish. It is not the probability of a convenient representative of the fibre. The same principle gives an integral over a measurable fibre in a continuous model; when a fibre itself has probability zero, one must derive an appropriate density rather than interpret that integral as a point probability.

For example, let $W$ be a nonnegative integer count with probabilities $p_\\theta(0),p_\\theta(1),\\ldots$. A device reports $X=0$ for counts zero or one, and reports $X=1$ for counts at least two. The recorded success probability is $1-p_\\theta(0)-p_\\theta(1)$. Under a Poisson latent law this becomes $1-e^{-\\theta}(1+\\theta)$ for $\\theta\\geq0$. Observing $X=1$ does not tell us that $W=2$. It tells us that the latent count lies anywhere in the recorded upper category. A later likelihood must use the entire upper-category probability.

Randomised measurement fits the same calculation. Specify numbers $K(x\\mid w)\\geq0$ summing to one over $x$ for every $w$, and suppose that this conditional measurement law is known and does not otherwise depend on $\\theta$. Its induced observation probabilities are

$$q_\\theta(x)=\\sum_w K(x\\mid w)p_\\theta(w).$$

The matrix $K$ describes an instrument, not a prior on the state. For a binary truth and a binary assay, its two columns are the false-positive and sensitivity mechanisms developed in the next chapter. If an instrument calibration changes with the target population, its changing parameters belong in the model. Treating the old matrix as known would assert a transport assumption that the new data have not supplied.

This calculation also proves a useful information boundary. If $p_\\theta(w)=p_{\\theta'}(w)$ for every latent value, applying the same $K$ produces the same recorded law. More strongly, in finite spaces,

$$\\sum_x|q_\\theta(x)-q_{\\theta'}(x)|
 \\leq\\sum_w|p_\\theta(w)-p_{\\theta'}(w)|.$$

To prove it, substitute the formula for $q$, apply the triangle inequality inside the sum over $x$, and interchange two finite sums. The factor multiplying each $|p_\\theta(w)-p_{\\theta'}(w)|$ is $\\sum_xK(x\\mid w)=1$. Thus a fixed measurement channel cannot increase this particular distance between two candidate laws. This is a proved finite statement; it is not a claim that every practical measurement is useless. A better channel can preserve distinctions that a worse one destroys.

A common error reverses the arrows. A denoising algorithm may reconstruct a plausible latent value from $x$, but its output is still a function of the same recorded data, perhaps with independent randomisation. If two states have identical recorded laws, the algorithm has identical output laws under those states. Any preference between their reconstructions came from extra assumptions. Keep a latent target and a recorded-data procedure in separate columns of the ledger: computation can exploit preserved information but cannot make an erased distinction reappear by itself.

<a id="section-694-13-development-derive-an-event-and-censoring-likelihood"></a>
## 13. Development: derive an event-and-censoring likelihood {#section-696-13-development-derive-an-event-and-censoring-likelihood}

**Worked example 1.1.**

A censoring likelihood can be derived before choosing an estimator. Suppose an event time $T$ and censoring time $C$ are independent, nonnegative, absolutely continuous random variables. Write their densities as $f_T,f_C$ and survival functions as $S_T(t)=P(T>t)$ and $S_C(t)=P(C>t)$. Assume these functions describe one declared state; parameters can be inserted afterward. Absolute continuity implies $P(T=C)=0$, so the tie rule in $\\Delta=1_{\\{T\\leq C\\}}$ has no effect here.

The observation is $U=\\min(T,C)$ together with $\\Delta$. Its density is taken relative to Lebesgue measure for $u$ and counting measure on $\\{0,1\\}$. For an event record, independence gives

$$P(U\\in du,\\Delta=1)=f_T(u)S_C(u)\\,du.$$

Indeed, an event at time $u$ is observed only when censoring has not happened before it. Similarly,

$$P(U\\in du,\\Delta=0)=f_C(u)S_T(u)\\,du.$$

These two expressions are parts of a single joint density, not two alternative guesses about the same record. Their sum integrates to one when the minimum is finite almost surely. Under independence, the survival of $U$ is $S_T(u)S_C(u)$, whose negative derivative is the sum of the two displayed densities. This supplies a second check on the calculation.

Take independent exponential times with event rate $\\lambda>0$ and censoring rate $\\gamma>0$. Substituting densities and survivals gives

$$g_{\\lambda,\\gamma}(u,\\delta)
 =\\lambda^\\delta\\gamma^{1-\\delta}e^{-(\\lambda+\\gamma)u},
 \\qquad u\\geq0,\\quad\\delta\\in\\{0,1\\}.$$

For $n$ independent pairs, let $d=\\sum_i\\delta_i$ and $s=\\sum_i u_i$. The likelihood is $\\lambda^d\\gamma^{n-d}e^{-(\\lambda+\\gamma)s}$. Holding the censoring model fixed, its factor depending on $\\lambda$ is $\\lambda^d e^{-\\lambda s}$. Every observed duration enters $s$, including censored durations. A censored person contributes evidence that the event had not occurred throughout their observed exposure; dropping that person throws away this information.

There is a revealing alternative recording protocol. If the indicators are erased and only the minima remain, their density is $(\\lambda+\\gamma)e^{-(\\lambda+\\gamma)u}$. The recorded law then identifies only the sum of the two rates. Rates $(\\lambda,\\gamma)=(1,3)$ and $(2,2)$ produce the same minima law but different event-time laws. Retaining $\\Delta$ separates the rates: its event probability is $\\lambda/(\\lambda+\\gamma)$, and the minimum supplies the sum. This is identification through a better observation map, not through a larger sample from the erased record.

Administrative censoring at a fixed positive time $c$ is another experiment. Now $C=c$ has an atom, so the preceding continuous-$C$ density is inapplicable. Under an exponential event law, uncensored records have density $\\lambda e^{-\\lambda u}$ for $0\\leq u<c$ and $\\Delta=1$; the single record $(c,0)$ has probability $e^{-\\lambda c}$. Relative to a measure including that atom, the same event-rate likelihood kernel is $\\lambda^d e^{-\\lambda\\sum_i u_i}$. The agreement of kernels follows from a new derivation with the correct mixed observation space.

Independence was essential to the first derivation. In general the event-record factor contains $P(C\\geq t\\mid T=t)$, interpreted through an appropriate conditional law, rather than a marginal $S_C(t)$. Outcome-dependent censoring cannot be removed by calling it a nuisance. Likewise, rounding observed times changes density contributions into interval probabilities. The repair sequence is always the same: specify the complete recorded object, declare dependence assumptions, choose its dominating measure, and derive its law before cancelling any parameter-free factors.

<a id="section-724-14-development-shared-conditions-and-the-information-in"></a>
## 14. Development: shared conditions and the information in a mean {#section-726-14-development-shared-conditions-and-the-information-in}

**Worked example 1.2.**

The conditional-iid example in Section 5 permits an exact variance audit. Let $G\\in[0,1]$ be random, and conditional on $G$ let $X_1,\\ldots,X_n$ be independent Bernoulli variables with success probability $G$. Put $\\mu=E[G]$ and $v=\\operatorname{Var}(G)$. Since every $X_i$ is binary and $E[X_i]=E[E(X_i\\mid G)]=\\mu$, its marginal variance is $\\mu(1-\\mu)$. This is not generally $E[G(1-G)]$: the latter omits between-group variation.

For distinct observations, conditional independence gives $E[X_iX_j\\mid G]=G^2$. Consequently

$$\\operatorname{Cov}(X_i,X_j)=E[G^2]-E[G]^2=v.$$

Expanding the variance of the mean now yields

$$\\operatorname{Var}(\\bar X)
 =\\frac{\\mu(1-\\mu)}{n}+\\frac{n-1}{n}v
 =v+\\frac{\\mu(1-\\mu)-v}{n}.$$

An independent derivation conditions on $G$. The conditional mean of $\\bar X$ is $G$, while its conditional variance is $G(1-G)/n$. The variance decomposition therefore gives $v+E[G(1-G)]/n$. Expanding $E[G(1-G)]=\\mu(1-\\mu)-v$ matches the previous formula. Two routes reaching the same expression make different assumptions visible: one counts covariance terms, the other separates uncertainty within and between groups.

The limiting obstruction has a concrete meaning. Increasing the number of observations in one group learns that group's $G$ increasingly well. It does not provide increasingly many independent draws from the distribution of group conditions. In fact $\\bar X-G$ has mean square $E[G(1-G)]/n\\leq1/(4n)$, so Markov's inequality applied to its square gives

$$P(|\\bar X-G|>\\varepsilon)\\leq\\frac{1}{4n\\varepsilon^2}.$$

Thus $\\bar X$ converges in probability to the random group condition $G$. Unless $G$ is constant, it cannot also consistently estimate the fixed across-group mean $\\mu$ from this one growing group. The persistent variance term $v$ is a feature of the experiment, not a computational flaw.

For a fully specified example, let $G$ equal $1/4$ or $3/4$, each with probability $1/2$. Then $\\mu=1/2$, $v=1/16$, and

$$\\operatorname{Var}(\\bar X)=\\frac1{16}+\\frac3{16n}.$$

With $n=16$ the variance is $19/256$. Sixteen independent fair Bernoulli observations instead give variance $1/64=4/256$. Both protocols have sixteen rows and the same one-row marginal law. Their mean variances differ because their joint laws differ. No inspection of a single row can establish which variance is appropriate.

Now sample $m$ independent groups, each with its own independent latent condition from the same distribution, and record $k$ observations in each group. Assume conditional independence within groups and independence of the complete groups. The overall mean is the average of the $m$ group means, so

$$\\operatorname{Var}(\\bar X_{\\mathrm{all}})
 =\\frac1m\\left[v+\\frac{\\mu(1-\\mu)-v}{k}\\right].$$

For $0<\\mu<1$, define $\\rho=v/[\\mu(1-\\mu)]$. The variance is $\\mu(1-\\mu)[1+(k-1)\\rho]/(mk)$. The bracket is the variance inflation relative to $mk$ independent observations with the same marginal law. It is derived for this particular equal-size model; it is not a universal correction for every clustered dataset.

The formula guides a scientific design question without pretending to solve its costs. When $v>0$, adding independent groups reduces both terms through $m$, while adding rows inside an existing group only reduces the within-group component. Actual recruitment costs, unequal group sizes and different target populations require their own calculation. The lesson is to name the independent replication unit before treating a row count as an information count.

<a id="section-763-15-development-selection-stopping-and-the-full-procedur"></a>
## 15. Development: selection, stopping and the full procedure {#section-765-15-development-selection-stopping-and-the-full-procedur}

A selected sample has an observation law that can be calculated directly. Suppose $Y$ is binary with population prevalence $p$, and selection probabilities are $a=P(S=1\\mid Y=1)$ and $b=P(S=1\\mid Y=0)$. When $ap+b(1-p)>0$, Bayes' rule gives

$$P(Y=1\\mid S=1)=\\frac{ap}{ap+b(1-p)}.$$

For $p=1/5$, $a=1$ and $b=1/4$, the selected success probability is $1/2$. If only selected outcomes are recorded, infinitely many independent selected observations would learn $1/2$, not automatically the population prevalence $1/5$. Learning a selected law accurately and learning the intended population law are distinct achievements.

What extra information repairs the mismatch depends on the protocol. Known positive selection rates permit inversion of the displayed relation. Recording nonselected units' outcomes would directly change the observation space. Assuming $a=b$ also changes the model, but it is an assumption about an unobserved selection relationship unless independently justified. A sample-size calculation cannot choose among these repairs.

Stopping has a similarly concrete effect. Consider fair-coin observations, and a rule that declares an alarm whenever a head is seen. With one preassigned look the alarm probability is $1/2$. With up to two tosses, stopping at the first head, the possible recorded paths are $H$, $TH$ and $TT$, with probabilities $1/2$, $1/4$ and $1/4$. The alarm event is now $\\{H,TH\\}$ and has probability $3/4$. This elementary example concerns an alarm rule rather than a conventional 5% test, but it exposes the same error: a guarantee at a fixed look does not give the probability of ever crossing across several looks.

For an unknown head probability $p$, these three path probabilities are $p$, $(1-p)p$ and $(1-p)^2$. A fixed-two-toss experiment recording the total count instead has probabilities $(1-p)^2$, $2p(1-p)$ and $p^2$ for counts zero, one and two. The stopped record $TH$ and fixed count one have likelihoods proportional in $p$, with factor two. Yet the experiments have different observation spaces and different sets of records over which an error event is accumulated. Likelihood proportionality for one record does not by itself settle a repeated-sampling guarantee for a complete procedure.

Adaptive preprocessing can be viewed in the same way. Let $A(X)$ select an analysis and let $D_a(X)$ be the final decision using analysis $a$. The actual decision is $D_{A(X)}(X)$. Its rejection event is the union, over available analyses, of $\\{A(X)=a,\\ D_a(X)=1\\}$. The selection condition belongs inside each probability. A calculation for one prechosen $D_a$ has omitted it.

Independent confirmatory data provide a useful special repair. If selection uses training data $X$ and testing uses independent data $Y$, suppose for every fixed selected choice $a$ the test on $Y$ has null rejection probability at most $\\alpha$ under the relevant common null. Conditional on $X$, the choice $A(X)$ is fixed and $Y$ retains its stated null law. Therefore $P(D_{A(X)}(Y)=1\\mid X)\\leq\\alpha$, and averaging preserves the bound. The independence and the guarantee for every eligible choice are the proof's essential inputs; simply renaming a reused dataset a holdout does not establish them.

These examples suggest a disciplined reading of an experiment ledger. Specify what is repeated, what is held fixed and what is conditioned on. A finite-population design conditions on the outcome schedule; a superpopulation model randomises it. A validation protocol may condition on selected strata. A stopping rule randomises sample size. Each can be legitimate, but the same symbol $E$ must not silently switch among their probability laws. Later chapters compare estimators and tests only after this underlying repetition has been made explicit.

<a id="section-783-16-development-connect-a-protocol-audit-to-the-next-inf"></a>
## 16. Development: connect a protocol audit to the next inference step {#section-785-16-development-connect-a-protocol-audit-to-the-next-inf}

A good audit is short enough to use and precise enough to falsify. Begin with a sentence describing a possible record: “The data contain a minimum time and an event indicator for each independently enrolled unit, with censoring administrative at a fixed date.” That sentence rules out a likelihood for uncensored event times alone. Next state the target: perhaps an event rate under an exponential model, or a population survival probability without that model. These targets need different assumptions even when they use the same recorded table.

Then identify which parts of the probability law are known through design. A uniformly sampled subset has a known selection distribution conditional on the population values. An assay's sensitivity is not known merely because its manufacturer gives a number; using that number requires a specified calibration population and a transport argument. A random treatment allocation has a known distribution while compliance and measurement may remain uncertain. Keeping those components separate prevents a precise design guarantee from being misread as a guarantee about every scientific assumption.

Finally write the promised output as a conditional statement. For the shared-condition model, a variance formula is exact under the specified latent mixture and group independence. For the censoring model, cancelling the censoring factor is justified under the stated independent mechanism. For a data split, the conditional size bound requires independent confirmation and a uniformly valid family of fixed-choice tests. The conditions tell a reader where to look when a conclusion fails.

There is no requirement to model every detail of the universe. A useful model isolates features relevant to a declared target and procedure. Its adequacy is a substantive question, whereas deriving consequences from it is a mathematical one. The next chapter first asks whether the recorded law could determine the target even with perfect knowledge of that law. Passing that identification question is necessary before finer calculations of estimation error can answer the intended scientific question.

<a id="section-793-17-development-a-finite-sampling-law-and-its-variance"></a>
## 17. Development: a finite sampling law and its variance {#section-795-17-development-a-finite-sampling-law-and-its-variance}

**Worked example 1.3.**

Sampling without replacement illustrates how a known design replaces an independence assumption. Fix $N\\geq2$ numbers $y_1,\\ldots,y_N$, and select uniformly one of the subsets of size $n$, where $1\\leq n\\leq N$. Let $I_i$ indicate inclusion and $\\bar y_N=N^{-1}\\sum_i y_i$. Symmetry gives $E[I_i]=n/N$. For distinct $i,j$, counting subsets containing both units gives

$$E[I_iI_j]=\\frac{\\binom{N-2}{n-2}}{\\binom Nn}
 =\\frac{n(n-1)}{N(N-1)}$$

when $n\\geq2$, and the same final expression is zero when $n=1$. Hence inclusion indicators have covariance $-n(N-n)/[N^2(N-1)]$. Selecting one unit leaves slightly less room for selecting another. Their negative dependence is part of the design.

Put $d_i=y_i-\\bar y_N$, so $\\sum_i d_i=0$. The sample-mean error is $n^{-1}\\sum_i I_i d_i$, and its mean is zero. Expanding its second moment,

$$\\operatorname{Var}(\\bar y_{\\mathrm{sample}})
 =\\frac1{n^2}\\left[
  \\frac nN\\sum_i d_i^2+
  \\frac{n(n-1)}{N(N-1)}\\sum_{i\\ne j}d_i d_j
 \\right].$$

Because $0=(\\sum_i d_i)^2=\\sum_i d_i^2+\\sum_{i\\ne j}d_i d_j$, the second sum is $-\\sum_i d_i^2$. Defining $S_N^2=(N-1)^{-1}\\sum_i d_i^2$ simplifies the expression to

$$\\operatorname{Var}(\\bar y_{\\mathrm{sample}})
 =\\left(1-\\frac nN\\right)\\frac{S_N^2}{n}.$$

This is an exact design identity for a fixed finite population. It requires neither normally distributed values nor a random population model. At $n=N$, the variance is zero because the census mean equals the fixed target. At $n=1$, it is the variance of one uniformly selected population value. Both endpoints check the formula against the actual experiment.

The factor $1-n/N$ is not a generic correction for every dataset drawn from a finite world. Unequal inclusion probabilities, sampling with replacement and nonresponse induce other laws. In particular, if sampled units decline to respond, the respondent set need not be a uniform subset of its realised size. One must model or adjust that additional selection before applying this identity. The calculation's value is its transparency: every expectation follows from a known subset distribution, and every covariance term can be traced to a counting argument.

This design calculation and the previous latent-group calculation point in opposite directions relative to a naive product law. Without-replacement indicators are negatively dependent; shared propensities produce positive outcome covariance. Neither “dependence always inflates variance” nor “large samples are approximately iid” is an adequate replacement for deriving the joint law relevant to the target.

<a id="section-823-18-optional-practice-extensions"></a>

## Summary

<a id="section-893-11-summary-and-forward-route"></a>
A statistical experiment is a family of observation laws induced by a protocol. Sampling, assignment, measurement, censoring, stopping, and preprocessing determine the relevant repeated worlds. iid is a strong product-law declaration, nuisance parameters remain part of the law, and dominated experiments provide the representation later used for likelihood.

The next chapter asks a different question: even if the experiment is correctly specified, which feature of its unknown state is the intended target, and can the observable law identify that feature at all?

## Exercises {#section-157-10-exercises-with-complete-solutions}

<a id="section-157-1-identify-the-experiment-components"></a>
### 1. Identify the experiment components {#section-159-1-identify-the-experiment-components}

**Exercise 1.1**

Ten independent coin tosses have unknown head probability $p$. State the observation space, parameter space, and law.

<details>
<summary>Hint 1</summary>

State what a complete data record contains before naming its law.

</details>
<details>
<summary>Hint 2</summary>

The data are ten ordered bits; separate the common marginal parameter from joint factorisation.

</details>
<details>
<summary>Solution</summary>

**Solution.** The observation space is \${0,1}^{10}$, the parameter space is $[0,1]$, and

$P_p(X=x)=p^{\\sum x_i}(1-p)^{10-\\sum x_i}$.

The product form is the independence assumption; the common $p$ is the identical-marginal assumption.

</details>

<a id="section-186-2-data-are-not-random-after-observation"></a>
### 2. Data are not random after observation {#section-188-2-data-are-not-random-after-observation}

**Exercise 1.2**

Explain the roles of $X$ and $x$ in $P_\\theta (X\\in B)$ and a likelihood $L(\\theta ;x)$.

<details>
<summary>Hint 1</summary>

Distinguish the random observation from its realised value.

</details>
<details>
<summary>Hint 2</summary>

In a probability statement vary possible data; in a likelihood hold those data fixed.

</details>
<details>
<summary>Solution</summary>

**Solution.** $X$ is the random observation before the experiment is realised, so probability statements concern its possible values. The symbol $x$ denotes the fixed realised data. In the likelihood, $x$ is held fixed while candidate parameter values vary.

</details>

<a id="section-211-3-same-marginals-different-experiments"></a>
### 3. Same marginals, different experiments {#section-213-3-same-marginals-different-experiments}

**Exercise 1.3**

Let $X_1,X_2$ each be fair bits. Give one independent joint law and one perfectly dependent joint law.

<details>
<summary>Hint 1</summary>

Use the same fair-bit marginals in two different couplings.

</details>
<details>
<summary>Hint 2</summary>

Compare equal mass on all four pairs with mass supported only on the diagonal.

</details>
<details>
<summary>Solution</summary>

**Solution.** The independent law assigns mass $1/4$ to all four pairs. The dependent law can assign mass $1/2$ to $(0,0)$ and $(1,1)$ and zero to the other pairs. Both coordinates are marginally fair, but the observation laws differ.

</details>

<a id="section-236-4-a-coarse-observation-map"></a>
### 4. A coarse observation map {#section-238-4-a-coarse-observation-map}

**Exercise 1.4**

If latent $W\\sim Normal(\\mu ,1)$ but only $X=1_{W>0}$ is recorded, find the observable success probability.

<details>
<summary>Hint 1</summary>

Translate the recorded bit into an event for the latent normal measurement.

</details>
<details>
<summary>Hint 2</summary>

Standardise the zero threshold and use symmetry of the standard normal CDF.

</details>
<details>
<summary>Solution</summary>

**Solution.** $P_\\mu (X=1)=P(W>0)=P(Z>-\\mu )=\\Phi (\\mu )$, where $Z$ is standard normal. The observation is Bernoulli with parameter $\\Phi (\\mu )$; the exact magnitude of $W$ has been discarded.

</details>

<a id="section-261-5-rounding-creates-intervals"></a>
### 5. Rounding creates intervals {#section-263-5-rounding-creates-intervals}

**Exercise 1.5**

A device rounds a positive measurement to the nearest integer. What event corresponds to observing integer $k$, away from the zero boundary?

<details>
<summary>Hint 1</summary>

Write the inverse image of a rounded value under the instrument map.

</details>
<details>
<summary>Hint 2</summary>

The record corresponds to an interval with a declared endpoint tie convention.

</details>
<details>
<summary>Solution</summary>

**Solution.** Under the usual half-open convention it is \${k-1/2\\le W<k+1/2}$. Its probability is an interval integral under the latent law, not the density evaluated at $k$. The tie convention must be specified if endpoints can have mass.

</details>

<a id="section-286-6-selection-law"></a>
### 6. Selection law {#section-288-6-selection-law}

**Exercise 1.6**

Show that if $S$ is independent of $Y$ and $P(S=1)>0$, then the selected and target laws of $Y$ agree.

<details>
<summary>Hint 1</summary>

Start with the joint event containing both selection and the response event.

</details>
<details>
<summary>Hint 2</summary>

Use independence before dividing by the positive selection probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** For every measurable $B$, independence gives

$P(Y\\in B,S=1)=P(Y\\in B)P(S=1)$.

Divide by $P(S=1)$ to obtain $P(Y\\in B|S=1)=P(Y\\in B)$.

</details>

<a id="section-315-7-large-samples-do-not-erase-selection"></a>
### 7. Large samples do not erase selection {#section-317-7-large-samples-do-not-erase-selection}

**Exercise 1.7**

Suppose only units with $Y=1$ are sampled from a binary population containing both zeros and ones. What does the sample mean approach as sample size grows?

<details>
<summary>Hint 1</summary>

Describe every value that the selection rule allows into the sample.

</details>
<details>
<summary>Hint 2</summary>

A sample mean can identify a selected target while missing the population target.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every observed response equals one, so the sample mean is identically one at every size. It estimates the selected-population mean perfectly but is biased for any target population whose success proportion is below one.

</details>

<a id="section-340-8-random-sampling-versus-assignment"></a>
### 8. Random sampling versus assignment {#section-342-8-random-sampling-versus-assignment}

**Exercise 1.8**

A simple random sample receives treatments chosen by each participant. Which design feature is present, and which is absent?

<details>
<summary>Hint 1</summary>

Separate selection of study units from allocation of treatment.

</details>
<details>
<summary>Hint 2</summary>

One design feature concerns population representation and the other causal comparison.

</details>
<details>
<summary>Solution</summary>

**Solution.** Random sampling is present and can support population description under the sampling design. Random treatment assignment is absent, so treatment groups may differ in pre-treatment causes of the outcome. A causal comparison needs additional assumptions or a different design.

</details>

<a id="section-365-9-random-assignment-versus-sampling"></a>
### 9. Random assignment versus sampling {#section-367-9-random-assignment-versus-sampling}

**Exercise 1.9**

Volunteers are randomly assigned to two treatments. What does randomisation secure, and what does it not secure?

<details>
<summary>Hint 1</summary>

Condition on the volunteer group when describing the lottery.

</details>
<details>
<summary>Hint 2</summary>

A known treatment allocation law does not identify how volunteers represent a wider population.

</details>
<details>
<summary>Solution</summary>

**Solution.** It secures a known assignment law and balances potential outcomes in repeated assignments for the volunteer group, supporting an internally calibrated treatment contrast. It does not make volunteers a random sample of a wider population, so transport requires further assumptions.

</details>

<a id="section-390-10-finite-population-randomness"></a>
### 10. Finite-population randomness {#section-392-10-finite-population-randomness}

**Exercise 1.10**

In a randomisation experiment with fixed potential responses, what is random?

<details>
<summary>Hint 1</summary>

Keep the potential-outcome schedule fixed in the design-based experiment.

</details>
<details>
<summary>Hint 2</summary>

The allocation vector determines which fixed response is revealed.

</details>
<details>
<summary>Solution</summary>

**Solution.** The treatment allocation is random, and observed responses change with it because each unit reveals the potential response under its assigned treatment. The finite table of potential responses is fixed in the design-based analysis.

</details>

<a id="section-415-11-cluster-dependence"></a>
### 11. Cluster dependence {#section-417-11-cluster-dependence}

**Exercise 1.11**

Why can 100 observations from two clusters contain less independent information than 100 observations from 100 clusters?

<details>
<summary>Hint 1</summary>

Identify the shared latent condition within each cluster.

</details>
<details>
<summary>Hint 2</summary>

Equal row counts need not mean equal numbers of independent groups.

</details>
<details>
<summary>Solution</summary>

**Solution.** Units in a cluster may share latent conditions, making within-cluster outcomes correlated. Additional units from the same cluster partly repeat information about that shared condition. Treating all rows as independent can understate uncertainty even when marginal distributions look identical.

</details>

<a id="section-440-12-exchangeability-does-not-imply-iid"></a>
### 12. Exchangeability does not imply iid {#section-442-12-exchangeability-does-not-imply-iid}

**Exercise 1.12**

Let $G$ be a random success probability and, conditional on $G$, let $X_i$ be iid Bernoulli($G$). Explain why the sequence is exchangeable but generally not independent marginally.

<details>
<summary>Hint 1</summary>

Condition on the latent propensity to obtain the joint binary law.

</details>
<details>
<summary>Hint 2</summary>

Compare its second moment with the square of its mean after averaging over the propensity.

</details>
<details>
<summary>Solution</summary>

**Solution.** Conditional joint probabilities depend only on the number of successes, and averaging over $G$ preserves invariance under permutations, so the observations are exchangeable. Marginally,

$P(X_1=1,X_2=1)=E[G^{2}]$,

whereas $P(X_1=1)P(X_2=1)=E[G]^{2}$. They differ when $Var(G)>0$.

</details>

<a id="section-469-13-a-dominating-measure"></a>
### 13. A dominating measure {#section-471-13-a-dominating-measure}

**Exercise 1.13**

What common dominating measure works for a family of Poisson count laws?

<details>
<summary>Hint 1</summary>

Use a measure assigning mass one to each nonnegative integer.

</details>
<details>
<summary>Hint 2</summary>

Every count probability can then be represented as a density with respect to that measure.

</details>
<details>
<summary>Solution</summary>

**Solution.** Counting measure on the nonnegative integers dominates every Poisson law. The density relative to it is the mass function $e^{-\\lambda }\\lambda ^k/k!$.

</details>

<a id="section-494-14-nuisance-scale"></a>
### 14. Nuisance scale {#section-496-14-nuisance-scale}

**Exercise 1.14**

For iid normal observations with interest in $\\mu $ and unknown $\\sigma $, explain why $\\sigma $ cannot simply be omitted.

<details>
<summary>Hint 1</summary>

Write the sample mean's variance under the joint normal model.

</details>
<details>
<summary>Hint 2</summary>

The nuisance scale still enters uncertainty for the mean.

</details>
<details>
<summary>Solution</summary>

**Solution.** The distribution of $\\bar{X}-\\mu $ has variance $\\sigma ^{2}/n$. Any interval width or test cutoff for $\\mu $ depends on that unknown scale. Estimating it changes the reference distribution and introduces degrees of freedom.

</details>

<a id="section-519-15-censoring-record"></a>
### 15. Censoring record {#section-521-15-censoring-record}

**Exercise 1.15**

If an event time is censored at time $c$, why must the indicator $\\Delta $ accompany the recorded minimum?

<details>
<summary>Hint 1</summary>

Ask what two distinct mechanisms can produce the same recorded minimum.

</details>
<details>
<summary>Hint 2</summary>

An event record and a censoring record contribute different law factors.

</details>
<details>
<summary>Solution</summary>

**Solution.** The same numerical time could represent an observed event or the last known event-free time. These outcomes contribute different probabilities or density-survival factors. Without $\\Delta $, the observation map merges distinct evidence.

</details>

<a id="section-544-16-stopping-rule-boundary"></a>
### 16. Stopping-rule boundary {#section-546-16-stopping-rule-boundary}

**Exercise 1.16**

A researcher tests after every new observation using an unadjusted fixed-sample 5% cutoff and stops at the first rejection. Why is the fixed-sample size guarantee inapplicable?

<details>
<summary>Hint 1</summary>

Write the actual rejection event across all permitted looks.

</details>
<details>
<summary>Hint 2</summary>

A fixed-look guarantee concerns one event, while stopping concerns a union of crossings.

</details>
<details>
<summary>Solution</summary>

**Solution.** The decision rule is now the union of rejection events over many looks. Its null rejection probability is the chance of crossing at any look, not the chance at one pre-specified look. Repeated opportunities can make that probability exceed 5%; the sequential rule needs its own calibration.

</details>

<a id="section-569-17-adaptive-preprocessing"></a>
### 17. Adaptive preprocessing {#section-571-17-adaptive-preprocessing}

**Exercise 1.17**

An outcome transformation is selected because it gives the smallest p-value, then analysed as if pre-specified. Identify the omitted part of the procedure.

<details>
<summary>Hint 1</summary>

Include the chosen transformation as a function of the data.

</details>
<details>
<summary>Hint 2</summary>

Calibration for one fixed transformation omits the selection step.

</details>
<details>
<summary>Solution</summary>

**Solution.** The selection among transformations is data-dependent and belongs to the observation-to-decision map. Calibration conditional on one fixed transformation ignores the multiple search paths. A valid guarantee must include the selection rule or use independent confirmatory data.

</details>

<a id="section-594-18-moving-units-of-analysis"></a>
### 18. Moving units of analysis {#section-596-18-moving-units-of-analysis}

**Exercise 1.18**

Students are randomised by classroom but analysed as though individual assignments were independent. What mismatch occurs?

<details>
<summary>Hint 1</summary>

Identify which complete allocations the classroom lottery can actually produce.

</details>
<details>
<summary>Hint 2</summary>

An independent-student assignment law contains allocations absent from that design.

</details>
<details>
<summary>Solution</summary>

**Solution.** The randomisation unit is the classroom, not the student. Assignments and possibly outcomes are dependent within classrooms. An individual-level product law invents randomisation that did not occur and usually understates uncertainty.

</details>

<a id="section-619-19-parameterisation-is-not-the-law"></a>
### 19. Parameterisation is not the law {#section-621-19-parameterisation-is-not-the-law}

**Exercise 1.19**

The normal location family is indexed once by $\\mu \\in R$ and once by $\\eta =2\\mu $. Are these different experiments?

<details>
<summary>Hint 1</summary>

Compare the two families of observable normal laws.

</details>
<details>
<summary>Hint 2</summary>

A one-to-one relabelling changes coordinates without adding or removing candidate laws.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The mapping $\\eta =2\\mu $ is one-to-one, and both parameterisations generate exactly the same set of observable normal laws. They label the same experiment differently, though derivatives and reported scales change coordinates.

</details>

<a id="section-644-20-write-an-experiment-audit"></a>
### 20. Write an experiment audit {#section-646-20-write-an-experiment-audit}

**Exercise 1.20**

A dataset contains app users who opted into a survey, one response per user, and a timestamp. Name four protocol facts needed before an iid population model is credible.

<details>
<summary>Hint 1</summary>

Begin with the target, unit and selection mechanism.

</details>
<details>
<summary>Hint 2</summary>

Then audit dependence, missingness, time drift and whether preprocessing followed outcome inspection.

</details>
<details>
<summary>Solution</summary>

**Solution.** Examples include the target population; opt-in and invitation mechanisms; repeat-account or household clustering; time-window and temporal drift; item nonresponse; measurement wording; bot filtering; and whether analysis choices followed data inspection. An iid model needs a defence against selection, dependence, and changing observation conditions, not merely one row per recorded user.

</details>

<a id="section-669-12-development-calculate-the-law-of-the-recorded-experi"></a>

<a id="section-825-18-optional-practice-extensions"></a>
### 21. SI-01-E21: the erased censoring indicator {#section-829-si-01-e21-the-erased-censoring-indicator}

**Exercise 1.21**

Let independent $T\\sim\\operatorname{Exponential}(\\lambda)$ and $C\\sim\\operatorname{Exponential}(\\gamma)$, with both rates positive. Compare the information in $U=\\min(T,C)$ alone with the information in $(U,\\Delta)$, where $\\Delta=1_{\\{T\\leq C\\}}$. Exhibit two distinct rate pairs with the same law for $U$, then show how the full pair's law determines both rates.


<details>
<summary>Hint 1</summary>

Use independence to calculate the minimum's exponential survival law.

</details>
<details>
<summary>Hint 2</summary>

The indicator's event probability separates the total rate into its two components.

</details>

<a id="section-847-si-01-e22-recruit-groups-or-repeated-rows"></a>
### 22. SI-01-E22: recruit groups or repeated rows {#section-849-si-01-e22-recruit-groups-or-repeated-rows}

**Exercise 1.22**

In the latent-propensity model, each group has $G=1/4$ or $3/4$ with equal probabilities. Compare the variance of an overall mean from four independent groups of four observations each with the variance from one group of sixteen observations. State which independence assumption permits the four-group calculation.


<details>
<summary>Hint 1</summary>

Compute one group's mean variance using within-group and between-group terms.

</details>
<details>
<summary>Hint 2</summary>

Only independent whole groups justify dividing that group-mean variance by the number of groups.

</details>

<a id="section-867-19-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-869-19-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-872-si-01-e21-the-erased-censoring-indicator-solution"></a>
### SI-01-E21: the erased censoring indicator — solution {#section-874-si-01-e21-the-erased-censoring-indicator-solution}

The survival of $U$ is $e^{-(\\lambda+\\gamma)u}$ for $u\\geq0$, so its law determines only $r=\\lambda+\\gamma$. Pairs $(1,3)$ and $(2,2)$ both give rate four. The full joint density is $\\lambda e^{-ru}$ on $\\Delta=1$ and $\\gamma e^{-ru}$ on $\\Delta=0$. Integrating gives $P(\\Delta=1)=\\lambda/r$. Thus the full law determines $r$ and $a=P(\\Delta=1)$, hence $\\lambda=ar$ and $\\gamma=(1-a)r$. Positivity excludes degenerate zero rates; the identification calculation assumes independent continuous exponential times.

</details>

<details>
<summary>Solution</summary>

<a id="section-881-si-01-e22-recruit-groups-or-repeated-rows-solution"></a>
### SI-01-E22: recruit groups or repeated rows — solution {#section-883-si-01-e22-recruit-groups-or-repeated-rows-solution}

Here $\\mu=1/2$ and $v=1/16$. One group's mean from $k$ observations has variance $1/16+3/(16k)$. At $k=4$ this is $7/64$. Averaging four independent group means divides that variance by four, giving $7/256$. One group of sixteen has variance $1/16+3/256=19/256$. The four complete groups must be independent, including their latent conditions and conditional observations. Independence of rows only after conditioning within a group would not by itself justify independence between groups.

</details>

<a id="section-887-sources"></a>

## Sources {#section-889-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-891-11-summary-and-forward-route"></a>
`;export{e as default};