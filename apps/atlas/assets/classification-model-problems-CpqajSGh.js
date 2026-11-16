var e=`---
parent_id: book-partial-differential-equations
chapter_id: classification-model-problems
title: "What Is a PDE? Classification and Model Problems"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# What Is a PDE? Classification and Model Problems

A differential equation becomes partial when the unknown depends on several independent variables. Temperature depends on position and time, a vibrating membrane has two spatial coordinates and time, and an electrostatic potential varies throughout a region. The derivatives describe local relations. To identify a particular solution, one must also specify a domain and suitable initial or boundary information. Those choices are mathematical hypotheses, not optional details surrounding a formula.

This L3 course treats classical equations and Fourier methods. The full preparation is [ODE: A First Course](../ode-first-course.md) through boundary problems and the first six chapters of the commissioned Fourier Analysis primary. For the present opening chapter, ordinary differentiation, multivariable partial derivatives, and elementary integration suffice. The [Multivariable and Vector Calculus route](/books/calculus-multivariable/) supplies the spatial derivative notation. Weak solutions, Sobolev spaces and nonlinear wave theory are the separate L4 continuation in 13.F24.

Our first goal is to distinguish three model questions: equilibrium, diffusion and propagation. Their equations can look similar while asking for different data and giving different stability properties. We will classify their second-order parts, verify exact solutions, and exhibit an elliptic Cauchy problem whose small data produce large interior values. Classification helps organize the problem; it does not replace existence, uniqueness or stability proofs.

## Unknowns, order and linearity

**Definition 1.1 (Partial differential equation).** A PDE is a relation among independent variables, an unknown function of those variables, and some of its partial derivatives. Its order is the highest derivative order that occurs. A classical solution has the derivatives required by the equation at every point of the stated open domain and satisfies the relation there.

For a scalar function \\(u(x,t)\\), the transport equation \\(u_t+c u_x=0\\) has order one. The heat equation \\(u_t-\\kappa u_{xx}=0\\) has order two, even though time appears only to first order. In several spatial dimensions,
\\[
 \\Delta u=\\sum_{j=1}^d u_{x_jx_j}
\\]
is the spatial Laplacian. The heat and wave equations are \\(u_t=\\kappa\\Delta u\\) and \\(u_{tt}=c^2\\Delta u\\); the Laplace equation is \\(\\Delta u=0\\).

**Definition 1.2 (Linear equation).** An equation \\(Lu=f\\) is linear when the differential operator is a linear combination of the unknown and its derivatives with coefficients depending only on the independent variables. It is homogeneous when \\(f=0\\). A semilinear equation has a linear highest-order part but nonlinear lower-order terms; a quasilinear equation is linear in its highest derivatives with coefficients allowed to depend on the unknown or lower derivatives.

For example \\(u_t-u_{xx}+u^3=0\\) is semilinear, \\(u_t+u u_x=0\\) is quasilinear of first order, and \\(u_{xx}u_{yy}-(u_{xy})^2=1\\) is fully nonlinear. These labels concern the stated unknown: replacing it by a new nonlinear expression can change the equation and its admissible domain.

Linearity gives superposition only for homogeneous equations and compatible homogeneous data. If two functions solve the same inhomogeneous equation, their difference solves the homogeneous equation, but their sum generally has twice the forcing. Boundary operators obey the same bookkeeping. This simple distinction will drive uniqueness proofs by taking differences.

## Three models require three kinds of information

**Equilibrium.** The Laplace equation describes a stationary balance. In a bounded spatial region a typical problem prescribes the value on the whole boundary, called Dirichlet data. There is no preferred time direction or initial surface. A Poisson equation \\(-\\Delta u=f\\) adds a prescribed source with a sign convention that must remain visible.

**Diffusion.** The heat equation requires one initial state and boundary conditions if the spatial region is bounded. For positive \\(\\kappa\\), high spatial frequencies decay quickly as time increases. Boundary values are prescribed along a time-dependent lateral boundary. The final-time slice is not part of the prescribed parabolic boundary for the forward problem.

**Propagation.** The wave equation requires initial displacement and initial velocity. In a bounded region it also requires boundary conditions, such as fixed endpoints. Energy can travel or oscillate without the automatic decay of a diffusion mode. Prescribing only displacement leaves the initial velocity undetermined.

The coefficients have different units. If position has unit length and time has unit time, \\(c\\) in the wave equation has units length/time, whereas \\(\\kappa\\) in the heat equation has units length squared/time. Substituting one for the other because the formulas both contain a Laplacian produces a dimensionally incorrect model.

Boundary conditions also have different meanings. A Dirichlet condition prescribes the value. A Neumann condition prescribes the outward normal derivative, which in a diffusion model corresponds to flux after the constitutive coefficient and sign are included. A Robin condition combines value and normal derivative. On the left endpoint of an interval the outward normal points left, so its derivative is minus the coordinate derivative there. Coordinate signs and physical flux signs must be checked before using a formula.

## Second-order classification in two variables

**Definition 1.3 (Principal part).** For
\\[
 a u_{xx}+2b u_{xy}+c u_{yy}+d u_x+e u_y+fu=g,
\\]
the principal coefficient matrix is \\(\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}\\). At a point where this matrix is nonzero, the equation is elliptic if \\(ac-b^2>0\\), hyperbolic if \\(ac-b^2<0\\), and parabolic if \\(ac-b^2=0\\). This convention includes the factor two in front of \\(b\\).

Orthogonal linear changes of coordinates diagonalize the real symmetric principal matrix. A positive determinant makes its nonzero eigenvalues have the same sign; a negative determinant gives opposite signs; determinant zero with nonzero matrix gives one surviving second-order direction. The labels therefore describe the quadratic form of the highest-order derivatives. Lower-order terms remain part of the problem but do not determine this classification.

For Laplace, the matrix is identity and the equation is elliptic. For \\(u_{tt}-c^2u_{xx}=0\\), with \\(c>0\\), it has one positive and one negative eigenvalue, hence is hyperbolic. For \\(u_t-\\kappa u_{xx}=0\\), treating \\((x,t)\\) as the two variables, the principal matrix has rank one and the equation is parabolic. The first time derivative is what gives the remaining evolution direction.

If coefficients vary, type can vary from point to point. The equation \\(u_{xx}+x u_{yy}=0\\) is elliptic for positive \\(x\\), hyperbolic for negative \\(x\\), and degenerate at zero. A theorem requiring uniform ellipticity cannot be applied across that degeneracy. In more variables the principal quadratic form is still central, but mixed signatures have more possibilities; the two-variable discriminant is not a universal classification formula in every dimension.

## Exact models and direct verification

**Worked example 1.4 (A decaying heat mode).** On \\(0<x<L\\), let
\\[
 u(x,t)=e^{-\\kappa\\pi^2t/L^2}\\sin(\\pi x/L),\\qquad \\kappa>0.
\\]
Its time derivative is \\(-\\kappa\\pi^2u/L^2\\), and its second spatial derivative is \\(-\\pi^2u/L^2\\), so it satisfies the heat equation. Its endpoint values are zero and its initial value is the sine profile. The decay time scale is \\(L^2/(\\kappa\\pi^2)\\), showing explicitly why a longer spatial scale decays more slowly. Verification establishes this solution; uniqueness for the appropriate data class will follow from the heat maximum principle.

**Worked example 1.5 (A wave with an independent velocity choice).** The functions
\\[
 u(x,t)=\\sin(\\pi x/L)\\cos(c\\pi t/L),\\qquad
 v(x,t)=\\sin(\\pi x/L)\\sin(c\\pi t/L)
\\]
both satisfy the wave equation and zero endpoint values. At time zero the first has sine displacement and zero velocity; the second has zero displacement and velocity \\((c\\pi/L)\\sin(\\pi x/L)\\). Thus specifying displacement alone cannot select all wave solutions. A suitable combination chooses both initial profiles. The factors are oscillatory instead of exponentially decaying because two time derivatives introduce the second minus sign.

**Worked example 1.6 (A rectangular equilibrium).** On the unit square take
\\[
 w(x,y)=\\sin(\\pi x)\\frac{\\sinh(\\pi y)}{\\sinh\\pi}.
\\]
The second \\(x\\)-derivative is \\(-\\pi^2w\\), while the second \\(y\\)-derivative is \\(\\pi^2w\\), so the Laplacian is zero. It vanishes on the bottom and vertical sides and has top boundary value \\(\\sin(\\pi x)\\). The four boundary descriptions agree at the corners. Inside the square both factors lie between zero and one, giving a direct bound for this particular solution.

There is uniqueness among sufficiently regular solutions with those data. The difference \\(z\\) of two such solutions has zero boundary values and zero Laplacian. Assuming continuous derivatives through order two on the closed square, integrate \\(z\\Delta z\\) by parts in each coordinate. The endpoint terms vanish, leaving
\\(0=-\\int[(z_x)^2+(z_y)^2]\\). Nonnegativity and continuity force both derivatives zero, so the connected square gives a constant; the boundary value makes it zero. The regularity and boundary assumptions justify the integration, rather than following from the displayed PDE alone.

## Well-posedness is a statement in chosen data norms

**Definition 1.7 (Well-posed problem).** A problem is well posed in specified function spaces if admissible data have a solution, that solution is unique in the stated solution class, and it depends continuously on the data in the stated topologies. These are three distinct assertions.

A verified formula does not prove existence for every admissible datum. A homogeneous uniqueness argument does not prove that an inhomogeneous problem is solvable. A computation with very small residual does not establish continuous dependence without an estimate converting residual and data errors into solution error.

For a classical continuous heat solution, the initial profile and lateral boundary data must agree where their prescribed sets meet. If \\(u(0,t)=0\\), continuity at the initial left corner forces \\(u_0(0)=0\\). Higher compatibility requirements depend on whether derivatives are also claimed continuous at that corner. The heat chapter assumes interior differentiability and continuity on the parabolic closure, not an unstated extension of every derivative to time zero.

**Worked example 1.8 (An unstable elliptic Cauchy problem).** On a rectangle with periodic \\(x\\), consider harmonic functions
\\[
 u_n(x,y)=\\frac{e^{-n/2}}n\\sinh(ny)\\sin(nx),\\qquad 0\\le y\\le1.
\\]
Their bottom values are zero and their bottom normal-coordinate derivatives are \\(e^{-n/2}\\sin(nx)\\), tending uniformly to zero. Every fixed finite number of \\(x\\)-derivatives of these derivative data tends uniformly to zero too, because exponential decay dominates polynomial factors in \\(n\\). Yet the top amplitudes are \\(e^{-n/2}\\sinh(n)/n\\), growing like \\(e^{n/2}/(2n)\\).

Thus recovering a harmonic solution from both value and transverse derivative on the bottom is unstable in these natural finite-derivative data norms. This does not disprove uniqueness for an elliptic Cauchy problem or the well-posedness of a full Dirichlet problem. It identifies which problem and which continuity assertion fail. Classification helps anticipate that prescribing time-like Cauchy data for an elliptic equation is different from a forward wave evolution.

## Characteristic geometry already distinguishes propagation from diffusion

For the one-dimensional wave equation on the whole line, put \\(\\xi=x-ct\\), \\(\\eta=x+ct\\). The chain rule gives \\(\\partial_t=-c\\partial_\\xi+c\\partial_\\eta\\), \\(\\partial_x=\\partial_\\xi+\\partial_\\eta\\), and therefore
\\[
 u_{tt}-c^2u_{xx}=-4c^2u_{\\xi\\eta}.
\\]
On a rectangular region in the new coordinates, \\(u_{\\xi\\eta}=0\\) means \\(u_\\xi\\) depends only on \\(\\xi\\); integrating gives \\(u=F(\\xi)+G(\\eta)\\). The whole-plane case has this product-domain property globally. A complicated domain may require local patches rather than an unqualified global integration statement.

For initial displacement \\(f\\in C^2\\) and velocity \\(g\\in C^1\\), solving \\(F+G=f\\) and \\(-cF'+cG'=g\\) yields the d'Alembert expression
\\[
 u(x,t)=\\frac{f(x-ct)+f(x+ct)}2+
 \\frac1{2c}\\int_{x-ct}^{x+ct}g(s)ds.
\\]
The preceding chain-rule calculation proves the wave relation, and evaluating the formula and its first time derivative at zero gives exactly \\(f\\) and \\(g\\). Thus the initial data influencing a fixed point \\((x,t)\\) lie only between \\(x-ct\\) and \\(x+ct\\). If both data vanish on that interval, the solution vanishes there. This is the concrete finite-propagation feature of the whole-line wave model. On a bounded spatial interval one must also track when a backward characteristic first encounters a prescribed boundary.

Heat flow behaves differently. Its whole-space Gaussian kernel, constructed in the heat chapter, is strictly positive at every spatial point for every positive time. If a nonnegative continuous initial profile is nonzero on an interval, its Gaussian convolution is positive everywhere immediately for positive time. This is a statement about the ideal mathematical diffusion model, not a claim about relativistic signal transmission or every physical microscopic heat mechanism.

Laplace's equation has neither a time slice nor such a forward cone: it asks for a spatial equilibrium with the chosen boundary information. The three models therefore differ before any numerical algorithm is selected. Their derivative orders and data surfaces encode different mathematical questions, while the classification matrix records the signs that survive smooth coordinate changes in the principal part. Later theorems make these observations into precise boundary, energy and convergence estimates.

## Principal coordinates and why classification is local

For a two-variable second-order expression a u_xx+2b u_xy+c u_yy, the symmetric principal matrix is A=[[a,b],[b,c]]. Under an invertible linear change z=Bx, the chain rule transforms it to B A B-transpose in the new derivative coordinates. Consequently its determinant is multiplied by det(B) squared. The sign of ac−b² is therefore unchanged by such a coordinate change. Lower-order derivatives do not enter this calculation; they remain important for the full equation and its estimates.

A real symmetric two-by-two matrix can be diagonalized by an orthogonal rotation. One elementary proof chooses a unit vector maximizing v-transpose A v on the unit circle. Differentiation along the circle makes Av parallel to v. Its perpendicular unit vector is also an eigenvector by symmetry. The two eigenvalues have sum a+c and product ac−b². If the product is negative, their signs differ and scaling the two coordinates reduces the principal part to one positive and one negative square. If the product is positive, they have the same sign and scaling gives two equal-sign squares. If the determinant is zero but A is not zero, exactly one second-order direction remains.

For example 5u_xx+4u_xy+2u_yy has matrix [[5,2],[2,2]], determinant six and positive trace seven. It is elliptic. Its eigenvalues are six and one, obtained from λ²−7λ+6=0; rotation removes the mixed derivative, and rescaling gives a positive multiple of a Laplacian in transformed coordinates. The right-hand side and domain must be transformed as well. A circular boundary generally becomes an ellipse under the scaling, so reducing the operator does not automatically reduce the entire boundary problem to the same geometry.

When coefficients depend on position, a rotation diagonalizing A at one point need not diagonalize it throughout a neighborhood. A position-dependent coordinate change also introduces first derivatives through the second-derivative chain rule. Classification is therefore a pointwise principal statement. A useful elliptic theorem often needs uniform ellipticity: after choosing the sign, v-transpose A(x)v must be at least θ|v|² for a fixed θ>0 throughout the region. Merely being positive definite at every point does not supply one global θ on an unbounded or noncompact region.

The expression y u_xx+u_yy illustrates type change. Its principal determinant is y. It is elliptic for y>0, hyperbolic for y<0, and degenerate on y=0. Any theorem requiring one fixed type must restrict its domain accordingly. The line where the type changes is not an ordinary point at which one may apply either neighboring theorem without checking hypotheses. This example also explains why the phrase “a second-order PDE” is too broad to determine suitable data: the principal geometry, its degeneracy and the actual domain all matter.

## Exercises

### Exercise 1.1 {#classification-model-problems-ex-1}

State the order and linearity class of \\(u_t-u_{xx}+u^3=0\\), and compare it with \\(u_t+u u_x=0\\).

<details><summary>Hint 1</summary>
Inspect the highest derivatives separately from the lower terms.
</details>
<details><summary>Hint 2</summary>
The second equation's coefficient of its highest derivative depends on the unknown.
</details>
<details><summary>Solution</summary>
The first is second order and semilinear: its highest-order part is linear with fixed coefficients, while the zeroth-order cubic is nonlinear. The second is first order and quasilinear because it is linear in the first derivatives but the coefficient of \\(u_x\\) is \\(u\\). Neither whole equation is linear in the unknown.
</details>

### Exercise 1.2 {#classification-model-problems-ex-2}

Classify \\(u_{xx}+4u_{xy}+3u_{yy}=0\\) with the chapter's convention.

<details><summary>Hint 1</summary>
The mixed coefficient equals \\(2b\\), not \\(b\\).
</details>
<details><summary>Hint 2</summary>
Compute \\(ac-b^2\\).
</details>
<details><summary>Solution</summary>
Here \\(a=1\\), \\(b=2\\), \\(c=3\\), so \\(ac-b^2=3-4=-1<0\\). The equation is hyperbolic. Treating four as \\(b\\) would use a different convention and the wrong principal matrix, even though this particular sign would accidentally remain negative.
</details>

### Exercise 1.3 {#classification-model-problems-ex-3}

Show \\(u_{xx}+2u_{xy}+u_{yy}=0\\) has only one principal second-order direction.

<details><summary>Hint 1</summary>
Its principal matrix has two identical rows.
</details>
<details><summary>Hint 2</summary>
Factor the differential expression as \\((\\partial_x+\\partial_y)^2u\\).
</details>
<details><summary>Solution</summary>
The matrix \\(\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\) has eigenvalues two and zero, hence rank one and determinant zero. The expression is indeed \\((\\partial_x+\\partial_y)^2u\\). It is parabolic in the two-variable principal-part classification, although no separate first-order evolution term was specified. Type alone therefore does not supply a forward-time initial-value problem.
</details>

### Exercise 1.4 {#classification-model-problems-ex-4}

For \\(Lu=f\\), if \\(u_1,u_2\\) solve the same equation, what do their difference and sum satisfy?

<details><summary>Hint 1</summary>
Use linearity of the differential operator.
</details>
<details><summary>Hint 2</summary>
Keep track of the two forcing contributions.
</details>
<details><summary>Solution</summary>
The difference satisfies \\(L(u_1-u_2)=0\\), while the sum satisfies \\(L(u_1+u_2)=2f\\). For identical linear boundary data, the difference also has homogeneous boundary data. That is why uniqueness is usually proved by studying a zero-data homogeneous problem, not by claiming an inhomogeneous solution set is a vector space.
</details>

### Exercise 1.5 {#classification-model-problems-ex-5}

Find the units of \\(\\kappa\\) in heat and \\(c\\) in wave from the displayed equations.

<details><summary>Hint 1</summary>
A spatial second derivative divides the unknown's units by length squared.
</details>
<details><summary>Hint 2</summary>
Compare one time derivative with two time derivatives separately.
</details>
<details><summary>Solution</summary>
Heat requires \\([\\kappa]=L^2/T\\), since \\([u]/T= [\\kappa][u]/L^2\\). Wave requires \\([c^2]=L^2/T^2\\), hence \\([c]=L/T\\). Their coefficients have different dimensions even though both equations use a Laplacian. This also gives diffusion scale \\(L^2/\\kappa\\) versus propagation scale \\(L/c\\).
</details>

### Exercise 1.6 {#classification-model-problems-ex-6}

Verify \\(e^{-4\\kappa t}\\cos(2x)\\) solves the one-dimensional heat equation and identify its initial profile.

<details><summary>Hint 1</summary>
Both relevant derivatives multiply the same function by a constant.
</details>
<details><summary>Hint 2</summary>
Evaluate the time factor at zero.
</details>
<details><summary>Solution</summary>
The time derivative is \\(-4\\kappa u\\) and the second spatial derivative is \\(-4u\\), so \\(u_t=\\kappa u_{xx}\\). The initial profile is \\(\\cos(2x)\\). Which boundary problem this solves still depends on the spatial domain and its boundary data; verifying the equation alone does not specify them.
</details>

### Exercise 1.7 {#classification-model-problems-ex-7}

Show \\(u(x,t)=f(x-ct)+g(x+ct)\\), for twice continuously differentiable functions, solves the wave equation on the line.

<details><summary>Hint 1</summary>
Differentiate each travelling term twice.
</details>
<details><summary>Hint 2</summary>
The sign of its first time derivative disappears after the second.
</details>
<details><summary>Solution</summary>
The second time derivative is \\(c^2f''(x-ct)+c^2g''(x+ct)\\), while the second spatial derivative is the same sum without \\(c^2\\). Thus the wave equation holds. At zero, displacement is \\(f+g\\) and velocity is \\(-cf'+cg'\\), illustrating how two independent profiles determine the two initial quantities.
</details>

### Exercise 1.8 {#classification-model-problems-ex-8}

Can a continuous heat solution have boundary \\(u(0,t)=0\\) for all \\(t\\ge0\\) and initial profile with \\(u_0(0)=1\\)?

<details><summary>Hint 1</summary>
Both data prescribe a value at the initial boundary corner.
</details>
<details><summary>Hint 2</summary>
Continuity makes the one-sided approaches have the same limit.
</details>
<details><summary>Solution</summary>
Not in the class continuous on the full parabolic closure. The lateral values approach zero at that corner, while initial continuity would give one. The contradiction is in the data's compatibility. A weaker solution class allowing a corner discontinuity is a different problem and must not be silently substituted for the stated classical class.
</details>

### Exercise 1.9 {#classification-model-problems-ex-9}

Classify \\(u_{xx}+x u_{yy}=0\\) on each side of zero and explain why uniform elliptic reasoning cannot cross zero.

<details><summary>Hint 1</summary>
Its principal determinant is \\(x\\).
</details>
<details><summary>Hint 2</summary>
At zero one principal eigenvalue vanishes.
</details>
<details><summary>Solution</summary>
For positive \\(x\\) the principal matrix \\(\\operatorname{diag}(1,x)\\) is positive definite and the equation elliptic. For negative \\(x\\) it has mixed signs and is hyperbolic. At zero it is rank one and degenerate. A positive ellipticity lower bound cannot remain uniform as \\(x\\downarrow0\\), so a theorem demanding such a bound has lost a hypothesis there.
</details>

### Exercise 1.10 {#classification-model-problems-ex-10}

In the rectangular equilibrium, verify the corner values of the four boundary descriptions agree.

<details><summary>Hint 1</summary>
The top data are \\(\\sin(\\pi x)\\).
</details>
<details><summary>Hint 2</summary>
At the two top corners this sine vanishes.
</details>
<details><summary>Solution</summary>
The bottom and both sides prescribe zero. At the top corners the top sine gives \\(\\sin0=\\sin\\pi=0\\), matching the side data; the bottom corners are zero from both adjacent sides. Thus no corner conflict prevents continuity of the explicit solution. Smoothness of higher derivatives at corners would be an additional regularity question.
</details>

### Exercise 1.11 {#classification-model-problems-ex-11}

For the unstable harmonic family, show its bottom derivative data tend to zero even after any fixed number of tangential derivatives.

<details><summary>Hint 1</summary>
Each tangential derivative contributes a factor \\(n\\).
</details>
<details><summary>Hint 2</summary>
Exponential decay beats every fixed polynomial factor.
</details>
<details><summary>Solution</summary>
The \\(k\\)-th tangential derivative has supremum at most \\(n^k e^{-n/2}\\), tending to zero for every fixed nonnegative integer \\(k\\). The top amplitude still grows like \\(e^{n/2}/(2n)\\). Thus strengthening the data norm by finitely many such derivatives does not repair this continuity failure. It does not address analytic-data topologies with different control.
</details>

### Exercise 1.12 {#classification-model-problems-ex-12}

A numerical formula satisfies the PDE and one selected datum to high accuracy. Which well-posedness claims remain unproved?

<details><summary>Hint 1</summary>
Well-posedness quantifies over all admissible data and a specified solution class.
</details>
<details><summary>Hint 2</summary>
Small residual needs an estimate before it implies small solution error.
</details>
<details><summary>Solution</summary>
One computed case establishes neither existence for every admissible datum nor uniqueness in the full solution class. It also gives no continuous-dependence estimate in the chosen data and solution norms. Without stability, a tiny residual or data perturbation can accompany a large solution error, as the elliptic Cauchy example illustrates. A useful numerical result must be paired with the actual theorem governing its problem.
</details>

## Sources and scope

This is original exposition and supported exercise development. Local source lineage is the Quarto classical PDE introduction, with the retained Atlas energy/Fourier chapters as later companions. The syllabus benchmarks are Lawrence Evans, *Partial Differential Equations*, and Walter Strauss, *Partial Differential Equations: An Introduction*. No external exercise bank is reproduced. The classification is explicitly two-variable principal-part classification; the examples do not supply a universal theorem for all PDEs or all boundary data.

## Summary

A PDE includes an unknown, a domain, a differential relation and suitable data. Equilibrium, diffusion and propagation have distinct data requirements and stability mechanisms. Principal-part classification organizes two-variable second-order equations, while exact examples show what verification does and does not establish. The next chapters develop characteristics and boundary principles, with the heat chapter proving the precise maximum and comparison estimates used for forward diffusion.
`;export{e as default};