var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: linear-maps-isomorphism-rank-nullity
title: "Linear Maps, Isomorphism, and Rank–Nullity"
level: advanced-undergraduate
estimated_minutes: 225
license: CC BY-SA 4.0
---

# Linear Maps, Isomorphism, and Rank–Nullity {#section-1-linear-maps-isomorphism-and-rank-nullity}

Vector spaces become a mathematical subject rather than a catalog of examples when we study the maps that respect their structure. A linear map sends combinations to the same combinations of outputs. Its kernel records directions erased; its image records directions reached. The first isomorphism theorem says these are not separate statistics: after the kernel directions are collapsed, the remaining input space *is* the image, up to linear isomorphism.

This chapter proves that structural statement first and obtains rank–nullity by taking dimensions. The quotient construction from [Sums, Direct Sums, and Quotient Spaces](#/item/book-linear-algebra-structure-proofs?chapter=sums-direct-sums-quotients) is therefore essential, not optional ornament.

After this chapter you should be able to construct a linear map from basis data, prove a rule is well-defined and linear, compute and interpret kernels and images, factor a map through a quotient, and apply rank–nullity without losing the stronger isomorphism behind it.

<a id="section-7-1-linear-maps-preserve-every-finite-combination"></a>
## 1. Linear maps preserve every finite combination {#section-9-1-linear-maps-preserve-every-finite-combination}

**Definition 5.1 (Linear map).** Let $V,W$ be vector spaces over the same field $F$. A function $T:V\\to W$ is **linear** when

$T(u+v)=T(u)+T(v)$ and $T(av)=aT(v)$

for all $u,v \\in V$ and $a \\in F$.

Equivalently,

$T(au+bv)=aT(u)+bT(v)$

for every two-term linear combination. Induction then gives

$T\\left(\\sum_{j=1}^m a_jv_j\\right)=\\sum_{j=1}^m a_jT(v_j)$

for every finite list.

Every linear map sends zero to zero:

$T(0_V)=T(0_F v)=0_F T(v)=0_W$.

It also preserves negatives and subtraction. A rule with $T(0)\\ne 0$ cannot be linear.

<a id="section-31-examples"></a>
### Examples {#section-33-examples}

- Matrix multiplication $x \\to  Ax$ is linear.
- For an integer $d\\ge1$, formal differentiation $D:F_d[x]\\to F_{d-1}[x]$ is linear over $F$.
- Evaluation $E_a:\\mathbb{F}[x]\\to F$, $E_a(p)=p(a)$, is linear.
- The trace $\\operatorname{tr}:M_n(F)\\to F$ is linear.
- For fixed $a$, translation $x \\to  x+a$ is not linear unless $a=0$; it is affine.
- The squaring rule $x \\to  x^2$ is not linear over $R$ because $(x+y)^2$ has a cross term.

The domain, codomain, and field are part of the map. The same formula can define different linear maps with different surjectivity properties. For example, differentiation $D:\\mathbb{R}_3[x]\\to \\mathbb{R}_2[x]$ is onto, while the rule with codomain $\\mathbb{R}_5[x]$ is not.

<a id="section-42-worked-verification-a-discrete-difference-operator"></a>
### Worked verification: a discrete difference operator {#section-44-worked-verification-a-discrete-difference-operator}

**Worked example 5.2 (Linearity of differences).**

Define $\\Delta:\\mathbb{F}^n\\to \\mathbb{F}^{n-1}$ by

$\\Delta(x_1,\\ldots,x_n)=(x_2-x_1,x_3-x_2,\\ldots,x_n-x_{n-1})$.

For vectors $x,y$ and scalars $a,b$, the $j$th output coordinate of $\\Delta(ax+by)$ is

$(ax_{j+1}+by_{j+1})-(ax_j+by_j)$

$=a(x_{j+1}-x_j)+b(y_{j+1}-y_j)$,

the $j$th coordinate of $a \\Delta x+b \\Delta y$. Hence the map is linear. Its kernel consists of constant vectors; its image will soon be shown to be all of $\\mathbb{F}^{n-1}$.

<a id="section-58-2-a-basis-determines-a-linear-map"></a>
## 2. A basis determines a linear map {#section-60-2-a-basis-determines-a-linear-map}

Let $B=(v_1,\\ldots,v_n)$ be a basis of $V$, and choose arbitrary target vectors $w_1,\\ldots,w_n$ in $W$. There is a unique linear map $T:V\\to W$ satisfying $T(v_j)=w_j$.

Define

$T(\\sum a_jv_j)=\\sum a_jw_j$.

Unique basis coordinates make the rule well-defined. The formula immediately proves linearity. Any linear map with the prescribed basis values must obey the same formula, proving uniqueness.

This is why the columns of a matrix are images of basis vectors: specifying those images specifies the map. Chapter 6 will keep track of which bases the resulting matrix uses.

<a id="section-70-a-warning-about-generators-with-relations"></a>
### A warning about generators with relations {#section-72-a-warning-about-generators-with-relations}

Arbitrary values cannot be assigned to a dependent spanning list. Relations must be preserved. If $v_3=v_1+v_2$, then linearity forces $T(v_3)=T(v_1)+T(v_2)$. Basis data are free precisely because a basis has no nontrivial relations.

<a id="section-74-worked-construction-on-polynomials"></a>
### Worked construction on polynomials {#section-76-worked-construction-on-polynomials}

**Worked example 5.3 (A map from polynomial basis data).**

Define $T:\\mathbb{R}_2[x]\\to \\mathbb{R}^2$ by prescribing

$T(1)=(1,0)$, $T(x)=(0,1)$, $T(x^2)=(1,1)$.

For $p=a+bx+cx^2$, linearity forces

$T(p)=a(1,0)+b(0,1)+c(1,1)=(a+c,b+c)$.

There is no further verification needed for existence because $(1,x,x^2)$ is a basis and the basis-extension rule constructed a unique linear map.

<a id="section-88-3-algebra-of-linear-maps"></a>
## 3. Algebra of linear maps {#section-90-3-algebra-of-linear-maps}

The identity map $I_V(v)=v$ and zero map $0(v)=0_W$ are linear. If $T:U\\to V$ and $S:V\\to W$ are linear, their composition $S \\circ T$ is linear:

$S(T(au+bv))=S(aT(u)+bT(v))=aS(Tu)+bS(Tv)$.

For fixed domain and codomain, maps can be added and scaled pointwise:

$(S+T)(v)=S(v)+T(v)$, $(aT)(v)=aT(v)$.

The resulting space is denoted $L(V,W)$ or $Hom_F(V,W)$. If $V$ and $W$ have dimensions $n$ and $m$, then $L(V,W)$ has dimension $mn$: after choosing bases, each map is freely determined by $n$ output vectors, each with $m$ coordinates. Chapter 6 will turn this reasoning into a basis of matrix-unit maps.

An **endomorphism** is a linear map $T:V\\to V$. An invertible endomorphism is an **automorphism**. Composition of endomorphisms is generally not commutative; the order encodes which transformation happens first.

<a id="section-102-4-kernel-and-image-are-structural-records"></a>
## 4. Kernel and image are structural records {#section-104-4-kernel-and-image-are-structural-records}

For $T:V\\to W$, define

$\\operatorname{ker} T=\\{v \\in V:T(v)=0_W\\}$

and

$\\operatorname{im} T=\\{T(v):v \\in V\\}$.

Both are subspaces. If $u,v \\in \\operatorname{ker} T$, then

$T(au+bv)=aT(u)+bT(v)=0$,

so $au+bv$ remains in the kernel. If $y_1=T(v_1)$ and $y_2=T(v_2)$ lie in the image, then

$ay_1+by_2=T(av_1+bv_2)$,

so the image is closed under linear combinations.

The kernel is a subspace of the domain; the image is a subspace of the codomain. Confusing their ambient spaces leads to ill-typed equations.

**Theorem 5.4 (Kernel criterion for injectivity).** **Injectivity criterion.** $T$ is injective exactly when $\\operatorname{ker} T=\\{0\\}$.

If $T$ is injective, $T(v)=0=T(0)$ implies $v=0$. Conversely, if the kernel is zero and $T(u)=T(v)$, then $T(u-v)=0$, so $u-v=0$ and $u=v$.

**Surjectivity criterion.** $T$ is surjective exactly when $\\operatorname{im} T=W$; this is simply the definition rewritten.

The **nullity** of a map with finite-dimensional domain is $\\operatorname{dim} \\operatorname{ker} T$. Its **rank** is $\\operatorname{dim} \\operatorname{im} T$.

<a id="section-132-worked-kernel-and-image-the-difference-operator"></a>
### Worked kernel and image: the difference operator {#section-134-worked-kernel-and-image-the-difference-operator}

**Worked example 5.5 (Discrete antiderivatives and lost constants).**

For $\\Delta:\\mathbb{F}^n\\to \\mathbb{F}^{n-1}$, $\\Delta x=0$ exactly when

$x_2=x_1$, $x_3=x_2$, ..., $x_n=x_{n-1}$.

Thus $\\operatorname{ker} \\Delta=\\operatorname{span}((1,\\ldots,1))$ and has dimension one.

Given any $y=(y_1,\\ldots,y_{n-1})$, define

$x_1=0$, $x_2=y_1$, $x_3=y_1+y_2$, ..., $x_k=\\sum_{j=1}^{k-1}y_j$.

Then $\\Delta x=y$. Hence the map is onto. This construction is a discrete antiderivative; adding a constant vector gives all preimages.

<a id="section-148-5-isomorphisms-preserve-linear-structure"></a>
## 5. Isomorphisms preserve linear structure {#section-150-5-isomorphisms-preserve-linear-structure}

A linear map is an **isomorphism** when it is bijective. If $T:V\\to W$ is a bijective linear map, its set-theoretic inverse is automatically linear. Indeed, for $y_1=T(v_1)$ and $y_2=T(v_2)$,

$T^{-1}(ay_1+by_2)=T^{-1}(T(av_1+bv_2))=av_1+bv_2$.

An isomorphism sends bases to bases, subspaces to subspaces, sums to sums, intersections to intersections, and linear relations to the same relations among images. It does not automatically preserve lengths, angles, polynomial multiplication, or an operator singled out on the space.

In finite dimension, $V$ and $W$ over the same field are isomorphic exactly when their dimensions agree. This classification concerns bare vector spaces.

<a id="section-158-equal-dimensions-collapse-the-one-sided-tests"></a>
### Equal dimensions collapse the one-sided tests {#section-160-equal-dimensions-collapse-the-one-sided-tests}

If $\\operatorname{dim} V=\\operatorname{dim} W<\\infty$ and $T:V\\to W$ is linear, then the following are equivalent:

- $T$ is injective;
- $T$ is surjective;
- $T$ is an isomorphism.

One proof uses bases: an injective map sends a basis of $V$ to an independent list of full length in $W$, hence a basis and therefore spans. A surjective map sends a basis to a spanning list; after deletion it contains a basis of $W$ of the same length, so no deletion was possible and the kernel must be zero. Rank–nullity will make this equivalence a one-line dimension argument.

Equal dimension is essential. The inclusion $R\\to \\mathbb{R}^2$, $x \\to  (x,0)$, is injective but not onto. The projection $\\mathbb{R}^2\\to R$, $(x,y)\\to x$, is onto but not injective.

<a id="section-170-6-the-first-isomorphism-theorem"></a>
## 6. The first isomorphism theorem {#section-172-6-the-first-isomorphism-theorem}

The kernel records exactly which inputs a map cannot distinguish:

$T(v)=T(w)$ exactly when $T(v-w)=0$, exactly when $v-w \\in \\operatorname{ker} T$.

Thus the fibers of $T$ are cosets of its kernel. This observation suggests collapsing the kernel before mapping to the image.

**Theorem 5.2 (First isomorphism).** For every linear map $T:V\\to W$, the rule

$\\overline{T}:V/\\operatorname{ker} T \\to  \\operatorname{im} T$,

$\\overline{T}(v+\\operatorname{ker} T)=T(v)$

is a well-defined linear isomorphism.

<a id="section-186-proof"></a>
### Proof {#section-188-proof}

**Well-defined.** If $v+\\operatorname{ker} T=w+\\operatorname{ker} T$, then $v-w \\in \\operatorname{ker} T$, so $T(v-w)=0$ and $T(v)=T(w)$.

**Linear.** Quotient operations give

$\\overline{T}(a(v+K)+b(w+K))=\\overline{T}((av+bw)+K)$

$=T(av+bw)=aT(v)+bT(w)$,

where $K=\\operatorname{ker} T$.

**Surjective onto the stated codomain.** Every element of $\\operatorname{im} T$ has form $T(v)$, which is the image of $v+K$.

**Injective.** If $\\overline{T}(v+K)=0$, then $T(v)=0$, so $v \\in K$ and $v+K=K$, quotient zero.

Therefore $\\overline{T}$ is an isomorphism.

The theorem is often written

$V/\\operatorname{ker} T \\simeq \\operatorname{im} T$.

It says: collapse precisely the invisible input directions, and what remains is structurally identical to the reached output space.

<a id="section-210-worked-factorization"></a>
### Worked factorization {#section-212-worked-factorization}

Let $T:\\mathbb{R}^3\\to \\mathbb{R}^2$ be

$T(x,y,z)=(x-y,y-z)$.

The kernel satisfies $x=y=z$, so $K=\\operatorname{span}((1,1,1))$. The induced quotient map sends

$(x,y,z)+K \\to  (x-y,y-z)$.

It is onto: for $(a,b)$, choose $(x,y,z)=(a,0,-b)$. Thus $\\mathbb{R}^3/K$ is isomorphic to $\\mathbb{R}^2$. Choosing the complement $\\operatorname{span}(e_1,e_3)$ provides one representative model, but the quotient factorization itself made no complement choice.

<a id="section-222-7-rank-nullity-is-the-dimension-shadow"></a>
## 7. Rank–nullity is the dimension shadow {#section-224-7-rank-nullity-is-the-dimension-shadow}

Assume $V$ is finite-dimensional. The first isomorphism theorem and quotient dimension formula give

$\\operatorname{dim} \\operatorname{im} T=\\operatorname{dim}(V/\\operatorname{ker} T)=\\operatorname{dim} V-\\operatorname{dim} \\operatorname{ker} T$.

Therefore:

**Theorem 5.3 (Rank–nullity).** For $T:V\\to W$ with finite-dimensional $V$,

$\\operatorname{rank} T+\\operatorname{nullity} T=\\operatorname{dim} V$.

Each input degree of freedom is accounted for exactly once: it is either lost in the kernel or survives in the quotient/image. The language “either” is dimensional bookkeeping, not a claim that individual basis-free vectors belong exclusively to kernel or image; those live in different ambient spaces.

<a id="section-236-proof-directly-from-an-adapted-basis"></a>
### Proof directly from an adapted basis {#section-238-proof-directly-from-an-adapted-basis}

Choose a basis $(k_1,\\ldots,k_r)$ of $\\operatorname{ker} T$ and extend it to

$(k_1,\\ldots,k_r,v_1,\\ldots,v_s)$ of $V$.

Then $(Tv_1,\\ldots,Tv_s)$ is a basis of $\\operatorname{im} T$. It spans because the $k_i$ map to zero. If $\\sum a_jTv_j=0$, then $\\sum a_jv_j$ lies in the kernel; independence of the adapted basis forces all $a_j=0$. Thus rank is $s$, nullity is $r$, and their sum is $\\operatorname{dim} V$.

This proof also constructs bases that make the bookkeeping visible. The quotient proof explains *why* it is structural.

<a id="section-246-consequences"></a>
### Consequences {#section-248-consequences}

For $T:V\\to W$ with finite dimensions $n,m$:

- $\\operatorname{rank} T\\le \\min(n,m)$;
- if $n>m$, then $T$ cannot be injective;
- if $n<m$, then $T$ cannot be surjective;
- if $n=m$, injective, surjective, and invertible are equivalent;
- every fiber over a reached output is an affine translate of $\\operatorname{ker} T$ and therefore has $nullity T$ free directions.

<a id="section-256-8-quotient-factorization-as-a-universal-rule"></a>
## 8. Quotient factorization as a universal rule {#section-258-8-quotient-factorization-as-a-universal-rule}

Let $U$ be a subspace of $V$ and let $q:V\\to V/U$ be the canonical quotient map $q(v)=v+U$. It is linear, onto, and has kernel $U$.

Suppose $T:V\\to W$ is linear and $U \\subseteq \\operatorname{ker} T$; in words, $T$ ignores every direction in $U$. Then there is a unique linear map $\\widetilde{T}:V/U\\to W$ satisfying

$T=\\widetilde{T} \\circ q$.

The only possible definition is

$\\widetilde{T}(v+U)=T(v)$.

It is well-defined because changing $v$ by an element of $U$ changes $T(v)$ by zero. Uniqueness follows because $q$ is onto: every quotient vector is $q(v)$.

This **universal property of the quotient** is a reusable factorization test:

$T$ descends to $V/U$ exactly when it kills $U$.

The first isomorphism theorem is the special case $U=\\operatorname{ker} T$, followed by restricting the codomain to the image.

<a id="section-276-worked-descent-evaluation-difference"></a>
### Worked descent: evaluation difference {#section-278-worked-descent-evaluation-difference}

Define $T:\\mathbb{R}_3[x]\\to R$ by $T(p)=p(1)-p(0)$. Constant polynomials lie in the kernel, so $T$ descends to the quotient by $\\operatorname{span}(1)$. It does not descend to the quotient by $\\operatorname{span}(x)$, because $T(x)=1$ is nonzero. This conclusion can be reached before choosing any quotient basis.

<a id="section-280-9-linear-systems-as-fibers"></a>
## 9. Linear systems as fibers {#section-282-9-linear-systems-as-fibers}

For a matrix-defined map $T(x)=Ax$, solving $Ax=b$ means finding the fiber $T^{-1}(\\{b\\})$.

- The system is consistent exactly when $b \\in \\operatorname{im} T$.
- If $x_0$ is one solution, every solution is $x_0+k$ with $k \\in \\operatorname{ker} T$.
- A consistent solution is unique exactly when $\\operatorname{ker} T=\\{0\\}$.
- In finite dimension, a consistent solution family has $nullity T$ free directions.

<a id="section-289-worked-system-without-premature-row-operations"></a>
### Worked system without premature row operations {#section-291-worked-system-without-premature-row-operations}

Let

$T:\\mathbb{R}^4\\to \\mathbb{R}^2$,

$T(x_1,x_2,x_3,x_4)=(x_1+x_2+x_3, x_2+x_3+x_4)$.

The outputs of $e_1$ and $e_4$ are $(1,0)$ and $(0,1)$, so the image is all $\\mathbb{R}^2$ and the rank is two. Rank–nullity gives kernel dimension $4-2=2$.

Solving $T(x)=0$ gives

$x_1=-x_2-x_3$, $x_4=-x_2-x_3$.

Thus a kernel basis is

$(-1,1,0,-1)$, $(-1,0,1,-1)$.

For right-hand side $(a,b)$, one particular solution is $(a,0,0,b)$, and all solutions add arbitrary combinations of those two kernel directions.

<a id="section-309-10-one-sided-inverses-and-decompositions"></a>
## 10. One-sided inverses and decompositions {#section-311-10-one-sided-inverses-and-decompositions}

A map $S:W\\to V$ is a **left inverse** of $T:V\\to W$ if $S \\circ T=I_V$. This forces $T$ to be injective. A map $R:W\\to V$ is a **right inverse** if $T \\circ R=I_W$; this forces $T$ to be surjective.

In finite-dimensional vector spaces, the converses hold, but choices enter.

- If $T$ is injective, define an inverse on $\\operatorname{im} T$ and extend it arbitrarily to a complement of $\\operatorname{im} T$ in $W$; this gives a left inverse.
- If $T$ is surjective, choose a complement $C$ of $\\operatorname{ker} T$. The restriction $T|_C:C\\to W$ is an isomorphism; its inverse gives a right inverse selecting one preimage in $C$ for each output.

These inverses are generally nonunique. A right inverse of a surjection chooses representatives of kernel cosets, just as a complement models a quotient.

<a id="section-320-11-exact-sequences-as-compressed-claims"></a>
## 11. Exact sequences as compressed claims {#section-322-11-exact-sequences-as-compressed-claims}

A sequence

$0 \\to  U --A\\to  V --B\\to  W \\to  0$

is **short exact** when $A$ is injective, $B$ is surjective, and $\\operatorname{im} A=\\operatorname{ker} B$. It packages the statement that $U$ sits inside $V$ as precisely the directions collapsed to produce $W$.

In finite dimension, exactness implies

$\\operatorname{dim} V=\\operatorname{dim} U+\\operatorname{dim} W$.

Indeed, rank–nullity for $B$ gives $\\operatorname{dim} V=\\operatorname{dim} \\operatorname{ker} B+\\operatorname{dim} W$, while injectivity of $A$ makes $\\operatorname{dim} \\operatorname{im} A=\\operatorname{dim} U$, and exactness identifies these middle dimensions.

Every subspace gives a short exact sequence

$0 \\to  U \\to  V \\to  V/U \\to  0$,

where the maps are inclusion and quotient. Choosing a complement splits this sequence into a direct sum, but the short exact sequence exists without that choice.

<a id="section-340-12-common-errors-and-boundary-cases"></a>
## 12. Common errors and boundary cases {#section-342-12-common-errors-and-boundary-cases}

<a id="section-342-error-proving-linearity-from-one-example"></a>
### Error: proving linearity from one example {#section-344-error-proving-linearity-from-one-example}

Linearity is universally quantified. Verify a generic combination or construct the map from basis values.

<a id="section-346-error-omitting-the-codomain"></a>
### Error: omitting the codomain {#section-348-error-omitting-the-codomain}

The same output formula can be onto one codomain and not another. State $T:V\\to W$ before discussing image or surjectivity.

<a id="section-350-error-identifying-v-operatorname-ker-t-with-operatornam"></a>
### Error: identifying $V/\\operatorname{ker} T$ with $\\operatorname{im} T$ by equality {#section-352-error-identifying-v-operatorname-ker-t-with-operatornam}

Their elements have different types: cosets versus output vectors. The induced map is an isomorphism, not literal set equality.

<a id="section-354-error-using-rank-nullity-with-an-infinite-dimensional-d"></a>
### Error: using rank–nullity with an infinite-dimensional domain without qualification {#section-356-error-using-rank-nullity-with-an-infinite-dimensional-d}

Cardinal versions exist, but subtraction of infinite cardinals does not behave like finite arithmetic. The stated formula and its numerical consequences assume finite-dimensional $V$.

<a id="section-358-error-assuming-a-bijection-is-linear"></a>
### Error: assuming a bijection is linear {#section-360-error-assuming-a-bijection-is-linear}

A bijective function between equal-dimensional spaces need not preserve addition or scaling. Conversely, a bijective *linear* map has a linear inverse.

<a id="section-362-error-confusing-a-small-residual-with-a-kernel-proof"></a>
### Error: confusing a small residual with a kernel proof {#section-364-error-confusing-a-small-residual-with-a-kernel-proof}

In floating-point computation, $\\lVert Ax\\rVert$ being small does not prove $x \\in \\operatorname{ker} A$. Exact kernel and numerical near-null directions answer different questions.

<a id="section-366-13-chapter-summary-and-retrieval-prompts"></a>
## 14. Prescribing a map on generators means preserving all relations {#section-959-14-prescribing-a-map-on-generators-means-preserving-all}

The basis-prescription theorem solves an existence problem because basis coordinates are unique. A spanning list with relations needs a different test. Let $v_1,\\ldots,v_k$ span $V$, and prescribe outputs $w_1,\\ldots,w_k$ in a space $W$ over the same field. There exists a linear map with these values exactly when
\\[
 \\sum_{i=1}^k a_i v_i=0
 \\quad\\Longrightarrow\\quad
 \\sum_{i=1}^k a_i w_i=0
\\]
for every coefficient list in $F^k$. Every input relation must become an output relation; preserving one visibly convenient relation is insufficient unless it generates all the relations.

Necessity follows by applying the proposed linear map to the zero relation. For sufficiency, express an arbitrary vector as $v=\\sum a_i v_i$ and define $T(v)=\\sum a_i w_i$. If another coefficient list represents the same vector, subtract the lists. Their difference is a relation, so the proposed outputs agree. The rule is well-defined. Adding or scaling coefficient lists proves linearity, and the spanning property proves uniqueness. The decisive step is independence of the chosen expression, not a computation on one test vector.

The relation space packages this argument. Define $q:F^k\\to V$ by $q(a)=\\sum a_i v_i$ and $L:F^k\\to W$ by $L(a)=\\sum a_i w_i$. The prescription is admissible exactly when $\\ker q\\subseteq\\ker L$. The already-proved quotient rule then gives a map on $F^k/\\ker q$, while the first isomorphism theorem identifies that quotient with $V$. This is a new use of those proofs: a list of generators presents the space through its relations.

For a concrete example in $F^2$, use
\\[
 v_1=(1,0),\\quad v_2=(0,1),\\quad
 v_3=(1,1),\\quad v_4=(1,-1).
\\]
A relation has coefficients satisfying $a+c+d=0$ and $b+c-d=0$. Consequently every relation is
\\[
 c(-1,-1,1,0)+d(-1,1,0,1).
\\]
Those two coefficient vectors form a basis of the relation space over every field: their third and fourth coordinates make independence immediate, including characteristic two. It is enough to require $w_3=w_1+w_2$ and $w_4=w_1-w_2$.

Take $w_1=(1,2)$ and $w_2=(3,1)$. Then the only admissible remaining outputs are $w_3=(4,3)$ and $w_4=(-2,1)$, with integer entries interpreted in $F$. The resulting map is $T(x,y)=(x+3y,2x+y)$. In characteristic two $v_3=v_4$; the prescribed outputs also coincide there. The relation test automatically handles that field change instead of assigning inconsistent values to the same vector. We have proved existence, not invertibility: whether this particular map loses directions is a further kernel question.

<a id="section-984-15-affine-fibres-have-directions-but-no-preferred-origi"></a>
## 15. Affine fibres have directions but no preferred origin {#section-986-15-affine-fibres-have-directions-but-no-preferred-origi}

The fibre theorem already identifies every nonempty solution set as $x_0+\\ker T$. Its affine meaning deserves attention. If $T(x_0)=b\\ne0$, the fibre excludes zero and is not a vector subspace. Its direction space is still a genuine subspace: differences of any two solutions lie in $\\ker T$, and every kernel vector occurs as such a difference. Thus an affine solution family has a well-defined number of free directions even though its points cannot be added using the vector-space rules of a subspace.

Let $T:F^3\\to F^2$ be
\\[
 T(x,y,z)=(x+z,y+2z).
\\]
The images of the first two standard basis vectors form the codomain basis, so the map is onto over every field. Solving for a prescribed output $(a,b)$ gives
\\[
 (x,y,z)=(a-t,b-2t,t),\\qquad t\\in F.
\\]
The kernel is the line spanned by $k=(-1,-2,1)$; its last coordinate proves that this vector is nonzero in every characteristic. The parameter formula is a bijection from $F$ to this fibre, but it identifies parameter zero with the chosen solution $(a,b,0)$, not with an intrinsic origin of the fibre.

Choose another particular solution $(a-u,b-2u,u)$. Its parameterisation uses the same direction $k$, but a parameter $t'$ now represents the earlier value $t=u+t'$. Changing the particular solution translates the parameter. The fibre itself and its direction space have not changed. This is the distinction between an intrinsic solution set and a chosen coordinate model for it.

Affine combinations respect the fibre in a way arbitrary vector combinations do not. If $T(x_i)=b$ and $\\sum_i\\lambda_i=1$, then $T(\\sum_i\\lambda_i x_i)=b$. The coefficient condition is an equation in the field and makes sense without order or real line segments. Ordinary addition of two solutions instead gives output $2b$. Over a field of characteristic two that output is zero, which makes the distinction especially visible rather than removing it.

Over a finite field with $q$ elements, a rank-$r$ map from an $n$-dimensional space has exactly $q^r$ reached outputs. Each reached fibre contains $q^{n-r}$ states: choose a basis of the kernel and assign its $n-r$ coordinates freely. Their product is $q^n$, accounting for all inputs with no overlaps. An output outside the image has an empty fibre, not a fibre with a negative or undefined number of free parameters. For the displayed surjection over $F_2$, four outputs each have two preimages. Reachability and indistinguishability are separate questions, answered by the image and kernel respectively.

<a id="section-1004-16-splitting-an-exact-sequence-constructs-two-complemen"></a>
## 16. Splitting an exact sequence constructs two complementary projections {#section-1006-16-splitting-an-exact-sequence-constructs-two-complemen}

Consider a finite-dimensional short exact sequence with named maps
\\[
 0\\longrightarrow U\\xrightarrow{A}V\\xrightarrow{B}W
 \\longrightarrow0.
\\]
Thus $A$ is injective, $B$ is onto, and $\\operatorname{im}A=\\ker B$. Choose a linear right inverse $R:W\\to V$ with $BR=I_W$. Such a choice exists by lifting a basis of $W$, or by restricting $B$ to a complement of its kernel. The map
\\[
 \\Phi:U\\oplus W\\longrightarrow V,\\qquad
 \\Phi(u,w)=Au+Rw
\\]
is an isomorphism. This statement describes which maps realise the direct sum, not just an equality of dimensions.

To construct its inverse, start with $v\\in V$. Set $w=Bv$. Then $v-RBv$ lies in $\\ker B=\\operatorname{im}A$, since $B(v-RBv)=Bv-Bv=0$. The inverse of $A$ on its image therefore supplies a unique
\\[
 u=A^{-1}(v-RBv).
\\]
Here $A^{-1}$ has domain $\\operatorname{im}A$, not all of $V$. The displayed membership check is what makes the formula typed correctly. Conversely $Au+Rw=0$ implies $w=0$ after applying $B$, and then $u=0$ by injectivity of $A$. These calculations verify the two inverse constructions.

Define $P=RB:V\\to V$. Then $P^2=R(BR)B=RB=P$, so it is a projection in the algebraic sense. Its image is $\\operatorname{im}R$, and its kernel is $\\ker B$: one inclusion is immediate, and $RBv=0$ implies $Bv=BRBv=0$. The complementary map $E=I_V-P$ projects onto $\\ker B$ along $\\operatorname{im}R$. Indeed $BE=0$, $E$ fixes every vector in $\\ker B$, and $ER=0$. No inner product has been introduced; these projections need not be orthogonal.

The map $L=A^{-1}E:V\\to U$ is a retraction with $LA=I_U$ and $LR=0$. The useful identities are
\\[
 AL+RB=I_V,\\qquad LA=I_U,\\qquad BR=I_W.
\\]
They encode decomposition, uniqueness and recovery of both coordinates. They also distinguish two one-sided inverses with different domains: $L$ is a left inverse of $A$, whereas $R$ is a right inverse of $B$.

The sequence specifies the subspace that is forgotten and the quotient information that survives. The chosen $R$ adds representatives for the surviving information. In general, without that choice there is no preferred direct-sum identification. This is why a quotient theorem can be canonical while a formula using a complement is not. The next chapter turns such choices into block coordinate records, and the invariant-subspace chapter asks when a chosen decomposition also respects an operator.

<a id="section-1034-17-all-right-inverses-form-a-family-of-choices"></a>
## 17. All right inverses form a family of choices {#section-1036-17-all-right-inverses-form-a-family-of-choices}

Once one right inverse $R$ of the surjection $B$ has been chosen, every other one has the form
\\[
 R'=R+AH,\\qquad H:W\\to U\\ \\hbox{linear}.
\\]
For this direction, $BR'=BR+BAH=I_W$, since exactness gives $BA=0$. Conversely, if $BR'=BR=I_W$, the difference $R'-R$ has image in $\\ker B=\\operatorname{im}A$. Define $H=A^{-1}(R'-R)$. It is linear, is well-defined on all of $W$, and is unique by injectivity of $A$.

Thus the set of right inverses is an affine family modeled on $L(W,U)$. After choosing one reference section, its differences have $\\dim U\\dim W$ freely specifiable coordinates. In general, the family has no distinguished zero section unless additional structure selects one. The image of $R'$ is a possibly different complement, whose graph is described by the added kernel component $AH$. Every right inverse reaches exactly one representative in each fibre, and changing it never changes the output after applying $B$.

Formal integration gives a useful application with different types from a coordinate projection. Let $d\\ge1$ and assume the field has characteristic zero or characteristic greater than $d$. The derivative
\\[
 D:F_d[x]\\longrightarrow F_{d-1}[x]
\\]
is onto, because the integers $1,\\ldots,d$ are nonzero field elements. Define
\\[
 R_0\\left(\\sum_{j=0}^{d-1}b_jx^j\\right)
 =\\sum_{j=0}^{d-1}\\frac{b_j}{j+1}x^{j+1}.
\\]
Then $DR_0=I$ on $F_{d-1}[x]$. For a chosen $a\\in F$, set $R_a(q)=R_0(q)-R_0(q)(a)$. This is the unique antiderivative with value zero at $a$.

The reverse composition has a different value and domain:
\\[
 R_aD(p)=p-p(a)\\,1.
\\]
The difference between the two sides has derivative zero and value zero at $a$, so it vanishes under the stated characteristic assumption. Thus $R_aD$ projects $F_d[x]$ onto the polynomials vanishing at $a$, along the constants. It is not the identity on all polynomials. The missing constant is exactly the kernel direction that differentiation discarded.

This interpretation separates an integration constant from a failure of uniqueness in the output polynomial $q$. Each $q$ has many preimages; a boundary condition chooses one. A different boundary point selects another right inverse, and their difference is a constant-valued linear map of $q$, in agreement with the general formula. No norm, least-squares rule or “smallest” antiderivative is supplied by bare linear algebra. Any such preference would require extra structure and a corresponding theorem.

<a id="section-1063-18-positive-characteristic-changes-the-derivative-s-ran"></a>
## 18. Positive characteristic changes the derivative's rank {#section-1065-18-positive-characteristic-changes-the-derivative-s-ran}

The adopted formal-derivative example correctly names its domain and codomain. For an integer $d\\ge1$, we can compute its complete kernel and image over a field of characteristic $p>0$. Write $f(x)=\\sum_{j=0}^d a_jx^j$. Since distinct monomials are independent, $Df=0$ exactly when $j a_j=0$ for every positive $j$. The field element represented by $j$ vanishes exactly when $p$ divides $j$. Therefore
\\[
 \\ker(D:F_d[x]\\to F_{d-1}[x])
 =\\operatorname{span}(1,x^p,x^{2p},\\ldots,x^{\\lfloor d/p\\rfloor p}).
\\]
The nullity is $\\lfloor d/p\\rfloor+1$ and the rank is $d-\\lfloor d/p\\rfloor$. The missing image monomials are $x^{p-1},x^{2p-1},\\ldots$ with exponents below $d$. Each other monomial $x^k$ has preimage $x^{k+1}/(k+1)$. These statements follow from individual coefficients, so they include both necessity and sufficiency.

For example, take $F=F_3$ and $d=4$. The derivative of
\\[
 a_0+a_1x+a_2x^2+a_3x^3+a_4x^4
\\]
is $a_1+2a_2x+a_4x^3$. Its kernel has basis $(1,x^3)$ and its image has basis $(1,x,x^3)$ inside the four-dimensional codomain. Rank three plus nullity two equals the five-dimensional domain. No right inverse exists on the full codomain because $x^2$ is not reached. Restricting the codomain to the image permits a right inverse again, with freely chosen kernel components.

The coefficient description should not be replaced by a stronger assertion about powers without another field hypothesis. The full polynomial kernel is $F[x^p]$: its coefficients may be arbitrary elements of $F$. Saying every such polynomial is a $p$th power requires those coefficients to have $p$th roots in $F$. For instance in $F_3(t)$, the polynomial $t x^3$ has zero derivative but is not a cube. If a rational function $a(t)/b(t)$ had cube $t$, taking the exponent of the factor $t$ in numerator and denominator would give $3(\\nu_t(a)-\\nu_t(b))=1$, impossible. In characteristic three, $(\\sum b_jx^j)^3=\\sum b_j^3x^{3j}$ because the cross terms vanish. A polynomial cube would therefore need such a cube root of its $x^3$ coefficient.

This example links a familiar operation to the book's field ledger. A formula that integrates by dividing by $j+1$ carries a nonzero-scalar hypothesis; a statement about a kernel can remain valid while surjectivity fails; and a convenient description using powers can require an additional property of the coefficient field. The rank–nullity identity itself survives unchanged in all these finite-dimensional examples. It measures the actual map after its field has been specified, not a characteristic-zero formula remembered from calculus.

<a id="section-1082-19-composition-loses-exactly-the-intermediate-kernel-in"></a>
## 19. Composition loses exactly the intermediate kernel intersection {#section-1084-19-composition-loses-exactly-the-intermediate-kernel-in}

The earlier rank inequality says a composition cannot gain rank. The exact loss has a useful formula. Let $T:U\\to V$ and $S:V\\to W$ be linear maps between finite-dimensional spaces. Restrict $S$ to $\\operatorname{im}T$. Its image is $\\operatorname{im}(ST)$ and its kernel is $\\operatorname{im}T\\cap\\ker S$. Rank–nullity for this restricted map gives
\\[
 \\operatorname{rank}(ST)
 =\\operatorname{rank}T-\\dim(\\operatorname{im}T\\cap\\ker S).
\\]
The lost directions are outputs of the first stage that the second stage erases. They are not all of $\\ker S$, because some erased intermediate directions might never have been reached.

Take $T:F^2\\to F^3$, $T(a,b)=(a,b,0)$, and $S:F^3\\to F^2$, $S(x,y,z)=(x,z)$. Each map has rank two. The intermediate image is spanned by $e_1,e_2$, whereas $\\ker S$ is spanned by $e_2$. Their intersection has dimension one, so the composition has rank one; directly $ST(a,b)=(a,0)$. Replacing the second map by $S'(x,y,z)=(x,y)$ keeps its rank equal to two but moves its kernel to $\\operatorname{span}(e_3)$. The intersection is now zero, and $S'T$ is the identity on $F^2$. The ranks of the two stages alone do not determine the rank of their composition.

Since the intersection dimension is at most $\\dim\\ker S=\\dim V-\\operatorname{rank}S$, the same identity yields
\\[
 \\operatorname{rank}(ST)\\ge
 \\operatorname{rank}T+\\operatorname{rank}S-\\dim V.
\\]
A negative lower bound is simply uninformative. The intermediate dimension is essential; inserting the dimension of $U$ or $W$ would count the wrong ambient space. This is another reason to retain types when applying a familiar matrix inequality.

In a measurement pipeline, the first map determines which intermediate signals are possible and the second determines which of those remain visible. Designing a second map that is injective on $\\operatorname{im}T$ preserves all first-stage information, even if it has a large kernel elsewhere in $V$. This is a structural design criterion. It does not say that the preserved information is numerically stable under noise; that later question needs a metric, perturbation scale and conditioning analysis.

<a id="section-1102-20-a-one-sided-inverse-need-not-become-two-sided-beyond"></a>
## 20. A one-sided inverse need not become two-sided beyond finite dimension {#section-1104-20-a-one-sided-inverse-need-not-become-two-sided-beyond}

The finite-dimensional endomorphism theorem uses finiteness, not merely the coincidence of domain and codomain names. An explicit algebraic example makes the boundary visible. On the space $F[x]$ of all polynomials, define multiplication by the variable and deletion of the constant coefficient:
\\[
 M(p)=xp,\\qquad L(p)=\\frac{p-p(0)}x.
\\]
The quotient in the second formula is a polynomial because its numerator has zero constant coefficient. Both maps are linear over every field, and no infinite sums are being used: each input polynomial has finitely many coefficients.

For $p=a_0+a_1x+\\cdots+a_dx^d$, the map $M$ shifts every coefficient up one degree, whereas $L$ returns $a_1+a_2x+\\cdots+a_dx^{d-1}$. Direct substitution gives
\\[
 LM(p)=p,\\qquad ML(p)=p-p(0).
\\]
Thus $L$ is a left inverse of $M$, and $M$ is a right inverse of $L$. The order matters. The map $M$ is injective but not onto, because no multiple of $x$ equals the constant polynomial one. The map $L$ is onto, since $L(xq)=q$ for each $q$, but its kernel is the nonzero constant subspace. The two endomorphisms act on the same space without either becoming a two-sided isomorphism.

There is also a complete decomposition certificate. Let $j:F\\to F[x]$ include a scalar as a constant polynomial, and let $E_0:F[x]\\to F$ evaluate at zero. Then
\\[
 ML+jE_0=I_{F[x]},\\qquad E_0j=I_F,\\qquad E_0M=0.
\\]
The first identity says every polynomial is its zero-constant part plus its constant part. The second says evaluation recovers the included scalar. The third says multiplication by $x$ lands inside the zero-constant subspace. In fact that image is the entire evaluation kernel. Hence this example supplies a split exact sequence using explicit maps even though its middle polynomial spaces are infinite-dimensional.

Nothing here contradicts the earlier rank–nullity proof. That proof used a finite domain dimension and ordinary subtraction of dimensions to obtain its numerical consequences. These polynomial spaces contain independent lists of arbitrarily large finite length, so that finite count cannot be substituted. An isomorphism between an infinite-dimensional space and a proper subspace can exist, as $M:F[x]\\to xF[x]$ demonstrates.

The example also distinguishes algebraic size from analytic behavior. No norm, continuity, convergence or bounded-operator assertion has been made. It is a counterexample inside vector-space algebra, sufficient to identify the missing finite-dimensional hypothesis. Questions about function spaces with a topology would require additional definitions. A well-chosen boundary example can therefore test a theorem without silently importing a different subject.


<a id="section-1127-21-optional-practice-extensions"></a>

## Summary

<a id="section-368-13-chapter-summary-and-retrieval-prompts"></a>
A linear map preserves finite combinations and is determined freely by its values on a basis. Its kernel records invisible input directions and its image reached outputs. The induced map $V/\\operatorname{ker} T \\to  \\operatorname{im} T$ is a linear isomorphism. Rank–nullity is the finite-dimensional count obtained from this structural theorem. A map descends through $V/U$ exactly when it kills $U$, and solution sets are empty or affine kernel cosets.

Retrieve:

1. Why can basis images be assigned arbitrarily but images of a dependent spanning list cannot?
2. What exact equivalence relates equality of outputs to kernel cosets?
3. Which four obligations prove the induced first-isomorphism map is an isomorphism?
4. How does an adapted kernel basis prove rank–nullity directly?
5. Why does a right inverse of a surjection amount to choosing representatives?

<a id="section-378-exercises-with-full-solutions"></a>

<a id="section-1199-summary"></a>
A linear map preserves combinations and is determined by compatible basis images. Kernels describe indistinguishability, images describe reach, and rank–nullity accounts for both. Quotient factorization identifies distinguishable input classes, while a right inverse chooses representatives only where outputs are reached. Matrices next record these maps relative to explicitly chosen bases.

## Exercises {#section-380-exercises-with-full-solutions}

<a id="section-380-1-zero-and-negatives"></a>
### 1. Zero and negatives {#section-382-1-zero-and-negatives}

Prove directly from linearity that $T(0)=0$ and $T(-v)=-T(v)$.

<details>
<summary>Hint 1</summary>

Apply additivity to 0+0.

</details>

<details>
<summary>Hint 2</summary>

Then apply T to v+(−v) and use uniqueness of additive inverses.

</details>

<details>
<summary>Solution</summary>

**Solution.** $T(0)=T(0v)=0T(v)=0$. Also $T(-v)=T((-1)v)=(-1)T(v)=-T(v)$.


</details>

<a id="section-406-2-test-a-rule"></a>
### 2. Test a rule {#section-408-2-test-a-rule}

For which real $c$ is $T:\\mathbb{R}^2\\to \\mathbb{R}^2$, $T(x,y)=(x+cy,1-y)$, linear?

<details>
<summary>Hint 1</summary>

Test the image of the zero input first.

</details>

<details>
<summary>Hint 2</summary>

One output coordinate obstructs linearity independently of c.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every $c$, $T(0,0)=(0,1)$, not zero. Therefore the rule is never linear. The first component is linear, but the constant $1$ in the second makes the whole map affine.


</details>

<a id="section-432-3-basis-prescription"></a>
### 3. Basis prescription {#section-434-3-basis-prescription}

Let $B=((1,1),(1,-1))$. Find the unique linear $T:\\mathbb{R}^2\\to \\mathbb{R}^2$ satisfying $T(1,1)=(2,0)$ and $T(1,-1)=(0,4)$.

<details>
<summary>Hint 1</summary>

Express a general input in the prescribed basis.

</details>

<details>
<summary>Hint 2</summary>

Apply the two prescribed images to that basis expansion.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write $(x,y)=a(1,1)+b(1,-1)$ with $a=(x+y)/2$, $b=(x-y)/2$. Then

$T(x,y)=a(2,0)+b(0,4)=(x+y,2x-2y)$.


</details>

<a id="section-460-4-relations-must-be-preserved"></a>
### 4. Relations must be preserved {#section-462-4-relations-must-be-preserved}

Can a linear map satisfy $T(e_1)=(1,0)$, $T(e_2)=(0,1)$, and $T(e_1+e_2)=(0,0)$?

<details>
<summary>Hint 1</summary>

Write the relation between the three specified inputs.

</details>

<details>
<summary>Hint 2</summary>

Linearity must carry that relation to the outputs.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Linearity forces $T(e_1+e_2)=T(e_1)+T(e_2)=(1,1)$, contradicting the third prescription.


</details>

<a id="section-486-5-kernel-of-evaluation"></a>
### 5. Kernel of evaluation {#section-488-5-kernel-of-evaluation}

For $E_1:\\mathbb{R}_3[x]\\to R$, $E_1(p)=p(1)$, find a basis of the kernel and the rank.

<details>
<summary>Hint 1</summary>

Factor a polynomial vanishing at one by x−1.

</details>

<details>
<summary>Hint 2</summary>

Check which powers or products stay within the degree bound, and use constant polynomials to find the image.

</details>

<details>
<summary>Solution</summary>

**Solution.** The kernel consists of polynomials divisible by $x-1$ and of degree at most three. A basis is $(x-1,x(x-1),x^2(x-1))$. Evaluation is onto because constant polynomials reach every real number, so rank is one. The dimensions $3+1=4$ agree with rank–nullity.


</details>

<a id="section-512-6-formal-derivative-in-characteristic-p"></a>
### 6. Formal derivative in characteristic $p$ {#section-514-6-formal-derivative-in-characteristic-p}

Over a field of characteristic $p$, show the formal derivative map has $x^p$ in its kernel. Why does this not happen over $R$?

<details>
<summary>Hint 1</summary>

Apply the formal derivative rule to the exponent p.

</details>

<details>
<summary>Hint 2</summary>

Compare the field value of the integer coefficient p in the two fields.

</details>

<details>
<summary>Solution</summary>

**Solution.** Formal differentiation gives $D(x^p)=p x^{p-1}=0$ because the scalar $p$ is zero in characteristic $p$. Over $R$, the scalar $p$ is nonzero, so $D(x^p)=p x^{p-1}$ is a nonzero polynomial.


</details>

<a id="section-538-7-kernel-criterion"></a>
### 7. Kernel criterion {#section-540-7-kernel-criterion}

Prove $T$ is injective iff it sends every independent list to an independent list.

<details>
<summary>Hint 1</summary>

For the forward direction, pull a zero relation of images back to the domain.

</details>

<details>
<summary>Hint 2</summary>

For the converse, test a singleton containing a nonzero kernel vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $T$ is injective and $\\sum a_jT(v_j)=0$, then $T(\\sum a_jv_j)=0$; injectivity gives $\\sum a_jv_j=0$, so independence of the input list forces all coefficients zero. Conversely, if every independent list remains independent, take nonzero $v$. The one-vector list $(v)$ is independent, so $(T(v))$ is independent and $T(v)\\ne 0$. Thus the kernel contains no nonzero vector and $T$ is injective.


</details>

<a id="section-564-8-image-of-a-span"></a>
### 8. Image of a span {#section-566-8-image-of-a-span}

Prove $T(\\operatorname{span}(S))=\\operatorname{span}(T(S))$.

<details>
<summary>Hint 1</summary>

Apply T to an arbitrary finite linear combination.

</details>

<details>
<summary>Hint 2</summary>

Prove both containments by keeping the same scalar coefficients.

</details>

<details>
<summary>Solution</summary>

**Solution.** The image of a finite combination $\\sum a_js_j$ is $\\sum a_jT(s_j)$, so the left side is contained in the right. Every finite combination of values $T(s_j)$ equals $T(\\sum a_js_j)$, proving the reverse containment.


</details>

<a id="section-590-9-composition-kernels-and-images"></a>
### 9. Composition kernels and images {#section-592-9-composition-kernels-and-images}

For $T:U\\to V$ and $S:V\\to W$, prove $\\operatorname{ker} T \\subseteq \\operatorname{ker}(S \\circ T)$ and $\\operatorname{im}(S \\circ T) \\subseteq \\operatorname{im} S$. State when either containment can be strict.

<details>
<summary>Hint 1</summary>

Use T(u)=0 for the first containment and write a composite output for the second.

</details>

<details>
<summary>Hint 2</summary>

Choose a subsequent map that discards reached directions for a strict kernel example.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $T(u)=0$, then $S(Tu)=S(0)=0$, proving the kernel containment. Every $S(Tu)$ is an output of $S$, proving the image containment. The first is strict if $T(u)$ is nonzero but lies in $\\operatorname{ker} S$; the second is strict if some outputs of $S$ are not reached from inputs in $\\operatorname{im} T$. For example, take $T=0$ and a nonzero $S$ for strict image containment.


</details>

<a id="section-616-10-rank-of-a-composition"></a>
### 10. Rank of a composition {#section-618-10-rank-of-a-composition}

Prove $\\operatorname{rank}(S \\circ T)\\le \\min(\\operatorname{rank} S,\\operatorname{rank} T)$ in finite dimensions.

<details>
<summary>Hint 1</summary>

One bound follows from inclusion in the image of S.

</details>

<details>
<summary>Hint 2</summary>

For the other, apply S to a basis spanning im T.

</details>

<details>
<summary>Solution</summary>

**Solution.** The image of the composition is contained in $\\operatorname{im} S$, so its dimension is at most $\\operatorname{rank} S$. Also, $S$ restricted to $\\operatorname{im} T$ maps onto $\\operatorname{im}(S \\circ T)$, and an image cannot have dimension larger than its domain, so the rank is at most $\\operatorname{dim} \\operatorname{im} T=\\operatorname{rank} T$.


</details>

<a id="section-642-11-difference-operator"></a>
### 11. Difference operator {#section-644-11-difference-operator}

For $\\Delta:\\mathbb{F}^n\\to \\mathbb{F}^{n-1}$ from the chapter, use rank–nullity to prove surjectivity after computing only the kernel.

<details>
<summary>Hint 1</summary>

Set every successive difference to zero.

</details>

<details>
<summary>Hint 2</summary>

The kernel is determined by one scalar, then rank–nullity reaches the codomain dimension.

</details>

<details>
<summary>Solution</summary>

**Solution.** The kernel is the one-dimensional constant-vector subspace. Therefore rank–nullity gives rank $n-1$, which equals the dimension of the codomain. The image is a subspace of full dimension, hence all of $\\mathbb{F}^{n-1}$.


</details>

<a id="section-668-12-first-isomorphism-in-a-concrete-map"></a>
### 12. First isomorphism in a concrete map {#section-670-12-first-isomorphism-in-a-concrete-map}

Let $T:\\mathbb{R}^3\\to R$, $T(x,y,z)=x+y+z$. Identify the quotient in the first isomorphism theorem.

<details>
<summary>Hint 1</summary>

Find the plane sent to zero.

</details>

<details>
<summary>Hint 2</summary>

The first isomorphism theorem identifies cosets modulo that plane with reached scalars.

</details>

<details>
<summary>Solution</summary>

**Solution.** The kernel is the plane $K=\\{(x,y,z):x+y+z=0\\}$. The map is onto because $T(a,0,0)=a$. The theorem gives $\\mathbb{R}^3/K \\simeq R$, via $(x,y,z)+K \\to x+y+z$.


</details>

<a id="section-694-13-rank-nullity-bound"></a>
### 13. Rank–nullity bound {#section-696-13-rank-nullity-bound}

Prove every linear map $T:\\mathbb{F}^7\\to \\mathbb{F}^4$ has nullity at least three.

<details>
<summary>Hint 1</summary>

Bound the image dimension by the codomain dimension.

</details>

<details>
<summary>Hint 2</summary>

Subtract that upper bound from the domain dimension.

</details>

<details>
<summary>Solution</summary>

**Solution.** Rank is at most the codomain dimension four. Rank–nullity gives $nullity=7-\\operatorname{rank}\\ge 7-4=3$.


</details>

<a id="section-720-14-no-surjection-upward"></a>
### 14. No surjection upward {#section-722-14-no-surjection-upward}

Prove there is no surjective linear map from a finite $n$-dimensional space onto an $m$-dimensional space when $n<m$.

<details>
<summary>Hint 1</summary>

Images of a domain basis span the image.

</details>

<details>
<summary>Hint 2</summary>

Surjectivity would require a spanning list shorter than the target dimension.

</details>

<details>
<summary>Solution</summary>

**Solution.** A surjection would have rank $m$. But rank–nullity bounds rank by $n$, yielding $m\\le n$, contradiction.


</details>

<a id="section-746-15-fibers-are-kernel-cosets"></a>
### 15. Fibers are kernel cosets {#section-748-15-fibers-are-kernel-cosets}

If $T(x_0)=y$, prove $T^{-1}(\\{y\\})=x_0+\\operatorname{ker} T$.

<details>
<summary>Hint 1</summary>

Subtract the known preimage from any other preimage.

</details>

<details>
<summary>Hint 2</summary>

Prove the reverse inclusion by adding an arbitrary kernel vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $T(x)=y=T(x_0)$, then $T(x-x_0)=0$, so $x=x_0+k$ for a kernel vector. Conversely, $T(x_0+k)=y+0=y$ for every kernel vector $k$.


</details>

<a id="section-772-16-descent-through-a-quotient"></a>
### 16. Descent through a quotient {#section-774-16-descent-through-a-quotient}

Let $U=\\operatorname{span}((1,1,1))$ in $\\mathbb{R}^3$. Does $T(x,y,z)=x-y$ descend to $\\mathbb{R}^3/U$? Does $S(x,y,z)=x+y+z$?

<details>
<summary>Hint 1</summary>

A linear map descends precisely when it annihilates U.

</details>

<details>
<summary>Hint 2</summary>

Evaluate both maps on the stated generator, keeping the real scalar field in view.

</details>

<details>
<summary>Solution</summary>

**Solution.** A map descends exactly when it kills $U$. $T(1,1,1)=0$, so $T$ descends. But $S(1,1,1)=3\\ne 0$, so $S$ does not descend over $R$.


</details>

<a id="section-798-17-uniqueness-of-quotient-factorization"></a>
### 17. Uniqueness of quotient factorization {#section-800-17-uniqueness-of-quotient-factorization}

Let $q:V\\to V/U$. If $A \\circ q=B \\circ q$ for maps $A,B:V/U\\to W$, prove $A=B$.

<details>
<summary>Hint 1</summary>

Use surjectivity of the quotient map.

</details>

<details>
<summary>Hint 2</summary>

Choose a representative of an arbitrary quotient element and compare outputs.

</details>

<details>
<summary>Solution</summary>

**Solution.** The quotient map is onto. Every coset has form $q(v)$, and then $A(q(v))=B(q(v))$ by the assumed equality. Thus the two maps agree on every quotient vector.


</details>

<a id="section-824-18-left-inverse"></a>
### 18. Left inverse {#section-826-18-left-inverse}

Prove that if $S \\circ T=I_V$, then $T$ is injective and $S$ is surjective.

<details>
<summary>Hint 1</summary>

Apply S to an equality of two T outputs.

</details>

<details>
<summary>Hint 2</summary>

To reach an arbitrary domain vector by S, use its T image as a preimage.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $T(v)=T(w)$, apply $S$ to obtain $v=S(Tv)=S(Tw)=w$, so $T$ is injective. For any $v \\in V$, the element $T(v)$ in the domain of $S$ satisfies $S(Tv)=v$, so $S$ is surjective.


</details>

<a id="section-850-19-right-inverse"></a>
### 19. Right inverse {#section-852-19-right-inverse}

Prove that if $T \\circ R=I_W$, then $T$ is surjective and $R$ is injective.

<details>
<summary>Hint 1</summary>

Use R to provide a preimage for every target.

</details>

<details>
<summary>Hint 2</summary>

If R identifies two targets, apply T and use the identity.

</details>

<details>
<summary>Solution</summary>

**Solution.** For each $w \\in W$, $w=T(Rw)$, so $T$ is onto. If $R(w_1)=R(w_2)$, applying $T$ gives $w_1=w_2$, so $R$ is injective.


</details>

<a id="section-876-20-trace-map"></a>
### 20. Trace map {#section-878-20-trace-map}

For $\\operatorname{tr}:M_n(F)\\to F$, find its rank and nullity.

<details>
<summary>Hint 1</summary>

Find a matrix with any prescribed trace.

</details>

<details>
<summary>Hint 2</summary>

Then apply rank–nullity to the matrix-space dimension.

</details>

<details>
<summary>Solution</summary>

**Solution.** The trace is onto because $\\operatorname{tr}(aE_{11})=a$, so rank is one. Since $\\operatorname{dim} M_n(F)=n^2$, rank–nullity gives nullity $n^2-1$. This remains true in every field: $E_{11}$ has trace one even if the characteristic divides $n$.


</details>

<a id="section-902-21-a-short-exact-sequence"></a>
### 21. A short exact sequence {#section-904-21-a-short-exact-sequence}

Let $T:V\\to W$ be onto with finite-dimensional spaces. Prove

$0 \\to  \\operatorname{ker} T \\to  V \\to  W \\to  0$

is exact and recover rank–nullity.

<details>
<summary>Hint 1</summary>

Check image equals kernel at each arrow.

</details>

<details>
<summary>Hint 2</summary>

Surjectivity identifies the last image dimension with dim W.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first map is inclusion, hence injective. Its image is exactly $\\operatorname{ker} T$ by definition. The second map is $T$, assumed onto. Thus the sequence is exact. Dimension additivity gives $\\operatorname{dim} V=\\operatorname{dim} \\operatorname{ker} T+\\operatorname{dim} W$; since surjectivity makes $\\operatorname{rank} T=\\operatorname{dim} W$, this is rank–nullity.


</details>

<a id="section-932-22-transfer-problem-measurements-and-indistinguishable-"></a>
### 22. Transfer problem: measurements and indistinguishable states {#section-934-22-transfer-problem-measurements-and-indistinguishable-}

Let $T:\\mathbb{F}^n\\to \\mathbb{F}^m$ encode $m$ linear measurements of a state. Suppose $\\operatorname{rank} T=r$. Prove that every reachable measurement has an $(n-r)$-dimensional family of indistinguishable states, and identify the space of distinguishable input classes.

<details>
<summary>Hint 1</summary>

Describe each nonempty fiber as a kernel coset.

</details>

<details>
<summary>Hint 2</summary>

Use rank–nullity for its direction dimension and the first isomorphism theorem for distinguishable classes.

</details>

<details>
<summary>Solution</summary>

**Solution.** Rank–nullity gives $\\operatorname{dim} \\operatorname{ker} T=n-r$. For any reachable $y=T(x_0)$, the fiber is $x_0+\\operatorname{ker} T$, an affine family with that many direction dimensions. Two states are indistinguishable exactly when their difference lies in the kernel, so distinguishable classes form the quotient $\\mathbb{F}^n/\\operatorname{ker} T$. The first isomorphism theorem identifies this quotient with $\\operatorname{im} T$, an $r$-dimensional subspace of measurement space. This is an exact structural statement; measurement noise would require a separate metric and conditioning analysis.

</details>

<a id="section-957-14-prescribing-a-map-on-generators-means-preserving-all"></a>

<a id="section-1129-21-optional-practice-extensions"></a>
### 23. LSP-05-E23: classify all linear choices of a preimage {#section-1131-lsp-05-e23-classify-all-linear-choices-of-a-preimage}

For $T:F^3\\to F^2$, $T(x,y,z)=(x+z,y+2z)$, describe every linear right inverse $R:F^2\\to F^3$. Prove that your list is exhaustive and give the image of $I-RT$. State its domain before calling it a projection.

<details>
<summary>Hint 1</summary>

Let the third coordinate of R(u,v) be an arbitrary linear functional.

</details>

<details>
<summary>Hint 2</summary>

The right-inverse equation forces the first two coordinates; then compute T(I−RT).

</details>

<a id="section-1147-lsp-05-e24-integrate-only-reached-polynomial-directions"></a>
### 24. LSP-05-E24: integrate only reached polynomial directions {#section-1149-lsp-05-e24-integrate-only-reached-polynomial-directions}

Over $F=F_3$, take $D:F_5[x]\\to F_4[x]$. Find bases of its kernel and image and calculate rank and nullity. Decide whether it has a right inverse on the whole stated codomain. Give one right inverse after restricting the codomain to its image.

<details>
<summary>Hint 1</summary>

Differentiate the standard monomials in the stated characteristic.

</details>

<details>
<summary>Hint 2</summary>

Retain only nonzero derivative directions and choose one polynomial preimage for each reached basis monomial.

</details>

<a id="section-1165-22-solutions-to-optional-practice-extensions"></a>

## Solutions

<a id="section-1167-22-solutions-to-optional-practice-extensions"></a>
<a id="section-1167-lsp-05-e23-classify-all-linear-choices-of-a-preimage-so"></a>
### LSP-05-E23: classify all linear choices of a preimage — solution {#section-1169-lsp-05-e23-classify-all-linear-choices-of-a-preimage-so}

<details>
<summary>Solution</summary>

The reference choice is $R_0(a,b)=(a,b,0)$ and the kernel is spanned by $k=(-1,-2,1)$. For arbitrary $\\alpha,\\beta\\in F$ put
\\[
 R_{\\alpha,\\beta}(a,b)
 =(a,b,0)+(\\alpha a+\\beta b)(-1,-2,1).
\\]
Applying $T$ gives $(a,b)$, so each is a right inverse. Conversely, if $R$ is any linear right inverse, $R-R_0$ has image in the one-dimensional kernel. Its kernel coefficient is a linear functional on $F^2$, hence has the form $\\alpha a+\\beta b$. This proves exhaustiveness and uniqueness of the two coefficients. The map $I_{F^3}-RT:F^3\\to F^3$ is idempotent, has image $\\ker T$, and kernel $\\operatorname{im}R$: it kills $R(a,b)$ and fixes every kernel vector.


</details>

<a id="section-1182-lsp-05-e24-integrate-only-reached-polynomial-directions"></a>
### LSP-05-E24: integrate only reached polynomial directions — solution {#section-1184-lsp-05-e24-integrate-only-reached-polynomial-directions}

<details>
<summary>Solution</summary>

The derivative is
\\[
 D(a_0+a_1x+a_2x^2+a_3x^3+a_4x^4+a_5x^5)
 =a_1+2a_2x+a_4x^3+2a_5x^4.
\\]
Thus a kernel basis is $(1,x^3)$ and an image basis is $(1,x,x^3,x^4)$. Nullity is two and rank four, summing to domain dimension six. The five-dimensional codomain contains $x^2$, which is not reached, so no right inverse on that codomain exists. On the image, prescribe $R(1)=x$, $R(x)=2x^2$, $R(x^3)=x^4$, and $R(x^4)=2x^5$, and extend linearly. In $F_3$, differentiation of these four images returns their respective inputs, so $DR$ is the identity on the restricted codomain.

</details>


<a id="section-1197-summary"></a>
`;export{e as default};