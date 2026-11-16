
# Geometry beyond the Euclidean Chart: Models, Curvature, and Rectification

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-geometry-trigonometry-advanced) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Differential geometry of curves and surfaces](#/courses/course-differential-geometry) · [Real analysis](#/courses/course-lucent-analysis).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A drawing can preserve angles while distorting lengths, or preserve incidence while changing both. This course joins the existing spherical, hyperbolic and projective readings into a proof-led advanced sequence. You will calculate in two hyperbolic charts, prepare the calculus of constant curvature, complete a real-coordinate Desargues proof, and rectify a fixed planar project through primary, changed and later-return work. The scope is non-Euclidean and projective geometry with curvature preparation. General surface theory and reconstruction of an unknown three-dimensional scene require further teaching.

## Preparation, repairs, and study records

Bring proof-based Euclidean geometry, vector dot products, matrix multiplication, determinants, rank, nullspaces, inverses, radians, elementary trigonometric identities, logarithms, inverse hyperbolic functions, limits and product/quotient/chain differentiation. Before the curvature calculation, learn partial derivatives by holding the other coordinate fixed, the gradient, the Laplacian $\Delta f=f_{xx}+f_{yy}$, and the chain rule along a curve. The two-variable derivatives needed here are worked below; no silent prerequisite of a whole manifold or numerical-analysis book is imposed. Elementary definite integrals explain area elements; the general Gauss–Bonnet theorem is explicitly imported, not proved by an elementary integral slogan.

First complete Questions 1–8 with their adjacent answers in the [geometry prerequisite diagnostic](#/books/geometry-proof-reference). Use its repair routes according to the actual failed question, rather than treating its descriptive score as a grade. For proof language use [Proof Foundations](#/courses/atlas-proof-foundations), Sessions 1–2 and Session 4's proof debugging. For rank, inverse and homogeneous calculations use [Linear Algebra as Transformation](#/courses/atlas-linear-transformations), Lessons 1–4 and Workshops 1–2. For limits, derivatives, integrals and their hypotheses use [Calculus as Change and Accumulation](#/courses/atlas-calculus-change), Modules 1–4 and Workshops A–C. Return to the failed calculation after repair. Review [geometry notation](#/books/geometry-proof-reference), especially claim status, curvature scale and projective equivalence.

Keep dated first attempts, a comparison against the public full key, a revised argument, and a short account of help and answer exposure. Use separate files labelled by stable task ID and date; the native reader's mutable notes and studied marks are useful navigation records, not immutable submissions, grades, verified independent work or mastery. No new writing-guide task or automatic grader is created here. Shared exports retain their existing bounded formats; they do not automatically collect a folder of external calculations or preserve an overwritten native note. Export your actual files separately. Public keys can expose the later-return answers before that attempt: a later reconstruction is a public self-study return, not a verified delayed or unseen assessment. No delay, learner timing or effectiveness observation is claimed.

The full selected workload and added joined work are **unknown**. The sources' 240-, 220-, 200-, 210- and 180-minute figures remain their authored planning source estimates, not an additive measured course total. Preparation, revision, changed and return work add time. The new course therefore has no numerical workload estimate. Programming and the original synthesis's computational variant are optional; the required proof-focused route has complete hand-calculation feedback below.

## Required reading and question order

The following are selected native readings with their actual questions and complete adjacent keys. Open the named heading, write before reading its answer, and compare the reasoning and domain conditions. A book link does not assign or qualify the whole book.

| Order | Required native reading and exact task/key address | Joined work |
| --- | --- | --- |
| 1 | [Spherical and Hyperbolic Geometry](../articles/spherical-hyperbolic-geometry.md), Sections 1–5; Section 12, **1. Equatorial distance**, **2. Spherical cosine law**, **3. Spherical area**, each with **Solution** | Lesson 1; GEO-ADV-CP1 |
| 2 | Same deep dive, Sections 6–11; Section 12, **4. Disk radial distance**, **5. Hyperbolic area**, **6. Curvature rescaling**, **7. Orthogonal circle**, each with **Solution**. [Hyperbolic Geometry](../books/geometry-proof-reference/hyperbolic-geometry.md), the complete chapter including **Practice exercises**, **Exercise 1–4 / Solution** | Lessons 1–2; GEO-ADV-CP2 |
| 3 | [Curved Metric Computation](../books/analytic-computational-geometry/curved-metric-computation.md), complete chapter; **Practice exercises with solutions**, **Exercise 1–5 / Solution** | Check small-angle, antipodal and open-disk failure policies; do not confuse a floating-point example with an exact proof |
| 4 | [Perspective and Projective Geometry](../articles/projective-perspective-geometry.md), Entry check and Sections 1–7; Section 10, **1. Image point**, **2. Ideal intersection**, **3. Incidence under a homography**, **4. Circle nonclaim**, **5. A transformed line**, **6. Cross-ratio retrieval**, **7. Recovery boundary**, each with **Answer** | Lesson 3; GEO-ADV-CP3 |
| 5 | [Projective Planes](../books/geometry-proof-reference/projective-planes.md), complete chapter; **Practice exercises**, **Exercise 1–4 / Solution**. Use the explicit Fano labeling and completed real Desargues calculation below | GEO-ADV-CP4; distinguish the source's division-ring theorem statement from the real proof executed here |
| 6 | Projective deep dive Sections 8–9 and **Synthesis task: rectify and audit** | Choose its proof-focused option, with the fixed GEO-ADV-P001/P002/R001 data and full keys below; this replaces choosing an unspecified photograph, not the source's mathematical requirements |

There are 27 required source questions (7+4+5+7+4), eight entry questions, four joined checkpoints, and three connected project certificates. Counts are an inventory, not evidence of understanding. Pappus and general Gauss–Bonnet remain imported theorems in the selected source, whose proof boundaries stay visible. In the hyperbolic chapter, the neutral Saccheri–Legendre and rectangle/parallel equivalences are dependencies; read **What fails or weakens — Angle sum / Rectangle existence / Common error: smuggling parallels** in [Neutral Geometry](../books/geometry-proof-reference/neutral-geometry.md) before its synthetic consequences. Those passages contain sketches; this course uses those stated results rather than claiming to complete their axiomatic proofs. The disk computations below independently demonstrate the model's metric phenomena.

## Lesson 1 — The model owns the distance

On a sphere of radius $R>0$, nonzero direction vectors are normalized to unit $u,v$ and distance is $R\arccos(u\cdot v)$. Positive rescaling a direction leaves its point unchanged; replacing it by its negative gives the antipodal spherical point. A shortest great-circle route between distinct nonantipodal points is unique. At coincident inputs distance is zero but no unique great circle or initial bearing is selected; at antipodes distance is $\pi R$ and many shortest semicircles exist. A raw sphere has two intersections of distinct great circles. The elliptic quotient identifies antipodes, has distance $R\arccos|u\cdot v|$ and diameter $\pi R/2$; it is a different point space, not a license to insert an absolute value into spherical navigation. Orthogonal quotient points can have two minimizing arcs.

The disk has **only** $r<1$ as finite points. For curvature $-1/R^2$ its distance is $R$ times the curvature $-1$ formula. The drawing's radius is dimensionless; a Euclidean ruler on that drawing does not measure intrinsic length. For equal drawn radial increments, $d(0,1/4)=R\log(5/3)$ while $d(1/2,3/4)=R\log(7/3)$, since on a diameter $d(a,b)=R|\log((1+b)(1-a)/((1-b)(1+a)))|$. Both increments are $1/4$, but $7/3>5/3$. The disk is conformal, not length-preserving. Boundary points are ideal, at infinite distance from finite points; outside points and zero spherical vectors are rejected, rather than repaired by clamping.

For a spherical geodesic triangle in the source's convex shorter-arc hemisphere scope, area is $R^2(\text{angle sum}-\pi)$. For a hyperbolic geodesic triangle it is $R^2(\pi-\text{angle sum})$. The units are squared length. A latitude boundary has geodesic curvature, so the triangle formula cannot be reused merely because a drawing has three corners. Hyperbolic similarity implies congruence at a **fixed** curvature scale: scaling $R$ changes the geometry's metric and curvature, rather than producing a new similar triangle within that same metric.

### GEO-ADV-CP1 — problem

1. At $R=2$, use unit vertices $N=(0,0,1)$, $P=(1,0,0)$, $Q=(0,1,0)$. Find sides, angles, area and spherical versus elliptic antipodal distance. State coincident and antipodal route failures.
2. In the disk at the same scale use $O=(0,0)$, $A=(1/2,0)$, $B=(0,1/2)$. Find $d(O,A)$, $\cosh(d(A,B)/R)$, the orthogonal-circle center and radius squared, the two other angles and area.
3. Prove the equal drawn increments above have different intrinsic lengths. State what happens at radius 1 and why the curved-distance source's clamping policy cannot cure it.
4. Compare rescaling coordinates $(x,y)\mapsto(\lambda x,\lambda y)$ inside the upper half-plane at fixed $R$ with changing $R$ to $\lambda R$.

### GEO-ADV-CP1 — complete model and repair

1. Every dot product is zero: the three shorter sides are $\pi R/2=\pi$. Tangents give three right angles. Excess is $\pi/2$, area $4\pi/2=2\pi$. Sphere antipodes are distance $2\pi$; in the quotient they are the same point, distance zero. Coincident inputs do not select a unique great circle/heading; antipodes have many shortest routes. Repair any sphere/quotient confusion by naming the point-equivalence relation before applying a distance formula.
2. $d(O,A)=2\log3$. Squared Euclidean separation of $A,B$ is $1/2$ and each boundary factor is $3/4$, so $\cosh(d(A,B)/2)=1+1/(9/16)=25/9$. The circle center is $(5/4,5/4)$, radius squared $17/8$; center norm squared minus radius squared is 1. At $A$ the angle to the inward diameter has tangent $(q-r)/q=3/5$, so both equal angles are $\alpha=\arctan(3/5)\in(0,\pi/4)$. Area is $4(\pi/2-2\alpha)>0$. Here $\pi/2-2\alpha=\arctan(8/15)$ by the double-angle tangent and its range. Distances are intrinsic; $|A-B|=1/\sqrt2$ is merely the picture's chord length.
3. Integrate the diameter length factor $2R/(1-x^2)$, or subtract radial logarithms: the two answers are $R\log(5/3)$ and $R\log(7/3)$. The logarithm is strictly increasing, proving inequality. At radius1 the disk domain fails and finite-point distance diverges in the inward limit. Clamping a spherical normalized dot product only addresses small representation error after valid input; it cannot turn an ideal disk boundary into an interior point or normalize a zero vector.
4. In the upper-half-plane distance expression, numerator and product of heights both gain $\lambda^2$ for $\lambda>0$. This is a chart isometry at fixed curvature, preserving intrinsic distance. Changing the metric scale $R$ instead multiplies every distance by $\lambda$, area by $\lambda^2$ and curvature by $\lambda^{-2}$. Nonpositive $\lambda$ is not this upper-half-plane self-map. Repair a conflation by labelling which object, chart coordinate or metric, was changed.

## Lesson 2 — Curvature preparation and a chart certificate

For $r^2=x^2+y^2$, stereographic coordinates on the sphere are

\[
\Phi_R(x,y)=\frac{R}{1+r^2}(2x,2y,r^2-1),\qquad (x,y)\in\mathbb R^2.
\]

They miss the north pole $(0,0,R)$; the equator is $r=1$, not a metric boundary. Put $D=1+r^2$. Then
$\Phi_x=(2R/D^2)(D-2x^2,-2xy,2x)$ and
$\Phi_y=(2R/D^2)(-2xy,D-2y^2,2y)$.
Expanding their dot products gives $\Phi_x\cdot\Phi_x=\Phi_y\cdot\Phi_y=4R^2/D^2$ and $\Phi_x\cdot\Phi_y=0$. Thus the pulled-back spherical metric is $ds_+^2=4R^2(dx^2+dy^2)/(1+r^2)^2$. For the hyperbolic disk the intrinsic metric is $ds_-^2=4R^2(dx^2+dy^2)/(1-r^2)^2$ on $r<1$. Radial integration gives the logarithm used above; length blows up as the hyperbolic boundary is approached.

We **quote** the differential-geometric formula $K=-e^{-2\varphi}\Delta\varphi$ for a smooth conformal metric $ds^2=e^{2\varphi}(dx^2+dy^2)$. It follows from the curvature tensor but that general theorem is not proved here. We do execute all its derivatives for these models. Write $\varphi_\pm=\log(2R)-\log(1\pm r^2)$ on their stated domains. Holding $y$ fixed gives
$\partial_x\varphi_\pm=\mp2x/(1\pm r^2)$ and
$\partial_{xx}\varphi_\pm=\mp2/(1\pm r^2)+4x^2/(1\pm r^2)^2$; add the $y$ expression. Hence $\Delta\varphi_+=-4/(1+r^2)^2$ and $\Delta\varphi_-=4/(1-r^2)^2$. Multiplication by $-e^{-2\varphi}$ yields $K_+=1/R^2$, $K_-=-1/R^2$. This is constant intrinsic curvature, despite the variable metric coefficient in the chart.

For complex disk coordinate $z=x+iy$, use the Cayley map

\[
F(z)=i\frac{1+z}{1-z},\qquad
\operatorname{Re}F(z)=\frac{-2y}{|1-z|^2},\quad
\operatorname{Im}F(z)=\frac{1-|z|^2}{|1-z|^2}.
\]

It maps $|z|<1$ to the upper half-plane, with inverse $z=(w-i)/(w+i)$. A direct subtraction gives
$|F(z)-F(v)|^2=4|z-v|^2/(|1-z|^2|1-v|^2)$.
Consequently $1+|F(z)-F(v)|^2/(2\operatorname{Im}F(z)\operatorname{Im}F(v))$ equals the disk's $\cosh(d/R)$ expression. Injectivity of $\cosh$ on nonnegative arguments proves equal intrinsic distances at the same $R$. The pole $z=1$ and the real boundary in the upper chart are ideal data, not new finite hyperbolic points. This chart change is neither a metric rescaling nor the planar projective rectification below.

### GEO-ADV-CP2 — problem

1. Reconstruct the stereographic derivative dot products, both Laplacians and curvature signs, stating domains and units. Explain why changing a chart coefficient does not by itself mean curvature varies.
2. Verify the Cayley inverse and distance identity. For $z=0$ and $v=1/2$, find images and both normalized distance arguments; for $z=i/2$, check the sign of the real image coordinate.
3. State exactly what Gauss–Bonnet supplies for the CP1 triangles and what theorem is still imported. Give two failures of the simple triangle-area formula.
4. At fixed curvature $-1/R^2$, explain why equal angles determine side lengths, and why this does not identify a spherical metric with an elliptic quotient or a projective chart.

### GEO-ADV-CP2 — complete model and repair

1. For example, $(D-2x^2)^2+4x^2y^2+4x^2=D^2$ and $(D-2x^2)(-2xy)+(-2xy)(D-2y^2)+4xy=0$. These establish the displayed metric coefficient. Differentiate as above: $-4/D^2$ on all $\mathbb R^2$ and $4/(1-r^2)^2$ on $r<1$ give $\pm1/R^2$ with inverse-squared-length units. Curvature includes derivatives of the coefficient; a changing coefficient can describe constant curvature. The absent spherical pole is a chart omission at finite distance, unlike the disk's infinite intrinsic boundary.
2. Solving $w(1-z)=i(1+z)$ gives $z=(w-i)/(w+i)$; for $\operatorname{Im}w>0$, $|w-i|<|w+i|$. $F(0)=i$, $F(1/2)=3i$. The upper expression is $1+4/(2\cdot1\cdot3)=5/3$, equal to the disk expression; $d=R\log3$. $F(i/2)=-4/5+3i/5$, so a positive disk $y$ gives negative real coordinate in this convention. Substitute the two displayed modulus/height identities to cancel both $|1-z|^2$ factors; no numerical approximation is required. Repair a sign error by evaluating $F(i/2)$ before asserting the general formula.
3. Geodesic edges, disk-like region, compatible angles and constant $K$ give $\text{sum}-\pi=K\,\text{area}$. The general theorem with boundary geodesic curvature and Euler characteristic is imported; computing a particular $\Delta\varphi$ does not prove it. A latitude edge requires a boundary-curvature term; a region with holes changes topology, and a self-intersecting path needs a directed convention. Neither can silently use the simple convex triangle formula.
4. The dual hyperbolic cosine law gives $\cosh(a/R)=(\cos A+\cos B\cos C)/(\sin B\sin C)$ and cyclic formulas; for nondegenerate triangle angles the denominators are positive and $\cosh$ is injective for side lengths $a>0$. A fixed $R$ therefore fixes the sides. The quotient changes which sphere points count as equal, while projective incidence contains no distance rule at all. Repair by naming model, point equivalence and scale before comparing triangles.

## Lesson 3 — Projective incidence, a finite label repair, and Desargues

In $\mathbb{RP}^2$ a nonzero triple is equivalent to every nonzero real multiple, including negative multiples. This differs from oriented direction rays on a sphere. Points and lines are different types of triples, incidence is $\ell^Tp=0$, and distinct objects have nonzero join/meet cross products. A zero cross product means coincident inputs or invalid zero data, not an ideal point. An ideal point is a **nonzero** triple with last coordinate zero in a declared affine chart. Invertible $H$ acts by $p\mapsto Hp$, $\ell\mapsto H^{-T}\ell$. A change of chart can move an ideal point into a finite chart without changing incidence.

### The Fano labels used by the source's Exercise 1

Use points $1=(100)$, $2=(010)$, $3=(110)$, $4=(001)$, $5=(101)$, $6=(011)$, $7=(111)$ over $\mathbb F_2$. The seven lines are exactly **123, 145, 167, 246, 257, 347, 356**. Each line consists of nonzero vectors $u,v,u+v$. Any distinct pair determines its unique third vector, so each of the 21 pairs occurs once. Each line has three points, each point three lines. Distinct lines share at most one point, since a shared pair would have two joining lines. Each of the seven points contributes three pairs of its three incident lines, giving $7\cdot3=21=\binom72$ distinct intersecting line pairs: every pair of lines therefore meets exactly once. No listed line contains three of $\{1,2,4,7\}$, establishing the quadrangle axiom. Deleting the entire line123 leaves 4,5,6,7 and the six affine lines 45,67; 46,57; 47,56, paired by their deleted ideal point1,2,3. The field is finite here; this is not a Euclidean distance model.

### The omitted calculation — real Desargues, with all hypotheses

Let $A,B,C$ be noncollinear real projective points. Their chosen representatives form a basis of $\mathbb R^3$. Suppose $O$ is distinct from each, corresponding vertices differ, the lines $AA',BB',CC'$ pass through $O$, both triangles are noncollinear, and the three pairs of side lines are distinct with their named intersections distinct. Because $A'$ is on $AO$ but differs from $A$, its coefficient of $O$ is nonzero. Rescale it so $A'=aA+O$; similarly $B'=bB+O$, $C'=cC+O$. Coefficients $a,b,c$ may be zero if the other nondegeneracy assumptions still hold. Set

\[
P=bB-aA=B'-A',\qquad Q=cC-bB=C'-B',\qquad R=aA-cC=A'-C'.
\]

Each is a representative of the relevant side intersection: for example $P$ is in both spans $\operatorname{span}(A,B)$ and $\operatorname{span}(A',B')$. These vectors are nonzero by the distinct-intersection hypotheses. Moreover $P+Q+R=0$. Since $P,Q$ represent distinct points, they are independent; $R$ is in their two-dimensional span. The three points therefore lie on one projective line. There is no affine division and the proof includes nonzero representatives with last coordinate zero. This executes the real-coordinate calculation left open in the source. It does not execute a skew-field proof, prove Pappus, or assert Desargues for arbitrary non-Desarguesian planes. If a corresponding pair coincides, its line is not defined by that pair; if side lines coincide, their meet is not a unique point. One must check or reformulate the theorem, not declare the zero vector a solution.

For an exact instance use $A=(1,0,0)$, $B=(0,1,0)$, $C=(0,0,1)$, $O=(1,1,1)$ and $(a,b,c)=(1,2,3)$. Then $A'=(2,1,1)$, $B'=(1,3,1)$, $C'=(1,1,4)$ have determinant17. The intersections are $P=(-1,2,0)$, $Q=(0,-2,3)$, $R=(1,0,-3)$ and lie on $\ell=(6,3,2)$. In the $z=1$ chart, $P$ is ideal; the proof has not failed. These coordinates are exact representatives, not normalized vectors.

### GEO-ADV-CP3 — problem

1. For $T(x)=(2x+1)/(x+1)$, calculate images of $0,1,2,4$ and verify directed cross-ratio $3/2$. Extend the argument to a pole with determinants rather than dividing by zero.
2. Prove line and conic transformation laws, including tangent transformation. For $C=\operatorname{diag}(1,1,-1)$ and $p=(3,4,5)$, verify the source's tangent.
3. Explain why an ellipse photograph proves neither a scene circle nor a rectangle, physical length, off-plane depth or lens calibration. Give a genuine preserved statement instead.

### GEO-ADV-CP3 — complete model and repair

1. Images are $1,3/2,5/3,9/5$. The transformed ratios are $(2/3)/(1/6)=4$ and $(4/5)/(3/10)=8/3$, hence cross-ratio $3/2$, matching $(2/1)/(4/3)$. In homogeneous line coordinates $v_x=(x,1)$, define $\operatorname{cr}(a,b;c,d)=\det(v_c,v_a)\det(v_d,v_b)/(\det(v_c,v_b)\det(v_d,v_a))$. Four distinct points make the denominator nonzero; applying an invertible $2\times2$ matrix multiplies every determinant by the same nonzero determinant, which cancels. This handles an ideal image directly. Repeated points or a singular map require a separate definition, not this four-distinct-point invariant.
2. From $p'=Hp$ and $\ell^Tp=0$, take $\ell'=H^{-T}\ell$. Substitution proves incidence. From $p^TCp=0$, substitute $p=H^{-1}p'$ to get $C'=H^{-T}CH^{-1}$. An invertible conic has tangent $Cp$; the image tangent is $H^{-T}Cp=C'p'$. At $(3,4,5)$, $9+16-25=0$ and tangent $(3,4,-5)$ is incident. Invertibility is essential for these inverse formulas; a degenerate conic may not have a unique tangent at every point.
3. Projective maps preserve incidence, cross-ratio and nondegenerate conic structure, but not a chosen affine parallel relation, Euclidean lengths, right angles or midpoint averages. A point known to lie on a known plane line remains on the corresponding image line. An observed ellipse could arise from different planar conics and does not calibrate a camera, certify planarity or recover depth. Repair by separating the theorem conditional on correspondences from the empirical claim that a real image supplies those correspondences.

### GEO-ADV-CP4 — problem

1. Verify the Fano table's pair/line/quadrangle claims and the three affine parallel pairs after deleting123. Explain why deleting one point alone is wrong.
2. Reconstruct the real Desargues proof, all general-position checks and the numeric instance. Name the ideal intersection and its line; give a coincident-input failure.
3. Prove a projectivity fixing a square's four labelled corners is the identity, and explain why four arbitrary point pairs or eight equations alone do not prove uniqueness. Relate this to the source's axioms, Pappus dual and cardinality exercises without importing Euclidean metric assumptions.

### GEO-ADV-CP4 — complete model and repair

1. Every listed triple is closed under addition of two distinct nonzero vectors. All21 unordered point pairs occur once. Distinct lines share at most one point; counting the three line pairs at each of seven points accounts for all21 line pairs, so each meets exactly once. None of124,127,147,247 is a line. Remove123 and all its points: the remaining lines are exactly45/67,46/57,47/56. Removing only one point leaves some other ideal points and does not give the four-point affine plane. The source's Exercise1 labeling is now specified rather than guessed from a picture.
2. Noncollinearity makes $A,B,C$ a basis; $A'\ne A$ makes the normalization coefficient legitimate. Each difference belongs to both side spans and is nonzero; $P+Q+R=0$ gives rank2, hence collinearity. For the instance the determinant of the primed columns is17, all three differences are nonzero and pairwise nonproportional, $\ell\cdot P=\ell\cdot Q=\ell\cdot R=0$. $P=(-1,2,0)$ is ideal in the chosen chart; $\ell=(6,3,2)$ is nonzero. If $A'=A$, computing $A\times A'$ gives zero and no specified line, so the concurrency construction fails. Repair by checking nonzero representatives and distinctness before cross products, not after affine division.
3. The square representatives $A=(0,0,1)$, $B=(1,0,1)$, $D=(0,1,1)$ form a basis, and $C=B+D-A$. A projectivity fixing $A,B,D$ is diagonal in that basis, with nonzero diagonal entries $\lambda_A,\lambda_B,\lambda_D$. Fixing $C$, whose three basis coefficients are nonzero, forces all three entries equal. The matrix is scalar and induces the identity. Thus two homographies with the same labelled projective frames differ only by scale. Collinear data do not satisfy this argument. Point/line axioms and duality concern incidence; Pappus is imported over commutative fields, not derived from equation counts. The source's line-cardinality key uses the continuum-size fact $|\mathbb R^2|=|\mathbb R|$ as a set-theoretic input, not a metric or area argument. Its dual Pappus construction swaps join and meet in the stated incidence theorem; it does not assert a dual of arbitrary length statements.

## Fixed rectification certificate — common data and nine deliverables

The data below are exact synthetic planar correspondences, not measurements from a real photograph. Work in $\mathbb{RP}^2$ with source affine coordinates $(x,y)$ and image $(X,Y)$ only when the last coordinate is nonzero. A known source unit square gives a declared planar unit of length; it does not calibrate off-plane objects. The matrix family and inverse representative are

\[
H_t=\begin{pmatrix}6&0&0\\0&2&0\\0&-t&3\end{pmatrix},\qquad
J_t=\begin{pmatrix}1&0&0\\0&3&0\\0&t&2\end{pmatrix}.
\]

They have $\det H_t=36$ and $H_tJ_t=J_tH_t=6I$ for every real $t$. In finite charts $X=6x/(3-ty)$, $Y=2y/(3-ty)$, and rectification is $x=X/(tY+2)$, $y=3Y/(tY+2)$. A zero denominator is a chart boundary; neither matrix becomes singular there. The source line at infinity maps to image horizon $\ell_t=(0,t,2)$, and the source line $3-ty=0$ maps to the image's chosen line at infinity. For $t=0$ the first line is already the line at infinity and the second has no finite source point.

| Form | Parameter t | Source corners in labelled order | Extra source points | Image-only query |
| --- | --- | --- | --- | --- |
| GEO-ADV-P001 | 1 | A=(0,0), B=(1,0), C=(1,1), D=(0,1) | M=(1/2,1/2), E=(1/4,1/2), F=(3/4,1/2) | q=(1,2,1) homogeneous |
| GEO-ADV-P002 | 3 | A=(0,0), B=(1,0), C=(1,1), D=(0,1) | M=(1/2,1/2), E=(1/4,1/2), F=(3/4,1/2) | q=(1,2,1) homogeneous |
| GEO-ADV-R001 | -1 | A=(0,0), B=(1,0), C=(1,1), D=(0,1) | M=(1/2,1/2), E=(1/4,1/2), F=(3/4,1/2) | q=(1,2,1) homogeneous |

For each form, submit these **nine** connected deliverables before opening its model:

1. Verify invertibility and all four corner correspondences; recover the primary $H_1$ from its finite corner pairs (scale $h_{33}=3$), or prove uniqueness from the supplied frame for changed/return data. Distinguish matrix scale from physical units.
2. Map the three extra points, rectify them, locate their image line and both diagonal intersections. Compare the image of the source centre with the arithmetic average when all image corners are finite.
3. Transform both source coordinate direction points $(1,0,0)$ and $(0,1,0)$, find $\ell_t$, and classify the image-only query under $J_t$. Say whether an ideal point or affine division failure destroys the projectivity.
4. Compute the cross-ratio for four distinct source points on $x=0$ with $y=0,1,2,4$, using this course's point order. Map them and prove invariance even if an image is ideal; points outside the square are algebraic probes, not measured evidence about a bounded page.
5. Transform the unit circle $C_0=\operatorname{diag}(1,1,-1)$ and its tangent at $(3,4,5)$; state image affine conic type and the projective invariant that survives. These probes need not lie in the unit square.
6. Audit a separate failed calibration: replace source corner C by $C_*=(2,0)$ and use its $H_1$ image, with A,B,D still their primary pairs. Exhibit two distinct invertible homographies fitting every pair; prove the nonunique family, not just an equation count.
7. For the valid frame's centre, suppose the exact image $X_M$ is retained but measured $Y_M$ is only known within $\varepsilon=1/100$ of its printed value. Bound the two rectified centre coordinates with **attained** exact intervals; prove the denominator stays positive. This is a deterministic measurement assumption, not a confidence interval, roundoff bound, pixel-location study or proof of image accuracy.
8. Join the projective audit to CP1/CP2: state which structures it preserves and why the image horizon, the hyperbolic ideal boundary and an omitted spherical chart pole are different objects. Give the scaled sphere/disk comparison at the form's radius and disk radial input below; include invalid and limiting cases.
9. Conclude the source synthesis's five requirements: declared correspondences and their synthetic provenance, a preserved incidence, a lost metric/affine relation, an explicit uncertainty, and a single-plane claim boundary. Attach first/comparison/revised records and a changed-data explanation; report source-answer exposure honestly.

| Form | Curved comparison radius R | Interior radial input r | Spherical pair |
| --- | --- | --- | --- |
| GEO-ADV-P001 | 2 | 1/2 | (1,0,0) and (0,1,0) |
| GEO-ADV-P002 | 3 | 3/5 | (1,0,0) and (0,1,0) |
| GEO-ADV-R001 | 1/2 | 1/3 | (1,0,0) and (0,1,0) |

### GEO-ADV-P001 — primary problem

Carry out all nine deliverables with $t=1$. Start from the source deep dive's exact trapezoid pairs: A↦(0,0), B↦(2,0), C↦(3,1), D↦(0,1). The source plane is a declared square, not a conclusion inferred from a generic quadrilateral image. Use the exact values before any decimal illustration.

### GEO-ADV-P001 — complete model

1. $\det H_1=36$, $H_1J_1=6I$. With $h_{33}=3$, A forces $h_{13}=h_{23}=0$; B forces $h_{21}=0$ and $h_{11}=2(h_{31}+3)$; D forces $h_{12}=0$ and $h_{22}=h_{32}+3$. C forces $h_{22}=h_{31}+h_{32}+3$, hence $h_{31}=0$, and $h_{11}=3(h_{32}+3)$. Combining $h_{11}=6$ gives $h_{32}=-1$, $h_{22}=2$. These are exactly the printed $H_1$; every corner image follows by multiplication. Matrix rescaling changes no projective map; changing a declared source unit changes a metric interpretation.
2. M,E,F map to $(6/5,2/5)$, $(3/5,2/5)$, $(9/5,2/5)$. Their line is $5Y-2W=0$, the transform of $2y-w=0$; applying $J_1$ recovers all three source points. Source diagonals meet at M, so image diagonals meet at $(6/5,2/5)$ (or solve their equations directly). The arithmetic average of the four image vertices is $(5/4,1/2)$, different from that intersection. The centre's two definitions agree in the source affine square, while only incidence survives in the image.
3. Horizontal direction stays ideal $(1,0,0)$; vertical direction becomes $(0,2,-1)$, finite $(0,-2)$. Their joining horizon is $Y+2W=0$. The source pole line is $y=3$. $J_1q=(1,6,4)$, so the image-only query rectifies to $(1/4,3/2)$, outside the bounded square; algebraic extension of the homography is not evidence about that part of a photographed object.
4. Image vertical coordinates are $0,1,4,-8$. Directed cross-ratio is $(4/3)/((-8)/(-9))=3/2$, equal to $(0,1;2,4)$. The restricted homogeneous map $(y,w)\mapsto(2y,3w-y)$ has determinant6, so the determinant proof establishes the general invariant and avoids chart assumptions.
5. A convenient image conic matrix is $J_1^TC_0J_1=\begin{pmatrix}1&0&0\\0&8&-2\\0&-2&-4\end{pmatrix}$, with equation $X^2+8Y^2-4YW-4W^2=0$. Completing the square gives $X^2+8(Y-1/4)^2=9/2$ in $W=1$, an ellipse. The source point maps to $(18,8,11)$; tangent maps to $(3,7,-10)$, whose dot product is $54+56-110=0$. The conic stays nondegenerate ($\det=-36$) and tangency survives; the particular circle metric does not.
6. The failed pairs are A↦(0,0), B↦(2,0), $C_*\mapsto(4,0)$, D↦(0,1). For any $s\ne0$, let $K_s=\begin{pmatrix}1&0&0\\0&s&0\\0&s-1&1\end{pmatrix}$. It fixes every point on $y=0$ and D projectively, with determinant $s$. Thus $H_1K_s$ fits all four pairs, is invertible and differs as a projectivity for different $s$: the first row fixes the scalar and the second distinguishes $s$. For example $s=1$ versus2 sends M to $(6/5,2/5)$ versus $(6/7,4/7)$. Three collinear reference points destroy the frame, while the invertibility of each fitting matrix does not restore uniqueness.
7. $Y_M\in[39/100,41/100]$, so $Y_M+2\in[239/100,241/100]>0$. Rectification gives the attained intervals $x_M\in[120/241,120/239]$ and $y_M\in[117/239,123/241]$. With $X_M=6/5>0$, $x$ decreases and $y$ increases with $Y$; each endpoint is attained at a stated measurement endpoint. Their joint set is a curve parameterized by one error, not an arbitrary independent rectangle. Exact arithmetic introduces no roundoff model; real correspondence error, nonplanarity and lens distortion remain separate possible errors.
8. At $R=2$, the orthogonal spherical pair is distance $\pi$, while disk radial distance at $r=1/2$ is $2\log3$; curvatures are $1/4$ and $-1/4$. A projective horizon is a chosen affine-chart line and can be made finite in another chart; it has no distance until a metric is added. The disk ideal circle is excluded and infinitely far intrinsically. The omitted stereographic north pole is an ordinary spherical point at finite distance accessible in another chart. At $r=0$, distance0; at $r\to1^-$ it diverges; $r\ge1$ is rejected, as is a zero spherical vector. Sphere antipodes have distance $2\pi$ and many shortest paths, whereas their elliptic quotient is one point.
9. The four pairs are synthetic outputs of a declared plane homography, so planarity/corner identification are assumptions. M is on each diagonal before and after projection; midpoint averaging and Euclidean lengths need not survive. The $Y$-interval quantifies a chosen measurement uncertainty. A single homography recovers declared planar coordinates under the model, not off-plane depth, camera focal length, lens calibration or proof that an arbitrary observed quadrilateral was a square. Dated written revisions document this comparison; they award no grade or independent-work certification.

### GEO-ADV-P002 — changed problem

Redo all nine deliverables at $t=3$; use homogeneous corners rather than inventing finite pixel coordinates for ideal points. Keep the failed calibration of deliverable6 separate from this **valid** projective frame. State what changed from the primary geometry and what only changed chart status.

### GEO-ADV-P002 — complete model

1. Determinant36 and $H_3J_3=6I$ still hold. Corners are A=(0,0,1), B=(2,0,1), C=(3,1,0), D=(0,1,0). C and D are distinct ideal image points. The source and image are projective frames, so CP4 proves unique projectivity up to scale; four finite image corners are not required by the algebraic theorem. These data do not describe four finite photographed page corners in this chart.
2. M,E,F map to $(2,2/3)$, $(1,2/3)$, $(3,2/3)$, on $3Y-2W=0$, and rectify exactly. Both diagonals meet at M's image, by incidence. An affine arithmetic average of two finite and two ideal vertices is undefined; substituting huge numbers for ideal coordinates would not repair it.
3. The horizontal direction remains ideal; the vertical direction is $(0,2,-3)$, finite $(0,-2/3)$. Horizon is $3Y+2W=0$; source pole line is $y=1$. $J_3q=(1,6,8)$ gives $(1/8,3/4)$. A chart pole has occurred at the top edge but $H_3$ is invertible everywhere on the projective plane.
4. On the vertical line, images have homogeneous $(Y,W)$ coordinates $(0,3),(2,0),(4,-3),(8,-9)$. These represent $0,\infty,-4/3,-8/9$. With the second point ideal, the determinant expression gives $\det(c,a)\det(d,b)/(\det(c,b)\det(d,a))=(12\cdot18)/(6\cdot24)=3/2$. It remains an invariant of four distinct points, even though an affine subtraction formula for infinity is unavailable.
5. The image conic is $X^2-12YW-4W^2=0$, a nondegenerate parabola in $W=1$ ($Y=X^2/12-1/3$). Matrix determinant is still $-36$. The source point maps to $(18,8,3)$; tangent is $(3,-3,-10)$, incidence $54-24-30=0$. A circle has become a parabola because the chosen infinity line is tangent to the projective conic, not because tangency or nondegeneracy was lost.
6. The separate failed calibration remains the explicitly declared **primary** collinear data and the family $H_1K_s$, not the valid $H_3$ ideal-corner data. The same complete nonuniqueness proof and $s=1,2$ witness apply. Ideal coordinates alone do not imply rank loss; collinearity of a calibration frame does.
7. $Y_M\in[197/300,203/300]$, denominator $3Y_M+2\in[397/100,403/100]>0$. The attained bounds are $x_M\in[200/403,200/397]$, $y_M\in[197/397,203/403]$. As in the primary, $x$ decreases and $y$ increases; this proves both bounds and attainment. The exact ideal top corners do not force the centre's local rectification denominator to be small.
8. At $R=3$, spherical orthogonal distance is $3\pi/2$; disk radial distance at $r=3/5$ is $3\log4$, curvatures $\pm1/9$. The horizon/ideal-circle/omitted-pole distinctions and invalid-input policies are the same as in the primary, because their geometric meanings did not become equal when a projective point acquired last coordinate0. At spherical antipodes distance is $3\pi$; the elliptic quotient identifies them.
9. The known plane, synthetic pairs, preserved diagonal incidence and bounded centre uncertainty still support the conditional mathematical reconstruction. Here no affine corner average exists, and no finite four-corner photograph is asserted. The off-plane and camera-calibration limits persist. The changed account must explicitly distinguish this chart-status change from the separate degenerate-data counterexample; copying “homography singular” fails that distinction.

### GEO-ADV-R001 — later-return problem

After completing and revising the changed work, return to all nine deliverables at $t=-1$ from a fresh dated page. Public answers remain available; record what you have seen. The image-only query is still $(1,2,1)$, but its rectified type changes. Give the general family identities and boundary cases as part of the return, rather than copying the primary decimals.

### GEO-ADV-R001 — complete model and general certificate

1. Corners are A=(0,0), B=(2,0), C=(3/2,1/2), D=(0,1/2). Determinant36, $H_{-1}J_{-1}=6I$ and projective-frame uniqueness hold. Thus this returns to four finite image corners without changing the class of invertible transformations. The same frame proof holds for every real $t$ even when an affine corner leaves its chart.
2. M,E,F map to $(6/7,2/7)$, $(3/7,2/7)$, $(9/7,2/7)$, on $7Y-2W=0$, and rectify exactly. Image diagonals meet at $(6/7,2/7)$; the arithmetic vertex average is $(7/8,1/4)$, which differs. Generally the three points have homogeneous images $(6,2,6-t),(3,2,6-t),(9,2,6-t)$. Their image line is $(6-t)Y-2W=0$. At $t=6$ these three distinct points are ideal on $W=0$; their projective incidence survives although all three affine divisions fail.
3. Horizontal direction is ideal, vertical direction $(0,2,1)$ is finite $(0,2)$, horizon $-Y+2W=0$, source pole $y=-3$. Now $J_{-1}q=(1,6,0)$ is **ideal**, so a finite image point can rectify to an ideal source direction. It lies on the image horizon. It was only an algebraic query outside the calibrated bounded object, not a newly discovered finite point on the square. For general $t$, $J_tq=(1,6,2t+2)$; it is ideal exactly at $t=-1$. No nonzero homogeneous vector is sent to zero by an invertible matrix.
4. Vertical image values are $0,1/2,4/5,8/7$. Ratios are $(4/5)/(3/10)=8/3$ and $(8/7)/(9/14)=16/9$, whose quotient is $3/2$. For every $t$ the determinant6 restricted map proves invariance, including every chart pole. Four distinct source points stay distinct under an invertible map.
5. Image equation is $X^2+8Y^2+4YW-4W^2=0$, equivalently $X^2+8(Y+1/4)^2=9/2$, an ellipse. Point $(18,8,19)$ has tangent $(3,17,-10)$ and incidence $54+136-190=0$. Generally $C'_t=\begin{pmatrix}1&0&0\\0&9-t^2&-2t\\0&-2t&-4\end{pmatrix}$ has determinant $-36$, and tangent at $H_tp$ is $(3,12-5t,-10)$. The affine conic is an ellipse for $|t|<3$, a parabola for $|t|=3$, and a hyperbola for $|t|>3$: its intersection with $W=0$ solves $X^2+(9-t^2)Y^2=0$, respectively no real point, one double ideal point, or two distinct real ideal points. This is a chart classification of one nondegenerate projective conic.
6. For the separate failed calibration, $H_1K_s$ with $s\ne0$ remains an infinite invertible family fitting A,B,$C_*$,D. The $s=1$ and2 centre images differ as computed above. Changing the valid return's $t$ does not fix that different dataset. A singular candidate matrix is also rejected: e.g. $s=0$ collapses the plane and has no $H^{-1}$ or valid line/conic inverse transformation.
7. $Y_M\in[193/700,207/700]$ and $2-Y_M\in[1193/700,1207/700]>0$. The attained bounds are $x_M\in[600/1207,600/1193]$ and $y_M\in[579/1207,621/1193]$. Here **both** coordinates increase with $Y$, since $t=-1$, so their low endpoints occur together and their high endpoints together. In general $\partial_Yx=-tX/(tY+2)^2$, $\partial_Yy=6/(tY+2)^2$ at fixed X. A bound requires the whole assumed interval to avoid $tY+2=0$; if it crosses that horizon there is no finite uniform coordinate bound. These intervals are measurement sensitivity sets, not probabilistic coverage or a declaration that a fitted camera is accurate.
8. At $R=1/2$, spherical orthogonal distance is $\pi/4$; disk radial distance at $r=1/3$ is $(1/2)\log2$, curvatures $\pm4$. At $r=0$ radial distance0; derivative $2R/(1-r^2)>0$ on $0\le r<1$ proves monotonicity and the logarithm diverges at1. Sphere antipodes are distance $\pi/2$ with multiple shortest arcs, quotient distance0; invalid zero vectors are rejected. A sphere chart pole remains finite intrinsically; disk boundary is infinite and excluded; projective horizon concerns an affine chart with no metric. These assertions follow from the selected models, not from the Euclidean look of the picture.
9. The complete source synthesis now has fixed declared correspondences, exact rectification of at least three points, preserved incidence, a demonstrated lost averaging property, attained deterministic uncertainty bounds, and explicit planarity/physical-calibration limits. The return changes horizon location and query type; it is not an independent measurement study or a hidden assessment. Record the new first attempt, exposure, comparison and revised general proof. Further empirical photography, robust noisy fitting, full differential geometry and arbitrary skew-field coordinatization are separate continuations whose results are not manufactured by this certificate.

## Compare, repair, and continue

For every source question, checkpoint and project deliverable, check the object type and domain, hypotheses, exact calculation, invariant or theorem used, equality/degeneracy case, and claim boundary. This is descriptive feedback, not a point score. If a calculation is wrong, retain it, explain the first invalid step and redo the relevant preparation or source example before revising. In particular repair: spherical antipodes versus quotient equality; metric scale versus chart scale; hyperbolic boundary versus a projective ideal line; a zero cross product versus a nonzero ideal point; ideal-frame status versus collinear calibration; a conditional homography proof versus empirical camera evidence; and an attained measurement interval versus a statistical interval.

Continue to the geometry books for further spherical trigonometry, elliptic topology, projective conics and computational methods, or to a prepared differential-geometry route for the curvature tensor and a proof of Gauss–Bonnet. This course has executed its stated real-coordinate and constant-curvature selections; it does not qualify every chapter of a linked book or supply observations of how a learner performed.
