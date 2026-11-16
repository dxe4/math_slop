
# Stochastic Gradients, Momentum, and Adaptive Coordinates

## Purpose and prerequisites

Chapter 4 proved when a sampled mini-batch gradient is unbiased for a fixed empirical objective. Chapter 10 supplied smooth deterministic descent, and Chapter 12 separated conditioning from generalization. We now study the update dynamics created by noisy gradients.

The main goals are to:

- decompose a stochastic gradient into signal and conditional noise;
- derive a smooth nonconvex descent bound and its noise floor;
- understand constant and diminishing step schedules;
- solve a noisy scalar quadratic exactly;
- analyze momentum as a second-order recurrence;
- explain adaptive-coordinate accumulators without treating them as unit-free magic;
- specify reproducible sampling, clipping, and stopping records.

This is finite-data optimization analysis. Statements about population risk, concentration, and asymptotic inference require the probability and statistical-learning volumes. A stochastic optimizer can minimize the wrong empirical objective efficiently.

## Conditional gradient noise

Let $F\colon \mathbb{R}^d\to \mathbb{R}$ be the full empirical objective and let $G_{t}$ be a random update direction at current parameter $\theta _{t}$. Write

$G_{t}=\nabla F(\theta _{t})+\xi _{t}$.

The useful unbiasedness condition is conditional on the algorithm's current information $H_{t}$:

$\mathbb{E}[\xi _{t} | H_{t}]=0$.

The history includes parameters, earlier batches and random draws, and optimizer state, but it excludes the fresh random draw used to form $G_t$. This form allows $\theta _{t}$ to be random while requiring a newly sampled batch to target the gradient at the current point. A replayable implementation also stores its current pseudorandom-generator state. That stored state deterministically fixes future draws for a particular program, whereas the probability model treats the next draw as random relative to $H_t$; the two descriptions serve different purposes and should not be conflated.

A common second-moment assumption is

$\mathbb{E}[\lVert \xi _{t}\rVert^{2} | H_{t}]\le \sigma ^{2}$.

This is not implied by unbiasedness. Nor must $\sigma ^{2}$ be uniform across parameters in real learning problems. It is a theorem hypothesis used to expose the interaction of noise and step size.

Since the conditional cross term vanishes,

$\mathbb{E}[\lVert G_{t}\rVert^{2} \lvert H_{t}]=\lVert \nabla F(\theta _{t})\rVert^{2}+\mathbb{E}[\lVert \xi _{t}\rVert^{2} \rvert H_{t}]$.

For a mean of $b$ independent with-replacement per-case gradients having covariance $\Sigma (\theta _{t})$, batch covariance is $\Sigma /b$. Sampling without replacement changes the factor and creates dependence. Augmentation, repeated units, and distributed shards can invalidate the independent-case formula.

### Worked batch-noise calculation

At a fixed $\theta$, suppose a scalar per-case gradient is $-2$ or $4$ with equal probability. The full gradient is 1. Noise values are $-3$ and $3$, so noise variance is 9. An independent batch mean of size 4 has variance $\frac{9}{4}$; its standard deviation is $1.5$. The expected direction stays 1, but one batch can still point negative.

### Batch-size and noise schedules

If an independent batch mean of size $b_{t}$ has conditional noise second moment at most $\sigma _{1}^{2}/b_{t}$, the smooth-descent noise cost becomes

$L\eta _{t}^{2}\sigma _{1}^{2}/(2b_{t})$.

Thus both step size and batch size schedule the perturbation injected into one update. Increasing $b_{t}$ lowers this bound, but it also changes the number of parameter updates per data pass, memory use, reduction order, and sometimes the objective implementation. The popular rule “multiply the learning rate when multiplying the batch size” is a heuristic tied to particular transient and compute regimes, not a consequence of the bound above.

Accumulating $k$ microbatch gradients at one frozen parameter and then averaging is algebraically equal to one combined-batch gradient for a separable mean loss. It is not equivalent if parameters move between microbatches or if the program updates batch-dependent state, samples different augmentation logic, or normalizes each microbatch separately. A batch schedule record therefore includes examples per update, microbatch size, accumulation count, reduction denominator, sampling replacement, and state-update timing.

With a changing $b_{t}$, the telescoped stochastic term is controlled by $\sum_{t}\eta _{t}^{2}/b_{t}$ under the stated independent variance model. This formula is a planning lens, not a general convergence theorem: finite-population sampling, clustered cases, and correlated augmentations change the covariance.

## Smooth stochastic descent

Assume $F$ has $L$-Lipschitz gradient. The descent lemma gives, for update

$\theta _{t+1}=\theta _{t}-\eta _{t}G_{t}$,

the pathwise bound

$F(\theta _{t+1})\le F(\theta _{t})-\eta _{t}\nabla F(\theta _{t})^{\top}G_{t}+(L\eta _{t}^{2}/2)\lVert G_{t}\rVert^{2}$.

Take conditional expectation, use unbiasedness, and apply the variance bound:

$\mathbb{E}[F(\theta _{t+1}) | H_{t}]$

$\le F(\theta _{t})-\eta _{t}\lVert \nabla F(\theta _{t})\rVert^{2}$

$+(L\eta _{t}^{2}/2)(\lVert \nabla F(\theta _{t})\rVert^{2}+\sigma ^{2})$

$=F(\theta _{t})-\eta _{t}(1-L\eta _{t}/2)\lVert \nabla F(\theta _{t})\rVert^{2}+(L\eta _{t}^{2}\sigma ^{2}/2)$.

If $0<\eta _{t}\le 1/L$, then

$\mathbb{E}[F(\theta _{t+1}) | H_{t}]\le F(\theta _{t})-(\eta _{t}/2)\lVert \nabla F(\theta _{t})\rVert^{2}+(L\eta _{t}^{2}\sigma ^{2}/2)$.

The negative term is optimization signal; the positive term is noise cost. Even under every assumption, this is an expectation bound, not monotonicity of each realized step.

### Constant-step stationarity bound

Assume $F$ is bounded below by $F_{\mathrm{inf}}$ and use constant $\eta \le 1/L$ for $T$ updates. Take total expectations and sum:

$(\eta /2)\sum_{t=0}^{T-1}\mathbb{E} \lVert \nabla F(\theta _{t})\rVert^{2}$

$\le F(\theta _{0})-F_{\mathrm{inf}}+(L\eta ^{2}\sigma ^{2}T/2)$.

Therefore

$(1/T)\sum_{t}\mathbb{E} \lVert \nabla F(\theta _{t})\rVert^{2}$

$\le 2[F(\theta _{0})-F_{\mathrm{inf}}]/(\eta T)+L\eta \sigma ^{2}$.

The first term decreases with more iterations. The second is a constant-step noise floor. Smaller $\eta$ lowers that floor but slows the transient term. This bound does not say the last iterate is best; selecting a random iterate or tracking validated checkpoints requires a declared protocol.

## Diminishing schedules

Under the same hypotheses, with every step satisfying $0<\eta_{t}\le 1/L$, the
same telescope with variable steps gives

$\sum_{t} \eta _{t} \mathbb{E} \lVert \nabla F(\theta _{t})\rVert^{2}$

$\le 2[F(\theta _{0})-F_{\mathrm{inf}}]+L\sigma ^{2}\sum_{t}\eta _{t}^{2}$.

Classical stochastic-approximation schedules often require

$\sum_{t}\eta _{t}=\infty$ and $\sum_{t}\eta _{t}^{2}<\infty$.

The first prevents movement from ending too soon; the second limits accumulated variance. For

$\eta _{t}=c/(t+t_{0})^\alpha$,

these series conditions hold when $\frac{1}{2}<\alpha \le 1$. At $\alpha =\frac{1}{2}$, the square sum behaves like the harmonic series and diverges. At $\alpha >1$, the step sum is finite.

These two series conditions are not a complete convergence theorem. A result still needs regularity of $F$, noise conditions, stability or boundedness, and a precise convergence notion. In finite training runs, step decay, cosine schedules, restarts, and warmup are horizon-dependent controls rather than automatic consequences of Robbins–Monro theory.

### Warmup as a stated engineering mechanism

A linear warmup

$\eta _{t}=\eta_{\max}(t+1)/T_{w}$ for $0\le t<T_{w}$

limits early steps while parameters, gradients, and adaptive-state estimates are poorly scaled. It may prevent overflow or unstable transients. It is not a proof that $\eta_{\max}$ is safe after warmup, nor does it repair a wrong loss reduction.

## Exact noisy scalar quadratic

Let

$F(\theta )=(a/2)(\theta -\theta^{\star})^{2}$, $a>0$,

and observe stochastic gradient

$G_{t}=a(\theta _{t}-\theta^{\star})+\xi _{t}$,

where $\xi _{t}$ are independent, mean zero, variance $\sigma ^{2}$. Define error $e_{t}=\theta _{t}-\theta^{\star}$. Constant-step SGD gives

$e_{t+1}=(1-\eta a)e_{t}-\eta \xi _{t}$.

### Mean dynamics

$\mathbb{E}[e_{t}]=(1-\eta a)^t e_{0}$.

The mean converges to zero exactly when $\lvert 1-\eta a\rvert<1$, or

$0<\eta a<2$.

### Variance dynamics

Independence makes the cross term vanish:

$\operatorname{Var}(e_{t+1})=(1-\eta a)^{2}\operatorname{Var}(e_{t})+\eta ^{2}\sigma ^{2}$.

Under the stability condition, the limiting variance solves

$V=(1-\eta a)^{2}V+\eta ^{2}\sigma ^{2}$,

so

$V=\eta \sigma ^{2}/[a(2-\eta a)]$.

For small $\eta$, this is approximately $\eta \sigma ^{2}/(2a)$. Constant-step SGD therefore fluctuates around the optimum even after its mean error decays. Larger curvature $a$ pulls more strongly, but the stability ceiling $2/a$ is smaller.

### Averaging iterates

An average of late iterates can reduce variance when their correlations decay, but the $e_{t}$ are not independent. Exact variance depends on autocovariances. Saying “averaging divides variance by the number of iterates” is generally wrong for a Markov sequence. Burn-in, averaging window, and checkpoint state belong in the report.

## Momentum conventions

Two common formulas use the same word “momentum” but different state scaling.

**Velocity form:**

$v_{t+1}=\beta v_{t}+G_{t}$,

$\theta _{t+1}=\theta _{t}-\eta v_{t+1}$.

**Exponential-average form:**

$m_{t+1}=\beta m_{t}+(1-\beta )G_{t}$,

$\theta _{t+1}=\theta _{t}-\alpha m_{t+1}$.

They match when $\alpha =\eta /(1-\beta )$ and initial states agree after scaling. Copying $\eta$ between conventions changes the effective step by $1/(1-\beta )$.

For deterministic scalar quadratic $G_{t}=ae_{t}$, eliminate the velocity to obtain

$e_{t+1}=(1+\beta -\eta a)e_{t}-\beta e_{t-1}$.

The characteristic polynomial is

$r^{2}-(1+\beta -\eta a)r+\beta =0$.

For $0\le \beta <1$, both roots lie inside the unit circle exactly when

$0<\eta a<2(1+\beta )$.

This follows from the second-order Jury conditions. Complex roots produce damped oscillations with modulus $\sqrt{\left(\beta \right)}$. Momentum can accelerate selected curvature ranges, but it also introduces state, oscillation, and a larger failure surface.

### Worked momentum trace

Let $a=2$, $\beta =\frac{1}{2}$, $\eta =\frac{1}{2}$, $e_{-1}=e_{0}=1$. Then

$e_{1}=(1+\frac{1}{2}-1)e_{0}-(\frac{1}{2})e_{-1}=0$,

$e_{2}=(\frac{1}{2})e_{1}-(\frac{1}{2})e_{0}=-\frac{1}{2}$,

$e_{3}=(\frac{1}{2})(-\frac{1}{2})-(\frac{1}{2})0=-\frac{1}{4}$.

The method crosses the optimum and oscillates. Objective nonmonotonicity is not by itself a bug.

## Look-ahead gradients and naming discipline

One Nesterov-style update evaluates a gradient at a look-ahead point:

$v_{t+1}=\beta v_{t}+\nabla F(\theta _{t}-\eta \beta v_{t})$,

$\theta _{t+1}=\theta _{t}-\eta v_{t+1}$.

Other libraries use algebraically transformed state variables and call them the same name. An audit must record equations, update order, and where the gradient is evaluated. A label such as “Nesterov on” is not a reproducible specification.

With stochastic gradients, the look-ahead point depends on past noise, but a fresh unbiased batch can still target the gradient at that random point conditionally. Reusing or selecting batches based on their losses can break the condition.

## Coordinatewise accumulators

Ill-scaled coordinates motivate steps of the form

$\theta _{t+1,j}=\theta _{t,j}-\eta G_{t,j}/\sqrt{\left(s_{t,j}+\varepsilon _{s}\right)}$.

The accumulator determines the method.

### AdaGrad-style sum

$s_{t,j}=s_{t-1,j}+G_{t,j}^{2}$.

The denominator never decreases, so frequently large-gradient coordinates receive progressively smaller steps. In a stationary regime, steps may decay even when continued motion is useful.

### RMS-style exponential average

$s_{t,j}=\rho s_{t-1,j}+(1-\rho )G_{t,j}^{2}$.

This tracks recent squared gradients with effective memory controlled by $\rho$. Early estimates are biased toward zero when initialized at zero; dividing by $1-\rho ^{t+1}$ corrects that expectation under a stationary mean model.

### First and second moments

An Adam-style state combines

$m_{t}=\beta _{1}m_{t-1}+(1-\beta _{1})G_{t}$,

$s_{t}=\beta _{2}s_{t-1}+(1-\beta _{2})G_{t}^{2}$,

with componentwise squares and bias corrections. Its exact behavior depends on whether $\varepsilon$ is inside or outside the square root, update indexing, maximum variants, weight decay, precision, and reduction order. Convergence is not guaranteed merely by the presence of moment estimates.

## Units and rescaling

Suppose parameter coordinate $\theta _{j}$ is replaced by $\phi _{j}=c\theta _{j}$. Gradients transform as

$\partial F/\partial \phi _{j}=(1/c)\partial F/\partial \theta _{j}$.

For an idealized adaptive ratio $G_{j}/\sqrt{\left(s_{j}\right)}$ with $s_{j}$ built from squared gradients, numerator and denominator scale together under a positive rescaling. This is invariance of the numerical ratio to gradient units, not covariance of the parameter update. If $\phi_j=c\theta_j$ with $c>0$, corresponding displacements must satisfy $\Delta\phi_j=c\Delta\theta_j$; because the idealized ratios are numerically equal, the scalar learning rate in the $\phi_j$ coordinate would have to be multiplied by $c$ to represent the same displacement. A single shared learning rate cannot do this for arbitrary coordinatewise rescalings. Moreover, $\varepsilon$, finite history, momentum, regularization, clipping, and non-diagonal transformations break even the ratio invariance.

The stabilizer has units. If the denominator is $\sqrt{\left(s\right)}+\varepsilon$, then $\varepsilon$ has gradient units. If it is $\sqrt{\left(s+\varepsilon _{s}\right)}$, then $\varepsilon _{s}$ has squared-gradient units. Treating the same numeric epsilon as universal across unit changes alters the algorithm.

## Gradient clipping changes the estimator

Norm clipping replaces $G$ by

$\operatorname{clip}_{c}(G)=G \min\left(1,c/\lVert G\rVert\right)$.

It bounds an update and can prevent nonfinite steps, but generally introduces bias:

$\mathbb{E}[\operatorname{clip}_{c}(G)]\ne \mathbb{E}[G]$.

Example: scalar $G=-1$ with probability $0.9$ and $G=9$ with probability $0.1$ has mean zero. Clipping at 2 gives expectation

$0.9(-1)+0.1(2)=-0.7$.

The clipped optimizer targets a modified stochastic dynamic, not an unbiased version of the original gradient. Reports should include the threshold, norm definition, fraction clipped, and pre/post-clipping norms. Per-coordinate clipping is different from global norm clipping.

## Weight decay and penalties

For plain SGD, adding $\lambda \theta$ to the gradient of the data loss produces

$\theta _{t+1}=(1-\eta \lambda )\theta _{t}-\eta G_{t}$,

which is equivalent to gradient descent on an $L^{2}$ penalty $(\lambda /2)\lVert \theta \rVert^{2}$.

With a coordinatewise preconditioner $D_{t}$, adding $\lambda \theta$ inside the gradient yields

$\theta _{t+1}=\theta _{t}-\eta D_{t}(G_{t}+\lambda \theta _{t})$,

while decoupled decay yields

$\theta _{t+1}=(1-\eta \lambda )\theta _{t}-\eta D_{t}G_{t}$.

These differ unless $D_{t}=I$ or another equivalence is proved. “Weight decay” and “L2 regularization” should not be used interchangeably in adaptive methods.

## A dependency-free optimizer trace

```text
state = {
    step: 0,
    theta: copy(theta0),
    velocity: zeros_like(theta0),
    sampler_state: declared_seed_state
}

for t in 0..T-1:
    sampler_state, batch_ids = next_batch(sampler_state)
    loss, gradient = frozen_batch_loss_and_gradient(theta, batch_ids)
    require finite(loss) and all_finite(gradient)
    preclip_norm = norm(gradient)
    gradient = global_norm_clip(gradient, clip_threshold)
    velocity = beta * velocity + gradient
    eta = declared_schedule(t)
    theta = theta - eta * velocity
    append immutable trace record
```

The trace record should contain batch identities, reduction denominator, state hashes, step, loss, gradient norm, clipping event, velocity norm, parameter norm, and nonfinite/failure status. Validation-based stopping is a separate outer protocol and must not inspect test data.

## Stopping under noise

A single small batch gradient can occur by cancellation. More informative signals include:

- a moving distribution of full or large-batch gradient estimates on frozen rows;
- objective changes relative to stochastic variability;
- parameter-update norms in declared units;
- primal/dual or feasibility residuals when available;
- validation performance under a predeclared selection rule;
- a fixed compute or data-pass budget.

Repeatedly choosing the most favorable noisy validation checkpoint creates selection bias. Store the whole trajectory and distinguish the rule used for selection from the final frozen evaluation.

## Failure boundaries

- Conditional unbiasedness can fail through adaptive sampling, stale gradients, or data-dependent augmentation.
- A variance bound is an assumption, not a consequence of using a mini-batch.
- Expected descent does not mean every step decreases the objective.
- Momentum hyperparameters depend on the exact state convention.
- Adaptive scaling does not remove all unit dependence or guarantee convergence.
- Clipping, normalization, and decoupled decay change the update law.
- Learning-rate schedules do not repair leakage, objective mismatch, or distribution shift.
- Seed replay is necessary but insufficient when parallel kernels or external state are nondeterministic.

## Exercises

1. A scalar stochastic gradient is $-1$ or $5$ with equal probability. Find the full gradient, noise values, and noise variance.
2. Prove $\mathbb{E} \lVert G\rVert^{2}=\lVert g\rVert^{2}+\mathbb{E} \lVert G-g\rVert^{2}$ when $\mathbb{E}[G]=g$.
3. Starting from the descent lemma, reproduce the conditional stochastic-descent bound for $\eta \le 1/L$.
4. With constant step, $L=4$, $\sigma ^{2}=9$, and $\eta =0.05$, compute the noise-floor term in the average squared-gradient bound.
5. For $\eta _{t}=c/(t+t_{0})^\alpha$, identify which of $\alpha =0.4,0.75,1,1.2$ satisfy both classical series conditions.
6. For scalar quadratic curvature $a=3$, find the constant-step stability interval.
7. In the same quadratic with $\eta =0.2$ and noise variance $5$, compute the limiting error variance.
8. Derive the scalar momentum recurrence from the velocity-form updates.
9. For $\beta =0.9$ and curvature $a=10$, give the stability interval for $\eta$ under the stated scalar criterion.
10. Relate the velocity and exponential-average momentum learning rates when $\beta =0.8$.
11. Show by calculation that clipping the chapter's $(-1,9)$ example at 2 changes a zero-mean estimator to mean $-0.7$.
12. An RMS accumulator starts at zero with constant squared gradient $q$. Find $s_{t}$ and verify the bias-corrected value.
13. Explain the units of epsilon for $\sqrt{\left(s\right)}+\varepsilon$ and for $\sqrt{\left(s+\varepsilon _{s}\right)}$.
14. Compare coupled $L^{2}$ and decoupled decay for $D=\operatorname{diag}(1,100)$, $\theta =(1,1)$, zero data gradient, $\eta \lambda =0.01$.
15. Design a deterministic test distinguishing sum-loss and mean-loss behavior across batch sizes.
16. Write a minimal reproducibility and stopping record for a stochastic run, including at least eight fields and two explicit nonclaims.

## Full solutions

1. The mean gradient is $g=(-1+5)/2=2$. Noise values are $-3$ and $3$, each with probability $\frac{1}{2}$, so variance is $(9+9)/2=9$.
2. Write $G=g+\xi$ with $\mathbb{E} \xi =0$. Then $\mathbb{E} \lVert G\rVert^{2}=\mathbb{E}[\lVert g\rVert^{2}+2g^{\top}\xi +\lVert \xi \rVert^{2}]=\lVert g\rVert^{2}+\mathbb{E} \lVert \xi \rVert^{2}$ because the cross term is zero.
3. Smoothness gives $F(\theta -\eta G)\le F(\theta )-\eta \nabla F^{\top}G+(L\eta ^{2}/2)\lVert G\rVert^{2}$. Conditional expectation replaces the first product by $\lVert \nabla F\rVert^{2}$ and the second moment by at most $\lVert \nabla F\rVert^{2}+\sigma ^{2}$. Thus the coefficient is $-\eta +L\eta ^{2}/2\le -\eta /2$ for $\eta \le 1/L$, giving $\mathbb{E}[F_{\mathrm{next}}|H]\le F-(\eta /2)\lVert \nabla F\rVert^{2}+(L\eta ^{2}\sigma ^{2}/2)$.
4. The floor is $L\eta \sigma ^{2}=4\cdot 0.05\cdot 9=1.8$. This is a term in an upper bound, not a prediction of the observed gradient norm.
5. Both conditions need $\frac{1}{2}<\alpha \le 1$. Thus $0.75$ and $1$ qualify. $0.4$ has divergent square sum; $1.2$ has finite total step length.
6. Stability requires $0<\eta a<2$, so $0<\eta <\frac{2}{3}$.
7. Use $V=\eta \sigma ^{2}/[a(2-\eta a)]$. With $\eta =0.2$, $a=3$, $\sigma ^{2}=5$, $V=1/[3(1.4)]=\frac{5}{21}\approx 0.2381$.
8. From $\theta _{t}=\theta _{t-1}-\eta v_{t}$, errors obey $\eta v_{t}=e_{t-1}-e_{t}$. Then $e_{t+1}=e_{t}-\eta (\beta v_{t}+ae_{t})=(1-\eta a)e_{t}-\beta (e_{t-1}-e_{t})=(1+\beta -\eta a)e_{t}-\beta e_{t-1}$.
9. The condition is $0<\eta a<2(1+\beta )=3.8$. With $a=10$, $0<\eta <0.38$.
10. Velocity uses update $-\eta v$ with $v=\beta v_{\mathrm{old}}+G$; exponential average is $m=\beta m_{\mathrm{old}}+(1-\beta )G$. Since $m=(1-\beta )v$, equal parameter steps require $\alpha m=\eta v$, hence $\alpha =\eta /(1-\beta )=5\eta$.
11. Before clipping, $0.9(-1)+0.1(9)=0$. After scalar clipping to $[-2,2]$, expectation is $0.9(-1)+0.1(2)=-0.9+0.2=-0.7$.
12. The recurrence $s_{t}=\rho s_{t-1}+(1-\rho )q$, with $s_{-1}=0$, gives $s_{t}=q(1-\rho ^{t+1})$. Dividing by $1-\rho ^{t+1}$ returns $q$ exactly in this constant fixture.
13. Since $s$ stores squared gradients, $\sqrt{\left(s\right)}$ has gradient units; an epsilon added after the root must also have gradient units. An epsilon added inside the root must have squared-gradient units. Their numeric values cannot be compared without units.
14. Coupled update gives $\theta _{\mathrm{new}}=\theta -\eta D\lambda \theta =(0.99,0)^{\top}$ because coordinate shrinkages are $0.01$ and $1$. Decoupled decay gives $(1-0.01)\theta =(0.99,0.99)^{\top}$. Adaptive geometry makes the two rules sharply different.
15. Duplicate one fixed case $b$ times. Under a mean loss, value and gradient must remain equal to the one-case result; under a sum they scale by $b$. Test several $b$, including an incomplete final-batch size, with exact tiny arithmetic.
16. Fields can include objective and contract version, parameter initialization, sampler algorithm/state, batch identities, batch size and reduction, schedule equation, optimizer recurrence, clipping threshold/events, dtype, parameter/gradient/velocity norms, failure status, checkpoint rule, and split hashes. Explicit nonclaims: replay does not prove population generalization, and optimization does not prove causal or decision value.

## Verification checkpoint and forward links

On the exact scalar quadratic, implement SGD and velocity momentum with an explicit finite noise sequence. Compare every iterate with the recurrence, test the deterministic stability boundary, estimate late-run variance across declared independent streams, and demonstrate clipping bias by exact enumeration. Preserve both equations and trace state; do not summarize the method with an optimizer name alone.

Chapter 15 supplies the stable losses whose gradients these methods sample. Chapter 16 studies how initialization changes gradient and activation scales before the first stochastic update. Chapter 20 will assemble these records into a reproducible training pipeline.
