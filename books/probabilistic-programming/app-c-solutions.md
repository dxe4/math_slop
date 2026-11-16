# Appendix C — Additional selected solutions {#sec-pp-solutions}

## Posterior predictive variance

For future $Y$ and parameter $\theta$,

$$
\operatorname{Var}(Y\mid y)
=E[\operatorname{Var}(Y\mid\theta,y)\mid y]
+\operatorname{Var}(E[Y\mid\theta,y]\mid y).
$$

The first term is outcome variation; the second is parameter uncertainty.
Plugging in one posterior estimate drops the second term.

## Metropolis normalizer cancellation

If $p(x)=\widetilde p(x)/Z$, the ratio $p(y)/p(x)$ equals
$\widetilde p(y)/\widetilde p(x)$ because $Z$ cancels. This permits MCMC with an
unnormalized target but does not remove the need to evaluate support and
relative density correctly.

## ELBO gap

Expanding KL gives

$$
\operatorname{KL}(q\|p(\cdot\mid y))
=E_q[\log q-\log p(y,z)]+\log p(y)
=\log p(y)-\mathcal L.
$$

Nonnegativity proves the lower bound and identifies the exact approximation
gap for the chosen $q$.

## Forward-message normalization

If an unnormalized forward vector at time $t$ is
$\widetilde a_t$ and $c_t=\sum_j\widetilde a_t(j)$, then
$a_t=\widetilde a_t/c_t$ is the filtering distribution. Inductively, each
$c_t=p(y_t\mid y_{1:t-1})$, so the observation-sequence evidence factors as
$p(y_{1:T})=\prod_tc_t$ and its stable log value is $\sum_t\log c_t$.

## Folded R-hat

Rank-normalized R-hat compares chain locations after a robust monotone
transformation. Chains centered at the same value but having different scales
can evade that comparison. Replacing each original draw by its absolute
deviation from the pooled original-draw median turns scale differences into
location differences. Rank-normalizing those folded values and computing R-hat
then reveals the mismatch.

## Raw leave-one-out identity

From Bayes' rule,
$p(\theta\mid y_{-i})\propto p(\theta\mid y)/p(y_i\mid\theta)$. Normalizing this
relation shows

$$
p(y_i\mid y_{-i})
=\left(E_{p(\theta\mid y)}[1/p(y_i\mid\theta)]\right)^{-1}.
$$

This is why full-posterior draws can be reused and why very small pointwise
likelihoods create unstable ratios.

## Logistic transform Jacobian

For $\theta=(1+e^{-u})^{-1}$,
$d\theta/du=\theta(1-\theta)$. Therefore a density specified on $\theta$ and
evaluated on $u$ receives log adjustment
$\log\theta+\log(1-\theta)$. Generated quantities do not receive this term
because no density is being changed there.

## Ratio estimation by classification

With equally likely class labels for joint pairs and independently shuffled
pairs, the optimal classifier satisfies

$$
D(\theta,x)
=\frac{p(\theta,x)}{p(\theta,x)+p(\theta)p(x)}.
$$

Rearranging gives $D/(1-D)=p(x\mid\theta)/p(x)$. A trained classifier only
approximates this population identity and needs local calibration checks.

## Exact A/B hierarchy: changed-data key {#sec-pp-ab-exact-key}

This key belongs to the [changed-data practice](22-discrete-amortized-case-studies.md#sec-pp-ab-exact-practice),
with training counts $D'=((n_A,y_A),(n_B,y_B))=((2,1),(4,1))$ and reserved counts
$(m_A,z_A)=(2,0),(m_B,z_B)=(2,1)$. It is public answer support, not a secure exam
or an automatically graded attempt. The original chapter exercises and their
selected solutions retain their original scopes.

### Fit and interpret the training-only posterior {#sec-pp-ab-exact-key-fit}

Use

$$
L_h(D')=\operatorname{BB}(2,1;a_h,b_h)
        \operatorname{BB}(4,1;a_h,b_h),\qquad
Z(D')=\sum_h\tfrac16 L_h(D')=\frac{13747}{177450}.
$$

In the chapter's state order
$(1/4,4),(1/4,12),(1/2,4),(1/2,12),(3/4,4),(3/4,12)$,

$$
(w_1,\ldots,w_6)
=\frac{1}{27494}(5070,7425,5408,6720,1521,1350).
$$

For each state the continuous arm posteriors are
$\operatorname{Beta}(a_h+1,b_h+1)$ and
$\operatorname{Beta}(a_h+1,b_h+3)$. Consequently

$$
E(\theta_A\mid D')=\frac{41488}{96229}\approx0.431138222,\qquad
E(\theta_B\mid D')=\frac{4848}{13747}\approx0.352658762.
$$

Each conditional mean is the weighted average of the arm's empirical rate and
$\mu$, with weights $n_j/(\kappa+n_j)$ and $\kappa/(\kappa+n_j)$; the final mean
also averages over the six training-only hyperstate weights. The independent
model gives A mean $1/2$ and B mean $1/3$; the fully pooled model has posterior
$\operatorname{Beta}(3,5)$ and gives both arms mean $3/8$. The hierarchical
means in this fixture are between those endpoints. This does not prove the
same bracketing for every hierarchical model.

The mean difference and net utility difference are

$$
E(\theta_B-\theta_A\mid D')=-\frac{128}{1631}
\approx-0.078479460,
$$

$$
E[u(B,\theta)-u(A,\theta)\mid D']
=-\frac{128}{1631}-\frac15=-\frac{2271}{8155}
\approx-0.278479460.
$$

The risk-neutral choice is therefore to keep A. The individual expected
utilities are about $0.431138222$ for A and $0.152658762$ for B. A choice of A
does not imply $\theta_B\leq\theta_A$ with certainty: exact conditional-beta
integration followed by mixing gives

$$
p(\theta_B>\theta_A\mid D')
=\frac{2400043807}{6740346558}\approx0.356071277.
$$

For example, the integer-shape beta CDF identity underlying that integration
is, for $X\sim\operatorname{Beta}(a,b)$ and independent
$Y\sim\operatorname{Beta}(c,d)$,

$$
p(Y>X)=1-\frac{1}{B(c,d)}
\sum_{i=0}^{d-1}\frac{(-1)^i\binom{d-1}{i}}{c+i}
\frac{B(a+c+i,b)}{B(a,b)}.
$$

It follows by expanding $(1-t)^{d-1}$ inside $F_Y(x)$ and using
$E(X^r)=B(a+r,b)/B(a,b)$. Apply it within each hyperstate, then average with
$w_h$. The formula and its finite sum do not remove model uncertainty or
identify a causal treatment effect.

### Score the specified joint event {#sec-pp-ab-exact-key-score}

Keeping the reserved counts out of the posterior, the main hierarchy gives

$$
p_H(z'\mid D')
=\sum_hw_h\operatorname{BB}(2,0;a_h+1,b_h+1)
             \operatorname{BB}(2,1;a_h+1,b_h+3)
=\frac{226378}{1635893}\approx0.138381911.
$$

The independent model has posteriors $\operatorname{Beta}(2,2)$ for A and
$\operatorname{Beta}(2,4)$ for B, so

$$
p_N(z'\mid D')
=\operatorname{BB}(2,0;2,2)\operatorname{BB}(2,1;2,4)
=\frac{4}{35}\approx0.114285714.
$$

The pooled model's shared probability has posterior $\operatorname{Beta}(3,5)$;
its common probability must be integrated once for both future arms:

$$
p_P(z'\mid D')
=\binom20\binom21\frac{B(3+0+1,\,5+2+1)}{B(3,5)}
=\frac7{44}\approx0.159090909.
$$

Thus this event ranks $P>H>N$, reversing the worked example's winner. The
natural log scores are approximately $-1.838279,-1.977738,-2.169054$ in that
order. One event supplies a finite comparison, not a general ranking or an
empirical calibration certificate. In $H$, conditional future-arm
probabilities multiply **inside** the shared-hyperstate sum; their separately
mixed marginals do not. In $P$, both arms share the same continuous probability,
so multiplying separately integrated beta–binomial probabilities is wrong too.

### Sensitivity and an honest action boundary {#sec-pp-ab-exact-key-sensitivity}

Under the declared central-mean prior, posterior weights in the same state
order become

$$
\frac1{39622}(5070,7425,10816,13440,1521,1350).
$$

The posterior means become

$$
E_{\mathrm{central}}(\theta_A\mid D')=\frac{62712}{138677}
\approx0.452216301,\qquad
E_{\mathrm{central}}(\theta_B\mid D')=\frac{7332}{19811}
\approx0.370097421.
$$

Their difference is approximately $-0.082118881$, and after the same $1/5$ cost
the net advantage of B is
$-195617/693385\approx-0.282118881$. This sensitivity check also chooses A;
agreement across two declared priors does not establish robustness to every
prior or a misspecified likelihood.

The original prior predictive extreme-count probabilities remain $97/273$ for
the uniform prior and $148/455$ for the sensitivity prior. They concern a new
exchangeable arm's four-exposure count before observing either training set.
Replacing prior masses by weights learned from $D'$ would change the question
to posterior prediction, and including the reserved counts in either fit would
invalidate the specified frozen comparison.

Before using this choice outside the fixture, ask for evidence about stable
exposure populations, within-arm independence, arm exchangeability and the
actual reward/cost model; random allocation and causal assumptions would also
be needed for a causal treatment claim. Other valid limitations include
unmodelled switching costs, risk aversion and interference. Completing a
public worked task supplies practice and self-reported review, not fresh
assessment, certified mastery or empirical deployment evidence.

**Ten-point self-check rubric.** Award two points for the six training-only
weights, evidence and conditional beta shapes; two for both marginal means and
the pooling explanation; two for the gain, cost-adjusted action and a correct
uncertainty statement (including the probability above); two for all three
joint event scores with the correct mixture/product placement; and two for the
sensitivity calculation, unchanged prior predictive check and explicit
model/public-practice boundary. Rounded decimals with a stated formula and
correct exact arithmetic receive the same credit as the displayed fractions.
A numerical answer obtained by fitting reserved counts does not satisfy the
corresponding fit or predictive-score item. This rubric is answer support and
does not create or alter any learner assessment record.
