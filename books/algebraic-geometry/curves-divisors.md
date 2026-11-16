
# Curves and Divisors

On a nonsingular curve, a local parameter measures the integer order of a rational function. Summing those local orders gives its divisor. Projectivity forces zeros and poles to balance, and that balance already gives useful finiteness statements for spaces of rational functions before Riemann–Roch is available.

Here $C$ is a nonsingular irreducible projective curve over the algebraically closed field $k$. Read Chapter 5 on dimension and local regularity, Commutative Algebra on [DVRs and integral closure](../commutative-algebra/artinian-dvr-dedekind.md), and the [finite separable trace-pairing theorem](../galois-theory/norm-trace-normal-basis.md), Theorem 9.5. That exact field-theory input is used in the finite-normalization argument below; it requires separability and does not assume the trace of one is nonzero. Positive-characteristic inseparability is handled separately. No Riemann–Roch theorem or group law on cubic points is assumed.

## 1. A nonsingular curve has valuation local rings

At a closed point $P$, the local ring has dimension one by the affine height theorem and is regular by nonsingularity. Its maximal ideal therefore has one generator $\pi$. The Noetherian domain argument proves it is a DVR directly. A nonzero element cannot belong to every power $(\pi^n)$: otherwise the elements $a/\pi^n$ lie in the ring and their principal ideals form an ascending chain. When it stabilizes, cancellation would make $\pi$ a unit. Thus every nonzero element has a largest power of $\pi$ dividing it, and the remaining factor is a unit.

For a nonzero rational function $f$, define $v_P(f)$ by subtracting numerator and denominator exponents. Unit-factor multiplication proves it is well-defined, additive on products, and satisfies the minimum inequality on sums. The local ring consists of zero and the functions with nonnegative valuation. Changing the uniformizer does not change the exponent: two generators of the same maximal ideal differ by a unit. A positive order is a zero, a negative order is a pole, and order zero means a local unit.

The zero and pole sets of a rational function are finite. Cover its initial nonempty domain by an affine chart; the omitted closed subset of an irreducible curve is finite, since its irreducible components have dimension zero by the height formula and a zero-dimensional affine domain over $k$ is $k$. On the affine domain, write the function as a quotient. Each nonzero numerator or denominator has a proper closed zero set, hence finitely many points. Outside their union the function is a unit. This also shows precisely why the zero rational function must be excluded from valuation divisors.

## 2. Finite normalization over a polynomial line

We prove the algebraic finiteness input needed to count fibers. Let $t$ be transcendental over $k$, and let $L/k(t)$ be a finite extension. The integral closure $B$ of $k[t]$ in $L$ is a finite $k[t]$-module.

First suppose the extension is separable. Choose a field basis $z_1,\ldots,z_n$ integral over $k[t]$, by multiplying arbitrary basis elements by suitable nonzero polynomials to clear their monic-equation denominators. The separable trace-pairing theorem gives the dual basis. The trace-dual lattice to $M=\sum k[t]z_i$ is consequently a finite free $k[t]$-module. For $b\in B$, every $bz_i$ is integral, and its trace is integral and lies in $k(t)$. Since $k[t]$ is integrally closed, that trace belongs to $k[t]$. Hence $B$ lies in the dual lattice. It is a submodule of that finite module over the Noetherian ring $k[t]$, so is finite. This argument uses nondegeneracy of the whole pairing, not a division by the field degree.

In characteristic $p$, let $L_s$ be the maximal separable subextension. The remaining finite extension is purely inseparable, so some power $q=p^r$ sends every element of $L$ into $L_s$. For completeness, every algebraic minimal polynomial can be written as a separable polynomial in a sufficiently high $p$th power of its variable. Its root's corresponding power is separable over the base. Choose a common power for finitely many field generators; it then works for every rational expression in them. This gives the asserted exponent.

Let $B_s$ be the integral closure in $L_s$, finite by the first argument. It is a finitely generated $k$-algebra, say $k[b_1,\ldots,b_m]$. Every integral $b\in L$ has $b^q\in B_s$. In a fixed algebraic closure it therefore lies in $k[b_1^{1/q},\ldots,b_m^{1/q}]$: the perfectness of the algebraically closed field supplies roots of all scalar coefficients, and Frobenius respects sums and products. This larger algebra is finite over $B_s$, spanned by monomials whose root-generator exponents are below $q$. The ring $B$ is a $B_s$-submodule of it and is finite by Noetherianity, hence finite over $k[t]$. Characteristic zero was already separable. This proves the finiteness statement in every characteristic under the stated perfect-ground-field hypothesis.

Every element of $L$ becomes integral after multiplying it by a suitable nonzero polynomial in $t$: scale its monic field equation by a common denominator, with the coefficient in position $i$ gaining that denominator to the power $i$. Thus every element of $L$ is a fraction of elements of $B$, and $\operatorname{Frac}(B)=L$. This also identifies the function field of the finite normal affine model used next.

## 3. Rational functions give finite maps to the projective line

A nonconstant $f\in k(C)$ defines a morphism $f:C\to\mathbb P^1$. At a point where $v_P(f)\ge0$, use the regular affine coordinate $f$; at a pole use $1/f$. These local expressions agree on overlaps and extend the original rational map. Its image is closed by projectivity, and irreducibility plus nonconstancy makes it all of the projective line. Its field extension $k(C)/k(f)$ is finite because it is algebraic and finitely generated.

We also prove that the preimage of either affine chart is affine and finite over that chart. Put $K=k(C)$ and take the integral closure $B$ of $k[f]$ in $K$, finite by Section 2. It is a one-dimensional normal affine domain. Its closed-point local rings are DVRs by the prepared normal-local criterion. Let $Y$ be its affine variety. Every element of $B$ is regular on $U=f^{-1}(\mathbb A^1)$: it is integral over $k[f]$, hence integral over each local ring of $C$ there, and those DVRs are integrally closed. A finite generator list therefore gives a morphism $h:U\to Y$ inducing the identity on function fields.

The inverse rational map $Y\dashrightarrow C$ extends at every point $Q$ of $Y$. Embed $C$ in projective space and represent that rational map by homogeneous coordinates in $K$. In the DVR $B_Q$, multiply all coordinates by a power of a uniformizer so that their valuations are nonnegative and at least one is zero. Each ratio in a unit-coordinate chart belongs to $B_Q$ and is regular on a neighborhood of $Q$ after clearing finitely many denominators. The homogeneous equations of $C$ hold in $K$, hence on that neighborhood. This constructs a local extension into $C$.

The extensions agree on overlapping opens by the closed-diagonal uniqueness principle, so give a morphism $g:Y\to C$. The maps $f\circ g$ and the polynomial coordinate map $Y\to\mathbb A^1\subseteq\mathbb P^1$ agree on a dense open, hence everywhere. Thus $g(Y)\subseteq U$. The two composites with $h$ induce identity rational maps and are actual morphisms; closed-diagonal uniqueness makes both actual identities. Consequently $U\cong Y$ and its map to the affine line is finite. Applying the same construction to $1/f$ treats the chart at infinity. This proves the finite-map assertion, including the affine-domain statement, instead of citing an unproved proper-quasifinite theorem.

## 4. Count fiber lengths and balance zeros with poles

Write $n=[k(C):k(f)]$. The finite coordinate algebra above an affine chart is torsion-free over the PID $k[f]$, hence free, with rank $n$ after passing to fraction fields. For $a\in k$, its quotient by $f-a$ therefore has $k$-dimension $n$. Decompose this finite algebra into its local Artinian factors, one at each point over $a$. In the DVR at such a point, $f-a$ is a unit times a uniformizer power with exponent $e_P=v_P(f-a)$. The quotient has length $e_P$, and its residue field is $k$, so its $k$-dimension is also $e_P$. Hence

$$\sum_{P:f(P)=a}v_P(f-a)=n.$$

The same argument with $1/f$ over zero gives

$$\sum_{P:f(P)=\infty}(-v_P(f))=n.$$

Thus zeros and poles of $f$ have the same total order. The sum counts lengths, not merely distinct points. A purely inseparable map can have one point of length $p$ over a value while the field degree is $p$; no separable-point-count assumption has entered this argument. The decomposition of a finite algebra and its DVR length calculation were proved in the prepared commutative-algebra chapters.

A divisor is a finite formal sum $D=\sum_P n_P[P]$ with integer coefficients. It is effective if all coefficients are nonnegative, and its degree here is $\sum_Pn_P$, because every closed point has residue field $k$. The divisor of a nonzero rational function is

$$\operatorname{div}(f)=\sum_Pv_P(f)[P].$$

The finite-support argument makes this meaningful, and the fiber calculation proves its degree zero. Constants give zero divisor, and conversely a function with no poles is globally regular on the projective curve and therefore constant by Chapter 3. Hence the kernel of the divisor homomorphism $k(C)^\times\to\operatorname{Div}(C)$ is exactly $k^\times$.

Divisors are linearly equivalent if their difference is principal. Degree descends to this quotient by principal divisors. The quotient is the divisor class group; its later identification with invertible sheaves will be proved in the sheaf route, rather than assumed here as an unintroduced definition of line bundles.

## 5. Spaces of functions with prescribed poles

For a divisor $D$, define

$$L(D)=\{0\}\cup\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}.$$

The valuation inequality makes this a $k$-vector space. If $\deg D<0$, it is zero: an effective divisor cannot have negative degree, while the sum has degree $\deg D$. If $D' =D+\operatorname{div}(h)$, multiplication by $h$ identifies $L(D')$ with $L(D)$, preserving dimension.

These spaces are finite-dimensional without invoking Riemann–Roch. For $d=\deg D\ge0$, choose $d+1$ distinct points outside the finite support of $D$. There are infinitely many points because any nonconstant function maps the curve onto the infinite projective line. Evaluation at these points is a linear map $L(D)\to k^{d+1}$. If a nonzero function were in its kernel, the effective divisor $D+\operatorname{div}(f)$ would contain all $d+1$ points but have degree $d$, impossible. Thus evaluation is injective and

$$\dim_k L(D)\le d+1.$$

Adding one point increases the dimension by at most one. If the coefficient of $P$ in $D$ is $m$, a function in $L(D+P)$ has local expansion bound $v_P(f)\ge-m-1$. The residue of $\pi^{m+1}f$ defines a linear map to $k$. Its kernel is exactly $L(D)$, because vanishing residue raises the valuation by one. Therefore $L(D+P)/L(D)$ has dimension at most one. The chosen uniformizer changes the coefficient map but not this dimension conclusion. Riemann–Roch will describe the obstruction to achieving the possible increase; it has not been used to justify this elementary bound.

## 6. Worked example: every divisor class on the projective line

Use coordinate $t$ on the affine line and parameter $s=1/t$ at infinity. Then

$$\operatorname{div}(t-a)=[a]-[\infty].$$

The finite zero is simple and at infinity $t-a=s^{-1}(1-as)$ has a simple pole. Multiplying integer powers of these functions shows every divisor is linearly equivalent to its degree times infinity. Degree zero for principal divisors makes that integer unique. Thus the divisor class group of $\mathbb P^1$ is $\mathbb Z$ under degree.

A rational function with no finite poles is a polynomial: reduce a quotient of coprime polynomials and note that a nonconstant denominator has a root over the algebraically closed field, which would give a pole. Its pole order at infinity is its polynomial degree. Consequently $L(d[\infty])$ has basis $1,t,\ldots,t^d$ when $d\ge0$, and is zero for negative $d$. The dimension bound is exact on the projective line. This computes functions and divisor classes by actual coordinates, without assuming the later genus-zero Riemann–Roch formula.

## 7. Worked example: pole orders on a nonsingular cubic

Assume characteristic different from two, and let the projective cubic

$$Y^2Z=X^3+aXZ^2+bZ^3$$

be nonsingular and irreducible. Its unique point at infinity is $O=[0:1:0]$. In the chart $Y=1$, put $u=X/Y,v=Z/Y$. The equation is $v=u^3+auv^2+bv^3$. The linear part at $O$ is $v$, so the cotangent space has basis $u$ and Nakayama makes $u$ a uniformizer. Rearranging gives $v(1-auv-bv^2)=u^3$. The bracket is a unit, so $v_O(v)=3$.

The affine coordinates $x=X/Z=u/v$ and $y=Y/Z=1/v$ therefore have orders minus two and minus three at $O$. They have no other poles, since they are regular on the affine chart $Z\ne0$. This recovers their pole orders from the actual local equation; the raw degree of a coordinate symbol did not establish them.

If $b\ne0$, the zeros of $x$ are the two points $P_\pm=(0,\pm\sqrt b)$. Their nonzero $y$-derivative makes $x$ a local parameter, so each zero has order one. Thus $\operatorname{div}(x)=P_++P_--2O$. If $b=0$, nonsingularity requires $a\ne0$. At $P=(0,0)$ the parameter is $y$, and $y^2=x(x^2+a)$ with a unit bracket gives order two for $x$, so its divisor is $2P-2O$. Both cases balance total order two, and the exceptional coincidence is handled by length rather than by counting only distinct points.

## 8. Worked example: why the singular cusp needs normalization

The cusp local ring $k[t^2,t^3]_{(t^2,t^3)}$ is not a DVR, as proved in the preparation. The fraction $t$ is integral and lies in the function field but not in that local ring. Its order in the parameter of the normalization is positive, yet it is not a regular function on the cusp at the origin. Therefore the equivalence “nonnegative order means locally regular” cannot simply be copied to a singular curve using an arbitrary parametrization valuation. Our nonsingularity hypothesis ensures that each local ring itself is the valuation ring. The later sheaf and normalization theory can treat singular curves with its own additional data.

The extension argument also proves a useful general curve statement. Every rational map from a nonsingular curve to a projective algebraic set extends uniquely across its omitted points. At an omitted point, choose its DVR uniformizer and homogeneous coordinate functions for the rational map. Subtract the smallest of their valuations by a common power of that uniformizer. All resulting coordinates belong to the local ring and at least one is a unit, so their ratios define a morphism near the point. Homogeneous target equations remain zero because they were zero in the function field. Local extensions agree by the closed target diagonal.

Uniqueness follows from the same dense-agreement principle. The source need not be projective for this local assertion, but it must have the DVR local rings used in the construction, and the target must supply the projective coordinates. The reciprocal function from the line to the affine line does not extend at zero, because its target omits the projective value at infinity. The cusp's normalization inverse also illustrates why replacing a nonsingular source by a singular one changes the local extension argument. These examples isolate the two different hypotheses rather than attributing all extension behavior to rationality alone.

## Exercises

### AG06-01. Change the uniformizer

Prove that two generators of the maximal ideal of a DVR give the same valuation on its fraction field.

**Hint 1.** Each generator is the other times a ring element.

**Hint 2.** The product of those two factors is one by domain cancellation.

<details><summary>Full solution</summary>

Write $\pi'=u\pi$ and $\pi=v\pi'$. Cancelling the nonzero generator gives $uv=1$, so $u$ is a unit. Replacing a power of $\pi$ by the same power of $\pi'$ changes only a unit factor. Numerator and denominator exponents therefore give the same difference. The normalization is fixed by assigning value one to a generator of the maximal ideal.

</details>

### AG06-02. A one-generator local ring

Explain why a one-dimensional regular Noetherian local domain is a DVR without first assuming it integrally closed.

**Hint 1.** Regularity makes the maximal ideal principal.

**Hint 2.** Stabilization of the ascending ideals generated by successive quotients excludes infinite divisibility.

<details><summary>Full solution</summary>

Write the maximal ideal as $(\pi)$. If nonzero $a$ lay in every power, the ideals $(a/\pi^n)$ would form an ascending chain. Stabilization would imply $1=\pi r$ after cancellation, impossible. Every nonzero element therefore is a finite power of $\pi$ times a unit. Exponent differences define a discrete valuation with this ring as its nonnegative part. Integral closure then follows from the valuation criterion, rather than being an unproved extra premise.

</details>

### AG06-03. Why trace one is irrelevant

In the separable normalization proof, explain why the field degree may vanish in the characteristic without invalidating the trace-dual lattice argument.

**Hint 1.** Nondegeneracy concerns all pairs, not the single value $\operatorname{Tr}(1)$.

**Hint 2.** An invertible Gram matrix supplies the dual basis.

<details><summary>Full solution</summary>

The pairing theorem says each nonzero element pairs nontrivially with some other element. It therefore makes the basis Gram matrix invertible and gives a dual basis even if the scalar trace of one equals the zero degree. The lattice argument bounds an integral element by all its traces against the chosen basis, not by dividing its trace by the degree. Hence separable extensions of degree divisible by the characteristic are covered.

</details>

### AG06-04. A purely inseparable fiber

For $f=t^p$ on the projective line in characteristic $p$, calculate the zero and pole divisors and the fiber length over zero.

**Hint 1.** Use $t$ at zero and $1/t$ at infinity.

**Hint 2.** The affine quotient is $k[t]/(t^p)$.

<details><summary>Full solution</summary>

The divisor is $p[0]-p[\infty]$. The zero fiber has one point but its coordinate quotient has basis $1,t,\ldots,t^{p-1}$ and length $p$. This agrees with the function-field degree $p$. Distinct point count one and total order $p$ answer different questions; the degree-zero divisor statement remains valid without separability.

</details>

### AG06-05. A divisor of a quotient

On $\mathbb P^1$, compute the divisor of $(t-a)^2/(t-b)^3$ for distinct scalars $a,b$.

**Hint 1.** Add and subtract the elementary divisors of the two linear factors.

**Hint 2.** Include the order at infinity.

<details><summary>Full solution</summary>

The divisor is $2[a]-3[b]+[\infty]$, since numerator and denominator contribute pole orders two and three at infinity respectively. Its degree is zero. The point at infinity is a zero of order one because the denominator degree exceeds the numerator degree by one. Omitting that point would break the balance and describe only the affine part of the divisor.

</details>

### AG06-06. Negative degree

Prove $L(D)=0$ if $\deg D<0$.

**Hint 1.** Principal divisors have degree zero.

**Hint 2.** Every effective divisor has nonnegative degree.

<details><summary>Full solution</summary>

A nonzero member would make $D+\operatorname{div}(f)$ effective. Its degree would still be $\deg D<0$, contradicting effectiveness. The zero vector is always allowed, so the vector space is exactly zero. The argument uses the proved projective principal-divisor balance; on an affine curve omitting poles at its boundary would invalidate that premise.

</details>

### AG06-07. Add a point

Construct the coefficient map proving $\dim L(D+P)/L(D)\le1$ even when the coefficient of $P$ in $D$ is negative.

**Hint 1.** Let that coefficient be an arbitrary integer $m$.

**Hint 2.** The valuation bound makes $\pi^{m+1}f$ locally regular.

<details><summary>Full solution</summary>

For every $f\in L(D+P)$, the valuation of $\pi^{m+1}f$ is nonnegative, so take its residue in $k$. Its kernel consists exactly of those with order at least minus $m$, which is the extra condition for $L(D)$. Other point conditions are unchanged. Thus the quotient injects into the one-dimensional residue field regardless of the sign of $m$.

</details>

### AG06-08. Compute a rational function space

On $\mathbb P^1$, determine the dimension of $L(3[\infty]-[0])$ and give a basis.

**Hint 1.** No finite poles are allowed.

**Hint 2.** The function must be a polynomial of degree at most three vanishing at zero.

<details><summary>Full solution</summary>

The basis is $t,t^2,t^3$, giving dimension three. Every admitted function is polynomial because it has no finite pole; the infinity condition bounds its degree, and the coefficient minus one at zero requires a zero there. This is consistent with the divisor's degree two and the bound three, attained here. The zero function is the zero vector and need not be given a valuation.

</details>

### AG06-09. Linear equivalence and function spaces

If $D'=D+\operatorname{div}(h)$, give the explicit isomorphism between their $L$ spaces and check its direction.

**Hint 1.** Add the divisor of $h$ when multiplying a function by $h$.

**Hint 2.** Compare $\operatorname{div}(hf)+D$ with the defining inequality for $D'$.

<details><summary>Full solution</summary>

Multiplication by $h$ sends $L(D')$ to $L(D)$ because $\operatorname{div}(hf)+D=\operatorname{div}(f)+D'$. Its inverse is multiplication by $h^{-1}$. These are linear maps over $k$, proving equal dimensions and fixing the sign convention. Reversing the direction without inverting $h$ would generally give the wrong inequality.

</details>

### AG06-10. Cubic pole orders

From $v(1-auv-bv^2)=u^3$ in the cubic chart, derive the orders of $v,x,y$ at infinity.

**Hint 1.** The bracket has nonzero constant term and is a unit.

**Hint 2.** The local parameter is $u$, while $x=u/v$ and $y=1/v$.

<details><summary>Full solution</summary>

Assigning order one to $u$ gives order three to $v$. Subtraction in the quotient expressions yields order minus two for $x$ and minus three for $y$. The result follows from the local ring and unit equation, not merely the homogeneous degrees. Nonsingularity made the cotangent generator into a uniformizer through Nakayama and the DVR argument.

</details>

### AG06-11. Zero divisor determines constants

Prove that a nonzero rational function with zero divisor is constant on $C$.

**Hint 1.** It has no poles at any point.

**Hint 2.** The local valuation rings therefore make it a global regular function.

<details><summary>Full solution</summary>

Every local order is zero, so the function belongs to every local ring and is regular near every point. These neighborhoods agree as rational functions and give a global regular function. Projective irreducibility forces it to be a scalar by Chapter 3, and nonzeroness makes that scalar a unit in $k$. This proves the exact kernel statement for the principal-divisor map.

</details>

### AG06-12. A singular valuation trap

Why does the positive order of $t$ on the cusp normalization not prove that $t$ is regular on the cusp at its origin?

**Hint 1.** Its local ring is the subring generated by $t^2,t^3$ with allowed unit denominators.

**Hint 2.** A degree-one coefficient obstructs an expression for $t$ in that ring.

<details><summary>Full solution</summary>

If $t=F(t^2,t^3)/G(t^2,t^3)$ with $G(0)\ne0$, the equality $tG=F$ would have a nonzero coefficient at degree one on the left and none on the right. Thus $t$ is absent from the local ring despite its positive normalization order. That local ring is not the valuation ring, so the nonsingular-curve criterion cannot be transferred to it without normalization data.

</details>

## Closing summary

Nonsingular local curve rings are DVRs. Finite normalization over the polynomial line, including inseparable cases, makes a nonconstant projective rational function a finite map to the projective line. Fiber lengths prove zeros and poles have equal total order. Divisor classes and the spaces $L(D)$ then have explicit sign conventions and elementary finite-dimensional bounds. The projective-line and cubic calculations give exact examples; Riemann–Roch and the sheaf interpretation remain later theorems rather than hidden inputs to these proofs.
