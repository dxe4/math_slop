var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: gp-classification-laplace
title: "GP Classification and the Laplace Approximation"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# GP Classification and the Laplace Approximation

## A non-Gaussian likelihood changes posterior closure

For binary observations, a Gaussian latent score can be combined with a Bernoulli link. Conditional on latent values f, labels are independent with success probabilities sigmoid of f. The prior remains a Gaussian process, but multiplying its finite density by Bernoulli likelihoods generally yields a non-Gaussian posterior. Exact regression conditioning formulas no longer apply simply by replacing the observations with zeros and ones.

Assume a zero-mean latent training vector with positive-definite Gram matrix K. Labels are y i in zero or one, and $\\sigma(t)=1/(1+e^{-t})$. The log posterior, up to its normalizer, is
$$
\\Psi(f)=\\sum_i\\{y_if_i-\\log(1+e^{f_i})\\}-\\frac12 f^TK^{-1}f.
$$
This is a probability model distinct from the SVM hinge objective. Its score is latent, while the sigmoid gives a conditional observation probability. Hyperparameters are fixed throughout the mode and Laplace derivations; integrating or fitting them adds another inferential layer.

The positive-definite assumption permits an ordinary training-vector density. A finite-rank or repeated-input kernel instead needs a reduced nonsingular latent representation. For example several labels at one input share one latent score. Adding arbitrary diagonal jitter just to pretend those scores are distinct changes the model rather than deriving its singular likelihood correctly.

## Existence, uniqueness and derivatives of the mode

**Theorem 8.1 (Unique logistic posterior mode).** For the stated finite logistic likelihood and positive-definite Gaussian latent prior, the log posterior is strictly concave and has one finite mode. Put pi i equal to sigmoid f i and W equal to the diagonal matrix with entries pi i times one minus pi i. Direct differentiation gives
$$
\\nabla\\Psi=y-\\pi-K^{-1}f,\\qquad
-\\nabla^2\\Psi=K^{-1}+W.
$$
The negative Hessian is positive definite because K inverse is. Hence the log posterior is strictly concave. Its likelihood part is nonpositive, while its Gaussian quadratic tends to minus infinity as the norm of f grows. It therefore attains a unique finite mode. Every mode satisfies the score equation, and strict concavity makes that equation sufficient as well as necessary.

The posterior is proper because its Bernoulli likelihood lies between zero and one and the Gaussian prior is proper; its evidence is positive. Posterior existence is distinct from mode existence, although both hold here. A different likelihood or an improper prior would need another argument rather than inheriting these conclusions from the word Gaussian.

Newton's ascent direction solves $(K^{-1}+W)\\delta=\\nabla\\Psi$. Its inner product with the gradient is strictly positive away from the mode, so sufficiently small positive steps improve the objective. A full Newton step need not improve a general smooth concave objective from every starting point. A backtracking line search can enforce an actual sufficient increase while avoiding an unsupported claim that every unit step is safe.

For this fixed finite problem, bounded upper-level sets and uniform positive curvature allow a standard global argument for damped Newton. On the compact level set, gradient and Hessian are bounded and the gradient is Lipschitz. Backtracking then accepts steps bounded below by a positive constant, while each accepted improvement bounds a positive constant times squared gradient norm. Bounded total objective increase forces the gradient to zero. Every cluster point is the unique mode, so the iterates converge. This concerns exact arithmetic and exact objective evaluations in this declared problem.

## Laplace approximates the posterior near that mode

**Definition 8.2 (Laplace posterior approximation).** Expand the log posterior to second order at its mode f hat. The gradient term vanishes and the quadratic curvature is $A=K^{-1}+\\widehat W$. The Laplace approximation is
$$
q(f)=N(\\widehat f,A^{-1}).
$$
This is a local Gaussian approximation to a generally skewed or otherwise non-Gaussian posterior. Strict log concavity gives a single mode; it does not make the posterior exactly Gaussian or bound the approximation error by the optimisation error. Solving the mode equation precisely only addresses the center and curvature used in q.

Integrating the local quadratic approximation, including the Gaussian prior normalizer, gives
$$
\\log p(y)\\approx\\log p(y\\mid\\widehat f)-\\tfrac12\\widehat f^TK^{-1}\\widehat f
-\\tfrac12\\log\\det(I+K\\widehat W).
$$
The determinant term can be evaluated through the symmetric positive-definite matrix $I+\\widehat W^{1/2}K\\widehat W^{1/2}$, which has the same determinant. This avoids treating a nonsymmetric product as though it were a covariance matrix. Both are mathematical determinant identities; finite-precision implementations still need stable factorizations.

A Taylor formula alone provides no universal small-error theorem for this evidence. A rigorous asymptotic Laplace approximation needs a specified concentration regime, tail control and smoothness conditions. The number of latent training coordinates also grows with sample size in many GP problems, so a fixed-dimensional theorem cannot be quoted without checking its scope. Here the expression is explicitly an approximation, not an exact lower bound or an automatically unbiased evidence estimate.

## Worked example 1: one label with symmetric prior evidence

**Example 8.3 (one label with symmetric prior evidence).** Let one latent value have unit normal prior and observe a single success. The mode equation is $f=1-\\sigma(f)$. Its left-minus-right difference is strictly increasing, negative at zero and positive at one half, so the unique mode lies strictly between them. Its local approximate variance is $1/[1+\\sigma(\\widehat f)(1-\\sigma(\\widehat f))]$, between four fifths and one.

The exact evidence, however, is one half: symmetry gives $E\\sigma(F)=E[1-\\sigma(F)]$ under a centred Gaussian prior. This holds at any positive prior variance. The exact posterior is a tilted Gaussian density proportional to sigmoid times the prior, not the Gaussian q determined solely by its mode and Hessian. The symmetry identity provides an exact evidence reference that does not require executing a numerical integrator.

The posterior mean is not asserted equal to the mode. For a unit normal prior, integration by parts gives $E[F\\sigma(F)]=E[\\sigma'(F)]$, and dividing by evidence one half gives the exact posterior mean as twice that positive expectation. This integral expression describes a different functional from the root defining the mode.

## Propagating the approximate latent posterior to a new input

For a latent test value, the prior conditional law given the training latent vector is Gaussian, with mean $k_*^TK^{-1}f$ and residual variance $k_{**}-k_*^TK^{-1}k_*$. Integrating that conditional kernel against q gives an approximate predictive Gaussian with
$$
\\mu_*=k_*^TK^{-1}\\widehat f,
$$
$$
v_*=k_{**}-k_*^TK^{-1}k_*+
 k_*^TK^{-1}A^{-1}K^{-1}k_*.
$$
The last term restores uncertainty about the training latent vector under q. Treating its mode as an exact observation would omit that term and overcondition the prediction. The displayed law is exact for this approximate q propagation, but remains an approximation to the true non-Gaussian-posterior prediction.

Its success probability is the logistic-normal integral $\\int\\sigma(z)N(z;\\mu_*,v_*)\\,dz$, generally without an elementary closed form. Applying sigmoid only to the predictive mean is another approximation and can differ. Quadrature or an additional analytic approximation introduces its own error and should be identified separately from the original Laplace approximation.

For small v, Taylor expansion around mu gives expected sigmoid equal to sigmoid at mu plus one half v times its second derivative, with remainder of order v to the three-halves under a bounded third derivative. For positive mu that second derivative is negative, so locally averaging uncertainty reduces the probability relative to the plug-in value. This is a small-variance calculation, not a global Jensen statement: sigmoid is not globally convex or globally concave.

## Worked example 2: contradictory records at the same input

**Example 8.4 (contradictory records at the same input).** Observe one success and one failure at one input, sharing a single latent Gaussian score of variance tau squared. The likelihood is $\\sigma(f)(1-\\sigma(f))$, symmetric around zero. Its posterior mode is zero and its local precision is $\\tau^{-2}+1/2$. This is a one-dimensional latent problem; a two-coordinate density with identical noiseless latent values would be singular.

The exact evidence is below one quarter for every positive tau because the likelihood is at most one quarter, with strict inequality off zero, and the prior puts probability one on nonzero values. As tau tends to zero the evidence tends to one quarter; as tau tends to infinity it tends to zero, by bounded convergence after writing f as tau times a standard normal. The conflict informs the latent scale under this model, rather than forcing two different function values at the same input.

By posterior symmetry, a new conditionally independent label at that input still has success probability one half. Its latent-score uncertainty can change while this predictive mean remains fixed. Calibration of a probability prediction and concentration of a latent-score posterior are therefore different summaries.

## Worked example 3: a Gaussian prior regularizes a separated likelihood

**Example 8.5 (a Gaussian prior regularizes a separated likelihood).** Take a one-dimensional linear score w times a positive fixed input, with every observed label a success. Without a proper penalty or prior, the logistic likelihood increases toward its supremum as w tends to infinity and has no finite maximum. A positive-variance Gaussian prior subtracts a quadratic tail, making the posterior log density coercive and strictly concave, so it has one finite mode.

This proves a finite Bayesian mode exists in a situation where the unregularized likelihood maximum does not. It does not prove that the data identify a finite effect size by themselves. Changing the prior variance changes the finite mode and uncertainty. Reporting a well-behaved optimizer result without stating that prior would omit the mechanism preventing divergence.

The same distinction applies to a kernel score whose observed labels are separable in its feature space. A proper positive-definite latent prior yields the finite mode argument above; an unpenalized intercept or other improper direction would need a separate existence analysis rather than automatically inheriting it.

## Stable algebra and the scale of a prediction

In computation, evaluate the softplus term stably instead of directly exponentiating a very large positive score, and solve positive-definite systems rather than forming K inverse explicitly. The formulas with inverses describe exact identities. A whitening representation f equal to a square-root factor times a standard-normal coordinate can express the same mode problem without a prior inverse matrix.

A reported approximate covariance must remain associated with its Laplace Hessian. Adding a numerical diagonal term changes that curvature and can alter predictive variance. A likelihood approximation, an approximate linear solve and a changed kernel are different operations; their effects should not be hidden under one convergence tolerance.

For a new input with zero covariance to every training input under a zero-mean prior, q propagation leaves its latent law unchanged. Symmetry gives a success probability one half regardless of the observed label imbalance elsewhere. This is a consequence of the chosen independence structure, not a universal claim that a classifier should ignore global imbalance. An explicit mean or intercept prior would change the model.

## Comparing with other inference methods

Expectation propagation matches different local quantities from Laplace, variational methods optimize a restricted-family bound, and MCMC approximates integrals with draws from a designed chain. These methods do not become equivalent because each can report a Gaussian summary. The graphical-model chapters on [variational inference](../probabilistic-graphical-models/variational-inference-elbo.md) and [sampling](../probabilistic-graphical-models/sampling-in-graphical-models.md) establish their distinct targets and limits.

Classification decisions depend on costs as well as probabilities. Under equal error costs, a threshold one half is appropriate for the estimated class probability; asymmetric costs change the threshold. A latent score interval is not automatically an interval for a class probability or a frequentist performance measure. Model-conditional uncertainty and observed calibration require their own stated evaluation target.

The next chapter treats covariance and noise hyperparameters. In classification their objectives often depend on this approximate evidence, which introduces another distinction: optimising an approximate marginal likelihood does not certify optimisation of the exact evidence, and a narrow approximate posterior conditional on a fitted hyperparameter omits its remaining uncertainty.

## Exercises

<a id="gp-classification-laplace-ex-1"></a>

### Exercise 1

Prove strict concavity of the logistic latent log posterior.

<details><summary>Hint 1</summary>

Write its negative Hessian.

</details>

<details><summary>Hint 2</summary>

The prior precision is strictly positive definite.

</details>

<details><summary>Full solution</summary>

The likelihood contributes a nonnegative diagonal curvature W and the prior contributes K inverse. Their sum is positive definite, making the Hessian strictly negative in every nonzero direction. Thus there is at most one stationary mode. Coercivity from the Gaussian quadratic and bounded-above log likelihood separately proves that the finite maximum exists.

</details>

<a id="gp-classification-laplace-ex-2"></a>

### Exercise 2

Why is the posterior proper in this model?

<details><summary>Hint 1</summary>

The Bernoulli likelihood is bounded by one.

</details>

<details><summary>Hint 2</summary>

The prior is a normalised probability and the likelihood is positive.

</details>

<details><summary>Full solution</summary>

The evidence is at most one and positive because each finite Gaussian score gives a positive Bernoulli likelihood. Therefore normalising the likelihood times the proper Gaussian prior yields a probability. This argument does not apply unchanged to improper priors or arbitrary unbounded observation densities.

</details>

<a id="gp-classification-laplace-ex-3"></a>

### Exercise 3

Why should a full Newton step not be assumed globally increasing?

<details><summary>Hint 1</summary>

Its derivation uses a local quadratic model.

</details>

<details><summary>Hint 2</summary>

Positive directional derivative guarantees only sufficiently small steps.

</details>

<details><summary>Full solution</summary>

The Newton direction has positive gradient inner product away from the mode, so local smoothness ensures improvement for a small step. A unit step can move beyond the region where the quadratic is accurate. Backtracking can enforce actual sufficient increase. The finite exact-arithmetic convergence argument uses compactness and curvature in addition to simply computing a Newton direction.

</details>

<a id="gp-classification-laplace-ex-4"></a>

### Exercise 4

Compute the exact one-label evidence under a centred symmetric Gaussian score prior.

<details><summary>Hint 1</summary>

Use sigmoid at negative f equal to one minus sigmoid at f.

</details>

<details><summary>Hint 2</summary>

The prior law is unchanged by sign reversal.

</details>

<details><summary>Full solution</summary>

The expected sigmoid equals the expected one minus sigmoid, so twice its expectation is one. The success evidence is exactly one half, independent of the positive prior variance. This identity describes the exact integral and can differ from a local Gaussian evidence approximation.

</details>

<a id="gp-classification-laplace-ex-5"></a>

### Exercise 5

What is omitted by conditioning the test value on the latent mode as though it were observed exactly?

<details><summary>Hint 1</summary>

The training latent vector has posterior uncertainty.

</details>

<details><summary>Hint 2</summary>

Use total covariance under q.

</details>

<details><summary>Full solution</summary>

That shortcut keeps only the prior conditional residual variance and drops the variance of the conditional mean when f varies under q. The missing term is the cross vector times K inverse, A inverse and K inverse times its transpose. Integrating the conditional Gaussian against q restores it, though the result remains approximate relative to the true posterior.

</details>

<a id="gp-classification-laplace-ex-6"></a>

### Exercise 6

Why is sigmoid of the predictive mean not generally the predictive success probability?

<details><summary>Hint 1</summary>

The likelihood link is nonlinear.

</details>

<details><summary>Hint 2</summary>

The prediction averages it over latent uncertainty.

</details>

<details><summary>Full solution</summary>

The predictive probability is the expectation of sigmoid under the latent predictive law. A nonlinear function generally does not commute with expectation. Only special cases such as zero variance or a symmetry identity give equality automatically. Taylor expansion quantifies a small-variance correction, while numerical integration or another approximation needs its own error treatment.

</details>

<a id="gp-classification-laplace-ex-7"></a>

### Exercise 7

For one success and one failure at the same input, find the mode and Laplace precision.

<details><summary>Hint 1</summary>

The likelihood is symmetric in the shared score.

</details>

<details><summary>Hint 2</summary>

Each record contributes one quarter curvature at zero.

</details>

<details><summary>Full solution</summary>

Symmetry and strict concavity place the unique mode at zero. The prior precision is tau inverse squared, and the two Bernoulli records each contribute one quarter to negative curvature. Their sum gives $\\tau^{-2}+1/2$. The correct latent representation is one-dimensional because both records share the same function value.

</details>

<a id="gp-classification-laplace-ex-8"></a>

### Exercise 8

Why does a proper Gaussian prior prevent divergence under separated labels?

<details><summary>Hint 1</summary>

The likelihood log value is bounded above.

</details>

<details><summary>Hint 2</summary>

The prior quadratic tends to minus infinity.

</details>

<details><summary>Full solution</summary>

Even though the unregularized logistic likelihood can approach its supremum along an unbounded separating direction, the Gaussian quadratic dominates in that direction and drives log posterior to minus infinity. A maximum exists in a bounded region, and strict concavity makes it unique. Its finite value is partly prior-supported rather than identified by an unrestricted likelihood maximum.

</details>

<a id="gp-classification-laplace-ex-9"></a>

### Exercise 9

Does accurate mode optimisation remove the Laplace approximation error?

<details><summary>Hint 1</summary>

The approximation uses only local value and curvature.

</details>

<details><summary>Hint 2</summary>

The exact posterior can have nonquadratic shape.

</details>

<details><summary>Full solution</summary>

No. A precise mode ensures the intended expansion point is used, but third and higher log-density terms and tail mass can still affect moments and evidence. A rigorous approximation bound needs additional concentration and regularity information. Optimization error and posterior approximation error are different quantities even in a strictly log-concave model.

</details>

<a id="gp-classification-laplace-ex-10"></a>

### Exercise 10

Why must hyperparameter fitting based on Laplace evidence be described as approximate?

<details><summary>Hint 1</summary>

Its objective replaces an exact posterior integral.

</details>

<details><summary>Hint 2</summary>

An optimizer can solve the replacement without solving the original.

</details>

<details><summary>Full solution</summary>

The local Gaussian integral can differ from exact marginal evidence by a hyperparameter-dependent error. Maximizing it therefore need not maximize the true evidence. Exact optimisation of that approximate objective does not remove its gap or integrate hyperparameter uncertainty. The reported criterion and conditioning choices must be stated explicitly.

</details>
`;export{e as default};