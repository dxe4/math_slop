
# Extensions, Degree and Constructible Numbers

A field extension enlarges the available scalars without changing the arithmetic already present. Adjoining a square root supplies a new exact number; adjoining every root of a polynomial supplies a setting in which its symmetries can be studied. Galois theory eventually connects such intermediate fields with subgroups, but that connection rests on ordinary linear algebra and careful polynomial evaluation.

This chapter develops that foundation and its first geometric application. The required preparation is polynomial division, irreducibility, quotient fields, finite-dimensional bases, and group homomorphisms. The earlier [field-extension chapter](../algebra-patterns-structure/field-extensions-minimal-polynomials.md) supplies the retained algebra seed and its exercises. Here its mathematical themes are expanded in original exposition, with degree proofs and construction hypotheses made explicit. All field homomorphisms preserve one.

## 1. What an extension specifies

**Definition 1.1 (Extension and degree).** An extension $E/F$ consists of fields and a specified embedding $F\hookrightarrow E$. After identifying $F$ with its image, the degree $[E:F]$ is the dimension of $E$ as an $F$-vector space. It can be infinite.

The embedding matters. Arithmetic expressions involving both fields need a declared identification, rather than an abstract assertion that the smaller field has an isomorphic copy somewhere. The same set $E$ can also have different vector-space dimensions over different subfields. The complex field has degree two over the reals, while its degree over the rationals is infinite.

Degree is not an element count. Both $\mathbb Q$ and $\mathbb Q(\sqrt2)$ are countably infinite, yet the latter requires two rational coordinates. Conversely a field of dimension $n$ over a finite field with $q$ elements has $q^n$ elements, because every basis coefficient has exactly $q$ choices. The connection in that finite setting comes from unique coordinates, not division of cardinalities.

**Theorem 1.2 (Tower law).** If $F\subseteq K\subseteq E$ and the two degrees $[K:F]=m$, $[E:K]=n$ are finite, then $[E:F]=mn$.

*Proof.* Let $u_1,\ldots,u_m$ be an $F$-basis of $K$, and $v_1,\ldots,v_n$ a $K$-basis of $E$. Expanding first in the $v_j$, then expanding their coefficients in the $u_i$, proves that the $mn$ products $u_iv_j$ span $E$ over $F$. In a zero combination, group terms as $\sum_j(\sum_i a_{ij}u_i)v_j=0$. Independence over $K$ makes each inner sum zero. Independence of the $u_i$ over $F$ then makes every $a_{ij}=0$. Thus the products are a basis. ∎

For a finite ambient extension, every intermediate degree is finite: an independent list over an intermediate field remains independent over the smaller field, and the intermediate field is itself a subspace over that smaller field. Applying the theorem shows $[K:F]$ divides $[E:F]$. In particular a prime-degree extension has no proper nontrivial intermediate field. This is a one-way criterion; later subgroup lattices will explain why its converse needs care.

## 2. Evaluation creates minimal polynomials

**Definition 1.3 (Algebraic element).** An element $\alpha$ in an extension is algebraic over $F$ if a nonzero polynomial in $F[x]$ vanishes at $\alpha$. Otherwise it is transcendental. The generated field $F(\alpha)$ is the smallest subfield containing $F$ and $\alpha$; the ring $F[\alpha]$ initially allows only polynomial expressions.

**Theorem 1.4 (Minimal polynomial and power basis).** For algebraic $\alpha$, there is a unique monic irreducible polynomial $m_{\alpha,F}$ generating all its polynomial relations. If its degree is $d$, then
$$
F[\alpha]=F(\alpha)\cong F[x]/(m_{\alpha,F}),\qquad
[F(\alpha):F]=d.
$$

*Proof.* Choose a nonzero relation of smallest degree and scale it to be monic, calling it $m$. If $m=uv$ with both factors of positive smaller degree, the field equation $u(\alpha)v(\alpha)=0$ forces a smaller relation, impossible. Thus $m$ is irreducible. Divide any relation $f$ by $m$, writing $f=qm+r$, $\deg r<d$. Evaluation gives $r(\alpha)=0$, so $r=0$. Hence the evaluation homomorphism has kernel $(m)$ and image $F[\alpha]$.

The quotient by an irreducible polynomial is a field: for a polynomial $g$ not divisible by $m$, Bezout gives $ug+vm=1$, making the class of $u$ an inverse. Consequently $F[\alpha]$ is already the generated field. Polynomial division gives spanning by $1,\alpha,\ldots,\alpha^{d-1}$, and any dependence among those powers would be a relation of smaller degree. Finally two monic generators of the evaluation kernel divide each other and must coincide. ∎

The inverse construction in this proof is computationally useful. It asks for an extended Euclidean calculation in $F[x]$, not a guess involving numerical approximations. It also identifies the exact point where irreducibility is needed. A quotient by a reducible polynomial can have zero divisors and need not describe adjoining one field element.

For transcendental $\alpha$, evaluation has zero kernel and identifies $F[\alpha]$ with a polynomial ring. Its fraction field is $F(\alpha)\cong F(x)$. No finite power basis exists: a finite dependence would contradict transcendence. Thus the distinction between brackets and parentheses is a genuine algebraic distinction before algebraicity is established.

## 3. Worked example 1.1: a quadratic field with explicit inverses

Take $u=\sqrt5$ in the real numbers. A rational square cannot equal five: writing a reduced fraction $a/b$ with $a^2=5b^2$ forces both numerator and denominator divisible by five. Therefore $x^2-5$ is irreducible and $(1,u)$ is a rational basis.

Every element is uniquely $a+bu$. Multiplication is
$$
(a+bu)(c+du)=(ac+5bd)+(ad+bc)u.
$$
For a nonzero element,
$$
(a+bu)^{-1}=\frac{a-bu}{a^2-5b^2}.
$$
The denominator cannot vanish: if $b\neq0$, its vanishing makes $(a/b)^2=5$, while if $b=0$, nonzero $a$ gives a nonzero denominator. For instance $(2+u)^{-1}=u-2$, since $(2+u)(u-2)=1$.

This example supplies both a coordinate description and a closure certificate. Merely displaying the set of expressions $a+bu$ would not prove it is a field until division by every nonzero member had been addressed. Uniqueness of coordinates also prevents two different formulas from masquerading as distinct elements.

## 4. Finite generation and algebraic towers

**Theorem 1.5 (Finite versus algebraic).** Every finite extension is algebraic. Finitely many algebraic elements generate a finite extension. Algebraicity is transitive through an algebraic intermediate field.

*Proof.* If $[E:F]=d$, then $1,\alpha,\ldots,\alpha^d$ are dependent for every $\alpha\in E$, giving a nonzero relation. If $\alpha_1,\ldots,\alpha_r$ are algebraic over $F$, each remains algebraic over the previously generated larger field because its original relation still applies. Each simple adjunction has finite degree by Theorem 1.4, and repeated tower multiplication gives finiteness.

For transitivity, suppose $E/K$ and $K/F$ are algebraic and $\alpha\in E$. Its relation over $K$ uses finitely many coefficients $c_1,\ldots,c_s$. The field $F(c_1,\ldots,c_s)$ is finite over $F$, and adjoining $\alpha$ is finite over it. The tower law makes $\alpha$ algebraic over $F$. ∎

Every finite extension is generated by finitely many elements: a vector-space basis generates a field containing its entire linear span. This statement does not yet say one generator suffices. The primitive element theorem in Chapter 3 supplies that stronger conclusion under separability.

The algebraic elements inside any extension form a subfield. Indeed, two algebraic elements lie in one finite extension, and their sum, product, difference, and nonzero inverse are in that same finite-dimensional field, hence are algebraic. Notice how the proof avoids trying to guess a polynomial for each arithmetic combination separately.

## 5. Worked example 1.2: degree four requires a lower bound

Let $\theta=\sqrt2+\sqrt7$. Squaring twice gives
$$
\theta^4-18\theta^2+25=0.
$$
This proves degree at most four, not degree exactly four. Since
$$
\theta(\sqrt7-\sqrt2)=5,
$$
we recover
$$
\sqrt7=(\theta+5/\theta)/2,\qquad
\sqrt2=(\theta-5/\theta)/2.
$$
Thus $\mathbb Q(\theta)=\mathbb Q(\sqrt2,\sqrt7)$.

To compute its degree, suppose $\sqrt7=a+b\sqrt2$ with rational $a,b$. Squaring gives $7=a^2+2b^2+2ab\sqrt2$. Irrationality of $\sqrt2$ forces $ab=0$. The alternatives require a rational square equal to seven or to $7/2$, both impossible by the parity of prime exponents in a rational square. Hence the second square-root adjunction has degree two over the first. The total degree is four, and the displayed monic quartic is minimal.

This degree argument uses a reconstruction to identify the generated field, followed by a separate independence argument. Squaring can introduce extraneous candidate conjugates, and a polynomial relation alone never rules out smaller degree. These two proof obligations will recur when splitting-field degrees are used to count automorphisms.

## 6. Ruler and compass as quadratic arithmetic

Fix an initial real coordinate field $F$, with the origin and unit segment available. A straightedge-and-compass construction uses lines through known distinct points and circles with known centers and known radii, adjoining their isolated intersection points. Degenerate coincident curves do not supply a freely chosen new coordinate.

**Theorem 1.6 (Quadratic-tower criterion).** A real number is constructible from coordinates in $F$ exactly when it belongs to a tower
$$
F=F_0\subseteq F_1\subseteq\cdots\subseteq F_r\subseteq\mathbb R,
\qquad [F_{i+1}:F_i]\leq2.
$$

*Proof.* A line has a linear coordinate equation over the current field. Intersecting two nonparallel lines solves linear equations and stays in that field. For a line and circle, substitution gives a polynomial of degree at most two in one coordinate; the other is linear in it. For two distinct circles, subtract their equations to obtain their common chord line, reducing to the preceding case. Thus each new point coordinate lies in an extension obtained by adjoining a real square root.

Conversely field arithmetic is constructible. Adding and subtracting directed segments uses translations on a line. Products and quotients follow from similar triangles: with unit reference, arrange triangles whose corresponding side ratios give the desired product or nonzero quotient. For $a>0$, place adjacent lengths $1,a$ on a diameter of a circle and erect the perpendicular at their junction. If its height is $h$, the two right triangles are similar and give $h^2=a$. Thus positive square roots are constructible. Any real quadratic extension has a generator satisfying $x^2+bx+c=0$; completing the square expresses it using field arithmetic and a real square root. Iterating realizes every element of the tower. ∎

For an algebraic constructible number over $\mathbb Q$, its degree is therefore a power of two: tower multiplication gives a power of two for the containing field, and its own degree divides that power. This is a necessary test, not a claim that every algebraic number of power-of-two degree lies in a quadratic tower. The tower structure carries more information than its total dimension.

## 7. Worked example 1.3: a positive construction and an impossibility

The number $\sqrt{2+\sqrt5}$ lies in the real tower
$$
\mathbb Q\subseteq\mathbb Q(\sqrt5)\subseteq
\mathbb Q(\sqrt5,\sqrt{2+\sqrt5}),
$$
so it is constructible. The radicand is positive, and every operation used is one of the permitted field or square-root operations. No assertion about its exact degree is needed for this positive conclusion.

In contrast the real cube root of three is not constructible from a unit segment. Its polynomial $x^3-3$ is irreducible: a reducible cubic over $\mathbb Q$ would have a rational root, and the rational-root candidates do not work. Its degree is three, which cannot divide a power of two. The contradiction rules out a construction, rather than merely showing that one attempted recipe fails.

The full classification of constructible regular polygons requires cyclotomic information and is deferred to the later construction chapter. Here the degree obstruction already explains why an irreducible cubic behaves differently from a nested square-root expression. Constructibility also depends on initial data: once a nonconstructible number is supplied as a coordinate, the base field has changed and the original impossibility statement no longer applies unchanged.

## 8. A dependency ledger

The polynomial quotient theorem turns an irreducible relation into a field. The power basis turns that relation into a dimension. Product bases compare successive adjunctions. Geometry then restricts the permitted successive degrees. Each step has a different hypothesis, and none uses a Galois correspondence in advance.

When solving a new example, first identify the field being generated, then derive an upper bound by a polynomial or tower, and finally prove any claimed lower bound. Keep exact identities distinct from approximate root values. The next chapter adjoins all roots rather than one and asks when every conjugate stays in the same extension.

## Coprime degrees force a product basis

Let K/F and L/F be finite subfields of one common overfield, with coprime degrees m and n. Products of their basis elements span the compositum over F: their span is a finite-dimensional subalgebra containing both fields, and multiplication by a nonzero element is injective and therefore surjective, so the span is a field. This gives the upper bound mn.

The tower law also makes the compositum degree divisible by both m and n. Coprimality makes it divisible by mn, so the upper bound is attained. The product spanning set is consequently a basis. The intersection has degree dividing both m and n and is therefore exactly F. This proof uses two separate inputs—an upper spanning bound and a lower divisibility bound—before concluding independence.

For example, the real cube-root field of two has degree three by Eisenstein, and Q(√5) has degree two. Their compositum has degree six, and the six products of their displayed power bases are independent. The result needs no normality hypothesis. In particular this real compositum still cannot contain the nonreal conjugates of the cube root, so degree multiplication does not itself imply normality.

The common-overfield placement is part of the statement: it makes intersection and compositum actual fields rather than unplaced isomorphism classes. Without coprimality, the same product list still spans but can have relations, as two identical quadratic fields already demonstrate.

An irreducibility certificate can give a geometric impossibility without solving for the root. The polynomial x³−x−1 reduces modulo two to x³+x+1, which has no binary root. A reducible cubic over a field has a linear factor, so this reduction is irreducible. Gauss's lemma and reduction of a primitive monic factorisation then prove irreducibility over the rationals. Every root therefore has rational degree three. A real root cannot belong to a tower of quadratic extensions, because the tower degree is a power of two and an intermediate element's degree divides it. Thus no straightedge-and-compass construction produces that real root, although the polynomial changes sign and has a real solution.

## Exercises

### Exercise 1.1
<a id="extensions-degree-constructible-numbers-ex-1"></a>

Find the degree and a basis of Q(√11)/Q, and calculate the inverse of 3+√11.

<details>
<summary>Hint 1</summary>

Use a quadratic relation and rule out a rational square.

</details>

<details>
<summary>Hint 2</summary>

Multiply by the conjugate and check the denominator.

</details>

<details>
<summary>Solution</summary>

The polynomial x²−11 is irreducible because eleven is not a rational square. Thus (1,√11) is a rational basis and the degree is two. Multiplication gives (3+√11)(3−√11)=−2, so the inverse is (√11−3)/2. Its existence is also guaranteed by the field quotient; the explicit multiplication verifies the proposed normal form.

</details>

### Exercise 1.2
<a id="extensions-degree-constructible-numbers-ex-2"></a>

Let [E:F]=35 and F⊆K⊆E. List the possible values of [K:F]. Does the tower law guarantee an intermediate field for each value?

<details>
<summary>Hint 1</summary>

Apply the tower law.

</details>

<details>
<summary>Hint 2</summary>

Separate necessary divisibility from existence.

</details>

<details>
<summary>Solution</summary>

The degree [K:F] must be one of 1,5,7,35 because it divides thirty-five. The endpoint fields realize 1 and35. The tower law alone does not construct fields of degrees5 or7; existence requires additional information about the particular extension. An arithmetic candidate list cannot be promoted to a complete intermediate-field lattice.

</details>

### Exercise 1.3
<a id="extensions-degree-constructible-numbers-ex-3"></a>

Prove that an extension of prime degree has no intermediate fields other than its endpoints.

<details>
<summary>Hint 1</summary>

Write the tower product.

</details>

<details>
<summary>Hint 2</summary>

Positive integer factors of a prime have only two possibilities.

</details>

<details>
<summary>Solution</summary>

If [E:F]=p and F⊆K⊆E, then p=[E:K][K:F]. Both factors are positive integers. Thus [K:F]=1, giving K=F, or [E:K]=1, giving K=E. A degree-one field extension equals its base because the one-element basis can be taken to be1.

</details>

### Exercise 1.4
<a id="extensions-degree-constructible-numbers-ex-4"></a>

For real α with α³=5, prove [Q(α):Q]=3 and find α⁻¹.

<details>
<summary>Hint 1</summary>

Test the cubic for rational roots.

</details>

<details>
<summary>Hint 2</summary>

Use its defining relation to reduce an inverse.

</details>

<details>
<summary>Solution</summary>

The rational-root candidates for x³−5 are ±1,±5 and none is a root. A reducible cubic has a linear factor, so the polynomial is irreducible. Its degree supplies the basis (1,α,α²) and extension degree 3. The equation α·(α²/5)=1 gives α⁻¹=α²/5, a legal element of the same field.

</details>

### Exercise 1.5
<a id="extensions-degree-constructible-numbers-ex-5"></a>

Explain why Q[√2]=Q(√2) but Q[t]≠Q(t) for an indeterminate t.

<details>
<summary>Hint 1</summary>

Compare algebraic and transcendental evaluation kernels.

</details>

<details>
<summary>Hint 2</summary>

Test whether the inverse of t is polynomial.

</details>

<details>
<summary>Solution</summary>

An algebraic quotient by the minimal polynomial is a field, so Q[√2] already contains all required inverses and equals the generated field. For an indeterminate, t has no polynomial inverse: a nonzero product t p(t) has positive degree. The fraction1/t belongs to Q(t) but not Q[t], proving strict inequality.

</details>

### Exercise 1.6
<a id="extensions-degree-constructible-numbers-ex-6"></a>

Show Q(√2,√8)=Q(√2), and explain why multiplying two apparent quadratic degrees would be incorrect.

<details>
<summary>Hint 1</summary>

Express one generator using the other.

</details>

<details>
<summary>Hint 2</summary>

The second degree is measured over the already enlarged field.

</details>

<details>
<summary>Solution</summary>

Since √8=2√2, the second generator is already in Q(√2). Each field contains the other, so they agree. The tower degrees are2 and1, not2 and2. The degree of √8 over Q does not determine its degree over Q(√2); tower multiplication must use the actual intermediate base.

</details>

### Exercise 1.7
<a id="extensions-degree-constructible-numbers-ex-7"></a>

Prove √2+√7 has degree four by identifying both square roots in its generated field.

<details>
<summary>Hint 1</summary>

Use its product with √7−√2.

</details>

<details>
<summary>Hint 2</summary>

Then rule out √7 in Q(√2).

</details>

<details>
<summary>Solution</summary>

Writing θ=√2+√7 gives θ(√7−√2)=5, so √7=(θ+5/θ)/2 and √2=(θ−5/θ)/2. If √7=a+b√2 with rational a,b, squaring forces ab=0 and then a rational square equal to7 or7/2, impossible. Thus the two-step degree is 4, and Q(θ) is that whole biquadratic field.

</details>

### Exercise 1.8
<a id="extensions-degree-constructible-numbers-ex-8"></a>

Let F⊆K⊆E be algebraic extensions, possibly infinite. Prove that each chosen α∈E lies in some finite extension of F inside E.

<details>
<summary>Hint 1</summary>

Use only the coefficients of one relation for α over K.

</details>

<details>
<summary>Hint 2</summary>

Adjoin those finitely many coefficients first.

</details>

<details>
<summary>Solution</summary>

Choose a nonzero relation for α with finitely many coefficients c₁,…,c_s in K. Each coefficient is algebraic over F, so K₀=F(c₁,…,c_s) is finite over F. The same relation makes α algebraic over K₀. Hence K₀(α)/K₀ is finite, and tower multiplication shows K₀(α)/F is finite. This proves the assertion without assuming either full given extension finite.

</details>

### Exercise 1.9
<a id="extensions-degree-constructible-numbers-ex-9"></a>

Prove that Q(∛2) contains no quadratic extension of Q.

<details>
<summary>Hint 1</summary>

Compute its degree first.

</details>

<details>
<summary>Hint 2</summary>

Any intermediate degree divides three.

</details>

<details>
<summary>Solution</summary>

The cubic x³−2 has no rational root, hence is irreducible. Thus [Q(∛2):Q]=3. If an intermediate field had degree 2 over Q, the tower law would force2 to divide3, a contradiction. This rules out all quadratic subfields at once, rather than only selected square roots.

</details>

### Exercise 1.10
<a id="extensions-degree-constructible-numbers-ex-10"></a>

Decide whether √(3+√2) and ∛5 are constructible from a rational unit segment.

<details>
<summary>Hint 1</summary>

Exhibit a real quadratic tower for the first.

</details>

<details>
<summary>Hint 2</summary>

Use irreducible degree for the second.

</details>

<details>
<summary>Solution</summary>

The first number lies in Q⊆Q(√2)⊆Q(√2,√(3+√2)), with real positive radicand and degrees at most2 at each step, so it is constructible. The cubic x³−5 is irreducible by the rational-root test, making ∛5 have degree 3. That degree cannot divide a power of two, so the second number is not constructible.

</details>

### Exercise 1.11
<a id="extensions-degree-constructible-numbers-ex-11"></a>

Prove that a finite extension of a countable field is countable, and deduce [R:Q] is infinite.

<details>
<summary>Hint 1</summary>

Use coordinates in a finite basis.

</details>

<details>
<summary>Hint 2</summary>

A finite Cartesian power of a countable set is countable.

</details>

<details>
<summary>Solution</summary>

If E has finite basis b₁,…,b_n over a countable F, every element is specified by one tuple in Fⁿ. The coordinate map is a bijection, and the finite product Fⁿ is countable. Since R is uncountable whereas Q is countable, R cannot be a finite-dimensional extension of Q. Both fields are infinite, demonstrating why element counts alone do not encode extension degree.

</details>

### Exercise 1.12
<a id="extensions-degree-constructible-numbers-ex-12"></a>

An exact construction allegedly produces a real root of an irreducible polynomial of degree six using rational arithmetic and real square roots only. Prove the claim impossible and identify its hidden assumption.

<details>
<summary>Hint 1</summary>

Every finite recipe lies in a quadratic tower.

</details>

<details>
<summary>Hint 2</summary>

A root of an irreducible polynomial has exactly that polynomial's degree.

</details>

<details>
<summary>Solution</summary>

A finite arithmetic-and-square-root recipe starting from rational data lies in a finite real quadratic tower, whose total degree is a power of two. The root's generated field has degree 6 by irreducibility, so tower divisibility would require6 to divide a power of two, impossible. The rational starting-data assumption matters: supplying the desired root as initial data changes the base field and invalidates this particular obstruction.

</details>

## Sources

The retained [algebra chapter on extensions](../algebra-patterns-structure/field-extensions-minimal-polynomials.md) supplies the local mathematical seed and its independent exercises. This chapter's exposition and examples are newly written. J. S. Milne's author-hosted [Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/FT.pdf), Chapter 1, is complementary reading for extension and construction arguments; no text is copied from it.

## Summary

Evaluation produces minimal polynomials, polynomial quotients produce power bases, and product bases prove the tower law. Finite extensions are algebraic, while finitely many algebraic adjunctions remain finite. Straightedge-and-compass operations give real quadratic towers, making power-of-two degree a necessary construction condition. The next chapter adjoins all conjugate roots and proves the splitting-field and normality results needed for symmetry.
