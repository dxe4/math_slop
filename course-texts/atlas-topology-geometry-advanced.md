
# Topology, Forms, and Persistent Shape

<!-- euler-course-route -->

## Current course route

Follow the [current chapter syllabus](#/courses/atlas-topology-geometry-advanced), based on [Chains, Spaces, and Invariants: Algebraic Topology](#/books/algebraic-topology-chains-spaces). Its chapters, exercises and preparation links form the present course route.

Preparation courses: [Topology](#/courses/atlas-topology-manifolds-standard) · [Abstract algebra I](#/courses/atlas-abstract-algebra-proof) · [Linear algebra II](#/courses/atlas-linear-algebra-standard).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A boundary matrix, a period integral and a barcode each remember something about shape. They remember different things. A torus and a Klein bottle have the same mod-two Betti numbers; their integral homology differs. An angular form is locally a derivative but need not have a global primitive. Two filtered disks can have the same final homology and different persistence. Learning to move between these examples requires proofs about maps as well as computations about spaces.

This advanced course teaches the curriculum's four connected subjects: algebraic topology, smooth manifolds, differential forms and finite computational persistence. Follow TA-S01 through TA-S06 in order, then the primary TA-P, changed TA-C and public return TA-R portfolios. The native [Topology and Manifolds course](#/courses/atlas-topology-manifolds-standard) supplies its full Units 1–9, the exact tasks below and their keys. The selected [Chains, Spaces, and Invariants chapters](#/books/algebraic-topology-chains-spaces) supply sustained algebraic teaching and 48 numbered questions with immediate complete solutions. Sections TA-S04–06 fill the local chart, form and persistence calculations that a short survey does not teach.

The book remains graduate-labelled and a working edition. Its Chapters 12–15, the native course's geometric survey Units 10–12, schemes, general spectral sequences and research-level reconstruction are further study. They are not required work in this course. General comparison, van Kampen, covering classification, cellular/singular agreement, exact-sequence, cup-product, duality, de Rham and persistence-stability theorems are used with their stated hypotheses; these selections do not prove their full general versions. The new local arguments below are proved in their stated scope.

**Preparation and records.** Bring the selected core topology, groups, finite-dimensional kernels/images/quotients, partial derivatives, the chain rule and integration on rectangles and disks. Section TA-S01 releases each dependency separately and gives repairs. study time depends on the selected reading, attempts and corrections; the older native 1,320-minute outline and book estimates do not measure this joined work. Keep separate dated first, comparison and revised worksheets under each exact task ID. Before comparison preserve your actual first work and name any public model or help already seen. A later reconstruction after exposure can be valuable; it is not unseen transfer or verified retention. Use the worksheet portfolio workflow. Shared notes are mutable, and self-checks are not graded Practice attempts, awarded credit or proof verification.

## TA-S01 — Preparation, loops and covering maps

Work the native course's **Entry diagnostic Questions 1–4**, including its smooth diagnostic, before reading its answers. Repair by dependency:

| Diagnostic or dependency | Exact repair | Release calculation and complete feedback |
| --- | --- | --- |
| Open sets and quantifiers | Native Units 1–4, including Unit 1's closed-set checkpoint. For missing inverse-image/quantifier language use [the topology set toolkit](#/books/topology/00i-topology-bridge) and [map toolkit](#/books/topology/00i-topology-bridge). | The two-point family in diagnostic 1 is a topology: its arbitrary unions and finite intersections remain in that family. The negation in 2 is “there exists an open cover with no finite subcover.” For the checkpoint, complements turn arbitrary closed intersections into arbitrary open unions, and finite closed unions into finite open intersections. Do not extend the second assertion to arbitrary closed unions. |
| Linear maps, bases and quotients | [Linear maps, isomorphism and rank–nullity](../books/linear-algebra-structure-proofs/linear-maps-isomorphism-rank-nullity.md), Sections 1, 4 and 6 as repair reading; then the local checks in this row. | Diagnostic 3 has kernel span{(1,-1,0),(0,0,1)}. For D=(1,1), ker D=span{(1,-1)}, im D=R. Rank–nullity gives 2=1+1. The quotient R²/ker D is isomorphic to R by [(x,y)]↦x+y: changing by a kernel vector preserves the value, and the induced map is injective and onto. These are the facts needed to form cycles modulo boundaries. |
| Groups, integer coefficients and functor language | Native Units 5–7; then Chapters 1–2 below. | A group needs an associative product, identity and inverses; commutativity is extra. The reduced words ab and ba in a free group on a,b differ. Abelianization imposes commutativity. A free Z-module Z^r is an abelian group with an integer basis; Z/2 is a quotient, not a vector space over R. A functor preserves identities/composition; a homotopy invariant also identifies homotopic maps. The inverse identities in Exercise 1.2 are the required check. |
| Differentiation and regular levels | Native Unit 8, its worked sphere argument and cumulative Question 4; then TA-S04. | Diagnostic 4 requires rank dF_p=1 for a smooth scalar-valued F. For F=x²+y²+z² at p=(1,0,0), dF_p(v)=2v_x, so ker dF_p={v_x=0}. At the origin the derivative is zero: its kernel is all R³, but F^{-1}(0) is one point. The regular-level conclusion cannot be used there. |
| Alternating products and integration | TA-S05's definitions and its four local questions, before the portfolios. | dx∧dx=0 and dy∧dx=-dx∧dy. For eta=x dy, d eta=dx∧dy. On a positively oriented unit disk Stokes gives both integrals equal to pi. A wrong sign, a global angle on S¹ or a singular form on a disk blocks this dependency until repaired. |

Complete the native **Units 5–6 annulus bridge**, **Unit 7 Practice ladder Questions 1–3**, and **Cumulative assessment Questions 1–4** with their immediate reasoned solutions. Questions 5–6 of that assessment concern the later optional geometric survey and are not assigned here. The bridge's actual homotopy is H(x,t)=((1-t)+t/||x||)x for 1≤||x||≤2: the radius stays in [1,2], every point on the inner circle stays fixed, and pi_1 is Z by the quoted circle theorem. The ladder distinguishes a triangle cycle from its filling, then the figure-eight vertex and its rank-two first homology. Cumulative Questions 1–4 demand the compact-to-Hausdorff proof, the endpoint quotient plus van Kampen, actual triangle matrices and a regular tangent-plane proof. Compare arguments, not just final groups.

If the core graph calculation was never completed, also complete the native **Fixed graph capstone — Problem Questions 1–8**, with **Fixed graph capstone — Complete public model** and its existing 24-point descriptive criteria. This is prerequisite repair, counted once if already done. It requires the quotient proof, all five edges with no faces, the five-by-zero D_2, cycles/boundaries, a genuine spanning tree and the three-versus-four-arm local obstruction. Having the same H_1 does not prove homeomorphism.

The following roster assigns the **entire named chapter**, including its definitions, theorem hypotheses, examples and Common errors, then all four named exercises in order. Every exercise has its complete **Solution** immediately below it in the same chapter. Do not substitute the overview book page for a chapter. Carry each chapter's worked argument into your worksheet before comparing.

| Required source task IDs | Full teaching and exact questions | Key dependency to retain |
| --- | --- | --- |
| TA-B01 | [The Functorial Bargain](../books/algebraic-topology-chains-spaces/the-functorial-bargain.md), Exercises **1.1, 1.2, 1.3, 1.4**, with all four Solutions | Retraction contradiction, inverse functor identities, equal homology with different pi_1, underlying-set counterexample. The earlier “The invariants” overview does not replace these proofs. |
| TA-B02 | [Fundamental Group and Basepoints](../books/algebraic-topology-chains-spaces/fundamental-group-and-basepoints.md), Exercises **2.1, 2.2, 2.3, 2.4**, with all four Solutions | Product loops and homotopies, free graph group, extension across a disk, and the exact centrality condition for two basepoint-change maps. |
| TA-B03 | [Van Kampen as a Pushout](../books/algebraic-topology-chains-spaces/van-kampen-as-a-pushout.md), Exercises **3.1, 3.2, 3.3, 3.4**, with all four Solutions | Open/path-connected cover hypotheses; normal closure rather than one relation in an abelian group; the map a↦3,b↦-2 proves the one-relator example infinite. For 3.3, n means n distinct punctures. |
| TA-B04 | [Coverings and Monodromy](../books/algebraic-topology-chains-spaces/coverings-and-monodromy.md), Exercises **4.1, 4.2, 4.3, 4.4**, with all four Solutions | Use p_n(z)=z^n with n≥1 in 4.1. Retain path-connected/local/semilocal hypotheses, based subgroup, deck group and finite-cell Euler count. |

A covering's positive number of sheets is different from the signed degree of an oriented map. For instance z↦z^{-2} has two sheets and degree -2. A local inverse is not automatically a global inverse. These distinctions become concrete in TA-C.

## TA-S02 — Chains, cells and exactness

A cycle is a chain whose boundary is zero; a boundary is the boundary of a higher chain. Only d²=0 permits their quotient. Over Z, orientations make opposite faces cancel. Over F_2, subtraction and addition agree. An integer torsion quotient cannot be computed by taking a real matrix rank.

Complete the native **Unit 7** with its actual ordered matrices, then these four complete chapters and their full immediate keys:

| Required source task IDs | Full teaching and exact questions | Key dependency to retain |
| --- | --- | --- |
| TA-B05 | [Chain Complexes and Homology](../books/algebraic-topology-chains-spaces/chain-complexes-and-homology.md), Exercises **5.1, 5.2, 5.3, 5.4**, with all four Solutions | Signed triangle cycles, homotopy inverses, vanishing above CW dimension using the cellular comparison theorem, and direct-sum chains of a disjoint union. Read Chapter 6 before final comparison for 5.3. |
| TA-B06 | [Computations with Cells](../books/algebraic-topology-chains-spaces/computations-with-cells.md), Exercises **6.1, 6.2, 6.3, 6.4**, with all four Solutions | Klein attaching boundary (0,2), the trivially attached wedge, Euler cancellation and mod-two projective homology. State which coefficient ring is being used on every line. |
| TA-B07 | [Exact Sequences as Conservation Laws](../books/algebraic-topology-chains-spaces/exact-sequences-as-conservation-laws.md), Exercises **7.1, 7.2, 7.3, 7.4**, with all four Solutions | Both halves of the five-lemma chase; relative vanishing; reduced suspension with the enlarged hemisphere cover; surjectivity at H_0. Read Chapter 8 before final comparison for 7.3. |
| TA-B08 | [Mayer–Vietoris](#/books/algebraic-topology-chains-spaces), Exercises **8.1, 8.2, 8.3, 8.4**, with all four Solutions | Thickened pieces, signed inclusion maps and exactness. Path-connected overlap does not force all higher homology to vanish; acyclic does not by this argument mean contractible. |

Here is an algebraic bridge for the source calculations. The cellular chain complex 0→Z→Z²→Z→0 with d_2(1)=(0,2), d_1=0 gives H_2=0 because d_2 is injective; H_1=Z²/<(0,2)>=Z⊕Z/2; H_0=Z. Over F_2 the very same boundary becomes zero, giving Betti numbers (1,2,1). Over R it has rank one, giving (1,1,0). This is the Klein bottle's cellular calculation, not the torus's. Cell counts 1-2+1=0 agree with both field calculations. Matching Euler characteristics do not force matching groups.

Exactness means image equals kernel at a particular position. For the disk pair (D²,S¹), H_2(D²,S¹)→H_1(S¹) is an isomorphism because the adjacent positive-degree disk groups vanish. It sends the relative oriented disk to its boundary circle. The boundary is zero as a relative chain, not as a chain on S¹. For a compact surface with boundary the fundamental class belongs to relative H_2; ordinary closed-manifold duality would put it in the wrong group.

Before leaving this stage, reconstruct the signed H_0 map 1↦(1,-1) for a connected overlap and explain its injectivity. If your Mayer–Vietoris answer uses two closed hemispheres with interiors that fail to cover, thicken them as the actual source does.

## TA-S03 — Cohomology, products and manifold duality

Cochains evaluate chains. If phi is a cocycle then phi(d c)=0, so its value on a cycle depends only on the homology class. Pullback reverses the direction of a map. The cup product remembers interactions that the additive groups forget.

| Required source task IDs | Full teaching and exact questions | Key dependency to retain |
| --- | --- | --- |
| TA-B09 | [Cohomology and Products](../books/algebraic-topology-chains-spaces/cohomology-and-products.md), Exercises **9.1, 9.2, 9.3, 9.4**, with all four Solutions | Integral torus exterior ring, sphere and S^0 distinction, ring naturality and the nonzero square on CP². The Künneth and projective-ring statements used by the keys are imported theorems, not inferred from a cell count. |
| TA-B10 | [Homotopy Invariance and Degree](../books/algebraic-topology-chains-spaces/homotopy-invariance-and-degree.md), Exercises **10.1, 10.2, 10.3, 10.4**, with all four Solutions | Chain homotopy and Hurewicz, oriented signs, natural suspension and the explicit odd-sphere tangent field. Work 10.1–10.3 with n≥1 and 10.4 with n≥1. The excluded S^0 has zero-dimensional tangent spaces. |
| TA-B11 | [Manifold Duality](../books/algebraic-topology-chains-spaces/manifold-duality.md), Exercises **11.1, 11.2, 11.3, 11.4**, with all four Solutions | Closedness, connectedness where stated, orientation/coefficient choices and the relative replacement for boundary. For 11.4 retain compact locally contractible/tame knot hypotheses and restore ordinary H_0 after reduced duality. |

For 9.3 one can see the group isomorphism directly without attempting to compute an Ext group: if g is a homotopy inverse to f, homotopy invariance gives $f^*g^*=\operatorname{id}$ and $g^*f^*=\operatorname{id}$. Pullback preserves the cochain cup formula, so these inverse group maps are ring maps. The source's integral universal-coefficient sequence retains its Ext term. Declaring the target F_2 does not erase that integral Ext term.

For a closed oriented torus let a,b be its integral degree-one generators and u=a cup b its orientation generator. Then a²=b²=0, b cup a=-u and <u,[T²]>=1. The torsion-free degree-two group is needed when deducing a²=0 from 2a²=0. In characteristic two graded commutativity alone does not force an odd square to vanish; projective spaces in the source supply counterexamples. The wedge S¹∨S¹∨S² has the same additive integral homology as T² but all degree-one products zero. This rejects a proposed homotopy equivalence by naturality.

In 10.1 the normalized vector (1-t)f(x)-tx could vanish only if f(x)=x and t=1/2, because ||f(x)||=||x||=1. The hypothesis of no fixed point rules that out. In 10.4 the displayed odd-sphere vector has dot product zero with x and norm ||x||=1; in even dimension the normalized field would homotope the identity to an antipodal map of degree -1. These are proofs with endpoints and denominators checked, not preimage counts without signs.

For a closed n-manifold mod-two duality pairs finite-dimensional Betti numbers beta_k=beta_{n-k}. In odd n their Euler terms cancel. For a disk, ordinary H_2=0 although H^0=Z; the correct duality uses H_2(D²,S¹)=Z. The portfolios will ask you to choose a theorem version before applying it.

## TA-S04 — Smooth charts with actual transition calculations

Read the native **Unit 8** completely and redo its tangent-sphere proof and cumulative Question 4. A manifold is Hausdorff, second-countable and locally Euclidean (or locally a half-space when boundary is admitted). Smoothness adds smooth overlap maps with smooth inverses. A periodic parameter is not a single chart on a circle, and a square with its boundary retained is not a torus.

Let T²=R²/Z² and q:R²→T² be the quotient. The map [x,y]↦(e^{2pi i x},e^{2pi i y}) identifies it with S¹×S¹: the fibers are exactly lattice translates; quotient continuity gives the descended map, and the induced bijection from the compact image of [0,1]² to the Hausdorff product is a homeomorphism. Thus Hausdorffness follows from the product model. Rational rectangles in R² have countably many q-images, which are open because q^{-1}(q(U)) is the union of all lattice translates of open U. They form a basis, proving second countability.

For any lift p in R² choose an open box B=p+(-delta,delta)² with 0<delta<1/2. Distinct translates of B are disjoint, so q|_B is injective; its open-map property makes it a homeomorphism onto q(B). Its inverse is a chart. The translated inverse lifts on an overlap differ by an integer pair; continuity makes that pair constant on each connected overlap component. Hence transitions are translations, their Jacobian is I and they are smooth with smooth inverses. These charts orient the torus by dx∧dy and show that it has no boundary. They do not give one global real-valued x or y.

For S² minus the north pole N, take phi_N(x,y,z)=(x/(1-z),y/(1-z)). Its inverse is

$$\psi_N(u,v)=\left(\frac{2u}{1+u^2+v^2},\frac{2v}{1+u^2+v^2},\frac{u^2+v^2-1}{1+u^2+v^2}\right).$$

For S² minus the south pole S, take phi_S=(x/(1+z),y/(1+z)), with inverse having the same first two entries and third entry (1-u²-v²)/(1+u²+v²). Substitution proves both inverse identities; the denominators are positive on R². These charts cover S². On their overlap the transition is

$$T(u,v)=\left(\frac{u}{u^2+v^2},\frac{v}{u^2+v^2}\right),\quad (u,v)\ne(0,0),\qquad \det DT=-\frac{1}{(u^2+v^2)^2}.$$

Writing s=u²+v², DT=I/s-2ww^T/s², w=(u,v)^T. Its radial eigenvalue is -1/s and tangential eigenvalue 1/s; hence the displayed determinant. T composed with itself is the identity. The transition is smooth on the punctured plane and cannot be extended as that formula at zero. These particular two charts have opposite orientation conventions; reflect one chart coordinate to obtain an oriented atlas. A negative overlap determinant is not proof that the sphere is nonorientable.

For a smooth level F^{-1}(c), every tangent curve gives dF_p(v)=0 by the chain rule. At a regular point the regular-level theorem supplies dimension n-1, so this inclusion in ker dF_p is equality. The sphere converse can also be proved without a dimension count: if p·v=0 and ||p||=1, gamma(t)=(p+tv)/sqrt(1+t²||v||²) lies on S² and gamma'(0)=v.

**Required local problem set TA-M1–M4.** First give proofs before reading the following keys.

1. **TA-M1.** Prove all three global manifold axioms for the quotient torus, specify a chart domain and its overlap maps, and explain why the full closed square is not that chart.
2. **TA-M2.** Derive the stereographic transition and determinant. Check its inverse and repair the claim “the negative determinant means S² is nonorientable.”
3. **TA-M3.** Compute T_pS² at p=(1,0,0), realize v=(0,2,-1) by an actual curve, and audit the same kernel recipe at F^{-1}(0).
4. **TA-M4.** On the cylinder S¹×[0,1], distinguish boundary charts, the manifold boundary and the ambient boundary in R³. State the duality group containing a fundamental class.

**Complete public keys.** M1: the product identification proves Hausdorffness; countably many open q-images of rational rectangles give second countability; the boxes and their inverse restrictions prove local Euclidean structure. On every connected overlap component the change is addition by a fixed lattice vector, with inverse subtraction and Jacobian I. The full closed square is not open in R² and its quotient restriction identifies different boundary points, so it is not a chart. M2: substituting psi_N into phi_S gives (u/s,v/s) with s>0; T(T(w))=w because ||T(w)||²=1/s. Differentiation gives DT above and determinant -1/s². Reflect the first coordinate in the S chart; the new transition determinant is positive. The obstruction was an orientation convention, not a topological obstruction. M3: dF_p(v)=2v_x, so the tangent plane is {(0,a,b)}. The curve gamma(t)=(1,2t,-t)/sqrt(1+5t²) realizes the requested velocity. At the origin F^{-1}(0) is a point with tangent space {0}, while ker dF_0=R³; rank zero invalidates the regular-level inference. M4: near t=0 use a small angular coordinate and t≥0; near t=1 use a small angular coordinate and 1-t≥0. Interior points have ordinary two-dimensional charts. The manifold boundary is the two end circles. As a two-dimensional subset of R³ the cylinder has empty ambient interior and is closed, so its ambient topological boundary is the whole cylinder. With a chosen orientation its fundamental class lies in H_2(M,partial M;Z); H_2(M;Z)=0 because the cylinder retracts to S¹.

## TA-S05 — Forms, periods and Stokes with boundaries checked

Read the native **Unit 9** completely. The local definitions below make its compressed statements calculable. A one-form P dx+Q dy evaluates a vector (a,b) as Pa+Qb. Alternation gives dx∧dy(v,w)=v_x w_y-v_y w_x. For smooth coefficients,

$$d f=f_x dx+f_y dy,\qquad d(P dx+Q dy)=(Q_x-P_y)dx\wedge dy.$$

Commuting mixed partials gives d²f=0. For a smooth map F=(F_1,F_2), pullback substitutes dF_1,dF_2 for dx,dy, so $F^*(dx\wedge dy)=\det(DF)\,dx\wedge dy$. The chain rule gives $F^*(df)=d(f\circ F)$. Locally this also proves pullback commutes with d on one-forms by expanding derivatives and cancelling mixed partials. Forms are smooth here; differentiating nonsmooth coefficients would need another theory.

The torus translations in TA-S04 preserve dx,dy. They therefore define global one-forms alpha,beta even though x,y do not define global real-valued functions on T². Both are closed. Let a(t)=[t,0], b(t)=[0,t] for 0≤t≤1. Their period matrix is

$$\begin{pmatrix}\int_a \alpha&\int_a \beta\\ \int_b \alpha&\int_b \beta\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}.$$

An exact df integrates to zero on every closed smooth loop by the chain rule and the fundamental theorem of calculus. Thus c alpha+d beta is exact if and only if c=d=0. This proves independence of their de Rham classes. It does not yet prove they span all classes.

Here is that spanning proof for arbitrary smooth one-forms on this torus. Lift a closed omega to periodic coefficients P(x,y)dx+Q(x,y)dy on R², so Q_x=P_y. Define

$$h(x,y)=\int_0^xP(s,0)\,ds+\int_0^yQ(x,t)\,dt.$$

Differentiate: h_y=Q(x,y), while h_x=P(x,0)+integral_0^y Q_x(x,t)dt=P(x,y). Hence dh is the lift of omega. Periodicity makes h(x+1,y)-h(x,y) and h(x,y+1)-h(x,y) constant, since their derivatives are zero. Evaluating on the two coordinate paths makes these constants A=integral_a omega and B=integral_b omega. Consequently h-Ax-By is periodic and descends to a smooth function g on T². We obtain omega=A alpha+B beta+dg. Therefore H^1_dR(T²)=R[alpha]⊕R[beta], with exactness detected by its two periods. This elementary argument is local course work, not an unexplained invocation of de Rham's theorem.

Orient T² by alpha∧beta. Integrating over a fundamental square gives integral_T² alpha∧beta=1; opposite edges are identified, not retained as a boundary. The integral is the integral of a smooth volume form, with the edge set of measure zero. The fundamental class pairing, or the stated de Rham theorem, relates it to the cohomological orientation generator. Integral torsion is invisible to real differential forms.

Stokes requires a compact oriented smooth manifold with boundary and a smooth form on it, with induced boundary orientation. For the annulus r≤sqrt(x²+y²)≤R, 0<r<R, the outer boundary is counterclockwise and the inner one clockwise when the area orientation is dx∧dy. For eta=x dy, d eta=dx∧dy, so both sides equal pi(R²-r²). Treating both circles as counterclockwise would add instead of subtract. On a closed torus the boundary integral is zero, so alpha∧beta cannot be exact: its integral is 1.

**Required local problem set TA-F1–F4.**

1. **TA-F1.** Derive the coefficient of d((x²y)dx+(xy²)dy), and pull dx∧dy back by F(u,v)=(u²-v²,2uv). State where F is a local diffeomorphism.
2. **TA-F2.** On R² minus the origin set omega=(-y dx+x dy)/(2pi(x²+y²)). Prove it is closed, compute its period on the positively oriented unit circle, and decide if it is exact. Explain exactly why Stokes on the filled disk is invalid.
3. **TA-F3.** Use the torus spanning proof to classify omega=3alpha-2beta+d sin(2pi x). Give its two periods and decide if it is exact. Does d sin(2pi x) make sense globally?
4. **TA-F4.** Compute the two boundary integrals for eta=x dy on the annulus with r=1,R=2, and decide if alpha∧beta is exact on T². Name both theorem hypotheses you would lose on a nonorientable or noncompact domain.

**Complete public keys.** F1: Q_x=y² and P_y=x², so d omega=(y²-x²)dx∧dy. The Jacobian of F is ((2u,-2v),(2v,2u)), with determinant 4(u²+v²). Thus $F^*(dx\wedge dy)=4(u^2+v^2)du\wedge dv$; it is a local diffeomorphism exactly away from (0,0), by the inverse function theorem. This does not prove a global inverse. F2: Q_x=(y²-x²)/(2pi(x²+y²)²) and P_y=(y²-x²)/(2pi(x²+y²)²), so d omega=0. Along (cos 2pi t,sin 2pi t), the numerator is 2pi dt and the denominator 2pi, giving period 1. A global primitive would give period 0, a contradiction. The form is undefined at the origin and is not smooth on the disk; Stokes there has a failed domain hypothesis. Local angle primitives on arcs do not join to one real-valued angle around the circle. F3: the periods are 3 and -2, since the sine term is the derivative of a globally defined periodic function. Thus [omega]=3[alpha]-2[beta] is nonzero and omega is not exact. The explicit periodicity, not a global real x, makes the sine function well-defined. F4: the outer counterclockwise integral is 4pi; the inner clockwise integral is -pi; their sum and the area integral are 3pi. If alpha∧beta=d eta on the torus, Stokes would give integral 0 on this compact oriented boundaryless manifold, contradicting 1. The stated theorem needs orientability with an orientation and compactness; extensions to noncompact domains need compact support or suitable additional hypotheses and are not automatic.

## TA-S06 — Filtrations, maps and finite persistence

Complete [Persistent Homology and Computational Topology](../books/algebraic-topology-chains-spaces/persistent-homology-and-computational-topology.md) in full, then **TA-B16: Exercises 16.1, 16.2, 16.3, 16.4** and their four immediate Solutions. The source's finite-point-cloud Rips theorem uses the diameter convention and the same metric space, fixed degree and fixed coefficient field. Its factor 2 does not apply to an arbitrary pair of filtrations. The source's illustrative point-cloud paragraph is not a significance test or a reconstruction theorem.

The finite calculations here use **F_2** and explicitly declared simplices. At time t include every simplex whose printed time is ≤t. A triangle is included only when its face is listed; three edges alone do not fill it. The final complexes stay constant afterwards. An interval [b,d) contributes one dimension at times b≤t<d; a null death below means infinity. Finite-dimensional filtration modules have an interval decomposition, used here as a theorem. Pairing a birth and death by reduction is not proof of a sampled manifold.

For a hand example put vertices a,b,c at 0, edges ab at 1, bc at 2, ac at 3, face abc at 4. In ordered bases, the edge columns are a+b,b+c,a+c. The first two kill two component births. Reduce ac by bc then ab: its boundary becomes zero, creating the cycle ab+bc+ac at 3. The face has that cycle as boundary and kills it at 4. Thus H_0 has [0,infinity),[0,1),[0,2); H_1 has [3,4). At times 0,1,2,3,4 the Betti pairs are (3,0),(2,0),(1,0),(1,1),(1,0). A cycle can be present in the chain group at death time while its homology class has become zero.

The portfolios' public data below give an ordered matrix A on torus lifts and a separate filtered simplicial complex K. **K is a filled or partly filled square in the plane, not a triangulation of the quotient torus.** The symbols name separate spaces. Computing H_1(K)=0 never proves H_1(T²)=0. The map f_A([x,y])=[A(x,y)^T] is well-defined because A has integer entries. With column loop coordinates its induced H_1 map is A; with column one-form coefficients its pullback is A^T. A row coefficient vector lambda pulls back as lambda A.

The printed JSON is the full problem input, not learner output. Each simplex string lists its vertices in alphabetical order; omitted higher simplices are absent. The code in TA-CODE is optional public comparison support; by-hand boundaries, cycles and pairings are a complete reproduction. If you run it, retain actual inputs, output and errors and say which public implementation you used. No code run is required or claimed here.

~~~json
{
  "schema": "topology-advanced-data-v1",
  "coefficientField": "F2",
  "lambda": [3, -2],
  "loop": [1, -1],
  "cases": [
    {
      "id": "TA-P",
      "matrix": [[2, 1], [1, 1]],
      "simplices": [
        ["a",0],["b",0],["c",0],["d",0],
        ["ab",1],["bc",2],["cd",3],["ad",4],["ac",5],
        ["abc",6],["acd",7]
      ]
    },
    {
      "id": "TA-C",
      "matrix": [[2, 0], [0, 1]],
      "simplices": [
        ["a",0],["b",0],["c",0],["d",0],
        ["ab",1],["bc",2],["cd",3],["ad",4],["ac",5],
        ["abc",6]
      ]
    },
    {
      "id": "TA-R",
      "matrix": [[1, 2], [0, 0]],
      "simplices": [
        ["a",0],["b",0],["c",0],["d",0],
        ["ab",1],["bc",2],["ac",3],["cd",4],["ad",5],
        ["abc",6],["acd",7]
      ]
    }
  ]
}
~~~

A useful independent check is the rank invariant rho_k(s,t)=rank(H_k(K_s)→H_k(K_t)), s≤t. In an interval basis it counts bars born by s and dying after t. Over F_2 it can also be computed directly as

$$\rho_k(s,t)=\dim Z_k(K_s)-\dim\bigl(Z_k(K_s)\cap B_k(K_t)\bigr).$$

Both subspaces sit in the final ordered k-chain space. This formula follows because the induced map sends a cycle at s to its class modulo boundaries at t; its kernel is precisely that intersection modulo the boundaries already present at s. Equivalently its image is (Z_s+B_t)/B_t. Checking only beta_k(t)=rho_k(t,t) does not check the maps.

For two finite diagrams, allow matching to the diagonal. The L-infinity cost of matching (b,d) to the diagonal is (d-b)/2, realized by ((b+d)/2,(b+d)/2). Essential intervals can only match essential intervals at finite cost. Triangle inequality follows by composing matchings, allowing diagonal copies as needed, using the pointwise triangle inequality, then taking infima (or epsilon-optimal matchings). This spells out the diagonal and infimum steps behind 16.3's short worked answer. Equal final Betti numbers alone do not determine these matchings.

## TA-P — Primary torus and filtered-disk portfolio

Use the TA-P input. Submit the following **eight deliverables before its public model**.

1. Prove f_A descends, give its global inverse or prove it has none, and calculate its derivative, signed degree and induced H_1 map. State a basepoint and orientations.
2. Derive $f_A^*\alpha$, $f_A^*\beta$, $f_A^*(\alpha\wedge\beta)$ and $f_A^*\omega$ for omega=3alpha-2beta+d sin(2pi x). Compute its period on the printed loop and show whether it is exact.
3. Rebuild the smooth torus chart argument, including global Hausdorff/countability, transitions, orientation and boundary. State which smooth or comparison theorems were used.
4. Give the torus's integral homology and cup ring. Distinguish it from S¹∨S¹∨S² despite equal additive homology, and check the duality hypotheses.
5. Give K's chain bases and both actual boundary matrices over F_2. Solve Z_1, B_1 at t=5,6,7 and prove the ranks. Do not use a torus quotient on K.
6. Reduce every nonvertex column, record the killing pairs, list H_0/H_1 bars and all integer-time Betti numbers 0–7. Check Euler at the final time.
7. Compute rho_1(4,6), rho_1(5,6), rho_1(5,7) by cycles modulo later boundaries. State what the barcode does and does not imply about an unknown shape.
8. Give one failed-hypothesis audit for Stokes and one for persistence stability, then preserve first/comparison/revised worksheets with actual public exposure.

### TA-P complete public model

Use basepoint [0,0] and the orientation alpha∧beta in source and target. Lattice translates change A(x,y)^T by integer vectors, so f_A descends continuously and smoothly in the lifted charts. Its derivative is A in every such chart. For A=((2,1),(1,1)), the integer matrix B=((1,-1),(-1,2)) satisfies AB=BA=I. It induces a smooth global inverse, proving a diffeomorphism, not just a local inverse. The columns of A are the images of the coordinate loops; hence the based pi_1=Z² and integral H_1 maps are A.

Pullback gives $f_A^*\alpha=2\alpha+\beta$, $f_A^*\beta=\alpha+\beta$ and $f_A^*(\alpha\wedge\beta)=\alpha\wedge\beta$. Naturality of the cup product sends the integral top generator to det(A) times itself, so degree=1. Alternatively integrate the pulled-back orientation form. We obtain

$$f_A^*\omega=4\alpha+\beta+d\sin(2\pi(2x+y)).$$

Its coordinate periods are (4,1); along t↦[t,-t] the period is 4-1=3. The exact sine term has zero period, and nonzero periods forbid exactness. Its sine argument is well-defined modulo one because the coefficient row is integral.

The charts and global axioms are those proved in TA-S04, with all overlap derivatives I, empty manifold boundary and a consistent orientation. Finite CW cellular/singular comparison gives H_0=Z,H_1=Z²,H_2=Z and zero above; the attaching commutator has zero exponent sums. Its ring is the exterior algebra on a,b, with a cup b=u nonzero. The wedge has zero degree-one products, so naturality forbids a homotopy equivalence. Poincaré duality applies to the connected compact oriented boundaryless torus. It was not inferred from the planar drawing, and the general duality and comparison theorems were used, not proved anew.

For K at 5 take vertices (a,b,c,d), edges (ab,bc,cd,ad,ac), no faces. Over F_2 the matrices, with the same edge order at later times and face order (abc,acd), are

$$D_1=\begin{pmatrix}1&0&0&1&1\\1&1&0&0&0\\0&1&1&0&1\\0&0&1&1&0\end{pmatrix},\qquad
D_2(7)=\begin{pmatrix}1&0\\1&0\\0&1\\0&1\\1&1\end{pmatrix}.$$

At 5 D_2 is 5-by-0; at 6 it is just the first column of D_2(7). The first three D_1 columns are independent and every column has even vertex sum, so rank D_1=3. Both D_2 columns have zero boundary; the first has first coordinate 1 while the second has first coordinate 0 and third coordinate 1, so they are independent. Let z=ab+bc+cd+ad and w=ab+bc+ac. They are independent cycles and span the dimension-two kernel. Thus at 5 Z_1=<z,w>, B_1=0; at 6 Z_1 is unchanged and B_1=<w>; at 7 B_1=<w,z+w>=Z_1. In particular z survives at 6 and dies at 7. H_2=0 because D_2 is injective; final H_0=F_2 and H_1=0. The counts give chi=4-5+2=1.

Reduction kills b by ab, c by bc, d by cd. The ad column reduces to zero by the tree columns and creates z at 4; ac creates w at 5. The abc boundary kills the ac birth at 6. Reducing acd by abc leaves z, whose largest edge is ad, so acd kills the ad birth at 7. These pairs give H_0=[0,1),[0,2),[0,3),[0,infinity) and H_1=[4,7),[5,6). The rows in the ledger below include death time in the complex; the dead bar does not contribute at that time.

At s=4 the cycle subspace is <z>; at 6 the boundary space is <w>, so their intersection is zero and rho_1(4,6)=1. At s=5 it is <z,w>, with one-dimensional intersection with B_1(6), hence rho_1(5,6)=1. At 7 all these cycles bound and rho_1(5,7)=0. This confirms inclusion maps as well as dimensions. The barcode is a finite algebraic invariant of this declared filtration. It supplies no statistical significance, sampling guarantee or recovered manifold.

The punctured-plane angular form from F2 is not smooth on a filled disk, so the disk Stokes application fails. Our filtration times are arbitrary declarations rather than Rips distances on two finite subsets of one metric space; a Hausdorff stability bound cannot be invoked without that missing construction. Preserve these failures separately from arithmetic mistakes.

## TA-C — Changed degree, torsion and a surviving cycle

Use the TA-C input, which changes both the torus matrix and the filtered complex. Complete the same **eight deliverables** as TA-P, replacing its wedge comparison in deliverable 4 with this required comparison: compute torus and Klein bottle homology over Z, F_2 and R and state the exact duality version that applies. In deliverables 5–7 use t=5,6 and the final constant stage; compute rho_1(4,6), rho_1(5,6) and rho_1(5,8). Add a proof of the number of covering sheets and the deck group; a nonzero real determinant is not a proof of a global inverse. Decide which previous arguments survive and which must change.

### TA-C complete public model

Here A=((2,0),(0,1)). It descends by integrality and has derivative A with determinant 2, hence is a local diffeomorphism. For any [u,v], the two distinct preimages are [u/2,v] and [u/2+1/2,v]. Choosing a target lift box sufficiently small gives two disjoint inverse boxes, each mapped diffeomorphically onto it; these exhaust the inverse image by the displayed solutions modulo integers. This proves a two-sheeted covering. Translation [x,y]↦[x+1/2,y] exchanges the sheets. Any deck transformation is determined by one point of a fiber (unique lifting on connected T²); thus these two transformations form the entire deck group Z/2. The candidate real inverse diag(1/2,1) does not descend: changing u to u+1 changes u/2 by 1/2. The map is not a global homeomorphism.

The induced pi_1 and H_1 map sends (m,n)↦(2m,n); its image has index two. Pullbacks are 2alpha,beta,2alpha∧beta, and the signed degree is 2. For the same omega,

$$f_A^*\omega=6\alpha-2\beta+d\sin(4\pi x).$$

Its coordinate periods are (6,-2); on the printed loop the period is 6-(-2)=8, so it is not exact. The chart, countability, orientation and no-boundary arguments remain valid for the torus itself; they never required f_A to be injective.

The torus retains integral (Z,Z²,Z). The Klein bottle's attaching word aba^{-1}b gives d_2=(0,2), so its integral groups are (Z,Z⊕Z/2,0). Over F_2 both have Betti numbers (1,2,1); over R the torus has (1,2,1) and the Klein bottle (1,1,0). Integral oriented Poincaré duality applies to T², while the nonorientable closed Klein bottle uses F_2 duality (or an explicitly specified orientation local system). De Rham cohomology uses R and cannot retain the Z/2 summand. Equal constant-filtration mod-two barcodes would not identify the surfaces.

K has the same D_1, z,w and rank three as TA-P. Its only face is abc, with column w; there is no acd at any time. Thus B_1=0 at 5 and <w> for t≥6; Z_1=<z,w>, with H_1 generated by [z] after 6. The single face boundary is nonzero, so H_2=0. Final chi=4-5+1=0=1-1. The reduction pairs for components are unchanged and abc kills ac at 6. The ad birth never dies: H_1=[4,infinity),[5,6). All three requested rank invariants equal 1. Omitting one face changed the eventual first homology and an essential interval; it did not change the torus's H_1 or show a closed surface in the data.

The Stokes and Rips hypothesis failures in TA-P still fail for the same reasons. The successful local derivative computation cannot repair a failed global inverse, and a long bar cannot replace a sampling model.

## TA-R — Public return with a collapsed torus map

Use the TA-R input. Attempt a fresh worksheet and record prior public exposure; no elapsed-time or independence claim is implied. Complete the same **eight deliverables** as TA-P, replacing its wedge comparison with a proof that f_A is neither a covering onto T² nor a homotopy equivalence, while the domain torus remains a smooth oriented manifold. In deliverable 7 compute rho_1(3,6), rho_1(5,6), rho_1(5,7), and compare this filtration with TA-P. Prove the degree-one bottleneck distance for their finite H_1 diagrams, allowing diagonal matches. A final Betti comparison is insufficient.

### TA-R complete public model

The integer matrix A=((1,2),(0,0)) descends smoothly, but its derivative has rank one and determinant zero. Its image is the circle {[s,0]}. The fiber above [0,0] contains the entire loop t↦[-2t,t], which is injective for 0≤t<1; hence the fiber is not discrete. A covering of T² is surjective with discrete fibers in evenly covered neighborhoods, and this map has neither property. Its pi_1 and H_1 map sends (m,n) to (m+2n,0), with kernel generated by (-2,1) and image Z(1,0). The failed isomorphism rules out a homotopy equivalence. No conclusion about the domain's smoothness follows from a singular derivative of one map on it.

Pullbacks are alpha+2beta and 0, giving $f_A^*(\alpha\wedge\beta)=0$ and signed degree 0. For the same omega,

$$f_A^*\omega=3\alpha+6\beta+d\sin(2\pi(x+2y)).$$

Its coordinate periods are (3,6) and its period on [t,-t] is 3-6=-3; it is still not exact. In particular, zero degree is not the assertion that every pulled-back one-form is exact. The map annihilates two-dimensional cohomology while retaining a one-dimensional part of degree one.

The torus still has the same atlas, orientation, integral homology and exterior ring. Its top generator pulls back to zero because (alpha+2beta)∧0=0. This follows from ring naturality as well as the differential calculation. Closed oriented duality remains valid for the domain and target; it does not assert that every map between them is invertible.

For K use chronological edge basis (ab,bc,ac,cd,ad), vertex basis (a,b,c,d) and face basis (abc,acd). Then

$$D_1^R=\begin{pmatrix}1&0&1&0&1\\1&1&0&0&0\\0&1&1&1&0\\0&0&0&1&1\end{pmatrix},\qquad
D_2^R=\begin{pmatrix}1&0\\1&0\\1&1\\0&1\\0&1\end{pmatrix}.$$

The tree edges ab,bc,cd again have independent boundaries of rank three. Now w=ab+bc+ac is born at 3, and z=ab+bc+cd+ad at 5. The abc column kills w at 6. The acd column w+z has its largest edge ad, so it kills the birth at 5 at time 7; no cancellation with abc is needed to identify that pivot. Both face columns are independent. As before Z_1=<w,z> at 5, B_1=<w> at 6 and B_1=Z_1 at 7, and H_2=0. At 3 there is already one cycle while d is still isolated; cd at 4 kills the last separate component. Thus H_0=[0,1),[0,2),[0,4),[0,infinity) and H_1=[3,6),[5,7). Final chi=1 and final homology agree with TA-P. The requested ranks are 0,1,0, respectively: w already bounds at 6, but z does not.

TA-P's H_1 points are (4,7),(5,6); TA-R's are (3,6),(5,7). Match (4,7) to (3,6), cost 1, and (5,6) to (5,7), cost 1. This gives d_B≤1. For a cost strictly less than 1, (4,7) could match neither return point (each has L-infinity distance 1) nor the diagonal (distance 3/2). Therefore every matching has cost at least 1 and d_B=1. Matching an interval to the diagonal must be considered; here it cannot improve that lower bound. This exact finite comparison is not the Rips/Hausdorff stability theorem.

The angular-form and arbitrary-filtration hypothesis failures remain. Correcting a mistaken “all final disks have the same barcode” requires new inclusion-map work, not a new picture.

## TA-LEDGER — Public comparison and repair

The following ledger is part of the complete models. Infinity is written inf. Each beta row lists times 0,1,2,3,4,5,6,7 in order; TA-C stays constant after 6.

| Case | det A | lambda A | Period on (1,-1) | H_0 intervals | H_1 intervals | beta_0 at 0–7 | beta_1 at 0–7 | final beta_2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TA-P | 1 | (4,1) | 3 | (0,1);(0,2);(0,3);(0,inf) | (4,7);(5,6) | 4,3,2,1,1,1,1,1 | 0,0,0,0,1,2,1,0 | 0 |
| TA-C | 2 | (6,-2) | 8 | (0,1);(0,2);(0,3);(0,inf) | (4,inf);(5,6) | 4,3,2,1,1,1,1,1 | 0,0,0,0,1,2,1,1 | 0 |
| TA-R | 0 | (3,6) | -3 | (0,1);(0,2);(0,4);(0,inf) | (3,6);(5,7) | 4,3,2,2,1,1,1,1 | 0,0,0,1,1,2,1,0 | 0 |

Review each portfolio by eight separate criteria: descended map and global behavior; derivative/degree and based group map; one-form and period calculations; full manifold and theorem hypotheses; coefficients/cup/duality comparison; ordered chain matrices and kernel/image proofs; persistence maps/pairings and finite comparison; precise failure checks and exposure/revision trail. For each criterion record “supported,” “partly supported,” or “repair needed” and quote the actual supporting line or first gap. These are descriptive public self-review criteria, not a numerical mastery score.

Repair a half-integer “inverse” by testing it on two representatives of one lattice class. Repair a form claimed exact by integrating on both coordinate loops. Repair a wrong Stokes sign by writing the induced inner boundary orientation. Repair a rank over R presented as a Z quotient by recomputing the integer attaching boundary and its torsion. Repair a barcode guessed from final Betti numbers by recording births, killing columns and rho(s,t). Repair an asserted sampled surface by naming the absent metric, sampling and reconstruction assumptions. A corrected answer should retain the first error and the mathematical reason it failed.

## TA-CODE — Optional bounded public persistence reference

This standalone JavaScript computes the displayed finite F_2 persistence, including zero-length intervals when tied values create them. Such intervals can be omitted from the ordinary barcode. It accepts at most 16 simplices on vertices a–f, dimension at most two, and integer times 0–100. It checks every codimension-one face and its filtration time, which recursively checks all faces. It sorts by time, then dimension, then a fixed alphabetical comparison, so faces precede cofaces at equal time. It rejects malformed, duplicate and nonfiltered inputs. It makes no calls to Euler records, a server, a package or a network.

Reduction adds earlier columns with the same last nonzero row. Over F_2 this is XOR; it preserves represented boundaries up to earlier boundary combinations. A nonzero column pairs its pivot's zero birth column with that column's death time. Zero columns never used as pivots survive. This is the source algorithm on bounded declared input, not a general topology prover. The independent regression oracle also computes persistent ranks by enumerating cycle/boundary subspaces, so comparing code to itself is not its only check.

~~~javascript
function topologyPersistence(input) {
  if (!Array.isArray(input) || input.length < 1 || input.length > 16) {
    throw new RangeError("supply 1 to 16 simplices");
  }
  const seen = new Map();
  const rows = input.map(row => {
    if (!Array.isArray(row) || row.length !== 2) throw new TypeError("simplex/time pair");
    const [simplex, time] = row;
    if (typeof simplex !== "string" || !/^[a-f]{1,3}$/.test(simplex) ||
        [...simplex].some((c, i) => i > 0 && c <= simplex[i - 1])) {
      throw new TypeError("ordered distinct vertices a-f, dimension at most two");
    }
    if (!Number.isInteger(time) || time < 0 || time > 100) throw new RangeError("integer time 0-100");
    if (seen.has(simplex)) throw new TypeError("duplicate simplex");
    seen.set(simplex, time);
    return { simplex, time };
  });
  for (const { simplex, time } of rows) {
    if (simplex.length === 1) continue;
    for (let i = 0; i < simplex.length; i += 1) {
      const face = simplex.slice(0, i) + simplex.slice(i + 1);
      if (!seen.has(face) || seen.get(face) > time) throw new TypeError("missing or later face");
    }
  }
  rows.sort((a, b) => a.time - b.time || a.simplex.length - b.simplex.length ||
    (a.simplex < b.simplex ? -1 : a.simplex > b.simplex ? 1 : 0));
  const index = new Map(rows.map((r, i) => [r.simplex, i]));
  const reduced = [], owner = new Map(), deaths = new Map();
  for (let j = 0; j < rows.length; j += 1) {
    const simplex = rows[j].simplex;
    let column = 0;
    if (simplex.length > 1) {
      for (let i = 0; i < simplex.length; i += 1) {
        const face = simplex.slice(0, i) + simplex.slice(i + 1);
        column ^= 1 << index.get(face);
      }
    }
    while (column !== 0) {
      const pivot = 31 - Math.clz32(column);
      if (!owner.has(pivot)) break;
      column ^= reduced[owner.get(pivot)];
    }
    reduced[j] = column;
    if (column !== 0) {
      const pivot = 31 - Math.clz32(column);
      owner.set(pivot, j);
      deaths.set(pivot, j);
    }
  }
  return rows.flatMap((row, i) => {
    if (reduced[i] !== 0) return [];
    const death = deaths.get(i);
    return [{
      degree: row.simplex.length - 1,
      birth: row.time,
      death: death === undefined ? null : rows[death].time,
      creator: row.simplex,
      killer: death === undefined ? null : rows[death].simplex
    }];
  }).sort((a, b) => a.degree - b.degree || a.birth - b.birth ||
    (a.death ?? Infinity) - (b.death ?? Infinity) ||
    (a.creator < b.creator ? -1 : a.creator > b.creator ? 1 : 0));
}
~~~

To reproduce a case in an existing JavaScript environment, call topologyPersistence with that case's printed simplices array. Save the returned rows; check them against the full public ledger and hand proofs. An unsupported input is a rejected request, not an approximation to an answer. No browser, installation, new UI, private store or graded submission is needed.
