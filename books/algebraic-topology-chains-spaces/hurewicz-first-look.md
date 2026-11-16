
# Hurewicz and Higher Homotopy: A First Look

The fundamental group remembers the order of loops; first homology forgets exactly their commutators. This is the degree-one Hurewicz theorem, and we prove it by constructing an explicit inverse from cycles to abelianized loops. Higher homotopy groups have a different feature: their multiplication is already commutative once the sphere dimension is at least two.

These facts lead toward the higher Hurewicz theorem, which identifies the first nonzero homotopy group with the first nonzero reduced homology group under connectivity hypotheses. We state that higher theorem precisely as a cited input. The elementary commutativity proof and the complete degree-one proof below do not constitute its full CW proof.

Use a based space (X,x0). For the degree-one theorem X is path-connected; for the cited higher theorem we restrict to connected CW complexes. Earlier chapters supply based homotopy, concatenation, covering homotopy lifting, and singular homology. The geometry of a cube is used only as a concrete sphere model.

## 1. Higher homotopy groups from cubes

**Definition 16.1.** For n>=1, pi_n(X,x0) consists of homotopy classes, relative to the boundary, of maps
$(I^n,\partial I^n)\to(X,x0).$
Collapsing the cube boundary identifies I^n/partial I^n with S^n, giving the equivalent based-sphere definition.

Concatenate two maps in the first coordinate by using the first on [0,1/2] and the second on [1/2,1]. At the common interface both maps take the boundary value x0, so the pasted map is continuous. Homotopies relative boundary paste the same way, making the operation well defined on classes.

Associativity follows by changing the three subinterval lengths continuously: the two parenthesizations traverse the same three maps with different breakpoints, and linear interpolation of positive breakpoints gives a boundary-fixed homotopy. The constant map is a unit up to the analogous reparametrization that shrinks a constant end strip.

Reflection of the first coordinate gives an inverse. Concatenating a map with that reflection makes a forward-then-back excursion in the first coordinate. Contract its maximal excursion continuously to zero, with both endpoints fixed, using the usual loop backtracking homotopy for each fixed remaining coordinate. The cube's other boundary coordinates remain x0 throughout. Thus these classes form a group.

## 2. Full commutativity proof in dimensions at least two

When n>=2, concatenate also in the second coordinate, denoting that operation by circle and the first by star. They share the same constant unit. The four-quarter cube gives the interchange rule
$(a\circ b)\star(c\circ d)
=(a\star c)\circ(b\star d).$
It holds by evaluating each of the four first-two-coordinate rectangles; the remaining n-2 coordinates are untouched.

**Theorem 16.2 (Eckmann–Hilton argument).** For n>=2 the two operations coincide and are commutative.

*Proof.* With e the common unit,
$a\star b=(a\circ e)\star(e\circ b)
=(a\star e)\circ(e\star b)=a\circ b.$
Using the other placement of units,
$a\star b=(e\circ a)\star(b\circ e)
=(e\star b)\circ(a\star e)=b\circ a=b\star a.$
Thus the group is abelian. $\square$

This proof uses two independent concatenation directions. It has no analogue in a one-dimensional interval, which is why pi1 may be nonabelian. It also proves no vanishing theorem: an abelian higher homotopy group can be large.

## 3. Defining the Hurewicz homomorphism

For n>=1, a based sphere map f gives a homology class
$h_n([f])=f_*[S^n]\in H_n(X;\mathbb Z),$
where the sphere has its chosen orientation. Based homotopy invariance makes it well defined.

The map is a homomorphism. Concatenation corresponds to pinching the sphere into two sphere summands. The pinch map sends the fundamental class to the sum of their generators: cut into two oriented hemispheres and use the relative-disk or Mayer–Vietoris calculation. Applying the two maps to that sum gives the sum of their homology images. In degree one this is also the direct singular-chain concatenation identity proved next.

The construction is natural for based continuous maps. A change of basepoint along a path gives isomorphisms of higher homotopy groups, but different paths can act differently through pi1. Commutativity of pi_n does not eliminate that action. Homology has no corresponding basepoint dependence, so the Hurewicz map can lose that information.

## 4. A singular-chain identity for paths

Let alpha and beta be composable paths and gamma=alpha*beta. On the ordered triangle with vertices 0,1,2, define an affine scalar function taking values 0,1/2,1. Composing that function with gamma gives a singular two-simplex whose faces are alpha,beta,gamma. Its boundary is
$\beta-\gamma+\alpha.$
Consequently concatenating paths represents their sum modulo singular boundaries. This identity is valid even when the individual paths are not cycles; the displayed difference is a cycle because their endpoints cancel.

A reversed path represents the negative of a path modulo boundaries in any cycle expression, because forward-then-back is nullhomotopic. Constant one-simplices are boundaries of constant two-simplices. These observations make the transition from based loops to singular one-cycles completely explicit.

## 5. Full degree-one Hurewicz proof

**Theorem 16.3.** For a path-connected X, the natural map h1 induces an isomorphism
$\pi_1(X,x0)_{\mathrm{ab}}\cong H_1(X;\mathbb Z).$
Equivalently h1 is surjective and its kernel is the commutator subgroup.

*Proof.* Loop concatenation becomes addition by the triangle identity, so h1 is a homomorphism. Its target is abelian, so it factors through the abelianization.

Choose, for every point x, a path p_x from x0 to x, with p_x0 constant. For a singular edge sigma from u to v, form the based loop
$L_\sigma=p_u*\sigma*\overline{p_v}.$
Send the free one-chain generator sigma to its loop class in the abelianization and extend additively. For a singular triangle, the three edge paths satisfy sigma01*sigma12 homotopic relative endpoints to sigma02 inside that triangle. The p paths cancel after abelianization, so the image of its boundary sigma12-sigma02+sigma01 is zero. Hence the construction kills every singular boundary and defines a homomorphism from H1 to pi1_ab.

For a based loop at x0, its two p paths are constant, so this homomorphism composed with h1 gives its original abelianized class. In the other direction, take a finite cycle z=sum n_sigma sigma. By the path identity, the homology class of L_sigma is represented by p_u+sigma-p_v. Summing gives z plus the paths p_x with coefficients
$\sum_{\text{edges starting at }x}n_\sigma
-\sum_{\text{edges ending at }x}n_\sigma.$
These coefficients vanish because partial z=0. Thus h1 of the constructed abelianized loop class is exactly [z]. The two maps are inverse, proving the theorem. $\square$

The inverse was written using choices of paths, but the resulting inverse of a fixed canonical isomorphism is unique. In particular the theorem is natural, not dependent on an arbitrary path system. The argument uses finite chains even if X has infinitely many points or cells.

## 6. What the higher theorem says, and what is imported

**Theorem 16.4 (higher Hurewicz, cited input).** Let X be a path-connected CW complex and n>=2. If pi_i(X)=0 for 1<=i<n, then reduced H_i(X;Z)=0 for 0<=i<n and
$h_n:\pi_n(X)\xrightarrow{\cong}H_n(X;\mathbb Z).$

This is the first-nonzero-group theorem. Its full proof involves cellular homotopy and relative connectivity, and is not supplied by the commutativity or degree-one arguments above. We cite Hatcher's homotopy chapter and May's Chapter 15 for it. Relative Hurewicz and the Whitehead theorem are further results; neither is silently assumed as proved here.

The hypotheses cannot be shortened to “X is connected.” Degree one then gives only abelianization. Nor does the theorem compute every higher pi group after the first one. For S² it gives pi2(S²)=Z, but it does not compute pi3(S²), because S² does not have the required vanishing pi2 for the n=3 application.

For S^n with n>=2, cellular approximation applied to its one-vertex, one-n-cell structure makes every based map S^i→S^n null for i<n. This uses the explicitly imported relative cellular-approximation theorem from the CW chapter. Higher Hurewicz then gives pi_n(S^n)=Z, and the homomorphism is degree. The degree map was defined earlier from homology without assuming this stronger classification.

## 7. Worked examples

### Worked example 1 — A graph remembers a free group but homology remembers counts

A wedge of r circles has fundamental group the free group F_r. Its abelianization is Z^r: send each word to its exponent-sum vector. Commutators vanish, and after imposing commutativity every word reduces uniquely to those powers. Thus H1=Z^r by Theorem 16.3.

For r=2 the loops ab and ba differ in the free group but have the same homology class. Their difference is precisely the commutator information the theorem discards. A cellular incidence calculation gives the same homology but does not by itself recover word order.

### Worked example 2 — Surface and projective presentations

The oriented genus-g surface group has generators a_i,b_i and relation the product of their commutators. Abelianizing kills each commutator, so the relation contributes zero and H1=Z^{2g}. By contrast RP2 has presentation with one generator a and relation a²=1; abelianization gives Z/2. The cellular degree-two boundary records exactly the same doubled relation.

The agreement is not accidental: the degree-one theorem proves why attaching-word abelianization and singular one-homology coincide. It does not say the surface group itself is abelian when g>1.

### Worked example 3 — A nontrivial perfect group gives H1 zero

In A5 take the involutions a=(12)(34), b=(12)(35). Their commutator is (ab)²=(345), a three-cycle. The commutator subgroup is normal, and all three-cycles are conjugate inside A5: a conjugating permutation can have its parity corrected by the transposition of the two unused symbols. Three-cycles generate A5, since an even permutation is a product of paired transpositions and each such pair is one or two three-cycles. Therefore A5 equals its commutator subgroup and its abelianization is zero.

Build a finite presentation complex with a symbol x_g for each group element and relations x_1=1 and x_g x_h=x_gh. Every word reduces by these relations to its product element, so the presented group is exactly A5. Van Kampen identifies this as the complex's pi1. Its H1 is zero by Theorem 16.3, although pi1 is nontrivial. This example asserts nothing about its H2 or acyclicity; zero first homology alone is weaker than simple connectivity.

### Worked example 4 — The first nonzero group of a sphere wedge

For X=S^n wedge S^n with n>=2, relative cellular approximation shows pi_i(X)=0 for i<n because its lower skeleton is one point. Cellular homology gives H_n(X)=Z². The cited higher Hurewicz theorem therefore gives pi_n(X)=Z², with the two sphere inclusions mapping to the two homology generators. This calculation explicitly invokes the higher theorem, unlike the fully proved degree-one examples.

### Worked example 5 — Abelian does not mean a trivial basepoint action

For X=S1 wedge S2, the universal cover is a line with one sphere attached at each integer vertex. It is simply connected, and cellular homology H2 is the direct sum of one Z for each integer. The cited n=2 Hurewicz theorem gives the same pi2 upstairs. Covering homotopy lifting identifies it with pi2(X).

The generator of pi1(X)=Z acts by shifting the attached spheres, hence shifts those pi2 basis elements. The group pi2 is abelian, but its pi1 action is nontrivial. Changing basepoint paths must therefore still be tracked in statements about higher groups.

### Worked example 6 — A first homotopy group with torsion

Fix an integer $n\ge2$ and an integer $m\ge2$. Begin with the sphere $S^n$ and attach one $(n+1)$-cell by a based map of degree $m$. Denote the resulting CW complex by $M$. This is the standard one-group Moore-space construction in these dimensions. The definition specifies an attaching map, rather than merely declaring the desired homology groups. The degree maps needed here exist: start with the degree-$m$ circle map and suspend repeatedly; suspension preserves degree by the suspension isomorphism in reduced homology established earlier.

There is one vertex, no cells in dimensions strictly between zero and $n$, one cell in dimension $n$, and the attached cell in dimension $n+1$. Relative cellular approximation, which is an explicit imported input of this chapter, makes any based map from a sphere of dimension less than $n$ homotopic into the corresponding skeleton of $M$. That skeleton is only the vertex. Consequently all the lower positive homotopy groups vanish. In particular the space is simply connected, including the case $n=2$.

Cellular homology is equally explicit. The only nonzero reduced cellular differential is multiplication by $m$ from the upper cell to the sphere cell, because the cellular incidence coefficient is the degree of the attaching map. Multiplication by the positive integer $m$ is injective on the integers. Its kernel is therefore zero and its cokernel is the cyclic group of order $m$. Thus the only nonzero reduced homology group of $M$ is that cyclic group, in degree $n$.

The higher Hurewicz theorem now applies with all its connectivity hypotheses verified. It identifies the degree-$n$ homotopy group with the same cyclic group. More specifically, the inclusion of the original sphere represents a generator: naturality of the Hurewicz map sends its fundamental class to the generator of the cellular cokernel. This gives both an abstract group calculation and a geometrically specified generating sphere map. The attached cell imposes precisely the multiple-$m$ relation on the first group detected by Hurewicz.

Nothing in this argument computes the next homotopy group. A vanishing homology group in degree $n+1$ does not allow a second immediate application of the theorem, because the already computed homotopy group in degree $n$ is nonzero. Nor can the construction be shifted unchanged to $n=1$ and justified by the higher theorem: attaching a disk to a circle by degree $m$ produces fundamental group cyclic of order $m$, which is not simply connected. Degree-one Hurewicz then concerns its abelianization instead. This comparison separates the attaching-map calculation, the connectivity input and the theorem's allowed range. Each is necessary for the claimed torsion example.

## 8. What these comparisons do not imply

A homology equivalence need not be a homotopy equivalence without extra hypotheses. Even H1 zero does not imply pi1 zero, as the perfect-group example shows. Higher Hurewicz addresses highly connected spaces, not arbitrary spaces whose low homology happens to vanish.

For simply connected CW spaces, homological versions of Whitehead's theorem connect much more of the two theories. Their proof uses relative Hurewicz and cellular extension, so they remain cited further theorems rather than consequences claimed from the one-dimensional chain chase.

The practical lesson is to state which information has been forgotten. First homology forgets exactly commutators. Higher Hurewicz loses no information at the first nonzero group under its connectivity conditions. Outside that range, homology can be much simpler than homotopy, and the comparison map alone does not classify the remaining structure.

## Exercises

<a id="hurewicz-first-look-ex-1"></a>
### Exercise 16.1

Prove the interchange rule for the two cube concatenations.

<details>
<summary>Hint 1</summary>

Divide the first two coordinates into four rectangles.

</details>

<details>
<summary>Hint 2</summary>

Evaluate each rectangle using the same original four maps.

</details>

<details>
<summary>Full solution</summary>

On each quadrant, either order of concatenation rescales coordinate one and coordinate two independently and selects the same one of a,b,c,d. At shared faces all maps take the prescribed basepoint. Thus the pasted maps agree and the interchange rule holds on homotopy classes.

</details>

<a id="hurewicz-first-look-ex-2"></a>
### Exercise 16.2

Use a common unit and interchange to prove commutativity.

<details>
<summary>Hint 1</summary>

First show the operations coincide.

</details>

<details>
<summary>Hint 2</summary>

Then place the units in the opposite corners.

</details>

<details>
<summary>Full solution</summary>

The calculation (a circle e) star(e circle b) equals a star b and also a circle b. The calculation (e circle a) star(b circle e) equals a star b and also b circle a. Since the two operations coincide, a star b=b star a.

</details>

<a id="hurewicz-first-look-ex-3"></a>
### Exercise 16.3

Why does the same proof not force pi1 to be abelian?

<details>
<summary>Hint 1</summary>

Count independent cube directions.

</details>

<details>
<summary>Hint 2</summary>

An interval has only one concatenation coordinate.

</details>

<details>
<summary>Full solution</summary>

The Eckmann–Hilton argument requires two operations with the interchange law. For I there is no second independent coordinate operation from this construction. The fundamental group can therefore retain noncommuting loop order, as a two-circle wedge demonstrates.

</details>

<a id="hurewicz-first-look-ex-4"></a>
### Exercise 16.4

Prove h1 kills commutators.

<details>
<summary>Hint 1</summary>

Concatenation becomes addition in H1.

</details>

<details>
<summary>Hint 2</summary>

Expand a commutator's four loop terms.

</details>

<details>
<summary>Full solution</summary>

The class of alpha beta alpha^-1 beta^-1 maps to [alpha]+[beta]-[alpha]-[beta]=0. Hence the map factors through pi1's abelianization. The full theorem adds the nontrivial assertion that no larger kernel remains.

</details>

<a id="hurewicz-first-look-ex-5"></a>
### Exercise 16.5

Explain how the chosen connecting paths cancel for a singular one-cycle.

<details>
<summary>Hint 1</summary>

Group coefficients by each endpoint.

</details>

<details>
<summary>Hint 2</summary>

Use partial z=0.

</details>

<details>
<summary>Full solution</summary>

Replacing each edge u→v by its based loop adds p_u and subtracts p_v. At a point x, the total added coefficient is the sum of outgoing edge coefficients minus incoming coefficients. The cycle condition makes it zero. Thus the resulting loop-chain sum represents exactly the original homology class.

</details>

<a id="hurewicz-first-look-ex-6"></a>
### Exercise 16.6

Compute H1 from presentation <a,b|a²,b³,aba^-1b^-1>.

<details>
<summary>Hint 1</summary>

Abelianize each relation.

</details>

<details>
<summary>Hint 2</summary>

The commutator relation adds nothing after abelianization.

</details>

<details>
<summary>Full solution</summary>

The abelianized generators satisfy 2a=0 and 3b=0, with no further relation. Thus H1 is Z/2 direct-sum Z/3, isomorphic to Z/6. The theorem identifies this with first homology of the presentation complex.

</details>

<a id="hurewicz-first-look-ex-7"></a>
### Exercise 16.7

State the hypothesis needed to use higher Hurewicz at degree three.

<details>
<summary>Hint 1</summary>

All lower positive homotopy groups must vanish.

</details>

<details>
<summary>Hint 2</summary>

Connectedness alone is insufficient.

</details>

<details>
<summary>Full solution</summary>

For the stated CW theorem one needs path-connected X with pi1(X)=pi2(X)=0. Then H1 and H2 vanish and h3 is an isomorphism pi3→H3. The fact that pi3 is abelian does not itself supply either vanishing condition.

</details>

<a id="hurewicz-first-look-ex-8"></a>
### Exercise 16.8

Why does higher Hurewicz not compute pi3(S2) from H3(S2)=0?

<details>
<summary>Hint 1</summary>

Check pi2(S2).

</details>

<details>
<summary>Hint 2</summary>

The degree-two application has already made it nonzero.

</details>

<details>
<summary>Full solution</summary>

The n=3 theorem requires pi2=0, but the n=2 theorem gives pi2(S2)=Z. Therefore its hypotheses fail and H3=0 cannot be substituted to conclude pi3=0. No value of pi3 is established by that invalid argument.

</details>

<a id="hurewicz-first-look-ex-9"></a>
### Exercise 16.9

Give a path-connected CW example with H1 zero and pi1 nonzero.

<details>
<summary>Hint 1</summary>

Use the multiplication-table presentation of A5.

</details>

<details>
<summary>Hint 2</summary>

Its commutator subgroup is the whole group.

</details>

<details>
<summary>Full solution</summary>

The finite complex built from symbols x_g and relations x_gx_h=x_gh has pi1=A5 by the presentation calculation and van Kampen. The exhibited three-cycle commutator and generation argument make A5 perfect, so H1≈A5_ab=0. Nontriviality of A5 shows the space is not simply connected.

</details>

<a id="hurewicz-first-look-ex-10"></a>
### Exercise 16.10

Can abelian pi2 still have a nontrivial pi1 action? Explain the sphere-wedge-circle example.

<details>
<summary>Hint 1</summary>

Lift to the universal cover.

</details>

<details>
<summary>Hint 2</summary>

Deck shifts permute its sphere generators.

</details>

<details>
<summary>Full solution</summary>

For S1 wedge S2, the cover is a line with spheres at integer vertices. Its pi2 is the direct sum of their Z generators by the cited degree-two Hurewicz theorem. The loop generator shifts these spheres, hence acts nontrivially. This does not violate abelianity of the pi2 group.

</details>

## Sources

The higher-group commutativity and complete degree-one abelianization proof are supplied directly. The higher Hurewicz theorem and further Whitehead results are explicit imports from [Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html) and [May, A Concise Course, Chapters 9 and 15](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf). Relative cellular approximation is the separately cited theorem in [CW Complexes](cw-complexes.md).

## Summary

Two cube concatenations prove pi_n is abelian for n>=2. The explicit path-and-cycle construction proves H1 is exactly the abelianization of pi1. The natural higher Hurewicz map sends a sphere to its fundamental homology image; the cited first-nonzero-group theorem makes it an isomorphism under the stated connectivity hypotheses. Basepoint actions and higher groups outside that range retain information homology need not detect.
