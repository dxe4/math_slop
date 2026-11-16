var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: inner-products-orthogonal-decomposition
title: "Inner Products and Orthogonal Decomposition"
level: advanced-undergraduate
estimated_minutes: 245
license: CC BY-SA 4.0
---

# Inner Products and Orthogonal Decomposition {#section-1-inner-products-and-orthogonal-decomposition}

Bare vector spaces know combinations but not length or angle. An inner product adds positive geometry and turns complements into canonical orthogonal complements. We use real symmetric and complex Hermitian inner products, linear in the first slot and conjugate-linear in the second.

<a id="section-3-1-axioms-and-inequalities"></a>
## 1. Axioms and inequalities {#section-5-1-axioms-and-inequalities}

**Definition 17.1 (Inner product and induced norm).**

An inner product satisfies linearity in the first slot, conjugate symmetry, and $\\langle v,v\\rangle>0$ for $v\\ne 0$. Define $\\lVert v\\rVert=\\sqrt{\\langle v,v\\rangle}$. Cauchy–Schwarz follows by applying positivity to $u-a v$ with the minimizing scalar; equality holds exactly for dependent vectors. It yields the triangle inequality.

Orthogonality $u\\perp v$ means $\\langle u,v\\rangle=0$. Pythagoras gives $\\lVert u+v\\rVert^2=\\lVert u\\rVert^2+\\lVert v\\rVert^2$ for orthogonal vectors.

<a id="section-11-2-gram-matrices-and-orthonormal-bases"></a>
## 2. Gram matrices and orthonormal bases {#section-13-2-gram-matrices-and-orthonormal-bases}

**Definition 17.2 (Gram matrix and orthonormalization convention).**

For a list $(v_i)$, define the Gram matrix by $G_{ij}=\\langle v_j,v_i\\rangle$. This index order matches column-coordinate formulas under the first-slot-linear convention: $c^{*}Gc=\\lVert\\sum_jc_jv_j\\rVert^2$. The matrix is positive semidefinite and is positive definite exactly when the list is independent. Gram–Schmidt replaces an independent list by an orthonormal list spanning the same successive subspaces:

$w_k=v_k-\\sum_{j<k}\\langle v_k,q_j\\rangle q_j$, $q_k=w_k/\\lVert w_k\\rVert$.

The process cannot divide by zero for an independent input. Numerically, modified Gram–Schmidt or Householder QR is preferred because classical subtraction can lose orthogonality.

<a id="section-21-3-orthogonal-complements"></a>
## 3. Orthogonal complements {#section-23-3-orthogonal-complements}

**Theorem 17.1 (Orthogonal decomposition for a subspace).**

For $U \\subseteq V$, let $U^\\perp=\\{v:\\langle v,u\\rangle=0 \\text{ for all } u \\in U\\}$. In finite dimension,

$V=U \\oplus U^\\perp$, $\\operatorname{dim} U+\\operatorname{dim} U^\\perp=\\operatorname{dim} V$, $(U^\\perp)^\\perp=U$.

Choose an orthonormal basis of $U$ and extend it orthonormally. Unlike a generic complement, $U^\\perp$ is determined by the inner product.

<a id="section-31-4-projection-and-best-approximation"></a>
## 4. Projection and best approximation {#section-33-4-projection-and-best-approximation}

**Theorem 17.2 (Orthogonal projection and unique best approximation).**

For orthonormal $(q_1,\\ldots,q_r)$ spanning $U$,

$P_Uv=\\sum_i\\langle v,q_i\\rangle q_i$.

Then $v-P_Uv \\in U^\\perp$, $P_U^2=P_U$, and $\\operatorname{im} P_U=U$. For every $u \\in U$,

$\\lVert v-u\\rVert^2=\\lVert v-P_Uv\\rVert^2+\\lVert P_Uv-u\\rVert^2$,

so $P_Uv$ is the unique nearest point in $U$.

For a nonorthonormal full-column matrix $A$, normal equations give coordinates $c=(A^{*} A)^{-1}A^{*}v$, so $P=A(A^{*}A)^{-1}A^{*}$. This formula is exact but forming normal equations squares the condition number numerically.

<a id="section-47-5-qr-and-least-squares"></a>
## 5. QR and least squares {#section-49-5-qr-and-least-squares}

Gram–Schmidt yields $A=QR$ for independent columns, with $Q^{*}Q=I$ and upper triangular invertible $R$. Least squares $\\min_x\\lVert Ax-b\\rVert$ reduces to $Rx=Q^{*}b$. The residual is orthogonal to $\\operatorname{im} A$, equivalently $A^{*}(Ax-b)=0$.

<a id="section-51-6-boundaries"></a>
## 6. Boundaries {#section-53-6-boundaries}

Positivity depends on $R$ or $C$ (or other ordered/conjugated settings); arbitrary fields do not carry this theory automatically. In infinite-dimensional spaces, closedness is required for projection onto a subspace. Exact orthogonality also differs from a small computed dot product.

<a id="section-55-7-worked-projection-in-a-function-space"></a>
## 7. Worked projection in a function space {#section-57-7-worked-projection-in-a-function-space}

**Worked example 17.1 (Best affine approximation in an integral geometry).**

Let $V=\\mathbb{R}_2[x]$ with inner product

$\\langle p,q\\rangle=\\int_{-1}^1 p(x)q(x)\\,dx$,

and let $U=\\operatorname{span}(1,x)$. We project $x^2$ onto $U$. The basis $(1,x)$ is orthogonal because the integral of the odd function $x$ is zero. Its squared norms are

$\\lVert 1\\rVert^2=2$, $\\lVert x\\rVert^2=2/3$.

Therefore

$P_U(x^2)=\\langle x^2,1\\rangle/2 + (\\langle x^2,x\\rangle/(2/3))x$.

The first inner product is $2/3$; the second is zero by oddness. Hence $P_U(x^2)=\\frac{1}{3}$. The residual $x^2-\\frac{1}{3}$ is orthogonal to both $1$ and $x$. The best affine approximation in this integral norm is therefore the constant $\\frac{1}{3}$, not a line fitted at selected sample points.

This example separates the vector space from its inner product. With a discrete sample inner product, different weights, or a different interval, the projection changes even though $\\mathbb{R}_2[x]$ and $U$ do not.

<a id="section-75-8-nonorthonormal-coordinates-and-gram-systems"></a>
## 8. Nonorthonormal coordinates and Gram systems {#section-77-8-nonorthonormal-coordinates-and-gram-systems}

If $(u_1,\\ldots,u_r)$ is merely a basis of $U$, write $P_Uv=\\sum_i c_iu_i$. Orthogonality of the residual gives

$\\sum_i c_i\\langle u_i,u_j\\rangle=\\langle v,u_j\\rangle$ for every $j$.

Thus the coefficient vector solves the Gram system $Gc=b$, with $G_{ji}=\\langle u_i,u_j\\rangle$ and $b_j=\\langle v,u_j\\rangle$. Independence makes $G$ positive definite and invertible. This is the coordinate-free source of normal equations.

**Worked example 17.2 (Solve a nonorthonormal Gram system).**

For $u_1=(1,0,1)$, $u_2=(0,1,1)$ and $v=(1,2,0)$ in standard $\\mathbb{R}^3$,

$G=\\begin{pmatrix}2 & 1 \\\\ 1 & 2\\end{pmatrix}$, $b=(1,2)^T$.

Solving gives $c=(0,1)$, so $P_Uv=u_2=(0,1,1)$. The residual $(1,1,-1)$ has zero dot product with both basis vectors. A common error is to use coefficients $\\langle v,u_i\\rangle$ directly; that formula works only for an orthonormal basis. Here it would produce $u_1+2u_2$, which is not the nearest point.

<a id="section-91-9-affine-projection-and-least-squares"></a>
## 9. Affine projection and least squares {#section-93-9-affine-projection-and-least-squares}

An affine set $a+U$ is not a subspace unless it contains zero, but nearest-point geometry reduces to the linear case:

$P_{a+U}(v)=a+P_U(v-a)$.

For a consistent system $Ax=b$, its solution set is $x_0+\\operatorname{ker} A$. The minimum-norm solution is the unique solution orthogonal to $\\operatorname{ker} A$, hence lies in $\\operatorname{im} A^{*}$. For an underdetermined full-row-rank matrix, it is

$x_{min}=A^{*}(AA^{*})^{-1}b$.

Check: it solves the equation because $AA^{*}(AA^{*})^{-1}b=b$, and it lies in $\\operatorname{im} A^{*}=(\\operatorname{ker} A)^\\perp$. This exact formula anticipates the pseudoinverse. Numerically, one should not form the inverse explicitly; rank-revealing QR or SVD handles conditioning and rank decisions.

<a id="section-103-10-gram-determinant-and-geometry"></a>
## 10. Gram determinant and geometry {#section-105-10-gram-determinant-and-geometry}

The Gram determinant $\\operatorname{det} G(v_1,\\ldots,v_k)$ equals the squared $k$-dimensional volume of the parallelepiped spanned by the vectors in Euclidean space. Gram–Schmidt makes this transparent: if the successive orthogonal residual lengths are $r_i$, then an upper triangular coordinate change gives

$\\operatorname{det} G=\\prod_i r_i^2$.

It vanishes exactly at dependence. This links Chapter 17 to exterior algebra: the squared norm of $v_1 ∧\\ldots∧ v_k$ under the induced exterior inner product is the Gram determinant. Algebraic independence detection by wedge and geometric volume detection by Gram are two views of the same list.

<a id="section-111-11-error-clinic"></a>
## 11. Error clinic {#section-113-11-error-clinic}

**Projecting with a nonorthonormal formula.** Solve the Gram system or first orthonormalize.

**Forgetting conjugation or slot convention.** In complex spaces, state which slot is linear before writing coefficients.

**Calling every idempotent orthogonal.** An idempotent is a projection along some complement. It is orthogonal exactly when self-adjoint.

**Using best approximation without closedness in infinite dimension.** Finite-dimensional subspaces are closed; arbitrary infinite-dimensional subspaces need not contain a nearest point.

**Treating normal equations as an implementation mandate.** They prove the orthogonality condition exactly but can square condition numbers numerically.

**Testing orthogonality with an unscaled absolute threshold.** A meaningful numerical test compares $\\left|\\langle u,v\\rangle \\right|$ with $\\lVert u\\rVert\\lVert v\\rVert$ and includes rounding/error bounds.

<a id="section-125-12-projection-characterized-among-idempotents"></a>
## 12. Projection characterized among idempotents {#section-127-12-projection-characterized-among-idempotents}

Let $P^2=P$. Then $V=\\operatorname{im} P \\oplus \\operatorname{ker} P$: write $v=Pv+(v-Pv)$, and the two summands intersect trivially. This is an algebraic projection along $\\operatorname{ker} P$. It is the **orthogonal** projection onto $\\operatorname{im} P$ exactly when $P=P^{*}$.

If $P=P^{*}$, then for $x=Pu$ and $y \\in \\operatorname{ker} P$,

$\\langle x,y\\rangle=\\langle Pu,y\\rangle=\\langle u,Py\\rangle=0$.

Thus the kernel is the orthogonal complement of the image. Conversely, if $\\operatorname{im} P$ and $\\operatorname{ker} P$ are orthogonal, decompose $u=x+y$, $v=x'+y'$; then $\\langle Pu,v\\rangle=\\langle x,x'\\rangle=\\langle u,Pv\\rangle$, proving self-adjointness.

For example $P=\\begin{pmatrix}1 & a \\\\ 0 & 0\\end{pmatrix}$ is idempotent for every real $a$. Its image is the first coordinate line, but its kernel is $\\operatorname{span}((-a,1))$. Only $a=0$ makes these subspaces perpendicular in the standard inner product. This small family isolates the distinction between “projection” and “orthogonal projection” more sharply than a definition alone.

<a id="section-137-13-weighted-least-squares-as-ordinary-projection-in-a-n"></a>
## 13. Weighted least squares as ordinary projection in a new geometry {#section-139-13-weighted-least-squares-as-ordinary-projection-in-a-n}

Suppose observations have positive reliability weights $w_i$. Define an inner product on data vectors by

$\\langle r,s\\rangle_W=r^TWs$, where $W=\\operatorname{diag}(w_1,\\ldots,w_m)$.

Minimizing the weighted residual $\\lVert Ax-b\\rVert_W^2$ asks for the orthogonal projection of $b$ onto $\\operatorname{im} A$ in this weighted geometry. Orthogonality gives

$A^TW(Ax-b)=0$,

and, for full column rank,

$x=(A^TWA)^{-1}A^TWb$.

**Worked example 17.3 (Fit a constant with declared observation weights).**

Take a constant model for observations $b=(1,2,10)$ with weights $(1,1,\\frac{1}{4})$. Here $A=(1,1,1)^T$; the fitted constant is

$c=(1+2+(\\frac{1}{4})10)/(1+1+\\frac{1}{4})=5.5/2.25=22/9$.

The weighted residual $(13/9,4/9,-68/9)$ has weighted sum $13/9+4/9-(\\frac{1}{4})(68/9)=0$, exactly the orthogonality condition. The outlying third observation influences the fit less because the inner product encodes lower reliability. This is a modeling choice, not a theorem that the third point is intrinsically less important; weights require provenance and interpretation.

<a id="section-159-exercises-with-full-solutions"></a>
## Investigation: projection as theorem and algorithm {#section-613-investigation-projection-as-theorem-and-algorithm}

For sampled quadratic data, build a design matrix for affine least squares, derive the exact projector, solve one rational example, and compare classical Gram–Schmidt, modified Gram–Schmidt, and Householder QR conceptually.

**Investigation solution.** With rows $(1,x_i)$, the affine fit is the projection of $y$ onto the two-column space. Exact full-rank coordinates solve $(A^TA)c=A^Ty$; the fitted vector is $Py$ with $P=A(A^TA)^{-1}A^T$. For $x=(-1,0,1)$, $y=(1,0,2)$, columns are orthogonal with squared norms $3,2$, giving coefficients mean $1$ and slope $\\frac{1}{2}$, hence fit $(\\frac{1}{2},1,3/2)$ and residual $(\\frac{1}{2},-1,\\frac{1}{2})$, orthogonal to both columns. Classical Gram–Schmidt subtracts accumulated projections from the original column and can lose orthogonality; modified applies them sequentially to the evolving residual; Householder uses orthogonal reflections and is generally the robust dense default. Exact formulas alone do not rank floating implementations without an error model.
<a id="section-616-14-positivity-complex-coefficients-and-the-missing-equa"></a>
## 14. Positivity, complex coefficients, and the missing equality steps {#section-618-14-positivity-complex-coefficients-and-the-missing-equa}

Throughout these extensions, $V$ is a finite-dimensional real or complex inner-product space, and every $U$ used in an orthogonal direct sum is a subspace. The first slot is linear. These declarations matter: a general subset need not equal its double orthogonal complement, and reversing the slot convention changes the scalar in a projection formula.

For $v\\ne0$, put $z=\\langle u,v\\rangle$, $s=\\|v\\|^2$, and $a=z/s$. Expanding with the declared convention gives
\\[
\\|u-av\\|^2=\\|u\\|^2-\\overline a z-a\\overline z+|a|^2s
=\\|u\\|^2-|z|^2/s.
\\]
Positivity makes the final expression nonnegative, proving Cauchy–Schwarz. Equality holds exactly when the residual vanishes, because an inner product has zero squared norm only at zero. If $v=0$, both sides of the inequality are zero and dependence is automatic.

The chosen scalar minimizes the squared distance over all scalar multiples of $v$. Indeed replacing it by $a+h$ adds $|h|^2s$ to the displayed minimum. Thus the inequality, its equality condition, and projection onto a line are one calculation. Conjugation cannot be omitted: the cross terms must be conjugates so their sum is real.

The triangle inequality follows from
$\\|u+v\\|^2=\\|u\\|^2+2\\operatorname{Re}\\langle u,v\\rangle+\\|v\\|^2$
and $\\operatorname{Re}z≤|z|≤\\|u\\|\\|v\\|$. For two nonzero vectors, equality in the triangle inequality additionally requires their inner product to be nonnegative real. Complex dependence alone is insufficient: $u=v$ adds lengths, but $u=iv$ does not.

Applying the triangle inequality to $u=(u-v)+v$ and then reversing the roles gives $|\\|u\\|-\\|v\\||≤\\|u-v\\|$. This establishes continuity of the norm directly from the inner-product axioms. No choice of coordinates or spectral theorem has entered these arguments.

<a id="section-635-recovering-the-inner-product-from-the-norm"></a>
### Recovering the inner product from the norm {#section-637-recovering-the-inner-product-from-the-norm}

Let $z=\\langle u,v\\rangle$. Expansion gives
\\[
\\|u+v\\|^2-\\|u-v\\|^2=4\\operatorname{Re}z,
\\qquad
\\|u+iv\\|^2-\\|u-iv\\|^2=4\\operatorname{Im}z.
\\]
Consequently, under first-slot linearity,
\\[
\\langle u,v\\rangle=\\tfrac14\\{\\|u+v\\|^2-\\|u-v\\|^2
+i\\|u+iv\\|^2-i\\|u-iv\\|^2\\}.
\\]
For example $u=1,v=i$ in $\\mathbb C$ gives imaginary difference $-4$ and inner product $-i$, as required by $u\\overline v$.

A complex linear norm-preserving map preserves all four norms on the right, including those involving $iv$, and therefore preserves the inner product. Complex linearity is essential to this step. Conjugation on $\\mathbb C$ preserves norms but reverses the imaginary part of the inner product. Over the real field, the first difference alone supplies polarization.

<a id="section-652-15-gram-schmidt-gives-a-local-determinant-proof"></a>
## 15. Gram–Schmidt gives a local determinant proof {#section-654-15-gram-schmidt-gives-a-local-determinant-proof}

Suppose $v_1,\\ldots,v_r$ is independent. At step $k$, subtract the projections onto the previous orthonormal vectors. For each $j<k$, the resulting $w_k$ satisfies $\\langle w_k,q_j\\rangle=0$, since earlier orthonormality makes every term in the sum vanish except the $j$th one.

If $w_k=0$, the original $v_k$ belongs to the preceding span. That contradicts independence. Thus its norm is positive, normalization is legal, and the new orthonormal list spans the same prefix as the old list. Induction proves the whole construction, including every division and every span claim.

Writing the columns in an orthonormal ambient basis gives $A=QR$, where $R_{jk}=\\langle v_k,q_j\\rangle$ for $j<k$, $R_{kk}=\\|w_k\\|>0$, and entries below the diagonal vanish. The positive diagonal is a normalization convention: allowing phase changes in the $q_j$ would change the corresponding rows of $R$ without changing the column space.

Since $Q^\\dagger Q=I$, the Gram matrix is $G=A^\\dagger A=R^\\dagger R$. Determinant multiplicativity and triangularity give $\\det G=|\\det R|^2=\\prod_k\\|w_k\\|^2>0$. This proves positivity of the Gram determinant without importing orthogonal diagonalization from the later spectral chapter.

If the list is dependent, some nonzero coefficient vector $c$ has $Ac=0$ and therefore $Gc=0$. The Gram matrix is singular. Thus the determinant detects independence in both directions, while Gram–Schmidt explains the factorization geometrically.

For the earlier nonorthonormal example, take $v_1=(1,0,1)$ and $v_2=(0,1,1)$. Then
\\[
q_1=(1,0,1)/\\sqrt2,\\qquad q_2=(-1,2,1)/\\sqrt6,
\\qquad
R=\\begin{pmatrix}\\sqrt2&1/\\sqrt2\\\\0&\\sqrt{3/2}\\end{pmatrix}.
\\]
The first subtraction gives $(-1/2,1,1/2)$, whose squared norm is $3/2$. The Gram determinant is $2(3/2)=3$, matching the determinant of $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$.

For $b=(1,2,0)$, the orthonormal measurements are $Q^\\dagger b=(1/\\sqrt2,3/\\sqrt6)^{\\mathsf T}$. Back substitution gives the second coefficient one and the first zero. Thus exact QR reproduces the earlier Gram-system solution. This is a complete symbolic calculation, not a comparison of observed floating-point errors.

An independent list can nevertheless have a very small residual at a later step. Exact nonzero division then remains valid, while finite-precision subtraction may magnify relative error. The proof supplies existence; a numerical implementation needs its own error analysis. It does not follow that every program using the name QR has the same stability properties.

<a id="section-676-16-orthogonality-characterizes-the-minimizer"></a>
## 16. Orthogonality characterizes the minimizer {#section-678-16-orthogonality-characterizes-the-minimizer}

Let $U$ be a subspace and let $p\\in U$. If $r=v-p$ is perpendicular to $U$, then for every $h\\in U$,
$\\|v-(p+h)\\|^2=\\|r\\|^2+\\|h\\|^2$.
This proves both optimality and uniqueness. It also shows what a certificate should contain: a proposed point in the approximation space and a residual orthogonal to every basis direction.

Conversely, suppose $p$ minimizes distance. For each $u\\in U$ and real $t$, expansion of $\\|r-tu\\|^2$ shows that its linear coefficient must vanish, so $\\operatorname{Re}\\langle r,u\\rangle=0$. In a complex space, replacing $u$ by $iu$ also forces the imaginary part to vanish. Thus the residual is orthogonal to $U$. The normal equations express exactly this two-way characterization.

If $A$ has independent columns, its Gram matrix is invertible and the unique coefficient vector is $(A^\\dagger A)^{-1}A^\\dagger v$. The fitted point is independent of which basis of the same subspace was used. Replacing $A$ by $AS$, with $S$ invertible, changes coefficients by $S^{-1}$ and leaves the fitted vector unchanged.

For an orthogonal projector, Pythagoras gives $\\|Pv\\|^2+\\|(I-P)v\\|^2=\\|v\\|^2$, hence $\\|Pv\\|≤\\|v\\|$. Applying this to a difference proves $\\|Pu-Pv\\|≤\\|u-v\\|$. Projection cannot enlarge errors in the input under this same norm. It may still change dramatically if the subspace itself is perturbed; that is a different sensitivity question.

An oblique projection need not be a contraction. On standard $\\mathbb R^2$, $P(x,y)=(x+ay,0)$ has norm $\\sqrt{1+a^2}$, by Cauchy–Schwarz on the row $(1,a)$, with equality on its normalized transpose. It has the same image line for every $a$ but changes the direction along which points are projected.

There is a converse worth checking. If an idempotent is a contraction, take $u$ in its image and $w$ in its kernel. For every scalar $t$, contraction gives $\\|u\\|=\\|P(u+tw)\\|≤\\|u+tw\\|$. The same real and imaginary variation argument forces $u\\perp w$. Thus an idempotent is an orthogonal projector exactly when it is a contraction. This characterization uses the inner product, not idempotence alone.

<a id="section-692-17-weights-and-integrals-are-choices-of-geometry"></a>
## 17. Weights and integrals are choices of geometry {#section-694-17-weights-and-integrals-are-choices-of-geometry}

For positive real weights, put $D=\\operatorname{diag}(\\sqrt{w_i})$, so $W=D^2$. Weighted distance satisfies $\\|r\\|_W=\\|Dr\\|_2$. Weighted least squares is therefore ordinary least squares for $DA$ and $Db$. This transformation explains the normal equations and supplies an exact route to QR without changing the optimization problem.

In the original constant-fit example, $W=\\operatorname{diag}(1,1,1/4)$ and $DA=(1,1,1/2)^{\\mathsf T}$. Its norm is $3/2$, so its unit column is $q=(2/3,2/3,1/3)^{\\mathsf T}$. The data projector in the original coordinates is
\\[
P_W=D^{-1}qq^{\\mathsf T}D
=\\tfrac19\\begin{pmatrix}4&4&1\\\\4&4&1\\\\4&4&1\\end{pmatrix}.
\\]
This matrix is idempotent and satisfies $P_W^{\\mathsf T}W=WP_W$. It is not symmetric in standard coordinates. Self-adjointness is relative to the chosen inner product, so this is consistent with being the weighted orthogonal projection.

Multiplying by $(1,2,10)^{\\mathsf T}$ gives the constant $22/9$ already obtained. The transformed residual is $(13/9,4/9,-34/9)$, whose squared Euclidean norm is $149/9$. The original weighted residual has this same squared norm. Positive weights make the geometry definite; a zero weight instead makes a nonzero coordinate direction have zero length and requires a quotient or another treatment.

<a id="section-705-what-the-polynomial-integral-example-imports"></a>
### What the polynomial integral example imports {#section-707-what-the-polynomial-integral-example-imports}

For a continuous real polynomial, integration is linear and respects nonnegative functions. A nonzero polynomial is nonzero at some point of $[-1,1]$ and, by continuity, its square is bounded below by a positive number on a small interval. Therefore its integral square is strictly positive. These elementary real-analysis inputs establish definiteness of the function-space inner product; formal vector-space axioms alone would not.

The integral evaluation uses the fundamental theorem of calculus for continuous functions with an antiderivative. It gives $\\int_{-1}^1x^k\\,dx=0$ for odd $k$ and $2/(k+1)$ for even nonnegative $k$. This is the only integration rule needed for the polynomial examples, rather than an unspecified function-space theorem.

The residual $x^2-1/3$ has squared norm $2/5-4/9+2/9=8/45$. Thus an orthonormal basis of $\\mathbb R_2[x]$ is
\\[
1/\\sqrt2,\\qquad \\sqrt{3/2}\\,x,\\qquad \\sqrt{45/8}\\,(x^2-1/3).
\\]
Every orthogonality and normalization claim follows from the displayed integral rule. This completes the normalization that the earlier projection calculation did not need.

In $\\mathbb R_3[x]$ with the same integral inner product, the best affine approximation to $x^3$ is $(3/5)x$. The constant measurement is zero by oddness; the linear coefficient is $(2/5)/(2/3)=3/5$. Its residual is orthogonal to one and $x$, with squared norm $2/7-6/25=8/175$.

A discrete sampling formula can define a different geometry, but only if the measurements separate the polynomial space. Evaluation at zero and one with positive weights gives zero squared length to the nonzero polynomial $x(x-1)$. It is a semidefinite form on quadratics, not an inner product there. Three distinct real nodes with positive weights do separate quadratics: a nonzero polynomial of degree at most two cannot vanish at all three.

The interval, weights, and evaluation nodes thus belong to the hypothesis ledger. They decide which errors the norm measures. A fitted polynomial can minimize one declared loss without minimizing another, and this is not a failure of the projection theorem.

<a id="section-723-18-affine-constraints-and-boundaries-of-the-geometry"></a>
## 18. Affine constraints and boundaries of the geometry {#section-725-18-affine-constraints-and-boundaries-of-the-geometry}

A consistent linear system describes an affine space, not generally a subspace. If $Ax=b$ has one solution $x_0$, all solutions are $x_0+\\ker A$. Decompose $x_0=p+k$ with $p\\perp\\ker A$ and $k\\in\\ker A$. Then the same solution set is $p+\\ker A$, and Pythagoras gives $\\|p+h\\|^2=\\|p\\|^2+\\|h\\|^2$. Thus $p$ is its unique minimum-norm member.

This proof does not require full row rank. That hypothesis is needed for the particular inverse formula $A^\\dagger(AA^\\dagger)^{-1}b$: if A has full row rank, its adjoint is injective, so $\\langle AA^\\dagger y,y\\rangle=\\|A^\\dagger y\\|^2>0$ for nonzero y. The inverse exists, the formula solves the equation, and its image lies in $(\\ker A)^\\perp$. Without full row rank, a consistent equation can still have a unique minimum-norm solution while the displayed inverse is unavailable.

For an exact example, let $A=\\begin{pmatrix}1&1&0\\\\0&1&1\\end{pmatrix}$ and $b=(1,2)^{\\mathsf T}$. Then $AA^{\\mathsf T}=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ and $(AA^{\\mathsf T})^{-1}b=(0,1)^{\\mathsf T}$. The minimum-norm solution is $(0,1,1)^{\\mathsf T}$. The kernel is spanned by $h=(1,-1,1)^{\\mathsf T}$, perpendicular to that solution; every solution has squared norm $2+3t^2$ for some real t.

Change the coordinate geometry to $G=\\operatorname{diag}(1,2,1)$ and retain exactly the same equation. The squared norm of $(0,1,1)+th$ is now $3-2t+4t^2$, minimized at $t=1/4$. The minimum-norm solution becomes $(1/4,3/4,5/4)^{\\mathsf T}$. Nothing about feasibility changed. The word minimum refers to the stated geometry, not to a canonical preference supplied by the equation alone.

<a id="section-733-agreeing-fits-need-not-mean-agreeing-geometries"></a>
### Agreeing fits need not mean agreeing geometries {#section-735-agreeing-fits-need-not-mean-agreeing-geometries}

The integral projection of $x^2$ onto constants is $1/3$. A discrete positive-weight geometry on quadratics, using nodes $-1,0,1$ with weights $1/3,4/3,1/3$, gives the same constant: the weighted value of $x^2$ is $2/3$ and the total weight is two.

Nevertheless the squared norm of the residual $x^2-1/3$ is $4/9$ in that discrete geometry, whereas the integral squared norm is $8/45$. The three residual values are $2/3,-1/3,2/3$, so the discrete result is obtained by summing their weighted squares. Agreement on this one projection does not identify the whole inner product.

With equal weights at the same three nodes, the fitted constant is instead $2/3$. The vector space and target subspace are unchanged in all three calculations. Which approximation is best depends on which distribution of errors the loss measures. Calling one result wrong without naming the loss would conflate a modeling choice with a theorem failure.

<a id="section-741-why-positivity-cannot-be-replaced-by-nondegeneracy"></a>
### Why positivity cannot be replaced by nondegeneracy {#section-743-why-positivity-cannot-be-replaced-by-nondegeneracy}

On $\\mathbb R^2$, consider the symmetric bilinear form $B(x,y)=x_1y_1-x_2y_2$. It is nondegenerate, yet $v=(1,1)$ has $B(v,v)=0$. For $u=(1,0)$, $|B(u,v)|^2=1$ while $B(u,u)B(v,v)=0$, so the Cauchy–Schwarz inequality used above fails.

The line $U=\\mathbb Rv$ is contained in its own B-orthogonal complement. There is no direct sum $V=U\\oplus U^\\perp$ of the kind positivity guaranteed. Nor can one divide by $B(v,v)$ to project onto this line. The later theory of indefinite forms is meaningful, but its hypotheses and conclusions differ from inner-product geometry.

<a id="section-747-a-closed-subspace-in-an-incomplete-space-can-still-fail"></a>
### A closed subspace in an incomplete space can still fail {#section-749-a-closed-subspace-in-an-incomplete-space-can-still-fail}

Finite-dimensional projection does not need an infinite-dimensional completeness theorem. To see why a broader claim would require more care, let V be the real finite-support sequences with the usual sum-of-squares inner product, and put $\\phi(x)=\\sum_j2^{-j}x_j$. Each sum is finite. Cauchy–Schwarz on the support gives $|\\phi(x)|≤\\|x\\|/\\sqrt3$, so the kernel U is closed relative to this normed space.

Yet $U^\\perp=0$. For every $j≥2$, the vector $e_j-2^{1-j}e_1$ lies in U. Orthogonality forces a candidate z to satisfy $z_j=2^{1-j}z_1$ for every j. A finite-support z can satisfy those equations only if $z_1=0$, hence z is zero.

U is proper because $\\phi(e_1)=1/2$. If $e_1$ had a nearest point p in U, the same scalar-variation proof would force $e_1-p\\in U^\\perp=0$, contradicting $e_1\\notin U$. Thus closedness alone does not suffice in an incomplete ambient space. The finite theorem in this chapter is secure; the Hilbert-space extension requires completeness as well as closedness. This counterexample states that boundary without importing an infinite-dimensional projection theorem.

<a id="section-755-qr-supplies-an-error-certificate-and-a-normalization-ch"></a>
### QR supplies an error certificate and a normalization choice {#section-757-qr-supplies-an-error-certificate-and-a-normalization-ch}

For full-column-rank $A=QR$, split b as $QQ^\\dagger b+(I-QQ^\\dagger)b$. The first vector lies in the column space and the second is perpendicular to it. Consequently, for every coefficient vector x,
\\[
\\|Ax-b\\|^2=\\|Rx-Q^\\dagger b\\|^2+\\|(I-QQ^\\dagger)b\\|^2.
\\]
This is the complete objective decomposition behind triangular back substitution. It gives both the minimizing coefficients and the minimum error, rather than merely a necessary normal equation.

The factorization also records a choice of normalization. With strictly positive real diagonal entries in R, the thin QR factorization is unique for the fixed ordered independent columns. Suppose $A=Q_1R_1=Q_2R_2$. The two Q matrices have the same column space, so $S=Q_1^\\dagger Q_2=R_1R_2^{-1}$ is both unitary and upper triangular.

Such an S is diagonal. Its first column has only its first entry; unit length makes that entry nonzero, and orthogonality to every later column forces every other first-row entry to vanish. Repeat on the trailing block. Its diagonal entries have modulus one, but the positive R diagonals make each ratio positive real. Hence S is the identity, and both factors agree.

Without the positive-diagonal convention, multiplying a Q column by a unit complex scalar and compensating in the corresponding R row produces another factorization. This changes the coordinate record, not the fitted space or residual certificate. It is an example where uniqueness follows only after naming a legitimate convention.

With dependent columns, the best fitted vector still exists and is unique because the image is a finite-dimensional subspace. Coefficient vectors may be nonunique: if $Ax_0=p$, all coefficients giving the same fit are $x_0+\\ker A$. A singular triangular factor cannot be solved by dividing by a zero diagonal entry. A rank-adapted basis or other justified factorization must first separate independent directions.

Thus three questions remain distinct: the nearest image vector, a coordinate vector that produces it, and a well-conditioned numerical representation. Orthogonal projection answers the first, injectivity determines uniqueness for the second, and numerical analysis is needed for the third. The exact QR certificate does not collapse those questions into one software output.

<a id="section-773-19-explicit-certificate-for-the-existing-rational-fit-i"></a>
## 19. Explicit certificate for the existing rational-fit investigation {#section-775-19-explicit-certificate-for-the-existing-rational-fit-i}

The original investigation already supplies its rational fit and conceptual algorithm comparison. This sheet only makes its projector and residual certificate explicit; it introduces no new investigation or mandatory numerical run.

For rows $(1,-1),(1,0),(1,1)$, orthonormal column vectors are $q_1=(1,1,1)^{\\mathsf T}/\\sqrt3$ and $q_2=(-1,0,1)^{\\mathsf T}/\\sqrt2$. Hence
\\[
P=q_1q_1^{\\mathsf T}+q_2q_2^{\\mathsf T}
=\\tfrac16\\begin{pmatrix}5&2&-1\\\\2&2&2\\\\-1&2&5\\end{pmatrix}.
\\]
For $n=(1,-2,1)^{\\mathsf T}$, $I-P=nn^{\\mathsf T}/6$. These formulas verify symmetry, idempotence, image equal to the affine design space, and kernel equal to the residual line.

For the original $y=(1,0,2)^{\\mathsf T}$, $Py=(1/2,1,3/2)^{\\mathsf T}$ and $(I-P)y=n/2$. The squared minimum error is $3/2$. The exact reduced QR factor has $R=\\operatorname{diag}(\\sqrt3,\\sqrt2)$ because the original columns are orthogonal. This is the same model solution with a checkable full matrix certificate, not evidence of an executed floating-point comparison.

<a id="section-786-20-optional-practice-extensions"></a>
## 22. Proof and calculus boundary {#section-856-22-proof-and-calculus-boundary}

The algebraic and finite-dimensional geometric derivations above are proved here. The polynomial integration step imports the continuous-function antiderivative evaluation theorem, as stated in [OpenStax Calculus Volume 1, Section 5.3, Theorem 5.5](https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus), together with elementary continuity and integral positivity. No infinite-dimensional projection theorem or numerical implementation result is claimed.

<a id="section-858-summary"></a>

<a id="section-367-summary"></a>
## Summary {#section-369-summary}

<a id="section-860-summary"></a>
An inner product adds orthogonality and length to a vector space. Gram–Schmidt preserves prefix spans, orthogonal projection supplies a unique best approximation, and normal equations express residual orthogonality. The scalar-slot convention and any weighted geometry must be kept explicit.

## Exercises {#section-161-exercises-with-full-solutions}

<a id="section-161-1-cauchy-schwarz"></a>
### 1. Cauchy–Schwarz {#section-163-1-cauchy-schwarz}
Prove it for $v\\ne 0$.

<details>
<summary>Hint 1</summary>

Subtract from u its component along v.

</details>

<details>
<summary>Hint 2</summary>

Expand the squared norm of that orthogonal residual and use nonnegativity.

</details>

<details>
<summary>Solution</summary>

**Solution.** Positivity of $u-(\\langle u,v\\rangle/\\lVert v\\rVert^2)v$ expands to $\\lVert u\\rVert^2-\\left|\\langle u,v\\rangle \\right|^2/\\lVert v\\rVert^2\\ge 0$.


</details>

<a id="section-186-2-equality-case"></a>
### 2. Equality case {#section-188-2-equality-case}
Characterize equality.

<details>
<summary>Hint 1</summary>

Track when the residual in the Cauchy–Schwarz proof is zero.

</details>

<details>
<summary>Hint 2</summary>

Equality says precisely that the two vectors are linearly dependent, including the zero-vector cases.

</details>

<details>
<summary>Solution</summary>

**Solution.** Equality occurs exactly when the residual in Exercise 1 is zero, meaning $u$ is a scalar multiple of $v$; zero cases are included.


</details>

<a id="section-211-3-triangle-inequality"></a>
### 3. Triangle inequality {#section-213-3-triangle-inequality}
Derive it.

<details>
<summary>Hint 1</summary>

Expand ‖u+v‖².

</details>

<details>
<summary>Hint 2</summary>

Bound the real part of the cross term by Cauchy–Schwarz.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand $\\lVert u+v\\rVert^2$, bound $2\\operatorname{Re}\\langle u,v\\rangle \\le 2\\lVert u\\rVert\\lVert v\\rVert$, and take nonnegative square roots.


</details>

<a id="section-236-4-pythagoras"></a>
### 4. Pythagoras {#section-238-4-pythagoras}
Prove the identity.

<details>
<summary>Hint 1</summary>

Expand the squared norm of an orthogonal sum.

</details>

<details>
<summary>Hint 2</summary>

Both cross terms vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand the squared norm; cross terms are zero by orthogonality.


</details>

<a id="section-261-5-gram-positivity"></a>
### 5. Gram positivity {#section-263-5-gram-positivity}
Show $c^{*}Gc=\\lVert \\sum c_iv_i\\rVert^2$.

<details>
<summary>Hint 1</summary>

Expand the inner product of the linear combination with itself.

</details>

<details>
<summary>Hint 2</summary>

Match each coefficient with the corresponding Gram entry using the stated slot convention.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand both sides using sesquilinearity; positivity follows, and zero occurs exactly when the linear combination vanishes.


</details>

<a id="section-286-6-gram-determinant"></a>
### 6. Gram determinant {#section-288-6-gram-determinant}
Why is $\\operatorname{det} G>0$ for an independent real list?

<details>
<summary>Hint 1</summary>

The Gram quadratic form is strictly positive on every nonzero coefficient vector.

</details>

<details>
<summary>Hint 2</summary>

Use positive definiteness, or the triangular factor produced by Gram–Schmidt, to determine the determinant's sign.

</details>

<details>
<summary>Solution</summary>

**Solution.** $G$ is positive definite, so in an orthogonally diagonalized form all eigenvalues are positive; their product is positive.


</details>

<a id="section-311-7-first-gram-schmidt-step"></a>
### 7. First Gram–Schmidt step {#section-313-7-first-gram-schmidt-step}
Orthonormalize $(1,1),(1,0)$ in $\\mathbb{R}^2$.

<details>
<summary>Hint 1</summary>

Normalize the first vector and subtract its projection from the second.

</details>

<details>
<summary>Hint 2</summary>

Normalize the nonzero residual and check their dot product.

</details>

<details>
<summary>Solution</summary>

**Solution.** $q_1=(1,1)/\\sqrt{2}$; subtract projection from $(1,0)$ to get $(\\frac{1}{2},-\\frac{1}{2})$, normalize to $q_2=(1,-1)/\\sqrt{2}$.


</details>

<a id="section-336-8-span-preservation"></a>
### 8. Span preservation {#section-338-8-span-preservation}
Prove Gram–Schmidt preserves each prefix span.

<details>
<summary>Hint 1</summary>

At each step subtract only vectors in the previous prefix span.

</details>

<details>
<summary>Hint 2</summary>

Solve the same equation backwards to recover the original new vector from the orthonormal prefix.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each $w_k$ is $v_k$ minus earlier-span terms, while $v_k=w_k$ plus those terms; induction gives equality of spans.


</details>

<a id="section-361-9-orthogonal-directness"></a>
### 9. Orthogonal directness {#section-363-9-orthogonal-directness}
Prove $U \\cap U^\\perp=\\{0\\}$.

<details>
<summary>Hint 1</summary>

A vector in the intersection is orthogonal to itself.

</details>

<details>
<summary>Hint 2</summary>

Positive definiteness then forces it to be zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** A vector in both is orthogonal to itself, so its squared norm is zero and positivity forces zero.


</details>

<a id="section-386-10-dimension-complement"></a>
### 10. Dimension complement {#section-388-10-dimension-complement}
Prove $V=U \\oplus U^\\perp$.

<details>
<summary>Hint 1</summary>

Extend an orthonormal basis of U to one of V.

</details>

<details>
<summary>Hint 2</summary>

The remaining basis vectors span U⊥, giving both existence and directness.

</details>

<details>
<summary>Solution</summary>

**Solution.** Extend an orthonormal basis of $U$ to one of $V$; remaining basis vectors span $U^\\perp$, yielding the direct sum.


</details>

<a id="section-411-11-projection-formula"></a>
### 11. Projection formula {#section-413-11-projection-formula}
Verify $v-P_Uv$ is orthogonal to each $q_j$.

<details>
<summary>Hint 1</summary>

Take the inner product with q_j.

</details>

<details>
<summary>Hint 2</summary>

Orthonormality cancels every summand except the jth.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its inner product with $q_j$ is $\\langle v,q_j\\rangle-\\sum_i\\langle v,q_i\\rangle \\delta_{ij}=0$.


</details>

<a id="section-436-12-idempotence"></a>
### 12. Idempotence {#section-438-12-idempotence}
Prove $P_U^2=P_U$.

<details>
<summary>Hint 1</summary>

Projection fixes every vector already in U.

</details>

<details>
<summary>Hint 2</summary>

Apply the first projection to v and use that its image lies in U.

</details>

<details>
<summary>Solution</summary>

**Solution.** Projection fixes every vector already in $U$; since $P_Uv \\in U$, applying it again changes nothing.


</details>

<a id="section-461-13-best-approximation"></a>
### 13. Best approximation {#section-463-13-best-approximation}
Prove uniqueness.

<details>
<summary>Hint 1</summary>

Write v−u=(v−P_Uv)+(P_Uv−u).

</details>

<details>
<summary>Hint 2</summary>

The two summands are orthogonal, so squared distances differ by ‖P_Uv−u‖².

</details>

<details>
<summary>Solution</summary>

**Solution.** Pythagoras gives the displayed decomposition; the second term is nonnegative and vanishes only when $u=P_Uv$.


</details>

<a id="section-486-14-normal-equations"></a>
### 14. Normal equations {#section-488-14-normal-equations}
Derive $A^{*}(Ax-b)=0$.

<details>
<summary>Hint 1</summary>

The least-squares residual must be orthogonal to the column space.

</details>

<details>
<summary>Hint 2</summary>

Express orthogonality to every column using the conjugate transpose.

</details>

<details>
<summary>Solution</summary>

**Solution.** A minimizer has residual orthogonal to every column direction; collecting inner products with columns is exactly the equation.


</details>

<a id="section-511-15-projection-matrix"></a>
### 15. Projection matrix {#section-513-15-projection-matrix}
Verify $P=A(A^{*}A)^{-1}A^{*}$ is idempotent.

<details>
<summary>Hint 1</summary>

Multiply the displayed expression for P by itself.

</details>

<details>
<summary>Hint 2</summary>

The central A* A cancels its inverse under the full-column-rank hypothesis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiply and cancel the middle $A^{*}A$: $P^2=A(A^{*}A)^{-1}(A^{*}A)(A^{*}A)^{-1}A^{*}=P$.


</details>

<a id="section-536-16-qr-least-squares"></a>
### 16. QR least squares {#section-538-16-qr-least-squares}
Derive $Rx=Q^{*}b$.

<details>
<summary>Hint 1</summary>

Substitute A=QR into the normal equations.

</details>

<details>
<summary>Hint 2</summary>

Use Q*Q=I and invertibility of the square triangular R.

</details>

<details>
<summary>Solution</summary>

**Solution.** Normal equations for $A=QR$ give $R^{*}Q^{*}(QRx-b)=0$; invertibility of $R^{*}$ yields $Rx=Q^{*}b$.


</details>

<a id="section-561-17-complex-convention"></a>
### 17. Complex convention {#section-563-17-complex-convention}
Why is $\\langle v,q\\rangle q$ correct under first-slot linearity?

<details>
<summary>Hint 1</summary>

Check which slot must depend linearly on v.

</details>

<details>
<summary>Hint 2</summary>

The coefficient must give ⟨v−cq,q⟩=0 when ‖q‖=1.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\langle v- a q,q\\rangle=\\langle v,q\\rangle-a$, so choosing $a=\\langle v,q\\rangle$ makes the residual orthogonal.


</details>

<a id="section-586-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-588-18-numerical-boundary}
Why avoid normal equations for ill-conditioned $A$?

<details>
<summary>Hint 1</summary>

Compare the singular values of A and A* A.

</details>

<details>
<summary>Hint 2</summary>

The normal equations square the 2-norm condition number.

</details>

<details>
<summary>Solution</summary>

**Solution.** The condition number of $A^{*}A$ is roughly the square of that of $A$, amplifying rounding and data error; stable QR or SVD avoids this squaring.


</details>

<a id="section-611-investigation-projection-as-theorem-and-algorithm"></a>

<a id="section-788-20-optional-practice-extensions"></a>
### 19. LSP-17-E19. A weighted projector need not be symmetric {#section-792-lsp-17-e19-a-weighted-projector-need-not-be-symmetric}

Fit a constant to $b=(0,3)^{\\mathsf T}$ with weights $(2,1)$. Give the fitted constant and full data projector. Verify idempotence and weighted self-adjointness, and explain why ordinary matrix symmetry is the wrong test here.

<details>
<summary>Hint 1</summary>

Minimize 2(c−0)²+(c−3)² by weighted orthogonality.

</details>

<details>
<summary>Hint 2</summary>

Write P=1(1ᵀW1)^{-1}1ᵀW and check WP=PᵀW.

</details>

<a id="section-808-lsp-17-e20-complex-gram-schmidt-and-its-determinant"></a>
### 20. LSP-17-E20. Complex Gram–Schmidt and its determinant {#section-810-lsp-17-e20-complex-gram-schmidt-and-its-determinant}

Use the standard first-slot-linear inner product on $\\mathbb C^2$. Orthonormalize $v_1=(1,i)$ and $v_2=(i,0)$, give the upper triangular factor with positive diagonal, and compute the Gram determinant from that factor.

<details>
<summary>Hint 1</summary>

Project v₂ onto q₁ using first-slot linearity.

</details>

<details>
<summary>Hint 2</summary>

The positive lengths give the diagonal of R; the Gram determinant is the product of their squares.

</details>

<a id="section-826-21-solutions-and-the-original-gram-determinant-elaborat"></a>

<a id="section-884-solutions"></a>
## Solutions {#section-886-solutions}

<a id="section-828-21-solutions-and-the-original-gram-determinant-elaborat"></a>
<a id="section-828-lsp-17-e19-a-weighted-projector-need-not-be-symmetric-s"></a>
### LSP-17-E19. A weighted projector need not be symmetric — solution {#section-830-lsp-17-e19-a-weighted-projector-need-not-be-symmetric-s}

<details>
<summary>Solution</summary>


The constant is $(2\\cdot0+1\\cdot3)/3=1$ and $P=\\frac13\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}$. The row weights sum to one, so multiplying $P$ by itself returns $P$. With $W=\\operatorname{diag}(2,1)$, $WP=\\frac13\\begin{pmatrix}4&2\\\\2&1\\end{pmatrix}=P^{\\mathsf T}W$. Its unequal off-diagonal entries show $P\\ne P^{\\mathsf T}$. Orthogonality here is defined by $W$, not the standard Euclidean inner product.


</details>

<a id="section-839-lsp-17-e20-complex-gram-schmidt-and-its-determinant-sol"></a>
### LSP-17-E20. Complex Gram–Schmidt and its determinant — solution {#section-841-lsp-17-e20-complex-gram-schmidt-and-its-determinant-sol}

<details>
<summary>Solution</summary>


Take $q_1=(1,i)/\\sqrt2$. The coefficient $\\langle v_2,q_1\\rangle=i/\\sqrt2$, so the residual is $(i/2,1/2)$ with norm $1/\\sqrt2$. Hence $q_2=(i,1)/\\sqrt2$ and $R=\\begin{pmatrix}\\sqrt2&i/\\sqrt2\\\\0&1/\\sqrt2\\end{pmatrix}$. The two q vectors are orthonormal, their indicated combination recovers $v_2$, and $\\det G=|\\det R|^2=1$.


</details>

<a id="section-850-original-exercise-6-a-local-proof-without-the-spectral-"></a>
### Original Exercise 6: a local proof without the spectral theorem {#section-852-original-exercise-6-a-local-proof-without-the-spectral-}

The original key uses orthogonal diagonalization, whose proof comes later. For the independent real list, Section 15 gives Gram–Schmidt with $G=R^{\\mathsf T}R$ and strictly positive diagonal entries $R_{kk}=\\|w_k\\|$. Therefore $\\det G=\\prod_k\\|w_k\\|^2>0$ using only determinant multiplication and triangularity. This provides a local dependency route while preserving the correct original key.

<a id="section-854-22-proof-and-calculus-boundary"></a>
`;export{e as default};