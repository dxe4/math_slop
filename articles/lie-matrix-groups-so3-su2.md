
# Matrix groups: SO(3) and SU(2)

A matrix group combines an algebraic operation with a continuous family of transformations. Two central examples preserve different inner products: real rotations preserve ordinary Euclidean lengths, while special unitary matrices preserve complex Hermitian lengths. Their matrix sizes differ, but each has three real degrees of freedom.

This L3 orientation assumes real and complex linear algebra, matrix multiplication, determinants and inner products. The idea is to read defining equations as preserved measurements. The actual primary [Matrix Groups and Examples](../books/lie-groups-lie-algebras/matrix-groups-examples.md) develops the group families, and [Matrix Groups as Manifolds](../books/lie-groups-lie-algebras/matrix-groups-manifolds.md) supplies the smooth-manifold structure and dimension proofs. No general closed-subgroup theorem is proved in this article.

## Real rotations preserve lengths and handedness

For preparation, use [Inner Products and Orthogonal Decomposition](../books/linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md) and [Adjoints, Unitary and Positive Operators](../books/linear-algebra-structure-proofs/adjoints-unitary-positive-operators.md). Their finite-dimensional matrix setting is enough for the calculations here.

The group $SO(3)$ consists of real three-by-three matrices satisfying

$$R^TR=I,\qquad\det R=1.$$

The first equation means the columns form an orthonormal basis. It also proves preservation of inner products: $(Rv)^T(Rw)=v^Tw$. The determinant condition chooses positive handedness. Orthogonality alone permits determinant minus one, as a reflection shows.

These equations are stable under multiplication. If two matrices are orthogonal, the transpose of their product times that product simplifies to the identity. Their determinants multiply to one. Their inverses are their transposes and remain in the same set. Thus the defining set really is a group, rather than an arbitrary collection of matrices satisfying a visual description.

Every member has a fixed axis. A real matrix in odd dimension has a real eigenvalue; orthogonality forces any real eigenvalue to be plus or minus one. Nonreal eigenvalues occur in conjugate pairs and their product is positive one. The determinant condition therefore forces at least one eigenvalue plus one. The plane perpendicular to its unit eigenvector is invariant, because inner-product preservation keeps images perpendicular to that vector. On that plane the transformation is a two-dimensional orientation-preserving orthogonal map, hence a rotation. This gives the axis-angle description, including the identity case in which every axis is possible.

The three real degrees of freedom should not be interpreted as nine independent entries. Orthogonality imposes six independent symmetric conditions near the identity, leaving three. Equivalently the tangent directions there are skew-symmetric three-by-three matrices. The primary manifold chapter justifies this rank calculation; merely counting written equations would not do so in an arbitrary constrained set.

## Complex unitaries preserve a Hermitian measurement

For a complex matrix use the conjugate transpose $U^*$, not just the transpose. The group $SU(2)$ consists of complex two-by-two matrices with

$$U^*U=I,\qquad\det U=1.$$

It preserves $v^*w$ and therefore the nonnegative squared norm $v^*v$. The same multiplication and inverse argument proves the group axioms, with $U^{-1}=U^*$.

There is a useful complete parametrization:

$$U=\begin{pmatrix}z&w\\-\overline w&\overline z\end{pmatrix},
\qquad |z|^2+|w|^2=1.$$

To see that no matrices are omitted, compare the ordinary two-by-two inverse formula at determinant one with the conjugate transpose. Their entries force the displayed conjugate relations, and the remaining normalization is exactly column norm one. Conversely those relations and that normalization give determinant one and orthonormal columns directly. Thus four real coordinates, the real and imaginary parts of the two complex numbers, lie on the unit three-sphere.

The unit sphere in four-dimensional real space is a smooth three-manifold, so this parametrization explains the real dimension three. It does not make the group operation ordinary coordinate addition on that sphere. Matrix multiplication supplies its particular noncommutative law. Likewise having equal dimensions does not make this group the same as the three-dimensional rotation group. The double-cover relation is a further construction, developed in the third article of this series.

## Worked example — Two exact one-parameter families

Rotation about the third real coordinate axis is

$$R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta&0\\
\sin\theta&\cos\theta&0\\0&0&1\end{pmatrix}.$$

The first two columns have norm one and zero inner product; the third is the fixed axis. The determinant is one by the sine-cosine identity. Multiplication and the addition identities give $R_\theta R_\phi=R_{\theta+\phi}$. At a quarter-turn it sends the first coordinate vector to the second while fixing the third. This verifies the geometric action rather than assigning a rotation label from the matrix's appearance.

In the complex group take $U_t=\operatorname{diag}(e^{it},e^{-it})$. Its diagonal entries have modulus one and multiply to one, so it is special unitary. It also obeys the parameter-addition law. At parameter $\pi$ it equals minus the two-by-two identity, which still has determinant one. By contrast minus the three-by-three identity has determinant minus one and does not belong to $SO(3)$.

Both families are periodic, but identifying their parameters as the same physical angle requires a specified homomorphism between the groups. Equal notation or equal dimension cannot choose that map for us. The [exponential-map primary](../books/lie-groups-lie-algebras/exponential-one-parameter-subgroups.md) explains how such families arise from tangent directions.

## Exercises

### Exercise 1 {#lie-matrix-groups-ex-1}

Show that $\operatorname{diag}(-1,-1,1)$ belongs to $SO(3)$ and identify its rotation axis and angle. Compare it with $\operatorname{diag}(-1,1,1)$.

<details><summary>Hint 1</summary>
Check orthogonality and determinant separately.
</details>
<details><summary>Hint 2</summary>
Inspect the action on the first two coordinate vectors and on the third.
</details>
<details><summary>Full solution</summary>
Both diagonal matrices are orthogonal because their diagonal entries square to one. The first has determinant one and is a half-turn around the third coordinate axis: it negates both directions in the perpendicular plane. The second has determinant minus one, so it lies in the full orthogonal group but not the special orthogonal group. It is reflection across the plane where the first coordinate is zero. Preserving lengths alone therefore does not distinguish rotations from reflections.
</details>

### Exercise 2 {#lie-matrix-groups-ex-2}

Use $z=(1+i)/2$ and $w=(1-i)/2$ to construct a special unitary matrix and give its inverse. Explain why the complex conjugates are necessary.

<details><summary>Hint 1</summary>
Each squared modulus is one half.
</details>
<details><summary>Hint 2</summary>
Apply the displayed parametrization and take its conjugate transpose.
</details>
<details><summary>Full solution</summary>
The matrix is $\frac12\begin{pmatrix}1+i&1-i\\-1-i&1-i\end{pmatrix}$. Its inverse is $\frac12\begin{pmatrix}1-i&-1+i\\1+i&1+i\end{pmatrix}$, its conjugate transpose. The squared moduli sum to one, so the parametrization proves both normalization and determinant one. An ordinary transpose would not conjugate the imaginary entries and would not preserve the Hermitian pairing. Multiplying by it would generally fail to give the identity.
</details>

## Continue in the primary book

Read [Matrix Groups and Examples](../books/lie-groups-lie-algebras/matrix-groups-examples.md) for components, compactness and other families, then [Matrix Groups as Manifolds](../books/lie-groups-lie-algebras/matrix-groups-manifolds.md) for the smooth structure. This orientation and its worked calculations are new Euler writing; those actual primary sources are linked rather than copied. No independent review is claimed.
