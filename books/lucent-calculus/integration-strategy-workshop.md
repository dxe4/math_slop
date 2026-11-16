# Calculus II workshop. Choose, decompose, and verify an integral

**Place in the route:** after the first integration-techniques lesson and the rigorous logarithm/exponential bridge. The aim is method selection under genuine ambiguity, including rational functions whose denominator has repeated factors. Allow two recitations and one independent problem session.

**Outcomes:** justify a method before computing; decompose repeated linear and irreducible quadratic factors; retain domains and endpoint conditions; verify an antiderivative by differentiation; recognize a divergent integral despite a convenient symbolic formula.

## A decision process instead of a bag of tricks

Begin with three questions. Is this a proper integral of a continuous function on its stated interval? Does an algebraic simplification reveal a derivative of an inner expression? If neither helps, what structure remains after polynomial division? A rational integrand invites partial fractions; a product where one factor simplifies on differentiation invites parts; trig powers invite parity identities. Record the reason for the choice. For example, \(\int x\cos(x^2)\,dx\) has the inner derivative \(2x\), while \(\int x\cos x\,dx\) needs parts because differentiation of \(x\) reduces its degree.

An antiderivative is always local to an interval on which the integrand is defined. A formula that differentiates correctly on \((1,\infty)\) cannot evaluate an ordinary integral starting below and ending above a pole at \(x=1\). Before using the FTC at endpoints, check that its continuity hypothesis applies throughout the closed interval.

## Repeated linear and irreducible quadratic factors

If a proper real rational function has denominator \((x-a)^m(x^2+bx+c)^k\), where \(b^2-4c<0\), the decomposition needs every linear power \((x-a)^{-j}\) for \(1\le j\le m\), and a separate linear numerator over each quadratic power. Leaving out one slot can make the coefficient equations impossible. Polynomial division precedes this step whenever numerator degree is at least denominator degree.

Consider

\[
R(x)=\frac{x+1}{(x-1)^2(x^2+1)},\qquad x\ne1.
\]

Write \(R=A/(x-1)+B/(x-1)^2+(Cx+D)/(x^2+1)\). Multiplication by the full denominator gives

\[
x+1=A(x-1)(x^2+1)+B(x^2+1)+(Cx+D)(x-1)^2.
\]

At \(x=1\), \(B=1\). Comparing cubic, quadratic, and linear coefficients gives \(C=-A\), \(A+B+D=0\), and \(-2D=1\). Thus \(A=-1/2\), \(C=1/2\), and \(D=-1/2\). The resulting antiderivative is

\[
F(x)=-\tfrac12\ln|x-1|-\frac{1}{x-1}
       +\tfrac14\ln(1+x^2)-\tfrac12\arctan x+C.
\]

The terms have four different derivative patterns: logarithm for the simple linear factor, reciprocal for the repeated linear factor, logarithm for the quadratic's derivative numerator, and arctangent for the remaining constant numerator. Different constants of integration may be chosen on \(( -\infty,1)\) and \((1,\infty)\). Verify by differentiating each term and combining over a common denominator; the coefficient identity above is an exact cross-check.

The repeated *quadratic* pattern requires care too. The identity

\[
\frac{1}{(1+x^2)^2}
=\frac12\frac{1}{1+x^2}
 +\frac12\frac{1-x^2}{(1+x^2)^2}
\]

uses the derivative \([x/(1+x^2)]'=(1-x^2)/(1+x^2)^2\). Therefore

\[
\int\frac{dx}{(1+x^2)^2}
=\frac12\arctan x+\frac{x}{2(1+x^2)}+C.
\]

This reduction is useful after a repeated quadratic decomposition. The arctangent term does not arise by pretending that \((1+x^2)^2\) is a new quadratic with the same primitive.

```notebook
fn density(x) = (x+1)/((x-1)^2*(x^2+1));
fn primitive(x) = -ln(abs(x-1))/2-1/(x-1)+ln(1+x^2)/4-atan(x)/2;
show density(0.25);
show (primitive(0.25001)-primitive(0.24999))/0.00002;
integrate density from 0 to 0.5 count 200 as finite_estimate;
show finite_estimate;
```

The central difference at one point is only an approximate check; the coefficient identity and derivative rules establish equality throughout either domain interval. The finite midpoint estimate is valid as an estimate on \([0,1/2]\), where the integrand is continuous. The language deliberately has no symbolic rule for \(\arctan\) or \(\operatorname{abs}\), so use the paper derivation for the general claim.

## A false answer exposed by endpoint analysis

What about \(\int_0^2R(x)\,dx\)? The formula \(F(2)-F(0)\) is tempting, but \(R\) is undefined at \(x=1\). Since \(x+1\) and \(x^2+1\) approach 2 there, \(R(x)\sim1/(x-1)^2\). On a sufficiently small punctured neighbourhood, \(R(x)\ge c/(x-1)^2\) for some \(c>0\), and both one-sided improper integrals diverge to \(+\infty\). Even if a formal endpoint subtraction were finite, it could not define this integral. A single midpoint sum might miss the pole; increasing its count does not settle convergence.

**Predict and inspect:** a naive midpoint spreadsheet for \(1/x\) on \([-1,1]\) with an even number of cells can cancel symmetric samples and report zero. Try the corresponding notebook integration command. If the kernel detects the interior pole, it rejects the request; its rejection is useful domain feedback. A finite sampler cannot detect every singularity, so the ordinary improper integral still requires separate limits on both sides, both of which diverge. Numerical cancellation cannot override that definition.

## Two methods can both be right, with different costs

For \(I=\int_0^1 x\arctan x\,dx\), substitution does not simplify the product: the derivative of \(\arctan x\) lacks a factor \(x\). Parts with \(u=\arctan x\), \(dv=x\,dx\) gives

\[
I=\left[\frac{x^2}{2}\arctan x\right]_0^1
-\frac12\int_0^1\frac{x^2}{1+x^2}\,dx.
\]

Divide \(x^2/(1+x^2)=1-1/(1+x^2)\). The result is \(I=\pi/8-(1/2)(1-\pi/4)=\pi/4-1/2\). Before calculation, \(0\le x\arctan x\le(\pi/4)x\) gives \(0\le I\le\pi/8\), consistent with the answer. This check would catch a dropped boundary term. A numerical midpoint calculation could validate decimals but does not prove the exact formula.

For \(J=\int_0^{\pi/2}\sin^2x\cos^2x\,dx\), both powers are even. The double-angle identity \(\sin^2x\cos^2x=\sin^2(2x)/4=(1-\cos4x)/8\) gives \(J=\pi/16\). Attempting \(u=\sin x\) immediately leaves a square root from the remaining cosine; the identity is shorter. Method choice affects clarity even when both routes eventually work.

## Practice: decide before opening a hint

1. Decompose and integrate \((3x+1)/[(x-2)(x^2+1)]\). Give domain intervals and verify by differentiation.
2. Integrate \(1/(1+x^2)^2\) directly by the identity above, then derive an alternative using \(x=\tan\theta\) with the correct inverse branch.
3. Determine whether \(\int_{-1}^1 x/(x^2+1)\,dx\), \(\int_{-1}^1 1/x\,dx\), and \(\int_0^1 1/\sqrt x\,dx\) exist as ordinary or improper integrals. Give all values that exist and separate the one-sided limits when needed.
4. Evaluate \(\int_0^1 x\ln(1+x^2)\,dx\) by substitution followed by parts. State why no inverse branch is needed.
5. Find the first missing term in the proposed decomposition \(1/[(x-1)^2(x^2+1)]=A/(x-1)^2+B/(x^2+1)\). Why is testing a few numerical \(x\) values insufficient to justify it?
6. A function \(f\) is continuous on \([0,2]\), but no elementary antiderivative is known. A peer concludes its integral does not exist. Explain the logical error and name what additional assumptions a midpoint error guarantee would require.

```exercise
{"id":"calc-strategy-pole","type":"choice","prompt":"A naive even midpoint sum of \\(1/x\\) on \\([-1,1]\\) is nearly zero. Which conclusion is justified?","options":[{"label":"The ordinary improper integral is zero.","correct":false,"feedback":"Separate the integrals at zero. Each one-sided logarithmic limit diverges; cancellation of a finite sum does not define an improper integral."},{"label":"The finite sampled sum nearly cancels, while the improper integral fails to exist.","correct":true,"feedback":"Correct. The sampled arithmetic and the endpoint-limit definition answer different questions."},{"label":"The function is integrable because odd functions always integrate to zero.","correct":false,"feedback":"The odd-function symmetry rule for ordinary integrals needs integrability on the interval; 1/x has a pole."}],"hints":["Write the left and right one-sided improper integrals as separate limits."]}
```

<details><summary>Worked solutions to the six problems</summary>

1. Write \((3x+1)/[(x-2)(x^2+1)]=A/(x-2)+(Bx+C)/(x^2+1)\). At \(x=2\), \(7=5A\), so \(A=7/5\). Comparing coefficients gives \(B=-7/5\), \(C=1/5\). Thus an antiderivative is \((7/5)\ln|x-2|-(7/10)\ln(1+x^2)+(1/5)\arctan x+C\), separately on \(( -\infty,2)\) and \((2,\infty)\). The coefficient identity is \(3x+1=(7/5)(x^2+1)+(-7x/5+1/5)(x-2)\); it verifies all coefficients. 
2. The identity yields \(\frac12\arctan x+x/[2(1+x^2)]+C\). For \(x=\tan\theta\), choose \(\theta=\arctan x\in(-\pi/2,\pi/2)\). Then \(dx=\sec^2\theta\,d\theta\), and the integrand becomes \(\cos^2\theta\,d\theta\). Its integral \(\theta/2+\sin(2\theta)/4\) becomes the same expression because \(\sin(2\theta)=2x/(1+x^2)\).
3. The first integral is ordinary and zero by odd symmetry; its denominator never vanishes. The second has no ordinary integral and no improper integral: \(\int_{-1}^{-\varepsilon}dx/x=\ln\varepsilon\to-\infty\), while \(\int_{\varepsilon}^1dx/x=-\ln\varepsilon\to+\infty\). A principal-value cancellation is a different construction. The third is improper at zero but converges: \(\lim_{\varepsilon\downarrow0}[2\sqrt x]_{\varepsilon}^1=2\).
4. Let \(u=1+x^2\), giving \(\frac12\int_1^2\ln u\,du\). Parts gives \(\frac12[u\ln u-u]_1^2=\ln2-1/2\). The direct substitution uses the derivative \(2x\) and never solves \(x\) as a function of \(u\).
5. The simple \(A/(x-1)\) slot is missing, as is the linear numerator \((Cx+D)/(x^2+1)\) in place of a lone constant numerator. Multiplying the proposed two-term form and comparing polynomial coefficients would show inconsistency. Agreement at finitely many inputs cannot prove a rational identity over an interval.
6. Continuity on the compact interval guarantees Riemann integrability. An antiderivative need not have an elementary expression to exist as the accumulation function \(F(x)=\int_0^xf(t)dt\). A composite-midpoint guarantee of order \(n^{-2}\) requires a uniform bound on \(|f''|\) on the interval, along with appropriate twice-continuous differentiability; continuity alone gives convergence but not that specific bound.

</details>

**Later retrieval:** On an unfamiliar rational integrand, write the denominator factorisation and all required numerator slots before solving any coefficients. Then decide whether a requested definite integral crosses an excluded point.
