
# Bounds: Singleton, Plotkin and Gilbert–Varshamov

Preparation is Hamming-ball counting, finite-field linear algebra, entropy volume estimates and elementary averaging. General finite-alphabet bounds and the two linear-only arguments are identified separately.

## Upper bounds and existence bounds answer opposite questions

For fixed alphabet size, length and target distance, let $A_q(n,d)$ be the largest possible size of a code with minimum distance at least $d$. A packing or algebraic obstruction gives an upper bound on this number. A construction or greedy existence argument gives a lower bound.

These directions must not be interchanged. Showing room for many disjoint balls does not arrange their centres. Conversely, a greedy lower bound does not prohibit a much better code. This chapter proves Singleton, Plotkin, Gilbert–Varshamov and the linear Griesmer bound, with their distinct scopes.

Rates use base-$q$ logarithms unless bits are explicitly named. The field structure needed for linear existence and Griesmer is an extra assumption beyond the general finite-alphabet statements.

## Singleton by puncturing

Let a code have $M$ words and minimum distance at least $d$. Delete any $d-1$ fixed coordinates. No two codewords become equal, since they would originally differ in at most those deleted positions. The puncturing is therefore injective, giving
$$
M\le q^{n-d+1}.
$$
For a linear $[n,k,d]$ code, $d\le n-k+1$.

The proof also shows that every set of $n-d+1$ coordinates determines the codeword. It does not say every such coordinate pattern appears in the projection; that requires equality in the size bound. Reed–Solomon codes attain it.

A code can meet Singleton and still have no convenient representation over a small alphabet for the desired length. An upper bound identifies a ceiling, not an existence result for every integer triple.

## Plotkin by averaging pairwise distances

Let $m_{ja}$ count codewords with symbol $a$ at coordinate $j$. Count ordered pairs of codewords that differ there. Their number is
$$
M^2-\sum_am_{ja}^2\le M^2(1-1/q),
$$
because Cauchy–Schwarz gives $\sum_am_{ja}^2\ge M^2/q$.

Summing over coordinates, total ordered-pair distance is at most $nM^2(1-1/q)$. But each of the $M(M-1)$ distinct ordered pairs has distance at least $d$. Therefore
$$
M(M-1)d\le nM^2(1-1/q).
$$
If $d>n(1-1/q)$, rearranging gives the Plotkin bound
$$
M\le\frac d{d-n(1-1/q)}.
$$
Take an integer floor when using it numerically. The strict threshold is needed before dividing by the positive denominator.

The proof applies to nonlinear codes too. It is an average-distance obstruction: a large set of words cannot have every pair much farther apart than the typical disagreement level of balanced coordinates.

## The asymptotic zero-rate threshold

If relative distance stays strictly above $1-1/q$, Plotkin bounds code size by a constant, giving zero asymptotic rate. At the boundary, a shortening argument is needed because the denominator can vanish.

Fix a small positive $\varepsilon$. Group codewords by their first $\ell=\lceil\varepsilon n\rceil$ coordinates. One group contains at least $M/q^\ell$ words. Delete the common prefix in that group. Distances remain at least $d$ and the new length is $n-\ell$.

If $d/n\to1-1/q$, then for large $n$ the shortened relative distance is strictly above the Plotkin threshold, by a gap depending on $\varepsilon$. Plotkin bounds that group size by a constant depending on the gap. Hence $M\le q^\ell O_\varepsilon(1)$ and its limiting rate is at most $\varepsilon$. Letting $\varepsilon$ decrease to zero proves the boundary rate is zero.

The largest-prefix class need not be a linear subspace. This is a general code bound, so no linearity is required for that shortening step.

## Gilbert’s greedy construction

Start with no selected words. Choose an available word, add it to the code and remove every word at distance at most $d-1$ from it. Repeat until no word remains.

Distinct selected centres have distance at least $d$, since a word too close to an earlier centre would have been removed. At termination the radius-$(d-1)$ balls around selected centres cover the whole ambient space. They can overlap, but their total counted volume is at least $q^n$.

Therefore the constructed code size satisfies
$$
M V_q(n,d-1)\ge q^n,\qquad
A_q(n,d)\ge\frac{q^n}{V_q(n,d-1)}.
$$
Integer ceilings may strengthen the numerical form. The existence proof is finite and terminates because each step removes at least one available word.

Notice the radius is $d-1$, not the correction radius $\lfloor(d-1)/2\rfloor$. Covering by forbidden-neighbourhood balls and packing by decoding balls are different arguments with different radii.

## Asymptotic Gilbert–Varshamov tradeoff

For a fixed relative distance $0<\delta<1-1/q$, the entropy estimate for Hamming-ball volume gives
$$
\frac1n\log_qV_q(n,\lfloor n\delta\rfloor)\to h_q(\delta).
$$
Choose integer target distances with $d_n/n\to\delta$. The greedy bound therefore supplies codes with
$$
\liminf\frac1n\log_q|C_n|\ge1-h_q(\delta).
$$
This is the Gilbert–Varshamov lower tradeoff. It need not equal the best achievable rate. It and the Hamming upper tradeoff $1-h_q(\delta/2)$ leave a substantial gap.

The construction may take exponential work in length because it handles the entire ambient word space. Existence at a rate does not imply efficient encoding or decoding at that rate.

## A linear existence form

Suppose the alphabet is $\mathbb F_q$. We can greedily choose the columns of an $r\times n$ parity-check matrix so that every set of at most $d-1$ columns is independent.

When choosing the next column, forbid every linear combination of at most $d-2$ previous columns. A union bound on these vectors is at most
$$
\sum_{j=0}^{d-2}\binom{n-1}{j}(q-1)^j.
$$
Each combination is represented by a support and nonzero coefficients. Multiple representations only overcount, which is harmless.

If
$$
q^r>\sum_{j=0}^{d-2}\binom{n-1}{j}(q-1)^j,
$$
there is an available column outside all forbidden combinations at every stage. A dependence among at most $d-1$ final columns would express its last column through at most $d-2$ earlier ones, contradiction.

The kernel code therefore has distance at least $d$ and dimension at least $n-r$. The matrix may have rank smaller than $r$, which improves dimension rather than invalidating the lower bound. If a specific smaller dimension is desired, take a subcode; its distance cannot decrease.

The strict inequality is a sufficient condition. Failure of that sufficient condition does not prove nonexistence.

## Griesmer’s stronger linear restriction

**Theorem 8.1.** A linear $[n,k,d]$ code satisfies
$$
n\ge\sum_{i=0}^{k-1}\left\lceil\frac d{q^i}\right\rceil.
$$

**Proof.** Choose a minimum-weight word $c$, with support $S$ of size $d$, and puncture the entire code on $S$. We show that the residual code has dimension $k-1$ and distance at least $\lceil d/q\rceil$ when nontrivial.

For any word $b$ not in the span of $c$, inspect the $d$ ratios $b_i/c_i$ on $S$. At least one value occurs $\lceil d/q\rceil$ times. Subtract the corresponding multiple of $c$; this creates at least that many zeros on $S$ without changing coordinates outside $S$.

If $b$ were supported entirely on $S$, the subtraction would produce a nonzero word of weight below $d$, contradiction. Hence the kernel of residual puncturing is exactly the span of $c$, proving dimension $k-1$.

Let the residual weight of $b$ be $w$. The subtracted nonzero word has total weight at most $w+d-\lceil d/q\rceil$, which must be at least $d$. Thus $w\ge\lceil d/q\rceil$.

Induct on $k$. The base $k=1$ gives $n\ge d$. For the residual code, induction gives
$$
n-d\ge\sum_{i=0}^{k-2}\left\lceil\frac{\lceil d/q\rceil}{q^i}\right\rceil
=\sum_{i=1}^{k-1}\left\lceil\frac d{q^i}\right\rceil.
$$
Adding $d$ proves the result. ∎

Linearity is essential: subtraction by a multiple of a minimum word stays inside the code. The theorem is not a bound for arbitrary nonlinear code sizes with a formally assigned dimension.

## Comparing bounds responsibly

For a proposed parameter set, several upper bounds can be applied independently. Keep the strongest actual obstruction, but do not interpret disagreement among loose bounds as inconsistency. They exploit different information.

Singleton is strong for MDS constructions over sufficiently large fields. Hamming is tied to disjoint correction balls. Plotkin becomes decisive near very large relative distance. Griesmer uses linear structure. Gilbert–Varshamov provides a guaranteed attainable region rather than another obstruction.

A bound on $A_q(n,d)$ is a statement about code size. It does not establish a decoder’s complexity or a stochastic error probability. Those require the code construction and channel assumptions developed in the neighbouring chapters.

The phrase “optimal code” should therefore name the criterion: maximum size at fixed length and distance, minimum expected channel error, or low computational cost. These objectives need not select the same family.

## A small-alphabet limit for dimension-two MDS codes

Suppose a code has $q^2$ words and distance $n-1$, the Singleton equality corresponding to dimension two. If $n\le q$, then certainly $n\le q+1$. If $n>q$, the Plotkin threshold is strict and gives
$$
q^2\le\frac{n-1}{n/q-1}.
$$
The denominator is positive, so multiplying and rearranging yields $(q-1)n\le q^2-1$, or $n\le q+1$. Thus no such MDS code can exceed $q+1$ coordinates, even without assuming linearity.

For linear dimension-two codes there is also a geometric proof. Every generator column must be nonzero and no two may be proportional; otherwise a nonzero message functional can make at least two coordinates zero, contradicting distance $n-1$. There are only $q+1$ projective directions in a two-dimensional field space, so at most that many columns are possible.

The extended evaluation construction reaches length $q+1$, showing this particular bound is sharp. Its infinity coordinate is an explicitly different evaluation functional; duplicating an ordinary finite point would instead introduce proportional columns and would fail the distance requirement. This does not classify MDS codes in all dimensions. The argument has used the specific message size $q^2$ or a two-dimensional generator, and should not be promoted to a blanket length claim without further reasoning.

## Worked example 8.1: A Plotkin obstruction

For binary length ten and distance six, $n(1-1/q)=5$. Plotkin gives $M\le6/(6-5)=6$. Thus sixteen messages are impossible, even though the simpler Singleton size bound would allow up to $2^5=32$. The averaged-pair-distance argument is stronger in this high-relative-distance regime.

## Worked example 8.2: Linear Gilbert construction recovers a familiar size

For $q=2,n=7,d=3$, the forbidden-column bound is $1+\binom61=7$. Taking $r=3$ gives $2^3=8>7$, so a parity-check kernel of dimension at least four and distance at least three exists. Choosing all seven distinct nonzero binary triples as columns supplies the Hamming code explicitly. The inequality alone guaranteed some such linear code without fixing that choice.

## Worked example 8.3: A Griesmer-tight simplex code

Take a binary generator whose seven columns are all nonzero vectors of $\mathbb F_2^3$. For a nonzero message $u$, the functional $v\mapsto u\cdot v$ takes value one on exactly four of the eight ambient vectors; zero is not among those four. Thus every nonzero codeword has weight four and the code is $[7,3,4]$. Griesmer gives $4+2+1=7$, so its length is minimal for those dimension and distance requirements.

## An anticoding argument unifies two upper bounds

Call a set of words an anticode if every pair inside it has distance strictly below the code’s required minimum distance. Any translate of that set can contain at most one codeword, because two would violate the code distance.

For counting translates, label the alphabet by the cyclic group of its size and add labels coordinatewise. This is only a convenient transitive group action preserving Hamming distance; it does not require the alphabet to be a field.

Sum the number of codewords inside every translated anticode. Each pair consisting of a codeword and an anticode word determines exactly one translation carrying that anticode word to the codeword. The total incidence count is therefore code size times anticode size.

There are as many translations as ambient words, and each intersection has size at most one. Their product sizes consequently cannot exceed ambient size. This is a general upper-bound principle, proved by finite double counting.

A radius-$t$ ball is an anticode whenever twice its radius is below the desired distance, by the triangle inequality. Substituting its volume recovers the Hamming packing bound through this different incidence interpretation.

Another anticode fixes all but $d-1$ coordinates and lets those positions vary freely. Its diameter is at most $d-1$ and its size is the alphabet size raised to that number. The same principle then gives Singleton’s bound.

This does not prove that either anticode is always largest among all sets with the required diameter. A sharper anticode construction could strengthen the resulting obstruction, while classifying maximum anticodes is another combinatorial problem.

The viewpoint also makes the asymmetry with Gilbert’s bound clear. An anticode translates into an upper limit through sparse intersections with a valid code. Gilbert’s forbidden-neighbourhood balls cover the ambient space after a greedy selection and thereby guarantee enough centres. One argument is an obstruction; the other is an existence construction.

For nonlinear alphabets the group labels are bookkeeping rather than a claim of linear code structure. The distance and incidence arguments survive because coordinate translations preserve symbol inequality. Linear dimensions and parity-check kernels still require the actual finite field introduced elsewhere.

## Shortening need not rely on linear structure

Take any code of size M over a q-symbol alphabet and fix a chosen collection of s coordinate positions. Partition its codewords by the pattern they display in those positions. There are at most q to the power s patterns, so at least one class contains M divided by q to the power s words. Keep that class and delete the fixed positions. No distance between its words changes, since those coordinates agreed already. The shortened code therefore has length reduced by s, unchanged distance and size at least that fraction.

This pigeonhole construction applies to nonlinear codes too. Linear codes often supply a sharper exact dimension statement, but that requires the rank of the selected coordinate projection; simply subtracting s from dimension can fail if the selected constraints are dependent. The general bound records only what counting guarantees. It can transfer an impossibility bound at shorter length back to the original code, provided rounding and the retained class size are included. Deleting positions without first selecting a common pattern is puncturing and has a different distance effect.

## Exercises

### Exercise 8.1
<a id="singleton-plotkin-gilbert-varshamov-ex-1"></a>

Prove Singleton’s projection is injective.

<details>
<summary>Hint 1</summary>

Two equal projections differ only in deleted coordinates.

</details>
<details>
<summary>Hint 2</summary>

There are only $d-1$ of those.

</details>
<details>
<summary>Solution</summary>

Distinct codewords with equal projections would have distance at most $d-1$, violating the target distance. Thus every projected word identifies at most one original word, and the available projected alphabet size bounds the code size.

</details>

### Exercise 8.2
<a id="singleton-plotkin-gilbert-varshamov-ex-2"></a>

Derive the per-coordinate ordered-pair distance count.

<details>
<summary>Hint 1</summary>

Separate equal-symbol pairs from all pairs.

</details>
<details>
<summary>Hint 2</summary>

Use the counts $m_{ja}$.

</details>
<details>
<summary>Solution</summary>

There are $M^2$ ordered pairs including equal words. Exactly $\sum_am_{ja}^2$ agree in coordinate $j$, leaving $M^2-\sum_am_{ja}^2$ that differ. Cauchy–Schwarz then bounds this by $M^2(1-1/q)$.

</details>

### Exercise 8.3
<a id="singleton-plotkin-gilbert-varshamov-ex-3"></a>

Why does Plotkin’s displayed size bound require a strict distance threshold?

<details>
<summary>Hint 1</summary>

Inspect its denominator.

</details>
<details>
<summary>Hint 2</summary>

Division by a nonpositive number would not give the stated upper bound.

</details>
<details>
<summary>Solution</summary>

The rearranged inequality has coefficient $d-n(1-1/q)$ multiplying $M$. A useful positive upper bound follows only when this coefficient is positive. At the boundary a separate shortening argument establishes the asymptotic conclusion.

</details>

### Exercise 8.4
<a id="singleton-plotkin-gilbert-varshamov-ex-4"></a>

Why do greedy radius-$(d-1)$ balls cover the space?

<details>
<summary>Hint 1</summary>

The procedure stops only when every word was removed.

</details>
<details>
<summary>Hint 2</summary>

Each removal was caused by a selected centre.

</details>
<details>
<summary>Solution</summary>

Every original word is either selected or removed at a stage because it lies within distance $d-1$ of that stage’s centre. Thus the union of those balls is the whole space. Overlap is allowed, so total counted volume is at least ambient volume.

</details>

### Exercise 8.5
<a id="singleton-plotkin-gilbert-varshamov-ex-5"></a>

Explain why the greedy proof uses a different radius from sphere packing.

<details>
<summary>Hint 1</summary>

One radius forbids adding close centres.

</details>
<details>
<summary>Hint 2</summary>

The other guarantees disjoint decoding neighbourhoods.

</details>
<details>
<summary>Solution</summary>

To maintain centre distance at least $d$, one removes all words at distance at most $d-1$. To correct $t$ errors, one needs radius-$t$ balls disjoint, requiring $2t<d$. These are covering and packing arguments, so their radii differ.

</details>

### Exercise 8.6
<a id="singleton-plotkin-gilbert-varshamov-ex-6"></a>

Does failure of the linear Gilbert sufficient inequality prove nonexistence?

<details>
<summary>Hint 1</summary>

A union bound can overcount forbidden columns.

</details>
<details>
<summary>Hint 2</summary>

Another construction may work.

</details>
<details>
<summary>Solution</summary>

No. The inequality guarantees a free choice at every greedy stage, but can be loose. Its failure removes that proof of existence, not every possible code. An upper bound or contradiction would be needed for nonexistence.

</details>

### Exercise 8.7
<a id="singleton-plotkin-gilbert-varshamov-ex-7"></a>

Why is the residual-code kernel in Griesmer exactly the span of the minimum word?

<details>
<summary>Hint 1</summary>

A second supported word permits a ratio-based subtraction.

</details>
<details>
<summary>Hint 2</summary>

That creates a smaller nonzero word.

</details>
<details>
<summary>Solution</summary>

Any word in the puncturing kernel is supported on $S$. If not proportional to the chosen minimum word, subtract a multiple producing at least $\lceil d/q\rceil$ zeros while remaining nonzero. Its weight is below $d$, contradiction. Hence the kernel is precisely that one-dimensional span.

</details>

### Exercise 8.8
<a id="singleton-plotkin-gilbert-varshamov-ex-8"></a>

Where does linearity enter Griesmer’s proof?

<details>
<summary>Hint 1</summary>

The subtracted words must remain in the code.

</details>
<details>
<summary>Hint 2</summary>

Residual puncturing also uses vector-space dimension.

</details>
<details>
<summary>Solution</summary>

Subtracting a multiple of the minimum word and applying rank-nullity both require linear closure. General nonlinear codes do not permit those operations, so assigning them a logarithmic dimension does not extend the theorem.

</details>

### Exercise 8.9
<a id="singleton-plotkin-gilbert-varshamov-ex-9"></a>

For binary dimension four and distance five, compute Griesmer’s minimum length.

<details>
<summary>Hint 1</summary>

Sum the four rounded terms.

</details>
<details>
<summary>Hint 2</summary>

Keep each ceiling separately.

</details>
<details>
<summary>Solution</summary>

The sum is $5+\lceil5/2\rceil+\lceil5/4\rceil+\lceil5/8\rceil=5+3+2+1=11$. Thus no binary linear code of dimension four and distance five can have length below eleven. Attaining eleven still requires a construction.

</details>

### Exercise 8.10
<a id="singleton-plotkin-gilbert-varshamov-ex-10"></a>

Why does an existence bound not establish efficient decoding?

<details>
<summary>Hint 1</summary>

The greedy construction can inspect the entire ambient space.

</details>
<details>
<summary>Hint 2</summary>

A distance theorem supplies no search shortcut.

</details>
<details>
<summary>Solution</summary>

The constructed set may have no compact algebraic representation and nearest-codeword search can be exponential. Existence at a rate and practical recovery at that rate are separate theorems. Complexity must be analysed for a specified encoding and decoding method.

</details>

## Summary

Singleton, Plotkin and Griesmer give distinct upper obstructions, while Gilbert–Varshamov supplies general and linear existence regions. Their proofs use projection, pair averaging, greedy covering and minimum-word residuals respectively. Units, strict thresholds and the difference between existence and efficient decoding remain explicit.
