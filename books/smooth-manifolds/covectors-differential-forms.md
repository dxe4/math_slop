
# Covectors and Differential Forms {#section-1-covectors-and-differential-forms}

A tangent vector differentiates functions in one direction. A covector measures a tangent vector linearly, and an alternating form measures several directions while recording their order. These objects can be pulled back along every smooth map, including maps that collapse dimensions. Their coordinate rules explain the Jacobian factors that will later appear in integration.

This L4 chapter assumes the tangent, bundle and differential constructions in [Vector Bundles and the Tangent Bundle](vector-bundles-tangent-bundle.md) and the smooth-manifold conventions used through [The Lie Bracket and Frobenius' Theorem](lie-bracket-frobenius.md). Manifolds are real, finite-dimensional, Hausdorff, second-countable and without boundary, and all fields and maps are smooth. We prove the algebraic and bundle constructions, wedge identities, pullback rules and contraction identities. The exterior derivative on positive-degree forms, integration and Stokes' theorem are developed in later chapters; only the already defined differential of a function is used here.

<a id="section-5-1-cotangent-spaces-and-coordinate-duality"></a>
## 1. Cotangent spaces and coordinate duality {#section-7-1-cotangent-spaces-and-coordinate-duality}

The cotangent space at $p$ is the real dual vector space $T_p^*M=\operatorname{Hom}_{\mathbb R}(T_pM,\mathbb R)$. A covector has a base point just as a tangent vector does. It acts on vectors in that tangent space, not on vectors at a different point without an additional identification.

For a chart $x=(x^1,\ldots,x^n)$, define

$$dx^i|_p(v)=v(x^i).$$

These covectors are dual to the coordinate tangent basis, since $dx^i(\partial_{x^j})=\delta^i_j$. Hence every covector has a unique expression $\alpha_p=\sum_i a_i dx^i|_p$. Its value on $v=\sum_jv^j\partial_{x^j}$ is $\sum_i a_iv^i$.

If $y$ is another coordinate system and $v_y=Jv_x$ with $J=D(y\circ x^{-1})$, the coefficient columns of the same covector satisfy

$$a_y=J^{-T}a_x.$$

Indeed equality of its value in both systems requires $a_y^T Jv_x=a_x^Tv_x$ for every $v_x$, forcing $J^Ta_y=a_x$. Equivalently $dx^i=\sum_j(\partial x^i/\partial y^j)dy^j$. Coordinate tangent coefficients and covector coefficients therefore use inverse-transpose rules relative to one another, preserving their pairing.

On $T^*M=\coprod_pT_p^*M$, the local coefficient descriptions have smooth invertible transition matrices $J^{-T}$. They satisfy the cocycle law because successive dual coordinate conversions compose. The bundle construction already proved therefore gives a rank-$n$ smooth cotangent bundle, of total dimension $2n$.

A smooth one-form is a section of this bundle. In coordinates it is $\alpha=\sum_i a_i(x)dx^i$ with smooth coefficient functions. The differential of a smooth function is the one-form

$$df_p(v)=v(f),\qquad df=\sum_i\partial_i f\,dx^i.$$

This agrees with the differential map to $T\mathbb R$ after its standard identification with real velocities. It is not a new derivative convention.

<a id="section-29-2-alternating-multilinear-measurements"></a>
## 2. Alternating multilinear measurements {#section-31-2-alternating-multilinear-measurements}

For a real vector space $V$, an alternating $k$-linear form is a multilinear map $V^k\to\mathbb R$ that vanishes whenever two input vectors agree. Interchanging two inputs negates its value: expand its zero value on a repeated pair $u+v,u+v$ and cancel the two repeated-vector terms. Applying successive swaps gives the sign of any permutation.

Conversely a multilinear map that changes sign under swaps is alternating over the reals, since repeating two inputs gives a value equal to its own negative. The characteristic-zero condition makes this implication valid. Write $\Lambda^kV^*$ for the vector space of alternating forms. Put $\Lambda^0V^*=\mathbb R$.

Let $e_1,\ldots,e_n$ be a basis and $\epsilon^1,\ldots,\epsilon^n$ its dual. For increasing indices $I=(i_1<\cdots<i_k)$ define the determinant form

$$\epsilon^I(v_1,\ldots,v_k)=\det\big(\epsilon^{i_a}(v_b)\big)_{a,b=1}^k.$$

It is multilinear and alternating by the determinant properties. These forms are a basis of $\Lambda^kV^*$. To prove spanning, expand every input vector in the $e_i$. Terms with repeated indices vanish; group the remaining terms by their increasing index set. Permutation signs turn that grouped coefficient into the determinant above, giving

$$\alpha=\sum_{i_1<\cdots<i_k}\alpha(e_{i_1},\ldots,e_{i_k})\epsilon^I.$$

Evaluating at the ordered basis tuple for a given $I$ extracts its coefficient, proving independence. Thus the dimension is $\binom nk$ for $0\le k\le n$, and every alternating form is zero if $k>n$ because every $k$ input vectors are dependent. Multilinearity and alternation make the value vanish on a dependent list by expanding one vector in the others.

<a id="section-45-3-wedge-multiplication-and-its-normalization"></a>
## 3. Wedge multiplication and its normalization {#section-47-3-wedge-multiplication-and-its-normalization}

For $\alpha\in\Lambda^pV^*$ and $\beta\in\Lambda^qV^*$ define

$$(\alpha\wedge\beta)(v_1,\ldots,v_{p+q})=
\sum_{\sigma\in\operatorname{Sh}(p,q)}\operatorname{sgn}(\sigma)
\alpha(v_{\sigma(1)},\ldots,v_{\sigma(p)})
\beta(v_{\sigma(p+1)},\ldots,v_{\sigma(p+q)}).$$

A $(p,q)$ shuffle preserves order within the first block of $p$ positions and within the second block of $q$ positions. This convention includes no extra factorial. Equivalently sum over all permutations and divide by $p!q!$: permutations internal to either block change both the permutation sign and that factor's alternating value, giving identical contributions. This full-permutation expression proves alternation by relabeling the sum after an input permutation.

For one-forms, $(\alpha\wedge\beta)(v,w)=\alpha(v)\beta(w)-\alpha(w)\beta(v)$. Iterating on covectors gives the determinant forms in the previous section. Degree-zero factors act by scalar multiplication.

**Proposition 10.1 (Exterior-algebra identities).** Wedge is bilinear, associative and graded commutative:

$$\alpha\wedge\beta=(-1)^{pq}\beta\wedge\alpha.$$

*Proof.* Bilinearity follows term by term. For associativity, expand either $(\alpha\wedge\beta)\wedge\gamma$ or $\alpha\wedge(\beta\wedge\gamma)$. Both sums assign the inputs to ordered blocks of sizes $p,q,r$, preserving order within each block. Each such three-block shuffle occurs exactly once in either nested expansion, and its sign is the product of the two shuffle signs because composition multiplies permutation signs. Thus both expressions have the same terms with the same signs.

For graded commutativity, exchanging the two ordered blocks moves $p$ entries past $q$ entries, producing $pq$ swaps and sign $(-1)^{pq}$. This gives a bijection between the shuffles of the two products. Their scalar factor values commute, proving the formula. ∎

In particular a one-form wedges with itself to zero. A general positive even-degree form need not. The exterior algebra remembers degree as well as ordinary multiplication of its coefficients.

<a id="section-68-4-smooth-forms-and-their-local-bases"></a>
## 4. Smooth forms and their local bases {#section-70-4-smooth-forms-and-their-local-bases}

The spaces $\Lambda^kT_p^*M$ assemble into a smooth vector bundle: a covector coordinate transition induces its alternating determinant transition on each basis tuple. Its entries are minors of the smooth invertible matrix $J^{-T}$, hence smooth, and the inverse transition comes from $J^T$. The cocycle law follows from composing the underlying covector changes. This constructs the bundle without assuming a metric or an orientation.

A smooth differential $k$-form is a section of this bundle. Its local expression is uniquely

$$\omega=\sum_{i_1<\cdots<i_k}\omega_{i_1\cdots i_k}(x)
 dx^{i_1}\wedge\cdots\wedge dx^{i_k},$$

with smooth coefficients. Denote the space by $\Omega^k(M)$. Zero-forms are smooth functions, and forms of degree above $n$ are zero. Wedge is defined pointwise; its coordinate formulas use finite sums and products of smooth coefficients, proving that the result is again smooth.

For top degree, a coordinate change gives

$$dy^1\wedge\cdots\wedge dy^n=\det D(y\circ x^{-1})\,dx^1\wedge\cdots\wedge dx^n.$$

Evaluate both sides on the coordinate tangent basis to obtain the determinant. Its sign records order and will be essential in oriented integration. A top form is not yet an unsigned area measure; a metric and an orientation supply further structure when those are wanted.

<a id="section-85-5-pull-back-along-any-smooth-map"></a>
## 5. Pull back along any smooth map {#section-87-5-pull-back-along-any-smooth-map}

For smooth $F:M\to N$ and $\omega\in\Omega^k(N)$ define

$$(F^*\omega)_p(v_1,\ldots,v_k)=
\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k).$$

This is alternating and multilinear because the differential is linear. For a function, put $F^*f=f\circ F$. No invertibility or rank assumption on $F$ is needed.

In source and target coordinates, write $F^a$ for its component functions. The chain rule gives $F^*(dy^a)=dF^a$. Hence

$$F^*\!\left(\sum_I\omega_I(y)dy^I\right)
=\sum_I(\omega_I\circ F)\,dF^{i_1}\wedge\cdots\wedge dF^{i_k}.$$

Every coefficient on the right is smooth, proving smoothness of the pullback. This formula includes the derivative factors that are lost if one merely substitutes coordinates into the scalar coefficient functions.

**Proposition 10.2 (Pullback rules).** For composable smooth maps,

$$(G\circ F)^*=F^*\circ G^*,\qquad F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta,
\qquad F^*(df)=d(f\circ F).$$

*Proof.* The composition identity follows by inserting the differential chain rule into each input slot. For the wedge identity, insert the same linear map into every input in the shuffle definition; each term is exactly the corresponding term of the wedge of the two pullbacks. The function-differential identity is the ordinary chain rule evaluated on one tangent vector. ∎

If $dF_p$ has rank less than $k$, then $(F^*\omega)_p=0$, since all its input images lie in a space of dimension below $k$ and are dependent. A nonzero form can therefore pull back to zero. If $F$ is a diffeomorphism, pullback is an isomorphism with inverse $(F^{-1})^*$ by the composition rule.

<a id="section-110-6-insert-a-field-into-a-form"></a>
## 6. Insert a field into a form {#section-112-6-insert-a-field-into-a-form}

For a field $X$ and a $k$-form with $k\ge1$, its contraction is

$$(\iota_X\omega)(v_1,\ldots,v_{k-1})=\omega(X,v_1,\ldots,v_{k-1}).$$

Set $\iota_Xf=0$ in degree zero. The result is smooth in local coordinates. On a basis form it is

$$\iota_X(dx^{i_1}\wedge\cdots\wedge dx^{i_k})
=\sum_{j=1}^k(-1)^{j-1}X^{i_j}
 dx^{i_1}\wedge\cdots\widehat{dx^{i_j}}\cdots\wedge dx^{i_k}.$$

Expanding the determinant in its first input column proves this expression. In particular $\iota_X^2\omega=0$, because its value would insert the same vector into two alternating slots.

Contraction is a graded derivation of degree minus one:

$$\iota_X(\alpha\wedge\beta)=(\iota_X\alpha)\wedge\beta+(-1)^p\alpha\wedge\iota_X\beta,
\qquad \deg\alpha=p.$$

To prove it, group the wedge shuffle terms according to whether the inserted first input $X$ is assigned to the alpha block or the beta block. In the first case it produces the first displayed product. In the second it crosses the $p$ alpha positions, contributing $(-1)^p$, and produces the second. These two groups exhaust the shuffles. The identity also holds in degree zero, where contraction of a scalar is zero.

<a id="section-131-7-worked-examples"></a>
## 7. Worked examples {#section-133-7-worked-examples}

<a id="section-133-worked-example-10-3-polar-coordinates-transform-the-cov"></a>
### Worked example 10.3 — Polar coordinates transform the covectors too {#section-135-worked-example-10-3-polar-coordinates-transform-the-cov}

On the chart $r>0$, $-\pi/2<\theta<\pi/2$, let $F(r,\theta)=(r\cos\theta,r\sin\theta)$. It is a diffeomorphism onto the half-plane $x>0$. Pullback gives

$$F^*dx=\cos\theta\,dr-r\sin\theta\,d\theta,
\qquad F^*dy=\sin\theta\,dr+r\cos\theta\,d\theta.$$

Wedging and cancelling the repeated-coordinate terms gives $F^*(dx\wedge dy)=r\,dr\wedge d\theta$. The radius factor is the determinant, not an optional correction added to the scalar coefficient.

For the one-form $\alpha=-y\,dx+x\,dy$, substitution with these differential factors gives $F^*\alpha=r^2d\theta$. Thus on this angle chart the form $\alpha/(x^2+y^2)$ becomes $d\theta$. The original formula defines a smooth one-form on the entire punctured plane, even though this particular angle chart does not. No claim that a global real angle exists has been made; periods and exactness are later questions.

<a id="section-144-worked-example-10-4-a-square-map-collapses-a-two-form-a"></a>
### Worked example 10.4 — A square map collapses a two-form at one point {#section-146-worked-example-10-4-a-square-map-collapses-a-two-form-a}

For $F(u,v)=(u^2-v^2,2uv)$,

$$F^*dx=2u\,du-2v\,dv,\qquad F^*dy=2v\,du+2u\,dv.$$

Therefore $F^*(dx\wedge dy)=4(u^2+v^2)du\wedge dv$. At the origin the differential is zero, so the pulled-back two-form vanishes there although the target form never vanishes. Away from the origin its coefficient is positive. Directly, the Jacobian determinant is the same $4(u^2+v^2)$, agreeing with the top-form rule.

A second calculation gives $F^*(x\,dy-y\,dx)=2(u^2+v^2)(u\,dv-v\,du)$. Substitution into $x,y$ alone would miss the factors from $dx,dy$ and give the wrong degree and coefficients. These are exact pullback identities, without a conclusion about global injectivity of the map.

<a id="section-154-worked-example-10-5-a-nonzero-ambient-covector-can-vani"></a>
### Worked example 10.5 — A nonzero ambient covector can vanish on a surface {#section-156-worked-example-10-5-a-nonzero-ambient-covector-can-vani}

Let $j:S^2\hookrightarrow\mathbb R^3$ be inclusion and $\alpha=j^*(dz)$. At $p=(x,y,z)$ it acts on a tangent vector by $\alpha_p(v)=v_z$. At either pole the tangent plane is horizontal, so this restricted covector vanishes.

At any other point, take $v=e_z-zp$. It is tangent because $p\cdot v=z-z\|p\|^2=0$, and $\alpha_p(v)=1-z^2>0$. Thus these poles are exactly its zeroes. The ambient form $dz$ is nowhere zero, but its restriction is not. Pullback measures only directions in the image of the differential; it need not preserve nonvanishing of a one-form even when the map is an embedding.

<a id="section-160-restricting-points-and-pulling-back-inputs"></a>
## Restricting points and pulling back inputs {#section-162-restricting-points-and-pulling-back-inputs}

For $F(x,y)=(x,0)$ on the plane, the pullbacks of $dx$, $dy$ and $dx\wedge dy$ are respectively $dx$, zero and zero. The last identity is a rank effect: every input vector is sent into a single line, so an alternating two-form has no independent pair left to measure.

The ambient two-form is still nonzero at points of that line as a covector on the full two-dimensional tangent plane. Its zero pullback does not assert that the original form vanished at those base points. Likewise inclusion of the line into the plane pulls every two-form back to zero because a one-dimensional manifold has no nonzero two-forms. Restricting a bundle section to selected base points and pulling its tangent inputs back along a map are therefore different operations. Substituting coordinates only into the scalar coefficient misses exactly this change of input spaces, which can erase an otherwise nonzero measurement.

<a id="section-166-8-exercises"></a>
## 8. Exercises {#section-168-8-exercises}

### Exercise 10.1 {#smooth-manifolds-forms-ex-1}

In new plane coordinates $u=2x$, $v=3y$, express $x\,dx+y\,dy$ using $du,dv$.

<details><summary>Hint 1</summary>
Transform both the coefficient functions and their covectors.
</details>
<details><summary>Hint 2</summary>
Use $x=u/2$, $dx=du/2$, and the analogous formulas for $y$.
</details>
<details><summary>Full solution</summary>
The expression is $(u/4)du+(v/9)dv$. Each coordinate contributes one factor from its scalar coefficient and another from its differential. The inverse-transpose coordinate rule gives the same answer. Replacing only $x,y$ in the original coefficients would miss one factor in each term and would not describe the same covector field.
</details>

### Exercise 10.2 {#smooth-manifolds-forms-ex-2}

Compute $(dx+2dy)\wedge(3dx-dy)$ and evaluate it on the ordered coordinate basis and its reversal.

<details><summary>Hint 1</summary>
Repeated factors vanish and $dy\wedge dx=-dx\wedge dy$.
</details>
<details><summary>Hint 2</summary>
The two cross terms contribute minus one and minus six.
</details>
<details><summary>Full solution</summary>
Expansion gives $-dx\wedge dy+6dy\wedge dx=-7dx\wedge dy$. Its value on $(\partial_x,\partial_y)$ is minus seven and on $(\partial_y,\partial_x)$ is seven. Alternation records the ordered pair, while the scalar coefficient is the determinant of the two covector coefficient rows. It is not an ordinary symmetric product of one-forms.
</details>

### Exercise 10.3 {#smooth-manifolds-forms-ex-3}

Why does every odd-degree form wedge with itself to zero? Give an even-degree counterexample in dimension four.

<details><summary>Hint 1</summary>
Use graded commutativity and the fact that two is nonzero over the reals.
</details>
<details><summary>Hint 2</summary>
Try $\omega=dx^1\wedge dx^2+dx^3\wedge dx^4$.
</details>
<details><summary>Full solution</summary>
For odd degree $p$, $\alpha\wedge\alpha=(-1)^{p^2}\alpha\wedge\alpha=-\alpha\wedge\alpha$, so it is zero over the reals. For the suggested two-form, its two self-block products vanish by repeated factors, while the two cross products have equal sign because moving a degree-two block past another contributes $(-1)^4=1$. Thus $\omega\wedge\omega=2dx^1\wedge dx^2\wedge dx^3\wedge dx^4\ne0$.
</details>

### Exercise 10.4 {#smooth-manifolds-forms-ex-4}

For $\gamma(t)=(t,t^2)$, calculate $\gamma^*(y\,dx+x\,dy)$ and $\gamma^*(dx\wedge dy)$.

<details><summary>Hint 1</summary>
Pull back $dx$ to $dt$ and $dy$ to $2t\,dt$.
</details>
<details><summary>Hint 2</summary>
Two one-forms on a line have a repeated differential factor in their wedge.
</details>
<details><summary>Full solution</summary>
The one-form pulls back to $t^2dt+t(2t\,dt)=3t^2dt$. The two-form pulls back to $dt\wedge2t\,dt=0$. The latter also follows from rank: the curve differential has image of dimension at most one. A nonzero area form can vanish under every such curve pullback without itself being zero on the plane.
</details>

### Exercise 10.5 {#smooth-manifolds-forms-ex-5}

Describe pullback by a constant map in degree zero and in positive degree.

<details><summary>Hint 1</summary>
The differential of a constant map is zero.
</details>
<details><summary>Hint 2</summary>
A function pulls back by composition rather than by insertion of vectors.
</details>
<details><summary>Full solution</summary>
Every positive-degree form pulls back to zero because every input is mapped by the zero differential to a zero vector, and multilinearity kills the value. A function $f$ pulls back to the constant value $f(q)$ at the chosen target point $q$, which need not be zero. Degree zero must therefore be included explicitly in the pullback convention rather than treated as a positive-degree special case.
</details>

### Exercise 10.6 {#smooth-manifolds-forms-ex-6}

Let $T(u,v)=(v,u)$. Compute $T^*(dx\wedge dy)$ and explain why preservation of Euclidean lengths does not imply preservation of this form.

<details><summary>Hint 1</summary>
The two pulled-back covectors occur in reversed order.
</details>
<details><summary>Hint 2</summary>
The derivative is orthogonal with determinant minus one.
</details>
<details><summary>Full solution</summary>
The pullback is $dv\wedge du=-du\wedge dv$. This coordinate swap preserves the Euclidean metric but reverses orientation, giving the negative determinant factor. A top-degree alternating form measures ordered area, not an unsigned norm. There is no conflict between preserving all lengths and negating the chosen area form.
</details>

### Exercise 10.7 {#smooth-manifolds-forms-ex-7}

Contract $dx\wedge dy\wedge dz$ with $X=x\partial_x+y\partial_y+z\partial_z$, and prove a second contraction with the same field is zero.

<details><summary>Hint 1</summary>
Expand the determinant in its first input slot.
</details>
<details><summary>Hint 2</summary>
A repeated inserted vector makes an alternating form vanish.
</details>
<details><summary>Full solution</summary>
The first contraction is $x\,dy\wedge dz-y\,dx\wedge dz+z\,dx\wedge dy$. A second contraction evaluates the original three-form on $(X,X,v)$ and hence is zero for every remaining vector $v$. This gives a conceptual proof independent of coordinate cancellation, while the displayed expression verifies the individual signs.
</details>

### Exercise 10.8 {#smooth-manifolds-forms-ex-8}

On the unit circle show that the restriction of $x\,dy-y\,dx$ is a nowhere-zero one-form dual to the frame $e=(-y,x)$.

<details><summary>Hint 1</summary>
Evaluate on the displayed tangent vector at each point.
</details>
<details><summary>Hint 2</summary>
A nonzero vector spans a one-dimensional tangent space.
</details>
<details><summary>Full solution</summary>
The value is $x(x)-y(-y)=x^2+y^2=1$ at every circle point. Thus the restriction is the dual coframe to the nonvanishing tangent field. It is smooth by pullback of a smooth ambient form and nowhere zero because its value on $e$ never vanishes. This global one-form does not require a global real angle function; local angle descriptions agree as covectors on overlaps.
</details>

### Exercise 10.9 {#smooth-manifolds-forms-ex-9}

For a zero-dimensional manifold, describe zero-forms and positive-degree forms. Why is this consistent with the dimension formula for alternating forms?

<details><summary>Hint 1</summary>
Every tangent space is the zero vector space and every point has a singleton chart neighborhood.
</details>
<details><summary>Hint 2</summary>
The empty input list has scalar-valued measurements, but every positive list consists of zero vectors.
</details>
<details><summary>Full solution</summary>
The manifold is discrete, so any real function is smooth and is a zero-form. A positive-degree multilinear alternating map on a zero-dimensional tangent space is zero, giving only zero positive-degree forms. This agrees with $\binom00=1$ in degree zero and with zero alternating-space dimension in positive degree. The degree-zero convention is essential even when there are no tangent directions.
</details>

### Exercise 10.10 {#smooth-manifolds-forms-ex-10}

If a one-form pulls back to zero along every smooth curve, prove it is zero. Why does the same criterion fail for two-forms?

<details><summary>Hint 1</summary>
Every tangent vector at every point is the velocity of a smooth curve.
</details>
<details><summary>Hint 2</summary>
Every curve differential has rank at most one.
</details>
<details><summary>Full solution</summary>
Given $v\in T_pM$, choose a curve $\gamma$ through $p$ with $\dot\gamma(0)=v$. The zero pullback gives $0=(\gamma^*\alpha)_0(\partial_t)=\alpha_p(v)$. Since every point and vector were arbitrary, $\alpha=0$. For a two-form, every curve pullback vanishes by rank regardless of the form. The nonzero plane form $dx\wedge dy$ is a counterexample. To detect a $k$-linear measurement, the probing map must have enough independent tangent directions.
</details>

<a id="section-308-9-summary-and-continuation"></a>
## 9. Summary and continuation {#section-310-9-summary-and-continuation}

Covectors are dual tangent measurements and transform by inverse transpose. Alternating forms have determinant bases, while shuffle multiplication gives wedge associativity and graded commutativity with explicit normalization. These spaces form smooth bundles without a metric or orientation. Pullback inserts differentials into every slot, preserves wedge and reverses composition order; rank loss can make a nonzero form vanish. Contraction inserts a field and obeys its signed product rule.

The next chapter constructs the exterior derivative in all degrees, proves its coordinate independence and $d^2=0$, and relates it to these pullback and wedge operations. Integral and cohomological conclusions will wait for those additional constructions and their hypotheses.

*Source provenance: original expanded Euler L4 treatment of the form-algebra scope in Quarto Topology chapter 18. That companion source, its examples and its provenance remain in place. The actual tangent, bundle and submanifold chapters supply the local foundations. Comparison references are Lee, Introduction to Smooth Manifolds, and Tu, An Introduction to Manifolds. CC BY-SA 4.0. Draft.*
