
# Advanced Topics in Finite Fields

## Beyond the basics

Finite fields are the computational workhorses of modern algebra. We have already used them for modular arithmetic, polynomial factorisation, and the construction of AES and error-correcting codes. This chapter develops deeper structural results: primitive elements, the trace and norm, the discrete Fourier transform over finite fields, and algorithms for irreducibility testing and factorisation. These topics connect field theory, representation theory, and algorithm design.

## Primitive elements and primitive polynomials

The multiplicative group $\mathbb{F}_{q}^{\times}$ of a finite field is cyclic of order $q - 1$. A **primitive element** is a generator of this cyclic group. There are $\varphi(q - 1)$ primitive elements in $\mathbb{F}_{q}$.

A monic irreducible polynomial $p(x) \in \mathbb{F}_{q}[x]$ of degree $d$ is **primitive** if any root $\alpha$ is a primitive element of $\mathbb{F}_{q^{d}}$. Equivalently, the smallest $n$ with $x^{n} \equiv 1 \pmod{p(x)}$ is $n = q^{d} - 1$.

**Existence.** For every prime power $q$ and every $d \geq 1$, there exists a primitive polynomial of degree $d$ over $\mathbb{F}_{q}$.

**Worked example.** Find a primitive polynomial of degree $3$ over $\mathbb{F}_{2}$.

**Solution.** The field $\mathbb{F}_{8}$ has multiplicative group of order $7$, which is prime. Thus every non-identity element is primitive. The irreducible cubics over $\mathbb{F}_{2}$ are $x^{3} + x + 1$ and $x^{3} + x^{2} + 1$. Both are primitive because any root $\alpha$ satisfies $\alpha^{7} = 1$ and $\alpha \neq 1$.

## The trace and the norm

Let $\mathbb{F}_{q^{d}}/\mathbb{F}_{q}$ be a finite extension. The **trace** and **norm** from $\mathbb{F}_{q^{d}}$ to $\mathbb{F}_{q}$ are

$$\operatorname{Tr}_{\mathbb{F}_{q^{d}}/\mathbb{F}_{q}}(a) = \sum_{i=0}^{d-1} a^{q^{i}}, \qquad \operatorname{N}_{\mathbb{F}_{q^{d}}/\mathbb{F}_{q}}(a) = \prod_{i=0}^{d-1} a^{q^{i}}.$$

The trace is an $\mathbb{F}_{q}$-linear map from $\mathbb{F}_{q^{d}}$ to $\mathbb{F}_{q}$. The norm is multiplicative. Both are surjective.

**Properties.**
- $\operatorname{Tr}(a + b) = \operatorname{Tr}(a) + \operatorname{Tr}(b)$.
- $\operatorname{Tr}(c \cdot a) = c \cdot \operatorname{Tr}(a)$ for $c \in \mathbb{F}_{q}$.
- $\operatorname{N}(a \cdot b) = \operatorname{N}(a) \cdot \operatorname{N}(b)$.

**Worked example.** Compute the trace from $\mathbb{F}_{4}$ to $\mathbb{F}_{2}$. Recall $\mathbb{F}_{4} = \mathbb{F}_{2}[x]/(x^{2} + x + 1)$ with $\alpha^{2} = \alpha + 1$.

**Solution.** The Frobenius automorphism squares each element. For $a = a_{0} + a_{1}\alpha$:

$$\operatorname{Tr}(a) = a + a^{2} = (a_{0} + a_{1}\alpha) + (a_{0} + a_{1}(\alpha + 1)) = 2a_{0} + a_{1}(2\alpha + 1) = a_{1}.$$

Thus $\operatorname{Tr}(0) = \operatorname{Tr}(1) = 0$ and $\operatorname{Tr}(\alpha) = \operatorname{Tr}(\alpha + 1) = 1$.

## The discrete Fourier transform over finite fields

Let $\omega$ be a primitive $n$-th root of unity in $\mathbb{F}_{q}$, so $n \mid (q - 1)$. The **discrete Fourier transform (DFT)** of a vector $(a_{0}, \dots, a_{n-1}) \in \mathbb{F}_{q}^{n}$ is

$$\hat{a}_{j} = \sum_{i=0}^{n-1} a_{i} \omega^{ij}, \qquad j = 0, \dots, n-1.$$

The inverse DFT is

$$a_{i} = \frac{1}{n} \sum_{j=0}^{n-1} \hat{a}_{j} \omega^{-ij}.$$

The DFT diagonalises circulant matrices and computes cyclic convolution of length $n$. To use a number-theoretic transform for ordinary polynomial multiplication, the inputs must be zero-padded to avoid wraparound.

**Fast multiplication.** If $f,g$ have degree below $n$, choose a transform length $N\ge2n-1$ with $N\mid(q-1)$, pad both coefficient vectors to length $N$, transform, multiply pointwise, and invert. A radix-two Cooley-Tukey implementation additionally requires $N$ to be a power of two. Under these hypotheses the cost is $O(N\log N)$ field operations.

## Irreducibility testing

To test whether $f(x) \in \mathbb{F}_{q}[x]$ of degree $d$ is irreducible:

1. For each prime divisor $r$ of $d$, compute $\gcd(f(x), x^{q^{d/r}} - x)$. If any gcd is non-trivial, $f$ has a factor of degree dividing $d/r$.
2. Check whether $x^{q^{d}} \equiv x \pmod{f(x)}$.

If both tests pass, $f$ is irreducible. The correctness follows from the fact that $x^{q^{n}} - x$ is the product of all monic irreducible polynomials over $\mathbb{F}_{q}$ whose degree divides $n$.

**Worked example.** Test $f(x) = x^{4} + x + 1$ for irreducibility over $\mathbb{F}_{2}$.

**Solution.** The prime divisors of $4$ are $2$. Compute $x^{2^{2}} = x^{4} \equiv x + 1 \pmod{f}$ (since $x^{4} = x + 1$ from $f$). Then $\gcd(f, x^{4} - x) = \gcd(x^{4} + x + 1, x + 1 + x) = \gcd(x^{4} + x + 1, 1) = 1$. Next, $x^{16} \bmod f$: compute $x^{8} = (x^{4})^{2} = (x + 1)^{2} = x^{2} + 1$; then $x^{16} = (x^{2} + 1)^{2} = x^{4} + 1 = x + 1 + 1 = x$. Thus $x^{16} \equiv x \pmod{f}$, and $f$ is irreducible.

## Factorisation algorithms

For polynomials over finite fields, the **Berlekamp algorithm** factors a squarefree polynomial $f$ by finding the **Berlekamp subalgebra**: the kernel of the linear map $g \mapsto g^{q} - g \pmod{f}$. A basis of this kernel yields factorisations via gcd computations.

The **Cantor-Zassenhaus algorithm** is a probabilistic alternative. In its equal-degree splitting stage, assume that the squarefree input is a product of at least two distinct irreducible factors, all of degree $d$. For odd $q$, random $h$ and $\gcd(f,h^{(q^d-1)/2}-1)$ can then produce a proper factor; arbitrary inputs first need squarefree and distinct-degree factorization. The precise imported algorithmic treatment is von zur Gathen and Gerhard, *Modern Computer Algebra*, 3rd ed., Section 14.3, pp. 382--389.

## Common errors

- **Assuming $x^{n} - 1$ factors into distinct linear factors over $\mathbb{F}_{q}$.** This happens only when $n \mid (q - 1)$. Otherwise, $x^{n} - 1$ has repeated factors if $\operatorname{char}(\mathbb{F}_{q})$ divides $n$.
- **Confusing primitive elements with primitive polynomials.** A primitive element lives in $\mathbb{F}_{q^{d}}$; a primitive polynomial lives in $\mathbb{F}_{q}[x]$.
- **Using the wrong field size in irreducibility tests.** The exponent is $q^{d}$, not $q$.

## Practice exercises

### Exercise 1

Find all primitive elements of $\mathbb{F}_{9} = \mathbb{F}_{3}[x]/(x^{2} + 1)$.

**Solution.** Here $\alpha^2=-1$, so $\alpha$ has order $4$, not $8$. Direct squaring shows that $1+\alpha$, $1-\alpha$, $-1+\alpha$, and $-1-\alpha$ have square $\pm\alpha$ and therefore order $8$. These four elements are exactly the primitive elements, as $\varphi(8)=4$.

### Exercise 2

Compute the trace from $\mathbb{F}_{8}$ to $\mathbb{F}_{2}$ for every element, using $\mathbb{F}_{8} = \mathbb{F}_{2}[x]/(x^{3} + x + 1)$.

**Solution.** Let $\alpha^3=\alpha+1$. The trace is $\operatorname{Tr}(a)=a+a^2+a^4$. One finds $\operatorname{Tr}(1)=1$, $\operatorname{Tr}(\alpha)=0$, and $\operatorname{Tr}(\alpha^2)=0$. By $\mathbb F_2$-linearity, the trace of $a_0+a_1\alpha+a_2\alpha^2$ is its constant coefficient $a_0$. Thus it is zero on

$0,\ \alpha,\ \alpha^2,\ \alpha+\alpha^2$

and one on

$1,\ 1+\alpha,\ 1+\alpha^2,\ 1+\alpha+\alpha^2$.

### Exercise 3

Test whether $x^{5} + x^{2} + 1$ is irreducible over $\mathbb{F}_{2}$.

**Solution.** For the prime divisor $5$ of the degree, step $1$ requires $\gcd(f,x^{2}-x)=1$. This holds because $f(0)=f(1)=1$, so $f$ has no linear factor over $\mathbb F_2$. Next compute $x^{32} \bmod (x^{5} + x^{2} + 1)$. Repeated squaring: $x^{5} = x^{2} + 1$; $x^{8} = x^{5} \cdot x^{3} = (x^{2} + 1)x^{3} = x^{5} + x^{3} = x^{3} + x^{2} + 1$; $x^{16} = (x^{3} + x^{2} + 1)^{2} = x^{6} + x^{4} + 1 = x(x^{2} + 1) + x^{4} + 1 = x^{4} + x^{3} + x + 1$; $x^{32} = (x^{4} + x^{3} + x + 1)^{2} = x^{8} + x^{6} + x^{2} + 1 = (x^{3} + x^{2} + 1) + x(x^{2} + 1) + x^{2} + 1 = x^{3} + x^{2} + 1 + x^{3} + x + x^{2} + 1 = x$. Thus $x^{32} \equiv x$, and the polynomial is irreducible.

### Exercise 4

Explain why an NTT of power-of-two length $N\ge2n-1$ can multiply polynomials of degree less than $n$ in $O(N\log N)$ operations over $\mathbb{F}_{q}$, provided $N\mid(q-1)$.

**Solution.** Pad each coefficient vector to length $N$. Since the ordinary product has degree at most $2n-2<N$, cyclic wraparound cannot occur. A primitive $N$-th root exists because $N\mid(q-1)$. Cooley-Tukey recursively halves the power-of-two transform, using $O(N)$ operations at each of $\log_2N$ levels. The forward transforms, pointwise products, and inverse transform therefore cost $O(N\log N)$ field operations.

## Looking backward and forward

This chapter concluded our study of finite fields by developing their advanced structural and algorithmic properties. The trace, norm, and DFT are tools that recur throughout computational algebra. Together with the group theory, representation theory, ring theory, and algebraic geometry developed in earlier chapters, they form a comprehensive toolkit for finite algebraic computation. The reader is now prepared to tackle specialised monographs in computational algebra, coding theory, cryptography, and algebraic geometry, with a solid foundation in explicit, verifiable mathematics.
