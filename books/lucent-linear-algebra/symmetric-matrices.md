# 16. Symmetric matrices and quadratic forms

## Learning goals and prerequisites

You should know eigenvectors, orthogonal complements, and changes of basis. By the end, you will be able to prove why real symmetric matrices have an orthonormal eigenbasis; diagonalize quadratic forms; classify their signs; and interpret eigenvalues as extremal directional responses. Allow two study sessions, including the investigations and exercises.

## Symmetry makes eigenvectors cooperate

A real matrix A is **symmetric** when Aᵀ = A. Equivalently, ⟨Ax,y⟩ = ⟨x,Ay⟩ for every x,y. This identity connects the action of A with Euclidean geometry.

Suppose Au = λu and Av = μv. Symmetry gives λ⟨u,v⟩ = ⟨Au,v⟩ = ⟨u,Av⟩ = μ⟨u,v⟩. Thus eigenvectors belonging to distinct eigenvalues are orthogonal. This argument does not say that arbitrary eigenvectors for a repeated eigenvalue are orthogonal; inside that eigenspace, choose an orthonormal basis using Gram–Schmidt.

**Theorem 16.2 (Real spectral).** Every real symmetric n × n matrix has a factorization A = QDQᵀ, where Q is orthogonal and D is real diagonal. The columns of Q form an orthonormal eigenbasis. Conversely, any matrix of this form is symmetric, since transposition leaves QDQᵀ unchanged.

Here is a proof that also explains optimization. The continuous function q(x) = xᵀAx attains a maximum on the unit sphere, because that sphere is compact. Let u be a maximizing unit vector. For any unit v perpendicular to u, the curve x(t) = cos(t)u + sin(t)v remains on the sphere. Differentiating q(x(t)) at t = 0 gives 2vᵀAu = 0. Therefore Au has no component perpendicular to u: Au = λu, with λ = uᵀAu real.

Moreover, u⊥ is invariant: if w ⊥ u, then ⟨Aw,u⟩ = ⟨w,Au⟩ = λ⟨w,u⟩ = 0. The restriction of A to this smaller Euclidean space remains symmetric. Induction on dimension supplies an orthonormal eigenbasis there; adding u completes the proof. The one-dimensional case is immediate. No picture in two dimensions proves the n-dimensional theorem; compactness and invariance do that work.

## Quadratic forms reveal principal directions

A **quadratic form** is q(x) = xᵀAx. In two dimensions, for A = [[a,b],[b,c]],

q(x,y) = ax² + 2bxy + cy².

The factor 2 matters. Any real matrix B defines the same quadratic form as its symmetric part (B+Bᵀ)/2: the skew-symmetric part contributes zero, because a scalar equals its transpose.

Write x = Qz in an orthonormal eigenbasis. Then q(x) = zᵀDz = Σ λᵢzᵢ², while ‖x‖² = Σ zᵢ². Orthogonal diagonalization removes mixed terms without changing lengths or angles.

**Worked example: a tilted ellipse.** For A = [[2,1],[1,2]], the characteristic polynomial is (2−λ)²−1, giving eigenvalues 3 and 1. Corresponding unit eigenvectors are u₁ = (1,1)/√2 and u₂ = (−1,1)/√2. Thus z₁ = (x+y)/√2 and z₂ = (−x+y)/√2 give q = 3z₁²+z₂². The contour q = 1 is an ellipse with semiaxes 1/√3 along u₁ and 1 along u₂. Larger eigenvalues produce shorter contour axes because the quadratic form grows faster in those directions.

### Investigation: rotate the principal axes

The teal ellipse has q = 1. Amber and rose vectors mark its semiaxes. Parameters a and b are eigenvalues, theta rotates the eigenbasis, and phi moves the blue boundary point. Start with a = 3, b = 1, theta ≈ 0.785 to reproduce the example.

```mathviz
scene "Principal axes of a quadratic form";
domain -3 3;
range -3 3;
coordinates equal;
param a = 3 from 0.25 to 4;
param b = 1 from 0.25 to 4;
param theta = 0.785398 from 0 to 3.141593;
param phi = 0.7 from 0 to 6.283185;
parametric ellipse(x) = (cos(theta)*cos(x)/sqrt(a)-sin(theta)*sin(x)/sqrt(b),sin(theta)*cos(x)/sqrt(a)+cos(theta)*sin(x)/sqrt(b)) from 0 to 6.283185 color teal;
vector first = (cos(theta)/sqrt(a),sin(theta)/sqrt(a)) color amber;
vector second = (-sin(theta)/sqrt(b),cos(theta)/sqrt(b)) color rose;
point boundary = (cos(theta)*cos(phi)/sqrt(a)-sin(theta)*sin(phi)/sqrt(b),sin(theta)*cos(phi)/sqrt(a)+cos(theta)*sin(phi)/sqrt(b)) color blue;
```

**Predict → Manipulate → Explain → Transfer.** Predict what doubling a does to one semiaxis. Change a while holding b and theta fixed; then vary theta and phi. Explain why rotation preserves semiaxis lengths and why phi generally differs from the boundary point's polar angle. Transfer: describe q = 4 in three dimensions with eigenvalues 1, 4, 9. Its semiaxes are 2, 1, 2/3; orientation comes from eigenvectors.

## Positivity and the Rayleigh quotient

A symmetric matrix is **positive definite** if xᵀAx > 0 for every nonzero x, and **positive semidefinite** if this expression is always ≥ 0. The diagonal expression proves that these conditions mean, respectively, all eigenvalues are positive or all are nonnegative. **Indefinite** means the form takes both signs. Zero eigenvalues create flat directions.

For x ≠ 0, define the **Rayleigh quotient** R(x) = xᵀAx/(xᵀx). In eigen-coordinates,

R(x) = Σ λᵢzᵢ² / Σ zᵢ².

These are weighted averages, so λ_min ≤ R(x) ≤ λ_max. Equality holds exactly when x belongs to the appropriate extremal eigenspace. If A is positive definite, this gives λ_min‖x‖² ≤ q(x) ≤ λ_max‖x‖², useful for bounding energy without computing every direction.

**Worked example: signs can hide behind positive entries.** For A = [[1,2],[2,1]], the eigenvalues are 3 and −1. Although every entry is positive, q(1,−1) = −2. Positive entries do not imply positive definiteness. Conversely, positive definiteness permits negative off-diagonal entries: [[2,−1],[−1,2]] has eigenvalues 1 and 3.

### Investigation: measure directional response

Here A = diag(a,b). The blue vector u is unit length; amber is Au. The rose point is the orthogonal projection R(u)u of Au onto the line through u. The teal segment is the remaining perpendicular component. Signed projection, not the length ‖Au‖, measures R(u).

```mathviz
scene "Rayleigh quotient as signed projection";
domain -4 4;
range -4 4;
coordinates equal;
param a = 3 from -3 to 3;
param b = 1 from -3 to 3;
param phi = 0.7 from 0 to 6.283185;
parametric unit(x) = (cos(x),sin(x)) from 0 to 6.283185 color blue;
parametric image(x) = (a*cos(x),b*sin(x)) from 0 to 6.283185 color amber;
vector u = (cos(phi),sin(phi)) color blue;
vector action = (a*cos(phi),b*sin(phi)) color amber;
point projection = ((a*cos(phi)^2+b*sin(phi)^2)*cos(phi),(a*cos(phi)^2+b*sin(phi)^2)*sin(phi)) color rose;
segment remainder from ((a*cos(phi)^2+b*sin(phi)^2)*cos(phi),(a*cos(phi)^2+b*sin(phi)^2)*sin(phi)) to (a*cos(phi),b*sin(phi)) color teal;
```

**Predict → Manipulate → Explain → Transfer.** Predict where the teal segment disappears. Sweep phi, then set a = b, and finally a = −b ≠ 0. Explain why a vanished remainder means an eigenvector, including a zero eigenvalue. Find a direction with R(u) = 0 but Au ≠ 0. Transfer: can that happen for a positive semidefinite matrix? The eigen-coordinate sum shows that q(x) = 0 then forces Ax = 0.

## Exercises

1. **Foundation.** Write 5x²−6xy+5y² as a symmetric matrix form. Find an orthonormal eigenbasis.
2. **Foundation.** Classify diag(2,0,5), diag(2,−1,5), and −I₃ by sign. Describe their kernels.
3. **Core.** For q(x,y) = 5x²−6xy+5y², describe q = 8 geometrically.
4. **Core.** Prove a positive definite matrix is invertible and its inverse is positive definite.
5. **Core.** For A = diag(−2,1,4), find the exact range of R and all vectors attaining its endpoints.
6. **Core.** Give an invertible symmetric matrix and nonzero x satisfying xᵀAx = 0. Explain why this is consistent with invertibility.
7. **Stretch.** Prove a symmetric 2 × 2 matrix [[a,b],[b,c]] is positive definite exactly when a > 0 and ac−b² > 0.
8. **Stretch.** If symmetric A satisfies m‖x‖² ≤ xᵀAx ≤ M‖x‖² for every x, prove every eigenvalue lies in [m,M]. Prove the converse.

9. **Core.** Find the positive definite square root of A=[[10,6],[6,10]]. Give sharp constants bounding xᵀAx by multiples of ‖x‖² and identify equality directions.
10. **Stretch.** Construct an infinite family of real nonsymmetric matrices B with B²=I₂. Explain why this does not contradict uniqueness of the positive definite square root of I, and classify all symmetric square roots of I using the spectral theorem.

<details><summary>Hints</summary>

1. Mixed terms count twice; try (1,1) and (1,−1).
2. Read signs coordinate by coordinate.
3. First use Exercise 1; divide each principal-coordinate square by its allowed maximum.
4. Diagonalize and reciprocate eigenvalues.
5. Use weighted averages and equality conditions.
6. Opposite signs can cancel without either output component vanishing.
7. Complete the square; test both a coordinate vector and the minimizing x for a fixed y.
8. Substitute eigenvectors, then expand an arbitrary vector in an orthonormal eigenbasis.


9. **Hint 1.** Use (1,1) and (1,−1) as eigenvectors. **Hint 2.** Take the positive square roots of the eigenvalues before rebuilding the matrix.
10. **Hint 1.** Try B=[[1,t],[0,−1]]. **Hint 2.** A symmetric root has orthogonal eigenvectors and eigenvalues whose squares are one; positive definiteness allows only one sign.

</details>

<details><summary>Full solutions</summary>

1. A = [[5,−3],[−3,5]]. The unit vectors (1,1)/√2 and (1,−1)/√2 have eigenvalues 2 and 8. They are perpendicular and span the plane.
2. The first is positive semidefinite but not definite; its kernel is span{(0,1,0)}. The second is indefinite with zero kernel. The third is negative definite with zero kernel: its form is −‖x‖².
3. In the eigenbasis, 2z₁²+8z₂² = 8, or z₁²/4+z₂² = 1. Semiaxes have lengths 2 along (1,1) and 1 along (1,−1), centered at the origin.
4. Write A = QDQᵀ with λᵢ > 0. Therefore D and A are invertible, and A⁻¹ = QD⁻¹Qᵀ is symmetric with positive eigenvalues 1/λᵢ. Its form is positive for every nonzero vector.
5. The range is [−2,4]. The minimum occurs exactly on nonzero multiples of (1,0,0), and the maximum on nonzero multiples of (0,0,1). Every intermediate value occurs for unit vectors (cos(t),0,sin(t)), whose quotient is −2+6sin²(t).
6. Take A = diag(1,−1) and x = (1,1). Then Ax = (1,−1) ≠ 0 but xᵀAx = 0. Invertibility excludes Ax = 0 for nonzero x; it does not exclude Ax perpendicular to x.
7. Necessity: evaluating at (1,0) gives a > 0. Evaluating at (−b/a,1) gives c−b²/a > 0, hence ac−b² > 0. Sufficiency follows from q = a(x+by/a)² + (c−b²/a)y²: both coefficients are positive, and both squares vanish together only at the origin.
8. For a unit eigenvector uᵢ, the assumed bounds give m ≤ uᵢAuᵢ = λᵢ ≤ M. Conversely, writing x = Σ zᵢuᵢ gives q(x) = Σ λᵢzᵢ² between mΣ zᵢ² and MΣ zᵢ², which are the required bounds.


9. Eigenvalues are 16 along (1,1) and 4 along (1,−1). Taking their positive square roots gives A^(1/2)=[[3,1],[1,3]], whose square is [[10,6],[6,10]]. Thus 4‖x‖²≤xᵀAx≤16‖x‖². For nonzero x, equality on the left occurs exactly along (1,−1) and on the right exactly along (1,1). The root's eigenvalues four and two are positive, so it is the required positive definite root.
10. For any real t≠0, B=[[1,t],[0,−1]] is nonsymmetric and B²=[[1,t−t],[0,1]]=I₂. It is not positive definite: its form at e₂ is −1. Any symmetric square root has form Q diag(ε₁,ε₂)Qᵀ with orthogonal Q and εᵢ∈{−1,1}, because its real eigenvalues square to one. Conversely each such matrix squares to I. Positive definiteness forces both signs positive and hence the root I. The symmetry and positivity hypotheses are doing real work.

</details>

## Positive square roots and an exact geometric factorisation

The spectral theorem does more than remove mixed quadratic terms. It lets us build other matrices by applying scalar functions to eigenvalues, while retaining explicit hypotheses. The positive square root is a useful first example because it turns a positive energy into an ordinary squared length.

**Theorem 16.1 (Unique positive definite square root).** If A is a real symmetric positive definite matrix, there is a unique real symmetric positive definite matrix R satisfying R²=A.

*Proof.* Write A=Q diag(λ₁,…,λₙ)Qᵀ with λᵢ>0. Define R=Q diag(√λ₁,…,√λₙ)Qᵀ. It is symmetric, its eigenvalues are positive, and multiplying the factors gives R²=A.

For uniqueness, suppose a symmetric positive definite B also satisfies B²=A. Then BA=B³=AB, so B preserves every eigenspace of A: if Ax=λx, then A(Bx)=B(Ax)=λBx. On such an eigenspace, B remains symmetric and positive definite, so it has an orthonormal eigenbasis there. Its eigenvalues μ are positive and satisfy μ²=λ, hence all equal √λ. Thus B acts as √λ times the identity on each A-eigenspace. Those eigenspaces span the entire space, so B equals the constructed R. ∎

The uniqueness proof handles repeated eigenvalues. Although an orthonormal basis within a repeated eigenspace is not unique, the scalar action √λ on that whole space is unique. Consequently the result does not depend on a numerical routine choosing particular eigenvectors inside a tied eigenspace.

For every x, the identity xᵀAx=‖Rx‖² follows because RᵀR=R²=A. The ellipsoid xᵀAx=1 is therefore the inverse image of the unit sphere under R. A positive energy defines a geometry in which its own unit ellipsoid becomes round. This is also why a nonsingular change of coordinates can alter coordinate entries while retaining positivity of a form.

### Worked example 3: a square root with coupled coordinates

Take A=[[5,4],[4,5]]. Its unit eigenvectors are (1,1)/√2 and (1,−1)/√2, with eigenvalues nine and one. Taking positive square roots gives

R=(1/2)[[3+1,3−1],[3−1,3+1]]=[[2,1],[1,2]].

Multiplication verifies R²=[[5,4],[4,5]], and the positive eigenvalues three and one show that this is the positive definite root. Thus q(x,y)=5x²+8xy+5y² equals (2x+y)²+(x+2y)². The mixed term is not an obstacle to positivity: the representation as a sum of two squares, vanishing together only at zero, proves positivity directly.

On q=1, the semiaxis along (1,1) has length 1/3 and the perpendicular semiaxis has length one. The map R carries that ellipse to the unit circle. This calculation links eigenvalue square roots, an exact factorisation of a quadratic expression and the geometric contour.

## Congruence is different from similarity

Changing coordinates x=Sz transforms a quadratic form to zᵀ(SᵀAS)z. This is a congruence, with Sᵀ on the left, whereas changing a linear map's matrix uses the similarity S⁻¹AS. For orthogonal S the two operations coincide, but in general they answer different questions.

If S is invertible and A is positive definite, then z≠0 implies Sz≠0, so zᵀSᵀASz>0. Thus congruence preserves positivity. It need not preserve eigenvalues: scaling coordinates changes their lengths relative to the ordinary coordinate metric. For example, A=I and S=diag(2,1) give SᵀAS=diag(4,1), still positive definite but with different eigenvalues. In contrast, S⁻¹IS=I has unchanged eigenvalues.

A triangular factor gives another useful representation. For A=[[a,b],[b,c]] with a>0 and ac−b²>0, let R have rows (√a,b/√a) and (0,√(c−b²/a)). Direct multiplication gives RᵀR=A. Both square roots are real and positive under the stated conditions. This is a two-dimensional Cholesky factorisation. Its R is triangular, while the positive square root in Theorem16.1 is symmetric; both convert the same quadratic form into a squared norm but are generally different matrices.

The distinction prevents a common overstatement: uniqueness of the symmetric positive root does not mean that every factor B satisfying BᵀB=A must equal that root. Multiplying such a B on the left by an orthogonal matrix preserves BᵀB. Each uniqueness statement must specify which structure, diagonal signs or symmetry selects its representative.

## Sources

These added explanations and examples are original. Complementary primary reading is Gilbert Strang, MIT OpenCourseWare, [Symmetric Matrices and Positive Definiteness](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/symmetric-matrices-and-positive-definiteness/), and Sheldon Axler's [*Linear Algebra Done Right*](https://linear.axler.net/LADR4e.pdf), the spectral-theorem and positive-operator sections. Consulted 13 November 2026.

## Summary

Symmetry supplies an orthonormal real eigenbasis and turns a quadratic form into a sum of signed squares. Its eigenvalues determine positivity, flat directions and exact Rayleigh bounds. Positive definite matrices have a unique symmetric positive definite square root, while triangular factors can encode the same energy in another form. Quadratic coordinate changes use congruence rather than general similarity. Keeping these distinctions explicit prepares the rectangular stretching geometry of the singular value decomposition.
