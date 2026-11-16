var e=`---
parent_id: book-finite-algebra-computation
chapter_id: finite-fields-construction-arithmetic
title: "Finite Fields: Construction and Arithmetic"
level: graduate
status: draft
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Finite Fields: Construction and Arithmetic

## Exact field construction before advanced operations

**Definition 2.1 (Quotient representation).** Let k be a field with q elements and f∈k[x] monic of degree d≥1. Represent a residue class modulo f by its unique coefficient vector (a₀,…,a_(d−1)), corresponding to a polynomial of degree below d. Zero has all coefficients zero. Coefficient lists of different lengths are padded or normalised according to this one fixed dimension; their entries belong to the already specified base field.

The representation records both the base-field operations and the modulus. Two coefficient vectors interpreted with different moduli are not automatically the same field element, even if the resulting fields are abstractly isomorphic. An isomorphism must specify where the class of x is sent and preserve the defining equation.

**Theorem 2.2 (When the quotient is a field).** The quotient k[x]/(f) is a field exactly when f is irreducible. In that case it has q^d elements and every nonzero residue has an inverse obtained by extended Euclid.

*Proof.* Monic division gives exactly one representative of degree below d, so the quotient has q^d elements. If f is irreducible and a represents a nonzero class, f does not divide a. Thus gcd(a,f)=1 and Euclid gives ua+vf=1. Reducing makes the class of u an inverse of a. Conversely, if f=gh with both factors of positive degree below d, their nonzero classes have product zero. A field has no nonzero zero divisors, so the quotient cannot be a field. ∎

Irreducibility can be established by the [Frobenius and gcd certificate](/books/library-book-galois-theory/finite-fields-galois-groups/). The argument uses polynomial arithmetic in a quotient ring before the quotient is known to be a field. Treating division by every nonzero residue as an available operation during that certificate would assume the desired conclusion.

## Multiplication and inversion contracts

To multiply representatives, first convolve their coefficient lists in k, then divide the resulting polynomial by the fixed monic f and retain its remainder. A zero coefficient must be the zero of k, not an uninitialised array slot. A general k can itself be an extension field; its coefficient operations are supplied by that field's own exact representation.

**Proposition 2.3 (Arithmetic correctness and finite cost).** Convolution followed by monic reduction computes quotient multiplication. Classical multiplication of degree-below-d representatives and their reduction uses O(d²) base-field operations; addition uses O(d).

*Proof.* The coefficient of x^r in a product is the finite sum of aᵢbⱼ over i+j=r, which is exactly convolution. Division replaces that polynomial by a congruent one of degree below d, so the class is unchanged. Uniqueness of the remainder gives the canonical output. There are at most d² coefficient products. The product has degree at most 2d−2, so at most d−1 leading-term cancellations are needed, each touching at most d+1 coefficients. This gives the stated bound; the d coordinate additions give the additive bound. ∎

For inversion, carry the Bézout coefficients through the polynomial Euclidean algorithm. Every nonzero remainder degree strictly decreases, so only finitely many divisions occur. If the final monic gcd is one, its a-coefficient is the inverse modulo f. A different gcd is evidence that the particular residue is not invertible in the quotient, and must not be converted into a fabricated inverse. In a genuinely irreducible field modulus this can happen only for the zero class.

**Worked example 2.4 (Four elements by hand).** Over F₂ take f=x²+x+1 and write α=x mod f. Then α²=α+1. Multiplication gives α(α+1)=α²+α=1. Hence α⁻¹=α+1 and (α+1)⁻¹=α. Also (α+1)²=α²+1=α. The complete nonzero multiplicative cycle is 1,α,α+1,1. These are exact polynomial reductions, not floating-point approximations.

**Worked example 2.5 (A small inert implementation).** Encode a₀+a₁α as the integer a₀+2a₁, with both bits in F₂. The following reference functions implement precisely the preceding quotient equations. They are a program example for study; no execution is asserted here.

\`\`\`python
def mul4(a, b):
    if type(a) is not int or type(b) is not int:
        raise ValueError("field encodings must be integers")
    if not 0 <= a < 4 or not 0 <= b < 4:
        raise ValueError("field encodings must be in 0..3")
    a0, a1 = a & 1, (a >> 1) & 1
    b0, b1 = b & 1, (b >> 1) & 1
    c0 = (a0 * b0 + a1 * b1) & 1
    c1 = (a0 * b1 + a1 * b0 + a1 * b1) & 1
    return c0 + 2 * c1


def inverse4(a):
    if type(a) is not int or not 0 <= a < 4:
        raise ValueError("field encoding must be an integer in 0..3")
    if a == 0:
        raise ZeroDivisionError("zero has no field inverse")
    return mul4(a, a)
\`\`\`

The coefficient formulas follow by expanding (a₀+a₁α)(b₀+b₁α) and replacing α² by α+1. In particular inputs 2 and 3 represent α and α+1; the formulas give c₀=1,c₁=0, matching the hand product one. Inputs 2 and 2 give c₀=c₁=1, encoding α²=α+1. For inverse4, each nonzero element has cube one because its multiplicative group has order three, so its square is its inverse. The special zero branch is mathematically necessary.

Bitwise XOR implements addition in this encoding, but ordinary integer addition does not: encoded α plus itself is zero in the field, while 2+2 is four and is not even a valid field encoding. Likewise ordinary integer multiplication followed by reduction modulo four would describe a different ring with zero divisors. An integer encoding is a storage convention, not permission to substitute integer arithmetic for field arithmetic.

**Worked example 2.6 (An invalid modulus).** Over F₂ the polynomial x²+1 equals (x+1)². In its quotient, the nonzero class a=x+1 has a²=0. If a had an inverse, multiplying a²=0 by that inverse would imply a=0, contradiction. The residue list still has four members, but this four-element ring is not the four-element field. A correct element count is insufficient to establish the field hypothesis.

The following preserved developments treat primitive elements, trace, norm and transforms after this construction. Their structural existence and embedding statements are proved in Galois Theory Chapters 7–9. The factorisation chapter next develops the polynomial algorithms; all calculations here keep the chosen coefficient field and modulus explicit.

## Beyond the basics

Finite fields are the computational workhorses of modern algebra. They support modular arithmetic, polynomial factorisation and later coding constructions. This chapter develops deeper structural results: primitive elements, the trace and norm, the discrete Fourier transform over finite fields, and algorithms for irreducibility testing and factorisation. These topics connect field theory, representation theory, and algorithm design.

## Primitive elements and primitive polynomials

The multiplicative group $\\mathbb{F}_{q}^{\\times}$ of a finite field is cyclic of order $q - 1$. A **primitive element** is a generator of this cyclic group. There are $\\varphi(q - 1)$ primitive elements in $\\mathbb{F}_{q}$.

A monic irreducible polynomial $p(x) \\in \\mathbb{F}_{q}[x]$ of degree $d$ is **primitive** if any root $\\alpha$ is a primitive element of $\\mathbb{F}_{q^{d}}$. Equivalently, the smallest $n$ with $x^{n} \\equiv 1 \\pmod{p(x)}$ is $n = q^{d} - 1$.

**Existence.** For every prime power $q$ and every $d \\geq 1$, there exists a primitive polynomial of degree $d$ over $\\mathbb{F}_{q}$.

**Worked example.** Find a primitive polynomial of degree $3$ over $\\mathbb{F}_{2}$.

**Solution.** The field $\\mathbb{F}_{8}$ has multiplicative group of order $7$, which is prime. Thus every non-identity element is primitive. The irreducible cubics over $\\mathbb{F}_{2}$ are $x^{3} + x + 1$ and $x^{3} + x^{2} + 1$. Both are primitive because any root $\\alpha$ satisfies $\\alpha^{7} = 1$ and $\\alpha \\neq 1$.

## The trace and the norm

Let $\\mathbb{F}_{q^{d}}/\\mathbb{F}_{q}$ be a finite extension. The **trace** and **norm** from $\\mathbb{F}_{q^{d}}$ to $\\mathbb{F}_{q}$ are

$$\\operatorname{Tr}_{\\mathbb{F}_{q^{d}}/\\mathbb{F}_{q}}(a) = \\sum_{i=0}^{d-1} a^{q^{i}}, \\qquad \\operatorname{N}_{\\mathbb{F}_{q^{d}}/\\mathbb{F}_{q}}(a) = \\prod_{i=0}^{d-1} a^{q^{i}}.$$

The trace is an $\\mathbb{F}_{q}$-linear map from $\\mathbb{F}_{q^{d}}$ to $\\mathbb{F}_{q}$. The norm is multiplicative. Both are surjective.

**Properties.**
- $\\operatorname{Tr}(a + b) = \\operatorname{Tr}(a) + \\operatorname{Tr}(b)$.
- $\\operatorname{Tr}(c \\cdot a) = c \\cdot \\operatorname{Tr}(a)$ for $c \\in \\mathbb{F}_{q}$.
- $\\operatorname{N}(a \\cdot b) = \\operatorname{N}(a) \\cdot \\operatorname{N}(b)$.

**Worked example.** Compute the trace from $\\mathbb{F}_{4}$ to $\\mathbb{F}_{2}$. Recall $\\mathbb{F}_{4} = \\mathbb{F}_{2}[x]/(x^{2} + x + 1)$ with $\\alpha^{2} = \\alpha + 1$.

**Solution.** The Frobenius automorphism squares each element. For $a = a_{0} + a_{1}\\alpha$:

$$\\operatorname{Tr}(a) = a + a^{2} = (a_{0} + a_{1}\\alpha) + (a_{0} + a_{1}(\\alpha + 1)) = 2a_{0} + a_{1}(2\\alpha + 1) = a_{1}.$$

Thus $\\operatorname{Tr}(0) = \\operatorname{Tr}(1) = 0$ and $\\operatorname{Tr}(\\alpha) = \\operatorname{Tr}(\\alpha + 1) = 1$.

## The discrete Fourier transform over finite fields

Let $\\omega$ be a primitive $n$-th root of unity in $\\mathbb{F}_{q}$, so $n \\mid (q - 1)$. The **discrete Fourier transform (DFT)** of a vector $(a_{0}, \\dots, a_{n-1}) \\in \\mathbb{F}_{q}^{n}$ is

$$\\hat{a}_{j} = \\sum_{i=0}^{n-1} a_{i} \\omega^{ij}, \\qquad j = 0, \\dots, n-1.$$

The inverse DFT is

$$a_{i} = \\frac{1}{n} \\sum_{j=0}^{n-1} \\hat{a}_{j} \\omega^{-ij}.$$

The DFT diagonalises circulant matrices and computes cyclic convolution of length $n$. To use a number-theoretic transform for ordinary polynomial multiplication, the inputs must be zero-padded to avoid wraparound.

**Fast multiplication.** If $f,g$ have degree below $n$, choose a transform length $N\\ge2n-1$ with $N\\mid(q-1)$, pad both coefficient vectors to length $N$, transform, multiply pointwise, and invert. A radix-two Cooley-Tukey implementation additionally requires $N$ to be a power of two. Under these hypotheses the cost is $O(N\\log N)$ field operations.

## Irreducibility testing

To test whether $f(x) \\in \\mathbb{F}_{q}[x]$ of degree $d$ is irreducible:

1. For each prime divisor $r$ of $d$, compute $\\gcd(f(x), x^{q^{d/r}} - x)$. If any gcd is non-trivial, $f$ has a factor of degree dividing $d/r$.
2. Check whether $x^{q^{d}} \\equiv x \\pmod{f(x)}$.

If both tests pass, $f$ is irreducible. The correctness follows from the fact that $x^{q^{n}} - x$ is the product of all monic irreducible polynomials over $\\mathbb{F}_{q}$ whose degree divides $n$.

**Worked example.** Test $f(x) = x^{4} + x + 1$ for irreducibility over $\\mathbb{F}_{2}$.

**Solution.** The prime divisors of $4$ are $2$. Compute $x^{2^{2}} = x^{4} \\equiv x + 1 \\pmod{f}$ (since $x^{4} = x + 1$ from $f$). Then $\\gcd(f, x^{4} - x) = \\gcd(x^{4} + x + 1, x + 1 + x) = \\gcd(x^{4} + x + 1, 1) = 1$. Next, $x^{16} \\bmod f$: compute $x^{8} = (x^{4})^{2} = (x + 1)^{2} = x^{2} + 1$; then $x^{16} = (x^{2} + 1)^{2} = x^{4} + 1 = x + 1 + 1 = x$. Thus $x^{16} \\equiv x \\pmod{f}$, and $f$ is irreducible.

## Factorisation algorithms

For polynomials over finite fields, the **Berlekamp algorithm** factors a squarefree polynomial $f$ by finding the **Berlekamp subalgebra**: the kernel of the linear map $g \\mapsto g^{q} - g \\pmod{f}$. A basis of this kernel yields factorisations via gcd computations.

The **Cantor-Zassenhaus algorithm** is a probabilistic alternative. In its equal-degree splitting stage, assume that the squarefree input is a product of at least two distinct irreducible factors, all of degree $d$. For odd $q$, random $h$ and $\\gcd(f,h^{(q^d-1)/2}-1)$ can then produce a proper factor; arbitrary inputs first need squarefree and distinct-degree factorization. The precise imported algorithmic treatment is von zur Gathen and Gerhard, *Modern Computer Algebra*, 3rd ed., Section 14.3, pp. 382--389.

## Common errors

- **Assuming $x^{n} - 1$ factors into distinct linear factors over $\\mathbb{F}_{q}$.** This happens only when $n \\mid (q - 1)$. Otherwise, $x^{n} - 1$ has repeated factors if $\\operatorname{char}(\\mathbb{F}_{q})$ divides $n$.
- **Confusing primitive elements with primitive polynomials.** A primitive element lives in $\\mathbb{F}_{q^{d}}$; a primitive polynomial lives in $\\mathbb{F}_{q}[x]$.
- **Using the wrong field size in irreducibility tests.** The exponent is $q^{d}$, not $q$.

## Changing polynomial coordinates requires an isomorphism

**Worked example 2.7 (Two presentations of eight elements).** Let $\\alpha$ satisfy $\\alpha^3+\\alpha+1=0$ over $F_2$. Its inverse is $\\alpha^2+1$, since $\\alpha(\\alpha^2+1)=\\alpha^3+\\alpha=1$. Put $\\beta=\\alpha^{-1}$. Dividing the defining equation by $\\alpha^3$ gives $1+\\beta^2+\\beta^3=0$. Thus $\\beta$ satisfies $y^3+y^2+1$, the other irreducible cubic over $F_2$.

The map from $F_2[y]/(y^3+y^2+1)$ to $F_2[\\alpha]$ sending $y$ to $\\alpha^2+1$ is therefore a field embedding. Both fields have eight elements, making it an isomorphism. But it does not identify the coordinate vector of $y$ with that of $\\alpha$. Its images of the basis are $1$, $\\alpha^2+1$ and $\\beta^2=\\alpha^2+\\alpha+1$. Arithmetic data transferred between the two presentations must use this explicit basis transformation. Simply copying three coefficients would preserve an array shape while changing the represented element.


## Structural certificates for the chosen arithmetic

The word primitive concerns the multiplicative group, not merely the vector-space degree. Here is a proof of the cyclicity used earlier. In any finite subgroup of a field's multiplicative group, take the least common multiple m of the element orders. For each prime dividing m, choose an element whose order has the maximal corresponding prime-power factor and raise it to remove the other factors. The resulting elements commute and have pairwise coprime prime-power orders. Their product has order m: raising an alleged identity power to the orders of all the other factors shows that each selected prime power divides that exponent.

Every group element is a root of X^m−1. A nonzero polynomial over a field has at most its degree many roots, so the group size is at most m. The constructed order-m cyclic subgroup already has m elements, giving equality. This proves cyclicity rather than inferring it from a list of small examples.

A primitive element in the field of size q^d has degree exactly d over the chosen base. If its degree were smaller, its root field would have fewer than q^d elements, and its multiplicative order would be bounded by that smaller field's nonzero size. This contradicts its order q^d−1. Its minimal polynomial is therefore a primitive irreducible of the required degree. Frobenius conjugates preserve element orders, so the definition does not depend on which conjugate root is chosen.

A practical primitive-element certificate assumes the modulus already proved irreducible. Put N=q^d−1 and provide the complete distinct prime-divisor list of N. A nonzero candidate is primitive exactly when its N/ℓ-th power is not one for every listed prime ℓ. Its order divides N by Lagrange. If that order were a proper divisor, a prime divisor of the quotient N/order would make one of the prohibited powers equal one. Conversely an element of order N passes every exclusion. This explains every condition in the certificate.

Each exponentiation uses logarithmically many quotient multiplications by repeated squaring. The factorisation of N is separate input evidence; a partially factored N does not justify excluding all proper orders. The irreducibility certificate excludes unwanted field degrees, while this certificate excludes unwanted element orders. They answer different questions and require different prime-factor lists.

## Surjectivity of trace and norm

The trace formula takes values in the base field because applying the q-power Frobenius cyclically permutes its summands. It is base-field linear by Frobenius additivity. It is not the zero function: its defining polynomial has leading coefficient one and degree q^(d−1), strictly less than the q^d available arguments. If it vanished at all field elements, it would contradict the polynomial root bound. A nonzero linear map into the one-dimensional base field is onto. This proof still works when the degree d vanishes in the characteristic and the trace of one is zero.

For the norm, its value on a nonzero element is its N/(q−1)-th power. A multiplicative generator maps to an element of order q−1, by the elementary order-of-a-power formula. Thus the norm reaches every nonzero base element, and zero maps to zero. The formula also proves multiplicativity. These arguments justify the earlier surjectivity claims with the base and extension fields held fixed throughout.

## Why the transform inverse works

A length-n transform needs a root of exact order n. Since n divides q−1, the characteristic does not divide n and the scalar n is invertible. For a nontrivial n-th root ratio, the geometric-series identity says its n successive powers sum to zero; if the ratio is one, the sum is n. Substituting the forward transform into the proposed inverse therefore gives one for the matching coefficient and zero for every other coefficient. This proves the inverse formula for every input vector.

Transforming cyclic convolution gives the pointwise product of transforms. Reindex the convolution pair by its two original indices: the exponent ω^(j(i+k)) splits into ω^(ji)ω^(jk), so the double sum factors. Ordinary polynomial multiplication agrees with cyclic convolution only when the degree bound prevents coefficients wrapping around the transform length. Root availability and zero padding are independent obligations; satisfying one does not supply the other.

**Worked example: a four-point transform over F_17.** The element four has square minus one and fourth power one, so has order four. For coefficient vectors (1,1,0,0) and (1,2,0,0), the forward transforms are (2,5,0,14) and (3,9,16,10). Their pointwise product is (6,11,0,4), with all entries reduced modulo seventeen.

The inverse transform uses the inverse of four, namely thirteen, and returns (1,3,2,0). Its first coefficient is thirteen times the sum of the four transformed entries; that sum is four modulo seventeen, giving one. The remaining weighted sums give three, two and zero. This matches the direct product of one plus x with one plus twice x. Both factors have degree one, so their degree-two product fits the length-four transform without wraparound.

If the same vectors were packed into length two, the coefficient of x² would fold into the constant coordinate. The result would describe multiplication modulo x²−1 rather than the intended ordinary product. That is an algebraic change of problem, not a rounding error. The field operations remain exact in either calculation, so an arithmetic implementation alone cannot decide which convolution contract the caller intended.

## Practice exercises

### Exercise 1

Find all primitive elements of $\\mathbb{F}_{9} = \\mathbb{F}_{3}[x]/(x^{2} + 1)$.

<details>
<summary>Hint</summary>

Separate the order-four class α from the elements whose fourth power is −1.

</details>

<details>
<summary>Solution</summary>

Here $\\alpha^2=-1$, so $\\alpha$ has order $4$, not $8$. Direct squaring shows that $1+\\alpha$, $1-\\alpha$, $-1+\\alpha$, and $-1-\\alpha$ have square $\\pm\\alpha$ and therefore order $8$. These four elements are exactly the primitive elements, as $\\varphi(8)=4$.

</details>

### Exercise 2

Compute the trace from $\\mathbb{F}_{8}$ to $\\mathbb{F}_{2}$ for every element, using $\\mathbb{F}_{8} = \\mathbb{F}_{2}[x]/(x^{3} + x + 1)$.

<details>
<summary>Hint</summary>

Compute trace on the basis 1,α,α² and use linearity.

</details>

<details>
<summary>Solution</summary>

Let $\\alpha^3=\\alpha+1$. The trace is $\\operatorname{Tr}(a)=a+a^2+a^4$. One finds $\\operatorname{Tr}(1)=1$, $\\operatorname{Tr}(\\alpha)=0$, and $\\operatorname{Tr}(\\alpha^2)=0$. By $\\mathbb F_2$-linearity, the trace of $a_0+a_1\\alpha+a_2\\alpha^2$ is its constant coefficient $a_0$. Thus it is zero on

$0,\\ \\alpha,\\ \\alpha^2,\\ \\alpha+\\alpha^2$

and one on

$1,\\ 1+\\alpha,\\ 1+\\alpha^2,\\ 1+\\alpha+\\alpha^2$.

</details>

### Exercise 3

Test whether $x^{5} + x^{2} + 1$ is irreducible over $\\mathbb{F}_{2}$.

<details>
<summary>Hint</summary>

Use the degree-five Frobenius/gcd criterion and reduce each repeated square.

</details>

<details>
<summary>Solution</summary>

For the prime divisor $5$ of the degree, step $1$ requires $\\gcd(f,x^{2}-x)=1$. This holds because $f(0)=f(1)=1$, so $f$ has no linear factor over $\\mathbb F_2$. Next compute $x^{32} \\bmod (x^{5} + x^{2} + 1)$. Repeated squaring: $x^{5} = x^{2} + 1$; $x^{8} = x^{5} \\cdot x^{3} = (x^{2} + 1)x^{3} = x^{5} + x^{3} = x^{3} + x^{2} + 1$; $x^{16} = (x^{3} + x^{2} + 1)^{2} = x^{6} + x^{4} + 1 = x(x^{2} + 1) + x^{4} + 1 = x^{4} + x^{3} + x + 1$; $x^{32} = (x^{4} + x^{3} + x + 1)^{2} = x^{8} + x^{6} + x^{2} + 1 = (x^{3} + x^{2} + 1) + x(x^{2} + 1) + x^{2} + 1 = x^{3} + x^{2} + 1 + x^{3} + x + x^{2} + 1 = x$. Thus $x^{32} \\equiv x$, and the polynomial is irreducible.

</details>

### Exercise 4

Explain why an NTT of power-of-two length $N\\ge2n-1$ can multiply polynomials of degree less than $n$ in $O(N\\log N)$ operations over $\\mathbb{F}_{q}$, provided $N\\mid(q-1)$.

<details>
<summary>Hint</summary>

Prove both root availability and absence of cyclic coefficient wraparound.

</details>

<details>
<summary>Solution</summary>

Pad each coefficient vector to length $N$. Since the ordinary product has degree at most $2n-2<N$, cyclic wraparound cannot occur. A primitive $N$-th root exists because $N\\mid(q-1)$. Cooley-Tukey recursively halves the power-of-two transform, using $O(N)$ operations at each of $\\log_2N$ levels. The forward transforms, pointwise products, and inverse transform therefore cost $O(N\\log N)$ field operations.

</details>

### Exercise 5 — Wrong four-element arithmetic
<a id="finite-field-arithmetic-ex-5"></a>

Why does integer multiplication modulo four not implement the field F₄?

<details>
<summary>Hint</summary>

Look for zero divisors in Z/4Z.

</details>

<details>
<summary>Solution</summary>

The nonzero class two satisfies 2·2=0 modulo four, so Z/4Z has a zero divisor and is not a field. F₄ instead has characteristic two and three nonzero invertible elements. Its integer bit encoding is merely a coordinate convention; multiplication must follow its irreducible polynomial relation.

</details>

### Exercise 6 — One encoded product
<a id="finite-field-arithmetic-ex-6"></a>

With α²=α+1 and encoding a₀+2a₁, multiply encoded elements three and three by hand.

<details>
<summary>Hint</summary>

Three represents α+1 and the characteristic is two.

</details>

<details>
<summary>Solution</summary>

The square (α+1)²=α²+1=α+1+1=α. Thus the output encoding is two. In the program formulas both constant inputs are one, giving c₀=(1+1) mod2=0 and c₁=(1+1+1) mod2=1, again encoding two.

</details>

### Exercise 7 — An inverse certificate
<a id="finite-field-arithmetic-ex-7"></a>

If u(x)a(x)+v(x)f(x)=1, explain why u is an inverse of a modulo f. Does this require f irreducible for that particular a?

<details>
<summary>Hint</summary>

Reduce the displayed identity; distinguish a single unit from every nonzero class.

</details>

<details>
<summary>Solution</summary>

Modulo f the identity becomes [u][a]=1. Commutativity gives both inverse products. It proves that particular a is a unit even when f is reducible. Irreducibility is what guarantees such a certificate for every nonzero class, rather than for only some classes of a general quotient ring.

</details>

### Exercise 8 — A repeated-root quotient
<a id="finite-field-arithmetic-ex-8"></a>

In F₂[x]/((x+1)²), prove x+1 is nonzero but has square zero.

<details>
<summary>Hint</summary>

Compare its degree with the modulus degree before squaring.

</details>

<details>
<summary>Solution</summary>

The class has nonzero representative x+1 of degree one, below the monic degree-two modulus, so uniqueness of remainders makes it nonzero. Its square is exactly the modulus and is therefore zero in the quotient. This nonzero nilpotent cannot be invertible, ruling out the field property.

</details>

### Exercise 9 — Characteristic in a trace
<a id="finite-field-arithmetic-ex-9"></a>

Why can Tr_(F₄/F₂)(1)=0 while the trace map is nonzero?

<details>
<summary>Hint</summary>

Compute the trace of α using α²=α+1.

</details>

<details>
<summary>Solution</summary>

Trace is a+a². At one it is 1+1=0, while at α it is α+(α+1)=1. Thus its kernel contains the base field but its image is all F₂. A zero trace of one reflects that the degree is zero in characteristic two; it does not imply the entire linear map is zero.

</details>

### Exercise 10 — Two field presentations
<a id="finite-field-arithmetic-ex-10"></a>

What data must be supplied to identify F₂[x]/(f) with F₂[y]/(g) when f,g are different irreducible polynomials of the same degree?

<details>
<summary>Hint</summary>

Specify the image of the polynomial generator and its defining equation.

</details>

<details>
<summary>Solution</summary>

One must choose an element β in the second field satisfying f(β)=0 and giving the required generator degree. Evaluation then defines a map sending the class of x to β; irreducibility makes it an embedding, and equal finite sizes make it onto. Equal coefficient-vector lengths alone do not identify the elements, because reduction uses different polynomial relations.

</details>

## Summary

An irreducible modulus makes polynomial remainders into a finite field. Canonical coefficient vectors, exact convolution, monic reduction and Bézout inversion implement its arithmetic. A reducible modulus can preserve the same element count while introducing zero divisors. Primitive elements, Frobenius, trace and norm retain their declared base field; the next chapter develops polynomial factorisation algorithms using those exact operations.
`;export{e as default};