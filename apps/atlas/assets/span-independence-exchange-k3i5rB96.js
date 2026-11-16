var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: span-independence-exchange
title: "Span, Independence, and the Exchange Engine"
level: advanced-undergraduate
estimated_minutes: 205
license: CC BY-SA 4.0
---

# Span, Independence, and the Exchange Engine {#section-1-span-independence-and-the-exchange-engine}

Subspaces describe collections closed under linear operations. This chapter asks two sharper questions about a list of vectors:

1. **Reach:** which vectors can the list generate?
2. **Redundancy:** can one listed vector be assembled from the others?

Span answers the first question and linear independence the second. Their interaction produces the exchange lemma, the finite-dimensional engine behind bases, invariant dimension, rank–nullity, coordinates, and much of the classification theory later in the book.

The local prerequisite is [Vector Spaces, Subspaces, and the Role of the Field](#/item/book-linear-algebra-structure-proofs?chapter=vector-spaces-subspaces-fields). We continue to work over a stated field $F$, and every linear combination is finite.

<a id="section-10-1-span-is-generated-closure"></a>
## 1. Span is generated closure {#section-12-1-span-is-generated-closure}

**Definition 2.1 (Finite linear combination).** Given vectors $v_1,\\ldots,v_m$ in $V$, a **linear combination** is an expression

$a_1 v_1+\\ldots+a_m v_m$, with $a_j \\in F$.

The **span** of the list is the set of all such combinations:

$\\operatorname{span}(v_1,\\ldots,v_m)=\\left\\{\\sum a_j v_j : a_j \\in F\\right\\}$.

For an arbitrary subset $S$ of $V$, $\\operatorname{span}(S)$ consists of all finite linear combinations of elements of $S$. The empty combination is defined to be $0_V$, so $\\operatorname{span}(\\varnothing)=\\{0_V\\}$.

**Theorem 2.2 (Generated subspace).** **Generated-subspace theorem.** $\\operatorname{span}(S)$ is the smallest subspace of $V$ containing $S$.

**Proof.** The zero vector is the empty combination. A linear combination of two finite linear combinations is another finite linear combination after distributing and collecting coefficients, so $\\operatorname{span}(S)$ is a subspace. It contains $S$ because each $s \\in S$ equals $1s$. If $U$ is any subspace containing $S$, closure under finite addition and scaling forces $U$ to contain every finite linear combination of elements of $S$. Hence $\\operatorname{span}(S)$ is contained in $U$. This proves minimality.

Minimality is often more useful than the formula. To show $\\operatorname{span}(S)$ is contained in a subspace $U$, it is enough to show $S$ is contained in $U$. To show a vector lies in every subspace containing $S$, it is enough to exhibit it as a linear combination of $S$.

<a id="section-28-worked-computation-two-descriptions-of-a-plane"></a>
### Worked computation: two descriptions of a plane {#section-30-worked-computation-two-descriptions-of-a-plane}

**Worked example 2.3 (Generators and a plane equation).**

Let $u=(1,0,1)$ and $v=(0,1,1)$ in $\\mathbb{R}^3$. A general combination is

$a u+b v=(a,b,a+b)$.

Therefore

$\\operatorname{span}(u,v)=\\{(x,y,z):z=x+y\\}$.

The parameter description displays how to build a vector; the equation description displays the constraint every generated vector satisfies. Proving equality required both directions:

- every combination satisfies $z=x+y$;
- if $(x,y,z)$ satisfies $z=x+y$, then it equals $x u+y v$.

Showing only the first direction proves containment, not equality.

<a id="section-47-2-membership-is-a-linear-system"></a>
## 2. Membership is a linear system {#section-49-2-membership-is-a-linear-system}

For coordinate vectors, deciding whether $b$ belongs to $\\operatorname{span}(v_1,\\ldots,v_m)$ means solving

$a_1v_1+\\ldots+a_mv_m=b$.

Placing the generators as columns produces a matrix equation $A a=b$. Row reduction is a computation device for the coefficient question; it does not change the conceptual definition.

<a id="section-55-worked-computation-membership-and-all-representations"></a>
### Worked computation: membership and all representations {#section-57-worked-computation-membership-and-all-representations}

**Worked example 2.4 (All coefficient representations).**

In $\\mathbb{R}^3$, let

$v_1=(1,1,0)$, $v_2=(0,1,1)$, $v_3=(1,2,1)$.

Notice $v_3=v_1+v_2$. To represent $b=(2,3,1)$, solve

$a v_1+b_2 v_2+c v_3=(2,3,1)$.

Because $b=(2)v_1+(1)v_2$, one representation is $(a,b_2,c)=(2,1,0)$. Using $v_3=v_1+v_2$, all representations satisfy

$a+c=2$, $b_2+c=1$.

Thus

$(a,b_2,c)=(2-t,1-t,t)$.

The nonuniqueness is not a row-reduction accident. It records a dependence among the generators.

<a id="section-77-3-linear-independence-is-uniqueness-of-coefficients"></a>
## 3. Linear independence is uniqueness of coefficients {#section-79-3-linear-independence-is-uniqueness-of-coefficients}

A finite list $(v_1,\\ldots,v_m)$ is **linearly independent** when

$a_1v_1+\\ldots+a_mv_m=0_V$

implies $a_1=\\ldots=a_m=0_F$. Otherwise it is **linearly dependent**.

The definition concerns a list. A repeated vector makes a list dependent even though a set notation would erase the repetition. Order does not affect independence, but multiplicity does.

**Theorem 2.3 (Uniqueness).** A list is independent exactly when every vector in its span has a unique coefficient representation using that list.

**Proof.** Suppose the list is independent and

$\\sum a_jv_j=\\sum b_jv_j$.

Subtracting gives $\\sum(a_j-b_j)v_j=0$, so independence forces $a_j=b_j$ for every $j$. Conversely, if representations are unique, compare $\\sum a_jv_j=0$ with the all-zero representation of $0$; uniqueness forces every $a_j=0$.

This theorem is the operational meaning of independence: independent generators provide unambiguous coordinates on what they span.

<a id="section-97-immediate-tests"></a>
### Immediate tests {#section-99-immediate-tests}

- The empty list is independent: there is no nontrivial coefficient relation.
- A one-vector list $(v)$ is independent exactly when $v\\ne 0$.
- Any list containing $0$ is dependent.
- Any list containing the same vector twice is dependent.
- Every sublist of an independent list is independent.
- Every list containing a dependent sublist is dependent.

Each is best proved from the coefficient definition, not from a geometric slogan.

<a id="section-108-4-dependence-means-a-removable-vector"></a>
## 4. Dependence means a removable vector {#section-110-4-dependence-means-a-removable-vector}

**Lemma 2.4 (Deletion).** A list $(v_1,\\ldots,v_m)$ is dependent exactly when some $v_k$ belongs to the span of the other vectors.

**Proof.** If $v_k=\\sum_{j\\ne k}c_jv_j$, then

$v_k-\\sum_{j\\ne k}c_jv_j=0$

is a nontrivial relation. Conversely, suppose $\\sum a_jv_j=0$ is nontrivial. Choose $k$ with $a_k\\ne 0$. Since $F$ is a field,

$v_k=-\\sum_{j\\ne k}(a_j/a_k)v_j$.

Thus $v_k$ is generated by the others, completing the proof.

The division by $a_k$ is the crucial field step. Over a general ring, a nonzero coefficient need not be invertible.

**Span-preserving deletion.** If $v_k$ is in the span of the other vectors, deleting it does not change the span. Every combination using $v_k$ can replace it by its expression in the others; the reverse containment is immediate because the shorter list is a sublist.

<a id="section-126-worked-pruning"></a>
### Worked pruning {#section-128-worked-pruning}

**Worked example 2.5 (Pruning polynomial generators).**

Consider polynomials

$p_1=1+x$, $p_2=x+x^2$, $p_3=1+2x+x^2$, $p_4=1-x^2$.

We have $p_3=p_1+p_2$, so $p_3$ can be deleted without changing span. Is $p_4$ redundant after that? If

$a(1+x)+b(x+x^2)=1-x^2$,

coefficient comparison gives $a=1$, $a+b=0$, and $b=-1$, which is consistent. Hence $p_4=p_1-p_2$ and is also redundant. The original span equals $\\operatorname{span}(p_1,p_2)$, and $(p_1,p_2)$ is independent because

$a p_1+b p_2=0$

forces the constant coefficient $a=0$ and then the quadratic coefficient $b=0$.

<a id="section-144-5-independence-can-be-built-one-vector-at-a-time"></a>
## 5. Independence can be built one vector at a time {#section-146-5-independence-can-be-built-one-vector-at-a-time}

**Extension criterion.** If $(v_1,\\ldots,v_m)$ is independent, then appending $w$ preserves independence exactly when $w$ is not in $\\operatorname{span}(v_1,\\ldots,v_m)$.

If $w$ lies in the span, its expression produces a dependence. Conversely, suppose

$a_1v_1+\\ldots+a_mv_m+bw=0$.

If $b\\ne 0$, then $w$ can be solved as a combination of the $v_j$, contradiction. Hence $b=0$, and independence of the original list forces all $a_j=0$.

This supplies a construction protocol:

1. begin with the empty independent list;
2. append a vector outside the current span;
3. stop when the desired subspace is spanned.

At each successful step the span strictly grows. In a finitely generated space, the exchange lemma will prove that this process must stop after a bounded number of steps.

<a id="section-162-6-the-exchange-lemma"></a>
## 6. The exchange lemma {#section-164-6-the-exchange-lemma}

Here is the central finite theorem.

**Lemma 2.5 (Exchange).** Let $(u_1,\\ldots,u_r)$ be linearly independent in $V$, and let $(w_1,\\ldots,w_s)$ span $V$. Then $r\\le s$. More strongly, after reordering the $w$ list if necessary, one can replace $r$ of the $w_j$ by $u_1,\\ldots,u_r$ and retain a spanning list:

$(u_1,\\ldots,u_r,w_{r+1}',\\ldots,w_s')$ spans $V$.

The proof is constructive. It repeatedly installs one independent vector into a spanning list and removes one old generator.

<a id="section-172-one-vector-replacement"></a>
### One-vector replacement {#section-174-one-vector-replacement}

Because the $w_j$ span $V$, write

$u_1=a_1w_1+\\ldots+a_sw_s$.

Some coefficient is nonzero because $u_1$ cannot be zero. After reordering, assume $a_1\\ne 0$. Solve for

$w_1=a_1^{-1}(u_1-a_2w_2-\\ldots-a_sw_s)$.

Thus $w_1$ belongs to $\\operatorname{span}(u_1,w_2,\\ldots,w_s)$, and every other member of the old list already belongs there. Since the old list spans $V$, the replacement list $(u_1,w_2,\\ldots,w_s)$ also spans $V$.

<a id="section-184-the-inductive-step"></a>
### The inductive step {#section-186-the-inductive-step}

Suppose we have installed $u_1,\\ldots,u_k$ and retained a spanning list

$(u_1,\\ldots,u_k,z_{k+1},\\ldots,z_s)$.

Express $u_{k+1}$ in this list:

$u_{k+1}=\\sum_{j=1}^k b_j u_j+\\sum_{j=k+1}^s c_jz_j$.

At least one $c_j$ is nonzero. Otherwise $u_{k+1}$ would lie in $\\operatorname{span}(u_1,\\ldots,u_k)$, contradicting independence by the extension criterion. Reorder the remaining $z$ vectors so $c_{k+1}\\ne 0$, solve for $z_{k+1}$, and replace it by $u_{k+1}$ while preserving span.

The process can install every $u_j$. It cannot install more than $s$ vectors because each installation consumes one slot; hence $r\\le s$.

<a id="section-198-what-the-theorem-does-not-say"></a>
### What the theorem does not say {#section-200-what-the-theorem-does-not-say}

- It compares a **finite independent list** with a **finite spanning list**.
- It does not assert that an arbitrary infinite spanning set has a finite subset spanning the space.
- It does not select replacements uniquely.
- It uses only algebra, not orthogonality or length.
- Its proof relies on nonzero scalar coefficients being invertible.

<a id="section-206-7-consequences-before-the-word-basis"></a>
## 7. Consequences before the word “basis” {#section-208-7-consequences-before-the-word-basis}

Several cardinality facts now follow immediately.

**No long independent lists.** If $V$ has a spanning list of length $s$, every independent list has length at most $s$.

**No short spanning lists.** If $V$ has an independent list of length $r$, every spanning list has length at least $r$.

**Maximal independent implies spanning in a finitely spanned space.** Suppose an independent list cannot be enlarged while preserving independence. If it failed to span $V$, a vector outside its span could be appended by the extension criterion. Contradiction.

**Minimal spanning implies independent.** If a finite spanning list were dependent, the deletion lemma would remove one vector without changing its span, contradicting minimality.

Together, these results say that a nonredundant coordinate system is both an independent list and a spanning list. Chapter 3 names this a basis and proves all such lists have the same length.

<a id="section-220-8-field-dependence-is-real"></a>
## 8. Field dependence is real {#section-222-8-field-dependence-is-real}

Independence is always relative to a field. Consider the list $(1,i)$ inside $C$.

- Over $R$, if $a+bi=0$ with real $a,b$, then $a=b=0$; the list is independent.
- Over $C$, the relation $(-i)1+1\\cdot i=0$ is nontrivial; the list is dependent.

Allowing more scalars creates more possible coefficient relations. Restricting scalars can turn a dependent list into an independent one, although it may also greatly increase the number of generators needed to span.

Finite fields give another useful counting intuition. In $F_q$, where $q$ is the number of scalars, the span of one nonzero vector has exactly $q$ elements: \${av:a \\in F_q}$. The span of an independent $r$-tuple has $q^r$ elements because coefficient representations are unique. This counting statement will become a theorem once dimension is established.

<a id="section-231-9-proof-diagnostics-and-common-errors"></a>
## 9. Proof diagnostics and common errors {#section-233-9-proof-diagnostics-and-common-errors}

<a id="section-233-error-checking-only-that-the-generators-satisfy-a-const"></a>
### Error: checking only that the generators satisfy a constraint {#section-235-error-checking-only-that-the-generators-satisfy-a-const}

To prove $\\operatorname{span}(S)=U$, showing $S$ lies in $U$ yields only $\\operatorname{span}(S) \\subseteq U$. You must also show an arbitrary member of $U$ is a combination of $S$.

<a id="section-237-error-using-a-dimension-count-before-dimension-is-prove"></a>
### Error: using a dimension count before dimension is proved {#section-239-error-using-a-dimension-count-before-dimension-is-prove}

It is tempting to say “three vectors in $\\mathbb{R}^2$ are dependent.” That is true, but its proof rests on exchange or an equivalent theorem. At this stage, cite the exchange lemma with the standard two-vector spanning list, or solve the coefficient equations directly.

<a id="section-241-error-treating-a-nonzero-determinant-as-the-definition"></a>
### Error: treating a nonzero determinant as the definition {#section-243-error-treating-a-nonzero-determinant-as-the-definition}

Determinants arrive much later. Independence exists in function spaces, polynomial spaces, and vector spaces without a chosen basis. A determinant test is one coordinate theorem, not the concept.

<a id="section-245-error-allowing-infinite-linear-combinations-silently"></a>
### Error: allowing infinite linear combinations silently {#section-247-error-allowing-infinite-linear-combinations-silently}

The sequence $(1,1,1,\\ldots)$ is not a finite linear combination of standard unit sequences, even though it can be written informally as $e_1+e_2+\\ldots$. That infinite expression requires a topology and a convergence convention. Algebraic span permits only finite sums.

<a id="section-249-error-solving-for-a-coefficient-that-might-be-zero"></a>
### Error: solving for a coefficient that might be zero {#section-251-error-solving-for-a-coefficient-that-might-be-zero}

In deletion and exchange proofs, explicitly select a nonzero coefficient before dividing. “Solve for any vector” is unjustified.

<a id="section-253-10-chapter-summary-and-retrieval-prompts"></a>
## 11. Development: keep a certificate for each coefficient claim {#section-854-11-development-keep-a-certificate-for-each-coefficient-}

For a fixed list $L=(v_1,\\ldots,v_m)$, define $C_L(a)=\\sum_ja_jv_j$ for $a\\in F^m$. This rule has a typed input of scalar coefficients and a vector output. Distributivity gives $C_L(a+b)=C_L(a)+C_L(b)$ and $C_L(ca)=cC_L(a)$. No basis for the ambient space is assumed.

The relation space is $\\mathcal R_L=\\{r\\in F^m:C_L(r)=0\\}$. It is a subspace of the coefficient space, by the same two identities. If $a_0$ represents a vector $z$, every other representation is exactly $a_0+r$ for some $r\\in\\mathcal R_L$: subtracting two representing equations produces a relation, and adding a relation does not change the represented vector. Thus the representations of $z$ are either absent, or form a translate of the relation space.

This description separates a membership certificate from a uniqueness certificate. An explicit coefficient tuple proves that $z$ is in the span. A nonzero relation proves nonuniqueness for every vector that has a representation, because adding that relation gives a different tuple. Proving there are no nonzero relations establishes uniqueness simultaneously for the whole span.

A relation also identifies which deletion is permitted. If $r_k\\ne0$, then its equation solves for $v_k$ in terms of the other generators. The field guarantees the inverse of that particular coefficient. A vector whose coefficient is zero in this relation has not been certified removable by this relation, even if another relation might permit its removal. “The list is dependent” does not identify an arbitrary deletable position.

The distinction matters when several redundancies are present. In the real polynomial list $(1,t,1+t)$, both $1=(1+t)-t$ and $t=(1+t)-1$ are valid. They do not justify deleting the first two generators simultaneously: the two certificates rely on each other. Keeping only $1+t$ loses the ability to represent one or $t$. After each deletion, rewrite any later certificate using the current list.

This is a mathematical audit trail, not necessarily a numerical algorithm. In an abstract function space, deciding membership may itself require a proof. Exact field identities provide certificates; a small floating residual does not replace the equation. The later chapters name $C_L$ as a linear map and its relation space as a kernel. Here the coefficient equations already expose the structure needed for pruning and exchange.

<a id="section-866-12-development-certify-nonmembership-without-a-dimensio"></a>
## 12. Development: certify nonmembership without a dimension count {#section-868-12-development-certify-nonmembership-without-a-dimensio}

A useful negative certificate is a scalar-valued test that vanishes on every generator. Suppose a rule $\\lambda:V\\to F$ preserves finite linear combinations and $\\lambda(v_j)=0$ for all $j$. Then every vector in their span has test value zero. Consequently $\\lambda(z)\\ne0$ proves that $z$ is outside the span. This uses only the forward implication; a test that gives zero may still miss other constraints.

For a complete worked case, take polynomials of degree at most two over $F$ and the generators $f=1+t$, $g=t+t^2$. Write $z=a+bt+ct^2$. The coefficient test $\\lambda(z)=b-a-c$ preserves linear combinations and annihilates both generators. Moreover it is complete in this example: if $b=a+c$, then $z=af+cg$. Thus the exact span is the set of polynomials satisfying that coefficient equation.

Consider $z=1+t^2$. Its test value is minus two. If the field has characteristic different from two, that value is nonzero and proves nonmembership. In characteristic two, the test vanishes and the reconstruction gives $z=f+g$, because the middle term $2t$ vanishes. One small certificate has located the exact field hypothesis behind two different answers.

The proof did not count polynomial coefficients and assert a dimension. It supplied a vanishing condition for one containment and an explicit representation for the other. Nor did it evaluate a polynomial only at a few field elements. The coefficients refer to formal polynomials, whose equality is coefficient equality over every field.

There are corresponding tests in other spaces. A coordinate constraint is a weighted sum of entries. A condition on functions may be a weighted sum of finitely many evaluations. Each such test can certify nonmembership if its output is nonzero, regardless of whether the ambient space is finite dimensional. The test must be proved to preserve the allowed scalar combinations; a nonlinear feature or a feature using scalars outside the field supplies no such guarantee.

These certificates connect equation and generator descriptions. Relations live among coefficient tuples and explain redundancy. Vanishing tests act on ambient vectors and explain restrictions on what can be generated. Their inputs are different types, even when both are displayed as rows of numbers in a coordinate computation.

<a id="section-880-13-development-install-three-polynomials-into-a-spannin"></a>
## 13. Development: install three polynomials into a spanning list {#section-882-13-development-install-three-polynomials-into-a-spannin}

Let $F$ have characteristic different from two, and let $P$ be the space of formal polynomials of degree at most three. Begin with the spanning list

$$w_1=1+t,\\quad w_2=1-t,\\quad w_3=t^2,\\quad w_4=t^3,\\quad
w_5=1+t+t^2.$$

To verify spanning, an arbitrary $a+bt+ct^2+dt^3$ equals $\\frac{a+b}{2}w_1+\\frac{a-b}{2}w_2+cw_3+dw_4$. The fifth generator satisfies $w_5=w_1+w_3$, so delete it. This preliminary deletion is justified by an explicit relation, not by a claimed dimension.

Install the target list $u_1=1+t^2$, $u_2=t+t^3$, $u_3=t^2+t^3$. It is independent: in $\\alpha u_1+\\beta u_2+\\gamma u_3=0$, the constant coefficient gives $\\alpha=0$, the coefficient of $t$ gives $\\beta=0$, and then the coefficient of $t^2$ gives $\\gamma=0$. This independence proof does not divide by two.

First, $u_1=(w_1+w_2)/2+w_3$. Select the nonzero coefficient of $w_1$ and solve $w_1=2u_1-w_2-2w_3$. The list $(u_1,w_2,w_3,w_4)$ therefore spans the same space: it contains a representation of the removed generator and keeps all others.

Second, $u_2=u_1-w_2-w_3+w_4$. The uninstalled generator $w_2$ has coefficient minus one, which is nonzero in every field. Solving gives $w_2=u_1-u_2-w_3+w_4$, so $(u_1,u_2,w_3,w_4)$ still spans.

Third, $u_3=w_3+w_4$. Solve $w_3=u_3-w_4$. The final list $(u_1,u_2,u_3,w_4)$ spans. It contains all three required target polynomials and exactly one retained original generator.

There is a direct end check, independent of trusting the substitutions. Every polynomial in $P$ has the expression

$$a u_1+b u_2+(c-a)u_3+(d-b-c+a)w_4.$$

Expanding gives constant coefficient $a$, linear coefficient $b$, quadratic coefficient $c$ and cubic coefficient $d$. Comparing those four coefficients also proves uniqueness. This final formula works in every characteristic, even though the chosen starting list and first installation required division by two.

In characteristic two, the initial list fails to span $P$: $w_1=w_2$, and every combination has equal constant and linear coefficients. In particular $u_1$ is not in that initial span. The exchange theorem has not failed; its spanning hypothesis is absent. Starting instead with $(1,t,t^2,t^3)$ gives an all-characteristic spanning list, and the final reconstruction remains available. Recording the starting field is part of the certificate.

<a id="section-905-14-development-state-the-installation-invariant-and-per"></a>
## 14. Development: state the installation invariant and permissible choices {#section-907-14-development-state-the-installation-invariant-and-per}

The polynomial calculation has an invariant after each step: the current list spans the original space, begins with the already installed target vectors, and has the same length as the pruned starting list. A valid step must preserve all three parts. The algebra showing span preservation is only one part of that claim.

At the second step, the coefficient of the installed vector $u_1$ in the expression for $u_2$ is also nonzero. One could solve that equation for $u_1$ and preserve the span. But deleting $u_1$ would lose the assertion that the list begins with both installed targets. It would not be a valid installation step under this invariant. A pivot must be selected among the remaining old generators.

Such a pivot exists because the target list is independent. If the next target used only already installed vectors, it would belong to their span, contradicting the extension criterion. Therefore some coefficient on an uninstalled generator must be nonzero. The reasoning uses independence of the target prefix, not independence of the entire current spanning list.

Different permitted choices can lead to different intermediate lists. In the first polynomial step, $w_3$ has coefficient one and could be removed instead of $w_1$. One must then rewrite subsequent target expressions using that new current list. Nonuniqueness is harmless when the invariant is maintained; reusing a certificate that still contains a removed generator is not.

The finite-slot conclusion can be made fully explicit. If a spanning list has length $s$, then after $s$ installations it contains only the installed targets. If there were a next independent target, the current spanning property would express it using those $s$ targets alone. That contradicts their joint independence. This is the contradiction behind the bound, rather than an assumption that the desired process always finishes.

A dependent target list does not support that argument. In the polynomial space of degree at most one, the requested targets $(1,t,1+t)$ cannot form an independent three-vector list. After installing the first two into a two-slot spanning list, the third lies in their span, so no uninstalled generator remains and no contradiction arises. The independence hypothesis is exactly what ruled out this event in the theorem.

The invariant also clarifies what has not been proved. Span preservation does not choose a preferred complement, certify a smallest numerical error, or make replacements canonical. It supplies finite exact generation while keeping a prescribed independent list. Those are the ingredients needed by the next chapter's basis-extension argument.

<a id="section-921-15-development-evaluate-a-field-sensitive-function-cert"></a>
## 15. Development: evaluate a field-sensitive function certificate {#section-923-15-development-evaluate-a-field-sensitive-function-cert}

Let $X=\\{a,b,c\\}$ be a set of three distinct points. Define three $F$-valued functions by their full value tables:

$$
\\begin{array}{c|ccc}
 &a&b&c\\\\ \\hline
 f&1&0&-1\\\\
 g&0&1&-1\\\\
 h&1&1&1
\\end{array}.
$$

This table specifies functions, not merely three selected samples from an unknown domain. If $\\alpha f+\\beta g+\\gamma h=0$ as a function, evaluation at the three points gives $\\alpha+\\gamma=0$, $\\beta+\\gamma=0$ and $-\\alpha-\\beta+\\gamma=0$. Substituting the first two into the third yields $3\\gamma=0$.

If the characteristic is not three, division by three gives $\\gamma=0$, hence $\\alpha=\\beta=0$. Thus the list is independent. It also spans all functions on $X$: for desired values $(r,s,t)$, take $\\gamma=(r+s+t)/3$, $\\alpha=r-\\gamma$ and $\\beta=s-\\gamma$. Substituting into each point gives the required values. Both uniqueness and reach have been verified directly.

In characteristic three, $h=f+g$. The list is dependent, and its span is exactly the functions with $r+s+t=0$. Every generator satisfies that constraint. Conversely, for any such value triple, the combination $rf+sg$ has values $(r,s,-r-s)=(r,s,t)$. The shortened list $(f,g)$ is independent, since evaluation at $a$ and $b$ immediately recovers its coefficients.

Over $\\mathbb F_3$, there are nine functions in this span, one for each coefficient pair, and twenty-seven functions on the whole three-point domain. The count follows from unique coefficients rather than a previously assumed dimension theorem. The nontrivial relation is explicit, so the field-specific failure can be checked without determinants.

A table at finitely many points has different force when the domain is larger. If a coefficient relation vanishes as a function, it vanishes at every selected point; thus evaluations that force all coefficients zero prove independence. If evaluations permit a nonzero tuple, that alone does not prove dependence: the resulting combination might be nonzero elsewhere. To prove dependence, give an identity holding on the entire domain.

This distinguishes the function example from the formal-polynomial examples. Formal coefficients determine a polynomial even over a small finite field; evaluations need not. When functions are the vectors, their complete domain determines equality. A certificate must match the ambient equality rule, not just the notation used to display its entries.

<a id="section-946-16-development-finish-a-finite-extension-without-search"></a>
## 16. Development: finish a finite extension without searching all vectors {#section-948-16-development-finish-a-finite-extension-without-search}

Suppose an independent list is to be extended inside a space with a known finite spanning list $B=(b_1,\\ldots,b_s)$. Scan these generators in order. If $b_j$ already lies in the current span, keep the list unchanged; otherwise append it. Every successful append preserves independence by the extension criterion, and every previously captured generator remains in the enlarged span.

After all $s$ generators have been considered, the current span contains every member of $B$ and therefore the whole space. The process has a finite prescribed number of inspections; it does not require enumerating all vectors in the space or selecting from an unspecified infinite supply. Exchange additionally bounds the number of successful appends by $s$ minus the starting independent-list length.

This is an existence and proof procedure, not a claim of an available numerical membership oracle. At each inspection, membership or nonmembership still needs a mathematical certificate. For explicit coordinate vectors, exact row reduction may supply it. For functions, identities, evaluations and other arguments may be needed. A proof of finite termination does not by itself establish computational feasibility for an arbitrary representation of vectors.

There is a related finite-extraction fact. Suppose $V$ is already known to have some finite spanning list, but $S$ is any spanning set, possibly infinite. Express each vector of the fixed finite list as a finite combination of members of $S$. Collect all members of $S$ that occur in those finitely many expressions. Their union is a finite subset $S_0$ and spans every vector of the fixed list, hence spans $V$.

This proof uses the already established finite-generation hypothesis. It does not assert that every infinite spanning set in every space has a finite spanning subset. The unit sequences span the finitely supported sequence space, but any finite subset misses a unit sequence at a new index. That space is not finitely spanned.

Once a finite spanning subset has been extracted, redundant vectors can be deleted one at a time until no deletion is possible. The list length decreases at each step, so termination is immediate. The deletion lemma then proves independence. Combined with the installation procedure, these facts explain both ways the next chapter obtains a nonredundant generating list: prune a finite supply, or enlarge an independent starting list within a finite supply.

No arbitrary infinite basis theorem is hidden in these arguments. Every selected witness belongs to a specified finite collection of coefficient expressions or finitely many successful steps. That is the exact finiteness boundary of the exchange engine being used here.

<a id="section-962-17-development-distinguish-a-sufficient-pivot-from-a-ne"></a>
## 17. Development: distinguish a sufficient pivot from a necessary one {#section-964-17-development-distinguish-a-sufficient-pivot-from-a-ne}

The installation proof selects a nonzero coefficient as a sufficient certificate for replacement. When the old list is independent, there is an exact converse. Suppose $(w_1,\\ldots,w_s)$ is independent, $u=\\sum_i a_iw_i$, and a position $j$ is fixed. Replacing $w_j$ by $u$ preserves the old span exactly when $a_j\\ne0$.

The forward construction for a nonzero coefficient is the familiar equation $w_j=a_j^{-1}(u-\\sum_{i\\ne j}a_iw_i)$. If $a_j=0$, however, $u$ already lies in the span of the remaining old vectors. The replacement list therefore spans exactly that smaller span. It cannot contain $w_j$, because that would contradict the old list's independence. Thus replacement fails to preserve the whole span.

A successful replacement also preserves independence in this case. Expand a relation $bu+\\sum_{i\\ne j}c_iw_i=0$ in the old independent list. Its $w_j$ coefficient is $ba_j$, so $b=0$ when $a_j\\ne0$. All other coefficients then vanish as well. These two short arguments certify both reach and nonredundancy after the replacement.

For instance, the formal-polynomial list $(1,t,t^2)$ is independent over every field. With $u=1+t^2$, either the first or third vector can be replaced, because their coefficients are one. Replacing the middle vector loses every polynomial with a nonzero linear coefficient. No determinant or dimension argument is needed to identify the permitted positions.

For a dependent old spanning list, a zero coefficient in one expression is not a prohibition. Take $(w_1,w_2,w_3)=(1,t,1+t)$ and $u=t$, represented by coefficients $(0,1,0)$. Replacing $w_1$ gives $(t,t,1+t)$, which still spans all polynomials of degree at most one, since $1=(1+t)-t$. Redundancy elsewhere compensates for the zero coefficient in the chosen representation.

The hypothesis is what changes sufficient evidence into a complete test. In a general exchange run, only span preservation and the installed-prefix invariant are required, so the current list need not be independent. In a nonredundant coordinate list, uniqueness of the expansion makes the nonzero-coefficient test exact. The basis chapter will use this latter setting repeatedly; the distinction is already visible at the level of coefficient equations.

<a id="section-976-18-optional-practice-extensions"></a>

## Summary

<a id="section-255-10-chapter-summary-and-retrieval-prompts"></a>
Span is the smallest subspace containing a collection. Independence says the zero vector has no nontrivial coefficient representation, equivalently that every vector in the span has unique coefficients. A dependent finite list contains a removable vector. Appending a vector preserves independence exactly when it lies outside the existing span. The exchange lemma installs an independent list into a finite spanning list one vector at a time, proving that independent lists cannot be longer than spanning lists.

Retrieve these facts before moving on:

1. Why does $\\operatorname{span}(\\varnothing)$ contain zero?
2. How do you prove equality between a parametric span and an equation-defined subspace?
3. Where does the field hypothesis enter the deletion lemma?
4. In the exchange proof, why must one coefficient of an uninstalled generator be nonzero?
5. Why are infinite sums absent from algebraic span?

<a id="section-265-exercises-with-full-solutions"></a>

<a id="section-1040-summary"></a>
Span describes finite generation; independence gives unique coefficients. Relations justify deletions, nonmembership tests certify missing targets, and exchange installs independent vectors without losing span. Nonzero coefficients justify individual replacements, with stronger converses only for independent old lists. The next chapter uses these certificates to define bases and dimension.

## Exercises {#section-267-exercises-with-full-solutions}

<a id="section-267-1-span-as-intersection"></a>
### 1. Span as intersection {#section-269-1-span-as-intersection}

Prove that $\\operatorname{span}(S)$ equals the intersection of all subspaces containing $S$.

<details>
<summary>Hint 1</summary>

Use the smallest-subspace property of span.

</details>

<details>
<summary>Hint 2</summary>

For the reverse containment, observe that span(S) is itself in the family being intersected.

</details>

<details>
<summary>Solution</summary>

**Solution.** The intersection is a subspace containing $S$, so minimality of $\\operatorname{span}(S)$ gives $\\operatorname{span}(S)$ contained in the intersection. Conversely, $\\operatorname{span}(S)$ is itself one of the subspaces being intersected, so the intersection is contained in $\\operatorname{span}(S)$. Hence they are equal.


</details>

<a id="section-293-2-span-idempotence"></a>
### 2. Span idempotence {#section-295-2-span-idempotence}

Prove $\\operatorname{span}(\\operatorname{span}(S))=\\operatorname{span}(S)$.

<details>
<summary>Hint 1</summary>

Ask what spanning does to a set already closed under combinations.

</details>

<details>
<summary>Hint 2</summary>

Alternatively expand a finite combination of finite combinations and collect coefficients.

</details>

<details>
<summary>Solution</summary>

**Solution.** The set $\\operatorname{span}(S)$ is already a subspace. The smallest subspace containing a subspace is that subspace itself. Equivalently, finite combinations of finite combinations collect into finite combinations of elements of $S$.


</details>

<a id="section-319-3-a-plane-calculation"></a>
### 3. A plane calculation {#section-321-3-a-plane-calculation}

Show

$\\operatorname{span}((1,1,0),(0,1,1))=\\{(x,y,z) \\in \\mathbb{R}^3:x-y+z=0\\}$.

<details>
<summary>Hint 1</summary>

Write a generic combination of the two generators.

</details>

<details>
<summary>Hint 2</summary>

Solve the plane equation for its middle coordinate to prove the other containment.

</details>

<details>
<summary>Solution</summary>

**Solution.** A combination is $(a,a+b,b)$, and $a-(a+b)+b=0$, proving one containment. Conversely, if $x-y+z=0$, then $y=x+z$, so $(x,y,z)=x(1,1,0)+z(0,1,1)$.


</details>

<a id="section-347-4-polynomial-membership"></a>
### 4. Polynomial membership {#section-349-4-polynomial-membership}

Is $x^3+2x+1$ in $\\operatorname{span}(1+x, x+x^2, x^2+x^3)$ over $R$? Find coefficients if so.

<details>
<summary>Hint 1</summary>

Compare coefficients of every polynomial degree.

</details>

<details>
<summary>Hint 2</summary>

Do not stop after solving only the constant and linear equations.

</details>

<details>
<summary>Solution</summary>

**Solution.** Set

$a(1+x)+b(x+x^2)+c(x^2+x^3)=x^3+2x+1$.

Coefficient comparison gives $a=1$, $a+b=2$, $b+c=0$, and $c=1$. The first two give $b=1$, while the third would require $c=-1$, contradicting $c=1$. Therefore the polynomial is not in the span.


</details>

<a id="section-377-5-zero-in-a-list"></a>
### 5. Zero in a list {#section-379-5-zero-in-a-list}

Prove any list containing $0_V$ is dependent.

<details>
<summary>Hint 1</summary>

Construct one zero relation with a nonzero coefficient.

</details>

<details>
<summary>Hint 2</summary>

Give the zero vector its own nonzero coefficient and switch off the other entries.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assign coefficient $1$ to the zero vector and $0$ to every other listed vector. This is a nontrivial coefficient list whose linear combination is zero.


</details>

<a id="section-403-6-repeated-vectors"></a>
### 6. Repeated vectors {#section-405-6-repeated-vectors}

Prove a list in which $v_i=v_j$ for distinct indices is dependent.

<details>
<summary>Hint 1</summary>

Subtract the two equal entries in one relation.

</details>

<details>
<summary>Hint 2</summary>

Audit the meaning of the negative coefficient in characteristic two.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use coefficient $1$ at index $i$, coefficient $-1$ at index $j$, and zero elsewhere. The combination is $v_i-v_j=0$, and the coefficient list is nonzero. In characteristic $2$, $-1=1$, but the two coefficients are still nonzero and the sum is $v_i+v_j=2v_i=0$.


</details>

<a id="section-429-7-unique-representation"></a>
### 7. Unique representation {#section-431-7-unique-representation}

Suppose $(u,v,w)$ is independent. If

$2u-v+3w=au+bv+cw$,

find $a,b,c$.

<details>
<summary>Hint 1</summary>

Subtract the two representations.

</details>

<details>
<summary>Hint 2</summary>

Independence forces the coefficients of the resulting zero relation to vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** Independence makes coefficient representations unique, so $a=2$, $b=-1$, and $c=3$.


</details>

<a id="section-459-8-a-dependent-function-list"></a>
### 8. A dependent function list {#section-461-8-a-dependent-function-list}

In the real function space on $R$, determine whether $(1, \\sin^2 x, \\cos^2 x)$ is independent.

<details>
<summary>Hint 1</summary>

Recall an identity involving the two squared trigonometric functions.

</details>

<details>
<summary>Hint 2</summary>

Interpret that identity as equality of functions at every real input.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is dependent because the identity $\\sin^2 x+\\cos^2 x=1$ gives the nontrivial relation $1-\\sin^2 x-\\cos^2 x=0$ as functions.


</details>

<a id="section-485-9-evaluating-to-prove-independence"></a>
### 9. Evaluating to prove independence {#section-487-9-evaluating-to-prove-independence}

Prove that $(1,x,x^2)$ is independent in $\\mathbb{F}[x]$ for every field $F$.

<details>
<summary>Hint 1</summary>

Use formal polynomial equality, not a list of sampled values.

</details>

<details>
<summary>Hint 2</summary>

Compare each coefficient with the zero polynomial.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $a+bx+cx^2$ is the zero polynomial, equality of polynomials means each coefficient is zero. Hence $a=b=c=0$. This proof works even when the field has only two elements because polynomial equality is coefficient equality, not merely equality of the induced functions on the finite field.


</details>

<a id="section-511-10-polynomials-versus-polynomial-functions"></a>
### 10. Polynomials versus polynomial functions {#section-513-10-polynomials-versus-polynomial-functions}

Over $\\mathbb{F}_2$, the polynomial $p=x^2-x$ is nonzero but evaluates to zero at every scalar. Explain why this does not contradict Exercise 9.

<details>
<summary>Hint 1</summary>

Distinguish a formal polynomial from its induced function.

</details>

<details>
<summary>Hint 2</summary>

Evaluate at every scalar of the field, then inspect the formal coefficients separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** In $\\mathbb{F}_2$, both inputs are $0$ and $1$, and $a^2-a=0$ for each. Thus $p$ induces the zero *function* $\\mathbb{F}_2\\to \\mathbb{F}_2$. But in the vector space $\\mathbb{F}_2[x]$, polynomials are formal coefficient strings, and $x^2-x=x^2+x$ has nonzero coefficients. The polynomial space and the space of functions on $\\mathbb{F}_2$ are different vector spaces.


</details>

<a id="section-537-11-appending-a-vector"></a>
### 11. Appending a vector {#section-539-11-appending-a-vector}

Let $(v_1,\\ldots,v_m)$ be independent and $w$ not in its span. Prove any list obtained by inserting $w$ at any position is independent.

<details>
<summary>Hint 1</summary>

Consider a zero relation in the reordered list.

</details>

<details>
<summary>Hint 2</summary>

Move the new vector to the end conceptually and use the extension criterion.

</details>

<details>
<summary>Solution</summary>

**Solution.** Reordering a coefficient equation does not change whether its coefficients all vanish. Move $w$ conceptually to the end and apply the extension criterion. Since the resulting list is independent, the inserted ordering is independent too.


</details>

<a id="section-563-12-prune-a-spanning-list"></a>
### 12. Prune a spanning list {#section-565-12-prune-a-spanning-list}

In $\\mathbb{R}^3$, prune

$(1,0,0),(0,1,0),(1,1,0),(0,0,1),(1,1,1)$

to an independent list with the same span.

<details>
<summary>Hint 1</summary>

Look for vectors already generated by earlier retained ones.

</details>

<details>
<summary>Hint 2</summary>

After deletion, check the remaining list is independent rather than merely shorter.

</details>

<details>
<summary>Solution</summary>

**Solution.** The third vector is the sum of the first two, so delete it. The fifth is the sum of the first, second, and fourth, so delete it. The remaining standard coordinate vectors are independent and span $\\mathbb{R}^3$.


</details>

<a id="section-593-13-a-maximal-list"></a>
### 13. A maximal list {#section-595-13-a-maximal-list}

Let $L$ be an independent list in a finitely spanned space. Prove that repeatedly appending vectors outside its span must eventually produce a spanning independent list.

<details>
<summary>Hint 1</summary>

Fix a finite spanning list to provide a bound.

</details>

<details>
<summary>Hint 2</summary>

Each append increases independent-list length, which exchange bounds by the fixed supply.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let a fixed spanning list have length $s$. Every appended list remains independent, so exchange bounds its length by $s$. Each unsuccessful span permits one more append. After at most $s-length(L)$ appends, no vector outside the span can remain; otherwise another append would create an independent list longer than $s$. Thus the final list spans.


</details>

<a id="section-619-14-a-minimal-list"></a>
### 14. A minimal list {#section-621-14-a-minimal-list}

Prove that a finite spanning list from which no vector can be deleted while retaining span is independent.

<details>
<summary>Hint 1</summary>

Argue by contradiction from a nontrivial relation.

</details>

<details>
<summary>Hint 2</summary>

Select a nonzero coefficient and solve for the corresponding removable vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** If it were dependent, the deletion lemma would identify a vector lying in the span of the others. Deleting that vector would preserve span, contradicting minimality.


</details>

<a id="section-645-15-exchange-in-action"></a>
### 15. Exchange in action {#section-647-15-exchange-in-action}

Let $u_1=(1,1,0)$ and $u_2=(0,1,1)$. Starting from the standard spanning list $(e_1,e_2,e_3)$ of $\\mathbb{R}^3$, make explicit exchanges that install $u_1,u_2$.

<details>
<summary>Hint 1</summary>

Express the first target using standard vectors and solve for one old vector.

</details>

<details>
<summary>Hint 2</summary>

Install the second target using an uninstalled generator, keeping the first target.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $u_1=e_1+e_2$, solve $e_1=u_1-e_2$; hence $(u_1,e_2,e_3)$ spans. Next $u_2=e_2+e_3$, so solve $e_2=u_2-e_3$; hence $(u_1,u_2,e_3)$ spans. The installed vectors are independent, and one original vector remains.


</details>

<a id="section-671-16-more-vectors-than-slots"></a>
### 16. More vectors than slots {#section-673-16-more-vectors-than-slots}

Use exchange, not determinants, to prove any three vectors in $\\mathbb{F}^2$ are dependent.

<details>
<summary>Hint 1</summary>

Compare a proposed independent triple with the standard spanning pair.

</details>

<details>
<summary>Hint 2</summary>

Apply the length inequality in the exchange lemma.

</details>

<details>
<summary>Solution</summary>

**Solution.** The standard list $(e_1,e_2)$ spans $\\mathbb{F}^2$ and has length two. Exchange says every independent list has length at most two. Therefore a three-vector list cannot be independent.


</details>

<a id="section-697-17-fewer-vectors-cannot-span"></a>
### 17. Fewer vectors cannot span {#section-699-17-fewer-vectors-cannot-span}

Use exchange to prove no list of two vectors spans $\\mathbb{F}^3$.

<details>
<summary>Hint 1</summary>

Compare a proposed spanning pair with the standard independent triple.

</details>

<details>
<summary>Hint 2</summary>

Exchange would force an impossible inequality between lengths.

</details>

<details>
<summary>Solution</summary>

**Solution.** The standard list $(e_1,e_2,e_3)$ is independent and has length three. If two vectors spanned $\\mathbb{F}^3$, exchange would give $3\\le 2$, impossible.


</details>

<a id="section-723-18-field-sensitivity"></a>
### 18. Field sensitivity {#section-725-18-field-sensitivity}

Determine whether $(1,\\sqrt{2})$ is independent when considered in $R$ over (a) $R$ and (b) $Q$.

<details>
<summary>Hint 1</summary>

Name the field of allowed coefficients in each case.

</details>

<details>
<summary>Hint 2</summary>

A real relation using √2 is unavailable over Q; use irrationality to rule out a rational relation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Over $R$, it is dependent because $\\sqrt{2}*1-1\\cdot \\sqrt{2}=0$ uses legal real coefficients. Over $Q$, suppose $a+b \\sqrt{2}=0$ with rational $a,b$. If $b\\ne 0$, then $\\sqrt{2}=-a/b$ would be rational, contradiction. Hence $b=0$, then $a=0$; the list is independent over $Q$.


</details>

<a id="section-749-19-standard-unit-sequences"></a>
### 19. Standard unit sequences {#section-751-19-standard-unit-sequences}

Show the standard unit sequences span the finitely supported sequences but not all sequences algebraically.

<details>
<summary>Hint 1</summary>

Describe the support of a finite sum of unit sequences.

</details>

<details>
<summary>Hint 2</summary>

Compare with a sequence having infinitely many nonzero entries.

</details>

<details>
<summary>Solution</summary>

**Solution.** A finitely supported sequence with nonzero entries only at indices $i_1,\\ldots,i_k$ equals the finite combination $a_{i_1}e_{i_1}+\\ldots+a_{i_k}e_{i_k}$. Conversely, every finite combination of unit sequences has finite support. The all-ones sequence has infinite support, so it cannot equal a finite combination of unit sequences.


</details>

<a id="section-775-20-counting-over-a-finite-field"></a>
### 20. Counting over a finite field {#section-777-20-counting-over-a-finite-field}

Suppose $(v_1,\\ldots,v_r)$ is independent over a field with exactly $q$ elements. Prove its span has $q^r$ elements.

<details>
<summary>Hint 1</summary>

Count coefficient tuples first.

</details>

<details>
<summary>Hint 2</summary>

Use independence for injectivity and the definition of span for surjectivity.

</details>

<details>
<summary>Solution</summary>

**Solution.** There are $q^r$ coefficient tuples $(a_1,\\ldots,a_r)$. Independence implies two tuples cannot produce the same vector, because subtracting their representations would give a nontrivial zero relation. Every vector in the span comes from a tuple. Thus the coefficient-to-vector map is a bijection and the span has $q^r$ elements.


</details>

<a id="section-801-21-sum-of-spans"></a>
### 21. Sum of spans {#section-803-21-sum-of-spans}

Prove $\\operatorname{span}(S \\cup T)=\\operatorname{span}(S)+\\operatorname{span}(T)$ for subsets $S,T$ of $V$.

<details>
<summary>Hint 1</summary>

Separate a finite combination according to its source subset.

</details>

<details>
<summary>Hint 2</summary>

For the reverse inclusion, combine the two finite sums into one.

</details>

<details>
<summary>Solution</summary>

**Solution.** A finite combination from $S \\cup T$ can be separated into the sum of a finite combination from $S$ and one from $T$, so the left side is contained in the right. Conversely, a sum of such two combinations is one finite combination of elements from $S \\cup T$, proving the reverse containment.


</details>

<a id="section-827-22-transfer-problem-interpolation-uniqueness"></a>
### 22. Transfer problem: interpolation uniqueness {#section-829-22-transfer-problem-interpolation-uniqueness}

Let $p_0,\\ldots,p_n$ be polynomials in $F_n[x]$. Suppose that for every data vector $(y_0,\\ldots,y_n) \\in \\mathbb{F}^{n+1}$, there is a unique coefficient tuple $(a_0,\\ldots,a_n)$ such that the polynomial $\\sum a_jp_j$ takes prescribed values $y_k$ at distinct points $x_0,\\ldots,x_n$. Prove $(p_0,\\ldots,p_n)$ is independent.

<details>
<summary>Hint 1</summary>

Use the data vector whose values are all zero.

</details>

<details>
<summary>Hint 2</summary>

A polynomial zero relation produces another coefficient tuple for those same data.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply uniqueness to the zero data vector. The all-zero coefficient tuple produces the zero polynomial and hence zero values. If $\\sum a_jp_j=0$ as a polynomial, then that same tuple also produces zero values. Uniqueness forces every $a_j=0$. Therefore the list is independent. The argument isolates the algebraic implication; existence of interpolation for arbitrary fields and points is a separate theorem.

</details>

<a id="section-852-11-development-keep-a-certificate-for-each-coefficient-"></a>

<a id="section-978-18-optional-practice-extensions"></a>
### 23. LSP-02-E23: install a polynomial pair over every field {#section-982-lsp-02-e23-install-a-polynomial-pair-over-every-field}

In the polynomials of degree at most two over an arbitrary field $F$, start with $(w_1,w_2,w_3)=(1+t,t,t^2)$. Install the targets $u_1=1+t^2$ and $u_2=t+t^2$ by two explicit span-preserving exchanges, always keeping previous targets. Prove their independence and verify that the final list spans, without a dimension argument.

<details>
<summary>Hint 1</summary>

Use the constant coefficient of the first target as a pivot.

</details>

<details>
<summary>Hint 2</summary>

At the next exchange solve for the remaining linear generator, and verify reach by an arbitrary polynomial.

</details>

<a id="section-998-lsp-02-e24-two-constraints-and-one-negative-certificate"></a>
### 24. LSP-02-E24: two constraints and one negative certificate {#section-1000-lsp-02-e24-two-constraints-and-one-negative-certificate}

In polynomials of degree at most three over $F$, let $f=1+t^2$ and $g=t+t^3$. Characterise their span by coefficient equations, proving both containments. Use the result to represent $1+t+t^2+t^3$ and to certify that $1+t$ is outside the span. State whether any characteristic restriction is needed.

<details>
<summary>Hint 1</summary>

Write the four coefficients of a generic combination.

</details>

<details>
<summary>Hint 2</summary>

For nonmembership, choose one coefficient difference vanishing on both generators.

</details>

<a id="section-1016-19-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-1018-19-solutions-to-practice-extensions"></a>
<a id="section-1018-lsp-02-e23-install-a-polynomial-pair-over-every-field-s"></a>
### LSP-02-E23: install a polynomial pair over every field — solution {#section-1020-lsp-02-e23-install-a-polynomial-pair-over-every-field-s}

<details>
<summary>Solution</summary>

First $u_1=w_1-w_2+w_3$, so $w_1=u_1+w_2-w_3$ and $(u_1,w_2,w_3)$ preserves the old span. Next $u_2=w_2+w_3$, so $w_2=u_2-w_3$ and $(u_1,u_2,w_3)$ preserves it again while retaining $u_1$. The coefficients used as pivots are one, invertible in every field. The starting list spans because $a+bt+ct^2=aw_1+(b-a)w_2+cw_3$. In the final list this same polynomial is $au_1+bu_2+(c-a-b)w_3$, verifying reach directly. A relation $\\alpha u_1+\\beta u_2=0$ has constant coefficient $\\alpha$ and linear coefficient $\\beta$, so both are zero.


</details>

<a id="section-1028-lsp-02-e24-two-constraints-and-one-negative-certificate"></a>
### LSP-02-E24: two constraints and one negative certificate — solution {#section-1030-lsp-02-e24-two-constraints-and-one-negative-certificate}

<details>
<summary>Solution</summary>

A combination $af+bg$ has coefficients $(a,b,a,b)$, so it satisfies $c_2=c_0$ and $c_3=c_1$. Conversely, a polynomial with those coefficient equalities is $c_0f+c_1g$. The first requested polynomial is $f+g$. For $1+t$, the test $\\lambda(p)=c_2-c_0$ equals minus one, while it vanishes on both generators, proving nonmembership. Minus one is nonzero in every field; it equals one in characteristic two but still certifies the failure. No characteristic restriction is needed.

</details>


<a id="section-1038-summary"></a>
`;export{e as default};