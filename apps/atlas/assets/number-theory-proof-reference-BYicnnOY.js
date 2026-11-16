var e=`---
id: book-number-theory-proof-reference
title: "Elementary Number Theory"
level: undergraduate
estimated_minutes: 4200
status: draft
license: CC BY-SA 4.0
---

# Elementary Number Theory {#section-1-elementary-number-theory}

This reference is organized by the question a proof must answer: existence, uniqueness, obstruction, computation, asymptotic size, or security reduction. Each entry states hypotheses, a proof mechanism, and a nearby false statement. Use it beside problems rather than reading it only front to back.

<a id="section-3-current-elementary-route"></a>
## Current elementary route {#section-5-current-elementary-route}

The primary L2–L3 route has eighteen chapters. Entrance preparation is school algebra and proof basics; [Introduction to Proof](/books/library-book-introduction-to-proof/) supplies the latter. Groups of units, Gaussian division and finite polynomial arguments are developed locally. Continued fractions and approximation state their additional real-number/inequality preparation where used. No complex analysis, Dedekind-domain theory or elliptic geometry is an entrance prerequisite.

1. [Integer Logic, Induction, and Extremal Proofs](number-theory-proof-reference/integer-logic-induction-extremal.md)
2. [Division, Euclid, and Bezout Certificates](number-theory-proof-reference/division-euclid-bezout.md)
3. [Primes, Unique Factorization, and Valuations](number-theory-proof-reference/primes-factorization-valuations.md)
4. [Congruences, Linear Equations, and Chinese Remainders](number-theory-proof-reference/congruences-linear-equations-crt.md)
5. [Units, Orders, and Finite Exponent Theorems](number-theory-proof-reference/units-orders-exponent-theorems.md)
6. [Polynomial Congruences and Prime-Power Lifting](number-theory-proof-reference/polynomial-congruences-prime-powers.md)
7. [Quadratic Residues and Reciprocity](number-theory-proof-reference/quadratic-residues-reciprocity.md)
8. [Primitive Roots and Cyclic Unit Groups](number-theory-proof-reference/primitive-roots-cyclic-units.md)
9. [Gauss Sums](number-theory-proof-reference/gauss-sums.md)
10. [Linear Diophantine Equations and Lattice Parametrization](number-theory-proof-reference/linear-diophantine-lattices.md)
11. [Pythagorean Triples and Rational Points](number-theory-proof-reference/pythagorean-triples-rational-points.md)
12. [Sums of Two and Four Squares](number-theory-proof-reference/sums-two-four-squares.md)
13. [Continued Fractions and Pell Equations](number-theory-proof-reference/continued-fractions-pell.md)
14. [Descent, Valuations, and Local Obstructions](number-theory-proof-reference/descent-valuations-local-obstructions.md)
15. [Arithmetic Functions, Convolution, and Mobius Inversion](number-theory-proof-reference/arithmetic-functions-convolution-inversion.md)
16. [Diophantine Approximation and Transcendence Boundaries](number-theory-proof-reference/diophantine-approximation-transcendence-boundaries.md)
17. [Primality Tests and Certificates](number-theory-proof-reference/primality-tests-certificates.md)
18. [Cryptographic Arithmetic and Claim Boundaries](number-theory-proof-reference/cryptographic-arithmetic-claim-boundaries.md)

The seven original advanced sources and the two combined sources remain live, with all their questions, projects, listings and learner identities. The graduate [Algebraic and Analytic Number Theory](/books/library-book-algebraic-analytic-number-theory/) supplies the actual successor route for the seven advanced chapters. The earlier overview below is preserved as orientation to those additional readings; it does not broaden the elementary prerequisites. The eighteen primary chapters include 352 exercises with two staged hints and full solutions.

<a id="section-28-retained-earlier-overview"></a>
## Retained earlier overview {#section-30-retained-earlier-overview}

<a id="section-30-full-volume-architecture"></a>
## Full-volume architecture {#section-32-full-volume-architecture}

The completed proof reference is designed as six parts rather than a flat encyclopedia.

1. **Integer proof machinery** develops quantifiers, induction, division, Euclid, Bezout certificates, unique factorization, valuations, congruences, linear equations, and generalized Chinese remainders.
2. **Finite modular structure** develops unit groups, orders, exponent theorems, polynomial congruences, prime-power lifting, quadratic reciprocity, and the exact scope of primitive-root theorems.
3. **Diophantine methods** treats lattices of linear solutions, Pythagorean parametrization, sums of squares, continued fractions, Pell equations, descent, local obstructions, approximation, and the boundary between proved transcendence statements and heuristic expectation.
4. **Arithmetic functions and primes** builds Dirichlet convolution, Mobius inversion, average orders, characters, primes in progressions, Euler products with convergence hypotheses, prime distribution, and elementary sieve architecture.
5. **Algebraic arithmetic and curves** distinguishes element from ideal factorization, introduces quadratic and general number fields, norms and prime ideals, and develops elliptic-curve group law, reduction, and descent without presenting open conjectures as theorems.
6. **Algorithms, security, and synthesis** turns arithmetic statements into proof-carrying algorithms, separates probable-prime evidence from primality certificates, and separates RSA or elliptic arithmetic correctness from security games, encodings, randomness, implementation leakage, and deployment claims.

The dependency spine is deliberate. Chapters on division and factorization support congruences; congruences support finite groups and local obstructions; analytic and algebraic branches then develop separately before meeting in computational and cryptographic capstones. A reader needing only elementary number theory can stop after the first three parts. A reader entering algebraic or analytic number theory should complete the shared spine and follow the branch prerequisites in the manifest.

<a id="section-43-reading-modes"></a>
## Reading modes {#section-45-reading-modes}

- **Sequential course:** read chapters in reading order, attempt the retrieval and fluency exercises first, and reserve projects for the end of each part.
- **Proof desk:** begin with the theorem whose conclusion matches the problem—existence, uniqueness, count, obstruction, or algorithm—and audit every hypothesis before importing it.
- **Counterexample route:** collect every failure clinic, weaken one hypothesis at a time, and explain exactly which line of the proof breaks.
- **Computational route:** represent every output by a certificate that a small independent checker can verify. A fast answer without a validity boundary is not a complete number-theoretic result.

The local prerequisite is proof literacy and elementary algebra. The opening chapter repairs quantifiers, induction, and extremal arguments; the next three establish the arithmetic spine from first principles. Abstract algebra and real analysis are introduced locally when later branches need them, but graduate algebraic and analytic chapters assume readers can also consult the dedicated Math Atlas volumes.

<a id="section-52-desk-1-division-and-gcd-contracts"></a>
## Desk 1 — division and gcd contracts {#section-54-desk-1-division-and-gcd-contracts}

**Theorem 1 (Division).** For integer a and positive m, unique integers q,r satisfy

$a=mq+r$, $0\\le r<m$.

Existence follows by locating a between consecutive multiples of m; uniqueness follows because two allowed remainders differ by a multiple of m whose absolute value is less than m.

**GCD invariance.** $\\gcd(a,b)=\\gcd(b,a-qb)$. Common divisors are unchanged because each member of either pair is an integer combination of the other pair.

**Theorem 2 (Bézout).** If a,b are not both zero, there exist x,y with $ax+by=\\gcd(a,b)$. Extended Euclid computes them. More abstractly, the positive elements of the ideal $\\{ax+by:x,y\\in \\mathbb{Z}\\}$ have a least member d; division shows every common divisor divides d and d divides both a,b.

**Boundary.** Bézout coefficients are not unique. If $ax_{0}+by_{0}=g$ and $g=\\gcd(a,b)$, then

$x=x_{0}+(b/g)t$, $y=y_{0}-(a/g)t$

gives all coefficient pairs.

<a id="section-70-desk-2-primes-and-valuations"></a>
## Desk 2 — primes and valuations {#section-72-desk-2-primes-and-valuations}

For a prime p and nonzero integer n, the p-adic valuation $v_{p}(n)$ is the exponent of p in n. It satisfies

$v_{p}(ab)=v_{p}(a)+v_{p}(b)$ and, when $a+b\\ne 0$, $v_{p}(a+b)\\ge \\min(v_{p}(a),v_{p}(b))$,

with equality in the second formula when the two valuations differ.

Unique factorization can be encoded as equality of every $v_{p}$. This turns gcd and lcm into

$v_{p}(\\gcd(a,b))=\\min(v_{p}(a),v_{p}(b))$,

$v_{p}(\\lcm(a,b))=\\max(v_{p}(a),v_{p}(b))$.

**Legendre’s formula.** The exponent of p in n! is

$v_{p}(n!)=\\lfloor n/p\\rfloor+\\lfloor n/p^{2}\\rfloor+\\cdots$.

Each multiple of p contributes once, each multiple of p² contributes one additional factor, and the finite sum stops after $p^k>n$.

**Counterexample clinic.** Composite c need not satisfy Euclid’s lemma. Since $6\\mid 2\\cdot 3$ but 6 divides neither factor, “irreducible-like” intuition cannot replace primality in Z.

<a id="section-92-desk-3-congruence-equivalence-and-units"></a>
## Desk 3 — congruence equivalence and units {#section-94-desk-3-congruence-equivalence-and-units}

For m>0, congruence modulo m is equality in the quotient ring $\\mathbb{Z}/m\\mathbb{Z}$. The map $\\mathbb{Z}\\to \\mathbb{Z}/m\\mathbb{Z}$ is a ring homomorphism with kernel mZ. This explains why polynomial expressions preserve congruence.

**Unit criterion.** $[a]$ is invertible in $\\mathbb{Z}/m\\mathbb{Z}$ iff gcd(a,m)=1.

- If ax≡1, then ax−1 is a multiple of m, giving an integer combination equal to 1.
- If gcd(a,m)=1, a Bézout identity reduces to an inverse.

**Theorem 3 (Linear-congruence).** $ax\\equiv b \\pmod{m}$ has a solution iff $\\gcd(a,m)\\mid b$; when it does, exactly g solutions occur modulo m, where g is that gcd.

**False cancellation.** From $ca\\equiv cb \\pmod{m}$, cancel c only after accounting for $\\gcd(c,m)$. Example: $2\\cdot 1\\equiv 2\\cdot 4 \\pmod{6}$ but $1\\not\\equiv 4 \\pmod{6}$.

<a id="section-105-desk-4-crt-construction-and-generalized-compatibility"></a>
## Desk 4 — CRT construction and generalized compatibility {#section-107-desk-4-crt-construction-and-generalized-compatibility}

For gcd(m,n)=1, choose u,v with um+vn=1. Given residues a,b, set

$x=b\\cdot um+a\\cdot vn$.

Modulo m, $um\\equiv 0$ and $vn\\equiv 1$, so x≡a; modulo n, x≡b. If two solutions exist, their difference is divisible by both coprime m,n, hence by mn. This proves existence and uniqueness modulo mn.

For noncoprime m,n, a common solution forces a−b divisible by g=gcd(m,n). Conversely, if g divides a−b, divide the equation $a+mt=b+ns$ by g and solve using coprime m/g,n/g. Uniqueness is modulo $\\lcm(m,n)=mn/g$.

**Idempotent viewpoint.** In the coprime case, $e_{m}=vn$ satisfies e_m≡1 modulo m and 0 modulo n; $e_{n}=um$ does the reverse. They obey $e_{m}^{2}=e_{m}$, $e_{n}^{2}=e_{n}$, $e_{m}e_{n}=0$, and $e_{m}+e_{n}=1$ modulo mn. Reconstruction is $ae_{m}+be_{n}$.

<a id="section-117-desk-5-finite-group-exponent-theorems"></a>
## Desk 5 — finite-group exponent theorems {#section-119-desk-5-finite-group-exponent-theorems}

Lagrange’s theorem gives $a^\\lvert G\\rvert=1$ for every a in a finite group G, but the sharper universal exponent is the least common multiple of element orders. For units modulo n, this is the Carmichael function λ(n), which can be smaller than φ(n).

**Euler.** If gcd(a,n)=1, $a^\\varphi(n)\\equiv 1 \\pmod{n}$.

**Fermat.** For prime p, $a^{p-1}\\equiv 1$ when p∤a; equivalently $a^p\\equiv a$ for every integer a.

**Converse boundary.** A composite can satisfy $a^{n-1}\\equiv 1 \\pmod{n}$ for every a coprime to n; Carmichael numbers such as 561 prevent this from characterizing primes. Fermat tests are useful filters, not unconditional primality certificates.

<a id="section-127-desk-6-multiplicative-functions"></a>
## Desk 6 — multiplicative functions {#section-129-desk-6-multiplicative-functions}

If f and g are multiplicative, so is their Dirichlet convolution. Proof: when gcd(m,n)=1, each divisor d of mn factors uniquely as $d=d_{1}d_{2}$ with $d_{1}\\mid m$, $d_{2}\\mid n$, and the double sum separates.

Prime-power tables determine a multiplicative function. For $n=\\prod p_{i}^{a_{i}}$:

$\\tau(n)=\\prod(a_{i}+1)$,

$\\sigma(n)=\\prod(p_{i}^{a_{i}+1}-1)/(p_{i}-1)$,

$\\varphi(n)=\\prod p_{i}^{a_{i}-1}(p_{i}-1)$.

Möbius inversion is convolution by μ, the inverse of the constant-one function. Always identify which divisor sum is F and which desired function is f before substituting; confusing $F(d)$ with $F(n/d)$ is harmless only after a justified divisor change.

<a id="section-141-desk-7-diophantine-decision-ladder"></a>
## Desk 7 — Diophantine decision ladder {#section-143-desk-7-diophantine-decision-ladder}

Before searching, try:

1. sign, parity, and magnitude bounds;
2. gcd divisibility;
3. residues modulo several small moduli;
4. factorization and valuations;
5. parametrization or substitution;
6. descent or infinite ascent;
7. approximation and continued fractions;
8. algebraic-number or curve methods.

**Local-global warning.** If an integer equation has a solution, it has a solution modulo every m and over every completion. The converse may fail. Even for rational points on varieties, local solubility is not a universal guarantee. A modular search can certify impossibility but, absent a theorem for the family, cannot certify global existence.

**Pell contract.** For positive nonsquare integer D, the continued fraction of √D is periodic, and a convergent yields a nontrivial solution to $x^{2}-Dy^{2}=1$. If D is a square, the equation factors and has different behavior; if the right side is another integer N, solvability needs separate analysis.

<a id="section-158-desk-8-analytic-statements-and-quantifiers"></a>
## Desk 8 — analytic statements and quantifiers {#section-160-desk-8-analytic-statements-and-quantifiers}

For functions f,g positive eventually, $f(x)\\sim g(x)$ means $f(x)/g(x)\\to 1$. It does not mean the difference tends to zero. Indeed π(x) and x/log x both grow without bound while their ratio tends to 1.

Big-O $f(x)=\\mathcal{O}(g(x))$ means there exist C,x₀ such that $\\lvert f(x)\\rvert\\le C\\lvert g(x)\\rvert$ for all x≥x₀. The constants and limiting regime belong to the claim.

An Euler product initially needs absolute convergence. For $\\operatorname{Re}(s)>1$,

$\\sum n^{-s}=\\prod_{p}(1-p^{-s})^{-1}$.

Analytic continuation is a theorem producing an extended function; it does not retroactively make the original divergent series a conventional sum at every point.

<a id="section-170-desk-9-ideals-and-factorization-scope"></a>
## Desk 9 — ideals and factorization scope {#section-172-desk-9-ideals-and-factorization-scope}

A Dedekind domain is a Noetherian integrally closed domain of dimension one; equivalently for this use, every nonzero proper ideal factors uniquely into nonzero prime ideals. Rings of integers of number fields are Dedekind domains.

This does not imply element factorization is unique. A nonprincipal prime ideal cannot be represented by a single prime element. The class group of fractional ideals modulo principal fractional ideals measures the obstruction. Class number one is equivalent to every nonzero ideal being principal, hence the ring of integers is a PID and therefore a UFD. The reverse implications for arbitrary domains require care; keep the ring class named.

<a id="section-176-desk-10-elliptic-group-law-checklist"></a>
## Desk 10 — elliptic group-law checklist {#section-178-desk-10-elliptic-group-law-checklist}

For $E:y^{2}=x^{3}+Ax+B$ over a field of characteristic not 2 or 3:

1. verify $4A^{3}+27B^{2}\\ne 0$;
2. include the point at infinity $𝒪$;
3. treat a vertical line as sum $𝒪$;
4. for doubling, a point with y=0 has a vertical tangent and doubles to $𝒪$;
5. reduce every coordinate and slope in a finite field;
6. reject a denominator only after deciding whether it represents the vertical case.

For affine points P=(x₁,y₁), Q=(x₂,y₂) with x₁≠x₂, the slope is

$\\lambda=(y_{2}-y_{1})/(x_{2}-x_{1})$.

For doubling, $\\lambda=(3x_{1}^{2}+A)/(2y_{1})$. Then

$x_{3}=\\lambda^{2}-x_{1}-x_{2}$, $y_{3}=\\lambda(x_{1}-x_{3})-y_{1}$.

Over $\\mathbb{F}_{p}$, division means modular inversion. Raw integer coordinate pairs differing by multiples of p denote the same point; implementations must canonicalize or reject them consistently.

<a id="section-197-desk-11-rsa-correctness-without-security-inflation"></a>
## Desk 11 — RSA correctness without security inflation {#section-199-desk-11-rsa-correctness-without-security-inflation}

Let p,q be distinct primes, n=pq, and choose positive integers e,d with $ed\\equiv 1 (\\bmod \\varphi(n))$. For every residue M modulo n,

$M^{ed}\\equiv M \\pmod{n}$.

Proof modulo p: if p|M, both sides are 0; otherwise Fermat reduces the exponent. Repeat modulo q, then use CRT. This branch is why a proof that simply “divides by M” covers only units.

Correctness says decryption reverses encryption under valid keys. It does not say factoring is the only attack, that inverting RSA equals factoring, that deterministic textbook RSA is confidential, or that an implementation is side-channel safe. A security theorem must name the encoded scheme, adversarial game, resource bounds, and assumption.

<a id="section-207-practice-with-answers"></a>
## Practice with answers {#section-209-practice-with-answers}

1. **Why is gcd(0,0) excluded from the positive-gcd definition?** Every positive integer divides both zeros, so there is no greatest positive common divisor. Algorithms often define gcd(0,0)=0 by convention.
2. **Find the inverse of 37 modulo 101.** Euclid gives $101=2\\cdot 37+27$, $37=27+10$, $27=2\\cdot 10+7$, $10=7+3$, $7=2\\cdot 3+1$; back substitution gives $1=11\\cdot 101-30\\cdot 37$, so the inverse is −30≡71.
3. **How many solutions has $12x\\equiv 18 \\pmod{30}$?** g=6 divides 18, so there are six modulo 30. Divide to $2x\\equiv 3 \\pmod{5}$, giving x≡4 modulo 5: 4,9,14,19,24,29.
4. **Show 561 is not prime despite passing many Fermat tests.** $561=3\\cdot 11\\cdot 17$. Korselt’s criterion applies because it is squarefree and each p−1 divides 560: 2,10,16 all divide 560. Thus every unit a satisfies $a^{560}\\equiv 1 \\bmod 561$.
5. **Compute $v_{2}(100!)$.** $\\lfloor 100/2\\rfloor+\\lfloor 100/4\\rfloor+\\lfloor 100/8\\rfloor+\\lfloor 100/16\\rfloor+\\lfloor 100/32\\rfloor+\\lfloor 100/64\\rfloor=50+25+12+6+3+1=97$.
6. **Why does $x^{2}\\equiv-1 \\pmod{3}$ obstruct an integer equation?** Squares modulo 3 are 0,1, never 2=−1. Any integer solution would reduce to a modular one, contradiction.
7. **On the seven-point curve $y^{2}=x^{3}+2x+1$ over F₅, what is the order of (0,1)?** Repeated addition gives $(0,1),(1,3),(3,3),(3,2),(1,2),(0,4),𝒪$, so the order is 7.
8. **Why is the RSA proof split modulo p and q?** Euler’s unit theorem alone does not cover messages divisible by a prime factor. The branch modulo each prime handles zero separately, and CRT rejoins the results.

<a id="section-218-source-route"></a>
## Source route {#section-220-source-route}

Use the standard course for development and the computation recipe for executable invariants. Graduate continuation should treat local fields, class field theory, sieve methods, modular forms, Galois representations, heights, descent, and explicit arithmetic geometry as full subjects, not vocabulary lists.
`;export{e as default};