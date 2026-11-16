var e=`---
parent_id: book-complex-analysis
chapter_id: harmonic-functions-poisson
title: Harmonic functions and the Poisson kernel
level: graduate
license: CC BY-SA 4.0
---

# Harmonic functions and the Poisson kernel

Holomorphic functions combine two real functions whose derivatives satisfy the Cauchy–Riemann equations. Each component satisfies a second-order equation of its own. That equation, the Laplace equation, describes equilibrium temperature, electrostatic potential in a charge-free region, and many other stationary fields. In a disk, its boundary-value problem has an explicit solution. The formula is not merely a plausible averaging rule: positivity, normalization, and concentration of its kernel prove that it attains every continuous boundary value.

Preparation: [Holomorphic functions and Cauchy–Riemann](holomorphic-cauchy-riemann.md), [Cauchy's integral formula](cauchy-integral-formula.md), and [Zeros, identity theorem, maximum modulus](zeros-identity-maximum-modulus.md). We use ordinary differentiation of smooth real functions, integration over compact intervals, and the extreme-value theorem. The boundary data in the Dirichlet theorem below are continuous real functions on the circle; discontinuous data need a different formulation of boundary attainment.

## From holomorphic to harmonic
<a id="harmonic-definition-conjugate"></a>

**Definition 13.1 (Harmonic function).** A real-valued function \\(u\\) on an open subset of the plane is harmonic if it is \\(C^2\\) and
\\[
\\Delta u=u_{xx}+u_{yy}=0.
\\]
A harmonic conjugate of \\(u\\) is a real function \\(v\\) such that \\(u+iv\\) is holomorphic. Adding a real constant to \\(v\\) gives another conjugate.

**Proposition 13.2 (Components and local conjugates).** Real and imaginary parts of a holomorphic function are harmonic. Conversely, a harmonic function on a simply connected domain has a harmonic conjugate there.

*Proof.* Holomorphic functions have convergent local power series, so their real components are smooth. If \\(u_x=v_y\\), \\(u_y=-v_x\\), differentiation gives \\(u_{xx}+u_{yy}=v_{yx}-v_{xy}=0\\); the corresponding calculation gives \\(\\Delta v=0\\).

For the converse set \\(g=u_x-iu_y\\). Its real and imaginary components are \\(C^1\\). The Cauchy–Riemann equations for them are \\(u_{xx}=-u_{yy}\\) and \\(u_{xy}=u_{yx}\\), both valid. Hence \\(g\\) is holomorphic. The simply connected primitive theorem gives a holomorphic \\(F\\) with \\(F'=g\\). Its real part has the same two partial derivatives as \\(u\\): \\((\\operatorname{Re}F)_x=\\operatorname{Re}g=u_x\\) and \\((\\operatorname{Re}F)_y=-\\operatorname{Im}g=u_y\\). Their difference is constant on the connected domain. Subtract that real constant from \\(F\\); its imaginary part is the required conjugate. ∎

Every sufficiently small disk is simply connected, so the converse supplies local conjugates on an arbitrary domain. Global conjugates can fail because of periods. The harmonic function \\(\\log|z|\\) on the punctured plane would need an angle as its conjugate. Its associated holomorphic derivative is \\(1/z\\), whose nonzero circular integral prevents a global primitive. Thus local differential compatibility and global single-valuedness are distinct issues.

The proof has an additional regularity consequence: a \\(C^2\\) harmonic function is locally the real part of a holomorphic function, and is therefore smooth and real analytic. This conclusion is derived from the equation through a conjugate; it is not assumed in the definition. It permits the mean-value and derivative calculations that follow without silently strengthening the initial hypothesis.

## Mean values and the maximum principle
<a id="harmonic-mean-value"></a>

**Theorem 13.3 (Mean-value property).** If \\(u\\) is harmonic on a neighborhood of a closed disk centered at \\(a\\), then for every legal radius \\(r\\),
\\[
u(a)=\\frac1{2\\pi}\\int_0^{2\\pi}u(a+re^{it})\\,dt.
\\]
It is also the average of \\(u\\) over that disk with respect to area.

*Proof.* On a slightly larger disk, choose a holomorphic function with real part \\(u\\). Cauchy's formula at its center gives the circular average of that function; take real parts. For the area average, multiply the circular identity by \\(2r/R^2\\) and integrate \\(r\\) from zero to \\(R\\). Polar coordinates give the normalized area integral. Continuity handles the central point, which has area zero. ∎

**Theorem 13.4 (Strong maximum principle and boundary uniqueness).** A harmonic function on a connected domain which attains an interior maximum is constant. The same holds for a minimum. Consequently, if \\(D\\) is bounded and \\(u\\) is harmonic on \\(D\\), continuous on \\(\\overline D\\), then its maximum and minimum occur on \\(\\partial D\\); two such functions with equal boundary values are equal.

*Proof.* Suppose the interior maximum is \\(M\\), attained at \\(a\\). Every sufficiently small circle centered at \\(a\\) has average \\(M\\), while all its values are at most \\(M\\). Continuity forces all values on that circle to equal \\(M\\): a strictly smaller value would make the average smaller. Varying the radius shows that \\(u=M\\) on a neighborhood of \\(a\\). The set \\({u=M}\\) is both relatively open, by this argument at every one of its points, and relatively closed, by continuity. Connectedness makes it the entire domain. Apply this to \\(-u\\) for minima. On a compact closure the extreme-value theorem gives an attained maximum; if it exceeds the boundary maximum it must be interior and forces constancy, a contradiction. Apply the resulting bound to the difference of two boundary solutions and its negative for uniqueness. ∎

The boundedness and continuity assumptions in the boundary conclusion ensure actual extrema on a compact closure. They are not dispensable decorations. On an unbounded domain a function can grow without attaining any maximum, and boundary values alone need not control behavior at infinity. On a disk, however, the conclusion gives a stable boundary-value problem: changing boundary values by at most \\(\\varepsilon\\) changes the solution everywhere by at most \\(\\varepsilon\\).

## Constructing the Poisson kernel
<a id="poisson-kernel-properties"></a>

For \\(0\\le r<1\\), define
\\[
P_r(\\theta)=\\frac{1-r^2}{1-2r\\cos\\theta+r^2}.
\\]
The denominator is \\(|e^{i\\theta}-r|^2>0\\), so this kernel is positive. It becomes sharply concentrated around zero as \\(r\\uparrow1\\).

**Proposition 13.5 (Normalization and concentration).** The kernel has average one. For each fixed \\(\\delta\\in(0,\\pi]\\), its integral over \\(\\delta\\le|\\theta|\\le\\pi\\) tends to zero as \\(r\\uparrow1\\).

*Proof.* The geometric series gives, for each \\(r<1\\), the uniformly convergent expansion
\\[
P_r(\\theta)=\\operatorname{Re}\\frac{1+re^{i\\theta}}{1-re^{i\\theta}}
=1+2\\sum_{n\\ge1}r^n\\cos(n\\theta).
\\]
Integrating termwise over a full period leaves just the constant term. For concentration, the denominator is
\\((1-r)^2+2r(1-\\cos\\theta)\\).
For \\(r\\ge1/2\\) and \\(\\delta\\le|\\theta|\\le\\pi\\), it is at least \\(1-\\cos\\delta>0\\). Thus the kernel there is at most \\((1-r^2)/(1-\\cos\\delta)\\), uniformly tending to zero. Multiplication by the interval length proves the integral assertion. ∎

Normalization explains why constant boundary data stay constant. Positivity explains why a boundary range is preserved. Concentration explains why nearby boundary values dominate as one approaches the circle. None of these properties alone is enough: a positive normalized kernel could remain spread over the whole circle and fail to recover local boundary values.

## The disk Dirichlet theorem
<a id="disk-dirichlet-proof"></a>

**Theorem 13.6 (Poisson solution for continuous boundary data).** Let \\(g\\) be a continuous real function on the unit circle. For \\(z=re^{i\\theta}\\) in the open disk define
\\[
u(re^{i\\theta})=\\frac1{2\\pi}\\int_0^{2\\pi}P_r(\\theta-t)g(e^{it})\\,dt.
\\]
Then \\(u\\) is harmonic, extends continuously to the closed disk with boundary values \\(g\\), and is the unique function with these properties. Boundary convergence is uniform in the angular variable. Translation and scaling give the corresponding result on every finite-radius disk.

*Proof.* Consider
\\[
F(z)=\\frac1{2\\pi}\\int_0^{2\\pi}\\frac{e^{it}+z}{e^{it}-z}g(e^{it})\\,dt.
\\]
On every closed subdisk \\(|z|\\le r_0<1\\), the denominator is bounded below by \\(1-r_0\\). The rational integrand and all its \\(z\\)-derivatives are continuous and uniformly bounded there by constants times the bounded function \\(g\\). Difference quotients or its uniformly convergent geometric series show that \\(F\\) is holomorphic. Taking its real part gives the Poisson formula, so \\(u\\) is harmonic.

For boundary recovery subtract \\(g(e^{i\\theta})\\), using normalization:
\\[
u(re^{i\\theta})-g(e^{i\\theta})=
\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}P_r(s)
[g(e^{i(\\theta-s)})-g(e^{i\\theta})]ds.
\\]
Uniform continuity of \\(g\\) makes the bracket uniformly smaller than any chosen \\(\\varepsilon\\) whenever \\(|s|<\\delta\\). The integral over that interval is bounded by \\(\\varepsilon\\) because the kernel is positive and normalized. On the complement the bracket is at most \\(2\\|g\\|_\\infty\\), and concentration makes its integral tend to zero uniformly in \\(\\theta\\). Thus the supremum of the displayed difference tends to zero. Combining this with continuity of \\(g\\) proves continuity at every boundary point, including approaches with varying argument. Interior continuity follows from the integral formula. Uniqueness follows from Theorem 13.4. A similarity \\(z=a+Rw\\) preserves the Laplace equation up to the positive factor \\(R^{-2}\\), proving the final assertion. ∎

The proof gives a full solution rather than merely a formula that is harmonic inside. Boundary attainment is a separate essential step. It also gives the bound \\(|u|\\le\\|g\\|_\\infty\\), either by positivity or by the maximum principle. Continuous dependence on data follows by applying the same inequality to their difference.

A harmonic function already defined on a neighborhood of a closed disk agrees inside with the Poisson integral of its own boundary values: both solve the same Dirichlet problem and uniqueness identifies them. This is the Poisson representation theorem for such a function. No additional existence theorem is needed for that statement.

## Worked examples

### Example 13.7: A trigonometric boundary pattern

Take \\(g(e^{it})=3+2\\cos(2t)-\\sin(3t)\\). The functions \\(\\operatorname{Re}z^2\\) and \\(\\operatorname{Im}z^3\\) are harmonic and have the required modes on the unit circle. Therefore
\\[
u(re^{i\\theta})=3+2r^2\\cos(2\\theta)-r^3\\sin(3\\theta).
\\]
It is continuous on the closed disk and matches the data; uniqueness proves it is the Poisson solution. At the center it equals three, the boundary average. Higher-frequency modes decay faster toward the center, a concrete expression of smoothing by harmonic extension.

A conjugate is \\(\\operatorname{Im}(3+2z^2+iz^3)\\): the real part of \\(iz^3\\) is \\(-\\operatorname{Im}z^3\\), giving the stated sign. Checking a complex representation is a useful way to avoid confusing sine with cosine or choosing the wrong sign of a conjugate.

### Example 13.8: A local conjugate with a global obstruction

On the right half-plane let \\(u(x,y)=\\tfrac12\\log(x^2+y^2)\\). Its derivatives are \\(u_x=x/(x^2+y^2)\\) and \\(u_y=y/(x^2+y^2)\\). The function \\(v=\\arctan(y/x)\\) has \\(v_y=u_x\\) and \\(v_x=-u_y\\), so \\(u+iv\\) is a logarithm there.

The same \\(u\\) is harmonic on the whole punctured plane, but no global conjugate exists. If one did, its holomorphic derivative would be \\(1/z\\), and a closed-circle integral of that derivative would vanish. The actual value \\(2\\pi i\\) contradicts this. Harmonicity is local; the conjugate's single-valuedness is global.

### Example 13.9: Data uncertainty without solving again

Suppose \\(g_1,g_2\\) are continuous boundary temperatures with \\(|g_1-g_2|\\le0.02\\) everywhere. Their Poisson solutions satisfy
\\[
|u_1(z)-u_2(z)|\\le\\frac{0.02}{2\\pi}\\int_0^{2\\pi}P_r(t)dt=0.02.
\\]
Thus an interior discrepancy of (0.05) cannot be explained by the stated boundary uncertainty within the harmonic model. This is an exact stability estimate, independent of discretization or a numerical solver.

At the center the difference is the average boundary discrepancy, so positive and negative errors may cancel and yield a smaller value. The uniform bound makes no assumption of cancellation and remains valid for every point. If discontinuous data are supplied, the continuous-boundary theorem must first be replaced by an appropriate almost-everywhere or nontangential limit statement; the present example does not silently invoke such an extension.

## Exercises

### Exercise 13.1
<a id="harmonic-functions-poisson-ex-1"></a>
Show that \\(x^2-y^2+4xy\\) is harmonic and find a conjugate.
<details><summary>Hint 1</summary>
Recognize real and imaginary parts of \\(z^2\\).
</details>
<details><summary>Hint 2</summary>
The real part of \\((1-2i)z^2\\) is the given polynomial.
</details>
<details><summary>Solution</summary>
The second partials are two and minus two, so the Laplacian is zero. The imaginary part of \\((1-2i)z^2\\) is \\(2xy-2(x^2-y^2)\\), which is a conjugate. Adding any real constant preserves that property.
</details>

### Exercise 13.2
<a id="harmonic-functions-poisson-ex-2"></a>
Solve the unit-disk Dirichlet problem with boundary data \\(\\cos(4t)\\).
<details><summary>Hint 1</summary>
Use a holomorphic monomial with the prescribed boundary mode.
</details>
<details><summary>Hint 2</summary>
Its real part is \\(r^4\\cos(4\\theta)\\).
</details>
<details><summary>Solution</summary>
Set \\(u(z)=\\operatorname{Re}z^4\\). This is harmonic and continuous on the closure, with the required boundary values. The uniqueness theorem identifies it as the solution, namely \\(r^4\\cos(4\\theta)\\).
</details>

### Exercise 13.3
<a id="harmonic-functions-poisson-ex-3"></a>
Prove that a harmonic function continuous on a closed disk with zero boundary values is zero.
<details><summary>Hint 1</summary>
Apply the boundary maximum principle to the function.
</details>
<details><summary>Hint 2</summary>
Apply the same principle to its negative.
</details>
<details><summary>Solution</summary>
The first application gives \\(u\\le0\\) inside. Applied to \\(-u\\), it gives \\(-u\\le0\\), so \\(u\\ge0\\). Hence \\(u=0\\). This proves uniqueness without requiring an explicit kernel computation.
</details>

### Exercise 13.4
<a id="harmonic-functions-poisson-ex-4"></a>
Find the center value of the solution with data \\(g(e^{it})=e^{\\cos t}\\), without evaluating its integral in special-function notation.
<details><summary>Hint 1</summary>
At zero the Poisson kernel is constant.
</details>
<details><summary>Hint 2</summary>
The mean-value property supplies an exact integral expression.
</details>
<details><summary>Solution</summary>
The value is \\((2\\pi)^{-1}\\int_0^{2\\pi}e^{\\cos t}dt\\). This is an exact answer; no elementary antiderivative is required. Since the data range from \\(e^{-1}\\) to \\(e\\), the value lies between them, strictly because the data are nonconstant and the kernel is positive.
</details>

### Exercise 13.5
<a id="harmonic-functions-poisson-ex-5"></a>
Show that a nonnegative harmonic function which vanishes at one interior point is identically zero on its connected domain.
<details><summary>Hint 1</summary>
Zero is an attained minimum.
</details>
<details><summary>Hint 2</summary>
Use the strong maximum principle for the negative function.
</details>
<details><summary>Solution</summary>
The function \\(-u\\le0\\) attains its maximum zero at that point. The strong principle forces it to be constant, and its value there makes the constant zero. Thus \\(u=0\\) throughout the domain.
</details>

### Exercise 13.6
<a id="harmonic-functions-poisson-ex-6"></a>
Verify explicitly that \\(\\log|z|\\) is harmonic away from zero.
<details><summary>Hint 1</summary>
Write it as one half the logarithm of \\(x^2+y^2\\).
</details>
<details><summary>Hint 2</summary>
Its two pure second derivatives have opposite numerators.
</details>
<details><summary>Solution</summary>
One obtains \\(u_{xx}=(y^2-x^2)/(x^2+y^2)^2\\) and \\(u_{yy}=(x^2-y^2)/(x^2+y^2)^2\\). They sum to zero whenever the denominator is nonzero. The computation makes no claim at the origin, where the function is undefined.
</details>

### Exercise 13.7
<a id="harmonic-functions-poisson-ex-7"></a>
If two conjugates of the same harmonic function exist on a connected domain, prove that they differ by a constant.
<details><summary>Hint 1</summary>
Subtract their Cauchy–Riemann equations.
</details>
<details><summary>Hint 2</summary>
Both partial derivatives of the difference vanish.
</details>
<details><summary>Solution</summary>
For \\(v_1,v_2\\), the equations give \\((v_1-v_2)_x=0\\) and \\((v_1-v_2)_y=0\\). A function with zero gradient is constant along every piecewise smooth path. An open connected planar set is path connected by polygonal paths, so the constant is global.
</details>

### Exercise 13.8
<a id="harmonic-functions-poisson-ex-8"></a>
Derive the Poisson formula on the disk \\(|z-a|<R\\) from the unit-disk formula.
<details><summary>Hint 1</summary>
Use \\(w=(z-a)/R\\).
</details>
<details><summary>Hint 2</summary>
Boundary values become \\(g(a+\\Re^{it})\\), and the radial ratio is \\(|z-a|/R\\).
</details>
<details><summary>Solution</summary>
Writing \\(z=a+re^{i\\theta}\\), the solution is \\((2\\pi)^{-1}\\int_0^{2\\pi}P_{r/R}(\\theta-t)g(a+\\Re^{it})dt\\). Composition with the similarity multiplies the Laplacian by \\(R^{-2}\\), so harmonicity is preserved. Boundary continuity and uniqueness transfer from the unit disk.
</details>

### Exercise 13.9
<a id="harmonic-functions-poisson-ex-9"></a>
Explain why the constant function zero and \\(u(x,y)=y\\) show a limitation of uniqueness on the upper half-plane.
<details><summary>Hint 1</summary>
Both functions vanish continuously on the real-axis boundary.
</details>
<details><summary>Hint 2</summary>
The domain is unbounded, and one solution grows at infinity.
</details>
<details><summary>Solution</summary>
Both are harmonic in the upper half-plane and have identical boundary data zero, but they differ inside. The bounded-domain compact-closure maximum argument is unavailable. Uniqueness on such an unbounded domain requires additional restrictions, for example suitable boundedness or growth conditions, not present in this example.
</details>

### Exercise 13.10
<a id="harmonic-functions-poisson-ex-10"></a>
If continuous boundary data converge uniformly, prove their disk solutions converge uniformly on the closed disk.
<details><summary>Hint 1</summary>
Apply the stability estimate to each pair of boundary data.
</details>
<details><summary>Hint 2</summary>
The normalized positive kernel has operator bound one in the supremum norm.
</details>
<details><summary>Solution</summary>
For solutions \\(u_n,u\\), positivity and normalization give \\(|u_n(z)-u(z)|\\le\\|g_n-g\\|_\\infty\\) inside. On the boundary the same inequality is the definition of the norm. Thus the supremum over the closed disk tends to zero with the boundary norm.
</details>

### Exercise 13.11
<a id="harmonic-functions-poisson-ex-11"></a>
Show that a harmonic function on the whole plane which is bounded above is constant.
<details><summary>Hint 1</summary>
The plane is simply connected, so choose a global holomorphic function with that real part.
</details>
<details><summary>Hint 2</summary>
Exponentiation converts the upper bound into a bounded entire function.
</details>
<details><summary>Solution</summary>
Write \\(u=\\operatorname{Re}F\\), with \\(F\\) entire. Then \\(|e^F|=e^u\\) is bounded, so Liouville makes \\(e^F\\) constant. It never vanishes; differentiation gives \\(e^F F'=0\\), hence \\(F'=0\\). Therefore \\(u\\) is constant.
</details>

### Exercise 13.12
<a id="harmonic-functions-poisson-ex-12"></a>
Suppose continuous boundary data are nonnegative and not identically zero. Prove their Poisson solution is strictly positive throughout the open disk.
<details><summary>Hint 1</summary>
At least one boundary value is positive on a whole small arc.
</details>
<details><summary>Hint 2</summary>
The Poisson kernel is strictly positive for every interior point and every boundary angle.
</details>
<details><summary>Solution</summary>
Continuity provides an arc of positive length on which \\(g\\ge c>0\\). At any fixed interior point, the positive continuous kernel has a positive minimum on that arc. Its integral against \\(g\\) is therefore strictly positive, while the rest contributes nonnegatively. This proves strict interior positivity directly.
</details>

## Worked example: recovering a harmonic polynomial from its boundary

Let the unit-circle data be \\(g(e^{it})=2\\cos t-3\\sin(2t)\\). The candidate \\(u(z)=\\operatorname{Re}(2z+3iz^2)\\) is harmonic because it is the real part of a holomorphic polynomial. For \\(z=e^{it}\\), its value is \\(2\\cos t-3\\sin(2t)\\), exactly the prescribed data. It is continuous on the closed disk, so uniqueness in the disk Dirichlet theorem identifies it with the Poisson integral. At \\(z=re^{i\\theta}\\), the explicit value is \\(2r\\cos\\theta-3r^2\\sin(2\\theta)\\). The second angular mode decays as \\(r^2\\) toward the center, faster than the first mode's \\(r\\). This is the concrete spectral smoothing behind the kernel formula.

At the center the value is zero, equal to the average of \\(g\\). More generally, for a trigonometric polynomial, each nonconstant Fourier mode has zero average and contributes a positive power of \\(r\\) to the interior solution. This argument proves the formula for finite sums directly. For arbitrary continuous data, one cannot simply substitute an infinite Fourier series and interchange its sum with the Poisson integral without a convergence argument; the kernel proof above supplies a solution without requiring such an expansion.

## The kernel as a stable averaging operator

Let \\(g,h\\) be continuous real boundary data, with Poisson solutions \\(u_g,u_h\\). Since the kernel is nonnegative and has average one,
\\[
 |u_g(z)-u_h(z)|\\le\\|g-h\\|_\\infty
\\]
for every point of the disk. The same estimate holds on the boundary by continuity. Thus the solution operator preserves order, sends constants to constants, and has norm one in the uniform norm. If \\(g\\le h\\) pointwise, the integral immediately gives \\(u_g\\le u_h\\) everywhere. These statements provide quantitative stability: an error of at most \\(\\varepsilon\\) in every measured boundary value creates at most \\(\\varepsilon\\) error anywhere inside.

The estimate does not imply that nearby *interior points* have values differing by at most their distance times a uniform constant independent of the boundary data. Highly oscillatory continuous boundary data can have steep gradients near the boundary. On a smaller closed disk, Cauchy estimates applied to the holomorphic representation give derivative bounds in terms of the remaining distance to the circle. The distinction is between stability with respect to the data and spatial regularity as a point approaches the boundary.

## A global conjugate can fail while the potential is harmonic

On the annulus \\(A=\\{z:1<|z|<2\\}\\), the function \\(u(z)=\\log|z|\\) is harmonic. Its local holomorphic derivative candidate is \\(g(z)=u_x-iu_y=1/z\\). If a global harmonic conjugate existed on \\(A\\), the resulting holomorphic function \\(F=u+iv\\) would satisfy \\(F'=1/z\\), making \\(1/z\\) a global derivative. But on the circle \\(|z|=3/2\\),
\\[
 \\int_{|z|=3/2}\\frac{dz}{z}=2\\pi i\\ne0,
\\]
contradicting the integral of a derivative around a closed path. The obstruction is the nonzero period around the hole. On any small disk inside the annulus, the same \\(u\\) does have a conjugate, obtained from a local argument branch. The Laplace equation checks local compatibility; topology decides whether these local conjugates paste to one global function.

An additive constant is the only ambiguity once a conjugate exists on a connected domain. Indeed, if \\(u+iv_1\\) and \\(u+iv_2\\) are holomorphic, their difference is purely imaginary and holomorphic. Its real part is constant zero; Cauchy–Riemann then forces both partial derivatives of the imaginary part to vanish, so \\(v_1-v_2\\) is constant. This uniqueness up to a constant should not be confused with existence.

## Boundary hypotheses in the disk theorem

The proof of uniform boundary recovery uses uniform continuity of \\(g\\) on the compact circle. If \\(g\\) has a jump, the same estimate cannot make nearby boundary values uniformly close, and a continuous extension with those exact jump values is impossible. The Poisson integral still defines a harmonic function for many less regular data, but its boundary interpretation changes and requires additional theorems. Similarly, an unbounded domain needs a condition at infinity before boundary values alone can determine a harmonic function: on the upper half-plane the functions zero and \\(u(x+iy)=y\\) share zero values on the real boundary but differ inside. The disk theorem's bounded domain and continuous closure are therefore part of its mathematical content, not cosmetic restrictions.

## An energy identity when boundary values vanish

For a smooth harmonic function \\(u\\) on a disk with zero boundary values, the maximum principle already gives \\(u=0\\). An independent energy calculation explains the same uniqueness in a form useful beyond disks. Green's first identity on a smooth bounded domain gives \\(\\int_D |\\nabla u|^2\\,dA=\\int_{\\partial D}u\\,\\partial_nu\\,ds-\\int_Du\\Delta u\\,dA\\). Both right-hand terms vanish for zero boundary values and \\(\\Delta u=0\\), so \\(\\nabla u=0\\). Connectedness makes \\(u\\) constant, and the boundary condition makes that constant zero. This proof requires enough boundary and function regularity for the integration identity; the maximum-principle proof above covers the stated continuous-boundary disk theorem without adding those smoothness requirements. The two arguments illuminate different structures: order and averaging in one, nonnegative energy in the other.

## Sources

Original exposition and exercises. Jiří Lebl's author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/) contains a primary textbook treatment of harmonic functions and the Poisson integral. The theorem here is deliberately the disk problem with continuous boundary data; it does not claim a general-domain Dirichlet theorem.

## Summary

Harmonic functions are locally real parts of holomorphic functions. Their mean values force maximum principles and uniqueness. The Poisson kernel is positive, normalized, and concentrated near its boundary angle; these properties give a complete existence, boundary-continuity, and stability proof for the disk Dirichlet problem. Global conjugates still depend on the domain's periods. Conformal changes of variables will next transport some of these planar structures between domains.
`;export{e as default};