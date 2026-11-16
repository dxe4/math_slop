var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: hyperparameters-marginal-likelihood
title: "Hyperparameters and Marginal Likelihood"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Hyperparameters and Marginal Likelihood

## A model family beyond one covariance matrix

A kernel length scale, output variance, noise covariance and mean specification define a family of probability models. At fixed values, Gaussian regression gives an exact posterior. Selecting those values by marginal likelihood or integrating a hyperprior are different operations. Each changes the interpretation of the final prediction, and neither makes model misspecification disappear.

**Definition 9.1 (Hyperparameter evidence model).** Let the observation law be $N(m_\\theta,A_\\theta)$, where $A_\\theta=K_\\theta+R_\\theta$ is positive definite on the parameter domain. Inputs are fixed and the mean and covariance are differentiable wherever derivatives are used. The exact regression log marginal likelihood is
$$
\\ell(\\theta)=-\\tfrac12(y-m_\\theta)^TA_\\theta^{-1}(y-m_\\theta)
-\\tfrac12\\log\\det A_\\theta-\\tfrac n2\\log(2\\pi).
$$
This integrates the latent training function, unlike the likelihood conditional on its fitted mean. The normalisation term is essential. Dropping the determinant gives a different criterion and can favor increasing covariance simply to reduce its inverse quadratic form.

## Deriving a covariance and mean gradient

**Proposition 9.2 (Evidence differential).** For a differentiable positive-definite observation covariance and differentiable mean, the evidence differential is the expression below. Write r for the centred responses and alpha for the solution of A alpha equal to r. Differentiate the inverse identity to get $dA^{-1}=-A^{-1}(dA)A^{-1}$, and the determinant identity to get $d\\log\\det A=\\operatorname{tr}(A^{-1}dA)$. Substitution gives
$$
d\\ell=(dm)^T\\alpha+\\tfrac12\\operatorname{tr}\\{(\\alpha\\alpha^T-A^{-1})dA\\}.
$$
This proves the gradient for every differentiable parameter direction, including mean parameters. It does not assert that the objective is globally concave in length scale, log amplitude or a nonlinear covariance parameterisation. Several parameter combinations can produce similar covariance matrices or several local optima.

Positive-parameter reparameterizations require the chain rule. A log variance parameter multiplies its variance derivative by that variance. Confusing variance with standard deviation changes the derivative and can also change a prior through its Jacobian. A declared optimisation parameterisation is part of a reproducible mathematical objective.

The gradient expression contains inverse matrices as identities; solving linear systems or using a factorization can evaluate the required actions. A stochastic trace approximation adds another source of optimisation noise, and an approximate covariance changes the objective. An exact symbolic gradient does not certify the numerical result of an unexecuted solver or an uncontrolled approximation.

## Worked example 1: a common covariance scale

**Example 9.3 (a common covariance scale).** Suppose $A=tC$ with t positive, fixed positive-definite shape C and fixed zero mean. Let $q=y^TC^{-1}y$. The scale-dependent objective is minus one half of $q/t+n\\log t$. If q is positive, its derivative changes from positive to negative at $\\widehat t=q/n$, giving the unique maximum.

If every response is zero, q is zero and the density increases without bound as t decreases to zero. The positive-scale family then has no finite maximum. A lower scale bound or proper prior changes that problem. This explicit case shows why a numerical parameter bound can determine a reported optimum rather than merely helping an otherwise interior maximization.

The model scales the entire observation covariance, including whichever signal and noise parts C contains. It is not the same derivation as changing only the latent amplitude while holding noise fixed. The roles of covariance components must be retained when borrowing a convenient closed-form update.

## Worked example 2: equal evidence can hide different latent uncertainty

**Example 9.4 (equal evidence can hide different latent uncertainty).** With one zero-mean observation, the marginal variance is the sum of latent variance tau squared and independent noise variance sigma squared. Every pair with the same positive sum gives exactly the same data density. Yet the latent posterior mean is tau squared divided by that sum times y, and its variance is their product divided by their sum.

For total variance two and observed response one, choosing latent and noise variances one and one gives posterior mean one half and variance one half. Choosing latent variance three halves and noise variance one half gives mean three quarters and variance three eighths. Their marginal likelihoods are identical. A fitted evidence value alone therefore cannot determine how uncertainty should be assigned to signal and measurement noise on this design.

This is structural nonidentification from the observation family, not an optimizer defect. A hyperprior can select among or average those possibilities, but then the conclusion depends on that prior. More observations at informative designs can provide additional distinctions; merely evaluating the same one-data density with higher precision cannot.

## Replicated inputs and the information a design supplies

For n independent noisy readings of one latent value, the covariance is $\\tau^2\\mathbf1\\mathbf1^T+\\sigma^2I$. In an orthonormal basis, the common-mean direction has variance sigma squared plus n tau squared, while every contrast direction has variance sigma squared. The log likelihood therefore separates the squared common coordinate and the sum of squared contrasts with their respective variance denominators and log determinants.

For at least two records the family of covariance matrices distinguishes tau squared from sigma squared. But statistical identifiability of the family is not the same as consistency in every growing-design regime. As n grows at just one latent location, the noise can be learned from many independent contrasts, while the common latent value remains only one draw from its prior distribution. That single draw does not provide an increasing number of independent realizations for learning the prior output variance.

With several separated locations or independent latent replicates, a different asymptotic information structure arises. Length-scale identification also depends on the domain and spacing. A sharply peaked objective in one finite parameterisation is not a substitute for stating the design under which a population parameter claim is made.

## Hyperpriors and mixtures of conditional posteriors

For a finite hyperparameter grid, exact Bayes updating assigns weight proportional to prior weight times marginal likelihood. Conditional GP predictions are Gaussian, but integrating those grid weights produces a Gaussian mixture. For a scalar latent prediction, total expectation and variance give
$$
E[F_*\\mid D]=E_\\theta[m_\\theta(D)\\mid D],
$$
$$
\\operatorname{Var}(F_*\\mid D)=E_\\theta[v_\\theta(D)\\mid D]
+\\operatorname{Var}_\\theta(m_\\theta(D)\\mid D).
$$
The between-model term is nonnegative. A plug-in prediction at one selected parameter omits this averaging and variation, though its variance is not universally smaller than the mixture variance for every possible selected value. Compare the actual quantities rather than infer an ordering from the phrase parameter uncertainty alone.

For a continuous hyperprior, sums become integrals over its posterior. Normalization and integration can require another numerical inference method. A proper prior and finite positive evidence are needed for ordinary model probabilities. An improper prior with an unspecified multiplicative constant cannot be used for a uniquely defined Bayes factor without resolving that constant through a justified model.

## Worked example 3: a bimodal predictive mixture

**Example 9.5 (a bimodal predictive mixture).** Suppose two hypermodels have equal posterior weight, identical observed-data evidence, and test predictive laws $N(-1,.1)$ and $N(1,.1)$. They can agree at all training inputs while their mean assumptions differ at the test input. The mixture mean is zero, but its variance is 1.1: the average within-model variance .1 plus the variance one of the two means.

Choosing either model gives a much narrower conditional prediction centred on one side. Replacing the mixture by a single Gaussian with mean zero and variance 1.1 matches two moments but does not reproduce its two modes or all event probabilities. The integration step, a plug-in choice and a Gaussian moment summary are three different predictive objects.

Model weights can also change strongly with prior odds. Equal evidence leaves posterior odds equal to prior odds, rather than forcing equal weights. A scientific interpretation should state whether model uncertainty was integrated, selected or only examined through a few sensitivity alternatives.

## An exact common-scale integration and Student prediction

There is a useful conjugate case. Let the entire joint covariance of observations and a test value share a positive scale t, and put an inverse-Gamma prior with shape a and rate-like scale b, density proportional to $t^{-a-1}e^{-b/t}$. The fixed-shape Gaussian likelihood contributes $t^{-n/2}e^{-q/(2t)}$, so the posterior is inverse-Gamma with shape $a+n/2$ and scale $b+q/2$.

Conditional on t, the test law has a mean m independent of t and variance t times a known nonnegative conditional factor v. For positive v, integrate its normal density against the inverse-Gamma density. Substituting the reciprocal scale into the Gamma integral gives a Student law with degrees of freedom twice the updated shape and scale squared equal to updated scale times v divided by updated shape. Its variance, when the updated shape exceeds one, is updated scale times v divided by updated shape minus one.

This is an exact non-Gaussian predictive distribution, not an approximate GP with an averaged covariance. Its conditional mean exists under the corresponding moment conditions. If v is zero, the test value is instead a point mass at m and the density calculation is replaced by that degenerate law. The derivation scales signal and observation noise together; it does not claim inverse-Gamma conjugacy for an arbitrary independently varied kernel amplitude and noise variance.

## Cross-validation estimates another predictive target

Let a learning rule fit a predictor to n minus one iid records, with its sum-loss penalty and preprocessing procedure declared. Leave-one-out loss averages the held-out loss for each record. By exchangeability, each summand has the expected risk of that learning rule trained on an independent sample of size n minus one and evaluated on a fresh record. Averaging preserves that expectation.

This proves an expectation identity for a fixed rule. It does not make the result an unbiased estimate of every aspect of the final n-record fit, and choosing the rule by minimizing many such estimates introduces selection. A nested or independently evaluated procedure answers another question. The exact KRR deletion formula in Chapter 4 applies only when its fixed-matrix and penalty conventions match those deleted fits.

Marginal likelihood instead scores the observed data density after integrating a model prior. It can reward a model whose prior places mass around the observed joint structure, while cross-validation scores a specified predictive loss and training size. They need not select the same hyperparameters. Neither is a universal proof of mechanistic truth or deployment calibration.

For time-dependent records, ordinary iid exchangeability is false. Predicting a future segment from a past segment has a different conditioning structure from withholding one point while retaining later observations. The [Time Series](../time-series.md) course develops temporal targets; its readiness is separate from this static regression calculation. The resampling or forecasting design is part of the statistical question, not an interchangeable software option.

## Mean choices, priors and model comparison

A zero mean is a modelling choice that can dominate extrapolation when cross-covariances vanish. Adding an estimated mean basis can change covariance learning, since trends and long length scales can compete to explain the same observations. Integrating uncertain mean coefficients differs from optimising them and treating them as known. Each procedure has a likelihood or prior interpretation that should be written before comparing results.

Bayes factors compare specified normalised probability models. Searching many kernels and reporting only the winning plug-in evidence can hide the search space; integrating a declared model prior is another operation. A lower bound or Laplace approximation to evidence adds approximation error that can differ across candidates. A larger approximate value does not by itself establish larger exact evidence, as the PGM capstone demonstrates.

Sensitivity analysis can deliberately vary mean, covariance, noise, hyperprior and design assumptions and compare the resulting target predictions. It need not assign a single probability to every alternative, but its scope should be explicit. A stable conclusion across the examined alternatives does not claim robustness to every omitted mechanism.

## Boundaries of the hyperparameter calculation

An optimizer may stop at a parameter-domain boundary, a local mode, or a nearly flat ridge. The reported objective, parameter constraints, and conditional prediction should distinguish these possibilities. A solver convergence message does not establish identifiability or a global maximum. A fine grid avoids some local-search issues but still restricts the candidate family and can omit relevant scales.

The next chapter studies how matrix conditioning and finite-precision perturbations affect means, variances and evidence. That numerical layer is separate from the statistical choice to fit or integrate hyperparameters. Both matter: an exact formula for a poorly chosen family is not model adequacy, and a good family evaluated unstably need not yield a reliable numerical prediction.

## Exercises

<a id="hyperparameters-marginal-likelihood-ex-1"></a>

### Exercise 1

Derive the inverse differential used in the evidence gradient.

<details><summary>Hint 1</summary>

Differentiate $AA^{-1}=I$.

</details>

<details><summary>Hint 2</summary>

Multiply by the inverse on the appropriate side.

</details>

<details><summary>Full solution</summary>

The product derivative is dA times A inverse plus A times dA inverse equal to zero. Left multiplication by A inverse gives dA inverse equal to minus A inverse times dA times A inverse. This identity requires invertible A throughout the differentiable neighborhood. It then produces the covariance quadratic term in the likelihood derivative.

</details>

<a id="hyperparameters-marginal-likelihood-ex-2"></a>

### Exercise 2

Why does the mean derivative enter with a positive alpha inner product?

<details><summary>Hint 1</summary>

The centred response changes by minus dm.

</details>

<details><summary>Hint 2</summary>

Differentiate its quadratic loss.

</details>

<details><summary>Full solution</summary>

The two symmetric residual derivatives give minus twice dm transpose A inverse r inside the quadratic. Multiplying by the likelihood factor minus one half makes the contribution positive dm transpose alpha. Ignoring this term when the mean depends on the same parameter gives an incomplete gradient.

</details>

<a id="hyperparameters-marginal-likelihood-ex-3"></a>

### Exercise 3

Find the common-scale MLE when q is positive.

<details><summary>Hint 1</summary>

Differentiate minus one half of q over t plus n log t.

</details>

<details><summary>Hint 2</summary>

Check the derivative sign on each side.

</details>

<details><summary>Full solution</summary>

The derivative is $(q-nt)/(2t^2)$. It is positive below q divided by n and negative above, so that value is the unique maximum. If q is zero, the likelihood instead diverges as t approaches zero and there is no finite positive-scale maximiser. The model must scale the full stated covariance for this formula to apply.

</details>

<a id="hyperparameters-marginal-likelihood-ex-4"></a>

### Exercise 4

Compare the two one-observation latent posteriors with total variance two.

<details><summary>Hint 1</summary>

Use latent variance divided by total for the mean coefficient.

</details>

<details><summary>Hint 2</summary>

Use the variance product divided by total.

</details>

<details><summary>Full solution</summary>

Latent and noise variances one and one give mean one half and variance one half at response one. Variances three halves and one half give mean three quarters and variance three eighths. The observation law has variance two in both cases and therefore equal evidence. Signal-noise decomposition is unidentified on this design despite different conditional predictions.

</details>

<a id="hyperparameters-marginal-likelihood-ex-5"></a>

### Exercise 5

Why do repeated readings not automatically give many independent draws for learning latent output variance?

<details><summary>Hint 1</summary>

They share one underlying function value.

</details>

<details><summary>Hint 2</summary>

Only the measurement noises are independently replicated.

</details>

<details><summary>Full solution</summary>

Contrasts provide many independent noise directions, but the common latent component remains one random draw no matter how precisely repeated measurements reveal it. Learning its population prior variance needs information beyond one shared realization or additional assumptions. Identifiability of the finite covariance family does not itself prove consistency in this particular growing-replication regime.

</details>

<a id="hyperparameters-marginal-likelihood-ex-6"></a>

### Exercise 6

Compute the variance of the equal-weight predictive mixture.

<details><summary>Hint 1</summary>

Add average component variance and variance of component means.

</details>

<details><summary>Hint 2</summary>

The means are minus one and plus one.

</details>

<details><summary>Full solution</summary>

The average within variance is .1. The mixture mean is zero and the two component means have variance one, so the total is 1.1. A plug-in component variance .1 excludes this between-model variation. A Gaussian matching mean zero and variance 1.1 still differs from the two-component mixture in shape and other probabilities.

</details>

<a id="hyperparameters-marginal-likelihood-ex-7"></a>

### Exercise 7

Derive the inverse-Gamma posterior scale and shape.

<details><summary>Hint 1</summary>

Multiply its density by the common-scale Gaussian likelihood.

</details>

<details><summary>Hint 2</summary>

Collect powers of t and the reciprocal-t exponential.

</details>

<details><summary>Full solution</summary>

The prior power is minus a minus one and the likelihood adds minus n over two, giving updated shape a plus n over two. Their reciprocal-scale exponents add b and q over two. Thus the posterior scale is b plus q over two. This conjugacy assumes one common multiplier of the entire declared covariance, not arbitrary separate scale components.

</details>

<a id="hyperparameters-marginal-likelihood-ex-8"></a>

### Exercise 8

What predictive risk expectation does fixed-rule leave-one-out estimate under iid sampling?

<details><summary>Hint 1</summary>

Use exchangeability of each deleted sample.

</details>

<details><summary>Hint 2</summary>

The held-out observation is independent of its remaining training sample.

</details>

<details><summary>Full solution</summary>

Each term has the expected loss of the declared learning rule trained on n minus one iid records and evaluated on an independent new record. Their average has that same expectation. It is not automatically the exact risk of the final n-record fit, and selecting among many rules using the estimate adds another layer of selection.

</details>

<a id="hyperparameters-marginal-likelihood-ex-9"></a>

### Exercise 9

Why is an improper prior problematic for an ordinary Bayes factor?

<details><summary>Hint 1</summary>

Its arbitrary multiplicative constant enters evidence.

</details>

<details><summary>Hint 2</summary>

Different models need not share a canceling constant.

</details>

<details><summary>Full solution</summary>

An unnormalized improper prior can be multiplied by any positive constant without changing some within-model posterior expressions, but that constant multiplies its marginal evidence. Model evidence ratios then become arbitrary unless a separate justified construction resolves the normalisation. A proper normalised model prior avoids that ambiguity in the ordinary calculation.

</details>

<a id="hyperparameters-marginal-likelihood-ex-10"></a>

### Exercise 10

Does the evidence gradient prove the objective is concave in length scale?

<details><summary>Hint 1</summary>

It is a derivative identity for a nonlinear covariance family.

</details>

<details><summary>Hint 2</summary>

Inspect the parameterisation separately.

</details>

<details><summary>Full solution</summary>

No. The formula gives correct local derivatives wherever the positive-definite covariance and mean are differentiable. Nonlinear dependence on length scale can yield flat regions and multiple extrema. A global concavity or identifiability theorem would require additional assumptions and proof. Finding a zero gradient is therefore not by itself a global model-selection certificate.

</details>
`;export{e as default};