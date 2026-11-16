
# Learning Parameters with a Fixed Graph

## Specify the sampling model as well as the graph

A graph fixes a factorization family, not its numerical parameters. Parameter learning requires a dataset model: here the main finite-table derivations use independent identically distributed complete configurations from a fixed DAG model. Repeated readings of one latent object or a dependent time series need another likelihood. The HMM chapter and EM chapter supply their own expected-count structures rather than treating those records as independent complete configurations.

This expands the parameter-estimation part of the retained [Learning Graph Structure and Parameters](../structured-probabilistic-learning/learning-graph-structure-and-parameters.md). The original count formula, Gaussian regression connection and examples remain there. This chapter proves the estimators, their identification conditions and conjugate updates, then contrasts directed local normalisation with undirected moment matching.

For each vertex j, parent configuration u and node value a, let N j u a count records with that joint configuration, and let N j u be its sum over a. The complete-data log likelihood decomposes as
$$
\ell(\theta)=\sum_j\sum_u\sum_aN_{jua}\log\theta_{jua},\qquad
\sum_a\theta_{jua}=1.
$$
This separation follows by taking logs of the product over both records and DAG factors. It gives independent optimisation blocks only when each table row has its own free parameters. Shared logistic coefficients, tied transition rows or common variance constraints can couple those terms and require a different maximization.

## A full row maximum-likelihood argument

**Proposition 12.1 (Finite conditional-row likelihood maximum).** Fix a row with positive observed count N and let r be its empirical proportions. Its log likelihood equals a constant minus $N D(r\|\theta)$. The divergence is nonnegative and uniquely zero when theta equals r, so the row maximum is its observed relative-frequency vector. Entries with zero counts are zero in the unrestricted maximum whenever other entries have positive counts. The convention zero times log zero permits that boundary solution.

If the parent-row count is zero, every count in it is zero and its contribution is identically zero for every normalised row. Thus the row is not identified by this dataset's unrestricted likelihood. Assigning it uniform probabilities is a convention, not a maximum-likelihood discovery. A prior or a shared parametric model can give a substantive rule for prediction there, but that changes the estimation assumptions.

The population version is similarly explicit. The expected row log likelihood is weighted by its true parent probability. If that probability is positive, it is maximized at the true conditional row within an unrestricted correctly specified family. If it is zero, changing that row cannot change the observed joint law. Parameter identification and finite-sample absence are related but distinct: a positive-probability row may simply not occur in a particular small dataset.

For iid observations the empirical joint and parent frequencies converge almost surely to their probabilities by the strong law for indicators. Dividing gives consistent row estimates whenever the parent probability is positive. This proves a basic consistency statement with a fixed graph and fixed finite cardinalities. It is not a uniform guarantee when the number of rows grows, parent probabilities vanish with sample size, or the graph is selected from the same data.

## Worked example 1: counts and a missing parent row

**Example 12.2 (counts and a missing parent row).** Let a categorical parent U have three possible recorded categories, and a binary child A. Suppose the success/failure counts in the first two categories are $(3,1)$ and $(1,3)$, while the third category is unobserved. The fitted success probabilities in the observed rows are three quarters and one quarter. The third row can take any probability without changing the maximum likelihood.

With an independent uniform Beta prior on each success probability, the posterior rows instead have Beta parameters $(4,2)$, $(2,4)$ and $(1,1)$. Their posterior means are two thirds, one third and one half. These are posterior predictive probabilities, not the unrestricted maximum-likelihood row estimates. The unobserved row retains its prior exactly because the data supply no likelihood contribution there.

The first posterior row has parameter variance two sixty-thirds. Its predictive binary variance is two ninths, which includes both the average conditional Bernoulli variance and uncertainty in the row probability by total variance. Thus a distribution over a parameter and a distribution for a future observation are different objects even when their means agree. Merging categories or imposing a logistic trend would instead share parameters and change this independent-row calculation.

## Dirichlet conjugacy and the integrated likelihood

Put independent Dirichlet priors on the table rows, with strictly positive concentration parameters alpha. The row density on its probability simplex is proportional to the product of its entries to powers alpha minus one. Its normalising constant is
$$
B(\alpha)=\frac{\prod_a\Gamma(\alpha_a)}{\Gamma(\sum_a\alpha_a)}.
$$
The identity follows by writing a product of positive Gamma integrals, changing variables from their independent positive coordinates to their sum and normalised proportions, and integrating the sum coordinate. The Jacobian contributes its dimension-minus-one power, leaving the displayed simplex integral.

Multiplying a row prior by its likelihood adds counts to the exponents. Therefore the posterior row is Dirichlet with parameters alpha plus N. Since both prior and likelihood factor across rows, their posterior also factors across rows for complete observed data with independent row priors. Latent or missing values generally destroy this simple product until conditioned on or integrated with a separate inference method.

The posterior mean of a row entry is its updated concentration divided by the row concentration sum, obtainable by the ratio of two Beta normalizers. A posterior predictive next-node probability uses that mean. A posterior mode has alpha plus count minus one in its numerator only when the interior-mode assumptions hold; it is not the same formula. Marginal credible intervals and frequentist coverage are different uncertainty statements.

Integrating a row gives $B(\alpha+N)/B(\alpha)$. Multiplying these ratios yields the complete ordered-data marginal likelihood for a fixed discrete DAG under the chosen independent priors. Do not multiply an extra multinomial coefficient for each row: the likelihood of the actual ordered complete records already led to the count-power expression. A likelihood for an explicitly aggregated count observation has its own combinatorial factor. Keeping that observation convention straight will matter for graph scores in the next chapter.

## Gaussian DAG parameters are local regressions

For a Gaussian DAG, each node conditional is a linear regression on its parents with an independent centred Gaussian residual of positive variance. Acyclicity and independent noises make these conditionals multiply to a valid joint Gaussian law. With complete iid observations and separate node parameters, their log likelihoods maximize separately.

For one node, let the design include its declared intercept and parent columns. At positive residual variance, maximizing over regression coefficients minimizes squared residuals. If the design has full column rank, the least-squares coefficient is unique and solves the normal equations. The residual-variance maximum is its squared-error sum divided by sample size, provided that sum is positive. If the design is rank deficient, coefficient vectors can be nonunique even when their fitted values are identified.

A zero residual sum is another boundary: the Gaussian likelihood increases without bound as residual variance decreases toward zero. Full column rank alone does not prevent this, for instance in an exactly interpolating design. A positive-variance lower bound, prior or other restriction changes the problem. An ordinary inverse formula with a variance estimate zero is not a nonsingular Gaussian maximum-likelihood fit.

## Worked example 2: a local regression and its likelihood variance

**Example 12.3 (a local regression and its likelihood variance).** Take a scalar parent with values minus one, zero and one, and child values zero, one and one. Include an intercept. The fitted intercept is two thirds and slope one half. The residuals are minus one sixth, one third and minus one sixth, with squared sum one sixth. The Gaussian maximum-likelihood residual variance is therefore one eighteenth.

Dividing by one residual degree of freedom would instead give one sixth, the conventional unbiased variance estimate for this fixed full-rank two-parameter regression with three observations. It is a different estimator. Both formulas can have legitimate uses, but substituting the unbiased correction into a likelihood derivation is not the MLE. In a DAG each local regression carries its own parent design and residual assumptions.

## Undirected exponential-family learning needs global expectations

For a finite fixed-support exponential family, write $p_\theta(x)=\exp\{\theta^TT(x)-A(\theta)\}$. With iid records its log likelihood per observation is $\theta^T\overline T-A(\theta)$. Differentiating gives score equal to empirical statistics minus model expectations, and Hessian equal to minus the model statistic covariance. Thus likelihood is concave and a finite interior maximizer satisfies moment matching.

Suppose the statistic points affinely span the full parameter dimension, so no nonzero linear statistic combination is constant on the support. The covariance is then positive definite at every finite parameter, giving strict concavity and at most one maximizer. If the empirical statistic vector lies in the ordinary interior of their convex hull, a finite maximizer exists. Here is the finite proof rather than an appeal to a vague regularity condition.

An interior ball of radius delta around that empirical vector lies within the convex hull. For every unit direction v, some support point has projection at least delta above the empirical vector. The log partition is at least the projection at that support point. Therefore the likelihood per observation at theta is at most minus delta times its norm. It tends to minus infinity in every unbounded direction, so a maximum lies in a compact parameter ball and exists by continuity. Strict concavity makes it unique, and differentiability gives the moment equation.

If the empirical statistic is on an exposed boundary face, choose an exposing direction whose projection is maximal on that face and smaller somewhere else. Moving the parameter in that direction increases the likelihood as probability concentrates on the face. Its derivative is the empirical maximal projection minus the strictly smaller finite-parameter expectation, hence positive. No finite maximizer exists. This is another concrete way a perfectly finite dataset can produce a boundary likelihood problem.

## Worked example 3: learning one Ising coupling

**Example 12.4 (learning one Ising coupling).** For two signs with no field, the sufficient statistic is their product and the partition function is four cosh J. Let the empirical product mean be r. The score equation is $r=\tanh J$, so a finite maximum exists exactly when absolute r is less than one, with estimate one half log $(1+r)/(1-r)$.

If r is three fifths, the estimate is log two. The resulting probability of each aligned configuration is two fifths and of each misaligned configuration one tenth, giving product mean three fifths as required. If every observed pair is aligned, r equals one and the likelihood rises toward its supremum as J tends to infinity. A finite optimizer return in that case is a numerical stopping point on an unbounded parameter path, not the unconstrained MLE.

## Prediction, held-out data and the chosen objective

A fitted joint distribution can be assessed on independent held-out complete observations using log probability. If the true distribution is r and the candidate is p, expected excess log loss is $D(r\|p)$. For a conditional task, average the row divergences with the true parent distribution. This weights poorly fitted common configurations differently from rare ones; reporting only an unweighted average across rows changes the target.

Held-out evaluation addresses predictive performance for the sampling regime it represents. It does not by itself prove every graphical independence or a causal interpretation. Dependence between training and evaluation records, adaptive reuse of the holdout, or an observation-process shift changes that interpretation. Those issues remain even if every local estimator has a closed-form update.

Sharing parameters can improve estimation of sparse rows but imposes a restricted model. Logistic conditional models connect to the [GLM course](#/books/regression-and-generalised-linear-models), while hierarchical priors share information probabilistically. Penalizing an undirected precision or interaction parameter changes its optimisation target and uncertainty calculation. Write that target explicitly rather than labelling every regularized output an unrestricted likelihood estimate.

Finally, uncertainty conditional on a fixed graph differs from uncertainty after selecting the graph. The formulas here treat the graph and cardinalities as declared. The next chapter studies how observational independences and integrated scores can compare structures, including the conditions under which some arrows remain unidentified.

## Exercises

<a id="learning-parameters-ex-1"></a>

### Exercise 1

Prove the relative-frequency row MLE using divergence.

<details><summary>Hint 1</summary>

Normalize the positive row counts to r.

</details>

<details><summary>Hint 2</summary>

Compare its log likelihood with that at an arbitrary row.

</details>

<details><summary>Full solution</summary>

The log likelihood difference between the empirical row and a candidate is the row count times divergence from the empirical proportions to the candidate. Nonnegativity makes the empirical row a maximizer, uniquely when that count is positive. Candidate zeros at positive-count cells give minus-infinite likelihood. Empty rows have no such divergence comparison because their entire likelihood contribution is constant.

</details>

<a id="learning-parameters-ex-2"></a>

### Exercise 2

What does the unrestricted likelihood say about an unobserved parent row?

<details><summary>Hint 1</summary>

Every count in that row is zero.

</details>

<details><summary>Hint 2</summary>

Its log likelihood contribution is zero at every normalised row.

</details>

<details><summary>Full solution</summary>

It provides no identification of that row from this dataset. Uniform assignment, borrowing another row or adding pseudocounts are additional conventions or models. An independent row prior remains unchanged there. This finite-sample absence does not prove the parent configuration has zero population probability.

</details>

<a id="learning-parameters-ex-3"></a>

### Exercise 3

Compute the posterior mean for a binary row with counts three successes and one failure under a uniform Beta prior.

<details><summary>Hint 1</summary>

Add counts to the two prior parameters.

</details>

<details><summary>Hint 2</summary>

Divide the updated success parameter by their sum.

</details>

<details><summary>Full solution</summary>

The posterior parameters are four and two. Its mean success probability is four sixths, or two thirds. The unrestricted row MLE is three quarters, so the two procedures differ. The posterior predictive probability for a next child in that row equals the posterior mean under the declared independent-row model.

</details>

<a id="learning-parameters-ex-4"></a>

### Exercise 4

Why does the complete-data posterior factor across independent Dirichlet rows?

<details><summary>Hint 1</summary>

Both prior and likelihood are row products.

</details>

<details><summary>Hint 2</summary>

Normalization separates finite-dimensional integrals.

</details>

<details><summary>Full solution</summary>

Multiplying them produces a product of functions, each depending on only one table row. Their normalising integral factors, leaving independent Dirichlet rows with counts added to their parameters. This uses complete observations and distinct free row parameters. Missing latent assignments or shared parameters generally couple the terms and need another argument.

</details>

<a id="learning-parameters-ex-5"></a>

### Exercise 5

Why is there no extra multinomial coefficient in the ordered-data row evidence formula?

<details><summary>Hint 1</summary>

Identify what was observed.

</details>

<details><summary>Hint 2</summary>

Count aggregation is a different observation map.

</details>

<details><summary>Full solution</summary>

The likelihood of the observed ordered configurations is already a product of their joint probabilities, which becomes count powers after collecting equal factors. No permutations were summed over. A multinomial coefficient appears if the observed object is an aggregated count vector and all compatible sequences are combined. Multiplying one into each row of the ordered likelihood would describe a different quantity.

</details>

<a id="learning-parameters-ex-6"></a>

### Exercise 6

In the regression example, recover the MLE residual variance.

<details><summary>Hint 1</summary>

Square the three residuals.

</details>

<details><summary>Hint 2</summary>

Divide their sum by the number of observations.

</details>

<details><summary>Full solution</summary>

The squared residuals sum to one thirty-sixth plus one ninth plus one thirty-sixth, equal to one sixth. Dividing by three observations gives one eighteenth. The degrees-of-freedom correction gives another estimator and is not the maximum of the Gaussian likelihood. The positive residual sum ensures the positive-variance maximum exists here.

</details>

<a id="learning-parameters-ex-7"></a>

### Exercise 7

Why is full column rank insufficient to guarantee a finite Gaussian regression likelihood maximum?

<details><summary>Hint 1</summary>

Consider exact interpolation.

</details>

<details><summary>Hint 2</summary>

The residual sum can still vanish.

</details>

<details><summary>Full solution</summary>

Full rank makes the coefficient minimizer unique, but a design can interpolate the outcomes exactly, especially with as many fitted coefficients as observations. Then the residual sum is zero and the likelihood diverges as variance approaches zero. A nonsingular finite likelihood maximum additionally needs positive residual error or a separate variance-domain restriction.

</details>

<a id="learning-parameters-ex-8"></a>

### Exercise 8

Derive the Ising-coupling estimate when empirical product mean is three fifths.

<details><summary>Hint 1</summary>

Solve tanh J equal to the empirical mean.

</details>

<details><summary>Hint 2</summary>

Use the inverse hyperbolic-tangent formula.

</details>

<details><summary>Full solution</summary>

The estimate is one half log of one plus three fifths divided by one minus three fifths, which is one half log four, or log two. Its aligned and misaligned configuration probabilities are .4 and .1 per configuration. Their weighted product mean is .8 minus .2, equal to the empirical .6.

</details>

<a id="learning-parameters-ex-9"></a>

### Exercise 9

Why does an empirical statistic on an exposed support face prevent a finite unrestricted exponential-family maximizer?

<details><summary>Hint 1</summary>

Move the parameter in the exposing direction.

</details>

<details><summary>Hint 2</summary>

The finite-parameter expectation remains below its maximum.

</details>

<details><summary>Full solution</summary>

The empirical projection equals its support maximum, while every finite parameter assigns positive mass to points outside the face with smaller projection. Thus the directional score is strictly positive at every finite parameter. Moving farther in that direction always improves likelihood, approaching a face-supported limit rather than attaining a finite maximum.

</details>

<a id="learning-parameters-ex-10"></a>

### Exercise 10

Does fixed-graph parameter uncertainty automatically include graph-selection uncertainty?

<details><summary>Hint 1</summary>

The graph was treated as declared in every formula.

</details>

<details><summary>Hint 2</summary>

A selected graph is a data-dependent object.

</details>

<details><summary>Full solution</summary>

No. The row posterior or likelihood calculation conditions on a particular graph family. Selecting that graph from the same records introduces another source of uncertainty and can change the distribution of reported intervals or scores. It requires an explicit model-averaging, selection-aware or independent-data argument rather than a silent reuse of fixed-graph guarantees.

</details>
