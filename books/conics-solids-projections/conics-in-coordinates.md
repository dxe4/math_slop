
# Conics in Coordinates {#section-1-conics-in-coordinates}

This chapter returns to the algebraic description of conic sections, developing the general second-degree equation in depth. We connect the geometric picture of slices and foci to the machinery of linear algebra: symmetric matrices, eigenvalues, and orthogonal diagonalization. The goal is to make the classification of conics computationally robust and to prepare the ground for the study of quadric surfaces in higher dimensions.

<a id="section-3-the-general-conic-equation"></a>
## The general conic equation {#section-5-the-general-conic-equation}

The general second-degree equation in two variables is

$$Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0.$$

The quadratic part $Ax^{2}+Bxy+Cy^{2}$ can be written as $\mathbf{x}^{T}Q\mathbf{x}$ where $\mathbf{x}=(x,y)^{T}$ and

$$Q=\begin{pmatrix}A&B/2\\B/2&C\end{pmatrix}.$$

The matrix $Q$ is symmetric and therefore orthogonally diagonalizable. Its eigenvalues $\lambda_{1}$ and $\lambda_{2}$ determine the type of conic, and its eigenvectors determine the principal axes.

<a id="section-15-the-discriminant-and-classification"></a>
## The discriminant and classification {#section-17-the-discriminant-and-classification}

The discriminant of the conic is $\Delta=B^{2}-4AC=-4\det Q$. The classification of nondegenerate conics is:

- $\Delta<0$ (equivalently $\det Q>0$): ellipse-like. If $A=C$ and $B=0$, it is a circle.
- $\Delta=0$ (equivalently $\det Q=0$): parabola-like.
- $\Delta>0$ (equivalently $\det Q<0$): hyperbola-like.

The word "like" is necessary because degenerate cases (point, pair of lines, empty set) can occur even when the discriminant has the right sign. The full classification requires examining the rank of the $3\times 3$ matrix

$$\begin{pmatrix}A&B/2&D/2\\B/2&C&E/2\\D/2&E/2&F\end{pmatrix}.$$

<a id="section-27-rotation-to-principal-axes"></a>
## Rotation to principal axes {#section-29-rotation-to-principal-axes}

Since $Q$ is symmetric, there exists an orthogonal matrix $R$ such that $R^{T}QR=\operatorname{diag}(\lambda_{1},\lambda_{2})$. The rotation $\mathbf{x}=R\mathbf{x}'$ removes the cross term, giving

$$\lambda_{1}x'^{2}+\lambda_{2}y'^{2}+D'x'+E'y'+F=0.$$

When $B\ne0$, one may choose a branch satisfying
$$\cot 2\theta=\frac{A-C}{B}.$$
In computation, an `atan2` formulation fixes the quadrant; when $B=0$, the coordinate axes already diagonalize $Q$ (up to swapping them). After rotation, complete the square only in directions whose eigenvalues are nonzero. A null direction may retain a linear term, as for a parabola.

<a id="section-37-worked-example-full-reduction"></a>
## Worked example: full reduction {#section-39-worked-example-full-reduction}

Reduce $5x^{2}+4xy+8y^{2}-4=0$ to standard form.

The matrix is $Q=\begin{pmatrix}5&2\\2&8\end{pmatrix}$. Its characteristic polynomial is

$$\det(Q-\lambda I)=(5-\lambda)(8-\lambda)-4=\lambda^{2}-13\lambda+36=(\lambda-4)(\lambda-9).$$

So $\lambda_{1}=4$ and $\lambda_{2}=9$. For $\lambda=4$, the eigenvector satisfies $x+2y=0$, so $\mathbf{v}_{1}=\frac{1}{\sqrt{5}}(2,-1)$. For $\lambda=9$, $\mathbf{v}_{2}=\frac{1}{\sqrt{5}}(1,2)$. The rotation matrix is

$$R=\frac{1}{\sqrt{5}}\begin{pmatrix}2&1\\-1&2\end{pmatrix}.$$

In the new coordinates, the equation is $4x'^{2}+9y'^{2}=4$, or

$$\frac{x'^{2}}{1}+\frac{y'^{2}}{4/9}=1.$$

This is an ellipse with semiaxes $a=1$ and $b=2/3$.

<a id="section-55-invariants"></a>
## Invariants {#section-57-invariants}

Under rigid coordinate motions at a fixed polynomial normalization, the quadratic matrix changes by orthogonal similarity, so the following quantities are invariant:

- The discriminant $\Delta=B^{2}-4AC$ determines the type.
- The trace $\operatorname{tr}Q=A+C=\lambda_{1}+\lambda_{2}$.
- The determinant $\det Q=AC-B^{2}/4=\lambda_{1}\lambda_{2}$.

These invariants allow classification without complete reduction. A uniform coordinate dilation rescales the quadratic coefficients, and multiplying the whole equation by a nonzero scalar rescales $Q$, its trace, determinant, and $\Delta$; only the relevant rank, inertia, and sign pattern survive those operations.

<a id="section-65-why-an-orthogonal-diagonalization-exists-here"></a>
## Why an orthogonal diagonalization exists here {#section-67-why-an-orthogonal-diagonalization-exists-here}

For this two-by-two symmetric matrix the eigenvalue discriminant is $(A-C)^2+B^2$, which is nonnegative. Thus its two eigenvalues are real. If they differ, take a nonzero eigenvector for each. Symmetry makes their inner product times the difference of the eigenvalues zero, so they are perpendicular. Normalize them and choose their signs to obtain an orthogonal coordinate change, with determinant one if a rotation is desired. If the eigenvalues coincide, the discriminant is zero, forcing $A=C$ and $B=0$. The matrix is already a scalar identity and every orthonormal frame diagonalizes it.

This proves the diagonalization fact needed for the planar classification, rather than importing the full spectral theorem in an unspecified dimension. The linear coefficients must be rotated by the same coordinate change. Removing the cross term but leaving the old linear coefficients attached to the new axes would change the polynomial and possibly its classification.

<a id="section-71-a-complete-real-classification-by-rank"></a>
## A complete real classification by rank {#section-73-a-complete-real-classification-by-rank}

Write the polynomial as $p(x)=x^TQx+\ell^Tx+F$, where $\ell=(D,E)^T$. First suppose the quadratic matrix is invertible. Its unique center is $x_0=-Q^{-1}\ell/2$. Expanding after translation gives

$$p(x_0+u)=u^TQu+F_0,\qquad
F_0=F-\tfrac14\ell^TQ^{-1}\ell.$$

The linear terms vanish because the chosen center solves their coefficient equation. Rotate to principal axes and write the right side of the quadratic equation as $\rho=-F_0$.

If the eigenvalues have the same sign, multiply the whole equation by minus one if needed so both are positive. The equation is $\lambda_1u^2+\lambda_2v^2=\rho$. A positive right side gives an ellipse with semiaxes $\sqrt{\rho/\lambda_i}$. Zero gives exactly one point, since the two nonnegative terms must vanish. A negative right side gives no real point. Thus negative discriminant alone does not guarantee a nonempty ellipse. Equal eigenvalues give a circle only in the positive-right-side case, not in its point or empty relatives.

If the eigenvalues have opposite signs, write the equation as $\lambda u^2-\mu v^2=\rho$ with both displayed coefficients positive. Nonzero right side gives a hyperbola. Its sign determines which principal axis is transverse. Zero gives two intersecting lines by factoring the difference of two squares. An indefinite quadratic part takes both signs, so in this invertible case it cannot give an empty real locus.

Now suppose the quadratic rank is one. After rotation and completing the square in its nonzero direction, the equation becomes

$$\lambda U^2+bv+c_0=0,\qquad\lambda\ne0.$$

If the retained linear coefficient $b$ is nonzero, translate the null-direction coordinate and obtain $\lambda U^2+bV=0$. This is a genuine parabola: its gradient has the constant nonzero component $b$, so there are no singular points. Completing the square in the nonzero direction did not remove this essential linear term.

If $b=0$, the equation instead asks for $U^2=-c_0/\lambda$. A positive value gives two parallel lines, zero gives a repeated line and a negative value gives an empty locus. A repeated-line polynomial is degenerate although its underlying line is a smooth set. Degeneracy of a quadratic equation must not be confused with nonsmoothness of every possible real point set.

Finally, zero quadratic rank leaves a linear equation. A nonzero linear part gives a line. If it also vanishes, the constant equation gives the whole plane when zero and the empty set otherwise. These last cases have degree below two, but including them makes the full coefficient classification and its boundary explicit.

<a id="section-94-what-the-homogeneous-matrix-adds"></a>
## What the homogeneous matrix adds {#section-96-what-the-homogeneous-matrix-adds}

Let $M$ be the symmetric three-by-three matrix displayed earlier. An invertible affine change of coordinates has a homogeneous matrix $H$ and sends $M$ to $H^TMH$. Thus its rank is preserved. For rigid coordinate motions the determinant is preserved as well, since the square of $\det H$ is one.

In the invertible-quadratic case, translating to the center makes this homogeneous matrix block diagonal with blocks $Q$ and $F_0$. Consequently $\det M=(\det Q)F_0$. A zero value detects the point or intersecting-line degeneracies in that case. In the rank-one case with retained null-direction linear coefficient $b$, its determinant is $-\lambda b^2/4$, nonzero precisely for the parabolic case.

Full homogeneous rank does not guarantee real points: the polynomial $x^2+y^2+1$ has full matrix rank but is strictly positive everywhere. Rank and inertia/sign information must be used together. Multiplying the polynomial by a nonzero scalar also rescales these numerical invariants without changing its zero set. Their geometric use therefore requires either fixed normalization or the appropriate sign/rank information invariant under that rescaling.

<a id="section-102-prove-the-focus-directrix-equivalence"></a>
## Prove the focus-directrix equivalence {#section-104-prove-the-focus-directrix-equivalence}

Choose a directrix as the line $x=0$ and a focus $(a,0)$ with $a>0$. This is a Euclidean coordinate choice putting the axis perpendicular to the directrix. For eccentricity $e>0$ the defining distance equality is

$$\sqrt{(x-a)^2+y^2}=e|x|.$$

Both sides are nonnegative, so squaring is an equivalence, not merely a necessary condition. It gives $(1-e^2)x^2-2ax+a^2+y^2=0$.

For $0<e<1$, put $A=1-e^2>0$. Completing the square yields

$$A(x-a/A)^2+y^2=a^2e^2/A>0,$$

a genuine ellipse. For $e=1$ it becomes $y^2=2a(x-a/2)$, a parabola with vertex halfway between the focus and directrix. For $e>1$, put $B=e^2-1>0$ to obtain

$$B(x+a/B)^2-y^2=a^2e^2/B>0,$$

a hyperbola. Every transformed solution satisfies the original distance equality because the squared quantities were nonnegative. Conversely every focus-directrix point was retained by each reversible step, so the classification proves both inclusions of the locus.

A circle is not obtained from a finite fixed focus-directrix pair by simply setting $e=0$: that equation would force the point to equal the focus. The circle has eccentricity zero in the separate geometric limiting convention, where a finite directrix is no longer present. This is consistent with the perpendicular-slice discussion in the cone chapter.

One can also verify the standard ellipse directly. For semiaxes $a>b>0$, put $c^2=a^2-b^2$ and $e=c/a$. Substituting its equation into the squared distance from $(c,0)$ gives $(a-ex)^2$. Since $|x|\le a$ and $e<1$, the square root is $a-ex$, exactly $e$ times the distance to $x=a/e$. In the hyperbola with $c^2=a^2+b^2$, the same substitution gives $(ex-a)^2$ and the absolute value supplies both branches. Thus the standard forms and their paired foci/directrices agree, with the sign conditions retained instead of discarded after squaring.

<a id="section-124-worked-example-a-null-direction-decides-the-type"></a>
### Worked example — A null direction decides the type {#section-126-worked-example-a-null-direction-decides-the-type}

Compare $x^2+4y=0$ and $x^2-4=0$. Both have the same quadratic matrix, with eigenvalues one and zero, and discriminant zero. The first retains a nonzero linear coefficient in the null direction and is the parabola $x^2=-4y$, with focal parameter minus one. The second has no such term and is the pair of parallel lines $x=2$ and $x=-2$.

Replacing the second constant by plus four produces no real point, while replacing it by zero produces a repeated line. These four outcomes cannot be distinguished by the shared quadratic matrix alone. The rank classification records precisely which additional linear or constant datum decides the locus. The two earlier worked reductions give the complementary full-rank ellipse cases, so the reader can now apply one method without ignoring the singular quadratic possibilities.

<a id="section-130-common-errors"></a>
## Common errors {#section-132-common-errors}

- **Forgetting to divide $B$ by $2$ in the matrix.** The coefficient of $xy$ is $B$, but the off-diagonal entry of $Q$ is $B/2$.
- **Using the wrong rotation angle.** The formula is $\cot 2\theta=(A-C)/B$, not $\tan\theta=B/(A-C)$.
- **Ignoring degenerate cases.** A discriminant of zero can mean a parabola, a pair of parallel lines, or a repeated line.
- **Confusing eigenvalues with semiaxis lengths.** The eigenvalues are related to the reciprocals of the squared semiaxes in standard form.

<a id="section-137-practice-exercises-with-solutions"></a>
## Practice exercises with solutions {#section-139-practice-exercises-with-solutions}

<a id="section-139-exercise-1"></a>
### Exercise 1 {#section-141-exercise-1}
<a id="conics-coordinates-ex-1"></a>
Classify the conic $3x^{2}+2xy+3y^{2}-8=0$ and find its semiaxes.

<details><summary>Hint 1</summary>

Form the symmetric matrix with half the mixed coefficient.

</details>
<details><summary>Hint 2</summary>

Its equal diagonal entries make sum and difference directions eigenvectors.

</details>
<details><summary>Full solution</summary>

**Solution.** $A=3$, $B=2$, $C=3$. The discriminant is $\Delta=4-36=-32<0$, so it is an ellipse. The matrix $Q=\begin{pmatrix}3&1\\1&3\end{pmatrix}$ has eigenvalues $\lambda=2,4$. The standard form is $2x'^{2}+4y'^{2}=8$, or $x'^{2}/4+y'^{2}/2=1$. The semiaxes are $a=2$ and $b=\sqrt{2}$.

</details>

<a id="section-159-exercise-2"></a>
### Exercise 2 {#section-161-exercise-2}
<a id="conics-coordinates-ex-2"></a>
Find the rotation angle that removes the cross term from $x^{2}+2\sqrt{3}xy+3y^{2}=4$.

<details><summary>Hint 1</summary>

Use the double-angle relation, retaining the correct quadrant.

</details>
<details><summary>Hint 2</summary>

Either ordering of the two principal axes is legitimate if used consistently.

</details>
<details><summary>Full solution</summary>

**Solution.** $\cot 2\theta=(1-3)/(2\sqrt{3})=-1/\sqrt{3}$, so $2\theta=2\pi/3$ and $\theta=\pi/3$.

</details>

<a id="section-179-exercise-3"></a>
### Exercise 3 {#section-181-exercise-3}
<a id="conics-coordinates-ex-3"></a>
Show that $x^{2}+xy+y^{2}=0$ has no real points except the origin.

<details><summary>Hint 1</summary>

Complete the square in one coordinate.

</details>
<details><summary>Hint 2</summary>

A sum of nonnegative squares can vanish only if every term is zero.

</details>
<details><summary>Full solution</summary>

**Solution.** Completing the square: $(x+y/2)^{2}+3y^{2}/4=0$. Both terms are nonnegative, so both must be zero. Thus $y=0$ and $x=0$. The only real point is $(0,0)$, a degenerate ellipse.

</details>

<a id="section-199-exercise-4"></a>
### Exercise 4 {#section-201-exercise-4}
<a id="conics-coordinates-ex-4"></a>
Classify the conic $4x^{2}-12xy+9y^{2}+2x-3y-5=0$ completely.

<details><summary>Hint 1</summary>

The quadratic expression is a perfect square.

</details>
<details><summary>Hint 2</summary>

The linear part uses the same combination of the original coordinates.

</details>
<details><summary>Full solution</summary>

**Solution.** Set $u=2x-3y$. Both the quadratic and linear terms depend only on $u$, so the equation is
$$u^2+u-5=0.$$
Thus $u=(-1\pm\sqrt{21})/2$. The locus is the pair of parallel lines
$$2x-3y=\frac{-1+\sqrt{21}}2,\qquad 2x-3y=\frac{-1-\sqrt{21}}2.$$
The zero discriminant describes a parabola-like quadratic part, but the full conic is degenerate.

</details>

<a id="section-223-exercise-5"></a>
### Exercise 5 {#section-225-exercise-5}
<a id="conics-coordinates-ex-5"></a>
Find the eigenvalues of $Q=\begin{pmatrix}7&-2\\-2&4\end{pmatrix}$ and classify the conic $7x^{2}-4xy+4y^{2}=12$.

<details><summary>Hint 1</summary>

Compute the trace and determinant before solving for eigenvalues.

</details>
<details><summary>Hint 2</summary>

Divide the right side by each positive eigenvalue to read squared semiaxes.

</details>
<details><summary>Full solution</summary>

**Solution.** Characteristic polynomial: $(7-\lambda)(4-\lambda)-4=\lambda^{2}-11\lambda+24=(\lambda-3)(\lambda-8)$. Eigenvalues are $3$ and $8$. The standard form is $3x'^{2}+8y'^{2}=12$, or $x'^{2}/4+y'^{2}/(3/2)=1$. This is an ellipse with semiaxes $a=2$ and $b=\sqrt{3/2}$.

</details>

<a id="section-243-exercise-6"></a>
### Exercise 6 {#section-245-exercise-6}
<a id="conics-coordinates-ex-6"></a>
Explain why the discriminant is invariant under rotation.

<details><summary>Hint 1</summary>

Use orthogonal similarity of the quadratic matrix.

</details>
<details><summary>Hint 2</summary>

The discriminant is minus four times the determinant of that matrix.

</details>
<details><summary>Full solution</summary>

**Solution.** Under rotation, $Q$ transforms to $R^{T}QR$. Since $\det(R^{T}QR)=\det(R^{T})\det(Q)\det(R)=\det Q$ (because $\det R=\pm 1$ for orthogonal $R$), the determinant of $Q$ is invariant. The discriminant $\Delta=-4\det Q$ is therefore also invariant.

</details>

<a id="section-263-exercise-7"></a>
### Exercise 7 {#section-265-exercise-7}
<a id="conics-coordinates-ex-7"></a>
Show why full rank of the homogeneous matrix cannot by itself certify a nonempty real conic, using $x^2+y^2+1=0$.

<details><summary>Hint 1</summary>
Its homogeneous matrix is the identity.
</details>
<details><summary>Hint 2</summary>
The polynomial is bounded below by one on the real plane.
</details>
<details><summary>Full solution</summary>
The homogeneous matrix has rank three and determinant one, but the polynomial is positive at every real point. The real locus is empty. The quadratic rank and inertia together with the translated constant determine the real answer; projective nonsingularity or full matrix rank is not a substitute for that sign analysis. This example also shows why the negative discriminant label must say ellipse-like until nonemptiness is established.
</details>

<a id="section-277-exercise-8"></a>
### Exercise 8 {#section-279-exercise-8}
<a id="conics-coordinates-ex-8"></a>
Classify $x^2-2x+4y+5=0$ and give its vertex, focus and directrix.

<details><summary>Hint 1</summary>
Complete the first-coordinate square and translate the second coordinate.
</details>
<details><summary>Hint 2</summary>
The resulting focal parameter is negative.
</details>
<details><summary>Full solution</summary>
The equation is $(x-1)^2=-4(y+1)$. In coordinates $U=x-1,V=y+1$ it is $U^2=4pV$ with $p=-1$. The vertex is $(1,-1)$, focus $(1,-2)$ and directrix $y=0$. The nonzero null-direction linear term makes it a parabola. Squaring the distance equality $\sqrt{(x-1)^2+(y+2)^2}=|y|$ recovers the equation, and both distances are nonnegative, so this is also a direct focal verification.
</details>

<a id="section-291-exercise-9"></a>
### Exercise 9 {#section-293-exercise-9}
<a id="conics-coordinates-ex-9"></a>
Compare the three equations $x^2-4x+3=0$, $x^2-4x+4=0$ and $x^2-4x+5=0$ as plane loci.

<details><summary>Hint 1</summary>
All have the same rank-one quadratic part and no linear term in the other coordinate.
</details>
<details><summary>Hint 2</summary>
Complete the square about horizontal coordinate two.
</details>
<details><summary>Full solution</summary>
They become $(x-2)^2=1$, $(x-2)^2=0$ and $(x-2)^2=-1$. The first is two parallel vertical lines at one and three, the second is a repeated vertical line at two, and the third is empty over the reals. The unused coordinate is free wherever the scalar equation has a solution. All discriminants are zero, so that shared number cannot distinguish these three real degeneracies.
</details>

<a id="section-305-exercise-10"></a>
### Exercise 10 {#section-307-exercise-10}
<a id="conics-coordinates-ex-10"></a>
Explain how multiplying an entire conic equation by minus three changes its quadratic trace, quadratic determinant and homogeneous determinant while preserving its locus.

<details><summary>Hint 1</summary>
The quadratic matrix has size two and the homogeneous matrix size three.
</details>
<details><summary>Hint 2</summary>
A matrix determinant acquires one scalar factor for each row.
</details>
<details><summary>Full solution</summary>
The quadratic trace multiplies by minus three, its determinant by nine and the homogeneous determinant by minus twenty-seven. Their ranks remain unchanged, and the quadratic determinant's sign remains unchanged. The polynomial vanishes exactly where its nonzero scalar multiple vanishes, so the locus is identical. Raw numerical invariants therefore describe an equation at a fixed normalization, while rank and the appropriate sign information can classify the represented geometry independently of that normalization.
</details>

<a id="section-319-from-the-cone-slice-chapter-a-first-coordinate-reductio"></a>
## From the cone-slice chapter: a first coordinate reduction {#section-321-from-the-cone-slice-chapter-a-first-coordinate-reductio}

The general second-degree equation

$$Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0$$

describes every conic section and its degenerate relatives. Translation of coordinates moves the center or vertex to the origin; rotation of coordinates removes the cross term $Bxy$ when the symmetric quadratic matrix can be diagonalized. Because real symmetric matrices have orthogonal eigenvectors, the rotation is distance-preserving.

The discriminant $\Delta=B^{2}-4AC$ classifies the nondegenerate real locus:

- $\Delta<0$: ellipse-like (including the circle when $A=C$ and $B=0$);
- $\Delta=0$: parabola-like;
- $\Delta>0$: hyperbola-like.

The rank of the quadratic form and the behavior of the linear terms determine whether the locus is a genuine curve, a single point, a pair of lines, a repeated line, or empty. Multiplying all coefficients by a nonzero scalar does not change the locus.

<a id="section-335-worked-reduction"></a>
### Worked reduction {#section-337-worked-reduction}

Reduce $4x^{2}+9y^{2}-8x+36y+4=0$ to standard form.

Group and complete the square:

$$4(x^{2}-2x)+9(y^{2}+4y)=-4,$$

$$4(x-1)^{2}-4+9(y+2)^{2}-36=-4,$$

$$4(x-1)^{2}+9(y+2)^{2}=36.$$

Dividing by $36$:

$$\frac{(x-1)^{2}}{9}+\frac{(y+2)^{2}}{4}=1.$$

This is an ellipse centered at $(1,-2)$ with semimajor axis $a=3$ and semiminor axis $b=2$.


<a id="section-354-looking-backward-and-forward"></a>
## Looking backward and forward {#section-356-looking-backward-and-forward}

This chapter developed the algebraic machinery for classifying conics: symmetric matrices, eigenvalues, and orthogonal diagonalization. The discriminant provides a quick test, while full reduction reveals the geometric parameters.

[Cylinders and Surfaces of Revolution](cylinders-and-surfaces-of-revolution.md) comes next in the route; [Quadrics in Coordinates](quadrics-in-coordinates.md) then extends these ideas to three dimensions. The classification of quadric surfaces uses the same matrix methods, now with $3\times 3$ symmetric matrices and three eigenvalues.


The diagonalization, full real-rank classification and focus-directrix equivalence added here are new Euler writing; the earlier reductions and all six original solutions remain intact. Comparison references are Coxeter, Introduction to Geometry, and Hilbert and Cohn-Vossen, Geometry and the Imagination.
