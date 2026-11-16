
# Monoidal Categories

An ordinary category has composition, but it need not have a way to place two objects side by side. A monoidal category adds such a product and a unit, with specified isomorphisms comparing bracketings. The point is structural: tensoring maps must be functorial, and all legitimate ways of reassociating a finite tensor expression must agree. Modules, sets, representations and endofunctors give distinct versions of this idea. This chapter proves the elementary consequences needed for enrichment and operads while separating them from the general coherence theorem.

Read [Introduction to Category Theory](#/books/introduction-to-category-theory), especially natural transformations, products and adjunctions, and [Homological Algebra, tensor products and Hom](../morphisms-modules-categories/tensor-products-hom.md). The earlier [Morphisms First monoidal reading](../morphisms-modules-categories/monoidal-categories.md) remains live with its original exercises and solutions. Its examples motivate this new primary chapter; its imported Mac Lane coherence statement remains an explicitly named import here.

## Tensor, unit and coherence data

**Definition 1.1 (Monoidal category).** A monoidal category is a category C, a bifunctor tensor from C times C to C, an object I, and natural isomorphisms alpha from (A tensor B) tensor C to A tensor (B tensor C), lambda from I tensor A to A, and rho from A tensor I to A. They satisfy the pentagon and triangle axioms. The pentagon equates the two canonical paths from a fourfold left-bracketed tensor to a right-bracketed tensor; the triangle says the two ways to remove I from (A tensor I) tensor B agree. The isomorphisms are part of the structure. An equality of differently bracketed objects is generally false even when those objects are canonically isomorphic.

Functoriality is a separate requirement from the pentagon. If f:A to A' and g:B to B', then tensor gives f tensor g:A tensor B to A' tensor B', preserves identities, and satisfies (f' tensor g')(f tensor g)=(f'f) tensor (g'g) whenever the compositions make sense. The interchange law follows directly from being a functor on a product category. It is what permits a string diagram to move independent operations past each other.

**Proposition 1.2 (Naturality is necessary).** Suppose the associators are isomorphisms and natural. For maps f,g,h on three factors, the square comparing first applying f tensor g tensor h and then alpha with first applying alpha and then the bracketed maps commutes.

*Proof.* Naturality of alpha is precisely this square, evaluated at the triple of arrows (f,g,h) in C cubed. Writing its two composites gives alpha at the target triple after the left-bracketed tensor map, and the right-bracketed tensor map after alpha at the source triple. Their equality is the naturality equation. Pentagon and triangle do not replace this equation; they compare structural maps at fixed objects rather than structural maps with arbitrary arrows. ∎

**Imported theorem 1.3 (Mac Lane coherence).** In a monoidal category satisfying naturality, pentagon and triangle, every diagram built solely from associators, unitors, their inverses, identities and tensor products of these canonical maps commutes when its source and target are the same formal tensor word. This allows omission of brackets in calculations that use only those canonical maps. It does not make differently bracketed objects literally equal and does not identify arbitrary noncanonical morphisms. We use the theorem with this scope; its full general proof is imported from Mac Lane, *Categories for the Working Mathematician*, second edition, Chapter VII, Section 2.

The definition handles the four-object case explicitly, whereas coherence handles every finite word. We can prove small consequences directly without invoking the full theorem. For example, the left and right unitors at I agree. Apply the triangle to I,I,I and use naturality of the unitors and invertibility of alpha to compare the two routes deleting the middle and outer unit; the resulting equation cancels the common invertible maps and gives lambda at I equals rho at I. For the global statement about arbitrary words, the imported theorem is the correct boundary.

## Four concrete tensor products

**Worked example 1.4 (Two monoidal structures on sets).** On sets, Cartesian product has unit a singleton. The associator sends ((a,b),c) to (a,(b,c)); its inverse reverses that rebracketing. The left unitor sends (*,a) to a. Applying either route around the pentagon to (((a,b),c),d) yields (a,(b,(c,d))), so the pentagon holds elementwise. Disjoint union is also monoidal, with empty set as unit, but its associator transports tagged elements through a different set of coproduct injections. These monoidal structures are not the same: a singleton is terminal for the first and the empty set initial for the second. A proposed tensor formula must therefore name its unit and associator, even when the underlying category is familiar.

**Worked example 1.5 (Tensor of modules).** Let R be commutative. The category of R-modules is symmetric monoidal under tensor over R, with unit R. The associator sends (m tensor n) tensor p to m tensor (n tensor p); both sides are balanced trilinear expressions, and the universal property gives an isomorphism. The unit map R tensor M to M sends r tensor m to rm, with inverse m to 1 tensor m. The symmetry sends m tensor n to n tensor m. Commutativity of R ensures the usual left-module tensor is again an R-module with this symmetry. For a noncommutative ring, one instead needs compatible bimodule actions; merely writing a tensor symbol between two left modules is not enough to define this monoidal category.

**Worked example 1.6 (Endofunctors).** For any category C, endofunctors form a strict monoidal category under composition, with the identity functor as unit. On objects and arrows, (F composed with G) composed with H is literally the same functor as F composed with (G composed with H), and both unit equations are literal identities. Natural transformations tensor by horizontal composition. Strictness is a property of this particular presentation, not a license to declare every monoidal category strict without applying a theorem about monoidal equivalence.

Representations provide a fourth check. If G acts linearly on V and W over a field, define g(v tensor w)=(gv) tensor (gw). The group law follows from the laws on each factor, and the trivial one-dimensional representation is a unit. The underlying tensor associator is G-equivariant because both routes send a pure triple tensor to the same rebracketed triple. This is useful when ordinary linear algebra calculations have to respect an action.

## Strong, lax and strict monoidal functors

**Definition 1.7.** A lax monoidal functor F from (C,tensor,I) to (D,tensor,J) consists of a functor, maps J to F(I), and natural maps F(A) tensor F(B) to F(A tensor B), compatible with associators and unitors. It is strong if those structure maps are isomorphisms and strict if they are identities. An oplax functor has the comparison arrows reversed. The direction matters: the same underlying functor can carry a natural map in one direction while no natural inverse exists.

**Proposition 1.8 (The module forgetful comparison).** For commutative R, forgetting R-module structure to abelian groups is lax monoidal. Its comparison sends the integral tensor class m tensor n to the R-balanced class m tensor over R n. It need not be strong.

*Proof.* The universal bilinear map M times N to M tensor over R N induces a group homomorphism M tensor over Z N to M tensor over R N. Balanced relations make it natural in both modules. The unit map Z to the underlying group of R sends one to one. Associativity and unit compatibility follow by checking pure tensors and the unit generator, which generate the respective tensor products. For R=Q and M=N=Q, the source Q tensor over Z Q and target Q tensor over Q Q happen to be isomorphic, so this pair alone would not show failure. Instead take R=Z times Z and M=N=R: the unit comparison Z to R is not an isomorphism. Thus the functor is not strong in general. ∎

The free R-module functor from sets to R-modules is strong monoidal for Cartesian product on sets and tensor over R on modules: the map from R[X] tensor R[Y] to R[X times Y] sends basis tensors x tensor y to the basis element (x,y). The tensor product of free modules has precisely those basis tensors as a basis, so the map is an isomorphism. The empty and singleton cases reveal the unit behavior. This strong monoidal structure depends on the choice of Cartesian product; the same statement with disjoint union as the source tensor would be different and generally false.

## Braiding, symmetry and the graded sign

**Definition 1.9.** A braiding is a natural family of isomorphisms beta from A tensor B to B tensor A satisfying the two hexagon identities, which compare crossing one object past a tensor pair with crossing it past each factor. It is symmetric if beta at B,A composed with beta at A,B is the identity. A braiding need not be symmetric: making a second crossing can retain nontrivial information.

For graded modules, the Koszul symmetry on homogeneous elements is beta(v tensor w)=(-1) to the product of their degrees times w tensor v. To check the symmetric equation, crossing twice contributes the sign twice, so the product is one. To check one hexagon on homogeneous v,w,x, crossing v past w tensor x gives sign (-1) to degree v times (degree w plus degree x). Crossing first past w and then past x gives the product of signs with exponents degree v times degree w and degree v times degree x, the same sign. Additivity of degrees is exactly the calculation behind the hexagon. Ignoring this sign in complexes changes differentials and can invalidate a chain map.

The braid and symmetric axioms have different consequences. In a braided category one can compare different orders of tensor factors coherently, but a double crossing is not forced to disappear. In a symmetric category permutations act through canonical maps. The earlier retained reading states this distinction; the graded calculation here demonstrates where the extra symmetric condition is used rather than merely naming it.

## Internal Hom and dual objects

**Definition 1.10 (Closedness).** A monoidal category is right closed when, for every A, tensoring on the right with A has a right adjoint [A,-]. Thus maps B tensor A to C correspond naturally to maps B to [A,C]. In sets with Cartesian product, [A,C] is the function set C to the A power. In modules over commutative R, it is the module Hom over R from A to C. The adjunction is natural in B and C, not just a numerical equality of hom-set sizes.

**Definition 1.11 (Dualizability).** In a symmetric monoidal category, a dual of A consists of A-star, a coevaluation from I to A tensor A-star, and an evaluation from A-star tensor A to I, satisfying the two triangle identities after inserting the necessary associators and unitors. The first triangle straightens a bent A strand; the second straightens a bent A-star strand. These are equations of maps, not just an equality of dimensions.

**Theorem 1.12 (Finite projectives are exactly dualizable modules).** For a commutative ring R, an R-module M is dualizable in the usual tensor category if and only if it is finitely generated projective.

*Proof.* If M is finitely generated projective, it is a direct summand of a finite free module and has a finite dual basis m_i,f_i with every m equal to the sum of f_i(m)m_i. Set M-star=Hom over R from M to R, define evaluation by f tensor m to f(m), and define coevaluation of one as the finite sum of m_i tensor f_i. The first triangle sends m to the stated dual-basis sum, hence to m. The second sends a functional f to the functional m maps to the sum of f(m_i)f_i(m), which equals f(m); thus both triangles hold.

Conversely, a coevaluation value is one element of a tensor product, so it is represented by a finite sum of pure tensors m_i tensor d_i. Evaluation with each d_i produces a functional f_i on M. The first triangle then says m equals the sum of f_i(m)m_i for every m. The map M to R to the n power with coordinates f_i and the map back sending coordinates to their weighted m_i split the identity of M. Therefore M is a direct summand of finite free R to the n power, hence finitely generated projective. No assumption that every module admits a basis was used. ∎

**Worked example 1.13 (Trace of a matrix).** For M=R to the n power with basis e_i and dual basis e_i-star, coevaluation sends one to the sum of e_i tensor e_i-star. Given an endomorphism T with matrix entries t_ji defined by T(e_i)=sum over j of t_ji e_j, apply T to the first factor, cross the factors by the symmetry, then evaluate. All off-diagonal terms vanish because e_i-star(e_j) is zero unless i=j. The resulting endomorphism of R sends one to the sum of t_ii, the ordinary matrix trace. The construction works without a chosen basis once dualizability is known; the basis calculation checks its value in the free case.

## Boundaries for the next chapters

The coherence theorem is imported, while the finite tensor, functor, symmetry and duality calculations above are proved in their stated settings. Enrichment will replace each hom-set by an object of a chosen monoidal category. It needs composition maps built from tensor and a unit map from I. Ends and coends later provide formulas for natural transformations and weighted constructions. Those later chapters will state smallness and existence hypotheses; the symbol for a tensor product alone does not supply them.

## Exercises

### Exercise 1.1 {#monoidal-categories-ex-interchange}

For composable pairs f,f' and g,g', prove the tensor interchange equation directly from bifunctoriality.

<details><summary>Hint 1</summary>
View each pair of arrows as one arrow in the product category.
</details>
<details><summary>Hint 2</summary>
Composition in that product is componentwise, so apply preservation of composition by the tensor functor.
</details>
<details><summary>Solution</summary>
The arrows (f,g) and (f',g') compose to (f'f,g'g') in the product category. A bifunctor preserves that composite, giving tensor(f'f,g'g')=tensor(f',g') tensor(f,g). This is the claimed interchange equation, with domains matching componentwise.
</details>

### Exercise 1.2 {#monoidal-categories-ex-set-pentagon}

Track an element of a fourfold Cartesian product around both sides of the associativity pentagon.

<details><summary>Hint 1</summary>
Start with a fully left-bracketed tuple.
</details>
<details><summary>Hint 2</summary>
Apply each associator as an actual change of parentheses, retaining the order of entries.
</details>
<details><summary>Solution</summary>
Both paths send (((a,b),c),d) to (a,(b,(c,d))). Every intermediate map only changes parentheses; none permutes entries. Since functions between sets are equal when they agree on every element, the two pentagon composites coincide.
</details>

### Exercise 1.3 {#monoidal-categories-ex-disjoint-unit}

Explain why the empty set is the unit for disjoint union and a singleton is not.

<details><summary>Hint 1</summary>
Write the two tagged injections into a disjoint union.
</details>
<details><summary>Hint 2</summary>
The empty set contributes no tagged elements, whereas a singleton contributes one.
</details>
<details><summary>Solution</summary>
The canonical map from empty disjoint union A to A sends every element from the A summand to itself and is bijective; the same holds on the other side. Singleton disjoint union A has one extra element, already for A empty, so it cannot be naturally isomorphic to A for all sets.
</details>

### Exercise 1.4 {#monoidal-categories-ex-module-associator}

For commutative R, construct the module tensor associator on pure tensors and explain its inverse.

<details><summary>Hint 1</summary>
Use the balanced trilinear map of three modules.
</details>
<details><summary>Hint 2</summary>
The reverse rebracketing is balanced by the same relations.
</details>
<details><summary>Solution</summary>
Send (m tensor n) tensor p to m tensor (n tensor p). Balancedness in each variable makes the map descend from triples of elements. Reverse rebracketing descends by the same universal property. Both composites fix every pure triple tensor, which generates, so they are mutual inverses.
</details>

### Exercise 1.5 {#monoidal-categories-ex-functor-composition}

Prove that endofunctor composition gives a strict monoidal category.

<details><summary>Hint 1</summary>
Compare the two triple composites on objects and arrows.
</details>
<details><summary>Hint 2</summary>
Check the identity endofunctor on both sides, then the natural transformation comparison.
</details>
<details><summary>Solution</summary>
For every object and arrow, ((F composed G) composed H) and (F composed (G composed H)) apply H, then G, then F, so they are identical functors. Composing with the identity functor changes nothing. Horizontal composition of natural transformations respects these literal compositions, giving strict associator and unitors.
</details>

### Exercise 1.6 {#monoidal-categories-ex-free-module}

Show that R[X] tensor over R R[Y] is naturally isomorphic to R[X times Y].

<details><summary>Hint 1</summary>
The first two modules are free on X and Y.
</details>
<details><summary>Hint 2</summary>
Send x tensor y to the basis element indexed by (x,y), and construct the inverse on that basis.
</details>
<details><summary>Solution</summary>
The bilinear map sending basis elements x,y to the basis element (x,y) induces a map from the tensor product. Define the reverse map on each basis element (x,y) as x tensor y and extend linearly. Both composites fix their generating basis elements or pure basis tensors, hence are identities. Naturality follows because a set map sends each named basis element to the basis element of its image.
</details>

### Exercise 1.7 {#monoidal-categories-ex-graded-hexagon}

Check the Koszul sign for crossing a homogeneous element past a tensor of two homogeneous elements.

<details><summary>Hint 1</summary>
The degree of a tensor is the sum of the degrees.
</details>
<details><summary>Hint 2</summary>
Compare the exponent from one crossing with the sum of exponents from two successive crossings.
</details>
<details><summary>Solution</summary>
Crossing v past w tensor x gives exponent |v|(|w|+|x|). Crossing v first past w and then past x gives signs with exponents |v||w| and |v||x|. Their product has the same total exponent, proving this hexagon on homogeneous tensors. Linearity extends the equation to arbitrary graded elements.
</details>

### Exercise 1.8 {#monoidal-categories-ex-internal-hom}

Give the two directions of the tensor–Hom correspondence for R-modules and check they are inverse.

<details><summary>Hint 1</summary>
Start with a map from B tensor A to C and evaluate it on pure tensors.
</details>
<details><summary>Hint 2</summary>
For the reverse direction, evaluate a map B to Hom(A,C) at each a.
</details>
<details><summary>Solution</summary>
Send h:B tensor A to C to the map b maps to the functional a maps to h(b tensor a). Conversely, send k:B to Hom(A,C) to the balanced bilinear rule (b,a) maps to k(b)(a), which descends to B tensor A. Evaluating either composite on b and a returns its original value, so the constructions are inverse and natural.
</details>

### Exercise 1.9 {#monoidal-categories-ex-dual-basis}

Use a finite dual basis to prove that a finitely generated projective R-module is dualizable.

<details><summary>Hint 1</summary>
Write the coevaluation of one as a finite sum of m_i tensor f_i.
</details>
<details><summary>Hint 2</summary>
Evaluate the first triangle on m and the second on an arbitrary functional.
</details>
<details><summary>Solution</summary>
The first triangle maps m to the sum of f_i(m)m_i, equal to m by the dual-basis identity. The second maps a functional f to the sum of f(m_i)f_i; evaluating at m gives f of the same dual-basis sum, hence f(m). Both identities hold, so Hom_R(M,R) with these maps is a dual.
</details>

### Exercise 1.10 {#monoidal-categories-ex-trace}

Compute the categorical trace of an endomorphism of a finite free module from its matrix.

<details><summary>Hint 1</summary>
Insert the basis coevaluation sum.
</details>
<details><summary>Hint 2</summary>
After applying the endomorphism, the dual basis evaluation kills off-diagonal terms.
</details>
<details><summary>Solution</summary>
Coevaluation sends one to the sum of e_i tensor e_i-star. Applying T gives the sum of T(e_i) tensor e_i-star. After symmetry and evaluation the result is the sum of e_i-star(T(e_i)), which is the sum of diagonal matrix entries. Thus the categorical trace is the usual trace, independent of the basis used to calculate it.
</details>

## Sources

Original primary exposition and exercises adapted in topic from the retained Euler Morphisms First monoidal chapter, whose source, five questions and solutions remain live unchanged. The general coherence theorem is imported with its exact scope from Mac Lane, *Categories for the Working Mathematician*, second edition, Chapter VII, Section 2. The tensor–Hom and finite-projective background is developed in Euler's Homological Algebra chapters.

## Summary

Monoidal structure consists of tensor, unit and coherent natural comparison maps. Functoriality supplies interchange; pentagon and triangle supply the finite axioms, while general coherence is an identified import. Strong and lax functors differ by whether their comparison maps are invertible. Symmetry permits duality and trace, and in modules dualizability is exactly finite projectivity. The next chapter uses a monoidal category as the home for hom-objects rather than merely as a source of examples.
