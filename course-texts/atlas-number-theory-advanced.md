
# Number Theory: Ideals, Analytic Methods, and Finite Arithmetic

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-number-theory-advanced) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Number theory](#/courses/atlas-number-theory-cryptography-standard) · [Abstract algebra II and Galois theory](#/courses/course-abstract-algebra-2) · [Real analysis](#/courses/course-lucent-analysis).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A prime can split in a number field, give a residue field, contribute a local
Euler factor, and be a place where a cubic can be reduced. These operations
share arithmetic inputs but answer different questions. This course develops
algebraic and analytic number theory together, with sustained finite-field
teaching and an elliptic-curve bridge. Its cumulative work follows these
connections without inferring a global theorem from a finite table.

## NTA-M0 — Scope and preparation

The outcomes are to prove and use quotient-field and Frobenius facts; distinguish
element from ideal factorization and maximal orders from smaller orders;
derive summatory identities, error bounds, character filters and absolutely
convergent Euler products; and compute good reductions with every exceptional
group-law branch. The elliptic bridge includes rational torsion evidence,
finite generation and descent bounds with their theorem hypotheses. It does
not supply a specialist arithmetic-geometry or cryptographic-security
qualification. The source books remain working editions; this selection does
not qualify either whole book.

**study time depends on the selected reading, attempts and corrections.** Chapter estimates describe earlier
component scopes and overlap preparation; their sum is not an estimate for
this joined course. There is no invented course total or completion grade.

Bring the proof core of [Number Theory and Cryptography](#/courses/atlas-number-theory-cryptography-standard):
Units 1–6 and its selected arithmetic work, together with the existing NT-ATLAS-P,
NT-ATLAS-C and NT-ATLAS-R certificate portfolios. Their solutions, general proofs
and comparison workflow remain there. Units 7–8 offer additional advanced
preparation in Diophantine methods and approximation when a repair calls for
it; they are not part of the native Units 1–6 proof core. These are preparation, not newly assigned
advanced workload. Be able to use Bézout, CRT, valuations, orders, quadratic
reciprocity, Dirichlet convolution and Möbius inversion. The existing
[diagnostic](../books/number-theory-proof-reference/prerequisite-diagnostic-repair.md)
locates repairs to those skills.

Algebra preparation is explicit: polynomial division, irreducibility, quotient
rings, field extensions, minimal polynomials, the tower law, finite abelian
groups and group actions. Repair with the [polynomial chapter](../books/algebra-patterns-structure/polynomial-rings-factorization.md)
Sections 2–9, including Section 9's rational-root theorem proof, and
ALG-CH15-E003, E005, E007, E008, E012, E015, E016,
[extensions chapter](../books/algebra-patterns-structure/field-extensions-minimal-polynomials.md)
Sections 1–5 and Exercises ALG-CH18-E001–E009, and
[group actions](../books/algebra-patterns-structure/group-actions-orbits-counting.md)
Sections 1–4 and ALG-CH08-E001, E003, E004, E006, E007. For cyclic decomposition, use [abelian groups](../books/algebra-patterns-structure/finitely-generated-abelian-groups.md)
Sections 1–5; its proof gives the finite case of the structure theorem. These
preparation chapters have full adjacent keys. A failed diagnostic calls for the indicated repair and another
attempt; it does not require an entire extra book.

Analysis preparation includes complex absolute convergence and elementary
single-variable calculus: limits, differentiation, integration by parts,
integral comparison, finite sums and the meaning of O and asymptotic notation.
NTA-M1 supplies a complete bounded repair for the complex powers and integrals
actually used here. Then use [Dirichlet series](../books/number-theory-proof-reference/dirichlet-series-euler-products.md)
Sections 1–3, 9 and 17, and [summation](../books/number-theory-proof-reference/average-orders-summation.md)
Sections 2, 4 and 7, including their worked examples and complete keys. Full
complex analysis is needed for later continuation and contour proofs; those
proofs are not smuggled into this prerequisite repair.

## NTA-M1 — Diagnostic, complete answers, and precise repairs

Write a first response to D1–D8 and record help already seen. Compare with every
answer, repair the identified prerequisite, and rewrite the argument.

1. **D1.** Is F3[t]/(t²+1) a field? Is F2[t]/(t²+1) a field?
2. **D2.** State and prove the finite tower law. Does Q(√2,√8) have degree four?
3. **D3.** Explain why a group action consists of bijections; identify the
   stabilizer of a point in the regular left action of a group on itself.
4. **D4.** For s=σ+it and positive integer n, compute |n^-s|. When does
   the absolute series Σn^-s converge?
5. **D5.** Evaluate the improper integral of t^-σ from N to infinity,
   and bound Σ(n>N)n^-2. What changes at σ=1?
6. **D6.** If |a_n|≤1, why may two series Σa_n n^-s and Σn^-s be
   multiplied and regrouped when σ>1? What if σ=1?
7. **D7.** In a field of odd characteristic, what is 2P for a point
   P=(x,0) on a nonsingular short Weierstrass cubic? May one divide by 2y?
8. **D8.** Does convergence of L(1,χ) prove L(1,χ)≠0? Does a finite prime
   count prove the prime number theorem?

**D1 answer.** The quadratic takes values 1,2,2 at 0,1,2 in F3, so has no
root and is irreducible. Polynomial Euclid gives inverses modulo it, hence the
quotient is a nine-element field. Over F2 it is (t+1)²; the nonzero class
ε=t+1 has square zero. This four-element ring is not a field. Repair:
[finite fields](../books/algebra-patterns-structure/fields-fractions-finite-fields.md)
Sections 4–5 and ALG-CH17-E007–E010; NTA-M3 below proves the general mechanism.

**D2 answer.** For F⊆K⊆E with finite bases u_i of K/F and v_j of E/K, the
products u_i v_j span by successive expansion. In a relation
Σ_j(Σ_i c_ij u_i)v_j=0, independence of v_j makes each inner coefficient
zero; independence of u_i makes every c_ij zero. Thus [E:F]=[E:K][K:F].
Since √8=2√2, Q(√2,√8)=Q(√2), of degree two, not four. Repair: extension
Sections 1–5 and ALG-CH18-E003, E005, E006, E020, with their full keys.

**D3 answer.** The action of g has inverse the action of g^-1, since both
composites act by the identity. In the regular action gx=x implies g=e,
so the stabilizer is {e}. Repair: group-action Sections 1–4 and the named
ALG-CH08 questions above. Frobenius will act on finite-field elements, rather
than on a list of numerical approximations.

**D4 answer and complex repair.** Define n^-s=exp(-s log n), using the real
logarithm of positive n. Its modulus is exp(-σ log n)=n^-σ. Integral
comparison gives convergence exactly for σ>1. At σ=1 absolute terms are
harmonic. For σ≤0 the absolute terms do not tend to zero; for 0<σ≤1 the
integral diverges. A conditionally convergent alternating series is a separate
statement. Repair: Dirichlet-series Sections 1–3 and Exercises 1–2.

**D5 answer and calculus repair.** For σ>1 the antiderivative gives
∫_N^∞t^-σ dt=N^(1-σ)/(σ-1); t^(1-σ) tends to zero. Decreasing positive
terms give Σ(n>N)n^-2≤∫_N^∞t^-2 dt=1/N for integer N≥1. At σ=1 the
antiderivative is log t and is unbounded. For σ<1 the power integral also
diverges. Differentiating t^-s gives -s t^(-s-1), the derivative used in
partial summation. Repair: summation Sections 4 and 7, Exercises 6, 10, 13–15,
and Dirichlet-series Section 17. These are the exact calculus operations needed.

**D6 answer.** The sum of absolute double terms is bounded by
(Σm^-σ)(Σn^-σ)<∞. Tails outside a large finite rectangle have arbitrarily
small total absolute mass. Therefore every regrouping by k=mn has the same
limit, with coefficient Σ(d|k)a_d; this proves the convolution product.
At σ=1 the dominating harmonic series diverges and this argument fails;
a separate theorem is necessary. Repair: Dirichlet-series Sections 2–3 and
Exercises 3–7, plus the absolute-tail argument in NTA-M5.

**D7 answer.** P=-P, so 2P=O. The vertical branch is taken before a slope
is formed; 2y=0 cannot be inverted. Repair: [elliptic group law](../books/number-theory-proof-reference/elliptic-curves-group-descent.md)
Sections 1–3 and Exercises 1–7; NTA-M6 states all branches.

**D8 answer.** A convergent series can sum to zero. Nonprincipal character
nonvanishing at one is an additional theorem; finite prime counts cannot
establish an asymptotic over all x. Repair: [characters](../books/number-theory-proof-reference/characters-primes-progressions.md)
Sections 5–6, Exercises 15–18, and [prime distribution](../books/number-theory-proof-reference/prime-distribution-sieves.md)
Sections 1–3, Exercises 4, 16–18. A missing deep theorem is a boundary to state,
not a calculation to guess.

## NTA-M2 — Ordered required source assignments and complete keys

Read the named explanation and worked examples before each numbered roster.
The order below is required, with the new modules and practice interleaved as
shown. Each range means **every** question in that inclusive range, not a
sample. The seven NT chapters contain 134 selected questions; the finite-field
selection adds fourteen, giving 148 native questions. D1–D8, NTA-E001–E012
and the three cumulative portfolios below are additional joined work.

| Stage | Required source explanation and questions | Exact complete public-key location and joined work |
| --- | --- | --- |
| 1 | [Fields of Fractions and Finite Fields](../books/algebra-patterns-structure/fields-fractions-finite-fields.md), Sections 4–9; ALG-CH17-E007–ALG-CH17-E020 | Same chapter, Exercises with full solutions: each identical stable ID has its own Solution subheading. Then NTA-M3 and NTA-E001–E003 |
| 2 | [Quadratic Integers, Ideals, and Factorization Failure](../books/number-theory-proof-reference/quadratic-integers-ideals.md), Sections 1–8; Exercises 1–20 | Same chapter, Exercises with complete solutions, numbered 1–20 with adjacent Solution paragraphs. Then NTA-M4 from “We first certify the correct ring” through “arbitrary field is being inferred from this example”, and NTA-E004 |
| 3 | [Number Fields, Norms, and Prime Ideals](../books/number-theory-proof-reference/number-fields-norms-prime-ideals.md), Sections 1–8; Exercises 1–20 | Same chapter, Exercises with complete solutions, numbered 1–20. Then NTA-M4 from “In a degree-n number field” through “quotient F9 from NTA-M3”, and NTA-E005 |
| 4 | [Average Orders and Summation Methods](../books/number-theory-proof-reference/average-orders-summation.md), Sections 1–17; Exercises 1–18 | Same chapter, Exercises with complete solutions, numbered 1–18. Then summation proofs in NTA-M5 and NTA-E006–E007 |
| 5 | [Dirichlet Series, Euler Products, and Convergence Contracts](../books/number-theory-proof-reference/dirichlet-series-euler-products.md), Sections 1–17; Exercises 1–18 | Same chapter, Exercises with complete solutions, numbered 1–18. Then absolute-product and ideal-factor proofs in NTA-M5 and NTA-E008 |
| 6 | [Characters and Primes in Progressions](../books/number-theory-proof-reference/characters-primes-progressions.md), Sections 1–8; Exercises 1–18 | Same chapter, Exercises with complete solutions, numbered 1–18. Then character/filter proofs in NTA-M5 and NTA-E009 |
| 7 | [Prime Distribution and Elementary Sieve Architecture](../books/number-theory-proof-reference/prime-distribution-sieves.md), Sections 1–8; Exercises 1–20 | Same chapter, Exercises with complete solutions, numbered 1–20. Then sieve/boundary work in NTA-M5 and NTA-E010 |
| 8 | [Elliptic Curves: Group Law, Reduction, and Descent](../books/number-theory-proof-reference/elliptic-curves-group-descent.md), Sections 1–9; Exercises 1–20 | Same chapter, Exercises with complete solutions, numbered 1–20. Then NTA-M6, NTA-E011–E012, NTA-P001 and NTA-P002 |
| 9 | After intervening repair or another sitting if useful, reconstruct NTA-R001 from a blank page | Complete public model and repair below; earlier models may already be known |

Minkowski's convex-body theorem and ideal-class finiteness, zeta continuation
and functional equation, the deep Dirichlet/PNT steps, and the elliptic
structural theorems are **imported theorems**, with uses and limits stated in
the sources. Reading their statements and answering their boundary questions
is required; this course does not claim to prove them. The algebraic-closure
existence theorem and finite-abelian-group decomposition theorem are also
imported. The elementary bridge proofs below are given in full.

The native “certified prime decomposition table,” summatory-function lab,
sieve dashboard and finite-curves/rational-status audit remain **open project
specifications**. Their full broad implementations remain unassigned optional continuations
with their original scopes, not completed submitted solutions. The new
fixed NTA portfolios supply complete bounded models. No specialist local-field
lane is added: the existing p-adic Chapter 12 already has seven full models
and its own changed quadratic-construction task.

## NTA-M3 — Finite fields, Frobenius, and residue norms

An irreducible modulus is the reason division works. If f∈Fp[t] is
irreducible and g is nonzero of degree below deg f, gcd(f,g)=1; polynomial
Euclid gives ug+vf=1. In the quotient [u][g]=1. Division by monic f gives a
unique representative of degree below deg f, so a degree-n irreducible
modulus gives exactly p^n elements. Conversely f=gh with both factors of
smaller positive degree gives nonzero classes [g],[h] whose product is zero.
Prime-power cardinality alone does not prove a ring is a field.

Here is the general cyclicity proof behind primitive elements. In a finite
abelian subgroup G of a field's multiplicative group, let m be the lcm of
all element orders. For each prime ℓ dividing m, choose an element whose order
contains the maximal ℓ-power ℓ^a, and raise it to remove its coprime part.
Multiply these elements for different ℓ. Elements commute and their orders
are coprime, so the product has order the product of their orders, namely m:
if a power of the product is one, raising away the other factors forces each
coprime order to divide that power. Every element of G is a root of t^m−1,
so the field root bound gives |G|≤m. The constructed element gives m≤|G|.
Hence |G|=m and G is cyclic. In particular Fq× has order q−1 and is cyclic.
The root bound fails over rings with zero divisors, precisely the obstruction
in the four-element nonfield from D1.

In characteristic p, binomial coefficients show (a+b)^p=a^p+b^p; Frobenius
Fr(a)=a^p also preserves multiplication. If Fr(a)=Fr(b), then (a−b)^p=0,
so a=b in a field. A map on a finite set that is injective is surjective:
Fr is an automorphism. If q=p^n, Lagrange gives a^q=a for nonzero a and
also for zero. Thus Fr^n=id. If Fr^d=id for 0<d<n, all p^n elements would
be roots of t^(p^d)−t, a nonzero polynomial of smaller degree, impossible.
Fr therefore has order n. Its fixed elements are exactly Fp: t^p−t has at
most p roots and the prime subfield already supplies p.

Import existence of an algebraic closure of Fp. In it, t^(p^n)−t has
nonzero constant derivative −1, hence p^n distinct roots. Frobenius identities
make these roots closed under subtraction and multiplication; if a≠0 is a
root, so is a^-1. They form a field. Every field of order p^n embeds in the
closure: choose a generator γ of its cyclic multiplicative group, present it
as Fp[t]/(m_γ), and send γ to a root of its irreducible minimal polynomial.
The image is the entire p^n-root set, proving uniqueness up to isomorphism.
If F_(p^d)⊆F_(p^n), counting a basis, or the tower law, gives d|n.
Conversely d|n makes every root of t^(p^d)−t fixed by the p^n-power map.
Those roots give the unique subfield of size p^d. This is a statement inside
a chosen algebraic closure, not equality of arbitrary labeled quotient sets.

**Worked residue field.** Put F9=F3[α], α²=−1=2. Its elements are a+bα,
and

(a+bα)(c+dα)=(ac−bd)+(ad+bc)α.

Frobenius is (a+bα)^3=a−bα, because α³=−α. Thus the finite-field trace
z+z³=2a and norm z z³=a²+b² lie in F3. For z≠0 the norm is nonzero:
a²+b²=0 in F3 forces a=b=0, since the only nonzero square is one. Therefore
z^-1=(a−bα)/(a²+b²). For β=1+α, norm is two, inverse is 2+α and the
following complete power cycle proves primitiveness.

| F9 power k | coefficient of 1 in β^k | coefficient of α in β^k |
| --- | --- | --- |
| 0 | 1 | 0 |
| 1 | 1 | 1 |
| 2 | 0 | 2 |
| 3 | 1 | 2 |
| 4 | 2 | 0 |
| 5 | 2 | 2 |
| 6 | 0 | 1 |
| 7 | 2 | 1 |
| 8 | 1 | 0 |

The Frobenius orbits are {0}, {1}, {2}, {α,2α}, {1+α,1+2α},
{2+α,2+2α}. The three singleton orbits are exactly the prime field;
each other element has a degree-two minimal polynomial. Orbit–stabilizer for
the group ⟨Fr⟩ of order two explains the possible orbit lengths. There is no
F27 subfield of F9 because 3 does not divide 2.

**From element norm to ideal norm.** For Z[i], multiplication by a+bi in
the integral basis (1,i) has matrix [[a,−b],[b,a]]. Its determinant is
a²+b². For a nonzero element the index of its image lattice is the absolute
determinant, so the principal ideal norm is a²+b². Modulo an inert odd prime
p≡3 mod4, the same polynomial quotient is F_(p²), Frobenius sends α to −α,
and the residue-field norm is a²+b² modulo p. These are compatible
calculations on different objects: an integer lattice index and an element
of Fp. Reducing an integer norm modulo p does not turn it into the cardinality
of a quotient ideal.

## NTA-M4 — Algebraic integers, ideals, and prime decomposition

We first certify the correct ring. If a+bi∈Q(i) is integral, its rational
trace 2a and norm a²+b² are integers: its minimal polynomial has integral
coefficients by the monic-integrality criterion and Gauss's lemma. Write
u=2a∈Z. Then (2b)²=4(a²+b²)−u²∈Z; a rational number with integral square
is an integer, because its reduced denominator must divide its numerator.
So v=2b∈Z. Since u²+v² is divisible by four, square residues modulo four
force u and v both even. Thus a,b∈Z. Conversely a+bi with integral a,b
satisfies X²−2aX+(a²+b²), a monic integral polynomial. Therefore
O_Q(i)=Z[i], with index one for the power basis. The field discriminant is
−4, from the trace matrix [[2,0],[0,−2]].

Gaussian division chooses the nearest integers to the real and imaginary
coordinates of z/w. Both errors have absolute value at most 1/2, so for
r=z−qw, N(r)≤N(w)/2<N(w). The Euclidean algorithm follows. For completeness,
in a nonzero ideal choose d of least positive norm. Division of any element
by d leaves a remainder in the ideal of smaller norm, hence remainder zero;
the ideal is (d). Thus Z[i] is a PID. A Euclidean gcd supplies Bézout, so an
irreducible π dividing ab divides one factor: if it does not divide a,
gcd(π,a)=1 and multiplying a Bézout identity by b proves π|b. Factorization
exists by decreasing positive norm, and this prime property proves uniqueness
up to units and ordering. Units are exactly ±1,±i by a²+b²=1.

A norm proves irreducibility only after its possible values are checked. In
Z[√−5], 6=2·3=(1+√−5)(1−√−5). Norm a²+5b² never equals two or three:
if b≠0 it is at least five, and if b=0 those integers are not squares.
A nonunit factorization of norm four, nine or six would require such a norm.
The four displayed factors are therefore irreducible, while their different
norms and coefficients show they are not associates across the two products.
In particular two is not prime: it divides the product but neither 1±√−5.
This is the maximal quadratic order because −5≡3 mod4.

Ideals repair this failure in a ring of integers, a Dedekind domain. This
unique-ideal-factorization theorem and multiplicativity of ideal norm are
imported from the native chapters. They do not apply to every subring.
For r=√−5, p2=(2,1+r), p3=(3,1+r), q3=(3,1−r) have norms 2,3,3,
respectively, by evaluating r at −1 or 1 in the indicated prime fields.
Direct products give p2²=(2) and p3 q3=(3). For the first equality the product
is generated by 4,2+2r,−4+2r: all are divisible by two, and their differences
supply 6 and then 2. For the second, generators are divisible by three and
include 9 and 6, whose difference is 3. The product p2 p3 is contained in
(1+r) and both have norm six, hence p2 p3=(1+r). The two element
factorizations of six yield the same ideal factorization. p2 is nonprincipal:
a generator would have norm two, which is impossible. Its class is a
nontrivial class-group obstruction. No class-number computation for an
arbitrary field is being inferred from this example.

In a degree-n number field, embeddings define trace and norm, equivalently
trace and determinant of multiplication. For nonzero integral ideal I,
N(I)=|O_K/I|. A nonzero prime ideal over rational p has finite field quotient
F_(p^f). Unique ideal factorization writes p O_K=∏P_j^(e_j), and
Σe_j f_j=n. The e_j record multiplicity; f_j records residue-field degree.
If an integral primitive element θ has **p not dividing the index**
[O_K:Z[θ]], factoring its minimal polynomial modulo p computes these e_j
and f_j through (p,g_j(θ)). At an index prime, first change to a verified
integral basis. Field discriminants, not arbitrary order discriminants,
detect ramification.

For Q(i) the index is one at every prime. Odd p splits when −1 is a square:
Fp[t]/(t²+1)≅Fp×Fp through evaluation at two distinct roots. If −1 is
not a square, the quotient is a field of p² elements and (p) is prime.
At p=2, (2)=−i(1+i)² as elements, so (2)=(1+i)² as ideals. The single
prime ideal has norm two; the whole quotient by (2) has four elements and a
nilpotent. Distinguish the prime-ideal quotient from the whole ramified quotient.

For p=5, evaluation at 2 and −2 is the explicit map
[a+bi]↦(a+2b,a−2b). It is onto: given (u,v), choose a=(u+v)/2,
b=(u−v)/4 in F5. Before quotienting its kernel is (5), so the induced map on Z[i]/(5)
is the CRT isomorphism. The prime ideals are (5,i−2)=(2−i) and
(5,i+2)=(2+i), with norm five each. For p=3 the polynomial has no root,
so (3) is prime with norm nine and quotient F9 from NTA-M3.

## NTA-M5 — Summation, characters, and analytic local factors

**Exact identities before estimates.** Let D(x)=Σ(n≤x)τ(n). Count pairs of
positive integers (a,b) with ab≤x. With y=⌊√x⌋, every such pair has a≤y
or b≤y, and the square a,b≤y lies entirely in the region. Hence

D(x)=Σ(d≤x)⌊x/d⌋=2Σ(d≤y)⌊x/d⌋−y².

This proof includes real x≥1 and the floor at the endpoint. Each replacement
⌊x/d⌋=x/d+ε_d has −1<ε_d≤0; therefore the error in the last expression
has absolute value below 2y. Integral comparison gives log y≤H_y≤1+log y.
For x≥4, y/√x∈[1/2,1], so log y=(log x)/2+O(1). Substitution proves
D(x)=x log x+O(x). This is a complete safe estimate. The sharper native
x log x+(2γ−1)x+O(√x) result also needs the stated sharper harmonic
expansion; the crude integral comparison does not establish its coefficient.

| Hyperbola input x | y | floors for d=1 through y | D(x) |
| --- | --- | --- | --- |
| 6 | 2 | 6,3 | 14 |
| 10 | 3 | 10,5,3 | 27 |
| 20 | 4 | 20,10,6,5 | 66 |

A second exact divisor switch gives μ(n)²=Σ(d²|n)μ(d), checked on every
prime power by 1−1=0 when the exponent is at least two. Thus
Q(x)=Σ(d≤√x)μ(d)⌊x/d²⌋. Replacing the floors costs at most √x;
extending the main sum costs at most xΣ(d>√x)d^-2=O(√x).
Absolute convergence gives Σμ(d)/d²=1/ζ(2), so
Q(x)=x/ζ(2)+O(√x). This supplies an elementary density proof without
reading a coefficient theorem off a pole. Constants are absolute here; a
fixed-modulus character estimate later may depend on its modulus.

**Partial summation, derived.** Put A(t)=Σ(n≤t)a_n. On [n,n+1), A(t)=A(n).
Summing the fundamental theorem of calculus on those intervals makes
∫_M^N A(t)b'(t)dt=Σ(n=M to N−1)A(n)(b(n+1)−b(n)). Telescoping then gives,
for integer M<N,

Σ(M<n≤N)a_n b(n)=A(N)b(N)−A(M)b(M)−∫_M^N A(t)b'(t)dt.

Choose b(t)=t^-s. If |A(t)|≤C t^θ for t≥1 and σ=Re(s)>θ, the integral
tail is bounded by C|s|M^(θ−σ)/(σ−θ); the boundary at N tends to zero.
The tail after M has absolute value at most
C(1+|s|/(σ−θ))M^(θ−σ). This proves ordinary convergence; it does not
replace Σ|a_n|n^-σ by a smaller series. A nonprincipal character modulo q
has zero sum over a period, hence |A(t)|≤q, and therefore converges for
σ>0 by this argument. Absolute convergence is still initially σ>1.

**Characters and progression filters.** Import the finite-abelian decomposition
G≅C_(m1)×…×C_(mr). A character is determined on each cyclic generator by
an m_j-th root of unity. Every such choice gives a character; there are
∏m_j=|G|. If g≠e, some cyclic coordinate is nonzero and the character
sending that generator to exp(2πi/m_j), the others to one, does not take
value one on g. This supplies the separation step in orthogonality.
For S(g)=Σ_χχ(g), multiplication of all characters by a character ψ with
ψ(g)≠1 permutes the sum, so S(g)=ψ(g)S(g) and S(g)=0. At g=e the sum
is |G|. Since unit character values have modulus one,

(1/|G|)Σ_χ overline(χ(a))χ(n)=1 if n=a, and 0 otherwise.

For U(q), extend each character by zero on nonunits. This gives the exact
residue-class filter for a unit a, valid also on nonunit n because both sides
are zero. It does not filter a nonunit target by the same formula.

Modulo four the two characters are χ0 and χ4. Their values are:

| Residue n mod 4 | χ0(n) | χ4(n) | indicator of 1 mod 4 | indicator of 3 mod 4 |
| --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 |
| 2 | 0 | 0 | 0 | 0 |
| 3 | 1 | -1 | 0 | 1 |

The indicators are (χ0+χ4)/2 and (χ0−χ4)/2. Summing a character over its
unit group gives zero unless it is principal: multiplication by a unit where
its value differs from one multiplies the unchanged sum by that value.
This proves bounded partial sums after periodic extension, independently of
any prime distribution theorem.

**Safe products.** With s=σ+it and σ>1, |χ(n)n^-s|≤n^-σ. The absolute
double-sum argument in D6 licenses convolution. A finite prime Euler product
expands into all integers supported on those primes. The excluded integers
are a tail subset of an absolutely convergent series; once all primes ≤N
are present, every excluded integer exceeds N. This proves the infinite
Euler product by a tail bound, without a formal infinite rearrangement.
For χ4 this gives L(s,χ4)=∏p(1−χ4(p)p^-s)^-1.

Let a(n) be the number of nonzero integral ideals of Z[i] of norm n.
Gaussian ideal factorization gives the local series in T=p^-s:

- split p: two prime ideals of norm p give Σ(k≥0)(k+1)T^k=(1−T)^-2;
- inert p: one prime ideal of norm p² gives Σ(k≥0)T^(2k)=(1−T²)^-1;
- ramified 2: one prime ideal of norm two gives Σ(k≥0)T^k=(1−T)^-1.

Here the ramification index is not an extra exponent in the ideal Euler
product: every prime ideal occurs once in its indexing set. The coefficients
are at most the local divisor coefficients k+1, so 0≤a(n)≤τ(n).
Consequently Σa(n)n^-σ≤ζ(σ)²<∞ for σ>1. This proves absolute convergence
of the ideal series and permits the finite-prime limit. Prime-by-prime,
its local factors equal the product of those for ζ(s) and L(s,χ4).
Therefore, in the explicitly stated domain Re(s)>1,

ζ_Q(i)(s):=Σ(I≠0)N(I)^-s=ζ(s)L(s,χ4), and a(n)=Σ(d|n)χ4(d).

The coefficient identity can also be proved directly on prime powers and
then by multiplicativity; it is not an extrapolation of a few coefficients.

| Ideal norm n | χ4(n) | a(n)=sum of χ4 over divisors |
| --- | --- | --- |
| 1 | 1 | 1 |
| 2 | 0 | 1 |
| 3 | -1 | 0 |
| 4 | 0 | 1 |
| 5 | 1 | 2 |
| 6 | 0 | 0 |
| 7 | -1 | 0 |
| 8 | 0 | 1 |
| 9 | 1 | 1 |
| 10 | 0 | 2 |
| 11 | -1 | 0 |
| 12 | 0 | 0 |

**Worked analytic certificate.** At s=2, keep the nonzero terms n=1,3,5:
S5=1−1/9+1/25=209/225. The remaining alternating odd-square terms decrease
to zero. Grouping consecutive negative/positive pairs gives the lower bound
S5−1/49; grouping from the next positive term gives the upper bound S5.
Thus 10016/11025<L(2,χ4)<209/225, with error less than 1/49 from S5.
No numerical library or unbounded computation is needed. This is an
L-value certificate, not a certificate of nonvanishing for every character.

**Sieve and theorem boundaries.** For P=∏(p<z)p, expand
∏(p|P)(1−1_(p|n)) and sum n≤x to get exactly
S(x,z)=Σ(d|P)μ(d)⌊x/d⌋. Each floor error is below one, but 2^k terms
for k sieving primes give only a naive error <2^k. For x=30 and P=30,
30−15−10−6+5+3+2−1=8, representing 1,7,11,13,17,19,23,29.
The one is a survivor and not a prime; a truncated sieve certifies only the
absence of tested factors. A full Eratosthenes sieve through √N certifies
primality for survivors greater than one up to N, because every composite
has a prime divisor at most its square root.

Character orthogonality plus Euler products is not the whole Dirichlet proof.
The general nonprincipal theorem L(1,χ)≠0 is an imported deep step, as are
the zero-free boundary and transform-inversion steps in the analytic proof of
PNT. The general primes-in-progressions asymptotic is deeper than infinitude;
fixed-q error constants do not authorize growing q. Finite counts, the pole
of a function, or its continued values do not supply the missing theorem.
Zeta continuation and its functional equation are imported, not ordinary
summation of divergent series; ζ(−1)=−1/12 does not sum 1+2+3+….

## NTA-M6 — Elliptic reduction, group branches, and global limits

For y²=x³+Ax+B over a field of characteristic different from two and three,
the native short-form criterion is 4A³+27B²≠0; write
Δ=−16(4A³+27B²). The smooth projective curve has the identity O at infinity.
The theorem that its chord-and-tangent operation is an abelian group, in
particular **associativity**, is imported, not proved by the slope formulas.
For E:y²=x³−x, Δ=64, so the model has good reduction at all odd primes.
At p=3 we separately justify the particular four-element operation below;
we do not silently apply the chapter's characteristic-not-two-or-three
criterion there. Equivalently the general smooth Weierstrass cubic theorem
allows characteristic three when the full discriminant is nonzero.

Before adding, verify nonsingularity and point membership. In the permitted
short-form domain the complete branches are:

1. O+P=P and P+O=P, including O+O=O.
2. If affine x1=x2 and y1+y2=0, return O. This includes P=P with y=0.
3. If x1=x2 and the preceding branch does not apply, the two points are equal:
   y2²=y1² implies y2=±y1, and the inverse option was removed. Use
   λ=(3x1²+A)/(2y1), whose denominator is now nonzero.
4. Otherwise use λ=(y2−y1)/(x2−x1), with nonzero denominator.
5. In the slope branches set x3=λ²−x1−x2 and
   y3=λ(x1−x3)−y1. All divisions are field inverses.

Substitution of the line into the cubic makes its three intersection
x-coordinates have sum λ². Reflection of the third intersection gives the
last formulas. In the tangent case repeated intersection gives the derivative
slope. This proves the formulas and closure, including the vertical cases;
associativity still needs the stated theorem. Enumerating a finite table
checks that table only, not associativity over every field.

On E/F5 let P=(2,1), T=(1,0). The doubling slope is 11/2=3 in F5,
so 2P=(0,0), 3P=(2,4), 4P=O. Also P+T=(3,3), 2P+T=(4,0),
3P+T=(3,2). T is not in ⟨P⟩. These eight distinct points exhaust the
count below, proving E(F5)≅C4×C2. A finite count of eight alone would
not identify that structure. A point of order eight has not been found.

Over F3 the same cubic has precisely O,(0,0),(1,0),(2,0), since x³=x
for every x. To justify smoothness directly, for F=y²−x³+x we have
F_x=1 and F_y=2y; no affine point is singular. In projective form
Y²Z=X³−XZ², at O=[0:1:0] the Z partial derivative is one. Every finite
point is its own inverse. The line between two distinct finite points is
y=0 and its third intersection is the remaining one, so their sum is that
remaining point. Identify O with (0,0), (0,0) with (1,0), (1,0) with
(0,1), and (2,0) with (1,1) in the additive group F2². The operation is
coordinate addition, proving associativity and E(F3)≅C2×C2 in this
particular case. This is a complete tiny-group argument in characteristic
three, not an extension of the source's restricted formulas by assertion.

Hasse's bound |#E(Fq)−(q+1)|≤2√q is imported; it checks a count but does
not determine the structure. For an integer check one can use
(#E−q−1)²≤4q. The good local factor of the elliptic L-function is
(1−a_p T+pT²)^-1, with a_p=p+1−#E(Fp). It is **different** from the
Dedekind ideal local factor above. Counting points determines this good
factor only. At bad reduction its replacement needs a separate theorem.

Mordell–Weil over a number field is imported: E(K) is a finite torsion
group times Z^r. A good reduction map is injective on rational torsion of
order prime to the residue characteristic. For the chosen curve, reductions
at 3 and 5 have orders 4 and 8. A rational ℓ-primary torsion subgroup for
ℓ≠3,5 injects at both, so its order divides gcd(4,8)=4. A possible
3-primary part injects at 5 and therefore vanishes; a 5-primary part
injects at 3 and vanishes. Consequently total rational torsion has order
at most four. The four rational points O,(0,0),(1,0),(−1,0) already
supply C2×C2, so they are the full rational torsion group. This uses the
imported reduction theorem and verified good primes, not an injection of
all rational points. It proves no rank statement.

For m≥2, descent studies E(Q)/mE(Q). If E(Q)≅T×Z^r, this quotient has
size |T/mT|m^r. A computed m-Selmer group contains its image; the quotient
involves Tate–Shafarevich m-torsion, so a Selmer upper bound need not be
exact. Independent nontorsion points give a lower bound. Matching justified
bounds proves rank; finite-field counts alone do not. m=1 gives a trivial
quotient and m=0 gives E(Q), not a finite descent quotient in general.
No Selmer computation or rational-rank determination is claimed in the fixed
portfolios. These distinctions are required outputs, not optional caveats.

## NTA-M7 — Joined practice and full keys

Attempt NTA-E001–E012 before their public comparisons. All twelve are required.

**NTA-E001.** In F9 find (1+α)^-1, its trace and norm, and show it is primitive.
**Key.** Frobenius gives conjugate 1−α. Norm is two, trace is two,
and inverse is 2+α. The printed power cycle has eight distinct nonzero
entries before returning to one. Equivalently β⁴=2≠1 and β⁸=1 excludes
every proper divisor of eight. It is primitive.

**NTA-E002.** Prove F_(p^6) has a unique subfield of each permitted size;
which of F_(p²), F_(p³), F_(p⁴) occur?
**Key.** Tower degrees force d|6 for a subfield of size p^d. Conversely roots
of X^(p^d)−X give the unique subfield when d|6, by the root construction
in NTA-M3. The permitted exponents are 1,2,3,6; p² and p³ occur, p⁴ does
not. Uniqueness is inside a fixed field, not equality of labeled models.

**NTA-E003.** Prove the minimal polynomial of α∈F9 over F3 is X²+1
and describe its Frobenius orbit; explain why this does not give a field of
nine elements in characteristic nine.
**Key.** The polynomial is irreducible by the three-value check and annihilates
α; quotient normal forms make it minimal. Frobenius interchanges α and
2α, so the orbit has length two. Every field's positive characteristic is
prime: a composite characteristic produces two nonzero factors of zero.
The characteristic here is three and the extension degree is two.

**NTA-E004.** Prove p2=(2,1+√−5) is nonprincipal and p2²=(2).
**Key.** Its quotient is F2 by sending √−5 to one, so norm is two.
A principal generator would have a²+5b²=2, impossible as in NTA-M4.
The product generators 4,2+2r,−4+2r are all in (2), while their difference
is six and six minus four is two. This proves both containments.

**NTA-E005.** In Q(i) prove that the quotients by the two primes above five
are F5, whereas the quotient by (5) is not a field.
**Key.** Evaluation i↦2 or −2 has kernel (5,i∓2), and is onto F5.
The paired evaluation map has the explicit inverse from NTA-M4, so
Z[i]/(5)≅F5×F5. The classes of i−2 and i+2 are nonzero and their
product i²−4=−5 vanishes in that quotient; these are zero divisors.

**NTA-E006.** Calculate D(12) by the hyperbola identity and prove the total
floor error for d≤y is below 2y in the doubled sum.
**Key.** y=3, so D(12)=2(12+6+4)−9=35. Every ε_d lies in (−1,0], so
|2Σε_d|<2y. The finite check supplements the pair-count proof for all x.

**NTA-E007.** Use partial summation to prove convergence of Σχ4(n)n^-s
for σ>0, and give an explicit tail bound after integer M≥1.
**Key.** The partial sums for residues 0,1,2,3 are 0,1,1,0, hence |A|≤1.
Insert b=t^-s into the proved identity. The terminal boundary vanishes and
the remaining boundary has modulus at most M^-σ; the integral is at most
|s|M^-σ/σ. Thus the tail is at most (1+|s|/σ)M^-σ. Absolute convergence
was not proved for 0<σ≤1; at s=1 the absolute odd harmonic sum diverges.

**NTA-E008.** Compute a(25), a(45) and a(15) in the Gaussian ideal series;
state the initial convergence region of its product identity.
**Key.** At split five the coefficient of T² is three. Inert three permits
even exponents only, so a(9)=1 and a(3)=0. Coprime multiplicativity gives
a(25)=3, a(45)=a(9)a(5)=2 and a(15)=0. The identity
ζ_Q(i)=ζL(χ4) is established here for Re(s)>1, by absolute convergence.

**NTA-E009.** Apply the modulo-four character filter to integers 1 through
12, including nonunits. Does the answer imply equal prime counts?
**Key.** (χ0+χ4)/2 is one at 1,5,9 and zero elsewhere; (χ0−χ4)/2 is
one at 3,7,11. Both are zero at even integers. The three integers in each
class include 1 and 9 in the first and 3 in the second; filtering integers
is not a prime count or an asymptotic. Among primes ≤12 the first class
has five only, and the second has 3,7,11; two is excluded as a nonunit.

**NTA-E010.** Sieve 1 through 30 with 2,3,5; explain the floor-error and
primality contracts.
**Key.** Inclusion-exclusion is 30−15−10−6+5+3+2−1=8. Survivors are
1,7,11,13,17,19,23,29. With three sieving primes the naive absolute
floor-error bound is below eight. Here every composite ≤30 has a prime
factor ≤√30<6, so survivors greater than one are prime. The initial
sieving primes 2,3,5 must be restored if constructing the full prime list.
For a truncated sieve stopping sooner, survival alone would not certify prime.

**NTA-E011.** On E/F5 compute P+O, P+(−P), 2(0,0), 2P and P+T for
P=(2,1), T=(1,0). Refuse (1,1).
**Key.** The first three are P,O,O respectively, using the identity and
vertical branches before division. The doubling slope for P is 11/2=3,
so 2P=(0,0). The distinct-point slope to T is one, giving (3,3).
The proposed point (1,1) fails y²=x³−x, since 1≠0, and is not an input
to the group operation. All permitted outputs satisfy the equation.

**NTA-E012.** Good reductions at 3 and 5 have sizes four and eight for
E/Q. Prove the rational torsion claim and state what remains unknown here.
**Key.** Prime-to-characteristic torsion injectivity removes odd-primary
parts: 3-torsion injects at 5 into a group of order eight, and 5-torsion at
3 into order four; other odd primes divide neither. The 2-primary part
injects at both and has order at most four. The visible rational points
O,(0,0),(1,0),(−1,0) give four points, all finite ones of order two, so
E(Q)_tors≅C2×C2. The argument neither proves rank zero nor computes a
Selmer group. Mordell–Weil and the reduction injection used are imported.

## NTA-P001 — Fixed Gaussian portfolio and complete public model

**Primary task.** Work with K=Q(i), its ring of integers, and
E:y²=x³−x. Submit one connected portfolio with the following eight parts.
(1) Certify the integral basis and norm matrix. (2) Decompose 5,3,2 with
explicit ideals, e,f, quotient constructions and norm products. (3) Give the
F9 power/Frobenius/norm calculation for β=1+α. (4) Derive the corresponding
ideal local factors and ζ_K=ζL(χ4) with its convergence proof; reproduce
a(1) through a(12) and the exact L(2,χ4) interval. (5) Prove the hyperbola
and character-filter statements and reproduce their displayed tables.
(6) Enumerate E/F5 and E/F3 and justify their group structures and good
local factors. (7) Diagnose the ramified quotient and singular curve at two.
(8) Prove the rational torsion bound and give a theorem/claim ledger for PNT,
Dirichlet, Hasse, Mordell–Weil, Selmer and rank. Do not replace parts (1),
(4) or (5) by a finite script. The fixed tables below are public comparison.

**Full model, parts 1–5.** The integrality argument in NTA-M4 gives
O_K=Z[i], basis (1,i), index one and discriminant −4. For z=a+bi the
matrix [[a,−b],[b,a]] has determinant a²+b². In particular N(1+i)=2.
The required ideals are P5+=(5,i−2)=(2−i), P5−=(5,i+2)=(2+i),
P3=(3), and P2=(1+i). Their products are (5)=P5+P5−,
(3)=P3, (2)=P2². Evaluation proves the split quotients; the no-root check
proves the inert field quotient; reduction i↦1 gives O_K/P2≅F2.
The e,f and norm checks are printed explicitly below. Coefficients of each
polynomial and local denominator are in ascending order; T=p^-s.

| Portfolio prime | p | t²+1 coefficients | roots mod p | type | e:f pairs | prime ideal norms | ideal local denominator in T |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P-5 | 5 | 1,0,1 | 2,3 | split | 1:1,1:1 | 5,5 | 1,-2,1 |
| P-3 | 3 | 1,0,1 | none | inert | 1:2 | 9 | 1,0,-1 |
| P-2 | 2 | 1,0,1 | 1 | ramified | 2:1 | 2 | 1,-1 |

In every row Σef=2 and ∏N(P)^e=p². In P-5 each norm is five; in P-3
norm is nine; in P-2 the prime norm two is squared in (2). The whole
quotient by (2) is F2[ε]/(ε²), not F4. The full F9 power cycle and
Frobenius orbits in NTA-M3 give part 3, including β^-1=2+α, trace two,
norm two, and β of order eight. Their proofs precede their finite tables.
NTA-M5 proves all of part 4: finite-prime limits and a(n)≤τ(n) give absolute
convergence at Re(s)>1, the coefficient table gives the twelve requested
values, and the interval is (10016/11025,209/225). Its hyperbola pair-count,
floor-error proof, complete character-separation argument and residue table
supply part 5. D(6)=14, D(10)=27, D(20)=66. The elementary estimate proved
there is x log x+O(x); its sharper counterpart uses the additional native
harmonic expansion.

**Full model, parts 6–8.** These are all x-values, not a sample. “none” means
no square root in the indicated field. Include one O for each curve.

| Curve point row | p | A | B | x | x³+Ax+B mod p | y roots |
| --- | --- | --- | --- | --- | --- | --- |
| E5-0 | 5 | -1 | 0 | 0 | 0 | 0 |
| E5-1 | 5 | -1 | 0 | 1 | 0 | 0 |
| E5-2 | 5 | -1 | 0 | 2 | 1 | 1,4 |
| E5-3 | 5 | -1 | 0 | 3 | 4 | 2,3 |
| E5-4 | 5 | -1 | 0 | 4 | 0 | 0 |
| E3-0 | 3 | -1 | 0 | 0 | 0 | 0 |
| E3-1 | 3 | -1 | 0 | 1 | 0 | 0 |
| E3-2 | 3 | -1 | 0 | 2 | 0 | 0 |

| Good curve | p | A | B | integer Δ | point count including O | a_p | group structure | elliptic local denominator in T |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E5 | 5 | -1 | 0 | 64 | 8 | -2 | C4xC2 | 1,2,5 |
| E3 | 3 | -1 | 0 | 64 | 4 | 0 | C2xC2 | 1,0,3 |

The P,T multiples in NTA-M6 prove C4×C2 over five. The explicit identification
of the four-point operation with F2² proves C2×C2 over three, including
associativity in that case. The traces are 6−8=−2 and 4−4=0;
Hasse's integer checks are 4≤20 and 0≤12. They agree with the imported
bound; agreement is not a proof of Hasse. Ideal local factors use prime-ideal
norms, while elliptic local factors use a_p and p; these have different
coefficients even at the same prime.

At two, F=y²−x³+x has the point (1,0) with both affine partial derivatives
zero: F_x=−3x²+1=0 and F_y=2y=0 modulo two. The model is singular,
Δ=64 is divisible by two, and the elliptic good-factor and group-law
contracts are refused. The nonzero ε=i+1 in the ramified quotient also has
square zero. These are two separately checked failures; ramification in an
arbitrary number field is not equivalent to bad reduction of an arbitrary
curve. The ideal factor at two remains (1−2^-s)^-1 in its own valid
Euler product.

The complete rational torsion proof is NTA-E012. Its conclusion is
E(Q)_tors≅C2×C2, with no rational-rank claim. The ledger is: hyperbola,
character orthogonality, quotient/Frobenius/norm arguments and finite counts
are proved here; Gaussian PID/UFD is proved here; general ideal factorization,
Hasse, Mordell–Weil, torsion reduction, Selmer containment, Dirichlet
nonvanishing and the PNT deep steps are imported. No nonprincipal L-value
nonvanishing theorem is inferred from periodicity. No rational points of
infinite order or matching descent upper bound are supplied, so rank remains
undetermined by this portfolio. This completes all eight fixed deliverables
while leaving
the larger native project specifications open.

## NTA-P002 — Changed portfolio and hypothesis-failure model

**Changed task.** Retain Q(i), but replace the primes by 13 and 7. In
F49=F7[α], α²=−1, use z=1+α. Replace the curve by E':y²=x³+x over F5.
Repeat the norm, ideal decomposition, residue-field, local-factor, point-count
and group-branch parts of P001 on these changed inputs. Give a(169) and
a(91). Then test the tempting rule “factor any chosen defining polynomial
modulo any prime” on Z[√5] at two, comparing the actual maximal order.
Finally explain which universal analytic proofs survive unchanged and why the
finite changes prove no new PNT, rank or security theorem.

**Complete changed model.** 13=(3+2i)(3−2i). Roots of t²+1 mod13 are
5 and 8. The ideal (13,i−5) equals (3+2i), since 3+2·5=13; the other
is its conjugate. Quotients are F13 by evaluation. Squares modulo seven
are 0,1,2,4, so −1=6 is not a square: (7) is prime and its quotient is
F49, of degree two. The changed e,f and norm ledger is:

| Changed prime | p | t²+1 coefficients | roots mod p | type | e:f pairs | prime ideal norms | ideal local denominator in T |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-13 | 13 | 1,0,1 | 5,8 | split | 1:1,1:1 | 13,13 | 1,-2,1 |
| C-7 | 7 | 1,0,1 | none | inert | 1:2 | 49 | 1,0,-1 |

Frobenius sends α to α^7=−α, so z has trace two and norm two in F7.
Its inverse is (1−α)/2=4+3α. Direct multiplication gives one. Its
nonzero norm suffices for invertibility; primitiveness was not requested and
is not inferred from nonzeroness. Prime-power coefficients give a(169)=3
and a(91)=a(7)a(13)=0. In both rows Σef=2 and the norm product is p².
The analytic domain remains Re(s)>1; changing primes does not extend it.

| Changed curve point row | p | A | B | x | x³+Ax+B mod p | y roots |
| --- | --- | --- | --- | --- | --- | --- |
| C5-0 | 5 | 1 | 0 | 0 | 0 | 0 |
| C5-1 | 5 | 1 | 0 | 1 | 2 | none |
| C5-2 | 5 | 1 | 0 | 2 | 0 | 0 |
| C5-3 | 5 | 1 | 0 | 3 | 0 | 0 |
| C5-4 | 5 | 1 | 0 | 4 | 3 | none |

| Changed good curve | p | A | B | integer Δ | point count including O | a_p | group structure | elliptic local denominator in T |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C5 | 5 | 1 | 0 | -64 | 4 | 2 | C2xC2 | 1,-2,5 |

The three finite points all have y=0 and are self-inverse. Adding two distinct
ones with slope zero gives the third; with O this is C2×C2. The point count
four has a_p=6−4=2 and Hasse check 4≤20. Δ=−64 is a unit modulo five,
so the ordinary short-form theorem applies. O and vertical branches are
still required, even though every finite point in this example has order two.

**Complete index-failure model.** For L=Q(√5), the maximal order is
O_L=Z[ω] with ω=(1+√5)/2 and minimal polynomial X²−X−1. The quadratic
integer criterion from the native chapter verifies this is the maximal order.
The smaller order Z[√5] has index two, since √5=2ω−1 makes its basis
change determinant two. Modulo two the convenient polynomial X²−5 becomes
(X+1)², suggesting ramification if the missing index hypothesis is ignored.
In the actual integral basis, X²−X−1 becomes X²+X+1, whose values at
zero and one are both one. It is irreducible, so (2) is inert with residue
field F4 and e=1,f=2. The field discriminant is five, not the order
discriminant twenty. No ramification at two occurs. The smaller order's
reduction has a nilpotent; that observation is about the wrong order.
This gives a concrete false conclusion and its complete repair, not merely
a warning to “check hypotheses.”

| Index audit ring | basis generator polynomial, constant first | index in maximal order | roots modulo 2 | quotient field? | correct interpretation |
| --- | --- | --- | --- | --- | --- |
| Z[sqrt5] | -5,0,1 | 2 | 1 | no | smaller order; do not infer ramification |
| O_Q(sqrt5) | -1,-1,1 | 1 | none | yes | inert; e=1,f=2; norm 4 |

All summation and character proofs in NTA-M5 keep their exact hypotheses.
The fixed Gaussian factorization identity survives; the different curve's
local factors are assembled from its own counts. No rational rank for E'
is asserted. Finite tables and imported structural theorems remain different
evidence, and no cryptographic-security claim is made.

## NTA-R001 — Later public reconstruction, full model, and repair

**Public reconstruction task.** At another sitting after the changed portfolio
or an intervening repair, if useful, start from a blank page. Prior exposure
may include every public model here. Use Q(i) at 17 and 11,
F121=F11[α] with α²=−1 and z=2+α, and the original E:y²=x³−x over F7.
Reconstruct the ideal e,f/norm/local-factor ledger, compute trace, norm and
inverse of z, count the curve, determine its structure using a point and a
second generator, and give its good local factor. Re-derive rather than just
quote the hyperbola identity, character filter and convergence domain. Finish
by repairing three false claims: “the ring of p² elements is always a field,”
“the pole proves PNT,” and “the finite count proves rational rank zero.”
This is a later public reconstruction, not an unseen or timed assessment.

**Complete return model.** 17=(4+i)(4−i), roots of t²+1 modulo17 are
4 and 13, and the prime ideals are (17,i−4)=(4−i) and its conjugate.
Squares modulo eleven are 0,1,3,4,5,9, so −1=10 is not a square and
(11) is inert with quotient F121. The exact ledger is:

| Return prime | p | t²+1 coefficients | roots mod p | type | e:f pairs | prime ideal norms | ideal local denominator in T |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-17 | 17 | 1,0,1 | 4,13 | split | 1:1,1:1 | 17,17 | 1,-2,1 |
| R-11 | 11 | 1,0,1 | none | inert | 1:2 | 121 | 1,0,-1 |

The field trace of z is four; norm is 2²+1=5 in F11. Since 5^-1=9,
z^-1=9(2−α)=7+2α. Frobenius is conjugation since α^11=−α.
The norm-matrix and quotient constructions are the same proved mechanisms
with changed inputs, not an appeal to the earlier numerical answers.

| Residue element | p | a | b | conjugate a,b | trace | norm | inverse a,b |
| --- | --- | --- | --- | --- | --- | --- | --- |
| primary beta | 3 | 1 | 1 | 1,2 | 2 | 2 | 2,1 |
| changed z | 7 | 1 | 1 | 1,6 | 2 | 2 | 4,3 |
| return z | 11 | 2 | 1 | 2,10 | 4 | 5 | 7,2 |

| Return curve point row | p | A | B | x | x³+Ax+B mod p | y roots |
| --- | --- | --- | --- | --- | --- | --- |
| R7-0 | 7 | -1 | 0 | 0 | 0 | 0 |
| R7-1 | 7 | -1 | 0 | 1 | 0 | 0 |
| R7-2 | 7 | -1 | 0 | 2 | 6 | none |
| R7-3 | 7 | -1 | 0 | 3 | 3 | none |
| R7-4 | 7 | -1 | 0 | 4 | 4 | 2,5 |
| R7-5 | 7 | -1 | 0 | 5 | 1 | 1,6 |
| R7-6 | 7 | -1 | 0 | 6 | 0 | 0 |

| Return good curve | p | A | B | integer Δ | point count including O | a_p | group structure | elliptic local denominator in T |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R7 | 7 | -1 | 0 | 64 | 8 | 0 | C4xC2 | 1,0,7 |

Let P=(4,2), T=(0,0). The doubling slope is 47/4=3 modulo seven, so
2P=(1,0), 3P=(4,5), 4P=O. P+T has slope 2/4=4, giving (5,1);
2P+T=(6,0), 3P+T=(5,6). T is outside ⟨P⟩. These eight distinct points
prove C4×C2; the local trace is 8−8=0 and factor denominator is 1+7T².
The good-prime hypothesis holds since seven does not divide 64. Hasse's
integer check is 0≤28. This is another complete finite calculation, not a
rational-rank determination.

The reconstructed hyperbola proof counts (a,b), ab≤x, in the union of the
two strips a≤⌊√x⌋ or b≤⌊√x⌋ and subtracts their square overlap, producing
2Σ(d≤y)⌊x/d⌋−y² with doubled error <2y. The filter proof sums characters
on U(q): their |G| choices follow from cyclic decomposition, and multiplying
by a character nontrivial at na^-1 forces a zero sum unless n=a. Nonunits
have zero values and need a unit target. For the Gaussian analytic identity,
the local ideal coefficients are k+1, the even-exponent indicator, and one,
according to the splitting type. They are bounded by τ(p^k), giving
Σa(n)n^-σ≤ζ(σ)² for σ>1. Finite-prime limits then prove ζ_K=ζL(χ4)
in Re(s)>1. Continuation is not retroactive convergence of those series.

**Complete repair of the three false claims.** F2[ε]/(ε²) has four
elements and a nonzero nilpotent, so the prime-power-size claim fails;
replace cardinality alone with an irreducible polynomial and the Euclidean
inverse proof. A pole suggests a summatory main term, but PNT requires its
zero-free boundary and a justified coefficient-transfer theorem (or a
separate elementary proof); add the missing theorem and its hypotheses, not
more digits. Finally E(F7) is a finite reduction group; rational rank concerns
the free part of E(Q), which that finite count does not determine. Replace
the claimed rank with the exact finite count and, if rank is wanted, supply
independent rational points and a certified upper bound. No such rank
computation has been performed in this course.

## NTA-M8 — Portfolio, descriptive review, and recovery

For every diagnostic response, every assigned source question, each NTA-E
question and each portfolio, keep three distinct dated learner-managed files:
`ID-first-YYYY-MM-DD.txt`, `ID-comparison-YYYY-MM-DD.txt`, and
`ID-revised-YYYY-MM-DD.txt`. For source questions use a stable identity such
as `NTA-S-average-orders-summation-E06`; retain the native ALG IDs for ALG
questions. A batch file is acceptable only if each answer has its own stable
ID, dated first text, comparison and revised text. The first file includes
all help and public models already seen. Preserve it when comparing; in the
comparison file identify each gap, the exact source/model used, and the
necessary repair. The revised file gives the corrected complete argument
and explains the change. Keep earlier files when retrying. Scripts, if used,
are optional finite-audit support; retain inputs, exact output and any failures.
Paper calculations with the full proofs and tables complete these fixed tasks.

Euler's shared note is mutable. This course adds no writing-task registry,
store, programme allocation or automatic file immutability. Checkmarks are
self-reports, not graded evidence. File names and client timestamps do not
verify a delay, independence or lack of exposure. There is no required unseen
interval; R001 is a public reconstruction after possible exposure. The
worksheet portfolio guide
explains recovery of the first/comparison/revised trail. If a file is lost,
state that fact and reconstruct with an exposure declaration; do not invent
an earlier attempt or silently overwrite another response.

The review rubric is descriptive, with no points or automatic pass. For each
branch mark **supported**, **needs repair**, or **not attempted**, and cite
an actual line of work: quotient inverses/cyclicity/Frobenius/subfields;
correct maximal order/ideal equalities/index exceptions; summation error and
character/Euler-product convergence; point membership/all group branches/
finite versus rational claims. For every portfolio also review its connection
between branches, all exact inputs and changed hypotheses, theorem imports,
and help history. “Supported” describes a comparison with public criteria,
not an independent proof certificate or a learner grade.

A repair repeats the general argument before replacing numbers. If a quotient
is not a field, locate reducibility or the wrong order; if an analytic product
has no domain, restore absolute convergence and the finite-prime limit; if a
curve is singular, refuse elliptic good-reduction claims; if a global theorem
is missing, state it as imported or leave the conclusion pending. Optional
finite arithmetic can catch mistakes in the printed cases. It does not prove
the universal cyclicity, ideal-factorization, asymptotic or elliptic theorems.
