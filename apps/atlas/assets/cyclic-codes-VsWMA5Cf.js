var e=`---
parent_id: book-error-correcting-codes
chapter_id: cyclic-codes
title: "Cyclic Codes"
level: graduate
license: CC BY-SA 4.0
---

# Cyclic Codes

Preparation is polynomial division, ideals in a principal ideal domain, finite fields and Chapter 2’s duality. The algebraic classification is general; the root-set subsection explicitly assumes the length is coprime to the field characteristic.

## Words as polynomial residues

Identify $(c_0,\\ldots,c_{n-1})\\in\\mathbb F_q^n$ with $c(x)=\\sum_{i=0}^{n-1}c_ix^i$ in
$$
R=\\mathbb F_q[x]/(x^n-1).
$$
Multiplication by $x$ rotates the last coordinate into the first, since $x^n=1$ in the quotient. This convention fixes the direction of cyclic shift; reversing coefficient order gives an equivalent convention only if every formula is adjusted consistently.

A cyclic linear code is a vector subspace invariant under that rotation. Repeated rotations imply invariance under every power of $x$, and linear combinations imply invariance under multiplication by every polynomial. Thus it is an ideal of $R$. Conversely an ideal is a subspace closed under multiplication by $x$, so it is a cyclic linear code.

Linearity is essential. A shift-invariant nonlinear set need not be an ideal. Likewise, calling a word polynomial does not make its coefficients integers: all calculations occur in the declared field.

The retained finite-algebra source motivates this quotient-ring model. Here we prove its classification, dimension, systematic encoding and dual description before using roots for the square-free case.

## Unique divisor generators

Let $f=x^n-1$. The preimage of an ideal of $R$ under the quotient map is an ideal of $\\mathbb F_q[x]$ containing $(f)$. Since the polynomial ring over a field is a principal ideal domain, the preimage is $(g)$ for a unique monic polynomial $g$. Containment $(f)\\subseteq(g)$ means $g$ divides $f$.

Conversely every monic divisor $g\\mid f$ defines an ideal in the quotient. Therefore cyclic linear codes correspond exactly to monic divisors of $x^n-1$. The zero code corresponds to $g=f$, and the whole word space to $g=1$.

An arbitrary polynomial still generates an ideal in the quotient, but its canonical monic divisor generator is $\\gcd(g,f)$, not necessarily that original polynomial. Bézout proves the ideals agree: the gcd is a combination of $g$ and $f$, while each is divisible by the gcd.

This distinction preserves a useful correction to the original source. A nondivisor does not make the resulting ideal noncyclic. What fails is the claim that the chosen polynomial is the canonical generator or that its degree gives the code’s dimension.

## Dimension and a polynomial basis

Write $f=gh$ and put $r=\\deg g$, $k=n-r=\\deg h$. Every codeword has a unique representation
$$
c(x)=a(x)g(x),\\qquad \\deg a<k,
$$
with degree below $n$. To see existence, reduce any multiplier modulo $h$; subtracting a multiple of $h$ changes $ag$ by a multiple of $f$ and hence does not change its residue.

For uniqueness, a nonzero multiplier of degree below $k$ produces a nonzero product of degree below $n$, so it cannot vanish modulo $f$. The polynomial ring has no zero divisors, which permits this degree argument.

Thus $g,xg,\\ldots,x^{k-1}g$ form a basis, and the code has dimension $k=n-\\deg g$. This proof remains valid even when the characteristic divides $n$ and $f$ has repeated factors. No distinct-root assumption has been used.

The resulting shifted-coefficient generator matrix need not be systematic. It is nevertheless a full-rank generator. A basis change can make an information set explicit, or the polynomial division construction below can place message coefficients directly in chosen high positions.

## Systematic encoding by a remainder

Let the message polynomial $m$ have degree below $k$. Divide $x^rm(x)$ by $g$:
$$
x^rm(x)=a(x)g(x)+s(x),\\qquad\\deg s<r.
$$
Transmit
$$
c(x)=x^rm(x)-s(x)=a(x)g(x).
$$
Its degree is below $n$, so it is a codeword. The high $k$ coefficients reproduce the message, while the low $r$ coefficients contain the negative remainder.

This proves both membership and injectivity. It also explains the sign: over characteristic two subtraction equals addition, but over other fields it does not. A program that always XORs or adds a remainder would implement a binary convention rather than the stated general-field encoder.

The receiver can recover the message from those high positions after correcting errors. Reading them before correction simply exposes the systematic message coordinates to noise; systematic form does not eliminate the need for decoding.

## The check polynomial and the dual generator

Since $f=gh$,
$$
g\\mid c\\quad\\Longleftrightarrow\\quad ch\\equiv0\\pmod f.
$$
The reverse direction follows by cancelling $g$ in the integral domain from $gh\\mid ch$: equivalently $ch=agh$ implies $c=ag$. This is a polynomial divisibility statement, not cancellation of an arbitrary zero divisor inside the quotient.

The constant terms of $g$ and $h$ are nonzero because they divide a polynomial with nonzero constant term. Define the reciprocal $h^\\ast(x)=x^kh(x^{-1})$ and normalise it to be monic. The dual cyclic code is generated by this normalised reciprocal.

To prove orthogonality, the dot product of coefficient words $c,d$ is the constant coefficient of $c(x)d(x^{-1})$ modulo $x^n-1$. The only exponent difference between two degrees from zero to $n-1$ that is divisible by $n$ is zero, so this constant coefficient is exactly the ordinary coordinate pairing.

If $c=ag$ and $d=bh^\\ast$, then $d(x^{-1})$ contains, up to a nonzero scalar, the factor $x^{-k}h(x)$. Their product therefore contains $gh=f$ and is zero in the Laurent quotient, where $x$ is a unit. Hence every multiple of $h^\\ast$ is orthogonal to every codeword. Its degree is $k$, so its code dimension is $n-k$, equal to the dual dimension. Containment and equal dimensions prove equality.

This dual formula also works with repeated factors. A root-set shortcut, by contrast, needs the square-free hypothesis discussed next.

## Roots and Frobenius orbits

Assume $\\gcd(n,q)=1$. Then the derivative $nx^{n-1}$ is coprime to $x^n-1$, so the modulus has no repeated roots. In a finite extension containing a primitive $n$th root $\\alpha$, all roots are $\\alpha^j$, $0\\le j<n$.

A divisor with coefficients in $\\mathbb F_q$ has a root set closed under Frobenius $z\\mapsto z^q$. Thus exponents occur in $q$-cyclotomic orbits modulo $n$. Conversely the product of $(x-\\alpha^j)$ over such an orbit has coefficients fixed by Frobenius and hence in $\\mathbb F_q$.

The orbit product is the minimal polynomial of that root. Any polynomial over the base field vanishing at one orbit member vanishes at all, so its degree is at least the orbit size; the displayed orbit product attains that size and is monic. This proves irreducibility and identifies the factorisation needed for BCH constructions.

The extension degree can be chosen so that $n\\mid q^m-1$. Existence follows because $q$ is invertible modulo $n$ and has finite multiplicative order. The primitive root and its exponent conventions must be fixed before naming designed root sets.

## Repeated-root codes require multiplicities

If the field characteristic is $p$ and $n=p^su$ with $p\\nmid u$, then
$$
x^n-1=(x^u-1)^{p^s}.
$$
The divisor classification and dimension proof remain correct, but a root set alone no longer identifies a divisor: multiplicities matter.

Over $\\mathbb F_2$ at length four, $x^4-1=(x+1)^4$. The generators $x+1$ and $(x+1)^2$ have the same sole root, one, but define dimensions three and two respectively. Treating them as the same code because their sets of zeros agree discards the decisive multiplicity information.

The next chapter’s standard BCH root-distance proof assumes a primitive root of order $n$, which exists only when the field characteristic does not divide $n$. It must not be transplanted unchanged to repeated-root codes.

## Structural properties versus decoding

Cyclic structure gives concise encoders, checks and families of root constraints. It does not alone imply a good minimum distance or an efficient error-correcting decoder. The whole-space cyclic code has distance one, and even a small generator degree says little about its true error radius without a distance argument.

Syndrome computation can use polynomial remainders or evaluations at roots. Turning those syndromes into an error location and magnitude requires an additional decoding theorem. Chapters 5–7 develop the appropriate hypotheses rather than treating ideal membership as an automatic decoding algorithm.

A cyclic shift preserves Hamming weight and code membership. Multiplying by a general polynomial is a linear operation but need not preserve weight. Algebraic closure and metric equivalence are different statements even when both are written as polynomial operations.

## A complete small factor diagram

At binary length seven, the Frobenius exponent orbits are $\\{0\\}$, $\\{1,2,4\\}$ and $\\{3,6,5\\}$. The factorisation is
$$
x^7+1=(x+1)(x^3+x+1)(x^3+x^2+1).
$$
The two cubics have no binary root and hence are irreducible: a reducible cubic over a field must have a linear factor. Their product with $x+1$ gives the modulus, so the three orbit factors exhaust its degree.

Every canonical generator is the product of a chosen subset of these three distinct factors. The order of the factors does not matter, and multiplying by a nonzero field scalar changes the displayed polynomial but does not change the generated ideal. There are eight cyclic binary codes of this length, including the whole space and zero code. The generator $x+1$ gives the even-parity code of dimension six. The product of the cubics is $1+x+\\cdots+x^6$, giving the repetition code of dimension one. Either cubic gives a dimension-four Hamming code; they are reciprocal to one another.

This finite diagram shows why a root condition can impose more than one base-field parity check. Requiring one primitive seventh root as a zero automatically requires its full three-element Frobenius orbit and therefore costs three dimensions. Counting individual requested extension-field roots as unrelated binary checks would give the wrong dimension.

## Worked example 4.1: The binary cyclic Hamming code

At length seven, $g=x^3+x+1$ and $h=x^4+x^2+x+1$ satisfy $gh=x^7+1$. The code dimension is four. In $\\mathbb F_8$, a root $\\alpha$ of the irreducible cubic is nonzero and not one; its order divides seven and is therefore seven. The condition $c(\\alpha)=0$ yields three binary checks whose columns are the seven distinct nonzero vectors represented by $\\alpha^j$. Thus no one or two columns are dependent, while $g$ itself has weight three. The code has exact parameters $[7,4,3]$.

## Worked example 4.2: A systematic message

For that generator, encode $m=1+x$ with $r=3$. Dividing $x^3+x^4$ by $g$ gives quotient $x+1$ and remainder $x^2+1$. The transmitted polynomial is $x^4+x^3+x^2+1=(x+1)g$. Its coefficients at degrees three and four are the original message coefficients, while lower coefficients supply the remainder checks. All signs coincide with addition here because the field is binary.

## Worked example 4.3: A nondivisor still generates a cyclic ideal

Take $a=x^2+x+1$ at binary length seven. Modulo $a$, $x^3=1$, so $x^7+1$ has remainder $x+1$. Since $a(1)=1$, their gcd is one. Thus the ideal generated by $a$ in the quotient is the entire word space, dimension seven. The incorrect formula $7-\\deg a=5$ would apply only if $a$ were the canonical divisor generator. The resulting ideal is cyclic; the degree claim is what fails.

## Idempotents give projections in the coprime-factor case

Suppose the generator and check polynomials are coprime. Bézout then supplies polynomials satisfying $ug+vh=1$. In the quotient by their product, let $e$ be the residue of $ug$. It is zero modulo $g$ and one modulo $h$.

Therefore $e^2-e$ is divisible by both coprime factors and hence by the whole modulus. The residue $e$ is idempotent. Its generated ideal is the code ideal: it is a multiple of $g$, while multiplying $g$ by $e$ returns $g$ modulo the modulus, so each generator belongs to the other ideal.

Multiplication by $e$ is thus a linear projection onto the cyclic code. It is the identity on that code and zero on the ideal generated by the check polynomial. Every residue splits into its $e$ part and its one-minus-$e$ part, giving a direct-sum decomposition of the ambient space into the two complementary cyclic ideals.

This projection is algebraic. It need not be an orthogonal projection for the ordinary coordinate pairing, and it does not automatically give a nearest-codeword decoder in Hamming distance. Applying it to noisy data can transform errors rather than identify the most likely error.

When the modulus is square-free, any divisor and its complementary factor are coprime, so the construction applies to every cyclic ideal. The Chinese remainder picture and the root-orbit description are two ways to see this semisimple decomposition.

Repeated-root examples show why the qualification matters. Over the binary quotient by $(x+1)^4$, a residue is a unit exactly when its value at one is nonzero, by Bézout with the modulus. For any idempotent, either it or one minus it is such a unit, since their values at one differ.

From their product being zero, the invertible factor forces the other to be zero. Thus the only idempotents in that ring are zero and one. Its proper nonzero ideal generated by $x+1$ cannot have an idempotent generator, even though it is a perfectly valid cyclic code.

The general divisor classification therefore survives repeated roots, while the convenient complementary projection can fail. This is a concrete algebraic consequence of multiplicity, beyond the earlier warning that a zero set alone loses information.

## Intersections and sums have divisor formulas

Fix a length and field, and let two cyclic codes have monic divisor generators g and h of the ambient polynomial x to the length minus one. A residue word lies in their intersection precisely when its canonical polynomial representative is divisible by both generators. The monic least common multiple therefore generates the intersection. Their vector-space sum is generated by the monic greatest common divisor: Bézout's polynomial identity puts that greatest common divisor in the sum, while both original generators are its multiples.

Taking degrees gives the usual dimension identity, since the degree of the least common multiple plus the degree of the greatest common divisor equals the sum of the two degrees. This is valid even when the ambient polynomial has repeated factors; the multiplicities must then be retained in both divisor operations. Replacing the generators by sets of distinct roots alone would lose that information. The formulas provide structural calculations for combining cyclic constraints, while saying nothing by themselves about the resulting code's exact minimum distance or an efficient error decoder.

## Exercises

### Exercise 4.1
<a id="cyclic-codes-ex-1"></a>

Prove a cyclic linear subspace is an ideal in the quotient.

<details>
<summary>Hint 1</summary>

Repeated shifts give multiplication by powers of $x$.

</details>
<details>
<summary>Hint 2</summary>

Use linear combinations of those shifts.

</details>
<details>
<summary>Solution</summary>

Closure under one cyclic shift implies closure under every nonnegative power. For any polynomial multiplier, its product is a field-linear combination of these shifted words and remains in the subspace. That is ideal closure. Conversely ideal closure supplies shift invariance immediately.

</details>

### Exercise 4.2
<a id="cyclic-codes-ex-2"></a>

Why must the canonical generator divide $x^n-1$?

<details>
<summary>Hint 1</summary>

Take the ideal preimage in the polynomial ring.

</details>
<details>
<summary>Hint 2</summary>

It contains the modulus ideal.

</details>
<details>
<summary>Solution</summary>

The preimage is principal, say $(g)$, and contains $x^n-1$. Hence the modulus is a multiple of $g$. Choosing the monic generator makes it unique. This is a divisibility result in the polynomial ring before passing to residue classes.

</details>

### Exercise 4.3
<a id="cyclic-codes-ex-3"></a>

Prove the shifted-generator basis is linearly independent.

<details>
<summary>Hint 1</summary>

A nonzero short multiplier cannot yield degree at least $n$.

</details>
<details>
<summary>Hint 2</summary>

Use the absence of zero divisors.

</details>
<details>
<summary>Solution</summary>

A linear dependence would give $ag\\equiv0$ modulo $x^n-1$ with $\\deg a<k$. If $a\\ne0$, its product has degree below $n$ and is nonzero, so it cannot be divisible by the degree-$n$ modulus. Thus $a=0$ and all basis coefficients vanish.

</details>

### Exercise 4.4
<a id="cyclic-codes-ex-4"></a>

Explain the subtraction in systematic encoding over nonbinary fields.

<details>
<summary>Hint 1</summary>

Division gives $x^rm=ag+s$.

</details>
<details>
<summary>Hint 2</summary>

Isolate the multiple of $g$.

</details>
<details>
<summary>Solution</summary>

The codeword must be $x^rm-s=ag$. Adding $s$ instead generally leaves $2s$ and need not be divisible by $g$. Binary arithmetic is a special case in which $2s=0$ and the signs coincide.

</details>

### Exercise 4.5
<a id="cyclic-codes-ex-5"></a>

Derive the check-polynomial condition with a legitimate cancellation.

<details>
<summary>Hint 1</summary>

Work in the polynomial integral domain.

</details>
<details>
<summary>Hint 2</summary>

Do not cancel a zero divisor only inside the quotient.

</details>
<details>
<summary>Solution</summary>

Writing $f=gh$, the condition $ch\\equiv0$ means $ch=agh$ for some polynomial $a$. Since $h$ is nonzero in the polynomial ring, cancellation gives $c=ag$. The forward implication is immediate. This proves equivalence without assuming the quotient itself is a domain.

</details>

### Exercise 4.6
<a id="cyclic-codes-ex-6"></a>

Why is the reciprocal needed for the dual generator?

<details>
<summary>Hint 1</summary>

Coordinate inner products reverse one polynomial’s exponents.

</details>
<details>
<summary>Hint 2</summary>

Use the constant coefficient of $c(x)d(x^{-1})$.

</details>
<details>
<summary>Solution</summary>

Orthogonality is encoded by products with $x^{-1}$, not by ordinary same-direction polynomial multiplication. Reversing $h$ makes $h^\\ast(x^{-1})$ a monomial times $h(x)$, so the product with $g$ contains the modulus. Without the reciprocal this cancellation need not occur.

</details>

### Exercise 4.7
<a id="cyclic-codes-ex-7"></a>

Show root sets of base-field divisors are Frobenius closed.

<details>
<summary>Hint 1</summary>

Apply the $q$th power to a zero evaluation.

</details>
<details>
<summary>Hint 2</summary>

Base-field coefficients are fixed.

</details>
<details>
<summary>Solution</summary>

If $g(\\beta)=0$, then $g(\\beta^q)=g(\\beta)^q=0$ because its coefficients satisfy $a^q=a$. Repetition gives the entire orbit. This is the source of cyclotomic exponent classes.

</details>

### Exercise 4.8
<a id="cyclic-codes-ex-8"></a>

Give two repeated-root cyclic codes with the same zero set and different dimensions.

<details>
<summary>Hint 1</summary>

Use binary length four.

</details>
<details>
<summary>Hint 2</summary>

Choose different powers of $x+1$.

</details>
<details>
<summary>Solution</summary>

Generators $x+1$ and $(x+1)^2$ both vanish only at one but have degrees one and two. Their dimensions are three and two. Root multiplicities distinguish them, so an ordinary set of roots is insufficient.

</details>

### Exercise 4.9
<a id="cyclic-codes-ex-9"></a>

Can every cyclic code be assumed to have large distance?

<details>
<summary>Hint 1</summary>

The whole space is cyclic.

</details>
<details>
<summary>Hint 2</summary>

Its generator is one.

</details>
<details>
<summary>Solution</summary>

No. The whole space has minimum distance one. Cyclicity is an algebraic symmetry, not a distance guarantee. Specific generators and a proved root or combinatorial bound are needed for stronger protection.

</details>

### Exercise 4.10
<a id="cyclic-codes-ex-10"></a>

State exactly where the square-free hypothesis enters this chapter.

<details>
<summary>Hint 1</summary>

Compare divisor and dimension arguments with root arguments.

</details>
<details>
<summary>Hint 2</summary>

The derivative condition identifies distinct roots.

</details>
<details>
<summary>Solution</summary>

The ideal classification, dimension formula, systematic encoding and reciprocal dual formula work for every positive length. The assumption $\\gcd(n,q)=1$ is used when identifying the code by a set of distinct roots and organising them into ordinary Frobenius orbits without multiplicities.

</details>

## Summary

Cyclic linear codes are exactly divisor-generated ideals in the polynomial quotient. Degree gives dimension, division gives systematic encoding, and reciprocal check polynomials generate duals. Distinct-root descriptions require length coprime to characteristic; repeated-root codes retain multiplicity data.
`;export{e as default};