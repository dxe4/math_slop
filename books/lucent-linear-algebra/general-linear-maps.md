# 8. Linear maps beyond coordinate space

**Prerequisites:** subspaces, linear independence, bases, and matrix multiplication.  
**Learning goals:** recognize function spaces; prove a map linear; find kernels and images; construct a matrix from chosen bases; prove and apply rank–nullity.  
**Study plan:** 80–110 minutes, including experiments and exercises. Write predictions before moving controls.

## The objects change; the structure stays

A vector need not be an arrow or a column. It can be a polynomial, a signal, or a function. What makes these objects vectors is how addition and scalar multiplication behave.

A **real vector space** is a set V with addition and multiplication by real numbers. These operations stay inside V. Addition is associative and commutative, has a zero element, and gives every vector an additive inverse. Scalar multiplication satisfies

1v = v, a(bv) = (ab)v, a(u+v) = au+av, (a+b)v = av+bv.

The zero element depends on the space: for functions, it is the function that is zero at **every** input. Equality of functions also means equality at every input, not agreement at a few sampled points.

Let P₂ be the polynomials of degree **at most** two, including the zero polynomial. Its elements have the form a+bx+cx². Addition combines coefficients, and scalar multiplication scales them. The basis (1, x, x²) identifies P₂ with ℝ³ through coordinates (a,b,c). Polynomials of degree **exactly** two are not a vector space: multiplying one by zero leaves that set.

Other examples include all real sequences and C[0,1], the continuous real-valued functions on [0,1]. Their operations are pointwise: (f+g)(x)=f(x)+g(x). A subspace must contain zero and be closed under both operations. Thus {f∈C[0,1]: f(0)=0} is a subspace, whereas {f: f(0)=1} is not.

## Maps that preserve combinations

A map T:V→W is **linear** when

T(au+bv) = aT(u)+bT(v)

for every u,v∈V and real a,b. A proof uses arbitrary inputs and scalars. Checking selected examples can reveal failure but cannot establish this universal statement.

Every linear map sends zero to zero. This is necessary, not sufficient: q(x)=x² maps 0 to 0 but fails additivity because q(1+1)=4≠2.

Differentiation D:P₂→P₁ is linear because polynomial differentiation distributes over sums and constant multiples. Evaluation E:C[0,1]→ℝ, E(f)=f(1), is also linear:

E(af+bg) = af(1)+bg(1) = aE(f)+bE(g).

Notice the difference between a **linear map on functions** and a **linear-looking graph**. Evaluation acts linearly even when its input is the curved graph x². By contrast, the operation S(f)=f² is nonlinear: squaring f+g produces the extra term 2fg.

## Worked example 1: differentiation as a matrix

Choose the ordered input basis B=(1,x,x²) and output basis C=(1,x). Since

D(1)=0, D(x)=1, D(x²)=2x,

the coordinate columns of these outputs form the matrix

```text
             [ 0  1  0 ]
[D]C←B   =   [ 0  0  2 ].
```

Consequently, D(a+bx+cx²)=b+2cx, and the coordinate rule is (a,b,c)↦(b,2c). For p=3−2x+4x², multiply the matrix by (3,−2,4) to obtain (−2,8), representing −2+8x.

In general, column j of [T]C←B is the C-coordinate vector of T(bⱼ). The equation [T(v)]C=[T]C←B[v]B translates an abstract map into arithmetic. Ordered bases are part of this representation. Reordering either basis changes the matrix, although the underlying map stays the same.

### Experiment 1: which information does differentiation lose?

Blue is p(x)=a+bx+cx²; amber is its exact derivative, calculated from coefficients.

```mathviz
scene "Different polynomials can have the same derivative";
domain -1.5 1.5;
range -10 10;
param a = 1 from -2 to 2;
param b = 1 from -2 to 2;
param c = 1 from -2 to 2;
fn p(x) = a+b*x+c*x^2;
fn d(x) = b+2*c*x;
plot p color blue;
plot d color amber;
```

**Predict:** which slider can change the blue graph without moving amber?  
**Manipulate:** vary each coefficient separately; then hold b and c fixed and sweep a. Edit the source to replace x² by x³, updating the derivative too.  
**Explain:** identify the missing coordinate in (a,b,c)↦(b,2c). Explain why overlapping sampled derivative curves alone would not prove equality.  
**Transfer:** find every polynomial whose derivative is 6x−4. Your answer should contain a free constant, not one polynomial.

## Kernel and image describe loss and reach

The **kernel** is ker T={v∈V:T(v)=0}; the **image** is im T={T(v):v∈V}. The kernel lives in the domain; the image lives in the codomain.

Both are subspaces. For example, if u,v∈ker T, then T(au+bv)=a0+b0=0. For the image, aT(u)+bT(v)=T(au+bv), so combinations remain outputs. Both contain their respective zero vectors.

A linear map is injective precisely when its kernel is {0}. Indeed, T(u)=T(v) is equivalent to T(u−v)=0. Thus a nonzero kernel vector records a direction along which information disappears. More generally, if T(v₀)=w, **all** solutions to T(v)=w are v₀+ker T. If w is outside the image, there are no solutions.

For differentiation on P₂, ker D=span{1} and im D=P₁: any r+sx is the derivative of rx+(s/2)x². The kernel has dimension one and the image dimension two.

### Worked example 2: evaluation in coefficient space

Restrict evaluation to E:P₁→ℝ, E(p)=p(1). With p=a+bx, this becomes E(p)=a+b, represented by the row matrix [1 1]. Hence ker E=span{1−x}, and im E=ℝ because E(c)=c for every constant c.

Solving E(p)=3 gives p=3+t(1−x). In coefficient space these polynomials form the line (3+t,−t), parallel to the kernel line. This is an affine line; it is not a subspace because it excludes zero.

### Experiment 2: move without changing the output

The plane displays **coefficients** (a,b), not graph points (x,p(x)). Blue and teal encode two polynomials; the amber point encodes their common scalar output as (E(p),0). The matrix shown embeds the scalar output into the horizontal axis.

```mathviz
scene "Evaluation forgets an entire coefficient direction";
domain -3 3;
range -3 3;
coordinates equal;
param a = 1 from -1 to 1;
param b = 0.5 from -1 to 1;
param t = 0 from -1 to 1;
transform E = (1,1,0,0);
vector original = (a,b) color blue;
vector shifted = (a+t,b-t) color teal;
segment difference from (a,b) to (a+t,b-t) color violet;
point output = (a+b,0) color amber;
```

**Predict:** will varying t move the amber point?  
**Manipulate:** sweep t, then a and b; set a=−b. Edit the scene for evaluation at x=2: use output (a+2*b,0), shifted (a+2*t,b-t), and matrix (1,2,0,0), updating the segment endpoint too.  
**Explain:** translate the violet displacement into a polynomial that evaluates to zero. Identify which displayed objects belong to the domain and which encode the codomain.  
**Transfer:** derive the kernel and a matrix for evaluation at an arbitrary real r.

## Rank–nullity: a proof by extending a basis

For a linear map with finite-dimensional domain V,

dim V = dim ker T + dim im T.

The two right-hand terms are called **nullity** and **rank**. The codomain need not be finite-dimensional.

**Proof.** Choose a basis k₁,…,kₛ of ker T. Extend it to a basis k₁,…,kₛ,v₁,…,vᵣ of V. This uses the basis-extension theorem: an independent list in a finite-dimensional space can be enlarged to a basis.

We claim T(v₁),…,T(vᵣ) is a basis of im T. Any input is a combination of the chosen domain basis. Applying T kills the k terms, so these r images span im T.

For independence, suppose ∑aⱼT(vⱼ)=0. Then ∑aⱼvⱼ belongs to ker T and therefore equals ∑bᵢkᵢ. Subtracting gives a relation among the extended basis vectors. Their independence forces every aⱼ and bᵢ to vanish. Hence the r images are independent. Counting gives dim V=s+r. ∎

For maps V→V with finite dimension, injectivity and surjectivity are equivalent by this formula. Equal finite dimensions matter: an injective map ℝ²→ℝ³ need not be surjective.

## Infinite-dimensional spaces require care

The space P of all polynomials has basis 1,x,x²,…; each polynomial is a **finite** combination. Differentiation D:P→P is surjective but not injective. Multiplication M(p)=xp is injective but not surjective because 1 is outside its image.

Thus the preceding equivalence fails even for maps from an infinite-dimensional space to itself. Do not subtract “infinities” to infer nullity from rank. Also, an infinite series is not automatically a vector-space basis expansion: convergence requires extra structure and justification. The functions 1,x,x²,… are independent in C[0,1], proving that this space is infinite-dimensional, but their finite span contains only polynomials.

## Exercises

1. **Foundation.** Is {p∈P₂:p(0)=0} a subspace? Give a basis and dimension.
2. **Foundation.** Decide whether F(p)=p(0)+1 is linear. Supply a decisive argument.
3. **Core.** For T:P₂→ℝ² defined by T(p)=(p(0),p(1)), find its matrix in standard bases, kernel, image, rank, and nullity.
4. **Core.** Describe every p∈P₂ satisfying D(p)=2x+3. Explain why the solution set is not a subspace.
5. **Core.** Represent E:P₁→ℝ, E(p)=p(1), using the domain basis (1−x,x). Explain the matrix change.

**Point-of-use preparation for Core Exercise 6.** Read the [integral definition and continuous-integrability statement](../lucent-calculus/riemann-integral.md#2-what-the-limit-actually-requires), then [signed accumulation, linearity and constant bounds](../lucent-calculus/riemann-integral.md#5-signed-accumulation-and-properties). Use those properties here; antiderivative techniques and the rest of the integration course are not prerequisites for this exercise.

**Worked readiness check.** For the constant function 3 on [0,1], every tagged sum is 3ΣΔx=3, so ∫₀¹3dx=3; similarly ∫₀¹c dx=c for any real constant c. For h(x)=(x−1/2)³, h(1−x)=−h(x). Reflecting any tagged partition about 1/2 preserves its mesh and widths and negates its sum. Both sums tend to the same integral because h is continuous, so the integral equals its negative and is zero. This is odd cancellation about the midpoint, with no antiderivative needed. Before Exercise 6, explain why af+bg is continuous when f and g are, and how integral linearity applies to arbitrary real a,b.

6. **Core.** Prove I:C[0,1]→ℝ, I(f)=∫₀¹f(x)dx, is linear and surjective. Give two independent kernel elements.
7. **Stretch.** Prove that ker T=ker(T²) implies im T∩ker T={0}, for any linear endomorphism T. Is finite dimension needed?
8. **Stretch.** Explain why x↦sin x is not a finite combination of 1,x,x²,… on [0,1]. What does this show about their span?
9. **Core.** Find the unique p∈P₂ with p(0)=2,p(1)=0,p(2)=4. Prove uniqueness within P₂ and explain why uniqueness fails among all polynomials.
10. **Stretch.** For linear maps T:U→V and S:V→W, prove ker(ST)=ker T if and only if S is injective on im T.

<details>
<summary>Hints — open after an independent attempt</summary>

1. Translate p(0)=0 into a coefficient condition.
2. Test the zero polynomial.
3. Apply T to 1,x,x²; then solve both output equations.
4. Integrate coefficients; test whether zero is a solution.
5. Evaluate each new basis vector at 1.
6. Use linearity of the integral and odd symmetry about 1/2.
7. Write an intersection element as T(v), then apply T again.
8. A sufficiently high derivative of a polynomial vanishes identically.

9. **Hint 1:** write p=a+bx+cx² and eliminate. **Hint 2:** add a multiple of x(x−1)(x−2) when the degree restriction is removed.
10. **Hint 1:** one implication is Result 8.3. **Hint 2:** for the converse, compare v₁=T(u₁) and v₂=T(u₂) with S(v₁)=S(v₂).

</details>

<details>
<summary>Worked solutions</summary>

1. The condition is a=0, leaving bx+cx². Closure follows from this form; (x,x²) is an independent spanning list, so the dimension is 2.
2. F(0)=1≠0, contradicting a necessary property of linear maps.
3. The matrix has rows (1,0,0) and (1,1,1). Kernel equations give a=0 and b=−c, hence ker T=span{x²−x}. Every (u,v) is obtained from u+(v−u)x, so im T=ℝ². Rank 2 plus nullity 1 equals dim P₂=3.
4. Comparing coefficients gives p=x²+3x+c, with c arbitrary. Differences between solutions are constants in ker D. The zero polynomial has derivative zero, so it is absent from this solution set.
5. E(1−x)=0 and E(x)=1, giving [0 1]. Coordinates now mean p=u(1−x)+vx, so E(p)=v. The old coefficients satisfy a=u and b=v−u; therefore a+b=v, agreeing with the new rule.
6. Integral linearity gives I(af+bg)=aI(f)+bI(g). The constant function c has integral c, proving surjectivity. Both x−1/2 and (x−1/2)³ integrate to zero by symmetry. Their different nonzero degrees make them independent.
7. If w=T(v) and T(w)=0, then T²(v)=0. The hypothesis gives v∈ker T, so w=T(v)=0. No dimension argument occurs; the proof also holds in infinite dimensions.
8. If sin x agreed with a polynomial of degree n on the interval, their derivatives of order n+1 would agree on (0,1). The polynomial derivative is zero; the sine derivative is ±sin x or ±cos x, neither identically zero there. Thus sine lies outside the polynomial span, although it belongs to C[0,1].

9. The equations give a=2,b+c=−2,2b+4c=2. Subtracting twice the middle equation gives 2c=6, so c=3,b=−5 and p=2−5x+3x². The forced coefficients prove uniqueness; equivalently, the difference of two solutions has all three coefficients forced to zero by the homogeneous equations. Among all polynomials, p+t x(x−1)(x−2) has the same three values for every real t, giving distinct solutions when t differs.
10. If S is injective on im T, ST(u)=0 implies T(u)=0, and the reverse kernel inclusion always holds. Conversely assume equal kernels. If vᵢ=T(uᵢ) and S(v₁)=S(v₂), then ST(u₁−u₂)=0. Kernel equality gives T(u₁−u₂)=0, hence v₁=v₂. Thus S is injective on im T.

</details>

## Definitions and the matrix correspondence

**Definition 8.1 (Polynomial coefficient coordinates).** For a nonnegative integer n, Pₙ is the real vector space of polynomials of degree at most n, with the zero polynomial included. In its standard ordered basis (1,x,…,xⁿ), a polynomial ∑aⱼxʲ has coordinate column (a₀,…,aₙ). Polynomial equality means equality of coefficients, equivalently equality at every real input.

The coefficient viewpoint is a representation rather than a new operation. Adding polynomials pointwise and adding their coefficient columns describe the same addition. This is why elimination can solve a polynomial identity: matching coefficients turns equality of functions into finitely many linear conditions. Matching values at a few points requires a separate justification, which the interpolation example below supplies in its specific setting.

**Theorem 8.2 (A linear map is determined by basis images).** Let B=(b₁,…,bₙ) be a basis of V and choose arbitrary w₁,…,wₙ in a real vector space W. There is exactly one linear map T:V→W with T(bⱼ)=wⱼ.

*Proof.* For the unique expansion v=∑cⱼbⱼ, define T(v)=∑cⱼwⱼ. The uniqueness of the expansion makes this well-defined. Coordinates of av+bu are the same combination of the coordinate columns, so the definition gives T(av+bu)=aT(v)+bT(u). Thus T is linear and has the prescribed values. Any linear map with those values must send ∑cⱼbⱼ to ∑cⱼwⱼ, proving uniqueness. ∎

If W also has a finite ordered basis C, taking C coordinates of the wⱼ yields a matrix. There is no additional freedom once the two bases and the map have been chosen. A map between polynomials and measurement vectors therefore has a rectangular matrix for precisely the same reason as a map between ordinary coordinate spaces.

The hypotheses matter. Prescribing arbitrary images of a dependent list need not define a linear map. If b₃=b₁+b₂, linearity requires T(b₃)=T(b₁)+T(b₂). A basis removes this compatibility problem because no nontrivial relation among its members imposes a hidden constraint.

## Worked example 3: reconstruct a quadratic from measurements

Define F:P₂→R³ by F(p)=(p(0),p(1),p(2)). Evaluation is linear in each component, so F is linear. In coefficient coordinates p=a+bx+cx², its matrix has rows (1,0,0),(1,1,1),(1,2,4).

Suppose the measured values are (1,2,5). The equations are a=1, a+b+c=2, and a+2b+4c=5. Substituting a=1 gives b+c=1 and 2b+4c=4. Subtracting twice the first of these gives 2c=2, hence c=1 and b=0. The polynomial is p=1+x². Checking all three values confirms the answer.

For arbitrary measurements (u,v,w), the same elimination gives

a=u, c=(w−2v+u)/2, b=(4v−3u−w)/2.

Thus every measurement triple comes from a polynomial in P₂, and the forced coefficients prove uniqueness. F is a linear bijection. This statement depends on the restriction to degree at most two. In the space of all polynomials, the nonzero polynomial x(x−1)(x−2) has zero measurements, so those same three values would not determine a unique polynomial.

The reconstruction can also be written without solving anew each time. Let

L₀=(x−1)(x−2)/2, L₁=−x(x−2), L₂=x(x−1)/2.

Their values at 0,1,2 are respectively the standard coordinate vectors (1,0,0),(0,1,0),(0,0,1). Consequently p=uL₀+vL₁+wL₂ has the desired measurements. The uniqueness already proved shows it is the same polynomial as the coefficient formula. In the ordered basis (L₀,L₁,L₂), the coordinate column is exactly (p(0),p(1),p(2)).

This example separates exact reconstruction from noisy modeling. Any three real values can be matched exactly by one quadratic, but that algebraic fact does not establish that a quadratic is the right physical model. The mathematical result says what follows after the space P₂ has been chosen.

## Kernels and images under composition

**Result 8.3 (Information under successive maps).** For linear T:U→V and S:V→W, ker T⊆ker(ST) and im(ST)⊆im S. If S is injective on im T, then ker(ST)=ker T.

*Proof.* If T(u)=0, then S(T(u))=S(0)=0, proving the kernel inclusion. Every ST(u) is an output of S, proving the image inclusion. If S is injective on im T and ST(u)=0=S(0), both T(u) and zero lie in im T, so T(u)=0. This gives the reverse kernel inclusion. ∎

Injectivity on the entire codomain of T is sufficient but stronger than needed. A later map can discard directions that the earlier map never produces without losing any additional input information. For instance, T(t)=(t,0) embeds a line in a plane, and S(x,y)=x discards the vertical direction. S is not injective on R², but ST is the identity on R. Its restriction to the horizontal image of T loses nothing.

**Result 8.4 (Rank bounds for a composition).** If the relevant spaces are finite-dimensional, rank(ST)≤rank T and rank(ST)≤rank S.

*Proof.* The second bound follows from the image inclusion. For the first, choose a basis v₁,…,v_r of im T. Every output ST(u) is a combination of S(v₁),…,S(v_r), so the image of ST has a spanning list of length r and dimension at most r. ∎

This proof does not need a matrix, although coordinate matrices provide another way to calculate the same dimensions. It explains why later processing cannot create additional independent information about an input. It may repackage the surviving information into more coordinates, but more output entries do not automatically mean higher rank.

## A useful decomposition of a finite-dimensional domain

**Result 8.5 (A complement to the kernel).** If V is finite-dimensional and T:V→W is linear, there is a subspace C with V=ker T+C and ker T∩C={0}. The restriction T:C→im T is a linear bijection.

*Proof.* Extend a basis of ker T to a basis of V and let C be the span of the added basis vectors. Every vector splits into a combination of kernel basis vectors plus a combination of added vectors. Independence of the full basis makes the intersection zero and the split unique. If a vector in C maps to zero, it belongs to the intersection and is zero, so the restriction is injective. Every output comes from some vector v; its kernel component maps to zero, leaving the same output from its C component, so the restriction is surjective. ∎

A complement need not be unique. Differentiation on P₂ has kernel the constants; both span{x,x²} and span{1+x,x²} are complements. Choosing a complement chooses one representative from each family of inputs with the same output. Orthogonality later supplies a particularly natural choice when an inner product is available, but rank–nullity itself requires only bases and linearity.

## Summary

Vectors can be polynomials or functions, and linearity is preservation of combinations in those spaces. Basis images determine a map and its matrix; kernels and images describe loss and reach independently of coordinates. Rank–nullity follows by splitting off a kernel basis, while composition cannot increase rank. Determinants will next measure volume change for square coordinate maps.
