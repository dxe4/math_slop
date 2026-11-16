# Sources for hierarchical scale normalization

The theorem and numerical fixtures here are derived for a known population location and known positive observation noise. This scope matters when comparing published thresholds.

1. [Andrew Gelman, Prior distributions for variance parameters in hierarchical models, 2006](https://sites.stat.columbia.edu/gelman/bayescomputation/Gelman2006.pdf), sections 2.2 and 4.2, especially printed pages 520–521. This explains the positive likelihood limit at zero, the improper posterior under a uniform log-scale density, and sensitivity to finite lower bounds. Its unknown-location hierarchy has different group-count thresholds from the known-location model derived here. The source supports the mechanism, not a transfer of thresholds between models.
2. [James Hobert and George Casella, The Effect of Improper Priors on Gibbs Sampling in Hierarchical Linear Mixed Models, 1996](https://doi.org/10.1080/01621459.1996.10476714). The paper demonstrates that output from an improper-posterior Gibbs construction may appear reasonable and develops propriety conditions. Our module uses endpoint proofs and closed-form calculations rather than claiming an executed reproduction of their chains. An [open primary PDF](https://ecommons.cornell.edu/bitstream/1813/31953/1/BU-1356-M.pdf) is available from Cornell.

The existing [Chapter 4](../../books/bayesian/04_continuous.md) derives an unknown residual-scale reference posterior and its moment conditions. [Chapter 9](../../books/bayesian/09_hierarchical.md) uses explicit proper scale priors and explains conditional versus marginal shrinkage. The new lesson joins those ideas through a distinct lower-bound integrability example. It leaves the accepted core and earlier modules unchanged.

Primary sources inspected 2026-10-20. The teaching cases and practice tasks are original constructions. No source establishes learning outcomes for this module.
