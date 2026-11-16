
# Hierarchical Uncertainty and Prediction

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).

This chapter continues [Hierarchical Population Models](hierarchical-population-models.md), retaining its notation, model and observation protocol. Read that treatment before importing a displayed formula whose parameters were defined there.

## Coordinate changes preserve the target only with the right Jacobian

A centered normal hierarchy uses $(\mu,\tau,\theta_1,\ldots,\theta_J)$ as coordinates. Its population density contains $\tau^{-J}\exp[-\sum_j(\theta_j-\mu)^2/(2\tau^2)]$. Introduce standardized effects $z_j=(\theta_j-\mu)/\tau$. For fixed $\mu,\tau$, the map from $z$ to $\theta$ has diagonal derivative $\tau I_J$ and determinant $\tau^J$. In the full transformation retaining $\mu,\tau$, the derivative is block triangular, so the extra derivatives of $\theta$ with respect to those retained variables do not change this determinant.

Multiplying the centered density by $\tau^J$ cancels its population normalizing factor. The noncentered population density becomes $\prod_jN(z_j\mid0,1)$, with likelihood evaluated at $\theta_j=\mu+\tau z_j$. The posterior distribution of the original effects is unchanged if the change of variables is implemented correctly. A better-looking trace after omitting a Jacobian would describe a different posterior.

If a sampler also uses $\eta=\log\tau$, the support $\tau>0$ becomes $\eta\in\mathbb R$ and $d\tau/d\eta=e^\eta$. The noncentered log target is therefore
\[
-\frac{(\mu-m_0)^2}{2V_0}-\frac{e^{2\eta}}{2a^2}
-\frac12\sum_jz_j^2
-\frac12\sum_j\frac{(y_j-\mu-e^\eta z_j)^2}{\sigma_j^2}
+\eta+\text{constant}.
\]
The final $+\eta$ is still needed after the $\tau^J$ cancellation. The half-normal density is a density with respect to $d\tau$, not $d\eta$.

In centered coordinates with $\eta$ instead of $\tau$, the corresponding terms include
\[
-(J-1)\eta-\frac12e^{-2\eta}\sum_j(\theta_j-\mu)^2
-\frac{e^{2\eta}}{2a^2}.
\]
The coefficient $-(J-1)$ combines $-J\eta$ from the population normal densities with $+\eta$ from transforming the scale. Applying another $\tau^J$ correction while already assigning standard normal priors to $z$ would double-count the transformation.

The distinction can be checked by a small dimensional example. With two effects, the centered normal population density has factor $\tau^{-2}$. The map $\theta=\mu+\tau z$ contributes $\tau^2$, leaving no scale factor in the standardized normal population law. Changing from $\tau$ to its logarithm then contributes one additional factor $\tau$, regardless of the number of effects.

These are coordinate identities. They do not prove that a particular HMC or NUTS implementation preserves the transformed posterior; momentum refreshment, integration, trajectory selection and Metropolis correction have their own conditions in the sampler chapter. Parameterization can change computational geometry without changing the intended probability model, which is precisely why an independent density and Jacobian derivation is a useful implementation check.



## Funnel geometry depends on how much each group is observed

The centered prior constrains $\theta_j-\mu$ to scale $\tau$. When $\tau$ is small, a change in an effect of fixed absolute size can make the log density change sharply. At fixed hyperparameters, the negative second derivative of the effect log posterior is $\sigma_j^{-2}+\tau^{-2}$. Its curvature grows without bound as $\tau$ approaches zero. A step size suitable for a broad region can therefore be unstable or inaccurate in a narrow region.

For a scalar quadratic potential with curvature $\lambda>0$ and unit mass, leapfrog's stability threshold is $\epsilon\sqrt\lambda<2$. This local quadratic fact explains the scale issue, rather than establishing a universal step-size rule for a nonlinear hierarchy. In the centered conditional direction the small-$\tau$ scale is of order $\tau$, so one global integrator step may be constrained by the neck. A small stable step remains permissible in the wide region; it may simply require more steps to traverse a useful distance. Large steps in the mouth are not a mathematical necessity.

The noncentered coordinates have a standard normal prior for $z_j$. Their conditional likelihood contribution has curvature $\tau^2/\sigma_j^2$ in that direction, so the total conditional curvature is $1+\tau^2/\sigma_j^2$. For weak observations, $\sigma_j$ is large relative to relevant $\tau$, and the posterior can remain close to the independent standardized prior in those coordinates. The data then perturb a relatively regular reference geometry.

With strong observations, the likelihood instead constrains $\mu+\tau z_j$ to be close to $y_j$. Varying $\tau$ requires coordinated movement of $z_j$ to preserve that fitted value. Centered effects can be preferable because the data directly constrain $\theta_j$. Thus neither parameterization dominates for every dataset. Mixed information across groups can motivate a carefully derived partial noncentering rather than a universal switch.

The shrinkage weight gives a numerical diagnostic of these regimes without becoming a convergence test. If $\tau=2$ and $\sigma_j=10$, then $w_j=1/26$: the group datum contributes little conditional precision and standardization is often helpful. If $\sigma_j=1/5$ at the same scale, then $w_j=100/101$: the likelihood is highly informative about the effect and centered coordinates may be easier. These calculations describe curvature and information balance at selected hyperparameters; they are not measured ESS or wall-clock improvements.

An implementation comparison must use the same data, proper priors, estimands and cost accounting. Comparing a centered model with one prior to a noncentered model with another would confound geometry with a changed posterior. Likewise, divergences and numerical warnings must be defined by the actual sampler implementation. The independent hierarchical reference later in this chapter supplies the target and moments; it does not manufacture NUTS trajectories or divergence observations.

## Likelihood identification differs from finite information and prior regularization

Identification asks whether different parameter values imply different distributions for observable data. Precision asks how much a finite dataset distinguishes those distributions. A proper posterior asks whether a prior-likelihood product is integrable. These questions are related but none is a synonym for the others.

In the normal hierarchy with known observation variances and $\tau\ge0$, the marginal observation distribution at fixed hyperparameters has mean $\mu\mathbf1$ and covariance $\operatorname{diag}(\sigma_j^2)+\tau^2I$. Different values of $\mu$ or $\tau^2$ give different distributions. The model is identifiable at that level even though a small number of groups may estimate the population scale poorly. Restricting $\tau$ to nonnegative values is important: an unrestricted signed scale would give the same distribution at $\tau$ and $-\tau$.

For a more quantitative view, at fixed $\tau$ the likelihood precision for $\mu$ is $R=\sum_jD_j^{-1}$. For the scale parameter, the expected Fisher information is $2\tau^2\sum_jD_j^{-2}$. To derive it, differentiate each normal variance $D_j$ with respect to $\tau$ and use the normal identity that variance information is one half of the squared relative derivative. The resulting information in the $\tau$ coordinate tends to zero at the boundary. In the variance coordinate $u=\tau^2$, it is instead $\tfrac12\sum_jD_j^{-2}$ at $u=0$. Boundary geometry and coordinate sensitivity matter; zero derivative in one coordinate is not proof of a globally unidentified distribution.

Prior sensitivity has a similarly limited implication. Consider a likelihood proportional to $\exp[-(\mu-y)^2/(2s^2)]$ and a prior $N(m_0,v_0)$. The posterior mean is $(v_0y+s^2m_0)/(v_0+s^2)$. Even if $s^2$ is small, an even smaller $v_0$ can make a strongly conflicting prior dominate. Changing that prior can materially move the posterior despite a sharply concentrated likelihood. Observed sensitivity establishes sensitivity to the tested choices; assessing information also requires likelihood scale, prior plausibility and the functional being reported.

Crossed effects provide an exact nonidentification example. If every school is paired with exactly one neighborhood and there are no crossing observations, independent school and neighborhood random effects can contribute only their summed variance to each marginal observation. With identical incidence matrices the covariance involves $\tau_u^2+\tau_v^2$, not the two components separately. Proper priors can allocate that sum between the components and produce a proper posterior, but they cannot create a likelihood distinction the design lacks.

These distinctions help decide what to report. A narrow posterior need not mean the data identified every component; it may reflect strong prior regularization. A broad posterior need not mean a parameter is structurally unidentified; finite information may simply be weak. Report the design, observation uncertainties, prior scales and the specific contrasts supported by them before drawing a conclusion from interval width alone.

## Exchangeability is conditional on the information declared relevant

The latent effects can be exchangeable before observing data even when the observations have different known standard errors. Conditional on shared hyperparameters, the prior density $\prod_jN(\theta_j\mid\mu,\tau^2)$ is invariant to permuting effect labels. Integrating the same hyperprior retains that invariance. The observation distribution need not be exchangeable if the fixed $\sigma_j$ differ. Exchangeability of effects is a modeling statement about what the prior treats alike, not a claim that every recorded measurement has the same precision.

Measured predictors refine that statement. For $\theta_j=x_j^\top\beta+u_j$ with $u_j\mid\tau\sim N(0,\tau^2)$, the residual effects can be exchangeable conditional on predictors while the overall means differ systematically. Pooling residuals toward zero then corresponds to pooling effects toward their predictor-dependent mean, not toward one common number. Omitting a known predictor and compensating with a larger random-effect variance describes a different population assumption.

A matrix calculation shows the connection with regression. For $y\mid b\sim N(Xb,\Sigma)$ and a proper Gaussian prior $b\sim N(m,V)$, the posterior precision is $X^\top\Sigma^{-1}X+V^{-1}$. Completing the vector quadratic gives posterior covariance equal to the inverse of that matrix and mean equal to this covariance times $X^\top\Sigma^{-1}y+V^{-1}m$. Positive definiteness of $\Sigma$ and $V$ makes the precision positive definite even when the design is rank deficient. That is a propriety and regularization result, not a proof that the likelihood alone identifies every coefficient.

For varying intercepts and slopes, the random-effect covariance may also contain correlations. Declaring independent slope and intercept priors is an assumption; it does not follow from fitting a multilevel regression. Predictor centering changes the interpretation of an intercept and its covariance with a slope. A careful generative description states the predictor origin, scales and which population quantities are shared.

Selection requires another declared part of the joint law. If inclusion depends on an unobserved effect, observed groups are not automatically a representative sample from the original population distribution. A hierarchy fitted only to selected observations cannot justify population extrapolation merely by having a random effect. One must describe the selection or conditioning protocol and decide whether its factor is ignorable for the intended posterior. This is the same distinction between observation mechanism and convenient likelihood used in the opening chapter.

A useful countercheck is to imagine relabeling two groups together with their predictors, uncertainties and selection information. If that relabeling changes the probability model for reasons not encoded in those variables, some substantive structure is missing. This check does not validate exchangeability empirically, but it makes the intended conditional symmetry explicit enough to criticize.

## A small crossed design exposes variance components and confounding

A covariance matrix makes the distinction between a design and its prior visible. Write a Gaussian crossed-effects observation model as $Y=\mu\mathbf1+Z_u u+Z_v v+\varepsilon$, with independent zero-mean effects having covariance matrices $D_u,D_v$ and measurement errors having positive-definite covariance $R$. Integrating the effects at fixed hyperparameters gives
\[
V=Z_uD_uZ_u^\top+Z_vD_vZ_v^\top+R.
\]
Each incidence matrix records which observations share an effect. Correlation is created by shared columns, not by a generic statement that all hierarchical observations are dependent.

Take three observations: school one in neighborhood one, school one in neighborhood two, and school two in neighborhood two. With two school and two neighborhood effects,
\[
Z_u=\begin{pmatrix}1&0\\1&0\\0&1\end{pmatrix},
\qquad
Z_v=\begin{pmatrix}1&0\\0&1\\0&1\end{pmatrix}.
\]
For $D_u=aI_2$, $D_v=bI_2$ and $R=rI_3$, $a,b\ge0$, $r>0$, multiplication yields
\[
V=\begin{pmatrix}
a+b+r&a&0\\
a&a+b+r&b\\
0&b&a+b+r
\end{pmatrix}.
\]
The first two observations share a school and have covariance $a$; the last two share a neighborhood and have covariance $b$. The first and third share neither and have zero conditional covariance. The fixed common mean does not itself add covariance.

At the distribution level these different off-diagonal entries distinguish $a$ from $b$ when $r$ is known. That is identification, not a claim that three observed values estimate two covariance entries accurately. Repeating an appropriate crossed design adds information; a single noisy realization still leaves substantial uncertainty. Positive definiteness follows from the variance decomposition and $R\succ0$, without requiring every variance component to be strictly positive.

Contrast two observations whose school and neighborhood labels coincide one-to-one. Both incidence matrices are then $I_2$, and $V=(a+b+r)I_2$. Pairs $(a,b)=(1,4)$ and $(2,3)$ give exactly the same observation distribution at fixed $\mu,r$. No amount of computation can extract a likelihood preference between those pairs from that design. Proper priors can make a posterior integrable and regularize its allocation along the constant-sum ridge, but that allocation is not newly identified by the likelihood.

If the common mean is random with prior variance $V_0$, integrating it adds $V_0\mathbf1\mathbf1^\top$ to a prior-predictive covariance. This is a separate layer from the random school and neighborhood effects. Likewise, integrating variance-component uncertainty requires total covariance and its moment hypotheses; the fixed-hyperparameter matrix is not automatically the final posterior covariance.

The shared eight-schools hierarchy is the single-factor version. With $\mu$ variance $400$ and a half-normal scale of ten, $E\tau^2=100$, so prior effect variances are $500$ and cross-school covariances are $400$. Replacing that scale by five changes the variances to $425$ while retaining covariance $400$. The observed estimate's variance adds its own $\sigma_j^2$. These are analytic prior-predictive identities, not measured posterior shrinkage or fitted correlation values.

A half-Cauchy scale prior lacks a finite second moment. Its proper prior need not have finite effect variances or covariances, so the same covariance calculation cannot simply be reused with an unspecified infinite term. Conditional formulas still exist, and posterior moments may become finite after observing data, but moment existence must be established for the particular distribution being summarized. This keeps the prior-predictive bridge and the posterior total-covariance statement mathematically distinct.

## Prior prediction separates population spread from measurement noise

A hierarchical prior predicts both latent group effects and future observations, and those are different levels of variation. Suppose $\mu\sim N(m_0,V_0)$ and $\tau\sim\operatorname{HalfNormal}(a)$ independently. Let $z_j$ be independent standard normals, independent of the hyperparameters, and write $\theta_j=\mu+\tau z_j$. Symmetry gives $E z_j=0$, while $E\tau^2=a^2$. Therefore
\[
E\theta_j=m_0,\qquad
\operatorname{Var}(\theta_j)=V_0+a^2,\qquad
\operatorname{Cov}(\theta_i,\theta_j)=V_0\quad(i\ne j).
\]
The scale contribution uses $E\tau^2$, not $\operatorname{Var}(\tau)$. Since the random coefficient multiplies a zero-mean variable, substituting the half-normal variance would be an algebraic error.

If a future observation is $Y_j=\theta_j+\sigma_j\varepsilon_j$ with independent standard normal measurement errors, then its variance is $V_0+a^2+\sigma_j^2$ and its cross-group covariance is still $V_0$. A prior-predictive spread that looks excessive can come from the population location prior, the population scale prior or the measurement model. Checking only one scale parameter does not identify the defective component.

Contrasts reveal another useful separation. For different groups,
\[
\operatorname{Var}(\theta_i-\theta_j)=2a^2,\qquad
\operatorname{Var}(Y_i-Y_j)=2a^2+\sigma_i^2+\sigma_j^2.
\]
The shared location cancels. If the scientific question concerns differences, increasing $V_0$ does not change this prior contrast variance, although it increases each absolute-effect variance. A plausibility check should therefore target a declared functional, not just inspect a generic collection of draws.

There are exact higher-moment checks too. For $m_0=0$, independence and the normal fourth moment give
\[
E\theta_j^4=3V_0^2+6V_0a^2+9a^4.
\]
The last term is $E\tau^4\,Ez_j^4=(3a^4)(3)$. Thus the marginal effect is generally not normal with variance $V_0+a^2$; a normal of that variance would have fourth moment $3(V_0+a^2)^2$, missing $6a^4$. Random population scale produces heavier fourth-moment behavior even with a half-normal scale prior.

These identities give independently checkable numerical simulation targets. For example, $V_0=9$ and $a=2$ imply effect variance thirteen, cross-group covariance nine and latent contrast variance eight. If observation standard errors are one and three, the observed contrast variance is eighteen. Such finite reference calculations test particular generated quantities; agreement does not establish the correctness of every sampler operation.

Prior prediction does not condition on the observed effect estimates. Reusing a fitted posterior for the hyperparameters turns it into posterior prediction and changes the question. Keeping the two levels and the two conditioning regimes explicit prevents a good-looking fitted replication from being misreported as evidence that the original prior was scientifically plausible.

## Predicting an existing group differs from predicting a new group

For an existing group, a replicated estimate with the same known measurement standard error is generated by first drawing its fitted effect $\theta_j$ from the joint posterior and then drawing $Y_j^{\mathrm{rep}}\mid\theta_j\sim N(\theta_j,\sigma_j^2)$. Its posterior-predictive mean is $E(\theta_j\mid y)$ and its variance is $\operatorname{Var}(\theta_j\mid y)+\sigma_j^2$. The additional variance is measurement uncertainty in a future replication, not uncertainty about the already observed number.

For a new exchangeable group, no fitted group effect is available. Draw $\mu,\tau$ from their posterior, then $\theta_{\mathrm{new}}\mid\mu,\tau\sim N(\mu,\tau^2)$, and finally an observation with its declared new standard error. Provided the moments exist,
\[
E(\theta_{\mathrm{new}}\mid y)=E(\mu\mid y),\qquad
\operatorname{Var}(\theta_{\mathrm{new}}\mid y)
=E(\tau^2\mid y)+\operatorname{Var}(\mu\mid y).
\]
Add the new measurement variance only when predicting an observation. Substituting an existing group's shrunken effect for a new population draw would underrepresent between-group variation.

For two new groups, conditional independence given the hyperparameters makes their cross-covariance $\operatorname{Var}(\mu\mid y)$. Their difference removes this shared location uncertainty and has variance $2E(\tau^2\mid y)$. These are predictive statements under exchangeability, not guarantees that a future selected school belongs to the same population.

This distinction determines a criticism procedure. Replicating observations within existing groups can reveal a mismatch between their measurement model and the fitted data. Replicating new groups probes the population distribution and the declared extrapolation. A diagnostic discrepancy should state which replication is used and whether its validation unit is a group, an individual observation or a contrast. Treating all repeated measurements as independent validation units can create apparent precision unsupported by the design.

The proper shared eight-schools reference below is supplied so later chapters can use one actual likelihood and prior rather than an unspecified hierarchy. Its independent reference draws support conditional-moment and predictive checks on that target. They do not contain momentum energies, NUTS trees, divergent transitions or an HMC warmup history. Those quantities require an actual fitted sampler and its declared instrumentation.

A complete computational report therefore keeps three records: the probability model and its interpretation, the algorithm and finite computational uncertainty, and the diagnostic or predictive question answered by the output. Changing one record does not silently change the other two. In particular, good Monte Carlo precision for a posterior expectation cannot make a population assumption scientifically valid, while a scientifically meaningful hierarchy still needs a numerically reliable implementation.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-hierarchical-models-and-partial-pooling.md). The further exercises below supply the present chapter’s staged practice.

## Observation units determine which hierarchical checks are meaningful

The eight supplied observations are estimated school effects with reported standard errors. Treating those standard errors as fixed is part of the reference model. It does not turn the eight numbers into individual student outcomes, nor does it include uncertainty in estimating each standard error. A different observation model would be needed to analyze those additional sources of variation.

A sampling model for individual outcomes can sometimes lead to a normal model for a group average. For example, if $n_j$ independent observations have known individual variance $s_j^2$, their average has variance $s_j^2/n_j$. But a reported standard error alone does not determine either $n_j$ or $s_j^2$: many pairs yield the same ratio. It certainly does not reconstruct the original observations. Inventing within-school data from that ratio would add unsupported information.

A group-level prior check in this reference concerns the latent vector $\theta$, while an observation-level check concerns replicated noisy effect estimates $Y$ with the declared standard errors. These checks can be fully reproduced without a student-level dataset because that is the specified experiment. A claim about within-school residual shape, individual outliers or a pupil-level likelihood would remain a template until the corresponding observations and likelihood are supplied.

Likewise, predicting an additional school requires declaring the new estimate's standard error or a model for that design quantity. Reusing the eight fixed standard-error values as an eight-school future design is a possible explicit choice; treating them as randomly sampled future standard errors without a distribution is not.

This distinction limits scientific conclusions as well as code. An internally correct normal-summary calculation does not prove exchangeability, causal interpretation of coaching effects, or absence of selection bias. It supplies a transparent conditional analysis of the declared summaries. Keeping the observation unit explicit lets later predictive and model-comparison chapters ask useful questions without silently changing the data or pretending an unavailable experiment has been reproduced.


## Solutions: the shared proper eight-schools hierarchy reference

The public case identifier is COMM06-HIERARCHY-03 and its primary fixture identifier is CBM-HIERARCHY-EIGHT-SCHOOLS-HN10-MU20-v1. This supplies the missing data and priors for the original eight-schools discussion and the group/observation prior-predictive procedure. It is a full eight-effect hierarchy, not the Gaussian integrator example from the sampler chapter.

Use $y=(28,8,-3,7,-1,1,18,12)$ and known standard errors $\sigma=(15,10,16,11,9,11,10,18)$ in the same effect units. The data values are the classic eight-schools estimates documented by the Stan project. The proper priors chosen here are explicitly different from a default flat-prior example: independently, $\mu\sim N(0,20^2)$ and $\tau\sim\operatorname{HalfNormal}(10)$, with $\theta_j\mid\mu,\tau\sim N(\mu,\tau^2)$ and $y_j\mid\theta_j\sim N(\theta_j,\sigma_j^2)$. The target support is $\mu\in\mathbb R$, $\tau>0$ and $\theta\in\mathbb R^8$. The unit of inference is a school effect and its joint population distribution, with the eight reported standard errors treated as fixed.

### Independent posterior and predictive references

The preceding collapsed formulas give the exact conditional distributions and one-dimensional integral identities for posterior means and second moments. The program evaluates these scalar integrals with adaptive quadrature and compares them with independent accepted full-hierarchy draws. It reports the quadrature error estimates as numerical estimates, not certified enclosures. It also reports posterior probabilities below scale one and above scales ten and twenty; their numerical values remain unobserved until the program actually runs. Neither “substantial mass near zero” nor “long tail” is supplied as an unexplained observed result.

The posterior sampler proposes $\mu,\tau$ independently from their proper hyperprior and accepts with probability
\[
a(\mu,\tau)=\prod_{j=1}^8\frac{\sigma_j}{\sqrt{\sigma_j^2+\tau^2}}
\exp\left[-\frac12\sum_{j=1}^8
\frac{(y_j-\mu)^2}{\sigma_j^2+\tau^2}\right]\le1.
\]
Accepted hyperparameters have the collapsed posterior law under ideal independent random inputs. Conditional normals then supply all eight effects. There is no Markov-chain warmup or autocorrelation correction in this reference. The executed program uses PCG64 pseudorandom streams; reproducibility of that implementation is distinct from the mathematical ideal-random-input theorem.

For prior prediction, the primary prior gives effect second moments $500$, cross-school product expectation $400$, and first-school observation second moment $725$. The corresponding exact fourth-moment formulas determine the standard errors of the supplied moment checks. Group-level latent effects and observation-level noisy estimates are generated separately. The illustrative criticism threshold is $\max_j|\theta_j|>100$ or $\max_j|Y_j|>100$ effect units. It is a declared numerical question, not an asserted scientifically validated plausibility boundary.

### A finite budget with an explicit failure branch

Retain exactly $4000$ posterior draws per prior, using proposal batches of $8192$ and a maximum of $4{,}000{,}000$ proposals per prior. The final batch is shortened to the remaining budget. If fewer than $4000$ are obtained, the program fails with proposed/generated/retained counts; it does not reduce the requested sample, change priors or substitute a grid approximation.

The proposal budget has a conservative analytic check. On $0<\tau<8$, the product of variance factors exceeds $1/5$. Component lower bounds are $15/17,39/50,89/100,4/5,37/50,4/5,39/50,91/100$; their product is $109388981520/531250000000>1/5$. Put $R=\sum_j(\sigma_j^2+\tau^2)^{-1}$. Direct rational bounds give $R<0.063$, so integrating the normal mean prior contributes $(1+400R)^{-1/2}>5/26$. The minimized quadratic is at most its value at $\mu=8,\tau=0$, namely
\[
4/25+16/9+121/256+50/121+2+4/81<5.
\]
Therefore its exponential factor exceeds $1/13$: for example $e<11/4$ and $\sqrt e<5/3$ give $e^{5/2}<605/48<13$.

The half-normal scale-ten prior assigns probability greater than one half to $\tau<8$. A lower-rectangle integral on standardized intervals $[0,0.4]$ and $[0.4,0.8]$, using $\sqrt{2/\pi}>0.79$ and $e^{-x}>1-x$, gives a lower bound $0.79(0.4)(0.92+0.68)=0.5056$. Combining these bounds makes overall acceptance probability greater than $1/676$. For four million ideal iid proposals, a binomial lower-tail Chernoff bound makes the probability of fewer than four thousand acceptances less than $e^{-300}$, since
\[
\frac{(4000000-4000\cdot676)^2}{2\cdot4000000\cdot676}>300.
\]
This is a probability statement for the ideal proposal construction, not a guarantee about a deterministic pseudorandom seed, wall-clock cost or a flawed implementation.

### Changed prior and a deliberate density error

The changed model keeps the data, likelihood and mean prior fixed and replaces the scale prior by $\operatorname{HalfNormal}(5)$. It also retains exactly $4000$ draws with its own four-million proposal cap. The same acceptance lower bound applies because the probability of $\tau<8$ is larger. Thus the aggregate maximum is eight million proposals for the two targets, never a silent budget extension. Distinct streams use hyperparameter seeds $2026110403$ and $2026110405$, with effect seeds one greater. Prior-predictive seeds are $2026110413$ and $2026110414$, each with fifty thousand replications.

The program also checks a centered/noncentered log-density identity at $\mu=1$, $\tau=2$ and a declared eight-vector of standardized effects. The correct transformation adds $9\log\tau$ to the centered density when both effects and log scale are transformed. Omitting the $\tau^8$ effect Jacobian creates the exact error $-8\log2$, which the negative fixture must detect. This failure example does not run a mislabeled alternative sampler or call its output posterior draws.

Mean checks compare ten posterior components with independent quadrature references using six reference standard errors plus a fixed numerical allowance. Those are declared finite stochastic regression criteria, not a mathematical proof of implementation correctness. Prior-predictive moment checks use their exact iid variance formulas. Exceedance frequencies carry binomial Monte Carlo uncertainty; a zero count is accompanied by the one-sided $95\%$ upper bound $1-0.05^{1/50000}$ rather than a claim of zero probability.

### Public output and descriptive rubric

The only optional command-line argument is an output path for a new JSON file, created exclusively rather than overwriting an existing file. Its primary fields include the exact fixture/data/priors, arrays of $4000$ values for $\mu$ and $\tau$ and a $4000$ by eight effect array, sampling settings, actual proposed and generated-acceptance counts, and the actual executed program-body hash. A separately labeled changed-prior record contains its own arrays and counts. Standard output reports bounded summaries and checks. The stopped ratio of generated acceptances to proposals is descriptive output, not asserted to be an unbiased acceptance-probability estimator.

A complete response preserves the two proper models, data units, exact conditional and collapsed references, proposal envelope and no-fallback cap. It distinguishes ideal iid laws from actual pseudorandom observations and records seeds, dependency versions, retained counts, tolerances and generated quantities. It interprets sensitivity only over the declared prior choices. The primary arrays can be used by later predictive chapters after their source/body pins and literal model fields are verified. They contain no fitted NUTS tree, momentum energy or divergence metadata; Gaussian-integrator checks, production diagnostics and other original workflows retain their separate obligations.

## Solutions: executable shared hierarchy reference

This program implements the declared full hierarchy and proper-prior change. Save the exact Python fence body to a local file and run it in the pinned environment. An optional --output path creates a new JSON draw artifact for the later predictive chapters. The source authors have not run this listing; successful output is not presumed.


The complete computational listing remains in the [original source companion](retained-source-hierarchical-models-and-partial-pooling.md). Its mathematical assumptions and analytical reference calculations remain part of the present treatment; the listing is supplied source, not executed evidence.

The complete entrypoint always retains four thousand draws for each of the two priors or fails explicitly. It reports actual generated acceptances separately from retained draws and proposals. The actual program-body hash in its output must match the frozen fence-body hash before downstream use.

## References: hierarchical assumptions and shared data

The classic data values are documented by the [Stan Development Team's RStan eight-schools example](https://mc-stan.org/rstan/articles/rstan.html). That reference is used for the data and sampling hierarchy; the proper $N(0,20^2)$ and half-normal priors in this chapter's case are declared here, rather than attributed to a flat-prior example.

Andrew Gelman, “Prior distributions for variance parameters in hierarchical models,” Bayesian Analysis 1 (2006), 515–534, [author paper](https://sites.stat.columbia.edu/gelman/bayescomputation/Gelman2006.pdf), especially the conditional normal hierarchy in Section 2.1. Conditional conjugacy is kept separate from integrating hyperparameter uncertainty.

The [NumPy PCG64 documentation](https://numpy.org/doc/stable/reference/random/bit_generators/pcg64.html) identifies the named bit generator. The [SciPy quadrature documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.quad.html) describes an estimated absolute integration error. The public program pins the supplied local CPython/NumPy/SciPy versions and reports its actual environment when run. No source author has executed it, and neither a future successful check nor these derivations establishes learner efficacy or a calibrated expanded workload.


## Worked applications

### Worked example 1: two information regimes

For population scale $\tau$ and measurement standard deviation $\sigma_j$, noncentred likelihood curvature is $\tau^2/\sigma_j^2$. Weak measurements leave it small; strong measurements can make it large. This explains a parameterisation trade-off without asserting one universal algorithm.

### Worked example 2: new-group variation

If group means vary with variance four and observation error variance nine, a first observation from a new group has variance thirteen at known hyperparameters. A repeated observation in a learned group can have a smaller conditional group component.

### Worked example 3: joint prediction

Two future observations in one group share its posterior effect. Their covariance equals its conditional variance under independent fresh errors. Treating them as independent loses the variability of their common group total.

## Further exercises

### Exercise 101
<a id="hierarchical-uncertainty-prediction-ex-101"></a>

Why does a centered hierarchy become narrow at small tau?

<details>
<summary>Hint 1</summary>

Inspect its Gaussian effect precision.

</details>
<details>
<summary>Hint 2</summary>

It includes tau to power minus two.

</details>
<details>
<summary>Solution</summary>

The conditional curvature contains $\tau^{-2}$, so small scale strongly constrains deviations from the shared mean. This is a geometric property, not a proof of failure of every algorithm.

</details>

### Exercise 102
<a id="hierarchical-uncertainty-prediction-ex-102"></a>

Why may noncentring help weak-data groups?

<details>
<summary>Hint 1</summary>

Standardised effects have fixed prior scale.

</details>
<details>
<summary>Hint 2</summary>

Their likelihood perturbation can be weak.

</details>
<details>
<summary>Solution</summary>

The $z$ prior remains standard normal while likelihood curvature is proportional to $\tau^2/\sigma_j^2$. Weak observations can therefore leave a more regular reference geometry in those coordinates.

</details>

### Exercise 103
<a id="hierarchical-uncertainty-prediction-ex-103"></a>

Does a parameterisation change a correctly transformed posterior prediction?

<details>
<summary>Hint 1</summary>

It changes coordinates of the same law.

</details>
<details>
<summary>Hint 2</summary>

Integrate the same observable kernel.

</details>
<details>
<summary>Solution</summary>

No. With correct Jacobians, predictions are invariant to reparameterisation. Computational efficiency can differ, but a changed exact prediction signals a changed model, target or transformation.

</details>

### Exercise 104
<a id="hierarchical-uncertainty-prediction-ex-104"></a>

Compare predicting an existing group mean and a new individual.

<details>
<summary>Hint 1</summary>

A new individual adds measurement noise.

</details>
<details>
<summary>Hint 2</summary>

Keep the target explicit.

</details>
<details>
<summary>Solution</summary>

The existing latent mean uses posterior group uncertainty. A new individual's prediction adds its fresh conditional error variance, so the two intervals should not be interchanged.

</details>

### Exercise 105
<a id="hierarchical-uncertainty-prediction-ex-105"></a>

Why is one draw of all correlated effects preferable to independent marginal draws?

<details>
<summary>Hint 1</summary>

A joint target retains covariance.

</details>
<details>
<summary>Hint 2</summary>

Marginals do not determine dependence.

</details>
<details>
<summary>Solution</summary>

Independent marginal draws replace the joint posterior by a product law. Group contrasts, sums and simultaneous predictions can then have incorrect uncertainty despite correct individual marginals.

</details>

### Exercise 106
<a id="hierarchical-uncertainty-prediction-ex-106"></a>

When can an improper scale remain improper after a coordinate change?

<details>
<summary>Hint 1</summary>

A bijection preserves total mass.

</details>
<details>
<summary>Hint 2</summary>

A Jacobian is not normalization.

</details>
<details>
<summary>Solution</summary>

If the original scale measure has infinite mass, expressing it in log or standardised coordinates does not make it a probability. The transformed density must still be integrated.

</details>

### Exercise 107
<a id="hierarchical-uncertainty-prediction-ex-107"></a>

Why does a bounded numerical budget need a failure outcome?

<details>
<summary>Hint 1</summary>

An algorithm may not meet its stopping rule.

</details>
<details>
<summary>Hint 2</summary>

A finite cap changes guarantees.

</details>
<details>
<summary>Solution</summary>

A computation should report noncompletion or insufficient precision rather than return an apparently qualified estimate. The cap alone supplies no theorem that the requested accuracy was achieved.

</details>

### Exercise 108
<a id="hierarchical-uncertainty-prediction-ex-108"></a>

What is a full conditional versus collapsed conditional?

<details>
<summary>Hint 1</summary>

The collapsed law integrates variables.

</details>
<details>
<summary>Hint 2</summary>

Conditioning on their current values differs.

</details>
<details>
<summary>Solution</summary>

They use different information sets. Substituting current latent values into a marginal formula is not a valid collapse and can change a sampler's invariant law.

</details>

### Exercise 109
<a id="hierarchical-uncertainty-prediction-ex-109"></a>

Can small Monte Carlo standard errors prove model adequacy?

<details>
<summary>Hint 1</summary>

They quantify a computational target.

</details>
<details>
<summary>Hint 2</summary>

Predictive mismatch is another question.

</details>
<details>
<summary>Solution</summary>

No. A precise posterior summary can describe a poorly specified observation model. Check observable implications and sensitivity separately from numerical error.

</details>

### Exercise 110
<a id="hierarchical-uncertainty-prediction-ex-110"></a>

Why can crossed designs expose confounding of variance components?

<details>
<summary>Hint 1</summary>

Different effects can induce similar covariance patterns.

</details>
<details>
<summary>Hint 2</summary>

Inspect the observed design support.

</details>
<details>
<summary>Solution</summary>

If the design does not separate groupings, their covariance contributions may be indistinguishable. More iterations cannot identify components that the observation law does not distinguish.

</details>

## Summary

Hierarchical Uncertainty and Prediction develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
