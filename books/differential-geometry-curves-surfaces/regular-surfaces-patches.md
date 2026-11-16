
# Regular Surfaces and Coordinate Patches

A curve needs one local coordinate; a surface needs two independent local directions. Drawing a rectangular parameter grid in space is not enough to prove that it gives valid coordinates. The grid can collapse along one direction, duplicate a seam, or cover several branches at the same point. Regular surface theory separates the derivative condition from the topological condition that the labels actually identify one surface neighborhood.

We work with classical surfaces contained in $\mathbb R^3$, not with an assumed abstract manifold theory. The preparation is multivariable differentiation, rank of a linear map, and the inverse and implicit function theorems from differential calculus. The linked [Inverse and Implicit Function Theorems](../proof-safe-real-analysis/inverse-implicit-function-theorems.md) supplies its proof route; we explicitly state the needed calculus input below. First-order geometry needs $C^1$ patches, normals need at least that much, and later curvature calculations will generally use $C^3$ surfaces to make all differentiated identities legitimate.

## Rank and the definition of a surface

**Definition 7.1 — Regular parametrization.** A $C^k$ map $X:U\to\mathbb R^3$, with $U$ open in $\mathbb R^2$ and $k\ge1$, is regular when its derivative has rank two at every point. Writing its coordinates as $u,v$, this is equivalent to linear independence of $X_u,X_v$, and in three-dimensional Euclidean space to $X_u\times X_v\ne0$.

**Definition 7.2 — Coordinate patch and regular surface.** A patch of a subset $S\subseteq\mathbb R^3$ is a regular parametrization that is a homeomorphism from its open domain onto a relatively open subset of $S$. The subset is a regular $C^k$ surface if such patches cover it. All relative openness and continuity refer to the inherited Euclidean topology.

The homeomorphism requirement matters in two ways. Injectivity forbids duplicate coordinate names inside the patch. Continuity of its inverse says that nearby surface points have nearby coordinate labels, so the chosen labels are genuinely local coordinates. Rank alone says only that two infinitesimal directions are independent. It does not enforce either global requirement for an arbitrarily large parameter domain.

Every regular surface is Hausdorff and second-countable because it is a subspace of Euclidean space. These are not new extra results about every abstract locally Euclidean space: they follow here from the ambient setting. The inherited topology also tells us which subset must be relatively open for a parametrization to count as a patch. One cannot declare a crossing branch open merely because it has a convenient formula.

## The differential-calculus input and the local graph proof

We use the following standard multivariable calculus theorem as a named input. If $F$ is a $C^k$ map between open subsets of $\mathbb R^m$ and its derivative is invertible at a point, then on smaller neighborhoods it is a $C^k$ diffeomorphism. Its inverse derivative is the inverse matrix of its derivative. The implicit function theorem follows by applying this to a map that keeps the independent coordinates and replaces one coordinate by the equation's value. A proof of this general calculus theorem is outside this chapter; it is not inferred merely from a nonzero derivative in one chosen direction.

**Theorem 7.3 — Local graph form of a regular parametrization.** A regular $C^k$ parametrization is, after restricting near any one parameter point, a graph over some coordinate plane and a homeomorphism onto that graph.

**Proof.** A rank-two three-by-two derivative has a nonzero two-by-two minor. Suppose the minor uses the first two output coordinates. Let $\pi(x,y,z)=(x,y)$. Then $D(\pi\circ X)$ is invertible at the selected parameter point. The inverse function theorem gives smaller neighborhoods on which $\pi\circ X$ has a $C^k$ inverse $\psi$. For $w$ in its image, $X(\psi(w))=(w_1,w_2,f(w))$, where $f$ is the third component of $X\circ\psi$. It is $C^k$. Projection is the continuous inverse of the graph map, and composing with $\psi$ proves the stated local homeomorphism. A different nonzero minor simply selects another coordinate plane. $\square$

This theorem proves that an immersion can be restricted to an embedded patch. It does not prove the entire image of an immersion is an embedded surface: another part of its domain might return through the same neighborhood on a different branch. Nor does it prove that a chosen parametrization is injective on its whole original domain. The neighborhoods produced by the inverse theorem are part of the conclusion.

**Theorem 7.4 — Regular level sets.** Let $F:O\to\mathbb R$ be $C^k$ on open $O\subseteq\mathbb R^3$. If $\nabla F$ is nonzero at every point of $S=\{p\in O:F(p)=c\}$, then $S$ is a regular surface.

**Proof.** At any point at least one partial derivative is nonzero; suppose it is $F_z$. Apply the inverse function theorem to $G(x,y,z)=(x,y,F(x,y,z))$, whose derivative determinant is $F_z$. Its local inverse expresses the third coordinate on level $c$ as $z=f(x,y)$. The local level set is therefore exactly a graph, not merely contained in one. The graph map has independent derivatives $(1,0,f_x)$ and $(0,1,f_y)$, and its projection inverse is continuous. Restricting inside the original open neighborhood makes its image relatively open in $S$. These patches cover the level set. $\square$

This is a sufficient test, not a necessary condition for a particular equation. The plane $z=0$ is regular even when written as the zero set of $F=z^3$, whose gradient vanishes everywhere on it. A poor defining equation can fail the test without making the set singular. The test certifies regularity when its hypotheses hold; its failed hypothesis does not prove the opposite conclusion.

## Coordinate changes and orientation

**Theorem 7.5 — Transition maps are smooth.** For two $C^k$ surface patches $X:U\to S$ and $Y:V\to S$, the transition map $X^{-1}\circ Y$ on any overlap is a $C^k$ diffeomorphism between the corresponding open parameter subsets.

**Proof.** The topological patch conditions make the overlap parameter sets open and the transition a homeomorphism. Near any overlap point, the graph proof gives $X^{-1}=(\pi\circ X)^{-1}\circ\pi$ on its image for a suitable coordinate projection $\pi$. This expression is the restriction of a $C^k$ map, so composing it with $Y$ makes the transition $C^k$. Interchanging $X$ and $Y$ proves the inverse is $C^k$. These local statements cover the overlap. Differentiating the inverse compositions gives invertible transition derivatives. $\square$

If $Y=X\circ\phi$, the chain rule writes its derivative columns as linear combinations of those of $X$. Bilinearity and antisymmetry of cross product give

$$Y_a\times Y_b=(\det D\phi)(X_u\times X_v)\circ\phi.$$

Thus a coordinate change multiplies the area vector by its Jacobian determinant. The unit normal is preserved or reversed according to that sign. On a connected overlap the nonzero continuous determinant has constant sign. This sign bookkeeping will determine how oriented curvature quantities change between charts.

**Definition 7.6 — Orientation.** An orientation of a regular surface is a continuous choice of unit normal at every point. Each individual patch supplies the normal $(X_u\times X_v)/\|X_u\times X_v\|$. A global orientation requires these local choices to agree after any necessary sign choices on overlaps. It is not guaranteed by the existence of local normals alone. An embedded Möbius band supplies a familiar nonorientable surface-with-boundary example, discussed more fully in the companion lab and topology readings.

## Worked examples

### Worked example 1 — A graph is always a regular patch

Let $f(u,v)=u^2-v^2$ and $X(u,v)=(u,v,f(u,v))$ on the whole plane. Its derivatives are $(1,0,2u)$ and $(0,1,-2v)$, with cross product $(-2u,2v,1)$. The last component is one, so rank never fails. The map is injective because the first two output coordinates recover the inputs, and projection is its continuous inverse onto the graph. Its image is the entire surface, hence relatively open in itself. This is a global patch; the example verifies every condition rather than stopping at the cross product.

### Worked example 2 — A cylinder needs an angular restriction

For $R>0$ define $X(u,v)=(R\cos u,R\sin u,v)$. The cross product is $(R\cos u,R\sin u,0)$ and has norm $R$, so the parametrization is regular for all parameters. It is not injective on the whole plane because increasing $u$ by $2\pi$ changes no surface point. Restrict $u$ to an open interval of length less than $2\pi$. The corresponding angular branch has a continuous inverse, giving a valid patch. Such intervals cover the cylinder. A rank calculation cannot detect the duplicate seam, so the interval restriction is mathematically essential even if a rendered cylinder looks smooth.

### Worked example 3 — The sphere's poles are coordinate failures

Latitude–longitude coordinates on a radius-$R$ sphere have derivative cross-product norm $R^2\sin\theta$, which vanishes at the poles. The sphere itself is regular by the level-set theorem, since $\nabla(x^2+y^2+z^2)=2(x,y,z)$ never vanishes on a sphere of positive radius. An explicit alternative patch is

$$X(u,v)=\frac{R}{1+u^2+v^2}(2u,2v,u^2+v^2-1).$$

It lies on the sphere and misses the north pole. Its inverse is $(u,v)=(x/(R-z),y/(R-z))$, continuous and smooth where $z\ne R$. Differentiating the inverse composition gives rank two for $X$, so it is a patch. Changing the last component's sign gives a patch missing the south pole. Their images cover the sphere, including both poles. The two-chart description repairs longitude without modifying any surface point.

## Failures and nonexamples

A cone tip is a different kind of issue from a pole in spherical coordinates. The cone $z^2=x^2+y^2$, near its vertex, has many distinct limiting tangent directions and does not possess a single two-dimensional tangent plane compatible with a regular graph neighborhood. One must analyze its local geometry rather than infer smoothness from an appealing rotational formula. Deleting the vertex leaves regular pieces; adding it back does not preserve regularity automatically.

Another warning is a parametrized crossing. The map $(u,v)\mapsto(uv,u,v^2)$ has independent derivatives away from the origin, but different parameter values with $u=0$ and opposite nonzero $v$ map to the same point. The resulting local branches need not be one embedded surface neighborhood together. Restricting to a small parameter neighborhood on one branch still gives a patch of that branch by the local graph theorem. It does not give a single patch describing their union.

A boundary also needs its own convention. Our domains here are open subsets of the full parameter plane, so these definitions describe surfaces without boundary. A surface with boundary uses appropriate open subsets of a closed half-plane near boundary points. Curvature calculations can still be done by extending a boundary patch across its edge when sufficient regularity is assumed. Later Gauss–Bonnet states its boundary hypotheses explicitly rather than silently applying an interior definition at an edge.

## A singular parametrization can have a smooth image

The map $X(u,v)=(u^3,v,0)$ is a homeomorphism onto a flat plane. Its first partial derivative nevertheless vanishes on $u=0$, so the two derivatives are dependent there. It is not a regular patch across that line. Its inverse uses a cube root and is not differentiable there, precisely where the rank condition fails.

The image has the regular patch $Y(a,b)=(a,b,0)$. Thus failure of one parametrization does not prove an image singularity. It says these proposed coordinates cannot support the smooth inverse. This differs from a cone tip, where ruling out regular graph neighborhoods needs a geometric argument. It also differs from an angular seam, where rank can remain full while injectivity fails. Rank, injectivity and image smoothness are separate conditions, and a defect in one cannot silently serve as a proof about another. In this example the repair changes the coordinates, not any point of the underlying plane or any of its genuine tangent spaces.

## Exercises

### Exercise 7.1
<a id="regular-surfaces-patches-ex-1"></a>
Prove that the graph of any $C^1$ function on an open planar domain is a regular surface patch.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The first two output coordinates recover the parameter.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Its derivative cross product has last component one.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $X(u,v)=(u,v,f(u,v))$, the cross product is $(-f_u,-f_v,1)$, so it never vanishes. The graph map is continuous and injective, and projection onto the first two coordinates is its continuous inverse. It is therefore a regular patch onto the whole graph, which is relatively open in itself. These checks establish both the derivative and topological parts of the definition.
</details>

### Exercise 7.2
<a id="regular-surfaces-patches-ex-2"></a>
Show that having $X_u\ne0$ and $X_v\ne0$ separately does not imply rank two.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Two nonzero vectors may be parallel.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Make the formula depend only on $u+v$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Take $X(u,v)=(u+v,0,0)$. Both partial derivatives equal $(1,0,0)$ and are nonzero, but their cross product vanishes. The derivative has rank one and the image is a line, not a surface patch. The regularity condition requires independence, not merely two separately nonzero derivative vectors.
</details>

### Exercise 7.3
<a id="regular-surfaces-patches-ex-3"></a>
Verify regularity of the paraboloid as a level set and compare with its graph parametrization.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use $F(x,y,z)=z-x^2-y^2$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The gradient's third component never vanishes.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The gradient is $(-2x,-2y,1)$, so the level-zero set is regular by Theorem 7.4. Its graph parametrization is $(u,v,u^2+v^2)$ and has cross product $(-2u,-2v,1)$. Projection supplies its inverse. The two methods agree; the level-set method certifies existence of local graphs, while here the equation already gives one global graph formula.
</details>

### Exercise 7.4
<a id="regular-surfaces-patches-ex-4"></a>
Why does the equation $z^3=0$ not disprove regularity of the plane $z=0$?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The level-set theorem is sufficient, not an equivalence for every defining function.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Write a better defining function or a graph parametrization.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The gradient of $z^3$ vanishes on its zero set, so that defining function fails the theorem's hypothesis. The set is nevertheless the plane, parametrized regularly by $(u,v,0)$, or defined by $F=z$ with nonzero gradient $(0,0,1)$. Failure of one certificate is not proof that the geometric object fails the desired property.
</details>

### Exercise 7.5
<a id="regular-surfaces-patches-ex-5"></a>
For the cylinder parametrization, distinguish a rank failure from a duplicate angular label.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Its cross product has constant positive norm.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Compare the inputs $u$ and $u+2\pi$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The derivative cross product has norm $R>0$ everywhere, so there is no rank failure at any angular value. But $X(u+2\pi,v)=X(u,v)$, so a domain containing both labels is not injective. An open angular interval shorter than a full revolution avoids the duplicate and gives a local coordinate branch. A seam can therefore be a labeling problem even where all derivative tests pass.
</details>

### Exercise 7.6
<a id="regular-surfaces-patches-ex-6"></a>
Derive the cross-product transformation when $Y(a,b)=X(u(a,b),v(a,b))$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Expand both chain-rule derivative vectors.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Terms crossing a vector with itself vanish.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The derivatives are $Y_a=X_uu_a+X_vv_a$ and $Y_b=X_uu_b+X_vv_b$. Their cross product is $(u_av_b-v_au_b)(X_u\times X_v)$, evaluated at the corresponding parameter. The coefficient is the Jacobian determinant. If the coordinate change is regular, that determinant is nonzero, preserving rank while possibly reversing the unit normal's sign.
</details>

### Exercise 7.7
<a id="regular-surfaces-patches-ex-7"></a>
Verify that the stereographic formula in Worked example 3 lies on the radius-$R$ sphere.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Put $r^2=u^2+v^2$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The numerator of the squared norm simplifies to $(1+r^2)^2$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Its squared norm is $R^2(4r^2+(r^2-1)^2)/(1+r^2)^2$. Since $4r^2+(r^2-1)^2=r^4+2r^2+1=(1+r^2)^2$, this equals $R^2$. Its last coordinate cannot equal $R$ for finite $(u,v)$, so it misses the north pole. The displayed inverse then shows that every other sphere point is represented exactly once.
</details>

### Exercise 7.8
<a id="regular-surfaces-patches-ex-8"></a>
Prove that transition derivatives between valid surface charts are invertible.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The transition and its inverse are both differentiable.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Differentiate their composition, which is the identity.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Let $\phi=X^{-1}Y$ and $\psi=Y^{-1}X$ on the overlap. The transition theorem makes both $C^1$, and $\psi\circ\phi$ is the identity. The chain rule yields $D\psi(\phi(q))D\phi(q)=I$. Since these are square two-by-two matrices, $D\phi$ is invertible and its inverse is the displayed derivative of $\psi$. This is stronger than knowing merely that the transition is a set-theoretic bijection.
</details>

### Exercise 7.9
<a id="regular-surfaces-patches-ex-9"></a>
Show that $(u,v)\mapsto(uv,u,v^2)$ is regular except at the origin but is not globally injective.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compute its two partial derivatives and their cross product.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Set $u=0$ and compare opposite $v$ values.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The partials are $(v,1,0)$ and $(u,0,2v)$; their cross product is $(2v,-2v^2,-u)$. It vanishes exactly when $u=v=0$. Yet $(0,v)$ and $(0,-v)$ both map to $(0,0,v^2)$. Thus independent derivatives at the nonzero preimages do not make the full parametrization injective. Local graph restrictions separate the branches instead of erasing their duplicate points.
</details>

### Exercise 7.10
<a id="regular-surfaces-patches-ex-10"></a>
Explain why local patch normals do not automatically define a global orientation.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare their signs on overlaps.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A consistent choice must survive every chain of overlapping charts.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Each patch has two possible unit normals. A global orientation requires choices whose values agree on every overlap, with the Jacobian sign dictating which local choice agrees. Following overlaps around a loop can force a normal to return with the opposite sign, as on a Möbius band. Thus local existence is automatic for a regular patch but global compatibility is an extra condition; a collection of uncoordinated cross products does not prove it.
</details>

## Sources

Original Euler prose and exercises, CC BY-SA 4.0. The preserved companion is [Unhurried surface patches](../../apps/unhurried/articles/ga-dg-surface-patches/index.html), together with the unchanged Surface Curvature Studio. Sucharit Sarkar's [UCLA notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lectures 10–12, are a primary-author reference. The multivariable inverse-function theorem is a stated differential-calculus input, not a new proof claim in this chapter.

## Summary

Rank two supplies independent tangent directions, while the homeomorphism and relative-openness requirements make a parametrization a genuine surface chart. The inverse-function theorem proves local graph form and smooth chart transitions. A nonzero gradient certifies a regular level surface, but a failed defining equation need not indicate a singular set. Coordinate seams, rank failures and global orientation are distinct questions. The next chapter defines tangent vectors intrinsically as velocities and studies derivatives of maps between surfaces.
