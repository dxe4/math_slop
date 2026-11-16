
# Bases, Dimension, and Coordinate Isomorphisms {#section-1-bases-dimension-and-coordinate-isomorphisms}

A useful coordinate system must meet two requirements. It must generate every vector we want to describe, and it must describe each vector without ambiguity. Span gives generation; independence gives uniqueness. A **basis** is where those requirements meet.

The exchange lemma from [Span, Independence, and the Exchange Engine](span-independence-exchange.md) proves that every basis of a finitely spanned space has the same number of vectors. That invariant number is dimension. The theorem is more than permission to count columns: it shows that finite-dimensional coordinate descriptions exist while no particular coordinate description is intrinsic.

After this chapter you should be able to construct and compare bases, prove dimension identities without circular counting, turn basis coordinates into an explicit isomorphism with $\mathbb{F}^n$, and recognize which claims fail or need reformulation in infinite-dimensional settings.

<a id="section-7-1-basis-means-complete-and-nonredundant"></a>
## 1. Basis means complete and nonredundant {#section-9-1-basis-means-complete-and-nonredundant}

**Definition 3.1 (Ordered basis).** An ordered list $B=(b_1,\ldots,b_n)$ is a **basis** of $V$ when it is linearly independent and spans $V$.

The empty list is a basis of the zero space. This convention makes later dimension formulas work without special exceptions.

The two clauses have different jobs:

- spanning guarantees existence of coefficients for every $v \in V$;
- independence guarantees uniqueness of those coefficients.

Therefore $B$ is a basis exactly when every $v \in V$ can be written in one and only one way as

$v=a_1b_1+\ldots+a_nb_n$.

The coefficient tuple depends on the ordered basis. The vector does not.

<a id="section-24-worked-basis-check-in-a-polynomial-space"></a>
### Worked basis check in a polynomial space {#section-26-worked-basis-check-in-a-polynomial-space}

**Worked example 3.2 (A field-sensitive polynomial basis).**

Let

$p_1=1+x$, $p_2=x+x^2$, $p_3=1+x^2$

in $\mathbb{R}_2[x]$. To test independence, solve

$a p_1+b p_2+c p_3=0$.

Comparing constant, linear, and quadratic coefficients gives

$a+c=0$, $a+b=0$, $b+c=0$.

The first two give $c=-a$ and $b=-a$; the third gives $-2a=0$, hence $a=b=c=0$ over $R$. Thus the list is independent. To prove it spans, take $q=r+s x+t x^2$ and solve the same coefficient equations with right sides $r,s,t$:

$a+c=r$, $a+b=s$, $b+c=t$.

The solution is

$a=(r+s-t)/2$, $b=(-r+s+t)/2$, $c=(r-s+t)/2$.

Thus every $q$ has a representation, and the list is a basis over $R$.

Over a field of characteristic $2$, the same list is dependent because $p_1+p_2+p_3=0$. Basis claims remain field-relative.

<a id="section-52-2-existence-of-a-basis-in-a-finitely-spanned-space"></a>
## 2. Existence of a basis in a finitely spanned space {#section-54-2-existence-of-a-basis-in-a-finitely-spanned-space}

Suppose $V$ is spanned by a finite list. If that list is independent, it is already a basis. If it is dependent, the deletion lemma removes a vector without changing the span. Repeat. The process must stop because the list length decreases by one each time. The final list still spans and is independent, so it is a basis.

This proves:

**Theorem 3.3 (Basis extraction).** **Basis-extraction theorem.** Every finite spanning list contains a sublist that is a basis.

There is a dual construction.

**Theorem 3.2 (Basis-extension).** In a finitely spanned space, every independent list can be extended to a basis.

To prove it, start with a finite spanning list $S$. Use the exchange lemma to replace members of $S$ by all vectors in the independent list while retaining span. Then delete redundant remaining members until the complete list is independent. Equivalently, append vectors outside the current span; exchange bounds the number of successful appends, so the process terminates at a spanning independent list.

These theorems are constructive at the level of exact algebra. They need not prescribe a numerically stable algorithm for floating-point data. The sibling volume *Matrix Computation in Practice* studies that separate question.

<a id="section-68-3-basis-length-is-invariant"></a>
## 3. Basis length is invariant {#section-70-3-basis-length-is-invariant}

Let $B=(b_1,\ldots,b_n)$ and $C=(c_1,\ldots,c_m)$ be two bases of a finitely spanned vector space $V$. Since $B$ is independent and $C$ spans, exchange gives $n\le m$. Reversing the roles gives $m\le n$. Hence $m=n$.

**Theorem 3.4 (Invariance).** All bases of a finite-dimensional vector space have the same length.

This proof explains why dimension is well-defined. It would be circular to define dimension as “the number of vectors in a basis” and assume without proof that all bases have the same number.

The **dimension** of a finitely spanned vector space $V$, written $\dim_F V$ or simply $\operatorname{dim} V$ when the field is fixed, is the length of any basis. A space is **finite-dimensional** if it has a finite basis. Otherwise it is infinite-dimensional.

In particular:

- $\operatorname{dim} \{0\}=0$;
- $\operatorname{dim} \mathbb{F}^n=n$, using the standard coordinate basis;
- $\operatorname{dim} F_d[x]=d+1$, using $(1,x,\ldots,x^d)$;
- $\operatorname{dim} M_{m,n}(F)=mn$, using the matrices $E_{ij}$ with one $1$ entry;
- $\operatorname{dim} C=1$ over $C$ and $\dim_R C=2$ over $R$.

<a id="section-86-worked-count-symmetric-and-skew-symmetric-matrices"></a>
### Worked count: symmetric and skew-symmetric matrices {#section-88-worked-count-symmetric-and-skew-symmetric-matrices}

**Worked example 3.4 (Matrix-space dimensions).**

For symmetric $n$ by $n$ matrices over any field, entries on and above the diagonal determine the matrix, suggesting $n(n+1)/2$ parameters. A basis consists of

- $E_{ii}$ for $1\le i\le n$;
- $E_{ij}+E_{ji}$ for $i<j$.

These matrices have disjoint distinguishing positions, so coefficient comparison proves independence; every symmetric matrix expands in them. Hence the dimension is $n(n+1)/2$.

For skew-symmetric matrices satisfying $A^T=-A$, a diagonal entry obeys $a_{ii}=-a_{ii}$, or $2a_{ii}=0$. If the field has characteristic not equal to $2$, the diagonal is zero and a basis is $E_{ij}-E_{ji}$ for $i<j$, giving dimension $n(n-1)/2$. In characteristic $2$, the equation $A^T=-A$ is the same as $A^T=A$; the familiar count changes. The hypothesis is essential.

<a id="section-99-4-the-finite-dimensional-length-tests"></a>
## 4. The finite-dimensional length tests {#section-101-4-the-finite-dimensional-length-tests}

Let $\operatorname{dim} V=n$. Exchange turns partial information into a full basis test.

**Theorem 3.5 (Length).** For a list of exactly $n$ vectors in $V$, the following are equivalent:

1. the list is independent;
2. the list spans $V$;
3. the list is a basis.

If the list is independent, basis extension cannot append anything: any basis has length $n$, so the list already spans. If the list spans, basis extraction cannot delete anything: the extracted basis must still have length $n$, so the original list was independent.

Useful corollaries are:

- fewer than $n$ vectors cannot span $V$;
- more than $n$ vectors cannot be independent;
- an independent list of length $n$ is automatically a basis;
- a spanning list of length $n$ is automatically a basis.

The count is powerful only after field, ambient space, and finite dimension are established.

<a id="section-120-worked-shortcut-with-an-audit"></a>
### Worked shortcut with an audit {#section-122-worked-shortcut-with-an-audit}

**Worked example 3.5 (A full-length polynomial test).**

In $\mathbb{R}_3[x]$, consider $(1+x, x+x^2, x^2+x^3, 1-x^3)$. There are four polynomials, and $\operatorname{dim} \mathbb{R}_3[x]=4$. It is enough to prove either span or independence.

For independence, let their coefficients be $a,b,c,d$. Comparing coefficients in a zero combination gives

$a+d=0$, $a+b=0$, $b+c=0$, $c-d=0$.

Substitution yields $b=-a$, $c=a$, $d=a$, and then $a+d=2a=0$, so all coefficients vanish over $R$. The four-vector independent list is therefore a basis. Again, this exact argument fails in characteristic $2$, where the list is dependent.

<a id="section-132-5-subspaces-inherit-finite-dimension"></a>
## 5. Subspaces inherit finite dimension {#section-134-5-subspaces-inherit-finite-dimension}

Let $V$ be finite-dimensional and $U$ a subspace. Begin with the empty independent list in $U$ and append vectors of $U$ outside the current span. Because any independent list in $U$ is also independent in $V$, its length is at most $\operatorname{dim} V$. The process stops and produces a basis of $U$.

**Theorem 3.6 (Subspace dimension).** Every subspace $U$ of finite-dimensional $V$ is finite-dimensional and

$\operatorname{dim} U\le \operatorname{dim} V$.

Moreover, equality holds exactly when $U=V$. If $\operatorname{dim} U=\operatorname{dim} V$, a basis of $U$ is an independent list in $V$ of full length, so it is a basis of $V$ and spans all of $V$. Conversely, equal sets plainly have equal dimension.

Thus a proper inclusion $U \subsetneq V$ forces $\operatorname{dim} U<\operatorname{dim} V$ in finite dimensions.

<a id="section-144-consequence-chains-must-terminate"></a>
### Consequence: chains must terminate {#section-146-consequence-chains-must-terminate}

In a strictly increasing chain

$U_0 \subsetneq U_1 \subsetneq \ldots \subsetneq U_k \subseteq V$,

dimensions strictly increase:

$\operatorname{dim} U_0<\operatorname{dim} U_1<\ldots<\operatorname{dim} U_k\le \operatorname{dim} V$.

Therefore a finite-dimensional space admits no infinite strictly increasing chain of subspaces. Similarly, strictly decreasing chains terminate. Later, kernels and images of powers of an operator will stabilize for exactly this reason.

<a id="section-156-failure-in-infinite-dimension"></a>
### Failure in infinite dimension {#section-158-failure-in-infinite-dimension}

The equality test can fail dramatically in infinite-dimensional spaces. Let $V=\mathbb{F}[x]$ and let $U=xF[x]$, the polynomials with zero constant term. Both have countably infinite algebraic bases:

$(1,x,x^2,\ldots)$ and $(x,x^2,x^3,\ldots)$,

yet $U$ is a proper subspace of $V$. Finite cardinal arithmetic, not the concept of subspace, powered the finite theorem.

<a id="section-164-6-coordinates-are-basis-dependent-isomorphisms"></a>
## 6. Coordinates are basis-dependent isomorphisms {#section-166-6-coordinates-are-basis-dependent-isomorphisms}

Fix an ordered basis $B=(b_1,\ldots,b_n)$ of $V$. Every vector has a unique expansion

$v=a_1b_1+\ldots+a_nb_n$.

The **coordinate vector** of $v$ relative to $B$ is

$[v]_B=(a_1,\ldots,a_n)$ in $\mathbb{F}^n$.

The coordinate assignment

$\kappa_B:V\to \mathbb{F}^n$, $v \to [v]_B$,

preserves addition and scalar multiplication. Indeed, if $[v]_B=(a_j)$ and $[w]_B=(c_j)$, then

$v+w=\sum(a_j+c_j)b_j$, so $[v+w]_B=[v]_B+[w]_B$,

and similarly $[rv]_B=r[v]_B$.

It is bijective: existence of basis expansions gives surjectivity, and uniqueness gives injectivity. Thus every $n$-dimensional vector space over $F$ is **isomorphic** to $\mathbb{F}^n$.

The isomorphism is not canonical because it depends on $B$. Choosing another ordered basis changes the coordinate tuple while leaving the vector unchanged.

<a id="section-188-worked-coordinate-conversion-without-a-change-of-basis-"></a>
### Worked coordinate conversion without a change-of-basis matrix {#section-190-worked-coordinate-conversion-without-a-change-of-basis-}

In $\mathbb{R}_2[x]$, let

$B=(1+x, x+x^2, 1+x^2)$.

For $q=3-x+5x^2$, solve

$a(1+x)+b(x+x^2)+c(1+x^2)=q$.

The equations are

$a+c=3$, $a+b=-1$, $b+c=5$.

Solving gives $a=-3/2$, $b=\frac{1}{2}$, $c=9/2$. Therefore

$[q]_B=(-3/2,\frac{1}{2},9/2)$.

With the standard polynomial basis $E=(1,x,x^2)$, the same vector has coordinates $[q]_E=(3,-1,5)$. Neither tuple *is* the polynomial. Each is a record relative to an ordered basis.

<a id="section-208-7-classification-by-dimension"></a>
## 7. Classification by dimension {#section-210-7-classification-by-dimension}

Two finite-dimensional vector spaces over the same field are isomorphic exactly when they have the same dimension.

If $T:V\to W$ is an isomorphism and $(v_1,\ldots,v_n)$ is a basis of $V$, then $(Tv_1,\ldots,Tv_n)$ is a basis of $W$: linear relations pull back through injectivity, and spanning pulls forward through surjectivity. Therefore the dimensions agree.

Conversely, if both dimensions are $n$, choose bases $(v_j)$ and $(w_j)$ and define

$T(\sum a_jv_j)=\sum a_jw_j$.

Unique coordinates make the rule well-defined. It is linear and has the analogous reverse rule, so it is an isomorphism.

This theorem classifies vector spaces as bare finite-dimensional linear structures. It does not classify spaces equipped with inner products, distinguished operators, bilinear forms, integer lattices, or topologies. An isomorphism must preserve whichever additional structure the problem declares.

<a id="section-222-8-counting-over-finite-fields"></a>
## 8. Counting over finite fields {#section-224-8-counting-over-finite-fields}

If $F$ has $q$ elements and $\dim_F V=n$, choose a basis. Each vector corresponds uniquely to one coefficient tuple in $\mathbb{F}^n$, and there are $q^n$ tuples. Therefore

$\left|V\right|=q^n$.

If $U$ is a $k$-dimensional subspace, then $\left|U\right|=q^k$. Distinct one-dimensional subspaces intersect only at zero. Counting nonzero vectors gives the number of one-dimensional subspaces in $F_q^n$:

$(q^n-1)/(q-1)$.

Each such subspace contains $q-1$ nonzero vectors, and every nonzero vector belongs to exactly the line it spans.

<a id="section-234-worked-finite-geometry"></a>
### Worked finite geometry {#section-236-worked-finite-geometry}

In $\mathbb{F}_2^3$, there are $2^3=8$ vectors. Because $q-1=1$, each one-dimensional subspace contains one nonzero vector, so there are $7$ such subspaces. In $\mathbb{F}_3^2$, there are $9$ vectors and each line has $2$ nonzero vectors, so there are $(9-1)/2=4$ one-dimensional subspaces.

<a id="section-238-9-construction-recipes-and-proof-boundaries"></a>
## 9. Construction recipes and proof boundaries {#section-240-9-construction-recipes-and-proof-boundaries}

<a id="section-240-from-generators-to-a-basis"></a>
### From generators to a basis {#section-242-from-generators-to-a-basis}

Start with a finite spanning list. Find a nontrivial linear relation, solve for a vector with nonzero coefficient, delete it, and repeat. The final list is a basis.

<a id="section-244-from-constraints-to-a-basis"></a>
### From constraints to a basis {#section-246-from-constraints-to-a-basis}

Parametrize the homogeneous solution set. Express a general solution as a linear combination of parameter-direction vectors. Then prove those directions are independent, usually by reading off free parameters.

<a id="section-248-extend-a-partial-basis"></a>
### Extend a partial basis {#section-250-extend-a-partial-basis}

Begin with an independent list. Append vectors outside its span until the ambient space is spanned. Exchange guarantees termination in finite dimension.

<a id="section-252-a-coordinate-warning"></a>
### A coordinate warning {#section-254-a-coordinate-warning}

Coordinates permit computation only after a basis choice. A proof that depends on a convenient basis may still establish an intrinsic fact, but it must explain why the conclusion is independent of the choice. Chapter 6 will formalize basis changes and distinguish matrix equivalence from similarity.

<a id="section-256-a-numerical-warning"></a>
### A numerical warning {#section-258-a-numerical-warning}

Exact independence is discontinuous under measurement and floating-point error: a tiny perturbation can turn a dependent list into an independent one. In numerical work, one asks about conditioning and effective rank at a scale, not only exact rank. Those questions belong to the computational sibling volume and are not resolved by the algebraic basis theorem.

<a id="section-260-10-chapter-summary-and-retrieval-prompts"></a>
## 11. Coordinate extraction and synthesis have different types {#section-765-11-coordinate-extraction-and-synthesis-have-different-t}
A coordinate calculation is safer when both arrows are written. For an ordered basis $B=(b_1,\ldots,b_n)$ of a finite-dimensional $F$-space $V$, define the synthesis map $s_B:F^n\to V$ by $s_B(a)=\sum_ja_jb_j$. Its inverse is the extraction map $\kappa_B:V\to F^n$ from Section 6. The identities are $\kappa_Bs_B=I_{F^n}$ and $s_B\kappa_B=I_V$. They express different equalities because their domains differ. The first says that a coefficient column survives synthesis and extraction; the second says that a vector can be reconstructed from its coordinates.

Spanning proves that $s_B$ reaches every vector. Independence proves that two coefficient columns cannot synthesize the same vector: subtracting their expansions gives a zero relation, forcing their difference to be zero. Thus the basis theorem supplies an inverse without determinants or rank–nullity. This argument also covers $n=0$, where the unique empty column corresponds to the zero vector in the zero space.

The front-matter convention treats coordinate arrays as columns. A displayed tuple such as $(a_1,\ldots,a_n)$ records the same entries in a compact line; in a matrix product it is the corresponding column. The entries belong to $F$, whereas $s_B(a)$ belongs to $V$. In a polynomial space, a column is not itself a polynomial. In a matrix space, the coordinate column is not the matrix whose entries it lists. This type distinction prevents multiplying objects that happen to have compatible-looking strings of numbers but different mathematical roles.

Suppose $C$ is another ordered basis. The map taking $C$-coordinates to $B$-coordinates is $\kappa_Bs_C:F^n\to F^n$. Its $j$th column is $\kappa_B(c_j)$ because the $j$th standard column synthesizes $c_j$. Its inverse is $\kappa_Cs_B$, as cancellation of the adjacent extraction and synthesis maps verifies. This typed description is the foundation for Chapter 6's change-of-basis matrices; it does not require treating a vector as two different vectors when its column changes.

An intrinsic statement may be established using coordinates if the proof transports the conclusion back through these inverse maps. For example, a relation among coordinate columns is equivalent to the same relation among the original vectors because synthesis is injective. What is not justified is replacing the basis after some steps while retaining the old columns. A coordinate ledger should therefore attach a basis label to every array until the transformations have been composed.

<a id="section-774-12-a-translated-polynomial-basis-works-without-dividing"></a>
## 12. A translated polynomial basis works without dividing by two {#section-776-12-a-translated-polynomial-basis-works-without-dividing}
Consider $V=F_2[x]$, polynomials of degree at most two over any field $F$. Let $E=(1,x,x^2)$ and $C=(1,x-1,(x-1)^2)$. To prove that $C$ is a basis, expand a proposed combination:

\[
\alpha+\beta(x-1)+\gamma(x-1)^2
=(\alpha-\beta+\gamma)+(\beta-2\gamma)x+\gamma x^2.
\]

Given $q=a+bx+cx^2$, coefficient comparison uniquely solves these equations as $\gamma=c$, $\beta=b+2c$, and $\alpha=a+b+c$. Existence and uniqueness are proved together. No coefficient is divided by two, so the argument works in characteristic two as well.

The coordinate transformations are therefore

\[
[q]_C=\begin{pmatrix}a+b+c\\b+2c\\c\end{pmatrix},
\qquad
[q]_E=
\begin{pmatrix}\alpha-\beta+\gamma\\\beta-2\gamma\\\gamma\end{pmatrix}
\quad\text{when }[q]_C=\begin{pmatrix}\alpha\\\beta\\\gamma\end{pmatrix}.
\]

Substitution checks that the transformations undo each other. The same formulas are interpreted inside the declared field: in characteristic two, $2c=0$ and minus equals plus. A formula can survive a field change even when an earlier proof by division would not survive. The correct audit concerns the actual algebraic operations used.

Over $R$, take $q=2-3x+x^2$. Its $E$-column is $(2,-3,1)^\mathsf T$, while its $C$-column is $(0,-1,1)^\mathsf T$. Synthesis gives $-(x-1)+(x-1)^2=x^2-3x+2$, confirming the same polynomial. The zero first coefficient says that $q(1)=0$, not that the polynomial has zero constant term in the standard monomial basis.

These formulas also exhibit scalar-valued coordinate measurements. In the $C$ basis they are $\lambda_0(q)=a+b+c$, $\lambda_1(q)=b+2c$, and $\lambda_2(q)=c$. Each is linear, and $\lambda_i(C_j)$ equals one when the indices match and zero otherwise. Applying $\lambda_i$ to an expansion recovers its corresponding coefficient. Chapter 8 organizes such measurements as the dual basis; here their role is concrete extraction rather than an unexplained identification of vectors with functionals.

The first measurement is evaluation at 1. The second is the formal derivative at 1, valid over every field for this quadratic expression. The third is the quadratic coefficient. Writing it instead as $q''(1)/2$ would require characteristic different from two. In characteristic two, the formal second derivative of every quadratic vanishes even though its quadratic coefficient need not vanish. Naming a familiar calculus formula without its scalar hypothesis would destroy information that the coordinate system itself retains.

<a id="section-802-13-measurements-become-coordinates-only-after-an-inject"></a>
## 13. Measurements become coordinates only after an injectivity proof {#section-804-13-measurements-become-coordinates-only-after-an-inject}
A list of scalar measurements is not automatically a coordinate system. For a finite-dimensional $V$, linear measurements $\ell_1,\ldots,\ell_n:V\to F$ define $E(v)=(\ell_1(v),\ldots,\ell_n(v))^\mathsf T$. To recover every vector uniquely, one needs $E$ to be bijective. Merely naming $n$ measurements does not prove that they are independent or that they distinguish all vectors.

For a full example, take $V=F_2[x]$ and evaluate a polynomial at $0,1,-1$. Assume $\operatorname{char}F\ne2$, so the three nodes are distinct and division by two is permitted. If the observed values are $u,v,w$, a polynomial $a+bx+cx^2$ must satisfy $a=u$, $a+b+c=v$, and $a-b+c=w$. These equations give

\[
a=u,\qquad b=(v-w)/2,\qquad c=(v+w-2u)/2.
\]

They provide a linear reconstruction for every value triple. Consequently evaluation is a coordinate isomorphism, not merely a collection of convenient observations.

The corresponding synthesis basis is

\[
L_0=1-x^2,\qquad L_+=x(x+1)/2,\qquad L_-=x(x-1)/2.
\]

Evaluate each polynomial at the three nodes to get the three standard columns. Thus $q=uL_0+vL_++wL_-$, and independence follows by applying the three evaluation maps to a zero combination. This gives a basis proof directly from a measurement certificate rather than from a determinant. It also explains the order: swapping the nodes swaps the coordinate entries and the synthesis basis together.

In characteristic two, $-1=1$, so two of the measurements coincide. The nonzero polynomial $x^2-x$ vanishes at both 0 and 1. Its value triple is zero even though its coefficient column is nonzero. Hence the measurement map is not injective and cannot define lossless coordinates. Over the two-element field these are all field elements: a nonzero polynomial can induce the zero function on the entire field. A polynomial vector and its associated function must therefore be distinguished.

The contrast with the translated basis above is instructive. Translation by 1 still gives a valid basis in characteristic two, but evaluation at the three named nodes does not give three distinct measurements there. “There are three formulas” is a count of expressions, not a proof of three independent directions. The general test is to exhibit reconstruction or show that zero measurements force the vector to vanish. This point returns when duality turns systems of measurements into annihilators and compatibility conditions.

<a id="section-825-14-restricting-scalars-changes-the-permitted-coefficien"></a>
## 14. Restricting scalars changes the permitted coefficients {#section-827-14-restricting-scalars-changes-the-permitted-coefficien}
Suppose $F\subseteq K$ are fields and $K$ has a finite $F$-basis $(\beta_1,\ldots,\beta_d)$. Let $V$ have a finite $K$-basis $(v_1,\ldots,v_n)$. We may regard the same additive group $V$ as an $F$-space by allowing only scalars from $F$. An explicit $F$-basis is the ordered list of all $\beta_jv_i$, first ordered by $i$ and then by $j$.

For spanning, write any $v\in V$ uniquely as $\sum_i k_iv_i$ with $k_i\in K$, then expand $k_i=\sum_j a_{ij}\beta_j$ with $a_{ij}\in F$. This expresses $v$ as an $F$-combination of the proposed list. For independence, a zero $F$-combination groups as $\sum_i(\sum_j a_{ij}\beta_j)v_i=0$. The $K$-basis first forces each parenthesized scalar to vanish; the $F$-basis of $K$ then forces every $a_{ij}=0$. Hence

\[
\dim_F V=d\,\dim_KV.
\]

This multiplication is a theorem with two finite-basis hypotheses. It does not say that a fixed coordinate column has merely been relabeled; each old $K$ coefficient has been expanded into $d$ separate $F$ coefficients.

For an exact example, use $F=Q$, $K=Q(\sqrt2)$, and $V=K^2$. The field $K$ consists of $a+b\sqrt2$ with rational $a,b$. Its rational basis is $(1,\sqrt2)$. Indeed, if $\sqrt2=m/n$ in a reduced integer fraction with $n\ne0$, then $m^2=2n^2$ makes $m$ even. Writing $m=2k$ then gives $n^2=2k^2$, making $n$ even as well, a contradiction. Thus $\sqrt2$ is irrational and its rational coefficients are unique. Nonzero elements have inverses obtained by multiplying by $a-b\sqrt2$ and dividing by $a^2-2b^2$, whose vanishing would force $a=b=0$. Thus the scalar field and its two-dimensional structure are explicit.

Take the $K$-basis $v_1=(1,\sqrt2)$, $v_2=(0,1)$. For $w=(3+\sqrt2,2-\sqrt2)$, its $K$ coordinates are $3+\sqrt2$ and $-4\sqrt2$: subtract $(3+\sqrt2)v_1$ from $w$. Its rational coordinates in $(v_1,\sqrt2v_1,v_2,\sqrt2v_2)$ are therefore $(3,1,0,-4)^\mathsf T$. Reconstruction gives $(3+\sqrt2,3\sqrt2+2-4\sqrt2)=(3+\sqrt2,2-\sqrt2)$.

Linearity also depends on the scalar field. Complex conjugation on $C$ is $R$-linear because it preserves sums and real multiples, but it is not $C$-linear: it sends $i\cdot1$ to $-i$, rather than to $i$ times the image of 1. Equal underlying sets or equal-looking maps do not determine a linear structure until the allowed coefficients are declared.


There is a useful map-level test for the same scalar issue. On $K=Q(\sqrt2)$, let $M$ mean multiplication by $\sqrt2$. In rational coordinates $(1,\sqrt2)$, $M(a+b\sqrt2)=2b+a\sqrt2$, so its matrix is $\left(\begin{smallmatrix}0&2\\1&0\end{smallmatrix}\right)$. As a $K$-linear map on the one-dimensional $K$-space $K$, it instead has the one-entry matrix $[\sqrt2]$. The matrix sizes differ because the scalar fields and coordinate spaces differ; neither matrix is an erroneous description.

More generally, let $V,W$ be $K$-spaces and $T:V\to W$ merely $Q$-linear. Then $T$ is $K$-linear exactly when it commutes with multiplication by $\sqrt2$, in the typed sense $T M_V=M_W T$. Necessity follows by applying $K$-linearity to the scalar $\sqrt2$. Conversely, every $k\in K$ has form $a+b\sqrt2$ with rational $a,b$. The commuting relation gives
\[
T(kv)=aT(v)+bT(\sqrt2v)
=aT(v)+b\sqrt2T(v)=kT(v).
\]
Together with additivity this proves $K$-linearity. The argument is specific to this generated scalar field; commuting with one chosen scalar would not suffice for an arbitrary larger extension without a corresponding generation hypothesis.

Conjugation $\sigma(a+b\sqrt2)=a-b\sqrt2$ is $Q$-linear but fails this test: $\sigma(M(1))=-\sqrt2$, whereas $M(\sigma(1))=\sqrt2$. Its rational matrix is $\left(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix}\right)$. Thus restricting scalars admits more linear maps, not just longer coordinate columns. A vector-space isomorphism over the smaller field need not respect multiplication by the larger field.

The image and kernel of a genuinely $K$-linear map are themselves $K$-subspaces. For the image, $kT(v)=T(kv)$; for the kernel, $T(kv)=kT(v)=0$. When they have finite $K$ dimensions, the scalar-restriction proof applies to each separately. Their dimensions over $Q$ are twice their dimensions over $K$. This conclusion uses the same underlying image and kernel sets, with different allowed coefficients; it does not assume a later rank–nullity theorem.

For example, conjugation has zero kernel and image all of $K$ as a rational-linear map, but it is still not legitimate to call it a $K$-linear isomorphism. The dimensions of its underlying domain and range do not establish scalar compatibility of the map. Conversely, multiplication by a nonzero element of $K$ is linear over both fields, and its explicit inverse is multiplication by the reciprocal. Checking the scalar action is a separate obligation from checking bijectivity.

These examples explain why dimension should carry a field subscript whenever a proof changes scalars. They also show how to audit a proposed coordinate conversion: state which field its entries belong to, which linear structure each column represents, and which scalar multiplications its associated map preserves. A convenient array shape cannot supply those missing types.

<a id="section-860-15-counting-ordered-bases-measures-the-available-coordi"></a>
## 15. Counting ordered bases measures the available coordinate choices {#section-862-15-counting-ordered-bases-measures-the-available-coordi}
Let $V$ be $n$-dimensional over the finite field $F_q$. An ordered basis can be built one vector at a time. The first vector can be any nonzero vector, giving $q^n-1$ choices. Once $k$ independent vectors have been chosen, their span contains exactly $q^k$ vectors, because its coefficient columns are unique. The next vector must lie outside that span, giving $q^n-q^k$ choices. Therefore the number of ordered bases is

\[
(q^n-1)(q^n-q)\cdots(q^n-q^{n-1}).
\]

Every successful sequence spans after $n$ steps by the finite length theorem. Conversely every ordered basis appears once in this construction. Thus the product counts precisely the intended object, without relying on a probability heuristic or a matrix determinant test. For the zero space the empty product is one, corresponding to its one empty ordered basis.

In $F_2^3$ the number is $7\cdot6\cdot4=168$. If one nonzero first vector is prescribed, there are $6\cdot4=24$ ordered completions. A prescribed independent two-vector list has four completions. The dependence on the chosen vectors disappears from these counts because the size of their span depends only on its dimension, not because all concrete coordinates are identical.

Over $F_3^2$ there are $(9-1)(9-3)=48$ ordered bases. An unordered basis is counted twice, once for each order, so there are 24 unordered bases. The division by $2!$ is division of integer cardinalities, not division by an element of the scalar field. In a characteristic-two example, dividing an ordinary counting result by a factorial can still make perfect sense even when that factorial would vanish as a field element. The objects being counted and the arithmetic used to count them are different types.

Each ordered basis determines exactly one synthesis isomorphism $F_q^n\to V$, and an isomorphism determines its basis by the images of the standard columns. The same product therefore counts these coordinate isomorphisms. This makes noncanonicity concrete: there are many equally valid coordinate descriptions even in a small finite space. None is selected merely by knowing the dimension.

These finite counts should not be transferred to an infinite field by inserting an informal value of $q$. Nor do they measure numerical reliability. Over $R$ or $C$, independence and conditioning answer different questions, as the next example shows. The counting proof concerns exact finite algebra with a declared field and ordered choices.

<a id="section-877-16-parametrization-proves-a-basis-only-with-both-direct"></a>
## 16. Parametrization proves a basis only with both directions checked {#section-879-16-parametrization-proves-a-basis-only-with-both-direct}
Suppose a constrained family is expressed as $v=\sum_j a_ju_j$. This proves spanning only if every allowed vector has such a representation. Independence additionally requires that no two parameter lists represent the same vector. A convenient way to prove both is to derive the parameters from entries or measurements that recover them uniquely. Counting symbols in a parametrization is insufficient when some parameters repeat the same direction.

For a new example, let $N=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$ and consider the matrices $X$ satisfying $XN=NX$ over an arbitrary field. Write $X=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)$. Direct multiplication gives

\[
XN=\begin{pmatrix}0&a\\0&c\end{pmatrix},
\qquad NX=\begin{pmatrix}c&d\\0&0\end{pmatrix}.
\]

Equality is equivalent to $c=0$ and $d=a$. Thus every such matrix has the form $aI+bN$, and every matrix of that form commutes with $N$. The list $(I,N)$ is independent: a zero combination has diagonal entries forcing the coefficient of $I$ to vanish, then the upper-right entry forces the coefficient of $N$ to vanish. The constrained space therefore has dimension two. This proof uses entry equations rather than a rank–nullity calculation from the following chapter.

The recovered coordinates $(a,b)$ belong to this two-dimensional matrix subspace; the ambient entry column has four slots. Dropping entries without checking the constraints would lose information on the full matrix space, but it loses nothing on this declared subspace. The example previews how an operator's algebraic structure restricts its commuting maps without invoking a canonical-form theorem prematurely.

Finally take $V=R^2$ and the ordered list $B_\varepsilon=(e_1,e_1+\varepsilon e_2)$ for $\varepsilon>0$. It is a basis because $a e_1+b(e_1+\varepsilon e_2)=0$ forces $b=0$ from the second coordinate and then $a=0$. For $v=(x,y)$ the coordinates are $(x-y/\varepsilon,y/\varepsilon)^\mathsf T$. In particular $e_2$ has coordinates $(-1/\varepsilon,1/\varepsilon)^\mathsf T$, whose large terms cancel during synthesis. At $\varepsilon=0$ the list becomes dependent.

This is an exact algebraic calculation with a real parameter, not a floating-point experiment. It explains why the basis existence theorem supplies no numerical stability guarantee: tiny changes in a nearly repeated direction can produce large coordinate changes. A numerical claim additionally needs an error model, norm and conditioning analysis. The structural proof remains valuable precisely because its conclusion and its boundary are stated separately.

<a id="section-895-17-elaboration-of-the-original-compression-lower-bound"></a>
## 17. Elaboration of the original compression lower bound {#section-897-17-elaboration-of-the-original-compression-lower-bound}
<a id="section-896-original-exercise-18-a-decoder-forces-enough-coordinate"></a>
### Original Exercise 18: a decoder forces enough coordinates {#section-898-original-exercise-18-a-decoder-forces-enough-coordinate}

Let $(s_1,\ldots,s_r)$ be a basis of the signal space $S$. Suppose a linear encoder $E:S\to F^k$ has a decoder $D:F^k\to S$ satisfying $D(E(s))=s$ for every $s\in S$. The decoder need not be linear for this injectivity argument: if $E(s)=E(t)$, applying $D$ gives $s=t$. Hence $E$ is injective. If $\sum_j a_jE(s_j)=0$, linearity gives $E(\sum_j a_js_j)=E(0)$, so injectivity and independence force every $a_j=0$. Thus $F^k$ contains an independent list of length $r$, and exchange gives $k\ge r$. This completes the lossless linear-encoding interpretation even when the image is a proper subspace of $F^k$; no surjectivity of the encoder onto the whole coefficient space was assumed.

<a id="section-900-18-optional-checks-for-coordinate-and-field-boundaries"></a>

## Summary

<a id="section-262-10-chapter-summary-and-retrieval-prompts"></a>
A basis is an independent spanning list. Finite spanning lists can be pruned to bases, and finite independent lists can be extended to bases. Exchange proves every finite basis has the same length, defining dimension. A subspace of a finite-dimensional space has no larger dimension, with equality only for the whole space. An ordered basis provides a noncanonical coordinate isomorphism with $\mathbb{F}^n$.

Retrieve before continuing:

1. Why are both inequalities needed to prove two bases have equal length?
2. Why does a spanning list of length $\operatorname{dim} V$ have to be independent?
3. Where does finite dimension enter the theorem $U \subseteq V$ and $\operatorname{dim} U=\operatorname{dim} V \Longrightarrow U=V$?
4. What data does $[v]_B$ depend on?
5. Why are equal dimension and isomorphism equivalent only after the field is fixed?

<a id="section-272-exercises-with-full-solutions"></a>

<a id="section-965-summary"></a>
A basis supplies a unique finite coordinate expansion, and exchange makes its length an invariant. Dimension comparisons justify extension, pruning, and equal-size shortcuts, while the field controls the available coordinates. Evaluation coordinates and restriction of scalars illustrate why vectors and their descriptions must be distinguished. Sums and quotients next organize shared and discarded directions.

## Exercises {#section-274-exercises-with-full-solutions}

<a id="section-274-1-a-basis-of-a-constraint-space"></a>
### 1. A basis of a constraint space {#section-276-1-a-basis-of-a-constraint-space}

Find a basis and dimension of

$U=\{(x,y,z,w) \in \mathbb{R}^4:x+y+z=0, y-w=0\}$.

<details>
<summary>Hint 1</summary>

Choose free coordinates in the two equations.

</details>

<details>
<summary>Hint 2</summary>

Read generators from the parameterization and prove independence using the free entries.

</details>

<details>
<summary>Solution</summary>

**Solution.** Set $y=w=s$ and $z=t$; then $x=-s-t$. Thus

$(x,y,z,w)=s(-1,1,0,1)+t(-1,0,1,0)$.

The two displayed vectors span. They are independent because the second and third coordinates force the respective coefficients to vanish. Hence they form a basis and $\operatorname{dim} U=2$.


</details>

<a id="section-306-2-extract-a-polynomial-basis"></a>
### 2. Extract a polynomial basis {#section-308-2-extract-a-polynomial-basis}

Extract a basis from $(1,x,1+x,x^2,1+x+x^2)$ for $\mathbb{R}_2[x]$.

<details>
<summary>Hint 1</summary>

Prune expressions already generated by earlier retained polynomials.

</details>

<details>
<summary>Hint 2</summary>

Check the resulting monomials are independent by coefficient equality.

</details>

<details>
<summary>Solution</summary>

**Solution.** Delete $1+x$ because it is the sum of $1$ and $x$. Delete $1+x+x^2$ because it is the sum of $1,x,x^2$. The remaining $(1,x,x^2)$ is the standard basis.


</details>

<a id="section-332-3-extend-an-independent-list"></a>
### 3. Extend an independent list {#section-334-3-extend-an-independent-list}

Extend $((1,1,0),(0,1,1))$ to a basis of $\mathbb{R}^3$.

<details>
<summary>Hint 1</summary>

Choose a standard vector outside the given span.

</details>

<details>
<summary>Hint 2</summary>

Verify independence by expanding a zero combination coordinatewise.

</details>

<details>
<summary>Solution</summary>

**Solution.** Append $e_1=(1,0,0)$. To check independence, solve

$a(1,1,0)+b(0,1,1)+c(1,0,0)=0$.

The third coordinate gives $b=0$; the second then gives $a=0$; the first gives $c=0$. Three independent vectors in $\mathbb{R}^3$ form a basis.


</details>

<a id="section-362-4-full-length-shortcut"></a>
### 4. Full-length shortcut {#section-364-4-full-length-shortcut}

Let $V$ have dimension $n$. Prove a list of $n$ vectors is dependent exactly when it fails to span.

<details>
<summary>Hint 1</summary>

Use the full-length independent and spanning shortcuts separately.

</details>

<details>
<summary>Hint 2</summary>

Negate the equivalence between independence and spanning at the known dimension.

</details>

<details>
<summary>Solution</summary>

**Solution.** The length theorem says an independent $n$-list is a basis and hence spans. Its contrapositive says failure to span implies dependence. It also says a spanning $n$-list is a basis and hence independent; the contrapositive says dependence implies failure to span.


</details>

<a id="section-388-5-coordinate-calculation"></a>
### 5. Coordinate calculation {#section-390-5-coordinate-calculation}

In $\mathbb{R}^2$, let $B=((1,1),(1,-1))$. Find $[(4,2)]_B$.

<details>
<summary>Hint 1</summary>

Equate standard coordinates of a basis combination.

</details>

<details>
<summary>Hint 2</summary>

Add and subtract the two scalar equations.

</details>

<details>
<summary>Solution</summary>

**Solution.** Solve $a(1,1)+b(1,-1)=(4,2)$, giving $a+b=4$ and $a-b=2$. Hence $a=3$, $b=1$, so $[(4,2)]_B=(3,1)$.


</details>

<a id="section-414-6-coordinate-linearity"></a>
### 6. Coordinate linearity {#section-416-6-coordinate-linearity}

Prove directly that $\kappa_B(av+bw)=a\kappa_B(v)+b\kappa_B(w)$.

<details>
<summary>Hint 1</summary>

Expand both input vectors in the fixed basis.

</details>

<details>
<summary>Hint 2</summary>

Uniqueness of coefficients identifies the coordinates of their linear combination.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write $v=\sum x_jb_j$ and $w=\sum y_jb_j$. Then $av+bw=\sum(ax_j+by_j)b_j$. By uniqueness of basis coefficients, the coordinate tuple is $(ax_j+by_j)$, which is exactly $a[v]_B+b[w]_B$.


</details>

<a id="section-440-7-matrices-as-a-coordinate-space"></a>
### 7. Matrices as a coordinate space {#section-442-7-matrices-as-a-coordinate-space}

Give an explicit ordered basis of $M_{2,3}(F)$ and state its dimension.

<details>
<summary>Hint 1</summary>

Use matrices with a single nonzero entry.

</details>

<details>
<summary>Hint 2</summary>

Compare entries to show these matrix units span and are independent.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use $(E_{11},E_{12},E_{13},E_{21},E_{22},E_{23})$, where $E_{ij}$ has a $1$ in position $(i,j)$ and zeros elsewhere. Every matrix is the unique combination of these units with its entries as coefficients. The dimension is $6$.


</details>

<a id="section-466-8-upper-triangular-matrices"></a>
### 8. Upper-triangular matrices {#section-468-8-upper-triangular-matrices}

Find the dimension of the upper-triangular $n$ by $n$ matrices.

<details>
<summary>Hint 1</summary>

Identify which entry positions may be chosen freely.

</details>

<details>
<summary>Hint 2</summary>

Put one unit matrix at each allowed position and count those positions.

</details>

<details>
<summary>Solution</summary>

**Solution.** A basis is $\{E_{ij}:1\le i\le j\le n\}$. There are $n+(n-1)+\ldots+1=n(n+1)/2$ such positions, so the dimension is $n(n+1)/2$.


</details>

<a id="section-492-9-trace-zero-matrices-without-rank-nullity"></a>
### 9. Trace-zero matrices without rank–nullity {#section-494-9-trace-zero-matrices-without-rank-nullity}

Find a basis for the real $2$ by $2$ matrices of trace zero.

<details>
<summary>Hint 1</summary>

Express one diagonal entry using the other.

</details>

<details>
<summary>Hint 2</summary>

Separate the two off-diagonal choices and the remaining diagonal choice.

</details>

<details>
<summary>Solution</summary>

**Solution.** A trace-zero matrix has form

$\begin{pmatrix}a & b \\ c & -a\end{pmatrix}=a\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}+bE_{12}+cE_{21}$.

The three displayed matrices are independent by entry comparison, so they form a basis and the subspace has dimension $3$.


</details>

<a id="section-522-10-characteristic-sensitive-skew-symmetry"></a>
### 10. Characteristic-sensitive skew symmetry {#section-524-10-characteristic-sensitive-skew-symmetry}

In characteristic $2$, prove the skew-symmetric matrices defined by $A^T=-A$ are exactly the symmetric matrices.

<details>
<summary>Hint 1</summary>

Interpret the scalar minus one in characteristic two.

</details>

<details>
<summary>Hint 2</summary>

Substitute its field value into the defining transpose equation.

</details>

<details>
<summary>Solution</summary>

**Solution.** In characteristic $2$, $-1=1$, so $-A=A$ for every matrix. Therefore $A^T=-A$ is identical to $A^T=A$. Diagonal entries need not vanish under this definition.


</details>

<a id="section-548-11-equal-dimension-plus-containment"></a>
### 11. Equal dimension plus containment {#section-550-11-equal-dimension-plus-containment}

Let $U,W$ be finite-dimensional subspaces with $U \subseteq W$ and $\operatorname{dim} U=\operatorname{dim} W$. Prove $U=W$.

<details>
<summary>Hint 1</summary>

Start with a basis of the smaller subspace.

</details>

<details>
<summary>Hint 2</summary>

If a vector of W were outside it, adjoining it would contradict the dimension of W.

</details>

<details>
<summary>Solution</summary>

**Solution.** A basis of $U$ is an independent list in $W$ whose length equals $\operatorname{dim} W$, so it is a basis of $W$. Hence it spans $W$, but its span is $U$; therefore $U=W$.


</details>

<a id="section-574-12-strict-chains"></a>
### 12. Strict chains {#section-576-12-strict-chains}

What is the maximum number of strict inclusions in a subspace chain inside an $n$-dimensional space? Give an example attaining it.

<details>
<summary>Hint 1</summary>

Track dimension through each strict inclusion.

</details>

<details>
<summary>Hint 2</summary>

Use spans of successive standard basis vectors to attain the bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each strict inclusion increases dimension by at least one, from a minimum of $0$ to a maximum of $n$, so there are at most $n$ strict inclusions. For a basis $(e_1,\ldots,e_n)$, the chain

$\{0\} \subsetneq \operatorname{span}(e_1) \subsetneq \ldots \subsetneq \operatorname{span}(e_1,\ldots,e_n)=V$

attains $n$.


</details>

<a id="section-604-13-a-hyperplane"></a>
### 13. A hyperplane {#section-606-13-a-hyperplane}

Let $a=(a_1,\ldots,a_n)$ be nonzero. Prove the solution space of $a_1x_1+\ldots+a_nx_n=0$ has dimension $n-1$ without using rank–nullity.

<details>
<summary>Hint 1</summary>

Select an index whose coefficient is nonzero.

</details>

<details>
<summary>Hint 2</summary>

Solve for that coordinate and use the other coordinates as independent parameters.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose $k$ with $a_k\ne 0$. Every other coordinate is free, while

$x_k=-a_k^{-1} \sum_{j\ne k}a_jx_j$.

For each $j\ne k$, set $x_j=1$ and all other free coordinates zero to obtain a direction vector. These $n-1$ directions span by the parameter formula and are independent because their free coordinates recover their coefficients. Hence the dimension is $n-1$.


</details>

<a id="section-634-14-isomorphism-from-bases"></a>
### 14. Isomorphism from bases {#section-636-14-isomorphism-from-bases}

Let $(v_1,\ldots,v_n)$ and $(w_1,\ldots,w_n)$ be bases of $V$ and $W$. Prove there is a unique linear map $T:V\to W$ with $T(v_j)=w_j$.

<details>
<summary>Hint 1</summary>

Define the map by sending each basis expansion to the corresponding expansion.

</details>

<details>
<summary>Hint 2</summary>

Uniqueness of input coordinates proves well-definedness, and prescribed images force uniqueness.

</details>

<details>
<summary>Solution</summary>

**Solution.** Define $T(\sum a_jv_j)=\sum a_jw_j$; unique coordinates make this well-defined and visibly linear. Any linear map with the prescribed values must satisfy this formula by linearity, proving uniqueness. The analogous rule sending $w_j$ to $v_j$ is its inverse.


</details>

<a id="section-660-15-finite-field-count"></a>
### 15. Finite-field count {#section-662-15-finite-field-count}

How many vectors and one-dimensional subspaces does $\mathbb{F}_3^3$ have?

<details>
<summary>Hint 1</summary>

Count coefficient triples, then nonzero vectors.

</details>

<details>
<summary>Hint 2</summary>

Each one-dimensional subspace contains the same number of nonzero vectors, with no overlap between distinct lines.

</details>

<details>
<summary>Solution</summary>

**Solution.** It has $3^3=27$ vectors. There are $26$ nonzero vectors, and each one-dimensional subspace has $3-1=2$ nonzero vectors. Distinct lines share no nonzero vector, so there are $26/2=13$ lines.


</details>

<a id="section-686-16-proper-equal-size-subspace-in-infinite-dimension"></a>
### 16. Proper equal-size subspace in infinite dimension {#section-688-16-proper-equal-size-subspace-in-infinite-dimension}

Show $xF[x]$ is isomorphic to $\mathbb{F}[x]$ even though it is a proper subspace.

<details>
<summary>Hint 1</summary>

Consider multiplication by x.

</details>

<details>
<summary>Hint 2</summary>

It is bijective onto the displayed proper subspace, even though its codomain is not the whole polynomial space.

</details>

<details>
<summary>Solution</summary>

**Solution.** Define $T:\mathbb{F}[x]\to xF[x]$ by $T(p)=xp$. It is linear. It is injective because $xp=0$ implies $p=0$ in the polynomial ring over a field. It is surjective by the definition of $xF[x]$. Yet $1$ is not in the image, so $xF[x]$ is a proper subset of $\mathbb{F}[x]$.


</details>

<a id="section-712-17-field-and-dimension"></a>
### 17. Field and dimension {#section-714-17-field-and-dimension}

Regard $C^2$ first over $C$ and then over $R$. Give bases and dimensions.

<details>
<summary>Hint 1</summary>

Write real and imaginary parts of each complex coordinate.

</details>

<details>
<summary>Hint 2</summary>

Compare the allowed coefficient fields rather than changing the underlying vectors.

</details>

<details>
<summary>Solution</summary>

**Solution.** Over $C$, $((1,0),(0,1))$ is a basis, so the dimension is $2$. Over $R$, a basis is $((1,0),(i,0),(0,1),(0,i))$, so the dimension is $4$. The same underlying set has different dimension because the legal coefficients differ.


</details>

<a id="section-738-18-transfer-problem-data-compression"></a>
### 18. Transfer problem: data compression {#section-740-18-transfer-problem-data-compression}

Let $S$ be a subspace of $\mathbb{F}^m$ generated by $n$ vectors. Prove every independent list of signals in $S$ has length at most $n$. Explain what this says about lossless linear coordinates on $S$.

<details>
<summary>Hint 1</summary>

Apply exchange to the given generating list.

</details>

<details>
<summary>Hint 2</summary>

A lossless linear coordinate description must retain the number of independent directions in S.

</details>

<details>
<summary>Solution</summary>

**Solution.** The $n$ generators form a spanning list of $S$. Exchange bounds every independent list by $n$. Basis extraction may reduce the generators to a basis of some length $r\le n$; the corresponding $r$ coefficients give lossless linear coordinates on $S$, and no smaller coefficient space can be isomorphic to $S$ because isomorphic finite-dimensional spaces have equal dimension.

</details>

<a id="section-763-11-coordinate-extraction-and-synthesis-have-different-t"></a>

<a id="section-902-18-optional-checks-for-coordinate-and-field-boundaries"></a>
### 19. LSP-03-E19. Move the evaluation nodes {#section-903-lsp-03-e19-move-the-evaluation-nodes}

On $F_2[x]$, use the measurements $(q(0),q(1),q(2))$. When $\operatorname{char}F\ne2$, derive an explicit reconstruction from arbitrary values $(u,v,w)$. In characteristic two, give a nonzero polynomial with all measurements zero.

<details>
<summary>Hint 1</summary>

Write q=a+bx+cx² and compare the three measurements.

</details>

<details>
<summary>Hint 2</summary>

Subtract the middle equations to isolate the coefficient requiring division by two.

</details>

<a id="section-919-lsp-03-e20-expand-a-changed-scalar-column"></a>
### 20. LSP-03-E20. Expand a changed scalar column {#section-921-lsp-03-e20-expand-a-changed-scalar-column}

Let $K=Q(\sqrt2)$ and use the $K$-basis $v_1=(1,\sqrt2)$, $v_2=(0,1)$ of $K^2$. Find both the $K$ coordinates of $(1-\sqrt2,5+2\sqrt2)$ and its rational coordinates in $(v_1,\sqrt2v_1,v_2,\sqrt2v_2)$. State the dimension over each field.

<details>
<summary>Hint 1</summary>

Find the coefficient of v₁ from the first coordinate.

</details>

<details>
<summary>Hint 2</summary>

Subtract that contribution in the second coordinate, then expand each K coefficient in 1,√2.

</details>

<a id="section-937-19-solutions-to-the-coordinate-and-field-checks"></a>

## Solutions

<a id="section-939-19-solutions-to-the-coordinate-and-field-checks"></a>
<a id="section-938-lsp-03-e19-move-the-evaluation-nodes-solution"></a>
### LSP-03-E19. Move the evaluation nodes — solution {#section-940-lsp-03-e19-move-the-evaluation-nodes-solution}

<details>
<summary>Solution</summary>

For $q=a+bx+cx^2$, the measurements satisfy $a=u$, $a+b+c=v$ and $a+2b+4c=w$. Thus $c=(w-2v+u)/2$ and $b=(4v-3u-w)/2$, giving
\[
q=u(x-1)(x-2)/2+v\,x(2-x)+w\,x(x-1)/2.
\]
Each displayed synthesis polynomial evaluates to its corresponding standard column at $0,1,2$, which also verifies reconstruction and uniqueness. In characteristic two, the node 2 equals 0, and $x^2-x$ is a nonzero polynomial vanishing at both remaining nodes. Hence the measurements do not distinguish every polynomial.


</details>

<a id="section-952-lsp-03-e20-expand-a-changed-scalar-column-solution"></a>
### LSP-03-E20. Expand a changed scalar column — solution {#section-954-lsp-03-e20-expand-a-changed-scalar-column-solution}

<details>
<summary>Solution</summary>

The first coordinate forces the coefficient of $v_1$ to be $1-\sqrt2$. Its second-coordinate contribution is $\sqrt2-2$, leaving $7+\sqrt2$ as the coefficient of $v_2$. Therefore the $K$ column is $(1-\sqrt2,7+\sqrt2)^\mathsf T$, and expanding those two coefficients in $(1,\sqrt2)$ gives rational column $(1,-1,7,1)^\mathsf T$. Reconstruction is $v_1-\sqrt2v_1+7v_2+\sqrt2v_2=(1-\sqrt2,5+2\sqrt2)$. The respective dimensions are two over $K$ and four over $Q$.


</details>


<a id="section-963-summary"></a>
