# Guided Problem Studios {#sec-nt-problem-studios}

The numbered chapters build tools one at a time. These studios ask you to choose,
combine, test, and explain them. Each investigation begins with a question that
can be explored by hand, continues through exact finite evidence, and ends with
a proof obligation. No studio requires software, though a short program can
extend the arithmetic tables.

## How to run a mathematical investigation

Use one notebook page or text file as a **claim ledger**. Give every statement
one label:

- **definition:** a convention fixed for the project;
- **computed fact:** an exact result on a declared finite set;
- **proved statement:** a conclusion with a complete argument;
- **quoted theorem:** a result whose hypotheses and source are recorded;
- **conjecture:** a pattern suggested by evidence but not established.

Before calculating, write the domain, notation, and stopping rule. After a
pattern appears, try to destroy it with boundary cases, zero, negative inputs,
noncoprime moduli, and the prime 2. Only then formulate the strongest statement
the evidence supports.

Every final report contains:

1. the question and why it matters;
2. prerequisite definitions in your own words;
3. a reproducible table of exact examples;
4. one theorem proved from earlier chapters;
5. one failed generalization or counterexample;
6. a distinction between finite evidence and universal scope;
7. exercises you designed for another reader; and
8. a brief reflection on which idea did the real work.

## Divisibility and congruence studio

### Question

How can several local remainder conditions be combined into one global
description, and exactly what fails when moduli are not coprime?

Begin with

$$
x\equiv2\pmod6,
\qquad x\equiv5\pmod9.
$$

The moduli are not coprime. A simultaneous solution exists only if the two
residues agree modulo $\gcd(6,9)=3$. Here $2\equiv5\pmod3$, so solutions
exist and form one class modulo $\operatorname{lcm}(6,9)=18$.

Write $x=2+6t$. The second condition becomes

$$
6t\equiv3\pmod9.
$$

Divide the entire congruence and modulus by 3 to obtain

$$
2t\equiv1\pmod3,
$$

so $t\equiv2\pmod3$ and $x\equiv14\pmod {18}$.

### Investigation

1. Solve ten pairs of congruences, including two inconsistent pairs.
2. For general $x\equiv a\pmod m$ and $x\equiv b\pmod n$, prove necessity
   of $a\equiv b\pmod {\gcd(m,n)}$.
3. Use Bézout's identity to prove that condition is sufficient.
4. Prove uniqueness modulo $\operatorname{lcm}(m,n)$.
5. Extend the procedure to three congruences by combining two at a time.
6. Create an error clinic showing why cancellation modulo $m$ requires a gcd
   check.

### Extension

Choose a calendar, gear, or repeating-schedule problem and translate it into
congruences. Keep units visible. If a schedule repeats every 12 hours and
another every 18 hours, the combined period is an lcm, not a product.

**Proof checkpoint.** Your general theorem must cover both coprime and
noncoprime moduli and must state what the complete solution set is. A list of
examples is not the theorem.

## Diophantine search-to-proof studio

### Question

When does a finite search reveal a genuine obstruction or parametrization?

Study primitive Pythagorean triples

$$
x^2+y^2=z^2,
\qquad \gcd(x,y,z)=1.
$$

First enumerate triples with $z\le100$. Record parity and gcd data rather than
only the three numbers. You should observe that exactly one of $x,y$ is even.

### Proof path

1. Prove both legs cannot be odd by reducing squares modulo 4.
2. Prove both cannot be even under primitivity.
3. Assume $y$ is even and factor

   $$
   y^2=(z-x)(z+x).
   $$

4. Show $(z-x)/2$ and $(z+x)/2$ are coprime positive integers whose product
   is a square.
5. Prove that coprime factors of a square are squares by prime factorization.
6. Deduce

   $$
   x=m^2-n^2,
   \qquad y=2mn,
   \qquad z=m^2+n^2,
   $$

   where $m>n$, $\gcd(m,n)=1$, and $m,n$ have opposite parity.
7. Prove the converse and identify when swapping the legs is necessary.

### Search audit

Generate parameters rather than scanning all triples, and compare the two
algorithms. State what completeness theorem licenses the parameter search. Test
what fails when $m,n$ are not coprime or have the same parity.

### Further problem

Investigate

$$
x^2+y^2=3z^2.
$$

Reduce modulo 3 and use infinite descent to show there is no nonzero integer
solution. Explain why checking a million triples would be weaker than the short
descent proof.

## Continued fractions and Pell studio

### Question

Why do rational approximations to $\sqrt D$ produce exact solutions of
$x^2-Dy^2=1$?

Take $D=14$. Compute the simple continued fraction of $\sqrt{14}$ by the
complete-quotient recurrence from Chapter 9. Verify its periodic part and list
convergents $p_k/q_k$ until a Pell solution appears.

For each convergent calculate

$$
R_k=p_k^2-14q_k^2.
$$

Do not round $\sqrt{14}$; every $R_k$ is an exact integer. Explain how the
small approximation error

$$
\left|\sqrt{14}-\frac{p_k}{q_k}\right|
$$

forces $|R_k|$ to be comparatively small.

### Investigation

1. Prove the determinant identity
   $p_kq_{k-1}-p_{k-1}q_k=(-1)^{k-1}$.
2. Use it to show consecutive convergents are reduced and bracket the target in
   alternating directions.
3. Identify the fundamental positive solution $(x_1,y_1)$ of
   $x^2-14y^2=1$.
4. Expand

   $$
   (x_1+y_1\sqrt{14})^r=x_r+y_r\sqrt{14}
   $$

   and prove every $(x_r,y_r)$ is another solution.
5. Derive a two-term matrix or recurrence for $x_r,y_r$.
6. Compare the period parity rule for $D=2,3,5,6,7,13,14$.

### Failure clinic

If $D$ is a square, the usual Pell problem degenerates. If a decimal
approximation replaces a convergent, the residual can be small without being
$\pm1$. State why each hypothesis matters.

## Finite-field construction studio

### Question

How does an irreducible polynomial turn symbolic expressions into a field?

Construct

$$
\mathbb F_9=\mathbb F_3[t]/(t^2+1).
$$

First prove $t^2+1$ has no root in $\mathbb F_3$, hence is irreducible.
Write every field element uniquely as $a+bt$ with $a,b\in\mathbb F_3$ and
use $t^2=-1=2$.

### Investigation

1. Build complete addition and multiplication tables or a compact program that
   can regenerate them.
2. Find the inverse of every nonzero element, once by search and once with the
   polynomial Euclidean algorithm.
3. Verify $x^9=x$ for all nine elements.
4. Compute the Frobenius map $x\mapsto x^3$ and its orbits.
5. Find an element generating $\mathbb F_9^\times$, whose order is 8.
6. Factor $X^9-X$ over $\mathbb F_3$ and identify the irreducible factors
   of degrees dividing 2.

### Comparison

Try $t^2+t+1$ over $\mathbb F_3$. It has the root 1 and the quotient has
zero divisors. Display two nonzero classes whose product is zero. This is the
counterexample showing why irreducibility is essential.

### Certificate

Your finite-field implementation should emit the prime, modulus polynomial,
canonical coefficient representation, irreducibility check, and one
multiplication/inversion self-test. A table with unexplained integer labels is
not portable evidence.

## Ideals, units, and class-group studio

### Question

How do ideals restore unique factorization when elements do not factor uniquely?

Work in

$$
R=\mathbb Z[\sqrt{-5}]
$$

with norm

$$
N(a+b\sqrt{-5})=a^2+5b^2.
$$

The identity

$$
6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5})
$$

displays two element factorizations.

### Investigation

1. Prove the norm is multiplicative.
2. Use norm values to show 2, 3, and $1\pm\sqrt{-5}$ are irreducible.
3. Prove none of the factors in one displayed factorization is an associate of a
   factor in the other.
4. Show 2 divides the product
   $(1+\sqrt{-5})(1-\sqrt{-5})$ but divides neither factor; hence 2 is not
   prime.
5. Study the ideals

   $$
   \mathfrak p=(2,1+\sqrt{-5}),
   \qquad \mathfrak q=(3,1+\sqrt{-5}).
   $$

   Compute their quotient-ring sizes and relate those sizes to ideal norms.
6. Verify selected ideal-product identities by proving both inclusions.

### Theorem boundary

The ring of integers of $\mathbb Q(\sqrt{-5})$ is $R$, a Dedekind domain,
so nonzero ideals factor uniquely into prime ideals. A full class-group
calculation additionally uses Minkowski's bound from Chapter 25. State that
theorem with degree, discriminant, and norm hypotheses before concluding the
class number.

### Reflection

Explain why "unique factorization fails" is not the end of arithmetic. Identify
which statements survive for ideals and which properties of elements are still
useful.

## Prime-distribution and L-function studio

### Question

How can character orthogonality isolate primes in one residue class without
turning a finite plot into the prime number theorem?

Choose modulus 5. List the Dirichlet characters of
$(\mathbb Z/5\mathbb Z)^\times$, including the principal character. Verify the
orthogonality identity

$$
\frac1{\varphi(5)}
\sum_\chi \overline{\chi(a)}\chi(n)
= \begin{cases}
1,&n\equiv a\pmod5,\\
0,&n\not\equiv a\pmod5,
\end{cases}
$$

when $a,n$ are units modulo 5.

### Investigation

1. Count primes $p\le x$ in the four reduced classes for several exact bounds
   $x$.
2. Plot or tabulate the normalized discrepancies from $\operatorname{Li}(x)/4$.
3. Compute partial sums $\sum_{n\le N}\chi(n)$ for each nonprincipal
   character and explain the cancellation forced by a complete period.
4. Form finite Euler products for $L(s,\chi)$ at a safe real $s>1$.
5. Compare product and series truncations, with a tail bound rather than decimal
   agreement alone.
6. Use orthogonality to derive a weighted residue-class indicator formula.

### Claim audit

Your data show finite counts. Dirichlet's theorem proves infinitely many primes
in each reduced class. The prime number theorem for progressions gives an
asymptotic under stronger analytic work. Label these three scopes separately.
Never infer "the classes alternate" or "one class always leads" from a finite
race.

## Modular-form coefficient studio

### Question

How can a generating function turn representation counts into algebraic
coefficients?

Define

$$
\theta(q)=\sum_{n\in\mathbb Z}q^{n^2}
=1+2q+2q^4+2q^9+\cdots.
$$

Then the coefficient of $q^m$ in $\theta(q)^2$ counts ordered signed
representations $m=x^2+y^2$.

### Investigation

1. Expand $\theta(q)^2$ through $q^{50}$ by exact convolution.
2. Check selected coefficients by enumerating lattice points.
3. Compare them with

   $$
   r_2(m)=4\bigl(d_1(m)-d_3(m)\bigr),
   $$

   where $d_j(m)$ counts divisors congruent to $j\pmod4$.
4. Prove the formula for prime powers and extend it multiplicatively, using the
   sum-of-two-squares theorem from Chapter 17.
5. Explain how the transformation behavior of $\theta$ is a modular-form
   statement and which part of your coefficient calculation does not require
   proving that transformation law.
6. Replace two squares by four squares and investigate the resulting divisor-sum
   pattern.

### Computation warning

Truncating each theta factor too early can omit a representation. To determine
coefficients through $q^M$, include all $n$ with $n^2\le M$. Record that
bound as part of the computation certificate.

## Probabilistic number-theory studio

### Question

In what precise sense does the number of prime factors of a random integer
behave like a sum of rare events?

For $n\ge1$, let $\omega(n)$ be the number of distinct prime divisors.
Choose $N$ and place the uniform probability measure on
$\{1,\ldots,N\}$. For each prime $p\le N$, define

$$
I_p(n)=\mathbf 1_{p\mid n}.
$$

Then exactly

$$
\omega(n)=\sum_{p\le N}I_p(n).
$$

### Investigation

1. Prove
   $\mathbb E[I_p]=\lfloor N/p\rfloor/N$.
2. Sum to obtain the exact finite mean of $\omega$.
3. Compute covariances of $I_p,I_q$ and compare them with independence.
4. Calculate the empirical mean and variance for increasing $N$.
5. Normalize by $\log\log N$ and compare the histogram with a normal curve,
   clearly labeled as a finite comparison.
6. Repeat for $\Omega(n)$, which counts prime factors with multiplicity.
7. Investigate how restricting to even integers changes the distribution.

### Theorem ladder

Turán's second-moment argument proves concentration at the normal-order scale.
Hardy–Ramanujan gives normal order, and Erdős–Kac gives a Gaussian limit.
Write each conclusion with its own normalization and quantifiers. A bell-shaped
histogram is evidence about one $N$, not a proof of the limit theorem.

## Cryptography and primality-certificate studio

### Question

What separates an arithmetic demonstration, a secure protocol, and a proof that
a large integer is prime?

Choose two modest primes $p,q$, form $N=pq$, and implement the textbook RSA
map. Select $e$ with

$$
\gcd(e,\lambda(N))=1,
$$

where $\lambda(N)=\operatorname{lcm}(p-1,q-1)$, then compute
$d\equiv e^{-1}\pmod{\lambda(N)}$. For a message class $m$, encryption and
decryption are

$$
c\equiv m^e\pmod N,
\qquad m'\equiv c^d\pmod N.
$$

### Correctness proof

Prove $m'=m$ separately modulo $p$ and modulo $q$. If $p\nmid m$, use
Fermat's theorem and $ed\equiv1\pmod {p-1}$. If $p\mid m$, both sides are
zero modulo $p$. Repeat at $q$, then use the Chinese remainder theorem.
This case split prevents the common mistake of applying Euler's theorem to a
nonunit.

### Investigation

1. Trace key generation, encryption, and decryption with exact modular powers.
2. Implement square-and-multiply and record the number of modular
   multiplications.
3. Corrupt $d$ by one and find a message on which decryption fails.
4. Show why reusing a tiny deterministic message space permits a lookup attack.
5. Demonstrate the multiplicative relation
   $E(m_1m_2)=E(m_1)E(m_2)$ modulo $N$ and explain why textbook RSA is not
   semantically secure.
6. Label padding and side-channel resistance as engineering requirements beyond
   the number-theoretic correctness proof.

Now choose an odd candidate $n$ and compare three tasks:

- trial division through $\sqrt n$, which proves primality if no factor is
  found;
- a Fermat or Miller–Rabin probable-prime test, whose conclusion depends on
  bases and theorem scope;
- a certificate such as a Pratt tree or a Pocklington-style record, which a
  smaller checker can validate.

### Certificate design

For a Pratt-style certificate of a prime $r$, factor $r-1$, recursively
certify its prime divisors, and supply a witness satisfying the required modular
conditions. Your report must distinguish:

1. **producer effort:** finding factors and witnesses;
2. **checker effort:** verifying modular identities and recursive subrecords;
3. **security claim:** absent unless a cryptographic scheme and threat model are
   separately analyzed.

Use Carmichael number 561 to show that passing a naive Fermat test to some bases
is not a primality proof. Verify

$$
561=3\cdot11\cdot17
$$

and explain the difference between "no factor was found," "this probable-prime
test passed," and "this certificate proves primality."

## Local-to-global and elliptic-curve studio

### Question

How can reductions modulo primes rule out a global integer solution, and when
does local success fail to produce one?

Begin with the equation

$$
x^2+y^2=3.
$$

Over the integers, reduction modulo 3 shows both squares would have to be 0,
forcing $3\mid x,y$; substituting gives an impossible descent. Compare this
with a search bound and explain why the modular argument is universal.

Then study a conic from Chapter 15 for which local solvability over every
completion does imply rational solvability. Write down the exact Hasse–Minkowski
hypotheses. Finally, locate a higher-degree or higher-genus example in the
bibliography where local points exist but a rational point does not. The
objective is not to reproduce its advanced proof; it is to state why a theorem
for quadratic forms cannot be generalized by changing only the degree.

### Elliptic curve case study

Take

$$
E:y^2=x^3-x+1.
$$

1. Compute the discriminant and list primes of good reduction among the first
   several primes.
2. Count $E(\mathbb F_p)$ exactly for those primes, including the point at
   infinity.
3. Compute

   $$
   a_p=p+1-\#E(\mathbb F_p)
   $$

   and verify the Hasse bound $|a_p|\le2\sqrt p$ numerically.
4. Choose rational points with manageable coordinates and verify the chord-and-
   tangent addition law exactly.
5. Reduce those points modulo good primes and check that addition commutes with
   reduction whenever denominators remain valid.
6. Search for small integral points, recording the bound. Do not call the list
   complete without a theorem bounding all possibilities.

### Descent viewpoint

A descent map sends rational points to a finite collection of auxiliary local
conditions. Work through a simplified 2-descent example supplied in Chapter 20
or a reference. Make a dependency diagram:

$$
\text{rational point}
\Longrightarrow
\text{every local condition}
\Longrightarrow
\text{finite Selmer candidate}.
$$

The reverse arrows require additional information. In particular, a Selmer
element need not come from a rational point. State the quotient or obstruction
group that measures the gap at theorem level, even if its computation is beyond
the studio.

### Cross-prime synthesis

Compare three uses of a prime $p$:

- a congruence obstruction proves no integer solution;
- point counts constrain an elliptic curve but do not determine its rational
  rank alone;
- a $p$-adic lift can turn a nonsingular residue solution into a local point.

Write one example of each and state the direction of implication. The phrase
"works modulo every prime" is not yet a rational solution unless an appropriate
local-to-global theorem is available.

## Solution pathways and peer audit

The following prompts turn partial work into a polished argument.

### Congruence pathway

For two moduli, set $g=\gcd(m,n)$. If $g\nmid(b-a)$, stop with a proved
inconsistency. Otherwise divide

$$
m t\equiv b-a\pmod n
$$

by $g$, invert $m/g$ modulo $n/g$, and substitute back. To prove
uniqueness, subtract two solutions and show their difference is divisible by
both moduli, hence by the lcm.

### Parametrization pathway

A parametrization has two halves. The forward derivation proves every primitive
solution has the stated form. The converse checks that every legal parameter
pair produces a primitive solution. Missing either half proves only necessity or
only construction, not classification.

### Finite-field pathway

For a degree-two polynomial over a field, no root is equivalent to
irreducibility. Reduce every product to the canonical basis. To invert $u$,
find polynomials $A,B$ with

$$
A(X)u(X)+B(X)f(X)=1;
$$

the class of $A$ is the inverse. Verify by multiplication in the quotient.

### Analytic pathway

An Euler product truncated at $P$ and a Dirichlet series truncated at $N$
omit different terms. Agreement to six decimals is not a tail estimate. For
$s>1$, bound the series tail by an integral and the logarithm of the Euler-
product tail by a convergent prime or integer sum.

### Probability pathway

Linearity of expectation does not need independence, so the mean of $\omega$
is accessible immediately. Variance introduces covariances. Write them exactly
before replacing divisibility indicators with independent Bernoulli variables.
The discrepancy between the two is part of the analysis, not an inconvenience
to hide.

### Peer-audit questions

Exchange a studio report and answer:

1. Can every symbol be traced to a definition?
2. Is the finite domain reproducible?
3. Does each proof use all stated hypotheses and no hidden ones?
4. Is a cited theorem stronger than needed, weaker than claimed, or correctly
   matched?
5. Does the report attempt a converse that has not been proved?
6. Can one exact boundary example falsify a sentence?
7. Are computational and theorem-level conclusions labeled differently?
8. Could a reader reproduce the central table without asking the author?

Return the audit with one confirmed strength, one required correction, and one
optional extension. The author then writes a response log explaining every
accepted or rejected change.

## Extended proof clinics

These clinics focus on proofs that are often compressed into one slogan. Write
the missing intermediate statements rather than quoting the slogan back.

### Orders, exponents, and modular powers

Let $a$ be a unit modulo $m$. Its order is the least positive $r$ with

$$
a^r\equiv1\pmod m.
$$

Prove the order divides every exponent $k$ for which $a^k\equiv1\pmod m$:
divide $k=qr+s$ with $0\le s<r$, reduce $a^k$, and use minimality.

Next prove the order divides $\varphi(m)$ by Lagrange's theorem in the finite
unit group. If group theory is not being assumed, reproduce Euler's theorem by
permuting a reduced residue system and then apply the previous divisibility
argument with care: Euler alone gives one exponent, while Lagrange explains why
the order divides the group size.

Work through these distinctions:

1. $a^{\varphi(m)}\equiv1\pmod m$ requires $\gcd(a,m)=1$.
2. The order may be a proper divisor of $\varphi(m)$.
3. The Carmichael exponent $\lambda(m)$ is the least common multiple of all
   unit orders and can be smaller than $\varphi(m)$.
4. If $a$ is not a unit, its powers can still become periodic, but the pure
   group-order argument does not apply.

For $m=8,9,10,12,15,16$, list all unit orders, compute the exponent, and
decide whether the unit group is cyclic. Give a generator when it is cyclic and
a proof of impossibility when no element has the full group order.

Now solve a modular exponent problem such as

$$
7^{10^{100}}\pmod {40}.
$$

Do not reduce the exponent modulo $\varphi(40)$ before checking that 7 is a
unit. Find the actual order and reduce modulo that smaller number. Verify the
result separately modulo 5 and 8, then reconstruct with CRT.

**False-converse audit.** From $a^{m-1}\equiv1\pmod m$, it does not follow
that $m$ is prime. Find a pseudoprime example, factor it, and locate precisely
where the proof of Fermat's theorem used primality rather than only the final
congruence.

### Quadratic symbols and reciprocity

For odd prime $p$, the Legendre symbol $(a/p)$ records whether the nonzero
class $a$ is a square. Begin by listing squares modulo several odd primes and
verifying Euler's criterion

$$
\left(\frac ap\right)
\equiv a^{(p-1)/2}\pmod p,
$$

where the right side is interpreted as $1$ or $-1$ modulo $p$.

Create a reciprocity calculator whose proof record contains:

1. factorization of the numerator;
2. removal of square factors;
3. supplementary laws for $-1$ and 2;
4. each reciprocal swap of odd primes;
5. the sign introduced when both primes are 3 modulo 4;
6. a final small residue computation.

Use it to evaluate examples with large-looking primes without enumerating half
the residues. Then independently verify selected results with modular powers.

Prove the supplementary law

$$
\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}
$$

by pairing roots or using Euler's criterion. For the law of 2, build the Gauss-
lemma table and count how many least residues of
$2,4,\ldots,(p-1)$ cross $p/2$. State the resulting dependence on
$p\bmod8$.

Apply reciprocity to decide for which reduced classes of odd primes $p$ the
congruence

$$
x^2\equiv q\pmod p
$$

is solvable for a fixed small prime $q$. Combine the supplementary and
reciprocity laws with CRT to obtain residue classes modulo an explicit modulus.
Test the classification on primes below a finite bound. The computation checks
the classification; the reciprocity proof establishes it for every prime outside
the listed exceptional divisors.

**Jacobi warning.** A Jacobi symbol $(a/n)=1$ for composite $n$ does not
guarantee that $a$ is a square modulo $n$. Find an example and explain why a
product of two $-1$ Legendre symbols can equal $+1$ without either local
congruence being solvable.

### From arithmetic sums to asymptotics

Let

$$
A(x)=\sum_{n\le x}a_n.
$$

Partial summation states, for a continuously differentiable $f$,

$$
\sum_{n\le x}a_nf(n)
=A(x)f(x)-\int_1^xA(t)f'(t)\,dt,
$$

with endpoint conventions made explicit. Derive this first for step functions
by grouping intervals $[n,n+1)$, or from finite Abel summation followed by an
integral representation of differences.

Use the identity in three settings:

1. from an estimate for $\pi(x)$, estimate
   $\sum_{p\le x}1/p$;
2. from $A(x)=O(x^\alpha)$, determine convergence ranges for
   $\sum a_n/n^s$;
3. translate between the Chebyshev functions $\theta(x)$ or $\psi(x)$ and
   prime-counting information.

In each case, keep constants and uniformity ranges visible. If
$A(x)=O(x^\alpha)$, the hidden constant may depend on fixed parameters but
must not depend on the summation variable. Write a sentence declaring every
allowed dependency.

### Error-term clinic

Suppose

$$
A(x)=cx+O(x^\beta),
\qquad \beta<1.
$$

Insert this into partial summation with $f(t)=1/t$. Separate the main term and
error integral. Determine whether the error is bounded, logarithmic, or a power
according to $\beta$. Do not write $O$-notation inside an integral without
replacing it by an inequality valid throughout the integration range.

Compare $O$, $o$, and asymptotic equivalence. Construct sequences showing:

- $f=O(g)$ need not imply $f/g$ has a limit;
- $f=o(g)$ implies $f=O(g)$ eventually but is stronger;
- $f\sim g$ requires $g\ne0$ eventually and gives a ratio limit 1;
- an asymptotic can be poor at the modest values shown in a plot.

### Proof-compression audit

For one theorem from Chapters 27–30, locate a published proof or detailed
reference. Produce two versions:

- a one-page architecture naming lemmas and dependencies;
- a complete proof of one selected lemma.

Mark every place where the architecture uses complex analysis, algebraic number
theory, probability, or a result not proved in this book. A proof sketch is
valuable when it maps the missing machinery; it is misleading when it replaces
that machinery with "clearly" or "similarly."

## Advanced synthesis briefs

Each brief crosses several parts of the book. Begin by drawing its dependency
map: list the elementary facts you can prove directly, the named theorems you
will invoke, and the calculations that merely provide evidence. A complete
submission may solve one brief deeply instead of sampling all of them.

### Brief 1: when is an integer a sum of two squares?

Start experimentally, but record a factorization beside every example. The
pattern to formulate is the sum-of-two-squares theorem:

> A positive integer $n$ is $x^2+y^2$ with $x,y\in\mathbb Z$ if and only
> if every prime $q\equiv3\pmod4$ occurs to an even exponent in the prime
> factorization of $n$.

Prove necessity without using unique factorization in $\mathbb Z[i]$. If
$q\equiv3\pmod4$ divides $x^2+y^2$ and $q\nmid y$, then
$(xy^{-1})^2\equiv-1\pmod q$, contradicting Euler's criterion. Thus $q$
divides both $x$ and $y$, so removing $q^2$ can be repeated. Handle
$q\mid y$ separately rather than dividing illegally.

For sufficiency, first prove the composition identity

$$
(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2.
$$

Squares and the prime 2 are immediate. For a prime $p\equiv1\pmod4$, use
Euler's criterion to obtain a square root of $-1$ modulo $p$, then use the
pigeonhole principle or the Euclidean algorithm in $\mathbb Z[i]$ to produce
$p=a^2+b^2$. If you quote the Gaussian-integer proof, state explicitly that
$\mathbb Z[i]$ is Euclidean and hence a unique-factorization domain. Assemble
the prime powers with the identity.

Your report must distinguish existence from representation count. As an
extension, derive

$$
r_2(n)=4\bigl(d_1(n)-d_3(n)\bigr),
$$

where $d_j(n)$ counts divisors congruent to $j\pmod4$, and state that signs
and order are counted. Test the formula on a square, a prime $1\pmod4$, and a
number having a forbidden prime to odd exponent.

### Brief 2: splitting, Frobenius data, and density

Fix a squarefree integer $D$. For odd primes $p\nmid D$, factor
$X^2-D$ over $\mathbb F_p$. Prove the exact dictionary

$$
\left(\frac{D}{p}\right)=
\begin{cases}
1,&X^2-D\text{ splits into two distinct linear factors},\\
-1,&X^2-D\text{ is irreducible}.
\end{cases}
$$

Record ramified primes $p\mid D$ and the prime 2 in separate rows. This small
example is the quadratic-field version of splitting by Frobenius. Translate it
into ideals only after recalling that a nonzero prime ideal above $p$ has
residue degree equal to the degree of the corresponding irreducible factor
when the usual unramified hypotheses hold.

Choose one nonsquare $D$ and tabulate the first fifty eligible primes. Compare
the running split fraction with $1/2$, but do not call the plot a proof.
Quadratic reciprocity can turn the splitting condition into residue classes;
Dirichlet's theorem then supplies the appropriate densities. The general
Chebotarev theorem predicts conjugacy-class densities for Galois extensions.
Label that final sentence as a theorem vista unless you give its full
hypotheses and proof.

As a failure test, include primes dividing the discriminant in the naive
split/inert table and show exactly what breaks. Then compare $D$ and
$D m^2$: they define the same quadratic field when $m\ne0$, but a polynomial
with avoidable square factors can obscure the ramification data.

### Brief 3: an elliptic curve across many primes

Choose an integral short Weierstrass model

$$
E:y^2=x^3+Ax+B,
\qquad 4A^3+27B^2\ne0.
$$

Compute its discriminant and list the primes of bad reduction. For five good
primes, count $E(\mathbb F_p)$ by summing

$$
1+\left(\frac{x^3+Ax+B}{p}\right)
$$

over $x\in\mathbb F_p$ and then adding the point at infinity. Check Hasse's
bound

$$
\bigl|p+1-\#E(\mathbb F_p)\bigr|\le2\sqrt p.
$$

Explain why this computation neither determines $E(\mathbb Q)$ nor proves a
rank statement. Reduction modulo good primes is a homomorphism on rational
points that are integral at $p$; local information constrains global points
but does not automatically construct them.

Select two rational points and verify the chord-and-tangent group law exactly,
including the vertical-line case. Reduce the calculation modulo a good prime
and check compatibility. At a bad prime, document which denominator or
singularity invalidates the naive comparison.

For a modern bridge, form $a_p=p+1-\#E(\mathbb F_p)$ and compare these numbers
with coefficients of the modular form associated with $E$. You may use the
modularity theorem as a quoted theorem, but the curve, conductor convention,
coefficient normalization, and data source must be stated. Numerical agreement
for a few primes is a check of identification, not a proof of modularity.

### Brief 4: deterministic arithmetic versus a random model

For a uniformly chosen integer $n\le x$, let

$$
\omega_y(n)=\sum_{p\le y}\mathbf 1_{p\mid n}.
$$

Compute its exact finite mean by reversing the order of summation:

$$
\frac1{\lfloor x\rfloor}
\sum_{n\le x}\omega_y(n)
= \frac1{\lfloor x\rfloor}
\sum_{p\le y}\left\lfloor\frac{x}{p}\right\rfloor.
$$

Compare this with $\sum_{p\le y}1/p$. Derive an explicit error bound from
$|\lfloor x/p\rfloor-x/p|<1$, including its dependence on $\pi(y)$.
Next compute covariances of $\mathbf 1_{p\mid n}$ and
$\mathbf 1_{q\mid n}$ over the same finite sample. Divisibility by distinct
primes is approximately, not exactly, independent because of boundary floors.

Build an independent Bernoulli model with success probabilities $1/p$ and
compare its mean, variance, and histogram with the arithmetic sample. Then
state three levels of conclusion: an exact identity for the finite average, an
asymptotic obtained from a proved estimate, and a probabilistic analogy. If you
invoke the Erdős–Kac theorem, specify its normalization and limiting statement;
do not infer it from a bell-shaped histogram.

Finally change the sampling frame from all integers to primes, squarefree
integers, or one congruence class. Recompute the correct baseline rather than
reusing $1/p$. This exposes a central lesson of probabilistic number theory:
the probability space is part of the claim, while the underlying arithmetic
objects remain deterministic.

## Part IX cancellation, reciprocity, dynamics, and Langlands studios

These studios use Chapters 37–42 as capstone routes. Each submission contains
an exact-data file or table, a proof ledger separating derived and quoted
claims, one independently checkable calculation, and a short account of a
failed approach.

### Studio A: discrepancy and cancellation

Choose one irrational algebraic number and one rational number. Generate the
first $N$ rotations for a declared range of prefix lengths, compute star
discrepancy from sorted endpoints, and reproduce the relevant panel of
[Figure 37.1](37-exponential-sums.md#fig-weyl-discrepancy). Prove equidistribution in the irrational linear case
with Weyl's criterion and the exact geometric sum.

Next choose a quadratic exponential sum modulo an odd prime. Derive its
square-root magnitude by the change of variables in [sec-exponential-sums](37-exponential-sums.md#sec-exponential-sums) and
check one prime by exact complex algebra or symbolic cyclotomic relations.
Your failure audit must include either a composite modulus, an even modulus, or
an incomplete interval where the original proof no longer applies.

### Studio B: one unramified and one ramified extension

Fix an odd prime $p$. Construct one unramified quadratic extension by lifting
an irreducible quadratic over $\mathbb F_p$ and one totally ramified quadratic
extension with an Eisenstein polynomial. Report an integral basis,
uniformizer, residue field, $e$, $f$, trace, norm, different, and discriminant
valuation for each.

Every invariant must have an exact witness: an irreducibility table, an
Eisenstein check, a trace matrix, or a derivative generating the different.
Include a precision ledger for one calculation modulo a power of the local
uniformizer. Compare the result with the model in [sec-local-fields](38-local-fields.md#sec-local-fields) but use a
different prime or defining polynomial.

### Studio C: certify a curve zeta recurrence

Choose a nonsingular elliptic curve over a small odd finite field. Check its
discriminant, count base-field points including infinity, and obtain the trace
$a$. Use the Frobenius recurrence to predict counts over the next four
extensions. Independently verify at least one extension count in a finite field
defined by a proved irreducible polynomial.

Construct the local numerator $1-aT+qT^2$, check Hasse's bound, derive the
first closed-point orbit counts, and plot normalized Frobenius error. Explain
why a recurrence certificate validates consequences of $a$ but still needs an
independent certificate for the original point count.

### Studio D: an explicit Artin map

Choose a small cyclotomic field $\mathbb Q(\zeta_m)$. Identify its Galois group
with a unit group modulo $m$, list ramified primes, and compute Frobenius orders
and splitting types for at least twenty unramified primes. Select four primes
whose residues realise different group elements and derive their actions on
$\zeta_m$.

The report must treat conductor, arithmetic or geometric Frobenius convention,
and ramified exclusions explicitly. A finite frequency plot may be included,
but only a quoted Dirichlet or Chebotarev theorem may justify an asymptotic
density. Finish by identifying which quotient of the relevant ray class group
the example realises.

### Studio E: reduction and dynamical height

Choose $\phi_c(x)=x^2+c$ with small integral $c$. Build complete functional
graphs modulo three good primes, classify their cycles and tails, and provide a
machine-checkable edge table. Over $\mathbb Q$, compute exact numerator,
denominator, and height data for several initial points through at least six
iterates.

Identify the critical orbit, all visible rational preperiodic candidates, and
the modular restrictions on possible exact periods. A finite search is not a
classification unless a height bound or theorem supplies completeness. Compare
one conclusion with the power-map proof in [sec-arithmetic-dynamics](41-arithmetic-dynamics.md#sec-arithmetic-dynamics) and state
why the same canonical-height scaling does not apply to the Collatz map.

### Studio F: local factors from two sides

Begin with a normalized classical Hecke eigenform whose coefficients can be
computed exactly from a finite product, modular-symbol certificate, or a
declared built-in exact data source. For several good primes, reconstruct
$a_{p^r}$ from the Hecke recurrence and verify coprime multiplicativity on
separate examples. Record weight, nebentypus, level, conductor, and
normalization.

If a corresponding elliptic curve or Galois representation is known, compute
matching Frobenius polynomials at a finite set of good primes. Compare traces
and determinants and list all bad primes separately. Your conclusion must name
the theorem—Sturm, modularity, or multiplicity one—that would be required to
upgrade the finite checks; do not treat coefficient agreement alone as a
global correspondence.

## Part X computational and enumerative studios

These projects pair two independent calculations whenever practical. The aim
is not simply to obtain an answer but to produce a small certificate and state
which theorem turns that certificate into a general conclusion.

### Studio G: generators, cyclotomy, and Frobenius

Choose an odd prime $p$ for which $p-1$ has at least three distinct divisors.
Factor $p-1$, certify one primitive root with the prime-factor criterion, and
draw its complete power orbit beside an element of proper order. Verify that
the number of generators is $\varphi(p-1)$.

Next choose a conductor $m$ coprime to $p$. Construct $\Phi_m(X)$ by exact
recursive division, compute $\operatorname{ord}_m(p)$, and predict the number
and degrees of its irreducible factors over $\mathbb F_p$. Confirm the
prediction by exact polynomial arithmetic. Finish with a ledger separating
cyclicity, the factor-degree theorem, and the finite computations.

### Studio H: an evidence ladder for one prime candidate

Choose an odd candidate large enough that trial division is tedious but small
enough for transparent verification. Record a Fermat round, several
Miller–Rabin traces, and the resulting error statement. Then construct or
obtain a Pocklington, Pratt, or ECPP certificate and verify it independently.
The report must explain why the certificate changes the status from probable
prime to proved prime.

For a nearby composite with two nontrivial factors, run bounded Pollard-rho
traces under at least three seed/polynomial choices. Plot one success and one
failure, verify every returned divisor by exact division, and explain why
failure within a budget is not evidence of primality.

### Studio I: one partition identity three ways

Select either the distinct-parts/odd-parts theorem, a bounded Ferrers-rectangle
identity, or a self-conjugate-partition identity. Give a reversible bijection,
derive the corresponding generating-function equality, and compare exact
coefficients through a declared bound using two independently written
programs.

Then compute $p(n)$ by Euler's pentagonal recurrence and compare it with the
Hardy–Ramanujan main term. Report ratio and logarithmic error at a sequence of
increasing $n$. Your conclusion must distinguish the finite coefficient
identity, the infinite formal-series theorem, and the quoted analytic
asymptotic.

## Portfolio rubric and selected support

Assess each studio on a 0–4 scale in six dimensions:

| dimension | full-credit evidence |
|:---|:---|
| definitions | domain, notation, and conventions are explicit |
| exact work | examples are reproducible and independently checked |
| proof | every universal claim has a complete argument or quoted theorem |
| failure analysis | a tempting false extension is tested and explained |
| communication | equations, units, captions, and claim labels are readable |
| reflection | the report identifies limitations and the decisive idea |

### Selected checkpoints

- The noncoprime CRT condition is agreement modulo the gcd; the solution class,
  when it exists, is unique modulo the lcm.
- Primitive Pythagorean parameters require coprimality and opposite parity.
- Exact accelerated approximation data in a Pell studio are integer residuals,
  not rounded decimal errors.
- A quadratic quotient over a field is a field precisely when the modulus is
  irreducible.
- In $\mathbb Z[\sqrt{-5}]$, element nonuniqueness motivates ideal
  factorization; it does not contradict the Dedekind theorem.
- Character sums isolate residue classes only for units and with the principal
  character handled correctly.
- Theta coefficients count signed ordered lattice points, so axes and signs
  contribute multiplicity.
- Prime-divisibility indicators have exact finite dependencies even when an
  independent model predicts the leading scale.

A strong portfolio does not solve every extension. It makes the boundary
between what was computed, what was proved, and what remains open impossible to
miss.

## Complete Brief 1: classify and count two-square representations {#sec-nt-two-squares-completion}

This completes the existence-to-counting extension in **Brief 1: when is an
integer a sum of two squares?** above. We will construct every representation
of $221$, explain why the list is complete, and then change the prime-power
structure in a public capstone about $845$.

Use these conventions throughout:

- $n$ is a **positive integer** unless a boundary case explicitly says $n=0$.
- $r_2(n)$ counts every ordered pair $(x,y)\in\mathbb Z^2$ with
  $x^2+y^2=n$, including signs, zero coordinates and swapped coordinates.
- A representation is **primitive** when $\gcd(|x|,|y|)=1$.
- A canonical unordered nonnegative pair has $0\le x\le y$; when both
  coordinates are positive and different, write $0<x<y$.

Both the capstone and its full key are public. Keep your first attempt and
record when you consult a hint or answer. Self-review here supplies no
machine proof grade, qualification or evidence of unseen assessment.

### Preparation and the algebraic tool {#sec-nt-two-squares-preparation}

The named prerequisite is the Gaussian-integer Euclidean/UFD result in
[sec-quadratic-forms](17-quadratic-forms.md#sec-quadratic-forms), together with rational prime factorization from
[sec-primes](03-primes.md#sec-primes). Here is the mechanism we use.

For $w\ne0$ in $\mathbb Z[i]$, round each coordinate of $z/w$ to obtain
$q\in\mathbb Z[i]$. Then $r=z-qw$ satisfies

$$
N(r)\le \tfrac12N(w)<N(w),\qquad N(a+bi)=a^2+b^2.
$$

Thus the norm is Euclidean. The Euclidean algorithm gives gcds and a Bezout
identity. If an irreducible $\pi$ divides $ab$ but not $a$, then
$\gcd(\pi,a)=1$ and a Bezout identity implies $\pi\mid b$. Factoring nonunits
terminates by decreasing positive norms; this prime-divisor property makes the
factorization unique by cancellation. This is the UFD conclusion, with units
$1,-1,i,-i$.

We also use the prime-splitting result in [sec-quadratic-forms](17-quadratic-forms.md#sec-quadratic-forms): a rational prime
$p\equiv1\pmod4$ has a factor $\pi_p$ of norm $p$, so
$p=\pi_p\bar\pi_p$. Such a factor is Gaussian prime, since its prime norm cannot
split into two nonunit norms. The two conjugate factors are nonassociate:
associating $a+bi$ with $a-bi$ would force a zero coordinate or $|a|=|b|$,
which cannot have odd prime norm. For the examples below, the displayed norm
factorizations provide the required factors directly.

For a prime $q\equiv3\pmod4$, the elementary obstruction needs no Gaussian UFD.
If $q\mid x^2+y^2$ and $q\nmid y$, then $t=xy^{-1}$ modulo $q$ satisfies
$t^2=-1$. But

$$
t^{q-1}=(-1)^{(q-1)/2}=-1
$$

contradicts Fermat's theorem. If $q\mid y$, the equation instead gives
$q\mid x^2$, hence $q\mid x$. In either case, $q$ divides both coordinates.
Dividing by $q^2$ and repeating shows that its exponent in a represented
positive $n$ must be even. This also explains why $q$ is Gaussian prime: a
nontrivial factorization of $q$ would have two factors of norm $q$, whereas
$q\equiv3\pmod4$ cannot itself be a sum of two squares.

The prime $2$ behaves differently:

$$
2=-i(1+i)^2,\qquad \overline{1+i}=1-i=-i(1+i).
$$

Its Gaussian prime and its conjugate are associates. Giving the two conjugates
independent choices would therefore count the same factorization repeatedly.

### Factor allocation proves the complete count {#sec-nt-two-squares-allocations}

Write the rational prime factorization as

$$
n=2^a\prod_{p\equiv1\ (4)}p^{e_p}
       \prod_{q\equiv3\ (4)}q^{f_q}.
$$

If some $f_q$ is odd, the obstruction just proved gives $r_2(n)=0$.
Suppose every $f_q$ is even, and fix one factor $\pi_p$ of norm $p$ for each
split prime. **Every** Gaussian integer of norm $n$ is uniquely of the form

$$
z=x+iy
=u(1+i)^a
 \prod_{q\equiv3\ (4)}q^{f_q/2}
 \prod_{p\equiv1\ (4)}
       \pi_p^{k_p}\bar\pi_p^{\,e_p-k_p},
\quad
u\in\{1,-1,i,-i\},\quad 0\le k_p\le e_p.
$$

Here is the exhaustiveness argument. Any Gaussian prime dividing $z$ divides
$z\bar z=n$, so it is among the primes in the displayed factorization of $n$.
The exponent of $1+i$ in $n$ is $2a$; conjugation preserves that prime up to a
unit, forcing exponent $a$ in $z$. Conjugation fixes each inert rational $q$,
so its exponent in $z$ must be $f_q/2$. At a split prime, if $z$ contains
$\pi_p^k\bar\pi_p^\ell$, then $z\bar z$ contains each conjugate to exponent
$k+\ell=e_p$. Thus $\ell=e_p-k$. These conditions leave exactly the choices
written above.

Conversely, norm multiplicativity shows every displayed product has norm $n$.
UFD uniqueness distinguishes different exponent choices, and the four units
give four distinct nonzero Gaussian integers. Consequently,

$$
r_2(n)=4\prod_{p\equiv1\ (4)}(e_p+1)
\quad\text{when all }f_q\text{ are even}.
$$

The empty product is $1$. Conjugating a product already replaces every $k_p$
by $e_p-k_p$ and changes the unit as needed; it is not an extra independent
factor of $2$.

To obtain Brief 1's divisor formula, define

$$
\chi_4(d)=
\begin{cases}
0,&d\text{ even},\\
1,&d\equiv1\pmod4,\\
-1,&d\equiv3\pmod4.
\end{cases}
$$

Multiplication of residues shows $\chi_4(ab)=\chi_4(a)\chi_4(b)$. Each positive
divisor chooses one exponent at each rational prime, so distributing the
finite sum gives

$$
\sum_{d\mid n}\chi_4(d)
= \left(\sum_{j=0}^{a}\chi_4(2^j)\right)
\prod_{p\equiv1\ (4)}(e_p+1)
\prod_{q\equiv3\ (4)}\left(\sum_{j=0}^{f_q}(-1)^j\right).
$$

The first factor is $1$. Each last factor is $1$ for even $f_q$ and $0$ for
odd $f_q$. Comparing with the Gaussian count proves

$$
r_2(n)=4\sum_{d\mid n}\chi_4(d)
      =4\bigl(d_1(n)-d_3(n)\bigr),
$$

where $d_j(n)$ counts positive divisors congruent to $j$ modulo $4$.
The earlier modular-form studio's instruction to extend the count
multiplicatively applies to **$r_2/4$**: for coprime positive $m,n$,

$$
r_2(mn)=\frac{r_2(m)r_2(n)}4.
$$

Indeed, coprime inputs have disjoint prime factors in the product formula.
For example, $r_2(5)=r_2(13)=8$ but $r_2(65)=16$, not $64$.

### Worked certificate: every representation of 221 {#sec-nt-two-squares-221}

The rational factorization is $221=13\cdot17$, with

$$
13=(3+2i)(3-2i),\qquad 17=(4+i)(4-i).
$$

Each displayed Gaussian factor is prime because its norm is a rational prime.
Choose one conjugate factor from each pair. Representatives before multiplication
by a unit are:

| factor from $13$ | factor from $17$ | product |
|:---|:---|:---|
| $3+2i$ | $4+i$ | $10+11i$ |
| $3+2i$ | $4-i$ | $14+5i$ |
| $3-2i$ | $4+i$ | $14-5i$ |
| $3-2i$ | $4-i$ | $10-11i$ |

For example, $(3+2i)(4+i)=12-2+(3+8)i=10+11i$.
The norm checks are

$$
10^2+11^2=100+121=221,\qquad
5^2+14^2=25+196=221.
$$

Every representation arises from one of the four rows and one of the four
units, by [factor allocation](#sec-nt-two-squares-allocations). The full integer solution set is

$$
\{(\pm5,\pm14),(\pm14,\pm5),
  (\pm10,\pm11),(\pm11,\pm10)\},
$$

with the two signs in each pattern chosen independently. Hence $r_2(221)=16$,
and the canonical positive pairs are $(5,14)$ and $(10,11)$. The integer is
odd and not a square, so no diagonal or axis representation reduces an orbit
below eight points. Every representation is primitive: a prime dividing both
coordinates would have its square divide the squarefree integer $221$.
As a separate arithmetic check, the four divisors $1,13,17,221$ are all $1$
modulo $4$, giving $4(d_1-d_3)=4\cdot4=16$.

This is a constructive certificate plus an exhaustiveness proof. A finite
square table can check the arithmetic, while the factor-allocation argument
establishes the general classification used to obtain the list.

### Boundary cases: when eight sign-and-order choices fail {#sec-nt-two-squares-boundaries}

For $0<x<y$, independent signs and swapping give eight distinct points.
An axis pair $(0,y)$ with $y>0$ gives only four; a diagonal pair $(x,x)$ with
$x>0$ also gives four. Thus dividing $r_2(n)$ by $8$ counts unordered positive
pairs only after ruling out axes and diagonals.

- $n=1$ has the four unit representations $(\pm1,0),(0,\pm1)$.
- $n=2$ has the four representations $(\pm1,\pm1)$.
- $n=25$ has the axis orbit of $(0,5)$ and the eight-point orbit of $(3,4)$,
  so $r_2(25)=4+8=12$, also $4(2+1)$ from $25=5^2$.
- $n=0$ has just $(0,0)$, so $r_2(0)=1$. The positive-integer factorization
  theorem and its divisor formula were not stated for this case.

### Public changed capstone: a repeated split prime {#sec-nt-two-squares-capstone}

Now classify

$$
x^2+y^2=845,\qquad 845=5\cdot13^2.
$$

You may start with $5=(2+i)(2-i)$ and $13=(3+2i)(3-2i)$.
The repeated factor changes the allocation problem and introduces
nonprimitive representations.

1. Parameterize all Gaussian integers of norm $845$, giving the allowed
   exponents and the unit. Explain why the parameterization is exhaustive.
2. Compute one representative for each exponent choice, then list the
   canonical positive pairs. Determine $r_2(845)$.
3. Determine how many signed ordered representations are primitive. Identify
   precisely which allocation creates a common factor in both coordinates.
4. Check the total with the divisor-character formula. Explain why multiplying
   $r_2(5)$ by $r_2(13)^2$ is invalid.
5. Classify the representations of $3\cdot845$ and $9\cdot845$. Give the count
   and primitive count in each case, and a constructive description when
   representations exist.

For a return visit, reconstruct the inert-prime obstruction and the reason for
the factor $4$ without consulting your first solution. This is a suggested
self-review activity, not a measured delayed-learning result. The complete key
is at [full key](b-hints.md#sec-nt-two-squares-solutions).

### Specific feedback and a repair route {#sec-nt-two-squares-rubric}

Use the rows to revise your argument; they provide no automatic pass mark.
Equivalent complete arguments are welcome, with the Gaussian allocation
certificate supplying this studio's requested completeness mechanism.

| evidence to show | common error to repair | return to |
|:---|:---|:---|
| State integer, signed/ordered and primitive conventions | Count only positive pairs but label the result $r_2$ | [boundary cases](#sec-nt-two-squares-boundaries) |
| Account separately for $2$, split primes and inert primes | Give $1+i$ and $1-i$ independent exponents, or allow an odd inert exponent | [preparation and algebraic tool](#sec-nt-two-squares-preparation) |
| Prove every possible $z$ has the stated exponents, and verify the converse norm | Present successful products without an exhaustion argument | [factor allocation](#sec-nt-two-squares-allocations) |
| Explain the primitive filter by divisibility of both coordinates | Discard a representation just because its norm contains a square | [sec-primes](03-primes.md#sec-primes) and [full key](b-hints.md#sec-nt-two-squares-solutions) |
| Use the coprime hypothesis and normalize by $4$ | Treat $r_2$ itself as multiplicative, or split $13^2$ into two coprime inputs | [sec-functions](07-functions.md#sec-functions) and [factor allocation](#sec-nt-two-squares-allocations) |

A useful claim ledger labels the Euclidean/UFD and prime-splitting tools,
the proved allocation theorem, and the finite norm checks separately. If a
modular inverse step is unclear, return to [sec-congruence](04-congruence.md#sec-congruence) before using it.
