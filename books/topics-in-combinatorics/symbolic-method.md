
# The Symbolic Method and Formal Specifications

A specification is more than an equation that happens to have familiar
coefficients. It identifies objects, their size, their isomorphisms and a
reversible decomposition. Only then does a generating-function equation
inherit a counting interpretation. This chapter separates unlabelled type
counting from labelled assembly, establishes their basic operators, and proves
the formal inversion formula that extracts coefficients of recursive trees.
The next chapter adds analytic continuation and singularity estimates; none
of those analytic conclusions are needed for the formal identities here.

Prepare with the ordinary and exponential generating-function chapters of
[Combinatorics](#/books/combinatorics) and the elementary structure
arguments in [Matroids and Extremal Combinatorics](#/books/discrete-combinatorial-structures).
We work over the rational formal power-series ring. Later analytic estimates
need complex analysis, which will be named where it is used. The earlier
Quarto analytic-combinatorics source remains intact; the present development
rewrites its specification-to-coefficient entry point in greater detail.

## Grading and local finiteness

**Definition 1.1 (Locally finite graded class).** An unlabelled counting class
is a disjoint union $\mathcal C=\bigsqcup_{n\ge0}\mathcal C_n$, where
$\mathcal C_n$ is a finite set of object types of size $n$. Its ordinary
generating function is $C(z)=\sum_n c_nz^n$, with $c_n=|\mathcal C_n|$.
Type equality is part of the definition, not something supplied by the series.

The finiteness hypothesis makes each coefficient a finite count. Two objects
can have the same size and still be different types; equal coefficient
sequences need not identify the classes. For graphs, decide whether vertex
labels are retained and whether isomorphism identifies drawings before counting.
For words, positions are ordered even when letter names can repeat.

A labelled class instead supplies a finite set of structures on each finite
label set, together with consistent transport under bijections of labels.
Let $c_n$ count its structures on $[n]$. Its exponential generating function
is $C(z)=\sum_n c_nz^n/n!$. Transport ensures that a block of any $n$
labels supports the same number $c_n$ of structures; this is what permits
binomial allocation of labels in product constructions.

An operator involving arbitrarily many components will require $c_0=0$.
Otherwise a fixed positive-size object can acquire arbitrarily many zero-size
components, destroying local finiteness or changing its intended identity.
A formal expression such as $1/(1-C)$ also requires $1-C$ to have
invertible constant term. The zero-component hypothesis gives that term one.

## Disjoint unions, ordered products and sequences

**Proposition 1.2 (Sum and product rules).** Disjoint tagged union gives the
sum of generating functions. An ordered product whose size is the sum of
component sizes gives their product, for both ordinary and exponential
conventions when the corresponding label allocation is used.

*Proof.* For an ordinary product, size $n$ objects decompose uniquely into
a size $k$ first component and size $n-k$ second component. Summing their
counts gives the convolution coefficient. For labelled products, first choose
the $k$ labels assigned to the first component in $\binom nk$ ways,
then choose its structure and the second structure on the complementary labels.
Dividing $\sum_k\binom nk a_kb_{n-k}$ by $n!$ gives the coefficient
of the product of the two exponential series. The union argument counts
the tagged alternatives in disjoint cases. ∎

The tags matter. If two specifications both construct the same object, adding
their series counts descriptions, not necessarily objects. Likewise, an ordered
product remembers which component came first; forgetting that order can introduce
symmetries and require a different argument.

If $C(0)=0$, a sequence of $k$ components has series $C(z)^k$.
Only $k\le n$ can contribute to size $n$ when every component has
positive integer size. Hence the infinite sum is coefficientwise meaningful:

$$\operatorname{SEQ}(\mathcal C)\quad\longleftrightarrow\quad
\sum_{k\ge0}C(z)^k=\frac1{1-C(z)}.$$

This operator includes one empty sequence. Its ordinary or exponential
interpretation is determined by the starting class and product convention;
the identical algebraic form does not erase that distinction.

## Unlabelled multiplicities and labelled sets

**Proposition 1.3 (Unlabelled multiset).** If $c_0=0$, finite multisets of
unlabelled component types have ordinary series

$$M(z)=\prod_{n\ge1}(1-z^n)^{-c_n}
=\exp\!\left(\sum_{k\ge1}\frac{C(z^k)}k\right).$$

*Proof.* Each particular type of size $n$ can occur zero, one, two or more
times, contributing $1+z^n+z^{2n}+\cdots$. There are $c_n$ such
types, and their multiplicities are independent. Multiplying gives the product.
For a coefficient of degree $N$, only sizes at most $N$ and multiplicities
at most $N$ contribute, so the product is formally defined. Applying
$-\log(1-t)=\sum_{k\ge1}t^k/k$ to each factor and exchanging the
coefficientwise finite sums gives the exponential expression. ∎

A finite subset of types, forbidding repeated types, instead gives
$\prod_{n\ge1}(1+z^n)^{c_n}$. This is not the same operator as a
labelled set of components subsequently considered up to isomorphism: disjoint
label blocks can support isomorphic component types, so repeated types may
remain after labels are forgotten. The word “set” without its equality
convention is insufficient to select a formula.

**Proposition 1.4 (Labelled sets and cycles).** For a labelled class with
$C(0)=0$, unordered sets of components have exponential series
$\exp C(z)$, while cyclic orders of components have exponential series
$\sum_{k\ge1}C(z)^k/k=-\log(1-C(z))$.

*Proof.* An ordered list of $k$ nonempty labelled components has series
$C^k$. Permuting the component positions acts freely: distinct nonempty
label blocks cannot coincide. Forgetting the order therefore divides its
count by $k!$, giving $\sum C^k/k!=\exp C$. For cyclic order,
forget only the chosen starting component. A nontrivial cyclic shift cannot
fix the ordered label blocks, so each cyclic arrangement has exactly $k$
linear presentations. Division by $k$ gives the second formula. ∎

These divisions use free actions on actual labelled decompositions. Dividing
by a guessed symmetry factor for unlabelled objects is generally invalid,
because different objects can have stabilizers of different sizes. Cycle-index
and representation methods later provide a systematic treatment of those
nonfree actions.

**Worked example 1.5 (Partitions versus compositions).** Let there be one
unlabelled part type of each positive size, so $C(z)=z/(1-z)$.
Sequences give $1/(1-C(z))$: for positive size $n$ their count is
$2^{n-1}$, corresponding to choosing separators in the $n-1$ gaps
between unit marks. Multisets instead give
$\prod_{j\ge1}(1-z^j)^{-1}$, the integer-partition series.
The compositions $(1,2)$ and $(2,1)$ differ as sequences but define
the same multiset partition. The formulas count different equality conventions,
not two alternative answers to one unspecified problem.

**Worked example 1.6 (Permutations assembled from cycles).** An atomic
labelled class has series $Z(z)=z$. A directed cycle on its atoms has
series $-\log(1-z)$. A permutation decomposes uniquely into an unordered
set of its disjoint directed cycles, so its exponential series is
$\exp(-\log(1-z))=1/(1-z)$. Thus its labelled size $n$ count
is $n!$. Reversing a cycle is not identified: directed cyclic order is
part of the permutation. Counting undirected necklaces would require another
operator.

## Recursive specification and formal uniqueness

A recursively defined class needs a well-founded size decrease. The equation
$T=z\Phi(T)$ with $\Phi(0)\ne0$ determines a unique series with
$T(0)=0$: the degree $n$ coefficient on the right depends only on
coefficients of $T$ below degree $n$. Successive substitution beginning
at zero therefore stabilizes each coefficient after finitely many steps.
This establishes algebraic uniqueness, while a claimed object interpretation
still needs a bijective decomposition with those size properties.

For rooted labelled trees, remove the distinguished root. Its incident
components are an unordered set of rooted labelled trees on disjoint label
blocks. Conversely attach the root to each component root. This is a reversible
decomposition, giving

$$T(z)=z\exp T(z).$$

No plane order of children is retained. If children were linearly ordered,
SEQ would replace SET and the tree class would change. Formal coefficient
extraction can now be made exact by inversion, with no analytic convergence
assumption.

## A full formal inversion argument

**Definition 1.7 (Formal residue).** For a Laurent series with finitely many
negative powers, $\operatorname{Res}_u H(u)$ is the coefficient of $u^{-1}$.
The residue of a formal derivative is zero, since differentiating a monomial
cannot produce a nonzero multiple of $u^{-1}$.

If $h(u)=u\psi(u)$ with $\psi(0)\ne0$, then
$\operatorname{Res}_z H(z)=\operatorname{Res}_u H(h(u))h'(u)$.
To justify this substitution, check monomials. For exponent $k\ne-1$,
$h^kh'$ is the derivative of $h^{k+1}/(k+1)$ and has residue zero.
For $k=-1$, $h'/h=1/u+\psi'/\psi$, whose residue is one.
Linearity extends the identity: the finite principal part and positive
valuation of $h$ make every coefficient contribution finite.

**Theorem 1.8 (Lagrange–Bürmann inversion).** Let $T=z\Phi(T)$ with
$\Phi(0)\ne0$, and let $F$ be a formal power series. For $n\ge1$,

$$[z^n]F(T(z))=\frac1n[u^{n-1}]F'(u)\Phi(u)^n.$$

*Proof.* The inverse substitution is $z=h(u)=u/\Phi(u)$.
The residue substitution just proved gives

$$[z^n]F(T)=\operatorname{Res}_u
\left(F(u)\Phi(u)^n u^{-n-1}
-F(u)\Phi(u)^{n-1}\Phi'(u)u^{-n}\right).$$

The derivative of $F(u)\Phi(u)^nu^{-n}$ has residue zero.
Expanding it and rearranging shows that the displayed residue equals
$\frac1n\operatorname{Res}_u F'(u)\Phi(u)^nu^{-n}$.
Taking the indicated coefficient gives the formula. The constant coefficient,
excluded from division by $n$, is separately $F(0)$. ∎

**Worked example 1.9 (Rooted labelled trees).** Put $F(u)=u$ and
$\Phi(u)=e^u$. Inversion gives
$[z^n]T=\frac1n[u^{n-1}]e^{nu}=n^{n-1}/n!$.
The labelled count is consequently $n^{n-1}$ for $n\ge1$.
Every unrooted labelled tree has exactly $n$ choices of distinguished
vertex, so for $n\ge2$ its count is $n^{n-2}$. Size one has one
tree and one root; state it directly rather than interpreting an unnecessary
negative-power convention. The coefficient argument has proved a finite
enumeration formula, not an asymptotic or a uniform random-sampling method.

## A finite symmetry calculation explains the warning

**Theorem 1.10 (Burnside's orbit count).** If a finite group $G$ acts on a
finite set $X$, the number of orbits is
$|G|^{-1}\sum_{g\in G}|\operatorname{Fix}(g)|$.

*Proof.* Count pairs $(g,x)$ such that $gx=x$. Counting first by group
element gives the displayed numerator. Counting first by object gives
$\sum_{x\in X}|\operatorname{Stab}(x)|$. For one orbit, the map
$g\operatorname{Stab}(x)\mapsto gx$ is a bijection from left cosets
to orbit points: equality of images is exactly the condition that the two
group elements differ by an element of the stabilizer. Thus orbit size
times stabilizer size equals $|G|$. Stabilizers in the same orbit have
equal size by conjugation, so that orbit contributes exactly $|G|$ to
the pair count. Divide the total by $|G|$ to obtain the number of orbits. ∎

**Worked example 1.11 (Binary necklaces of length four).** A word has four
labelled positions, each receiving zero or one. We identify words under
rotations only, keeping reflection a separate operation. The acting group
is cyclic of order four. Its identity fixes all sixteen words. Rotation
by one step fixes only the two constant words, and rotation by three steps
has the same fixed words. Rotation by two steps fixes four words because
positions one and three agree and positions two and four agree, with
two independent binary choices. Burnside gives
$(16+2+4+2)/4=6$ necklaces.

Dividing sixteen words by four would instead give four, an undercount.
The constant words have one-element rotation orbits, the alternating words
have two-element orbits, and other words have four-element orbits. There
is no common orbit size to divide out. By contrast, the labelled-component
cycle construction earlier had a free action on distinct nonempty label
blocks, so its division by the cycle length was justified. The difference
is the equality convention and the group action, not a disagreement between
two versions of the same formula.

The fixed-point count also explains why cycle indices arise in unlabelled
enumeration. A rotation forces equal colours on each of its position cycles;
the number of freely chosen colours is therefore governed by its cycle
structure. Recording those structures before substituting a component series
retains the stabilizer information that an unsupported division would lose.
The symmetric-function and representation chapters develop that language
without treating a labelled counting formula as automatically unlabelled.

## Specifications and probability are separate constructions

Uniformly choosing an encoding produces a uniform object only when every
object has the same number of encodings, or when probabilities are corrected
for unequal multiplicities. An unordered assembly can have differently sized
automorphism groups, so forgetting labels may bias type frequencies. Its
ordinary coefficient count and its labelled coefficient count solve different
problems. A formal identity does not declare either distribution uniform.

Similarly, replacing an exact series by a numerical approximation invokes
convergence, branch choices and error estimates that are absent from formal
algebra. The next chapter will state those analytic hypotheses explicitly.
First establish the class and its reversible specification; only then choose
a coefficient theorem or a sampling law.

## Exercises

### Exercise 1.1
<a id="symbolic-method-ex-1"></a>

Why is $C(0)=0$ needed for unrestricted sequences of components to remain
locally finite? Give a counterexample when it fails.

<details><summary>Hint 1</summary>

Consider sequences made entirely of one zero-size component.

</details>
<details><summary>Hint 2</summary>

Different sequence lengths remain different objects at the same total size.

</details>
<details><summary>Solution</summary>

If a zero-size type exists, its sequences of lengths zero, one, two and
so on are distinct size-zero objects. The size-zero class is infinite.
With every component positive-sized, a size $n$ sequence has at most
$n$ components, making the coefficient sum finite when the starting
class is locally finite.

</details>

### Exercise 1.2
<a id="symbolic-method-ex-2"></a>

There are two unlabelled types of size one and no others. Count size-three
sequences and size-three multisets of these types.

<details><summary>Hint 1</summary>

Sequences retain all three positions.

</details>
<details><summary>Hint 2</summary>

A multiset is specified by the multiplicity of the first type.

</details>
<details><summary>Solution</summary>

There are $2^3=8$ sequences. There are four multisets, with first-type
multiplicity $0,1,2,3$ and the complementary second-type multiplicity.
Their series are $1/(1-2z)$ and $(1-z)^{-2}$ respectively.
The same starting type counts lead to different assembly operators.

</details>

### Exercise 1.3
<a id="symbolic-method-ex-3"></a>

Derive the exponential series for labelled sets of size-two blocks, with
one structure on each two-label set, and extract the count at size six.

<details><summary>Hint 1</summary>

A component has exponential series $z^2/2$.

</details>
<details><summary>Hint 2</summary>

Size six uses exactly three unordered blocks.

</details>
<details><summary>Solution</summary>

The assembly series is $\exp(z^2/2)$. Its degree-six coefficient is
$1/(2^3 3!)$, giving labelled count $6!/(2^3 3!)=15$.
The denominator accounts for order inside each pair and order among the
three blocks, each justified by the underlying label allocation.

</details>

### Exercise 1.4
<a id="symbolic-method-ex-4"></a>

Why does a labelled cycle of $k$ nonempty components have exactly $k$
linear presentations, even when some component types are isomorphic?

<details><summary>Hint 1</summary>

The actual components occupy disjoint label blocks.

</details>
<details><summary>Hint 2</summary>

A nontrivial shift changes the first block's label set.

</details>
<details><summary>Solution</summary>

Distinct component positions have distinct nonempty disjoint label sets.
A cyclic shift fixing the full ordered list would have to identify those
sets, impossible unless the shift is trivial. Thus the cyclic action is
free with orbit size $k$. Isomorphic unlabelled types do not erase their
different actual labels.

</details>

### Exercise 1.5
<a id="symbolic-method-ex-5"></a>

Use inversion to extract $[z^n]T(z)^r$ when $T=ze^T$ and
$1\le r\le n$.

<details><summary>Hint 1</summary>

Set $F(u)=u^r$ in the theorem.

</details>
<details><summary>Hint 2</summary>

The remaining exponential coefficient has degree $n-r$.

</details>
<details><summary>Solution</summary>

The coefficient is $\frac rn[u^{n-r}]e^{nu}
=\frac rn\,n^{n-r}/(n-r)!$.
The assumption $r\le n$ gives a nonnegative coefficient index.
For $r>n$ the coefficient is zero because $T^r$ has valuation $r$.

</details>

### Exercise 1.6
<a id="symbolic-method-ex-6"></a>

Let $B=1+zB^2$. Apply inversion to $T=B-1$ to derive its
Catalan coefficient formula.

<details><summary>Hint 1</summary>

The equation becomes $T=z(1+T)^2$.

</details>
<details><summary>Hint 2</summary>

Use $F(u)=u$ and a binomial coefficient of $(1+u)^{2n}$.

</details>
<details><summary>Solution</summary>

For $n\ge1$, $[z^n]T=\frac1n\binom{2n}{n-1}
=\frac1{n+1}\binom{2n}n$. The same is the positive-degree
coefficient of B; its constant coefficient is one from the original equation.
Both the substitution and the separate constant term are required.

</details>

### Exercise 1.7
<a id="symbolic-method-ex-7"></a>

Prove the formal exponential identity in Proposition 1.3 by taking logarithms,
and explain why the exchanged sums are meaningful.

<details><summary>Hint 1</summary>

Expand each $-\log(1-z^n)$ as a positive-degree series.

</details>
<details><summary>Hint 2</summary>

For degree $N$, only products $nk\le N$ can contribute.

</details>
<details><summary>Solution</summary>

The logarithm is $\sum_{n\ge1}c_n\sum_{k\ge1}z^{nk}/k
=\sum_{k\ge1}C(z^k)/k$. At each bounded degree, there are only
finitely many pairs of positive indices with product at most that bound.
Thus reordering is coefficientwise finite, requiring no analytic absolute
convergence. Exponentiation recovers the constant-one product.

</details>

### Exercise 1.8
<a id="symbolic-method-ex-8"></a>

Explain why $T=z/(1-T)$ and $T=ze^T$ describe different rooted-tree
conventions, despite both having unique zero-constant formal solutions.

<details><summary>Hint 1</summary>

Identify SEQ versus labelled SET at the root.

</details>
<details><summary>Hint 2</summary>

Formal uniqueness says nothing by itself about which object equality was chosen.

</details>
<details><summary>Solution</summary>

The first uses a linearly ordered list of child components, giving a plane
ordering. The second uses an unordered labelled set of child components,
with labels allocated among subtrees. Their coefficient conventions and
isomorphisms differ. Each recursive equation has a unique formal solution,
but that does not identify the underlying classes.

</details>

### Exercise 1.9
<a id="symbolic-method-ex-9"></a>

Justify the residue substitution for the monomial $z^{-1}$.

<details><summary>Hint 1</summary>

Write $h(u)=u\psi(u)$ with invertible $\psi$.

</details>
<details><summary>Hint 2</summary>

The logarithmic derivative separates a single $1/u$ term.

</details>
<details><summary>Solution</summary>

$h'(u)/h(u)=1/u+\psi'(u)/\psi(u)$.
The second term is an ordinary formal power series, so it has no
$u^{-1}$ coefficient. The residue is one, exactly the residue of
$z^{-1}$. This is the exceptional monomial case needed alongside the
zero-residue derivative cases.

</details>

### Exercise 1.10
<a id="symbolic-method-ex-10"></a>

A labelled structure has several encodings, with multiplicity depending on
its automorphism group. Does choosing an encoding uniformly and forgetting
it necessarily give a uniform unlabelled type?

<details><summary>Hint 1</summary>

The type's probability is the sum of probabilities of its encodings.

</details>
<details><summary>Hint 2</summary>

Equal probability per encoding does not imply equal numbers of encodings.

</details>
<details><summary>Solution</summary>

No. A type with more encodings receives more total probability under a
uniform encoding law. Uniformity on types requires equal preimage sizes or
an appropriate weighting correction. The counting specification must identify
its objects before a sampling claim can be assessed; formal coefficient
identities alone supply no such probability guarantee.

</details>

## Summary and next connection

Local finiteness and a reversible decomposition justify symbolic operators.
Labelled SET and CYC use free actions on nonempty label blocks, while
unlabelled multiplicities give an Euler product. Formal inversion extracts
recursive coefficients without convergence assumptions. Singularity analysis
next supplies the separate analytic hypotheses needed to turn exact series
into asymptotic estimates.
