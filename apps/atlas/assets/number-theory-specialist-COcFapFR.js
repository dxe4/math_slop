var e=`---
id: course-number-theory-specialist
title: "Local Arithmetic, Geometric Fibers, and Analytic Certificates"
level: graduate
status: beta
estimated_minutes: null
---

# Local Arithmetic, Geometric Fibers, and Analytic Certificates

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-number-theory-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Number Theory: Ideals, Analytic Methods, and Finite Arithmetic](/courses/atlas-number-theory-advanced/) · [Abstract algebra II and Galois theory](/courses/course-abstract-algebra-2/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A polynomial can define a ramified field, an unramified field or a product of
fields. Its integral model can have a nonreduced special fiber even when its
generic fiber is separable. Its congruence roots also determine a distribution
of valuations and a local zeta integral. This course develops the general
arguments that connect those facts, then makes their computational certificates
small enough to inspect completely.

The four required strands are local fields, arithmetic geometry, local analytic
methods and specialist computation. Follow NTS-S01–S07, all named source tasks,
NTS-E01–E12 and the cumulative primary NTS-P, changed NTS-C and public return
NTS-R. The local-field source's seven full exercise models already exist: this
course makes their exact work required and extends it. The native books remain
working editions; this selected graduate course does not qualify whole books
or every branch of arithmetic geometry or analytic number theory.

**study time depends on the selected reading, attempts and corrections.** Component estimates overlap preparation
and do not give a course total. Keep actual first work, comparison and revised
worksheets with the exact task ID, date, source version and help seen; use the
[worksheet portfolio workflow](/guide/learner-records/#keep-a-worksheet-portfolio).
Shared notes are mutable and study checkmarks are self-reports, not grades,
proof verification, unseen performance or certified retention.

## NTS-S01 — Preparation and release diagnostic

First complete [advanced number theory](#/item/course-number-theory-advanced),
including NTA-M1's D1–D8, its nine-stage required-source roster, NTA-E001–E012
and NTA-P001/P002/R001. Its finite-field, ideal, convergence and elliptic
hypotheses remain in force. This is prerequisite work, counted once if already
completed. Graduate algebra preparation means quotient rings, finite modules,
localization, trace/determinant, finite separable extensions and exact sequences;
the required repairs below state what is actually needed, rather than assuming
an entire second graduate book. Write Qp and Zp for the p-adic field and its valuation ring; alpha is an adjoined root, pi a uniformizer, and vp is the base valuation v_p. Complex powers use the real logarithm of the
positive residue cardinality. Haar integration here is first defined by finite
residue partitions and countable shell sums.

Attempt D1–D6 before comparison. A failed item releases only its named repair,
then a new written response explaining the previous error.

| Diagnostic | Complete answer and exact repair |
| --- | --- |
| D1: With v5(5)=1, what are v5(25), v5(25+125), and v5(25−25)? | 2,2,infinity. Factor 25(1+5); cancellation can increase valuation only among equal least valuations. Read [Chapter 1](/math_books/p_adic_numbers/_output/chapters/01-divisibility.html), Measuring a prime's presence, The valuation laws and Cancellation in action; reconstruct their proofs. Release task: prove v(x+y)=min(v(x),v(y)) when the two valuations differ, by reducing the unit term. |
| D2: Why does a compatible sequence of residues define an element of Zp? | Representatives form a Cauchy sequence; completeness gives a limit and compatibility gives the prescribed congruences. Two limits differ by every power of p and hence coincide. Read [Chapter 4](/math_books/p_adic_numbers/_output/chapters/04-completion.html), Cauchy means eventual congruence, The sequence construction and Extending the valuation. Reconstruct the geometric-series example and this uniqueness argument. |
| D3: Why does x²−6 have one root in 1+5Z5? | Its value at 1 is −5 and derivative 2 is a unit modulo 5. The next digit solves −1+2t=0 mod 5, so t=3 and the root is 16 mod 25. Read [Chapter 9](/math_books/p_adic_numbers/_output/chapters/09-hensel.html), One more correct digit and Simple-root Hensel lemma, including its full existence/uniqueness proof. A failed unit-derivative test does not prove that no root exists. |
| D4: Is 10 a square in Q5? Is 2? Is 6? | No: valuation one is odd. No: 2 is a nonsquare unit modulo 5. Yes: 6 is a square unit modulo 5 and D3 lifts it. Read [Chapter 10](/math_books/p_adic_numbers/_output/chapters/10-units-squares.html), Squares for odd primes and its proof; rederive the four odd-prime square classes. The 2-adic test uses modulo 8 and is separate. |
| D5: What is the measure of 5Z5 minus 25Z5, and the expected v5 of a Haar-random integral element? | 1/5−1/25=4/25 and sum(m≥1)5^-m=1/4. Read [Chapter 11](/math_books/p_adic_numbers/_output/chapters/11-compactness-measure.html), Haar measure, Integrating locally constant functions and Shells and a local zeta integral; its Exercise 5 has a full answer at [Appendix C, Chapter 11 Exercise 5](/math_books/p_adic_numbers/_output/chapters/appendix-c-solutions.html#chapter-11-exercise-5). The singleton zero has measure 0. |
| D6: For A=Z5[t]/(t²−10), why are 1,t a free Z5-basis, and why does this not itself prove A is a field? | Monic division gives a unique degree<2 remainder over Z5: existence by division and uniqueness since a nonzero multiple of a monic quadratic has degree≥2. The generic polynomial's irreducibility is a separate test; Z5 itself is not a field. Repair NTA-M4 and [advanced algebra](#/item/course-abstract-algebra-advanced), Module 4, M4.1–M4.3 (Fractions must survive zero divisors; Prime correspondence and the visible part of a spectrum; Modules, exactness, and a local test), then AA-ADV-M4-Q1 and AA-ADV-M4-Q2 with the complete public answers in M4.6; NTS-S04 proves the local-ring and fiber facts needed here. |

## NTS-S02 — Ordered native work and exact public keys

Read each named explanation, including its examples and hypotheses, before its
tasks. Every inclusive range means all questions. Preserve separate first and
revised work; an earlier exposed model stays declared.

| Stage and task identity | Required teaching and tasks | Exact complete feedback |
| --- | --- | --- |
| NTS-B12 | [Chapter 12, Local fields beyond the rationals](/math_books/p_adic_numbers/_output/chapters/12-local-fields.html#sec-local-fields), all teaching through What is a local field?, then original Exercises 1–7 | [Chapter 12 complete selected models](/math_books/p_adic_numbers/_output/chapters/appendix-c-solutions.html#sec-local-fields-selected-models): the seven named Exercise 1–7 subsections, ending with the full spanning proof. State vK(pi)=1 throughout. |
| NTS-B12C | [Selected local-field work, Changed public case: three quadratic constructions](/math_books/p_adic_numbers/_output/chapters/12-local-fields.html#sec-local-fields-quadratic-change), task local-fields-quadratic-three-constructions-v1, all five parts | [Changed quadratic case: complete model](/math_books/p_adic_numbers/_output/chapters/appendix-c-solutions.html#sec-local-fields-quadratic-change-key), followed by [Evidence rubric and repairs](/math_books/p_adic_numbers/_output/chapters/appendix-c-solutions.html#sec-local-fields-selected-rubric). Its Q5[T]/(T²−6) is a product, not a quadratic field. |
| NTS-B20 | [Chapter 20](/math_books/p_adic_numbers/_output/chapters/20-ramification.html#sec-ramification), Extending valuations carefully, Different and discriminant, Tame and wild ramification; Exercises 1,2,3,5 | NTS-S03 and NTS-E01–E03 below give full arguments and all four exact source answers. Unramified/Frobenius and prime-decomposition sections are further reading. |
| NTS-B42 | [Chapter 42](/math_books/p_adic_numbers/_output/chapters/42-etale-cohomology.html#sec-etale-cohomology), Preparation from this book through A complete finite étale cover; Torsors and first cohomology; The Kummer sequence revisited up to the Picard/Brauer subsection; Frobenius and the trace formula through A second check: zero-dimensional covers. Exercises 3,4,7,10 | Same chapter, Selected solutions, exactly Solution to Exercise 3, Solution to Exercise 4, Solution to Exercise 7 and Solution to Exercise 10. NTS-S04/E04–E06 add the full geometric/lifting arguments; the higher cohomology and comparison theorem proofs are not assigned as reconstructed proofs. |
| NTS-B22 | [Chapter 22](/math_books/p_adic_numbers/_output/chapters/22-fourier-zeta.html#sec-fourier-zeta), Additive characters through Inversion and self-dual normalization | NTS-S05 proves the ball transform and inversion on the spanning ball functions; NTS-E07 supplies a complete assigned application. No unkeyed chapter exercises are added. |
| NTS-B43 | [Chapter 43](/math_books/p_adic_numbers/_output/chapters/43-igusa-zeta.html#sec-igusa-zeta), Preparation through Stationary-phase recursion; Poincaré series; Changes of variables; Nonsingular residue classes; Rationality and candidate poles; Character twists and oscillatory integrals. Exercises 1–12 | Same chapter, Selected solutions answers 2,4,5,7 in full. NTS-S05 and NTS-E08–E11 below answer 1,3,6,8,9,10,11,12 in full and give the required general simple-root proof, rather than treating a coordinate theorem as an unexplained computation. |
| NTS-B39 | [Chapter 39 exact polynomial precision plan](/math_books/p_adic_numbers/_output/chapters/39-computational-local-fields.html#sec-polynomial-precision-plan), then [Changed task: move the centre](/math_books/p_adic_numbers/_output/chapters/39-computational-local-fields.html#sec-polynomial-precision-task), all its requirements; Precision laboratory through Theorem-status and completeness audit; selected exercise clinic 4,7,8,9,10 | The primary plan and precision laboratory contain their complete models. Changed task: [Changed-task full solution](/math_books/p_adic_numbers/_output/chapters/appendix-c-solutions.html#sec-polynomial-precision-solution). The clinic gives 4,7,8,10; Division guards and a norm computation gives 9. NTS-S06's required new software is additional, so these hand models do not waive executing it. |

The extension-of-absolute-value theorem, completeness/discreteness for finite
Qp extensions, Eisenstein irreducibility and the unramified-construction theorem
are available **imported results**, with Chapter 12's hypotheses. NTS-S03 proves
the ensuing ideal, degree and quadratic different statements; it does not claim
to prove these imported existence theorems. General valued fields can have
defect: no identity below is advertised for arbitrary valued extensions.

## NTS-S03 — Discrete valuation structure and quadratic differents

Fix a finite extension K/Qp, a discrete integer-valued vK, and a uniformizer pi.
For nonzero x write x=pi^vK(x)u; u and u^-1 are integral, so u is a unit.
Every nonzero ideal I of O_K has a smallest attained nonnegative valuation r.
Choose x in I with that value. Every y in I has y/x integral, so I=(x)=(pi^r).
For a fractional ideal, first multiply it into O_K and apply the same proof.
Thus nonzero fractional ideals are exactly (pi^r), r an integer, and their
multiplication/inversion adds/negates exponents. This proves the principal-ideal
structure; it does not assume unique element factorization in an unrelated
number ring.

For precision, pi^N O_K has index q^N, q=|k_K|. Choose q residue representatives
and expand successively modulo pi: each of the N digits has q choices, and
uniqueness follows at the first differing digit. Infinite digit sequences
converge by completeness. This proves compactness of O_K by the diagonal
subsequence argument and supplies normalized additive measure q^-N to its balls.
Translation permutes residue classes; multiplication by pi^r scales this measure
by q^-r, first for balls and then for nonnegative measurable functions by simple
approximation. Here q=p^f; this additive measure normalization differs from the
absolute value extending |p|p, namely p^(-vK/e).

For clarity, here is the full degree argument used by NTS-B12. A residue basis
u1,...,uf lifts to integral units. Finiteness of f follows first: a residue-
independent list lifts to a Qp-independent list by scaling coefficients until
integral with one unit and reducing; there are at most [K:Qp] such lifts.
For a proposed relation among uj*pi^i, 0≤i<e=vK(p), group coefficients at i.
If mi is the least base valuation in that block, residue independence makes
its sum have value e*mi. The nonzero blocks then have values e*mi+i, distinct
modulo e. The least cannot cancel. For spanning, choose the e residue layers
of x modulo pi^e O_K=p O_K, then repeat on the remainder divided by p.
Each coefficient becomes a convergent Zp series; the remainder after M rounds
has value≥eM. Thus the ef elements span K and are independent, proving n=ef.
No individual terms within one i-block were assumed to have distinct values.

The norm valuation has two normalizations that must not be mixed. Using the
imported extending-absolute-value formula |x|K=|N(x)|p^(1/n) together with
|x|K=p^(-vK(x)/e) gives v_p(N(x))=(n/e)vK(x)=f*vK(x).
In particular the ideal norm of (pi) has size p^f=q. This argument is for a
field extension; regular determinants of a product algebra are not norms from
a degree-two field.

Now take **odd p**, D nonzero with either vp(D)=1 or D a nonsquare unit, and
L=Qp(alpha), alpha²=D. In the first case Eisenstein gives e=2,f=1; a+b alpha
has value min(2vp(a),2vp(b)+1), since parities differ. In the second case e=1,
f=2; scale a,b to have least base valuation 0 and use independence of
1,bar(alpha) in the residue quadratic field to obtain value min(vp(a),vp(b)).
In either case integrality is equivalent to a,b in Zp, so O_L=Zp[alpha].
This proves the integral-basis assertion before using a monogenic formula.
Multiplication has matrix [[a,Db],[b,a]], trace 2a and norm a²−Db².
The trace matrix for basis 1,alpha is diag(2,2D), hence discriminant 4D.

We can derive the different without importing a derivative formula. If x=a+b
alpha, the conditions Tr(x),Tr(x alpha) integral are 2a,2Db integral.
As 2 is a unit, the trace-dual lattice is Zp+(alpha/D)Zp, which equals
(1/(2alpha))O_L. Consequently the different is (2alpha). Its exponent is 1
in the ramified case and 0 in the unramified case; vp(discriminant)=f times
that exponent. The ramified quadratic is tame because p does not divide 2.
At p=2 the trace 2a is still characteristic zero, but 2 is no longer a unit;
these shortened lattice conclusions require repair and are not extended by
substitution. A derivative of a nonmaximal order does not establish a field
different without the integral-basis check.

**General tower work.** Restrict normalized valuations in M/L/K:
vM(x)=e(M/L)e(L/K)vK(x), so e multiplies. Residue-field tower degrees multiply
by the vector-space tower law. For the source's Eisenstein family t^n−p,
its derivative n alpha^(n−1) and the resultant product over roots give
vp(disc)=(n−1)+n vp(n); the sign does not affect valuation. The family is
monogenic as an integral basis by the same successive-layer argument for
an Eisenstein uniformizer. Tameness is p not dividing n. This proves exactly
the invariants used in E01–E03; it is not a classification of wild extensions.

## NTS-S04 — Arithmetic models, fibers and infinitesimal lifting

An affine scheme Spec A has prime ideals as its points, open basic sets
D(g)={primes not containing g}, and regular functions localized to A[g^-1].
Its local ring at a prime is A localized away from that prime; elements not
in the prime become units. A ring map R→A reverses direction on spectra.
The fiber at a prime of R is Spec(A tensor_R kappa(prime)). Thus an integral
model remembers both a characteristic-zero generic fiber and a residue-field
special fiber; listing only the generic roots forgets ramification.

For R=Zp and A_D=R[t]/(t²−D), monic division makes A_D free of rank 2.
A free module is flat: tensoring an injection with R² gives two copies of
that injection, hence remains injective. The model is finite, flat and finitely
presented over R. Its generic algebra is Qp[t]/(t²−D), and its special algebra
is Fp[t]/(t²−bar D), by substituting the coefficient maps in the same
presentation. These are proofs of flatness and base change in this family;
flatness alone implies neither reducedness nor étaleness.

For odd p and vp(D)=1, the special algebra is Fp[epsilon]/epsilon², one closed
point with a nonzero nilpotent. The generic algebra is a separable field.
For a nonsquare unit, the special algebra is the degree-two finite field:
one closed point of residue degree 2, becoming two points over an algebraic
closure. For a square unit the two simple roots lift; their difference is a
unit, so evaluation and CRT give A_D≅Zp×Zp. Both fibers have two reduced
geometric points. For D=0 both generic and special algebras are nonreduced;
there is no degree-two field extension. A ramified A_D is itself a DVR:
its integral-basis identification with O_L above proves this, and its maximal
ideal (p,alpha) equals (alpha) because D=pu with u a unit.

Here is a general infinitesimal calculation. An R-derivation d into an A-module
M is additive, obeys d(ab)=a db+b da, and kills R. For A=R[t]/(g), it is
determined by dt=m with g'(t)m=0: differentiate each power and the defining
relation; conversely that condition makes the formal derivative descend.
Therefore the universal module is Omega_(A/R)=A dt/(g'(t)dt).
For our quadratic Omega=A_D/(2alpha)dalpha. It vanishes for the two unit-D
étale cases, is nonzero in the ramified model, and vanishes after inverting p
when D≠0. The ramified special-fiber tangent space at its geometric point
is one-dimensional even though the reduced support is a point. A tangent
vector sees the nilpotent direction, not merely the set of points.

**Square-zero lifting theorem in the monic presentation.** Let J²=0 in an
R-algebra C, and a bar be a root of g in C/J. Choose a lift a. The error g(a)
is in J. Every alternate lift is a+h with h in J and

g(a+h)=g(a)+g'(a)h,

since all terms involving h² vanish. If g'(a) is a unit, there is exactly one
correction h=−g'(a)^-1g(a). A unit modulo a nilpotent ideal lifts to a unit:
if bc=1+j, multiply c by 1−j. Thus unit derivative gives existence and
uniqueness over every square-zero thickening. Iterating this argument handles
nilpotent thickenings of any finite length by their successive powers.
The monic finite-presentation criterion identifies this with étaleness; our
calculation proves the lifting property rather than merely naming the criterion.
For t² at zero over k[epsilon]/epsilon² every c epsilon is a lift, so uniqueness
fails. For t²−p from Zp to Z/p², zero in Fp has no lift: (pc)²−p is nonzero
modp². Failure of lifting here records ramification.

**Positive-dimensional arithmetic geometry.** Let F in Zp[x1,...,xn] and a
be a solution modulo p where one partial derivative, say F_n, is nonzero.
For any lift x modulo p^m and any digit vector h, Taylor expansion gives
F(x+p^m h)=F(x)+p^m sum(F_i(x)h_i) modp^(m+1).
One nonzero coefficient makes this a surjective linear equation in n digits:
choose n−1 digits freely, solve uniquely for the remaining one. Consequently
each solution in that residue box has p^(n−1) lifts per level. Through level m
there are p^((n−1)(m−1)) solutions in the fixed box. For each fixed choice of
the other coordinates in their p-adic balls, completeness gives a unique last
coordinate solving F=0. This proves the implicit-coordinate assertion needed
here, including its count, by digit lifting. The same proof with r equations
and an invertible r-by-r Jacobian minor gives p^(n−r) lifts per level.
We have proved the one-chart formal smoothness/counting statement, not global
smoothness of an arbitrary scheme or a general comparison theorem.

For the affine elliptic model y²=x³−x and odd p, derivatives of
F=y²−x³+x are (1−3x²,2y). A simultaneous zero must have y=0 and x=0,1,−1;
the first derivative is 1 or −2, always nonzero for odd p. Its point at infinity
in the projective equation Y²Z=X³−XZ² is [0:1:0], where partial F/partial Z=1
in that chart. Thus every residue point has a smooth one-dimensional lift
chart at odd p. At p=2, (1,0) is singular and cannot use that proof. For p=3
there are exactly four projective points: x=0,1,2 each gives y=0, plus infinity.
Each has three lifts at the next level and hence 4*3^(m−1) points over Z/3^m
in these projective charts. This is an arithmetic scheme calculation with
transition-compatible projective points, not a rational-rank inference.
The general elliptic group associativity and proper smooth model theory retain
their imported status; no Selmer group or rank computation is claimed.

## NTS-S05 — Fourier analysis, lifting counts and local zeta functions

Normalize additive measure of O=Zp to 1. The shell v(x)=k has measure
(1−p^-1)p^-k. A locally constant compactly supported function is a finite
linear combination of ball indicators: compactness gives a finite cover on
which it is constant, then refine to one common ball radius. For the standard
additive character psi with kernel Zp and Fourier convention
hat f(xi)=integral f(x)psi(−x xi)dx, put B=a+p^n Zp, n any integer.
If xi is in p^-n Zp, the character is constant on B, so the transform is
psi(−a xi)p^-n. Otherwise choose h in p^n Zp with psi(h xi)≠1. Translation
by h preserves the integral and also multiplies it by psi(−h xi), forcing it
to 0. Hence hat(1_B)=psi(−a xi)p^-n 1_(p^-n Zp)(xi).
Apply the same integral argument again to obtain hat(hat(1_B))(x)=1_B(−x).
Linearity proves inversion for every such finite ball function. This full
proof avoids importing general Fourier inversion on other function spaces.

Finite character orthogonality is the same translation argument. For m≥1,
sum(a modp^m) exp(2pi i a k/p^m) equals p^m if p^m divides k, else 0:
the latter is a geometric series with ratio not 1 whose p^m-th power is 1.
Consequently the exact root count of an integral polynomial f is

N_m=p^-m sum(a modp^m) sum(x modp^m) exp(2pi i a f(x)/p^m).

This identity uses cancellation. Replacing each exponential by its absolute
value yields p^m, independent of f, and destroys root information. It is a
proof identity; our bounded reference counts residues using exact integers
rather than rounding complex phases.

For f in O[x1,...,xn], a nonzero polynomial has a zero set of measure 0.
In one variable there are finitely many field roots; each singleton has
measure 0 because it lies in balls of measure p^-m for every m. For n variables,
write f as a polynomial in the last coordinate. At least one nonzero coefficient
polynomial in n−1 variables has zero set of measure 0 by induction. Outside
that exceptional set the one-dimensional fiber has finitely many roots.
Fubini for the indicator, a bounded nonnegative measurable function, now gives
measure 0. This supplies the probability-distribution justification in Chapter 43.
Put T=p^-s, A_m=p^(-mn)N_m, A_0=1 and p_r=A_r−A_(r+1).
Partition by exact valuations to obtain Z_f(T)=sum(r≥0)p_r T^r and

Z_f(T)=1−(1−T)sum(m≥1)A_m T^(m−1).

Both are exact for formal power series and in their domains of absolute
convergence. For 0≤T≤1, stopping after r<m leaves nonnegative error at most
A_m T^m. At T=1 the bound is A_m; at a complex T the analogous bound needs
absolute convergence and cannot be inferred just from probability masses.

**General nonsingular congruence theorem.** Suppose a reduction f bar has R
zeros in Fp^n and no zero is singular. The Jacobian digit argument in S04
makes N_m=R*p^((n−1)(m−1)) for every m≥1. Thus
A_m=R*p^(-(n−1))*p^-m, and summing its tail gives

Z_f(T)=1−R/p^n+(R/p^n)*T*(1−p^-1)/(1−p^-1*T).

Indeed each of the R boxes has mass p^-n; on it one constrained coordinate
has valuation at least 1 and geometric excess, while n−1 coordinates are free.
The displayed expression at T=1 is 1 and at T=0 is 1−R/p^n. If R>0 its integral
converges for Re(s)>−1 and its rational continuation has actual simple poles
where p^-s=p. The numerator of each singular factor is nonzero there. If R=0
then f is a unit everywhere and Z=1, an entire function of s. This proof gives
an actual nonsingular theorem for all n, rather than extrapolating a finite table.

**Singular recursion.** For x^a, a≥1, shell summation gives
H_a(T)=(1−p^-1)/(1−p^-1*T^a), convergent for Re(s)>−1/a.
Equivalently A_m=p^-ceil(m/a), by av(x)≥m. These two derivations agree by the
tail identity. For xy on O², product measure and absolute convergence give
Z=H_1(T)²; the domain is Re(s)>−1. For a polynomial x on O^n the other
coordinates have measure 1, so Z=H_1(T). For x²−pu with u a unit and odd p,
unit x gives valuation 0, while x in pO gives valuation 1, since x² and pu
have unequal valuations. Hence Z=1−1/p+T/p, entire in s, although its special
fiber is singular. Singularity does not by itself force a pole.

For a nonsquare unit u there are no roots modulo p, so Z_(x²−u)=1. For a
square unit there are two simple roots and

Z_(x²−u)=1−2/p+(2/p)*T*H_1(T).

For x² itself Z=H_2(T). Partitioning into unit boxes and the zero box proves
the stationary-phase equation Z=1−1/p+(T²/p)Z directly. For x²−pu the
zero box terminates after extracting p; the unit factor on that box needs no
further roots. These arguments prove rational continuation in these cases.
General characteristic-zero Igusa rationality via resolution is imported;
a finite root table does not supply that proof, and no general resolution
algorithm is asserted. Candidate poles from chart denominators can cancel;
only an uncancelled denominator of the final rational expression is a pole.

## NTS-S06 — Required bounded software and complete public reference

Execute the following JavaScript in a fresh Node.js session or a justified
equivalent that preserves exact integer arithmetic and every refusal. Keep the
actual program text, command/runtime, actual output and refusal messages with
NTS-P/C/R. Reproduce every printed input below and compare with the models.
An equivalent implementation still requires an actual run; a hand table does
not replace this obligation. No experimental run, timing or learner result is
asserted by the printed reference.

The algorithm retains all roots at each precision. A root modulo p^(j+1)
reduces to a root modulo p^j, so its unique parent must appear in the preceding
list. Trying all p children of every parent is therefore complete, even for
singular roots that die or branch. This is independent of simple Hensel;
\`hensel\` separately tests the unit derivative before selecting one branch.
Bounds are primes 3,5,7; |D|≤64; precision 1–3; modulus≤343; at most 399
candidate trials over all levels. The classification accepts only D=0 or
vp(D)=0,1, and explicitly refuses higher valuation. It classifies the exact
quadratic algebra, while the finite lists alone establish only congruences.
Ball routines accept the stated bounded integral centers and certified values.
They never append digits or divide a denominator ball containing zero.

<!-- nts-reference:start -->
\`\`\`javascript
'use strict';
const mod = (a, m) => ((a % m) + m) % m;
function integer(x, lo, hi, name) {
  if (!Number.isSafeInteger(x) || x < lo || x > hi)
    throw new RangeError(name + ': bounded integer required');
}
function prime(p) {
  integer(p, 3, 7, 'prime');
  for (let d = 2; d * d <= p; d += 1)
    if (p % d === 0) throw new RangeError('prime: prime required');
}
function inputs(p, D, M) {
  prime(p); integer(D, -64, 64, 'coefficient');
  integer(M, 1, 3, 'precision');
}
function valuation(c, p) {
  if (c === 0) return null;
  let v = 0;
  while (c % p === 0) { c /= p; v += 1; }
  return v;
}
function audit(p, D, M) {
  inputs(p, D, M);
  const v = valuation(D, p);
  if (v !== null && v > 1)
    throw new RangeError('coefficient: valuation above one unsupported');
  let roots = [0], modulus = 1, trials = 0;
  const levels = [];
  for (let j = 1; j <= M; j += 1) {
    const next = [];
    for (const r of roots) for (let digit = 0; digit < p; digit += 1) {
      const x = r + digit * modulus;
      trials += 1;
      if (mod(x * x - D, modulus * p) === 0) next.push(x);
    }
    modulus *= p; roots = next.sort((a, b) => a - b);
    levels.push(roots.slice());
  }
  const firstCount = levels[0].length;
  const type = D === 0 ? 'nonreduced' : v === 1 ? 'ramified' :
    firstCount === 2 ? 'split' : 'unramified';
  return { type, ef: type === 'ramified' ? [2, 1] :
    type === 'unramified' ? [1, 2] : null,
    discriminant: 4 * D, trace: 4, norm: 4 - D, levels, trials };
}
function hensel(p, D, r, M) {
  inputs(p, D, M); integer(r, 0, p - 1, 'residue');
  if (mod(r * r - D, p) !== 0) throw new RangeError('not a residue root');
  if (mod(2 * r, p) === 0) throw new RangeError('nonunit derivative');
  let modulus = p;
  for (let j = 1; j < M; j += 1) {
    const choices = [];
    for (let digit = 0; digit < p; digit += 1) {
      const x = r + digit * modulus;
      if (mod(x * x - D, modulus * p) === 0) choices.push(x);
    }
    if (choices.length !== 1) throw new Error('Hensel invariant failed');
    r = choices[0]; modulus *= p;
  }
  return r;
}
function inversePrecision(p, centre, cap) {
  prime(p); integer(centre, -1000000, 1000000, 'centre');
  integer(cap, 1, 12, 'cap');
  const v = valuation(centre, p);
  if (v === null || cap <= v) throw new RangeError('denominator may contain zero');
  return { valuation: -v, absolute: cap - 2 * v, relative: cap - v };
}
function productPrecision(vx, Nx, vy, Ny) {
  for (const [name, value] of Object.entries({ vx, Nx, vy, Ny }))
    integer(value, -8, 12, name);
  if (Nx <= vx || Ny <= vy) throw new RangeError('uncertified input valuation');
  const value = vx + vy, absolute = Math.min(Nx + vy, Ny + vx);
  return { valuation: value, absolute, relative: absolute - value };
}
const cases = [[5, 10], [5, 2], [5, 6], [5, 0],
  [3, 3], [3, 2], [3, 1], [3, 0],
  [7, 7], [7, 3], [7, 2], [7, 0]];
for (const [p, D] of cases) console.log(JSON.stringify({ p, D, ...audit(p, D, 3) }));
for (const args of [[5, 6, 1, 3], [3, 1, 1, 3], [7, 2, 3, 3]])
  console.log('hensel', JSON.stringify(args), hensel(...args));
console.log('inverse', JSON.stringify(inversePrecision(5, 25, 7)));
console.log('product', JSON.stringify(productPrecision(2, 7, -1, 3)));
const failures = [
  ['even-prime', () => audit(2, 1, 3)],
  ['composite', () => audit(4, 1, 3)],
  ['fraction', () => audit(5, 1.5, 3)],
  ['large-coefficient', () => audit(5, 65, 3)],
  ['large-precision', () => audit(5, 1, 4)],
  ['unsupported-valuation', () => audit(5, 25, 3)],
  ['false-root', () => hensel(5, 6, 0, 3)],
  ['singular-branch', () => hensel(5, 10, 0, 3)],
  ['zero-ball', () => inversePrecision(5, 25, 2)],
  ['uncertified-product', () => productPrecision(2, 2, 0, 3)]
];
for (const [name, run] of failures) {
  try { run(); throw new Error('expected refusal: ' + name); }
  catch (error) {
    if (!(error instanceof RangeError)) throw error;
    console.log('refusal', name, error.message);
  }
}
\`\`\`
<!-- nts-reference:end -->

For each audit, \`trace=4\` and \`norm=4−D\` refer to regular multiplication by
2+t in the rank-two algebra, including the split and nonreduced cases. Only
the two field types give degree-two **field** trace/norm. The discriminant is
that of the integral basis 1,t, namely 4D. The complete expected root sets and
field data are printed in the three models below; \`trials\` counts attempted
children, not a performance benchmark. The three selected Hensel outputs are
16,1,108. Inverse output is {valuation:−2,absolute:3,relative:5}; product output
is {valuation:1,absolute:5,relative:4}.

| Refusal name | Exact expected message |
| --- | --- |
| even-prime | prime: bounded integer required |
| composite | prime: prime required |
| fraction | coefficient: bounded integer required |
| large-coefficient | coefficient: bounded integer required |
| large-precision | precision: bounded integer required |
| unsupported-valuation | coefficient: valuation above one unsupported |
| false-root | not a residue root |
| singular-branch | nonunit derivative |
| zero-ball | denominator may contain zero |
| uncertified-product | uncertified input valuation |

## NTS-E01 — Required practice with complete feedback

Write all twelve responses before their comparisons. Source tasks above remain
separate; these questions join the general arguments rather than replacing them.

**E01.** Complete Chapter 20 Exercises 1,2,3,5. **Full model.** Restriction in a
tower gives e(M/K)=e(M/L)e(L/K), as in S03; residue degrees use the ordinary
tower law. Q5(5^(1/3)) has e=3,f=1 and is tame; Q3(3^(1/3)) has e=3,f=1 and is
wild, since the residue prime divides e only in the second. For t^4−2,
vp(disc)=3+4*2=11 at 2. In an unramified extension e=1, the old uniformizer has
new value 1 and still generates the maximal ideal. The answer must name
normalized value groups, not silently use a fractional normalization.

**E02.** Prove that x in a finite K/Qp has v_p(N(x))=f vK(x), and compute
N(alpha), the ideal norm of (alpha), and v_p(disc) in an odd ramified quadratic
alpha²=pu. **Full model.** S03's extending-absolute-value identity and n=ef
give the valuation formula. N(alpha)=−pu has base valuation 1=f*1, the ideal
norm is p, and disc(1,alpha)=4pu has base valuation 1. Using e vK(x) here
would give 2, contradicting the exact norm. The formula does not apply to a
product quotient as a field norm.

**E03.** Derive the trace dual in an unramified odd quadratic, and explain
why the field discriminant is a unit. **Full model.** For D a nonsquare unit,
O_L=Zp+Zp alpha by residue independence. Conditions 2a and 2Db integral force
a,b integral since 2,D are units. Thus the trace dual is O_L, different is O_L,
and disc 4D is a unit. In the ramified case b may instead lie in D^-1 Zp;
the proof of S03 computes that larger trace dual and different(alpha).

**E04.** Prove that the ramified A_(pu) is finite flat with separable generic
fiber, and identify its special tangent space. **Full model.** Monic division
makes it free of rank 2, hence finite and flat. The generic polynomial has
gcd(t²−pu,2t)=1, because p,u nonzero in Qp, so it is separable and Eisenstein
irreducible. Special fiber is Fp[epsilon]/epsilon², whose maximal ideal is
(epsilon); m/m² has Fp-dimension 1. Equivalently Omega tensor the residue field
is Fp dalpha. This nonzero tangent direction obstructs étaleness despite
flatness and generic separability.

**E05.** Reconstruct the square-zero lift and the finite étale power cover
in Chapter 42 Exercises 3,4. **Full model.** A lift of 0 for t² into
k[epsilon]/epsilon² can be any c epsilon. For a positive integer n invertible in the base ring, the power map on
Gm has ring presentation R[U,U^-1][t]/(t^n−U), free rank n, and t is a unit
since t^n=U. Derivative n t^(n−1) is a unit. The correction equation in S04
therefore has a unique solution for every square-zero ideal. On A¹ the root 0
has zero derivative when n>1, so this proof fails there; if the characteristic
divides n the derivative vanishes on the special fiber even on Gm.

Before E06, let Ksep be a separable closure of K and write
G_K=Aut(Ksep/K), the absolute Galois group. Its action on mu_n is its usual
field-automorphism action; mu_n need not be fixed pointwise. For a nonzero a
and n prime to the characteristic, the splitting field L of t^n−a is finite
Galois and contains a selected root alpha and all mu_n. The displayed cocycle
therefore factors through the finite group Gal(L/K); its continuity needs no
additional infinite-group calculation. A 1-cocycle is a function satisfying
c(gh)=g(c(h))c(g), and multiplying by g(zeta)/zeta changes it by a coboundary.
The source's general H¹ interpretation, Hilbert 90 and the long exact
cohomology sequence are imported reading. Only this explicit cocycle and its
root-change proof are reconstructed here; a cocycle need not be a group
homomorphism when the action is nontrivial.

**E06.** Complete Chapter 42 Exercises 7,10 and the p=3 elliptic lift count.
**Full model.** If alpha^n=a, n prime to char K, then c(g)=g(alpha)/alpha
is in mu_n and c(gh)=g(c(h))c(g). Replacing alpha by zeta alpha multiplies
c by g(zeta)/zeta, a coboundary; this is a cocycle calculation, not a proof of
Hilbert 90 or the full Kummer isomorphism. For P¹/F5 the direct counts at
m=1,2,3 are 6,26,126. Under the imported cohomology table H^0=Ql,H^1=0,
H^2=Ql(−1), geometric Frobenius contributes 1+5^m. Arithmetic Frobenius is
the inverse and cannot replace it in that same convention. S04 checks every
p=3 elliptic derivative, including infinity; four smooth boxes each have
3^(m−1) projective lifts, giving 4,12,36 at m=1,2,3. Neither calculation gives
a rational rank or a proof of the general trace formula.

**E07.** Transform 1_(2+3²Z3), and prove inversion for it. **Full model.**
S05 gives 3^-2 psi(−2xi)1_(3^-2 Z3)(xi). The second transform is the
integral of that expression times psi(−x xi). It is 9*3^-2=1 when x+2 is
in 9Z3 and 0 otherwise, by the annihilator calculation. It is precisely the
indicator at −x. The negative sign belongs to the chosen transform convention.

**E08.** Complete Chapter 43 Exercises 1,3,6. **Full model.** For Exercise 1,
the shell v(x)=m is pi^m O minus pi^(m+1)O, with additive measure
q^-m−q^(-m−1)=(1−q^-1)q^-m. This is additive measure, not unit mass per
multiplicative shell. For Exercise 3, the monomial tail is q^-ceil(m/a),
because av(x)≥m; shell summation gives
(1−q^-1)/(1−q^-1 T^a), with Re(s)>−1/a. Exercise 6 has f=x on O^n:
the other n−1 coordinates integrate to 1 and the same a=1 factor remains.
A free coordinate is not another constrained factor. More generally a depth-m
box has measure q^(-mn), since its q^(mn) translates partition O^n; the
zero-set argument in S05 justifies summing all finite valuation masses.

**E09.** Complete Chapter 43 Exercises 8,9. **Full model.** A unit partial
derivative makes the next-digit equation one nonzero linear equation. For any
chosen remaining digits there is a unique digit in that coordinate; iterate and
use completeness, as S04 proves. The singular polynomial x² has root 0 despite
its zero derivative at 0. Its congruence count is q^floor(m/2), not the unique-
branch count of a simple root. Failing a sufficient condition is not nonexistence.

**E10.** Complete Chapter 43 Exercises 10,11. **Full model.** A denominator
from one resolution chart gives a candidate pole; cancellation with a numerator
or other contributions must first be excluded. For H_2 its numerator 1−1/q
is nonzero and the roots of 1−T²/q are simple and uncancelled, so they are actual
poles of the rational T-function. A solution-tree certificate through precision M
records the exact polynomial/ring/prime, roots at each level, every parent-child
digit, residual congruence, all tested rejected children and terminal modulus.
Completeness follows by reducing any higher root to its unique parent. Existence
of finite leaves alone proves no exact root when singular branches may later die.

**E11.** Complete Chapter 43 Exercise 12 and derive the nonsingular count
theorem. **Full model.** Orthogonality in S05 follows from a geometric series;
taking absolute values turns all phases into 1 and makes the root-filter sum
p^m regardless of f. For n variables and R nonsingular residue roots, each
solution has p^(n−1) next-level lifts by a surjective derivative equation. Induct
from N_1=R to get N_m=R p^((n−1)(m−1)), and substitute A_m into the tail identity.
Retain the hypothesis that every residue zero is nonsingular; x² violates it.

**E12.** Prove the reference tree complete, identify its finite bounds and
repair three false precision claims: “25+O(5²) is invertible,” “product caps
add,” and “zero residual modulo p³ proves an exact root.” **Full model.** Every
child reduces to a unique parent and all p digits are tested. Across three
levels there are at most 7+49+343=399 trials; candidates and x²−D stay exact
safe integers. The ball 25+25Z5 contains 0, so inversion is refused; when
25+O(5^7) is given, v=2 is certified and inverse cap 7−4=3 with relative 5.
For certified valuations the cross errors give min(Nx+vy,Ny+vx), provided
Nx>vx and Ny>vy; the error-error term has larger valuation. For 2,7,−1,3
this is 5, value 1, relative 4. A zero residual is a finite congruence. Only a
stated Hensel condition or another existence proof upgrades it to an exact root.

## NTS-P — Primary arithmetic and analytic portfolio

**Task NTS-P.** Work at p=5 with D=10,2,6,0 in that order. Submit all eight
components: (1) classify the generic algebra before assigning e,f; (2) give
integral basis, uniformizer/normalization, trace/norm of 2+alpha, discriminant
and different for each field; (3) prove the integral/special/geometric fiber
claims, Omega and square-zero lift/refusal; (4) produce complete roots through
m=3 and select the positive residue Hensel branch for D=6; (5) derive each
local zeta rational function, convergence domain and value at T=1/2; (6) use
the character filter and tail bound to explain exactly what finite counting
certifies; (7) execute the complete reference, retain its actual outputs and
all ten refusals, then derive the two precision results; (8) repair the false
claims “D=10 gives vK(5)=1,” “the ramified special fiber is reduced,” and
“two finite roots prove two exact roots without a theorem.” The model is public;
record exposure rather than describing a reconstructed answer as unseen work.

**Complete primary model.** The following is the complete arithmetic ledger.
For every row basis 1,alpha means a rank-two **algebra** basis; it is a field
basis only in the two field rows. The nonreduced row has zero discriminant and
no field different. The split row is two base fields, each e=f=1, and has no
single degree-two field pair.

| Case | p | D | type | e:f | disc | trace of 2+alpha | norm of 2+alpha | N_1,N_2,N_3 | roots 1 | roots 2 | roots 3 | trials | Z at T=1/2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P-ram | 5 | 10 | ramified | 2:1 | 40 | 4 | -6 | 1,0,0 | 0 | none | none | 10 | 9/10 |
| P-unram | 5 | 2 | unramified | 1:2 | 8 | 4 | 2 | 0,0,0 | none | none | none | 5 | 1 |
| P-split | 5 | 6 | split | none | 24 | 4 | -2 | 2,2,2 | 1,4 | 9,16 | 16,109 | 25 | 7/9 |
| P-zero | 5 | 0 | nonreduced | none | 0 | 4 | 4 | 1,5,5 | 0 | 0,5,10,15,20 | 0,25,50,75,100 | 35 | 16/19 |

For D=10, alpha is a uniformizer, 5=alpha²/2, vK(5)=2, vK(alpha)=1;
the extending valuation is w=vK/2. Residue field is F5 and different(2alpha)
has exponent 1. Norm −6 is a unit, agreeing with vK(2+alpha)=0 and f=1.
For D=2, 5 is a uniformizer, alpha is a unit, e=1,f=2,w=vK; residue field F25,
different a unit ideal. Norm 2 is a unit. The trace-dual proofs and matrices
are those in S03 with actual D substituted, giving disc 40 and 8. In the split
case CRT evaluation at ±r gives Z5×Z5, r≡16 mod 125; the regular trace/norm
are 4,−2 while adjoining one root gives the base field. For D=0, alpha²=0 and
alpha≠0; do not call it an unramified field.

S04 gives finite flat rank 2 models for all four. The ramified special fiber is
F5[epsilon]/epsilon² with tangent dimension 1; its generic field is separable.
Unramified special fiber F25 has one degree-two closed point and two geometric
points, Omega=0. Split special fiber F5×F5 has two closed/geometric points,
Omega=0. D=0 has a nilpotent in both fibers. Ramified Omega=A/(2alpha)dalpha
is nonzero, while generic Omega=0. Lifting 0 from mod 5 to mod 25 for t²−10
fails since t divisible 5 makes t²−10 nonzero mod 25; for t² every c epsilon
is a square-zero lift. Unit-D derivative corrections are unique on each
chosen root over a residue extension.

The counts in the ledger follow for **all** m: ramified count 1 at m=1 then 0;
unramified 0; split 2 by Hensel at the two simple roots; D=0 gives 5^floor(m/2).
For the split branch 1 mod 5, r=1+5t gives t=3, r=16 mod 25; at the next level
16²−6=250 already vanishes mod 125, so r=16. Its negative is 109 mod 125.
The tree examines 5+5=10 children in the ramified case,5 in unramified,
5+10+10=25 in split, and 5+5+25=35 for zero. All nonleaves are still retained
at their correct level; the empty ramified list at m=2 is a genuine obstruction.

With H_a=(4/5)/(1−T^a/5), the four integrals are
4/5+T/5; 1; 3/5+(2/5)T H_1; H_2. They have integral convergence domains
all complex s; all complex s; Re(s)>−1; Re(s)>−1/2, respectively.
At T=1/2 direct fraction arithmetic gives 9/10,1,7/9,16/19 as printed.
At m=3 the tail bounds are 0,0,1/500,1/200, because A_3 is 0,0,2/125,1/25
and T³=1/8. These bound the error after summing valuation masses r<3,
not the error of counting roots modulo 125. Character orthogonality exactly
recovers the root counts; it proves no global prime asymptotic.

The complete reference supplies the actual finite audit to be executed, with
expected Hensel 16, inverse(−2,3,5), product(1,5,4) and the refusal table.
A portfolio must contain the learner's actual run and any deviation, not a
claim that these printed expectations were observed. Repair the false claims:
normalized vK(5)=2; the class alpha is nonzero nilpotent in the special fiber;
and exact roots in the split row are certified by Hensel's hypotheses and
completeness, whereas singular leaves alone have no such conclusion.

## NTS-C — Changed prime and geometric interpretation

**Task NTS-C.** Repeat all eight NTS-P components at p=3, with D=3,2,1,0.
Retain actual code/refusals and proofs. Additionally derive the p=3 smooth
elliptic lift count 4*3^(m−1) from S04 including the infinity chart, and
compare the unramified degree-two closed point with its geometric fiber.
Replace the three false claims by: “a degree-two residue field means two
F3-points,” “a smooth curve point lifts uniquely without fixing a free
coordinate,” and “the ramified model's singular special fiber forces a zeta
pole.” Give full repairs.

**Complete changed model.**

| Case | p | D | type | e:f | disc | trace of 2+alpha | norm of 2+alpha | N_1,N_2,N_3 | roots 1 | roots 2 | roots 3 | trials | Z at T=1/2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-ram | 3 | 3 | ramified | 2:1 | 12 | 4 | 1 | 1,0,0 | 0 | none | none | 6 | 5/6 |
| C-unram | 3 | 2 | unramified | 1:2 | 8 | 4 | 2 | 0,0,0 | none | none | none | 3 | 1 |
| C-split | 3 | 1 | split | none | 4 | 4 | 3 | 2,2,2 | 1,2 | 1,8 | 1,26 | 15 | 3/5 |
| C-zero | 3 | 0 | nonreduced | none | 0 | 4 | 4 | 1,3,3 | 0 | 0,3,6 | 0,9,18 | 15 | 8/11 |

For D=3 the field has basis 1,alpha, uniformizer alpha, 3=alpha², e=2,f=1,
vK(3)=2, w=vK/2, residue F3, different(2alpha) exponent 1, disc 12.
For D=2 the residue polynomial has no root in F3 (squares 0,1), so the field
is unramified with e=1,f=2, uniformizer 3, alpha unit, residue F9 and different
unit; disc 8. S03's coefficient arguments prove both integral bases and trace
duals, giving the printed trace/norm 4,1 and 4,2. D=1 gives Z3×Z3 by evaluation
at ±1, and D=0 gives a nonreduced algebra. The split norm of 2+alpha is 3:
one factor is 3, the other 1, so a nonunit norm in a product does not imply
ramification of a field.

All four models are finite flat. Special fibers are F3[epsilon]/epsilon²,
F9, F3×F3 and F3[epsilon]/epsilon² respectively. Their generic fibers are
a ramified separable field, an unramified separable field, a product and a
nonreduced algebra. Omega is A/(2alpha)dalpha in every row; it vanishes in
the two unit-D rows and remains nonzero for ramified/nonreduced rows.
The ramified geometric tangent is one-dimensional. The unramified special
fiber has one closed point of degree 2, no F3-rational point, two geometric
points, and two F_(3^m)-points exactly when 2 divides m. This follows because
a finite-field embedding exists exactly then and there are two conjugate
embeddings. It is not a count of the 9 elements of F9.

The root sets and trial sums are explicit above:3+3;3;3+6+6;3+3+9.
The chosen split branch is the exact rational root 1 at all precisions.
For H_a=(2/3)/(1−T^a/3), the zeta expressions are 2/3+T/3,1,
1/3+(2/3)T H_1,H_2, with domains entire,entire,Re(s)>−1,Re(s)>−1/2.
At T=1/2 these reduce to 5/6,1,3/5,8/11. The m=3 tail bounds are 0,0,1/108,
1/72. Derive them from A_3=0,0,2/27,1/9 and multiply by 1/8. As in P,
Hensel gives all exact simple roots; the singular zero has its exact root
by factorization, while ramified leaves die at level 2.

For the elliptic addition, points mod 3 are (0,0),(1,0),(2,0) and infinity.
At affine roots the derivative in x is 1 mod 3, and at infinity the projective
Z derivative is 1; a nonsingular one-equation chart in two variables has three
lifts per point, not one. Thus the counts 4,12,36 follow through levels 1–3,
and induction gives 4*3^(m−1). Coordinate choices on overlaps represent the
same projective points; these four disjoint residue charts cover all lifts.

Execute the same ten failure controls and precision examples; their arithmetic
and messages are unchanged, with Hensel 1 on this branch. The three repairs
are: F9 contributes no F3-point, only two geometric points; a smooth curve
leaves one digit free per level, giving 3 lifts; and Z_(x²−3)=2/3+T/3 is an
entire polynomial in 3^-s despite its singular special fiber. Geometry guides
analysis but does not permit pole claims without the actual integral.

## NTS-R — Public return with changed square class

**Task NTS-R.** After an intervening activity or at a later sitting if useful,
reconstruct all eight portfolio components at p=7 with D=7,3,2,0. Earlier models
are public; declare exposure and preserve the actual first/revised work.
Supply the first three Hensel residues on the branch 3 mod 7 for x²−2.
Repair: “unit valuation determines the local zeta integral,” “a tree with a
singular root certifies uniqueness,” and “a meromorphic continuation means
the original integral converges everywhere.” Add a written explanation of
why none of this determines rational elliptic rank or a global L-function's
analytic continuation. No enforced delay or independently observed retention
is claimed.

**Complete return model.**

| Case | p | D | type | e:f | disc | trace of 2+alpha | norm of 2+alpha | N_1,N_2,N_3 | roots 1 | roots 2 | roots 3 | trials | Z at T=1/2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-ram | 7 | 7 | ramified | 2:1 | 28 | 4 | -3 | 1,0,0 | 0 | none | none | 14 | 13/14 |
| R-unram | 7 | 3 | unramified | 1:2 | 12 | 4 | 1 | 0,0,0 | none | none | none | 7 | 1 |
| R-split | 7 | 2 | split | none | 8 | 4 | 2 | 2,2,2 | 3,4 | 10,39 | 108,235 | 35 | 11/13 |
| R-zero | 7 | 0 | nonreduced | none | 0 | 4 | 4 | 1,7,7 | 0 | 0,7,14,21,28,35,42 | 0,49,98,147,196,245,294 | 63 | 8/9 |

The nonzero square residues mod 7 are 1,2,4. Thus 3 is a nonsquare unit,
2 a square unit. For D=7, basis 1,alpha is integral, uniformizer alpha,
7=alpha², vK(7)=2, e=2,f=1,w=vK/2, residue F7, different(2alpha)
exponent 1 and disc 28. Trace/norm of 2+alpha are 4,−3. For D=3, integral basis
1,alpha follows by residue independence; uniformizer 7, e=1,f=2, alpha unit,
residue F49, different unit, disc 12, trace/norm 4,1. The norm valuation formula
checks both unit norms. For D=2 the integral CRT product is Z7×Z7; D=0 is
nonreduced. Neither has a degree-two field pair. The rank-two regular
trace/norm are still the printed values, obtained by the same actual matrices.

Special fibers, generic fibers, Omega, tangent and square-zero lifting follow
by substituting the actual coefficients in S04: the ramified/nonreduced special
fibers are F7[epsilon]/epsilon²; the unramified one is F49; the split one is
F7×F7. The ramified generic fiber is separable while its special tangent is
one-dimensional; the unramified closed point has degree 2 and two geometric
points; derivative units make the two unit-D integral models étale. A ramified
root 0 modulo 7 has no lift modulo 49 because t²−7 has valuation 1 for any
t divisible 7. For the nonreduced polynomial t², distinct infinitesimal lifts
c epsilon show failure of uniqueness.

On the split branch put r=3+7t. Then r²−2=7(1+6t+7t²), so t=1 gives
r=10 modulo 49. Next put r=10+49t: (r²−2)/49=2+20t+49t², whose reduction
2+6t is 0 for t=2. Thus r=108 modulo 343, with negative 235. The full root
sets and trial sums are 7+7;7;7+14+14;7+7+49. For D=0 there are 7 roots
mod 343 because x is divisible 49; the exact root 0 alone is not seven exact
roots. Root-list completeness follows from the parent argument and exact
root completeness in the simple case from Hensel.

With H_a=(6/7)/(1−T^a/7), the zeta expressions are 6/7+T/7;1;
5/7+(2/7)T H_1;H_2. Domains are entire,entire,Re(s)>−1,Re(s)>−1/2.
At T=1/2 they give 13/14,1,11/13,8/9; m=3 error bounds are 0,0,1/1372,
1/392 from A_3=0,0,2/343,1/49. Orthogonality recovers these congruence
counts only with their phases. Execute and retain the same reference's ten
refusals, inverse/product results, and Hensel 108 for this branch.

The three repairs are substantive. The units 3 and 2 both have valuation 0 but
have zeta integrals 1 and 5/7+(2/7)T H_1 because their square classes differ.
The tree alone counts finite roots; x² has many finite leaves and one exact
root, with no unit derivative. Meromorphic continuation is a rational-function
identity beyond a domain; H_2's original integral diverges at Re(s)=−1/2,
even though its continuation has values at many points further left.
These local integrals are not global elliptic L-functions. Finite local point
counts do not determine a rational Mordell–Weil rank, and continuation of this
explicit local rational function supplies none of the missing global theorem.

## NTS-S07 — Comparison, provenance and research boundaries

Apply this descriptive rubric separately to every source exercise, E-question
and portfolio component. There is no numerical grade or automatic completion.

| Dimension | Complete evidence | Specific repair |
| --- | --- | --- |
| Local-field hypotheses | Field/product distinction, actual irreducibility/root proof, normalized valuations, integral basis and different before any field conclusion | Recompute the residue polynomial; distinguish O_L from a smaller order and the extending valuation from vK. |
| General proof | DVR ideal argument, grouped ef proof, trace-dual calculation, square-zero correction, Jacobian digit lifting and analytic summation have every stated hypothesis | Identify the first missing assumption or unjustified limit; rewrite the full dependency, rather than replace it with a finite table. |
| Arithmetic geometry | Actual coordinate algebra, generic/special/geometric fibers, local/tangent or differential calculation and exact lifting behavior | Preserve nilpotents and residue degrees; fix the claimed rational-point field; use the local derivative on the whole residue box. |
| Analysis | Haar normalization, valuation tails/masses, exact rational function, original convergence domain, continuation and cancellation audit | Separate additive from multiplicative measure; recover the p^-m factor and the m−1 shift before recomputing. |
| Required software | Actual bounded program run, complete roots/outputs and all refusal messages, independent mathematical justification and precision caps | Retain the failing input/output; fix the condition and rerun the affected control. Printed expectations are not an execution record. |
| Revision and evidence | Actual first/comparison/revised text with exact ID/date/version and all public help seen; a corrected claim cites its changed line and reason | Keep first work instead of overwriting; if starting after exposure, label the response reconstruction. |

For each required task keep \`ID-first-YYYY-MM-DD.txt\`,
\`ID-comparison-YYYY-MM-DD.txt\` and \`ID-revised-YYYY-MM-DD.txt\` yourself. Include
the actual code and command/output in the computation response. These files
are learner managed; no new writing-task registry, immutable automatic history,
private Practice attempt, programme allocation or graded evidence is created.
A later return may reuse public models; no unseen interval is promised.

The source selections are the current native p-adic online chapters named in
S02 and the accepted advanced Euler courses. Chapter 12's selected additions
and Chapter 39's clinics postdate existing PDFs; use current HTML for this work.
The new expositions, proofs, tasks, reference and models here are original
Euler course material. Existing sources retain their own notices; linking does
not transfer their licenses or republish a third-party book. The standard
monic derivative criterion is cross-checked against the primary
[Stacks Project definition 00UB](https://stacks.math.columbia.edu/tag/00UB);
its general local structure statement is [tag 0G1A](https://stacks.math.columbia.edu/tag/0G1A).
Those references support terminology; all selected elementary lift calculations
are supplied here in full. No external passage is reproduced verbatim.

Imported results remain the finite-extension valuation/existence and
unramified-construction results, Haar measure extension/Fubini where invoked,
the monic criterion's identification with the general definition of étale,
the source's general Galois/Kummer/cohomology machinery, elliptic structure
and the general trace/rationality/comparison theorems. We prove the local
square-zero lifting, chart counts, quadratic differents, Fourier ball inversion
and selected zeta identities; we do not claim imported general main proofs
have been reconstructed. In general schemes the cohomological Brauer group
means the **torsion subgroup** of H²_et(Gm); no claim about unrestricted H²
is needed in this selection. Local class field norm-index statements require
their abelian hypotheses and are not supplied by the present computations.

Beyond this completed selected sequence lie full local class field theory,
higher ramification, general resolution, p-adic Hodge theory, global automorphic
and L-function methods, and research arithmetic geometry. As checked on
4 November 2026, the [Birch–Swinnerton-Dyer conjecture](https://www.claymath.org/millennium/birch-and-swinnerton-dyer-conjecture/)
and the [Riemann hypothesis for the zeta function](https://www.claymath.org/millennium/riemann-hypothesis/)
remain open in their general forms; none of the finite ledgers resolves them. Extending the reference to p=2,
higher coefficient valuations, arbitrary ramification or large precision needs
new algorithms, proofs and failure tests. No timing, benchmark, classroom,
learner, supervision, accessibility observation or experimental finding has
been invented. The source and exact regression inputs can be independently
checked without turning a public model into evidence of learner achievement.
`;export{e as default};