
# Case Studies and Failure Boundaries

## Purpose and method

This chapter puts the preceding mathematics under pressure. Four small case studies isolate different failure mechanisms: coefficient nonidentifiability, class imbalance and decision mismatch, deep-network signal and branch behavior, and leakage plus distribution shift. Their scale permits exact calculation. The point is not that real applications are tiny; it is that a complicated dataset should not be allowed to hide a broken contract.

Each study uses the same audit sequence:

1. declare the observational unit, prediction object, timing, and permitted information;
2. write the finite objective and baseline;
3. derive a result on a hand-checkable core;
4. verify gradients, states, and numerical identities independently;
5. inject a plausible failure and require the audit to detect it;
6. state what the evidence supports and what remains outside scope.

None of these studies is medical, financial, legal, or operational advice. Thresholds and costs are mathematical inputs, not recommendations. Population, causal, fairness, and safety claims need application-specific evidence beyond a successful finite computation.

## Case study I: prediction under collinearity and unit changes

### Contract

Suppose the observational unit is one calibrated laboratory sample. At prediction time, two nonnegative sensor readings $x_{1},x_{2}$ are available, and the real target $y$ is measured later. On the three training samples,

| Row | $x_{1}$ | $x_{2}$ | $y$ |
| ---: | ---: | ---: | ---: |
| 1 | 1 | 2 | 3 |
| 2 | 2 | 4 | 6 |
| 3 | 3 | 6 | 9 |

We fit the no-intercept linear predictor

$\widehat{y}=w_{1}x_{1}+w_{2}x_{2}$

by squared error. The second sensor is exactly twice the first on training rows.

### Fits can be unique while coefficients are not

For every row,

$\widehat{y}=(w_{1}+2w_{2})x_{1}$.

Every coefficient pair satisfying

$w_{1}+2w_{2}=3$

fits with zero residual. The fitted vector on these three rows is uniquely $(3,6,9)$, but the coefficient is not identified. Gradient descent, a pseudoinverse, and a regularized problem can choose representatives without creating information that distinguishes the sensors.

The minimum-Euclidean-norm exact fit solves

$\min w_{1}^{2}+w_{2}^{2}$ subject to $w_{1}+2w_{2}=3$.

The Lagrange conditions give $w=\lambda (1,2)$ and $5\lambda =3$, hence

$w_{\min}=(\frac{3}{5},\frac{6}{5})$.

This is a geometric convention induced by the coordinate norm. If sensor 2 is stored in different units, the same physical predictor has a different parameter norm and ridge selects a different physical representative unless the penalty is transformed consistently.

### A deployment row exposes the ambiguity

Suppose a valid future sample has $(x_{1},x_{2})=(1,0)$. The exact-fit family predicts $w_{1}$, which can be any real number because $w_{1}=3-2w_{2}$. Training predictions cannot identify this extrapolation. A narrow singular value, null-space direction, or leverage warning is not merely numerical inconvenience; it can mark a question the data did not answer.

### Scaling must transform all layers of the problem

Write a coordinate change $x'=Dx$ with invertible diagonal $D$. To preserve predictions, $w'=D^{-\top}w$. A penalty $\lambda \lVert w'\rVert^{2}$ corresponds in original coordinates to

$\lambda w^{\top}D^{-1}D^{-\top}w$,

not generally $\lambda \lVert w\rVert^{2}$. Standardization can improve optimization conditioning, but reporting coefficients or regularization effects requires mapping them back with units. If a scale is learned from data, it must be fit on training rows only.

### Evidence boundary

The exact calculations establish rank deficiency and the behavior of declared algorithms on these rows. They do not establish which sensor is causally relevant, how the relation behaves when calibration changes, or how future residuals are distributed. A held-out set containing the same exact collinearity cannot resolve the extrapolation either.

## Case study II: probability, imbalance, and action costs

### Contract and baseline

There are 100 independent cases in a fixed training table, with 10 positive and 90 negative binary outcomes. Consider an intercept-only probability forecast $p$. Mean log loss is

$R(p)=-(10 \log p+90 \log\left(1-p\right))/100$.

Differentiating gives

$R'(p)=-0.1/p+0.9/(1-p)$.

The unique minimizer is $p=0.1$. This constant forecast is the correct log-loss baseline for this table. The always-negative label has 90% accuracy, demonstrating why accuracy alone can reward ignorance of the probability task.

### Class weighting changes the probability target

Give positive examples weight $\alpha =9$ and negatives weight $1$. The weighted conditional optimum from the loss chapter is

$q^{\star}=\alpha \eta /(\alpha \eta +1-\eta )$.

At empirical prevalence $\eta =0.1$, $q^{\star}=0.5$. The weighted score is not an estimate of the original event probability. If sampling and weighting assumptions are valid and $\alpha$ is known, invert by odds:

$\eta =q/[\alpha -(\alpha -1)q]$.

At $q=0.5$, this returns $0.1$. Finite model misspecification, regularization, selection, and shift can prevent exact recovery.

### Forecasts and decisions are different objects

Suppose a false positive has declared cost $C_{\mathrm{FP}}$ and a false negative cost $C_{\mathrm{FN}}$, while correct actions cost zero. Given calibrated probability $\eta$, action “positive” has conditional cost $C_{\mathrm{FP}}(1-\eta )$ and action “negative” has cost $C_{\mathrm{FN}}\eta$. Choose positive exactly when

$\eta \ge C_{\mathrm{FP}}/(C_{\mathrm{FP}}+C_{\mathrm{FN}})$.

For $C_{\mathrm{FP}}=1$, $C_{\mathrm{FN}}=9$, the threshold is $0.1$. This numerical example illustrates a formula; it does not prescribe real-world costs. Estimating probabilities with a proper score and choosing an action under a separate cost can be clearer than changing training targets by class weights.

### Denominators and confusion summaries

For a thresholded evaluation, record all four counts. Sensitivity divides true positives by actual positives; specificity divides true negatives by actual negatives; positive predictive value divides true positives by predicted positives. A slice with no positives makes sensitivity undefined, not zero. Macro averaging and micro aggregation answer different weighting questions.

Suppose a held-out table has $TP=6$, $FN=4$, $FP=9$, $TN=81$. Then sensitivity is $0.6$, specificity $0.9$, positive predictive value $0.4$, and accuracy $0.87$. The same confusion table does not reveal probability calibration or log loss.

### Stable computation remains necessary

For binary logit $a$ and label $y$, compute

$\ell (a,y)=\max\left(a,0\right)-ay+\log\left(1+\exp\left(-\lvert a\rvert\right)\right)$.

At $a=1000,y=1$, this formula is approximately zero without forming $\exp\left(1000\right)$. Numerical stability preserves the intended finite objective; it does not correct mislabeled rows, an invalid threshold, or a deployment prevalence shift.

### Evidence boundary

The finite optimum and confusion calculations say nothing by themselves about calibration in a new population, unequal dependence among cases, subgroup harms, treatment effects, or the legitimacy of a decision cost. A class label is not a causal intervention.

## Case study III: a tiny network that is exactly inspectable

### An exact XOR representation

For binary inputs $(x_{1},x_{2})\in \{0,1\}^{2}$, define

$h_{1}=\operatorname{ReLU}(x_{1}+x_{2})$,

$h_{2}=\operatorname{ReLU}(x_{1}+x_{2}-1)$,

$f=h_{1}-2h_{2}$.

The four forward values are:

| $(x_{1},x_{2})$ | $h_{1}$ | $h_{2}$ | $f$ |
| --- | ---: | ---: | ---: |
| $(0,0)$ | 0 | 0 | 0 |
| $(1,0)$ | 1 | 0 | 1 |
| $(0,1)$ | 1 | 0 | 1 |
| $(1,1)$ | 2 | 1 | 0 |

Thus the network represents XOR exactly as a real output on this finite domain. A linear affine function cannot: equations at $(0,0),(1,0),(0,1)$ force intercept $0$ and both slopes $1$, predicting $2$ at $(1,1)$ rather than $0$.

### Representation does not guarantee gradient discovery

The exact parameters place the second hidden preactivation at the ReLU kink for the two positive examples. A derivative program must declare its trace convention at zero. Gradient checking must use directions that either freeze the active set or explicitly compare directional derivatives. A centered difference straddling the kink can disagree with both one-sided traces without indicating a bug.

If every hidden unit starts with identical incoming weights and bias, their gradients can remain identical under a symmetric loss and update. Width then fails to create distinct features. Random or otherwise asymmetric initialization breaks this parameter symmetry, but a single successful seed does not characterize the training procedure.

### Signal propagation experiment

For a scalar depth-$L$ plain linear chain $h_{L}=(\prod _{l} w_{l})x$, both forward amplification and the input derivative equal $\prod _{l} w_{l}$. With every $w_{l}=0.8$ and $L=20$, the magnitude is $0.8^{20}\approx 0.01153$. With $w_{l}=1.2$, it is about $38.34$.

A scalar residual chain $h_{l+1}=(1+\alpha a_{l})h_{l}$ has derivative $\prod _{l}(1+\alpha a_{l})$. Setting $a_{l}=-1$ and $\alpha =1$ cancels the identity exactly, showing that a skip path is not an unconditional safeguard. Setting $\alpha =1/L$ and bounded $a_{l}$ controls coarse depth growth but does not settle nonlinear training.

### Initialization ledger

For each seed and layer, store preactivation mean, second moment, fraction at the ReLU kink or inactive side, activation second moment, adjoint second moment, and a small-set Jacobian singular-value summary. Compare these to the initialization chapter's assumptions. Report every predetermined seed. Selecting the run whose ledger looks best and then presenting it as typical is another form of adaptive selection.

### Evidence boundary

The truth table proves representability only on four inputs. A trained network with zero error might implement a different extension between or outside those points. Parameter distance is uninformative under hidden-unit permutations and homogeneous rescalings; compare functions on a declared domain. Nothing in XOR supports a claim about natural data, deep architectures, or causal reasoning.

## Case study IV: leakage and unsupported shift

### Timing failure

Suppose the task is to predict at ticket creation whether resolution will exceed two days. A feature named `final_number_of_messages` is recorded only when the ticket closes. It may produce excellent random-split accuracy because it contains post-prediction information. No optimizer or regularizer can repair the timing violation. The remedy is to exclude it or redefine the prediction time and use case.

Random row splitting can also leak repeated customers across train and test. A model can exploit customer identity or near-duplicate text. A group-aware and time-aware split targets a harder but more relevant question. Whether it approximates deployment still depends on future process stability.

### Exact spurious-feature shift

Let binary label $y\in \{-1,1\}$ and two features $r,s$. In the training environment, set $r=y$ for 75% of cases and $s=y$ for 100%. In deployment, suppose the stable feature remains 75% aligned but $s=-y$ for every case after a process change.

The rule $f_{s}=\operatorname{sign}(s)$ has zero training error and 100% deployment error. The rule $f_{r}=\operatorname{sign}(r)$ has 25% error in both environments. Empirical risk minimization on training accuracy prefers $s$; regularization need not reject it because it can have the same coefficient norm as $r$. The failure is absence of support for the changed relation, not failure to minimize the training objective.

If environment labels are available during development, stress tests can compare performance and feature behavior across them. They provide evidence only for observed changes. Robustness to a declared uncertainty set is a different optimization problem whose set must be justified.

### Causal boundary

Predictive stability does not by itself identify an intervention effect. A variable can be stable because it is a proxy for an unmeasured common cause; manipulating it may not change the outcome. Conversely, a causally relevant variable can have weak predictive variation in a selected sample. Causal conclusions require a causal question, assumptions, design, and identification argument not supplied by loss minimization.

## Cross-case diagnosis matrix

| Symptom | Candidate mechanism | Decisive check | Nonconclusion |
| --- | --- | --- | --- |
| Many coefficient vectors, same fit | rank deficiency or symmetry | null-space/function comparison | coefficients are causally interchangeable |
| High accuracy, poor positive recall | prevalence and threshold | full confusion denominators | class weighting will calibrate probabilities |
| Gradient check fails near ReLU zero | branch change | one-sided/directional checks | reverse mode is necessarily wrong |
| Restart diverges immediately | omitted state or draw order | transition-level state diff | stochastic training is irreproducible in principle |
| Test score collapses over time | shift, leakage, process change | timestamped lineage and slice audit | any one feature caused the change |
| Small training loss, unstable coefficients | conditioning/nonidentifiability | singular values and perturbation study | future predictions must be unstable everywhere |

The matrix maps observations to tests, not diagnoses. Several mechanisms can coexist.

## Exercises

1. Find the full exact-fit coefficient family in Case I.
2. Derive the minimum-norm member of that family without using the stated result.
3. Give two exact-fit coefficient pairs and compare their prediction at $(1,0)$.
4. Under $x'=Dx$, derive the coefficient transformation preserving predictions.
5. Explain why ridge cannot establish which collinear sensor is causally important.
6. Derive the intercept-only log-loss optimum for 10 positives and 90 negatives.
7. Compute the positive-weighted optimum for weight $9$ and invert it to the original prevalence.
8. Derive the cost-sensitive probability threshold.
9. Compute sensitivity, specificity, positive predictive value, and accuracy for the stated confusion table.
10. Explain why a zero denominator should yield “undefined” rather than zero.
11. Prove that no affine scalar function represents XOR on all four binary inputs.
12. Verify every forward value of the two-ReLU XOR network.
13. Explain why a centered gradient check can fail at the exact XOR parameters without a reverse-mode bug.
14. Compute $0.8^{20}$ and compare its meaning with $1.2^{20}$ for a scalar chain.
15. Give a residual-block parameter choice that annihilates the input derivative.
16. Explain why hidden-unit permutation can make parameter distance large while function distance is zero.
17. Identify the precise contract violation in using `final_number_of_messages` at ticket creation.
18. Compute training and deployment errors of $\operatorname{sign}(s)$ and $\operatorname{sign}(r)$ in the shift example.
19. Explain why equal $L^{2}$ regularization on $r$ and $s$ cannot distinguish their stability.
20. For each case, write the strongest justified claim in one sentence and one prohibited stronger claim.

## Full solutions

1. Zero residual requires $(w_{1}+2w_{2})x_{1}=3x_{1}$ on nonzero rows, so $w_{1}+2w_{2}=3$. Parameterize by $t=w_{2}$: $(w_{1},w_{2})=(3-2t,t)$ for every real $t$.
2. Minimize $(3-2t)^{2}+t^{2}=9-12t+5t^{2}$. Its derivative is $-12+10t$, so $t=\frac{6}{5}$ and $w_{1}=\frac{3}{5}$. The second derivative $10$ is positive.
3. $(3,0)$ and $(1,1)$ both satisfy the constraint and fit training rows. At $(x_{1},x_{2})=(1,0)$, they predict $3$ and $1$, respectively. Equal training fit does not identify that row's prediction.
4. Requiring $w'^{\top}x'=w^{\top}x$ for every $x$ gives $w'^{\top}D=w^{\top}$, hence $D^{\top}w'=w$ and $w'=D^{-\top}w$.
5. Ridge selects a coordinate-norm-preferred representative. The finite observations remain unchanged and contain no intervention or independent variation separating the sensors. Numerical uniqueness added by the penalty is not causal identification.
6. For positive fraction $\eta =0.1$, derivative of $-\eta \log p-(1-\eta )\log\left(1-p\right)$ is $-\eta /p+(1-\eta )/(1-p)$. Setting it to zero gives $p=\eta =0.1$; strict convexity on $(0,1)$ makes it unique.
7. $q^{\star}=9(0.1)/[9(0.1)+0.9]=0.9/1.8=0.5$. Inversion gives $\eta =0.5/[9-8(0.5)]=0.5/5=0.1$.
8. Positive action cost is $C_{\mathrm{FP}}(1-\eta )$; negative action cost is $C_{\mathrm{FN}}\eta$. Choose positive when the first is no larger: $C_{\mathrm{FP}}\le \eta (C_{\mathrm{FP}}+C_{\mathrm{FN}})$, or $\eta \ge C_{\mathrm{FP}}/(C_{\mathrm{FP}}+C_{\mathrm{FN}})$.
9. Sensitivity $=6/(6+4)=0.6$; specificity $=81/(81+9)=0.9$; positive predictive value $=6/(6+9)=0.4$; accuracy $=(6+81)/100=0.87$.
10. The ratio asks for performance conditional on a group that has no members in that slice. Assigning zero invents failures rather than representing absence of evidence. Preserve numerator and denominator and mark the ratio undefined.
11. Let $f=b+w_{1}x_{1}+w_{2}x_{2}$. Values at $(0,0),(1,0),(0,1)$ require $b=0,w_{1}=1,w_{2}=1$. Then $f(1,1)=2$, contradicting the required XOR value $0$.
12. At sums $0,1,1,2$, $h_{1}$ is $0,1,1,2$ and $h_{2}=\operatorname{ReLU}(\sum-1)$ is $0,0,0,1$. Subtracting twice $h_{2}$ gives $0,1,1,0$.
13. Two examples place $h_{2}$ exactly at ReLU input zero. A centered perturbation can activate one side and deactivate the other, while reverse mode follows one declared derivative convention at zero. Compare directional derivatives or move to a smooth point before judging the implementation.
14. $0.8^{20}\approx 0.011529$, so signals and input derivatives shrink by about a factor 87 in this scalar model. $1.2^{20}\approx 38.338$, so they grow substantially. These are exact linear-chain results, not universal neural-network rates.
15. In $R(x)=x+\alpha ax$, take $\alpha a=-1$; for example $\alpha =1,a=-1$. Then $R(x)=0$ and derivative $1+\alpha a=0$.
16. Permuting hidden units changes the coordinate ordering and can move many parameter entries, but paired permutation of incoming and outgoing weights leaves the computed function identical. Function distance on any input set is then zero.
17. The feature is unavailable at the declared prediction time and contains information accumulated after the decision point. It violates temporal availability regardless of its validation score.
18. $\operatorname{sign}(s)$ has 0% training error because $s=y$ and 100% deployment error because $s=-y$. $\operatorname{sign}(r)$ has 25% error in both environments by construction.
19. Both one-feature rules can use the same coefficient magnitude and therefore incur the same $L^{2}$ penalty. The penalty encodes coordinate size, not invariance of the feature–label relation across environments.
20. Case I: justified—training design is rank deficient and future predictions along its null direction are unidentified; prohibited—the first sensor causes the target. Case II: justified—the finite intercept-only log-loss optimum is $0.1$; prohibited—the same probability and cost threshold apply to every future population. Case III: justified—the displayed network represents XOR on four inputs; prohibited—the architecture will reliably train or generalize on arbitrary data. Case IV: justified—the spurious rule fails under the declared shift; prohibited—the stable feature has an identified causal effect.

## Project 1: comparative auditable trainer

Implement three dependency-free models on fixed numeric tables: ridge linear regression, binary logistic regression, and a two-hidden-unit ReLU network. Use one common pipeline interface and produce a machine-readable ledger.

Acceptance specification:

- include row IDs, timing metadata, split fingerprints, train-only transformations, and immutable raw arrays;
- verify linear and logistic gradients against exact formulas and directional differences;
- verify network VJPs against JVP/VJP duality away from kinks and one-sided directions at a declared kink;
- run a fixed grid of scaling, collinearity, prevalence, class-weight, initialization, and residual-scale conditions;
- record loss numerators/denominators, gradient norms, condition estimates for the small matrices, state digests, and every predetermined seed;
- inject global preprocessing leakage, omitted optimizer state, and naive exponential log loss; require distinct failures;
- compare parameters only after applying relevant symmetry or coordinate maps, and always compare predictions directly;
- provide tables and prose alternatives for every plot.

Expected anchor results include the minimum-norm coefficient $(0.6,1.2)$, the unweighted intercept probability $0.1$, weighted target $0.5$, XOR forward vector $(0,1,1,0)$, and restart equality for an uncorrupted checkpoint. The report must separate exact identities, floating observations, and claims not tested.

## Project 2: shift and leakage challenge set

Construct a deterministic challenge set with at least four environments: stable relation, spurious correlation, correlation reversal, and timestamp leakage. Predeclare the model set and audit before viewing challenge outcomes.

Executable verification requirements:

1. Generate or enumerate rows from fixed formulas with stable group and time IDs.
2. Provide both a deliberately invalid random-row split and a group/time-aware split.
3. Fit every transform separately under each pipeline and prove by stored source-row IDs which rows informed it.
4. Train the same regularized linear or logistic rule under both pipelines.
5. Report environment-by-environment loss and denominator, not only a pooled average.
6. Include the exact $s=y$ to $s=-y$ anchor where the spurious rule changes from 0% to 100% error.
7. Add a counterexample in which the stable feature is less accurate on training data but better under reversal.
8. Remove environment labels from training in one condition to demonstrate that an unobserved shift cannot be diagnosed from training fit alone.
9. Record selection decisions and keep one final environment untouched until the configuration is frozen.
10. End with a claim ledger naming observed environments, unobserved shifts, causal nonclaims, and any application decisions still requiring domain authority.

The challenge set evaluates detection and reporting on declared shifts. Passing it does not certify robustness to arbitrary future changes.

## Project appendix

The [projects, full solutions and reference appendix](projects-solutions-reference.md) continues these case studies. It retains the original project manuscript and its solution architecture as back matter.
