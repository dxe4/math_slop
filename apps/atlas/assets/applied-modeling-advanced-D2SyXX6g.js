var e=`---
id: course-applied-modeling-advanced
title: "Applied Modeling: Identification, Inversion, and Validation"
level: advanced-undergraduate
estimated_minutes: null
status: beta
license: CC BY-SA 4.0
---

# Applied Modeling: Identification, Inversion, and Validation

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-applied-modeling-advanced/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Numerical analysis](/courses/atlas-numerical-mathematics-reliable-computation/) · [Dynamical systems](/courses/course-dynamical-systems/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A measurement can fit perfectly while a hidden component remains unknown. A regularizer can make the answer unique while adding no observation. A good validation score can select the best of an inadequate family. These are different failures, and improving a numerical residual repairs only some of them. We will derive their boundaries, then complete a reproducible inverse investigation whose matrices, errors, selection rule and final comparisons are all inspectable.

## AMA-M0 — Scope and readiness

This course joins **validation, identifiability, sensitivity, inverse problems and computation**, retaining those five advanced applied-modelling strands. Its finite-dimensional investigations supply a complete version of the native inverse chapter's open weak-direction lab. They do not promote the whole graduate-labelled reference or its open scientific capstones into a completed specialist course. Source and catalog status are **beta**. **study time depends on the selected reading, attempts and corrections**; earlier chapter estimates overlap preparation and do not form a new course total.

Bring the [applied modelling core](#/item/course-applied-modeling-standard), including its fifty selected native exercises, five review problems and the completed AM-MCD-1/2/R cooling decisions. Reuse that portfolio: the AM-MCD law under an unobserved action was GIVEN, not identified by the baseline cooling fit. The [complete AM-MCD models](#/item/book-applied-modeling-proof-reference?chapter=synthesis-projects-solutions) and [AM-CV preparation](#/item/book-applied-modeling-proof-reference?chapter=cooling-model-validation) remain undergraduate preparation, not newly charged advanced work.

The six readiness questions below have complete answers. Use the matching native repair before continuing, rather than assigning an extra whole book.

1. For $A=\\begin{pmatrix}1&1\\\\2&2\\end{pmatrix}$, exhibit an invisible direction and state exactly what is identified by noiseless observations.
2. If $A=\\operatorname{diag}(1,\\epsilon)$ and the second observation changes by $\\delta$, find the parameter change. Does full rank bound the error uniformly as $\\epsilon\\downarrow0$?
3. Does $Dh(0)=0$ imply that $h(t)=t^3$ is non-identifying? Does full local rank make $(\\cos t,\\sin t)$ globally injective?
4. State when $\\|Ax-y\\|^2+\\alpha\\|Lx\\|^2$, $\\alpha>0$, has a unique minimizer. What does that uniqueness say about the data?
5. If a sensor's units multiply its readings and forward row by four, how must its whitening factor change to preserve the same residual loss?
6. A tuned model predicts one unused observation accurately. Which claims about mechanism, intervention effects, population risk and numerical stability follow automatically?

**Complete readiness key.** (1) $(1,-1)$ is in the kernel. Only $x_1+x_2$ is identified; every $(t,s-t)$ gives the same data for a fixed sum $s$. (2) The change is $(0,\\delta/\\epsilon)$; a sequence of invertible matrices can be arbitrarily sensitive. (3) Neither implication holds: $t^3$ is injective, and the circular map repeats with period $2\\pi$. (4) Uniqueness holds exactly when $\\ker A\\cap\\ker L=\\{0\\}$; the penalty may select an unobserved component rather than measure it. (5) Divide that whitening row factor by four. (6) None follows automatically: one fixed unused observation checks that conditional prediction; identification, causal design, sampling and algorithmic error need separate arguments.

**Precise repairs.** Use the [native diagnostic](#/item/book-applied-modeling-proof-reference?section=front:prerequisite-diagnostic-and-repair), Questions 1–6 and 9–10 with their adjacent answers, for kernels, positive quadratic forms, conditioning, Jacobians, constrained stationarity, implicit sensitivity, covariance and likelihood. For actual teaching behind those answers, use [linear maps and rank-nullity](#/item/book-linear-algebra-structure-proofs?chapter=linear-maps-isomorphism-rank-nullity), [orthogonal projection and weighted least squares](#/item/book-linear-algebra-structure-proofs?chapter=inner-products-orthogonal-decomposition), and the applied [identification](#/item/book-applied-modeling-proof-reference?chapter=identifiability-inverse-problems) and [sensitivity](#/item/book-applied-modeling-proof-reference?chapter=sensitivity-conditioning) chapters specified below. Partial derivatives, the chain rule, least squares and SVD are genuine prerequisites. Measure-theoretic probability and Fourier analysis are needed only for continuations that use them; no missing theorem is credited through a topic label.

For a kernel/rank repair read Sections 1, 4, 7 and 9 of the linked linear-map chapter; for least squares read Sections 1–5 and 13 of the linked projection chapter. For singular coordinates, complete [Lucent's SVD lesson](/lucent/web/#/course/linear-algebra/svd), including Exercises 1–6 and its Full solutions: the inconsistent residual, minimum-norm argument, projector and noisy inverse give exactly the preparation used here. These are conditional repairs, not another 54 assigned questions. The local nonlinear rank statement imports the finite-dimensional inverse function theorem under its stated $C^1$ hypotheses; this course neither proves that whole theorem nor needs it to certify the linear project. Multivariable differentiation and the native source's explicit theorem boundary remain required when using that nonlinear statement.

## AMA-M1 — Native assignments and complete feedback

Complete these in order. Each named source is teaching or explicit repair, not an orientation map. Keep a first attempt before opening its public answer. The last column gives the actual full key location within that same native chapter.

| Selection | Reading and exact assigned work | Complete public feedback |
| --- | --- | --- |
| AMA-S1 | [Identifiability and inverse problems](#/item/book-applied-modeling-proof-reference?chapter=identifiability-inverse-problems): Observation maps through Prediction and causal boundaries; Exercises 1–12 | Answers 1–12, including the kernel proof, spectral filter, design determinant, prior allocation and causal-assumption key |
| AMA-S2 | [Sensitivity and conditioning](#/item/book-applied-modeling-proof-reference?chapter=sensitivity-conditioning): Local sensitivity through Decision margins; Exercises 4, 6–12 | Answers 4 and 6–12: residual versus forward error, implicit derivative, step balance, interaction, decision switches and clipping failure |
| AMA-S3 | [Regularize and audit an inverse problem](#/item/recipe-regularized-inverse-problems): Steps 1–8; Exercises 1–6 | Worked solutions 1–6; note that the recipe's $\\lambda^2$ is this course's $\\alpha$ |
| AMA-S4 | [Signals and inversion](#/item/book-applied-modeling-proof-reference?chapter=signals-inverse-computation): The observation operator through Choosing regularization; Exercises 7–14 and 17–18 | Answers 7–14 and 17–18: nullspace, amplification, uniqueness, resolution, covariance, bias and the four-case audit |
| AMA-S5 | [Uncertainty and evidence](#/item/book-applied-modeling-proof-reference?chapter=uncertainty-evidence-claims): Conditional expectation and variance decomposition, Delta method with covariance, Scenarios/distributions, Calibration-discrepancy confounding; Exercises 4, 5, 7, 9, 10, 12 | Corresponding numbered Answers; uncertainty types and a covariance calculation must retain their hypotheses |
| AMA-S6 | [Validation and causal boundaries](#/item/book-applied-modeling-proof-reference?chapter=validation-causal-boundaries): whole chapter; Exercises 1–3 | Answers 1–3; its validation-matrix project is completed for our fixed experiment below |
| AMA-S7 | [Reproducible computation](#/item/book-applied-modeling-proof-reference?chapter=reproducible-model-computation): Computational contract, Verification ladder and Numerical provenance; Exercises 1–4 | Answers 1–4; its pure-engine requirement is instantiated by the optional calculation below |
| AMA-S8 | [Biological observation maps](#/item/book-applied-modeling-proof-reference?chapter=biology-epidemics-mechanisms): Observation models and likelihood boundaries; Exercises 11–13, 16, 18 | Answers 11–13, 16 and 18, including reporting confounding, delayed counts and the SEIR audit |

The Fourier sampling theorem and full SIR dynamics are not silently prerequisites for S4's finite-matrix problems or S8's observation-map audit. Read their additional source preparation before taking those extensions. The eight selections contain 54 explicitly named native questions; the new investigations below are separate cumulative work. The native open signal/biology projects and specialist Capstones A–E remain additional, with their own scope.

## AMA-M2 — Guarantees, failure boundaries and the experiment contract

### The observation map comes before a solver

For $y=h(x)$, identification concerns the fibres $h^{-1}(y)$. For a linear map $A$, an exact parameter is unique precisely when $\\ker A=\\{0\\}$. An identifiable functional need only be constant on each fibre. Thus a sum can be identified while its allocation is not. Adding an observation changes the map; adding a penalty changes the selection within or near its fibres. A continuously differentiable full-column-rank Jacobian gives local identification via a nonsingular coordinate submap and the inverse function theorem. It does not prove global uniqueness; a deficient Jacobian alone does not disprove identification. Under $C^1$, a null direction yields an $o(\\epsilon)$ first-order change, not an unstated quadratic remainder.

The biological source gives a structured example: reported mean $qj=100$ agrees with both $(q,j)=(1/2,200)$ and $(1/5,500)$. A new prevalence observation can add a different direction, but brings its own measurement model. Calling a fitted reporting rate an intervention effect deletes the design assumptions rather than proving them.

### Weighted regularization and a uniqueness proof

Let $B=WA$, $d=Wy$, with an invertible whitener $W$ declared in observation units. For $\\alpha>0$, minimize

$$J(x)=\\|Bx-d\\|_2^2+\\alpha\\|Lx\\|_2^2.$$

The normal equations are $Mx=B^Td$, $M=B^TB+\\alpha L^TL$. For every $v$,

$$v^TMv=\\|Bv\\|^2+\\alpha\\|Lv\\|^2.$$

If $\\ker B\\cap\\ker L=\\{0\\}$, this is positive for nonzero $v$, so $M$ is positive definite and invertible. Completing the square about $M^{-1}B^Td$ proves existence and uniqueness. If a nonzero $v$ lies in both kernels, $J(x+tv)=J(x)$ for all $t$. A least-squares minimizer exists in finite dimensions (project $(d,0)$ onto the range of the stacked map $(B,\\sqrt\\alpha L)$), and its entire translate by $v$ also minimizes. This proves both directions. Since $W$ is invertible, $\\ker B=\\ker A$. A unique regularized answer need not be data-identified.

With $L=I$ and $B=U\\Sigma V^T$, the filter is $\\sigma/(\\sigma^2+\\alpha)$. The reconstruction map $K=M^{-1}B^T$ has resolution $R=KB$. If $d=Bx_*+e$, then

$$\\widehat x-x_*=(R-I)x_*+Ke.$$

The first term is bias, the second transmitted observation error. The inequality $(\\sigma-\\sqrt\\alpha)^2\\ge0$ gives $\\sigma/(\\sigma^2+\\alpha)\\le1/(2\\sqrt\\alpha)$, hence $\\|Ke\\|_2\\le\\|e\\|_2/(2\\sqrt\\alpha)$. This identity-penalty bound does not automatically hold with the same constant for every $L$. If an explicitly assumed random error has mean zero and covariance $\\Sigma_e$, then $E\\widehat x=Rx_*$ and $\\operatorname{Cov}(\\widehat x)=K\\Sigma_eK^T$. Our finite errors below are stipulated vectors, not draws from that law.

### Units, conditioning and computation

Replacing $x$ by $u=Dx$ with invertible diagonal $D$ requires $A_u=AD^{-1}$ and $L_u=LD^{-1}$. Replacing observation units by $y'=Ey$ requires $A'=EAD^{-1}$ and $W'=WE^{-1}$. Substitution gives the same objective in physical coordinates. Using $\\|u\\|^2$ without transforming a physical penalty asks a different question.

For $A=\\operatorname{diag}(1,\\epsilon)$, data error $(0,\\delta)$ yields inverse error $(0,\\delta/\\epsilon)$. No solver tolerance repairs this sensitivity. A small reliably evaluated backward error certifies a nearby problem for that instance; it does not establish an algorithm's stability across all inputs. A small normal-equation residual likewise does not prove identification, population accuracy or a correct physical model. For our bounded matrices we compare actual binary64 output with independently solved exact rational normal equations; no blanket library-error assumption is used.

### Freeze the protocol before the final comparison

Each printed JSON block supplies exact rational strings. Training alone fits the coefficients. Validation selects the smallest **sum** of squared validation residuals, with the printed mode order U, I, D breaking exact ties. U is unregularized least squares; in the rank-one changed case it explicitly means the minimum-Euclidean-norm convention. I uses an identity physical penalty. D penalizes a physical difference. The heldout observation is evaluated only after selection is frozen; it is not used to fit, choose $\\alpha$, switch modes, refit or revise the declared conclusion.

For these fixed cases the positive exact validation-loss gaps exceed $1/100$. The optional binary64 calculation retains the earlier mode inside a comparison band $10^{-10}$. This reproduces the exact rule here only after the independent oracle checks each computed loss against its rational value to error below $10^{-12}$: a true tie then differs by less than $2\\times10^{-12}$, while a genuine gap remains larger than $1/100-2\\times10^{-12}$. The band is not a universal statistical or numerical tie theorem. In a new near-tied problem, report unresolved ordering or obtain stronger arithmetic bounds instead of borrowing this fixed-case margin.

All fixtures are authored synthetic measurements with fixed errors. Their truth is supplied for auditing controlled recovery, not read by the fitting or selection functions. Validation and heldout rows have no claimed sampling law or independence. Public labels are visible: this is a declared software split, not protected unseen assessment. The heldout label includes its own fixed error and is not a mathematical consequence of the validation labels alone. A winner is conditional on this candidate family, loss, observations and tie rule, not a general best regularizer or causal discovery.

For **every** investigation submit these ten deliverables: (1) units and target; (2) training and augmented observation-map ranks/fibres; (3) derivation of all candidate normal equations/conventions; (4) residual, penalty, bias/noise and resolution audit; (5) complete validation table and frozen selection; (6) heldout prediction/residual/loss; (7) numerical/exact verification and failure signal; (8) uncertainty and causal claim ledger; (9) a validation/falsification matrix; (10) reproducibility and first/comparison/revised records. Retain a table and a prose or symbolic alternative; a graph is optional.

## AMA-P001 — Primary inverse investigation

Complete the native weak-direction lab with $A=\\operatorname{diag}(1,1/4)$ and physical truth $(1,2)$. Compare zero calibration error with the fixed error $(0,1/4)$. These are two declared noise levels, not a Monte Carlo experiment. The final selection uses the noisy training record. Derive the unregularized amplification, both regularized solutions, their resolution and the complete validation/heldout tables. Explain the apparently excellent difference-penalty result without claiming that the penalty discovered the truth.

AMA-P001-DATA
~~~json
{"case_id":"AMA-P001","mode_order":["U","I","D"],"alpha":"1/16","truth":["1","2"],"physical_map":[["1","0"],["0","1"]],"training":{"A":[["1","0"],["0","1/4"]],"y":["1","3/4"],"noise":["0","1/4"],"noise_zero_y":["1","1/2"]},"whitener":[["1","0"],["0","1"]],"penalties":{"I":[["1","0"],["0","1"]],"D":[["1","-1"]]},"unregularized":"invertible","validation":{"A":[["1","0"],["0","1"]],"y":["1","2"]},"heldout":{"A":[["1","1"]],"y":["13/4"]}}
~~~

### Complete primary model

Treat latent quantities and observations as dimensionless scaled concentrations; squared loss is in squared observation units after whitening. The training map has rank two and singular values $1,1/4$, so its 2-norm condition number is 4. The exact data would be $(1,1/2)$; the positive error in the weak observation is amplified by four under U. The validation map measures the two components in a separate supplied record. This changes the available information but, by protocol, only selects among the already fitted candidates.

For I, $M=\\operatorname{diag}(17/16,1/8)$ and $B^Td=(1,3/16)$, giving $(16/17,3/2)$. For D,

$$M=\\begin{pmatrix}17/16&-1/16\\\\-1/16&1/8\\end{pmatrix},\\quad\\det M=33/256,\\quad\\widehat x_D=(35/33,67/33).$$

The unregularized estimate is $(1,3)$. Both penalties satisfy the uniqueness condition. Residual means prediction minus observation throughout.

| Mode | Physical estimate | Validation residual | Validation loss | Heldout prediction | Heldout residual | Heldout loss |
| --- | --- | --- | --- | --- | --- | --- |
| U | (1,3) | (0,1) | 1 | 4 | 3/4 | 9/16 |
| I | (16/17,3/2) | (-1/17,-1/2) | 293/1156 | 83/34 | -55/68 | 3025/4624 |
| D | (35/33,67/33) | (2/33,1/33) | 5/1089 | 34/11 | -7/44 | 49/1936 |

The strict validation winner is **D**, frozen before the last three columns are inspected. Its training residual is $(2/33,-8/33)$, with squared norm $68/1089$; its difference penalty is $1024/1089$. I has training residual $(-1/17,-3/8)$; U fits the noisy record exactly. Training residual alone would prefer U and answer a different selection question.

The complete reconstruction and resolution maps are

$$K_U=\\operatorname{diag}(1,4),\\ R_U=I;\\quad K_I=\\operatorname{diag}(16/17,2),\\ R_I=\\operatorname{diag}(16/17,1/2);$$
$$K_D=\\frac1{33}\\begin{pmatrix}32&4\\\\16&68\\end{pmatrix},\\qquad R_D=\\frac1{33}\\begin{pmatrix}32&1\\\\16&17\\end{pmatrix}.$$

Their resolution traces are $2$, $49/34$ and $49/33$. For D the truth bias is $(1/33,-16/33)$ and the transmitted error is $(1/33,17/33)$; their sum $(2/33,1/33)$ explains the favorable cancellation. Under zero noise, the estimates U, I, D instead are $(1,2)$, $(16/17,1)$ and $(34/33,50/33)$, with validation losses $0$, $290/289$ and $257/1089$. U wins that declared comparison. The noisy winner does not dominate across noise levels.

| Zero-noise mode | Physical estimate | Validation loss |
| --- | --- | --- |
| U | (1,2) | 0 |
| I | (16/17,1) | 290/289 |
| D | (34/33,50/33) | 257/1089 |

For the identity penalty, $\\alpha=1/16$ gives $\\|K_I e\\|\\le2\\|e\\|$; the supplied weak-direction error attains this factor. The total error also includes bias. For D, use its actual $K_D$ (or its Frobenius norm as an upper bound), not the identity-penalty constant by analogy.

**Validation matrix and conclusion.** Exact normal-equation and forward-map checks verify the fixed computation; perturbing the weak observation tests the stated gain; the zero-error row falsifies a universal D-superiority claim. Validation ranks candidates only for its supplied targets. Heldout error checks one new noisy sum, whose true noiseless value is 3 and supplied observed value is $13/4$. No confidence interval, population loss or intervention effect is identified. In real use, stop if sensor units, whitening, forward physics or the intended deployment target disagree with this contract; collect new validation rather than silently retune on the heldout label.

## AMA-P002 — Changed observation map

Now training measures a sum twice. Determine all noiseless training solutions and explain the minimum-norm U convention. A separate validation sensor observes the first component; identify what the augmented experiment could determine if it were explicitly refitted, and distinguish that from our restricted selection protocol. Compare both penalties, compute the frozen heldout result, and audit the mismatch between a unique estimator and a uniquely observed parameter.

AMA-P002-DATA
~~~json
{"case_id":"AMA-P002","mode_order":["U","I","D"],"alpha":"1","truth":["1","2"],"physical_map":[["1","0"],["0","1"]],"training":{"A":[["1","1"],["2","2"]],"y":["3","7"],"noise":["0","1"],"noise_zero_y":["3","6"]},"whitener":[["1","0"],["0","1"]],"penalties":{"I":[["1","0"],["0","1"]],"D":[["1","-1"]]},"unregularized":"equal-columns-minimum-norm","validation":{"A":[["1","0"]],"y":["1"]},"heldout":{"A":[["0","1"]],"y":["9/4"]}}
~~~

### Complete changed model

Training rank is one, with kernel $\\operatorname{span}(1,-1)$. At zero noise all $(t,3-t)$ fit, so truth $(1,2)$ is not training-identified. For noisy $(3,7)$, minimizing $(s-3)^2+(2s-7)^2$ gives $s=17/5$. Among $(t,17/5-t)$, the minimum-norm convention chooses U=$(17/10,17/10)$. D also chooses equal components: its penalty is zero there and its normal matrix is $\\begin{pmatrix}6&4\\\\4&6\\end{pmatrix}$, determinant 20. Thus its unique minimizer does not identify the difference. I has normal matrix $\\begin{pmatrix}6&5\\\\5&6\\end{pmatrix}$, determinant 11, and estimate $(17/11,17/11)$.

| Mode | Physical estimate | Validation residual | Validation loss | Heldout prediction | Heldout residual | Heldout loss |
| --- | --- | --- | --- | --- | --- | --- |
| U | (17/10,17/10) | 7/10 | 49/100 | 17/10 | -11/20 | 121/400 |
| I | (17/11,17/11) | 6/11 | 36/121 | 17/11 | -31/44 | 961/1936 |
| D | (17/10,17/10) | 7/10 | 49/100 | 17/10 | -11/20 | 121/400 |

I is the strict validation winner. U and D have reconstruction map $K=\\frac1{10}\\begin{pmatrix}1&2\\\\1&2\\end{pmatrix}$ and resolution $R=\\frac12\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$, a rank-one projector. I has $K=\\frac1{11}\\begin{pmatrix}1&2\\\\1&2\\end{pmatrix}$ and $R=\\frac5{11}\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$. Their traces are 1 and $10/11$ respectively. U/D training residual $(2/5,-1/5)$ is orthogonal to the column space; I's is $(1/11,-9/11)$. Residual zero was never promised for the inconsistent noisy data.

At zero noise U/D give $(3/2,3/2)$ and I gives $(15/11,15/11)$; first-component validation losses are $1/4$ and $16/121$. This particular validation sensor again favors I. It says nothing like “identity regularization recovered the latent difference.” Every candidate is symmetric, while truth is not.

| Zero-noise mode | Physical estimate | Validation loss |
| --- | --- | --- |
| U | (3/2,3/2) | 1/4 |
| I | (15/11,15/11) | 16/121 |
| D | (3/2,3/2) | 1/4 |

The augmented noiseless map obtained by stacking the row $(1,0)$ below A has rank two: it determines the first component and the sum, hence both components. Calling the entire experiment non-identifying after adding this sensor would be false. Our protocol deliberately uses that sensor only for selection, not refitting; its candidate family remains restricted. A future refit would be a new declared procedure requiring new final assessment data.

**Claim and validation ledger.** The training equivalence class, least-squares sum and minimum-norm convention are proved. Penalties supply uniqueness, not extra training observations. The selected second-component prediction is checked against the separately supplied label $9/4$, not against an invented population law. The noisy validation and heldout records do not establish causality. Falsify the representation with a sensor for an unrepresented difference, test the training-map rank, and reject any report equating an optimizer's unique exit with scientific identification. A numerical tolerance cannot select which physical allocation is true.

## AMA-R001 — Public return in changed units

After intervening work, reconstruct the analysis without reopening a model first; declare prior exposure. Calibration error now has the opposite sign, the unknown's second coordinate and the second sensor's readings are each expressed in units four times as small, and the heldout target is a difference. Transform **both** the forward/whitening maps and penalties. Compare with the deliberately wrong untransformed identity penalty. This is public reconstruction, not an enforced delay or unseen test.

AMA-R001-DATA
~~~json
{"case_id":"AMA-R001","mode_order":["U","I","D"],"alpha":"1/16","truth":["1","8"],"physical_map":[["1","0"],["0","1/4"]],"training":{"A":[["1","0"],["0","1/4"]],"y":["1","1"],"noise":["0","-1"],"noise_zero_y":["1","2"]},"whitener":[["1","0"],["0","1/4"]],"penalties":{"I":[["1","0"],["0","1/4"]],"D":[["1","-1/4"]]},"unregularized":"invertible","validation":{"A":[["1","0"],["0","1/4"]],"y":["1","2"]},"heldout":{"A":[["1","-1/4"]],"y":["-3/4"]}}
~~~

### Complete return model

Write $u=\\operatorname{diag}(1,4)x$ and scale the second observation by four. The printed A maps u to the newly scaled observations. Whitening by $\\operatorname{diag}(1,1/4)$ gives $B=\\operatorname{diag}(1,1/16)$ and $d=(1,1/4)$. The physical zero-noise observation would be $(1,1/2)$ and physical calibration error is $(0,-1/4)$. The changed dataset is therefore not the primary data with a decorative unit label.

The physical penalties become $L_I=\\operatorname{diag}(1,1/4)$ and $L_D=(1,-1/4)$ in u coordinates. The physical estimates are U/D=$(1,1)$ and I=$(16/17,1/2)$; corresponding u estimates are $(1,4)$ and $(16/17,2)$. The physical resolution and reconstruction identities are the primary ones, applied to the changed physical error. For D, $(34/33,50/33)-(1/33,17/33)=(1,1)$.

| Mode | Physical estimate | Validation residual | Validation loss | Heldout prediction | Heldout residual | Heldout loss |
| --- | --- | --- | --- | --- | --- | --- |
| U | (1,1) | (0,-1) | 1 | 0 | 3/4 | 9/16 |
| I | (16/17,1/2) | (-1/17,-3/2) | 2605/1156 | 15/34 | 81/68 | 6561/4624 |
| D | (1,1) | (0,-1) | 1 | 0 | 3/4 | 9/16 |

The printed U, I, D order selects **U** on the exact U/D tie. Choosing D because its name sounds smoother violates the declared rule, although these two predictions coincide here. Do not describe this tie as evidence that the methods agree on all data.

For the wrong penalty $\\|u\\|^2$, $B^TB+\\alpha I=\\operatorname{diag}(17/16,17/256)$ and $B^Td=(1,1/64)$. Its u estimate is $(16/17,4/17)$, hence physical estimate $(16/17,1/17)$. Validation loss is $1090/289$, and the heldout prediction $15/17$ has residual $111/68$, squared loss $12321/4624$. This is a different prior structure, not floating-point error. It is a failure control, not a fourth candidate added after inspecting the labels.

For the physical family $A_\\epsilon=\\operatorname{diag}(1,\\epsilon)$, U has error $\\delta/\\epsilon$ in the second component. If $\\delta=\\epsilon/10$, that error stays $1/10$ although the observation error tends to zero; if $\\delta$ is fixed it diverges. A fixed positive identity regularizer bounds transmitted noise but can retain bias; sending the regularizer to zero without a noise-dependent rule supplies no uniform recovery theorem. These proofs explain the finite noise comparisons rather than extrapolating a universal guarantee from their decimals.

**Final conclusion.** A unit-correct formulation reproduces the same physical objective and predictions; an untransformed penalty changes the problem. The changed sign exposes bias/noise cancellation, and the new contrast tests a different target. The heldout label includes a stipulated $1/4$ error above the noiseless contrast $-1$. No real-world sensor model, distribution shift guarantee or intervention effect has been validated. Preserve the changed target and units in the final ledger instead of pasting the primary conclusion.

## AMA-M3 — Optional reproducible calculation

The complete rational models above suffice for hand work. The optional plain JavaScript below implements exactly this two-coordinate investigation, not a general inverse package. Its actual binary64 outputs require comparison with the independent exact normal-equation oracle; a returned small normal residual alone is not a universal accuracy certificate. There are no imports, automatic run, file/network operations or learner-record effects. Decode one printed JSON block as an object and call \`appliedInverseAudit.run(data)\`. \`select\` reads training and validation only; \`reveal\` reads the heldout block after a frozen selection object exists. JavaScript object freezing is a local demonstration of protocol order, not privacy, tamper-proof history or an unseen assessment.

\`\`\`js
// EULER-APPLIED-INVERSE-AUDIT-V1
(() => {
  const number = value => {
    if (typeof value !== 'string' || !/^-?\\d+(?:\\/[1-9]\\d*)?$/.test(value) || value.length > 32) throw new TypeError('Expected a bounded rational string.');
    const [a, b = '1'] = value.split('/'), result = Number(a) / Number(b);
    if (!Number.isFinite(result) || Math.abs(result) > 1000) throw new RangeError('Unsupported scalar.');
    return result;
  };
  const vector = values => {
    if (!Array.isArray(values) || values.length < 1 || values.length > 2) throw new TypeError('Expected one or two coordinates.');
    return values.map(number);
  };
  const matrix = values => {
    if (!Array.isArray(values) || values.length < 1 || values.length > 2) throw new TypeError('Expected one or two rows.');
    return values.map(row => { const result = vector(row); if (result.length !== 2) throw new TypeError('Expected two columns.'); return result; });
  };
  const transpose = A => A[0].map((_, j) => A.map(row => row[j]));
  const multiply = (A, B) => A.map(row => B[0].map((_, j) => row.reduce((total, value, k) => total + value * B[k][j], 0)));
  const apply = (A, x) => A.map(row => row.reduce((total, value, j) => total + value * x[j], 0));
  const subtract = (x, y) => { if (x.length !== y.length) throw new TypeError('Observation size mismatch.'); return x.map((v, j) => v - y[j]); };
  const norm2 = x => x.reduce((total, value) => total + value * value, 0);
  const freeze = value => { if (value && typeof value === 'object') { Object.values(value).forEach(freeze); Object.freeze(value); } return value; };
  function fit(data, mode) {
    if (!['U', 'I', 'D'].includes(mode)) throw new RangeError('Unknown candidate.');
    const A = matrix(data.training.A), y = vector(data.training.y), W = matrix(data.whitener), P = matrix(data.physical_map);
    if (A.length !== 2 || y.length !== 2 || W.length !== 2 || P.length !== 2) throw new TypeError('This experiment has two training coordinates.');
    if (W[0][0] * W[1][1] - W[0][1] * W[1][0] === 0) throw new RangeError('Whitening must be invertible.');
    const alpha = mode === 'U' ? 0 : number(data.alpha);
    if (mode !== 'U' && !(alpha > 0)) throw new RangeError('Positive regularization required.');
    const L = mode === 'U' ? [[1, 0], [0, 1]] : matrix(data.penalties[mode]);
    const B = multiply(W, A), d = apply(W, y), Bt = transpose(B), G = multiply(Bt, B), LtL = multiply(transpose(L), L);
    const M = G.map((row, i) => row.map((v, j) => v + alpha * LtL[i][j]));
    const rhs = apply(Bt, d), determinant = M[0][0] * M[1][1] - M[0][1] * M[1][0];
    let K;
    if (determinant > 0) {
      const inverse = [[M[1][1] / determinant, -M[0][1] / determinant], [-M[1][0] / determinant, M[0][0] / determinant]];
      K = multiply(inverse, Bt);
    } else if (mode === 'U' && data.unregularized === 'equal-columns-minimum-norm' && B.every(row => row[0] === row[1]) && G[0][0] > 0) {
      const row = B.map(values => values[0] / (2 * G[0][0])); K = [row.slice(), row.slice()];
    } else throw new RangeError('Singular or unsupported normal system.');
    const coefficients = apply(K, d), residual = subtract(apply(A, coefficients), y), weightedResidual = subtract(apply(B, coefficients), d), penalty = apply(L, coefficients);
    const normalResidual = subtract(apply(M, coefficients), rhs);
    const result = { mode, coefficients, physical: apply(P, coefficients), residual, weightedResidual, penalty,
      objective: norm2(weightedResidual) + alpha * norm2(penalty), K, resolution: multiply(K, B), normalResidual };
    if (![...coefficients, ...result.physical, ...residual, ...weightedResidual, ...penalty, ...normalResidual, result.objective, ...K.flat(), ...result.resolution.flat()].every(Number.isFinite)) throw new RangeError('Nonfinite calculation.');
    return freeze(result);
  }
  function select(data) {
    if (!Array.isArray(data.mode_order) || data.mode_order.join(',') !== 'U,I,D') throw new RangeError('Expected the declared U,I,D tie order.');
    const C = matrix(data.validation.A), v = vector(data.validation.y);
    const rows = data.mode_order.map(mode => { const fitted = fit(data, mode), validationResidual = subtract(apply(C, fitted.coefficients), v); return freeze({ ...fitted, validationResidual, validationLoss: norm2(validationResidual) }); });
    const comparisonBand = 1e-10;
    let selected = rows[0]; for (const row of rows.slice(1)) if (row.validationLoss < selected.validationLoss - comparisonBand) selected = row;
    return freeze({ caseId: data.case_id, selectedMode: selected.mode, comparisonBand, rows, heldoutUsed: false });
  }
  function reveal(data, selection) {
    if (!Object.isFrozen(selection) || selection.caseId !== data.case_id || selection.heldoutUsed !== false) throw new TypeError('Freeze a matching selection before reveal.');
    const selected = selection.rows.find(row => row.mode === selection.selectedMode);
    if (!selected) throw new TypeError('Selected fit is absent.');
    const prediction = apply(matrix(data.heldout.A), selected.coefficients), residual = subtract(prediction, vector(data.heldout.y));
    return freeze({ caseId: data.case_id, selectedMode: selection.selectedMode, prediction, residual, loss: norm2(residual) });
  }
  const run = data => { const selection = select(data); return freeze({ selection, heldout: reveal(data, selection) }); };
  globalThis.appliedInverseAudit = Object.freeze({ fit, select, reveal, run });
})();
\`\`\`

Use rational inputs before decimal formatting. The native verification checks the printed data and all candidate keys, exact ranks/normal equations/resolution, unit invariance, zero-noise comparisons, guarded singular/nonfinite inputs and the actual software's heldout-read boundary. It does not execute arbitrary learner code, validate an external sensor or grade a learner.

## AMA-M4 — Cumulative rubric, repair and records

Use one row for each of the ten deliverables in M2. A complete response names its objects and hypotheses, gives all intermediate maps and compares every candidate. No numerical score is assigned by this rubric.

| Criterion | Complete evidence | Specific repair |
| --- | --- | --- |
| Units and observation map | Distinguish physical x, return coordinates u, sensor scaling and all three data roles | Substitute u=Dx and y'=Ey into both residual and penalty; do not change a label alone |
| Identification | Give the kernel/fibre, local/global limits and the augmented-map rank | Reconstruct the rank-one sum family, then add the validation row explicitly |
| Derivation and uniqueness | Correct normal equations, kernel-intersection proof and U minimum-norm convention | Differentiate the objective and prove why the chosen inverse exists; do not add an undeclared small diagonal |
| Sensitivity and regularization | Compute residual, resolution, bias and transmitted error separately | Reproduce the primary D cancellation and zero-noise comparison; a tiny residual is not truth error |
| Selection and final comparison | Whole validation table, stated tie order, frozen winner, new target and complete heldout loss | Remove heldout labels from selection; record a new procedure rather than silently retune |
| Computation | Exact hand identities plus bounded actual-code check if software is used | Compare coefficients/maps with exact rational solutions, report nonfinite/singular failures and normal residual limitations |
| Validation and inference | Falsification matrix, model-error assumptions and causal nonclaim | Separate code verification, synthetic recovery, predictive validation, sampling inference and intervention identification |
| Cumulative transfer | Complete changed-rank and changed-unit/target models, including the wrong-penalty counterexample | Reconstruct the new demand instead of pasting the primary winner |
| Reproducibility and communication | All input fractions, operation conventions, text tables, named source/key exposure and readable explanations | Keep full-precision records; colour or a plotted reconstruction alone cannot supply the reasoning |
| Revision | First/comparison/revised files and an explained correction | Preserve the earlier attempt; a mutable note does not become immutable task history |

After the primary, compare against its model and name the earliest error. Then complete AMA-P002 and AMA-R001 under their changed contracts. Public answers may already have been seen; call later work reconstruction when appropriate. Keep separate dated \`AMA-P001-first\`, \`-comparison\`, \`-revised\` files and their changed/return counterparts, following the [worksheet portfolio workflow](/guide/learner-records/#keep-a-worksheet-portfolio). Notes and checkmarks are personal study records. This course creates no programme stage, native Practice admission, automatic proof mark, shared writing registration, grade, workload calibration or qualification. Specialist scientific investigations and actual external validation retain their own preparation and evidence.
`;export{e as default};