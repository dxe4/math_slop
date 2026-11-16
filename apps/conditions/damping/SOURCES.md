# Damping and parameter limits: proofs, sources and scope

Sources inspected 20 October 2026. The integral identities below are classical.
The exact certificate exercises and their comparison with separate parameter
questions are this lesson's teaching arrangement, not claims of new theorems or
measured learning effects. The [pre-implementation mathematical review](docs/proposal-math-review.md)
records the overlap audit and source bindings before the product existed.

## Positive damping permits an elementary differentiation proof

For real a and positive s define

\[
F(a,s)=\int_0^\infty e^{-sx}\frac{\sin(ax)}x\,dx.
\]

The integrand has the removable value a at x=0. Since |sin(ax)|/x≤|a| for
x>0, the absolute integral is bounded by |a|/s. This bound proves absolute
convergence for s>0; it is not an estimate for the undamped absolute integral.

FTC and the inequality |cos u−cos v|≤|u−v| give, for real h and x≥0,

\[
|\sin((a+h)x)-\sin(ax)-hx\cos(ax)|\le h^2x^2/2.
\]

For h≠0, linearity of the absolutely convergent integrals therefore gives

\[
\left|\frac{F(a+h,s)-F(a,s)}h
-\int_0^\infty e^{-sx}\cos(ax)\,dx\right|
\le\frac{|h|}{2}\int_0^\infty xe^{-sx}\,dx
=\frac{|h|}{2s^2}.
\]

Let h tend to zero with s fixed. Elementary integration of the damped cosine
gives ∂F/∂a=s/(s²+a²). The initial condition F(0,s)=0 and FTC in the real
parameter a yield F(a,s)=arctan(a/s). The arctangent here takes real values
between −π/2 and π/2. This proof needs no complex branch convention.

The derivative estimate is common to all real a for each fixed s>0. Its
deterioration as s decreases only limits that certificate; a failed sufficient
bound is not a proof that an interchange fails.

## Signed tails justify removing damping at a fixed frequency

Let a≠0, R>0 and s≥0. The function q(x)=e^(−sx)/x decreases to zero on
[R,∞), with total variation q(R). Integration by parts against sin(ax) gives

\[
\left|\int_R^\infty e^{-sx}\frac{\sin(ax)}x\,dx\right|
\le\frac{2e^{-sR}}{|a|R}\le\frac2{|a|R}.
\]

The same calculation first establishes convergence with finite cutoffs and
then bounds the limiting tail. Its last bound is uniform over s≥0 for a
fixed nonzero a. It is also common over |a|≥α for any specified α>0.

At s=0 absolute convergence fails when a≠0: substituting t=|a|x reduces the
question to |sin t|/t. On [kπ,(k+1)π] its integral is at least
2/((k+1)π). These lower bounds have a divergent harmonic sum. Signed
cancellation proves an ordinary improper integral, not a finite Lebesgue
integral of the absolute value and not a Cauchy principal value.

On a finite window, 0≤1−e^(−sx)≤sx and |sin(ax)|≤1 imply

\[
\left|\int_0^R(1-e^{-sx})\frac{\sin(ax)}x\,dx\right|\le sR.
\]

Combining this window bound with two separate tail bounds yields

\[
|F(a,s)-J(a)|\le sR+\frac4{|a|R},\qquad
J(a)=\int_0^\infty\frac{\sin(ax)}x\,dx.
\]

First choose R large to control the tails, then s small for the window.
This proves the Abel removal step and gives J(a)=π sign(a)/2 for a≠0;
directly J(0)=0. For a=0 the difference is zero without dividing by a.
When s=0 the boundary integral already equals J(a); that is a direct equality,
not an application of arctan(a/s) at an undefined quotient.

The default uses a=1/2, s=1/10000 and R=200. Its window bound is 1/50;
its combined tail bound is 1/25; their sum is 3/50<1/10. The sum bounds
the error conservatively. It is not the actual error. Separately, h=1/10^10
gives a derivative-quotient remainder bound of 1/200. The checker keeps both
strict (<ε) and non-strict (≤ε) comparisons distinct.

## Joint limits and differentiation ask further questions

Writing s=t>0, the paths a=0 and a=t have F values zero and π/4.
Thus no joint origin limit exists. Even restricting to a>0, the paths a=t
and a=t² have limits π/4 and zero. The two positive one-sided iterated
limits are zero when a tends to zero first and π/2 when s does so first.
If both signs of a are allowed, J has a two-sided jump at zero.

The path a=s² also proves that damping removal is not uniform near zero:
F(s²,s)=arctan(s) tends to zero while J(s²)=π/2. This is a separate
nonuniformity argument; merely observing the factor 1/|a| in a bound would
not prove nonuniformity.

Differentiating the undamped integrand formally gives cos(ax). Its ordinary
cutoff integral is sin(aR)/a for a≠0, and R for a=0. Neither has a finite
limit. For positive a, the cutoffs (π/2+2πn)/a and (3π/2+2πn)/a
give opposite values ±1/a. Thus the ordinary derivative integral diverges.
Although J is locally constant away from zero and the damped derivative
s/(s²+a²) tends to zero there, that agreement does not validate the
ordinary improper interchange. A regularized value would answer another
question.

## Changed written task: absolute convergence and a cusp

The changed kernel is outside the controls:

\[
G(a,s)=\int_0^\infty e^{-sx}\frac{1-\cos(ax)}{x^2}\,dx,
\qquad a\in\mathbb R,\ s\ge0.
\]

The estimate 0≤1−cos y≤min(y²/2,2) follows from the cosine identity and
|sin y|≤|y|. Consequently the nonnegative integrand is at most
min(a²/2,2/x²), an integrable function. For a≠0, splitting at 2/|a|
integrates this envelope to 2|a|. At a=0 the integrand is zero. Therefore
0≤G(a,s)≤2|a| proves a joint origin limit of zero for s≥0.

At s=0, integration by parts on [r,R] gives

\[
\int_r^R\frac{1-\cos(ax)}{x^2}\,dx
=\left[-\frac{1-\cos(ax)}x\right]_r^R
+a\int_r^R\frac{\sin(ax)}x\,dx.
\]

The two boundary terms tend to zero: their magnitudes are at most 2/R
and a²r/2. Thus G(a,0)=aJ(a)=π|a|/2. In particular its right and left
a-derivatives at zero are π/2 and −π/2, despite the pointwise a-derivative
of the integrand there being zero for every x>0. Absolute integrability
and continuity do not by themselves authorize differentiation.

An optional measure-theory route uses min(A²/2,2/x²) as a common integrable
dominator when |a|≤A and s≥0. DCT proves joint continuity, including at
the boundary. A derivative needs its own dominator or another proof.

## Imported sources and computation semantics

[Keith Conrad, Differentiating under the Integral Sign](https://kconrad.math.uconn.edu/blurbs/analysis/diffunderint.pdf)
treats the classical damped sine integral in Section 3, printed pages 3–4.
Theorem 12.3 on printed page 16 states a sufficient parameter-differentiation
theorem with integrable bounds independent of the parameter in a neighborhood.
Appendix A, printed pages 26–29, justifies removing damping. Remark A.1 on
printed page 29 records the cosine-cancellation identity. Its nearby prose
appears to contain a cos(0)=0 typo; the correct value is cos(0)=1, and the
identity here is established independently by the bounds and integration by
parts above. Neither classical identity is claimed as original.

[NIST DLMF 6.2.9 and 6.2.14](https://dlmf.nist.gov/6.2) define the sine
integral and give its positive-infinity limit π/2. This is an independent
reference for the undamped value, not a substitute for the parameter-uniform
tail argument required here.

[Jirí Lebl, Basic Analysis, Section 9.1](https://www.jirka.org/ra/html/sec_diffunderint.html)
states and proves a finite-rectangle Leibniz rule. Its compact-domain theorem
must not silently be applied on an infinite interval. The explicit remainder
estimate above supplies this lesson's infinite-domain justification.

[Wolfram Integrate documentation](https://reference.wolfram.com/language/ref/Integrate.html)
supports local Assumptions and GenerateConditions; its examples distinguish
parameter conditions that ensure convergence from tests of additional cases.
Suppressing conditions does not make a divergent case convergent.
[LaplaceTransform documentation](https://reference.wolfram.com/language/ref/LaplaceTransform.html)
documents its Assumptions option and its GenerateConditions default of False.
The optional companion explicitly requests conditions and restricts the main
calculation to real a and positive s.

[Wolfram Limit documentation](https://reference.wolfram.com/language/ref/Limit.html)
distinguishes nested limits using a list of rules from simultaneous limits
using a vector rule. List order must not be guessed. This lesson's native
companion uses explicit nested calls, with the inner operation clearly named,
and explicit approaches from above. Paths establish joint nonexistence
independently of a software representation of that conclusion.

The [Wolfram source](damping.wl) has not been executed here. A future native
run should retain $Version, inputs, labeled results and messages. Expected
mathematical statements do not constitute executed CAS output.

## Implementation and teaching boundaries

The model reuses the unchanged parent exact rational operations. Its bounded
parser admits integers, fractions and finite decimals, not arbitrary symbolic
expressions. Error-budget decisions use integer arithmetic. An arctangent of
an exact rational is displayed symbolically; optional decimal angles are
explicitly approximate and never decide certificates or limit existence.
Large finite ratios can round visually to a limiting angle.

Diagrams illustrate authored paths and proved inequalities. They are not
sampled proofs or numerical quadrature certificates. The changed G task is
written only. The source, model and browser checks examine implementation;
the estimates and case arguments prove the stated claims. No learner study,
human assistive-technology evaluation or teaching-effectiveness result is
claimed.


## Exact-input and intermediate resource bounds

Write B=10^120. Each admitted normalized numerator and denominator has magnitude
less than B. Canonical input text has at most 242 characters, so the 256-character
raw limit admits saved canonical values and the reciprocal-root round trip.
For this fixed authored family, intermediate integer magnitudes are bounded by
6B^5, which has at most 601 decimal digits. For nonzero a and positive s,
B^-2 < |a/s| < B^2. The optional binary64 ratio is therefore finite and nonzero
before atan; rounded decorative angles still do not decide exact certificates.
These bounds concern this model, not arbitrary symbolic expressions or quadrature.
