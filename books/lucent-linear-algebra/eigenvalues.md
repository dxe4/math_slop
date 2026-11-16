# 13. Eigenvalues: directions a transformation preserves

**Prerequisites:** matrix multiplication, determinants, kernels, and linear independence. **Learning goals:** find eigenvalues and eigenspaces; interpret negative and zero eigenvalues; distinguish algebraic from geometric multiplicity; use triangular structure in higher dimensions.

**Study route:** allow two sessions of 60–90 minutes. Work through the calculations before using the figures. Keep a column for predictions and another for the algebra that confirms or corrects them.

## A question about directions

A matrix usually changes both the length and direction of a vector. Some nonzero vectors have a special relationship with it: their images stay on the same line through the origin. For a square matrix A, an **eigenvector** v and its **eigenvalue** λ satisfy

Av = λv, with v ≠ 0.

When λ is positive, the image points the same way; when λ is negative, it points the opposite way. Its length is |λ| times the original length. When λ=0, the image is the origin. The zero vector cannot be an eigenvector: A0=λ0 holds for every λ and would tell us nothing about A.

An eigenvector is not a unique arrow. If Av=λv and c≠0, then A(cv)=cAv=λ(cv). More generally, all vectors satisfying Av=λv form the **eigenspace** Eλ=ker(A−λI). This subspace includes zero, although its eigenvectors are precisely its nonzero elements. The language distinguishes a useful linear space from the admissible vectors in the definition.

Why care? On an eigenspace, applying a complicated transformation reduces to multiplying by one number. Repeated application gives Aⁿv=λⁿv. We will turn this observation into a method for predicting populations, iterations, and stability in the next chapter.

## Worked example: two preserved lines

Let A have rows (3,1) and (1,3). Direct multiplication gives

A(1,1)=(4,4)=4(1,1), and A(1,−1)=(2,−2)=2(1,−1).

Thus the lines y=x and y=−x are eigenspaces, with eigenvalues 4 and 2. A vector on the first line stretches fourfold; one on the second stretches twofold. The vector (1,0) is not an eigenvector because its image (3,1) is not a multiple of (1,0).

Every vector (x,y) can be written as ((x+y)/2)(1,1)+((x−y)/2)(1,−1). Linearity therefore explains every image using those two simple stretching rules. Finding eigenvectors has exposed coordinates suited to the transformation.

### Laboratory 1: locate the preserved directions

The teal arrow is u, the rose arrow is Au, and the amber circle records unit length. All axes use the same scale.

```mathviz
scene "Which directions survive this matrix?";
domain -5 5;
range -5 5;
coordinates equal;
param theta = 0 from -3.14 to 3.14;
parametric circle(x) = (cos(x),sin(x)) from 0 to 6.283185 color amber;
vector u = (cos(theta),sin(theta)) color teal;
vector image = (3*cos(theta)+sin(theta),cos(theta)+3*sin(theta)) color rose;
parametric first(x) = (x,x) from -3 to 3 color blue;
parametric second(x) = (x,-x) from -3 to 3 color violet;
```

**Predict:** name four angles where both arrows lie on one line. **Manipulate:** move θ near each prediction and compare lengths. **Explain:** prove the preserved directions by solving 3x+y=λx and x+3y=λy. **Transfer:** edit the image to `(-cos(theta),2*sin(theta))` and update the two displayed eigenlines to `(x,0)` and `(0,x)`. Identify which eigendirection reverses and which stretches. Screen alignment suggests a conjecture; the equations establish exactness.

## Finding eigenvalues systematically

Rearrange Av=λv as (A−λI)v=0. A nonzero solution exists exactly when A−λI is singular, equivalently when det(A−λI)=0. We use the monic **characteristic polynomial** pA(t)=det(tI−A); its roots give the same condition. For a 2×2 matrix with rows (a,b),(c,d),

pA(t)=t²−(a+d)t+(ad−bc).

The coefficient a+d is the trace; ad−bc is the determinant. For the previous matrix, pA(t)=t²−6t+8=(t−4)(t−2). Once each root is known, solve its homogeneous system to find the eigenspace. Do not put every root into one system: each eigenvalue has its own kernel.

For λ=4 the equations reduce to −x+y=0, so E4=span{(1,1)}. For λ=2 they reduce to x+y=0, so E2=span{(1,−1)}. These are full descriptions, not merely example eigenvectors.

The calculations work over a chosen number field. A real matrix can lack real eigenvalues: a quarter-turn has pA(t)=t²+1. Complex numbers resolve this in Chapter 15. Until then, claims about real eigenspaces apply only to real roots.

## Repeated roots do not count independent directions

The **algebraic multiplicity** of λ is its multiplicity as a root of pA. Its **geometric multiplicity** is dim(Eλ). For an eigenvalue, geometric multiplicity is at least one and at most algebraic multiplicity.

Consider the family B with rows (2,b),(0,2). Its characteristic polynomial is always (t−2)². Yet (B−2I)(x,y)=(by,0). If b≠0, this forces y=0: there is only one independent eigendirection. If b=0, B=2I, and every nonzero vector is an eigenvector. The repeated root remains while the eigenspace dimension changes.

### Laboratory 2: one root, different eigenspaces

```mathviz
scene "A repeated eigenvalue does not determine its eigenspace";
domain -4 4;
range -4 4;
coordinates equal;
param b = 1 from -2 to 2;
param theta = 0.8 from -3.14 to 3.14;
vector u = (cos(theta),sin(theta)) color teal;
vector image = (2*cos(theta)+b*sin(theta),2*sin(theta)) color rose;
parametric eigenline(x) = (x,0) from -4 to 4 color amber;
```

**Predict:** decide whether reducing b changes the eigenvalues, the eigenvectors, or both. **Manipulate:** compare b=1, b=0, and b=−1 while rotating u. Enter zero exactly to test the exceptional case. **Explain:** use by=0 to account for what you see. **Transfer:** change both diagonal coefficients from 2 to −1 and explain the reversal without changing the eigenspaces.

An almost parallel pair of arrows is not necessarily an eigenvector relation. In this family the determinant of the two column vectors u and Bu is −b sin²(θ), which vanishes exactly when b=0 or sin(θ)=0. This is a numerical experiment with an exact diagnostic.

## Worked example: a three-dimensional triangular matrix

Take T with rows (2,1,0), (0,2,1), (0,0,3). Because tI−T is triangular, its determinant is the product of its diagonal entries: pT(t)=(t−2)²(t−3).

For λ=2, the equations are y=0, z=0, and z=0. Hence E2=span{(1,0,0)}. For λ=3, they are −x+y=0 and −y+z=0, so E3=span{(1,1,1)}. The root 2 has algebraic multiplicity two but geometric multiplicity one. We found only two independent eigenvectors in a three-dimensional space.

For any triangular matrix, the diagonal lists eigenvalues with algebraic multiplicity. It does **not** automatically list eigenvectors: the off-diagonal entries still matter when solving the kernels. This example also explains why our plane drawings cannot settle every higher-dimensional question. The same equations work in n dimensions, where an eigenspace can be a line, plane, or larger subspace.

## Exercises

1. **Foundation.** For D=diag(−2,0,3), describe every eigenspace and the geometric effect on each.
2. **Foundation.** Explain why multiplying an eigenvector by zero breaks the definition, although zero belongs to every eigenspace.
3. **Core.** Find all eigenvalues and eigenspaces of the matrix with rows (4,2),(1,3).
4. **Core.** Compare the algebraic and geometric multiplicities of 5 for 5I in three dimensions and for the matrix with rows (5,1,0),(0,5,1),(0,0,5).
5. **Core.** Prove that eigenvectors for two distinct eigenvalues are independent.
6. **Core.** If A is invertible and Av=λv, find the eigenvalue of A⁻¹ on v. Explain why λ cannot be zero.
7. **Stretch.** Show that similar matrices A and P⁻¹AP have the same characteristic polynomial, and describe how their eigenvectors correspond.
8. **Stretch.** For a real 2×2 matrix, derive a condition involving trace and determinant that guarantees two distinct real eigenvalues. Apply it to a rotation by π/2.

9. **Core.** Let A=[[0,1],[−2,3]]. Compute p_A(t), use Cayley–Hamilton to express A³ as a linear combination of A and I, and express A⁻¹ in the same form. Verify the inverse identity algebraically.
10. **Stretch.** Prove that every polynomial q(A) can be reduced to r(A) with deg r<n for an n×n matrix A. Must the matrices I,A,…,Aⁿ⁻¹ be independent? Give a counterexample and distinguish uniqueness of polynomial division from uniqueness of a matrix representation.

<details>
<summary>Hints: open after a serious attempt</summary>

1. Apply D to (x,y,z). 2. Revisit v≠0. 3. Factor t²−7t+10. 4. Solve (A−5I)v=0. 5. Substitute w=cv into both eigenvalue equations. 6. Apply A⁻¹. 7. Factor tI−P⁻¹AP as a product involving tI−A. 8. Use the quadratic discriminant.


9. **Hint 1.** The characteristic polynomial is t²−3t+2. **Hint 2.** Rearrange A²−3A+2I=0, then multiply once by A or isolate A(3I−A).
10. **Hint 1.** Divide q(t) by the monic characteristic polynomial. **Hint 2.** Cayley–Hamilton annihilates the divisible part; test A=2I when assessing independence.

</details>

<details>
<summary>Complete solutions</summary>

1. E−2=span{(1,0,0)}, E0=span{(0,1,0)}, E3=span{(0,0,1)}. The first axis reverses and doubles, the second collapses, and the third stretches threefold. Distinct diagonal entries exclude additional mixed-coordinate eigenvectors.
2. Zero is excluded because A0=λ0 for every λ, so it identifies no eigenvalue or direction. An eigenspace is a kernel, and a kernel must contain zero to be a vector space.
3. The characteristic polynomial is (t−5)(t−2). For λ=5, −x+2y=0 gives E5=span{(2,1)}. For λ=2, 2x+2y=0 gives E2=span{(1,−1)}. Direct multiplication verifies both generators.
4. Both characteristic polynomials are (t−5)³, so both algebraic multiplicities are three. For 5I the kernel is all of R³, giving geometric multiplicity three. For the second matrix, y=z=0, so the kernel is span{(1,0,0)} and geometric multiplicity is one.
5. Suppose nonzero v,w satisfy Av=λv and Aw=μw with λ≠μ. If dependent, w=cv for c≠0. Then μcv=Aw=cAv=cλv, yielding (μ−λ)cv=0, a contradiction. Thus they are independent.
6. If λ=0, then Av=0 with v≠0, contradicting invertibility. Applying A⁻¹ gives v=λA⁻¹v, so A⁻¹v=(1/λ)v.
7. Write tI−P⁻¹AP=P⁻¹(tI−A)P. Taking determinants cancels det(P⁻¹)det(P), so the polynomials agree. If Av=λv, then (P⁻¹AP)(P⁻¹v)=λP⁻¹v; invertibility preserves nonzero vectors and reverses this correspondence.
8. The discriminant is Δ=(tr A)²−4det A. Two distinct real roots occur exactly when Δ>0. A quarter-turn has trace zero and determinant one, hence Δ=−4; it has no real eigenvalues.


9. Since tr A=3 and det A=2, p_A(t)=t²−3t+2. Cayley–Hamilton gives A²=3A−2I, so A³=3A²−2A=7A−6I. Also A(3I−A)=3A−A²=2I and (3I−A)A=2I, yielding A⁻¹=(3I−A)/2. Both products are shown, so the displayed expression is a two-sided inverse.
10. Polynomial division gives unique scalar polynomials s,r with q=p_As+r and deg r<n, or r=0. Evaluating finite sums of powers gives q(A)=p_A(A)s(A)+r(A)=r(A). The division remainder is unique relative to p_A. However the displayed matrices need not be independent: for A=2I in dimension n≥2, A−2I=0 is a nontrivial relation of degree below n. Different low-degree scalar polynomials can therefore have the same matrix value. Cayley–Hamilton supplies an annihilating polynomial, not necessarily one of smallest degree.

</details>

**Readiness check:** you can explain why a repeated characteristic root may supply only one direction, and you can compute the eigenspace rather than guessing from a drawing. Next we ask when the available directions form a complete coordinate system.

## Multiplicities and a polynomial identity for the whole matrix

A characteristic root records more than a direction, but less than a full eigenbasis. Two precise results make that distinction useful. The first justifies the geometric-versus-algebraic multiplicity bound stated above. The second, Cayley–Hamilton, remains valid when an eigenbasis does not exist and even when some roots are not real.

**Theorem 13.1 (Geometric multiplicity bound).** For a real eigenvalue λ of a real n×n matrix, dim ker(A−λI) is at most the multiplicity of λ in p_A(t).

*Proof.* Choose a basis v₁,…,v_g of the eigenspace and extend it to an ambient basis. Relative to that basis the matrix has block form [[λI_g,B],[0,C]], because applying A to any of the first g basis vectors gives λ times that same vector. Its characteristic determinant is block upper triangular and equals (t−λ)^g det(tI−C). Similarity preserves the characteristic polynomial, as the earlier exercise proves. Thus (t−λ)^g divides p_A(t), so its root multiplicity is at least g. ∎

The proof does not assume that the remaining basis vectors are eigenvectors. It isolates an existing eigenspace and leaves a general smaller block. The inequality can be strict, as the earlier triangular example demonstrates.

**Theorem 13.2 (Cayley–Hamilton).** Every real n×n matrix A, n≥1, satisfies its own characteristic polynomial: if p_A(t)=tⁿ+cₙ₋₁tⁿ⁻¹+⋯+c₁t+c₀, then

Aⁿ+cₙ₋₁Aⁿ⁻¹+⋯+c₁A+c₀I=0.

*Proof.* For a square matrix M, its adjugate is the transpose of the matrix of signed cofactors. Cofactor expansion proves M adj(M)=det(M)I. On a diagonal entry this is the determinant expansion along the corresponding row; an off-diagonal entry is the same expansion with one row repeated and is therefore zero. Apply this identity to M=tI−A, treating t as a scalar indeterminate.

Every cofactor has degree at most n−1, so write adj(tI−A)=Bₙ₋₁tⁿ⁻¹+⋯+B₁t+B₀ for fixed real matrices Bⱼ. For n=1 the adjugate is the 1×1 identity, consistent with this form. Comparing coefficients in

(tI−A)(Bₙ₋₁tⁿ⁻¹+⋯+B₀)=p_A(t)I

gives Bₙ₋₁=I, Bⱼ₋₁−ABⱼ=cⱼI for 1≤j≤n−1, and −AB₀=c₀I. Reading the middle relations downward gives B₀=Aⁿ⁻¹+cₙ₋₁Aⁿ⁻²+⋯+c₁I. Substitute this into the constant relation and move all terms to one side. The result is exactly p_A(A)=0. ∎

This coefficient argument avoids an unjustified instruction to substitute a matrix for an indeterminate in an expression with arbitrary matrix coefficients. We first derive identities among fixed coefficient matrices; only ordinary matrix multiplication is then used. Nothing in the proof requires distinct roots, real roots, invertibility or diagonalisation.

### Worked example 3: reducing powers and finding an inverse

Let A=[[2,1],[0,3]]. Its characteristic polynomial is p_A(t)=(t−2)(t−3)=t²−5t+6. Cayley–Hamilton gives A²−5A+6I=0. Direct multiplication produces A²=[[4,5],[0,9]], and subtracting 5A then adding 6I makes every entry zero.

The identity also gives A(5I−A)=6I=(5I−A)A, so A⁻¹=(5I−A)/6=[[1/2,−1/6],[0,1/3]]. Higher powers need no repeated large matrix multiplication: A³=5A²−6A=19A−30I. Each reduction follows from a proved polynomial identity and preserves every entry. For a singular matrix, the power reduction still works, but a zero constant coefficient would prevent this particular inverse rearrangement.

A different example clarifies the scope. If J=[[2,1],[0,2]], then p_J(t)=(t−2)² and Cayley–Hamilton says (J−2I)²=0. It does not say J−2I=0. The nonzero nilpotent remainder is exactly what prevents an eigenvector basis. A polynomial with repeated roots can annihilate a matrix even when its lower-degree factors do not.

The later study of diagonalisation exploits scalar powers along eigenvectors, whereas Cayley–Hamilton controls powers using an annihilating polynomial. These approaches agree when an eigenbasis exists but remain distinct tools. In numerical work, a theoretical power identity is not a claim that evaluating a high-degree polynomial by any arbitrary arithmetic order is well conditioned; the present result is an exact algebraic equality.

## Sources

The added proof and computations are original. Complementary primary references are Sheldon Axler, [*Linear Algebra Done Right*, fourth edition](https://linear.axler.net/LADR4e.pdf), the characteristic-polynomial and Cayley–Hamilton discussion, and Gilbert Strang's [Eigenvalues and Eigenvectors](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/eigenvalues-and-eigenvectors/) teaching unit. Consulted 13 November 2026.

## Summary

An eigenvector is a nonzero vector in ker(A−λI); the eigenspace itself includes zero. Roots of det(tI−A) determine possible eigenvalues, while kernel calculations determine all directions. Geometric multiplicity cannot exceed algebraic multiplicity, but it may be smaller. Cayley–Hamilton proves p_A(A)=0 without assuming diagonalisation and allows exact reduction of matrix powers. The next chapter asks when the available eigenspaces together supply an entire coordinate system.
