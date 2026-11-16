# Algebra and congruence toolkit

This appendix collects background facts used throughout the book. It is a review,
not a substitute for a first course in proofs or algebra.

## Euclid and Bézout

For integers $a,b$, not both zero, the greatest common divisor is the least
positive integer of the form $ax+by$. The Euclidean algorithm repeatedly uses

$$
\gcd(a,b)=\gcd(b,a-qb)
$$

until the second entry is zero. Reversing the divisions expresses
$\gcd(a,b)$ as $ax+by$. In particular, $a$ has a multiplicative inverse modulo
$m$ exactly when $\gcd(a,m)=1$: a Bézout identity $ax+my=1$ gives
$ax\equiv1\pmod m$.

For $p$ prime, an integer is a unit modulo $p^N$ exactly when it is not divisible
by $p$. This is why derivatives that are nonzero modulo $p$ may be inverted at
every precision in Hensel lifting.

## Congruence arithmetic

The relation $a\equiv b\pmod m$ means $m\mid(a-b)$. It is compatible with
addition and multiplication. Division is allowed only by a unit: from
$ac\equiv bc\pmod m$, one may cancel $c$ when $\gcd(c,m)=1$. Cancelling a factor
of $p$ changes the modulus:

$$
pa\equiv pb\pmod {p^N}
\quad\Longleftrightarrow\quad
a\equiv b\pmod {p^{N-1}}.
$$

This precision loss is the finite counterpart of multiplying by $p^{-1}$ in
$\mathbb Q_p$.

### Chinese remainder theorem

If $m$ and $n$ are coprime, then

$$
\mathbb Z/mn\mathbb Z
\cong \mathbb Z/m\mathbb Z\times\mathbb Z/n\mathbb Z.
$$

Given residues $a\pmod m$ and $b\pmod n$, choose $r,s$ with $rm+sn=1$.
Then

$$
x=a(sn)+b(rm)
$$

has the required residues and is unique modulo $mn$. Iterating separates a
modulus into prime-power components. Local *p*-adic analysis then deepens one
prime-power component through all exponents rather than combining finitely many
different primes.

## Rings, ideals, and local rings

A commutative ring $R$ has a multiplicative identity. An **ideal** $I$ is an
additive subgroup closed under multiplication by arbitrary elements of $R$. The
quotient $R/I$ identifies elements differing by $I$. A maximal ideal is a proper
ideal whose quotient is a field.

A **local ring** has one maximal ideal. In $\mathbb Z_p$, every element outside
$p\mathbb Z_p$ has nonzero first digit and is invertible, while every element in
$p\mathbb Z_p$ is a nonunit. Thus $p\mathbb Z_p$ is the unique maximal ideal and
the residue field is $\mathbb F_p$.

A **discrete valuation ring** is a domain in which every nonzero element has
form $u\pi^n$ for a unit $u$ and integer $n\ge0$. Its nonzero ideals are exactly
$(\pi^n)$. The ring $\mathbb Z_p$ is a complete discrete valuation ring with
uniformizer $p$.

## Inverse limits

An inverse system consists of objects $A_N$ and compatible maps
$A_{N+1}\to A_N$. Its inverse limit is the set of threads

$$
(a_1,a_2,\ldots),\qquad a_{N+1}\mapsto a_N.
$$

Operations are performed componentwise when the $A_N$ are rings. For
$A_N=\mathbb Z/p^N\mathbb Z$, the bonding maps are reduction. Compatibility is
exactly preservation of earlier digits, and the inverse limit is
$\mathbb Z_p$.

The order of arrows matters. A direct limit combines objects under forward
inclusions; an inverse limit records all finite quotients simultaneously. The
prefix tree intuition belongs to the inverse limit.

## Metric completion

A metric space is **complete** if every Cauchy sequence converges. To complete a
metric space $X$, take Cauchy sequences and identify pairs whose termwise
distance tends to zero. Map $x\in X$ to the constant sequence. The image is
dense because each Cauchy sequence is approximated by its own terms.

For a field with an absolute value, termwise operations descend to the completion
because Cauchy sequences are bounded. The completion is unique up to a unique
isometry fixing the dense original field. Applying this to $\mathbb Q$ with
$|\cdot|_\infty$ gives $\mathbb R$; applying it with $|\cdot|_p$ gives
$\mathbb Q_p$.

## Compactness facts used here

In metric spaces, the following are equivalent:

1. every open cover has a finite subcover;
2. every sequence has a convergent subsequence; and
3. the space is complete and totally bounded.

Total boundedness means that for every radius there is a finite cover by balls
of that radius. The residue partition of $\mathbb Z_p$ gives exactly such a
cover. Compact metric spaces are bounded and every continuous real-valued
function on them is uniformly continuous.

## Polynomial Taylor congruence

For $f\in\mathbb Z_p[x]$ and $h\in\mathbb Z_p$,

$$
f(a+h)=f(a)+h f'(a)+h^2g(a,h)
$$

for some polynomial $g$ with coefficients in $\mathbb Z_p$. If $h$ is divisible
by $p^N$, the final term is divisible by $p^{2N}$. This exact algebraic identity,
not an appeal to infinitesimals, drives both Hensel lifting and local derivative
tests.
