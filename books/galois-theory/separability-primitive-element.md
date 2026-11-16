
# Separability and the Primitive Element Theorem

Repeated roots collapse choices that a degree calculation appears to permit. This chapter proves the derivative criterion, counts embeddings and obtains a primitive element under the exact separability hypothesis. Read [splitting fields and embedding extension](splitting-fields-normal-extensions.md) first.

## 1. Repeated roots and the formal derivative

A nonzero polynomial is **separable** over $F$ if it has no repeated root in a
splitting field. A root $\alpha$ is repeated exactly when

$f(\alpha)=0$ and $f'(\alpha)=0$.

Indeed, writing $f=(x-\alpha)^r g$ with $g(\alpha)\ne 0$, differentiation shows
$f'(\alpha)=0$ exactly when $r\ge 2$. Consequently

$f$ is separable iff $\gcd(f,f')=1$.

This criterion is computational and does not depend on which splitting field
was chosen.

## 2. Characteristic zero and characteristic p

Every irreducible polynomial over a characteristic-zero field is separable.
If irreducible $f$ had a repeated root, then $\gcd(f,f')$ would be nonconstant;
irreducibility would force $f|f'$, impossible because $\deg f'<\deg f$.

In characteristic $p$, the derivative can vanish identically: this occurs
exactly when every nonzero exponent is divisible by $p$, so

$f(x)=g(x^p)$.

Over $\mathbb{F}_{p}(t)$, the polynomial $x^p-t$ is irreducible but has derivative zero.
Indeed, Eisenstein at the prime $t$ in $\mathbb F_p[t][x]$, followed by
Gauss's lemma, proves irreducibility over $\mathbb F_p(t)$: its constant
coefficient is divisible by $t$ but not $t^2$, and its leading coefficient is $1$.
After adjoining $t^{1/p}$ it becomes $(x-t^{1/p})^p$, so it is inseparable.

## 3. Perfect fields and finite fields

A field is **perfect** if every algebraic extension is separable. Fields of
characteristic zero are perfect. A characteristic-$p$ field is perfect exactly
when the Frobenius map $a\to a^p$ is surjective.

To prove the criterion, suppose Frobenius is onto and an irreducible
nonconstant $f=\sum a_i x^{pi}$ has zero derivative. Write each $a_i=b_i^p$;
then $f=(\sum b_i x^i)^p$, contradicting irreducibility. Thus every
irreducible is separable. Conversely, if every algebraic extension is
separable, let $u^p=a\in F$ in an algebraic closure. The minimal polynomial of
$u$ over $F$ divides $x^p-a=(x-u)^p$. Separability forces its degree to be
one, so $u\in F$ and Frobenius is onto.

Every finite field is perfect: Frobenius is injective because fields have no
zero divisors, and an injective map of a finite set is surjective. Thus every
irreducible polynomial over a finite field has distinct roots.

## 4. Counting embeddings without assuming normality

An embedding of a field extension into an algebraic closure preserves the base but need not preserve the particular copy of the extension. This distinction is already visible for $\mathbb Q(\sqrt[3]2)$: the real cube root can be sent to either nonreal root inside $\mathbb C$, giving embeddings whose images are different cubic subfields. Only the real-root choice gives an automorphism of the original real field.

**Lemma 3.1 (Embedding bound).** If $E/F$ is finite of degree $n$, there are at most $n$ distinct $F$-embeddings of $E$ into an algebraic closure. For a simple extension $F(\alpha)/F$, the number is exactly the number of distinct roots of the minimal polynomial of $\alpha$.

*Proof.* An embedding must send $\alpha$ to a root of its minimal polynomial, and each such root defines exactly one embedding by the evaluation construction. This proves the simple assertion and its bound by the polynomial degree. For a finite extension choose a tower of simple adjunctions. Once an embedding on one stage has been chosen, its extensions correspond to roots of the coefficient-transported minimal polynomial of the next generator. That polynomial has the same degree as before, so there are at most that many choices. Multiplying the upper bounds along the finite tree gives the product of the simple extension degrees, namely $[E:F]$ by the tower law. Every whole-field embedding restricts to one path in that tree, so none is missed. ∎

Distinct roots matter here, not multiplicities. If a transported polynomial has degree $p$ but only one root of multiplicity $p$, it contributes one embedding choice, rather than $p$ choices.

**Theorem 3.2 (Separable degree criterion).** A finite extension $E/F$ is separable if and only if the number of its $F$-embeddings into an algebraic closure is $[E:F]$.

*Proof.* Suppose every element of $E$ is separable over $F$. In a finite generating tower, each generator's minimal polynomial over the preceding field divides its separable minimal polynomial over $F$, so it too has distinct roots. This property survives coefficient transport: a Bézout identity between the polynomial and its derivative transports to a Bézout identity in the image field. Each node of the embedding tree therefore has exactly as many extensions as the next relative degree. Multiplication gives exactly $[E:F]$ embeddings.

Conversely suppose the total count is $[E:F]$, and choose any $\alpha\in E$. Let $d=[F(\alpha):F]$ and let $s$ be the number of distinct roots of its minimal polynomial. Its $s$ embeddings each extend to at most $[E:F(\alpha)]$ embeddings of $E$, by the same tower bound. Therefore
$$
[E:F]\le s[E:F(\alpha)]\le d[E:F(\alpha)]=[E:F].
$$
Both inequalities must be equalities, so $s=d$. Thus $\alpha$ has separable minimal polynomial. Since $\alpha$ was arbitrary, $E/F$ is separable. ∎

This theorem also explains why a finite separable generating set suffices. If $E=F(\alpha_1,\ldots,\alpha_r)$ with every $\alpha_j$ separable over $F$, the forward embedding-tree argument still gives the full degree, and the converse shows every element of $E$ is separable. The definition quantifies over all elements, but the theorem reduces the task to a finite set of generators when one is available.

**Corollary 3.3 (Transitivity of finite separability).** If $F\subseteq K\subseteq E$ is finite, with $K/F$ and $E/K$ separable, then $E/F$ is separable.

*Proof.* There are $[K:F]$ base embeddings of $K$. For each, transport a finite simple-adjunction description of $E/K$ into the algebraic closure. Separability is preserved by coefficient isomorphism, so the same root-count argument gives exactly $[E:K]$ extensions of that embedding. Counting all branches gives $[K:F][E:K]=[E:F]$. Apply Theorem 3.2. ∎

The corollary is not a statement that every algebraic extension in positive characteristic is separable. Its two hypotheses must actually be established. Nor does it imply normality: two distinct embeddings can send the whole extension to different fields.

## 5. A complete primitive element argument

**Theorem 3.4 (Primitive element theorem).** Every finite separable extension $E/F$ has one generator: there is $\theta\in E$ such that $E=F(\theta)$.

*Proof for an infinite base.* First suppose $E=F(\alpha,\beta)$ and write its $n=[E:F]$ embeddings into an algebraic closure as $\sigma_1,\ldots,\sigma_n$. For $i\ne j$, equality
$$
\sigma_i(\alpha+c\beta)=\sigma_j(\alpha+c\beta)
$$
is possible for at most one $c\in F$. Indeed, if the two images of $\beta$ differ, the equality determines $c$ uniquely in the closure, with at most one such value in $F$. If their $\beta$ images agree, their $\alpha$ images must differ because the embeddings differ on a generating pair; then no value of $c$ works. Finitely many pairs therefore exclude only finitely many scalars.

Choose $c\in F$ outside that finite set and put $\theta=\alpha+c\beta$. The restrictions of the $n$ embeddings to $F(\theta)$ are distinct because their values on $\theta$ are distinct. Lemma 3.1 gives $[F(\theta):F]\ge n$. The inclusion $F(\theta)\subseteq E$ gives the reverse bound, so equality and the tower law force $E=F(\theta)$. Combine generators two at a time to handle any finite generating list. The combined intermediate extension remains separable, since its elements lie in the original separable extension. ∎

*Proof for a finite base.* Then $E$ is a finite field, because a finite-dimensional vector space over a finite field is finite. We prove that the finite multiplicative group $E^\times$ is cyclic. Let $m$ be the least common multiple of its element orders. For each prime power $\ell^a$ dividing $m$, choose an element whose order contains that prime power and raise it to remove the prime-to-$\ell$ factor. This supplies an element of order $\ell^a$. Products of these elements have order the product of their pairwise coprime orders: if a product of commuting elements of coprime orders has a power equal to one, each factor's power lies in the intersection of their cyclic subgroups, which is trivial. Repeating proves there is $g\in E^\times$ of order $m$.

Every element of $E^\times$ satisfies $x^m=1$. A degree-$m$ polynomial over a field has at most $m$ roots, so $|E^\times|\le m$. The powers of $g$ already give $m$ distinct elements, forcing equality and $E^\times=\langle g\rangle$. The field $F(g)$ therefore contains every nonzero element of $E$ as well as zero, so $F(g)=E$. ∎

The finite-base proof is stronger than needed: every finite extension of a finite field is simple, and perfection already supplies separability. The infinite-base argument depends on finding a scalar outside a finite exceptional set; it would be invalid to make that choice over a finite base without a different argument.

**Example 3.5 (Recovering two generators from one).** In $E=\mathbb Q(\sqrt2,\sqrt3)$ set $\theta=\sqrt2+\sqrt3$. Since
$$
(\sqrt3+\sqrt2)(\sqrt3-\sqrt2)=1,
$$
we have $\theta^{-1}=\sqrt3-\sqrt2$. Thus
$$
\sqrt3=(\theta+\theta^{-1})/2,
\qquad \sqrt2=(\theta-\theta^{-1})/2.
$$
Both original generators are rational expressions in $\theta$, proving $E=\mathbb Q(\theta)$ directly. Squaring twice gives $\theta^4-10\theta^2+1=0$. The preceding chapter proved $[E:\mathbb Q]=4$, so this monic quartic is the minimal polynomial. A polynomial relation alone would only have provided an upper bound; generator recovery and the known degree prove equality.

**Example 3.6 (A derivative calculation in characteristic three).** Over $\mathbb F_3$, take $f=x^4-x+1$. Its derivative is $x^3-1=(x-1)^3$. The only possible common root of $f$ and $f'$ is therefore 1, but $f(1)=1$. Thus their gcd is one and $f$ is separable, whether or not one has first determined its irreducible factors. This calculation tests repeated roots directly; irreducibility is a different question.

**Example 3.7 (Pure inseparability with a primitive element).** In $F=\mathbb F_p(t)$ let $u^p=t$. Eisenstein at $t$ proves $x^p-t$ irreducible, so $[F(u):F]=p$. In the larger field the polynomial is $(x-u)^p$, so it has just one distinct root. There is only one $F$-embedding of $F(u)$ into an algebraic closure, namely the one fixing $u$. Nevertheless the extension is simple by its displayed form. Thus the primitive element theorem is a sufficient condition for simplicity; an inseparable extension need not fail to be simple. What fails in this example is the full embedding count.

## 6. Applying the three criteria in the right order

To analyse a finite extension, first establish its degree, then decide separability, then ask whether embeddings preserve its image. Degree is linear algebra. Separability is a distinct-root question, often answered by the derivative gcd or by perfection of the base. Normality is a closure-under-conjugates question, answered by splitting fields or the embedding criterion. A finite normal separable extension will have enough automorphisms to recover its degree.

A single generator can simplify calculations without proving any of those other properties. The field $\mathbb Q(\sqrt[3]2)$ is simple and separable but not normal. The field $\mathbb F_p(t^{1/p})/\mathbb F_p(t)$ is simple and normal but not separable. The biquadratic field of Example 3.5 is simple, normal and separable. These examples will keep the hypotheses visible when the next chapter passes from embeddings into a closure to automorphisms of one field.


## 7. A finite-field model with every embedding visible

**Example 3.8 (Two elements, two root images).** Let $E=\mathbb F_2[u]/(u^2+u+1)$. The polynomial has no root in $\mathbb F_2$: its values at zero and one are both one. A quadratic without a root is irreducible, so $E$ is a field of degree two, with four elements $0,1,u,u+1$. The relation $u^2=u+1$ gives $u^3=u(u+1)=u^2+u=1$. Thus the nonzero elements are $1,u,u^2$, and $u$ generates both the multiplicative group and the field extension.

The derivative of $x^2+x+1$ in characteristic two is one, proving separability. Its two roots in $E$ are $u$ and $u+1$, since their sum is one and their product is $u(u+1)=1$. Each root choice defines an embedding. The nonidentity one is Frobenius, $a\mapsto a^2$: it sends $u$ to $u+1$, sends $u+1$ to $(u+1)^2=u$, and fixes zero and one. Squaring twice therefore fixes every element, whereas squaring once does not fix $u$.

There are exactly two embeddings because the minimal polynomial has exactly two distinct roots; both land in $E$, so both are automorphisms. The example exhibits simplicity, separability and normality separately: the quotient presentation supplies a field generator, the derivative supplies separability, and the presence of both roots supplies normality. None of those statements is being inferred solely from a short multiplication table.

Compare it with Example 3.7. Both extensions have a single displayed generator, and both are splitting fields of the generator's minimal polynomial. In the four-element field there are as many distinct root images as the extension degree. In the purely inseparable example all the degree is concentrated in one repeated root. This is exactly the distinction that the derivative and embedding count were designed to detect. The next chapter can now use automorphisms without silently replacing a root's multiplicity by a number of different maps.

## A finite extension with no primitive element

Pure inseparability can genuinely prevent simplicity, even though the one-generator example above is already simple. Let u,v be independent transcendental elements over F_p, put E=F_p(u,v) and F=F_p(u^p,v^p). Then E/F has degree p².

To justify the degree, group polynomial monomials by their two exponents modulo p. This gives the products u^i v^j, with both exponents from zero through p−1, as a spanning list over F. A rational function is handled by multiplying its denominator by its own p−1 power: the resulting denominator is a p-th power in F, and the numerator can again be grouped by exponent residues. Thus the same finite list spans the entire rational-function field.

For independence, suppose a linear relation with coefficients in F existed. Clear their denominators in F_p[u^p,v^p]. Each coefficient then contains only monomials whose exponents are multiples of p. Multiplication by its distinct u^iv^j shifts those exponent pairs into a different residue class. No monomial from one class can cancel a monomial from another, so every polynomial coefficient vanishes. This proves the p² basis claim.

Every a∈E has a^p∈F, because Frobenius takes rational expressions in u,v to rational expressions in their p-th powers. Hence a satisfies a degree-p polynomial over F, and F(a) has degree at most p. No single a can generate the degree-p² extension E. This is an actual failure of the primitive-element conclusion, not merely a failure of the particular sum construction used in its proof.

The only F-embedding of E into an algebraic closure fixes u and v, since each has just one possible p-th root image. Thus the automorphism group is trivial although the extension has degree p². It is also normal: every irreducible minimal polynomial of one of its elements has its only distinct root already in E, because it divides a polynomial of the form X^p−a^p. The example simultaneously separates normality from separability, degree from embedding count, and finite generation from a single generator.

The monomial calculation also explains why two independent parameters were used. Each new p-th root contributes another independent block of exponent choices; the condition that every individual element has p-th power in the base cannot compress both blocks into one simple degree-p field.

Separability of a polynomial survives extension of its coefficient field. A polynomial and its derivative are coprime exactly when a polynomial Bézout combination equals one. That same combination remains valid over every larger field, excluding a repeated root there. Irreducibility need not survive: x²−2 factors after adjoining its square root, but the two linear factors remain distinct in characteristic zero. Separability of a product needs an additional condition, however. Two individually separable polynomials can share a root. The product of x²−1 and x−1 repeats the root one in characteristic different from two. Thus one must distinguish an element's minimal polynomial, the factorisation of a particular polynomial, and the common-root condition between separate factors.

## Exercises

### Exercise 3.1 — Repeated-root criterion
Prove $(x-\alpha)^2|f$ iff $f(\alpha)=f'(\alpha)=0$.
<a id="galois-separability-ex-1"></a>

Prove $(x-\alpha)^2|f$ iff $f(\alpha)=f'(\alpha)=0$.

<details>
<summary>Hint</summary>

Factor out one copy of x−α and differentiate the resulting product.

</details>

<details>
<summary>Solution</summary>

Divide $f=(x-\alpha)q+r$. The first equality makes $r=0$.
Differentiating gives $f'=q+(x-\alpha)q'$, so $f'(\alpha)=q(\alpha)$. This is zero
exactly when $(x-\alpha)|q$, equivalently when the square divides $f$.

</details>

### Exercise 3.2 — A separability computation
Is $x^4-1$ separable over $\mathbb{F}_{3}$?
<a id="galois-separability-ex-2"></a>

Is $x^4-1$ separable over $\mathbb{F}_{3}$?

<details>
<summary>Hint</summary>

Compute the derivative in characteristic three and use Euclid.

</details>

<details>
<summary>Solution</summary>

Its derivative is $4x^3=x^3$. Since $x$ does not divide
$x^4-1$, the gcd is one. Therefore it is separable.

</details>

### Exercise 3.3 — Derivative zero
Characterize polynomials with zero derivative in characteristic $p$.
<a id="galois-separability-ex-3"></a>

Characterize polynomials with zero derivative in characteristic $p$.

<details>
<summary>Hint</summary>

In characteristic p, the scalar n vanishes exactly when p divides n.

</details>

<details>
<summary>Solution</summary>

The coefficient of $x^{n-1}$ in $f'$ is $n a_n$. It vanishes
for every $n$ precisely when each nonzero $a_n$ has $p|n$. Hence exactly the
$p$-divisible powers occur and $f(x)=g(x^p)$.

</details>

### Exercise 3.4 — An inseparable polynomial
Show $x^p-t$ over $\mathbb{F}_{p}(t)$ is not separable.
<a id="galois-separability-ex-4"></a>

Show $x^p-t$ over $\mathbb{F}_{p}(t)$ is not separable.

<details>
<summary>Hint</summary>

Use the characteristic-p binomial identity after adjoining a pth root.

</details>

<details>
<summary>Solution</summary>

Its derivative is zero. In a field containing $u$ with $u^p=t$,
the binomial identity in characteristic $p$ gives $x^p-t=(x-u)^p$, so its only
root has multiplicity $p$.

</details>

### Exercise 3.5 — Finite fields are perfect
Prove Frobenius is surjective on a finite field.
<a id="galois-separability-ex-5"></a>

Prove Frobenius is surjective on a finite field.

<details>
<summary>Hint</summary>

First prove injectivity, then use finiteness of the underlying set.

</details>

<details>
<summary>Solution</summary>

If $a^p=b^p$, then $(a-b)^p=0$, hence $a=b$; Frobenius is
injective. Every injective self-map of a finite set is surjective.

</details>

### Exercise 3.6 — Roots of $x^{q^n}-x$
Why are all elements of $\mathbb{F}_{q^n}$ roots?
<a id="galois-separability-ex-6"></a>

Why are all elements of $\mathbb{F}_{q^n}$ roots?

<details>
<summary>Hint</summary>

Apply Lagrange to the nonzero multiplicative group; handle zero separately.

</details>

<details>
<summary>Solution</summary>

Zero is immediate. Its nonzero multiplicative group has order
$q^n-1$, so Lagrange gives $a^{q^n-1}=1$; multiplying by $a$ gives
$a^{q^n}=a$.

</details>

### Exercise 3.7 — No repeated finite-field roots
Show $x^{q^n}-x$ has distinct roots.
<a id="galois-separability-ex-7"></a>

Show $x^{q^n}-x$ has distinct roots.

<details>
<summary>Hint</summary>

Differentiate before using the gcd criterion.

</details>

<details>
<summary>Solution</summary>

In characteristic $p$, $q^n$ is zero as a field element, so the
derivative is $-1$. Its gcd with the polynomial is one, proving separability.

</details>

### Exercise 3.8 — Count embeddings of a simple separable extension
If the separable minimal polynomial of $\alpha$ has degree $n$, count the
$F$-embeddings of $F(\alpha)$ into a splitting field.
<a id="galois-separability-ex-8"></a>

If the separable minimal polynomial of $\alpha$ has degree $n$, count the
$F$-embeddings of $F(\alpha)$ into a splitting field.

<details>
<summary>Hint</summary>

Use the one-to-one correspondence between root images and simple-extension embeddings.

</details>

<details>
<summary>Solution</summary>

Each embedding must send $\alpha$ to one of the $n$ distinct
roots. Conversely the extension-of-embeddings construction gives one embedding
for each root. Thus there are exactly $n$.

</details>

### Exercise 3.9 — Recovering generators
<a id="galois-separability-ex-9"></a>

Let θ=√2+√5. Prove Q(θ)=Q(√2,√5) and find its minimal polynomial.

<details>
<summary>Hint</summary>

Multiply θ by √5−√2, and then recover both square roots.

</details>

<details>
<summary>Solution</summary>

The product is 3, so 3/θ=√5−√2. Hence √5=(θ+3/θ)/2 and √2=(θ−3/θ)/2, proving equality of fields. Squaring θ²=7+2√10 gives θ⁴−14θ²+9=0. The biquadratic field has degree four: √5 is not in Q(√2), since squaring a+b√2 would force a²=5 or b²=5/2. Both are impossible rational squares. Therefore this quartic relation is the minimal polynomial.

</details>

### Exercise 3.10 — A bad scalar
<a id="galois-separability-ex-10"></a>

For α=√2 and β=√3, explain exactly why c=0 fails in θ=α+cβ, while c=1 succeeds.

<details>
<summary>Hint</summary>

Compare generated degrees for zero, then recover the generators for one.

</details>

<details>
<summary>Solution</summary>

For c=0 the proposed element is √2 and generates only a quadratic subfield of the degree-four biquadratic field. Its images do not distinguish embeddings differing only on √3. For c=1, Example 3.5 recovers both generators using θ and θ⁻¹, so the generated field has degree four. The existence theorem permits finitely many bad scalars and does not claim all linear combinations work.

</details>

### Exercise 3.11 — Subextensions inherit separability
<a id="galois-separability-ex-11"></a>

If E/F is finite separable and F⊆K⊆E, prove K/F and E/K are separable.

<details>
<summary>Hint</summary>

For the first statement use the definition; for the second divide minimal polynomials.

</details>

<details>
<summary>Solution</summary>

Every element of K is an element of E and therefore has separable minimal polynomial over F, proving K/F separable. For α∈E, its minimal polynomial over K divides its minimal polynomial over F by polynomial division and evaluation. A divisor of a polynomial with distinct roots has distinct roots. Thus every α is separable over K, giving E/K separable.

</details>

### Exercise 3.12 — A normal inseparable field
<a id="galois-separability-ex-12"></a>

For uᵖ=t over F=F_p(t), show F(u)/F is normal but has an automorphism group of order one, and identify the failed hypothesis in the degree count.

<details>
<summary>Hint</summary>

It is a splitting field, though its defining polynomial has only one distinct root.

</details>

<details>
<summary>Solution</summary>

The irreducible polynomial xᵖ−t equals (x−u)ᵖ in F(u)[x], so F(u) is its splitting field and is normal. Any F-automorphism must take u to a root of the same polynomial; its only root is u, so every automorphism fixes the generator and is the identity. The extension degree is p by Eisenstein. Separability fails, so normality alone cannot imply that the automorphism group has order equal to the degree.

</details>

## Summary

Separability counts distinct roots, and the derivative gcd detects repeated roots over any characteristic. Finite separable extensions have exactly as many embeddings as their degree and admit one field generator. Neither a primitive element nor normality alone guarantees the other hypotheses. The next chapter studies fixed fields and the automorphism count that makes the Galois correspondence possible.
