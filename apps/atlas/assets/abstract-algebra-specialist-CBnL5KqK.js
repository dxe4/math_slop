var e=`---
id: course-abstract-algebra-specialist
title: "Algebra: Derived Constructions and Lie Representations"
level: graduate
status: beta
estimated_minutes: null
license: CC BY-SA 4.0
---

# Algebra: Derived Constructions and Lie Representations

<!-- euler-course-route -->

## Current course route

The [current course page](/courses/atlas-abstract-algebra-specialist/) links the five authored introductory chapters of [Lie Groups and Lie Algebras](/books/library-book-lie-groups-lie-algebras/). They prepare the matrix-group and Lie-correspondence material. The full derived-constructions and Lie-representation seminar remains Outline.

Preparation courses: [Algebra: Fields, Modules, Representations, and Local Rings](/courses/atlas-abstract-algebra-advanced/) · [Linear algebra II](/courses/atlas-linear-algebra-standard/) · [Manifolds and differential geometry](/courses/course-smooth-manifolds/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A tensor product can erase an injection. A symmetry can forbid an extension that exists after forgetting the symmetry. These are structural failures, and their interaction is the subject of this course. We develop projective resolutions and derived constructions, prove a higher-dimensional Koszul calculation, and build the representation theory of the split Lie algebra $\\mathfrak{sl}_2$ from its defining relations. Three cumulative portfolios join those theories over polynomial rings.

The preparation is [Advanced Algebra: Fields, Modules, Representations, and Local Rings](#/item/course-abstract-algebra-advanced), including all four modules, its source assignments and public portfolios, together with finite-dimensional linear algebra. The finite-group representation theory there is preparation, not a substitute for the Lie theory here. Modules, category language, kernels, images and exact sequences precede resolutions; resolutions precede derived invariance; Lie relations precede tensor decomposition and equivariant extension questions. The ordered source work below is required alongside the new local work.

**The study time depends on the selected reading, attempts and corrections.** This Outline seminar supports self-study. Keep dated first, comparison and corrected worksheets with each task ID, exact input, code version, actual output and public help used. All models are public. Reading marks, mutable notes, timestamps and self-review points establish no grade, unseen performance, enforced delay or professional qualification. The course neither invents a learner run nor reports a software benchmark.

## Preparation diagnostic and ordered repairs

Attempt D1–D6 before reading the answers. A failed question selects its repair; it does not bar entry. Then do source rows S1–S4 in order. New concepts in D4–D6 are explained in their repairs.

**D1.** For $R=\\mathbb Q[t]$, why is $0\\to R\\xrightarrow{t^2}R\\to R/(t^2)\\to0$ exact? What fails after tensoring with $R/(t)$?

**D2.** Define projectivity by lifting through surjections. Prove a free module has this property.

**D3.** For $d_2(n)=(n,-n)$ and $d_1(a,b)=a+b$ over $\\mathbb Z$, verify exactness and find $h$ with $dh+hd=1$.

**D4.** Give a quasi-isomorphism that is not a chain homotopy equivalence.

**D5.** For the matrices $e=\\left(\\begin{smallmatrix}0&1\\\\0&0\\end{smallmatrix}\\right)$, $f=\\left(\\begin{smallmatrix}0&0\\\\1&0\\end{smallmatrix}\\right)$ and $h=\\operatorname{diag}(1,-1)$, compute all three brackets $[h,e],[h,f],[e,f]$.

**D6.** For a diagonalizable operator over a field, why does an invariant subspace contain each eigencomponent of any of its vectors? Why does positive characteristic threaten this argument for the weights $n,n-2,\\ldots,-n$?

**Public answers and repairs.** D1: $R$ is a domain, so multiplication by $t^2$ is injective, with image the quotient kernel. Tensoring the two free terms with $R/(t)$ gives the zero map on $\\mathbb Q$, which is not injective. Repair S1 §§1.1–1.5, Exercises 1.1–1.5, then S3 Exercises 3–4. D2: for a basis $(b_i)$ and a map to a quotient, choose a lift of each basis image; extending linearly gives a lift on the free module. Repair S1 §1.3 and local Resolution construction below. D3: $\\ker d_1=\\mathbb Z(1,-1)$; $d_2$ is injective and $d_1$ surjective. Set $h_0(n)=(n,0)$ and $h_1(a,b)=-b$; the equations in degrees 0,1,2 give respectively $n$, $(-b,b)+(a+b,0)$ and $n$. Repair S4 Exercise 3.4 before local Cones. D4: the quotient map from $[\\mathbb Z\\xrightarrow{2}\\mathbb Z]$ in degrees 1,0 to $(\\mathbb Z/2)[0]$ is a quasi-isomorphism. Every map in the reverse direction is zero in degree 0, so no inverse up to homotopy can induce the identity on $H_0$. Repair S4 §§3.1–3.2 and Exercise 3.5. D5: direct matrix multiplication gives $2e,-2f,h$. Repair local Lie representations before L1. D6: the projection onto the $\\lambda_i$ eigenspace is the polynomial $\\prod_{j\\ne i}(T-\\lambda_j)/(\\lambda_i-\\lambda_j)$; an invariant subspace is preserved by that polynomial. In characteristic $p$, weights can coincide modulo $p$ and denominators can vanish. Repair with [Eigenvalues, Diagonalization, and Field Extensions](#/item/book-linear-algebra-structure-proofs?chapter=eigenvalues-and-diagonalization), §§1–4 and Exercises 1, 4, 8, 9, whose full inline solutions appear under their named headings in Exercises with full solutions; reconstruct the D6 projector argument before local Highest weights. We work in characteristic zero throughout.

## Required native reading and worked feedback

The exact chapters, section ranges, assignments and full public key locations are listed here. Chapter headings, not book labels, specify the work. Do not replace these tasks with a checkmark or a new portfolio.

| Order | Required source reading and tasks | Complete public feedback |
| --- | --- | --- |
| S1 | [Morphisms First, Modules](#/item/book-morphisms-modules-categories?chapter=modules-linear-algebra-over-a-ring), §§1.1–1.7; Exercises 1.1, 1.2, 1.3, 1.4, 1.5 | Each named Exercise 1.1–1.5 has its own full inline Solution in §1.7. Retain quotient well-definedness, projectivity/splitting and finite-generation reasoning. |
| S2 | [Morphisms First, Abelian Categories](#/item/book-morphisms-modules-categories?chapter=abelian-categories), §§2.1–2.9; Exercises 2.1–2.5 | All five inline Solutions in §2.9. For Exercise 2.5 retain the preceding advanced course's finite-diagram/small-abelian-subcategory repair and imported Freyd–Mitchell boundary. The local proofs here concern modules and do not invoke that embedding theorem. |
| S3 | [Chain Complexes, Homology, Ext, and Tor](#/item/deep-dive-chain-complexes-derived), all sections through Exercises with worked answers; Exercises 1–5 | Full Answer immediately after each of the five questions. Write the distinct subgroup and quotient in Exercises 3–4 even though both are isomorphic to $\\mathbb Z/2$. |
| S4 | [Morphisms First, Derived Categories](#/item/book-morphisms-modules-categories?chapter=derived-categories), §§3.1–3.7; Exercises 3.1–3.5 | All five inline Solutions in §3.7. The comparison theorem, cone argument and formal localization below supply required proofs beyond that gateway. The source's imported triangulated-category construction remains imported. |

These are twenty required native questions. For S1 Exercise 1.3, the advanced prerequisite's Diagnostic D2 supplies the expanded operation trace: swap columns, subtract three times row 1 from row 2, subtract twice column 1 from column 2, then negate row 2, obtaining $\\operatorname{diag}(2,12)$. Keep that full trace alongside the native answer; arbitrary rational row division would erase torsion. The source's short gcd script is illustrative arithmetic; it independently verifies neither a universal coefficient theorem nor the Tor formula. Our resolution proof supplies the mathematical justification. Optional further chapters on spectral sequences, homological dimension, duality, model categories and higher categories retain their own imported theorems and are not silently added assignments.

## Resolution construction, comparison and derived functors

We use chain grading: $d:C_n\\to C_{n-1}$. A projective resolution is an exact augmented complex $\\cdots\\to P_1\\to P_0\\xrightarrow{\\epsilon}M\\to0$ with projective $P_i$, $P_i=0$ for $i<0$. In the unaugmented complex, $H_0(P)=M$ and $H_i(P)=0$ for $i>0$. The resolved object $M$ is removed before applying a functor to the resolution.

We use the usual axiom of choice when choosing lifts and free presentations. Every module has a free resolution. Take the free module on the underlying set of $M$, map its named generator $[m]$ to $m$, take the kernel, and repeat the same construction on that kernel. Surjectivity at each stage and inclusion of the kernel give exactness. A free module is projective by D2; a direct summand of a free module is projective by extending a map by zero on the other summand and restricting a lift. Conversely, lift the identity through a free surjection onto a projective module to split that surjection. Thus projectives are exactly direct summands of free modules. No finite-generation or finite-length resolution is asserted here.

**Comparison theorem, with the choices exposed.** Let $P\\to M$ and $Q\\to N$ be projective resolutions and $u:M\\to N$. Lift $u\\epsilon_P:P_0\\to N$ through $Q_0\\to N$, obtaining $u_0$. If $u_0,\\ldots,u_{n-1}$ are chosen, then $u_{n-1}d_P:P_n\\to Q_{n-1}$ lands in $\\ker d_Q$ (for $n=1$, in $\\ker\\epsilon_Q$). Exactness makes $Q_n\\to\\ker d_Q$ surjective. Projectivity of $P_n$ lifts this map to $u_n$. Induction produces a chain map lifting $u$.

If $v,w:P\\to Q$ lift the same $u$, then $v_0-w_0$ lands in $\\ker\\epsilon_Q=\\operatorname{im}d_{Q,1}$; lift it to $s_0:P_0\\to Q_1$. Suppose $s_0,\\ldots,s_{n-1}$ satisfy $v_i-w_i=d_Qs_i+s_{i-1}d_P$ below $n$, with $s_{-1}=0$. The map $v_n-w_n-s_{n-1}d_P$ has differential zero because the lower-degree identity cancels it. Lift it through $Q_{n+1}\\to\\ker d_{Q,n}$ to $s_n$. Consequently $v-w=ds+sd$. Identity lifts between two resolutions of $M$ compose to maps homotopic to the identity. This proves resolution independence, including the canonical isomorphism: different choices induce the same homology maps because on a cycle $(ds+sd)z=d(sz)$ is a boundary. The same induction shows functoriality, since a composite lift lifts the composite module map.

For a commutative ring $R$, define $\\operatorname{Tor}^R_i(M,N)=H_i(P_M\\otimes_RN)$. Define $\\operatorname{Ext}^i_R(M,N)=H^i\\operatorname{Hom}_R(P_M,N)$, where the cochain differential from degree $i$ to $i+1$ is precomposition by $d_{i+1}$. Both square to zero; applying additive Hom or tensor to a chain homotopy gives the required cochain or chain homotopy (with the usual total-complex convention below), so the preceding comparison proof makes these definitions independent of $P_M$. Ext is contravariant in $M$ and covariant in $N$; Tor is covariant in both. Over a noncommutative ring Tor needs a right module and a left module, which we do not suppress by notation.

For $R=\\mathbb Q[t]$ and $R_r=R/(t^r)$, $r\\ge1$, the resolution $[R\\xrightarrow{t^r}R]\\to R_r$ has length one. Therefore, for every $N$,
$$\\operatorname{Hom}_R(R_r,N)=\\ker(t^r:N\\to N),\\quad
\\operatorname{Ext}^1_R(R_r,N)=N/t^rN,$$
$$R_r\\otimes_RN=N/t^rN,\\quad
\\operatorname{Tor}^R_1(R_r,N)=\\ker(t^r:N\\to N),$$
and all higher groups vanish for this first argument. For $N=R_s$ let $m=\\min(r,s)$. The kernel has basis $t^{s-m},\\ldots,t^{s-1}$ and the quotient has basis $1,t,\\ldots,t^{m-1}$. Multiplication by $t^r$ has rank $s-m$. The two spaces have the same dimension $m$ but different locations in $R_s$.

**Extensions are actual presentations.** For $z\\in N$, form
$$E_z=(N\\oplus Re)/\\langle t^re-z\\rangle.$$
The copy of $N$ injects: if a multiple $a(t^re-z)$ lies in $N$, its free $e$ coefficient is $at^r=0$, hence $a=0$ in the domain $R$. The quotient is $R_r$. Conversely lift $1\\in R_r$ to an element $e$ in any extension and set $z=t^re\\in N$. Changing the lift to $e+n$ changes $z$ by $t^rn$. An equivalence fixing both endpoints does exactly this. Thus extension classes are $N/t^rN$, with zero exactly the split extensions; addition agrees with addition of the relation parameters, by pulling back two extensions over the same quotient and adding their kernel coordinates. With several free generators, replace $z$ by a linear map from their multiplicity space to $N$. This proves the Ext interpretation needed in the portfolios without importing a general Yoneda classification theorem.

## Cones, exact sequences and localization

A degreewise short exact sequence $0\\to A\\xrightarrow{i}B\\xrightarrow{p}C\\to0$ of complexes gives the connecting homomorphism $\\delta:H_n(C)\\to H_{n-1}(A)$. Lift a cycle $c$ to $b$, write $db=i(a)$ and set $\\delta[c]=[a]$. Injectivity of $i$ and $d^2=0$ give $da=0$. A different lift $b+i(a')$ changes $a$ by $da'$; changing $c$ by $dc'$ and lifting $c'$ changes $b$ by a boundary, with the same conclusion. Therefore $\\delta$ is well defined and linear.

Here is exactness at all three types of term. If a cycle $b$ has $[p(b)]=0$, write $p(b)=dc'$ and lift $c'$ to $b'$. Then $b-db'$ is $i(a)$ for a cycle $a$, so $\\ker H(p)=\\operatorname{im}H(i)$. If $\\delta[c]=0$, the constructed $a$ is $da'$, so $b-i(a')$ is a cycle lifting $c$; hence $\\ker\\delta=\\operatorname{im}H(p)$. If a cycle $a$ has $i(a)=db$, then $p(b)$ is a cycle and $\\delta[p(b)]=[a]$; hence $\\ker H(i)=\\operatorname{im}\\delta$. The reverse inclusions follow from the same equations. Shifting $n$ proves the entire long exact sequence. A commutative diagram sends any chosen lift to a lift, proving naturality.

For a chain map $f:C\\to D$, put
$$\\operatorname{Cone}(f)_n=D_n\\oplus C_{n-1},\\qquad
\\partial(d,c)=(d_Dd+f(c),-d_Cc).$$
The cross term in $\\partial^2$ is $d_Df-fd_C=0$. Projection onto $C[1]_n=C_{n-1}$, with differential $-d_C$, gives a degreewise split exact sequence $0\\to D\\to\\operatorname{Cone}(f)\\to C[1]\\to0$. The connecting map on the displayed homology sequence is $H(f)$: lifting $c$ as $(0,c)$ gives differential $(f(c),0)$. The preceding exactness proof shows **$f$ is a quasi-isomorphism if and only if its cone is acyclic**. For $f=1_C$, $s_n(d,c)=(0,d)$ satisfies $\\partial s+s\\partial=1$, so its cone is contractible. For $f=t^r:R[0]\\to R[0]$, its cone is exactly the two-term resolution of $R_r$.

Chain homotopy is an equivalence relation compatible with addition and composition: if $f-g=ds+sd$, composing by a chain map gives the same equation with the composed $s$. The homotopy category $K(R)$ is consequently defined without a claim that quasi-isomorphisms already have inverses there. To construct a localization carefully, fix a universe for the modules and complexes and work in a larger universe containing their collection. For every quasi-isomorphism $q:X\\to Y$ in $K(R)$ add a formal arrow $q^{-1}:Y\\to X$. Take finite composable words of original arrows and these formal inverses. Quotient by the smallest composition-compatible equivalence relation imposing original composition, identities and $q^{-1}q=1_X$, $qq^{-1}=1_Y$. Concatenation descends to an associative composition; the empty word is the identity. This category is $D(R)$ in these universes.

Given a functor $F:K(R)\\to\\mathcal C$ taking quasi-isomorphisms to isomorphisms, send an original arrow to $F(f)$ and a formal inverse to $F(q)^{-1}$, then compose along the word. Every imposed relation is respected, so this defines a unique factorization through $D(R)$. Uniqueness holds because those arrows generate all words. This proves the localization universal property. Roof descriptions and the full triangulated axioms, including octahedral compatibility, require further theorems; the native chapter imports them. Neither a cone calculation nor the word construction above is presented as their complete proof.

## Bounded derived invariance and a higher Koszul model

For chain complexes over a commutative ring, use the total tensor differential
$$d(p\\otimes c)=d_Pp\\otimes c+(-1)^i p\\otimes d_Cc\\quad(p\\in P_i).$$
The two cross terms cancel, so $d^2=0$. If $P$ is bounded with projective terms, tensoring it with an acyclic complex $C$ remains acyclic. Indeed a projective module is a summand of a free module; free tensor is a direct sum of copies, so preserves exact sequences, and a direct summand does too. Thus each single column $P_i\\otimes C$ is acyclic. Filter the total complex by columns $i\\le k$. This is a finite filtration by subcomplexes because $d_P$ decreases $i$. The successive quotients are shifted single columns. Repeated application of the long exact sequence proves the assertion. No convergence claim for an infinite filtration is used.

For complete sign control define the cochain Hom complex
$$\\mathcal H^q(P,C)=\\prod_i\\operatorname{Hom}_R(P_i,C_{i-q}),\\qquad
(D\\phi)_i=d_C\\phi_i-(-1)^q\\phi_{i-1}d_P.$$
The target lies in degree $q+1$ and expansion gives $D^2=0$. For $C=N[0]$ this convention gives $(-1)^{q+1}$ times precomposition in degree $q$; multiplication of degree $q$ by $(-1)^{q(q+1)/2}$ identifies it with the unsigned resolution convention used above, so their cohomology agrees. If $P$ is bounded, this product is finite. Projectivity makes each $\\operatorname{Hom}(P_i,-)$ exact. Filter $\\mathcal H$ by the tail columns $i\\ge k$; the precomposition term increases the column, so these are subcomplexes. The finite successive quotients are shifts of exact Hom columns. The same long-exact-sequence argument proves $\\mathcal H(P,C)$ acyclic for acyclic $C$.

Apply these two statements to $\\operatorname{Cone}(q)$ for a quasi-isomorphism $q:C\\to D$. Total tensor commutes with cone up to the sign change on its shifted summand; explicitly the $P_i\\otimes C_{j-1}$ summand is multiplied by $(-1)^i$. For Hom the cone comparison gives the cone of the induced Hom map after the corresponding grading identification. Alternatively the finite filtrations apply directly to these induced cones, whose column quotients are Hom or tensor of the acyclic cone of $q$. Hence both $P\\otimes q$ and $\\mathcal H(P,q)$ are quasi-isomorphisms. This is the invariance required for bounded-projective derived tensor and Hom. It does not authorize unbounded products or arbitrary nonflat tensor factors. The comparison theorem already proves independence for the resolutions used here; this result also controls replacement of the other complex.

**A length-two resolution, proved rather than inferred from a finite table.** Let $S=\\mathbb Q[x,y]$, $u,v\\ge1$, and $A_{u,v}=S/(x^u,y^v)$. Set
$$K_2=S\\xrightarrow{d_2}K_1=S^2\\xrightarrow{d_1}K_0=S,\\quad
 d_2(c)=(-y^vc,x^uc),\\quad d_1(a,b)=x^ua+y^vb.$$
The composite vanishes. If $d_2(c)=0$, the domain property and $x^u\\ne0$ give $c=0$. If $x^ua+y^vb=0$, reduce modulo $x^u$. In $(\\mathbb Q[x]/x^u)[y]$, multiplication by $y^v$ is injective: a nonzero polynomial in $y$ has a nonzero leading coefficient after shifting its degree. Thus $b=x^uc$. Cancelling $x^u$ in $S$ gives $a=-y^vc$. This proves exactness in degree one; the cokernel is precisely $A_{u,v}$. We have a free resolution for every such pair, not a proof about all regular local rings.

After tensoring $K$ with $A_{u,v}$, both differentials vanish. Therefore
$$\\operatorname{Tor}^S_i(A_{u,v},A_{u,v})=(A_{u,v},A_{u,v}^2,A_{u,v})\\quad(i=0,1,2),$$
with zero above degree two. Hom into $A_{u,v}$ likewise has zero differentials and the same additive groups for Ext in degrees 0,1,2. In the tensor Koszul complex the two degree-one generators anticommute, square to zero, and their product is the degree-two generator: its differential follows the graded Leibniz rule, so after reduction its homology algebra is the exterior algebra over $A_{u,v}$ on those two generators. This is a statement about the displayed Tor model and its multiplication, not a proved identification of every possible Yoneda product convention. The monomial basis $x^iy^j$, $0\\le i<u$, $0\\le j<v$, gives dimensions $(uv,2uv,uv)$. Unlike the $R_r$ examples, this module has nonzero degree-two derived information.

## Lie representations, enveloping algebra and highest weights

A Lie algebra is a vector space with bilinear alternating bracket satisfying Jacobi. A representation is a linear map $\\rho:\\mathfrak g\\to\\operatorname{End}(V)$ satisfying $\\rho([a,b])=\\rho(a)\\rho(b)-\\rho(b)\\rho(a)$. Associative commutators satisfy Jacobi by expanding its six positive and six negative terms and cancelling them in pairs. The traceless two-by-two matrices form $\\mathfrak{sl}_2$, with basis $e,f,h$ from D5 and relations
$$[h,e]=2e,\\qquad[h,f]=-2f,\\qquad[e,f]=h.$$
A subrepresentation is a subspace stable under all three operators; the induced action on a quotient is well defined because the subspace is stable. On $V\\otimes W$, use $a(v\\otimes w)=av\\otimes w+v\\otimes aw$. Operators acting on different factors commute, so expanding their commutator verifies the representation identity. On $V^*$ use $(a\\lambda)(v)=-\\lambda(av)$; the negative transpose turns the reversed order of dual compositions into the correct bracket. Consequently $\\operatorname{Hom}(V,W)=W\\otimes V^*$ carries $aT=a_WT-Ta_V$. Invariant vectors are exactly intertwiners. These constructions are over either $\\mathbb Q$ or $\\mathbb C$ in this course.

The enveloping algebra packages all compositions: take the free associative algebra on $e,f,h$ and quotient by the three relations. A linear Lie action extends uniquely to a module over this algebra by evaluating words; the relations vanish exactly when the bracket identities hold. Conversely any such module restricts to a Lie action. This proves the universal property for this presentation.

There is also an actual normal-form theorem here. Order letters $f<h<e$ and words by length first, then lexicographically. Rewrite
$$hf\\rightsquigarrow fh-2f,\\qquad eh\\rightsquigarrow he-2e,\\qquad ef\\rightsquigarrow fe+h.$$
Each produced word is smaller in this well order, even inside a fixed surrounding word, so every reduction terminates. The only overlapping pair of reducible length-two words is $ehf$. Reducing its left pair gives
$$(he-2e)f\\rightsquigarrow h(fe+h)-2(fe+h)
\\rightsquigarrow fhe-4fe+h^2-2h.$$
Reducing its right pair gives
$$e(fh-2f)\\rightsquigarrow(fe+h)h-2(fe+h)
\\rightsquigarrow fhe-4fe+h^2-2h.$$
Reductions in disjoint positions commute by bilinearity. Induction on the largest word at which two reduction paths first differ now joins the paths: the overlapping or disjoint first steps have a common reduction, and every later word is smaller. Thus the final linear combination is unique. The irreducible words are $f^ah^be^c$. The normal-form map kills each defining relation in every word context; it therefore descends to the quotient and fixes those irreducible words. They consequently form a basis, not merely a spanning family. This is the PBW result for this specific Lie algebra, with no claim to have proved the general PBW theorem.

For $n\\ge0$, let $V_n$ have basis $v_0,\\ldots,v_n$ and actions
$$hv_i=(n-2i)v_i,\\qquad ev_i=i v_{i-1},\\qquad fv_i=(n-i)v_{i+1},$$
where out-of-range vectors are zero. These are homogeneous polynomials $x^{n-i}y^i$, with $e=x\\partial_y$, $f=y\\partial_x$ and $h=x\\partial_x-y\\partial_y$. The formulas directly give the three relations, including at the endpoints. Distinct weights let polynomial projections in $h$ isolate a basis vector in any nonzero invariant subspace. Applying $e$ repeatedly reaches $v_0$ with a nonzero factorial coefficient, and applying $f$ repeatedly reaches every $v_i$. Thus $V_n$ is irreducible over both $\\mathbb Q$ and $\\mathbb C$.

**Classification of finite-dimensional irreducibles over $\\mathbb C$.** No diagonalizability of $h$ is assumed initially. It has an eigenvector over $\\mathbb C$. The relation $he=e(h+2)$ takes an eigenvector of weight $\\lambda$ to one of weight $\\lambda+2$ or to zero. Following this finite eigenvalue string reaches a nonzero eigenvector $w$ with $ew=0$. Distinct weights imply that $f^iw$ is eventually zero. If $m$ is the last index with $f^mw\\ne0$, the commutator induction gives
$$h f^iw=(\\lambda-2i)f^iw,\\qquad
 e f^iw=i(\\lambda-i+1)f^{i-1}w.$$
For the second identity use $ef^{i+1}w=fef^iw+hf^iw$ and add the coefficients. At $i=m+1$ it gives $0=(m+1)(\\lambda-m)f^mw$, so $\\lambda=m\\in\\mathbb Z_{\\ge0}$. The span of this ladder is stable under $e,f,h$, hence is all of an irreducible representation. Its basis has distinct eigenvalues; scaling $f^iw$ by $(m-i)!/m!$ gives exactly the displayed $V_m$ formulas. This proves classification and shows its diagonalizability as a consequence. The proof also shows that any highest-weight eigenvector in any finite-dimensional representation generates a copy of $V_m$ for a nonnegative integer $m$.

The classification statement used algebraic closure; it is not silently transported to arbitrary rational representations. Our portfolios use the explicit rational $V_n$ above, and the next decomposition is constructed over $\\mathbb Q$. Extending their matrices to $\\mathbb C$ gives the classified modules. General positive-characteristic and nonsplit rational forms require separate theory.

## Tensor decomposition with an explicit complete basis

Write $w_0,\\ldots,w_b$ for the polynomial basis of $V_b$. For $0\\le j\\le\\min(a,b)$ set
$$z_j=\\sum_{i=0}^j(-1)^i\\binom ji\\,v_i\\otimes w_{j-i},\\qquad m_j=a+b-2j.$$
The $h$ weight is $m_j$. The coefficient of $v_i\\otimes w_{j-i-1}$ in $ez_j$ is
$$(-1)^{i+1}\\binom j{i+1}(i+1)+(-1)^i\\binom ji(j-i)=0.$$
Thus $z_j$ is a nonzero highest vector. The highest-weight argument just proved shows its descendants $z_j,fz_j,\\ldots,f^{m_j}z_j$ are nonzero, have distinct weights and span a copy of $V_{m_j}$. Its next descendant is zero: if not, $f^{m_j+1}z_j$ is a highest eigenvector of negative weight $-m_j-2$, which the same finite-ladder argument excludes.

To prove that the resulting submodules are independent, use
$$\\Omega=h^2+2h+4fe.$$
It commutes with $h$. Expanding $[h^2,e]=2he+2eh$ and $[fe,e]=-he$ gives $[\\Omega,e]=2(eh-he)+4e=0$; the analogous expansion with $f$ gives zero as well. Therefore it acts by $m_j(m_j+2)$ on every descendant of $z_j$. These eigenvalues are distinct for the distinct nonnegative $m_j$. Polynomial projection in $\\Omega$ separates the submodules, proving their direct sum. If $a\\le b$, their dimensions sum to
$$\\sum_{j=0}^a(a+b-2j+1)=(a+1)(b+1),$$
which exhausts the tensor product. We have proved, with a specified full basis,
$$V_a\\otimes V_b\\cong\\bigoplus_{j=0}^{\\min(a,b)}V_{a+b-2j}.$$
All coefficients and separation arguments lie in $\\mathbb Q$. No general semisimplicity theorem is needed for this constructed tensor decomposition.

For Hom, $V_a^*$ is irreducible because the annihilator of a nonzero proper invariant subspace would be a nonzero proper invariant subspace of $V_a$. Its highest vector is the dual functional $v_a^*$ of weight $a$; the resulting rational ladder has dimension $a+1$. Explicitly the intertwining isomorphism is $J_a(v_i)=(-1)^i\\binom ai^{-1}v_{a-i}^*$: applying $e,f,h$ to this formula verifies each intertwining equation, and every coefficient is nonzero. Hence $V_a^*\\cong V_a$ over $\\mathbb Q$, and the same proved decomposition applies to $\\operatorname{Hom}_{\\mathbb Q}(V_a,V_b)$. In particular its invariant subspace has dimension one when $a=b$ and zero otherwise. In the equal case the identity is invariant and spans that line. This proves the intertwiner assertion needed below without importing Schur's lemma or a reductivity theorem.

## Required local practice and complete solutions

Do H1–H4 and L1–L4 after the corresponding teaching and before the portfolios. These eight tasks supplement the twenty native questions.

**H1.** Write the first two stages of a free resolution of $\\mathbb Z/4$ over $\\mathbb Z$. Construct the comparison map from this resolution to the identical resolution lifting the map multiplication by 3. Explain why any two lifts agree on Ext.

**Key H1.** Use $P_1=P_0=\\mathbb Z$, $d=4$, augmentation reduction mod 4 and $P_i=0$ above degree one. Multiplication by 3 in both degrees commutes with $d$ and lifts the given map. The comparison induction gives a homotopy between any two lifts. Applying Hom and taking cohomology kills its boundary contribution, so the induced contravariant map on Ext is independent of lifts; for $N=\\mathbb Z$ it is multiplication by 3 on $\\mathbb Z/4$.

**H2.** Compute the connecting map for $0\\to\\mathbb Z[0]\\xrightarrow{2}\\mathbb Z[0]\\to(\\mathbb Z/2)[0]\\to0$. Then compute the cone of the first map and explain why these are different uses of the same map.

**Key H2.** The connecting map from $H_0(\\mathbb Z/2)$ to $H_{-1}(\\mathbb Z)$ is zero because the target is zero. Exactness at degree zero is the original short exact sequence. The cone has $\\mathbb Z$ in degrees 1,0, differential 2, so $H_1=0,H_0=\\mathbb Z/2$. In the cone sequence the connecting map from $H_1(\\mathbb Z[1])=\\mathbb Z$ to $H_0(\\mathbb Z)=\\mathbb Z$ is multiplication by 2, identifying its kernel and cokernel. Confusing the two exact sequences assigns a map the wrong domain.

**H3.** For $S$ and $A_{2,1}$, write every Koszul differential and all three derived groups, including multiplication in Tor. Test the incorrect sign choice $d_2(c)=(yc,x^2c)$.

**Key H3.** Correct maps are $(-y,x^2)^T$ and $(x^2,y)$. Their composite is zero, and the earlier domain/modulo-$x^2$ argument proves exactness. After tensor or Hom into $A=\\mathbb Q[x]/(x^2)$, both maps vanish. Tor and Ext have additive groups $A,A^2,A$, dimensions $2,4,2$. Tor has generators $\\alpha,\\beta$ in degree one, with $\\alpha^2=\\beta^2=0$, $\\beta\\alpha=-\\alpha\\beta$; $\\alpha\\beta$ spans degree two over $A$. The incorrect composite is $2x^2y\\ne0$ in $S$, so it is not a complex even though reducing prematurely modulo the ideal hides the error.

**H4.** Tensor $R_r$'s resolution with $R_s$ and give bases when $(r,s)=(2,4)$ and $(4,2)$. State the exact boundedness and flatness assumptions used to replace another complex.

**Key H4.** For $(2,4)$ the kernel basis is $t^2,t^3$, quotient basis $1,t$ and map rank 2. For $(4,2)$ the map is zero, kernel and quotient have basis $1,t$ and rank 0. Both have dimension two but the embeddings differ. A bounded complex of projective modules is termwise flat and gives a finite column filtration; these facts prove tensoring an arbitrary quasi-isomorphism with it preserves quasi-isomorphisms. No such conclusion follows by tensoring an arbitrary nonflat module, as D1 shows.

**L1.** Verify the $V_2$ matrices and show its character of $h$-weights differs from a three-dimensional trivial module. Reduce its $e$ matrix in characteristic two and name the proof step that is lost.

**Key L1.** Columns are images in basis $v_0,v_1,v_2$:
$$e=\\begin{pmatrix}0&1&0\\\\0&0&2\\\\0&0&0\\end{pmatrix},\\quad
f=\\begin{pmatrix}0&0&0\\\\2&0&0\\\\0&1&0\\end{pmatrix},\\quad h=\\operatorname{diag}(2,0,-2).$$
Their brackets give $2e,-2f,h$. The weights are $2,0,-2$, whereas the trivial module has three zero weights. Modulo two $e v_2=0$, all $h$ weights coincide and the nonzero ladder coefficients and polynomial weight projections used in characteristic zero fail. This does not classify the resulting modular representation.

**L2.** Reduce $ehf$ by both PBW routes and explain both spanning and independence.

**Key L2.** The two explicit reductions in Enveloping algebra both give $fhe-4fe+h^2-2h$. The degree-lex order terminates, this resolves the sole overlap and disjoint reductions commute. The smaller-word induction gives a unique normal form. Every word therefore spans by ordered monomials; the normal-form map descends to the quotient and fixes them, proving no nonzero linear combination of them is zero.

**L3.** Give highest vectors for $V_2\\otimes V_2$, their Casimir eigenvalues and a full basis prescription; show the identity in Hom is its sole invariant direction.

**Key L3.** The vectors are $v_0w_0$, $v_0w_1-v_1w_0$, $v_0w_2-2v_1w_1+v_2w_0$, with tensor signs understood. Highest weights are $4,2,0$; Casimir eigenvalues are $24,8,0$. Take $f^k$ of the respective vectors for $k=0..4$, $0..2$, $0$. Distinct Casimir values make the resulting submodules independent; their dimensions total nine. Hom is rationally $V_2^*\\otimes V_2\\cong V_4\\oplus V_2\\oplus V_0$; its invariant line is spanned by the nonzero invariant identity.

**L4.** If $0\\to N\\to E\\to M\\to0$ is an extension with compatible Lie actions commuting with $R$, prove its underlying Ext class is invariant. Does that prove every invariant class has an equivariant realization?

**Key L4.** For the presentations used here, put $M=U\\otimes R_r$ and choose an $R$-linear lift $\\ell:U\\otimes R\\to E$. Its relation parameter is $z=t^r\\ell:U\\to N$. For $a\\in\\mathfrak g$, the defect $\\beta_a=a_E\\ell-\\ell a_U$ lands in $N$ because the quotient map is equivariant. Commutation with $t$ gives $a_Nz-za_U=t^r\\beta_a$. Thus $a\\cdot[z]=0$ in the Ext quotient. This proves the asserted necessary condition for our specified presentations; it is also the usual Hom-coboundary computation. This is a necessary condition. No equivalence with Ext in an equivariant category is deduced: that converse and possible kernels of forgetting require additional theory. The changed portfolio constructs an equivariant realization directly.

## AA-SPEC-P001: derived arithmetic with unequal Lie endpoints

In all three portfolios $a,b$ are highest-weight labels, and $r,s$ are positive torsion exponents. Put $R=\\mathbb Q[t]$, $M=V_a\\otimes R_r$ and $N=V_b\\otimes R_s$, with $t$ commuting with the specified rational Lie actions. Ambient Hom, Ext and Tor are over $R$; their Lie action is induced from the tensor and Hom formulas, and does not redefine them as equivariant Ext. For the separate higher-derived comparison use $S=\\mathbb Q[x,y]$ and $A_{u,v}$. Work first, then compare with the public model.

AA-SPEC-P001-NATIVE
~~~json
{"case_id":"AA-SPEC-P001","a":2,"b":1,"r":2,"s":3,"u":1,"v":1,"characteristic":0}
~~~

**Required deliverables P1–P7.** P1: write the equivariant free $R$ resolution of $M$ and compute the Hom, Ext and tensor/Tor complexes, all kernels, quotients, bases and dimensions. P2: decompose every derived multiplicity space into explicit Lie summands and give highest vectors and a complete descendant-basis prescription. P3: form the underlying extension parameter $T:V_2\\to V_1$ with $T(v_0)=w_0$, $T(v_1)=T(v_2)=0$, coefficient 1 in $R_3/t^2R_3$; give its module presentation and cyclic decomposition, and test the necessary equivariance condition. P4: prove resolution independence and the bounded replacement conclusion for this model, naming the hypotheses. P5: derive the full $S$ Koszul resolution and its Tor/Ext groups and Tor multiplication. P6: run the required public reference on the printed input and retain the actual exact record and all failure controls. P7: distinguish proved general results, finite checks, scalar-field restrictions and unresolved extensions.

### Complete public model for P001

**P1.** The resolution is $0\\to V_2\\otimes R\\xrightarrow{t^2}V_2\\otimes R\\to M\\to0$; scalar multiplication commutes with the Lie action, and injectivity follows coefficientwise in the domain. Hom into $N$ has two copies of $\\operatorname{Hom}_{\\mathbb Q}(V_2,V_1)\\otimes R_3$, each dimension $6\\cdot3=18$, differential $t^2$. Its image has basis $T_{ij}\\otimes t^2$, dimension six, where $T_{ij}(v_k)=\\delta_{ik}w_j$ for $i=0..2,j=0..1$. Hom is the kernel, basis $T_{ij}\\otimes t,T_{ij}\\otimes t^2$; Ext degree one is the quotient, basis $T_{ij}\\otimes1,T_{ij}\\otimes t$. Both have dimension twelve; Ext above one is zero. The tensor complex has two copies of $V_2\\otimes V_1\\otimes R_3$, differential $t^2$. Its degree-one kernel has basis $v_iw_j\\otimes t,t^2$ and its degree-zero quotient basis $v_iw_j\\otimes1,t$, both dimension twelve. Higher Tor vanishes. The Lie operators act only on the six-dimensional multiplicity spaces.

**P2.** $V_2\\otimes V_1=V_3\\oplus V_1$, and the Hom multiplicity space has the same decomposition by rational self-duality, proved earlier. In the tensor space take $z_0=v_0w_0$ and $z_1=v_0w_1-v_1w_0$. Their weights are 3,1 and Casimir values 15,3. Descendants $f^kz_0$ for $k=0..3$ and $f^kz_1$ for $k=0..1$ give six independent vectors. Tensor each list with the two displayed coefficient basis elements for the appropriate subgroup or quotient. Thus each Hom, Ext, tensor and Tor group is two copies of $V_3\\oplus V_1$. Hom highest vectors are $(J_2\\otimes1)z_0,(J_2\\otimes1)z_1$ under $V_2^*\\otimes V_1\\cong\\operatorname{Hom}(V_2,V_1)$; here $J_2(v_0)=v_2^*$, $J_2(v_1)=-v_1^*/2$, $J_2(v_2)=v_0^*$. They are transported by the explicit rational self-dual ladder from the previous section, not by pretending a transpose is the same basis matrix. There is no invariant direction in the ambient Ext representation.

**P3.** With generators $e_0,e_1,e_2$ lifting $M$ and $n_0,n_1$ for $N$, impose $t^3n_j=0$, $t^2e_0=n_0$, $t^2e_1=t^2e_2=0$. The preceding presentation argument proves exactness and classifies the parameter. Eliminating $n_0$ gives
$$E\\cong R_5\\oplus R_3\\oplus R_2\\oplus R_2,$$
of dimension $5+3+2+2=12$, equal to $\\dim M+\\dim N=6+6$. The class is nonzero because its coefficient 1 is not in $t^2R_3$, so it is nonsplit as an $R$ extension. Since $hT=(1-2)T=-T$, its nonzero Ext class is not invariant and cannot arise from compatible lifted Lie actions with these endpoints. This is a statement about this underlying class; it neither identifies equivariant Ext with invariants nor classifies extensions whose underlying class is zero.

**P4.** The free terms are projective, so the comparison construction makes any two resolutions homotopy equivalent; induced Hom and tensor maps agree on cohomology/homology. This resolution is bounded with free, hence flat, terms, so the finite-filtration argument shows replacing the other complex by a quasi-isomorphic one preserves the derived output. Ordinary tensor alone would forget the degree-one kernel, which here has dimension twelve.

**P5.** Here $A_{1,1}=\\mathbb Q$. The maps are $(-y,x)^T$ and $(x,y)$ over $S$. The earlier domain and polynomial-leading-coefficient proof establishes exactness. Reduction into $A$ makes the differentials zero, yielding Tor and Ext additive dimensions $1,2,1$, zero above two. Tor multiplication is the exterior algebra on two degree-one generators; in particular their product survives in degree two. That nonzero group prevents replacing this resolution by a length-one projective resolution.

**P6.** The expected exact record is the first row of the reference table below. Agreement must be established by the learner's actual execution; this model records no claimed run. Retain both the case output and the controls list. P7: comparison, cone/LES, the displayed Koszul exactness, the specific PBW theorem and tensor decomposition are proved here. The code checks bounded integer matrix facts and printed models, not those general proofs. Characteristic zero and the chosen rational split modules are essential; general reductivity, arbitrary Lie algebras, arbitrary regular sequences and the imported triangulated axioms are not supplied by finite agreement.

## AA-SPEC-C001: an equivariant changed extension and a thicker Koszul quotient

AA-SPEC-C001-NATIVE
~~~json
{"case_id":"AA-SPEC-C001","a":2,"b":2,"r":3,"s":1,"u":2,"v":1,"characteristic":0}
~~~

**Required changed work C1–C7.** Repeat all seven deliverables with these changed inputs. Replace the elementary relation parameter by the identity $V_2\\to V_2$; explicitly construct its compatible Lie action and test splitting. Explain why the new invariant line does not prove a general invariant-extension theorem. Give the changed Koszul monomial basis, multiplication and degree-two group. Include actual output and controls; do not reuse the primary record.

### Complete public model for C001

**C1.** Resolve $M=V_2\\otimes R_3$ by $t^3$ on two free rank-three modules. Since $N=V_2\\otimes R_1$, the induced Hom and tensor maps are zero on nine-dimensional spaces: the coefficient basis is just 1. Hom, Ext degree one, tensor degree zero and Tor degree one all have dimension nine. Higher groups vanish. The map rank is zero, unlike the primary rank six, and the kernel is all of $R_1$, rather than the span of higher powers inside $R_3$.

**C2.** Each multiplicity space is $V_4\\oplus V_2\\oplus V_0$. Highest vectors are $v_0w_0$, $v_0w_1-v_1w_0$, and $v_0w_2-2v_1w_1+v_2w_0$. Their descendant lengths are $5,3,1$ and Casimir values $24,8,0$. The Casimir argument proves independence and the nine descendants exhaust the space. The sole invariant Hom/Ext multiplicity direction is the identity.

**C3.** Define $E=V_2\\otimes R_4$, inject $N$ by $v\\otimes1\\mapsto v\\otimes t^3$, and take the quotient modulo that image to $M=V_2\\otimes R_3$. Kernel/image and injectivity follow from the monomial bases, so the sequence is exact. The Lie action is on $V_2$ alone and commutes with every map. The relation is $t^3e_i=n_i$ for every basis index, which is exactly the identity parameter. An $R$-linear section would send $v_i\\otimes1$ to a lift annihilated by $t^3$, but every such lift has $t^3$ times it equal to the nonzero $v_i\\otimes t^3$. Thus even the underlying extension is nonsplit. Its dimension is twelve, $9+3$, and its cyclic decomposition is $R_4^3$. This directly constructs one equivariant nonsplit extension. It does not infer a converse to L4 for arbitrary objects or Lie algebras.

**C4.** Comparison and bounded-free replacement apply with $t^3$ exactly as in P4; the nonzero Tor degree one is now nine-dimensional. Changing the exponent does not waive the domain or boundedness hypotheses.

**C5.** $A_{2,1}=\\mathbb Q[x]/(x^2)$ has basis $1,x$. The resolution maps are $(-y,x^2)^T$ and $(x^2,y)$. Exactness uses the leading-coefficient argument modulo $x^2$, despite that quotient having the zero divisor $x$. Tor and Ext are $A,A^2,A$, with dimensions $2,4,2$ and degree-two basis $\\alpha\\beta,x\\alpha\\beta$. Products satisfy $x^2=0$, $\\alpha^2=\\beta^2=0$, and $\\beta\\alpha=-\\alpha\\beta$. The source quotient changed from a field to a ring with nilpotents, and degree-two information doubled.

**C6–C7.** The second expected record below carries the new ranks and basis dimensions; retain an actual separate run. Attempting characteristic two must be refused by this reference. That refusal is a bound on the supported computation, while L1 explains a mathematical obstruction to transplanting the proof. The code's exactness checks concern the supplied models; it proves neither general PBW nor a general equivariant Ext theorem.

## AA-SPEC-R001: public reconstruction with a different kernel embedding

Return after another strand, with your own earlier corrections available. This is a public reconstruction; no elapsed interval or independence is verified. Reconstruct every deliverable and declare model exposure.

AA-SPEC-R001-NATIVE
~~~json
{"case_id":"AA-SPEC-R001","a":3,"b":1,"r":1,"s":4,"u":2,"v":2,"characteristic":0}
~~~

**Required return work R1–R7.** Repeat P1–P7. Use the elementary map $T(v_0)=w_0$, zero on $v_1,v_2,v_3$. Explain why kernel and quotient are now one-dimensional coefficient spaces with very different representatives. Give the return extension's cyclic decomposition and equivariance obstruction. Compare the two-variable derived ring with both earlier cases and retain new actual code output and controls.

### Complete public model for R001

**R1.** Resolve by $t$ on free rank-four terms. Hom and tensor terms have dimension $(4\\cdot2)\\cdot4=32$; multiplication by $t$ has rank $8\\cdot3=24$. Hom and Tor degree one use coefficient kernel $\\mathbb Q t^3$, while Ext degree one and ordinary tensor use quotient basis $1$. All four spaces have dimension eight; higher groups vanish. A statement that the coefficient kernel is generated by 1 is incorrect here: $t\\cdot1=t\\ne0$ in $R_4$.

**R2.** The tensor and Hom multiplicity spaces decompose as $V_4\\oplus V_2$, with highest vectors $v_0w_0$ and $v_0w_1-v_1w_0$, Casimir values $24,8$, and descendant lengths $5,3$. Tensor the eight-vector basis with $t^3$ for the kernel and with the class of 1 for the quotient. Neither summand has invariants.

**R3.** Relations are $t^4n_j=0$, $te_0=n_0$, and $te_1=te_2=te_3=0$. Eliminating $n_0$ gives $E=R_5\\oplus R_4\\oplus R_1^3$, dimension twelve, $4+8$. The scalar relation parameter 1 is nonzero modulo $tR_4$, so the extension is nonsplit. Its elementary map has $h$-weight $1-3=-2$, hence its Ext class is not invariant; compatible lifted Lie actions are impossible for this class. It is not the changed identity construction with renamed symbols.

**R4.** The length-one free resolution and finite filtration again justify independence and bounded replacement. The degree-one derived group of dimension eight survives even though the tensor quotient's coefficient representative is simply 1. Formal localization turns the resolution augmentation into an isomorphism; it does not turn ordinary tensor into an exact functor.

**R5.** $A_{2,2}=\\mathbb Q[x,y]/(x^2,y^2)$ has basis $1,x,y,xy$. Maps $(-y^2,x^2)^T$ and $(x^2,y^2)$ give the proved resolution. Reduction gives zero differentials, so Tor and Ext dimensions are $4,8,4$. The Tor algebra is $A\\otimes\\Lambda(\\alpha,\\beta)$ with $x^2=y^2=0$ and $xy\\ne0$. Its degree-two basis is $\\alpha\\beta,x\\alpha\\beta,y\\alpha\\beta,xy\\alpha\\beta$. A finite monomial table describes this stipulated quotient; exactness over the polynomial ring came from the general argument before reduction.

**R6–R7.** Retain the third expected record and controls from an actual run. Compare each mistaken kernel representative, sign, highest weight or extension-invariance claim with the explicit proofs. Report arbitrary schemes, algebraic groups, general semisimple Lie classification, unbounded derived categories' triangulated axioms and specialist deformation/duality theories as further work with their own prerequisites; none is asserted solved by this portfolio. The required course has taught general constructions and proofs in the stated branches, not merely an orientation or a finite homology calculation.

## Required exact computation and bounded public reference

Use Node.js with BigInt support to run the following complete reference in a fresh file, followed by calls to \`eulerSpecialistAlgebra.audit(input)\` for each printed JSON input and \`eulerSpecialistAlgebra.controls()\`. Save exact outputs using \`JSON.stringify\`; every returned field is JSON-safe. The implementation requires no external package, network, learner store or random seed. You must retain the actual command, version and output, explain the basis ordering, inspect the code and compare with your hand derivation. A hand table alone does not satisfy this software obligation. A justified independent implementation may replace this reference only if it supports the same printed inputs, exact fields and failure controls.

The supported domain is characteristic zero, integer highest weights $0\\le a,b\\le3$, exponents $1\\le r,s\\le4$, and $1\\le u,v\\le2$. Tensor dimension is at most 16. BigInt arithmetic and primitive row normalization avoid floating-point tolerances. The algorithm computes actual tensor matrices and descendant-basis rank, and constructs the nilpotent multiplication matrix; it does not merely return the asserted tensor decomposition dimensions. Its Koszul record evaluates the displayed composite before quotienting and builds the quotient's explicit monomial list. These bounded checks do not prove all-input theorems.

AA-SPEC-REFERENCE
~~~js
(() => {
  const abs = x => x < 0n ? -x : x;
  function gcd(a, b) { a = abs(a); b = abs(b); while (b) [a, b] = [b, a % b]; return a; }
  const zero = (r, c) => Array.from({length:r}, () => Array(c).fill(0n));
  const ident = n => Array.from({length:n}, (_, i) => Array.from({length:n}, (_, j) => i === j ? 1n : 0n));
  function mm(A, B) { return A.map(row => B[0].map((_, j) => row.reduce((s, x, k) => s + x * B[k][j], 0n))); }
  const sub = (A, B) => A.map((row, i) => row.map((x, j) => x - B[i][j]));
  const scale = (A, k) => A.map(row => row.map(x => x * k));
  const equal = (A, B) => A.length === B.length && A.every((row, i) => row.length === B[i].length && row.every((x, j) => x === B[i][j]));
  const comm = (A, B) => sub(mm(A, B), mm(B, A));
  function rep(n) {
    const e = zero(n+1, n+1), f = zero(n+1, n+1), h = zero(n+1, n+1);
    for (let i = 0; i <= n; i++) {
      h[i][i] = BigInt(n-2*i);
      if (i) e[i-1][i] = BigInt(i);
      if (i < n) f[i+1][i] = BigInt(n-i);
    }
    return {e, f, h};
  }
  const relations = A => equal(comm(A.h,A.e),scale(A.e,2n)) && equal(comm(A.h,A.f),scale(A.f,-2n)) && equal(comm(A.e,A.f),A.h);
  function kron(A, B) {
    return A.flatMap(row => B.map(brow => row.flatMap(x => brow.map(y => x*y))));
  }
  const add = (A, B) => sub(A, scale(B,-1n));
  function tensor(A, B) {
    const I = ident(A.e.length), J = ident(B.e.length), out = {};
    for (const key of ['e','f','h']) out[key] = add(kron(A[key],J),kron(I,B[key]));
    return out;
  }
  const mv = (A, v) => A.map(row => row.reduce((s, x, j) => s+x*v[j],0n));
  function rank(A) {
    A = A.map(row => row.slice()); let r = 0;
    for (let c = 0; c < A[0].length && r < A.length; c++) {
      const p = A.findIndex((row, i) => i >= r && row[c] !== 0n);
      if (p < 0) continue;
      [A[p], A[r]] = [A[r], A[p]];
      for (let i = r+1; i < A.length; i++) if (A[i][c]) {
        const q = A[i][c], pivot = A[r][c];
        A[i] = A[i].map((x, j) => pivot*x-q*A[r][j]);
        const g = A[i].reduce((d, x) => gcd(d,x),0n);
        if (g) A[i] = A[i].map(x => x/g);
      }
      r++;
    }
    return r;
  }
  function binom(n, k) { let z = 1n; for (let i = 1; i <= k; i++) z = z*BigInt(n-i+1)/BigInt(i); return z; }
  function validate(c) {
    const keys = ['case_id','a','b','r','s','u','v','characteristic'];
    if (!c || typeof c !== 'object' || Array.isArray(c) || Object.keys(c).sort().join('|') !== keys.slice().sort().join('|')) throw new Error('input keys');
    if (typeof c.case_id !== 'string' || !/^AA-SPEC-[PCR]001$/.test(c.case_id)) throw new Error('case id');
    for (const key of keys.slice(1)) if (!Number.isSafeInteger(c[key])) throw new Error('integer input');
    if (c.characteristic !== 0) throw new Error('characteristic');
    if (c.a < 0 || c.a > 3 || c.b < 0 || c.b > 3 || c.r < 1 || c.r > 4 || c.s < 1 || c.s > 4 || c.u < 1 || c.u > 2 || c.v < 1 || c.v > 2) throw new Error('bounds');
  }
  function koszulComposite(u, v, secondSign = 1) {
    const x = 2n ** BigInt(u), y = 3n ** BigInt(v);
    return x*(-y) + y*BigInt(secondSign)*x;
  }
  function audit(c) {
    validate(c);
    const A = tensor(rep(c.a),rep(c.b)), dim = (c.a+1)*(c.b+1);
    if (!relations(A)) throw new Error('Lie relations');
    const columns = [], weights = [];
    for (let j = 0; j <= Math.min(c.a,c.b); j++) {
      const m = c.a+c.b-2*j; weights.push(m);
      let z = Array(dim).fill(0n);
      for (let i = 0; i <= j; i++) z[i*(c.b+1)+j-i] = (i%2 ? -1n : 1n)*binom(j,i);
      if (mv(A.e,z).some(x => x !== 0n) || mv(A.h,z).some((x,i) => x !== BigInt(m)*z[i])) throw new Error('highest vector');
      for (let k = 0; k <= m; k++) { columns.push(z); z = mv(A.f,z); }
      if (z.some(x => x !== 0n)) throw new Error('ladder endpoint');
    }
    const basisRank = rank(Array.from({length:dim},(_,i) => columns.map(col => col[i])));
    if (basisRank !== dim) throw new Error('incomplete basis');
    const T = zero(c.s,c.s);
    for (let i = 0; i+c.r < c.s; i++) T[i+c.r][i] = 1n;
    const tRank = rank(T), multiplicity = c.s-tRank;
    const monomials = [];
    for (let i = 0; i < c.u; i++) for (let j = 0; j < c.v; j++) monomials.push([i,j]);
    const z = koszulComposite(c.u,c.v);
    if (z !== 0n || koszulComposite(c.u,c.v,-1) === 0n) throw new Error('Koszul sign');
    return {case_id:c.case_id,tensor_dim:dim,highest_weights:weights,casimir:weights.map(m => m*(m+2)),basis_rank:basisRank,t_rank:tRank,kernel_exponents:Array.from({length:multiplicity},(_,i) => c.s-multiplicity+i),quotient_exponents:Array.from({length:multiplicity},(_,i) => i),derived_dimensions:[dim*multiplicity,dim*multiplicity],koszul_monomials:monomials,koszul_dimensions:[monomials.length,2*monomials.length,monomials.length],koszul_composite:String(z)};
  }
  function checkMatrices(A) {
    if (!A || typeof A !== 'object' || Array.isArray(A) || Object.keys(A).sort().join('|') !== 'e|f|h' || !Array.isArray(A.e)) throw new Error('matrix keys');
    const n = A.e.length;
    if (n < 1 || n > 16) throw new Error('matrix dimension');
    const B = {};
    for (const key of ['e','f','h']) {
      if (!Array.isArray(A[key]) || A[key].length !== n) throw new Error('matrix rows');
      for (let i = 0; i < n; i++) {
        if (!Object.hasOwn(A[key],i) || !Array.isArray(A[key][i]) || A[key][i].length !== n) throw new Error('matrix row');
        for (let j = 0; j < n; j++) {
          const x = A[key][i][j];
          if (!Object.hasOwn(A[key][i],j) || !Number.isSafeInteger(x) || Math.abs(x) > 1000000) throw new Error('matrix entries');
        }
      }
      B[key] = A[key].map(row => row.map(BigInt));
    }
    return relations(B);
  }
  function controls() {
    const c = {case_id:'AA-SPEC-P001',a:2,b:1,r:2,s:3,u:1,v:1,characteristic:0}, out = [];
    for (const [name, edit] of [['positive-characteristic',{characteristic:2}],['exponent-bound',{s:5}],['weight-bound',{a:4}],['noninteger',{r:1.5}],['extra-key',{url:'https://example.invalid/'}]]) {
      let refused = false; try { audit({...c,...edit}); } catch { refused = true; }
      if (!refused) throw new Error('missing refusal '+name); out.push(name);
    }
    const bad = rep(1); bad.e[0][1] = 2n;
    if (relations(bad)) throw new Error('bad bracket accepted'); out.push('bad-bracket');
    if (koszulComposite(1,1,-1) === 0n) throw new Error('bad sign accepted'); out.push('bad-Koszul-sign');
    const plain = n => Object.fromEntries(Object.entries(rep(n)).map(([key,A]) => [key,A.map(row => row.map(Number))]));
    for (const [name, change] of [
      ['malformed-matrix', A => { A.h[0].push(0); }],
      ['noninteger-matrix', A => { A.e[0][1] = 0.5; }],
      ['sparse-matrix', A => { delete A.e[0][1]; }],
      ['zero-dimension', A => { A.e = A.f = A.h = []; }],
      ['oversize-matrix', A => { A.e = A.f = A.h = Array.from({length:17}, () => Array(17).fill(0)); }]
    ]) {
      const A = plain(1); change(A); let refused = false;
      try { checkMatrices(A); } catch { refused = true; }
      if (!refused) throw new Error('missing matrix refusal '+name); out.push(name);
    }
    if (!checkMatrices(plain(1))) throw new Error('valid matrices refused');
    return out;
  }
  globalThis.eulerSpecialistAlgebra = {audit,controls,checkMatrices};
})();
~~~

The output fields \`derived_dimensions\` give $(H_0,H_1)$ for tensor and also the dimensions of $(\\operatorname{Hom},\\operatorname{Ext}^1)$; they do not identify their basis embeddings. \`t_rank\` is the coefficient matrix rank, before multiplying by the Lie tensor dimension. The expected complete records are:

~~~json
[{"case_id":"AA-SPEC-P001","tensor_dim":6,"highest_weights":[3,1],"casimir":[15,3],"basis_rank":6,"t_rank":1,"kernel_exponents":[1,2],"quotient_exponents":[0,1],"derived_dimensions":[12,12],"koszul_monomials":[[0,0]],"koszul_dimensions":[1,2,1],"koszul_composite":"0"},{"case_id":"AA-SPEC-C001","tensor_dim":9,"highest_weights":[4,2,0],"casimir":[24,8,0],"basis_rank":9,"t_rank":0,"kernel_exponents":[0],"quotient_exponents":[0],"derived_dimensions":[9,9],"koszul_monomials":[[0,0],[1,0]],"koszul_dimensions":[2,4,2],"koszul_composite":"0"},{"case_id":"AA-SPEC-R001","tensor_dim":8,"highest_weights":[4,2],"casimir":[24,8],"basis_rank":8,"t_rank":3,"kernel_exponents":[3],"quotient_exponents":[0],"derived_dimensions":[8,8],"koszul_monomials":[[0,0],[0,1],[1,0],[1,1]],"koszul_dimensions":[4,8,4],"koszul_composite":"0"}]
~~~

Controls must return \`["positive-characteristic","exponent-bound","weight-bound","noninteger","extra-key","bad-bracket","bad-Koszul-sign","malformed-matrix","noninteger-matrix","sparse-matrix","zero-dimension","oversize-matrix"]\`. The public \`checkMatrices\` validator accepts exactly three square integer matrices with dimension 1–16 and entries of magnitude at most 1,000,000; it rejects malformed, sparse, fractional, empty and oversized inputs before checking brackets. A correctly sized all-zero triple is a valid trivial representation and is accepted. The extra-key refusal is input discipline, not URL trust or import functionality. The bad bracket uses $e_{01}=2$ in $V_1$ and violates $[e,f]=h$. The incorrect Koszul sign gives a nonzero composite at $(x,y)=(2,3)$ before quotienting; such a witness disproves a polynomial identity, while the valid identity was proved symbolically above. Finite outputs cannot certify arbitrary exactness, equivalence of categories, a general theorem or a learner's reconstruction.

## Public review rubric, repair and continuation

For each of P001, C001 and R001 use the same seven independent criteria, each 0–2: (1) exact resolution, kernel/quotient bases and dimensions; (2) highest vectors, relations and complete decomposition basis; (3) extension presentation, splitting and correct equivariance boundary; (4) comparison and bounded invariance proof with hypotheses; (5) Koszul exactness and higher groups/multiplication; (6) actual exact output and all refusal/mutation controls; (7) mathematical boundaries, provenance and record of help. Award 2 for a complete justified response, 1 for a correct conclusion with a specified missing argument, and 0 for an absent or invalid response. The public model supports a 14-point self-review per portfolio, not a grade or mastery threshold. H1–H4 and L1–L4 require all parts, with their complete keys above, and have no separately invented numerical score.

Repair a kernel/quotient confusion with H4 and the coefficient bases; repair a zero-composite claim with H3 before reduction; repair a false quasi-isomorphism inverse with D4 and the cone argument. For an unsupported derived invariance claim, identify the finite filtration and termwise projectivity/flatness. Repair a Lie decomposition based only on dimensions with L3 and explicit descendant bases; repair a field error with L1. For an equivariant Ext conflation, repeat L4 and compare the primary elementary map's nonzero weight with the changed identity presentation. A missing actual software record requires a fresh supported run, not a declaration that hand arithmetic waived the task. Preserve the first response, record the comparison used and revise the specific gap; there is no automatic immutable worksheet history promised here.

The next steps include general semisimple Lie algebras and algebraic groups, spectral sequences, deformation theory and duality, with their own exact prerequisites and proofs. Our general constructions, explicit rational Lie sequence and complete higher-derived models are substantive specialist teaching within the advertised homological/derived and Lie/representation branches. They do not qualify whole reference books or settle every specialist algebra programme.

## Sources, provenance, rights and mathematical boundaries

The existing Euler sources linked in S1–S4 and the advanced prerequisite are reused at their native identities and key locations; no existing source, exercise, solution, learner record or history is replaced by this course. The local teaching, tasks, models and JavaScript here are newly authored reconstructions under the stated CC BY-SA 4.0 course license, continuing the native sources' attribution and share-alike notice. There are no copied external figures, downloaded editions or new PDF exports. The retained native book edition and its publication status remain separate.

For primary technical references and further comparison, the [Stacks Project's projective-resolution section](https://stacks.math.columbia.edu/tag/0643) records the bounded-projective comparison results, and its [cones and termwise split sequences](https://stacks.math.columbia.edu/tag/014D) gives cochain conventions. We supply chain conventions and proofs for the stated results here. The [MIT 2019 seminar's sl2 discussion](https://math.mit.edu/~rud/592-siegel/talk3.html) is a comparison reference for the characteristic-zero highest-weight setting, not a substitute for our explicit irreducibility, rational construction and tensor-basis proofs. These links establish provenance and routes to additional theory; no long quotation or imported main proof is represented as supplied locally.

Imported Freyd–Mitchell in native S2 and the derived category's full triangulated theorem in S4 remain explicit imported results. General PBW, general complete reducibility, general invariant-extension equivalence, global-dimension theorems for arbitrary rings and regular-local-ring classification are neither silently invoked nor claimed proved. There is no open-result claim settled by the code, and no experimental performance, human review or learner observation is fabricated. All computation records printed above are exact reference targets for the supplied finite inputs, to be tested against an actual run.
`;export{e as default};