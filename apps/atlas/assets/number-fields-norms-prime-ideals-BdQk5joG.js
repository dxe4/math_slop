var e=`---
parent_id: book-algebraic-analytic-number-theory
chapter_id: number-fields-norms-prime-ideals
title: "Number Fields, Norms, and Prime Ideals"
level: graduate
estimated_minutes: 275
license: CC BY-SA 4.0
---

# Number Fields, Norms, and Prime Ideals {#section-1-number-fields-norms-and-prime-ideals}

A number field is a finite-dimensional extension of the rationals. Its embeddings produce trace and norm, its algebraic integers form a lattice, and rational primes split into prime ideals with ramification and residue degrees. These invariants translate polynomial factorization modulo primes into arithmetic upstairs.

This chapter assumes field extensions, ideals, and quadratic rings. It develops the basic dictionary carefully enough to compute low-degree examples while marking where discriminants, integral bases, and index exceptions enter.

This supported primary adaptation retains the earlier Euler proofs, examples
and exercise identifiers. The [exact retained seed](retained-seeds/number-fields-norms-prime-ideals.md)
preserves its original wording and parent metadata; current primary exercises
add two hint stages and full solution reveals. The old book and its
learner records remain independently addressable.

Numbered chapter references inside preserved passages use the original book’s
numbering. Current semantic links identify the preparation and continuation.
The current new proofs are [Ideal Factorisation](ideal-factorisation-prime-splitting.md) and [Class Groups and Units](class-groups-dirichlet-units.md).

<a id="section-15-1-number-fields-and-embeddings"></a>
## 1. Number fields and embeddings {#section-17-1-number-fields-and-embeddings}

A number field $K$ has degree $n=[K:\\mathbb{Q}]$. By the primitive element theorem in characteristic zero, $K=\\mathbb{Q}(\\alpha)$ for some algebraic $\\alpha$; powers $1,\\alpha,\\ldots,\\alpha^{n-1}$ form a rational basis when the minimal polynomial has degree $n$.

There are $n$ embeddings $\\sigma:K\\to C$. Real embeddings land in $R$; nonreal embeddings occur in conjugate pairs. Write $r_{1}+2r_{2}=n$ for the signature.

For $\\beta \\in K$,

$\\operatorname{Tr}_{K/\\mathbb{Q}}(\\beta)=\\sum_{\\sigma}\\sigma(\\beta)$,

$N_{K/\\mathbb{Q}}(\\beta)=\\prod_{\\sigma}\\sigma(\\beta)$.

Equivalently these are the trace and determinant of multiplication by $\\beta$ on the rational vector space $K$. Norm is multiplicative and trace additive.

<a id="section-29-2-algebraic-integers-and-integral-bases"></a>
## 2. Algebraic integers and integral bases {#section-31-2-algebraic-integers-and-integral-bases}

An element is an algebraic integer when it satisfies a monic polynomial in $\\mathbb{Z}[x]$. All such elements form $\\mathcal{O}_{K}$. It is a free abelian group of rank $n$; a $\\mathbb{Z}$-basis is an integral basis.

When $\\alpha$ is an algebraic integer and $K=\\mathbb Q(\\alpha)$, the order $\\mathbb{Z}[\\alpha]$ may be strictly smaller than $\\mathcal{O}_{K}$. Its finite index affects discriminants and prime-factorization calculations. A primitive element chosen only by the field theorem need not be integral; multiplying by a suitable nonzero integer produces an integral primitive element before $\\mathbb Z[\\alpha]$ and its index are used. A power basis is convenient, not automatically the full integral basis.

The discriminant of a basis $(\\omega_{i})$ is the determinant of the trace-pairing matrix $\\operatorname{Tr}(\\omega_{i}\\omega_{j})$. A prime that ramifies divides the field discriminant; conversely every discriminant prime ramifies.

<a id="section-37-3-norms-of-ideals"></a>
## 3. Norms of ideals {#section-39-3-norms-of-ideals}

For nonzero integral ideal $I$,

$N(I)=\\lvert \\mathcal{O}_{K}/I\\rvert$.

Ideal norm is a positive integer, multiplicative, and for principal ideals satisfies

$N((\\alpha))=\\lvert N_{K/\\mathbb{Q}}(\\alpha)\\rvert$.

If $p$ is a prime ideal over rational prime $p$, the quotient $\\mathcal{O}_{K}/p$ is a finite field of size $p^f$; $f$ is the residue degree.

<a id="section-49-4-decomposition-of-rational-primes"></a>
## 4. Decomposition of rational primes {#section-51-4-decomposition-of-rational-primes}

In a Dedekind domain,

$p \\mathcal{O}_{K}=\\prod_{i=1}^g p_{i}^{e_{i}}$.

Here $e_{i}$ is the ramification index and $f_{i}=[\\mathcal{O}_{K}/p_{i}:\\mathbb{F}_{p}]$. The fundamental equality is

$\\sum_{i} e_{i} f_{i}=n$.

A prime is **split completely** if $g=n$ and all $e_{i}=f_{i}=1$, **inert** if $g=1,e=1,f=n$, and **ramified** if some $e_{i}>1$.

<a id="section-61-5-factoring-a-defining-polynomial"></a>
## 5. Factoring a defining polynomial {#section-63-5-factoring-a-defining-polynomial}

Suppose $K=\\mathbb{Q}(\\alpha)$ with $\\alpha$ an algebraic integer, and prime $p$ does not divide the index $[\\mathcal{O}_{K}:\\mathbb{Z}[\\alpha]]$. Factor the monic minimal polynomial modulo $p$:

$f(x)=\\prod g_{i}(x)^{e_{i}}$.

Then the distinct irreducible factors correspond to prime ideals $(p,g_{i}(\\alpha))$, their degrees are residue degrees, and their multiplicities are ramification indices.

The index hypothesis is essential. At exceptional primes, naive polynomial factorization can report the wrong decomposition; use an integral basis or a corrected theorem.

<a id="section-71-worked-gaussian-decomposition"></a>
### Worked Gaussian decomposition {#section-73-worked-gaussian-decomposition}

For $K=\\mathbb{Q}(i)$, use $x^{2}+1$. Modulo $5$, it factors $(x-2)(x+2)$, so $5$ splits. Modulo $3$, it is irreducible, so $3$ is inert. Modulo $2$, it is $(x+1)^{2}$, and $2$ ramifies.

<a id="section-75-6-trace-and-norm-computations"></a>
## 6. Trace and norm computations {#section-77-6-trace-and-norm-computations}

If $\\alpha$ has monic minimal polynomial

$x^n+c_{n-1}x^{n-1}+\\ldots+c_{0}$,

then $\\operatorname{Tr}(\\alpha)=-c_{n-1}$ and $N(\\alpha)=(-1)^n c_{0}$.

For multiplication by a general $\\beta$, build its matrix in a basis. For example, in $\\mathbb{Q}(\\sqrt[3]{2})$, multiplication by $\\alpha=\\sqrt[3]{2}$ cyclically sends $1\\mapsto\\alpha$, $\\alpha\\mapsto\\alpha^{2}$, and $\\alpha^{2}\\mapsto2$; its determinant is $2$, agreeing with the constant-term formula.

<a id="section-85-7-minkowski-and-finiteness"></a>
## 7. Minkowski and finiteness {#section-87-7-minkowski-and-finiteness}

Embedding $\\mathcal{O}_{K}$ into $\\mathbb{R}^{r_{1}}\\times\\mathbb{C}^{r_{2}}$ gives a lattice. Minkowski's convex-body theorem implies every ideal class contains an integral ideal below an explicit norm bound. Consequently the class group is finite and can, in principle, be computed by checking finitely many ideals.

This is an existence and finiteness theorem. Turning it into a reliable algorithm needs an integral basis, discriminant, lattice bounds, prime-ideal arithmetic, and certificate checking.

<a id="section-91-8-local-and-global-viewpoints"></a>
## 8. Local and global viewpoints {#section-93-8-local-and-global-viewpoints}

Completing at a prime ideal produces a local field that records one prime at high resolution. Valuations, ramification, and residue fields are local invariants. Reassembling global ideal information from all primes resembles CRT, but global elements can face class-group and unit constraints. Later volumes treat local fields and class field theory as full subjects.

<a id="section-95-exercises-with-complete-solutions"></a>
## Project: certified prime decomposition table {#section-439-project-certified-prime-decomposition-table}

Choose one quadratic and one cubic field with verified integral bases. For every rational prime below $100$, factor the defining polynomial only when the index condition permits, construct the corresponding prime ideals, and verify $\\sum e_{i} f_{i}=n$ plus ideal-norm products. Flag ramified and exceptional primes separately. Include direct quotient-field calculations for representative split, inert, and ramified cases.

<a id="section-441-chapter-summary"></a>
## 9. Development: a multiplication matrix explains trace, norm and units {#section-446-9-development-a-multiplication-matrix-explains-trace-no}

**Worked example: a cubic multiplication matrix and an exact inverse.**

A rational basis describes the field as a vector space. An integral basis also identifies the integer lattice, so that multiplication by an algebraic integer is an integer matrix. These uses should be kept separate. Computing a field norm in a rational basis is valid; calling its integer span the full ring of integers requires an additional proof.

Take $\\theta$ with $f(T)=T^3-T-1=0$. The only possible rational roots of this monic cubic are one and minus one, and neither is a root. Thus it is irreducible and $(1,\\theta,\\theta^2)$ is a rational basis of the cubic field. The relation $\\theta^3=\\theta+1$ gives
$$M_\\theta=
\\begin{pmatrix}0&0&1\\\\1&0&1\\\\0&1&0\\end{pmatrix},$$
where columns are the coordinates of the images of the three basis vectors. Its trace is zero and determinant one, matching the minimal-polynomial formulas.

An arbitrary $\\beta=a+b\\theta+c\\theta^2$ acts by
$$M_\\beta=aI+bM_\\theta+cM_\\theta^2.$$
This is a finite exact recipe for its trace and norm; it does not require decimal approximations to any embedding. For example $\\theta(\\theta^2-1)=1$, so $\\theta$ is a unit in $\\mathbb Z[\\theta]$ already. Its inverse is integral because it is an integer polynomial in $\\theta$. A nonzero norm alone would prove only invertibility in the field, not the existence of an inverse inside the integer ring.

After fullness of the basis is established below, the determinant argument extends this example to every integral element: a unit has field norm $\\pm1$. Conversely if multiplication by an integral element has determinant $\\pm1$, its integer matrix has an integer inverse by the adjugate formula. The inverse image of one is then an algebraic integer giving its multiplicative inverse. This proves the unit criterion without assuming that every field inverse stays integral.

Trace, norm and ideal norm now have distinct types. Field trace is additive and field norm multiplicative on elements of $K$; their values may be rational, and field norm may be negative. On algebraic integers both are integers. A nonzero integral ideal norm counts a finite quotient and is always positive. A nonzero principal ideal uses the absolute value of the field norm, as Chapter 19 proved by lattice index.

The earlier claim that a primitive element can be made integral also has an elementary certificate. If $\\alpha$ has monic rational minimal polynomial $T^n+c_{n-1}T^{n-1}+\\cdots+c_0$, choose a positive common denominator $D$ for its coefficients. Then $\\beta=D\\alpha$ satisfies
$$T^n+Dc_{n-1}T^{n-1}+D^2c_{n-2}T^{n-2}+\\cdots+D^nc_0=0.$$
Every coefficient is integral, so $\\beta$ is integral and $\\mathbb Q(\\beta)=\\mathbb Q(\\alpha)$. This gives an integral primitive element, while leaving the fullness of its power-basis order as a separate question.

<a id="section-467-10-development-certify-the-full-cubic-integral-basis"></a>
## 10. Development: certify the full cubic integral basis {#section-469-10-development-certify-the-full-cubic-integral-basis}

**Worked example: the discriminant-minus-twenty-three certificate.**

The powers of an integral primitive element form an order, but the word “integral” does not prove that it is the maximal order. The missing integer lattice can be measured by the discriminant. If $R\\subseteq\\mathcal O_K$ is an order of index $m$, express a basis of $R$ in an integral basis of $\\mathcal O_K$ using an integer matrix $C$. Its determinant has absolute value $m$. The trace-pairing matrices transform by
$$G_R=C^\\mathsf T G_{\\mathcal O_K}C,$$
and hence
$$\\operatorname{disc}(R)=m^2\\operatorname{disc}(K).$$
The field discriminant is a nonzero integer. In particular a squarefree order discriminant forces $m=1$.

For the chosen cubic, $\\operatorname{Tr}(1)=3$ and $\\operatorname{Tr}(\\theta)=0$. The coefficient of $T$ in $f$ is minus one, so the sum of products of two distinct roots is minus one. Squaring their sum gives $\\operatorname{Tr}(\\theta^2)=2$. The defining relation then gives $\\operatorname{Tr}(\\theta^3)=3$ and $\\operatorname{Tr}(\\theta^4)=2$. Thus the integer trace matrix is
$$G=\\begin{pmatrix}3&0&2\\\\0&2&3\\\\2&3&2\\end{pmatrix}.$$
Its determinant is $3(4-9)+2(0-4)=-23$.

Since twenty-three is prime, no integer square greater than one divides this discriminant. The index-square identity proves
$$\\mathcal O_K=\\mathbb Z[\\theta],\\qquad
\\operatorname{disc}(K)=-23,\\qquad
[\\mathcal O_K:\\mathbb Z[\\theta]]=1.$$
This is an actual integral-basis certificate. It uses irreducibility, integrality, an explicit trace matrix, and the index identity in that order. A defining polynomial by itself would not have supplied the final equality.

The quadratic field in the project is $\\mathbb Q(i)$. Chapter 19's quadratic classification proves its full basis $(1,i)$; its trace matrix is $\\operatorname{diag}(2,-2)$ and field discriminant minus four. Here squarefreeness would not prove maximality, because minus four is not squarefree. The independent quadratic basis proof is essential. Both chosen defining orders have index one, although their discriminants have different square factors.

Changing an integral basis by an integer-invertible matrix preserves the discriminant. Changing the lattice to a proper order multiplies it by the square of an index. Changing only the rational basis can instead introduce denominators. These three operations explain why a determinant computed in a convenient basis must be accompanied by a statement of which lattice that basis spans.

<a id="section-491-11-development-derive-the-factor-to-prime-ideal-diction"></a>
## 11. Development: derive the factor-to-prime-ideal dictionary {#section-493-11-development-derive-the-factor-to-prime-ideal-diction}

Let $R=\\mathbb Z[\\alpha]\\subseteq\\mathcal O_K$ have finite index $m$. If a rational prime $p$ does not divide $m$, the natural reduction map
$$R/pR\\longrightarrow\\mathcal O_K/p\\mathcal O_K$$
is an isomorphism. Indeed the finite group $\\mathcal O_K/R$ has order $m$, so multiplication by $p$ is invertible on it. Surjectivity follows from $\\mathcal O_K=R+p\\mathcal O_K$. For injectivity, if $r=p\\beta\\in R$, the class of $\\beta$ is killed by $p$ and must vanish, giving $\\beta\\in R$ and $r\\in pR$.

The first reduction is $\\mathbb F_p[T]/(\\bar f)$, because the minimal polynomial is monic and supplies the power-basis presentation of $R$. Factor it into distinct monic irreducibles,
$$\\bar f=\\prod_i g_i^{e_i}.$$
For each factor, evaluation at $\\alpha$ and reduction modulo $p$ gives
$$P_i=(p,g_i(\\alpha)),\\qquad
\\mathcal O_K/P_i\\cong\\mathbb F_p[T]/(g_i).$$
The quotient is a field of $p^{\\deg g_i}$ elements. This proves properness, primality and the norm formula, not just the names of some ideals.

The product of the ideals $P_i^{e_i}$ is contained in $p\\mathcal O_K$. Expand generators of the product: any term using a generator $p$ lies there, while the remaining product $\\prod_i g_i(\\alpha)^{e_i}$ is also a multiple of $p$, since $\\bar f$ is that product. Imported ideal-norm multiplicativity for the full integer ring gives product norm
$$p^{\\sum_i e_i\\deg g_i}=p^{\\deg f}=p^n.$$
The containing ideal $p\\mathcal O_K$ has the same norm $p^n$ because multiplication by $p$ scales a rank-$n$ integer lattice. Equal finite indices and containment force equality of ideals. This proves the announced factorization with exactly those exponents.

Thus the checks $\\sum e_i f_i=n$ and $\\prod N(P_i)^{e_i}=p^n$ are linked but serve different bookkeeping roles. The first checks the complete degree allocation; the second checks that the quotient sizes were attached correctly. Neither rescues an application at an excluded index prime.

A mixed cubic example prevents a common overgeneralization. Modulo five,
$$T^3-T-1=(T-2)(T^2+2T+3).$$
The quadratic has discriminant two, which is not a square modulo five. Thus the primes are $(5,\\theta-2)$ and $(5,\\theta^2+2\\theta+3)$, with residue degrees one and two. Their norms are five and twenty-five, not equal. The equality is $1+2=3$, and the norm product is $5\\cdot25=5^3$. No common pair $(e,f)$ describes both primes.

The whole reduction ring in this example is $\\mathbb F_5\\times\\mathbb F_{25}$, by polynomial CRT. Its two prime-ideal quotients are the individual fields. A product of fields is not itself a field: $(1,0)(0,1)=0$. Calling every reduction modulo a rational prime a residue field would conflate these different quotient objects.

<a id="section-516-12-development-separate-index-failure-from-ramification"></a>
## 12. Development: separate index failure from ramification {#section-518-12-development-separate-index-failure-from-ramification}

A repeated polynomial factor has arithmetic meaning only after the index condition is checked. In the certified cubic basis, the condition holds for every prime, including twenty-three. There
$$\\bar f=(T-10)^2(T-3)\\quad\\text{in }\\mathbb F_{23}[T].$$
The two prime ideals are $P=(23,\\theta-10)$ and $Q=(23,\\theta-3)$, with
$$(23)=P^2Q.$$
Both residue fields have twenty-three elements. The degree equality is $2\\cdot1+1\\cdot1=3$, and the norm product is $23^2\\cdot23=23^3$.

The entire quotient by $(23)$ is different:
$$\\mathcal O_K/(23)\\cong
\\mathbb F_{23}[\\varepsilon]/(\\varepsilon^2)\\times\\mathbb F_{23}.$$
The first component comes from the double root ten. For a concrete nonzero nilpotent in the entire quotient, use $(\\theta-10)(\\theta-3)$. Its square is zero because the square of that degree-two polynomial is divisible by $\\bar f$; it is not zero itself because a nonzero polynomial of degree two cannot be a multiple of the monic cubic. Ramification has produced nilpotence in the rational-prime quotient without making either prime-ideal quotient cease to be a field.

Now retain exactly the same field but use $\\beta=2\\theta$. Its monic minimal polynomial is $T^3-4T-8$, and $\\mathbb Z[\\beta]$ has basis $(1,2\\theta,4\\theta^2)$. The change-of-lattice determinant is eight, so its index in $\\mathcal O_K$ is eight. Modulo two its polynomial becomes $T^3$. Inferring a degree-one prime with ramification index three from this factorization would be invalid.

In fact the verified $\\theta$ polynomial becomes $T^3+T+1$ modulo two. It has no root in $\\mathbb F_2$ and is an irreducible cubic, so two is inert with residue degree three. Moreover $(2,\\beta)=(2,2\\theta)=(2)$ in $\\mathcal O_K$, whose quotient has eight elements, not two. This directly exposes both the wrong norm and the wrong exponent in the naive inference.

The prime two in the bad-generator presentation is an index exception, while twenty-three in the full-basis presentation is genuinely ramified. These are different sets. The original project tables use index-one generators, so their exception sets are explicitly empty. The changed-generator example explains the warning without omitting a prime from either table or pretending that every repeated defining-polynomial factor reflects ramification.

<a id="section-535-13-development-state-the-geometric-import-and-finish-th"></a>
## 13. Development: state the geometric import and finish the finiteness argument {#section-537-13-development-state-the-geometric-import-and-finish-th}

The geometry-of-numbers input is a theorem with quantitative hypotheses. Under the usual real-coordinate measure on $\\mathbb R^{r_1}\\times\\mathbb C^{r_2}\\cong\\mathbb R^n$, the image of a nonzero integral ideal $I$ is a full lattice of covolume
$$2^{-r_2}\\sqrt{|\\operatorname{disc}(K)|}\\,N(I).$$
Minkowski's convex-body theorem says that a measurable convex set symmetric about the origin, of volume strictly greater than $2^n$ times the lattice covolume, contains a nonzero lattice point. Compact limiting versions permit the corresponding weak inequality with suitable closedness hypotheses.

The ideal-class consequence imported here is precise: every ideal class of the full integer ring has a nonzero integral representative $I$ satisfying
$$N(I)\\le B_K=
\\left(\\frac4\\pi\\right)^{r_2}
\\frac{n!}{n^n}\\sqrt{|\\operatorname{disc}(K)|}.$$
This structural result uses invertibility of ideals as well as the lattice theorem. It is not a consequence of merely drawing a bounded region around one chosen basis.

Here is the remaining finite step. There are only finitely many integral ideals of any fixed index $m$. Their additive quotient has order $m$, so it is killed by $m$, giving $m\\mathcal O_K\\subseteq I$. Such ideals are among the finitely many additive subgroups of the finite group $\\mathcal O_K/m\\mathcal O_K$. Taking the union over $1\\le m\\le\\lfloor B_K\\rfloor$ leaves finitely many possibilities. The imported bound therefore proves class-group finiteness, even before a practical ideal-class algorithm is supplied.

For $\\mathbb Q(i)$, $n=2,r_2=1$ and discriminant minus four give $B_K=4/\\pi<2$. Thus every class has a norm-one representative and is principal, consistent with the explicit Euclidean proof. The two proofs have different inputs: the Euclidean argument constructed a generator of any ideal, while this argument only bounds representatives of classes.

For the selected cubic the signature is $(1,1)$. One can check this without approximating roots: its derivative vanishes at $\\pm1/\\sqrt3$, and both extremal values $-1\\pm2/(3\\sqrt3)$ are negative. Thus the cubic crosses the axis only once. Its bound is $8\\sqrt{23}/(9\\pi)<2$, using $\\sqrt{23}<5$ and $\\pi>3$. It too has class number one. This does not make every cubic field monogenic or principal; the conclusion uses this field's certified discriminant and signature.

The full tables below need no class-number assumption. Two-generator descriptions $(p,g_i(\\theta))$ are concrete prime ideals whether or not a convenient prime-element generator is known. Finding such a generator is a separate principal-ideal problem. This distinction lets the same decomposition method apply in fields with nontrivial class group.

<a id="section-555-14-development-local-data-records-valuations-not-every-"></a>
## 14. Development: local data records valuations, not every global constraint {#section-557-14-development-local-data-records-valuations-not-every-}

A prime-ideal factorization assigns an integer valuation to each nonzero fractional ideal: $v_{P}(I)$ is its exponent of $P$. Multiplication adds these exponents. For a principal ideal $(\\alpha)$, this gives divisibility information about the element at each prime. Negative exponents correspond to denominators; the zero element is not assigned a finite exponent vector in this description.

The residue degree and ramification index have complementary meanings. The degree counts the dimension of the residue field over $\\mathbb F_p$; the index tells how many times its prime ideal occurs in $(p)$. At the cubic prime twenty-three, the two residue fields have equal degree one but the exponents are two and one. At five, both exponents are one but the residue degrees differ. These are exact examples of the two ways a single product $g e f$ can fail to describe the decomposition.

Passing to a residue field discards all higher powers of the prime ideal. Passing instead to the quotient by $P^k$ retains finite higher-order divisibility, but for $k>1$ it generally has zero divisors. The inverse limit of these quotients is the completed local integer ring; its fraction field is the corresponding local field. This standard local-algebra identification is a further imported construction, not a consequence of one finite quotient. The ramified dual-number component above is a first visible example of information lost by reducing all the way to its residue field.

Global reconstruction also has a precise limit. Ideal CRT combines finitely many compatible residue conditions at comaximal ideals into an element modulo their product. It does not assert that an arbitrary collection of local valuation requirements comes from a global element with no additional prime factors. The resulting ideal must be principal for that exact element-factorization demand, and units affect the choice of its generators. The class group records the first obstruction; local solvability of a different Diophantine problem requires its own theorem.

The project is a complete finite arithmetic statement for its two fields and twenty-five rational primes. Its basis and factorization arguments also explain why each row is valid. That completeness does not classify arbitrary number fields, compute every unit, or replace the separate local-field theory named in §8. A certificate is strongest when its claimed object and range are as explicit as its successful calculations.

<a id="section-567-15-development-exhibit-additive-bases-of-the-prime-idea"></a>
## 15. Development: exhibit additive bases of the prime ideals {#section-569-15-development-exhibit-additive-bases-of-the-prime-idea}

**Worked example: prime-ideal kernels as explicit integer lattices.**

A two-generator ideal such as $(p,g(\\theta))$ need not have those two elements as an additive integer basis. The field degree controls the additive rank. For an index-one power basis and a monic factor $g$ of degree $f$, an additive basis for this ideal is
$$p,p\\theta,\\ldots,p\\theta^{f-1},
\\quad g(\\theta),\\theta g(\\theta),\\ldots,\\theta^{n-f-1}g(\\theta).$$
Here $1\\le f\\le n$, and the second list is empty when $f=n$. There are $n$ vectors. In increasing powers of $\\theta$, their leading coefficients are $p$ for the first $f$ columns and one for the others, so their determinant is $p^f$.

To prove they span the ideal, take an arbitrary element in the kernel of reduction to $\\mathbb F_p[T]/(g)$. Subtract integer multiples of the last vectors successively from the highest degree downward, using monicity. The remainder has degree less than $f$. Its reduction is zero in the field basis $1,T,\\ldots,T^{f-1}$, so each coefficient is divisible by $p$. The first vectors capture exactly that remainder. This proves completeness of an integer lattice, as in Chapter 9, rather than relying only on the index suggested by a quotient.

For the cubic mixed prime at five, $P=(5,\\theta-2)$ has additive basis
$$5,\\quad \\theta-2,\\quad \\theta^2-2\\theta.$$
Its determinant is five. Equivalently one can replace the last vector by $\\theta^2-4$, adding twice the second vector. The resulting membership condition for $a+b\\theta+c\\theta^2$ is $a+2b+4c\\equiv0\\pmod5$, exactly the evaluation at the linear root.

For $Q=(5,\\theta^2+2\\theta+3)$ the additive basis is
$$5,\\quad5\\theta,\\quad\\theta^2+2\\theta+3,$$
with determinant twenty-five. Its quotient reduces a coordinate vector to
$$(a-3c)+(b-2c)\\bar\\theta\\quad\\text{over }\\mathbb F_5,$$
where $\\bar\\theta^2+2\\bar\\theta+3=0$. Membership means both displayed coefficients vanish modulo five. A single equation over the residue field can therefore encode two independent integer congruences.

The residue degrees one and two are visible directly in these lattice bases. Both ideals have full additive rank three, and both can be given with two ring generators, yet their quotient dimensions differ. Neither the number of written ideal generators nor the ambient rank should be substituted for the residue degree.

At a repeated factor, the same basis still computes the prime ideal's norm $p^f$. The exponent $e$ describes its power in $(p)$ and must be recorded separately. For the double root ten at twenty-three, the prime ideal has index twenty-three, not $23^2$; its square contributes the squared norm to the full decomposition. This is the concrete distinction needed when translating a factored polynomial into a certified ideal table.

<a id="section-592-exercises-optional-index-and-quotient-extensions"></a>

## Summary

<a id="section-443-chapter-summary"></a>
Embeddings define field trace and norm, while integral bases and discriminants encode the arithmetic lattice. Rational primes decompose into prime ideals with indices satisfying $\\sum e_{i} f_{i}=n$. Polynomial factorization computes the decomposition away from index exceptions. Minkowski geometry makes the class group finite and computation theoretically bounded.
<a id="section-444-9-development-a-multiplication-matrix-explains-trace-no"></a>

<a id="section-822-summary-and-next-connection"></a>
Multiplication matrices produce trace and norm, while an index-square
discriminant identity certifies the full integer lattice. Prime factors of
a reduced polynomial describe actual prime ideals only after the index
condition is established. The certified cubic shows both mixed residue
degrees and an index exception without changing the underlying field.
The next new chapter proves the ideal-factorisation theorem behind this
dictionary, and the following geometry-of-numbers chapter proves the class
and unit finiteness inputs named in the retained manuscript.

## Exercises {#section-97-exercises-with-complete-solutions}

### Exercise 1: Degree {#number-fields-norms-prime-ideals-ex-1}

What is $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}]$?

<details>
<summary>Hint 1</summary>
Use the defining polynomial of the real cube root.
</details>
<details>
<summary>Hint 2</summary>
A reducible cubic over the rationals has a rational root; the rational-root possibilities fail.
</details>
<details>
<summary>Solution</summary>
$x^{3}-2$ is irreducible by the rational-root test, so the degree is three.
</details>

### Exercise 2: Signature {#number-fields-norms-prime-ideals-ex-2}

Find the signature of $\\mathbb{Q}(\\sqrt[3]{2})$.

<details>
<summary>Hint 1</summary>
Inspect the real and nonreal roots of the cubic.
</details>
<details>
<summary>Hint 2</summary>
A nonreal embedding occurs with its conjugate, contributing two to the degree.
</details>
<details>
<summary>Solution</summary>
The polynomial has one real root and two nonreal conjugate roots, so $(r_{1},r_{2})=(1,1)$ and $1+2=3$.
</details>

### Exercise 3: Quadratic trace {#number-fields-norms-prime-ideals-ex-3}

For $a+b \\sqrt{d}$, compute trace and norm.

<details>
<summary>Hint 1</summary>
Apply the two embeddings that exchange the square root with its negative.
</details>
<details>
<summary>Hint 2</summary>
Adding cancels the square-root term; multiplication gives a difference of squares.
</details>
<details>
<summary>Solution</summary>
The two embeddings give trace $2a$ and norm $a^{2}-db^{2}$.
</details>

### Exercise 4: Minimal-polynomial coefficients {#number-fields-norms-prime-ideals-ex-4}

For root $\\alpha$ of $x^{3}-3x+1$, compute trace and norm.

<details>
<summary>Hint 1</summary>
Read trace and norm from the monic minimal-polynomial coefficients.
</details>
<details>
<summary>Hint 2</summary>
For degree three the trace is minus the quadratic coefficient and norm is minus the constant coefficient.
</details>
<details>
<summary>Solution</summary>
Trace is minus the quadratic coefficient, zero. Norm is $(-1)^{3}*1=-1$.
</details>

### Exercise 5: Norm multiplicativity {#number-fields-norms-prime-ideals-ex-5}

Why does determinant define a multiplicative norm?

<details>
<summary>Hint 1</summary>
Compose the two multiplication maps on the field as a rational vector space.
</details>
<details>
<summary>Hint 2</summary>
Determinants multiply under composition.
</details>
<details>
<summary>Solution</summary>
Multiplication maps satisfy $M_{\\alpha\\beta}=M_{\\alpha}M_{\\beta}$; determinants multiply.
</details>

### Exercise 6: Algebraic integer {#number-fields-norms-prime-ideals-ex-6}

Show $(1+\\sqrt{5})/2$ is integral.

<details>
<summary>Hint 1</summary>
Find a monic polynomial by squaring the half-integer expression.
</details>
<details>
<summary>Hint 2</summary>
It satisfies T squared minus T minus one.
</details>
<details>
<summary>Solution</summary>
It satisfies the monic polynomial $x^{2}-x-1$.
</details>

### Exercise 7: Order warning {#number-fields-norms-prime-ideals-ex-7}

Why is $\\mathbb{Z}[\\sqrt{5}]$ not the full ring of integers?

<details>
<summary>Hint 1</summary>
Compare its coordinates with integer combinations of one and square root five.
</details>
<details>
<summary>Hint 2</summary>
The integral half-integer element cannot lie in that smaller lattice.
</details>
<details>
<summary>Solution</summary>
The integral element $(1+\\sqrt{5})/2$ is absent because its coefficients in the displayed basis are not integers.
</details>

### Exercise 8: Ideal norm {#number-fields-norms-prime-ideals-ex-8}

Compute $N((3+2i))$ in $\\mathbb{Z}[i]$.

<details>
<summary>Hint 1</summary>
Use the conjugate-product norm of the Gaussian generator.
</details>
<details>
<summary>Hint 2</summary>
Principal ideal norm is its absolute field norm, giving the sum of two squares.
</details>
<details>
<summary>Solution</summary>
Principal ideal norm is the absolute field norm $3^{2}+2^{2}=13$.
</details>

### Exercise 9: Prime ideal quotient {#number-fields-norms-prime-ideals-ex-9}

What is the norm of $(3)$ in $\\mathbb{Z}[i]$ when $3$ is inert?

<details>
<summary>Hint 1</summary>
Identify the quotient by the irreducible quadratic over the three-element field.
</details>
<details>
<summary>Hint 2</summary>
Its vector-space dimension is two, so its cardinality is three squared.
</details>
<details>
<summary>Solution</summary>
The quotient is $\\mathbb{F}_{3}[x]/(x^{2}+1)$, a field of $3^{2}=9$ elements, so norm nine.
</details>

### Exercise 10: Fundamental equality split {#number-fields-norms-prime-ideals-ex-10}

For $5$ in $\\mathbb{Q}(i)$, list $e_{i},f_{i}$.

<details>
<summary>Hint 1</summary>
Factor the Gaussian defining polynomial into distinct linear factors modulo five.
</details>
<details>
<summary>Hint 2</summary>
Each factor gives ramification index and residue degree one.
</details>
<details>
<summary>Solution</summary>
Two distinct linear factors give two primes, each with $e=1,f=1$; the sum is $1+1=2$.
</details>

### Exercise 11: Fundamental equality inert {#number-fields-norms-prime-ideals-ex-11}

For $3$ in $\\mathbb{Q}(i)$, list them.

<details>
<summary>Hint 1</summary>
Check that the Gaussian polynomial has no root modulo three.
</details>
<details>
<summary>Hint 2</summary>
One irreducible quadratic gives one prime ideal of residue degree two and ramification index one.
</details>
<details>
<summary>Solution</summary>
There is one prime with $e=1,f=2$, totaling degree two.
</details>

### Exercise 12: Ramified two {#number-fields-norms-prime-ideals-ex-12}

For $2$ in $\\mathbb{Q}(i)$, list them.

<details>
<summary>Hint 1</summary>
Reduce the Gaussian polynomial modulo two.
</details>
<details>
<summary>Hint 2</summary>
Its repeated linear factor gives one ramified prime with multiplicity two.
</details>
<details>
<summary>Solution</summary>
One repeated linear factor gives one prime with $e=2,f=1$, totaling two.
</details>

### Exercise 13: Quadratic splitting criterion {#number-fields-norms-prime-ideals-ex-13}

For odd $p$ not dividing squarefree $d$, how does $x^{2}-d \\bmod p$ determine splitting in $\\mathbb{Q}(\\sqrt{d})$ away from index issues?

<details>
<summary>Hint 1</summary>
Separate nonzero square residues from nonsquares.
</details>
<details>
<summary>Hint 2</summary>
A square gives two distinct roots; a nonsquare leaves the quadratic irreducible.
</details>
<details>
<summary>Solution</summary>
A nonzero square residue gives two linear factors and splitting; a nonresidue gives an irreducible quadratic and inertia.
</details>

### Exercise 14: Discriminant signal {#number-fields-norms-prime-ideals-ex-14}

What does $p\\mid disc(K)$ imply?

<details>
<summary>Hint 1</summary>
Use the field discriminant rather than the discriminant of an unverified order.
</details>
<details>
<summary>Hint 2</summary>
Its prime divisors are exactly the ramified rational primes.
</details>
<details>
<summary>Solution</summary>
The rational prime ramifies in $\\mathcal{O}_{K}$. The converse also holds for field discriminants.
</details>

### Exercise 15: Index boundary {#number-fields-norms-prime-ideals-ex-15}

Why can factoring a convenient polynomial fail at a prime dividing the index?

<details>
<summary>Hint 1</summary>
Compare the reduction of the order with that of the full integer ring.
</details>
<details>
<summary>Hint 2</summary>
At an index prime, tensoring the inclusion modulo p need not give an isomorphism.
</details>
<details>
<summary>Solution</summary>
The order $\\mathbb{Z}[\\alpha]$ has different reduction behavior from the maximal order; repeated or merged factors there need not match prime ideals of $\\mathcal{O}_{K}$.
</details>

### Exercise 16: Norm of prime ideal {#number-fields-norms-prime-ideals-ex-16}

If residue degree is $f$, why is ideal norm $p^f$?

<details>
<summary>Hint 1</summary>
The quotient is a finite field extension of the prime field.
</details>
<details>
<summary>Hint 2</summary>
A vector space of dimension f over p elements has p to the f elements.
</details>
<details>
<summary>Solution</summary>
The quotient is an extension field of $\\mathbb{F}_{p}$ of vector-space dimension $f$, hence has $p^f$ elements.
</details>

### Exercise 17: Norm comparison {#number-fields-norms-prime-ideals-ex-17}

If $(\\alpha)=p_{1}^{2}p_{2}$, express $\\lvert N(\\alpha)\\rvert$.

<details>
<summary>Hint 1</summary>
Use multiplicativity of the ideal norm.
</details>
<details>
<summary>Hint 2</summary>
The exponent on each prime ideal becomes an exponent on its positive norm.
</details>
<details>
<summary>Solution</summary>
Ideal norm multiplicativity gives $\\lvert N(\\alpha)\\rvert=N(p_{1})^{2}N(p_{2})$.
</details>

### Exercise 18: Finite class group {#number-fields-norms-prime-ideals-ex-18}

What is the decisive consequence of Minkowski's bound?

<details>
<summary>Hint 1</summary>
A finite bound alone must be combined with finiteness of the objects below it.
</details>
<details>
<summary>Hint 2</summary>
Each ideal class has a representative in that finite list of bounded-norm ideals.
</details>
<details>
<summary>Solution</summary>
Every ideal class has a representative among finitely many ideals of bounded norm, so only finitely many classes exist.
</details>

### Exercise 19: Local information {#number-fields-norms-prime-ideals-ex-19}

What does completing at one prime discard?

<details>
<summary>Hint 1</summary>
Completion retains the metric and divisibility for one selected place.
</details>
<details>
<summary>Hint 2</summary>
Other places and global principal-ideal constraints are additional information, not consequences of that one completion.
</details>
<details>
<summary>Solution</summary>
It focuses on divisibility and limits at that prime and does not by itself retain constraints from other primes, archimedean embeddings, units, or the global class group.
</details>

### Exercise 20: Equality audit {#number-fields-norms-prime-ideals-ex-20}

Why is $\\sum e_{i} f_{i}=n$ preferable to the false formula $g e f=n$?

<details>
<summary>Hint 1</summary>
Do not assume all primes over p have identical indices outside the Galois case.
</details>
<details>
<summary>Hint 2</summary>
The universally valid expression is a sum of their individual products.
</details>
<details>
<summary>Solution</summary>
Different primes above $p$ can have different ramification indices or residue degrees outside Galois extensions. The sum formula covers the general case.
</details>

<a id="section-437-project-certified-prime-decomposition-table"></a>

<a id="section-594-exercises-optional-index-and-quotient-extensions"></a>
### -Infinity. NTP-20-E21. A misleading cubic reduction at three {#section-598-ntp-20-e21-a-misleading-cubic-reduction-at-three}

In the certified cubic field let $\\gamma=3\\theta$. Find its monic minimal polynomial and the index of $\\mathbb Z[\\gamma]$ in $\\mathcal O_K$. Explain the apparent factor $T^3$ modulo three. Determine the actual decomposition of $(3)$ using the verified integral basis, including its residue degree and norm.

<details>
<summary>Hint 1</summary>
Replace theta by gamma divided by three in its cubic relation.
</details>
<details>
<summary>Hint 2</summary>
The new power basis has determinant twenty-seven; reduce the verified full-basis polynomial instead at this excluded index prime.
</details>

<a id="section-609-ntp-20-e22-idempotents-in-a-mixed-cubic-reduction"></a>
### -Infinity. NTP-20-E22. Idempotents in a mixed cubic reduction {#section-611-ntp-20-e22-idempotents-in-a-mixed-cubic-reduction}

In $\\mathcal O_K/(5)$ put $g=T^2+2T+3$ and let $e=g(\\theta)$. Prove that $e^2=e$ and $e\\ne0,1$. Identify the two field components, their prime-ideal kernels and norms, and explain why these components do not make the whole quotient a field.

<details>
<summary>Hint 1</summary>
Factor the cubic modulo five and apply the polynomial CRT.
</details>
<details>
<summary>Hint 2</summary>
The proposed element maps to one in the linear factor and zero in the irreducible quadratic factor, producing a nontrivial idempotent.
</details>

<a id="section-622-solutions-optional-index-and-quotient-extensions"></a>

## Solutions: optional index and quotient extensions {#section-624-solutions-optional-index-and-quotient-extensions}

<a id="section-624-ntp-20-e21-a-misleading-cubic-reduction-at-three-soluti"></a>
### NTP-20-E21. A misleading cubic reduction at three — solution {#section-626-ntp-20-e21-a-misleading-cubic-reduction-at-three-soluti}

<details>
<summary>Solution</summary>
The relation $\\gamma^3=9\\gamma+27$ gives $T^3-9T-27$. It is the minimal polynomial because $\\mathbb Q(\\gamma)=K$ has degree three. The basis $(1,3\\theta,9\\theta^2)$ has determinant twenty-seven relative to the full basis, so the index is twenty-seven. Reduction to $T^3$ is at an excluded index prime and gives no valid ramification inference. The full-basis polynomial $T^3-T-1$ takes the nonzero value minus one at every element of $\\mathbb F_3$, since $a^3=a$. It is therefore irreducible of degree three. Hence $(3)$ is one prime ideal with $e=1,f=3$ and norm $3^3=27$, not a cubed norm-three prime. In fact $(3,\\gamma)=(3)$ in the full ring.
</details>

<a id="section-631-ntp-20-e22-idempotents-in-a-mixed-cubic-reduction-solut"></a>
### NTP-20-E22. Idempotents in a mixed cubic reduction — solution {#section-633-ntp-20-e22-idempotents-in-a-mixed-cubic-reduction-solut}

<details>
<summary>Solution</summary>
Modulo five, $f=(T-2)g$ and $g(2)=1$. Also $g-1=(T-2)(T+4)$ modulo five, so $g(g-1)$ is a multiple of $f$. This proves $e^2=e$. Under the polynomial CRT map to $\\mathbb F_5[T]/(T-2)\\times\\mathbb F_5[T]/(g)$, the element $e$ maps to $(1,0)$, hence is neither zero nor one. The quadratic discriminant is two, a nonsquare modulo five, so the factors are $\\mathbb F_5$ and $\\mathbb F_{25}$. Their kernels in $\\mathcal O_K$ are $(5,\\theta-2)$ and $(5,\\theta^2+2\\theta+3)$, with norms five and twenty-five. The nonzero idempotents $e$ and $1-e$ have product zero. Thus the whole quotient is a product of fields with zero divisors, while each prime-ideal quotient separately is a field.
</details>

<a id="section-638-solutions-certified-prime-decomposition-table-reference"></a>

## Solutions: certified prime decomposition table reference {#section-640-solutions-certified-prime-decomposition-table-reference}

This complete model covers the original project: one quadratic field, one cubic field, and every rational prime below one hundred in both. The tables are exact hand-derived mathematics with manual source review, not reported software output. No code or command-line interface is required by the original prompt or supplied here.

<a id="section-642-integral-bases-complete-prime-range-and-index-flags"></a>
### Integral bases, complete prime range and index flags {#section-644-integral-bases-complete-prime-range-and-index-flags}

Use $K_2=\\mathbb Q(i)$ with full basis $(1,i)$, certified by Chapter 19's quadratic-integrality proof. Its defining order has index one and field discriminant minus four. Use $K_3=\\mathbb Q(\\theta)$ with $\\theta^3-\\theta-1=0$. The rational-root argument and trace matrix in §10 prove the full basis $(1,\\theta,\\theta^2)$, index one, and field discriminant minus twenty-three. These are full integer rings, not conjectured power-basis orders.

The primes below one hundred are
$$2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97.$$
Trial division by two, three, five and seven certifies completeness of this list: any composite below one hundred has a prime divisor at most its square root, which is less than ten. Both tables contain all twenty-five entries. The index-exception sets are empty for the chosen generators. Ramification is flagged separately: only two for $K_2$ and only twenty-three for $K_3$.

In each table, $(e,f,N)$ attached to an ideal means its exponent in $(p)$, residue degree, and ideal norm. A polynomial factor of degree $f$ produces the concrete ideal $(p,g(\\alpha))$ and quotient $\\mathbb F_p[T]/(g)$. Negative coefficients are ordinary integer lifts, with all factorizations interpreted modulo the row's prime.

<a id="section-652-quadratic-table"></a>
### Quadratic table {#section-654-quadratic-table}

For split rows the two written ideals are distinct and both have the displayed invariants. Inert rows use the single ideal $(p)$. The repeated factor at two has only one prime ideal, whose square is $(2)$.

| $p$ | factorization of $T^2+1$ modulo $p$ | prime ideals; $(e,f,N)$ | degree and norm check |
|---:|:---|:---|:---|
| 2 | $(T+1)^2$ | $(2,i+1)$; $(2,1,2)$ | $2\\cdot1=2$; $2^2=2^2$; ramified |
| 3 | $T^2+1$ irreducible | $(3)$; $(1,2,3^2)$ | $1\\cdot2=2$; $3^2=3^2$ |
| 5 | $(T-2)(T+2)$ | $(5,i-2),(5,i+2)$; each $(1,1,5)$ | $1+1=2$; $5\\cdot5=5^2$ |
| 7 | $T^2+1$ irreducible | $(7)$; $(1,2,7^2)$ | $1\\cdot2=2$; $7^2=7^2$ |
| 11 | $T^2+1$ irreducible | $(11)$; $(1,2,11^2)$ | $1\\cdot2=2$; $11^2=11^2$ |
| 13 | $(T-5)(T+5)$ | $(13,i-5),(13,i+5)$; each $(1,1,13)$ | $1+1=2$; $13\\cdot13=13^2$ |
| 17 | $(T-4)(T+4)$ | $(17,i-4),(17,i+4)$; each $(1,1,17)$ | $1+1=2$; $17\\cdot17=17^2$ |
| 19 | $T^2+1$ irreducible | $(19)$; $(1,2,19^2)$ | $1\\cdot2=2$; $19^2=19^2$ |
| 23 | $T^2+1$ irreducible | $(23)$; $(1,2,23^2)$ | $1\\cdot2=2$; $23^2=23^2$ |
| 29 | $(T-12)(T+12)$ | $(29,i-12),(29,i+12)$; each $(1,1,29)$ | $1+1=2$; $29\\cdot29=29^2$ |
| 31 | $T^2+1$ irreducible | $(31)$; $(1,2,31^2)$ | $1\\cdot2=2$; $31^2=31^2$ |
| 37 | $(T-6)(T+6)$ | $(37,i-6),(37,i+6)$; each $(1,1,37)$ | $1+1=2$; $37\\cdot37=37^2$ |
| 41 | $(T-9)(T+9)$ | $(41,i-9),(41,i+9)$; each $(1,1,41)$ | $1+1=2$; $41\\cdot41=41^2$ |
| 43 | $T^2+1$ irreducible | $(43)$; $(1,2,43^2)$ | $1\\cdot2=2$; $43^2=43^2$ |
| 47 | $T^2+1$ irreducible | $(47)$; $(1,2,47^2)$ | $1\\cdot2=2$; $47^2=47^2$ |
| 53 | $(T-23)(T+23)$ | $(53,i-23),(53,i+23)$; each $(1,1,53)$ | $1+1=2$; $53\\cdot53=53^2$ |
| 59 | $T^2+1$ irreducible | $(59)$; $(1,2,59^2)$ | $1\\cdot2=2$; $59^2=59^2$ |
| 61 | $(T-11)(T+11)$ | $(61,i-11),(61,i+11)$; each $(1,1,61)$ | $1+1=2$; $61\\cdot61=61^2$ |
| 67 | $T^2+1$ irreducible | $(67)$; $(1,2,67^2)$ | $1\\cdot2=2$; $67^2=67^2$ |
| 71 | $T^2+1$ irreducible | $(71)$; $(1,2,71^2)$ | $1\\cdot2=2$; $71^2=71^2$ |
| 73 | $(T-27)(T+27)$ | $(73,i-27),(73,i+27)$; each $(1,1,73)$ | $1+1=2$; $73\\cdot73=73^2$ |
| 79 | $T^2+1$ irreducible | $(79)$; $(1,2,79^2)$ | $1\\cdot2=2$; $79^2=79^2$ |
| 83 | $T^2+1$ irreducible | $(83)$; $(1,2,83^2)$ | $1\\cdot2=2$; $83^2=83^2$ |
| 89 | $(T-34)(T+34)$ | $(89,i-34),(89,i+34)$; each $(1,1,89)$ | $1+1=2$; $89\\cdot89=89^2$ |
| 97 | $(T-22)(T+22)$ | $(97,i-22),(97,i+22)$; each $(1,1,97)$ | $1+1=2$; $97\\cdot97=97^2$ |

Every inert row has $p\\equiv3\\pmod4$, so the supplementary quadratic-residue law proves that minus one is not a square. The split-root certificates $(p,r,(r^2+1)/p)$ are
$$(5,2,1),(13,5,2),(17,4,1),(29,12,5),(37,6,1),(41,9,2),$$
$$(53,23,10),(61,11,2),(73,27,10),(89,34,13),(97,22,5).$$
Each last coordinate is an integer checked by multiplication. Thus both root construction and irreducibility in the quadratic table have exact certificates.

<a id="section-689-cubic-table"></a>
### Cubic table {#section-691-cubic-table}

Each monic irreducible factor is listed once and carries its multiplicity through $e$. In particular the prime at the double root ten modulo twenty-three has norm twenty-three, with exponent two; its norm is not itself $23^2$.

| $p$ | $\\bar f$ in $\\mathbb F_p[T]$ | prime ideals; $(e,f,N)$ | degree and norm check |
|---:|:---|:---|:---|
| 2 | $T^3+T+1$ | $(2)$; $(1,3,2^3)$ | $1*3=3$; $2^3$ |
| 3 | $T^3-T-1$ | $(3)$; $(1,3,3^3)$ | $1*3=3$; $3^3$ |
| 5 | $(T-2)(T^2+2T+3)$ | $(5,\\theta-2)$; $(1,1,5)$; $(5,\\theta^2+2\\theta+3)$; $(1,2,5^2)$ | $1*1+1*2=3$; $5*5^2=5^3$ |
| 7 | $(T-5)(T^2+5T+3)$ | $(7,\\theta-5)$; $(1,1,7)$; $(7,\\theta^2+5\\theta+3)$; $(1,2,7^2)$ | $1*1+1*2=3$; $7*7^2=7^3$ |
| 11 | $(T-6)(T^2+6T+2)$ | $(11,\\theta-6)$; $(1,1,11)$; $(11,\\theta^2+6\\theta+2)$; $(1,2,11^2)$ | $1*1+1*2=3$; $11*11^2=11^3$ |
| 13 | $T^3-T-1$ | $(13)$; $(1,3,13^3)$ | $1*3=3$; $13^3$ |
| 17 | $(T-5)(T^2+5T+7)$ | $(17,\\theta-5)$; $(1,1,17)$; $(17,\\theta^2+5\\theta+7)$; $(1,2,17^2)$ | $1*1+1*2=3$; $17*17^2=17^3$ |
| 19 | $(T-6)(T^2+6T+16)$ | $(19,\\theta-6)$; $(1,1,19)$; $(19,\\theta^2+6\\theta+16)$; $(1,2,19^2)$ | $1*1+1*2=3$; $19*19^2=19^3$ |
| 23 | $(T-10)^2(T-3)$ | $(23,\\theta-10)$; $(2,1,23)$; $(23,\\theta-3)$; $(1,1,23)$ | $2*1+1*1=3$; $23^2*23=23^3$; ramified |
| 29 | $T^3-T-1$ | $(29)$; $(1,3,29^3)$ | $1*3=3$; $29^3$ |
| 31 | $T^3-T-1$ | $(31)$; $(1,3,31^3)$ | $1*3=3$; $31^3$ |
| 37 | $(T-13)(T^2+13T+20)$ | $(37,\\theta-13)$; $(1,1,37)$; $(37,\\theta^2+13\\theta+20)$; $(1,2,37^2)$ | $1*1+1*2=3$; $37*37^2=37^3$ |
| 41 | $T^3-T-1$ | $(41)$; $(1,3,41^3)$ | $1*3=3$; $41^3$ |
| 43 | $(T-10)(T^2+10T+13)$ | $(43,\\theta-10)$; $(1,1,43)$; $(43,\\theta^2+10\\theta+13)$; $(1,2,43^2)$ | $1*1+1*2=3$; $43*43^2=43^3$ |
| 47 | $T^3-T-1$ | $(47)$; $(1,3,47^3)$ | $1*3=3$; $47^3$ |
| 53 | $(T-37)(T^2+37T+43)$ | $(53,\\theta-37)$; $(1,1,53)$; $(53,\\theta^2+37\\theta+43)$; $(1,2,53^2)$ | $1*1+1*2=3$; $53*53^2=53^3$ |
| 59 | $(T-4)(T-13)(T-42)$ | $(59,\\theta-4)$; $(1,1,59)$; $(59,\\theta-13)$; $(1,1,59)$; $(59,\\theta-42)$; $(1,1,59)$ | $1+1+1=3$; $59*59*59=59^3$ |
| 61 | $(T-57)(T^2+57T+15)$ | $(61,\\theta-57)$; $(1,1,61)$; $(61,\\theta^2+57\\theta+15)$; $(1,2,61^2)$ | $1*1+1*2=3$; $61*61^2=61^3$ |
| 67 | $(T-7)(T^2+7T+48)$ | $(67,\\theta-7)$; $(1,1,67)$; $(67,\\theta^2+7\\theta+48)$; $(1,2,67^2)$ | $1*1+1*2=3$; $67*67^2=67^3$ |
| 71 | $T^3-T-1$ | $(71)$; $(1,3,71^3)$ | $1*3=3$; $71^3$ |
| 73 | $T^3-T-1$ | $(73)$; $(1,3,73^3)$ | $1*3=3$; $73^3$ |
| 79 | $(T-20)(T^2+20T+4)$ | $(79,\\theta-20)$; $(1,1,79)$; $(79,\\theta^2+20\\theta+4)$; $(1,2,79^2)$ | $1*1+1*2=3$; $79*79^2=79^3$ |
| 83 | $(T-66)(T^2+66T+39)$ | $(83,\\theta-66)$; $(1,1,83)$; $(83,\\theta^2+66\\theta+39)$; $(1,2,83^2)$ | $1*1+1*2=3$; $83*83^2=83^3$ |
| 89 | $(T-17)(T^2+17T+21)$ | $(89,\\theta-17)$; $(1,1,89)$; $(89,\\theta^2+17\\theta+21)$; $(1,2,89^2)$ | $1*1+1*2=3$; $89*89^2=89^3$ |
| 97 | $(T-51)(T^2+51T+78)$ | $(97,\\theta-51)$; $(1,1,97)$; $(97,\\theta^2+51\\theta+78)$; $(1,2,97^2)$ | $1*1+1*2=3$; $97*97^2=97^3$ |

The table contains nine inert, fourteen mixed, one completely split, and one ramified prime. These are counts of the twenty-five rows, not a statistical claim about all primes. The following certificates prove the factor labels used in the table.

<a id="section-723-irreducible-cubic-certificates"></a>
### Irreducible cubic certificates {#section-725-irreducible-cubic-certificates}

A cubic over a field is irreducible exactly when it has no root. For an odd prime,
$$f(-n)=-f(n)-2.$$
Consequently values for $0\\le n\\le(p-1)/2$ exclude every root if they contain neither zero nor $p-2$. The complete half-range rows below have that property. The two smallest primes use their full residue lists instead.

| $p$ | $n$ in increasing order | $f(n)\\bmod p$ in that order |
|---:|:---|:---|
| 2 | 0, 1 | 1, 1 |
| 3 | 0, 1, 2 | 2, 2, 2 |
| 13 | 0–6 | 12, 12, 5, 10, 7, 2, 1 |
| 29 | 0–14 | 28, 28, 5, 23, 1, 3, 6, 16, 10, 23, 3, 14, 4, 8, 3 |
| 31 | 0–15 | 30, 30, 5, 23, 28, 26, 23, 25, 7, 6, 28, 17, 10, 13, 1, 11 |
| 41 | 0–20 | 40, 40, 5, 23, 18, 37, 4, 7, 11, 22, 5, 7, 34, 10, 23, 38, 20, 16, 32, 33, 25 |
| 47 | 0–23 | 46, 46, 5, 23, 12, 25, 21, 6, 33, 14, 2, 3, 23, 21, 3, 22, 37, 7, 32, 24, 36, 27, 3, 17 |
| 71 | 0–35 | 70, 70, 5, 23, 59, 48, 67, 51, 6, 9, 66, 41, 11, 53, 31, 22, 32, 67, 62, 23, 27, 9, 46, 2, 25, 50, 12, 59, 55, 6, 60, 10, 4, 48, 6, 26 |
| 73 | 0–36 | 72, 72, 5, 23, 59, 46, 63, 43, 65, 62, 40, 5, 36, 66, 28, 1, 64, 4, 46, 50, 22, 41, 40, 25, 2, 50, 29, 18, 23, 50, 32, 48, 31, 60, 68, 61, 45 |

All values are least nonnegative residues. The reflection identity covers the other half of each odd field, so this is a finite root-exhaustion certificate for every inert cubic row. No irreducibility decision is inferred merely from a few tested residues.

<a id="section-743-mixed-and-split-factor-certificates"></a>
### Mixed and split factor certificates {#section-745-mixed-and-split-factor-certificates}

For a listed root $r$, multiplying
$$(T-r)(T^2+rT+r^2-1)=T^3-T-r(r^2-1)$$
recovers $f$ modulo $p$ precisely when $f(r)=0$. The table's constants are reductions of $r^2-1$. The respective checks for the fourteen roots are:
$$f(2)=5,\\quad f(5)=119,\\quad f(6)=209,$$
with $119=7\\cdot17$ and $209=11\\cdot19$; additionally
$$f(13)=2183=59\\cdot37,\\quad f(10)=989=23\\cdot43,$$
$$f(-16)=-4081=-77\\cdot53,\\quad f(-4)=-61,\\quad f(7)=335=5\\cdot67,$$
$$f(20)=7979=101\\cdot79,\\quad f(-17)=-4897=-59\\cdot83,$$
$$f(17)=4895=55\\cdot89,\\quad f(-46)=-97291=-1003\\cdot97.$$
For $p=5$, use $r=2$; for $7,17$ use $r=5$; for $11,19$ use $r=6$. The negative representatives match the positive roots in their rows. These exact substitutions certify the linear factors.

For the first nine mixed rows below, the quadratic discriminant is absent from the complete nonzero square list. Hence each quadratic is irreducible.

| $p$ | quadratic discriminant | complete nonzero square list |
|---:|---:|:---|
| 5 | 2 | 1, 4 |
| 7 | 6 | 1, 2, 4 |
| 11 | 6 | 1, 3, 4, 5, 9 |
| 17 | 14 | 1, 2, 4, 8, 9, 13, 15, 16 |
| 19 | 10 | 1, 4, 9, 16, 6, 17, 11, 7, 5 |
| 37 | 15 | 1, 4, 9, 16, 25, 36, 12, 27, 7, 26, 10, 33, 21, 11, 3, 34, 30, 28 |
| 43 | 5 | 1, 4, 9, 16, 25, 36, 6, 21, 38, 14, 35, 15, 40, 24, 10, 41, 31, 23, 17, 13, 11 |
| 53 | 31 | 1, 4, 9, 16, 25, 36, 49, 11, 28, 47, 15, 38, 10, 37, 13, 44, 24, 6, 43, 29, 17, 7, 52, 46, 42, 40 |
| 61 | 17 | 1, 4, 9, 16, 25, 36, 49, 3, 20, 39, 60, 22, 47, 13, 42, 12, 45, 19, 56, 34, 14, 57, 41, 27, 15, 5, 58, 52, 48, 46 |

For $p=67$, the discriminant is $58=-9$ modulo sixty-seven. A square root would give a square root of minus one after division by three, impossible because $67\\equiv3\\pmod4$. For the remaining four rows, successive squaring and the displayed final products give Euler-criterion nonsquare certificates:

| $p$ | $D$ | residues of $D,D^2,D^4,D^8,D^{16},D^{32}$ | exponent and final multiplication |
|---:|---:|:---|:---|
| 79 | 68 | 68, 42, 26, 44, 40, 20 | $39=32+4+2+1$; product residues 46, 36, 78 $=-1\\pmod{79}$ |
| 83 | 50 | 50, 10, 17, 40, 23, 31 | $41=32+8+1$; product residues 78, 82 $=-1\\pmod{83}$ |
| 89 | 27 | 27, 17, 22, 39, 8, 64 | $44=32+8+4$; product residues 4, 88 $=-1\\pmod{89}$ |
| 97 | 58 | 58, 66, 88, 81, 62, 61 | $48=32+16$; product residues 96 $=-1\\pmod{97}$ |

At fifty-nine the three roots are $4,13,42$. Their sum is fifty-nine, their pairwise product sum is $766=13\\cdot59-1$, and their product is $2184=37\\cdot59+1$. Thus their three linear factors multiply to $f$ modulo fifty-nine and are distinct. At twenty-three, expansion gives
$$(T-10)^2(T-3)=T^3-23T^2+160T-300\\equiv f.$$
The roots three and ten differ, so their multiplicities are exactly one and two. This verifies the complete split and ramified rows without treating a repeated factor as a field quotient.

<a id="section-783-direct-quotient-calculations-in-both-degrees"></a>
### Direct quotient calculations in both degrees {#section-785-direct-quotient-calculations-in-both-degrees}

For the quadratic split prime five, evaluation gives
$$\\mathbb Z[i]/(5)\\longrightarrow\\mathbb F_5\\times\\mathbb F_5,
\\qquad a+bi\\longmapsto(a+2b,a-2b).$$
The two roots are distinct, so polynomial CRT makes this an isomorphism. The individual kernels are $(5,i-2)$ and $(5,i+2)$, each with quotient $\\mathbb F_5$. At three, $T^2+1$ has no root because the squares are zero and one, so $\\mathbb Z[i]/(3)$ is the field with nine elements.

At two, write $\\varepsilon=i+1$ in $\\mathbb Z[i]/(2)$. It is nonzero and $\\varepsilon^2=0$, giving $\\mathbb F_2[\\varepsilon]/(\\varepsilon^2)$. The unique prime ideal $(2,i+1)$ instead has quotient $\\mathbb F_2$, norm two, and exponent two. The entire four-element quotient is not a field, while the prime-ideal quotient is.

For the cubic inert prime two, $T^3+T+1$ has the nonzero value one at both residues, so the quotient is the field $\\mathbb F_8$. At fifty-nine, the evaluation map
$$h(\\theta)\\longmapsto(h(4),h(13),h(42))$$
gives $\\mathcal O_{K_3}/(59)\\cong\\mathbb F_{59}^3$. Surjectivity can be checked by the Lagrange polynomials $\\prod_{s\\ne r}(T-s)/(r-s)$ for the three listed roots: every denominator is nonzero modulo fifty-nine. The three prime-ideal quotients are the individual copies of $\\mathbb F_{59}$.

At twenty-three, polynomial CRT gives
$$\\mathcal O_{K_3}/(23)\\cong
\\mathbb F_{23}[\\varepsilon]/(\\varepsilon^2)\\times\\mathbb F_{23}.$$
The first prime quotient evaluates $\\theta=10$ and the second $\\theta=3$, so each is $\\mathbb F_{23}$. The first ideal occurs twice. This yields degree sum $2+1=3$ and norm product $23^2\\cdot23=23^3$, while the whole quotient has a nonzero nilpotent as proved in §12. At the additional mixed prime five, the field components are $\\mathbb F_5$ and $\\mathbb F_{25}$, and their concrete ideal kernels are given in §11.

<a id="section-801-decomposition-comparison-rubric"></a>
### Decomposition comparison rubric {#section-803-decomposition-comparison-rubric}

A complete comparison must retain both field degrees and all twenty-five primes, with no silent index or ramification exclusions. The integral-basis proof must establish fullness of the integer ring; merely listing integral powers or quoting a defining polynomial is insufficient. The cubic trace matrix and index-square certificate above meet that obligation, and the quadratic basis has its separate proof.

Each factor must be monic and irreducible over the indicated residue field, with its multiplicity recorded. Each corresponding ideal must be constructed in the full integer ring and its quotient identified, so the assigned residue degree and norm can be checked. The complete root-exhaustion, square-list, Euler and multiplication certificates above support every factor in the tables.

Every row must give the full degree sum and the norm product for the rational-prime ideal, including the unequal residue degrees in mixed cubic rows and the unequal exponents at twenty-three. An aggregate count of factorization types would not replace these row checks. Index exceptions and genuine ramified primes must be listed separately even when the former set is empty.

The representative quotient calculations must distinguish $\\mathcal O_K/(p)$ from $\\mathcal O_K/P$. Products of fields and rings with nilpotents may occur in the first, whereas each prime-ideal quotient is a field. The changed-generator examples in §12 and optional Exercise E21 illustrate the excluded-index danger; they do not replace or shrink either original table. All tables and certificates here are manually derived mathematical models, with no observed execution, timing or learner outcome claimed.

<a id="section-811-references-maximal-orders-index-conditions-and-geometri"></a>

## Sources: maximal orders, index conditions and geometric bounds {#section-813-references-maximal-orders-index-conditions-and-geometri}

Romyar Sharifi's [Algebraic Number Theory, Chapter 2](https://www.math.ucla.edu/~sharifi/notes/algnum-ch02.html), Lemma 2.4.16 and Corollary 2.4.17, states the index-square discriminant relation and its squarefree consequence. The trace-matrix and lattice calculations here prove the application to the chosen cubic.

Keith Conrad's [Dedekind's Index Theorem](https://kconrad.math.uconn.edu/blurbs/gradnumthy/dedekind-index-thm.pdf), introduction formula (1.1), gives the factor-to-ideal correspondence, residue norms and the exact restriction $p\\nmid[\\mathcal O_K:\\mathbb Z[\\alpha]]$. The local calculations here retain that restriction and explicitly diagnose its failure for a scaled generator.

J. S. Milne's [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf), version 3.08, Chapter 2, supplies the algebraic-integer and lattice structure; Theorems 4.19 and 4.3 supply the convex-body and ideal-class bounds imported in §13. The quadratic basis, matrix identities, finite quotient proofs and complete prime tables are derived here. No practical general class-group algorithm or complete local-field theory is claimed.


<a id="section-820-summary-and-next-connection"></a>
`;export{e as default};