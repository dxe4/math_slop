var e=`---
parent_id: book-complex-analysis
chapter_id: real-integrals-residues
title: Real integrals by residues
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Real integrals by residues

A contour computation begins with a finite closed path, whereas a real improper integral is a limit along an unbounded interval. The residue theorem connects pieces of a finite contour. Estimates justify discarding some pieces and identifying the limit of the others. Keeping these two stages separate prevents several familiar mistakes: assuming every large semicircle vanishes, confusing a principal value with an ordinary integral, and losing a sign at an indentation.

Preparation is [The residue theorem](residue-theorem.md), [Exponential, logarithm, and powers](exponential-logarithm-powers.md), and real improper integration. The [residue laboratory](../../visual-labs/complex-residues-live.md) can help visualize poles and contours. Its numerical pictures illustrate finite computations; the estimates in this chapter establish the limiting identities.

## Choosing a contour to match convergence
<a id="real-integral-contour-estimates"></a>

**Definition 11.1 (Improper integral and principal value).** The ordinary integral over the real line is the sum of the two separately existing limits over ((-infty,0]) and ([0,infty)). Its symmetric principal value is the limit of integrals over ([-R,R]). The latter can exist when the former does not. At a finite singularity \\(a\\), a principal value removes equal intervals on either side of \\(a\\), with the remaining endpoints otherwise fixed or separately controlled.

For example, the symmetric integral of the odd function \\(x/(1+x^2)\\) is zero for every radius, but its two one-sided integrals diverge logarithmically. Calling zero its ordinary improper integral would therefore be false. A contour using symmetric endpoints naturally supplies a principal value unless independent estimates establish the separate limits. Absolute convergence is often the cleanest way to do so.

**Proposition 11.2 (Rational semicircle estimate).** Let \\(R(z)=P(z)/Q(z)\\) be rational, with \\(\\deg Q\\ge\\deg P+2\\). On a sufficiently large upper or lower semicircle of radius \\(r\\),
\\[
\\left|\\int_{\\mathrm{arc}}R(z)\\,dz\\right|\\le C\\pi/r\\longrightarrow0.
\\]
Consequently, if \\(R\\) has no real poles, its real integral is absolutely convergent and equals \\(2\\pi i\\) times the sum of its upper-half-plane residues.

*Proof.* Comparing leading terms gives \\(|R(z)|\\le C/|z|^2\\) for all sufficiently large \\(|z|\\). Indeed the denominator's leading term dominates the sum of its lower terms outside one disk. Multiply this uniform estimate by the arc length \\(\\pi r\\). On the real axis the same bound controls both tails by \\(C/x^2\\); continuity away from poles controls every bounded interval. The positively oriented upper contour consists of the real segment from \\(-r\\) to \\(r\\), followed by the semicircle from \\(r\\) to \\(-r\\). Apply the residue theorem and pass to the limit. ∎

The degree assumption is sufficient rather than necessary. An exponential factor can make an arc vanish even when the rational part decays only as \\(1/z\\). Conversely, a bound that holds only along the real axis says nothing by itself about the arc. The function \\(e^{-z^2}\\), for example, grows rapidly on the positive imaginary axis. A contour must be selected using the complex behavior of the entire integrand.

## Exponential damping and Jordan's estimate
<a id="jordan-estimate"></a>

**Lemma 11.3 (Jordan estimate).** Suppose \\(t>0\\), and on all sufficiently large upper semicircles a function \\(g\\) satisfies \\(|g(z)|\\le C/|z|\\). Then
\\[
\\int_{\\mathrm{upper\\ arc}}e^{itz}g(z)\\,dz\\longrightarrow0.
\\]

*Proof.* Set \\(z=re^{i\\theta}\\), \\(0\\le\\theta\\le\\pi\\). The modulus of the exponential is \\(e^{-tr\\sin\\theta}\\). Therefore the modulus of the arc integral is at most
\\(C\\int_0^\\pi e^{-tr\\sin\\theta}\\,d\\theta\\).
Symmetry about \\(\\pi/2\\), and concavity of sine on the first quadrant, give \\(\\sin\\theta\\ge2\\theta/\\pi\\) for \\(0\\le\\theta\\le\\pi/2\\). The last expression is at most
\\[
2C\\int_0^{\\pi/2}e^{-2tr\\theta/\\pi}\\,d\\theta
\\le \\frac{C\\pi}{tr},
\\]
which tends to zero. ∎

For \\(t<0\\), the same proof applies in the lower half-plane. That contour is clockwise when its real segment still runs from left to right, so its residue sum receives a minus sign. For \\(t=0\\), the damping disappears and the lemma makes no assertion. Nor does it assert convergence of the real integral: the contour identity gives a symmetric limit if it exists through the right-hand side. Separate convergence may require a real-variable integration-by-parts estimate or absolute decay.

For a rational \\(g\\) with no real poles and \\(g(x)=O(1/x)\\), the oscillatory one-sided tails converge for nonzero \\(t\\). One direct proof decomposes \\(g(x)=c/x+O(x^{-2})\\), with derivative of the remainder controlled rationally, and integrates \\(e^{itx}/x\\) by parts on each tail. Its boundary term is \\(O(1/R)\\) and the remaining integral is bounded by a constant times \\(\\int_R^\\infty x^{-2}dx\\). Thus the contour's symmetric value is in this case also the sum of two ordinary conditionally convergent tails.

## Real poles and indentation
<a id="indentation-half-residue"></a>

**Proposition 11.4 (Upper indentation).** Suppose near a real point \\(a\\),
\\(f(z)=c/(z-a)+h(z)\\), with \\(h\\) holomorphic. Replace the real segment from \\(a-\\varepsilon\\) to \\(a+\\varepsilon\\) by the upper semicircle traversed from left to right. Its integral tends to \\(-i\\pi c\\).

*Proof.* The path is \\(z=a+\\varepsilon e^{i\\theta}\\), with \\(\\theta\\) decreasing from \\(\\pi\\) to zero. The pole term integrates exactly to \\(ic\\int_\\pi^0d\\theta=-i\\pi c\\). The holomorphic remainder is bounded on a fixed small closed disk, so its integral has modulus at most its bound times \\(\\pi\\varepsilon\\), which tends to zero. ∎

The sign is determined by traversal, not by the phrase “upper half.” Along an upper large semicircle the angle increases from zero to \\(\\pi\\); along an upper indentation in a left-to-right real path it decreases from \\(\\pi\\) to zero. The indentation excludes the pole from the enclosed region. It must therefore be excluded from that region's residue sum, even though its local coefficient appears in the indentation limit.

For finitely many simple real poles and an upper closure whose large arc vanishes, the resulting identity is
\\[
\\operatorname{PV}\\int_{-\\infty}^{\\infty}f(x)\\,dx
=2\\pi i\\sum_{\\operatorname{Im}a>0}\\operatorname{Res}(f,a)
+i\\pi\\sum_{a\\in\\mathbb R}\\operatorname{Res}(f,a),
\\]
provided the indicated real principal-value limit exists with those symmetric local removals. The proof is to apply the finite residue theorem with all indentation radii positive, let each shrink using Proposition 11.4, and then send the outer radius to infinity using the separately established estimate. Higher-order real poles need not have finite Cauchy principal values; a half-residue mnemonic does not repair their stronger divergences.

## Keyhole contours and branch changes
<a id="keyhole-power-integrals"></a>

**Theorem 11.5 (A power integral).** For real \\(0<\\alpha<1\\),
\\[
\\int_0^\\infty\\frac{x^{\\alpha-1}}{1+x}\\,dx=\\frac{\\pi}{\\sin\\pi\\alpha}.
\\]

*Proof.* Choose \\(z^{\\alpha-1}=\\exp((\\alpha-1)\\operatorname{Log} z)\\) with \\(0<\\arg z<2\\pi\\), cut along the positive axis. Use a keyhole contour with upper ray directed outward, outer circle counterclockwise, lower ray inward, and inner circle clockwise. Its only pole is \\(-1\\), with residue \\(e^{i\\pi(\\alpha-1)}\\). More precisely use rays at arguments \\(\\delta\\) and \\(2\\pi-\\delta\\), apply the theorem on that closed sector-annulus, and then let \\(\\delta\\downarrow0\\) for fixed positive inner and outer radii. Uniform continuity on those compact rays justifies this first limit.

The upper ray tends to the truncated real integral \\(I_{\\varepsilon,R}\\). The lower one contributes \\(-e^{2\\pi i(\\alpha-1)}I_{\\varepsilon,R}\\), including both the reversed direction and the branch factor. On the large circle the modulus of the integrand is at most \\(C R^{\\alpha-2}\\), so its integral is \\(O(R^{\\alpha-1})\\to0\\). On the small circle it is at most \\(C\\varepsilon^{\\alpha-1}\\), giving \\(O(\\varepsilon^\\alpha)\\to0\\). These are precisely where the strict inequalities on \\(\\alpha\\) enter. The real integral also converges absolutely because the endpoint powers are \\(x^{\\alpha-1}\\) and \\(x^{\\alpha-2}\\). Thus
\\[
(1-e^{2\\pi i\\alpha})I=2\\pi i e^{i\\pi(\\alpha-1)}.
\\]
Use \\(1-e^{2\\pi i\\alpha}=-2ie^{i\\pi\\alpha}\\sin\\pi\\alpha\\), and \\(e^{i\\pi(\\alpha-1)}=-e^{i\\pi\\alpha}\\), to obtain the stated value. ∎

The function on a keyhole contour is single-valued only after a branch domain is chosen. Writing an ordinary real power on both banks without tracking their arguments would erase the very factor that allows the contour to determine the integral. At integer exponents that factor can vanish, signaling that this particular equation no longer solves for the desired integral. One may then differentiate a parameter identity under justified domination, or choose an integrand containing a logarithm, but an algebraic division by zero is not a continuation argument.

## Worked examples

### Example 11.6: A quartic denominator

Evaluate \\(I=\\int_{-\\infty}^{\\infty}dx/(1+x^4)\\). Its integrand is \\(O(x^{-4})\\) and has no real poles, so Proposition 11.2 applies. The upper poles are \\(a=e^{i\\pi/4}\\) and \\(b=e^{3i\\pi/4}\\). At a root \\(r\\), the residue is \\(1/(4r^3)=-r/4\\), since \\(r^4=-1\\). Their sum is \\(-(a+b)/4=-i\\sqrt2/4\\). Therefore \\(I=2\\pi i(-i\\sqrt2/4)=\\pi/\\sqrt2\\). Evenness gives the half-line integral \\(\\pi/(2\\sqrt2)\\).

The large-arc estimate here is actually \\(O(R^{-3})\\). Either this sharper estimate or the weaker bound in the proposition suffices. Recording absolute convergence separately ensures that taking half the real-line integral is legitimate and is not merely a statement about symmetric truncations.

### Example 11.7: A Fourier integral

For \\(t>0\\), consider \\(J(t)=\\int_{-\\infty}^{\\infty}e^{itx}/(1+x^2)\\,dx\\). Absolute convergence follows from \\(1/(1+x^2)\\). In the upper half-plane there is one pole, \\(i\\), with residue \\(e^{-t}/(2i)\\). Jordan's estimate makes the arc vanish, giving \\(J(t)=\\pi e^{-t}\\). For \\(t<0\\), close below: the residue at \\(-i\\) is \\(e^t/(-2i)\\), and clockwise orientation gives \\(-2\\pi i\\) times that residue, again yielding \\(J(t)=\\pi e^{-|t|}\\).

At \\(t=0\\), the rational semicircle estimate gives \\(J(0)=\\pi\\). Taking real and imaginary parts is justified by absolute integrability; hence the cosine integral is \\(\\pi e^{-|t|}\\), and the sine integral is zero. The latter also follows from oddness. This is an example where two contour directions are required to establish a formula valid for both signs of a parameter.

### Example 11.8: The sine integral through an excluded real pole

Evaluate \\(\\int_0^\\infty\\sin x/x\\,dx\\). On an upper indented contour use \\(f(z)=e^{iz}/z\\). There are no poles inside because the indentation excludes zero. The large arc vanishes by Lemma 11.3. The upper small arc tends to \\(-i\\pi\\), since the residue at zero is one. Thus the real principal value equals \\(i\\pi\\).

Its imaginary part is the integral of the continuous extension of \\(\\sin x/x\\). Both real tails of this function converge by integration by parts, and it is even. Therefore twice the half-line integral is \\(\\pi\\), giving \\(\\pi/2\\). The real part, \\(\\cos x/x\\), has a singularity at zero and is interpreted only as a principal value; oddness makes that principal value zero. The complex principal value therefore does not mean that its real and imaginary parts are both ordinary integrals across zero.

## Exercises

### Exercise 11.1
<a id="real-integrals-residues-ex-1"></a>
For \\(a>0\\), compute \\(\\int_{-\\infty}^{\\infty}dx/(x^2+a^2)\\) by an upper semicircle.
<details><summary>Hint 1</summary>
Check tail convergence and locate the upper pole.
</details>
<details><summary>Hint 2</summary>
The denominator derivative at \\(ia\\) is \\(2ia\\).
</details>
<details><summary>Solution</summary>
The real tails are bounded by a constant times \\(x^{-2}\\), and the arc vanishes by the rational estimate. The residue at \\(ia\\) is \\(1/(2ia)\\). Multiplying by \\(2\\pi i\\) gives \\(\\pi/a\\).
</details>

### Exercise 11.2
<a id="real-integrals-residues-ex-2"></a>
For \\(a>0\\), evaluate \\(\\int_{-\\infty}^{\\infty}dx/(x^2+a^2)^2\\).
<details><summary>Hint 1</summary>
The upper pole has order two.
</details>
<details><summary>Hint 2</summary>
Differentiate \\((z+ia)^{-2}\\) at \\(ia\\).
</details>
<details><summary>Solution</summary>
The residue is \\(-2/(2ia)^3=1/(4ia^3)\\). The rational arc vanishes and the real integral converges absolutely, so its value is \\(2\\pi i/(4ia^3)=\\pi/(2a^3)\\).
</details>

### Exercise 11.3
<a id="real-integrals-residues-ex-3"></a>
Evaluate \\(\\int_{-\\infty}^{\\infty}\\cos(tx)/(x^2+a^2)\\,dx\\), for \\(a>0\\) and real \\(t\\).
<details><summary>Hint 1</summary>
Treat the exponential integral and choose the half-plane from the sign of \\(t\\).
</details>
<details><summary>Hint 2</summary>
At the upper pole the exponential has value \\(e^{-at}\\).
</details>
<details><summary>Solution</summary>
For \\(t>0\\), the residue of \\(e^{itz}/(z^2+a^2)\\) at \\(ia\\) is \\(e^{-at}/(2ia)\\). The integral is \\(\\pi e^{-at}/a\\). Closing below for \\(t<0\\), or replacing \\(t\\) by \\(-t\\) in the cosine, gives \\(\\pi e^{-a|t|}/a\\). The case zero follows from Exercise 11.1. Absolute convergence justifies taking real parts.
</details>

### Exercise 11.4
<a id="real-integrals-residues-ex-4"></a>
Explain why the estimate \\(|e^{-z^2}|\\le1\\) on the real axis cannot justify dropping an upper semicircle.
<details><summary>Hint 1</summary>
Evaluate the function at the highest point of the circle.
</details>
<details><summary>Hint 2</summary>
At \\(z=iR\\), the sign in the exponent reverses.
</details>
<details><summary>Solution</summary>
At \\(iR\\), the modulus is \\(e^{R^2}\\), not at most one. A real-axis bound is not uniform on the arc. This observation does not prove that every possible contour approach fails, but it disproves that proposed arc estimate.
</details>

### Exercise 11.5
<a id="real-integrals-residues-ex-5"></a>
Prove that the symmetric principal value of \\(x/(1+x^2)\\) over the line exists but its ordinary improper integral does not.
<details><summary>Hint 1</summary>
Use oddness for symmetric intervals.
</details>
<details><summary>Hint 2</summary>
Use \\(\\frac12\\log(1+x^2)\\) for each one-sided integral.
</details>
<details><summary>Solution</summary>
Each symmetric integral is zero, so the principal value is zero. The integral from zero to \\(R\\) equals \\(\\frac12\\log(1+R^2)\\), tending to positive infinity; the negative tail tends to negative infinity. The ordinary definition requires both to converge separately, so it fails.
</details>

### Exercise 11.6
<a id="real-integrals-residues-ex-6"></a>
Compute the limit of the lower small semicircle integral of \\(c/(z-a)\\), traversed from \\(a-\\varepsilon\\) to \\(a+\\varepsilon\\).
<details><summary>Hint 1</summary>
Choose an argument interval describing the actual direction.
</details>
<details><summary>Hint 2</summary>
In the lower half-plane the argument can increase from \\(-\\pi\\) to zero.
</details>
<details><summary>Solution</summary>
With \\(z=a+\\varepsilon e^{i\\theta}\\), \\(-\\pi\\le\\theta\\le0\\), the integral is \\(ic\\int_{-\\pi}^0d\\theta=i\\pi c\\). A bounded holomorphic remainder adds a term tending to zero. This is the opposite sign to the upper left-to-right indentation.
</details>

### Exercise 11.7
<a id="real-integrals-residues-ex-7"></a>
Show that \\(\\operatorname{PV}\\int_{-1}^1x^{-2}dx\\) is not finite.
<details><summary>Hint 1</summary>
Use equal removals around zero, as the definition requires.
</details>
<details><summary>Hint 2</summary>
The integrand is positive on both sides, so cancellation cannot occur.
</details>
<details><summary>Solution</summary>
The truncated sum is \\(2\\int_\\varepsilon^1x^{-2}dx=2/\\varepsilon-2\\), tending to positive infinity. A zero residue for \\(z^{-2}\\) therefore does not imply existence of a finite real principal value. The complete complex indentation has a divergent contribution which must also be retained.
</details>

### Exercise 11.8
<a id="real-integrals-residues-ex-8"></a>
Evaluate \\(\\int_0^\\infty x^{-1/2}/(1+x)\\,dx\\), specifying endpoint convergence.
<details><summary>Hint 1</summary>
Identify the exponent \\(\\alpha\\) in the keyhole theorem.
</details>
<details><summary>Hint 2</summary>
Near infinity the power becomes \\(x^{-3/2}\\).
</details>
<details><summary>Solution</summary>
Here \\(\\alpha=1/2\\). Near zero \\(x^{-1/2}\\) is integrable, and at infinity the integrand is bounded by \\(x^{-3/2}\\). The theorem yields \\(\\pi/\\sin(\\pi/2)=\\pi\\).
</details>

### Exercise 11.9
<a id="real-integrals-residues-ex-9"></a>
For \\(0<\\beta<2\\), evaluate \\(\\int_0^\\infty x^{\\beta-1}/(1+x^2)\\,dx\\).
<details><summary>Hint 1</summary>
Substitute \\(u=x^2\\) before introducing a new contour.
</details>
<details><summary>Hint 2</summary>
The resulting power parameter is \\(\\beta/2\\).
</details>
<details><summary>Solution</summary>
The substitution gives \\(\\frac12\\int_0^\\infty u^{\\beta/2-1}/(1+u)du\\). Since \\(0<\\beta/2<1\\), both endpoints converge and the keyhole theorem applies. The value is \\(\\pi/[2\\sin(\\pi\\beta/2)]\\).
</details>

### Exercise 11.10
<a id="real-integrals-residues-ex-10"></a>
For \\(t>0\\), explain why closing \\(e^{itz}/(1+z^2)\\) in the lower half-plane is an unsuitable vanishing-arc argument.
<details><summary>Hint 1</summary>
Write the modulus of the exponential in terms of the imaginary part.
</details>
<details><summary>Hint 2</summary>
At \\(-iR\\), the exponential has modulus \\(e^{tR}\\).
</details>
<details><summary>Solution</summary>
The modulus is \\(e^{-t\\operatorname{Im}z}\\), which grows below the real axis. Rational decay of order two cannot provide a uniform decaying modulus bound on that semicircle. The upper closure supplies exponential damping, which is the estimate used in the proof. The lower residue alone cannot determine the integral without its nonvanishing arc contribution.
</details>

### Exercise 11.11
<a id="real-integrals-residues-ex-11"></a>
Justify \\(0\\le x-\\sin x\\le x^3/6\\) for \\(x\\ge0\\), and explain how this kind of explicit inequality differs from simply declaring an arc small.
<details><summary>Hint 1</summary>
Write \\(x-\\sin x\\) as an integral of \\(1-\\cos u\\).
</details>
<details><summary>Hint 2</summary>
Use \\(1-\\cos u=2\\sin^2(u/2)\\le u^2/2\\).
</details>
<details><summary>Solution</summary>
Since \\(1-\\cos u\\ge0\\), integration from zero to \\(x\\) gives the lower bound. Its upper bound \\(u^2/2\\) integrates to \\(x^3/6\\). An explicit bound supplies a quantity tending to zero in a specified limit. An unsupported claim of smallness supplies neither a uniform estimate nor a limiting argument.
</details>

### Exercise 11.12
<a id="real-integrals-residues-ex-12"></a>
Using the proved sine integral, evaluate \\(\\int_0^\\infty\\sin(ax)/x\\,dx\\) for every real \\(a\\), with \\(a=0\\) interpreted directly.
<details><summary>Hint 1</summary>
For positive \\(a\\), substitute \\(u=ax\\) in finite truncations first.
</details>
<details><summary>Hint 2</summary>
Negative \\(a\\) changes the sign of sine.
</details>
<details><summary>Solution</summary>
For \\(a>0\\), substitution and passage to the convergent limit give \\(\\pi/2\\). For \\(a<0\\), oddness in the parameter gives \\(-\\pi/2\\). For \\(a=0\\) the integrand is identically zero. The resulting jump at zero shows why a limit in the parameter cannot be interchanged with the improper integral without an additional uniform domination argument.
</details>

## Worked example: a parameter and an ordinary real integral

For \\(a>0\\), consider \\(I(a)=\\int_{-\\infty}^{\\infty}dx/(x^2+a^2)\\). The real integrand is continuous and its tails are dominated by a constant times \\(x^{-2}\\), so this is an ordinary absolutely convergent improper integral. The poles of \\(F(z)=1/(z^2+a^2)\\) are \\(ia\\) and \\(-ia\\). On a sufficiently large upper semicircle the rational estimate makes the arc vanish; the enclosed residue at \\(ia\\) is \\(1/(2ia)\\). The residue theorem gives \\(I(a)=\\pi/a\\). This answer agrees with the real substitution \\(x=at\\), which yields \\(I(a)=a^{-1}I(1)\\). The contour determines the normalization \\(I(1)=\\pi\\), while scaling checks the parameter dependence independently.

If \\(a\\downarrow0\\), the formula diverges. This is consistent with the real integrand concentrating near zero: on \\([-a,a]\\), the integrand is at least \\(1/(2a^2)\\), giving area at least \\(1/a\\). The pole \\(ia\\) also approaches the real integration path, so there is no common pole-free strip in which a uniform contour estimate for all small \\(a\\) would apply. Passing to the limit \\(a=0\\) inside the integral would replace the integrand by \\(1/x^2\\), which is not integrable near zero. The parameter limit needs separate analysis.

## A contour for a rational integrand with an oscillatory factor

Consider \\(J(t)=\\int_{-\\infty}^{\\infty}e^{itx}/(x^2+1)\\,dx\\). Absolute convergence of the real integral follows from \\(|e^{itx}|=1\\) and \\((1+x^2)^{-1}\\in L^1(\\mathbb R)\\). For \\(t>0\\), the factor \\(|e^{itz}|=e^{-t\\operatorname{Im}z}\\) decays above the real axis; for \\(t<0\\), it decays below. The rational factor is \\(O(1/|z|^2)\\), so even the basic length estimate would make its large semicircle vanish when the exponential is bounded on the chosen half-plane. Jordan's lemma also applies, but its stronger mechanism is not needed for this particular denominator.

The orientation must still be tracked. When \\(t>0\\), the upper contour is counterclockwise and contains \\(i\\), yielding \\(\\pi e^{-t}\\). When \\(t<0\\), the real segment still runs left to right but the lower arc closes clockwise and contains \\(-i\\), yielding \\(\\pi e^t\\). At \\(t=0\\), either rational contour gives \\(\\pi\\). Hence \\(J(t)=\\pi e^{-|t|}\\) for every real \\(t\\). The cusp at zero is compatible with absolute convergence of \\(J\\): differentiation with respect to \\(t\\) would insert a factor \\(x\\), whose absolute integral against \\((1+x^2)^{-1}\\) diverges. Ordinary dominated differentiation therefore does not justify a derivative at zero.

## A small indentation and a finite pole

Take \\(f(z)=e^{iz}/z\\) and a small upper semicircle \\(z=\\varepsilon e^{i\\theta}\\) traversed from \\(-\\varepsilon\\) to \\(+\\varepsilon\\), so \\(\\theta\\) decreases from \\(\\pi\\) to zero. Write \\(e^{iz}/z=1/z+(e^{iz}-1)/z\\). The first term integrates to \\(-i\\pi\\). The second extends continuously to zero with value \\(i\\), and its integral has modulus at most a fixed bound times the arc length \\(\\pi\\varepsilon\\); it vanishes as \\(\\varepsilon\\to0\\). This decomposition proves the half-residue term without treating the excluded real pole as if it lay inside the contour.

The remaining real expression is a principal value of \\(e^{ix}/x\\), and its real and imaginary parts behave differently. The real part \\(\\cos x/x\\) has a nonintegrable singularity at zero, although its symmetric principal value cancels there. The imaginary part \\(\\sin x/x\\) extends continuously across zero. Its tails converge by integration by parts: for \\(R<S\\), integration of \\(\\sin x/x\\) on \\([R,S]\\) produces a boundary term of size at most \\(2/R\\) and a remaining integral bounded by \\(\\int_R^\\infty x^{-2}dx\\). Thus the imaginary part gives an ordinary improper integral, whereas the real part contributes only a principal value. Keeping these distinct is necessary when taking components of a complex contour identity.

## Why a keyhole needs both banks

For \\(0<\\alpha<1\\), the branch \\(z^{\\alpha-1}\\) with argument in \\((0,2\\pi)\\) has upper-bank limit \\(x^{\\alpha-1}\\) and lower-bank limit \\(e^{2\\pi i(\\alpha-1)}x^{\\alpha-1}\\) at a positive real \\(x\\). The lower bank is traversed toward the origin, so its contribution has the additional negative sign. The sum of the two straight pieces is therefore \\((1-e^{2\\pi i\\alpha})I_{\\varepsilon,R}\\), exactly the coefficient in the chapter's theorem. Forgetting either the branch multiplier or orientation would replace this coefficient with the wrong number, often zero.

The two circular pieces require different exponent conditions. Near zero the integrand is \\(O(\\varepsilon^{\\alpha-1})\\) and the arc length is \\(O(\\varepsilon)\\), producing \\(O(\\varepsilon^\\alpha)\\). At infinity the integrand is \\(O(R^{\\alpha-2})\\) and the arc length is \\(O(R)\\), producing \\(O(R^{\\alpha-1})\\). The first tends to zero only for \\(\\alpha>0\\), the second only for \\(\\alpha<1\\). These are the same endpoint conditions that make the real integral converge. The contour proof does more than return a formula: it explains the exact interval of parameters for which the formula is obtained by this argument.

## A real-variable check on contour output

For \\(a>0\\), the formula \\(I(a)=\\pi/a\\) can be checked without residues after the value at one is known: substitution \\(x=at\\) gives the scaling exactly. Differentiating the real integral with respect to \\(a\\) is also legitimate on a compact parameter interval bounded away from zero. The derivative integrand is \\(-2a/(x^2+a^2)^2\\), dominated by an integrable function there, so \\(I'(a)=-2a\\int_{-\\infty}^\\infty (x^2+a^2)^{-2}dx\\). Since \\(I'(a)=-\\pi/a^2\\), this yields \\(\\int_{-\\infty}^\\infty (x^2+a^2)^{-2}dx=\\pi/(2a^3)\\). It agrees with the order-two residue calculation in the exercises. The differentiation step needs the parameter interval away from zero; there is no common integrable domination as \\(a\\downarrow0\\).

This gives a useful check on powers of \\(a\\) and factors of two. A residue calculation may be algebraically correct while a contour orientation is reversed or a half-line conversion is mishandled. Positivity of the real integrand and the scaling law constrain the answer before any complex calculation begins. Such checks are independent mathematical arguments, not replacements for the contour hypotheses that produce the initial formula.

## When symmetry gives only a principal value

The function \\(x/(1+x^2)\\) is odd, so its integral from \\(-R\\) to \\(R\\) is exactly zero for every \\(R\\). Its positive one-sided primitive is \\(\\tfrac12\\log(1+x^2)\\), which tends to infinity; the negative one-sided integral diverges with the opposite sign. Thus the ordinary improper integral over the line does not exist even though the symmetric principal value does. A large semicircular contour whose real segment is \\([-R,R]\\) naturally produces the symmetric limit. To call the result an ordinary integral, one must separately establish each tail's convergence, as the rational decay proposition does for sufficiently high denominator degree.

For oscillatory factors, convergence may be conditional rather than absolute. Integration by parts supplies separate tail estimates for \\(e^{itx}/x\\) when \\(t\\ne0\\): the boundary term is of order \\(1/R\\), and the remaining integral is bounded by a constant times \\(\\int_R^\\infty x^{-2}dx\\). This real-variable argument is what upgrades a symmetric contour limit to separate one-sided convergence in the appropriate cases. Without it, a formally correct residue sum may answer a different question from the one stated.

## Sources

The contour arguments and exercises are original. Compare Jiří Lebl's author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/) for residue applications. The laboratory linked above is an optional visual companion; all limiting identities used here have their estimates supplied in the text.

## Summary

Residues evaluate finite closed contours. Arc bounds, indentation limits, branch factors, and real convergence turn those identities into improper integral formulas. Upper exponential damping requires a positive frequency; lower damping reverses both the half-plane and the contour orientation. A simple real pole contributes a signed indentation term, while a keyhole contour detects the change of branch across its cut. The next chapter applies the same contour machinery to count zeros rather than evaluate real integrals.
`;export{e as default};