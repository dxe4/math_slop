
# Exponential Families and Information Geometry {#section-1-exponential-families-and-information-geometry}

Exponential families turn normalisation, sufficiency, likelihood equations, information, cumulants, and convex geometry into one structure. Their formulas are powerful because a log-partition function performs several jobs at once—not because every statistical model is exponential or every sufficient statistic is low-dimensional.

This chapter derives the log-partition identities, proves convexity, constructs classical examples, links likelihood equations to moment matching, and interprets Kullback–Leibler divergence as a directed Bregman geometry. It also treats minimality, boundary MLEs, curved subfamilies, and the hypotheses behind differentiation.

<a id="section-5-1-canonical-form-and-natural-parameter-space"></a>
## 1. Canonical form and natural parameter space {#section-7-1-canonical-form-and-natural-parameter-space}

A $k$-parameter exponential family dominated by measure $\mu $ has densities

$f_\eta (x)=h(x)\exp\{\eta ^{\mathsf T}T(x)-A(\eta )\}$,

where $T(x)\in R^k$ is the natural statistic and

$A(\eta )=\log \int h(x)e^{\eta ^{\mathsf T}T(x)}d\mu (x)$.

The **natural parameter space** is

$H=\{\eta :A(\eta )<\infty \}$.

The normalising identity makes $f_\eta $ integrate to one. A family is **regular** when $H$ is open and the parameter ranges through it. A lower-dimensional constraint $\eta =\eta (\theta )$ produces a curved exponential family and can change likelihood and information geometry.

Canonical form is not unique: adding a constant to $T$ or applying an invertible affine coordinate change gives another representation. Statistical conclusions should not depend on that bookkeeping.

<a id="section-23-2-the-log-partition-function-is-convex"></a>
## 2. The log-partition function is convex {#section-25-2-the-log-partition-function-is-convex}

For $\eta _0,\eta _1\in H$ and $0\le t\le 1$, Hölder's inequality gives

\[\int h e^{(t\eta _1+(1-t)\eta _0)^{\mathsf T}T}\]

$\le (\int h e^{\eta _1^{\mathsf T}T})^t(\int h e^{\eta _0^{\mathsf T}T})^{1-t}$.

Taking logarithms yields

$A(t\eta _1+(1-t)\eta _0)\le tA(\eta _1)+(1-t)A(\eta _0)$.

Thus $A$ is convex and $H$ is convex. Strict convexity can fail when a nonzero vector $a$ makes $a^{\mathsf T}T(X)$ constant almost surely throughout the family. That failure is a sign of nonminimal representation and singular information.

<a id="section-37-3-derivatives-produce-moments-and-information"></a>
## 3. Derivatives produce moments and information {#section-39-3-derivatives-produce-moments-and-information}

Suppose $\eta $ lies in the interior of $H$ and local domination permits differentiation under the integral. Then

$\partial A/\partial \eta _j=E_\eta [T_j(X)]$.

Differentiating again gives

$\partial ^{2}A/(\partial \eta _j\partial \eta _l)=Cov_\eta (T_j,T_l)$.

Hence

$\nabla A(\eta )=E_\eta [T]$, $\nabla ^{2}A(\eta )=Cov_\eta (T)$.

The score is

$U_\eta (X)=T(X)-\nabla A(\eta )$,

so Fisher information in natural coordinates is

$I(\eta )=\nabla ^{2}A(\eta )$.

These are regular interior identities. At a boundary, with changing support, or without integrable local envelopes, formal differentiation can fail.

<a id="section-61-4-bernoulli-and-poisson-examples"></a>
## 4. Bernoulli and Poisson examples {#section-63-4-bernoulli-and-poisson-examples}

**Worked example 7.1.**

For Bernoulli probability $p$, define log-odds

$\eta =\log[p/(1-p)]$.

Then

$f_\eta (x)=\exp\{x\eta -\log(1+e^\eta )\}$, $x\in \{0,1\}$.

Thus $T(x)=x$, $A(\eta )=\log(1+e^\eta )$, and

$A'(\eta )=e^\eta /(1+e^\eta )=p$, $A''(\eta )=p(1-p)$.

For $X\sim Poisson(\lambda )$, set $\eta =\log\lambda $. Then

$f_\eta (x)=\frac{1}{x!}\exp\{x\eta -e^\eta \}$,

so $A(\eta )=e^\eta $, with both mean and variance $e^\eta =\lambda $.

The natural-coordinate information differs from information in $p$ or $\lambda $; the Jacobian transformation from the likelihood chapter reconciles them.

<a id="section-85-5-normal-families-reveal-curved-coordinates"></a>
## 5. Normal families reveal curved coordinates {#section-87-5-normal-families-reveal-curved-coordinates}

For known variance $\sigma ^{2}$, normal location has

$\eta =\mu /\sigma ^{2}$, $T(x)=x$,

and, up to the base factor,

$A(\eta )=\sigma ^{2}\eta ^{2}/2$.

Then $A'(\eta )=\sigma ^{2}\eta =\mu $ and $A''(\eta )=\sigma ^{2}$.

With both mean and variance unknown,

$\eta _1=\mu /\sigma ^{2}$, $\eta _2=-1/(2\sigma ^{2})<0$,

and $T(x)=(x,x^{2})$. The natural parameter space is the half-plane $\eta _2<0$. The ordinary $(\mu ,\sigma ^{2})$ coordinates are a nonlinear reparameterisation of this two-dimensional regular family.

If a model constrains $\sigma ^{2}=g(\mu )$, its natural parameter traces a curve in that half-plane. Full-family sufficient statistics remain sufficient, but full-family moment matching need not respect the curve.

<a id="section-105-6-independent-samples-add-natural-statistics"></a>
## 6. Independent samples add natural statistics {#section-107-6-independent-samples-add-natural-statistics}

For iid observations,

$L(\eta ;x)=\exp{\eta ^{\mathsf T}\Sigma _iT(x_i)-nA(\eta )}\prod _ih(x_i)$.

Factorisation shows

\[S_n=\sum _iT(X_i)\]

is sufficient. The dimension of this statistic stays $k$ as $n$ grows, a special feature of fixed-dimensional exponential families under fixed support.

This does not imply $S_n$ is minimal or complete without additional conditions. Nor does it justify discarding raw data needed to check dependence, support, mixture structure, or measurement problems outside the family.

<a id="section-119-7-likelihood-equations-match-empirical-moments"></a>
## 7. Likelihood equations match empirical moments {#section-121-7-likelihood-equations-match-empirical-moments}

The log-likelihood gradient is

$\nabla \ell _n(\eta )=\sum _iT(x_i)-n\nabla A(\eta )$.

An interior MLE therefore satisfies

$\nabla A(\hat{\eta })=\bar{T}$,

where $\bar{T}=n^{-1}\sum _iT(x_i)$. The fitted model mean of the sufficient statistic matches its empirical mean.

Convexity makes $\ell _n$ concave in $\eta $; strict convexity of $A$ gives at most one interior maximiser. Existence is separate. If $\bar{T}$ lies on the boundary of the attainable mean-parameter set, the likelihood supremum can occur as $\lVert \eta \rVert\to \infty $.

For all-success Bernoulli data, $\bar{T}=1$, but $A'(\eta )<1$ for every finite $\eta $. The likelihood approaches its supremum as $\eta \to \infty $; the probability-coordinate MLE is boundary value $p=1$.

<a id="section-135-8-mean-parameters-and-convex-duality"></a>
## 8. Mean parameters and convex duality {#section-137-8-mean-parameters-and-convex-duality}

The **mean parameter** is

$m=\nabla A(\eta )=E_\eta [T]$.

In a minimal regular family, $\nabla ^{2}A$ is positive definite, so the map is locally one-to-one. A global identification of its image with the interior of the convex support needs additional boundary behaviour, commonly stated as steepness or essential smoothness of the log-partition function. Without that extra hypothesis, retain the local inverse statement and call $\nabla A$'s actual image the mean-parameter space.

Define the convex conjugate

$A^*(m)=\sup_\eta \{\eta ^{\mathsf T}m-A(\eta )\}$.

At matching interior coordinates $m=\nabla A(\eta )$, the supremum occurs at $\eta $, and gradients invert: $\nabla A*(m)=\eta $. Natural and mean coordinates provide dual descriptions of the same model.

The conjugate may be finite on a closure larger than the interior mean space. Boundary points again correspond to limiting natural parameters rather than ordinary finite coordinates.

<a id="section-151-9-cumulants-are-partition-differences"></a>
## 9. Cumulants are partition differences {#section-153-9-cumulants-are-partition-differences}

For vector $s$ such that $\eta +s\in H$,

\[E_\eta [e^{s^{\mathsf T}T(X)}]\]

$=\exp{A(\eta +s)-A(\eta )}$.

Thus the cumulant-generating function of $T$ is

$K_T(s)=A(\eta +s)-A(\eta )$.

Its first and second derivatives at zero recover mean and covariance. Higher derivatives, when finite, give higher joint cumulants. This identity is exact only where both partition functions exist.

For sums of independent observations, cumulant functions add, matching additivity of log likelihood and information.

<a id="section-167-10-kl-divergence-is-a-directed-bregman-divergence"></a>
## 10. KL divergence is a directed Bregman divergence {#section-169-10-kl-divergence-is-a-directed-bregman-divergence}

For two natural parameters $\eta ,\xi $,

\[\log[f_\eta (X)/f_\xi (X)]\]

$=(\eta -\xi )^{\mathsf T}T(X)-A(\eta )+A(\xi )$.

Taking expectation under $P_\eta $ gives

\[D_{\mathrm{KL}}(P_\eta \lVert P_\xi )\]

$=A(\xi )-A(\eta )-\nabla A(\eta )^{\mathsf T}(\xi -\eta )$.

This is the Bregman divergence of $A$ from base point $\eta $ to $\xi $. It is nonnegative by convexity but generally asymmetric.

For $\xi =\eta +d\eta $, Taylor expansion gives

$D_{\mathrm{KL}}(P_\eta \lVert P_{\eta +d\eta })=\frac{1}{2}d\eta ^{\mathsf T}I(\eta )d\eta +o(\lVert d\eta \rVert^2)$.

Fisher information is therefore the local quadratic metric induced by KL divergence. The approximation is local; it does not turn large-distance KL into Euclidean distance or make divergence symmetric.

<a id="section-189-11-minimality-and-completeness-need-hypotheses"></a>
## 11. Minimality and completeness need hypotheses {#section-191-11-minimality-and-completeness-need-hypotheses}

**Theorem 7.1 (Optional advanced completeness).** The general implication from an open natural parameter set to completeness below imports uniqueness of multivariate Laplace transforms, with its integrability hypotheses. That analysis theorem is not proved here. The later finite binomial polynomial proof establishes completeness directly, while the curved-normal calculation supplies an explicit failure of completeness without relying on transform uniqueness.

A representation is **minimal** when no nonzero affine combination of the components of $T$ is almost surely constant throughout the family. In a minimal regular family, covariance $\nabla ^{2}A$ is positive definite in interior natural coordinates.

For a full exponential family whose natural parameter space contains a nonempty open set, suitable integrability and uniqueness of Laplace transforms can also imply completeness of the natural sufficient statistic: if $E_\eta [g(S_n)]=0$ throughout that open set, then $g(S_n)=0$ almost surely.

Curved subfamilies can lose completeness even when embedded in a complete full family. Completeness is a theorem about the indexed collection of laws, not a visual property of the statistic.

<a id="section-199-12-exponential-family-audit"></a>
## 12. Exponential-family audit {#section-201-12-exponential-family-audit}

Check:

1. dominating measure, support, base factor, and natural parameter space;
2. whether the family is full, regular, minimal, or curved;
3. domination for partition differentiation;
4. sufficient-statistic dimension and retained diagnostic data;
5. existence, uniqueness, and boundary behaviour of the MLE;
6. natural versus scientific parameter coordinates;
7. positive definiteness or singularity of information;
8. local versus global meaning of geometric approximations.

<a id="section-212-13-exercises-with-complete-solutions"></a>
## 15. Development: justify partition differentiation before using it {#section-716-15-development-justify-partition-differentiation-before}

Write $Z(\eta)=\int h(x)e^{\eta^{\mathsf T}T(x)}\,d\mu(x)$, so $A=\log Z$. Assume $h\geq0$, the statistic is finite almost everywhere on $\{h>0\}$, and $0<Z(\eta_0)<\infty$. A useful sufficient condition for two derivatives near $\eta_0$ is an integrable function $M$ satisfying

$$h(x)e^{\eta^{\mathsf T}T(x)}\{1+\lVert T(x)\rVert^2\}\leq M(x)$$

throughout some open neighbourhood of $\eta_0$. It controls the integrand and all its first and second parameter derivatives. Difference quotients are bounded using the one-variable mean-value theorem along a parameter direction, and dominated convergence then moves their limits inside the integral. The pointwise derivative alone would not justify that interchange.

For a full exponential family, being an interior natural parameter supplies such an envelope. Choose $\varepsilon>0$ so that the cube $\eta_0+[-2\varepsilon,2\varepsilon]^k$ lies inside the natural domain. For a vector $t$, put $\lVert t\rVert_1=\sum_j|t_j|$. There is a finite constant $C_\varepsilon$ with $1+\lVert t\rVert^2\leq C_\varepsilon e^{\varepsilon\lVert t\rVert_1}$: an exponential eventually dominates this quadratic polynomial, and a continuous function is bounded on the remaining compact interval of $\lVert t\rVert_1$.

If $\eta$ lies in the smaller cube of radius $\varepsilon$, it follows that

$$e^{\eta^{\mathsf T}t}(1+\lVert t\rVert^2)
 \leq C_\varepsilon e^{\eta_0^{\mathsf T}t+2\varepsilon\lVert t\rVert_1}
 \leq C_\varepsilon\sum_{s\in\{-1,1\}^k}
 e^{(\eta_0+2\varepsilon s)^{\mathsf T}t}.$$

The last sum contains the corner matching the signs of $t$, whose exponential equals the preceding exponential. Multiplication by $h$ gives an integrable envelope because every corner partition integral is finite. There are only $2^k$ corners. This argument explains why an open natural domain is powerful rather than treating regularity as a decorative label.

The licensed differentiations now give $\partial_jZ=\int T_jhe^{\eta^{\mathsf T}T}\,d\mu$ and $\partial_{jl}Z=\int T_jT_lhe^{\eta^{\mathsf T}T}\,d\mu$. The chain and quotient rules yield

$$\partial_jA=\frac{\partial_jZ}{Z}=E_\eta T_j,\qquad
\partial_{jl}A=\frac{\partial_{jl}Z}{Z}
 -\frac{\partial_jZ\,\partial_lZ}{Z^2}
 =\operatorname{Cov}_\eta(T_j,T_l).$$

All these expectations are finite locally under the envelope. The same corner method, with a polynomial of higher degree, supplies higher derivatives at interior points. It says nothing comparable about an arbitrary boundary point, where the required surrounding cube may not exist.

This proof also separates two different failures. A singular covariance matrix can reflect a redundant statistic even when all differentiations are valid. A nonexistent local envelope can invalidate formal derivatives even when the displayed statistic components look distinct. Check the analytic interchange and the algebraic rank separately. Later use of a Taylor expansion of $A$ needs the former; inversion of its Hessian additionally needs the latter.

<a id="section-744-16-development-retain-every-normal-partition-term"></a>
## 16. Development: retain every normal partition term {#section-746-16-development-retain-every-normal-partition-term}

**Worked example 7.2.**

For a normal observation with both mean and variance unknown, take Lebesgue measure and base factor $h(x)=1$. Set $\eta_1=\mu/\sigma^2$ and $\eta_2=-1/(2\sigma^2)$, where $\mu\in\mathbb R$ and $\sigma^2>0$. Completing a scalar square gives

$$\eta_2x^2+\eta_1x
 =\eta_2\left(x+\frac{\eta_1}{2\eta_2}\right)^2
   -\frac{\eta_1^2}{4\eta_2}.$$

The integral is finite exactly when $\eta_2<0$, and the elementary Gaussian integral therefore gives

$$Z(\eta)=\sqrt{\frac{\pi}{-\eta_2}}\,
 \exp\left(-\frac{\eta_1^2}{4\eta_2}\right),\qquad
A(\eta)=\frac12\log\frac{\pi}{-\eta_2}
 -\frac{\eta_1^2}{4\eta_2}.$$

At $\eta_2=0$ a linear exponential cannot be integrated on the whole real line, and at $\eta_2>0$ its positive quadratic term makes the tails diverge. Thus the natural domain really is the stated open half-plane, not a choice made to simplify derivatives.

Substitution gives $A=\frac12\log(2\pi\sigma^2)+\mu^2/(2\sigma^2)$. The resulting density is $\exp[-(x-\mu)^2/(2\sigma^2)]/\sqrt{2\pi\sigma^2}$, including its normalising constant. Omitting the logarithmic variance term would change the likelihood whenever variance is being estimated. A term may be absorbed into a base factor only when it is independent of every parameter being varied.

For known variance, a different bookkeeping choice is convenient:

$$h_\sigma(x)=\frac1{\sqrt{2\pi\sigma^2}}
 e^{-x^2/(2\sigma^2)},\qquad
T(x)=x,\quad\eta=\frac\mu{\sigma^2},\quad
A(\eta)=\frac{\sigma^2\eta^2}{2}.$$

Here $h_\sigma$ is legitimate because $\sigma^2$ is fixed. Combining this base factor with the unknown-variance partition from the previous calculation would count some terms twice. Before using a remembered canonical form, write down which quantities are fixed.

Differentiating the two-parameter partition gives $E[X]=\mu$ and $E[X^2]=\mu^2+\sigma^2$. Its Hessian, in natural coordinates, is

$$I(\eta)=
 \begin{pmatrix}
 \sigma^2&2\mu\sigma^2\\
 2\mu\sigma^2&2\sigma^4+4\mu^2\sigma^2
 \end{pmatrix}.$$

Its determinant is $2\sigma^6>0$. This verifies local invertibility of the mean map, and shows why the statistic $(X,X^2)$ is not redundant despite both entries coming from one scalar observation. Functional dependence of statistic components is not the same as an affine relation that is constant almost surely.

For an iid sample, matching its two empirical moments yields $\widehat\mu=\bar x$ and $\widehat{\sigma^2}=n^{-1}\sum_i(x_i-\bar x)^2$, provided that last quantity is positive. If all observations coincide, the likelihood becomes arbitrarily large as $\sigma^2$ tends to zero with $\mu$ at that common value. There is then no finite maximiser inside $\sigma^2>0$. The unbiased sample variance with denominator $n-1$ answers a different estimation criterion and is not the variance MLE.

There is a useful coordinate check. Write $v=\sigma^2$ and use ordinary coordinates $(\mu,v)$. The natural-coordinate Jacobian and transformed information are

$$J=\begin{pmatrix}1/v&-\mu/v^2\\0&1/(2v^2)\end{pmatrix},
\qquad
J^{\mathsf T}I(\eta)J
 =\begin{pmatrix}1/v&0\\0&1/(2v^2)\end{pmatrix}.$$

The calculation follows by multiplying the displayed matrices. The natural-statistic covariance has a nonzero off-diagonal entry when $\mu\ne0$, while the ordinary-coordinate information is diagonal. Neither description changes the experiment. Orthogonality of parameter directions depends on specifying the directions being compared. For $n$ independent observations both information matrices are multiplied by $n$; the coordinate transformation itself stays the same.

<a id="section-795-17-development-a-curved-normal-family-loses-completenes"></a>
## 17. Development: a curved normal family loses completeness {#section-797-17-development-a-curved-normal-family-loses-completenes}

Consider the constrained model $X_i\ \mathrm{iid}\sim N(\mu,\mu^2)$ with $\mu>0$. It sits inside the unrestricted normal family, with natural curve

$$\eta_1=\frac1\mu,\qquad
\eta_2=-\frac1{2\mu^2}=-\frac{\eta_1^2}{2}.$$

The full-family statistic $S=(S_1,S_2)=(\sum_iX_i,\sum_iX_i^2)$ remains sufficient by the same factorisation. Restricting the parameter set does not introduce parameter dependence into the conditional law of the data given a previously sufficient statistic. Completeness is a different issue because it concerns which expectations vanish over the available collection of states.

Under this curve, $S_1\sim N(n\mu,n\mu^2)$, so

$$P_\mu(S_1>0)=\Phi(\sqrt n)$$

for every $\mu>0$, where $\Phi$ is the standard normal distribution function. Consequently the bounded function $g(S)=1_{\{S_1>0\}}-\Phi(\sqrt n)$ has expectation zero throughout the curved family. It is not zero almost surely: the positive and nonpositive events both have strictly positive probabilities for finite $n$. Thus $S$ is not complete for this curved family. The counterexample uses an explicit nonzero function with a constant expectation; it does not infer noncompleteness merely by counting parameter dimensions.

The sign statistic is ancillary here: its law does not depend on $\mu$. Its existence connects this example to the completeness and ancillary arguments in the estimation chapter. The underlying scale relation is $X_i=\mu(1+Z_i)$ with standard normal $Z_i$. Positive rescaling changes magnitudes but leaves signs unchanged. That symmetry is exactly the reason the sign probability cannot learn the scale.

The constrained MLE is also explicit. Apart from a data-dependent constant,

$$\ell(\mu)=-n\log\mu-\frac{S_2}{2\mu^2}
 +\frac{S_1}{\mu}-\frac n2,\qquad \mu>0.$$

For $S_2>0$, differentiation gives $\ell'(\mu)=(S_2-S_1\mu-n\mu^2)/\mu^3$. The numerator has exactly one positive zero, namely

$$\widehat\mu=
 \frac{-S_1+\sqrt{S_1^2+4nS_2}}{2n}.$$

The quadratic equation's other root is negative because its root product is $-S_2/n$. The derivative is positive near zero and negative after the positive root. Also $\ell(\mu)\to-\infty$ at both ends of the positive half-line. The displayed point is therefore the unique global constrained maximiser, not just a stationary candidate.

If every observed value is zero, then $S_1=S_2=0$ and $\ell(\mu)=-n\log\mu-n/2+\text{constant}$ grows without bound as $\mu$ decreases to zero. This exceptional record has probability zero under each continuous model state, but checking it distinguishes an almost-sure existence statement from existence for every conceivable record.

For the record $(x_1,x_2)=(1,3)$, the unrestricted normal fit has mean two and variance one. It violates the curve $\sigma^2=\mu^2$. The constrained formula instead gives $\widehat\mu=\sqrt6-1$ and fitted variance $(\sqrt6-1)^2$. There is no reason for both empirical moments to be matched: the permitted model has only one direction of movement. Along a general smooth curve $\eta(\theta)$, the likelihood equation is $\eta'(\theta)^{\mathsf T}\{S-n\nabla A(\eta(\theta))\}=0$. It requires the moment residual to be orthogonal to the curve's tangent, not to vanish in every full-family coordinate.

<a id="section-828-18-development-distinguish-local-geometry-from-a-global"></a>
## 18. Development: distinguish local geometry from a global mean range {#section-830-18-development-distinguish-local-geometry-from-a-global}

Positive information licenses local inversion. At an interior minimal parameter, the inverse-function theorem applies to $m(\eta)=\nabla A(\eta)$ because its derivative is the positive-definite Hessian. In a sufficiently small neighbourhood, $d\eta=I(\eta)^{-1}dm$. A perturbation of empirical moments is therefore amplified along directions with small information eigenvalues. This is a local conditioning statement; it neither proves that every proposed moment vector is attainable nor supplies a finite-sample error bound.

Strict convexity also separates distinct interior parameters along a convex natural domain. If $d=\eta-\xi\ne0$, integrating the positive quadratic form along their segment gives

$$d^{\mathsf T}\{\nabla A(\eta)-\nabla A(\xi)\}
 =\int_0^1d^{\mathsf T}\nabla^2A(\xi+td)d\,dt>0.$$

Thus their means differ. This proves injectivity onto the actual image of the gradient. Surjectivity onto an independently described region, such as the whole interior convex support of $T$, is an additional assertion. The steepness or essential-smoothness boundary condition mentioned in Section 8 addresses that assertion. An inverse onto one's own image does not prove that the image is the desired larger set.

A concrete tail example explains the distinction. On $x\geq0$, take base density $h(x)=2/(1+x)^3$ and statistic $T(x)=x$. Its exponential tilt has finite partition integral for $\eta\leq0$, whereas any $\eta>0$ makes the integral diverge. At the boundary $\eta=0$, $Z(0)=1$ and

$$E_0[X]=2\int_0^\infty\frac{x}{(1+x)^3}\,dx=1.$$

The substitution $u=1+x$ reduces the integral to $2\int_1^\infty(u^{-2}-u^{-3})\,du=1$. In particular the boundary first moment is finite, rather than tending to infinity.

For $\eta<0$, put $w(X)=e^{\eta X}$ under the base law. Then $E_\eta X=E_0[Xw(X)]/E_0[w(X)]$. If $X'$ is an independent base-law copy,

$$2\operatorname{Cov}_0(X,w(X))
 =E_0[(X-X')\{w(X)-w(X')\}]<0.$$

The strict sign follows because $w$ is strictly decreasing and the continuous base law is nondegenerate. The expression is integrable since $0<w\leq1$ and $E_0X<\infty$. Hence every negative-tilt mean is less than one. Dominated convergence gives $E_\eta X\to1$ as $\eta\uparrow0$. The statistic's support nevertheless contains every positive real number. Interior convex-support points greater than one are not attained by this interior mean map.

The full natural domain in this example is closed at its finite upper endpoint; we are inspecting its open interior, not claiming that the full domain is regular under Section 1's convention. This boundary example is why the earlier local-inverse statement must retain its caveat. Smooth interior formulas can coexist with a mean range that stops before the support's interior ends.

<a id="section-854-19-development-interpret-the-direction-and-units-of-inf"></a>
## 19. Development: interpret the direction and units of information {#section-856-19-development-interpret-the-direction-and-units-of-inf}

The KL calculation in Section 10 takes its expectation under the first law. That orientation matters even in the Bernoulli family. For probabilities $p=1/4$ and $q=1/2$,

$$D(P_{1/4}\Vert P_{1/2})=\frac34\log3-\log2,\qquad
D(P_{1/2}\Vert P_{1/4})=\log2-\frac12\log3.$$

These follow by substituting into $p\log(p/q)+(1-p)\log\{(1-p)/(1-q)\}$. Both are nonnegative, but they are unequal. A reader cannot exchange the direction simply because an expression resembles a squared distance.

Locally, coordinates change the matrix but not the quadratic form. If a scientific parameter $\theta$ maps smoothly to natural coordinates $\eta(\theta)$ with Jacobian $J$, a small change satisfies $d\eta=J\,d\theta$ to first order. Therefore the local KL form is $\frac12d\theta^{\mathsf T}J^{\mathsf T}I(\eta)J\,d\theta$. This is the information transformation rule, obtained by substitution rather than by treating information as an invariant array of numbers.

For known-variance normal location, $I(\eta)=\sigma^2$ and $d\eta=d\mu/\sigma^2$, so the same local form becomes $(d\mu)^2/(2\sigma^2)$. Greater observational variance makes a fixed mean change harder to distinguish, even though natural-coordinate information itself equals the larger number $\sigma^2$. Comparing raw matrix entries across different coordinates would reverse the interpretation.

An exponential-family audit should therefore finish with three separate statements: a sufficient statistic for the declared model, an existence and boundary analysis for the fitted parameter, and a coordinate-labelled measure of local distinction. None replaces the other. The curved example preserves sufficiency while losing completeness; the boundary example preserves interior differentiation while restricting the mean range. These are mathematical reasons to keep the audit's columns separate.

<a id="section-869-20-development-solve-the-bernoulli-conjugate-including-"></a>
## 20. Development: solve the Bernoulli conjugate including its boundary {#section-871-20-development-solve-the-bernoulli-conjugate-including-}

**Worked example 7.3.**

The convex conjugate in Section 8 is easier to understand when its supremum can be solved completely. For Bernoulli natural parameter $\eta\in\mathbb R$, $A(\eta)=\log(1+e^\eta)$. Fix a proposed mean $m$. The function to maximise is $F_m(\eta)=m\eta-\log(1+e^\eta)$, with derivative $m-e^\eta/(1+e^\eta)$ and negative second derivative.

For $0<m<1$, the unique critical point is $\eta_m=\log\{m/(1-m)\}$. Substitution gives

$$A^*(m)=m\log m+(1-m)\log(1-m).$$

This number is nonpositive. There is no contradiction with nonnegative KL: a convex conjugate is not itself a divergence. Subtracting its appropriate tangent terms, or using the original partition's Bregman formula, produces a nonnegative divergence.

At $m=0$, the supremum of $-\log(1+e^\eta)$ is zero and is approached as $\eta\to-\infty$. At $m=1$, write $F_1(\eta)=-\log(1+e^{-\eta})$; its supremum is also zero and is approached as $\eta\to+\infty$. Neither boundary supremum is attained at a finite natural parameter. The formula extends continuously using $0\log0=0$, the limiting convention justified by $u\log u\to0$ as $u\downarrow0$.

For $m>1$, letting $\eta\to+\infty$ makes $F_m(\eta)=(m-1)\eta-\log(1+e^{-\eta})$ diverge to infinity. For $m<0$, letting $\eta\to-\infty$ does the same. Thus the conjugate is infinite outside $[0,1]$. Its finite domain is the closed convex support of a Bernoulli observation, while the actual finite-natural-parameter mean range is the open interval $(0,1)$. Boundary means belong to limiting distributions.

This calculation explains two different uses of “exists.” With an empirical mean strictly between zero and one, a finite MLE exists and equals the inverse mean coordinate. With all successes, the likelihood supremum still exists as a numerical supremum, and the conjugate at one is finite, but no finite natural estimate attains it. In ordinary probability coordinates the enlarged family including $p=1$ has a boundary maximiser. Changing coordinates does not remove the need to state which parameter space is being optimised.

Differentiating inside $(0,1)$ gives $(A^*)'(m)=\log\{m/(1-m)\}$ and $(A^*)''(m)=1/[m(1-m)]$. The second derivative is the inverse of natural-coordinate information evaluated at the matching mean. It diverges near the boundary because tiny changes of a nearly deterministic mean require large log-odds changes. This is a concrete, fully solved example of the local inverse geometry, including the points where its ordinary finite-coordinate description ends.

<a id="section-889-21-development-sufficiency-completeness-and-an-iid-diag"></a>
## 21. Development: sufficiency, completeness and an iid diagnostic {#section-891-21-development-sufficiency-completeness-and-an-iid-diag}

For iid Bernoulli observations with $0<p<1$, let $S=\sum_iX_i$. Every binary string with $s$ successes has the same probability $p^s(1-p)^{n-s}$, and there are $\binom ns$ such strings. Consequently, conditional on $S=s$, each string has probability $1/\binom ns$, independent of $p$. This gives a direct sufficiency proof without leaving the conditional law implicit.

The conditional law does not say that the order could never carry scientific information. Under the iid model, strings $1100$ and $1010$ have equal probabilities, and conditional on two successes each has probability one sixth. Consider instead a stationary symmetric binary Markov model: start with a fair bit, then retain the previous bit with probability $r\in(0,1)$ at each transition. The probability of $1100$ is $r^2(1-r)/2$, whereas that of $1010$ is $(1-r)^3/2$. At $r=3/4$ these are $9/128$ and $1/128$.

Both records still have the same success count. The relative frequency of runs can distinguish a dependence mechanism that the iid model excludes. A sufficient statistic compresses parameter information within its declared family; it need not preserve evidence against that family. Keeping raw order for a diagnostic therefore does not contradict sufficiency. It acknowledges a second question about the adequacy of the model.

Completeness of the binomial count can also be proved directly. Suppose a real function $g$ on $\{0,\ldots,n\}$ has $E_p[g(S)]=0$ for every $0<p<1$. Its expectation is the finite sum

$$\sum_{s=0}^ng(s)\binom ns p^s(1-p)^{n-s}=0.$$

Divide by $(1-p)^n$ and set $z=p/(1-p)$, which ranges over all positive numbers. The polynomial $\sum_{s=0}^ng(s)\binom ns z^s$ vanishes for every $z>0$. A nonzero polynomial of degree at most $n$ has at most $n$ real roots, so this polynomial must have all coefficients zero. Since every binomial coefficient is positive, $g(s)=0$ for every possible count. The statistic is complete.

This proof uses the whole open probability range and the finite support; it imports no general uniqueness theorem for Laplace transforms. The earlier curved normal sign example shows why one cannot transfer the conclusion merely because a restricted model uses the same statistic. Restricting the collection of laws restricts the equations $E_\theta g(S)=0$ that must hold. A function previously excluded may then satisfy every remaining equation.

Sufficiency, completeness and diagnostics therefore answer three precise questions. Does the statistic retain the model's parameter information? Does a mean-zero function across the full parameter collection have to vanish? Does the recorded arrangement look compatible with the assumed family? Successful compression for the first question supplies no automatic answer to the other two.

<a id="section-907-22-optional-practice-extensions"></a>

## Summary

<a id="section-977-14-summary-and-forward-route"></a>
The log-partition function normalises an exponential family, generates moments and information, controls likelihood concavity, and induces a local KL geometry. Independent samples add natural statistics, while interior MLEs match empirical and model moments. Minimality, completeness, and finite MLE existence require separate hypotheses. The main route next develops [Tests, Errors, and Power](tests-errors-and-power.md). The separate advanced L4 continuation Equivariance, Shrinkage, and Minimaxity asks how symmetry and risk can select procedures when unbiasedness and likelihood alone do not.

## Exercises {#section-214-13-exercises-with-complete-solutions}

<a id="section-214-1-normalisation"></a>
### 1. Normalisation {#section-216-1-normalisation}

**Exercise 7.1**

Why does the canonical density integrate to one?

<details>
<summary>Hint 1</summary>

Use the definition of the partition function before differentiating anything.

</details>
<details>
<summary>Hint 2</summary>

The unnormalised integral is exp A; multiplying by exp(−A) cancels that integral.

</details>
<details>
<summary>Solution</summary>

**Solution.** By definition $e^{A(\eta )}=\int h(x)e^{\eta ^{\mathsf T}T(x)}d\mu $. Multiplying the integrand by $e^{-A(\eta )}$ makes its integral one.

</details>

<a id="section-239-2-convex-natural-space"></a>
### 2. Convex natural space {#section-241-2-convex-natural-space}

**Exercise 7.2**

Why does the Hölder argument imply $H$ is convex?

<details>
<summary>Hint 1</summary>

Apply Hölder to the two endpoint exponential integrands.

</details>
<details>
<summary>Hint 2</summary>

For a convex combination of parameters the new integral is bounded by powers of the two finite endpoint integrals.

</details>
<details>
<summary>Solution</summary>

**Solution.** If both endpoint integrals are finite, their Hölder product bound is finite for every convex combination. Therefore every segment joining two points of $H$ remains in $H$.

</details>

<a id="section-264-3-score-centring"></a>
### 3. Score centring {#section-266-3-score-centring}

**Exercise 7.3**

Derive the natural-coordinate score.

<details>
<summary>Hint 1</summary>

Differentiate the canonical log density in natural coordinates.

</details>
<details>
<summary>Hint 2</summary>

The derivative of the linear statistic term is T, and that of A is the model mean of T.

</details>
<details>
<summary>Solution</summary>

**Solution.** Differentiate $\log f_\eta =\log h+\eta ^{\mathsf T}T-A(\eta )$ to get $T-\nabla A$. Its expectation is zero because $\nabla A=E[T]$.

</details>

<a id="section-289-4-information"></a>
### 4. Information {#section-291-4-information}

**Exercise 7.4**

Why is $\nabla ^{2}A$ positive semidefinite?

<details>
<summary>Hint 1</summary>

Test the Hessian in an arbitrary vector direction.

</details>
<details>
<summary>Hint 2</summary>

Its quadratic form is the variance of that linear combination of T, which is nonnegative.

</details>
<details>
<summary>Solution</summary>

**Solution.** It is $Cov(T)$. For every vector $a$, $a^{\mathsf T}Cov(T)a=Var(a^{\mathsf T}T)\ge 0$.

</details>

<a id="section-314-5-bernoulli-inverse-map"></a>
### 5. Bernoulli inverse map {#section-316-5-bernoulli-inverse-map}

**Exercise 7.5**

Solve $\eta =\log[p/(1-p)]$ for $p$.

<details>
<summary>Hint 1</summary>

Exponentiate the log-odds equation.

</details>
<details>
<summary>Hint 2</summary>

Collect the terms containing p on one side, then divide by 1+exp eta.

</details>
<details>
<summary>Solution</summary>

**Solution.** $e^\eta =p/(1-p)$, so $p=e^\eta /(1+e^\eta )$.

</details>

<a id="section-339-6-bernoulli-information"></a>
### 6. Bernoulli information {#section-341-6-bernoulli-information}

**Exercise 7.6**

Differentiate $A(\eta )=\log(1+e^\eta )$ twice.

<details>
<summary>Hint 1</summary>

Recognise the first derivative as the logistic mean.

</details>
<details>
<summary>Hint 2</summary>

Differentiate exp eta/(1+exp eta) and express the result using p and 1−p.

</details>
<details>
<summary>Solution</summary>

**Solution.** First derivative is $p=e^\eta /(1+e^\eta )$. Differentiating gives $p(1-p)$.

</details>

<a id="section-364-7-poisson-partition"></a>
### 7. Poisson partition {#section-366-7-poisson-partition}

**Exercise 7.7**

Verify $A(\eta )=e^\eta $ by summing the unnormalised masses.

<details>
<summary>Hint 1</summary>

Use the exponential power-series identity.

</details>
<details>
<summary>Hint 2</summary>

The series has argument exp eta; take the logarithm after evaluating the sum.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\sum_{x=0}^{\infty}e^{\eta x}/x!=\exp(e^\eta )$. Taking its logarithm gives $A(\eta )=e^\eta $.

</details>

<a id="section-389-8-known-variance-normal-mean"></a>
### 8. Known-variance normal mean {#section-391-8-known-variance-normal-mean}

**Exercise 7.8**

With $A(\eta )=\sigma ^{2}\eta ^{2}/2$, recover the ordinary mean parameter.

<details>
<summary>Hint 1</summary>

Differentiate the quadratic partition function.

</details>
<details>
<summary>Hint 2</summary>

Substitute the given relation eta=mu/sigma squared to interpret the derivative.

</details>
<details>
<summary>Solution</summary>

**Solution.** $A'(\eta )=\sigma ^{2}\eta $; since $\eta =\mu /\sigma ^{2}$, this equals $\mu $.

</details>

<a id="section-414-9-sample-sufficiency"></a>
### 9. Sample sufficiency {#section-416-9-sample-sufficiency}

**Exercise 7.9**

Factor the iid likelihood to identify its natural sufficient statistic.

<details>
<summary>Hint 1</summary>

Multiply the iid canonical densities.

</details>
<details>
<summary>Hint 2</summary>

The individual statistics appear in the exponent through their sum; all remaining data factors are parameter-free.

</details>
<details>
<summary>Solution</summary>

**Solution.** All parameter dependence is $\exp{\eta ^{\mathsf T}\Sigma _iT(x_i)-nA(\eta )}$. Factorisation therefore makes $\sum _iT(X_i)$ sufficient.

</details>

<a id="section-439-10-moment-matching"></a>
### 10. Moment matching {#section-441-10-moment-matching}

**Exercise 7.10**

For Poisson data, solve the natural likelihood equation.

<details>
<summary>Hint 1</summary>

Set the natural score equal to zero.

</details>
<details>
<summary>Hint 2</summary>

The derivative A′ equals exp eta, so first solve for the rate, and then its logarithm when the mean is positive.

</details>
<details>
<summary>Solution</summary>

**Solution.** $A'(\eta )=e^\eta =\lambda $. Setting it equal to $\bar{X}$ gives $\hat{\lambda }=\bar{X}$ when $\bar{X}>0$, hence $\hat{\eta }=\log \bar{X}$.

</details>

<a id="section-464-11-poisson-boundary"></a>
### 11. Poisson boundary {#section-466-11-poisson-boundary}

**Exercise 7.11**

What happens to the natural MLE if every count is zero?

<details>
<summary>Hint 1</summary>

Check the range of exp eta for finite real eta.

</details>
<details>
<summary>Hint 2</summary>

A zero empirical mean lies at the closure boundary, approached by eta tending to minus infinity.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\bar{T}=0$, but $e^\eta >0$ for finite $\eta $. The likelihood supremum is approached as $\eta \to -\infty $, corresponding to boundary rate $\lambda =0$ in the closure.

</details>

<a id="section-489-12-concavity"></a>
### 12. Concavity {#section-491-12-concavity}

**Exercise 7.12**

Why is exponential-family log likelihood concave in $\eta $?

<details>
<summary>Hint 1</summary>

Differentiate the sample log likelihood twice.

</details>
<details>
<summary>Hint 2</summary>

Its Hessian is minus n times the positive semidefinite partition Hessian.

</details>
<details>
<summary>Solution</summary>

**Solution.** Its Hessian is $-n\nabla ^{2}A$, which is negative semidefinite because $A$ is convex.

</details>

<a id="section-514-13-strictness-failure"></a>
### 13. Strictness failure {#section-516-13-strictness-failure}

**Exercise 7.13**

If $a^{\mathsf T}T(X)=c$ almost surely, what happens to information in direction $a$?

<details>
<summary>Hint 1</summary>

Evaluate the information quadratic form in direction a.

</details>
<details>
<summary>Hint 2</summary>

A constant linear combination of T has variance zero, leaving a zero-information direction.

</details>
<details>
<summary>Solution</summary>

**Solution.** $a^{\mathsf T}Ia=Var(a^{\mathsf T}T)=0$. That direction is redundant and information is singular.

</details>

<a id="section-539-14-cumulant-identity"></a>
### 14. Cumulant identity {#section-541-14-cumulant-identity}

**Exercise 7.14**

Derive $K_T(s)=A(\eta +s)-A(\eta )$.

<details>
<summary>Hint 1</summary>

Insert the moment-generating factor into the normalising integral.

</details>
<details>
<summary>Hint 2</summary>

Adding s to eta shifts the partition argument; state the domain where eta+s remains allowed.

</details>
<details>
<summary>Solution</summary>

**Solution.** Insert $e^{s^{\mathsf T}T}$ into the canonical integral. It changes natural parameter from $\eta $ to $\eta +s$; the ratio of normalising integrals is the exponential of the partition difference.

</details>

<a id="section-564-15-kl-orientation"></a>
### 15. KL orientation {#section-566-15-kl-orientation}

**Exercise 7.15**

Compute $E_\eta  \log(f_\eta /f_\xi )$.

<details>
<summary>Hint 1</summary>

Write the log-density ratio before taking its expectation.

</details>
<details>
<summary>Hint 2</summary>

Only the statistic is random; replace its expectation by the gradient at eta, retaining the order eta versus xi.

</details>
<details>
<summary>Solution</summary>

**Solution.** Replace $T$ by its expectation $\nabla A(\eta )$ in $(\eta -\xi )^{\mathsf T}T-A(\eta )+A(\xi )$, yielding the displayed directed Bregman formula.

</details>

<a id="section-589-16-local-kl"></a>
### 16. Local KL {#section-591-16-local-kl}

**Exercise 7.16**

Why is the linear term absent when expanding KL from $\eta $ to $\eta +d\eta $?

<details>
<summary>Hint 1</summary>

Expand A at eta in direction deta.

</details>
<details>
<summary>Hint 2</summary>

Subtract the tangent-plane terms explicitly; the first remaining term is quadratic.

</details>
<details>
<summary>Solution</summary>

**Solution.** The Bregman definition subtracts the tangent plane $A(\eta )+\nabla A(\eta )^{\mathsf T}d\eta $; Taylor's constant and linear terms cancel, leaving the quadratic Hessian term.

</details>

<a id="section-614-17-mean-coordinate-inversion"></a>
### 17. Mean-coordinate inversion {#section-616-17-mean-coordinate-inversion}

**Exercise 7.17**

What matrix is the local derivative $d\eta /dm$ in a minimal regular family?

<details>
<summary>Hint 1</summary>

Differentiate the map m=gradient A.

</details>
<details>
<summary>Hint 2</summary>

Apply the inverse-function theorem only where the information matrix is invertible.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $dm/d\eta =\nabla ^{2}A=I(\eta )$ is invertible, the inverse-function theorem gives $d\eta /dm=I(\eta )^{-1}$.

</details>

<a id="section-639-18-curved-family"></a>
### 18. Curved family {#section-641-18-curved-family}

**Exercise 7.18**

Why can unconstrained moment matching fail for a curved subfamily?

<details>
<summary>Hint 1</summary>

Compare the unrestricted mean equation with the permitted parameter curve.

</details>
<details>
<summary>Hint 2</summary>

The moment-matching solution can lie outside that curve, requiring constrained optimisation instead.

</details>
<details>
<summary>Solution</summary>

**Solution.** The empirical moment may correspond to a natural parameter outside the permitted curve. The constrained MLE must optimise along the curve rather than solve every full-family moment equation.

</details>

<a id="section-664-19-sufficiency-versus-diagnostics"></a>
### 19. Sufficiency versus diagnostics {#section-666-19-sufficiency-versus-diagnostics}

**Exercise 7.19**

Does a sufficient sum guarantee that observation order is useless for checking iid sampling?

<details>
<summary>Hint 1</summary>

Keep likelihood preservation separate from model checking.

</details>
<details>
<summary>Hint 2</summary>

Order can carry evidence against the iid assumption even when it is unnecessary for fitting its parameter.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. Order is irrelevant for parameter likelihood inside the iid family but can reveal trends or dependence showing that the family is false.

</details>

<a id="section-689-20-boundary-warning"></a>
### 20. Boundary warning {#section-691-20-boundary-warning}

**Exercise 7.20**

Why is an infinite natural estimate not merely a numerical failure?

<details>
<summary>Hint 1</summary>

Identify the empirical statistic's location in the mean space.

</details>
<details>
<summary>Hint 2</summary>

At a boundary there may be only a likelihood supremum in the closure, rather than a finite maximiser.

</details>
<details>
<summary>Solution</summary>

**Solution.** The empirical sufficient mean may lie on the boundary of the model's mean space, so no finite natural parameter solves the likelihood equation. The divergence records genuine likelihood geometry.

</details>

<a id="section-714-15-development-justify-partition-differentiation-before"></a>

<a id="section-909-22-optional-practice-extensions"></a>
### 21. SI-07-E21: a parameter-free sign in a curved family {#section-913-si-07-e21-a-parameter-free-sign-in-a-curved-family}

**Exercise 7.21**

For independent $X_1,\ldots,X_n\sim N(\mu,\mu^2)$ with $\mu>0$ and fixed positive integer $n$, construct a bounded nonzero function of $(\sum_iX_i,\sum_iX_i^2)$ with expectation zero for every allowed $\mu$. State which completeness assertion it refutes and why sufficiency can still hold.


<details>
<summary>Hint 1</summary>

Standardise the normal sum and examine its sign probability.

</details>
<details>
<summary>Hint 2</summary>

Subtract its constant positive-sign probability from the sign indicator; the resulting bounded function of the sufficient pair is nonzero and mean zero.

</details>

<a id="section-931-si-07-e22-a-constrained-fit-with-exact-algebra"></a>
### 22. SI-07-E22: a constrained fit with exact algebra {#section-933-si-07-e22-a-constrained-fit-with-exact-algebra}

**Exercise 7.22**

For the curved normal model in the previous question, fit the record $(1,3)$. Derive the positive likelihood root and compare it with the unrestricted normal moment-matching estimates. Check that the root is a global maximiser.


<details>
<summary>Hint 1</summary>

Substitute n=2, the sum 4 and sum of squares 10 into the curved log likelihood.

</details>
<details>
<summary>Hint 2</summary>

Solve the quadratic score numerator on the positive domain and check its sign on both sides of the root and at both domain ends.

</details>

<a id="section-951-23-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-953-23-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-956-si-07-e21-a-parameter-free-sign-in-a-curved-family-solu"></a>
### SI-07-E21: a parameter-free sign in a curved family — solution {#section-958-si-07-e21-a-parameter-free-sign-in-a-curved-family-solu}

The sum has distribution $N(n\mu,n\mu^2)$, so its positive-sign probability is $\Phi(\sqrt n)$. Take $g(S)=1_{\{S_1>0\}}-\Phi(\sqrt n)$. It is bounded and mean zero at every allowed state, but is not almost surely zero because $0<\Phi(\sqrt n)<1$. It refutes completeness of the natural sufficient statistic for this curved collection of laws. The iid normal likelihood still factors through $S_1,S_2$ after the variance restriction is imposed, so the same statistic remains sufficient.

</details>

<details>
<summary>Solution</summary>

<a id="section-965-si-07-e22-a-constrained-fit-with-exact-algebra-solution"></a>
### SI-07-E22: a constrained fit with exact algebra — solution {#section-967-si-07-e22-a-constrained-fit-with-exact-algebra-solution}

Here $n=2$, $S_1=4$ and $S_2=10$. The likelihood derivative has numerator $10-4\mu-2\mu^2$, whose positive zero is $\sqrt6-1$. Its other root is negative, the numerator is positive before the positive root and negative after it, and the log likelihood tends to minus infinity at both positive-domain ends. Thus the root is the unique global maximiser. Its fitted variance is $(\sqrt6-1)^2$. The unrestricted estimates are $\bar x=2$ and $n^{-1}\sum_i(x_i-\bar x)^2=1$; they do not satisfy variance equal to squared mean and hence are unavailable in the curved model.

</details>

<a id="section-971-sources"></a>

## Sources {#section-973-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-975-14-summary-and-forward-route"></a>
