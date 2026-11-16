
# Notation, Conventions, and Claim Status

## Number systems and domains

- $N$ denotes positive integers unless a local statement explicitly includes zero.
- $\mathbb{Z},Q,R,C$ denote integers, rationals, reals, and complex numbers.
- $\mathbb{F}_{p}$ is the field with $p$ elements when $p$ is prime. $\mathbb{Z}/n\mathbb{Z}$ is a ring and need not be a field.
- $U(n)=(\mathbb{Z}/n\mathbb{Z})^*$ is the unit group modulo $n$.
- All moduli are positive. Canonical residue representatives lie in $\{0,\ldots,n-1\}$ unless symmetric representatives are requested.
- Variables called $p,q$ are not assumed prime unless the sentence states it.

## Divisibility and gcd

$a\mid b$ means an integer $k$ exists with $b=ak$. Every integer divides zero; zero divides only zero. The gcd is positive for inputs not both zero. Some algorithms define $\gcd(0,0)=0$ by convention; theorem statements using the positive universal property exclude that input.

$\operatorname{lcm}(a,b)$ is positive for nonzero inputs. Bezout coefficients are not unique. A displayed pair is a certificate, not a canonical output.

## Congruence and residue classes

$a\equiv b \bmod n$ means $n\mid a-b$. Division in a congruence means multiplication by a unit. Cancellation of $c$ is unconditional only when $\gcd(c,n)=1$; otherwise reduce both coefficient and modulus by their gcd and audit solvability.

$[a]_{n}$ denotes a residue class. Text may omit brackets when the modulus is fixed, but equality of integers and equality of residue classes remain different types.

## Products, sums, and empty cases

Prime products and divisor sums range over positive primes and positive divisors. Empty products equal one and empty sums zero. Arithmetic functions have positive-integer domain. $\varepsilon$ is the convolution identity, while $1$ is the constant-one arithmetic function; these are not interchangeable.

Dirichlet convolution is $f*g$; pointwise multiplication is written by juxtaposition with an explicit argument when ambiguity is possible.

## Valuations and norms

For prime $p$ and nonzero rational $x$, $v_{p}(x)$ is the exponent of $p$; $v_{p}(0)=\infty$ only where an extended convention is explicitly invoked. Infinity is ordered above all integers and is not manipulated by ordinary subtraction without justification.

$N(\alpha)$ may mean an element norm when the field is fixed; for a nonzero integral ideal $I$, $N(I)=\lvert \mathcal{O}_{K}/I\rvert$ is its ideal norm. Element norms can be negative in real fields; ideal norms are positive integers. Field subscripts are supplied when more than one extension is present.

## Asymptotics

Limits are as the displayed real variable tends to positive infinity unless stated otherwise. $O$, $o$, and $\sim$ always include a limiting regime. Hidden constants may depend only on parameters explicitly declared fixed. A theorem for fixed modulus $q$ is not silently uniform in growing $q$.

$\log$ is the natural logarithm. $\left\lfloor x \right\rfloor$ and $\left\lceil x \right\rceil$ have their usual exact meanings; replacing a floor by its argument begins an approximation and creates an error term.

## Complex functions

For $s=\sigma+it$, $\sigma=\operatorname{Re}(s)$. A Dirichlet series formula initially belongs to its stated convergence half-plane. Analytic continuation is an extended function agreeing there; it does not reclassify a divergent series as ordinarily convergent.

Complex logarithms require a branch. For zeta and Dirichlet $L$-functions, the Euler-product logarithm on $\operatorname{Re}(s)>1$ is defined by its absolutely convergent logarithmic series. Real $s>1$ does not make complex-character $L(s,\chi)$ real. For a nonprincipal character, a bounded compatible branch near $s=1$ also uses continuity or an Abel limit and the nonzero value $L(1,\chi)$; state the nonvanishing theorem as proved or imported. Other Euler products retain their own convergence half-planes and zero-free branch hypotheses.

## Algebraic number theory

$K$ is a number field and $\mathcal{O}_{K}$ its full ring of algebraic integers. An order such as $\mathbb{Z}[\alpha]$ is not presumed maximal. Ideals use parentheses $(\alpha)$ for principal ideals and $(\alpha,\beta)$ for generated ideals. Fraktur typography is avoided in plain source; names such as $p_{1}$ are identified as ideals in prose.

Prime ideal exponents are $e_{i}$, residue degrees $f_{i}$, and the general equality is $\sum e_{i} f_{i}=[K:\mathbb{Q}]$. Simplified formulas with common $e,f$ require a Galois or other uniformity hypothesis.

## Elliptic curves

Short Weierstrass form $y^{2}=x^{3}+Ax+B$ assumes characteristic not two or three and nonzero discriminant. $O$ denotes the point at infinity, not the number zero. $[n]P$ is scalar multiplication. Over finite fields, coordinate division is modular inversion; a zero denominator triggers an exceptional geometric case rather than an ordinary quotient.

$\#E(\mathbb{F}_{q})$ is the number of affine points plus $O$. Algebraic rank, analytic rank, torsion order, and finite-field group order are separate quantities.

## Claim labels

- **Definition:** fixes terminology.
- **Theorem/lemma/proposition:** proved under the displayed hypotheses.
- **Proof architecture:** records decisive lemmas and dependencies but may defer a deep ingredient to a specialist treatment.
- **Derivation:** exact transformation within a declared domain.
- **Computation:** finite exact or numerically certified result.
- **Heuristic:** search guidance, not proof.
- **Probable-prime evidence:** a passed one-sided test, not a primality theorem.
- **Certificate:** finite data checked by an independently specified verifier.
- **Conditional security claim:** implication based on a named assumption and adversarial game.
- **Conjecture/open question:** unproved in the scope stated.

## Status ledger for durable reading

When using a result, record:

1. object domains and nonzero/coprime conditions;
2. whether the conclusion is local, global, asymptotic, probabilistic, or conditional;
3. whether evidence is a proof, named external theorem, computation, or heuristic;
4. the date/source needed if the statement concerns a current record or open status;
5. the nearby counterexample when one hypothesis is removed.

The drafting manuscript uses plain text mathematics for portability. Final production may render richer notation, but the semantic distinctions in this guide must survive every format and accessibility mode.
