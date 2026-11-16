
# Equivariance, Shrinkage and Minimaxity {#section-1-equivariance-shrinkage-and-minimaxity}

<a id="section-1-advanced-preparation"></a>
## Advanced preparation {#section-3-advanced-preparation}

This L4 continuation uses multivariate normal integration, polar-coordinate integrability, conditional expectation and dominated convergence in the singular risk argument. The bounded-smooth and regularization proofs remain fully stated below; these analytical prerequisites belong to this continuation, rather than being silent premises of the nineteen-chapter L3 route.

Statistical procedures often should respond predictably when units, origins, labels, or coordinates change. Equivariance formalises that requirement. It can narrow an enormous decision class, but it can also forbid useful borrowing toward a scientifically meaningful reference point. Shrinkage deliberately introduces such a reference and can lower risk even when the usual estimator is unbiased and maximum likelihood.

This chapter develops group equivariance, invariant risk, bounded-parameter shrinkage, Bayes shrinkage, minimax lower bounds, and the James–Stein phenomenon. Every optimality claim states its model, loss, parameter space, dimension, and comparison class.

<a id="section-9-1-transformations-act-on-data-parameters-and-actions"></a>
## 1. Transformations act on data, parameters, and actions {#section-11-1-transformations-act-on-data-parameters-and-actions}

Let a group $G$ act on sample space, parameter space, and action space. A model is **invariant** if transforming data under state $\theta $ gives the same law as original data under transformed state $g\theta $.

A decision rule $\delta $ is **equivariant** when

\[\delta (gx)=g\delta (x)\]

for every allowed transformation. Loss is invariant when

$L(g\theta ,ga)=L(\theta ,a)$.

These conditions imply the risk transforms as

\[R(g\theta ,\delta )=R(\theta ,\delta )\]

when the group acts transitively and the rule is equivariant.

**Proof.** If $X\sim P_\theta $, then $gX\sim P_{g\theta }$. Therefore

\[R(g\theta ,\delta )=E_{g\theta }L(g\theta ,\delta (X))\]

$=E_\theta L(g\theta ,\delta (gX))=E_\theta L(g\theta ,g\delta (X))=R(\theta ,\delta )$. ∎

The conclusion depends on all three compatible actions. Coordinate invariance is not automatic merely because a formula contains matrices.

<a id="section-35-2-location-equivariance-removes-arbitrary-origins"></a>
## 2. Location equivariance removes arbitrary origins {#section-37-2-location-equivariance-removes-arbitrary-origins}

In a location family $X_i=\theta +\varepsilon _i$, translation by $c$ maps data to $x+c1$, parameter to $\theta +c$, and action to $a+c$. A location estimator is translation equivariant if

$\delta (x+c1)=\delta (x)+c$.

The sample mean and median satisfy this property. The rule $\delta (x)=0$ does not: it privileges the coordinate origin.

With translation-invariant loss $L(\theta ,a)=\ell (a-\theta )$, every translation-equivariant rule has constant risk across $\theta $, provided the error law is itself a location shift. This converts a worst-state comparison into a single-state calculation.

Scale equivariance is different: for positive rescaling, a scale estimator $s(x)$ should satisfy $s(cx)=c s(x)$. A procedure can be location equivariant but not scale equivariant or vice versa.

<a id="section-47-3-equivariance-is-a-restriction-not-universal-optimalit"></a>
## 3. Equivariance is a restriction, not universal optimality {#section-49-3-equivariance-is-a-restriction-not-universal-optimalit}

Choosing the best equivariant rule optimises only inside the equivariant class. A nonequivariant rule can have smaller risk at some or all states if it uses a meaningful origin, boundary, or shape constraint.

For a physical concentration known nonnegative, translating all values by an arbitrary constant is not a symmetry of the parameter space. Imposing location equivariance would ignore real structure. Conversely, shrinking geographic longitude toward numerical zero without scientific reason introduces a coordinate artefact.

The symmetry ledger should state which transformations preserve the scientific problem, not only the algebraic model.

<a id="section-55-4-constant-linear-shrinkage-trades-variance-for-bias"></a>
## 4. Constant linear shrinkage trades variance for bias {#section-57-4-constant-linear-shrinkage-trades-variance-for-bias}

<a id="section-57-worked-example-20-1-compute-linear-shrinkage-risk"></a>
### Worked example 20.1: compute linear-shrinkage risk {#section-59-worked-example-20-1-compute-linear-shrinkage-risk}

Let

\[X\sim Normal_p(\theta ,\sigma ^{2}I_p)\]

and estimate $\theta $ under squared-error loss

$L(\theta ,a)=\lVert a-\theta \rVert^{2}$.

The usual estimator $\delta _0(X)=X$ has constant risk

$R(\theta ,\delta _0)=E\lVert X-\theta \rVert^{2}=p\sigma ^{2}$.

For fixed $0\le a\le 1$, consider $\delta _a(X)=aX$. Since

$aX-\theta =a(X-\theta )-(1-a)\theta $,

the cross term has mean zero and

$R(\theta ,\delta _a)=a^{2}p\sigma ^{2}+(1-a)^{2}\lVert \theta \rVert^{2}$.

Shrinkage reduces variance and adds squared bias. For every fixed $a<1$, risk eventually exceeds $p\sigma ^{2}$ as $\lVert \theta \rVert\to \infty $; constant shrinkage cannot dominate globally on $R^p$.

<a id="section-81-5-a-bounded-parameter-space-changes-minimax-choice"></a>
## 5. A bounded parameter space changes minimax choice {#section-83-5-a-bounded-parameter-space-changes-minimax-choice}

Suppose $\lVert \theta \rVert\le M$. The worst risk of $\delta _a$ is

$a^{2}p\sigma ^{2}+(1-a)^{2}M^{2}$.

Differentiating gives

$a*=M^{2}/(M^{2}+p\sigma ^{2})$.

The resulting worst risk is

$p\sigma ^{2}M^{2}/(M^{2}+p\sigma ^{2})<p\sigma ^{2}$.

Thus a credible bound can justify uniform worst-case improvement over the usual estimator on that restricted space. If the bound is false, the guarantee does not extend. Minimaxity is always relative to the declared parameter set.

<a id="section-97-6-bayes-rules-generate-interpretable-shrinkage"></a>
## 6. Bayes rules generate interpretable shrinkage {#section-99-6-bayes-rules-generate-interpretable-shrinkage}

Place prior

\[\theta \sim Normal_p(0,\tau ^{2}I_p)\]

in the normal observation model. Completing the square gives posterior mean

$E[\theta |X]=[\tau ^{2}/(\tau ^{2}+\sigma ^{2})]X$.

Under squared loss the posterior mean is the Bayes action. The shrinkage factor is larger when prior spread $\tau ^{2}$ is large or observation noise $\sigma ^{2}$ is small.

This is optimal for prior-average risk under the stated prior. It is not a proof of pointwise frequentist dominance: its fixed factor still has risk growing like $\lVert \theta \rVert^{2}$. Estimating $\tau ^{2}$ from the same data produces empirical Bayes shrinkage and adds a tuning layer whose risk must be analysed.

<a id="section-111-7-minimax-risk-has-upper-and-lower-bounds"></a>
## 7. Minimax risk has upper and lower bounds {#section-113-7-minimax-risk-has-upper-and-lower-bounds}

The minimax risk is

$r*=\inf_\delta  \sup_{\theta \in \Theta }R(\theta ,\delta )$.

Any candidate rule supplies an upper bound through its worst risk. Any prior $\pi $ supplies a lower bound because

\[\sup_\theta R(\theta ,\delta )\ge \int R(\theta ,\delta )d\pi (\theta )\]

for every rule. Taking infima shows

$r*\ge r_\pi $,

where $r_\pi $ is Bayes risk.

For the normal mean problem on $R^p$, use prior $Normal_p(0,\tau ^{2}I)$. Posterior variance per coordinate is

$\sigma ^{2}\tau ^{2}/(\sigma ^{2}+\tau ^{2})$,

so Bayes risk is

$p\sigma ^{2}\tau ^{2}/(\sigma ^{2}+\tau ^{2})$.

Letting $\tau ^{2}\to \infty $ gives lower bound $p\sigma ^{2}$. Since estimator $X$ has worst risk exactly $p\sigma ^{2}$, the minimax risk is $p\sigma ^{2}$ and $X$ is minimax.

Minimax does not imply admissible: another rule may dominate a minimax rule while sharing the same worst-risk supremum.

<a id="section-139-8-stein-s-identity-computes-shrinkage-risk"></a>
## 8. Stein's identity computes shrinkage risk {#section-141-8-stein-s-identity-computes-shrinkage-risk}

Let $X\sim Normal_p(\theta ,\sigma ^{2}I)$ and consider $\delta (X)=X+g(X)$. Under differentiability and integrability conditions, Stein's identity gives

$E[(X_i-\theta _i)g_i(X)]=\sigma ^{2}E[\partial g_i(X)/\partial x_i]$.

Expanding squared loss and summing,

$R(\theta ,\delta )=p\sigma ^{2}+E[\lVert g(X)\rVert^{2}+2\sigma ^{2} div g(X)]$.

This unbiased-risk identity converts an unknown-mean cross term into derivatives of the adjustment. Singular choices require approximation or a theorem verifying integrability before the identity is used.

<a id="section-151-9-the-james-stein-estimator-dominates-in-dimension-at-l"></a>
## 9. The James–Stein estimator dominates in dimension at least three {#section-153-9-the-james-stein-estimator-dominates-in-dimension-at-l}

Take

$g(x)=-a x/\lVert x\rVert^{2}$.

For $x\ne 0$,

\[\lVert g(x)\rVert^{2}=a^{2}/\lVert x\rVert^{2}\]

and

$div g(x)=-a(p-2)/\lVert x\rVert^{2}$.

Therefore

\[R(\theta ,X+g)-p\sigma ^{2}\]

$=[a^{2}-2a(p-2)\sigma ^{2}]E_\theta [1/\lVert X\rVert^{2}]$.

For $p\ge 3$, the expectation is finite and positive. Choosing

\[a=(p-2)\sigma ^{2}\]

gives the James–Stein estimator

\[\delta _JS(X)=[1-(p-2)\sigma ^{2}/\lVert X\rVert^{2}]X\]

and risk difference

$-(p-2)^{2}\sigma ^4 E_\theta [1/\lVert X\rVert^{2}]<0$.

Thus it dominates $X$ at every finite $\theta $ when $p\ge 3$. The point $X=0$ has probability zero in the continuous model; rigorous proofs regularise the singularity when applying Stein's identity.

<a id="section-185-10-what-the-james-stein-result-does-and-does-not-say"></a>
## 10. What the James–Stein result does and does not say {#section-187-10-what-the-james-stein-result-does-and-does-not-say}

The estimator shrinks all coordinates jointly toward the chosen origin. It is rotation equivariant but not translation equivariant. Its gain depends on the origin being substantively meaningful or on a re-centering strategy declared before assessment.

The raw shrinkage factor can be negative when $\lVert X\rVert^{2}<(p-2)\sigma ^{2}$, reversing direction. The positive-part estimator replaces it by

\[\max\{0,\,1-(p-2)\sigma ^{2}/\lVert X\rVert^{2}\}\]

and further improves risk, but is nonsmooth.

Because James–Stein dominates a minimax rule, its worst risk is at most $p\sigma ^{2}$; the universal lower bound forces its supremum to equal $p\sigma ^{2}$. It is therefore also minimax. Pointwise improvement and unchanged worst-case supremum coexist.

The result does not say every biased estimator is better, that three observations suffice, or that arbitrary regression regularisation dominates. Dimension refers to the number of simultaneously estimated normal means under the stated loss and covariance.

<a id="section-199-11-shrinkage-targets-and-coordinate-choices"></a>
## 11. Shrinkage targets and coordinate choices {#section-201-11-shrinkage-targets-and-coordinate-choices}

Shrinking toward vector $m$ replaces $X$ by $m+\delta _JS(X-m)$. A data-dependent target estimated from the same coordinates changes the risk calculation. Hierarchical models can learn common centres from replicated groups, but dependence between target estimation and shrinkage must be included.

Whitening a known nonspherical covariance can reduce the problem to spherical coordinates, but squared loss also transforms. Shrinking after an arbitrary rescaling while evaluating loss in original units can privilege coordinates solely because of their units.

In regression, ridge shrinkage depends on predictor scaling and penalty treatment of the intercept. Prediction risk and coefficient-estimation risk are different losses.

<a id="section-207-12-optimality-audit"></a>
## 12. Optimality audit {#section-209-12-optimality-audit}

For an equivariance, shrinkage, or minimax claim, record:

1. model, parameter space, dimension, and covariance;
2. action space and loss, including units;
3. transformation group and scientific meaning;
4. comparison class and whether bias is allowed;
5. pointwise, bounded-space, Bayes-average, or worst-case criterion;
6. shrinkage target and tuning source;
7. singularities, boundaries, and numerical conventions;
8. robustness when symmetry, covariance, or target structure is wrong.

<a id="section-220-13-exercises-with-complete-solutions"></a>
## 15. Development: complete the posterior square and its loss calculation {#section-770-15-development-complete-the-posterior-square-and-its-lo}

<a id="section-770-worked-example-20-2-complete-a-multivariate-posterior-s"></a>
### Worked example 20.2: complete a multivariate posterior square {#section-772-worked-example-20-2-complete-a-multivariate-posterior-s}

Assume $X\mid\theta\sim N_p(\theta,\sigma^2I)$ with known $\sigma^2>0$, and a proper prior $\theta\sim N_p(0,\tau^2I)$ with $\tau^2>0$. Multiplying their densities makes the posterior kernel proportional to the exponential of minus one half times

$$\frac{\lVert x-\theta\rVert^2}{\sigma^2}
 +\frac{\lVert\theta\rVert^2}{\tau^2}.$$

Put $v=(\sigma^{-2}+\tau^{-2})^{-1}$ and $b=v/\sigma^2=\tau^2/(\tau^2+\sigma^2)$. Expanding both sides verifies the square completion

$$\frac{\lVert x-\theta\rVert^2}{\sigma^2}
 +\frac{\lVert\theta\rVert^2}{\tau^2}
 =\frac{\lVert\theta-bx\rVert^2}{v}
  +\frac{\lVert x\rVert^2}{\sigma^2+\tau^2}.$$

The last term is constant with respect to the posterior variable $\theta$. Integrating the first exponential over $\theta$ gives $(2\pi v)^{p/2}$, so the normalised posterior is $N_p(bx,vI)$. Both the mean and covariance have been derived; one cannot infer the posterior covariance merely by inspecting the mean's shrinkage factor.

For any fixed action $a$, decompose $\theta-a=(\theta-bx)+(bx-a)$. Conditional expectation makes the cross term zero, because the first term has posterior mean zero. Therefore

$$E[\lVert\theta-a\rVert^2\mid X=x]
 =pv+\lVert a-bx\rVert^2.$$

The unique posterior action minimising squared loss is $a=bx$, and its posterior expected loss is $pv$. Since $v$ is independent of $x$, averaging over the prior predictive gives Bayes risk $pv=p\sigma^2\tau^2/(\sigma^2+\tau^2)$. A posterior probability calculation and a prior-average decision calculation use related quantities, but the equality here has been checked rather than presumed.

The fixed-state frequentist risk remains $b^2p\sigma^2+(1-b)^2\lVert\theta\rVert^2$. At $\theta=0$, shrinkage has less risk than $X$; for sufficiently distant $\theta$, it has more. Bayes optimality makes a statement about their average under the declared prior. It does not assert that the prior's high-density region contains the actual unknown state, nor that every state benefits from using that average criterion.

A nonzero fixed prior centre $m$ changes the posterior mean to $m+b(x-m)$ and replaces $\lVert\theta\rVert^2$ in the bias term by $\lVert\theta-m\rVert^2$. This is a substantive choice of target. If the centre is itself estimated from the same coordinates, it is no longer fixed in the risk expansion. The apparent similarity of the formulas does not license ignoring that new dependence.

<a id="section-797-16-development-use-diffuse-proper-priors-as-minimax-low"></a>
## 16. Development: use diffuse proper priors as minimax lower bounds {#section-799-16-development-use-diffuse-proper-priors-as-minimax-low}

The diffuse-prior proof does not require an improper prior to be a probability measure. For each finite $\tau^2>0$, the normal prior just used is proper and supported on the entire parameter space $\mathbb R^p$. For any measurable decision rule $\delta$ with defined nonnegative squared-error risk, its worst risk is at least its average under that prior. Its prior-average risk is in turn at least the Bayes risk, because conditional squared-loss minimisation was proved for every observation.

Thus for every rule and every finite prior variance,

$$\sup_{\theta\in\mathbb R^p}R(\theta,\delta)
 \geq \frac{p\sigma^2\tau^2}{\sigma^2+\tau^2}.$$

The right side does not depend on the rule. Taking the infimum over rules preserves the bound, and then allowing the finite number $\tau^2$ to grow without bound gives $r^*\geq p\sigma^2$. The ordinary rule $\delta(X)=X$ has constant risk $p\sigma^2$, supplying the matching upper bound. Therefore the exact minimax value is $p\sigma^2$.

Every inequality uses a proper prior before the limit. No exchange of an infimum with a limit, no improper posterior normalisation and no existence of a least-favourable proper prior is needed. The sequence of prior Bayes risks approaches the minimax value; a finite member need not attain it. These distinctions matter in problems where a convenient limiting prior is only a heuristic.

The parameter space is essential. A diffuse normal prior is not supported on a fixed bounded ball, so this proof cannot establish a minimax lower bound for that restricted problem. Section 5 optimises a fixed linear shrinkage rule over that ball. Its best coefficient gives an upper bound on the unrestricted decision class's minimax value there, and an exact optimum within the stated constant-coefficient linear class. Proving a global minimax theorem over all nonlinear rules would require a matching lower bound for the bounded space.

Minimaxity also does not require a worst state to exist. A rule can be strictly better at every finite state while its risk supremum remains the same. If it dominates $X$, its worst risk is at most $p\sigma^2$; the lower bound just proved forces that supremum to equal $p\sigma^2$. No particular state needs risk exactly equal to that value.

This is why a comparison should be written as an inequality over a named class. Best equivariant, Bayes, best fixed linear and minimax rules solve different optimisation problems. The later James–Stein calculation is remarkable precisely because it gives a pointwise improvement while leaving the already optimal supremum unchanged.

<a id="section-816-17-development-derive-the-integration-by-parts-risk-ide"></a>
## 17. Development: derive the integration-by-parts risk identity {#section-818-17-development-derive-the-integration-by-parts-risk-ide}

Start with a smooth adjustment $g:\mathbb R^p\to\mathbb R^p$ whose components and first derivatives are bounded. These sufficient conditions are stronger than necessary, but make the proof transparent. The normal density $f_\theta$ satisfies

$$\partial_i f_\theta(x)
 =-\frac{x_i-\theta_i}{\sigma^2}f_\theta(x).$$

Fixing all other coordinates, integrate the derivative of $g_i(x)f_\theta(x)$ over the $i$th coordinate. Boundedness of $g_i$ and Gaussian tail decay make the boundary term vanish at both infinities. The two resulting integrals are absolutely integrable, so Fubini permits averaging over the remaining coordinates. Rearranging gives

$$E_\theta[(X_i-\theta_i)g_i(X)]
 =\sigma^2E_\theta[\partial_i g_i(X)].$$

It is the derivative of the density, not an assumption that $g_i(X)$ is independent of the noise, that removes the unknown mean from the cross term. A data-dependent shrinkage adjustment is generally correlated with the noise.

Now expand $\lVert X+g(X)-\theta\rVert^2$. The original noise norm has expectation $p\sigma^2$, the adjustment contributes $E\lVert g(X)\rVert^2$, and summing the cross terms uses the identity. This yields

$$R(\theta,X+g)
 =p\sigma^2+E_\theta\{\lVert g(X)\rVert^2
                      +2\sigma^2\operatorname{div}g(X)\}.$$

This proof establishes the formula for the smooth bounded class just specified. More general versions permit appropriate absolute continuity and integrability. One must check their hypotheses or give a valid approximation before inserting an unbounded or singular adjustment. Merely differentiating a formula away from one exceptional point is not sufficient.

For example, a fixed linear adjustment $g(x)=-(1-b)x$ is unbounded but has constant derivative. Direct integration by parts still works because a linear factor times a Gaussian density vanishes at infinity, and every required integral is finite. The formula gives $p\sigma^2+ (1-b)^2E\lVert X\rVert^2-2\sigma^2p(1-b)$, which simplifies to $b^2p\sigma^2+(1-b)^2\lVert\theta\rVert^2$. Agreement with the earlier bias-variance calculation checks both the sign and the factor two.

The integrand is an unbiased estimate of risk under the normal model, not an observed realised loss. Its numerical value can even be negative for some adjustments and records while expected squared loss is nonnegative. Furthermore, selecting an adjustment after minimising a reported risk estimate changes the procedure. The risk analysis must include the dependence of that selected adjustment on the data; an unbiased estimate for each preselected rule does not automatically remain unbiased after selection.

<a id="section-842-18-development-control-the-james-stein-singularity"></a>
## 18. Development: control the James–Stein singularity {#section-844-18-development-control-the-james-stein-singularity}

<a id="section-844-worked-example-20-3-control-the-singular-risk-calculati"></a>
### Worked example 20.3: control the singular risk calculation {#section-846-worked-example-20-3-control-the-singular-risk-calculati}

Write $R=\lVert X\rVert$ and suppose $p>2$. The normal density is bounded. In a unit ball, polar integration bounds the expectation of $R^{-2}$ by a constant times $\int_0^1r^{p-3}\,dr$, which is finite exactly when $p>2$. Outside the unit ball, $R^{-2}\leq1$. Thus $0<E_\theta[R^{-2}]<\infty$ for every finite $\theta$. This local integrability argument works for every noncentral normal mean; it does not assume $\theta=0$.

For $a\geq0$ and $\varepsilon>0$, use the smooth bounded adjustment

$$g_\varepsilon(x)=-\frac{ax}{\lVert x\rVert^2+\varepsilon}.$$

Its first derivatives are bounded for each fixed $\varepsilon$, so Section 17 applies. With $r=\lVert x\rVert$,

$$\lVert g_\varepsilon(x)\rVert^2
 =\frac{a^2r^2}{(r^2+\varepsilon)^2},\qquad
\operatorname{div}g_\varepsilon(x)
 =-a\left\{\frac p{r^2+\varepsilon}
             -\frac{2r^2}{(r^2+\varepsilon)^2}\right\}.$$

For $r>0$, their absolute values are bounded by $a^2/r^2$ and $a(p+2)/r^2$, respectively, independently of $\varepsilon$. Also $\lVert X+g_\varepsilon(X)-\theta\rVert^2\leq2\lVert X-\theta\rVert^2+2a^2/R^2$. All dominating quantities are integrable. Dominated convergence therefore passes the regularised risk identity to the limit on both sides as $\varepsilon\downarrow0$.

Define $g(0)$ arbitrarily; that point has probability zero. The result is

$$R(\theta,X-aX/R^2)-p\sigma^2
 =[a^2-2a(p-2)\sigma^2]E_\theta[R^{-2}].$$

Every coefficient $0<a<2(p-2)\sigma^2$ gives strict pointwise improvement. The quadratic coefficient is smallest at $a=(p-2)\sigma^2$, giving the usual James–Stein rule. This minimises the risk simultaneously over this one-constant family because the positive expectation multiplying the coefficient does not depend on $a$. It does not prove optimality over all possible estimators.

At the centre $\theta=0$, the inverse-square expectation can be calculated without a noncentral distribution formula. Its radial-integral ratio is

$$\frac{\int_0^\infty r^{p-3}e^{-r^2/(2\sigma^2)}\,dr}
        {\int_0^\infty r^{p-1}e^{-r^2/(2\sigma^2)}\,dr}
 =\frac1{\sigma^2(p-2)}.$$

Integrating the denominator by parts gives the equality; the boundary term $r^{p-2}e^{-r^2/(2\sigma^2)}$ vanishes at zero and infinity for $p>2$. The James–Stein risk at the centre is consequently $2\sigma^2$, compared with $p\sigma^2$ for $X$.

For dimensions one and two, the inverse-square expectation diverges near zero. Substituting those dimensions into the formal risk expression is therefore invalid, even before inspecting the coefficient. The restriction $p\geq3$ is an analytic boundary as well as a sign condition. This is why ignoring a probability-zero singular point can invalidate a calculation whose derivatives look correct everywhere else.

<a id="section-879-19-development-prove-the-positive-part-improvement-by-s"></a>
## 19. Development: prove the positive-part improvement by spherical pairing {#section-881-19-development-prove-the-positive-part-improvement-by-s}

The positive-part rule replaces a negative radial multiplier by zero. That does not improve squared loss for every individual observation and every fixed mean; a pointwise geometric projection argument alone would be wrong. The relevant comparison is an expected loss under the specified normal law.

Here is a direct conditional argument. Fix $r>0$ and condition on $R=r$ in the spherical normal model. With respect to uniform surface measure on that sphere, the conditional density of $X$ is proportional to $\exp(\theta^{\mathsf T}x/\sigma^2)$. This follows by substituting $\lVert x\rVert=r$ in the normal density: its other exponential factors are constant over the sphere. Conditional distributions at a radius are understood through this polar-coordinate density, not by dividing probabilities of zero-probability events.

Let $M(r)=E_\theta[\theta^{\mathsf T}X\mid R=r]$. Pair each point $x$ with $-x$ on the sphere. On the half with $t=\theta^{\mathsf T}x\geq0$, the paired numerator contribution to $M(r)$ is

$$t\{e^{t/\sigma^2}-e^{-t/\sigma^2}\}\geq0.$$

The normalising denominator is positive and finite, so $M(r)\geq0$. At $\theta=0$ it equals zero. No claim that the conditional mean direction is observed or known is required; this is a property used to compare risks.

Let $c(r)=1-a/r^2$ with $a>0$. Where $c(r)<0$, replacing $c(r)X$ by zero changes the conditional expected squared loss by

$$E_\theta[\lVert\theta\rVert^2-\lVert c(r)X-\theta\rVert^2
          \mid R=r]
 =-c(r)^2r^2+2c(r)M(r)<0.$$

The first term is strictly negative, and the second is nonpositive. Where $c(r)\geq0$ the two rules coincide. Under $p>2$, integrability follows from the preceding singularity bounds; the positive-part estimate itself has norm at most $R$. Every finite-mean normal law gives positive probability to $0<R<\sqrt a$, so integrating the strict conditional inequality yields strict risk improvement at every finite $\theta$.

Take $a=(p-2)\sigma^2$. The positive-part James–Stein rule therefore strictly dominates the raw James–Stein rule, which already dominates $X$. The argument handles its nonsmooth threshold without differentiating across that threshold. It proves this precise risk comparison, not admissibility or global optimality of the positive-part estimator.

Spherical symmetry is central. With an arbitrary covariance matrix or a different quadratic loss, the conditional angular law and the radial loss expression change. One must transform the entire decision problem consistently before transferring the proof. The fact that a multiplier is truncated at zero is not by itself a universal dominance theorem.

<a id="section-903-20-development-transform-covariance-and-loss-together"></a>
## 20. Development: transform covariance and loss together {#section-905-20-development-transform-covariance-and-loss-together}

Suppose now $X\sim N_p(\theta,\Sigma)$ with known positive-definite $\Sigma$. Choose an invertible matrix $B$ with $\Sigma=BB^{\mathsf T}$, and put $Z=B^{-1}X$, $\zeta=B^{-1}\theta$. Then $Z\sim N_p(\zeta,I)$. Applying a spherical shrinkage theorem in $Z$ coordinates solves a decision problem with loss $\lVert\widehat\zeta-\zeta\rVert^2$.

Returning the action to original coordinates gives $\widehat\theta=B\widehat\zeta$. The corresponding original-coordinate loss is

$$\lVert B^{-1}(\widehat\theta-\theta)\rVert^2
 =(\widehat\theta-\theta)^{\mathsf T}\Sigma^{-1}
   (\widehat\theta-\theta).$$

Thus the spherical theorem gives dominance under this Mahalanobis loss. Under ordinary original-unit squared loss, the transformed loss is instead $(\widehat\zeta-\zeta)^{\mathsf T}B^{\mathsf T}B(\widehat\zeta-\zeta)$. It is generally not the unweighted squared norm for which the earlier theorem was proved.

For a concrete three-coordinate example, let $\Sigma=\operatorname{diag}(1,100,1)$ and $B=\operatorname{diag}(1,10,1)$. Whitening uses $Z=(X_1,X_2/10,X_3)$. Euclidean loss in whitened coordinates weights original squared errors as $e_1^2+e_2^2/100+e_3^2$. Ordinary original-unit loss weights transformed errors as $u_1^2+100u_2^2+u_3^2$. Those are different scientific trade-offs. A proof for the first does not establish the same comparison for the second.

Unit conversion creates the same issue even with no statistical modelling change. If one reported coordinate is multiplied by 100, its numerical squared error is multiplied by 10,000. A loss intended to represent unchanged consequences must compensate with a weight divided by 10,000. Otherwise the analyst has changed the decision criterion while describing the step as a harmless change of units.

Rotation is a special case that does preserve the spherical covariance and Euclidean loss together. For an orthogonal matrix $Q$, $\lVert Qx\rVert=\lVert x\rVert$ and $Q\delta_{\mathrm{JS}}(x)=\delta_{\mathrm{JS}}(Qx)$. Translation changes the declared shrinkage centre, so the raw zero-centred rule is not translation equivariant. If a fixed centre $m$ is part of the scientific problem, the translated rule $m+\delta_{\mathrm{JS}}(X-m)$ has the corresponding risk guarantee for $\theta-m$.

These examples provide a practical criterion for transferring an optimality result. Write the observation transformation, the state transformation, the action transformation and the transformed loss. Verify the probability law and the loss simultaneously. If only the covariance has been standardised, the original decision problem has not yet been carried through the transformation.

Total squared-error dominance is also a statement about a sum, not a separate uniform guarantee for each coordinate. The risk comparison averages all coordinate losses with the specified weights. A negative change in their sum does not imply that every summand decreases. If one coordinate represents a uniquely consequential scientific target, assigning it a different weight changes the problem and requires a corresponding comparison. “Simultaneous estimation” describes the joint action and loss; it does not promise that each reported coordinate is individually improved at every state.

<a id="section-925-21-development-compare-rules-by-changing-one-criterion-"></a>
## 21. Development: compare rules by changing one criterion at a time {#section-927-21-development-compare-rules-by-changing-one-criterion-}

Set $p=3$ and $\sigma^2=1$. The usual estimator has risk three everywhere. The fixed shrinkage rule $X/2$ has risk $3/4+\lVert\theta\rVert^2/4$. At the origin this is only $3/4$, but at $\lVert\theta\rVert^2=9$ it equals three, and beyond that sphere it is worse than the usual rule. The raw James–Stein rule has risk two at the origin and less than three at every finite state. Thus “better at the origin” and “dominates the usual estimator” select different comparisons even within this elementary model.

If the parameter is known to lie in the ball $\lVert\theta\rVert^2\leq3$, the rule $X/2$ has worst risk at most $3/2$. That number is below the raw James–Stein risk of two at the origin. Global dominance over $X$ on the unbounded space does not make James–Stein best for a smaller space. A real bound changes which adverse states must be protected against.

A proper prior $N_3(0,I)$ also selects $X/2$, now with Bayes risk $3/2$. The same coefficient and number arise here, but for a different reason. The prior permits every finite $\theta$ and averages over them; the ball excludes all states outside a bounded region and uses a supremum. Equality of numerical outputs is not equality of guarantees.

The posterior square proves the distinction sharply. Under that prior, any other rule $\delta$ has prior-average risk

$$\frac32+E_{\mathrm{predictive}}\lVert\delta(X)-X/2\rVert^2.$$

The raw James–Stein rule differs from $X/2$ except on the sphere $\lVert X\rVert^2=2$ and the arbitrarily defined point at zero. The predictive law has a positive density, so the extra expectation is strictly positive. Its risk is therefore larger on prior average despite its global dominance over $X$. This statement compares it with the Bayes rule, not with the usual estimator, so there is no contradiction.

For one observed vector in a location family, the best fully translation-equivariant rule is especially easy to identify. Equivariance under every vector shift requires $\delta(x+c)=\delta(x)+c$. Set $x=0$ and $c$ equal to the desired observation to obtain $\delta(x)=x+b$, with constant $b=\delta(0)$. Under the spherical normal model its risk is $p\sigma^2+\lVert b\rVert^2$. Thus $X$ is the unique best rule in this full translation-equivariant class under squared loss. James–Stein escapes this restriction by privileging a fixed centre.

For a sample of several vectors, equivariant rules can also depend on translation-invariant residuals, so the preceding one-vector characterisation must not be transferred verbatim. Its purpose is to exhibit, in a completely solved decision problem, how a restriction can exclude an improving competitor. When reporting an optimum, name the observation model, the states, the loss and the class of rules. These four choices explain which apparent conflicts are actually different questions.

<a id="section-943-22-elaboration-of-an-original-exercise-solution"></a>
## 22. Elaboration of an original exercise solution {#section-945-22-elaboration-of-an-original-exercise-solution}

<a id="section-945-original-exercise-9-bounded-space-substitution"></a>
### Original Exercise 9: bounded-space substitution {#section-947-original-exercise-9-bounded-space-substitution}

This supplies the intermediate algebra for the original Exercise 9 without replacing its prompt or short solution. Put $P=p\sigma^2$ and $Q=M^2$, with $P>0$ and $Q\geq0$. The best constant coefficient is $a^*=Q/(P+Q)$, so $1-a^*=P/(P+Q)$. Substituting both terms gives

$$P(a^*)^2+Q(1-a^*)^2
 =\frac{PQ^2+QP^2}{(P+Q)^2}
 =\frac{PQ(P+Q)}{(P+Q)^2}
 =\frac{PQ}{P+Q}.$$

Restoring $P,Q$ gives $p\sigma^2M^2/(M^2+p\sigma^2)$. For $M=0$ the expression is zero, attained by the zero action. For $M>0$ the second derivative of the constant-coefficient worst risk is $2(P+Q)>0$, confirming its unique minimum within that class. A lower-bound proof would still be needed to call this the minimax value among all measurable rules on the bounded ball.

<a id="section-956-23-optional-practice-extensions"></a>
## 25. Primary-source orientation for the shrinkage derivations {#section-1026-25-primary-source-orientation-for-the-shrinkage-derivat}

The original normal-mean dominance calculation appears in W. James and C. Stein, [“Estimation with Quadratic Loss” (1961), Section 2, especially pp. 362–365](https://sta721-f24.github.io/website/reading/James-Stein-1961.pdf). C. Stein's [“Estimation of the Mean of a Multivariate Normal Distribution” (1981), Section 2](https://www.stat.yale.edu/~hz68/619/Stein-1981.pdf), develops the integration-by-parts and unbiased-risk framework; its journal identifier is DOI 10.1214/aos/1176345632. These primary texts were consulted for scope and attribution. The bounded-smooth proof, singular regularisation and conditional spherical comparison above are supplied locally with their own stated hypotheses; no general theorem about arbitrary covariance, unknown variance or other losses is imported.

<a id="section-1028-sources"></a>

## Summary

<a id="section-765-14-summary-and-forward-route"></a>
Equivariance makes procedures respect genuine symmetries and often makes risk constant. Shrinkage trades variance for bias using a declared centre or restriction. Diffuse-prior lower bounds prove the ordinary normal mean estimator minimax, while Stein's identity shows it is inadmissible for three or more simultaneous means. The distinction between minimaxity, admissibility, Bayes optimality, and best equivariant performance prepares the composite-testing chapter's equally careful comparison scopes.


<a id="section-768-15-development-complete-the-posterior-square-and-its-lo"></a>

<a id="section-1034-summary"></a>
Equivariance makes procedures respect genuine symmetries and often makes risk constant. Shrinkage trades variance for bias using a declared centre or restriction. Diffuse-prior lower bounds prove the ordinary normal mean estimator minimax, while Stein's identity shows it is inadmissible for three or more simultaneous means. The distinction between minimaxity, admissibility, Bayes optimality, and best equivariant performance prepares the composite-testing chapter's equally careful comparison scopes.

Return to the main L3 route at [Tests, Errors, and Power](../principles-statistical-inference/tests-errors-and-power.md).

## Exercises {#section-222-13-exercises-with-complete-solutions}

<a id="section-222-1-mean-translation-equivariance"></a>
### 1. Mean translation equivariance {#section-224-1-mean-translation-equivariance}

**Exercise 20.1**

Show the sample mean is translation equivariant.

<details>
<summary>Hint 1</summary>

Compute the mean after adding the same constant to every coordinate.

</details>

<details>
<summary>Hint 2</summary>

Separate the sum of observations from n copies of the shift, then divide by n.

</details>

<details>
<summary>Solution</summary>

**Solution.** The mean of $x_i+c$ is $\bar{X}+c$, so shifting every observation shifts the estimate by the same amount.

</details>

<a id="section-249-2-zero-rule"></a>
### 2. Zero rule {#section-251-2-zero-rule}

**Exercise 20.2**

Why is $\delta (x)=0$ not translation equivariant?

<details>
<summary>Hint 1</summary>

Apply the proposed zero rule to shifted data.

</details>

<details>
<summary>Hint 2</summary>

Compare that output with the original output plus the required shift.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\delta (x+c1)=0$, while $\delta (x)+c=c$; they differ unless $c=0$.

</details>

<a id="section-276-3-constant-risk"></a>
### 3. Constant risk {#section-278-3-constant-risk}

**Exercise 20.3**

Why does an equivariant rule have constant risk in a transitive invariant location problem?

<details>
<summary>Hint 1</summary>

Use the compatible transformations of model, action and loss.

</details>

<details>
<summary>Hint 2</summary>

Transitivity connects any two states, and the risk transformation identity equates their risks.

</details>

<details>
<summary>Solution</summary>

**Solution.** Any two parameter values are connected by a translation. The risk transformation proof gives equal risk at transformed states.

</details>

<a id="section-303-4-usual-normal-risk"></a>
### 4. Usual normal risk {#section-305-4-usual-normal-risk}

**Exercise 20.4**

Derive $R(\theta ,X)=p\sigma ^{2}$.

<details>
<summary>Hint 1</summary>

Expand the squared Euclidean norm component by component.

</details>

<details>
<summary>Hint 2</summary>

Each centred component contributes its variance sigma squared; independence is part of the stated spherical normal model.

</details>

<details>
<summary>Solution</summary>

**Solution.** $X-\theta $ has $p$ independent mean-zero components of variance $\sigma ^{2}$; expected squared norm is the sum $p\sigma ^{2}$.

</details>

<a id="section-330-5-linear-shrinkage-bias"></a>
### 5. Linear-shrinkage bias {#section-332-5-linear-shrinkage-bias}

**Exercise 20.5**

Find the bias vector of $aX$.

<details>
<summary>Hint 1</summary>

Use linearity of expectation for the fixed multiplier.

</details>

<details>
<summary>Hint 2</summary>

Subtract theta from a theta and express the result as a shrinkage bias.

</details>

<details>
<summary>Solution</summary>

**Solution.** $E[aX]-\theta =a\theta -\theta =-(1-a)\theta $.

</details>

<a id="section-357-6-linear-shrinkage-risk"></a>
### 6. Linear-shrinkage risk {#section-359-6-linear-shrinkage-risk}

**Exercise 20.6**

Why is the cross term zero in its risk derivation?

<details>
<summary>Hint 1</summary>

Treat theta as fixed in the frequentist expectation.

</details>

<details>
<summary>Hint 2</summary>

The centred noise has expectation zero, so its inner product with any fixed multiple of theta has expectation zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The noise $X-\theta $ has mean zero, while $\theta $ is fixed, so their inner product has expectation zero.

</details>

<a id="section-384-7-global-failure"></a>
### 7. Global failure {#section-386-7-global-failure}

**Exercise 20.7**

For fixed $a<1$, why can $aX$ not dominate on all $R^p$?

<details>
<summary>Hint 1</summary>

Inspect the bias term as the norm of theta grows.

</details>

<details>
<summary>Hint 2</summary>

For a fixed a<1 its positive quadratic coefficient makes risk unbounded over the full parameter space.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its bias term $(1-a)^{2}\lVert \theta \rVert^{2}$ grows without bound, while the usual risk stays $p\sigma ^{2}$.

</details>

<a id="section-411-8-bounded-space-coefficient"></a>
### 8. Bounded-space coefficient {#section-413-8-bounded-space-coefficient}

**Exercise 20.8**

Differentiate the worst risk to recover $a*$.

<details>
<summary>Hint 1</summary>

Differentiate the displayed quadratic in a.

</details>

<details>
<summary>Hint 2</summary>

Collect a terms in the zero-derivative equation and check the positive quadratic coefficient.

</details>

<details>
<summary>Solution</summary>

**Solution.** Derivative is $2ap\sigma ^{2}-2(1-a)M^{2}$. Setting it to zero gives $a(p\sigma ^{2}+M^{2})=M^{2}$.

</details>

<a id="section-438-9-bounded-minimax-value"></a>
### 9. Bounded minimax value {#section-440-9-bounded-minimax-value}

**Exercise 20.9**

Substitute $a*$ into the worst risk.

<details>
<summary>Hint 1</summary>

Insert the optimal coefficient and its complementary weight into both risk terms.

</details>

<details>
<summary>Hint 2</summary>

Put the two terms over the common squared denominator; cancellation leaves the stated fraction.

</details>

<details>
<summary>Solution</summary>

**Solution.** Direct simplification gives $p\sigma ^{2}M^{2}/(M^{2}+p\sigma ^{2})$.

</details>

<a id="section-465-10-gaussian-bayes-factor"></a>
### 10. Gaussian shrinkage factor {#section-467-10-gaussian-bayes-factor}

**Exercise 20.10**

If $\tau ^{2}=3$ and $\sigma ^{2}=1$, find the posterior-mean shrinkage factor.

<details>
<summary>Hint 1</summary>

Use prior variance divided by total variance.

</details>

<details>
<summary>Hint 2</summary>

Substitute three and one into tau squared/(tau squared+sigma squared).

</details>

<details>
<summary>Solution</summary>

**Solution.** $\tau ^{2}/(\tau ^{2}+\sigma ^{2})=3/4$.

</details>

<a id="section-492-11-bayes-versus-pointwise-risk"></a>
### 11. Bayes versus pointwise risk {#section-494-11-bayes-versus-pointwise-risk}

**Exercise 20.11**

Does Bayes optimality imply smallest risk at every $\theta $?

<details>
<summary>Hint 1</summary>

Identify the averaging distribution in the Bayes criterion.

</details>

<details>
<summary>Hint 2</summary>

A smaller prior average can coexist with a larger risk at some individual states.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. It minimises risk averaged under the specified prior. Pointwise risks can cross.

</details>

<a id="section-519-12-minimax-lower-bound"></a>
### 12. Minimax lower bound {#section-521-12-minimax-lower-bound}

**Exercise 20.12**

Why is every Bayes risk a lower bound on minimax risk?

<details>
<summary>Hint 1</summary>

Bound each rule's prior-average risk by its supremum risk.

</details>

<details>
<summary>Hint 2</summary>

Then take infima over the same rule class, retaining the inequality direction.

</details>

<details>
<summary>Solution</summary>

**Solution.** A supremum dominates the prior average for every rule. Taking the infimum of each side preserves the lower-bound relation.

</details>

<a id="section-546-13-diffuse-prior-limit"></a>
### 13. Diffuse-prior limit {#section-548-13-diffuse-prior-limit}

**Exercise 20.13**

Find $\lim_{\tau ^{2}\to \infty }p\sigma ^{2}\tau ^{2}/(\sigma ^{2}+\tau ^{2})$.

<details>
<summary>Hint 1</summary>

Divide numerator and denominator by tau squared.

</details>

<details>
<summary>Hint 2</summary>

The residual sigma squared/tau squared term tends to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Divide numerator and denominator by $\tau ^{2}$; the limit is $p\sigma ^{2}$.

</details>

<a id="section-573-14-divergence-calculation"></a>
### 14. Divergence calculation {#section-575-14-divergence-calculation}

**Exercise 20.14**

For $g(x)=-ax/\lVert x\rVert^{2}$, verify $div g=-a(p-2)/\lVert x\rVert^{2}$.

<details>
<summary>Hint 1</summary>

Differentiate each coordinate of −a x divided by squared norm.

</details>

<details>
<summary>Hint 2</summary>

Sum the diagonal derivatives and use the sum of squared coordinates equal to the squared norm.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each diagonal derivative is $-a[\lVert x\rVert^{-2}-2x_i^{2}\lVert x\rVert^{-4}]$. Summing gives $-a[p/\lVert x\rVert^{2}-2\lVert x\rVert^{2}/\lVert x\rVert^4]$.

</details>

<a id="section-600-15-optimal-stein-coefficient"></a>
### 15. Optimal Stein coefficient {#section-602-15-optimal-stein-coefficient}

**Exercise 20.15**

Minimise $a^{2}-2a(p-2)\sigma ^{2}$ over $a$.

<details>
<summary>Hint 1</summary>

Treat the risk coefficient as a scalar quadratic.

</details>

<details>
<summary>Hint 2</summary>

Set its derivative to zero; its leading coefficient is positive.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its derivative is $2a-2(p-2)\sigma ^{2}$, so the minimiser is $a=(p-2)\sigma ^{2}$.

</details>

<a id="section-627-16-dimension-boundary"></a>
### 16. Dimension boundary {#section-629-16-dimension-boundary}

**Exercise 20.16**

Why does the displayed dominance proof not work at $p=2$?

<details>
<summary>Hint 1</summary>

Check both the coefficient and the integrability needed by the risk identity.

</details>

<details>
<summary>Hint 2</summary>

At dimension two the improvement coefficient vanishes and the inverse-square moment diverges near the origin.

</details>

<details>
<summary>Solution</summary>

**Solution.** The coefficient $p-2$ is zero and the inverse-square expectation is at its integrability boundary. The derived negative risk improvement disappears.

</details>

<a id="section-654-17-positive-part-trigger"></a>
### 17. Positive-part trigger {#section-656-17-positive-part-trigger}

**Exercise 20.17**

When is the raw James–Stein factor negative?

<details>
<summary>Hint 1</summary>

Solve the inequality making one minus the ratio negative.

</details>

<details>
<summary>Hint 2</summary>

The raw factor is negative when the squared observed norm is below (p−2) sigma squared.

</details>

<details>
<summary>Solution</summary>

**Solution.** When $\lVert X\rVert^{2}<(p-2)\sigma ^{2}$. The positive-part rule sets the factor to zero there.

</details>

<a id="section-681-18-translation-symmetry"></a>
### 18. Translation symmetry {#section-683-18-translation-symmetry}

**Exercise 20.18**

Why does shrinking toward zero break translation equivariance?

<details>
<summary>Hint 1</summary>

Compare shrinking a shifted vector toward zero with shifting an already shrunken vector.

</details>

<details>
<summary>Hint 2</summary>

The fixed target remains zero, so both shrinkage direction and amount generally change.

</details>

<details>
<summary>Solution</summary>

**Solution.** After shifting data, the shrinkage magnitude and direction are still computed relative to zero rather than the shifted origin, so $\delta (x+c)$ is not generally $\delta (x)+c$.

</details>

<a id="section-708-19-minimax-and-dominance"></a>
### 19. Minimax and dominance {#section-710-19-minimax-and-dominance}

**Exercise 20.19**

How can both $X$ and James–Stein be minimax if one dominates the other?

<details>
<summary>Hint 1</summary>

Distinguish pointwise risk from the supremum across states.

</details>

<details>
<summary>Hint 2</summary>

Strict gains at every finite state can tend to zero along increasingly distant states, leaving the same supremum.

</details>

<details>
<summary>Solution</summary>

**Solution.** Their supremum risks are both $p\sigma ^{2}$; James–Stein is strictly better at every finite state but approaches the same supremum along distant states.

</details>

<a id="section-735-20-predictor-scaling"></a>
### 20. Predictor scaling {#section-737-20-predictor-scaling}

**Exercise 20.20**

Why can ridge regression change when one predictor is converted from metres to centimetres?

<details>
<summary>Hint 1</summary>

Track how unit conversion rescales a regression coefficient.

</details>

<details>
<summary>Hint 2</summary>

A fixed common penalty changes its relative cost unless the predictor scaling or penalty metric is transformed consistently.

</details>

<details>
<summary>Solution</summary>

**Solution.** A common coefficient penalty is coordinate-dependent. Rescaling changes coefficient magnitudes and therefore relative penalty unless predictors or the penalty metric are transformed consistently.

</details>


<a id="section-763-14-summary-and-forward-route"></a>

<a id="section-958-23-optional-practice-extensions"></a>
### 21. SI-08-E21: the singularity boundary {#section-962-si-08-e21-the-singularity-boundary}

**Exercise 20.21**

For $X\sim N_p(\theta,I)$, explain why $E_\theta[\lVert X\rVert^{-2}]$ is finite for $p>2$ and infinite for $p\leq2$. Then for $p=4$ and $\theta=0$, calculate the risk of the raw James–Stein rule and compare it with the usual estimator.


<details>
<summary>Hint 1</summary>

Near zero, compare the positive continuous normal density with constants and use polar coordinates.

</details>

<details>
<summary>Hint 2</summary>

The radial integral is proportional to the integral of r to power p−3; at p=4 use the centre inverse-square moment in the raw James–Stein risk identity.

</details>


<a id="section-983-si-08-e22-whitening-changes-the-loss"></a>
### 22. SI-08-E22: whitening changes the loss {#section-985-si-08-e22-whitening-changes-the-loss}

**Exercise 20.22**

Let $p=3$ and $\Sigma=\operatorname{diag}(1,9,1)$. Write a whitening transformation and the original-coordinate loss corresponding to Euclidean loss after whitening. State the precise loss under which spherical James–Stein dominance transfers, and explain why this alone gives no conclusion under unweighted original-coordinate loss.


<details>
<summary>Hint 1</summary>

Divide the second coordinate by three to obtain identity covariance.

</details>

<details>
<summary>Hint 2</summary>

Transform the loss as well as the estimator: whitened Euclidean loss weights original second-coordinate squared error by one ninth.

</details>


<a id="section-1006-24-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-1008-24-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-1011-si-08-e21-the-singularity-boundary-solution"></a>
### SI-08-E21: the singularity boundary — solution {#section-1013-si-08-e21-the-singularity-boundary-solution}

Near zero the normal density is bounded above and bounded below by positive constants on a sufficiently small ball, since it is continuous and positive at zero for every finite $\theta$. Polar integration therefore reduces finiteness to $\int_0^\varepsilon r^{p-3}\,dr$, which is finite exactly for $p>2$. Outside a fixed ball the inverse square is bounded. At $p=4,\theta=0$, $E[R^{-2}]=1/(p-2)=1/2$. The raw James–Stein risk is $p-(p-2)^2E[R^{-2}]=4-4/2=2$, while the usual risk is four. This is expected total squared error under identity covariance, not a bound on each realised loss or each coordinate.

</details>
<details>
<summary>Solution</summary>

<a id="section-1019-si-08-e22-whitening-changes-the-loss-solution"></a>
### SI-08-E22: whitening changes the loss — solution {#section-1021-si-08-e22-whitening-changes-the-loss-solution}

Take $B=\operatorname{diag}(1,3,1)$ and $Z=B^{-1}X=(X_1,X_2/3,X_3)$. Returning a whitened action gives $\widehat\theta=B\widehat\zeta$. Whitened Euclidean loss equals $e^{\mathsf T}\Sigma^{-1}e=e_1^2+e_2^2/9+e_3^2$. Under that loss and the known normal model, spherical James–Stein dominance transfers by the invertible transformation. Unweighted original loss becomes $u_1^2+9u_2^2+u_3^2$ in whitened coordinates, a different loss from the proved theorem; a separate risk analysis is required.

</details>
<a id="section-1024-25-primary-source-orientation-for-the-shrinkage-derivat"></a>

## Sources {#section-1030-sources}

All existing destination references, theorem locators, source qualifications and original errata remain above. The preserved [Principles reference guide](../principles-statistical-inference/references-and-attribution-guide.md) records the earlier source map.

<a id="section-1032-summary"></a>
