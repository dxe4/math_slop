
# Spectral Sequences

A filtered chain complex hides some boundaries behind lower filtration levels. Its spectral sequence reveals them in stages. Each page is an honest chain complex, but its homology need not be the final homology of the original complex: later pages can reveal a boundary whose first visible contribution lies several filtration steps away. Even the final page records successive quotients, leaving extension information to reconstruct.

This L5 chapter proves the construction, page theorem and convergence for a finite increasing filtration of a chain complex over a commutative ring. Preparation is chain complexes, quotient modules, exactness and the cellular homology chapter. Homological and cohomological indexing conventions are distinguished explicitly. The geometric construction of the Serre sequence is a separate named input at the end; it is not manufactured from a page diagram.

## 1. Finite filtered chain complexes

Let C be a chain complex of modules, with differential lowering degree by one. Assume subcomplexes

$$0=F_{-1}C\subseteq F_0C\subseteq\cdots\subseteq F_NC=C.$$

Extend the notation by zero below minus one and by C above N. Each inclusion is an inclusion of modules in every degree, and the differential preserves filtration. No freeness assumption is needed for the algebra below. The single finite bound N avoids questions involving infinite completion or derived inverse limits.

Put total chain degree n equal to p plus q. The zeroth page is the associated graded complex

$$E^0_{p,q}=F_pC_n/F_{p-1}C_n.$$

The differential induced by d stays in the same filtration column and lowers q by one. It is well defined because d preserves both submodules, and its square is zero because the original square is zero. Its homology is therefore the homology of the graded subquotient complex, rather than automatically the homology of C.

An element on that homology page can be represented by a chain whose boundary falls at least one filtration step. Higher pages will impose stronger boundary conditions while allowing corrections in lower filtration. The quotients below make that explanation precise and avoid the misleading idea that a spectral sequence is obtained merely by choosing plausible arrows between known groups.

## 2. Representatives and denominators on every page

For any nonnegative integer r define

$$Z^r_p(n)=\{x\in F_pC_n:dx\in F_{p-r}C_{n-1}\}.$$

For r zero this is all of the indicated filtered module. For r at least one define

$$E^r_{p,q}=\frac{Z^r_p(n)}
{Z^{r-1}_{p-1}(n)+dZ^{r-1}_{p+r-1}(n+1)},\qquad n=p+q.$$

Both denominator summands really lie in the numerator. An element of the first lies one filtration step lower and has boundary in filtration p minus r. An element of the second is a boundary already lying in filtration p and has zero boundary itself. These containments are necessary before the displayed expression is a module quotient.

At r one the numerator is the chains in filtration p whose boundaries lie in filtration p minus one. The denominator is the whole preceding filtration plus boundaries of chains in filtration p. That is exactly cycles modulo boundaries in the associated graded complex. Thus this definition agrees with taking homology of the zeroth page and supplies an explicit first page.

The two denominator terms do different work. A lower-filtration correction does not alter the leading filtration class, while a suitable boundary should already be invisible at this stage. Treating the denominator as just ordinary boundaries would miss the correction term and would not produce the correct next page. Every later proof must track both terms.

## 3. Define the differential and prove independence

For r at least one let the page differential take the class of x to the class of dx:

$$d_r:E^r_{p,q}\longrightarrow E^r_{p-r,q+r-1}.$$

The boundary lies in the required lower filtration by definition, and its own boundary is zero, so it represents a legitimate target class. If x changes by an element a of the first denominator summand, its boundary changes by da. Here a lies in filtration p minus one and its boundary lies in filtration p minus r. This is exactly an allowed boundary term in the target denominator. Changing x by an element of the second denominator summand changes dx by zero. Therefore the map is well defined on classes. It is linear, and applying it twice gives zero since the original differential squares to zero.

The bidegree lowers p by r and increases q by r minus one, so the total degree falls by one. A cohomological spectral sequence commonly reverses these arrows and raises total degree. Borrowing the bidegree from one convention and the page groups from the other can produce impossible differentials; specifying total degree is a quick way to detect that mistake.

We have now constructed a sequence of page complexes. The central theorem still needs proof: their successive homologies must agree with the explicitly defined next quotients. Without that theorem the repeated-page terminology would only be a suggestive name.

## 4. Complete proof of the page theorem

We prove that the homology of page r at a position is naturally isomorphic to page r plus one there. First, every chain in the next-page numerator represents a page-r cycle: its boundary lies one step lower than required to survive as a target leading class.

Conversely suppose the class of x is a page-r cycle. Being zero in the target quotient means that its boundary can be written

$$dx=a+dy,$$

where a lies in filtration p minus r minus one, and y is an allowed element of the first source denominator, namely $Z^{r-1}_{p-1}(n)$. Replacing x by x minus y does not change its page-r class. Its new boundary is a, so the corrected chain lies in the next-page numerator. Thus every page-r homology class has a next-page representative; this is the essential correction step.

It remains to identify exactly when two such representatives give the same homology class. Let z be a next-page representative whose page-r class is a page-r boundary. Then for some $w\in Z^r_{p+r}(n+1)$ we can write

$$z=dw+a+db,$$

where $a\in Z^{r-1}_{p-1}(n)$ and $b\in Z^{r-1}_{p+r-1}(n+1)$. The chain b also belongs to $Z^r_{p+r}(n+1)$: its filtration is lower and its boundary is already in filtration p. Combine it with w. Moreover da equals dz, since the other two terms are boundaries. Because z is a next-page representative, this lies in filtration p minus r minus one. Consequently a belongs to $Z^r_{p-1}(n)$. We have expressed z as an element of precisely the next-page denominator.

For the reverse inclusion, an element of that new first denominator is already zero on page r, while an element of its new boundary denominator represents the differential of a page-r class in filtration p plus r. Hence every element of the next-page denominator is invisible in page-r homology. The two inclusions prove that the induced map from the next-page quotient to page-r homology is bijective. All its maps arise by inclusions and taking actual boundaries, so the isomorphism is natural. This proves the page theorem, including its correction and kernel statements.

The proof does not select a canonical chain representative for a page element. Representatives may require changes by lower-filtration chains, and the quotient records the resulting ambiguity. A computation must preserve enough representative information to determine later boundaries; merely knowing an abstract first-page module may not determine future differentials.

## 5. Prove finite convergence

For r larger than the finite filtration length, the condition defining the numerator says the boundary is zero. The first denominator becomes cycles one filtration step lower. The second consists of all boundaries that happen to lie in filtration p: its potential primitives can now come from the entire next-degree chain module. Thus the stable quotient is

$$\frac{\ker d\cap F_pC_n}
{(\ker d\cap F_{p-1}C_n)+(\operatorname{im}d\cap F_pC_n)}.$$

The homology of C has its induced filtration: take the image of the homology of the subcomplex in the full homology group. In cycle notation,

$$F_pH_n(C)=\frac{(\ker d\cap F_pC_n)+\operatorname{im}d}
{\operatorname{im}d}.$$

Its successive quotient by the previous filtered subgroup is exactly the stable quotient just displayed, by the elementary quotient-module theorem. This identifies the limiting page with the associated graded of actual homology. It proves convergence in the stated finite setting rather than postulating an abutment because a diagram stopped changing.

A filtration-preserving chain map takes each numerator and denominator into its counterpart and commutes with every page differential. Its induced homology map respects the target filtration, and the stable identification commutes with the associated graded map. This is the precise naturality statement. A chain homotopy used to identify filtered maps must itself satisfy the appropriate filtration condition; an arbitrary unfiltered homotopy does not automatically identify the extra filtered structure.

For an unbounded filtration additional convergence issues can arise. This chapter does not extend the finite proof by replacing a finite endpoint with an infinity symbol. In particular, eventual stability at each displayed position must not be confused with a proved identification of a completed or filtered target outside the hypotheses.

## Worked example 1: a boundary invisible until page two

Take an integral chain complex with generator a in degree two, generator b in degree one and boundary da equal to b. Put b in filtration zero and a in filtration two. The zeroth page has one generator at bidegree zero, one and another at two, zero. The original boundary drops filtration by two, so the zeroth-page differential is zero. The first-page differential also vanishes because it drops only one filtration step and its required target positions are empty.

On page two the class of a has boundary the class of b, an isomorphism between the two surviving infinite cyclic groups. The third page is zero. This agrees with the original complex being acyclic, since its only nonzero boundary map is an isomorphism. Stopping at the first or second page before taking its homology would have incorrectly produced two nonzero groups. A later differential is not an arbitrary correction added to fix an answer; it is the original boundary becoming visible at its actual filtration drop.

## Worked example 2: equal limiting pages, different target groups

Concentrate a complex in degree zero, first with module the integers modulo four. Give it two filtration steps, with filtration zero the subgroup of even residue classes and filtration one the entire module. Both graded pieces are cyclic of order two, and every differential is zero because all other chain degrees vanish.

Now use the direct sum of two cyclic order-two groups, with filtration zero one direct summand. The same two graded pieces occur and all pages again have zero differentials. The limiting bigraded groups agree, but the original degree-zero homology groups do not: the first contains an element of order four and the second does not. Thus convergence has not promised a direct-sum answer. It has supplied the quotient information of an extension. Over a field a finite vector-space filtration can be split by choosing complements, but the choices are not canonical; multiplicative structure can retain further extension questions even when additive groups are understood.

## Worked example 3: the cellular sequence for the projective plane

Filter the singular chain complex of a finite CW complex by its skeleta. Its first-page terms are the relative homology of consecutive skeleta. The cellular homology theorem in the linked prerequisite identifies these with free cell modules in the row q zero, with the first page differential equal to the attaching-map boundary. This is an input already proved in the L4 book, not a new triangulation claim.

For the real projective plane there is one cell in dimensions zero, one and two. The one-cell boundary is zero, while the two-cell attaches around the circle twice, giving boundary multiplication by two. The first-page homology is therefore the integers at position zero, zero, the integers modulo two at one, zero, and zero elsewhere. Later differentials have no surviving target row, so this is the limiting page. There is only one nonzero filtration piece in each total degree, leaving no additive extension ambiguity: degree-zero homology is the integers, degree-one is cyclic of order two, and degree-two is zero. The filtration explains exactly why collapse here determines the answer while it did not do so in the previous example.

## 6. What must be supplied to obtain Serre's sequence

The filtered algebra above does not prove the geometric identification for a fibration. A standard Serre theorem, discussed in [Hatcher's author notes, Chapter 1](https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf), supplies that separate step. For a Serre fibration of CW-type spaces with connected fiber and a finite simply connected CW base, over a field k it gives a homological second page $H_p(B;k)\otimes H_q(F;k)$ converging to the total-space homology with its base filtration. The base-filtration construction and identification of its relative pieces are imported here. Our page and finite-convergence proofs explain the algebra once those geometric pieces have been established.

Without simple connectivity or another trivial-action hypothesis, fiber homology can carry monodromy and the second page requires local coefficients. Over a general coefficient ring, replacing coefficient homology by an unqualified tensor product can omit Tor information. Multiplicative cohomology, transgressions, Adams machinery and infinite-convergence refinements are additional structures rather than consequences of the bare additive definition. The earlier fibration reading remains a companion to these topics while its full expansion proceeds.

## Exercises

### Exercise 1 {#advanced-spectral-ex-1}

Take generators a in degree three and b in degree two with da equal to twice b. Put b in filtration zero and a in filtration three. Determine the first nonzero page differential and the limiting homology.

<details><summary>Hint 1</summary>
The original boundary drops filtration by three, not by one.
</details>
<details><summary>Hint 2</summary>
At page three the map between the two integer groups is multiplication by two.
</details>
<details><summary>Full solution</summary>
The generators appear at positions three, zero and zero, two. Earlier differentials have empty target or source positions, so both survive to page three. Its differential sends a to twice b. Its kernel is zero and its cokernel is cyclic of order two. Thus page four has only that cokernel at zero, two and is stable. The original complex has the same homology: degree-three zero and degree-two cyclic of order two. The filtration controls when the boundary is seen, while its coefficient controls the torsion left afterward.
</details>

### Exercise 2 {#advanced-spectral-ex-2}

Give any chain complex the filtration with only one nonzero stage, filtration zero equal to the entire complex. Determine its pages and explain why there are no extension questions.

<details><summary>Hint 1</summary>
The associated graded is the original complex in column zero.
</details>
<details><summary>Hint 2</summary>
Every later differential must enter or leave that column from an empty position.
</details>
<details><summary>Full solution</summary>
The zeroth differential is the original boundary in column zero, so the first page is original homology in that column. Every later differential is zero, and the first page is already limiting. For each total degree the target filtration has one possibly nonzero quotient, equal to the whole homology module. No multiple pieces remain to assemble by extension. This spectral sequence gives no computational simplification, but it checks the indexing against a case where the original differential must appear immediately.
</details>

### Exercise 3 {#advanced-spectral-ex-3}

Over a field, explain why a finite filtration splits as vector spaces and why the splitting is generally not canonical. Contrast this with the two order-two graded pieces over the integers.

<details><summary>Hint 1</summary>
Choose a basis of each quotient and choose lifts of those basis vectors.
</details>
<details><summary>Hint 2</summary>
A lift can be changed by any vector in the preceding filtered subspace.
</details>
<details><summary>Full solution</summary>
A chosen basis of a quotient can be lifted to the filtered vector space, and its span gives a complement to the preceding stage. Repeating finitely many times gives a direct-sum decomposition into spaces isomorphic to the graded pieces. Different lifts produce different complements, so the filtration alone specifies no preferred decomposition. For integer modules, extensions need not split at all: a cyclic order-four group filtered by its even subgroup and a direct sum of two order-two groups have the same two quotients but different element orders. Field splitting also does not by itself determine multiplication in a filtered algebra.
</details>

### Exercise 4 {#advanced-spectral-ex-4}

A homological class lies at position five, two. Find the target position of its third-page differential and verify total degree. State why using the usual cohomological arrow instead would be incompatible.

<details><summary>Hint 1</summary>
Subtract the page number from the first index and add one less than it to the second.
</details>
<details><summary>Hint 2</summary>
A chain boundary must decrease the sum of the indices by one.
</details>
<details><summary>Full solution</summary>
The target is position two, four. Total degree drops from seven to six. The cohomological third-page arrow would instead go to eight, zero and increase total degree to eight. That is appropriate for a coboundary raising degree, not the chain differential used here. A display with no total-degree convention is therefore insufficient for identifying a page differential correctly.
</details>

### Exercise 5 {#advanced-spectral-ex-5}

Prove directly that a filtration-preserving chain map induces maps on the representative quotients and commutes with their differentials. Identify both denominator checks.

<details><summary>Hint 1</summary>
A chain whose boundary drops r steps maps to another chain with that property.
</details>
<details><summary>Hint 2</summary>
The map preserves lower filtration and takes boundaries to boundaries of the corresponding mapped primitives.
</details>
<details><summary>Full solution</summary>
If x lies in the numerator, its image lies in the same filtration and its boundary is the image of dx in the lower required filtration. An element of the lower-filtration denominator maps into that same type of denominator. A boundary of an allowed primitive maps to the boundary of its image primitive; that primitive satisfies the same filtration and boundary bounds. Thus the quotient map is well defined. Commutation with the page differential follows by applying the original chain-map equality to a representative. The same argument works on every page, so naturality is proved rather than inferred from abstractly isomorphic page groups.
</details>

### Exercise 6 {#advanced-spectral-ex-6}

For finite filtrations, prove that a filtration-preserving chain map inducing an isomorphism on the first page induces an isomorphism on full homology.

<details><summary>Hint 1</summary>
Use the page theorem inductively to reach the limiting associated graded map.
</details>
<details><summary>Hint 2</summary>
An isomorphism of associated graded modules gives an isomorphism of the filtered modules when the filtrations are finite and exhaustive; prove this by induction on stages.
</details>
<details><summary>Full solution</summary>
Naturality and taking homology make each subsequent page map an isomorphism, hence the limiting associated graded homology map is one. At filtration zero this is the map on the first filtered subgroup. Suppose it is an isomorphism on the preceding subgroup. For injectivity at the next stage, a kernel element has zero graded image, so lies in the preceding stage and is zero by induction. For surjectivity, lift a target element's graded class, then correct the remaining difference using surjectivity on the preceding stage. Induction reaches the exhaustive final stage, proving the full homology isomorphism. The finite filtration is needed for this termination argument.
</details>

### Exercise 7 {#advanced-spectral-ex-7}

Suppose the second page is zero unless both indices are even. Prove collapse at the second page. Does this condition alone force the integral target filtration to split?

<details><summary>Hint 1</summary>
For an odd page number the first index changes parity; for an even page number the second does.
</details>
<details><summary>Hint 2</summary>
For an extension counterexample put two order-two pieces at positions zero, two and two, zero in total degree two.
</details>
<details><summary>Full solution</summary>
Every differential from a possibly nonzero position has a zero target: odd page numbers make the first index odd, while even page numbers make the second odd. The same applies to incoming maps, and induction keeps every page unchanged. Splitting still need not follow. A degree-two complex consisting of the cyclic order-four group, filtered with its order-two subgroup at stage zero, unchanged at stage one and the whole group at stage two, has exactly the two stated even-index graded pieces and zero differentials. Its homology is cyclic of order four, a nonsplit extension. Collapse determines the graded pieces, not their integral assembly.
</details>

### Exercise 8 {#advanced-spectral-ex-8}

Repeat the cellular computation for the real projective plane over the field with two elements. Explain why tensoring only its integral homology groups with that field misses information.

<details><summary>Hint 1</summary>
Multiplication by two becomes zero, so all three cell generators survive.
</details>
<details><summary>Hint 2</summary>
The coefficient theorem also contains a Tor contribution from the preceding integral homology degree.
</details>
<details><summary>Full solution</summary>
The cell modules in degrees zero, one and two are each one-dimensional, and both boundaries are zero. The second page is those three groups in the row zero and is limiting. Thus homology over this field is one-dimensional in each of those degrees. Integral degree-two homology was zero, so its tensor alone gives no degree-two class. The homological universal-coefficient sequence supplies that class from Tor of integral degree-one homology, which is cyclic of order two, with the field. This illustrates why the coefficient hypotheses in a tensor-product second-page formula cannot be ignored.
</details>

### Exercise 9 {#advanced-spectral-ex-9}

Let a have degree one, b degree zero and da equal b. Put b in filtration zero and a in filtration one. Compare the homology of the stage-zero subcomplex with the induced filtration-zero subgroup of full homology.

<details><summary>Hint 1</summary>
The smaller subcomplex contains b but no primitive for it.
</details>
<details><summary>Hint 2</summary>
The primitive enters at the next filtration stage and kills the class in the full complex.
</details>
<details><summary>Full solution</summary>
The stage-zero subcomplex has integer degree-zero homology generated by b. The full complex is acyclic because its boundary is an isomorphism. The induced filtration-zero subgroup of full homology is therefore zero, the image of that nonzero smaller homology group. This is why the convergence formula uses the image of subcomplex homology, not the subcomplex homology group itself. On the first page the differential from a to b kills both classes exactly as the original boundary does.
</details>

### Exercise 10 {#advanced-spectral-ex-10}

Concentrate a complex in degree zero with module the rationals. Put the integers at every nonnegative filtration stage and zero at negative stages. Compute the pages and identify precisely which hypothesis prevents concluding that they reconstruct all rational homology.

<details><summary>Hint 1</summary>
The filtration never exhausts the rational module.
</details>
<details><summary>Hint 2</summary>
The only associated graded piece is the integers in column zero.
</details>
<details><summary>Full solution</summary>
All pages have the integers in position zero, zero and zero elsewhere, with zero differentials. But degree-zero homology of the full complex is the rationals. The union of the filtration stages is only the integers, so there is no exhaustive finite final stage as required by the theorem. The stable page still agrees with the associated graded of the induced nonexhaustive filtration on rational homology; what fails is the premise that this filtration accounts for the entire target. The unrecorded rational quotient cannot be recovered by pretending that repeated identical stages eventually become exhaustive.
</details>

## Summary and provenance

Finite filtered chains produce explicit representative quotients, well-defined differentials and a proved next-page homology theorem. Finite exhaustion identifies the stable page with the associated graded of actual homology. Collapse removes later differentials, while extension and multiplicative questions can remain. Geometric sequences additionally require their own relative-piece identification and coefficient hypotheses.

This chapter expands the spectral-sequence scope of the earlier Atlas Outlook with original finite-filtration proofs, three worked examples and ten supported exercises. The earlier fibration manuscript remains intact. Hatcher's author notes provide the named Serre continuation; only the stated initial chapter material was consulted, not a completed-book or independent-review comparison. The finite-filtered construction here is not a claimed proof of every geometric spectral sequence or an infinite-convergence theorem.
