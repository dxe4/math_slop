var e=`---
parent_id: book-topics-in-combinatorics
chapter_id: entropy-method
title: "The Entropy Method"
level: graduate
license: CC BY-SA 4.0
---

# The Entropy Method

Choose an object uniformly from a finite family. Its entropy is the logarithm
of the family size. Describing that object through coordinates, projections
or a sequence of conditional choices can therefore bound its count. The
method is effective when a naive multiplication treats dependent choices as
independent. This chapter proves the finite information inequalities it uses,
then derives projection bounds, a binary-family estimate and Brègman's
permanent inequality.

Prepare with finite probability, conditional distributions and logarithms,
and read the finite-family encodings in the preceding chapters. All random
variables have finite support. Logarithms are natural, so exponentiating
entropy bounds uses the ordinary exponential; choosing base two would express
entropy in bits and change all logarithmic units consistently.

## Information is an average over the actual distribution

**Definition 11.1 (Entropy and conditional entropy).** For probabilities
$p_x$, set $H(X)=-\\sum_x p_x\\log p_x$, with
$0\\log0=0$. Define
$H(X\\mid Y)=\\sum_{y:p_y>0}p_y H(X\\mid Y=y)$.
Conditional distributions at zero-probability y are irrelevant to that sum.

A deterministic variable has entropy zero. A uniform variable on M
points has entropy log M. Probabilities, rather than the written number
of possible labels, determine the value: adding unused labels does not
increase entropy. Every summand is nonnegative because probabilities lie
between zero and one.

**Lemma 11.2 (Relative entropy).** For probability vectors p,q,
$D(p\\|q)=\\sum_{p_i>0}p_i\\log(p_i/q_i)\\ge0$,
with value infinity if some positive p meets zero q.
Equality holds exactly when p equals q. In particular, entropy on a
support of size M is at most log M.

*Proof.* In the finite-valued case, apply $\\log t\\le t-1$ to
$t=q_i/p_i$ on the positive support of p:

$$-D(p\\|q)\\le\\sum_{p_i>0}(q_i-p_i)\\le0.$$

Equality requires every positive-support ratio equal one and no q mass
outside that support, hence p=q. Comparing p with the uniform
probability vector gives $D=\\log M-H(p)$, proving the maximum claim. ∎

## Conditional choices obey chain rules

**Theorem 11.3 (Chain rule and conditioning).**
$H(X,Y)=H(Y)+H(X\\mid Y)$, and
$H(X\\mid Y,Z)\\le H(X\\mid Y)$.
Consequently $H(X_1,\\ldots,X_n)\\le\\sum_iH(X_i)$.

*Proof.* On positive joint probabilities, write
$p_{xy}=p_y p_{x\\mid y}$ and expand its logarithm.
Summing the two terms gives the chain rule; zero terms are omitted.
For each positive-probability y, expand the relative entropy between
$p_{XZ\\mid y}$ and $p_{X\\mid y}p_{Z\\mid y}$.
Its value is
$H(X\\mid y)+H(Z\\mid y)-H(X,Z\\mid y)$,
which by the chain rule is
$H(X\\mid y)-H(X\\mid Y=y,Z)$.
The relative-entropy lemma makes it nonnegative. Average over y.
Finally iterate the chain rule in coordinate order and remove conditioning
from each term to obtain subadditivity. ∎

Equality in the conditioning comparison means conditional independence at
all positive-probability y, by the relative-entropy equality condition.
The comparison is averaged over the conditioning variable; it does not
say that every particular observed value has entropy at most the
unconditional entropy. A rare observation can leave a more diffuse
conditional distribution even though the average cannot increase.

**Worked example 11.4 (Two fair marginals, one bit of joint choice).**
Let X be a fair binary variable and put Y=X. Each marginal
entropy is log two, while the pair takes only $(0,0)$ and $(1,1)$
and has entropy log two, rather than twice that amount.
Here $H(Y\\mid X)=0$. If X and Y were independent fair variables,
the pair would instead have four equally likely outcomes and entropy
log four. The marginals alone do not determine the joint count or
information, just as they did not determine a correlated game distribution.

## Coordinate covers yield projection inequalities

**Theorem 11.5 (Weighted Shearer inequality).** Let nonnegative weights
$w_S$ be assigned to a finite collection of coordinate subsets, with
$\\sum_{S\\ni i}w_S\\ge1$ for every i. Then

$$H(X_1,\\ldots,X_n)\\le\\sum_S w_S H(X_S).$$

*Proof.* Expand each subset entropy in the inherited increasing coordinate
order. Its term for i is
$H(X_i\\mid X_{S\\cap\\{1,\\ldots,i-1\\}})$,
which is at least $H(X_i\\mid X_1,\\ldots,X_{i-1})$ by
conditioning reduction. Weight and sum these inequalities. Every latter term
appears with total weight at least one and is nonnegative. The full
chain rule then gives the claimed bound. ∎

Repeated subsets are allowed by combining their weights. The usual k-cover
form assigns weight one over k to every member of a collection in
which each coordinate appears at least k times. It follows that the
sum of projection entropies is at least k times the joint entropy.
The proof does not require independent coordinates.

For a nonempty finite family F of coordinate tuples, choose X uniformly
in F. Then $H(X)=\\log|F|$, and the subset variable's support
is its projection $\\pi_S F$. The maximum-entropy bound gives

$$|F|\\le\\prod_S|\\pi_S F|^{w_S}.$$

An empty family satisfies the corresponding nonnegative counting inequality
directly; taking its logarithm would be undefined and is unnecessary.

**Worked example 11.6 (Loomis–Whitney and its slack).** For a family of
d-tuples, $d\\ge2$, the projections omitting each coordinate cover
every coordinate exactly d-minus-one times. Therefore

$$|F|^{d-1}\\le\\prod_{i=1}^d|\\pi_{-i}F|.$$

For a three-dimensional box with side counts a,b,c, the right product
is $(ab)(ac)(bc)=|F|^2$, equality.
For the diagonal family $\\{(t,t,t):1\\le t\\le m\\}$,
the left side is $m^2$ and the right $m^3$.
The projection sizes do not capture the full equality constraint tying
all three coordinates together, so the general bound need not be sharp.

## Counting binary families by their mean weight

Let $h(q)=-q\\log q-(1-q)\\log(1-q)$, extended continuously
at zero and one. A binary variable of mean q has entropy h(q).
For a uniformly selected k-subset of an n-set, its indicator coordinates
all have mean k/n. Subadditivity gives
$\\binom nk\\le\\exp(nh(k/n))$.
This is an upper bound without a square-root prefactor, not a replacement
for a sharper local asymptotic.

**Proposition 11.7 (Binary ball bound).** For integers $0\\le k\\le n/2$,

$$\\sum_{j=0}^k\\binom nj\\le\\exp(nh(k/n)).$$

*Proof.* The k-zero case is one on both sides. Otherwise choose a
uniform vector from the binary ball. Symmetry makes every coordinate mean
the same q, with $q\\le k/n$ because its total weight is at
most k. Subadditivity bounds its entropy by n h(q).
The function h is increasing on $[0,1/2]$, since its derivative
there is $\\log((1-q)/q)\\ge0$ in the interior.
Thus log ball-size is at most n h(k/n). ∎

The restriction to at most half the coordinates is substantive. A ball
of radius near n contains almost every binary vector, while h(k/n)
near that endpoint is small. Applying the same formula outside its
stated range would give a false count. For k at zero the separate
case also avoids a division or a logarithm of zero in intermediate
steps.

## Random order makes matching uncertainty computable

For a zero-one square matrix A, its permanent counts permutations pi
with $A_{i,\\pi(i)}=1$ for every row. Equivalently it counts perfect
matchings of the associated bipartite graph. Unlike a determinant, the
permanent has no alternating signs.

**Theorem 11.8 (Brègman's bound).** If row i has positive sum $r_i$,
then

$$\\operatorname{per}(A)\\le\\prod_i(r_i!)^{1/r_i}.$$

A zero row instead makes the permanent zero directly.

*Proof.* If no perfect matching exists, the inequality is immediate.
Otherwise choose a matching X uniformly, so $H(X)=\\log\\operatorname{per}(A)$.
Choose independently a uniformly random order of the rows.
For each fixed order, apply the chain rule as rows reveal their
matched columns. At row i, the already used columns are known.
Its conditional entropy is at most log of the number $N_i$
of its neighbours not used by earlier rows, because these contain
every still possible matched column. Some available columns may not
extend to a full matching; using all of them is a safe upper
bound.

Average this inequality over the random row order and over X.
For a fixed full matching, each neighbouring column of row i is
matched to a unique row, giving $r_i$ distinct associated rows,
one of them i. Their relative order is uniform. The number
of those columns still unused when i is reached is the number
of associated rows at or after i, uniform on
$1,\\ldots,r_i$. Hence

$$\\mathbb E\\log N_i=\\frac1{r_i}\\sum_{j=1}^{r_i}\\log j
=\\frac{\\log(r_i!)}{r_i}.$$

Summing the entropy bounds and exponentiating proves the theorem. ∎

The random order is an averaging device in the proof, not an
algorithm assumed to sample uniformly from perfect matchings. Uniform X
is well-defined on the finite nonempty matching set even when finding
such a sample is computationally difficult. Existence of a distribution
and an efficient sampling procedure are separate claims.

**Worked example 11.9 (Equality blocks and a strict cycle bound).**
For the all-one n-by-n matrix, every row sum is n and the
bound gives n factorial, exactly its permanent. More generally a block
diagonal union of all-one square blocks attains the product bound
block by block.

For a cyclic n-by-n matrix permitting columns i and i-plus-one
in row i, with indices modulo n and $n\\ge3$, the permanent
is two. Choosing either edge in one row forces all remaining choices
around the cycle to avoid repeated columns, leaving the identity or
the cyclic shift. The bound is $2^{n/2}$, which is larger
than two for $n>2$. It controls the family without claiming equality
for every regular bipartite graph.

**Proposition 11.10 (A Latin-square upper bound).** The number of labelled
Latin squares of order n is at most
$\\prod_{k=1}^n(k!)^{n/k}$.

*Proof.* Fill the rows in order. After r-minus-one valid rows,
each column has exactly k=n-r+1 available symbols. A valid
next row is a perfect matching between columns and symbols in
that availability matrix: each column gets one permitted symbol and
every symbol occurs once in the row. Brègman's bound gives at
most $(k!)^{n/k}$ choices, uniformly for every valid prefix.
Multiplying these conditional upper bounds over all rows proves the
claim. Prefixes that later have no extension only reduce the count. ∎

This argument does not assume the row choices are independent, nor
does it say that every locally valid row extends to a completed
square. Its uniform bound is enough to count the branching tree
from above. At order two the product is two, attained by the
two labelled Latin squares. At larger orders the displayed bound is
not asserted exact. It connects the tableau chapter's discipline about
labels with the present conditional-choice method: fixing row, column
and symbol names is part of what is counted, and quotienting by
their permutations would need another orbit argument.

## What the encoding must preserve

The entropy of a uniform object is log of its actual family size.
A nonuniform generator instead has a smaller or equal entropy, so
bounding that generator's entropy does not by itself bound the number
of objects it fails to sample uniformly. Projection and conditional-choice
arguments must begin with the right random object, even when their
proofs use additional independent randomness such as row order.

Continuous differential entropy has different properties and is not being
used. In particular the nonnegativity of conditional entropy in Shearer's
weighted-cover proof is valid for these finite discrete variables. Replacing
it with an unrestricted real-valued differential-entropy expression can invalidate
the step that uses coverage multiplicity at least one.

The next chapter uses small fingerprints to describe large independent-set
families. Entropy bounds count the possible fingerprints, while a separate
graph algorithm proves that the decoded sets contain the intended independent
sets. Counting an encoding and proving its decoding property remain distinct
obligations.

## Worked example: entropy of a sampler is not log support size

A sampler produces four binary words. It chooses the first with probability
ninety-seven hundredths and each other word with probability one hundredth.
Its support still has size four, whose base-two logarithm is two.
Its entropy, computed from those actual probabilities, is only about one
quarter of a bit. The precise value is not important for the distinction:
strong concentration has made the average uncertainty much smaller than the
logarithm of the number of possible outputs.

An upper bound on this sampler's entropy consequently does not prove that
there are few possible words. To count the support by entropy, first
choose uniformly from that support; then its entropy is exactly two bits.
The rare outputs in the original sampler are still genuine objects, so
dropping them would change the counting problem. This is especially relevant
when a constructive random procedure finds a few objects very frequently.
Fast generation of some objects and uniform generation of all objects are
different properties, and a counting proof must identify which distribution
it has actually used.

## Exercises

### Exercise 11.1
<a id="entropy-method-ex-1"></a>

Prove that a uniform distribution on M points maximizes entropy on that
support, including the equality condition.

<details><summary>Hint 1</summary>

Compare the given law with the uniform law using relative entropy.

</details>
<details><summary>Hint 2</summary>

The difference from log M is exactly that relative entropy.

</details>
<details><summary>Solution</summary>

For uniform q, $D(p\\|q)=\\sum p_i\\log p_i+\\log M
=\\log M-H(p)\\ge0$. Equality holds exactly for p=q
by the lemma's strict logarithm inequality and support condition.
Extra zero-probability labels do not create additional entropy unless
probability is actually allocated to them.

</details>

### Exercise 11.2
<a id="entropy-method-ex-2"></a>

Derive the chain rule for a finite pair by expanding positive joint
probabilities.

<details><summary>Hint 1</summary>

Write $p_{xy}=p_yp_{x\\mid y}$.

</details>
<details><summary>Hint 2</summary>

Sum the logarithm of each factor separately.

</details>
<details><summary>Solution</summary>

The term from minus log $p_y$ sums to $H(Y)$,
since conditional probabilities sum to one. The term from minus log
$p_{x\\mid y}$ sums to the weighted conditional entropy.
Their total is the joint entropy. Terms with joint probability zero
contribute zero and need no undefined conditional logarithm.

</details>

### Exercise 11.3
<a id="entropy-method-ex-3"></a>

If X and Y are the same fair binary variable, compute all terms
in $H(X,Y)=H(X)+H(Y\\mid X)$.

<details><summary>Hint 1</summary>

There are only two possible joint outcomes.

</details>
<details><summary>Hint 2</summary>

Knowing X determines Y exactly.

</details>
<details><summary>Solution</summary>

$H(X,Y)=\\log2$, $H(X)=\\log2$ and $H(Y\\mid X)=0$.
The independent-pair value log four would count joint possibilities that
this model excludes. Equal marginals alone do not imply entropy additivity.

</details>

### Exercise 11.4
<a id="entropy-method-ex-4"></a>

Prove the three-coordinate projection inequality
$|F|^2\\le|\\pi_{12}F||\\pi_{13}F||\\pi_{23}F|$.

<details><summary>Hint 1</summary>

Each coordinate is covered by two of the three pairs.

</details>
<details><summary>Hint 2</summary>

Use weights one half and a uniform tuple in F.

</details>
<details><summary>Solution</summary>

For nonempty F, weighted Shearer gives
$2\\log|F|\\le H(X_{12})+H(X_{13})+H(X_{23})$.
Each term is at most the log of its projection support size.
Exponentiating proves the inequality. Empty F is handled directly rather
than taking its logarithm.

</details>

### Exercise 11.5
<a id="entropy-method-ex-5"></a>

Why is a conditional-entropy term for a subset projection at least
the corresponding full-prefix conditional term in Shearer's proof?

<details><summary>Hint 1</summary>

The subset conditions on fewer earlier coordinates.

</details>
<details><summary>Hint 2</summary>

Adding information cannot increase the averaged conditional entropy.

</details>
<details><summary>Solution</summary>

The projection conditions only on earlier coordinates that belong to that
subset. Adding the missing earlier coordinates invokes the conditioning
inequality and can only reduce the entropy. This is the direction
needed to lower-bound the weighted sum by the complete chain-rule sum.

</details>

### Exercise 11.6
<a id="entropy-method-ex-6"></a>

Explain why the binary-ball bound is not valid with the same right
side for k equal to n.

<details><summary>Hint 1</summary>

A radius-n ball contains every binary vector.

</details>
<details><summary>Hint 2</summary>

The function h equals zero at one.

</details>
<details><summary>Solution</summary>

The ball has size $2^n$, but $\\exp(nh(1))=1$.
The proof used monotonic increase of h only on the interval up
to one half. Removing the range restriction would turn a true
entropy comparison into a false numerical inequality.

</details>

### Exercise 11.7
<a id="entropy-method-ex-7"></a>

In Brègman's proof, why is the number of available neighbour columns
uniform from one to $r_i$ after fixing a matching?

<details><summary>Hint 1</summary>

Each neighbour column is assigned to exactly one row by the fixed
matching.

</details>
<details><summary>Hint 2</summary>

The relative rank of row i among those $r_i$ rows is uniform.

</details>
<details><summary>Solution</summary>

The associated rows are distinct and include i. A uniformly random
row order makes i equally likely to occupy every relative rank.
The unused neighbour columns correspond exactly to associated rows at
or after that rank, giving every value one through $r_i$ once.
No claim that the row's eventual matched column is uniform among
all currently unused columns is needed.

</details>

### Exercise 11.8
<a id="entropy-method-ex-8"></a>

Apply Brègman's theorem to a four-by-four zero-one matrix with every
row sum two. Is the upper bound always attained?

<details><summary>Hint 1</summary>

Each row contributes $(2!)^{1/2}$.

</details>
<details><summary>Hint 2</summary>

Compare two complete two-by-two blocks with the cyclic example.

</details>
<details><summary>Solution</summary>

The bound is four. Two disjoint all-one two-by-two blocks have
four matchings and attain it. The cyclic four-by-four example has
two matchings, so the degree data give a valid upper bound without
forcing equality.

</details>

### Exercise 11.9
<a id="entropy-method-ex-9"></a>

Can a low-entropy nonuniform generator establish a small upper bound
on the number of objects in its support?

<details><summary>Hint 1</summary>

Entropy is at most log support size, not at least it.

</details>
<details><summary>Hint 2</summary>

A generator can place almost all mass on one of many possible objects.

</details>
<details><summary>Solution</summary>

No. A large support can carry a highly concentrated distribution of
small entropy. The entropy upper bound then only controls that law's
information, not the support's logarithm from above. Counting proofs choose
a uniform object so equality with log family-size holds before applying
upper bounds.

</details>

### Exercise 11.10
<a id="entropy-method-ex-10"></a>

Where does finite discrete support enter the weighted-cover proof, beyond
making sums finite?

<details><summary>Hint 1</summary>

Some coordinates may be covered with weight strictly larger than one.

</details>
<details><summary>Hint 2</summary>

Extra multiples of nonnegative conditional entropy cannot lower the sum.

</details>
<details><summary>Solution</summary>

After conditioning reduction, each full-prefix term is multiplied by its
coverage weight, at least one. Nonnegativity lets that multiplier be
dropped in the desired direction. Finite discrete conditional entropy is
nonnegative. Differential entropy can be negative, so an unrestricted
continuous replacement would not justify this step.

</details>

## Summary and next connection

Relative entropy proves maximum and conditioning bounds, while chain rules
turn them into weighted projection inequalities. Uniform finite families
translate information into counts. Random ordering gives an exact permanent
bound without assuming independent matching choices. Containers next combine
such counting bounds with a separate proof that fingerprints reconstruct
valid supersets.
`;export{e as default};