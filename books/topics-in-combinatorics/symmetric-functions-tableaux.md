
# Symmetric Functions and Tableaux

Symmetry can be recorded without discarding the data it acts on. Symmetric
polynomials retain multiplicities of colours or labels while identifying
permutations of their names. Their bases correspond to different constructions;
the Schur basis connects determinants, nonintersecting paths and tableaux.
This chapter proves those correspondences in finitely many variables before
passing to the stable degree-by-degree language used in enumeration.

Prepare with polynomial rings, determinants and finite group actions from
abstract algebra and linear algebra, together with [The Symbolic Method](symbolic-method.md).
Coefficients are rational unless otherwise stated. Characteristic zero matters
when integers are divided out in power-sum formulas. The next chapter explains
how representations supply another interpretation of this algebra; no
classification of irreducible representations is assumed here.

## Partitions index symmetric data

**Definition 3.1 (Symmetric polynomial and monomial basis).** A polynomial
in $x_1,\ldots,x_m$ is symmetric if every permutation of the variables
fixes it. A partition $\lambda$ of n is a weakly decreasing list of
positive integers summing to n. Its length is its number of parts. For
length at most m, append zeros and define $m_\lambda$ as the sum of
distinct monomials obtained by permuting those m exponents.

Every homogeneous symmetric polynomial of degree n has one coefficient for
each orbit of monomials under variable permutation. Sorting an exponent vector
identifies its partition. Therefore the $m_\lambda$, with length at most
m, form a basis of that homogeneous subspace. Repeated exponents do not
produce repeated summands: the orbit contains monomials, not permutations
counted with their stabilizer multiplicity.

Setting the last variable to zero is compatible with these bases. For fixed
degree n, once $m\ge n$ all partitions of n are present, so the
spaces stabilize under this specialization. A symmetric function can be
understood degree by degree through these compatible stable polynomials.
One should not treat an unbounded infinite sum in all variables as an
ordinary finite polynomial without specifying this graded interpretation.

**Definition 3.2 (Elementary, complete and power-sum functions).** Let
$e_r$ be the sum of square-free degree-r monomials, $h_r$ the sum
of all degree-r monomials, and $p_r=\sum_i x_i^r$ for $r\ge1$.
Set $e_0=h_0=1$, with $h_r=0$ for negative r. Their generating identities are

$$E(t)=\sum_{r\ge0}e_rt^r=\prod_i(1+x_it),\qquad
H(t)=\sum_{r\ge0}h_rt^r=\prod_i(1-x_it)^{-1}.$$

The first chooses whether to include each variable; the second chooses its
nonnegative multiplicity. Thus $H(t)E(-t)=1$. Taking the formal logarithm
of H and differentiating gives
$r h_r=\sum_{k=1}^r p_kh_{r-k}$. These are finite coefficient identities,
not statements requiring numerical convergence at a particular t.

**Worked example 3.3 (Degree two).**
$h_2=\sum_i x_i^2+\sum_{i<j}x_ix_j$ and
$e_2=\sum_{i<j}x_ix_j$. Since
$p_1^2=\sum_i x_i^2+2\sum_{i<j}x_ix_j$,

$$h_2=(p_1^2+p_2)/2,\qquad e_2=(p_1^2-p_2)/2.$$

The denominator two records the two orders of distinct indices in the
squared sum. In characteristic two this calculation cannot be used to
solve for h and e by division, even though their original polynomial
definitions still make sense.

## A constructive fundamental theorem

**Theorem 3.4 (Elementary generators).** Every symmetric polynomial in m
variables over the rationals is a unique polynomial in $e_1,\ldots,e_m$.

*Proof.* It suffices to treat a homogeneous component. Use lexicographic
monomial order with $x_1$ first. The exponents of its leading monomial
must be weakly decreasing: otherwise swapping an earlier smaller exponent
with a later larger exponent would produce a lexicographically larger
monomial with the same nonzero coefficient, contradicting maximality.
Write this partition as $\lambda$ and put $\lambda_{m+1}=0$.
The product

$$e_1^{\lambda_1-\lambda_2}e_2^{\lambda_2-\lambda_3}
\cdots e_m^{\lambda_m}$$

has leading monomial $x_1^{\lambda_1}\cdots x_m^{\lambda_m}$ with
coefficient one. Subtract its appropriate multiple. The leading monomial
strictly decreases; only finitely many monomials have the fixed degree,
so the process terminates and proves generation.

Distinct products in the e generators have distinct leading exponent
partitions by this same difference correspondence. In a nonzero finite
linear combination, the largest leading monomial therefore cannot cancel.
No polynomial relation among the generators is possible, proving uniqueness. ∎

This proof gives a finite elimination procedure. It does not assert that
every conversion between symmetric bases is computationally cheap; the number
of partitions in a high degree can already be large. Its structural value
is that invariance under variable permutation has explicit algebraic coordinates.

## Alternants define the Schur basis

**Definition 3.5 (Schur polynomial).** For a partition of length at most m,
with zeros appended, set

$$s_\lambda(x)=
\frac{\det(x_i^{\lambda_j+m-j})_{i,j=1}^m}
{\det(x_i^{m-j})_{i,j=1}^m}.$$

The denominator is the Vandermonde product
$\Delta(x)=\prod_{i<j}(x_i-x_j)$.
Both determinants are alternating: exchanging two variables exchanges two
rows. An alternating polynomial vanishes when any $x_i=x_j$,
so each factor $x_i-x_j$ divides it. Distinct such linear factors
are nonassociate primes in the polynomial ring; their product divides it.
The quotient defining s is consequently a polynomial, and the signs cancel
under a variable exchange, making it symmetric.

Its leading monomial is $x_1^{\lambda_1}\cdots x_m^{\lambda_m}$
with coefficient one, by dividing the leading monomials of the two
alternants. In each fixed degree the transition to the monomial basis
is therefore triangular with unit diagonal, using lexicographic partition
order. The Schur polynomials form another basis. This proves the basis
statement before any tableaux counting interpretation is invoked.

**Theorem 3.6 (Jacobi–Trudi).** With h at negative indices defined to be
zero,

$$s_\lambda=\det(h_{\lambda_i-i+j})_{i,j=1}^m.$$

*Proof.* Work first in the rational-function field, where the variables are
distinct indeterminates, and put $D_k=\prod_{l\ne k}(x_k-x_l)$.
Partial fractions of H give
$h_r=\sum_k x_k^{r+m-1}/D_k$ for $r\ge0$.
For $1-m\le r<0$, the same right side is zero: Lagrange interpolation
of the monomial of degree $r+m-1<m-1$ has zero coefficient at degree
$m-1$, while its interpolation formula gives that coefficient as the
stated sum. At r equal to zero the sum is one, consistently.

The matrix in the claimed determinant factors as P Q, with
$P_{ik}=x_k^{\lambda_i+m-i}$ and $Q_{kj}=x_k^{j-1}/D_k$.
All its indices lie in the just-proved range. The determinant of P is
the numerator alternant. The determinant of Q is $1/\Delta$:
the increasing-power Vandermonde and the product of all $D_k$ have
respectively signs $(-1)^{\binom m2}$ and that same sign times
$\Delta^2$. Thus $\det(PQ)$ is the defining quotient.
Both sides are polynomials, so the rational-function identity is a polynomial
identity valid also at equal numerical variable values. ∎

The localization in this proof is an algebraic device, not a restriction
that the eventual colours or weights must be numerically distinct.
For fewer nonempty rows one may use the shorter determinant: the appended
zero rows create a triangular block with diagonal ones, leaving the same value.

## Paths turn the determinant into positive weights

A semistandard Young tableau of shape lambda fills its left-justified rows
of lengths $\lambda_i$ with entries from $1,\ldots,m$, weakly
increasing along rows and strictly increasing down columns. Its weight is
the product of $x_t$ over all entries t.

**Theorem 3.7 (Tableau formula).** The sum of these tableau weights equals
$s_\lambda(x_1,\ldots,x_m)$.

*Proof.* Use north/east lattice paths from $A_i=(-i,1)$ to
$B_j=(\lambda_j-j,m)$. Give an east step at height t weight
$x_t$ and every north step weight one. A path with r east steps
records a weakly increasing sequence of their heights, so its weight sum
is $h_r$; there are no such paths when r is negative.
The determinant of their path-sum matrix is the transpose form of
Jacobi–Trudi, hence s.

Expand the determinant into signed families of paths joining the starts
to a permuted list of ends. Cancel intersecting families by taking their
first shared vertex in a fixed topological order, choosing the first pair
there, and exchanging their tails after that vertex. The directed grid is
finite on the relevant bounded rectangle and every edge increases the
coordinate sum. Prefixes before the selected vertex stay unchanged, so
the same first intersection and pair are selected on a second application.
The exchange is an involution, preserves the product of step weights and
transposes two endpoints, reversing the sign.

Disjoint families can only join $A_i$ to $B_i$. Both endpoint lists
are ordered from right to left; an inversion would force two monotone
paths with reversed endpoint order to meet. Each remaining path records
one weakly increasing row. At the vertical line just before row i's
jth east step, the lower neighbouring path has just finished its jth
east step. Their vertical segments are disjoint exactly when the upper
row's jth entry is strictly less than the lower row's jth entry.
Thus disjointness is precisely the strict column condition. This gives
a weight-preserving bijection between surviving positive families and the
stated tableaux. ∎

The cancellation explains positivity without assuming it from the determinant.
The choice of the first intersection is what makes the tail exchange
reversible; swapping an arbitrary pair at an arbitrary intersection would
not by itself define an involution.

**Worked example 3.8 (Shape two-one in two variables).** The only tableaux
have upper rows $(1,1)$ and $(1,2)$, in both cases with bottom entry
two. Their weights give $s_{(2,1)}=x_1^2x_2+x_1x_2^2$.
The shorter Jacobi–Trudi determinant gives $h_2h_1-h_3$,
which expands to the same polynomial. The determinant subtraction has removed
precisely the row fillings that fail the strict column requirement.

**Worked example 3.9 (A row and a column).** A one-row tableau is exactly
a weakly increasing word, so $s_{(r)}=h_r$. A one-column tableau has
strictly increasing entries, so $s_{(1^r)}=e_r$. At all variables
equal to one, these counts are respectively $\binom{m+r-1}r$ and
$\binom mr$. The row permits repeated entries; the column does not.
For r larger than m the column count is zero, consistent with the
absence of enough distinct entries.

## Specialization is an enumerative decision

Substituting all variables equal to one counts tableaux whose entries are
bounded by m, with repetitions permitted along rows. Standard tableaux
instead use every label $1,\ldots,n$ exactly once for a shape of size
n. Their number is the coefficient of $x_1\cdots x_n$ in the
Schur polynomial with n variables. These two specializations count different
sets and must not be interchanged.

**Proposition 3.10 (Branching by the largest label).** With a new last
variable t,

$$s_\lambda(x_1,\ldots,x_m,t)=
\sum_{\mu:\lambda/\mu\text{ horizontal strip}}
s_\mu(x_1,\ldots,x_m)t^{|\lambda|-|\mu|}.$$

Here a horizontal strip means a skew difference containing at most one
cell in each column; only subpartitions mu of length at most m contribute.

*Proof.* In a tableau with labels at most $m+1$, the cells containing
the largest label are final segments of their rows, by weak row increase.
They cannot share a column, by strict column increase. Removing them leaves
a Young diagram: a removed cell cannot have a remaining cell directly below
it, which would require a label greater than $m+1$. Thus the remaining
shape is a partition mu and the difference is a horizontal strip.
Its remaining filling is semistandard with labels at most m. Conversely,
fill every cell of such a strip with the new largest label. Each is at
the end of its row and has no new cell above or below in the same column;
the partition and strip conditions ensure the required row and column
inequalities. These operations are inverse and split the weight into
the old tableau weight and the stated power of t. ∎

For shape $(2,1)$ and one old variable x, the possible remaining
one-row shapes are $(2)$ and $(1)$. Branching gives
$x^2t+xt^2$, matching the earlier two-variable calculation. At all
variables equal to one, branching becomes a finite recursion for bounded-label
tableau counts. It retains the shape conditions rather than guessing a
product formula from a few small counts. Notice that the strip has at
most one cell per column, while its cells may share a row; reversing
those words would encode a different rule.

The hook-length formula and Littlewood–Richardson rule are deeper continuations;
they are not proved merely by naming this basis. The present chapter supplies
the polynomial generators, determinant identity and tableau interpretation
used in the next representation chapter. Every conversion preserves the
specified labels and weights rather than replacing a counting problem by
an unsupported symmetry division.

## Worked example: coefficients retain more information than totals

For shape two-one and three available labels, the Schur polynomial has
six monomials with one label repeated and a seventh monomial using all
three labels with coefficient two. To see the latter coefficient directly,
put label one in the upper-left cell. The other two cells can contain
two and three in either order: both fillings increase along the first
column and weakly along the first row. A repeated-label content instead
has a unique permitted filling, when its two labels are specified.
Thus evaluation at three ones gives eight semistandard tableaux, whereas
extracting the product of the three distinct variables gives two standard
tableaux. These are different counts of different families.

Replacing every variable by the same variable t gives eight times t
cubed, because every tableau has three cells. Homogeneity checks the size
of the shape, while the coefficient two checks the distinct-label condition.
Neither check can replace the other. This small calculation is useful when
an application confuses alphabet size with the requirement to use every
label exactly once: preserve the multivariate polynomial until that decision
has been stated.

## Exercises

### Exercise 3.1
<a id="symmetric-functions-tableaux-ex-1"></a>

Write $m_{(2,1)}$ in three variables, explaining why no term is repeated.

<details><summary>Hint 1</summary>

Assign exponents two and one to distinct variable positions.

</details>
<details><summary>Hint 2</summary>

The remaining exponent is zero.

</details>
<details><summary>Solution</summary>

The six terms are $x_1^2x_2,x_1^2x_3,x_2^2x_1,x_2^2x_3,
x_3^2x_1,x_3^2x_2$. Each chooses distinct positions for two and one,
so these are exactly the distinct exponent-permutation monomials. Adding
extra copies for permutations of appended equal zeros would overcount.

</details>

### Exercise 3.2
<a id="symmetric-functions-tableaux-ex-2"></a>

Derive $h_2=e_1^2-e_2$ from $H(t)E(-t)=1$.

<details><summary>Hint 1</summary>

The coefficient of degree one gives $h_1=e_1$.

</details>
<details><summary>Hint 2</summary>

The coefficient of degree two in the product must vanish.

</details>
<details><summary>Solution</summary>

Degree two gives $h_2-h_1e_1+e_2=0$. Substituting $h_1=e_1$
yields the formula. This is an exact formal coefficient identity, not an
evaluation of either generating function at a numerical point.

</details>

### Exercise 3.3
<a id="symmetric-functions-tableaux-ex-3"></a>

Prove that the leading exponent vector of a symmetric polynomial must be
weakly decreasing in lexicographic monomial order.

<details><summary>Hint 1</summary>

Suppose an earlier exponent is smaller than a later one.

</details>
<details><summary>Hint 2</summary>

Exchange those two variables using symmetry.

</details>
<details><summary>Solution</summary>

Swapping the two positions preserves the nonzero coefficient, but at the
first changed position places the larger exponent earlier. This creates a
lexicographically larger monomial than the supposed leader, a contradiction.
Thus no such inversion is possible.

</details>

### Exercise 3.4
<a id="symmetric-functions-tableaux-ex-4"></a>

Compute $s_{(1,1)}$ from its two-by-two Jacobi–Trudi determinant.

<details><summary>Hint 1</summary>

The entries are $h_1,h_2,h_0,h_1$.

</details>
<details><summary>Hint 2</summary>

Use the preceding expression for $h_2$.

</details>
<details><summary>Solution</summary>

The determinant is $h_1^2-h_2=e_1^2-(e_1^2-e_2)=e_2$.
This agrees with the tableau interpretation of a strict two-entry column,
which selects two distinct increasing labels.

</details>

### Exercise 3.5
<a id="symmetric-functions-tableaux-ex-5"></a>

Why does the alternant numerator vanish when two variables coincide, and
why does that justify a polynomial quotient by the full Vandermonde?

<details><summary>Hint 1</summary>

Equal variables produce equal determinant rows.

</details>
<details><summary>Hint 2</summary>

Use distinct prime linear factors in the polynomial ring.

</details>
<details><summary>Solution</summary>

Coincidence makes two rows identical and the determinant zero, so each
$x_i-x_j$ divides it. These are nonassociate prime factors. Their product
therefore divides the numerator, making the quotient a polynomial. The
argument is stronger than merely observing that a rational quotient looks
symmetric where its denominator is nonzero.

</details>

### Exercise 3.6
<a id="symmetric-functions-tableaux-ex-6"></a>

List the standard tableaux of shape $(2,1)$ and identify their number as
a Schur coefficient.

<details><summary>Hint 1</summary>

The top-left entry must be one.

</details>
<details><summary>Hint 2</summary>

The remaining labels two and three can exchange the two incomparable cells.

</details>
<details><summary>Solution</summary>

The two fillings have top row $(1,2)$ with bottom three, or top row
$(1,3)$ with bottom two. Both satisfy increasing rows and columns.
They are exactly the tableaux contributing $x_1x_2x_3$ in
$s_{(2,1)}(x_1,x_2,x_3)$, so that coefficient is two.

</details>

### Exercise 3.7
<a id="symmetric-functions-tableaux-ex-7"></a>

Evaluate $s_{(3)}(1,1)$ and $s_{(1,1,1)}(1,1)$ combinatorially.

<details><summary>Hint 1</summary>

One shape is a row with repetition, the other a strict column.

</details>
<details><summary>Hint 2</summary>

There are only two available labels.

</details>
<details><summary>Solution</summary>

The weakly increasing length-three rows are $111,112,122,222$, giving
four. A strict column of length three cannot use only two labels, giving
zero. The latter is understood as specialization of the stable polynomial
and agrees with $e_3$ in two variables.

</details>

### Exercise 3.8
<a id="symmetric-functions-tableaux-ex-8"></a>

Explain why the first-intersection tail exchange in the determinant proof
is an involution and reverses the sign.

<details><summary>Hint 1</summary>

Only edges after the selected vertex change owners.

</details>
<details><summary>Hint 2</summary>

The endpoint permutation exchanges two images.

</details>
<details><summary>Solution</summary>

All prefixes before the selected vertex stay fixed, so the first intersection
and selected pair are unchanged when the rule is applied again. Swapping
the same tails restores the family. The two paths exchange endpoints,
transposing two entries of the endpoint permutation and negating its sign,
while their combined edge-weight product is unchanged.

</details>

### Exercise 3.9
<a id="symmetric-functions-tableaux-ex-9"></a>

Derive $3h_3=p_1h_2+p_2h_1+p_3$ from the generating identity.

<details><summary>Hint 1</summary>

Differentiate the formal logarithm of H.

</details>
<details><summary>Hint 2</summary>

Compare the degree-two coefficient in $H'=H\sum_{k\ge1}p_kt^{k-1}$.

</details>
<details><summary>Solution</summary>

The left coefficient is $3h_3$. The right receives the three contributions
$p_1h_2,p_2h_1,p_3h_0$, with $h_0=1$. Their equality proves the
claim and exhibits why division by three is available over the rationals.

</details>

### Exercise 3.10
<a id="symmetric-functions-tableaux-ex-10"></a>

Does $s_\lambda(1,\ldots,1)$ generally count standard tableaux of size
$|\lambda|$? State the correct two interpretations.

<details><summary>Hint 1</summary>

Setting a variable to one forgets how many times its label occurs.

</details>
<details><summary>Hint 2</summary>

Standard tableaux require every one of the n labels exactly once.

</details>
<details><summary>Solution</summary>

No. With m ones it counts semistandard tableaux using labels at most m,
including allowed repetitions. Standard tableaux of size n are counted by
the coefficient of $x_1\cdots x_n$ in n variables, which forces each
label to occur once. Evaluation and coefficient extraction are different
operations with different enumerative meanings.

</details>

## Summary and next connection

Symmetric polynomials have explicit monomial and elementary coordinates.
Alternants define the Schur basis, Jacobi–Trudi expresses it through complete
functions, and a sign-reversing path involution proves its tableau positivity.
Specialization determines the objects actually counted. Representations next
explain how characters package related symmetry data and produce integer
multiplicities.
