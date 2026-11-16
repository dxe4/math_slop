
# Arithmetic Functions, Convolution, and Mobius Inversion {#section-1-arithmetic-functions-convolution-and-mobius-inversion}

Arithmetic functions attach information to each positive integer. Dirichlet convolution combines divisor data, and the Möbius function reverses divisor summation. Together they turn prime-power tables into global formulas and incidence counting into algebra.

This chapter assumes unique factorization and finite sums. Afterward you should be able to prove multiplicativity, compute convolutions from prime powers, apply both forms of Möbius inversion, and distinguish pointwise multiplication from convolution.

<a id="section-5-1-arithmetic-and-multiplicative-functions"></a>
## 1. Arithmetic and multiplicative functions {#section-7-1-arithmetic-and-multiplicative-functions}

An **arithmetic function** is a map from positive integers to complex numbers. It is **multiplicative** when $f(1)=1$ and

$f(mn)=f(m)f(n)$ whenever $\gcd(m,n)=1$.

It is **completely multiplicative** if the equation holds without the coprimality condition.

Examples:

- $1(n)=1$ and $id_{k}(n)=n^k$ are completely multiplicative;
- $\tau(n)$, $\sigma_{k}(n)=\sum_{d\mid n}d^k$, and $\varphi(n)$ are multiplicative;
- $\tau$ is not completely multiplicative because $\tau(4)=3$, not $\tau(2)^{2}=4$.

A multiplicative function is determined by its values on prime powers because $n=\prod p^e$ has coprime prime-power factors.

<a id="section-21-2-dirichlet-convolution"></a>
## 2. Dirichlet convolution {#section-23-2-dirichlet-convolution}

For arithmetic functions $f,g$, define

$(f*g)(n)=\sum_{d\mid n} f(d)g(n/d)$.

Convolution is commutative by replacing $d$ with $n/d$. It is associative because both $(f*g)*h$ and $f*(g*h)$ sum $f(a)g(b)h(c)$ over ordered triples $abc=n$. The identity is

$\varepsilon(1)=1$, $\varepsilon(n)=0$ for $n>1$.

Do not confuse convolution with pointwise multiplication $f(n)g(n)$.

<a id="section-33-worked-convolution"></a>
### Worked convolution {#section-35-worked-convolution}

$\tau=1*1$, because each divisor contributes one. Also

$\sigma_{k}=1*id_{k}$,

since summing $id_{k}(n/d)$ over divisors is the same as summing $d^k$ after the divisor substitution.

<a id="section-41-3-multiplicativity-survives-convolution"></a>
## 3. Multiplicativity survives convolution {#section-43-3-multiplicativity-survives-convolution}

If $f,g$ are multiplicative and $\gcd(m,n)=1$, every divisor $d\mid mn$ factors uniquely as $d=d_{1}d_{2}$ with $d_{1}\mid m,d_{2}\mid n$. The convolution sum separates into a product, proving $f*g$ multiplicative.

Thus prime-power computation gives the global answer. For $n=\prod p^a$,

$\tau(n)=\prod(a+1)$,

$\sigma_{k}(n)=\prod(1+p^k+\ldots+p^{ak})$.

<a id="section-51-4-the-m-bius-function"></a>
## 4. The Möbius function {#section-53-4-the-m-bius-function}

Define

$\mu(n)=0$ if a square prime factor divides $n$; otherwise $\mu(n)=(-1)^r$ when $n$ is a product of $r$ distinct primes. It is multiplicative.

The fundamental identity is

$\sum_{d\mid n} \mu(d)=1$ if $n=1$, and $0$ otherwise.

For $n>1$, only squarefree divisors contribute. If $n$ has $r$ distinct prime factors, the sum is $(1-1)^r=0$. Therefore

$\mu*1=\varepsilon$.

The Möbius function is the convolution inverse of the constant-one function.

<a id="section-67-5-m-bius-inversion"></a>
## 5. Möbius inversion {#section-69-5-m-bius-inversion}

**Divisor-sum form.** If

$F(n)=\sum_{d\mid n} f(d)$,

then

$f(n)=\sum_{d\mid n} \mu(d)F(n/d)$.

In convolution notation, $F=1*f$; convolving with $\mu$ gives $f=\mu*F$.

<a id="section-79-worked-inversion-for-totients"></a>
### Worked inversion for totients {#section-81-worked-inversion-for-totients}

The integers $1,\ldots,n$ split by the value of $\gcd(k,n)$, giving

$\sum_{d\mid n} \varphi(d)=n$.

Thus $id_{1}=1*\varphi$, and inversion gives

$\varphi(n)=\sum_{d\mid n} \mu(d)n/d=n \prod_{p\mid n}(1-1/p)$.

<a id="section-89-6-summatory-inversion"></a>
## 6. Summatory inversion {#section-91-6-summatory-inversion}

For $x\ge1$, if functions on positive reals satisfy

$G(x)=\sum_{n\le x} F(x/n)$,

then

$F(x)=\sum_{n\le x} \mu(n)G(x/n)$.

Expanding the right side and grouping by products uses $\sum_{d\mid m}\mu(d)=\varepsilon(m)$. Floors belong to the formula when counting integers; silently replacing $\left\lfloor x/n \right\rfloor$ by $x/n$ changes an exact identity into an approximation.

<a id="section-101-7-convolution-inverses"></a>
## 7. Convolution inverses {#section-103-7-convolution-inverses}

An arithmetic function has a convolution inverse exactly when $f(1)\ne 0$. Solve recursively:

$g(1)=1/f(1)$,

$g(n)=-(1/f(1)) \sum_{d\mid n,d>1} f(d)g(n/d)$.

For a completely multiplicative $f$ with $f(1)=1$, its inverse is $\mu(n)f(n)$, because the convolution factors as $f(n)\sum_{d\mid n}\mu(d)$.

<a id="section-111-8-counting-with-gcd"></a>
## 8. Counting with gcd {#section-113-8-counting-with-gcd}

Many sums over gcd classes reduce to divisor convolution. If $H(n)=\sum_{1\le k\le n} F(\gcd(k,n))$, then grouping values with $\gcd(k,n)=d$ gives

$H(n)=\sum_{d\mid n} F(d) \varphi(n/d)$.

The formula is a convolution with $\varphi$ after a divisor reversal. Always test $n=1$ and a prime before trusting the orientation.

<a id="section-119-9-prime-power-calculus-for-convolution"></a>
## 9. Prime-power calculus for convolution {#section-121-9-prime-power-calculus-for-convolution}

For multiplicative functions, convolution can be computed locally. At a prime power,

$(f*g)(p^a)=\sum_{j=0}^a f(p^j)g(p^{a-j})$.

This is ordinary convolution of the two finite exponent sequences. Once the local table is known, multiplicativity assembles the value for every integer.

<a id="section-127-worked-local-product-tau-tau"></a>
### Worked local product: $\tau*\tau$ {#section-129-worked-local-product-tau-tau}

Since $\tau(p^j)=j+1$,

$(\tau*\tau)(p^a)=\sum_{j=0}^a(j+1)(a-j+1)$.

Put $k=j+1$; elementary power sums yield

$(\tau*\tau)(p^a)=(a+1)(a+2)(a+3)/6$.

For $p^{2}$, the value is $10$. At $n=12=2^{2}*3$, multiplicativity gives $10*4=40$, because the exponent-one local value is $(2*3*4)/6=4$. Directly expanding all divisors would reach the same answer but hide why the result factors.

The local method also makes inverses transparent. If $f(1)=1$ and $g=f^{-1}$ under convolution, then

$g(p^a)=-\sum_{j=1}^a f(p^j)g(p^{a-j})$.

This recurrence is often faster and less error-prone than listing all divisors of a large integer.

<a id="section-145-10-jordan-totients-and-primitive-tuples"></a>
## 10. Jordan totients and primitive tuples {#section-147-10-jordan-totients-and-primitive-tuples}

For positive integer $k$, the Jordan totient is

$J_{k}(n)=n^k \prod_{p\mid n}(1-p^{-k})$.

It counts ordered $k$-tuples of residues modulo $n$ whose entries together with $n$ have gcd one. The proof inserts the coprimality indicator:

$J_{k}(n)=\sum_{a_{1},\ldots,a_{k} \bmod n}\ \sum_{d\mid \gcd(a_{1},\ldots,a_{k},n)}\mu(d)$.

Switch sums. For each $d\mid n$, exactly $(n/d)^k$ tuples have every coordinate divisible by $d$. Hence

$J_{k}(n)=\sum_{d\mid n}\mu(d)(n/d)^k=(\mu*id_{k})(n)$.

It follows immediately that

$\sum_{d\mid n}J_{k}(d)=n^k$.

The case $k=1$ is Euler's totient. The case $k=2$ counts visible lattice points in a residue square: points whose coordinates have no common prime factor with the modulus.

<a id="section-165-worked-count"></a>
### Worked count {#section-167-worked-count}

For $n=12,k=2$,

$J_{2}(12)=12^{2}(1-1/4)(1-1/9)=144*(3/4)*(8/9)=96$.

This is not $\varphi(12)^{2}=16$. Requiring each coordinate individually to be a unit is stronger than requiring the pair and modulus to have collective gcd one.

<a id="section-173-11-squarefree-divisors-and-an-inclusion-exclusion-patte"></a>
## 11. Squarefree divisors and an inclusion-exclusion pattern {#section-175-11-squarefree-divisors-and-an-inclusion-exclusion-patte}

The function $2^{\omega(n)}$, where $\omega(n)$ is the number of distinct prime divisors, counts squarefree divisors. Indeed each prime is either selected or not. In convolution notation,

$2^{\omega}=\mu^{2}*1$.

At $p^a$ with $a\ge 1$, the right side is $\mu(1)^{2}+\mu(p)^{2}=2$; multiplicativity gives the general result.

A useful companion identity is

$\sum_{d\mid n}\mu(d)^{2}/\varphi(d)=n/\varphi(n)$.

Both sides are multiplicative, so it is enough to check a prime power. The left local value is $1+1/(p-1)=p/(p-1)$, equal to the right. This proof pattern—prove multiplicativity, check prime powers, reassemble—is a reusable alternative to global divisor manipulation.

<a id="section-187-12-ramanujan-sums-as-an-inversion-example"></a>
## 12. Ramanujan sums as an inversion example {#section-189-12-ramanujan-sums-as-an-inversion-example}

For positive $q$, define the finite exponential sum

$c_{q}(n)=\sum_{\substack{1\le a\le q\\ \gcd(a,q)=1}} \exp(2\pi ian/q)$.

Insert the coprimality indicator and sum a complete geometric progression. One obtains the integer formula

$c_{q}(n)=\sum_{d\mid \gcd(q,n)} d\mu(q/d)$.

Thus a complex-looking Fourier sum is controlled by gcd and Möbius data. For $q=6,n=4$, the common-divisor values are $1,2$, so

$c_{6}(4)=1*\mu(6)+2*\mu(3)=1-2=-1$.

This calculation anticipates character orthogonality: finite periodic information is often isolated by a Fourier sum, while inversion converts it back to divisor structure.

<a id="section-203-13-error-diagnostics-for-inversion"></a>
## 13. Error diagnostics for inversion {#section-205-13-error-diagnostics-for-inversion}

Three mistakes recur.

First, a claimed multiplicative formula is tested only on primes. Prime powers carry exponent information and must be checked. Second, $F(n)=\sum_{d\mid n}f(d)$ is inverted using $F(d)$ with the wrong Möbius argument without an explicit divisor substitution. Third, exact counts replace $\left\lfloor x/d \right\rfloor$ by $x/d$ without creating an error term.

A robust audit uses three fixtures: $n=1$, a prime square, and a product of two distinct primes. The first checks identities, the square checks repeated-prime behavior, and the product checks multiplicative separation.

<a id="section-211-14-primitive-words-and-necklace-inversion"></a>
## 14. Primitive words and necklace inversion {#section-213-14-primitive-words-and-necklace-inversion}

Möbius inversion also separates periodic objects from primitive ones. Fix an alphabet with $k$ symbols. There are $k^n$ words of length $n$. Call a word **primitive** when it is not obtained by repeating a shorter block.

Every word is a repetition of a unique shortest block, whose length $d$ divides $n$. If $P(d)$ counts primitive words of length $d$, then

$k^n=\sum_{d\mid n}P(d)$.

Möbius inversion gives

$P(n)=\sum_{d\mid n}\mu(d)k^{n/d}$.

A primitive word has exactly $n$ distinct cyclic rotations, so the number of aperiodic necklaces of length $n$ is $P(n)/n$. Integrality follows from the orbit argument, even though it is not obvious from the alternating divisor sum.

<a id="section-225-worked-binary-example"></a>
### Worked binary example {#section-227-worked-binary-example}

For binary words of length six,

$P(6)=2^{6}-2^{3}-2^{2}+2=54$.

There are $54/6=9$ aperiodic binary necklaces. The signs correspond to divisors $1,2,3,6$ through $\mu$; writing the exponents in the wrong orientation would incorrectly count blocks rather than repeated full words.

This example is a model for inversion problems: identify the cumulative population, prove a unique divisor-indexed decomposition, then invert. Applying Möbius because a divisor sum merely “looks present” is not enough.

<a id="section-235-15-menon-s-identity-a-gcd-sum-over-units"></a>
## 15. Menon's identity: a gcd sum over units {#section-237-15-menon-s-identity-a-gcd-sum-over-units}

For every positive $n$,

$\sum_{\substack{1\le a\le n\\ \gcd(a,n)=1}} \gcd(a-1,n)=\varphi(n)\tau(n)$.

Use the divisor identity $m=\sum_{d\mid m}\varphi(d)$ with $m=\gcd(a-1,n)$. After switching sums, the left side becomes

$\sum_{d\mid n}\varphi(d)\,\#\{a\in U(n):a\equiv 1 \bmod d\}$.

The reduction homomorphism $U(n)\to U(d)$ is surjective for $d\mid n$; prime-power lifting and CRT prove this locally and reassemble it. Its kernel therefore has size $\varphi(n)/\varphi(d)$. Each divisor contributes

$\varphi(d)*\varphi(n)/\varphi(d)=\varphi(n)$.

There are $\tau(n)$ divisors, proving the identity.

<a id="section-251-worked-check-at-twelve"></a>
### Worked check at twelve {#section-253-worked-check-at-twelve}

The units modulo $12$ are $1,5,7,11$. The gcd values of $a-1$ with $12$ are $12,4,6,2$, summing to $24$. The right side is $\varphi(12)\tau(12)=4*6=24$.

The proof shows why both restrictions matter. Summing over all residues changes the fiber count; replacing $\gcd(a-1,n)$ by $\gcd(a,n)$ makes every unit contribution one. A gcd sum should first be expanded into divisor indicators, after which the relevant homomorphism or congruence count becomes visible.

<a id="section-257-16-higher-divisor-functions-and-ordered-factorizations"></a>
## 16. Higher divisor functions and ordered factorizations {#section-259-16-higher-divisor-functions-and-ordered-factorizations}

Define the $k$-fold divisor function

$d_{k}=\underbrace{1*\cdots*1}_{k\text{ factors}}$.

Then $d_{k}(n)$ counts ordered $k$-tuples of positive integers $(a_{1},\ldots,a_{k})$ with product $n$. For a prime power $p^e$, such a tuple is determined by nonnegative exponents

$e_{1}+\ldots+e_{k}=e$.

Stars-and-bars gives

$d_{k}(p^e)=\binom{e+k-1}{k-1}$.

Multiplicativity assembles independent exponent allocations at every prime. The familiar divisor function is $d_{2}=\tau$; $d_{3}(12)$ equals

$\binom{2+2}{2}\binom{1+2}{2}=6\cdot 3=18$.

<a id="section-275-convolution-powers-and-inversion"></a>
### Convolution powers and inversion {#section-277-convolution-powers-and-inversion}

Associativity makes convolution powers unambiguous. Their Dirichlet series, where absolutely convergent, are $\zeta(s)^k$. The local generating identity

\[\sum_{e\ge 0}\binom{e+k-1}{k-1}x^e=(1-x)^{-k}.\]

is exactly the prime-power Euler factor.

For negative formal powers, coefficients become signed convolution inverses. One must not interpret a formal binomial expansion analytically outside $\lvert x\rvert<1$, but coefficient identities at each finite prime exponent remain algebraic. This separates the local combinatorial proof from the global convergence theorem.

<a id="section-285-ordered-versus-unordered-boundary"></a>
### Ordered versus unordered boundary {#section-287-ordered-versus-unordered-boundary}

$d_{k}$ counts ordered factors and allows ones. The unordered factorization count is a different, nonmultiplicative-looking partition problem. For $12$, triples $(1,2,6)$ contribute all six permutations when entries differ, whereas $(1,1,12)$ contributes only three. State the convention before using a factor-count function in an algorithm.

<a id="section-289-exercises-with-complete-solutions"></a>
## Divisor convolution is multiplication with a finite coefficient rule {#section-577-divisor-convolution-is-multiplication-with-a-finite-coe}

Pointwise multiplication and Dirichlet convolution combine the same two functions in different ways. At a prime $p$, pointwise multiplication gives $f(p)g(p)$, while convolution gives $f(1)g(p)+f(p)g(1)$. The two terms represent the two ordered factorizations $p=1\cdot p=p\cdot1$. At a square, the intermediate factorization $p^2=p\cdot p$ creates a third term. Remembering these factorizations is safer than treating the star as decorative notation.

For associativity, expand one bracket completely:
\[
((f*g)*h)(n)
=\sum_{ab=n}\sum_{cd=a}f(c)g(d)h(b)
=\sum_{cdb=n}f(c)g(d)h(b).
\]
Expanding $f*(g*h)$ gives the identical sum over ordered positive triples. Every sum is finite, so this proof uses no convergence theorem. Commutativity comes from swapping the two factors. The identity is $\epsilon$, because only the factorization with the argument of $\epsilon$ equal to one survives. The constant-one function has a very different effect: it accumulates all divisor values.

Suppose $f(1)\ne0$ and demand $f*g=\epsilon$. At $n=1$, the equation forces $g(1)=1/f(1)$. At $n>1$, isolate the summand $f(1)g(n)$; every other divisor $d>1$ leaves $n/d<n$. Thus
\[
g(n)=-\frac1{f(1)}\sum_{\substack{d\mid n\\d>1}}f(d)g(n/d)
\]
defines successive values using only already defined smaller arguments. Induction proves existence and uniqueness. If $f(1)=0$, the equation at one would read zero equals one, so no inverse exists. The condition is both necessary and sufficient, not merely a convenience in the recursion.

For example, if $f(1)=2$, $f(p)=3$, and $f(p^2)=5$, the equations give $g(1)=1/2$, $g(p)=-3/4$, and $g(p^2)=-(3(-3/4)+5/2)/2=-1/8$. Substitution checks the last coefficient: $2(-1/8)+3(-3/4)+5(1/2)=0$. These values need not be multiplicative, because the original $f(1)$ already violates the convention for a multiplicative function.

For multiplicative $f$, local prime-power inverses do assemble into a multiplicative inverse. Define a function $g$ by its prime-power recursive values, set $g(1)=1$, and multiply its values across distinct prime powers. Both $f$ and this $g$ are multiplicative; the divisor-pair proof makes $f*g$ multiplicative too. Its values are one at one and zero at every positive prime power, hence zero at every integer greater than one. Therefore $f*g=\epsilon$, and uniqueness identifies $g$ as the inverse. The proof explains why normalization at one must be checked before local factors are multiplied.

<a id="section-597-m-bius-inversion-is-a-finite-cancellation-mechanism"></a>
## Möbius inversion is a finite cancellation mechanism {#section-599-m-bius-inversion-is-a-finite-cancellation-mechanism}

For each positive integer $n$, the divisor sum of $\mu$ is the product of one factor $1-1$ for every distinct prime dividing $n$. A squarefree divisor chooses which primes contribute the minus signs; nonsquarefree divisors contribute zero. Thus the sum vanishes for $n>1$. At $n=1$ there are no primes, and the empty product is one. This is the exact cancellation $\mu*\mathbf1=\epsilon$, including its essential value at one.

If $F=\mathbf1*f$, convolving with $\mu$ and using associativity yields $f=\mu*F$. A direct proof displays the same cancellation without algebraic shorthand:
\[
\sum_{d\mid n}\mu(d)F(n/d)
=\sum_{ab\mid n}\mu(a)f(b)
=\sum_{b\mid n}f(b)\sum_{a\mid n/b}\mu(a)
=f(n).
\]
Only $b=n$ survives. The argument shows exactly why the arguments $d$ and $n/d$ occur together. Relabeling divisors exchanges their roles consistently; changing only one occurrence changes the formula.

The summatory version has a different indexing set. Suppose $F$ is defined for real arguments at least one and $G(x)=\sum_{n\le x}F(x/n)$. For $x\ge1$,
\[
\sum_{a\le x}\mu(a)G(x/a)
=\sum_{ab\le x}\mu(a)F(x/(ab))
=\sum_{m\le x}F(x/m)\sum_{a\mid m}\mu(a)
=F(x).
\]
Every argument of $F$ is at least one, and every displayed sum is finite. No extension to arguments below one or unjustified exchange of infinite sums is hidden here. If $F(x)=1$, then $G(x)=\lfloor x\rfloor$ and the identity becomes $\sum_{a\le x}\mu(a)\lfloor x/a\rfloor=1$. At $x=6$, the nonzero terms for indices $1,2,3,5,6$ are $6-3-2-1+1=1$. The index five contributes even though five is not a divisor of six. Keeping every integer index, rather than only divisors of six, matters in this summatory formula.

That contrast is useful: a divisor sum ranges over factors of one integer, whereas a summatory sum ranges over all integers below a real bound. The algebraic cancellation is related but the index sets are not interchangeable. In particular, replacing $\lfloor x/a\rfloor$ by $x/a$ changes an exact count and requires a separate error analysis. The finite inversion itself never makes that replacement.

<a id="section-621-jordan-totients-count-collective-coprimality"></a>
## Jordan totients count collective coprimality {#section-623-jordan-totients-count-collective-coprimality}

For a positive integer $k$, count ordered residue tuples $(x_1,\ldots,x_k)$ modulo $n$ with $\gcd(x_1,\ldots,x_k,n)=1$. This is collective coprimality: a prime dividing $n$ must not divide every coordinate simultaneously. It does not require each coordinate to be a unit. For example, modulo six the pair $(2,3)$ qualifies, although neither coordinate is individually invertible.

The indicator of this condition is $\sum_{d\mid\gcd(x_1,\ldots,x_k,n)}\mu(d)$. For each divisor $d$ of $n$, there are exactly $n/d$ residues divisible by $d$ in each coordinate, so summing the indicator gives
\[
J_k(n)=\sum_{d\mid n}\mu(d)(n/d)^k.
\]
The count uses all residue classes, including zero. At $n=1$ there is one tuple of the unique residue class, and its collective gcd with one is one. Hence $J_k(1)=1$, consistent with the empty product. No exceptional deletion of the zero tuple is appropriate at modulus one.

The identity says $J_k=\mu*\operatorname{id}_k$, where $\operatorname{id}_k(n)=n^k$. On a prime power $p^a$, only the divisors one and $p$ contribute, giving $p^{ak}-p^{(a-1)k}$ for $a\ge1$. Multiplicativity then gives
\[
J_k(n)=n^k\prod_{p\mid n}(1-p^{-k}).
\]
Convolving the divisor formula with the constant-one function recovers $\sum_{d\mid n}J_k(d)=n^k$. There is also a partition proof: a residue tuple has a unique common gcd $g$ with $n$, and dividing the coordinates and modulus by $g$ produces a collectively primitive tuple modulo $n/g$. Partitioning all $n^k$ tuples by that gcd yields the same sum.

For $n=6,k=2$, the product gives $36(1-1/4)(1-1/9)=24$. Inclusion-exclusion sees the same count: of the thirty-six pairs, nine have both coordinates even and four have both divisible by three; the all-zero pair belongs to both bad sets and must be added back once. Thus $36-9-4+1=24$. By contrast there are only $\varphi(6)^2=4$ pairs with both coordinates individually units. Confusing those two conditions loses twenty valid collectively primitive pairs.

The identity also explains why the exponent parameter is a positive integer in the counting interpretation. A complex exponent may define an arithmetic expression after additional conventions, but it no longer counts ordered coordinate tuples. Keep the count, the algebraic convolution, and any analytic continuation as separate assertions.

<a id="section-641-ramanujan-sums-become-integer-formulas-by-exact-orthogo"></a>
## Ramanujan sums become integer formulas by exact orthogonality {#section-643-ramanujan-sums-become-integer-formulas-by-exact-orthogo}

Let $q$ be positive and $n$ any integer, including zero or a negative integer. Insert the Möbius indicator of $\gcd(a,q)=1$ into the defining finite exponential sum:
\[
c_q(n)=\sum_{d\mid q}\mu(d)\sum_{\substack{1\le a\le q\\d\mid a}}
\exp(2\pi ian/q).
\]
Writing $a=db$ makes the inner sum range over $1\le b\le q/d$. Put $h=q/d$. If $h\mid n$, every term is one, so the inner sum is $h$. Otherwise its ratio $z=\exp(2\pi in/h)$ is not one but satisfies $z^h=1$; multiplication by $1-z$ gives a telescoping geometric sum equal to zero. This is finite orthogonality, with no limiting Fourier series involved.

Consequently only $h$ dividing $n$ survives, and substituting $h=q/d$ gives
\[
c_q(n)=\sum_{h\mid\gcd(q,n)}h\mu(q/h).
\]
For negative $n$, use its positive gcd with $q$; for zero, $\gcd(q,0)=q$. The formula immediately proves that $c_q(n)$ is an integer, despite its complex-valued defining summands. At $q=1$ the unique residue representative is one and the sum is $\exp(2\pi in)=1$. At $n=0$ it counts all units, giving $c_q(0)=\varphi(q)$. These checks catch a missing endpoint in the geometric sum.

For $q=p^a$, $a\ge1$, the only possible nonzero Möbius terms have $q/h=1$ or $p$. If $p^a\mid n$, their contributions are $p^a-p^{a-1}=\varphi(p^a)$. If $p^{a-1}\mid n$ but $p^a\nmid n$, only the second contributes and the result is $-p^{a-1}$. If $p^{a-1}\nmid n$, the result is zero. Thus $c_8(2)=0$, $c_8(4)=-4$, and $c_8(0)=4$. The middle case is not $\mu(8)$: the gcd retains information that a formula tested only at coprime arguments would miss.

For fixed $n$, this function is multiplicative in the positive modulus. If $u,v$ are coprime, every divisor of $\gcd(uv,n)$ uniquely splits as $ab$ with $a\mid\gcd(u,n)$ and $b\mid\gcd(v,n)$. Also $u/a$ and $v/b$ are coprime, so $\mu(uv/(ab))=\mu(u/a)\mu(v/b)$. The integer divisor formula therefore factors into $c_u(n)c_v(n)$. This proof avoids making an incorrect direct identification of exponential phases under CRT. The same coprime factorization mechanism underlies convolution multiplicativity and Jordan's product formula, now expressed through finite Fourier cancellation.

<a id="section-660-repetition-periods-and-free-rotation-explain-necklace-i"></a>
## Repetition periods and free rotation explain necklace inversion {#section-662-repetition-periods-and-free-rotation-explain-necklace-i}

A repetition block has to fill the word exactly. The ordinary linear word “ababa” has period two in the sense that letters two places apart agree where both are defined, but it is not a repetition of a length-two block. That convention cannot be used in the divisor identity. Use instead a cyclic word of positive length $n$, with positions indexed by $\mathbb Z/n\mathbb Z$, and call a rotation a period when it fixes every letter.

The rotations fixing a word form a subgroup: zero fixes it, sums of fixing rotations fix it, and inverses fix it. If there is a positive fixing rotation below $n$, choose the least one $d$; otherwise take $d=n$. Divide $n$ by $d$, writing $n=ad+r$ with $0\le r<d$. Both rotation by $n$ and rotation by $ad$ fix the word, so their difference $r$ fixes it. Minimality forces $r=0$. Thus $d\mid n$. The same division argument shows that every fixing rotation is a multiple of $d$.

The first $d$ letters form a block whose repetitions give the full word. That block cannot itself be a repetition of a shorter block, since then a smaller rotation would fix the full word. Conversely, a primitive block of length $d$ repeated $n/d$ times has least cyclic period $d$; if it had a smaller period, the subgroup argument and restriction to one block would give a shorter repetition of that block. The least period is unique, so counting all words by the length of their primitive block yields
\[
k^n=\sum_{d\mid n}P(d)
\]
for an alphabet of positive integer size $k$. Möbius inversion gives $P(n)=\sum_{d\mid n}\mu(d)k^{n/d}$.

For primitive words of length $n$, the $n$ rotations are distinct. Equality of two rotations would give a nonzero fixing rotation smaller than $n$, contradicting primitivity. Every rotation orbit therefore has exactly $n$ elements, so the number of primitive necklaces is $P(n)/n$. This proves divisibility as a consequence of a partition into equally sized orbits; it does not assume a quotient is an integer because the formula looks like a count.

For binary words of length six, the inversion gives $64-8-4+2=54$ primitive words and nine primitive necklaces. At length one every word is primitive, so $P(1)=k$ and each orbit has one element. If the alphabet has one symbol, there is one primitive word at length one and none at longer lengths, which also follows from the Möbius cancellation. These boundary cases make both the divisor decomposition and the orbit argument transparent.

<a id="section-676-unit-reduction-has-surjective-maps-with-explicitly-coun"></a>
## Unit reduction has surjective maps with explicitly counted fibers {#section-678-unit-reduction-has-surjective-maps-with-explicitly-coun}

Let $d\mid n$ be positive integers. Reduction of residue classes defines a map $U(n)\to U(d)$, because a number coprime to $n$ is coprime to every divisor $d$. The converse is false for an arbitrary lift: a number coprime to $d$ may share a prime with $n$ that does not divide $d$. We must prove that some lift is a unit, and count all such lifts.

Write $n=\prod_p p^{e_p}$ and $d=\prod_p p^{f_p}$, with $0\le f_p\le e_p$. When $f_p\ge1$, a unit class $b$ modulo $p^{f_p}$ has exactly $p^{e_p-f_p}$ lifts modulo $p^{e_p}$:
\[
b+jp^{f_p},\qquad 0\le j<p^{e_p-f_p}.
\]
They are distinct modulo $p^{e_p}$, and none is divisible by $p$. When $f_p=0$, the target modulus is one and imposes no restriction; all $\varphi(p^{e_p})$ local unit classes are available. In particular this factor is not $p^{e_p}$, because the nonunits still have to be removed.

For any chosen unit class modulo $d$, choose one of these allowed local lifts at every prime dividing $n$. CRT combines them into a unique class modulo $n$. It is a unit at every prime dividing $n$, hence belongs to $U(n)$ and reduces to the prescribed class. This proves surjectivity constructively. CRT also makes all choices independent, so every fiber has size
\[
\prod_{f_p>0}p^{e_p-f_p}
\prod_{f_p=0}\varphi(p^{e_p})
=\frac{\varphi(n)}{\varphi(d)}.
\]
The equality follows by dividing the prime-power formulas for $\varphi(n)$ and $\varphi(d)$, with $\varphi(1)=1$.

The equal-fiber assertion has a group interpretation too. If a unit lift $u$ of a target class is fixed, multiplication by $u$ maps the kernel fiber bijectively onto that target fiber; multiplication by $u^{-1}$ is its inverse. Surjectivity supplies the lift needed for this argument. Counting a kernel before proving a target has a preimage would leave a gap.

For example, reduce $U(20)$ modulo four. Its unit representatives are $1,3,7,9,11,13,17,19$. The target class one has fiber $\{1,9,13,17\}$ and the target class three has fiber $\{3,7,11,19\}$, each of size $8/2=4$. The integer five is also congruent to one modulo four, but it is not a unit modulo twenty. This is precisely why unrestricted residue lifts cannot replace the unit count.

At $d=1$, every unit maps to the unique class and the fiber has size $\varphi(n)$. At $n=1$, necessarily $d=1$; the empty prime product describes a single class, represented by either zero or one. With multiplication this one-element unit group has its unique element as identity. Its size is $\varphi(1)=1$, so neither surjectivity nor the fiber formula needs an exception.

<a id="section-700-gcd-weights-partition-all-residues-by-their-exact-commo"></a>
## Gcd weights partition all residues by their exact common divisor {#section-702-gcd-weights-partition-all-residues-by-their-exact-commo}

A weighted gcd sum over all residue representatives has a different domain from Menon's sum over units. Let $F$ be any complex-valued function on positive integers; multiplicativity is not needed. For each divisor $d$ of $n$, the representatives $1\le a\le n$ with $\gcd(a,n)=d$ are exactly
\[
a=db,\qquad 1\le b\le n/d,\qquad \gcd(b,n/d)=1.
\]
Division by $d$ proves both directions and gives a bijection, including the endpoint $a=n$, where $d=n$ and $b=1$. There are therefore $\varphi(n/d)$ representatives in this part. The disjoint parts cover every representative once, so
\[
\sum_{a=1}^nF(\gcd(a,n))
=\sum_{d\mid n}F(d)\varphi(n/d)=(F*\varphi)(n).
\]
At $n=1$ the single term is $F(1)$, as the formula requires.

For the ordinary gcd weight $F(d)=d$, call this sum $H(n)$. Since both $\operatorname{id}$ and $\varphi$ are multiplicative, $H$ is multiplicative. At a prime power $p^a$ with $a\ge1$, each term with $d=p^j$, $0\le j<a$, equals $p^j\varphi(p^{a-j})=p^{a-1}(p-1)$. The final term $d=p^a$ equals $p^a$. Hence
\[
H(p^a)=p^a+a\,p^{a-1}(p-1).
\]
The repeated identical contributions explain the coefficient $a$; overlooking the endpoint would omit the largest gcd.

For twelve this gives $H(4)=8$ and $H(3)=5$, hence $H(12)=40$. Directly the gcd values are $1,2,3,4,1,6,1,4,3,2,1,12$, whose sum is forty. Menon's sum at twelve is instead twenty-four because it restricts $a$ to units and weights $\gcd(a-1,12)$ rather than $\gcd(a,12)$. The different shift and different summation domain must both be retained. They explain why two superficially similar gcd identities require different partitions: exact common divisors for this sum, and unit-reduction fibers for the next one.

<a id="section-721-menon-s-sum-and-ordered-factorizations-use-different-pa"></a>
## Menon's sum and ordered factorizations use different partitions {#section-723-menon-s-sum-and-ordered-factorizations-use-different-pa}

For each unit representative $1\le a\le n$, the positive integer $\gcd(a-1,n)$ satisfies the totient divisor identity. This includes $a=1$, where $\gcd(0,n)=n$. Expanding it and interchanging finite sums gives
\[
\sum_{\substack{1\le a\le n\\(a,n)=1}}\gcd(a-1,n)
=\sum_{d\mid n}\varphi(d)\,
\#\{a\in U(n):a\equiv1\pmod d\}.
\]
The counted set is the identity fiber of unit reduction. Its proved size is $\varphi(n)/\varphi(d)$, so every divisor contributes exactly $\varphi(n)$. There are $\tau(n)$ divisors. This completes Menon's identity without assuming the unit map's surjectivity from the corresponding unrestricted residue map.

For $n=1$ the sum has the single representative $a=1$, with gcd equal to one, and the right side is $\varphi(1)\tau(1)=1$. For a prime $p$, the representative one contributes $p$ and the other $p-2$ units contribute one, giving $2p-2=(p-1)\cdot2$. These are structural checks of the same proof. For a composite modulus the gcd values need not be just one and $n$, which is why the divisor expansion is useful.

An ordered-factorization count illustrates another finite partition. Define $d_r(n)$ for a positive integer $r$ as the number of ordered positive tuples $(a_1,\ldots,a_r)$ with product $n$. Factors equal to one are allowed. Repeated convolution gives $d_r=\mathbf1*\cdots*\mathbf1$. If $n=p^e$, specifying the tuple is equivalent to choosing nonnegative exponents $b_1+\cdots+b_r=e$. Place $e$ identical marks in a row and insert $r-1$ separators, allowing empty groups; selecting the separator positions among $e+r-1$ places gives
\[
d_r(p^e)=\binom{e+r-1}{r-1}.
\]
At $e=0$ there is one all-one tuple, consistent with $d_r(1)=1$.

For a general integer, independently distribute each prime's exponent among the same $r$ labeled factors. Unique factorization makes this a bijection, not merely a heuristic multiplication of counts. Thus $d_r(n)$ is the product of these binomial coefficients over its prime powers. For instance $d_3(12)=\binom42\binom32=18$. Excluding factors equal to one would count a different set and invalidate this formula. These coefficient identities are finite; interpreting them through powers of a Dirichlet series requires the separate convergence contracts of the later chapter.

<a id="section-741-exercises-unit-fibers-and-ramanujan-boundary-cases"></a>

## Summary

<a id="section-574-chapter-summary"></a>
Multiplicative functions reduce global arithmetic to prime-power tables. Dirichlet convolution is the algebra of divisor sums, and Möbius is the inverse of the constant-one function. Inversion recovers hidden data from cumulative divisor data; exact floor terms and convolution orientation must remain visible.
<a id="section-575-divisor-convolution-is-multiplication-with-a-finite-coe"></a>

## Exercises {#section-291-exercises-with-complete-solutions}

<a id="section-291-1-prime-power-determination"></a>
### 1. Prime-power determination {#section-293-1-prime-power-determination}

Why do prime-power values determine a multiplicative function?

**Hint 1.** Factor a positive integer into coprime prime powers.

**Hint 2.** Repeated multiplicativity expresses its value as the product of their values.

<details><summary>Full solution</summary>

**Solution.** Unique factorization writes $n$ as a product of pairwise coprime prime powers; repeated multiplicativity makes $f(n)$ the product of their values.

</details>

<a id="section-305-2-tau-formula"></a>
### 2. Tau formula {#section-307-2-tau-formula}

Compute $\tau(360)$.

**Hint 1.** Factor 360 into prime powers.

**Hint 2.** Multiply one more than each exponent.

<details><summary>Full solution</summary>

**Solution.** $360=2^{3}*3^{2}*5$, so $\tau(360)=(3+1)(2+1)(1+1)=24$.

</details>

<a id="section-319-3-sigma-formula"></a>
### 3. Sigma formula {#section-321-3-sigma-formula}

Compute $\sigma(12)$.

**Hint 1.** List the positive divisors of twelve or use the prime-power sum formula.

**Hint 2.** The choices at two and three multiply independently.

<details><summary>Full solution</summary>

**Solution.** $12=2^{2}*3$, so $\sigma=(1+2+4)(1+3)=7*4=28$.

</details>

<a id="section-333-4-not-completely-multiplicative"></a>
### 4. Not completely multiplicative {#section-335-4-not-completely-multiplicative}

Show $\varphi$ is not completely multiplicative.

**Hint 1.** Compare the totient at four with the square of its value at two.

**Hint 2.** Complete multiplicativity would require equality even for noncoprime inputs.

<details><summary>Full solution</summary>

**Solution.** $\varphi(4)=2$, while $\varphi(2)\varphi(2)=1$.

</details>

<a id="section-347-5-convolution-value"></a>
### 5. Convolution value {#section-349-5-convolution-value}

Compute $(1*id_{1})(12)$.

**Hint 1.** The convolution sums the divisor values d at every divisor d of twelve.

**Hint 2.** This is the ordinary sum-of-divisors function.

<details><summary>Full solution</summary>

**Solution.** It is the sum of divisors of $12$: $1+2+3+4+6+12=28$.

</details>

<a id="section-361-6-identity-check"></a>
### 6. Identity check {#section-363-6-identity-check}

Prove $\varepsilon*f=f$.

**Hint 1.** The convolution identity is zero away from input one.

**Hint 2.** Only one divisor term survives.

<details><summary>Full solution</summary>

**Solution.** In the divisor sum, $\varepsilon(d)$ is nonzero only at $d=1$, leaving $f(n)$.

</details>

<a id="section-375-7-associativity-index"></a>
### 7. Associativity index {#section-377-7-associativity-index}

What objects index $(f*g)*h$?

**Hint 1.** Expand both nested divisor sums.

**Hint 2.** The common index set is ordered triples of positive integers with product n.

<details><summary>Full solution</summary>

**Solution.** Expanding produces one term $f(a)g(b)h(c)$ for every ordered triple of positive integers with $abc=n$; this symmetric description also indexes $f*(g*h)$.

</details>

<a id="section-389-8-m-bius-values"></a>
### 8. Möbius values {#section-391-8-m-bius-values}

Compute $\mu(1),\mu(6),\mu(12),\mu(30)$.

**Hint 1.** Use the definition by squarefree factorisation and the empty product at one.

**Hint 2.** A squared prime factor makes the value zero.

<details><summary>Full solution</summary>

**Solution.** They are $1,1,0,-1$: $6$ has two distinct primes, $12$ has a square factor, and $30$ has three distinct primes.

</details>

<a id="section-403-9-m-bius-divisor-sum"></a>
### 9. Möbius divisor sum {#section-405-9-m-bius-divisor-sum}

Compute $\sum_{d\mid 18}\mu(d)$ directly.

**Hint 1.** List the divisors of eighteen.

**Hint 2.** Only the squarefree divisors contribute, with signs from their distinct prime factors.

<details><summary>Full solution</summary>

**Solution.** Squarefree divisors are $1,2,3,6$, with values $1,-1,-1,1$; the sum is zero.

</details>

<a id="section-417-10-invert-a-constant-divisor-sum"></a>
### 10. Invert a constant divisor sum {#section-419-10-invert-a-constant-divisor-sum}

If $\sum_{d\mid n}f(d)=1$ for all $n$, find $f$.

**Hint 1.** The given divisor sum is the constant-one arithmetic function.

**Hint 2.** Convolve with the Möbius inverse of that function.

<details><summary>Full solution</summary>

**Solution.** Here $F=1$, so $f=\mu*1=\varepsilon$: $f(1)=1$ and $f(n)=0$ for $n>1$.

</details>

<a id="section-431-11-totient-divisor-sum"></a>
### 11. Totient divisor sum {#section-433-11-totient-divisor-sum}

Verify $\sum_{d\mid 12}\varphi(d)=12$.

**Hint 1.** Evaluate the totient at each divisor of twelve.

**Hint 2.** The sum partitions residues by their gcd with twelve.

<details><summary>Full solution</summary>

**Solution.** Totients at $1,2,3,4,6,12$ are $1,1,2,2,2,4$, summing to $12$.

</details>

<a id="section-445-12-totient-from-m-bius"></a>
### 12. Totient from Möbius {#section-447-12-totient-from-m-bius}

Compute $\varphi(18)$ using inversion.

**Hint 1.** Use n times the sum of Möbius of d divided by d.

**Hint 2.** Only the squarefree divisors of eighteen contribute.

<details><summary>Full solution</summary>

**Solution.** $18[\mu(1)/1+\mu(2)/2+\mu(3)/3+\mu(6)/6]=18(1-1/2-1/3+1/6)=6$.

</details>

<a id="section-459-13-coprime-pair-indicator"></a>
### 13. Coprime-pair indicator {#section-461-13-coprime-pair-indicator}

Prove $\mathbf{1}_{\gcd(a,b)=1}=\sum_{d\mid \gcd(a,b)}\mu(d)$.

**Hint 1.** Apply the Möbius divisor-sum identity to the gcd.

**Hint 2.** Its value is one exactly when that gcd equals one.

<details><summary>Full solution</summary>

**Solution.** The right side is the Möbius divisor sum of the gcd, equal to one exactly when that gcd is one and zero otherwise.

</details>

<a id="section-473-14-count-coprime-integers"></a>
### 14. Count coprime integers {#section-475-14-count-coprime-integers}

Use Exercise 13 to express $\varphi(n)$.

**Hint 1.** Sum the coprimality indicator over residues from one to n.

**Hint 2.** Interchange finite sums and count multiples of each divisor.

<details><summary>Full solution</summary>

**Solution.** Sum over $1\le k\le n$: $\varphi(n)=\sum_{d\mid n}\mu(d) \left\lfloor n/d \right\rfloor$. Since $d\mid n$, the floor is $n/d$, recovering the product formula.

</details>

<a id="section-487-15-inverse-of-id-1"></a>
### 15. Inverse of $id_{1}$ {#section-489-15-inverse-of-id-1}

Find the convolution inverse of $id_{1}(n)=n$.

**Hint 1.** Try the pointwise product of n with the Möbius function.

**Hint 2.** In the convolution, each term then has a common factor n.

<details><summary>Full solution</summary>

**Solution.** Complete multiplicativity gives inverse $\mu(n)id_{1}(n)=\mu(n)n$.

</details>

<a id="section-501-16-inverse-recursion"></a>
### 16. Inverse recursion {#section-503-16-inverse-recursion}

If $f(1)=2,f(2)=3$, find the first two values of its convolution inverse $g$.

**Hint 1.** The convolution at one must equal one.

**Hint 2.** At two there are exactly two divisor terms, and their sum must be zero.

<details><summary>Full solution</summary>

**Solution.** $g(1)=1/2$. At $2$, $f(1)g(2)+f(2)g(1)=0$, so $2g(2)+3/2=0$, giving $g(2)=-3/4$.

</details>

<a id="section-515-17-gcd-sum"></a>
### 17. Gcd sum {#section-517-17-gcd-sum}

Compute $\sum_{k=1}^{6} \gcd(k,6)$.

**Hint 1.** List the six gcd values or group them by their gcd.

**Hint 2.** The possible gcds are divisors of six.

<details><summary>Full solution</summary>

**Solution.** Directly the gcds are $1,2,3,2,1,6$, sum $15$. Grouping gives $\sum_{d\mid 6}d \varphi(6/d)=1*2+2*2+3*1+6*1=15$.

</details>

<a id="section-529-18-squarefree-indicator"></a>
### 18. Squarefree indicator {#section-531-18-squarefree-indicator}

Show $\mu(n)^{2}$ is the indicator of squarefree integers.

**Hint 1.** A squarefree integer has Möbius value plus or minus one.

**Hint 2.** Every nonsquarefree integer has value zero.

<details><summary>Full solution</summary>

**Solution.** If a square prime divides $n$, $\mu(n)=0$; otherwise $\mu(n)=\pm 1$, whose square is one.

</details>

<a id="section-543-19-pointwise-convolution-distinction"></a>
### 19. Pointwise/convolution distinction {#section-545-19-pointwise-convolution-distinction}

Compare $(\mu*1)(6)$ with $\mu(6)1(6)$.

**Hint 1.** The convolution is a divisor sum, while the other expression is one pointwise product.

**Hint 2.** Use the Möbius divisor-sum identity at six.

<details><summary>Full solution</summary>

**Solution.** The convolution is zero because $6>1$; the pointwise product is $\mu(6)=1$. They are different operations.

</details>

<a id="section-557-20-orientation-audit"></a>
### 20. Orientation audit {#section-559-20-orientation-audit}

If $F=1*f$, why may inversion be written with $\mu(d)F(n/d)$ or $\mu(n/d)F(d)$?

**Hint 1.** Replace each divisor d by n divided by d.

**Hint 2.** This is a bijection on the finite set of divisors.

<details><summary>Full solution</summary>

**Solution.** Divisors pair bijectively under $d \to n/d$. The two sums are the same after renaming, but a derivation should state that substitution rather than silently swapping arguments.

</details>


<a id="section-572-chapter-summary"></a>

<a id="section-743-exercises-unit-fibers-and-ramanujan-boundary-cases"></a>
### 21. NTP-14-E21 — Count the unit fibers before applying Menon {#section-745-ntp-14-e21-count-the-unit-fibers-before-applying-menon}

List the two fibers of $U(18)\to U(6)$, prove their common size from prime-power lifting, and evaluate Menon's sum at eighteen. Check the sum directly from the unit representatives as well.

**Hint 1.** Reduce each unit representative modulo six and group by its image.

**Hint 2.** The lifting fibers have equal size; then apply the proved fiber-count form of Menon's identity.

<a id="section-751-ntp-14-e22-three-values-of-a-ramanujan-sum"></a>
### 22. NTP-14-E22 — Three values of a Ramanujan sum {#section-753-ntp-14-e22-three-values-of-a-ramanujan-sum}

Prove $c_9(1)=0$, $c_9(3)=-3$, and $c_9(0)=6$ from the finite divisor formula. State why the zero argument and modulus-one case must not be dropped from that formula.

**Hint 1.** In the divisor formula retain only divisors shared by nine and the argument.

**Hint 2.** At argument zero every divisor qualifies, and modulus one contributes its one residue.

<a id="section-759-solutions-unit-fibers-and-ramanujan-boundary-cases"></a>

## Solutions: unit fibers and Ramanujan boundary cases {#section-761-solutions-unit-fibers-and-ramanujan-boundary-cases}

<a id="section-761-ntp-14-e21-count-the-unit-fibers-before-applying-menon-"></a>
### NTP-14-E21 — Count the unit fibers before applying Menon — solution {#section-763-ntp-14-e21-count-the-unit-fibers-before-applying-menon-}

<details><summary>Full solution</summary>

The target unit classes are one and five modulo six. Their fibers are respectively $\{1,7,13\}$ and $\{5,11,17\}$ modulo eighteen. At the prime three, reduction from $3^2$ to three has three unit lifts; at the prime two the source and target exponents agree, giving one lift. CRT therefore gives fiber size three, also $\varphi(18)/\varphi(6)=6/2$. Since $\tau(18)=6$, Menon's sum is $6\cdot6=36$. In the order $1,5,7,11,13,17$, the direct gcd values are $18,2,6,2,6,2$, whose sum is thirty-six.

</details>

<a id="section-769-ntp-14-e22-three-values-of-a-ramanujan-sum-solution"></a>
### NTP-14-E22 — Three values of a Ramanujan sum — solution {#section-771-ntp-14-e22-three-values-of-a-ramanujan-sum-solution}

<details><summary>Full solution</summary>

For argument one the only common divisor is one, with contribution $\mu(9)=0$. For argument three the possible divisors one and three contribute $0+3\mu(3)=-3$. For argument zero all divisors of nine occur, giving $0-3+9=6=\varphi(9)$. At modulus one the sum has one exponential term equal to one for every integer argument, and the divisor formula gives $1\mu(1)=1$. Dropping that term would break both the identity at one and the multiplicative product convention.

</details>

