
# Additive Combinatorics

A set with few pair sums has many repeated additive representations. Turning
that observation into structure requires precise inequalities, not the claim
that every small sumset is an interval. This chapter proves energy estimates,
a triangle inequality for difference sets, a covering lemma and a complete
minimal-expansion proof of iterated sum-and-difference bounds.

Prepare with [The Polynomial Method](polynomial-method.md), finite counting
and elementary groups. Unless a field is explicitly named, the ambient object
is an abelian group written additively. All sets in size quotients are finite
and nonempty. The earlier Quarto additive-combinatorics source remains intact;
its introductory energy and structural questions are rewritten here with full
proofs of the growth tools used.

## Sumsets retain the ambient group

For subsets A and B, write $A+B=\{a+b:a\in A,b\in B\}$ and
$A-B=\{a-b:a\in A,b\in B\}$. Translation preserves cardinality.
For a nonnegative integer m, mB means the sum of m independent choices
from B, with $0B=\{0\}$. It does not mean the image
$\{mb:b\in B\}$, which can be much smaller.

The doubling constant of A is $K=|A+A|/|A|$. It is at least
one because a translate of A lies in A+A. In the integers,
an interval of L consecutive points has $2L-1$ pair sums. In a
finite group, a subgroup H has H+H equal to H and doubling one.
The surrounding group changes which exact structures are possible; an integer
progression theorem cannot simply be copied into a torsion group.

## Energy measures collisions

**Definition 7.1 (Representation count and energy).** Let
$r_{A+B}(s)=|\{(a,b)\in A\times B:a+b=s\}|$.
The mixed energy is

$$E(A,B)=\sum_s r_{A+B}(s)^2
=|\{(a,b,a',b'):a+b=a'+b'\}|.$$

The representations are ordered pairs. In particular $a+b$ and $b+a$
are separate representations when their coordinates differ and both pairs
are permitted. Replacing them by unordered pairs changes the energy.
Counting all pairs gives $\sum_s r_{A+B}(s)=|A||B|$.
Cauchy–Schwarz on the nonzero support gives

$$E(A,B)\ge\frac{|A|^2|B|^2}{|A+B|}.$$

Also $r_{A+B}(s)\le\min(|A|,|B|)$, since either coordinate determines
the other. Thus $E(A,B)\le\min(|A|,|B|)|A||B|$.
Both inequalities include their actual support and no probability assumption.

**Worked example 7.2 (An interval's collisions).** For
$A=\{0,1,\ldots,L-1\}$, the representation counts rise from one
to L and then fall to one. Hence

$$E(A)=L^2+2\sum_{j=1}^{L-1}j^2=(2L^3+L)/3.$$

The energy lower bound is $L^4/(2L-1)$, of order $L^3/2$.
The exact energy is of order $2L^3/3$, so the bound has the
correct scale without being equality: the representation counts are not constant
across the sumset. A picture of a triangular profile suggests this mechanism,
but the displayed finite sums prove it for every L.

For one set A, the same energy is $\sum_d r_{A-A}(d)^2$:
the equation $a+b=c+d$ can be rewritten $a-c=d-b$,
a bijective rearrangement of ordered quadruples. High energy therefore records
both sum collisions and repeated differences. An inverse theorem that extracts
a large structured subset from energy is a further result, not an automatic
consequence of Cauchy–Schwarz alone.

## An injection proves the triangle inequality

**Theorem 7.3 (Ruzsa triangle inequality).** For finite nonempty A,B,C in
an abelian group,

$$|A-C|\,|B|\le|A-B|\,|B-C|.$$

*Proof.* For each d in A-C choose one representation
$d=a_d-c_d$. Map $(d,b)$ to $(a_d-b,b-c_d)$.
The image lies in the product on the right. Adding its two coordinates
recovers d; the chosen representation then recovers b from the first
coordinate. The map is injective, proving the cardinality inequality. ∎

The arbitrary witness choice is fixed once per difference. A map that
chooses a new witness depending on b need not have the stated recovery
property. Nonemptiness of B matters when dividing the inequality; no measure
or limiting density has been substituted for the finite cardinalities.

A useful special case bounds differences from a small sumset. Apply the
theorem with its middle set equal to minus A and both outer sets B:

$$|B-B|\,|A|\le|A+B|^2.$$

Thus $|A+B|\le K|A|$ implies $|B-B|\le K^2|A|$.
The conclusion compares a B difference set with the size of A;
replacing that last size by |B| needs an additional relation.

## Covering by a controlled number of translates

**Theorem 7.4 (Ruzsa covering lemma).** If $|A+B|\le K|A|$, there
is $T\subseteq B$ with $|T|\le K$ such that
$B\subseteq T+(A-A)$.

*Proof.* Choose a maximal family of disjoint translates A+t with t
in B, and let T be their translation parameters. Their disjoint union
lies inside A+B, so $|T||A|\le|A+B|$, giving the bound.
For any b in B, maximality forces A+b to meet some A+t.
Write $a+b=a'+t$ at an intersection point; then
$b=t+(a'-a)$ belongs to $T+(A-A)$. ∎

The lemma gives a covering by translates of a difference set. It does
not say B itself is an arithmetic progression or a subgroup. Since |T|
is integral, the numerical bound means at most the integer part of K.
The maximal translate family need not be the largest possible such family;
maximality is exactly enough for the intersection argument.

**Worked example 7.5 (A subgroup and its cosets).** If A is a finite
subgroup H and B meets exactly q cosets of H, then A+B is the
disjoint union of those cosets and has size $q|H|$.
Choose one representative from each occupied coset. The covering lemma
then gives exactly $B\subseteq T+H$, with q representatives and
H-H equal to H. The bound is sharp for this situation.
The structural object is a subgroup, not an interval in a chosen integer
ordering that the group may not possess.

## Minimal expansion controls all further sums

Choose a nonempty $X\subseteq A$ minimizing
$c=|X+B|/|X|$ among the finitely many nonempty subsets.
Every subset Y of X consequently satisfies $|Y+B|\ge c|Y|$,
including the empty one by direct interpretation.

**Lemma 7.6 (Minimal-expansion growth).** For every finite nonempty C,

$$|X+B+C|\le c|X+C|.$$

*Proof.* List C as $c_1,\ldots,c_t$. Let
$X_i=\{x\in X:x+c_i\notin X+\{c_1,\ldots,c_{i-1}\}\}$.
These are the newly contributing portions of successive translates, so
$|X+C|=\sum_i|X_i|$.

If x is in $X\setminus X_i$, then x+$c_i$ already lies
in an earlier X translate. Adding any b shows
$(X\setminus X_i)+B+c_i$ lies in the earlier union
$X+B+\{c_1,\ldots,c_{i-1}\}$.
Thus the new contribution from X+B+$c_i$ is at most

$$|X+B|-|(X\setminus X_i)+B|
\le c|X|-c|X\setminus X_i|=c|X_i|.$$

Summing these increments proves the claim. The first step has $X_1=X$,
so the same argument covers the start of the induction. ∎

The choice of X supplies a lower expansion bound for every subset that
is removed in the increment argument. A bound only for the original A
does not supply those subset inequalities, which is why simply replacing
X by A in the proof is unjustified.

**Theorem 7.7 (Sum-and-difference growth).** If $|A+B|\le K|A|$,
then for all nonnegative integers m,n,

$$|mB-nB|\le K^{m+n}|A|.$$

*Proof.* The minimizing c is at most K. Repeatedly apply Lemma 7.6
with C equal to $(r-1)B$ to obtain
$|X+rB|\le c^r|X|$ for every positive r; the r-zero
case is equality by convention. Use the triangle inequality with outer
sets mB,nB and middle set minus X:

$$|mB-nB||X|\le|X+mB|\,|X+nB|
\le c^{m+n}|X|^2.$$

Divide by nonzero |X|, then use $c\le K$ and $|X|\le|A|$.
This includes zero indices, since the singleton zero sumset is nonempty. ∎

This is a full finite growth statement, often proved through Plünnecke-type
methods; the proof here uses the minimal-expansion argument. It does not
identify a progression containing A or B. Covering, growth and inverse
structure are related but distinct kinds of conclusion.

## Sparse sums and the scope of inverse questions

**Worked example 7.8 (Powers of two).** Let
$A=\{1,2,4,\ldots,2^{L-1}\}$ in the integers.
Every unordered pair sum has a unique binary description: off-diagonal
pairs have two distinct one-bits, while diagonal pairs have one shifted
one-bit. Hence $|A+A|=L(L+1)/2$.
There are L diagonal sums with one ordered representation and
$\binom L2$ off-diagonal sums with two, so
$E(A)=L+4\binom L2=2L^2-L$.
The doubling grows with L, unlike the interval's bounded doubling.
Again the energy and sumset claims follow from an exact representation
argument, not a computed prefix assumed to continue forever.

## Fourier coordinates locate additive concentration

When the ambient abelian group G is finite of order N, the character
arguments from the representation chapter give a finite Fourier basis.
Every irreducible representation of an abelian group is one-dimensional:
the commuting group matrices act as scalars by Schur's lemma, and a
scalar action of dimension greater than one has proper invariant subspaces.
There are N irreducible characters because every conjugacy class is a
singleton. Their orthogonality and completeness therefore supply an orthonormal
basis of all functions on G.

For a complex function f define
$\widehat f(\chi)=\sum_x f(x)\overline{\chi(x)}$.
Expanding f in that basis gives inversion
$f(x)=N^{-1}\sum_\chi\widehat f(\chi)\chi(x)$
and Parseval
$\sum_x|f(x)|^2=N^{-1}\sum_\chi|\widehat f(\chi)|^2$.
These normalizations use an unnormalized forward sum; changing that convention
would change the factors N. Every sum here is finite.

**Proposition 7.9 (Fourier energy identity).** For a subset A of G,

$$E(A)=\frac1N\sum_\chi|\widehat{1_A}(\chi)|^4.$$

*Proof.* With convolution defined by
$(f*g)(s)=\sum_xf(x)g(s-x)$, multiplicativity of a character
and a change of variables give
$\widehat{f*g}(\chi)=\widehat f(\chi)\widehat g(\chi)$.
The convolution $1_A*1_A$ is exactly the ordered representation
function for A+A. Apply Parseval to its squared norm and substitute
the transform product. ∎

The trivial character contributes $|A|^4/N$. The remaining terms
measure Fourier concentration beyond that baseline. If A is nonempty and
proper, Parseval also gives
$\sum_{\chi\ne1}|\widehat{1_A}(\chi)|^2=N|A|-|A|^2>0$.
Bounding each nontrivial fourth power by the largest nontrivial squared
magnitude times its own squared magnitude yields

$$\max_{\chi\ne1}|\widehat{1_A}(\chi)|^2
\ge\frac{NE(A)-|A|^4}{N|A|-|A|^2}.$$

This is a proved first inverse signal: excess energy forces some
nontrivial Fourier correlation. It is not yet a progression-containment
or subgroup-classification theorem. The correlation and its phase must still
be converted into the structural conclusion wanted in a particular group.

**Worked example 7.10 (A subgroup in Fourier coordinates).** If A is
a subgroup H, a character trivial on H has transform value |H|.
For a character nontrivial on H, translating the sum by an element
where the character differs from one forces that sum to be zero.
The characters trivial on H are precisely the characters of G/H,
so there are N/|H| of them. The identity gives
$E(H)=N^{-1}(N/|H|)|H|^4=|H|^3$,
matching the direct representation count. This agreement tracks the exact
normalisation and identifies where the energy is concentrated.

**Proposition 7.11 (Exact doubling one).** A finite nonempty set A in
an abelian group satisfies $|A+A|=|A|$ exactly when A is a
coset of a finite subgroup.

*Proof.* Fix a in A. The included translate a+A has the same
size as A+A, hence they are equal. Normalize B=A-a, so B
contains zero and B+B equals B. It is closed under addition.
For each b in B, finiteness forces two nonnegative multiples of b
to agree, so a positive multiple is zero. Its preceding multiple
is the inverse of b and also lies in B. Thus B is a
subgroup and A its coset. Conversely a subgroup coset sums to another
coset of the same subgroup, preserving size. ∎

This is a genuine inverse theorem at the exact endpoint K one.
Its conclusion cannot be extended literally to all K close to one.
For a prime p greater than three, the set of nonzero elements
of the prime field sums to the entire field: for a target s,
choose a outside zero and s, and let b=s-a. Both are nonzero.
Its doubling is $p/(p-1)$, tending to one as p grows,
but its size p-minus-one is neither one nor p and hence it
is not a subgroup coset in the additive prime group. Approximate
structure needs a statement that permits appropriate error and ambient-group
dependence, rather than the exact equality conclusion unchanged.

Small doubling can motivate inverse theorems about generalized progressions,
cosets or approximate groups. Their conclusions depend on the ambient group,
the exact quantitative constant and whether a subset or the whole set is
controlled. No such classification is being claimed from the inequalities
proved here. The following structural chapters use regularity, pseudorandomness
and entropy to control different kinds of large finite family; they likewise
state exactly what their decompositions preserve.

## Worked example: wraparound changes collision counts

Take the three integers zero, one and two. Over the integers their
ordered-pair sum multiplicities are one, two, three, two and one, at
sums zero through four. Additive energy is therefore nineteen, the sum
of the squares of those five multiplicities. The sumset has five elements.

Now interpret the same three representatives in the cyclic group of order
three. They form the entire group, and each residue has exactly three
ordered representations as a sum. Energy becomes twenty-seven and the sumset
has three elements. The inputs have not lost cardinality under reduction;
it is the equality relation between their sums that has changed through
wraparound. Consequently a displayed list of integer representatives is not
sufficient specification of an additive problem.

Cauchy–Schwarz is exact in the cyclic example because all three nonzero
representation counts are equal. It is strict in the integer example
because the five counts differ. This also explains the equality condition
of the energy lower bound in a concrete setting: equal distribution of
sum representations matters, rather than a visual impression that the input
set is evenly spaced.

## Exercises

### Exercise 7.1
<a id="additive-combinatorics-ex-1"></a>

Distinguish 2B from $\{2b:b\in B\}$ using $B=\{0,1\}$ in
the integers.

<details><summary>Hint 1</summary>

A sumset permits two different chosen elements.

</details>
<details><summary>Hint 2</summary>

One mixed choice contributes the missing middle value.

</details>
<details><summary>Solution</summary>

$2B=\{0,1,2\}$, while the doubled-element image is $\{0,2\}$.
The value one comes from choosing zero and one separately. The notation
mB in the growth theorem always means repeated sumsets, not scalar images.

</details>

### Exercise 7.2
<a id="additive-combinatorics-ex-2"></a>

Prove the energy upper bound from the maximum representation multiplicity.

<details><summary>Hint 1</summary>

For fixed sum s, either coordinate determines the other.

</details>
<details><summary>Hint 2</summary>

Bound each squared multiplicity by its maximum times itself.

</details>
<details><summary>Solution</summary>

$r(s)\le\min(|A|,|B|)$, so
$\sum r(s)^2\le\min(|A|,|B|)\sum r(s)
=\min(|A|,|B|)|A||B|$.
This uses ordered pair counts and remains valid in any abelian group.

</details>

### Exercise 7.3
<a id="additive-combinatorics-ex-3"></a>

Explain how both coordinates of the triangle-inequality injection recover
its input.

<details><summary>Hint 1</summary>

Add the two output differences.

</details>
<details><summary>Hint 2</summary>

The representation chosen for that recovered difference was fixed in advance.

</details>
<details><summary>Solution</summary>

Their sum is d. Its fixed representative gives $a_d$, and from
first coordinate $a_d-b$ one recovers b. Thus two inputs with equal
outputs have the same d and b, proving injectivity. Without the fixed
witness convention this recovery argument would be incomplete.

</details>

### Exercise 7.4
<a id="additive-combinatorics-ex-4"></a>

If $|A+B|\le3|A|$, give the proved bound for |B-B| and the
number of translates in the covering lemma.

<details><summary>Hint 1</summary>

The difference bound uses the square of K.

</details>
<details><summary>Hint 2</summary>

The covering set consists of elements of B.

</details>
<details><summary>Solution</summary>

$|B-B|\le9|A|$. There is a subset T of B of size at
most three with $B\subseteq T+(A-A)$.
Neither conclusion says B has at most three elements or is itself
one translate of A.

</details>

### Exercise 7.5
<a id="additive-combinatorics-ex-5"></a>

Show that the original A need not minimize expansion, taking
$A=\{0,1,2,100\}$ and $B=\{0,1\}$.

<details><summary>Hint 1</summary>

Compute A+B as an actual set.

</details>
<details><summary>Hint 2</summary>

Compare with the subset $\{0,1,2\}$.

</details>
<details><summary>Solution</summary>

A+B has six elements $0,1,2,3,100,101$, giving ratio $6/4$.
The three-element interval subset has four sums and ratio $4/3<6/4$.
Thus choosing X equal to A is not generally the minimizing choice;
its missing subset inequalities cannot simply be assumed.

</details>

### Exercise 7.6
<a id="additive-combinatorics-ex-6"></a>

In the minimal-expansion proof, why is every member of
$(X\setminus X_i)+B+c_i$ already covered by earlier translates?

<details><summary>Hint 1</summary>

Use the defining earlier representation of $x+c_i$.

</details>
<details><summary>Hint 2</summary>

Add the same b to that representation.

</details>
<details><summary>Solution</summary>

For such x, $x+c_i=x'+c_j$ with $j<i$ and $x'\in X$.
Then $x+b+c_i=x'+b+c_j$ lies in the earlier union X+B+$c_j$.
This proves the containment for every b and justifies subtracting that
whole sumset when bounding a new increment.

</details>

### Exercise 7.7
<a id="additive-combinatorics-ex-7"></a>

Assuming $|A+A|\le K|A|$, state the chapter's bound for |3A-2A|.

<details><summary>Hint 1</summary>

Take B equal to A in Theorem 7.7.

</details>
<details><summary>Hint 2</summary>

The exponent adds the two sumset indices.

</details>
<details><summary>Solution</summary>

$|3A-2A|\le K^5|A|$.
The theorem first finds a minimizing subset to prove growth, but the
final difference-set conclusion concerns the complete repeated sumsets of A,
not just that minimizing subset.

</details>

### Exercise 7.8
<a id="additive-combinatorics-ex-8"></a>

Compute doubling and energy for a finite subgroup H.

<details><summary>Hint 1</summary>

Every group element of H has exactly |H| ordered representations as a
sum of two H elements.

</details>
<details><summary>Hint 2</summary>

There are |H| possible sums in the subgroup.

</details>
<details><summary>Solution</summary>

H+H equals H, so doubling is one. Every sum multiplicity is |H|,
hence $E(H)=|H|^3$, attaining both energy bounds.
The subgroup setting illustrates why bounded doubling need not resemble
an interval in an ambient group with torsion.

</details>

### Exercise 7.9
<a id="additive-combinatorics-ex-9"></a>

For $A=\{1,2,4\}$, count |A+A| and E(A) using the binary argument.

<details><summary>Hint 1</summary>

There are three diagonal unordered pairs and three off-diagonal pairs.

</details>
<details><summary>Hint 2</summary>

Off-diagonal sums have two ordered representations.

</details>
<details><summary>Solution</summary>

The six distinct sums are $2,3,4,5,6,8$, so |A+A| is six.
The diagonal contributions to energy total three and the three off-diagonal
contributions total twelve, giving E equal to fifteen. This agrees with
$2\cdot3^2-3=15$.

</details>

### Exercise 7.10
<a id="additive-combinatorics-ex-10"></a>

Why does the covering lemma not prove that every small-doubling integer
set is an interval?

<details><summary>Hint 1</summary>

Read the actual covering object's shape.

</details>
<details><summary>Hint 2</summary>

It uses translates of A-A, whose structure has not been classified.

</details>
<details><summary>Solution</summary>

The lemma gives a controlled number of translates of a difference set.
It supplies no interval description of that difference set or of the
covered subset. Even a short arithmetic progression with step larger than
one has small doubling without being an integer interval. A genuine inverse
theorem must state its richer structural object and quantitative dependence.

</details>

## Summary and next connection

Energy counts ordered additive collisions. A fixed-witness injection proves
the difference triangle inequality, maximal disjoint translates give covering,
and minimal subset expansion controls all repeated sums and differences.
These are exact finite inequalities with stated ambient-group hypotheses.
Regularity next decomposes graph interactions by an energy increment,
a different use of structural information rather than a sumset classification.
