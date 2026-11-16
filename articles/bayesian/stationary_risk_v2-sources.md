# Sources and scope

Primary sources checked on 20 October 2026. The linked mathematical references support the distinctions below; the model, loss table, exact examples, progression and exercises are original to this extension. No claim of learner effectiveness follows from mathematical correctness or the choice of study activities.

## Invariant laws, marginal convergence and occupancy averages

David Aldous and James Allen Fill, *Reversible Markov Chains and Random Walks on Graphs*, [§2.1, Notation and reminders of fundamental results](https://www.stat.berkeley.edu/users/aldous/RWG/Book_Ralph/Ch2.S1.html), author-hosted monograph, chapter dated 10 September 1999. The stationary-law discussion states invariance under a stationary start. Theorem 2.1 concerns occupation-frequency convergence for an irreducible finite chain; Theorem 2.2 adds aperiodicity for marginal convergence. We derive the explicit two-state formulas directly. The alternating two-state example demonstrates why those conclusions must be named separately.

## Exact finite-run variance

Aldous and Fill, [§2.3, Variances of sums](https://www.stat.berkeley.edu/users/aldous/RWG/Book_Ralph/Ch2.S3.html). The section derives stationary visit-count variance by summing pairwise covariances and distinguishes asymptotic variance from finite-time behavior. Our finite-$N$ formula specializes that covariance calculation to $p(1-p)\rho^k$; its closed form follows from finite geometric sums. The arbitrary-start bias and covariance formulas in this lesson are elementary derivations shown in full, not a quoted guarantee about all samplers.

## Stationary autocovariances and Monte Carlo precision

Charles J. Geyer, [*Stat 8054 Lecture Notes: Autocovariances in MCMC*](https://www.stat.umn.edu/geyer/8054/notes/initseq.html), 22 December 2023, §§3–5. These author-hosted notes connect averages of chain functionals with the stationary autocovariance series. Our lesson uses the exactly known two-state autocovariances, so it does not estimate an autocorrelation function from a trace. The notes' general estimation discussion is background; no software or figure is copied.

## Original construction and boundaries

The comparison $(a,b)=(1/20,3/20)$ versus $(3/20,9/20)$ deliberately preserves $p=1/4$ while changing $\rho$ from $4/5$ to $2/5$. The protection cost $3/10$ yields gap $1/20$. The exact finite count recursion is derived by conditioning on the last transition and independently checked by complete-path enumeration. The $N=2$ counterexample prevents an unjustified inference from variance ordering to threshold-error ordering.

The target is a constant action on a fresh independent case with stationary law. Parameters and losses are specified, not inferred. No posterior parameter probability, empirical convergence diagnostic, normal-approximation coverage guarantee or deployment claim is supplied. The study sequence uses prediction, a fully worked example, faded calculations, changed-case transfer and delayed retrieval as design choices. It has not been evaluated with learners.

Offline pages reuse the existing course Markdown/KaTeX renderer and local fonts. The scientific calculations are implemented once in `risk.py`; build-time cards call that calculator. Browser code checks layout and controls, and contains no numerical risk implementation.
