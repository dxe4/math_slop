var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: eigenvalues-and-diagonalization
title: "Eigenvalues, Diagonalization, and Field Extensions"
level: advanced-undergraduate
estimated_minutes: 235
license: CC BY-SA 4.0
---

# Eigenvalues, Diagonalization, and Field Extensions {#section-1-eigenvalues-diagonalization-and-field-extensions}

An eigenvector is a direction on which an operator acts by scalar multiplication. A basis of such directions converts every polynomial and power of the operator into scalar arithmetic. This chapter consolidates the exact criteria, keeps algebraic and geometric multiplicity separate, and tracks what changes when scalars are extended.

<a id="section-3-1-eigenpairs-and-eigenspaces"></a>
## 1. Eigenpairs and eigenspaces {#section-5-1-eigenpairs-and-eigenspaces}

**Definition 15.1 (Eigenvectors, eigenvalues and eigenspaces).**

A nonzero $v$ is an eigenvector of $T$ with eigenvalue $\\lambda \\in F$ when

$Tv=\\lambda v$.

The eigenspace is $E_{\\lambda}=\\operatorname{ker}(T-\\lambda I)$. It includes zero, though zero is never called an eigenvector. Eigenvalues are roots in $F$ of $\\chi_T$.

Eigenvectors belonging to distinct eigenvalues are independent. Inductively, if $\\sum c_iv_i=0$, apply $T-\\lambda_rI$; the last term vanishes and the remaining vectors retain nonzero scalar factors. Independence of the shorter list forces all earlier coefficients zero, then the last.

<a id="section-15-2-diagonalization-equivalences"></a>
## 2. Diagonalization equivalences {#section-17-2-diagonalization-equivalences}

**Theorem 15.1 (Equivalent diagonalization criteria).**

The following are equivalent:

1. $T$ has a diagonal matrix in some basis.
2. $V$ has a basis of eigenvectors.
3. $V=\\oplus_\\lambda E_\\lambda$ over eigenvalues in $F$.
4. The sum of geometric multiplicities is $n$.
5. $m_T$ splits over $F$ into distinct linear factors.

The equivalence of the first four is immediate from basis columns and independence across eigenspaces. The fifth is the primary-decomposition criterion.

If $\\chi_T$ splits, diagonalizability is also equivalent to geometric multiplicity equaling algebraic multiplicity for every eigenvalue.

<a id="section-31-3-easy-sufficient-conditions"></a>
## 3. Easy sufficient conditions {#section-33-3-easy-sufficient-conditions}

If $T$ has $n$ distinct eigenvalues in $F$, their eigenvectors are independent, so $T$ is diagonalizable. The converse fails: $I$ is diagonalizable with one eigenvalue.

If $\\operatorname{dim} E_{\\lambda}$ equals the algebraic multiplicity of each root and $\\chi_T$ splits, dimensions sum to $n$, giving an eigenbasis. A triangular matrix is diagonalizable only if its nilpotent couplings can be removed; triangular is not synonymous with diagonal.

<a id="section-37-4-spectral-projectors"></a>
## 4. Spectral projectors {#section-39-4-spectral-projectors}

**Definition 15.2 (Lagrange spectral projectors).**

For a diagonalizable operator with distinct eigenvalues $\\lambda_1,\\ldots,\\lambda_r$, define Lagrange projectors

$P_i=\\prod_{j\\ne i}(T-\\lambda_jI)/(\\lambda_i-\\lambda_j)$.

Then

$I=\\sum_iP_i$, $P_iP_j=\\delta_{ij}P_i$, $T=\\sum_i \\lambda_iP_i$,

and $\\operatorname{im} P_i=E_{\\lambda_i}$. Therefore for every polynomial $f$,

$f(T)=\\sum_i f(\\lambda_i)P_i$.

This is a finite algebraic functional calculus. It is coordinate-free but requires all distinct eigenvalues and divisions to lie in $F$.

<a id="section-55-5-powers-and-recurrences"></a>
## 5. Powers and recurrences {#section-57-5-powers-and-recurrences}

If $T=SDS^{-1}$ with $D=\\operatorname{diag}(\\lambda_i)$, then

$T^k=SD^kS^{-1}$.

Or using projectors, $T^k=\\sum \\lambda_i^kP_i$. This solves discrete linear dynamics exactly. Negative powers require every eigenvalue nonzero. Polynomial formulas work in any field; convergence claims such as $T^k\\to 0$ require a normed field and topology.

For real or complex matrices, diagonalization may still be numerically ill-conditioned when the eigenbasis matrix $S$ is poorly conditioned. Exact existence does not guarantee stable computation.

<a id="section-65-6-extending-scalars"></a>
## 6. Extending scalars {#section-67-6-extending-scalars}

For a field extension $K/F$, the scalar-extended space is

$V_K=K \\otimes_F V$,

and $T_K=I_K \\otimes T$. A basis of $V$ remains a $K$-basis, so the same matrix entries are read in $K$. The characteristic and minimal polynomials retain coefficients but may factor further.

Extending scalars can create eigenvalues and primary decompositions, but it does not remove repeated roots from the minimal polynomial. Thus an operator becomes diagonalizable over an extension $K$ iff $m_T$ splits into distinct linear factors in $K[t]$.

Example: a real rotation becomes diagonalizable over $C$ because $t^2+1$ splits distinctly. A nontrivial real Jordan block remains nondiagonalizable over every extension because $(t-\\lambda)^2$ remains repeated.

<a id="section-77-7-conjugate-structure-over-the-reals"></a>
## 7. Conjugate structure over the reals {#section-79-7-conjugate-structure-over-the-reals}

For a real matrix, nonreal roots of $\\chi_T$ occur in conjugate pairs. If $z=x+iy$ is a complex eigenvector for $a+ib$, then the real plane $\\operatorname{span}_R(x,y)$ is invariant and, in a suitable ordered basis, the restriction has matrix

$\\begin{pmatrix}a & -b \\\\ b & a\\end{pmatrix}$.

Thus complex eigenpairs can be represented by real $2 by 2$ blocks. A real operator whose complexification is diagonalizable has a real block diagonal form with real $1 by 1$ blocks and conjugate-pair $2 by 2$ blocks, though not necessarily a real diagonal form.

<a id="section-85-8-positive-characteristic-and-separability"></a>
## 8. Positive characteristic and separability {#section-87-8-positive-characteristic-and-separability}

Over a field of characteristic $p$, a polynomial such as $t^p-a$ may have derivative zero. After adjoining a root it can become $(t-\\alpha)^p$, a repeated factor. Splitting alone is insufficient: diagonalizability over an extension needs the minimal polynomial to split there with distinct roots. The test $\\operatorname{gcd}(m_T,m_T')=1$ detects **separability**, meaning no repeated root in a splitting field. Over a nonperfect field, an irreducible polynomial can occur only once in $m_T$ yet still be inseparable, so “no repeated irreducible factor in $F[t]$” is not the same condition.

<a id="section-89-9-simultaneous-consequences"></a>
## 9. Simultaneous consequences {#section-91-9-simultaneous-consequences}

If $T$ is diagonalizable, every invariant polynomial expression $p(T)$ is diagonalizable in the same eigenbasis, though distinct eigenvalues may merge under $p$. Conversely, $p(T)$ being diagonalizable need not make $T$ diagonalizable: the zero polynomial sends every $T$ to zero.

If a subspace has a basis of eigenvectors, it is invariant. An invariant subspace of a diagonalizable operator need not be visibly coordinate-spanned in a chosen eigenbasis when eigenvalues repeat, but it has an eigenbasis: decompose it using the spectral projections, which are polynomials in $T$ and preserve the subspace.

<a id="section-95-10-common-errors"></a>
## 10. Common errors {#section-97-10-common-errors}

- Counting a repeated root as several independent eigenvectors.
- Forgetting that zero is excluded from the definition of eigenvector.
- Declaring a real operator diagonalizable using complex eigenvectors without changing the field.
- Assuming a complete eigenbasis is well-conditioned.
- Using $\\left|\\lambda\\right|<1$ convergence language over an arbitrary field.

<a id="section-103-11-summary"></a>
## 12. Scalar extension preserves a matrix rank for a specific reason {#section-578-12-scalar-extension-preserves-a-matrix-rank-for-a-speci}

**Lemma 15.2 (Rank under scalar extension).**

Let $K/F$ be a field extension and let $V$ have finite $F$-basis $(v_1,\\ldots,v_n)$. Scalar extension permits coefficients from $K$ in that basis; the vectors of $V$ embed as the columns whose entries lie in $F$. This coordinate model agrees with $K\\otimes_FV$ from the tensor construction. Its dimension over $K$ is $n$, even if $K$ has large or infinite dimension over $F$. A coefficient extension changes which scalars are available, not how many vectors are in this chosen extended basis.

A basic lemma explains which linear relations persist. If a matrix $M$ has entries in $F$, its rank over $F$ equals its rank over $K$. Indeed the rank-normal-form theorem supplies invertible matrices over $F$ taking it to a rectangular array with an identity block and zeros elsewhere. The same products and inverse products remain valid over $K$, because a nonzero element of $F$ remains nonzero in an extension field. The normal form therefore has the same rank in both settings.

This proof does more than say that an old independent list is still independent. It identifies an invertible reduction that works after extension. A list of columns with entries in $F$ cannot acquire a new $K$-linear relation that reduces its rank. New coefficients provide new vectors in the ambient extended space, but cannot undo the identity pivots in that certificate.

For a fixed $\\lambda\\in F$, apply the lemma to $A-\\lambda I$. Its nullity is unchanged when measured in the appropriate field. More precisely, row reduction over $F$ expresses all solutions using free variables with coefficients in $F$. Choosing those free variables one at a time gives an $F$-basis of its kernel; the identical solution formulas with free variables in $K$ make that list a $K$-basis of the extended kernel. Thus an eigenspace at an already available eigenvalue extends without changing its numerical dimension.

The same argument applies to every power $(A-\\lambda I)^j$. It preserves all the associated kernel-growth numbers, so it preserves any existing Jordan-block sizes at that eigenvalue. It does not apply directly to a new $\\lambda\\in K\\setminus F$, because the matrix then has entries outside the original field. New eigenspaces must be computed over the extension. This separates preservation of old structure from the creation of new eigenvalues.

Characteristic is also preserved under a field extension. If the scalar $p$ was zero in $F$, it is still zero in $K$; adjoining roots cannot make a forbidden division by $p$ legal. The linear-system proof avoids that division entirely and therefore applies in positive characteristic as well as over the real and complex fields.

<a id="section-592-13-minimal-polynomials-survive-extension-even-when-thei"></a>
## 13. Minimal polynomials survive extension even when their factors change {#section-594-13-minimal-polynomials-survive-extension-even-when-thei}

Let $A$ be an $n$ by $n$ matrix over $F$. Flatten each of $I,A,A^2,\\ldots$ into a column in $F^{n^2}$ using one fixed ordering of entries. A polynomial relation among the matrices is exactly the corresponding linear relation among these columns. If $m_A$ has degree $d$, then $I,A,\\ldots,A^{d-1}$ are linearly independent over $F$, while $I,A,\\ldots,A^d$ are dependent.

The rank lemma shows that the first $d$ columns remain independent over $K$. The original monic polynomial $m_A$ still annihilates the same array read over $K$, so the new minimal degree is at most $d$ and at least $d$. If another monic degree-$d$ polynomial over $K$ annihilated $A$, subtracting $m_A$ would produce a lower-degree relation, contradicting that independence. Hence the minimal polynomial over $K$ is exactly $m_A$, with its original coefficients. It may factor differently, but it is not replaced by a lower-degree polynomial.

The characteristic polynomial is likewise the same formal polynomial: the finite determinant expression for $tI-A$ uses the same entries and field operations. Characteristic multiplicities can reorganise when a factor splits, but the polynomial itself has not changed. Confusing a polynomial with its factorisation is especially dangerous when an irreducible base-field factor becomes a repeated linear factor upstairs.

For example, a two-dimensional quarter-turn over $R$ satisfies $A^2+I=0$ and is not a scalar operator. Therefore $I,A$ are independent and its minimum is $t^2+1$. Over $C$ the minimum is still that quadratic, now factored as $(t-i)(t+i)$. It has not become $t-i$: the extended operator has both eigenvalues, not just one selected eigenvector.

By the already-proved diagonalization criterion, an extension permits an eigenbasis precisely when this preserved minimum splits into distinct linear factors there. There are two independent obstructions: a required root may be absent, or repeated roots may remain after all roots are present. A repeated factor such as $(t-\\lambda)^2$ cannot disappear by changing coordinates or adjoining more scalars. The rank proof makes this obstruction quantitative: the nonzero nilpotent part cannot turn into the zero matrix in an extension.

There is no contradiction with restricting an operator to a smaller invariant subspace. A restriction may have a smaller minimal polynomial because its domain has changed. Scalar extension keeps the full operator and extends its coefficient system. Selecting an eigenspace is a restriction; passing from $V$ to $V_K$ is a different construction. Stating which space the polynomial annihilates prevents an apparently persuasive one-eigenvector argument from proving a false global conclusion.

<a id="section-606-14-a-conjugate-eigenpair-supplies-two-explicitly-ordere"></a>
## 14. A conjugate eigenpair supplies two explicitly ordered real bases {#section-608-14-a-conjugate-eigenpair-supplies-two-explicitly-ordere}

Suppose a real operator has a nonzero complex eigenvector $z=x+iy$ for $\\lambda=a+ib$, with $b\\ne0$. The real and imaginary equations already established in the chapter are $Tx=ax-by$ and $Ty=bx+ay$. In this nonreal case $x,y$ are independent over $R$. If their span were one-dimensional, write $x=ru$, $y=su$ for a nonzero real vector $u$ and real $r,s$, not both zero. Dividing the eigenvector equation by the nonzero complex scalar $r+is$ would give $Tu=(a+ib)u$. Its left side is real, but the right side has nonzero imaginary part $bu$, a contradiction.

The columns in the ordered basis $(x,y)$ are therefore $(a,-b)^{\\mathsf T}$ and $(b,a)^{\\mathsf T}$:
\\[
 [T]_{(x,y)}=\\begin{pmatrix}a&b\\\\-b&a\\end{pmatrix}.
\\]
If instead the basis is $(x,-y)$, direct substitution gives
\\[
 [T]_{(x,-y)}=\\begin{pmatrix}a&-b\\\\b&a\\end{pmatrix}.
\\]
Both arrays are correct; they use different ordered bases. The second is the suitable-basis convention in Section 7. Flipping the signs of a displayed matrix without following the basis would repair one description by damaging another.

**Worked example 15.1 (Real block coordinates and an explicit complex diagonalization).**

For the standard quarter-turn $A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, take $z=(1,-i)^{\\mathsf T}$ for eigenvalue $i$. Then $x=e_1$ and $y=-e_2$. The ordered real basis $(x,y)$ yields the opposite-sign block, while $(x,-y)$ is the standard basis and recovers $A$. This is a complete real-basis witness, rather than an assertion that an unspecified real plane resembles a rotation.

Over $C$, the two eigenvectors are the columns of
\\[
 S=\\begin{pmatrix}1&1\\\\-i&i\\end{pmatrix},\\qquad
 S^{-1}=\\frac12\\begin{pmatrix}1&i\\\\1&-i\\end{pmatrix}.
\\]
Multiplication verifies the inverse, and applying $A$ to each column gives
\\[
 AS=S\\begin{pmatrix}i&0\\\\0&-i\\end{pmatrix}.
\\]
Thus the same real matrix has a real two-dimensional block description and a complex diagonal description. The vectors used in the latter are not real vectors with a decorative letter $i$; their coefficients genuinely lie in the enlarged field.


The same mechanism proves the full real block statement, not only the single-plane example. Suppose $T_C$ is diagonalizable. For a real eigenvalue, the rank-preservation argument gives a real eigenspace basis that remains a complex eigenspace basis. For each nonreal conjugate pair, choose a complex basis $z_1,\\ldots,z_r$ of $E_\\lambda$. Because $T$ has real coefficients, conjugating the equation shows that $\\bar z_1,\\ldots,\\bar z_r$ is a basis of $E_{\\bar\\lambda}$. Conjugation is bijective and carries one eigenspace onto the other.

Write $z_j=x_j+iy_j$. The $2r$ real vectors $x_j,y_j$ are independent. Indeed a real relation $\\sum_j(\\alpha_jx_j+\\beta_jy_j)=0$ becomes
\\[
 \\sum_j\\frac{\\alpha_j-i\\beta_j}{2}z_j+
 \\sum_j\\frac{\\alpha_j+i\\beta_j}{2}\\bar z_j=0.
\\]
The two distinct eigenspaces form a direct sum, and each displayed list is a basis of its own eigenspace. Every coefficient is therefore zero, forcing all real $\\alpha_j,\\beta_j$ to vanish. Applying this argument simultaneously to all conjugate pairs and the real eigenvalue bases proves independence of the entire assembled real list.

Its length is $n$: each real eigenspace contributes its complex dimension, and each conjugate pair contributes twice the dimension of one member. Complex diagonalizability says those dimensions sum to $\\dim_C V_C=n$. The assembled independent list is thus a real basis of $V$. Every span of $(x_j,y_j)$ is invariant by the real/imaginary equations. Ordering its pair instead as $(x_j,-y_j)$ gives the block used in Section 7, while each real eigenvector gives a one-dimensional block. This establishes the asserted real block diagonal form with actual basis choices and a spanning argument.

The construction also shows what it does not prove. A nonreal eigenpair yields a real plane, not a real eigenline, and choosing several complex eigenvectors in a repeated eigenspace requires checking all their real and imaginary parts together. The direct-sum argument supplies that collective check; verifying one pair at a time would not alone prove independence of the full real list.

If $b=0$, the two real/imaginary equations remain valid, but they do not establish independence. One of $x,y$ may vanish or the two may be proportional. A matrix on the ordered list $(x,y)$ then requires a separate basis check. This is why a formula derived from a complex equation must retain its nonzero-vector, nonreal-eigenvalue and ordered-basis hypotheses at the point where it becomes a real matrix statement.

<a id="section-651-15-an-irreducible-quadratic-can-split-into-a-repeated-r"></a>
## 15. An irreducible quadratic can split into a repeated root {#section-653-15-an-irreducible-quadratic-can-split-into-a-repeated-r}

**Worked example 15.2 (An inseparable quadratic and its explicit chain).**

Here is an explicit inseparable example with every field assertion accounted for. Let $F=F_2(u)$, the field of rational functions in an indeterminate $u$ over the two-element field. The polynomial $f(t)=t^2-u$ has no root in $F$. If $a(u)/b(u)$ squared to $u$, the exponent of the factor $u$ in numerator minus denominator would satisfy
\\[
 2\\bigl(\\nu_u(a)-\\nu_u(b)\\bigr)=1,
\\]
impossible for integers. A quadratic over a field is reducible only if it has a root, so $f$ is irreducible. This elementary argument is enough here; no general irreducibility criterion is being imported.

Consider
\\[
 A=\\begin{pmatrix}0&u\\\\1&0\\end{pmatrix}.
\\]
It satisfies $A^2=uI$ and is not scalar, so its minimal polynomial is $f$. That irreducible polynomial appears only once over $F$, yet its formal derivative is zero. There is no reason to call its roots distinct merely because the base-field factor list has length one.

Adjoin a root $\\alpha$ with $\\alpha^2=u$, obtaining $K=F[t]/(f)$. This is a field because $f$ is irreducible. In characteristic two,
\\[
 t^2-u=(t-\\alpha)^2.
\\]
The minimum remains this degree-two polynomial after extension by Section 13. Put $N=A-\\alpha I$. Then $N^2=0$ but $N\\ne0$, since its lower-left entry is one. Hence the extended operator cannot be diagonalizable.

One can see its actual Jordan chain. Let $w=(1,0)^{\\mathsf T}$ and $v=(\\alpha,1)^{\\mathsf T}$. Then $Nw=v$ and $Nv=0$. The two vectors form a basis, with explicit conversion
\\[
 P=\\begin{pmatrix}\\alpha&1\\\\1&0\\end{pmatrix},
 \\qquad P^{-1}=\\begin{pmatrix}0&1\\\\1&\\alpha\\end{pmatrix}.
\\]
Their products are identities because $\\alpha+\\alpha=0$. Consequently
\\[
 P^{-1}AP=\\begin{pmatrix}\\alpha&1\\\\0&\\alpha\\end{pmatrix}.
\\]
Adjoining the missing eigenvalue has exposed a nontrivial nilpotent coupling rather than removed it.

This example distinguishes three statements: irreducible factors occur once in $F[t]$; the polynomial has no repeated roots in a splitting field; and the operator has an eigenbasis over a specified field. Only the second, together with splitting in that specified field, gives diagonalization. Over nonperfect fields the first statement is weaker. The coefficient field, the derivative and the preserved minimal polynomial must be considered together.

<a id="section-686-16-extending-a-real-plane-differs-from-viewing-it-as-on"></a>
## 16. Extending a real plane differs from viewing it as one complex line {#section-688-16-extending-a-real-plane-differs-from-viewing-it-as-on}

**Worked example 15.3 (Restriction and extension of the complex line).**

The quarter-turn can also be interpreted as multiplication by $i$ on the complex line. That familiar identification is useful, but it is not the same operation as complexifying its underlying real plane. On the complex line the dimension over $C$ is one. Its multiplication-by-$i$ operator has only eigenvalue $i$ and minimum $t-i$. After forgetting complex scalars, its underlying real space has dimension two and minimum $t^2+1$. Extending that real space back to $C$ gives complex dimension two, with eigenvalues $i$ and $-i$.

The preserved-minimum theorem applies to the last extension: the real minimum remains the quadratic in the two-dimensional complexification. It does not say that restricting scalars from an already complex operator preserves its minimum. These are different operations on different spaces. Numerically identical real coordinate arrays can conceal the distinction if their scalar fields are omitted.

A basis count checks the types. A real basis of length two extends to a complex basis of length two. If the extended space is then viewed only as a real vector space, each complex coefficient has two real coordinates, making real dimension four. That real four-dimensional space is not the original real plane. Forgetting scalars and extending scalars are not inverse procedures on this example.

The same caution applies to eigenvectors. A complex eigenvector and its conjugate are separate directions in the extended space, while their real and imaginary parts describe an invariant real plane downstairs. To return to a real coordinate description, pair conjugate data and use the ordered real bases from Section 14. Keeping only one complex eigenvector generally throws away part of the complexified real operator; it is a restriction to an eigenline, not a field-change proof.

Finally, all these classifications are exact. An explicit eigenbasis matrix may be invertible and nevertheless poorly conditioned in a chosen norm. Extending scalars proves neither a numerical error bound nor a preferred real or complex basis for computation. The purpose of the field audit is to identify which algebraic statement has been established before any numerical question is added.

<a id="section-700-17-projectors-select-components-while-eigenbases-remain"></a>
## 17. Projectors select components while eigenbases remain choices {#section-702-17-projectors-select-components-while-eigenbases-remain}

A concrete involution turns the spectral-projector formulas into a decomposition certificate. Let $T:F^3\\to F^3$ be $T(a,b,c)=(b,a,c)$ and assume the characteristic is not two. Since $T^2=I$, define
\\[
 P_+=(I+T)/2,\\qquad P_-=(I-T)/2.
\\]
Direct multiplication gives $P_++P_-=I$, $P_+P_-=0$ and $P_\\pm^2=P_\\pm$. Also $(T-I)P_+=0$ and $(T+I)P_-=0$, so their images lie in the two eigenspaces. If $Tv=v$, then $P_+v=v$; if $Tv=-v$, then $P_-v=v$. These facts identify the images exactly without first solving for an eigenbasis.

For a generic vector the decomposition is
\\[
 P_+(a,b,c)=((a+b)/2,(a+b)/2,c),\\qquad
 P_-(a,b,c)=((a-b)/2,(b-a)/2,0).
\\]
Thus $E_1=\\operatorname{span}(u,w)$ with $u=(1,1,0)$, $w=(0,0,1)$, and $E_{-1}=\\operatorname{span}(v)$ with $v=(1,-1,0)$. Their dimensions are two and one, and the projector sum expresses every vector as the sum of its two components. The components are uniquely determined by the eigenspaces even though coordinates inside either eigenspace are not.

For example both $(u,w,v)$ and $(u+w,w,v)$ are eigenbases, and both give diagonal array $\\operatorname{diag}(1,1,-1)$. Their change matrix is a shear within the first two coordinates. It commutes with that diagonal array because the two corresponding eigenvalues coincide. More generally one may change the basis arbitrarily inside an eigenspace while retaining a diagonal matrix with the same repeated eigenvalue. A repeated eigenvalue supplies freedom of basis choice; it is not itself a nilpotent obstruction.

This distinguishes two meanings of a spectral answer. The projector $P_+$ is an operator determined by $T$ and its two distinct eigenvalues. A particular pair of vectors spanning its range is an additional choice. If a computation returns another valid basis of that same eigenspace, its individual columns can differ without changing the eigenspace or projector. Comparing bases entry by entry can therefore report a false disagreement even in exact arithmetic.

Now read the same integer-entry formula for $T$ over a characteristic-two field. The values $1$ and $-1$ coincide, and division by two is unavailable. The operator is not the identity: it still swaps the first two coordinates. Put $N=T-I$. On the first two coordinates its array has all entries one, so $N^2=0$ while $N\\ne0$; it vanishes on the third coordinate. The minimum is consequently $(t-1)^2$, and no extension field can make this operator diagonalizable. The displayed half-sum projectors have failed because their distinct-eigenvalue hypothesis has disappeared, not because the projector theorem was false.

Reducing integer coefficients into characteristic two is not scalar extension from a characteristic-zero field. An extension preserves characteristic. This distinction prevents an apparent counterexample to minimal-polynomial preservation: the real involution and the characteristic-two involution were created by two different coefficient interpretations, not related by an inclusion of their coefficient fields. Each theorem applies after that field choice is made.

The example gives a practical exact check for a proposed diagonalization. Compute the claimed component operators, verify their sum and products, verify their eigenvalue equations, then choose bases inside their ranges. If a denominator vanishes, return to the minimal polynomial before trying to repair the formula by cancellation. The next chapter explains the nilpotent coupling that remains when distinct linear factors have merged.


<a id="section-726-18-optional-practice-extensions"></a>
## 20. Exercise correction and basis convention {#section-797-20-exercise-correction-and-basis-convention}

Exercise 14 retains its original prompt and correct real/imaginary equations. Its extra matrix statement now gives the columns in the ordered basis $(x,y)$ only when that list is independent. Section 7's opposite-sign block is retained: it is the valid block in $(x,-y)$ for a nonreal eigenpair. The change repairs a specific ordered-coordinate statement and does not change the chapter's real-block convention.

<a id="section-799-summary"></a>

## Summary

<a id="section-105-11-summary"></a>
Diagonalization is the existence of an eigenbasis, equivalently square-free splitting of the minimal polynomial. Spectral projectors decompose the identity and polynomial calculus. Scalar extension separates failure to split from repeated-factor obstruction, while real conjugate pairs yield invariant planes.

<a id="section-107-exercises-with-full-solutions"></a>

<a id="section-801-summary"></a>
Diagonalizability means existence of an eigenbasis over the chosen field. Its exact criterion is a minimal polynomial that splits into distinct linear factors; repeated characteristic roots alone are inconclusive. Scalar extension may supply missing roots but cannot erase a nonzero nilpotent obstruction.

## Exercises {#section-109-exercises-with-full-solutions}

<a id="section-109-1-distinct-eigenvectors"></a>
### 1. Distinct eigenvectors {#section-111-1-distinct-eigenvectors}

Prove eigenvectors for distinct eigenvalues are independent.

<details>
<summary>Hint 1</summary>

Assume a shortest nontrivial dependence among distinct-eigenvalue eigenvectors.

</details>

<details>
<summary>Hint 2</summary>

Apply T−λI for one selected eigenvalue and use the shorter dependence.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use induction as in the text: apply $T-\\lambda_rI$ to a shortest dependence. The remaining coefficients are multiplied by nonzero $\\lambda_i-\\lambda_r$; induction kills them, then the last coefficient vanishes.


</details>

<a id="section-135-2-eigenspaces-intersect-trivially"></a>
### 2. Eigenspaces intersect trivially {#section-137-2-eigenspaces-intersect-trivially}

If $\\lambda\\ne \\mu$, prove $E_{\\lambda} \\cap E_{\\mu}=\\{0\\}$.

<details>
<summary>Hint 1</summary>

A vector in both eigenspaces satisfies two scalar equations.

</details>

<details>
<summary>Hint 2</summary>

Subtract them and use λ−μ≠0.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $Tv=\\lambda v=\\mu v$, then $(\\lambda-\\mu)v=0$. The scalar is nonzero and invertible in a field, so $v=0$.


</details>

<a id="section-161-3-diagonal-matrix-criterion"></a>
### 3. Diagonal matrix criterion {#section-163-3-diagonal-matrix-criterion}

Prove a matrix of $T$ is diagonal iff its basis vectors are eigenvectors.

<details>
<summary>Hint 1</summary>

Read the columns of the operator matrix.

</details>

<details>
<summary>Hint 2</summary>

A diagonal column says precisely that the corresponding basis vector maps to its scalar multiple.

</details>

<details>
<summary>Solution</summary>

**Solution.** Column $j$ is the coordinate vector of $Tv_j$. It has only diagonal entry $\\lambda_j$ exactly when $Tv_j=\\lambda_jv_j$.


</details>

<a id="section-187-4-distinct-root-sufficient-condition"></a>
### 4. Distinct-root sufficient condition {#section-189-4-distinct-root-sufficient-condition}

Prove $n$ distinct eigenvalues imply diagonalizability.

<details>
<summary>Hint 1</summary>

Choose one nonzero vector from each eigenspace.

</details>

<details>
<summary>Hint 2</summary>

Distinct-eigenvalue independence gives n independent vectors in dimension n.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose one eigenvector for each. Exercise 1 makes the $n$ vectors independent; in an $n$-space they form a basis.


</details>

<a id="section-213-5-converse-failure"></a>
### 5. Converse failure {#section-215-5-converse-failure}

Give a diagonalizable $4 by 4$ operator with one eigenvalue.

<details>
<summary>Hint 1</summary>

A scalar multiple of the identity has only one eigenvalue.

</details>

<details>
<summary>Hint 2</summary>

Every basis is still an eigenbasis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Any scalar operator $\\lambda I_4$ is already diagonal and has only eigenvalue $\\lambda$.


</details>

<a id="section-239-6-multiplicity-inequality"></a>
### 6. Multiplicity inequality {#section-241-6-multiplicity-inequality}

Prove geometric multiplicity does not exceed algebraic multiplicity.

<details>
<summary>Hint 1</summary>

Extend an eigenspace basis to all of V.

</details>

<details>
<summary>Hint 2</summary>

The resulting block triangular characteristic polynomial contains a factor (t−λ) to the eigenspace dimension.

</details>

<details>
<summary>Solution</summary>

**Solution.** Extend a basis of $E_{\\lambda}$ to one of $V$. Its invariance makes the matrix block upper triangular with a $\\lambda I_g$ restriction block, so $(t-\\lambda)^g$ divides the characteristic polynomial. Thus $g$ is at most the root multiplicity.


</details>

<a id="section-265-7-diagonalizability-by-dimensions"></a>
### 7. Diagonalizability by dimensions {#section-267-7-diagonalizability-by-dimensions}

If $\\chi_T$ splits and all geometric multiplicities equal algebraic multiplicities, prove $T$ diagonalizable.

<details>
<summary>Hint 1</summary>

Distinct eigenspaces form a direct sum.

</details>

<details>
<summary>Hint 2</summary>

Their dimensions add to the degree of the split characteristic polynomial.

</details>

<details>
<summary>Solution</summary>

**Solution.** Distinct eigenspaces form a direct sum and their dimensions sum to the sum of algebraic multiplicities, namely $n$. Concatenated eigenspace bases form a basis of $V$.


</details>

<a id="section-291-8-projector-range"></a>
### 8. Projector range {#section-293-8-projector-range}

Prove $\\operatorname{im} P_i=E_{\\lambda_i}$.

<details>
<summary>Hint 1</summary>

Evaluate (T−λ_iI)P_i and evaluate P_i on an eigenvector.

</details>

<details>
<summary>Hint 2</summary>

These give containment in the eigenspace and identity on that eigenspace.

</details>

<details>
<summary>Solution</summary>

**Solution.** On an eigenvector with eigenvalue $\\lambda_k$, interpolation makes $P_i$ act by $\\delta_{ik}$. Since an eigenbasis spans, its image is exactly the span of eigenvectors with eigenvalue $\\lambda_i$.


</details>

<a id="section-317-9-spectral-sum"></a>
### 9. Spectral sum {#section-319-9-spectral-sum}

Derive $T=\\sum \\lambda_iP_i$.

<details>
<summary>Hint 1</summary>

Apply both operators to each eigenspace.

</details>

<details>
<summary>Hint 2</summary>

The projectors sum to I and select the appropriate scalar action.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both operators act on each eigenvector in $E_{\\lambda_k}$ as multiplication by $\\lambda_k$; an eigenbasis spans, so the operators agree.


</details>

<a id="section-343-10-polynomial-calculus"></a>
### 10. Polynomial calculus {#section-345-10-polynomial-calculus}

Prove $f(T)=\\sum f(\\lambda_i)P_i$.

<details>
<summary>Hint 1</summary>

Use P_iP_j=0 for i≠j and P_i²=P_i.

</details>

<details>
<summary>Hint 2</summary>

First prove the formula for powers, then take a linear combination.

</details>

<details>
<summary>Solution</summary>

**Solution.** On $E_{\\lambda_i}$, $T$ acts as scalar $\\lambda_i$, so $f(T)$ acts as $f(\\lambda_i)$. The projectors isolate these summands, giving the formula.


</details>

<a id="section-369-11-powers"></a>
### 11. Powers {#section-371-11-powers}

If eigenvalues are $2,3$ with projectors $P,Q$, write $T^5$.

<details>
<summary>Hint 1</summary>

Use the polynomial-calculus formula with f(t)=t⁵.

</details>

<details>
<summary>Hint 2</summary>

The mutually annihilating projectors remove all mixed terms.

</details>

<details>
<summary>Solution</summary>

**Solution.** $T^5=2^5P+3^5Q=32P+243Q$, interpreted in the field.


</details>

<a id="section-395-12-extension-creates-roots"></a>
### 12. Extension creates roots {#section-397-12-extension-creates-roots}

Explain scalar extension for the real rotation.

<details>
<summary>Hint 1</summary>

Factor the real rotation's minimum after adjoining i.

</details>

<details>
<summary>Hint 2</summary>

The polynomial is unchanged but now splits into distinct linear factors.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its matrix remains $\\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$, now over $C$. The polynomial $t^2+1=(t-i)(t+i)$ has distinct roots, giving eigenvectors $(1,-i)$ and $(1,i)$ and a complex eigenbasis.


</details>

<a id="section-421-13-extension-cannot-remove-a-jordan-obstruction"></a>
### 13. Extension cannot remove a Jordan obstruction {#section-423-13-extension-cannot-remove-a-jordan-obstruction}

Prove a size-two Jordan block stays nondiagonalizable over every extension.

<details>
<summary>Hint 1</summary>

Its nilpotent off-diagonal part remains nonzero over every extension.

</details>

<details>
<summary>Hint 2</summary>

Thus the minimal polynomial still contains a squared linear factor.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its minimal polynomial remains $(t-\\lambda)^2$: the nilpotent part is nonzero and squares to zero over any extension. The repeated factor violates the diagonalizability criterion.


</details>

<a id="section-447-14-real-invariant-plane"></a>
### 14. Real invariant plane {#section-449-14-real-invariant-plane}

If $T_C(x+iy)=(a+ib)(x+iy)$, derive formulas for $Tx,Ty$.

<details>
<summary>Hint 1</summary>

Expand (a+ib)(x+iy).

</details>

<details>
<summary>Hint 2</summary>

Equate real and imaginary parts with Tx+iTy.

</details>

<details>
<summary>Solution</summary>

**Solution.** Equating real and imaginary parts gives $Tx=ax-by$ and $Ty=bx+ay$. Thus $\\operatorname{span}_R(x,y)$ is invariant. If $x,y$ are independent, its matrix in the ordered basis $(x,y)$ has columns $(a,-b)$ and $(b,a)$, yielding $\\begin{pmatrix}a & b \\\\ -b & a\\end{pmatrix}$.


</details>

<a id="section-473-15-square-free-derivative-test"></a>
### 15. Square-free derivative test {#section-475-15-square-free-derivative-test}

Over a field, explain why $\\operatorname{gcd}(m,m')=1$ is equivalent to separability of $m$.

<details>
<summary>Hint 1</summary>

A repeated root of a polynomial is also a root of its formal derivative.

</details>

<details>
<summary>Hint 2</summary>

Use factorization in a splitting field and the gcd criterion; no analytic differentiation is involved.

</details>

<details>
<summary>Solution</summary>

**Solution.** In a splitting field write $m(t)=c\\prod_i(t-\\alpha_i)^{e_i}$. A root $\\alpha_i$ is also a root of $m'$ exactly when $e_i>1$, so $m$ and $m'$ are coprime exactly when every $e_i=1$. This is separability. In characteristic $p$, a nonconstant polynomial with $m'=0$ has every exponent divisible by $p$ and is inseparable; over a nonperfect base field it may nevertheless be irreducible in $F[t]$.


</details>

<a id="section-499-16-invariant-subspaces-inherit-diagonalizability"></a>
### 16. Invariant subspaces inherit diagonalizability {#section-501-16-invariant-subspaces-inherit-diagonalizability}

If $T$ is diagonalizable and $U$ invariant, prove $T|_U$ diagonalizable.

<details>
<summary>Hint 1</summary>

The minimum of the restriction divides m_T.

</details>

<details>
<summary>Hint 2</summary>

A divisor of a split square-free polynomial is again split and square-free.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each spectral projector is a polynomial in $T$, so it preserves $U$. For $u \\in U$, $u=\\sum_i P_i u$ decomposes within $U$ into eigenvectors (discard zero terms). Therefore $U$ is the direct sum of its intersections with eigenspaces and has an eigenbasis.


</details>

<a id="section-525-17-polynomial-converse-failure"></a>
### 17. Polynomial converse failure {#section-527-17-polynomial-converse-failure}

Give nondiagonalizable $T$ with diagonalizable $T^2$.

<details>
<summary>Hint 1</summary>

Use a nonzero nilpotent block whose square is zero.

</details>

<details>
<summary>Hint 2</summary>

Its square is the zero operator, which is diagonal in every basis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Over characteristic not two, take $T=\\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}$. It is nonzero nilpotent with minimum $t^2$, so not diagonalizable, while $T^2=0$ is diagonalizable.


</details>

<a id="section-551-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-553-18-numerical-boundary}

Why can exact diagonalizability coexist with unstable eigenvector computation?

<details>
<summary>Hint 1</summary>

Compare existence of an eigenbasis with conditioning of that basis.

</details>

<details>
<summary>Hint 2</summary>

Nearly parallel eigenvectors make the coordinate transformation sensitive despite exact independence.

</details>

<details>
<summary>Solution</summary>

**Solution.** The eigenvectors may form an invertible but severely ill-conditioned basis matrix. Small data perturbations or rounding then cause large coordinate changes. Exact independence has no quantitative margin; numerical use needs conditioning, residuals, and often unitary Schur methods.

</details>

<a id="section-576-12-scalar-extension-preserves-a-matrix-rank-for-a-speci"></a>

<a id="section-728-18-optional-practice-extensions"></a>
### 19. LSP-15-E19: repeated characteristic factors need not obstruct extension {#section-730-lsp-15-e19-repeated-characteristic-factors-need-not-obs}

Over $R$, let $T$ be the direct sum of two standard quarter-turns. Determine its minimal polynomial over $R$ and over $C$, the dimensions of its complex eigenspaces, and whether it is diagonalizable over each field. Explain why the repeated quadratic factor in its characteristic polynomial does not decide the answer.

<details>
<summary>Hint 1</summary>

Each rotation has minimum t²+1, so their direct sum has the same minimum.

</details>

<details>
<summary>Hint 2</summary>

Over C the two roots give eigenspaces of dimension two; repeated characteristic factors alone do not force repeated minimal factors.

</details>

<a id="section-746-lsp-15-e20-recover-a-real-array-from-an-ordered-eigenpl"></a>
### 20. LSP-15-E20: recover a real array from an ordered eigenplane {#section-748-lsp-15-e20-recover-a-real-array-from-an-ordered-eigenpl}

A real operator on $R^2$ satisfies $T_C(x+iy)=(3+2i)(x+iy)$ with $x=(1,2)$ and $y=(1,-1)$. Find its matrix in the ordered basis $(x,y)$ and its standard matrix. Verify the two real vector images rather than changing block signs by convention.

<details>
<summary>Hint 1</summary>

First equate real and imaginary parts to obtain Tx and Ty.

</details>

<details>
<summary>Hint 2</summary>

Place those coordinates in columns for the basis matrix, then conjugate using the columns x,y.

</details>

<a id="section-764-19-solutions-to-optional-practice-extensions"></a>

## Solutions

<a id="section-766-19-solutions-to-optional-practice-extensions"></a>
<a id="section-766-lsp-15-e19-repeated-characteristic-factors-need-not-obs"></a>
### LSP-15-E19: repeated characteristic factors need not obstruct extension — solution {#section-768-lsp-15-e19-repeated-characteristic-factors-need-not-obs}

<details>
<summary>Solution</summary>


Each block satisfies $R^2=-I$, so $t^2+1$ annihilates the direct sum. It is not scalar, so no monic linear polynomial annihilates it; the minimum is $t^2+1$. Scalar extension preserves that minimum. Over $C$ it splits as $(t-i)(t+i)$ with distinct roots, so the operator is diagonalizable. Each block contributes one eigenvector at each root, giving complex eigenspace dimensions two and two. Over $R$ there is no real eigenvalue, hence no real eigenbasis. The characteristic polynomial is $(t^2+1)^2$, but the minimum has no repeated complex root; characteristic multiplicity alone is not a diagonalization obstruction.


</details>

<a id="section-777-lsp-15-e20-recover-a-real-array-from-an-ordered-eigenpl"></a>
### LSP-15-E20: recover a real array from an ordered eigenplane — solution {#section-779-lsp-15-e20-recover-a-real-array-from-an-ordered-eigenpl}

<details>
<summary>Solution</summary>


The vectors $x,y$ are independent since their coordinate matrix $X=\\begin{pmatrix}1&1\\\\2&-1\\end{pmatrix}$ has inverse $\\frac13\\begin{pmatrix}1&1\\\\2&-1\\end{pmatrix}$. The real equations give $Tx=3x-2y=(1,8)$ and $Ty=2x+3y=(5,1)$. Therefore
\\[
 B=[T]_{(x,y)}=\\begin{pmatrix}3&2\\\\-2&3\\end{pmatrix},
 \\qquad
 [T]_{\\rm standard}=XBX^{-1}
 =\\begin{pmatrix}11/3&-4/3\\\\10/3&7/3\\end{pmatrix}.
\\]
Multiplying the standard array by $(1,2)^{\\mathsf T}$ and $(1,-1)^{\\mathsf T}$ returns $(1,8)^{\\mathsf T}$ and $(5,1)^{\\mathsf T}$ respectively, checking both columns in their proper basis.


</details>

<a id="section-795-20-exercise-correction-and-basis-convention"></a>
`;export{e as default};