
# Random Variables, Independence and Kolmogorov Extension

A random variable is a measurable map, and independence is a factorization of the joint law. Constructing infinitely many random variables requires more than displaying plausible one-dimensional marginals. This chapter proves extension for consistent real finite-dimensional distributions and explains the precise extra input for general standard Borel spaces.

Use the preceding pi-lambda chapter and the measure-extension theorem from [Measure and Integration](#/books/measure-and-integration). Compactness of bounded closed Euclidean sets is the real-analysis input. The extension proof below supplies its finite-measure regularity and countable compactness steps, rather than treating a list of marginals as an already existing process.

## Measurable maps and their laws

A map from a probability space into a measurable space is a random variable when inverse images of measurable sets are events. Its law is the pushforward probability measure. Composition with a measurable map preserves measurability because inverse images compose.

For real maps it is enough to check inverse lower half-lines at rational endpoints. Those sets generate the Borel sigma-algebra, and the collection of sets with measurable inverse images is a sigma-algebra. A vector of finitely or countably many real random variables is measurable into the product sigma-algebra because every finite-coordinate cylinder pulls back to a measurable intersection.

Equality in law does not mean almost-sure equality on a shared probability space. It also does not specify a joint coupling of two variables. A fair sign and its negative have the same law but are never equal, whereas two copies using the same coordinate can be equal everywhere. The probability space supplies the coupling as well as each marginal.

## Independence of observations and sigma-algebras

A family of sigma-algebras is mutually independent if every finite intersection of one event from each selected algebra has probability equal to the product of their probabilities. Random variables are independent when their generated sigma-algebras are. By the two-generator argument in Chapter 1, finite joint-law factorization on measurable rectangles is equivalent to independence.

Measurable functions of independent variables remain independent: pull each event back through its function and use the original factorization. Groups of disjoint finite subfamilies are independent by extending their rectangle generators. For countable groups, the same pi-lambda argument extends finite-coordinate cylinder factorization to their full generated sigma-algebras.

Pairwise independence is weaker than mutual independence. The missing comparisons concern intersections involving three or more observations. Zero covariance is weaker still, being one moment equality under integrability rather than factorization for every event.

### Worked example: three pairwise independent bits

Let U and V be independent fair bits and let W be their exclusive-or. Each pair among U, V and W is uniform over its four possibilities: fixing either one of the original bits and W determines the other original bit uniquely. Thus the three variables are pairwise independent.

They are not mutually independent. The event U zero, V zero and W one is impossible, while the product of its three marginal probabilities is one eighth. The joint distribution lives on only four of the eight triples. This gives an exact distinction between pairwise and full independence without relying on a small empirical correlation table.

## Finite-dimensional consistency

For an index set I, specify a probability law for every finite list of distinct coordinates. These laws must agree under coordinate permutation and under deletion of coordinates. In other words, every finite marginal obtained from a larger specified law must be the law already assigned to that smaller list.

Finite additivity on cylinder sets follows from this consistency by representing any finite collection of cylinders in one common finite-coordinate space. Countable additivity does not follow merely from that representation, because a countable collection can involve infinitely many coordinates. The extension proof addresses exactly this gap.

### Worked example: compatible one-coordinate marginals are insufficient

Suppose three bits are each declared fair. Specify their first pair to agree almost surely, their second pair to agree almost surely and their first-third pair to disagree almost surely. All three pair laws have the proposed fair one-coordinate marginals.

No triple realizes them. Outside the union of two null events, agreement of the first two and last two forces agreement of first and third, contradicting the third pair. Thus a projective family needs compatible laws at every finite level, not simply pairwise tables with correct margins. Kolmogorov extension does not repair an inconsistent finite specification.

## Finite Borel probabilities are compactly approximable

We need one regularity fact for probabilities on Euclidean space. For an open set O, intersect large closed balls with the set of points at distance at least one over n from its complement. These compact subsets increase to O, so probability continuity from below makes their masses tend to the probability of O.

Now let C be the Borel sets that can be approximated from inside by closed sets and outside by open sets with arbitrarily small intervening probability. Open sets have this property. Complements exchange the inside and outside approximations. For a countable union, an outside open approximation is obtained by allocating summable errors to the members; an inside closed approximation comes from a sufficiently large finite subunion and finite unions of its closed approximations. Finite total mass and continuity from below control the omitted tail of the union. Thus C is a sigma-algebra containing the opens, and contains every Borel set.

Finally intersect any inside closed approximation with a sufficiently large closed ball. Its omitted mass tends to zero because those balls exhaust Euclidean space. The approximation becomes compact. This proves inner approximation of every finite-dimensional Borel event by compact sets, using finite probability rather than assuming every event is itself compact.

## Extension on a countable real coordinate space

First take indices equal to the positive integers and consistent Borel laws on each finite prefix. Define the proposed probability on the algebra of finite-prefix cylinders using those laws. It is well-defined and finitely additive by consistency. To apply measure extension, it suffices to prove continuity from above at the empty set for this finite premeasure.

Suppose decreasing cylinders A n have empty intersection but their assigned probabilities stay at least epsilon positive. For each A n, use finite-dimensional compact approximation to choose a compact-base cylinder K n contained in it, losing at most epsilon times two to the minus n minus two in probability. Separately choose, for every coordinate j, a nonempty compact interval C j whose marginal outside probability is at most epsilon times two to the minus j minus two.

Every finite collection of these restrictions can be represented in a common finite prefix. Its probability is at least epsilon minus the two summed error allowances, hence positive. Indeed, intersect A N with the first N compact-base restrictions and any finite collection of coordinate compact restrictions, and use a union bound on the losses. Therefore all these finite collections are nonempty.

The full product of the C j is compact in the countable product metric. A direct proof takes any sequence of points, selects a subsequence converging in the first compact coordinate, then one converging in the second, and so on; the diagonal subsequence converges in every coordinate and hence in the metric with summable coordinate weights. The product metric is metrizable and this sequential compactness gives compactness.

Within that compact product, every K n restriction is closed. Their finite intersections are nonempty by the preceding finite-prefix argument; unrestricted later coordinates can be filled with arbitrary values in their nonempty compact intervals. Compactness gives a point in all restrictions. It belongs to every A n, a contradiction. Thus the cylinder probability is continuous from above at the empty set.

The finite premeasure extension theorem now gives a probability measure on the product sigma-algebra. Its finite-coordinate laws are the assigned ones. Cylinder pi-lambda uniqueness proves that no other probability measure on that sigma-algebra has those marginals. This completes the countable real-valued extension proof.

## Arbitrary real index sets reduce to countable ones

For an arbitrary index set, use the algebra of finite-coordinate Borel cylinders. Any decreasing sequence of cylinders involves only countably many coordinates in their union. Restrict the projective family to those coordinates and use the countable extension already proved. If the original cylinders have empty intersection, so do their restrictions: any point satisfying them on those coordinates could be extended by zeros elsewhere.

Continuity from above therefore holds on the arbitrary-index cylinder algebra too. Measure extension gives the probability on its generated sigma-algebra, and cylinder uniqueness again applies. This proves Kolmogorov extension for real-valued coordinates indexed by any set, under full finite-dimensional consistency.

For general nonempty standard Borel coordinate spaces, the standard Borel-isomorphism theorem supplies measurable bijections with Borel subsets of the real line, with measurable inverses. That descriptive-set-theory theorem is an explicit additional input, not proved here. Encode the finite-dimensional laws and apply the real-coordinate construction. For each coordinate, extend its inverse encoding to all real values by mapping points outside its encoded Borel subset to one fixed reference point of the original space. This extended inverse is measurable.

The coordinatewise extended inverses define a map into the original product measurable space: preimages of finite cylinders are measurable finite-coordinate events. Push forward the real-coordinate extension through this map. In every finite collection of coordinates, the encoded values lie in their allowed Borel subsets simultaneously with probability one, so the finite-dimensional marginals are exactly the specified original laws. This argument needs no measurable uncountable intersection asserting that every real coordinate was already in its allowed subset. It constructs a valid original-space point by the extended inverse map instead. Arbitrary measurable spaces without a comparable representation are not covered by this theorem.

## What the product sigma-algebra observes

Every event in an arbitrary-coordinate product sigma-algebra is determined by countably many coordinates. The collection of sets with this property is a sigma-algebra: complements keep the same coordinate set and countable unions use a countable union of countable coordinate sets. It contains all finite cylinders and hence the generated product sigma-algebra.

This fact limits what a raw extension construction supplies. With uncountably many time indices, a path property such as continuity is not automatically an event whose probability can be read from a finite-dimensional specification. Constructing a measurable continuous-path version is a further theorem; the Brownian chapter will address it directly.

The finite-dimensional law determines the cylinder-measurable process, not an automatic choice of every possible pathwise sigma-algebra. Confusing these levels can turn an unproved sample-path claim into an apparent consequence of consistency.

## Quantiles construct prescribed real marginals

For a real distribution function F and u strictly between zero and one, define its generalized inverse as the infimum of points with F at least u. It is finite by the two tail limits of a distribution function. Right continuity ensures
$$F^{-1}(u)\le t\quad\Longleftrightarrow\quad u\le F(t).$$
For the nontrivial direction, approximate the infimum from above and use monotonicity and right continuity to include the boundary; the reverse direction follows because t itself is eligible. Thus the generalized inverse is measurable.

If U is uniform on the open unit interval, the equivalence gives probability of inverse U at most t equal to F of t. The transformed variable therefore has the desired law by distribution-function uniqueness. Atoms and flat stretches require the generalized inverse, not an assumed ordinary inverse.

### Worked example: independent copies of an arbitrary real law

Use extension to construct independent uniform coordinates, then apply the same generalized inverse to each. Coordinatewise measurability preserves independence and each marginal has distribution F. This constructs an iid sequence with any prescribed Borel probability law on the real line.

If two such variables are instead defined from the same uniform coordinate, their marginals remain F but they are equal almost surely. For a nondegenerate F they are not independent. The construction makes the shared-randomness choice visible: marginal transformation specifies the law, while the chosen product or shared-coordinate space specifies dependence.

## Exercises

<a id="random-variables-independence-extension-ex-1"></a>

### Exercise 1

Show that composition of measurable maps is measurable.

<details><summary>Hint 1</summary>

Pull an event back in two stages.

</details>

<details><summary>Hint 2</summary>

Each inverse image belongs to the appropriate sigma-algebra.

</details>

<details><summary>Full solution</summary>

The inverse image under a composition equals the first map’s inverse image of the second map’s inverse image. Both measurability hypotheses apply successively. This also proves measurable transformations preserve random-variable status.

</details>

<a id="random-variables-independence-extension-ex-2"></a>

### Exercise 2

Prove measurable transformations preserve independence.

<details><summary>Hint 1</summary>

Pull measurable events back through each transformation.

</details>

<details><summary>Hint 2</summary>

Use the original joint event factorization.

</details>

<details><summary>Full solution</summary>

Each transformed event is an event in the original variable’s generated sigma-algebra. The independence factorization therefore applies to every finite collection of transformed events. No invertibility of the transformations is required.

</details>

<a id="random-variables-independence-extension-ex-3"></a>

### Exercise 3

Verify the pairwise-independent bit construction fails mutual independence.

<details><summary>Hint 1</summary>

List the exclusive-or relation.

</details>

<details><summary>Hint 2</summary>

Compare the impossible triple with its marginal product.

</details>

<details><summary>Full solution</summary>

The triple zero, zero, one is excluded by the exclusive-or equation, yet each coordinate is fair and its product probability would be one eighth. Each pair is uniform because the omitted bit is uniquely determined by that pair. Thus pairwise and mutual independence differ.

</details>

<a id="random-variables-independence-extension-ex-4"></a>

### Exercise 4

Why is finite additivity of a consistent cylinder assignment not yet its countable additivity?

<details><summary>Hint 1</summary>

A finite union uses one finite-coordinate space.

</details>

<details><summary>Hint 2</summary>

A countable union may involve infinitely many coordinates.

</details>

<details><summary>Full solution</summary>

Consistency places finitely many cylinders in a common specified marginal and proves finite additivity there. There may be no single assigned finite marginal covering a countable collection. Continuity from above at the empty set, supplied by the compactness proof, is the extra premeasure step.

</details>

<a id="random-variables-independence-extension-ex-5"></a>

### Exercise 5

Explain the role of compact approximation in the extension proof.

<details><summary>Hint 1</summary>

Assume decreasing cylinders retain positive mass.

</details>

<details><summary>Hint 2</summary>

Compact restrictions convert finite compatibility into a common point.

</details>

<details><summary>Full solution</summary>

Approximate the cylinder bases and bound coordinate tails with summably small losses. Their finite intersections retain positive mass. Closed restrictions in a compact countable product then share a point, contradicting the assumed empty intersection. Mere arbitrary measurable bases would not provide that compact finite-intersection argument.

</details>

<a id="random-variables-independence-extension-ex-6"></a>

### Exercise 6

Why can an arbitrary-index decreasing cylinder sequence be treated on countably many coordinates?

<details><summary>Hint 1</summary>

Each cylinder uses finitely many coordinates.

</details>

<details><summary>Hint 2</summary>

Take their countable union.

</details>

<details><summary>Full solution</summary>

The union of those finite coordinate sets is countable. The restricted projective family has the already constructed countable product law, which proves continuity for that sequence. Any restricted point can be extended outside those coordinates, so emptiness is preserved.

</details>

<a id="random-variables-independence-extension-ex-7"></a>

### Exercise 7

Prove every product-sigma-algebra event depends on countably many coordinates.

<details><summary>Hint 1</summary>

Form the class of sets with that property.

</details>

<details><summary>Hint 2</summary>

Check complements and countable unions.

</details>

<details><summary>Full solution</summary>

Complements keep the determining coordinates and countable unions use the countable union of all their determining sets. This class is a sigma-algebra containing finite cylinders, so it contains their generated product sigma-algebra. It need not contain every subset of the full path space.

</details>

<a id="random-variables-independence-extension-ex-8"></a>

### Exercise 8

For a Bernoulli law with success probability p, describe its generalized inverse on the open unit interval.

<details><summary>Hint 1</summary>

The CDF jumps at zero and one.

</details>

<details><summary>Hint 2</summary>

Locate whether u is below or above one minus p.

</details>

<details><summary>Full solution</summary>

The inverse is zero for $u\le1-p$ and one for $u>1-p$, with irrelevant endpoint modifications if p is zero or one. A uniform input therefore produces success probability p. The construction does not require a continuous strictly increasing CDF.

</details>

<a id="random-variables-independence-extension-ex-9"></a>

### Exercise 9

Does equality of all one-coordinate laws determine a joint law?

<details><summary>Hint 1</summary>

Compare independent coordinates with identical copies.

</details>

<details><summary>Hint 2</summary>

Both constructions can preserve every marginal.

</details>

<details><summary>Full solution</summary>

No. Two independent fair bits and one fair bit copied twice have identical one-coordinate laws but different probabilities of agreement. Joint consistency concerns all finite-coordinate laws, not only the marginals.

</details>

<a id="random-variables-independence-extension-ex-10"></a>

### Exercise 10

What additional theorem is needed when extending from real coordinates to general standard Borel spaces here?

<details><summary>Hint 1</summary>

The proof used compact approximation in a real representation.

</details>

<details><summary>Hint 2</summary>

The coordinate spaces must admit compatible measurable encodings.

</details>

<details><summary>Full solution</summary>

The standard Borel-isomorphism theorem provides a measurable representation by Borel subsets of the real line with measurable inverse. It is the explicitly imported descriptive-set-theory input for that extension. Arbitrary measurable spaces without such structure are not covered merely by invoking the same name.

</details>
