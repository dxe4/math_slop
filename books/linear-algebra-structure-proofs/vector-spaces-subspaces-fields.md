
# Vector Spaces, Subspaces, and the Role of the Field {#section-1-vector-spaces-subspaces-and-the-role-of-the-field}

A column of three real numbers, a polynomial, a continuous signal, and a matrix look like different kinds of object. Linear algebra begins when we notice that the same two operations can be performed on all of them: objects can be added, and they can be scaled. The useful abstraction is not that every vector is secretly an arrow. It is that a small list of rules licenses the same proofs in many settings.

This chapter establishes that contract carefully. It also makes one parameter visible from the start: the **field of scalars**. A collection can be a vector space over one field and not another, and a statement about independence, eigenvalues, or dimension can change when the field changes. Later chapters will rely on this bookkeeping constantly.

The local prerequisites are elementary algebra, sets, functions, and direct proof. After this chapter you should be able to:

- verify or refute a proposed vector space or subspace;
- derive basic identities from the axioms instead of importing coordinate intuition;
- recognize linear structure in matrices, polynomials, functions, and solution sets;
- distinguish a subspace from an affine translate or a set closed under only one operation;
- state exactly how changing the scalar field changes the object under study.

Throughout, $F$ denotes a field, $V$ a vector space over $F$, and $0_F$ and $0_V$ the scalar and vector zero when confusion is possible. All sums in the first four parts of this book are finite. Topology and infinite series are not silently present.

<a id="section-15-1-why-the-scalar-field-comes-first"></a>
## 1. Why the scalar field comes first {#section-17-1-why-the-scalar-field-comes-first}

**Definition 1.1 (Scalar field).** A **field** is a set $F$ equipped with addition and multiplication in which the usual commutative arithmetic laws hold, $0_F \ne  1_F$, every scalar has an additive inverse, and every nonzero scalar has a multiplicative inverse. Familiar examples include $Q$, $R$, and $C$. The finite set

$\mathbb{F}_2 = \{0,1\}$

is also a field when addition and multiplication are taken modulo $2$. Thus $1+1=0$ in $\mathbb{F}_2$.

The field controls which coefficients are legal in a linear combination. Consider the set $C$.

- Over $C$, any $z$ is the scalar multiple $z\cdot 1$, so the single vector $1$ generates the space.
- Over $R$, a general $z=a+bi$ requires $a\cdot 1+b\cdot i$; real scaling cannot turn $1$ into $i$.
- Over $Q$, even the real numbers inside $C$ require far more than the two generators $1,i$.

The underlying set and addition have not changed. The allowed scalars have. We therefore write “$V$ over $F$” rather than treating the field as background decoration.

The **characteristic** of a field is the least positive integer $p$ such that $p\cdot 1_F=0_F$, if such an integer exists; otherwise the characteristic is $0$. The fields $Q$, $R$, and $C$ have characteristic $0$; $\mathbb{F}_2$ has characteristic $2$. In characteristic $2$, subtraction and addition coincide because $-1=1$. A proof that divides by $2$ therefore has a material field hypothesis.

<a id="section-33-worked-comparison-the-equation-v-v"></a>
### Worked comparison: the equation $v=-v$ {#section-35-worked-comparison-the-equation-v-v}

**Worked example 1.2 (Characteristic changes cancellation).**

Over $R$, the equation implies $2v=0$, hence $v=0$ after multiplying by $\frac{1}{2}$. Over $\mathbb{F}_2$, every vector satisfies it: $-v=(-1)v=1v=v$. The formal manipulation $v=-v$ to $2v=0$ remains correct in both settings. The final inference changes because $2$ is invertible in one field and zero in the other.

This is a recurring proof habit: before dividing by a scalar, verify that it is nonzero in the stated field.

<a id="section-41-2-the-vector-space-contract"></a>
## 2. The vector-space contract {#section-43-2-the-vector-space-contract}

A **vector space over $F$** is a set $V$ with vector addition $(u,v) \to  u+v$ and scalar multiplication $(a,v) \to  av$ such that, for all $u,v,w \in V$ and $a,b \in F$:

1. $u+v=v+u$;
2. $(u+v)+w=u+(v+w)$;
3. there is a vector $0_V$ with $v+0_V=v$;
4. every $v$ has a vector $-v$ with $v+(-v)=0_V$;
5. $a(u+v)=au+av$;
6. $(a+b)v=av+bv$;
7. $(ab)v=a(bv)$;
8. $1_F v=v$.

These axioms are deliberately spare. They do not define length, angle, order, multiplication of vectors, convergence, or a preferred coordinate system. Those are additional structures when they exist.

The familiar facts $0_F v=0_V$, $a0_V=0_V$, $(-a)v=-(av)$, and $a(-v)=-(av)$ are theorems.

<a id="section-58-proof-that-0-f-v-0-v"></a>
### Proof that $0_F v=0_V$ {#section-60-proof-that-0-f-v-0-v}

Distributivity gives

$0_F v=(0_F+0_F)v=0_F v+0_F v$.

Add the inverse of $0_F v$ to both sides. The left side cancels one copy on the right, leaving $0_V=0_F v$. Notice that the symbol $0$ appeared in two roles; the proof shows scalar zero acting on a vector produces vector zero.

<a id="section-66-proof-of-the-zero-scalar-alternative"></a>
### Proof of the zero-scalar alternative {#section-68-proof-of-the-zero-scalar-alternative}

If $av=0_V$, then either $a=0_F$ or $v=0_V$. If $a$ is nonzero, multiply both sides by $a^{-1}$:

$v=1_F v=(a^{-1}a)v=a^{-1}(av)=a^{-1}0_V=0_V$.

This proof uses the existence of multiplicative inverses. It can fail for modules over a ring with zero divisors, which is one reason linear algebra over fields is especially clean.

<a id="section-74-equality-is-structural-not-visual"></a>
### Equality is structural, not visual {#section-76-equality-is-structural-not-visual}

Vectors are equal according to the equality rule of their ambient set. Two polynomials are equal when all coefficients agree; two functions are equal when their values agree at every input; two residue classes are equal when their representatives differ by the modulus. A vector-space proof may use these equality rules, but should never assume that all vectors have coordinates until a basis has been chosen.

<a id="section-78-3-the-standard-examples-read-structurally"></a>
## 3. The standard examples, read structurally {#section-80-3-the-standard-examples-read-structurally}

<a id="section-80-coordinate-spaces"></a>
### Coordinate spaces {#section-82-coordinate-spaces}

For a positive integer $n$, the set $\mathbb{F}^n$ of ordered $n$-tuples is a vector space under componentwise operations:

$(x_1,\ldots,x_n)+(y_1,\ldots,y_n)=(x_1+y_1,\ldots,x_n+y_n)$

and

$a(x_1,\ldots,x_n)=(ax_1,\ldots,ax_n)$.

Every vector-space axiom follows from the corresponding field law in each coordinate. Coordinate spaces are important models, but the later basis theorem will show why finite-dimensional vector spaces merely *admit* coordinate descriptions rather than arriving with canonical ones.

<a id="section-92-matrix-spaces"></a>
### Matrix spaces {#section-94-matrix-spaces}

The set $M_{m,n}(F)$ of $m$ by $n$ matrices is a vector space under entrywise addition and scaling. Matrix multiplication is not the vector addition and does not enter the vector-space axioms. It is an extra operation with different typing: an $m$ by $n$ matrix can multiply an $n$ by $r$ matrix, but not generally another $m$ by $n$ matrix.

<a id="section-96-polynomial-spaces"></a>
### Polynomial spaces {#section-98-polynomial-spaces}

The polynomials $\mathbb{F}[x]$ form a vector space. For each nonnegative integer $d$, the polynomials of degree at most $d$, together with the zero polynomial, form a smaller vector space denoted $F_d[x]$. Including zero explicitly matters because its degree is either left undefined or assigned a convention such as negative infinity.

The set of polynomials of degree *exactly* $d$ is not a subspace when $d\ge 0$: it omits zero, and leading terms may cancel. For example, $(x^d)+( -x^d)=0$.

<a id="section-102-function-spaces"></a>
### Function spaces {#section-104-function-spaces}

For any set $X$, the set $\mathbb{F}^X$ of all functions $f:X\to F$ is a vector space under pointwise operations:

$(f+g)(x)=f(x)+g(x)$, and $(af)(x)=a f(x)$.

Many spaces from analysis are subsets of a function space: continuous functions, differentiable functions, bounded functions, or functions satisfying boundary conditions. Each must be checked for closure. The vector-space axioms do not assert that a limit or derivative exists.

<a id="section-110-sequences-and-finite-support"></a>
### Sequences and finite support {#section-112-sequences-and-finite-support}

An infinite sequence $(a_1,a_2,\ldots)$ over $F$ is a function from the positive integers to $F$, so all sequences form a vector space. The sequences with only finitely many nonzero terms also form a vector space, commonly written $\mathbb{F}^{(N)}$. Adding two finitely supported sequences yields support contained in the union of two finite sets, hence still finite.

The distinction between all sequences and finitely supported sequences will matter when “linear combination” continues to mean a finite sum. The standard unit sequences span the finitely supported space but do not span all sequences algebraically.

<a id="section-116-4-subspaces-compress-verification"></a>
## 4. Subspaces compress verification {#section-118-4-subspaces-compress-verification}

Let $V$ be a vector space over $F$. A subset $U$ is a **subspace** of $V$ when the operations inherited from $V$ make $U$ a vector space over the same field.

Checking all eight axioms would be wasteful because associativity, commutativity, and distributive laws are inherited. The useful criterion is:

**Theorem 1.3 (Subspace test).** **Subspace criterion.** A nonempty subset $U$ of $V$ is a subspace exactly when

$au+bv \in U$

for every $u,v \in U$ and every $a,b \in F$.

If $U$ is a subspace, closure under this two-term linear combination is immediate. Conversely, choose any $u \in U$. Taking $a=b=0$ gives $0_V \in U$; taking $a=-1,b=0$ gives $-u \in U$; taking appropriate coefficients gives closure under addition and scaling. All other laws are inherited from $V$.

Equivalent checks use closure under addition and scalar multiplication separately, together with nonemptiness. A proposed subspace that does not contain $0_V$ fails immediately.

<a id="section-132-worked-verification-a-plane-through-the-origin"></a>
### Worked verification: a plane through the origin {#section-134-worked-verification-a-plane-through-the-origin}

**Worked example 1.4 (A homogeneous plane).**

Let

$U=\{(x,y,z) \in \mathbb{R}^3 : x+2y-z=0\}$.

Take $u=(x_1,y_1,z_1)$ and $v=(x_2,y_2,z_2)$ in $U$, and scalars $a,b$. Then

$(ax_1+bx_2)+2(ay_1+by_2)-(az_1+bz_2)$

$=a(x_1+2y_1-z_1)+b(x_2+2y_2-z_2)=0$.

Thus $au+bv$ also satisfies the defining equation. The set is a subspace.

Now replace the equation by $x+2y-z=1$. The resulting parallel plane is not a subspace because $(0,0,0)$ does not satisfy it. It is an **affine translate** of the first plane, not a linear subspace.

<a id="section-150-worked-parametrization-constraints-become-generators"></a>
### Worked parametrization: constraints become generators {#section-152-worked-parametrization-constraints-become-generators}

From $x+2y-z=0$, solve $x=-2y+z$. Writing $y=s$ and $z=t$ gives

$(x,y,z)=s(-2,1,0)+t(1,0,1)$.

The equation description emphasizes a constraint; the parameter description emphasizes the allowed directions. Later, kernels and images will formalize this duality.

<a id="section-158-5-intersections-sums-and-unions"></a>
## 5. Intersections, sums, and unions {#section-160-5-intersections-sums-and-unions}

If $\{U_i\}$ is any nonempty family of subspaces of $V$, then its intersection is a subspace. The zero vector lies in every $U_i$. If $u,v$ lie in every $U_i$, so does every $au+bv$; hence it lies in the intersection.

This remains true for infinitely many subspaces because membership in an intersection means satisfying every condition separately. By contrast, an infinite union of subspaces need not be a subspace, and even the union of two subspaces usually fails.

**Union criterion.** For subspaces $U,W$ of $V$, the union $U \cup W$ is a subspace exactly when $U$ is contained in $W$ or $W$ is contained in $U$.

To prove the nontrivial direction, suppose neither contains the other. Choose $u \in U\setminus W$ and $w \in W\setminus U$. If the union were a subspace, then $u+w$ would lie in it. If $u+w \in U$, subtracting $u$ would put $w$ in $U$, contradiction. If $u+w \in W$, subtracting $w$ would put $u$ in $W$, contradiction.

The **sum** of two subspaces is

$U+W=\{u+w : u \in U, w \in W\}$.

Unlike the union, the sum is always a subspace. It is also the smallest subspace containing both $U$ and $W$. Direct sums and uniqueness of decomposition are postponed until Chapter 4, where basis and dimension tools make them easier to analyze.

<a id="section-174-worked-example-union-failure-and-sum-repair"></a>
### Worked example: union failure and sum repair {#section-176-worked-example-union-failure-and-sum-repair}

In $\mathbb{R}^2$, let $U=\{(x,0):x\in\mathbb R\}$ and $W=\{(0,y):y\in\mathbb R\}$. Their union is the two coordinate axes. The vectors $(1,0)$ and $(0,1)$ belong to the union, but their sum $(1,1)$ does not. Their subspace sum is all of $\mathbb{R}^2$, because $(x,y)=(x,0)+(0,y)$.

<a id="section-178-6-homogeneous-equations-create-subspaces"></a>
## 6. Homogeneous equations create subspaces {#section-180-6-homogeneous-equations-create-subspaces}

A system of homogeneous linear equations has the form

$A x=0$.

Its solution set is a subspace: if $Au=0$ and $Av=0$, then

$A(au+bv)=aAu+bAv=0$.

This calculation uses the linearity of matrix multiplication in the input, which can be checked entry by entry. The solution set of $Ax=b$ with $b\ne 0$ is generally not a subspace because it omits zero. If $x_0$ is one solution, then every solution has the form

$x_0+u$, where $Au=0$.

Thus a consistent inhomogeneous solution set is an affine translate of the homogeneous solution space.

<a id="section-194-worked-computation-one-affine-family-one-direction-spac"></a>
### Worked computation: one affine family, one direction space {#section-196-worked-computation-one-affine-family-one-direction-spac}

**Worked example 1.5 (An affine solution family).**

Solve over $R$:

$x+y+z=1$,

$2x+y-z=0$.

Subtract twice the first equation from the second to get $-y-3z=-2$, so $y=2-3z$. Then $x=1-y-z=-1+2z$. With $z=t$,

$(x,y,z)=(-1,2,0)+t(2,-3,1)$.

The direction vector solves the associated homogeneous system, but the base point does not. Adding two solutions usually produces a vector satisfying right-hand side $2b$, not $b$.

<a id="section-210-7-field-sensitive-examples-and-failures"></a>
## 7. Field-sensitive examples and failures {#section-212-7-field-sensitive-examples-and-failures}

<a id="section-212-restricting-scalars"></a>
### Restricting scalars {#section-214-restricting-scalars}

If $K$ is a field containing a subfield $F$, every vector space over $K$ can be viewed as a vector space over $F$ by allowing fewer scalars. This is **restriction of scalars**. The underlying vectors and addition stay the same, but spanning and dimension may change.

For example, $C$ is a vector space over $C$ and over $R$. The set $R$ is an $R$-subspace of $C$, but it is not a $C$-subspace: $1$ is real while $i\cdot 1=i$ is not.

<a id="section-218-extending-scalars-is-not-automatic"></a>
### Extending scalars is not automatic {#section-220-extending-scalars-is-not-automatic}

An $R$-vector space does not become a $C$-vector space merely because we wish to multiply by $i$. One must define a compatible action of complex scalars. On $\mathbb{R}^2$, one possible action identifies $(x,y)$ with $x+iy$; multiplication by $i$ then sends $(x,y)$ to $(-y,x)$. This extra operator is structure, not a consequence of the real vector-space axioms.

<a id="section-222-finite-fields-alter-familiar-geometry"></a>
### Finite fields alter familiar geometry {#section-224-finite-fields-alter-familiar-geometry}

In $\mathbb{F}_2^2$ there are four vectors:

$(0,0), (1,0), (0,1), (1,1)$.

Every nonzero scalar is $1$, so each nonzero vector has no distinct nonzero scalar multiples. The “line” generated by $(1,1)$ contains only $(0,0)$ and $(1,1)$. There is no compatible notion of positive length supplied by the field, yet subspaces, span, and linear maps work perfectly well.

<a id="section-230-counterexample-clinic"></a>
### Counterexample clinic {#section-232-counterexample-clinic}

- The positive vectors in $\mathbb{R}^n$ are closed under addition and positive scaling, but not under multiplication by $-1$; they are not a subspace.
- The set of invertible $n$ by $n$ matrices omits zero and can fail closure under addition; it is not a subspace.
- The set $\{f : f(0)=1\}$ is affine, while $\{f : f(0)=0\}$ is a subspace.
- The set of vectors with at least one zero coordinate is a union of coordinate hyperplanes, not usually a subspace.
- A line not passing through the origin may look geometrically linear but is not a linear subspace. “Straight” and “subspace” answer different questions.

<a id="section-238-8-a-reusable-proof-protocol"></a>
## 8. A reusable proof protocol {#section-240-8-a-reusable-proof-protocol}

When confronted with an unfamiliar collection, use this sequence.

1. **Name the ambient space and field.** “Polynomials” is incomplete; write $\mathbb{F}[x]$ over $F$.
2. **Check typing.** Do addition and scalar multiplication return objects of the same kind?
3. **Test zero early.** A failed zero test settles many nonexamples.
4. **Use a generic linear combination.** Substitute $au+bv$ into every defining homogeneous constraint.
5. **Locate constants.** A nonzero constant term often signals an affine translate rather than a subspace.
6. **Audit divisions and signs.** Field characteristic may invalidate a familiar cancellation.
7. **Separate finite algebra from analytic closure.** If the definition mentions limits, convergence, or completeness, additional proof is required.

This protocol is more reliable than testing a few examples. Closure is universally quantified: it must hold for every allowed pair of vectors and every pair of scalars.

<a id="section-252-9-chapter-summary-and-retrieval-prompts"></a>
## 10. Development: the operations determine which vector is zero {#section-751-10-development-the-operations-determine-which-vector-is}

A vector-space claim includes its operations. It is not a property of the underlying set alone. On the set $\mathbb R$, define

$$u\oplus v=u+v-1,\qquad a\odot v=1+a(v-1),$$

where the operations on the right are ordinary real arithmetic and the scalars remain the ordinary field $\mathbb R$. These formulas have the correct types: two vectors produce a vector, and a scalar with a vector produces a vector. The additive identity for $\oplus$ is the number one, because $u\oplus1=u$. The additive inverse of $u$ is $2-u$.

There is an economical proof of every axiom. Define the bijection $\varphi(v)=v-1$, with inverse $w\mapsto w+1$. Direct calculation gives $\varphi(u\oplus v)=\varphi(u)+\varphi(v)$ and $\varphi(a\odot v)=a\varphi(v)$. Apply $\varphi$ to either side of any proposed vector-space identity. The transformed identity is the familiar real vector-space identity, and injectivity of $\varphi$ transfers equality back. For example, both $\varphi(a\odot(u\oplus v))$ and $\varphi((a\odot u)\oplus(a\odot v))$ equal $a\{\varphi(u)+\varphi(v)\}$.

Scalar zero and vector zero now have the same printed numeral only if we choose to hide their types. In this structure $0_{\mathbb R}\odot v=1$, because one is the vector zero. Conversely the number zero, regarded as a vector, has image minus one under $\varphi$ and is not the additive identity. The axiom-derived identity $0_Fv=0_V$ remains correct; its interpretation depends on which operation symbols have been declared.

This also explains why an affine plane can acquire a vector-space structure without becoming a subspace under its original operations. Let $S=\{x:Ax=b\}$ be nonempty and choose $p\in S$. Define $u\oplus_pv=u+v-p$ and $a\odot_pu=p+a(u-p)$. Their images under $u\mapsto u-p$ are ordinary addition and scaling in $\{h:Ah=0\}$. Both formulas stay in $S$: applying $A$ gives respectively $b+b-b=b$ and $b+a(b-b)=b$.

The choice of $p$ supplies the new zero. A different base point gives different vector operations on the same affine set. No point is selected by the equation alone. Under inherited ambient operations, $S$ is still not a subspace when $b\ne0$. Distinguishing these statements prevents an apparent contradiction between a failed zero test and a newly defined vector structure.

<a id="section-765-11-development-test-whether-complex-scalars-can-act"></a>
## 11. Development: test whether complex scalars can act {#section-767-11-development-test-whether-complex-scalars-can-act}

Restriction to fewer scalars preserves an existing action. Adding new scalars requires an action to be constructed. A precise compatibility test is available for a real vector space $V$. Suppose a function $J:V\to V$ is additive, commutes with real scalar multiplication, and satisfies $J(Jv)=-v$ for every vector. Define

$$(a+bi)\cdot v=av+bJv,\qquad a,b\in\mathbb R.$$

The representation $a+bi$ is unique, so this is a well-defined proposed action. Its addition rules follow by distributing real linear combinations and using the two stated properties of $J$. The decisive scalar-product rule can be checked explicitly:

$$(a+bi)\cdot\{(c+di)\cdot v\}
 =(ac-bd)v+(ad+bc)Jv.$$

Expanding the left side produces $acv+adJv+bcJv+bdJ^2v$; substituting $J^2v=-v$ gives the formula. It agrees with multiplication by $(a+bi)(c+di)$. Scalar one acts as the identity. Thus the real vector-space axioms extend to complex scalars under precisely this construction.

Conversely, a compatible complex action determines such a function by $Jv=i\cdot v$. Additivity and real homogeneity follow from the action laws, while $J^2v=i^2v=-v$. The existence of this particular square root of the negative identity is therefore equivalent to a complex structure extending the given real action. It is extra information, rather than a consequence of the real axioms.

On $\mathbb R^2$, the usual choice is $J(x,y)=(-y,x)$. Applying it twice gives $(-x,-y)$, so the construction works. For any nonzero real $s$, the alternative $J_s(x,y)=(-sy,x/s)$ also squares to the negative identity. At $s=2$, multiplication by $i$ sends $(1,0)$ to $(0,1/2)$, rather than to $(0,1)$. Both are compatible complex actions on the same real vector space; neither is forced by the real operations alone.

On $\mathbb R$ with its ordinary real action, no such $J$ exists. Real homogeneity would give $J(x)=xJ(1)=tx$ for a real number $t$. Then $J^2(1)=t^2$, which cannot equal minus one. This proves an impossibility for that specific real space without importing a dimension theorem.

Notice which properties were used. An arbitrary function satisfying $J^2=-I$ would not suffice without compatibility with addition and real scaling. Likewise, merely giving a symbol $iv$ supplies no guarantee that scalar multiplication is associative. The test exposes the exact algebraic obligations behind an extension of scalars.

<a id="section-786-12-development-a-finite-restriction-of-scalars-certific"></a>
## 12. Development: a finite restriction-of-scalars certificate {#section-788-12-development-a-finite-restriction-of-scalars-certific}

Let $K=\{a+b\sqrt2:a,b\in\mathbb Q\}$ inside $\mathbb R$. Every displayed element has a unique rational expression of this form. If $a+b\sqrt2=0$ and $b\ne0$, then $\sqrt2=-a/b$ would be rational; otherwise $b=0$ forces $a=0$. The familiar irrationality assertion follows from parity: a reduced fraction $r/s$ with square two would satisfy $r^2=2s^2$, making $r$ even and then $s$ even, contrary to reduction.

This set really is a field. Addition and negation preserve its form, and

$$(a+b\sqrt2)(c+d\sqrt2)
 =(ac+2bd)+(ad+bc)\sqrt2.$$

For a nonzero element, its inverse is $(a-b\sqrt2)/(a^2-2b^2)$. The rational denominator cannot vanish: if $b\ne0$ it would make $(a/b)^2=2$, and if $b=0$ it vanishes only when the original element is zero. Thus every nonzero element has an inverse in $K$. Inherited real arithmetic supplies the remaining field laws.

Now consider $V=K^2$. Using $K$ scalars, each vector has a unique expression $z(1,0)+w(0,1)$. Using only rational scalars, write $z=a+b\sqrt2$ and $w=c+d\sqrt2$. The same vector has the unique rational expression

$$a(1,0)+b(\sqrt2,0)+c(0,1)+d(0,\sqrt2).$$

Existence follows by expanding the two entries. Uniqueness follows by comparing each entry and using uniqueness of its rational expression in $K$. This is an exact certificate of what restriction changes: the underlying pairs and addition stay fixed, while fewer permitted coefficients require more named generators.

The same argument works for a subfield $F\subseteq K$ when $K$ has a specified finite list $c_1,\ldots,c_d$ giving unique $F$-coefficient expressions, and vectors $v_1,\ldots,v_m$ give unique $K$-coefficient expressions for vectors of $V$. Expand each $K$ coefficient into the $c_i$, obtaining an $F$ expression using the $dm$ vectors $c_iv_j$. For uniqueness, group a proposed zero expression by $v_j$. Uniqueness over $K$ makes each grouped coefficient zero, and uniqueness over $F$ makes all its scalar coefficients zero.

Only finite expansions and their uniqueness were used. The next chapters call such nonredundant spanning lists bases and interpret their lengths as dimensions. There is no need here to assume an arbitrary infinite basis or choose coordinates for a space not yet supplied with such a list. This finite certificate is enough to explain how a scalar-field choice changes the amount of coefficient information needed.

<a id="section-807-13-development-characteristic-determines-which-integer-"></a>
## 13. Development: characteristic determines which integer pivots exist {#section-809-13-development-characteristic-determines-which-integer-}

Integer-looking coefficients denote field elements. If a field has positive characteristic $p$, then $p$ must be prime. Suppose instead $p=ab$ with $1<a,b<p$. Minimality of $p$ says $a1_F$ and $b1_F$ are nonzero. Their product is $(ab)1_F=p1_F=0$. Multiplying by the inverse of either nonzero factor contradicts the other being nonzero. The argument is another use of the zero-scalar alternative, now applied inside the field itself.

The elements $0_F,1_F,\ldots,(p-1)1_F$ form a subfield. Addition and multiplication close because integer expressions reduce modulo $p$. A nonzero element acts injectively by multiplication on these $p$ elements, using cancellation in $F$; a self-map of a finite set that is injective is surjective. It therefore hits one, providing an inverse inside this small set. This identifies a copy of $\mathbb F_p$ without assuming that the entire field has only $p$ elements.

A calculation over an unspecified field must consequently audit each proposed denominator. In characteristic three, an equation $3v=0$ says nothing beyond $0v=0$. In any other characteristic, the scalar $3=1_F+1_F+1_F$ is nonzero and may be inverted. The legality of dividing by three is not decided by whether the numeral is nonzero in ordinary integer arithmetic.

Matrix identities exhibit the same boundary. From $A^{\mathsf T}=-A$, a diagonal entry satisfies $2a_{ii}=0$. Over $\mathbb R$, this forces every diagonal entry to vanish. Over $\mathbb F_2$, the identity matrix satisfies $A^{\mathsf T}=-A$ and has diagonal entries one. The transpose calculation is valid in both fields; the inference after multiplying by an inverse of two is available in only one.

Arithmetic modulo four supplies a contrasting nonfield. Its nonzero element two satisfies $2\cdot2=0$, and has no multiplicative inverse. The one-term relation $2v=0$ can therefore hold for the nonzero residue vector $v=2$. It would be false to transfer the field's zero-scalar alternative to this scalar system. This example marks a boundary; it is not a replacement theory of modules over rings.

When a later proof selects a nonzero coefficient, field arithmetic guarantees its inverse. When it selects a specific integer coefficient, its nonzeroness may require an extra characteristic hypothesis. Separating those two steps is especially important in exchange calculations and polynomial identities.

<a id="section-821-14-development-directed-unions-and-the-limits-of-a-unio"></a>
## 14. Development: directed unions and the limits of a union rule {#section-823-14-development-directed-unions-and-the-limits-of-a-unio}

The two-subspace union criterion has a precise number of inputs. It cannot be changed to “a union is a subspace only when one member contains all the others.” In $\mathbb F_2^2$, the three two-element subspaces generated by $(1,0)$, $(0,1)$ and $(1,1)$ together cover the whole space. Their union is therefore a subspace, although none contains either of the others. Each pairwise union still fails the two-subspace criterion. The difference is the third subspace, which supplies the missing sum.

There is a useful positive statement for possibly infinite families. Suppose a nonempty family of subspaces has the property that any two members are contained together in some member of the family. Such a family is called directed by inclusion. Its union is a subspace: given two vectors in the union, choose family members containing each, then choose a common containing member. That subspace contains every linear combination of the two vectors, placing it back in the union.

The proof uses only two input vectors at a time. Repeating the argument supplies a common containing member for any finite collection, exactly matching finite linear combinations. It does not assert that the family has one member containing its entire union. Nonemptiness also matters: an empty union omits the required vector zero.

For example, let $U_n$ consist of sequences whose entries after position $n$ vanish. The family is nested, hence directed: $U_{\max(m,n)}$ contains both $U_m$ and $U_n$. Its union is the finitely supported sequence space. No single $U_n$ contains that union, since the unit sequence at position $n+1$ lies outside $U_n$.

The all-ones sequence remains outside the union. Its informal infinite expansion in unit sequences does not alter this fact. Directed closure under finite operations is algebraic closure, not a statement about convergence of an infinite sum. No topology was declared, so there is no additional operation that would put that sequence into the algebraic union.

These examples locate three different mechanisms. Intersections preserve every common linear constraint. Directed unions collect compatible finite stages into a larger subspace. Arbitrary unions need not preserve sums, although a finite field can allow several incomparable proper subspaces to cover a space. Checking which mechanism is present is more informative than deciding from a geometric picture whether a union “looks linear.”

<a id="section-835-15-development-closure-certificates-need-all-their-quan"></a>
## 15. Development: closure certificates need all their quantifiers {#section-837-15-development-closure-certificates-need-all-their-quan}

A successful closure proof names its inputs before manipulating them. Fix an ambient $F$-space $V$, a nonempty subset $U$, arbitrary $u,v\in U$ and arbitrary $a,b\in F$. The goal is that the particular vector $au+bv$ satisfies the defining conditions of $U$. Testing a convenient pair or allowing only positive coefficients proves a weaker statement.

Nonemptiness cannot be recovered from a universally quantified closure formula alone. The empty subset satisfies “for every $u,v\in U$, $au+bv\in U$” vacuously because no such inputs exist. It still has no additive identity. In a homogeneous system, the zero vector supplies nonemptiness automatically; in a contradictory system of affine constraints there may be no starting vector at all.

The field also controls how much a shorter test proves. Let $U$ be a nonempty subset of a vector space over the prime field $\mathbb F_p$, and suppose it is closed under addition. Repeatedly adding any member $u$ exactly $p$ times produces zero, so zero belongs to $U$. Adding it $p-1$ times produces $-u$, and each scalar multiple in $\mathbb F_p$ is a repeated sum. Thus addition closure suffices in this particular field.

It does not suffice over $\mathbb R$: the integers inside $\mathbb R$ are nonempty and addition-closed but fail closure under multiplication by $1/2$. Nor does it suffice over every characteristic-$p$ field with more than $p$ elements. For instance, $\mathbb F_p$ sitting inside a larger characteristic-$p$ field is addition-closed, but multiplication of one by a scalar outside that subfield leaves the subset. Restricting the scalar list changes what the closure check establishes.

A useful general certificate comes from finitely many scalar-valued constraints. For functions $f:X\to F$, fix points $x_j$ and coefficients $c_j$. The condition $\sum_jc_jf(x_j)=0$ is preserved by every $F$-linear combination: substitution distributes the same finite sum into $a\sum_jc_jf(x_j)+b\sum_jc_jg(x_j)$. Several such homogeneous constraints are preserved simultaneously.

A nonzero right-hand side changes the conclusion. If a particular function $f_0$ satisfies the constraints with constants $d_i$, another function satisfies them exactly when its difference from $f_0$ satisfies the homogeneous constraints. This produces a translate when a solution exists, or the empty set when none exists. The argument identifies the correct alternatives without assuming beforehand that every equation system has a solution.

The next chapter turns these membership certificates into generation questions. A constraint can prove that every generated vector lies in a subset; a separate reconstruction must show that every member of the subset can be generated. Closure, span equality and uniqueness of coefficients are different obligations.

<a id="section-851-16-development-a-nonlinear-equation-can-still-define-a-"></a>
## 16. Development: a nonlinear equation can still define a subspace {#section-853-16-development-a-nonlinear-equation-can-still-define-a-}

Homogeneous linear constraints always define subspaces, but that is a sufficient condition, not a necessary description of every possible defining equation. Consider the set $S_F=\{(x,y)\in F^2:x^2+y^2=0\}$. Its equation has degree two. Whether its solution set is a subspace depends on the field rather than on the degree label alone.

Over $\mathbb R$, both squares are nonnegative. Their sum is zero only when $x=y=0$. Thus $S_{\mathbb R}$ is the zero subspace. The proof used the order on $\mathbb R$, an additional property not present in the axioms of an arbitrary field. Calling the equation nonlinear would not justify rejecting its solution set as a subspace.

Over $\mathbb C$, factor the expression as $(y-ix)(y+ix)$. The zero-product property says every solution lies on $y=ix$ or $y=-ix$. Conversely every point on either line solves the equation. The vectors $(1,i)$ and $(1,-i)$ are solutions, but their sum $(2,0)$ gives $2^2+0^2=4\ne0$. Therefore $S_{\mathbb C}$ fails addition closure. This is a union of two different complex subspaces, so the earlier union criterion predicts the same failure.

Over $\mathbb F_2$, each scalar satisfies $a^2=a$. The equation is equivalent, as a condition on pairs, to $x+y=0$, hence to $x=y$. Its solution set is $\{(0,0),(1,1)\}$ and is the span of $(1,1)$. It is therefore a subspace again, for a reason entirely different from real positivity.

The formal polynomial $x^2+y^2$ has not become a degree-one polynomial in $\mathbb F_2[x,y]$. Its values on this finite field agree with those of $x+y$. Polynomial equality and equality of their induced functions are different tests, a distinction used explicitly in the next chapter.

This three-field calculation diagnoses two tempting shortcuts. “The equation is homogeneous, so its solutions form a subspace” omits linearity and is false in general. “The equation is nonlinear, so its solutions cannot form a subspace” asserts a false converse. Use the actual closure criterion for the actual solution set. When a shorter argument works, record whether it used order, factorisation, characteristic or a direct parametrisation.

For every field, these sets contain zero and are closed under all scalar multiplications, since $(ax)^2+(ay)^2=a^2(x^2+y^2)$. Their differing behavior is entirely in addition closure. Even a homogeneous equation with a successful zero test and unrestricted scalar closure can therefore fail the subspace criterion. The complex case supplies the missing pair of vectors explicitly, rather than relying on the visual shape of its solution set.

<a id="section-867-17-optional-practice-extensions"></a>

## Summary

<a id="section-254-9-chapter-summary-and-retrieval-prompts"></a>
A vector space is an additive structure acted on by a field. The axioms guarantee finite linear algebra but no metric, topology, order, or coordinates. A subspace is a nonempty subset closed under linear combinations. Homogeneous linear constraints define subspaces; consistent inhomogeneous constraints define affine translates. Intersections and sums of subspaces are subspaces, while unions usually are not. Every claim is relative to its scalar field.

Before continuing, answer without looking back:

1. Which step in the proof $av=0 \Longrightarrow a=0 \text{ or } v=0$ uses the field hypothesis?
2. Why is “contains zero and is closed under addition” insufficient over $R$?
3. What changes and what stays fixed when $C$ is regarded as a real vector space?
4. Why does a homogeneous equation define a subspace?
5. When is the union of two subspaces a subspace?

The next chapter develops span and independence. Those ideas describe what can be generated by a collection and whether any generator is redundant.

<a id="section-266-exercises-with-full-solutions"></a>

<a id="section-931-summary"></a>
Vector-space statements name both the operations and the scalar field. Subspaces are nonempty and closed under all allowed linear combinations; affine translates, unions, and nonlinear constraints require their own checks. The extensions distinguish inherited operations from transported structures and show exactly where field characteristic matters. Span and exchange next turn closure into generation and redundancy.

## Exercises {#section-268-exercises-with-full-solutions}

<a id="section-268-1-uniqueness-of-vector-zero"></a>
### 1. Uniqueness of vector zero {#section-270-1-uniqueness-of-vector-zero}

Suppose $z$ and $z'$ both satisfy the additive-identity rule in $V$. Prove $z=z'$.

<details>
<summary>Hint 1</summary>

Compare the sum of the two proposed identities.

</details>

<details>
<summary>Hint 2</summary>

Apply the identity property once for each summand.

</details>

<details>
<summary>Solution</summary>

**Solution.** Because $z'$ is an identity, $z+z'=z$. Because $z$ is an identity, the same sum equals $z'$. Hence $z=z'$.


</details>

<a id="section-294-2-scalar-negative-one"></a>
### 2. Scalar negative one {#section-296-2-scalar-negative-one}

Prove $(-1_F)v=-v$ from the axioms.

<details>
<summary>Hint 1</summary>

Show that multiplying by negative one gives an additive inverse.

</details>

<details>
<summary>Hint 2</summary>

Distribute (1+(−1))v and use uniqueness of inverses.

</details>

<details>
<summary>Solution</summary>

**Solution.** Distributivity gives $v+(-1_F)v=(1_F+(-1_F))v=0_Fv=0_V$. Thus $(-1_F)v$ is an additive inverse of $v$. Additive inverses are unique, so it equals $-v$.


</details>

<a id="section-320-3-cancellation-in-a-vector-space"></a>
### 3. Cancellation in a vector space {#section-322-3-cancellation-in-a-vector-space}

Prove that $u+w=v+w$ implies $u=v$.

<details>
<summary>Hint 1</summary>

Use an additive inverse to remove the common summand.

</details>

<details>
<summary>Hint 2</summary>

Associate the final two terms before applying the zero rule.

</details>

<details>
<summary>Solution</summary>

**Solution.** Add $-w$ to both sides. Associativity gives $u+(w-w)=v+(w-w)$, hence $u+0_V=v+0_V$ and therefore $u=v$.


</details>

<a id="section-346-4-a-homogeneous-polynomial-constraint"></a>
### 4. A homogeneous polynomial constraint {#section-348-4-a-homogeneous-polynomial-constraint}

Let $U=\{p \in \mathbb{R}_4[x] : p(1)=0\}$. Prove that $U$ is a subspace and give three nonzero members.

<details>
<summary>Hint 1</summary>

Evaluate a generic linear combination at the specified point.

</details>

<details>
<summary>Hint 2</summary>

Choose polynomials with a factor x−1 and check the degree bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** The zero polynomial has value zero at $1$. If $p(1)=q(1)=0$, then $(ap+bq)(1)=ap(1)+bq(1)=0$ for all real $a,b$, so the subspace criterion applies. Examples are $x-1$, $(x-1)^2$, and $x(x-1)(x+2)$.


</details>

<a id="section-372-5-exact-degree-is-not-linear"></a>
### 5. Exact degree is not linear {#section-374-5-exact-degree-is-not-linear}

For a fixed $d\ge 1$, show that the polynomials in $\mathbb{F}[x]$ of degree exactly $d$ do not form a subspace.

<details>
<summary>Hint 1</summary>

Apply the zero-vector test before checking closure.

</details>

<details>
<summary>Hint 2</summary>

You can also arrange cancellation of leading coefficients.

</details>

<details>
<summary>Solution</summary>

**Solution.** The zero polynomial is not of degree exactly $d$, so the zero test already fails. Also, if $p=x^d$ and $q=-x^d+x^{d-1}$, both have degree $d$, while $p+q=x^{d-1}$ does not.


</details>

<a id="section-398-6-symmetric-matrices"></a>
### 6. Symmetric matrices {#section-400-6-symmetric-matrices}

Prove that $\{A \in M_n(R): A^T=A\}$ is a subspace.

<details>
<summary>Hint 1</summary>

Transpose a generic linear combination.

</details>

<details>
<summary>Hint 2</summary>

Use linearity of transpose and the two symmetry assumptions.

</details>

<details>
<summary>Solution</summary>

**Solution.** The zero matrix is symmetric. If $A^T=A$ and $B^T=B$, then $(aA+bB)^T=aA^T+bB^T=aA+bB$. Thus every linear combination is symmetric.


</details>

<a id="section-424-7-invertible-matrices"></a>
### 7. Invertible matrices {#section-426-7-invertible-matrices}

Give two independent reasons the invertible $2$ by $2$ real matrices do not form a subspace.

<details>
<summary>Hint 1</summary>

Check the zero matrix first.

</details>

<details>
<summary>Hint 2</summary>

For addition, compare an invertible matrix with its negative.

</details>

<details>
<summary>Solution</summary>

**Solution.** The zero matrix is not invertible, so the subset omits the required zero vector. It also fails addition: $I$ and $-I$ are invertible, but their sum is zero and is not invertible.


</details>

<a id="section-450-8-intersection-of-constraints"></a>
### 8. Intersection of constraints {#section-452-8-intersection-of-constraints}

In $\mathbb{R}^4$, let $U$ satisfy $x_1+x_2=0$ and let $W$ satisfy $x_3-x_4=0$. Prove $U \cap W$ is a subspace and parametrize it.

<details>
<summary>Hint 1</summary>

Impose both equations simultaneously.

</details>

<details>
<summary>Hint 2</summary>

Choose the first and third coordinates freely and solve for the others.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each homogeneous equation is preserved by linear combinations, so the simultaneous solution set is a subspace. Write $x_2=-x_1$ and $x_4=x_3$. Then

$(x_1,x_2,x_3,x_4)=s(1,-1,0,0)+t(0,0,1,1)$.


</details>

<a id="section-478-9-the-union-theorem"></a>
### 9. The union theorem {#section-480-9-the-union-theorem}

Let $U,W$ be subspaces. Assuming $U \cup W$ is a subspace, prove that one of $U,W$ contains the other.

<details>
<summary>Hint 1</summary>

Assume neither containment and choose one vector exclusive to each space.

</details>

<details>
<summary>Hint 2</summary>

Test their sum and subtract the appropriate chosen vector in each possible case.

</details>

<details>
<summary>Solution</summary>

**Solution.** Suppose neither containment holds. Choose $u \in U\setminus W$ and $w \in W\setminus U$. Closure would place $u+w$ in the union. If it lies in $U$, subtracting $u$ places $w$ in $U$; if it lies in $W$, subtracting $w$ places $u$ in $W$. Both contradict the choices. Therefore one containment must hold.


</details>

<a id="section-504-10-functions-vanishing-twice"></a>
### 10. Functions vanishing twice {#section-506-10-functions-vanishing-twice}

Let $X$ contain distinct points $a,b$, and let $U=\{f:X\to F : f(a)=f(b)=0\}$. Prove $U$ is a subspace of $\mathbb{F}^X$.

<details>
<summary>Hint 1</summary>

Use the pointwise definitions of addition and scaling.

</details>

<details>
<summary>Hint 2</summary>

Check both specified values for an arbitrary linear combination.

</details>

<details>
<summary>Solution</summary>

**Solution.** The zero function belongs to $U$. For $f,g \in U$ and scalars $c,d$, pointwise operations give $(cf+dg)(a)=cf(a)+dg(a)=0$, and similarly at $b$. Hence $cf+dg$ lies in $U$.


</details>

<a id="section-530-11-bounded-functions"></a>
### 11. Bounded functions {#section-532-11-bounded-functions}

Do bounded real-valued functions on an arbitrary set $X$ form an $R$-subspace of $\mathbb{R}^X$?

<details>
<summary>Hint 1</summary>

Choose uniform bounds for the two functions.

</details>

<details>
<summary>Hint 2</summary>

Use the triangle inequality to construct a bound independent of the input.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes. The zero function is bounded. If $\left|f(x)\right|\le M$ and $\left|g(x)\right|\le N$ for all $x$, then $\left|af(x)+bg(x)\right|\le \left|a\right|M+\left|b\right|N$, a bound independent of $x$. Thus every linear combination is bounded.


</details>

<a id="section-556-12-finite-support"></a>
### 12. Finite support {#section-558-12-finite-support}

Prove that finitely supported sequences form a subspace of all sequences.

<details>
<summary>Hint 1</summary>

Track the possible nonzero indices of a combination.

</details>

<details>
<summary>Hint 2</summary>

Any index outside the union of the original supports contributes zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The zero sequence has empty support. If $u,v$ have finite supports $S,T$, then any index outside $S \cup T$ has $(au+bv)_i=0$; therefore the new support is contained in the finite set $S \cup T$.


</details>

<a id="section-582-13-an-affine-solution-set"></a>
### 13. An affine solution set {#section-584-13-an-affine-solution-set}

Let $A$ be a matrix and suppose $Ax_0=b$. Prove that the complete solution set of $Ax=b$ is $x_0+U$, where $U=\{u:Au=0\}$.

<details>
<summary>Hint 1</summary>

Compare an arbitrary solution with the supplied particular solution.

</details>

<details>
<summary>Hint 2</summary>

Prove both that differences are homogeneous and that adding a homogeneous vector preserves the output.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $Ax=b$, then $A(x-x_0)=Ax-Ax_0=b-b=0$, so $x=x_0+u$ for $u \in U$. Conversely, if $u \in U$, then $A(x_0+u)=b+0=b$. The two inclusions establish equality.


</details>

<a id="section-608-14-characteristic-two"></a>
### 14. Characteristic two {#section-610-14-characteristic-two}

List all subspaces of $\mathbb{F}_2^2$.

<details>
<summary>Hint 1</summary>

Start from the zero subspace and the span of each nonzero vector.

</details>

<details>
<summary>Hint 2</summary>

Show two different nonzero generators force the whole space.

</details>

<details>
<summary>Solution</summary>

**Solution.** There is the zero subspace and the whole space. Each nonzero vector generates a two-element subspace containing zero and itself. The three such subspaces are $\{(0,0),(1,0)\}$, $\{(0,0),(0,1)\}$, and $\{(0,0),(1,1)\}$. No other proper nonzero subset is closed under addition.


</details>

<a id="section-634-15-real-versus-complex-closure"></a>
### 15. Real versus complex closure {#section-636-15-real-versus-complex-closure}

Show that $U=\{(z,\overline{z}):z \in C\}$ is an $R$-subspace of $C^2$ but not a $C$-subspace.

<details>
<summary>Hint 1</summary>

Conjugation respects real coefficients.

</details>

<details>
<summary>Hint 2</summary>

Test multiplication by a scalar whose conjugate differs from itself.

</details>

<details>
<summary>Solution</summary>

**Solution.** For real $a,b$,

$a(z,\overline{z})+b(w,\overline{w})=(az+bw,\overline{az+bw})$,

so real linear combinations stay in $U$. But $(1,1)$ lies in $U$, while multiplying by $i$ gives $(i,i)$. A vector whose first coordinate is $i$ would need second coordinate $\overline{i}=-i$, so $(i,i)$ is not in $U$.


</details>

<a id="section-664-16-product-spaces"></a>
### 16. Product spaces {#section-666-16-product-spaces}

Given vector spaces $V,W$ over the same field, verify that $V \times W$ is a vector space under componentwise operations.

<details>
<summary>Hint 1</summary>

Write both operations componentwise.

</details>

<details>
<summary>Hint 2</summary>

Verify an arbitrary distributive law in the two components and identify their zero pair.

</details>

<details>
<summary>Solution</summary>

**Solution.** Define $(v,w)+(v',w')=(v+v',w+w')$ and $a(v,w)=(av,aw)$. Each axiom holds in each component. For example, $a((v,w)+(v',w'))=(a(v+v'),a(w+w'))=(av+av',aw+aw')$, which is the sum of $a(v,w)$ and $a(v',w')$. The other axioms follow similarly; the zero is $(0_V,0_W)$.


</details>

<a id="section-690-17-a-failed-closure-argument"></a>
### 17. A failed closure argument {#section-692-17-a-failed-closure-argument}

A student says $\{(x,y) \in \mathbb{R}^2:x y=0\}$ is a subspace because zero satisfies the equation and scaling preserves it. Find the missing check and a counterexample.

<details>
<summary>Hint 1</summary>

Identify which closure condition has not been tested.

</details>

<details>
<summary>Hint 2</summary>

Choose one point on each coordinate axis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Closure under addition is missing. Both $(1,0)$ and $(0,1)$ satisfy $xy=0$, but their sum $(1,1)$ does not. The set is the union of two axes, not a subspace.


</details>

<a id="section-716-18-transfer-problem-conservation-constraints"></a>
### 18. Transfer problem: conservation constraints {#section-718-18-transfer-problem-conservation-constraints}

For fixed positive masses $m_1,\ldots,m_n$, let

$U=\{(v_1,\ldots,v_n) \in \mathbb{R}^n : \sum_{j=1}^n m_j v_j=0\}$.

Prove $U$ is a subspace and interpret the condition.

<details>
<summary>Hint 1</summary>

Substitute a generic real linear combination into the weighted sum.

</details>

<details>
<summary>Hint 2</summary>

Distribute the fixed masses and identify the familiar conserved scalar.

</details>

<details>
<summary>Solution</summary>

**Solution.** The defining expression is homogeneous and linear. If $u,v \in U$, then

$\sum m_j(au_j+bv_j)=a \sum m_j u_j+b \sum m_j v_j=0$.

Thus $U$ is a subspace. If $v_j$ are one-dimensional velocities, the condition says total momentum is zero. The subspace consists of all velocity configurations compatible with that linear conservation constraint.

</details>

<a id="section-749-10-development-the-operations-determine-which-vector-is"></a>

<a id="section-869-17-optional-practice-extensions"></a>
### 19. LSP-01-E19: a different additive identity {#section-873-lsp-01-e19-a-different-additive-identity}

On the underlying set $\mathbb R$, define $u\oplus v=u+v-2$ and $a\odot v=2+a(v-2)$ using ordinary real arithmetic on the right. Find the vector zero and additive inverse of $v$. Prove these operations give a real vector space by using one explicit bijection, and explain what $0_{\mathbb R}\odot v$ means.

<details>
<summary>Hint 1</summary>

Find the number that leaves every vector unchanged under the new addition.

</details>

<details>
<summary>Hint 2</summary>

Translate by the proposed new zero to compare the operations with ordinary real arithmetic.

</details>

<a id="section-889-lsp-01-e20-one-vector-with-two-scalar-descriptions"></a>
### 20. LSP-01-E20: one vector with two scalar descriptions {#section-891-lsp-01-e20-one-vector-with-two-scalar-descriptions}

Use the field $K=\{a+b\sqrt2:a,b\in\mathbb Q\}$ and $V=K^2$. Express $(2+3\sqrt2,-1+\sqrt2)$ using the four rational generators $(1,0),(\sqrt2,0),(0,1),(0,\sqrt2)$ and explain uniqueness over $\mathbb Q$. Give a nontrivial $K$-coefficient relation among these four vectors, and explain why the two assertions are compatible.

<details>
<summary>Hint 1</summary>

Expand both entries in the rational pair 1,√2.

</details>

<details>
<summary>Hint 2</summary>

A relation using √2 as a coefficient is permitted over K but may be illegal over Q.

</details>

<a id="section-907-18-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-909-18-solutions-to-practice-extensions"></a>
<a id="section-909-lsp-01-e19-a-different-additive-identity-solution"></a>
### LSP-01-E19: a different additive identity — solution {#section-911-lsp-01-e19-a-different-additive-identity-solution}

<details>
<summary>Solution</summary>

The vector zero is the real number two, since $v\oplus2=v$. The additive inverse of $v$ is $4-v$, since $v\oplus(4-v)=2$. The bijection $\varphi(v)=v-2$ satisfies $\varphi(u\oplus v)=\varphi(u)+\varphi(v)$ and $\varphi(a\odot v)=a\varphi(v)$. Every axiom follows by applying this bijection, using the ordinary real vector-space axiom and its injectivity. Scalar zero sends every vector to $2+0(v-2)=2$, which is exactly the vector zero of these operations, rather than the number zero viewed as a vector.


</details>

<a id="section-919-lsp-01-e20-one-vector-with-two-scalar-descriptions-solu"></a>
### LSP-01-E20: one vector with two scalar descriptions — solution {#section-921-lsp-01-e20-one-vector-with-two-scalar-descriptions-solu}

<details>
<summary>Solution</summary>

The rational coefficients in the stated order are $2,3,-1,1$. If another tuple gave the same pair, subtracting would yield a rational equation $a+b\sqrt2=0$ in each entry; irrationality of $\sqrt2$ forces each pair of coefficients to vanish, proving uniqueness. Over $K$, the relation $(-\sqrt2)(1,0)+1(\sqrt2,0)+0(0,1)+0(0,\sqrt2)=0$ is nontrivial. Its first coefficient is not rational, so it is not an allowed relation over $\mathbb Q$. With $K$ scalars the two vectors $(1,0),(0,1)$ already generate the pair by its entries.

</details>


<a id="section-929-summary"></a>
