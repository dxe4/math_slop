
# Quadratic Integers, Ideals, and Factorization Failure {#section-1-quadratic-integers-ideals-and-factorization-failure}

Integer equations often factor after adjoining a square root. The larger ring can make a proof possible—but only if its units, divisibility, and factorization are understood. Quadratic rings show both success, as in Gaussian integers, and failure, as in $\mathbb{Z}[\sqrt{-5}]$. Ideals restore unique factorization at the correct level.

This chapter assumes ring basics, unique factorization in $\mathbb{Z}$, and quadratic residues. It develops quadratic integer rings, norms, units, Euclidean Gaussian arithmetic, explicit element-factorization failure, ideals, ideal norms, and the class-group obstruction.

This supported primary adaptation retains the earlier Euler proofs, examples
and exercise identifiers. The [exact retained seed](retained-seed-quadratic-integers-ideals.md)
preserves its original wording and parent metadata; current primary exercises
add two hint stages and full solution reveals. The old book and its
learner records remain independently addressable.

Numbered chapter references inside preserved passages use the original book’s
numbering. Current semantic links identify the preparation and continuation.
The source-era Gaussian proof remains in [the earlier sums-of-squares reading](../number-theory-proof-reference/pythagorean-triples-sums-squares.md).

<a id="section-15-1-rings-of-quadratic-integers"></a>
## 1. Rings of quadratic integers {#section-17-1-rings-of-quadratic-integers}

Let $d$ be a squarefree integer with $d\ne1$, so $K=\mathbb{Q}(\sqrt{d})$ is quadratic. Its ring of algebraic integers is

$\mathcal{O}_{K}=\mathbb{Z}[\sqrt{d}]$ when $d\equiv 2,3 \bmod 4$,

and

$\mathcal{O}_{K}=\mathbb{Z}[(1+\sqrt{d})/2]$ when $d\equiv 1 \bmod 4$.

Using $\mathbb{Z}[\sqrt{d}]$ in the second case misses integral elements and can give wrong ideal or discriminant statements.

Conjugation sends $a+b \sqrt{d}$ to $a-b \sqrt{d}$. Trace and norm are

$\operatorname{Tr}(\alpha)=\alpha+\overline{\alpha}$, $N(\alpha)=\alpha\overline{\alpha}$.

Norm is multiplicative. In imaginary quadratic fields it is nonnegative; in real quadratic fields it may be negative.

<a id="section-33-2-units-and-norm"></a>
## 2. Units and norm {#section-35-2-units-and-norm}

If $\alpha$ is a unit, $N(\alpha)=\pm 1$ because norms of inverse elements multiply to one. Conversely an algebraic integer of norm $\pm 1$ has inverse $\pm \overline{\alpha}$ in the ring.

In $\mathbb{Z}[i]$, norm is $a^{2}+b^{2}$, so the units are $\pm 1,\pm i$. In $\mathbb{Z}[\sqrt{2}]$, the unit $1+\sqrt{2}$ has norm $-1$, and its powers give infinitely many units, tied to Pell equations.

<a id="section-39-3-gaussian-integers-are-euclidean"></a>
## 3. Gaussian integers are Euclidean {#section-41-3-gaussian-integers-are-euclidean}

For $\alpha,\beta \in \mathbb{Z}[i]$, $\beta\ne 0$, choose the Gaussian integer $q$ nearest to $\alpha/\beta$ in both real and imaginary coordinates. Then $r=\alpha-q \beta$ satisfies

$N(r)\le N(\beta)/2<N(\beta)$.

Thus $\mathbb{Z}[i]$ is Euclidean, hence a PID and UFD. Gcds, Bezout identities, and Euclid's lemma hold up to multiplication by the four units.

Rational primes behave as follows:

- $2=-i(1+i)^{2}$ ramifies;
- $p\equiv 1 \bmod 4$ splits into conjugate Gaussian primes;
- $p\equiv 3 \bmod 4$ remains Gaussian prime.

The split case reflects that $-1$ is a square modulo $p$, and produces $p=a^{2}+b^{2}$.

<a id="section-55-4-element-factorization-can-fail"></a>
## 4. Element factorization can fail {#section-57-4-element-factorization-can-fail}

In $R=\mathbb{Z}[\sqrt{-5}]$,

$6=2*3=(1+\sqrt{-5})(1-\sqrt{-5})$.

These factors are irreducible and no factor on one side is associate to a factor on the other. Norms are $4,9,6,6$. A nontrivial factorization would force an element of norm $2$ or $3$; equations $a^{2}+5b^{2}=2,3$ have no integer solutions. This proves irreducibility.

The example shows irreducible need not imply prime: $2$ divides the product $(1+\sqrt{-5})(1-\sqrt{-5})=6$ but divides neither factor in the ring.

<a id="section-65-5-ideals"></a>
## 5. Ideals {#section-67-5-ideals}

An ideal $I$ is an additive subgroup closed under multiplication by ring elements. The principal ideal $(\alpha)$ contains all multiples of $\alpha$. For elements $\alpha,\beta$,

$(\alpha,\beta)=\{r \alpha+s \beta:r,s \in R\}$.

Ideal divisibility reverses containment: $(\alpha)\mid (\beta)$ means $(\beta) \subseteq (\alpha)$, matching $\alpha\mid \beta$.

In $\mathbb{Z}$, every ideal is $nZ$; in a general quadratic ring, nonprincipal ideals may exist.

<a id="section-75-6-ideal-norms-and-factorization-repair"></a>
## 6. Ideal norms and factorization repair {#section-77-6-ideal-norms-and-factorization-repair}

For nonzero ideal $I$ in $\mathcal{O}_{K}$, its norm is the finite index

$N(I)=\lvert \mathcal{O}_{K}/I\rvert$.

It is multiplicative. A nonzero proper prime ideal has quotient an integral domain; in this finite setting the quotient is a field, so maximal and nonzero prime ideals coincide.

Rings of integers of number fields are Dedekind domains: every nonzero proper ideal factors uniquely into prime ideals. In $\mathbb{Z}[\sqrt{-5}]$, let

$p_{2}=(2,1+\sqrt{-5})$, $p_{3}=(3,1+\sqrt{-5})$, $q_{3}=(3,1-\sqrt{-5})$.

Then $(2)=p_{2}^{2}$, $(3)=p_{3}q_{3}$, $(1+\sqrt{-5})=p_{2}p_{3}$, and its conjugate uses $p_{2}q_{3}$. The two element factorizations of six become the same prime-ideal factorization.

<a id="section-89-7-class-group"></a>
## 7. Class group {#section-91-7-class-group}

Nonzero fractional ideals form a group under multiplication. Modding out by nonzero principal fractional ideals gives the ideal class group. Its size is the class number.

Class number one means every ideal is principal; for a ring of integers this implies a PID and UFD. A nontrivial class measures the obstruction to choosing an element generator. The class group does not say elements cease to factor; it measures failure of unique element factorization.

<a id="section-95-8-scope-audit"></a>
## 8. Scope audit {#section-97-8-scope-audit}

Norm arguments require checking their sign and value set. A multiplicative norm can prove irreducibility but does not automatically prove primality. Ideal unique factorization belongs to Dedekind domains, not arbitrary subrings. Use a dated source for historical claims and class-number tables.

<a id="section-99-exercises-with-complete-solutions"></a>
## 9. Development: prove the quadratic integral-basis test {#section-446-9-development-prove-the-quadratic-integral-basis-test}

The field $\mathbb Q(\sqrt d)$ and its integer ring answer different questions. The field permits rational coefficients, while its integers must satisfy monic integer equations. An order is a subring containing one that is a full-rank integer lattice in the field. Being an order does not guarantee that every algebraic integer in the field has been included.

Here is a derivation of §1's formula. We use the standard algebraic-integer lemma that a monic minimal polynomial of an algebraic integer over $\mathbb Q$ has integer coefficients. In degree two this says that $\alpha=x+y\sqrt d$ is integral exactly when its trace $2x$ and norm $x^2-dy^2$ are integers. For a rational element the corresponding assertion is that a rational algebraic integer is an integer. Both implications follow from the monic-minimal-polynomial lemma; the converse follows from the monic equation
$$T^2-(2x)T+(x^2-dy^2)=0.$$

Write $2x=m\in\mathbb Z$ and $N(\alpha)=k\in\mathbb Z$. Then
$$d(2y)^2=m^2-4k\in\mathbb Z.$$
If $2y=u/v$ in lowest terms with $v>0$, the divisibility $v^2\mid du^2$ forces $v^2\mid d$. Since $d$ is squarefree, $v=1$. Thus $\alpha=(m+n\sqrt d)/2$ for integers $m,n$, and its norm is integral precisely when
$$m^2-dn^2\equiv0\pmod4.$$

If $n$ is even, $m$ must be even. If $n$ is odd, a square is one modulo four, so the congruence requires $d\equiv1\pmod4$ and $m$ odd. Therefore for $d\equiv2,3\pmod4$ both coefficients are integral. For $d\equiv1\pmod4$, the allowed pairs have the same parity and are exactly
$$a+b\omega,\qquad \omega=(1+\sqrt d)/2,\quad a,b\in\mathbb Z.$$
Conversely these elements are integral because $\omega$ satisfies
$$T^2-T+(1-d)/4=0.$$
This proves fullness of the displayed integer basis, rather than merely exhibiting two independent integral elements.

For $d=5$, the basis is $(1,\omega)$, with $\omega^2=\omega+1$. Its multiplication is closed over the integers. The smaller ring $\mathbb Z[\sqrt5]$ contains $a+b\sqrt5=(a-b)+2b\omega$, so it has index two in the full integer ring. The missing element $\omega$ cannot be recovered by taking additional integer combinations of the smaller basis. Changing a basis inside one lattice and enlarging the lattice are different operations.

This distinction matters even for units. The element $\omega$ has norm minus one and inverse $\omega-1$ in the full integer ring. Neither is in $\mathbb Z[\sqrt5]$. A unit statement must name its ring; a multiplicative inverse in the ambient field does not by itself make an element a unit of a chosen order.

In the basis $(1,\omega)$ for $d\equiv1\pmod4$, the norm is
$$N(a+b\omega)=a^2+ab+\frac{1-d}{4}b^2.$$
For $d=5$ this becomes $a^2+ab-b^2$. Its sign can change, even on units. If $F_0=0,F_1=1$ and $F_{k+1}=F_k+F_{k-1}$ for $k\ge1$, the relation $\omega^2=\omega+1$ proves by induction that
$$\omega^k=F_k\omega+F_{k-1}\qquad(k\ge1).$$
Every power has integer coordinates, and its norm is $(-1)^k$. Negative powers also lie in the full integer ring because $\omega^{-1}=\omega-1$.

Under the real embedding with $\sqrt5>0$, $\omega>1$, so its nonnegative powers are distinct and give infinitely many units. All of them generate the same unit ideal of norm one. This constructs an infinite subgroup; it does not by itself prove that an exhibited unit generates the whole unit group. A complete fundamental-unit or Pell classification needs the additional minimality argument developed in that theory. In particular, counting elements of a given field norm in a real quadratic ring is very different from the finite positive Gaussian norm counts of Chapter 10.

<a id="section-474-10-development-turn-gaussian-arithmetic-into-ideal-cert"></a>
## 10. Development: turn Gaussian arithmetic into ideal certificates {#section-476-10-development-turn-gaussian-arithmetic-into-ideal-cert}

**Worked example: a Gaussian Bezout certificate and its quotient.**

The complete Gaussian division, Bezout and unique-factorization proof is already given in Chapter 10, §9, “Development: Gaussian division supplies the missing arithmetic”; its §10 proves the split, inert and ramified rational-prime cases. Those results assume nonzero divisors for division and identify gcds only up to the four units. We reuse those proofs here and develop their ideal consequences.

Let $I$ be a nonzero ideal of $\mathbb Z[i]$. Choose a nonzero $\delta\in I$ of least positive norm. For any $\alpha\in I$, Gaussian division gives $\alpha=q\delta+r$ with $N(r)<N(\delta)$. Since $I$ is closed under subtraction and multiplication, $r\in I$. Minimality forces $r=0$. Hence $I=(\delta)$. This proves the PID assertion from the Euclidean algorithm, including ideals not initially supplied with a single generator.

For example, a Gaussian gcd of $13$ and $5+i$ is $3-2i$, using Chapter 10's exact divisions. Consequently
$$(13,5+i)=(3-2i).$$
The two containments can also be certified directly:
$$3-2i=13-2(5+i),\quad
5+i=(1+i)(3-2i),\quad
13=(3+2i)(3-2i).$$
These equations establish equality of ideals without a numerical gcd routine. They simultaneously display a generator, a Bezout combination, and the divisibility of both original generators.

The quotient provides a different certificate. The map $a+bi\mapsto a-5b\pmod{13}$ is a ring homomorphism because $(-5)^2\equiv-1\pmod{13}$. Its kernel is $(13,5+i)$, and it is onto $\mathbb F_{13}$. Thus the ideal has index thirteen and is prime. Its generator's field norm is also thirteen. Equality of these two norms links the element calculation to the quotient-ring calculation.

The conjugate ideal $(3+2i)$ is a different prime ideal. Their product is $(13)$, but their generators may be multiplied by units without changing either ideal. This explains why ideals naturally remove the ambiguity of associated elements. They retain divisibility data while ignoring an irrelevant choice of generator.

The least-norm argument used a genuinely Euclidean norm. A multiplicative positive norm alone does not show that every ideal contains an element that divides its other elements. In $\mathbb Z[\sqrt{-5}]$, the norm still detects units and some irreducibles, yet a remainder bound of the Gaussian kind is unavailable. The nonprincipal ideal below exhibits the obstruction concretely.

<a id="section-496-11-development-certify-the-ideal-repair-of-the-factoriz"></a>
## 11. Development: certify the ideal repair of the factorization of six {#section-498-11-development-certify-the-ideal-repair-of-the-factoriz}

**Worked example: two element factorizations give one prime-ideal factorization.**

Put $s=\sqrt{-5}$ and $A=\mathbb Z[s]$. This is the full integer ring by §9, since $-5\equiv3\pmod4$. The norm $a^2+5b^2$ is a positive integer on nonzero elements, and its only units are $\pm1$. There are no elements of norm two or three: a nonzero $b$ already contributes at least five, while $b=0$ would require an integer square equal to two or three.

These exclusions prove the irreducibility of $2,3,1+s,1-s$ carefully. A nonunit factorization of norm four needs factors of norm two. One of norm nine needs factors of norm three. One of norm six needs factors of norms two and three. None exists. The four norms also separate the factors across the two factorizations of six; the two norm-six factors are not associated because they are neither equal nor negatives. Thus the failure is genuinely one of unique factorization, not merely a rearrangement by units.

Use uppercase ideal labels $P_2,P_3,Q_3$ for §6's $p_2,p_3,q_3$, respectively; rational primes retain lowercase labels. Define
$$P_2=(2,1+s),\quad
P_3=(3,1+s),\quad
Q_3=(3,1-s).$$
Evaluation at $s=1$ modulo two gives $A/P_2\cong\mathbb F_2$. Modulo three, evaluation at $s=-1$ and $s=1$ gives the other two quotients $\mathbb F_3$. These evaluations respect $s^2+5=0$, and their kernels are the displayed ideals. In particular all three ideals are proper and prime, with norms two, three and three.

The products in §6 can be checked with actual generators. The ideal $P_2^2$ is generated by $4,2+2s,-4+2s$. All lie in $(2)$; subtracting the last from the second gives six, and subtracting four then gives two. Hence $P_2^2=(2)$. Similarly $P_3Q_3$ contains nine and $(1+s)(1-s)=6$, hence three; all its product generators are multiples of three. Therefore it is $(3)$.

For $P_2P_3$, every product generator is a multiple of $1+s$: the constant six equals $(1+s)(1-s)$. Conversely the product contains both $2(1+s)$ and $3(1+s)$, whose difference is $1+s$. Thus
$$P_2P_3=(1+s).$$
Conjugation gives $P_2Q_3=(1-s)$, since the conjugate of $P_2$ is itself. Multiplying these equalities turns both element factorizations of six into $P_2^2P_3Q_3$.

The ideal $P_2$ is not principal. If it were $(\alpha)$, its quotient size would force $|N(\alpha)|=2$, which was excluded. Its class nevertheless has order two because its square is principal. Thus an ideal can carry a nontrivial obstruction even though its product with another nonprincipal ideal has an element generator. Ideal factorization records that obstruction instead of pretending that irreducible elements have become prime.

<a id="section-518-12-development-keep-ideal-norms-and-fractional-ideals-i"></a>
## 12. Development: keep ideal norms and fractional ideals in their domains {#section-520-12-development-keep-ideal-norms-and-fractional-ideals-i}

An integral ideal here means an ideal contained in the full ring $A=\mathcal O_K$. For a nonzero such ideal, choose $0\ne\alpha\in I$. Multiplication by $\alpha$ is an injective integer-linear map on an integral basis, with nonzero determinant $N_{K/\mathbb Q}(\alpha)$. Its image $(\alpha)$ therefore has finite index. Since $(\alpha)\subseteq I\subseteq A$, the quotient $A/I$ is finite as well. Its cardinality is the positive integer ideal norm.

For a principal ideal the same determinant argument gives $N((\alpha))=|N_{K/\mathbb Q}(\alpha)|$. Absolute value matters in real fields: a unit of field norm minus one still generates the unit ideal, whose ideal norm is one. The zero ideal is outside the finite-index definition because $A/(0)$ is infinite. The unit ideal is inside it and has norm one, even though it is not a proper prime ideal.

A nonzero fractional ideal is a nonzero finitely generated $A$-submodule of $K$ that becomes integral after multiplication by a nonzero integer. It need not be a subset of $A$, so $A/I$ is then not a quotient ring and may not even be an additive quotient group in that direction. Define its norm by choosing $d>0$ with $dI\subseteq A$ and setting
$$N(I)=N(dI)/d^{[K:\mathbb Q]}.$$
Scaling a rank-$n$ lattice by an integer $k$ multiplies its index by $k^n$. Using a common denominator therefore proves that this definition is independent of $d$. The result is a positive rational number, rather than necessarily an integer.

We import the Dedekind-domain theorem precisely for the full ring of integers of a number field: every nonzero fractional ideal is invertible, nonzero integral ideals factor uniquely into nonzero prime ideals, and ideal norm is multiplicative. These are structural theorems, not consequences of the determinant formula for one principal ideal. The hypotheses must accompany an application to a newly chosen ring.

The class group then consists of invertible nonzero fractional ideals modulo principal ones. In this setting every nonzero ideal is allowed. In a general order, only the invertible fractional ideals form such a group; the collection of all nonzero fractional ideals need not be a group. The next example shows an explicit failed cancellation rather than merely warning that something might go wrong.

<a id="section-532-13-development-a-nonmaximal-order-can-break-the-ideal-r"></a>
## 13. Development: a nonmaximal order can break the ideal rules {#section-534-13-development-a-nonmaximal-order-can-break-the-ideal-r}

**Worked example: a nonmaximal order and a failed norm product.**

Let $R=\mathbb Z[\sqrt5]$ and $S=\mathcal O_{\mathbb Q(\sqrt5)}=\mathbb Z[\omega]$, where $\omega=(1+\sqrt5)/2$. The conductor is
$$C=\{x\in S:xS\subseteq R\}=2S=(2,1+\sqrt5)\quad\text{as an }R\text{-ideal}.$$
To verify the equality, an element of the conductor must first lie in $R$, since $1\in S$. Write it as $a+b\sqrt5$. Multiplying by $\omega$ gives coefficients $(a+5b)/2$ and $(a+b)/2$ in the basis $(1,\sqrt5)$. Both are integers exactly when $a+b$ is even. Those are precisely the integer combinations of $2$ and $1+\sqrt5$, namely $2S$.

Write $J=C$ and use the additive basis $(2,1+\sqrt5)$ relative to $(1,\sqrt5)$. Its determinant is two, so $[R:J]=2$. Direct multiplication gives
$$J^2=(4,2+2\sqrt5,6+2\sqrt5)
     =(4,2+2\sqrt5)=2J.$$
The additive basis of $J^2$ has determinant eight, so $[R:J^2]=8$, whereas $[R:J]^2=4$. Thus finite-index ideal norms in this nonmaximal order are not multiplicative on these ideals. This does not contradict the full-integer-ring theorem.

The same equality proves noninvertibility. If a fractional $R$-ideal $L$ satisfied $JL=R$, multiplication of $J^2=2J$ by $L$ would give $J=2R$. But $1+\sqrt5\in J$ is not in $2R$. Hence no such inverse exists. The ring is not integrally closed: $\omega$ is integral over $R$, belongs to its fraction field, and is absent from $R$. This is exactly a missing Dedekind hypothesis.

After extending to $S$, the ideal is simply $JS=2S$, a principal ideal with $S$-norm four; its square has $S$-norm sixteen. The different answer does not arise from changing the elements of the field. The ambient integer lattice, and hence the quotient used to define norm, has changed.

For contrast, the class obstruction in $\mathbb Z[\sqrt{-5}]$ occurs inside a full integer ring, where invertibility and norm multiplicativity do hold. The standard Minkowski ideal-class bound, stated precisely in the next chapter, is $2\sqrt{20}/\pi<3$ here. Every class therefore has an integral ideal of norm one or two. Norm one gives the unit ideal; an ideal of norm two has quotient $\mathbb F_2$, and the unique evaluation of $s^2+5$ there gives $P_2$. Since $P_2$ is nonprincipal and its square principal, the class group has exactly two elements. This conclusion imports that explicit bound; it does not infer a class number from the single failed factorization of six alone.

<a id="section-551-14-development-use-lattice-coordinates-without-forgetti"></a>
## 14. Development: use lattice coordinates without forgetting ring structure {#section-553-14-development-use-lattice-coordinates-without-forgetti}

An ideal is an additive lattice with an extra multiplication condition. In $A=\mathbb Z[s]$, $s^2=-5$, the additive subgroup generated by $2$ and $s$ has index two, but is not an ideal: it contains $s$ and would then have to contain $s^2=-5$, whose constant coordinate is odd. An index calculation alone cannot certify an ideal or a quotient ring. For a proposed additive basis, multiplication by the ring generators must preserve its integer span.

For $P_2=(2,1+s)$, the additive basis really is $(2,1+s)$. Multiplication by $s$ preserves its span because $2s=2(1+s)-2$ and $s(1+s)=s-5=(1+s)-6$. Its determinant is two. The membership test is correspondingly simple: $a+bs\in P_2$ exactly when $a-b$ is even, equivalently $a+b$ is even. Subtracting $b(1+s)$ leaves the even integer $a-b$.

Likewise $P_3$ has additive basis $(3,1+s)$ and membership condition $a-b\equiv0\pmod3$. For $Q_3$ the condition is $a+b\equiv0\pmod3$. These are concrete integer-lattice tests for the earlier quotient maps. They show precisely how the same additive index can carry different ring-homomorphism kernels.

For a general nonzero $\alpha=a+bs$, multiplication on $(1,s)$ has matrix
$$M_\alpha=\begin{pmatrix}a&-5b\\b&a\end{pmatrix}.$$
The determinant $a^2+5b^2$ gives the index of $(\alpha)$. For $\alpha=1+s$, it is six. Setting $s=-1$ in the quotient imposes $s^2+5=6=0$, so
$$A/(1+s)\cong\mathbb Z/6\mathbb Z.$$
This is a proper quotient of size six, with the nonzero classes of two and three multiplying to zero. Consequently $(1+s)$ is not prime, although the element $1+s$ is irreducible by the norm argument. The quotient criterion from original Exercise 17 is detecting primality, not irreducibility.

Ramification also becomes visible inside a quotient. In $A/(2)$ the nonzero element $s+1$ has square zero, since $(s+1)^2=-4+2s$. Hence this four-element ring is not the field with four elements; it is $\mathbb F_2[\varepsilon]/(\varepsilon^2)$ with $\varepsilon=s+1$. By contrast $A/P_2$ has two elements and is a field. Confusing a rational-prime ideal $(2)$ with its prime factor $P_2$ would erase exactly the exponent two.

The factorization of $(6)$ gives a complete compatibility check:
$$A/(6)\cong A/(2)\times A/P_3\times A/Q_3.$$
The three ideals are pairwise comaximal: the first has different rational residue characteristic from the other two, and the last two have distinct evaluations of $s$ modulo three. Their product is $(6)$. The ideal CRT therefore applies, and the cardinalities multiply to $4\cdot3\cdot3=36$, agreeing with the determinant of multiplication by six on a rank-two lattice.

These calculations identify three different kinds of certificate. Integer bases prove additive membership and index; quotient maps prove ideal kernels and residue fields; product identities explain divisibility and ramification. None can be silently replaced by the others. Their agreement is a useful exact check when element factorization no longer has the familiar behavior of ordinary prime factorization.

<a id="section-573-exercises-optional-order-and-norm-boundaries"></a>

## Summary

<a id="section-443-chapter-summary"></a>
Quadratic integer rings require the correct integral basis. Norms control units and sometimes irreducibility; Gaussian Euclidean division yields element unique factorization. In $\mathbb{Z}[\sqrt{-5}]$ elements factor nonuniquely, while prime ideals factor uniquely. The class group records the obstruction to making those ideals principal.
<a id="section-444-9-development-prove-the-quadratic-integral-basis-test"></a>

<a id="section-627-summary-and-next-connection"></a>
Correct integer rings, conjugate norms and exact ideal containments separate
element factorisation from prime-ideal arithmetic. Gaussian Euclidean division
gives principal ideals, while the negative-five field and nonmaximal orders
show precisely which stronger assertions fail. The next primary develops
embeddings, full integral-basis certificates and the essential index condition
for prime decomposition. Norm and quotient calculations retain their nonzero
and maximal-order hypotheses throughout.

## Exercises {#section-101-exercises-with-complete-solutions}

### Exercise 1: Correct ring {#quadratic-integers-ideals-ex-1}

What is the ring of integers of $\mathbb{Q}(\sqrt{5})$?

<details>
<summary>Hint 1</summary>
Check the residue of the squarefree radicand modulo four.
</details>
<details>
<summary>Hint 2</summary>
The half-integer generator satisfies a monic quadratic and is absent from the smaller order.
</details>
<details>
<summary>Solution</summary>
Since $5\equiv 1 \bmod 4$, it is $\mathbb{Z}[(1+\sqrt{5})/2]$, not merely $\mathbb{Z}[\sqrt{5}]$.
</details>

### Exercise 2: Norm computation {#quadratic-integers-ideals-ex-2}

Compute $N(3+2i)$.

<details>
<summary>Hint 1</summary>
Multiply the Gaussian integer by its conjugate.
</details>
<details>
<summary>Hint 2</summary>
Its real-coordinate squares are nine and four.
</details>
<details>
<summary>Solution</summary>
It is $(3+2i)(3-2i)=9+4=13$.
</details>

### Exercise 3: Norm multiplicativity {#quadratic-integers-ideals-ex-3}

Prove $N(\alpha \beta)=N(\alpha)N(\beta)$.

<details>
<summary>Hint 1</summary>
Write the norm as an element times its conjugate.
</details>
<details>
<summary>Hint 2</summary>
Conjugation is multiplicative and the ring is commutative, so regroup the four factors.
</details>
<details>
<summary>Solution</summary>
Conjugation is multiplicative, so $\alpha \beta \overline{\alpha \beta}=\alpha \beta \overline{\alpha}\overline{\beta}$, and commutativity rearranges the factors.
</details>

### Exercise 4: Gaussian units {#quadratic-integers-ideals-ex-4}

Find all units of $\mathbb{Z}[i]$.

<details>
<summary>Hint 1</summary>
A unit must have norm one in the Gaussian ring.
</details>
<details>
<summary>Hint 2</summary>
Solve the sum of two integer squares equal to one.
</details>
<details>
<summary>Solution</summary>
Unit norm must be one, so $a^{2}+b^{2}=1$; solutions give $\pm 1,\pm i$.
</details>

### Exercise 5: Real quadratic unit {#quadratic-integers-ideals-ex-5}

Verify $1+\sqrt{2}$ is a unit.

<details>
<summary>Hint 1</summary>
Compute the norm of one plus square root two.
</details>
<details>
<summary>Hint 2</summary>
Its norm is minus one and its inverse is the negative conjugate.
</details>
<details>
<summary>Solution</summary>
Its norm is $1-2=-1$, and its inverse is $\sqrt{2}-1$, which lies in the ring.
</details>

### Exercise 6: Gaussian division {#quadratic-integers-ideals-ex-6}

Divide $7+5i$ by $3+i$ with smaller-norm remainder.

<details>
<summary>Hint 1</summary>
Divide in the complex field, then round both coordinates to nearby integers.
</details>
<details>
<summary>Hint 2</summary>
Use quotient three plus i and subtract its product with the divisor.
</details>
<details>
<summary>Solution</summary>
The complex quotient is $(26+8i)/10=2.6+0.8i$; choose $q=3+i$. Then $q(3+i)=8+6i$, so $r=-1-i$, whose norm $2$ is below $N(3+i)=10$.
</details>

### Exercise 7: Split thirteen {#quadratic-integers-ideals-ex-7}

Factor $13$ in $\mathbb{Z}[i]$.

<details>
<summary>Hint 1</summary>
Look for a sum of two squares equal to thirteen.
</details>
<details>
<summary>Hint 2</summary>
Three squared plus two squared supplies the conjugate factors.
</details>
<details>
<summary>Solution</summary>
$13=(3+2i)(3-2i)$ because $13=3^{2}+2^{2}$.
</details>

### Exercise 8: Ramified two {#quadratic-integers-ideals-ex-8}

Verify $2=-i(1+i)^{2}$.

<details>
<summary>Hint 1</summary>
Expand the square of one plus i.
</details>
<details>
<summary>Hint 2</summary>
It is twice i; multiplication by minus i gives two.
</details>
<details>
<summary>Solution</summary>
$(1+i)^{2}=2i$; multiplying by $-i$ gives $2$.
</details>

### Exercise 9: Inert example {#quadratic-integers-ideals-ex-9}

Why cannot $3$ have a Gaussian factor of norm $3$?

<details>
<summary>Hint 1</summary>
Reduce the sum-of-two-squares equation modulo four.
</details>
<details>
<summary>Hint 2</summary>
Integer squares are zero or one modulo four, so their sum is never three.
</details>
<details>
<summary>Solution</summary>
$a^{2}+b^{2}=3$ has no integer solution; squares modulo $4$ also show a sum cannot be $3 \bmod 4$.
</details>

### Exercise 10: Norm-six elements {#quadratic-integers-ideals-ex-10}

Verify norms of $1\pm \sqrt{-5}$.

<details>
<summary>Hint 1</summary>
Use the conjugate pair rather than treating square root minus five as real.
</details>
<details>
<summary>Hint 2</summary>
The norm is one squared plus five times one squared.
</details>
<details>
<summary>Solution</summary>
Each norm is $1^{2}+5*1^{2}=6$.
</details>

### Exercise 11: No norm two {#quadratic-integers-ideals-ex-11}

Prove $a^{2}+5b^{2}=2$ is insoluble.

<details>
<summary>Hint 1</summary>
Separate zero and nonzero second coordinates.
</details>
<details>
<summary>Hint 2</summary>
A nonzero second coordinate contributes at least five to the nonnegative norm.
</details>
<details>
<summary>Solution</summary>
If $b=0$, $a^{2}=2$; if $\lvert b\rvert\ge 1$, the left side is at least five unless impossible negative compensation occurs. Thus no solution.
</details>

### Exercise 12: Irreducible two {#quadratic-integers-ideals-ex-12}

Why does absence of norm two prove $2$ irreducible in $\mathbb{Z}[\sqrt{-5}]$?

<details>
<summary>Hint 1</summary>
The norm of the element two is four.
</details>
<details>
<summary>Hint 2</summary>
A nonunit factorization would require two factors with norm two, excluded by the preceding exercise.
</details>
<details>
<summary>Solution</summary>
A nonunit factorization of norm four would split the positive integer norm into factors exceeding one, necessarily $2*2$, requiring elements of norm two.
</details>

### Exercise 13: Not prime {#quadratic-integers-ideals-ex-13}

Why is $2$ not prime there?

<details>
<summary>Hint 1</summary>
Use the displayed factorization of six.
</details>
<details>
<summary>Hint 2</summary>
Neither one plus square root minus five nor its conjugate has both coefficients divisible by two.
</details>
<details>
<summary>Solution</summary>
It divides $6=(1+\sqrt{-5})(1-\sqrt{-5})$, but division of either factor by two has nonintegral coefficients, so it divides neither.
</details>

### Exercise 14: Ideal membership {#quadratic-integers-ideals-ex-14}

Show $6$ belongs to $(2,1+\sqrt{-5})$.

<details>
<summary>Hint 1</summary>
Use closure under multiplication by arbitrary ring elements.
</details>
<details>
<summary>Hint 2</summary>
The generator two multiplied by three already gives the required member.
</details>
<details>
<summary>Solution</summary>
Since the ideal contains every multiple of generator $2$, it contains $3*2=6$.
</details>

### Exercise 15: Quotient size {#quadratic-integers-ideals-ex-15}

Why does $\mathcal{O}_{K}/(\alpha)$ have size $\lvert N(\alpha)\rvert$ for nonzero principal ideals in a quadratic field?

<details>
<summary>Hint 1</summary>
Represent multiplication by the element in a full integral basis.
</details>
<details>
<summary>Hint 2</summary>
Its image lattice index is the absolute determinant, which is the field norm.
</details>
<details>
<summary>Solution</summary>
Multiplication by $\alpha$ is an integer-linear map on a rank-two basis whose determinant is the field norm; the index of its image is the absolute determinant.
</details>

### Exercise 16: Reversed containment {#quadratic-integers-ideals-ex-16}

If $\alpha\mid \beta$, prove $(\beta) \subseteq (\alpha)$.

<details>
<summary>Hint 1</summary>
Expand the divisibility equation as beta equal to alpha times gamma.
</details>
<details>
<summary>Hint 2</summary>
Every multiple of beta is then a multiple of alpha; keep the containment direction consistent.
</details>
<details>
<summary>Solution</summary>
Write $\beta=\alpha \gamma$; every $r \beta=\alpha(r \gamma)$ is a multiple of $\alpha$.
</details>

### Exercise 17: Prime quotient {#quadratic-integers-ideals-ex-17}

For a commutative ring $R$ with identity and a proper ideal $p$, why is $p$ prime exactly when $R/p$ has no zero divisors?

<details>
<summary>Hint 1</summary>
Translate a zero product of residue classes into membership of the product in the ideal.
</details>
<details>
<summary>Hint 2</summary>
Primality forces at least one factor class to vanish; also retain properness of the ideal.
</details>
<details>
<summary>Solution</summary>
Properness gives $1+p\ne0+p$, so the quotient is nonzero. For $a,b\in R$, $[a][b]=[0]$ means $ab\in p$; primality says $a\in p$ or $b\in p$, so at least one residue class is zero; both may be zero. Conversely, if a zero product forces at least one class to vanish, then $ab\in p$ forces $a\in p$ or $b\in p$; together with properness, this is exactly primality. In $\mathbb{Z}/5\mathbb{Z}$, $[0][0]=[0]$ has both factors zero, so "at least one" cannot be strengthened to "exactly one". In $\mathbb{Z}/6\mathbb{Z}$, $[2][3]=[0]$ with both factors nonzero, so $(6)$ is not prime. The whole ideal $p=(1)=\mathbb{Z}$ gives the one-element quotient $\mathbb{Z}/1\mathbb{Z}$: it has no nonzero zero divisors but is not an integral domain, and $p$ is not prime. This explains why the proper-ideal/nonzero-quotient condition is required.
</details>

### Exercise 18: Principal class {#quadratic-integers-ideals-ex-18}

What is the identity in the ideal class group?

<details>
<summary>Hint 1</summary>
The quotient identifies every nonzero principal fractional ideal with the identity class.
</details>
<details>
<summary>Hint 2</summary>
Multiplying any ideal by a principal fractional ideal leaves its class unchanged.
</details>
<details>
<summary>Solution</summary>
The class of principal fractional ideals; multiplying by a principal ideal does not change an ideal class.
</details>

### Exercise 19: Class number one {#quadratic-integers-ideals-ex-19}

Why does it imply element unique factorization in $\mathcal{O}_{K}$?

<details>
<summary>Hint 1</summary>
Class number one makes every nonzero integral ideal principal.
</details>
<details>
<summary>Hint 2</summary>
Use the PID implication to unique element factorization, not a norm-only shortcut.
</details>
<details>
<summary>Solution</summary>
Every ideal is principal, so the Dedekind domain is a PID. Every PID is a UFD.
</details>

### Exercise 20: Scope boundary {#quadratic-integers-ideals-ex-20}

Does unique ideal factorization imply every prime ideal has a prime-element generator?

<details>
<summary>Hint 1</summary>
Unique factorization is an assertion about products of ideals.
</details>
<details>
<summary>Hint 2</summary>
A nonprincipal prime ideal still has no element generator, despite its ideal-theoretic primality.
</details>
<details>
<summary>Solution</summary>
No. A nonprincipal prime ideal has no single generator. Ideal factorization remains unique even when element factorization fails.
</details>

<a id="section-441-chapter-summary"></a>

<a id="section-575-exercises-optional-order-and-norm-boundaries"></a>
### -Infinity. NTP-19-E21. A second conductor certificate {#section-579-ntp-19-e21-a-second-conductor-certificate}

Let $R=\mathbb Z[2i]\subset S=\mathbb Z[i]$ and $J=2S=(2,2i)$ as an $R$-ideal. Prove that $J$ is the conductor, compute $[R:J]$ and $[R:J^2]$, and decide whether $J$ is invertible as a fractional $R$-ideal. Explain why this does not contradict Gaussian ideal norm multiplicativity.

<details>
<summary>Hint 1</summary>
Write an arbitrary element of the smaller order and require its product with i to remain in that order.
</details>
<details>
<summary>Hint 2</summary>
Compare lattice indices in the basis one,two-i; cancellation of an alleged inverse would force the wrong principal ideal.
</details>

<a id="section-590-ntp-19-e22-a-fractional-principal-ideal-and-the-zero-bo"></a>
### -Infinity. NTP-19-E22. A fractional principal ideal and the zero boundary {#section-592-ntp-19-e22-a-fractional-principal-ideal-and-the-zero-bo}

In $S=\mathbb Z[i]$, put $\alpha=(1+i)/2$ and $I=\alpha S$. Determine $N(I)$ under the fractional norm definition, compare $I$ with $S$, and explain why neither a finite quotient $S/I$ nor a finite-index norm for the zero ideal is available.

<details>
<summary>Hint 1</summary>
Clear the denominator by multiplying the fractional ideal by two.
</details>
<details>
<summary>Hint 2</summary>
Its fractional norm rescales by the square of two; compare containment using the product of its generator with one minus i.
</details>

<a id="section-603-solutions-optional-order-and-norm-boundaries"></a>

## Solutions: optional order and norm boundaries {#section-605-solutions-optional-order-and-norm-boundaries}

<a id="section-605-ntp-19-e21-a-second-conductor-certificate-solution"></a>
### NTP-19-E21. A second conductor certificate — solution {#section-607-ntp-19-e21-a-second-conductor-certificate-solution}

<details>
<summary>Solution</summary>
An element of the conductor must lie in $R$, so write it as $a+2bi$. Multiplication by $i$ lies in $R$ exactly when $a$ is even. This gives the conductor $2S$, additively generated by $2,2i$. In the basis $(1,2i)$ of $R$, that lattice has determinant two. Its square is $4S=2J$, with basis $(4,4i)$ and determinant eight relative to the same basis. Thus the two indices are two and eight. If $J$ were invertible, $J^2=2J$ would imply $J=2R$, contradicted by $2i\in J$ but $2i\notin2R$. The ring $R$ is a nonmaximal order; the theorem for the full Gaussian integer ring applies to $S$, where the norm of $2S$ is four and its square has norm sixteen.
</details>

<a id="section-612-ntp-19-e22-a-fractional-principal-ideal-and-the-zero-bo"></a>
### NTP-19-E22. A fractional principal ideal and the zero boundary — solution {#section-614-ntp-19-e22-a-fractional-principal-ideal-and-the-zero-bo}

<details>
<summary>Solution</summary>
Since $2I=(1+i)S$ has integral ideal norm two and the field degree is two, $N(I)=2/2^2=1/2$. Also $\alpha(1-i)=1$, so $S\subset I$, and the containment is strict because $\alpha\notin S$. Thus $S/I$ is not defined as an additive quotient in that direction; instead $I/S$ has two elements. The zero ideal has quotient $S$, an infinite set, and has no inverse as a fractional ideal. It is excluded from both the positive finite-index integral norm and the invertible fractional-ideal group.
</details>

<a id="section-619-references-integer-rings-ideals-and-imported-geometry"></a>

## Sources: integer rings, ideals and imported geometry {#section-621-references-integer-rings-ideals-and-imported-geometry}

The monic-minimal-polynomial lemma used in the locally proved quadratic basis classification is J. S. Milne's [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf), version 3.08, Proposition 2.11 and Remark 2.12, applied to the integrally closed ring $\mathbb Z$. Gaussian division and factorization are reused from [Chapter 10](../number-theory-proof-reference/pythagorean-triples-sums-squares.md), §§9–10, under their exact nonzero, norm and unit hypotheses.

Romyar Sharifi's [Algebraic Number Theory, Chapter 2](https://www.math.ucla.edu/~sharifi/notes/algnum-ch02.html), §§2.1–2.2 and §2.4, supplies the precise fractional-ideal, Dedekind-domain and order framework. The concrete ideal and conductor calculations above are proved directly. The Minkowski class bound is an explicit imported theorem, stated with its lattice and field hypotheses in this book's next chapter; a failed element factorization alone is not its proof.

<a id="section-625-summary-and-next-connection"></a>
