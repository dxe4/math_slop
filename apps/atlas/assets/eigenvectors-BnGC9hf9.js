var e=`---
id: visual-lab-eigenvectors
title: "Eigenvectors Under Repeated Motion"
level: undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Eigenvectors under repeated motion, and the same map in a new basis

A matrix has two roles in this laboratory. It acts on geometric vectors in the plane, and its entries describe that action relative to a chosen basis. Changing the basis changes the entries but not the underlying map. Repeatedly applying the map is a different investigation: normalization after each step changes the iteration into a nonlinear operation.

You need matrix-vector multiplication, matrix inverse, determinant, and the idea of a basis. The real 2×2 plane is the scope of the live instrument.

## Work with the live instrument

Enter four finite entries of $A$ from −8 to 8 directly, or select Symmetric, Rotation, Shear, Reflection, Projection, or Spiral. Enter the starting vector $x_0$, or place it by pointing at the Canvas. **Step A once** advances the iterate. Normalization is on initially; turn it off for raw $x_{n+1}=Ax_n$. **Run** is a timed option; it is disabled when reduced motion is requested. **Reset vector** returns to $x_0$. A blank, nonfinite or out-of-range matrix entry pauses timed iteration and retains the last valid matrix, with plain feedback beside the controls. The mathematical matrix updates only when all four edited entries satisfy the stated range.

The Canvas draws an equal-scale Cartesian grid, its image under $A$, the unit circle and its image, the standard basis arrows, $Ae_1,Ae_2$, $x_0,x_n,Ax_n$, and real eigenlines when they are numerically resolved. The spectral table repeats the quantities in text. The Canvas itself can take keyboard focus: Left/Right rotates $x_0$, Up/Down changes its length, Space/Enter/S steps, N toggles normalization, P runs or pauses when allowed, and R/Home resets. Numeric controls and buttons provide the same essential actions without Canvas. If Canvas is unavailable, the tables and controls remain usable.

The separate **Coordinate basis P** controls are labelled by column and coordinate: $p_1=(p_{1x},p_{1y})$, $p_2=(p_{2x},p_{2y})$. Choose Identity basis, Symmetric eigenbasis, Oblique basis, or Singular columns, then edit entries. The fixed Symmetric eigenbasis preset diagonalizes the Symmetric matrix preset; it makes no eigenbasis claim for another selected map. These controls do not change $A$, $x_0$, or the iteration. The coordinate table uses the fixed geometric test vector $x_0$, not the current iterate $x_n$, so its two paths can be compared even while the iteration runs.

## Why $AP=PB$

For an invertible $P=[p_1\\ p_2]$, every geometric vector $x$ has a unique coordinate column $c=P^{-1}x$. First convert $c$ to a geometric vector and apply $A$: the result is $APc$. Or first apply the coordinate matrix $B$ and convert back: the result is $PBc$. Agreement for every $c$ requires $AP=PB$, and multiplying by $P^{-1}$ gives $B=P^{-1}AP$.

The table shows $P,P^{-1},A,B$, the geometric $x_0$ and its coordinates, both action paths $Ax_0$ and $B[x_0]_P$, the reconstruction $PB[x_0]_P$, plus computed residuals $AP-PB$ and $Ax_0-PB[x_0]_P$. Residuals near zero are a numerical check for the entered finite values, not a proof that all floating-point operations are exact. The algebra above proves the relation whenever $P$ is invertible.

For $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ and eigenbasis $P=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, the table should give $B=\\operatorname{diag}(3,1)$. With $x_0=(2,0)$, $[x_0]_P=(1,1)$; the coordinate image is $(3,1)$, and reconstruction gives $(4,2)=Ax_0$. Try the Oblique basis $P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ as well. Its $B=\\begin{pmatrix}1&0\\\\1&3\\end{pmatrix}$ is not diagonal, but both routes still give the same geometric image.

A coordinate column's usual Euclidean norm is generally **not** the physical length of its vector. For $x=Pc$, the geometric formula is $\\|x\\|^2=c^{\\mathsf T}(P^{\\mathsf T}P)c$. The table reports both $\\|x_0\\|$ and $\\|[x_0]_P\\|_2$; they can differ even though the geometric vector is unchanged. An orthonormal $P$ makes $P^{\\mathsf T}P=I$ and preserves that coordinate norm.

### Numerical boundary for P

The computation scales $P$ by its largest absolute entry $s$, forming $Q=P/s$. Its infinity-norm condition estimate is $\\kappa_\\infty(P)=\\|Q\\|_\\infty\\|\\operatorname{adj}(Q)\\|_\\infty/|\\det Q|$. The condition does not change when all basis columns are uniformly scaled. When the computed determinant is zero, an exact binary-rational comparison of the entered values distinguishes actual dependent columns from cancellation in floating-point multiplication. A condition estimate above $10^8$ is reported as numerically unreliable: double-precision roundoff of about $2.22\\cdot10^{-16}$ may be amplified to order $2\\cdot10^{-8}$ or more before further products. A further reconstruction check compares $P(P^{-1}x_0)$ with $x_0$ relative to the input scale, independently of $A$; underflow that loses a nonzero vector is refused even if the condition estimate is small. Nonfinite inputs or overflowing intermediate results are refused. In every refusal state, no old $B$ or coordinate path remains visible. Only a dependent pair of entered columns is mathematically singular.

The similarity calculation also scales $A$ before multiplying. The returned $B$ is checked again after rescaling, so a zero test vector or two underflowed matrix products cannot hide a lost coordinate matrix. Relative discrepancies above $10^{-6}$ in reconstruction, the matrix relation, or the vector paths are refused. A computed zero image is checked with exact binary-rational dot products; a nonzero image lost through underflow is refused even when both paths round to zero. These thresholds are numerical display policies.

Try $P=10^{-100}I$: it has condition estimate 1 and still represents a valid basis, although its coordinates are very large. Then try Singular columns: $p_2=2p_1$. Return to Identity basis and verify the table recovers. Finally enter a nearly dependent pair and compare its unreliable message with the exactly singular one.

## Spectral and iteration investigation

The characteristic polynomial is $\\lambda^2-(a+d)\\lambda+(ad-bc)$. With trace $\\tau$, determinant $\\delta$, and discriminant $D=\\tau^2-4\\delta$, positive $D$ gives two distinct real eigenvalues, negative $D$ a complex pair with no real eigenline, and zero $D$ a repeated root. The spectral classifier uses a relative tolerance $10^{-10}$: entry comparisons scale with the largest entry $s$, determinant comparisons with $s^2$, and discriminant comparisons with $\\max(s^2,\\tau^2,4|\\delta|)$. Near a repeated root it suppresses sensitive eigenline drawings. Its rank and degeneracy labels are numerical classifications, not exact certificates for arbitrary entered decimals.

For the symmetric preset $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, eigenvectors $(1,1)$ and $(1,-1)$ have eigenvalues 3 and 1. From $x_0=(1,0)=\\frac12(1,1)+\\frac12(1,-1)$, raw iteration is $x_n=\\frac12 3^n(1,1)+\\frac12(1,-1)$. The ratio of the second eigencoordinate to the first is $3^{-n}$. Thus normalized directions approach the first eigenline for this start. Starting exactly on $(1,-1)$ is a counterexample to an unconditional convergence claim.

The normalized step asks for $Ax_n/\\|Ax_n\\|$ only when the image is nonzero and its length is numerically resolved. If $Ax_n=0$ for the entered binary values, the table and status say the iteration collapsed and there is **no next unit direction**. Exact binary-rational dot products distinguish this from a nonzero image that rounded to zero by underflow. If a nonzero image is below the normalization threshold $10^{-14}$ in the current numeric units, the step stops as unresolved; it does not claim that the image is mathematically zero. Manual stepping remains available regardless of motion preference. The $AP=PB$ certificate concerns the linear map $A$ and is independent of this normalized operation.

## Experiments and checks

1. With the symmetric preset and eigenbasis, compute $[x_0]_P$ for $x_0=(2,0)$ before opening the table. Explain why the coordinate matrix is diagonal.
2. Choose the oblique basis. Predict $B$ by applying $A$ to each basis column and expressing each image in the same basis. Compare the table's $AP$ and $PB$.
3. Set $A$ to Projection and choose a kernel vector as $x_0$. Step with normalization. Explain why the absence of a unit direction is different from a displayed zero vector under raw iteration.
4. Choose Rotation. Explain why no real eigenline is drawn. Then choose Shear and explain why a repeated eigenvalue need not supply two eigenvectors.
5. Make $P$ singular, then nearly dependent, then identity again. Which failure is mathematical and which is numerical? Does changing $P$ alter the current geometric iterate?

For (1), $[x_0]_P=(1,1)$ and $B=\\operatorname{diag}(3,1)$ because each basis column is an eigenvector. For (2), $B=\\begin{pmatrix}1&0\\\\1&3\\end{pmatrix}$; both $AP$ and $PB$ equal $\\begin{pmatrix}2&3\\\\1&3\\end{pmatrix}$. For (3), a zero image cannot be normalized, while raw multiplication legitimately produces the zero vector. For (4), the rotation preset has complex eigenvalues $\\pm i$; the shear has only one eigenline. For (5), dependent columns make $P$ noninvertible; near dependence makes conversion sensitive to roundoff. Neither edit changes $A$ or $x_n$.

## Limits

Finite drawings do not prove diagonalizability, convergence, or numerical stability. Equal-magnitude dominant eigenvalues, missing starting components, defective matrices, and nonnormal transient growth all matter. The lab treats real 2×2 matrices and one vector at a time; it does not animate a point cloud, drag matrix-column arrows, track a unit square, or implement a shader. Those constructions remain useful possible extensions, but the current tables and controls are the evidence for this lesson.
`;export{e as default};