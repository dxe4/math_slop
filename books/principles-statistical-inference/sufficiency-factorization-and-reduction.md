
# Sufficiency, Factorization, and Data Reduction {#section-1-sufficiency-factorization-and-data-reduction}

A statistic compresses data. A **sufficient** statistic performs a special compression: after its value is known, the remaining variation in the full data carries no information about which parameter value generated the observation, within the declared model. Sufficiency is exact and model-relative; a summary can be sufficient for one family and destructive for another.

This chapter develops conditional and factorisation definitions, minimal sufficiency, ancillary information, Rao–Blackwell improvement, and decision-preserving reduction. It depends on dominated likelihoods and conditional expectation.

<a id="section-5-1-a-statistic-is-a-measurable-data-map"></a>
## 1. A statistic is a measurable data map {#section-7-1-a-statistic-is-a-measurable-data-map}

A **statistic** is a measurable function $T=T(X)$ whose definition does not use the unknown parameter. It may be scalar, vector, set-valued, or as large as the full data.

Every one-to-one encoding of the data is trivially sufficient, so sufficiency alone does not guarantee useful compression. The mathematical question is whether a lower-dimensional or structurally simpler statistic preserves everything in the sample relevant to the model index.

Examples include the sample sum, order statistics, empirical distribution, sample maximum, and residual vector. Whether each is sufficient depends on the experiment.

<a id="section-13-2-conditional-sufficiency-removes-parameter-dependence"></a>
## 2. Conditional sufficiency removes parameter dependence {#section-15-2-conditional-sufficiency-removes-parameter-dependence}

A statistic $T$ is **sufficient for $\theta $** if the conditional distribution of $X$ given $T$ has a version that does not depend on $\theta $.

In a finite experiment, this means that for every attainable $t$,

\[P_\theta (X=x|T=t)\]

is the same function of $x,t$ for all parameter values for which $P_\theta (T=t)>0$.

The statistic need not identify $\theta $. Sufficiency says that the discarded arrangement contains no additional information about $\theta $; identification asks whether the retained law distinguishes parameter values. A constant statistic is sufficient in an experiment where all $P_\theta $ are identical, even though nothing is identifiable.

<a id="section-25-worked-bernoulli-arrangement"></a>
### Worked Bernoulli arrangement {#section-27-worked-bernoulli-arrangement}

**Worked example 5.1.**

For iid Bernoulli data $X=(X_1,\dots,X_n)$, let $S=\sum _iX_i$. Conditional on $S=s$, every binary sequence with $s$ successes has probability

$1/\binom{n}{s}$,

independent of $p$. Therefore $S$ is sufficient. The order of successes is random arrangement noise under the iid model.

If success probabilities vary by time, the conditional probability of an arrangement can depend on the parameter vector, and the same sum need not be sufficient.

<a id="section-37-3-the-factorisation-theorem-recognises-sufficiency"></a>
## 3. The factorisation theorem recognises sufficiency {#section-39-3-the-factorisation-theorem-recognises-sufficiency}

Suppose an experiment is dominated by $\mu $ with densities $f_\theta (x)$. The **Neyman–Fisher factorisation theorem** says, under the standard measurable regularity conditions, that $T$ is sufficient exactly when densities can be written

$f_\theta (x)=g_\theta (T(x))h(x)$,

where $h$ does not depend on $\theta $.

The theorem says every parameter-dependent part of the density passes through $T$.

<a id="section-47-why-factorisation-implies-sufficiency-in-a-finite-model"></a>
### Why factorisation implies sufficiency in a finite model {#section-49-why-factorisation-implies-sufficiency-in-a-finite-model}

For an attainable $t$,

\[P_\theta (X=x|T=t)\]

\[=g_\theta (t)h(x)/\sum_{y:T(y)=t}g_\theta (t)h(y)\]

$=h(x)/\sum_{y:T(y)=t}h(y)$.

The parameter factor cancels. The converse constructs a factorisation from the parameter-free conditional law and the marginal law of $T$. General spaces require careful versions of conditional distributions, which the theorem's hypotheses supply.

<a id="section-59-bernoulli-factorisation"></a>
### Bernoulli factorisation {#section-61-bernoulli-factorisation}

The iid Bernoulli mass is

$f_p(x)=p^{\sum x_i}(1-p)^{n-\sum x_i}$.

Set $T(x)=\sum x_i$, $g_p(s)=p^s(1-p)^{n-s}$, and $h(x)=1$. Thus the sample sum is sufficient.

<a id="section-67-4-several-classical-reductions-follow-from-factorisatio"></a>
## 4. Several classical reductions follow from factorisation {#section-69-4-several-classical-reductions-follow-from-factorisatio}

<a id="section-69-normal-mean-and-variance"></a>
### Normal mean and variance {#section-71-normal-mean-and-variance}

For iid $Normal(\mu ,\sigma ^{2})$ data,

$f_{\mu ,\sigma ^{2}}(x)=(2\pi \sigma ^{2})^{-n/2} \exp[-(\sum _ix_i^{2}-2\mu \sum _ix_i+n\mu ^{2})/(2\sigma ^{2})]$.

All parameter dependence passes through

$T(x)=(\sum _ix_i, \sum _ix_i^{2})$.

Equivalently, $(\bar{X}, \sum _i(X_i-\bar{X})^{2})$ is sufficient because it is a one-to-one transformation of those two summaries.

<a id="section-81-uniform-endpoint"></a>
### Uniform endpoint {#section-83-uniform-endpoint}

For iid $Uniform(0,\theta )$ observations,

$f_\theta (x)=\theta ^{-n}1_{0\le \min_i x_i}1_{\max_i x_i\le \theta }$.

On the fixed nonnegative observation space, parameter dependence passes through $M=\max_iX_i$, so the sample maximum is sufficient for $\theta $. This moving-support model is irregular for score theory but has a sharp sufficient statistic.

<a id="section-89-exponential-rate"></a>
### Exponential rate {#section-91-exponential-rate}

For iid exponential rate $\lambda $,

$f_\lambda (x)=\lambda ^n \exp\left(-\lambda \sum _ix_i\right)1_{all x_i\ge 0}$.

The sum $\sum _iX_i$ is sufficient.

<a id="section-97-5-sufficiency-is-destroyed-by-changing-the-family"></a>
## 5. Sufficiency is destroyed by changing the family {#section-99-5-sufficiency-is-destroyed-by-changing-the-family}

For iid normal location with known variance, the sample mean is sufficient for $\mu $. For iid Laplace location with known scale, the likelihood is proportional to

$\exp[-\sum _i|x_i-\mu |]$.

The sample mean does not determine the absolute-deviation profile.

Take samples $x=(-1,1)$ and $y=(0,0)$, both with mean zero. Their likelihood ratio is

\[f_\mu (x)/f_\mu (y)\]

$=\exp[-|-1-\mu |-|1-\mu |+2|\mu |]$.

At $\mu =0$ it equals $e^{-2}$; at $\mu =2$ it equals $1$. If the mean were sufficient, observations with the same mean would have a likelihood ratio independent of $\mu $. Therefore it is not sufficient in the Laplace location family.

This counterexample prevents “mean and variance summarise any dataset” from becoming a theorem by habit.

<a id="section-115-6-minimal-sufficiency-removes-redundant-sufficient-deta"></a>
## 6. Minimal sufficiency removes redundant sufficient detail {#section-117-6-minimal-sufficiency-removes-redundant-sufficient-deta}

A sufficient statistic $T$ is **minimal sufficient** if it is a function of every other sufficient statistic, up to the appropriate null-set conventions. It represents the coarsest partition of the sample space that preserves likelihood information.

For a dominated family with positive densities on a common support, a useful criterion is:

$T(x)=T(y)$ exactly when $f_\theta (x)/f_\theta (y)$ is independent of $\theta $.

The equivalence classes group observations whose relative likelihood is parameter-free. The criterion needs support care when densities can vanish.

For iid Bernoulli observations, two binary sequences have parameter-free likelihood ratio exactly when they contain the same number of successes. Thus the sum is minimal sufficient.

Minimal does not always mean low-dimensional. In flexible nonparametric iid models, the empirical distribution or order statistics may be essentially the available reduction.

<a id="section-129-7-ancillary-statistics-carry-no-marginal-parameter-info"></a>
## 7. Ancillary statistics carry no marginal parameter information {#section-131-7-ancillary-statistics-carry-no-marginal-parameter-info}

A statistic $A(X)$ is **ancillary** if its distribution does not depend on $\theta $. Ancillarity is a marginal statement; sufficiency is a conditional one.

For two independent $Normal(\mu ,\sigma ^{2})$ observations with known $\sigma $, the difference $X_1-X_2\sim Normal(0,2\sigma ^{2})$ is ancillary for $\mu $. The sample mean is sufficient for $\mu $. The difference can still diagnose model assumptions or describe random arrangement even though its marginal law contains no information about $\mu $.

An ancillary statistic need not be independent of every estimator. Under additional completeness conditions, a powerful theorem due to Basu gives independence between a complete sufficient statistic and any ancillary statistic. Completeness and that theorem belong to the later estimation chapter; they are not assumed here.

<a id="section-137-8-rao-blackwellisation-removes-avoidable-conditional-no"></a>
## 8. Rao–Blackwellisation removes avoidable conditional noise {#section-139-8-rao-blackwellisation-removes-avoidable-conditional-no}

Let $S$ be sufficient and let $U=U(X)$ estimate $\tau (\theta )$. Define

$U*=E_\theta [U|S]$.

Because the conditional law of $X$ given $S$ does not depend on $\theta $, a common measurable version $U*=g(S)$ can be used as a statistic. The tower property gives

$E_\theta [U*]=E_\theta [U]$,

so bias is preserved.

For squared loss, conditional variance decomposition gives

$Var_\theta (U)=Var_\theta (U*)+E_\theta [Var_\theta (U|S)]$.

Thus $Var(U*)\le Var(U)$, and the MSE cannot increase because bias is unchanged. More generally, for convex loss in the action, conditional Jensen gives

\[L(\theta ,E[U|S])\le E[L(\theta ,U)|S]\]

when the expressions are valid; averaging proves risk improvement.

<a id="section-159-worked-bernoulli-improvement"></a>
### Worked Bernoulli improvement {#section-161-worked-bernoulli-improvement}

**Worked example 5.2.**

In iid Bernoulli data, $U=X_1$ is unbiased for $p$. Given total $S=s$, symmetry makes each position equally likely to contain a success, so

$E[X_1|S=s]=s/n$.

Rao–Blackwellisation turns one observation into the sample proportion $S/n$, preserving unbiasedness and reducing variance from $p(1-p)$ to $p(1-p)/n$.

The theorem does not say every sufficient-statistic estimator is optimal. Completeness, loss, and the comparison class matter.

<a id="section-171-9-sufficiency-preserves-decision-possibilities"></a>
## 9. Sufficiency preserves decision possibilities {#section-173-9-sufficiency-preserves-decision-possibilities}

If $S$ is sufficient, the conditional distribution of the full data given $S=s$ is parameter-free. Given any possibly randomised full-data decision rule $\delta (X)$, one can reproduce its conditional action distribution using only $S$ plus parameter-free randomisation. The resulting rule has the same risk function for every $\theta $.

Thus no statistical decision performance is lost by reducing to a sufficient statistic, provided the model is correct and the allowed rule class includes the required randomisation. This is stronger than saying the MLE happens to depend on $S$.

Outside the model, discarded information may reveal misspecification. Residual order, tail shape, or cluster pattern can be ancillary or conditionally parameter-free under the central family yet essential for checking that family. Compression for inference and preservation for diagnostics serve different goals.

<a id="section-179-10-data-reduction-has-three-distinct-standards"></a>
## 10. Data reduction has three distinct standards {#section-181-10-data-reduction-has-three-distinct-standards}

Do not merge:

- **computational compression:** enough information to run one algorithm;
- **inferential sufficiency:** enough information to reproduce every model-based likelihood comparison or decision risk;
- **scientific provenance:** enough raw and contextual information to audit measurement, design, and model failure.

A sample sum may be sufficient for a Bernoulli parameter while timestamps are needed to detect drift and unit identifiers are needed to detect duplication. A responsible system can compute with the reduction while retaining protected audit information under an appropriate governance policy.

<a id="section-189-11-a-sufficiency-audit"></a>
## 11. A sufficiency audit {#section-191-11-a-sufficiency-audit}

For every claimed reduction, ask:

1. What exact family of observation laws is being used?
2. Does conditional distribution given the statistic lose parameter dependence?
3. Can the density be factored with all parameter dependence through the statistic?
4. Does support depend on the parameter?
5. Is the statistic sufficient, minimal sufficient, ancillary, or merely convenient?
6. Would changing from normal to heavy-tailed, dependent, censored, or heterogeneous data invalidate the reduction?
7. Can Rao–Blackwellisation improve a proposed estimator?
8. What discarded data are still needed for design and model diagnostics?

<a id="section-202-12-exercises-with-complete-solutions"></a>
## 13. Investigation: a reduction and diagnostics ledger {#section-734-13-investigation-a-reduction-and-diagnostics-ledger}

For one exponential-family model and one plausible misspecified alternative, derive a sufficient statistic under the central family. Prove its factorisation, construct two datasets with the same statistic, and compare their likelihood ratio under both families. Design a storage plan that uses the statistic for routine fitting while retaining privacy-conscious diagnostics sufficient to detect the chosen departure. If code is used, include exact small cases and a numerical table rather than a plot alone.

<a id="section-736-15-conditional-laws-explain-exactly-what-reduction-pres"></a>
## 15. Conditional laws explain exactly what reduction preserves {#section-738-15-conditional-laws-explain-exactly-what-reduction-pres}

**Optional advanced formulation.** The general kernel identity below uses measure-theoretic conditional probability. Existence of regular conditional laws on the stated Borel spaces, and the most general dominated factorisation theorem, are analytical imports rather than new L3 proofs here. The countable-fibre argument and the explicitly constructed exponential kernel are proved directly and can be read independently of those existence results.

A useful way to read sufficiency is as a reconstruction claim. After recording a statistic $S$, can we generate a synthetic full observation with the same model law, using a recipe that does not know the parameter? This does not reconstruct the realised original observation. It reconstructs its conditional distribution, which is what likelihood comparisons and repeated-experiment risks require. The distinction matters: an unordered success count cannot tell us which subject succeeded, even when it preserves all information about one common success probability.

Write $K(s,B)$ for the reconstruction probability of a measurable data event $B$ when the retained value is $s$. A **common conditional kernel** means that $K(s,\cdot)$ is a probability measure, $K(\cdot,B)$ is measurable, and, for every parameter and measurable retained event $C$,
\[
 P_\theta(X\in B,S\in C)=\int_C K(s,B)\,P_\theta^S(ds).
\]
Here $P_\theta^S$ denotes the sampling law of $S$. The same function $K$ must work for the whole family. Choosing a different conditional formula for each unknown parameter does not produce an implementable reduction. Values of $K$ at retained outcomes impossible under every parameter are irrelevant; null-set statements always refer to the appropriate model law.

In finite or countable spaces the kernel is an ordinary table. Suppose masses factor as $f_\theta(x)=g_\theta(S(x))h(x)$, with finite nonnegative factors and counting measure. For a fibre $F_s=\{x:S(x)=s\}$, let $H_s=\sum_{x\in F_s}h(x)$. Whenever $s$ has positive probability for some parameter, $0<H_s<\infty$: its probability is $g_\theta(s)H_s$, so an attainable fibre cannot have zero or infinite normalising mass with a finite positive parameter factor. On that fibre set
\[
 K(s,\{x\})=1_{\{S(x)=s\}}h(x)/H_s.
\]
Summing this expression proves both normalisation and the conditional identity. Thus the cancellation in the earlier finite proof extends to a countable fibre when these sums exist. We need no informal conditioning on a zero-probability event.

Conversely, if a countable experiment has such a kernel, then
\[
 f_\theta(x)=P_\theta(S=S(x))K(S(x),\{x\}),
\]
which is a factorisation. This establishes the equivalence in that declared setting. It also reveals why a single statistic can be sufficient without being useful for compression: take $S=X$ and let $K$ put all mass on its input.

For general continuous observations, finite sums cannot simply be replaced by a quotient of probabilities of single points: both numerator and denominator are usually zero. In this chapter a continuous sufficiency argument must either construct a common kernel directly, or invoke the dominated factorisation theorem with its measurable-space and version hypotheses stated. Our applications have Euclidean observations and Borel statistics. Existence of ordinary regular conditional laws is part of the standard probability framework on these spaces; parameter independence still needs an argument. We do not prove the most general measure-theoretic factorisation theorem here. A density factorisation is the diagnostic calculation, while a common conditional kernel is the meaning of the reduction.

The Bernoulli kernel is especially concrete. Given $s$, choose uniformly among the $\binom ns$ binary arrangements. First draw $S$ from its binomial law, then apply this kernel. Each arrangement $x$ receives probability $\binom ns p^s(1-p)^{n-s}/\binom ns$, exactly the original product mass. The binomial coefficient is present in the retained law and absent from the conditional arrangement. Confusing those two distributions is a frequent source of incorrect likelihood factors.


There are now two parameter-dependent quantities worth keeping distinct. In the countable notation above, the **retained-data likelihood** is $P_\theta(S=s)=g_\theta(s)H_s$, whereas $g_\theta(s)$ is only the parameter-dependent factor in the full-data density. For fixed observed $s$, $H_s$ is constant in the parameter, so the two give the same likelihood ratios between candidate parameters. They need not be equal as probability masses. In the binomial example, $H_s=\binom ns$ counts how many arrangements yield that total. Omitting it from a sampling-distribution calculation gives incorrect tail probabilities, even though omitting it from a likelihood maximisation over $p$ changes no maximiser.

For an explicit small check, take $n=3$ and $s=1$. The retained-data probability is $3p(1-p)^2$. Each particular arrangement with one success has probability $p(1-p)^2$, and the reconstruction kernel assigns each of the three arrangements probability $1/3$. These three objects multiply and cancel in different places. The probability of a total is not the probability of one arrangement; the kernel is a distribution over arrangements at a fixed total; and the likelihood is a function of a candidate parameter at fixed observed data. Treating the kernel's uniformity as a uniform distribution over $p$ would confuse a sampling law with a prior.

This distinction also clarifies what sufficiency does not prove about stopping. If a protocol changes the sample space or the law of the total, the retained-data mass must be derived for that protocol. The fact that a particular parameter-dependent likelihood factor has the same algebraic appearance under two protocols does not by itself identify their sampling distributions, error rates or prediction targets. Sufficiency is assessed inside the full experiment, with the protocol included.

<a id="section-771-16-a-continuous-reconstruction-that-can-be-checked-by-h"></a>
## 16. A continuous reconstruction that can be checked by hand {#section-773-16-a-continuous-reconstruction-that-can-be-checked-by-h}

**Worked example 5.3.**

Consider two independent exponential observations of rate $\lambda>0$. The observation space is the nonnegative quadrant; endpoints have probability zero. Let $S=X_1+X_2$ and $V=X_1/S$ when $S>0$, with any fixed convention at $S=0$. The inverse map is $X_1=SV$, $X_2=S(1-V)$ for $s>0$, $0<v<1$. Its absolute Jacobian is $s$. Therefore the joint density in the new coordinates is
\[
 f_{S,V}(s,v)=\lambda^2 s e^{-\lambda s}1_{\{s>0\}}1_{\{0<v<1\}}.
\]
Integrating over $v$ shows that the first factor is the density of $S$. The second integrates to one and does not involve $\lambda$. Thus $V$ is uniform on $(0,1)$ and independent of $S$ for each rate.

This supplies an explicit reconstruction kernel: after retaining $s$, draw a fresh uniform $v$ and return $(sv,s(1-v))$. For any bounded measurable function $b$ of the full observation,
\[
 E_\lambda[b(X_1,X_2)\mid S=s]
   =\int_0^1 b(sv,s(1-v))\,dv.
\]
The right side is a function of $s$ and known quantities alone. Integrating it against the density of $S$ recovers the expectation under the original joint density by the change of variables above. That verifies the kernel rather than merely naming it.

For example, the original rule $U=X_1^2$ has conditional mean
\[
 g(S)=S^2\int_0^1v^2\,dv=S^2/3.
\]
Both have expectation $2/\lambda^2$. To check the latter without an imported gamma-moment formula, integrate $s^2$ against $\lambda^2s e^{-\lambda s}$; repeated integration by parts gives $E[S^2]=6/\lambda^2$. Conditioning has removed the random split of the total, not the variation in the total itself.

The example connects three different ideas. $S$ is sufficient because it supports parameter-free reconstruction; $V$ is ancillary because its marginal distribution is parameter-free; and here they are independent because the joint density factors into their marginal densities. Sufficiency alone does not assert that every imaginable residual is independent of the sufficient statistic. For instance $R=X_1-X_2=S(2V-1)$ has conditional variance $s^2/3$, which depends on $s$. Although the splitting coordinate $V$ is independent of $S$, multiplying it by the retained total changes that relationship. Nor is $R$ ancillary for the rate: changing $\lambda$ changes its scale.

A useful diagnostic question is consequently more precise than “is the residual noise?” Ask whether its **conditional** law is parameter-free, whether its **marginal** law is parameter-free, and whether its joint law factors with the retained statistic. Those are three mathematical statements with different proofs. The next chapter's Basu argument will provide an additional route to independence, using completeness; it will not erase the distinction.

<a id="section-798-17-support-profiles-repair-a-dangerous-likelihood-ratio"></a>
## 17. Support profiles repair a dangerous likelihood-ratio shortcut {#section-800-17-support-profiles-repair-a-dangerous-likelihood-ratio}

The positive-density likelihood-ratio criterion in Section 6 is convenient because division is then harmless. When support changes, a ratio can be undefined precisely where the data distinguish parameters. The safe preliminary question is whether two likelihood functions are proportional as functions of the entire parameter, including their zeros. If $S(x)=S(y)$ in a factorisation and the parameter-independent factors at those observations are positive, then
\[
 f_\theta(x)=c(x,y)f_\theta(y)\quad\hbox{for every }\theta
\]
for one positive constant $c(x,y)$. In particular the sets of parameter values giving positive density must agree. This is a necessary fibre check even before applying a minimal-sufficiency theorem. As usual with continuous densities, the chosen versions and common exceptional null sets matter; pointwise arbitrary changes to a density on null sets cannot define a new inferential theorem.

For iid $Uniform(0,\theta)$ observations in the strictly positive orthant,
\[
 f_\theta(x)=\theta^{-n}1_{\{M(x)<\theta\}},
\]
apart from immaterial boundary conventions. Samples with the same maximum have identical likelihood functions. Samples with different maxima do not have proportional likelihoods: if $M(x)<M(y)$, choose $\theta$ strictly between them. The first density is positive and the second zero. Thus the likelihood partition for the usual density versions is exactly the maximum partition. This is the support-aware counterpart of the ordinary minimal-sufficiency calculation. The factorisation already established sufficiency; the profile comparison identifies why a coarser usual likelihood partition would discard information.

For two observations, $(1,3)$ and $(2,3)$ have the same maximum. Their likelihood functions are equal for all $\theta$, including the zero region $\theta<3$. The samples $(1,2)$ and $(1,3)$ have different maxima. Looking only at $\theta>3$ would give ratio one and suggest a false reduction. The missing interval $2<\theta<3$ contains the discriminating evidence. Restricting a ratio calculation to the convenient intersection of supports can therefore reverse its conclusion.

The same warning applies to parameter restrictions. Under a model containing only $\theta\ge 10$, all these small observations have likelihood $\theta^{-2}$, so their support profiles no longer distinguish them. A reduction claim is always relative to the declared parameter family, not just a familiar distribution name. Enlarging or shrinking the parameter space can change the relevant equivalence classes.

There is another often missed qualification. A one-to-one transformation of a sufficient statistic retains sufficiency when it has a measurable inverse on the relevant range. For example the pair $(\sum X_i,\sum X_i^2)$ and the pair $(\bar X,\sum(X_i-\bar X)^2)$ determine one another for fixed known $n$. Replacing the first pair by just the sample variance is a further reduction, not a reparameterisation. If the normal mean is unknown, that further step loses location information. The word “summary” does not specify which of these operations has occurred.

<a id="section-818-18-conditioning-is-an-orthogonal-projection-under-squar"></a>
## 18. Conditioning is an orthogonal projection under squared loss {#section-820-18-conditioning-is-an-orthogonal-projection-under-squar}

For a square-integrable real statistic $U$ at a fixed parameter, put $g(S)=E_\theta[U\mid S]$. Under sufficiency we choose the common version determined by the kernel. Let $r=U-g(S)$. For every square-integrable function $a(S)$ for which the product is integrable,
\[
 E_\theta[r\,a(S)]
 =E_\theta[a(S)E_\theta[r\mid S]]=0.
\]
Thus the removed part has zero inner product with every retained-data function. This is the geometric reason for the variance reduction: the squared length of a vector is the sum of the squared lengths of perpendicular components.

For a fixed scalar target $\tau(\theta)$, write
\[
 U-\tau=(g(S)-\tau)+r.
\]
Squaring and averaging kills the cross term, giving the stronger risk identity
\[
 E_\theta[(U-\tau)^2]
 =E_\theta[(g(S)-\tau)^2]+E_\theta[r^2].
\]
All quantities are finite under the square-integrability assumption. Equality holds exactly when $r=0$ almost surely under that parameter law. A strict improvement at one parameter does not automatically imply strict improvement at every parameter; at a degenerate Bernoulli endpoint, for example, both $X_1$ and $S/n$ are already deterministic.

The projection interpretation also explains why two ingredients are needed. Conditional expectation always reduces squared error at a fixed law. Sufficiency makes the conditional average computable by one parameter-free recipe across the family, so it becomes an estimator rather than a collection of formulas indexed by the unknown truth. Without sufficiency, an apparent improvement may secretly use the answer. For one observation $X\sim Normal(\mu,1)$, conditioning $X$ on a constant gives $\mu$, which has zero error but is not a usable statistic when $\mu$ is unknown.

For general convex loss, conditional Jensen replaces perpendicular geometry. Its use requires an action space closed under the relevant conditional averaging, such as a convex subset of Euclidean space, and expectations for which Jensen and averaging are valid. If actions are restricted to the two labels $\{0,1\}$, a conditional mean such as $0.3$ is not an admissible deterministic label. We may instead preserve the original action distribution by randomisation; that is a different argument.

To see the risk-preserving argument precisely, let a full-data rule assign action $a$ with probability $\delta(x,a)$ in a finite action space. After retaining $s$, use
\[
 \widetilde\delta(s,a)=\int\delta(x,a)\,K(s,dx).
\]
These probabilities sum to one. For any nonnegative loss, summing over actions and integrating the kernel identity shows that the new rule has exactly the old risk at every parameter. For signed losses one additionally needs absolute integrability to interchange integrals. Sufficient reduction preserves this randomised decision menu; convex-loss averaging may improve within a narrower real-action problem. Keeping the two arguments separate prevents a theorem about simulation from becoming an unjustified claim of universal deterministic optimality.

<a id="section-848-19-diagnostics-ask-questions-outside-the-central-family"></a>
## 19. Diagnostics ask questions outside the central family {#section-850-19-diagnostics-ask-questions-outside-the-central-family}

The preceding equal-risk calculation has a declared universe: the family for which the kernel is common. A statistic sufficient within that family can discard precisely the data that help us notice its failure. This is not a paradox. Fitting asks which member of the family best describes the observation; diagnosis asks whether that family is an adequate description at all.

For a normal location family with known variance, a sum supports all likelihood comparisons for the mean. The sum alone cannot distinguish a pair of opposing outliers from two observations close to their common centre. The two datasets have different residual structure even when their means agree. Adding unknown variance changes the sufficient statistic to include squared deviations, but still does not encode every feature of time order or tail shape. Adding arbitrary serial dependence changes the model again. There is no permanent list of “irrelevant” columns independent of the assumptions.

A practical ledger should distinguish an exact inferential identity from a chosen diagnostic. The identity is a formula such as $f_\mu(x)=g_\mu(S(x))h(x)$ valid for all observations in its declared space and all parameter values. A diagnostic is a retained function intended to reveal a specified departure. Its usefulness needs a separate argument or calibration. Preserving a residual sum of squares can reveal that two equal-mean samples differ in spread. It does not prove that an observed large value came from contamination, and it cannot guarantee detection of every nonnormal law from a finite sample.

This gives a disciplined response to the investigation's storage request. State the departure of interest before selecting retained summaries. If the departure is time drift, retain an approved time-order summary or protected ordering information; an unordered variance cannot reconstruct it. If the departure is a particular tail change, retain an appropriate tail or absolute-deviation summary and state which alternatives it distinguishes. A table of exact likelihood ratios for two supplied datasets is useful evidence about those datasets, not a calibrated hypothesis test for all future observations.

Provenance has a further role. A duplicated subject or an altered measurement scale may leave a chosen numerical summary unchanged while invalidating the experiment. Retaining an audit trail therefore requires design and measurement information as well as model-based sufficient statistics. Mathematical sufficiency does not settle who may access identifiers or whether a proposed summary protects privacy. Those require the relevant local governance process. The mathematical ledger can honestly record which information the calculation uses and which diagnostic questions become impossible after deletion.

Before compressing, try two opposing checks. Construct equal-summary samples and verify their within-family likelihood functions are proportional; then choose a plausible departure and ask whether those same samples still look equivalent. Success in the first check supports the proposed reduction. Failure in the second identifies information worth retaining for that stated diagnostic purpose. Neither finite demonstration replaces a proof over the whole sample space, but together they make the model-relative content of sufficiency visible.

<a id="section-862-20-si-05-p01-one-complete-reduction-and-diagnostics-ref"></a>
## 20. SI-05-P01: one complete reduction and diagnostics reference {#section-864-20-si-05-p01-one-complete-reduction-and-diagnostics-ref}

This is one admissible synthetic instantiation of the original open investigation, not a replacement for its choice of model or storage policy. Take two independent real measurements. The central model is $Normal(\mu,1)$ with unknown $\mu\in\mathbb R$; the alternative is iid Laplace location with known scale one and the same unknown location. The observation space and the parameter space are explicit. No numbers below are empirical observations or simulation results.

For the central model write $S=x_1+x_2$ and $Q=x_1^2+x_2^2$. Its density factors as
\[
 f_\mu^N(x)=(2\pi)^{-1}e^{-Q/2}\,
                e^{\mu S-\mu^2}.
\]
The parameter-dependent factor uses only $S$, proving sufficiency under the dominated normal model. Equivalently, the normal sum and difference have a joint density that factors after the linear change of coordinates; conditional on the sum, the difference has a parameter-free normal law.

Choose $x=(-1,1)$ and $y=(0,0)$. Both have $S=0$, while $Q(x)=2$ and $Q(y)=0$. Therefore $f_\mu^N(x)/f_\mu^N(y)=e^{-1}$ for every real $\mu$. The ratio need not equal one: the discarded factor may favour one observation over another without depending on the unknown mean.

The alternative density is
\[
 f_\mu^L(z)=\tfrac14
  \exp\{-|z_1-\mu|-|z_2-\mu|\}.
\]
Consequently the equal-sum ratio is
\[
 \frac{f_\mu^L(x)}{f_\mu^L(y)}
 =\exp\{-|-1-\mu|-|1-\mu|+2|\mu|\}.
\]
For $|\mu|\le1$ the two absolute distances in the numerator sum to two, giving $e^{-2+2|\mu|}$; for $|\mu|\ge1$ they sum to $2|\mu|$, giving one. The formulas agree at the boundary. In particular:

| candidate location | normal ratio | Laplace ratio |
| --- | --- | --- |
| $-2$ | $e^{-1}$ | $1$ |
| $0$ | $e^{-1}$ | $e^{-2}$ |
| $2$ | $e^{-1}$ | $1$ |

The normal ratio is parameter-free; the Laplace ratio is not. Thus the normal sufficient reduction does not carry over to the alternative. These are ratios of density values, not probabilities of observing an exact real-valued point.

For routine normal fitting retain $n=2$, $S$, the known measurement scale and protocol. To preserve the distinction between these two supplied records, retain $Q$ or the centred sum of squares $Q-S^2/2$ as an additional diagnostic summary. If the actual diagnostic aim is to inspect Laplace location fits across a range of candidate locations, a protected raw record or an appropriately approved absolute-deviation profile is needed; this two-number example does not prove that $Q$ suffices for that broader task. Retain design and measurement provenance according to the applicable access policy. This is a mathematical storage-use map, not a privacy certification.

For a changed case take $x'=(-2,2)$ and the same $y=(0,0)$. Both sums remain zero. Now $Q(x')=8$, so the normal ratio is $e^{-4}$ for every $\mu$. The Laplace ratio is $e^{-4+2|\mu|}$ when $|\mu|\le2$ and one when $|\mu|\ge2$. At $\mu=0$ it is $e^{-4}$; at $\mu=3$ it is one. The equality of the two ratios at the single candidate zero does not establish sufficiency: parameter-free proportionality must hold across the entire parameter family.

A self-review can check five claims separately: the factorisation and its known-scale assumptions; equality of the two sums and the unequal residual summaries; the exact normal ratio; the piecewise Laplace calculation including its boundary; and a storage statement tied to a named diagnostic with no universal detection or privacy claim. A failed absolute-value branch calls for a piecewise-distance repair. A claim that equal means imply equal likelihoods calls for separating the parameter-dependent factor from the observation-dependent factor. This public reference supplies comparison and repair criteria; it does not record unseen learner work or validate a workload estimate.

<a id="section-901-21-optional-practice-extensions"></a>

## Summary

<a id="section-978-14-summary-and-forward-route"></a>
Sufficiency makes conditional residual variation parameter-free; factorisation recognises that property in dominated families. Minimal sufficiency removes redundant detail, ancillarity describes parameter-free marginal variation, and Rao–Blackwellisation removes avoidable conditional noise under convex loss. Reduction remains model-relative and must not erase the provenance needed to audit the model. The next main chapter adds completeness, unbiased estimation and information bounds. Equivariance and shrinkage are developed in the optional advanced L4 continuation Equivariance, Shrinkage, and Minimaxity.

## Exercises {#section-204-12-exercises-with-complete-solutions}

<a id="section-204-1-bernoulli-conditional-arrangement"></a>
### 1. Bernoulli conditional arrangement {#section-206-1-bernoulli-conditional-arrangement}

**Exercise 5.1**

For $n=4$ iid Bernoulli trials, find the conditional probability of sequence $(1,0,1,0)$ given $S=2$.

<details>
<summary>Hint 1</summary>

Condition on the number of successes before comparing arrangements.

</details>
<details>
<summary>Hint 2</summary>

There are six arrangements with two successes; each has the same product mass for interior p.

</details>
<details>
<summary>Solution</summary>

**Solution.** All $\binom{4}{2}=6$ sequences with two successes have equal conditional probability, so the answer is $1/6$, independent of $p$.

</details>

<a id="section-229-2-factor-bernoulli-likelihood"></a>
### 2. Factor Bernoulli likelihood {#section-231-2-factor-bernoulli-likelihood}

**Exercise 5.2**

Give $g_p$ and $h$ in the factorisation theorem for iid Bernoulli data.

<details>
<summary>Hint 1</summary>

Write the product mass in terms of the sum of the binary observations.

</details>
<details>
<summary>Hint 2</summary>

Put all powers of p and 1−p into g; the observation-only factor can be one.

</details>
<details>
<summary>Solution</summary>

**Solution.** With $S=\sum x_i$, take

$g_p(S)=p^S(1-p)^{n-S}$ and $h(x)=1$.

All parameter dependence passes through $S$.

</details>

<a id="section-258-3-exponential-sufficiency"></a>
### 3. Exponential sufficiency {#section-260-3-exponential-sufficiency}

**Exercise 5.3**

Show the sum is sufficient for the rate of iid exponential observations.

<details>
<summary>Hint 1</summary>

Multiply the independent exponential densities, retaining their common support.

</details>
<details>
<summary>Hint 2</summary>

The exponent contains the observations only through their sum; separate the nonnegative-orthant indicator.

</details>
<details>
<summary>Solution</summary>

**Solution.** The joint density is

$\lambda ^n \exp\left(-\lambda \sum x_i\right)1_{all x_i\ge 0}$.

Set $g_\lambda (t)=\lambda ^ne^{-\lambda t}$ and $h(x)=1_{all x_i\ge 0}$; factorisation proves sufficiency.

</details>

<a id="section-287-4-uniform-endpoint"></a>
### 4. Uniform endpoint {#section-289-4-uniform-endpoint}

**Exercise 5.4**

Why does the sample maximum, rather than the mean, appear in the uniform endpoint likelihood?

<details>
<summary>Hint 1</summary>

Ask which candidate endpoints can generate every observation.

</details>
<details>
<summary>Hint 2</summary>

The support condition must hold simultaneously for all coordinates, so its threshold is their maximum.

</details>
<details>
<summary>Solution</summary>

**Solution.** The joint density is positive exactly when $\theta \ge \max_i x_i$, and inside that region equals $\theta ^{-n}$. Both the support constraint and parameter factor depend on data only through the maximum.

</details>

<a id="section-312-5-normal-sufficient-pair"></a>
### 5. Normal sufficient pair {#section-314-5-normal-sufficient-pair}

**Exercise 5.5**

Show $(\sum X_i,\sum X_i^{2})$ and $(\bar{X},\sum (X_i-\bar{X})^{2})$ determine each other.

<details>
<summary>Hint 1</summary>

Expand each centred square and use the definition of the sample mean.

</details>
<details>
<summary>Hint 2</summary>

The centred sum is the raw sum of squares minus n times the squared mean; solve these identities backwards.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\bar{X}=(\sum X_i)/n$, and

$\sum (X_i-\bar{X})^{2}=\sum X_i^{2}-n\bar{X}^{2}$.

Conversely $\sum X_i=n\bar{X}$ and $\sum X_i^{2}=\sum (X_i-\bar{X})^{2}+n\bar{X}^{2}$. Thus the transformation is one-to-one.

</details>

<a id="section-341-6-a-one-to-one-change-of-a-sufficient-statistic"></a>
### 6. A one-to-one change of a sufficient statistic {#section-343-6-a-one-to-one-change-of-a-sufficient-statistic}

**Exercise 5.6**

If $T$ is sufficient and $R=h(T)$ for one-to-one measurable $h$ whose inverse on its image is measurable, prove $R$ is sufficient. (This inverse condition holds, for example, for an injective Borel map between standard Borel statistic spaces.)

<details>
<summary>Hint 1</summary>

Show that each statistic can be recovered measurably from the other.

</details>
<details>
<summary>Hint 2</summary>

Use the measurable inverse to identify their information, then reuse the parameter-free conditional law.

</details>
<details>
<summary>Solution</summary>

**Solution.** Because $h^{-1}$ is measurable on the image, $T=h^{-1}(R)$ is a statistic recoverable from $R$. Conversely, $R=h(T)$ is measurable in $T$, so the two statistics generate the same sigma-field. Conditioning on $R$ is therefore equivalent to conditioning on $T$, whose conditional data law is parameter-free.

</details>

<a id="section-366-7-coarsening-may-fail"></a>
### 7. Coarsening may fail {#section-368-7-coarsening-may-fail}

**Exercise 5.7**

Is parity of the Bernoulli success count sufficient for $p$ when $n\ge 2$?

<details>
<summary>Hint 1</summary>

Find two binary samples with even totals but different totals.

</details>
<details>
<summary>Hint 2</summary>

Compare totals zero and two; cancellation leaves a factor depending on the odds p/(1−p).

</details>
<details>
<summary>Solution</summary>

**Solution.** No. For example, two fixed binary data sequences with success counts 0 and 2 have the same even parity but likelihood ratio

$(1-p)^n/[p^{2}(1-p)^{n-2}]=(1-p)^{2}/p^{2}$,

which depends on $p$. The coarsening merges observations with different likelihood information.

</details>

<a id="section-395-8-laplace-counterexample"></a>
### 8. Laplace counterexample {#section-397-8-laplace-counterexample}

**Exercise 5.8**

For samples $(-1,1)$ and $(0,0)$, compute their Laplace location likelihood ratio at $\mu =0$ and $\mu =2$.

<details>
<summary>Hint 1</summary>

Evaluate the sum of absolute distances for each sample at each candidate location.

</details>
<details>
<summary>Hint 2</summary>

At location zero the sums differ by two; at location two they agree.

</details>
<details>
<summary>Solution</summary>

**Solution.** At zero, absolute-deviation sums are 2 and 0, so the ratio is $e^{-2}$. At two, both sums equal 4, so the ratio is 1. Dependence on $\mu $ proves equal sample means do not form sufficient classes.

</details>

<a id="section-420-9-minimal-bernoulli-statistic"></a>
### 9. Minimal Bernoulli statistic {#section-422-9-minimal-bernoulli-statistic}

**Exercise 5.9**

Why do sequences with different success counts have a parameter-dependent likelihood ratio?

<details>
<summary>Hint 1</summary>

Cancel the two product masses at counts s and t.

</details>
<details>
<summary>Hint 2</summary>

The remaining factor is a nonzero power of the odds unless the counts agree.

</details>
<details>
<summary>Solution</summary>

**Solution.** If counts are $s$ and $t$, the ratio is

$p^{s-t}(1-p)^{(n-s)-(n-t)}=[p/(1-p)]^{s-t}$.

For $s\ne t$ it changes with $p$, so minimal sufficient classes are exactly equal-count classes.

</details>

<a id="section-449-10-ancillary-normal-difference"></a>
### 10. Ancillary normal difference {#section-451-10-ancillary-normal-difference}

**Exercise 5.10**

For independent $Normal(\mu ,\sigma ^{2})$ variables with known $\sigma $, find the law of $X_1-X_2$.

<details>
<summary>Hint 1</summary>

A linear combination of independent normal observations is normal.

</details>
<details>
<summary>Hint 2</summary>

Subtract the means and add the two variances; check that the unknown location disappears.

</details>
<details>
<summary>Solution</summary>

**Solution.** The mean is $\mu -\mu =0$; independence gives variance $\sigma ^{2}+\sigma ^{2}=2\sigma ^{2}$. The difference is normal, so its law is $Normal(0,2\sigma ^{2})$, independent of $\mu $ and therefore ancillary for location.

</details>

<a id="section-474-11-an-ancillary-rank"></a>
### 11. An ancillary rank {#section-476-11-an-ancillary-rank}

**Exercise 5.11**

For two iid observations from any continuous distribution, find the probability $X_1<X_2$.

<details>
<summary>Hint 1</summary>

Exchange the two observation labels.

</details>
<details>
<summary>Hint 2</summary>

Continuity removes ties, so the two strict orderings have equal probabilities summing to one.

</details>
<details>
<summary>Solution</summary>

**Solution.** Exchangeability makes $P(X_1<X_2)=P(X_2<X_1)$. Continuity gives tie probability zero, so the two probabilities sum to one and each equals $1/2$, independent of the distribution parameter.

</details>

<a id="section-499-12-rao-blackwell-expectation"></a>
### 12. Rao–Blackwell expectation {#section-501-12-rao-blackwell-expectation}

**Exercise 5.12**

Prove $E[E[U|S]]=E[U]$.

<details>
<summary>Hint 1</summary>

Apply the defining averaging identity for conditional expectation to the whole observation space.

</details>
<details>
<summary>Hint 2</summary>

For integrable U, the constant test function one gives equality of unconditional means.

</details>
<details>
<summary>Solution</summary>

**Solution.** This is the tower property of conditional expectation. It shows Rao–Blackwellisation preserves the estimator's mean and hence its bias for a fixed target.

</details>

<a id="section-524-13-rao-blackwell-variance"></a>
### 13. Rao–Blackwell variance {#section-526-13-rao-blackwell-variance}

**Exercise 5.13**

When does $Var(E[U|S])=Var(U)$?

<details>
<summary>Hint 1</summary>

Use total variance for a square-integrable U.

</details>
<details>
<summary>Hint 2</summary>

The variance difference is an expectation of a nonnegative conditional variance; identify when it vanishes.

</details>
<details>
<summary>Solution</summary>

**Solution.** From total variance,

$Var(U)=Var(E[U|S])+E[Var(U|S)]$.

Equality holds exactly when $Var(U|S)=0$ almost surely, meaning $U$ is already a function of $S$ up to a null set.

</details>

<a id="section-553-14-bernoulli-variance-improvement"></a>
### 14. Bernoulli variance improvement {#section-555-14-bernoulli-variance-improvement}

**Exercise 5.14**

Compare variances of $X_1$ and $S/n$.

<details>
<summary>Hint 1</summary>

Use independence to compute the variance of the sum.

</details>
<details>
<summary>Hint 2</summary>

Divide the sum variance by n squared, and distinguish interior p from degenerate endpoints.

</details>
<details>
<summary>Solution</summary>

**Solution.** $Var(X_1)=p(1-p)$. Independence gives $Var(S/n)=np(1-p)/n^{2}=p(1-p)/n$, smaller for $n>1$ and interior $p$.

</details>

<a id="section-578-15-convex-loss-improvement"></a>
### 15. Convex-loss improvement {#section-580-15-convex-loss-improvement}

**Exercise 5.15**

State the inequality that drives general Rao–Blackwell risk improvement.

<details>
<summary>Hint 1</summary>

Apply Jensen conditionally, with theta fixed.

</details>
<details>
<summary>Hint 2</summary>

Check convexity of the action space and loss, and the integrability needed to average the inequality.

</details>
<details>
<summary>Solution</summary>

**Solution.** Conditional Jensen gives

\[L(\theta ,E[U|S])\le E[L(\theta ,U)|S]\]

when $a\mapsto L(\theta ,a)$ is convex and integrability holds. Taking expectation yields no larger risk.

</details>

<a id="section-607-16-sufficiency-versus-identification"></a>
### 16. Sufficiency versus identification {#section-609-16-sufficiency-versus-identification}

**Exercise 5.16**

Can a statistic be sufficient when the parameter is not identifiable?

<details>
<summary>Hint 1</summary>

Separate preservation of the observed law from distinguishing parameter labels.

</details>
<details>
<summary>Hint 2</summary>

Consider a family whose observation law is identical at every parameter value.

</details>
<details>
<summary>Solution</summary>

**Solution.** Yes. If all parameter values produce the same data law, even a constant statistic is sufficient because the conditional law cannot depend on the parameter. Yet distinct parameter values remain observationally indistinguishable.

</details>

<a id="section-632-17-full-data"></a>
### 17. Full data {#section-634-17-full-data}

**Exercise 5.17**

Why is $T(X)=X$ always sufficient?

<details>
<summary>Hint 1</summary>

Condition on the observation itself.

</details>
<details>
<summary>Hint 2</summary>

The reconstruction kernel can return its input with probability one, regardless of the unknown parameter.

</details>
<details>
<summary>Solution</summary>

**Solution.** Conditional on the full observation $X=x$, the data are degenerate at $x$, a conditional distribution independent of $\theta $. This proves sufficiency but performs no reduction.

</details>

<a id="section-657-18-diagnostic-information"></a>
### 18. Diagnostic information {#section-659-18-diagnostic-information}

**Exercise 5.18**

Why might a time ordering be retained even if the unordered success count is sufficient under an iid Bernoulli model?

<details>
<summary>Hint 1</summary>

Recall that sufficiency is relative to the stated iid family.

</details>
<details>
<summary>Hint 2</summary>

Ask which departures, such as drift or dependence, become invisible after discarding order.

</details>
<details>
<summary>Solution</summary>

**Solution.** Order can reveal drift, serial dependence, protocol changes, or stopping effects that violate iid assumptions. Sufficiency is conditional on the central model; model checking needs information that can expose departures from it.

</details>

<a id="section-682-19-algorithmic-compression"></a>
### 19. Algorithmic compression {#section-684-19-algorithmic-compression}

**Exercise 5.19**

An optimizer needs only $\sum X_i$, but the model is a Laplace location family. Does computational sufficiency prove statistical sufficiency?

<details>
<summary>Hint 1</summary>

Distinguish an algorithm's inputs from the model's entire likelihood.

</details>
<details>
<summary>Hint 2</summary>

For Laplace location, compare the absolute-deviation profile with the single retained sum.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. It proves only that this implementation consumes the sum. The Laplace likelihood depends on $\sum |X_i-\mu |$, not only the mean or sum, so the compression can discard inferential information.

</details>

<a id="section-707-20-unknown-parameter-in-a-statistic"></a>
### 20. Unknown parameter in a statistic {#section-709-20-unknown-parameter-in-a-statistic}

**Exercise 5.20**

Why is $T(X)=X-\theta $ not a statistic for unknown $\theta $?

<details>
<summary>Hint 1</summary>

A statistic must be computable from observations and known quantities.

</details>
<details>
<summary>Hint 2</summary>

Check whether forming the proposed expression requires the unknown value being estimated.

</details>
<details>
<summary>Solution</summary>

**Solution.** A statistic must be computable from observed data and known design quantities without using the unknown parameter. $X-\theta $ is a theoretical pivot component, not an observed statistic until a candidate value is supplied.

</details>

<a id="section-732-13-investigation-a-reduction-and-diagnostics-ledger"></a>

<a id="section-903-21-optional-practice-extensions"></a>
### 21. SI-05-E21: reconstruct the exponential split {#section-905-si-05-e21-reconstruct-the-exponential-split}

**Exercise 5.21**

For the two-exponential model in Section 16, derive the conditional expectation of $X_1X_2$ given $S=s$. Check its unconditional expectation by using the density of $S$ from that section. Explain which part of the original variation conditioning removes.


<details>
<summary>Hint 1</summary>

Use the reconstruction X1=sv and X2=s(1−v) with uniform v.

</details>
<details>
<summary>Hint 2</summary>

Integrate v(1−v) on (0,1), then average the resulting multiple of S squared using its stated second moment.

</details>

<a id="section-923-si-05-e22-retain-an-admissible-action"></a>
### 22. SI-05-E22: retain an admissible action {#section-925-si-05-e22-retain-an-admissible-action}

**Exercise 5.22**

A full-data classification rule in a finite experiment chooses label one on an event $B$ and label zero otherwise. A sufficient statistic has common kernel $K$. Give a rule using only the statistic and independent randomisation with the same risk for every parameter and every finite loss on the two labels. Explain why replacing the label by its conditional mean is a different decision problem.


<details>
<summary>Hint 1</summary>

Average the original indicator over the common reconstruction kernel.

</details>
<details>
<summary>Hint 2</summary>

Use a fresh independent uniform variable to choose label one with probability K(s,B); compare the two label probabilities before calculating risk.

</details>

<a id="section-943-22-solutions-to-optional-practice-extensions"></a>

## Solutions

<a id="section-945-22-solutions-to-optional-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-948-si-05-e21-reconstruct-the-exponential-split-solution"></a>
### SI-05-E21: reconstruct the exponential split — solution {#section-950-si-05-e21-reconstruct-the-exponential-split-solution}

The reconstruction is $(sv,s(1-v))$ with $v$ uniform on $(0,1)$. Hence
\[
 E[X_1X_2\mid S=s]
 =s^2\int_0^1v(1-v)\,dv=s^2(1/2-1/3)=s^2/6.
\]
Since $E[S^2]=6/\lambda^2$, its expectation is $1/\lambda^2$, agreeing with independence and $E[X_1]E[X_2]=(1/\lambda)^2$. Conditioning removes the random allocation of a given total between the two coordinates; the total remains random. The answer is a computable function of the retained statistic, with no unknown rate in its formula.

</details>

<details>
<summary>Solution</summary>

<a id="section-962-si-05-e22-retain-an-admissible-action-solution"></a>
### SI-05-E22: retain an admissible action — solution {#section-964-si-05-e22-retain-an-admissible-action-solution}

Given $S=s$, choose label one with probability $q(s)=K(s,B)$ and label zero otherwise, using a fresh uniform random variable independent of the data to implement this probability. The resulting marginal probability of label one under any $\theta$ is
\[
 E_\theta[q(S)]=E_\theta[E_\theta[1_B\mid S]]=P_\theta(B).
\]
Thus both label probabilities match those of the original rule. For fixed $\theta$, expected loss is the sum of those two probabilities multiplied by $L(\theta,1)$ and $L(\theta,0)$, so risks agree. The deterministic real action $q(s)$ generally lies outside $\{0,1\}$ and requires a loss defined for intermediate real actions. Conditional Jensen would apply only after declaring that different convex-action decision problem; it is not the argument used here.

</details>

<a id="section-972-sources"></a>

## Sources {#section-974-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-976-14-summary-and-forward-route"></a>
