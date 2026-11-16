
# Notation and Conventions

H denotes the reproducing-kernel Hilbert space of a real positive-semidefinite kernel k. A section k x is the function obtained by fixing one kernel argument. K is a finite training Gram matrix, and R is a declared record-noise covariance. A shifted observation matrix can be positive definite while K is singular.

Kernel ridge uses a sum squared-loss convention unless explicitly stated otherwise. With penalty lambda its shifted system is K plus lambda identity. An averaged loss uses n lambda in that system. An unpenalised SVM bias is a separate variable, not implicitly part of the penalised RKHS norm.

Gaussian prior and posterior means are functions; their covariance kernels describe joint uncertainty. Latent prediction and a fresh noisy outcome are different random quantities. Hyperparameters are fixed wherever ordinary Gaussian conditioning is used, unless a mixture integration is explicitly stated.

All logarithms are natural in likelihoods, divergences, ELBOs and information gains. Positive-semidefinite includes singular cases; strict positive definiteness is stated at the observed or inducing block actually inverted. Pseudoinverses are used only with the associated range or support condition specified.

Frequency count m gives 2m coordinates in the paired sine-cosine construction. Its diagonal is exactly one before any output scaling. Random-feature probability refers to the sampled frequencies, distinct from randomness of observed data or a Bayesian prior on latent functions.

Kernel mean embeddings use independent copies in their within-law kernel expectations. The empirical squared-norm discrepancy is nonnegative but upward biased; its diagonal-free unbiased version can be negative. Characteristicness refers to identification on a declared probability class, not a bandwidth-independent quantitative separation.

Prose follows British spelling. Chapter-local statement numbering is presentation rather than semantic identity; exercise and heading anchors remain attached to their source readings.
