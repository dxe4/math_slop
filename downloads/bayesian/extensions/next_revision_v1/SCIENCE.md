# Prospective scientific handoff

All settings here are prospective. No fit, convergence result, scientific figure or
notebook execution was performed in preparation. Literal settings/data are in
`specifications/E01_v1.json`, `E02_v1.json`, `E03_v1.json`. `freeze_v1.json` binds
those files and all twelve assessment objectives before first execution. Retain v1;
amend a failed numerical method in a new `MODULE_amendmentNN.json` identifying parent
hash, failed run, justification, changed settings and required rechecks.

Use the existing `.venv`, float64, `numpy.random.default_rng`, 40,000 independent
draws, posterior/predictive seeds **41001/41002, 42001/42002, 43001/43002**. Data are
stipulated original fictional values, not generated data. Known constants are
assumptions. Central intervals use .05/.95. Report actual MCSE for each reported
draw-based mean/probability; compare within `6*MCSE + deterministic_tolerance`.
Keep quadrature error separate from MCSE. Main tables should use deterministic
integrated quantities when available. No adaptive seed search.

## E01: Gaussian MRP

Eighteen observations belong to a register of 900 dwellings. Six cells are district
A/B/C × heating category 0/1; predictor x is fixed at −.5/+.5. The last cell is empty
in the sample and contains 220 population members. Exact responses/counts and
the 6×8 cell design H and 18×8 observation design A are stored in the specification.
Condition on memberships/sample sizes; assume outcome-independent selection within
cells. A cell effect is exchangeable conditional on the fixed predictor.

Model (Normal second argument is variance):

```
y_i | theta ~ Normal(mu[cell_i], 1)
mu_j = beta0 + beta1*x_j + u_j
beta0 ~ Normal(0,4); beta1 ~ Normal(0,1)
u_j | tau ~ Normal(0,tau^2), independently
tau ~ HalfNormal(scale=1)
theta = [beta0,beta1,u1,...,u6]
D_tau = diag(4,1,tau^2,...,tau^2)
C_tau = I + A D_tau A.T
m_tau = D_tau A.T solve(C_tau,y)
V_tau = D_tau - D_tau A.T solve(C_tau,A D_tau)
p(tau|y) proportional to Normal(y;0,C_tau) * HalfNormal(tau;1)
```

Use Cholesky solves, not explicit inverse. Observation-space formulas define the
tau=0 limit without division by tau². Preserve normalizing constants for evidence.
For a general beta mean use observation residual y−A m0; the stipulated mean is zero.
Cell posterior conditional moments are H m_tau and H V_tau H.T. Integrated
covariance is E[H V_tau H.T] + Cov(H m_tau). Compute target variance with the full
quadratic form, including shared beta and scale-induced covariance.

Targets must remain distinct:

- Population mean parameter M = (N_j/N).T mu.
- Model-based sample-composition mean = (n_j/18).T mu; also report raw sample mean.
- Realized finite-population mean: observed sum is fixed; predict only N_j−n_j
  unsampled members. Conditional mean = (sum observed y + (N−n).T mu)/900 and
  conditional residual variance = 882/900². Integrate uncertainty of that mean.
  Do not add 1/900 blindly to Var(M) or regenerate sampled members.
- Individual prediction: state the cell or population selection rule and include
  residual variance 1. Mixture over cell choice introduces between-cell variation.

Integrate full tau support with tau=t/(1−t), t∈[0,1), Jacobian (1−t)^−2. Normalize
log prior×likelihood×quadrature weights using logsumexp. Compare Gauss–Legendre
192 and 384; predeclared fallback 768. Independently integrate normalizer and
selected first/second moments via `quad`/`quad_vec`, epsabs=epsrel=1e−10,
limit=250, one worker. Moment agreement: abs error ≤1e−8+1e−8|reference|;
normalization error ≤1e−12. Report refinement and adaptive estimates, not only pass.
Use stable centering/scaling for evidence integrals; state any normalization offset.

Invert the integrated conditional Normal CDF for target intervals (`brentq`,
xtol=1e−9, initial bracket [−16,16], at most ten outward doublings). A weighted
average of component interval endpoints is not an interval of the mixture.
Draw a quadrature node then a conditional Gaussian vector; transform each **joint**
cell-mean draw. Discrete quadrature approximates continuous scale integration.

Independent anchors and edges:

1. Prior N(0,4), one y=2 with variance 1 gives posterior mean 8/5, variance 4/5.
2. At tau=.75 compute coefficient precision D^-1+A.T A independently; compare to
   observation-space moments, atol=rtol=1e−10. Independently construct the marginal
   multivariate Normal density.
3. No data recovers prior moments/target; empty and zero-population cells, duplicate
   predictor rows, near-complete pooling, cell permutation, invalid shapes and
   population sizes. Reject nonfinite y, invalid indexes, nonpositive scales,
   noninteger/negative counts, n_j>N_j and total population zero.
4. Full joint-draw weighted moments agree within six measured MCSE plus integration
   tolerance. Deterministic comparisons must not use a Monte Carlo allowance.

Investigations: retain the fitted posterior and change N to (80,120,100,180,120,300).
Report M′, M′−M, their joint uncertainty and empty-cell contribution. Separately
impose +.5°C for unsampled members: the realized mean shifts .49. This sensitivity
parameter is unidentified by the observed likelihood. Finally refit under the
prospectively declared HalfNormal(.5) pooling prior and show empty-cell dependence.
None establishes within-cell ignorability, overlap or operational survey adequacy.

## E02: learned two-Poisson mixture

Data: `[0,0,1,1,2,2,3,7,8,9,10,12]`, independent equal-duration windows. Unknown
pi~Beta(1,1), rates iid Gamma(shape=2, rate=.5); z_i~Bernoulli(pi),
y_i~Poisson(lambda[z_i]). pi=P(z_i=1); all exposures are one.

For general alpha, Gamma shape a/rate b, allocation component counts n_k and sums S_k:

```
log p(y,z) = betaln(alpha+n1,alpha+n0) - betaln(alpha,alpha)
  + sum_k [a*log(b)-gammaln(a)+gammaln(a+S_k)-(a+S_k)*log(b+n_k)]
  - sum_i gammaln(y_i+1)
```

Enumerate all 2^N allocations (N≤12); normalize with logsumexp. Include empty
components: their rate conditional remains the proper prior. Given a fresh sampled
allocation, independently draw pi~Beta(alpha+n1,alpha+n0) and
lambda_k~Gamma(a+S_k,b+n_k); NumPy's Gamma takes scale=1/rate. Fresh independent
allocation draws are not a Gibbs chain; parameters are only conditionally independent.

With r_k=a+S_k, b_k=b+n_k and w_k=(alpha+n_k)/(2alpha+N),

```
g_k(m) = Gamma(r_k+m)/(Gamma(r_k)*m!) * (b_k/(b_k+1))^r_k * (1/(b_k+1))^m
P(Ynew=m|y) = sum_z P(z|y) * sum_k w_k(z)*g_k(m)
E(lambda_k|z) = r_k/b_k
E(lambda_k^2|z) = r_k*(r_k+1)/b_k^2
C_ij = sum_z P(z|y) * 1[z_i=z_j]
```

Obtain predictive moments analytically. Display PMF 0..30 plus an explicitly
computed >30 survival category; never renormalize a truncated PMF. For invariant
random-mixture-mean moments retain Beta second/cross moments and conditional rate
moments, then integrate allocation uncertainty. Sorted rates are permitted only
with a stated definition; swap associated weights when sorting each draw.

Under symmetric priors P(z|y)=P(1−z|y), P(z_i=1|y)=1/2, E(pi|y)=1/2 and labelled
rate marginals coincide. These identities do not imply no information. Co-clustering,
prediction and mixture mean remain meaningful. Do not interpret labels as physical
populations. Distinguish product_i sum_k w_k p(y_i|k) from sum_k w_k product_i p(y_i|k).

Independent count formulation: D_0(0,0)=1 and
D_(i+1)(n,s)=D_i(n,s)+D_i(n−1,s−y_(i+1)). Each count of subsets with size n/sum s
multiplies a separately implemented collapsed weight. Sum counts =2^N. Compare
evidence and invariant prediction without calling the primary weight function or
using its bit arrays (atol=1e−11, rtol=1e−10).

Separate anchor priors Beta(1,1), Gamma(1,1): no data predictive P(0)=1/2; one zero
P(next 0)=11/18 and predictive mean 2/3; two zeros evidence 11/36 and co-cluster 8/11.
Independently integrate the ordinary two-zero likelihood with Beta-weighted Jacobi
order 8 and Gamma-weighted generalized Laguerre orders 32/64; compare to rational
evidence within 1e−10. Keep factorial/normalization constants.

Test label/row permutation, co-cluster symmetry/diagonal, normalization (1e−12),
all-zero and repeated counts, N=0,1,12, empty components, fractional prior shapes,
invalid/nonfinite/noninteger/negative observations and N>12. Use measured MCSE for
draw checks; one parameter draw per simulated replicate dataset, separate allocations
per observation. Change final 12 to 4 with all priors/seeds held fixed; compare tail,
co-clustering and sorted separation without presupposing direction. Also change
alpha to .5 alone, examining empty-component probability and prediction.

## E03: learned-transition binary HMM

Observations `[0,0,1,1,1,0,0,1,1,0]`; fixed initial P(S1=1)=.4; fixed emissions
P(Y=1|S=0)=.15, P(Y=1|S=1)=.80. Independent p01,p10~Beta(2,5).
T rows are origin states: `[[1-p01,p01],[p10,1-p10]]`. There is **no transition
before observation one**, and the initial law is not a stationary distribution.

At fixed transitions, alpha1(s)=rho_s e_s(y1);
alpha_t(s)=e_s(y_t) sum_r alpha_(t−1)(r) T_rs.
beta_T(s)=1; beta_t(r)=sum_s T_rs e_s(y_(t+1)) beta_(t+1)(s).
Use scaled/log messages and retain log evidence. Internally log(0)=−infinity is
allowed; detect impossible evidence explicitly, never serialize NaN/Infinity.

For every quadrature node q retain prefix likelihood L_t(q), normalized conditional
filter f_t(q), full likelihood L_T(q), and conditional smoother s_t(q). Integrate
filters with prior_weights(q)*L_t(q), smoothers with prior_weights(q)*L_T(q).
Using full-data transition weights in an earlier filter leaks future evidence.

Beta(A,B) prior quadrature uses `roots_jacobi(order,B-1,A-1)`, p=(x+1)/2,
weights=w/w.sum(). Compare tensor orders 12 and 24. For ≤12 observations plus
three forecast steps, these unnormalized probabilities/low moments are polynomial
integrals; sparse-node posterior quantiles are not justified by that fact.
Transition intervals, if reported, invert the collapsed Beta-mixture CDF with
`brentq`, xtol=1e−9. Compare paths/quadrature at atol=1e−11, rtol=1e−10.

Independent collapsed paths (count transitions only between observed states):

```
p(s,y) = rho[s1] * product_t e_(s_t)(y_t)
       * B(2+n01,5+n00)/B(2,5) * B(2+n10,5+n11)/B(2,5)
p01 | s,y ~ Beta(2+n01,5+n00)
p10 | s,y ~ Beta(2+n10,5+n11)
```

Sum normalized full paths for smoothing; enumerate **each prefix independently**
for filters. A decoded path is a joint MAP path of the integrated path posterior,
not a string of marginal modes. For exact ties choose lexicographically first state
sequence and disclose the rule (do not invent a posterior probability advantage).

At a fixed node, nextState1=(1−f_T)*p01+f_T*(1−p10); integrate jointly with its full
node posterior. nextAlert=.15*(1−nextState1)+.80*nextState1. The joint probability
of three future alerts v is

`E_q|y [ f_T_row(q) T_q D(v1) T_q D(v2) T_q D(v3) 1 ]`.

Compare all eight patterns to a separate collapsed future-state expansion with
Beta-ratio transition-count updates. Normalize/marginalize to the one-step result.
For predictive draws sample posterior path, then its conditional transition pair;
start at that path's last state and retain the pair for the entire future path.
Do not multiply separately averaged states/transitions or redraw parameters each step.

Fixed anchor: initial1=.5, p01=p10=.25, emissions=(.2,.8), observations=(1,0).
Filters=(4/5,13/41), smoothers=(28/41,13/41), evidence=41/200,
nextState1=67/164 and nextAlert=73/164. Use independent rational arithmetic and path
sums for Python/JS comparisons (atol=1e−12). These are prospective test anchors.

Test T=1 leaves transitions at their prior; T=0 predicts S1 with no transition;
equal emissions preserve unconditional state inference; deterministic emissions
identify possible paths; absorbing/alternating transitions; endpoint and malformed
probabilities; prior shapes below one; impossible evidence. UI errors identify the
first impossible prefix (one-based). No posterior exists for impossible full evidence.
For uninformative emissions, initial (.6,.4) and rows (7/12,5/12),(0,1), two-time
path masses (.35,.25,0,.40) give MAP path 11 and marginal modes 01.

Change suffix after time six to `[0,0,1,1,1,0,1,1,1,1]`. Filters through time six
must agree (atol=1e−12); full-data transitions and early smoothers may change.
Do not force a prespecified direction or conflate state and observation prediction.

## Six figures and teaching handoff

Every figure is original, rendered from saved measured results, with source/spec/
result/render-code hashes, short alt text and an adjacent visible numerical table
and interpretation. Use `outputs/figures/E01_01.svg` through `E03_02.svg`.

| Figure | Purpose and visible equivalent |
|---|---|
| E01_01 | Sample/population proportions beside raw/posterior cell means; table N,n,x, raw mean or “not observed”, posterior mean/interval. Explicit empty cell. |
| E01_02 | Sample-composition, population-parameter, realized-mean and changed-target contrast; definitions, means, SDs/intervals, within/between-scale variance. |
| E02_01 | Label symmetry and invariant mixture mean; discrepancies, sorted rates, mixture-mean uncertainty and measured MCSE. |
| E02_02 | Co-clustering plus predictive PMF and changed data; full 12×12 table/download, 0..30 probabilities and explicit tail. |
| E03_01 | Original/changed-suffix prefix filters and full-data smoothers; observations, information sets, four probability columns and prefix discrepancies. |
| E03_02 | Prior/posterior transitions and eight three-alert pattern probabilities; means/intervals and integrated versus plug-in comparison. Explain measured discrepancy without universal direction claims. |

Chapters need 1,800–3,000 original words, prerequisites, question/target, complete
generative model, two worked steps, actual measured interpretations, attempt-before-
reference investigation and limitations. None of the assessed instances in
`instructor/assessment_design_v1.json` may be solved in these public explanations.
That file contains prospective **unverified** key anchors, 24 staged hint drafts
and eight-point rubrics. Author full keys and independently verify every one before
publication. Audit all twelve against chapters, figures/tables, labs, outputs,
notebooks, browser defaults/static content and every learner ZIP member.
