# Prospective E04 scientific specification

This is a reconciled derivation and implementation contract, written before any
E04 scientific run. Numeric anchors are mathematical proposals requiring independent
verification, not measured findings. Exact settings/seeds/tolerances are in
`specifications/study_design.json`; the freeze binds this document too.

## Targets, model and sufficient totals

Synthetic particles are counted in independent equal-duration unit windows.
Rate λ has units particles/window. Prior is Gamma(shape 2, **rate** 1), with density
λ exp(−λ) for λ>0. Assumed Y_i|λ are independent Poisson(λ). For S=sum Y_i,

    p(λ|y) = b^a/Gamma(a) λ^(a−1) exp(−bλ), a=S+2, b=n+1.

Software scale is 1/b. Integral of λ^(S+1) exp(−bλ) is Gamma(S+2)/b^(S+2).
Full-data evidence is Gamma(S+2)/[(n+1)^(S+2) product(y_i!)]. For general helper
prior a0,b0 the posterior is a0+S,b0+n, but frozen execution never overrides a0=2,b0=1.

Fixed truth has mean μ=4. For independent Poisson observations, S~Poisson(4n).
For NB failures before successes, P(Y=k)=Gamma(k+2)/(Gamma(2)Gamma(k+1))
(1/3)^2(2/3)^k, mean 4 and variance 12. Product PGFs give

    G_S(z) = [p/(1−(1−p)z)]^(2n), p=1/3,

hence S~NB(2n,1/3). Alternatively each observation mixes over its **own** independent
Gamma(2,rate 1/2) rate. A single shared rate instead gives Var(S)=4n+8n², not 12n.
Test and teach the difference. Fixed-truth experiments retain sufficient totals,
not within-dataset observations; this cannot support every model check. SBC retains
its actual five-count vectors because the full joint likelihood is evaluated.

Expected assumed Poisson log likelihood, apart from constants, is μ log λ−λ,
maximized at λ=μ. Here the misspecified estimator consistently targets the mean;
its uncertainty scale, rather than universal consistency of the mean, is at issue.

## Three experiments and streams

SBC redraws prior truth/data; fixed-truth coverage holds μ fixed and redraws data;
approximation comparison changes the interval procedure on the **same** totals.
n is observations, M posterior draws, R independent datasets. The immutable JSON
specifies every PCG64 seed and axis order. Instantiate a stream once, never inside
a replication loop. Generate arrays in C order. Algorithms share SBC truths/data
but independent draw streams; methods/levels share each coverage total.

SBC: R=4000, n=5, M=99. Truth Gamma(2,1); exact Gamma(2+S,1+n), deliberately biased
Gamma(2+S+6,1+n), prior-only Gamma(2,1). Count total simulated posterior draws is
3×4000×99=1,188,000. Fixed-truth study has 2×5×4000=40,000 datasets, 90 summary
cells and 60 paired contrasts. This count is not nine independent dataset sets
per generator/n. No stochastic pilot, seed search or favorable subset selection.

## SBC quantities, ties and references

    T_parameter(λ,y)=λ
    T_joint(λ,y)=S log λ−nλ−sum log Gamma(y_i+1).

Evaluate truth/draws against the same y. The factorial term is rank-constant within
dataset but retained explicitly. Reject nonpositive/nonfinite rates; never silently
drop a nonfinite quantity. For each truth quantity and its 99 draws,

    L = count(draw < truth), E = count(draw == truth)
    J ~ discrete uniform {0,...,E}; rank=L+J.

Use exact float equality, no closeness tolerance. Retain L,E,J,ranks for independent
recomputation. Truth conditional on data and correct independent posterior draws are
exchangeable; a deterministic data-dependent transformation preserves exchangeability,
with random ties restoring the appropriate rank reference. Correlated MCMC draws
would require another design. Prior-only parameter draws and truths are marginally
iid, so those ranks can be uniform while data are ignored.

Ranks 0..99 split into [0..9],...,[90..99], each probability .1; expected count 400.
Pointwise bands use Binomial(4000,.1) .025/.975 quantiles. Simultaneous bands use
tail allocation .05/(2×60) across all 10 bins × 6 panels. Union bound needs no
independence between panels. Incorrect algorithms do not satisfy this null merely
because the bands are drawn. Never gate acceptance on flatness, p-values or a lucky
rejection; report finite variability and test-quantity limitations.

Analytic prior-only control: conditional on n=5 zero counts, truth Gamma(2,6),
prior-only Gamma(2,1), and T_joint=−5λ. Thus

    P(T_prior<T_truth|y=0)=1−I_(1/7)(2,2)=324/343,
    E[rank|y=0]=99×324/343 (exact inference: 49.5).

Independently, E[T_joint(truth,Y)−T_joint(prior_draw,Y)]
=n Cov(λ,log λ)=n for this prior. These are deterministic coupling anchors,
not extra simulations or universal detection theorems.

## Three interval procedures

Let a=S+2≥2, b=n+1, c the central level, α=(1−c)/2, z=Phi^-1(1−α).

* Exact: Gamma quantile endpoints at α and 1−α.
* Direct Laplace: log density C+(a−1)log λ−bλ has mode (a−1)/b and second derivative
  −b²/(a−1) there. q_D=N((a−1)/b,(a−1)/b²) on the entire real line; endpoints
  (a−1)/b ± z sqrt(a−1)/b; negative support mass Phi(−sqrt(a−1)). Never clip or
  renormalize. General helper rejects a≤1 for this interior-mode derivation.
* Log Laplace: η=log(λ/λ_ref) with numerical λ_ref=1. Jacobian +η changes log
  density to C+aη−b exp η; mode log(a/b), curvature −a. q_η=N(log(a/b),1/a).
  On rate scale q_L(λ)=sqrt(a)/(λ sqrt(2π)) exp[−a(log λ−log(a/b))²/2], λ>0;
  endpoints (a/b) exp(±z/sqrt(a)). Exact/log negative mass is zero.

Fixed illustrations: (n=1,S=0) gives Gamma(2,2), negative direct mass Phi(−1);
(n=20,S=80) gives Gamma(82,21). Zero-count mode remains interior; call this a
small-count support-boundary illustration, not a boundary mode. Evaluate all three
levels in results, emphasize .90 in main figure. Positivity does not establish
interval accuracy. Illustrations are distinct from all-replication summaries.

## Independent finite-n coverage

For every one of 90 cells sum actual total-count sampling probabilities:

    C_K = sum_(s=0)^K p_g,n(s) 1{L_m(s,n,c)≤4≤U_m(s,n,c)}.

Start cutoff at integer isf(5e−13); increase until SF(K)≤1e−12, cap K at 1,000,000
and fail clearly if uncertified. Use explicit log-PMF formulas, stable summation,
never renormalize. Report cutoff, included mass, omitted tail, value C_K and enclosure
[C_K,min(1,C_K+SF(K))]. Inclusive endpoints have no silently added tolerance.

Independent exact-Gamma route uses integer shape identity

    F_Gamma(S+2,b)(4)=P(Poisson(4b)≥S+2)=SF_Poisson(4b)(S+1).

Central coverage is equivalent to α≤CDF_Poisson(4b)(S+1)≤1−α. Monotone integer
search finds contiguous accepted S range; explicitly check both adjacent integers.
Use only Poisson CDF and actual-generator CDF/SF; **no Gamma CDF/quantile and no call
to count-sum coverage**. Prefer SF differences when CDF subtraction is unstable.

Prospective independent anchor n=1,c=.90: accepted totals 3..11.
Poisson coverage = exp(−4) sum_(s=3)^11 4^s/s!.
NB coverage =16/27−5(2/3)^12. Independently verify before publication.

JSON freezes tail/coverage/CDF/quantile/quadrature/curvature/summary tolerances.
Decisions within 1e−10 of thresholds require separate boundary examination, not
expansion of the acceptance event. Record the examined values and resolution.

## Concentration and limiting coverage

For iid mean μ>0, finite positive variance v, fixed proper prior positive near μ,
and fixed c, posterior center approaches sample mean, differing by O_p(1/n), and
posterior variance is approximately μ/n. Sampling CLT gives mean variance v/n.
Slutsky therefore gives limiting coverage

    2 Phi(z_((1+c)/2) sqrt(μ/v))−1.

All three interval rules have this same first-order limit here. For Poisson it is
c; NB ratio is μ/v=1/3. Finite-n rules differ. Historical 0.742191 belongs to 95%,
not 90%, and must be recomputed as a limit, never an observed result. Conditions
matter; this elementary example is not a claim of general misspecification theory.

## Monte Carlo uncertainty, pairing and acceptance

Coverage estimate k/R; plug-in MCSE sqrt(p_hat(1−p_hat)/R). Report 95% Wilson
interval [p_hat+z²/(2R) ± z sqrt(p_hat(1−p_hat)/R+z²/(4R²))]/(1+z²/R), separately
from c. Independent score inversion checks it. At k=0 endpoints 0,z²/(R+z²);
k=R uses reflected endpoints. Zero MCSE is not certainty. Width MCSE uses sample
SD (ddof=1)/sqrt(R).

For each approximation minus exact, D_r=I_approx−I_exact; mean difference mean(D)
and paired MCSE=sqrt(sum(D−mean(D))²/[R(R−1)]). Independently use four joint counts
(both, exact-only, approximation-only, neither): sum(D)=approx-only−exact-only,
sum(D²)=approx-only+exact-only. Retain an approximate normal 95% MC interval. Zero
discordance makes a degenerate sample interval, not proof of zero uncertainty.
Independent-proportion variances are wrong for these shared datasets.

Report attempts/completions/failed/nonfinite denominators with explicit statuses;
never drop failures. Deterministic checks, completeness, pairing and consistency
gate correctness. An empirical/reference screen uses Binomial tail family error
1e−6 over 90 rows; excursions trigger investigation on frozen outputs, never seed
replacement. Rank histograms are descriptive. Unexpected results must remain.

Implementation tests and numerical/assessment evaluation are downstream. This file
contains no claim that its anchors, tolerances or scientific software have executed.
