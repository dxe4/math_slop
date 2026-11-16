var e=`---
id: course-abstract-algebra-advanced
title: "Algebra: Fields, Modules, Representations, and Local Rings"
level: advanced-undergraduate
estimated_minutes: null
---

# Algebra: Fields, Modules, Representations, and Local Rings

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-abstract-algebra-advanced/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Abstract algebra II and Galois theory](/courses/course-abstract-algebra-2/) · [Linear algebra II](/courses/atlas-linear-algebra-standard/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A field fixed by a group, a module given by relations, an invariant subspace, and a ring seen near a prime all ask the same question: which distinctions survive a map? This course develops four required strands in sequence: finite Galois theory; finitely generated modules and exactness; finite-group representations; and localization with Noetherian methods. One fixed integral $C_2$ portfolio then forces the strands to agree. Changing the characteristic exposes the hypotheses that made its rational decomposition work.

The prerequisite is [Abstract Algebra: A Standard Proof Course](#/item/course-abstract-algebra-proof), including its fields and first modules, together with finite-dimensional linear algebra and proof writing. That original course remains a separate prerequisite. This is an advanced undergraduate first sequence in these four subjects. The representation strand concerns finite groups, chiefly over $\\mathbb C$ and $\\mathbb Q$, with an explicit modular counterexample. The commutative-algebra strand proves localization, prime correspondence, finite-generation results, Hilbert's basis theorem, and local Nakayama. Lie representations, algebraic-group representations, dimension theory beyond the stated examples, schemes, and derived algebra are further study; no full specialist programme in them is claimed.

**The study time depends on the selected reading, attempts and corrections.** The selected readings have overlapping estimates from earlier books; their sum is not a course estimate. Every diagnostic, source assignment, unit practice, and the primary, changed, and reconstruction portfolios below is required. Public solutions support comparison and repair. They establish neither unseen performance nor a grade.

## Entry diagnostic and written records

Use the eight questions in [Morphisms First — Prerequisite Diagnostic](#/item/book-morphisms-modules-categories?section=front%3Aprerequisite-diagnostic), in printed order. The same questions and expanded answers are reproduced here so preparation and repair are available in this lesson. Category language in Questions 7–8 is introduced in the answer; needing that repair does not disqualify you from starting.

**D1.** Over $\\mathbb Z$, show $\\mathbb Z/6$ is cyclic and finitely generated but not free.

**D2.** Find the Smith form and cokernel of $A_D=\\begin{pmatrix}4&2\\\\0&6\\end{pmatrix}$.

**D3.** State Hilbert's basis theorem; explain why $k[x_1,x_2,\\ldots]$ is not Noetherian.

**D4.** Prove $\\dim(V\\oplus W)=\\dim V+\\dim W$ for finite-dimensional vector spaces over the same field.

**D5.** For $T=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ on $\\mathbb R^2$, find kernel and image and check rank-nullity.

**D6.** Prove every short exact sequence of vector spaces splits.

**D7.** Prove a product object is unique up to the unique isomorphism preserving its projections.

**D8.** Describe the free-module/forgetful adjunction by a natural bijection between maps $F(X)\\to M$ and set maps $X\\to U(M)$.

### Diagnostic public answers and repairs

**D1.** The class of 1 generates all six classes. Any nonzero free $\\mathbb Z$-module has a basis element $b$ with $6b\\ne0$, whereas every element here is killed by 6. The zero free module has one element, so is also excluded. Thus the group is not free of any rank. Repair with the [core module lesson](#/item/course-abstract-algebra-proof?chapter=modules-and-the-limits-of-vector-space-intuition) and [Morphisms First, §1.1–1.3](#/item/book-morphisms-modules-categories?chapter=modules-linear-algebra-over-a-ring).

**D2.** Swap columns to get $\\begin{pmatrix}2&4\\\\6&0\\end{pmatrix}$; subtract three times row 1 from row 2 to get $\\begin{pmatrix}2&4\\\\0&-12\\end{pmatrix}$; subtract twice column 1 from column 2 and negate row 2. The result is $\\operatorname{diag}(2,12)$, with $2\\mid12$, so the cokernel is $\\mathbb Z/2\\oplus\\mathbb Z/12$. Each operation has integer inverse. Repair with [Algebra: Patterns and Structure, Smith form §5 and presentations §7](#/item/book-algebra-patterns-structure?chapter=finitely-generated-abelian-groups); that source already gives a terminating unimodular algorithm and the complete $[[2,6],[4,8]]$ trace. Over $\\mathbb Q$, dividing rows would instead erase torsion.

**D3.** For a commutative Noetherian ring $R$, the polynomial ring $R[x]$ is Noetherian. In infinitely many variables, $(x_1)\\subsetneq(x_1,x_2)\\subsetneq\\cdots$: setting the first $n$ variables to zero shows $x_{n+1}$ is not in the preceding ideal. Hence the chain fails to stabilize. Module 4 supplies the proof of the finite-variable theorem; repair the definitions in [Morphisms First, §1.4](#/item/book-morphisms-modules-categories?chapter=modules-linear-algebra-over-a-ring). This question identifies a topic to learn, rather than assuming its proof at entry.

**D4.** If $(v_i)$ and $(w_j)$ are bases, $(v_i,0),(0,w_j)$ span $V\\oplus W$. A relation projects to zero in both coordinates, forcing every coefficient to vanish. The combined family is therefore a basis. Repair with [Linear Algebra: A Standard Course](#/item/course-linear-algebra-standard), subspaces and bases.

**D5.** $T(x,y)=(y,0)$, so $\\ker T=\\mathbb R(1,0)=\\operatorname{im}T$. Each has dimension one; $1+1=2$. Equality of kernel and image does not make $T$ invertible: indeed $T^2=0$. Repair kernels and images in the same linear-algebra course.

**D6.** Write $0\\to U\\xrightarrow{i}V\\xrightarrow{p}W\\to0$. Choose a basis of $W$, choose a lift in $V$ for each basis element, and extend linearly to $s:W\\to V$. Then $ps=1$. Every $v$ equals $(v-spv)+spv$ with first summand in $i(U)$; an element in both summands has zero image under $p$, hence is zero. Thus $V=i(U)\\oplus s(W)$. The proof requires arbitrary scalar division only through vector-space basis theory; over $\\mathbb Z$ a section can fail. Repair with [Morphisms First, §1.5 and Exercise 1.4](#/item/book-morphisms-modules-categories?chapter=modules-linear-algebra-over-a-ring).

**D7.** A product $(P,\\pi_A,\\pi_B)$ has exactly one map $h:X\\to P$ for each pair of maps $X\\to A,X\\to B$ with the prescribed projection equations. For a second product $P'$, this gives $u:P'\\to P$ and $v:P\\to P'$. Both $uv$ and $1_P$ have the same projections, so uniqueness gives $uv=1_P$; likewise $vu=1_{P'}$. The isomorphism is unique subject to those projection equations, not among all abstract isomorphisms. Repair with [Abelian Categories, §§2.1–2.4 and Exercise 2.1](#/item/book-morphisms-modules-categories?chapter=abelian-categories).

**D8.** $F(X)$ consists of finite formal sums $\\sum r_x e_x$. A set map $f:X\\to U(M)$ extends uniquely to $\\widetilde f(\\sum r_xe_x)=\\sum r_xf(x)$. Restriction to basis vectors reverses this construction. If $a:X'\\to X$ and $b:M\\to M'$ is linear, both routes around naturality send $e_{x'}$ to $b(f(a(x')))$. They agree on a basis, hence agree. This proves the natural bijection and $F\\dashv U$. Repair with §1.3 of Morphisms First and the linked diagnostic's Question 8.

For **every assigned response**, including each diagnostic question, each named source exercise and project, each unit question below, and every portfolio deliverable, keep separate dated files with stable task names: a first attempt, a comparison record, and a revised attempt. A comparison record states which public answer, earlier work, person, or tool you consulted and what it changed. If you saw a key before the first attempt, record that exposure; write the attempt anyway. Keep those files yourself, using names such as AA-ADV-M3-Q2-first-2026-11-03 and corresponding comparison/revised names. Preserve earlier versions manually; Euler does not make these files immutable or retain them automatically. Shared notes and study checkmarks are useful navigation records, not graded evidence. No hidden key, enforced waiting period, unseen-work certification, or automatic score is promised.

Work in module order. Within each module read the exposition, do its assigned source row in the ordered map, attempt its unit questions, then compare the complete keys. Use the descriptive review at the end to decide which argument to repair before the cumulative portfolio.

## Module 1: extensions and fixed fields

### M1.1 — From a relation to the right ambient field

Read [Field Extensions, Algebraic Elements, and Minimal Polynomials, §§2–9](#/item/book-algebra-patterns-structure?chapter=field-extensions-minimal-polynomials), then [Splitting Fields, Separability, and Finite Extensions, §§1–9](#/item/book-algebra-patterns-structure?chapter=splitting-fields-separability). Their quotient/evaluation proof gives $F(\\alpha)\\cong F[x]/(m_\\alpha)$ for algebraic $\\alpha$, and their product-basis proof gives the tower law. Reproduce those arguments: division by $m_\\alpha$ supplies normal forms; a relation of lower degree would contradict minimality; expanding a relation first in an upper basis and then in a lower basis proves product-basis independence.

A finite extension need not carry enough symmetries. In $\\mathbb Q(\\rho)$ with $\\rho^3=2$ real, $x^3-2$ is irreducible by the rational-root test, so the degree is three. Only its real root lies in this real field. Every automorphism must send $\\rho$ to that root, hence is the identity. The splitting field $E=\\mathbb Q(\\rho,\\omega)$ adds a primitive cube root of unity. Since $\\omega$ is nonreal, its degree over $\\mathbb Q(\\rho)$ is two, so $[E:\\mathbb Q]=6$.

Here are the precise general bridges used below. The **embedding-extension theorem** for finite algebraic extensions follows by extending along simple adjunctions, sending a new generator to a root of its transported minimal polynomial. The **separable embedding count** follows by multiplying the numbers of distinct root choices along such a tower. A finite normal extension carries each embedding back onto itself, since embeddings permute the roots of a generating splitting polynomial. Therefore a finite normal separable extension has exactly its degree many base automorphisms. These are proved in the assigned splitting-fields chapter; they are dependencies of the correspondence, not consequences of an arbitrary root permutation.

A polynomial is separable precisely when $\\gcd(f,f')=1$: if $f=(x-a)q$, differentiation gives $f'(a)=q(a)$, so $f(a)=f'(a)=0$ precisely when $(x-a)^2$ divides $f$. In characteristic zero an irreducible polynomial cannot divide its smaller-degree nonzero derivative. In characteristic $p$ the derivative can vanish: over $\\mathbb F_p(t)$, $X^p-t$ is irreducible by Eisenstein at $t$ and Gauss's lemma, but after adjoining $u^p=t$ it is $(X-u)^p$. **Eisenstein and Gauss's lemma are imported here from polynomial factorization in the prerequisite course/book.** This failure of separability will matter when a group order is confused with a degree.

### M1.2 — The fixed-field degree theorem, with its proof

Read [Galois Groups and the Subgroup–Subfield Correspondence, §§4–6](#/item/book-algebra-patterns-structure?chapter=galois-groups-correspondence). The following reproduces its essential proof rather than treating its strongest theorem as a slogan.

Distinct homomorphisms $\\sigma_1,\\ldots,\\sigma_r:E\\to L$ are linearly independent over $L$ as functions. Otherwise choose a nonzero relation $\\sum c_i\\sigma_i(x)=0$ valid for every $x$, with the fewest nonzero coefficients, all listed coefficients nonzero. A one-term relation is impossible by evaluating at 1. For two distinct maps choose $y$ with $\\sigma_1(y)\\ne\\sigma_r(y)$. The relation at $xy$ minus $\\sigma_r(y)$ times the relation at $x$ removes the last term and retains the first. This is a shorter nonzero relation, contradiction. This is **Artin independence**; its coefficients lie in the codomain field, not merely the base.

Let $E/F$ be finite and let $H$ be a finite group of $F$-automorphisms of $E$. Put $K=E^H$, $m=|H|$, and $n=[E:K]$. The maps in $H$ are $K$-linear. Since $\\operatorname{Hom}_K(E,E)$ has dimension $n$ over $E$ (a map is determined by its values on a $K$-basis), independence gives $m\\le n$.

If $n>m$, choose $K$-independent $x_1,\\ldots,x_{m+1}$. The matrix $(\\sigma_i(x_j))$ has a nonzero null vector $c$ over $E$. Choose one with smallest support and normalize a nonzero coordinate to 1. For $\\tau\\in H$, applying $\\tau$ to all equations permutes their rows, so $\\tau(c)$ is another null vector. The vector $\\tau(c)-c$ has smaller support because its normalized coordinate is zero; its other nonzero coordinates occur only in the old support. Minimality makes it zero. Thus every coordinate is fixed by $H$, so $c_j\\in K$. The identity row gives the forbidden $K$-linear dependence among the $x_j$. Hence $n\\le m$ and

$$[E:E^H]=|H|.$$

Now suppose $E/F$ is finite Galois and $G=\\operatorname{Gal}(E/F)$. Its embedding count is $|G|=[E:F]$, so Artin's formula and the tower law give $E^G=F$. For any intermediate $K$, the same splitting polynomial makes $E/K$ normal, and each minimal polynomial over $K$ divides a separable one over $F$, so $E/K$ is separable. Thus $|\\operatorname{Gal}(E/K)|=[E:K]$. Artin's formula then forces $E^{\\operatorname{Gal}(E/K)}=K$. For any $H\\le G$, the inclusion $H\\subseteq\\operatorname{Gal}(E/E^H)$ and equal orders make it equality. These are the two inverse constructions, with inclusion reversed and

$$[E^H:F]=[G:H].$$

For $\\sigma\\in G$, direct substitution gives $E^{\\sigma H\\sigma^{-1}}=\\sigma(E^H)$. Hence $H$ is normal precisely when its field $K$ is stable under all $\\sigma$. Every $F$-embedding of $K$ extends to one of $E$ by the embedding-extension theorem; normality of $E/F$ makes that extension a member of $G$. Stability is therefore equivalent to normality of $K/F$. In the stable case restriction $G\\to\\operatorname{Gal}(K/F)$ is onto by the same extension argument, with kernel $H$. The first isomorphism theorem gives $\\operatorname{Gal}(K/F)\\cong G/H$. Separability of $K/F$ is inherited, so “normal” here also makes $K/F$ Galois.

### M1.3 — A complete worked lattice and a contrasting cubic

Let $u^2=2,v^2=3$ and $K=\\mathbb Q(u,v)$. If $v=a+bu$ for rationals $a,b$, squaring and comparing $1,u$ coefficients gives $ab=0$, then either $a^2=3$ or $b^2=3/2$. Prime exponents in rational squares rule out both. Thus $[K:\\mathbb Q]=4$ and $(1,u,v,uv)$ is a basis by the product-basis theorem. Substituting independent signs of $u,v$ respects all multiplication relations in this basis and is its own inverse. Consequently these are four actual automorphisms, not just possible root images.

Write $a(u,v)=(-u,v)$ and $b(u,v)=(u,-v)$. The group is $\\{1,a,b,ab\\}$, with $a^2=b^2=1$ and $ab=ba$. Its only subgroups are $\\{1\\},\\langle a\\rangle,\\langle b\\rangle,\\langle ab\\rangle,G$: a subgroup with two distinct nonidentity elements contains their product and is all of $G$. For $z=A+Bu+Cv+Duv$, invariance under $a,b,ab$ respectively forces $(B,D)=(0,0)$, $(C,D)=(0,0)$, $(B,C)=(0,0)$. Thus their fixed fields are, respectively, $\\mathbb Q(v),\\mathbb Q(u),\\mathbb Q(uv)$. The endpoint fields are $K$ and $\\mathbb Q$. Their degrees over $\\mathbb Q$ are $4,2,2,2,1$, equal to the corresponding subgroup indices. There are no missing intermediate fields because the proved correspondence and complete subgroup list exclude them. Every subgroup is normal, so every intermediate extension over $\\mathbb Q$ is Galois.

For the cubic splitting field in M1.1, its six automorphisms inject into permutations of its three roots: fixing all roots fixes $\\rho$ and $\\omega$. Equal orders give $S_3$. Let $r=(123)$ and $s=(23)$ under a chosen root labelling. Then $\\langle r\\rangle$ is normal, fixes $\\mathbb Q(\\omega)$ of degree two, and the quotient group is $C_2$. Each transposition subgroup is nonnormal: conjugating $(23)$ by $(123)$ gives a different transposition. The subgroup fixing the real root is $\\langle s\\rangle$, and its fixed field is exactly $\\mathbb Q(\\rho)$: containment plus $6/2=3$ forces equality. The other two transposition subgroups give its two conjugate cubic fields. The trivial subgroup and $S_3$ give endpoints, and $A_3$ gives the unique quadratic field. This is the complete subgroup list of $S_3$, so it is the complete intermediate-field list.

### M1.4 — Required unit practice and complete public key

**AA-ADV-M1-Q1.** For $\\theta=u+v$, derive and prove the minimal polynomial over $\\mathbb Q$. Identify the fixed field of $ab$ by coefficients, not by merely spotting a fixed element.

**AA-ADV-M1-Q2.** Prove Frobenius on $\\mathbb F_{p^n}$ has exact order $n$ over $\\mathbb F_p$. State which existence result you use. Contrast it with $\\mathbb F_p(t^{1/p})/\\mathbb F_p(t)$.

**AA-ADV-M1-Q3.** Reconstruct both inequalities in the Artin proof and locate exactly where finiteness, independence, and normalization enter. Explain why a cubic root field can have trivial automorphism group without contradicting that proof.

**Public key Q1.** $\\theta^2=5+2uv$, hence $(\\theta^2-5)^2=24$ and $\\theta^4-10\\theta^2+1=0$. Since $(u+v)(v-u)=1$, $\\theta^{-1}=v-u$; thus $u=(\\theta-\\theta^{-1})/2$ and $v=(\\theta+\\theta^{-1})/2$. Therefore $\\mathbb Q(\\theta)=K$ has degree four; the annihilating monic quartic is minimal. The map $ab$ changes $B,C$ signs and preserves $A,D$, so its fixed elements are exactly $A+Duv$, namely $\\mathbb Q(\\sqrt6)$. Containment alone would not prove equality.

**Public key Q2.** Use the **imported existence theorem** that a field $\\mathbb F_{p^n}$ of $p^n$ elements exists and contains $\\mathbb F_p$. Binomial coefficients give $(x+y)^p=x^p+y^p$; injectivity and finiteness make Frobenius an automorphism. Lagrange on the nonzero multiplicative group gives $x^{p^n}=x$ for every element. If a positive $d<n$ made $\\operatorname{Fr}^d=1$, all $p^n$ elements would be roots of $X^{p^d}-X$, impossible by the polynomial root bound. Thus the order is $n$. The field is the splitting field of $X^{p^n}-X$ with derivative $-1$, so its Galois group has size $n$ and equals these powers. In the rational-function example let $w^p=t$. The variable $t$ is not a $p$th power in $\\mathbb F_p(t)$, as its exponent at the irreducible factor $t$ is 1. Eisenstein/Gauss gives degree $p$. There is only one root $w$ with multiplicity $p$, so every base automorphism fixes $w$. The degree is $p$ but the group is trivial; separability fails.

**Public key Q3.** The finite dimension $n$ of the space of $K$-linear maps, together with Artin independence, gives $m\\le n$. The finite $m$-row matrix on $m+1$ alleged independent elements gives a null vector. Minimal finite support and a coordinate normalized to 1 make every transformed vector identical, producing coefficients in the fixed field and the contradiction $n\\le m$. The result applies to $E/E^H$; it does not assert $E^H=F$ for every base $F$. In the cubic root field $H=\\{1\\}$ has $E^H=E$ and $[E:E^H]=1$. The step $E^G=F$ required the normal separable embedding count, which that field lacks.

## Module 2: presentations and exactness

### M2.1 — Generators, relations, and what a matrix means

An $R$-module is an abelian group with a unital distributive $R$-action. In this course rings in matrix presentations are commutative, vectors are columns, and the columns of an $n\\times m$ matrix $A$ generate relations in the target $R^n$. Thus the presented module is $\\operatorname{coker}A=R^n/\\operatorname{im}A$, appearing in the exact sequence $R^m\\xrightarrow{A}R^n\\to\\operatorname{coker}A\\to0$. A finite generating set supplies a surjection $R^n\\to M$; finite presentation further requires finitely many generators for its kernel. Those are different conditions over a non-Noetherian ring.

Read [Morphisms First, §§1.1–1.5](#/item/book-morphisms-modules-categories?chapter=modules-linear-algebra-over-a-ring). A map $f:M\\to N$ induces $M/\\ker f\\to\\operatorname{im}f$, $m+\\ker f\\mapsto f(m)$. Equal representatives differ by an element killed by $f$, so the map is well-defined; its kernel is zero and it is onto. This proves the first isomorphism theorem without assuming bases.

For integer presentations we can prove the requisite finiteness directly. If $P\\le\\mathbb Z^n$, project to the last coordinate, whose image is $d\\mathbb Z$. By induction its kernel is finite free. If $d=0$, that kernel is $P$. Otherwise select $v\\in P$ with last coordinate $d$; every element subtracts a multiple of $v$ to enter the kernel. The kernel basis together with $v$ spans and is independent by its last coordinate. Thus subgroups of finite free abelian groups are finite free, and every finitely generated abelian group has a finite relation matrix.

Over a PID the same induction uses the principal image ideal $(d)$ in place of $d\\mathbb Z$; if $d\\ne0$, a domain allows its coefficient to be recovered uniquely. Hence submodules of $R^n$ are finite free. The Smith existence argument over a general PID uses Bézout reductions, or ascending principal-ideal chains, rather than a numerical Euclidean remainder unless the PID is Euclidean. We **import the general PID Smith theorem** here. We prove its integer version next and use it for every required calculation. The theorem yields $M\\cong R^{n-r}\\oplus\\bigoplus_iR/(d_i)$ with $d_i\\mid d_{i+1}$; it applies to finite modules over a PID, not arbitrary rings.

### M2.2 — Smith form is a reversible classification method

Read [Finitely Generated Abelian Groups, §§1, 5–7](#/item/book-algebra-patterns-structure?chapter=finitely-generated-abelian-groups). A row or column swap, sign change, or addition of an integer multiple has determinant $\\pm1$ and an integer inverse. With a positive upper-left entry, divide other entries in its column and row by it. A nonzero remainder becomes a strictly smaller positive pivot. Once divisibility permits clearing that row and column, inspect the remaining block: if its entry $b$ is not divisible by the pivot $a$, add its row into the first row and perform the column remainder step on $b$. Again the positive pivot strictly decreases. This prevents accepting $\\operatorname{diag}(2,3)$ prematurely: the block test forces further reduction to $\\operatorname{diag}(1,6)$. Strict descent terminates; induction on the remaining block gives a diagonal $s_1\\mid\\cdots\\mid s_r$. All later entries remain divisible by $s_1$ under operations within the block.

If $UAV=D$ with $U,V$ unimodular, $\\operatorname{im}(AV)=\\operatorname{im}A$ and $x+\\operatorname{im}A\\mapsto Ux+\\operatorname{im}D$ is the induced isomorphism. Each nonzero $s_i$ gives a cyclic factor $\\mathbb Z/s_i$, and each unused target coordinate gives a free $\\mathbb Z$. This proves existence. Uniqueness can be seen prime by prime: in the finite torsion subgroup $T$, the dimensions $\\dim_{\\mathbb F_p}(p^{j-1}T_p/p^jT_p)$ count the $p$-power summands of exponent at least $j$; their differences recover the exact exponents. Rationalizing recovers the free rank. These are intrinsic module invariants.

For the actual source example
$$A=\\begin{pmatrix}2&6\\\\4&8\\end{pmatrix},$$
$R_2\\leftarrow R_2-2R_1$ gives $\\begin{pmatrix}2&6\\\\0&-4\\end{pmatrix}$; $C_2\\leftarrow C_2-3C_1$ gives $\\operatorname{diag}(2,-4)$; negating row 2 gives $\\operatorname{diag}(2,4)$. Concretely,
$$U=\\begin{pmatrix}1&0\\\\2&-1\\end{pmatrix},\\qquad
V=\\begin{pmatrix}1&-3\\\\0&1\\end{pmatrix},\\qquad UAV=\\operatorname{diag}(2,4).$$
Thus $N=\\operatorname{coker}A\\cong\\mathbb Z/2\\oplus\\mathbb Z/4$, with order 8 and exponent 4. The coordinate map is $(x,y)\\mapsto(x\\bmod2,\\,2x-y\\bmod4)$. Both relation columns map to zero; invertibility of $U$ proves the full kernel is precisely $\\operatorname{im}A$. Rational row reduction sees only that $A$ has rank two and $N\\otimes\\mathbb Q=0$; it cannot recover its eight elements.

The source Exercise 1.3 has only its final diagonal printed. Here is a full preparatory trace for its $A_D$: $C_1\\leftrightarrow C_2$, $R_2\\leftarrow R_2-3R_1$, $C_2\\leftarrow C_2-2C_1$, $R_2\\leftarrow-R_2$ gives $\\operatorname{diag}(2,12)$, as in D2. Apply the known reversible method, rather than mistaking a supplied diagonal for a worked reduction.

### M2.3 — Exactness, splitting, and categorical boundaries

For $0\\to A\\xrightarrow{i}B\\xrightarrow{p}C\\to0$, a section $s:C\\to B$ with $ps=1$ gives
$B=i(A)\\oplus s(C)$: subtract $sp(b)$ to find the $A$ component, and apply $p$ to check the intersection is zero. Conversely, a complement makes $p$ an isomorphism on it, whose inverse is a section. Thus exactness alone supplies a quotient; splitting adds a compatible direct-sum identification.

For $\\mathbb Z\\xrightarrow{\\times2}\\mathbb Z\\to\\mathbb Z/2$, the kernel/image equations hold, but a section would send the element of order two to an odd integer killed by two. No such integer exists. For $\\mathbb Z/4$ with its order-two subgroup, a section of reduction modulo two would require an odd class killed by two; the odd classes instead have order four. Both are nonsplit, for different middle modules.

Read [Abelian Categories, §§2.1–2.7](#/item/book-morphisms-modules-categories?chapter=abelian-categories) for products, coproducts, kernels and cokernels as universal maps. In $R$-modules, a map $h:X\\to M$ killed by $f$ factors uniquely through the inclusion $\\ker f\\to M$. A map out of $N$ killing $\\operatorname{im}f$ descends uniquely to $N/\\operatorname{im}f$. Finite direct sums have projections and injections giving both product and coproduct. These statements justify exactness in the category of modules, not just at the level of dimensions.

A useful failure: in torsion-free abelian groups, multiplication by two on $\\mathbb Z$ is monic and epic. It is epic because if $u,v:\\mathbb Z\\to T$ agree after multiplication by two, then $2(u(1)-v(1))=0$ and torsion-freeness makes $u=v$. It is not invertible. In an abelian category a map both monic and epic must be invertible: a monic $f$ is the kernel of its cokernel, and epicness makes that cokernel zero; the kernel of the zero map is an identity, so kernel uniqueness makes $f$ an isomorphism. The category of torsion-free groups is therefore not abelian. Saying its ambient quotient leaves the category is insufficient on its own: its categorical cokernel there can be zero.

Exercise 2.5 uses the **imported Freyd–Mitchell embedding theorem from §2.7**: every small abelian category admits a fully faithful exact embedding into $R$-modules for some ring $R$. Here small means that its objects and morphisms form sets. The theorem is not a claim that an arbitrary large abelian category has such an embedding. For the exercise's general statement, we use the usual convention that an abelian category is **locally small**, meaning each collection $\\operatorname{Hom}(X,Y)$ is a set, although the whole collection of objects need not be a set.

**Finite-diagram reduction.** Let a finite diagram lie in a locally small abelian category $\\mathcal A$. Start with the finite set $S_0$ of its objects and a chosen zero object. Given a set of objects $S_n$, take all morphisms in $\\mathcal A$ between pairs of objects in $S_n$. This is a set, since it is a set-indexed union of hom sets. Form $S_{n+1}$ by adjoining chosen ambient kernels and cokernels of all these morphisms, and chosen finite biproducts of all finite lists from $S_n$. Such choices of set-indexed families of objects use the usual set-theoretic choice convention. Each stage remains a set of objects. The countable union $S=\\bigcup_{n\\ge0}S_n$ is therefore a set, and the full subcategory $\\mathcal C$ of $\\mathcal A$ on $S$ is small: its morphisms are again a set-indexed union of hom sets.

The subcategory $\\mathcal C$ is closed under ambient finite biproducts, kernels and cokernels. Indeed, any finite collection of its objects occurs together in some $S_n$, and every map between them is among the ambient maps considered at that stage, so the required objects occur in $S_{n+1}$. Fullness supplies all maps between these objects, so their ambient universal properties remain valid in $\\mathcal C$. Its hom groups and bilinear composition are inherited, making $\\mathcal C$ additive. For every morphism, its coimage (the cokernel of its kernel) and image (the kernel of its cokernel) lie in $\\mathcal C$; the canonical coimage-to-image map is an isomorphism in $\\mathcal A$ because $\\mathcal A$ is abelian. Both that map and its inverse lie in the full subcategory. Hence $\\mathcal C$ is abelian. Kernels, cokernels and images are computed as in $\\mathcal A$, so its inclusion is exact and preserves and reflects exactness of the given diagram.

Apply Freyd–Mitchell to this small abelian category $\\mathcal C$, not to all of $\\mathcal A$. Its fully faithful exact embedding sends the five-lemma diagram to a module diagram with exact rows; it preserves the epic first vertical map, the isomorphisms in positions two and four, and the monic fifth map. The complete injectivity and surjectivity chase printed in Exercise 2.5 then proves that the image of the middle map is an isomorphism. A fully faithful functor reflects isomorphisms: fullness lifts the image map's inverse, and faithfulness turns its two inverse identities into identities in $\\mathcal C$. The middle map is therefore an isomorphism in $\\mathcal C$ and in $\\mathcal A$. This supplies the size reduction omitted by a bare instruction to embed a finite diagram.

For the assigned Exercise 2.5, include this finite-diagram reduction before the printed element chase and state the smallness hypothesis of §2.7. The same reduction supports finite-diagram applications in §2.6. We import the embedding theorem itself, not its proof, and make no derived-category programme claim. A diagram already in a module category can be chased directly without that import.

### M2.4 — Required unit practice and complete public key

**AA-ADV-M2-Q1.** Write the exact presentation for $N=\\operatorname{coker}A$ above. Is it legitimate to prepend $0\\to\\mathbb Z^2$? Compute its localizations at $(2)$ and $(3)$ once Module 4's construction is available.

**AA-ADV-M2-Q2.** Put $B=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$. Identify $\\operatorname{coker}B$ with a full reversible reduction and a concrete quotient map. Explain how a nonzero finite quotient obstructs an integral direct-sum basis while disappearing over $\\mathbb Q$.

**AA-ADV-M2-Q3.** Does the swap $S(x,y)=(y,x)$ descend to $N$? Check a relation column explicitly. Contrast it with descent to $\\operatorname{coker}B$.

**Public key Q1.** The sequence $\\mathbb Z^2\\xrightarrow{A}\\mathbb Z^2\\to N\\to0$ is exact by definition. Since $\\det A=-8\\ne0$, the matrix is injective over $\\mathbb Q$ and hence on its integer subgroup; so $0$ can indeed be prepended here. This is an extra check, not part of every presentation. Smith form gives $N_{(2)}\\cong\\mathbb Z_{(2)}/2\\oplus\\mathbb Z_{(2)}/4\\cong\\mathbb Z/2\\oplus\\mathbb Z/4$: every odd denominator acts invertibly on each finite 2-primary factor. At $(3)$, 2 and 4 are units and both factors vanish. After inverting 2, both vanish too. Exactness of localization will justify applying this to the presentation.

**Public key Q2.** Subtract row 1 from row 2 to get $\\begin{pmatrix}1&1\\\\0&-2\\end{pmatrix}$, subtract column 1 from column 2 to get $\\operatorname{diag}(1,-2)$, then negate row 2. Thus the quotient is $\\mathbb Z/2$. The map $(x,y)\\mapsto x+y\\bmod2$ kills both columns; its kernel is exactly the vectors with the same coordinate parity, because for such a vector
$(x,y)=((x+y)/2)(1,1)+((x-y)/2)(1,-1)$ with integer coefficients. Hence the two columns span an index-two sublattice, not all of $\\mathbb Z^2$. Over $\\mathbb Q$ the two halves are allowed, so the columns become a basis and the quotient vanishes.

**Public key Q3.** To descend, $S(\\operatorname{im}A)$ must lie in $\\operatorname{im}A$. Swapping its first column $(2,4)$ gives $(4,2)$. If $(4,2)=r(2,4)+s(6,8)$, subtracting twice the first coordinate equation from the second gives $-4s=-6$, so $s=3/2$, impossible in $\\mathbb Z$. Thus no swap action on $N$ is defined by this formula. For $B$, swap fixes $(1,1)$ and negates $(1,-1)$, so it preserves its image. It descends to the quotient $\\mathbb Z/2$; there it acts trivially since $x+y$ is unchanged. A cokernel is not automatically a representation quotient: its relation module must be invariant.

## Module 3: finite group representations

### M3.1 — Actions, group algebras, subobjects, and quotients

A representation of a finite group $G$ on a finite-dimensional $k$-space $V$ is a homomorphism $\\rho:G\\to\\operatorname{GL}_k(V)$. Extend by linearity to a left $k[G]$-module: $(\\sum a_gg)v=\\sum a_g\\rho(g)v$. The group law proves associativity of this action, and conversely the units $g$ of $k[G]$ give invertible linear maps satisfying the group law. A subspace $W$ is a subrepresentation exactly when all $\\rho(g)$ preserve it. Only then is $g(v+W)=gv+W$ well-defined on the quotient. An intertwiner satisfies $T\\rho(g)=\\sigma(g)T$; its kernel and image are invariant. Thus exact sequences in representation theory are exact sequences of $k[G]$-modules, a stricter condition than exactness as $k$-spaces.

Every $G$-set $X$ gives the permutation module with basis $e_x$, $g e_x=e_{gx}$. Its invariant vector $\\sum e_x$ spans a trivial representation; the sum-of-coordinates map is invariant and its kernel is the augmentation subrepresentation. If $|X|$ is a unit in $k$, the line and that kernel give a direct sum: subtract the average coefficient. If $|X|=0$ in $k$, the constant vector itself lies in the kernel, so this particular decomposition fails.

For $C_2=\\{1,t\\}$, the regular module $k[C_2]$ has basis $e_0=1,e_1=t$ and $t$ acts by $S=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$. Its square is the identity. When $2$ is invertible the eigenvectors $w_+=e_0+e_1,w_-=e_0-e_1$ form a basis, and
$$P_+=(I+S)/2,\\qquad P_-=(I-S)/2$$
are mutually annihilating projections summing to the identity. Equivalently,
$$k[t]/(t^2-1)\\longrightarrow k\\times k,\\qquad f\\mapsto(f(1),f(-1))$$
has inverse $(a,b)\\mapsto ((a+b)/2)+((a-b)/2)t$. The kernel is $(t^2-1)$ by division or the factor theorem, and the two interpolation formulas prove surjectivity. These idempotents belong to the group algebra, which is not a field.

### M3.2 — Maschke's theorem and its precise failure

**Maschke.** If $\\operatorname{char}k$ does not divide $|G|$, every invariant subspace $W\\le V$ has an invariant complement. Choose any $k$-linear projection $p:V\\to W$ restricting to $1_W$ and average:
$$P=\\frac1{|G|}\\sum_{g\\in G}\\rho(g)p\\rho(g)^{-1}.$$
Each summand lands in $W$ because $W$ is invariant, and each restricts to $1_W$; hence $P$ has image $W$ and $P^2=P$. For $h\\in G$, conjugating $P$ merely reindexes the sum $g\\mapsto hg$, so $P$ is equivariant. Consequently $\\ker P$ is invariant and $V=W\\oplus\\ker P$. Repeatedly choose an irreducible submodule of least positive dimension and split it off. Finite dimension makes this process terminate. Thus every finite-dimensional module is a direct sum of irreducibles.

The field hypothesis permits the initial linear projection. Over $\\mathbb Z$, invertibility of a group order alone would not prove every submodule has such a projection. For example the trivial $C_1$-module $2\\mathbb Z\\le\\mathbb Z$ has no complement. The averaging proof states exactly what it needs.

In characteristic two the regular $C_2$ module has $\\varepsilon=t-1=t+1$, so $k[C_2]=k[\\varepsilon]/(\\varepsilon^2)$. Its invariant line is $W=k(e_0+e_1)$, and the augmentation map $q(x,y)=x+y$ gives
$$0\\longrightarrow k\\xrightarrow{c\\mapsto(c,c)}k^2\\xrightarrow{q}k\\longrightarrow0$$
with trivial action on the two endpoint modules. The maps are equivariant, the first injective, the last onto, and the middle kernel exactly $W$. It does not split equivariantly: any invariant vector has equal coordinates and hence sum zero; an equivariant section would have to send 1 to an invariant vector of sum one. It does split as vector spaces by $1\\mapsto(1,0)$, whose image is not invariant. Equivalently every invariant line consists of fixed vectors, since an eigenvalue of an involution in characteristic two satisfies $(\\lambda-1)^2=0$ and hence is 1; the only such line is $W$. This is a full counterexample, not merely a missing denominator in a proof.

### M3.3 — Characters: a proved decomposition method over the complex numbers

For this paragraph the scalar field is $\\mathbb C$. If $V,W$ are irreducible, any nonzero intertwiner is injective and onto by invariance of kernel/image. Moreover an endomorphism of irreducible $V$ has an eigenvalue $\\lambda$ (the **fundamental theorem of algebra is imported**); its nonzero kernel for $T-\\lambda I$ makes $T=\\lambda I$. Thus $\\dim\\operatorname{Hom}_G(V,W)$ is zero for nonisomorphic irreducibles and one for isomorphic ones. This is Schur's lemma over an algebraically closed field; the scalar conclusion is not asserted over every field.

Define $\\chi_V(g)=\\operatorname{tr}\\rho(g)$. Conjugating matrices preserves trace, direct sums add traces, and restriction to a subgroup just restricts the function. A finite-group complex representation can be made unitary: average any positive definite Hermitian form over the finite group. Hence $\\chi_V(g^{-1})=\\overline{\\chi_V(g)}$.

Let $G$ act on $\\operatorname{Hom}_{\\mathbb C}(V,W)$ by $gT=\\sigma(g)T\\rho(g)^{-1}$. Averaging these operators is a projection onto $\\operatorname{Hom}_G(V,W)$, by the same reindexing argument. The trace of a projection is its rank. On matrix units the trace of $T\\mapsto ATB$ is $\\operatorname{tr}A\\,\\operatorname{tr}B$. Therefore
$$\\dim\\operatorname{Hom}_G(V,W)=\\frac1{|G|}\\sum_{g\\in G}\\chi_W(g)\\overline{\\chi_V(g)}.$$
Schur now proves irreducible character orthogonality. Maschke decomposes any $W$, and additivity shows that this inner product with $\\chi_V$ is its multiplicity. Equal complex characters therefore give isomorphic representations, after all irreducibles are accounted for. None of this proves character classification in modular characteristic.

For the regular complex representation, $g$ permutes the basis indexed by $G$. Only $g=1$ fixes basis elements, so its character is $|G|$ there and zero elsewhere. The inner product with an irreducible character is its degree. Every irreducible actually occurs: for $0\\ne v\\in V$, the map $\\mathbb C[G]\\to V$, $\\sum a_gg\\mapsto\\sum a_ggv$ has nonzero invariant image and hence is onto; Maschke splits it. Consequently the regular decomposition is $\\bigoplus_V(\\dim V)V$ and $\\sum_V(\\dim V)^2=|G|$, with no unseen irreducibles omitted.

### M3.4 — A genuine nonabelian example, restriction, and induction

Let $S_3$ act on $\\mathbb C^3$ by permuting coordinates. The constant line and $W=\\{(x,y,z):x+y+z=0\\}$ give a direct sum. This $W$ is irreducible: for a nonzero invariant subspace choose a nonzero vector in it. Some two coordinates differ, since a constant vector in $W$ is zero. Subtract its image under the transposition of those coordinates; a nonzero multiple of $e_i-e_j$ lies in the subspace. Permuting produces all coordinate differences, which span $W$.

The permutation character counts fixed positions. On identity, transpositions, and 3-cycles it is $(3,1,0)$, so $\\chi_W=(2,0,-1)$. Trivial and sign characters are $(1,1,1)$ and $(1,-1,1)$. Their squared degrees sum to $1+1+4=6$, exhausting the regular representation and hence all irreducibles. Conjugacy-class sizes are $(1,3,2)$; these weights, not an unweighted three-entry dot product, belong in inner products.

To see actual matrices, use $f_1=e_1-e_3,f_2=e_2-e_3$. For $s=(12)$ and $r=(123)$, read composition right to left:
$$\\rho_W(s)=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\qquad
\\rho_W(r)=\\begin{pmatrix}-1&-1\\\\1&0\\end{pmatrix}.$$
Direct multiplication gives $s^2=r^3=I$ and $srs=r^{-1}$, the group relations. Restricting to $\\langle s\\rangle$ gives the two eigenlines spanned by $f_1+f_2,f_1-f_2$, so $\\operatorname{Res}^{S_3}_{C_2}W\\cong1\\oplus\\operatorname{sgn}$. Its restricted character is $(2,0)$. Restricting to $\\langle r\\rangle=C_3$ instead yields eigenvalues $\\omega,\\omega^2$, since its characteristic polynomial is $X^2+X+1$. The one-dimensional complex representation $r\\mapsto\\omega$ is not a one-dimensional real representation; a real one-dimensional finite-order matrix has eigenvalue $\\pm1$.

For completeness, induction constructs larger representations rather than only taking them apart. For $H\\le G$ and a $k[H]$-module $U$, define $\\operatorname{Ind}_H^G U=k[G]\\otimes_{k[H]}U$, where $gh\\otimes u=g\\otimes hu$. Left multiplication on the first factor defines the $G$ action and respects this relation. Choosing left coset representatives gives one copy of $U$ per coset, so its dimension is $[G:H]\\dim U$.

There is a natural bijection
$$\\operatorname{Hom}_G(k[G]\\otimes_{k[H]}U,V)\\cong\\operatorname{Hom}_H(U,\\operatorname{Res}V).$$
Given $F$, take $u\\mapsto F(1\\otimes u)$. It is $H$-linear because $1\\otimes hu=h\\otimes u$. Conversely an $H$-linear $\\phi$ gives $g\\otimes u\\mapsto g\\phi(u)$; the tensor relation is respected by $H$-linearity and the map is $G$-linear. These constructions are inverse. This proves Frobenius reciprocity for Hom spaces without an imported character formula. With $U$ trivial, $\\operatorname{Ind}_H^G1$ is the permutation representation on $G/H$; for the order-two stabilizer in $S_3$ this is exactly $1\\oplus W$.

Read [Representation Theory of $S_n$](#/item/book-finite-algebra-computation?chapter=representation-theory-of-sn) for its four required exercises after this general sequence. The **partition classification, hook-length formula, and Murnaghan–Nakayama rule are imported** in that reading. The course requires their stated finite applications, while Maschke, Schur, character multiplicities, and reciprocity have proofs here. Those four $S_n$ exercises alone are not the representation strand.

### M3.5 — Required unit practice and complete public key

**AA-ADV-M3-Q1.** In the $S_3$ example verify the matrices, compute the three complex irreducible character inner products, and decompose the tensor square $W\\otimes W$. State the field dependence.

**AA-ADV-M3-Q2.** Prove the characteristic-two short exact sequence of M3.2 does not split as a representation but does split as vector spaces. Describe all idempotents in $\\mathbb F_2[\\varepsilon]/(\\varepsilon^2)$.

**AA-ADV-M3-Q3.** Use reciprocity to find the multiplicities in $\\operatorname{Ind}_{\\langle s\\rangle}^{S_3}1$, then reconcile the dimension with the coordinate permutation module.

**Public key Q1.** Swapping $e_1,e_2$ exchanges $f_1,f_2$. Cycling sends $f_1$ to $f_2-f_1$ and $f_2$ to $-f_1$, giving the displayed columns. Multiplication gives $r^2=\\begin{pmatrix}0&1\\\\-1&-1\\end{pmatrix}$, $r^3=I$, and $srs=r^2$. The weighted norms are $(1+3+2)/6=1$ for trivial and sign, and $(4+0+2)/6=1$ for $W$. The cross products are $(1-3+2)/6=0$, $(2+0-2)/6=0$, and $(2+0-2)/6=0$. Tensor products multiply traces (basis tensor matrix entries give this), so $\\chi_{W\\otimes W}=(4,0,1)$. Its inner products with trivial, sign, and $W$ are $(4+0+2)/6=1$, the same 1, and $(8+0-2)/6=1$. Thus $W\\otimes W\\cong1\\oplus\\operatorname{sgn}\\oplus W$, dimensions $4=1+1+2$. This proof uses complex semisimplicity and complex character orthogonality. Reducing these inner-product divisions in characteristic 2 or 3 is invalid.

**Public key Q2.** Equivariance, kernel and image were computed in M3.2. A section must take 1 to a vector fixed by $S$, hence $(a,a)$, whose augmentation is $2a=0$, a contradiction. The linear section $1\\mapsto(1,0)$ has augmentation 1 and is not equivariant since $S(1,0)=(0,1)$. For an algebra element $a+b\\varepsilon$, its square is $a^2$ in characteristic two. Over $\\mathbb F_2$, the equation $a^2=a+b\\varepsilon$ forces $b=0$; hence the only idempotents are 0 and 1. There can be no two nonzero orthogonal idempotents giving the rational product decomposition.

**Public key Q3.** The restrictions of trivial, sign, and $W$ to $\\langle s\\rangle$ have invariant dimensions $1,0,1$. Reciprocity therefore gives those multiplicities in the induction of the trivial character. Maschke makes these dimensions multiplicities, so the result is $1\\oplus W$. Its dimension is three, equal to $[S_3:\\langle s\\rangle]$. The coset set has three elements and is equivariantly identified with the three positions by sending $gH$ to the position fixed by $H$ after applying $g$. Thus this is the earlier coordinate permutation module, with matching action and dimension, not just matching abstract vector-space size.

## Module 4: localization and Noetherian methods

### M4.1 — Fractions must survive zero divisors

All rings in this module are commutative with identity and ring maps preserve identity. Let $S$ be multiplicatively closed, contain 1 and exclude 0. Define $(r,s)\\sim(r',s')$ if some $u\\in S$ kills $rs'-r's$. Reflexivity and symmetry are immediate. For transitivity, if $u(rs'-r's)=0$ and $v(r's''-r''s')=0$, multiply the first difference by $s''$, the second by $s$, and add. Then $uvs'(rs''-r''s)=0$, with $uvs'\\in S$. Thus the relation is transitive even when cross multiplication itself does not define equality.

Set $r/s+r'/s'=(rs'+r's)/(ss')$ and $(r/s)(r'/s')=rr'/(ss')$. To check independence when replacing $r/s$ by $a/b$ and $r'/s'$ by $c/d$, suppose $u(rb-as)=0$ and $v(r'd-cs')=0$. For products the cross difference is
$$rr'bd-acss'=r'd(rb-as)+as(r'd-cs'),$$
annihilated by $uv$. For sums the cross difference is
$$(rs'+r's)bd-(ad+cb)ss'=s'd(rb-as)+sb(r'd-cs'),$$
also annihilated by $uv$. Ring laws follow by clearing denominators from the polynomial identities for addition and multiplication. The class $1/1$ is an identity, and $s/1$ has inverse $1/s$. This constructs $S^{-1}R$.

If $f:R\\to T$ makes every $f(s)$ a unit, the forced extension is $\\widetilde f(r/s)=f(r)f(s)^{-1}$. The equality relation implies $f(u)(f(r)f(s')-f(r')f(s))=0$; invertibility of $f(u),f(s),f(s')$ proves the images equal. The formulas preserve operations. Uniqueness follows from $r/s=(r/1)(s/1)^{-1}$. The kernel of $R\\to S^{-1}R$ is exactly $\\{r:\\exists s\\in S,\\ sr=0\\}$.

For $R=\\mathbb Z/6$ and $S=\\{1,2,4\\}$ (the powers of 2), $3/1=0/1$ because $2\\cdot3=0$. Yet ordinary cross products $3\\cdot1$ and $0\\cdot1$ differ in $R$. The localization is $\\mathbb F_3$: reduction modulo three sends the denominators to units and gives the universal map; conversely $3$ is killed and 2 is already a unit modulo three. This is an exact example of why the annihilating factor cannot be omitted.

### M4.2 — Prime correspondence and the visible part of a spectrum

For an ideal $I$, its extension $S^{-1}I$ consists of fractions with some numerator in $I$. Its contraction consists of $r$ for which some $s\\in S$ makes $sr\\in I$; this saturation can exceed $I$. Every ideal $J$ of $S^{-1}R$ is the extension of its contraction: if $r/s\\in J$, multiplying by $s/1$ puts $r/1\\in J$, and conversely divide a contracted numerator by a unit.

If $P$ is prime and disjoint from $S$, the fractions with numerator in $P$ form a proper prime. The numerator criterion is independent of representatives: if $a/s=b/t$ with $b\\in P$, then some $u\\in S$ gives $uat=ubs\\in P$. Since $u,t\\notin P$, primality forces $a\\in P$. Thus 1 is not in that ideal, and if a product numerator $ab$ belongs to $P$, one of $a,b$ does. Its contraction is $P$. Conversely a prime $Q$ upstairs contracts to a prime downstairs, disjoint from $S$ since all denominators are units. The ideal-extension observation recovers $Q$. This proves the inclusion-preserving bijection between $\\operatorname{Spec}(S^{-1}R)$ and primes of $R$ disjoint from $S$.

For a prime $P$, use $S=R\\setminus P$. In $R_P$, a fraction outside $PR_P$ has numerator outside $P$ and inverse $s/r$. Fractions inside $PR_P$ cannot be units because that ideal is proper. Thus these are exactly all nonunits, giving a unique maximal ideal. For $\\mathbb Z_{(2)}$, denominators are odd and numerator parity decides units. Parentheses distinguish this localization from any notation for 2-adic integers. In $\\mathbb Z[1/2]$, denominators are powers of two: these are different rings. In the former 2 is a nonunit; in the latter it is a unit.

The prime spectrum is the set of primes with closed sets $V(I)=\\{P:I\\subseteq P\\}$. One has $V(0)=\\operatorname{Spec}R$, $V(R)=\\varnothing$, arbitrary intersections $V(\\sum I_\\alpha)$, and $V(I)\\cup V(J)=V(IJ)$. For the last assertion, if a prime contains $IJ$ and omits some $a\\in I$, then every $b\\in J$ has $ab\\in P$, so all $b$ belong to $P$. These equalities prove the topology axioms. The basic open $D(f)$ consists of primes omitting $f$ and identifies with $\\operatorname{Spec}R_f$. Localizing at $P$ retains primes contained in $P$, not primes containing it.

For $\\mathbb Z[1/6]$, the surviving primes are $(0)$ and $(p)$ for $p\\ne2,3$. For $k[x,y]_{(x,y)}$, $1+x$ is a unit and $x,y$ are nonunits. The chain $(0)\\subsetneq(x)\\subsetneq(x,y)$ survives, since all its terms are prime and contained in $(x,y)$. The chain gives dimension at least two; no general dimension equality or Nullstellensatz is being inferred from that example.

### M4.3 — Modules, exactness, and a local test

For an $R$-module $M$, use fractions $m/s$ with equality when some $u\\in S$ kills $s'm-sm'$. The same proof as above gives an $S^{-1}R$-module. If $A\\xrightarrow{f}B\\xrightarrow{g}C$ is exact at $B$ and $g(b)/s=0$, there is $u\\in S$ with $ug(b)=0$. Then $ub=f(a)$ for some $a$, so $b/s=f(a)/(us)$ lies in the localized image. Conversely each image maps to zero. An injective map remains injective: $f(a)/s=0$ implies $f(ua)=0$, hence $ua=0$ and $a/s=0$. A surjective map remains onto by lifting the numerator. Thus localization is exact at every position, including endpoints. The argument supplies the denominator multiplier; merely asserting “fractions do not change exactness” would miss it.

For any module, $M=0$ if $M_P=0$ for all maximal ideals $P$. If $m\\ne0$, its annihilator is proper and lies in a maximal ideal $P$ (**existence of a maximal ideal containing a proper ideal is imported, using the usual maximality principle**). If $m/1=0$ in $M_P$, some $s\\notin P$ kills $m$, contradicting $\\operatorname{Ann}(m)\\subseteq P$.

For a finitely generated module $M=(m_1,\\ldots,m_n)$ there is a sharper description:
$$M_P=0\\quad\\Longleftrightarrow\\quad \\operatorname{Ann}(M)\\not\\subseteq P.$$
If $M_P=0$, choose $s_i\\notin P$ killing $m_i$ and take their product $s$. It remains outside $P$ and kills every generator, hence all of $M$. Conversely such an $s$ is a unit after localization and kills all fractions. Thus $\\operatorname{Supp}M=V(\\operatorname{Ann}M)$ for finitely generated $M$. This proof explains exactly where the finite product of denominators needs finite generation. For $N=\\mathbb Z/2\\oplus\\mathbb Z/4$, $\\operatorname{Ann}N=(4)$ and its support in $\\operatorname{Spec}\\mathbb Z$ is just $(2)$.

### M4.4 — Noetherian control and Hilbert's basis theorem

A module is Noetherian if its submodules satisfy the ascending chain condition. This is equivalent to every submodule being finitely generated. If a submodule were not, repeatedly choosing a new element outside the previous finite span would produce a strictly ascending chain. Conversely the union of an ascending chain is a submodule; finitely many generators for that union all lie in one chain member, so the chain stabilizes there.

Submodules and quotients of a Noetherian module are Noetherian. For the converse extension statement, suppose $0\\to A\\to B\\xrightarrow{p}C\\to0$ has Noetherian endpoints. For a submodule $N\\le B$, both $N\\cap A$ and $p(N)$ have finite generating sets. Lift generators of $p(N)$ into $N$. Subtracting their linear combinations from any $n\\in N$ leaves an element of $N\\cap A$, so those lifts together with its generators generate $N$. Hence $B$ is Noetherian. Induction gives that $R^n$ is Noetherian over a Noetherian ring; each finitely generated module, being a quotient of such a finite free module, is Noetherian. This also makes it finitely presented: the kernel of its finite free surjection is finitely generated.

**Hilbert basis theorem, full proof.** Let $R$ be commutative Noetherian and $I\\le R[x]$ a nonzero ideal. The set of leading coefficients of its nonzero elements together with 0 is an ideal $J$ of $R$: align degrees by powers of $x$ to add coefficients, and multiply by constants; a zero resulting leading coefficient contributes 0, while a nonzero one is the leading coefficient of the constructed polynomial. Choose generators $a_1,\\ldots,a_m$ of $J$ and polynomials $f_i\\in I$ with those leading coefficients, of degrees $d_i$. Put $d=\\max d_i$. The module $I\\cap R[x]_{<d}$ is a submodule of the finite free module $R^d$, so choose finite $R$-module generators $h_1,\\ldots,h_l$ for it.

For $f\\in I$ of degree $n\\ge d$, write its leading coefficient as $\\sum r_i a_i$. Then
$$f-\\sum_i r_i x^{n-d_i}f_i$$
has smaller degree, because all exponents $n-d_i$ are nonnegative and the leading coefficient cancels. Repetition terminates in degree $<d$ and a combination of the $h_j$. Thus $I$ is generated as an ideal by the finite list $f_i,h_j$. The zero ideal needs no generators. Therefore $R[x]$ is Noetherian. Iterating gives $k[x_1,\\ldots,x_n]$ for finite $n$; D3's strict chain disproves the infinite-variable claim.

Quotients of Noetherian rings are Noetherian by ideal preimages. A localization is Noetherian because every ideal upstairs is the extension of its contracted ideal, whose finite generators therefore generate it upstairs. Consequently a finitely generated module over a localized Noetherian ring is Noetherian too. This finite-generation method is what licenses local finite presentations in the portfolio; it is not a claim that every algebraic process terminates without a specified descending or ascending measure.

### M4.5 — Local Nakayama and a finite-generation warning

Let $(R,\\mathfrak m)$ be a local ring and $M$ a finitely generated module. If $\\mathfrak m M=M$, then $M=0$. Otherwise choose a generating list $m_1,\\ldots,m_n$ of least positive length. Write $m_n=\\sum_i a_i m_i$ with all $a_i\\in\\mathfrak m$. The element $1-a_n$ is a unit, since if it were in the unique maximal ideal then $1$ would be too. Therefore
$$m_n=(1-a_n)^{-1}\\sum_{i<n}a_i m_i,$$
contradicting minimality. This proves local Nakayama without importing a determinant trick.

More generally, if elements generate $M/\\mathfrak m M$ over $R/\\mathfrak m$, their lifts generate $M$: quotient $M$ by the submodule they generate, obtaining a finitely generated module $C$ with $C/\\mathfrak m C=0$, and apply the lemma. The converse is immediate by reduction. For a nonzero free module $R^n$, the quotient is $(R/\\mathfrak m)^n$, so any generating list has at least $n$ elements.

Finite generation is indispensable. As a module over $R=\\mathbb Z_{(2)}$, the nonzero module $\\mathbb Q$ satisfies $2\\mathbb Q=\\mathbb Q$, hence $\\mathfrak m\\mathbb Q=\\mathbb Q$. It is not finitely generated over $R$: a finite collection of rational numbers has a lower bound on its exponent of 2 in reduced numerator/denominator, and multiplying by elements of $R$ and adding cannot produce arbitrarily negative exponents. Yet $1/2^n$ has exponent $-n$. Nakayama does not apply.

### M4.6 — Required unit practice and complete public key

**AA-ADV-M4-Q1.** For the zero-divisor example prove $3/1=0/1$ but not by direct cross multiplication. List the primes of $\\mathbb Z[1/2]$ and of $\\mathbb Z_{(2)}$.

**AA-ADV-M4-Q2.** Localize the exact sequence $0\\to\\mathbb Z\\xrightarrow{\\times2}\\mathbb Z\\to\\mathbb Z/2\\to0$ at powers of two and at $(2)$. Explain the different outcomes.

**AA-ADV-M4-Q3.** In $R=k[x,y]_{(x,y)}$ let $\\mathfrak m=(x,y)R$. Prove $\\mathfrak m$ requires exactly two generators. Justify the use of finite generation and why $(x,y)^2$ removes precisely the degree-one information.

**AA-ADV-M4-Q4.** Prove $\\mathbb Z[t]/(t^2-1)$ is Noetherian, and decide which part of its rational $C_2$ decomposition remains available after localizing coefficients at $(2)$.

**Public key Q1.** The multiplier 2 lies in $S$ and annihilates 3 modulo six, while $3\\cdot1\\ne0\\cdot1$ there. Thus direct cross multiplication fails but the localization relation works. In $\\mathbb Z[1/2]$ the primes are $(0)$ and extended $(p)$ for odd primes $p$; $(2)$ disappears. In $\\mathbb Z_{(2)}$ only $(0)$ and $(2)$ survive, because these are exactly the primes of $\\mathbb Z$ contained in $(2)$. In both lists the notation denotes their extensions to the named ring.

**Public key Q2.** In $\\mathbb Z[1/2]$, multiplication by two is an isomorphism, so the localized quotient is zero and the exact sequence becomes $0\\to R\\xrightarrow{\\sim}R\\to0\\to0$. In $\\mathbb Z_{(2)}$, two remains a nonunit and the quotient remains $\\mathbb F_2$: reducing an odd-denominator fraction modulo two is well-defined. Multiplication by two is still injective and its image is the kernel, but not onto. There is no section from $\\mathbb F_2$ to this characteristic-zero domain, since any image would be killed by two. Exactness survives; splitting need not appear.

**Public key Q3.** The ring is Noetherian by Hilbert's theorem and localization, and its maximal ideal is generated by $x,y$. Modulo its square every element of $\\mathfrak m$ is represented uniquely by $ax+by$ with $a,b\\in k$. To justify this after localization, write a denominator as $c+\\ell+h$, where $c\\ne0$, $\\ell$ is linear and $h\\in(x,y)^2$; its inverse modulo $(x,y)^2$ is $c^{-1}-c^{-2}\\ell$; multiplying a numerator with zero constant leaves its linear part scaled by $c^{-1}$. No nonzero linear polynomial can belong to the localized square: clearing a denominator with nonzero constant preserves a nonzero linear term, whereas elements of $(x,y)^2$ have none. Hence $\\dim_k\\mathfrak m/\\mathfrak m^2=2$. Any generating list projects to a spanning list, so has at least two elements, and $x,y$ achieve two. Nakayama also proves that any two lifts of a basis generate. Its finite-module condition holds because $\\mathfrak m=(x,y)R$.

**Public key Q4.** $\\mathbb Z$ is Noetherian since every ideal is principal. Hilbert gives $\\mathbb Z[t]$, and quotienting gives the asserted ring; localizing its coefficients preserves Noetherianity. For $R=\\mathbb Z_{(2)}$, any idempotent of $R[t]/(t^2-1)$ has rational evaluations $f(1),f(-1)\\in\\{0,1\\}$ after embedding into $\\mathbb Q[t]/(t^2-1)$. The inverse interpolation formulas require the coefficients $(a+b)/2,(a-b)/2$ to lie in $R$. When $(a,b)$ is $(1,0)$ or $(0,1)$ they do not. Only $(0,0)$ and $(1,1)$ survive, giving the idempotents 0 and 1. Thus the two rational projections are unavailable at $(2)$; Noetherianity does not supply a direct-product decomposition. Over $\\mathbb Z[1/2]$ both are available.

## Ordered source assignments and worked feedback

Follow this map within the module order above. A row naming a range assigns every question in that range, in printed order; rows naming individual IDs assign only those IDs. Read the stated preparation before attempting its questions. Each linked source contains the printed questions and adjacent public answers; the final column names their exact key headings and any expansion here. A link opens the containing chapter or article, not an invented exercise route. A source's remaining exercises and later projects are optional, not additional required work.

| Order and stage | Required preparation and exact assignment | Complete public comparison |
| --- | --- | --- |
| 0 — entry | [Morphisms First, front matter: Prerequisite Diagnostic](#/item/book-morphisms-modules-categories?section=front%3Aprerequisite-diagnostic), Questions 1–8 | Each Question's Answer; D1–D8 above expand the free-rank, Smith, and naturality arguments. These are the same eight tasks, not a second diagnostic. |
| 1 — M1 foundation | [Field Extensions, Algebraic Elements, and Minimal Polynomials](#/item/book-algebra-patterns-structure?chapter=field-extensions-minimal-polynomials), §§2–9; ALG-CH18-E003, E006, E011, E020 | The matching full Solution heading after each exercise. M1.3–M1.4 supply the quartic degree proof and strict degree-bound contrast. |
| 2 — M1 ambient hypotheses | [Splitting Fields, Separability, and Finite Extensions](#/item/book-algebra-patterns-structure?chapter=splitting-fields-separability), §§1–9; ALG-CH19-E005, E007, E010, E016, E020 | The matching full Solution headings. M1.1 and M1-Q2 expand repeated roots, embedding counts, and the inseparable degree failure. |
| 3 — M1 general proof and lattice | [Galois Groups and the Subgroup–Subfield Correspondence](#/item/book-algebra-patterns-structure?chapter=galois-groups-correspondence), §§4–6; ALG-CH20-E012, E014, E015, E018, then every deliverable of ALG-CH20-P001 | Matching Solution headings; P001's Solution framework and rubric, completed by M1.2–M1.3 here: full basis/subgroup/fixed-field/normality and $S_3$ completeness arguments. Keep this source project response distinct from AA-ADV-P001 below. |
| 4 — M1 transfer | [Galois Theory: Symmetries of Polynomial Roots](#/item/deep-dive-galois-symmetry), whole article; Exercises 1–5, Further practice 1–5, Transfer A, Transfer B | Answers 1–5; Further practice with feedback — Answers 1–5; Transfer A — Solution and Transfer B — Solution. M1.2 makes explicit which theorems the article imports. |
| 5 — M2 integer structure | [Finitely Generated Abelian Groups and Classification](#/item/book-algebra-patterns-structure?chapter=finitely-generated-abelian-groups), §§1, 5–7; ALG-CH21-E001, E012, E013, E014, E020 | Matching full Solution headings; M2.2 supplies the original reversible $[[2,6],[4,8]]$ trace and quotient isomorphism, not a new unproved Smith assertion. |
| 6 — M2 module structure | [Modules: linear algebra over a ring](#/item/book-morphisms-modules-categories?chapter=modules-linear-algebra-over-a-ring), §§1.1–1.5; Exercises 1.1–1.5 | Each Exercise's Solution. D2/M2.2 expand Exercise 1.3's diagonal-only Smith key; M4.4 proves the finite-generation results used by Exercise 1.2. |
| 7 — M2 categorical comparison | [Abelian Categories](#/item/book-morphisms-modules-categories?chapter=abelian-categories), §§2.1–2.7; Exercises 2.1–2.5 | Each Exercise's Solution, with M2.3's finite-diagram reduction completing the size justification for 2.5. Read §2.7 before that exercise, retain its small abelian category hypothesis, and apply the embedding only to the small abelian closure constructed in M2.3. The element chase is printed completely; Freyd–Mitchell itself remains imported. |
| 8 — M3 finite applications | First M3.1–M3.4 here, then [Representation Theory of $S_n$](#/item/book-finite-algebra-computation?chapter=representation-theory-of-sn), whole chapter; Exercises 1–4 | Each Exercise's Solution. Retain the imported hook-length and rim-hook rules, complex-field restrictions, and the $n\\ge2$ condition for nonzero irreducible standard representation in Exercise 4. For $n=1$ the standard summand is zero. |
| 9 — M4 fractions and primes | [Prime Ideals and Localization](#/item/deep-dive-prime-ideals-localization), whole article; Exercises 1–5 under Exercises with worked answers | Each numbered Answer. M4.1–M4.5 here supply representative independence, prime correspondence, exactness, Hilbert's theorem, and Nakayama proofs beyond these short examples. |
| 10 — joined work | All AA-ADV-M1-Q1–Q3, M2-Q1–Q3, M3-Q1–Q3, M4-Q1–Q4, completed within their respective modules; then all deliverables of AA-ADV-P001, AA-ADV-P002, AA-ADV-R001 in that order | Each unit's complete Public key; each portfolio's complete Public model below. Return at a later sitting if useful, with no verified or enforced delay. |

For the source one-relation exercise ALG-CH21-E012, write $R_2\\leftarrow R_2-2R_1$ on the column $(2,4)$, giving $(2,0)$ and $\\mathbb Z/2\\oplus\\mathbb Z$; this is the explicit unimodular change behind its key. For Morphisms First Exercise 1.5, $(x^2,x^3)=(x^2)$ because $x^3=xx^2$, and the ideal is nonzero so an empty list cannot generate it. Thus the minimal number of generators is one. This conclusion does not require treating one particular chosen generator as unique.

## AA-ADV-P001: the integral C2 portfolio

### Fixed task and native input

Work with $K=\\mathbb Q(u,v)$, $u^2=2,v^2=3$, and the involution $a:u\\mapsto-u,v\\mapsto v$. Inside its quadratic subfield $\\mathbb Q(u)$ put $\\beta=1+u$, $\\beta'=a(\\beta)=1-u$,
$$L=\\mathbb Z\\beta\\oplus\\mathbb Z\\beta',\\quad
T=\\mathbb Z\\cdot1\\oplus\\mathbb Z\\cdot u,\\quad
E=\\mathbb Z(\\beta+\\beta')+\\mathbb Z(\\beta-\\beta').$$
Here $L$ and $E$ are rank-two $\\mathbb Z$-lattices, not rank-four lattices in $K$. The ring $T=\\mathbb Z[u]$ is a named order in the quadratic field; no maximal-order theorem is needed. $L$ is only a module: it does not contain 1 and is not a ring. In $L$ coordinates, $a$ acts by swap $S$. The columns of $B$ below generate $E$ in $L$. The independent matrix $A$ defines $N=\\operatorname{coker}A$ as a $\\mathbb Z$-module; no group action on $N$ is supplied.

This is the fixed primary problem, not a choice among projects. The following native data records the actual polynomials, actions, matrices, localization sets, and proposed answers used in this portfolio. Coefficients of polynomials are in ascending powers. A sign row acts diagonally in basis $(1,u,v,uv)$; a fixed-basis row lists zero-based positions of its invariant basis vectors. Group-algebra coefficient pairs use basis $(1,t)$. Matrices act on columns.

AA-ADV-P001-NATIVE

~~~json
{
  "case_id": "AA-ADV-P001",
  "field": {
    "radicands": [2, 3],
    "sign_actions": [[1,1,1,1],[1,-1,1,-1],[1,1,-1,-1],[1,-1,-1,1]],
    "subgroups": [[0],[0,1],[0,2],[0,3],[0,1,2,3]],
    "fixed_basis": [[0,1,2,3],[0,2],[0,1],[0,3],[0]],
    "fixed_degrees": [4,2,2,2,1],
    "theta_polynomial": [1,0,-10,0,1]
  },
  "lattice": {
    "ambient_basis": ["1","u"],
    "basis_columns": [[1,1],[1,-1]],
    "action": [[0,1],[1,0]],
    "eigen_columns": [[1,1],[1,-1]],
    "ambient_index": 2,
    "eigen_index": 2,
    "eigen_smith": [1,2],
    "ambient_reduction_rank_mod2": 1
  },
  "presentation": {
    "matrix": [[2,6],[4,8]],
    "left": [[1,0],[2,-1]],
    "right": [[1,-3],[0,1]],
    "smith": [2,4],
    "order": 8,
    "exponent": 4,
    "swap_descends": false,
    "swap_first_column_preimage": ["-5/2","3/2"]
  },
  "rational": {
    "idempotents": [["1/2","1/2"],["1/2","-1/2"]],
    "regular_character": [2,0],
    "augmented_section": ["1/2","1/2"]
  },
  "localizations": [
    {"mode":"invert","prime":2,"two_is_unit":true,"presentation_orders":[1,1],"eigen_quotient_order":1,"split_regular":true},
    {"mode":"at","prime":2,"two_is_unit":false,"presentation_orders":[2,4],"eigen_quotient_order":2,"split_regular":false},
    {"mode":"at","prime":3,"two_is_unit":true,"presentation_orders":[1,1],"eigen_quotient_order":1,"split_regular":true}
  ]
}
~~~

### Required deliverables

**P1.** Reconstruct the full subgroup–field lattice of $K/\\mathbb Q$, including a basis/degree proof, actual automorphisms, completeness, all fixed fields, and the normality contrast with the cubic $S_3$ example. Derive the minimal polynomial of $u+v$.

**P2.** Identify the chosen $C_2$ action on $\\mathbb Q(u)$ and on $L$. Prove $\\beta,\\beta'$ are a rational basis, give $[T:L]$ and $[L:E]$ with concrete quotient maps, and check that $L$ is not a ring. State what the other sign flip does on this subfield.

**P3.** Give the rational group-algebra CRT isomorphism, its inverse, both idempotents, both eigenspaces, and the character of $L\\otimes\\mathbb Q$. Explain why an algebra action is not a field identification.

**P4.** Reduce $A$ by unimodular operations, give $U,V$, a concrete quotient map, order and exponent, and the exact presentation. Check whether swap descends, rather than assuming it.

**P5.** Write the equivariant short exact sequence with sign kernel and trivial quotient for $L$. Prove it splits rationally, splits after inverting two, and does not split after localizing at $(2)$.

**P6.** Localize $N$ and $L/E$ at powers of two, at $(2)$, and at $(3)$. Give their annihilators and supports over $\\mathbb Z$, and the surviving primes in each coefficient ring.

**P7.** Prove the coefficient group-algebra rings used are Noetherian. Explain what exactness of localization justifies, and distinguish it from reduction modulo a prime. Identify precisely which finite-generation arguments apply.

**P8.** End with one connected conclusion: why rational semisimplicity, integral eigenlattice index, relation-module invariance, and localization are separate tests that happen to involve the same prime here. Include your dated first/comparison/revised records and all consulted support for each deliverable.

### Complete public model — P001

**P1 model.** M1.3 proves degree four and the product basis; the sign substitutions give actual automorphisms on that basis. The five subgroup rows in the native data are complete, with fixed fields $K,\\mathbb Q(v),\\mathbb Q(u),\\mathbb Q(uv),\\mathbb Q$. Direct coefficient equations give the listed fixed bases and degrees. All subgroups are normal in the abelian group, so all intermediate extensions over $\\mathbb Q$ are Galois. In the cubic splitting field, the transposition fixing the real root has fixed field $\\mathbb Q(\\sqrt[3]2)$ by containment and degree three; conjugating it gives a different transposition, so it is nonnormal. The three transposition groups, $A_3$, and endpoints exhaust its subgroup lattice. The quadratic field fixed by $A_3$ is $\\mathbb Q(\\omega)$. The quartic polynomial $X^4-10X^2+1$ and the inverse formulas in M1-Q1 prove minimality for $u+v$; a polynomial relation alone would not.

**P2 model.** In the ambient basis $(1,u)$ the two columns are $(1,1),(1,-1)$, of determinant $-2$. They therefore form a rational basis. Their integer span consists exactly of pairs $(m,n)$ with $m\\equiv n\\pmod2$: $\\beta$ coefficients are $(m+n)/2,(m-n)/2$. Thus $T/L\\cong\\mathbb Z/2$ via $(m,n)\\mapsto m-n\\bmod2$, and $[T:L]=2$. The action $a$ exchanges the two basis elements of $L$, so $L\\cong\\mathbb Z[C_2]$ as modules by $1\\mapsto\\beta,t\\mapsto\\beta'$. The flip $b$ of $v$ acts trivially on $\\mathbb Q(u)$ and on $L$; the full $C_2\\times C_2$ action there factors through this chosen quotient. The eigenvectors are $w_+=\\beta+\\beta'=2$ and $w_-=\\beta-\\beta'=2u$. In $L$ coordinates their columns form $B$, whose Smith trace is M2-Q2. Hence $L/E\\cong\\mathbb Z/2$ via $(x,y)\\mapsto x+y\\bmod2$, and $[L:E]=2$. In ambient coordinates $E=2\\mathbb Z\\cdot1+2\\mathbb Z\\cdot u$, so $[T:E]=4$, consistent with multiplying indices. The element 1 has coordinates $(1,0)$ in $T$, of unequal parity, so is absent from $L$. Also $\\beta^2=3+2u$ has unequal coordinate parity and is absent. Thus $L$ is not a ring or order.

**P3 model.** $\\mathbb Q[t]/(t^2-1)\\to\\mathbb Q\\times\\mathbb Q$ sends $a+bt$ to $(a+b,a-b)$, with inverse $(c,d)\\mapsto(c+d)/2+((c-d)/2)t$. The elements $e_+=(1+t)/2,e_-=(1-t)/2$ evaluate to $(1,0),(0,1)$; direct multiplication using $t^2=1$ gives $e_\\pm^2=e_\\pm$, $e_+e_-=0$, and $e_++e_-=1$. On $L_\\mathbb Q$ they project onto $\\mathbb Qw_+,\\mathbb Qw_-$, carrying the trivial and sign representations. The identity trace is 2 and the swap trace is 0, so the character is $(2,0)=(1,1)+(1,-1)$. The symbol $t$ acts by the field automorphism $a$, not by multiplication by $u$; these linear maps have squares $I$ and $2I$ respectively. The action algebra is a product with zero divisors, while $\\mathbb Q(u)$ is a field. Their vector spaces and a cyclic module realization do not identify their ring multiplications.

**P4 model.** The full reduction in M2.2 yields $UAV=\\operatorname{diag}(2,4)$ with the printed $U,V$, both determinant $-1$ and 1 respectively. The quotient map is $(x,y)\\mapsto(x\\bmod2,2x-y\\bmod4)$; its kernel is $\\operatorname{im}A$. Hence $N\\cong\\mathbb Z/2\\oplus\\mathbb Z/4$ has order 8 and exponent 4. Nonzero determinant $-8$ makes $A$ injective, so $0\\to\\mathbb Z^2\\xrightarrow{A}\\mathbb Z^2\\to N\\to0$ is exact. Swap of its first relation $(2,4)$ is $(4,2)$. Solving $A(r,s)=(4,2)$ gives $s=3/2$ and $r=-5/2$, not integers. Thus swap does not descend. In particular $N$ is not a $C_2$-quotient by this rule. The relation-module test prevents importing the regular decomposition onto an unrelated cokernel.

**P5 model.** For any of the coefficient rings $R$ below, let $L_R=R^2$ with swap, $R_-$ the sign module and $R_+$ the trivial module. Then
$$0\\to R_-\\xrightarrow{z\\mapsto(z,-z)}L_R
 \\xrightarrow{(x,y)\\mapsto x+y}R_+\\to0$$
is exact: the first map is injective, the last is onto via $(1,0)$, and its kernel is $(z,-z)$. Both maps are equivariant. A rational section is $c\\mapsto(c/2,c/2)$ and the same works over $\\mathbb Z[1/2]$ and $\\mathbb Z_{(3)}$. Its image is the invariant line. Over $\\mathbb Z_{(2)}$, every invariant vector is $(z,z)$; a section would require $2z=1$, impossible because 2 lies in the maximal ideal. So no equivariant section exists there. The sequence still splits as a sequence of underlying free $R$-modules by $(1,0)$; that section is not equivariant. The integral eigenvectors span $E_R$, not all $L_R$ at $(2)$.

**P6 model.** Since $\\operatorname{Ann}N=(4)$, $\\operatorname{Supp}N=\\{(2)\\}$. Since $L/E\\cong\\mathbb Z/2$, its annihilator is $(2)$ and its support is the same single prime. After inverting two, both modules vanish. At $(2)$ they remain respectively $\\mathbb Z/2\\oplus\\mathbb Z/4$ and $\\mathbb Z/2$. At $(3)$ both vanish because two is a unit. Finite primary cyclic factors survive unchanged when denominators coprime to their prime are inverted. The surviving coefficient-ring primes are: for $\\mathbb Z[1/2]$, $(0)$ and all odd-prime ideals; for $\\mathbb Z_{(2)}$, $(0),(2)$; for $\\mathbb Z_{(3)}$, $(0),(3)$. The rational field has just $(0)$. The eigen quotient and the unrelated presentation quotient share support here but have different exponents and different origins.

**P7 model.** The coefficient rings $\\mathbb Z,\\mathbb Z[1/2],\\mathbb Z_{(2)},\\mathbb Z_{(3)}$ are Noetherian: integer ideals are principal, and localization preserves finite ideal generation. Their polynomial rings are Noetherian by M4.4; quotienting by $(t^2-1)$ proves their $C_2$ group algebras Noetherian. Each lattice is finite free over the coefficient ring, each quotient in the portfolio is finitely generated, and therefore every submodule in a finite presentation is finitely generated. Localizing the exact presentations preserves every kernel/image equality by M4.3. Reducing modulo two instead sends $A$ to the zero matrix, which is not injective on $\\mathbb F_2^2$. Thus reduction cannot preserve the left end of that exact sequence; no localization-exactness argument licenses it. Right cokernels still reduce to cokernels because relations reduce, but a separate kernel calculation is required.

**P8 model.** Rationally the averaging denominator 2 gives the invariant projections and a section. Integrally the eigenvectors miss half of $L$, witnessed by a nonzero index-two quotient. The separate relation quotient $N$ has 2-primary torsion and fails the action-descent test, so it is not part of that representation decomposition. Localization at a prime keeps exactly the corresponding torsion obstruction visible; localization away from two removes both finite quotients. None of these statements identify $L$ with the larger order $T$ after reduction modulo two, or classify an arbitrary integral representation. A complete record states the maps and the hypotheses of each proof and identifies every public model or other support used.

## AA-ADV-P002: change the residue characteristic

### Changed task and native input

Keep the primary integer lattices and matrices, but replace rational scalars by $\\mathbb F_2$ and then $\\mathbb F_3$. This genuinely changes Maschke's hypothesis. Work with $L/pL$ as the regular permutation module. Separately examine $T/pT$, where $T=\\mathbb Z[u]$ and $u^2=2$; it has its own basis and multiplication. There is a map $L/pL\\to T/pT$ induced by inclusion, whose injectivity must be checked. There is no automatic identification of these two reductions.

AA-ADV-P002-NATIVE

~~~json
{
  "case_id": "AA-ADV-P002",
  "ambient_polynomial": [-2,0,1],
  "reductions": [
    {
      "prime": 2,
      "action": [[0,1],[1,0]],
      "invariant_basis": [1,1],
      "augmentation": [1,1],
      "section": null,
      "split": false,
      "eigen_rank": 1,
      "idempotents": [[0,0],[1,0]],
      "nonzero_nilpotent": [1,1],
      "presentation_matrix": [[0,0],[0,0]],
      "presentation_cokernel_dimension": 2,
      "ambient_action": [[1,0],[0,1]],
      "ambient_basis_map": [[1,1],[1,1]],
      "ambient_basis_map_rank": 1,
      "ambient_is_field": false
    },
    {
      "prime": 3,
      "action": [[0,1],[1,0]],
      "invariant_basis": [1,1],
      "augmentation": [1,1],
      "section": [2,2],
      "split": true,
      "eigen_rank": 2,
      "idempotents": [[0,0],[1,0],[2,2],[2,1]],
      "nonzero_nilpotent": null,
      "presentation_matrix": [[2,0],[1,2]],
      "presentation_cokernel_dimension": 0,
      "ambient_action": [[1,0],[0,2]],
      "ambient_basis_map": [[1,1],[1,2]],
      "ambient_basis_map_rank": 2,
      "ambient_is_field": true
    }
  ]
}
~~~

**C1.** For each prime compute the action, invariants, augmentation kernel and quotient, and eigenbasis rank of $L/pL$. Prove or disprove an equivariant section. Give the exact sequence and check all its maps.

**C2.** Compute the group algebra at each prime: list all idempotents and a nonzero nilpotent if one exists; give an explicit CRT inverse when available. Explain both the failure of the averaging proof and the actual failure of its conclusion at the bad prime.

**C3.** Compare the two reductions of $N$, including the reduced presentation matrix and cokernel dimension. Identify the lost left exactness at two. Do not invent a swap action on the integer $N$ because its reduction happens to have a familiar vector-space dimension.

**C4.** Compute the inclusion map $L/pL\\to T/pT$, its rank, kernel and image, and the action on $T/pT$. Decide whether $T/pT$ is a field, with proofs. Reconcile the field result at three with the product decomposition of $\\mathbb F_3[C_2]$.

**C5.** Write a claim ledger naming which statements of P001 persist, which fail, the changed hypotheses, and the repairs. Keep separate dated first, comparison and revised files, stating all help and public-model exposure.

### Complete public model — P002

**C1 model.** At either prime $S(x,y)=(y,x)$, invariants are $\\mathbb F_p(1,1)$, augmentation is $q(x,y)=x+y$, and its kernel is $\\mathbb F_p(1,-1)$. The inclusion of that kernel and $q$ give
$$0\\to(\\mathbb F_p)_-\\xrightarrow{z\\mapsto(z,-z)}
 (\\mathbb F_p)^2_{\\mathrm{swap}}\\xrightarrow{q}(\\mathbb F_p)_+\\to0.$$
The first map is injective, $q$ is onto, $q(z,-z)=0$, and every kernel vector is of that form. Both maps intertwine the action, where minus equals plus at two. At $p=2$, the kernel and invariants coincide; any invariant vector has augmentation zero, so an equivariant section is impossible. The columns $(1,1),(1,-1)$ coincide and have rank one. At $p=3$, they have determinant $-2=1$ and rank two; a section sends 1 to $(2,2)$ because $2+2=1$ modulo three. It is invariant, so equivariant. Its kernel complement is the sign line. The criterion $p\\nmid|C_2|$ holds at three and fails at two.

**C2 model.** At two, $t^2-1=(t+1)^2$. With $\\varepsilon=1+t$, the ring is $\\mathbb F_2[\\varepsilon]/\\varepsilon^2$ and $\\varepsilon\\ne0$ since its degree is below two. Writing an idempotent as $a+b\\varepsilon$, its square is $a^2=a$; equality forces $b=0$. Thus only 0 and 1 occur, corresponding to coefficient pairs $(0,0),(1,0)$ in basis $(1,t)$. The nonzero nilpotent is $(1,1)$. No decomposition into two nonzero product factors is possible. The average would divide by zero, but the nonsplit exact sequence in C1 independently disproves complete reducibility.

At three, evaluation $a+bt\\mapsto(a+b,a-b)$ has inverse $(c,d)\\mapsto2(c+d)+2(c-d)t$. The four idempotent coefficient pairs are $(0,0),(1,0),(2,2),(2,1)$, obtained from the four pairs of 0 and 1 in $\\mathbb F_3^2$. There is no nonzero nilpotent because both field components of a nilpotent must be zero. The two nontrivial projections give the C1 eigenlines. The factors are coprime because their difference 2 is a unit.

**C3 model.** Modulo two $A$ is zero, so its cokernel is all $\\mathbb F_2^2$ and has dimension two; its kernel is also all $\\mathbb F_2^2$, showing why the initial injection in the integer presentation does not survive reduction. Modulo three its matrix is $\\begin{pmatrix}2&0\\\\1&2\\end{pmatrix}$ with determinant 1, hence its cokernel is zero. Equivalently $(\\mathbb Z/2\\oplus\\mathbb Z/4)/pN$ gives these same answers. The integer swap still fails the relation-module test of P4. At two one could separately choose an action on the new cokernel, but it would be additional structure rather than a descended action on $N$.

**C4 model.** In ambient coordinates $(1,u)$, inclusion has matrix $H=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, while $a$ acts by $D=\\operatorname{diag}(1,-1)$. The identity $DH=HS$ shows equivariance before and after reduction. At two $H$ has rank one, kernel $\\mathbb F_2(1,1)$, and image the line $\\mathbb F_2(1+u)$ in $T/2T$. The ambient action is the identity, since $-1=1$. Thus the nontrivial swap on $L/2L$ cannot be replaced by this trivial action. The ring $T/2T=\\mathbb F_2[u]/u^2$ has nonzero nilpotent $u$ and is not a field; it is not a finite Galois extension to which a degree/automorphism count applies.

At three $H$ is invertible, so the inclusion reduction is an equivariant isomorphism, with zero kernel and full image. Its ambient action is $\\operatorname{diag}(1,2)$. The polynomial $X^2-2=X^2+1$ has values 1,2,2 at $0,1,2$, so is irreducible and $T/3T$ is the field of nine elements with basis $(1,u)$ and $u^2=2$. Nonzero classes have inverses by Bézout. Its Frobenius sends $u$ to $u^3=2u=-u$, so is the same involution; its fixed elements $a+bu$ satisfy $b=0$, giving $\\mathbb F_3$. Its Galois group is $C_2$. The representation is a module over the product algebra $\\mathbb F_3[C_2]$, while its own multiplication defines a field; the action of $t$ is Frobenius, not multiplication by $u$. A semisimple action on a field as a vector space does not make that field a product ring.

**C5 model.** The integral degree-four field lattice remains the characteristic-zero statement of P1; reducing unrelated lattices does not turn it into a finite-field correspondence. Over $\\mathbb F_3$ the group-order unit, eigenbasis, CRT projections, and regular splitting persist. Over $\\mathbb F_2$ they fail through a repeated group-algebra polynomial and an actual nonsplit sequence. The finite torsion presentation has the opposite cokernel dimensions at the two primes because its torsion is 2-primary; localization exactness persists for localization but cannot be relabelled as reduction exactness. The lattice inclusion is an isomorphism after reduction at three but has a kernel at two, because its index is two. Repair requires naming the scalar ring, action, basis, and relevant exact functor each time. A comparison record should flag any earlier argument that silently identified the two mod-two lattices.

## AA-ADV-R001: public reconstruction

### Later task and native input

At another sitting if useful, reconstruct the argument with $u^2=5,v^2=7$, $K'=\\mathbb Q(u,v)$, the same named sign flips, $\\beta=1+u$, $\\beta'=1-u$, $L'=\\mathbb Z\\beta+\\mathbb Z\\beta'$, $T'=\\mathbb Z[u]$, and $E'=\\mathbb Z(\\beta+\\beta')+\\mathbb Z(\\beta-\\beta')$. This is public reconstruction with a full model, not unseen or delayed testing. The order $T'=\\mathbb Z[\\sqrt5]$ is simply the specified ring; no claim that it is the full ring of integers is made.

Change the independent presentation to $A'=\\begin{pmatrix}3&9\\\\6&15\\end{pmatrix}$. This time its image is swap-stable. The task asks you to prove that fact and compare its obstruction prime with the regular representation's bad characteristic. Consult earlier work if needed and record that help.

AA-ADV-R001-NATIVE

~~~json
{
  "case_id": "AA-ADV-R001",
  "field": {
    "radicands": [5,7],
    "sign_actions": [[1,1,1,1],[1,-1,1,-1],[1,1,-1,-1],[1,-1,-1,1]],
    "subgroups": [[0],[0,1],[0,2],[0,3],[0,1,2,3]],
    "fixed_basis": [[0,1,2,3],[0,2],[0,1],[0,3],[0]],
    "fixed_degrees": [4,2,2,2,1],
    "theta_polynomial": [4,0,-24,0,1]
  },
  "lattice": {
    "ambient_basis": ["1","u"],
    "basis_columns": [[1,1],[1,-1]],
    "action": [[0,1],[1,0]],
    "eigen_columns": [[1,1],[1,-1]],
    "ambient_index": 2,
    "eigen_index": 2,
    "eigen_smith": [1,2],
    "ambient_reduction_rank_mod2": 1
  },
  "presentation": {
    "matrix": [[3,9],[6,15]],
    "left": [[1,0],[2,-1]],
    "right": [[1,-3],[0,1]],
    "smith": [3,3],
    "order": 9,
    "exponent": 3,
    "swap_descends": true,
    "swap_first_column_preimage": ["-7","3"]
  },
  "rational": {
    "idempotents": [["1/2","1/2"],["1/2","-1/2"]],
    "regular_character": [2,0],
    "augmented_section": ["1/2","1/2"]
  },
  "localizations": [
    {"mode":"invert","prime":3,"two_is_unit":false,"presentation_orders":[1,1],"eigen_quotient_order":2,"split_regular":false},
    {"mode":"at","prime":2,"two_is_unit":false,"presentation_orders":[1,1],"eigen_quotient_order":2,"split_regular":false},
    {"mode":"at","prime":3,"two_is_unit":true,"presentation_orders":[3,3],"eigen_quotient_order":1,"split_regular":true}
  ],
  "reductions": [
    {"prime":2,"presentation_cokernel_dimension":0,"regular_split":false},
    {"prime":3,"presentation_cokernel_dimension":2,"regular_split":true}
  ]
}
~~~

**R1.** Rebuild the basis, degree proof, all subgroups and fixed fields, index/degree checks, normality, and minimal polynomial of $u+v$ without merely changing numerals in an unproved assertion.

**R2.** Rebuild the integral and rational lattice comparison, all indices, quotient maps, rational idempotents, and exact sign/trivial sequence. Explain why no maximal-order identification is required.

**R3.** Give a reversible Smith trace for $A'$, a concrete cokernel map, annihilator and support. Prove swap descends and describe the resulting action on the quotient. Determine the minimal number of generators at $(3)$ using its residue space.

**R4.** Compare localization at $(2)$, at $(3)$, and after inverting 3 for both $L'/E'$ and $\\operatorname{coker}A'$. Compare reduction modulo two and three, including whether the quotient representation splits. State exactly which prime obstructs which construction.

**R5.** Supply a claim ledger and repair paragraph for the false shortcut “the prime supporting the presentation quotient is always the prime where the regular representation fails to split.” Include all first, comparison and revised records, support and exposure.

### Complete public model — R001

**R1 model.** If $\\sqrt7=a+b\\sqrt5$, squaring gives $2ab=0$. Either $a^2=7$ or $b^2=7/5$, impossible for rational numbers because the exponents of primes 7 or 5 in a rational square must be even. Thus $[K':\\mathbb Q]=4$ and $(1,u,v,uv)$ is a basis. Substitution of the independent signs of $u,v$ is multiplicative in these normal forms and self-inverse, giving exactly four automorphisms, since a root image has at most two choices for each generator. They form $C_2\\times C_2$. The only subgroups are the five rows in the native data: any two distinct nonidentity elements generate the whole group.

On $A+Bu+Cv+Duv$, invariance under $a,b,ab$ respectively forces $(B,D)=(0,0)$, $(C,D)=(0,0)$, $(B,C)=(0,0)$. The fixed fields are therefore $K',\\mathbb Q(\\sqrt7),\\mathbb Q(\\sqrt5),\\mathbb Q(\\sqrt{35}),\\mathbb Q$ in subgroup order. Their degrees are $4,2,2,2,1$, agreeing with indices. The extension is the splitting field of the separable polynomial $(X^2-5)(X^2-7)$; the proved correspondence makes this complete. All subgroups are normal, so all intermediate fields are Galois over $\\mathbb Q$. For $\\theta=u+v$, $\\theta^2=12+2uv$ and $(\\theta^2-12)^2=140$, so $\\theta^4-24\\theta^2+4=0$. Since $(u+v)(v-u)=2$, $\\theta^{-1}=(v-u)/2$; hence $u=(\\theta-2\\theta^{-1})/2$, $v=(\\theta+2\\theta^{-1})/2$. Thus $\\theta$ generates $K'$ and this degree-four monic relation is minimal.

**R2 model.** The coordinate matrix of $\\beta,\\beta'$ in $(1,u)$ is again $H$ with determinant $-2$. The rational span is $\\mathbb Q(\\sqrt5)$, a quadratic subfield of $K'$, not all of the four-dimensional field. The chosen flip $a$ swaps this basis and the flip $b$ acts trivially. Integer coordinate parity gives $T'/L'\\cong\\mathbb Z/2$ via $(m,n)\\mapsto m-n\\bmod2$. The eigenlattice is $E'=2\\mathbb Z\\cdot1+2\\mathbb Z\\cdot u$, and $L'/E'\\cong\\mathbb Z/2$ via $(x,y)\\mapsto x+y\\bmod2$. Thus $[T':L']=2,[L':E']=2,[T':E']=4$. As before 1 is absent from $L'$, and $\\beta^2=6+2u$ happens to lie in $L'$ but this does not make $L'$ a ring: $\\beta\\beta'=1-5=-4$ lies in it, while closure alone and absence of 1 already rule out a unital order containing the field identity. In fact it is closed under multiplication in this return case; the claim needed here is only that it is a specified lattice without the identity, not an order. All module arguments use that lattice and not a ring structure on it.

The group algebra still has the evaluation/inverse formulas of P3 and idempotents $(1\\pm t)/2$. The eigenvectors are $2,2u$ and the rational regular character is $(2,0)$. The exact sequence is $0\\to R_-\\xrightarrow{z\\mapsto(z,-z)}R^2_{\\mathrm{swap}}\\xrightarrow{x+y}R_+\\to0$. Its kernel and image are computed directly as in P5; the section requires $1/2\\in R$ since its invariant lift must satisfy $2z=1$. Nothing in these calculations asks whether $T'$ is maximal among orders.

**R3 model.** On $A'$, $R_2\\leftarrow R_2-2R_1$ gives $\\begin{pmatrix}3&9\\\\0&-3\\end{pmatrix}$, $C_2\\leftarrow C_2-3C_1$ gives $\\operatorname{diag}(3,-3)$, and negating row 2 gives $\\operatorname{diag}(3,3)$. The printed $U,V$ realize these operations, so the cokernel is $\\mathbb Z/3\\oplus\\mathbb Z/3$ of order 9 and exponent 3. The map $(x,y)\\mapsto(x\\bmod3,\\,2x-y\\bmod3)$ is a quotient isomorphism; alternatively reduction of both coordinates modulo three works because $A'=3M$ with $M=\\begin{pmatrix}1&3\\\\2&5\\end{pmatrix}$ of determinant $-1$. Its integer inverse is $\\begin{pmatrix}-5&3\\\\2&-1\\end{pmatrix}$, so $\\operatorname{im}A'=3\\mathbb Z^2$ exactly.

This image is swap-stable, giving the actual quotient action $(\\bar x,\\bar y)\\mapsto(\\bar y,\\bar x)$ in the simple coordinate-reduction identification. For a direct first-column check, $A'(-7,3)=(6,3)$ is the swap of $(3,6)$. The full image argument proves invariance for every relation. The annihilator is $(3)$ and support is $\\{(3)\\}$. At $(3)$ the residue space is the whole two-dimensional $\\mathbb F_3^2$, so two generators are necessary; two coordinate classes suffice. Local Nakayama applies because the module is finitely generated over the local ring.

**R4 model.** At $(2)$, three is a unit, so the presentation quotient vanishes; $L'/E'$ remains $\\mathbb Z/2$ and the regular sign/trivial sequence is nonsplit. At $(3)$, the presentation quotient remains $(\\mathbb Z/3)^2$; $L'/E'$ vanishes and the regular sequence splits because two is a unit. After inverting three, the presentation quotient vanishes but $L'/E'$ remains $\\mathbb Z/2$, since three acts invertibly on it. The regular sequence over $\\mathbb Z[1/3]$ remains nonsplit: there is no element $z$ with $2z=1$ in that ring. Its only units among rational integers have prime factors 3, whereas 2 is not one.

Modulo two, $A'$ becomes $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, invertible, so its quotient is zero. The regular representation $L'/2L'$ is nevertheless the same nonsplit swap module of characteristic two. Modulo three, $A'$ is zero and the quotient is $\\mathbb F_3^2$ with genuine descended swap action. It decomposes into the trivial line $(1,1)$ and sign line $(1,-1)$, with section $(2,2)$ and projections $(I\\pm S)/2$. Thus its representation is split although its integer presentation quotient is supported at three. Localization preserves the exact integral presentation; mod-three reduction again loses its left injection, which must be checked separately.

**R5 model.** The bad prime for the regular $C_2$ splitting is two, determined by the averaging denominator and the eigenlattice index. The support prime of this presentation is three, determined by its Smith entries. These are different invariants. In P001 they coincided accidentally; in R001 they do not. Moreover P001's relation lattice was not swap-stable while R001's is, so only the latter supplies the quotient representation. The repair is to compute the presentation, the action-descent condition, and the group-order unit condition separately, then compare them with named coefficient rings. A public reconstruction with declared support is evidence of that written repair, not evidence of unseen work.

## Descriptive review and repair

Review each response against four concrete questions. Are all objects, scalar rings, maps and bases named? Are existence, representative independence, completeness, and hypotheses justified rather than guessed from a dimension? Does every numerical or symbolic answer have a reversible calculation, invariant, or general proof? Does the comparison record identify support and explain a corrected inference?

A response is **ready for the next stage** when those questions have explicit answers for every deliverable. It **needs repair** when a correct-looking final object lacks its map, the wrong field or lattice is used, a theorem's hypotheses are missing, a public model has been copied without a reconstructed argument, or a source task is omitted. This is a descriptive review, not a weighted rubric or a grade.

For field-degree or normality gaps, redo M1-Q1–Q3 and the named CH18–CH20 keys. For presentation or action-descent gaps, redo D2 and M2-Q1–Q3 with the actual integer operations. For a splitting or character-field error, redo M3-Q1–Q3 and write the equivariance equations. For denominator, support, or finite-generation errors, redo M4-Q1–Q4 and identify the exact multiplier or finite generating set in the proof. Then produce a new dated revised file, retaining the first and comparison files yourself.

Finish the reconstruction ledger by distinguishing the proved finite-case conclusions from the imported existence, general-PID, complex-root, polynomial-factorization, character-combinatorics, and categorical embedding theorems named above. Completing this required course supplies a joined advanced algebra sequence and its written public-comparison work. It does not award a qualification, establish a learner outcome, or complete the specialist programmes beyond its declared scope.
`;export{e as default};