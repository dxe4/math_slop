var e=`---
parent_id: book-finite-algebra-computation
chapter_id: polynomials-finite-fields-factorisation
title: "Polynomials over Finite Fields: Factorisation"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Polynomials over Finite Fields: Factorisation

Factoring a polynomial means finding irreducible factors with their multiplicities, not only finding some roots in the base field. Over a finite field, Frobenius converts this task into exact gcds and a linear kernel. Repeated factors require an additional characteristic-p step, because formal differentiation can erase all visible coefficients of a nonconstant polynomial.

Prepare [finite-field arithmetic](finite-fields-construction-arithmetic.md), polynomial Euclidean algorithms, unique factorisation and [Frobenius structure](/books/library-book-galois-theory/finite-fields-galois-groups/). Throughout k=F_q has characteristic p and f∈k[x] is nonzero. Divide out its nonzero leading coefficient first, recording that unit separately, so the factorisation problem below has monic input.

## 1. Division and the multiplicity problem

A factorisation certificate consists of monic irreducibles hᵢ, positive multiplicities mᵢ and the original leading unit c, with f=c∏hᵢ^mᵢ. Equality can be established by exact polynomial multiplication. Irreducibility of each output needs its own argument, such as the Frobenius/gcd criterion; a successful reconstruction alone would also accept the trivial output f itself.

**Lemma 3.1 (Squarefree criterion).** A nonconstant polynomial f is squarefree exactly when gcd(f,f′)=1. If f′=0 in characteristic p, all nonzero exponents of f are divisible by p.

*Proof.* In a splitting field, write f=(x−α)^m g with g(α)≠0. Differentiating shows that f′(α)=0 exactly when m≥2. Thus a common root of f and f′ is precisely a repeated root, and a nonconstant gcd detects it. For the second assertion, the coefficient of x^(j−1) in f′ is j times the coefficient of xʲ. It vanishes for each j exactly when every nonzero exponent is divisible by p. ∎

Finite fields are perfect, so a zero-derivative polynomial is a p-th power in k[x]. Taking p-th roots of its coefficients and dividing every exponent by p gives the root polynomial. Over k=F_(pʳ), the coefficient root of a is a^(p^(r−1)), because its p-th power is a^(pʳ)=a. This is an exact finite-field operation. It would fail over an arbitrary imperfect coefficient field without a separate root-existence argument.

## 2. Squarefree decomposition with multiplicities

**Theorem 3.2 (Finite squarefree reduction).** The following procedure separates the non-p-divisible multiplicities and recursively handles the remaining p-divisible ones. Let c=gcd(f,f′), w=f/c and i=1. While w≠1, set y=gcd(w,c), z=w/y, record z with multiplicity i when z≠1, then replace w by y and c by c/y and increase i. After this loop, if c≠1, take its p-th root, decompose it recursively and multiply all resulting multiplicities by p.

*Proof.* Write the unknown true irreducible factorisation formally as ∏h^m to analyse one component. Every irreducible over a finite field is separable. If p does not divide m, the exponent of h in gcd(f,f′) is m−1, so its exponent in w is one. Each loop removes one copy from c until i=m, at which point h remains in w but not in y and is emitted in z with that multiplicity. Before that stage its contribution to z is absent.

If p divides m, differentiation removes the term that would have detected one fewer copy; the exponent in c is m and the exponent in w is zero. This component survives unchanged in the final c. Thus all exponents left there are multiples of p, making it a p-th power. Taking a p-th root reduces each surviving exponent by p and strictly reduces positive polynomial degree. Recursion therefore terminates, and multiplying multiplicities by p restores the original exponents. These component calculations prove that every factor is returned exactly with its correct multiplicity. ∎

The recorded z can still contain several different irreducibles, but it is squarefree. The next sections split those squarefree products. Unit polynomials are skipped rather than reported as irreducible factors. The degree decreases or an integer multiplicity counter advances only up to an existing finite exponent, so the whole reduction is finite.

**Worked example 3.3 (A derivative that hides every factor).** Over F₂, f=x⁴+1=(x+1)⁴ has derivative zero. The first square-root extraction gives x²+1, again of derivative zero. The second gives x+1. Its factorisation is already irreducible, and restoring the two factors of the characteristic gives multiplicity four. A routine that treats f′=0 as “constant polynomial” would miss the whole factorisation.

## 3. The Berlekamp fixed algebra

Now assume f is monic squarefree of degree n, with distinct irreducible factors h₁,…,h_r. Set A=k[x]/(f), an n-dimensional k-vector space. It need not be a field.

**Theorem 3.4 (Fixed-algebra dimension).** The map T:A→A given by a↦a^q is k-linear, and
$$B=\\ker(T-I)$$
has dimension r. In particular a squarefree f is irreducible exactly when dim B=1.

*Proof.* The q-power map respects sums and products in characteristic p, and fixes all base coefficients, so it is k-linear. By the Chinese remainder theorem,
$$A\\cong\\prod_{i=1}^r k[x]/(h_i)\\cong\\prod_{i=1}^r F_{q^{\\deg h_i}}.$$
In each field factor, the elements satisfying a^q=a are exactly F_q. Thus B corresponds to the product F_qʳ, whose dimension over k is r. A squarefree polynomial has one irreducible factor precisely when it is irreducible, proving the last assertion. ∎

To compute T, use the basis 1,x,…,xⁿ⁻¹. Its j-th column is the coefficient vector of x^(jq) modulo f, where j begins at zero. Subtract the identity matrix and find its kernel by exact elimination over the specified coefficient field. The column convention matters: a row-based implementation must transpose every related interpretation consistently.

The matrix has n rows and n columns. Modular powering supplies its columns with finite reductions, and ordinary elimination uses O(n³) field operations. This is a field-operation model, not a complete bit-complexity bound when q itself grows. Enumerating all q base elements later likewise costs q operations and should not be described as polynomial in log q without further work.

## 4. Why kernel elements split the factors

For b∈B, its image modulo each hᵢ is a scalar cᵢ∈k. Therefore gcd(f,b−c) is the product of exactly those hᵢ with cᵢ=c. A nonconstant fixed element separates at least two components.

**Theorem 3.5 (Deterministic refinement).** Let b₁,…,b_r be any k-basis of B. Starting with the list {f}, refine every current factor u by the gcds gcd(u,bⱼ−c) over every bⱼ and c∈k, discarding unit factors. After all refinements the list consists of the distinct irreducible factors of f.

*Proof.* Every current factor is initially and remains a product of some of the hᵢ. The gcd for bⱼ−c groups exactly those components having that scalar value, so refinement never loses or changes a component. If two different components were never separated, they would have equal values on every basis vector bⱼ and hence on every member of B. But the product description B≅kʳ contains a coordinate indicator equal to one on one component and zero on the other, contradiction. Thus each final block contains one irreducible factor. ∎

Here is an inert reference program in mathematical pseudocode. It assumes exact coefficient operations, polynomial remainder, gcd and linear-kernel routines with the contracts already stated.

\`\`\`text
factor_squarefree(f):
    require f is monic and degree(f) > 0
    require gcd(f, derivative(f)) == 1
    Q = matrix with column j equal to remainder(x^(j*q), f)
    basis = linear_kernel(Q - identity_matrix(degree(f)))
    factors = [f]
    for b in basis:
        for c in coefficient_field:
            refined = []
            for u in factors:
                g = monic_gcd(u, b - c)
                if g == 1 or g == u:
                    append u to refined
                else:
                    append g and u/g to refined
            factors = refined
    return factors
\`\`\`

At each proper split, the two returned factors are coprime because f is squarefree. The current product stays f. There can be at most n final nonconstant factors. Processing a constant basis vector may do nothing, which is harmless. The program is a direct finite implementation of the theorem; no execution results are being asserted.

**Worked example 3.6 (A full Berlekamp calculation).** Over F₂ take f=x³+1=(x+1)(x²+x+1). Its derivative is x² and its gcd with f is one. In A, x³=1. Squaring 1,x,x² gives 1,x²,x, respectively, so the Frobenius matrix has columns (1,0,0), (0,0,1), (0,1,0). The kernel of Q−I has basis 1 and b=x+x².

For b, reduction modulo x+1 gives zero, while reduction modulo x²+x+1 gives one. Consequently gcd(f,b)=x+1 and gcd(f,b+1)=x²+x+1. Both factors are irreducible, the second having no root in F₂, so the factorisation is complete. Its two kernel dimensions match its two irreducible factors, and multiplying the outputs gives f exactly.

**Worked example 3.7 (Why squarefreeness is a hypothesis).** For f=(x+1)²=x²+1 over F₂, a residue is a₀+a₁x and its square is a₀+a₁. Equality with the original residue forces a₁=0, so the fixed algebra has dimension one. Yet f is not irreducible. The CRT proof used a product of fields for a squarefree modulus; without that hypothesis the quotient has nilpotents and the dimension-one conclusion cannot be used as the stated irreducibility criterion.

## 5. Distinct degrees and the result contract

The universal factorisation x^(qᵈ)−x also groups factors by degree. On a remaining squarefree product containing no factors of smaller degree, gcd with that universal polynomial extracts precisely its degree-d factors. Removing them and increasing d is distinct-degree factorisation. A subsequent equal-degree splitting algorithm, such as the deterministic refinement above, separates the components of each block.

Randomised alternatives require their own sampling and success-probability hypotheses. A proper factor returned by a gcd is exact, but repeated failure of random choices does not prove irreducibility. This chapter's exhaustive finite refinement avoids that uncertainty at the cost of iterating over the entire coefficient field.

For final output, keep the leading unit, multiplicities and monic factors. Verify the mathematical reconstruction by expansion and supply irreducibility certificates or the proved complete-refinement argument. These are algorithmic result contracts, not claims that any project test suite was run. A caller receiving a partial list must be told it is partial; an unfinished search cannot silently report a product as a complete factorisation.

## 6. A complete odd-characteristic calculation

**Worked example 3.8 (Refining a quartic over $F_3$).** Take $f=x^4-1$. Its derivative is $x^3$, because four equals one in $F_3$, and its gcd with $f$ is one. The polynomial is squarefree. Distinct-degree extraction first takes
$$\\gcd(f,x^3-x)=x^2-1,$$
since $x^3-x=x(x-1)(x+1)$, zero is not a root of $f$, and both one and minus one are roots. The remaining factor is $x^2+1$, which has no root in $F_3$ because its possible squares are zero and one, never minus one. Thus the irreducibles are $x-1$, $x+1$ and $x^2+1$.

The linear-kernel method obtains the same result without starting from that factorisation. In $A=F_3[x]/(x^4-1)$, the cube images of $1,x,x^2,x^3$ are $1,x^3,x^2,x$, respectively. Cubing fixes base coefficients, so the fixed-space equations are simply $a_1=a_3$, with $a_0,a_2$ free. A basis is $1,x^2,x+x^3$, giving dimension three.

For $b=x^2$, the component values are one at the two linear factors and minus one at the quadratic factor. Therefore the gcd with $b-1$ gives $x^2-1$ and the gcd with $b+1$ gives $x^2+1$. To split the first block, use $c=x+x^3$. Its value at one is two, and its value at minus one is one, so the corresponding scalar gcds separate $x-1$ and $x+1$. On the quadratic component, $x^3=-x$ and this fixed element has value zero.

Every refinement has preserved a product of distinct original components. The final three factors are monic, their product is $x^4-1$, and their degrees sum to four. The linear factors are irreducible by degree, while the quadratic's root calculation proves its irreducibility. This gives a complete exact result with both the reconstruction and irreducibility obligations addressed. No randomly chosen splitter or observed program output is needed for the argument.

The two extraction routes also illustrate their different roles. Distinct-degree gcds group the degree-one factors before the degree-two factor, whereas the kernel basis separates components by their fixed scalar values. Neither route relies on treating the quotient as a field: it is a product of three fields, and its nontrivial idempotent-like coordinate behaviour is exactly what makes splitting possible.

The leading unit remains part of the result. For example, over F₃ the input 2x⁴+1 equals 2(x⁴−1), so its complete factorisation is 2(x−1)(x+1)(x²+1). Multiplying the three monic factors alone gives x⁴−1, which has the same roots but is a different polynomial. A factorisation routine must preserve the input as an algebraic element, not only its zero set. Recording the unit separately allows all internal factors and gcds to stay monic without silently changing that input.

### Reusing an irreducible factor across related inputs

If a monic irreducible g of degree d over F_q has already been certified, its roots do not need to be rediscovered to factor g(x)^p. In characteristic p, repeated multiplication gives that exact polynomial with the same irreducible factor and multiplicity p. Its derivative is zero, although g itself is separable. The factor record must therefore retain the exponent rather than classify the expanded input as irreducible or squarefree.

For instance, over F₂ the irreducible x²+x+1 squares to x⁴+x²+1. Both polynomials have the same distinct roots in F₄, but the second has twice each root's multiplicity. A representation that stores only a root set cannot reconstruct the input or its degree. The complete factor record, consisting of the monic factor and exponent two, retains exactly the information that Frobenius expansion hides from the derivative.

Changing the base field can predictably split a certified irreducible. If a polynomial has degree d and is irreducible over the field of q elements, its roots form one cycle under q-power Frobenius. Over the field of q raised to m elements, the relevant Frobenius advances m positions around that same cycle. It has gcd(d,m) orbits, each of length d divided by that gcd. These orbits are exactly the root sets of the new irreducible factors, by the minimal-polynomial orbit theorem. Thus the original polynomial splits into that many equal-degree factors. The certificate over the smaller base remains correct, while the larger-base factorisation is a different answer with different irreducibility claims.

## Exercises

### Exercise 1 — A no-root cubic
<a id="finite-polynomial-factor-ex-1"></a>

Prove x³+x+1 is irreducible over F₂ and explain why the same no-root argument does not settle every quartic.

<details>
<summary>Hint</summary>

A reducible cubic has a linear factor; a quartic can have two quadratic factors.

</details>

<details>
<summary>Solution</summary>

The cubic has value one at both zero and one, so no linear factor. Any nontrivial factorisation of degree three has a degree-one factor, hence none exists and the polynomial is irreducible. A quartic can instead be a product of two irreducible quadratics, so absence of base roots only excludes linear factors there. For example (x²+x+1)² has no F₂ root but is reducible.

</details>

### Exercise 2 — A squarefree product
<a id="finite-polynomial-factor-ex-2"></a>

Show x³+1 is squarefree over F₂ and give its factorisation.

<details>
<summary>Hint</summary>

Differentiate and factor using the root one.

</details>

<details>
<summary>Solution</summary>

Its derivative is x², and gcd(x³+1,x²)=1 because x does not divide the original polynomial. Thus it is squarefree. Division by x+1 gives x²+x+1, which has no root in F₂ and is irreducible. Hence x³+1=(x+1)(x²+x+1), with both multiplicities one.

</details>

### Exercise 3 — A zero derivative
<a id="finite-polynomial-factor-ex-3"></a>

Factor x⁶+1 over F₂, including multiplicities.

<details>
<summary>Hint</summary>

Take a square root, factor x³+1, then restore multiplicities.

</details>

<details>
<summary>Solution</summary>

In characteristic two, x⁶+1=(x³+1)². The squarefree cubic factors as (x+1)(x²+x+1). Squaring gives (x+1)²(x²+x+1)². Both irreducibles therefore occur with multiplicity two. Recording only their distinct product would lose the original polynomial's degree and multiplicity information.

</details>

### Exercise 4 — A kernel matrix
<a id="finite-polynomial-factor-ex-4"></a>

For f=x³+1 over F₂, solve explicitly for all fixed residues a₀+a₁x+a₂x² under squaring.

<details>
<summary>Hint</summary>

Use x⁴=x in the quotient and compare coefficients.

</details>

<details>
<summary>Solution</summary>

The square is a₀+a₁x²+a₂x, so equality requires a₁=a₂ while a₀ is arbitrary. The fixed residues are 0,1,x+x² and 1+x+x². They span a two-dimensional space with basis 1,x+x², agreeing with the two distinct irreducible factors. The calculation takes place in a quotient ring, not in a degree-three field.

</details>

### Exercise 5 — Why one kernel dimension is insufficient
<a id="finite-polynomial-factor-ex-5"></a>

Give a reducible polynomial with one-dimensional Berlekamp fixed algebra and explain the missing hypothesis.

<details>
<summary>Hint</summary>

Use the repeated quadratic (x+1)² in characteristic two.

</details>

<details>
<summary>Solution</summary>

For f=x²+1=(x+1)² over F₂, squaring a₀+a₁x gives a₀+a₁. A fixed residue therefore has a₁=0, giving a one-dimensional fixed space. Nevertheless f is reducible and repeated. The theorem requires squarefreeness before dimension one is interpreted as irreducibility; its product-of-fields proof does not apply to this quotient with nilpotents.

</details>

### Exercise 6 — A gcd separates components
<a id="finite-polynomial-factor-ex-6"></a>

If a fixed element has values zero,one,one on three irreducible components over F₂, describe gcd(f,b) and gcd(f,b+1).

<details>
<summary>Hint</summary>

A component is in the gcd exactly where the residue vanishes.

</details>

<details>
<summary>Solution</summary>

The first gcd is the first irreducible factor, since b vanishes only there. The second is the product of the other two, since b+1 vanishes exactly where b has value one. Thus the gcds give a proper first refinement but not yet a complete factorisation. Another kernel element separating those last two components is needed, and existence follows from the full fixed-algebra basis.

</details>

### Exercise 7 — A reconstruction is not irreducibility
<a id="finite-polynomial-factor-ex-7"></a>

Why does returning the list {f} always satisfy a product reconstruction but fail to be a complete factorisation in general?

<details>
<summary>Hint</summary>

Reconstruction and factor quality are different obligations.

</details>

<details>
<summary>Solution</summary>

The product of the one-entry list is tautologically f. But the contract requires every nonconstant entry to be irreducible with its correct multiplicity. A reducible f in that list fails this requirement even though reconstruction is exact. The output needs an irreducibility certificate or the complete-refinement theorem in addition to multiplication of its entries.

</details>

### Exercise 8 — Column convention
<a id="finite-polynomial-factor-ex-8"></a>

For the Frobenius matrix in the basis 1,x,…,xⁿ⁻¹, why is the j-th column the remainder of x^(jq), with j starting at zero?

<details>
<summary>Hint</summary>

A linear map's columns are images of its basis vectors.

</details>

<details>
<summary>Solution</summary>

The j-th basis vector is xʲ. Applying q-power Frobenius gives x^(jq), and reducing modulo f gives its unique coordinate vector. Those vectors form the columns of the representing map. The first column is therefore the image of one, not the image of x. Starting j at one would shift all basis associations and represent a different array of images.

</details>

### Exercise 9 — Coefficient roots
<a id="finite-polynomial-factor-ex-9"></a>

Why can a zero-derivative polynomial over F_(pʳ) be p-th rooted coefficientwise?

<details>
<summary>Hint</summary>

All exponents are divisible by p, and the base Frobenius is bijective.

</details>

<details>
<summary>Solution</summary>

Derivative zero forces every nonzero exponent to be divisible by p. Each coefficient a has p-th root a^(p^(r−1)), because raising that to p gives a^(pʳ)=a. Replacing every coefficient by this root and dividing its exponent by p gives a polynomial g with gᵖ=f by the characteristic-p binomial identity. Both the exponent condition and coefficient perfection are needed.

</details>

### Exercise 10 — Finite refinement
<a id="finite-polynomial-factor-ex-10"></a>

Explain why processing a whole basis of the fixed algebra separates every pair of irreducible components.

<details>
<summary>Hint</summary>

The CRT fixed algebra contains coordinate indicators.

</details>

<details>
<summary>Solution</summary>

If two components had equal values on every basis element, linearity would make their values equal on every fixed element. But the fixed algebra is kʳ and contains an element equal to one on the first component and zero on the second. This contradiction shows some basis element distinguishes them. Iterating over every scalar c then puts the two components into different gcd blocks. After all pairs are separated, each block is one irreducible factor.

</details>

## Summary

Squarefree decomposition recovers multiplicities, including derivative-zero p-th powers. On a squarefree quotient, Frobenius fixes one base-field coordinate per irreducible factor, and a kernel basis separates those components through gcds. Exact reconstruction and complete splitting are separate obligations. The next chapter develops finite-field linear algebra as a reusable component of these algorithms and the later algebra kernel.
`;export{e as default};