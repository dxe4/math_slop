var e=`---
parent_id: book-principles-statistical-inference
chapter_id: estimands-identification-and-design
title: "Estimands, Identification, and Design"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Estimands, Identification, and Design {#section-1-estimands-identification-and-design}

An estimator is an algorithm; an estimand is the mathematical target. Before asking whether an estimator is unbiased, efficient, or computable, we must ask whether the observable distribution determines its target at all. **Identification** is the bridge from a question about an unknown world to a feature of the observation law.

This chapter defines estimands as functionals, proves an impossibility theorem for nonidentified targets, develops partial and weak identification, and shows how design can create information that modelling alone cannot. It depends on the experiment/protocol distinction of Chapter 1.

<a id="section-5-1-parameters-label-models-estimands-answer-questions"></a>
## 1. Parameters label models; estimands answer questions {#section-7-1-parameters-label-models-estimands-answer-questions}

Let $P={P_\\theta :\\theta \\in \\Theta }$ be an experiment. An **estimand** is a map

\\[\\tau :\\Theta \\to T\\]

into a target metric space $T$ (most often a subset of $R^k$). Often it is clearer to write $\\tau (P)$ as a functional of a probability law, especially in nonparametric models.

Examples include:

- a success probability $p$;
- a population mean $\\int x dP(x)$ when it exists;
- a quantile $\\inf{x:F(x)\\ge u}$ under a stated convention;
- a regression coefficient defined as a projection functional;
- a finite-population treatment contrast;
- a prediction risk under a target covariate distribution.

The phrase “estimate the effect” is not an estimand. It must specify units, treatment versions, outcome, time horizon, contrast, population, and intervention or observation regime.

<a id="section-24-descriptive-and-model-parameters"></a>
### Descriptive and model parameters {#section-26-descriptive-and-model-parameters}

A parameter need not be causal or mechanistic. In a misspecified normal working model, the fitted mean and variance may represent projection summaries of the true distribution. Their interpretation comes from the estimand definition, not from the names $\\mu $ and $\\sigma ^{2}$.

<a id="section-28-2-identification-means-observational-equivalence-cannot"></a>
## 2. Identification means observational equivalence cannot change the target {#section-30-2-identification-means-observational-equivalence-cannot}

Two parameter values are **observationally equivalent** when

$P_\\theta =P_{\\theta '}$.

The estimand $\\tau $ is **identifiable** on the model when

$P_\\theta =P_{\\theta '}$ implies $\\tau (\\theta )=\\tau (\\theta ')$.

Thus an identifiable estimand is constant on every equivalence class of parameter values that generate the same observation law. The whole parameter is identifiable when $\\theta \\mapsto P_\\theta $ is injective.

<a id="section-40-worked-additive-aliasing"></a>
### Worked additive aliasing {#section-42-worked-additive-aliasing}

Suppose

\\[X\\sim Normal(\\alpha +\\beta ,1)\\]

with unrestricted real $\\alpha ,\\beta $. Every pair with the same sum generates the same law. The pair $(\\alpha ,\\beta )$ is not identifiable, but $\\tau (\\alpha ,\\beta )=\\alpha +\\beta $ is identifiable. Setting $\\beta =0$ would select one representation, not learn two components from the data.

<a id="section-48-worked-loss-of-sign"></a>
### Worked loss of sign {#section-50-worked-loss-of-sign}

Let latent $W\\sim Normal(\\mu ,1)$ but observe only $X=|W|$. Since $W$ under $-\\mu $ has the same law as $-W$ under $\\mu $, and absolute value removes the sign,

$Law_\\mu (X)=Law_{-\\mu }(X)$.

Therefore $\\mu $ is not identifiable on $R$, while $|\\mu |$ is. Restricting $\\mu \\ge 0$ makes the parameterisation injective, but that restriction is substantive prior information about the model class.

<a id="section-56-3-nonidentification-forbids-consistent-estimation"></a>
## 3. Nonidentification forbids consistent estimation {#section-58-3-nonidentification-forbids-consistent-estimation}

Identification is not a large-sample technicality.

**Theorem 2.2 (Impossibility).** Suppose $P_\\theta =P_{\\theta '}$ but $\\tau (\\theta )\\ne \\tau (\\theta ')$, with $\\tau $ taking values in a metric space. Suppose also that the complete $n$-observation laws agree under $\\theta $ and $\\theta '$ for every $n$; iid repetition of the same one-observation law is the standard case. No sequence of estimators $T_n$ based on those observations can converge in probability to $\\tau (\\theta )$ under $\\theta $ and to $\\tau (\\theta ')$ under $\\theta '$.

**Proof.** Choose disjoint open neighbourhoods $U$ and $V$ around the two distinct target values. Consistency would require

\\[P_\\theta (T_n\\in U)\\to 1\\]

and

$P_{\\theta '}(T_n\\in V)\\to 1$.

But the complete data laws are identical under $\\theta $ and $\\theta '$, so the distribution of every statistic $T_n$ is identical. Hence $P_\\theta (T_n\\in U)=P_{\\theta '}(T_n\\in U)$ for every $n$. The first limit forces the latter probability toward one, contradicting convergence into the disjoint set $V$. $\\square$

No optimisation method, larger sample from the same experiment, or narrower confidence interval can defeat this theorem. New information must enter through a restriction, measurement, intervention, or design.

<a id="section-74-4-label-symmetry-creates-identifiable-equivalence-class"></a>
## 4. Label symmetry creates identifiable equivalence classes {#section-76-4-label-symmetry-creates-identifiable-equivalence-class}

In a two-component mixture

$f(x)=\\pi  f(x;\\eta _1)+(1-\\pi )f(x;\\eta _2)$,

swapping component labels gives the same density:

$(\\pi ,\\eta _1,\\eta _2)$ and $(1-\\pi ,\\eta _2,\\eta _1)$

are observationally equivalent. Ordered component labels are not identifiable without a convention such as $\\eta _1<\\eta _2$. The mixture distribution and symmetric functionals of its components may remain identifiable.

This is **label switching**, not necessarily a failure to learn the mixture law. Reporting “component 1” without a stable identifying convention can create artificial multimodality or apparent disagreement across computations.

<a id="section-88-5-measurement-error-can-destroy-or-recover-identificati"></a>
## 5. Measurement error can destroy or recover identification {#section-90-5-measurement-error-can-destroy-or-recover-identificati}

Let latent binary state be $Y$, recorded binary measurement be $X$, and

$s=P(X=1|Y=1)$, $f=P(X=1|Y=0)$.

If $p=P(Y=1)$, the observable positive rate is

$q=P(X=1)=sp+f(1-p)=f+(s-f)p$.

If $s$ and $f$ are known and $s\\ne f$, then

$p=(q-f)/(s-f)$,

so prevalence is identifiable. If $s=f$, the measurement is uninformative. If $s,f,p$ are all unknown and only $q$ is observed, one equation cannot identify three unknowns.

Validation data observing both $X$ and $Y$, repeated measurements under a justified error model, or multiple instruments may restore identification. Each adds an observation law, not merely an optimizer.

<a id="section-106-weak-identification"></a>
### Weak identification {#section-108-weak-identification}

Even when $s\\ne f$, inversion becomes unstable when $s-f$ is small:

$dp/dq=1/(s-f)$.

Tiny uncertainty in $q$ or the error rates can produce large uncertainty in $p$. Exact identification asks whether inversion is unique; **weak identification** asks whether it is well conditioned near the truth.

<a id="section-114-6-missing-data-often-yield-bounds-before-points"></a>
## 6. Missing data often yield bounds before points {#section-116-6-missing-data-often-yield-bounds-before-points}

Let $Y\\in {0,1}$ be a target outcome and $S$ indicate observation. Suppose the data identify

$r=P(Y=1,S=1)$ and $\\pi =P(S=1)$.

Write

$P(Y=1)=r+P(Y=1,S=0)$.

The unobserved term lies between zero and $P(S=0)=1-\\pi $, so without further assumptions,

$r\\le P(Y=1)\\le r+1-\\pi $.

These are **partial-identification bounds**. They state exactly what the observation law alone licenses. Assuming missingness independent of $Y$ would identify the target as $P(Y=1|S=1)$, but that independence is generally not testable from the observed values alone.

Bounds can be decision-relevant. If every value in the identified set leads to the same action under the declared loss, point identification may be unnecessary. If actions differ across the set, sensitivity analysis should display the unresolved assumption.

<a id="section-132-7-design-can-manufacture-identifying-variation"></a>
## 7. Design can manufacture identifying variation {#section-134-7-design-can-manufacture-identifying-variation}

In an observational comparison, treatment $Z$ may be associated with potential responses even before treatment. Random assignment creates a known mechanism independent of the fixed potential-response schedule.

Let $N\\geq2$ and $m$ be integers with $1\\leq m\\leq N-1$, and let exactly $m$ of the $N$ units receive treatment uniformly at random. Define the finite-population average treatment effect

$\\tau _N=N^{-1}\\sum _i[Y_i(1)-Y_i(0)]$.

The difference in observed treatment and control sample means satisfies

$E_Z[\\bar{Y}_1^obs]=N^{-1}\\sum _iY_i(1)$,

$E_Z[\\bar{Y}_0^obs]=N^{-1}\\sum _iY_i(0)$.

Therefore the difference is design-unbiased for $\\tau _N$.

The proof uses symmetry: each unit has treatment inclusion probability $m/N$, so

\\[E_Z[(1/m)\\sum _iZ_iY_i(1)]\\]

\\[=(1/m)\\sum _i(m/N)Y_i(1)\\]

$=N^{-1}\\sum _iY_i(1)$.

The control term is analogous.

The identification still relies on a stable treatment version and an observation rule connecting assigned treatment to the revealed potential response. Interference or noncompliance changes the estimand and design analysis.

<a id="section-160-8-positivity-determines-where-contrasts-can-be-learned"></a>
## 8. Positivity determines where contrasts can be learned {#section-162-8-positivity-determines-where-contrasts-can-be-learned}

For a conditional contrast comparing treatment values at covariate $X=x$, data need positive probability of both treatment conditions near that covariate state. If

$P(Z=1|X=x)=1$,

the observation law contains no untreated outcomes at $x$. A fitted model may extrapolate there, but the contrast is then identified by functional-form assumptions, not by local treatment variation.

This **positivity** or **overlap** condition is about support. Huge sample size in already represented regions cannot create missing treatment states. Design restrictions that guarantee assignment probabilities away from zero and one directly protect identification.

<a id="section-170-9-reparameterisation-and-constraints"></a>
## 9. Reparameterisation and constraints {#section-172-9-reparameterisation-and-constraints}

A one-to-one reparameterisation preserves identifiability. If $\\eta =h(\\theta )$ is bijective, knowing the observable law determines $\\theta $ exactly when it determines $\\eta $.

A many-to-one transformation can turn a nonidentified full parameter into an identified functional, as $\\alpha +\\beta $ did. Conversely, imposing a constraint can select one member from each observational-equivalence class. The constraint may be defensible—such as ordering mixture locations for labelling—or scientifically contentious. It must be reported as an assumption, not as information extracted from data.

<a id="section-176-10-identification-is-not-estimation"></a>
## 10. Identification is not estimation {#section-178-10-identification-is-not-estimation}

An identifiable target may still be difficult to estimate accurately with finite data. A rare-event probability is identifiable from an iid Bernoulli law, yet a small sample can contain no successes and provide little precision. A weakly identified parameter may have a unique population value but an extremely flat likelihood.

Conversely, an algorithm can return a stable number for a nonidentified target because of initialization, regularisation, or a software constraint. Computational uniqueness is not statistical identification. The correct order is:

$question \\to estimand \\to experiment \\to identification \\to procedure \\to computation$.

<a id="section-184-11-an-identification-audit"></a>
## 11. An identification audit {#section-186-11-an-identification-audit}

For every target, ask:

1. Is it a functional of the target population, observation law, causal system, or working model?
2. Which parameter values generate exactly the same observable law?
3. Is the estimand constant on those equivalence classes?
4. Which conclusion comes from design, and which from an untestable restriction?
5. Is identification point-valued, set-valued, or absent?
6. Is inversion stable, or do nearby laws imply distant target values?
7. Which added measurement or randomisation would distinguish the unresolved states?
8. Is a software constraint being mistaken for empirical information?

<a id="section-197-12-exercises-with-complete-solutions"></a>
## 13. Investigation: an identification ledger {#section-711-13-investigation-an-identification-ledger}

Choose a published-style quantitative claim without copying its conclusion. Write an identification ledger containing the target population, estimand, observable law, observational-equivalence relation, identifying assumptions, and a weaker assumption set producing bounds. Construct two distinct data-generating states that agree on every observable distribution but disagree on the target when one identifying assumption is removed. Then propose one feasible measurement or randomisation that separates them.

The final work must distinguish an assumption that chooses a model from data that discriminate between models.

<a id="section-715-15-development-identify-the-target-on-an-observable-equ"></a>
## 15. Development: identify the target on an observable equivalence class {#section-717-15-development-identify-the-target-on-an-observable-equ}

**Worked example 2.1.**

Identification can be made constructive. Let $Q_\\theta$ denote the complete observable law under state $\\theta$. For an attainable law $Q$, define its compatible-state set $F(Q)=\\{\\theta:Q_\\theta=Q\\}$. The corresponding identified target set is

$$\\mathcal I_\\tau(Q)=\\{\\tau(\\theta):\\theta\\in F(Q)\\}.$$

A target is point identified exactly when this set is a singleton for every attainable $Q$. This definition treats the observable law as known perfectly; a finite dataset does not reveal $Q$ exactly. Estimating $Q$ from data and mapping its uncertainty through $\\mathcal I_\\tau$ are later tasks. Keeping these two sources of uncertainty separate prevents a narrow sampling interval from being offered as a solution to nonidentification.

If $\\tau$ is constant on compatible-state sets, one can define an observable-law functional $g(Q)$ by choosing any $\\theta$ with $Q_\\theta=Q$ and setting $g(Q)=\\tau(\\theta)$. Constancy makes the choice irrelevant. Conversely, if $\\tau(\\theta)=g(Q_\\theta)$ for some functional $g$, equal observable laws must give equal targets. Thus identification is precisely the possibility of expressing the target as a well-defined function of the observable law. This is an existence statement, not an algorithm or a claim that the inverse is numerically stable.

Linear observation models show what a constructive inverse looks like. Suppose $X\\in\\mathbb R^r$ has a multivariate normal law with known positive-definite covariance matrix and mean $A\\theta$, where $A$ is a known $r$ by $d$ matrix and $\\theta\\in\\mathbb R^d$ is unrestricted. Two states have the same law exactly when $A\\theta=A\\theta'$. Their difference therefore lies in the null space of $A$. A linear target $c^{\\mathsf T}\\theta$ is identifiable exactly when $c^{\\mathsf T}v=0$ for every $v$ in that null space.

The proof exposes both directions. If some null vector $v$ has $c^{\\mathsf T}v\\ne0$, then $\\theta$ and $\\theta+v$ produce the same mean but different targets. If every null vector is annihilated, any two equal-mean states have equal targets. By the row-space/null-space orthogonality theorem from finite-dimensional linear algebra, this condition is equivalent to $c=A^{\\mathsf T}b$ for some $b\\in\\mathbb R^r$. Then $c^{\\mathsf T}\\theta=b^{\\mathsf T}A\\theta$, a function of the observed mean. The statistical argument is proved here; the elementary linear-algebra identity is a prerequisite.

For example, one observation with mean $\\alpha+\\beta$ supplies the row $(1,1)$. The sum is identifiable and the difference is not, because $(1,-1)$ is a null direction. A second measurement with mean $\\alpha-\\beta$ changes the matrix to

$$A=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}.$$

The two observable means $u,v$ now determine $\\alpha=(u+v)/2$ and $\\beta=(u-v)/2$. Repeating only the first measurement reduces uncertainty about $u$ but never creates the missing row. A restriction such as $\\beta=0$ also selects a unique pair, but does so by shrinking the admissible state space rather than by adding an observation.

This geometry clarifies “the model is identified.” It may refer to a whole parameter, one contrast, or an equivalence class after removing labels. Ask which one. The same experiment can identify some scientific questions and leave others unresolved. A reported answer should name its functional rather than borrow the stronger identification status of a different target.

<a id="section-739-16-development-prove-that-missing-outcome-bounds-are-sh"></a>
## 16. Development: prove that missing-outcome bounds are sharp {#section-741-16-development-prove-that-missing-outcome-bounds-are-sh}

**Worked example 2.2.**

The binary missing-data example admits a complete description, not merely two inequalities. Record $S$ and, when $S=1$, record $Y\\in\\{0,1\\}$. When $S=0$, use a missing symbol rather than inserting a numerical outcome. The observed record therefore has three possible values: $(1,1)$, $(1,0)$ and $(0,\\star)$. Write their probabilities as $r$, $\\pi-r$ and $1-\\pi$, with $0\\leq r\\leq\\pi\\leq1$.

A compatible full-data law must split the last cell into a missing success probability $t=P(Y=1,S=0)$ and a missing failure probability $1-\\pi-t$. Every $t\\in[0,1-\\pi]$ gives a valid probability table:

$$
\\begin{array}{c|cc}
 &Y=1&Y=0\\\\ \\hline
 S=1&r&\\pi-r\\\\
 S=0&t&1-\\pi-t
\\end{array}.
$$

All four entries are nonnegative and sum to one. Marginalising over the unrecorded missing outcome gives exactly the original three-cell observed law for every $t$. The population prevalence is $p=r+t$. Therefore every value in $[r,r+1-\\pi]$ is attained by a compatible state. This proves **sharpness**: the bounds describe all logically possible target values under the declared model, not just an interval containing them.

Sharpness depends on what is allowed to vary. If a scientific restriction limits missing outcomes, some of these tables cease to be admissible. For $\\pi<1$, let $u=P(Y=1\\mid S=0)$ and suppose sensitivity analysis restricts $u$ to a declared interval $[a,b]\\subseteq[0,1]$. Then $t=(1-\\pi)u$ and the sharp restricted set is

$$[\\,r+(1-\\pi)a,\\ r+(1-\\pi)b\\,].$$

Each value is still attained by the same table construction. The data determine $r$ and $\\pi$ at the population-law level; they do not determine the analyst's chosen $a,b$. Label those endpoints as sensitivity assumptions rather than confidence limits. If $\\pi=1$, there is no missing stratum, and the original set already equals $\\{r\\}$.

An independence assumption provides one particular point restriction. For $0<\\pi<1$, independence of $S$ and $Y$ forces $P(Y=1\\mid S=0)=P(Y=1\\mid S=1)=r/\\pi$. Substitution gives $p=r/\\pi$. The observed-data law cannot distinguish that full table from another admissible table with a different missing-stratum success rate. Thus a perfect fit to the three observed cells does not test the independence assumption. It can test other features of an enlarged observed model, but this particular hidden split remains absent.

Observed covariates can sometimes narrow the set through credible stratum restrictions. Suppose $H$ has finitely many recorded categories with known population proportions $w_h$, summing to one. Within category $h$, let $\\pi_h$ and $r_h$ be conditional observed probabilities, and impose missing-stratum bounds $u_h\\in[a_h,b_h]$. The overall prevalence lies in

$$\\left[
 \\sum_h w_h\\{r_h+(1-\\pi_h)a_h\\},
 \\sum_h w_h\\{r_h+(1-\\pi_h)b_h\\}
 \\right].$$

If full-data tables can be chosen independently across categories, selecting each category's endpoint attains the corresponding total endpoint, so these bounds are sharp too. The weights must describe the target population. Substituting the covariate proportions among respondents would silently change the target.

There are therefore three different questions to answer. Which cell probabilities are identifiable from the observation law? Which full-data completions remain admissible under the assumptions? Which decisions are common to all those completions? None requires pretending that missing values were observed. Finite-sample uncertainty about the observed cells can later be added without concealing this underlying set of compatible worlds.

<a id="section-776-17-development-validation-stability-and-a-change-of-exp"></a>
## 17. Development: validation, stability and a change of experiment {#section-778-17-development-validation-stability-and-a-change-of-exp}

**Worked example 2.3.**

The misclassification equation $q=f+(s-f)p$ provides a simple inverse problem with a visible domain. Assume $0\\leq f<s\\leq1$ are known. Then the model permits only $q\\in[f,s]$ as $p$ varies over $[0,1]$. An asserted population law with $q<f$ or $q>s$ is incompatible with these transported calibration rates. An observed sample proportion outside that interval need not falsify the model, because a sample proportion fluctuates. The distinction between a population restriction and a realised estimate matters before deciding whether to reject a model or constrain an estimate.

For two compatible positive rates $q,q'$ under the same calibration,

$$|p(q)-p(q')|=\\frac{|q-q'|}{s-f}.$$

This is an exact stability statement, with no asymptotic approximation. If calibration guarantees $s-f\\geq\\kappa>0$, the inverse has sensitivity at most $1/\\kappa$ to changes in $q$. If no positive separation is guaranteed, there is no single finite bound of this form across the whole model. Every individually invertible assay can coexist with increasingly unstable assays in the same class.

Calibration uncertainty affects more than the observed positive rate. Treat the inverse as a differentiable map at an interior point with $s\\ne f$. Its partial derivatives are

$$\\frac{\\partial p}{\\partial q}=\\frac1{s-f},\\qquad
 \\frac{\\partial p}{\\partial s}=-\\frac{p}{s-f},\\qquad
 \\frac{\\partial p}{\\partial f}=-\\frac{1-p}{s-f}.$$

For the last two identities, differentiate $(q-f)/(s-f)$ before substituting $q-f=p(s-f)$. These derivatives describe local changes, not exact error bars for arbitrary perturbations. Near $s=f$, errors in all three inputs can be amplified. A corrected prevalence with many decimal places can therefore be much less secure than its printed precision suggests.

An exact finite uncertainty set avoids reliance on this linear approximation. If scientific or validation information supplies sets $Q,S,F$ for the three probabilities, retain all triples $(q,s,f)\\in Q\\times S\\times F$ satisfying $0\\leq f<s\\leq1$ and $f\\leq q\\leq s$. Map every retained triple to $(q-f)/(s-f)$. The resulting set is the admissible prevalence set under those supplied constraints. The interpretation of $Q,S,F$ must be stated: deterministic sensitivity ranges and simultaneous confidence regions are different inputs, even if both are drawn as intervals.

What does a validation study add? In a randomly selected validation subset with credible reference outcomes, the recorded pair $(X,Y)$ identifies the joint cell probabilities. When $P(Y=1)>0$ and $P(Y=0)>0$, division by the respective margins identifies $s=P(X=1\\mid Y=1)$ and $f=P(X=1\\mid Y=0)$. Positivity of those margins is necessary for those conditional probabilities to be empirically constrained. If validation instead samples separately from known positive and negative reference groups, its conditional assay rates may still be estimable, but the validation prevalence is designed and does not itself estimate population prevalence.

The bridge back to a main sample is a transport assertion: the conditional assay law given truth is the same in validation and target populations, perhaps after conditioning on measured strata. It can fail when specimen handling, disease spectrum or threshold implementation differs. The mathematical inverse cannot decide whether that scientific equality is credible. A validation dataset changes the experiment by observing truths; transporting its rates changes the joint model connecting experiments.

This gives a useful interpretation of weak identification. It is not a synonym for a small dataset, a poorly converged optimizer or a nonzero standard error. The population inverse may be unique while small observational changes correspond to large target changes. More data can improve input precision, but the amplification factor remains part of the design. Improving the assay separation, adding a distinct measurement, or narrowing a scientifically defensible model class addresses a different part of the problem.

<a id="section-804-18-development-what-randomisation-identifies-and-what-i"></a>
## 18. Development: what randomisation identifies and what it leaves hidden {#section-806-18-development-what-randomisation-identifies-and-what-i}

A design-based expectation is over assignments, with the complete finite potential-response table held fixed. For the two-arm mean contrast, require integers $N\\geq2$ and $0<m<N$ so that both treatment and control means exist. Let $Z$ be uniform over allocations with exactly $m$ treated units. Assume each unit has a well-defined pair $Y_i(1),Y_i(0)$ and that the observed outcome is the potential response corresponding to its own assignment. This latter assumption excludes relevant interference and ambiguous treatment versions in this calculation.

Symmetry gives $E_Z[Z_i]=m/N$ and $E_Z[1-Z_i]=(N-m)/N$. Therefore

$$\\widehat\\tau
 =\\frac1m\\sum_iZ_iY_i(1)
  -\\frac1{N-m}\\sum_i(1-Z_i)Y_i(0)$$

has expectation $N^{-1}\\sum_i\\{Y_i(1)-Y_i(0)\\}=\\tau_N$. There is no independence assumption among assignment indicators: exactly $m$ ones makes them dependent. Linearity of expectation suffices for unbiasedness. This separates the design proof from an iid story about participants, which would be an additional model.

A small table makes the distinction between a guarantee and a realised result visible. Take $N=2$, $m=1$, with potential responses $(Y_1(1),Y_1(0))=(4,1)$ and $(Y_2(1),Y_2(0))=(3,2)$. The finite-population average effect is $(3+1)/2=2$. Treating unit one gives observed contrast $4-2=2$; treating unit two gives $3-1=2$. In this particular schedule the estimator happens to equal the target for both assignments.

Change only $Y_2(0)$ from two to zero. The target is now $(3+3)/2=3$. The two possible observed contrasts are $4-0=4$ and $3-1=2$, whose design mean is three. Each realised dataset reveals only one contrast. Unbiasedness concerns their average under the known assignment law, not a guarantee that every assignment returns the correct finite-population effect. The example also shows why an estimator can be noisy even with perfectly implemented randomisation.

In the full distribution of this experiment, unit identities and assignment indicators are recorded. Because each unit has positive probability of either assignment, the response attached to each assignment state determines its corresponding potential response at the observation-law level. A single realised assignment does not reveal the complete table. This is another instance of identification being a property of a family of possible records rather than an assertion that one dataset contains every missing counterfactual.

Now consider an observational binary treatment with no assignment restriction. Given any observed unit receiving treatment, its unobserved untreated response can be changed without changing that unit's observed response. To turn that observation into a population-level nonidentification proof, specify alternative joint laws of potential responses and treatment that induce the same joint law of $(Z,Y^{\\mathrm{obs}})$. Merely noting that a counterfactual is absent is not the full proof; the competing states must agree on every observable event.

Randomisation prevents arbitrary treatment selection based on fixed potential responses by imposing a known law for $Z$. It does not randomise who volunteered, establish measurement accuracy, or guarantee that another population has the same effects. A descriptive population mean, a finite-sample treatment effect and a transported policy effect are different estimands. State which one the design supports before attaching a causal interpretation to an observed contrast.

<a id="section-826-19-development-partial-identification-can-support-a-def"></a>
## 19. Development: partial identification can support a definite action {#section-828-19-development-partial-identification-can-support-a-def}

An identified set describes unresolved states, but a decision need not distinguish all of them. Suppose action $a_1$ is preferred to $a_0$ whenever prevalence exceeds a scientifically supplied threshold $c$. If the entire identified set lies above $c$, every compatible state selects $a_1$ under that rule. If the entire set lies below it, every compatible state selects $a_0$. If the set crosses the threshold, the observation law and declared restrictions do not determine the action. These are statements about the stated rule, not universal recommendations for treatment or resource allocation.

With quantitative loss functions, compare $L(p,a_1)-L(p,a_0)$ over the whole identified set. A fixed sign again gives a common action. A changing sign exposes a decision trade-off that must be resolved by additional information or a declared criterion, such as a worst-case loss calculation. One should report that criterion rather than hide it in a point estimate chosen from the set.

There is a practical diagnostic here. Before collecting more observations under the same protocol, ask what uncertainty they could reduce. More respondents can reduce estimation error for respondent probabilities. They cannot reveal an unrestricted success rate among people who never respond. A well-designed follow-up measuring a previously unseen group changes the identification problem. A larger sample repeating the same omission changes only its precision. The worked investigation below makes this distinction explicit in a complete finite probability table.

<a id="section-834-20-development-a-finite-sample-cost-of-observational-eq"></a>
## 20. Development: a finite-sample cost of observational equivalence {#section-836-20-development-a-finite-sample-cost-of-observational-eq}

The consistency impossibility theorem has a quantitative companion. Suppose two states have exactly the same complete observation law $Q$, but their real target values are $a<b$. Consider any real-valued estimator $T$ based on those observations, including a randomised estimator whose extra randomisation law is the same in both states. Its distribution is identical under both states. Write $m=(a+b)/2$ and $d=b-a$. The elementary identity

$$\\frac{(T-a)^2+(T-b)^2}{2}=(T-m)^2+\\frac{d^2}{4}$$

holds for every realised output. Taking expectations under the common law gives

$$\\max\\{E_a[(T-a)^2],E_b[(T-b)^2]\\}\\geq\\frac{d^2}{4}.$$

If a squared-error expectation is infinite, the bound remains true; otherwise the displayed identity proves it directly. The midpoint estimator $T=m$ attains $d^2/4$ at both states in this two-state problem. Thus the lower bound is sharp for that restricted problem. It does not assert that a midpoint is optimal over a larger model or under another loss.

The result says more than “some bias may remain.” No estimator can have arbitrarily small squared-error risk at both indistinguishable states, however cleverly it is computed. If the same equivalence persists for every sample size, the bound persists at every sample size. In the synthetic missing-outcome investigation below, endpoint prevalences differ by $2/5$, so at least one endpoint has mean squared error at least $(2/5)^2/4=1/25$ for every estimator under the original recording protocol.

An interval cannot escape the same issue by reporting sampling precision alone. Suppose a random set $C$ has coverage at least $1-\\alpha$ for $a$ under the first state and for $b$ under the second. Under their common data law, the union bound gives

$$Q(a\\in C,\\ b\\in C)
 \\geq1-Q(a\\notin C)-Q(b\\notin C)
 \\geq1-2\\alpha.$$

On this event the diameter of $C$ is at least $b-a$. For $0\\leq\\alpha<1/2$, simultaneous honesty at both states therefore forces a positive chance, at least $1-2\\alpha$, of a set wide enough to contain both targets. This argument does not require an interval shape, only that the set's membership events are measurable and its diameter is defined in the target metric.

Identification uncertainty and sampling uncertainty are consequently connected but distinct. A valid confidence procedure over a nonidentified model may need to accommodate the entire unresolved target range as well as estimation error in observable probabilities. A narrow interval can still be mathematically justified after additional restrictions, but those restrictions must appear in its stated model. Precision conditional on a chosen completion is not uniform honesty over all observationally equivalent completions.

<a id="section-858-21-reference-instantiation-of-the-identification-ledger"></a>
## 21. Reference instantiation of the identification-ledger investigation {#section-860-21-reference-instantiation-of-the-identification-ledger}

This synthetic probability model is one admissible response to the open investigation in Section 13, not a replacement for its prompt or a report of collected data. The claim to audit is: “A respondent success rate of one half determines the population success prevalence.” The target population consists of units with binary outcome $Y$; $S=1$ means a unit responds. The estimand is $p=P(Y=1)$. The recorded observation is $(1,Y)$ for a respondent and $(0,\\star)$ otherwise. Units are assumed iid draws from a declared full-data law; the following probabilities specify that law rather than estimates from an executed survey.

Let the complete observed law be

$$P(S=1,Y=1)=\\frac3{10},\\qquad
P(S=1,Y=0)=\\frac3{10},\\qquad
P(S=0)=\\frac25.$$

The response rate is $\\pi=3/5$, and the respondent success rate is $(3/10)/(3/5)=1/2$. Compatible full-data states are indexed by $t=P(S=0,Y=1)\\in[0,2/5]$. They have table entries $3/10,3/10,t,2/5-t$ and prevalence $p=3/10+t$. Every observed event is a union of the three recorded cells. Since those three probabilities do not depend on $t$, all these full-data states induce exactly the same observed law, not just the same respondent mean.

Two explicit endpoint states are:

$$
\\begin{array}{c|cc|cc}
 &\\text{state A}&\\text{state A}&
   \\text{state B}&\\text{state B}\\\\
 &Y=1&Y=0&Y=1&Y=0\\\\ \\hline
 S=1&3/10&3/10&3/10&3/10\\\\
 S=0&0&2/5&2/5&0
\\end{array}.
$$

State A has prevalence $3/10$, while state B has prevalence $7/10$. In state A all missing outcomes fail; in state B all missing outcomes succeed. Neither can be distinguished by the recorded observations, even under arbitrarily long iid repetition. The sharp identified prevalence set is $[3/10,7/10]$. The impossibility theorem therefore rules out an estimator consistently learning $p$ over this full model from this recording protocol.

The identifying restriction $Y\\perp S$ selects $t=(2/5)(1/2)=1/5$, giving prevalence one half. Its full table is $3/10,3/10,1/5,1/5$. The data fix the observed row and the missing row's total, while independence fixes the hidden split. Independence is not inferred from the equal respondent success and failure counts; both endpoint states have those same counts at the observation-law level.

A weaker sensitivity assumption says that missing-unit success prevalence lies between one quarter and three quarters. Then $t\\in[(2/5)(1/4),(2/5)(3/4)]=[1/10,3/10]$, so $p\\in[2/5,3/5]$. The endpoints are attained by valid tables, proving sharpness under this restriction. A threshold action triggered only when $p>3/4$ is not supported in any compatible state. A threshold at one half is unresolved. Neither statement attaches a sampling confidence level to the sensitivity interval.

A feasible idealised repair is to select missing units for outcome follow-up by an independent audit indicator $A$ with known probability $a\\in(0,1]$, and obtain a credible outcome whenever $S=0,A=1$. Assume complete measurement among selected audit units. The augmented observation law contains $P(S=0,A=1,Y=1)=at$. Hence it identifies $t$ by division by $a$, and identifies $p=3/10+t$. In state A this probability is zero; in state B it is $2a/5$. Thus the new observation truly separates the two states. If follow-up participation itself depends on the still-hidden outcome, that assumption fails and a new missingness problem must be modelled.

**Changed case.** Keep the same three-cell observed law, but suppose the independent follow-up design has $a=1/2$ and its augmented law has $P(S=0,A=1,Y=1)=1/20$. Then $t=(1/20)/(1/2)=1/10$ and population prevalence is $2/5$. Within the missing stratum the success rate is $(1/10)/(2/5)=1/4$. The remaining augmented missing cells have probabilities $P(S=0,A=1,Y=0)=3/20$ and $P(S=0,A=0)=1/5$. Together with the original respondent cells they sum to one. These are exact model probabilities, not a claimed empirical follow-up result.

For self-review, require four explicit products: the three-cell observable law and all compatible completions; two distinct states agreeing on that law; a labelled identifying restriction and a weaker sharp sensitivity set; and a new measurement law with a demonstrated separating event. A satisfactory repair must state the follow-up independence, positivity and complete-measurement assumptions. A numerical answer without those bridges does not complete this investigation. This public reference provides comparison support and establishes no learner score, human review or unseen-work evidence.

<a id="section-894-22-optional-practice-extensions"></a>

## Summary

<a id="section-964-14-summary-and-forward-route"></a>
An estimand is identifiable when observationally equivalent states cannot change its value. Nonidentification rules out consistency, while weak identification makes inversion unstable. Missingness and limited support often produce identified sets, and randomisation or validation measurements can restore distinguishing information. With a target and observation law now explicit, the next question is how to compare data-dependent actions—requiring loss and risk.

## Exercises {#section-199-12-exercises-with-complete-solutions}

<a id="section-199-1-additive-aliasing"></a>
### 1. Additive aliasing {#section-201-1-additive-aliasing}

**Exercise 2.1**

If $X\\sim Poisson(ab)$ with unknown positive $a,b$, which of $a$, $b$, and $ab$ are identifiable from the law?

<details>
<summary>Hint 1</summary>

Find the parameter combination appearing in the observable Poisson rate.

</details>
<details>
<summary>Hint 2</summary>

Vary one factor while compensating with the other to keep that rate fixed.

</details>
<details>
<summary>Solution</summary>

**Solution.** The Poisson law determines its rate $ab$, so the product is identifiable. Individual factors are not: for every $c>0$, $(ca,b/c)$ gives the same product and law.

</details>

<a id="section-224-2-an-identified-functional-of-a-nonidentified-pair"></a>
### 2. An identified functional of a nonidentified pair {#section-226-2-an-identified-functional-of-a-nonidentified-pair}

**Exercise 2.2**

Suppose $X\\sim Normal(\\alpha -2\\beta ,1)$. Give one identifiable nonconstant estimand and explain why $(\\alpha ,\\beta )$ is not identifiable.

<details>
<summary>Hint 1</summary>

Look for a linear contrast equal to the observable mean.

</details>
<details>
<summary>Hint 2</summary>

Exhibit the line of parameter pairs sharing any one such mean.

</details>
<details>
<summary>Solution</summary>

**Solution.** The contrast $\\alpha -2\\beta $ is identifiable because it is the observable mean. The full pair is not: infinitely many pairs lie on each line $\\alpha -2\\beta =c$ and generate the same law.

</details>

<a id="section-249-3-absolute-value-observation"></a>
### 3. Absolute-value observation {#section-251-3-absolute-value-observation}

**Exercise 2.3**

For $W\\sim Normal(\\mu ,1)$ and $X=|W|$, prove $\\mu ^{2}$ is identifiable even though $\\mu $ is not.

<details>
<summary>Hint 1</summary>

The sign symmetry refutes identification of the signed mean.

</details>
<details>
<summary>Hint 2</summary>

The second observed moment determines its square in this known-variance family.

</details>
<details>
<summary>Solution</summary>

**Solution.** The law is unchanged only under the sign swap $\\mu \\leftrightarrow -\\mu $ in this family, and both values have the same square. Equivalently, $E[X^{2}]=E[W^{2}]=1+\\mu ^{2}$, so the observable law determines $\\mu ^{2}$.

</details>

<a id="section-274-4-mixture-labels"></a>
### 4. Mixture labels {#section-276-4-mixture-labels}

**Exercise 2.4**

Why does imposing $\\eta _1<\\eta _2$ not create new observable information in a two-component mixture?

<details>
<summary>Hint 1</summary>

Compare the two component-label descriptions before and after imposing an order.

</details>
<details>
<summary>Hint 2</summary>

A label convention selects a representative without changing the mixture density.

</details>
<details>
<summary>Solution</summary>

**Solution.** It chooses a unique label ordering among two parameter descriptions of the same mixture law. The density is unchanged; the constraint makes reporting identifiable by convention rather than adding data about a physically labelled component.

</details>

<a id="section-299-5-correct-known-misclassification"></a>
### 5. Correct known misclassification {#section-301-5-correct-known-misclassification}

**Exercise 2.5**

An assay has sensitivity $s=0.9$, false-positive rate $f=0.1$, and observed positive rate $q=0.34$. Find latent prevalence under the model.

<details>
<summary>Hint 1</summary>

Write the observed positive rate as false positives plus true-positive excess.

</details>
<details>
<summary>Hint 2</summary>

Invert the linear rate relation only because the two validation probabilities differ.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use $p=(q-f)/(s-f)=(0.34-0.10)/0.80=0.30$. This answer depends on transport of the validation rates to the target sample.

</details>

<a id="section-324-6-uninformative-measurement"></a>
### 6. Uninformative measurement {#section-326-6-uninformative-measurement}

**Exercise 2.6**

What happens to identification when $s=f=0.4$?

<details>
<summary>Hint 1</summary>

Substitute equal sensitivity and false-positive probability into the observation equation.

</details>
<details>
<summary>Hint 2</summary>

The resulting rate no longer depends on prevalence.

</details>
<details>
<summary>Solution</summary>

**Solution.** The observed rate is $q=0.4$ for every latent prevalence $p$. The observation law contains no information about $p$; all values in $[0,1]$ are observationally equivalent.

</details>

<a id="section-349-7-weak-measurement"></a>
### 7. Weak measurement {#section-351-7-weak-measurement}

**Exercise 2.7**

If $s-f=0.02$, by how much does the corrected prevalence change when $q$ changes by $0.01$, holding error rates fixed?

<details>
<summary>Hint 1</summary>

Hold the calibration rates fixed when taking the difference.

</details>
<details>
<summary>Hint 2</summary>

The small separation in the denominator amplifies the observed-rate perturbation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $p=(q-f)/(s-f)$, the change is $0.01/0.02=0.5$. A one-percentage-point change in the observed rate moves corrected prevalence by fifty percentage points, displaying severe ill conditioning.

</details>

<a id="section-374-8-missing-binary-outcome-bounds"></a>
### 8. Missing binary outcome bounds {#section-376-8-missing-binary-outcome-bounds}

**Exercise 2.8**

Suppose $\\pi =P(S=1)=0.8$ and $r=P(Y=1,S=1)=0.24$. Bound population prevalence without a missingness assumption.

<details>
<summary>Hint 1</summary>

Split prevalence into observed-success and unobserved-success mass.

</details>
<details>
<summary>Hint 2</summary>

The latter can range over the entire missing probability mass.

</details>
<details>
<summary>Solution</summary>

**Solution.** The bounds are

$0.24\\le P(Y=1)\\le 0.24+0.20=0.44$.

The unobserved 20% could contain no successes or all successes.

</details>

<a id="section-403-9-when-missingness-bounds-collapse"></a>
### 9. When missingness bounds collapse {#section-405-9-when-missingness-bounds-collapse}

**Exercise 2.9**

When do the elementary binary missing-data bounds have zero width?

<details>
<summary>Hint 1</summary>

Calculate the width of the elementary identified interval.

</details>
<details>
<summary>Hint 2</summary>

Without further assumptions, observation alone removes the width only when no outcomes are missing.

</details>
<details>
<summary>Solution</summary>

**Solution.** Their width is $1-\\pi =P(S=0)$. They collapse exactly when every outcome is observed, $\\pi =1$. Other assumptions can narrow them, but observation alone cannot.

</details>

<a id="section-428-10-prove-the-impossibility-theorem-for-two-real-targets"></a>
### 10. Prove the impossibility theorem for two real targets {#section-430-10-prove-the-impossibility-theorem-for-two-real-targets}

**Exercise 2.10**

Let identical laws correspond to target values $a<b$. Choose explicit disjoint neighbourhoods for the proof.

<details>
<summary>Hint 1</summary>

Choose a radius smaller than half the target separation.

</details>
<details>
<summary>Hint 2</summary>

The same statistic law cannot concentrate in two disjoint intervals.

</details>
<details>
<summary>Solution</summary>

**Solution.** Set $\\varepsilon =(b-a)/3$, $U=(a-\\varepsilon ,a+\\varepsilon )$, and $V=(b-\\varepsilon ,b+\\varepsilon )$. The distance between centres is $3\\varepsilon $, while the radii sum to $2\\varepsilon $, so the intervals are disjoint. Consistency under identical data laws would force the same statistic distribution into both with probability tending to one, impossible.

</details>

<a id="section-453-11-finite-data-versus-identification"></a>
### 11. Finite data versus identification {#section-455-11-finite-data-versus-identification}

**Exercise 2.11**

No successes occur in five Bernoulli trials. Is $p$ unidentified?

<details>
<summary>Hint 1</summary>

Identification concerns whether population laws differ, not whether this sample is informative.

</details>
<details>
<summary>Hint 2</summary>

A zero count can occur under many distinct yet identifiable Bernoulli laws.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The Bernoulli family is identifiable because different $p$ values define different population laws. The particular small dataset supplies weak finite-sample information near zero, which is an estimation issue rather than nonidentification.

</details>

<a id="section-478-12-stable-software-output"></a>
### 12. Stable software output {#section-480-12-stable-software-output}

**Exercise 2.12**

An optimizer always returns $\\alpha =\\beta $ in the model $X\\sim Normal(\\alpha +\\beta ,1)$. Does this identify the components?

<details>
<summary>Hint 1</summary>

Separate an algorithmic constraint from the observable mean.

</details>
<details>
<summary>Hint 2</summary>

Another constraint could select a different pair with the same fitted sum.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The equality is an algorithmic or regularisation constraint. The observable law determines only the sum. Another constraint could choose a different representative with identical fit.

</details>

<a id="section-503-13-randomisation-unbiasedness"></a>
### 13. Randomisation unbiasedness {#section-505-13-randomisation-unbiasedness}

**Exercise 2.13**

In a completely randomised design with $m$ treated units, prove the treated mean is unbiased for the finite-population mean of $Y_i(1)$.

<details>
<summary>Hint 1</summary>

Use each unit's known treatment inclusion probability.

</details>
<details>
<summary>Hint 2</summary>

Linearity of expectation does not require independent assignment indicators.

</details>
<details>
<summary>Solution</summary>

**Solution.** Each unit has $E[Z_i]=m/N$. Therefore

\\[E[(1/m)\\sum _iZ_iY_i(1)]\\]

$=(1/m)\\sum _i(m/N)Y_i(1)=N^{-1}\\sum _iY_i(1)$.

Dependence among assignment indicators does not affect this linear expectation.

</details>

<a id="section-534-14-observational-association"></a>
### 14. Observational association {#section-536-14-observational-association}

**Exercise 2.14**

Why does observing $E[Y|Z=1]-E[Y|Z=0]$ not by itself identify a treatment effect?

<details>
<summary>Hint 1</summary>

Compare the two groups' untreated potential responses.

</details>
<details>
<summary>Hint 2</summary>

Selection can change their composition even before any treatment effect.

</details>
<details>
<summary>Solution</summary>

**Solution.** Treatment groups may differ in their untreated potential responses because of selection or confounding. The observed contrast mixes treatment response with pre-treatment group differences. Identification requires assignment or assumptions connecting observed conditional laws to counterfactual outcomes.

</details>

<a id="section-559-15-positivity-failure"></a>
### 15. Positivity failure {#section-561-15-positivity-failure}

**Exercise 2.15**

If all units with $X=1$ receive treatment, can the untreated conditional mean at $X=1$ be identified nonparametrically from observed data?

<details>
<summary>Hint 1</summary>

Inspect the support of the treatment-covariate distribution.

</details>
<details>
<summary>Hint 2</summary>

An absent treatment condition requires extrapolation or new data rather than more observations elsewhere.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. There are no untreated observations at that covariate value. A regression formula may extrapolate from other regions, but the value then comes from model restrictions rather than nonparametric local comparison.

</details>

<a id="section-584-16-restore-sign-information"></a>
### 16. Restore sign information {#section-586-16-restore-sign-information}

**Exercise 2.16**

For the absolute-normal example, name one additional observation that would distinguish $\\mu $ from $-\\mu $.

<details>
<summary>Hint 1</summary>

Restore a recorded feature that changes under a sign reversal.

</details>
<details>
<summary>Hint 2</summary>

Keeping both magnitude and sign recovers the signed latent observation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Recording the sign of each latent $W$, even separately from its magnitude, restores the original signed observation and distinguishes the two laws. Any validated asymmetric measurement whose distribution changes under sign reversal could also restore identification.

</details>

<a id="section-609-17-a-one-to-one-reparameterisation"></a>
### 17. A one-to-one reparameterisation {#section-611-17-a-one-to-one-reparameterisation}

**Exercise 2.17**

If $p\\in (0,1)$ is identifiable, show log-odds $\\eta =\\log[p/(1-p)]$ is identifiable.

<details>
<summary>Hint 1</summary>

Use the injectivity of the logit map on the open unit interval.

</details>
<details>
<summary>Hint 2</summary>

The inverse determines the original parameter uniquely.

</details>
<details>
<summary>Solution</summary>

**Solution.** The logit map is one-to-one from $(0,1)$ to $R$, with inverse $p=e^\\eta /(1+e^\\eta )$. The observable law determines $p$, hence determines $\\eta $; conversely $\\eta $ determines $p$.

</details>

<a id="section-634-18-a-many-to-one-estimand"></a>
### 18. A many-to-one estimand {#section-636-18-a-many-to-one-estimand}

**Exercise 2.18**

If only $\\theta ^{2}$ is identifiable for real $\\theta $, is $|\\theta |$ identifiable?

<details>
<summary>Hint 1</summary>

Express the absolute value as a function of the identified square.

</details>
<details>
<summary>Hint 2</summary>

The nonnegative square root contains no additional sign choice.

</details>
<details>
<summary>Solution</summary>

**Solution.** Yes. $|\\theta |=\\sqrt{\\theta ^{2}}$ is a deterministic function of the identified nonnegative quantity. The sign remains unidentified.

</details>

<a id="section-659-19-identification-set-and-decisions"></a>
### 19. Identification set and decisions {#section-661-19-identification-set-and-decisions}

**Exercise 2.19**

Suppose a treatment is worthwhile exactly when prevalence exceeds $0.5$, while the identified prevalence set is $[0.6,0.8]$. Is point identification necessary for this binary action under the stated threshold rule?

<details>
<summary>Hint 1</summary>

Apply the action threshold to every compatible prevalence.

</details>
<details>
<summary>Hint 2</summary>

Point identification is unnecessary when the entire set recommends the same action.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. Every compatible prevalence exceeds $0.5$, so all observationally equivalent states recommend the same action. Uncertainty within the set still matters for other losses or resource levels, but not for this declared binary threshold.

</details>

<a id="section-684-20-design-an-identification-repair"></a>
### 20. Design an identification repair {#section-686-20-design-an-identification-repair}

**Exercise 2.20**

A survey's true response $Y$ is measured by an assay with unknown sensitivity and false-positive rate. What additional design can identify these rates?

<details>
<summary>Hint 1</summary>

Observe the assay and a credible reference on the same validation units.

</details>
<details>
<summary>Hint 2</summary>

Transport of that joint error calibration and distinct rates are still necessary.

</details>
<details>
<summary>Solution</summary>

**Solution.** Collect a validation subsample on which both the assay result and a credible reference measurement of $Y$ are observed. Under transport assumptions, the joint table identifies sensitivity and false-positive rate, which can then identify prevalence when they differ. Repeating the same unvalidated assay alone does not necessarily separate truth from error.

</details>

<a id="section-709-13-investigation-an-identification-ledger"></a>

<a id="section-896-22-optional-practice-extensions"></a>
### 21. SI-02-E21: a new measurement row {#section-900-si-02-e21-a-new-measurement-row}

**Exercise 2.21**

Let $X$ be normal with known variance one and mean $\\alpha+\\beta$, with unrestricted real $\\alpha,\\beta$. Is $\\alpha+2\\beta$ identifiable? Now additionally observe $V$ with known normal variance one and mean $\\alpha-\\beta$, independently of $X$. Express $\\alpha+2\\beta$ in terms of the two observable means and explain which design change restores identification.


<details>
<summary>Hint 1</summary>

Find a direction in parameter space that leaves the first observable mean unchanged.

</details>
<details>
<summary>Hint 2</summary>

With the second mean, solve the two linear equations before computing the target contrast.

</details>

<a id="section-918-si-02-e22-sharp-bounds-with-an-audited-missing-group"></a>
### 22. SI-02-E22: sharp bounds with an audited missing group {#section-920-si-02-e22-sharp-bounds-with-an-audited-missing-group}

**Exercise 2.22**

An observation law has $P(S=1,Y=1)=1/5$, $P(S=1,Y=0)=3/10$ and $P(S=0)=1/2$. First give the sharp prevalence set with unrestricted missing outcomes. Then an independent audit selects each missing unit with probability $1/4$, measuring its outcome completely; the augmented law has $P(S=0,A=1,Y=1)=3/40$. Identify the prevalence and state why this is an observation-law calculation rather than a claim that a finite audit has no error.


<details>
<summary>Hint 1</summary>

Allocate the missing outcome mass freely to obtain the initial sharp bounds.

</details>
<details>
<summary>Hint 2</summary>

The independent audit selects one quarter of each missing outcome category, identifying its hidden success mass.

</details>

<a id="section-938-23-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-940-23-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-943-si-02-e21-a-new-measurement-row-solution"></a>
### SI-02-E21: a new measurement row — solution {#section-945-si-02-e21-a-new-measurement-row-solution}

The null direction $(1,-1)$ leaves $\\alpha+\\beta$ unchanged but changes $\\alpha+2\\beta$ by $-1$, so the target is not identifiable from $X$ alone. With the new measurement, write $u=E[X]=\\alpha+\\beta$ and $v=E[V]=\\alpha-\\beta$. Then $\\alpha=(u+v)/2$, $\\beta=(u-v)/2$, and $\\alpha+2\\beta=(3u-v)/2$. The observable joint law determines its two marginal means, restoring identification. The added mean row is essential; independent repetition of the old mean row would not remove its null direction. Independence supplies the stated simple joint experiment, although identification of these two means itself does not require it.

</details>

<details>
<summary>Solution</summary>

<a id="section-952-si-02-e22-sharp-bounds-with-an-audited-missing-group-so"></a>
### SI-02-E22: sharp bounds with an audited missing group — solution {#section-954-si-02-e22-sharp-bounds-with-an-audited-missing-group-so}

Write $t=P(S=0,Y=1)\\in[0,1/2]$. Every such value gives table entries $1/5,3/10,t,1/2-t$, so the sharp initial prevalence set is $[1/5,7/10]$. Independent positive-probability audit selection gives $P(S=0,A=1,Y=1)=t/4$. Therefore $t=4(3/40)=3/10$ and prevalence is $1/5+3/10=1/2$. A finite audit estimates its cell probabilities with sampling uncertainty. Identification instead assumes the augmented population law known and asks whether that law determines the target. It does under the audit independence and complete-measurement assumptions.

</details>

<a id="section-958-sources"></a>

## Sources {#section-960-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-962-14-summary-and-forward-route"></a>
`;export{e as default};