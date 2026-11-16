
# Prerequisite Diagnostic

The route assumes covariance arithmetic and least-squares projection. Review [joint dependence](../probability-models-proofs/joint-laws-conditioning-and-dependence.md), [covariance](../probability-models-proofs/covariance-regression-and-inequalities.md), and [regression projection](../regression-and-generalised-linear-models/geometry-of-projection.md) if the following steps are unfamiliar.

For centred Y with variance four and centred Z with variance nine and covariance three, the best linear coefficient predicting Y from Z is Cov(Y,Z)/Var(Z)=3/9=1/3. The residual variance is 4-3²/9=3. Both calculations use projection, not independence. A covariance matrix must be positive semidefinite because the variance of every linear combination is nonnegative.

For a sequence x_1,...,x_n, a lag-one pair is (x_t,x_{t-1}) for t=2,...,n. Its number of observed pairs is n-1, while an estimator may still divide their centred product sum by n. If a quarterly observation is missing, that gap is not a zero and the next recorded row need not be one quarter later.

If E[U|F] is unfamiliar, use the [conditional expectation chapter](../probability-models-proofs/conditional-expectation-and-projection.md): it is the squared-loss projection onto F-measurable quantities. The Time Series forecast chapter derives the key risk identity again. Readers can start Chapter 1 with these facts and return to the linked sources as needed.
