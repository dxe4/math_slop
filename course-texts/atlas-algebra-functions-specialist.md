
# Functional Laws, Regularity, and Stability

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-algebra-functions-specialist) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Functions, Structure, and Sharp Inequalities](#/courses/atlas-algebra-functions-advanced) · [Real analysis](#/courses/course-lucent-analysis).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A composition law is a mathematical hypothesis about every admissible input. Regularity can make that law rigid; a small defect can instead make it close to an exact law. Neither conclusion follows from a finite calibration table. This course develops a sustained real, finite-dimensional sequence: regularity replacements, Pexider and Jensen equations, multivariable scaling, bilinear and quadratic laws, uniform and scale-sensitive stability, and a reproducible modelling audit.

The study time depends on the selected reading, attempts and corrections. Earlier course and clinic estimates retain their own scopes. All questions and models are public self-study material. Completion means the named mathematical work, comparisons and repairs; it does not establish a grade, independent performance, an observed workload or every theorem in functional-equation theory.

## Preparation, exact source assignments, and route

Complete the following in order. An earlier attempt on the identical assignment may be reused with its source and answer-exposure record. Advanced preparation and the scaling clinic do not complete this specialist course.

| Stage | Required reading and work | Exact complete feedback |
| --- | --- | --- |
| A: advanced prerequisite | [Functions, Structure, and Sharp Inequalities](#/courses/atlas-algebra-functions-advanced), source selections **A–E**, **AF-ADV-EX01–EX12**, and all six deliverables in **AF-ADV-P001/P002/R001** | Its **Full local solutions**, **Primary complete model**, **Changed complete model**, **Return complete model**, and **Feedback, records and next study**. Source A is overview Exercises/Solutions **8–10**; B is both group modules' Guided practice **1–4** with adjacent Reasoning; C is only the worked exponential Topic A, Statement through Reflection; D includes **ANA-CH10-E003 — Worked answer**. Retain the course's matrix-group, positive-log, derivative/MVT and ODE preparation when doing those exact earlier tasks |
| B: existing scaling clinic | [Scaling laws, signs and a dense-domain boundary](../books/functions-equations-proof/scaling-laws-and-regularity.md), **AF-SCALE-1**, **AF-SCALE-2**, **AF-SCALE-R**, every numbered part | **A power law from continuity at one scale** and **Why finite calibration does not prove the law**; **Complete signed classification and extension key**; **A constructive key on a proper dense domain**. Its last domain is only \(\mathbb Q(\sqrt2)\cap(0,\infty)\) |
| C: limit bridge | [Uniform Convergence and Function Spaces](../books/proof-safe-real-analysis/uniform-convergence.md), **Pointwise versus uniform convergence**, **Preservation of continuity**, **Spaces of continuous functions**, and **Practice Exercise 4** | The uniform-limit and completeness proofs and Exercise 4's adjacent **Solution**. Reconstruct the uniform-Cauchy-to-pointwise-limit step. We use completeness of \(\mathbb R\), not an assertion that arbitrary functions belong to \(C([0,1])\) |
| D: measure bridge | [Outer Measure, Measurability, and Null Sets](#/books/proof-safe-real-analysis), §§**1–2, 5–8, 10, 12**; **ANA-CH16-E004/E009/E010/E015/E018** | Each identically labelled **Solution**: translation of covers, disjoint addition, continuity from below, indicator measurability and an open null-set cover. The finite-union approximation and difference-set theorem needed here are proved below, rather than presumed to be those exercises |
| E: specialist sequence | Diagnostic **AF-SP-D01–D06**; the full theory sequence; **AF-SP-EX01–EX18**; all eight deliverables in each **AF-SP-P001/P002/R001**; every mandatory software run | Diagnostic repair keys, eighteen full local solutions, three complete eight-part models, complete expected software ledgers and the final descriptive repair map |

For rational-density and continuity repairs use [Ordered fields](../books/proof-safe-real-analysis/ordered-fields-and-number-systems.md), **§6**, and [Continuity and uniform control](../books/proof-safe-real-analysis/continuity-and-uniform-continuity.md), **§§1–2, 4–5**, as in the scaling clinic. Use real logarithms throughout. A coordinatewise product \(x\odot y\) multiplies matching coordinates; a dot product sums matching products. These operations are different.

### Diagnostic with complete repairs

Attempt before opening these answers; a failed part identifies preparation to repair, not a readiness score.

1. **AF-SP-D01.** For additive \(A\), derive \(A(0),A(-x),A(qx)\) for rational \(q\). Does that prove \(A(tx)=tA(x)\) for real \(t\)?
2. **AF-SP-D02.** Give the quantifiers in a uniform bound \(|f(x+y)-f(x)-f(y)|\le\delta\). Can 25 checked pairs establish it?
3. **AF-SP-D03.** Normalize \(f(x+y)=g(x)+h(y)\) by its values at zero.
4. **AF-SP-D04.** Why can \(\log T(e^{z_1},e^{z_2})\) be undefined for a real-valued multiplicative map? Separate its branches.
5. **AF-SP-D05.** If \(\sum_{k=n}^{m-1}|u_{k+1}-u_k|\le C2^{-n}\), prove existence and the tail bound without assuming a compact function space.
6. **AF-SP-D06.** Compute \(Q(x+y)+Q(x-y)-2Q(x)-2Q(y)\) for \(Q(x)=x^THx\), with symmetric real \(H\).

**D01 repair.** Additivity at zero gives zero; at \(x+(-x)\) gives the negative; repeated addition and division by positive integers give rational homogeneity. Real homogeneity still needs proved regularity. Review source A's Cauchy proof and local regularity below.

**D02 repair.** There exists one finite \(\delta\ge0\) such that for every pair in the whole stated domain the inequality holds. A finite grid tests only its listed pairs. Write the two universal quantifiers before any audit.

**D03 repair.** Put \(b=g(0),c=h(0)\). Then \(f(0)=b+c\), \(g(x)=f(x)-c\), \(h(x)=f(x)-b\); \(A=f-b-c\) is additive. Restore both constants before using a calibration.

**D04 repair.** On the positive-input multiplicative group, \(T(1)\) is zero or one. The first branch forces \(T\equiv0\); in the second, \(T(x)=T(\sqrt x)^2>0\), using the inverse to exclude zero. Only this second branch admits the logarithm. All square roots and identities are coordinatewise.

**D05 repair.** For fixed input the inequality makes \((u_n)\) Cauchy; completeness of \(\mathbb R\) supplies a limit \(u\). Let \(m\to\infty\) to obtain \(|u-u_n|\le C2^{-n}\). If the same bound holds for every input, this is also a uniform error estimate. Continuity of the terms was not assumed.

**D06 repair.** Expand both quadratic expressions; their mixed terms cancel and the result is zero. Symmetry also gives \(B(x,y)=x^THy\). A general nonsymmetric matrix has the same quadratic form as its symmetric part. Repair finite sums and matrix products through the advanced course before continuing.

## Regularity replaces an analytic assumption

For \(A:\mathbb R\to\mathbb R\) satisfying \(A(x+y)=A(x)+A(y)\), the diagnostic gives \(\mathbb Q\)-linearity. Continuity at zero propagates everywhere because \(A(x+t)-A(x)=A(t)\); rational density then gives \(A(x)=cx\), \(c=A(1)\), exactly as in source A. We now prove three other hypotheses that force the same conclusion. Each hypothesis is additional to the universal equation.

### Boundedness on an interval and monotonicity

Suppose \(A\) is bounded above by \(M\) on a nonempty open interval \((a,b)\). Choose its midpoint \(u\) and \(r>0\) with \(u+[-r,r]\subset(a,b)\). For \(|t|\le r\),
\[
 A(t)\le M-A(u),\qquad -A(t)=A(-t)\le M-A(u).
\]
Thus \(|A(t)|\le K=M-A(u)\), where \(K\ge0\). Given \(\epsilon>0\), choose a positive integer \(n\) with \(K/n<\epsilon\). If \(|t|<r/n\), then \(|A(t)|=|A(nt)|/n\le K/n<\epsilon\). This proves continuity at zero, including \(K=0\). A lower bound works by replacing \(A\) by \(-A\). Boundedness on just a finite set is insufficient.

If \(A\) is increasing or decreasing on any nondegenerate interval, choose two interior points: monotonicity bounds it on the intervening interval. Apply the preceding proof. The resulting slope can be zero; increasing means nondecreasing here. Strict increase would require a positive slope.

### Measurability and a difference-set proof

We need a genuine bridge from measure to a neighbourhood. Here \(m\) is Lebesgue measure; sets whose Lebesgue measure is used are measurable; the splitting criterion below tests arbitrary sets using outer measure. First translation preserves measurability: for a test set \(S\), apply the splitting criterion to \(S-t\) and \(E\), then translate both pieces and use invariance of outer measure. This proves the criterion for \(E+t\), as well as \(m(E+t)=m(E)\).

For \(m(E)<\infty\), choose an interval cover \(E\subset O=\bigcup_{j\ge1}I_j\) whose total length is below \(m(E)+\eta\). Every interval has finite length. Subadditivity and measurable additivity give \(m(O\setminus E)<\eta\). The finite unions \(F_k=\bigcup_{j=1}^kI_j\) increase to \(O\); since \(m(O)<\infty\), continuity from below gives \(m(O\setminus F_k)\to0\). Consequently, for a sufficiently large \(k\),
\[
 m(E\mathbin\triangle F_k)\le m(O\setminus E)+m(O\setminus F_k)<2\eta.
\]
This is finite-union approximation derived from the actual countable-cover definition. It applies to unbounded finite-measure sets too.

For an interval \(I\), \(m(I\triangle(I+t))\le2|t|\). Symmetric difference of two unions is contained in the union of the matching symmetric differences. Thus for a union \(F\) of \(k\) intervals,
\[
 m(F\triangle(F+t))\le2k|t|,
\quad m(E\triangle(E+t))\le2m(E\triangle F)+2k|t|\longrightarrow0.
\]
To justify the last limit, first choose \(F\) so its first term is arbitrarily small, then choose \(|t|\) small for that fixed finite \(k\).

If additionally \(m(E)>0\), for all sufficiently small \(|t|\) the last symmetric difference has measure less than \(m(E)\). Hence \(m(E\cap(E+t))>0\). An element of this intersection has the form \(e=e'+t\), so \(t\in E-E\). We proved: **the difference set of a measurable set of finite positive measure contains an open interval about zero**. Positive outer measure without measurability, or a merely nonempty/countable set, does not meet this theorem's hypotheses.

Now let the real-valued additive function \(A\) be Lebesgue measurable. The sets
\[
 E_n=\{x\in[-1,1]:|A(x)|\le n\},\qquad n\ge1,
\]
are measurable and cover \([-1,1]\). Some \(E_n\) has positive measure, since otherwise their countable union would have measure zero. It has finite measure. For \(t=e-e'\in E_n-E_n\), \(|A(t)|\le2n\). The difference-set theorem therefore bounds \(A\) near zero; the earlier integer-rescaling proof gives continuity and \(A(x)=cx\). No integration, Fubini theorem or unproved regularity substitution was used.

### An all-real failure when regularity is removed

An actual all-real example needs a set-theoretic input. We explicitly assume **Zorn's lemma**: if every chain in a nonempty partially ordered set has an upper bound, there is a maximal element. This is a choice principle, not an algorithm. Order the rationally linearly independent subsets of \(\mathbb R\) containing \(1,\sqrt2\) by inclusion. They are nonempty because \(\sqrt2\) is irrational. A chain's union is independent: each finite proposed relation lies in one chain member. Zorn supplies a maximal independent set \(\mathcal B\). It spans \(\mathbb R\) over \(\mathbb Q\), since otherwise an element outside its span could be adjoined. Every real has a unique finite rational expansion in \(\mathcal B\).

Set \(A(\sqrt2)=1\), and set \(A(b)=0\) on every other basis element, including \(1\). Extend by rational linearity to every real. Uniqueness of the expansion proves well-definedness and additivity. For rational \(q_j\to\sqrt2\), \(A(\sqrt2-q_j)=1\), although \(\sqrt2-q_j\to0\). Thus \(A\) is discontinuous, not of the form \(cx\), unbounded above and below on every nondegenerate interval, nonmonotone there, and nonmeasurable by the proved regularity results. This is an existence construction conditional on the stated choice principle; it provides no computable basis or numerical evaluator. The earlier AF-SCALE-R example is instead an explicit map on a proper dense quadratic field, and cannot be relabelled as this all-real example.

## Pexider and midpoint laws preserve different information

For real functions \(f,g,h\) on \(\mathbb R^n\), the **Pexider equation** is
\[
 f(x+y)=g(x)+h(y)\quad\text{for every }x,y\in\mathbb R^n.
\]
Let \(b=g(0),c=h(0)\). Substituting zero proves exactly
\[
 f=A+b+c,\qquad g=A+b,\qquad h=A+c,
\]
where \(A\) is additive. Conversely these formulas satisfy the equation for any additive \(A\) and real \(b,c\). One component's continuity at a point transfers to \(A\); alternatively apply the scalar regularity theorem to every coordinate slice of \(A\). Do not discard offsets by assuming \(f(0)=0\).

The **midpoint Jensen equation** is
\[
 J((x+y)/2)=(J(x)+J(y))/2.
\]
Put \(A=J-J(0)\). The equation with \(y=0\) gives \(A(x/2)=A(x)/2\). Combining with the original equation gives additivity. Conversely an additive \(A\), plus any constant, satisfies the midpoint equation. Continuity, coordinatewise interval boundedness, or scalar measurability on each coordinate slice makes \(J\) affine. The midpoint equation alone provides rational affine combinations, not arbitrary real weights. The all-real pathological \(A\) above is a counterexample. A convex inequality, an exact midpoint equation and a noisy midpoint equation are three different assertions.

For later use, approximate versions need explicit constants. Suppose
\(|f(x+y)-g(x)-h(y)|\le\epsilon\) everywhere. Write \(f_0=f(0),g_0=g(0),h_0=h(0)\) and \(U=f-f_0\). The zero-pair residual bounds \(|f_0-g_0-h_0|\le\epsilon\). The two single-zero equations and the general equation give
\[
 |U(x+y)-U(x)-U(y)|\le4\epsilon.
\]
Also \(|g(x)-g_0-U(x)|\le2\epsilon\) and similarly for \(h-h_0\). The uniform stability theorem below therefore supplies an additive \(A\) with
\[
 |f-(A+g_0+h_0)|\le5\epsilon,\quad
 |g-(A+g_0)|\le6\epsilon,\quad |h-(A+h_0)|\le6\epsilon.
\]
These are certified bounds, not optimality claims. For a midpoint residual at most \(\epsilon\), put \(U=J-J(0)\). The pair \((2z,0)\) gives \(|U(2z)-2U(z)|\le2\epsilon\). Twice the midpoint residual and this doubling residual show that \(U\)'s additive defect is at most \(4\epsilon\). Hence \(J\) is within \(4\epsilon\) of \(A+J(0)\). No such conclusion follows from checking a few midpoints.

## Multivariable, multiplicative, and quadratic laws

### Coordinate classification and multivariate scaling

An additive \(A:\mathbb R^n\to\mathbb R\) decomposes exactly as
\[
 A(x)=\sum_{i=1}^n A_i(x_i),\qquad A_i(t)=A(te_i).
\]
Each \(A_i\) is scalar additive; the decomposition follows by adding the coordinate vectors. If every \(A_i\) satisfies any one of the proved scalar regularity hypotheses, then \(A(x)=a\cdot x\). Continuity at zero or boundedness on a neighbourhood implies that coordinate condition. Without it each \(A_i\) can be an arbitrary rational-linear map. We do not infer Lebesgue measurability of a line restriction merely from a general measurable function in higher dimensions; the slice condition is explicit.

Let \(T:(0,\infty)^n\to\mathbb R\) satisfy \(T(x\odot y)=T(x)T(y)\). At the identity vector \(\mathbf1\), either \(T\equiv0\), or \(T(\mathbf1)=1\), inverses exclude zeros and coordinatewise square roots force positivity. In the nonzero branch,
\[
 A(z)=\log T(e^{z_1},\ldots,e^{z_n})
\]
is additive. Under the coordinate regularity just stated,
\[
 T(x)=\prod_{i=1}^n x_i^{a_i}.
\]
The converse follows from positive real power laws. Each input is a dimensionless ratio: changing a measurement unit is different from replacing its ratio. Two calibrations must have independent log-input rows to identify two exponents; a single row or proportional rows leave an affine family of exponent vectors.

For the signed domain \((\mathbb R\setminus\{0\})^n\) and real outputs, the complete alternatives are zero or
\[
 T(x)=\prod_i \operatorname{sgn}(x_i)^{\varepsilon_i}|x_i|^{a_i},
 \qquad \varepsilon_i\in\{0,1\},
\]
with the same regularity on the positive component. Indeed each coordinate sign vector squares to \(\mathbf1\), so its nonzero image is \(\pm1\); decomposing a sign vector into coordinate sign vectors determines the character. Conversely these choices preserve products. Positive outputs require every \(\varepsilon_i=0\).

A finite continuous multiplicative extension of a nonzero positive-domain law to \([0,\infty)^n\) exists exactly when every \(a_i\ge0\). Define each zero-coordinate factor as 0 if \(a_i>0\) and as 1 if \(a_i=0\); the latter is an explicit extension convention. Necessity follows by approaching the corresponding axis with other coordinates 1. For a signed-domain law extended continuously to all \(\mathbb R^n\), require \(a_i>0\) when \(\varepsilon_i=1\), and \(a_i\ge0\) when \(\varepsilon_i=0\). A negative exponent diverges; exponent zero with an odd sign has incompatible one-sided limits. These coordinate conditions also suffice by continuity of the finite product and preserve the semigroup law on axes. The identically zero branch extends separately. There is no unrestricted logarithm at an axis or on the zero branch.

### Separate additivity and real bilinearity

A map \(B:\mathbb R^n\times\mathbb R^m\to\mathbb R\) is separately additive if it is additive in either argument when the other is fixed. Assume that every scalar coordinate slice in either argument has one of the proved regularity properties for each fixed other argument. First classify the first-variable slices and decompose in coordinates; then classify the second-variable slices of \(B(e_i,y)\). This yields exactly
\[
 B(x,y)=\sum_{i,j}h_{ij}x_i y_j=x^THy,\qquad h_{ij}=B(e_i,e_j).
\]
Conversely every real matrix gives a continuous separately additive map. These are real bilinear maps. Separate additivity alone is weaker: \(B(x,y)=A(x)A(y)\) for the pathological scalar additive \(A\) is separately additive but fails real homogeneity.

### Parallelogram classification and polarization

Suppose \(Q:\mathbb R^n\to\mathbb R\) is continuous everywhere and
\[
 Q(x+y)+Q(x-y)=2Q(x)+2Q(y).
\]
Substitution gives \(Q(0)=0\), \(Q(-x)=Q(x)\) and \(Q(2x)=4Q(x)\). Define
\[
 B(x,y)=\frac{Q(x+y)-Q(x-y)}4.
\]
Evenness makes \(B\) symmetric. Apply the parallelogram identity to the pairs \((x+y,z)\) and \((x-y,z)\), then subtract. Rearranging their four left-hand terms gives
\[
 B(x+z,y)+B(x-z,y)=2B(x,y).
\]
Since \(B(0,y)=0\), setting \(z=x\) gives \(B(2x,y)=2B(x,y)\). Now put \(x=(u+v)/2,z=(u-v)/2\) in the preceding relation: \(B(u,y)+B(v,y)=B(u+v,y)\). Symmetry gives additivity in the other argument. Continuity of \(Q\) at all points makes both variable maps continuous, so the bilinear classification applies. Finally \(B(x,x)=Q(x)\). Therefore precisely
\[
 Q(x)=x^THx
\]
with real symmetric \(H\) solve the stated regular problem; expansion verifies the converse. The matrix is unique, since \(h_{ii}=Q(e_i)\) and \(2h_{ij}=Q(e_i+e_j)-Q(e_i)-Q(e_j)\). Without continuity the same polarization is only rational bilinear: \(Q(x)=A(x)^2\) is a noncontinuous counterexample. Positivity is a separate modelling requirement, not a consequence of the parallelogram law. In dimension two, \(H=(\begin{smallmatrix}1&2\\2&1\end{smallmatrix})\) gives \(Q(1,-1)=-2\).

## Uniform stability produces an exact nearby law

For \(f:\mathbb R^n\to\mathbb R\), suppose one finite \(\delta\ge0\) bounds the additive defect for **every** pair. No continuity and no condition \(f(0)=0\) are needed. Set
\[
 u_k(x)=2^{-k}f(2^kx).
\]
The pair \((2^kx,2^kx)\) gives
\[
 |u_{k+1}(x)-u_k(x)|\le\delta/2^{k+1}.
\]
The geometric sum proves pointwise Cauchy convergence by completeness of \(\mathbb R\). Define \(A(x)=\lim_k u_k(x)\); summing from \(k=N\) proves the **uniform** tail and error
\[
 |A(x)-2^{-N}f(2^Nx)|\le\delta/2^N,\qquad |A(x)-f(x)|\le\delta.
\]
The normalized defect of \(u_k\) is at most \(\delta/2^k\); take the three pointwise limits to prove additivity of \(A\). If another additive \(C\) is at a finite uniform distance \(M\) from \(f\), then
\[
 |A(x)-C(x)|=2^{-k}|A(2^kx)-C(2^kx)|\le2^{-k}(\delta+M)\to0.
\]
Thus the exact additive map at finite uniform distance is unique. Arbitrary approximate maps are not unique. This real finite-dimensional version of the classical uniform stability theorem is proved here in full; the historical primary paper is [Hyers, On the Stability of the Linear Functional Equation](https://pmc.ncbi.nlm.nih.gov/articles/PMC1078310/).

If \(f\) is bounded on a neighbourhood of zero, then so is \(A\), by the error bound; the coordinate regularity theorem makes \(A=a\cdot x\). In particular a continuous \(f\) is locally bounded. If each scalar restriction \(f(te_i)\) is measurable, its dyadic limit is measurable and each \(A_i\) is linear. Approximate additivity alone does not force real linearity: a pathological exact additive map has defect zero.

For positive \(T\), an all-domain **logarithmic** defect
\[
 |\log T(x\odot y)-\log T(x)-\log T(y)|\le\delta
\]
becomes this additive problem in log coordinates. With coordinate regularity of the limit, there is a unique monomial \(M(x)=\prod x_i^{a_i}\) at bounded logarithmic distance, and
\[
 e^{-\delta}\le T(x)/M(x)\le e^\delta.
\]
The law residual itself gives the analogous ratio bound for \(T(x\odot y)/(T(x)T(y))\). An ordinary absolute output error is different and need not remain small after taking a log near zero.

### Quadratic stability requires its normalization

Let \(q:\mathbb R^n\to\mathbb R\), **\(q(0)=0\)**, satisfy
\[
 |q(x+y)+q(x-y)-2q(x)-2q(y)|\le\Delta
\]
for every pair, with finite \(\Delta\ge0\). Setting \(y=x\) now gives \(|q(2x)-4q(x)|\le\Delta\); the stated normalization is essential. For \(v_k(x)=4^{-k}q(2^kx)\),
\[
 |v_{k+1}-v_k|\le\Delta/4^{k+1},\qquad
 |Q(x)-4^{-N}q(2^Nx)|\le\Delta/(3\,4^N).
\]
The geometric series and real completeness give \(Q\). The scaled residual tends to zero, so \(Q\) satisfies the exact parallelogram law. Every such exact law has \(Q(0)=0,Q(2x)=4Q(x)\); scaling therefore proves uniqueness among exact quadratic laws at finite uniform distance from \(q\). No positivity has been inferred.

If \(q\) is continuous everywhere, every \(v_k\) is continuous and the uniform tail proves continuity of \(Q\), by the uniform-limit proof from source C applied at each point. Then \(Q=x^THx\) with symmetric real \(H\). Arbitrary discontinuous \(q\) need not produce a real quadratic matrix. If \(q(0)\ne0\), the doubling relation includes \(q(0)\); do not reuse the constant \(\Delta/3\) without rederiving it.

## Scale-sensitive stability and the critical failure

Use the Euclidean norm on \(\mathbb R^n\), so \(\|tx\|=|t|\|x\|\). Assume, everywhere,
\[
 |f(x+y)-f(x)-f(y)|\le\epsilon(\|x\|^p+\|y\|^p),\qquad \epsilon\ge0,
\]
where **\(0<p<1\)** or **\(p>1\)**. These ranges define \(0^p=0\); substituting zero also forces \(f(0)=0\).

For \(0<p<1\), use \(u_k=2^{-k}f(2^kx)\). The successive differences are at most \(\epsilon 2^{k(p-1)}\|x\|^p\). Their sum converges and yields
\[
 |f(x)-A(x)|\le \frac{2\epsilon}{2-2^p}\|x\|^p.
\]
For \(p>1\), the upward series diverges, so use \(w_k=2^kf(x/2^k)\). Its successive differences are at most \(\epsilon 2^{(k+1)(1-p)}\|x\|^p\), giving
\[
 |f(x)-A(x)|\le \frac{2\epsilon}{2^p-2}\|x\|^p.
\]
In either direction the scaled general defect tends to zero; take the limits at \(x,y,x+y\) to prove additivity. For uniqueness among additive maps obeying any finite multiple of \(\|x\|^p\), apply the same scaling to their difference: its bound gains \(2^{k(p-1)}\) upward or \(2^{k(1-p)}\) downward. This tends to zero in the corresponding range. If \(f\) is bounded near zero, the power error is also bounded there, and \(A\) is real linear by coordinate regularity. Without that extra premise the conclusion is additive. These proofs make no claim about \(p\le0\).

At **\(p=1\)** the obstruction is substantive. Define \(h(0)=0\), \(h(t)=t\log|t|\) otherwise. For \(a,b\ge0\) with \(s=a+b>0\),
\[
 h(s)-h(a)-h(b)=s[-r\log r-(1-r)\log(1-r)],\quad r=a/s.
\]
The bracket lies in \([0,\log2]\): its derivative is \(\log((1-r)/r)\), so its maximum is at \(1/2\), and its endpoint limits are zero. For opposite signs, take \(x=a,y=-b\). If \(a\ge b\), the defect is the negative of the same-sign defect for \(a-b,b\); it is bounded by \(a\log2\). If \(b>a\), use oddness and interchange. Thus on **all real pairs**
\[
 |h(x+y)-h(x)-h(y)|\le\log2(|x|+|y|).
\]
Nevertheless no additive \(A\) obeys \(|h(x)-A(x)|\le K|x|\) for a finite \(K\): at positive integers \(m\), \(A(m)=mA(1)\), so the ratio is \(|\log m-A(1)|\to\infty\). A divergent geometric proof alone would not have established this failure; the actual counterexample does.

## Required proof questions and complete solutions

Attempt every question with domains, quantifiers and the first line using regularity visible.

1. **AF-SP-EX01.** Prove that a scalar additive function bounded only above on \((3,5)\) is linear. Explain why a bound on \(\{3,4,5\}\) does not suffice.
2. **AF-SP-EX02.** Reconstruct finite-union approximation and the translation/difference-set proof. Where do finite measure, positive measure and measurability enter? Does \(E=\{0\}\) qualify?
3. **AF-SP-EX03.** Justify the basis-extension step of the all-real example. Compute \(A(3+2\sqrt2)\) and prove discontinuity without pretending to evaluate the whole basis.
4. **AF-SP-EX04.** Classify continuous Pexider triples on \(\mathbb R\) with \(g(0)=3,h(0)=-2,g(1)=5\), proving necessity and converse.
5. **AF-SP-EX05.** Classify continuous midpoint-Jensen maps with \(J(0)=4,J(2)=10\); give an unregular midpoint solution and identify the missing real-homogeneity step.
6. **AF-SP-EX06.** Classify additive \(A:\mathbb R^2\to\mathbb R\), bounded near zero, with \(A(1,0)=2,A(0,1)=-1\). Find kernel and image; remove boundedness honestly.
7. **AF-SP-EX07.** Under the positive multiplicative law and coordinate regularity, classify \(T(e,1)=e^2,T(1,e)=e^{-1}\). Can it extend continuously to the closed positive quadrant? What do just those two records prove without the law?
8. **AF-SP-EX08.** Classify the signed law with exponents \((0,2)\) and sign character \((1,0)\). Audit its zero-axis extension; then change the character to \((0,0)\). Keep the zero branch distinct.
9. **AF-SP-EX09.** Prove the separately regular bilinear classification. For \(H=(\begin{smallmatrix}2&1\\1&3\end{smallmatrix})\), compute \(B((1,1),(1,-1))\). Remove regularity with an actual counterexample.
10. **AF-SP-EX10.** Reconstruct polarization. For a continuous parallelogram law with \(Q(e_1)=2,Q(e_2)=3,Q(e_1+e_2)=7\), find \(H\) and \(Q(1,-1)\). Does the equation itself imply nonnegative values?
11. **AF-SP-EX11.** Prove uniform additive stability and uniqueness at finite uniform distance. For \(\delta=3,N=5\), state the tail bound. Must the exact limit be real linear?
12. **AF-SP-EX12.** Derive all approximate Pexider and midpoint constants in the theory. With \(\epsilon=1/10\), state the three Pexider bounds and the midpoint bound. Which constants are offsets?
13. **AF-SP-EX13.** Prove the log-stability ratio certificate and the role of coordinate regularity. Show that a small ordinary output error near zero need not give a small logarithmic error.
14. **AF-SP-EX14.** Prove normalized quadratic stability, including the \(\Delta/3\) constant and uniqueness. Test the same claim without normalization on \(q=Q+1\).
15. **AF-SP-EX15.** Prove both power-control directions and uniqueness. For \(\epsilon=3/10\), give the constants at \(p=1/2\) and \(p=2\). Check \(f(x)=x^2,p=2,\epsilon=1\), then prove the mixed-sign critical counterexample.
16. **AF-SP-EX16.** For \(C(t)=\max(-1,\min(1,t))\) and \(P(t)=C(t)^2\), prove \(|C(s+t)-C(s)-C(t)|\le1\), sharply. Prove the safe parallelogram-defect bound \(4\) for \(P\). Do not infer either from a grid.
17. **AF-SP-EX17.** Construct a continuous nonadditive function that has zero additive defect at every scalar pair in \(\{-2,-1,0,1,2\}^2\). Explain the software audit's limitation.
18. **AF-SP-EX18.** Given log-input rows \((1,2),(2,4)\) and log-output values \(3,6\), find every compatible exponent vector. Add row \((0,1)\) with log-output \(-1\). Distinguish parameter identification under a universal model from proof of that model.

### Full local solutions

**EX01.** Take \(u=4,r=1/2\). Both \(4\pm t\) lie in the interval for \(|t|\le r\), so \(|A(t)|\le M-A(4)\). Integer rescaling proves continuity at zero, and rational density gives \(A(x)=A(1)x\); substitution proves the converse. The constructed pathological additive map is finite, hence bounded on any finite set, but is not linear.

**EX02.** A countable cover with total length below \(m(E)+\eta\) gives \(m(O\setminus E)<\eta\). Finite partial unions approximate \(O\) by continuity from below and its finite measure, so \(m(E\triangle F)<2\eta\). Translation preserves measurability by translating the splitting criterion; outer-measure invariance alone would not assert that. For a union of \(k\) intervals, translated symmetric difference has measure at most \(2k|t|\). Triangle inclusion gives translation continuity for \(E\). Make its error less than \(m(E)>0\) to force \(E\cap(E+t)\ne\varnothing\), whence \(t\in E-E\). Measurability permits subtraction/addition of measures, finiteness permits a finite cover approximation and subtraction, positivity forces a nonempty overlap. A singleton has zero measure and difference set \(\{0\}\), so it fails the positivity premise.

**EX03.** A union of a chain of independent sets remains independent because every finite relation belongs to one member. Zorn gives a maximal independent set containing \(1,\sqrt2\); maximality gives spanning, and independence gives unique finite rational coordinates. Rational extension is therefore well-defined and additive. The assigned basis values give \(A(3+2\sqrt2)=2\). Choose rational \(q_j\to\sqrt2\); the inputs \(\sqrt2-q_j\) tend to zero with constant output 1. The choice assumption and this finite calculation do not supply an algorithm for arbitrary real expansions.

**EX04.** Zero substitution gives \(f=A+1,g=A+3,h=A-2\). Continuity gives \(A(x)=ax\), and \(g(1)=5\) forces \(a=2\). Thus \(f=2x+1,g=2x+3,h=2x-2\). Their substitution verifies every pair; the zero offsets and calibration were necessary, not just examples.

**EX05.** Subtract 4 and use the midpoint equation with zero to obtain additivity. Continuity makes the result \(ax\), and \(2a+4=10\) forces \(a=3\). So \(J=3x+4\), which satisfies the equation. The pathological \(A+4\) also satisfies midpoint Jensen but cannot be real affine. Rational homogeneity cannot be extended to all real scalars without a justified limit or other regularity argument.

**EX06.** Coordinate decomposition and local boundedness give \(A(x)=2x_1-x_2\). Its kernel is \(\{(t,2t):t\in\mathbb R\}\), and its image is \(\mathbb R\), since \(A(y/2,0)=y\). Without boundedness, \(2x_1-x_2+A_*(x_1)\), with the constructed \(A_*(1)=0\), has the same calibrations and is not real linear. The complete unregular class is a sum of arbitrary scalar additive maps with the two stated values at 1.

**EX07.** The nonzero branch is forced by the positive calibrations. In log coordinates, the coordinate regularity theorem gives \(a=(2,-1)\), hence \(T=x_1^2/x_2\), verified by substitution. At \((1,t)\) it diverges as \(t\downarrow0\), so no finite continuous extension exists. Two values alone do not prove either the law or the regularity premise; a positive smooth perturbation vanishing at those log-inputs can preserve both records and change elsewhere.

**EX08.** The signed nonzero law is \(T(x_1,x_2)=\operatorname{sgn}(x_1)|x_2|^2\). At \((0,1)\) its two one-sided limits are 1 and -1, so no continuous extension exists. Changing the character to zero gives \(T=x_2^2\), independent of \(x_1\); it extends continuously with value zero on \(x_2=0\), including the origin, and satisfies the full semigroup law. The identically zero solution is a different branch and never admits a log.

**EX09.** Decompose in \(x\), classify every regular coordinate slice, then decompose/classify \(B(e_i,y)\) in \(y\). The coefficients are \(B(e_i,e_j)\), and finite distributivity proves the converse. For the given vectors, \(Hy=(1,-2)^T\), so \(B=-1\). On \(\mathbb R\), \(A_*(x)A_*(y)\) is additive separately but fails real homogeneity: take \(y=\sqrt2\), for which its first slice is \(A_*\).

**EX10.** Evenness, doubling and the subtracted parallelogram identities give a symmetric separately additive polarization; continuity gives real bilinearity and \(Q(x)=B(x,x)\). The diagonal entries are 2,3 and \(7=2+2h_{12}+3\), so \(h_{12}=1\). Thus \(Q(1,-1)=2-2+3=3\). The different symmetric matrix with diagonal 1 and off-diagonal 2 gives \(Q(1,-1)=-2\), although it satisfies the equation everywhere.

**EX11.** Summing the doubling increments gives \(\delta/2^N\), pointwise existence and a uniform tail. The normalized residual tends to zero, so the limit is additive. Any second additive finite-distance map has difference at \(x\) bounded by \(2^{-k}(\delta+M)\), hence is equal. The requested bound is \(3/32\). A pathological exact additive function has \(\delta=0\), so real linearity still needs a regularity premise.

**EX12.** The three Pexider residuals at \((x,y),(x,0),(0,y)\) give a bound \(3\epsilon\) with constant \(g_0+h_0\); replacing it by \(f_0\) adds at most \(\epsilon\). Thus \(U\)'s defect is \(4\epsilon\). Hyers gives \(|U-A|\le4\epsilon\). The zero-pair residual adds \(\epsilon\) to the \(f\) model; the two zero-equation residuals bound \(g-g_0-U\) and \(h-h_0-U\) by \(2\epsilon\) each. This gives \(5\epsilon,6\epsilon,6\epsilon\), numerically \(1/2,3/5,3/5\). For midpoint Jensen the doubling bound \(2\epsilon\) plus twice its midpoint residual gives \(4\epsilon\), numerically \(2/5\). The constants \(g_0,h_0,J(0)\) are offsets, not slopes or error parameters.

**EX13.** Take logarithms only for positive outputs and move to \(z=\log x\). Hyers yields an additive map at log distance \(\delta\); coordinate regularity makes it \(a\cdot z\). Exponentiating \(-\delta\le\log(T/M)\le\delta\) proves the ratio certificate. For positive numbers \(T=\rho,T_*=\rho^2\), \(0<\rho<1\), the absolute difference tends to zero as \(\rho\downarrow0\), but \(|\log(T/T_*)|=|\log\rho|\to\infty\). An absolute-error fit does not establish the logarithmic premise.

**EX14.** With \(q(0)=0\), use \(y=x\), divide the doubling defect by \(4^{k+1}\), and sum: \(\sum_{k=N}^\infty\Delta/4^{k+1}=\Delta/(3\,4^N)\). The scaled residual proves the exact equation; exact doubling and finite uniform distance prove uniqueness. For \(q=Q+1\), the residual is -2 everywhere, so \(\Delta=2\), yet the uniform distance to its limit \(Q\) is 1, exceeding \(2/3\). The omitted normalization is an actual failure, not a harmless convention.

**EX15.** The upward increments sum to \(\epsilon\|x\|^p/(1-2^{p-1})\) for \(p<1\); downward increments sum to \(\epsilon2^{1-p}\|x\|^p/(1-2^{1-p})\) for \(p>1\). These are the two stated constants. The same scaling sends both the defect and the difference of two candidate additive maps to zero. At \(\epsilon=3/10\) the constants are \(3/[5(2-\sqrt2)]\) and \(3/10\). For \(x^2\), \(|2xy|\le x^2+y^2\), so the \(p=2\) premise holds with \(\epsilon=1\); the downward limit is zero and \(|f(x)|=|x|^2\), attaining the bound. Upward scaling diverges for nonzero \(x\). For \(p=1\), the entropy calculation proves the global defect for same signs, and rewriting an opposite-sign pair as the difference of two nonnegative arguments proves it there too. Positive integers then make \(|\log m-A(1)|\) unbounded, disproving every finite critical weighted approximation by an additive map.

**EX16.** For \(s,t\ge0\), \(C(s+t)\ge\max(C(s),C(t))\) and \(C(s+t)\le C(s)+C(t)\). Thus \(0\le C(s)+C(t)-C(s+t)\le1\). For opposite signs, if \(s\ge -t\), write \(s=(s+t)+(-t)\) and reduce to the nonnegative case; otherwise use oddness. Negative pairs follow by oddness. At \(s=t=1\), the signed defect is -1, so the absolute constant is sharp. Because \(0\le P\le1\), its two positive residual terms sum to a number in \([0,2]\) and its two doubled negative terms to one in \([0,4]\); the absolute residual is at most 4 everywhere. This safe constant need not be the best one.

**EX17.** Let \(p(t)=t(t^2-1)(t^2-4)(t^2-9)(t^2-16)\). Both grid inputs and their sums are integers in \([-4,4]\), all zeros of \(p\). Hence \(p(s+t)-p(s)-p(t)=0\) for every listed pair. But \(p(10)>2p(5)>0\): its first-factor ratio is 2 and each of the other four factor ratios exceeds 1. Thus the pair \((5,5)\) has nonzero defect. The polynomial is continuous; adding it to any linear law gives the same finite audit and a different universal conclusion.

**EX18.** The second equation is twice the first, so every \((a_1,a_2)=(3-2t,t)\) works. The added independent row forces \(a_2=-1,a_1=5\). These are necessary and sufficient coefficients within the already assumed monomial model. Neither rank nor a perfect finite fit establishes the universal multiplicative law.

## Modelling instances and universal certificates

For each form below let \(z\in\mathbb R^2\), \(x\in(0,\infty)^2\), and define
\[
 L(z)=a_1z_1+a_2z_2,\quad C(t)=\max(-1,\min(1,t)),\quad P(t)=C(t)^2,
\]
\[
 F(z)=L(z)+\eta C(z_1),\quad T(x)=\exp F(\log x_1,\log x_2),
\]
\[
 H=\begin{pmatrix}h_{11}&h_{12}\\h_{12}&h_{22}\end{pmatrix},\quad
 Q(z)=z^THz,\quad G(z)=Q(z)+\kappa P(z_1).
\]
The exact Pexider triple is \(f=L+b+c,g=L+b,h=L+c\), and the exact midpoint law is \(J=L+b\). These are authored mathematical instances, not measured data. The only finite grid is the 25 pairs \(s,t\in\{-2,-1,0,1,2\}\), evaluated at \(se_1,te_1\). The software does not test the whole plane.

| Form | a1 | a2 | eta | kappa | h11 | h12 | h22 | b | c | N |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AF-SP-P001 | 2 | -1 | 1/2 | 1/4 | 2 | 1 | 3 | 3 | -2 | 3 |
| AF-SP-P002 | -1 | 3 | -1/3 | -1/2 | 1 | 2 | 1 | -1 | 4 | 3 |
| AF-SP-R001 | 0 | 0 | 1/4 | 0 | 1 | -1 | 1 | 2 | -2 | 3 |

The saturation proof gives the **all-domain** additive/log defect bound \(\delta=|\eta|\), attained on the grid, while the bounded-square proof gives the safe all-domain quadratic bound \(\Delta=4|\kappa|\). The 25-pair quadratic maximum is \(3|\kappa|\); it is not substituted for \(\Delta\) in the universal theorem. Both \(F\) and \(G\) are continuous everywhere and \(G(0)=0\). Their stability limits are exactly \(L\) and \(Q\), since their bounded perturbations vanish after division by \(2^n\) and \(4^n\). These are proofs for the full formulas, independent of any program's output.

For **each form**, submit all eight deliverables:

1. **Regularity and exact classification.** Reconstruct all three scalar regularity replacements, including finite-union approximation and the difference-set proof. Give the complete Pexider and midpoint solution classes, then the form's actual \(f,g,h,J\). Include the conditional all-real failure and its distinction from AF-SCALE-R.
2. **Multivariable modelling.** Prove coordinate classification; recover \(a_1,a_2,\eta\) from \(F(e_1),F(2e_1),F(e_2)\). Classify the exact nearby positive monomial, its signed characters, zero branch and continuous-axis extensions. Explain how dimensionless ratios, calibration rank and finite evidence constrain the modelling claim.
3. **Bilinear/quadratic structure.** Reconstruct separate regularity and polarization proofs. Give \(H,\det H\), \(Q(1,1),Q(1,-1),B((1,1),(1,-1))\); classify this form's nonnegativity using an exact expression or witness. Explain what fails if regularity or positivity is silently removed.
4. **Additive and log stability.** Prove the global saturation bound, Hyers existence/tail/uniqueness and regularity transfer. Identify \(L\), give the all-domain \(F\) error and \(T/\exp L\) ratio certificate, and every dyadic row \(n=0,\ldots,N\) at \(z=(1,1)\).
5. **Quadratic stability.** Prove the global safe bound, normalized 4-adic existence/tail/uniqueness and continuity transfer. Identify \(Q\), give all rows at \(z=(1,1)\), and include the \(Q+1\) normalization counterexample.
6. **Stability transfer and failure.** Reconstruct approximate Pexider/Jensen constants. Prove both power-controlled directions and uniqueness at \(\epsilon=\delta,p=1/2,2\); give the critical \(t\log|t|\) proof including opposite signs. State exactly which conclusions need extra regularity.
7. **Mandatory software reproduction.** Run the full bounded public reference below in a fresh Node process on the supplied JSON, retain its output, compare every expected row for this form, and explain the 25-pair versus all-domain distinction. Then run one allowed altered fixture with \(\eta=0\) and explain its zero additive defect; retain that output separately. Hand work supports the explanation and does not waive either execution.
8. **Comparison and repair.** Retain first, public-comparison and revised responses, exposure/help declarations and run outputs. Repair one measure/regularity inference, one missing offset/axis/normalization condition, one scaling-direction error and one grid-to-universal inference. Name the first changed premise and every affected conclusion; use descriptive criteria, not a score.

## AF-SP-P001 — Primary reconstruction

Attempt all eight deliverables from the P001 row before opening this model.

### Primary complete model

**1. Regularity and classes.** An upper interval bound gives a two-sided bound near zero by subtracting the midpoint value; integer division gives continuity. Monotonicity bounds a smaller interval. For measurable additive functions, the bounded-level sets in \([-1,1]\) include one of finite positive measure; the interval-cover approximation, translation symmetric differences and overlap proof give a bounded neighbourhood. Each route then uses rational density. These are the complete arguments in **Regularity replaces an analytic assumption**, including the explicit choices of cover/error budget. Zero substitution in Pexider and midpoint doubling give the full classes \((A+b+c,A+b,A+c)\) and \(A+d\), with arbitrary additive \(A\) before regularity. Here \(L=2z_1-z_2\), \(f=L+1,g=L+3,h=L-2,J=L+3\); substitution proves the equations. The Zorn construction gives an all-real nonregular additive map; the quadratic-field clinic has a different, proper domain.

**2. Model and calibration.** The three readings are \(5/2,9/2,-1\). Their first difference gives \(a_1=2\); \(2F(e_1)-F(2e_1)=1/2\) gives \(\eta\); \(F(e_2)=-1\) gives \(a_2\). Coordinate decomposition plus scalar regularity proves the full exact nearby nonzero class and identifies \(M=x_1^2/x_2\). Signed variants multiply by either coordinate's sign character; all four choices preserve multiplication. None has a finite continuous extension at \((1,0)\), because its magnitude diverges there. The separate real zero branch has no logarithm. The two coordinate log-input rows are independent; without the universal law and regularity these records alone leave other functions. Ratios require fixed baseline measurements in the same units.

**3. Quadratic structure.** The separate-slice argument gives \(B=x^THy\); the subtracted parallelogram identities give its symmetric polarization, and continuity converts rational homogeneity to real homogeneity. Here \(H=(\begin{smallmatrix}2&1\\1&3\end{smallmatrix})\), determinant 5; the required values are \(7,3,-1\). Nonnegativity is proved exactly by
\(Q(z)=2(z_1+z_2/2)^2+(5/2)z_2^2\), strictly positive away from zero. Positivity did not follow just from the law; the changed form below fails it. Without regularity, \(A_*(x)A_*(y)\) and \(A_*(x)^2\) retain the algebraic laws without real bilinearity/continuous matrix classification.

**4. Uniform additive/log certificate.** The case proof for clipping gives global \(\delta=1/2\), sharp at \((e_1,e_1)\). The exact dyadic limit is \(L\), because the perturbation divided by \(2^n\) tends uniformly to zero. Summing doubling increments gives \(|F-L|\le1/2\) and tail \(2^{-n-1}\); scaled residuals give additivity, and scaling a difference proves uniqueness at finite uniform distance. Continuity gives real linearity. Thus \(e^{-1/2}\le T/(x_1^2/x_2)\le e^{1/2}\) for every positive input. At \((1,1)\), the four iterates are \(3/2,5/4,9/8,17/16\), with signed errors \(1/2,1/4,1/8,1/16\), exactly attaining the tail. This conclusion was not fitted from those four values.

**5. Uniform quadratic certificate.** \(G(0)=0\); the range \(0\le P\le1\) bounds its global defect by \(\Delta=1\). Doubling now uses division by four, whose geometric sum gives uniform error \(1/3\) and tail \(1/(3\,4^n)\). The limit is the continuous \(Q\) above, and exact doubling proves uniqueness at finite uniform distance. Its four iterates at \((1,1)\) are \(29/4,113/16,449/64,1793/256\). Signed errors are \(1/4,1/16,1/64,1/256\), all within the printed tails. For \(Q+1\), residual -2 and distance 1 disprove the unnormalized \(2/3\) claim.

**6. Transfers and critical case.** The zero-pair Pexider normalization contributes one error and the three residuals contribute three more: defect \(4\epsilon\), then bounds \(5\epsilon,6\epsilon,6\epsilon\). Midpoint doubling plus twice its residual gives \(4\epsilon\). At \(\epsilon=\delta=1/2\), the power-control constants are \(1/(2-\sqrt2)\) for \(p=1/2\) and \(1/2\) for \(p=2\), with upward and downward scaling respectively. These are separate theorems with their own global power-defect premises; the clipped \(F\)'s uniform premise is not silently substituted for them near zero. Their geometric sums, normalized defects and uniqueness differences are exactly those in **Scale-sensitive stability and the critical failure**. At \(p=1\), the entropy bound for equal signs and the difference-of-nonnegative-arguments bound for mixed signs prove the premise for \(t\log|t|\); the integer ratio diverges, so no finite critical approximation exists. Real linearity of the stable additive map still requires regularity.

**7. Required runs and interpretation.** The complete program and expected outputs below give this form's calibration, recovered parameters, eight structural values, six grid/global fields and four seven-field iterate rows. The first lexicographic maximizing pair is \((-2,-2)\); the signed additive defect is \(1/2\), quadratic defect \(-3/4\), with quadratic absolute maximum \(3/4\). This is below the proved safe global \(\Delta=1\). Run the original JSON and an additional P001 fixture with \(\eta=0\): calibration becomes \((2,4,-1)\), recovery \((2,-1,0)\), additive maximum/signed defect and every additive error/tail become zero, all \(F\) iterates become 1; quadratic outputs stay as printed. The retained actual output, comparison and explanation are required learner work.

**8. Repairs.** A dense set does not supply a measure-theoretic interval; the difference-set proof needs finite positive measurable size. The missing zero-axis limit prevents a false closed-quadrant model. Downward scaling belongs to \(p>1\), whereas uniform and subcritical additive scaling is upward. EX17 provides the actual continuous grid-passing nonlaw. Keep the first response, mark precisely which public proofs/outputs were opened, and revise the first invalid line and its consequences separately.

## AF-SP-P002 — Changed signs and an indefinite law

Close the primary model and complete all eight deliverables from the P002 row. Both perturbation signs, the exponents, offsets and quadratic matrix change.

### Changed complete model

**1. Regularity and classes.** The full scalar proofs remain the interval-midpoint bound with integer rescaling, a monotone subinterval bound, and measurable bounded-level sets followed by finite-union approximation/translation/overlap. Their hypotheses are unchanged and must be reconstructed, rather than inferred from changed numerical signs. The complete Pexider and midpoint classes remain additive-plus-offset; here \(L=-z_1+3z_2\), \(f=L+3,g=L-1,h=L+4,J=L-1\). Direct substitution gives the universal equations. The conditional Hamel construction still supplies an all-real counterexample when regularity is omitted; no extension of the clinic's quadratic-field map has been assumed.

**2. Model and calibration.** The readings \(-4/3,-7/3,3\) recover \(a_1=-1,a_2=3,\eta=-1/3\) by the same two independent coordinate calibrations and first-coordinate difference. The exact nearby monomial is \(M=x_2^3/x_1\); its exponent's negative sign does not invalidate positive-output multiplication. All four signed characters are possible on the nonzero domain. Every continuous-axis extension fails at \((0,1)\), where the magnitude diverges. The zero solution remains a separate branch. Coordinate decomposition proves completeness of the regular exact class; finite data and a rank calculation only identify its parameters after its hypotheses are stated.

**3. Quadratic structure.** \(H=(\begin{smallmatrix}1&2\\2&1\end{smallmatrix})\), determinant -3, and the probe values are \(6,-2,0\). The identity \(Q(z)=(z_1+z_2)^2+2z_1z_2\) or the witness \(Q(1,-1)=-2\) disproves nonnegativity; \(Q(1,1)=6\) also shows both signs occur. Bilinear and polarization proofs classify this matrix law just as before. A zero cross-probe \(B((1,1),(1,-1))\) does not make the whole bilinear map zero. Dropping regularity admits rational-bilinear pathologies; dropping a positive-energy modelling condition admits this exact indefinite example.

**4. Uniform additive/log certificate.** Sharp global \(\delta=1/3\) follows from the same clipping inequality after multiplication by \(|\eta|\). The limit is \(L\), the all-domain error is at most \(1/3\), and \(e^{-1/3}\le T/(x_2^3/x_1)\le e^{1/3}\). The four iterates are \(5/3,11/6,23/12,47/24\); signed errors are \(-1/3,-1/6,-1/12,-1/24\), with absolute values equal to the tail. Negative perturbation does not make a norm/error bound negative. The dyadic Cauchy sum proves existence, vanishing normalized defects prove additivity, continuity proves real linearity and dyadic uniqueness proves the exact limit is the only finite-distance additive law.

**5. Uniform quadratic certificate.** Normalized continuous \(G\) has safe global \(\Delta=2\). Its continuous quadratic limit is the indefinite \(Q\); stability does not repair positivity. The four iterates are \(11/2,47/8,191/32,767/128\), with signed errors \(-1/2,-1/8,-1/32,-1/128\), and tails \(2/3,1/6,1/24,1/96\). The 4-adic geometric sum, scaled residual and exact-law doubling supply existence, the \(2/3\) uniform error, and uniqueness. The \(Q+1\) residual is still -2 and still invalidates a normalized bound applied without \(q(0)=0\).

**6. Transfers and critical case.** Reconstruct the \(4\epsilon\) additive normalization, Pexider \(5/6/6\) bounds and midpoint \(4\epsilon\) bound with the offsets retained. At \(\epsilon=1/3\), the subcritical constant is \(2/[3(2-\sqrt2)]\); the supercritical \(p=2\) constant is \(1/3\). Use the upward/downward geometric sums respectively and scale the difference of two candidates for uniqueness. These are conditional power-defect results, separate from this instance's uniform certificate. The critical \(t\log|t|\) proof includes same signs, opposite signs and zero; its integer obstruction rules out every additive weighted approximant, even without assuming continuity. Regularity is still needed to replace “additive” by “real linear”.

**7. Required runs and interpretation.** The program's first maximizing pair is again \((-2,-2)\), with signed additive defect \(-1/3\), quadratic defect \(3/2\), quadratic maximum \(3/2\) and safe global bound 2. Run and compare every printed output. For an additional P002 fixture with \(\eta=0\), calibration is \((-1,-2,3)\), recovery \((-1,3,0)\); all additive defects/errors/tails vanish and every \(F\) iterate is 2. The quadratic ledger is unchanged. The two actual runs are required; a manually copied expected table alone does not reproduce them.

**8. Repairs.** Retain the measure proof rather than replacing it by density. A negative exponent prevents a particular axis limit, while a negative perturbation merely reverses signed errors. The indefinite matrix satisfies the equation and fails an additional positivity requirement. Restore the normalized doubling step, correct the \(p>1\) scaling direction, and use EX17 when a grid fit was treated as a theorem. Preserve the original and revised arguments and exposure log.

## AF-SP-R001 — Public return with zero limit and a degenerate form

At another sitting close earlier models and reconstruct all eight deliverables from the R001 row. Record earlier answer/help exposure; neither a delay nor unseen work is verified.

### Return complete model

**1. Regularity and classes.** Reconstruct all three replacements using the complete interval, monotone and measure/difference-set proofs. The exact Pexider triple is now \(f=0,g=2,h=-2\), and \(J=2\). Their offsets cancel in the equation but must not be erased from its separate components. The full unregular classes still contain every additive \(A\); the all-real choice construction is a genuine alternative, distinct from the clinic's proper dense domain. This form's exact additive limit is zero because its recovered slopes are zero, not because every bounded observation must be zero.

**2. Model and calibration.** The readings are \(1/4,1/4,0\), giving \(a_1=0,a_2=0,\eta=1/4\). Thus the stable exact monomial is \(M=1\). It has a continuous positive closed-quadrant extension equal to 1, including both axes. On the signed nonzero domain there are still four characters. Only the trivial character extends continuously to the whole plane when both exponents are zero; any nontrivial coordinate sign has incompatible limits. The real zero branch is different from \(M=1\). Independent calibration rows and coordinate regularity identify this limit, while finite data alone do not establish the assumed universal law.

**3. Quadratic structure.** \(H=(\begin{smallmatrix}1&-1\\-1&1\end{smallmatrix})\), determinant zero, and \(Q(z)=(z_1-z_2)^2\). The required values are \(0,4,0\). The form is nonnegative and vanishes on the entire diagonal line; zero at the first probe does not make it identically zero. Separate regularity and polarization prove the same complete real-matrix class. Degeneracy, nonnegativity and exact satisfaction of a functional law are separate claims; a missing regularity hypothesis still permits \(A_*^2\).

**4. Uniform additive/log certificate.** The perturbation is nonzero although the exact limit \(L=0\). Sharp global \(\delta=1/4\), the Cauchy sum and scaled residual give \(|F|\le1/4\), unique additive finite-distance limit zero, and \(e^{-1/4}\le T\le e^{1/4}\). The four iterates at \((1,1)\) are \(1/4,1/8,1/16,1/32\), exactly the signed errors and tails. In particular \(T\) itself is not the constant exact law: its log residual at \((e_1,e_1)\) is \(-1/4\). Continuity justifies real linearity of the limit.

**5. Uniform quadratic certificate.** \(\kappa=0\), so \(G=Q\) and \(\Delta=0\). Every 4-adic iterate at \((1,1)\), signed error and certified tail is zero. The vanishing residual holds for every pair by matrix expansion, not because the probe vanishes. Normalized stability proves uniqueness among finite-distance exact laws; \(Q+1\) still has residual -2 and shows why normalization matters. The rank-one nonnegative law does not become positive definite.

**6. Transfers and critical case.** Pexider normalization still uses offsets 2 and -2 even though their sum is zero. The approximate \(5/6/6\) and midpoint \(4\epsilon\) arguments are unchanged. At \(\epsilon=1/4\), the power-control constants are \(1/[2(2-\sqrt2)]\) and \(1/4\), using upward \(p=1/2\) and downward \(p=2\) scaling. Their global premises remain explicit. The all-real critical example satisfies its entropy defect bound for mixed signs and zero as well as positive arguments, yet the positive-integer ratio prevents a finite \(p=1\) approximation. Approximate additivity alone remains weaker than real linearity.

**7. Required runs and interpretation.** The first grid maximizing pair is \((-2,-2)\), signed additive defect \(1/4\). All quadratic residuals vanish; the reference's explicit first-pair tie rule still reports \((-2,-2)\), signed value zero. Run the complete supplied JSON and then the R001 fixture with \(\eta=0\). Its calibration/recovery are all zero, \(F\) and its defects/iterates/errors/tails are all zero; structural offsets and the rank-one quadratic outputs remain as printed. Distinguish a zero maximum with a tie from a missing computation.

**8. Repairs.** A zero slope can coexist with nonzero bounded approximate data; a zero quadratic probe can coexist with a nonzero rank-one law. Restore offsets before classifying Pexider, require trivial signs for a zero-exponent axis extension, and retain normalized doubling. Reconstruct the real measure bridge, correct the scaling direction, and reject a grid-to-universal inference using EX17's polynomial. Save the return's first/comparison/revised files with its prior exposure and concrete changed lines.

## Mandatory bounded software reference and complete expected output

Use Node.js 20.19 or newer, with its standard library and no dependencies. Save the following complete JavaScript block as a learner-owned `functions-specialist-reference.mjs` and the following JSON block as `functions-specialist-input.json`. In a fresh process run `node functions-specialist-reference.mjs < functions-specialist-input.json` and retain its standard output in the form's run record. Run again after setting each form's `eta` to `"0"`, preserving the original input and output. These executions are mandatory; hand calculations do not waive them. No browser, network, installation, symbolic package or project import is involved.

The program accepts 1–3 unique allowed forms, at most 4,096 input bytes, exactly the named parsed-object fields, rational strings with numerator magnitude at most 100 and positive denominator at most 100, and integer `N` from 0 through 8. Its work is bounded by 25 grid pairs and at most nine iterate rows per form. Field validation applies to the object produced by ordinary JSON.parse; duplicate raw member names follow its last-value rule. It validates the whole parsed request before printing one JSON result; invalid requests produce no partial result. It evaluates only the fixed continuous formulas above, so `G(0)=0` is enforced by construction in primary, changed, return and allowed altered fixtures. It is not a general function parser, a proof checker or an evaluator of a Hamel basis.

```javascript
// AF-SP-REFERENCE-BEGIN
import { stdin, stdout, stderr } from 'node:process';
const fail = () => { throw new Error('Invalid bounded input'); };
const gcd = (a, b) => { a = a < 0n ? -a : a; while (b) [a, b] = [b, a % b]; return a; };
class Q {
  constructor(n, d = 1n) {
    n = BigInt(n); d = BigInt(d); if (!d) fail();
    if (d < 0n) { n = -n; d = -d; }
    const g = gcd(n, d); this.n = n / g; this.d = d / g;
  }
  add(v) { return new Q(this.n * v.d + v.n * this.d, this.d * v.d); }
  sub(v) { return new Q(this.n * v.d - v.n * this.d, this.d * v.d); }
  mul(v) { return new Q(this.n * v.n, this.d * v.d); }
  div(v) { return new Q(this.n * v.d, this.d * v.n); }
  abs() { return new Q(this.n < 0n ? -this.n : this.n, this.d); }
  cmp(v) { const t = this.n * v.d - v.n * this.d; return t < 0n ? -1 : t > 0n ? 1 : 0; }
  toString() { return this.d === 1n ? String(this.n) : this.n + '/' + this.d; }
}
const q = n => new Q(n), zero = q(0), one = q(1);
function parseQ(s) {
  if (typeof s !== 'string' || s.length > 12 || !/^-?\d+(?:\/\d+)?$/.test(s)) fail();
  const [ns, ds = '1'] = s.split('/'), n = BigInt(ns), d = BigInt(ds);
  if (n < -100n || n > 100n || d < 1n || d > 100n) fail();
  return new Q(n, d);
}
const fields = ['a1', 'a2', 'eta', 'kappa', 'h11', 'h12', 'h22', 'b', 'c'];
function validate(raw) {
  if (!Array.isArray(raw) || raw.length < 1 || raw.length > 3) fail();
  const seen = new Set(), expected = ['id', ...fields, 'N'].sort().join(',');
  return raw.map(row => {
    if (!row || typeof row !== 'object' || Array.isArray(row) || Object.keys(row).sort().join(',') !== expected) fail();
    if (typeof row.id !== 'string' || !/^AF-SP-(?:P001|P002|R001)$/.test(row.id) || seen.has(row.id)) fail();
    if (!Number.isInteger(row.N) || row.N < 0 || row.N > 8) fail();
    seen.add(row.id);
    return {id: row.id, N: row.N, ...Object.fromEntries(fields.map(k => [k, parseQ(row[k])]))};
  });
}
const clip = t => t.cmp(one) > 0 ? one : t.cmp(q(-1)) < 0 ? q(-1) : t;
function render(r) {
  const L = (u, v) => r.a1.mul(u).add(r.a2.mul(v));
  const F = (u, v) => L(u, v).add(r.eta.mul(clip(u)));
  const quad = (u, v) => r.h11.mul(u.mul(u)).add(q(2).mul(r.h12).mul(u).mul(v)).add(r.h22.mul(v.mul(v)));
  const G = (u, v) => quad(u, v).add(r.kappa.mul(clip(u).mul(clip(u))));
  if (G(zero, zero).cmp(zero) !== 0) fail();
  const calibration = [F(one, zero), F(q(2), zero), F(zero, one)];
  const recovered = [calibration[1].sub(calibration[0]), calibration[2], q(2).mul(calibration[0]).sub(calibration[1])];
  const lx = L(one, one), qx = quad(one, one), qy = quad(one, q(-1));
  const structure = [lx, lx.add(r.b).add(r.c), lx.add(r.b), lx.add(r.c), qx, qy,
    r.h11.sub(r.h22), r.h11.mul(r.h22).sub(r.h12.mul(r.h12))];
  let add = null, quadratic = null;
  function update(best, value, s, t) {
    return best === null || value.abs().cmp(best.max) > 0 ? {max: value.abs(), signed: value, pair: [s, t]} : best;
  }
  for (let s = -2; s <= 2; s++) for (let t = -2; t <= 2; t++) {
    const u = q(s), v = q(t);
    const d = F(u.add(v), zero).sub(F(u, zero)).sub(F(v, zero));
    const e = G(u.add(v), zero).add(G(u.sub(v), zero)).sub(q(2).mul(G(u, zero))).sub(q(2).mul(G(v, zero)));
    add = update(add, d, s, t); quadratic = update(quadratic, e, s, t);
  }
  const delta = r.eta.abs(), Delta = q(4).mul(r.kappa.abs());
  const iterates = [];
  for (let n = 0; n <= r.N; n++) {
    const two = q(2n ** BigInt(n)), four = two.mul(two);
    const fn = F(two, two).div(two), gn = G(two, two).div(four);
    iterates.push([n, ...[fn, fn.sub(lx), delta.div(two), gn, gn.sub(qx), Delta.div(q(3).mul(four))].map(String)]);
  }
  return {id: r.id, calibration: calibration.map(String), recovered: recovered.map(String),
    structure: structure.map(String),
    defects: [add.max, add.signed, quadratic.max, quadratic.signed, delta, Delta].map(String),
    witnesses: [add.pair, quadratic.pair], iterates};
}
try {
  let bytes = 0; const chunks = [];
  for await (const chunk of stdin) { bytes += chunk.length; if (bytes > 4096) fail(); chunks.push(chunk); }
  const raw = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  const forms = validate(raw), result = forms.map(render);
  stdout.write(JSON.stringify(result, null, 2) + '\n');
} catch {
  stderr.write('Invalid bounded input\n'); process.exitCode = 1;
}
// AF-SP-REFERENCE-END
```

```json
[
  {"id":"AF-SP-P001","a1":"2","a2":"-1","eta":"1/2","kappa":"1/4","h11":"2","h12":"1","h22":"3","b":"3","c":"-2","N":3},
  {"id":"AF-SP-P002","a1":"-1","a2":"3","eta":"-1/3","kappa":"-1/2","h11":"1","h12":"2","h22":"1","b":"-1","c":"4","N":3},
  {"id":"AF-SP-R001","a1":"0","a2":"0","eta":"1/4","kappa":"0","h11":"1","h12":"-1","h22":"1","b":"2","c":"-2","N":3}
]
```

The following tables give analytically derived reference values and specify **every output field**, in program order. Rational strings are reduced; mathematical zero is always `"0"`. Whitespace in the JSON rendering has no mathematical meaning. Each form has `witnesses: [[-2,-2],[-2,-2]]`, including the all-zero quadratic tie in R001. The loop orders pairs lexicographically and replaces a maximum only on strict improvement. The fixed original JSON yields exactly the three IDs in the input order.

| Form | F(e1) | F(2e1) | F(e2) | recovered a1 | recovered a2 | recovered eta |
| --- | --- | --- | --- | --- | --- | --- |
| AF-SP-P001 | 5/2 | 9/2 | -1 | 2 | -1 | 1/2 |
| AF-SP-P002 | -4/3 | -7/3 | 3 | -1 | 3 | -1/3 |
| AF-SP-R001 | 1/4 | 1/4 | 0 | 0 | 0 | 1/4 |

Here \(x=(1,1),y=(1,-1)\); the eight `structure` fields follow the table order.

| Form | L(x) | f(x) | g(x) | h(x) | Q(x) | Q(y) | B(x,y) | det H |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AF-SP-P001 | 1 | 2 | 4 | -1 | 7 | 3 | -1 | 5 |
| AF-SP-P002 | 2 | 5 | 1 | 6 | 6 | -2 | 0 | -3 |
| AF-SP-R001 | 0 | 0 | 2 | -2 | 0 | 4 | 0 | 0 |

The six `defects` fields distinguish a finite maximum from a proved global bound. Signed fields are residuals at the recorded first maximizing pair.

| Form | add max | add signed | quad max | quad signed | delta | Delta |
| --- | --- | --- | --- | --- | --- | --- |
| AF-SP-P001 | 1/2 | 1/2 | 3/4 | -3/4 | 1/2 | 1 |
| AF-SP-P002 | 1/3 | -1/3 | 3/2 | 3/2 | 1/3 | 2 |
| AF-SP-R001 | 1/4 | 1/4 | 0 | 0 | 1/4 | 0 |

Every `iterates` row has the integer index followed by six rational strings. Errors are **signed** differences from \(L(x)\) and \(Q(x)\); compare their absolute values with the nonnegative tails.

| Form | n | F_n | signed F error | F tail | G_n | signed G error | G tail |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AF-SP-P001 | 0 | 3/2 | 1/2 | 1/2 | 29/4 | 1/4 | 1/3 |
| AF-SP-P001 | 1 | 5/4 | 1/4 | 1/4 | 113/16 | 1/16 | 1/12 |
| AF-SP-P001 | 2 | 9/8 | 1/8 | 1/8 | 449/64 | 1/64 | 1/48 |
| AF-SP-P001 | 3 | 17/16 | 1/16 | 1/16 | 1793/256 | 1/256 | 1/192 |
| AF-SP-P002 | 0 | 5/3 | -1/3 | 1/3 | 11/2 | -1/2 | 2/3 |
| AF-SP-P002 | 1 | 11/6 | -1/6 | 1/6 | 47/8 | -1/8 | 1/6 |
| AF-SP-P002 | 2 | 23/12 | -1/12 | 1/12 | 191/32 | -1/32 | 1/24 |
| AF-SP-P002 | 3 | 47/24 | -1/24 | 1/24 | 767/128 | -1/128 | 1/96 |
| AF-SP-R001 | 0 | 1/4 | 1/4 | 1/4 | 0 | 0 | 0 |
| AF-SP-R001 | 1 | 1/8 | 1/8 | 1/8 | 0 | 0 | 0 |
| AF-SP-R001 | 2 | 1/16 | 1/16 | 1/16 | 0 | 0 | 0 |
| AF-SP-R001 | 3 | 1/32 | 1/32 | 1/32 | 0 | 0 | 0 |

For the required second run, change only `eta` to `"0"` in all three rows. The complete output is determined as follows: every `structure` field, every quadratic maximum/signed value/global bound/iterate/error/tail, all IDs and both witness pairs remain exactly as above; `calibration` becomes `["2","4","-1"]`, `["-1","-2","3"]`, `["0","0","0"]` respectively; `recovered` becomes `["2","-1","0"]`, `["-1","3","0"]`, `["0","0","0"]`. Each additive maximum, signed residual, `delta`, iterate error and tail is `"0"`; each of its four `F_n` fields is respectively `"1"`, `"2"`, `"0"`. This specifies every field of the second fixed output without concealing unchanged values behind a new estimate.

For each form compare actual standard output with every one of these fields, not just a success message. If a row differs, preserve the first run, locate the first differing field and input, and retain a corrected rerun separately. The finite residual maximum is a reproducible audit. EX17 proves why a grid-passing alternative can still fail globally; the universal certificates here come from the clipping, bounded-square and scaling proofs.

## Feedback, retained records, and completion

Use descriptive feedback after each first attempt and each comparison. A convincing proof names its universal domain and hypotheses, proves necessity and converse where classifying, and exposes the step where regularity or a limit enters.

| Evidence needed | Concrete repair before proceeding |
| --- | --- |
| Interval, monotone and measurable regularity replacements | Supply the interval midpoint bound and integer rescaling; in the measure route restore finite positive measurable level sets, finite-union approximation, translation measurability and overlap. Density alone is insufficient |
| All-real and proper-dense pathologies | State Zorn's choice input, finite rational expansions and the discontinuity sequence for all-real existence; keep AF-SCALE-R's smaller domain explicit |
| Pexider and Jensen classes | Recover zero offsets before subtraction; prove midpoint doubling and additivity; distinguish rational affine combinations from real ones |
| Multivariable and signed modelling | State coordinate-slice regularity, actual codomain, zero branch, sign character and every axis limit; check calibration rank only after the universal model premise |
| Bilinear and quadratic classification | Derive additivity of polarization and real homogeneity; keep continuity, symmetry, nonnegativity and positive definiteness separate |
| Uniform stability | Prove Cauchy sums, vanishing normalized defects and uniqueness among finite-distance exact laws; use \(q(0)=0\) before quadratic doubling |
| Power control and critical failure | Use the direction whose geometric ratio is below one; derive the constants and uniqueness; prove the critical example's global mixed-sign premise before its integer obstruction |
| Mandatory program and both fixed outputs | Retain actual fresh-process runs, every field comparison and any correction; distinguish signed errors, absolute maxima and safe global bounds |
| Primary, changed and later return | Recompute signs, offsets, zero limit and rank-one return; state the first altered premise and all downstream effects instead of copying the primary answer |

Keep separately named learner-owned files such as `AF-SP-P001-first.txt`, `AF-SP-P001-comparison.txt`, `AF-SP-P001-revised.txt`, and corresponding changed/return files. At each comparison record the exact source/question, public models or reference code opened, other help, the first differing or invalid line, and the reason for each revision. Retain the original JSON, altered JSON and both actual run outputs with those worksheets. A date or closed-key declaration does not establish an enforced delay or unseen performance.

The worksheet portfolio guide explains manual retention and recovery. The shared reading note is one mutable string. This native course creates no shared writing contract, automatic immutable worksheet history or graded Practice record. Shared backup does not automatically include learner-owned files or every native store: keep and reopen the files in a second location you control, and export/check each relevant existing store separately. Preserve first attempts and exposure declarations when restoring; a revised file must not silently replace the first response.

Finish after all exact source assignments, diagnostic repairs, eighteen local questions, all twenty-four cumulative deliverables, both mandatory software runs and public comparisons/revisions are complete. The course supplies the sustained specialist functional/algebraic modelling strand stated at the beginning, including wider regularity, multivariable laws and stability. General infinite-dimensional stability, noncommutative equations, complex-valued character theory and statistical inference from noisy measured records require further teaching and are not conclusions of this real finite-dimensional sequence. Public references and study marks certify none of those additional claims.
