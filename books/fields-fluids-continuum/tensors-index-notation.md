
# Tensors and Index Notation for Continua

Stress, strain and heat conduction use arrays of components, but the physical object must not depend on the orthonormal axes chosen to report it. This chapter builds the second-order tensor language needed for continuum balances. It proves transformation and contraction rules, fixes the gradient/divergence convention, and derives the determinant and area identities used by transport. The setting is Euclidean three-dimensional space with orthonormal frames; curvilinear coordinates need a metric and connection beyond this primer.

Preparation is matrix multiplication, determinants, the spectral theorem for real symmetric matrices and ordinary vector calculus. A tensor here is first a linear map or a multilinear form with a stated geometric domain. An arbitrary table becomes tensor components only when its transformation rule matches that domain. This distinction is especially important for the deformation gradient, which maps material vectors to spatial vectors rather than acting within a single frame.

## Components follow from a basis and a map

For an orthonormal basis write a vector as its summed components times basis vectors. A linear map A is determined by its action on those basis vectors. Its component with indices i and j is the ith output component when the input is the jth basis vector. Thus $(Av)_i=A_{ij}v_j$, with the second index labelling the input direction. The same matrix represents a bilinear form through $v\cdot Aw$ after Euclidean identification of vectors and covectors.

The Einstein convention sums an index appearing exactly twice in a product. An index appearing once is free and must have the same range and position on both sides of an equation. In the equation above, i is free and j is summed. An index appearing three times in one monomial is invalid shorthand: write an explicit sum or introduce distinct labels. Dummy indices may be renamed without changing meaning, provided the new labels do not collide with free ones.

For example the squared vector norm is $v_iv_i$, the trace is $A_{ii}$, and the ith component of a product is $A_{ij}B_{jk}v_k$. Expanding these as ordinary finite sums is always legitimate and often the quickest way to diagnose an ambiguous expression. Repeated-index notation compresses an already meaningful operation; it does not define an operation by typography alone.

The Kronecker symbol is one when its indices agree and zero otherwise. It represents the identity map in every orthonormal basis. Contracting it with a vector replaces one label by the other. A fourth-order tensor has four transformation factors and can act on a second-order tensor, as an elasticity map does. Its component symmetries depend on the input space and physical assumptions; they do not follow just from having four indices.

## A passive change of axes has a definite matrix order

Let the columns of an orthogonal matrix Q be the new basis vectors written in the old basis. Vector components in the new frame are $v'=Q^Tv$. Apply this to the output and input of a linear map: $Av=Q A'v'$, so

$$A'=Q^TAQ,\qquad A'_{ij}=Q_{ki}A_{k\ell}Q_{\ell j}.$$

The order is fixed by the declared meaning of Q. An active physical rotation described by a matrix R instead sends a spatial tensor to $RAR^T$. These formulas are compatible, but mixing their interpretations can reverse a stress-rotation angle or apply an inverse rotation twice. State whether the axes or the physical object have changed before inserting components.

Orthogonality preserves dot products. The same cancellation of Q factors proves that trace, determinant and eigenvalues are unchanged by a passive tensor rotation. Similarity preserves eigenvalues even for a nonsymmetric matrix, while symmetry is what gives orthogonal principal axes. A stress can have negative principal values under the tension-positive convention; symmetry alone does not mean positive definiteness.

For two second-order tensors define the double contraction $A:B=\sum_{ij}A_{ij}B_{ij}=\operatorname{tr}(A^TB)$. Substitute their transformation formulas and sum the orthogonal factors to show this scalar is invariant. The transpose matters: $\operatorname{tr}(AB)$ is a different contraction for general nonsymmetric tensors. Confusing them changes power terms when a skew part is present.

### Example 1.1: pure shear in rotated axes

In a plane take the symmetric tensor with zero diagonal and off-diagonal entry tau. Rotate the axes by forty-five degrees, with first new basis vector $(1,1)/\sqrt2$ and second $(-1,1)/\sqrt2$. Multiplication by $Q^TAQ$ gives diagonal entries tau and minus tau and zero off-diagonal entries. The same physical shear has become principal tension and compression components.

The trace remains zero, the determinant remains minus tau squared and the Frobenius norm squared remains twice tau squared. A component such as the first diagonal entry is therefore frame dependent even when these scalar invariants are not. The example does not mean the physical loading changed when the axes changed.

Extend the planar tensor with a zero third row and column when using the three-dimensional trace decomposition below. A two-dimensional in-plane mean and the three-dimensional spherical mean then have different denominators. Plane stress, plane strain and a genuinely two-dimensional material are distinct modelling reductions, so a factor of one third should not be replaced by one half without declaring the reduction.

## Symmetric and skew parts separate deformation from spin

Every square tensor splits uniquely into its symmetric and skew parts. Their double contraction vanishes: exchanging the two summed indices changes the skew factor's sign while leaving the symmetric factor unchanged. Hence the squared Frobenius norm is the sum of the squared norms of those two parts.

For a velocity field use the convention $(\nabla v)_{ij}=\partial_jv_i$. Its symmetric part is the rate-of-deformation tensor D and its skew part is the spin tensor W. If a classical stress is symmetric, its contraction with the full velocity gradient equals its contraction with D. Angular-momentum balance later supplies stress symmetry under the no-couple assumptions; the orthogonality calculation explains the resulting mechanical power simplification.

A three-dimensional tensor also splits into one third its trace times identity plus a traceless deviator. These parts are orthogonal in the double-contraction inner product. For a tension-positive stress, positive compression pressure corresponds to the spherical stress minus p times identity. The pressure contribution to power is minus p times the velocity divergence. It vanishes in an incompressible motion, without requiring pressure itself to vanish.

### Example 1.2: rigid rotation has no symmetric rate

Let velocity be $v=(-\omega x_2,\omega x_1,0)$ with constant angular speed. Its gradient has entries minus omega and omega in the two off-diagonal planar positions. It is skew, so D is zero and W equals the full gradient. Every symmetric stress has zero power contraction with this velocity gradient.

This is a kinematic statement about a rigid rotation, not a proof that every rotating flow has no strain. A radial change of angular speed generally creates a symmetric part. Likewise the acceleration of a rigidly rotating particle is nonzero even though D is zero. Deformation rate, spin and acceleration describe different features of the motion.

For a simple shear $v=(\gamma x_2,0,0)$, D and W each have half the off-diagonal shear magnitude, with symmetric and antisymmetric signs respectively. Keeping only W would discard actual deformation; treating the entire gradient as a symmetric strain would falsely include rigid spin. The split is exactly what the later constitutive chapters need.

## Gradients and divergences are adjoint through boundary work

The row-divergence convention for a tensor is $(\operatorname{div}\sigma)_i=\partial_j\sigma_{ij}$. Integrating the derivative of $v_i\sigma_{ij}$ and applying the divergence theorem gives

$$\int_\Omega v\cdot\operatorname{div}\sigma
=\int_{\partial\Omega}v\cdot\sigma n
-\int_\Omega\sigma:\nabla v.$$

This identity simultaneously fixes traction as $\sigma n$, the gradient's index order and the contraction in internal power. A book using the transposed gradient can be equally consistent, but must transpose the matching divergence or contraction. Copying one formula from a different convention can break this integration-by-parts balance.

For a scalar field the gradient components are its coordinate derivatives, and divergence of that gradient is the Laplacian. For a vector field the componentwise Laplacian follows by applying the same scalar operation to each component. Under a constant orthogonal coordinate change, the chain rule and orthogonality show that these differential operators transform as the corresponding vectors and tensors. A position-dependent basis introduces additional derivative terms; the constant-frame calculation cannot be applied unchanged in cylindrical coordinates.

The oriented permutation symbol expresses cross products through $(a\times b)_i=\varepsilon_{ijk}a_jb_k$. In a right-handed orthonormal frame its nonzero values are plus or minus one according to permutation parity. The contraction identity for two such symbols follows by checking whether their index pairs repeat or differ, giving the difference of two Kronecker products. Applying it to twice the curl yields the vector identity curl curl v equals gradient divergence v minus the componentwise Laplacian, when the mixed derivatives commute.

Cross products depend on orientation. Under an orthogonal reflection an additional determinant factor appears in the transformation of the permutation symbol. An axial vector such as a cross product therefore differs from a polar vector under improper rotations. Most continuum observer transformations use proper rotations; specifying that restriction avoids treating orientation-sensitive symbols as unchanged under every orthogonal matrix.

## A deformation gradient has two kinds of indices

Let material coordinates be denoted by capital indices and spatial coordinates by lowercase indices. The deformation gradient $F_{iA}$ maps a reference tangent vector to its current spatial tangent. With independent orthonormal changes of spatial and material bases it transforms as $F'=Q_s^TFQ_m$. It is a two-point tensor, so applying one same-frame similarity formula without justification is incorrect.

The right tensor $C=F^TF$ acts on material vectors and transforms with the material basis only. The left tensor $B=FF^T$ acts on spatial vectors and transforms with the spatial basis only. For an invertible deformation they are positive definite, because their quadratic forms are squared lengths of invertibly transformed vectors. Their eigenvalues agree, but their eigenvectors belong to different tangent spaces.

### Example 1.3: stretch with a superposed rotation

Take a diagonal reference stretch with positive principal factors and multiply it on the left by a proper spatial rotation R. Then $F=R\Lambda$. Its right tensor is $\Lambda^2$, while its left tensor is $R\Lambda^2R^T$. Thus a superposed spatial rotation leaves reference stretch measurements unchanged but rotates their spatial principal directions.

The determinant is the product of the three stretch factors because the rotation has determinant one. This volume factor is not the sum of their changes. For factors two, one half and one, the volume factor is one despite substantial directional deformation. Volume preservation therefore does not mean a rigid motion or zero strain; it means only the determinant constraint.

## Determinants control volume and cofactors control area

For an invertible differentiable matrix F, multilinearity of the determinant gives its derivative as the sum of determinants with one column differentiated. Writing that column derivative in the original column basis leaves only its same-column coefficient, since every other replacement repeats a column. Summing gives Jacobi's formula

$$\dot J=J\operatorname{tr}(F^{-1}\dot F).$$

For a motion, differentiating its spatial velocity with respect to a material coordinate gives $\dot F=(\nabla v)F$. Cyclic invariance of trace then yields $\dot J=J\operatorname{div}v$. This identity underlies the transport theorem. It assumes enough smoothness to exchange the derivatives and invertibility to use the displayed inverse; the cofactor derivative formula itself extends to singular matrices without that inverse expression.

Define $\operatorname{Cof}F=JF^{-T}$ for invertible F. The cross-product identity

$$Fa\times Fb=(\operatorname{Cof}F)(a\times b)$$

follows by taking a dot product with any vector Fw. The left triple product is J times the reference triple product, while $F^T\operatorname{Cof}F=JI$ gives the same value on the right. Invertibility makes such test vectors span the space, proving equality.

Applying this to two tangent vectors of an oriented surface gives Nanson's area relation $n\,da=(\operatorname{Cof}F)N\,dA$. Area change depends on surface orientation, whereas volume change uses only J. For orientation-preserving motions J is positive and the outward orientations can be matched consistently. A negative determinant requires an orientation discussion and is excluded from the ordinary continuum motion convention used here.

These formulas are local. Positive determinant guarantees local invertibility under the inverse-function theorem, but not global injectivity of an entire motion. The next chapter states the additional one-to-one motion assumption before using a global inverse to exchange material and spatial descriptions.

## Exercises with staged help

### 1. Free and dummy indices

Expand $A_{ij}v_j$ in three dimensions and explain why $A_{ij}v_jw_j$ is invalid Einstein shorthand.

<details><summary>Hint 1</summary>

The output label is fixed while the other label is summed.

</details>
<details><summary>Hint 2</summary>

A dummy label must appear exactly twice in one monomial.

</details>
<details><summary>Full solution</summary>

The ith component is $A_{i1}v_1+A_{i2}v_2+A_{i3}v_3$. In the proposed triple expression j appears three times, so the convention does not define its contraction. If the intended quantity is the sum of those triple products, write an explicit sum and explain its geometric meaning; it is not a standard invariant contraction of one map and two vectors as written.

</details>

### 2. A passive rotation

Derive the component transformation of a linear map from $v=Qv'$ and $Av=Q A'v'$.

<details><summary>Hint 1</summary>

The identity holds for every input component vector.

</details>
<details><summary>Hint 2</summary>

Multiply on the left by the orthogonal inverse.

</details>
<details><summary>Full solution</summary>

Substituting gives $AQv'=QA'v'$ for every vector, hence $AQ=QA'$. Multiply by $Q^T$ to obtain $A'=Q^TAQ$. The result depends on Q being the matrix of new basis columns in old components; an active rotation uses the separately declared convention.

</details>

### 3. Symmetric-skew orthogonality

Prove that the double contraction of a symmetric tensor and a skew tensor vanishes.

<details><summary>Hint 1</summary>

Exchange the two summed labels.

</details>
<details><summary>Hint 2</summary>

The contraction becomes its own negative.

</details>
<details><summary>Full solution</summary>

Writing S symmetric and W skew, $S_{ij}W_{ij}=S_{ji}W_{ji}=-S_{ij}W_{ij}$. Over real scalars this forces the contraction to zero. Thus a symmetric classical stress does work only against the symmetric part of the velocity gradient under the declared convention.

</details>

### 4. Spherical power

For stress minus p times identity, compute its contraction with the velocity gradient and explain the incompressible case.

<details><summary>Hint 1</summary>

The identity contraction selects the trace.

</details>
<details><summary>Hint 2</summary>

The trace of the velocity gradient is its divergence.

</details>
<details><summary>Full solution</summary>

The contraction is $-p\partial_iv_i=-p\operatorname{div}v$. It vanishes in a divergence-free motion even if p is large or spatially varying. Pressure can still exert boundary traction and enforce the incompressibility constraint; zero local volume-change power does not remove its dynamical role.

</details>

### 5. Divergence convention

For $\sigma_{ij}=x_ix_j$, compute its row divergence in three dimensions.

<details><summary>Hint 1</summary>

Apply the product rule and sum over j.

</details>
<details><summary>Hint 2</summary>

The derivative of the first factor contributes once; the second contributes once per spatial dimension.

</details>
<details><summary>Full solution</summary>

Summing $\partial_j(x_ix_j)$ gives $\delta_{ij}x_j+x_i\delta_{jj}=x_i+3x_i=4x_i$. Thus the divergence vector is four times the position vector. The same calculation in n dimensions gives $(n+1)x$, displaying where the dimension enters.

</details>

### 6. Anisotropic conduction

Let conductivity be diagonal with entries one, two and three in its principal frame. What are its trace and eigenvalues after an orthogonal change of axes, and can its off-diagonal components become nonzero?

<details><summary>Hint 1</summary>

Use orthogonal similarity.

</details>
<details><summary>Hint 2</summary>

Scalar invariants and individual array entries have different transformation behaviour.

</details>
<details><summary>Full solution</summary>

The eigenvalues remain one, two and three and the trace remains six. A rotation mixing distinct principal directions generally produces nonzero off-diagonal entries. Positivity of the quadratic form is preserved, so heat flux minus conductivity times temperature gradient still has nonnegative thermal dissipation under that constitutive convention.

</details>

### 7. A two-point map

Derive the transformation of $C=F^TF$ from the independent spatial and material basis changes.

<details><summary>Hint 1</summary>

Insert $F'=Q_s^TFQ_m$ twice.

</details>
<details><summary>Hint 2</summary>

The spatial orthogonal factors cancel in the middle.

</details>
<details><summary>Full solution</summary>

The product is $C'=Q_m^TF^TQ_sQ_s^TFQ_m=Q_m^TCQ_m$. Thus C acts in the material space and its components depend only on that basis. The analogous product for B depends only on the spatial basis. They encode related stretches in different spaces.

</details>

### 8. Volume without rigidity

For diagonal stretch factors three, one third and one, compute J and explain why this is not a rigid motion.

<details><summary>Hint 1</summary>

Multiply the factors for the determinant.

</details>
<details><summary>Hint 2</summary>

A rigid map preserves all vector lengths, not just volume.

</details>
<details><summary>Full solution</summary>

J is one. The first coordinate length triples and the second shrinks to one third, so lengths are not preserved and $F^TF$ is not identity. The map is volume preserving but deforming. Incompressibility constrains the determinant and does not restrict every stretch to one.

</details>

### 9. Area change

For $F=\operatorname{diag}(2,3,4)$, compute the oriented area factors for surfaces normal to each coordinate direction.

<details><summary>Hint 1</summary>

Compute the determinant and inverse transpose.

</details>
<details><summary>Hint 2</summary>

Each area factor is the product of the two tangential stretches.

</details>
<details><summary>Full solution</summary>

J is twenty-four and the cofactor matrix is diagonal with entries twelve, eight and six. Those are the area factors for the three coordinate-normal surfaces. They differ from J because a surface has two tangential directions rather than three volume directions. All orientations are preserved because the stretches are positive.

</details>

### 10. Determinant rate

If $\dot F=LF$ with invertible F and constant trace of L equal to a, solve for J from its initial value.

<details><summary>Hint 1</summary>

Use Jacobi's formula and cyclic invariance of trace.

</details>
<details><summary>Hint 2</summary>

The resulting scalar equation has constant coefficient a.

</details>
<details><summary>Full solution</summary>

The rate is $\dot J=J\operatorname{tr}(F^{-1}LF)=aJ$, hence $J(t)=J(0)e^{at}$. Zero trace preserves initial volume. Positive trace expands it and negative trace contracts it while the motion remains invertible. This local determinant evolution does not by itself establish global one-to-one motion.

</details>

## Sources and continuation

Gurtin, *An Introduction to Continuum Mechanics*, uses this Euclidean tensor language for kinematics and balance. The linear-algebra identities and determinant/area derivations above are supplied directly. Continue to [material and spatial descriptions](material-and-spatial-descriptions.md), where F becomes the derivative of a motion and the distinction between local invertibility and global particle labels becomes essential.
