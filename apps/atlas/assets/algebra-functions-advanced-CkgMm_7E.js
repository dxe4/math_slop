var e=`---
id: course-algebra-functions-advanced
title: "Functions, Structure, and Sharp Inequalities"
level: advanced-undergraduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Functions, Structure, and Sharp Inequalities

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-algebra-functions-advanced/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Real analysis](/courses/course-lucent-analysis/) · [Abstract algebra I](/courses/atlas-abstract-algebra-proof/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A functional equation can preserve a group operation, forget a period, or constrain a function without determining it. An inequality certifies a best possible answer only when its hypotheses and equality cases survive the calculation. This course joins real functional equations, substantial inequality proofs and bridges to algebraic structure, with complete primary, changed and later-return portfolios.

The study time depends on the selected reading, attempts and corrections. Earlier source estimates retain their own scope and are not summed into a course total. These are public self-study tasks and models, not grades, verified independent work or whole-book qualification.

## Route and prerequisites

Bring real algebra, signed inequalities, typed functions, quantifiers, induction, rational density and continuity at a point. Use [Algebra and Functions](#/item/course-algebra-functions-standard) and [Proof Foundations](#/item/course-proof-foundations) for repair. The assigned group module's Transfer 3 also needs square-matrix products, identity/inverse matrices and the group of invertible matrices. Read [Linear Algebra as Transformation](#/item/course-linear-transformations), Lessons 3–4, for maps and products; complete the local matrix-group repair below for identity, two-sided inverses and the group laws before that task. Trigonometric examples use radians and the real sine/cosine addition laws, without complex numbers.

Two analytic inputs are explicit prerequisites: differentiation at zero and uniqueness for \\(y'=cy,\\ y(0)=1\\) before the source exponential project; and \\((\\ln u)'=1/u\\) on \\(u>0\\) plus the mean value theorem before the logarithmic inequality below. The latter theorem requires continuity on a closed interval and differentiability inside it. These inputs are not consequences of an algebraic equation.

Attempt each task before consulting its complete key. Reuse prior work on an exact assignment with its source/help record, rather than inventing a new unseen attempt.

| Order | Required source selection and work | Complete key and stopping point |
| --- | --- | --- |
| A. Functional equations | [Functions and Equations](#/item/book-functions-equations-proof), overview §9 “A translation equation” and “Cauchy's additive equation with regularity”; **Exercises 8, 9 and 10** | Overview **Solutions 8, 9 and 10**: arbitrary period-2 seeds; strict-increase injectivity with a surjectivity counterexample; continuous additive calibration f(1)=3 |
| B. Group language | [Groups from definitions](#/item/course-abstract-algebra-proof?chapter=groups-from-definitions), definitions/subgroup proof and **Guided practice 1–4**; [Homomorphisms and quotients](#/item/course-abstract-algebra-proof?chapter=homomorphisms-and-quotients), representative-independence/isomorphism proofs and **Guided practice 1–4** | Each matching Starter/Core/Transfer/Proof audit has adjacent **Reasoning**. Retain operations, kernel, normality, representatives and image-versus-codomain |
| C. Local regularity | [Project: Prove a New Result](#/item/book-functions-equations-proof?chapter=project-prove-a-new-result), only **“A worked illustration: Topic A”**, Statement through Reflection; reconstruct its proof | Its complete **Proof, Example and Boundary analysis**. This exponential variant is required. The suggested d'Alembert, Lyapunov and Catalan projects are optional and have no supplied complete project keys here |
| D. Analytic/domain repair | [Exponential and Logarithmic Functions](#/item/book-functions-equations-proof?chapter=exponential-and-logarithmic-functions), algebraic properties, inverse/log laws and domain obligations. [Continuity and Differentiation](#/item/book-proof-safe-real-analysis?chapter=continuity-differentiation), §§6–7 and **ANA-CH10-E003** | The log-product proof and domain examples; Rolle/MVT proofs and consequences; **ANA-CH10-E003 — Worked answer** for endpoint failure |
| E. Connected course work | All four teaching sections below, **AF-ADV-EX01–EX12**, then all six deliverables in each **AF-ADV-P001/P002/R001** | Twelve local full solutions; general proofs/equality cases; three complete six-part cumulative models and the final repair map |

### Local matrix-group repair for Guided Transfer 3

Fix one field \\(F\\) and one integer \\(n\\ge1\\). An \\(n\\times n\\) matrix represents a map \\(F^n\\to F^n\\); \\(AB\\) applies \\(B\\) first. The identity matrix \\(I_n=(\\delta_{ij})\\), with \\(\\delta_{ii}=1\\) and other entries zero, represents \\(x\\mapsto x\\). Hence \\(I_nA=AI_n=A\\). Matrix multiplication is associative: from \\((AB)_{ij}=\\sum_k a_{ik}b_{kj}\\), both \\(((AB)C)_{ij}\\) and \\((A(BC))_{ij}\\) equal \\(\\sum_{k,\\ell}a_{i\\ell}b_{\\ell k}c_{kj}\\), by finite distributive sums.

An inverse of \\(A\\) is an \\(n\\times n\\) matrix \\(X\\) satisfying **both** \\(AX=XA=I_n\\). It is unique: if \\(X,Y\\) both invert \\(A\\), then \\(X=X(AY)=(XA)Y=Y\\). Write it \\(A^{-1}\\). The two identities also say that the corresponding maps undo one another. Define \\(GL_n(F)\\) to be the invertible \\(n\\times n\\) matrices. It contains \\(I_n\\), whose inverse is itself; if \\(A\\in GL_n(F)\\), then \\(A^{-1}\\in GL_n(F)\\) with inverse \\(A\\). For \\(A,B\\in GL_n(F)\\),
\\[
(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=I_n,\\qquad
(B^{-1}A^{-1})(AB)=B^{-1}(A^{-1}A)B=I_n.
\\]
Thus \\(AB\\in GL_n(F)\\) and \\((AB)^{-1}=B^{-1}A^{-1}\\). Closure, associativity, identity and inverses now prove the group assertion needed in Transfer 3. Every product uses this same field and dimension. Rectangular matrices of different shapes do not form this group: \\(R=(1,0)\\) and \\(C=(1,0)^T\\) have \\(RC=I_1\\) but \\(CR=\\operatorname{diag}(1,0)\\ne I_2\\).

**Check before Transfer 3, with full feedback.** Over \\(\\mathbb R\\), take
\\[
A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix},\\qquad
B=\\begin{pmatrix}2&0\\\\0&1\\end{pmatrix}.
\\]
Find their inverses and the inverse of their product, then verify both inverse equations. The complete answer is
\\[
A^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix},\\quad
B^{-1}=\\begin{pmatrix}1/2&0\\\\0&1\\end{pmatrix},\\quad
AB=\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix},\\quad
(AB)^{-1}=\\begin{pmatrix}1/2&-1/2\\\\0&1\\end{pmatrix}.
\\]
Direct multiplication gives identity on both sides. Reversing the required inverse order gives \\((AB)(A^{-1}B^{-1})=\\left(\\begin{smallmatrix}1&-1\\\\0&1\\end{smallmatrix}\\right)\\ne I_2\\). Repair an order error by writing the two cancellation chains above; repair a dimension error by naming each map's domain and codomain before multiplying. The numeric example uses the real field; the preceding group proof applies to any fixed field.

## Structural functions and quotient information

A homomorphism preserves specified operations. For additive groups it obeys \\(L(x+y)=L(x)+L(y)\\); from an additive group to a multiplicative group it obeys \\(E(x+y)=E(x)E(y)\\). Positive reals form a group under multiplication. All reals under multiplication do not: zero has no inverse.

For \\(h>0\\), \\(h\\mathbb Z=\\{nh:n\\in\\mathbb Z\\}\\) is an additive subgroup. Put \\(x\\sim y\\) when \\(x-y\\in h\\mathbb Z\\). Reflexivity uses zero, symmetry negation and transitivity subgroup addition. The quotient class \\([x]_h\\) has no preferred real representative. Define
\\[
[x]_h+[y]_h=[x+y]_h.
\\]
Changing representatives to \\(x+mh,y+nh\\) changes their sum by \\((m+n)h\\), proving independence. Identity is \\([0]_h\\), inverse is \\([-x]_h\\); associativity and commutativity descend from R. The projection \\(q_h:\\mathbb R\\to\\mathbb R/h\\mathbb Z\\) is an onto homomorphism with kernel \\(h\\mathbb Z\\).

**Periodic factorization theorem.** A map \\(p:\\mathbb R\\to\\mathbb R\\) obeys \\(p(x+h)=p(x)\\) for all x exactly when a unique map \\(\\bar p:\\mathbb R/h\\mathbb Z\\to\\mathbb R\\) satisfies \\(p=\\bar p\\circ q_h\\). Forward iteration and the equation at x-h give p(x+nh)=p(x) for every integer n. Thus \\(\\bar p([x]_h)=p(x)\\) is independent of representatives. Conversely q_h(x+h)=q_h(x) gives periodicity. Since q_h is onto, its factor map is unique.

This is factorization as sets and maps; it does not make \\(\\bar p\\) a homomorphism. For example \\(p(x)=\\cos(2\\pi x/h)\\) is periodic but p(0)=1, whereas an additive map must send 0 to 0. Even p(0)=0 is insufficient: \\(-1+\\cos(2\\pi x/h)\\) has values -1 at h/4 and 3h/4 but value 0 at their sum h.

**Translation classification.** For fixed \\(h>0,d\\in\\mathbb R\\), all solutions of
\\[
f(x+h)=f(x)+d\\quad(x\\in\\mathbb R)
\\]
are exactly \\(f(x)=(d/h)x+p(x)\\) with arbitrary h-periodic p. Subtracting (d/h)x from any solution proves necessity; substituting any such p proves sufficiency. No continuity is needed. Choose arbitrary seed values on [0,h) and repeat using the unique decomposition x=nh+r, 0≤r<h. Continuity, if required, adds compatibility at the seam. The given h is a period, not necessarily the least positive period. The residual p factors through q_h; f itself cannot when d≠0, since its value changes by d on one class.

For an additive L:R→R, \\(K=\\ker L\\) is a subgroup. The induced map
\\[
\\widetilde L:\\mathbb R/K\\to\\operatorname{im}L,\\qquad [x]\\mapsto L(x)
\\]
is well-defined because x-y∈K implies L(x)=L(y); the converse proves injectivity. It preserves addition and is onto the image by definition. This proves the first-isomorphism assertion here. Surjectivity onto the declared codomain R would be a separate claim.

## Continuity and exponential classification

The source proof gives L(x)=cx for additive L continuous at zero: prove integer/rational homogeneity first, then choose rationals r_n→x and use L(x)-L(r_n)=L(x-r_n)→0. For c≠0 the kernel is {0}, image R, and the induced map is an isomorphism. For c=0 the kernel is R, image {0}, and the quotient has one element. A continuous additive map with a nonzero period h must therefore be zero, since ch=L(h)=0. A general periodic function need not be additive or zero.

**Real multiplicative equation, including its zero branch.** Let F:R→R be continuous at zero with F(x+y)=F(x)F(y) for all x,y. Since F(0)²=F(0), either F(0)=0, forcing F(x)=F(x)F(0)=0 everywhere, or F(0)=1. In the latter branch F(x)=F(x/2)²≥0 and F(x)F(-x)=1 rules out zero. Thus F>0. The function A=ln F is additive by the log-product law and continuous at zero, since F→1 and ln is continuous at 1. Hence A(x)=cx, so F(x)=exp(cx). Conversely the zero function and every exp(cx) verify both hypotheses. Only the positive branch maps into the multiplicative group (0,infinity).

The source worked Topic A takes differentiability at zero, F(0)=1 and c=F'(0). The identity
\\[
\\frac{F(x+t)-F(x)}t=F(x)\\frac{F(t)-1}t
\\]
propagates differentiability to every x, giving F'=cF; the stated ODE uniqueness theorem gives exp(cx). Reconstruct that complete source proof and compare its analytic input with the logarithm/continuity proof here. The source's all-real pathological boundary is an axiom-of-choice existence statement, not a required construction supplied by this course.

## Inequalities from exact identities

For \\(a,b\\in\\mathbb R^n,\\ n\\ge1\\), expansion gives Lagrange's identity:
\\[
\\left(\\sum_i a_i^2\\right)\\left(\\sum_i b_i^2\\right)
-\\left(\\sum_i a_ib_i\\right)^2
=\\sum_{i<j}(a_ib_j-a_jb_i)^2.
\\]
Diagonal terms cancel. Each unordered pair i,j contributes \\(a_i^2b_j^2+a_j^2b_i^2-2a_ia_jb_ib_j\\) on both sides. Nonnegative squares prove **Cauchy–Schwarz**. Equality forces every minor zero. If b≠0, select b_k≠0; a_i b_k=a_k b_i gives a=(a_k/b_k)b. If b=0 equality holds for every a. Thus equality is linear dependence, including either zero vector, without a positivity assumption.

For \\(w_i>0,\\ W=\\sum_iw_i\\) and arbitrary real v_i, apply Cauchy–Schwarz to v_i/sqrt(w_i) and sqrt(w_i):
\\[
E=\\sum_i v_i^2/w_i\\ \\ge\\ S^2/W,\\qquad S=\\sum_i v_i.
\\]
Equality is exactly v_i=t w_i for one real t. A negative S is allowed. Under the sum constraint, expansion gives the exact remainder
\\[
\\sum_i\\frac{(v_i-(S/W)w_i)^2}{w_i}=E-S^2/W.
\\]
The cross term uses sum v_i=S and the last term sum w_i=W. Consequently the unique minimizer is v_i=(S/W)w_i. Additional constraints require rechecking attainment.

Zero weights make quotients undefined. For w=(1,-1),v=(1,0), W=0,S=1,E=1: S²/W is undefined, and the undivided claim S²≤WE would be the false 1≤0. The proof used positive square roots and a positive W; it does not extend to arbitrary signed weights.

**Euclidean triangle inequality.** With ||a||=sqrt(sum a_i²),
\\[
\\|a+b\\|^2=\\|a\\|^2+2a\\cdot b+\\|b\\|^2
\\le(\\|a\\|+\\|b\\|)^2
\\]
by Cauchy–Schwarz. Taking nonnegative square roots proves the claim. Equality requires a dot b=||a||||b||: either one vector is zero, or both are positive scalar multiples. Opposite directions satisfy Cauchy–Schwarz equality but not this signed-dot equality.

## Convexity and changes of scale

For u>0 put H(u)=u-1-ln u. Its derivative is (u-1)/u. H is continuous on each closed positive segment and differentiable in its interior. The mean value theorem proves strict decrease toward 1 on the left and strict increase on the right. Therefore
\\[
\\ln u\\le u-1,\\qquad\\text{equality exactly when }u=1.
\\]
We used the stated logarithm derivative and MVT with their domain hypotheses.

Let r,s>0, 0≤t≤1 and m=(1-t)r+ts>0. Apply this inequality to r/m and s/m and weight the two results:
\\[
(1-t)\\ln(r/m)+t\\ln(s/m)
\\le(1-t)(r/m-1)+t(s/m-1)=0.
\\]
Log laws and the increasing exponential yield **weighted AM–GM**:
\\[
r^{1-t}s^t\\le(1-t)r+ts.
\\]
For 0<t<1, equality in the positive weighted sum forces r/m=s/m=1, equivalent to r=s; the converse holds. At t=0 or 1 equality holds for all positive r,s. Positive inputs avoid zero-power conventions. Outside the weight interval the assertion can fail: r=1,s=4,t=2 gives geometric value 16 but affine value 7.

A real function phi on an interval I is **convex** when
\\[
\\phi((1-t)x+ty)\\le(1-t)\\phi(x)+t\\phi(y)
\\]
for x,y∈I and 0≤t≤1. Strict convexity means strict inequality for x≠y and 0<t<1. For nonnegative weights lambda_i summing to 1, **finite Jensen** follows by induction: omit zero weights; combine the first n-1 inputs into their weighted mean using their positive total, apply two-point convexity with the last input, then induction inside the first block. The one-input case is equality.

For strictly convex phi, equality holds exactly when all positive-weight inputs coincide. If they differ, split off one smallest input of positive weight. The weighted mean of the remaining inputs is strictly greater, so the two-point step is strict, even after the nonstrict induction step. Zero-weight inputs are irrelevant.

For phi(x)=x² the complete algebraic certificate is
\\[
\\sum_i\\lambda_i x_i^2-\\left(\\sum_i\\lambda_ix_i\\right)^2
=\\sum_{i<j}\\lambda_i\\lambda_j(x_i-x_j)^2.
\\]
Use sum lambda_i=1, expand the square and group the two off-diagonal terms for each pair to prove the identity. It proves Jensen and its equality case directly. With phi=-x², x=-1,1 and equal weights, the proposed convex inequality would falsely say 0≤-1.

An additive homomorphism preserves sums exactly. Convexity bounds weighted averages and usually leaves a positive gap. Periodic factorization preserves equivalence classes, not ordered magnitudes. These are different structural claims.

## Required proof practice and full solutions

Attempt all twelve questions, including hypotheses and equality audits.

1. **AF-ADV-EX01.** Prove quotient addition is independent of representatives; find kernel/image of q_h. Does choosing [0,h) make q_h injective on all R?
2. **AF-ADV-EX02.** Classify f(x+2)=f(x)+6; give a continuous non-affine example and identify the function that descends to R/2Z.
3. **AF-ADV-EX03.** Classify continuous additive L with L(2)=6, including kernel/image. Can it also satisfy L(x+2)=L(x)?
4. **AF-ADV-EX04.** Classify continuous-at-zero real F satisfying the multiplicative equation, including the zero branch and its codomain issue.
5. **AF-ADV-EX05.** Prove Lagrange/Cauchy–Schwarz with all equality cases; check a=(1,-2),b=(2,1), and b=0.
6. **AF-ADV-EX06.** Minimize v1²+v2²/3 for real v1+v2=4; prove uniqueness. Was variable positivity necessary?
7. **AF-ADV-EX07.** Audit signed weights w=(1,-1),v=(1,0), distinguishing undefined division from a false undivided assertion.
8. **AF-ADV-EX08.** Prove ln u≤u-1, with analytic hypotheses and equality. Why is u=-1 not a counterexample?
9. **AF-ADV-EX09.** Prove weighted AM–GM, including endpoint equality; audit (r,s,t)=(1,4,2).
10. **AF-ADV-EX10.** Prove finite Jensen and its square-function certificate. Analyze weights (1,0),inputs (2,9).
11. **AF-ADV-EX11.** Prove the triangle inequality and all equality cases; test a=(1,0),b=(-1,0).
12. **AF-ADV-EX12.** Give separate counterexamples to periodic⇒additive, p(0)=0⇒additive, strictly increasing R→R⇒onto, and Jensen for every phi.

### Full local solutions

**EX01.** Changing representatives adds integer multiples of h; their sum remains in hZ. The class of zero and negation supply identity/inverses, and q_h preserves addition. Its kernel is hZ and it is onto all classes. q_h(0)=q_h(h), so it is not injective on R. Restriction to [0,h) is a bijection of sets onto the quotient, but that interval is not a subgroup under ordinary addition.

**EX02.** Subtract 3x: every solution has f=3x+p with period-2 p, and every such p works by substitution. For p=2cos(pi x), f is continuous and non-affine; f(0)=2 prevents additivity. p descends; f does not, since it changes by 6 within each quotient class.

**EX03.** Continuity/additivity give L=cx; L(2)=6 forces c=3, kernel {0},image R. The additional period would force L(2)=0, a contradiction. Without the calibration 6, a continuous additive period-2 map is zero, kernel R,image {0}.

**EX04.** F(0) is 0 or 1. The first case forces F=0. In the second, F(x)=F(x/2)² and F(x)F(-x)=1 imply positivity; ln F is additive/continuous at zero, so F=exp(cx). Substitution verifies both families. The zero function has outputs outside (0,infinity); it is not a homomorphism into that group. The source worked project takes F(0)=1 and deliberately excludes it.

**EX05.** Expanding the two products and collecting pairs gives the squared-minor identity above. A zero sum of nonnegative squares makes all minors zero. A nonzero b-coordinate yields a=cb; b=0 is automatic equality. In the stated example the dot is 0, both squared norms are 5, and the minor is 1*1-(-2)*2=5, giving strict gap 25.

**EX06.** W=4,S=4, so the minimum is S²/W=4. Its remainder is (v1-1)²+(v2-3)²/3, uniquely zero at (1,3). Signed variables were permitted; positive weights supply nonnegativity. An extra constraint excluding (1,3) would preserve the lower bound but require a new attainment argument.

**EX07.** W=0,S=1,E=1, so S²/W is undefined. The undivided S²≤WE says 1≤0 and fails. The original division by W and square-root substitution required positivity. A missing hypothesis is not repaired by retaining the same notation.

**EX08.** H'= (u-1)/u on u>0. On positive closed segments the MVT makes H decrease to H(1)=0 and increase afterward, strictly away from 1. Thus H≥0 with equality only at 1. For u=-1 the real log is undefined. Check source ANA-CH10-E003 before omitting endpoint continuity in a derivative-sign argument.

**EX09.** With m>0, the two logarithmic inequalities above sum to at most zero; log laws and exponentiation give AM–GM. Interior equality forces both ratios r/m,s/m to be 1, equivalently r=s. At endpoint weights the surviving term is already equality. At (1,4,2), affine 7 is less than geometric 16; a negative weighting cannot preserve the positive-weight proof.

**EX10.** Omit zero weights, split off one input, normalize the rest and apply two-point convexity and induction. For strictness, split off a smallest positive-weight input if values differ. For x², expansion and sum lambda=1 give the pairwise identity. With (1,0),(2,9), phi(mean)=4 and the weighted second moment is 4: the unused 9 need not coincide with 2.

**EX11.** Expand ||a+b||², use a dot b≤||a||||b|| and take nonnegative roots. Equality requires one zero vector or the same nonzero direction. For (1,0),(-1,0), the two sides are 0 and 2, although Cauchy–Schwarz itself has equality. Its signed upper-dot step is strict.

**EX12.** cos(2pi x/h) is periodic with p(0)=1. The function -1+cos(2pi x/h) has p(0)=0, but p(h/4)+p(3h/4)=-2≠p(h). exp(x) is strictly increasing R→R but misses all nonpositive outputs, as in source Exercise 9. For phi=-x² at equally weighted -1,1, phi(mean)=0 exceeds mean(phi)=-1. Each addresses a different invalid inference.

## AF-ADV-P001 — Drift, structure and a sharp energy bound

These are authored mathematical instances, not measured calibration records. For each form define
\\[
\\sigma=d/h,\\quad p(x)=A+B\\cos(2\\pi x/h)+C\\sin(2\\pi x/h),\\quad f(x)=\\sigma x+p(x).
\\]
The vectors w,v and positive r,s define the inequality calculation.

| Form | h | d | A | B | C | w | v | r | s | t |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AF-ADV-P001 | 2 | 6 | 0 | 2 | 0 | 1,2,3 | 2,-1,3 | 4 | 9 | 1/2 |
| AF-ADV-P002 | 3 | -6 | 1 | 0 | 1 | 2,1,3 | -1,2,1 | 1 | 16 | 1/2 |
| AF-ADV-R001 | 4 | 0 | -1 | 1 | 0 | 1,3,2 | -1,-3,-2 | 9 | 9 | 1/3 |

For **each form** submit all six deliverables:

1. Classify the all-real translation equation with this h,d, prove necessity/converse, verify the supplied formula for every real x and compute its five quarter-period values.
2. Construct the quotient and descended residual; decide additivity using witnesses. Classify continuous additive g with g(h)=d and positive E=exp(sigma x), giving kernels/images. Reconstruct the source differentiability/ODE proof and its distinction from the zero branch.
3. Prove the general positive-weight bound and exact remainder; calculate W,S,E,gap and the unique minimizer under sum S, preserving signed-variable/equality cases.
4. Prove weighted AM–GM with full domain/equality cases; compute this affine/geometric value; include endpoint-weight and outside-weight repairs.
5. Use lambda_i=w_i/W,x_i=v_i/w_i to calculate mean, second moment and Jensen gap. Prove the general pairwise identity and relate its gap to deliverable 3. Distinguish convexity from additivity.
6. Retain first/comparison/revised proofs and repair one quotient claim, one removed inequality hypothesis and one table-versus-universal inference. Include EX11's general triangle proof and equality audit; finite samples cannot replace it.

### Primary complete model

**1.** sigma=3,p=2cos(pi x). The cosine period gives p(x+2)=p(x), hence f(x+2)=f(x)+6. Conversely subtract 3x from any solution to obtain an arbitrary period-2 residual. This cosine is only one member of that complete class.

| Form | x | p(x) | f(x) |
| --- | --- | --- | --- |
| AF-ADV-P001 | 0 | 2 | 2 |
| AF-ADV-P001 | 1/2 | 0 | 3/2 |
| AF-ADV-P001 | 1 | -2 | 1 |
| AF-ADV-P001 | 3/2 | 0 | 9/2 |
| AF-ADV-P001 | 2 | 2 | 8 |

**2.** R/2Z addition is independent of representatives by the subgroup calculation. p descends, while f does not because its increment is 6. Each has value 2 at zero and is not additive. g=3x has kernel {0},image R. E=exp(3x) is an isomorphism from (R,+) to positive multiplication, kernel {0}, inverse ln/3; its derivative at zero is 3. The source proof applies with E(0)=1. The zero solution of the real equation is not in that group codomain.

**3.** E=4+1/2+3=15/2, W=6,S=4. Completing weighted squares proves the sharp bound and unique minimizer:

| Form | W | S | Energy E | Minimum | Energy gap | Minimizing v* |
| --- | --- | --- | --- | --- | --- | --- |
| AF-ADV-P001 | 6 | 4 | 15/2 | 8/3 | 29/6 | 2/3,4/3,2 |

The given ratios 2,-1/2,1 are not the common 2/3 needed for equality.

**4.** The affine value is 13/2 and geometric value sqrt(36)=6, with strict gap 1/2. The inputs 4 and 9 differ and t is interior. The log proof has positive r,s,m. Endpoint weights would instead give equality. The separate (1,4,2) example gives 16>7 outside the hypothesis.

**5.** lambda=(1/6,1/3,1/2),x=(2,-1/2,1),mean=2/3,second moment=5/4,gap=29/36. The identity proves positivity, and (energy gap)/W=(29/6)/6 agrees. Squaring does not preserve addition: (1+1)²=4≠1²+1².

**6.** [0]=[2], so the raw-representative formula x is not a well-defined real-valued quotient map; periodic p is. EX07's negative weights violate the square-root/division premises and yield a false undivided claim. Five matching samples cannot prove periodicity of an arbitrary function: the trigonometric formula verifies it here. Retain the general square-sum and triangle proofs/equality audit, then record the altered line and downstream repairs.

## AF-ADV-P002 — Changed sign, period and weights

Attempt all six deliverables from the P002 row before reading its model. Period, drift, residual, weight placement, signed vector and AM–GM inputs change.

### Changed complete model

**1.** sigma=-2,p=1+sin(2pi x/3),f=-2x+p. The sine period verifies increment -6; subtracting -2x from any solution gives the full arbitrary period-3 residual class.

| Form | x | p(x) | f(x) |
| --- | --- | --- | --- |
| AF-ADV-P002 | 0 | 1 | 1 |
| AF-ADV-P002 | 3/4 | 2 | 1/2 |
| AF-ADV-P002 | 3/2 | 1 | -2 |
| AF-ADV-P002 | 9/4 | 0 | -9/2 |
| AF-ADV-P002 | 3 | 1 | -5 |

**2.** p descends through q_3; f does not, since its increment is nonzero. Each is 1 at zero, excluding additivity. g=-2x has kernel {0},image R; a negative slope still gives an additive isomorphism. E=exp(-2x) is decreasing but positive/multiplicative, inverse -ln/2,kernel {0},derivative at zero -2. The source proof applies; multiplicativity did not imply increasing behavior. The all-zero real solution remains separate.

**3.** E=1/2+4+1/3=29/6. The same remainder proof gives the recomputed bound, minimizer and gap:

| Form | W | S | Energy E | Minimum | Energy gap | Minimizing v* |
| --- | --- | --- | --- | --- | --- | --- |
| AF-ADV-P002 | 6 | 2 | 29/6 | 2/3 | 25/6 | 2/3,1/3,1 |

**4.** Affine 17/2,geometric 4,gap 9/2: strict for unequal positive inputs at t=1/2. The general logarithmic proof, endpoint equality and the separate outside-weight counterexample still apply; they are not inferred from this one computation.

**5.** lambda=(1/3,1/6,1/2),x=(-1/2,2,1/3),mean=1/3,second moment=29/36,gap=25/36. This is (25/6)/6, positive because positive-weight inputs differ.

**6.** Quotient representatives are modulo 3 rather than 2. A decreasing calibration can preserve the additive or positive-multiplicative operation; order and group structure are different claims. Positive weights permit v1=-1. Repeat the general triangle/equality proof and table-versus-universal audit, retaining both versions and the reason for revision.

## AF-ADV-R001 — Later return with zero drift and equality

At another sitting close preceding models and reconstruct all six deliverables from the R001 row. Record prior answer exposure/help. No enforced delay or unseen-work claim is made.

### Return complete model

**1.** sigma=0,p=-1+cos(pi x/2),f=p. The full solution class is all period-4 functions, by the necessity/converse proof with zero drift.

| Form | x | p(x) | f(x) |
| --- | --- | --- | --- |
| AF-ADV-R001 | 0 | 0 | 0 |
| AF-ADV-R001 | 1 | -1 | -1 |
| AF-ADV-R001 | 2 | -2 | -2 |
| AF-ADV-R001 | 3 | -1 | -1 |
| AF-ADV-R001 | 4 | 0 | 0 |

**2.** Both f and p descend through q_4 but neither is additive: f(1)+f(3)=-2≠f(4)=0. Value zero at the identity was necessary, not sufficient. Continuous additive g with g(4)=0 is zero,kernel R,image {0}; its kernel quotient has one element. E=1 has kernel R,image {1}, so it is a homomorphism but not onto all positive reals. Its derivative is zero and the source normalized proof gives exp(0x). E=1 is different from the real equation's separate F=0 solution.

**3.** E=1+3+2=6. Every ratio v_i/w_i=-1, so the given signed vector already attains equality:

| Form | W | S | Energy E | Minimum | Energy gap | Minimizing v* |
| --- | --- | --- | --- | --- | --- | --- |
| AF-ADV-R001 | 6 | -6 | 6 | 6 | 0 | -1,-3,-2 |

**4.** r=s=9,t=1/3 gives affine/geometric values 9 and gap zero. Equality holds at an interior weight because the positive inputs are equal. Endpoint weights remain distinct equality cases; the t=2 failure still excludes arbitrary signed weights.

**5.** lambda=(1/6,1/2,1/3),x=(-1,-1,-1),mean=-1,second moment 1,gap zero. The gap equals the energy gap/W. Strict convexity equality uses coincident positive-weight inputs, independent of their sign.

**6.** Zero drift permits f itself to descend but does not force a periodic map to be additive/constant. The calibrated g is zero because it additionally satisfies continuity and additivity. Attaining an inequality does not waive positive-weight or logarithmic-domain conditions. Preserve the general triangle proof/equality audit and record exactly which structural/inequality assumption changed.

### Exact inequality reference ledger

| Form | AMGM affine | AMGM geometric | AMGM gap | Jensen mean | Jensen second moment | Jensen gap |
| --- | --- | --- | --- | --- | --- | --- |
| AF-ADV-P001 | 13/2 | 6 | 1/2 | 2/3 | 5/4 | 29/36 |
| AF-ADV-P002 | 17/2 | 4 | 9/2 | 1/3 | 29/36 | 25/36 |
| AF-ADV-R001 | 9 | 9 | 0 | -1 | 1 | 0 |

## Feedback, records and next study

| Required evidence | Repair before continuing |
| --- | --- |
| Function types, operations and universal quantifiers | Revisit source Exercises 8–10; finite samples cannot classify arbitrary functions |
| Representatives, kernel and actual image | Recheck group Modules 1/4 and their Proof audits; factorization is not automatically a homomorphism or onto the codomain |
| Translation necessity/converse and periodic/additive distinction | Subtract sigma x; preserve the arbitrary residual; use explicit zero/additivity witnesses |
| Stated regularity and analytic inputs | Compare the density, differentiability/ODE and log-continuity proofs; restore positive-domain/MVT hypotheses before using derivative signs |
| Sharp inequalities and all equality/zero cases | Derive exact remainder identities; keep positive weights, signed variables and admissibility of the unique minimizer separate |
| Convex support and AM–GM endpoints | Nonnegative weights sum to one; only zero-weight inputs may be ignored; endpoint equality differs from equal-input equality |
| Complete primary, changed and return work | Recompute changed values; retain zero-drift/zero-slope return cases; name the first altered premise and every affected conclusion |

Keep dated, separately named first, comparison and revised worksheets, exact task/source labels, public-answer/help exposure and reasons for changes. The [worksheet portfolio guide](/guide/learner-records/#keep-a-worksheet-portfolio) explains recovery. A shared reading note is one mutable string; these native assignments create no shared writing contracts or graded Practice records. Shared backup does not automatically include learner-owned files or every native/tutor store. Export through each relevant existing control and check recovery separately. Dates/closed-key declarations do not verify a delay or independent work.

Stop after the named source/local questions, source proof reconstruction, all eighteen cumulative deliverables and comparisons/repairs are complete. Selected workload remains unknown. The [specialist scaling clinic](#/item/book-functions-equations-proof?chapter=scaling-laws-and-regularity) is a separate continuation with its own regularity/relative-domain preparation, not a substitute for this course. Functional-equation stability, multivariable classification and wider algebraic structure need their own sustained teaching and feedback.
`;export{e as default};