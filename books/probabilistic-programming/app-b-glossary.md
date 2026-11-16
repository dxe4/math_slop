# Appendix B — Glossary and notation {#sec-pp-glossary}

| Term | Meaning |
|---|---|
| prior | parameter distribution before current observations |
| likelihood | observation model viewed as a function of latent quantities |
| posterior | conditional latent distribution after observations |
| trace | addressed random choices in one program execution |
| ESS | diagnostic translating dependence or weight concentration into an information scale |
| divergence | HMC integration failure diagnostic |
| ELBO | variational lower bound on log evidence |
| SBC | simulation-based calibration using repeated truth ranks |
| posterior predictive | replicated outcome distribution after posterior conditioning |
| factor | nonnegative local function whose product defines an unnormalized joint law |
| treewidth | smallest induced width over variable-elimination orders |
| Laplace approximation | local Gaussian approximation from a mode and negative Hessian |
| EP | expectation propagation by cavity, tilted distribution, and moment-matched site updates |
| normalizing flow | invertible density transform with tractable log-Jacobian |
| rank-normalized R-hat | multi-chain location/scale diagnostic computed after pooled rank transformation |
| MCSE | numerical standard error of an estimated posterior summary |
| PSIS | importance-weight stabilization based on a fitted generalized-Pareto tail |
| Pareto k | estimated importance-ratio tail shape used as a reliability diagnostic |
| stacking | predictive-density mixture weights optimized by held-out log score |
| address | stable identity of one random choice in an execution trace |
| effect handler | interpreter that gives operations such as sample and observe an inference behavior |
| ABC | approximate Bayesian computation based on simulated-summary closeness |
| simulation gap | discrepancy between the implemented simulator and the real data-generating process |

Core notation: $p(y,\theta)$ is joint density or mass,
$p(\theta\mid y)$ posterior, $\widetilde p$ an unnormalized density,
$E_p$ expectation under $p$, and $y_{\mathrm{rep}}$ a predictive replication.
All densities are relative to an implied or stated reference measure.

For arrays, time indices usually become the first axis, draw indices the next,
and parameter or state components the last. Every code listing states its own
axis convention; mathematical subscripts are not inferred from array position.
