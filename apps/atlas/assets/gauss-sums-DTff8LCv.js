var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: gauss-sums
title: "Gauss Sums"
level: advanced-undergraduate
estimated_minutes: 210
status: draft
license: CC BY-SA 4.0
---

# Gauss Sums

A quadratic character records whether a nonzero residue is a square. A Gauss sum packages all those signs into one algebraic quantity. Its square is an ordinary integer, yet raising it to another prime power reads off a different quadratic character. Comparing these two calculations gives a second proof of quadratic reciprocity.

The preparation is congruences, Euler's criterion, the Legendre symbol and polynomial arithmetic. No convergence argument, complex integration or prior cyclotomic-field theorem enters this proof. We construct the exact quotient ring we need and prove its elementary properties. The earlier reciprocity chapter gives a lattice-count proof; the argument here explains why the same sign appears in a seemingly unrelated calculation with roots of unity.

## 1. Character identities to carry into the sum

Fix an odd prime $p$. Write $\\chi(a)=(a/p)$, extended by $\\chi(0)=0$. Thus its values are integers in $\\{0,1,-1\\}$, depending only on the residue class. Multiplicativity includes zero inputs, and for a nonzero residue Euler's criterion says $\\chi(a)\\equiv a^{(p-1)/2}\\pmod p$. The supplementary law is $\\chi(-1)=(-1)^{(p-1)/2}$.

Exactly half the nonzero residues are squares. Indeed, the squaring map identifies precisely the pair $a,-a$: if two nonzero squares agree, their difference factors and the field property gives these two possibilities. Its image therefore has $(p-1)/2$ elements. In particular a nonsquare exists. Multiplication by a fixed nonsquare permutes the residues and reverses the nonzero character signs. Consequently

$$\\sum_{a\\bmod p}\\chi(a)=0.$$

This is an equality of ordinary integers. Whenever we reorder a sum below, the index set is a finite residue system; there is no issue of convergence. We keep the zero value in the notation because it allows substitutions over the entire field without repeatedly removing exceptional terms. When division by an index is used, however, that index will first be restricted to a nonzero residue.

## 2. An exact ring for a primitive root

Let $\\Phi_p(X)=1+X+\\cdots+X^{p-1}$ and form

$$A_p=\\mathbb Z[X]/(\\Phi_p(X)),\\qquad z=[X].$$

Division by the monic polynomial gives every element a unique representative of degree at most $p-2$ with integer coefficients. To see uniqueness, a nonzero multiple of a monic polynomial of degree $p-1$ has degree at least $p-1$: its leading coefficient is the nonzero leading coefficient of the other factor. Existence follows by successively subtracting the leading term times an appropriate power of $\\Phi_p$. In particular the ordinary integers inject into this ring.

The equation $(X-1)\\Phi_p(X)=X^p-1$ gives $z^p=1$, so $z$ is a unit with inverse $z^{p-1}$. Also $1+z+\\cdots+z^{p-1}=0$. For a nonzero residue $c$ modulo $p$, multiplication by $c$ permutes the residues; hence

$$\\sum_{b=1}^{p-1}z^{bc}=-1.$$

For $c=0$ the same sum equals $p-1$. These are the root-of-unity orthogonality identities needed in the proof. They follow from the displayed relations without proving irreducibility of $\\Phi_p$ or constructing a field.

For another prime $q$, reduction modulo $q$ has the same monic division property. More explicitly $A_p/qA_p$ has the basis $1,z,\\ldots,z^{p-2}$ over $\\mathbb F_q$. Therefore an ordinary integer is zero in that quotient exactly when it is divisible by $q$. This last fact will allow a congruence first proved in a larger ring to become an ordinary congruence between two signs. Merely saying that a ring has characteristic $q$ would not suffice unless its copy of the prime field were known to be nonzero.

One may send $z$ to the complex number $\\exp(2\\pi i/p)$ and visualize the formulas on a regular polygon. The proof does not depend on that picture. In particular we will never choose a complex square root to decide the sign of a Gauss sum.

## 3. Transforming the argument of a Gauss sum

Define

$$T=\\sum_{a\\bmod p}\\chi(a)z^a,\\qquad
T(c)=\\sum_{a\\bmod p}\\chi(a)z^{ca}.$$

If $c$ is nonzero modulo $p$, substitute $b=ca$. Then $a=c^{-1}b$ and multiplicativity gives $\\chi(a)=\\chi(c)\\chi(b)$, since the sign $\\chi(c^{-1})$ equals $\\chi(c)$. Thus

$$T(c)=\\chi(c)T\\quad(c\\ne0),\\qquad T(0)=0.$$

The same statement holds for every integer representative of $c$. In particular replacing $z$ by its inverse gives $T(-1)=\\chi(-1)T$. This substitution is an involution of $A_p$: it preserves the defining relation because it simply reverses the nonconstant powers of $z$. We denote the result on $T$ by $\\overline T$, without requiring a complex interpretation.

The transformation law separates two roles that are easy to confuse. The exponent $ca$ reindexes the root powers, while the coefficient $\\chi(c)$ records whether that reindexing is a square or a nonsquare multiplier. The sum itself is not a multiplicative character of $c$ at zero; its transformation formula has a separate zero branch. That distinction will also matter when we divide by $T$ after reducing modulo another prime.

## 4. The square calculation

We first prove $T\\overline T=p$. Terms with either index zero vanish. For the second index $b\\ne0$, write the first as $a=bc$. Then

$$T\\overline T
=\\sum_{c\\bmod p}\\chi(c)\\sum_{b=1}^{p-1}z^{b(c-1)}.$$

Indeed $\\chi(bc)\\chi(b)=\\chi(c)$ because $\\chi(b)^2=1$. The inner sum is $p-1$ when $c=1$ and $-1$ otherwise. Since $\\chi(1)=1$ and the total character sum is zero, this becomes

$$(p-1)-\\sum_{c\\ne1}\\chi(c)=(p-1)-(-1)=p.$$

Using $\\overline T=\\chi(-1)T$ and multiplying by the sign $\\chi(-1)$ now proves the central identity

$$T^2=\\chi(-1)p=(-1)^{(p-1)/2}p.$$

Every equality holds in $A_p$. We did not infer that this ring is a field or cancel a possibly noninvertible element. The identity supplies exactly the inverse we will need after reduction modulo a different prime. If $q\\ne p$, the integer $p$ is invertible modulo $q$, so the image of $T$ is invertible in $A_p/qA_p$: its inverse is $T/(\\chi(-1)p)$, with the denominator interpreted as the inverse of a nonzero scalar in $\\mathbb F_q$.

### Worked example 1: the smallest odd prime

For $p=3$ the character values are $0,1,-1$ and $T=z-z^2$. Using $z^3=1$ and $z+z^2=-1$ gives

$$(z-z^2)^2=z^2-2+z=-3.$$

The negative sign matches $\\chi_3(-1)=-1$. This is a direct multiplication certificate. It does not require identifying $z-z^2$ with either choice of a square root of minus three. Modulo any odd prime different from three, this element is a unit because its square is a nonzero scalar.

### Worked example 2: a positive square without a chosen sign

For $p=5$ the squares are $1,4$, so $T=z-z^2-z^3+z^4$. The theorem gives $T^2=5$. Under the complex picture it is a real quantity because replacing $z$ by $z^{-1}$ leaves the sum unchanged. Neither observation by itself says it is the positive square root of five. Reciprocity below uses only its square and therefore has no dependence on a positive-square-root evaluation theorem.

## 5. Frobenius supplies the second calculation

Let $q$ be an odd prime distinct from $p$, and work in $B=A_p/qA_p$. In any commutative ring of characteristic $q$, the binomial theorem gives $(u+v)^q=u^q+v^q$: each intermediate binomial coefficient is divisible by $q$. Iterating this identity over a finite sum and using $\\chi(a)^q=\\chi(a)$ yields

$$T^q=\\sum_a\\chi(a)z^{aq}=T(q)=\\chi_p(q)T\\quad\\text{in }B.$$

The transformation law applies because $q$ is nonzero modulo $p$. The inverse established above permits cancellation of $T$, giving

$$T^{q-1}=\\chi_p(q)\\quad\\text{in }B.$$

On the other hand the square identity, now raised to the ordinary integer power $(q-1)/2$, gives

$$T^{q-1}=\\bigl(\\chi_p(-1)p\\bigr)^{(q-1)/2}.$$

The right side is an ordinary integer. Euler's criterion modulo $q$ therefore gives

$$\\chi_p(q)\\equiv
(-1)^{((p-1)/2)((q-1)/2)}\\chi_q(p)\\pmod q.$$

Both sides are signs. Since $q$ is odd, the difference of distinct signs, namely two or minus two, cannot be divisible by $q$. The congruence is an equality of ordinary integers. Multiplying by $\\chi_q(p)$ proves

$$\\boxed{\\left(\\frac qp\\right)\\left(\\frac pq\\right)
=(-1)^{(p-1)(q-1)/4}.}$$

This proves quadratic reciprocity. The field used for Euler's criterion is $\\mathbb F_q$; the Frobenius calculation takes place in the larger commutative quotient ring $B$, which need not be a field. Keeping those settings distinct avoids importing an unnecessary irreducibility assertion. Excluding $p=q$ is essential twice: the transformation law would receive zero, and $T^2$ would become zero rather than a unit modulo $q$.

### Worked example 3: reciprocity with both primes three modulo four

Take $p=7$ and $q=11$. The Gauss square is $T_7^2=-7$. In characteristic eleven its fifth power is $T_7^{10}=(-7)^5$. Euler's criterion interprets this scalar as $(-1/11)(7/11)=-(7/11)$. Frobenius interprets the same power as $(11/7)=(4/7)=1$. Hence $(7/11)=-1$. Listing the nonzero squares modulo eleven, $1,3,4,5,9$, independently confirms the conclusion. The list is a finite certificate for this example; the ring argument proves the relation for every distinct pair of odd primes.

## 6. What the package reveals beyond reciprocity

The quadratic polynomial sum $G(c)=\\sum_{x\\bmod p}z^{cx^2}$ has a simple expression. A residue $a$ has $1+\\chi(a)$ square roots, including the single root of zero. Therefore for $c\\ne0$,

$$G(c)=\\sum_a(1+\\chi(a))z^{ca}=\\chi(c)T,$$

because the full geometric sum vanishes. At $c=0$, however, $G(0)=p$. A quadratic exponential sum over the entire field is thus converted into one character sign times a fixed algebraic quantity. In the complex interpretation its absolute value is $\\sqrt p$, by $T\\overline T=p$; the apparent cancellation among $p$ unit-length terms has an exact algebraic explanation.

A linear perturbation can be completed to a square. For $c\\ne0$ and $d\\bmod p$, put $h=d/(2c)$ in the field. Translation permutes the indices, giving

$$\\sum_x z^{cx^2+dx}=z^{-d^2/(4c)}\\chi(c)T.$$

Here divisions mean inverses modulo $p$, not rational exponents in the ring. This formula requires odd characteristic because two must be invertible. It includes a phase factor that disappears when one computes only an absolute value. Losing that factor would preserve a magnitude statement while giving an incorrect exact sum.

For example, at $p=5$ and $(c,d)=(1,2)$, the exponent is $(x+1)^2-1$. The sum equals $z^{-1}T=z^4T$. The result follows by changing the five indices, rather than by numerically approximating five complex exponentials. This is a fourth worked construction and illustrates how a proof can supply exact coordinates in the basis of $A_p$.

## 7. Recovering a finite function from its transform

The transformation formula can be understood as a finite change of coordinates for functions on the residue field. This gives a useful application of the Gauss identity and clarifies why losing the coefficient at zero changes a counting answer. We use rational coefficients temporarily so that division by the integer $p$ is legal. Specifically, let $A_{p,\\mathbb Q}=\\mathbb Q[X]/(\\Phi_p(X))$. The same monic division proof identifies its copy of the rational numbers and its basis of root powers. No analytic completion is involved.

For a rational-valued function $f$ on the residues, define its transform at a residue $c$ by

$$\\widehat f(c)=\\sum_{a\\bmod p}f(a)z^{ca}.$$

These values lie in $A_{p,\\mathbb Q}$. We can also transform functions already valued in this ring, using exactly the same finite expression. Root orthogonality proves the inversion formula

$$f(b)=\\frac1p\\sum_{c\\bmod p}\\widehat f(c)z^{-cb}.$$

To verify it, substitute the definition and interchange the two finite sums. The coefficient of $f(a)$ becomes $p^{-1}\\sum_c z^{c(a-b)}$. When $a=b$, this is one; when the residues differ, orthogonality makes it zero. Thus only the desired value survives. This proves that no information has been lost. The division by $p$ takes place in the explicitly chosen rational-coefficient ring, rather than being silently applied inside the original integral ring or in characteristic $p$.

For functions $f,g$, define their additive convolution by

$$(f*g)(t)=\\sum_{a\\bmod p}f(a)g(t-a).$$

Then $\\widehat{f*g}(c)=\\widehat f(c)\\widehat g(c)$. Indeed, in the transform of the left side put $b=t-a$; the exponent $ct$ becomes $ca+cb$, and the two independent sums factor. This is a different convolution from Dirichlet convolution of arithmetic functions: its index set is a finite additive group, its decomposition is $t=a+b$, and no divisor sum occurs. Naming the group prevents a familiar word from supplying the wrong formula.

Apply the result to $f=g=\\chi$. At zero its transform is zero; at a nonzero frequency it is $\\chi(c)T$. Therefore the transform of $\\chi*\\chi$ is zero at zero and $T^2=\\varepsilon p$ elsewhere, where $\\varepsilon=\\chi(-1)$. Inverting gives

$$(\\chi*\\chi)(t)=
\\begin{cases}
\\varepsilon(p-1),&t=0,\\\\
-\\varepsilon,&t\\ne0.
\\end{cases}$$

At $t=0$ all nonzero root powers in the inversion are one, while at a nonzero $t$ their sum is minus one. Although the calculation was carried out in a ring with rational coefficients, both sides of this final equality are ordinary integers, and their equality follows from the embedding of the rational constants. The result is a precise signed count of how the quadratic character interacts with addition.

For a concrete fifth worked calculation, take $p=5$ and $t=1$. Only indices $a=2,3,4$ contribute: their products $\\chi(a)\\chi(1-a)$ are minus one, plus one and minus one respectively. The sum is minus one, agreeing with $\\varepsilon=1$. At $t=0$, each of the four nonzero indices contributes one and the sum is four. The exceptional value at zero is not a small correction that may be dropped: it is required for the total sum over $t$ to vanish, because the total character sum vanishes.

This method also proves a reconstruction statement. Knowing every transformed value determines every original function value by the displayed finite formula. In the quadratic case the entire transform is controlled by one number $T$ and the original character signs. The square identity then turns a convolution of character values into an explicit two-case integer function. This is the elementary algebraic source of the efficiency of finite harmonic analysis in counting problems, while making no claim about numerical implementation, floating-point stability or the cost of computing the transforms.

The coefficient setting remains part of the theorem. In characteristic $p$ the scalar $p$ cannot be inverted, so the same inversion proof fails. In characteristic $q\\ne p$ it is legal after choosing the corresponding root ring, although additional coincidences among function values may occur after reduction. Over the integral ring the transform still exists and the convolution identity still holds, but the inverse formula is initially an equality after allowing the rational denominator. Each of these statements identifies the exact operation that its domain permits.

## 8. Boundaries and proof dependencies

The proof does not evaluate the sign of $T$ when its square is positive. It does not claim an analogous unit after reducing modulo $p$ itself. It proves the quadratic transformation law; sums built from a character of higher order need different coefficients and a different product identity. A general composite modulus also has nonunits, so the substitutions and inverse arguments would have to be re-established rather than copied.

The dependency ledger is short: finite-field quadratic characters and Euler's criterion from the preceding chapters; monic polynomial division proved here; the binomial theorem in prime characteristic; and exact finite reindexing. In particular quadratic reciprocity is not used to evaluate the Gauss square. The value of the sign at minus one follows from Euler's criterion directly. This makes the present argument an independent second proof, rather than a reformulation whose hidden input already contains the desired theorem.

## Exercises

### ENT09-01. A character sum with a missing zero

For nonzero $c\\bmod p$, evaluate $\\sum_a\\chi(ca)$ and explain why the substitution is legal.

**Hint 1.** Multiplication by $c$ is a bijection of the field.

**Hint 2.** Alternatively factor out $\\chi(c)$ and use the equal numbers of squares and nonsquares.

<details><summary>Full solution</summary>

The substitution $b=ca$ permutes all $p$ residues, including zero, so the sum is $\\sum_b\\chi(b)=0$. Multiplicativity gives the same result as $\\chi(c)\\sum_a\\chi(a)$. No division by zero occurs because only the fixed multiplier $c$ is inverted. At $c=0$ the sum is also zero, but that conclusion comes from every term being $\\chi(0)$ rather than from the bijection argument.

</details>

### ENT09-02. Exact orthogonality

Prove $\\sum_{b=0}^{p-1}z^{bc}=0$ for $c\\ne0\\bmod p$, and give its value when $c=0$.

**Hint 1.** Reduce exponents modulo $p$ using $z^p=1$.

**Hint 2.** The nonzero multiplier permutes a complete residue system.

<details><summary>Full solution</summary>

For nonzero $c$, the exponents $bc\\bmod p$ run through all residues. Their powers sum to $\\Phi_p(z)=0$. If $c=0$, each of the $p$ terms is one, so the value is $p$. This argument uses finite permutation; cancelling $z^c-1$ in a geometric-series identity would require an invertibility claim that has not been supplied.

</details>

### ENT09-03. The conjugation identity

Prove $\\overline T=\\chi(-1)T$ by writing out the reindexing.

**Hint 1.** Replace $a$ by $-b$ in $\\sum_a\\chi(a)z^{-a}$.

**Hint 2.** Use $\\chi(-b)=\\chi(-1)\\chi(b)$ also at zero.

<details><summary>Full solution</summary>

Negation is a permutation of the field. Thus the sum becomes $\\sum_b\\chi(-b)z^b=\\chi(-1)\\sum_b\\chi(b)z^b$. The zero coefficient is zero on both sides. It follows that the involution fixes $T$ when $p\\equiv1\\pmod4$ and negates it when $p\\equiv3\\pmod4$. These are exact identities before taking a complex interpretation.

</details>

### ENT09-04. A legal inverse

For $q\\ne p$, exhibit the inverse of $T$ in $A_p/qA_p$. Explain what fails at $q=p$.

**Hint 1.** Its square is the scalar $\\varepsilon p$, with $\\varepsilon=\\chi(-1)$.

**Hint 2.** A nonzero scalar in the prime field has an inverse.

<details><summary>Full solution</summary>

Choose an integer $u$ with $u\\varepsilon p\\equiv1\\pmod q$. Then $(uT)T=uT^2=u\\varepsilon p=1$ in the quotient, so $uT$ is the inverse. At $q=p$ the same square is zero. The quotient ring is nonzero by its monic basis; a square-zero element in a nonzero ring cannot be a unit, since multiplying its square by the square of an inverse would give $0=1$.

</details>

### ENT09-05. Why scalar congruences descend

Show that if an integer $m$ lies in $qA_p$, then $q\\mid m$ in $\\mathbb Z$.

**Hint 1.** Express an element of $A_p$ in its unique monic-remainder basis.

**Hint 2.** Compare the coefficient of $1$ in $m=q\\alpha$.

<details><summary>Full solution</summary>

Write $\\alpha=\\sum_{j=0}^{p-2}a_jz^j$. Uniqueness of the representative gives $m=qa_0$ and $qa_j=0$ as integers for every positive $j$. In particular $q$ divides $m$. The argument is about an integral basis of this quotient, not an assertion that every characteristic-$q$ quotient of every ring detects integer divisibility.

</details>

### ENT09-06. Reconstruct the square

In the calculation of $T\\overline T$, explain the contributions of $c=0$ and $c=1$, and evaluate the sum over all remaining $c$.

**Hint 1.** The coefficient $\\chi(0)$ kills the first exceptional term.

**Hint 2.** The remaining character sum is minus $\\chi(1)$.

<details><summary>Full solution</summary>

At zero the coefficient vanishes. At one the contribution is $p-1$. For every other $c$ the inner root sum is minus one, so these terms contribute $-\\sum_{c\\ne0,1}\\chi(c)$. Since the full character sum is zero and the omitted coefficients are zero and one, this is $-(-1)=1$. The total is $p$, proving the norm identity with both exceptional indices accounted for.

</details>

### ENT09-07. A sign that disappears

Use the Gauss-sum comparison to show $(5/13)=(13/5)$ and determine both values.

**Hint 1.** At least one prime is one modulo four, so the reciprocity sign is positive.

**Hint 2.** Reduce thirteen modulo five and list the nonzero squares there.

<details><summary>Full solution</summary>

The exponent $(4\\cdot12)/4$ is even, so the product of the two symbols is one. The residue of thirteen modulo five is three; the nonzero squares modulo five are one and four, giving $(13/5)=-1$. Hence $(5/13)=-1$ also. This deduction uses the reciprocity proof of this chapter; listing squares modulo thirteen would independently verify the small example but would not prove the general rule.

</details>

### ENT09-08. The equal-prime error

Identify the two invalid steps if one substitutes $q=p$ in the reciprocity proof.

**Hint 1.** The multiplier in $T(q)$ is then zero modulo $p$.

**Hint 2.** The square of $T$ reduces to zero modulo the same prime.

<details><summary>Full solution</summary>

The nonzero transformation law $T(q)=\\chi_p(q)T$ is no longer the unit-multiplier branch: the sum is $T(0)=0$. More decisively, $T$ cannot be cancelled because $T^2=0$ in the nonzero quotient. Euler's criterion for $p\\bmod p$ would also lie outside its nonzero domain. The equal-prime case has Legendre symbol zero and is not an instance of the distinct-prime reciprocity statement.

</details>

### ENT09-09. Count the quadratic fibers

Prove that the number of $x\\bmod p$ satisfying $x^2=a$ equals $1+\\chi(a)$ for every residue $a$.

**Hint 1.** Treat zero separately.

**Hint 2.** Two nonzero roots differ only by sign because a difference of squares factors.

<details><summary>Full solution</summary>

At zero the sole root is zero, giving one. A nonsquare has no roots by definition, giving zero. For a nonzero square choose one root $x$; both $x$ and $-x$ are distinct because $p$ is odd. Any other root $y$ satisfies $(y-x)(y+x)=0$ in the field, hence equals one of these. There are exactly two roots, as required. Summing by these fibers gives the formula for $G(c)$.

</details>

### ENT09-10. Complete the square exactly

For $c\\ne0$, derive the formula for $\\sum_xz^{cx^2+dx}$ and explain the meaning of the inverse of $4c$.

**Hint 1.** Expand $c(x+d/(2c))^2$ in $\\mathbb F_p$.

**Hint 2.** Translation preserves the finite index set.

<details><summary>Full solution</summary>

The exponent is $c(x+d/(2c))^2-d^2/(4c)$ modulo $p$. Write the inverse of $4c$ as any integer representative of its field inverse; changing that representative changes the exponent by a multiple of $p$ and leaves the power of $z$ fixed. Translate $x$ by $d/(2c)$ and factor out the constant power. The remaining quadratic sum is $\\chi(c)T$. Thus no rational power of $z$ has been introduced.

</details>

### ENT09-11. An autocorrelation identity

For nonzero $t\\bmod p$, prove $\\sum_b\\chi(b+t)\\chi(b)=-1$.

**Hint 1.** Terms at $b=0$ vanish; for other $b$ write the product as $\\chi(1+t/b)$.

**Hint 2.** As $b$ runs through nonzero residues, $1+t/b$ runs through all residues except one.

<details><summary>Full solution</summary>

Multiplicativity and $\\chi(b)^2=1$ give $\\chi(b+t)\\chi(b)=\\chi(1+t/b)$ for $b\\ne0$. Inversion, multiplication by $t$ and translation are bijections with image the field minus one. Hence the sum is $\\sum_{u\\ne1}\\chi(u)=-\\chi(1)=-1$. The zero term originally discarded contributes nothing. At $t=0$ the value instead is $p-1$, so the nonzero hypothesis is necessary.

</details>

### ENT09-12. Audit a complex shortcut

A proposed proof says: “$T^2=p$, therefore $T=\\sqrt p$; reduce that equality modulo $q$ and raise it to the $q$th power.” Repair the proof without choosing a square root.

**Hint 1.** The square identity has an additional sign when $p$ is three modulo four.

**Hint 2.** Frobenius acts on the finite polynomial expression in the quotient ring.

<details><summary>Full solution</summary>

Use $T^2=\\chi_p(-1)p$ in $A_p$ without choosing a complex value. Reduce the polynomial expression for $T$ modulo a distinct odd prime $q$, where it is invertible. Frobenius and the nonzero transformation law give $T^{q-1}=\\chi_p(q)$. The square identity gives the same power as $(\\chi_p(-1)p)^{(q-1)/2}$. Euler's criterion compares these scalar integers, and the monic basis ensures the resulting congruence descends to $\\mathbb Z/q\\mathbb Z$. The real-positive square-root inference is unnecessary and would be unjustified even when the square is positive.

</details>

## Closing summary

The quadratic character is converted into one algebraic element with an exact integer square. Frobenius reads another Legendre symbol from the same element, and its explicitly proved inverse permits comparison. The reciprocity sign comes from the square at minus one. Every calculation is finite, all cancellations have a supplied inverse, and neither a complex sign evaluation nor a convergence theorem is hidden in the proof.
`;export{e as default};