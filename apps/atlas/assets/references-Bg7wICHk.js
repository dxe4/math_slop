var e=`---
parent_id: book-advanced-statistical-inference-reference
matter_id: references
title: "References and Further Reading"
license: CC BY-SA 4.0
---

# References and Further Reading

The chapters in this book draw on a large literature in mathematical statistics, probability, and statistical methodology. The references below are selected for their depth, clarity, and usefulness as continuing resources. They are grouped by theme and ordered roughly by prerequisite level within each group.

## Mathematical statistics: estimation and testing

**Casella, G. and Berger, R. L.** *Statistical Inference.* 2nd ed. Duxbury, 2002.
A comprehensive first graduate text covering probability, point estimation, hypothesis testing, and confidence intervals. The treatment of likelihood theory, sufficiency, and the Neyman–Pearson lemma is especially clear. Chapters 7–9 provide the inferential foundation assumed in the early chapters of this book.

**Lehmann, E. L. and Casella, G.** *Theory of Point Estimation.* 2nd ed. Springer, 1998.
The standard reference for decision-theoretic and classical estimation theory. Covers unbiasedness, equivariance, minimaxity, Bayes estimation, and large-sample theory in depth. The chapters on asymptotic efficiency and the Cram\\'{e}r–Rao bound complement the estimating-equations material in this book.

**Lehmann, E. L. and Romano, J. P.** *Testing Statistical Hypotheses.* 3rd ed. Springer, 2005.
The definitive treatment of hypothesis testing from the Neyman–Pearson perspective. Includes uniformly most powerful tests, invariance, unbiased tests, and large-sample theory. The discussion of permutation and rank tests connects directly to the nonparametric chapters of this book.

## Asymptotic and empirical-process theory

**van der Vaart, A. W.** *Asymptotic Statistics.* Cambridge University Press, 1998.
A modern and rigorous treatment of large-sample theory, including M-estimators, the delta method, empirical processes, and the bootstrap. The chapters on semiparametric models and efficiency are essential background for the functional delta method and influence-function material in this book. The treatment of stochastic convergence and tightness is the standard reference.

**Shao, J.** *Mathematical Statistics.* 2nd ed. Springer, 2003.
Covers likelihood theory, asymptotic expansions, and resampling methods with a focus on mathematical rigor. The chapters on the jackknife, bootstrap, and Edgeworth expansions provide useful complements to the bootstrap-boundary discussion in this book.

**Massart, P.** “The Tight Constant in the Dvoretzky–Kiefer–Wolfowitz Inequality.” *The Annals of Probability* 18(3), 1990, pp. 1269–1283.
This is the primary source for the sharp leading constant $2$ used in Theorem 5.1. The chapter imports that theorem rather than deriving the sharp constant by a union bound.

## Robustness and nonparametrics

**Bickel, P. J. and Doksum, K. A.** *Mathematical Statistics: Basic Ideas and Selected Topics, Volume I.* 2nd ed. Prentice Hall, 2001.
A broad text with strong coverage of robust estimation, nonparametric methods, and semiparametric models. The treatment of influence functions and breakdown points is concise and connects directly to the robust-functionals chapter. The book also includes useful material on rank procedures and the empirical distribution function.

## Resampling and computation

**Davison, A. C. and Hinkley, D. V.** *Bootstrap Methods and Their Application.* Cambridge University Press, 1997.
The most accessible comprehensive treatment of the bootstrap. Covers confidence intervals, hypothesis tests, regression models, and dependent data. The discussion of when the bootstrap fails and what modifications are available (parametric bootstrap, block bootstrap, $m$-out-of-$n$) is directly relevant to the bootstrap-boundaries chapter of this book.

**Press, W. H., Teukolsky, S. A., Vetterling, W. T., and Flannery, B. P.** *Numerical Recipes: The Art of Scientific Computing.* 3rd ed. Cambridge University Press, 2007.
Numerical-analysis background for the reproducible-numerical-inference chapter, including floating-point computation, linear algebra, optimization, and simulation algorithms.

## Chapter-specific pointers

- *Design Randomization as a Probability Space* and *Survey-Weighted Models and Targets*: Särndal, C.-E., Swensson, B., and Wretman, J., *Model Assisted Survey Sampling*, Springer, 1992, [Springer book record](https://link.springer.com/book/10.1007/978-1-4612-0923-4); Fuller, W. A., *Sampling Statistics*, Wiley, 2009.
- *Generalized Linear Likelihood*: McCullagh, P. and Nelder, J. A., *Generalized Linear Models*, 2nd ed., Chapman & Hall, 1989; Brown, L. D., *Fundamentals of Statistical Exponential Families: With Applications in Statistical Decision Theory*, IMS Lecture Notes–Monograph Series 9, 1986, [doi:10.1214/lnms/1215466757](https://doi.org/10.1214/lnms/1215466757).
- *Counting-Process Survival Theory*: Andersen, P. K., Borgan, Ø., Gill, R. D., and Keiding, N., *Statistical Models Based on Counting Processes*, Springer, 1993; Fleming, T. R. and Harrington, D. P., *Counting Processes and Survival Analysis*, Wiley, 1991.
- *Spatial Covariance and Kriging*: Cressie, N., *Statistics for Spatial Data*, rev. ed., Wiley, 1993; Stein, M. L., *Interpolation of Spatial Data: Some Theory for Kriging*, Springer, 1999.
- *Dependent Central Limits*: Brockwell, P. J. and Davis, R. A., *Time Series: Theory and Methods*, 2nd ed., Springer, 1991; Doukhan, P., *Mixing: Properties and Examples*, Springer, 1994.
- *Multiplicity and Post-Selection Scope*: Benjamini, Y. and Hochberg, Y., “Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing,” *Journal of the Royal Statistical Society, Series B* 57(1), 1995, pp. 289–300; Efron, B., *Large-Scale Inference: Empirical Bayes Methods for Estimation, Testing, and Prediction*, Cambridge University Press, 2010; Lee, J. D., Sun, D. L., Sun, Y., and Taylor, J. E., “Exact Post-Selection Inference, with Application to the Lasso,” *The Annals of Statistics* 44(3), 2016, pp. 907–927.

## Reading strategy

Readers using this book as a reference should start with Casella and Berger for foundational material, then move to Lehmann and Casella or van der Vaart for deeper theory. The asymptotic chapters of this book assume familiarity with modes of convergence and the central limit theorem at the level of Shao or van der Vaart. The resampling chapters assume basic familiarity with simulation and Monte Carlo standard errors. For computation, Press et al. (2007) provides the numerical-analysis background assumed in the reproducible-numerical-inference chapter.
`;export{e as default};