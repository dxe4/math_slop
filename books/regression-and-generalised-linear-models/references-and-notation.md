
# References and Notation

The benchmark references are Julian Faraway, *Linear Models with R*, and Alan Agresti, *Foundations of Linear and Generalized Linear Models*. Euler prerequisites are [Principles of Statistical Inference](#/books/principles-statistical-inference), [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs), and [Linear Algebra: Structure and Proofs](#/books/linear-algebra-structure-proofs).

The existing Principles chapter [Linear Models and Regression Inference](../principles-statistical-inference/linear-models-and-regression-inference.md) supplies the starting source for the linear-model treatment. [Statistics with R](#/books/statistics-with-r) supplies the applied regression code and dataset-provenance conventions. Their original files, questions and mathematical statements remain in place.

Write $X$ for a design matrix, $Y$ for a random response, $y$ for its observed value, $\beta$ for coefficients and $\hat\beta$ for an estimate. A superscript $\mathsf T$ denotes transpose. $H$ is an orthogonal projection only when the stated construction makes it one. Error variance, estimation variance and predictive variance are distinct quantities.

In exponential dispersion notation, $\theta$ is a canonical parameter, $b$ a cumulant function, $\phi$ dispersion and $a_i(\phi)$ the declared scale. The link relates a conditional mean to a linear predictor. Quasi-likelihood specifies a mean-variance estimating structure rather than silently supplying a complete probability law.
