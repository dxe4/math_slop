# Bibliography and further pathways

Bayesian workflow and computational diagnostics are developed broadly by
Gelman and collaborators ([Gelman et al. 2020](#ref-gelman2020bayesian)). McElreath supplies a
model-building route ([McElreath 2020](#ref-mcelreath2020statistical)), Robert and Casella develop
Monte Carlo theory ([Robert and Casella 2004](#ref-robert2004monte)), Bishop covers latent and approximate
models ([Bishop 2006](#ref-bishop2006pattern)), Koller and Friedman develop graphical-model
inference ([Koller and Friedman 2009](#ref-koller2009probabilistic)), and Pearl develops causal identification
([Pearl 2009](#ref-pearl2009causality)).

The Chapter 4 collider-sign clinic follows the interaction-contrast analysis
of Mansournia, Nazemipour, and Etminan ([Mansournia et al. 2022](#ref-mansournia2022collider), discussion
following Figure 2). The determinant proof, strictly monotone counterexample,
and changed selection family are derived explicitly here. The graph permits
association; numerical mechanisms determine its sign and any cancellation
within a particular selection stratum.

The Chapter 18 resampling investigation follows the primary comparison by
Douc, Cappé, and Moulines ([Douc et al. 2005](#ref-douc2005resampling), Sections 2.4 and 3), which
separates conditional unbiasedness from estimator variance and gives a
systematic-resampling counterexample. The book derives its finite examples,
stratified total-variance bound, and exact boundary convention explicitly.

The Chapter 12 mass-convention and leapfrog-stability clinic uses Neal's
primary HMC treatment ([Neal 2011](#ref-neal2011hmc), Sections 5.4.1 and 5.4.2.2). Its exact
matrix, conditioning examples, and changed boundary task are derived here
under the explicit momentum-covariance convention.

Chapter 26's pointwise likelihood factorization and reciprocal LOO setup
follow Vehtari, Gelman, and Gabry ([Vehtari et al. 2017](#ref-vehtari2017loo), Sections 2 and 2.1).
The missing-support condition is the self-normalized importance-sampling
coverage assumption in Owen ([Owen 2013](#ref-owen2013mc), Section 9.2, Theorem 9.2). The
finite support-loss example and full-support bias task are derived explicitly
here; neither a saved likelihood vector nor a tail diagnostic proves coverage.

The seventh-edition audit uses the current Stan manuals as the implementation
benchmark ([Team 2025](#ref-stan2025manual)). Modern MCMC diagnostics follow rank normalization,
folding, localization, and simulation calibration ([Vehtari et al. 2021](#ref-vehtari2021rank); [Talts et al. 2018](#ref-talts2018validating)). Predictive evaluation follows the current PSIS treatment
and predictive stacking literature ([Vehtari et al. 2024](#ref-vehtari2024psis); [Yao et al. 2018](#ref-yao2018stacking)).

Chapter 27's stable logistic clinic uses the Stan manual's explicit distinction
between real transforms and finite-precision boundary rounding
([Team 2026](#ref-stan2026transforms)). The actual Stan Math bounded transform accumulates the
log-Jacobian directly from the unconstrained input ([Team 2026](#ref-stanmath2026bounded)).
The direct-log derivation, fixed Beta examples, changed task and tail proofs
are developed here; no general numerical Beta normalizer is implemented.

Chapter 17's fixed monotone-transform setup follows Snelson, Rasmussen,
and Ghahramani ([Snelson et al. 2004](#ref-snelson2004warped), Section 3, equations 5–8). The Gaussian
latent conditional, observation-space evidence, square-transform branch
calculation, and fourth-moment certificate are derived explicitly here.
The square example extends beyond that paper's monotone-transform setting.

Chapter 19 uses Blei, Kucukelbir, and McAuliffe's mean-field discussion
and factor updates ([Blei et al. 2017](#ref-blei2017variational), Sections 2.3–2.4). Its full
restricted Gaussian-family optimum proof, marginal-versus-contrast
comparison, objective-improvement counterexample, and changed task
are derived here. A better KL objective does not certify every
uncertainty estimand.

Deterministic approximation pathways include expectation propagation and
normalizing flows ([Minka 2001](#ref-minka2001expectation); [Rezende and Mohamed 2015](#ref-rezende2015variational)). Trace-based
language implementation and amortized inference compilation are represented by
primary PPL work ([Wingate et al. 2011](#ref-wingate2011lightweight); [Le et al. 2017](#ref-le2017inference)), while the
simulation-based-inference route is benchmarked against the field review by
Cranmer, Brehmer, and Louppe ([Cranmer et al. 2020](#ref-cranmer2020frontier)).

This book implements core formulas directly so the mathematical targets remain
visible. Mature probabilistic-programming frameworks add compilers, automatic
transforms, adaptive samplers, diagnostics, and scalable approximations; consult
their current official documentation when choosing an implementation.

Suggested projects include an SBC suite for a hierarchical model, a
particle-filter degeneracy study, a centered-versus-noncentered HMC comparison,
and a variational approximation benchmark against exact enumeration.

<div id="refs" class="references">

<a id="ref-bishop2006pattern"></a>Bishop, Christopher M.. 2006. *Pattern Recognition and Machine Learning*. Springer.

<a id="ref-blei2017variational"></a>Blei, David M., Alp Kucukelbir, and Jon D. McAuliffe. 2017. “Variational Inference: A Review for Statisticians.” *Journal of the American Statistical Association* 112(518). <https://arxiv.org/pdf/1601.00670v5>

<a id="ref-cranmer2020frontier"></a>Cranmer, Kyle, Johann Brehmer, and Gilles Louppe. 2020. “The Frontier of Simulation-Based Inference.” *Proceedings of the National Academy of Sciences* 117(48): 30055–30062. doi:10.1073/pnas.1912789117.

<a id="ref-douc2005resampling"></a>Randal Douc, Olivier Cappé, and Eric Moulines. 2005. “Comparison of Resampling Schemes for Particle Filtering.” *Proceedings of the 4th International Symposium on Image and Signal Processing and Analysis*: 64–69. <https://arxiv.org/abs/cs/0507025>

<a id="ref-gelman2020bayesian"></a>Gelman, Andrew, Aki Vehtari, Daniel Simpson, Charles C. Margossian, Bob Carpenter, Yuling Yao, Lauren Kennedy, Jonah Gabry, Paul-Christian Buerkner, and Martin Modrak. 2020. *Bayesian Workflow*. arXiv.

<a id="ref-koller2009probabilistic"></a>Koller, Daphne and Nir Friedman. 2009. *Probabilistic Graphical Models: Principles and Techniques*. MIT Press.

<a id="ref-le2017inference"></a>Le, Tuan Anh, Atilim Gunes Baydin, and Frank Wood. 2017. “Inference Compilation and Universal Probabilistic Programming.” *Proceedings of the 20th International Conference on Artificial Intelligence and Statistics* 54: 1338–1348. PMLR. <https://proceedings.mlr.press/v54/le17a.html>

<a id="ref-mansournia2022collider"></a>Mansournia, Mohammad Ali, Maryam Nazemipour, and Mahyar Etminan. 2022. “Interaction Contrasts and Collider Bias.” *American Journal of Epidemiology* 191(10): 1813–1819. <https://academic.oup.com/aje/article/191/10/1813/6605718>

<a id="ref-mcelreath2020statistical"></a>McElreath, Richard. 2020. *Statistical Rethinking*. CRC Press.

<a id="ref-minka2001expectation"></a>Minka, Thomas P.. 2001. “Expectation Propagation for Approximate Bayesian Inference.” *Proceedings of the Seventeenth Conference on Uncertainty in Artificial Intelligence*: 362–369. Morgan Kaufmann.

<a id="ref-neal2011hmc"></a>Neal, Radford M.. 2011. “MCMC Using Hamiltonian Dynamics.” *Handbook of Markov Chain Monte Carlo*: 113–162. Chapman and Hall/CRC. <https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf>

<a id="ref-owen2013mc"></a>Owen, Art B.. 2013. *Monte Carlo Theory, Methods and Examples*. Author's online book. <https://artowen.su.domains/mc/Ch-var-is.pdf>

<a id="ref-pearl2009causality"></a>Pearl, Judea. 2009. *Causality*. Cambridge University Press.

<a id="ref-rezende2015variational"></a>Rezende, Danilo Jimenez and Shakir Mohamed. 2015. “Variational Inference with Normalizing Flows.” *Proceedings of the 32nd International Conference on Machine Learning* 37: 1530–1538. PMLR. <https://proceedings.mlr.press/v37/rezende15.html>

<a id="ref-robert2004monte"></a>Robert, Christian P. and George Casella. 2004. *Monte Carlo Statistical Methods*. Springer.

<a id="ref-snelson2004warped"></a>Snelson, Edward, Carl Edward Rasmussen, and Zoubin Ghahramani. 2004. “Warped Gaussian Processes.” *Advances in Neural Information Processing Systems 16*. MIT Press. <https://proceedings.neurips.cc/paper/2003/file/6b5754d737784b51ec5075c0dc437bf0-Paper.pdf>

<a id="ref-talts2018validating"></a>Talts, Sean, Michael Betancourt, Daniel Simpson, Aki Vehtari, and Andrew Gelman. 2018. “Validating Bayesian Inference Algorithms with Simulation-Based Calibration.” *arXiv preprint arXiv:1804.06788*. <https://arxiv.org/abs/1804.06788>

<a id="ref-stan2025manual"></a>Stan Development Team. 2025. *Stan User's Guide and Reference Manual, Version 2.39*. <https://mc-stan.org/docs/>

<a id="ref-stan2026transforms"></a>Stan Development Team. 2026. *Constraint Transforms: Finite Accuracy and Lower and Upper Bounded Scalars*. <https://mc-stan.org/docs/reference-manual/transforms.html>

<a id="ref-stanmath2026bounded"></a>Stan Development Team. 2026. *Stan Math: Lower and Upper Bounded Transform with Log-Jacobian Accumulation*. Primary C++ implementation, lub_constrain.hpp. <https://raw.githubusercontent.com/stan-dev/math/develop/stan/math/prim/constraint/lub_constrain.hpp>

<a id="ref-vehtari2017loo"></a>Vehtari, Aki, Andrew Gelman, and Jonah Gabry. 2017. “Practical Bayesian Model Evaluation Using Leave-One-Out Cross-Validation and WAIC.” *Statistics and Computing* 27: 1413–1432. <https://arxiv.org/abs/1507.04544>

<a id="ref-vehtari2021rank"></a>Vehtari, Aki, Andrew Gelman, Daniel Simpson, Bob Carpenter, and Paul-Christian Buerkner. 2021. “Rank-Normalization, Folding, and Localization: An Improved R-hat for Assessing Convergence of MCMC.” *Bayesian Analysis* 16(2): 667–718. doi:10.1214/20-BA1221.

<a id="ref-vehtari2024psis"></a>Vehtari, Aki, Daniel Simpson, Andrew Gelman, Yuling Yao, and Jonah Gabry. 2024. “Pareto Smoothed Importance Sampling.” *Journal of Machine Learning Research* 25(72): 1–58. <https://www.jmlr.org/papers/v25/19-556.html>

<a id="ref-wingate2011lightweight"></a>Wingate, David, Andreas Stuhlmueller, and Noah D. Goodman. 2011. “Lightweight Implementations of Probabilistic Programming Languages via Transformational Compilation.” *Proceedings of the Fourteenth International Conference on Artificial Intelligence and Statistics* 15: 770–778. PMLR. <https://proceedings.mlr.press/v15/wingate11a.html>

<a id="ref-yao2018stacking"></a>Yao, Yuling, Aki Vehtari, Daniel Simpson, and Andrew Gelman. 2018. “Using Stacking to Average Bayesian Predictive Distributions.” *Bayesian Analysis* 13(3): 917–1007. doi:10.1214/17-BA1091.

</div>
