var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: dual-spaces-annihilators-transpose
title: "Dual Spaces, Annihilators, and Transpose Maps"
level: advanced-undergraduate
estimated_minutes: 235
license: CC BY-SA 4.0
---

# Dual Spaces, Annihilators, and Transpose Maps {#section-1-dual-spaces-annihilators-and-transpose-maps}

A vector is a state; a linear functional is a scalar measurement of states. Passing from a space to all its linear measurements reverses maps, converts quotients into annihilators, and explains why a matrix transpose is structural rather than typographical.

All spaces in the main development are finite-dimensional over a field $F$. We explicitly mark the few statements that remain valid without finite dimension.

<a id="section-5-1-linear-functionals-and-the-dual"></a>
## 1. Linear functionals and the dual {#section-7-1-linear-functionals-and-the-dual}

**Definition 8.1 (Algebraic dual).** The **algebraic dual** of $V$ is

$V^{*} = L(V,F)$.

Its elements are linear functionals $\\phi:V\\to F$. If $B=(v_1,\\ldots,v_n)$ is a basis, define the **dual basis** $B^{*}=(\\phi^1,\\ldots,\\phi^n)$ by

$\\phi^i(v_j)=\\delta_{ij}$.

For $v=\\sum a_jv_j$, $\\phi^i(v)=a_i$. Thus dual-basis functionals extract coordinates, form a basis of $V^{*}$, and prove $\\operatorname{dim} V^{*}=\\operatorname{dim} V$ in finite dimension.

Examples include evaluation on polynomial spaces, coordinate projections, trace pairings $A \\to  \\operatorname{tr}(BA)$, and weighted sums of data. A functional has kernel a hyperplane when it is nonzero.

<a id="section-19-2-basis-dependence-and-canonical-evaluation"></a>
## 2. Basis dependence and canonical evaluation {#section-21-2-basis-dependence-and-canonical-evaluation}

The isomorphism $V\\to V^{*}$ obtained by sending $v_i$ to $\\phi^i$ depends on the chosen basis and is generally not canonical. By contrast, the evaluation map

$\\iota_V:V\\to V^{**}$, $\\iota_V(v)(\\phi)=\\phi(v)$

is canonical. Functionals separate points: if $v\\ne 0$, extend $v$ to a basis and choose its first dual coordinate, which takes value one at $v$. Hence $\\iota_V$ is injective. Finite equal dimensions make it an isomorphism.

In infinite-dimensional algebraic spaces, $\\iota_V$ remains injective but is generally not onto. Topological duals introduce continuity and are different objects.

<a id="section-29-3-annihilators"></a>
## 3. Annihilators {#section-31-3-annihilators}

For a subspace $U \\subseteq V$, its **annihilator** is

$U^0=\\{\\phi \\in V^{*}: \\phi(u)=0 \\text{ for every } u \\in U\\}$.

For a subspace $S \\subseteq V^{*}$, define its preannihilator

$S_0=\\{v \\in V: \\phi(v)=0 \\text{ for every } \\phi \\in S\\}$.

**Theorem 8.2 (Annihilator dimension).** If $(u_1,\\ldots,u_r)$ is a basis of $U$, extended to a basis of $V$, then $U^0$ is spanned by the last $n-r$ dual-basis vectors. Consequently

$\\operatorname{dim} U^0=\\operatorname{dim} V-\\operatorname{dim} U$.

In finite dimension, $(U^0)_0=U$. One inclusion is immediate; equal dimensions give equality. Annihilation reverses containment: $U \\subseteq W$ implies $W^0 \\subseteq U^0$.

It also converts sums and intersections:

$(U+W)^0=U^0 \\cap W^0$,

$(U \\cap W)^0=U^0+W^0$ in finite dimension.

<a id="section-51-4-dual-of-a-quotient-and-restriction"></a>
## 4. Dual of a quotient and restriction {#section-53-4-dual-of-a-quotient-and-restriction}

Let $q:V\\to V/U$ be the quotient map. Pulling a quotient functional back along $q$ gives

$q^{*}: (V/U)^{*} \\to  V^{*}$, $q^{*}(\\lambda)=\\lambda \\circ q$.

Its image is exactly $U^0$, and it is injective. Thus $(V/U)^{*}$ is canonically isomorphic to $U^0$.

The restriction map $\\rho:V^{*}\\to U^{*}$, $\\rho(\\phi)=\\phi|_U$, is onto in finite dimension because a functional on $U$ extends after a basis extension. Its kernel is $U^0$, so the first isomorphism theorem gives

$V^{*}/U^0 \\simeq U^{*}$.

These statements express a durable reversal: quotient on states corresponds to subspace on measurements; subspace on states corresponds to quotient on measurements.

<a id="section-65-5-the-dual-or-transpose-map"></a>
## 5. The dual or transpose map {#section-67-5-the-dual-or-transpose-map}

For $T:V\\to W$, define

$T^{*}:W^{*}\\to V^{*}$, $T^{*}(\\psi)=\\psi \\circ T$.

Arrows reverse because an output measurement becomes an input measurement by precomposition. The construction obeys

$(S \\circ T)^{*}=T^{*} \\circ S^{*}$, $I^{*}=I$, and $(aS+bT)^{*}=aS^{*}+bT^{*}$.

If $B,C$ are bases and $B^{*},C^{*}$ their dual bases, then

$[T^{*}]_{B^{*}}\\leftarrow C^{*} = ([T]_C\\leftarrow B)^T$.

Indeed, the $(j,i)$ entry of the left-hand matrix is $(T^{*} \\psi^i)(v_j)=\\psi^i(Tv_j)$, the $(i,j)$ entry of $[T]$.

This is the algebraic transpose. It does not require an inner product and should not be confused with the adjoint, which maps $W\\to V$ only after identifications with duals supplied by inner products.

<a id="section-83-6-kernels-images-and-rank-by-duality"></a>
## 6. Kernels, images, and rank by duality {#section-85-6-kernels-images-and-rank-by-duality}

Two identities encode the fundamental theorem of linear algebra in coordinate-free form:

$\\operatorname{ker} T^{*}=(\\operatorname{im} T)^0$,

$\\operatorname{im} T^{*}=(\\operatorname{ker} T)^0$ in finite dimension.

The first is direct: $\\psi \\circ T=0$ exactly when $\\psi$ vanishes on every output of $T$. For the second, every pullback vanishes on $\\operatorname{ker} T$, giving containment. Dimensions finish the argument:

$\\operatorname{dim} \\operatorname{im} T^{*}=\\operatorname{rank} T^{*}=\\operatorname{rank} T=\\operatorname{dim} V-\\operatorname{dim} \\operatorname{ker} T=\\operatorname{dim}(\\operatorname{ker} T)^0$.

To avoid circularity, prove $\\operatorname{rank} T^{*}=\\operatorname{rank} T$ from a rank-normal-form matrix or adapted bases. It follows that row rank equals column rank: they are ranks of a map and its transpose.

<a id="section-97-7-solvability-as-annihilation"></a>
## 7. Solvability as annihilation {#section-99-7-solvability-as-annihilation}

An equation $T(v)=w$ is solvable exactly when every functional that vanishes on $\\operatorname{im} T$ also vanishes on $w$:

$w \\in \\operatorname{im} T \\Longleftrightarrow \\psi(w)=0 \\text{ for all } \\psi \\in \\operatorname{ker} T^{*}$.

The forward implication is immediate. Conversely, the condition says $w \\in ((\\operatorname{im} T)^0)_0=\\operatorname{im} T$ in finite dimension.

For a matrix $A$, left-null vectors provide compatibility conditions for $Ax=b$. This is exact algebra. In numerical work a small compatibility residual is not zero without a stated error model.

<a id="section-107-8-hyperplanes-and-finite-systems-of-equations"></a>
## 8. Hyperplanes and finite systems of equations {#section-109-8-hyperplanes-and-finite-systems-of-equations}

Every nonzero functional has a codimension-one kernel. Conversely, every hyperplane $H$ is $\\operatorname{ker} \\phi$ for some nonzero $\\phi$: choose a basis of $H$, extend by $v$, and define $\\phi(H)=0$, $\\phi(v)=1$.

More generally, a subspace of codimension $r$ is the common kernel of $r$ independent functionals spanning its annihilator. Hence equations and subspaces are dual descriptions.

<a id="section-113-9-worked-example-evaluation-constraints"></a>
## 9. Worked example: evaluation constraints {#section-115-9-worked-example-evaluation-constraints}

**Worked example 8.3 (Polynomial evaluations and annihilators).**

Let $V=\\mathbb{R}_3[x]$ and $U=\\{p:p(0)=p(1)=0\\}$. The evaluation functionals $\\epsilon_0,\\epsilon_1$ are independent, and

$U=\\operatorname{ker} \\epsilon_0 \\cap \\operatorname{ker} \\epsilon_1$.

Therefore $U^0=\\operatorname{span}(\\epsilon_0,\\epsilon_1)$ and $\\operatorname{dim} U=2$. Indeed $U=x(x-1)\\mathbb{R}_1[x]$. The quotient $V/U$ remembers precisely the two evaluation values, and its dual is canonically the span of those measurements.

<a id="section-123-10-common-errors"></a>
## 10. Common errors {#section-125-10-common-errors}

**Identifying $V$ with $V^{*}$ without a choice.** Equal dimension guarantees some isomorphism, not a canonical one.

**Reversing the transpose arrow incorrectly.** $T:V\\to W$ gives $T^{*}:W^{*}\\to V^{*}$.

**Using $(U \\cap W)^0=U^0 \\cap W^0$.** Intersection reverses to sum; sum reverses to intersection.

**Calling the algebraic transpose an adjoint.** An adjoint uses an inner product and complex conjugation conventions.

**Ignoring finite dimension.** Double-annihilator equality and surjective restriction need choice or topology-sensitive qualifications beyond this setting.

<a id="section-135-11-summary"></a>
## Investigation: constraint spaces and certificates {#section-611-investigation-constraint-spaces-and-certificates}

Let $A:\\mathbb{F}^n\\to \\mathbb{F}^m$ be a measurement map. Develop a certificate description of which $b$ are reachable.

1. Prove $b \\in \\operatorname{im} A$ iff every $y \\in \\operatorname{ker} A^{*}$ satisfies $y(b)=0$.
2. Choose bases and turn this into the familiar left-null condition $y^T b=0$.
3. For a concrete $4 by 3$ matrix of rank two, compute bases of $\\operatorname{im} A$, $\\operatorname{ker} A$, $\\operatorname{ker} A^{*}$, and verify both annihilator identities.
4. Explain which steps are exact and what extra data a numerical implementation would require.

**Investigation solution.** Part 1 is the double-annihilator identity: the stated condition says $b \\in (\\operatorname{ker} A^{*})_0=((\\operatorname{im} A)^0)_0=\\operatorname{im} A$. Part 2 follows because dual-basis coordinates make $A^{*}$ the transpose, and evaluation is the dot-product formula $y^Tb$ in coordinates. For Part 3 one valid choice is

$A=\\begin{pmatrix}1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 2 \\\\ 1 & -1 & 0\\end{pmatrix}$.

Its third column is the sum of the first two, while the first two are independent, so rank is two. $\\operatorname{ker} A=\\operatorname{span}((-1,-1,1))$. Solving $A^Ty=0$ gives equations $y_1+y_3+y_4=0$, $y_2+y_3-y_4=0$, hence a basis $(-1,-1,1,0),(-1,1,0,1)$. These functionals vanish on the two-dimensional column space, and the pullbacks forming $\\operatorname{im} A^{*}$ are exactly the functionals killing $(-1,-1,1)$. Part 4 requires a norm, data and rounding error model, conditioning information, and a threshold or statistical decision rule before “approximately zero” can become a numerical certificate.
<a id="section-623-12-coordinates-for-states-and-coordinates-for-measureme"></a>
## 12. Coordinates for states and coordinates for measurements {#section-625-12-coordinates-for-states-and-coordinates-for-measureme}

A functional is determined by its values on a basis, but those values are not the coordinates of a state vector. Fix a basis $B=(v_1,\\ldots,v_n)$. If $v$ has coordinate column $a$ and $\\phi$ has coefficient column $c$ in the dual basis, then $\\phi(v)=c^{\\mathsf T}a$. No inner product has been chosen: this is simply evaluation written with two matching coordinate systems.

Let a new basis have old-coordinate columns forming an invertible matrix $P$. The vector coordinates become $a'=P^{-1}a$. The new functional coefficients are $c'=P^{\\mathsf T}c$, because their $j$th entry is $\\phi(v'_j)$. Evaluation is unchanged: $(c')^{\\mathsf T}a'=c^{\\mathsf T}PP^{-1}a=c^{\\mathsf T}a$. States and measurements transform in opposite ways.

This calculation is a useful diagnostic whenever the same coordinate column is informally called both a vector and a functional. On a real one-dimensional space, replacing basis vector $v$ by $2v$ divides a state's coordinate by two but doubles a functional's value on the new basis. Equal dimensions do not make those transformation rules equal.

The basis-chosen identification sending each $v_i$ to its dual coordinate changes as well. In dimension one, if $\\phi(v)=1$, the old identification sends $v$ to $\\phi$. The identification based on $2v$ sends $2v$ to $\\phi/2$, and therefore sends $v$ to $\\phi/4$. Both are isomorphisms, but they are different maps. A declaration of basis is mathematical data, not harmless notation.

<a id="section-633-a-nonstandard-dual-basis-calculated-completely"></a>
### A nonstandard dual basis calculated completely {#section-635-a-nonstandard-dual-basis-calculated-completely}

**Worked example 8.4 (Coordinates for states and measurements).**

In $\\mathbb Q^2$, use $v_1=(1,1)$ and $v_2=(1,2)$. Solving $\\phi^i(v_j)=\\delta_{ij}$ gives $\\phi^1(x,y)=2x-y$ and $\\phi^2(x,y)=y-x$. The evaluations on $(v_1,v_2)$ are respectively $(1,0)$ and $(0,1)$, which proves the dual-basis claim directly.

For $v=(3,5)$, these functionals give coordinates $(1,2)$, and indeed $v=v_1+2v_2$. For the measurement $\\psi(x,y)=x+3y$, the dual-basis coefficient column is $(\\psi(v_1),\\psi(v_2))=(4,7)$. Evaluation is therefore $4\\cdot1+7\\cdot2=18$, agreeing with $3+3\\cdot5$. This checks both coordinate rules in one example.

A matrix for a map must now specify two bases and two types. If $T:V\\to W$ has matrix $A$, then output-coordinate measurements pull back by $A^{\\mathsf T}$ only when domain and codomain measurements use the corresponding dual bases. Choosing unrelated bases in the dual spaces requires their own change-of-basis matrices. A bare transpose is not a basis-free numerical array detached from those declarations.

<a id="section-643-13-construct-the-pullback-image-without-assuming-rank-e"></a>
## 13. Construct the pullback image without assuming rank equality {#section-645-13-construct-the-pullback-image-without-assuming-rank-e}

The image identity for $T^*$ has a direct extension proof that does not use row rank equals column rank. Let $\\phi\\in V^*$ vanish on $\\ker T$. Define a functional on the actual image by $\\lambda(Tv)=\\phi(v)$. If $Tv=Tv'$, then $v-v'\\in\\ker T$, so the proposed values agree. Linearity follows by choosing preimages and using linearity of $\\phi$.

Extend a basis of $\\operatorname{im}T$ to a basis of $W$. Assign the already prescribed values on the image basis and, for example, zero on the added basis vectors. This defines $\\psi\\in W^*$ extending $\\lambda$, and $T^*\\psi=\\psi\\circ T=\\phi$. The opposite containment was immediate, so $\\operatorname{im}T^*=(\\ker T)^0$ follows constructively.

The extension is generally nonunique. If $\\psi_0$ is one extension, all extensions are $\\psi_0+\\eta$ with $\\eta\\in(\\operatorname{im}T)^0=\\ker T^*$. Their pullbacks agree. The nonuniqueness is exactly the information in an output measurement that the map's outputs never encounter.

**Worked example 8.5 (All extensions of a pulled-back measurement).**

For a small example, let $T:\\mathbb Q^2\\to\\mathbb Q^3$ send $(s,t)$ to $(s,t,s+t)$. A functional $\\phi(s,t)=as+bt$ has extensions $\\psi_r(x,y,z)=(a-r)x+(b-r)y+rz$ for arbitrary $r\\in\\mathbb Q$. Substitution gives $T^*\\psi_r=\\phi$. The difference between two such extensions is a multiple of $-x-y+z$, the measurement annihilating the image plane.

The same construction makes the quotient interpretation explicit. A functional killing $\\ker T$ first descends to $V/\\ker T$, then travels across the induced isomorphism to $\\operatorname{im}T$, and finally extends to $W$. The first two steps are canonical; the last generally requires a choice. Confusing them can make a valid existence argument look like a preferred inverse.

Now dimensions can be used after the image identity is established: its right side has dimension $\\dim V-\\dim\\ker T=\\operatorname{rank}T$, so $\\operatorname{rank}T^*=\\operatorname{rank}T$. Thus row rank equals column rank can be a consequence rather than an input to this proof. The original rank-normal-form route remains valid; the two arguments have different dependency ledgers.

<a id="section-659-14-equations-quotients-and-a-complete-evaluation-decomp"></a>
## 14. Equations, quotients, and a complete evaluation decomposition {#section-661-14-equations-quotients-and-a-complete-evaluation-decomp}

For the original real polynomial example, define $E:\\mathbb R_3[x]\\to\\mathbb R^2$ by $E(p)=(p(0),p(1))$. The polynomials $1-x$ and $x$ have evaluation vectors $(1,0)$ and $(0,1)$, so $E$ is onto. Its kernel is precisely $U=x(x-1)\\mathbb R_1[x]$.

Every polynomial has the explicit decomposition
\\[
p=p(0)(1-x)+p(1)x+x(x-1)(a+bx)
\\]
for unique real numbers $a,b$. The difference between $p$ and the first two terms vanishes at zero and one, so successive polynomial division gives the factor $x(x-1)$. The quotient has degree at most one. Uniqueness follows by evaluating at the two points and then comparing the remaining polynomial.

Consequently $(1-x,x,x(x-1),x^2(x-1))$ is an adapted basis of $V$. The first two entries span one chosen complement of $U$, not an intrinsic preferred copy of the quotient. Evaluation gives the quotient's two intrinsic measurements. The remaining two coordinates depend on the chosen representation of the vanishing polynomial.

For example, $p=x^3$ has evaluations zero and one, and
\\[
x^3=x+x(x-1)(1+x).
\\]
The quotient remembers the representative $x+U$, while the residual $x^3-x$ lies in $U$. An evaluation functional sees only the corresponding quotient information and ignores the residual. A coefficient-extraction functional generally does not ignore it.

This decomposition also explains why $U^0$ is exactly the span of the two evaluations. A functional killing $U$ can depend only on the coefficients of $1-x$ and $x$ in this adapted basis, so it has the form $a\\epsilon_0+b\\epsilon_1$. The result is not merely a comparison of dimensions: it gives the actual formula for every such measurement.

Repeated constraints behave differently from distinct ones. Imposing $p(0)=0$ twice still gives one independent functional and codimension one, not two. A derivative constraint at the same point is another functional and requires its own independence check. Counting displayed equations without checking independence can therefore overstate the dimension lost.

<a id="section-681-extension-and-restriction-do-not-select-a-canonical-com"></a>
### Extension and restriction do not select a canonical complement {#section-683-extension-and-restriction-do-not-select-a-canonical-com}

Restriction $V^*\\to U^*$ is onto because values on a basis of $U$ can be completed to values on a basis of $V$. Its kernel consists of measurements invisible on $U$. The quotient $V^*/U^0$ records exactly the restriction, independently of how it was extended.

Choosing a complement in $V$ lets one extend each functional on $U$ by declaring it zero on that complement. A different complement generally gives a different extension. The restriction agrees, and the difference between the extensions lies in $U^0$. This is the measurement-side counterpart of changing coset representatives in the previous chapter.

The canonical quotient statement therefore does not assert a canonical direct sum $V^*=U^*\\oplus U^0$, since $U^*$ is not intrinsically a subspace of $V^*$. A chosen extension map can embed it. Keeping the arrow and the chosen embedding explicit avoids identifying spaces merely because their dimensions add correctly.

<a id="section-689-15-invariance-reverses-to-an-annihilator-statement"></a>
## 15. Invariance reverses to an annihilator statement {#section-691-15-invariance-reverses-to-an-annihilator-statement}

Let $T:V\\to V$ and let $U\\subseteq V$ be a subspace. Then
\\[
T(U)\\subseteq U
\\quad\\Longleftrightarrow\\quad
T^*(U^0)\\subseteq U^0.
\\]
If $U$ is invariant, $\\phi\\in U^0$ and $u\\in U$ give $(T^*\\phi)(u)=\\phi(Tu)=0$. Conversely, if the annihilator is invariant, then $\\phi(Tu)=0$ for every $\\phi\\in U^0$, so $Tu\\in(U^0)_0=U$. The finite-dimensional double-annihilator result supplies the reverse implication.

In an adapted basis with $U$ first, the operator matrix is $\\begin{pmatrix}A&B\\\\0&C\\end{pmatrix}$. In the dual basis its transpose is $\\begin{pmatrix}A^{\\mathsf T}&0\\\\B^{\\mathsf T}&C^{\\mathsf T}\\end{pmatrix}$. The annihilator is spanned by the last dual basis vectors. Applying the transpose to a column $(0,z)$ gives $(0,C^{\\mathsf T}z)$, proving its invariance directly.

Notice the reversal of which block becomes a restriction. The restriction of $T^*$ to $U^0$ is the dual of the quotient operator on $V/U$. The quotient of $V^*$ by $U^0$ corresponds to the dual of the restriction to $U$. States preserved inside a subspace become measurements that vanish on it, and their roles interchange.

This also describes invariant-subspace containment without confusing ambient spaces. If $U\\subseteq W\\subseteq V$, then $W^0\\subseteq U^0\\subseteq V^*$. A growing state flag becomes a decreasing measurement flag. To display it as an increasing adapted dual flag, reverse its order; merely transposing an upper triangular matrix produces a lower triangular one.

The evaluation map to the double dual respects every linear map. For $T:V\\to W$,
\\[
\\iota_W T=T^{**}\\iota_V.
\\]
Both sides map $V$ into $W^{**}$. Evaluating either side at $\\psi\\in W^*$ gives $\\psi(Tv)$. This is a precise sense in which the double-dual identification is compatible with maps rather than with a chosen basis.

The finite-dimensional isomorphism $V\\cong V^{**}$ thus has a different status from an arbitrary $V\\cong V^*$. In the latter, the source and target respond differently to basis changes; in the former, the two reversals return the original direction. No inner product is needed for this compatibility.

<a id="section-713-16-solvability-certificates-and-the-adjoint-boundary"></a>
## 16. Solvability certificates and the adjoint boundary {#section-715-16-solvability-certificates-and-the-adjoint-boundary}

An exact unsolvability certificate for $Tv=w$ is a functional $\\psi\\in W^*$ with $\\psi T=0$ and $\\psi(w)\\ne0$. Any hypothetical solution would give $\\psi(w)=\\psi(Tv)=0$, a contradiction. This direction needs no dimension count: one displayed functional and two verified evaluations suffice.

For a solvable right-hand side, an explicit preimage is a positive certificate. If $v_0$ is one solution, all solutions are $v_0+\\ker T$: subtracting two solutions gives a kernel vector, and adding any kernel vector preserves the output. A left-null basis supplies a complete compatibility test in finite dimension, while one violated basis equation supplies a compact negative certificate.

Coordinates turn these functionals into left-null columns $y$ and evaluations into $y^{\\mathsf T}b$. The transpose notation represents evaluation here, not Euclidean distance or orthogonality chosen in advance. An exact rational certificate remains exact under another basis when both the functional and right-hand side are transformed correctly.

A numerical residual has another status. If input data or matrix entries are uncertain, a nonzero computed scalar can arise from perturbations. Its relevance depends on scale, a norm and an error bound. The exact certificate theorem does not supply a tolerance or decide whether the recorded data should be treated as exact.

Complex scalars make the transpose–adjoint distinction particularly visible. On $V=\\mathbb C$, let $Tz=iz$ and let $\\phi(z)=z$. The algebraic dual map gives $T^*\\phi=i\\phi$, since precomposition yields $iz$. Its matrix in the matching dual basis is $(i)$, the ordinary transpose of the one-by-one matrix.

For the inner product $\\langle z,w\\rangle=z\\overline w$, linear in the first slot, the adjoint on vectors is instead $T^\\dagger w=-iw$. Indeed $\\langle iz,w\\rangle=\\langle z,-iw\\rangle$. The inner-product identification sends $w$ to the functional $z\\mapsto\\langle z,w\\rangle$, which depends conjugate-linearly on $w$. That conjugation explains the changed matrix rather than contradicting the transpose rule.

Over a real inner-product space the same identification is linear, but still depends on the chosen inner product. Over arbitrary fields an appropriate positive inner product may not exist. Algebraic duality and annihilators therefore remain available in settings where orthogonal-complement language would add unsupported structure.



<a id="section-731-17-equivalent-equation-systems-have-the-same-measuremen"></a>
## 17. Equivalent equation systems have the same measurement span {#section-733-17-equivalent-equation-systems-have-the-same-measuremen}

Annihilators provide a practical test for whether two lists of equations describe the same subspace. Let $\\phi_1,\\ldots,\\phi_r$ be functionals and define $S=\\operatorname{span}(\\phi_1,\\ldots,\\phi_r)\\subseteq V^*$. Their common kernel is $S_0$. In finite dimension, $(S_0)^0=S$, so the subspace determines the span of all its defining measurements.

Consequently two finite homogeneous systems on the same space have the same solution subspace exactly when their row-functional spans agree. The number of printed equations is irrelevant; their linear span is the invariant information. If both lists are bases of that span, they have the same length and differ by an invertible change of measurement coordinates.

Here is a field-sensitive example. On $F^3$, put $\\phi(x,y,z)=x+y+z$ and $\\psi(x,y,z)=x-y$. Their common kernel is the line $F(1,1,-2)$: the second equation gives $x=y$, and the first then gives $z=-2x$. The two functionals are independent over every field, since the third coefficient distinguishes them and $\\psi$ is nonzero.

Adding the equation $2x+z=0$ changes nothing, because its functional is $\\phi+\\psi$. Replacing the original pair by $\\phi+\\psi$ and $\\phi-\\psi$, however, preserves its span only when two is nonzero. The measurement change matrix is $\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, whose determinant is $-2$.

In characteristic two the new two equations both reduce to $z=0$, and their common kernel is a plane rather than the original line. The original line formula remains meaningful: $-2=0$, so it is $F(1,1,0)$. The failure lies in treating a noninvertible measurement change as a reversible row operation. Integer coefficients must again be read as elements of the named field.

<a id="section-743-constructing-the-annihilator-of-an-intersection"></a>
### Constructing the annihilator of an intersection {#section-745-constructing-the-annihilator-of-an-intersection}

The original annihilator-of-intersection key gives a finite-dimensional duality argument. A constructive alternative explains how the sum of measurements arises. Suppose $\\phi$ vanishes on $U\\cap W$. On $U+W$, define $\\lambda(u+w)=\\phi(u)$. If $u+w=u'+w'$, then $u-u'=w'-w\\in U\\cap W$, so the proposed values agree.

This functional equals $\\phi$ on $U$ and vanishes on $W$. Extend it to a functional $\\widetilde\\lambda$ on $V$ by finite basis extension. Then $\\widetilde\\lambda\\in W^0$, while $\\phi-\\widetilde\\lambda\\in U^0$. Thus $\\phi$ is a sum of one measurement killing $U$ and one killing $W$. The reverse inclusion is immediate, proving $(U\\cap W)^0=U^0+W^0$ without using a dimension subtraction.

The construction need not be unique, since extending beyond $U+W$ involved a choice. The subspace sum is intrinsic even though a decomposition of an individual functional may not be. For $U=\\operatorname{span}(e_1,e_2)$ and $W=\\operatorname{span}(e_2,e_3)$ in $F^3$, their intersection is $Fe_2$. Its annihilator is spanned by the first and third coordinate measurements, exactly $W^0+U^0$.

This also diagnoses the tempting but wrong intersection formula. A functional killing $U\\cap W$ need not kill either larger subspace separately. In this example the first coordinate measurement kills the intersection and $W$, yet does not kill $U$. Requiring it to belong to both annihilators would discard valid measurements.

<a id="section-753-injectivity-and-surjectivity-reverse"></a>
### Injectivity and surjectivity reverse {#section-755-injectivity-and-surjectivity-reverse}

A surjective map $T:V\\to W$ has injective dual: if $\\psi T=0$, every $w$ equals $Tv$ and hence $\\psi(w)=0$. Conversely, if the image is proper, extend its basis and choose a nonzero coordinate measurement killing it; that measurement lies in $\\ker T^*$. Thus surjectivity of $T$ is equivalent to injectivity of $T^*$ in this finite setting.

Likewise $T$ is injective exactly when $T^*$ is surjective, by $\\operatorname{im}T^*=(\\ker T)^0$. If the kernel is zero, every input measurement is a pullback. If the kernel contains a nonzero vector, point separation supplies an input measurement that does not vanish there, so it cannot be a pullback. The latter proof states explicitly which measurements are lost by an information-erasing map.

Surjectivity does not select a preferred inverse. For $T:F^2\\to F$ given by $T(x,y)=x$, every map $S_a(b)=(b,ab)$ is a right inverse. Their images are different complements to $\\ker T=Fe_2$. A choice of inner product could select a least-norm representative, but that would add structure absent from this equation.

The dual injection in this example is canonical: it sends the scalar measurement $b\\mapsto cb$ to $(x,y)\\mapsto cx$. Thus a measurement on the quotient information can have a preferred pullback even when reconstructing a state requires an arbitrary lift. This is the same reversal expressed by quotient duals, now visible in a two-coordinate calculation.


<a id="section-764-independent-measurements-permit-every-prescribed-readin"></a>
### Independent measurements permit every prescribed reading {#section-766-independent-measurements-permit-every-prescribed-readin}

Let $\\phi_1,\\ldots,\\phi_r$ be independent functionals and let $M:V\\to F^r$ send $v$ to their readings. This map is onto. If its image were proper, there would be a nonzero output functional $\\eta$ killing that image, by finite basis extension. Writing its coefficients as $\\eta_1,\\ldots,\\eta_r$ would give $\\sum_i\\eta_i\\phi_i=0$, contradicting independence.

Thus independence means more than having no redundant equation: any specified list of $r$ readings is achievable. The kernel has dimension $\\dim V-r$, and every nonempty fibre is a translate of that kernel. Choosing a basis of the kernel then describes all states with those readings, while choosing one preimage of each standard output basis vector supplies a noncanonical reconstruction map.

Dependence instead imposes compatibility equations on readings. If $\\phi_3=\\phi_1+\\phi_2$, every attainable triple satisfies $b_3=b_1+b_2$. The output functional $(b_1,b_2,b_3)\\mapsto-b_1-b_2+b_3$ kills the measurement map. A proposed triple $(1,1,3)$ violates this equation over $\\mathbb Q$ and therefore has an exact negative certificate.

The dimension statement and the certificate statement answer complementary questions. The first counts the remaining freedom once compatible readings are fixed. The second decides which readings can occur at all. Neither chooses a preferred state among an affine family, and neither requires an inner product.

<a id="section-774-18-completion-sheet-for-the-existing-constraint-space-i"></a>
## 18. Completion sheet for the existing constraint-space investigation {#section-776-18-completion-sheet-for-the-existing-constraint-space-i}

This sheet completes the explicit certificates for the investigation already stated above. It uses that investigation's same matrix and preserves its valid rank and kernel calculations. Work over $\\mathbb Q$ for the concrete right-hand sides below; the displayed symbolic basis identities themselves hold over any field.

Write the two independent image columns as $c_1=(1,0,1,1)^{\\mathsf T}$ and $c_2=(0,1,1,-1)^{\\mathsf T}$. Then $A(s,t,u)=(s+u)c_1+(t+u)c_2$. Their first two coordinates prove independence, so $(c_1,c_2)$ is an image basis. The kernel basis is $h=(-1,-1,1)^{\\mathsf T}$: substitution gives $Ah=0$, and the two coefficient equations force every kernel vector to be a multiple of $h$.

In the output dual, use $\\eta_1=(-1,-1,1,0)^{\\mathsf T}$ and $\\eta_2=(-1,1,0,1)^{\\mathsf T}$ as coordinate columns of functionals. Each has zero pairing with both $c_1$ and $c_2$. Their third and fourth coordinates prove independence. Conversely, $A^{\\mathsf T}y=0$ forces $y_1=-y_3-y_4$ and $y_2=-y_3+y_4$, hence $y=y_3\\eta_1+y_4\\eta_2$. This is a complete kernel-of-dual equality certificate.

In the input dual, the pullbacks of the first two output coordinate measurements are $\\alpha_1=(1,0,1)^{\\mathsf T}$ and $\\alpha_2=(0,1,1)^{\\mathsf T}$. The third and fourth pullbacks are $\\alpha_1+\\alpha_2$ and $\\alpha_1-\\alpha_2$. Thus $(\\alpha_1,\\alpha_2)$ is an image-of-dual basis, with independence visible in its first two coordinates.

Each $\\alpha_j$ kills $h$. Conversely a functional with column $(a,b,c)^{\\mathsf T}$ kills $h$ exactly when $c=a+b$, making it $a\\alpha_1+b\\alpha_2$. This proves $\\operatorname{im}A^*=(\\ker A)^0$ by explicit coefficients. Likewise $\\eta_1(b)=\\eta_2(b)=0$ means $b_3=b_1+b_2$ and $b_4=b_1-b_2$, giving $b=b_1c_1+b_2c_2$. Hence $(\\ker A^*)_0=\\operatorname{im}A$ explicitly.

The compatible right-hand side $b=(2,3,5,-1)^{\\mathsf T}$ has both certificate evaluations zero. Its full solution set is $(2,3,0)^{\\mathsf T}+th$ for $t\\in\\mathbb Q$. For $b'=(2,3,5,0)^{\\mathsf T}$, $\\eta_1(b')=0$ but $\\eta_2(b')=1$. The single functional $\\eta_2$ is therefore an exact negative certificate for $Ax=b'$. One passing constraint does not replace the full independent constraint list.

A public self-review can give one point for each of eight checks: declare the field and map/dual types; verify the two image columns are independent; verify the entire kernel description; verify both left-null basis vectors and their completeness; compute the entire dual-image basis; establish both annihilator equalities by coefficients; give a compatible preimage and an incompatible functional; state the exact-versus-numerical boundary. These are mathematical checks on a submitted certificate, not measured attainment or a new assessed checkpoint.

This is an explicit completion of the original investigation, not a ninth investigation. Its calculations are exact symbolic arithmetic and were not produced by an executed numerical program. Replacing the given matrix or observations by approximate data would require the additional error and conditioning information already identified in the original model.

<a id="section-792-19-optional-practice-extensions"></a>
## 21. Proof boundary for the dual-space extensions {#section-856-21-proof-boundary-for-the-dual-space-extensions}

The new constructions use finite basis extension, quotient well-definedness, ordinary matrix multiplication, and the book's finite-dimensional double-annihilator theorem. The constructive pullback-image proof does not assume rank equality, and the complex adjoint example explicitly declares its inner-product convention. The original investigation remains one investigation with a more explicit certificate sheet. No infinite-dimensional extension theorem, numerical tolerance, human qualification, or validated workload is supplied.

<a id="section-858-summary"></a>

## Summary

<a id="section-137-11-summary"></a>
Duality treats scalar measurements as a vector space, reverses linear maps by precomposition, and turns quotient information into annihilators. In dual bases, this reversal is matrix transposition. Kernel/image identities recover compatibility conditions and equality of row and column rank.

<a id="section-139-exercises-with-full-solutions"></a>

<a id="section-860-summary"></a>
Dual vectors are scalar measurements, and annihilators encode the measurements vanishing on a subspace. Pullback reverses composition and produces transpose matrices in corresponding dual bases. Finite-dimensional annihilator identities explain compatibility tests and equality of row and column rank. These algebraic duals require no inner product and lead naturally to multilinear constructions.

## Exercises {#section-141-exercises-with-full-solutions}

<a id="section-141-1-construct-a-dual-basis"></a>
### 1. Construct a dual basis {#section-143-1-construct-a-dual-basis}

For $B=((1,1),(1,-1))$ over $R$, find the dual basis.

<details>
<summary>Hint 1</summary>

Solve for the two coefficients of an arbitrary vector in B.

</details>

<details>
<summary>Hint 2</summary>

The coefficient-extraction formulas are the desired dual functionals.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $\\phi^1(x,y)=ax+by$, require $a+b=1,a-b=0$, so $a=b=\\frac{1}{2}$. Similarly $\\phi^2(x,y)=(x-y)/2$.


</details>

<a id="section-167-2-polynomial-coefficient-functionals"></a>
### 2. Polynomial coefficient functionals {#section-169-2-polynomial-coefficient-functionals}

Find the dual basis to $(1,x,x^2)$ in $\\mathbb{R}_2[x]$.

<details>
<summary>Hint 1</summary>

Define one functional for each polynomial coefficient.

</details>

<details>
<summary>Hint 2</summary>

Check its values on all three ordered monomials.

</details>

<details>
<summary>Solution</summary>

**Solution.** It consists of coefficient extraction: $\\phi^0(a+bx+cx^2)=a$, $\\phi^1(p)=b$, and $\\phi^2(p)=c$.


</details>

<a id="section-193-3-functionals-separate-points"></a>
### 3. Functionals separate points {#section-195-3-functionals-separate-points}

Prove that for nonzero $v$ there is $\\phi$ with $\\phi(v)=1$.

<details>
<summary>Hint 1</summary>

Include the nonzero vector in a basis.

</details>

<details>
<summary>Hint 2</summary>

Prescribe one on that basis vector and zero on the others.

</details>

<details>
<summary>Solution</summary>

**Solution.** Extend $(v)$ to a basis and take the first dual-basis functional. By definition it sends $v$ to one.


</details>

<a id="section-219-4-canonical-double-dual-map"></a>
### 4. Canonical double-dual map {#section-221-4-canonical-double-dual-map}

Prove $\\iota_V$ is linear and injective.

<details>
<summary>Hint 1</summary>

Evaluate the double-dual expression on an arbitrary functional.

</details>

<details>
<summary>Hint 2</summary>

For injectivity, use a functional separating a nonzero vector from zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** For scalars $a,b$, $\\iota(av+bw)(\\phi)=\\phi(av+bw)=a \\phi(v)+b \\phi(w)$, so equality holds as elements of $V^{**}$. If $\\iota(v)=0$, every functional vanishes on $v$; point separation forces $v=0$.


</details>

<a id="section-245-5-dimension-of-an-annihilator"></a>
### 5. Dimension of an annihilator {#section-247-5-dimension-of-an-annihilator}

Prove $\\operatorname{dim} U^0=\\operatorname{dim} V-\\operatorname{dim} U$.

<details>
<summary>Hint 1</summary>

Extend a basis of U to one of V.

</details>

<details>
<summary>Hint 2</summary>

Determine which coefficients in the resulting dual basis must vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** Extend a basis $(u_1,\\ldots,u_r)$ of $U$ to a basis of $V$. A functional vanishes on $U$ exactly when its first $r$ dual coordinates vanish, so the remaining $n-r$ dual basis vectors form a basis of $U^0$.


</details>

<a id="section-271-6-reversal-of-containment"></a>
### 6. Reversal of containment {#section-273-6-reversal-of-containment}

If $U \\subseteq W$, prove $W^0 \\subseteq U^0$.

<details>
<summary>Hint 1</summary>

Take a functional vanishing on the larger space.

</details>

<details>
<summary>Hint 2</summary>

Every vector of the smaller space is already among its tested inputs.

</details>

<details>
<summary>Solution</summary>

**Solution.** A functional vanishing on all of $W$ certainly vanishes on its subset $U$.


</details>

<a id="section-297-7-annihilator-of-a-sum"></a>
### 7. Annihilator of a sum {#section-299-7-annihilator-of-a-sum}

Prove $(U+W)^0=U^0 \\cap W^0$.

<details>
<summary>Hint 1</summary>

Test a functional on u+w.

</details>

<details>
<summary>Hint 2</summary>

Use zero choices for one summand to obtain the reverse containment.

</details>

<details>
<summary>Solution</summary>

**Solution.** A functional vanishes on every $u+w$ iff it vanishes separately on all $u$ (take $w=0$) and all $w$ (take $u=0$).


</details>

<a id="section-323-8-annihilator-of-an-intersection"></a>
### 8. Annihilator of an intersection {#section-325-8-annihilator-of-an-intersection}

Prove $(U \\cap W)^0=U^0+W^0$ in finite dimension.

<details>
<summary>Hint 1</summary>

One inclusion follows by evaluating both functionals on the intersection.

</details>

<details>
<summary>Hint 2</summary>

Compare dimensions using the sum dimension formula and the annihilator-of-sum identity.

</details>

<details>
<summary>Solution</summary>

**Solution.** Applying Exercise 7 to $U^0,W^0$ in $V^{*}$ and then taking preannihilators gives $(U^0+W^0)_0=U \\cap W$. Double annihilation and equal finite dimensions then yield the stated dual identity.


</details>

<a id="section-349-9-quotient-dual"></a>
### 9. Quotient dual {#section-351-9-quotient-dual}

Prove $q^{*}:(V/U)^{*}\\to U^0$ is an isomorphism.

<details>
<summary>Hint 1</summary>

Pull a quotient functional back along q.

</details>

<details>
<summary>Hint 2</summary>

For surjectivity, descend a functional vanishing on U and check representatives.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every $\\lambda \\circ q$ kills $U$. If the pullback is zero, surjectivity of $q$ forces $\\lambda=0$. Conversely, if $\\phi \\in U^0$, define $\\lambda(v+U)=\\phi(v)$; annihilation makes this well-defined and $q^{*}\\lambda=\\phi$.


</details>

<a id="section-375-10-restriction-sequence"></a>
### 10. Restriction sequence {#section-377-10-restriction-sequence}

Prove $0\\to U^0\\to V^{*}\\to U^{*}\\to 0$ is exact.

<details>
<summary>Hint 1</summary>

The middle arrow restricts functionals to U.

</details>

<details>
<summary>Hint 2</summary>

Extend a basis of U to extend any functional and identify the restriction kernel.

</details>

<details>
<summary>Solution</summary>

**Solution.** Inclusion is injective. The kernel of restriction consists exactly of functionals vanishing on $U$, namely $U^0$. Extend a basis of $U$ to one of $V$ and assign zero to new basis vectors to extend every functional on $U$; hence restriction is onto.


</details>

<a id="section-401-11-functorial-reversal"></a>
### 11. Functorial reversal {#section-403-11-functorial-reversal}

Prove $(S \\circ T)^{*}=T^{*} \\circ S^{*}$.

<details>
<summary>Hint 1</summary>

Evaluate each composite on one vector.

</details>

<details>
<summary>Hint 2</summary>

Composition order reverses because functionals are pulled back.

</details>

<details>
<summary>Solution</summary>

**Solution.** For any functional $\\chi$, $(S \\circ T)^{*}(\\chi)=\\chi \\circ S \\circ T=T^{*}(\\chi \\circ S)=T^{*}(S^{*}\\chi)$.


</details>

<a id="section-427-12-transpose-matrix"></a>
### 12. Transpose matrix {#section-429-12-transpose-matrix}

Prove the matrix of $T^{*}$ in dual bases is the transpose of the matrix of $T$.

<details>
<summary>Hint 1</summary>

Apply the pulled-back dual functional to an input basis vector.

</details>

<details>
<summary>Hint 2</summary>

Its value is one entry of the original matrix with the indices reversed.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $a_{ij}=\\psi^i(Tv_j)$, then the coefficient of $\\phi^j$ in $T^{*}\\psi^i$ is $(T^{*}\\psi^i)(v_j)=\\psi^i(Tv_j)=a_{ij}$. Thus row $i$, column $j$ becomes row $j$, column $i$.


</details>

<a id="section-453-13-kernel-of-the-transpose"></a>
### 13. Kernel of the transpose {#section-455-13-kernel-of-the-transpose}

Prove $\\operatorname{ker} T^{*}=(\\operatorname{im} T)^0$.

<details>
<summary>Hint 1</summary>

Unpack T*φ=0 as an equality of functionals.

</details>

<details>
<summary>Hint 2</summary>

It means φ vanishes on every reached output.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\psi \\in \\operatorname{ker} T^{*}$ iff $\\psi(Tv)=0$ for every $v$, exactly iff $\\psi$ vanishes on $\\operatorname{im} T$.


</details>

<a id="section-479-14-image-of-the-transpose"></a>
### 14. Image of the transpose {#section-481-14-image-of-the-transpose}

Prove $\\operatorname{im} T^{*}=(\\operatorname{ker} T)^0$ in finite dimension.

<details>
<summary>Hint 1</summary>

Show every pulled-back functional annihilates ker T.

</details>

<details>
<summary>Hint 2</summary>

For the reverse, factor through the image and extend the resulting functional to W.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every $\\psi \\circ T$ kills $\\operatorname{ker} T$, so one inclusion holds. Both spaces have dimension $\\operatorname{rank} T$: rank normal form gives $\\operatorname{rank} T^{*}=\\operatorname{rank} T$, while the annihilator dimension formula gives $\\operatorname{dim}(\\operatorname{ker} T)^0=\\operatorname{dim} V-\\operatorname{dim} \\operatorname{ker} T=\\operatorname{rank} T$.


</details>

<a id="section-505-15-compatibility-conditions"></a>
### 15. Compatibility conditions {#section-507-15-compatibility-conditions}

Let $T:\\mathbb{R}^3\\to \\mathbb{R}^3$, $T(x,y,z)=(x+y,y+z,x+2y+z)$. Find a condition on $b$ for $Tv=b$ to be solvable.

<details>
<summary>Hint 1</summary>

Compare the third output coordinate with the first two.

</details>

<details>
<summary>Hint 2</summary>

Then construct an input for every right side satisfying that relation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every output satisfies $b_3=b_1+b_2$. Conversely the first two equations can be solved, for example choose $y=0,x=b_1,z=b_2$, and the third then holds. Thus the single annihilating functional is $b_1+b_2-b_3$.


</details>

<a id="section-531-16-hyperplanes"></a>
### 16. Hyperplanes {#section-533-16-hyperplanes}

Prove two nonzero functionals have the same kernel iff one is a nonzero scalar multiple of the other.

<details>
<summary>Hint 1</summary>

Choose a vector on which one functional is one.

</details>

<details>
<summary>Hint 2</summary>

Subtract its measured multiple from an arbitrary vector to land in the common kernel.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose $v$ with $\\phi(v)=1$. Every $x$ decomposes as $(x-\\phi(x)v)+\\phi(x)v$, with the first term in $\\operatorname{ker} \\phi$. If $\\operatorname{ker} \\phi=\\operatorname{ker} \\psi$, then $\\psi(x)=\\phi(x)\\psi(v)$. Since $\\psi$ is nonzero, $\\psi(v)\\ne 0$, proving proportionality. The converse is immediate.


</details>

<a id="section-557-17-row-rank-equals-column-rank"></a>
### 17. Row rank equals column rank {#section-559-17-row-rank-equals-column-rank}

Give a duality proof.

<details>
<summary>Hint 1</summary>

Relate the transpose image to the annihilator of the original kernel.

</details>

<details>
<summary>Hint 2</summary>

Use the annihilator dimension formula and rank–nullity.

</details>

<details>
<summary>Solution</summary>

**Solution.** Column rank is $\\operatorname{rank} T$ for the matrix map. Rows are columns of the transpose and their span has dimension $\\operatorname{rank} T^{*}$. Rank normal form, or the transpose of it, gives $\\operatorname{rank} T^{*}=\\operatorname{rank} T$; hence row and column ranks agree.


</details>

<a id="section-583-18-adjoint-boundary"></a>
### 18. Adjoint boundary {#section-585-18-adjoint-boundary}

Explain why $T^{*}$ is not generally a map $W\\to V$.

<details>
<summary>Hint 1</summary>

State the actual domain and codomain of the algebraic dual.

</details>

<details>
<summary>Hint 2</summary>

An inner product can identify vectors with functionals only after extra structure is chosen.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its actual type is $W^{*}\\to V^{*}$. Turning it into $W\\to V$ requires chosen isomorphisms $W \\simeq W^{*}$ and $V \\simeq V^{*}$; inner products provide conjugate-sensitive versions of these. Without that extra structure, identifying vectors and functionals is noncanonical.


</details>

<a id="section-609-investigation-constraint-spaces-and-certificates"></a>

<a id="section-794-19-optional-practice-extensions"></a>
### 19. LSP-08-E19. Transpose with a nonstandard input basis {#section-798-lsp-08-e19-transpose-with-a-nonstandard-input-basis}

Over $\\mathbb Q$, let $T(s,t)=(s,t,s+t)$, use input basis $((1,1),(1,2))$, and use the standard output basis. Compute the matrix of $T$, the matrix of its algebraic dual in the corresponding dual bases, and the pullback of $\\psi(x,y,z)=x+3z$ in input dual coordinates. Check it by evaluation on both input basis vectors.

<details>
<summary>Hint 1</summary>

Build the two image columns in the standard target basis.

</details>

<details>
<summary>Hint 2</summary>

Transpose that matrix, apply it to ψ's coefficients, and check by evaluating ψ on the images.

</details>

<a id="section-814-lsp-08-e20-an-invariant-annihilator-is-a-different-subs"></a>
### 20. LSP-08-E20. An invariant annihilator is a different subspace {#section-816-lsp-08-e20-an-invariant-annihilator-is-a-different-subs}

Let $Te_1=0$ and $Te_2=e_1$ on $F^2$, and let $U=Fe_1$. Find $U^0$ and the matrix of $T^*$ in the standard dual basis. Verify its restriction to $U^0$ and compare it with the dual of the induced quotient operator. Explain why the original complementary line $Fe_2$ need not be invariant.

<details>
<summary>Hint 1</summary>

Find functionals vanishing on e₁.

</details>

<details>
<summary>Hint 2</summary>

Compute their pullbacks and compare with the quotient action; do not replace the annihilator by an arbitrary primal complement.

</details>

<a id="section-832-20-solutions-to-the-optional-practice-extensions"></a>

## Solutions

<a id="section-834-20-solutions-to-the-optional-practice-extensions"></a>
<a id="section-834-lsp-08-e19-transpose-with-a-nonstandard-input-basis-sol"></a>
### LSP-08-E19. Transpose with a nonstandard input basis — solution {#section-836-lsp-08-e19-transpose-with-a-nonstandard-input-basis-sol}

<details>
<summary>Solution</summary>

The two output columns are $(1,1,2)^{\\mathsf T}$ and $(1,2,3)^{\\mathsf T}$, so the matrix is $\\begin{pmatrix}1&1\\\\1&2\\\\2&3\\end{pmatrix}$. The dual matrix is its transpose $\\begin{pmatrix}1&1&2\\\\1&2&3\\end{pmatrix}$. The output measurement column is $(1,0,3)^{\\mathsf T}$, whose pullback coordinates are $(7,10)^{\\mathsf T}$. Directly $\\psi(T(1,1))=1+3\\cdot2=7$ and $\\psi(T(1,2))=1+3\\cdot3=10$. In standard input coordinates the pullback is $4s+3t$; evaluating on the nonstandard basis gives the same dual coefficients.


</details>

<a id="section-844-lsp-08-e20-an-invariant-annihilator-is-a-different-subs"></a>
### LSP-08-E20. An invariant annihilator is a different subspace — solution {#section-846-lsp-08-e20-an-invariant-annihilator-is-a-different-subs}

<details>
<summary>Solution</summary>

Writing the dual coordinates as $\\epsilon^1,\\epsilon^2$, $U^0=F\\epsilon^2$. The dual matrix is $\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$, so $T^*\\epsilon^2=0$ and the annihilator restriction is zero. The quotient $V/U$ is spanned by $e_2+U$, and its induced operator is zero, so its dual is also zero. Yet $Te_2=e_1\\notin Fe_2$. Preserving the annihilator in the dual is equivalent to preserving $U$, not to preserving an arbitrarily chosen complement of $U$.


</details>

<a id="section-854-21-proof-boundary-for-the-dual-space-extensions"></a>
`;export{e as default};