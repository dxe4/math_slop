
# Finite-Dimensional Spectral Theorems {#section-1-finite-dimensional-spectral-theorems}

Spectral theorems identify exactly when an operator admits an orthonormal eigenbasis. The complex theorem classifies normal operators; the real theorem classifies self-adjoint operators by orthogonal diagonalization and real normal operators by $1\times 1$ and rotation-dilation $2\times 2$ blocks.

<a id="section-3-1-complex-normal-theorem"></a>
## 1. Complex normal theorem {#section-5-1-complex-normal-theorem}

**Theorem 19.5.** A complex finite-dimensional operator is unitarily diagonalizable iff it is normal.

One proof uses Schur triangularization: the characteristic polynomial has a root, and induction produces a unitary basis in which $T$ is upper triangular. A triangular normal matrix is diagonal: comparing squared norms of the first row and column forces the first off-diagonal entries zero, then induct. Conversely a unitary diagonalization $T=UDU^{*}$ gives $T^{*}T=U D^{*}D U^{*}=U DD^{*}U^{*}=TT^{*}$.

<a id="section-9-2-real-self-adjoint-theorem"></a>
## 2. Real self-adjoint theorem {#section-11-2-real-self-adjoint-theorem}

**Theorem 19.6.** A real self-adjoint operator has an orthonormal basis of eigenvectors and real eigenvalues.

Maximize the continuous Rayleigh quotient on the unit sphere (compact in finite dimension). A maximizing vector is an eigenvector, shown by differentiating along orthogonal directions or completing a quadratic variation. Its orthogonal complement is invariant because self-adjointness transfers orthogonality. Induct on dimension.

The complex self-adjoint theorem follows from the normal theorem and reality of eigenvalues. A real orthogonally diagonalizable matrix is necessarily symmetric, so symmetry is also necessary.

<a id="section-17-3-real-normal-form"></a>
## 3. Real normal form {#section-19-3-real-normal-form}

A real normal operator need not have real eigenvalues. Its complexification is unitarily diagonalizable; conjugate eigenpairs combine into orthogonal invariant real planes. Hence an orthonormal real basis gives blocks $[\lambda]$ and

$\begin{pmatrix}a & -b \\ b & a\end{pmatrix}$, $b>0$.

This is block diagonal, not necessarily diagonal over $R$.

<a id="section-25-4-functional-calculus"></a>
## 4. Functional calculus {#section-27-4-functional-calculus}

**Definition 19.1 (Finite spectral functional calculus).**

For a normal operator on a finite-dimensional complex inner-product space, write $T=\sum \lambda_iP_i$ with orthogonal spectral projections; for a real normal operator, use its complexification and conjugation-compatible functions when the output must be real. Then

$f(T)=\sum f(\lambda_i)P_i$

for every function defined on the finite spectrum. This extends polynomial calculus without interpolation ambiguity. It yields

$\lVert T\rVert_2=\max_i\left|\lambda_i\right|$,

and for self-adjoint $A$, $\min \lambda_i \le  R_A(v)\le \max \lambda_i$.

<a id="section-39-5-positive-square-roots"></a>
## 5. Positive square roots {#section-41-5-positive-square-roots}

**Theorem 19.3 (The positive square root).**

If $A\ge 0$, write $A=U \operatorname{diag}(\lambda_i)U^{*}$ with $\lambda_i\ge 0$ and define

$A^{\frac{1}{2}}=U \operatorname{diag}(\sqrt{\lambda_i})U^{*}$.

It is positive, squares to $A$, and is the unique positive square root. More generally real functions on the spectrum define self-adjoint functions of $A$.

<a id="section-49-6-singular-values-and-polar-decomposition"></a>
## 6. Singular values and polar decomposition {#section-51-6-singular-values-and-polar-decomposition}

**Definition 19.2 (Singular values and polar factors).**

Eigenvalues of $T^{*}T$ are nonnegative. Their square roots are singular values. With orthonormal eigenvectors $v_i$ and positive singular values $\sigma_i$, set $u_i=Tv_i/\sigma_i$; these are orthonormal. Extending bases yields an SVD $T=U \Sigma V^{*}$.

For invertible $T$, $T=Q(T^{*}T)^{\frac{1}{2}}$, with $Q=T(T^{*}T)^{-\frac{1}{2}}$ unitary. For singular $T$, $Q$ is a partial isometry and its extension off the support is not unique.

<a id="section-57-7-variational-principles"></a>
## 7. Variational principles {#section-59-7-variational-principles}

For self-adjoint eigenvalues ordered $\lambda_1\ge \ldots \ge \lambda_n$,

$\lambda_1=\max_{\lVert v\rVert=1}\langle Av,v\rangle$, $\lambda_n=\min\ldots$.

Restricting to orthogonal complements yields the Courant–Fischer min–max hierarchy. For singular values, $\sigma_1=\max_{\lVert v\rVert=1}\lVert Tv\rVert$. For an invertible square operator, $\sigma_n$ controls the 2-norm distance to singularity and satisfies $\lVert T^{-1}\rVert_2=1/\sigma_n$. For a rectangular map, the corresponding statement concerns loss of full rank and uses the smallest singular value associated with the relevant full-rank condition.

<a id="section-65-8-boundaries"></a>
## 8. Boundaries {#section-67-8-boundaries}

Normality is essential: diagonalizable nonnormal operators need not possess an orthonormal eigenbasis. Infinite-dimensional spectral theorems require topology, boundedness/domain hypotheses, and often projection-valued measures. Numerical eigensolvers establish residual and backward-error claims, not exact diagonalization of rounded data.

<a id="section-69-exercises-with-full-solutions"></a>
## Investigation: spectral theorem to PCA and energy {#section-623-investigation-spectral-theorem-to-pca-and-energy}

Given a centered data matrix $X$ with $m>0$ observations, prove $C=X^{*}X/m$ is positive, derive its principal direction variationally, and separate algebraic, statistical, and numerical claims.

**Investigation solution.** $\langle Cv,v\rangle=\lVert Xv\rVert^2/m\ge 0$, so the spectral theorem gives an orthonormal eigenbasis. Sample variance along unit $v$ is $\lVert Xv\rVert^2/m=\langle Cv,v\rangle$, maximized by a top eigenvector; subsequent orthogonal directions follow Courant–Fischer. Algebraically this exactly optimizes the observed quadratic form. Statistically, interpreting it as population structure needs a sampling/model argument. Numerically, an eigensolver supplies residuals and stability evidence; nearly tied eigenvalues identify a stable leading subspace more readily than a unique direction.
<a id="section-626-9-development-complete-the-diagonalization-arguments"></a>
## 9. Development: complete the diagonalization arguments {#section-628-9-development-complete-the-diagonalization-arguments}

Throughout the spectral optimization statements below, the inner-product space is nonzero and finite-dimensional over $R$ or $C$. The zero-dimensional spectral theorem has the empty orthonormal basis, but no unit vector on which to take a maximum. Adjoints use the book's convention that the inner product is linear in its first slot.

For complex Schur triangularization, begin with an eigenvalue $\lambda$ and a unit eigenvector $e_1$. Existence uses the fundamental theorem of algebra applied to the characteristic polynomial; that is an explicit prerequisite, not a consequence of normality. Complete $e_1$ to an orthonormal basis. The matrix has block form
$$\begin{pmatrix}\lambda&r\\0&B\end{pmatrix}.$$
Apply induction to the operator on the remaining coordinate space represented by $B$, and change only those coordinates by a unitary matrix. The resulting full matrix is upper triangular.

The lower-right block is a compression: for a general operator, the orthogonal complement of an eigenvector need not be invariant. Schur induction does not require that invariance. The zero lower-left block comes from the invariant first eigenline; the possible upper-right row records the remaining interaction. This distinction prevents an incorrect argument that would orthogonally diagonalize every complex operator.

Now assume the triangular matrix $R$ is normal. Its first column has only its first entry, while its first row may initially have more entries. The $(1,1)$ entries of $R^*R$ and $RR^*$ are respectively $|r_{11}|^2$ and $\sum_j|r_{1j}|^2$. Equality forces every off-diagonal entry of that row to vanish. The first coordinate is now a reducing summand, the trailing block is still normal, and induction makes it diagonal. Conversely, a unitary conjugate of a diagonal matrix is normal because diagonal matrices commute with their adjoints. This supplies both directions of the complex theorem.

For a real self-adjoint $A$, there is a different route that explains the extremal eigenvector. The continuous function $q(x)=\langle Ax,x\rangle$ attains a maximum $\lambda$ on the compact unit sphere. Let $v$ attain it, and take $w\perp v$. Along the normalized curve $(v+tw)/\sqrt{1+t^2\|w\|^2}$, differentiation at zero gives $2\langle Av,w\rangle=0$. Hence $Av$ has no component in $v^\perp$, and $\langle Av,v\rangle=\lambda$ implies $Av=\lambda v$.

Self-adjointness then makes $v^\perp$ invariant: $\langle Ax,v\rangle=\langle x,Av\rangle=0$ for $x\perp v$. Its restriction is again self-adjoint, so induction produces an orthonormal eigenbasis. For a complex self-adjoint operator, normality gives an orthonormal eigenbasis and $\langle Av,v\rangle=\overline{\langle Av,v\rangle}$ forces every eigenvalue real. The compactness and complex-eigenvalue prerequisites occur in different proofs and should not be silently exchanged.

<a id="section-642-build-the-real-planes-with-their-sign-convention"></a>
### Build the real planes with their sign convention {#section-644-build-the-real-planes-with-their-sign-convention}

Let a real normal operator have a unit complex eigenvector $z=x+iy$ for $\lambda=a+ib$, with $b>0$. Its conjugate is an eigenvector for $\overline\lambda$. The complex spectral theorem makes these distinct eigenspaces orthogonal. Expanding $\langle z,\overline z\rangle=0$ gives $\|x\|^2=\|y\|^2$ and $\langle x,y\rangle=0$. Since $\|z\|=1$, each real part has norm $1/\sqrt2$.

Separating the real and imaginary parts of $Tz=\lambda z$ gives
$$Tx=ax-by,\qquad Ty=bx+ay.$$
Set $u=\sqrt2\,x$ and $v=-\sqrt2\,y$. They are an orthonormal real pair, with $Tu=au+bv$ and $Tv=-bu+av$. Their real block is therefore exactly $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$. The minus sign in the chosen second basis vector is what fixes this block orientation.

Choose orthonormal eigenvectors in one eigenspace from each conjugate pair and their conjugates in the other. The resulting real planes are mutually orthogonal; real eigenspaces have real orthonormal bases. Together these give the real block theorem. Each plane is reducing because its complex span is a sum of orthogonal spectral eigenspaces. A rotation block is a complete real answer, rather than evidence that a real eigenvector was overlooked.


To check the orthogonality of different real planes explicitly, write their selected complex vectors as $z_j=x_j+iy_j$ and $z_\ell=x_\ell+iy_\ell$. Both $\langle z_j,z_\ell\rangle$ and $\langle z_j,\overline{z_\ell}\rangle$ vanish. Their real parts give $\langle x_j,x_\ell\rangle+\langle y_j,y_\ell\rangle=0$ and $\langle x_j,x_\ell\rangle-\langle y_j,y_\ell\rangle=0$. Their imaginary parts similarly give the difference and sum of $\langle y_j,x_\ell\rangle$ and $\langle x_j,y_\ell\rangle$. Thus all four real cross inner products vanish. The same argument applies to distinct chosen vectors in a repeated nonreal eigenspace, since their conjugates lie in the orthogonal conjugate eigenspace.

For a real eigenvalue, the real and imaginary parts of any complex eigenvector are real eigenvectors. They span its complex eigenspace after allowing complex coefficients, and real Gram–Schmidt supplies a real orthonormal basis. This accounts for the real eigenlines as well as the nonreal planes; there is no remaining complex direction without a real block.

<a id="section-657-10-development-spectral-functions-roots-and-support"></a>
## 10. Development: spectral functions, roots and support {#section-659-10-development-spectral-functions-roots-and-support}

Use distinct spectral values $\lambda$ and their full eigenspaces, including multiplicities inside each eigenspace. The orthogonal projection $P_\lambda$ is determined by that eigenspace, not by a selected basis within it. It can also be computed by interpolation:
$$P_\lambda
 =\prod_{\mu\ne\lambda}\frac{T-\mu I}{\lambda-\mu}.$$
On the $\lambda$ eigenspace this polynomial is one, and on every other eigenspace it is zero. The denominators are nonzero because the product runs over distinct values. This proves that the projection depends only on $T$ and the specified eigenvalue.

Consequently $f(T)=\sum_\lambda f(\lambda)P_\lambda$ is independent of all eigenbasis choices. Two polynomials agreeing on the spectrum give the same operator. More generally the spectral formula gives a complex-linear operator for any function on the finite complex spectrum; it makes no assertion about continuity or an infinite-dimensional functional calculus.

For a real normal operator, perform this construction on its complexification. The result preserves the original real space exactly when
$$f(\overline\lambda)=\overline{f(\lambda)}$$
at every spectral value. Indeed conjugation takes the $\lambda$ eigenspace to the conjugate eigenspace, so this equation is precisely what makes $f(T)$ commute with conjugation. On real eigenvalues it requires real function values. A real vector is a fixed point of conjugation, so a commuting operator maps it to another real vector.

**Worked example 19.1 (When a spectral function preserves the real space).**

For example, the real quarter-turn $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ has complex spectrum $i,-i$. Assigning both points the value $i$ gives $iI$ on the complexification, which is not a real operator. Assigning values $i,-i$ gives $J$, while assigning $-i,i$ gives $-J$. The field of the output must therefore be checked, even when the input matrix is real.

Here the spectral projectors can be computed without choosing eigenvectors. Because $J^2=-I$, put $P_i=(I-iJ)/2$ and $P_{-i}=(I+iJ)/2$. Their sum is $I$, their product is $(I+J^2)/4=0$, and each is idempotent. Direct multiplication gives $JP_i=iP_i$ and $JP_{-i}=-iP_{-i}$. Equal assigned values therefore produce $iP_i+iP_{-i}=iI$, whereas conjugate assigned values produce $iP_i-iP_{-i}=J$. Multiplication by $i$ does not send a nonzero real coordinate vector to a real one, while $J$ does. These identities supply the field-of-output certificate in the example.

For a positive $A$, taking the nonnegative scalar root of each eigenvalue constructs $A^{1/2}$. To prove uniqueness without presuming a root is already a function of $A$, suppose $B$ is positive and $B^2=A$. Then $AB=B^3=BA$, so every eigenspace $E_\lambda$ of $A$ is invariant under $B$. The self-adjoint restriction of $B$ to this space has an orthonormal eigenbasis; its eigenvalues are nonnegative and satisfy $\mu^2=\lambda$. Thus all equal $\sqrt\lambda$, forcing $B|_{E_\lambda}=\sqrt\lambda I$. Positivity is essential: $I$ has other square roots, such as $\operatorname{diag}(1,-1)$, which are not positive.



<a id="section-680-compute-a-spectral-function-without-taking-entrywise-fu"></a>
### Compute a spectral function without taking entrywise functions {#section-682-compute-a-spectral-function-without-taking-entrywise-fu}

**Worked example 19.2 (Compute a square root through spectral projectors).**

For the real positive matrix $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, the eigenspaces are the lines of $(1,1)$ and $(1,-1)$, with eigenvalues three and one. Interpolation gives
$$P_3=(A-I)/2=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix},
\qquad P_1=(3I-A)/2=\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}.$$
Multiplication verifies $P_3+P_1=I$, $P_3P_1=0$ and $P_j^2=P_j$. Therefore
$$A^{1/2}=\sqrt3P_3+P_1
 =\frac12\begin{pmatrix}\sqrt3+1&\sqrt3-1\\\sqrt3-1&\sqrt3+1\end{pmatrix},$$
and $A^{-1}=\frac13P_3+P_1$. Squaring the first expression uses orthogonal projection products and returns $3P_3+P_1=A$. The entries have not been square-rooted separately: the matrix with entries $\sqrt2,1,1,\sqrt2$ would square to $\begin{pmatrix}3&2\sqrt2\\2\sqrt2&3\end{pmatrix}$, a different matrix. Functional calculus acts on spectral subspaces, not on an unstructured list of entries.

For completeness, let $T:F^n\to F^m$ over $R$ or $C$, with $m,n\ge1$. Choose an orthonormal eigenbasis $v_i$ of $T^*T$. If its positive eigenvalues are $\sigma_1^2,\ldots,\sigma_r^2$, the vectors $u_i=Tv_i/\sigma_i$ are orthonormal because $\langle Tv_i,Tv_j\rangle=\sigma_i^2\delta_{ij}$. The remaining $v_i$ lie in $\ker T$, since their image norm squared is zero. Extend the $u_i$ to an orthonormal basis of the target. In these bases $T$ has the rectangular diagonal matrix with entries $\sigma_1,\ldots,\sigma_r$ and zeros elsewhere, proving the SVD.

The standard list has $p=\min(m,n)$ singular values: the $r$ positive ones and $p-r$ zeros. If $n>m$, $T^*T$ has $n-p$ additional structural zeros. A full-row-rank wide map can therefore have all its $p$ singular values positive despite a nonzero kernel. Confusing those structural zeros with rank deficiency would invalidate a rank-loss test. The SVD also shows directly that $T$ and $T^*$ have the same largest singular value and induced 2-norm.

The singular polar factor also has an exact scope. Put $H=(T^*T)^{1/2}$ and $S=(\ker T)^\perp=\operatorname{im}H$. Define $Q_0$ on $S$ by $Q_0(Hx)=Tx$. This is well defined because $\ker H=\ker T$, and
$$\|Q_0(Hx)\|^2=\|Tx\|^2
 =\langle T^*Tx,x\rangle=\|Hx\|^2.$$
Extend $Q_0$ by zero on $\ker T$. Then $T=Q_0H$, its initial space is $S$, and its range is $\operatorname{im}T$. This zero-on-the-kernel partial isometry is unique.

For a square operator, one may instead extend its isometry from $S$ to a unitary map by choosing an isometry from $\ker T$ to $(\operatorname{im}T)^\perp$. Those spaces have the same dimension. Such a unitary extension is generally not unique when the kernel is nonzero. This does not contradict uniqueness of $Q_0$: it changes the rule on the kernel from zero to an additional unitary choice. For rectangular maps the complementary dimensions can differ, so a unitary extension is not promised.

<a id="section-703-11-development-extremal-values-and-their-equality-cases"></a>
## 11. Development: extremal values and their equality cases {#section-705-11-development-extremal-values-and-their-equality-cases}

Let $A$ be self-adjoint, with eigenvalues $\lambda_1\ge\cdots\ge\lambda_n$ and an orthonormal eigenbasis $e_i$. For $x=\sum_i c_ie_i\ne0$,
$$R_A(x)=\frac{\sum_i\lambda_i|c_i|^2}{\sum_i|c_i|^2}.$$
This proves the extreme eigenvalue bounds and their equality cases. The upper equality holds exactly when $x$ lies in the top eigenspace; the lower equality has the analogous bottom-eigenspace condition. Ties permit several directions, but not components at strictly smaller or larger eigenvalues.

**Theorem 19.4 (Finite-dimensional min–max formulas).**

For each $1\le k\le n$, the full min–max formulas are
$$\lambda_k
 =\max_{\dim L=k}\ \min_{\substack{x\in L\\\|x\|=1}}R_A(x)
 =\min_{\dim M=n-k+1}\ \max_{\substack{x\in M\\\|x\|=1}}R_A(x).$$
To prove the first, the span of $e_1,\ldots,e_k$ attains minimum $\lambda_k$. Any other $k$-dimensional $L$ intersects the span of $e_k,\ldots,e_n$ nontrivially, since their dimensions sum to $n+1$. A unit vector in the intersection has Rayleigh quotient at most $\lambda_k$. Hence that $L$ cannot have a larger minimum. The second formula follows by the same argument with top and bottom interchanged.

These formulas exhibit attaining subspaces; they do not say every attaining subspace is an invariant spectral subspace. For $A=\operatorname{diag}(5,2,-1)$, the plane spanned by $e_2$ and $(e_1+e_3)/\sqrt2$ has constant Rayleigh quotient two. It attains the first formula at $k=2$, although applying $A$ to $e_1+e_3$ leaves that plane. The proof of the extremal value does not supply a uniqueness theorem for its subspace.

For a normal operator, the same orthonormal-coordinate calculation gives
$$\|Tx\|^2=\sum_i|\lambda_i|^2|c_i|^2.$$
Equality in $\|Tx\|\le(\max_i|\lambda_i|)\|x\|$ holds exactly when the vector is supported on eigenspaces of maximum eigenvalue modulus. For a real normal map, use its orthogonal blocks or its complexification; a rotation-dilation block has length multiplier $\sqrt{a^2+b^2}$. An orthonormal real eigenbasis is not assumed for that statement.

For an invertible square $T$, let $\sigma_{\min}>0$ be its smallest singular value. If $T+E$ is singular, some unit $v$ satisfies $(T+E)v=0$, giving
$$\|E\|_2\ge\|Ev\|=\|Tv\|\ge\sigma_{\min}.$$
Choose a corresponding unit right singular vector $v$, and put $u=Tv/\sigma_{\min}$. The rank-one perturbation $Ex=-\sigma_{\min}\langle x,v\rangle u$ has norm $\sigma_{\min}$ and makes $(T+E)v=0$. Thus the distance in induced 2-norm to a singular square operator is exactly $\sigma_{\min}$. The inner product is linear in $x$, so the displayed perturbation is a linear operator under the declared convention.

For full-column-rank rectangular maps, the same argument concerns loss of injectivity. For full-row-rank maps apply it to the adjoint, using the equality of induced 2-norms of a map and its adjoint. This is a rank-loss theorem under a stated norm. It does not say that rounding smaller than a singular value is harmless in every scientific model; uncertainty in the input must be bounded in that same norm.


<a id="section-730-what-an-exact-residual-bounds-for-a-normal-map"></a>
### What an exact residual bounds for a normal map {#section-732-what-an-exact-residual-bounds-for-a-normal-map}

Let $T$ be complex normal, $v=\sum_i c_ie_i$ a unit vector in an orthonormal eigenbasis, and $\mu\in C$. The residual satisfies
$$\|Tv-\mu v\|^2=\sum_i|\lambda_i-\mu|^2|c_i|^2
 \ge\operatorname{dist}(\mu,\operatorname{spec}T)^2.$$
Thus a residual at most $\epsilon$ puts some eigenvalue within $\epsilon$ of $\mu$. This eigenvalue statement needs normality but no separation between the eigenvalues.

A vector statement has a different denominator. Choose a group of eigenspaces, with orthogonal projection $P$, and suppose every eigenvalue outside the group is at least $\rho>0$ from $\mu$. The same sum restricted to those indices gives
$$\|(I-P)v\|\le\|Tv-\mu v\|/\rho.$$
This controls distance to the selected spectral subspace. If its eigenvalue is repeated, it does not choose a particular basis vector within that subspace. For a real normal map the calculation takes place on its complexification when complex eigenvalues are used.

**Worked example 19.3 (A nonnormal residual without eigenvalue proximity).**

Normality cannot be dropped. For $M>0$, let
$$T_M=\begin{pmatrix}0&M\\0&0\end{pmatrix},\qquad
 v_M=(M,1)/\sqrt{M^2+1},\qquad\mu=1.$$
The residual is $(0,-1)/\sqrt{M^2+1}$, tending to zero as $M$ grows, while the only eigenvalue is zero and remains distance one from $\mu$. An exact small residual for a nonnormal matrix does not give the preceding normal-eigenvalue bound.

<a id="section-748-separate-eigenvalue-stability-from-direction-stability"></a>
### Separate eigenvalue stability from direction stability {#section-750-separate-eigenvalue-stability-from-direction-stability}

If $A$ and $E$ are self-adjoint and $\|E\|_2\le\epsilon$, then every unit vector has $|\langle Ex,x\rangle|\le\epsilon$ by Cauchy–Schwarz. On every subspace the Rayleigh quotients of $A+E$ are therefore between those of $A$ minus and plus $\epsilon$. Taking the extrema in Courant–Fischer gives
$$|\lambda_k(A+E)-\lambda_k(A)|\le\epsilon$$
for every ordered index $k$. This is a finite-dimensional eigenvalue bound derived from the stated norm and symmetry, not an error certificate for unspecified rounded input.

The eigenvectors need not have a comparable gap-free conclusion. For $\delta>0$, the real matrices $\operatorname{diag}(\delta,-\delta)$ and $\operatorname{diag}(-\delta,\delta)$ differ by norm $2\delta$ and have identical ordered eigenvalues, but their top eigenlines are orthogonal. As $\delta$ tends to zero, their spectral gap tends to zero as well. This family explains why an absolute small perturbation and accurate eigenvalues do not uniformly identify an individual direction near a tie.

<a id="section-756-12-development-principal-subspaces-optimize-an-energy-c"></a>
## 12. Development: principal subspaces optimize an energy criterion {#section-758-12-development-principal-subspaces-optimize-an-energy-c}

Approximating observations by a whole $k$-dimensional subspace requires a reconstruction-loss criterion. This has a different objective from the min–max value of the preceding section.

Let $C\ge0$ have eigenvalues $\lambda_1\ge\cdots\ge\lambda_n$ and orthonormal eigenvectors $e_i$. For an orthogonal rank-$k$ projection $P$, write $w_i=\|Pe_i\|^2$. These numbers lie in $[0,1]$, sum to $\operatorname{tr}P=k$, and satisfy
$$\operatorname{tr}(PC)=\sum_i\lambda_iw_i\le\sum_{i=1}^k\lambda_i.$$
For $1\le k<n$, subtracting the left side from the right gives
$$\sum_{i\le k}\lambda_i(1-w_i)-\sum_{i>k}\lambda_iw_i
 \ge\lambda_k\left(\sum_{i\le k}(1-w_i)-\sum_{i>k}w_i\right)=0.$$
The projection onto the leading eigenspaces attains the bound.

Equivalently, the difference is the sum of nonnegative terms $\sum_{i\le k}(\lambda_i-\lambda_k)(1-w_i)+\sum_{i>k}(\lambda_k-\lambda_i)w_i$. If $\lambda_k>\lambda_{k+1}$, it is at least $(\lambda_k-\lambda_{k+1})\sum_{i>k}w_i$. Equality therefore forces every leading weight to be one and every trailing weight zero, so this optimal projection is unique. With a tie at the boundary, an optimizer must contain every eigenspace above the tie and choose the needed dimension inside the tied eigenspace. This identifies a subspace ambiguity, not a failure of the maximum value to exist. For $k=0$ or $n$, the zero or identity projection supplies the endpoint statement directly.

For a centered data matrix $X$ and $C=X^*X/m$, the squared Frobenius reconstruction loss per observation is
$$\frac{\|X-XP\|_F^2}{m}
 =\operatorname{tr}C-\operatorname{tr}(PC).$$
Expand $X(I-P)$, use $(I-P)^2=I-P$, and use trace cyclicity to obtain the equality. Therefore the minimum loss is $\sum_{i>k}\lambda_i$. This adds a multi-direction reconstruction criterion to the original one-direction investigation, without requiring a new dataset or an invented numerical run.

For $C=\operatorname{diag}(5,2,2)$ and $k=2$, captured energy is at most seven and minimum loss is two. Every plane containing $e_1$ and one unit direction in $\operatorname{span}(e_2,e_3)$ attains it. No unique second principal direction is identified by this covariance. By contrast, the maximizing one-dimensional projection is uniquely the line of $e_1$, although a unit vector on that line still has a sign or phase choice.

Neither this observed quadratic optimum nor its exact equality case establishes a population sampling claim. Nor is min–max attainment the same as energy maximization: the noninvariant plane in §11 attains the second eigenvalue bound but captures less trace than the leading spectral plane. Name the criterion before calling a computed subspace optimal.

<a id="section-778-13-optional-practice-extensions"></a>
## 15. Source scope for the spectral prerequisites {#section-853-15-source-scope-for-the-spectral-prerequisites}

The proofs above use finite-dimensional orthonormal-basis construction, sphere compactness and the fundamental theorem of algebra as prerequisites. A verified author source is Sheldon Axler, [Linear Algebra Done Right, fourth edition](https://linear.axler.net/LADR4e.pdf) (2024): 4.12–4.13 for the polynomial prerequisite, 5.19 for complex eigenvalue existence, 6.38 for Schur, 7.29/7.31 for the spectral theorems and 7.39 for the positive square root. The local arguments supply the finite-dimensional proof steps used here; they do not import infinite-dimensional spectral measures or a general perturbation theorem.

<a id="section-855-summary"></a>

## Summary

<a id="section-857-summary"></a>
Finite-dimensional spectral theorems replace normal operators by orthonormal spectral coordinates under their exact real or complex hypotheses. Those coordinates justify norm bounds, positive square roots, singular values and polar factors. Compactness supports the real extremum proof, and residuals require their own interpretation.

## Exercises {#section-71-exercises-with-full-solutions}

<a id="section-71-1-unitary-diagonal-implies-normal"></a>
### 1. Unitary diagonal implies normal {#section-73-1-unitary-diagonal-implies-normal}
Prove it.

<details>
<summary>Hint 1</summary>

Conjugate a diagonal matrix and its adjoint by the same unitary.

</details>

<details>
<summary>Hint 2</summary>

The diagonal matrices commute, giving TT*=T*T.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitute $T=UDU^{*}$; diagonal $D$ commutes with $D^{*}$, and unitary factors cancel.


</details>

<a id="section-96-2-triangular-normal-2-by-2"></a>
### 2. Triangular normal $2\times 2$ {#section-98-2-triangular-normal-2-by-2}
Show $\begin{pmatrix}a & b \\ 0 & d\end{pmatrix}$ normal implies $b=0$.

<details>
<summary>Hint 1</summary>

Compare the (1,1) entries of TT* and T*T.

</details>

<details>
<summary>Hint 2</summary>

Their difference is |b|².

</details>

<details>
<summary>Solution</summary>

**Solution.** Compare $(1,1)$ entries of $A^{*}A$ and $AA^{*}$: $\left|a\right|^2$ versus $\left|a\right|^2+\left|b\right|^2$.


</details>

<a id="section-121-3-triangular-normal-theorem"></a>
### 3. Triangular normal theorem {#section-123-3-triangular-normal-theorem}
Extend by induction.

<details>
<summary>Hint 1</summary>

Compare the first row and first column norms.

</details>

<details>
<summary>Hint 2</summary>

Upper triangularity forces every off-diagonal entry in the first row to vanish; restrict to the remaining normal block.

</details>

<details>
<summary>Solution</summary>

**Solution.** Comparing first diagonal entries forces all off-diagonal entries in the first row zero; remove the reducing first coordinate and repeat on the normal trailing block.


</details>

<a id="section-146-4-self-adjoint-eigenvalues"></a>
### 4. Self-adjoint eigenvalues {#section-148-4-self-adjoint-eigenvalues}
Prove they are real.

<details>
<summary>Hint 1</summary>

Take an eigenvector in the self-adjoint inner-product identity.

</details>

<details>
<summary>Hint 2</summary>

The eigenvalue times its positive squared norm must be real.

</details>

<details>
<summary>Solution</summary>

**Solution.** The adjoint identity makes $\lambda\lVert v\rVert^2=\overline{\lambda}\lVert v\rVert^2$ for an eigenvector.


</details>

<a id="section-171-5-orthogonal-eigenspaces"></a>
### 5. Orthogonal eigenspaces {#section-173-5-orthogonal-eigenspaces}
Prove distinct self-adjoint eigenspaces are orthogonal.

<details>
<summary>Hint 1</summary>

Move the self-adjoint operator between the two slots.

</details>

<details>
<summary>Hint 2</summary>

Subtract the two distinct real eigenvalues.

</details>

<details>
<summary>Solution</summary>

**Solution.** Transfer $T$ across the inner product to get $(\lambda-\mu)\langle v,w\rangle=0$.


</details>

<a id="section-196-6-invariant-orthogonal-complement"></a>
### 6. Invariant orthogonal complement {#section-198-6-invariant-orthogonal-complement}
If $U$ is invariant under self-adjoint $T$, prove $U^\perp$ invariant.

<details>
<summary>Hint 1</summary>

Test ⟨Tx,u⟩ for x∈U⊥ and u∈U.

</details>

<details>
<summary>Hint 2</summary>

Self-adjointness moves T to u, whose image stays in U.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $v \in U^\perp,u \in U$, $\langle Tv,u\rangle=\langle v,Tu\rangle=0$ because $Tu \in U$.


</details>

<a id="section-221-7-rayleigh-eigenvector"></a>
### 7. Rayleigh eigenvector {#section-223-7-rayleigh-eigenvector}
For a self-adjoint $A$ on a nonzero finite-dimensional real or complex inner-product space, let $v$ maximize its Rayleigh quotient on the unit sphere. Show $Av$ is parallel to $v$.

<details>
<summary>Hint 1</summary>

Let λ=⟨Av,v⟩ and examine the residual Av−λv.

</details>

<details>
<summary>Hint 2</summary>

A nonzero residual gives a direction orthogonal to v that raises the Rayleigh quotient for a sufficiently small positive displacement; use also its imaginary multiple in the complex case.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every $w\perp v$, differentiating a normalized curve through $v$ in direction $w$ gives $2\operatorname{Re}\langle Av,w\rangle=0$; using $iw$ in the complex case also kills the imaginary part. Thus $Av\perp v^\perp$, so $Av\in\operatorname{span}(v)$.


</details>

<a id="section-246-8-real-rotation"></a>
### 8. Real rotation {#section-248-8-real-rotation}
Show a 90-degree rotation is normal but not real diagonalizable.

<details>
<summary>Hint 1</summary>

Compute JJ* and J*J, then examine t²+1.

</details>

<details>
<summary>Hint 2</summary>

Normality does not create a real root of the characteristic polynomial.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its matrix is orthogonal, hence normal, but $t^2+1$ has no real root.


</details>

<a id="section-271-9-real-normal-block"></a>
### 9. Real normal block {#section-273-9-real-normal-block}
Verify $\begin{pmatrix}a & -b \\ b & a\end{pmatrix}$ is normal.

<details>
<summary>Hint 1</summary>

Multiply the block by its transpose in both orders.

</details>

<details>
<summary>Hint 2</summary>

Each product is (a²+b²)I.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its transpose product in either order is $(a^2+b^2)I$.


</details>

<a id="section-296-10-norm-of-normal-operator"></a>
### 10. Norm of normal operator {#section-298-10-norm-of-normal-operator}
Prove $\lVert T\rVert_2=\max\left|\lambda_i\right|$.

<details>
<summary>Hint 1</summary>

Expand a unit vector in an orthonormal eigenbasis.

</details>

<details>
<summary>Hint 2</summary>

Its image norm squared is a weighted average of |λ_i|², and an extremal eigenvector attains the bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** In an orthonormal eigenbasis, $\lVert Tv\rVert^2=\sum \left|\lambda_i\right|^2\left|c_i\right|^2\le \max\left|\lambda\right|^2\lVert v\rVert^2$, with equality on a maximizing eigenvector.


</details>

<a id="section-321-11-rayleigh-bounds"></a>
### 11. Rayleigh bounds {#section-323-11-rayleigh-bounds}
Prove them.

<details>
<summary>Hint 1</summary>

Use the same orthonormal eigenbasis for the quadratic form.

</details>

<details>
<summary>Hint 2</summary>

The Rayleigh quotient is a convex combination of the real eigenvalues.

</details>

<details>
<summary>Solution</summary>

**Solution.** In an orthonormal eigenbasis, the quotient is $\sum \lambda_i\left|c_i\right|^2/\sum\left|c_i\right|^2$, a convex combination of eigenvalues.


</details>

<a id="section-346-12-positive-eigenvalues"></a>
### 12. Positive eigenvalues {#section-348-12-positive-eigenvalues}
For a self-adjoint operator $A$ on a finite-dimensional real or complex inner-product space, prove $A\ge 0$ iff every eigenvalue is nonnegative.

<details>
<summary>Hint 1</summary>

Test positivity on eigenvectors for one direction.

</details>

<details>
<summary>Hint 2</summary>

For the other, expand an arbitrary vector in the orthonormal eigenbasis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Evaluate the quadratic form on eigenvectors for necessity; spectral coordinates make it a weighted sum $\sum \lambda_i\left|c_i\right|^2$ for sufficiency.


</details>

<a id="section-371-13-square-root-existence"></a>
### 13. Square root existence {#section-373-13-square-root-existence}
Verify the spectral construction.

<details>
<summary>Hint 1</summary>

Replace each nonnegative eigenvalue by its nonnegative square root.

</details>

<details>
<summary>Hint 2</summary>

Check self-adjointness, positivity and the square on the eigenbasis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Diagonal square roots are nonnegative, so the conjugated operator is positive; squaring returns each $\lambda_i$ and hence $A$.


</details>

<a id="section-396-14-square-root-uniqueness"></a>
### 14. Square root uniqueness {#section-398-14-square-root-uniqueness}
Prove uniqueness among positive roots.

<details>
<summary>Hint 1</summary>

A square root B commutes with A=B².

</details>

<details>
<summary>Hint 2</summary>

Restrict to each eigenspace of A, then use the spectral theorem for positive B on that space.

</details>

<details>
<summary>Solution</summary>

**Solution.** A positive root $B$ commutes with $A=B^2$; each eigenspace of $A$ is invariant under $B$. On it, positivity and $B^2=\lambda I$ force eigenvalues $\sqrt{\lambda}$, so $B$ equals the spectral construction.


</details>

<a id="section-421-15-singular-vector-orthogonality"></a>
### 15. Singular-vector orthogonality {#section-423-15-singular-vector-orthogonality}
Prove the $u_i$ are orthonormal.

<details>
<summary>Hint 1</summary>

Use u_i=Tv_i/σ_i.

</details>

<details>
<summary>Hint 2</summary>

Move T across the inner product and apply T*Tv_i=σ_i²v_i.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\langle Tv_i,Tv_j\rangle=\langle T^{*}Tv_i,v_j\rangle=\sigma_i^2 \delta_{ij}$; divide by $\sigma_i \sigma_j$.


</details>

<a id="section-446-16-operator-norm"></a>
### 16. Operator norm {#section-448-16-operator-norm}
Prove $\sigma_1=\max\lVert Tv\rVert$ on the unit sphere.

<details>
<summary>Hint 1</summary>

Expand a unit vector in the right singular basis.

</details>

<details>
<summary>Hint 2</summary>

The squared image norm is bounded by σ₁², with equality at a first right singular vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply the normal-operator norm result to positive $T^{*}T$: $\lVert Tv\rVert^2=\langle T^{*}Tv,v\rangle \le \lambda_{\max}(T^{*}T)$, with equality at its top eigenvector.


</details>

<a id="section-471-17-polar-unitary"></a>
### 17. Polar unitary {#section-473-17-polar-unitary}
For invertible $T$, prove $Q=T(T^{*}T)^{-\frac{1}{2}}$ is unitary.

<details>
<summary>Hint 1</summary>

Multiply Q*Q using the inverse square root.

</details>

<details>
<summary>Hint 2</summary>

For a square invertible operator, this also implies QQ*=I.

</details>

<details>
<summary>Solution</summary>

**Solution.** $Q^{*}Q=(T^{*}T)^{-\frac{1}{2}}T^{*}T(T^{*}T)^{-\frac{1}{2}}=I$; square finite dimension gives also $QQ^{*}=I$.


</details>

<a id="section-496-18-nonnormal-diagonalizable-example"></a>
### 18. Nonnormal diagonalizable example {#section-498-18-nonnormal-diagonalizable-example}
Show $\begin{pmatrix}1 & 1 \\ 0 & 2\end{pmatrix}$ diagonalizable but not unitarily diagonalizable.

<details>
<summary>Hint 1</summary>

Its two eigenvalues are distinct.

</details>

<details>
<summary>Hint 2</summary>

Compute TT* and T*T to rule out normality, which unitary diagonalizability would require.

</details>

<details>
<summary>Solution</summary>

**Solution.** It has distinct eigenvalues, so is diagonalizable. It is not normal by direct product comparison, so the normal theorem forbids unitary diagonalization.


</details>

<a id="section-521-19-polynomial-spectral-mapping"></a>
### 19. Polynomial spectral mapping {#section-523-19-polynomial-spectral-mapping}
Prove eigenvalues of $p(T)$ for normal $T$ are $p(\lambda_i)$.

<details>
<summary>Hint 1</summary>

Evaluate p(T) on an orthonormal eigenbasis.

</details>

<details>
<summary>Hint 2</summary>

The resulting diagonal entries are exactly p(λ_i), with coincidences allowed.

</details>

<details>
<summary>Solution</summary>

**Solution.** The same orthonormal eigenvectors satisfy $p(T)v_i=p(\lambda_i)v_i$; their basis accounts for all eigenvalues.


</details>

<a id="section-546-20-projection-spectrum"></a>
### 20. Projection spectrum {#section-548-20-projection-spectrum}
If $P=P^{*}=P^2$, determine its spectrum.

<details>
<summary>Hint 1</summary>

An eigenvalue of an idempotent satisfies λ²=λ.

</details>

<details>
<summary>Hint 2</summary>

The self-adjoint decomposition identifies the 0- and 1-eigenspaces; one may be absent.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its minimal polynomial divides $t(t-1)$, so its eigenvalues lie in $\{0,1\}$. More precisely, $0$ occurs exactly when $\ker P\ne 0$, and $1$ occurs exactly when $\operatorname{im}P\ne 0$; the spectral theorem gives the orthogonal kernel/image decomposition.


</details>

<a id="section-571-21-infinite-dimensional-warning"></a>
### 21. Infinite-dimensional warning {#section-573-21-infinite-dimensional-warning}
Why does compactness enter the real proof?

<details>
<summary>Hint 1</summary>

The proof selects a maximizer of a continuous function on the unit sphere.

</details>

<details>
<summary>Hint 2</summary>

Finite-dimensional compactness guarantees attainment; an infinite-dimensional unit sphere need not be compact.

</details>

<details>
<summary>Solution</summary>

**Solution.** The Rayleigh quotient must attain a maximum on the unit sphere; finite-dimensional unit spheres are compact, whereas infinite-dimensional ones are not generally compact.


</details>

<a id="section-596-22-numerical-boundary"></a>
### 22. Numerical boundary {#section-598-22-numerical-boundary}
What does a small eigenpair residual prove?

<details>
<summary>Hint 1</summary>

Write the residual as the image of v under A−λI.

</details>

<details>
<summary>Hint 2</summary>

It certifies a nearby matrix with an exact eigenpair, while forward eigenvalue conclusions require additional structure or conditioning.

</details>

<details>
<summary>Solution</summary>

**Solution.** It proves the proposed pair nearly satisfies the equation in a chosen norm; converting that to proximity to a true eigenpair needs separation and conditioning. It does not prove exact equality.


</details>

<a id="section-621-investigation-spectral-theorem-to-pca-and-energy"></a>

<a id="section-780-13-optional-practice-extensions"></a>
### 23. LSP-19-E23. Two meanings of an optimal plane {#section-784-lsp-19-e23-two-meanings-of-an-optimal-plane}

Let $A=\operatorname{diag}(7,3,-1)$ on $R^3$, and let $L=\operatorname{span}(e_2,e_1+e_3)$. Prove that $L$ attains the $k=2$ max–min eigenvalue formula but is not invariant under $A$. Compare its captured trace with that of the leading spectral plane, explaining why the two optimality criteria give different conclusions.

<details>
<summary>Hint 1</summary>

Use the orthonormal basis e₂,(e₁+e₃)/√2 for L.

</details>

<details>
<summary>Hint 2</summary>

Its compressed Rayleigh values are both 3, but A(e₁+e₃) leaves L; compare captured traces 6 and 10.

</details>

<a id="section-800-lsp-19-e24-a-real-function-of-a-real-normal-map"></a>
### 24. LSP-19-E24. A real function of a real normal map {#section-802-lsp-19-e24-a-real-function-of-a-real-normal-map}

For the real quarter-turn $J$ in §10, prescribe $f(i)=2+3i$ and $f(-i)=2-3i$. Compute $f(J)$ as a real matrix and its induced 2-norm. Then explain what changes if both spectral values are assigned $2+3i$ instead.

<details>
<summary>Hint 1</summary>

Interpolate f on i and −i as a real linear polynomial.

</details>

<details>
<summary>Hint 2</summary>

Conjugate compatibility is exactly what makes f(J) preserve the real space.

</details>

<a id="section-818-14-solutions-to-practice-extensions-and-a-repaired-orig"></a>

## Solutions

<a id="section-820-14-solutions-to-practice-extensions-and-a-repaired-orig"></a>
<a id="section-820-lsp-19-e23-two-meanings-of-an-optimal-plane-solution"></a>
### LSP-19-E23. Two meanings of an optimal plane — solution {#section-822-lsp-19-e23-two-meanings-of-an-optimal-plane-solution}

<details>
<summary>Solution</summary>


The orthonormal basis $e_2,(e_1+e_3)/\sqrt2$ of $L$ has Rayleigh value three in both directions, with zero cross term. Thus every unit vector in the plane has value three, attaining $\lambda_2=3$ in the max–min formula. However $A(e_1+e_3)=7e_1-e_3$ does not lie in $L$, so the plane is not invariant. Its compressed trace is $3+3=6$. The leading spectral plane has captured trace $7+3=10$, so $L$ is not a maximizer of that objective. A max–min attainer need not maximize the sum of Rayleigh values or be an invariant plane.


</details>

<a id="section-831-lsp-19-e24-a-real-function-of-a-real-normal-map-solutio"></a>
### LSP-19-E24. A real function of a real normal map — solution {#section-833-lsp-19-e24-a-real-function-of-a-real-normal-map-solutio}

<details>
<summary>Solution</summary>


The assigned values obey conjugation compatibility and are interpolated by $f(z)=2+3z$ on the spectrum. Hence $f(J)=2I+3J=\begin{pmatrix}2&-3\\3&2\end{pmatrix}$. Its transpose product is $13I$, so its induced 2-norm is $\sqrt{13}$. Assigning $2+3i$ at both spectral points gives $(2+3i)I$ on the complexification. It fails conjugation compatibility and does not preserve the real subspace; it is not a real operator defined by this functional calculus.



</details>

<a id="section-843-original-exercise-7-specify-the-function-and-operator-c"></a>
### Original exercise 7 — specify the function and operator class {#section-845-original-exercise-7-specify-the-function-and-operator-c}

The corrected premise names a self-adjoint operator and the Rayleigh quotient. Without self-adjointness, the real quarter-turn $J$ has $\langle Jx,x\rangle=0$ on every unit vector. All are maxima of that function, yet $Jx$ is never parallel to a nonzero real $x$. The valid derivative argument in the original key uses self-adjointness when differentiating the quadratic form. Its direct prompt repair supplies that condition and specifies the function being maximized.

<a id="section-847-original-exercise-12-why-the-premise-is-necessary"></a>
### Original exercise 12 — why the premise is necessary {#section-849-original-exercise-12-why-the-premise-is-necessary}

The corrected prompt explicitly assumes self-adjointness on a finite-dimensional real or complex inner-product space. Without that hypothesis, $\begin{pmatrix}1&3\\0&1\end{pmatrix}$ has both eigenvalues one, but at $x=(1,-1)$ its quadratic value is $x^\mathsf TAx=-1$. The original key's spectral-coordinate sufficiency argument needs an orthonormal eigenbasis. The direct prompt repair supplies the missing premise while preserving that valid key.

<a id="section-851-15-source-scope-for-the-spectral-prerequisites"></a>
