var e=`---
id: book-algebraic-topology-chains-spaces
title: "Chains, Spaces, and Invariants: Algebraic Topology"
level: graduate
estimated_minutes: 4200
license: CC BY-SA 4.0
---

# Chains, Spaces, and Invariants: Algebraic Topology {#section-1-chains-spaces-and-invariants-algebraic-topology}

Algebraic topology turns deformation problems into algebra without pretending the translation is free. This book develops fundamental groups, covering spaces, homology, cohomology, and exact sequences, while identifying the hypotheses behind the standard computational tools. It assumes point-set topology, groups, modules, and comfort with quotient constructions. Category language is explained where used.

Use the [topology proof book](#/item/book-topology-proof-counterexample) to repair point-set prerequisites and the [simplicial computation recipe](#/item/recipe-simplicial-homology-computation) for an executable finite model.

<a id="section-5-current-seventeen-chapter-route"></a>
## Current seventeen-chapter route {#section-7-current-seventeen-chapter-route}

This L4 book assumes [Topology Through Proof and Counterexample](topology-proof-counterexample.md) and [Abstract Algebra](algebra-patterns-structure.md), together with working finite-dimensional linear algebra. Category language and the required chain constructions are developed within the route.

| Chapter | Reading |
| --- | --- |
| 1 | [The Functorial Bargain](algebraic-topology-chains-spaces/the-functorial-bargain.md) |
| 2 | [Homotopy and Homotopy Equivalence](algebraic-topology-chains-spaces/homotopy-loops-and-deformation.md) |
| 3 | [Fundamental Group and Basepoints](algebraic-topology-chains-spaces/fundamental-group-and-basepoints.md) |
| 4 | [Van Kampen as a Pushout](algebraic-topology-chains-spaces/van-kampen-as-a-pushout.md) |
| 5 | [Coverings and Monodromy](algebraic-topology-chains-spaces/coverings-and-monodromy.md) |
| 6 | [Classification of Coverings and Deck Groups](algebraic-topology-chains-spaces/classification-of-coverings-and-deck-groups.md) |
| 7 | [CW Complexes](algebraic-topology-chains-spaces/cw-complexes.md) |
| 8 | [Chain Complexes and Homology](algebraic-topology-chains-spaces/chain-complexes-and-homology.md) |
| 9 | [Homotopy Invariance and Degree](algebraic-topology-chains-spaces/homotopy-invariance-and-degree.md) |
| 10 | [Exact Sequences as Conservation Laws](algebraic-topology-chains-spaces/exact-sequences-as-conservation-laws.md) |
| 11 | [Computations with Cells](algebraic-topology-chains-spaces/computations-with-cells.md) |
| 12 | [Degree, Brouwer and Borsuk–Ulam](algebraic-topology-chains-spaces/degree-brouwer-and-borsuk-ulam.md) |
| 13 | [Coefficients, Universal Coefficients and Künneth](algebraic-topology-chains-spaces/coefficients-and-kunneth.md) |
| 14 | [Cohomology and Products](algebraic-topology-chains-spaces/cohomology-and-products.md) |
| 15 | [Manifold Duality](algebraic-topology-chains-spaces/manifold-duality.md) |
| 16 | [Hurewicz and Higher Homotopy: A First Look](algebraic-topology-chains-spaces/hurewicz-first-look.md) |
| 17 | [Persistent Homology and Computational Topology](algebraic-topology-chains-spaces/persistent-homology-and-computational-topology.md), optional |

Use the [reader guide](algebraic-topology-chains-spaces/front-matter/reader-guide.md) for proof dependencies and explicit imports. The CW chapter proves homotopy extension and imports general relative cellular approximation. The duality chapter specifies its combinatorial structure; general topological duality and higher Hurewicz retain their stated external theorem boundaries. The original specialist readings continue in [Advanced Algebraic Topology](advanced-algebraic-topology.md). Existing aliases and exercise identities remain attached to their canonical mathematical content.

<a id="section-31-earlier-thematic-overview-retained"></a>
## Earlier thematic overview, retained {#section-33-earlier-thematic-overview-retained}

The compact sections and five problems below preserve the earlier sixteen-topic overview. Their numbering is historical, and the later specialist topics describe the Advanced continuation. The current main route is the table above; the overview does not claim to supply the complete proofs now developed in the chapter sources.

<a id="section-35-1-the-functorial-bargain"></a>
## 1. The functorial bargain {#section-37-1-the-functorial-bargain}

A topological invariant is most useful when maps act on it. A **functor** $F$ sends each space $X$ to an algebraic object $F(X)$ and each continuous map $f:X\\to Y$ to a morphism $F(f):F(X)\\to F(Y)$, preserving identities and composition. Homotopy invariance adds $f\\simeq g \\Rightarrow F(f)=F(g)$.

Functoriality prevents arbitrary choices from contaminating calculations. If a homeomorphism has inverse, its induced morphism does too. If a retraction $r:X\\to A$ satisfies $r\\circ i=\\operatorname{id}_{A}$, then $F(r)\\circ F(i)=\\operatorname{id}_{F(A)}$, so $F(i)$ is injective and $F(r)$ is surjective in algebraic categories where those words apply.

No invariant here is complete for all spaces. Homology deliberately linearizes; the fundamental group retains noncommutativity but only sees one-dimensional loops; cohomology products recover interactions that additive groups miss.

<a id="section-43-2-fundamental-group-with-basepoints-exposed"></a>
## 2. Fundamental group with basepoints exposed {#section-45-2-fundamental-group-with-basepoints-exposed}

For a based space $(X,x_{0})$, $\\pi_{1}(X,x_{0})$ is the group of endpoint-fixed homotopy classes of loops. A based map induces a homomorphism by composition. An unbased path-connected space has a fundamental group determined only up to noncanonical isomorphism: a path between basepoints induces a change-of-basepoint map, and changing that path can conjugate the result.

For $S^{1}$, lift through $p:\\mathbb{R}\\to S^{1}$, $p(t)=e^{2\\pi i t}$. Every loop at $1$ has a unique lift starting at $0$; its endpoint is an integer. Endpoint addition matches loop concatenation, giving $\\pi_{1}(S^{1})\\cong \\mathbb{Z}$.

For a connected graph, collapse a spanning tree. The quotient is homotopy equivalent to a wedge of $E-V+1$ circles, so its fundamental group is free of that rank. This formula assumes a finite connected graph; with $c$ components, first homology has rank $E-V+c$, while a single fundamental group only belongs to one chosen component.

<a id="section-51-3-van-kampen-as-a-pushout"></a>
## 3. Van Kampen as a pushout {#section-53-3-van-kampen-as-a-pushout}

Suppose $X=U\\cup V$, with $U,V,U\\cap V$ open and path-connected and the basepoint in the intersection. Seifert–van Kampen states that $\\pi_{1}(X)$ is the pushout

$\\pi_{1}(U) *_{\\pi_{1}(U\\cap V)} \\pi_{1}(V)$.

Concretely, start with the free product and impose relations identifying the two images of each loop from the intersection. This formulation computes presentations rather than only group sizes.

**Worked torus.** A CW decomposition has one vertex, two oriented one-cells $a,b$, and one two-cell attached along $aba^{-1}b^{-1}$. A cellular van Kampen argument gives

$\\pi_{1}(T^{2})=\\langle a,b \\mid aba^{-1}b^{-1}=e\\rangle\\cong \\mathbb{Z}^{2}$.

The projective plane has one one-cell $a$ and a two-cell attached by $a^{2}$, giving $\\pi_{1}(\\mathbb{RP}^{2})\\cong \\mathbb{Z}/2\\mathbb{Z}$. Attaching maps matter; two spaces with the same number of cells can have different invariants.

When intersections are not path-connected, the fundamental groupoid version is safer than forcing artificial paths. A theorem’s convenient classroom form is not its most general form.

<a id="section-67-4-coverings-and-monodromy"></a>
## 4. Coverings and monodromy {#section-69-4-coverings-and-monodromy}

A covering map $p:E\\to B$ is locally a product with a discrete fiber. Path lifting and homotopy lifting give a right action of $\\pi_{1}(B,b_{0})$ on the fiber $p^{-1}(b_{0})$: lift a loop from a chosen point and record its endpoint. If $B$ is path-connected and locally path-connected, this **monodromy action** is transitive exactly when $E$ is path-connected. The local path-connectedness hypothesis ensures that connected components of the covering space are path components.

If $B$ is path-connected, locally path-connected, and semilocally simply connected, connected coverings correspond to conjugacy classes of subgroups of $\\pi_{1}(B)$. Based coverings correspond to actual subgroups. Normal subgroups correspond to regular coverings; their deck group is the quotient by the subgroup when the subgroup is normal.

The Hawaiian earring warns against dropping local hypotheses. Infinitely many circles shrink toward a common point; arbitrarily small neighborhoods contain essential loops. Its covering theory and fundamental group are much wilder than the finite wedge analogy suggests.

<a id="section-75-5-chain-complexes-and-homology"></a>
## 5. Chain complexes and homology {#section-77-5-chain-complexes-and-homology}

A chain complex of modules is a sequence

$\\cdots\\longrightarrow C_{k+1}\\xrightarrow{d_{k+1}} C_k\\xrightarrow{d_k} C_{k-1}\\longrightarrow\\cdots$

with $d_k\\circ d_{k+1}=0$. Cycles are $Z_k=\\ker d_k$, boundaries are $B_k=\\operatorname{im}d_{k+1}$, and $H_k=Z_k/B_k$.

For singular homology, $C_{k}(X)$ is the free abelian group on continuous maps from the standard $k$-simplex into $X$. The alternating face formula defines the boundary. Singular simplices are abundant, which makes invariance natural but direct computation difficult.

For a simplicial complex, chains are generated by its oriented simplices. Simplicial and singular homology agree for spaces represented by simplicial complexes. The agreement is a theorem, not an identification by notation.

**The cancellation $d^{2}=0$.** In $d(d[v_{0},…,v_{k}])$, deleting vertex $i$ and then $j$ reaches the same codimension-two face as deleting the shifted $j$ and then $i$. The two terms have opposite signs. Over $F_{2}$, they appear twice and cancel because $1+1=0$.

<a id="section-89-6-computations-with-cells"></a>
## 6. Computations with cells {#section-91-6-computations-with-cells}

Cellular homology gives one free generator for each cell of a CW complex. Its differential records degrees of attaching maps. For a torus with cells in counts $(1,2,1)$, both cellular differentials vanish, so

$H_{0}(T^{2};Z)=Z$, $H_{1}(T^{2};Z)=Z^{2}$, $H_{2}(T^{2};Z)=Z$.

For $\\mathbb{RP}^{2}$, the cellular complex over $\\mathbb{Z}$ is

$0\\longrightarrow \\mathbb{Z}\\xrightarrow{\\,2\\,}\\mathbb{Z}\\xrightarrow{\\,0\\,}\\mathbb{Z}\\longrightarrow 0$.

Therefore $H_{2}=0$, $H_{1}=Z/2$, and $H_{0}=Z$. Over $F_{2}$, the multiplication-by-two map becomes zero, producing Betti numbers $(1,1,1)$. Coefficients change what homology detects; field-valued Betti numbers do not record integral torsion.

The Euler–Poincaré formula for a finite chain complex of finite-dimensional vector spaces is

$\\sum (-1)^{k} dim C_{k} = \\sum (-1)^{k} dim H_{k}$.

Write $dim C_{k}=dim B_{k}+dim H_{k}+dim B_{k-1}$ and observe boundary dimensions cancel in the alternating sum.

<a id="section-107-7-exact-sequences-as-conservation-laws"></a>
## 7. Exact sequences as conservation laws {#section-109-7-exact-sequences-as-conservation-laws}

A sequence is exact when the image of each map equals the kernel of the next. A short exact sequence

$0\\to A\\to B\\to C\\to 0$

says $A$ embeds as precisely the information in $B$ lost on the way to $C$, while every element of $C$ is reached. It need not split unless extra structure supplies a section or retraction.

A pair $(X,A)$ has relative chains $C_*(X,A)=C_*(X)/C_*(A)$ and a long exact sequence

$\\cdots\\longrightarrow H_k(A)\\longrightarrow H_k(X)\\longrightarrow H_k(X,A)\\xrightarrow{\\partial}H_{k-1}(A)\\longrightarrow\\cdots$.

The connecting homomorphism is not magic. Represent a relative cycle by a chain in $X$; its boundary lies in $A$, and take that boundary’s homology class. Choices differ by boundaries, which is the well-definedness proof.

For reduced homology, $\\widetilde H_{0}$ removes the ubiquitous copy of $\\mathbb{Z}$ from a nonempty path-connected space. The suspension isomorphism $\\widetilde H_{k}(\\Sigma X)\\cong \\widetilde H_{k-1}(X)$ follows from Mayer–Vietoris applied to two contractible cones.

<a id="section-123-8-mayer-vietoris"></a>
## 8. Mayer–Vietoris {#section-125-8-mayer-vietoris}

For $X=A\\cup B$ with interiors covering $X$ (or suitable excisive hypotheses), a long exact sequence connects the homology of $A\\cap B$, $A$, $B$, and $X$:

$\\cdots\\longrightarrow H_k(A\\cap B)\\longrightarrow H_k(A)\\oplus H_k(B)\\longrightarrow H_k(X)\\xrightarrow{\\partial}H_{k-1}(A\\cap B)\\longrightarrow\\cdots$.

**Sphere calculation.** Cover $S^{n}$ by slightly enlarged upper and lower hemispheres. Each is contractible; their intersection deformation retracts to $S^{n-1}$. Reduced Mayer–Vietoris gives

$\\tilde H_{k}(S^{n})\\cong \\tilde H_{k-1}(S^{n-1})$.

Starting at $S^{0}$, obtain for $n\\ge1$ $H_{0}(S^{n})=Z$, $H_{n}(S^{n})=Z$, and zero in other positive degrees. This does not compute the ring structure of cohomology or homotopy groups.

Excision underlies relative homology and Mayer–Vietoris. Removing a subspace whose closure lies in the interior of $A$ does not change $H_*(X,A)$. Removing an arbitrary closed or boundary-touching set without checking the hypothesis can change the result.

<a id="section-137-9-cohomology-and-products"></a>
## 9. Cohomology and products {#section-139-9-cohomology-and-products}

Apply $\\operatorname{Hom}(-,R)$ to chains to obtain cochains. The coboundary $\\delta$ is dual to the boundary and satisfies $\\delta^{2}=0$. Cohomology is $H^k=\\ker\\delta/\\operatorname{im}\\delta$.

For a commutative coefficient ring $R$, the cup product

$H^{p}(X;R)\\times H^{q}(X;R)\\to H^{p+q}(X;R)$

makes cohomology a graded ring. It is graded-commutative: $\\alpha \\cup \\beta =(-1)^{pq}\\beta \\cup \\alpha$. Additive groups can agree while cup products distinguish spaces.

For the torus, degree-one classes $a,b$ satisfy $a\\smile b$ equal to a generator of $H^{2}(T^{2};\\mathbb{Z})$, while $a\\smile a=b\\smile b=0$. A wedge $S^{1}\\vee S^{1}\\vee S^{2}$ has the same additive homology groups as the torus but products of positive-degree classes from different wedge summands vanish. Thus they are not homotopy equivalent.

The integral universal coefficient theorem relates cohomology to $\\operatorname{Hom}_{\\mathbb Z}$ and $\\operatorname{Ext}_{\\mathbb Z}$. A field-valued target does not by itself kill that integral Ext term. When chains and cochains are both taken over a field $F$, linear algebra instead gives $H^k(X;F)\\cong\\operatorname{Hom}_F(H_k(X;F),F)$. Over $\\mathbb{Z}$, torsion cannot be ignored.

<a id="section-151-10-homotopy-invariance-and-degree"></a>
## 10. Homotopy invariance and degree {#section-153-10-homotopy-invariance-and-degree}

Chain homotopic chain maps induce equal maps on homology. A topological homotopy produces a chain homotopy through the prism construction, proving homotopic maps induce the same homology homomorphism.

For $n\\ge1$ and a continuous map $f:S^{n}\\to S^{n}$, the induced map on $H_{n}(S^{n};\\mathbb{Z})\\cong \\mathbb{Z}$ is multiplication by an integer $\\operatorname{deg} f$, the **degree**. Degree is homotopy invariant and multiplicative under composition.

If $f$ misses a point, it factors through the contractible punctured sphere, so its degree is zero. Therefore a nonzero-degree map is surjective. The antipodal map on $S^{n}$ has degree $(-1)^{n+1}$. A fixed-point argument for maps of a disk can be derived by assuming a retraction to its boundary, whose induced homology would contradict functoriality.

<a id="section-159-11-manifold-duality"></a>
## 11. Manifold duality {#section-161-11-manifold-duality}

If $M$ is a connected closed $n$-manifold that is oriented over a commutative coefficient ring $R$, Poincaré duality gives

$H^{k}(M;R)\\cong H_{n-k}(M;R)$

through cap product with the $R$-fundamental class. With integer coefficients, orientability is required for an untwisted global fundamental class. Noncompact manifolds require compactly supported cohomology or locally finite homology; manifolds with boundary use Poincaré–Lefschetz duality.

For a closed oriented surface of genus $g$, the Betti numbers over a field are $(1,2g,1)$, giving $\\chi =2-2g$. The cohomology pairing on $H^{1}$ also remembers an alternating intersection form.

Alexander duality relates the reduced cohomology of a compact, locally contractible subset $A\\subseteq S^{n}$ to reduced homology of its complement. It helps knot theory: the complement of a tame knot has $H_{1}\\cong \\mathbb{Z}$, but that same abelian group occurs for every tame knot, so the nonabelian knot group contains more distinguishing information.

<a id="section-171-12-fibrations-spectral-sequences-and-honest-boundaries"></a>
## 12. Fibrations, spectral sequences, and honest boundaries {#section-173-12-fibrations-spectral-sequences-and-honest-boundaries}

A fibration has a homotopy lifting property and yields a long exact sequence of homotopy groups. Coverings are fibrations with discrete fibers, but a general surjection is not a fibration. The path-loop fibration $\\Omega X\\to PX\\to X$, with contractible total space $PX$, relates $\\pi_{k}(X)$ to $\\pi_{k-1}(\\Omega X)$.

Spectral sequences organize successive approximations to homology or cohomology. A page $E_{r}$ carries a differential, and $E_{r+1}$ is its homology; under convergence hypotheses the limiting page describes an associated graded object of a filtration, not automatically the target with all extension data resolved. “The spectral sequence collapses” does not by itself solve multiplicative or extension questions.

Homotopy groups of spheres are mostly difficult: $\\pi_{n}(S^{n})=Z$, but higher groups include intricate torsion. Stable homotopy, generalized cohomology, spectra, and obstruction theory are continuations, not consequences one should infer from the elementary homology table.

<a id="section-179-13-generalized-cohomology-and-spectra"></a>
## 13. Generalized cohomology and spectra {#section-181-13-generalized-cohomology-and-spectra}

A reduced generalized cohomology theory keeps homotopy invariance, exactness, excision, additivity, and suspension while dropping the dimension axiom. On pointed CW complexes, Brown representability packages such a theory into a representing spectrum. A general spectrum has structure maps $\\Sigma E_n\\to E_{n+1}$; an $\\Omega$-spectrum satisfies the stronger condition $E_n\\simeq\\Omega E_{n+1}$ after adjunction.

The sphere prespectrum represents stable cohomotopy after passage to the stable category or an $\\Omega$-spectrum replacement. Its stable homotopy coefficients arise from the directed systems $\\varinjlim_n\\pi_{n+k}(S^n)$. This construction needs the compatible spectrum structure; a suspension isomorphism for a single sequence of groups does not by itself manufacture stable homotopy groups.

<a id="section-185-14-obstructions-and-characteristic-classes"></a>
## 14. Obstructions and characteristic classes {#section-187-14-obstructions-and-characteristic-classes}

Obstruction theory asks whether a partial lift or section extends over successive CW skeleta. For a fibration with $(n-2)$-connected fiber and $n\\ge3$, the primary obstruction over the $n$-cells lies in cohomology with the local coefficient system $\\boldsymbol\\pi_{n-1}(F)$ induced by monodromy. Constant coefficients are justified only when the pulled-back action is trivial.

Characteristic classes record natural cohomological obstructions for bundles. Stiefel--Whitney classes apply to real bundles, Chern classes to complex bundles, and the Euler class of an oriented rank-$n$ real bundle obstructs a nowhere-zero section. Vanishing of selected classes is generally a necessary condition rather than a complete triviality test.

<a id="section-191-15-sheaves-and-local-coefficients"></a>
## 15. Sheaves and local coefficients {#section-193-15-sheaves-and-local-coefficients}

A sheaf encodes data that restrict and glue across open sets. Local systems record locally constant families with monodromy, and on suitably connected spaces they can be described through representations of the fundamental group. They are the natural coefficients for duality on nonorientable manifolds: the orientation local system repairs the failure of a global untwisted integral orientation class.

Sheaf cohomology is a derived local-to-global construction. The retained specialist reading introduces its role and basic computations in the Advanced continuation; the L4 core does not develop resolutions, derived categories, or Verdier duality.

<a id="section-197-16-persistent-homology"></a>
## 16. Persistent homology {#section-199-16-persistent-homology}

A finite filtration produces homology vector spaces and maps across scale. Over a fixed field, finite one-parameter persistence decomposes into interval modules represented by a barcode. In boundary-matrix reduction, a pivot in row $i$ of reduced column $j$ pairs the class created at simplex $i$ with the simplex $j$ that kills it.

For finite point clouds in a common metric space, Vietoris--Rips persistence obeys a Hausdorff stability bound, with the constant determined by the scale convention. That robustness theorem does not make every long bar meaningful, and it does not extend automatically to arbitrary filtrations. Interpretation requires a sampling model, a filtration choice, and uncertainty analysis appropriate to the application.

<a id="section-203-earlier-problems-with-retained-solutions"></a>
## Earlier problems with retained solutions {#section-205-earlier-problems-with-retained-solutions}

<a id="section-205-1-a-retraction-obstruction"></a>
### 1. A retraction obstruction {#section-207-1-a-retraction-obstruction}
<a id="algebraic-topology-overview-ex-1"></a>

Prove there is no retraction $r:D^{2}\\to S^{1}$ restricting to the identity on the boundary.

<details><summary>Hint 1</summary>

Write the retraction equation before applying homology.

</details>
<details><summary>Hint 2</summary>

The identity of a nonzero group cannot factor through the zero group.

</details>
<details><summary>Full solution</summary>

**Solution.** Let $i:S^{1}\\to D^{2}$ be inclusion. A retraction would satisfy $r\\circ i=\\operatorname{id}_{S^1}$. On $H_{1}$, this would give $r_*\\circ i_*=\\operatorname{id}_{\\mathbb{Z}}$. But $H_{1}(D^{2})=0$, so $i_*:\\mathbb{Z}\\to 0$ is zero and the composite is zero, a contradiction.

</details>

<a id="section-226-2-attach-a-two-cell"></a>
### 2. Attach a two-cell {#section-228-2-attach-a-two-cell}
<a id="algebraic-topology-overview-ex-2"></a>

Start from $S^{1}$ and attach a two-cell by a degree-$m$ map, with $m\\ne 0$. Compute cellular homology.

<details><summary>Hint 1</summary>

Use the degree as the cellular boundary coefficient.

</details>
<details><summary>Hint 2</summary>

The nonzero multiplication map on the integers is injective.

</details>
<details><summary>Full solution</summary>

**Solution.** The cellular chain complex is $0\\to \\mathbb{Z}\\xrightarrow{m}\\mathbb{Z}\\xrightarrow{0}\\mathbb{Z}\\to 0$. Multiplication by nonzero $m$ is injective, so $H_{2}=0$; its cokernel is $\\mathbb{Z}/m\\mathbb{Z}$, so $H_{1}=\\mathbb{Z}/m\\mathbb{Z}$; connectedness gives $H_{0}=\\mathbb{Z}$.

</details>

<a id="section-247-3-coefficients-expose-torsion"></a>
### 3. Coefficients expose torsion {#section-249-3-coefficients-expose-torsion}
<a id="algebraic-topology-overview-ex-3"></a>

Compute the same complex over $F_{p}$ when $p$ divides $m$ and when it does not.

<details><summary>Hint 1</summary>

Reduce the boundary coefficient in the selected field.

</details>
<details><summary>Hint 2</summary>

A nonzero element of a field is invertible.

</details>
<details><summary>Full solution</summary>

**Solution.** The differential is multiplication by the residue of $m$. If $p\\mid m$, it is zero, so $H_{2}\\cong \\mathbb{F}_{p}$ and $H_{1}\\cong \\mathbb{F}_{p}$. If $p\\nmid m$, it is an isomorphism, so both groups vanish. In either case, $H_{0}\\cong \\mathbb{F}_{p}$.

</details>

<a id="section-268-4-euler-consistency"></a>
### 4. Euler consistency {#section-270-4-euler-consistency}
<a id="algebraic-topology-overview-ex-4"></a>

A connected finite complex has simplex counts $(n_{0},n_{1},n_{2})=(6,15,10)$ and Betti numbers $\\beta_{0}=1$, $\\beta_{1}=0$. What must $\\beta_{2}$ be if there are no higher simplices?

<details><summary>Hint 1</summary>

Compute the alternating cell count first.

</details>
<details><summary>Hint 2</summary>

Equate it to the alternating Betti-number sum.

</details>
<details><summary>Full solution</summary>

**Solution.** The cell Euler characteristic is $6-15+10=1$. The homology sum is $1-0+\\beta_{2}$, so $\\beta_{2}=0$. If a claimed computation returned another value, a boundary rank or closure calculation would be wrong.

</details>

<a id="section-289-5-why-homology-misses-the-knot"></a>
### 5. Why homology misses the knot {#section-291-5-why-homology-misses-the-knot}
<a id="algebraic-topology-overview-ex-5"></a>

Why does $H_{1}$ of a knot complement usually fail to distinguish knots in $S^{3}$?

<details><summary>Hint 1</summary>

State the tame-knot version of Alexander duality.

</details>
<details><summary>Hint 2</summary>

Homology keeps only the abelianized knot-group information.

</details>
<details><summary>Full solution</summary>

**Solution.** For a tame knot $K\\cong S^1$, Alexander duality gives

$\\widetilde H_{1}(S^{3}\\setminus K;\\mathbb{Z})\\cong \\widetilde H^{1}(K;\\mathbb{Z})\\cong \\mathbb{Z}$.

Equivalently, this group is the abelianization of the knot group and records meridional winding. Every tame knot has this same $\\mathbb{Z}$, while their nonabelian groups and peripheral structures can differ.

</details>

<a id="section-314-research-continuation"></a>
## Research continuation {#section-316-research-continuation}

Study model categories or infinity-categories to organize homotopy-coherent constructions; generalized cohomology and spectra for stable phenomena; characteristic classes for bundles; sheaf cohomology for local-to-global questions; and persistent homology for filtered finite data. Each continuation changes both the algebraic object and the theorem that connects it to spaces. The invariant is only as trustworthy as that bridge.


<a id="section-319-sources"></a>
## Sources {#section-321-sources}

The thematic overview and its mathematical problems are retained from the earlier Euler source. The expanded chapter manuscript uses original exposition with chapter-specific references, principally Allen Hatcher's [author-hosted Algebraic Topology chapters](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html) and J. P. May's [author-hosted Concise Course](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf).

<a id="section-323-summary"></a>
## Summary {#section-325-summary}

The core route moves from homotopy and covering geometry to chains, exact sequences, products and duality. Each calculation keeps its maps, coefficients and hypotheses visible. Earlier specialist material and solution records remain available through their canonical continuations, while the seventeen current chapters provide the developed Draft reading route.
`;export{e as default};