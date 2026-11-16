var e=`---
id: course-geometry-trigonometry-specialist
title: "Geometry across Smooth Curves, Meshes, and Exact Decisions"
level: graduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Geometry across Smooth Curves, Meshes, and Exact Decisions

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-geometry-trigonometry-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Geometry beyond the Euclidean Chart: Models, Curvature, and Rectification](/courses/atlas-geometry-trigonometry-advanced/) · [Differential geometry of curves and surfaces](/courses/course-differential-geometry/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A smooth surface, a triangulated surface and a list of floating-point coordinates are different mathematical objects. Connecting them requires a map and a theorem. A converging sequence of vertex positions need not have converging area. A nearly zero computed determinant need not represent collinearity. A vanishing Gaussian curvature need not mean the surface has a constant normal.

This graduate course develops three connected specialist routes: general differential geometry of curves, immersed surfaces and Riemannian manifolds; discrete turning, polyhedral curvature and nonuniform mesh convergence; and complete robust computational predicates with downstream geometric contracts. The existing [curvature, turning and orientation clinic](#/item/book-analytic-computational-geometry?chapter=curvature-turning-and-certified-orientation) is the starting point, not the completed specialist route. General proofs, new keyed problems, three substantial investigations and a runnable public reference follow below.

**Order and preparation.** Complete GS-S01 through GS-S07, then GS-P, GS-C and GS-R, retaining the records in GS-REVIEW. The [advanced geometry course](#/item/course-geometry-trigonometry-advanced) and [advanced topology course](#/item/course-topology-geometry-advanced) are prerequisite teaching, with exact selected repairs below. Their projective and finite-persistence results do not prove the general smooth or mesh results here. Bring proof fluency, finite-dimensional linear algebra, compactness, uniform estimates, multivariable differentiation through order three, integration, and basic algorithms. No performance claim about a learner, implementation timing, human review or production deployment is supplied. study time depends on the selected reading, attempts and corrections, including repair, code reproduction and revision.

The public reference is required computational work: run its printed requests in an existing JavaScript environment, preserve actual inputs/outputs, and compare them with the independent hand models. A machine or installation is not silently supplied by this reader. If execution is unavailable, retain the hand proofs and record the computational work as pending. Public answers, native study marks and mutable notes are not graded Practice evidence or certification.

## GS-S01 — Readiness release and exact source assignments

Release dependencies by their actual work, not a total diagnostic score.

| Dependency | Required teaching and exact repair | Complete feedback and release |
| --- | --- | --- |
| Coordinate algebra | [Geometry diagnostic](#/item/book-analytic-computational-geometry?section=front%3Aprerequisite-diagnostic), Questions **1–8** and their adjacent Answers | Retain (3,4), length 5, line 4x-3y=-2; determinant 1; projection (3,0); roots -1,-5; the nonzero-normal distance proof; x≤-1 or x≥1; product (17,39); eigenvalue 3. Repair each failed operation using that diagnostic's named linear-algebra/algebra routes, then redo the local calculation below. Its aggregate score does not establish specialist readiness. |
| Curvature and changing charts | Advanced geometry **Lesson 2**, **GEO-ADV-CP2 Questions 1–4** and its complete model | Reconstruct the stereographic metric dot products, conformal Laplacians, Cayley inverse and distance identity. That course explicitly quotes the general curvature formula. GS-S04 derives it from the metric connection. |
| Manifolds and forms | Advanced topology **TA-S04, TA-M1–M4**, then **TA-S05, TA-F1–F4**, with their complete public keys | Supply actual torus/sphere charts and transitions, regular tangent planes, boundary versus ambient boundary, wedge/pullback operations, periods and the Stokes domain audit. The torus period proof is substantive preparation; its finite persistence is not a surface-approximation theorem. |
| Uniform estimates and derivatives | The local readiness questions GS-RD1–RD4 below, with their complete keys | Release Taylor remainders, positive speed, Hessian norms and eigenvalues separately. The general theorems in GS-S05–06 use these hypotheses, not a drawing. |
| Programming and representation | GS-S07 and the full public reference GS-CODE | Understand arrays, comparisons, functions, loops, finite Numbers, arbitrary-precision BigInt, and the declared coordinate domain. Do not convert an exact decimal measurement to a binary64 value and claim the original quantity was certified. |

**GS-RD1.** For the linear map D(x,y,z)=x+y, find a kernel basis, image and quotient isomorphism. **Key:** kernel span{(1,-1,0),(0,0,1)}, image R, and [(x,y,z)]↦x+y is well-defined and bijective on R³/ker D. For symmetric B=((2,1),(1,2)), the normalized eigenvectors (1,1)/sqrt(2),(1,-1)/sqrt(2) have eigenvalues 3,1. Symmetry gives an orthonormal eigenbasis; an arbitrary nonsymmetric shape matrix in a nonorthonormal chart needs the metric inner product.

**GS-RD2.** Let a vector function V be C² on a compact interval and ||V''||≤M. Prove ||V(t+u)-V(t)-uV'(t)||≤Mu²/2 when the joining interval stays in the domain. **Key:** integrate V'' twice; for u≥0 the remainder is integral_0^u (u-v)V''(t+v)dv. Bound its norm by M integral_0^u(u-v)dv=Mu²/2. For u<0 reverse the integration direction, obtaining the same bound. Integrating a midpoint expansion over [-h/2,h/2] cancels its odd linear term and gives average error ≤Mh²/24.

**GS-RD3.** For f(x,y)=(a x²+b y²)/2 on [0,1]², calculate its gradient, Hessian operator norm, and graph regularity. **Key:** gradient (ax,by), Hessian diag(a,b), norm max(|a|,|b|). The graph parametrization X=(x,y,f) has independent derivatives because their first two coordinates are the coordinate basis; X_x cross X_y=(-ax,-by,1) never vanishes. Positive Gaussian curvature does not follow: it will have the sign of ab.

**GS-RD4.** Audit r(t)=(cos t³,sin t³,0) at zero and the triangular domain with vertices (0,0),(1,0),(0,epsilon), epsilon>0, as epsilon tends to zero. **Key:** r'(0)=0 invalidates division by speed even though the geometric circle has a regular parametrization. The triangle is nondegenerate for each epsilon, but its smallest angle tends to zero. “Every individual triangle is nondegenerate” gives no uniform shape constant. Refinement and conditioning are separate statements.

Now complete the following actual sources in this order. “Complete chapter” includes definitions, proof arguments, worked examples, Common errors and the exact exercises; every numbered question has its full Solution immediately below it. Those solutions are also registered in the book's [Exercise and Project Solutions](#/item/book-analytic-computational-geometry?section=back%3Asolutions), under Chapters 2, 3, 8, 9 and 11 respectively. Preserve the source's policies rather than replacing them with an epsilon.

| Source identity | Required native work and complete keys | Use |
| --- | --- | --- |
| GS-SRC-CLINIC | [Curvature, Polygon Turning, and Certified Orientation](#/item/book-analytic-computational-geometry?chapter=curvature-turning-and-certified-orientation), complete chapter; **GEO-TURN-P001 Parts 1–3**, **GEO-TURN-P002 all reconstruction and swap requests**, their **Full model / Full changed model**, certificate ledger and descriptive rubric | Derive regular planar curvature, the specific circle-polygon bound and deterministic measurement certificate. Its two circle projects do not establish our later general mesh theorems. |
| GS-SRC-O2 | [Orientation Is the Central Planar Predicate](#/item/book-analytic-computational-geometry?chapter=orientation-is-the-central-planar-predicate), complete chapter, **Exercises 1–5 / Solutions** | Signed area, cyclic/swap identities, binary32 cancellation and hull policy. Binary32 is the source example; our implementation accepts binary64. |
| GS-SRC-SEG | [Segment Intersection Needs Boundary Cases](#/item/book-analytic-computational-geometry?chapter=segment-intersection-needs-boundary-cases), complete chapter, **Exercises 1–5 / Solutions** | Parametric formulas, inclusive contacts, point-segments and collinear intervals before division. |
| GS-SRC-O3 | [Three-Dimensional Predicates](#/item/book-analytic-computational-geometry?chapter=three-dimensional-predicates), complete chapter, **Exercises 1–5 / Solutions** | Triple products, nonzero normals, parallel/contained lines and convex-slice boundaries. Our predicate computes signs, not a general mesh-slicing reconstruction. |
| GS-SRC-HULL | [Convex Hull as an Orientation Algorithm](#/item/book-analytic-computational-geometry?chapter=convex-hull-as-an-orientation-algorithm), complete chapter, **Exercises 1–5 / Solutions** | The lower/upper support invariant and popped-point proof, duplicate/collinear policies and comparison complexity. |
| GS-SRC-PROP | [Property-Based Test Catalogue](#/item/book-analytic-computational-geometry?chapter=property-based-test-catalogue), complete chapter, **Exercises 1–5 / Solutions** | Write the requested random/property test designs and their input policies. Approximate reflection/distance tolerances are different from exact sign assertions. Test design and finite successful runs do not prove universal correctness. |
| GS-SRC-GB | [Curvature and Gauss–Bonnet](#/item/deep-dive-curvature-gauss-bonnet), complete article, **Exercises 1–5 / Answers** | Retain K=1/9 and total 4pi; spherical excess pi/3; cube defects pi/2 each; genus-two obstruction; intrinsic cylinder isometry. The boundary/corner terms and the global smooth theorem keep their hypotheses. |

## GS-S02 — General regular curves and frames through curvature zero

Let r:I→R³ be C³ with r' nowhere zero on an interval. Arc length s has ds/dt=q=||r'||>0; the inverse function theorem provides a local arc-length parameter, and strict monotonicity joins these choices on the interval. The unit tangent is T=r'/q. Differentiation gives

$$\\frac{dT}{dt}=\\frac1q\\left(r''-\\frac{r'\\cdot r''}{q^2}r'\\right),\\qquad
\\kappa=\\left\\|\\frac{dT}{ds}\\right\\|=\\frac{\\|r'\\times r''\\|}{q^3}.$$

The cross-product norm formula follows by subtracting the tangential acceleration and using ||u cross v||²=||u||²||v||²-(u dot v)². It is unsigned, has inverse-length units and is invariant under regular C³ reparametrizations. The clinic proved its planar specialization; no convexity or circle assumption is used here.

On an open subinterval where kappa>0 define N=T_s/kappa and B=T cross N. The orthonormal frame has

$$T_s=\\kappa N,\\qquad N_s=-\\kappa T+\\tau B,\\qquad B_s=-\\tau N,\\qquad
\\tau=\\frac{\\det(r',r'',r''')}{\\|r'\\times r''\\|^2}.$$

Here is the proof and the hypothesis that the formula needs. Differentiate all frame dot products: N_s is perpendicular to N and has T component -kappa, while its B component defines tau. Differentiating B=T cross N gives B_s=-tau N. In arc length, r_s=T, r_ss=kappa N and r_sss=-kappa²T+kappa_s N+kappa tau B; their determinant is kappa² tau and their cross-product norm squared is kappa². Under a change of parameter both numerator and denominator acquire the same sixth-power speed factor, giving the displayed formula. Reflection of ambient orientation reverses tau; reversing the traversal alone leaves tau unchanged. At kappa=0, N, B and the torsion quotient need not exist.

General regular curves are not excluded at those zeros. Choose an oriented orthonormal pair E_1,E_2 perpendicular to an initial T and solve

$$ (E_i)_s=-(T_s\\cdot E_i)T,\\qquad i=1,2.$$

The linear ODE has unique local solutions. Differentiate E_i dot T and E_i dot E_j: their required zero and identity values are preserved. Thus T_s=k_1 E_1+k_2 E_2 and kappa=sqrt(k_1²+k_2²), without dividing by kappa. This parallel normal frame continues through a straight segment. Existence on compact subintervals follows from continuous coefficients and preservation of bounded frame norms. The local ODE argument is supplied in GS-S04.

Conversely, given C¹ kappa>0 and continuous tau on an interval, the Frenet frame equations form a linear ODE with a skew-symmetric coefficient matrix. Its solution preserves orthonormality and determinant +1. Integrating r_s=T gives a regular unit-speed C³ curve realizing those invariants. Initial position and oriented frame determine the solution uniquely. Two choices differ by a direct rigid motion, by ODE uniqueness after matching frames. This is the fundamental theorem of space curves in this stated positive-curvature scope, not a classification of arbitrary knots.

**GS-CV1–CV3 required problems.** CV1 derives the helix invariants for r(t)=(a cos t,a sin t,b t), a>0, b real. CV2 shows the frame construction works on a straight line and explains why its Frenet frame does not. CV3 proves the invariant quotient and the direct-rigid-motion uniqueness just stated.

**Complete keys.** CV1: q²=a²+b², ||r' cross r''||²=a²(a²+b²), det(r',r'',r''')=a²b. Hence kappa=a/(a²+b²), tau=b/(a²+b²); the third derivative and the orientation sign are essential. CV2: T is constant, so E_i'=0 and any initial perpendicular oriented pair remains one. Kappa=0; choosing N=T_s/kappa would divide zero by zero. CV3: r'_u=r'_t phi', r''_u=r''_t(phi')²+r'_t phi'', and r'''_u=r'''_t(phi')³+3r''_t phi'phi''+r'_t phi'''. Alternation removes repeated columns, leaving det multiplied by (phi')^6, and the squared cross norm has the same multiplier. For uniqueness, align the initial frames by the unique oriented orthogonal map; the transformed frame and original solve the same linear initial-value problem, so their tangents and then integrated curves agree after a translation. Existence uses kappa C¹, not merely a differentiable-looking graph.

## GS-S03 — Surfaces, manifolds and the shape operator

A C³ regular surface patch is an immersion X:U⊂R²→R³ with independent X_1,X_2. It need not be globally injective; an embedded patch is a homeomorphism onto its image with the subspace topology. A smooth abstract manifold has compatible charts, Hausdorffness and second countability as in TA-S04. A metric is extra positive-definite symmetric data. A normal chosen on one patch need not join consistently on a nonorientable surface.

For a regular oriented patch set

$$g_{ij}=X_i\\cdot X_j,\\qquad n=\\frac{X_1\\times X_2}{\\|X_1\\times X_2\\|},\\qquad
b_{ij}=X_{ij}\\cdot n,\\qquad S=-dn,\\qquad [S]=g^{-1}b.$$

Indeed n_i dot X_j=-n dot X_ij=-b_ij, so -n_i is tangent and has coefficients g^{-1}b. Mixed partials make b symmetric; hence S is self-adjoint for g. In a g-orthonormal eigenbasis its eigenvalues k_1,k_2 are real principal curvatures. The normal curvature in a unit tangent direction v is b(v,v); diagonalizing gives Euler's formula k_1 cos²theta+k_2 sin²theta. Thus

$$K=\\det S=\\frac{\\det b}{\\det g},\\qquad H=\\frac12\\operatorname{tr}(g^{-1}b),\\qquad
dA=\\sqrt{\\det g}\\,du^1du^2.$$

Reversing n reverses b,S,H and both principal curvatures, while K is unchanged. In this S=-dn convention an outward sphere has principal curvatures -1/R. The native article correctly states magnitudes, so its K=1/R² agrees.

Under a regular change u=phi(v), with invertible Jacobian J, the same normal gives g_tilde=J^T g J and b_tilde=J^T b J. In X composed with phi, the second derivative has an additional tangent term X_k phi^k_ij whose dot product with n is zero; that is why b transforms this way. Consequently S_tilde=J^{-1}SJ, so K and H are chart-independent for the chosen normal, and the area density changes by |det J|. Recomputing n from the new parameter cross product can reverse it when det J<0; state that normal choice separately.

For a graph X=(x,y,f(x,y)), write p=f_x,q=f_y,W=sqrt(1+p²+q²). Then

$$g=\\begin{pmatrix}1+p^2&pq\\\\pq&1+q^2\\end{pmatrix},\\quad
b=\\frac{D^2f}{W},\\quad
K=\\frac{\\det D^2f}{(1+|\\nabla f|^2)^2},\\quad
H=\\frac{(1+q^2)f_{xx}-2pqf_{xy}+(1+p^2)f_{yy}}{2(1+p^2+q^2)^{3/2}}.$$

These formulas follow by inverting the displayed two-by-two g (det g=W²), not by confusing a Euclidean Hessian with a shape matrix in all coordinates.

**GS-SF1–SF3 required problems.** SF1 derives all graph formulas and computes K,H at zero for f=(a x²+b y²)/2. SF2 compares a radius-R cylinder and sphere with the same magnitude of one principal curvature. SF3 applies the chart change (x,y)=(u+v,v) to the graph at zero and checks the shape eigenvalues.

**Complete keys.** SF1: at zero, g=I and b=diag(a,b), so S=diag(a,b), K=ab, H=(a+b)/2, and the upward normal is (0,0,1). At arbitrary (x,y), substitute p=ax,q=by,f_xy=0 in the general formulas. SF2: cylinder X=(R cos u,R sin u,v) has g=diag(R²,1), outward n=(cos u,sin u,0), b=diag(-R,0), hence principal curvatures -1/R,0 and K=0,H=-1/(2R). Sphere with outward n=X/R has dn(v)=v/R, hence S=-I/R, K=1/R²,H=-1/R. A cut cylinder is locally isometric to a plane by (u,v)↦(Ru,v); it is not one globally injective angle chart. SF3: J=((1,1),(0,1)), g_tilde=((1,1),(1,2)), b_tilde=((a,a),(a,a+b)). Multiplication gives S_tilde=((a,a-b),(0,b)), similar to diag(a,b). It is generally not symmetric for the ordinary coordinate dot product, but it is g_tilde-self-adjoint and has the same eigenvalues a,b. Its determinant and trace retain ab,a+b.

## GS-S04 — Intrinsic connections, curvature and geodesics

The same metric construction works on any C³ Riemannian n-manifold. Define a connection in a chart by covariant differentiation. Torsion-free means Gamma^k_ij=Gamma^k_ji; compatibility means partial_i g_jl=Gamma^k_ij g_kl+Gamma^k_il g_jk. Add the two cyclic identities and subtract the third to solve uniquely:

$$\\Gamma^k_{ij}=\\frac12g^{kl}(\\partial_i g_{jl}+\\partial_j g_{il}-\\partial_l g_{ij}).$$

Repeated indices are summed here. These coefficients define a connection independently of coordinates: on changing coordinates, differentiating a vector's components introduces second derivatives of the coordinate change, which the connection's inhomogeneous transformation term cancels. The compatibility and torsion equations are preserved by the chain rule, so uniqueness makes the chart definitions join. This proves the local existence/uniqueness of the metric torsion-free connection, with the coordinate transformation check explaining what is being joined.

Explicitly, with J^i_b=partial u^i/partial v^b, the transformation is

$$\\widetilde\\Gamma^a_{bc}=(J^{-1})^a_k\\left(\\Gamma^k_{ij}J^i_bJ^j_c+\\frac{\\partial^2u^k}{\\partial v^b\\partial v^c}\\right).$$

A vector has transformed components Y_tilde=J^{-1}Y. Differentiate this identity and use partial_b(J^{-1})=-J^{-1}(partial_b J)J^{-1}, obtained by differentiating J^{-1}J=I. Adding the displayed connection term cancels the derivative-of-J term exactly, leaving (nabla_b Y)_tilde=J^{-1}J^i_b(nabla_i Y). This is the vector transformation law required for the local definitions to join. It also explains why the coefficients themselves are not a tensor.

For an immersed surface decompose each second derivative as X_ij=Gamma^k_ij X_k+b_ij n. Taking dot products with X_l gives exactly the metric formula above. Differentiate this decomposition once in direction 1 and once in direction 2. Equality of mixed third derivatives and n_i=-S^k_i X_k give

$$R^l{}_{j12}=\\partial_1\\Gamma^l_{2j}-\\partial_2\\Gamma^l_{1j}
+\\Gamma^k_{2j}\\Gamma^l_{1k}-\\Gamma^k_{1j}\\Gamma^l_{2k}
=b_{2j}S^l_1-b_{1j}S^l_2.$$

The normal coefficients give partial_1 b_2j-partial_2 b_1j+Gamma^k_2j b_1k-Gamma^k_1j b_2k=0, the corresponding Codazzi equation. Set j=2 in the tangent equation, lower l with g_1l, and obtain

$$g_{1l}R^l{}_{212}=b_{22}b_{11}-b_{12}b_{21}=\\det b,\\qquad
K=\\frac{g_{1l}R^l{}_{212}}{\\det g}.$$

Thus Gaussian curvature depends only on g and its first two derivatives. This proves the local intrinsic-curvature identity for regular C³ patches. It does not assert that every abstract metric embeds globally in R³, nor solve the global isometric embedding problem.

For g=e^{2phi}I the metric formula simplifies to Gamma^k_ij=delta_kj phi_i+delta_ki phi_j-delta_ij phi_k. In particular Gamma^1_22=-phi_x, Gamma^1_12=phi_y, Gamma^2_12=phi_x, Gamma^2_22=phi_y, Gamma^1_11=phi_x. Substitution in R^1_212 makes the quadratic products cancel and gives -phi_xx-phi_yy. Therefore

$$K=-e^{-2\\varphi}(\\varphi_{xx}+\\varphi_{yy}).$$

This supplies the general calculation quoted by the advanced geometry prerequisite. It applies to a positive C³ conformal metric on its actual open domain. The sphere and disk examples still have different domains and signs; a coordinate singularity does not itself prove a geometric singularity.

For a C² path u(t), energy is one-half integral g_ij u'^i u'^j dt. Vary with fixed endpoints and integrate the velocity term by parts. The coefficient of each arbitrary interior variation gives

$$u''^k+\\Gamma^k_{ij}u'^iu'^j=0.$$

Conversely these equations make the first variation zero. Compatibility gives d(g(u',u'))/dt=2g(nabla_t u',u')=0, so an affine geodesic has constant speed. Stationarity is not a proof that a long segment is globally shortest.

For completeness, local ODE existence used here needs no unmentioned global theorem. Write z=(u,u'), z'=F(z). C³ g and positive determinant make F C¹, hence bounded by M and Lipschitz with constant L on a sufficiently small closed coordinate box. For T<min(r/M,1/L), with the zero-constant cases omitted, the integral map z↦z_0+integral_0^t F(z(s))ds sends the closed radius-r ball of continuous paths into itself and contracts its sup norm by LT<1. Iterating gives a uniformly Cauchy sequence by the geometric-series bound; its limit solves the integral equation and hence the ODE. The same inequality proves uniqueness there. This establishes local solutions with prescribed initial tangent, not completeness or existence for arbitrary time. The same integral proof applies to F(t,z) continuous in t and uniformly Lipschitz in z on the box; this covers the linear frame equations even when their coefficients are only continuous.

On a graph, taking tangent dot products of X_ij=(0,0,f_ij) gives Gamma^k_ij=f_k f_ij/(1+|gradient f|²). For f=(a x²+b y²)/2, the y=0 coordinate line becomes an affine geodesic after arc-length reparametrization:

$$x_s=(1+a^2x^2)^{-1/2},\\qquad
x_{ss}+\\frac{a^2x}{1+a^2x^2}x_s^2=0,\\qquad y=0.$$

The y equation is zero. The parameter x itself is generally not affine unless a=0 or at the isolated origin.

**GS-IN1–IN3 required problems.** IN1 reconstructs the Christoffel and Gauss equations and the conformal cancellation. IN2 derives the graph geodesic equation and verifies that arc-length solution. IN3 compares a short and a full-turn cylindrical helix and audits a boundary application of smooth Gauss–Bonnet.

**Complete keys.** IN1: compatibility plus lower-index symmetry yields the displayed Christoffel formula. The tangent coefficients of partial_1 X_2j-partial_2 X_1j give R=b_2j S_1-b_1j S_2, and contraction at j=2 yields det b. For the conformal products the terms are -phi_x²+phi_y²-phi_y²+phi_x²=0; the remaining derivatives are -Delta phi and the metric factor is e^{-2phi}. IN2: g^{-1}gradient f=gradient f/(1+|gradient f|²), proving the graph formula. Differentiating x_s gives x_ss=-a²x/(1+a²x²)², cancelling Gamma^x_xx x_s². Reflection y↦-y agrees with the preserved y=0 solution but is not needed for the computation. IN3: unrolling the cylinder makes an affine helix a straight line, hence it has zero tangential acceleration locally. The full horizontal circle is locally geodesic but returns to its starting point with positive length, while the constant path has length zero. Local straightness is insufficient for global minimality. Smooth Gauss–Bonnet for a compact oriented region with piecewise smooth boundary requires its geodesic-curvature integral, signed corner turns and Euler characteristic; GS-SRC-GB states this global theorem. We prove the PL identity below and do not claim that mesh convergence of area proves the general smooth Gauss–Bonnet theorem.

## GS-S05 — Nonuniform curves: length and curvature convergence

Here is a theorem for general curves rather than a regular-polygon fixture. Let r:[0,L]→R² be a unit-speed C³ curve with L>0. Let T be its tangent, with a continuous angle lift theta on the interval, and signed curvature k=theta'. Such a lift exists by choosing a local angle and joining along an interval. Suppose |k|≤K and |k'|≤J, and put M=J+K². Differentiating T_s=k times the quarter-turn of T gives T_ss=k' times that quarter-turn minus k²T, so ||T''||≤J+K²=M. Compactness supplies finite bounds; for closed curves assume the derivatives agree at the identified endpoints.

Choose **any** partition 0=s_0<...<s_N=L with h_i=s_{i+1}-s_i, maximum h and midpoints m_i. No lower bound on h_i/h is imposed. For the chord c_i=r(s_{i+1})-r(s_i), the midpoint Taylor remainder from RD2 gives

$$\\left\\|\\frac{c_i}{h_i}-T(m_i)\\right\\|\\le\\frac{Mh_i^2}{24}.$$

Assume Mh²/24≤1/2 and Kh+Mh²/6<pi. The chord is nonzero because its average tangent is within at most 1/2 of a unit vector. Write its direction angle phi_i on the branch near theta(m_i). The longitudinal component of the average tangent is at least 1-delta, and its transverse component has magnitude at most delta, with delta=Mh_i²/24. Thus |tan(phi_i-theta(m_i))|≤delta/(1-delta)≤2delta, and the chosen angle has magnitude ≤2delta:

$$|\\phi_i-\\theta(m_i)|\\le\\frac{Mh_i^2}{12}.$$

The strict angle assumption ensures consecutive lifted differences are the principal signed polygon turns. For the interior vertex at s_i define its **dual arc-length** d_i=(h_{i-1}+h_i)/2=m_i-m_{i-1}, and define the specific estimator k_i^h=(phi_i-phi_{i-1})/d_i. Its denominator is not a chord length. Compare with the average of k on [m_{i-1},m_i]:

$$\\left|k_i^h-\\frac1{d_i}\\int_{m_{i-1}}^{m_i}k(s)\\,ds\\right|
\\le\\frac{M(h_i^2+h_{i-1}^2)}{12d_i}\\le\\frac{Mh}{6},\\qquad
|k_i^h-k(s_i)|\\le\\left(\\frac M6+\\frac J2\\right)h.$$

The second inequality uses |s-s_i|≤h/2 throughout that dual interval. This is a uniform pointwise estimate at interior sample vertices for the declared estimator, even on highly nonuniform meshes. Neither equal parameter steps nor dividing turn by one arbitrary adjacent chord gives this theorem.

Length has a separate estimate, valid also for unit-speed space curves with ||T'||≤K:

$$0\\le L-\\sum_i|c_i|\\le\\frac{K^2Lh^2}{12}.$$

Indeed h_i²-|c_i|²=(1/2)integral integral ||T(s)-T(t)||² ds dt≤K²h_i⁴/12. Divide by h_i+|c_i|≥h_i, then sum h_i³≤h²L. This proves convergence, not just a trend in a finite table.

For an open curve, interior signed turns telescope to phi_{N-1}-phi_0. Relative to integral_0^L k ds, the omitted end tails and endpoint chord errors give

$$\\left|\\sum_{i=1}^{N-1}(\\phi_i-\\phi_{i-1})-\\int_0^Lk\\,ds\\right|
\\le\\frac K2(h_0+h_{N-1})+\\frac M{12}(h_0^2+h_{N-1}^2).$$

For a closed curve, join the last angle to phi_0+2pi w, where theta(L)-theta(0)=2pi w and w is the tangent winding number. The same small-mesh condition makes every cyclic difference principal; their signed sum is exactly 2pi w. This need not be 2pi for an immersed curve with self-intersections, and unsigned turns do not telescope. For a positively oriented simple closed regular curve w=1 is the separate turning-number theorem; no simple-curve assumption was smuggled into our estimates.

**GS-DS1–DS3 required problems.** DS1 proves all midpoint, dual-width and length bounds, stating every small-mesh assumption. DS2 handles a circle on an arbitrary admissible nonuniform arc partition. DS3 applies the theorem to the parabola gamma(t)=(t,t²), 0≤t≤1, sampled at t_i=(i/n)².

**Complete keys.** DS1 is the preceding proof: odd Taylor terms cancel, the chord's positive longitudinal component chooses its angle, division uses d_i not h_i, and h_i²+h_{i-1}²≤h(h_i+h_{i-1}). The length identity follows by expanding squared differences under the double integral and using ||T||=1. DS2: on radius R, k=1/R,J=0,M=1/R²,L=2pi R; each chord angle is its midpoint tangent angle when h_i<2pi R, so k_i^h=1/R exactly. Nevertheless the polygon length has the proved nonzero error bound. DS3: speed sqrt(1+4t²) lies in [1,sqrt(5)], so L≤sqrt(5), k=2/(1+4t²)^{3/2}, and |dk/ds|=24t/(1+4t²)^3≤24. Thus K=2,J=24,M=28 suffice. Since Delta t_i≤2/n, the induced maximum arc gap h≤2sqrt(5)/n. For n≥128, h<1/16, both small-mesh conditions hold (pi>3 is more than sufficient). Consequently length deficit ≤20sqrt(5)/(3n²) and interior curvature error ≤100sqrt(5)/(3n). The true pointwise k varies; the bound tends to zero without pretending parameter time equals arc length. End tails obey the open-curve estimate. The stationary reparametrization t↦t³ at zero would require another argument, since its speed lower bound fails.

## GS-S06 — Surface meshes: hypotheses, convergence and angle defects

Let Omega be a bounded polygonal domain in R². Suppose f is C² on an open neighborhood of its closure and ||D²f||≤M there. Let T_h be a finite conforming straight triangulation of Omega: closed triangles cover the closure, interiors are disjoint, intersections are common whole faces, boundary is covered once, and every triangle is nondegenerate. Assume every angle is at least alpha>0, independently of refinement. Necessarily alpha≤pi/3. Put sigma=sin alpha, h=max triangle diameter, and let I_h f interpolate f affinely at the vertices.

For a triangle based at p_0 with edges e_1,e_2 and constant interpolant gradient g_T, Taylor's theorem gives

$$e_j\\cdot(g_T-\\nabla f(p_0))=R_j,\\qquad |R_j|\\le M|e_j|^2/2.$$

Divide each equation by |e_j|. The two unit-direction rows form U with determinant sin theta, whose magnitude is at least sigma: theta is an angle in [alpha,pi-2alpha]. Its inverse has Frobenius norm sqrt(2)/|sin theta|. The right-hand side has norm at most Mh/sqrt(2); hence ||g_T-gradient f(p_0)||≤Mh/sigma. At any x in that triangle the gradient changes by at most Mh, yielding the trianglewise bound

$$|g_T-\\nabla f(x)|\\le C h,\\qquad C=M(1+\\sigma^{-1}).$$

The height bound needs no shape constant: use barycentric weights at x and Taylor-expand f at x; the constant and linear terms reproduce exactly and give |I_h f(x)-f(x)|≤Mh²/2.

Upward unit normals are n(p)=(-p,1)/sqrt(1+|p|²). For vectors of norm at least one, normalization changes distances by at most a factor two, so |n(g_T)-n(gradient f(x))|≤2Ch. The PL graph generally has no unique smooth normal at an edge: this is a uniform **per-face normal estimate**, including its one-sided traces. It is not a claim of a globally smooth PL normal field.

The map p↦sqrt(1+|p|²) is 1-Lipschitz, since its gradient norm is at most one. Graph area therefore satisfies

$$|A(I_hf)-A(f)|\\le|\\Omega| C h,\\qquad
A(f)=\\int_\\Omega\\sqrt{1+|\\nabla f|^2}\\,dxdy.$$

Thus maximum diameter tending to zero together with the uniform angle bound proves height, one-sided normal and area convergence on these general nonuniform graph meshes. A finite manifold atlas can use this argument patchwise only with compatible charts, a specified lifting/interpolation map, correct coverage and controlled overlap/partition weights. Arbitrary vertex clouds, unidentified surfaces and arbitrary skinny triangles do not meet that theorem. No pointwise Gaussian-curvature convergence is inferred from a first-derivative area estimate.

Here is an actual failure when shape control is omitted. Inscribe alternating rings on a unit cylinder of height H>0, integer counts m≥3 equally spaced vertices per ring and n≥1 equal height steps, adjacent rings rotated by pi/m. The usual zigzag strip contains 2m congruent triangles. Each triangle has base 2sin(pi/m) and altitude sqrt((H/n)²+(1-cos(pi/m))²), because its apex lies radially 1-cos(pi/m) beyond the base midpoint. Summing n strips gives the **Schwarz lantern** area

$$A_{m,n}=2mH\\sin(\\pi/m)\\sqrt{1+\\frac{n^2}{H^2}(1-\\cos(\\pi/m))^2}.$$

Every edge tends to zero if m,n→infinity. But sin x/x→1 and (1-cos x)/x²→1/2, obtained by the elementary sine/cosine integral remainders, imply: if n/m²→c, the area tends to 2pi H sqrt(1+c²pi⁴/(4H²)); for c>0 this differs from 2pi H. If n/m²→infinity the area diverges. The triangles lose a uniform angle bound. Refinement of positions alone cannot establish area convergence.

For a finite triangulated compact 2-manifold with boundary, require each interior edge to meet two triangles, each boundary edge one, each interior vertex link a circle and each boundary link an interval. Give each face a nondegenerate Euclidean triangle metric, agreeing on shared edge lengths. Define the interior defect delta_v=2pi-sum incident face angles, and boundary turning delta_v=pi-sum incident face angles. Every face has angle sum pi. With V_i,V_b and E_i,E_b,

$$\\sum_v\\delta_v=2\\pi V_i+\\pi V_b-\\pi F,\\qquad
3F=2E_i+E_b,\\quad E_b=V_b,\\qquad \\sum_v\\delta_v=2\\pi\\chi.$$

The last equality follows by substituting chi=V_i+V_b-E_i-E_b+F. This is a proved discrete Gauss–Bonnet identity, not a proof of a pointwise curvature limit or the general smooth theorem. Branching complexes violate the link hypotheses.

**GS-ME1–ME3 required problems.** ME1 reconstructs interpolation, gradient/normal/area estimates and identifies where shape control enters. ME2 derives the lantern formula and its three regimes n/m²→0,c>0,infinity. ME3 verifies the defect identity for a triangulated disk and a regular tetrahedral sphere.

**Complete keys.** ME1: the unit-edge system has inverse bound sqrt(2)/sigma, giving Ch as above; height uses only barycentric reproduction, normals use normalized graph vectors, area uses the Lipschitz integrand. These are different derivative orders and dependencies. ME2: the radial displacement and height step are perpendicular, so their squares add; 2m triangles per strip give the displayed area. Its asymptotic square-root factor tends respectively 1, sqrt(1+c²pi⁴/(4H²)), or infinity, while the prefactor tends 2pi H. ME3: the square disk split by one diagonal has V=4,E=5,F=2, chi=1. Its boundary turns sum 2pi, including for a tilted planar parallelogram; right angles are not needed. A regular tetrahedron has four vertices, six edges, four triangular faces, chi=2. Three angles pi/3 meet at each vertex, so each defect is pi and the total is 4pi. For a general triangulated disk the same incidence computation applies, not just these two examples.

## GS-S07 — Certified decisions on all finite binary64 coordinates

The reference implements orient2d, orient3d and the raw incircle determinant, then inclusive closed-segment intersection and a vertex-only monotone-chain hull. Coordinate inputs are finite JavaScript Numbers, interpreted as their **exact stored binary64 values**. Each predicate has at most four points of dimension two or three; hulls accept 0–64 planar points. NaN, infinities, wrong dimensions/types and excess points are rejected. Signed zero represents the same geometric coordinate as zero. This certifies recorded values, not unknown pre-rounding measurements.

The numerical assumptions are the specified binary64 format and correctly rounded elementary Number addition/subtraction/multiplication, as described in the [ECMAScript Number specification](https://tc39.es/ecma262/2021/#sec-ecmascript-language-types-number-type). The design follows the general filtered/exact distinction discussed by [Shewchuk's robust-predicate research](https://www.cs.cmu.edu/~quake/robust.html). The code below is a separately proved interval/dyadic implementation, not a claimed port of his optimized expansion routines.

For input points, use exact singleton intervals [x,x]. For each arithmetic operation, evaluate the interval endpoints and widen the rounded lower result to its predecessor and the upper result to its successor. Multiplication checks all four endpoint products. The nearest rounded value and its immediate neighbors enclose the exact real operation, including subnormal results and rounding to zero. We use bit-neighbor stepping, with nextUp(0)=minimum positive subnormal and nextDown(0) its negative. If any operation or widening produces a nonfinite value, the filter is abandoned; infinities never support a returned sign. Induction over the expression tree proves enclosure. Return +1 only when the lower endpoint is strictly positive, and -1 only when the upper endpoint is strictly negative.

If zero remains in the interval, compute exactly. Decode a finite binary64 value as n 2^e: for a normal encoded exponent E, n is the signed 53-bit significand and e=E-1075; for a subnormal, n is its signed fraction field and e=-1074. Zero has n=0. Choose the smallest exponent of the nonzero input values and scale every coordinate to an integer multiple of that positive common power of two. BigInt subtraction/products and the determinant expression are then exact. The determinant has degree two for orient2d, three for orient3d and four for incircle, so multiplying coordinates by a common positive factor preserves its sign. Exponents range from -1074 to 971; these fixed-dimensional operations use finitely bounded integers, even when a floating product would overflow or underflow. A zero exact determinant returns zero.

For orient3d use det(B-A,C-A,D-A), with those vectors as rows; transposition leaves the column convention's sign unchanged. For incircle translate A,B,C by D and use rows (x,y,x²+y²). Subtract the D row from each of the first three rows of the homogeneous four-by-four determinant. Then subtract 2D_x times the x column and 2D_y times the y column from the quadratic column: its first three entries become the squared translated distances. Expansion in the last column gives the displayed three-by-three formula. For noncollinear A,B,C, multiplying the raw sign by orient2d(A,B,C)'s sign makes positive mean inside, zero on and negative outside. A collinear triple has **no circumcircle**; the raw determinant may be nonzero. The API then returns relation "degenerate-circle", never a cocircular classification.

Closed-segment intersection returns a Boolean including endpoint contacts, overlap and point-segments. First test zero-orientation endpoint membership in an inclusive coordinate box; otherwise require two strict opposite-side pairs. These cases exhaust line intersection and collinear interval intersection, as the source proves. No rounded intersection point is manufactured. The hull deduplicates exact stored coordinates, removes collinear interior boundary points, returns empty/singleton/two extremes for degenerate inputs, and otherwise lists extreme vertices counterclockwise from the lexicographic minimum with no repeated closing vertex. Its support/pop invariant and complexity come from GS-SRC-HULL; all geometric sign branches call the robust predicate. Lexicographic comparison uses inequalities rather than overflowing coordinate subtraction.

**GS-PR1–PR3 required problems.** PR1 proves every filter return and dyadic fallback sign is correct for the whole declared input domain. PR2 derives the incircle sign convention and explains a collinear-generator example. PR3 proves inclusive intersection and hull boundary policies, then designs adversarial tests beyond the printed cases.

**Complete keys.** PR1: proceed by enclosure induction, using correctly rounded operations and outward neighboring floats; discard an unavailable interval. Exact binary decoding plus one positive common scale turns each determinant into the corresponding exact integer polynomial. Its sign is unchanged by the positive scaling. Bounded point count, exponent range and finite expression size guarantee termination; no epsilon or general-position assumption is used. PR2: for A=(0,0),B=(2,0),C=(0,2), the raw determinant is four times 2-((D_x-1)²+(D_y-1)²). Thus D=(1,1),(2,2),(3,3) gives 8,0,-24. Reversing B,C negates both orientation and raw determinant, preserving inside/outside. For A=(0,0),B=(1,0),C=(2,0),D=(0,1), the raw determinant is 2, although no circle through A,B,C exists; relation must be degenerate-circle. PR3: the four zero endpoint tests cover point-segments as well as collinear overlap; strict sign pairs cover proper crossings and reject remaining disjoint inputs. The lower/upper chain support invariant makes the hull contain every input point, and removed middle points cannot be lower extremes; the reverse scan retains legitimate upper extremes. Test exact zeros, duplicate points, all-collinear input, cancellation, extreme exponents, every argument permutation and transformations whose new coordinates remain exactly represented. Translating then rounding can change the exact input geometry, so unrestricted floating translation invariance is not a sound test oracle.

## GS-DATA — Printed investigation inputs

Each case uses helix r(t)=(a cos t,a sin t,b t), 0≤t≤2pi, and upward graph X=(x,y,(A x²+B y²)/2) over the **unit square**. Coarse graph triangles are (0,1,2),(0,2,3), in counterclockwise projected order, on vertices (0,0),(1,0),(1,1),(0,1). For the surface convergence family take x and y breakpoints 0,1/4,1/2,1, subdivide **each** listed interval into n equal pieces and split every rectangle along its increasing diagonal. The mesh is conforming and nonuniform, with side ratios between 1/2 and 2, minimum angle at least arctan(1/2), sigma=1/sqrt(5), and maximum diameter at most sqrt(2)/(2n). No global uniform grid is being substituted.

The planar curve is separate from the space helix and graph. GS-P uses a radius-one circle with normalized arc breakpoints shown below; GS-C uses a radius-two circle with a different partition. The breakpoint u means arc length s=2pi R u. GS-R uses the parabola and t_i=(i/n)² family in DS3, not equal arc steps.

~~~json
{
  "schema":"geometry-specialist-data-v1",
  "surfaceDomain":[[0,0],[1,0],[1,1],[0,1]],
  "surfaceTriangles":[[0,1,2],[0,2,3]],
  "surfaceBreaks":["0","1/4","1/2","1"],
  "cases":[
    {
      "id":"GS-P","helix":[2,1],"hessian":[2,1],
      "planeCurve":{"kind":"circle","radius":1,"breaks":["0","1/8","1/4","1/2","3/4","1"]},
      "orient2d":[[0,0],[134217729,134217728],[134217728,134217727]],
      "orient3d":[[0,0,0],[1,0,0],[0,1,0],[0,0,1]],
      "incircle":[[0,0],[2,0],[0,2],[1,1]],
      "segments":[[0,0],[2,2],[0,2],[2,0]],
      "hull":[[0,0],[1,0],[1,1],[0,1],[0.5,0.5],[1,0]]
    },
    {
      "id":"GS-C","helix":[1,-2],"hessian":[2,-1],
      "planeCurve":{"kind":"circle","radius":2,"breaks":["0","1/64","1/8","3/8","1/2","3/4","1"]},
      "orient2d":[[0,0],[5e-324,0],[0,5e-324]],
      "orient3d":[[0,0,0],[1,0,0],[0,1,0],[1,1,0]],
      "incircle":[[0,0],[2,0],[0,2],[2,2]],
      "segments":[[0,0],[3,0],[1,0],[2,0]],
      "hull":[[0,0],[2,0],[2,2],[0,2],[1,1],[2,0]]
    },
    {
      "id":"GS-R","helix":[1,0],"hessian":[0,2],
      "planeCurve":{"kind":"parabola","minimumN":128},
      "orient2d":[[0,0],[1.7976931348623157e308,8.988465674311579e307],[8.988465674311579e307,1.7976931348623157e308]],
      "orient3d":[[0,0,0],[1,0,0],[0,1,0],[0,0,-1]],
      "incircle":[[0,0],[2,0],[0,2],[3,3]],
      "segments":[[1,1],[1,1],[0,0],[2,2]],
      "hull":[[0,0],[1,1],[2,2],[1,1]]
    }
  ]
}
~~~

These are exact stored binary64 computational inputs. The clinic's rational-coordinate measurement model and the exact real smooth geometry are separately declared. The tiny and huge inputs intentionally test arithmetic range, not physical measurements on the displayed surface.

## GS-P — Primary smooth-to-mesh investigation

Before the public model, submit all **nine deliverables** using GS-P.

1. Derive the helix's speed, curvature and torsion and give its frame hypotheses. Compare reversal of traversal with reflection in z=0.
2. Apply the complete nonuniform planar-curve theorem to the circle partition: largest arc gap, small-mesh conditions, dual-width curvature estimator, total signed turn and length certificate. Explain why this is different from the clinic's turn-per-chord estimator.
3. Derive the graph metric, second form, shape operator, K,H at zero and the sheared chart matrices from SF3. Verify the arc-length geodesic along y=0; separate intrinsic K from normal-dependent H.
4. Compute the coarse interpolant, its gradient, upward normal and exact area. Prove the stated refinement family's shape constant, h bound and height/normal/area error certificates for **every n≥1**. Do not infer convergence from a finite table.
5. Verify the boundary-inclusive discrete Gauss–Bonnet total for the coarse lifted mesh and the tetrahedron. Derive the lantern family area and exhibit a refinement path that fails to approach cylinder area.
6. Run all five public computational operations on the printed data, retaining actual output and method fields. Independently give the exact determinant signs, incircle interpretation, segment-contact policy and ordered hull. Explain why the first orientation needs fallback despite exact stored integer coordinates.
7. With P=2^27 in the near-collinear triple, derive the clinic's coordinate-uncertainty bound at eta=2^-32 and eta=2^-26. At the larger allowance construct and verify an exact collinear witness; keep this real measurement set separate from machine input arithmetic.
8. Prove the interval/fallback contract over all finite binary64 inputs. Design and run additional cancellation, subnormal, overflow, zero, degenerate-circle and invalid-input cases, and show one downstream property for the hull and segment routines.
9. Compare first work with the full public model by criterion, retain the first unsupported step and revise its descendants. Record exact public help and code exposure; a studied mark is not the submitted portfolio.

### GS-P complete public model

The helix has q=sqrt(5), kappa=2/5,tau=1/5. It is regular with kappa>0 throughout. Traversal reversal preserves both invariants; reflection in z=0 sends b to -1 and torsion to -1/5 while leaving kappa unchanged. The frame proof, not just the substitution, is part of deliverable 1.

For the separate planar circle R=1,L=2pi, K=1,J=0,M=1. The largest normalized arc gap is 1/4, so h=pi/2. We have Mh²/24=pi²/96<1/2 and Kh+Mh²/6=pi/2+pi²/24<pi (pi<22/7 suffices). Every dual-arc estimator is exactly 1. Cyclic signed turn is 2pi, but the polygon length is short by at most pi³/24. The clinic's h/chord estimator is greater than the circle curvature; changing its denominator changes the object being estimated. No mesh-ratio assumption was needed.

For f=x²+y²/2, gradient=(2x,y), g=I+gradient f gradient f^T, b=diag(2,1)/sqrt(1+4x²+y²). At zero, S=diag(2,1), K=2,H=3/2. In the sheared chart, g_tilde=((1,1),(1,2)), b_tilde=((2,2),(2,3)) and S_tilde=((2,1),(0,1)), with the same eigenvalues. On y=0, x_s=(1+4x²)^(-1/2) satisfies x_ss+4x x_s²/(1+4x²)=0. The y equation vanishes. Arbitrary x timing is not an affine geodesic.

All four coarse graph vertex heights lie on z=x+y/2. Both face gradients are (1,1/2), upward normal (-2,-1,2)/3 and area density 3/2, giving coarse area 3/2 over the unit square. The exact smooth area is integral_[0,1]² sqrt(1+4x²+y²)dxdy; it has not been replaced by that coarse area.

In the refinement family every planar triangle is right, with leg ratio in [1/2,2], so its least angle is at least arctan(1/2) and sigma=1/sqrt(5). The largest original interval is 1/2, giving h≤sqrt(2)/(2n). The Hessian norm is M=2, so C=2(1+sqrt(5)). The theorem yields height error ≤1/(2n²), per-face normal error ≤2sqrt(2)(1+sqrt(5))/n, and area error ≤sqrt(2)(1+sqrt(5))/n. These coarse constants may exceed trivial bounds at small n; they remain valid certificates and converge to zero. The construction is conforming because it is a Cartesian grid with shared breakpoints; unequal original interval lengths remain unequal after subdivision.

The lifted coarse mesh is a planar parallelogram, hence chi=4-5+2=1. Its boundary angles need not all be right, but opposite angles sum to pi, making total boundary turning 2pi. A regular tetrahedral sphere has four defects pi, total 4pi. The lantern proof gives area tending, for n=m²,H=1, to 2pi sqrt(1+pi⁴/4), rather than 2pi, although maximum edge tends to zero. This is a convergence failure from increasingly skinny faces, not a failure of the graph-mesh theorem's proof.

The exact near-collinear orientation is (P+1)(P-1)-P²=-1. Both products round to the same binary64 number at this scale, so the interval filter cannot certify a negative result and the reference returns sign -1 by dyadic fallback. Orient3d is +1. The incircle raw determinant is 8 and the noncollinear generating orientation is +1, hence relation inside. The closed segments cross properly, so true. The vertex-only hull is (0,0),(1,0),(1,1),(0,1); the duplicate and interior point are absent.

Here u=(P+1,P),v=(P,P-1), with component sum 4P=2^29 and D=-1. The independent-coordinate allowance gives

$$E_\\eta=2^{30}\\eta+8\\eta^2.$$

At eta=2^-32 this is 1/4+2^-61<1, certifying every admitted true orientation negative. At eta=2^-26 it is 16+2^-49>1, so the sufficient bound is inconclusive. For an actual collinear witness keep A,B fixed and set C'=(P,P²/(P+1)). The changed y coordinate is P-1+1/(P+1), within eta because 1/(P+1)<2^-26. Direct multiplication gives determinant zero. This exact rational witness need not be a stored binary64 point; the measurement set allowed real coordinates. Arithmetic correctness for the recorded nominal triple and robustness to measurement uncertainty answer different questions.

The proof in PR1 covers every accepted coordinate. Required adversarial runs should include the changed/return data, equal points, a collinear incircle-generating triple and NaN/infinity rejection. The oracle independently uses homogeneous rational determinants rather than this code's translated expression. A successful finite run supports implementation checking; the enclosure/decode proof carries the universal statement. Retain the actual returned method for each run, not invented timing or output.

## GS-C — Changed saddle, nonuniform gaps and degenerate arithmetic

Complete the same **nine deliverables** with GS-C. Replace deliverable 7 with this exact measurement question: if the tiny nominal triple allows each true coordinate to move by at most eta=2^-1074, can collinearity occur? Give a witness and say whether the clinic's sufficient bound certifies a positive sign. Include a collinear-generator incircle request in deliverable 8, and preserve its raw sign separately from its relation.

### GS-C complete public model

The helix now has q=sqrt(5), kappa=1/5,tau=-2/5. Reflection in z=0 makes tau=2/5. Positive a keeps it regular and Frenet-admissible. The planar circle is a different object with R=2,L=4pi,K=1/2,J=0,M=1/4. Its largest normalized gap is again 1/4, while its smallest is 1/64: h=pi and the ratio of largest to smallest is 16. The midpoint theorem needs no ratio bound. Its small-mesh expressions are again pi²/96 and pi/2+pi²/24. Dual-arc curvature is exactly 1/2, total turn 2pi and length deficit ≤pi³/12.

The graph f=x²-y²/2 has b=diag(2,-1)/sqrt(1+4x²+y²), while g is still positive definite. At zero S=diag(2,-1),K=-2,H=1/2. Under the shear, b_tilde=((2,2),(2,1)) and S_tilde=((2,3),(0,-1)); g_tilde stays ((1,1),(1,2)). Thus a negative Gaussian curvature is compatible with a positive-definite metric, since K is not an eigenvalue of g. The y=0 arc-length geodesic equation is unchanged because it depends here on a², not the sign of b.

Coarse heights lie on z=x-y/2. Both face gradients are (1,-1/2), normal (-2,1,2)/3, and coarse area 3/2. The exact smooth area integral is the same as GS-P because it uses squared gradient components; equal area does not force equal K or isometry. Hessian norm 2, shape constant, refinement construction and all three convergence certificates are the same as GS-P. The PL defect totals stay 2pi and 4pi for the disk and tetrahedron; the smooth saddle's pointwise K was not identified with the coarse boundary-only defects. The lantern counterexample remains a counterexample to uncontrolled surface meshes.

Write z=2^-1074, the exact minimum positive binary64 value. The nominal orient2d determinant is z²>0, even though its floating product underflows. The interval contains zero, so exact dyadic fallback returns +1. Orient3d is zero because D lies in the base plane. Incircle's raw determinant is zero with noncollinear A,B,C, hence relation on. The closed segments overlap along [1,2] on the x-axis, hence true. The hull is (0,0),(2,0),(2,2),(0,2). Multiplying an underflowed zero by a tolerance would not recover the nominal sign.

At eta=z, keep A,B fixed and set C'=A: this changes C's y coordinate by z and makes the triple collinear. The component sum is 2z, so E_eta=2z(2z)+8z²=12z²>|D|. The sufficient measurement test is inconclusive, consistent with the witness. The bound is an exact real statement; forming z² as a Number would lose the value. For the separate collinear-generator request A=(0,0),B=(1,0),C=(2,0),D=(0,1), the raw determinant is +2 but the relation is degenerate-circle. There is no circumcircle to be “on.”

Deliverables 8–9 retain the same universal arithmetic proof and record obligations. The changed degeneracies are valid accepted geometric inputs, whereas malformed/nonfinite coordinates are rejected.

## GS-R — Public return through zero curvature and extreme range

From a fresh dated worksheet complete all **nine deliverables** with GS-R, recording all prior model/code exposure. For planar-curve deliverable 2 use DS3's parabola family and prove its estimates for n≥128. In deliverable 7 explain why exact stored coordinates near the largest finite Number do not give any undeclared measurement-error guarantee, and produce a concrete input-rounding loss using the clinic's 10^16 example. This public return is not an enforced delay or unseen assessment.

### GS-R complete public model

The spatial curve is the unit planar circle: q=1,kappa=1,tau=0. A zero torsion is allowed because kappa remains positive. At a straight line kappa would instead vanish and the parallel normal frame, not division by kappa, would be used. Reflection keeps this planar example's torsion zero.

The separate planar parabola has varying signed curvature 2/(1+4t²)^{3/2}. Arc-length reparametrization is legitimate because speed≥1. DS3 gives L≤sqrt(5), K=2,J=24,M=28 and h≤2sqrt(5)/n. For n≥128 its length deficit is at most 20sqrt(5)/(3n²), curvature-estimator error at most 100sqrt(5)/(3n), with the explicit open-curve end-tail term from GS-S05. These are actual nonuniform-mesh bounds for a noncircular curve, not a circle analogy or a claim of equal arc spacing. A numerical implementation that wants that estimator must use actual arc gaps or certified bounds for them; substituting parameter gaps changes it.

The graph f=y² is cylindrical: at zero S=diag(0,2),K=0,H=1. The sheared matrices are b_tilde=((0,0),(0,2)) and S_tilde=((0,-2),(0,2)), with the same zero and two eigenvalues. Along y=0 the curve X=(x,0,0) is a straight affine geodesic. Its coarse interpolant is z=y with gradient (0,1), normal (0,-1,1)/sqrt(2), and area sqrt(2). The smooth normal varies with y despite K=0. The exact smooth area over the square is integral_0^1 sqrt(1+4y²)dy=sqrt(5)/2+asinh(2)/4. Differentiate (y/2)sqrt(1+4y²)+asinh(2y)/4 to check that antiderivative.

Hessian norm remains 2, so the same refinement constants prove convergence for the whole surface family. Coarse area sqrt(2) is not its exact smooth area. The disk/tetrahedral defect identities and lantern failure still have their own hypotheses; zero smooth K does not make every boundary turn or coarse facet-normal difference vanish.

The huge orient2d coordinates are all finite. If U is Number.MAX_VALUE, the second component U/2 is exactly represented. The exact determinant is 3U²/4>0; direct floating products overflow, so the filter is unavailable and exact dyadic fallback returns +1. Orient3d is -1. Incircle has raw determinant -24 and relation outside. The point-segment at (1,1) lies on the other closed diagonal segment, so intersection is true. The all-collinear hull is exactly (0,0),(2,2), not a repeated chain or a three-vertex polygon.

There is no measurement set until one is declared. In the clinic's exact-integer triple ((10^16,0),(10^16+1,1),(10^16+2,3)), the integer determinant is 1. Converting the coordinates first loses the unit x offset and produces a different nominal orientation -2. Our binary64 API correctly reports the sign of those rounded coordinates; it cannot restore the original integer geometry. Translate exact integers before conversion, or use a separate exact-integer/rational input API. The current implementation does not claim to accept arbitrary decimal rationals as exact Numbers.

Reconstruct the interval proof, exact fallback, boundary contracts, adversarial runs and record comparison from first principles. A copied final positive sign does not show that overflow was handled; retain the actual method field and the exact sign argument. No runtime claim is made by this printed model.

## GS-LEDGER — Exact public comparisons

Curvatures and torsion use the chosen inverse-length unit; area uses squared length. The predicate columns are signs, not determinant magnitudes.

| Case | Helix kappa | Helix tau | Graph K at zero | Graph H at zero | Coarse gradient | Coarse area squared | orient2d | orient3d | incircle raw sign | incircle relation | inclusive intersection | Hull |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GS-P | 2/5 | 1/5 | 2 | 3/2 | (1,1/2) | 9/4 | -1 | 1 | 1 | inside | true | (0,0);(1,0);(1,1);(0,1) |
| GS-C | 1/5 | -2/5 | -2 | 1/2 | (1,-1/2) | 9/4 | 1 | 0 | 0 | on | true | (0,0);(2,0);(2,2);(0,2) |
| GS-R | 1 | 0 | 0 | 1 | (0,1) | 2 | 1 | -1 | -1 | outside | true | (0,0);(2,2) |

The general convergence certificates are formulas in h and n, not measured empirical rates. The independent oracle reads this ledger, the printed data and displayed matrices, checks exact algebra and the finite runs, and exercises unprinted adversarial examples. Passing it is bounded implementation evidence, separate from the mathematical hypotheses/proofs and from observing a learner.

## GS-CODE — Required public filtered and exact implementation

Copy this complete block into an existing JavaScript environment. No dependency, UI, network, private store or package is required. Each function returns plain data. The filter may be conservative; no speed comparison is claimed. It adapts from outward intervals to exact dyadic integers whenever the sign is unproved.

~~~javascript
const geometryPredicates = (() => {
  const buffer = new ArrayBuffer(8), view = new DataView(buffer);
  const fractionMask = (1n << 52n) - 1n;
  function point(p, dimension) {
    if (!Array.isArray(p) || p.length !== dimension ||
        Array.from(p).some(x => typeof x !== "number" || !Number.isFinite(x))) {
      throw new TypeError("finite Number coordinates with the required dimension");
    }
    return Array.from(p, x => x === 0 ? 0 : x);
  }
  function neighbor(x, upward) {
    if (!Number.isFinite(x)) return x;
    if (x === 0) return upward ? Number.MIN_VALUE : -Number.MIN_VALUE;
    view.setFloat64(0, x, false);
    let bits = view.getBigUint64(0, false);
    bits += upward === (x > 0) ? 1n : -1n;
    view.setBigUint64(0, bits, false);
    return view.getFloat64(0, false);
  }
  function enclosure(lo, hi) {
    if (!Number.isFinite(lo) || !Number.isFinite(hi)) return null;
    lo = neighbor(lo, false); hi = neighbor(hi, true);
    return Number.isFinite(lo) && Number.isFinite(hi) ? [lo, hi] : null;
  }
  const interval = {
    add(a, b) { return a && b ? enclosure(a[0] + b[0], a[1] + b[1]) : null; },
    sub(a, b) { return a && b ? enclosure(a[0] - b[1], a[1] - b[0]) : null; },
    mul(a, b) {
      if (!a || !b) return null;
      const v = [a[0]*b[0], a[0]*b[1], a[1]*b[0], a[1]*b[1]];
      if (v.some(x => !Number.isFinite(x))) return null;
      return enclosure(Math.min(...v), Math.max(...v));
    }
  };
  const integer = { add:(a,b)=>a+b, sub:(a,b)=>a-b, mul:(a,b)=>a*b };
  function decoded(x) {
    view.setFloat64(0, x, false);
    const bits = view.getBigUint64(0, false);
    const exponent = Number((bits >> 52n) & 2047n);
    let n = bits & fractionMask;
    if (exponent !== 0) n |= 1n << 52n;
    if ((bits >> 63n) !== 0n) n = -n;
    return { n, e: exponent === 0 ? -1074 : exponent - 1075 };
  }
  function integers(points) {
    const decodedPoints = points.map(p => p.map(decoded));
    const nonzero = decodedPoints.flat().filter(x => x.n !== 0n);
    const exponent = nonzero.length ? Math.min(...nonzero.map(x => x.e)) : 0;
    return decodedPoints.map(p => p.map(x => x.n === 0n ? 0n : x.n << BigInt(x.e - exponent)));
  }
  function det2(a, b, r) {
    return r.sub(r.mul(a[0], b[1]), r.mul(a[1], b[0]));
  }
  function det3(a, b, c, r) {
    return r.add(
      r.sub(r.mul(a[0], det2([b[1], b[2]], [c[1], c[2]], r)),
            r.mul(a[1], det2([b[0], b[2]], [c[0], c[2]], r))),
      r.mul(a[2], det2([b[0], b[1]], [c[0], c[1]], r)));
  }
  function expression(kind, p, r) {
    const difference = (a, b) => a.map((x, i) => r.sub(x, b[i]));
    if (kind === "orient2d") return det2(difference(p[1],p[0]),difference(p[2],p[0]),r);
    if (kind === "orient3d") return det3(difference(p[1],p[0]),difference(p[2],p[0]),difference(p[3],p[0]),r);
    const rows = p.slice(0,3).map(a => {
      const d = difference(a,p[3]);
      return [d[0],d[1],r.add(r.mul(d[0],d[0]),r.mul(d[1],d[1]))];
    });
    return det3(rows[0],rows[1],rows[2],r);
  }
  function sign(kind, raw) {
    const dimension = kind === "orient3d" ? 3 : 2;
    const count = kind === "orient2d" ? 3 : 4;
    if (raw.length !== count) throw new TypeError("wrong point count");
    const points = raw.map(p => point(p,dimension));
    const bound = expression(kind,points.map(p=>p.map(x=>[x,x])),interval);
    if (bound && bound[0] > 0) return { sign:1, method:"interval" };
    if (bound && bound[1] < 0) return { sign:-1, method:"interval" };
    const exact = expression(kind,integers(points),integer);
    return { sign:exact>0n?1:exact<0n?-1:0, method:"dyadic" };
  }
  const orient2d = (...p) => sign("orient2d",p);
  const orient3d = (...p) => sign("orient3d",p);
  function incircle(...raw) {
    const result = sign("incircle",raw);
    const orientation = orient2d(...raw.slice(0,3)).sign;
    const adjusted = result.sign * orientation;
    return { ...result, orientation,
      relation:orientation===0?"degenerate-circle":adjusted>0?"inside":adjusted<0?"outside":"on" };
  }
  function intersects(...raw) {
    if (raw.length !== 4) throw new TypeError("four endpoints");
    const [a,b,c,d] = raw.map(p=>point(p,2));
    const o = [orient2d(a,b,c).sign,orient2d(a,b,d).sign,
      orient2d(c,d,a).sign,orient2d(c,d,b).sign];
    const on = (p,q,r) => r.every((x,i)=>Math.min(p[i],q[i])<=x && x<=Math.max(p[i],q[i]));
    if ((o[0]===0 && on(a,b,c)) || (o[1]===0 && on(a,b,d)) ||
        (o[2]===0 && on(c,d,a)) || (o[3]===0 && on(c,d,b))) return true;
    return o[0]*o[1]<0 && o[2]*o[3]<0;
  }
  function hull(raw) {
    if (!Array.isArray(raw) || raw.length > 64) throw new RangeError("zero to 64 points");
    const sorted = Array.from(raw, p=>point(p,2)).sort((a,b)=>
      a[0]<b[0]?-1:a[0]>b[0]?1:a[1]<b[1]?-1:a[1]>b[1]?1:0);
    const p = sorted.filter((a,i)=>i===0 || a[0]!==sorted[i-1][0] || a[1]!==sorted[i-1][1]);
    if (p.length < 3) return p;
    if (p.every(q=>orient2d(p[0],p.at(-1),q).sign===0)) return [p[0],p.at(-1)];
    function chain(list) {
      const out = [];
      for (const q of list) {
        while (out.length>=2 && orient2d(out.at(-2),out.at(-1),q).sign<=0) out.pop();
        out.push(q);
      }
      return out;
    }
    return [...chain(p).slice(0,-1),...chain([...p].reverse()).slice(0,-1)];
  }
  return Object.freeze({orient2d,orient3d,incircle,intersects,hull});
})();
~~~

For each printed case c, run geometryPredicates.orient2d(...c.orient2d), orient3d(...c.orient3d), incircle(...c.incircle), intersects(...c.segments), and hull(c.hull). Keep the actual returned objects/arrays; compare all fields to the hand model and contract. Also carry out PR3's additional adversarial requests, including an invalid input and a degenerate-circle input. No console transcript or browser run is invented by this text.

## GS-REVIEW — Evidence, repair and further study

For each source question, local problem and investigation deliverable mark **supported**, **partly supported**, or **repair needed**, quoting the first missing argument or failed output. Review curve regularity/zero-curvature cases; frame and coordinate invariance; surface metric/normal signs; intrinsic connection calculations; nonuniform gap and shape constants; height versus derivative orders; boundary/link hypotheses; arithmetic domain, enclosure and exact fallback; downstream degeneracy policies; and exposure/revision records separately.

Keep dated first, comparison and revised files under the stable IDs, plus actual code inputs/outputs and public implementation/version used. Preserve the first response before opening a key. Use the [worksheet portfolio guide](/guide/learner-records/#keep-a-worksheet-portfolio); mutable reader notes do not retain that entire portfolio automatically. A later public reconstruction can remain useful after help; it does not establish hidden assessment, verified delay, independent work, learner effectiveness or a grade. A finite implementation oracle is not proof verification for general geometry.

Repair a Frenet division at zero curvature by the parallel normal frame. Repair a chart-dependent “curvature” by transforming both metric and second form. Repair an area-convergence claim by checking the Hessian, lifting/domain coverage, maximum diameter and uniform angle bound; use the lantern to expose a missing assumption. Repair a PL normal claim by stating its facewise domain. Repair an epsilon sign by an actual enclosure or exact arithmetic. Repair an alleged cocircular collinear triple by naming the missing circumcircle. Repair measurement claims by declaring the admissible true-coordinate set separately from stored-number arithmetic.

The local general proofs and bounded implementation complete this chosen specialist sequence across the three routes. Global embedding/classification, full smooth Gauss–Bonnet proof, convergence of arbitrary discrete Gaussian-curvature estimators, general 3D meshing and Delaunay software, and empirical reconstruction of an unknown surface are further courses or projects with additional hypotheses. The claims actually made here do not depend on those extensions having been performed. No historical source, reader identity, edition or existing learner record is replaced.
`;export{e as default};