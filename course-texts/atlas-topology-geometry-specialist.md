
# Homotopy, Schemes, and Curvature

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-topology-geometry-specialist) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Topology, Forms, and Persistent Shape](#/courses/atlas-topology-geometry-advanced) · [Manifolds and differential geometry](#/courses/course-smooth-manifolds).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A line bundle on the sphere can be described by an integer, an overlap function, a sheaf of modules, or a curvature form. These descriptions answer different questions. A negative-degree algebraic line bundle has no nonzero global algebraic section, although its underlying smooth bundle has many smooth sections with zeros. A nilpotent thickening changes the scheme without changing its complex points. A circle-bundle fundamental group sees the absolute value of a nonzero degree; a normalized curvature integral remembers its sign.

This graduate course develops actual general homotopy, characteristic-class, scheme and differential-geometric arguments, then joins them in three cumulative investigations. Work **TS-S01 through TS-S06**, **TS-P**, **TS-C**, **TS-R**, and the required software reproduction in that order. Read and solve the exact native assignments in TS-S01; the new lessons supply the missing constructions rather than asking a topic map to teach them. Study time depends on the selected reading, attempts and corrections. Neither older source estimates nor these suggested assignments measure this combined work.

The route assumes the [advanced topology course](#/courses/atlas-topology-geometry-advanced), including its actual chart, form, cohomology and persistence work, and the commutative-algebra preparation in [advanced abstract algebra](#/courses/atlas-abstract-algebra-advanced). A diagnostic is a dependency check, not a degree admission test. Keep dated first, comparison and revised worksheets under each task ID and preserve actual software inputs, output and refusal messages. Name every public model or other help already seen. Use the worksheet portfolio workflow. Mutable notes, self-checks and public reconstruction confer no grade, verified independence, enforced delay or automatic immutable task history.

## TS-S01 — Exact preparation, source work and repairs

Do not begin the corresponding lesson until its repair calculation is correct. These are the required source assignments, in order; a source's **immediate Solution** means the paragraph following the numbered exercise in that chapter, not a sketch in a topic map.

| Order and exact source reading | Required work | Complete public feedback and release condition |
| --- | --- | --- |
| 1. Advanced topology **TA-S01–TA-S06**, its required native Chapters 1–11 and 16, and TA-P/C/R | Retain that course's actual assigned worksheets, including integral/mod-two distinctions, cup products, forms, smooth charts and its actual torus/persistence models. | Its exact source/key roster and complete TA-P/C/R models remain the preparation keys. For targeted failure use its TA-S01 dependency table; do not replace the course by its introduction. |
| 2. Advanced algebra **Module 2 M2.1–M2.3**, **Module 4 M4.1–M4.5**, and their named unit practice | Presentations/exactness, localization and its exactness, prime correspondence, Noetherian rings and local Nakayama. Complete **AA-ADV-M2-Q1, Q2, Q3** and **AA-ADV-M4-Q1, Q2, Q3, Q4** before their public keys. | The **Required unit practice and complete public key** in each module supplies the complete answers. The local ring/fraction checks D3–D4 below release schemes; no Galois or character-table reconstruction is added here. |
| 3. [Algebraic Geometry Without False Shortcuts](../articles/algebraic-geometry-orientation.md), Sections 1–12 | **Worked boundary checks A, B, C, D** and **Practice checkpoints 1, 2, 3, 4**. Cover each Answer/Solutions before attempting it. | Each A–D has its immediate **Answer**; the final **Solutions** answers all four checkpoints. These eight tasks repair vocabulary, nilpotents, fields, contravariance and localization. This orientation does not prove the scheme constructions supplied in TS-S04. |
| 4. [Fibrations and Spectral Sequences](#/books/algebraic-topology-chains-spaces), complete chapter | **TS-N12: Exercises 12.1, 12.2, 12.3, 12.4**, all four. | The four immediate **Solution** paragraphs give full public models; the registered [solutions chapter](#/books/algebraic-topology-chains-spaces), **Chapter 12**, is a second location. TS-S02 reconstructs the homotopy mechanism; the source's full Serre construction remains imported. |
| 5. [Obstruction Theory and Characteristic Classes](#/books/algebraic-topology-chains-spaces), complete chapter | **TS-N14: Exercises 14.1, 14.2, 14.3, 14.4**, all four. | Immediate **Solutions** and registered **Chapter 14** supply complete keys, including hypotheses. TS-S03 adds the line-bundle construction and proofs. Keep the source's primary-obstruction scope n≥3 and its local coefficients. |
| 6. [Sheaf Cohomology and Local Systems](#/books/algebraic-topology-chains-spaces), complete chapter | **TS-N15: Exercises 15.1, 15.2, 15.3, 15.4**, all four. | Immediate **Solutions** and registered **Chapter 15** give complete keys. A sheaf of continuous sections is a module over continuous functions; it is not the constant sheaf. TS-S04 constructs algebraic sheaves separately. |

**Diagnostic D1–D8.** D1: define a based homotopy of maps from a sphere and explain why an unbased nullhomotopy needs care. D2: identify the kernel and cokernel of multiplication by −3 on Z. D3: distinguish C[z]_(z) from C[z]_z. D4: list the primes and global sections of C[epsilon]/(epsilon²). D5: negate “every section is nowhere zero.” D6: compute the pullback of dx∧dy by (u,v)↦(u,−v). D7: derive the change of a local connection form when a unit frame is multiplied by exp(i theta). D8: identify precisely which comparison theorem turns a two-open Čech calculation into sheaf cohomology.

**Complete diagnostic key and repairs.** D1 fixes the basepoint throughout the homotopy; in cubical notation every boundary point remains at the chosen basepoint. An arbitrary moving basepoint changes induced maps by a path/conjugation. Repair in TS-S02's first two paragraphs and advanced topology TA-S01's basepoint chapter, then write the fixed-boundary condition. D2 has kernel 0 and cokernel Z/3: −3 is injective but not onto. Repair M2.1–M2.3 and write the actual quotient map. D3: the first inverts polynomials nonzero at 0 and retains the point; the second inverts z and removes it. In particular 1/z is absent from the first. Repair the orientation's Section 5 and TS-S04's stalk proof. D4: only the prime (epsilon), but sections are the two-dimensional C-algebra with nonzero epsilon and epsilon²=0. Repair orientation Section 8 and its checkpoint 3; a one-point topological space does not determine its ring. D5 is “there exists a section with a zero,” including the zero section; it does not assert that every section has a zero. Repair quantified domains before any obstruction claim. D6 gives −du∧dv, so orientation changes the integral sign. Repair TA-S05 and repeat Stokes with the stated orientation. D7, with convention ∇=d−i a, gives a'=a−d theta; derive by differentiating exp(i theta), rather than memorizing a sign. TS-S05 supplies the full repair before curvature. D8 is affine acyclicity plus the acyclic-intersection Čech comparison for quasi-coherent sheaves on the specified affine cover; it is explicitly imported in TS-S04. Arbitrary sheaves and arbitrary covers are not released by this diagnostic.

Every source exercise above and every local question below requires a first proof/calculation, a comparison identifying the exact failed hypothesis or missing step, and a corrected proof. Correct conclusions without the maps, coefficients or hypotheses named in the key require repair.

## TS-S02 — Based homotopy and the fibration exact sequence

A loop carries a marked point so that concatenation has a fixed meaning. For n≥1 define pi_n(X,x0) using maps (I^n,boundary I^n)→(X,x0), modulo homotopies keeping the entire boundary fixed. Concatenate in one coordinate. Reversing that coordinate gives inverses; reparametrization supplies associativity up to based homotopy. For n≥2 one can concatenate in two coordinates; the interchange identity makes the two operations agree and commute. Thus higher groups are abelian. At n=1 conjugation by a change-of-basepoint path remains relevant. At n=0 one has components, a pointed set rather than a group in general.

A homotopy lifting property is a condition on a map, not a picture of a moving fiber. We work with compactly generated Hausdorff spaces, compact-open path spaces with compact generation, CW domains, chosen basepoints, and **Hurewicz fibrations**. The lifting property holds for every parameter space. The relative version fixes an already specified lift on a CW subcomplex. Here is why that extra control is legitimate. For one cell let C=D^m×{0} union boundary D^m×I. There is a homeomorphism of pairs (D^m×I,D^m×{0})→(D^m×I,C): bottom and C are both m-disks in the boundary of the (m+1)-ball, their complementary closed boundary disks are the remaining boundary and the top face, and a compatible boundary homeomorphism extends radially across the ball. Compose the prescribed base map with this homeomorphism and the prescribed lift on C with its bottom restriction. Ordinary HLP with parameter D^m then extends that lift from the whole initial face; compose back to obtain the desired lift agreeing on all of C. Thus compatibility with the actual base map is preserved, rather than inferred from a retraction alone. Attach cells and use the CW weak topology. This is the relative lifting property used below, not an assumption that every continuous map is a fibration. Smooth bundles over our compact manifolds are numerable and have this lifting property. For Serre fibrations the same discussion is restricted to CW parameter spaces.

**Every map has a fibration replacement.** Given f:X→B put E_f={(x,gamma): gamma(0)=f(x)} and p(x,gamma)=gamma(1). The inclusion j(x)=(x,constant f(x)) and projection r(x,gamma)=x have rj=id. The deformation gamma_s(u)=gamma((1−s)u) deforms jr to id with direction reversed. Thus E_f is homotopy equivalent to X. To lift H:Y×I→B starting from (x_y,gamma_y), keep x_y fixed and use

$$\gamma_{y,t}(u)=\begin{cases}\gamma_y((1+t)u),&(1+t)u\le1,\\H(y,(1+t)u-1),&(1+t)u\ge1.\end{cases}$$

The pieces agree because H(y,0)=gamma_y(1); at t=0 the path is exactly gamma_y, and its endpoint at time t is H(y,t). Pasting on the two closed regions and the path-space exponential law prove continuity. This supplies a lift for every Y. The fiber of this replacement is the **homotopy fiber**; it can differ drastically from f's literal fiber. A map with a one-point literal fiber need not be a homotopy equivalence.

**Relative groups and the connecting map.** For F=p^−1(b0), represent a relative n-class by a cube u:I^(n−1)×I→E whose bottom and side faces are e0 and whose top face lies in F. Denote their union of bottom and sides by J. Composition pu collapses the entire boundary to b0 and gives a based sphere in B. Conversely, lift a sphere cube in B from its bottom face, keeping its sides fixed by relative lifting. Its top then lies in F. Lifting homotopies gives a bijection pi_n(E,F)→pi_n(B) (groups for n≥2 in the relevant range): surjectivity is the lift just constructed; for injectivity, lift a nullhomotopy relative J and use the lifted cube homotopy to move the relative map into F, where it is relative-null. Applying this to the difference of two classes proves equality. This is where fibration and relative lifting enter; a generic map does not have this identification.

The relative boundary map restricts u to its top (n−1)-face. Consequently the connecting map partial:pi_n(B)→pi_(n−1)(F) is “lift a sphere cube, then take its top.” Different choices give the same class by lifting the comparison homotopy. There is an exact sequence

$$\cdots\to\pi_n(F)\xrightarrow{i_*}\pi_n(E)\xrightarrow{p_*}\pi_n(B)\xrightarrow{\partial}\pi_{n-1}(F)\to\cdots.$$

Here is the proof of the exactness assertions, rather than just the displayed sequence. In the exact sequence of the pair (E,F), the boundary of an absolute sphere is zero. If a relative cube has nullhomotopic top in F, attach that nullhomotopy along its top; the resulting cube has all faces at e0 and comes from an absolute sphere in E. This proves ker(boundary)=image(absolute→relative). A sphere in F becomes null in E exactly when its nullhomotopy in E is a relative cube with that top: ker(i_*)=image(boundary). Finally, if an absolute sphere in E is relative-null, a relative nullhomotopy pushes it into F, yielding ker(absolute→relative)=image(i_*). The reverse inclusions follow by those same gluings. Transport along pi_n(E,F)≅pi_n(B) gives all adjacent exactness statements above. At the bottom, exactness refers to pointed-set fibers and the pi_1(B) action on components of F; do not silently write an abelian exact sequence there. Our applications use connected S1 fibers and simply connected S2 bases.

For the endpoint fibration P B→B of paths starting at b0, contraction gamma_s(u)=gamma((1−s)u) contracts P B. Its fiber is Omega B, so exactness gives pi_n(B)≅pi_(n−1)(Omega B), n≥2. Cellular approximation (imported, for CW pairs) gives pi_k(S^n)=0 for k<n; the degree/Hurewicz identification pi_n(S^n)=Z is also an explicit dependency, not proved by a finite computation here. Since the universal cover R→S1 lifts sphere maps and their homotopies, pi_k(S1)=0 for k≥2 and pi_1(S1)=Z by winding. Apply the Hopf bundle S1→S3→S2 to get pi_3(S2)≅pi_3(S3)=Z. This calculation neither computes all unstable sphere groups nor proves the general Serre spectral sequence.

**Required H1–H4.** H1: verify every endpoint, seam and t=0 condition of the displayed replacement lift, and give f:point→S1 as a case where literal and homotopy fibers differ. H2: reconstruct the three exactness gluings above with domains and fixed faces. H3: compute pi_1, pi_2, pi_3 of a circle bundle over S2 whose boundary map pi_2(S2)=Z→pi_1(S1)=Z is multiplication by n; include n=0. H4: explain what fails when a path-connected fiber is incorrectly inferred merely from a simply connected total space.

**Complete H key.** H1: at the seam both values are gamma_y(1)=H(y,0); at u=0 the initial point is f(x_y), at u=1 the value is H(y,t), and for t=0 the first branch fills the whole unit interval. The homotopy fiber of point→S1 is Omega S1, with components Z, whereas the literal fiber over the chosen point is one point. H2 is precisely the three relative-cube fillings in the preceding proof; one must name the top nullhomotopy in F, the filling in E and the relative-nullhomotopy pushing into F, respectively. H3: exactness gives pi_2(E)=ker(n:Z→Z) and pi_1(E)=coker(n:Z→Z), so for n≠0 they are 0 and Z/|n| (trivial for |n|=1); for n=0 they are Z and Z. The higher S1 groups vanish, so pi_3(E)≅pi_3(S2)=Z in every case. H4: a covering R→S1 has simply connected total space and discrete disconnected fiber Z. The exact sequence's pi_0 terms and base action cannot be discarded before checking connectedness.

## TS-S03 — Clutching, characteristic classes and genuine obstructions

Start with two closed disks covering S2, with their boundary circles identified and oriented as the boundary of the first disk. Trivial complex lines on the disks are joined by a nonzero complex function g on the equator. A change of trivialization multiplies g by functions extending across the disks. Radial normalization retracts C* to S1. For g:S1→S1 lift its argument on [0,2pi] to a real function alpha; alpha(2pi)−alpha(0)=2pi n for a unique integer n. This integer is invariant under homotopy because an integer-valued continuous change is constant. Conversely, if two maps have the same n, their argument lifts differ by a periodic real function; straight-line interpolation of these lifts gives a homotopy. Thus winding classifies the clutching maps. A disk-extending frame change has winding zero; a zero-winding transition extends over a disk and can be absorbed into a frame. Homotopic transitions give isomorphic bundles by extending the homotopy across a collar. Consequently these bundles are classified by n, with n=0 exactly the trivial bundle.

This includes every smooth complex line bundle on S2: choose a connection by local trivializations and a smooth partition of unity, and parallel-transport a nonzero vector along radial segments on each disk. The scalar linear ODE has a unique nonzero solution and smooth parameter dependence, giving the two disk frames. The finite-dimensional ODE existence/uniqueness theorem and smooth partitions of unity on paracompact manifolds are explicit analytic prerequisites. This argument supplies the disk trivializations; universal bundle classification is not needed for this special classification.

Fix the algebraic convention in TS-S04: on overlapping complex charts with z=r exp(i theta), **e_infinity=z^n e_0**, so coefficient functions satisfy s_0=z^n s_infinity. After choosing Hermitian metrics the unit frames have transition exp(i n theta). Define c1(L)=n u for the positive generator u of H²(S2;Z). Changing a frame cannot change n. Tensoring multiplies transitions, and dualizing inverts them, so c1(L⊗M)=c1(L)+c1(M) and c1(L dual)=−c1(L). Under a smooth degree-d map S2→S2 the clutching number becomes dn: this follows alternatively from TS-S05's curvature integral and the degree change-of-variables identity for top forms. This proves the selected naturality, rather than pretending to construct all universal Chern classes.

The unit-circle bundle E_n→S2 has boundary map multiplication by n, up to the simultaneous orientation convention on the generator of pi_1(S1). To see its absolute value directly, lift a characteristic disk for the base generator using a disk frame. Along its boundary the mismatch against the other disk frame is the clutching loop exp(i n theta); this is the connecting loop in TS-S02. Choose the fiber generator so this loop represents n. The H3 key now computes the actual groups. These groups cannot distinguish n from −n. A nowhere-zero section trivializes a line by (x,c)↦c s(x); conversely a trivial line has a unit section. Hence n≠0 obstructs a nowhere-zero smooth section. This argument concerns a complex line on S2; for general bundles, vanishing named classes alone does not prove triviality.

The native Chapter 14 uses the full characteristic-class framework: w has F2 coefficients and Whitney products, Chern classes have integral even degrees and complex bundles, and Euler classes need oriented real bundles or a stated orientation local system. In its primary-obstruction theorem the coefficients record base monodromy. For TS-S03's complex line, real orientation comes from multiplication by i and the underlying oriented real rank-two Euler class agrees with c1 under our orientation. This comparison can be read directly as the same clutching winding in SO(2)=U(1). The sphere stable-tangent argument w(TS^m)=1 does not prove tangent triviality; even TS2 has Euler number 2. Higher homotopy/obstruction and universal-class existence are not supplied by the line argument.

**Required B1–B4.** B1: classify the transitions z², z^−3 and 1; include tensor and dual. B2: show the real tangent bundle of S2 has nonzero Euler number using the native 14.4 theorem, and explain why its total Stiefel–Whitney class can still be 1. B3: give the full group computation for E0 and explain why a zero-curvature connection on a general base need not trivialize a bundle. B4: compare a section of O(2) with its zeros to a nowhere-zero smooth section.

**Complete B key.** B1 gives 2u, −3u and 0. Tensor O(2)⊗O(−3) has transition z^−1 and class −u; the dual of O(−3) has class 3u. B2 uses Euler pairing chi(S2)=2, so e(TS2)=2u≠0; reduction mod2 vanishes, consistently with stable triviality TS2⊕1≅1³. B3: E0≅S2×S1, hence pi1=Z, pi2=Z and pi3=Z. A flat connection controls de Rham curvature, which misses torsion classes and can have nontrivial holonomy; do not generalize the sphere conclusion to arbitrary bases. B4: the algebraic section represented by s0=1 has sinfinity=w² and vanishes at infinity to order 2. Its existence does not trivialize O(2); every smooth section has a zero because c1≠0. The distinction is “nonzero section” versus “nowhere-zero section.”

## TS-S04 — Constructing schemes and doing the local algebra

A scheme remembers rings in neighborhoods, including nilpotents. All rings here are commutative with 1 and homomorphisms preserve 1. A local ring has exactly one maximal ideal; a local homomorphism sends the maximal ideal into the maximal ideal and its inverse image is that maximal ideal. A locally ringed space has local stalks and morphisms inducing local homomorphisms. A topology without the sheaf is insufficient.

For a ring A, Spec A consists of prime ideals, with D(f)={p:f not in p}. These form a basis, D(f)∩D(g)=D(fg). In A_f every prime comes from a prime of A avoiding f, by extension/contraction; the proof sends a fraction a/f^j into the extended ideal exactly when a lies in the original prime. Thus Spec A_f identifies with D(f). If D(g)⊂D(f), f is a unit in A_g, so the localization universal property supplies A_f→A_g. The same maps exist for M_f for every A-module M. These maps compose uniquely and do not depend on the chosen defining function for the same basic open.

**The structure sheaf, with its gluing proof.** Set O(D(f))=A_f and M-tilde(D(f))=M_f on this basis. To prove the sheaf condition, first consider a finite standard cover Spec A=union D(f_i). Such a cover means the f_i generate the unit ideal: otherwise a maximal ideal containing all of them gives an uncovered prime. Powers f_i^N also generate 1, since a proper ideal containing all these powers would have a maximal ideal containing every f_i. If m localizes to zero in each M_fi, some common power f_i^N kills m; a relation 1=sum a_i f_i^N then kills m, proving uniqueness. For compatible local sections s_i, clear denominators and then their finitely many overlap equalities. For sufficiently large common N choose x_i in M with image f_i^N s_i and with image f_i^N s_j in every M_fj. Choose sum a_i f_i^N=1. The element m=sum a_i x_i restricts to sum a_i f_i^N s_j=s_j. This proves existence. Clearing overlap equalities is valid even with zero divisors: equality after localization means some power of the localized element annihilates the difference; no cancellation in A is asserted.

Apply the same argument over A_f to a cover of D(f). Any cover by standard opens has a finite subcover: if no finite subcollection generated the unit ideal in A_f, the ideal generated by all the covering elements would be proper, and a maximal ideal would give an uncovered point. An arbitrary open cover refines to standard opens. Therefore the proof covers every basis cover. Extend to an arbitrary open U by compatible families on all basic opens contained in U. Restriction forgets components, and the just-proved basis gluing gives uniqueness/existence; thus this is a sheaf on the full space. Its stalk at p is A_p: a germ a/f^j with f not in p gives that fraction in A_p, and equality in A_p is witnessed after inverting one further element outside p, hence on a smaller basic neighborhood. The same proves (M-tilde)_p=M_p. The maximal ideal of A_p consists of fractions with numerator in p; every other fraction is a unit. This constructs an affine scheme as a locally ringed space.

**Affine morphisms and quasi-coherent modules.** A ring map phi:A→B gives p↦phi^−1(p); the inverse image of D(a) is D(phi(a)), proving continuity. Localization supplies the sheaf maps A_a→B_phi(a), and at p the map A_phi−1(p)→B_p is local because its nonunits have numerator in phi^−1(p). Conversely a locally ringed morphism Spec B→Spec A induces phi on global sections. Locality forces the image of p to be phi^−1(p); on every basic open the sheaf map must be the localization map, by the universal property. Therefore it is exactly the morphism constructed from phi. Composition reverses, so affine schemes are contravariantly equivalent to rings.

A sheaf F of O-modules is **quasi-coherent** if locally it is associated to a module by the construction above. On Spec A the functors M↦M-tilde and F↦Gamma(F) are inverse. Here are the needed details of the less immediate direction. Choose a finite standard cover on which F has module presentations. A section on D(f) is represented on a finite refinement of its intersections with these opens; clearing a common power of f extends those finitely many representatives and their overlap equalities. Thus Gamma(F)_f→F(D(f)) is onto. If a global section restricts to zero on D(f), the same finite cover and denominator argument gives one power of f killing it, proving injectivity. (On each presenting affine these are precisely the module-localization equalities proved above.) Consequently Gamma(F)_f≅F(D(f)), compatibly with restriction; these isomorphisms glue to Gamma(F)-tilde≅F. For M the equality Gamma(M-tilde)=M was already the D(1) construction. Maps likewise are determined on D(1) and localize, proving full equivalence. Exactness can be checked on stalks and module localization is exact, so exact module sequences give exact associated sheaf sequences. Global sections on an affine are therefore exact on quasi-coherent sheaves. This does not by itself prove injective-resolution acyclicity in the entire sheaf category.

**Gluing actual schemes.** Suppose affine schemes X_i have isomorphisms between specified open subsets, inverse on reversed overlaps and satisfying the cocycle identity on triple overlaps. Form the quotient of their disjoint union by these identifications; give it the topology for which each X_i is open. For an open U, define O(U) as tuples of sections on U∩X_i agreeing under the overlap isomorphisms. Componentwise restriction and each O_Xi's sheaf property prove the resulting sheaf's gluing and uniqueness. Its restriction on X_i is O_Xi, so its stalks are local and it is a scheme. Compatible locally ringed maps from the X_i glue uniquely by the same tuple construction. This proves the gluing assertion used next, including its sheaf and morphisms.

Take U0=Spec A[z], Uinfinity=Spec A[w], and identify D(z) with D(w) by w=z^−1. The result is P1_A. Its diagonal is closed: on the four product charts its equations are z=z', w=w', zw'=1 and wz'=1, respectively. These closed pieces agree on overlap, proving separatedness over Spec A. This checks a property, rather than calling all glued schemes separated. A line sheaf L_n=O(n) is glued from free rank-one modules with **einfinity=z^n e0**. The sheaf/module cocycle is invertible on the overlap. A global section is a pair f(z),g(w) satisfying f(z)=z^n g(z^−1). It follows, coefficient by coefficient in a Laurent polynomial ring, that

$$H^0(P1_A,L_n)=\bigoplus_{j=0}^{n}A z^j\quad(n\ge0),\qquad H^0=0\quad(n<0).$$

The two-open ordered Čech differential is (f,g)↦f−z^n g(z^−1). Its image is A[z]+z^n A[z^−1]. Hence its cokernel is free on the monomials z^j with **n<j<0**; there are max(−n−1,0) of them. There are no higher terms in this normalized two-open complex. This is a complete algebraic calculation for **every** ring A: Laurent monomials are an A-basis even when A has nilpotents. To call the cokernel H1 of the sheaf, we import the theorem that quasi-coherent sheaves are acyclic on affine schemes, and the theorem that a finite cover with acyclic finite intersections computes sheaf cohomology by Čech. Here U0,Uinfinity and their intersection are affine and L_n is quasi-coherent, so those hypotheses hold and higher Hi vanish. These two general theorems are not reconstructed from the short denominator argument. The explicit proof here supplies the entire differential, kernel and cokernel once that bridge is declared. [The Stacks Project, projective-space cohomology](https://stacks.math.columbia.edu/tag/01XS) records the general comparison and computation.

For an A-algebra B, tensoring the two chart rings and the transition gives P1_B and L_n over B. The displayed cohomology modules are free with specified bases, so their base-change maps are isomorphisms even for nonflat B in this family. This is a proof for this family, not the arbitrary cohomology-and-base-change theorem. For A=C[epsilon]/(epsilon²), the reduction epsilon↦0 gives the same C-points as P1_C, but each chart has a nonzero nilpotent and each nonzero cohomology basis acquires an epsilon partner. This does not produce a new smooth two-dimensional manifold: analytic comparison in this course applies only after reduction.

**Required AG1–AG5.** AG1: reproduce the denominator gluing proof for a module, identifying exactly where finiteness is used. AG2: prove the stalk map is local and determine the morphism induced by C[x]→C[z], x↦z². AG3: write actual bases of H0 and H1 for n=2,−3,0, including coefficient pairs for H0. AG4: compare Spec C and Spec C[epsilon]/(epsilon²), then compute maps from the dual-number point to A1_C. AG5: prove the diagonal equations and the base-change statement for this P1 family; contrast the real-point set of x²+1 with its scheme over R.

**Complete AG key.** AG1 uses a finite standard subcover, finitely many denominators and finitely many pairwise equalities to choose one N. The relation sum a_i f_i^N=1 proves both gluing and uniqueness; no cancellation of zero divisors is allowed. AG2's maximal ideal pulls back to the prime determining the image; x↦z² sends a source prime p to {F(x):F(z²) in p}, and a point z=a maps to x=a². AG3: n=2 has pairs (1,w²),(z,w),(z²,1), H1=0; n=−3 has H0=0 and H1 basis z^−2,z^−1; n=0 has pair (1,1) and H1=0. AG4: both spectra have one point, but the second ring has nonzero epsilon. A C-algebra map C[z]→C[epsilon]/(epsilon²) is z↦a+b epsilon, with a,b arbitrary; a is the point and b the tangent component. Forgetting b is not an isomorphism of representing functors. AG5 uses the four equations above and their compatible localization; tensoring coefficientwise preserves the explicit monomial bases. Spec R[x]/(x²+1) is nonempty (it is Spec C as an R-scheme) despite having no R-rational point. An empty real zero set does not mean an empty spectrum.

## TS-S05 — Connections, curvature and Riemannian geodesics

A smooth vector-bundle connection is an R-linear operator ∇ from sections to one-form-valued sections satisfying ∇(f s)=df⊗s+f∇s. In a frame write ∇=d+A. If the new frame is e'=e g, differentiation gives A'=g^−1 A g+g^−1 dg. Applying ∇ again and using the wedge product gives curvature F=dA+A∧A and F'=g^−1 Fg, so it is a global endomorphism-valued two-form. Expanding dF+A∧F−F∧A cancels term by term, the Bianchi identity. This proves the transformation and identity for any rank, without claiming to construct all characteristic classes by invariant polynomials. Pullback commutes with these formulas; tensor products add scalar line-connection forms.

For a Hermitian line use unit frames and ∇=d−i a with a real one-form. A frame change exp(i chi) gives a'=a−d chi. Its curvature is F∇=−i da. For L_n over CP1, use stereographic z=r exp(i theta) and w=rho exp(i phi)=z^−1; rho=1/r and phi=−theta. The two unit-frame forms are

$$a_0=n\frac{r^2}{1+r^2}\,d\theta,\qquad a_\infty=n\frac{\rho^2}{1+\rho^2}\,d\phi.$$

On the overlap a_infinity=a0−n dtheta, exactly the change required by exp(i n theta). The expression r² dtheta=x dy−y dx shows a0 is smooth at r=0; the w expression shows smoothness at infinity. These unit frames come from Hermitian norms on the algebraic frames, not from declaring z^n to have unit modulus everywhere. The global real curvature is

$$da_0=\frac{2nr}{(1+r^2)^2}\,dr\wedge d\theta,\qquad \frac{iF_\nabla}{2\pi}=\frac{da}{2\pi}.$$

Integrating with the complex orientation gives n, because the radial primitive is n r²/(1+r²), with endpoint values 0 and n. This equals the clutching c1 number: alternatively Stokes on two hemispheres gives (1/(2pi)) integral( a0−ainfinity )=n. Changing connection changes a by a **global** one-form b, so da changes by db and its integral on a closed oriented surface changes by zero. Thus the normalized curvature represents the real image of the integral first class in this scope. An integral zero detects the clutching class on S2; it need not detect torsion on another space.

A metric provides a different connection: the **Levi-Civita connection** on tangent vectors. The requirements are zero torsion, ∇_X Y−∇_Y X=[X,Y], and metric compatibility, X g(Y,Z)=g(∇_X Y,Z)+g(Y,∇_X Z). Write the latter for the three cyclic permutations of X,Y,Z, add the first two and subtract the third, and replace reversed derivatives with torsion equations. One obtains

$$2g(\nabla_XY,Z)=Xg(Y,Z)+Yg(X,Z)-Zg(X,Y)-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).$$

Nondegeneracy determines ∇ uniquely. Conversely this formula is linear in X, obeys the Leibniz rule in Y (differentiate scalar multiples), and direct interchange/cyclic substitution gives the two requirements; hence it constructs the connection. In coordinates, with inverse metric g^(kl),

$$\Gamma^k_{ij}=\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).$$

A geodesic is a curve with ∇_(dot gamma) dot gamma=0, so its coordinates satisfy x''^k+Gamma^k_ij x'^i x'^j=0. For a smooth positive-definite metric this is a smooth first-order system in (x,x'), giving a unique local solution for an initial point and tangent vector by the ODE theorem. Metric compatibility gives d g(x',x')/dt=2g(∇_(x')x',x')=0: speed is conserved. Constant coordinate speed without this equation is not a general geodesic criterion.

For a conformal surface g=exp(2f)(dx²+dy²), substitution gives Gamma^k_ij=delta^k_j f_i+delta^k_i f_j−delta_ij f_k. To derive curvature, use orthonormal coframe theta1=exp(f)dx, theta2=exp(f)dy. The torsion equations dtheta1=−omega12∧theta2 and dtheta2=omega12∧theta1 give omega12=f_y dx−f_x dy. Therefore d omega12=−(f_xx+f_yy)dx∧dy=K theta1∧theta2, proving K=−exp(−2f)Delta f in this convention. This is a derivation for all smooth conformal metrics, not a formula fitted to the round sphere.

For the unit round sphere, stereographic coordinates give g=4(dx²+dy²)/(1+r²)², so f=log2−log(1+r²), Delta f=−4/(1+r²)² and K=1. The area is 4pi by radial integration. The curve (x,y)=(tan(t/2),0), −pi<t<pi, has x'=(1+x²)/2 and x''=x(1+x²)/2. On y=0 the geodesic equation becomes x''−2x(x')²/(1+x²)=0 and y''=0, which it satisfies with unit speed. In this lesson the inverse stereographic map is explicitly (x,y)↦(2x/(1+r²),2y/(1+r²),(1−r²)/(1+r²)); it sends z=0 to the north pole and the complex orientation to the outward sphere orientation. This choice of chart, which need not be the same named pole chart as in the prerequisite, sends the curve to (sin t,0,cos t), a great circle. As t approaches pi the coordinate diverges while the spherical geodesic continues smoothly through the other chart. Coordinate blowup is not intrinsic incompleteness. These tangent-connection computations are distinct from the scalar bundle connection above; their curvatures carry different bundles and normalizations.

**Required DG1–DG5.** DG1: derive the frame change and curvature conjugation, then the scalar transition sign. DG2: verify both smooth chart formulas for a, calculate the full normalized integral and its invariance under a connection change. DG3: reconstruct Koszul from the two defining conditions and verify the displayed conformal Christoffel formula. DG4: derive K and verify the round geodesic including its conserved speed and its chart continuation. DG5: change the metric to (dx²+dy²)/y² on y>0, calculate K, and prove gamma(t)=(0,exp(t)) is a unit-speed geodesic.

**Complete DG key.** DG1 differentiates e g, yielding A', and expands dA'+A'∧A' to g^−1Fg; with A=−i a and g=exp(i chi), a'=a−dchi. DG2 uses r²dtheta=xdy−ydx and its w counterpart. The normalized integral is integral_0^infinity 2nr/(1+r²)² dr=n, unchanged by integral db=0. DG3 is the cyclic-add/subtract calculation above; for g_ij=e^(2f)delta_ij each derivative is 2f_i g_jl, yielding the stated three terms. DG4 gives Delta f=−4/(1+r²)², K=1; the substitution just printed proves both equations, and g(x',x')=4(1+x²)²/[4(1+x²)²]=1. The other chart covers the missing endpoint. DG5 has f=−log y, Delta f=1/y² and K=−1. Along x=0, Gamma^y_yy=−1/y and Gamma^x_yy=0, hence y''−(y')²/y=0 for y=e^t; its speed squared is (y')²/y²=1. Curvature and the equations require y>0; crossing y=0 is outside this manifold.

## TS-S06 — Reproduction contract and printed inputs

The proof work above establishes the arbitrary-degree statements. The bounded software checks specified finite presentations, Laurent bases, scalar curvature certificates and counts. It does not prove the fibration theorem, scheme construction, affine acyclicity or any observed learning/performance claim. **An actual software reproduction is required**, using the complete public reference in TS-CODE or a justified independently written equivalent. A hand table accompanies it but does not waive execution. Use Node.js 20.19 or newer, no dependencies, network or downloaded data. Save the code in a learner-owned file outside shared course sources, supply this exact JSON, call `topologyStudy(data)`, and retain its actual JSON output. Then run all printed failure controls. Public references and expected outputs are comparison material; no execution or learner result is asserted here.

The full input has three cases. n is the degree. thickness=2 means coefficients C[epsilon]/(epsilon²); thickness=1 means C. q names a separate finite-field comparison of the same projective-line model, not a reduction homomorphism C→Fq. The two coefficient settings must not be conflated. The real differential/homotopy work always uses the reduced complex bundle. The finite-field count of nonzero fiber vectors is (q+1)(q−1) and is independent of n; thus those point counts cannot classify these line bundles.

~~~json
{
  "schema": "topology-specialist-data-v1",
  "cases": [
    {"id":"TS-P","n":2,"thickness":1,"q":5},
    {"id":"TS-C","n":-3,"thickness":2,"q":7},
    {"id":"TS-R","n":0,"thickness":1,"q":3}
  ]
}
~~~

The complete public computation returns h0 and h1 as Laurent exponents in the e0 frame, complex dimensions after applying thickness, pi1 and pi2 of the reduced complex circle bundle, pi3=Z, and the curvature certificate in three radial annuli with r² in [0,1], [1,3], [3,infinity]. Certificate entries are reduced rational numbers, not measured integrals. For n the three entries are n/2,n/4,n/4 and sum to n. The program enumerates allowed Laurent exponents, forms the union and intersection of the two local monomial sets, and computes the nonzero-degree circle presentation by connected components of the relation graph for (Z/(2|n|))/〈n〉. Since 2|n| is a multiple of n, this finite quotient is exactly Z/nZ; zero degree is treated separately as Z. It does not approximate a general cohomology group.

**Bounds and failure controls.** Exact object keys only; input serializes to at most 2,048 characters; 1–6 cases; unique IDs matching TS- followed by 1–12 uppercase letters/digits; integer −8≤n≤8; thickness 1 or 2; q in {2,3,5,7}. The Laurent window −12 through 12 contains every potentially surviving H0/H1 exponent for these degrees; tails belong to one local image and cannot add classes. The annulus primitive is exact. Required refusal runs: n=9, n=1.5, q=4, thickness=3, duplicate ID, a case with an extra `url` field, an extra root field, and seven cases. Each must throw an Error before any result is returned. Then restore the exact input and rerun. Retain the actual error messages and corrected rerun, including any disagreement with the public ledger. No message is assumed to have occurred until the learner actually runs it.

## TS-P — Positive-degree primary investigation

Work before the public model. Use the printed TS-P input, L2 on P1_C and the reduced complex unit-circle bundle E2.

**P1.** Construct the two affine charts, the overlap ring maps, local rings at z=0 and infinity, and the line transition. Prove the resulting sheaf glues and the projective line is separated. **P2.** Derive the complete H0 coefficient-pair basis and H1, naming the comparison theorem and hypotheses. Exhibit a nonzero global section, identify its zero divisor and explain why it gives no nowhere-zero smooth section. **P3.** Construct the clutching loop, connecting map and exact sequence, and compute pi1/pi2/pi3 of E2. Identify what a sign reversal changes and what these groups miss. **P4.** Derive both unitary connection forms, check their overlap and smoothness, and calculate the normalized curvature and three-annulus certificate. **P5.** Derive the round metric's connection/geodesic/curvature statements, explaining why this is a different connection from P4. **P6.** Give the finite-field q=5 point count and a claim it cannot justify; execute the public code plus failure controls and compare every returned field with your manual mathematics.

### Complete public primary model

**P1 model.** U0=Spec C[z], Uinfinity=Spec C[w], with C[w,w^−1]→C[z,z^−1], w↦z^−1, and inverse z↦w^−1. The local rings at the two origins are C[z]_(z), C[w]_(w); neither inverts its vanishing coordinate. The coefficient equation is f=z² g(z^−1). The module sheaf is glued from two free rank-one modules by the invertible transition z²; the tuple sheaf proof in TS-S04 proves existence and uniqueness on every open. The diagonal equations on the four product charts are closed, hence this scheme is separated.

**P2 model.** H0 has basis (1,w²),(z,w),(z²,1), and H1=0 because every Laurent exponent lies in {j≥0} union {j≤2}. These are respectively kernel and cokernel of (f,g)↦f−z²g(z^−1). Affine acyclicity and the acyclic-intersection comparison apply to this quasi-coherent line sheaf and the three affine opens. Section (1,w²) has no zero in the z chart and a zero of order two at w=0, so its divisor is 2[infinity]. Its existence is compatible with c1=2u; no nowhere-zero smooth section exists, since one would trivialize the nonzero clutching class.

**P3 model.** Unit-frame transition exp(2i theta) has winding 2. With the selected fiber generator partial:Z→Z is multiplication by 2. The relevant sequence is 0→pi2(E2)→Z→Z→pi1(E2)→0; kernel 0 and quotient Z/2 give pi2=0, pi1=Z/2. Since pi3(S1)=pi2(S1)=0, pi3(E2)≅pi3(S2)=Z. The integer class changes sign under n↦−n; these three abstract groups stay unchanged. They do not identify the signed degree or the algebraic section space.

**P4 model.** a0=2r²/(1+r²)dtheta and ainfinity=2rho²/(1+rho²)dphi, with difference ainfinity−a0=−2dtheta. Each is smooth at its chart origin by r²dtheta=xdy−ydx. The normalized curvature integral is 2, and its annulus values are 1,1/2,1/2. Thus c1=2u, with F∇=−i da and iF∇/(2pi)=da/(2pi). Declaring F∇/(2pi i) positive here would reverse the convention and give the wrong sign.

**P5 model.** Koszul gives the conformal Christoffels. For f=log2−log(1+r²), Delta f=−4/(1+r²)² and K=1. The local curve x=tan(t/2), y=0 has x'=(1+x²)/2, x''=x(1+x²)/2 and obeys x''−2x(x')²/(1+x²)=0 with speed one. Its spherical image (sin t,0,cos t) continues through infinity in the w chart. This connection acts on tangent vectors and yields Gaussian curvature; P4 acts on the rank-one complex L2 and yields its Chern number. Neither calculation substitutes its curvature for the other's.

**P6 model and expected ledger.** P1(F5) has five affine points plus infinity. Every one-dimensional fiber has four nonzero vectors, so the nonzero total-space count is 24 for every degree, including trivial degree. It proves no equality of sheaves, bundle classes or homotopy types. The expected record is the TS-P row below. Actual code runs, output and refusal messages remain part of the learner's required record, not facts asserted by this public model.

## TS-C — Negative degree and a nonreduced changed scheme

Use TS-C, replacing coefficients by A=C[epsilon]/(epsilon²), degree by −3 and the separate finite field by F7. Preserve the reduced complex manifold for topology/differential calculations. Repeat **C1–C6**, with the same six deliverables as P1–P6, and explicitly add: exhibit a nonzero Čech class which cannot be killed by changing chart sections; prove that reduction loses actual sheaf information; compare L−3 with its dual; and decide whether a finite-field point count can detect the nilpotent tangent direction. Do not claim that A has an embedding into R or is a smooth manifold. Return to the exact input after executing the failure controls.

### Complete public changed model

**C1 model.** The charts are Spec A[z] and Spec A[w] with w=z^−1, and einfinity=z^−3 e0. All gluing and diagonal proofs remain valid over A because they used localization and compatible rings, without canceling zero divisors. At the reduced point z=0 the prime is (epsilon,z), and its local ring is A[z]_(epsilon,z); it contains the nonzero nilpotent epsilon. Reduction kills epsilon on both charts and gives P1_C. There is no scheme isomorphism to the reduction: an isomorphism would preserve the nilpotents in stalks. Every C-algebra map from A to C kills epsilon, so the complex-point set forgets this change.

**C2 model.** A[z] occupies exponents j≥0; z^−3 A[z^−1] occupies j≤−3. They have zero intersection, hence H0=0. The quotient has A-basis z^−2,z^−1. For example z^−1 cannot be written as f(z)−z^−3g(z^−1), since the right side has no exponent −1. As C-vector spaces H1 has basis z^−2,z^−1,epsilon z^−2,epsilon z^−1 and dimension 4. Affine acyclicity and the cover comparison still apply: the charts and intersection are affine and the sheaf is quasi-coherent over this nonreduced ring. Reduction maps each epsilon partner to zero. The dual has degree 3, H0 free of rank 4 over A (complex dimension 8), H1=0; dualizing is not taking the dual of H0 alone.

**C3 model.** On the reduced complex sphere the unit transition is exp(−3i theta). The boundary homomorphism is multiplication by −3, with kernel 0 and quotient Z/3; therefore pi2(E−3)=0, pi1(E−3)=Z/3, pi3(E−3)=Z. Its first class is −3u, while the dual has 3u and the same listed groups. There is no nowhere-zero smooth section. The nilpotent thickness contributes no new points or ordinary topological homotopy groups after reduction; that forgetful statement does not identify the schemes.

**C4 model.** a0=−3r²/(1+r²)dtheta, ainfinity=−3rho²/(1+rho²)dphi, and ainfinity−a0=3dtheta. The normalized integral is −3, with annulus values −3/2,−3/4,−3/4. Smoothness and the curvature transformation proof are unchanged. These differential forms belong to the reduced complex line bundle; treating epsilon as an ordinary real coordinate would be an unjustified change of object.

**C5 model.** The round reduced base still has Gaussian K=1 and the same unit great-circle geodesics: n changes the auxiliary line connection, not the base metric. As the required changed-metric check DG5, the upper-half-plane metric has K=−1 and gamma(t)=(0,e^t) is geodesic of speed one; this does change the tangent connection. These two independent changes prevent conflating every occurrence of curvature with the degree.

**C6 model and expected ledger.** P1(F7) has 8 points and each nonzero line fiber has 6 points, so its nonzero-vector count is 48. A field-valued point kills nilpotents, so the corresponding dual-number thickening has the same field-valued point count. Counting points cannot recover the four-dimensional complex H1 here. If instead one deliberately counts dual-number-valued points one asks a different functor; that count is not computed by this reference. The expected TS-C record is printed below; retain actual execution and refusal records separately.

## TS-R — Zero degree public return and reconstruction

After preserving your earlier work, close it and reconstruct from TS-R: n=0, coefficients C, separate F3 comparison. This is a public return, with no verified delay or unseen-work claim. Perform **R1–R6**, the same six deliverables, and identify exactly which former nontriviality arguments fail. Supply an explicit global frame, a global nonzero section, a zero-curvature connection and the full new homotopy sequence; explain why neither negative-degree vanishing nor nonzero-degree injectivity can be reused.

### Complete public return model

**R1 model.** Glue C[z] and C[w] on w=z^−1 as before; the base remains P1_C and its diagonal equations do not change. But the line transition is 1, so e0 and einfinity are restrictions of a global frame. The associated sheaf is O, a trivial line sheaf; the base scheme has not become affine. For example global functions are C despite the two nontrivial affine charts.

**R2 model.** The coefficient equation f(z)=g(z^−1) forces both to be the same constant, so H0=C with pair basis (1,1), and H1=0 because the local images cover all Laurent exponents. The global frame is a nowhere-zero section. This differs from P's nonzero section with zeros and C's absence of any nonzero algebraic global section. Under a dual-number thickening the constant basis would acquire epsilon, so zero degree does not make nilpotents invisible to sheaves.

**R3 model.** The boundary map is zero. Exactness gives 0→pi2(E0)→Z→0 and 0→Z→pi1(E0)→0, hence pi2(E0)=Z and pi1(E0)=Z. Directly E0=S2×S1 confirms these conclusions, and pi3(E0)=Z. The step “multiplication by n is injective” used for P/C fails at n=0. Cokernel Z/0Z is Z, not the trivial group.

**R4 model.** The global frame admits a0=ainfinity=0; F∇=0, normalized integral 0 and annulus certificate 0,0,0. Other connections on this trivial line may have nonzero exact curvature, but all have integral zero on S2. Here zero degree implies triviality by the proved clutching classification; it is not a theorem that zero Chern classes classify every bundle on every base.

**R5 model.** The round base still has K=1, area 4pi and the unit great-circle geodesic. Its tangent Euler number remains 2 although this separate line is trivial. The conformal-curvature and geodesic derivations of TS-S05 still apply; their hypotheses concern the metric and chart, not n. A zero scalar line curvature has not flattened the sphere.

**R6 model and expected ledger.** The finite count is (3+1)(3−1)=8, which does not establish the vanishing/nonvanishing of c1. The expected output is the TS-R row. Preserve the actual final rerun after all controls and explain every discrepancy rather than editing the printed input or reporting a public expectation as your output.

## TS-KEY — Complete comparison ledger and public rubric

This is a mathematically derived expected ledger, not an experimental transcript. Empty exponent lists mean zero modules. `pi3` is Z in all three cases. `curvature` is the signed normalized integral, and `annuli` its exact rational decomposition. `complexH0`/`complexH1` include thickness; topology always refers to the reduced complex bundle.

| ID | n | h0 exponents | h1 exponents | complexH0 | complexH1 | pi1 | pi2 | curvature | annuli | nonzeroFiniteVectors |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TS-P | 2 | [0,1,2] | [] | 3 | 0 | Z/2 | 0 | 2 | [1,1/2,1/2] | 24 |
| TS-C | -3 | [] | [-2,-1] | 0 | 4 | Z/3 | 0 | -3 | [-3/2,-3/4,-3/4] | 48 |
| TS-R | 0 | [0] | [] | 1 | 0 | Z | Z | 0 | [0,0,0] | 8 |

Use the same **30-point public self-review rubric** for each complete P/C/R portfolio: P1/C1/R1 scheme charts, stalks, gluing and separatedness **5** (one each for chart rings, overlap, correct local ring, actual gluing justification, diagonal); P2/C2/R2 cohomology/sections **5** (differential, kernel basis, cokernel basis, comparison hypotheses, correct section/zero distinction); P3/C3/R3 homotopy/classes **5** (winding, boundary map with convention, exact sequence, pi1/pi2, pi3 and scope); P4/C4/R4 connection **5** (two chart forms, overlap sign, smoothness, curvature normalization, exact integral/annuli); P5/C5/R5 differential geometry **5** (Koszul/Christoffel derivation, curvature derivation, actual geodesic substitution, speed, comparison of the two bundles/curvatures); P6/C6/R6 reproduction and claims **5** (finite count with base field, limited inference, actual inputs/code/output, all refusal records, corrected rerun and comparison). The models above supply all six answers for all cases. A self-awarded total is not a learner grade or independent proof check.

A wrong transition direction blocks both bundle and cohomology conclusions; repair B1/AG3 and recompute, even if two errors happened to cancel numerically. A missing acyclicity hypothesis blocks the sheaf-cohomology label; keep the valid Čech calculation and repair D8. A curvature-sign error requires deriving DG1 before recomputing. A correct table without the exactness/gluing/connection proofs is incomplete. Missing actual execution/refusal evidence requires the software step; the public ledger cannot fill that record. A return after public exposure remains useful reconstruction, with that exposure declared.

## TS-CODE — Complete bounded public reference

Copy this whole function, parse the one printed JSON input as `data`, and call `console.log(JSON.stringify(topologyStudy(data), null, 2))`. The function has no imports, filesystem, browser or network operations. It returns one complete array or throws before returning; it does not save records or execute imported text. The algebraic finite window is justified by the tail argument in TS-S06, and all integer products are tiny under these bounds.

~~~javascript
function topologyStudy(data) {
  "use strict";
  const fail = message => { throw new Error(message); };
  const object = (value, keys, where) => {
    if (!value || typeof value !== "object" || Array.isArray(value) ||
        Object.getPrototypeOf(value) !== Object.prototype) fail(where + ": object required");
    const actual = Object.keys(value).sort();
    const expected = [...keys].sort();
    if (actual.length !== expected.length || actual.some((k,i) => k !== expected[i]))
      fail(where + ": exact keys required");
  };
  object(data, ["schema", "cases"], "root");
  if (data.schema !== "topology-specialist-data-v1") fail("schema refused");
  const encoded = JSON.stringify(data);
  if (encoded.length > 2048) fail("input size refused");
  if (!Array.isArray(data.cases) || data.cases.length < 1 || data.cases.length > 6)
    fail("case count refused");
  const seen = new Set();
  for (const c of data.cases) {
    object(c, ["id", "n", "thickness", "q"], "case");
    if (typeof c.id !== "string" || !/^TS-[A-Z0-9]{1,12}$/.test(c.id) || seen.has(c.id))
      fail("ID refused");
    seen.add(c.id);
    if (!Number.isInteger(c.n) || c.n < -8 || c.n > 8) fail("degree refused");
    if (c.thickness !== 1 && c.thickness !== 2) fail("thickness refused");
    if (![2,3,5,7].includes(c.q)) fail("field refused");
  }
  const rational = (a,b) => {
    if (a === 0) return "0";
    const gcd = (x,y) => y === 0 ? x : gcd(y,x % y);
    const d = gcd(Math.abs(a),b);
    return b/d === 1 ? String(a/d) : String(a/d) + "/" + String(b/d);
  };
  return data.cases.map(c => {
    const local0 = new Set(), localInfinity = new Set();
    for (let exponent = -12; exponent <= 12; exponent += 1) {
      if (exponent >= 0) local0.add(exponent);
      if (exponent <= c.n) localInfinity.add(exponent);
    }
    const h0 = [], h1 = [];
    for (let exponent = -12; exponent <= 12; exponent += 1) {
      if (local0.has(exponent) && localInfinity.has(exponent)) h0.push(exponent);
      if (!local0.has(exponent) && !localInfinity.has(exponent)) h1.push(exponent);
    }
    let pi1 = "Z", pi2 = "Z";
    if (c.n !== 0) {
      const bound = 2*Math.abs(c.n);
      const parent = Array.from({length:bound},(_,j) => j);
      const find = j => {
        while (parent[j] !== j) j = parent[j];
        return j;
      };
      for (let j = 0; j < bound; j += 1) {
        const related = ((j+c.n)%bound+bound)%bound;
        parent[find(j)] = find(related);
      }
      const order = new Set(parent.map((_,j) => find(j))).size;
      pi1 = order === 1 ? "0" : "Z/" + String(order);
      pi2 = "0";
    }
    return {
      id:c.id, n:c.n, h0, h1,
      complexH0:c.thickness*h0.length, complexH1:c.thickness*h1.length,
      pi1, pi2, pi3:"Z", curvature:c.n,
      annuli:[rational(c.n,2),rational(c.n,4),rational(c.n,4)],
      nonzeroFiniteVectors:(c.q+1)*(c.q-1)
    };
  });
}
~~~

To perform the eight controls, make one independent copy of the parsed input per control in your learner session and change only the named field/count, preserving the original for the final rerun. Do not import a URL, open a private Practice store or overwrite an earlier worksheet. The reference's strict object prototype check assumes data parsed by JSON in the same JavaScript realm. Running it across a VM boundary requires parsing JSON within that realm; an oracle must respect this contract rather than weakening the validator.

## TS-SOURCES — Provenance, rights and research boundaries

The native books, courses and orientation remain their authoritative mathematical sources with their existing IDs, licenses, working-edition labels and existing PDF boundaries. The twelve specialist source questions and eight orientation questions are assigned by exact location above. Earlier advanced work remains preparation, not a claim that whole books are qualified. The new local constructions and public models here are Euler teaching under **CC BY-SA 4.0**; no external text, exercise image or PDF is copied into this manuscript.

For independent verification of the affine constructions, [The Stacks Project, affine schemes](https://stacks.math.columbia.edu/tag/01HR) and [the affine category](https://stacks.math.columbia.edu/tag/01HX) supply primary statements/proofs. The scheme lesson's denominator, stalk and localization arguments are written locally, with separate module/sheaf and gluing work; these links are further checking sources, not a substitute for required local proofs. The projective-space source linked in TS-S04 supplies the explicit imported acyclicity/comparison bridge. External resources retain their own rights and may change; this course's printed data and proofs do not depend on a live network response.

The degree/Hurewicz theorem, cellular approximation, compactly generated path-space facts, smooth partitions of unity, ODE existence/uniqueness/smooth parameter dependence, affine acyclicity and acyclic-cover comparison remain the explicit general dependencies. Native Serre construction/convergence, universal characteristic classes, high-degree primary obstructions with local systems, injective resolutions, twisted duality, Bott periodicity and representability retain their native imported scope; no reference run supplies those proofs. Here the fibration replacement/selected exact sequence, smooth line clutching, affine structure sheaf/module equivalence/gluing/separatedness, the P1 cohomology differential and base-change family, connection transformations, Koszul construction, conformal curvature and actual geodesic calculations have been taught and proved in their stated scope.

This is substantial selected graduate work in all four named strands. Arbitrary unstable sphere groups, full obstruction towers, general moduli/derived schemes, higher-rank Chern–Weil theory, general cohomology-and-base-change, global geodesic comparison and specialist research classification need further theory. Some broad classification problems remain open; this route makes no new research claim and labels no computed finite agreement as a theorem about such problems. No human review, classroom observation, performance benchmark, successful learner run or professional qualification is invented. Keep original source errors visible to correction owners rather than modifying hypotheses or the problem input to force a preferred answer.
