
# Recipe: Finite-Field Arithmetic for Error-Correcting Codes

**Before reading.** Read [Number Theory for Cryptography](#/books/cryptography/number-theory-for-cryptography), [Relations, Equivalence, and Quotients](#/books/introduction-to-proof/relations-equivalence-quotients).

Error-correcting codes turn a message into redundant data so that corruption can be detected or repaired. The algebra is cleanest over a finite field: every nonzero coefficient can be divided, distinct evaluation points remain distinct, and a nonzero polynomial cannot have more roots than its degree.

This recipe constructs a finite field, implements its arithmetic, and uses it to build a small Reed–Solomon evaluation code. It assumes modular arithmetic and polynomial division. All algorithms are exact; no floating-point approximation belongs in this pipeline.

## Ingredients and guarantees

Choose a prime $p$, a positive integer $m$, and a monic irreducible polynomial $f(x)$ of degree $m$ over $F_p$. Then

$F_{p^m} = F_p[x]/(f(x))$

is a field with $p^m$ elements. Every element has a unique representative of degree less than $m$. Addition is coefficientwise modulo $p$; multiplication is polynomial multiplication followed by reduction modulo $f$.

Irreducibility is essential. If $f=gh$ with both factors nonconstant, then the nonzero residue classes of $g$ and $h$ multiply to zero. The quotient is then a ring with zero divisors, not a field, and division-based coding algorithms can fail.

Not every finite size works: a finite field has prime-power order. For every prime power $p^m$, such a field exists and is unique up to isomorphism, although different irreducible moduli give different coordinate representations.

## Step 1: verify a small irreducible modulus

Build $F_8$ from $F_2$ using

$f(x)=x^{3}+x+1$.

A cubic over a field is reducible exactly when it has a root. Evaluate at the only two elements:

$f(0)=1$, and $f(1)=1+1+1=1$ in $F_2$.

There is no root, so $f$ is irreducible. Let $\alpha$ be the residue class of $x$. The defining relation is

$\alpha ^{3}+\alpha +1=0$, hence $\alpha ^{3}=\alpha +1$

because subtraction equals addition in characteristic two. The eight elements are

$0, 1, \alpha , \alpha +1, \alpha ^{2}, \alpha ^{2}+1, \alpha ^{2}+\alpha , \alpha ^{2}+\alpha +1$.

For larger degrees, checking only roots is not enough: a degree-four polynomial can factor as two irreducible quadratics without having a root. Use a genuine irreducibility test, such as the standard gcd tests involving $x^{p^k}-x$, or a trusted implementation whose modulus is independently tested.

## Step 2: encode elements as coefficient vectors

Represent

$a_0+a_1\alpha +\ldots +a_{m-1}\alpha ^{m-1}$

by $[a_0,a_1,\ldots ,a_{m-1}]$, with each coefficient reduced modulo $p$. For binary fields, the same vector can be packed into bits: coefficient $a_i$ occupies bit $i$. Then addition is bitwise XOR.

```text
add(a, b):
    for i from 0 to m-1:
        out[i] = (a[i] + b[i]) mod p
    return out
```

The zero vector is additive identity. In characteristic two, every element is its own additive inverse; this convenient fact must not be generalized to odd characteristic.

## Step 3: multiply, then reduce

First convolve coefficient arrays to obtain a polynomial of degree at most $2m-2$. Then repeatedly cancel its leading term using the monic relation $f(x)=0$.

```text
multiply(a, b):
    raw = zero array of length 2m-1
    for i,j:
        raw[i+j] += a[i] * b[j] mod p
    for degree from 2m-2 down to m:
        c = raw[degree]
        subtract c * x^(degree-m) * f(x) from raw
    return raw[0..m-1]
```

Over $F_2$, subtraction in the reduction loop is again XOR. Over odd $p$, keep the minus sign and reduce coefficients modulo $p$ after each update.

In $F_8$, compute

$(\alpha ^{2}+1)(\alpha +1)=\alpha ^{3}+\alpha ^{2}+\alpha +1$.

Substitute $\alpha ^{3}=\alpha +1$:

$(\alpha +1)+\alpha ^{2}+\alpha +1=\alpha ^{2}$.

The two $\alpha$ terms and two constant terms cancel in characteristic two.

## Step 4: invert with the extended Euclidean algorithm

For a nonzero polynomial representative $a(x)$, irreducibility gives $gcd(a,f)=1$. Extended Euclid finds polynomials $u,v$ with

$u(x)a(x)+v(x)f(x)=1$.

Reducing modulo $f$ yields $u(x)a(x)=1$, so the residue class of $u$ is the inverse of $a$.

```text
inverse(a):
    require a != 0
    (g, u, v) = extended_gcd(a, f)
    require g is a nonzero constant
    return u / g reduced modulo f
```

The division by $g$ normalizes the constant gcd in $F_p$. For a monic Euclidean implementation the gcd is often already $1$, but the robust algorithm should not rely on that presentation detail.

In $F_8$,

$(\alpha +1)(\alpha ^{2}+\alpha )=\alpha ^{3}+\alpha =1$,

so $(\alpha +1)^{-1}=\alpha ^{2}+\alpha$. Division by zero remains undefined.

An alternative for small verified fields is $a^{-1}=a^{q-2}$, following from the multiplicative group of $F_q$, but extended Euclid exposes why the inverse exists and is usually preferable for polynomial representations.

## Step 5: encode by polynomial evaluation

Let the field be $F_q$. Choose integers and distinct evaluation points satisfying $1\le k\le n\le q$, with $a_1,\ldots ,a_n\in F_q$. A message of $k$ field symbols determines a polynomial

$P(x)=m_0+m_1x+\ldots +m_{k-1}x^{k-1}$

of degree less than $k$. Encode it as

$(P(a_1),\ldots ,P(a_n))$.

This is an $[n,k]$ Reed–Solomon code. Two different message polynomials have a nonzero difference of degree at most $k-1$, which can vanish at at most $k-1$ field points. Their codewords therefore differ in at least

$n-(k-1)=n-k+1$

positions. The minimum distance is exactly $n-k+1$. Equality is attained: when $k>1$, a nonzero scalar multiple of $\prod _{i=1}^{k-1}(x-a_i)$ has degree below $k$, vanishes at exactly those first $k-1$ evaluation points, and gives a word of weight $n-k+1$; for $k=1$, every nonzero constant has weight $n$.

Under the usual unique-decoding model, the code can correct up to

$floor((n-k)/2)$

arbitrary symbol errors. Erasures, where corrupted positions are known, have a different budget.

## A complete code over $F_5$

### Worked example: evaluate and recover a linear message

Take $q=5$, evaluation points $0,1,2,3$, and $k=2$. The message $(2,3)$ represents

$P(x)=2+3x$.

Evaluate modulo five:

- $P(0)=2$;
- $P(1)=0$;
- $P(2)=3$;
- $P(3)=1$.

The codeword is $(2,0,3,1)$. Here $n=4$, $k=2$, and the minimum distance is $3$, so one symbol error can be uniquely corrected.

If no errors occur, any two coordinates at distinct points determine the linear polynomial. For instance, $P(0)=2$ fixes the intercept. From $P(2)=3$, solve $2+2m_1=3 \pmod{5}$; multiplying by $2^{-1}=3$ gives $m_1=3$.

With an unknown error, interpolating arbitrary pairs is not enough: different pairs may include the bad symbol. A decoder must locate an error pattern and enforce a global consistency condition. Berlekamp–Welch does this by solving for an error-locator polynomial and a numerator polynomial. That algorithm is beyond this small recipe, but its divisions and linear equations use exactly the field operations constructed above.

## Tests that protect the mathematics

For a generated arithmetic table, test laws rather than a few attractive examples:

1. every sum and product is a valid encoded element;
2. addition and multiplication are associative on all triples when the field is small;
3. multiplication distributes over addition;
4. zero and one act as identities;
5. every nonzero element has a computed two-sided inverse;
6. the chosen modulus passes an independent irreducibility test;
7. encoding then decoding every small message recovers it within the promised error radius.

Exhaustive tests are practical for $F_8$ or $F_16$. They do not replace a proof for a scalable implementation, but they catch coefficient order, sign, and reduction bugs with unusual efficiency.

## Failure modes

- **Reducible modulus:** creates zero divisors and failed inverses.
- **Repeated evaluation points:** destroys the distance proof because coordinates are no longer independent field points.
- **Too many points:** ordinary Reed–Solomon evaluation requires $n\le q$ for distinct points; extended variants need an explicitly modified construction.
- **Invalid dimension:** require $1\le k\le n$; otherwise the advertised $[n,k]$ dimension and distance formula do not apply.
- **Floating point:** rounding does not respect finite-field equality. Use exact integers reduced modulo $p$.
- **Bit convention drift:** decide whether bit $i$ means the coefficient of $x^i$ and test conversions both ways.
- **Overclaiming correction:** distance $d$ guarantees unique correction only through $floor((d-1)/2)$ arbitrary errors.

## Exercises with hints and complete solutions

### Exercise 1
<a id="finite-field-arithmetic-coding-ex-1"></a>

**Multiply in $F_8$.** Reduce $\alpha \cdot \alpha ^{2}$.

<details><summary>Hint 1</summary>

Multiply the powers before reducing the polynomial.

</details>
<details><summary>Hint 2</summary>

The defining relation in this field is cubic, so reduce the resulting third power.

</details>
<details><summary>Solution</summary>

It is $\alpha ^{3}=\alpha +1$ by the defining relation.

</details>

### Exercise 2
<a id="finite-field-arithmetic-coding-ex-2"></a>

**Audit an inverse claim.** Decide whether $\alpha ^{2}+1$ is the inverse of $\alpha ^{2}$ in this model, and find the inverse if the claim is false.

<details><summary>Hint 1</summary>

Multiply the proposed inverse by the original element.

</details>
<details><summary>Hint 2</summary>

Reduce fourth powers using the cubic relation, then find a product equal to one.

</details>
<details><summary>Solution</summary>

Their product is $\alpha ^{4}+\alpha ^{2}$. Since $\alpha ^{3}=\alpha +1$, multiply by $\alpha$ to get $\alpha ^{4}=\alpha ^{2}+\alpha$. The product reduces to $\alpha$ rather than $1$, so the proposed inverse is false. Continuing, $(\alpha ^{2})^{-1}=\alpha ^{2}+\alpha +1$ because $\alpha ^{2}(\alpha ^{2}+\alpha +1)=\alpha ^{4}+\alpha ^{3}+\alpha ^{2}=(\alpha ^{2}+\alpha )+(\alpha +1)+\alpha ^{2}=1$. This is a deliberate audit exercise: never trust an inverse before multiplying it back.

</details>

### Exercise 3
<a id="finite-field-arithmetic-coding-ex-3"></a>

**Detect a bad modulus.** Why does $F_2[x]/(x^{2}+1)$ fail to be $F_4$?

<details><summary>Hint 1</summary>

Factor the modulus over the two-element field.

</details>
<details><summary>Hint 2</summary>

Consider the square of the nonzero class represented by x+1.

</details>
<details><summary>Solution</summary>

Over $F_2$, $x^{2}+1=(x+1)^{2}$. The nonzero class of $x+1$ squares to zero, so the quotient has a zero divisor and is not a field.

</details>

### Exercise 4
<a id="finite-field-arithmetic-coding-ex-4"></a>

**Encode.** Over $F_5$, evaluate $Q(x)=4+x$ at $0,1,2,3$.

<details><summary>Hint 1</summary>

Evaluate at each of the four stated field elements.

</details>
<details><summary>Hint 2</summary>

Reduce each integer result modulo five.

</details>
<details><summary>Solution</summary>

The word is $(4,0,1,2)$ after reducing modulo five.

</details>

### Exercise 5
<a id="finite-field-arithmetic-coding-ex-5"></a>

**Distance reasoning.** Why can two distinct degree-less-than-three polynomials agree at no more than two distinct points?

<details><summary>Hint 1</summary>

Subtract the two polynomials.

</details>
<details><summary>Hint 2</summary>

A nonzero polynomial over a field has at most its degree many roots.

</details>
<details><summary>Solution</summary>

Their difference is a nonzero polynomial of degree at most two. A nonzero polynomial over a field has at most its degree many roots. Agreement at three points would force the difference to be zero and the polynomials to be equal.

</details>

## Continue

Use [Finite Algebra by Hand and Program](#/books/finite-algebra-computation) for generic operation tables, quotient groups, and polynomial reduction. The [finite algebra lab](../apps/atlas/index.html#/labs?lab=visual-lab-finite-algebra-tables) provides an accessible table-first model of closure, inverses, cosets, and quotients. Coding-theory next steps include systematic generator matrices, parity checks, BCH codes, Berlekamp–Welch decoding, and fast arithmetic in larger extension fields.
