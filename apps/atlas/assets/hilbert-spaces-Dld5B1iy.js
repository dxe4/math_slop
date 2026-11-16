var e=`---
parent_id: book-functional-analysis
chapter_id: hilbert-spaces
title: "Hilbert Spaces and Orthogonal Projection"
level: graduate
license: CC BY-SA 4.0
---

# Hilbert Spaces and Orthogonal Projection

A Banach norm controls size and convergence but need not provide a notion of perpendicularity. An inner product adds angles, orthogonal decompositions and exact error identities. When its norm is complete, a remarkable geometric fact becomes available: every nonempty closed convex set has a unique nearest point to any given vector. For a closed linear subspace, nearest-point approximation is a bounded linear projection.

Read [Normed and Banach Spaces](normed-banach-spaces.md) and [Bounded Operators](bounded-operators-duals.md). The sequence space \\(\\ell^2\\) was proved complete there. Measure and Integration supplies the analogous completeness statement for measure-based \\(L^2\\) examples when that prerequisite route is complete. The results here are proved abstractly and can already be applied to \\(\\ell^2\\) and finite-dimensional Euclidean spaces.

We fix the complex inner-product convention once: it is **linear in the first argument** and conjugate linear in the second. This matters in projection coefficients and in the functional representation theorem of the next chapter. A different convention is legitimate, but mixing conventions inside one argument changes conjugates and produces incorrect formulas.

## Inner products control norms and angles

**Definition 7.1 (Inner product and Hilbert space).** An inner product on a real or complex vector space is a scalar function \\(\\langle x,y\\rangle\\) linear in its first argument, conjugate symmetric, and positive definite: \\(\\langle x,x\\rangle>0\\) for nonzero \\(x\\). The associated norm is \\(\\|x\\|=\\sqrt{\\langle x,x\\rangle}\\). A Hilbert space is complete in that norm.

**Theorem 7.2 (Cauchy–Schwarz).** One has \\(|\\langle x,y\\rangle|\\le\\|x\\|\\|y\\|\\), with equality exactly when the two vectors are linearly dependent, including a zero vector.

*Proof.* If \\(y=0\\), the assertion is immediate. Otherwise put \\(a=\\langle x,y\\rangle/\\|y\\|^2\\). Positivity gives
\\[
 0\\le\\|x-ay\\|^2
 =\\|x\\|^2-\\frac{|\\langle x,y\\rangle|^2}{\\|y\\|^2}.
\\]
Rearrange and take square roots. Equality is equivalent to \\(\\|x-ay\\|=0\\), so \\(x=ay\\). Conversely a scalar multiple gives equality directly. ∎

The inner-product norm satisfies triangle inequality because
\\(\\|x+y\\|^2\\le\\|x\\|^2+2\\|x\\|\\|y\\|+\\|y\\|^2\\). The other norm axioms follow from positivity and scalar homogeneity. Cauchy–Schwarz also proves joint continuity of the inner product by splitting an error into two terms and using boundedness of convergent vectors.

**Definition 7.3 (Orthogonality).** Vectors are orthogonal if \\(\\langle x,y\\rangle=0\\). For a set \\(M\\), its orthogonal complement is \\(M^\\perp=\\{x:\\langle x,m\\rangle=0\\text{ for all }m\\in M\\}\\). It is a closed linear subspace, since it is an intersection of kernels of continuous linear functionals in the variable \\(x\\).

Orthogonal vectors obey Pythagoras: \\(\\|x+y\\|^2=\\|x\\|^2+\\|y\\|^2\\). In complex spaces requiring only the real part of the inner product to vanish would be weaker and would not give the usual complex orthogonal complement. Testing both a direction and its multiple by \\(i\\) removes that ambiguity in projection arguments.

## Which norms come from inner products?

An inner-product norm satisfies the parallelogram identity
\\[
 \\|x+y\\|^2+\\|x-y\\|^2=2\\|x\\|^2+2\\|y\\|^2.
\\]
The cross terms cancel on expansion. The converse is useful because it characterizes the extra geometry solely in terms of a norm.

**Theorem 7.4 (Polarization criterion).** A norm is induced by an inner product if and only if it satisfies the parallelogram identity. The inner product is then uniquely determined by the norm.

*Proof.* Necessity was just proved. For sufficiency work first over real scalars and set \\(q(x)=\\|x\\|^2\\),
\\[
 B(x,y)=\\tfrac14[q(x+y)-q(x-y)].
\\]
This expression is symmetric, continuous and odd in either argument. Applying the parallelogram identity twice gives
\\(B(x+z,y)+B(x-z,y)=2B(x,y)\\). Taking \\(z=x\\) yields \\(B(2x,y)=2B(x,y)\\). Replace \\(x,z\\) in the first identity by \\((u+v)/2,(u-v)/2\\); the doubling relation then gives \\(B(u,y)+B(v,y)=B(u+v,y)\\). Additivity gives rational homogeneity, and continuity extends it to real homogeneity. Symmetry gives bilinearity. Also \\(B(x,x)=q(x)\\), so positivity and definiteness hold.

In the complex case regard the space as real and use this real inner product \\(B\\). Since \\(q(ix)=q(x)\\), its formula gives \\(B(ix,iy)=B(x,y)\\), hence \\(B(ix,y)=-B(x,iy)\\). Define
\\[
 \\langle x,y\\rangle=B(x,y)+iB(x,iy).
\\]
Real bilinearity and those identities prove linearity in the first argument under multiplication by \\(i\\), and thus under every complex scalar. Symmetry of \\(B\\) gives conjugate symmetry. Further \\(B(x,ix)=0\\), so \\(\\langle x,x\\rangle=B(x,x)=q(x)\\). This is the required inner product. The defining real formula and its complex imaginary counterpart are forced by expanding any inner product that induces the norm, proving uniqueness. ∎

**Worked example 7.5 (The one-norm is not Hilbert geometry).** In \\(\\mathbb R^2\\) with the one-norm take \\(x=(1,0)\\), \\(y=(0,1)\\). The left side of the parallelogram identity is \\(2^2+2^2=8\\), while the right side is \\(2+2=4\\). Thus this norm cannot be induced by any inner product, even though the vector space is finite dimensional and complete. Equivalent norms can give the same topology while only one of them has exact orthogonal geometry.

## The nearest-point theorem

**Theorem 7.6 (Projection onto a closed convex set).** In a Hilbert space, every nonempty closed convex set \\(C\\) has a unique nearest point \\(p\\) to any \\(x\\). It is characterized by
\\[
 \\operatorname{Re}\\langle x-p,y-p\\rangle\\le0
 \\quad\\text{for all }y\\in C.
\\]

*Proof.* Let \\(d=\\inf_{y\\in C}\\|x-y\\|\\) and choose \\(y_n\\in C\\) with \\(\\|x-y_n\\|\\to d\\). Convexity puts every midpoint in \\(C\\). The parallelogram identity therefore gives
\\[
 \\|y_n-y_m\\|^2
 =2\\|x-y_n\\|^2+2\\|x-y_m\\|^2
 -4\\left\\|x-\\frac{y_n+y_m}{2}\\right\\|^2
 \\le2\\|x-y_n\\|^2+2\\|x-y_m\\|^2-4d^2.
\\]
The last expression tends to zero, so the sequence is Cauchy. Completeness gives a limit \\(p\\), and closedness puts it in \\(C\\); continuity gives \\(\\|x-p\\|=d\\). If \\(p,q\\) both minimize, the same midpoint estimate gives \\(\\|p-q\\|^2\\le0\\), proving uniqueness.

For any \\(y\\in C\\) and \\(0<t\\le1\\), the point \\(p+t(y-p)\\) lies in \\(C\\). Expanding the distance inequality yields
\\[
 -2t\\operatorname{Re}\\langle x-p,y-p\\rangle+t^2\\|y-p\\|^2\\ge0.
\\]
Divide by \\(t\\) and let it decrease to zero, proving the characterization's necessity. Conversely that inequality at \\(p\\), for all \\(y\\), makes
\\(\\|x-y\\|^2=\\|x-p\\|^2-2\\operatorname{Re}\\langle x-p,y-p\\rangle+\\|y-p\\|^2\\ge\\|x-p\\|^2\\). Thus it is sufficient. ∎

Every assumption has a visible role. Convexity supplies midpoints and the comparison segments. Completeness supplies the Cauchy limit. Closedness keeps it in the feasible set. For the open unit ball, a point outside it can have its best distance approached but never attained. For a nonconvex two-point set, a midpoint outside the set can have two nearest points. Those are failures of the stated hypotheses, not exceptions to the proof.

## Orthogonal decomposition and linear projection

**Corollary 7.7 (Closed subspace projection).** If \\(M\\) is a closed linear subspace of a Hilbert space, every \\(x\\) decomposes uniquely as
\\[
 x=P_Mx+r,\\qquad P_Mx\\in M,\\quad r\\in M^\\perp.
\\]
The map \\(P_M\\) is linear, has \\(P_M^2=P_M\\), and satisfies \\(\\|P_M\\|\\le1\\). If \\(M\\ne\\{0\\}\\), its norm is one.

*Proof.* Apply Theorem 7.6. Its inequality with \\(y=p+tm\\) for arbitrary real \\(t\\) gives \\(\\operatorname{Re}\\langle x-p,m\\rangle=0\\). In the complex case test \\(im\\) too, giving also the imaginary part zero. Thus the residual is orthogonal to \\(M\\). A decomposition with that property minimizes distance by Pythagoras and is unique. Adding and scaling decompositions then proves linearity by uniqueness. Vectors already in \\(M\\) are fixed, giving idempotence. Pythagoras gives \\(\\|P_Mx\\|^2\\le\\|x\\|^2\\), and a unit vector in nonzero \\(M\\) gives norm one. ∎

The projection also satisfies \\(\\langle P_Mx,y\\rangle=\\langle x,P_My\\rangle\\): decompose both vectors and discard the orthogonal cross terms. It is therefore self-adjoint in the Hilbert sense. The general construction and properties of adjoints follow from Riesz representation in the next chapter; here the displayed identity is proved directly for this particular operator.

**Worked example 7.8 (Least-squares approximation on a line).** In \\(\\mathbb R^2\\), approximate \\(x=(3,1)\\) by the line spanned by \\(v=(1,2)\\). Orthogonality requires \\(\\langle x-av,v\\rangle=0\\), so
\\[
 a=\\frac{\\langle x,v\\rangle}{\\|v\\|^2}=\\frac55=1.
\\]
The projection is \\((1,2)\\), with residual \\((2,-1)\\) perpendicular to the line and distance \\(\\sqrt5\\). For any other coefficient \\(b\\), Pythagoras gives squared error \\(5+5|b-1|^2\\), proving both optimality and uniqueness rather than merely solving a stationary equation.

**Worked example 7.9 (Keeping selected coordinates).** In \\(\\ell^2\\), let \\(M\\) consist of sequences whose odd coordinates vanish. It is closed because norm convergence implies convergence of each coordinate. Projecting onto it retains even coordinates and deletes odd ones. The residual has only odd coordinates, so its inner product with every member of \\(M\\) is zero. The squared best error is \\(\\sum_{k\\ge1}|x_{2k-1}|^2\\). The existence of this infinite-coordinate projection rests on completeness and closedness, not on solving an infinite finite-dimensional matrix system by analogy.

The sequence inner product used here is \\(\\sum x_n\\overline{y_n}\\). Its absolute convergence follows from Cauchy–Schwarz for finite sums and a bound on their increasing absolute sums. The preceding completeness proof for \\(\\ell^2\\) makes it a Hilbert space. A measure-based \\(L^2\\) model uses the same geometry after measurability, integrability and completeness have been established in the measure course.

## Convex projections are stable but need not be linear

**Proposition 7.10 (Nonexpansive convex projection).** For a nonempty closed convex set, its nearest-point map satisfies
\\[
 \\|P_Cx-P_Cy\\|\\le\\|x-y\\|.
\\]

*Proof.* Put \\(p=P_Cx\\), \\(q=P_Cy\\). The two variational inequalities give \\(\\operatorname{Re}\\langle x-p,q-p\\rangle\\le0\\) and \\(\\operatorname{Re}\\langle y-q,p-q\\rangle\\le0\\). Subtract in the common direction \\(p-q\\) to obtain
\\[
 \\|p-q\\|^2\\le\\operatorname{Re}\\langle x-y,p-q\\rangle
 \\le\\|x-y\\|\\|p-q\\|.
\\]
If the last norm is zero the result is immediate; otherwise divide by it. ∎

For the closed half-plane \\(C=\\{(s,t):s\\ge0\\}\\), the nearest-point map is \\((s,t)\\mapsto(\\max(s,0),t)\\). Minimization separates the coordinates: the second stays unchanged, and the first is clipped to its allowed half-line. This map is continuous and nonexpansive but not linear, since projection of a negative first-coordinate vector does not equal the negative projection of its opposite. Closed convex geometry supplies existence and stability; the linear-subspace assumption supplies linearity.

## Normal equations for a finite approximation space

Projection can be computed without first finding an orthonormal basis. Let \\(v_1,\\ldots,v_n\\) be linearly independent vectors and \\(M\\) their span, a closed finite-dimensional subspace. Write a candidate projection as \\(p=\\sum_k a_kv_k\\). Orthogonality of the residual gives the normal equations
\\[
 \\sum_{k=1}^n\\langle v_k,v_j\\rangle a_k=\\langle x,v_j\\rangle
 \\quad(1\\le j\\le n).
\\]
Define the Gram matrix by \\(G_{jk}=\\langle v_k,v_j\\rangle\\). The placement of indices follows the convention that the inner product is linear in the first argument.

**Proposition 7.11 (Gram-system uniqueness).** The Gram matrix is Hermitian positive definite, and the normal equations have one unique solution giving the orthogonal projection onto \\(M\\).

*Proof.* Conjugate symmetry gives \\(G_{jk}=\\overline{G_{kj}}\\). For a coefficient column \\(a\\),
\\[
 a^*Ga=\\left\\|\\sum_k a_kv_k\\right\\|^2.
\\]
Independence makes this positive for every nonzero coefficient column. Thus the matrix has trivial kernel and is invertible by finite-dimensional linear algebra. Its unique solution makes the residual perpendicular to each basis vector and hence to their span. The orthogonal-decomposition characterization proves it is precisely the nearest point. ∎

**Worked example 7.12 (A two-dimensional fit in three dimensions).** In \\(\\mathbb R^3\\), take \\(v_1=(1,0,1)\\), \\(v_2=(0,1,1)\\), and \\(x=(1,1,0)\\). The Gram matrix and data are
\\[
 G=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix},\\qquad b=\\begin{pmatrix}1\\\\1\\end{pmatrix}.
\\]
Solving gives \\(a_1=a_2=1/3\\). Therefore \\(p=(1/3,1/3,2/3)\\), and the residual is \\((2/3,2/3,-2/3)\\), orthogonal to both spanning vectors. Its squared norm is \\(4/3\\). For every other candidate \\(q\\in M\\), Pythagoras gives \\(\\|x-q\\|^2=4/3+\\|p-q\\|^2\\), explicitly certifying the minimum.

This construction explains least squares geometrically. The normal equations express orthogonality, and positive definiteness expresses independence of the approximation directions. If the spanning list is dependent, coefficient uniqueness can fail even though the projected vector remains unique. Numerical sensitivity of the Gram system is another question: algebraic invertibility alone gives no promise that finite-precision elimination is well conditioned. An orthonormal basis, developed next, replaces the Gram solve by direct coefficient measurements and provides exact finite-error identities.

## Affine constraints and the shortest solution

For an affine subspace \\(a+M\\), with \\(M\\) closed, nearest-point projection has the formula \\(a+P_M(x-a)\\). Translating reduces the minimization to the linear subspace theorem. The formula is independent of the chosen base point: replacing \\(a\\) by \\(a+m\\), \\(m\\in M\\), changes the displayed expression by \\(m-P_Mm=0\\).

**Proposition 7.13 (Minimum-norm solution operator).** If \\(T:H\\to Y\\) is a bounded surjection from a Hilbert space to a Banach space, each equation \\(Tx=y\\) has one unique solution of smallest norm. These selected solutions depend linearly and boundedly on \\(y\\).

*Proof.* The kernel \\(M\\) is closed, so \\(H=M\\oplus M^\\perp\\). Decompose any preimage into its kernel and perpendicular parts. The perpendicular part is still a preimage, and adding a nonzero kernel vector strictly increases its squared norm by Pythagoras. Thus it is the unique shortest preimage. The restriction \\(T:M^\\perp\\to Y\\) is a bounded bijection: surjectivity follows from the decomposition, and injectivity from the trivial intersection of the two subspaces. Its domain is Banach because it is closed in \\(H\\). The bounded inverse theorem from chapter 5 therefore gives a bounded linear inverse \\(S:Y\\to M^\\perp\\), exactly the selected solution map. ∎

Open mapping alone in a general Banach domain controlled the preimage coset and did not provide a bounded linear representative choice. Orthogonal complement geometry supplies that missing choice here. It also separates two possible questions in an underdetermined equation: finding any solution and choosing the unique one satisfying an optimality condition. The shortest-solution rule is justified by the inner product, not by assigning arbitrary values to free coordinates.

## Increasing approximation spaces and compact sets of data

Let M1⊂M2⊂⋯ be closed linear subspaces of a Hilbert space, and let M be the norm closure of their union. Denote their orthogonal projections by Pn and P. Then Pnx tends to Px in norm for every x. This conclusion needs the density of the union in M, rather than an unsupported assertion that increasingly many approximation directions must eventually be complete.

Because x−Px is perpendicular to M, it is also perpendicular to every Mn. Thus Pnx=PnPx, so it suffices to approximate y=Px in M. Given ε>0, density gives z in some MN with ||y−z||<ε. For all n≥N, the nearest-point property gives ||y−Pny||≤||y−z||<ε. Hence Pny→y and Pnx→Px. The same result follows from the exact nested-space identity ||Px−Pnx||²=dist(x,Mn)²−dist(x,M)², obtained by the orthogonal decomposition of the two residuals.

The convergence is uniform when x ranges over a fixed compact set K. Choose a finite ε-net x1,…,xr in K. Pointwise convergence gives one N controlling all the differences Pnxi−Pxi. Both projections have norm at most one, so for x close to xi the remaining discrepancy is at most 2||x−xi||. Combining these bounds proves uniform convergence on K. Compactness converts the infinitely many data points into finitely many representatives and a stable remainder estimate.

It is generally not uniform on the entire unit ball. If Mn is a proper subspace of M, choose a unit vector in M∩Mn-perp when that complement is nonzero. Its projection under Pn is zero and under P is itself, so ||P−Pn||≥1; the projection difference has norm at most one, giving equality. For coordinate truncations of an infinite orthonormal basis, this happens at every finite n even though each fixed vector is recovered. Strong approximation and operator-norm approximation are therefore different conclusions.

This proof connects approximation geometry to compact-operator theory. If an operator sends the unit ball into a set with compact closure, the uniform-on-compact result can be applied to that image, yielding ||(P−Pn)K||→0 whenever its range lies in M. In particular coordinate projections approximate a compact Hilbert-space operator in operator norm. The compactness chapter proves the relevant operator hypotheses; the present argument isolates the geometric reason the upgrade is possible.

No numerical conditioning conclusion follows solely from this convergence. Computing Pn through a poorly conditioned spanning family can be sensitive even when the projected vectors have the exact approximation property. Orthonormal coordinates and error estimates address different parts of that problem.

## Exercises

### Exercise 7.1 {#hilbert-spaces-ex-1}

With the chapter's convention, compute \\(\\langle\\alpha x,\\beta y\\rangle\\) and explain where the conjugate belongs.

<details><summary>Hint 1</summary>
The first slot is linear.
</details>
<details><summary>Hint 2</summary>
Apply conjugate symmetry to get scalar behavior in the second slot.
</details>
<details><summary>Solution</summary>
The result is \\(\\alpha\\overline\\beta\\langle x,y\\rangle\\). Conjugate symmetry gives \\(\\langle x,\\beta y\\rangle=\\overline{\\langle\\beta y,x\\rangle}=\\overline\\beta\\langle x,y\\rangle\\). Confusing the second-slot conjugation changes the projection coefficient in complex spaces and can make a claimed linear functional conjugate linear instead.
</details>

### Exercise 7.2 {#hilbert-spaces-ex-2}

Prove Pythagoras for two orthogonal vectors and derive the best-approximation property of an orthogonal decomposition.

<details><summary>Hint 1</summary>
Expand the squared norm and cancel both cross terms.
</details>
<details><summary>Hint 2</summary>
Compare \\(x=p+r\\) with any \\(m\\in M\\), when \\(p\\in M\\), \\(r\\perp M\\).
</details>
<details><summary>Solution</summary>
Orthogonality makes \\(\\|u+v\\|^2=\\|u\\|^2+\\|v\\|^2\\). If \\(x=p+r\\) as stated, then \\(x-m=r+(p-m)\\) is an orthogonal sum. Thus \\(\\|x-m\\|^2=\\|r\\|^2+\\|p-m\\|^2\\ge\\|r\\|^2\\), with equality exactly at \\(m=p\\). So the decomposition gives the unique best approximation in the subspace.
</details>

### Exercise 7.3 {#hilbert-spaces-ex-3}

Show the supremum norm on \\(\\mathbb R^2\\) does not satisfy the parallelogram identity.

<details><summary>Hint 1</summary>
Use the two coordinate unit vectors.
</details>
<details><summary>Hint 2</summary>
Both their sum and difference have supremum norm one.
</details>
<details><summary>Solution</summary>
For \\(x=(1,0)\\), \\(y=(0,1)\\), the left side is \\(1^2+1^2=2\\), while the right side is \\(2\\cdot1^2+2\\cdot1^2=4\\). Therefore this norm is not induced by any inner product. Completeness and finite-dimensional topological equivalence do not force a norm to have Hilbert geometry.
</details>

### Exercise 7.4 {#hilbert-spaces-ex-4}

Find the orthogonal projection of \\((2,3)\\) onto the line spanned by \\((1,-1)\\).

<details><summary>Hint 1</summary>
Use the scalar coefficient \\(\\langle x,v\\rangle/\\|v\\|^2\\).
</details>
<details><summary>Hint 2</summary>
Check the residual has equal coordinates and is perpendicular to the line.
</details>
<details><summary>Solution</summary>
The coefficient is \\((2-3)/2=-1/2\\), so the projection is \\((-1/2,1/2)\\). The residual is \\((5/2,5/2)\\), perpendicular to \\((1,-1)\\). Its squared norm is \\(25/2\\). Pythagoras shows every other point on the line has that error plus the squared distance from the computed projection.
</details>

### Exercise 7.5 {#hilbert-spaces-ex-5}

Prove \\(M^\\perp\\) is closed even when \\(M\\) is only a subset, not a subspace.

<details><summary>Hint 1</summary>
For each fixed \\(m\\), the inner-product functional is continuous.
</details>
<details><summary>Hint 2</summary>
Intersect its zero set over all \\(m\\in M\\).
</details>
<details><summary>Solution</summary>
For fixed \\(m\\), Cauchy–Schwarz gives continuity of \\(x\\mapsto\\langle x,m\\rangle\\), whose kernel is closed and linear. The orthogonal complement is the intersection of these kernels. Arbitrary intersections preserve closedness and linearity. Thus no algebraic or closedness assumption on the original subset is required.
</details>

### Exercise 7.6 {#hilbert-spaces-ex-6}

Give a nonempty convex set with no nearest point to some vector, and a closed nonconvex set with nonunique nearest points.

<details><summary>Hint 1</summary>
For the first use an open interval in the real line.
</details>
<details><summary>Hint 2</summary>
For the second use the set consisting of minus one and one.
</details>
<details><summary>Solution</summary>
For \\(C=(-1,1)\\) and \\(x=2\\), the distance infimum is one but is not attained because the endpoint one is missing. The set is convex but not closed. For \\(C=\\{-1,1\\}\\) and \\(x=0\\), both points minimize distance one. The set is closed but not convex. These examples isolate the two hypotheses of the nearest-point theorem.
</details>

### Exercise 7.7 {#hilbert-spaces-ex-7}

Show that a closed-subspace projection has norm one unless the subspace is zero.

<details><summary>Hint 1</summary>
Pythagoras gives the upper bound.
</details>
<details><summary>Hint 2</summary>
Test a unit vector already in the subspace.
</details>
<details><summary>Solution</summary>
The decomposition gives \\(\\|P_Mx\\|^2\\le\\|x\\|^2\\), so \\(\\|P_M\\|\\le1\\). If \\(M\\ne\\{0\\}\\), normalize a nonzero vector in it; projection fixes that unit vector, giving norm at least one. If \\(M=\\{0\\}\\), projection is the zero operator and its norm is zero.
</details>

### Exercise 7.8 {#hilbert-spaces-ex-8}

Prove \\(H=M\\oplus M^\\perp\\) for a closed subspace and derive \\((M^\\perp)^\\perp=M\\).

<details><summary>Hint 1</summary>
Use the orthogonal decomposition and uniqueness.
</details>
<details><summary>Hint 2</summary>
For a vector perpendicular to \\(M^\\perp\\), test its own residual.
</details>
<details><summary>Solution</summary>
Projection supplies a decomposition of every vector, and \\(M\\cap M^\\perp=\\{0\\}\\) because a vector in the intersection is orthogonal to itself. Thus the sum is direct. Certainly \\(M\\subseteq(M^\\perp)^\\perp\\). If \\(x=p+r\\) is also perpendicular to \\(M^\\perp\\), then \\(0=\\langle x,r\\rangle=\\|r\\|^2\\), so \\(r=0\\) and \\(x\\in M\\). This proves equality.
</details>

### Exercise 7.9 {#hilbert-spaces-ex-9}

For an arbitrary linear subspace \\(N\\), prove \\((N^\\perp)^\\perp=\\overline N\\).

<details><summary>Hint 1</summary>
Orthogonality to \\(N\\) is equivalent to orthogonality to its closure.
</details>
<details><summary>Hint 2</summary>
Apply the preceding exercise to the closed subspace \\(\\overline N\\).
</details>
<details><summary>Solution</summary>
Continuity of the inner product makes every vector orthogonal to \\(N\\) also orthogonal to limits of its vectors, hence to \\(\\overline N\\). The reverse implication is immediate by inclusion, so the orthogonal complements agree. The double-complement identity for the closed subspace then yields \\((N^\\perp)^\\perp=\\overline N\\). Omitting closure would fail for dense proper subspaces.
</details>

### Exercise 7.10 {#hilbert-spaces-ex-10}

Prove that projection onto the nonnegative half-line in \\(\\mathbb R\\) is nonexpansive but not linear.

<details><summary>Hint 1</summary>
The nearest point is \\(P(t)=\\max(t,0)\\).
</details>
<details><summary>Hint 2</summary>
Check same-sign and opposite-sign pairs separately.
</details>
<details><summary>Solution</summary>
If both inputs are nonnegative, their projection distance equals their distance; if both are nonpositive, it is zero. If \\(s\\le0\\le t\\), the projection distance is \\(t\\le t-s\\), proving the one-Lipschitz bound. It is not linear because \\(P(1)=1\\) but \\(P(-1)=0\\ne-P(1)\\). Convexity gives stability; a linear subspace is needed for a linear projection.
</details>

### Exercise 7.11 {#hilbert-spaces-ex-11}

Prove an inner-product space with a norm-complete closed subspace can project onto that subspace even if the whole space is incomplete.

<details><summary>Hint 1</summary>
Locate where the minimizing Cauchy sequence lives.
</details>
<details><summary>Hint 2</summary>
Its limit is needed only in the subspace being approximated.
</details>
<details><summary>Solution</summary>
For a fixed ambient vector, a minimizing sequence lies entirely in the complete subspace. The parallelogram midpoint estimate makes it Cauchy there, so it has a limit in that subspace without requiring completeness of every ambient Cauchy sequence. The orthogonality and uniqueness arguments then proceed unchanged. The Hilbert theorem states a uniform convenient hypothesis on the whole space, but this particular application only needs completeness of the feasible subspace.
</details>

### Exercise 7.12 {#hilbert-spaces-ex-12}

Why does the quotient norm by a closed Hilbert subspace have an attained representative, unlike a general Banach quotient?

<details><summary>Hint 1</summary>
Decompose any representative into its subspace and perpendicular parts.
</details>
<details><summary>Hint 2</summary>
The perpendicular part is the unique shortest vector in that coset.
</details>
<details><summary>Solution</summary>
For a coset \\(x+M\\), write \\(x=p+r\\) with \\(p\\in M\\), \\(r\\in M^\\perp\\). The same coset contains \\(r\\). Any other representative is \\(r+m\\), and Pythagoras gives \\(\\|r+m\\|^2=\\|r\\|^2+\\|m\\|^2\\). Thus the infimum is attained uniquely at \\(r\\). This uses the orthogonal projection theorem, an additional Hilbert structure absent from the general Banach quotient construction.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto Hilbert/spectral chapter, with Banach foundations developed earlier in this book. Conway and Brezis are syllabus benchmarks. The projection and polarization results are fully proved here; completeness of general measure-based L2 spaces remains in the measure prerequisite, and representation of arbitrary continuous functionals by inner products is proved next.

## Summary

An inner product gives Cauchy–Schwarz, Pythagoras and the parallelogram identity; polarization characterizes exactly which norms have that geometry. Completeness and convexity turn minimizing sequences into unique nearest points. Closed linear subspaces then give orthogonal decompositions and bounded linear projections, while general convex projections remain stable but can be nonlinear. The next chapter builds orthonormal expansions and proves that every bounded Hilbert functional is an inner product with one unique vector.
`;export{e as default};