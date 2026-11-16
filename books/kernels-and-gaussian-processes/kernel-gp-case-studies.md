
# Case Studies: Geometry, Probability and Approximation

## Start from a target and a model

The same kernel can define a deterministic function norm, a Gaussian covariance, a feature approximation or a discrepancy between probability laws. Those objects share algebra but answer different questions. These cases combine the course around small exact calculations so that model assumptions, inference, approximation and interpretation remain visible.

Every dataset and probability law below is synthetic and specified mathematically. Numerical expressions are derived from finite systems or integrals, not presented as executed program output. The projects ask for analysis with staged support. A later implementation would need its own numerical work and cannot inherit correctness merely from matching a formula on paper.

For each case identify the unknown object, observation model and target functional first. Then choose an exact calculation or a declared approximation. Finally state which geometry or probability law makes an uncertainty claim meaningful. This sequence prevents an apparently successful solve from answering a different question than the learner intended.

## Worked example 1: identical responses do not determine extrapolation

**Example 14.1 (identical responses do not determine extrapolation).** Observe response one at inputs minus one and plus one, with independent unit-variance Gaussian measurement noise. Compare a constant kernel and a linear kernel, each with unit scale and zero mean. The constant prior is one random intercept. The linear prior is one random slope with no intercept. Both training latent matrices have eigenvalues two and zero, but the roles of common and contrast directions are exchanged.

Under the constant kernel, the response vector lies in the common direction with observation eigenvalue three. Its inverse quadratic form is two thirds and the observation determinant is three. The posterior intercept mean is two thirds and variance one third. At input zero the same latent distribution applies.

Under the linear kernel, the identical responses lie in a direction where the latent process has zero variance and only the unit measurement noise remains. Its quadratic form is two and the determinant again three. The posterior slope mean is zero, and its variance is one third. At input zero the latent function is exactly zero, with zero variance, because every permitted linear function passes through that point.

The constant-model log evidence exceeds the linear-model value by two thirds. This is a relative comparison under those priors and known noise, not proof that the real unknown function is globally constant. The difference in zero-input uncertainty is structural: one prior allows an uncertain intercept and the other forbids it. No optimizer tolerance can supply an intercept to the restricted linear model.

A Gaussian kernel gives another family. Let r be its covariance between the training inputs and q its covariance from either to zero. With general independent noise variance v, the posterior zero-input mean and variance are
$$
\frac{2q}{1+r+v},\qquad 1-\frac{2q^2}{1+r+v}.
$$
As length scale tends to infinity, r and q tend to one and these become the constant-kernel expressions. As length scale decreases to zero, q tends to zero and the zero-input prediction returns to prior mean zero and variance one. Both limits are valid model calculations but encode different transfer of information across unobserved locations.

The example distinguishes three explanations for a prediction: the data constrain some directions, the kernel excludes or correlates others, and measurement noise limits their precision. Looking only at a mean curve hides those differences. A point estimate and its variance should therefore remain attached to the actual kernel, noise and mean assumptions that produced them.

## Worked example 2: predicting an integral changes experimental design

**Example 14.2 (predicting an integral changes experimental design).** Take standard Brownian motion on the unit interval and target its area $I=\int_0^1B_tdt$. The continuous-path construction makes the ordinary path integral well defined, and bounded covariance integration also defines the same mean-square quantity. Its prior variance is the double integral of minimum of the two times, equal to one third.

Observe the endpoint B one noiselessly with value a. Its cross covariance with the area is one half, so the conditional area mean is a divided by two and variance one twelfth. That posterior still has uncertainty because many Brownian bridges share the observed endpoint. Replacing the path by its straight conditional mean would compute the area mean but discard this variance.

At a general observation time x between zero and one, the cross covariance is $x-x^2/2$ and observation variance x. The area variance reduction is therefore $x(1-x/2)^2$. Differentiation gives its interior maximum at x equal to two thirds, with reduction eight twenty-sevenths. The resulting area variance is one twenty-seventh, smaller than the endpoint's one twelfth.

The optimal single noiseless design for the area is therefore not the location of largest prior pointwise variance, which is the endpoint. Different targets imply different experiment values. At the optimum the conditional area mean is two thirds times the measured value. Independent measurement noise would add its variance to the denominator and change this design problem.

The deterministic RKHS calculation has matching geometry. In the derivative-energy space, the worst-case unit-ball error for estimating the integral from one value at x is minimized by weight $1-x/2$, and its squared minimum is one third minus that same variance reduction. It is a bound over deterministic functions in an explicit norm ball. The Brownian probability interpretation uses a different object, whose typical paths are outside that ball, even though the two formulas agree.

This is an example of a useful algebraic connection with distinct warrants. One can report either the worst-case integration bound under the norm assumption or the GP posterior area variance under its probability model. Combining their words without the assumptions would imply a coverage claim that neither calculation established.

## Worked example 3: comparing laws and losing information with finite features

**Example 14.3 (comparing laws and losing information with finite features).** Let P be the fair law on minus one and plus one, and let Q be the point mass at zero. A linear-kernel embedding records the same zero mean for both and gives zero MMD, while the laws differ. With a Gaussian kernel of bandwidth h, put $r=e^{-2/h^2}$ and $q=e^{-1/(2h^2)}$. The independent-copy formula gives
$$
\operatorname{MMD}^2(P,Q)=\frac32+\frac r2-2q.
$$
It is positive for every fixed positive finite bandwidth by the characteristic-kernel theorem. As h grows it tends to zero, showing that identification at each fixed scale does not supply a bandwidth-independent discrepancy magnitude.

Now replace the kernel by any fixed finite feature map of dimension D. Choose D plus two distinct input points and augment their feature vectors with a leading one. These vectors lie in dimension D plus one, so they have a nontrivial linear dependence. Its coefficients sum to zero because of the leading coordinate. They must contain both positive and negative entries.

Normalize the positive coefficients and the absolute negative coefficients by their common sum. They define two different probability laws on disjoint subsets of the selected points, but their feature expectations agree. Hence every finite feature map on a domain with enough points misses some distributional distinction. This is an exact information limitation, not a small-sample approximation failure.

For random features the constructed laws can depend on the realized feature draw. That does not contradict a concentration theorem for one fixed pair of distributions chosen independently of the features. It explains why the quantifiers matter: accuracy for fixed points or laws and uniform identification over every possible law are different statements. The full Gaussian kernel has infinitely many spectral directions and the earlier characteristic proof uses them all through positive frequency support.

With finite samples there is another layer of error before any feature approximation. Empirical mean elements differ from their population values. A zero empirical discrepancy does not prove equal population laws, and a negative unbiased squared estimate is not a negative population distance. Keep the probability target, its sample estimator and its finite representation distinct.

## Approximation comparisons need a common reference target

Consider a regression posterior calculated with a low-rank prior and another obtained from a variational inducing family under the original prior. The former is exact for a changed kernel; the latter has an explicit evidence lower bound and retains prior conditional residuals. Their posterior means may resemble each other while their variances differ in directions omitted by the inducing span.

A random-feature GP is likewise exact conditional on a sampled finite kernel. Its approximation event can control selected covariance entries and, through a noise-dependent perturbation bound, a chosen prediction. This is different from integrating a Bayesian prior over frequencies after updating their evidence. Uniformly averaging computational draws need not be the latter posterior.

For GP classification, Laplace gives another approximation even before introducing inducing variables or features. Combining them can introduce several gaps: a changed covariance, a non-Gaussian-to-Gaussian approximation, finite numerical solve error, and hyperparameter plug-in uncertainty. A single objective convergence value does not measure their sum. A concise analysis can name the target at each stage and state which discrepancy is actually controlled.

## Project 1: separate latent and record noise at duplicate inputs

At one location take two records and compare a shared latent variance tau squared with independent measurement variance v. Derive the common and contrast observation eigenvalues, then explain what changes if the purported second record is an exact copy of the first noisy reading.

<details><summary>Hint 1</summary>

Use the sum and difference vectors for the two-record covariance.

</details>

<details><summary>Hint 2</summary>

A copied reading shares its noise as well as its latent value.

</details>

<details><summary>Full solution</summary>

Independent readings have covariance tau squared times the all-ones matrix plus v times identity, with eigenvalues two tau squared plus v and v. The contrast contains measurement information and cancels the latent value. Exact copies instead have every covariance entry equal tau squared plus v, giving common eigenvalue twice that sum and contrast eigenvalue zero. They supply one noisy random reading, not two independent likelihood factors. Adding jitter to the copied matrix would define extra independent variation rather than prove that the copy contains another observation.

</details>

## Project 2: choose a feature error for a mean target

For normalised kernels with n observations, noise variance at least v positive and response norm at most B, suppose the test cross-vector norm is at most square root n. Use the random-feature mean bound to give a sufficient kernel entry tolerance for absolute mean error at most eta. State what finite input list the probability event must cover.

<details><summary>Hint 1</summary>

Substitute the cross-vector and response bounds into both perturbation terms.

</details>

<details><summary>Hint 2</summary>

The same event must control the training matrix and the query cross vector.

</details>

<details><summary>Full solution</summary>

The sufficient error is epsilon times square root n times B multiplied by one over v plus n over v squared. Choose epsilon no larger than eta divided by that positive factor, assuming B is positive. If B is zero the zero-mean prediction is already zero. The fixed-design feature concentration event must include all training inputs and the specified query before features are drawn; adaptive queries need the compact-domain uniform event or another argument. Small noise can make the required tolerance much tighter than a kernel-only comparison suggests.

</details>

## Project 3: mode, evidence and class probability

For one binary success with a centred unit-normal latent score prior, derive an exact evidence identity, the mode equation and the predictive success integral after the Laplace approximation. Explain why these three quantities cannot be substituted for one another.

<details><summary>Hint 1</summary>

Symmetry determines the exact evidence, while the score equation uses a derivative.

</details>

<details><summary>Hint 2</summary>

A new success probability averages sigmoid under the chosen posterior, rather than evaluating its mode.

</details>

<details><summary>Full solution</summary>

The exact success evidence is one half by sigmoid symmetry under the centred prior. The posterior mode solves f equal one minus sigmoid f and lies between zero and one half. Laplace replaces the posterior by a Gaussian at that root with inverse curvature variance. A new independent label at the same input then has approximate success probability equal the integral of sigmoid against that Gaussian. The root is a latent score, the evidence is a probability of the observed datum under the prior, and the integral is a posterior predictive probability. Accurate optimisation of the root does not make the latter Gaussian approximation exact.

</details>

## A final mathematical comparison

The course began with finite Gaussian weights and separated an uncertain function from a single estimate. Positive kernel constructions made those finite covariances consistent. RKHS completion supplied a deterministic geometry, representers reduced data objectives to finite sections, and SVMs showed how that geometry supports classification without posterior probabilities. Gaussian-process construction and conditioning then supplied the probability interpretation and its path qualifications.

The later chapters introduced explicit departures from the exact fixed-hyperparameter regression case. Logistic likelihoods remove Gaussian closure; hyperparameter learning changes conditioning; numerical perturbations affect evaluation; inducing variables and random features restrict or approximate representations; mean embeddings compare laws through a declared function class. Each operation has a precise mathematical object and its own proof conditions.

A useful conclusion therefore states what was predicted or compared, under which model, and with which controlled approximation. It need not claim that every possible uncertainty has been eliminated. Preserving those assumptions makes the formulas useful beyond their first example and leaves a clear route to stronger modelling or analysis when the present scope is insufficient.

## Exercises

<a id="kernel-gp-case-studies-ex-1"></a>

### Exercise 1

Why do the constant and linear two-input models have equal observation determinants?

<details><summary>Hint 1</summary>

Their latent eigenvalues are both two and zero.

</details>

<details><summary>Hint 2</summary>

Unit noise shifts both spectra to three and one.

</details>

<details><summary>Full solution</summary>

The determinant is the product of the two shifted eigenvalues, three in either model. Their eigendirections differ, so the same response vector has a different inverse quadratic form. Matching covariance eigenvalues alone does not give equal evidence for a fixed observed vector or equal test predictions.

</details>

<a id="kernel-gp-case-studies-ex-2"></a>

### Exercise 2

Compute the log evidence difference favoring the constant model.

<details><summary>Hint 1</summary>

The determinant and normalising constants cancel.

</details>

<details><summary>Hint 2</summary>

Compare quadratic forms two thirds and two.

</details>

<details><summary>Full solution</summary>

The difference is minus one half times two thirds minus two, equal to two thirds. This is a relative evidence statement under the two declared priors and unit noise. It does not establish that every unobserved function value is constant or exclude other kernel families.

</details>

<a id="kernel-gp-case-studies-ex-3"></a>

### Exercise 3

Why is the linear-model latent variance zero at input zero?

<details><summary>Hint 1</summary>

Its feature is the input itself with no intercept.

</details>

<details><summary>Hint 2</summary>

Every allowed function vanishes there.

</details>

<details><summary>Full solution</summary>

The latent value is zero times the random slope and is therefore deterministically zero under both prior and posterior. Measurement noise would still make a fresh observed response uncertain. This structural restriction is stronger than uncertainty reduction from data and would change if an intercept feature or another kernel were added.

</details>

<a id="kernel-gp-case-studies-ex-4"></a>

### Exercise 4

Derive the Brownian area prior variance.

<details><summary>Hint 1</summary>

Integrate minimum of two times over the unit square.

</details>

<details><summary>Hint 2</summary>

Split the square along its diagonal.

</details>

<details><summary>Full solution</summary>

The two symmetric triangles give twice the integral from zero to one of the integral from zero to t of s ds, equal to the integral of t squared dt, or one third. The diagonal has zero planar measure. This covariance integration is justified by the bounded continuous Brownian kernel on the compact square.

</details>

<a id="kernel-gp-case-studies-ex-5"></a>

### Exercise 5

Why is the optimal noiseless area observation time two thirds?

<details><summary>Hint 1</summary>

The variance reduction is $x(1-x/2)^2$.

</details>

<details><summary>Hint 2</summary>

Differentiate it on the unit interval and compare endpoints.

</details>

<details><summary>Full solution</summary>

Its derivative factors as one minus x over two times one minus three x over two. The first factor stays positive on the interval, so the derivative changes from positive to negative at two thirds. The reduction there is eight twenty-sevenths, leaving area variance one twenty-seventh. Endpoint observation instead leaves one twelfth and is less informative for this target.

</details>

<a id="kernel-gp-case-studies-ex-6"></a>

### Exercise 6

What is the optimal one-point quadrature weight at that time?

<details><summary>Hint 1</summary>

The kernel mean cross covariance is $x-x^2/2$.

</details>

<details><summary>Hint 2</summary>

Divide by point variance x.

</details>

<details><summary>Full solution</summary>

The weight is one minus x over two, equal to two thirds at x two thirds. It is both the coefficient of the conditional area mean and the unrestricted minimum-RKHS-error quadrature weight under their separate interpretations. Equality of formulas does not make typical Brownian paths deterministic members of the RKHS unit ball.

</details>

<a id="kernel-gp-case-studies-ex-7"></a>

### Exercise 7

Compute Gaussian MMD squared for the symmetric two-point law and point mass.

<details><summary>Hint 1</summary>

The within-P expectation is one half of one plus r.

</details>

<details><summary>Hint 2</summary>

The within-Q expectation is one and cross expectation q.

</details>

<details><summary>Full solution</summary>

Adding the first two terms and subtracting twice the cross term gives three halves plus r over two minus two q. Characteristicness makes this positive for every finite positive bandwidth because the laws differ. A linear kernel misses the distinction by recording only their shared zero mean.

</details>

<a id="kernel-gp-case-studies-ex-8"></a>

### Exercise 8

Why can every fixed D-dimensional feature map miss two probability laws on a sufficiently large domain?

<details><summary>Hint 1</summary>

Augment D plus two feature vectors with a constant coordinate.

</details>

<details><summary>Hint 2</summary>

Split a nontrivial linear dependence by coefficient sign.

</details>

<details><summary>Full solution</summary>

The augmented vectors in dimension D plus one are dependent. Their coefficients sum to zero and therefore have positive and negative parts of equal mass. Normalizing those parts defines distinct probability laws with identical feature means. The argument is exact and can depend on the realized feature map, so it does not contradict a fixed-law concentration bound.

</details>

<a id="kernel-gp-case-studies-ex-9"></a>

### Exercise 9

Why must a mean-error feature event include the test query?

<details><summary>Hint 1</summary>

The prediction depends on its cross-kernel vector.

</details>

<details><summary>Hint 2</summary>

Training-matrix accuracy alone does not control that vector.

</details>

<details><summary>Full solution</summary>

The perturbation proof has both a changed-system term and a changed-cross-vector term. A finite event controlling only training pairs leaves the latter unbounded at an unseen query. Include predetermined query inputs in the union event or use a uniform-domain theorem for adaptive queries. The target determines which covariance entries need control.

</details>

<a id="kernel-gp-case-studies-ex-10"></a>

### Exercise 10

Does a small numerical residual certify that a low-rank GP approximates the original GP accurately?

<details><summary>Hint 1</summary>

The residual concerns the chosen approximate system.

</details>

<details><summary>Hint 2</summary>

The original covariance can differ before any solve error occurs.

</details>

<details><summary>Full solution</summary>

No. It can certify an accurate solve of the low-rank model under a condition-aware bound. Approximation to the original posterior additionally depends on the covariance or variational-family discrepancy and the query. Model change, approximation error and numerical solve error are separate layers, so one small residual does not control all three.

</details>
