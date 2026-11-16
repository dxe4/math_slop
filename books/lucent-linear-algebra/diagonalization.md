# 14. Diagonalization and the future of an iteration

**Prerequisites:** Chapter 13, change of basis, and geometric sequences. **Learning goals:** decide when a matrix is diagonalizable; calculate powers efficiently; explain failure through a defective matrix; classify discrete dynamics with appropriate assumptions.

**Study route:** two sessions of 60–90 minutes. First establish the change-of-coordinates argument. Then use the laboratories to connect a theorem about powers with trajectories through a state space.

## Coordinates that separate the problem

Suppose an n×n matrix A has an eigenvector basis v1,…,vn, with corresponding eigenvalues λ1,…,λn. Put these vectors into the columns of P and the eigenvalues onto the diagonal of D. Multiplication column by column gives AP=PD. Because a basis makes P invertible,

A=PDP⁻¹, or equivalently P⁻¹AP=D.

This is **diagonalization**. P⁻¹ converts ordinary coordinates into eigenvector coordinates; D scales each coordinate separately; P converts the result back. The order matters: applying P first to an ordinary-coordinate input generally describes a different operation.

Conversely, if P⁻¹AP=D is diagonal, AP=PD says every column of P is an eigenvector with the corresponding diagonal entry as eigenvalue. Its columns form a basis. We have proved the exact criterion: **A is diagonalizable over a field precisely when its vector space has a basis of eigenvectors over that field.**

Equivalently, the characteristic polynomial must split into linear factors over that field, and every eigenvalue must have geometric multiplicity equal to algebraic multiplicity. Over R, a rotation through an angle that is not an integer multiple of π already fails the splitting condition. Over C it may succeed.

## Why distinct eigenvalues are enough

Eigenvectors associated with distinct eigenvalues are linearly independent. Here is an induction proof, including the step hidden by a plane drawing. Suppose the result holds for m−1 vectors, and

c1v1+⋯+cmvm=0.

Apply A−λmI. The last term disappears, leaving c1(λ1−λm)v1+⋯+c(m−1)(λ(m−1)−λm)v(m−1)=0. By the induction hypothesis each coefficient is zero. Distinctness gives ci=0 for i<m, and the original equation then gives cm=0. The one-vector starting case holds because an eigenvector is nonzero.

Thus n distinct eigenvalues guarantee diagonalization. They are sufficient, not necessary: I has only eigenvalue 1, yet every basis diagonalizes it. Repeated eigenvalues require investigating eigenspace dimensions, not guessing failure from the characteristic polynomial.

## Worked example: calculating a large power

For A with rows (3,1),(1,3), choose v1=(1,1), v2=(1,−1). Then P has rows (1,1),(1,−1), P⁻¹=(1/2)P, and D=diag(4,2).

Adjacent inverse factors cancel in repeated multiplication, giving Aⁿ=PDⁿP⁻¹ for every integer n≥0. Therefore

Aⁿ=(1/2) times the matrix with rows (4ⁿ+2ⁿ,4ⁿ−2ⁿ), (4ⁿ−2ⁿ,4ⁿ+2ⁿ).

For an initial state x0=(2,0), the eigenvector coordinates are (1,1), so x_n=4ⁿ(1,1)+2ⁿ(1,−1). The first direction eventually dominates: x_n/4ⁿ tends to (1,1). The state itself does not converge; its norm grows. Convergence of a normalized direction is different from convergence of the original sequence.

In n dimensions the same calculation gives x_n=Σ ci λiⁿ vi. Each coefficient ci is set by the initial state. If the coefficient of a rapidly growing mode is zero, that particular trajectory can avoid it completely.

## Laboratory 1: decay, reversal, and escape

The arrows below represent u and v after rotation by θ, and the rose point is the state after k=floor(n) iterations. The initial state is u+v. The eigenvalues are a and b; θ changes the basis without changing them.

```mathviz
scene "Separate an iteration into two independent modes";
domain -8 8;
range -8 8;
coordinates equal;
param a = 0.8 from -1.15 to 1.15;
param b = 0.3 from -1.15 to 1.15;
param theta = 0.6 from -3.14 to 3.14;
param n = 1 from 1 to 12;
vector u = (cos(theta),sin(theta)) color teal;
vector v = (-sin(theta),cos(theta)) color blue;
point initial = (cos(theta)-sin(theta),sin(theta)+cos(theta)) color amber;
point state = (a^floor(n)*cos(theta)-b^floor(n)*sin(theta),a^floor(n)*sin(theta)+b^floor(n)*cos(theta)) color rose;
```

**Predict:** classify a=0.8, −0.8, 1, and 1.1 while b=0.3. **Manipulate:** increase n and identify alternation, decay, persistence, and growth. The control selects positive integer steps through `floor(n)`; the amber point separately shows the n=0 state defined by A⁰=I. This also keeps the formula defined when a or b is zero. **Explain:** account for the four behaviors with powers of a, including its sign. **Transfer:** edit the state formula so the coefficient of the a-mode is zero, and update the initial point to `(-sin(theta),cos(theta))`. Explain why even a>1 then produces a decaying particular trajectory.

The display uses a finite time window. A point that appears stationary might merely be changing slowly, and a small growing coefficient might take many steps to become visible. Formulas settle the long-term claim.

## Stability: state the quantifier

For a diagonalizable real matrix with real eigenvalues, every trajectory tends to zero exactly when every |λi|<1. Sufficiency follows because each term ciλiⁿvi tends to zero. Necessity follows by choosing an eigenvector as initial state: if |λi|≥1, that trajectory does not tend to zero.

All trajectories are bounded if every |λi|≤1, under the same diagonalizability assumption. A λ=1 mode persists; a λ=−1 mode alternates. Thus boundedness does not imply convergence. These statements extend over C using complex modulus, interpreted in real invariant planes when the original matrix is real.

The condition must involve **every initial state**. A matrix can have an unstable direction while one specially chosen trajectory decays. Conversely, near-parallel eigenvectors can produce a substantial temporary excursion even when all eigenvalues lie inside the unit circle. Eigenvalues describe eventual rates, while the coordinate change can amplify intermediate behavior.

## Worked example: when diagonalization fails

Let J have rows (1,s),(0,1), where s≠0. Its only eigenvalue is 1, but (J−I)(x,y)=(sy,0) forces y=0. There is no eigenvector basis. Writing J=I+N gives N²=0, so multiplication, or the binomial theorem, yields

Jⁿ=I+nN, with rows (1,ns),(0,1).

Starting from (0,1), the state is (ns,1), which is unbounded. Both eigenvalues have modulus one: dropping diagonalizability from the earlier boundedness claim would make that claim false.

More generally, B with rows (r,s),(0,r) satisfies Bⁿ=rⁿI+n rⁿ⁻¹N for n≥1, where N has rows (0,s),(0,0). For 0<r<1, both rⁿ and nrⁿ⁻¹ tend to zero. The state can first move away before returning. At r=1, the decay disappears and the same coupling causes linear drift. These matrices are examples of **Jordan blocks**, which replace pure powers by powers multiplied by polynomials.

## Laboratory 2: temporary growth and a boundary case

The amber path joins successive states from x0=(0,1); its line segments are guides between discrete times. The rose point selects the current integer step. The parameter r stays positive, so the formula has no division by zero.

```mathviz
scene "A repeated eigenvalue can hide drift";
domain -6 6;
range -6 6;
coordinates equal;
param r = 0.9 from 0.2 to 1;
param s = 0.2 from -0.2 to 0.2;
param n = 0 from 0 to 25;
parametric orbit(x) = (floor(x)*s*r^(floor(x)-1),r^floor(x)) from 0 to 25 color amber;
point initial = (0,1) color teal;
point state = (floor(n)*s*r^(floor(n)-1),r^floor(n)) color rose;
```

**Predict:** compare r=0.9 and r=1 at step 25. **Manipulate:** vary r near one, then reverse s. **Explain:** identify the decaying factor and the growing factor in nsrⁿ⁻¹. **Transfer:** edit the initial condition to (1,0), giving state (rⁿ,0); explain why this starting vector never exhibits drift.

## Exercises

1. **Foundation.** Diagonalize A with rows (2,1),(0,3), and verify AP=PD.
2. **Foundation.** Give a diagonalizable 3×3 matrix with a repeated eigenvalue, and specify an eigenvector basis.
3. **Core.** For the worked matrix with rows (3,1),(1,3), find Aⁿ(1,−1) and Aⁿ(1,0).
4. **Core.** Classify convergence to zero and boundedness for all trajectories of diag(0.5,−1,0.8).
5. **Core.** For J with rows (1,2),(0,1), calculate J¹⁰(3,−1) and characterize all bounded trajectories.
6. **Core.** Show that A=PDP⁻¹ implies f(A)=Pf(D)P⁻¹ for any polynomial f.
7. **Stretch.** Prove that nrⁿ⁻¹→0 for 0<r<1 without differentiating a sequence.
8. **Stretch.** A has eigenvalues 2 and 1/2 with independent eigenvectors v,w. Characterize exactly the initial states whose trajectories tend to zero.

9. **Core.** For A=[[1,1/2],[0,1/2]], find Aⁿ and the limit of Aⁿ(2,−1) as n→∞. Identify the limiting projection's range and kernel and decide whether it is an orthogonal projection.
10. **Stretch.** Suppose a square matrix satisfies (A−I)(A−rI)=0 for a real r≠1. Prove E=(A−rI)/(1−r) is a projection and derive Aⁿ=E+rⁿ(I−E) for integers n≥1. State what happens when |r|<1, including r=0.

<details>
<summary>Hints</summary>

1. Solve the kernels for 2 and 3. 2. A diagonal example suffices. 3. Express each input in the eigenvector basis. 4. Inspect the second coordinate. 5. Use Jⁿ=I+n(J−I). 6. Use cancellation for each power, including the constant term. 7. Compare successive terms and bound the ratio by a fixed number less than one after sufficiently many steps. 8. Write x0=cv+dw.


9. **Hint 1.** Eigenvectors for 1 and 1/2 are (1,0) and (−1,1). **Hint 2.** Expand (u,v)=(u+v)(1,0)+v(−1,1).
10. **Hint 1.** Expand the assumed polynomial equation to simplify (A−rI)². **Hint 2.** Write A=E+r(I−E); the two projection factors have zero mixed products.

</details>

<details>
<summary>Complete solutions</summary>

1. For eigenvalue 2 choose (1,0); for 3 choose (1,1). Thus P has rows (1,1),(0,1) and D=diag(2,3). Both AP and PD have columns (2,0),(3,3). P is invertible because its determinant is one, establishing A=PDP⁻¹.
2. diag(2,2,3) has repeated eigenvalue 2 and eigenvector basis e1,e2,e3. Repetition permits diagonalization when enough independent vectors exist.
3. The first input already lies in E2, giving 2ⁿ(1,−1). The second is half the sum of (1,1) and (1,−1), giving (1/2)(4ⁿ+2ⁿ,4ⁿ−2ⁿ).
4. All trajectories are bounded because each coordinate has a factor with modulus at most one. They do not all tend to zero: (0,1,0) alternates. A trajectory converges to zero exactly when its second initial coordinate is zero.
5. J¹⁰ has rows (1,20),(0,1), so J¹⁰(3,−1)=(−17,−1). In general Jⁿ(x,y)=(x+2ny,y), which is bounded exactly when y=0. Those states are fixed.
6. If f(t)=Σ ak tᵏ, then f(A)=Σ akPDᵏP⁻¹=P(Σ akDᵏ)P⁻¹. For k=0, I=PIP⁻¹, so the constant term also fits. Linearity and associativity justify factoring.
7. Let un=nrⁿ⁻¹ for n≥1. Its ratio u(n+1)/un=r(1+1/n) tends to r<1. Choose q strictly between r and 1; for n≥N the ratio is at most q. Induction gives u(N+k)≤uNqᵏ, which tends to zero, so un→0.
8. x_n=c2ⁿv+d2⁻ⁿw. If c=0, it tends to zero. Conversely, applying the linear coordinate map P⁻¹ to a sequence tending to zero gives coordinates tending to zero; its first coordinate c2ⁿ can do that only if c=0. The required initial states are exactly span{w}.


9. For all n≥0, Aⁿ=[[1,1−2⁻ⁿ],[0,2⁻ⁿ]]. Thus Aⁿ(2,−1)=(1+2⁻ⁿ,−2⁻ⁿ) tends to (1,0). The limiting matrix E=[[1,1],[0,0]] has range span{(1,0)} and kernel span{(−1,1)}. It is idempotent but not symmetric, so it is not the Euclidean orthogonal projection onto its range. The complement removed by this limit is the decaying eigenspace, which need not be perpendicular to the persistent one.
10. The hypothesis gives A²−(1+r)A+rI=0, so (A−rI)²=(1−r)(A−rI) and E²=E. Also A=E+r(I−E), E(I−E)=(I−E)E=0 and (I−E)²=I−E. Multiplying repeatedly gives Aⁿ=E+rⁿ(I−E) for n≥1. If |r|<1, these powers tend to E. When r=0, A=E and every positive power already equals E; no expression 0⁰ is needed. This conclusion requires the polynomial identity, not merely a statement that the two numbers appear among a matrix's eigenvalues.

</details>

**Readiness check:** distinguish a statement about one trajectory from a statement about all trajectories, and explain precisely where an eigenvector basis enters the argument. Next, complex eigenvalues reveal rotating modes invisible to real eigenvectors.

## Uniform bounds and the meaning of an eventual limit

An eigenvector expansion first describes one initial state. To infer stability, we need a bound valid for all nearby initial states with one constant. The distinction matters when the eigenvector matrix is far from orthogonal: a small ordinary-coordinate vector may require large cancelling eigenvector coefficients.

**Theorem 14.1 (A uniform bound from a real eigenbasis).** Let A have a real eigenvector basis v₁,…,vₙ with eigenvalues λᵢ. Put ρ=max|λᵢ|. There is a finite constant C, depending only on the chosen eigenbasis, such that ‖Aᵏx‖≤Cρᵏ‖x‖ for all x and integers k≥0 when ρ>0. Consequently ρ<1 implies uniform boundedness and convergence of every trajectory to zero; ρ≤1 implies boundedness of every trajectory.

*Proof.* Let wᵢᵀ be row i of P⁻¹, where P has columns vᵢ. Then the coefficient cᵢ of x in this basis equals wᵢᵀx, so Cauchy–Schwarz gives |cᵢ|≤‖wᵢ‖‖x‖. Applying the triangle inequality to Aᵏx=Σcᵢλᵢᵏvᵢ gives the bound with C=Σ‖wᵢ‖‖vᵢ‖. This constant is finite and independent of x,k. If 0<ρ<1 the scalar bound tends to zero; if ρ≤1 it stays at most C‖x‖. If ρ=0, diagonalisation gives A=0, so every trajectory is zero after its first step and is bounded from the start. ∎

For example, with ρ≤1, given a required state bound ε>0 one may choose initial norm less than ε/C. That is a uniform statement over every initial vector in that ball. It is stronger than observing that a selected trajectory stays small. The constant C above is a convenient sufficient bound rather than necessarily the smallest possible amplification constant.

If all eigenvalues have modulus below one except some equal to one, every trajectory converges to its component in E₁. If there are also eigenvalues −1, those components alternate unless their initial coefficients vanish. A limit theorem needs both the spectral conditions and the correct statement about initial data. Boundedness alone leaves oscillatory modes possible.

### Worked example 3: a nonorthogonal limiting projection

For A=[[1,1/2],[0,1/2]], use v₁=(1,0) and v₂=(−1,1). Every (u,v) equals (u+v)v₁+v v₂. Therefore

Aᵏ(u,v)=(u+v)(1,0)+2⁻ᵏv(−1,1)=(u+(1−2⁻ᵏ)v,2⁻ᵏv).

The limit is (u+v,0). It fixes the persistent eigenline and removes the decaying eigenline. Its matrix is E=[[1,1],[0,0]], and E²=E. But E(0,1)=(1,0), whereas the orthogonal projection of (0,1) onto the horizontal axis is zero. Thus a dynamical limit can be a projection along a nonperpendicular complementary subspace.

The left vector (1,1) explains the coefficient u+v: (1,1)A=(1,1), so that sum is conserved. The ordinary coordinate sum supplies information that the right eigenvector (1,0) alone does not. This anticipates the distinction between conserved left eigenvectors and stationary right eigenvectors in the Markov chapter.

## Polynomial projections can work without guessing eigenvectors

Suppose (A−I)(A−rI)=0 with r≠1. Defining E=(A−rI)/(1−r) gives the projection and power formula of Exercise10. Here range(E) lies in ker(A−I), since (A−I)E=0, while range(I−E) lies in ker(A−rI). Every vector is the sum Ex+(I−E)x, and the two ranges intersect only at zero because r≠1. The polynomial identity has therefore constructed the decomposition itself.

This is a useful converse to an eigenbasis computation. When a polynomial with distinct linear factors annihilates A, its algebra can separate modes even before individual eigenvectors have been tabulated. With a repeated factor, such as (A−I)²=0, the same conclusion need not hold: the nonzero nilpotent coupling in the earlier Jordan example creates drift. Annihilating polynomials encode the exceptional repeated-root behavior that eigenvalue lists alone miss.

## Sources

The additional proofs and examples are original. Complementary primary material is Gilbert Strang, MIT OpenCourseWare, [Diagonalization and Powers of A](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/diagonalization-and-powers-of-a/), consulted 13 November 2026.

## Summary

Diagonalisation separates matrix action into scalar modes precisely when an eigenvector basis exists over the chosen field. Powers then give both individual trajectories and uniform bounds, with a basis-dependent amplification constant. Persistent modes can produce a nonorthogonal limiting projection, while modulus-one oscillations can prevent convergence. A defective matrix may add polynomial growth even when its eigenvalues appear harmless. Polynomial identities provide another exact method for constructing projections and reducing powers. Complex eigenpairs next describe rotating real planes.
