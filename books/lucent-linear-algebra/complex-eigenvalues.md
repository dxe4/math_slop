# 15. Complex eigenvalues and rotations

## Purpose and preparation

Allow 90–120 minutes. You need real eigenvalues, change of basis, and trigonometry. You should calculate complex eigenpairs, explain their real geometry, and distinguish repeated multiplication from continuous evolution.

A quarter-turn has no invariant real line: every nonzero vector turns through 90°. Nevertheless, its characteristic polynomial has degree two. Complex numbers supply the missing eigenvalues without making the original transformation or its inputs imaginary. They encode behavior within a real invariant plane.

## Complex multiplication is plane geometry

A complex number z = x + iy corresponds to the real vector (x, y), where i² = −1. Its conjugate is z̄ = x − iy and its modulus is |z| = √(x² + y²). Multiplying z by w = a + ib gives

wz = (ax − by) + i(bx + ay).

Thus multiplication by w is the real matrix

C = [[a, −b], [b, a]].

For w ≠ 0, write w = r(cos θ + i sin θ), where r = |w| and θ is an angle determined modulo 2π. The addition formulas show that multiplying complex numbers multiplies their moduli and adds their angles. Consequently C scales every length by r and rotates every vector through θ. Its determinant is a² + b², so every nonzero such map preserves orientation.

Euler's formula e^(iθ) = cos θ + i sin θ makes this compact: w = re^(iθ). One justification expands the exponential, sine, and cosine in their convergent power series; even and odd powers of i produce the cosine and sine terms. Euler's formula describes circular motion, not a new definition of an angle.

### Worked example: a scaled quarter-turn

For C = [[0, −2], [2, 0]], the characteristic equation is λ² + 4 = 0, giving λ = ±2i. Over the complex numbers, v = (1, −i) satisfies Cv = (2i, 2) = 2iv. Its conjugate is an eigenvector for −2i. Over the reals, C sends (3, 1) to (−2, 6): a quarter-turn and doubling. After two applications C² = −4I; after four, C⁴ = 16I. “No real eigenvectors” does not mean “no understandable geometry.”

## Investigation 1: multiplication you can manipulate

The blue circle is the original unit circle; teal is its image. The amber vector (1, 0) becomes the rose vector (a, b). The transformed coordinate grid supplies more reference points. Edit the image parametrization to test a conjecture, then restore it before continuing.

```mathviz
scene "A complex number acting on a real plane";
domain -4 4;
range -4 4;
coordinates equal;
param a = 0 from -2 to 2;
param b = 1 from -2 to 2;
transform C = (a, -b, b, a);
parametric unit(x) = (cos(x), sin(x)) from 0 to 2*pi color blue;
parametric image(x) = (a*cos(x)-b*sin(x), b*cos(x)+a*sin(x)) from 0 to 2*pi color teal;
vector initial = (1, 0) color amber;
vector result = (a, b) color rose;
```

**Predict:** For a = 0, b = −1, where will the amber vector land? What happens to orientation?

**Manipulate:** Set those values, then try (a, b) = (1, 1), (−1, 0), and (0, 0). Record the image radius and whether any real line is invariant.

**Explain:** Derive CᵀC = (a² + b²)I. Explain why the image is a circle, including the collapsed case, and why clockwise rotation still preserves orientation.

**Transfer:** Replace the second diagonal entry by −a and update the image formula consistently. Determine when the modified map reverses orientation. The displayed grid alone is evidence; the determinant supplies the proof.

## Why complex eigenvalues arrive in pairs

Let A be a real matrix, but allow complex coordinates in Av = λv. Taking conjugates gives A v̄ = λ̄ v̄ because the entries of A are real. Therefore every nonreal eigenvalue has its conjugate partner. This argument works in every dimension and proves the correspondence between eigenvectors, not merely between roots of a polynomial.

Suppose λ = α + iβ, with β ≠ 0, and v = p + iq for real vectors p, q. Equating real and imaginary parts yields

Ap = αp − βq, Aq = βp + αq.

These equations show that span(p, q) is invariant under A. The vectors are independent: neither can vanish, and if q = cp, substitution would give β(1 + c²)p = 0, which is impossible. In the real basis (p, −q), the restriction of A therefore has matrix

[[α, −β], [β, α]].

This is the central interpretation: a nonreal eigenpair identifies a real invariant plane. Its coordinates evolve by rotation and scaling.

### Worked example: the coordinates matter

Consider A = [[0, −2], [1/2, 0]]. Again λ = ±i and A² = −I. Choose p = (2, 0), q = (0, −1); then v = p + iq is an eigenvector for i. Relative to (p, −q), A is a quarter-turn.

However, A sends the unit vector (1, 0) to (0, 1/2), and (0, 1) to (−2, 0). It does not preserve ordinary Euclidean lengths. The change of basis S = [[2, 0], [0, 1]] satisfies A = S [[0, −1], [1, 0]] S⁻¹. Circles in the new coordinates correspond to ellipses in the original plane.

This is a counterexample to “complex eigenvalues of modulus one imply a Euclidean rotation.” That conclusion needs additional structure, such as an orthonormal basis for the rotation block. Eigenvalues also cannot exclude growth from nontrivial Jordan blocks in higher dimensions.

## Iteration and continuous motion

For discrete iteration xₙ₊₁ = Cxₙ, the multiplier after n steps is wⁿ = rⁿe^(inθ). Decay depends on r < 1, and growth on r > 1.

For the differential equation x′ = Bx with B = [[α, −β], [β, α]], instead write z′ = (α + iβ)z. Its solution is

z(t) = e^(αt)(cos(βt) + i sin(βt))z(0).

Differentiation verifies the equation and initial condition directly. Now decay depends on α < 0 and growth on α > 0; β is angular velocity. These are different tests because B describes instantaneous velocity, while C describes an entire time step. Sampling the differential equation one unit apart gives C = eᴮ, with eigenvalues e^(α ± iβ).

## Investigation 2: build a spiral simulation

The rose vector is the current state starting from (1, 0); teal shows the trajectory through time 4. The amber segment is velocity at the current state. Playback changes time while keeping the model fixed. Large positive α can carry the trajectory outside the viewport: leaving the screen is not disappearance.

```mathviz
scene "Growth and rotation are separate controls";
domain -4 4;
range -4 4;
coordinates equal;
param alpha = -0.2 from -0.7 to 0.7;
param beta = 1 from -3 to 3;
param t = 0 from 0 to 4;
parametric orbit(x) = (exp(alpha*x)*cos(beta*x), exp(alpha*x)*sin(beta*x)) from 0 to 4 color teal;
vector state = (exp(alpha*t)*cos(beta*t), exp(alpha*t)*sin(beta*t)) color rose;
segment velocity from (exp(alpha*t)*cos(beta*t), exp(alpha*t)*sin(beta*t)) to (exp(alpha*t)*(cos(beta*t)+alpha*cos(beta*t)-beta*sin(beta*t)), exp(alpha*t)*(sin(beta*t)+beta*cos(beta*t)+alpha*sin(beta*t))) color amber;
animate t from 0 to 4 duration 8;
```

**Predict:** Sketch the paths for α = 0, β = 1; α = −0.5, β = 0; and α = 0.3, β = −2.

**Manipulate:** Test each pair. Reverse β without changing α. Pause at t = 1 and compare the velocity with the radius vector.

**Explain:** Prove |z(t)| = e^(αt). Explain why β changes rotation but not radius, and why velocity is tangent to a circle when α = 0.

**Transfer:** Change the initial state to (2, −1). Replace each position by e^(αt)(2cos(βt) + sin(βt), 2sin(βt) − cos(βt)), updating the orbit and velocity too. Derive these expressions before editing.

In three dimensions a real matrix can combine an invariant rotation plane with a real eigendirection. In larger dimensions several such planes can coexist. Their bases need not be orthogonal; a complex eigenpair describes its own invariant plane without promising a decomposition of the entire space into independent planes and lines.

## Length and orthogonality over the complex numbers

When coordinates become complex, transpose alone no longer produces an inner product. For example, w=(1,i) is nonzero but wᵀw=1+i²=0. Instead use the **conjugate transpose**, written w*, which transposes the vector and conjugates each entry. Define the complex inner product by ⟨u,v⟩=u*v. Then w*w=Σ|wⱼ|² is real, nonnegative, and zero only for w=0; its square root defines length. Orthogonality means u*v=0. With this convention the first argument is conjugate-linear and the second is linear. All earlier formulas for real vectors agree with these definitions because conjugating a real number changes nothing. In complex matrix theory, unitary matrices satisfy U*U=I and preserve this length; they play the role that orthogonal matrices play over R.

## Exercises

1. **Foundation.** Express (1 + i)(2 − i) in Cartesian form. Find its modulus in two ways.
2. **Foundation.** Find both eigenvalues of [[3, −4], [4, 3]], its scale factor, and one complex eigenvector.
3. **Core.** Starting at (1, 0), apply [[0, −1/2], [1/2, 0]] four times. Describe the eventual behavior.
4. **Core.** For A = [[0, −2], [1/2, 0]], prove that Q(x, y) = x²/4 + y² is preserved.
5. **Core.** Solve z′ = (−1 + 2i)z, z(0) = 1. Find the radius and time for one revolution.
6. **Stretch.** Explain why every real 3 × 3 matrix has at least one real eigenvalue. Does it necessarily have three independent real eigenvectors?
7. **Stretch.** The real matrix D has block form [[R, I], [0, R]], where R = [[0, −1], [1, 0]]. Show that all eigenvalues have modulus one but some iterates grow unboundedly.
8. **Core.** Let u=(1,−i) and v=(1,i), the complex eigenvectors of a real quarter-turn. Calculate uᵀu, u*u, and u*v. Normalize u and v to build a unitary eigenvector matrix. Explain why its existence does not give a real eigenvector basis.

9. **Core.** For A=[[1,−2],[2,1]], calculate its complex eigenvalues and one eigenvector for each. Find the common Euclidean length multiplier, determinant and the length of Aⁿ(1,0).
10. **Stretch.** Suppose a real 2×2 matrix has nonreal eigenvalues α±iβ, β≠0. Prove there is a positive definite quadratic form Q with Q(Ax)=(α²+β²)Q(x). Explain why this does not force ordinary Euclidean lengths to scale by √(α²+β²).

<details><summary>Hints</summary>

1. Use i² = −1 and |zw| = |z||w|.
2. Compare with multiplication by 3 + 4i.
3. Track radius and angle separately.
4. Substitute the image coordinates.
5. Separate e^(−t) from e^(2it).
6. Inspect the real characteristic polynomial at large positive and negative arguments.
7. Multiply block matrices to conjecture Dⁿ; test an initial vector (0, u).
8. Conjugate −i to i in the row u*. Each vector has norm √2.


9. **Hint 1.** Interpret the matrix as multiplication by 1+2i. **Hint 2.** Try eigenvectors (1,−i) and (1,i), then compute AᵀA.
10. **Hint 1.** Use the real basis made from the real and imaginary parts of an eigenvector. **Hint 2.** If A=SCS⁻¹ with C a rotation-scaling block, set Q(x)=‖S⁻¹x‖².

</details>

<details><summary>Full solutions</summary>

1. The product is 2 − i + 2i − i² = 3 + i. Its modulus is √10. Separately, |1 + i||2 − i| = √2√5 = √10.
2. The characteristic polynomial is (3 − λ)² + 16, so λ = 3 ± 4i. Every length scales by 5. For λ = 3 + 4i, v = (1, −i): Av = (3 + 4i, 4 − 3i) = λv.
3. The successive states are (0, 1/2), (−1/4, 0), (0, −1/8), and (1/16, 0). Each step rotates by π/2 and halves the radius. The states converge to zero although they never equal zero.
4. A(x, y) = (−2y, x/2). Hence Q(A(x, y)) = (−2y)²/4 + (x/2)² = y² + x²/4 = Q(x, y). The preserved level sets are ellipses; ordinary circular distance is not preserved.
5. z(t) = e^(−t)(cos(2t) + i sin(2t)). Its radius is e^(−t), and the angle increases by 2t, giving revolution time π. After that turn the radius is e^(−π), so the trajectory does not close.
6. A real polynomial of odd degree has opposite signs sufficiently far in the two directions. Continuity gives a real root of the characteristic polynomial, hence a real eigenvalue. Independent real eigenvectors need not exist: diag(1, R) has only the first coordinate axis as a real eigendirection when R is a quarter-turn on the other two coordinates.
7. Block triangularity gives characteristic polynomial (λ² + 1)². Induction using RI = IR gives Dⁿ = [[Rⁿ, nRⁿ⁻¹], [0, Rⁿ]]. Starting at (0, u) with u ≠ 0 gives (nRⁿ⁻¹u, Rⁿu), whose Euclidean norm is √(n² + 1)|u| because R preserves length. It grows unboundedly despite every eigenvalue having modulus one. The coupling between the blocks matters.
8. uᵀu=1+(−i)²=0, while u*u=1+i(−i)=2. Also u*v=1+i·i=0. Hence U=(1/√2)[1 1;−i i] has unit-length orthogonal columns, so U*U=I. For R=[0 −1;1 0], Ru=iu and Rv=−iv; therefore U*RU=diag(i,−i). The columns and eigenvalues are complex. No nonzero real vector is an eigenvector of a real quarter-turn, so diagonalization over C has not established diagonalization over R.


9. The characteristic polynomial is (t−1)²+4, so the roots are 1±2i. Direct multiplication shows A(1,−i)=(1+2i,2−i)=(1+2i)(1,−i); conjugation gives the other eigenvector. Since AᵀA=5I, every Euclidean length is multiplied by √5 and det A=5>0. Thus ‖Aⁿ(1,0)‖=5^(n/2). Growth of this norm is distinct from the rotation of its direction.
10. The earlier real/imaginary-part construction gives a real invertible S with A=SCS⁻¹, C=[[α,−β],[β,α]]. Let M=S⁻ᵀS⁻¹ and Q(x)=xᵀMx=‖S⁻¹x‖². This is positive for every nonzero real x. Since CᵀC=(α²+β²)I, Q(Ax)=‖CS⁻¹x‖²=(α²+β²)Q(x). A nonorthogonal S changes circles into ellipses. For A=[[0,−2],[1/2,0]], the form x₁²/4+x₂² is invariant while coordinate-axis unit vectors have different image lengths, so ordinary Euclidean uniform scaling does not follow.

</details>

## A real metric for a complex mode

The phrase “rotation and scaling” is exact in the basis (p,−q) derived above. It does not automatically refer to the original Euclidean geometry. We can describe precisely which geometry is preserved by transporting the length from that basis back to the original coordinates.

**Theorem 15.1 (Quadratic geometry of a real complex block).** Suppose A=SCS⁻¹ with real invertible S and C=[[α,−β],[β,α]], β≠0. Define M=S⁻ᵀS⁻¹. Then M is symmetric positive definite and AᵀMA=(α²+β²)M. Thus its elliptical level sets are preserved when α²+β²=1 and scaled in this metric otherwise.

*Proof.* Transposition shows Mᵀ=M, and xᵀMx=‖S⁻¹x‖²>0 for x≠0 because S is invertible. Also AS=SC and CᵀC=(α²+β²)I. Substitution gives AᵀMA=S⁻ᵀCᵀCS⁻¹=(α²+β²)M. Evaluating the resulting quadratic identity on x proves the level-set statements. ∎

This theorem concerns a real two-dimensional plane. In higher dimensions it applies to each invariant plane supplied by a nonreal eigenpair, using that plane's coordinates. It does not assert that different invariant planes are mutually orthogonal or that such planes together with real eigenvectors always give an ambient basis.

### Worked example 3: a quarter-turn in an elliptical geometry

Let A=[[0,−3],[1/3,0]] and S=diag(3,1). Then A=SRS⁻¹ for the ordinary quarter-turn R=[[0,−1],[1,0]]. The transported quadratic form is Q(x,y)=x²/9+y². Direct substitution gives Q(A(x,y))=Q(−3y,x/3)=y²+x²/9, confirming invariance.

For initial state (3,1), successive states are (−3,1), (−3,−1), (3,−1) and then (3,1). They all lie on Q=2. But the unit input (1,0) becomes (0,1/3), while (0,1) becomes (−3,0). The same matrix therefore has a simple quarter-turn interpretation in one metric and unequal Euclidean stretches in another. Both descriptions are correct once the coordinates and notion of length are stated.

## Unitary preservation and what eigenvalues imply

**Proposition 15.2 (Unitary length preservation).** For a complex square matrix U, the identity U*U=I is equivalent to preservation of the complex Euclidean inner product, and therefore implies length preservation. Every eigenvalue of such a U has modulus one.

*Proof.* If U*U=I, then (Ux)*(Uy)=x*U*Uy=x*y. Conversely, preservation of all inner products, tested on standard basis vectors, says every entry of U*U equals that of I. For an eigenvector v≠0 with Uv=λv, length preservation gives ‖v‖=‖Uv‖=|λ|‖v‖, and division by the positive norm gives |λ|=1. ∎

Preservation of lengths alone also yields inner-product preservation: expand ‖x+y‖² and ‖x+iy‖² to recover respectively the real and imaginary parts of x*y. The conjugation is essential to those expansions. Ordinary transposition would make a nonzero vector such as (1,i) have a zero bilinear self-product and would not define this length.

The reverse eigenvalue implication is false. Modulus-one eigenvalues do not make a matrix unitary: a nonorthogonal similarity of a rotation already gives unequal Euclidean lengths, and a Jordan coupling can even produce unbounded powers. The existing four-dimensional exercise exhibits that second failure directly. Spectral information describes modal factors; a metric statement also depends on eigenvectors and their coordinate geometry.

### Worked example 4: a time step does not determine a unique angular speed

For a continuous system with Bω=[[-1,−ω],[ω,−1]], the one-second evolution map is e⁻¹Rω. Replacing ω by ω+2π leaves that one-second rotation exactly unchanged. Both systems therefore give the same states at every integer second from the same initial state, even though their intermediate trajectories make different numbers of turns.

For example, angular speeds one and 1+2π radians per second are different constants with identical unit-time transition matrices. To infer angular speed from sampled states, the sampling interval and an appropriate restriction on possible frequencies are additional information. Computing an exact matrix power cannot supply an unobserved turn count. This is a model-identification limitation, not an error in the complex exponential formula.

## Sources

These additional arguments and examples are original. Complementary primary reading is Sheldon Axler, [*Linear Algebra Done Right*, fourth edition](https://linear.axler.net/LADR4e.pdf), its complex vector-space and inner-product treatment, consulted 13 November 2026.

## Summary

Complex conjugate eigenpairs of a real matrix describe a real invariant plane. In suitable real coordinates the action is a rotation-scaling block, while nonorthogonal coordinate changes can turn circular geometry into elliptical geometry. Conjugate transpose supplies the positive complex inner product, and unitary maps preserve it. Eigenvalue moduli alone do not guarantee Euclidean length preservation or bounded powers in the presence of defective coupling. Discrete multipliers and continuous rates have different stability tests, and sampled rotations need not identify a unique angular speed.
