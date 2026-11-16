var e=`---
parent_id: book-riemannian-geometry
chapter_id: levi-civita-connection
title: "Connections and the Levi-Civita Connection"
level: graduate
license: CC BY-SA 4.0
---

# Connections and the Levi-Civita Connection {#section-1-connections-and-the-levi-civita-connection}

An inner product compares vectors at one point. Comparing directions at different points requires a rule of differentiation. A connection supplies that rule; metric compatibility makes it preserve the inner product under parallel transport. Torsion freedom is the additional condition that selects the Levi–Civita connection uniquely.

This L4 chapter follows [Riemannian Metrics](riemannian-metrics.md) and the tangent, bracket and flow constructions of Smooth Manifolds. Our manifolds are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary. The metric is positive definite. We prove the connection algebra, coordinate and frame laws, full Levi–Civita existence and uniqueness, and parallel transport. Smooth linear ODE existence and uniqueness on compact parameter intervals are the named analytic input. Curvature is developed later; the path-dependent example here is computed directly from transport equations.

<a id="section-5-1-a-derivative-with-two-different-linearity-rules"></a>
## 1. A derivative with two different linearity rules {#section-7-1-a-derivative-with-two-different-linearity-rules}

A connection on the tangent bundle is a real-bilinear operation on smooth fields satisfying

$$\\nabla_{fX}Y=f\\nabla_XY,\\qquad
\\nabla_X(fY)=(Xf)Y+f\\nabla_XY.$$

The first variable gives a derivative direction at a point; the second gives a field whose nearby variation matters. Thus the connection is tensorial in the first variable and a derivation in the second. Confusing these two rules would remove the actual differentiation from the definition.

In a coordinate frame define coefficients by $\\nabla_{\\partial_i}\\partial_j=\\Gamma^k_{ij}\\partial_k$. Expanding the two rules gives

$$(\\nabla_XY)^k=X^i\\partial_iY^k+\\Gamma^k_{ij}X^iY^j.$$

Consequently specifying smooth coefficients in a chart determines a connection there. Arbitrarily specified coefficients on different charts need not define the same global connection: their changes must compensate the derivative of the changing frame. Existence globally can be obtained by partitions of unity, since an affine combination with weights summing to one preserves the product rule. The metric will soon give a canonical construction instead of this arbitrary choice.

If two connections differ by $A(X,Y)$, the scalar derivative terms cancel. Their difference is linear over smooth functions in both variables, hence a smooth tensor with one vector output and two covariant inputs. Conversely adding any such tensor to a connection gives another connection. Thus the space of connections is affine: a difference is a tensor, but there is no preferred zero connection on an arbitrary manifold.

The torsion $T(X,Y)=\\nabla_XY-\\nabla_YX-[X,Y]$ is tensorial in both inputs. For example the extra term from differentiating a scalar in the second connection argument cancels the corresponding scalar derivative in the bracket. It is antisymmetric. In coordinates the bracket of coordinate fields is zero, so its coefficients are $\\Gamma^k_{ij}-\\Gamma^k_{ji}$. Torsion freedom is therefore symmetry of those lower indices in coordinate frames, with a different expression in a frame whose vectors do not commute.

<a id="section-24-2-metric-compatibility-and-its-defect"></a>
## 2. Metric compatibility and its defect {#section-26-2-metric-compatibility-and-its-defect}

The metric defect is

$$Q(X,Y,Z)=Xg(Y,Z)-g(\\nabla_XY,Z)-g(Y,\\nabla_XZ).$$

The two connection product rules show that derivatives of scalar factors cancel in each slot, so this is a tensor. Metric compatibility means it vanishes. If $\\nabla$ is compatible and another connection is $\\nabla+A$, compatibility of the second is equivalent to

$$g(A(X,Y),Z)+g(Y,A(X,Z))=0.$$

For fixed derivative direction, the added linear operator must be skew-adjoint. This leaves many possibilities unless torsion is controlled as well.

If both connections are torsion free, their difference is symmetric in its first two inputs. Lower its output with the metric, writing $a(X,Y,Z)=g(A(X,Y),Z)$. Compatibility makes it antisymmetric in the last two inputs. The two symmetries force it to be zero: successively interchange the first pair, then the last pair, and repeat, obtaining

$$a(X,Y,Z)=a(Y,X,Z)=-a(Y,Z,X)=-a(Z,Y,X)
=a(Z,X,Y)=a(X,Z,Y)=-a(X,Y,Z).$$

Over the reals this gives zero, and metric nondegeneracy gives $A=0$. Thus at most one compatible torsion-free connection can exist. This tensor proof also reveals exactly why neither condition alone suffices.

<a id="section-43-3-full-existence-by-the-koszul-formula"></a>
## 3. Full existence by the Koszul formula {#section-45-3-full-existence-by-the-koszul-formula}

For any fields set

$$\\begin{aligned}
K(X,Y,Z)={}&Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)\\\\
&-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).
\\end{aligned}$$

If a compatible torsion-free connection exists, expand the first three terms with compatibility and replace covariant-derivative differences by brackets. All terms cancel except twice the pairing of $\\nabla_XY$ with $Z$. Thus the necessary formula is $2g(\\nabla_XY,Z)=K(X,Y,Z)$.

It also constructs the desired connection. Substitute a scalar multiple $fZ$ into this expression. Derivatives of the scalar from the first two pairings are cancelled by the two bracket product rules involving $fZ$. Hence the expression is linear over smooth functions in its last input. Evaluating it on a coordinate basis gives smooth covector coefficients. The inverse metric gives a unique smooth vector field whose pairing with every $Z$ is half this covector.

Expanding a scalar multiple in the first input gives $K(fX,Y,Z)=fK(X,Y,Z)$: the derivatives of the scalar cancel between the differentiated pairings and bracket terms. In the second input the expansion instead leaves

$$K(X,fY,Z)=fK(X,Y,Z)+2(Xf)g(Y,Z).$$

Metric nondegeneracy now turns these two identities into the connection product rules. Real bilinearity follows directly from the defining expression. Thus the construction is a globally defined connection, not merely a pointwise vector assignment.

Subtracting the expression with the first two inputs exchanged gives $2g([X,Y],Z)$, so its torsion vanishes. Adding the expressions with the last two inputs exchanged gives $2Xg(Y,Z)$, so it is metric compatible. Together with the uniqueness argument this proves the Levi–Civita theorem completely.

In a coordinate frame the bracket terms vanish. Solving the resulting pairing equations gives

$$\\Gamma^k_{ij}=\\frac12g^{k\\ell}
(\\partial_i g_{j\\ell}+\\partial_j g_{i\\ell}-\\partial_\\ell g_{ij}).$$

This formula is a consequence of the intrinsic construction. It can therefore be used in any smooth coordinates with confidence that the resulting derivatives agree on overlaps. It does not make the coefficient array itself a tensor.

<a id="section-71-4-connection-forms-in-a-moving-frame"></a>
## 4. Connection forms in a moving frame {#section-73-4-connection-forms-in-a-moving-frame}

Let $e=(e_1,\\ldots,e_n)$ be a smooth frame. Write

$$\\nabla_Xe_b=\\omega^a{}_b(X)e_a.$$

First-argument function-linearity makes each coefficient a one-form. For a vector field with component column $v$, the component expression for its derivative is $Xv+\\omega(X)v$. If the frame changes to $e'=eA$ for a smooth invertible matrix function, the product rule gives

$$\\omega'=A^{-1}\\omega A+A^{-1}dA.$$

Indeed differentiating the new frame produces $e(\\omega A+dA)$, and writing the result in the new frame multiplies the coefficient column by $A^{-1}$. The extra derivative term is precisely why these forms do not transform like an endomorphism-valued tensor on their own.

Let $G_{ab}=g(e_a,e_b)$. Compatibility in this frame is

$$dG=\\omega^TG+G\\omega.$$

This follows by differentiating each frame pairing with the product rule. In an orthonormal frame the matrix $G$ is the identity, so the connection-form matrix is skew-symmetric. This statement is frame dependent: in a general coordinate frame with changing metric coefficients the same matrix need not be skew-symmetric. The compatibility equation, rather than a remembered matrix shape, is the invariant content.

<a id="section-89-5-transport-along-a-specified-route"></a>
## 5. Transport along a specified route {#section-91-5-transport-along-a-specified-route}

For a field $V$ along a smooth curve, its covariant derivative in a moving frame is represented by

$$\\frac{Dv}{dt}=v'(t)+\\omega(\\dot\\gamma(t))v(t).$$

The frame-change law makes the vanishing of this expression coordinate independent: writing the old component column as $v=Aw$, where $w$ is the new component column, produces exactly the new connection form and the derivative of $w$. Parallel transport is its zero equation, a linear ODE. Prescribed initial vectors give unique solutions along the curve's connected interval, by solving on compact subintervals and gluing with uniqueness. A finite chain of frame neighborhoods handles curves not contained in one frame domain.

The transport map is linear because the ODE is linear. Reversing the curve gives its inverse, again by uniqueness. Metric compatibility yields the differentiated inner-product identity along curves, so two parallel fields have constant pairing. Thus transport is an inner-product isomorphism between the initial and final tangent spaces.

It is essential that the route is specified. Equal endpoints do not imply equal transport maps. Transport around a loop is called holonomy for that loop; it is an orthogonal linear map of one tangent space. Its dependence on the loop is not removed by torsion freedom or metric compatibility. The sphere example below proves this directly without invoking a curvature theorem.

<a id="section-101-6-three-worked-examples"></a>
## 6. Three worked examples {#section-103-6-three-worked-examples}

<a id="section-103-worked-example-2-1-metric-compatibility-with-nonzero-to"></a>
### Worked example 2.1 — Metric compatibility with nonzero torsion {#section-105-worked-example-2-1-metric-compatibility-with-nonzero-to}

On oriented Euclidean three-space let $D$ be the ordinary derivative connection and choose a nonzero constant $c$. Set $\\nabla_XY=D_XY+cX\\times Y$. The added cross-product term is tensorial, so this is a connection. The scalar triple-product identity makes the added operator skew-adjoint in its second input, proving metric compatibility.

Its torsion is $2cX\\times Y$, because the Euclidean derivative connection has zero torsion and the cross product is antisymmetric. For the first two coordinate vectors this torsion is twice $c$ times the third, so it is genuinely nonzero. Hence preserving inner products under transport does not uniquely select the Levi–Civita connection. The zero-torsion condition rules out this example, and the uniqueness theorem explains why.

<a id="section-109-worked-example-2-2-polar-frame-motion-on-a-flat-plane"></a>
### Worked example 2.2 — Polar frame motion on a flat plane {#section-111-worked-example-2-2-polar-frame-motion-on-a-flat-plane}

In a polar coordinate sector of the Euclidean plane use the orthonormal frame $e_r=(\\cos\\theta,\\sin\\theta)$ and $e_\\theta=(-\\sin\\theta,\\cos\\theta)$. Ordinary differentiation gives $de_r=e_\\theta d\\theta$ and $de_\\theta=-e_r d\\theta$. Thus the Euclidean Levi–Civita connection has frame matrix

$$\\omega=\\begin{pmatrix}0&-d\\theta\\\\d\\theta&0\\end{pmatrix}.$$

An ambient constant vector $(1,0)$ has component column $(\\cos\\theta,-\\sin\\theta)$ in this frame. Differentiating the column and adding the connection term gives zero. Its nonconstant frame coefficients therefore describe a parallel vector. Treating coefficient constancy as the definition of parallelism would produce the wrong answer in a moving frame. In the Cartesian frame the same connection matrix is zero, consistent with the frame-change rule.

<a id="section-117-worked-example-2-3-a-latitude-loop-has-nontrivial-trans"></a>
### Worked example 2.3 — A latitude loop has nontrivial transport {#section-119-worked-example-2-3-a-latitude-loop-has-nontrivial-trans}

On the unit sphere away from the poles use colatitude $\\theta$ and longitude $\\phi$. The metric is $d\\theta^2+\\sin^2\\theta\\,d\\phi^2$. The coefficient formula, followed by the orthonormal-frame change, gives for $e_1=\\partial_\\theta$ and $e_2=(1/\\sin\\theta)\\partial_\\phi$ the matrix

$$\\omega=\\begin{pmatrix}0&-\\cos\\theta\\,d\\phi\\\\
\\cos\\theta\\,d\\phi&0\\end{pmatrix}.$$

The needed coordinate coefficients are $\\Gamma^\\theta_{\\phi\\phi}=-\\sin\\theta\\cos\\theta$ and $\\Gamma^\\phi_{\\theta\\phi}=\\cot\\theta$, with the symmetric companion. They follow directly by differentiating the two diagonal metric coefficients. This verifies the displayed frame matrix rather than importing a curvature formula.

Along a latitude of fixed colatitude, the parallel component column solves a constant-coefficient planar rotation equation. After longitude increases by a full turn its components have rotated by $-2\\pi\\cos\\theta$. The frame itself has returned to its original value at that point, so this is the actual transport around the loop. At a latitude with cosine one quarter, it is a negative quarter-turn, hence is not the identity. At the equator the component rotation is zero. This explicit computation proves path dependence; it does not claim that these latitude curves are geodesics or that the result alone proves a general curvature-area theorem.

<a id="section-128-exercises"></a>
## Exercises {#section-130-exercises}

### Exercise 2.1 {#riemannian-connection-ex-1}

On the real line let $\\nabla_{\\partial_x}\\partial_x=a(x)\\partial_x$. Compute torsion and metric defect for the metric $dx^2$.

<details><summary>Hint 1</summary>
An alternating tensor with two inputs in a one-dimensional space is zero.
</details>
<details><summary>Hint 2</summary>
Differentiate the constant pairing of the coordinate vector with itself.
</details>
<details><summary>Full solution</summary>
The torsion is zero, since its alternating inputs lie in a one-dimensional space. The metric defect on three coordinate vectors is minus twice $a(x)$: the differentiated metric coefficient is zero and the two connection pairings each contribute $a(x)$. Thus compatibility holds only when the coefficient vanishes. Zero torsion alone leaves many connections and does not force compatibility even in dimension one.
</details>

### Exercise 2.2 {#riemannian-connection-ex-2}

If two metric-compatible connections differ by $A$, prove that for fixed $X$ the map $Y\\mapsto A(X,Y)$ is skew-adjoint.

<details><summary>Hint 1</summary>
Subtract their two compatibility identities.
</details>
<details><summary>Hint 2</summary>
The scalar derivative of the metric pairing cancels.
</details>
<details><summary>Full solution</summary>
Subtraction gives $g(A(X,Y),Z)+g(Y,A(X,Z))=0$ for every pair $Y,Z$. This is exactly skew-adjointness with respect to the metric. It does not say the difference is antisymmetric in its first two inputs. That different symmetry is governed by the torsion comparison, and confusing them would invalidate the Levi–Civita uniqueness argument.
</details>

### Exercise 2.3 {#riemannian-connection-ex-3}

Explain why setting all connection coefficients to zero separately in every arbitrary coordinate chart cannot define a connection on a general manifold.

<details><summary>Hint 1</summary>
Differentiate a nonlinear change of coordinate basis.
</details>
<details><summary>Hint 2</summary>
The frame-change law contains a derivative term.
</details>
<details><summary>Full solution</summary>
If the coefficient matrix is zero in one frame, the new matrix is $A^{-1}dA$, which need not vanish when the frame change varies. Assigning zero in both frames would give different covariant derivatives of the same field on their overlap. Cartesian and polar frames in the Euclidean plane already demonstrate the conflict. Zero coefficients in one chosen local frame can define a local connection, but global compatibility requires the correct transformation rule.
</details>

### Exercise 2.4 {#riemannian-connection-ex-4}

In an orthonormal frame on a surface, show that the matrix of connection forms has only one independent one-form.

<details><summary>Hint 1</summary>
Use the skew-symmetry forced by metric compatibility.
</details>
<details><summary>Hint 2</summary>
The diagonal entries equal their own negatives.
</details>
<details><summary>Full solution</summary>
The diagonal one-forms vanish over the reals, and the off-diagonal entries are negatives of each other. Thus the matrix has the form $\\begin{pmatrix}0&-\\eta\\\\\\eta&0\\end{pmatrix}$ for one one-form $\\eta$. This is a local frame expression, not a claim that one global one-form exists on every surface. A global frame might fail to exist, and different local orthonormal frames change the displayed form by the transformation law.
</details>

### Exercise 2.5 {#riemannian-connection-ex-5}

Show that parallel transport along a concatenation of two smooth curve pieces is the composition of the two transport maps.

<details><summary>Hint 1</summary>
Use the endpoint value of the first solution as the initial value for the second.
</details>
<details><summary>Hint 2</summary>
Uniqueness identifies the piecewise solution with transport on the joined route.
</details>
<details><summary>Full solution</summary>
Solve the linear transport equation on the first piece, then on the second with the resulting endpoint vector. The values agree at the join and satisfy the correct equation on each smooth piece. The usual piecewise-smooth definition is precisely this gluing, and uniqueness makes the final value independent of any further subdivision. Hence its map is the second transport composed after the first, with the order determined by the traversal.
</details>

### Exercise 2.6 {#riemannian-connection-ex-6}

At which colatitudes in the open interval from zero to $\\pi$ does the latitude transport computed above become the identity?

<details><summary>Hint 1</summary>
A plane rotation is the identity when its angle is an integer multiple of a full turn.
</details>
<details><summary>Hint 2</summary>
The cosine of a nonpolar colatitude lies strictly between minus one and one.
</details>
<details><summary>Full solution</summary>
The angle is $-2\\pi\\cos\\theta$, so identity requires the cosine to be an integer. In the strict range between minus one and one, the only possible integer is zero. Thus only the equator has identity transport among these nonpolar latitudes. The poles are excluded because the latitude curve and frame degenerate there; they cannot be inserted into the coordinate calculation as ordinary additional latitudes.
</details>

### Exercise 2.7 {#riemannian-connection-ex-7}

For the cross-product connection, compute its torsion on the first and third coordinate vectors and compare the result after swapping the inputs.

<details><summary>Hint 1</summary>
Use the usual positive coordinate orientation.
</details>
<details><summary>Hint 2</summary>
The first vector crossed with the third is the negative second vector.
</details>
<details><summary>Full solution</summary>
The torsion is minus twice $c$ times the second coordinate vector. Swapping the inputs gives plus twice $c$ times that vector. This agrees with antisymmetry of torsion. The example is compatible with the Euclidean metric but has nonzero torsion whenever $c$ is nonzero, so its transport cannot be identified with the Levi–Civita transport solely from length preservation.
</details>

### Exercise 2.8 {#riemannian-connection-ex-8}

Prove that a metric-compatible connection transports orthonormal bases to orthonormal bases along a curve.

<details><summary>Hint 1</summary>
Transport each initial basis vector by the linear equation.
</details>
<details><summary>Hint 2</summary>
Differentiate every pairwise metric inner product.
</details>
<details><summary>Full solution</summary>
The differentiated pairing is the sum of the pairings with the two covariant derivatives, both zero for parallel fields. Thus every pairwise inner product remains its initial Kronecker value. The vectors are therefore orthonormal, hence independent and a basis at each point. This proves transport is an inner-product isomorphism; it does not prove independence from the chosen route between those points.
</details>

### Exercise 2.9 {#riemannian-connection-ex-9}

Let $F$ be a Riemannian isometry. Prove that it carries Levi–Civita parallel transport along a curve to parallel transport along the image curve.

<details><summary>Hint 1</summary>
Push the connection forward using the diffeomorphism.
</details>
<details><summary>Hint 2</summary>
Use compatibility, bracket naturality and uniqueness.
</details>
<details><summary>Full solution</summary>
Pushing the connection forward preserves its product rules. Metric preservation makes the pushed connection compatible, and diffeomorphism naturality of brackets makes its torsion zero. Levi–Civita uniqueness identifies it with the target metric connection. Therefore the pushed derivative of a parallel field along the curve is zero along the image curve. Prescribed initial values and uniqueness then identify the two transport procedures exactly.
</details>

### Exercise 2.10 {#riemannian-connection-ex-10}

Suppose a connection is torsion free and metric compatible on each member of an open cover. Prove that it is globally the Levi–Civita connection.

<details><summary>Hint 1</summary>
Torsion and metric defect are tensors whose equality to zero can be checked locally.
</details>
<details><summary>Hint 2</summary>
Then apply the global uniqueness theorem.
</details>
<details><summary>Full solution</summary>
At every point choose a covering neighborhood. Both tensors vanish there and therefore at that point. They vanish globally, so the connection has the defining two properties everywhere. The theorem then identifies it with the globally constructed Koszul connection. This argument concerns an already globally defined connection. Arbitrary unrelated local coefficient arrays would first need to satisfy overlap compatibility before this conclusion could be applied.
</details>

<a id="section-270-sources-and-provenance"></a>
## Sources and provenance {#section-272-sources-and-provenance}

New L4 development expanding the connection portion of [Smooth Manifolds, chapter 16](../smooth-manifolds/riemannian-first-look.md), whose complete first-look source remains intact. The Koszul argument is supplied fully here, with new affine-difference, moving-frame and transport development and fresh exercises. Comparison references are Lee, *Introduction to Riemannian Manifolds*, connections and the Levi–Civita connection; and do Carmo, *Riemannian Geometry*, covariant differentiation and parallel transport. The sphere-loop calculation is derived from the displayed metric coefficients, without importing a curvature-area theorem.

<a id="section-274-summary"></a>
## Summary {#section-276-summary}

Connections differentiate fields with different scalar rules in their two inputs, and their differences are tensors. Metric compatibility and zero torsion together force uniqueness; the Koszul formula constructs the Levi–Civita connection and verifies its properties. Moving-frame forms contain an essential derivative term under frame change. Parallel transport preserves inner products along a specified route, while the latitude calculation demonstrates that equal endpoints do not ensure equal transport.
`;export{e as default};