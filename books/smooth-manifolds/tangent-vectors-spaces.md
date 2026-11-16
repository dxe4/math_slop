
# Tangent Vectors and the Tangent Space {#section-1-tangent-vectors-and-the-tangent-space}

A curve through a point has a first-order velocity in every coordinate chart. The coordinate list changes when the chart changes, but the underlying velocity should remain one object. A second description captures that object without a preferred chart: a tangent vector differentiates smooth functions at the point and obeys the product rule.

This L4 chapter proves the equivalence between curve velocities, coordinate vectors and derivations. It assumes [Smooth Maps and Partitions of Unity](smooth-maps-partitions-unity.md), multivariable differentiation, and finite-dimensional linear algebra. Manifolds are real, finite-dimensional, Hausdorff, second-countable and without boundary. Curves are smooth on an open interval about zero; they are not required to have nonzero velocity. A zero tangent vector can therefore be represented by a nonconstant curve.

The basepoint remains part of the notation $T_pM$. The vector-space structure belongs to the velocities at one point. Adding coordinate tuples of different points on the manifold is not an intrinsic operation supplied by this construction.

<a id="section-7-1-curves-and-the-coordinate-change-rule"></a>
## 1. Curves and the coordinate-change rule {#section-9-1-curves-and-the-coordinate-change-rule}

Let $\gamma:(-\varepsilon,\varepsilon)\to M$ satisfy $\gamma(0)=p$. Choose a chart $x:U\to\mathbb R^n$ about $p$ and restrict the parameter interval so the curve stays in $U$. Its coordinate velocity is $(x\circ\gamma)'(0)\in\mathbb R^n$.

For another chart $y$ about $p$, the ordinary chain rule gives

$$(y\circ\gamma)'(0)=D(y\circ x^{-1})_{x(p)}(x\circ\gamma)'(0).$$

The transition derivative is invertible because its inverse is the derivative of the reverse transition. Consequently two curves have equal velocities in one chart exactly when they do in every chart.

**Definition 4.1 (Velocity equivalence).** Two smooth curves through $p$ are equivalent when their coordinate velocities agree in one, and hence every, chart. The equivalence relation is immediate from equality of vectors in one fixed coordinate space. Its classes are the curve-velocity model of tangent vectors at $p$.

Every coordinate vector $v\in\mathbb R^n$ occurs. If $a=x(p)$, openness of the coordinate image permits $a+tv$ for sufficiently small positive and negative $t$. The curve $x^{-1}(a+tv)$ is smooth and has the desired velocity. For $v=0$ one may use the constant curve.

The chain-rule formula is linear in $v$. Thus adding or scaling velocities in a chart gives the same operation in any other chart. This defines a vector-space structure on the curve classes and an isomorphism with $\mathbb R^n$. The next definition gives that vector space an intrinsic description through functions.

<a id="section-23-2-germs-keep-local-functions-local"></a>
## 2. Germs keep local functions local {#section-25-2-germs-keep-local-functions-local}

**Definition 4.2 (Smooth germ at a point).** Two smooth real functions defined on neighborhoods of $p$ represent the same germ if they agree on some smaller neighborhood of $p$. The germs form an algebra under addition and multiplication, denoted $C_p^\infty(M)$. Evaluation at $p$ is well defined on germs.

Using germs allows coordinate functions to be differentiated even though a coordinate chart may cover only part of the manifold. A derivative at $p$ depends only on values arbitrarily close to $p$, so the equivalence is suited to the question.

**Definition 4.3 (Derivation at a point).** A derivation is a real-linear map $D:C_p^\infty(M)\to\mathbb R$ satisfying

$$D(fg)=f(p)Dg+g(p)Df.$$

The vector space of such derivations is the tangent space $T_pM$. Addition and scalar multiplication are those of linear maps; their product rules follow by adding or scaling the displayed identity.

Every derivation kills constants. The product rule gives $D1=D(1\cdot1)=2D1$, so $D1=0$, and real linearity handles all constant germs. For a germ vanishing at $p$, the rule also gives $D(f^2)=0$. These are first-order features: a second derivative would not satisfy the same product rule.

<a id="section-37-3-local-decomposition-determines-a-derivation"></a>
## 3. Local decomposition determines a derivation {#section-39-3-local-decomposition-determines-a-derivation}

We need one Euclidean calculus identity, proved here to expose why coordinates capture every derivation.

**Lemma 4.4 (Local first-order decomposition).** If $F$ is smooth near $a\in\mathbb R^n$, then on a sufficiently small ball about $a$,

$$F(z)=F(a)+\sum_{i=1}^n(z_i-a_i)G_i(z),\qquad G_i(a)=\partial_iF(a),$$

where the $G_i$ are smooth.

*Proof.* Choose a ball contained in the domain so every segment from $a$ to $z$ stays inside. The one-variable fundamental theorem along that segment gives

$$F(z)-F(a)=\int_0^1\frac{d}{dt}F(a+t(z-a))\,dt=\sum_i(z_i-a_i)\int_0^1\partial_iF(a+t(z-a))\,dt.$$

Use the final integrals as $G_i$. The integrands are smooth jointly in $z$ and $t$. On a compact subball all their derivatives are uniformly continuous and bounded for $0\le t\le1$, so difference quotients pass under this finite-interval integral, repeatedly in every coordinate. Thus the $G_i$ are smooth. Substitution at $z=a$ gives the stated derivative values. ∎

**Theorem 4.5 (Coordinate basis for tangent vectors).** For a chart $x=(x^1,\ldots,x^n)$ about $p$, define

$$\left.\frac{\partial}{\partial x^i}\right|_p(f)=\partial_i(f\circ x^{-1})(x(p)).$$

These are derivations and form a basis of $T_pM$. Every derivation has the unique expression

$$D=\sum_i v^i\left.\frac{\partial}{\partial x^i}\right|_p,\qquad v^i=D(x^i).$$

*Proof.* The displayed coordinate derivatives are well defined on germs. Linearity and the Leibniz rule follow from ordinary Euclidean differentiation. Their values on the coordinate germs are the Kronecker values: the $i$-th basis derivation applied to $x^j$ is one for $i=j$ and zero otherwise. Hence they are linearly independent.

For an arbitrary germ $f$, apply Lemma 4.4 to $F=f\circ x^{-1}$ at $a=x(p)$ and pull the identity back. It expresses $f$ as its constant value plus $\sum_i(x^i-a_i)g_i$, where $g_i(p)=\partial_iF(a)$. Applying $D$, constant terms vanish and the product rule gives

$$Df=\sum_i g_i(p)D(x^i)=\sum_i v^i\partial_iF(a).$$

Thus the proposed expression holds on every germ. Its coefficients are forced by its values on $x^i$, proving uniqueness. This also proves that arbitrary coordinate coefficients define every possible tangent vector. ∎

In particular, $\dim T_pM=n$. No continuity assumption on an abstract derivation was used to obtain this result: its algebraic product rule and smooth local decomposition force it to be a first-order coordinate derivative.

<a id="section-71-4-curves-and-derivations-give-the-same-space"></a>
## 4. Curves and derivations give the same space {#section-73-4-curves-and-derivations-give-the-same-space}

A smooth curve through $p$ defines $D_\gamma f=(f\circ\gamma)'(0)$. This is independent of the germ representative, since equal representatives give equal compositions for sufficiently small parameters. The one-variable product rule makes it a derivation.

In chart $x$, the chain rule gives

$$D_\gamma f=\sum_i(x^i\circ\gamma)'(0)\,\partial_i(f\circ x^{-1})(x(p)).$$

Thus equivalent curves define the same derivation. Conversely, equal derivations have equal values on each $x^i$ and hence equal coordinate velocities. Finally every derivation is represented by the coordinate-line curve $x^{-1}(a+tv)$ using its coefficient vector from Theorem 4.5. We have proved a bijection, preserving addition and scalar multiplication, between curve classes and $T_pM$.

For new coordinates $y=(y^1,\ldots,y^n)$, the coefficient vector becomes

$$w^j=D(y^j)=\sum_i\frac{\partial(y^j\circ x^{-1})}{\partial x^i}(x(p))v^i.$$

The basis changes in the opposite way, using derivatives of $x$ with respect to $y$. Coefficients and basis must both be transformed when describing the same derivation. A raw list of numbers is a coordinate description of a tangent vector, not the coordinate-independent object by itself.

<a id="section-87-5-global-function-definitions-are-equivalent"></a>
## 5. Global function definitions are equivalent {#section-89-5-global-function-definitions-are-equivalent}

Some definitions start with derivations on $C^\infty(M)$ instead of germs. The smooth cutoffs proved in the preceding chapter make the two conventions equivalent.

**Proposition 4.6 (Locality of a global derivation).** A real-linear Leibniz derivation on global smooth functions vanishes on every function that is zero near $p$. It therefore determines, and is determined by, a germ derivation.

*Proof.* Suppose $f$ vanishes on a neighborhood $O$ of $p$. Choose a smooth cutoff $\chi$ equal to one near $p$ with support contained in $O$. Then $\chi f=0$ globally. Since $f(p)=0$ and $\chi(p)=1$, the product rule gives $0=D(\chi f)=Df$. Thus agreeing functions near $p$ have the same derivative value.

Every smooth germ has a global representative near $p$: take a local representative on $O$, multiply by a cutoff supported inside $O$ and equal to one near $p$, and extend by zero. The preceding chapter proves the extension smooth. Different choices agree near $p$, so locality makes their derivative values equal. This defines a germ derivation. In the other direction, restricting a germ derivation to global functions gives a global derivation. The constructions are inverse by locality. ∎

The cutoff is used to extend the local function, not to choose an additional derivative. Coordinate calculations can therefore use local coordinate germs while remaining compatible with the global-function convention.

<a id="section-99-6-first-order-information-as-an-algebraic-quotient"></a>
## 6. First-order information as an algebraic quotient {#section-101-6-first-order-information-as-an-algebraic-quotient}

The derivation description can isolate exactly which part of a germ contributes. Let $\mathfrak m_p$ be the ideal of germs vanishing at $p$, and let $\mathfrak m_p^2$ consist of finite sums of products of two such germs. Every derivation kills this square ideal by the Leibniz rule. Thus only a first-order class of a vanishing germ can affect its value.

**Proposition 4.7 (First-order germ quotient).** The classes of $x^i-x^i(p)$ form a basis of $\mathfrak m_p/\mathfrak m_p^2$. Tangent derivations identify naturally with its real linear dual.

*Proof.* For a vanishing germ $f$, Lemma 4.4 writes $f=\sum_i(x^i-a_i)g_i$. Replace $g_i$ by its value $g_i(p)$ plus the vanishing germ $g_i-g_i(p)$. The remaining product terms belong to $\mathfrak m_p^2$, so the coordinate-difference classes span the quotient. If a constant linear combination of them belongs to the square ideal, apply each coordinate derivation. Such derivations kill the ideal, while their values on the coordinate differences extract the individual coefficients. Every coefficient is therefore zero, proving independence.

A derivation defines a linear functional on this quotient because it kills its denominator. Conversely, given a linear functional $\ell$ on the quotient, define $Df=\ell([f-f(p)])$. This is linear and kills constants. Writing $f=f(p)+f_0$ and $g=g(p)+g_0$, with $f_0,g_0$ vanishing, gives

$$[fg-f(p)g(p)]=f(p)[g_0]+g(p)[f_0],$$

because $f_0g_0$ lies in the square ideal. Applying $\ell$ proves the Leibniz rule. These constructions are inverse, giving the claimed dual description. ∎

This quotient packages the same first-order calculation used earlier, without selecting numerical coordinates until a basis is wanted. Values of a function and its first-order vanishing class determine its derivative action; products of two vanishing factors contribute only terms that every tangent derivation annihilates. The statement concerns the smooth-germ algebra of the manifold at the specified point, so its dimension conclusion follows from the coordinate decomposition proved here.

<a id="section-115-7-worked-examples"></a>
## 7. Worked examples {#section-117-7-worked-examples}

<a id="section-117-worked-example-4-8-velocity-at-a-circle-point"></a>
### Worked example 4.8 — Velocity at a circle point {#section-119-worked-example-4-8-velocity-at-a-circle-point}

At $p=(1,0)\in S^1$, the right-semicircle chart uses $y$ as coordinate and has inverse $y\mapsto(\sqrt{1-y^2},y)$. The curve $\gamma(t)=(\cos t,\sin t)$ has coordinate velocity one. Its derivation is therefore $\partial/\partial y|_p$ in this chart.

Applied to the ambient coordinate restrictions, it gives $D(y)=1$ and $D(x)=0$, since the derivative of $\sqrt{1-y^2}$ at zero is zero. The corresponding ambient velocity is $(0,1)$. If we instead use coordinate $z=3y$, the same curve has coefficient three, while $\partial/\partial z|_p=(1/3)\partial/\partial y|_p$. The product of coefficient and basis still gives the same derivation. In particular its value on the height function remains one.

<a id="section-123-worked-example-4-9-polar-coordinates-include-a-scale-fa"></a>
### Worked example 4.9 — Polar coordinates include a scale factor {#section-125-worked-example-4-9-polar-coordinates-include-a-scale-fa}

On the half-plane $x>0$, polar coordinates have $r>0$ and $-\pi/2<\theta<\pi/2$, with inverse $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$. These restrictions fix an actual angle branch. The coordinate basis becomes

$$\frac{\partial}{\partial r}=\cos\theta\frac{\partial}{\partial x}+\sin\theta\frac{\partial}{\partial y},\qquad
\frac{\partial}{\partial\theta}=-r\sin\theta\frac{\partial}{\partial x}+r\cos\theta\frac{\partial}{\partial y}.$$

At $(a,0)$ with $a>0$, the angular basis vector is $a\,\partial/\partial y$. The curve $(a\cos t,a\sin t)$ has polar velocity $(0,1)$ but Cartesian velocity $(0,a)$, as the formula predicts. Unit angular rate is not unit Euclidean speed unless $a=1$. The chart does not extend through the origin; the tangent space at the origin of the plane still exists in Cartesian coordinates.

<a id="section-132-worked-example-4-10-the-same-first-order-action-from-di"></a>
### Worked example 4.10 — The same first-order action from different curves {#section-134-worked-example-4-10-the-same-first-order-action-from-di}

In the plane at $p=(1,0)$ let $D=2\partial_x-3\partial_y$ and $f(x,y)=x^2y+\sin y$. The derivatives at $p$ are $f_x=0$ and $f_y=2$, so $Df=-6$.

The curve $\gamma(t)=(1+2t,-3t)$ represents $D$. Differentiating $(1+2t)^2(-3t)+\sin(-3t)$ at zero gives $-3-3=-6$, in agreement. The different curve $\eta(t)=(1+2t+t^2,-3t+5t^2)$ has the same initial velocity, so its derivative on every smooth $f$ is the same. The quadratic changes affect the curve beyond first order and do not define a new tangent vector.

Conversely, $(1+t^2,t^3)$ is nonconstant but has zero coordinate velocity at zero. It represents the zero tangent vector. Tangent vectors record first-order behavior rather than the entire trace of a curve.

<a id="section-140-exercises"></a>
## Exercises {#section-142-exercises}

<a id="section-142-exercise-1"></a>
### Exercise 1 {#section-144-exercise-1}
<a id="tangent-vectors-spaces-ex-1"></a>
Prove that a derivation kills constant germs and that $D(f^2)=2f(p)Df$. What follows if $f(p)=0$?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Apply the product rule to $1\cdot1$ first.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Then apply it to the product of the germ with itself.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The identity $D1=2D1$ gives $D1=0$, and real linearity gives zero on every constant. The product rule applied to $f\cdot f$ gives $D(f^2)=f(p)Df+f(p)Df=2f(p)Df$. When $f(p)=0$, this is zero regardless of $Df$. A square vanishing to second order at the point carries no nonzero first-order derivative there.
</details>

<a id="section-155-exercise-2"></a>
### Exercise 2 {#section-157-exercise-2}
<a id="tangent-vectors-spaces-ex-2"></a>
On smooth germs at zero in the real line, is $L(f)=f''(0)$ a derivation? Give an explicit product showing the answer.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Test two germs that vanish at zero but whose product has a nonzero second derivative.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the coordinate germ for both factors.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Take $f(x)=g(x)=x$. The proposed product rule would give $L(fg)=f(0)Lg+g(0)Lf=0$. But $fg=x^2$ and $L(fg)=2$. Thus $L$ is linear but is not a derivation. The ordinary second-derivative product rule has an extra term involving first derivatives, unlike Definition 4.3.
</details>

<a id="section-168-exercise-3"></a>
### Exercise 3 {#section-170-exercise-3}
<a id="tangent-vectors-spaces-ex-3"></a>
For $\gamma(t)=(t^2,t^3)$ in the plane, prove that its tangent vector at zero is zero although the curve is nonconstant.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compute its two coordinate derivatives at zero.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the chain rule to evaluate its induced derivation on an arbitrary smooth function.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The derivatives are $2t$ and $3t^2$, both zero at zero. Hence its velocity in the Cartesian chart is $(0,0)$. For every smooth $f$, the chain rule gives $(f\gamma)'(0)=f_x(0,0)\cdot0+f_y(0,0)\cdot0=0$. Its derivation is zero. The curve is nonconstant because its first coordinate is positive for nonzero sufficiently small $t$.
</details>

<a id="section-181-exercise-4"></a>
### Exercise 4 {#section-183-exercise-4}
<a id="tangent-vectors-spaces-ex-4"></a>
A three-dimensional chart sends $p$ to $a$. Construct a smooth curve representing coordinate velocity $(1,-2,3)$ and justify that it stays in the chart for both positive and negative small parameters.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use a straight coordinate line through $a$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
An open coordinate image contains a ball about $a$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Let $v=(1,-2,3)$ and take $\gamma(t)=x^{-1}(a+tv)$. Choose a coordinate ball of radius $r>0$ about $a$ inside the image, and restrict to $|t|<r/(1+\|v\|)$. Then $\|tv\|<r$, so both parameter directions remain inside the chart. The coordinate curve is smooth and has derivative $v$, and the inverse chart is smooth as a map to the manifold. Thus it represents the required tangent vector.
</details>

<a id="section-194-exercise-5"></a>
### Exercise 5 {#section-196-exercise-5}
<a id="tangent-vectors-spaces-ex-5"></a>
On the plane use new coordinates $y^1=x^1$, $y^2=x^2+(x^1)^2$. At the point with $x$-coordinates $(1,0)$, transform the tangent coefficients $(3,4)$ and check the inverse basis change.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Differentiate the new coordinates with respect to the old ones.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Solve for $x^1,x^2$ as smooth functions of $y^1,y^2$ to change the basis.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The coordinate change has inverse $x^1=y^1$, $x^2=y^2-(y^1)^2$, so it is a legitimate global diffeomorphism. Its Jacobian at the point is $\begin{pmatrix}1&0\\2&1\end{pmatrix}$, sending $(3,4)$ to $(3,10)$. The inverse basis relation is $\partial_{y^1}=\partial_{x^1}-2\partial_{x^2}$ and $\partial_{y^2}=\partial_{x^2}$ at this point. Thus $3\partial_{y^1}+10\partial_{y^2}=3\partial_{x^1}+4\partial_{x^2}$, as required.
</details>

<a id="section-207-exercise-6"></a>
### Exercise 6 {#section-209-exercise-6}
<a id="tangent-vectors-spaces-ex-6"></a>
At polar coordinates $r=2$, $\theta=\pi/4$, find the Cartesian coefficients of $D=\partial_r+3\partial_\theta$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Insert the two polar basis formulas before combining their coefficients.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Both sine and cosine are $1/\sqrt2$ here, and the angular factor includes $r$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The horizontal coefficient is $\cos\theta-3r\sin\theta=(1-6)/\sqrt2=-5/\sqrt2$. The vertical coefficient is $\sin\theta+3r\cos\theta=(1+6)/\sqrt2=7/\sqrt2$. The point is in the chosen half-plane chart and has positive radius. Omitting the factor $r$ would give the wrong angular velocity.
</details>

<a id="section-220-exercise-7"></a>
### Exercise 7 {#section-222-exercise-7}
<a id="tangent-vectors-spaces-ex-7"></a>
At $(1,0)$ on the circle, show that every tangent derivation has ambient coordinate values $(0,a)$ for some real $a$, and realise each such value by a curve on the circle.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Apply the derivation to the identity $x^2+y^2=1$ on the circle.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use a rotation curve with adjustable angular speed.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The product rule gives $2x(p)D(x)+2y(p)D(y)=D1=0$. At this point it forces $D(x)=0$, while $D(y)$ can be any real value $a$. The curve $(\cos(at),\sin(at))$ lies on the circle, starts at the point and has ambient velocity $(0,a)$. The one-dimensional chart description proves that these account for the entire tangent space.
</details>

<a id="section-233-exercise-8"></a>
### Exercise 8 {#section-235-exercise-8}
<a id="tangent-vectors-spaces-ex-8"></a>
A global Leibniz derivation is given. Prove that global functions agreeing near $p$ have the same derivation value, and explain why different cutoff extensions of a germ do not affect its value.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Subtract the functions and multiply by a cutoff supported where their difference vanishes.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use cutoff value one and function value zero at the basepoint in the product rule.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Let $h=f-g$ vanish near $p$, and take $\chi=1$ near $p$ with support in that zero neighborhood. Then $\chi h=0$ globally and $0=D(\chi h)=\chi(p)Dh+h(p)D\chi=Dh$. Thus $Df=Dg$. Two cutoff extensions of a germ agree with its representative near $p$, and hence with each other there. The same locality argument makes their derivative values equal.
</details>

<a id="section-246-exercise-9"></a>
### Exercise 9 {#section-248-exercise-9}
<a id="tangent-vectors-spaces-ex-9"></a>
Determine the tangent space at a point of a zero-dimensional manifold. Explain the curve description as well.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
A chart neighborhood is a singleton in dimension zero.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Every smooth germ there is constant, and curves from a connected parameter interval into a discrete space cannot change values.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Every germ at the point is determined by its value on the singleton neighborhood and is constant as a germ. Derivations kill constants, so the only tangent vector is zero. Equivalently, the coordinate space $\mathbb R^0$ has only its zero vector. A smooth curve is continuous, and on its connected interval its image in a discrete zero-manifold is a single point, giving the same zero velocity description.
</details>

<a id="section-259-exercise-10"></a>
### Exercise 10 {#section-261-exercise-10}
<a id="tangent-vectors-spaces-ex-10"></a>
On the positive real line use coordinates $x$ and $y=x^3$. At $p=1$, a tangent vector has coefficient one in the $x$ coordinate. Find its $y$ coefficient, and show why assigning coefficient one in both charts would describe different vectors.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the derivative of the transition at the basepoint.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Compare the resulting derivations on the ordinary coordinate function $x$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The transition derivative is $3x^2=3$ at one, so the same vector has $y$ coefficient three. Indeed, $\partial_y=(1/3)\partial_x$ there, so $3\partial_y=\partial_x$. A vector with coefficient one in the $y$ chart is $\partial_y$ and takes the value $1/3$ on the function $x$; the original vector takes value one. They are distinct. The positive-line restriction makes the cubic transition a genuine smooth diffeomorphism.
</details>

<a id="section-272-provenance-and-further-reading"></a>
## Provenance and further reading {#section-274-provenance-and-further-reading}

This is original Euler exposition and exercises in British English, CC BY-SA 4.0. The source comparison is Lee, *Introduction to Smooth Manifolds*, and Tu, *An Introduction to Manifolds*. The chain rule, finite-interval differentiation under a smooth parameter integral and the ordinary fundamental theorem of calculus are named Euclidean inputs; the local decomposition, derivation classification and curve equivalence are proved here. Existing calculus, differential-geometry and topology sources remain intact.

<a id="section-276-summary"></a>
## Summary {#section-278-summary}

A tangent vector can be represented by a curve's coordinate velocity or by a Leibniz derivation on smooth germs. Local first-order decomposition proves that these descriptions give the same finite-dimensional vector space. Coordinates supply bases and coefficients, and their Jacobian transformation laws preserve the underlying vector. Smooth cutoffs connect local and global function conventions. The next chapter uses this structure to define differentials and study maps of fixed rank.
