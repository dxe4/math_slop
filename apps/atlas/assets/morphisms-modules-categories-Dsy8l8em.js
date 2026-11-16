var e=`---
id: book-morphisms-modules-categories
title: "Homological Algebra"
level: graduate
estimated_minutes: 360
status: draft
license: CC BY-SA 4.0
---

# Homological Algebra

The primary L4–L5 manuscript has fourteen chapters, beginning with modules and resolutions before Tor and Ext. Every primary chapter includes developed proofs, worked examples and exercises with two hints and full solutions. Statements imported from deeper theories are explicitly identified with their hypotheses and sources. Preparation is [Introduction to Category Theory](/books/library-book-introduction-to-category-theory/) and the algebra book’s rings, ideals and module preparation. Every additional hypothesis is stated locally.

## Primary reading route

1. [Modules over a Ring](morphisms-modules-categories/modules-linear-algebra-over-a-ring.md)
2. [Projective, Injective and Flat Modules](morphisms-modules-categories/projective-injective-flat-modules.md)
3. [Tensor Products and Hom](morphisms-modules-categories/tensor-products-hom.md)
4. [Complexes and Homology](morphisms-modules-categories/complexes-and-homology.md)
5. [Abelian Categories](morphisms-modules-categories/abelian-categories.md)
6. [Derived Functors: Tor and Ext](morphisms-modules-categories/derived-functors-tor-ext.md)
7. [Extensions and Ext¹](morphisms-modules-categories/extensions-ext-one.md)
8. [Group Cohomology](morphisms-modules-categories/group-cohomology.md)
9. [Homological Dimension](morphisms-modules-categories/homological-dimension.md)
10. [Derived Categories](morphisms-modules-categories/derived-categories.md)
11. [Triangulated Categories](morphisms-modules-categories/triangulated-categories.md)
12. [Spectral Sequences and Filtrations](morphisms-modules-categories/spectral-sequences-filtrations.md)
13. [Duality and Local Cohomology](morphisms-modules-categories/duality-local-cohomology.md)
14. [Exactness and Adjoint Functors](morphisms-modules-categories/exactness-adjoint-functors.md)

The earlier category readings and numbered chapters remain separately registered under their original identities. The expanded semantic successor treatments preserve their mathematics and develop the missing module, resolution and derived-functor foundations. The retained overview below describes that earlier broad sequence; its advanced topics are additional readings, rather than prerequisites silently inserted into the new route. The existing print edition also covers that earlier sequence. No independent review of this new reorganisation is claimed.

## Retained earlier overview


Element calculations answer many algebra questions, but modern algebra is often controlled by maps: kernels, quotients, extensions, functors, and universal properties. This book develops a morphism-first viewpoint from modules through exact sequences to categories and natural transformations. Its purpose differs from a standard algebra text: it asks not only what an object contains, but how it participates in every compatible map.

This overview assumes groups, rings and ideals, linear maps, and mathematical proof. Unless stated otherwise, rings are commutative with identity and modules are unital left modules. It gives an elementary orientation to the opening module-and-category arc. The registered graduate chapters go much further: model and higher categories, topoi, spectral sequences, homological dimension, and duality require the additional prerequisites and imported-theorem boundaries stated in their reader guide and chapter openings.

## 1. Modules: linear algebra over a ring

An $R$-module $M$ is an abelian group under addition with scalar multiplication satisfying

$r(m+n)=rm+rn$, $(r+s)m=rm+sm$, $(rs)m=r(sm)$, and $1m=m$.

Every vector space is a module over its field. Every abelian group is a $\\mathbb{Z}$-module. An ideal of a commutative ring is a module over that ring.

The field hypothesis makes vector spaces unusually well behaved. Over an integral domain, a nonzero element killed by a nonzero scalar is called a **torsion element**. (Over a general ring with zero divisors, one must specify which notion of torsion is intended.) In the $\\mathbb{Z}$-module $\\mathbb{Z}/12\\mathbb{Z}$, the class of $4$ is killed by $3$. Bases may not exist, and submodules need not split off as direct summands.

An $R$-linear map $f:M\\to N$ preserves addition and scalar multiplication. Its kernel and image are submodules. The quotient $M/\\operatorname{ker} f$ is naturally isomorphic to $\\operatorname{im} f$, just as for groups.

## 2. Free modules and presentations

The free module $R^{n}$ consists of $n$-tuples and has the standard basis. More invariantly, a free module on a set $S$ comes with a map $i:S\\to F(S)$ such that every set map from $S$ to the underlying set of an $R$-module $M$ extends uniquely to an $R$-linear map $F(S)\\to M$.

This is a **universal property**. It characterizes the free module up to unique isomorphism without choosing coordinates.

A finitely presented module is a cokernel

$R^{m} \\xrightarrow{A} R^{n} \\to M \\to 0$.

The columns of $A$ are relations among $n$ generators. Over $\\mathbb{Z}$, the presentation matrix

$A=\\begin{pmatrix}6&0\\\\0&10\\end{pmatrix}$

gives $M\\cong \\mathbb{Z}/6\\mathbb{Z} \\oplus \\mathbb{Z}/10\\mathbb{Z}$. Integer row and column operations by invertible matrices preserve the isomorphism type of the cokernel. Smith normal form diagonalizes a general integer matrix into divisibility-ordered entries and yields the classification of finitely generated abelian groups.

## 3. Noetherian modules and finite control

An $R$-module $M$ is **Noetherian** when every ascending chain of submodules stabilizes. Equivalently, every submodule of $M$ is finitely generated. One direction builds a strictly increasing chain by repeatedly choosing an element outside the submodule already generated; the other observes that a finite generating set for the union of a chain must appear at some finite stage.

A commutative ring is Noetherian when it is Noetherian as a module over itself, equivalently when every ideal is finitely generated. Fields, principal ideal domains, and $\\mathbb{Z}$ are Noetherian. The polynomial ring $k[x_{1},x_{2},\\ldots]$ in infinitely many variables is not: the ideal $(x_{1},x_{2},\\ldots)$ cannot be generated by finitely many variables, and the chain $(x_{1})\\subsetneq(x_{1},x_{2})\\subsetneq\\cdots$ never stabilizes.

Finite control is stable under the morphism constructions in this book. In a short exact sequence $0\\to A\\to B\\to C\\to 0$, the middle module $B$ is Noetherian if and only if both $A$ and $C$ are Noetherian. Consequently, quotients and submodules of Noetherian modules are Noetherian, and every finitely generated module over a Noetherian ring is Noetherian.

Hilbert's basis theorem states that if $R$ is a commutative Noetherian ring, then $R[x]$ is Noetherian. Iterating gives finite-variable polynomial rings over a field. The finite-variable hypothesis matters; the infinite-variable counterexample above shows why.

## 4. Exact sequences compress several claims

A sequence of module maps

$\\cdots\\to A_{i-1} \\xrightarrow{f} A_{i} \\xrightarrow{g} A_{i+1}\\to \\cdots$

is **exact at $A_{i}$** when $im f=ker g$. Exactness means everything produced by the incoming map is precisely what the outgoing map kills.

A short exact sequence

$0\\to A --i\\to B --p\\to C\\to 0$

says three things: $i$ is injective, $p$ is surjective, and $im i=ker p$. Thus $A$ is identified with a submodule of $B$, while $C\\cong B/A$.

**Worked example.** For any positive integer $n$,

$0\\to \\mathbb{Z} \\xrightarrow{\\,\\times n\\,} \\mathbb{Z} \\xrightarrow{\\,\\bmod n\\,} \\mathbb{Z}/n\\mathbb{Z}\\to 0$

is exact. Multiplication by $n$ is injective; reduction modulo $n$ is surjective; its kernel is exactly $nZ$, the image of the first map.

Exactness is local: verify it at each object. A diagram can look symmetric without being exact.

## 5. Splitting is extra structure

A short exact sequence splits if there is a map $s:C\\to B$ with $p\\circ s=id_{C}$, equivalently a retraction $r:B\\to A$ with $r\\circ i=id_{A}$. Then $B\\cong A\\oplus C$.

Every short exact sequence of vector spaces splits: choose a basis of $A$, extend it to a basis of $B$, and use the complementary span. The splitting is generally not canonical because it depends on choices.

Modules behave differently. The sequence

$0\\to \\mathbb{Z} \\xrightarrow{\\,\\times 2\\,} \\mathbb{Z} \\xrightarrow{\\,\\bmod 2\\,} \\mathbb{Z}/2\\mathbb{Z}\\to 0$

does not split as $\\mathbb{Z}$-modules. A section would send the nonzero class to an integer $z$ with $2z=0$, but $\\mathbb{Z}$ has no nonzero torsion. Thus exactness does not imply direct-sum decomposition.

This failure is measurable: extension groups later classify ways in which $C$ can be built on top of $A$ without splitting.

## 6. Categories organize composable maps

A **category** $C$ consists of objects, sets of morphisms $Hom_{C}(A,B)$, associative composition, and an identity morphism for every object. Examples include:

- sets and functions;
- groups and group homomorphisms;
- $R$-modules and linear maps;
- topological spaces and continuous maps;
- a group viewed as a one-object category, with group elements as morphisms.

Category theory does not erase elements; it identifies constructions whose real content is how maps compose.

An object $0$ is **initial** if for every $X$ there is exactly one map $0\\to X$. An object $1$ is **terminal** if every $X$ has exactly one map $X\\to 1$. In modules, the zero module is both. In sets, the empty set is initial and every singleton is terminal.

Universal objects are unique up to unique isomorphism. If $I$ and $I'$ are initial, unique maps go each way. Each composite is an endomorphism of an initial object; uniqueness forces it to be the identity.

## 7. Products, coproducts, kernels, and cokernels

A product $A\\times B$ comes with projections to $A$ and $B$ such that any pair of maps $X\\to A$, $X\\to B$ factors uniquely through $X\\to A\\times B$. A coproduct reverses the arrows.

In finite-dimensional vector spaces, product and coproduct are represented by the same direct sum. In sets they differ: Cartesian product versus disjoint union. The diagrams, not the notation, define the construction.

In the category of modules, a kernel of $f:M\\to N$ is a universal map $K\\to M$ whose composite with $f$ is zero. Its underlying elements are the familiar kernel. A cokernel is the universal map $N\\to Q$ killing the image of $f$; concretely $Q=N/im f$.

The image can then be described categorically, and exactness becomes a statement that a kernel and image agree in the appropriate sense.

## 8. Functors transport structure

A covariant functor $F:C\\to D$ sends objects to objects and morphisms to morphisms while preserving identities and composition:

$F(id_{A})=id_{F(A)}$, $F(g\\circ f)=F(g)\\circ F(f)$.

Examples:

- the forgetful functor from groups to sets;
- the free-group functor from sets to groups;
- $Hom_{R}(M,-)$, which sends a module $N$ to the abelian group of maps $M\\to N$;
- homology, which sends a chain complex to its homology modules.

A contravariant functor reverses arrows. The assignment $Hom_{R}(-,N)$ is contravariant in its first input: precomposing with $f:M'\\to M$ sends a map $M\\to N$ to a map $M'\\to N$.

Variance is not cosmetic. Writing the wrong arrow direction makes later naturality squares ill-typed.

## 9. Natural transformations are coherent maps

Given functors $F,G:C\\to D$, a **natural transformation** $\\eta :F\\Rightarrow G$ assigns a morphism $\\eta_{A}:F(A)\\to G(A)$ to every object such that for every $f:A\\to B$,

$G(f)\\circ \\eta_{A} = \\eta_{B}\\circ F(f)$.

The square commutes: transform then transport equals transport then transform.

**Worked example.** For finite-dimensional vector spaces, define $\\eta_{V}:V\\to V^{**}$ by $\\eta_{V}(v)(\\varphi)=\\varphi(v)$. For a linear map $T:V\\to W$, both routes from $V$ to $W^{**}$ send $v$ to the functional on $W^*$ given by $\\psi\\mapsto\\psi(Tv)$. Therefore the canonical double-dual map is natural.

The analogous isomorphism from $V$ to a coordinate space $F^{n}$ is not natural without a chosen basis. Naturality distinguishes canonical constructions from coordinated coincidences.

## 10. Adjunctions encode best approximations

An adjunction $F\\dashv U$ between categories gives natural bijections

$Hom_{D}(FX,Y) \\cong Hom_{C}(X,UY)$.

For the free module functor $F:Set\\to R-Mod$ and forgetful functor $U$, a linear map from $F(S)$ to $M$ is the same data as an arbitrary function from $S$ to the underlying set of $M$. The bijection is natural in both $S$ and $M$.

The unit sends each generator into the underlying set of its free module. The counit evaluates a formal linear combination in a module. The triangle identities say “freely generate then evaluate” behaves coherently.

Adjunctions unify free objects, tensor-Hom relationships, localization, and many geometric constructions. They do not mean the functors are inverses; the hom-set correspondence is the promise.

## 11. Exact functors and obstructions

A functor between abelian categories is left exact if it preserves the beginning of short exact sequences and right exact if it preserves the end. The functor $Hom_{R}(M,-)$ is left exact but need not preserve surjections. Tensoring $-\\otimes_{R} N$ is right exact but need not preserve injections.

The failure is meaningful. Derived functors $Ext$ and $Tor$ measure it using resolutions. Before using that machinery, always identify:

1. the original exact sequence;
2. the functor applied;
3. the exactness position that can fail;
4. the hypotheses, such as projectivity or flatness, that prevent failure.

The [chain complexes deep dive](#/item/deep-dive-chain-complexes-derived) constructs homology and explains this obstruction language.

## Common errors

- Treating every module like a vector space and dividing by a nonunit scalar.
- Reading $0\\to A\\to B$ as exact without checking the displayed map is injective.
- Assuming every short exact sequence splits.
- Calling two objects “the same by universality” without proving both satisfy the same mapping property.
- Forgetting whether a Hom functor is covariant or contravariant in a given input.
- Checking a naturality square only for one favorite object.
- Treating an adjunction as an isomorphism of categories.

## Exercises with worked answers

### 1. A nonsplitting sequence

Show $0\\to \\mathbb{Z}/2\\mathbb{Z}\\to \\mathbb{Z}/4\\mathbb{Z}\\to \\mathbb{Z}/2\\mathbb{Z}\\to 0$, where the first map sends the class of $1$ to the class of $2$ and the second is reduction modulo two, does not split.

**Answer.** A splitting would make $\\mathbb{Z}/4\\mathbb{Z}\\cong \\mathbb{Z}/2\\mathbb{Z}\\oplus \\mathbb{Z}/2\\mathbb{Z}$. The left group has an element of order four, while every nonzero element of the right group has order two. Hence no such module isomorphism exists.

### 2. Initial and terminal groups

Identify initial and terminal objects in the category of groups.

**Answer.** The trivial group is both. There is exactly one homomorphism from it to any group, and exactly one homomorphism from any group to it.

### 3. A universal product

Given module maps $f:X\\to A$ and $g:X\\to B$, write the unique map to $A\\oplus B$ realizing the product property.

**Answer.** Send $x$ to $(f(x),g(x))$. Projection recovers each map, and any map with those projections must have exactly these coordinates.

### 4. Naturality check

For an abelian group $A$, let $\\eta_{A}:A\\to A$ be multiplication by $n$. Show these maps form a natural transformation of the identity functor.

**Answer.** For any homomorphism $f:A\\to B$, $f(na)=nf(a)$. Hence $f\\circ \\eta_{A}=\\eta_{B}\\circ f$.

### 5. Exactness under Hom

Apply $\\operatorname{Hom}_{\\mathbb{Z}}(\\mathbb{Z}/2\\mathbb{Z},-)$ to $\\mathbb{Z} \\xrightarrow{\\,\\times 2\\,} \\mathbb{Z}$. Why is the induced map between Hom groups uninformative?

**Answer.** Every homomorphism from $\\mathbb{Z}/2\\mathbb{Z}$ to torsion-free $\\mathbb{Z}$ is zero, so both Hom groups are zero. This illustrates that a functor can lose information; the longer exact sequence and derived functors are needed to record the obstruction.

## Continue

Read [Prime Ideals and Localization](#/item/deep-dive-prime-ideals-localization) for a universal construction inside commutative algebra. Then read [Chain Complexes, Homology, Ext, and Tor](#/item/deep-dive-chain-complexes-derived) for the systematic study of exactness failure.
`;export{e as default};