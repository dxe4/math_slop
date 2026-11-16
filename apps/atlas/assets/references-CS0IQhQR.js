var e=`---
parent_id: book-computational-bayesian-modeling
matter_id: references
title: "References and Further Reading"
license: CC BY-SA 4.0
---

# References and Further Reading {#section-1-references-and-further-reading}

This bibliography identifies standard comparison texts, historical sources, and current research directions. The book is written under CC BY-SA 4.0; standard definitions and Bayesian conventions belong to shared practice. References are included for further reading, historical context, alternative treatments, and broader coverage.

A named result or study is a retrieval convention, not a complete history. Statistical ideas are often the product of long development across languages, institutions, and communities; a modern statement may differ sharply from an early source.

<a id="section-5-bayesian-modeling-and-computation"></a>
## Bayesian modeling and computation {#section-7-bayesian-modeling-and-computation}

- Gelman, A., Carlin, J. B., Stern, H. S., Dunson, D. B., Vehtari, A., & Rubin, D. B. (2013). *Bayesian Data Analysis* (3rd ed.). CRC Press. The standard applied Bayesian text; covers modeling, computation, and model checking at a level parallel to this book.
- Robert, C. P. (2007). *The Bayesian Choice: From Decision-Theoretic Foundations to Computational Implementation* (2nd ed.). Springer. A decision-theoretic treatment of Bayesian inference with rigorous foundations.
- Robert, C. P., & Casella, G. (2004). *Monte Carlo Statistical Methods* (2nd ed.). Springer. A comprehensive reference for MCMC theory and methods.
- Brooks, S., Gelman, A., Jones, G. L., & Meng, X.-L. (Eds.). (2011). *Handbook of Markov Chain Monte Carlo*. CRC Press. Collected chapters on MCMC theory, implementation, and applications.
- Metropolis, N., Rosenbluth, A. W., Rosenbluth, M. N., Teller, A. H., & Teller, E. (1953). “Equation of State Calculations by Fast Computing Machines.” *Journal of Chemical Physics* **21**(6), 1087--1092. DOI: [10.1063/1.1699114](https://doi.org/10.1063/1.1699114); [Los Alamos/OSTI record](https://www.osti.gov/biblio/4390578). Introduces the original symmetric-proposal method in its physical simulation setting.
- Hastings, W. K. (1970). “Monte Carlo Sampling Methods Using Markov Chains and Their Applications.” *Biometrika* **57**(1), 97--109. DOI: [10.1093/biomet/57.1.97](https://doi.org/10.1093/biomet/57.1.97). Generalizes the 1953 method to the modern asymmetric-proposal acceptance correction.

These texts use different notational conventions and software frameworks. Comparison is most useful when those conventions are recorded rather than blended.

<a id="section-16-hamiltonian-monte-carlo-and-probabilistic-computation"></a>
## Hamiltonian Monte Carlo and probabilistic computation {#section-18-hamiltonian-monte-carlo-and-probabilistic-computation}

- Betancourt, M. (2018). “A conceptual introduction to Hamiltonian Monte Carlo.” *arXiv:1701.02434v2*, revised 16 July 2018. An accessible exposition of HMC geometry and divergences.
- Hoffman, M. D., & Gelman, A. (2014). “The No-U-Turn Sampler: Adaptively Setting Path Lengths in Hamiltonian Monte Carlo.” *Journal of Machine Learning Research* **15**(47), 1593--1623. [JMLR article](https://www.jmlr.org/papers/v15/hoffman14a.html). The original NUTS paper, including its tree construction and dual-averaging adaptation.
- Neal, R. M. (2011). "MCMC using Hamiltonian dynamics." In Brooks et al., *Handbook of Markov Chain Monte Carlo*. The definitive technical introduction to HMC.
- Betancourt, M., & Girolami, M. (2015). "Hamiltonian Monte Carlo for hierarchical models." In *Current Trends in Bayesian Methodology with Applications*. CRC Press. Focuses on geometry, parameterization, and diagnostic interpretation.

The HMC literature varies in its treatment of step-size adaptation, mass matrix estimation, and the theoretical conditions for geometric ergodicity. This book uses the NUTS framework as implemented in modern probabilistic programming systems.

<a id="section-25-information-theory-and-model-comparison"></a>
## Information theory and model comparison {#section-27-information-theory-and-model-comparison}

- MacKay, D. J. C. (2003). *Information Theory, Inference, and Learning Algorithms*. Cambridge University Press. A unified treatment of information theory, Bayesian inference, and neural computation; freely available.
- Gelman, A., & Meng, X.-L. (1998). “Simulating Normalizing Constants: From Importance Sampling to Bridge Sampling to Path Sampling.” *Statistical Science* **13**(2), 163--185. DOI: [10.1214/ss/1028905934](https://doi.org/10.1214/ss/1028905934). Develops exact path identities under stated conditions; numerical path-sampling calculations still carry quadrature and Monte Carlo error.
- Vehtari, A., Gelman, A., & Gabry, J. (2017). "Practical Bayesian model evaluation using leave-one-out cross-validation and WAIC." *Statistics and Computing*, 27(5), 1413--1432. The reference for PSIS-LOO and its diagnostics.
- Vehtari, A., Simpson, D., Gelman, A., Yao, Y., & Gabry, J. (2024). “Pareto Smoothed Importance Sampling.” *Journal of Machine Learning Research* **25**(72), 1--58. [JMLR article](https://jmlr.org/papers/v25/19-556.html). The current source for sample-size-sensitive Pareto-$k$ warning thresholds and their interpretation.
- Vehtari, A., Gelman, A., Simpson, D., Carpenter, B., & Bürkner, P.-C. (2021). “Rank-Normalization, Folding, and Localization: An Improved $\\hat{R}$ for Assessing Convergence of MCMC.” *Bayesian Analysis* **16**(2), 667--718. [arXiv:1903.08008v5](https://arxiv.org/pdf/1903.08008). Defines total post-warmup draws across chains and recommends rank-normalized ESS above 400 total for relevant estimands as a warning threshold, alongside $\\hat{R}<1.01$.
- Geweke, J. (1992). “Evaluating the Accuracy of Sampling-Based Approaches to the Calculation of Posterior Moments.” In J. M. Bernardo, J. O. Berger, A. P. Dawid, & A. F. M. Smith (Eds.), *Bayesian Statistics 4*, 169--193. Oxford University Press. Prepublication version: Federal Reserve Bank of Minneapolis Staff Report 148 (1991), DOI: [10.21034/sr.148](https://doi.org/10.21034/sr.148). Gives the spectral-density comparison underlying the named diagnostic; particular early/late window fractions are implementation choices.
- Stan Development Team. (2026). “Diagnose Utility.” *CmdStan User's Guide*, version 2.39. [Official documentation](https://mc-stan.org/docs/2_39/cmdstan-guide/diagnose_utility.html), retrieved 6 September 2026. Documents the software's nominal warnings, including treating any divergent transition as evidence requiring investigation and E-BFMI below $0.30$ as a warning; these diagnostics do not certify convergence.

<a id="section-35-bayesian-workflow-and-pedagogy"></a>
## Bayesian workflow and pedagogy {#section-37-bayesian-workflow-and-pedagogy}

- Kruschke, J. K. (2015). *Doing Bayesian Data Analysis: A Tutorial with R, JAGS, and Stan* (2nd ed.). Academic Press. A pedagogical introduction that emphasizes workflow and interpretation.
- Gelman, A., Vehtari, A., Simpson, D., Margossian, C. C., Carpenter, B., Yao, Y., Kennedy, L., Gabry, J., Bürkner, P.-C., & Modrák, M. (2020). “Bayesian workflow.” *arXiv:2011.01808v1*, submitted 3 November 2020. [Preprint record](https://arxiv.org/abs/2011.01808). A ten-author preprint on modern Bayesian workflow from modeling to criticism; it is distinct from later book-length publications.

<a id="section-40-historical-attribution-checklist"></a>
## Historical attribution checklist {#section-42-historical-attribution-checklist}

Every historical or priority claim should record:

1. a classification as contemporary exposition, secondary history, translated primary source, or primary source;
2. verified author, title, edition, publisher or archive, and stable locator;
3. a note explaining whether the citation supports provenance, formulation, evidence, example, or broader context;
4. a check that modern terminology is not projected unchanged backward;
5. careful comparison of primary sources for culturally broad claims and disputed priority.

<a id="section-50-reading-route-recommendations"></a>
## Reading-route recommendations {#section-52-reading-route-recommendations}

For a deeper treatment of Bayesian decision theory, proceed to Robert. For MCMC theory and convergence, Robert and Casella provide the standard reference. For HMC geometry and implementation, Betancourt's conceptual introduction and Neal's handbook chapter are the natural next steps. For model comparison and cross-validation, Vehtari et al. and MacKay provide the modern framework. For applied workflow, Gelman et al. BDA3 and Kruschke offer complementary applied perspectives.

<a id="section-54-citation-policy-for-contributors"></a>
## Citation policy for contributors {#section-56-citation-policy-for-contributors}

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};