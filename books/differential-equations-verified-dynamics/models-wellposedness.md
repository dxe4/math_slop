
# Models, Well-Posedness, and Continuation

A differential equation does not arrive with its interpretation attached. The same formula can describe population, voltage, concentration, or an algorithmic state, and each interpretation supplies different admissible values, units, perturbations, and failure modes. This chapter develops an accountable path from mechanism to initial-value problem and then proves what a standard local theorem really promises.

## 1. Four layers of a model

Write a parameterized initial-value problem as

$$z'(t)=f(t,z(t);\theta),\qquad z(t_0)=z_0.$$

Its four layers are:

1. **State.** Which variables determine the future in the chosen resolution? A position-only description of a particle is not Markovian under Newtonian mechanics; velocity must join the state.
2. **Mechanism.** Which balances, constitutive laws, interactions, or empirical rate rules define f?
3. **Closure.** Which unresolved effects are approximated by parameters or functions of the retained state?
4. **Data.** Which initial values, boundary values, inputs, and parameters are known, estimated, or uncertain?

The Markov property here is modelling language: once time, state, and future input are specified, the model needs no additional past history. A delay equation or hereditary material may require a whole recent function as its state.

### A variable-volume mixing balance

Let V(t) be liquid volume, m(t) solute mass, q_i and q_o inflow and outflow volume rates, and c_i incoming concentration. Perfect mixing gives outgoing concentration m/V. Conservation yields

$$V'=q_i-q_o,\qquad m'=q_ic_i-\frac{q_om}{V}.$$

Units check:

- V has volume units;
- q has volume per time;
- c and m/V have mass per volume;
- each term in m' has mass per time.

If $q_i=q_o=q$ is a positive constant and $V(0)=V_0$, volume is constant and

$$m'=qc_i-\frac q{V_0}m.$$

For constant c_i, the equilibrium is V0 c_i. The deviation w=m-V0 c_i satisfies w'=-(q/V0)w. This coordinate shift exposes a decay time V0/q.

The model is invalid if V reaches zero, mixing is slow relative to residence time, density changes matter, or the outlet preferentially samples part of the vessel. These are mechanism boundaries, not defects in the existence theorem.

## 2. Nondimensionalization before solution

Suppose

$$x'=rx(1-x/K)-h,$$

where x is a renewable stock, r an intrinsic inverse-time rate, K a stock scale, and h a constant harvest rate. Put X=x/K and tau=rt. Then

$$\frac{dX}{d\tau}=X(1-X)-H,\qquad H=\frac h{rK}.$$

The dimensionless group H compares removal to maximum intrinsic production scale. Equilibria solve X(1-X)=H. The quadratic has:

- two equilibria when H<1/4;
- one repeated equilibrium when H=1/4;
- no equilibrium when H>1/4.

The threshold is clearer after scaling. Yet the equation allows X to cross below zero under excessive harvest. A physical policy model would stop, switch regime, constrain harvesting, or treat extinction as a boundary. Extending the polynomial into negative stock is algebra, not biology.

Nondimensionalization also guides computation. A solver tolerance of 10 to the minus 6 has different meaning for a state measured in micrometres and one measured in kilometres. Scaling makes componentwise tolerances comparable.

## 3. Scalar autonomous equations

For

$$x'=f(x),$$

equilibria are zeros of f. Between consecutive zeros, continuity fixes the sign, so solutions move monotonically while they stay in that interval.

### Invariant intervals

Suppose f is locally Lipschitz and f(a) is nonnegative while f(b) is nonpositive. Then [a,b] is forward invariant. To see why, assume a solution starting inside first exits through b. At the first contact, uniqueness prevents it from crossing a solution that starts at b when the vector field points inward; a comparable argument holds at a. A fully rigorous proof may use the positive part of the boundary violation or a comparison theorem.

Uniqueness matters. A continuous but nonunique vector field can allow unexpected departures from an equilibrium boundary.

### Separation with a ledger

If f(x) is nonzero along a solution segment, then

$$\int_{x_0}^{x(t)}\frac{ds}{f(s)}=t-t_0.$$

This follows from the chain rule applied to an antiderivative of 1/f. The procedure is local to regions where f does not vanish. It cannot be used to erase equilibria.

For x'=x squared, x0 nonzero,

$$x(t)=\frac{x_0}{1-x_0(t-t_0)}.$$

If x0 is positive, the denominator reaches zero after time 1/x0. If x0 is negative, the forward solution rises toward zero and exists for all future time, but blows up at a finite time in the past. The equilibrium x=0 must be added separately.

## 4. Integral formulation

A continuously differentiable function solves

$$z'=f(t,z),\qquad z(t_0)=z_0$$

exactly when it solves

$$z(t)=z_0+\int_{t_0}^t f(s,z(s))\,ds.$$

The integral form is the bridge to fixed-point theory. It makes the initial condition automatic and replaces differentiation of an unknown function by integration of a known rule evaluated along that function.

Choose a rectangle

$$R=\{(t,z):|t-t_0|\le a,\ \|z-z_0\|\le b\}$$

inside the domain of f. Suppose f is continuous on R and bounded there by M. Any solution remaining in R changes by at most M|t-t0|, so for $M>0$ a time radius $h\le b/M$, also no larger than the rectangle's time width, keeps the integral operator inside the state ball. If $M=0$, the state-displacement restriction is automatic; the time-domain restriction remains.

Suppose also that for points in R,

$$\|f(t,z)-f(t,w)\|\le L\|z-w\|.$$

On continuous paths over |t-t0|<=h with the supremum norm, define

$$ (T\phi)(t)=z_0+\int_{t_0}^t f(s,\phi(s))\,ds.$$

Then

$$\|T\phi-T\psi\|_\infty\le Lh\|\phi-\psi\|_\infty.$$

If Lh<1, T is a contraction on the closed path ball.

## 5. Picard–Lindelöf theorem

**Theorem 1.1.** Let f be continuous on a rectangle around (t0,z0) and Lipschitz in z there with constant L. Then on a sufficiently short time interval around t0, the initial-value problem has exactly one solution. Picard iterates converge uniformly to it.

**Proof architecture.**

1. The closed ball of continuous paths with fixed initial value is complete under the supremum norm.
2. Choose h so the integral operator maps that ball into itself and Lh<1.
3. Banach’s fixed-point theorem gives a unique fixed point phi.
4. Continuity of f makes the integral differentiable, so phi solves the differential equation.
5. Any other solution staying in the rectangle is another fixed point, hence equal.

The theorem is local in time and state. It does not say:

- a solution exists until any desired final time;
- all boundary-value problems are unique;
- small perturbations remain small forever;
- parameters are identifiable from observed outputs;
- the model is physically correct.

A continuously differentiable f is locally Lipschitz in z because its state Jacobian is bounded on a smaller compact rectangle. Local Lipschitz is sufficient, not necessary; one-sided conditions can also yield uniqueness.

### Picard iteration example

For x'=x, x(0)=1, start with phi_0(t)=1. Iteration gives

$$\phi_1=1+t,\qquad\phi_2=1+t+\frac{t^2}{2},\qquad\phi_3=1+t+\frac{t^2}{2}+\frac{t^3}{6}.$$

The limit is the exponential series. The method is more than a way to guess exp(t): its contraction estimate proves convergence on a short interval, and continuation covers all finite intervals because the linear solution stays bounded there.

## 6. Existence without uniqueness

For

$$x'=2\sqrt{\max(x,0)},\qquad x(0)=0,$$

the zero solution is valid. For every a nonnegative, so is

$$x(t)=\begin{cases}0,&t\le a,\\(t-a)^2,&t\ge a.\end{cases}$$

At the joining time, both the function and its derivative match. The vector field is continuous but not locally Lipschitz at zero. The example defeats three tempting inferences:

- continuity does not imply uniqueness;
- a direction field does not necessarily define a flow;
- solution curves can share an initial segment and then separate.

Some numerical solvers started exactly at zero will return the zero solution. That is one valid solution, not evidence that it is the uniquely correct future.

## 7. Gronwall and continuous dependence

**Integral Gronwall inequality.** For $t\ge t_0$, if nonnegative continuous $u$ satisfies

$$u(t)\le\alpha+\int_{t_0}^t[\beta u(s)+g(s)]\,ds$$

for nonnegative constants alpha and beta and a nonnegative integrable forcing $g$, then

$$u(t)\le e^{\beta(t-t_0)}\alpha+\int_{t_0}^t e^{\beta(t-s)}g(s)\,ds$$

This convolution form is sharp for the corresponding linear equality. Pulling the exponential outside gives the simpler nonsharp upper bound $\exp(\beta(t-t_0))[\alpha+\int_{t_0}^t g(s)ds]$ because $g\ge0$.

For a direct proof, set $v(t)=\alpha+\int_{t_0}^t[\beta u(s)+g(s)]ds$. Then $u\le v$ and $v'\le\beta v+g$; multiplying by $e^{-\beta(t-t_0)}$ and integrating gives the convolution bound.

Let z and w solve

$$z'=f(t,z),\qquad w'=f(t,w)+r(t)$$

in a region where f is L-Lipschitz. Then

$$\|z(t)-w(t)\|\le e^{L(t-t_0)}\left[\|z_0-w_0\|+\int_{t_0}^t\|r(s)\|\,ds\right].$$

This establishes finite-interval continuous dependence. It is also a prototype global-error argument: a numerical defect acts like r. The exponential bound may be pessimistic, and for chaotic or unstable dynamics it grows rapidly. Well-posedness is compatible with limited prediction horizons.

## 8. Maximal solutions and continuation

Local solutions join uniquely on overlaps, producing a maximal interval (alpha,beta). If beta is finite and the solution remains inside a compact subset of the equation’s open domain as t approaches beta, then it can be continued beyond beta: choose a convergent sequence of states, apply local existence at the limiting point, and glue by uniqueness. Therefore a finite maximal endpoint requires escape from every compact subset.

Escape can mean:

- the state norm becomes unbounded;
- the state reaches a boundary where f is undefined;
- an external coefficient becomes singular.

### A priori bounds

For x'=-x cubed,

$$\tfrac12(x^2)'=-x^4\le0.$$

Thus |x(t)| never exceeds |x0| forward in time. The trajectory stays in a compact interval on every finite time window, so the solution continues globally forward.

For a vector system, an estimate

$$\frac{d}{dt}\|z\|^2\le C(1+\|z\|^2)$$

combined with Gronwall prevents finite-time norm blow-up. It may not prevent approach to a forbidden domain boundary.

## 9. Boundary-value problems are a different species

The linear problem

$$y''+\lambda y=0,\qquad y(0)=0,\quad y(\pi)=0$$

has only the zero solution for most positive lambda, but infinitely many scalar multiples of sin(nx) when lambda=n squared. Initial-value uniqueness remains intact: specifying y(0) and y'(0) determines one trajectory. The boundary condition at pi instead selects slopes, and at eigenvalues the selection loses uniqueness.

Shooting chooses an unknown initial slope s, solves the IVP, and searches for y(pi;s)=0. This imports all root-finding hazards: multiple roots, tangencies, missed brackets, unstable IVP propagation, and sensitivity. A solver success code does not prove uniqueness of the boundary-value problem.

## 10. A theorem audit for models

When citing local existence and uniqueness, report:

- the domain on which f is continuous;
- the variable in which the Lipschitz condition holds;
- a rectangle or neighborhood around the data;
- whether the conclusion is local or global;
- any a priori bound used for continuation;
- what happens at physical state boundaries;
- whether discontinuous inputs require a Carathéodory rather than classical framework.

If the model has switching, impacts, dry-out, saturation, or thresholds, a smooth theorem may apply only between events. Define an event rule and prove or test what happens at the event, rather than integrating blindly through it.

## The solution map is a local flow because of uniqueness

For an autonomous continuously differentiable vector field, let $\varphi_t(z)$ denote the maximal solution at elapsed time $t$ from $z$. Whenever the relevant expressions are defined, restarting a solution gives

$$\varphi_{t+s}(z)=\varphi_t(\varphi_s(z)),\qquad\varphi_0(z)=z.$$

To prove this, both sides as functions of the final elapsed time solve the same initial-value problem after the restart. Local uniqueness identifies them, and repeated continuation extends the equality over the common interval. The flow law is therefore a consequence of the theorem, rather than an extra algebraic property to impose on arbitrary families of curves.

The allowed pairs of time and initial state form an open set. Fix one orbit segment inside its maximal interval. Its image over a closed finite time interval is compact within the open equation domain. Cover it by finitely many local existence rectangles with common smaller bounds. Continuous dependence keeps nearby starts in successive rectangles, so they exist over the same slightly extended segment. This proves openness near the chosen pair. It does not produce one common existence time for all states in an unbounded domain.

Reversing time gives a local inverse: a forward time map is inverted by the corresponding negative-time map wherever both are defined. A maximal solution may nevertheless have a finite backward endpoint even if it exists for every positive time. Thus local invertibility of the flow is compatible with a forward-only global existence theorem. A semigroup statement on nonnegative time should not be silently promoted to a complete group action.

## Differentiating the flow needs a common orbit neighbourhood

When the vector field is continuously differentiable, its derivative with respect to the initial state solves the variational equation

$$J'(t)=Df(\varphi_t(z))J(t),\qquad J(0)=I.$$

Here is why formal differentiation is justified on a fixed compact orbit segment. Subtract the integral equations for two nearby starts. The mean-value integral for the vector field writes their difference as a matrix coefficient, evaluated along the joining state segment, times the state difference. Continuous dependence keeps those joining segments in one compact neighbourhood. Uniform continuity of the derivative makes that matrix coefficient converge uniformly to the derivative along the reference orbit as the initial increment shrinks.

Gronwall bounds the difference quotients uniformly. Subtracting their proposed linear variational equation then gives an error integral whose forcing tends uniformly to zero, while its linear coefficient has a common finite bound. A second Gronwall estimate makes that error tend uniformly to zero. This proves differentiability with the displayed derivative, and the same argument with nearby reference starts proves continuity of that derivative. The common-existence neighbourhood and compact derivative bound are the steps missing from an unsupported symbolic differentiation.

The inverse time map makes this derivative nonsingular wherever the local flow is defined. Differentiating the inverse composition gives a product equal to the identity. This observation prepares Liouville's determinant identity and the invariant-manifold proofs later in the book.

**Worked boundary: finite backward escape.** The equation $x'=-x^2$ with positive initial value one has solution $x(t)=1/(1+t)$. It exists for every nonnegative time and decays, but its backward interval stops at minus one by norm blow-up. A local negative-time inverse exists at every finite point on the positive orbit; those local inverses do not combine into an all-time inverse for every state. The exact solution demonstrates the distinction without changing the equation or its domain.

## Worked problems

<a id="models-wellposedness-ex-1"></a>

### 1. Positive invariance

Let x'=x(1-x) with x(0) in [0,1]. Show that the solution stays in [0,1] and exists for every future time.

<details><summary>Hint 1</summary>

The endpoints are equilibrium trajectories.

</details>

<details><summary>Hint 2</summary>

Uniqueness prevents an interior scalar solution from crossing either one; compact containment then enables continuation.

</details>

<details><summary>Full solution</summary>

**Solution.** The endpoints are equilibria, and local uniqueness prevents an interior solution from crossing either equilibrium trajectory. Hence the state remains in the compact interval [0,1]. The polynomial vector field is locally Lipschitz everywhere. Since the solution stays bounded on every finite interval, the continuation criterion extends it for all t nonnegative.

</details>

<a id="models-wellposedness-ex-2"></a>

### 2. A local theorem is not a global theorem

The vector field f(x)=x squared is smooth on the real line. Why does Picard–Lindelöf not contradict blow-up from x(0)=1?

<details><summary>Hint 1</summary>

Separate local existence from maximal-interval extension.

</details>

<details><summary>Hint 2</summary>

The exact reciprocal solution becomes unbounded at a finite time, which is permitted by the continuation alternative.

</details>

<details><summary>Full solution</summary>

**Solution.** The theorem guarantees a unique solution on some interval around zero. It does not provide a uniform state bound or an arbitrary time interval. The unique solution 1/(1-t) leaves every compact subset of the state domain as t approaches 1, satisfying the continuation alternative.

</details>

<a id="models-wellposedness-ex-3"></a>

### 3. Parameter perturbation

Suppose f(t,z;theta) is L-Lipschitz in z and satisfies norm(f(t,z;theta)-f(t,z;eta))<=K|theta-eta| on a common region. Bound solutions with the same initial state.

<details><summary>Hint 1</summary>

Treat the parameter change as an additive forcing difference.

</details>

<details><summary>Hint 2</summary>

Apply the common Lipschitz bound and integrate its constant parameter-error bound over the finite horizon.

</details>

<details><summary>Full solution</summary>

**Solution.** Treat the parameter difference as a forcing residual of norm at most K|theta-eta|. Gronwall gives

$$\|z_\theta(t)-z_\eta(t)\|\le e^{L(t-t_0)}K|\theta-\eta|(t-t_0).$$

The bound is finite-interval and may be loose. It also assumes both solutions remain in the common region.

</details>

<a id="models-wellposedness-ex-4"></a>

### 4. Repair a false claim

“Because f is continuous, the direction field contains one noncrossing curve through each point.”

<details><summary>Hint 1</summary>

Continuity does not supply uniqueness.

</details>

<details><summary>Hint 2</summary>

Add local state Lipschitz regularity or another actual uniqueness hypothesis; compare the waiting-family example.

</details>

<details><summary>Full solution</summary>

**Solution.** Continuity supports local existence but not uniqueness. Replace the claim by: if f is continuous and locally Lipschitz in the state near a point, then a unique local solution passes through that point. The square-root waiting-time example shows why the added condition does work.

</details>

<a id="models-wellposedness-ex-5"></a>

### 5. Contraction interval

Suppose the Picard operator has state Lipschitz constant $L=4$. Give a simple step condition making it a contraction.

<details><summary>Hint 1</summary>

Use the supremum-norm bound for the Picard operator.

</details>

<details><summary>Hint 2</summary>

Its contraction factor is at most the state Lipschitz constant times the time radius.

</details>

<details><summary>Full solution</summary>

**Solution.** Its supremum-norm contraction factor is at most $Lh$. Any $h<1/4$ gives $Lh<1$. The additional self-map condition must still be checked; contraction alone does not ensure the operator stays inside the chosen path ball.

</details>

<a id="models-wellposedness-ex-6"></a>

### 6. Self-map radius

If $\lVert f\rVert\leq M$ on a rectangle with state radius b, what time restriction keeps Picard paths inside it?

<details><summary>Hint 1</summary>

Bound the integral displacement by the forcing supremum.

</details>

<details><summary>Hint 2</summary>

The time radius must respect both the rectangle width and its state-radius allowance.

</details>

<details><summary>Full solution</summary>

**Solution.** The integral displacement is at most $Mh$, so require $Mh\leq b$. Combine this with the time width of the rectangle and $Lh<1$.

</details>

<a id="models-wellposedness-ex-7"></a>

### 7. One-sided dependence

Solutions satisfy $\lVert z(t)-w(t)\rVert\leq e^{Lt}\lVert z_0-w_0\rVert$. If $L=2$, $t=3$, and initial discrepancy is $10^{-4}$, evaluate the bound.

<details><summary>Hint 1</summary>

Insert the time and initial error into the exponential bound.

</details>

<details><summary>Hint 2</summary>

Keep the result identified as an upper bound rather than an observed discrepancy.

</details>

<details><summary>Full solution</summary>

**Solution.** It is $e^6 10^{-4}$, approximately $0.0403$. This is a worst-case finite-time bound, not a prediction that the discrepancy actually attains it.

</details>

<a id="models-wellposedness-ex-8"></a>

### 8. Domain escape without norm blow-up

Give an ODE whose solution reaches a forbidden domain boundary with bounded state.

<details><summary>Hint 1</summary>

The equation domain can exclude a finite state value.

</details>

<details><summary>Hint 2</summary>

A constant negative velocity reaches the boundary of a positive-state domain without norm blow-up.

</details>

<details><summary>Full solution</summary>

**Solution.** On domain $x>0$, take $x'=-1$, $x(0)=1$. The solution $x=1-t$ remains bounded but reaches the boundary x=0 at t=1, where the declared model ceases to apply.

</details>

<a id="models-wellposedness-ex-9"></a>

### 9. A global growth estimate

If $z \cdot f(t,z)\leq C(1+\lVert z\rVert^2)$, derive an inequality for $y=1+\lVert z\rVert^2$.

<details><summary>Hint 1</summary>

Differentiate one plus the squared state norm.

</details>

<details><summary>Hint 2</summary>

The stated radial-growth inequality then gives a scalar Gronwall estimate.

</details>

<details><summary>Full solution</summary>

**Solution.** $y'=2z \cdot f\leq 2C(1+\lVert z\rVert^2)=2Cy$. Gronwall gives $y(t)\leq y(t_0)e^{2C(t-t_0)}$, preventing finite norm blow-up on finite intervals inside the domain.

</details>

<a id="models-wellposedness-ex-10"></a>

### 10. Waiting-time family check

Verify differentiability of $x(t)=0$ for $t\leq a$, $(t-a)^2$ for $t\geq a$ at t=a.

<details><summary>Hint 1</summary>

Check the values and one-sided derivatives at the joining time.

</details>

<details><summary>Hint 2</summary>

Both derivatives vanish there; substitution must still hold on both open pieces.

</details>

<details><summary>Full solution</summary>

**Solution.** Both side values are zero. The left derivative is zero and the right derivative is $2(t-a)$, also zero at a. Substitution gives $x'=2\sqrt{x}$ on both pieces.

</details>

<a id="models-wellposedness-ex-11"></a>

### 11. Local Lipschitz from derivative

Why does bounded $D_zf$ on a convex compact set give a Lipschitz constant?

<details><summary>Hint 1</summary>

Use the derivative integrated along the joining line segment.

</details>

<details><summary>Hint 2</summary>

Convexity keeps that whole segment inside the region of the uniform derivative bound.

</details>

<details><summary>Full solution</summary>

**Solution.** Apply the mean-value integral along the line segment from z to w: $f(z)-f(w)=\int_0^1 Df(w+s(z-w))(z-w)ds$. Taking norms gives the derivative supremum times $\lVert z-w\rVert$.

</details>

<a id="models-wellposedness-ex-12"></a>

### 12. A discontinuous input boundary

For $x'=u(t)$ with a step input u, why may a classical $C^1$ solution formulation be too strict?

<details><summary>Hint 1</summary>

A step input makes the derivative jump.

</details>

<details><summary>Hint 2</summary>

An absolutely continuous integral solution can satisfy the equation almost everywhere without being C1.

</details>

<details><summary>Full solution</summary>

**Solution.** The integral solution is absolutely continuous and its derivative equals u almost everywhere, but the derivative jumps where u does. A Caratheodory solution class states the correct conclusion.

</details>

<a id="models-wellposedness-ex-13"></a>

### 13. Residual-to-state diagnostic

An approximate path $z_h$ has initial error epsilon and integrated residual at most rho on $[0,T]$. State the Lipschitz error bound.

<details><summary>Hint 1</summary>

Subtract the approximate-path integral identity from the exact one.

</details>

<details><summary>Hint 2</summary>

Bound initial error and the integral of the residual separately before applying Gronwall.

</details>

<details><summary>Full solution</summary>

**Solution.** If both paths stay where f is L-Lipschitz, $\lVert z-z_h\rVert_\infty\leq e^{LT}(\epsilon+\rho)$. The common-region and residual-norm hypotheses are essential.

</details>

<a id="models-wellposedness-ex-14"></a>

### 14. Step-refinement interpretation

Euler outputs at a fixed T are 1.8, 1.9, and 1.95 for h,h/2,h/4. Is convergence proved?

<details><summary>Hint 1</summary>

A pattern in finitely many mesh outputs is not a uniform error estimate.

</details>

<details><summary>Hint 2</summary>

Shared mistakes and pre-asymptotic coincidences can produce the same ratios.

</details>

<details><summary>Full solution</summary>

**Solution.** No. The differences halve, supporting first-order behaviour, but shared model/error bugs or a pre-asymptotic coincidence remain possible. Add an exact benchmark or residual and further refinement.

</details>

<a id="models-wellposedness-ex-15"></a>

### 15. Event accuracy

Why can an ODE state be accurate while a threshold-crossing time is poor?

<details><summary>Hint 1</summary>

Crossing time involves dividing a state discrepancy by the crossing derivative.

</details>

<details><summary>Hint 2</summary>

Near tangency that derivative can be small even when the state error is small.

</details>

<details><summary>Full solution</summary>

**Solution.** Event time depends on interpolation and transversality. Near grazing, a small state error divided by a tiny crossing derivative produces a large time error. Report event residual and time refinement.

</details>

<a id="models-wellposedness-ex-16"></a>

### 16. Mixing-model audit

A tank equation assumes perfect mixing. Does uniqueness validate that assumption?

<details><summary>Hint 1</summary>

A theorem about the written equation does not establish the physical mixing mechanism.

</details>

<details><summary>Hint 2</summary>

Distinguish mathematical determinacy from evidence supporting the lumped model.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Uniqueness only makes the written lumped ODE mathematically determinate. Perfect mixing is a modelling approximation requiring physical or empirical validation.

</details>

<a id="models-wellposedness-ex-17"></a>

### 17. Boundary-value resonance

For $y''+y=0$, $y(0)=y(\pi)=0$, describe all solutions.

<details><summary>Hint 1</summary>

Solve the homogeneous trigonometric equation and impose both endpoints.

</details>

<details><summary>Hint 2</summary>

The first boundary removes cosine while the second may leave the sine coefficient free.

</details>

<details><summary>Full solution</summary>

**Solution.** $y=A \sin x+B \cos x$; the first condition gives B=0 and the second is automatic. Every $A \sin x$ solves, so boundary uniqueness fails although each initial position/slope IVP is unique.

</details>

<a id="models-wellposedness-ex-18"></a>

### 18. Continuation repair

Repair: “A polynomial vector field always has global solutions.”

<details><summary>Hint 1</summary>

Polynomial smoothness ensures local Lipschitz regularity, not a global state bound.

</details>

<details><summary>Hint 2</summary>

The quadratic scalar growth equation supplies a finite-time escape counterexample.

</details>

<details><summary>Full solution</summary>

**Solution.** Polynomial fields are locally Lipschitz, so maximal solutions are locally unique, but superlinear growth can cause finite escape, as $x'=x^2$ shows. Add an a priori bound or appropriate growth condition for global existence.

</details>

<a id="models-wellposedness-ex-19"></a>

### 19. Two-error ledger

Separate model and discretization errors for logistic growth data.

<details><summary>Hint 1</summary>

Ask which two objects each error compares.

</details>

<details><summary>Hint 2</summary>

A smaller numerical step approaches the exact written ODE, not necessarily the observed population process.

</details>

<details><summary>Full solution</summary>

**Solution.** Discretization error compares the numerical solution with the exact logistic ODE solution and is audited by residual/refinement. Model error compares logistic predictions with the population process and requires observations, alternative mechanisms, and validation. Refining h addresses only the first.

</details>

<a id="models-wellposedness-ex-20"></a>

### 20. Theorem retrieval

State the smallest honest conclusion from continuity plus local state Lipschitz regularity near initial data.

<details><summary>Hint 1</summary>

State the local interval and solution class.

</details>

<details><summary>Hint 2</summary>

Do not add an arbitrary global horizon, a boundary-value conclusion or empirical validation.

</details>

<details><summary>Full solution</summary>

**Solution.** There exists a sufficiently short interval on which exactly one solution in the local theorem’s class remains in the chosen neighborhood, with finite-interval continuous dependence under common bounds. No global or empirical claim follows.

</details>

## Dependency ledger

- Conservation supplied the mixing equation; no ODE theorem validated perfect mixing.
- Compactness of a rectangle bounded f and its derivative.
- Lipschitz continuity plus short time made the integral operator a contraction.
- Completeness of the path space let the Picard sequence converge inside that space.
- Gronwall controlled finite-time perturbation growth.
- A priori bounds plus the continuation alternative upgraded local existence.
- Boundary-value uniqueness was deliberately not inferred from IVP uniqueness.
