# Notation and Glossary {#sec-notation}

This appendix fixes the book's notation and gives short reminders. A definition here is a navigation aid, not a substitute for the chapter where the idea is developed.

## Sets, divisibility, and congruence notation

| Symbol | Meaning | First substantial use |
|---|---|---|
| $\mathbb N$ | positive integers $\{1,2,3,\ldots\}$ | [sec-landscape](01-landscape.md#sec-landscape) |
| $\mathbb Z$ | integers | [sec-landscape](01-landscape.md#sec-landscape) |
| $\mathbb Q,\mathbb R,\mathbb C$ | rational, real, and complex numbers | [sec-fractions](09-fractions.md#sec-fractions); [sec-algebraic](13-algebraic.md#sec-algebraic) |
| $a\mid b$ | $a$ divides $b$: $b=ak$ for some $k\in\mathbb Z$ | [sec-divisibility](02-divisibility.md#sec-divisibility) |
| $a\nmid b$ | $a$ does not divide $b$ | [sec-divisibility](02-divisibility.md#sec-divisibility) |
| $\gcd(a,b)$ | nonnegative greatest common divisor | [sec-divisibility](02-divisibility.md#sec-divisibility) |
| $\operatorname{lcm}(a,b)$ | nonnegative least common multiple | [sec-divisibility](02-divisibility.md#sec-divisibility) |
| $a\equiv b\pmod n$ | $n\mid(a-b)$, with $n>0$ | [sec-congruence](04-congruence.md#sec-congruence) |
| $[a]_n$ | residue class of $a$ modulo $n$ | [sec-congruence](04-congruence.md#sec-congruence) |
| $\mathbb Z/n\mathbb Z$ | ring of residue classes modulo $n$ | [sec-congruence](04-congruence.md#sec-congruence) |
| $(\mathbb Z/n\mathbb Z)^\times$ | group of invertible residue classes | [sec-functions](07-functions.md#sec-functions) |
| $\lfloor x\rfloor$ | greatest integer not exceeding $x$ | [sec-divisibility](02-divisibility.md#sec-divisibility) |

**Associate.** Two elements in a ring that differ by multiplication by a unit. In $\mathbb Z$, $n$ and $-n$ are associates.

**Coprime.** Integers $a,b$ with $\gcd(a,b)=1$. Pairwise coprime means every distinct pair has gcd $1$; this is stronger than the gcd of the whole collection being $1$.

**Divisor.** An integer $a$ satisfying $a\mid b$. “Positive divisor” excludes the matching negative divisor.

**Prime.** In $\mathbb Z$, a positive integer greater than $1$ with only positive divisors $1$ and itself. In a general integral domain, a nonzero nonunit $p$ such that $p\mid ab$ implies $p\mid a$ or $p\mid b$.

**Irreducible.** A nonzero nonunit that cannot be expressed as a product of two nonunits. Prime implies irreducible in an integral domain, but the converse can fail.

**Unit.** An element with a multiplicative inverse in its ring. The integer units are $\pm1$; Gaussian units are $\pm1,\pm i$.

## Named functions and symbols

| Symbol | Meaning | Domain or condition |
|---|---|---|
| $v_p(n)$ | exponent of prime $p$ in nonzero $n$ | $p$ prime, $n\ne0$ |
| $\pi(x)$ | number of primes $p\le x$ | real $x\ge0$ |
| $\tau(n)$ | number of positive divisors of $n$ | $n\in\mathbb N$ |
| $\sigma(n)$ | sum of positive divisors of $n$ | $n\in\mathbb N$ |
| $\sigma_k(n)$ | $\sum_{d\mid n}d^k$ | $n\in\mathbb N$ |
| $\varphi(n)$ | Euler totient: number of units modulo $n$ | $n\in\mathbb N$ |
| $\mu(n)$ | Möbius function | $n\in\mathbb N$ |
| $f*g$ | Dirichlet convolution $\sum_{d\mid n}f(d)g(n/d)$ | arithmetic functions |
| $\varepsilon$ | convolution identity in [sec-functions](07-functions.md#sec-functions); fundamental unit in [sec-pell](10-pell.md#sec-pell) | context distinguishes |
| $(a/p)$ | Legendre symbol | $p$ odd prime |
| $(a/n)$ | Jacobi symbol when $n$ is odd composite | context declared |
| $\operatorname{ord}_n(a)$ | multiplicative order of $a$ modulo $n$ | $\gcd(a,n)=1$ |
| $[a_0;a_1,\ldots]$ | simple continued fraction | $a_i>0$ for $i\ge1$ |
| $N(z)$ | norm in a number ring | ring specified |
| $\vert x\vert _p$ | $p$-adic absolute value $p^{-v_p(x)}$ | $x\ne0$, with $\vert 0\vert _p=0$ |
| $f(x)\sim g(x)$ | $f(x)/g(x)\to1$ | stated limiting regime |

**Arithmetic function.** A function defined on the positive integers, usually with complex values.

**Completely multiplicative.** A function satisfying $f(mn)=f(m)f(n)$ for all positive $m,n$.

**Dirichlet character.** A periodic, completely multiplicative arithmetic function, zero on nonunits modulo its period, used to analyse residue classes.

**Multiplicative.** A function with $f(1)=1$ and $f(mn)=f(m)f(n)$ when $m,n$ are coprime.

**Quadratic residue.** A nonzero class modulo an odd prime represented by a square. When the modulus is composite, state the definition directly rather than silently reuse prime-only facts.

## Proof vocabulary

**Biconditional.** An “if and only if” statement containing two implications.

**Contrapositive.** The implication $\neg Q\Rightarrow\neg P$, logically equivalent to $P\Rightarrow Q$.

**Counterexample.** A specific input that makes a universal claim false.

**Descent.** A contradiction strategy that constructs a strictly smaller positive solution or counterexample from a minimal one.

**Invariant.** A quantity unchanged by an allowed transformation. A **monovariant** moves in one direction and can prove termination.

**Necessary condition.** A conclusion that every solution must satisfy. Passing it does not ordinarily guarantee a solution.

**Sufficient condition.** A hypothesis that guarantees the conclusion.

**Strong induction.** An induction step permitted to use all earlier cases, not only the immediately preceding one.

**Well-ordering principle.** Every nonempty set of positive integers has a least member.

## Cryptographic and analytic vocabulary

**Asymptotic.** A statement about behavior in a limit, commonly $x\to\infty$.

**Conditional theorem.** A proved implication whose named hypothesis may remain open.

**Cryptographic primitive.** A basic mathematical operation used inside a protocol. A secure primitive does not automatically make every composition secure.

**Heuristic.** A model or analogy that guides expectation without proving the claim.

**Meromorphic continuation.** Extension of a function beyond its original convergence domain while allowing isolated poles.

**Probable prime.** A number that passes specified compositeness tests but may not carry a proof certificate.

**Random oracle, side channel, threat model.** Advanced security terms mentioned only to mark boundaries: respectively an idealised hash model, unintended physical or timing leakage, and a declaration of adversarial powers and goals.

**Trapdoor.** Secret information that makes an otherwise difficult inversion feasible.

## Algebraic, modular, height, and probabilistic vocabulary

| Symbol | Meaning | First substantial use |
|---|---|---|
| $\mathbb F_q$ | finite field with $q$ elements, where $q$ is a prime power | [sec-finite-fields](23-finite-fields.md#sec-finite-fields) |
| $\mathcal O_K$ | ring of integers of a number field $K$ | [sec-ideals-dedekind](24-ideals-dedekind.md#sec-ideals-dedekind) |
| $D_K$ | field discriminant | [sec-ideals-dedekind](24-ideals-dedekind.md#sec-ideals-dedekind) |
| $N(I)$ | ideal norm $\vert \mathcal O_K/I\vert $ | [sec-ideals-dedekind](24-ideals-dedekind.md#sec-ideals-dedekind) |
| $\operatorname{Cl}(K)$ | ideal class group | [sec-class-groups-units](25-class-groups-units.md#sec-class-groups-units) |
| $h_K$ | class number | [sec-class-groups-units](25-class-groups-units.md#sec-class-groups-units) |
| $\operatorname{Frob}_{\mathfrak p}$ | Frobenius at an unramified prime ideal | [sec-splitting-reciprocity](26-splitting-reciprocity.md#sec-splitting-reciprocity) |
| $L(s,\chi)$ | Dirichlet L-function | [sec-l-functions](27-l-functions.md#sec-l-functions) |
| $q=e^{2\pi i\tau}$ | local parameter at the modular cusp | [sec-modular-forms](28-modular-forms.md#sec-modular-forms) |
| $H(\alpha),h(\alpha)$ | multiplicative and logarithmic heights | [sec-heights-transcendence](29-heights-transcendence.md#sec-heights-transcendence) |
| $\omega(n),\Omega(n)$ | distinct and repeated prime-factor counts | [sec-probabilistic-number-theory](30-probabilistic.md#sec-probabilistic-number-theory) |

**Algebraic integer.** An algebraic number satisfying a monic polynomial with
integer coefficients.

**Class group.** Fractional ideals modulo principal fractional ideals. It
measures the obstruction to every ideal being generated by one element.

**Conductor.** For a Dirichlet character, its smallest inducing modulus. In
other settings the word has related but distinct meanings, so the object is
always named.

**Cusp form.** A modular form whose q-expansion has zero constant coefficient
at every relevant cusp.

**Dedekind domain.** An integral domain in which every nonzero proper ideal has
unique prime-ideal factorization; rings of integers of number fields are the
central examples here.

**Frobenius.** A p-th-power automorphism in a finite field, or the corresponding
Galois element/conjugacy class attached to an unramified prime. Context
determines the version.

**Height.** A normalized measure of arithmetic complexity for rational,
algebraic, or projective points. It is not the same as ordinary absolute value.

**Normal order.** A function $g(n)$ is a normal order of $f(n)$ when
$f(n)/g(n)\to1$ outside a set of natural density zero.

**Ramification.** Repetition of a prime ideal in the factorization of a rational
prime or, more generally, nontrivial inertia in an extension of valued fields.

**Regulator.** The covolume of the logarithmic lattice generated by a basis for
the free part of a number field's unit group.

## Symmetry, sieve, additive, and global vocabulary

**Additive energy.** The number of quadruples $(a,b,c,d)\in A^4$ satisfying
$a+b=c+d$. Large energy means that many sums repeat; by Cauchy–Schwarz it is
quantitatively linked to a small sumset.

**Adele and idele.** An adele is a compatible tuple over every completion, with
almost all finite coordinates integral. An idele is an invertible adele whose
inverse also satisfies the restricted-product condition.

**Doubling constant.** The ratio $|A+A|/|A|$ for a nonempty finite set $A$.
Small doubling is evidence of additive structure, not a statement about
multiplication by two.

**Fixed field.** For a group $H$ of field automorphisms of $L$, the elements of
$L$ fixed by every member of $H$. In a finite Galois extension, subgroups and
intermediate fixed fields correspond in reverse order.

**Galois group.** The group of field automorphisms of an extension that fix the
base field pointwise. It permutes polynomial roots while preserving every
algebraic relation over the base.

**Jacobian.** For a smooth projective curve, an abelian variety whose rational
points organize degree-zero divisor classes. For a genus-one curve with a
rational base point, the curve and its Jacobian can be identified.

**Parity barrier.** The limitation that broad combinatorial sieve information
often cannot distinguish integers with an odd number of prime factors from
those with an even number. It is an obstruction of the method, not evidence
that the desired primes do not exist.

**Restricted product.** A product of local objects in which all but finitely
many coordinates lie in declared compact-open subobjects. The restriction is
part of the topology and arithmetic, not merely a storage convention.

**Separable polynomial.** A polynomial having no repeated root in a splitting
field. In characteristic zero every irreducible polynomial is separable.

**Sieve dimension.** The effective number of independent residue classes
removed per prime in a sieve problem. It controls the shape of the main product
but does not by itself control accumulated remainder terms.

**Splitting field.** The smallest field extension in which a polynomial factors
into linear factors. It contains all roots, not only one selected root.

**Verification certificate.** Finite exact data from which a smaller checker
can confirm a claimed computation. A certificate proves only the property and
scope implemented by its checker.

## Cancellation, local fields, dynamics, and automorphic vocabulary

| Symbol | Meaning | First substantial use |
|---|---|---|
| $e(t)$ | additive character $\exp(2\pi i t)$ | [sec-exponential-sums](37-exponential-sums.md#sec-exponential-sums) |
| $\lVert x\rVert$ | distance from $x$ to the nearest integer | [sec-exponential-sums](37-exponential-sums.md#sec-exponential-sums) |
| $D_N^*$ | star discrepancy of a finite sequence | [sec-exponential-sums](37-exponential-sums.md#sec-exponential-sums) |
| $G(a;p)$ | quadratic Gauss sum modulo $p$ | [sec-exponential-sums](37-exponential-sums.md#sec-exponential-sums) |
| $\mathcal O_K,\mathfrak m_K,k_K$ | valuation ring, maximal ideal, and residue field | [sec-local-fields](38-local-fields.md#sec-local-fields) |
| $\pi_K$ | a chosen local uniformizer | [sec-local-fields](38-local-fields.md#sec-local-fields) |
| $e(L/K),f(L/K)$ | ramification index and residue degree | [sec-local-fields](38-local-fields.md#sec-local-fields) |
| $\mathfrak D_{L/K}$ | different of a finite local extension | [sec-local-fields](38-local-fields.md#sec-local-fields) |
| $Z(C,T)$ | zeta function of a curve over a finite field | [sec-curve-zeta](39-curve-zeta.md#sec-curve-zeta) |
| $N_n$ | $\#C(\mathbb F_{q^n})$ | [sec-curve-zeta](39-curve-zeta.md#sec-curve-zeta) |
| $P_C(T)$ | numerator of a smooth projective curve zeta function | [sec-curve-zeta](39-curve-zeta.md#sec-curve-zeta) |
| $\operatorname{Art}_K$ | local or global Artin reciprocity map, as specified | [sec-class-field-theory](40-class-field-theory.md#sec-class-field-theory) |
| $C_K$ | idele class group $\mathbb A_K^\times/K^\times$ | [sec-class-field-theory](40-class-field-theory.md#sec-class-field-theory) |
| $\operatorname{Cl}_{\mathfrak m}(K)$ | ray class group for modulus $\mathfrak m$ | [sec-class-field-theory](40-class-field-theory.md#sec-class-field-theory) |
| $\mathcal O_\phi(P)$ | forward orbit of $P$ under $\phi$ | [sec-arithmetic-dynamics](41-arithmetic-dynamics.md#sec-arithmetic-dynamics) |
| $\widehat h_\phi$ | canonical dynamical height | [sec-arithmetic-dynamics](41-arithmetic-dynamics.md#sec-arithmetic-dynamics) |
| $\Phi_{\phi,n}^*$ | dynatomic expression for formal period $n$ | [sec-arithmetic-dynamics](41-arithmetic-dynamics.md#sec-arithmetic-dynamics) |
| $\pi=\bigotimes_v'\pi_v$ | restricted tensor product of local representations | [sec-automorphic-langlands](42-automorphic-langlands.md#sec-automorphic-langlands) |
| $\alpha_p,\beta_p$ | local Satake parameters, with normalization declared | [sec-automorphic-langlands](42-automorphic-langlands.md#sec-automorphic-langlands) |
| $\operatorname{ord}_m(a)$ | least positive $r$ with $a^r\equiv1\pmod m$ | [sec-primitive-roots-cyclotomy](43-primitive-roots-cyclotomy.md#sec-primitive-roots-cyclotomy) |
| $\Phi_n(X)$ | $n$th cyclotomic polynomial | [sec-primitive-roots-cyclotomy](43-primitive-roots-cyclotomy.md#sec-primitive-roots-cyclotomy) |
| $p(n)$ | number of integer partitions of $n$, with $p(0)=1$ | [sec-partitions-q-series](45-partitions-q-series.md#sec-partitions-q-series) |
| $\binom{n}{k}_q$ | Gaussian or q-binomial coefficient | [sec-partitions-q-series](45-partitions-q-series.md#sec-partitions-q-series) |

**Additive character.** A homomorphism from an additive group to the complex
unit circle. Orthogonality of finite additive characters converts congruence
conditions into exact sums.

**Equidistribution.** A limiting statement that every interval receives its
length-proportion of a sequence modulo one. A visually even finite sample is
not the definition.

**Local field.** Here, a field complete for a discrete non-Archimedean
valuation and having finite residue field.

**Uniformizer.** An element of valuation one. It generates the maximal ideal
of a discretely valued field's valuation ring.

**Different.** The integral ideal dual to the inverse trace-dual fractional
ideal. It detects ramification and norms to the discriminant ideal.

**Closed point.** A finite Frobenius orbit of geometric points on a variety
over a finite field. Its degree is the orbit length.

**Reciprocal root.** A number $\alpha$ occurring in a factor
$1-\alpha T$ of a zeta or local Euler numerator. Frobenius convention and
normalization must be declared.

**Artin map.** A reciprocity homomorphism from local multiplicative data,
ideals, or idele classes to an abelian Galois group. At an unramified prime it
sends the prime to a chosen Frobenius convention.

**Ray class group.** Ideals prime to a modulus modulo principal ideals whose
generators satisfy the modulus's finite congruences and declared real-place
sign conditions.

**Preperiodic point.** A point with finite forward orbit. It may have a
nonempty tail before entering a periodic cycle.

**Good reduction of a rational map.** Reduction at a prime that preserves the
map's degree and leaves no common projective zero in its homogeneous
coordinates.

**Satake parameter.** An eigenvalue parameter for an unramified local
automorphic representation. Arithmetic and unitary normalizations differ by a
power of the residue-field size.

**Automorphic representation.** An irreducible representation occurring in an
appropriately controlled space of functions on an adelic quotient. Not every
function on that quotient satisfies the required smoothness, growth, central,
and finiteness conditions.

**Functoriality.** A Langlands principle predicting transfers of automorphic
representations along maps of dual groups. Many important cases are theorems;
the unrestricted general principle remains conjectural.

**Primitive root.** A unit whose multiplicative order is the full size of its
unit group. Such generators exist for prime moduli and only for the classified
family of composite moduli in [sec-primitive-roots-cyclotomy](43-primitive-roots-cyclotomy.md#sec-primitive-roots-cyclotomy).

**Primality certificate.** Finite data whose exact verifier proves that a
candidate is prime. This is stronger than passing one or more probable-prime
tests.

**Partition.** A nonincreasing finite list of positive integers with a declared
sum. Reordering parts does not create a new partition.

**Formal power series.** A coefficient sequence manipulated algebraically
without assigning a numerical value to its variable. Analytic convergence is
a separate question.

## Conventions that prevent ambiguity

- A modulus is positive.
- Gcds and lcms are nonnegative.
- “Prime” without a ring qualifier means a positive rational prime.
- “Solution modulo $n$” means a residue class; representatives are chosen from $0$ through $n-1$ unless another choice is clearer.
- Pell solutions called positive have both coordinates positive.
- Numerical evidence always has a finite declared range.
- Open, conditional, and stated-without-proof results are labeled where introduced.
