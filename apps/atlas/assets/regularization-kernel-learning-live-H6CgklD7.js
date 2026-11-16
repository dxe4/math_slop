var e=`---
id: visual-lab-regularization-kernel-learning
title: "Regularization & Kernel Learning Observatory"
level: undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Regularization & Kernel Learning Observatory

This live instrument turns model fitting into an inspectable experiment. Every dataset is small, deterministic, and divided into visibly different training and test rows. Only training rows enter the fitted equations. Test rows provide a numerical stress check after fitting; their error on one fixed split is **not** a generalization guarantee.

Open the [live laboratory](#/labs?lab=visual-lab-regularization-kernel-learning). The chart is paired with a complete prediction and residual table, so all mathematical information remains available when Canvas is unsupported or difficult to perceive.

## What the marks mean

Training observations are circles and test observations are squares. The purple curve is the fitted rule. A dashed vertical segment joins each observed outcome $y_i$ to its prediction $y_hat_i$; this is the residual. Select a point to read its split, coordinates, prediction, residual, and squared error in the table.

The controls change four things:

- **Dataset** selects a fixed experimental situation.
- **Model family** chooses polynomial ridge or RBF kernel ridge.
- **Degree** changes polynomial feature dimension.
- **Bandwidth** changes how quickly RBF similarity decays.
- **Regularization $\\lambda$** penalizes flexible fitted directions.

Changing a control refits immediately, with no randomized initialization. The URL records all controls and the selected observation, so a shared link reconstructs the same calculation.

## Polynomial ridge: exact objective and equations

For degree $d$, the feature row at input $x_i$ is

$\\varphi (x_i)=[1,x_i,x_i^2,\\ldots ,x_i^d]$.

Stack training rows into design matrix $\\Phi$. The lab minimizes the **training penalized sum of squares**

$RSS_train(\\beta )+\\lambda \\sum _{j=1}^d \\beta _j^2$

$=\\sum _{i\\in train}(y_i-\\varphi (x_i)^T\\beta )^2+\\lambda \\sum _{j=1}^d\\beta _j^2$.

The intercept $\\beta _0$ is not penalized. With $D=diag(0,1,\\ldots ,1)$, the normal equations are

$(\\Phi ^T\\Phi +\\lambda D)\\beta =\\Phi ^Ty$.

The displayed training MSE is a different quantity:

$MSE_train=RSS_train/n_train$.

The “training objective” display is $RSS_train+\\lambda \\sum _{j\\ge 1}\\beta _j^{2}$, not MSE plus a penalty. Keeping the labels separate prevents a scaling mistake when comparing sample sizes.

When the system matrix is invertible, the vector of fitted training outcomes is $y_hat=Hy$, where

$H=\\Phi (\\Phi ^T\\Phi +\\lambda D)^{-1}\\Phi ^T$.

The lab defines **effective degrees of freedom** as

$df_eff=tr(H)$.

For unregularized full-rank degree-$d$ regression this is $d+1$. With regularization, the trace can be fractional because fitted directions are shrunk rather than simply included or excluded. It is a sensitivity summary, not a literal count of physical parameters and not proof that one model generalizes better.

## RBF kernel ridge: similarity as a feature space

For bandwidth $h>0$, the radial basis kernel is

$k_h(x,z)=\\exp(-(x-z)^2/(2h^2))$.

Using the training inputs as centers, form $K_ij=k_h(x_i,x_j)$ and solve

$(K+\\lambda I)\\alpha =y$.

The prediction at a new input is

$f(x)=\\sum _{j\\in train} \\alpha _j k_h(x,x_j)$.

Small $h$ creates narrow, local bumps; large $h$ makes distant points more similar. Neither direction is universally “more complex” without reference to the data geometry and $\\lambda$.

The training smoother is

$H=K(K+\\lambda I)^{-1}$,

so the same displayed definition applies: $df_eff=tr(H)$. The engine also reports

$RSS_train+\\lambda \\alpha ^TK\\alpha$,

the kernel-ridge training objective corresponding to the fitted coefficients. Again, that objective is not the displayed train or test MSE.

An RBF kernel is positive semidefinite, so positive $\\lambda$ makes $K+\\lambda I$ positive definite. At $\\lambda =0$, duplicate training inputs create duplicate rows in $K$ and can make interpolation singular. The lab reports the failure instead of silently changing $\\lambda$.

Kernel ridge predictions have the same algebraic form as a Gaussian-process posterior mean under corresponding kernel, noise, and scaling conventions. This lab performs penalized point prediction only: it does not display a GP posterior distribution or uncertainty interval.

## The four deterministic datasets

### Curved signal

Training and test inputs interleave over the same range. This is the most favorable setting for comparing interpolation and smoothing, yet eleven hand-chosen points still do not establish a population law.

### One influential outcome

One training response sits far from an otherwise smooth pattern. High-degree or narrow-bandwidth fits may chase it. The observation is retained because mathematics cannot decide whether it is measurement error, a rare event, or important structure; provenance must decide.

### Deployment shift

Training inputs lie mostly on the left, while test inputs lie on the right and come from a changed outcome regime. Regularization may produce a smoother extrapolation, but it cannot certify performance under an unconstrained distribution shift. This dataset separates “numerically stable fit” from “valid deployment claim.”

### Conflicting duplicate inputs

Two training observations share $x=0$ but have different outcomes. No deterministic function $f(x)$ can interpolate both. RBF kernel ridge at $\\lambda =0$ exposes a singular Gram matrix; positive regularization restores a unique compromise. Replicated inputs are not automatically errors—they can reveal outcome variation hidden by the feature representation.

## Guided investigations

### Investigation 1: interpolation is not prediction

Choose **Curved signal**, polynomial ridge, $\\lambda =0$. Increase degree. Record train MSE, test MSE, and $\\operatorname{tr}(H)$.

**What to notice.** Training MSE cannot increase when an additional unpenalized polynomial feature is added and the least-squares problem is solved exactly: the old polynomial remains available by setting the new coefficient to zero. Test MSE need not follow that monotone pattern. If a high-degree system becomes singular, there are too few independent training constraints for a unique coefficient vector.

### Investigation 2: regularization changes the estimator

Choose **One influential outcome** and degree $6$. Move $\\lambda$ from zero toward $10$.

**What to notice.** The curve usually becomes less sensitive, penalized coefficients shrink, and $\\operatorname{tr}(H)$ falls. RSS can rise even as the complete penalized objective falls relative to an alternative coefficient vector. Held-out error may first improve and later worsen; shrinkage trades variance-like sensitivity against bias rather than guaranteeing improvement.

### Investigation 3: bandwidth and penalty interact

Switch to RBF kernel ridge. Compare the smallest and largest bandwidth at several $\\lambda$ values.

**What to notice.** A small bandwidth with weak penalty can act locally around training centers. A broad kernel makes rows of $K$ similar and may become poorly conditioned; positive $\\lambda$ stabilizes the solve. Bandwidth and $\\lambda$ are not interchangeable, because one changes the similarity geometry while the other changes penalization.

### Investigation 4: force the boundary case

Choose **Conflicting duplicate inputs**, RBF model, and $\\lambda =0$.

**What to notice.** The lab declares a singular system and withholds predictions. Increase $\\lambda$ one step. The regularized matrix becomes invertible, producing one prediction at $x=0$ that compromises between incompatible outcomes. A solver returning arbitrary huge coefficients at the singular boundary would be less honest.

### Investigation 5: a test set can reveal, not repair, shift

Choose **Deployment shift** and compare families. Look at the table as well as aggregate MSE.

**What to notice.** All estimators fit only left-side training rows. Right-side test residuals reveal mismatch but do not tell the fitting algorithm how to correct it. Choosing controls repeatedly to minimize this displayed test error would turn the test set into validation data.

## Keyboard and nonvisual operation

Focus the chart, then use:

- Left/Right Arrow: select the previous or next observation;
- Home/End: select the first or last observation;
- Up/Down Arrow: increase or decrease flexibility;
- \`[\` / \`]\`: decrease or increase regularization.

Every control also has a labeled form input. The table buttons select observations without the chart. Status text announces the selected row and fit failures. The visualization has no animated transition; reduced-motion preferences are honored explicitly.

## Worked checks

### Check 1: compute a residual

If a test outcome is $0.55$ and its prediction is $0.62$, what appears in the table?

**Answer.** Residual $y-y_hat=-0.07$ and squared error $0.0049$. The sign shows overprediction; squaring removes it for MSE.

### Check 2: distinguish metrics

Three training residuals are $1,-1,2$, and the penalty term is $5$. Find RSS, MSE, and the displayed training objective.

**Answer.** $RSS=1+1+4=6$, $MSE=6/3=2$, and objective $=6+5=11$.

### Check 3: prove positive regularization repairs the kernel solve

If $K$ is positive semidefinite and $\\lambda >0$, show $K+\\lambda I$ is positive definite.

**Answer.** For nonzero $v$, $v^T(K+\\lambda I)v=v^TKv+\\lambda \\lVert v\\rVert^{2}\\ge \\lambda \\lVert v\\rVert^{2}>0$. Therefore it is invertible.

### Check 4: interpret held-out error honestly

One configuration has lower test MSE on this lab's fixed points. Has it been proven to have lower population risk?

**Answer.** No. It has lower error on those displayed points. A population claim needs an appropriate sampling or deployment model and an evaluation procedure that accounts for selection.

## Continue learning

Use the [Trustworthy Predictive Modeling Recipe](#/item/recipe-trustworthy-predictive-model) to design splits and preprocessing. Derive the underlying linear algebra in [Mathematics for Machine Learning](#/item/course-mathematics-for-machine-learning), and study capacity-level guarantees in [Statistical Learning: Risk, Capacity, and Generalization](#/item/book-statistical-learning-generalization). For posterior uncertainty rather than only a fitted kernel mean, continue to [Structured Probabilistic Learning](#/item/book-structured-probabilistic-learning).
`;export{e as default};