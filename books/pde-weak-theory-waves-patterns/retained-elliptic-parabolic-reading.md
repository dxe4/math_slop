
# Retained Earlier Elliptic and Parabolic Reading

Classical derivatives are often too much to demand from rough data, corners, interfaces, or limiting sequences. Weak formulations move derivatives onto test functions, retain boundary information, and place existence in complete normed spaces. This chapter develops the Hilbert-space core without pretending that weak existence automatically gives pointwise smoothness.

## 1. Weak derivatives and Sobolev space

On an open domain Omega, an integrable function v is the weak derivative $D_i u$ if

$$\int_\Omega uD_i\phi\,dx=-\int_\Omega v\phi\,dx$$

for every smooth compactly supported test function phi. The space $H^1(\Omega)$ consists of square-integrable u with square-integrable first weak derivatives. It is a Hilbert space with norm squared $\lVert u\rVert_2^2+\lVert \nabla u\rVert_2^2$. $H_0^1$ is the closure of compactly supported smooth functions in this norm; on sufficiently regular domains it encodes zero trace.

The absolute-value function on $(-1,1)$ lies in H1 and has weak derivative $\operatorname{sign}(x)$ almost everywhere, despite lacking a classical derivative at zero. A jump function is not H1 in one dimension: its distributional derivative contains a point mass, not an L2 function.

## 2. Poisson weak form

For

$$-\operatorname{div}(a\nabla u)+cu=f\quad\text{in }\Omega,\qquad u=0\quad\text{on }\partial\Omega,$$

multiply by $v \in H_0^1$ and integrate by parts:

$$A(u,v)=\int_\Omega[a\nabla u\cdot\nabla v+cuv]\,dx=\int_\Omega fv\,dx=F(v).$$

Assume Omega is bounded and supports Poincare’s inequality, $a$ is measurable with $0<a_0\leq a(x)\leq a_1$, $c\in L^\infty(\Omega)$ with $c\geq0$ almost everywhere, and $f$ defines a bounded functional on $H_0^1$. Then $A$ is bounded and coercive:

$$A(v,v)\ge a_0\|\nabla v\|_2^2\ge C\|v\|_{H^1}^2.$$

Lax–Milgram yields one and only one weak solution and the energy bound $\lVert u\rVert_{H1}\leq C\lVert F\rVert$. The theorem does not assert classical second derivatives or pointwise boundary values.

## 3. Neumann compatibility

For $-\Delta u=f$, $\partial_n u=g$, the weak form is

$$\int_\Omega\nabla u\cdot\nabla v\,dx=\int_\Omega fv\,dx+\int_{\partial\Omega}gv\,dS.$$

Assume the bounded regular domain is connected. Testing with $v=1$ gives the necessary compatibility $\int f+\int_{\partial\Omega}g=0$ under this sign convention. Constants lie in the nullspace, so solutions are unique only modulo one global constant. Restricting to zero-mean functions restores coercivity and uniqueness. On a disconnected domain, compatibility and normalization are required separately on every connected component; one global zero-mean condition does not remove the full kernel.

## 4. Maximum and energy principles

For sufficiently regular classical solutions of $-\Delta u=f\geq 0$, the sign says that u is superharmonic: an interior **negative minimum** argument gives a boundary-controlled minimum. Equivalently, with zero Dirichlet data one obtains $u\geq 0$; positive interior maxima are possible (for example, $-u''=2$ with zero endpoint data). Reversing the sign of the differential inequality reverses the maximum/minimum conclusion. Weak maximum principles use the corresponding negative- or positive-part test function and require coefficient/sign hypotheses. They are not consequences of Lax–Milgram alone.

Taking v=u in the weak Poisson equation gives

$$a_0\|\nabla u\|_2^2\le\|F\|\,\|u\|_{H^1},$$

an a priori estimate. Such bounds support stability and compactness. They do not identify convergence rates without approximation properties.

## 5. Heat equation weak energy

For $u_t-div(a \nabla u)=f$, zero Dirichlet boundary, a weak solution typically satisfies

$$u\in L^2(0,T;H_0^1),\qquad u_t\in L^2(0,T;H^{-1}),$$

and

$$\langle u_t,v\rangle+\int_\Omega a\nabla u\cdot\nabla v\,dx=\langle f,v\rangle$$

for almost every time and all test v. Testing formally with u, justified by the energy-space theory, yields

$$\tfrac12\frac{d}{dt}\|u\|_2^2+a_0\|\nabla u\|_2^2\le\langle f,u\rangle.$$

Young and Gronwall inequalities give uniqueness and continuous dependence. Initial data are attained in an appropriate L2-continuous representative, not necessarily pointwise.

## 6. Galerkin existence architecture

Choose finite-dimensional spaces spanned by basis functions and solve the projected ODE system. Uniform energy bounds give weakly convergent subsequences. Compactness may strengthen convergence enough to pass nonlinear terms; linear problems require less. Identify the weak limit, recover initial data, then prove uniqueness so the whole sequence converges.

Every arrow has a hypothesis: density of trial spaces, uniform bounds, weak compactness, lower semicontinuity, and a limit-passage argument. A bounded sequence need not converge strongly, and nonlinear products need not respect weak convergence.

## 7. Finite-element verification

For a conforming Galerkin approximation $u_h \in V_h subset H_0^1$, Galerkin orthogonality is

$$A(u-u_h,v_h)=0.$$

Cea’s lemma gives

$$\|u-u_h\|_{H^1}\le\frac M\alpha\inf_{v_h\in V_h}\|u-v_h\|_{H^1}.$$

Here M and alpha are the continuity and coercivity constants in the same $H^1$-based norm. This is quasi-optimality, not a rate until u has regularity and the mesh/space has an approximation estimate. When A is symmetric and positive definite, Galerkin orthogonality instead gives the exact best-approximation property in the energy norm $\lVert v\rVert_A^2=A(v,v)$. Corners and coefficient jumps can reduce regularity. Report mesh geometry, polynomial degree, quadrature, linear residual, estimator, and refinement in the output norm.

## 8. Failure boundaries

Loss of ellipticity destroys coercivity. Negative reaction terms can cross eigenvalues and lose uniqueness. Non-Lipschitz nonlinearities can allow multiple weak solutions. Rough domains complicate traces and regularity. A small algebraic residual measures the discrete equations, not the PDE error. Point plots can conceal boundary-layer or flux error.

## Exercises with complete worked solutions

### 1. Weak derivative
Find the weak derivative of $u(x)=|x|$ on $(-1,1)$.

**Solution.** Split the integral at zero and integrate by parts. Boundary terms at zero cancel because u is continuous, yielding $-\int \operatorname{sign}(x) \phi(x)dx$. Thus the weak derivative is sign(x) almost everywhere.

### 2. Jump failure
Why is the step function not in $H^1(-1,1)$?

**Solution.** Integration by parts produces evaluation of the test function at the jump, corresponding to a Dirac mass. No L2 function represents that functional, so the weak derivative is not in L2.

### 3. Poisson form
Derive the weak form of $-u''=f$, $u(0)=u(1)=0$.

**Solution.** Multiply by $v \in H_0^1$ and integrate: $-\int u''v=\int u'v'$, since v has zero trace. Hence $\int u'v'=\int fv$.

### 4. Uniqueness
Show the homogeneous Dirichlet weak Poisson problem has only zero solution.

**Solution.** Set v=u. Then $\int |\nabla u|^2=0$, so u is almost everywhere constant. Its zero trace forces that constant to be zero.

### 5. Neumann compatibility
For $-u''=f$ on $(0,1)$ with outward fluxes g0,g1, state compatibility.

**Solution.** Integrating the equation gives $-u'(1)+u'(0)=\int f$. With outward derivatives $g1=u'(1)$, $g0=-u'(0)$, this is $\int f+g0+g1=0$.

### 6. Neumann nonuniqueness
If u solves a pure Neumann problem, what else solves it?

**Solution.** $u+C$ has the same gradient, Laplacian, and normal derivative for every constant C. Fixing zero mean selects one representative.

### 7. Coercivity
If $a\geq 2$ and c>=0, bound A(v,v).

**Solution.** $A(v,v)\geq 2\lVert \nabla v\rVert_2^2$. Poincare then controls the full H1 norm on $H_0^1$, with a domain-dependent constant.

### 8. Negative reaction warning
Why can c<0 cause trouble?

**Solution.** The term $\int c v^2$ can cancel gradient energy. At an eigenvalue it creates a nontrivial kernel; beyond it the standard coercivity bound fails.

### 9. Heat decay
For unforced zero-boundary heat flow, show L2 energy is nonincreasing.

**Solution.** Test with u: $1/2 d\lVert u\rVert_2^2/dt+\int a|\nabla u|^2=0$. The second term is nonnegative, so energy cannot increase.

### 10. Exponential heat decay
Use Poincare $\lVert u\rVert\leq C_P\lVert \nabla u\rVert$ and a>=a0.

**Solution.** $d\lVert u\rVert^2/dt\leq -2a0/C_P^2 \lVert u\rVert^2$. Gronwall gives $\lVert u(t)\rVert^2\leq \exp\left(-2a0t/C_P^2\right)\lVert u(0)\rVert^2$.

### 11. Weak versus classical
Does H1 weak existence imply u is twice continuously differentiable?

**Solution.** No. Additional coefficient, data, boundary, and domain regularity are needed for elliptic regularity. Corners or jumps may prevent classical smoothness.

### 12. Galerkin orthogonality
Derive $A(u-u_h,v_h)=0$.

**Solution.** Both exact and discrete solutions equal F on every $v_h \in V_h$; subtract their equations.

### 13. Best approximation
If M=alpha in Cea’s lemma, what is obtained?

**Solution.** In the $H^1$-based norm, Céa gives a quasi-optimality factor $M/\alpha$, which becomes one if those constants coincide. For a symmetric positive-definite form, the sharper statement is exact orthogonal projection and best approximation in the energy norm.

### 14. No rate yet
Why does Cea alone give no power of h?

**Solution.** It reduces error to an approximation infimum. Converting that infimum to $Ch^p$ requires regularity of u and mesh/finite-element approximation estimates.

### 15. Algebraic residual
A linear solver residual is tiny. Is PDE error tiny?

**Solution.** It only says the finite linear system is nearly solved. Discretization, quadrature, modeling, and conditioning errors remain.

### 16. Weak nonlinear limit
If $u_n$ converges weakly in L2, must $u_n^2$ converge weakly to u squared?

**Solution.** No. Oscillations can retain quadratic energy. Strong convergence or compensated structure is needed to pass such nonlinearities.

### 17. Boundary meaning
What does zero data in $H_0^1$ mean?

**Solution.** It means approximation in H1 by compactly supported smooth functions; on trace-regular domains the trace is zero. It is not a pointwise statement about an arbitrary representative.

### 18. Manufactured solution
For $u=\sin(\pi x)$ on $(0,1)$, find f in $-u''=f$.

**Solution.** $u''=-\pi^2 \sin(\pi x)$, so $f=\pi^2 \sin(\pi x)$. This exact pair tests assembly and convergence, but not rough-data performance.

### 19. Flux check
For the manufactured solution, verify integral f equals boundary flux balance.

**Solution.** $\int_0^1 f dx=2\pi$. Also $-u'(1)+u'(0)=-(-\pi)+\pi=2\pi$. The balance agrees under the one-dimensional sign convention.

### 20. Claim repair
Repair: “The mesh plot is smooth, so the PDE has a smooth solution.”

**Solution.** A finite-element representation is piecewise polynomial and can look smooth independent of exact regularity. Claim only a discrete field with declared residual/refinement; establish exact regularity from analytic hypotheses.

## Chapter synthesis

Weak derivatives make rough solutions legitimate; coercive forms turn elliptic equations into Hilbert-space problems; energy estimates organize parabolic uniqueness and stability; Galerkin methods connect analysis to computation. Regularity, pointwise interpretation, and numerical error each require additional arguments.

## Dependency ledger

- Integration by parts is replaced by weak derivative definitions and traces.
- Poincare inequality and uniform ellipticity supply coercivity.
- Lax–Milgram supplies linear weak existence and uniqueness, not smoothness.
- Parabolic estimates use duality, energy testing, and Gronwall.
- Galerkin limits require density, compactness, and justified limit passage.
- Finite-element rates require regularity and approximation theory beyond quasi-optimality.
