
# Exercise and Project Solutions

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. This retained appendix contains the original compact exercises. Every current chapter contains all ten staged full solutions inline; the new chapters are linked below without duplicating their entire solution sets.

---

## The Learning Problem Is a Tuple

**Exercise 1.** A researcher reports that their neural network achieves 98% training accuracy on image classification. They conclude that the network "has learned the task." Using the tuple framework, identify at least two missing components that would be needed to justify this conclusion as a learning guarantee.

**Solution.** Training accuracy does specify empirical performance under the $0$--$1$ loss; differentiability is irrelevant to that reported quantity. What is missing is a population target and a valid bridge to it: the future-image distribution $P$, the sampling or assessment design, and an uncertainty or generalization argument. The effective procedure must also include architecture and hyperparameter search. Without those components, $98\%$ training accuracy is a fitting statement rather than a learning guarantee.

**Exercise 2.** Let $X = \mathbb{R}^{d}$ and $Y = \mathbb{R}$. Consider the class $H$ of linear predictors $h_{w}(x) = w^{T}x$ with $w \in \mathbb{R}^{d}$. Show that under squared loss and a fixed distribution $P$ with $\mathbb{E}[\|X\|^{2}] < \infty$ and $\mathbb{E}[Y^{2}] < \infty$, the population risk minimizer over $H$ satisfies the normal equations.

**Solution.** The population risk is $R(w) = \mathbb{E}[(Y - w^{T}X)^{2}]$. Expanding and differentiating under the integrability assumptions,

$$\nabla_{w} R(w) = -2 \mathbb{E}[X(Y - w^{T}X)] = -2(\mathbb{E}[XY] - \mathbb{E}[XX^{T}]w).$$

Setting to zero gives $\mathbb{E}[XX^{T}]w = \mathbb{E}[XY]$. If $\mathbb{E}[XX^{T}]$ is invertible, the unique minimizer is $w^{*} = (\mathbb{E}[XX^{T}])^{-1}\mathbb{E}[XY]$.

**Exercise 3.** Give an example where the minimizer of absolute loss differs from the minimizer of squared loss within the same hypothesis class.

**Solution.** Let $X$ be a singleton (so predictors are constants), and let $Y$ take values $0$, $1$, and $10$ each with probability $1/3$. The squared-loss minimizer is the mean: $(0 + 1 + 10)/3 = 11/3 \approx 3.67$. The absolute-loss minimizer is any median, which is $1$. These differ, so the choice of loss changes the target even when the class and distribution are fixed.

---

## Approximation, Estimation, and Optimization

**Exercise 1.** Prove that under the uniform event with deviation $\varepsilon$ and exact empirical risk minimization ($\varepsilon_{\text{opt}} = 0$), the excess risk satisfies $R(\hat{h}) - R(h_{H}) \le 2\varepsilon$.

**Solution.** On the uniform event, $|R(h) - \hat{R}(h)| \le \varepsilon$ for all $h \in H$. Since $\hat{h}$ is an exact empirical minimizer, $\hat{R}(\hat{h}) \le \hat{R}(h_{H})$. Then

$$R(\hat{h}) \le \hat{R}(\hat{h}) + \varepsilon \le \hat{R}(h_{H}) + \varepsilon \le R(h_{H}) + 2\varepsilon.$$

Rearranging gives $R(\hat{h}) - R(h_{H}) \le 2\varepsilon$.

**Exercise 2.** Suppose $H_{1} \subset H_{2}$. Show that approximation error is no larger for $H_{2}$ than for $H_{1}$, but the uniform deviation bound can be larger.

**Solution.** Since $H_{1} \subset H_{2}$, any predictor in $H_{1}$ is available in $H_{2}$, so

$$\inf_{h \in H_{2}} R(h) \le \inf_{h \in H_{1}} R(h).$$

Thus $R(h_{H_{2}}) - R(h_{P}) \le R(h_{H_{1}}) - R(h_{P})$. For the uniform deviation, the supremum over a larger set is at least as large as the supremum over a subset:

$$\sup_{h \in H_{2}} |R(h) - \hat{R}(h)| \ge \sup_{h \in H_{1}} |R(h) - \hat{R}(h)|.$$

Therefore estimation error can increase when the class grows.

**Exercise 3.** A researcher trains a neural network with $10^{6}$ parameters on $n = 10^{4}$ examples. The training loss is near zero and the test loss is high. Which term in the decomposition is likely dominant, and what remedies are suggested?

**Solution.** The observed train--test gap is evidence of an estimation or assessment problem, but it does not by itself identify the cause. Possible contributors include selection over the test set, distribution shift, and a high-variance fitted procedure. Near-zero training loss shows only that the class and optimizer interpolate this sample; it does not establish low population approximation error. Remedies must follow diagnosis: preserve an independent assessment, check the sampling match, regularize or restrict the procedure, and collect relevant data.

---

## Uniform Convergence for a Finite Class

**Exercise 1.** Solve the finite-class bound for $n$ sufficient to make the deviation at most $\varepsilon = 0.1$ with confidence $1 - \delta = 0.95$, given $M = 100$.

**Solution.** We need $n \ge \log(2M/\delta) / (2\varepsilon^{2}) = \log(200/0.05) / (2 \cdot 0.01) = \log(4000) / 0.02 \approx 8.294 / 0.02 \approx 415$. So $n = 415$ suffices.

**Exercise 2.** A researcher evaluates $M = 50$ classifiers, fixed independently of an IID assessment set, and reports the best assessment accuracy. Explain why a pointwise confidence interval for the selected classifier is invalid, and give a simultaneous bound.

**Solution.** A pointwise interval covers one classifier fixed before seeing the assessment outcomes. Selecting the best of $50$ uses those outcomes and creates a multiple-comparisons problem. Because the candidate list was fixed independently, the finite-class union bound applies: with probability at least $1-\delta$, every classifier's assessment accuracy is within $\sqrt{\log(2M/\delta)/(2n)}$ of its population accuracy. This statement would need a different argument if the candidates themselves were adaptively redesigned from the assessment set.

**Exercise 3.** Show that for $M = 2$, the uniform bound is at most a factor of $\sqrt{\log(4/\delta) / \log(2/\delta)}$ worse than the pointwise Hoeffding bound for one hypothesis.

**Solution.** The pointwise bound is $\sqrt{\log(2/\delta)/(2n)}$. The uniform bound is $\sqrt{\log(4/\delta)/(2n)}$. The ratio is

$$\sqrt{\frac{\log(4/\delta)}{\log(2/\delta)}} = \sqrt{1 + \frac{\log 2}{\log(2/\delta)}}.$$

For $\delta = 0.05$, $\log(2/\delta)=\log 40\approx3.689$, so the ratio is $\sqrt{1 + 0.693/3.689}\approx1.090$. The price of covering two hypotheses is small.

---

## VC Dimension

**Exercise 1.** Show that the class of axis-aligned rectangles in $\mathbb{R}^{2}$ has VC dimension $4$.

**Solution.** Four points at the left, right, top, and bottom vertices of a diamond can be shattered: for each subset, a sufficiently tight axis-aligned rectangle around exactly those selected vertices realizes its labeling. For any five points, choose one witness attaining each of minimum $x$, maximum $x$, minimum $y$, and maximum $y$; this set $E$ has at most four points. Choose a fifth point $q\notin E$. Every axis-aligned rectangle containing all points of $E$ contains their bounding box, hence contains $q$. Therefore the labeling that makes every point of $E$ positive and $q$ negative cannot be realized. The lower and upper bounds give VC dimension $4$.

**Exercise 2.** Compute the Sauer–Shelah bound for $d = 5$ and $n = 20$.

**Solution.**

$$\Pi_{H}(20) \le \sum_{j=0}^{5} \binom{20}{j} = 1 + 20 + 190 + 1140 + 4845 + 15504 = 21700.$$

The polynomial bound gives $(20e/5)^{5} = (4e)^{5} \approx (10.87)^{5} \approx 1.52 \times 10^{5}$, which is looser but easier to compute.

### Exercise 3

A researcher claims their neural network with $10^{6}$ parameters must have VC dimension at least $10^{6}$. Why is this claim not necessarily true?

**Solution.** VC dimension is a combinatorial property of the represented function class, not a lower bound supplied by a raw parameter count. Parameters can be redundant, constrained, or shared, so one million coordinates need not yield one million independently controllable label patterns. Optimization bias does not alter the VC dimension of that fixed full class; it may motivate analyzing a smaller algorithm-dependent set. Margin or norm bounds likewise concern restricted classes or other complexity measures. Even a valid large VC dimension can give a vacuous numerical bound at realistic $n$.

---

## Rademacher Complexity

**Exercise 1.** Prove that $\sup_{\|w\|_{2} \le B} w^{T}v = B\|v\|_{2}$ for $v \in \mathbb{R}^{d}$.

**Solution.** By Cauchy–Schwarz, $w^{T}v \le \|w\|_{2}\|v\|_{2} \le B\|v\|_{2}$. Equality is attained at $w = Bv/\|v\|_{2}$ when $v \neq 0$. If $v = 0$, both sides are zero.

**Exercise 2.** Let $F$ be the class of functions $f(x) = ax$ on $\mathbb{R}$ with $|a| \le 2$, and let the sample be $S = \{-1, 0, 1\}$. Compute an upper bound on $\hat{\mathfrak{R}}_{S}(F)$.

**Solution.** Directly,

$$\hat{\mathfrak R}_S(F)=\frac23\,\mathbb E_\sigma|\sigma_3-\sigma_1|=\frac23,$$

because the supremum over $|a|\le2$ aligns the sign of $a$ with $-\sigma_1+\sigma_3$, and $|\sigma_3-\sigma_1|$ is $0$ or $2$ with equal probability. The generic norm bound $2/\sqrt3\approx1.155$ is valid but looser.

**Exercise 3.** A researcher claims that because their neural network has Rademacher complexity zero on the training set, it will generalize perfectly. What is wrong with this reasoning?

**Solution.** Empirical Rademacher complexity on one training set is not the same as expected complexity over new samples. Even an applicable empirical-complexity theorem retains a nonzero concentration term at finite $n$, and it controls a specified population--empirical gap rather than asserting perfect prediction. A numerically estimated zero must also be distinguished from the mathematical supremum defining the class complexity.

---

## Stability

**Exercise 1.** A ridge-regression theorem with fixed data and norm bounds certifies $\beta\le0.5$ at $\lambda = 0.01$ and $n = 100$. What bound does the same formula certify at $n=400$ with all other constants fixed?

**Solution.** The theorem's upper bound scales as $1/n$, so quadrupling $n$ quarters that bound and certifies $\beta\le0.125$. This need not equal the algorithm's smallest actual stability parameter.

**Exercise 2.** Explain why stability-based generalization can be tighter than VC-based generalization for kernel methods with large feature spaces.

**Solution.** VC dimension for a large kernel class can be infinite or very large, making its VC bound vacuous. For convex Lipschitz losses with a strongly convex RKHS penalty and the required boundedness assumptions, regularized empirical risk minimization has a stability bound controlled by the penalty and sample size. This algorithm-dependent result can be meaningful even when a worst-case class bound is not.

**Exercise 3.** Give an example where an algorithm is stable but the hypothesis class has infinite VC dimension.

**Solution.** Let $H$ be the class of all functions from $\mathbb{R}$ to $\{0, 1\}$. This class has infinite VC dimension. Consider the algorithm that ignores the data and always outputs the constant-zero function. Changing one training point does not change the output, so the algorithm is perfectly stable ($\beta = 0$). Yet the class itself is maximally complex. This shows that stability is a property of the algorithm, not the class.

---

## Regularization and Model Selection

**Exercise 1.** A researcher standardizes features to zero mean and unit variance using the full dataset, then runs $10$-fold cross-validation on the standardized data. Explain the leakage and how to fix it.

**Solution.** The standardization statistics (mean and variance) are computed using the validation folds, so information from the validation set leaks into the training procedure. The fix is to compute mean and variance within each training fold only, then apply those statistics to the corresponding validation fold.

**Exercise 2.** Explain why nested cross-validation is needed when reporting a final performance estimate for a model whose hyperparameters were chosen by cross-validation.

**Solution.** Reusing one cross-validation score both to select a hyperparameter and to report its performance makes the reported score optimistic. Nested cross-validation separates inner selection from outer held-out evaluation, so the outer predictions assess the complete selection procedure. They target a procedure trained at the outer-loop training size; they do not by themselves give an unbiased risk estimate for the model later refit on the full dataset.

**Exercise 3.** A study has $100$ patients from $10$ hospitals, with $10$ patients per hospital. The goal is to predict outcomes for patients at new hospitals. Should the researcher use random $5$-fold cross-validation? If not, what should they use?

**Solution.** Random folds would place patients from the same hospital in both training and validation sets, estimating interpolation within known hospitals rather than transfer to new hospitals. The researcher should use cluster-based cross-validation: split by hospital, training on $8$ hospitals and validating on $2$ hospitals in each fold.

---

## Calibration, Subgroups, and Decisions

**Exercise 1.** A model predicts probability $0.8$ for $100$ individuals. In reality, $70$ of them experience the positive outcome. Is the model calibrated for this group? If not, what is the calibration error?

**Solution.** The empirical bin gap is $|0.8-0.7|=0.1$, with the observed frequency below the forecast. This is evidence of overprediction in this sample, not a proof that the population conditional probability differs from $0.8$; a calibration assessment must report binning and sampling uncertainty.

**Exercise 2.** For group $g$, let $\pi_g=\mathbb P(Y=1\mid G=g)$, false-positive rate $f_g$, and false-negative rate $q_g$. Derive group accuracy and explain why equalizing false-positive rates alone neither forces equal accuracy nor forces different accuracy.

**Solution.** The error probability in group $g$ is $f_g(1-\pi_g)+q_g\pi_g$, so

$$\operatorname{Acc}_g=1-f_g(1-\pi_g)-q_g\pi_g.$$

Equal $f_g$ leaves $q_g$ unconstrained, so either equal or unequal accuracies are possible. In particular, if both $f_g=q_g=q$ in every group, then every group has accuracy $1-q$ even when the base rates differ.

**Exercise 3.** A company uses a predictive model to decide which customers to offer a loan. The model has low log-loss. Why might this not be sufficient to ensure good business outcomes?

**Solution.** Log-loss measures probabilistic calibration and sharpness, but business outcomes depend on the costs of false positives (loans to defaulters) and false negatives (missed profitable customers). If these costs are asymmetric, the optimal decision threshold differs from the default $0.5$. Moreover, if offering loans changes customer behavior (strategic manipulation), the predictive model may become invalid after deployment.

---

## Shift and Robustness

**Exercise 1.** Under covariate shift, support overlap, and integrability, show that the importance-weighted empirical risk of a fixed predictor $h$ using the true density ratio is unbiased for its target risk.

**Solution.** Let $\hat{R}_{\text{IW}}(h) = (1/n)\sum_{i=1}^{n} w(X_{i}) \ell(h(X_{i}), Y_{i})$ where $(X_{i}, Y_{i})$ are IID from $P_{\text{train}}$, $h$ is fixed independently of these rows, and $w$ is the true ratio. Taking expectations,

$$\mathbb{E}_{\text{train}}[\hat{R}_{\text{IW}}(h)] = \mathbb{E}_{\text{train}}[w(X) \ell(h(X), Y)] = \mathbb{E}_{\text{target}}[\ell(h(X), Y)] = R_{\text{target}}(h).$$

The second equality uses support overlap, invariant $P(Y\mid X)$, and integrability. If $h$ or $w$ is estimated on the same rows, this calculation does not by itself establish unbiasedness of the resulting data-dependent estimator.

**Exercise 2.** A model is trained on data from City A and deployed in City B. The feature distributions differ, but the researcher assumes covariate shift. What additional assumption is needed for importance weighting to be valid, and how might it fail?

**Solution.** The additional assumption is support overlap: every $x$ that occurs in City B must also occur in City A with positive density. It fails if City B has neighborhoods, weather patterns, or demographic groups not represented in City A. It also fails if $P(Y \mid X)$ differs between cities (concept shift), in which case covariate shift does not hold regardless of support.

**Exercise 3.** Explain why distributionally robust optimization with a very large neighborhood can lead to trivial predictors.

**Solution.** The conclusion depends on admissible actions. With one input and unrestricted binary target labels, a randomized rule predicting one with probability q has worst-case expected error $\max(q,1-q)$, minimized at one half by q equal to one half. If only deterministic binary rules are allowed, every rule has worst-case error one; a constant rule need not be better than another. A very broad neighborhood can therefore erase useful source distinctions, but its exact minimax conclusion must state the decision space and adversary.

---

## Online Learning

**Exercise 1.** An algorithm has $o(T)$ regret against the best fixed action. Does that prove its average loss tends to zero? Explain.

**Solution.** No. The best fixed action may itself have large average loss. Vanishing average regret only closes the gap to that comparator. For example, if every action incurs loss $1$ at every round, the best fixed action has average loss $1$, and any algorithm with sublinear regret also has average loss approaching $1$.

**Exercise 2.** Show what the one-sided exponential-weights regret bound implies about the limiting average regret.

**Solution.** The bound is $\text{Regret}_{T} \le \sqrt{2T \log M}$. Dividing by $T$ gives

$$\limsup_{T\to\infty}\frac{\text{Regret}_{T}}{T}\le0.$$

This one-sided upper bound does not by itself prove convergence to zero: on a realized sequence, an adaptive learner can outperform the best fixed comparator by a linear amount and have negative average regret. The stronger two-sided statement $\text{Regret}_T=o(T)$ would imply convergence to zero.

**Exercise 3.** A researcher applies online gradient descent to a streaming dataset that is actually IID. They observe sublinear regret. Can they conclude that the returned predictor generalizes well to future data from the same distribution?

**Solution.** Not directly. Sublinear regret in the online setting means the algorithm performed well against the best fixed predictor on the observed sequence. Online-to-batch conversion can translate this into a statistical guarantee, but it requires an additional argument: run the online algorithm, average the predictors, and apply a concentration inequality. The raw regret bound does not automatically imply population risk bounds.

## Current full-solution route

1. [The Learning Problem Is a Tuple](the-learning-problem-is-a-tuple.md).
2. [PAC Learning and the Realizable Case](pac-learning-realizable-case.md).
3. [Approximation, Estimation, and Optimization](approximation-estimation-optimization.md).
4. [Uniform Convergence for a Finite Class](uniform-convergence-finite-class.md).
5. [No Free Lunch: Structure and Unseen Labels](no-free-lunch.md).
6. [VC Dimension](vc-dimension.md).
7. [Rademacher Complexity](rademacher-complexity.md).
8. [Covering Numbers and Chaining](covering-numbers-and-chaining.md).
9. [Margins and Linear Classes](margins-and-linear-classes.md).
10. [Stability](stability.md).
11. [Regularization and Model Selection](regularization-and-model-selection.md).
12. [Convex Learning and Stochastic Gradient Descent](convex-learning-and-sgd.md).
13. [Boosting: Weighted Errors, Margins and Surrogate Risk](boosting.md).
14. [PAC-Bayes: Data-Dependent Mixtures and Fixed Priors](pac-bayes.md).
15. [Online Learning](online-learning.md).
16. [Minimax Lower Bounds: Le Cam, Fano and Noisy Labels](minimax-lower-bounds-fano-le-cam.md).
17. [Calibration, Subgroups, and Decisions](calibration-subgroups-decisions.md).
18. [Shift and Robustness](shift-and-robustness.md).
