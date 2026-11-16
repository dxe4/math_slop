
# Rational Maps and Birational Geometry

A rational map is allowed to start on a dense open subset, but it must still be a genuine morphism there. Function fields encode dominant rational maps, and isomorphic function fields detect an isomorphism after deleting suitable closed subsets. We prove those statements and work through examples where the removed subset changes the global geometry substantially.

All varieties here are irreducible reduced quasiprojective algebraic varieties over the fixed algebraically closed field. Preparation is affine morphisms, localization, projective charts and closed diagonals from Chapters 1–3. Finite-type field algebra is prepared in Commutative Algebra. No resolution-of-singularities theorem is assumed by the elementary blowup construction below.

## 1. Representatives and equality

A rational map $f:X\dashrightarrow Y$ is an equivalence class of morphisms $f_U:U\to Y$ with $U$ a nonempty open subset of $X$. Two representatives are equivalent if they agree on a nonempty open subset of their common domain. Irreducibility makes any finite intersection of nonempty opens nonempty, so this relation is transitive: intersect the two agreement opens and use equality there. Reflexivity and symmetry are immediate.

For our targets, if two morphisms on an irreducible domain agree on a dense open, they agree everywhere on that domain. Their equalizer is the inverse image of the closed diagonal of $Y$, hence closed, and contains the dense agreement set. Quasiprojective targets have closed diagonal by restriction from projective space and its open subsets. This proves the uniqueness principle used when comparing representatives; separatedness is doing real work.

A representative is dominant when its image is dense in $Y$. Restricting a dominant morphism to a nonempty source open preserves dominance. Indeed, if the restricted image lay in a proper closed target subset, its closed inverse image would contain that dense source open and therefore the whole original domain, contradicting dominance. Thus dominance depends only on the rational-map class.

Composition requires attention to domains. If $g$ is represented on $V\subseteq Y$, the expression $g\circ f$ is defined on $U\cap f^{-1}(V)$. A dominant $f$ makes this a nonempty open, so it gives a rational map independent of representatives. Without dominance it may be empty: a constant map can land entirely in the omitted subset. We do not declare every formal pair of rational maps composable without checking this condition.

## 2. The function field from rational functions

A rational function is a rational map to the affine line, or equivalently a regular scalar function on some nonempty open, modulo agreement after restriction. Sum and product are formed on common nonempty domains. A nonzero rational function is nonzero on a nonempty open of its domain, because its zero set is closed and it is not identically zero. Its reciprocal is regular on that open. These operations make the rational functions a field $k(X)$.

Regular functions on a nonempty open inject into this field. If one becomes zero after dense restriction, its closed zero set contains a dense subset, so it is zero already. In particular coordinate rings of nonempty affine opens are domains. For affine $X$ with coordinate domain $A$, every fraction in $\operatorname{Frac}(A)$ is regular on the nonempty principal open of its denominator. Conversely a rational function has a local quotient description near some point of its domain and therefore agrees there with a fraction of $A$. This proves

$$k(X)=\operatorname{Frac}(k[X])\qquad(X\text{ affine}).$$

Every nonempty affine open $U\subseteq X$ has the same function field: a rational representative on $X$ intersects $U$, and a representative on $U$ is already defined on an open of $X$. These assignments are inverse after restricting domains. Thus projective varieties have function fields although their global regular functions may all be constant. The field is not the fraction field of the global-section ring in that situation.

For example $k(\mathbb P^1)=k(t)$ from one affine chart, while $\Gamma(\mathbb P^1,\mathcal O)=k$ by Chapter 3. A rational coordinate has a pole at the missing point. Confusing global regular functions with rational functions would collapse this simplest projective curve to the ground field.

## 3. Dominant maps reverse to field embeddings

A dominant rational map $f:X\dashrightarrow Y$ pulls rational functions back. For a target representative on $V$, dominance makes its inverse-image domain nonempty. Equivalent representatives agree after a further nonempty restriction, so the result is well-defined. A nonzero target function remains nonzero: otherwise its zero set would contain a dense image. Pullback is therefore an injective $k$-homomorphism $k(Y)\hookrightarrow k(X)$.

Conversely, let $\varphi:k(Y)\hookrightarrow k(X)$ be a $k$-field embedding. Choose a nonempty affine open $V$ of $Y$, with finitely generated coordinate algebra $B$. Send a finite set of algebra generators through $\varphi$ and represent their rational functions on one common nonempty open of $X$. They are regular there after restricting. Every relation in $B$ remains zero under the field homomorphism, so their values define a morphism to $V$ by the affine correspondence. It is dominant: on a nonempty affine source subopen, the induced map from $B$ is injective, and the affine kernel criterion says its image is dense in $V$, hence dense in $Y$.

The constructed rational map is unique. Given two candidates, dominance allows both to be restricted to the inverse image of one target affine open. The coordinate generators there have the same rational pullbacks; finitely many further restrictions make all equal as regular functions. The representatives then agree. The construction is independent of the chosen affine open for the same reason.

Thus dominant rational maps correspond contravariantly to embeddings of their finitely generated function fields. Every finitely generated field extension of $k$ is obtained this way: choose finitely many field generators, take the $k$-algebra they generate, and realize that finite-type domain as an affine variety. Its fraction field is the original field. Composition and identity are respected because pullback of functions already has those laws on actual common domains.

## 4. Birational means isomorphic dense opens

A dominant rational map is birational if it has a dominant rational inverse. Under the field correspondence, this is equivalent to its field embedding being an isomorphism. The inverse field map constructs the inverse rational map, and equality of their composite pullbacks forces their composites to be rational identities.

We also prove the geometric open-set formulation. Let representatives $f:U\to Y$ and $g:V\to X$ be rational inverses. Put $U_1=U\cap f^{-1}(V)$ and $V_1=V\cap g^{-1}(U)$. They are nonempty opens by dominance. The rational inverse equations hold everywhere on these domains by the closed-diagonal uniqueness principle. Now set

$$U'=U_1\cap f^{-1}(V_1),\qquad
V'=V_1\cap g^{-1}(U_1).$$

These too are nonempty opens. For $x\in U'$, the value $f(x)$ lies in $V_1$, and $g(f(x))=x\in U_1$, so it lies in $V'$. Conversely for $y\in V'$, its image under $g$ lies in $U'$ by the other inverse equation. The restricted maps are inverse morphisms. Thus birational varieties contain isomorphic nonempty opens. An isomorphism of such opens conversely defines rational inverse maps, proving both directions.

### Worked example 1: the cusp is birational to the line

The map $t\mapsto(t^2,t^3)$ identifies the function field of the cusp with $k(t)$, since $t=t^3/t^2$ in the fraction field. Away from the origin its inverse is the regular quotient $y/x$. Restricting the line to $t\ne0$ and the cusp to $x\ne0$ gives actual inverse morphisms. The whole map is not an isomorphism, because its coordinate-ring inclusion misses $t$. Birationality records the isomorphism after removing the exceptional point, not an assertion that the singular coordinate ring was already equal to its normalization.

### Worked example 2: Frobenius has a different field behavior

In characteristic $p$, the bijective map $t\mapsto t^p$ induces the proper subfield inclusion $k(t^p)\subset k(t)$. The element $t$ is not in the smaller field: a rational expression in $t^p$ has a zero or pole at $t=0$ of order divisible by $p$, whereas $t$ has order one. The extension has degree $p$, since $t$ satisfies $Z^p-t^p$ over the smaller field and the powers from zero through $p-1$ are linearly independent by grouping polynomial exponents modulo $p$. Thus pointwise bijectivity does not even imply birationality.

A dominant map between varieties of equal transcendence degree gives a finite algebraic extension of function fields, because the extension is finitely generated and algebraic. This is called generically finite. It need not be a finite morphism on the original whole spaces: the punctured-line inclusion has identical function fields but does not make $k[t,t^{-1}]$ integral over $k[t]$. The polynomial-order argument at zero shows $t^{-1}$ cannot satisfy a monic equation over that ring.

## 5. The plane Cremona map and its domains

Consider

$$F:\mathbb P^2\dashrightarrow\mathbb P^2,
\qquad[x:y:z]\longmapsto[yz:xz:xy].$$

All three forms have degree two. Their common zeros are precisely the three coordinate points: if two coordinates are nonzero, their product is a nonzero output; if only one is nonzero, every product vanishes. On $U=\{xyz\ne0\}$ the image stays in $U$, and applying the same forms twice gives

$$[x^2yz:xy^2z:xyz^2]=[x:y:z].$$

Therefore $F$ is a birational involution and $U$ is an explicit isomorphism domain. The displayed open is smaller than the entire domain of the rational representative, which includes each coordinate line with its two coordinate endpoints removed.

Each such line is contracted. For example a point $[0:y:z]$ with $yz\ne0$ maps to $[1:0:0]$. This already prevents that representative from being an isomorphism on its full domain. A birational inverse is not a globally defined inverse at every point of every representative.

There is no morphism extension of $F$ across $P=[1:0:0]$. To prove this algebraically, choose distinct nonzero scalars $a$ and consider the morphism $\alpha_a(t)=[1:t:at]$ from the affine line. For $t\ne0$,

$$F(\alpha_a(t))=[at:a:1].$$

The right side is a morphism even at zero and has value $[0:a:1]$ there. If an extension existed on a neighborhood of $P$, its composite with each curve would agree with this morphism on a dense open of that curve and therefore at zero by closed-diagonal uniqueness. Two different choices of $a$ force two different values at the same point $P$, contradiction. This proof uses actual morphisms and uniqueness; it does not appeal to an analytic limit or a drawing of approach directions.

## 6. Blowing up the affine origin: charts and exceptional fiber

Define the closed algebraic subset

$$B=\{((x,y),[u:v])\in\mathbb A^2\times\mathbb P^1:xv=yu\}$$

and let $\pi:B\to\mathbb A^2$ be projection. On $u\ne0$, put $t=v/u$; the equation becomes $y=xt$, so this chart is the affine plane with coordinates $(x,t)$. On $v\ne0$, put $s=u/v$; the equation becomes $x=ys$, so the chart is the affine plane with coordinates $(y,s)$. On the overlap the transitions are $s=1/t,y=xt$, with inverse $t=1/s,x=ys$. These are regular on the indicated principal opens, proving the claimed chart structure.

Away from the origin, the equation determines $[u:v]=[x:y]$. It supplies a morphism inverse to projection there, because at least one of the two coordinate-chart descriptions is regular. The fiber above the origin imposes no equation on $[u:v]$ and is the projective line $E$. Thus $\pi$ is birational but not an isomorphism: its exceptional fiber has more than one point. Projection is closed by the projective-factor theorem, since $B$ is closed in that product.

The two affine charts are irreducible and their overlap is nonempty, so their union is irreducible. To justify this last step, nonempty opens in either chart meet the common nonempty open by irreducibility; the intersection argument then shows any two nonempty opens of the union intersect. Its function field is $k(x,t)=k(x,y)$ using $y=xt$ on a nonempty chart, agreeing with birationality.

### Worked example 3: the exceptional line remembers direction

A line through the origin with equation $y=ax$ lifts away from the origin into the first chart as $t=a$. Its closure in that chart is the affine line with free coordinate $x$ and fixed $t=a$, meeting $E$ at $(0,a)$. The vertical line instead lifts in the second chart with $s=0$. These give different points of the exceptional projective line, indexed by the original directions. The construction distinguishes them although projection sends all of them to the origin.

The space $B$ is not affine: its closed subset $E$ would then be affine, contradicting the proved nonaffineness of the projective line. It is not projective over $k$ either, because the pulled-back coordinate $x$ is a nonconstant global regular function on this irreducible space, impossible on a projective variety. It is a closed subset of an affine-times-projective product, which is a different condition. The term blowup here names this explicit charted construction; no general universal property or resolution theorem has been assumed without proof.

## 7. A family separates field degree from fiber cardinality

Consider the map of affine lines $t\mapsto t^m$ for a positive integer $m$. The associated field extension is $k(t)/k(t^m)$ of degree exactly $m$. The element $t$ satisfies a degree-$m$ equation over the smaller field, giving an upper bound. For the lower bound the powers $1,t,\ldots,t^{m-1}$ are linearly independent over $k(t^m)$: clear their rational denominators to obtain a polynomial relation, then group exponents modulo $m$. Different remainder classes have no monomials in common, so every coefficient polynomial must be zero. This proves the degree rather than guessing it from the shape of the displayed equation.

If the field characteristic does not divide $m$, the fiber over a nonzero scalar $a$ has exactly $m$ points. Algebraic closure splits $T^m-a$, and its derivative $mT^{m-1}$ is nonzero at every root, so the roots are distinct. Over zero there is only one point, even though the defining polynomial is $T^m$ and the field degree remains $m$. Set-theoretic fiber size therefore already needs a choice of base point before it can be compared with the generic field degree.

In characteristic $p$, write $m=p^r m_0$ with $p$ not dividing $m_0$. For nonzero $a$, choose its unique $p^r$th root $b$. Then

$$T^m-a=(T^{m_0}-b)^{p^r}.$$

The inside polynomial has $m_0$ distinct nonzero roots by the same derivative argument. Thus the fiber has $m_0$ distinct points, each occurring with polynomial multiplicity $p^r$, while the full field degree is still $m$. This exact calculation supplies the characteristic and multiplicity conditions that a general claim equating degree with number of points would otherwise omit. We are computing this explicit family; a general finite-morphism degree theorem will require its own local hypotheses.

There is also a birational invariant visible before the next chapter's dimension theorem. A field isomorphism preserves algebraically independent sets and maximal transcendence degree, so birational varieties have the same transcendence degree over the ground field. A variety birational to affine space is called rational, with function field a purely transcendental extension. The explicit blowup above is rational because its function field is $k(x,y)$. A bijection of classical point sets does not establish that field statement, as the Frobenius example demonstrates. The distinction directs a birational problem toward field generators and their relations rather than a cardinality comparison.

## Exercises

### AG04-01. Equalizer uniqueness

Prove that two morphisms from an irreducible variety to a quasiprojective variety agreeing on a nonempty open agree everywhere on their common domain.

**Hint 1.** The target diagonal is closed.

**Hint 2.** The agreement set is closed and contains a dense open.

<details><summary>Full solution</summary>

Pair the two morphisms into the target product and take the inverse image of its diagonal. This is closed in their common open domain. That domain is irreducible, so its nonempty agreement open is dense. Its closed equalizer is therefore the whole domain. This is the separated-target input needed for the extension arguments; pointwise agreement on an arbitrary nondense subset would not suffice.

</details>

### AG04-02. An undefined composition

Give a rational-map composition whose displayed middle-domain preimage is empty, and explain why dominance prevents this problem.

**Hint 1.** Use a constant map with value zero.

**Hint 2.** Compose formally with the reciprocal map defined on the punctured line.

<details><summary>Full solution</summary>

The constant map to zero followed by $y\mapsto1/y$ has no source point where the second expression is defined. It therefore supplies no rational representative by composition. If the first map is dominant, its dense image meets every nonempty target open, making that inverse image a nonempty open and a valid rational domain. This is a condition on the middle domain, not a license to assign a value to an undefined fraction.

</details>

### AG04-03. Projective function field

Compute the function field and global regular-function ring of the projective line, and explain their difference.

**Hint 1.** Use one affine chart for the field.

**Hint 2.** Global regularity must also hold in the chart at infinity.

<details><summary>Full solution</summary>

The function field is $k(t)$ because the affine chart is a nonempty open with coordinate ring $k[t]$. The global ring is $k$ by the projective constancy theorem or the two-chart Laurent calculation. The element $t$ is a rational function with a pole at infinity and is therefore absent from the global regular ring. Taking fractions of that latter ring would not recover the function field.

</details>

### AG04-04. Construct a dominant rational map

A field embedding sends the coordinate generator of $k(y)$ to $(x+1)/x$ in $k(x)$. Construct the rational map and one domain.

**Hint 1.** Use the denominator's nonvanishing open.

**Hint 2.** The nonconstant fraction has no polynomial relation over $k$ that would kill the embedding.

<details><summary>Full solution</summary>

On $D(x)\subseteq\mathbb A^1$, define $f(x)=(x+1)/x$. This is regular and induces the stated field embedding. It is dominant because a nonzero polynomial in its value cannot vanish identically: substituting and clearing denominators would make a nonconstant rational function algebraic over the algebraically closed constant field. More explicitly its inverse rational expression is $x=1/(y-1)$, so it is birational and in particular dominant.

</details>

### AG04-05. A cusp inverse on an open

Give explicit isomorphic opens of the line and the cusp and verify both composites.

**Hint 1.** Delete $t=0$ on the line and $x=0$ on the cusp.

**Hint 2.** The inverse is $y/x$.

<details><summary>Full solution</summary>

The forward map is $t\mapsto(t^2,t^3)$ on $D(t)$. On the cusp's $D(x)$, set $t=y/x$; the cusp equation gives $t^2=x,t^3=y$. Conversely the quotient of the two forward coordinates is $t$. The denominators are nonzero on those domains, so both maps are morphisms and the composites are identities. The missing regular inverse at the origin remains a global obstruction.

</details>

### AG04-06. Frobenius is not birational

Prove that $t$ does not belong to $k(t^p)$ in characteristic $p$.

**Hint 1.** Compare the order at zero of a rational expression in $t^p$.

**Hint 2.** Numerator and denominator orders are multiples of $p$.

<details><summary>Full solution</summary>

A nonzero polynomial in $t^p$ has least exponent divisible by $p$. The difference of those least exponents for a quotient is still divisible by $p$, even after cancellation. The order of $t$ at zero is one, so equality is impossible. The induced function-field embedding is not onto and the map is not birational despite its pointwise bijectivity over the algebraically closed field.

</details>

### AG04-07. The Cremona involution

Verify the inverse formula on $xyz\ne0$ and list its three base points.

**Hint 1.** Apply the quadratic expressions twice and cancel a common nonzero factor.

**Hint 2.** All pairwise products vanish exactly when at most one coordinate is nonzero.

<details><summary>Full solution</summary>

Double application gives $[x^2yz:xy^2z:xyz^2]$, which is $[x:y:z]$ after cancelling $xyz$. The open is preserved because all original coordinates and their products are nonzero. Common zeros of the three forms are $[1:0:0],[0:1:0],[0:0:1]$. Thus the map is a birational involution with a specified isomorphism open, rather than a morphism defined at those base points.

</details>

### AG04-08. A contracted curve

Compute the image of the line $x=0$ away from its two base points under the Cremona representative.

**Hint 1.** The remaining coordinates $y,z$ are both nonzero.

**Hint 2.** Only the first output product survives.

<details><summary>Full solution</summary>

The image is constantly $[yz:0:0]=[1:0:0]$. There are many distinct source points with this value, so this representative cannot be an isomorphism on its entire domain. Its birational inverse is only required on appropriate dense opens; the contracted curve lies outside the displayed isomorphism open $xyz\ne0$.

</details>

### AG04-09. Exceptional charts

Compute the exceptional fiber in both affine charts of $B$ and identify their overlap.

**Hint 1.** In the first chart the fiber sets $x=0$.

**Hint 2.** In the second it sets $y=0$, with reciprocal direction parameters.

<details><summary>Full solution</summary>

The first fiber chart has free coordinate $t$ and the second free coordinate $s$. On their overlap $s=1/t$, exactly the standard two-chart construction of $\mathbb P^1$. The equation of $B$ imposes no further restriction over the origin. This proves the entire fiber is the projective line, not merely a collection of a few selected directions.

</details>

### AG04-10. Lift a direction

Determine the closure of the lifted line $y=ax$ in the first blowup chart and its exceptional intersection.

**Hint 1.** Away from the origin, divide by $x$.

**Hint 2.** Keep the direction coordinate fixed as the remaining coordinate varies.

<details><summary>Full solution</summary>

The lifted nonzero points satisfy $t=y/x=a$. Their closure in the chart is $t=a$ with arbitrary $x$, because the nonzero values of $x$ are dense in the affine line. It meets $x=0$ at the unique point $(0,a)$. Different slopes give different points, while the vertical direction is supplied by $s=0$ in the other chart.

</details>

### AG04-11. Birational does not mean finite everywhere

Explain why the punctured-line inclusion is birational but is not a finite morphism in the affine module sense.

**Hint 1.** Its function field is unchanged.

**Hint 2.** A finite algebra would make its inverse coordinate integral over $k[t]$.

<details><summary>Full solution</summary>

Both function fields are $k(t)$, so the inclusion is birational. If $k[t,t^{-1}]$ were a finite $k[t]$-module, every element would be integral. A monic equation for $t^{-1}$, after multiplying by its highest denominator power, would give $1$ plus terms divisible by $t$ equal to zero in $k[t]$, impossible at zero. Thus the algebra is not finite. Generic field behavior does not determine that whole-space module condition.

</details>

### AG04-12. Nonaffine and nonprojective

Prove that $B$ is neither affine nor projective over $k$ using its exceptional fiber and its global coordinate function.

**Hint 1.** A closed algebraic subset of an affine set is affine.

**Hint 2.** A projective irreducible variety has only constant global functions.

<details><summary>Full solution</summary>

The closed fiber $E$ is $\mathbb P^1$, which is not affine, so $B$ cannot be affine. Its two overlapping affine-plane charts prove irreducibility, and the function pulled back from the first plane coordinate is globally regular and nonconstant. The projective constancy theorem therefore excludes projectivity. Neither conclusion conflicts with $B$ being closed in $\mathbb A^2\times\mathbb P^1$ or with its projection being closed.

</details>

## Closing summary

Rational maps are morphisms on specified dense domains, with equality and composition governed by irreducibility and the target diagonal. Dominant maps reverse to function-field embeddings; inverse embeddings give isomorphic dense opens. The cusp, Frobenius, Cremona involution and explicit blowup distinguish birationality from point bijectivity, global isomorphism, finiteness, affineness and projectivity. Every exception is visible in an actual field map, domain or fiber.
