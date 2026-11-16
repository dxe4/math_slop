# 22. Inference from linear data

## Optional route and preparation

These four optional clinics ask what linear observations and dynamics actually certify. They extend the main lessons on singular values, low-rank approximation, network evolution and linear differential systems. Complete those lessons first. The final clinic uses derivatives and elementary differential equations, with the preparation already linked in Chapter 20. This unit is separate from the selected core synthesis: it does not add requirements to the existing calibration dossier or change its public data and worked reference.

A small residual is a statement about observations. A reconstruction error is a statement about an unknown state or matrix. A conserved quantity is determined by the left nullspace of an evolution operator. A tolerance certificate quantifies over all states or times allowed by specified assumptions. These are different claims, so every clinic fixes the norm, model, supplied information and admissible competitors before calculating.

The four source-labelled sections retain the complete mathematical arguments and their original investigations. The worked synthesis and exercises after them connect their ideas. A compatibility set can be empty, a point or a larger region; an optimum can be unique or shared; a stable evolution can have transient growth. Exceptional cases are part of the mathematics rather than failures to be hidden by a generic formula.

## Source chapter 17 — Singular values and the pseudoinverse

## Optional clinic: certify an unseen coordinate from bounded data

This optional untimed continuation is outside the chapter's original two-session promise. Its timing and independent marking remain uncalibrated. The earlier experiment reveals a truth and then measures an error. Here the truth stays unseen: use only a recorded datum and justified bounds to decide what accuracy is possible. This is a deterministic guarantee, not a probability or confidence level.

Work in one singular coordinate:
\[
\begin{gathered}
y=sz+e,\\
|z|\le R,\qquad |e|\le\varepsilon.
\end{gathered}
\]
All quantities here are finite real numbers. The gain \(s\ge0\) is known exactly; \(y\) is the recorded datum. The bounds \(R,\varepsilon\ge0\) are supplied assumptions, not inferred from fitting \(y\). There is no operator uncertainty in this model. A tolerance \(\tau\ge0\) asks for an estimate whose error is at most \(\tau\) for **every** truth and error obeying these assumptions and producing this same record.

The coordinate \(z\), \(R\) and \(\tau\) have the same units; \(y\) and \(\varepsilon\) have data units; \(s\) converts coordinate units to data units. Thus \(\varepsilon/s\) is a coordinate error only when \(s>0\). Numerical examples below are dimensionless. For \(\operatorname{diag}(3,s)\), this may be the second input coordinate with the first already known. A bound for this coordinate alone is not automatically a bound for an entire unknown vector.

### Saved investigation: choose using information, not a revealed truth

Write a prediction in each saved stage before opening its reasoning. All diagrams are intervals of the scalar \(z\); vertical rows merely separate comparisons.

```visual-story
{
  "id": "bounded-inverse-recovery",
  "title": "What accuracy does this record actually certify?",
  "prompt": "The horizontal coordinate is one unknown scalar. Vertical rows separate comparisons; they do not represent a second unknown. Save a prediction before revealing each proof.",
  "stages": [
    {
      "title": "One record, two possible truths",
      "body": "Work in one singular coordinate with known positive gain \\(s\\). The recorded datum is \\(y=0\\), and the only error information in this first stage is \\(|e|\\le\\varepsilon\\) in \\(y=sz+e\\). No prior range is imposed yet. Blue marks the possible interval and its endpoints. Amber is an estimate \\(a\\); rose horizontal segments compare it with the endpoint truths. Row heights are layout only, so error means horizontal absolute difference. Move the estimate as well as gain and error bound.",
      "question": "Find all possible truths and the noise at each endpoint. For an arbitrary estimate a, what is its largest possible absolute error? Can any rule using only this record guarantee less than half the distance between the endpoint truths?",
      "checkpoint": {
        "hint": "Solve |s z|≤epsilon. The endpoint worlds must produce exactly the same recorded datum. Use the triangle inequality between those truths through an arbitrary estimate.",
        "explanation": "Because s>0, the possible truths are exactly [-epsilon/s,epsilon/s]. At z=-epsilon/s choose e=+epsilon; at z=+epsilon/s choose e=-epsilon. Both produce y=0. Write d=epsilon/s. For every real a, the largest endpoint error is max(|a+d|,|a-d|)=d+|a|, and no interior truth gives a larger error. The midpoint a=0 uniquely minimizes this value, giving radius d. More generally, 2d≤|a+d|+|a-d|, so one of the same-record worlds has error at least d for every rule. No revealed true z was used. If epsilon=0, both worlds coincide at zero and the radius is exactly zero; the formula still holds.",
        "criteria": [
          "Solves the positive-gain data inequality.",
          "Supplies two noises for the same record.",
          "Derives worst error for an arbitrary estimate.",
          "Proves a lower bound for every recovery rule."
        ]
      },
      "scene": "scene \"Same record, indistinguishable endpoint truths\";\ndomain -2.4 2.4; range -0.25 1.25;\nparam s=0.2 from 0.1 to 1;\nparam eps=0.1 from 0 to 0.2;\nparam a=0 from -2 to 2;\nlet d=eps/s;\nsegment compatible from (-d,0) to (d,0) color blue;\npoint left_truth=(-d,0) color blue;\npoint right_truth=(d,0) color blue;\npoint estimate=(a,0.5) color amber;\nsegment left_error from (a,0.5) to (-d,0.5) color rose;\nsegment right_error from (a,1) to (d,1) color rose;\nmeasure left_possible_truth=-d; measure right_possible_truth=d;\nmeasure left_endpoint_noise=eps; measure right_endpoint_noise=-eps;\nmeasure unavoidable_radius=d; measure worst_absolute_error=d+abs(a);",
      "focus": [
        "point-left_truth",
        "point-right_truth",
        "point-estimate"
      ]
    },
    {
      "title": "Add a justified prior and decide a tolerance",
      "body": "Keep the record y=0, but now suppose an independent bound |z|≤R is supplied. This bound is information about admissible truths, not a conclusion from a small data residual. Blue is the prior interval, rose the data interval, teal their intersection. The amber interval is the target tube [-tau,tau] around estimate zero. All lengths and errors use the horizontal coordinate. The controls keep s positive; exact zero gain is a separate written case below.",
      "question": "Which truths survive both bounds? Derive the best guaranteed error and decide exactly when estimate zero meets target tau. Compare full inversion with discarding this coordinate over every admissible record, not only y=0. Can a gain increase be unnecessary when the prior already meets the target?",
      "checkpoint": {
        "hint": "Intersect two centred intervals. For a uniform claim, bound the full inverse's error by epsilon/s and the zero estimate's error by R. Then use the same-record endpoint worlds at y=0 for a lower bound.",
        "explanation": "At y=0 the interval is [-r,r], with r=min(R,epsilon/s). Its midpoint zero has worst error r. The target is attainable exactly when r≤tau, equivalently R≤tau or epsilon≤s*tau. This form also handles tau=0 without division by tau. For all admissible records, full inversion a=y/s has error |e|/s≤epsilon/s, whereas the fixed zero estimate has error |z|≤R. Choosing the better of these two rules gives uniform error at most min(R,epsilon/s). At y=0, truths ±r with noises ∓s*r obey both bounds, so every rule has worst error at least r. Hence this uniform value is sharp. A large data residual or a pretty plot does not establish the supplied prior or noise bound. If R≤tau, improving s is unnecessary for this guarantee.",
        "criteria": [
          "Intersects the prior and data constraints.",
          "States a necessary and sufficient target condition.",
          "Separates a uniform claim from one record.",
          "Proves sharpness with admissible same-record worlds."
        ]
      },
      "scene": "scene \"Intersect independent bounds before choosing accuracy\";\ndomain -2.4 2.4; range -0.25 1.45;\nparam s=0.2 from 0.1 to 1;\nparam eps=0.1 from 0 to 0.2;\nparam R=1 from 0.1 to 2;\nparam tau=0.25 from 0 to 2;\nlet d=eps/s; let r=(R+d-abs(R-d))/2;\nsegment prior from (-R,0) to (R,0) color blue;\nsegment data from (-d,0.4) to (d,0.4) color rose;\nsegment compatible from (-r,0.8) to (r,0.8) color teal;\npoint left_truth=(-r,0.8) color teal;\npoint right_truth=(r,0.8) color teal;\nsegment target_tube from (-tau,1.2) to (tau,1.2) color amber;\nmeasure inverse_uniform_error=d; measure zero_uniform_error=R;\nmeasure best_uniform_error=r; measure target_margin=tau-r;\nmeasure left_possible_truth=-r; measure right_possible_truth=r;",
      "focus": [
        "line-compatible",
        "line-target_tube"
      ]
    },
    {
      "title": "A nonzero record can change the best estimate",
      "body": "Now the displayed record is y=s*R*q. The normalized control -1≤q≤1 generates only consistent records with |y|≤sR, a subset of all consistent records; it does not include every boundary or inconsistent case. Prior and error bounds stay fixed while you choose an estimate a. Blue is the prior, rose the data interval, teal their intersection and its midpoint. The amber point is your estimate. Its horizontal offset from the midpoint is only one part of its worst error. Default data: s=1/4, R=1, epsilon=1/8, q=1, so y=1/4.",
      "question": "Derive the compatible interval for this record, its best estimate and sharp worst error. At the default, compare exact inversion a=y/s with the midpoint and target tau=1/4. Why need an exact data fit fail to be conditionally best? Prove your formula for every consistent record before experimenting with a.",
      "checkpoint": {
        "hint": "Use L=max(-R,(y-epsilon)/s) and U=min(R,(y+epsilon)/s). Write L=c-r and U=c+r. Compare distances from a to those endpoints.",
        "explanation": "For any consistent record, I(y)=[L,U], with c=(L+U)/2 and r=(U-L)/2. The largest possible error is max(|a-L|,|a-U|)=r+|a-c|. Every point of the interval is an admissible truth, because e=y-s*z meets the error bound. The midpoint c is the unique conditionally best estimate and has radius r; the two endpoint worlds prove no rule at this same record can do better. At the default, I=[1/2,1], c=3/4 and r=1/4. Inversion returns 1, with worst error 1/2; the midpoint meets target 1/4. The endpoint noises are +1/8 at z=1/2 and 0 at z=1. The midpoint has residual 1/16, which is allowed. Fitting the recorded datum exactly does not minimize uncertainty about the unseen truth. A failed worst-case certificate means some compatible truth violates the target, not that the actual truth does.",
        "criteria": [
          "Derives the clipped endpoints and centre.",
          "Proves the full r+|a-c| error formula.",
          "Compares inversion and midpoint at the default.",
          "Distinguishes possible failure from actual error."
        ]
      },
      "scene": "scene \"Choose an estimate for a nonzero recorded datum\";\ndomain -4.2 4.2; range -0.25 1.45;\nparam s=0.25 from 0.1 to 1;\nparam R=1 from 0.25 to 1.5;\nparam eps=0.125 from 0 to 0.25;\nparam q=1 from -1 to 1;\nparam a=1 from -2 to 2;\nlet record=s*R*q; let lo=(record-eps)/s; let hi=(record+eps)/s;\nlet L=(-R+lo+abs(-R-lo))/2;\nlet U=(R+hi-abs(R-hi))/2;\nlet c=(L+U)/2; let r=(U-L)/2;\nsegment prior from (-R,0) to (R,0) color blue;\nsegment data from (lo,0.4) to (hi,0.4) color rose;\nsegment compatible from (L,0.8) to (U,0.8) color teal;\npoint midpoint=(c,0.8) color teal;\npoint estimate=(a,1.2) color amber;\nsegment centre_offset from (a,1.2) to (c,1.2) color amber;\nmeasure recorded_y=record; measure left_possible_truth=L; measure right_possible_truth=U;\nmeasure best_estimate=c; measure unavoidable_radius=r; measure worst_absolute_error=r+abs(a-c);",
      "focus": [
        "line-compatible",
        "point-midpoint",
        "point-estimate"
      ]
    }
  ]
}
```

### Proof route: compatible truths and the best conditional estimate

For \(s>0\), rearrange the error inequality before choosing an estimate:
\[
\begin{gathered}
\frac{y-\varepsilon}{s}\le z\le\frac{y+\varepsilon}{s},\\
L=\max\left(-R,\frac{y-\varepsilon}{s}\right),\\
U=\min\left(R,\frac{y+\varepsilon}{s}\right).
\end{gathered}
\]
The compatible set is \(I(y)=[L,U]\) if \(L\le U\); otherwise it is empty. It is nonempty exactly when
\[
|y|\le sR+\varepsilon.
\]
Indeed the data interval intersects the prior precisely when its left endpoint is at most \(R\) and its right endpoint at least \(-R\). These two inequalities are \(y\le sR+\varepsilon\) and \(y\ge-sR-\varepsilon\). Every point in the intersection is an actual possible truth: set \(e=y-sz\). This proves sufficiency, not just a necessary bound.

For a nonempty interval define
\[
c=(L+U)/2,\qquad r=(U-L)/2.
\]
For any returned real estimate \(a\), including one outside \(I(y)\),
\[
\begin{gathered}
\max_{z\in I(y)}|a-z|\\
=\max(|a-L|,|a-U|)\\
=r+|a-c|.
\end{gathered}
\]
To prove the first equality, when \(z\) lies between the endpoints, its distance from \(a\) cannot exceed the larger endpoint distance. To prove the second, write \(a-c=t\) and the endpoints as \(c-r,c+r\): the larger of \(|t+r|,|t-r|\) is \(r+|t|\).

Consequently the unique best conditional estimate is \(c\), with guaranteed radius \(r\). This remains true for a singleton: \(r=0\), and only \(a=c\) gives zero error. Both endpoint truths have admissible noises and the same \(y\). Since
\[
U-L\le |a-L|+|a-U|,
\]
every rule returning one estimate for this record incurs error at least \(r\) in one endpoint world. The midpoint attains that lower bound. “Minimax” here means minimizing the largest admissible error; it does not identify which world occurred.

A target \(\tau\) is possible precisely when \(r\le\tau\). In that case **all** estimates meeting it form
\[
[U-\tau,L+\tau].
\]
The two endpoint error conditions give these bounds directly; they intersect exactly when \(U-L\le2\tau\). A negative margin \(\tau-(r+|a-c|)\) disproves a uniform guarantee for that estimate by exhibiting a possible failing world. It does not prove that its error for the actual, unknown truth is large.

### Uniform recovery over all possible records

Now fix \(s>0,R,\varepsilon\) but allow every record produced by the assumptions. Every compatible interval has width at most \(2R\) and at most \(2\varepsilon/s\), so
\[
\begin{gathered}
\sup_{\text{consistent }y}r_y\\
=\min(R,\varepsilon/s).
\end{gathered}
\]
The upper bound follows from those two widths. Equality is attained at \(y=0\), whose interval is centered and has exactly that half-width. Thus choosing the midpoint for each record is globally minimax, with that sharp uniform error. At the zero record the two truths
\[
z=\pm\min(R,\varepsilon/s)
\]
with noises \(e=-sz\) establish the lower bound for every rule over all records.

Full inversion \(a=y/s\) has uniform error at most \(\varepsilon/s\); the fixed truncated estimate \(a=0\) has uniform error at most \(R\). Choosing inversion if \(\varepsilon/s\le R\) and zero otherwise also attains the uniform minimax value. These simple rules need not be conditionally optimal at a particular nonzero record: clipping can shift the midpoint. The default third stage demonstrates exactly that distinction.

At \(y=0\), a target is attainable if and only if
\[
R\le\tau\quad\hbox{or}\quad\varepsilon\le s\tau.
\]
No division by \(\tau\) is needed. If the prior alone meets the tolerance, reducing noise or increasing gain is unnecessary for this guarantee. If \(R>\tau\), the required positive-gain condition is \(\varepsilon\le s\tau\). For \(\tau=0\), this says that a singleton prior or exact positive-gain data is required.

### Exact zero, endpoint and inconsistent cases

The controls deliberately avoid dividing by zero. Their positive lower gain is a computational domain, not a mathematical claim that zero gain is impossible.

* If \(s=0\), the observation equation is \(y=e\). If \(|y|\le\varepsilon\), the compatible set is the whole prior \([-R,R]\), so the best estimate is zero and its radius is \(R\). If \(|y|>\varepsilon\), the assumptions are inconsistent. Never evaluate \(y/s\) or \(\varepsilon/s\) in either case. Even \(\varepsilon=0,y=0\) reveals no coordinate information when \(s=0\).
* If \(s>0,\varepsilon=0\), a consistent record gives the singleton \(\{y/s\}\). If \(R=0\), the only possible truth is zero whenever \(|y|\le\varepsilon\), including zero gain.
* For \(s>0\), the record \(y=sR+\varepsilon\) gives the singleton \(\{R\}\), including the degenerate zero-width cases. A larger record is inconsistent. At \(y=-sR-\varepsilon\), the singleton is \(\{-R\}\).
* An empty compatible set diagnoses a conflict among the model, bounds and observation. There is no admissible truth on which to interpret a recovery error. A vacuous logical implication is not an informative perfect-recovery certificate.

The normalized controls \(y=sRq\), \(-1\le q\le1\), cover only the consistent subset \(|y|\le sR\), rather than all \(|y|\le sR+\varepsilon\). The boundary records and inconsistent cases just proved lie outside that interface in general.

### Notebook: change the recovery rule while keeping the record

Predict seven outputs in order: \(L,U,c,r,a\), the worst admissible error for \(a\), and its target margin. The source below uses only positive gain and the same normalized consistent subset. Absolute-value formulas implement max and min without adding a new engine operation.

```notebook bounded-inverse-recovery
param s=0.25 from 0.1 to 1;
param R=1 from 0.25 to 1.5;
param eps=0.125 from 0 to 0.25;
param q=1 from -1 to 1;
param tau=0.25 from 0 to 2;
let record=s*R*q;
let lo=(record-eps)/s;
let hi=(record+eps)/s;
let L=(-R+lo+abs(-R-lo))/2;
let U=(R+hi-abs(R-hi))/2;
let center=(L+U)/2;
let rad=(U-L)/2;
let estimate=record/s;
let worst=rad+abs(estimate-center);
show L;
show U;
show center;
show rad;
show estimate;
show worst;
show tau-worst;
```

**Recovery-rule edit.** With all data and bounds fixed, replace only
```text
let estimate=record/s;
```

by
```text
let estimate=center;
```

Keep the seven output commands unchanged. Before running, explain which outputs must stay fixed, which change, and why a smaller data residual is not the goal of this edit.

<details><summary>Recovery-rule hint</summary>

Only the returned estimate changes. The compatible truths are determined by the original record and bounds, not by your algorithm. Use the exact formula \(r+|a-c|\) to predict the last two outputs.

</details>

<details><summary>Recovery-rule model reasoning</summary>

At the default, the outputs before editing are
\[
\begin{gathered}
1/2,\quad1,\quad3/4,\quad1/4,\\
1,\quad1/2,\quad-1/4.
\end{gathered}
\]
After editing, the first four outputs are unchanged. The last three become \(3/4,1/4,0\). The midpoint's residual is
\[
\begin{gathered}
|y-sc|=|1/4-3/16|\\
=1/16,
\end{gathered}
\]
within the allowed \(1/8\). The exact inverse has zero residual, but it is farther from one possible endpoint truth. The same-record endpoint lower bound proves the midpoint's guarantee is sharp, rather than merely an improvement in one numerical experiment. At other allowed controls, the center may equal the inverse; the proof, rather than a visible change, decides optimality. Floating computations illustrate the independently proved identities.

</details>

### Independent written task: two observations share one error budget

This changes the measurement geometry and the admissible noise set. It is not an extra setting of a default slider. Derive the set before selecting an estimator.

```exercise
{
  "id": "la-bounded-recovery-shared-budget",
  "type": "written",
  "prompt": "Independent changed measurement geometry, outside the controls: let z∈[-1,1], and observe (y1,y2)=(0,1) from y1=z+e1 and y2=2z+e2. The single joint budget is |e1|+|e2|≤3/4; there are not two separately available budgets of 3/4. Derive the entire compatible set by splitting the absolute-value expression into its linear pieces. Find the conditionally best estimate and sharp radius, and supply two endpoint noise vectors for the same observed pair to prove optimality against every recovery rule. Decide targets 1/6 and 1/7. Compare the ordinary least-squares estimate with that guarantee. Finally diagnose what happens when the joint budget becomes 1/2 or smaller.",
  "hints": [
    "For any proposed z, the noise is forced: e1=-z and e2=1-2z. Split |z|+|1-2z| at z=0 and z=1/2, retaining the prior.",
    "Use the interval endpoints, their midpoint and half-width. Two compatible truths must use the same recorded pair.",
    "Least squares minimizes z²+(1-2z)². Its data objective differs from maximum absolute error over compatible truths."
  ],
  "rubric": [
    "Derives all three absolute-value pieces.",
    "Intersects the budget inequality with the prior.",
    "Finds the midpoint and sharp radius.",
    "Provides both admissible endpoint noise vectors.",
    "Decides both requested tolerances.",
    "Compares least squares using worst truth error.",
    "Handles singleton and inconsistent budget cases."
  ],
  "solution": "The compatible truths satisfy |z|+|1-2z|≤3/4 as well as -1≤z≤1. For z≤0 the left side is 1-3z≥1, so this piece contributes nothing. For 0≤z≤1/2 it is 1-z, giving z≥1/4. For z≥1/2 it is 3z-1, giving z≤7/12. Thus I=[1/4,7/12]. Its midpoint is 5/12 and its radius is 1/6. The endpoint noise vectors are (-1/4,1/2) and (-7/12,-1/6); each has joint norm 3/4 and produces exactly (0,1). Their truth separation is 1/3, so the triangle inequality forces every estimate to have error at least 1/6 in one of those worlds. The midpoint attains that bound. Target 1/6 is possible, and target 1/7 is impossible under these premises.\n\nLeast squares minimizes 5z²-4z+1=5(z-2/5)²+1/5 and returns 2/5, within the prior. Its endpoint errors are 3/20 and 11/60, so its worst error is 11/60>1/6. Its own noise (-2/5,1/5) has joint norm 3/5 and is allowed; compatibility does not imply conditional optimality. The piecewise expression has global minimum 1/2, uniquely at z=1/2. A budget of 1/2 therefore leaves the singleton {1/2}, while a smaller budget makes the stated observations and assumptions inconsistent. There is no admissible truth in that case, rather than a meaningful perfect-recovery certificate.\n\nIf the joint budget were replaced by two componentwise bounds of 3/4, the resulting interval would be [1/8,3/4], strictly larger. That replacement changes the information and cannot be used to answer the original task.",
  "transfer": "Changed budget, still outside the controls: keep both gains, prior and observed pair, but replace 3/4 by a symbol eta with 1/2≤eta≤1. Derive the compatible interval, best estimate and radius as functions of eta. Give exactly the budgets in this range that permit target 1/10. Explain why the scalar single-sensor formula min(R,epsilon/s) cannot simply be reused.",
  "transferSolution": "The negative-z piece contributes no negative truths when eta≤1; at eta=1 it includes z=0. The middle piece gives z≥1-eta, and the upper piece gives z≤(1+eta)/3. These bounds lie in [0,1] for the declared eta range, so I_eta=[1-eta,(1+eta)/3]. Its centre is (2-eta)/3 and radius (2eta-1)/3, including the singleton at eta=1/2. Target 1/10 is possible exactly when (2eta-1)/3≤1/10, hence 1/2≤eta≤13/20. The shared noise budget couples the two residuals through one sum of absolute values; it is a different feasible set from one scalar error interval or two independent budgets. Rebuilding that set is the mathematical operation, rather than substituting a new number into an unrelated formula."
}
```

The deterministic signal-set and bounded-noise framework is discussed by [Juditsky and Nemirovski, *Near-Optimality of Linear Recovery from Indirect Observations*, version 5, section 4.1](https://arxiv.org/pdf/1704.00835v5). The interval formulas, exact minimax proofs and joint-budget task here are developed directly, without importing a general recovery theorem. For spectral filtering and truncated SVD as background, see [Per Christian Hansen's *Discrete Inverse Problems* teaching page](https://people.compute.dtu.dk/pcha/DIPbook.html). These references do not turn a supplied deterministic bound into an empirically established one.

## Source chapter 18 — PCA and low-rank models

## Optional clinic: does the best error identify one matrix?

This optional untimed continuation sits outside the chapter's original two-session allocation. Its completion time has not been calibrated. The preceding Eckart–Young statement is correct: truncated SVD supplies a minimizing matrix for each stated norm. We now ask for the **whole set of minimizers**, and test a separate requirement on their outputs.

### State the norm, shape, units, and competitors

Use fixed normalized Euclidean input and output coordinates. Gains and error values below are dimensionless, and the normalization stays fixed across candidates. If starting with physical quantities, choose and declare reference units before using these Euclidean norms; changing those units changes the optimization problem.

Our first matrix is a linear map from \(\mathbb R^2\) to \(\mathbb R^2\):

\[
X=\begin{pmatrix}3&0\\0&1\end{pmatrix}.
\]

The competitors are **all real \(2\times2\) matrices \(Y\) with rank at most one**. This includes the zero matrix. We do not initially require a competitor to be diagonal or to have the same output line as a truncated SVD.

For an error matrix \(E=X-Y\), the spectral norm measures the largest error on a unit input:

\[
\|E\|_2=\max_{\|z\|_2=1}\|Ez\|_2.
\]

The Frobenius norm aggregates all entrywise errors:

\[
\|E\|_F^2=\sum_{i,j}E_{ij}^2.
\]

These are two different objectives, even when their minimum values happen to agree.

In the earlier PCA setting, centered \(X\) has shape \(N\times d\), and \(W\) has shape \(d\times k\) with \(W^TW=I_k\). Its reconstruction \(XWW^T\) has shape \(N\times d\) and imposes the extra requirement of orthogonal projection in feature space. The current example concerns arbitrary rank-bounded matrices, as permitted in the chapter's general approximation theorem. This particular diagonal \(X\) is a normalized \(2\times2\) linear map, not a claim to be a centered data table. Keep the broader competitor class visible throughout the argument.

### Predict before reading the optimizer proof

The singular values of \(X\) are \(3>1>0\), so there is a strict gap. For the displayed family

\[
Y_a=\begin{pmatrix}a&0\\0&0\end{pmatrix},
\]

compare \(a=2,5/2,3,4\). Predict which choices minimize spectral error and which minimize Frobenius error. Does a strict singular gap force the same unique matrix under both objectives? State whether a claim about the displayed family already proves a claim about **all** rank-at-most-one competitors. Record your reasoning before moving the control or reading the proof below.

### Compare both objectives at the same coefficient

The horizontal axis is the retained coefficient \(a\) in \(Y_a\); the vertical axis is a matrix error norm in the fixed normalized units. This is an error-versus-coefficient graph, not a drawing of a matrix, an eigendirection, or observed data. Blue is spectral error; teal is Frobenius error. The rose vertical connector joins their current values at the same \(a\). Its length is the difference between two objective values, **not** the norm of a residual vector.

```mathviz
scene "Two errors for a rank-one choice";
domain 1 5;
range 0.8 2.5;
coordinates free;
param a=2.5 from 1 to 5;
fn spectral(x)=(abs(3-x)+1+abs(abs(3-x)-1))/2;
fn frobenius(x)=sqrt((3-x)^2+1);
plot spectral color blue;
plot frobenius color teal;
segment selected from (a,spectral(a)) to (a,frobenius(a)) color rose;
measure spectral_value=spectral(a);
measure frobenius_value=frobenius(a);

```

**Manipulate →** Start at \(a=5/2\), compare the two readouts, then check \(a=2,3,4\) and an outside value such as \(1\). **Explain →** Decide whether the same minimum error value identifies the same set of minimizing matrices. At \(a=3\), the connector has zero length because the objectives agree; the two readouts still describe two objectives. **Prove →** Establish the lower bound and complete optimizer classification below. The control only samples \(Y_a\) for \(1\le a\le5\); those samples do not prove that no other real rank-at-most-one matrix can do better.

### A norm comparison that works for both matrix shapes

For any real \(m\times n\) matrix \(E\) and unit vector \(z\in\mathbb R^n\), its output \(Ez\) lies in \(\mathbb R^m\). Rowwise Cauchy–Schwarz gives

\[
\begin{aligned}
\|Ez\|_2^2&=\sum_i\left(\sum_jE_{ij}z_j\right)^2\\
&\leq\sum_i\left(\sum_jE_{ij}^2\right)\|z\|_2^2\\
&=\|E\|_F^2.
\end{aligned}
\]

Taking the maximum over unit inputs proves \(\|E\|_2\leq\|E\|_F\). We will use this comparison to prove global Frobenius uniqueness, rather than merely compare a few diagonal candidates.

### Prove the global spectral lower bound

For any real \(2\times2\) competitor of rank at most one, rank–nullity supplies a unit \(w=(w_1,w_2)^T\) in \(\ker Y\). Therefore

\[
\|X-Y\|_2^2\geq\|(X-Y)w\|_2^2
=\|Xw\|_2^2,
\]

\[
\|Xw\|_2^2=9w_1^2+w_2^2=1+8w_1^2\geq1.
\]

The candidate \(Y_3=\operatorname{diag}(3,0)\) has residual \(\operatorname{diag}(0,1)\) and attains error one. Thus the global optimal spectral error is exactly one, including competitors outside the displayed family.

### Find every spectral minimizer

Suppose \(\|X-Y\|_2\leq1\). The lower-bound calculation forces every unit kernel vector to have \(w_1=0\), so its possible unit values are **\(\pm e_2\)**. Either sign gives \(Ye_2=0\). Rank zero is impossible at this error, since \(\|X-0\|_2=3\); consequently \(\ker Y=\operatorname{span}\{e_2\}\).

Write \(Ye_1=(a,b)^T\). For \(E=X-Y\),

\[
Ee_1=(3-a,-b)^T,
\]

\[
Ee_2=e_2.
\]

The defining operator inequality holds for every input, not only unit inputs. Apply it to \(e_2+h e_1\) for every real \(h\):

\[
-2bh+\big((3-a)^2+b^2-1\big)h^2\leq0.
\]

Here the coefficient \(c=(3-a)^2+b^2-1\) is finite. If \(b\ne0\), choose \(\varepsilon>0\) with \(\varepsilon|c|<|b|\), and choose \(h\) of magnitude \(\varepsilon\) with the opposite sign to \(b\). Then

\[
\begin{aligned}
-2bh+ch^2&\geq2|b|\varepsilon-|c|\varepsilon^2\\
&>|b|\varepsilon>0,
\end{aligned}
\]

contradicting the inequality. Hence \(b=0\). This argument uses finite algebraic inequalities; it needs no differentiation or limit theorem.

We have proved that every spectral minimizer is diagonal, rather than imposing diagonality as a competitor restriction. Its error is

\[
\|X-Y_a\|_2=\max(|3-a|,1).
\]

It is at most one exactly when \(2\leq a\leq4\). Conversely every such \(Y_a\) has rank one and error one. The complete set of global spectral minimizers is therefore

\[
Y=\operatorname{diag}(a,0),
\]

\[
2\leq a\leq4.
\]

A strict singular gap did not make this optimizer set a singleton.

### Prove the unique Frobenius choice

For every allowed competitor,

\[
\|X-Y\|_F\geq\|X-Y\|_2\geq1.
\]

The candidate \(Y_3\) attains Frobenius error one. Every Frobenius minimizer must consequently also be spectral-optimal, and so belongs to the complete interval just proved. On that interval,

\[
\|X-Y_a\|_F^2=1+(3-a)^2.
\]

Equality to one forces \(a=3\). Thus \(Y_3\) is the **unique global Frobenius minimizer**, while infinitely many matrices attain the same optimal spectral error. This is uniqueness over the entire declared competitor class.

The exact comparison checks are:

- At \(a=1\) or \(5\): spectral error \(2\), Frobenius error \(\sqrt5\).
- At \(a=2\) or \(4\): spectral error \(1\), Frobenius error \(\sqrt2\).
- At \(a=5/2\): spectral error \(1\), Frobenius error \(\sqrt5/2\).
- At \(a=3\): both error values are \(1\).

Both optimal error values happen to be one here. In larger examples with several discarded singular values, the Frobenius and spectral optimal values can themselves differ, as the chapter's formulas show. An error value, a minimizing matrix, and a complete optimizer set are distinct answers.

The competitor distinction also has a concrete consequence. If we additionally required \(Y=XP\) for a rank-one orthogonal projector \(P\), then an optimal \(Y_a\) would give

\[
P=X^{-1}Y_a=\operatorname{diag}(a/3,0).
\]

Idempotence forces \(a/3\) to be zero or one; inside the optimal interval only \(a=3\) remains. Silently restricting to orthogonal reconstructions would therefore change the optimizer set. The earlier PCA discussion and the arbitrary-matrix result are consistent.

### Keep the zero-error and rank-zero exceptions

If the discarded singular value is changed to zero, \(X_0=\operatorname{diag}(3,0)\) itself has rank one. It is an admissible exact approximation. The minimum error is zero in either norm, and zero norm of \(X_0-Y\) forces \(Y=X_0\). More generally, if the rank bound already permits the exact matrix, it is the unique zero-error minimizer in either norm, including zero singular values tied at a cutoff.

With rank bound zero, \(Y=0\) is the only competitor, even if the error is positive. For the original \(X\), its spectral error is three and Frobenius error is \(\sqrt{10}\). Rank zero was included in the main rank-at-most-one class, but was not optimal there. Do not turn the positive-tail example into a claim that spectral approximation is always nonunique or that every tied cutoff is nonunique.

### Independent changed task: a rectangular optimizer disk and an output condition

Keep the same normalized Euclidean convention, but change the output space from \(\mathbb R^2\) to \(\mathbb R^3\). Define three output vectors

\[
u_1=(1,2,2)^T/3,
\]

\[
u_2=(2,1,-2)^T/3,
\]

\[
u_3=(2,-2,1)^T/3,
\]

and the \(3\times2\) map

\[
A=[3u_1,u_2]
=\begin{pmatrix}1&2/3\\2&1/3\\2&-2/3\end{pmatrix}.
\]

The competitors are **all real \(3\times2\) matrices \(Y\) of rank at most one**. This is written work outside the scalar controls above.

1. Verify the output vectors are orthonormal and find the singular values of \(A\).
2. Find the optimal spectral error and **all** matrices attaining it. Do not assume the scalar interval from the square example is still the whole answer.
3. Find the Frobenius minimizer and prove or disprove its global uniqueness.
4. The original map satisfies the exact output condition \(u_3^TA=0\). Must every spectral-optimal surrogate satisfy \(u_3^TY=0\)? Produce an exact violating matrix if the condition does not follow. Explain how explicitly imposing the condition changes the competitor class.

<details><summary>Hints for the changed task</summary>

1. Compute numerator dot products and \(A^TA\). The vectors \(u_i\) live in the output space; \(e_1,e_2\) below live in the two-dimensional input space.
2. Use a unit kernel vector of \(Y\). At optimal error, determine what happens to \(e_2\), including both possible signs of a unit kernel vector. Expand \(Ye_1=s u_1+q u_2+t u_3\), and test the operator inequality at \(e_2+h e_1\) for both signs of small \(h\).
3. Once the residual columns are orthogonal, compute their lengths and the sum of their squared lengths. Use the global norm comparison, not only a comparison within a guessed family.
4. Test \(u_3^TY\) separately. Try \((s,t)=(3,1)\) only after deriving the admissible optimizer region.

</details>

<details><summary>Full reasoned answer to the changed task</summary>

**Basis and lower bound.** Each numerator has squared length nine. The three pairwise numerator dot products are \(2+2-4=0\), \(2-4+2=0\), and \(4-2-2=0\); hence the \(u_i\) form an orthonormal output basis. The two columns of \(A\) are orthogonal with lengths three and one, so

\[
A^TA=\operatorname{diag}(9,1).
\]

The singular values are \(3,1\). Any allowed \(Y\) has a unit input vector \(w\in\ker Y\). Then

\[
\|A-Y\|_2^2\geq\|Aw\|_2^2=1+8w_1^2\geq1.
\]

The candidate \([3u_1,0]\) attains spectral error one, so this is the global optimum.

**Complete optimizer set.** If the error is at most one, the lower bound forces the unit kernel vectors to be \(\pm e_2\), and \(Ye_2=0\). Rank zero is again impossible since \(\|A\|_2=3\). Write

\[
Ye_1=s u_1+q u_2+t u_3.
\]

The residual \(E=A-Y\) has columns

\[
Ee_1=(3-s)u_1-q u_2-t u_3,
\]

\[
Ee_2=u_2.
\]

Applying its operator bound to \(e_2+h e_1\), for every real \(h\), gives

\[
-2qh+\big((3-s)^2+q^2+t^2-1\big)h^2\leq0.
\]

If \(q\ne0\), the opposite-sign \(h\) argument proved above applies with the finite coefficient \(c=(3-s)^2+q^2+t^2-1\), making the left side strictly positive. Thus \(q=0\). The residual columns are now orthogonal, with squared lengths \((3-s)^2+t^2\) and one. Therefore

\[
\|A-Y\|_2=\max\!\left(\sqrt{(3-s)^2+t^2},1\right).
\]

The complete spectral optimizer set is

\[
Y=[s u_1+t u_3,0],
\]

\[
(3-s)^2+t^2\leq1.
\]

This is a disk of coefficient pairs, rather than the square example's interval. Conversely every pair in this disk gives spectral error one. Since \(s\geq2\) in the disk, its first column is nonzero and its matrix has rank one, as required.

**Frobenius choice.** Every competitor has Frobenius error at least its spectral error, hence at least one. The candidate \([3u_1,0]\) attains one. Any Frobenius minimizer is consequently in the complete spectral disk, where

\[
\|A-Y\|_F^2=1+(3-s)^2+t^2.
\]

Equality to one forces \((s,t)=(3,0)\). This proves that \([3u_1,0]\) is the unique global Frobenius minimizer.

**Output condition.** Orthogonality gives \(u_3^TA=(0,0)\), but for a spectral minimizer

\[
u_3^TY=(t,0).
\]

Choose \((s,t)=(3,1)\). The resulting matrix is

\[
Y=\begin{pmatrix}5/3&0\\4/3&0\\7/3&0\end{pmatrix}.
\]

It has rank one. Its residual columns are \(-u_3\) and \(u_2\), two orthonormal vectors; therefore \((A-Y)^T(A-Y)=I_2\), its spectral error is one, and its Frobenius error is \(\sqrt2\). Yet \(u_3^TY=(1,0)\ne0\). On unit input \(e_1\), the surrogate introduces an output component of one along \(u_3\), although the original map has no component along that direction.

Thus a best spectral error does not by itself preserve the exact output condition. If the condition is explicitly required, it restricts the optimizer disk to \(t=0\), leaving the interval \(2\leq s\leq4\). The Frobenius center remains allowed. A structural condition is an additional modeling requirement, not a consequence of the numerical value of an optimal error.

</details>

For norm conventions and best low-rank approximation context, see Daniel Kressner's [EPFL Lecture 1](https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/10/lecture1-slides.pdf), PDF pages 18 and 23–24. The interval and disk classifications above supply the specific claims used here; the zero-error and rank-zero qualifications are part of their scope.

## Source chapter 19 — Networks and Markov chains

## Optional clinic: certify a range and choose the conserved mean

This optional untimed continuation sits outside the chapter's original two-session allocation. Its completion time has not been calibrated. Use elementary differentiation as well as the chapter's nullspace and graph ideas. The original heat exercise is correct: here we prove a different certificate, then change the evolution law and determine which average survives.

Suppose three node values start at \((3/4,1,3/4)\). Must every value remain between \(3/4\) and \(1\)? If the values approach a common number, which average selects it? Write separate answers: an energy calculation, a range bound, a conserved average, and a convergence proof perform different jobs.

**Prediction before the proofs.** On the unit-weight path \(1\text{—}2\text{—}3\), let \(D=\operatorname{diag}(1,2,1)\). Compare the old equal-capacity law \(x'=-Lx\) with the new row-normalized law \(x'=-D^{-1}Lx\), using the same initial values \((3/4,1,3/4)\). The ordinary mean is \((x_1+x_2+x_3)/3\); the degree-weighted mean is \((x_1+2x_2+x_3)/4\). Before reading the proofs, record which of these four quantities you predict stays fixed: ordinary mean in the old law, degree-weighted mean in the old law, ordinary mean in the new law, degree-weighted mean in the new law. Predict whether either law can move a coordinate outside \([3/4,1]\). Write the matrix or derivative you would check to support each prediction, then revisit your answers after the development below.

### A range theorem with a complete contact argument

Use dimensionless time \(\theta\). All coordinates are commensurate scalar values with the same fixed value unit; they need not be probabilities. If physical time is \(t\), a declared reference time \(T_*\) gives \(\theta=t/T_*\). This common clock change does not alter the relative rates at different vertices.

Let \(G\) be a finite constant real \(n\times n\) matrix, and let a \(C^1\) solution of \(x'=Gx\) be supplied on a declared finite interval \([0,T]\), \(T>0\). Assume

\[
g_{ij}\geq0\quad(i\ne j),
\qquad G\mathbf1=0.
\]

The second condition says that every row sums to zero. Together they give

\[
x_i'=\sum_{j\ne i}g_{ij}(x_j-x_i).
\]

Put \(m_0=\min_i x_i(0)\) and \(M_0=\max_i x_i(0)\). Then every coordinate remains in the initial range:

\[
m_0\leq x_i(\theta)\leq M_0
\quad(0\leq\theta\leq T).
\]

**Proof.** Fix \(\delta>0\) and put \(U_\delta(\theta)=M_0+\delta(1+\theta)\). Initially all coordinates lie strictly below this barrier. At a first contact \(x_i(\theta_*)=U_\delta(\theta_*)\), every other coordinate is at most the touching value. Hence \(x_i'(\theta_*)\leq0\). But \(x_i-U_\delta\), reaching zero from below for the first time, must have derivative at least zero, while its derivative is at most \(-\delta<0\). This contradiction also applies to contact at \(T\), using the left derivative there.

For the lower barrier \(L_\delta(\theta)=m_0-\delta(1+\theta)\), a first touching coordinate is at most every other coordinate, so \(x_i'\geq0\). The difference \(x_i-L_\delta\) first reaches zero from above and must have derivative at most zero; its derivative is instead at least \(\delta>0\). Let \(\delta\downarrow0\) in both strict bounds. This proves the claim. Repeating the argument from any starting time \(s\) proves that the coordinate maximum is nonincreasing and the minimum is nondecreasing. Merely observing a nonpositive derivative at a maximum, without resolving zero-derivative contact, would leave a gap in this proof.

The theorem allows negative initial values. It implies nonnegativity when \(m_0\geq0\), and a positive lower bound when all initial values are positive. It does not promise strict entry into the interior from boundary data. Constant data and the zero state remain constant. A zero generator row freezes that coordinate. The difference of two supplied solutions with the same initial state has initial range \([0,0]\); applying the theorem proves uniqueness on their common interval.

For necessity, make the additional assumption that a local \(C^1\) solution is supplied **from every initial state**, and require range preservation from all of them.

In particular, take \(\mathbf1\) and each \(e_j\). Initial data \(\mathbf1\) have singleton range and force \(G\mathbf1=0\). If \(g_{ij}<0\) for some \(i\ne j\), initial data \(e_j\) give \(x_i(0)=0\) and \(x_i'(0)=g_{ij}<0\), violating nonnegativity immediately. Thus both hypotheses are necessary under that additional supply-of-solutions assumption.

The theorem is conditional on a supplied solution. It neither constructs solutions for arbitrary generators nor proves their convergence. The explicit formulas later in this clinic supply global solutions and convergence for the particular models used.

### Right nullvectors describe equilibria; left nullvectors describe conservation

For a fixed vector \(w\),

\[
\frac{d}{d\theta}(w^Tx)=w^TGx.
\]

Therefore \(G^Tw=0\) makes \(w^Tx\) constant. Conversely, if local solutions are supplied from every initial basis state and this functional is conserved for all of them, its derivative at zero gives \(w^TG=0\). Solve a **left-null** problem to find conserved linear functionals.

In contrast, \(Gv=0\) is a **right-null** problem: it says that the state \(v\) is an equilibrium. The right equality \(G\mathbf1=0\) fixes constant states. Ordinary sum conservation needs the separate left equality \(\mathbf1^TG=0\). Symmetry made these agree in the original heat exercise; a changed generator need not be symmetric.

If a particular solution converges to \(c\mathbf1\), a conserved functional with \(w^T\mathbf1\ne0\) forces

\[
c=\frac{w^Tx(0)}{w^T\mathbf1}.
\]

This is the only possible consensus level, not a proof that consensus occurs. Positive normalized weights put that candidate level inside the initial range.

### Change the law, keeping the same state meaning and units

Let \(A=A^T\) be the weighted adjacency of a finite loopless undirected graph, with \(a_{ij}\geq0\) entrywise and positive degrees \(d_i=\sum_j a_{ij}\). Set

\[
D=\operatorname{diag}(d_i),\qquad L=D-A.
\]

The original equal-capacity heat law is \(x'=-Lx\). Keep Chapter 19's probability-column transition \(P=AD^{-1}\), and define a new **vertex-value** generator

\[
\begin{aligned}
G_{\rm rw}&=-D^{-1}L\\
&=D^{-1}A-I\\
&=P^T-I.
\end{aligned}
\]

Dividing each row by its own degree changes node rates; it is not a common time rescaling on an irregular graph. The coordinates still mean node values, with one common scale. In the new equation \(x'=G_{\rm rw}x\), off-diagonal entries are \(a_{ij}/d_i\geq0\) and rows sum to zero, so the range theorem applies. Also, with \(d=(d_1,\ldots,d_n)^T\),

\[
d^TG_{\rm rw}=-\mathbf1^TL=0.
\]

Thus the degree-weighted mean is conserved:

\[
\frac{d^Tx(\theta)}{\sum_i d_i}
=\frac{d^Tx(0)}{\sum_i d_i}.
\]

This uses the left nullspace to identify an observable of a changed evolution. The old degree-proportional stationary-probability calculation remains correct, but it describes a distribution, not node values approaching a common value. The conventions are:

| Law | State | Relevant conserved quantity |
| --- | --- | --- |
| \(p_{k+1}=Pp_k\) | Probability column | \(\mathbf1^Tp\) |
| \(x'=(P^T-I)x\) | Vertex-value column | \(d^Tx\) |
| \(p'=(P-I)p\) | Continuous-time probability column | \(\mathbf1^Tp\) |

The probability generator in the last row is \(G_{\rm rw}^T\); transposition changes which evolution is being studied. The existing lazy stochastic matrix \(Q=(I+P)/2\) is unchanged and is not this generator.

In a heat interpretation the old equation uses equal node capacities, while the new equation is \(Dx'=-Lx\). Interpreting \(d^Tx\) as total heat requires a justified capacity model proportional to degrees, compatible units, and a declared time scale. Algebra alone does not supply that physical assumption. On a regular graph \(D=dI\), normalization is just a common clock change and the two means agree.

Do not form \(D^{-1}\) at a zero degree. If isolated vertices are allowed, declare their values frozen separately; their initial values are additional invariants. In a disconnected graph the positive-degree component means are separately conserved. No consensus across components follows. The right kernel of \(G_{\rm rw}\) equals that of \(L\), since \(D\) is invertible on the positive-degree vertices.

Graph energy still decreases for the new law, but its derivative changes:

\[
E=x^TLx,
\]

\[
E'=-2(Lx)^TD^{-1}(Lx)\leq0.
\]

This follows by differentiating and using symmetry of \(L\) and \(D^{-1}\). It is not the old identity \(-2\|Lx\|_2^2\), and neither energy identity replaces the range proof.

### Revisit your prediction and compare the two three-path models

Return to the four-mean and range predictions you recorded before the proofs. Keep the unit-weight path \(1\text{—}2\text{—}3\) and initial values \((3/4,1,3/4)\) fixed in both laws. Before changing the control, compare your supporting matrix or derivative checks with the results above; use the display to revisit your predictions.

The horizontal positions are **categories**, not vertex positions or distances: column 1 is equal-capacity heat, and column 2 is row-normalized heat. The vertical coordinate uses the same node-value unit in both columns. Each vertical bar spans that model's current minimum and maximum. The short caps mark endpoint values: outer vertices 1 and 3 give the lower endpoint, and vertex 2 gives the upper endpoint. Two longer reference lines span both columns at the common **initial** ordinary mean \(5/6\) and initial degree-weighted mean \(7/8\). These are reference levels, not physical graph links or claims about which quantity is conserved. The four readouts are the **current** means; decide which stay at their initial reference levels.

```mathviz
scene "Two heat laws: ranges and conserved means";
domain 0.5 2.5;
range 0.7 1.05;
coordinates free;
param theta=0 from 0 to 2;
let old_outer=5/6-exp(-3*theta)/12;
let old_middle=5/6+exp(-3*theta)/6;
let new_outer=7/8-exp(-2*theta)/8;
let new_middle=7/8+exp(-2*theta)/8;
segment old_range from (1,old_outer) to (1,old_middle) color blue;
segment new_range from (2,new_outer) to (2,new_middle) color teal;
segment initial_mean_ref from (0.75,5/6) to (2.25,5/6) color amber;
segment initial_degree_ref from (0.75,7/8) to (2.25,7/8) color violet;
segment old_lower_cap from (0.92,old_outer) to (1.08,old_outer) color blue;
segment old_upper_cap from (0.92,old_middle) to (1.08,old_middle) color blue;
segment new_lower_cap from (1.92,new_outer) to (2.08,new_outer) color teal;
segment new_upper_cap from (1.92,new_middle) to (2.08,new_middle) color teal;
measure old_mean=(2*old_outer+old_middle)/3;
measure old_degree_mean=(old_outer+old_middle)/2;
measure new_mean=(2*new_outer+new_middle)/3;
measure new_degree_mean=(new_outer+new_middle)/2;

```

**Manipulate →** At \(\theta=0\), check the common initial range and all four mean readouts. Then move \(\theta\) toward 2 and revisit your predictions. For the exact paper checkpoint \(\theta=\ln2\), enter a decimal approximation such as `0.69314718056` in the time control. Which initial reference level lies outside each model's current range? **Explain →** Use the nested-range theorem to exclude that level for every later time and any possible later consensus. Identify the left-null vector for each conserved mean. Explain why a visually tiny bar is not a proof that its width is zero. **Transfer →** Complete the directed task below without a scene.

The display evaluates known closed forms numerically; it does not integrate an unknown graph system or prove an all-time statement. At large \(\theta\), short caps and reference lines may visually merge. The exact bar widths below remain positive at every finite time. Use the written formulas and proof for conservation, range, and limits.

### Exact solutions and a full answer to the prediction

For the normalized three-path,

\[
G_{\rm rw}=
\begin{pmatrix}-1&1&0\\1/2&-1&1/2\\0&1&-1\end{pmatrix}.
\]

Its right kernel contains \(\mathbf1\), and \((1,2,1)G_{\rm rw}=0\). For arbitrary real initial data \((u,v,w)\), put

\[
\mu=(u+2v+w)/4,
\]

\[
a=(u-w)/2,
\]

\[
b_{\rm rw}=(u-2v+w)/4.
\]

The solution is

\[
\begin{aligned}
x_1&=\mu+a e^{-\theta}+b_{\rm rw}e^{-2\theta},\\
x_2&=\mu-b_{\rm rw}e^{-2\theta},\\
x_3&=\mu-a e^{-\theta}+b_{\rm rw}e^{-2\theta}.
\end{aligned}
\]

To prove it, multiply \(G_{\rm rw}\) by \(\mathbf1,(1,0,-1),(1,-1,1)\). The products are those vectors times \(0,-1,-2\), respectively. Differentiating the displayed expression therefore gives the equation, and substituting \(\theta=0\) gives \((u,v,w)\). This supplies a global \(C^1\) solution for this actual model. Uniqueness follows by applying the range theorem to the difference of two solutions. The exponentials tend to zero, proving convergence to \(\mu\mathbf1\).

For comparison, the old equal-capacity law \(x'=-Lx\) on the same path has

\[
c=(u+v+w)/3,
\]

\[
b_{\rm old}=(u-2v+w)/6,
\]

\[
\begin{aligned}
x_1&=c+a e^{-\theta}+b_{\rm old}e^{-3\theta},\\
x_2&=c-2b_{\rm old}e^{-3\theta},\\
x_3&=c-a e^{-\theta}+b_{\rm old}e^{-3\theta}.
\end{aligned}
\]

Here the relevant eigenvectors are \(\mathbf1,(1,0,-1),(1,-2,1)\), with eigenvalues \(0,-1,-3\) for \(-L\). The same differentiation and initial-data check prove this formula and its limit \(c\mathbf1\). Both models preserve the initial coordinate range because each generator has nonnegative off-diagonal entries and zero row sums. Their different limiting means arise from different laws.

For \((u,v,w)=(3/4,1,3/4)\), the formulas reduce to

\[
\begin{aligned}
x_{1,\rm old}=x_{3,\rm old}&=5/6-e^{-3\theta}/12,\\
x_{2,\rm old}&=5/6+e^{-3\theta}/6,
\end{aligned}
\]

\[
\begin{aligned}
x_{1,\rm rw}=x_{3,\rm rw}&=7/8-e^{-2\theta}/8,\\
x_{2,\rm rw}&=7/8+e^{-2\theta}/8.
\end{aligned}
\]

The scene's four mean readouts have the exact values

\[
\text{old ordinary mean}=5/6,
\]

\[
\text{old degree mean}=5/6+e^{-3\theta}/24,
\]

\[
\begin{gathered}
\text{new ordinary mean}\\
=7/8-e^{-2\theta}/24,
\end{gathered}
\]

\[
\text{new degree mean}=7/8.
\]

Thus the old ordinary mean and new degree mean stay fixed. The old degree mean moves from \(7/8\) toward \(5/6\); the new ordinary mean moves from \(5/6\) toward \(7/8\). The normalized conserved total is \(x_1+2x_2+x_3=7/2\). The normalized initial derivative is \((1/4,-1/4,1/4)\), so its ordinary sum initially increases at rate \(1/4\).

At the exact checkpoint \(\theta=\ln2\), the answer is:

**Model: Equal capacity.**

| Quantity | Value |
| --- | --- |
| Minimum | \(79/96\) |
| Maximum | \(41/48\) |
| Ordinary mean | \(5/6\) |
| Degree mean | \(161/192\) |

**Model: Row normalized.**

| Quantity | Value |
| --- | --- |
| Minimum | \(27/32\) |
| Maximum | \(29/32\) |
| Ordinary mean | \(83/96\) |
| Degree mean | \(7/8\) |

This checkpoint gives an all-later exclusion certificate. The old maximum is \(41/48<7/8\), so the initial degree mean lies strictly above the old current range. The new minimum is \(27/32>5/6\), so the initial ordinary mean lies strictly below the new current range. The nested-range theorem keeps every later coordinate within its range at \(\ln2\). Each current ordinary or degree-weighted mean is a positive weighted average of those coordinates and also lies in that range. Thus the wrong mean cannot remain at or return to its initial value after this checkpoint; neither excluded reference level can be a later coordinate value or a possible consensus limit for that law. This conclusion uses an exact checkpoint and the theorem, not a visually estimated crossing or an assumption that range preservation proves convergence.

All four endpoint values lie in \([3/4,1]\). More generally the exact widths are

\[
\text{old width}=e^{-3\theta}/4,
\]

\[
\text{new width}=e^{-2\theta}/4.
\]

They are positive at every finite \(\theta\geq0\), tend to zero, and are consistent with the separate barrier proof. Range preservation alone would not prove these limits.

### Keep range, graph energy, and Euclidean norm separate

For the normalized principal example, graph energy is exactly

\[
\begin{aligned}
E&=(x_1-x_2)^2+(x_2-x_3)^2\\
&=e^{-4\theta}/8.
\end{aligned}
\]

It decreases, and the coordinate range contracts. But the Euclidean squared norm initially increases:

\[
\begin{gathered}
x(0)^Tx'(0)\\
=3/16-1/4+3/16\\
=1/8,
\end{gathered}
\]

\[
\left.(\|x\|_2^2)'\right|_{0}=2x(0)^Tx'(0)=1/4>0.
\]

This is compatible with a contracting range away from zero. The graph energy \(x^TLx\) measures differences between neighbors; the Euclidean squared norm \(x^Tx\) measures distance from the zero vector.

Conversely, norm decay alone does not preserve coordinate ranges. A two-coordinate family also studied in Chapter 20 contains

\[
A_{-1}=\begin{pmatrix}-1&-1\\0&-2\end{pmatrix}.
\]

For \(z'=A_{-1}z\), with coordinates \((p,q)\), direct differentiation gives

\[
\begin{aligned}
(p^2+q^2)'&=-2(p+q/2)^2\\
&\quad-(7/2)q^2\\
&\leq0.
\end{aligned}
\]

Yet from \(z(0)=(0,1)\) its exact solution is

\[
p=-e^{-\theta}(1-e^{-\theta}),\qquad q=e^{-2\theta}.
\]

For every \(\theta>0\), \(p<0\), outside the initial range \([0,1]\). You can verify the solution by differentiation, without reading ahead. Both range hypotheses fail: an off-diagonal entry is \(-1\), and \(A_{-1}\mathbf1=(-2,-2)^T\ne0\). The example rejects an inference from norm decay to range preservation; it does not isolate necessity of either hypothesis.

### Independent changed task: directed rates and a different conserved mean

Change both the graph and its rates. Let

\[
\widehat G=
\begin{pmatrix}-1&1&0\\0&-2&2\\3&0&-3\end{pmatrix},
\]

\[
x(0)=(1,0,0)^T.
\]

1. Prove that every coordinate of a supplied solution remains in \([0,1]\) on its declared interval. After constructing a global solution, explain why the bounds hold for all \(\theta\geq0\).
2. Find **all** conserved linear functionals and normalize the positive weights to sum to one. Find the right kernel and the only possible consensus level. Keep conservation separate from convergence.
3. Decide whether the ordinary mean is conserved, using column sums and the derivative at the given initial state. Test the tempting undirected-degree guess \((1,2,3)\).
4. Verify an explicit global solution and its limit. Explain whether an oscillating deviation from consensus forces a coordinate to become negative.

<details><summary>Hints for the directed task</summary>

1. Check off-diagonal signs and row sums; apply the strict barriers on each finite interval.
2. Solve \(w^T\widehat G=0\) for conserved weights and \(\widehat Gv=0\) for equilibria.
3. Compute \(\mathbf1^T\widehat G\) and \((1,2,3)\widehat G\).
4. Put \(\omega=\sqrt2\), \(r=(5,-6,-6)^T\), and \(s=(4,-18,15)^T\). Verify \(\widehat Gr=-3r+s\) and \(\widehat Gs=-2r-3s\). Use these identities to differentiate a damped sine/cosine expression. The characteristic polynomial is \(\lambda(\lambda^2+6\lambda+11)\), if that method helps.

</details>

<details><summary>Full reasoned answer to the directed task</summary>

**Range.** Every off-diagonal entry is nonnegative and each row sums to zero. The theorem therefore bounds every supplied solution by its initial range \([0,1]\) on each finite interval. A formula below supplies the global solution required to extend this conclusion to all nonnegative times.

**Conserved functionals and equilibria.** The left-null equations are

\[
-w_1+3w_3=0,
\]

\[
w_1-2w_2=0,
\]

\[
2w_2-3w_3=0.
\]

They give all left-null vectors as multiples of \((6,3,2)^T\). Thus every conserved linear functional is a scalar multiple of \(6x_1+3x_2+2x_3\), including the zero multiple. The normalized positive weights are

\[
\pi=(6,3,2)^T/11.
\]

The right-null equations force \(v_1=v_2=v_3\), so the right kernel is \(\operatorname{span}\{\mathbf1\}\). If this initial state converges to a constant, conservation forces its value to be \(6/11\). This identifies a candidate; it has not yet proved convergence.

**Ordinary mean and the wrong guess.** Column sums give

\[
\mathbf1^T\widehat G=(2,-1,-1),
\]

\[
(x_1+x_2+x_3)'=2x_1-x_2-x_3.
\]

At zero the sum derivative is 2 and the ordinary mean derivative is \(2/3\); ordinary mean is not conserved. The undirected-degree guess also fails explicitly:

\[
(1,2,3)\widehat G=(8,-3,-5)\ne0.
\]

**Global solution and convergence.** With the hint's \(\omega,r,s\), set

\[
\begin{aligned}
h(\theta)&=r\cos(\omega\theta)\\
&\quad+\frac{s}{\omega}\sin(\omega\theta),
\end{aligned}
\]

\[
x(\theta)=\frac6{11}\mathbf1+\frac{e^{-3\theta}}{11}h(\theta).
\]

At zero, \((6\mathbf1+r)/11=(1,0,0)^T\). Direct multiplication gives

\[
\widehat Gr=(-11,0,33)^T=-3r+s,
\]

\[
\begin{aligned}
\widehat Gs&=(-22,66,-33)^T\\
&=-2r-3s.
\end{aligned}
\]

Differentiating the expression has cosine coefficient \(-3r+s\) and sine coefficient

\[
-\omega r-3s/\omega=(-2r-3s)/\omega.
\]

These are precisely the coefficients obtained by applying \(\widehat G\), and \(\widehat G\mathbf1=0\). Thus the displayed expression is a global \(C^1\) solution. Applying the range theorem to differences proves uniqueness; applying it to this solution on every finite interval proves \(0\leq x_i(\theta)\leq1\) for all \(\theta\geq0\). The sine and cosine factors are bounded, while \(e^{-3\theta}\to0\), proving

\[
x(\theta)\longrightarrow(6/11)\mathbf1.
\]

A deviation from \(6/11\) may change sign while the coordinate itself stays in \([0,1]\). Oscillation around a positive consensus is compatible with the range certificate. Constant data, including the zero state, remain constant. This calculation proves convergence for this explicit model and initial state; it is not a general convergence theorem for directed generators.

Finally, \(p'=\widehat G^Tp\) would be a different probability-column evolution. It conserves \(\mathbf1^Tp\) and has stationary probability column \(\pi\), because \(\widehat G^T\pi=0\). Do not transfer that ordinary probability mass to the vertex-value equation without transposing the generator.

</details>

The range and left-null methods can also be compared with Stephen Boyd's [EE363 lecture on invariant sets, conservation, and dissipation](https://ee363.stanford.edu/archive/lectures/conserv.pdf), slides 11–4, 11–5, and 11–16. Fan Chung's [heat-kernel paper](https://fanchung.ucsd.edu/wp/heatpnas.pdf), preliminaries, uses row distributions with \(W=D^{-1}A\); transposing those distributions yields this chapter's probability-column convention. The barrier proof and explicit calculations above supply the claims used in this clinic.

## Source chapter 20 — Linear systems and the capstone

## Optional clinic: when does the model certify a tolerance?

This untimed clinic extends the chapter's existing transient-growth example. It sits outside the original two-session-plus-capstone study promise; no completion time or marking calibration is supplied. The aim is to prove a statement about every initial state, then choose a waiting time that certifies a fixed tolerance for every later state. Work through the written argument even if you use the diagrams.

### Fix the clock, scale and norm first

We use normalized time \(\theta\ge0\). Every prime in this clinic means differentiation with respect to \(\theta\). The model is
\[
z'=A_kz,\qquad z=(x,y)^{\mathsf T},
\]
\[
A_k=\begin{pmatrix}-1&k\\0&-2\end{pmatrix}.
\]
The known parameter \(k\) is any fixed finite real number. The two state coordinates are dimensionless and use one fixed Euclidean norm. We do not change that norm to make a target easier.

For a physical interpretation, fix a reference time \(T_\star>0\) and a common state scale \(S>0\). Let \(q=(q_1,q_2)\) contain commensurate quantities measured in the same unit, and set
\[
\theta=t/T_\star,\qquad z=q/S.
\]
The specified physical family is
\[
\frac{dq}{dt}=\frac1{T_\star}A_kq.
\]
Its normalized rates and \(k\) are dimensionless. The same \(S\) divides both components, so
\[
\|q\|_2=S\|z\|_2.
\]
A physical tolerance \(\delta\) becomes \(\tau=\delta/S\); a normalized waiting time \(\Theta\) becomes physical time \(T_\star\Theta\). The clock, scale, norm, initial state and model remain fixed while time changes. All logarithms are natural, and their arguments below are dimensionless ratios.

If two state components have different physical units, first justify a fixed nondimensionalization and state which norm it defines. That is a modeling choice. Here we use the common-scale convention above. The adapted coordinate introduced later is a proof device; its energy is not asserted to be physical stored energy. No parameter uncertainty, time-varying coefficient or numerical-solver guarantee is part of this exact model.

### Saved investigation: from a sign to a certificate

Save your prediction before exploring each stage, then compare and revise it after reading the reasoning. The stage checklists record self-assessment. Each stage has its own controls; changing one does not silently reset the mathematical assumptions of another.

```visual-story
{
  "id": "norm-energy-certificate",
  "title": "What certifies every later state?",
  "prompt": "Save a prediction before exploring each diagram, then compare it with a proof. A selected state or time tests one case; a written inequality supplies the claim about every initial state or every later time. The first diagram uses the original state plane, the second an explicitly adapted plane, and the third a time graph.",
  "stages": [
    {
      "title": "Classify the original norm",
      "body": "These are the fixed original coordinates (x,y), with equal scales. Blue is the circle with the selected initial radius; amber ends at (u,v). The rose segment is one quarter of the initial velocity, anchored at that state, and its tip is marked. This is a tangent construction, not the exact state after one quarter of a time unit. The tip can lie outside the circle even when the initial norm derivative is zero. Use the derivative readout and radial dot product, rather than the tip's distance, to decide initial growth. The witness readout is for the separate analytic initial state (k/2,1); it need not describe your selected (u,v).",
      "question": "At the default k=3 and (u,v)=(3/2,1), compute the initial squared-norm derivative despite the negative eigenvalues. Derive exactly which k make norm nonincreasing for every initial state, and provide a violating initial state otherwise. Include equality and the origin. Why can k=2 from (0,1) have an increasing first coordinate while norm decreases?",
      "checkpoint": {
        "hint": "Differentiate E=x²+y² and complete the square. For necessity, choose an initial state. The squared distance of the tangent tip contains an extra positive term, so it does not give the derivative's sign.",
        "explanation": "Differentiation gives E′ = −2x² + 2kxy − 4y². Completing the square gives E′ = −2(x − ky/2)² + (k²/2 − 4)y². Hence E′≤0 at every state exactly when k²≤8. If k²>8, initial (k/2,1) gives E′(0)=k²/2−4>0; continuity yields an interval of actual growth. Both eigenvalues remain −1 and −2, so all solutions eventually decay even when norm can first grow. At the default E′(0)=1/2. For k=2, E′ = −2(x−y)² − 2y² is negative at every nonzero state, although x′(0)=2 at (0,1). At k²=8, the zero-derivative line is x=ky/2. With h=x−ky/2, h′=(3k/2)y on h=0, so that line is not invariant away from zero. A nonzero solution cannot have constant norm on a positive interval. The critical signs are included in nonincrease; the origin is stationary. The tangent tip has squared radius E0 + E′0/4 + ||A z0||²/16, which explains why an outside tip alone proves no growth claim.",
        "criteria": [
          "Derives the original squared-norm derivative.",
          "Proves both directions of the all-initial-state criterion.",
          "Includes the critical values and stationary origin.",
          "Separates coordinate growth, tangent geometry and a universal norm claim."
        ]
      },
      "scene": "scene \"A sign test for the original norm\";\ndomain -4 4; range -4 4; coordinates equal;\nparam k=3 from -4 to 4;\nparam u=1.5 from -2 to 2;\nparam v=1 from -2 to 2;\nlet rad=sqrt(u^2+v^2);\nparametric initial_circle(x)=(rad*cos(x),rad*sin(x)) from 0 to 2*pi color blue;\nvector initial=(u,v) color amber;\nsegment quarter_velocity from (u,v) to (u+0.25*(-u+k*v),v-0.5*v) color rose;\npoint velocity_tip=(u+0.25*(-u+k*v),v-0.5*v) color rose;\nmeasure initial_squared_norm=u^2+v^2;\nmeasure initial_squared_norm_rate=-2*u^2+2*k*u*v-4*v^2;\nmeasure universal_nonincrease_margin=8-k^2;\nmeasure witness_squared_norm_rate=k^2/2-4;\n",
      "focus": [
        "arrow-initial",
        "line-quarter_velocity",
        "point-velocity_tip"
      ]
    },
    {
      "title": "Prove decay in adapted coordinates",
      "body": "This plane has coordinates (w,y)=(x+ky,y), with equal scales. Its radius is sqrt(V), where V=w²+y², rather than the original Euclidean norm. Blue is the initial energy circle; amber is the initial adapted vector. Teal shows the exact adapted trajectory and current vector; rose is the certified radius sqrt(V0) exp(−theta). The control theta is normalized time. The curve's local argument is an angle for a circle and normalized time for the path. The path is sampled from an exact expression; the proof establishes the inequality beyond the sampled points.",
      "question": "Derive w′ and prove V is positive for every nonzero original state. Prove V(theta)≤exp(−2theta)V0. Why does a contracting circle here fail to prove contraction of the original Euclidean norm? State a bound in that original norm using the smallest eigenvalue m of P.",
      "checkpoint": {
        "hint": "Use w′=x′+ky′, and multiply V′≤−2V by the integrating factor exp(2theta). The coordinate change is invertible but generally not orthogonal. Use m||z||²≤V(z) to return to the original norm.",
        "explanation": "The equations give w′ = −x + ky − 2ky = −w and y′=−2y. The map (x,y)↦(x+ky,y) is invertible for every finite k, so V=(x+ky)²+y² is positive away from the origin. Its derivative is V′ = −2w² − 4y² ≤ −2V. Thus exp(2theta)V(theta) is nonincreasing and V(theta)≤exp(−2theta)V0. Explicitly V(theta)=w0² exp(−2theta)+v² exp(−4theta), which checks the bound. The symmetric matrix P=[[1,k],[k,1+k²]] has determinant 1. If m and M are its smallest and largest eigenvalues, m||z||²≤V(z)≤M||z||², giving ||z(theta)||≤sqrt(V0/m) exp(−theta). Here m=1/M>0. The factor sqrt(V0/m) converts back to the original norm; the adapted coordinate change does not preserve Euclidean lengths. At the default V0=85/4 and the energy margin is exp(−2)−exp(−4). At theta=0 the two circles coincide; at the origin all energies are zero. Neither coincidence is a proof of the general claim.",
        "criteria": [
          "Derives the adapted differential equations.",
          "Proves the energy is positive away from zero.",
          "Derives and integrates the energy inequality.",
          "Converts back to the original norm without an orthogonality or sharpness claim."
        ]
      },
      "scene": "scene \"A decaying energy in adapted coordinates\";\ndomain -11 11; range -11 11; coordinates equal;\nparam k=3 from -4 to 4;\nparam u=1.5 from -2 to 2;\nparam v=1 from -2 to 2;\nparam theta=1 from 0 to 4;\nlet w0=u+k*v;\nlet V0=w0^2+v^2;\nlet rho=sqrt(V0);\nlet Vnow=w0^2*exp(-2*theta)+v^2*exp(-4*theta);\nlet envelope=V0*exp(-2*theta);\nparametric initial_circle(x)=(rho*cos(x),rho*sin(x)) from 0 to 2*pi color blue;\nparametric adapted_path(x)=(w0*exp(-x),v*exp(-2*x)) from 0 to 4 color teal;\nvector initial_adapted=(w0,v) color amber;\nvector current_adapted=(w0*exp(-theta),v*exp(-2*theta)) color teal;\nparametric certified_circle(x)=(rho*exp(-theta)*cos(x),rho*exp(-theta)*sin(x)) from 0 to 2*pi color rose;\nmeasure initial_energy=V0;\nmeasure current_energy=Vnow;\nmeasure certified_energy=envelope;\nmeasure energy_margin=envelope-Vnow;\n",
      "focus": [
        "arrow-current_adapted",
        "curve-certified_circle",
        "curve-adapted_path"
      ]
    },
    {
      "title": "Choose an all-later waiting time",
      "body": "The target again uses the fixed original norm, with initial (u,v)=(3/2,1). The horizontal axis is normalized time; the vertical axis is ln(norm/tau), so zero marks the tolerance. Blue is the log of the proved envelope C0 exp(−time), divided by tau; teal is the log of the exact original norm divided by tau. The two points mark the selected time. This is a time graph, not a state plane. A bound above zero is inconclusive, while an actual point below zero concerns only that time. The positive tau controls and fixed nonzero initial state keep these logarithms defined; zero cases are handled in the written proof.",
      "question": "At theta=4 and tau=1/4, compare the actual norm and the proved bound. What does each comparison establish? Derive a sufficient time after which every later state meets the target and choose a later time with positive certificate margin. Explain why this is not necessarily the earliest entry time. Convert the time and tolerance using the fixed reference time and common state scale.",
      "checkpoint": {
        "hint": "Solve C0 exp(−theta)≤tau, then use the decreasing envelope for every later time. The log argument is a dimensionless ratio. For a zero initial state, decide the claim before evaluating a logarithm.",
        "explanation": "With m=1/M and C0=sqrt(M V0), the proved original-norm bound is ||z(theta)||≤C0 exp(−theta). For nonzero initial state and tau>0, Theta=max(0,ln(C0/tau)) is sufficient for that time and every later time. At the default C0≈15.2250 and Theta≈4.10924. At time 4 the actual norm is about 0.0814147<1/4, but the bound is about 0.278856>1/4. The bound has not yet certified success; it has not proved actual failure. Choosing time Theta+1/4 gives bound (1/4)exp(−1/4) and positive margin (1/4)(1−exp(−1/4)). This is a sufficient certificate, not an earliest-entry or sharp-peak claim. The zero initial state meets every nonnegative target from time zero. A nonzero solution cannot reach target zero in finite time because the matrix exponential is invertible; negative tolerance is inadmissible. Physical time is T_star times the normalized waiting time, and physical tolerance is S*tau, with model and scales fixed throughout.",
        "criteria": [
          "Uses the original norm and a dimensionless logarithm ratio.",
          "Derives a sufficient time for every later state.",
          "Separates an inconclusive bound from actual failure or a one-time sample.",
          "Handles zero cases and converts the fixed time and state scales."
        ]
      },
      "scene": "scene \"A waiting time with an all-later certificate\";\ndomain 0 8; range -17 7;\nparam k=3 from -4 to 4;\nparam tau=0.25 from 0.05 to 1;\nparam theta=4 from 0 to 8;\nlet u=1.5; let v=1;\nlet M=(k^2+2+abs(k)*sqrt(k^2+4))/2;\nlet V0=(u+k*v)^2+v^2;\nlet C0=sqrt(M*V0);\nlet raw=ln(C0/tau);\nlet Tcert=(raw+abs(raw))/2;\nfn log_bound(x)=ln(C0/tau)-x;\nfn log_actual(x)=ln(sqrt((exp(-x)*(u+k*v*(1-exp(-x))))^2+(v*exp(-2*x))^2)/tau);\nfn threshold(x)=0;\nplot log_bound color blue;\nplot log_actual color teal;\nplot threshold color amber;\npoint certified_now=(theta,log_bound(theta)) color blue;\npoint actual_now=(theta,log_actual(theta)) color teal;\nsegment time_marker from (theta,-17) to (theta,7) color rose;\nmeasure selected_time=theta;\nmeasure actual_norm=sqrt((exp(-theta)*(u+k*v*(1-exp(-theta))))^2+(v*exp(-2*theta))^2);\nmeasure certified_norm=C0*exp(-theta);\nmeasure target_margin=tau-C0*exp(-theta);\nmeasure sufficient_time=Tcert;\n",
      "focus": [
        "point-certified_now",
        "point-actual_now",
        "line-time_marker"
      ]
    }
  ]
}
```

### Why the norm criterion is sharp

Put \(E=\|z\|_2^2=x^2+y^2\). Differentiating squared norm also works at the origin:
\[
E'=z^{\mathsf T}(A_k^{\mathsf T}+A_k)z.
\]
More generally, for a constant real matrix, norm is nonincreasing along every solution exactly when its symmetric sum \(A^{\mathsf T}+A\) is negative semidefinite. One direction follows by differentiating along every trajectory. For the other, every vector can be chosen as the initial state, so its derivative at time zero must be nonpositive. Taking square roots preserves comparisons of the nonnegative squared norms.

For this family, complete the square:
\[
\begin{aligned}
E'&=-2x^2+2kxy-4y^2\\
&=-2(x-ky/2)^2\\
&\quad +(k^2/2-4)y^2.
\end{aligned}
\]
Thus the exact universal condition is
\[
\boxed{k^2\le8.}
\]
If \(k^2>8\), choose the initial state
\[
z_0=(k/2,1).
\]
It gives
\[
E'(0)=k^2/2-4>0.
\]
Continuity then gives an initial interval of increasing norm. This proves necessity for both signs of \(k\), rather than relying on a finite angle search.

At the default \(k=3\), \(z_0=(3/2,1)\) gives \(E'(0)=1/2\). By contrast, for \(k=2\),
\[
E'=-2(x-y)^2-2y^2<0
\]
at every nonzero state. Starting at \((0,1)\), the first coordinate has \(x'(0)=2>0\) while the norm decreases. Growth of one coordinate and growth of norm are different questions.

The tangent segment in Stage 1 is also different from a trajectory step. For \(p=z_0+A_kz_0/4\),
\[
\begin{aligned}
\|p\|_2^2
&=E_0+\tfrac14E'_0\\
&\quad+\tfrac1{16}\|A_kz_0\|_2^2.
\end{aligned}
\]
Its tip can lie outside the initial circle even when \(E'_0=0\). The radial dot product, or the derivative readout, establishes the instantaneous sign.

The eigenvalues stay \(-1,-2\) for every \(k\). The already derived exact solution is
\[
y(\theta)=v e^{-2\theta},
\]
\[
\begin{aligned}
x(\theta)
&=e^{-\theta}\bigl[u\\
&\qquad+kv(1-e^{-\theta})\bigr].
\end{aligned}
\]
Every solution tends to zero. This eventual convergence does not force norm nonincrease at every earlier time. The earlier chapter's comparison uses \((u,v)=(0,1)\) and \(\theta=\ln2\). Its condition \(|k|>\sqrt{15}\) remains a correct sufficient growth witness for that state and time. It is not the sharp threshold over all initial states.

### Include the critical line and the origin

If \(k^2<8\), the completed-square expression is negative at every nonzero state. At \(k^2=8\),
\[
E'=-2(x-ky/2)^2\le0.
\]
Both exact critical signs \(k=\pm2\sqrt2\) belong to the nonincrease regime. A zero instantaneous derivative occurs on \(x=ky/2\), but it does not produce a nonzero constant-norm trajectory. Indeed, with \(h=x-ky/2\),
\[
h'=-x+2ky,
\]
and on \(h=0\),
\[
h'=(3k/2)y.
\]
The zero-derivative line is not invariant away from the origin. If norm were constant on a positive interval, integrating its continuous nonpositive squared-norm derivative would force \(h=0\) throughout that interval, a contradiction. Every nonzero trajectory therefore decreases in norm between distinct times at the critical values, despite possible zero instantaneous derivative.

For \(k=0\), the coordinates decay independently. For \(z_0=0\), the state stays zero; no strict-decrease claim applies to it. A nearby decimal control value is not an exact test of an irrational critical parameter.

### A positive energy, then a bound in the original norm

Set \(w=x+ky\). The differential equations give
\[
w'=(-x+ky)-2ky=-w.
\]
The change \((x,y)\mapsto(w,y)\) is invertible for every finite \(k\). Consequently
\[
V=(x+ky)^2+y^2
\]
is positive at every nonzero original state. It satisfies
\[
V'=-2w^2-4y^2\le-2V.
\]
Multiplying by \(e^{2\theta}\) and integrating gives
\[
V(\theta)\le e^{-2\theta}V(z_0).
\]
The exact expression checks the same conclusion:
\[
\begin{aligned}
V(\theta)
&=(u+kv)^2 e^{-2\theta}\\
&\quad+v^2 e^{-4\theta}.
\end{aligned}
\]
This argument uses this family's distinct decay modes. It does not assume that every stable matrix has an eigenbasis.

Stage 2 measures radius in the adapted \((w,y)\) plane. To return to the original norm, use the positive matrix
\[
P=\begin{pmatrix}1&k\\k&1+k^2\end{pmatrix},
\]
for which \(V=z^{\mathsf T}Pz\) and \(\det P=1\). Let \(m,M\) be its smallest and largest eigenvalues. Chapter 16 gives
\[
m\|z\|_2^2\le V(z)\le M\|z\|_2^2.
\]
Here
\[
2M=k^2+2+|k|\sqrt{k^2+4},
\]
\[
m=1/M>0.
\]
Define
\[
C_0=\sqrt{V(z_0)/m}.
\]
The resulting bound uses the fixed original norm:
\[
\boxed{\|z(\theta)\|_2\le C_0e^{-\theta}.}
\]
The coordinate change is generally not orthogonal. A shrinking adapted circle therefore does not show that the original norm is contractive. This estimate includes a prefactor and is not asserted to be the sharp transient gain.

At the Stage 2 default, \(V(z_0)=85/4\). At \(\theta=1\),
\[
V(1)=\tfrac{81}{4}e^{-2}+e^{-4},
\]
while the certified energy is \((85/4)e^{-2}\). Their difference is \(e^{-2}-e^{-4}>0\). These are energy values rather than original norms. At time zero the energy circles coincide; at the zero state all energies vanish. Those cases check the formulas but do not replace the proof.

### What a waiting time actually certifies

For nonzero \(z_0\) and a target \(\tau>0\), the inequality
\[
C_0e^{-\theta}\le\tau
\]
is guaranteed once
\[
\Theta=\max\{0,\ln(C_0/\tau)\}.
\]
The decreasing envelope then certifies the target for every later time, not only at one displayed point.

At the Stage 3 default, put
\[
C_0=\sqrt{\frac{85(11+3\sqrt{13})}{8}}.
\]
This is approximately \(15.2250\). The selected time \(4\) gives these separate comparisons:

- Actual norm: approximately \(0.0814147<1/4\).
- Proved upper bound: approximately \(0.278856>1/4\).
- Certificate margin: approximately \(-0.0288564\).
- Sufficient time: \(\ln(4C_0)\), approximately \(4.10924\).

The actual point already meets the target. The selected upper bound has not certified it yet; that does not establish actual failure. Nor does one small actual point supply an all-later argument. The proof provides that quantifier through its decreasing envelope. The sufficient time is not claimed to be the earliest actual entry time or the time of a sharp peak.

For \(z_0=0\), choose time zero before evaluating any logarithm. For nonzero \(z_0\) and \(\tau=0\), no finite time reaches zero: a matrix exponential is invertible. Negative tolerance is inadmissible. Arbitrarily small positive tolerances remain covered by the theorem although the controls have a positive lower bound.

In physical units the same result reads
\[
\|q(t)\|_2\le SC_0e^{-t/T_\star}.
\]
With \(\delta=S\tau\), a sufficient physical time is \(T_\star\Theta\). All scales, model coefficients and the original norm remain fixed.

The finite controls illustrate the exact proofs. Stage 3 plots the dimensionless log ratio \(\ln(\text{norm}/\tau)\), not another state coordinate. Zero marks the target. With its fixed \(v=1\) and positive \(\tau\), every plotted logarithm is defined. Numerically sampled curves and approximate readouts do not prove a claim for all real \(k\), initial states or later times.

### Notebook: change the waiting-time decision

Keep the model, initial state, norm and target fixed. Predict the six numeric show outputs before running. The notebook also displays definition cards; six numeric outputs does not mean six total cards. Both functions below are unary and use their argument as normalized time.

```notebook norm-energy-certificate
param k=3 from -4 to 4;
param tau=0.25 from 0.05 to 1;
let u=1.5; let v=1;
let M=(k^2+2+abs(k)*sqrt(k^2+4))/2;
let V0=(u+k*v)^2+v^2;
let C0=sqrt(M*V0);
let raw=ln(C0/tau);
let Tcert=(raw+abs(raw))/2;
fn bound(x)=C0*exp(-x);
fn actual(x)=sqrt((exp(-x)*(u+k*v*(1-exp(-x))))^2+(v*exp(-2*x))^2);
let wait=4;
show C0;
show Tcert;
show wait;
show actual(wait);
show bound(wait);
show tau-bound(wait);

```

**Waiting-time edit.** Replace only

```text
let wait=4;
```

by

```text
let wait=Tcert+0.25;
```

Keep all six show statements. Explain which two numeric outputs remain fixed, which four are evaluated at a changed time, and what gives an all-later conclusion. The positive interval of \(1/4\) avoids teaching the decision from a tiny rounding residual at an exact equality boundary.

<details><summary>Waiting-time hint</summary>

The first two outputs depend on the unchanged model, initial state and target. The actual norm addresses one time. The proved decreasing envelope converts a sufficiently small bound into a statement about every later time. Do not change the initial state or target to force success.

</details>

<details><summary>Waiting-time full answer</summary>

At the default, the outputs are:

- \(C_0\approx15.2250434\).
- Sufficient time: \(\ln(4C_0)\), about 4.1092360.
- Waiting time \(4\).
- Actual norm \(\approx0.0814147\).
- Certified norm \(\approx0.2788564\).
- Target margin \(\approx-0.0288564\).

After the single edit, the first two numeric outputs stay fixed. Put
\[
a=\ln(4C_0)+1/4.
\]
The remaining outputs are:

- Waiting time \(a\approx4.3592360\).
- Actual norm \(\approx0.0570563\).
- Certified norm: \((1/4)e^{-1/4}\), about 0.1947002.
- Positive margin: \((1/4)(1-e^{-1/4})>0\), about 0.0552998.

The exact actual norm at that time is
\[
p=9/2-3e^{-a},
\]
\[
\|z(a)\|_2=e^{-a}\sqrt{p^2+e^{-2a}}.
\]
For the authored notebook controls, the comparison already proved gives \(C_0\ge\|z_0\|_2\). Here \(\|z_0\|_2=\sqrt{13}/2>1\), while \(\tau\le1\), so \(\ln(C_0/\tau)>0\). Thus the edited bound is exactly \(\tau e^{-1/4}\) in the real mathematics throughout that control box. In the general theorem, where the maximum defining \(\Theta\) could choose zero, waiting \(\Theta+1/4\) instead yields a bound at most \(\tau e^{-1/4}\).

The proof certifies this target at the edited time and every later time. It does not claim the earliest entry time. Physical waiting time is \(T_\star a\). The written zero-state and zero-tolerance branches remain necessary; the positive-domain notebook does not approximate those cases by adding a small number inside a logarithm.

</details>

### Independent changed task: all weights for a defective family

This task has no new diagram or controls. Work in the same normalized time and fixed original norm. Let
\[
B_k=\begin{pmatrix}-1&k\\0&-1\end{pmatrix},
\qquad z'=B_kz,
\]
with known fixed finite real \(k\).

Derive the exact solution from \(z_0=(u,v)\). Find exactly when every initial state has nonincreasing Euclidean norm, including the critical values. Find **all** \(c>0\) for which
\[
W_c=x^2+cy^2
\]
satisfies \(W_c'\le-W_c\) at every state, proving necessity and sufficiency. Discuss \(k=0\) and the equality \(c=k^2\).

Then take \(k=3\), \(z_0=(1,1)\), and target \(1/10\). Choose the smallest valid weight and certify a normalized time after which the original norm is at most the target for every later time. State its physical interpretation and compare with the exact solution. A small sampled norm is not an all-later argument.

<details><summary>Defective-family hint</summary>

Solve the second equation, then use an integrating factor for the first. Differentiate squared norm and complete the square. For the energy, complete \(W_c'+W_c\); to prove necessity, try the initial state \((k,1)\). When converting back to Euclidean norm, retain the factor \(\min(1,c)\).

</details>

<details><summary>Defective-family full answer</summary>

The integrating-factor calculation gives
\[
y(\theta)=v e^{-\theta},
\]
\[
x(\theta)=e^{-\theta}(u+kv\theta).
\]
For \(k\ne0\), the eigenvalue \(-1\) has only one eigendirection; no eigenbasis justified the calculation. At \(k=0\), the matrix is \(-I\) and every direction is an eigendirection. Every solution tends to zero because both \(e^{-\theta}\) and \(\theta e^{-\theta}\) tend to zero. The special trajectories with \(v=0\) have no polynomial term and cannot settle a universal claim.

Differentiating \(E=x^2+y^2\) gives
\[
\begin{aligned}
E'&=-2(x-ky/2)^2\\
&\quad +(k^2/2-2)y^2.
\end{aligned}
\]
Thus the sharp all-initial-state criterion is
\[
\boxed{|k|\le2.}
\]
When \(|k|>2\), the initial state \((k/2,1)\) makes \(E'(0)>0\). When \(|k|<2\), the derivative is negative at every nonzero state. At \(k=\pm2\), write \(h=x-ky/2\). Then \(E'=-2h^2\); on \(h=0\),
\[
h'=-x+(3k/2)y=ky.
\]
The zero-derivative line is not invariant away from zero. As in the main proof, no nonzero trajectory keeps constant norm on a positive interval; norm decreases between distinct times despite possible zero instantaneous derivative. At \(k=0\), \(E'=-2E\). The origin is stationary.

For a positive weight \(c\),
\[
\begin{aligned}
W_c'+W_c
&=-x^2+2kxy-cy^2\\
&=-(x-ky)^2\\
&\quad -(c-k^2)y^2.
\end{aligned}
\]
Consequently the complete set of valid weights is
\[
\boxed{c>0,\qquad c\ge k^2.}
\]
These conditions suffice because both squared terms have nonpositive coefficients. If \(c<k^2\), the state \((k,1)\) gives
\[
W_c'+W_c=k^2-c>0,
\]
which proves necessity.

Equality \(c=k^2\) is allowed when \(k\ne0\). Even when its residual square vanishes, \(W_c'\le-W_c<0\) at every nonzero state. At \(k=0\), every positive \(c\) works, but there is **no smallest positive valid weight**. Its infimum is zero; \(c=0\) is excluded because the energy would not be positive definite.

Integrating the energy inequality yields
\[
W_c(\theta)\le e^{-\theta}W_c(z_0).
\]
The comparison with the original norm is
\[
\min(1,c)\|z\|_2^2\le W_c(z).
\]
Therefore
\[
\begin{aligned}
\|z(\theta)\|_2
&\le\sqrt{\frac{W_c(z_0)}{\min(1,c)}}\\
&\qquad\cdot e^{-\theta/2}.
\end{aligned}
\]
The denominator matters for valid weights below one.

For \(k=3\), \(z_0=(1,1)\), the initial squared-norm derivative is
\[
E'(0)=-2+6-2=2>0.
\]
The smallest valid weight is \(c=9\), and \(W_9(z_0)=10\). Hence
\[
\|z(\theta)\|_2\le\sqrt{10}\,e^{-\theta/2}.
\]
The right side is at most \(1/10\) once
\[
\boxed{\theta\ge\ln1000.}
\]
It decreases thereafter, giving the requested all-later certificate. The exact solution is
\[
z(\theta)=e^{-\theta}(1+3\theta,1).
\]
It verifies the model and initial growth. The certificate gives a sufficient time, not necessarily the earliest entry time or a sharp peak.

With physical matrix \(B_k/T_\star\), sufficient physical time is \(T_\star\ln1000\), and the physical tolerance is \(S/10\). For zero initial state choose time zero. For nonzero initial state and zero tolerance there is no finite arrival; negative tolerance is inadmissible.

</details>

### What the investigation has established

You now have a sharp universal sign criterion, an explicit violating state when it fails, and an energy proof that yields a sufficient all-later tolerance certificate in the original norm. Neither finite controls nor sampled exact curves establish the universal statements. The changed task shows that the certificate operation remains meaningful when an eigenbasis is unavailable.

For the general quadratic-energy method, see Stephen Boyd's [EE363 Lecture 13](https://ee363.stanford.edu/archive/lectures/lq-lyap.pdf) and [Lyapunov theory notes](https://ee363.stanford.edu/archive/notes/lq-lyap-notes.pdf). The critical semidefinite cases here are settled by the explicit arguments above; strict negative definiteness is a sufficient condition, not a necessary condition for norm nonincrease.

## Worked synthesis: information, competitors and quantifiers

### Worked example 22.1: an interval is an exact certificate

Suppose a recorded scalar is y=3 in the model y=2z+e, with |e|≤1 and an independently supplied prior |z|≤2. The data inequality is |3−2z|≤1, equivalent to 1≤z≤2. Intersecting with the prior leaves precisely [1,2]. Both endpoints are feasible: choose e=1 at z=1 and e=−1 at z=2.

For any proposed estimate a, its worst error over this interval is max{|a−1|,|a−2|}=1/2+|a−3/2|. Thus the midpoint 3/2 uniquely minimises the worst error, with sharp radius 1/2. The upper bound holds at every feasible state, and an endpoint attains it. No estimator using only this record and these bounds can guarantee tolerance 2/5, while tolerance 1/2 is attainable. The prior was supplied information; it was not inferred from a small residual.

### Worked example 22.2: the best error may not choose a unique matrix

Let A=diag(5,2,1), and approximate it by matrices of rank at most two. The family Bδ=diag(5+δ,2,0), |δ|≤1, all has rank two. The difference is diag(−δ,0,1), so its spectral norm is one throughout this interval, while its squared Frobenius norm is δ²+1.

The spectral lower bound one is global. Any rank-at-most-two competitor B has a unit vector u in its kernel, so ‖(A−B)u‖=‖Au‖≥1 because every coordinate stretch of A is at least one. Thus no such B can beat spectral error one, and all the displayed Bδ are spectral minimisers. Among the displayed family only δ=0 minimises Frobenius error; the main PCA lesson's low-rank theorem gives the global Frobenius minimum one as well. Specifying a norm changes which differences between competitors matter. Equal optimal spectral error alone does not identify a unique fitted matrix.

### Worked example 22.3: a sharp waiting time with explicit exceptions

Consider x′=Ax for symmetric A=[[-2,1],[1,-2]]. Unit eigenvectors (1,1)/√2 and (1,−1)/√2 have eigenvalues −1 and −3. If x(0)=c₁u₁+c₂u₂, then ‖x(t)‖²=c₁²e^(−2t)+c₂²e^(−6t)≤e^(−2t)‖x(0)‖² for t≥0. Equality is possible along the first eigendirection, so the uniform bound is sharp.

If ‖x(0)‖≤R with R>0 and the requested tolerance is τ>0, the least waiting time guaranteeing ‖x(t)‖≤τ for every permitted initial state and all t≥T is T=max{0,log(R/τ)}. Sufficiency follows from the bound; necessity follows from an initial state Ru₁ at time T. If R=0, the only state is zero and T=0 works even for τ=0. If R>0 and τ=0, no finite waiting time works, since the first eigenmode never vanishes at a finite time. A formula involving log(R/τ) must not be evaluated before checking those zero cases.

## Exercises

1. **Core.** In y=sz+e with s=0, prior |z|≤1 and noise bound |e|≤1/10, determine the compatibility set for records y=1/5 and y=1/20. Diagnose the empty case rather than reporting an accuracy guarantee from it.
2. **Core.** For y=z+e, record y=3, prior |z|≤2 and |e|≤1, find the exact compatibility set, its best estimate and sharp radius. Supply the endpoint noise.
3. **Core.** For record y=1 in y=3z+e, with |e|≤1/5 and |z|≤1, find the compatibility interval and minimax radius. Can a rule based only on this information guarantee tolerance 1/20?
4. **Core.** For A=diag(5,2,1), determine the spectral and Frobenius errors of Bδ=diag(5+δ,2,0). For which δ is its spectral error globally optimal among rank-at-most-two competitors? Which member of this family has smallest Frobenius error?
5. **Core.** Approximate A=diag(3,1) under the rank-at-most-zero constraint. Find every competitor and both optimal error norms. Explain why a zero rank bound does not make the error zero.
6. **Core.** For the unit-weight path 1—2—3, evolve x′=−Lx from x(0)=(4,1,−2). Find the conserved mean, initial graph energy and limiting state, with reasons for the limit.
7. **Stretch.** For A=[[-2,2],[1,-1]], find a positive conserved left-null weighting, then solve x′=Ax from (3,0). Compare its consensus limit with the arithmetic mean of the initial coordinates.
8. **Core.** For the system in Worked example 22.3, initial norm bound R=2 and tolerance τ=1/10, find the least uniform waiting time. Explain why testing one rapidly decaying initial direction cannot prove this uniform value.
9. **Stretch.** Let A=[1 0], observed datum y=1 and noise exactly zero. Show that no finite uniform Euclidean recovery radius exists without a prior on the second coordinate. Then impose |z₂|≤R, R≥0, and determine the optimal radius and estimate.
10. **Stretch.** Two records y₁=y₂=0 have model yᵢ=z+eᵢ. Compare the exact minimax radius under joint budget |e₁|+|e₂|≤ε with that under separate bounds |e₁|≤ε, |e₂|≤ε, for ε≥0. Explain why the two information contracts are different.

<details>
<summary>Hints</summary>

1. **Hint 1.** At zero gain the datum depends only on noise. **Hint 2.** Compare |y| with the allowed noise; if compatible, the data add no restriction to the prior.
2. **Hint 1.** Intersect [y−1,y+1] with the prior interval. **Hint 2.** The intersection can be a singleton even when the noise bound is positive.
3. **Hint 1.** Divide the two endpoints of [4/5,6/5] by three. **Hint 2.** Half the interval length is the sharp radius; compare it exactly with 1/20.
4. **Hint 1.** Subtract the diagonal matrices. **Hint 2.** Use the largest absolute diagonal entry for spectral norm and the sum of squared entries for Frobenius norm.
5. **Hint 1.** A rank-zero matrix has zero column space. **Hint 2.** There is only one competitor, but its difference from A remains A.
6. **Hint 1.** Use L1=0 and the positive edge-square formula. **Hint 2.** Connectedness leaves only the constant zero-eigenvalue direction; positive eigenmodes decay.
7. **Hint 1.** Solve wᵀA=0 rather than A w=0 for conservation. **Hint 2.** The eigenvalues are zero and −3; use eigenvectors (1,1) and (2,−1).
8. **Hint 1.** The slowest decay rate is one. **Hint 2.** Put the entire permitted initial norm into its eigendirection to establish necessity.
9. **Hint 1.** Every vector (1,t) fits the exact datum. **Hint 2.** A bounded symmetric interval in the invisible coordinate has midpoint zero and radius R.
10. **Hint 1.** Each recorded zero forces eᵢ=−z. **Hint 2.** The joint budget adds two equal absolute errors; the separate contract does not add them.

</details>

<details>
<summary>Full solutions</summary>

1. Since s=0, the model requires e=y. The first record has |y|=1/5>1/10 and admits no state, so its compatibility set is empty: the record, noise bound and model are inconsistent. For y=1/20 the required noise is allowed and every z∈[−1,1] is compatible. Its midpoint estimate is zero with sharp radius one. An empty compatibility set diagnoses inconsistency; it is not evidence of perfect recovery.
2. The data require z∈[2,4], while the prior gives [−2,2]. The intersection is {2}. Thus the unique admissible state, the best estimate, is two and the radius is zero. At that state the noise is e=3−2=1, exactly the allowed endpoint. A positive noise bound does not prevent a singleton intersection with other information.
3. The data interval is [4/15,2/5], already contained in [−1,1]. Its midpoint is (4/15+6/15)/2=1/3 and its half-length is (6/15−4/15)/2=1/15. Both endpoints are realised by noises ±1/5. Since 1/15>1/20, no estimator based only on this information can guarantee the smaller tolerance: one endpoint must be at least half the interval length from any estimate.
4. The difference has diagonal (−δ,0,1), so spectral error is max{|δ|,1} and Frobenius error is √(δ²+1). The global rank-two spectral lower bound is one by the kernel-vector argument in the worked example. Hence Bδ is spectrally optimal exactly for |δ|≤1. Its Frobenius error is minimised uniquely within this family at δ=0, with value one. The family includes changes to a retained singular value that are invisible to the optimal spectral error until they exceed the discarded unit stretch.
5. The only rank-zero competitor is the zero matrix: a matrix whose image is {0} sends every basis vector to zero. Its spectral error is ‖A‖₂=3 and its Frobenius error is √(9+1)=√10. These optima are unique because the competitor is unique. Zero allowed rank is a restriction on approximants, not a statement that the supplied A or the approximation error vanishes.
6. The mean is (4+1−2)/3=1 and is conserved because 1ᵀL=0. Initial energy is (1−4)²+(−2−1)²=18. The symmetric Laplacian is positive semidefinite with kernel span{1} because the path is connected. In its orthonormal eigenbasis, positive modes decay as e^(−λt) and the constant mode persists, giving limiting state (1,1,1). The conserved mean determines that constant.
7. The vector w=(1,2) is a left nullvector: wᵀA=(−2+2,2−2)=0. Its weighted sum x₁+2x₂ is conserved. Decompose (3,0)=(1,1)+(2,−1); the first vector has eigenvalue zero and the second −3. Thus x(t)=(1+2e^(−3t),1−e^(−3t)), tending to (1,1). The initial arithmetic mean is 3/2 and is not conserved, while the weighted mean (3+2·0)/3=1 is. Right-nullvectors describe equilibrium shape; left-nullvectors select the conserved weighting.
8. The bound is ‖x(t)‖≤2e^(−t), so T=log20 suffices for every later time. The initial state 2(1,1)/√2 attains the bound, so every smaller nonnegative T fails already at time T for that state. Testing only the eigenvector with rate three would give a shorter time and omit the admissible slow mode.
9. Compatible states are (1,t) for all real t. For any estimate a=(a₁,a₂), the error is at least |t−a₂| and is unbounded as |t| increases. Thus no finite uniform radius exists. With |t|≤R, the estimate (1,0) has worst error R. The two endpoint truths (1,±R) are distance 2R apart, so the triangle inequality forces every estimate to have worst error at least R. This proves optimality, including R=0.
10. Since both records are zero, both noises equal −z. The joint condition becomes 2|z|≤ε, giving interval [−ε/2,ε/2], estimate zero and sharp radius ε/2. The separate conditions each say |z|≤ε, giving interval [−ε,ε] and radius ε. Endpoint noises attain the bounds in both cases, and both collapse to zero when ε=0. Equal per-observation bounds and a single shared total budget are different feasible sets and cannot be substituted for one another.

</details>

## Sources

The four retained clinics include their original primary references and mathematical qualifications. The worked synthesis and exercises in this unit are original. Complementary primary background is Sheldon Axler, [*Linear Algebra Done Right*, fourth edition](https://linear.axler.net/LADR4e.pdf), the spectral-theorem and singular-value chapters, consulted 13 November 2026. Core preparation is [Singular values](svd.md), [PCA](pca.md), [Networks](networks-markov.md) and [Linear dynamics](dynamics-capstone.md).

## Summary

Inference starts by stating which states or competitors are compatible with the supplied information. Their set can be empty, a point or a region. Its geometry determines sharp recovery limits; an optimal approximation norm may still leave multiple matrices. Left nullvectors identify conserved quantities, while symmetric parts and weighted energies address different dynamical bounds. A waiting-time certificate must hold for all permitted initial states and every later time, with zero and endpoint cases handled separately. These clinics supply optional deeper work on the core linear-algebra route.
