
# Nonsmooth Programs and Gradient Verification

## Purpose and prerequisites

Forward and reverse automatic differentiation apply local derivative rules to an executed trace. A derivative checker asks whether those rules and their composition agree with independent mathematical consequences. Both activities become delicate at kinks, branch changes, stochastic traces, and finite-precision scales.

This chapter builds a verification ladder:

1. classify the mathematical regularity of the intended function;
2. distinguish classical derivatives, directional derivatives, and convex subgradients;
3. derive truncation and roundoff behavior of finite differences;
4. use coordinate, directional, JVP/VJP, and exact-invariant tests together;
5. freeze state and name tolerances so a failure is reproducible;
6. refuse to call a selected trace derivative “the gradient” where no classical gradient exists.

The objective is not to make every check pass. A useful checker returns evidence or a typed reason the comparison is inapplicable.

## Classical differentiability and its failure

A function $f\colon \mathbb{R}^d\to \mathbb{R}^m$ is differentiable at $x$ when there is a linear map $A$ such that

$f(x+h)=f(x)+Ah+o(\lVert h\rVert)$.

The same $A$ must approximate all sufficiently small directions at once. Existence of partial derivatives is not enough.

### Counterexample: partial derivatives without differentiability

Define

$f(x,y)=x^{2}y/(x^{4}+y^{2})$ when $(x,y)\ne (0,0)$, and $f(0,0)=0$.

Along either coordinate axis, $f$ is zero, so both partial derivatives at the origin are zero. Along the curve $y=x^{2}$, however,

$f(x,x^{2})=x^{4}/(x^{4}+x^{4})=\frac{1}{2}$

for every nonzero $x$. The function is not even continuous at the origin, hence not differentiable. Coordinate finite differences alone can miss this failure completely.

### Directional derivatives need not form a linear map

For $f(x)=\lvert x\rvert$, the one-sided directional derivative at zero in direction $v$ is

$f'(0;v)=\lim_{t↓0} [\lvert tv\rvert-0]/t=\lvert v\rvert$.

The map $v\mapsto \lvert v\rvert$ is not linear, so it cannot be represented by a classical derivative. A system returning $0$, $1$, or $-1$ at the kink has selected a convention or trace behavior; none is “the” classical gradient.

## Convex subgradients

For a convex function $f\colon \mathbb{R}^d\to \mathbb{R}$, a vector $g$ is a **subgradient** at $x$ when

$f(z)\ge f(x)+g^{\top}(z-x)$ for every $z$.

The set of all such vectors is the subdifferential $\partial f(x)$. If $f$ is differentiable at $x$, convexity gives $\partial f(x)=\{\nabla f(x)\}$. At a kink the set may contain many vectors.

### Absolute value

For $f(x)=\lvert x\rvert$:

- if $x>0$, $\partial f(x)=\{1\}$;
- if $x<0$, $\partial f(x)=\{-1\}$;
- at $x=0$, $\partial f(0)=[-1,1]$.

To prove the last statement, the subgradient condition is $\lvert z\rvert\ge gz$ for every $z$. For positive $z$, this requires $g\le 1$; for negative $z$, dividing reverses the inequality and requires $g\ge -1$. These conditions are also sufficient.

### Maximum of affine functions

Let $f(x)=\max_{j}(a_{j}^{\top}x+b_{j})$. If one index $j^{\star}$ is uniquely active, $f$ is locally affine and has gradient $a_{j^{\star}}$. At a tie, every convex combination of active slopes is a subgradient. For $\max\left(x_{1},x_{2}\right)$ at $(1,1)$,

$\partial f(1,1)=\{\lambda (1,0)+(1-\lambda )(0,1):0\le \lambda \le 1\}$.

A branch implementation may return one endpoint depending on tie-breaking. That endpoint is a valid convex subgradient but does not establish classical differentiability.

### ReLU and a stated convention

$\operatorname{relu}(x)=\max\left(0,x\right)$ has derivative 0 for $x<0$, 1 for $x>0$, and subdifferential $[0,1]$ at zero. Many systems choose zero at the kink. That convention is useful only when documented. It affects whether a unit exactly at zero begins to move under a given upstream adjoint.

Subgradients are not arbitrary replacement gradients. The familiar equality chain rule can fail for selected subgradients, and a negative subgradient step need not decrease a nonsmooth function for every step size. Proximal and subgradient methods need their own guarantees.

## Active sets and piecewise-smooth programs

Many learning programs are smooth within regions defined by inequalities:

- ReLU networks fix which preactivations are positive;
- maximum and hinge losses fix active alternatives;
- clipping fixes lower, interior, or upper regimes;
- sparse penalties create zero/nonzero active coordinates;
- iterative solvers fix termination count and pivot choices.

Within one open region, ordinary automatic differentiation can be exact for the represented smooth formula. At a boundary, infinitesimal perturbations may change the active set. A verification report should include the distance or margin to known boundaries when practical.

### Worked hinge loss

For label $y\in \{-1,1\}$, score $s$, and hinge loss

$\ell (s)=\max\left(0,1-ys\right)$,

the derivative with respect to $s$ is $-y$ when $ys<1$ and 0 when $ys>1$. At $ys=1$, the subdifferential is the interval joining those slopes:

$\partial \ell (s)=\{-\alpha y\colon 0\le \alpha \le 1\}$.

A centered finite difference exactly at the kink tends toward the midpoint slope $-y/2$, while a branch-based autodiff rule might return 0 or $-y$. Disagreement there need not indicate a bug. Agreement away from the boundary is the stronger implementation test.

## Finite differences: truncation first

For a smooth scalar function $f\colon \mathbb{R}\to \mathbb{R}$, Taylor expansion around $x$ gives

$f(x+h)=f(x)+hf'(x)+(h^{2}/2)f''(x)+(h^{3}/6)f'''(\xi _+)$

for an intermediate point $\xi _+$. Therefore the forward difference

$D_+f(x;h)=[f(x+h)-f(x)]/h$

satisfies

$D_+=f'(x)+(h/2)f''(x)+O(h^{2})$.

Its truncation error is first order in $h$. If $f$ has five derivatives near
$x$, expand both sides through the fourth-order term:

$f(x\pm h)=f(x)\pm hf'(x)+(h^{2}/2)f''(x)\pm (h^{3}/6)f'''(x)+(h^{4}/24)f''''(x)+O(h^{5})$,

and subtracting gives the centered difference

$D_{0}f(x;h)=[f(x+h)-f(x-h)]/(2h)=f'(x)+(h^{2}/6)f'''(x)+O(h^{4})$.

Centered differences have second-order truncation error under sufficient smoothness. They require two function evaluations and are still vulnerable to cancellation.

For $F\colon \mathbb{R}^d\to \mathbb{R}$ and direction $v$, apply the scalar formula to $\phi (t)=F(x+tv)$:

$[F(x+hv)-F(x-hv)]/(2h)\approx \nabla F(x)^{\top}v$.

Directional checks test many coordinates together and are often cheaper than building a coordinate finite-difference gradient.

## Roundoff prevents “smaller is always better”

Floating evaluation introduces errors on the scale of machine precision $u$ times the function magnitude and operation sensitivity. Dividing a difference of nearly equal values by $h$ roughly creates a roundoff term of order

$u\cdot \operatorname{scale}(f)/h$.

For centered differences, a schematic total error model is

$E(h)\approx C_{t} h^{2}+C_{r} u/h$.

The truncation term decreases with $h$, while roundoff grows. Balancing them suggests $h$ proportional to $u^{\frac{1}{3}}$ after accounting for input and function scales. For forward differences the balance is often near $\sqrt{\left(u\right)}$.

These are starting heuristics, not universal constants. A robust check sweeps several logarithmically spaced step sizes and looks for a region where error decreases at the expected order before flattening or rising.

### Scale-aware steps

For coordinate $x_{j}$, a common starting scale is

$h_{j}=c\cdot \max\left(1,\lvert x_{j}\rvert\right)$.

For a direction, normalize $v$ or incorporate $\lVert v\rVert$. Domain constraints may require one-sided steps or reparameterization. If $x_{j}$ represents a tiny physical unit, $\max\left(1,\lvert x_{j}\rvert\right)$ can still be inappropriate; nondimensional coordinates and declared units are safer.

## Worked difference sweep

Let $f(x)=x^{3}$ at $x=2$. The exact derivative is 12. The centered difference is exact up to a simple remainder:

$[(2+h)^{3}-(2-h)^{3}]/(2h)=12+h^{2}$.

In exact arithmetic the error is $h^{2}$. Thus reducing $h$ from $10^{-1}$ to $10^{-2}$ should reduce truncation error from $10^{-2}$ to $10^{-4}$. In floating arithmetic, eventually subtracting the two nearly equal cubes loses digits and the observed error stops following $h^{2}$.

A single result at $h=10^{-6}$ cannot reveal this pattern. Record the entire sweep, exact derivative, absolute error, relative-scaled error, and whether evaluations remained on the same branch.

## Complex-step differentiation

If $f$ extends analytically to complex inputs near a real $x$, then

$f(x+ih)=f(x)+ihf'(x)-(h^{2}/2)f''(x)-i(h^{3}/6)f'''(x)+…$.

Taking the imaginary part gives

$\operatorname{Im} f(x+ih)/h=f'(x)+O(h^{2})$.

This avoids subtracting two nearby real values and can use very small $h$. But it is not a universal gradient oracle. It fails or changes meaning when code:

- discards imaginary parts;
- uses non-analytic operations such as absolute value, real-part extraction, comparisons, or branch logic;
- invokes primitives without correct complex semantics;
- contains a function that is smooth as a real map but not complex analytic.

For example, the real function $f(x)=x^{2}$ works. A program computing $abs(z)^{2}$ on complex input returns a real magnitude with zero imaginary part, falsely suggesting derivative zero. Complex-step results require an analytic code path audit.

## Relative error and the near-zero trap

Given automatic value $a$ and reference value $b$, the naive relative error $\lvert a-b\rvert/\lvert b\rvert$ explodes when $b\approx 0$. Use a symmetric scaled error such as

$\operatorname{err}(a,b)=\lvert a-b\rvert/[a_{\mathrm{tol}}+r_{\mathrm{tol}}\cdot \max\left(\lvert a\rvert,\lvert b\rvert\right)]$.

The test passes when $\operatorname{err}\le 1$. Absolute tolerance covers near-zero quantities; relative tolerance scales larger quantities. Tolerances depend on dtype, operation count, condition, and reference error. They should be justified from an error budget rather than adjusted until a test passes.

For vectors, compare both norms and components:

- $\lVert a-b\rVert/[a_{\mathrm{tol}}+r_{\mathrm{tol}} \max\left(\lVert a\rVert,\lVert b\rVert\right)]$ for aggregate behavior;
- worst scaled component to catch a localized error;
- angle or dot-product checks when direction is central.

An aggregate norm can hide a wrong small component, while componentwise relative error can overreact to legitimate zeros. Use both.

## A layered gradient-check protocol

For scalar $F\colon \mathbb{R}^d\to \mathbb{R}$, a dependency-free directional check can be written:

```text
function check_direction(F, grad, x, v, steps, atol, rtol):
    require same_length(x, v, grad)
    require norm(v) > 0
    v = v / norm(v)
    predicted = dot(grad, v)
    records = []
    for h in steps:
        plus = F(x + h*v)
        minus = F(x - h*v)
        require finite(plus) and finite(minus)
        observed = (plus - minus) / (2*h)
        scale = atol + rtol * max(abs(predicted), abs(observed))
        records.append(h, observed, abs(predicted-observed)/scale)
    return records
```

The caller must freeze data, parameters not under test, random draws, preprocessing, model mode, and external state. The output is a sweep record, not a Boolean divorced from scale.

Use the following ladder:

1. **Exact tiny cases.** Compare to hand-derived values at rational or simple transcendental points.
2. **Primitive unit tests.** Check each local rule, domain, shape, and reduction.
3. **Coordinate differences.** Helpful for locating one bad component in small problems.
4. **Random normalized directions.** Exercise mixed paths efficiently.
5. **JVP/VJP duality.** For compatible $u,v$, verify $u^{\top}(Jv)=(u^{\top}J)v$.
6. **Structural invariants.** Test zero tangents for constants, symmetry, conservation, or known null directions.
7. **Metamorphic tests.** Compare algebraically equivalent programs and coordinate rescalings.
8. **End-to-end loss tests.** Use frozen small batches away from known kinks.

No single layer is sufficient. Finite differences can agree with two implementations sharing the same wrong reduction; exact shape/reduction cases catch that class of bug.

## JVP/VJP duality as an internal certificate

Let $J\in \mathbb{R}^{m\times d}$, $v\in \mathbb{R}^d$, and $u\in \mathbb{R}^m$. Associativity gives the scalar identity

$u^{\top}(Jv)=(u^{\top}J)v$.

Forward mode computes $Jv$; reverse mode computes $u^{\top}J$. The two engines traverse the graph in opposite orientations and often have different failure modes, so their dot-product agreement is powerful.

### Worked duality case

For

$f(x_{1},x_{2})=(x_{1}x_{2}, \exp\left(x_{1}\right)+x_{2})$,

at $(0,2)$,

$J=\begin{bmatrix}2 & 0 \\ 1 & 1\end{bmatrix}$.

Choose $v=(3,-1)$ and $u=(2,4)$. Then $Jv=(6,2)$ and $u^{\top}(Jv)=12+8=20$. Also $u^{\top}J=(8,4)$, and $(u^{\top}J)v=24-4=20$.

Agreement does not prove both engines correct: they might share a wrong primitive rule. Primitive exact tests remain necessary.

## Nonsmooth verification strategies

At a known kink, choose the question before choosing the check.

### Classical derivative question

Compare one-sided directional limits. If they disagree, report “not differentiable” rather than forcing a gradient match.

### Convex subgradient question

Check the subgradient inequality on analytically characterized cases or a declared finite test set. For $g\in \partial f(x)$, verify

$f(z)\ge f(x)+g^{\top}(z-x)$.

Finite test points cannot prove the universal inequality, but a violation disproves membership.

### Trace-rule question

Test that the engine implements its documented tie convention exactly. For ReLU at zero, if the rule specifies tangent zero, test zero—while labeling it a convention, not a classical derivative.

### Away-from-boundary question

Perturb the fixture so all active-set margins exceed the finite-difference step range. Then ordinary smooth checks should pass with their expected error order. This is usually the best way to catch implementation bugs in piecewise-smooth programs.

## Worked soft-threshold map

For $\lambda>0$, the proximal map for $\lambda \lvert x\rvert$ at unit step size is

$S_\lambda (x)=\operatorname{sign}(x)\max\left(\lvert x\rvert-\lambda ,0\right)$.

It is piecewise affine:

- derivative 1 when $x>\lambda$ or $x<-\lambda$;
- derivative 0 when $\lvert x\rvert<\lambda$;
- not classically differentiable at $x=\pm \lambda$.

When $\lambda=0$, the map is the identity and has no kink.

At $\lambda =1$, check $x=1.5$ with steps smaller than $0.5$: centered differences return 1. Check $x=0.5$ with steps smaller than $0.5$: they return 0. At $x=1$, a centered difference tends to $\frac{1}{2}$, while a branch may select 0 or 1. The correct report is boundary nondifferentiability plus the selected implementation convention.

## Randomness and mutable model state

A finite-difference call evaluates the function at least twice. If each call draws a different batch, dropout mask, augmentation, or simulation, the numerator combines function change with random-state change. Freeze the random variate or use common random numbers so both evaluations follow the same stochastic trace when testing a pathwise derivative.

Similarly, normalization layers may update running statistics, caches may mutate, and an iterative solver may warm-start from the previous call. A checker needs a pure evaluation wrapper:

- clone or restore mutable state;
- fix model train/evaluation mode;
- reuse identical data and random draws;
- disable parameter updates;
- use the same dtype and deterministic reduction path;
- record nonconvergence rather than treating a partial solve as exact.

If a loss includes an inner approximate optimization, its numerical tolerance contributes reference error. Tightening the outer difference step below the inner solver error can make the check worse.

## Diagnosing failure patterns

Different error patterns suggest different faults:

- **factor equal to batch size:** sum/mean reduction mismatch;
- **one axis consistently wrong:** transpose or broadcast-reduction error;
- **only reused nodes wrong:** missing branch accumulation;
- **error changes with evaluation order:** mutation or nondeterministic state;
- **checks pass for positive inputs but fail for negative:** sign or branch derivative;
- **best error never improves as $h$ shrinks:** wrong derivative, discontinuity, or noisy evaluation;
- **second-order decrease followed by rise:** expected centered-difference truncation then roundoff;
- **failure only near zero reference:** unsuitable relative-error denominator;
- **finite differences and autodiff agree but exact case fails:** shared specification bug.

A diagnostic tool should preserve these patterns in its report rather than print only “gradient check failed.”

## Exercises

1. Prove that differentiability implies continuity using the definition $f(x+h)=f(x)+Ah+o(\lVert h\rVert)$.
2. Find the one-sided directional derivative of $\max\left(x_{1},x_{2}\right)$ at $(0,0)$ in direction $v$. Explain why it is not linear in $v$.
3. Derive $\partial \lvert x\rvert$ for all real $x$ from the subgradient inequality.
4. Find the subdifferential of $\max\left(2x,-x\right)$ at zero.
5. For hinge loss with $y=-1$, give derivatives on both sides of the margin and the subdifferential at $s=-1$.
6. Derive the centered-difference error for $f(x)=x^{4}$ exactly, not just asymptotically.
7. For $f(x)=\sin\left(x\right)$ at $x=0$, compare the exact centered difference with the derivative and identify its leading error term.
8. Explain why a single finite-difference step cannot distinguish truncation, roundoff, and a wrong derivative reliably.
9. A gradient component reference is zero and autodiff returns $10^{-10}$. Compare naive relative error with a scaled tolerance using $atol=10^{-8}$, $rtol=10^{-5}$.
10. Verify JVP/VJP duality for $J=\begin{bmatrix}1 & 2 \\ 3 & 4 \\ 5 & 6\end{bmatrix}$, $v=(2,-1)$, and $u=(1,0,-2)$.
11. Give one example where complex-step works and one where it falsely returns zero because the code is non-analytic.
12. At $\lambda =2$, analyze centered differences of $S_\lambda$ at $x=0$, $x=3$, and $x=2$ for sufficiently small steps.
13. Design a test that detects a sum-versus-mean bug in a batch loss without relying on random finite differences.
14. A gradient check fails only when dropout is enabled. Give a reproducible diagnostic sequence and state what a frozen-mask pass would and would not prove.
15. For the convex function $f(x)=\max\left(x_{1},x_{2}\right)$, prove that its directional derivative at the origin equals $\max_{g\in \partial f(0)} g^{\top}v$ by first finding the subdifferential.
16. A centered-difference error model is $E(h)\le Ah^{2}+B \epsilon/h$ for positive constants. Minimize the right side over $h>0$ and explain why the result motivates a step sweep rather than a universal step.

## Full solutions

1. Differentiability gives $f(x+h)-f(x)=Ah+r(h)$ with $\lVert r(h)\rVert/\lVert h\rVert\to 0$. A linear map in finite dimensions is bounded, so $\lVert Ah\rVert\le C\lVert h\rVert$. Hence $\lVert f(x+h)-f(x)\rVert\le C\lVert h\rVert+\lVert r(h)\rVert\to 0$; this is continuity at $x$.
2. For $t\downarrow 0$, $\max\left(tv_{1},tv_{2}\right)/t=\max\left(v_{1},v_{2}\right)$. The map is not linear: for $v=(1,0)$ and $w=(0,1)$, it gives 1 for each, but gives 1 rather than 2 for $v+w=(1,1)$.
3. For $x>0$, local differentiability and convexity give the singleton $\{1\}$; directly, $\lvert z\rvert\ge x+g(z-x)$ for all $z$ forces $g=1$. Similarly $x<0$ gives $\{-1\}$. At zero the condition $\lvert z\rvert\ge gz$ requires $g\le 1$ from positive $z$ and $g\ge -1$ from negative $z$, so $[-1,1]$.
4. The two affine slopes are 2 and -1, tied at zero. The subdifferential is their convex hull $[-1,2]$.
5. With $y=-1$, loss is $\max\left(0,1+s\right)$. It has derivative 1 for $s>-1$, derivative 0 for $s<-1$, and subdifferential $[0,1]$ at $s=-1$.
6. Expand $(x+h)^{4}-(x-h)^{4}=8x^{3}h+8xh^{3}$. Dividing by $2h$ gives $4x^{3}+4xh^{2}$. Since $f'(x)=4x^{3}$, exact centered-difference error is $4xh^{2}$ in exact arithmetic.
7. The centered difference is $[\sin\left(h\right)-\sin\left(-h\right)]/(2h)=\sin\left(h\right)/h$. Its expansion is $1-h^{2}/6+O(h^{4})$, while the exact derivative is 1; the leading error is $-h^{2}/6$.
8. One discrepancy is compatible with several causes. A step sweep reveals convergence order and the roundoff floor; branch-margin checks reveal nonsmoothness; exact cases and state replay isolate rule or randomness errors. One point has no pattern.
9. Naive relative error divides by zero and is infinite or undefined. The scaled denominator is $10^{-8}+10^{-5}\cdot 10^{-10}\approx 1.00001\cdot 10^{-8}$, so scaled error is about $0.01$, comfortably below 1. The absolute error is small at the declared scale.
10. The row products are $1\cdot 2+2\cdot (-1)=0$, $3\cdot 2+4\cdot (-1)=2$, and $5\cdot 2+6\cdot (-1)=4$, so $Jv=(0,2,4)$. Then $u^{\top}(Jv)=0+0-8=-8$. Also $u^{\top}J=(1,2)-2(5,6)=(-9,-10)$, and $(-9,-10)\cdot (2,-1)=-18+10=-8$.
11. For analytic code $f(z)=z^{2}$, $\operatorname{Im}[(x+ih)^{2}]/h=2x$ exactly. A program $f(z)=\lvert z\rvert^{2}$ returns a real value, so its imaginary part is zero even though the corresponding real function $x^{2}$ has derivative $2x$; absolute value is not complex analytic.
12. At $x=0$, steps below 2 stay in the flat region and the centered difference is 0. At $x=3$, steps below 1 stay in the positive affine region and give 1. At $x=2$, the positive side has slope 1 and the interior side slope 0, so centered differences give $\frac{1}{2}$; the map is not classically differentiable there.
13. Duplicate one fixed case $b$ times. If the declared loss is a mean, its value and parameter gradient must equal the one-case result exactly (up to arithmetic), regardless of $b$. A sum implementation scales both by $b$, exposing the reduction bug with a deterministic invariant.
14. First freeze parameters/data and replay to confirm nondeterminism; then expose the dropout mask as explicit input and reuse it for autodiff and all finite-difference calls; sweep steps away from other kinks; finally test several fixed masks and the no-dropout path. A pass supports the pathwise derivative for those fixed traces. It does not justify differentiating an expectation through randomness or prove population performance.
15. At the tie, the subdifferential is the convex hull of active slopes $e_{1},e_{2}$, namely $\{(\alpha,1-\alpha)\colon 0\le \alpha\le 1\}$. Maximizing $\alpha v_{1}+(1-\alpha)v_{2}$ over the interval selects $v_{1}$ or $v_{2}$, so the maximum is $\max\left(v_{1},v_{2}\right)$, exactly the one-sided directional derivative. The support-function relation is convex, not a claim of classical differentiability.
16. Differentiate the bound: $2Ah-B \epsilon/h^{2}=0$, so $h^{\star}=(B \epsilon/(2A))^{\frac{1}{3}}$. The optimal scale depends on local third-derivative/truncation information hidden in $A$, arithmetic and evaluation noise hidden in $B \epsilon$, and parameter units. Since these are rarely known accurately, a geometric sweep is evidence about the error curve while one universal $h$ is not.

## Verification record and forward link

For each checked function, retain the mathematical formula or specification, input and output shapes, dtype, point, directions, branch margins, random and mutable state, automatic result, finite-difference sweep, exact invariants, tolerances, and final classification: pass, fail, nonsmooth boundary, invalid domain, nonfinite evaluation, or inconclusive numerical scale.

With this chapter, Parts I–II form a continuous route from task contract through finite objectives, derivatives, forward and reverse program transformations, and verification. Chapter 10 uses only derivatives that have survived this contract when proving descent guarantees.
