var e=`---
id: course-mathematics-for-machine-learning
title: "Mathematics for Machine Learning: Structure, Uncertainty, and Generalization"
level: undergraduate
estimated_minutes: 780
license: CC BY-SA 4.0
---

# Mathematics for Machine Learning: Structure, Uncertainty, and Generalization

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-mathematics-for-machine-learning/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Machine learning is not one algorithm. It is a chain of mathematical choices: represent observations, specify a prediction or decision target, choose a family of rules, define a loss, optimize an empirical objective, and justify what—if anything—should transfer beyond the observed sample.

This prerequisite-light course repairs the required linear algebra, multivariable calculus, probability, statistics, and optimization as they become useful. Secondary algebra, functions, and basic probability are enough to begin. It is a standalone route, but each module links to deeper Atlas material.

The course keeps four claims separate:

1. a theorem follows from stated assumptions;
2. a computation implements a defined algorithm;
3. a simulation describes generated data under a chosen model;
4. an empirical result describes a finite dataset and design.

Suggested pace: ten modules, one problem set each, then the capstone.

## Entry diagnostic and 13-hour route

Before Module 1:

1. Multiply $\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}(3,-1)^{\\mathsf T}$.
2. Differentiate $x^2+3x$.
3. If 20 of 50 equally weighted outcomes are successes, state their empirical
   frequency.
4. Explain why selecting a model on test outcomes makes those same outcomes
   unsuitable for an untouched final assessment.

The answers are $(1,-1)^{\\mathsf T}$; $2x+3$; $0.4$; and the test outcomes
have influenced the procedure, so reuse gives an adaptively optimistic
estimate. Repair linear algebra, derivatives, or probability before the
module that first uses the missing skill.

| Stage | Modules | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Geometry and sensitivity | 1–3 | [Arrays and shape contracts](#/item/book-optimization-backprop-from-scratch?chapter=arrays-linear-maps-shapes), [least-squares geometry](#/item/book-optimization-backprop-from-scratch?chapter=projection-least-squares-geometry), and [derivatives and gradients](#/item/book-optimization-backprop-from-scratch?chapter=derivatives-differentials-shapes) | Dimension ledger, projection derivation, and gradient check |
| 2. Risk, optimization, and generalization | 4–6 | [Learning problem tuple](#/item/book-statistical-learning-generalization?chapter=the-learning-problem-is-a-tuple), [regularization](#/item/book-statistical-learning-generalization?chapter=regularization-and-model-selection), and [shift](#/item/book-statistical-learning-generalization?chapter=shift-and-robustness) | Split protocol, optimization certificate, and claim boundary |
| 3. Networks | 7 | [Reverse-mode backpropagation](#/item/book-optimization-backprop-from-scratch?chapter=reverse-mode-adjoint-backprop) and [network initialization](#/item/book-optimization-backprop-from-scratch?chapter=multilayer-networks-initialization) | Hand-derived layer gradients checked by finite differences |
| 4. Kernels and structure | 8–9 | [Positive-semidefinite kernels](#/item/book-structured-probabilistic-learning?chapter=positive-semidefinite-kernels), [GP conditioning](#/item/book-structured-probabilistic-learning?chapter=conditioning-a-gaussian-process), and [graphical models](#/item/book-structured-probabilistic-learning?chapter=directed-graphical-models) | Kernel eigenvalue audit and conditional-independence example |
| 5. Reproducible synthesis | 10, assessment, capstone | [Training pipelines](#/item/book-optimization-backprop-from-scratch?chapter=training-pipelines-reproducibility) | Dependency-free predictor and evidence ledger |

## Module 1: data as vectors, matrices, and questions

Represent one observation by a feature vector $x\\in\\mathbb R^d$ and its outcome by $y$. Stack $n$ row vectors into a design matrix $X\\in\\mathbb R^{n\\times d}$ and outcomes into $y\\in\\mathbb R^n$. A linear predictor uses

$f_w(x)=x^{\\mathsf T}w$,

so all training predictions are $Xw$.

Dimensions are a correctness tool. If $X$ is $n\\times d$, then $w$ must be $d\\times 1$, $Xw$ is $n\\times 1$, and $X^{\\mathsf T}(Xw-y)$ is $d\\times 1$, matching a gradient with respect to $w$.

Rows need not be independent merely because they occupy different lines. Multiple images of one patient, time-adjacent measurements, or members of one household create dependence. The split and probability model must respect the observational unit.

Before fitting, perform exploratory checks: units, missingness, duplicates, impossible values, outcome prevalence, scale, group structure, time order, and feature availability at prediction time. Exploration can generate hypotheses; it is not automatically confirmatory evidence.

**Representation warning.** Standardizing a feature by subtracting a training mean and dividing by a training standard deviation changes geometry. Fit those constants on training data only. Scaling a categorical code $red=1, blue=2, green=3$ would invent distances that the labels do not contain.

Continue to the Atlas linear-algebra path for basis, rank, projections, and decompositions.

## Module 2: least squares as geometry

For squared error, define

$L(w)=(1/(2n))\\lVert Xw-y\\rVert^{2}$.

The factor $1/2$ simplifies derivatives. The residual vector is $r=Xw-y$. A minimizer makes $Xw$ the orthogonal projection of $y$ onto the column space of $X$. Orthogonality gives the normal equations

$X^{\\mathsf T}(Xw-y)=0$, so
$X^{\\mathsf T}Xw=X^{\\mathsf T}y$.

If $X$ has full column rank, $X^{\\mathsf T}X$ is invertible and the minimizer is unique. Without full rank, fitted values may still be unique while coefficient vectors are not. Forming normal equations can worsen numerical conditioning; QR or SVD is safer in serious computation.

**Worked example.** Fit $y\\approx a+bx$ through points $(0,1),(1,2),(2,2)$. Then

$$
X=\\begin{pmatrix}1&0\\\\1&1\\\\1&2\\end{pmatrix},
\\qquad
y=\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}.
$$

The equations are

$$
\\begin{pmatrix}3&3\\\\3&5\\end{pmatrix}
\\begin{pmatrix}a\\\\b\\end{pmatrix}
=\\begin{pmatrix}5\\\\6\\end{pmatrix}.
$$

Solving gives $a=7/6$, $b=1/2$. Predictions are $7/6,5/3,13/6$; residuals sum to zero because the intercept column is present.

Do not read $b=1/2$ causally. It is the slope of an empirical linear approximation under this feature set and sampling design.

## Module 3: calculus, gradients, and matrix derivatives

A derivative measures local sensitivity. For scalar
$f\\colon\\mathbb R^d\\to\\mathbb R$, the gradient $\\nabla f$ collects partial
derivatives and satisfies

$f(w+\\Delta )\\approx f(w)+\\nabla f(w)^{\\mathsf T}\\Delta$.

The chain rule moves sensitivity through composed maps. For least squares,

$\\nabla L(w)=(1/n)X^{\\mathsf T}(Xw-y)$.

Derive it from differentials. Let $r=Xw-y$; then

$dL=(1/n)r^{\\mathsf T}dr=(1/n)r^{\\mathsf T}X\\,dw$

$=((1/n)X^{\\mathsf T}r)^{\\mathsf T}dw$.

The coefficient of $dw$ is the gradient. This method prevents many transpose mistakes.

For a vector map $z=Wx+b$, perturbations obey $dz=dW x+W dx+db$. Reverse-mode differentiation starts from a scalar loss and propagates vector-Jacobian products backward. Automatic differentiation performs this bookkeeping on the implemented computation graph; it does not validate that the graph represents the intended model.

Use finite differences as an audit:

$[L(w+hv)-L(w-hv)]/(2h)
\\approx\\nabla L(w)^{\\mathsf T}v$.

Test several directions and step sizes. Extremely small $h$ increases floating-point cancellation.

## Module 4: probability, risk, and uncertainty

Let $(X,Y)$ denote a random future observation from a target distribution $P$.
For loss $\\ell$, population risk is

$R(f)=\\mathbb E_P[\\ell(f(X),Y)]$.

Training observes a sample and computes empirical risk

$\\widehat R_n(f)=\\frac1n\\sum_i\\ell(f(x_i),y_i)$.

These are different objects. Empirical risk is a number from observed rows. Population risk is an expectation under a probability model. Connecting them typically requires independent and identically distributed data, exchangeability, mixing, or another explicit sampling assumption.

Under the sufficient condition $\\mathbb E[Y^2]<\\infty$ (square-integrability), conditional expectation gives the ideal squared-error predictor among unrestricted measurable predictors:

$f^{*}(x)=E[Y|X=x]$,

where this denotes a version defined for $P_X$-almost every $x$, with $P_X$ the distribution of $X$. The conditional second moment, mean and variance are finite there. For such an $x$, expand

$E[(Y-a)^{2}|X=x]=\\operatorname{Var}(Y|X=x)+(E[Y|X=x]-a)^{2}$.

Writing $m=E[Y|X=x]$, the cross term vanishes because $E[Y-m|X=x]=0$. The variance is independent of $a$, and $(m-a)^2$ is uniquely minimized at $a=m$. Integrating gives finite minimum population squared risk $E[\\operatorname{Var}(Y|X)]\\le E[Y^2]<\\infty$; predictors agreeing almost everywhere are equivalent for this risk. Mere existence of a finite mean does not ensure finite squared risk or justify this finite-variance argument. For absolute error, any conditional median is optimal instead. The loss determines the target functional.

Bayesian inference introduces a prior and likelihood to produce a posterior distribution. Frequentist guarantees instead describe repeated-sampling behavior of a procedure. Neither label rescues a misspecified sampling process or an outcome that fails to represent the intended construct.

## Module 5: optimization and regularization

Gradient descent updates

$w_{t+1}=w_t-\\eta _t\\nabla L(w_t)$.

For a convex differentiable objective with $L$-Lipschitz gradient, a sufficiently small step gives descent. Neural objectives are generally nonconvex, so low gradient norm is a stationarity diagnostic, not a certificate of the global optimum.

Stochastic gradient descent replaces the full gradient with an unbiased or approximately unbiased mini-batch estimate under the sampling scheme. Its noise can alter exploration and creates variability; persistent nonvanishing gradient noise can leave a nonzero expected error floor at a stable fixed step, but the fixed step alone does not imply one. For example, take $\\ell_1(w)=w^2/2$ and $\\ell_2(w)=w^2$, with a fresh independent uniform index at each step and $\\eta=1/4$. Then $w_{t+1}=(3/4)w_t$ or $w_{t+1}=(1/2)w_t$, so every path obeys $|w_t|\\le(3/4)^t|w_0|\\to0$ and the population risk $R(w)=3w^2/4$ tends to zero along every path, although $\\operatorname{Var}(g_t\\mid w_t)=w_t^2/4>0$ when $w_t\\ne0$; both component gradients vanish at the common minimizer $0$. As a persistent-noise control, take $\\ell_\\xi(w)=(w-\\xi)^2/2$, fresh independent uniform $\\xi_t\\in\\{-1,1\\}$ and the same $\\eta=1/4$, with $w_0=0$. Here $R(w)=(w^2+1)/2$ has minimum $R^*=1/2$, $\\operatorname{Var}(g_t\\mid w_t)=1$ and $\\mathbb E[w_{t+1}^2]=(9/16)\\mathbb E[w_t^2]+1/16$; hence $\\mathbb E[w_t^2]\\to1/7$ and the expected excess risk satisfies $\\mathbb E[R(w_t)-R^*]\\to1/14$. Report seeds and variation across seeds; a seed is not a scientific assumption.

Ridge regression minimizes

$(1/(2n))\\lVert Xw-y\\rVert^{2}+(\\lambda /2)\\lVert w\\rVert^{2}$.

Its stationarity equation is

$(X^{\\mathsf T}X+n\\lambda I)w=X^{\\mathsf T}y$.

For $\\lambda >0$, the matrix is positive definite even when columns of $X$ are dependent. Ridge trades bias for reduced sensitivity and changes the target. In a model with an intercept, one often leaves the intercept unpenalized after centering; state the convention.

Optimization error, estimation error, and approximation error are distinct. Driving training loss lower addresses optimization; it does not by itself reduce future risk.

Use [Solve and Diagnose a Smooth Optimization Problem](#/item/recipe-optimization-diagnostics) for scaling, derivative checks, and stopping criteria.

## Module 6: validation, capacity, and generalization

A model-selection workflow uses training data to fit, validation data to choose hyperparameters, and a held-out test set for a final assessment. Preprocessing, feature selection, early stopping, threshold choice, and architecture search are part of training. If the test set guides them, it is no longer untouched.

Here is one finite-class theorem. Assume $M$ fixed predictors, IID observations, and losses in $[0,1]$. Hoeffding's inequality plus a union bound gives: with probability at least $1-\\delta$, simultaneously for every predictor $f$,

$$
\\left|R(f)-\\widehat R_n(f)\\right|
\\le\\sqrt{\\frac{\\log(2M/\\delta)}{2n}}.
$$

Because the event is simultaneous, a predictor selected after examining empirical risks is covered. The theorem does not apply unchanged to unbounded squared loss, data-dependent classes, temporal dependence, or distribution shift.

Infinite classes use structural capacity such as VC dimension, Rademacher complexity, stability, norms, or margins. Generalization is not a mystical property of “simple” models; it is a theorem or empirical claim relative to a class, algorithm, data-generating assumption, and loss.

The [statistical learning book](#/item/book-statistical-learning-generalization) develops these guarantees. The existing [capacity deep dive](#/item/deep-dive-generalization-capacity) gives a shorter finite-class derivation.

## Module 7: neural networks and backpropagation

A one-hidden-layer network maps $x\\in\\mathbb R^d$ through

$z=Wx+b$, $h=\\sigma(z)$, $o=v^{\\mathsf T}h+c$,

where $W\\in\\mathbb R^{m\\times d}$, $b,v\\in\\mathbb R^m$, and
$o\\in\\mathbb R$. With $L=(1/2)(o-y)^{2}$, reverse the graph:

$d_o=o-y$,

$\\partial L/\\partial v=d_o h$, $\\partial L/\\partial c=d_o$,

$\\delta =(d_o v) ⊙ \\sigma '(z)$,

$\\partial L/\\partial W=\\delta x^{\\mathsf T}$,
$\\partial L/\\partial b=\\delta$.

Check shapes: $\\delta$ is $m\\times 1$, $x^{\\mathsf T}$ is $1\\times d$, so their outer product matches $W$. Backpropagation is repeated application of the chain rule; it is not itself an optimizer. An optimizer uses these derivatives to update parameters.

For ReLU $\\sigma (z)=\\max(0,z)$, the derivative is $1$ for positive input and $0$ for negative input. At zero the classical derivative is undefined; software chooses a backward convention, often $0$, which lies in the convex subdifferential $[0,1]$. Saturating activations can make derivatives tiny. Deep products of Jacobians can vanish or explode. Initialization, normalization, residual connections, and architecture alter this numerical geometry.

Expressive power does not guarantee learnability, optimization success, calibration, robustness, or causal validity. The [optimization and backprop book](#/item/book-optimization-backprop-from-scratch) implements a small network and audits every dimension.

## Module 8: kernels and Gaussian processes

A kernel $k(x,z)$ is positive semidefinite when every finite Gram matrix
$K_{ij}=k(x_i,x_j)$ satisfies $c^{\\mathsf T}Kc\\ge0$. The RBF kernel

$k(x,z)=\\exp(-\\lVert x-z\\rVert^{2}/(2h^{2}))$

expresses local similarity with bandwidth $h$. Kernel ridge solves

$(K+\\lambda I)\\alpha=y$, and predicts
$f(x)=k_x^{\\mathsf T}\\alpha$.

Positive $\\lambda$ stabilizes small eigenvalue directions. At $\\lambda =0$, duplicate inputs create duplicate Gram rows and may make the system singular. The [regularization lab](#/labs?lab=visual-lab-regularization-kernel-learning) exposes that boundary.

A zero-mean Gaussian process prior with covariance kernel $k$ and independent Gaussian observation noise variance $\\sigma ^{2}\\ge0$ yields the following ordinary-inverse formulas at a test input $x_*$ provided $K_y=K+\\sigma^2I$ is invertible. For positive-semidefinite $K$, $\\sigma^2>0$ is sufficient; noiseless $\\sigma^2=0$ is also allowed when $K$ is positive definite:

$m_*=k_*^{\\mathsf T}(K+\\sigma ^{2}I)^{-1}y$,

$s_*^2=k(x_*,x_*)-k_*^{\\mathsf T}(K+\\sigma ^{2}I)^{-1}k_*$.

Predictive variance for a new noisy outcome adds $\\sigma ^{2}$. Numerical implementations solve linear systems—usually by Cholesky with jitter diagnostics—rather than forming an inverse. Posterior uncertainty is conditional on the kernel, noise model, hyperparameters, and data; it is not immunity to shift. A singular noiseless observation covariance $K_y$ requires conditioning on its observation support, outside these ordinary-inverse formulas. This online course clarification revises no PDF.

## Module 9: structured probability, geometry, and sequential decisions

A graphical model factorizes a joint distribution. In a directed acyclic graph,

$p(x_1,\\ldots ,x_d)=\\prod_j p(x_j\\mid\\operatorname{pa}(x_j))$.

Missing edges encode conditional independence under the model. Conditioning on a common effect can create dependence, so graphical reasoning must distinguish chains, forks, and colliders. An observational Bayesian-network arrow is not automatically a causal arrow.

Manifold learning begins from the hypothesis that high-dimensional observations lie near a lower-dimensional set. Neighborhood graphs and spectral embeddings can reveal geometry when sampling is dense enough, noise is controlled, distances are meaningful, and neighborhoods remain local. Shortcuts, disconnected samples, changing density, and boundary effects can distort the embedding.

Optimal transport compares distributions through couplings. For discrete
masses $a_i$ and $b_j$, choose nonnegative $\\pi_{ij}$ with row sums $a_i$ and
column sums $b_j$, minimizing $\\sum_{i,j}c_{ij}\\pi_{ij}$. A low transport cost
does not prove two domains share the same labels or causal mechanisms.

A discounted Markov decision process has states, actions, transition law $P(s'|s,a)$, reward, and $0\\le \\gamma <1$. For policy $\\pi$,

$V^\\pi (s)=E_\\pi [R_{t+1}+\\gamma V^\\pi (S_{t+1}) | S_t=s]$.

Control seeks a policy, not only a prediction. Exploration changes the data collected. The Markov assumption and reward specification can both fail. Continue to the dedicated geometry and reinforcement-learning deep dives.

## Module 10: programming and audit workflow

A dependency-free learning experiment should expose rather than hide its mathematics:

\`\`\`text
declare rows, units, split, target, and metric
fit all preprocessing on training rows only
for each declared hyperparameter candidate:
    fit on permitted training data
    evaluate on validation data
choose once by the declared rule
evaluate the frozen procedure on untouched test data
report residuals, uncertainty, failures, and deployment mismatch
\`\`\`

Test algebraic invariants: matrix dimensions, finite outputs, symmetric kernels, nonnegative quadratic forms within tolerance, deterministic seeded behavior, and gradient agreement with finite differences. Test boundary cases: duplicate inputs, zero variance features, singular matrices, empty groups, and extrapolation.

The [trustworthy predictive recipe](#/item/recipe-trustworthy-predictive-model) turns this into a complete report, while the lab supplies inspectable ridge and RBF implementations.

## Assessment with worked answers

**1. Dimensions.** If $X$ is $40\\times 6$ and outcomes are scalar, what are
the shapes of $w$, $Xw-y$, and $X^{\\mathsf T}(Xw-y)$?

**Answer.** $w$ is $6\\times 1$; the residual is $40\\times 1$; the gradient-shaped product is $6\\times 1$.

**2. Least-squares gradient.** For $L(w)=\\lVert Xw-y\\rVert^{2}/(2n)$, show the gradient.

**Answer.** With $r=Xw-y$,
$dL=r^{\\mathsf T}X\\,dw/n=(X^{\\mathsf T}r/n)^{\\mathsf T}dw$, so
$\\nabla L=X^{\\mathsf T}(Xw-y)/n$.

**3. Loss determines target.** Why does squared loss target a conditional mean rather than a conditional median?

**Answer.** Under the sufficient condition $\\mathbb E[Y^2]<\\infty$, for $P_X$-almost every $x$ the finite conditional squared risk is $\\operatorname{Var}(Y|X=x)+(E[Y|X=x]-a)^2$. The centered cross term is zero, so the conditional mean minimizes it; integrating gives finite population risk at that predictor. The claim is up to $P_X$-null sets, and a finite mean alone is insufficient for this finite-variance proof. Absolute loss is instead minimized by any conditional median.

**4. Ridge boundary.** What happens to nonintercept coefficients as $\\lambda \\to \\infty$ when those coefficients are penalized?

**Answer.** They shrink toward zero. The limiting predictor approaches the unpenalized intercept baseline, subject to the stated scaling and intercept convention.

**5. Backprop dimensions.** With $W$ of shape $5\\times 3$, what shapes must
$x$, $\\delta$, and $\\delta x^{\\mathsf T}$ have?

**Answer.** $x$ is $3\\times 1$, $\\delta$ is $5\\times 1$, and
$\\delta x^{\\mathsf T}$ is $5\\times 3$, matching $W$.

**6. A two-point kernel audit.** For a normalized kernel matrix $\\begin{pmatrix}1 & r \\\\ r & 1\\end{pmatrix}$, what condition on $r$ makes it positive semidefinite?

**Answer.** Its eigenvalues are $1+r$ and $1-r$, so both are nonnegative exactly when $|r|\\le 1$.

**7. GP noise.** Why does the predictive variance for a new noisy outcome exceed the latent-function variance by $\\sigma ^{2}$?

**Answer.** The observed outcome equals latent value plus independent noise of variance $\\sigma ^{2}$; independent variances add.

**8. Test leakage.** A learner selects the degree with lowest test MSE, then reports that same MSE. What is wrong?

**Answer.** The test outcomes influenced model selection, so the reported value is adaptively optimistic. Use validation for degree choice and a separate untouched test assessment.

### Feedback map

If Questions 1–2 or 5 fail, annotate every vector and matrix with its shape
before differentiating. If Questions 3–4 fail, state the loss target and which
coefficients are penalized. If Questions 6–7 fail, distinguish a
positive-semidefinite algebra claim from a conditional probability model. If
Question 8 fails, draw the training, validation, and test information flow and
mark every fitted preprocessing step.

## Capstone

Build a small predictor using only arrays and arithmetic. Include a baseline, a declared split, linear or kernel fitting, finite-difference derivative or equation checks, a validation rule, residual and error tables, and at least one singular or shifted boundary. State exactly what is theorem, computation, simulation, and finite-data observation. Finish with a nonclaim: one tempting causal, fairness, or deployment conclusion that the evidence does not justify.

## Ten assigned problem sets and preparation

The ten problem sets promised above are the following exact selections from existing public sources. Each named source contains the selected questions and their full solutions; they are assignments, not a request to read three entire books. Keep a first attempt before comparing the source key, then write a correction naming the failed equation or assumption. Existing diagnostic answers and public keys are self-review support, not protected assessment material.

| Set ID | Module and exact source-owned assignment | What to hand in |
| --- | --- | --- |
| ML-PS-01-v1 | Module 1: [Arrays, Linear Maps, and Shape Contracts](#/item/book-optimization-backprop-from-scratch?chapter=arrays-linear-maps-shapes), Exercises 2 and 6; compare the same numbers in **Full solutions**. | A batch-shape ledger and an explicit null vector with two indistinguishable coefficient vectors. |
| ML-PS-02-v1 | Module 2: [Projection, Least Squares, and Data Geometry](#/item/book-optimization-backprop-from-scratch?chapter=projection-least-squares-geometry), Exercises 4 and 8; **Full solutions** 4 and 8. | Solved coefficients, residual orthogonality and the centered affine fit. |
| ML-PS-03-v1 | Module 3: [Derivatives as Linear Maps](#/item/book-optimization-backprop-from-scratch?chapter=derivatives-differentials-shapes), Exercises 4, 9 and 14; **Full solutions** 4, 9 and 14. | A differential, chain-rule pullback and matrix-gradient shape check. |
| ML-PS-04-v1 | Module 4: [Expectation, Risk, and Sampling](#/item/book-optimization-backprop-from-scratch?chapter=expectation-risk-sampling), Exercises 4, 9 and 14; **Full solutions** 4, 9 and 14. | Row versus group averages, an importance-corrected expectation, and the assumptions needed for population, causal and decision claims. |
| ML-PS-05-v1 | Module 5: [Smoothness, Descent, and Step Sizes](#/item/book-optimization-backprop-from-scratch?chapter=smoothness-descent-step-sizes), Exercises 1 and 2, plus [Constraints, Proximal Methods, and Regularization](#/item/book-optimization-backprop-from-scratch?chapter=constraints-proximal-regularization), Exercise 1; each chapter's matching **Full solutions**. | A descent coefficient, a strict step-size interval and the ridge stationarity equation with its denominator. |
| ML-PS-06-v1 | Module 6: [Uniform Convergence for a Finite Class](#/item/book-statistical-learning-generalization?chapter=uniform-convergence-finite-class), Practice exercises 1–3 and their adjacent solutions. | The rounded-up sample requirement, a simultaneous selection guarantee and its exact assumptions. Do not apply this bounded-loss theorem to the capstone's unrestricted squared loss. |
| ML-PS-07-v1 | Module 7: [Reverse-Mode Adjoint Backpropagation](#/item/book-optimization-backprop-from-scratch?chapter=reverse-mode-adjoint-backprop), Exercises 1, 2 and 9; **Full solutions** 1, 2 and 9. | Two complete forward/backward traces and the reason a ReLU kink needs a declared convention. |
| ML-PS-08-v1 | Module 8: [Positive-Semidefinite Kernels](#/item/book-structured-probabilistic-learning?chapter=positive-semidefinite-kernels), Exercises 2.1 and 2.2, and [Conditioning a Gaussian Process](#/item/book-structured-probabilistic-learning?chapter=conditioning-a-gaussian-process), Exercises 4.1 and 4.2; use their adjacent solutions. | A feature-map proof, a negative-eigenvalue counterexample, and the conditional mean/variance calculation with fixed-model assumptions. |
| ML-PS-09-v1 | Module 9: [Directed Graphical Models](#/item/book-structured-probabilistic-learning?chapter=directed-graphical-models), Exercises 7.2 and 7.3; [Data Geometry and Transport](#/item/deep-dive-data-geometry-transport), Exercises with worked answers 3 and 4; [Decisions over Time](#/item/deep-dive-mdp-reinforcement-learning), Exercises 2 and 6. | D-separation versus possible dependence, a selection-bias explanation, a shortcut failure, a feasible coupling/cost check, one Bellman update and explicit limits on a policy claim. |
| ML-PS-10-v1 | Module 10: [Training Pipelines and Reproducible Computation](#/item/book-optimization-backprop-from-scratch?chapter=training-pipelines-reproducibility), Exercises 3, 9 and 12; **Full solutions** 3, 9 and 12. | The leaking versus train-only transformation, correctly weighted metric and an information-flow explanation for epoch selection. |

For preparation, first attempt the four questions in **Entry diagnostic and 13-hour route**, above. Before Sets 1–2, use the worked shape and projection examples in their selected chapters. Before Sets 3, 5 and 7, repair one-variable derivatives and the chain rule, then read the selected derivative chapter's explanation of differentiability, differentials and shapes; coordinate partial derivatives alone are insufficient. Set 4 needs finite weighted averages and conditional expectation; its selected chapter distinguishes a fixed finite mean from a population expectation. Set 6 imports Hoeffding's inequality as the named concentration theorem; its selected chapter derives the union-bound step and states IID, fixed-class and bounded-loss requirements. Set 8 additionally needs linear systems, positive definiteness and the Gaussian conditioning model. Set 9 needs finite conditional probability, graph paths and a discounted finite-state decision model, not a research-level geometry curriculum.

The finite capstones below need only scalar differentiation, means, squares and fractions. The changed and return tasks introduce an unpenalized intercept; the key derives both partial derivatives. The optional Python reconstruction needs loops, functions and elementary dictionaries, with no array package, fitting library or browser executor. A hand solution remains complete without running Python. For deeper programming preparation use the selected pipeline chapter; do not infer that the four-question entry diagnostic verifies programming competence.

An **authored planning task allowance of 600 minutes** comprises ten 30-minute problem-set allowances, 100 minutes for the primary capstone, 80 for the changed task, 70 for the return and 50 for comparison/revision. This is not observed workload or credit. The elapsed interval before returning, prerequisite repair and sustained reading need additional time. The original 780-minute outline estimate is retained above; the two estimates describe different planning scopes and must not be silently added or treated as a calibrated total.

## Finite capstone: freeze before the holdout

This is a complete bounded example of the original capstone. All rows below are **synthetic, hand-chosen teaching data**, not external measurements or a random sample. The input $x$ and response $y$ are dimensionless normalized quantities. The exercise studies a finite fitting procedure; no IID sampling law, causal mechanism or population guarantee is supplied.

### Data and declared protocol

These row IDs and roles are fixed before fitting. The original three tasks have distinct identities. In the primary task the intercept is fixed at zero. In the changed and return tasks the intercept is fitted and unpenalized. No transformations are fitted; the identity transformation is the declared preprocessing rule.

| Task | Split | Row ID | x | y |
| --- | --- | --- | --- | --- |
| ML-FIN-PRIMARY-v1 | train | P1 | -1 | -1 |
| ML-FIN-PRIMARY-v1 | train | P2 | 0 | 0 |
| ML-FIN-PRIMARY-v1 | train | P3 | 1 | 1 |
| ML-FIN-PRIMARY-v1 | validation | P4 | 2 | 1 |
| ML-FIN-PRIMARY-v1 | test | P5 | 3 | 2 |
| ML-FIN-PRIMARY-v1 | test | P6 | -3 | -2 |
| ML-FIN-CHANGED-v1 | train | C1 | -1 | 1 |
| ML-FIN-CHANGED-v1 | train | C2 | 0 | 2 |
| ML-FIN-CHANGED-v1 | train | C3 | 1 | 3 |
| ML-FIN-CHANGED-v1 | validation | C4 | 2 | 4 |
| ML-FIN-CHANGED-v1 | test | C5 | 3 | 5 |
| ML-FIN-CHANGED-v1 | test | C6 | -3 | -1 |
| ML-FIN-RETURN-v1 | train | R1 | -2 | -1 |
| ML-FIN-RETURN-v1 | train | R2 | 0 | 1 |
| ML-FIN-RETURN-v1 | train | R3 | 2 | 3 |
| ML-FIN-RETURN-v1 | validation | R4 | 4 | 3 |
| ML-FIN-RETURN-v1 | test | R5 | 6 | 4 |
| ML-FIN-RETURN-v1 | test | R6 | -6 | -2 |

For any named split $S$, define residual $r_i=\\widehat y_i-y_i$, RSS $=\\sum_{i\\in S}r_i^2$ and $\\operatorname{MSE}_S=\\operatorname{RSS}_S/|S|$. A positive residual means overprediction. Use squared error in the original response coordinate for every model comparison. The training objective is **half training MSE plus the slope penalty**, not MSE plus the same penalty:

$$
F_\\lambda(b,w)=\\frac{1}{2n}\\sum_{i\\in\\mathrm{train}}(b+wx_i-y_i)^2+\\frac{\\lambda}{2}w^2.
$$

| Task | Intercept | Candidate lambdas | Selected lambda |
| --- | --- | --- | --- |
| ML-FIN-PRIMARY-v1 | fixed-zero | 0, 1/3 | 1/3 |
| ML-FIN-CHANGED-v1 | fitted-unpenalized | 0, 1/3 | 0 |
| ML-FIN-RETURN-v1 | fitted-unpenalized | 0, 8/3 | 8/3 |

The last column is the worked key, not an input to the fitting procedure. For each task: fit a training-mean constant baseline, then fit both declared slope candidates on **training rows only**. Choose the candidate with smallest validation MSE; a tie would choose the smaller $\\lambda$. The baseline is a reported comparator, outside this two-candidate selection. Freeze $(b,w,\\lambda)$ without refitting on validation rows; only then evaluate the two test rows. Do not alter the grid or protocol after seeing test error. The changed/return tasks are separate studies; their rows never enlarge the primary training sample.

The public page necessarily reveals every row and key. A learner can rehearse the freeze-before-test protocol, but cannot make these public test rows an unseen assessment merely by hiding them. Record whether a model, key or outside hint was already seen. Local notes and self-declarations do not authenticate a blinded experiment.

### Primary prompt ML-FIN-PRIMARY-v1

1. Derive the training-mean baseline and the minimizer of each $F_\\lambda(0,w)$. State the objective, gradient, curvature and coefficient units.
2. Compute both validation errors, freeze the winner by the declared rule, then report every training/validation/test MSE and the test residuals. Compare with the baseline.
3. Check the selected gradient by an exact centered difference at $w=0$ with $h=1/2$; separate that identity from floating-point accuracy.
4. Audit two failures: duplicate the feature column, and change only the test response at $x=3$ from $2$ to $-2$. Explain what each check establishes and what it cannot establish.
5. Finish with a claim ledger and one unsupported causal or deployment conclusion you refuse to draw.

### Primary worked key

The baseline is the training mean $c=0$. Since $n=3$, $\\sum x_i^2=2$ and $\\sum x_i y_i=2$,

$$
F_\\lambda(0,w)=\\frac{(w-1)^2}{3}+\\frac{\\lambda w^2}{2},\\qquad
F_\\lambda'(w)=\\frac23(w-1)+\\lambda w,\\qquad
F_\\lambda''(w)=\\frac23+\\lambda>0.
$$

Strict positive curvature proves the stationary solution is the unique global minimizer: $w_\\lambda=(2/3)/(2/3+\\lambda)$. The unregularized slope is $1$; at $\\lambda=1/3$ it is $2/3$. Coefficients are dimensionless here; with physical coordinates, the slope would have response-units/input-units and the penalty must carry matching units.

At P4, predictions are $2$ and $4/3$, so validation squared errors are $1$ and $1/9$. Select $\\lambda=1/3$ and freeze $b=0,w=2/3$. Its P5/P6 predictions are $(2,-2)$, hence residuals $(0,0)$; the unregularized residuals are $(1,-1)$ and the baseline residuals $(-2,2)$.

All entries in this ledger are exact fractions. The later sections derive the other six rows.

| Task | Model | b | w | Train MSE | Validation MSE | Test MSE |
| --- | --- | --- | --- | --- | --- | --- |
| ML-FIN-PRIMARY-v1 | baseline | 0 | 0 | 2/3 | 1 | 4 |
| ML-FIN-PRIMARY-v1 | lambda=0 | 0 | 1 | 0 | 1 | 1 |
| ML-FIN-PRIMARY-v1 | lambda=1/3 | 0 | 2/3 | 2/27 | 1/9 | 0 |
| ML-FIN-CHANGED-v1 | baseline | 2 | 0 | 2/3 | 4 | 9 |
| ML-FIN-CHANGED-v1 | lambda=0 | 2 | 1 | 0 | 0 | 0 |
| ML-FIN-CHANGED-v1 | lambda=1/3 | 2 | 2/3 | 2/27 | 4/9 | 1 |
| ML-FIN-RETURN-v1 | baseline | 1 | 0 | 8/3 | 4 | 9 |
| ML-FIN-RETURN-v1 | lambda=0 | 1 | 1 | 0 | 4 | 9 |
| ML-FIN-RETURN-v1 | lambda=8/3 | 1 | 1/2 | 2/3 | 0 | 0 |

The selected primary training residuals are $(1/3,0,-1/3)$; RSS is $2/9$, MSE $2/27$ and half-MSE $1/27$. The penalty is $(1/6)(4/9)=2/27$, so $F_{1/3}(0,2/3)=1/9$. Comparing objectives with different $\\lambda$ values is not the selection rule: they are different objectives. Validation MSE compares the two resulting predictors on the same rows and loss.

At $\\lambda=1/3$, $F(w)=w^2/2-2w/3+1/3$. Thus $F(1/2)=1/8$, $F(-1/2)=19/24$ and

$$
\\frac{F(1/2)-F(-1/2)}{2(1/2)}=-\\frac23=F'(0).
$$

For a quadratic this centered-difference equality is exact in real or rational arithmetic for every nonzero $h$. It is not a universal truncation-error theorem for other losses. Floating subtraction and division still round; making $h$ arbitrarily small can worsen floating error. Here curvature is $1$, so one gradient step of size $1$ from $0$ reaches $2/3$ exactly in rational arithmetic.

Duplicating the feature gives predictions $(u+v)x$. At $\\lambda=0$, every $u+v=1$ fits the training rows exactly; for example $(1,0)$ and $(0,1)$ are distinct. The design is rank one, so coefficients are not identifiable. Penalizing both slopes by $\\lambda(u^2+v^2)/2$ at $\\lambda=1/3$ gives the unique solution $u=v=2/5$, with combined slope $4/5$. Indeed subtraction of the two stationarity equations gives $u=v$, and either equation becomes $(2/3)(2u-1)+u/3=0$. This is **not** the original slope $2/3$: duplicating a coordinate while keeping its numeric penalty changes the estimator. A stable solve cannot decide the intended representation.

The shifted stress row $(3,-2)$ gives selected prediction $2$, residual $4$ and squared error $16$. If it replaces P5 while P6 remains unchanged, test MSE becomes $8$; this is a new stress calculation, not the original test result. Do not fit to this revealed response and still call it untouched evaluation. The two zero residuals in the original hand-chosen test set did not certify deployment under a changed response regime.

The normal equation and minimizer are exact algebra; the finite table is a checked computation on named synthetic rows; no empirical population study occurred. An IID generalization theorem needs a sampling model and its other hypotheses. In particular, Module 6's bounded-loss theorem cannot simply be applied to unrestricted squared error. The data establish no causal benefit, fairness guarantee or deployment safety.

## Changed capstone: fit an unpenalized intercept

### Changed prompt ML-FIN-CHANGED-v1

Use only C1–C6 and the declared candidate grid. Fit $b+wx$ with **unpenalized** $b$ and penalized $w$, derive both partial derivatives and prove uniqueness. Repeat the complete baseline/selection/freeze/error ledger. Does the primary task's winning $\\lambda$ still win? Explain why penalizing the intercept would solve a different problem, and give its incorrectly substituted intercept at $\\lambda=1/3$.

### Changed worked key

The training means are $\\bar x=0,\\bar y=2$. Centering the responses leaves $(-1,0,1)$, so

$$
F_\\lambda(b,w)=\\frac12(b-2)^2+\\frac13(w-1)^2+\\frac\\lambda2w^2.
$$

Its partial derivatives are $\\partial_bF=b-2$ and $\\partial_wF=(2/3)(w-1)+\\lambda w$. The Hessian is diagonal with positive entries $1$ and $2/3+\\lambda$, proving the unique global minimizer is $b=2$ and $w=1$ or $2/3$. The baseline is $2$. At C4, the predictions are respectively $4$ and $10/3$, giving validation errors $0$ and $4/9$. This time **$\\lambda=0$ wins**; the primary winner is not a rule that regularization always improves a finite comparison.

The frozen predictor is $2+x$. Its C5/C6 predictions $(5,-1)$ exactly match their responses. The positive-penalty candidate predicts $(4,0)$ with residuals $(-1,1)$, so test MSE is $1$; the baseline predicts $(2,2)$ with residuals $(-3,3)$, so test MSE is $9$. Training residuals for the positive-penalty candidate remain $(1/3,0,-1/3)$, yielding the changed rows of the ledger. Its training objective is $1/9$; the selected unregularized objective is $0$.

If one incorrectly adds $\\lambda b^2/2$, then $\\partial_bF=b-2+\\lambda b$ and $b=2/(1+\\lambda)=3/2$ at $\\lambda=1/3$. That result is internally valid for a different objective, not a permissible implementation of the stated unpenalized-intercept contract. Neither a small gradient nor a low finite test error repairs a wrongly defined objective.

## Later public return: change the scale and penalty

### Return prompt ML-FIN-RETURN-v1

After a gap, start a separate attempt from R1–R6 and the return grid, without copying a prior coefficient. A gap of at least a week is a suggested study arrangement, not a measured retention threshold. Derive the affine minimizers and choose only from validation error. Produce the complete ledger and test residuals, then explain how rescaling $x'=2x$ would require changing a slope penalty to preserve the same represented objective. Record which earlier keys were seen; if this key was already read, call the attempt reconstruction.

### Return worked key

The training means are $\\bar x=0,\\bar y=1$; the centered response equals $x$. Now $\\sum x_i^2=8$, so

$$
F_\\lambda(b,w)=\\frac12(b-1)^2+\\frac43(w-1)^2+\\frac\\lambda2w^2,
\\qquad
\\partial_wF=\\frac83(w-1)+\\lambda w.
$$

Both Hessian diagonal entries $1,8/3+\\lambda$ are positive. The minimizers have $b=1$, with slopes $1$ for $\\lambda=0$ and $1/2$ for $\\lambda=8/3$. At R4, their predictions are $5$ and $3$, so validation errors $4$ and $0$ select the positive penalty. The baseline $1$ also has validation error $4$.

Freeze $1+x/2$. Its R5/R6 predictions are $(4,-2)$ and residuals $(0,0)$. The unregularized predictions are $(7,-5)$ with residuals $(3,-3)$; baseline residuals are $(-3,3)$. Both comparators have test MSE $9$. The selected training residuals are $(1,0,-1)$: MSE $2/3$, half-MSE $1/3$, penalty $(4/3)(1/4)=1/3$ and objective $2/3$. These give all three return rows of the ledger.

For the separate coordinate-change question, preserving $b+wx=b+vx'$ with $x'=2x$ requires $v=w/2$. Then $\\lambda w^2/2=4\\lambda v^2/2$, so the corresponding penalty coefficient must be $\\lambda'=4\\lambda$. Keeping the same numeric penalty after rescaling changes the objective. The return dataset/grid above are a separate task, not a claim that its chosen $8/3$ was obtained by rescaling the changed task's $1/3$.

## Feedback, repairs and self-review rubric

For every capstone retain: the first attempt, the row-role/protocol card, coefficient and error ledger, a correction, and help/key exposure notes. Ordinary native/shared notes or a text file suffice; no automatic grade or new learner database is implied. Public return work is not authenticated delayed mastery.

| Criterion | Evidence in a complete self-review | If missing, repair and try again |
| --- | --- | --- |
| Data and scope | Synthetic provenance, dimensionless units, exact IDs, six rows with fixed split roles per task and no population/causal claim. | Rebuild the row-role card; compare Module 1 and the predictive recipe's grouping check. |
| Objective and baseline | Training-mean baseline; half-MSE denominator; stated intercept/penalty convention. | Derive the constant minimizer and compare Set 5's ridge equation; do not silently penalize $b$. |
| Fitting and proof | Training-only sufficient sums, both gradients, positive curvature and exact coefficients. | Use Sets 2–3, then substitute coefficients into the stated stationarity equation. |
| Selection and freeze | Both candidate validation errors, declared tie rule, winner frozen before the test calculation. | Draw the information-flow diagram from Set 10; if test results changed a choice, relabel them development data. |
| Numerical evidence | Correct residual signs, RSS/MSE labels, exact gradient check and all compared models. | Square each residual before averaging; distinguish a passed finite check from proof on every possible input. |
| Boundary and claims | Duplicate-feature and shift diagnoses; the changed winner and return-scale explanation; theorem/finite-data/nonclaim ledger. | Use Sets 1, 6 and 9; a coordinate choice, fixed test score or finite experiment supplies no unrestricted generalization certificate. |

Use \`complete\`, \`partial\` or \`repair\` per row, with a reason; these are personal self-review labels. A missing split/objective/claim boundary remains missing even when arithmetic is correct. The rubric applies to each task's actual scope: the primary includes both boundary audits, the changed task includes intercept-penalty repair, and the return includes scale repair. It does not assert that every optional network, GP or research topic has been assessed.

## Reproduce the finite calculations

This standard-library Python program uses exact rational arithmetic, prints the actual rows and all model ledgers, and selects from validation only. It implements centered sufficient sums; the preceding keys supply an independently readable algebraic derivation. Fractions in the output remain exact; no external dataset, fitting library, randomness or network access is used. It does not run automatically in the reader.

\`\`\`python
from fractions import Fraction as Q
import json

cases = [
    ("ML-FIN-PRIMARY-v1", False, "1/3",
     [("P1", "train", -1, -1), ("P2", "train", 0, 0),
      ("P3", "train", 1, 1), ("P4", "validation", 2, 1),
      ("P5", "test", 3, 2), ("P6", "test", -3, -2)]),
    ("ML-FIN-CHANGED-v1", True, "1/3",
     [("C1", "train", -1, 1), ("C2", "train", 0, 2),
      ("C3", "train", 1, 3), ("C4", "validation", 2, 4),
      ("C5", "test", 3, 5), ("C6", "test", -3, -1)]),
    ("ML-FIN-RETURN-v1", True, "8/3",
     [("R1", "train", -2, -1), ("R2", "train", 0, 1),
      ("R3", "train", 2, 3), ("R4", "validation", 4, 3),
      ("R5", "test", 6, 4), ("R6", "test", -6, -2)]),
]


def mean(values):
    values = list(values)
    if not values:
        raise ValueError("A declared split cannot be empty")
    return sum(values, Q(0)) / len(values)


def mse(rows, split, b, w):
    return mean((b + w * Q(x) - Q(y)) ** 2
                for _, role, x, y in rows if role == split)


def model(rows, b, w, name):
    return {"model": name, "b": str(b), "w": str(w),
            **{split + "_mse": str(mse(rows, split, b, w))
               for split in ("train", "validation", "test")}}


results = []
for task, intercept, positive, rows in cases:
    train = [(Q(x), Q(y)) for _, role, x, y in rows if role == "train"]
    xmean = mean(x for x, _ in train) if intercept else Q(0)
    ymean = mean(y for _, y in train) if intercept else Q(0)
    xx = mean((x - xmean) ** 2 for x, _ in train)
    xy = mean((x - xmean) * (y - ymean) for x, y in train)
    candidates = []
    for penalty in (Q(0), Q(positive)):
        if xx + penalty <= 0:
            raise ValueError("Slope is not uniquely determined")
        w = xy / (xx + penalty)
        b = ymean - w * xmean if intercept else Q(0)
        candidates.append((penalty, b, w))
    chosen = min(candidates, key=lambda item:
                 (mse(rows, "validation", item[1], item[2]), item[0]))
    baseline = model(rows, mean(y for _, y in train), Q(0), "baseline")
    ledger = [baseline] + [model(rows, b, w, "lambda=" + str(penalty))
                           for penalty, b, w in candidates]
    results.append({"task": task, "rows": rows,
                    "selected_lambda": str(chosen[0]), "ledger": ledger})
print(json.dumps({"schema": 1, "studies": results}, sort_keys=True))
\`\`\`
`;export{e as default};