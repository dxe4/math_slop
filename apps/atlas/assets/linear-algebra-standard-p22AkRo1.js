var e=`---
id: course-linear-algebra-standard
title: "Linear algebra II"
level: undergraduate
estimated_minutes: 960
license: CC BY-SA 4.0
---

# Linear algebra II

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](/courses/atlas-linear-algebra-standard/) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

This standard course treats a matrix as three things at once: a system of equations, a coordinate description of a linear map, and an object to compute with. It assumes algebra, coordinate vectors, and willingness to justify claims. The required route needs no calculus. [A first encounter with linear algebra](#/item/deep-dive-linear-algebra-first-encounter) gives a gentler geometric entry; the [eigenvector laboratory](#/item/visual-lab-eigenvectors) lets you test the coordinate and eigenvector claims below.

The general finite-dimensional results in Units 1–5 work over an arbitrary field $\\mathbb F$. The polynomial bridge in Units 3–4 uses $\\mathbb R$, and its final boundary example explicitly leaves finite dimension. Length, orthogonality, QR, SVD, and numerical condition numbers in Units 6–9 and 11 use $\\mathbb R$ or $\\mathbb C$ with their standard positive-definite inner products. A complex inner product here is conjugate-linear in its **first** slot and linear in its second. The spectral theorem, orthonormal-basis extension, and general canonical-form existence are named imports where used. Plan roughly 16 hours for the eleven readings, calculations, proof audits, and capstone; the linked book chapters and an extended computational project need additional time. Each unit should end with an explanation you can reconstruct, not merely a formula you can invoke.

## Entry diagnostic and study route

Try these before Unit 1:

1. Solve $2x+y=1$, $x-y=2$.
2. Decide whether $(1,1,0)$ lies in the span of $(1,0,1)$ and $(0,1,1)$.
3. Multiply
   $\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}
    \\begin{pmatrix}3\\\\-1\\end{pmatrix}$.
4. State what must be proved to show that a set is a vector subspace.

The answers are $(x,y)=(1,-1)$; no, because matching the first two
coordinates would force a third coordinate of $2$; $(1,-1)^T$; and closure
under addition and scalar multiplication together with a zero vector (or an
equivalent nonempty linear-combination test). If the calculations are
difficult, use the first chapters of
[Linear Algebra: Structure and Proofs](#/item/book-linear-algebra-structure-proofs)
as prerequisite repair rather than memorizing later formulas.

Treat the eleven units as a guided spine through the larger books:

| Stage | Course units | Sustained reading and evidence |
| --- | --- | --- |
| 1. Generate and solve | 1–2 | [Vector spaces](#/item/book-linear-algebra-structure-proofs?chapter=vector-spaces-subspaces-fields), [span and exchange](#/item/book-linear-algebra-structure-proofs?chapter=span-independence-exchange), and a row-reduction audit |
| 2. Maps and coordinates | 3–4 | The polynomial bridge and B1–B5 below; continue to [rank–nullity](#/item/book-linear-algebra-structure-proofs?chapter=linear-maps-isomorphism-rank-nullity) and [change of basis](#/item/book-linear-algebra-structure-proofs?chapter=matrices-and-change-of-basis) |
| 3. Volume and approximation | 5–7 | [Determinants](#/item/book-linear-algebra-structure-proofs?chapter=exterior-powers-and-determinants), [orthogonal decomposition](#/item/book-linear-algebra-structure-proofs?chapter=inner-products-orthogonal-decomposition), and one verified QR solve |
| 4. Spectral structure | 8–9 | [Eigenvalues](#/item/book-linear-algebra-structure-proofs?chapter=eigenvalues-and-diagonalization), [spectral theorems](#/item/book-linear-algebra-structure-proofs?chapter=finite-dimensional-spectral-theorems), and an SVD reconstruction |
| 5. Transfer and computation | 10–11 | [Dual spaces](#/item/book-linear-algebra-structure-proofs?chapter=dual-spaces-annihilators-transpose), [tensor products](#/item/book-linear-algebra-structure-proofs?chapter=multilinear-maps-tensor-products), and a conditioning report |

Complete a stage only when you can produce its evidence without copying a
worked solution. The linked chapters contain the longer proofs and exercise
program; this page supplies the route and cumulative checks.

## Unit 1 — Elimination and the four fundamental subspaces

Row operations replace equations by reversible combinations, so they preserve the solution set of $Ax=b$. Reduced row-echelon form exposes pivot variables, free variables, consistency, and the null space.

For

$$
A=\\begin{pmatrix}
1&2&1\\\\
2&4&3
\\end{pmatrix},
$$

subtract twice row one from row two to obtain $\\begin{pmatrix}1 & 2 & 1 \\\\ 0 & 0 & 1\\end{pmatrix}$. Pivots occur in columns 1 and 3, so rank is 2. Solving $Ax=0$ gives $x_{3}=0$, $x_{1}=-2x_{2}$, hence

$$\\ker A=\\operatorname{span}\\{(-2,1,0)\\}.$$

The row space and column space both have dimension 2, but row reduction does not preserve the original column space. Pivot *positions* tell us to take columns 1 and 3 from the original matrix as a column-space basis.

After Units 2–3, test that distinction in the
[exact rank-factorization investigation](#/labs?lab=visual-lab-rank-factorization):
an output basis turns a map into two maps, but replacing original columns
with reduced columns can change its output plane while preserving its kernel.

**Invariant.** Elimination preserves all linear relations among solutions, but not every geometric feature of the column picture.

### A pivot that can disappear: predict, branch, verify

Before dividing by a symbolic coefficient, ask when it is zero. For the real
system $x+y+z=1$, $x+ay+z=b$, subtracting the first equation from the second
gives $(a-1)y=b-1$. Predict the solution geometry for $(a,b)=(2,3)$,
$(1,1)$, and $(1,2)$ before opening the
[exact parameter laboratory](#/labs?lab=visual-lab-parameter-systems).
The coefficient rank alone cannot tell whether a specified right side is
attainable: the last two cases have the same matrix and kernel, but different
consistency. Explain every division in your work, and verify a particular
solution in the original equations. The laboratory's
[complete investigation](#/item/visual-lab-parameter-systems) adds a third
equation as a changed task and supplies worked solutions. Allow an optional
60–90 minutes beyond this course's 16-hour spine for the full investigation.
Return after Unit 3 to prove why each nonempty solution set is one particular
solution plus the kernel. An empty fiber still leaves the linear map and its
kernel well defined.

### Four-subspace workshop

For the same $2\\times3$ matrix, rank is $2$. The dimensions of its four
fundamental subspaces are therefore

$$
\\dim\\operatorname{col}A=2,\\qquad
\\dim\\ker A=1,\\qquad
\\dim\\operatorname{row}A=2,\\qquad
\\dim\\ker A^{*}=0.
$$

The column space is all of $\\mathbb R^2$, while the left null space is trivial.
The null vector $(-2,1,0)$ is orthogonal to both original rows, as it must be.
This is more than a dimension table: the decompositions

$$
\\mathbb R^3=\\operatorname{row}A\\oplus\\ker A,
\\qquad
\\mathbb R^2=\\operatorname{col}A\\oplus\\ker A^{*}
$$

explain which input directions are visible and which output directions are
unattainable. Verify dimensions first, then verify orthogonality with dot
products.

## Unit 2 — Vector spaces, basis, and dimension

A vector space is a set with addition and scalar multiplication satisfying closure, associativity, commutativity of addition, zero and inverses, distributivity, and compatible scalar laws. Examples include $\\mathbb R^{n}$, polynomials of degree at most $m$, matrices of a fixed shape, and sequences satisfying a homogeneous linear recurrence such as $a_{n+2}=a_{n+1}+a_n$.

A list is **independent** when only the zero coefficient combination gives zero. It **spans** when every vector has some representation. A **basis** does both, making coordinates exist and be unique.

Why do all finite bases have equal size? Here is the full exchange step. Suppose $v_1,\\ldots,v_n$ is independent and $w_1,\\ldots,w_m$ spans $V$. After $j-1$ steps we have a spanning list consisting of $v_1,\\ldots,v_{j-1}$ and $m-j+1$ unreplaced $w$'s. Express $v_j$ in this list. At least one coefficient of an unreplaced $w$ is nonzero: otherwise $v_j$ would be in the span of the preceding $v$'s, contradicting independence. Solve this expression for that $w$. Substituting it into every old spanning expression shows that replacing this $w$ by $v_j$ preserves span. Induction consumes one *distinct* slot per $v_j$; if $n>m$, step $m+1$ would require an unreplaced slot when none exists, contradicting independence. Thus $n\\le m$. Apply the inequality in both directions to two bases to obtain equal sizes; their common size is dimension.

The same finite argument proves basis extension. Starting with an independent list, append a vector outside its span whenever it does not yet span $V$. Each append preserves independence. A fixed finite spanning list bounds its length by exchange, so the process stops with a basis. This finite-dimensional hypothesis matters; no assertion about arbitrary infinite bases is needed here.

## Unit 3 — Linear maps and rank–nullity

What survives when the vectors are polynomials rather than arrows? Consider a
machine that sends $a+bx+cx^2$ to $b+2cx$. Every constant term disappears,
yet every linear polynomial can appear as an output. We will explain both
features before recording the machine as a matrix.

**Preparation for the bridge.** Use addition and scalar multiplication,
coefficient comparison, span, and independence from Unit 2. Here
$P_n(\\mathbb R)$ means polynomials of degree **at most** $n$, including the
zero polynomial. Polynomials of degree exactly $n$ would not form a vector
space: adding opposites gives zero. The list $(1,x,\\ldots,x^n)$ is a basis
because every polynomial has one and only one coefficient list. Thus
$\\dim P_n(\\mathbb R)=n+1$. If coefficients or expansion need repair, use
[polynomials](#/topic/polynomials); if basis coordinates need repair, use
[bases and coordinate isomorphisms](#/item/book-linear-algebra-structure-proofs?chapter=basis-dimension-coordinates).
No calculus is needed: **formal differentiation** is the coefficient rule
$D(1)=0$ and $D(x^j)=jx^{j-1}$ for $j\\ge1$, extended term by term.

### One rule, two questions: what disappears and what is reached?

A map $T\\colon V\\to W$ is **linear** when
$T(au+bv)=aT(u)+bT(v)$ for every $u,v\\in V$ and every pair of scalars.
For

$$
D:P_2(\\mathbb R)\\longrightarrow P_1(\\mathbb R),
\\qquad D(a+bx+cx^2)=b+2cx,
$$

coefficient comparison proves linearity. If $p=a+bx+cx^2$ and
$q=d+ex+fx^2$, then

$$
D(sp+tq)=(sb+te)+2(sc+tf)x=sD(p)+tD(q).
$$

The coefficients of $x$ and $x^2$ determine the output; the constant
coefficient makes no contribution. Formal differentiation agrees with the
usual derivative on polynomials, but this proof uses only algebra.

The **kernel** is a set of input vectors and the **image** is a set of output
vectors:

$$
\\ker T=\\{v\\in V:T(v)=0_W\\},\\qquad
\\operatorname{im}T=\\{T(v):v\\in V\\}\\subseteq W.
$$

Both are subspaces. Linearity gives $T(0)=0$; if $T(u)=T(v)=0$, then
$T(au+bv)=0$. If $y_1=T(u)$ and $y_2=T(v)$, then
$ay_1+by_2=T(au+bv)$ lies in the image. These closure proofs work over any
field, without drawing a plane.

For our polynomial map, $b+2cx$ is the zero polynomial exactly when both
coefficients vanish. Over $\\mathbb R$, this means $b=c=0$, while $a$ is
arbitrary. Therefore

$$\\ker D=\\operatorname{span}\\{1\\}.$$

The kernel contains all constant polynomials; its basis has the single
vector $1$. To determine the image, start with an **arbitrary** desired
output $r+sx\\in P_1(\\mathbb R)$. The input
$rx+(s/2)x^2$ maps to it. Hence

$$\\operatorname{im}D=P_1(\\mathbb R)=\\operatorname{span}\\{1,x\\}.$$

Exhibiting several outputs would only establish that those outputs occur.
Constructing a preimage for an arbitrary $r+sx$ establishes the whole image.

### Existence, uniqueness, and all the inputs for one output

A map is **injective** when equal outputs force equal inputs, and
**surjective** when every vector in its stated codomain is an output. For a
linear map,

$$T(u)=T(v)\\quad\\Longleftrightarrow\\quad u-v\\in\\ker T.$$

Consequently $T$ is injective exactly when $\\ker T=\\{0\\}$: a nonzero kernel
vector has the same output as zero, while a trivial kernel forces $u-v=0$.
Surjectivity means $\\operatorname{im}T=W$. Our $D$ is surjective and fails to
be injective, since $D(0)=D(1)=0$.

More precisely, if $T(p_0)=q$, then **all** inputs mapping to $q$ form
$p_0+\\ker T=\\{p_0+k:k\\in\\ker T\\}$. Adding a kernel vector preserves the
output; conversely, subtracting two preimages produces a kernel vector.
For example,

$$D(p)=3-4x\\quad\\Longleftrightarrow\\quad p=3x-2x^2+a,
\\qquad a\\in\\mathbb R.$$

This set, called a **fiber**, has one free constant. It is an affine
translate of the kernel and is not itself a subspace when the output is
nonzero: it does not contain the zero polynomial. An extra condition such
as $p(0)=5$ selects a unique input $5+3x-2x^2$. The kernel describes exactly
which information the output leaves undetermined.

The codomain is part of the map. The same rule viewed as
$\\widehat D:P_2(\\mathbb R)\\to P_2(\\mathbb R)$ still has image $P_1(\\mathbb R)$,
so it is not surjective: $x^2$ belongs to its codomain and has no preimage.
Its kernel is unchanged. Always state the spaces before deciding whether
a map is onto.

### Why the dimensions add up

Now let $T:V\\to W$ be linear with **finite-dimensional domain** $V$. The
codomain need not be finite-dimensional; the image will be. Call
$\\dim\\ker T$ the **nullity** and $\\dim\\operatorname{im}T$ the **rank**.

Choose a basis of $\\ker T$, say $k_{1},\\ldots ,k_r$, and extend it to a basis

$k_{1},\\ldots ,k_r,v_{1},\\ldots ,v_s$

of $V$. Then $T(v_{1}),\\ldots ,T(v_s)$ form a basis of
$\\operatorname{im}T$: they span because the kernel terms disappear, and
independence follows as follows. If $\\sum_j c_jT(v_j)=0$, then
$\\sum_jc_jv_j\\in\\ker T$, so it equals $\\sum_i d_ik_i$. Independence of the
extended basis in $V$ forces every $c_j$ (and $d_i$) to vanish. Therefore

$$\\dim\\ker T+\\dim\\operatorname{im}T=\\dim V.$$

This is rank–nullity. It counts every input degree of freedom exactly once: visible in the image or lost in the kernel.

For $D:P_2(\\mathbb R)\\to P_1(\\mathbb R)$, the kernel basis $(1)$ extends to
$(1,x,x^2)$, whose other two vectors map to $1,2x$. Those images form a basis
of $P_1(\\mathbb R)$. Thus nullity $1$ plus rank $2$ equals domain dimension
$3$. This is the basis-extension proof with every vector visible.

For Unit 1's $A:\\mathbb R^3\\to\\mathbb R^2$, the kernel has basis $(-2,1,0)$ and the original columns 1 and 3, $(1,2)$ and $(1,3)$, form an image basis. Thus $1+2=3$. Row operations locate pivot *indices*; take the corresponding columns from the original matrix. Row operations can change column space in general: $\\begin{pmatrix}1&0\\\\1&0\\end{pmatrix}$ and its echelon form $\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ have different column spaces. Here both the original and reduced matrices have full row rank, so both column spaces happen to equal $\\mathbb R^2$.

### Where the finite-dimensional hypothesis does work

If $V$ and $W$ have the same finite dimension $n$, rank–nullity proves

$$T\\text{ injective}\\quad\\Longleftrightarrow\\quad T\\text{ surjective}.$$

Indeed, injectivity means nullity zero, hence rank $n$, so the image is all
of $W$. Conversely surjectivity gives rank $n$, hence nullity zero. Here we
use the finite-dimensional fact that a subspace of $W$ with dimension
$\\dim W$ must be $W$: a basis of a proper subspace could be extended by
another independent vector. Our polynomial map has dimensions $3$ and $2$,
so this corollary does not apply to it.

Even using the **same space** on both sides is insufficient without finite
dimension. Let $P(\\mathbb R)$ contain all real polynomials, each with
finitely many nonzero coefficients, and define
$D:P(\\mathbb R)\\to P(\\mathbb R)$ by the same formal rule. Given
$q=\\sum_{j=0}^m a_jx^j$, the polynomial

$$p=\\sum_{j=0}^m\\frac{a_j}{j+1}x^{j+1}$$

has $D(p)=q$, so this map from the space to itself is surjective. Its kernel still consists
of constants, so it is not injective. The space is infinite-dimensional
because $1,x,\\ldots,x^m$ is independent for every $m$, with no finite bound
on the list length. The finite-dimensional corollary cannot be extended
by simply deleting its hypothesis. No infinite sums, convergence, or
infinite-cardinal subtraction are needed for this counterexample.

Before continuing, explain why $D:P_2\\to P_1$, $\\widehat D:P_2\\to P_2$, and
$D:P\\to P$ have different implications for the injective/onto equivalence.
Keep the real scalar field in each statement: the divisions above use it.

### Optional proof workshop: what can the measurements determine?

Suppose a device records $S(x,y,z)=(x+y,y+z)$ and you need the target
$T_\\lambda(x,y,z)=x+\\lambda y+z$. You cannot recover every original input,
but some targets may still be forced by its recordings. In the
[linear-information investigation](#/labs?lab=visual-lab-linear-information),
construct indistinguishable inputs before deciding whether a decoder exists.
Prove the criterion $\\ker S\\subseteq\\ker T$ and state exactly where the
induced map is unique. Then transfer the idea to four dependent generator
assignments and distinguish their span from the ambient space. The
[full investigation](#/item/visual-lab-linear-information) contains six
exercises and complete reasoning. Allow an optional 75–90 minutes beyond
the course spine. This workshop leads toward the existing quotient theorem
without requiring quotient notation at its start.

## Unit 4 — Coordinates and change of basis

### Recording a map between different spaces

An ordered domain basis $B=(b_1,\\ldots,b_n)$ gives input coordinates; an
ordered codomain basis $C=(c_1,\\ldots,c_m)$ gives output coordinates.
Define the $m\\times n$ matrix $[T]_{C\\leftarrow B}$ by placing
$[T(b_j)]_C$ in column $j$. If $p=\\sum_j u_jb_j$, linearity gives

$$[T(p)]_C=[T]_{C\\leftarrow B}[p]_B.$$

The number of columns counts domain basis vectors; the number of rows
counts codomain basis vectors. For the polynomial map, use $B=(1,x,x^2)$
and $C=(1,x)$. Since $D(1)=0$, $D(x)=1$, and $D(x^2)=2x$,

$$A=[D]_{C\\leftarrow B}=\\begin{pmatrix}0&1&0\\\\0&0&2\\end{pmatrix}.$$

For $p=2-x+3x^2$, the input coordinates are $(2,-1,3)^T$ and multiplication
gives $(-1,6)^T$. This is the output polynomial $-1+6x$. The coordinate
column and the polynomial play different roles; the chosen basis converts
between them. Similarly $\\ker A=\\operatorname{span}\\{(1,0,0)^T\\}$ records
the polynomial kernel $\\operatorname{span}\\{1\\}$ in $B$-coordinates.

Now change the domain basis to $B'=(1,1+x,(1+x)^2)$ and keep $C$. Expanding
the new basis vectors in $B$ gives

$$
P=\\begin{pmatrix}1&1&1\\\\0&1&2\\\\0&0&1\\end{pmatrix},
\\qquad [p]_B=P[p]_{B'}.
$$

The triangular equations can be solved uniquely for every input
coefficient list, proving $B'$ is a basis. The new matrix is

$$
A'=[D]_{C\\leftarrow B'}=AP
=\\begin{pmatrix}0&1&2\\\\0&0&2\\end{pmatrix}.
$$

Its columns can also be checked directly: the new basis images are
$0$, $1$, and $2+2x$. For the same polynomial $p=2-x+3x^2$,
$[p]_{B'}=(6,-7,3)^T$, since
$6-7(1+x)+3(1+x)^2=2-x+3x^2$. Then
$A'(6,-7,3)^T=(-1,6)^T$, agreeing with the old route. The entries changed;
the polynomial action, rank, and nullity agree.

If the codomain basis also changes, let $Q$ have the new codomain basis
vectors as columns in the old codomain coordinates. Since
$[T(p)]_C=Q[T(p)]_{C'}$, the general law is

$$[T]_{C'\\leftarrow B'}=Q^{-1}[T]_{C\\leftarrow B}P.$$

Follow a new input column through the rightmost conversion $P$, the old
map, and the output conversion $Q^{-1}$. Here $P$ is $n\\times n$, $Q$ is
$m\\times m$, and the middle matrix is $m\\times n$; the sizes check every
step. For example, with $C'=(1,2x)$, $Q=\\operatorname{diag}(1,2)$ and

$$[D]_{C'\\leftarrow B'}=\\begin{pmatrix}0&1&2\\\\0&0&1\\end{pmatrix}.$$

The output coordinates of $D(p)$ are now $(-1,3)^T$, which still represent
$-1+6x$. This law is useful for rectangular maps as well as square ones.

### Similarity uses one basis on both sides of an endomorphism

An **endomorphism** is a linear map from a space to itself. When the same
old and new bases are used for its inputs and outputs, $Q=P$, giving the
special law $P^{-1}AP$. Our $2\\times3$ differentiation matrix does not
have this form: its input and output spaces have different dimensions.

Let $B=(b_{1},\\ldots ,b_{n})$ be a basis and place the $b$ coordinates in columns of $P$. Then

$x_{\\mathrm{std}}=P[x]_B$, so
$[x]_B=P^{-1}x_{\\mathrm{std}}$.

If $A$ represents $T$ in standard coordinates and $C$ represents it in basis $B$, the two routes for an arbitrary coordinate column $c$ give

$$A(Pc)=T(Pc)=P(Cc).$$

Because this holds for every $c$, $AP=PC$. Multiplying by $P^{-1}$ on the left gives $C=P^{-1}AP$. Conversely $AP=PC$ follows by multiplying this last equation by $P$. The matrix equality certifies that the same physical linear map is being recorded in two coordinate systems.

This similarity transformation changes the coordinate record, not the map. Multiplication by invertible matrices preserves rank. **Preview of later invariants:** $C-\\lambda I=P^{-1}(A-\\lambda I)P$, so determinant multiplicativity gives the same characteristic polynomial (and therefore determinant and eigenvalues over a splitting field). Finally $\\operatorname{tr}(XY)=\\operatorname{tr}(YX)$ by summing $\\sum_{i,j}X_{ij}Y_{ji}$ in the opposite order, hence $\\operatorname{tr}(P^{-1}AP)=\\operatorname{tr}(APP^{-1})=\\operatorname{tr}A$. Individual entries generally do change. The determinant and eigenvalue language is developed in Units 5 and 8; the coordinate proof above does not require it.

**Worked check.** For
$B=((1,1),(1,-1))$,

$$
P=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix},
\\qquad
A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}.
$$

Direct multiplication gives
$P^{-1}AP=\\operatorname{diag}(3,1)$. The new basis reveals two independent
scaling actions.

**Predict, inspect, prove.** Before opening the [eigenvector laboratory](#/item/visual-lab-eigenvectors), predict the coordinates of the geometric vector $x=(2,0)$ in this basis and its image under both routes. The coordinate column is $(1,1)$; $Ax=(4,2)$, while $C(1,1)=(3,1)$ and $P(3,1)=(4,2)$. Inspect those two descriptions in the laboratory, change to an oblique basis, then prove $AP=PC$ for the new basis. The arrows in a coordinate diagram show coefficients along basis vectors. In an oblique basis, their ordinary plotted coordinate length is generally **not** physical length: for $x=Pc$, $\\lVert x\\rVert^2=c^{*}(P^{*}P)c$. Only an orthonormal $P$ makes this $c^{*}c$.

## Unit 5 — Determinants without cofactor mysticism

The determinant is the unique alternating multilinear function of a square matrix’s columns that gives 1 on the identity. Multilinearity says scaling or splitting one column scales or splits the value. Alternation says repeated columns give zero and swapping columns changes the sign. These are algebraic statements over any field; over $\\mathbb R$, the value also measures oriented volume. In characteristic two, changing the sign leaves the scalar unchanged, so the geometric language of orientation should not be read into that case.

These properties imply elimination rules and
$\\det(AB)=(\\det A)(\\det B)$. To see the product rule, fix $A$: as a function of the columns of $B$, $\\det(AB)$ is alternating and multilinear and has value $\\det A$ at $B=I$; uniqueness makes it $\\det A\\det B$. A dependent column is a combination of the others and gives determinant zero by multilinearity and alternation. Conversely, independent columns form a basis, hence an invertible matrix; the product rule with its inverse gives $\\det A\\ne0$. Cofactor expansion follows from decomposing columns into standard basis vectors; it is a consequence, not the meaning.

For triangular matrices, the determinant is the diagonal product. In computation, use elimination while accounting for row swaps and scalings rather than recursively expanding cofactors.

### Optional workshop: when coefficients must stay integers

The [integer-image workshop](#/labs?lab=visual-lab-integer-image) keeps
$D=\\operatorname{diag}(2,3)$ fixed while changing its coefficient domain.
It has full rational rank but reaches only $2\\mathbb Z\\times3\\mathbb Z$
with integer inputs. Its columns are a basis of that image, not of the larger
codomain. The changed task constructs an onto map $\\mathbb Z^3\\to\\mathbb Z^2$
whose original column list contains no basis of its image. Integer combinations
produce a basis, and a unimodular coordinate change proves every fiber formula.
The [complete investigation](#/item/visual-lab-integer-image) supplies six
worked exercises and connects divisibility, index and rank. Allow an optional
90 minutes beyond the course spine. Return after Unit 7 to identify exactly
where selecting an image basis from original columns uses a field; the accepted
field rank-factorization statements retain their stated hypotheses.

## Unit 6 — Inner products, projection, and least squares

An inner product supplies length
$\\lVert v\\rVert=\\sqrt{\\langle v,v\\rangle}$ and orthogonality. If
$q_{1},\\ldots ,q_k$ is orthonormal, projection onto their span is

$$\\operatorname{proj}_S b=\\sum_i\\langle q_i,b\\rangle q_i.$$

Let $p$ denote that displayed sum and $r=b-p$. For each $j$,
$\\langle q_j,r\\rangle=\\langle q_j,b\\rangle-\\sum_i\\langle q_i,b\\rangle\\langle q_j,q_i\\rangle=0$, so $r$ is perpendicular to all of $S$. Conversely, if $p'\\in S$ and $b-p'$ is perpendicular to $S$, then $p-p'\\in S$ and is perpendicular to itself, hence is zero. Pythagoras proves both closest-point optimality and uniqueness: for any $s\\in S$,

$$
\\lVert b-s\\rVert^{2}
=\\lVert b-\\operatorname{proj}_S b\\rVert^{2}
 +\\lVert\\operatorname{proj}_S b-s\\rVert^{2}.
$$

For a full-column-rank matrix $A$, the columns give a bijection from coefficient vectors to $S=\\operatorname{im}A$. Thus least squares minimizes $\\lVert Ax-b\\rVert^{2}$ precisely when $Ax=p$ above; the coefficient vector is unique. The residual $b-Ax$ is perpendicular to every column, so

$A^{*}(Ax-b)=0$, giving $A^{*}Ax=A^{*}b$.

Here $A^{*}$ is transpose over the reals and conjugate transpose over the
complexes. The normal equations explain the geometry but can be numerically
poor because they square the 2-norm condition number for full-rank $A$: the positive eigenvalues of $A^{*}A$ are the squared singular values of $A$. That conditioning statement uses the spectral theorem, developed in Unit 9.

### Does the geometry survive a coordinate change?

In the [metric-transport workshop](#/labs?lab=visual-lab-metric-projection),
a sheared coordinate record gives a nonsymmetric matrix for a physical
orthogonal projector. Decide whether the geometry changed before testing
ordinary symmetry: carrying $G=P^TP$ along preserves the original problem,
while deliberately selecting the identity coefficient metric defines a
different nearest-point problem. The
[complete investigation](#/item/visual-lab-metric-projection) checks both
idempotence and metric self-adjointness, then changes to a polynomial metric
defined by three sample values. It proves positivity on $P_2$ and explains
why degeneracy on $P_3$ produces nonuniqueness only when the target contains
an invisible direction. Allow an optional 90 minutes beyond this course's
spine. Return after Unit 10 to connect the metric adjoint to pulling
functionals backward; the main projection tasks need only Units 3–4 and 6.

## Unit 7 — Factorizations are structured explanations

Begin with the purpose of $A=CR$: the independent columns of $C$ form an
output basis, and each column of $R$ records an original column's coordinates
in that basis. The map acts as $x\\mapsto Rx\\mapsto C(Rx)$. The intermediate
dimension is the rank, the smallest possible for an exact factorization.
The [interactive workshop](#/labs?lab=visual-lab-rank-factorization) asks you
to choose the columns, exposes the original-versus-reduced column trap, and
changes to nonadjacent pivots and a zero column. Its
[full investigation](#/item/visual-lab-rank-factorization) proves the common
kernel and minimal-dimension claims and supplies six worked exercises.
Allow an optional 90 minutes beyond the course's 16-hour spine. This develops
the basis and kernel ideas of Units 2–3 before imposing extra numerical or
geometric structure on the factors below.

Gaussian elimination yields $PA=LU$: a permutation, lower triangular elimination record, and upper triangular result. Solving many systems with one matrix becomes two triangular solves after one factorization.

For a full-column-rank real or complex matrix, Gram–Schmidt yields a thin factorization $A=QR$, where $Q$ has orthonormal columns and $R$ is invertible and upper triangular. Modified Gram–Schmidt or Householder reflections are usually more stable than the classroom formula. Least squares becomes $Rx=Q^{*}b$, avoiding $A^{*}A$.

For real symmetric or complex Hermitian positive-definite $A$, Cholesky gives $A=LL^{*}$. Positivity is essential: an arbitrary symmetric matrix need not have a real Cholesky factor.

Each factorization has hypotheses and a purpose. “Factor the matrix” is incomplete until the problem, structure, and error model are named.

### Exact QR workshop

Let, over $\\mathbb R$,

$$
A=\\begin{pmatrix}1&1\\\\1&-1\\\\0&1\\end{pmatrix},
\\qquad
b=\\begin{pmatrix}2\\\\0\\\\2\\end{pmatrix}.
$$

The first normalized column is
$q_1=(1,1,0)^T/\\sqrt2$. The second column $(1,-1,1)^T$ is already
orthogonal to the first, because their dot product is zero. Its norm is
$\\sqrt3$, so $q_2=(1,-1,1)^T/\\sqrt3$. Thus

$$
R=Q^{*}A
=\\begin{pmatrix}
\\sqrt2&0\\\\
0&\\sqrt3
\\end{pmatrix}.
$$

Here $Q^{T}b=(\\sqrt2,4/\\sqrt3)^T$. The least-squares coefficients solve
$Rx=Q^{T}b$, giving
$x_1=1$ and $x_2=4/3$. The fitted vector is
$Ax=(7/3,-1/3,4/3)^T$, and the **nonzero** residual is

$$r=b-Ax=(-1/3,1/3,2/3)^T.$$

Check both column dot products: $(1,1,0)\\cdot r=0$ and $(1,-1,1)\\cdot r=0$, so $A^Tr=(0,0)^T$. Also $\\lVert r\\rVert^2=2/3$. For another coefficient vector $x+h$, the squared error is $2/3+\\lVert Ah\\rVert^2$, strictly larger when $h\\ne0$ because these columns are independent. The residual and strict inequality are the actual least-squares certificate.

## Unit 8 — Eigenvalues, diagonalization, and canonical failure

An eigenpair satisfies $Av=\\lambda v$, $v\\ne 0$. Eigenvalues are roots of
$\\det(A-\\lambda I)$. If an $n\\times n$ matrix has a basis of eigenvectors,
then $A=PDP^{-1}$, making powers and matrix functions simple.

Distinct eigenvalues have independent eigenvectors over any field containing those eigenvalues. Proof: choose a dependence with the fewest nonzero coefficients, say $\\sum_{i=1}^{t}c_iv_i=0$ with every $c_i\\ne0$. It has $t\\ge2$. Apply $A-\\lambda_tI$. The last term vanishes and each earlier coefficient becomes $c_i(\\lambda_i-\\lambda_t)\\ne0$, giving a dependence with fewer terms, a contradiction.

Repeated roots need care. Put $J=\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}=I+N$, where $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ and $N^2=0$. Its characteristic polynomial is $(\\lambda-1)^2$, while $\\ker(J-I)=\\ker N=\\operatorname{span}\\{(1,0)\\}$, so there cannot be a basis of eigenvectors. The binomial theorem (or induction) gives $J^n=I+nN=\\begin{pmatrix}1&n\\\\0&1\\end{pmatrix}$ for every integer $n\\ge0$; over $\\mathbb R$ or $\\mathbb C$ the off-diagonal entry grows linearly. In positive characteristic, $n$ means its image in the field, so the growth interpretation does not apply. General Jordan and rational canonical-form existence are advanced theorems imported from the [proof-oriented linear algebra book](#/item/book-linear-algebra-structure-proofs); the concrete defective example needs neither theorem.

**Optional investigation — what an eigenvalue test misses.** The [primary-projector workshop](#/item/visual-lab-polynomial-projectors) develops the next step from this defective example. Keep a polynomial's values at the eigenvalues fixed while changing its first-order coefficients; find why every ordinary eigenvector can pass although the resulting operator is not idempotent. Prove complementary primary-space projections by polynomial divisibility, then transfer the construction to reflection plus second differences on $P_3(\\mathbb R)$. Its separate $P_4$ task asks which domain hypothesis changed. This is an algebraic direct-sum construction; Euclidean orthogonality requires additional geometry.

## Unit 9 — The singular value decomposition

Every real or complex $m\\times n$ matrix has a singular value decomposition

$$A=U\\Sigma V^{*},$$

where $U$ and $V$ are unitary (orthogonal over the reals) and $\\Sigma$ is
rectangular diagonal with nonnegative entries
$\\sigma_1\\ge\\cdots\\ge\\sigma_r>0$. Here we **import** the finite-dimensional real symmetric/complex Hermitian spectral theorem: a self-adjoint matrix has an orthonormal eigenbasis with real eigenvalues. Since $\\langle v,A^{*}Av\\rangle=\\lVert Av\\rVert^2\\ge0$, those eigenvalues are nonnegative. Derive the nonzero part from that theorem applied to $A^{*}A$: choose orthonormal eigenvectors $v_i$ with
eigenvalues $\\sigma_i^{2}$ and set $u_i=Av_i/\\sigma_i$. For
$\\sigma_i,\\sigma_j>0$,

$$
\\begin{aligned}
\\langle u_i,u_j\\rangle
&=\\frac{\\langle Av_i,Av_j\\rangle}{\\sigma_i\\sigma_j}\\\\
&=\\frac{\\langle v_i,A^{*}Av_j\\rangle}{\\sigma_i\\sigma_j}\\\\
&=\\frac{\\sigma_j^{2}\\langle v_i,v_j\\rangle}
        {\\sigma_i\\sigma_j}.
\\end{aligned}
$$

This equals $0$ for $i\\ne j$ and $1$ for $i=j$, so the $u_i$ are
orthonormal. Eigenvectors with singular value zero span $\\ker A$ and do not
define vectors by division; complete the already constructed $u_i$ to an
orthonormal basis of the codomain (finite-dimensional Gram–Schmidt supplies the extension). Repeated positive singular values cause no
problem because the spectral theorem supplies an orthonormal basis inside each
eigenspace. Keeping these zero and repeated cases explicit distinguishes a
full SVD from a thin SVD. Finally, $U\\Sigma V^{*}v_i=\\sigma_i u_i=Av_i$ for each positive singular value and both sides vanish on every zero-singular-value $v_i$. Since the $v_i$ form a basis, the two matrices agree on every input, proving $A=U\\Sigma V^{*}$.

The SVD exposes rank, null spaces, condition number, and the geometry of the unit sphere becoming an ellipsoid. The claim that truncation gives a *best* low-rank approximation is the imported Eckart–Young theorem; this construction alone does not prove that optimization result. Unlike eigenvalue decomposition, SVD exists for rectangular and defective matrices.

### Spectral and singular values answer different questions

For

$$A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix},$$

the only eigenvalue is $1$, with algebraic multiplicity two, and the matrix is
not diagonalizable. Singular values instead come from

$$
A^{*}A=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix},
$$

whose eigenvalues are $(3\\pm\\sqrt5)/2$. Hence the singular values are the
positive square roots of those numbers. They measure extremal length
distortion, not invariant directions of $A$. A matrix can have tame
eigenvalues and substantial transient stretching; substituting one analysis
for the other loses information.

## Unit 10 — Duality and multilinear structure

A linear functional $\\varphi\\colon V\\to\\mathbb F$ is a vector in the algebraic dual space
$V^{\\vee}$. Given basis $e_i$, the dual basis $e^i$ satisfies
$e^i(e_j)=\\delta_{ij}$. The dual map
$T^{\\vee}\\colon W^{\\vee}\\to V^{\\vee}$ pulls measurements backward by
$T^{\\vee}(\\psi)=\\psi\\circ T$. If $T$ has matrix $A$, the dual map has matrix $A^T$ in the corresponding dual bases, over either $\\mathbb R$ or $\\mathbb C$. In orthonormal bases, the complex Hilbert-space **adjoint** has matrix $A^{*}=\\overline A^{T}$ and is a different construction; the shared word “dual” must not erase the conjugation.

Before treating that transpose as a rule to memorize, complete the
[dual-coordinate workshop](#/labs?lab=visual-lab-dual-coordinates).
Construct independently chosen domain and output dual bases, move a vector
forward, and pull a measurement backward while preserving their scalar
pairing. A functional's coefficient column changes by $P^T$ while a
vector's coordinate column changes by $P^{-1}$; an oblique basis exposes
the difference. The [complete investigation](#/item/visual-lab-dual-coordinates)
proves the rectangular transpose identity for every input and measurement,
then changes to a polynomial map and an evaluation functional. Allow an
optional 90 minutes beyond the course spine. The bases and linear-map ideas
of Units 3–4 suffice; inner products are not needed for this algebraic dual.

A bilinear form is linear in each slot. Over either field, its coordinate expression is $x^TBy$, and after $x=Pu$, $y=Pv$ its matrix is $P^TBP$. Over $\\mathbb C$, $x^{*}By$ is instead **sesquilinear**: conjugate-linear in $x$ and linear in $y$; its matrix becomes $P^{*}BP$. Over $\\mathbb R$ these formulas coincide because conjugation does nothing. A Hermitian form $x^{*}Bx$ with $B=B^{*}$ gives real values, and a positive-definite such form gives squared lengths. Similarity $P^{-1}AP$ describes one map with an input and an output coordinate conversion; congruence changes both arguments of a form. General tensor-product universal properties are imported from the [multilinear chapter](#/item/book-linear-algebra-structure-proofs?chapter=multilinear-maps-tensor-products), rather than proved by this paragraph.

**Optional investigation — can pure values extend linearly?** The [tensor-relations workshop](#/item/visual-lab-tensor-relations) asks you to rewrite a tensor without changing it and audit a proposed evaluation against the bilinear relations. A squared pairing passes reciprocal rescaling and selected presentations yet admits no linear extension; it still has a well-defined nonlinear extension. Prove independence for every finite decomposition, then transfer to polynomial multiplication: different tensors can have the same polynomial image, and factorization of that image does not decide purity of a specified lift. This fixed-basis investigation needs Units 1–4 and elementary polynomial coefficients; its real-field and optional complex-field claims are kept distinct.

## Unit 11 — Numerical honesty

Conditioning belongs to the mathematical problem; stability belongs to the algorithm. If nearby inputs can produce very different exact answers, the problem is ill-conditioned. A backward-stable algorithm returns the exact answer to a nearby problem, but that can still be far from the desired answer when conditioning is poor.

For $A=\\operatorname{diag}(1,10^{-8})$, the 2-norm condition number is
$10^{8}$. A tiny perturbation in the second component of $b$ can create a
large relative change in the second component of $x$. No algebraic
rearrangement creates missing information.

Dense elimination costs on the order of $n^{3}$; storing a dense matrix costs $n^{2}$. Sparse and matrix-free problems require iterative methods that use products $Ax$ without forming all entries. Convergence then depends on spectrum, geometry, preconditioning, and stopping criteria tied to forward or backward error—not iteration count alone.

## Connected practice: predict, calculate, and audit

Work each task before opening its solution. The starter tasks check definitions; the core tasks require a proof or a certificate; transfer tasks change the setting; audits ask which implication has failed. A correct number without the stated reason is incomplete.

### P1. Exchange with visible slots (starter; Unit 2)

In $\\mathbb R^3$ start with the spanning list $(e_1,e_2,e_3)$ and the independent vectors $v_1=(1,0,1)$, $v_2=(0,1,1)$. Replace an old vector for each $v_j$ while keeping span. Explain why $v_3=(1,1,2)$ cannot be a third member of this independent list.

**Hint.** Use $v_1=e_1+e_3$ and, after the first replacement, $v_2=e_2+e_3$. Check a relation among the three $v$'s before trying a third exchange.

**Solution.** Replace $e_1$ by $v_1$, since $e_1=v_1-e_3$; $(v_1,e_2,e_3)$ still spans. Replace $e_2$ by $v_2$, since $e_2=v_2-e_3$; $(v_1,v_2,e_3)$ still spans. But $v_3=v_1+v_2$, so the proposed three-vector list is dependent. In the induction proof, its third vector has no nonzero coefficient in an unreplaced old slot, exactly the obstruction independence excludes.

### P2. Closure and dimension from a new map (core; Units 2–3)

Over any field $\\mathbb F$, let $T:\\mathbb F^4\\to\\mathbb F^3$ send $(a,b,c,d)$ to $(a+b,b+c,c+d)$. Find bases for its kernel and image, prove your image claim, and check rank–nullity. Which general field theorem needs separate justification over $\\mathbb Z$? Does this particular calculation still work for the same map $\\mathbb Z^4\\to\\mathbb Z^3$?

**Hint.** Set all three outputs to zero. For the image, try to produce $e_1,e_2,e_3$ from images of standard input vectors. Over $\\mathbb Z$, find an integer preimage of an arbitrary triple. Arbitrary subgroup bases need not extend to bases of the ambient free abelian group.

**Solution.** The equations give $a=-b$, $c=-b$, $d=b$, so $\\ker T=\\operatorname{span}\\{(-1,1,-1,1)\\}$; this remains valid in characteristic two, where the minus signs equal plus signs. The input vectors $e_1,e_2,e_4$ have images $(1,0,0),(1,1,0),(0,0,1)$. Their first difference gives $(0,1,0)$, so these images span $\\mathbb F^3$ and are independent. Thus $\\operatorname{im}T=\\mathbb F^3$ with, for example, the standard basis, and $1+3=4$. The same equations give $\\ker T=\\mathbb Z(-1,1,-1,1)$ over $\\mathbb Z$, and $(u,v,w)$ has integer preimage $(u-v,v,0,w)$, so $\\operatorname{im}T=\\mathbb Z^3$. Here the kernel generator together with $e_1,e_2,e_4$ even forms an integer basis: its determinant is $-1$. The computation survives, but the general vector-space basis-extension theorem cannot be copied to arbitrary subgroups: the basis $(2)$ of $2\\mathbb Z\\subset\\mathbb Z$ does not extend to a basis of $\\mathbb Z$. A general rank statement for free abelian groups needs its own justification.

### P3. Two routes through an oblique basis (core; Unit 4)

Let $A=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$, $P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, and $x=(3,1)^T$. Predict $[x]_B$ and the matrix $C$ in the basis formed by $P$'s columns. Compute $Ax$ directly and via $P(C[x]_B)$; verify $AP=PC$. Is $\\lVert[x]_B\\rVert_2$ the length of $x$?

**Hint.** $P^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$. Use the two action paths before comparing lengths.

**Solution.** $[x]_B=P^{-1}x=(2,1)^T$. Multiplication gives $AP=\\begin{pmatrix}2&3\\\\0&3\\end{pmatrix}$ and $C=P^{-1}AP=\\operatorname{diag}(2,3)$, so $PC=AP$. Directly $Ax=(7,3)^T$; the coordinate route gives $C(2,1)^T=(4,3)^T$ and $P(4,3)^T=(7,3)^T$. The coordinate norm is $\\sqrt5$, while physical length is $\\sqrt{10}$; $c^T(P^TP)c=10$ explains the difference.

### P4. Projection certificate (core; Unit 6)

Project $b=(1,2,2)$ onto the line $S=\\operatorname{span}\\{(1,0,1)\\}$. Give the residual, prove perpendicularity, and compare squared errors with every other point of $S$.

**Hint.** The spanning vector has squared norm $2$. Write every other point as $p+t(1,0,1)$.

**Solution.** The coefficient is $b\\cdot(1,0,1)/2=3/2$, so $p=(3/2,0,3/2)$ and $r=b-p=(-1/2,2,1/2)$. Since $r\\cdot(1,0,1)=0$, for any real $t$ the squared error at $p+t(1,0,1)$ is $\\lVert r-t(1,0,1)\\rVert^2=\\lVert r\\rVert^2+2t^2=9/2+2t^2$. It is minimized uniquely at $t=0$. This is a proof of optimality, beyond a plausible projected picture.

### P5. A tempting QR answer (proof audit; Unit 7)

For Unit 7's $A$ and $b=(2,0,2)^T$, a student obtains coefficients $(1,1)$ and says the residual is small enough, so the fit is optimal. Identify the decisive failed test and repair the answer.

**Hint.** Compute $A^T(b-Ax)$; residual size alone is not an optimality certificate.

**Solution.** At $(1,1)$, $Ax=(2,0,1)^T$ and $r=(0,0,1)^T$, so $A^Tr=(0,1)^T\\ne0$. The residual is not perpendicular to the column space. Solving $Rx=Q^Tb$ instead gives $(1,4/3)$ and $r=(-1/3,1/3,2/3)^T$ with $A^Tr=0$. Its squared norm $2/3$ is less than $1$, and full column rank gives a unique minimizer.

### P6. Defect and powers in a new basis (transfer; Unit 8)

For $M=\\begin{pmatrix}2&1\\\\-1&0\\end{pmatrix}$, determine its eigenvalue and eigenspace. Discover a decomposition $M=I+N$ with $N^2=0$. Starting at $e_2$, derive $M^ne_2$ for $n\\ge0$ without multiplying $n$ matrices. Over which fields does an assertion of unbounded Euclidean growth make sense and hold?

**Hint.** Subtract $I$, square the result, and solve $Nv=0$. Then use the binomial theorem.

**Solution.** The characteristic polynomial is $(\\lambda-1)^2$. Here $N=M-I=\\begin{pmatrix}1&1\\\\-1&-1\\end{pmatrix}$, $N^2=0$, and $\\ker N=\\operatorname{span}\\{(1,-1)^T\\}$ is one-dimensional. Thus there is no eigenbasis despite algebraic multiplicity two. The binomial theorem gives $M^n=I+nN$, hence $M^ne_2=(n,1-n)^T$. Its Euclidean norm grows without bound over $\\mathbb R$ or $\\mathbb C$. In characteristic $p$, the identity $M^p=I$ holds instead; Euclidean growth is not a claim about that field.

### P7. Complex form audit (transfer; Units 4 and 10)

Over $\\mathbb C$, take $B=I$, $x=(i,0)^T$, $y=(1,0)^T$, and $P=\\operatorname{diag}(i,1)$. Compare $x^TBy$ with $x^{*}By$ and compute both transformed form matrices. Which expression can represent the usual squared length?

**Hint.** Conjugation changes $i$ to $-i$. Substitute $x=Pu$ and $y=Pv$ into each form separately.

**Solution.** $x^TBy=i$, whereas $x^{*}By=-i$. The bilinear matrix transforms to $P^TBP=\\operatorname{diag}(-1,1)$; the sesquilinear matrix transforms to $P^{*}BP=I$. Usual squared length is $x^{*}x$, which is nonnegative and equals $1$ for this $x$; $x^Tx=-1$ cannot be a squared length. Calling $x^{*}By$ bilinear over $\\mathbb C$ would falsely claim linearity in its first slot.

### P8. Cumulative transfer: rank and best fit (proof audit; Units 3, 6, 7)

Let $A=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$ and $b=(2,1)^T$. A report says “the normal equations have a solution, so the least-squares coefficients are unique.” Find every minimizer, the residual, and the exact failed hypothesis. State what remains unique.

**Hint.** Describe the image and kernel first; then project $b$ onto the image.

**Solution.** $\\operatorname{im}A=\\operatorname{span}\\{(1,0)\\}$ and $\\ker A=\\operatorname{span}\\{(1,-1)\\}$. The projection of $b$ is $(2,0)$ with residual $(0,1)$, perpendicular to the image. Every pair $(x_1,x_2)$ satisfying $x_1+x_2=2$ yields that projection and minimizes the squared error at $1$. The normal equations say only $x_1+x_2=2$; $A$ lacks full column rank, so $A^TA$ is singular. The fitted vector and perpendicular residual are unique, but the coefficient vector is not.

## Polynomial bridge practice: attempt before reading the explanations

Complete B1–B5 after Units 3–4, before moving to determinants. Allow about
an hour for an initial attempt and corrections. Write the spaces and field
at the top of each solution. B6 is an optional extension on the role of the
field. All prompts come first; the explanations follow as a separate group.

### B1. Evaluation has a different invisible direction (transfer)

Let $E:P_2(\\mathbb R)\\to\\mathbb R^2$ send $p$ to $(p(0),p(1))$.
Prove linearity, find bases for its kernel and image, and verify
rank–nullity. Give every input mapping to $(2,5)$. Explain why two
evaluations can leave ambiguity even though they specify two numbers.

### B2. A fiber and an extra condition (starter)

For $D:P_2(\\mathbb R)\\to P_1(\\mathbb R)$, solve $D(p)=4-6x$. Then impose
$p(1)=2$. Justify both the completeness of your first answer and the
uniqueness of the second. Is the full fiber a subspace?

### B3. The same array can occur in different bases (coordinate audit)

Keep the domain basis $B'=(1,1+x,(1+x)^2)$, but now use codomain basis
$C''=(1,1+x)$. Build $[D]_{C''\\leftarrow B'}$ directly from images of the
three domain basis vectors, then verify it with $Q^{-1}AP$. Find the
$C''$-coordinates of $D(2-x+3x^2)$. If the new array equals the original
array $A$, does that make the coordinate labels dispensable?

### B4. Recovering the lost information (core proof)

Let $U=\\{p\\in P_2(\\mathbb R):p(0)=0\\}$. Show that $U$ is a subspace with
basis $(x,x^2)$. Prove that the restriction $D|_U:U\\to P_1(\\mathbb R)$ is
an isomorphism, meaning a bijective linear map, and write its inverse.
Explain why this does not make the original $D:P_2\\to P_1$ invertible.

### B5. A right inverse need not be an inverse (hypothesis audit)

First consider $\\widehat D:P_2(\\mathbb R)\\to P_2(\\mathbb R)$. Is it
injective? Surjective? Does it contradict the finite-dimensional
equivalence in Unit 3?

Next work on all of $P(\\mathbb R)$. Define
$J(\\sum_{j=0}^m a_jx^j)=\\sum_{j=0}^m a_jx^{j+1}/(j+1)$. Compute $DJ(p)$
and $JD(p)$ for an arbitrary polynomial $p$. Which composition is the
identity? Use this to explain how $D$ can reach every output without
having a two-sided inverse. Identify the exact failed hypothesis in an
argument that applies the finite-dimensional equivalence here.

### B6. Optional: changing the field changes the calculation (boundary)

In the field $\\mathbb F_2=\\{0,1\\}$, addition and multiplication are
modulo $2$. Use formal polynomials, whose equality means coefficient
equality, and the same formal derivative rule to define
$D:P_2(\\mathbb F_2)\\to P_1(\\mathbb F_2)$. Find kernel, image, rank, and
nullity. Which step of the real surjectivity proof fails? Does rank–nullity
still hold? For prerequisite repair, see
[modular arithmetic](#/topic/modular-arithmetic).

## Explanations for the polynomial bridge

Compare the reasoning with your attempt, then redo any missed question
without looking. A useful repair states which definition or hypothesis
was missing, not only which coefficient was wrong.

### B1 explanation

Evaluation preserves combinations because
$(sp+tq)(a)=sp(a)+tq(a)$ at $a=0,1$. For $p=a+bx+cx^2$, the kernel
conditions are $a=0$ and $b+c=0$, so
$\\ker E=\\operatorname{span}\\{x^2-x\\}$. Given any $(r,s)\\in\\mathbb R^2$,
the polynomial $r+(s-r)x$ maps to it. Thus the image is all of
$\\mathbb R^2$, with standard basis, and $1+2=3$. One preimage of $(2,5)$
is $2+3x$, so the entire fiber is

$$2+3x+t(x^2-x),\\qquad t\\in\\mathbb R.$$

The kernel term vanishes at both sample points, hiding one input degree
of freedom. Differentiation and evaluation both have rank $2$ here, but
their kernels are different subspaces of the same polynomial space.

### B2 explanation

Coefficient comparison gives $p=a+4x-3x^2$ for every $a\\in\\mathbb R$,
and these are all solutions because any two preimages differ by a
constant. The condition $p(1)=a+1=2$ forces $a=1$, so the selected input
is $1+4x-3x^2$. The full fiber excludes zero, whose derivative is zero,
so it is not a subspace. It is a translate of $\\ker D$.

### B3 explanation

The three images $0$, $1$, $2+2x$ have $C''$-coordinates $(0,0)^T$,
$(1,0)^T$, $(0,2)^T$. Therefore

$$
[D]_{C''\\leftarrow B'}=\\begin{pmatrix}0&1&0\\\\0&0&2\\end{pmatrix}.
$$

Here $Q=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ and
$Q^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$. Left-multiplying the
Unit 4 matrix $AP$ subtracts its second row from its first, yielding
exactly the displayed array. Applied to $[p]_{B'}=(6,-7,3)^T$, it gives
$(-7,6)^T$. This represents $-7+6(1+x)=-1+6x$ in $C''$.
The original array applied to $[p]_B=(2,-1,3)^T$ instead gives
$(-1,6)^T$ in $C$. Equal arrays do not identify the coordinate systems:
input and output labels determine which polynomials the numbers encode.

### B4 explanation

The condition $p(0)=0$ sets the constant coefficient to zero, so
$U=\\operatorname{span}\\{x,x^2\\}$; the list is independent by coefficient
comparison and closure follows from its span description. The restriction
is linear. Its kernel is $U\\cap\\operatorname{span}\\{1\\}=\\{0\\}$, giving
injectivity. For every $r+sx$, the polynomial $rx+(s/2)x^2$ belongs to $U$
and maps to it, giving surjectivity. The inverse is the linear rule

$$r+sx\\longmapsto rx+\\frac{s}{2}x^2.$$

Restricting the domain supplies a fixed constant coefficient. The
original domain still contains many polynomials with the same derivative;
it still has no inverse. This example separates changing a map's domain
from changing its coordinate description.

### B5 explanation

The finite-dimensional endomorphism $\\widehat D$ has a nonzero constant
kernel and image $P_1(\\mathbb R)$, a proper subspace of $P_2(\\mathbb R)$.
It is neither injective nor surjective, exactly as the equivalence allows.

On all real polynomials, coefficient calculation gives

$$DJ(p)=p,\\qquad JD(p)=p-p(0).$$

The first equality holds because every coefficient is divided and then
multiplied by the same positive integer. In the other order, the constant
term disappears under $D$ and $J$ inserts no new constant. For example,
$JD(1)=0\\ne1$. Thus $J$ is a **right inverse** of $D$, meaning $DJ=I$,
but not a two-sided inverse. Every $q$ has preimage $J(q)$, and all its
preimages are $J(q)+a$ for $a\\in\\mathbb R$. Surjectivity supplies existence;
the nonzero kernel prevents uniqueness. The failed hypothesis is finite
dimension of the space, established to fail in Unit 3.

### B6 explanation

Since $2=0$ in $\\mathbb F_2$, formal differentiation gives
$D(a+bx+cx^2)=b$. Consequently

$$
\\ker D=\\operatorname{span}\\{1,x^2\\},\\qquad
\\operatorname{im}D=\\operatorname{span}\\{1\\}.
$$

Nullity is $2$ and rank is $1$, still summing to domain dimension $3$.
The real construction of a preimage of $x$ required division by $2$,
which is zero and has no inverse in this field. The finite-dimensional
rank–nullity theorem survives; the claimed image of this particular map
changes. Formal polynomials must stay distinct from their evaluation
functions here: $x^2-x$ is a nonzero polynomial even though its value is
zero at both field elements.

### Sources and further reading for the bridge

[Axler, *Linear Algebra Done Right*, fourth edition, Sections 3A–3C](https://linear.axler.net/LADR4e.pdf)
develops differentiation as a linear map, null space and range, the
finite-domain rank–nullity theorem, and matrices formed from basis images.
[MIT 18.06SC, Lecture 30 summary](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/cc829145eee5220b2024424bcb14c263_MIT18_06SCF11_Ses3.6sum.pdf)
works with differentiation from quadratic to linear polynomials and its
$2\\times3$ matrix. The formal coefficient definition, shifted-basis
calculations, and practice here provide an algebra-only route through
these ideas. Continue to the Atlas
[linear-map chapter](#/item/book-linear-algebra-structure-proofs?chapter=linear-maps-isomorphism-rank-nullity)
for quotient factorization after learning quotient spaces, or the
[matrix chapter](#/item/book-linear-algebra-structure-proofs?chapter=matrices-and-change-of-basis)
for independent changes of domain and codomain basis.

## Worked assessment

### 1. Rank–nullity in a polynomial space

Over $\\mathbb R$, let $D\\colon P_{3}(\\mathbb R)\\to P_{2}(\\mathbb R)$ use the formal differentiation rule from Unit 3. Find kernel, rank, and nullity. No calculus is required.

**Answer.** Constants differentiate to zero, so
$\\ker D=\\operatorname{span}\\{1\\}$ and nullity is 1. Every polynomial
$a+bx+cx^{2}$ is the derivative of
$ax+(b/2)x^{2}+(c/3)x^{3}$, so the image is all $P_{2}$, rank 3. The domain
has dimension 4, confirming $1+3=4$.

### 2. Similarity versus congruence

Under $x=Py$, compare the coordinate matrix $P^{-1}AP$ of a linear map with the matrices of a real quadratic form $x^TBx$, a complex bilinear quadratic form $x^TBx$, and a complex Hermitian form $x^*Bx$. Which use transpose and which use conjugate transpose?

**Answer.** A map has one input coordinate conversion and one output conversion back, producing $P^{-1}AP$. Substituting $x=Py$ into either real or complex bilinear $x^TBx$ gives $y^T(P^TBP)y$. For a complex Hermitian form $x^*Bx$, the same substitution gives $y^*(P^*BP)y$. The conjugation belongs to the Hermitian convention, not to every quadratic form over $\\mathbb C$; for $B=1,P=i$, the two transformed matrices are $-1$ and $1$.

### 3. Least-squares residual

Fit a constant $c$ to data $(2,5,8)$ by least squares.

**Answer.** Minimize $(2-c)^{2}+(5-c)^{2}+(8-c)^{2}$. Orthogonality to the constant column gives $(2-c)+(5-c)+(8-c)=0$, so $c=5$. The residual $(-3,0,3)$ sums to zero and is perpendicular to $(1,1,1)$.

### 4. Diagonalization boundary

Is every matrix with a repeated eigenvalue defective?

**Answer.** No. The identity has one repeated eigenvalue and every nonzero vector is an eigenvector. Defect occurs when geometric multiplicity is smaller than algebraic multiplicity, as in a nontrivial Jordan block.

### 5. SVD transfer

If singular values are $7,2,0$, state rank, nullity for a three-column matrix, and 2-norm condition number.

**Answer.** Rank is 2 and nullity is 1. Because the smallest singular value is zero, the map is singular and the full-space condition number is infinite. Restricted to the nonzero singular subspace, the ratio is $7/2$.

### 6. Coordinate dependence

A linear operator has matrices $A$ and $P^{-1}AP$ in two bases. Which of the
following must agree: entries, trace, determinant, eigenvalues, Euclidean
column lengths?

**Answer.** Trace, determinant, and the characteristic polynomial, hence
eigenvalues over a splitting field, agree. Entries and ordinary column lengths
depend on coordinates. Euclidean lengths are also sensitive to whether the
change-of-basis matrix preserves the chosen inner product.

### 7. Orthogonal projection

Project $b=(2,1,3)$ onto the line spanned by $q=(2,1,2)/3$.

**Answer.** Since $q$ is a unit vector,
$\\langle q,b\\rangle=(4+1+6)/3=11/3$. The projection is
$(11/3)q=(22/9,11/9,22/9)$. The residual has dot product zero with $q$.

### 8. Numerical boundary

Why can a small residual $\\lVert Ax-b\\rVert$ fail to guarantee a small forward
error $\\lVert x-\\widehat x\\rVert$?

**Answer.** If $A$ has a tiny singular value, a large error component in the
corresponding right-singular direction produces only a small residual. A
forward-error guarantee needs conditioning information in addition to a
backward residual.

### Feedback map

If Questions 1 or 5 fail, return to kernels, images, and rank–nullity. If
Questions 2 or 6 fail, separate a linear map from its coordinate matrix. If
Questions 3 or 7 fail, rebuild orthogonal projection from the defining
perpendicular-residual condition. If Questions 4 or 8 fail, compare
eigenvalue, singular-value, residual, and conditioning claims explicitly.

## Capstone and continuation

Allow about 2–3 hours for this required synthesis. Choose a small exact real matrix (at most $3\\times3$) from a network, fit, or image transform; Unit 7's $3\\times2$ matrix with a **new** data vector is a fallback. State its domain and codomain, rank, bases for kernel and image, and the two orthogonal complements, checking all dimensions. If square, show both coordinate action paths for one invertible basis and distinguish coordinate lengths from physical lengths. If rectangular, describe distinct domain and codomain bases rather than calling the change “similarity.” Solve or fit one vector with a perpendicular-residual certificate; calculate eigenvalues where square or singular values from $A^TA$ where rectangular, with the relevant hypothesis stated. Finish with a conditioning estimate and report the observed residual or error behavior of your calculation. Claim algorithmic stability only if you state an applicable imported stability theorem and verify its hypotheses; a small residual from one run is insufficient. Label each result as proof, exact calculation, numerical observation, or imported theorem. Submit the input, intermediate matrices, residual/eigenvalue checks, and a short audit of one initially tempting wrong step.

The 16-hour course estimate allocates roughly 7 hours to units and prerequisite repairs, 5 hours to P1–P8 and B1–B5, 1 hour to the numbered assessment, and 2–3 hours to this capstone. B6 and a larger comparison of algorithms on a near-singular family are **optional extensions**, not hidden requirements for the route.

Continue to the proof-oriented book for field-independent structure, the matrix-computation book and recipe for numerical decisions, the spectral/tensor deep dive for advanced structure, or the programming course to implement elimination, QR, power iteration, and tests without hiding behind a library call.
`;export{e as default};