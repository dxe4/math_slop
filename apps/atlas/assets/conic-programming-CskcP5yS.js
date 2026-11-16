var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: conic-programming
title: "Conic Programming: Second-Order and Semidefinite Cones"
level: graduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Conic Programming: Second-Order and Semidefinite Cones {#section-1-conic-programming-second-order-and-semidefinite-cones}

Linear programming uses nonnegative coordinates to organize inequalities. Conic programming replaces that orthant by other closed convex cones while retaining linear objectives and affine equations. A norm bound becomes membership in a second-order cone; positive-semidefinite matrix structure becomes membership in a semidefinite cone. The resulting representation can expose a dual certificate that is difficult to see in the original formula.

The prerequisites are finite-dimensional convexity, separating hyperplanes, Lagrangian duality and the symmetric spectral theorem. This chapter proves the dual geometry and certificate identities for the two main cones. It also distinguishes an exact conic reformulation from a relaxation obtained by discarding a rank constraint. The existence of a standard cone representation does not establish attainment, strict feasibility or a solver's complexity for a particular input.

<a id="section-5-cones-and-their-duals"></a>
## Cones and their duals {#section-7-cones-and-their-duals}

A convex cone K contains every nonnegative linear combination of its points. We assume it is nonempty, so it contains zero. Its dual in a declared inner-product space is
$$K^*=\\{s:\\langle s,x\\rangle\\ge0\\text{ for every }x\\in K\\}.$$
The sign is positive in this convention; some geometric texts use the opposite polar sign. The dual is always closed and convex because it is an intersection of closed halfspaces. If K is closed and convex, separation gives K**=K. One inclusion follows directly from the definition. For the other, separate a point outside K from K; the cone's scaling forces the separator to have nonnegative pairing on K and negative pairing on that point, excluding it from K**.

The dual depends on the inner product, so matrix problems must declare theirs. On real symmetric matrices use the trace pairing C•X=tr(CX). Both off-diagonal entries contribute to that trace. A matrix of coefficients read from an expression containing only one copy of each off-diagonal variable must account for this factor. Confusing the two conventions changes the represented objective or equality, rather than merely changing notation.

A cone is pointed if it contains no nontrivial line. It has nonempty interior when it fills the ambient space locally. The orthant, second-order cone and positive-semidefinite cone have both properties in their natural spaces. Products of cones represent independent blocks. Free scalar variables are allowed too: the full real line is a cone whose dual is the singleton zero. A standard conic model does not silently require every variable to be nonnegative.

<a id="section-15-the-second-order-cone-is-self-dual"></a>
## The second-order cone is self-dual {#section-17-the-second-order-cone-is-self-dual}

Define the Lorentz cone in one scalar and one vector coordinate by
$$\\mathcal Q=\\{(t,x):t\\ge\\|x\\|_2\\}.$$
It is convex by the triangle inequality and closed by continuity of the norm. Its interior has strict inequality. To prove self-duality, take two cone points (s,y) and (t,x). Cauchy–Schwarz gives st+yᵀx≥st−‖y‖‖x‖≥0, proving the cone is contained in its dual.

Conversely, if s is less than ‖y‖ and y is nonzero, pair (s,y) with the cone point (1,−y/‖y‖). The result is $s-\\|y\\|<0$. If y=0 and s is negative, pairing with (1,0) does the same. Every point outside the cone therefore fails its dual test, proving equality of the cone and its dual. This direct proof explains why norm constraints and their dual norm bounds share the same Euclidean structure.

The rotated cone uses coordinates u,v,w with u,v≥0 and 2uv≥‖w‖². It is equivalent to the ordinary cone condition
$$(u+v,u-v,\\sqrt2w)\\in\\mathcal Q.$$
Squaring the cone inequality gives four uv at least twice the squared norm of w. The inequality u+v≥|u−v| also forces both scalar coordinates nonnegative. Thus the equivalence includes the boundary cases and does not rely on dividing by a possibly zero coordinate.

<a id="section-27-worked-example-1-least-squares-as-an-exact-cone-model"></a>
### Worked example 1: least squares as an exact cone model {#section-29-worked-example-1-least-squares-as-an-exact-cone-model}

Minimize half the squared residual norm over affine equations Bx=d. Introduce a scalar t and impose rotated-cone membership (t,1,Ax−b). This says 2t≥‖Ax−b‖² and t≥0. Minimizing t gives exactly the original objective because every feasible x can be paired with t equal to half its squared residual, and every conic pair has t at least that value. There is no approximation and no missing rank condition.

For a norm objective instead, ordinary cone membership (t,Ax−b) gives the epigraph directly. The two formulations have the same minimizing x when the squared and unsquared norms are monotonically related, but their objective units and gap scales differ. If a regularizer is added, replacing the residual square by the residual norm generally changes their trade-off and can change the optimizer. Exactness must be assessed for the complete objective, not for an isolated term.

Cone models also express robust affine inequalities. If an uncertain vector u lies in a Euclidean ball of radius ρ, the worst value of uᵀz is ρ‖z‖, attained in the direction of z when z is nonzero. An affine inequality required for every such u therefore becomes a norm bound. This conclusion uses the specified ball uncertainty set; replacing it by coordinatewise bounds would produce a different dual norm and a different robust constraint.

<a id="section-35-the-positive-semidefinite-cone-is-self-dual"></a>
## The positive-semidefinite cone is self-dual {#section-37-the-positive-semidefinite-cone-is-self-dual}

Let Sⁿ denote real symmetric matrices and Sⁿ₊ its cone of positive-semidefinite matrices. Membership means vᵀXv≥0 for every real vector v. Convexity follows by combining these inequalities; closedness follows by taking their intersection. The interior is the positive-definite cone, as can be seen from continuity of the least eigenvalue and a positive spectral lower bound.

If X and Y are positive semidefinite, use a spectral square root to write tr(XY)=tr(Y¹ᐟ²XY¹ᐟ²). The latter matrix is positive semidefinite and has nonnegative trace. Conversely, if Y pairs nonnegatively with every positive-semidefinite X, test X=vvᵀ to get vᵀYv≥0 for every v. Thus Sⁿ₊ is its own dual under the trace pairing.

Positive semidefiniteness is not entrywise nonnegativity. A covariance matrix can have negative off-diagonal entries while remaining positive semidefinite. Conversely a matrix with all positive entries can have a negative eigenvalue. The universal quadratic-form inequality is the relevant condition. Symmetry also belongs to the model: a nonsymmetric matrix is not an element of this symmetric cone even if a few sampled quadratic forms happen to be nonnegative.

<a id="section-43-linear-conic-duality-and-complementarity"></a>
## Linear conic duality and complementarity {#section-45-linear-conic-duality-and-complementarity}

In a finite-dimensional inner-product space, the primal standard form is minimize ⟨c,x⟩ subject to Ax=b and x∈K. Its dual is maximize bᵀy subject to
$$c-A^*y=s\\in K^*.$$
Here A* is the adjoint for the declared pairings. For feasible candidates the objective difference is
$$\\langle c,x\\rangle-b^Ty=\\langle s,x\\rangle\\ge0.$$
This proves weak duality directly. Matching values certify optimality on both sides without requiring a general strong-duality theorem. Feasibility and complementarity are separate obligations; a zero formal pairing between infeasible matrices supplies no certificate.

For semidefinite programming, x is X, c is C, and the equality operator consists of trace pairings with coefficient matrices. The adjoint returns their multiplier-weighted sum. Complementarity is tr(SX)=0 for positive-semidefinite X and S. In fact it implies SX=XS=0. The matrix S¹ᐟ²XS¹ᐟ² is positive semidefinite with trace zero, hence zero. Its quadratic form is the squared norm of X¹ᐟ²S¹ᐟ² applied to a vector, so that product vanishes. Multiplying the resulting zero products yields XS=0 and its transpose. Their ranges therefore occupy orthogonal directions.

A finite-dimensional Slater theorem gives equality of primal and dual values and dual attainment when the primal has a strictly interior cone point satisfying its equalities and a finite value, under the usual proper cone formulation. This theorem is a cited separation result; strict feasibility concerns the specified affine slice and cone interior. It does not automatically prove primal attainment on an unbounded slice. Reducing a model to a lower-dimensional face can restore relative-interior structure, but the face and its dual equations must then be represented explicitly.

<a id="section-55-worked-example-2-a-small-semidefinite-certificate"></a>
### Worked example 2: a small semidefinite certificate {#section-57-worked-example-2-a-small-semidefinite-certificate}

Minimize tr X over positive-semidefinite two-by-two X with X₁₂=1. For the vector (1,−1), positivity gives X₁₁+X₂₂−2≥0, so the objective is at least two. The all-ones matrix is feasible and has trace two, proving the minimum. This is already a complete primal lower-bound argument.

For its dual, encode the off-diagonal equality with a coefficient matrix having off-diagonal entries one half and zero diagonal. The dual slack is I minus y times that matrix. Its eigenvalues are 1±y/2, so dual feasibility is |y|≤2. Choosing y=2 gives objective two and slack with diagonal one and off-diagonal minus one. Its product with the all-ones primal matrix is zero. The example verifies both the trace-pairing convention and matrix complementarity, rather than relying only on a numerical equality of objectives.

<a id="section-61-worked-example-3-strict-feasibility-without-primal-atta"></a>
### Worked example 3: strict feasibility without primal attainment {#section-63-worked-example-3-strict-feasibility-without-primal-atta}

Consider positive-semidefinite matrices with entries X₁₁=x, X₁₂=1 and X₂₂=z, minimizing x. The two-by-two principal condition gives x>0 and z≥1/x. Every positive x is possible, so the infimum is zero but it is not attained. Strictly feasible matrices exist by choosing x,z positive with product greater than one. Thus strict feasibility does not turn this unbounded feasible slice into a compact one.

The projection of the closed feasible matrix set onto the x coordinate is the open positive half-line. This also proves that a linear image of a closed convex set need not be closed. Closedness assumptions in duality and attainment statements cannot be moved through a projection without justification. The escaping z coordinate is the missing compactness, not a defect in the definition of the cone.

<a id="section-67-schur-complements-and-lifted-quadratic-constraints"></a>
## Schur complements and lifted quadratic constraints {#section-69-schur-complements-and-lifted-quadratic-constraints}

For a positive-definite matrix M, a symmetric block matrix with blocks t,uᵀ,u,M is positive semidefinite exactly when t≥uᵀM⁻¹u. To prove it, complete the quadratic form in the lower vector:
$$t a^2+2a u^Tv+v^TMv
=(v+aM^{-1}u)^TM(v+aM^{-1}u)
+a^2(t-u^TM^{-1}u).$$
Both directions follow by choosing arbitrary a,v and, for necessity, v=−aM⁻¹u. The inverse in this formula requires positive definiteness. For singular M, a range condition on u and a pseudoinverse replace it; using an ordinary inverse or omitting the range condition is invalid.

A homogeneous quadratic expression xᵀQx becomes Q•X after setting X=xxᵀ. That substitution also imposes positive semidefiniteness and rank one. Dropping rank gives a semidefinite relaxation, with a lower optimal value for minimization. A rank-one feasible solution can recover a vector up to sign for the represented homogeneous constraints. A higher-rank solution is generally only a relaxation point; a rounding procedure must recheck original feasibility and objective value.

<a id="section-77-worked-example-4-a-genuine-rank-relaxation-gap"></a>
### Worked example 4: a genuine rank-relaxation gap {#section-79-worked-example-4-a-genuine-rank-relaxation-gap}

Take three signs xᵢ∈{−1,1} and minimize their three pairwise products. The identity $(x_1+x_2+x_3)^2=3+2\\sum_{i<j}x_ix_j$ shows the minimum is minus one: the odd sum cannot be zero, and choosing two signs equal and one opposite attains it.

The lifted relaxation has X positive semidefinite, diagonal entries one, and objective equal to the sum of its three distinct off-diagonal entries. Pairing X with the all-ones vector gives a lower bound minus three halves. The matrix with diagonal one and every off-diagonal entry minus one half attains that bound; its eigenvalues are zero and two copies of three halves. It has rank two. The semidefinite optimum is therefore strictly below the original sign optimum. Positive semidefiniteness and correct diagonal values did not replace the discarded rank constraint.

<a id="section-83-representation-and-numerical-claim-boundaries"></a>
## Representation and numerical claim boundaries {#section-85-representation-and-numerical-claim-boundaries}

A modeling interface should record cone dimensions, equality maps, variable domains and the primal and dual pairings. Scaling can improve a numerical system without changing its exact feasible set, but reported residuals and multipliers must be converted consistently. In a semidefinite block, a small entrywise error can cross the boundary when an eigenvalue is near zero. A strictly positive spectral margin supplies room for a quantified perturbation; a singular optimum has no such automatic margin.

Initialization is another mathematical task. Adding a scalar shift times the identity to an affine matrix expression can create a phase-I search for positive semidefiniteness. A feasible negative shift certifies strict positivity of the original matrix. A positive value returned by an unfinished search does not prove infeasibility; a valid lower bound for the phase-I optimum would be needed. Likewise failure to find an interior point can mean boundary-only feasibility rather than an empty original set.

The durable output is a certificate with declared tolerances and arithmetic allowances. Cone membership, affine feasibility and the duality gap should remain individually visible. A solver status summarizes a numerical process, while the conic identities state exactly which mathematical conclusions its candidates can support.

<a id="section-91-exercises-with-staged-hints-and-full-solutions"></a>
## Exercises with staged hints and full solutions {#section-93-exercises-with-staged-hints-and-full-solutions}

<a id="section-93-exercise-1-a-dual-cone-separator"></a>
### Exercise 1: a dual-cone separator {#section-95-exercise-1-a-dual-cone-separator}

If s is less than ‖y‖, construct a Lorentz-cone point pairing negatively with (s,y), including the case y=0.

<details>
<summary>Hint 1</summary>

Choose scalar coordinate one and a unit vector opposite y.
</details>
<details>
<summary>Hint 2</summary>

When y vanishes, the scalar s must be negative.
</details>
<details>
<summary>Full solution</summary>

For nonzero y use (1,−y/‖y‖). Its pairing is $s-\\|y\\|<0$. If y=0, use (1,0), giving s is negative. Both points belong to the Lorentz cone. This proves every exterior point fails the defining dual inequality, without presuming self-duality beforehand.
</details>

<a id="section-113-exercise-2-rotated-boundary-cases"></a>
### Exercise 2: rotated boundary cases {#section-115-exercise-2-rotated-boundary-cases}

If u=0 in the rotated cone, what must w be? What values of v remain possible?

<details>
<summary>Hint 1</summary>

The squared-norm bound has a zero right side.
</details>
<details>
<summary>Hint 2</summary>

Do not divide by u; retain the sign condition on v.
</details>
<details>
<summary>Full solution</summary>

The inequality 2uv≥‖w‖² forces w=0. Any v≥0 is then allowed, including zero. A reformulation using v≥‖w‖²/(2u) would lose these valid boundary points because its denominator vanishes. The cone representation preserves them directly.
</details>

<a id="section-133-exercise-3-positive-entries-are-insufficient"></a>
### Exercise 3: positive entries are insufficient {#section-135-exercise-3-positive-entries-are-insufficient}

Decide whether the symmetric matrix with rows (1,2) and (2,1) is positive semidefinite.

<details>
<summary>Hint 1</summary>

Test the vector (1,−1).
</details>
<details>
<summary>Hint 2</summary>

The same vector is an eigenvector with eigenvalue minus one.
</details>
<details>
<summary>Full solution</summary>

Its quadratic form on (1,−1) is minus two, so it is not positive semidefinite. Its eigenvalues are three and minus one. All entries are positive, showing that entrywise nonnegativity and cone membership are different conditions. Testing one negative direction is sufficient to refute membership.
</details>

<a id="section-153-exercise-4-a-product-cone-dual"></a>
### Exercise 4: a product-cone dual {#section-155-exercise-4-a-product-cone-dual}

Prove (K₁×K₂)*=K₁*×K₂* under the sum inner product.

<details>
<summary>Hint 1</summary>

For necessity test pairs with one component zero.
</details>
<details>
<summary>Hint 2</summary>

For sufficiency add the two nonnegative pairings.
</details>
<details>
<summary>Full solution</summary>

A dual vector pairing nonnegatively with every product point must do so with (x₁,0) and (0,x₂), placing each component in its corresponding dual cone. Conversely those two memberships make the sum pairing nonnegative for every product point. Zero belongs to each cone, justifying the tests.
</details>

<a id="section-173-exercise-5-a-scalar-quadratic-epigraph"></a>
### Exercise 5: a scalar quadratic epigraph {#section-175-exercise-5-a-scalar-quadratic-epigraph}

Represent t≥x²/2 by rotated-cone membership and explain why no rank relaxation is involved.

<details>
<summary>Hint 1</summary>

Fix one rotated scalar coordinate equal to one.
</details>
<details>
<summary>Hint 2</summary>

Use the triple (t,1,x).
</details>
<details>
<summary>Full solution</summary>

Membership of (t,1,x) says t≥0 and 2t≥x², exactly the desired inequality. The affine embedding introduces no matrix constrained to equal xxᵀ and discards no rank condition. Every original feasible pair and every cone-feasible triple correspond directly.
</details>

<a id="section-193-exercise-6-complementarity-in-a-common-basis"></a>
### Exercise 6: complementarity in a common basis {#section-195-exercise-6-complementarity-in-a-common-basis}

Let X=diag(2,0) and S=diag(0,3). Verify primal cone membership, dual cone membership and complementarity. Does complementarity alone fix an objective optimum?

<details>
<summary>Hint 1</summary>

Inspect their eigenvalues and matrix product.
</details>
<details>
<summary>Hint 2</summary>

A complete certificate also contains affine primal and dual equations.
</details>
<details>
<summary>Full solution</summary>

Both matrices are positive semidefinite and XS=0, so their trace pairing is zero. These are the cone and complementarity portions of a certificate. Without a specified equality map, right-hand side and objective, no primal or dual optimization problem has yet been certified. Matching the affine equations is essential.
</details>

<a id="section-213-exercise-7-a-schur-complement-value"></a>
### Exercise 7: a Schur-complement value {#section-215-exercise-7-a-schur-complement-value}

For M=diag(2,1) and u=(2,1), find the least t making the block matrix positive semidefinite.

<details>
<summary>Hint 1</summary>

M is positive definite, so the proved complement formula applies.
</details>
<details>
<summary>Hint 2</summary>

Compute 2²/2+1²/1.
</details>
<details>
<summary>Full solution</summary>

The least value is three. At t=3 the completed quadratic form has a zero direction with a=1 and v=−M⁻¹u=(−1,−1), so the block is semidefinite rather than definite. Larger t makes it positive definite. This illustrates why a feasible boundary point need not be strictly feasible.
</details>

<a id="section-233-exercise-8-a-tiny-error-crosses-the-cone-boundary"></a>
### Exercise 8: a tiny error crosses the cone boundary {#section-235-exercise-8-a-tiny-error-crosses-the-cone-boundary}

For ε>0, analyse the matrix with diagonal one and off-diagonal entries 1+ε.

<details>
<summary>Hint 1</summary>

The symmetric and antisymmetric coordinate vectors are eigenvectors.
</details>
<details>
<summary>Hint 2</summary>

The eigenvalues are 2+ε and −ε.
</details>
<details>
<summary>Full solution</summary>

The matrix is infeasible because its least eigenvalue is negative. It is arbitrarily close entrywise to the positive-semidefinite all-ones matrix as ε tends to zero. A small residual does not establish exact membership at a singular boundary. A certified repair or a quantified allowance is needed before calling it primal feasible.
</details>

<a id="section-253-exercise-9-recover-an-exact-vector-when-rank-one-is-kno"></a>
### Exercise 9: recover an exact vector when rank one is known {#section-255-exercise-9-recover-an-exact-vector-when-rank-one-is-kno}

Suppose X is nonzero, positive semidefinite and rank one. Explain how to recover x with X=xxᵀ and identify the ambiguity.

<details>
<summary>Hint 1</summary>

Use the unique positive eigenvalue and its normalized eigenvector.
</details>
<details>
<summary>Hint 2</summary>

Take the positive square root of that eigenvalue as the vector scale.
</details>
<details>
<summary>Full solution</summary>

The spectral theorem gives X=λvvᵀ with λ>0 and ‖v‖=1. Choose x=√λv. Its negative gives the same X, and these are the only two real choices. Recovery preserves represented homogeneous quadratic constraints; additional linear or sign conditions must still be checked or represented through an appropriate homogenized lift.
</details>

<a id="section-273-exercise-10-interpret-the-frustrated-sign-gap"></a>
### Exercise 10: interpret the frustrated-sign gap {#section-275-exercise-10-interpret-the-frustrated-sign-gap}

For the three-sign example, state the original optimum, relaxation optimum, feasible upper bound and relaxation lower bound under minimization. Can a rank-two optimum be called an original sign assignment?

<details>
<summary>Hint 1</summary>

Keep the direction of the relaxation inequality fixed.
</details>
<details>
<summary>Hint 2</summary>

The all-equal-sign sum is three, while a two-against-one assignment gives minus one.
</details>
<details>
<summary>Full solution</summary>

The original optimum is −1 and the semidefinite optimum is −3/2. A two-against-one assignment gives a feasible upper bound −1; the relaxation gives lower bound −3/2. The rank-two matrix is not xxᵀ for any real vector, so it cannot be reported as a sign assignment. Its exact cone certificate establishes the relaxed problem's value and exposes a genuine relaxation gap.
</details>

<a id="section-293-summary-and-continuation"></a>
## Summary and continuation {#section-295-summary-and-continuation}

Second-order and semidefinite cones organize norms, quadratic epigraphs and matrix positivity into affine conic models. Self-duality gives transparent primal–dual gap identities; strict feasibility and compactness govern different attainment questions. Schur complements can be exact, while discarding rank is a relaxation whose recovery step requires separate evidence. The next chapter uses this structural viewpoint for regularized statistical models.

Further reading: Boyd and Vandenberghe, *Convex Optimization* (2004), the cone and semidefinite-programming developments. The self-duality, weak-duality, complementarity, Schur-complement and finite examples above are derived directly.
`;export{e as default};