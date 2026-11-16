
# Homotopy Groups of Spheres

A sphere has very little cellular homology, but maps into it can retain information far above its dimension. The Hopf map is the first striking example. This chapter develops the groups that can be reached from cellular approximation, degree, the Hopf bundle and a precisely stated suspension input. It then constructs the integral Hopf invariant and proves its transformation laws. A table of additional unstable stems is not substituted for those arguments.

**L5 preparation.** Use [CW Spaces](../algebraic-topology-chains-spaces/cw-complexes.md), the degree and cup-product theory in [Chains, Spaces, and Invariants](#/books/algebraic-topology-chains-spaces), and [Fibrations](fibrations-long-exact-sequence.md). Cellular approximation and the homotopy-excision theorem below are explicitly imported general machinery. The concrete vanishing, stability-range, degree and Hopf-invariant deductions are proved from the stated inputs. All maps and homotopies preserve basepoints unless a separate change-of-basepoint path is specified.

## Cubes, addition and the connectivity region

Represent $\pi_j(X)$ by maps from the cube whose boundary goes to the basepoint. Concatenation in the first coordinate gives addition, and reversing that coordinate gives the inverse. Reparameterizing the interval proves associativity up to homotopy and that the constant map is the identity. For $j\ge2$, concatenate in a second coordinate too. These operations have the same identity and obey the interchange law by dividing the cube into four rectangular pieces. Thus
$$a\mathbin{\star}b=(a+0)\mathbin{\star}(0+b)=(a\mathbin{\star}0)+(0\mathbin{\star}b)=a+b,$$
and the alternative placement $(0+a)\mathbin{\star}(b+0)=(0\mathbin{\star}b)+(a\mathbin{\star}0)=b+a$ gives commutativity. This is the two-coordinate argument for abelian higher homotopy groups, independent of homology.

Give $S^n$ its CW structure with one zero-cell and one $n$-cell. The relative cellular approximation theorem says a map of CW complexes can be deformed to preserve skeleta while fixing a subcomplex on which it is already cellular. Applied to a based map from a $j$-sphere with $j<n$, it puts the entire image in the target's $j$-skeleton, which is just the basepoint. Hence $\pi_j(S^n)=0$ for $1\le j<n$. The homotopy fixes the chosen zero-cell, so this is based vanishing. It does not say that homotopy groups above dimension vanish.

For $j\ge2$, a based map $S^j\to S^1$ lifts to the contractible cover $\mathbb R$ because its source is simply connected. Covering homotopy lifts its based homotopies as well. Thus $\pi_j(S^1)=0$. In degree one the winding-number identification gives $\pi_1(S^1)=\mathbb Z$. The discrete sphere $S^0$ belongs to a different component-set discussion and is not included in these connected-sphere formulas.

## The suspension input and the exact stable range

We import the following homotopy-excision theorem for CW triads. If a CW complex is the union of subcomplexes $A,B$ with nonempty connected intersection $C$, and the pairs $(A,C),(B,C)$ are respectively $r$- and $s$-connected, with $r,s\ge0$, then the inclusion-induced relative map is an isomorphism below degree $r+s$ and a surjection in degree $r+s$. Here connectivity means the corresponding relative homotopy groups through that degree vanish. A proof of this general theorem is not supplied in this chapter.

Apply it to the two cones making the suspension of an $(n-1)$-connected based CW space. The relative exact sequence of each contractible cone identifies its relative groups with the preceding groups of the equator. Each cone pair is $n$-connected. The excision map consequently identifies suspension as an isomorphism when $j+1<2n$ and as a surjection when $j+1=2n$. For spheres this gives
$$E:\pi_j(S^n)\longrightarrow\pi_{j+1}(S^{n+1})\quad\text{is an isomorphism for }j\le2n-2,\text{ and onto for }j=2n-1.$$
The reduction uses relative exactness proved in the previous chapter; the range itself rests on the imported excision input. The based reduced and unreduced suspensions agree up to based homotopy here, since the basepoint line is a contractible CW subcomplex.

Fix an integer stem $k$ and form the direct limit along these suspension maps of $\pi_{n+k}(S^n)$, for sufficiently large positive domain dimensions. For $k\ge0$, once $n\ge k+2$, every subsequent map is an isomorphism. Indeed substituting $j=n+k$ into the inequality gives exactly that condition. The direct limit is then already equal to any group in that stable range. At $n=k+1$ one has only the surjective boundary statement, which leaves a possible kernel. Stability is a theorem with a range, not an instruction to equate all entries on a diagonal.

For a negative stem, the domain dimension is eventually positive and strictly smaller than the target sphere dimension, so all sufficiently late groups vanish by cellular approximation. The stable negative stems are therefore zero. The zero stem will be the integers by the degree calculation below. We do not derive positive stable stems from the range theorem alone: an isomorphism between two unknown groups does not compute either of them.

## Degree classifies self-maps in the same dimension

The suspension theorem in dimension one gives a surjection from $\pi_1(S^1)$ onto $\pi_2(S^2)$; in every subsequent diagonal degree it gives an isomorphism. Thus each diagonal group is cyclic, generated by the iterated suspension of the identity. Suspension preserves degree: the reduced homology suspension isomorphism is natural, so the integer induced on the fundamental homology generator stays the same. The circle identity has degree one, and its suspensions are the corresponding sphere identities.

These cyclic groups cannot have finite order. A multiple of the identity has degree that multiple, because pinching a sphere into two oriented copies sends its fundamental class to the sum of the two generators. Degree is homotopy invariant, so distinct integer multiples cannot agree. The surjection from the integers is therefore injective too, proving
$$\pi_n(S^n)\cong\mathbb Z\quad(n\ge1),$$
with the degree map as the isomorphism. This argument derives the sphere case without importing the full higher Hurewicz theorem. It still uses the stated suspension/excision input and the already established homological degree laws.

Composition acts differently from group addition. For self-maps of a sphere, composition multiplies degrees; pinching and adding maps adds degrees. A map of degree zero in this same-dimensional setting is nullhomotopic by the just-proved classification. A map to a lower-dimensional sphere can induce zero on all positive homology and still be essential, as the next example shows.

## Worked example 1: the first higher-dimensional class

The Hopf bundle has fiber $S^1$, total space $S^3$ and base $S^2$, with explicit chart trivializations in the previous chapter. Since all higher homotopy groups of the circle vanish, exactness gives $\pi_j(S^3)\cong\pi_j(S^2)$ for $j\ge3$. Taking $j=3$ and the degree classification gives $\pi_3(S^2)\cong\mathbb Z$, generated by the Hopf projection $\eta$ after fixing orientations.

Yet the induced map from $H_3(S^3)$ to $H_3(S^2)$ is zero because the latter group vanishes. Ordinary homology in that degree cannot detect this map. In degree two the same exact sequence instead gives $\pi_2(S^2)\cong\pi_1(S^1)$, using connectivity of $S^3$. Keeping these degree ranges separate is essential: the circle's nonzero fundamental group does not contradict the higher-degree isomorphism.

## A cup-product invariant of an attaching map

For $n\ge2$ and $f:S^{2n-1}\to S^n$, form its mapping cone $C_f=S^n\cup_f D^{2n}$. Its cellular cochain groups in positive degrees are one copy of the integers in degree $n$ and another in degree $2n$, with zero differential. Choose generators $a\in H^n(C_f;\mathbb Z)$ restricting to the oriented sphere generator and $b\in H^{2n}(C_f;\mathbb Z)$ determined by the orientation of the attached cell. There is a unique integer $H(f)$ such that
$$a\smile a=H(f)b.$$
This is the integral Hopf invariant under those orientation choices. Homotopic attaching maps give homotopy equivalent cones preserving the lower sphere and the oriented relative top cell: use the attaching homotopy on a boundary collar before attaching the remaining disk. Cup-product naturality therefore proves homotopy invariance.

If $n$ is odd, graded commutativity gives $a^2=-a^2$. The top cohomology group is torsion-free, so $H(f)=0$. This conclusion is about the integral square invariant, not a proof that every such homotopy group or attaching map vanishes. If the orientation of the top cell is reversed, $b$ changes sign and so does the recorded invariant. Reversing the lower generator changes $a$ to $-a$ and leaves its square unchanged.

There are useful naturality laws with full dimensional content. If $g:S^n\to S^n$ has degree $d$, map $C_f$ to $C_{gf}$ by $g$ on the bottom sphere and the identity on the top disk. Pullback sends the target lower generator to $da$ and its top generator to $b$. Comparing cup squares gives $H(gf)=d^2H(f)$. If $h:S^{2n-1}\to S^{2n-1}$ has degree $e$, the cone of $h$ extends over the top disk and gives a map $C_{fh}\to C_f$. It is the identity on the lower sphere and degree $e$ on the relative top cell, giving $H(fh)=eH(f)$. These two laws distinguish postcomposition from precomposition.

The invariant is additive under the homotopy-group sum. To see this without guessing a quadratic law, attach two top cells to the same lower sphere, using $f$ and $g$. The cup square in that space is $H(f)b_1+H(g)b_2$, by restriction to each one-cell cone. The sum of the two relative characteristic-disk classes gives a map from $C_{f+g}$ into this two-cell space, identity on the lower sphere and degree one onto each relative top cell. Pulling the equation back gives $H(f+g)=H(f)+H(g)$. The relative addition is available because the top dimension is at least four. In particular, the quadratic postcomposition law is not the law for adding two attaching-map classes.

## Worked example 2: the Hopf cone is a projective plane

Use the map from the closed unit ball of $\mathbb C^2$ to $\mathbb{CP}^2$ given by
$$(z_0,z_1)\longmapsto[z_0:z_1:\sqrt{1-|z_0|^2-|z_1|^2}].$$
On the interior it parameterizes the affine chart with last coordinate nonzero; solving for its positive real last coordinate gives the inverse chart. On the boundary it sends the unit three-sphere to its complex line in the projective line with last coordinate zero, exactly the Hopf attaching map. The resulting quotient is homeomorphic to the projective plane, by the continuous bijection from the compact attached-cell model to the Hausdorff target.

The retained projective-space computation in the fibration chapter, with its explicitly imported multiplicative Serre theorem, gives a degree-two generator $x$ whose square generates degree four. Choose the top orientation so that $x^2=b$. Hence $H(\eta)=1$. Since the previous example identifies $\pi_3(S^2)$ as the integers generated by $\eta$, additivity gives $H(m\eta)=m$. Thus the Hopf invariant classifies this particular unstable group. This special conclusion does not make it a classification of all sphere homotopy groups.

## Worked example 3: two different meanings of multiplying a Hopf map

Precompose $\eta:S^3\to S^2$ with a degree-three self-map of $S^3$. The invariant is three, so the resulting class is $3\eta$. Postcompose instead with a degree-three self-map of $S^2$. Its invariant is nine, so the class is $9\eta$. Both assertions follow from the proved transformation laws and classification of this group.

Suspending $\eta$ gives a class in $\pi_4(S^3)$. The first suspension here is at the surjective boundary of the range theorem, since the original domain degree is three and the target sphere dimension is two. The theorem therefore does not prove injectivity, and the infinite order of $\eta$ cannot be carried across automatically. The Hopf invariant formula above also no longer has the required domain dimension after that suspension. Computing this stable stem needs additional information, rather than a reuse of the degree or cup-square argument outside its scope.

## Exercises with hints and full solutions

### Exercise 1

Prove $\pi_4(S^7)=0$ and state the theorem that supplies the deformation.

<details><summary>Hint 1</summary>

Use the zero- and seven-cell structure of the target.

</details>

<details><summary>Hint 2</summary>

Cellular approximation can fix the basepoint subcomplex.

</details>

<details><summary>Full solution</summary>

Relative cellular approximation deforms a based four-sphere map into the target's four-skeleton while fixing the basepoint. That skeleton is just the zero-cell, so the map is based nullhomotopic. The conclusion is not a dimension-count assertion about arbitrary continuous images; it depends on the cellular deformation theorem. No corresponding argument makes all groups above the target dimension vanish.

</details>

### Exercise 2

For stem $k=5$, find the first sphere dimension guaranteed to lie in the isomorphism range and the preceding surjective boundary dimension.

<details><summary>Hint 1</summary>

Substitute $j=n+5$ into the suspension inequalities.

</details>

<details><summary>Hint 2</summary>

The strict range starts when $n\ge k+2$.

</details>

<details><summary>Full solution</summary>

The guaranteed isomorphism range starts at $n=7$, where $j=12=2n-2$. At $n=6$ the degree is eleven, equal to $2n-1$, so the suspension is guaranteed surjective but not necessarily injective. All subsequent maps from the dimension-seven entry are isomorphisms. This locates a stable representative but does not calculate the value of that fifth stable stem.

</details>

### Exercise 3

Why do stable stems in negative degree vanish?

<details><summary>Hint 1</summary>

Choose the sphere dimension large enough that the domain dimension is positive.

</details>

<details><summary>Hint 2</summary>

For a negative stem the domain dimension remains below the target dimension.

</details>

<details><summary>Full solution</summary>

For fixed negative $k$ and sufficiently large $n$, the group is $\pi_{n+k}(S^n)$ with $1\le n+k<n$. Cellular approximation makes it zero. Every later term also vanishes, so their direct limit is zero. The claim uses eventual positive dimensions and does not require defining ordinary homotopy groups in a negative domain dimension.

</details>

### Exercise 4

A self-map of $S^6$ has degree minus four. Describe its homotopy class, its sum with itself and its composite with itself.

<details><summary>Hint 1</summary>

Degree classifies same-dimensional sphere maps.

</details>

<details><summary>Hint 2</summary>

Addition and composition obey different integer laws.

</details>

<details><summary>Full solution</summary>

Its class is minus four times the identity in $\pi_6(S^6)$. The sum with itself has degree minus eight, while the composite has degree sixteen. Both are determined by those degrees in this same-dimensional setting. Confusing composition with the homotopy-group addition would give an incorrect sign and magnitude.

</details>

### Exercise 5

Explain why the Hopf map is not nullhomotopic even though its induced map in degree-three homology is zero.

<details><summary>Hint 1</summary>

Use either its exact-sequence generator status or its cone invariant.

</details>

<details><summary>Hint 2</summary>

The target two-sphere has no degree-three homology.

</details>

<details><summary>Full solution</summary>

The fibration calculation makes it a generator of the nonzero group $\pi_3(S^2)$; independently its Hopf invariant is one whereas a null attaching map has zero cup square. Its degree-three homology map is forced to be zero simply because the target group is zero. Thus ordinary homology in that degree fails to detect this essential higher-dimensional map, and a zero induced map is not a general nullhomotopy criterion.

</details>

### Exercise 6

Prove that the integral Hopf invariant vanishes for a map $S^5\to S^3$.

<details><summary>Hint 1</summary>

The lower cone generator has odd degree three.

</details>

<details><summary>Hint 2</summary>

The degree-six cohomology group of its cone is the integers.

</details>

<details><summary>Full solution</summary>

Graded commutativity makes the square of the degree-three generator equal to its negative, so twice that square is zero. The top cohomology is torsion-free, forcing the square itself to vanish and hence the integral invariant to be zero. This argument does not establish that the original map is nullhomotopic; the invariant can fail to detect nonzero classes.

</details>

### Exercise 7

If $H(f)=2$, compute the invariants after postcomposition by degree minus three and after precomposition by degree minus three in the appropriate sphere dimensions.

<details><summary>Hint 1</summary>

The target degree is squared.

</details>

<details><summary>Hint 2</summary>

The domain degree enters linearly.

</details>

<details><summary>Full solution</summary>

Postcomposition gives eighteen, because $(-3)^2\cdot2=18$. Precomposition gives minus six, because $-3\cdot2=-6$. The laws concern different maps and different induced cone maps. In particular, reversing the target sphere orientation does not negate the square invariant, while reversing the oriented top attaching sphere does.

</details>

### Exercise 8

Why does a suspension isomorphism theorem not by itself calculate a positive stable stem?

<details><summary>Hint 1</summary>

An isomorphism can relate two unknown groups.

</details>

<details><summary>Hint 2</summary>

The theorem supplies neither generators nor relations for a first stable entry.

</details>

<details><summary>Full solution</summary>

Once the range is reached, all later groups are isomorphic, so one can use any of them as a representative of the direct limit. But the theorem does not determine the representative's elements, orders or relations. A fibration, spectral sequence or another computation must supply that missing information. Writing the same unknown symbol at every stable position records a structural theorem, not a numerical computation.

</details>

### Exercise 9

Use the additivity proof to explain why the target-degree-square law does not contradict the linear value $H(m\eta)=m$.

<details><summary>Hint 1</summary>

The homotopy-group sum uses a pinch of the domain sphere.

</details>

<details><summary>Hint 2</summary>

Postcomposition changes the lower cone generator by the target degree.

</details>

<details><summary>Full solution</summary>

The sum $m\eta$ is obtained by adding attaching-map classes, or equivalently by precomposition with a degree-$m$ self-map of the domain three-sphere. Its top-cell pullback is linear in that degree, giving invariant $m$. A degree-$m$ target map instead multiplies the lower degree-two generator by $m$, and its square by $m^2$. These are different operations; in $\pi_3(S^2)$ the latter produces $m^2\eta$, not $m\eta$.

</details>

### Exercise 10

What orientation changes negate the recorded Hopf invariant, and what changes leave it unchanged?

<details><summary>Hint 1</summary>

Write the defining equality using the two chosen cone generators.

</details>

<details><summary>Hint 2</summary>

The lower generator is squared; the top one is not.

</details>

<details><summary>Full solution</summary>

Replacing the top generator by its negative negates the integer coefficient in the defining equality. Replacing the lower generator by its negative leaves its square and hence the coefficient unchanged. A homotopy preserving the oriented attaching data leaves both generator conventions intact and preserves the invariant. Specifying orientations is therefore essential when identifying a particular Hopf class with positive rather than negative one.

</details>

## Source provenance and boundaries

The constructions and calculations above are original exposition. The imported homotopy-excision and cellular-approximation inputs, with the suspension ranges, were checked against [Hatcher's author-hosted Homotopy Theory chapter](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf), Theorems 4.8 and 4.23 and Corollary 4.24. This is a limited theorem-scope comparison, not a reading of the complete book or its tables. Higher unstable torsion groups, the EHP sequence, complete positive stable stems and general higher Hurewicz proofs are outside the calculations supplied here. The next chapter uses suspension systematically to define generalized cohomology and spectra, retaining the distinction between stability and computation.
