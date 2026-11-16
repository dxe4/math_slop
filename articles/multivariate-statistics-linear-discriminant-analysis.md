
# Linear discriminant analysis

Linear discriminant analysis uses a labeled class to build a decision rule from feature vectors. Its line or hyperplane boundary follows from a specific probability model: class-conditional multivariate normal distributions with a **shared** positive-definite covariance. This L3 article derives the boundary, checks a two-dimensional example, and distinguishes the model score from a causal explanation of a class. Preparation is [the multivariate normal](multivariate-statistics-multivariate-normal.md) and [covariance geometry](multivariate-statistics-mean-vectors-covariance.md).

## From Bayes' rule to a linear score

Let class G take values 1,...,K with positive prior probabilities pi_k summing to one. Suppose X|G=k is N_d(mu_k,Sigma) with the same positive-definite Sigma in every class. Bayes' rule chooses the class maximizing pi_k times its class-conditional density under zero-one misclassification loss. Taking logs removes a common normalization and the common quadratic term -x^T Sigma^{-1}x/2. The remaining score is delta_k(x)=x^T Sigma^{-1}mu_k-(1/2)mu_k^T Sigma^{-1}mu_k+log pi_k. Choose a class with largest delta_k(x), specifying a tie rule if needed.

For two classes, delta_1(x)-delta_2(x) is affine in x. Its zero set is a hyperplane unless the class means are identical in the covariance metric. The vector Sigma^{-1}(mu_1-mu_2) is normal to that boundary. If the priors change, log(pi_1/pi_2) shifts the boundary even though the class-conditional distributions stay the same. If misclassification costs differ, the optimal threshold changes again; the zero-one rule is not universal.

**Worked example: one informative coordinate.** Let Sigma=I_2, mu_1=(0,0), mu_2=(2,0), and pi_1=pi_2=1/2. The common log-prior terms cancel. The class-one score beyond its common term is zero; the class-two score is 2x_1-2. Choose class two when 2x_1-2>0, meaning x_1>1, with a declared tie at x_1=1. The second coordinate does not affect the rule because its distribution is the same in both classes. The point (1.5,100) is assigned class two despite its large second coordinate; the model regards that coordinate as equally unusual under both classes.

To see covariance's effect, replace Sigma by diag(4,1) while leaving means unchanged. The class-two score becomes (2/4)x_1-(1/2)(4/4)=x_1/2-1/2, so the equal-prior boundary remains x_1=1, but confidence represented by posterior odds changes more slowly with x_1 because that coordinate is noisier. If the class means also differed in the second coordinate, covariance scaling would rotate the boundary. A classifier's hard label and its calibrated probability are different outputs.

The posterior odds in the original identity-covariance example can be read directly. Bayes' rule gives log[P(G=2|x)/P(G=1|x)]=2x_1-2 for equal priors. At x_1=1 it is zero, so posterior probabilities tie at one half; at x_1=2 it is two, so class two has posterior probability exp(2)/(1+exp(2)) under the model. This number is a model probability, not an observed frequency or a causal effect. If class prevalence in a deployment population differs from the training prior, the log-prior term must change even if class-conditional feature laws remain stable.

The shared-covariance assumption can be checked conceptually through the score algebra. If Sigma_1 differs from Sigma_2, each log density has its own x^T Sigma_k^{-1}x term and log determinant. Those terms do not cancel, so the Bayes boundary can curve. Calling a linear boundary Bayes-optimal in that setting would require a different reason. The common-covariance model is therefore part of the conclusion, not a cosmetic simplification made after fitting.

## Fitting and limits

In practice mu_k, Sigma and pi_k are estimated from training data. A pooled covariance estimate may be singular when there are too few observations relative to dimension, or unstable when classes have different spreads. Regularization changes the classifier and must be declared. Evaluating on the same observations used to choose features or a tuning parameter gives optimistic performance. Use held-out labels or a properly nested resampling procedure, including all preprocessing within each training split.

If class covariances differ, the common quadratic x term no longer cancels; the Gaussian Bayes score has class-specific quadratic forms and log determinants, giving quadratic discriminant analysis under positive-definite covariances. If the class-conditional laws are not Gaussian, LDA can still be used as a linear predictive rule, but its posterior probabilities and optimality claim need separate calibration evidence. An observed association between a feature and class does not imply changing that feature would change class membership.

The [Advanced Statistical Inference Gaussian chapter](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md) develops related geometry; this article keeps the classification decision and its exact hypotheses visible. PCA, by contrast, chooses directions of **unlabeled** variance and can discard a low-variance direction that separates classes. Choosing a method begins with the target, not with which matrix decomposition is most familiar.

## Exercises

### Exercise 1 {#multivariate-statistics-linear-discriminant-analysis-ex-boundary}

With Sigma=I, equal priors, mu_1=(0,0) and mu_2=(4,0), find the LDA boundary.
<details><summary>Hint 1</summary>The class-two score is 4x_1-(1/2)16.</details>
<details><summary>Hint 2</summary>Set that score equal to the class-one score zero.</details>
<details><summary>Solution</summary>The score difference is 4x_1-8. Its zero set is x_1=2. Under the stated equal-cost model, class two is chosen for x_1>2, with ties handled separately.</details>

### Exercise 2 {#multivariate-statistics-linear-discriminant-analysis-ex-prior}

In the worked case with means (0,0) and (2,0), what inequality selects class two if pi_2=3/4 and pi_1=1/4?
<details><summary>Hint 1</summary>Subtract class-one score from class-two score.</details>
<details><summary>Hint 2</summary>The prior contribution is log(3).</details>
<details><summary>Solution</summary>Class two wins when 2x_1-2+log 3>0, equivalently x_1>1-(log 3)/2. A larger prior for class two moves the boundary left under equal misclassification costs.</details>

## Sources

Original Euler density-ratio derivation, invented Gaussian classes and exercises under CC BY-SA 4.0. The linked Euler probability and advanced-inference chapters supply the normal and covariance foundations. Updated 2026-11-14.
