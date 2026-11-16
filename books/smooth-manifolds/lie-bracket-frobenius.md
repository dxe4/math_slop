
# The Lie Bracket and Frobenius' Theorem {#section-1-the-lie-bracket-and-frobenius-theorem}

Two allowed velocity directions need not fit together into a surface whose tangent planes contain exactly those directions. Following one direction and then another can produce a displacement outside the proposed plane. The Lie bracket detects that first obstruction. Frobenius' theorem says that, for a smooth distribution of constant rank, closure under brackets is also sufficient for local coordinate planes to realize the distribution.

This L4 chapter assumes [Vector Fields and Flows](vector-fields-flows.md), the flow-box theorem, smooth subbundles and embedded submanifolds. Manifolds are real, finite-dimensional, Hausdorff, second-countable and without boundary. Fields and distributions are smooth. We prove the local constant-rank Frobenius theorem, including necessity and local uniqueness of integral plaques. The smooth Euclidean ODE and inverse-function theorems named in earlier chapters remain inputs. Singular variable-rank integrability and the global construction of maximal immersed leaves are outside this chapter's proved scope.

<a id="section-5-1-commutators-are-again-vector-fields"></a>
## 1. Commutators are again vector fields {#section-7-1-commutators-are-again-vector-fields}

Regard fields as derivations of smooth functions. Define their Lie bracket by

$$[X,Y]f=X(Yf)-Y(Xf).$$

Expanding on a product cancels the mixed terms:

$$[X,Y](fg)=f[X,Y]g+g[X,Y]f.$$

The outputs are smooth, so the derivation-section correspondence makes this a smooth vector field. In coordinates its components are

$$[X,Y]^j=\sum_i\big(X^i\partial_iY^j-Y^i\partial_iX^j\big).$$

Indeed the second-derivative terms in $X(Yf)-Y(Xf)$ cancel by symmetry of mixed partials, leaving the displayed first-order coefficients. This also proves smoothness directly.

The bracket is real bilinear and antisymmetric. It satisfies the Jacobi identity

$$[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0.$$

To verify it, expand each nested commutator as a sum of composed operators. The six orderings of $X,Y,Z$ each occur once positively and once negatively, so cancel on every smooth function. Equality as derivations gives equality of fields.

It is not bilinear over smooth functions. The precise coefficient formula is

$$[fX,gY]=fg[X,Y]+f(Xg)Y-g(Yf)X.$$

This follows by applying both sides to an arbitrary function and using the product rule twice. The extra derivative terms are essential when checking whether a family of directions is bracket closed.

If $F:M\to N$ is a diffeomorphism, then

$$F_*[X,Y]=[F_*X,F_*Y].$$

For a target function $h$, the defining identity $(F_*X)h\circ F=X(h\circ F)$ converts each composed derivation on the right into the corresponding source composition. Subtraction gives the bracket identity on every function, proving it intrinsically.

<a id="section-39-2-brackets-measure-failure-of-local-flows-to-commute"></a>
## 2. Brackets measure failure of local flows to commute {#section-41-2-brackets-measure-failure-of-local-flows-to-commute}

Let $\Phi_t$ be the local flow of $X$. The pulled-back field is

$$(\Phi_t^*Y)_p=d(\Phi_{-t})_{\Phi_t(p)}Y_{\Phi_t(p)},$$

where all expressions are restricted to neighborhoods on which the time maps exist. In local coordinates, the smooth flow gives

$$\Phi_t(p)=p+tX_p+O(t^2),\qquad
D\Phi_t(p)=I+tDX_p+O(t^2).$$

On a sufficiently small compact coordinate neighborhood these Taylor expansions follow from smoothness in time and space; only their first derivatives at zero are needed. Substituting the inverse-time derivative and the expansion of $Y$ gives

$$\left.\frac{d}{dt}\right|_{0}\Phi_t^*Y=DY\,X-DX\,Y=[X,Y].$$

Using the local group law at an arbitrary time yields

$$\frac{d}{dt}\Phi_t^*Y=\Phi_t^*[X,Y].$$

For example write $\Phi_{t+h}=\Phi_h\circ\Phi_t$, reverse order under pullback and differentiate in $h$ at zero. The domain is open, so the needed short-time compositions exist near each chosen pair.

**Proposition 9.1 (Local commutation).** The fields satisfy $[X,Y]=0$ exactly when their local flows commute wherever both orders are defined for sufficiently small times near each point.

*Proof.* If the bracket is zero, the derivative identity makes $\Phi_t^*Y$ constant in $t$, equal to $Y$. Thus $\Phi_t$ carries $Y$ to itself. If $\Psi_s$ is the flow of $Y$, then $s\mapsto\Phi_t(\Psi_s(p))$ is a $Y$-integral curve starting at $\Phi_t(p)$. Uniqueness makes it $\Psi_s(\Phi_t(p))$ for small common times.

Conversely, differentiate a local commutation identity in $s$ at zero to get $d\Phi_t(Y)=Y\circ\Phi_t$, or $\Phi_t^*Y=Y$. Differentiate that identity in $t$ at zero; the bracket derivative formula gives $[X,Y]=0$. ∎

This is a local statement and requires no complete field. It concerns two actual flows, not the claim that arbitrary approximate numerical steps commute.

<a id="section-68-3-distributions-and-integral-plaques"></a>
## 3. Distributions and integral plaques {#section-70-3-distributions-and-integral-plaques}

A smooth rank-$r$ distribution $D\subset TM$ is a smooth vector subbundle. Equivalently, around each point there are smooth fields $X_1,\ldots,X_r$ whose values are independent and span $D$ at every nearby point. Smooth sections of $D$ are fields taking values in those subspaces. A distribution is involutive if the bracket of any two local sections is again a section of $D$.

It suffices to check the brackets of a local frame. Write two sections as smooth linear combinations of the frame. The coefficient formula above expresses their bracket as a sum of frame brackets and multiples of frame fields. Therefore frame-bracket membership implies membership for arbitrary sections. The converse is immediate.

An integral plaque through $p$ is an embedded $r$-dimensional submanifold through $p$ whose tangent spaces equal $D$ along it, after restricting to an appropriate neighborhood. We first prove why such plaques force the bracket condition.

**Proposition 9.2 (Necessity).** If every point has a local integral plaque, then $D$ is involutive.

*Proof.* Let $S$ be such a plaque through $p$. In a slice chart, every section of $D$ has vanishing transverse components along $S$. Its first $r$ components restrict smoothly to $S$, giving an intrinsic field there. For an ambient function $f$, applying the field and then restricting agrees with differentiating $f|_S$ by that restricted field. Applying this twice and subtracting shows that the ambient bracket along $S$ is the intrinsic bracket on $S$, hence tangent to $S$. At $p$ this tangent space is $D_p$. The same argument at every point proves the bracket section takes values in $D$. ∎

Constant rank is part of the object being studied. The family spanned by $x\partial_x$ on the whole line has dimension one off zero and zero at zero, so it is not a rank-one distribution on that domain. Frobenius' theorem below does not address such a family.

<a id="section-82-4-frobenius-theorem-with-a-constructive-induction"></a>
## 4. Frobenius' theorem with a constructive induction {#section-84-4-frobenius-theorem-with-a-constructive-induction}

**Theorem 9.3 (Local Frobenius theorem).** A smooth constant-rank distribution is involutive if and only if around every point there are coordinates

$$(u_1,\ldots,u_r,w_1,\ldots,w_{n-r})$$

in which $D$ is spanned by $\partial_{u_1},\ldots,\partial_{u_r}$. The subsets with fixed transverse coordinates $w$ are local integral plaques.

*Proof of sufficiency of involutivity.* Induct on rank $r$. For $r=0$, any coordinates work and the plaques are points. Assume $r\ge1$ and select a local frame with nonzero first field $X_1$. The flow-box theorem makes it $\partial_t$ in coordinates $(t,z)$ centered at the point. Shrink to a product neighborhood. Subtract each remaining frame field's $t$ component times $\partial_t$, leaving transverse fields $Z_2,\ldots,Z_r$ with no $\partial_t$ component. Together with $\partial_t$ they still frame $D$.

Involutivity gives $[\partial_t,Z_j]\in D$. This bracket has no $\partial_t$ component, so it is a smooth linear combination of $Z_2,\ldots,Z_r$. Their transverse coefficient columns form a smooth matrix $B(t,z)$ of rank $r-1$, satisfying

$$\partial_tB=B A$$

for a smooth square matrix $A(t,z)$. Smoothness of the coefficients follows from expressing a smooth section in a smooth frame.

Solve the matrix initial-value problem

$$\partial_tC=-A C,\qquad C(0,z)=I.$$

The named smooth ODE theorem applies with $z$ as a parameter. Formally this can be made autonomous by adjoining variables with $t'=1$ and $z'=0$. It yields a solution smooth in $(t,z)$ near $(0,0)$. Its determinant equals one at $t=0$, so after shrinking to a smaller product neighborhood it is invertible. Then

$$\partial_t(BC)=BAC-BAC=0.$$

Thus the new transverse frame columns $BC$ depend only on $z$. They span the same distribution together with $\partial_t$, because $C$ is invertible.

On the transverse slice $t=0$, these columns define a rank-$(r-1)$ distribution $D'$ in dimension $n-1$. It is involutive. Indeed the new fields have no $t$ component and no $t$ dependence, so their brackets are transverse. Original involutivity puts those brackets in $D$, and their zero $t$ component puts them in the span of the transverse frame. Restriction proves frame-bracket closure for $D'$, hence full involutivity by the frame criterion.

Apply the inductive hypothesis to $D'$ to obtain adapted coordinates on the slice. Extend those coordinates independently of $t$ over a smaller product. In the resulting full coordinates, $D$ is spanned by $\partial_t$ and the $r-1$ free coordinate fields from the slice. Rename them $u_1,\ldots,u_r$. This proves the desired form. For $r=1$ the transverse frame is empty and the flow-box theorem already finishes the argument.

*Proof of the converse and plaques.* Coordinate fields commute. The coefficient formula proves their span involutive, establishing the converse. In adapted coordinates a fixed-$w$ slice is an embedded $r$-plane whose tangent span is exactly $D$, so it is an integral plaque. This also recovers the necessity statement through explicit coordinates. ∎

The matrix ODE is the step that removes dependence of the transverse distribution on the first flow coordinate. Without it, straightening one frame field would not automatically straighten all the other directions.

<a id="section-116-5-local-uniqueness-and-its-limits"></a>
## 5. Local uniqueness and its limits {#section-118-5-local-uniqueness-and-its-limits}

In an adapted chart, a connected integral submanifold has constant transverse coordinates. Each $w_j$ has zero differential on its tangent spaces because those tangent spaces equal $D$, so its restriction has zero differential. The earlier connected-manifold zero-differential proposition makes the restriction constant. Hence the submanifold lies in one plaque. Since both have dimension $r$ and the inclusion has isomorphic differential into that plaque, the inverse-function theorem makes it locally open there.

Thus integral plaques through the same point have the same local germ after shrinking to a common adapted neighborhood. This is a local uniqueness assertion. Distinct global pieces may return to a chart, and a global leaf can require an immersed topology different from its subspace topology. No global leaf-classification statement is being inferred from these local coordinates.

<a id="section-122-6-worked-examples"></a>
## 6. Worked examples {#section-124-6-worked-examples}

<a id="section-124-worked-example-9-4-commuting-directions-on-curved-surfa"></a>
### Worked example 9.4 — Commuting directions on curved surfaces {#section-126-worked-example-9-4-commuting-directions-on-curved-surfa}

On $\mathbb R^3$, let

$$X=\partial_x+y\partial_z,\qquad Y=\partial_y+x\partial_z.$$

They are independent everywhere, and their bracket is $(\partial_x(x)-\partial_y(y))\partial_z=0$. The function $w=z-xy$ satisfies $Xw=Yw=0$. The global coordinate change $(u,v,w)=(x,y,z-xy)$ has inverse $(u,v,w)\mapsto(u,v,w+uv)$, so it is a diffeomorphism. In these coordinates the distribution is precisely the span of $\partial_u,\partial_v$. Its integral surfaces are locally $z=xy+c$.

The two flows are $(x,y,z)\mapsto(x+t,y,z+yt)$ and $(x,y,z)\mapsto(x,y+s,z+xs)$. Applying both in either order gives $(x+t,y+s,z+yt+xs+ts)$. The exact commutation agrees with the zero bracket and the explicit integral surfaces.

<a id="section-134-worked-example-9-5-a-bracket-leaves-the-proposed-plane"></a>
### Worked example 9.5 — A bracket leaves the proposed plane {#section-136-worked-example-9-5-a-bracket-leaves-the-proposed-plane}

Take $X=\partial_x$ and $Y=\partial_y+x\partial_z$. These fields span a smooth plane distribution everywhere. Their bracket is $\partial_z$, which never belongs to their span: a combination $aX+bY$ with zero $x$ and $y$ components has $a=b=0$ and hence zero $z$ component too. The distribution is not involutive and has no adapted surface plaques through every point of a neighborhood.

Following $X$ for time $t$, then $Y$ for time $s$, then their reverse motions gives

$$(x,y,z)\longmapsto(x,y,z+ts).$$

The net displacement is in the missing $z$ direction. This formula follows by four exact substitutions in the two flows, not by an approximation plot. Necessity of bracket closure rules out an integral surface patch tangent to these planes: along such a patch the bracket would have to be tangent, contradicting the calculation at each point.

<a id="section-144-worked-example-9-6-a-rank-one-family-and-a-rank-drop"></a>
### Worked example 9.6 — A rank-one family and a rank drop {#section-146-worked-example-9-6-a-rank-one-family-and-a-rank-drop}

On the punctured plane, $X=-y\partial_x+x\partial_y$ never vanishes. Its span is a rank-one distribution. Every bracket of sections satisfies

$$[fX,gX]=(fXg-gXf)X,$$

so it is involutive. Local polar coordinates give the angular direction as its span, and the integral curves lie on circles of fixed radius. These are the local plaques for this rank-one distribution. No global angle chart is required.

On the entire plane the same smooth field vanishes at the origin. Its pointwise span then drops to dimension zero there, and it is not a constant-rank line subbundle. The calculation of brackets still makes sense, but the rank-one Frobenius theorem cannot be applied across the origin. This separates a true smooth-field statement from a missing distribution hypothesis.

<a id="section-154-7-exercises"></a>
## 7. Exercises {#section-156-7-exercises}

### Exercise 9.1 {#smooth-manifolds-frobenius-ex-1}

Compute $[x\partial_x,\partial_x]$ on the line and compare it with $x[\partial_x,\partial_x]$.

<details><summary>Hint 1</summary>
Apply both compositions to an arbitrary smooth function.
</details>
<details><summary>Hint 2</summary>
Differentiate the coefficient $x$ as well as the function being acted on.
</details>
<details><summary>Full solution</summary>
For a smooth $f$, the commutator is $xf''-(xf')'=xf''-f'-xf''=-f'$. Thus the bracket is $-\partial_x$. But $x[\partial_x,\partial_x]=0$. This explicitly proves failure of smooth-function bilinearity and identifies the missing coefficient-derivative term. Real constant bilinearity remains valid because derivatives of constants vanish.
</details>

### Exercise 9.2 {#smooth-manifolds-frobenius-ex-2}

Prove every smooth rank-one distribution is involutive.

<details><summary>Hint 1</summary>
Choose a nonzero local frame $X$ and express both sections as multiples of it.
</details>
<details><summary>Hint 2</summary>
Use the coefficient bracket formula with the same frame field twice.
</details>
<details><summary>Full solution</summary>
Locally any sections are $fX$ and $gX$. Since $[X,X]=0$, their bracket is $(fXg-gXf)X$, again a smooth section of the same line bundle. This proves involutivity locally and hence everywhere. Frobenius therefore gives local curve plaques. The proof assumes a nonvanishing frame on a neighborhood; a varying-dimensional pointwise span does not meet the hypothesis.
</details>

### Exercise 9.3 {#smooth-manifolds-frobenius-ex-3}

For $X=\partial_x+y\partial_z$ and $Y=\partial_y-x\partial_z$, decide whether their rank-two distribution is involutive.

<details><summary>Hint 1</summary>
Differentiate the two $z$ coefficients in opposite coordinate directions.
</details>
<details><summary>Hint 2</summary>
A pure nonzero $z$ vector is outside their span.
</details>
<details><summary>Full solution</summary>
Their bracket is $(-1-1)\partial_z=-2\partial_z$. A combination $aX+bY$ has $x$ and $y$ components $a,b$, so it cannot equal a nonzero pure $z$ vector. Therefore the distribution is not involutive. By necessity it cannot be the tangent planes of local integral surfaces. We work over the real numbers, so the coefficient minus two is nonzero.
</details>

### Exercise 9.4 {#smooth-manifolds-frobenius-ex-4}

Let $F:M\to\mathbb R^k$ be a submersion and let $D=\ker dF$. Prove $D$ is a smooth involutive distribution and identify its integral plaques.

<details><summary>Hint 1</summary>
Use the constant-rank kernel subbundle theorem.
</details>
<details><summary>Hint 2</summary>
If $X,Y$ lie in the kernel, each component $F_i$ satisfies $XF_i=YF_i=0$.
</details>
<details><summary>Full solution</summary>
The differential, viewed as a map $TM\to F^*T\mathbb R^k$ over $M$, has constant rank $k$. Its kernel is therefore a smooth rank-$(\dim M-k)$ subbundle. For kernel sections $X,Y$, the bracket kills every $F_i$ because $[X,Y]F_i=X(YF_i)-Y(XF_i)=0$. Hence the bracket remains in the kernel. The regular-value theorem makes local fiber slices integral plaques with the same tangent kernel. These are exactly the fixed-transverse-coordinate plaques in submersion coordinates.
</details>

### Exercise 9.5 {#smooth-manifolds-frobenius-ex-5}

Suppose local frame brackets lie in $D$. Why does this imply bracket closure for every pair of local sections, rather than just constant linear combinations of the frame?

<details><summary>Hint 1</summary>
Section coefficients in a smooth frame are smooth functions.
</details>
<details><summary>Hint 2</summary>
Every extra coefficient-derivative term multiplies a frame vector already in $D$.
</details>
<details><summary>Full solution</summary>
Write the sections as $\sum_i f_iX_i$ and $\sum_jg_jX_j$. Expand the bracket using real additivity and $[f_iX_i,g_jX_j]=f_ig_j[X_i,X_j]+f_i(X_ig_j)X_j-g_j(X_jf_i)X_i$. The assumed frame brackets and all remaining frame vectors lie in $D$, and their coefficients are smooth. Summing proves closure for arbitrary sections. Ignoring the derivative terms would make the reasoning incomplete even though those terms ultimately remain in the distribution.
</details>

### Exercise 9.6 {#smooth-manifolds-frobenius-ex-6}

For $X=\partial_x$ and $Y=\partial_y+x^2\partial_z$, the bracket vanishes on the plane $x=0$. Does that establish an adapted Frobenius chart around an origin point?

<details><summary>Hint 1</summary>
Calculate the bracket at nearby points where $x\ne0$.
</details>
<details><summary>Hint 2</summary>
Involutivity is a neighborhood condition, not a single-point equality.
</details>
<details><summary>Full solution</summary>
The bracket is $2x\partial_z$, which is outside the span of $X,Y$ whenever $x\ne0$. Every open neighborhood of an origin point contains such points. An adapted coordinate chart would make the distribution involutive throughout that neighborhood, contradicting these bracket values. Thus the vanishing at the selected point alone is insufficient. The constant-rank condition does hold here, so it is neighborhood bracket closure, not rank, that fails.
</details>

### Exercise 9.7 {#smooth-manifolds-frobenius-ex-7}

Show that the full tangent distribution $D=TM$ is involutive and describe its local integral plaques. Include the rank-zero case on a positive-dimensional manifold separately.

<details><summary>Hint 1</summary>
Every bracket of smooth fields is already a smooth field.
</details>
<details><summary>Hint 2</summary>
There are no transverse coordinates for full rank and no free coordinates for rank zero.
</details>
<details><summary>Full solution</summary>
For $TM$, bracket closure is automatic. The adapted coordinates are any ordinary chart, and its connected open chart pieces are full-dimensional plaques. For the zero subbundle, the only section is the zero field, so it is also involutive; its plaques are points. These limiting cases are both included in the theorem, with dimensions $n$ and zero respectively. They should not be confused with a single pointwise-span family that changes between these ranks.
</details>

### Exercise 9.8 {#smooth-manifolds-frobenius-ex-8}

If $F:M\to N$ is a diffeomorphism and $D$ is involutive, prove $F_*D$ is involutive and that images of local integral plaques are integral plaques.

<details><summary>Hint 1</summary>
Use bracket naturality and the inverse diffeomorphism to pull sections back.
</details>
<details><summary>Hint 2</summary>
The derivative carries tangent spaces of an embedded image to the corresponding image tangent spaces.
</details>
<details><summary>Full solution</summary>
Any local sections of $F_*D$ pull back by $F^{-1}$ to sections of $D$. Their bracket lies in $D$; pushing forward and applying bracket naturality puts the original target bracket in $F_*D$. Thus it is involutive. If $S$ is an embedded integral plaque, $F(S)$ is embedded because a diffeomorphism carries slice charts to slice charts. At corresponding points its tangent spaces are $dF(TS)=dF(D)$, precisely the pushed-forward distribution. Therefore it is an integral plaque.
</details>

### Exercise 9.9 {#smooth-manifolds-frobenius-ex-9}

In the induction proof, explain why merely straightening $X_1$ does not justify assuming the remaining transverse frame is independent of $t$. What equation supplies that conclusion?

<details><summary>Hint 1</summary>
Involutivity initially gives $\partial_tB=BA$, not $\partial_tB=0$.
</details>
<details><summary>Hint 2</summary>
Choose an invertible coefficient change $C$ with $C'=-AC$.
</details>
<details><summary>Full solution</summary>
The other directions may rotate within their transverse span as $t$ changes. Involutivity only guarantees their derivatives remain in that span, producing the matrix $A$. Solving $C'=-AC$ with identity initial value makes $C$ smoothly invertible on a smaller neighborhood and gives $(BC)'=BAC-BAC=0$. The changed frame is therefore independent of $t$, permitting restriction to the transverse slice and induction. Omitting this equation would leave the essential simultaneous-straightening step unproved.
</details>

### Exercise 9.10 {#smooth-manifolds-frobenius-ex-10}

In adapted coordinates, prove that a connected integral submanifold contained in the chart lies in a single plaque. Explain the remaining difference between containment and equality with the whole plaque.

<details><summary>Hint 1</summary>
Each transverse coordinate has zero differential on its tangent space.
</details>
<details><summary>Hint 2</summary>
Use connectedness, then the equal-dimension inverse-function theorem locally.
</details>
<details><summary>Full solution</summary>
Every transverse coordinate restricts to a smooth function with zero differential on the connected integral submanifold, hence is constant. Thus all its points lie in one fixed-$w$ plaque. Its inclusion into that plaque has isomorphic differential because both tangent spaces equal the same rank-$r$ distribution. It is locally a diffeomorphism and has locally open image there. This does not make it the entire plaque: it may be a proper connected open subset. The result establishes local germ uniqueness through a point, not equality of arbitrarily chosen global domains.
</details>

<a id="section-296-8-summary-and-continuation"></a>
## 8. Summary and continuation {#section-298-8-summary-and-continuation}

The Lie bracket is the intrinsic commutator of derivations, and its coefficient terms explain why frame-bracket closure controls all sections. Zero bracket is equivalent to local flow commutation. For a smooth constant-rank distribution, involutivity is necessary for tangent plaques and sufficient for adapted coordinates. The proof straightens one field, uses a matrix ODE to remove the remaining time dependence, and inducts on the transverse slice. Plaques are locally unique through a point, while global leaf topology requires additional work.

The next chapter introduces covectors and differential forms. They will express distributions as simultaneous kernels and record bracket obstructions through exterior differentiation. The proofs here use vector fields, coordinates and ODEs alone, so no unintroduced differential-form identity is needed for Frobenius.

*Source provenance: original Euler L4 exposition, proofs, examples and supported exercises for the commissioned Smooth Manifolds text. The preceding flow, bundle and submanifold chapters supply the actual local prerequisites; smooth Euclidean ODE and inverse-function results remain named inputs. Comparison references are Lee, Introduction to Smooth Manifolds, and Tu, An Introduction to Manifolds. CC BY-SA 4.0. Draft.*
