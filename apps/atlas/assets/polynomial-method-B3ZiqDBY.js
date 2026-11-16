var e=`---
parent_id: book-topics-in-combinatorics
chapter_id: polynomial-method
title: "The Polynomial Method"
level: graduate
license: CC BY-SA 4.0
---

# The Polynomial Method

A finite configuration can impose polynomial equations or prescribed values
on an indicator grid. A nonzero coefficient, a finite-field sum, or a dimension
bound can then force a configuration to exist or limit the number of its
members. The method works because the encoding preserves a specific
combinatorial condition. An impressive polynomial without that connection
proves nothing about the original family.

Prepare with polynomial rings, finite fields and linear algebra, as well as
[Hypergraphs and Set Systems](hypergraphs.md). All coefficient fields are
specified below. Grid points are distinct within each coordinate set. Degree
means total degree unless an individual-coordinate degree is explicitly named.
These distinctions are indispensable to the coefficient and zero-counting
arguments.

## Interpolation extracts one top coefficient

For a finite set S of distinct elements of a field, let
$g_S(t)=\\prod_{a\\in S}(t-a)$. Its derivative at a point a is
$g_S'(a)=\\prod_{b\\in S\\setminus\\{a\\}}(a-b)\\ne0$.
Univariate Lagrange interpolation says that for degree at most
$t=|S|-1$, the coefficient of degree t is

$$L_S(f)=\\sum_{a\\in S}\\frac{f(a)}{g_S'(a)}.$$

Indeed the interpolation basis polynomial at a has leading coefficient
$1/g_S'(a)$. Thus $L_S(x^k)=0$ for $k<t$ and equals one
for $k=t$. The functional can still be applied to higher-degree
polynomials, but those two conclusions do not describe it there.

**Theorem 6.1 (Grid coefficient formula).** Let $S_i$ have size $t_i+1$,
and let P have total degree at most $\\sum_i t_i$. Then

$$[x_1^{t_1}\\cdots x_d^{t_d}]P
=\\sum_{a\\in\\prod_iS_i}
\\frac{P(a)}{\\prod_i g_{S_i}'(a_i)}.$$

*Proof.* Apply the product of the univariate functionals to each monomial.
The monomial with exponent vector t gives one. Any other exponent vector
of total degree at most the stated bound has at least one coordinate
strictly below its corresponding $t_i$; otherwise equality of all
coordinates would be forced by the sum bound. That coordinate contributes
zero. Linearity proves the formula. ∎

**Corollary 6.2 (Combinatorial nonvanishing).** If the displayed coefficient
is nonzero and the total-degree bound holds, P does not vanish on the
entire product grid. The same conclusion holds for larger coordinate sets
by choosing subsets of the required sizes.

This conclusion holds over any field, finite or infinite, because every
interpolation denominator is invertible by distinctness. What can fail in
finite characteristic is the nonzero top-coefficient condition. It must be
checked in that field, not in the integers before reduction.

## Vanishing on a grid has an exact ideal description

**Theorem 6.3 (Grid vanishing ideal).** P vanishes on $\\prod_i S_i$ if
and only if

$$P=\\sum_i Q_i(x)g_{S_i}(x_i).$$

The polynomials can be chosen with
$\\deg Q_i\\le\\deg P-|S_i|$ whenever $Q_i$ is nonzero.

*Proof.* Divide successively by the monic univariate polynomials in their
respective coordinates, treating the other variables as coefficients.
Each cancellation replaces a term with terms of no larger total degree,
so the stated quotient degree bounds hold. Because a divisor involves only
its own variable, later reductions do not increase degrees in already reduced
coordinates. The remainder R has individual degree below $|S_i|$ in
each coordinate. If P vanishes on the grid, so does R.

A polynomial with those individual bounds that vanishes on the grid is
zero. Induct on the number of variables: in the last variable, fixing all
earlier coordinates gives a polynomial with more distinct roots than its
degree, hence identically zero. Each coefficient polynomial therefore vanishes
on the smaller grid and is zero by induction. Thus R is zero, giving
the representation. Conversely every displayed summand vanishes on the grid,
so the representation implies vanishing. ∎

This is a finite-grid ideal statement. It is not an appeal to the full
algebraically closed-field Nullstellensatz, and the two statements should not
be conflated by their names. The degree control is what makes the finite
grid theorem effective in coefficient arguments.

## The quotient algebra is exactly the algebra of grid functions

For a grid point a, define the product interpolation polynomial

$$L_a(x)=\\prod_i\\prod_{b\\in S_i\\setminus\\{a_i\\}}
\\frac{x_i-b}{a_i-b}.$$

It evaluates to one at a and zero at every other grid point.
Consequently every function f from the grid to the field has the
polynomial representative $\\sum_a f(a)L_a(x)$, whose individual
coordinate degrees are below the respective grid sizes. The remainder
uniqueness argument in Theorem 6.3 proves that this representative is
unique within those coordinate bounds.

Evaluation therefore identifies the quotient algebra by the grid vanishing
ideal with the algebra of all field-valued functions on the grid.
This is more precise than saying interpolation merely fits a finite
list. Multiplication also agrees: both polynomial multiplication followed
by reduction and pointwise function multiplication give the same unique
remainder. Modulo the ideal, the polynomials L_a are pairwise orthogonal
idempotents, their squares equal themselves, and their sum is one.
These identities follow either by evaluating at every grid point and
using uniqueness or by expanding the product basis directly.

The dimension is the product of the coordinate-set sizes, matching
both the number of grid points and the number of bounded-coordinate
monomials. This does not imply that an arbitrary grid function has a
representative of small total degree. The universal interpolation degree
can be as large as the sum of the individual degree bounds. The
nonvanishing theorem gains force precisely when the original combinatorial
encoding supplies a stricter total-degree constraint, allowing one top
coefficient to isolate information that a general grid function could
hide in higher degrees.

## Sumsets in a prime field

**Theorem 6.4 (Cauchy–Davenport).** For nonempty subsets A,B of
$\\mathbb F_p$, with p prime,

$$|A+B|\\ge\\min(p,|A|+|B|-1).$$

*Proof.* Write $a=|A|,b=|B|$. First suppose $a+b-1\\le p$.
If the conclusion fails, enlarge A+B to a set C of size
$a+b-2$, possible since this number is below p. The polynomial
$P(x,y)=\\prod_{c\\in C}(x+y-c)$ vanishes on $A\\times B$.
Its degree is $a+b-2$ and its coefficient at
$x^{a-1}y^{b-1}$ is $\\binom{a+b-2}{a-1}$.
Every factorial entering this binomial expression is below p, so that
coefficient is nonzero in the field. Corollary 6.2 contradicts vanishing.

If $a+b-1>p$, choose nonempty subsets with sizes $a'\\le a$,
$b'\\le b$ and $a'+b'-1=p$. Such choices exist since both
original sizes are at most p and their sum is at least $p+1$.
The first case gives a sumset of size at least p for those subsets,
so the larger original sumset is the entire field too. ∎

**Worked example 6.5 (A sharp progression).** In $\\mathbb F_{11}$,
let $A=\\{0,1,2\\}$ and $B=\\{0,1,2,3\\}$.
Their sumset is $\\{0,1,2,3,4,5\\}$, of size six, exactly
$|A|+|B|-1$. The theorem supplies a lower bound attained here,
not a statement that every pair of sets has interval shape. In a
composite cyclic group the conclusion can fail: in $\\mathbb Z/6\\mathbb Z$,
$A=B=\\{0,3\\}$ has sumset size two rather than three.
The prime-field coefficient argument does not survive an unspecified
replacement of its field by a ring with zero divisors.

## Finite-field sums force divisible zero counts

For $0\\le k<p-1$, one has $\\sum_{x\\in\\mathbb F_p}x^k=0$
in the field. At k zero this sum is p, hence zero. At positive
k, choose nonzero c with $c^k\\ne1$, possible because a degree-k
polynomial has fewer than $p-1$ roots. Reindexing by multiplication
by c gives $S=c^kS$, forcing S zero. Also every nonzero x
satisfies $x^{p-1}=1$: multiply all nonzero field elements and compare
the product after multiplying each by x, then cancel their nonzero product.

Identically zero equations may be omitted; they impose no condition.
A nonzero constant equation gives no common zeros and satisfies the
divisibility conclusion directly. Thus the degree argument below may be
read with those harmless exceptional equations removed.

**Theorem 6.6 (Chevalley–Warning over a prime field).** If polynomials
$f_1,\\ldots,f_s$ in d variables over $\\mathbb F_p$ satisfy
$\\sum_j\\deg f_j<d$, their number of simultaneous zeros is divisible
by p.

*Proof.* The function $\\prod_j(1-f_j(x)^{p-1})$ is one on common
zeros and zero elsewhere. Its sum over the field grid is therefore
the zero count modulo p. Its total degree is below $(p-1)d$.
Every monomial in its expansion has some coordinate exponent below $p-1$.
Summing that coordinate gives zero by the preceding power-sum argument,
so every monomial's grid sum is zero. The total zero count is consequently
zero modulo p. ∎

If the system is homogeneous of positive degrees, the origin is a common
zero. Divisibility then supplies at least p solutions and hence a
nonzero one. Homogeneity is not needed for divisibility itself; it is
used only to guarantee the known origin solution in this corollary.

**Worked example 6.7 (A nontrivial quadratic zero).** Any homogeneous
quadratic in three variables over a prime field has a nonzero zero:
its degree two is below its variable count three. This remains a
finite-field statement, not a theorem that every real quadratic form is
isotropic. For example, $x^2+y^2+z^2$ over the real numbers has
only the zero solution, demonstrating that the field hypothesis changes
the result.

**Theorem 6.8 (Prime zero-sum subsequence).** Any list of $2p-1$ elements
$a_i\\in\\mathbb F_p$ contains p entries whose sum is zero, with
positions rather than distinct values being selected.

*Proof.* In $2p-1$ variables use
$f_1=\\sum_i x_i^{p-1}$ and $f_2=\\sum_i a_i x_i^{p-1}$.
Their degree sum is at most $2p-2<2p-1$.
The origin is a common zero, so Theorem 6.6 gives a nonzero common
zero as well. Its support size is a positive multiple of p by
$f_1=0$, and at most $2p-1$, so it is exactly p.
On that support each nonzero coordinate contributes one to its
$(p-1)$st power. The second equation therefore says the selected
p entries sum to zero. ∎

Repeated list values are permitted. The selected positions are distinct;
replacing the list by a set would change the commission and can remove
the required number of positions. For p equal to two the same proof
works, with degree one in both equations.

## Evaluation gives a dimension bound

**Theorem 6.9 (A polynomial intersection bound).** Let F be a family of
k-subsets of an n-set, and let L be an s-element subset of
$\\{0,\\ldots,k-1\\}$. If distinct members have intersection size in L,
then

$$|F|\\le\\sum_{j=0}^{s}\\binom nj.$$

*Proof.* Work over the rationals. For each A in F define
$P_A(x)=\\prod_{\\ell\\in L}(\\sum_{i\\in A}x_i-\\ell)$.
Evaluate at the zero-one vector of B. It vanishes for distinct A,B,
while for B equal to A its value is $\\prod_{\\ell\\in L}(k-\\ell)\\ne0$.
Replace powers $x_i^r$ for positive r by $x_i$ to obtain a
multilinear polynomial with the same cube values and degree at most s.
These resulting polynomials are linearly independent: evaluation at each
member's vector isolates its coefficient in any proposed relation.
The multilinear degree-at-most-s space has basis the square-free monomials
indexed by subsets of size at most s, giving the stated dimension. ∎

This elementary bound is not the strongest fixed-uniformity intersection
theorem. It proves exactly the displayed polynomial-space bound. Sharper
bounds need another argument rather than deleting the lower-degree summands.

**Worked example 6.10 (One intersection size and a sharper matrix check).**
If all distinct k-sets meet in a fixed size ell with $0\\le\\ell<k$,
the incidence matrix M has
$MM^{\\mathsf T}=(k-\\ell)I+\\ell J$.
For any nonzero real vector v, its quadratic form is
$(k-\\ell)\\|v\\|^2+\\ell(\\sum v_i)^2>0$.
Thus the matrix has full row rank, giving $|F|\\le n$,
slightly sharpening the general s-one bound $n+1$.
The seven Fano lines attain n equal to seven, since k three and ell
one give $MM^{\\mathsf T}=2I+J$. The field and positivity in
this sharper rank argument are explicitly real; a modular rank could
behave differently.

## Exercises

### Exercise 6.1
<a id="polynomial-method-ex-1"></a>

Show that the total-degree hypothesis in Theorem 6.1 cannot be omitted,
using $P(x,y)=x^2$ and grids $S_1=\\{0,1\\},S_2=\\{0\\}$.

<details><summary>Hint 1</summary>

The targeted monomial is x with y exponent zero.

</details>
<details><summary>Hint 2</summary>

Its coefficient is zero, but the interpolation functional sees the values
zero and one.

</details>
<details><summary>Solution</summary>

The coefficient of x is zero. The grid formula's sum is
$0/(-1)+1/1=1$, with the singleton coordinate contributing denominator
one. Total degree two exceeds $t_1+t_2=1$, so the formula's
hypothesis fails. A higher monomial need not be annihilated when no
coordinate exponent lies below its target.

</details>

### Exercise 6.2
<a id="polynomial-method-ex-2"></a>

Explain why distinct coordinate grid points suffice for interpolation over
an arbitrary field.

<details><summary>Hint 1</summary>

Inspect each derivative denominator at a grid point.

</details>
<details><summary>Hint 2</summary>

A field makes every nonzero difference invertible.

</details>
<details><summary>Solution</summary>

Each denominator is a product of differences between distinct field elements,
so it is nonzero and invertible. No ordering or characteristic-zero assumption
is required for the interpolation identity. A later application must still
check its desired coefficient remains nonzero in the chosen characteristic.

</details>

### Exercise 6.3
<a id="polynomial-method-ex-3"></a>

Identify a grid-ideal representation of $x^2-x$ on the grid $\\{0,1\\}$.

<details><summary>Hint 1</summary>

Write the grid's monic vanishing polynomial.

</details>
<details><summary>Hint 2</summary>

Its factors are x and x minus one.

</details>
<details><summary>Solution</summary>

$g_S(x)=x(x-1)=x^2-x$, so the representation is simply
$P=1\\cdot g_S$. Its remainder has degree below two and is zero.
The degree bound gives quotient degree zero, attained by the constant one.

</details>

### Exercise 6.4
<a id="polynomial-method-ex-4"></a>

Where does primality enter the Cauchy–Davenport coefficient proof?

<details><summary>Hint 1</summary>

Consider the factorials in its top binomial coefficient.

</details>
<details><summary>Hint 2</summary>

The total top degree is strictly below p.

</details>
<details><summary>Solution</summary>

The proof works in the field of p elements, and every positive integer
factor below p is nonzero and invertible there. Hence the binomial top
coefficient cannot vanish modulo p. In a composite residue ring these
cancellations can fail, and it is not a field; the subgroup counterexample
shows the theorem itself can fail too.

</details>

### Exercise 6.5
<a id="polynomial-method-ex-5"></a>

Apply Cauchy–Davenport when $|A|=5,|B|=4$ in $\\mathbb F_7$.
State what is forced, without specifying the shapes of the sets.

<details><summary>Hint 1</summary>

The size sum minus one exceeds the field size.

</details>
<details><summary>Hint 2</summary>

A subset of a seven-element field cannot have more than seven elements.

</details>
<details><summary>Solution</summary>

The bound is $\\min(7,8)=7$, so A+B is the entire field.
No interval or progression assumption on either set is needed. The
saturated case follows from the theorem's subset reduction, not from
a binomial coefficient at degree beyond the permitted range.

</details>

### Exercise 6.6
<a id="polynomial-method-ex-6"></a>

Why must the Chevalley–Warning degree inequality be strict? Use one variable
and the polynomial f equal to x.

<details><summary>Hint 1</summary>

The degree and variable count are both one.

</details>
<details><summary>Hint 2</summary>

Count the zeros exactly over a prime field.

</details>
<details><summary>Solution</summary>

There is exactly one zero, x equal to zero, and one is not divisible
by any prime p. Equality of degree sum and variable count is therefore
insufficient. In the proof, a monomial can then reach exponent p minus
one in every coordinate and evade the vanishing sum argument.

</details>

### Exercise 6.7
<a id="polynomial-method-ex-7"></a>

For p three and list $0,0,1,1,2$, exhibit the prime zero-sum
subsequence promised by Theorem 6.8.

<details><summary>Hint 1</summary>

Three selected positions must have sum divisible by three.

</details>
<details><summary>Hint 2</summary>

Use one zero, one one and the two.

</details>
<details><summary>Solution</summary>

For example positions one, three and five have values $0,1,2$,
whose sum is three and therefore zero in $\\mathbb F_3$.
The two repeated zeros are distinct list positions; selecting positions
rather than an unordered value set is the theorem's convention.

</details>

### Exercise 6.8
<a id="polynomial-method-ex-8"></a>

Why does replacing positive powers by first powers preserve evaluation
on the zero-one cube and not increase total degree?

<details><summary>Hint 1</summary>

At zero or one, every positive power has the same value as its base.

</details>
<details><summary>Hint 2</summary>

Each monomial loses repeated factors only.

</details>
<details><summary>Solution</summary>

For a cube coordinate, $x_i^r=x_i$ whenever r is positive.
Applying this to each monomial leaves every cube evaluation unchanged,
while reducing each exponent to at most one. Total degree can only
fall. It is a statement about cube functions, not equality of the
original polynomials on arbitrary field inputs.

</details>

### Exercise 6.9
<a id="polynomial-method-ex-9"></a>

Prove linear independence of the intersection polynomials after multilinearization.

<details><summary>Hint 1</summary>

Evaluate a proposed relation at one family member's indicator vector.

</details>
<details><summary>Hint 2</summary>

All but its corresponding term vanish, and that diagonal value is nonzero.

</details>
<details><summary>Solution</summary>

If $\\sum_A c_A P_A=0$ as multilinear polynomials, evaluate at B's
indicator. Every A distinct from B has allowed intersection size and
therefore gives zero. The remaining factor is
$c_B\\prod_{\\ell\\in L}(k-\\ell)$, with nonzero product over the
rationals. Thus $c_B=0$ for every B, proving independence.

</details>

### Exercise 6.10
<a id="polynomial-method-ex-10"></a>

Why does the fixed-intersection Gram matrix have full row rank over the
real numbers when $0\\le\\ell<k$?

<details><summary>Hint 1</summary>

Write its quadratic form on a nonzero real vector.

</details>
<details><summary>Hint 2</summary>

The identity-matrix contribution is strictly positive.

</details>
<details><summary>Solution</summary>

The form is $(k-\\ell)\\|v\\|^2+\\ell(\\sum v_i)^2$.
The first term is positive for nonzero v and the second nonnegative,
so the Gram matrix is positive definite and nonsingular. Its rank
is the number of family members, bounded by the incidence matrix's
n columns. A finite-field version cannot reuse real positivity without
another argument.

</details>

## Summary and next connection

Interpolation turns a top coefficient into grid nonvanishing; monic division
characterizes exact grid vanishing. Prime-field coefficient and power-sum
arguments prove Cauchy–Davenport and divisible zero counts, while evaluation
independence limits intersection families. Every application states its field
and degree hypotheses. Additive combinatorics next asks what small sumsets
and repeated representations imply about a set's structure.
`;export{e as default};