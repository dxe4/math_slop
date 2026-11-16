
# Cryptography

## From codes to ciphers

Algebraic coding theory protects messages against noise through redundancy and distance; it does not rely on computational hardness. Cryptography protects messages against adversaries and uses protocol-specific computational assumptions. This chapter gives a mathematical orientation to finite-field, cyclic-group, elliptic-curve, and RSA primitives; actual security also depends on randomized padding, authentication, parameter validation, side-channel resistance, and a precise threat model.

## Symmetric cryptography and finite fields

A **block cipher** encrypts fixed-length blocks of plaintext under a secret key. The Advanced Encryption Standard (AES) operates on $128$-bit blocks using operations in the finite field $\mathbb{F}_{2^{8}}$. Specifically, AES uses the field

$$\mathbb{F}_{2^{8}} = \mathbb{F}_{2}[x] / (x^{8} + x^{4} + x^{3} + x + 1).$$

The **SubBytes** step replaces each byte by its multiplicative inverse in $\mathbb{F}_{2^{8}}$ (with $0$ mapped to $0$), followed by an affine transformation. The invertibility of this step relies on the field structure: every non-zero element has a unique inverse.

**Worked example.** In AES's $\mathbb{F}_{2^{8}}$, compute the inverse of the byte $x^{7} + x^{3} + 1$.

**Solution.** Represent the byte as $b(x)=x^7+x^3+1$ and put $m(x)=x^8+x^4+x^3+x+1$. The first Euclidean division is

$m(x)=x b(x)+(x^3+1)$.

Continuing extended Euclid and back-substituting gives

$b(x)^{-1}=x^7+x^4+x^3+x^2+x$.

Exact polynomial reduction verifies

$(x^7+x^3+1)(x^7+x^4+x^3+x^2+x)\equiv1\pmod{m(x)}$.

## Public-key cryptography and the discrete logarithm problem

In **public-key cryptography**, encryption uses a public key and decryption uses a private key. Security rests on computational hardness assumptions.

**The discrete logarithm problem (DLP).** Given a cyclic group $G = \langle g \rangle$ of order $n$ and an element $h \in G$, find $x \in \{0, \dots, n-1\}$ such that $g^{x} = h$.

The DLP is believed to be hard in suitably chosen groups. In $\mathbb{F}_{p}^{\times}$ for large prime $p$, the best known algorithms (index calculus) run in subexponential time. For properly chosen elliptic curves no faster classical attack than generic square-root algorithms such as Pollard rho is known. Special curves can have additional attacks, so this claim is parameter-dependent and belongs to the classical computation model.

## Diffie-Hellman key exchange

Alice and Bob agree on a cyclic group $G = \langle g \rangle$ of order $n$.
1. Alice chooses $a$ uniformly at random, sends $A = g^{a}$ to Bob.
2. Bob chooses $b$ uniformly at random, sends $B = g^{b}$ to Alice.
3. Alice computes $K = B^{a} = g^{ab}$.
4. Bob computes $K = A^{b} = g^{ab}$.

The assertion that an eavesdropper given $g,g^a,g^b$ cannot compute $g^{ab}$ is the separate **computational Diffie-Hellman assumption**; DLP hardness alone does not logically imply it. The **decisional Diffie-Hellman assumption** further asserts that $g^{ab}$ is indistinguishable from a random group element in the stated group and encoding.

## Elliptic curve cryptography

An **elliptic curve** over a field $F$ (with $\operatorname{char}(F) \neq 2, 3$) is the set of solutions to

$$y^{2} = x^{3} + ax + b$$

with $4a^{3} + 27b^{2} \neq 0$, plus a point at infinity $\mathcal{O}$. The points form an abelian group under the chord-and-tangent law: the line through two points intersects the curve in a third point, whose reflection across the $x$-axis is the sum.

**Point addition formulas.** For $P=(x_1,y_1)$ and $Q=(x_2,y_2)$ with $x_1\ne x_2$:

$$\lambda = \frac{y_{2} - y_{1}}{x_{2} - x_{1}}, \qquad x_{3} = \lambda^{2} - x_{1} - x_{2}, \qquad y_{3} = \lambda(x_{1} - x_{3}) - y_{1}.$$

For $P=Q$ with $y_1\ne0$:

$$\lambda = \frac{3x_{1}^{2} + a}{2y_{1}}, \qquad x_{3} = \lambda^{2} - 2x_{1}, \qquad y_{3} = \lambda(x_{1} - x_{3}) - y_{1}.$$

If $Q=-P$ (including distinct points with $x_1=x_2$), then $P+Q=\mathcal O$. If $P=Q$ and $y_1=0$, then $2P=\mathcal O$; and $P+\mathcal O=P$.

**Worked example.** Let $E : y^{2} = x^{3} + 2x + 2$ over $\mathbb{F}_{17}$. Verify that $P = (5, 1)$ lies on the curve and compute $2P$.

**Solution.** Check: $1^{2} = 1$ and $5^{3} + 2 \cdot 5 + 2 = 125 + 10 + 2 = 137 \equiv 1 \pmod{17}$. For doubling:

$$\lambda = \frac{3 \cdot 25 + 2}{2} = \frac{77}{2} \equiv \frac{9}{2} \equiv 9 \cdot 9 = 81 \equiv 13 \pmod{17}$$

(since $2^{-1} \equiv 9 \pmod{17}$). Then $x_{3} = 13^{2} - 10 = 169 - 10 = 159 \equiv 6 \pmod{17}$ and $y_{3} = 13(5 - 6) - 1 = -14 \equiv 3 \pmod{17}$. Thus $2P = (6, 3)$.

## RSA and integer factorisation

**RSA** uses the ring $\mathbb{Z}/n\mathbb{Z}$ where $n = pq$ is a product of two distinct large primes. The public key is $(n, e)$ and the private key is $d$, with positive integers $e,d$ satisfying $ed \equiv 1 \pmod{\varphi(n)}$. Encryption is $c = m^{e} \bmod n$; decryption is $m = c^{d} \bmod n$.

Factoring $n$ reveals the private exponent efficiently, but textbook RSA security is not known to be equivalent to factoring. Raw RSA is deterministic and is not semantically secure. Real encryption or signature schemes wrap the algebraic permutation in a proved randomized padding or encoding protocol. The algebraic structure is not a field---$\mathbb{Z}/n\mathbb{Z}$ has zero divisors---but the multiplicative group of units has order $\varphi(n)=(p-1)(q-1)$. A toy counterexample to dropping distinctness is $p=q=3$: then $n=9$ has $\varphi(9)=6$, not $(3-1)^2=4$, and the false formula admits $e=d=3$, sending $m=2$ to $c=8$ and back to $8$. Even with the true totient, $e=d=5$ sends the nonunit $m=3$ to $c=0$ and back to $0$. This online distinct-prime and positive-exponent clarification leaves the retained draft PDF unchanged.

## Common errors

- **Using a curve with singular discriminant.** If $4a^{3} + 27b^{2} = 0$, the curve is singular and the group law degenerates, making the DLP easy.
- **Reusing nonces in ECDSA.** If the same nonce $k$ is used for two signatures, the private key can be recovered by solving a linear equation.
- **Choosing a group order with small prime factors.** The Pohlig-Hellman algorithm reduces the DLP to subgroups of prime-power order; the group order must have a large prime factor.

## Practice exercises

### Exercise 1

Compute $3P$ on the curve $y^{2} = x^{3} + 2x + 2$ over $\mathbb{F}_{17}$ where $P = (5, 1)$.

**Solution.** We have $2P = (6, 3)$ from the worked example. For $3P = P + 2P$:

$$\lambda = \frac{3 - 1}{6 - 5} = 2, \qquad x_{3} = 4 - 5 - 6 = -7 \equiv 10, \qquad y_{3} = 2(5 - 10) - 1 = -11 \equiv 6.$$

Thus $3P = (10, 6)$.

### Exercise 2

Show that the elliptic curve $y^{2} = x^{3} + x$ over $\mathbb{F}_{p}$ with $p \equiv 3 \pmod{4}$ has exactly $p + 1$ points.

**Solution.** Extend the quadratic character by $\chi(0)=0$. The number of affine points is

$\sum_{x\in\mathbb F_p}[1+\chi(x^3+x)]=p+\sum_x\chi(x^3+x)$.

Because $f(x)=x^3+x$ is odd and $\chi(-1)=-1$ when $p\equiv3\pmod4$, the terms for $x$ and $-x$ cancel: $\chi(f(-x))=-\chi(f(x))$. The $x=0$ term is zero. Hence the character sum vanishes, giving $p$ affine points; adjoining $\mathcal O$ gives exactly $p+1$ points.

### Exercise 3

In Diffie-Hellman over $\mathbb{F}_{p}^{\times}$ with $p = 23$ and generator $g = 5$, Alice sends $A = 8$ and Bob sends $B = 19$. Compute the shared secret.

**Solution.** First find Alice's secret $a$ with $5^{a} \equiv 8 \pmod{23}$. By trial: $5^{1} = 5$, $5^{2} = 2$, $5^{3} = 10$, $5^{4} = 4$, $5^{5} = 20$, $5^{6} = 8$. So $a = 6$. The shared secret is $B^{a} = 19^{6} \bmod 23$. Compute $19^{2} = 361 \equiv 16$, $19^{3} \equiv 16 \cdot 19 = 304 \equiv 5$, $19^{6} = (19^{3})^{2} \equiv 25 \equiv 2 \pmod{23}$. The shared secret is $2$.

### Exercise 4

Prove that RSA decryption works: if $c = m^{e} \bmod n$ and $ed \equiv 1 \pmod{\varphi(n)}$, then $c^{d} \equiv m \pmod{n}$ for all $m$ coprime to $n$.

**Solution.** For the RSA setup $n=pq$ with distinct primes $p,q$ and positive integers $e,d$, write $ed = 1 + k \varphi(n)$. By Euler's theorem, $m^{\varphi(n)} \equiv 1 \pmod{n}$ when $\gcd(m, n) = 1$. Thus $c^{d} = m^{ed} = m \cdot (m^{\varphi(n)})^{k} \equiv m \pmod{n}$. For $m$ not coprime to $n$, the result still holds by the Chinese remainder theorem applied modulo $p$ and $q$ separately.

## Looking backward and forward

Cryptography translates hard algebraic problems into security guarantees. The finite-field arithmetic of AES, the discrete logarithm in Diffie-Hellman, and the group structure of elliptic curves all build on material from earlier chapters. In **Project: Compute a Character Table** we bring together representation theory and computation to construct character tables algorithmically, a task that shares the same spirit of verified algebraic computation.
