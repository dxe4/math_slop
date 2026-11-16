var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: polynomial-calculus-cyclic-subspaces
title: "Polynomial Calculus and Cyclic Subspaces"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Polynomial Calculus and Cyclic Subspaces {#section-1-polynomial-calculus-and-cyclic-subspaces}

Fixing an operator $T$ lets polynomials act on vectors: $p \\cdot v=p(T)v$. This single observation turns $V$ into an $\\mathbb{F}[t]$-module, makes invariant subspaces into submodules, and turns one generated orbit into a cyclic module. Canonical forms grow from this translation.

<a id="section-3-1-polynomial-evaluation-at-an-operator"></a>
## 1. Polynomial evaluation at an operator {#section-5-1-polynomial-evaluation-at-an-operator}

**Definition 12.1 (Polynomial evaluation).**

For $p(t)=a_0+\\ldots+a_dt^d$, set

$p(T)=a_0I+\\ldots+a_dT^d$.

Evaluation respects sums and products:

$(p+q)(T)=p(T)+q(T)$, $(pq)(T)=p(T)q(T)$.

All polynomials in $T$ commute with one another. The evaluation map $ev_T:\\mathbb{F}[t]\\to L(V)$ is a unital algebra homomorphism. Its kernel is an ideal.

<a id="section-17-2-minimal-polynomial"></a>
## 2. Minimal polynomial {#section-19-2-minimal-polynomial}

**Definition 12.2 (Operator minimal polynomial).**

When $V$ is finite-dimensional, Cayley–Hamilton makes the kernel nonzero. Since $\\mathbb{F}[t]$ is a principal ideal domain, there is a unique monic generator $m_T$, the **minimal polynomial**. Thus

$p(T)=0 \\Longleftrightarrow m_T \\mid p$.

Also $m_T \\mid \\chi_T$. Similar operators have the same minimal polynomial because $p(P^{-1}TP)=P^{-1}p(T)P$.

Minimal polynomial retains information characteristic polynomial loses: $I_2$ has $m=t-1$; a nontrivial size-two Jordan block has $m=(t-1)^2$.

<a id="section-29-3-cyclic-subspaces-and-vector-annihilators"></a>
## 3. Cyclic subspaces and vector annihilators {#section-31-3-cyclic-subspaces-and-vector-annihilators}

**Definition 12.3 (Cyclic subspace and vector annihilator).**

For $v \\in V$, define the cyclic subspace

$Z(v;T)=\\operatorname{span}(v,Tv,T^2v,\\ldots)=\\{p(T)v:p \\in \\mathbb{F}[t]\\}$.

It is the smallest invariant subspace containing $v$. The set

$\\operatorname{Ann}_T(v)=\\{p:p(T)v=0\\}$

is an ideal with unique monic generator $m_{T,v}$, the **vector minimal polynomial**. The map

$\\mathbb{F}[t]\\to Z(v;T)$, $p\\to p(T)v$

is onto with kernel $(m_{T,v})$, so

$Z(v;T) \\simeq \\mathbb{F}[t]/(m_{T,v})$.

Therefore $\\operatorname{dim} Z(v;T)=\\operatorname{deg} m_{T,v}$. Moreover $m_{T,v}$ divides $m_T$, and $m_T$ is the least common multiple of vector minimal polynomials for any spanning set.

<a id="section-51-4-krylov-bases-and-companion-matrices"></a>
## 4. Krylov bases and companion matrices {#section-53-4-krylov-bases-and-companion-matrices}

Let $m_{T,v}(t)=t^r+a_{r-1}t^{r-1}+\\ldots+a_0$. Then

$(v,Tv,\\ldots,T^{r-1}v)$

is a basis of $Z(v;T)$, and

$T^rv=-a_0v-\\ldots-a_{r-1}T^{r-1}v$.

The restriction matrix in this Krylov basis is the companion matrix

$\\begin{pmatrix}0 & 0 & \\ldots & -a_0 \\\\ 1 & 0 & \\ldots & -a_1 \\\\ \\vdots & \\ddots & \\ddots & \\vdots \\\\ 0 & \\ldots & 1 & -a_{r-1}\\end{pmatrix}$.

An operator is **cyclic** if some vector generates all of $V$. Then $\\operatorname{deg} m_T=n$, and because $m_T$ divides the degree-$n$ characteristic polynomial, $m_T=\\chi_T$. The converse also holds: if the minimal polynomial has degree $n$, a cyclic vector exists; a later decomposition proof supplies it.

<a id="section-67-5-b-zout-projections"></a>
## 5. Bézout projections {#section-69-5-b-zout-projections}

**Theorem 12.1 (Coprime-kernel decomposition).**

Suppose $a,b \\in \\mathbb{F}[t]$ are coprime. Bézout gives $ra+sb=1$. If $(ab)(T)v=0$, then

$v=ra(T)v+sb(T)v$.

The first term is killed by $b(T)$ and the second by $a(T)$ (the labels can be checked by commuting factors). Hence

$\\operatorname{ker}(ab)(T)=\\operatorname{ker} a(T) \\oplus \\operatorname{ker} b(T)$

when $a,b$ are coprime. The intersection is zero because a vector killed by both is killed by $1=ra+sb$.

The operators $ra(T)$ and $sb(T)$ act as complementary polynomial projections on the kernel. This is the engine of primary decomposition.

<a id="section-83-6-invertibility-of-polynomial-operators"></a>
## 6. Invertibility of polynomial operators {#section-85-6-invertibility-of-polynomial-operators}

**Theorem 12.2 (Polynomial invertibility criterion).**

$p(T)$ is invertible iff $\\operatorname{gcd}(p,m_T)=1$. If the gcd is one, Bézout gives $ap+bm_T=1$, hence $a(T)p(T)=I$. Conversely, write $p=dp_1$ and $m_T=dm_1$ for a nonconstant common divisor $d$. If $p(T)$ were invertible, then $d(T)$ would be injective, hence invertible in finite dimension. But $d(T)m_1(T)=0$ would then force $m_1(T)=0$, contradicting the minimality of $m_T$ because $\\operatorname{deg} m_1<\\operatorname{deg} m_T$.

If $m_T$ splits, this says $p(T)$ is invertible exactly when $p(\\lambda)\\ne 0$ at every eigenvalue. Over a nonsplitting field, irreducible factors, not merely field-valued eigenvalues, must be checked.

<a id="section-91-7-interpolation-and-spectral-projectors"></a>
## 7. Interpolation and spectral projectors {#section-93-7-interpolation-and-spectral-projectors}

If $T$ has distinct eigenvalues $\\lambda_1,\\ldots,\\lambda_r$ and is annihilated by $\\prod(t-\\lambda_i)$, Lagrange polynomials

$\\ell_i(t)=\\prod_{j\\ne i}(t-\\lambda_j)/(\\lambda_i-\\lambda_j)$

produce projections $P_i=\\ell_i(T)$. They satisfy $\\sum P_i=I$, $P_iP_j=0$ for $i\\ne j$, and $\\operatorname{im} P_i=\\operatorname{ker}(T-\\lambda_iI)$. This provides diagonalization without initially choosing an eigenbasis.

<a id="section-99-8-recurrences-and-exact-computation"></a>
## 8. Recurrences and exact computation {#section-101-8-recurrences-and-exact-computation}

If $m_T(T)=0$, every orbit $T^kv$ satisfies the corresponding linear recurrence. Thus scalar sequences $\\phi(T^kv)$ do too for $\\phi\\in V^{*}$, a linear functional. Minimal polynomials permit exact fast power reduction by computing $t^N mod m_T$, then evaluating the remainder at $T$.

Numerically, Krylov vectors can become nearly dependent well before exact dependence; stable Krylov algorithms use orthogonalization, residuals, and error analysis. Exact minimal-polynomial detection from rounded data is not licensed by a small residual.

<a id="section-105-9-common-errors"></a>
## 9. Common errors {#section-107-9-common-errors}

- $p(T)q(T)=q(T)p(T)$ does not mean arbitrary operators commute with $T$.
- The minimal polynomial need not equal the characteristic polynomial.
- A vector minimal polynomial may be a proper divisor of $m_T$.
- Polynomial factor arguments must occur over the named field.
- A computed Krylov rank threshold is not an exact cyclicity proof.

<a id="section-113-10-summary"></a>
## 11. Development: prove the polynomial-division input locally {#section-588-11-development-prove-the-polynomial-division-input-loca}

Over a field, division by a nonzero polynomial $m$ gives $p=qm+r$ with $\\deg r<\\deg m$ or $r=0$. To construct it, cancel the leading term of $p$ using the inverse of the leading coefficient of $m$, then repeat on a strictly smaller degree. Finitely many decreases finish the process. For uniqueness, subtract two proposed divisions: a nonzero multiple of $m$ cannot have degree below $\\deg m$, so their remainders and quotients agree.

This proves the principal-ideal fact needed here without importing the full module structure theorem. Let $J$ be a nonzero ideal in $F[t]$. Choose a nonzero element of least degree and scale its leading coefficient to make it monic, calling it $m$. Dividing any $p\\in J$ by $m$ leaves a remainder still in $J$. Minimality forces that remainder to be zero, so $J=(m)$. Two monic generators divide each other and therefore coincide.

For a finite-dimensional operator, Cayley–Hamilton supplies a nonzero annihilating polynomial, so its annihilator ideal meets this hypothesis. For a vector, the operator annihilator also kills that vector. If the vector is zero, every polynomial kills it, and the monic generator is the constant polynomial one. The same unit ideal occurs for the unique endomorphism of the zero space.

Bézout's identity follows from the same division mechanism. For $a,b$ not both zero, divide $a$ by $b$ only while $b\\ne0$. Replacing $(a,b)$ by $(b,a-qb)$ preserves common divisors and decreases successive nonzero remainder degrees. When the second entry is zero, normalize the remaining nonzero first entry to obtain the monic gcd. Every remainder is a polynomial combination of the starting pair, by induction through the division equations. Hence the gcd has an expression $ra+sb$.

When the gcd is one, this is an explicit algebraic certificate of coprimality. For example,

$$1=t^2-(t+1)(t-1).$$

It is valid over every field, including characteristic two. No division by two occurred. This certificate will isolate two parts of a concrete operator below.

These arguments use division by a nonzero polynomial's leading scalar, not division by an operator that might be singular. The latter becomes legitimate only after an inverse polynomial is constructed or invertibility is otherwise established. Keeping the two meanings of division separate prevents a circular proof of the very inverse one hopes to find.

<a id="section-604-12-development-certify-an-annihilator-from-the-first-ex"></a>
## 12. Development: certify an annihilator from the first exact dependence {#section-606-12-development-certify-an-annihilator-from-the-first-ex}

Start with a nonzero vector $v$ in a finite-dimensional space. Consider the successive vectors $v,Tv,T^2v,\\ldots$. Finite dimension guarantees a first dependent prefix. If $r$ is the first index giving dependence through $T^rv$, then $(v,\\ldots,T^{r-1}v)$ is independent.

In the first relation, the coefficient of $T^rv$ must be nonzero; otherwise the shorter prefix was already dependent. Dividing by that scalar gives a monic relation $q(T)v=0$ with $\\deg q=r$. The span of the preceding $r$ vectors is invariant: applying $T$ shifts every vector except the last, whose next image is given by this relation. Thus all later orbit vectors also lie in that span.

To prove that $q$ is the vector minimal polynomial, divide any polynomial $p$ killing $v$ by $q$. Its remainder has degree below $r$ and still kills $v$. Independence of the first $r$ orbit vectors forces every remainder coefficient to vanish. Hence every annihilator is divisible by $q$, exactly the defining property of $m_{T,v}$.

This direction of reasoning is useful for certificates. One must verify both an exact relation and independence of the earlier vectors. A relation alone proves only that the vector minimal polynomial divides the proposed polynomial. For instance, an eigenvector satisfies many higher-degree relations that are not minimal.

The zero vector has a separate empty-prefix case: $m_{T,0}=1$, its cyclic subspace is zero, and its Krylov basis is the empty list. The companion display for a positive degree is not a demand to fabricate a first vector for this case.

Polynomial remainders also explain the cyclic quotient concretely. Every vector $p(T)v$ has a representative polynomial of degree below $r$ after division by $m_{T,v}$. Two such representatives give the same vector only when their difference is an annihilator of lower degree, hence zero. The coefficients of these remainders therefore give a bijection with the cyclic subspace and its stated dimension $r$.

Nothing in the proof interprets a small numerical residual as zero. Exact dependence is a field equation; independence is another exact assertion. Rounded Krylov data may suggest a relation, but a tolerance-selected relation needs a separate error analysis and cannot silently be assigned a monic annihilator certificate.

<a id="section-620-13-development-one-orbit-combines-a-nilpotent-part-and-"></a>
## 13. Development: one orbit combines a nilpotent part and a fixed part {#section-622-13-development-one-orbit-combines-a-nilpotent-part-and-}

**Worked example 12.1 (A cyclic mixed-factor orbit).**

Work over an arbitrary field and take $V=F^3$ with

$$Te_1=0,\\qquad Te_2=e_1,\\qquad Te_3=e_3,\\qquad
A=\\begin{pmatrix}0&1&0\\\\0&0&0\\\\0&0&1\\end{pmatrix}.$$

Choose $v=e_2+e_3$. Its first orbit vectors are $v=e_2+e_3$, $Tv=e_1+e_3$, $T^2v=e_3$ and $T^3v=e_3$. A relation among the first three gives coefficients $\\beta$ at $e_1$, $\\alpha$ at $e_2$ and $\\alpha+\\beta+\\gamma$ at $e_3$, so all three coefficients vanish. Thus the first three orbit vectors are independent.

The next exact relation is $T^3v-T^2v=0$. The first-dependence argument proves $m_{T,v}(t)=t^3-t^2=t^2(t-1)$. The vector is cyclic: $e_3=T^2v$, $e_1=Tv-T^2v$ and $e_2=v-T^2v$ reconstruct the standard basis. No field extension or division by an integer was needed.

The operator relation $T^3=T^2$ follows directly on each standard basis vector. Any polynomial killing the whole operator kills $v$, so its degree is at least three. Consequently $m_T=t^2(t-1)$. The block-triangular characteristic polynomial is also $t^2(t-1)$. Their equality here has been established by an explicit cyclic vector, not inferred from matching trace and determinant.

There are shorter vector relations inside the same operator. The vector $e_1$ has minimum $t$, because it is nonzero and killed by $T$. The vector $e_2$ has minimum $t^2$, because $Te_2=e_1\\ne0$ and $T^2e_2=0$. The vector $e_3$ has minimum $t-1$. These are proper divisors of the operator minimum.

This example shows why the lcm rule does not mean that one of the standard basis vectors must have the whole operator minimum. Their minima have degrees one, two and one, while their lcm has degree three. The sum $e_2+e_3$ combines two coprime contributions and attains that lcm, but that conclusion required a construction.

The constant tail $T^kv=e_3$ for $k\\geq2$ is an exact recurrence phenomenon. It coexists with a nonzero nilpotent action on $e_2$, so the operator is not diagonalised by merely observing that this one orbit eventually stops changing. The shorter initial orbit information is part of the certificate.

<a id="section-641-14-development-verify-the-companion-orientation-by-colu"></a>
## 14. Development: verify the companion orientation by columns {#section-643-14-development-verify-the-companion-orientation-by-colu}

Use the ordered Krylov basis $B=(v,Tv,T^2v)$ from the previous example. The first image is the second basis vector, the second image is the third, and the third image is again the third. Therefore

$$[T]_B=
 \\begin{pmatrix}0&0&0\\\\1&0&0\\\\0&1&1\\end{pmatrix}.$$

The ones below the diagonal are forced by column coordinates. The last column comes from $T^3v=T^2v$, agreeing with the coefficients of $t^3-t^2$. Transposing this matrix would represent a different convention, not the same column-coordinate record.

The change-of-basis matrix has columns equal to the Krylov vectors in standard coordinates:

$$P=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\1&1&1\\end{pmatrix}.$$

For a standard-coordinate vector $x=(x_1,x_2,x_3)^{\\mathsf T}$, its Krylov coefficients are $(x_2,x_1,x_3-x_1-x_2)^{\\mathsf T}$. This explicitly supplies $P^{-1}$, and verifies invertibility in every characteristic. Checking $AP=P[T]_B$ column by column proves the similarity equation with its direction fixed.

A general positive-degree monic vector minimum $t^r+a_{r-1}t^{r-1}+\\cdots+a_0$ gives the same rule: the first $r-1$ columns shift one place down, and the last is $(-a_0,\\ldots,-a_{r-1})^{\\mathsf T}$. It is not a mnemonic independent of basis order. Reversing the Krylov list, using row coordinates or letting a polynomial act on a different side changes the display.

The quotient description gives a second interpretation. On $F[t]/(m_{T,v})$, multiplication by $t$ sends the residue of $t^j$ to that of $t^{j+1}$. The final power reduces by the monic relation. The correspondence $[p]\\mapsto p(T)v$ carries this operation to the restriction of $T$ on its cyclic subspace. Representatives can change by a multiple of the annihilator without changing the vector.

This explains what the companion matrix records: the multiplication rule for one generated orbit. It does not imply that the ambient operator has only one such orbit. When the cyclic subspace is proper, the companion matrix describes a restriction, and additional invariant pieces remain. The distinction between the whole operator and one vector's module is essential for interpreting a computed companion block.

<a id="section-662-15-development-calculate-b-zout-projections-with-their-"></a>
## 15. Development: calculate Bézout projections with their image labels {#section-664-15-development-calculate-b-zout-projections-with-their-}

**Worked example 12.2 (Compute and certify both primary projectors).**

For the example, use $a(t)=t^2$ and $b(t)=t-1$. The certificate $1=a-(t+1)b$ gives two polynomial pieces. The factor $a$ is one modulo $b$ and zero modulo $a$, while $1-a$ has the reverse residues. Evaluating gives

$$P_1=T^2,\\qquad P_0=I-T^2.$$

Their matrices are respectively $\\operatorname{diag}(0,0,1)$ and $\\operatorname{diag}(1,1,0)$. Hence $\\operatorname{im}P_1=\\ker(T-I)$ and $\\operatorname{im}P_0=\\ker T^2$. The labels are determined by the kernels being selected, not by calling whichever factor appears first the first projection.

The operator relation gives $T^4=T^2$. Therefore $P_1^2=P_1$, $P_0^2=P_0$, $P_0P_1=P_1P_0=0$ and $P_0+P_1=I$. These identities remain valid in characteristic two; no half-factor entered the Bézout certificate. Every vector splits uniquely as $P_0x+P_1x$ because the two images have zero intersection and the projections act as identities on their own images.

On the cyclic generator the split is particularly clear: $P_0v=e_2$ and $P_1v=e_3$. The first part needs the repeated factor $t^2$, while the second needs the simple factor $t-1$. This is an exact separation of two annihilators, not merely a grouping of eigenvalues. The nilpotent component is preserved rather than replaced by its zero eigenvalue.

For general coprime factors with $ra+sb=1$, the term $ra(T)$ selects the part killed by $b(T)$, and $sb(T)$ selects the part killed by $a(T)$, on the kernel of $(ab)(T)$. Multiplying the factors verifies those image inclusions. The complementary-projection identities hold on that kernel; they are not automatically identities on a larger space where $ab$ does not annihilate.

The polynomial construction also shows independence from a particular Bézout pair on the relevant kernel. If two choices give the same residues modulo $a$ and modulo $b$, their difference is divisible by the coprime product. Its evaluation vanishes on that kernel. This is the representative-independence obligation behind the Chinese-remainder interpretation.

The next chapter assembles such projections for several primary factors. Here every matrix, residue and image is explicit, so the two-factor mechanism can be checked before accepting a more general decomposition theorem.

<a id="section-682-16-development-construct-and-test-a-polynomial-inverse"></a>
## 16. Development: construct and test a polynomial inverse {#section-684-16-development-construct-and-test-a-polynomial-inverse}

**Worked example 12.3 (An inverse and its characteristic boundary).**

For the same operator minimum $m=t^3-t^2$, let $p=t+1$. When the characteristic is not two, the polynomial $q=1-t+t^2/2$ satisfies

$$(t+1)q=1+\\frac12(t^3-t^2).$$

Evaluation gives $(T+I)q(T)=q(T)(T+I)=I$, so $q(T)$ is the inverse. The equality is both-sided because all its factors are polynomials in one operator. The exact matrix inverse is $\\begin{pmatrix}1&-1&0\\\\0&1&0\\\\0&0&1/2\\end{pmatrix}$, which agrees with $I-T+T^2/2$.

The same formula can be understood on the two projected parts. On $\\ker T^2$, the inverse is $I-T$ because $T$ is square-zero there. On $\\ker(T-I)$, $T+I$ acts by scalar two, so its inverse is multiplication by one half. The projection formula combines the two rules. It does not require an eigenbasis for the nilpotent part.

In characteristic two, $(T+I)e_3=0$ for the nonzero vector $e_3$, so invertibility genuinely fails. The failed division by two reflects that algebraic obstruction. Equivalently, $t+1=t-1$ shares a factor with $m$. A denominator warning and a gcd calculation identify the same boundary.

This illustrates the full gcd criterion. A Bézout identity for $p$ and $m_T$ constructs an inverse when they are coprime. If a nonconstant common factor exists, it cannot be ignored simply because $p$ is nonzero as a formal polynomial. Evaluation can turn a nonzero polynomial into a singular or zero operator.

A proposed inverse should be checked by reducing the product to one modulo the operator minimum. Reducing only modulo a vector minimum proves an inverse action on that cyclic subspace, which may be smaller than $V$. In particular, a coefficient formula that works on an eigenvector does not establish a two-sided inverse on the whole space.

All calculations here are exact finite polynomial and matrix identities. No executable inverse routine or rounded rank decision is being claimed. Numerical implementations require their own arithmetic, precision and error certificates, as the earlier exact-versus-numerical discussion makes explicit.

<a id="section-702-17-development-classify-vector-minima-and-name-the-forw"></a>
## 17. Development: classify vector minima and name the forward input {#section-704-17-development-classify-vector-minima-and-name-the-forw}

For a general vector $x=ae_1+be_2+ce_3$ in the example, the projections isolate $ae_1+be_2$ and $ce_3$. Write a polynomial as $p(t)=p_0+p_1t+t^2r(t)$. On the first component its value is $(p_0a+p_1b)e_1+p_0be_2$.

If $b\\ne0$, killing that component forces $p_0=p_1=0$, hence divisibility by $t^2$. If $b=0$ but $a\\ne0$, it forces only $p_0=0$, hence divisibility by $t$. If both vanish, there is no restriction from that component. The second component is killed exactly when $c=0$ or $p(1)=0$; in the latter case $t-1$ divides $p$ by polynomial division.

Coprimality combines the restrictions as follows.

| Vector conditions | Monic vector minimum | Cyclic-subspace dimension |
| --- | --- | --- |
| $b\\ne0,\\ c\\ne0$ | $t^2(t-1)$ | $3$ |
| $b\\ne0,\\ c=0$ | $t^2$ | $2$ |
| $b=0,\\ a\\ne0,\\ c\\ne0$ | $t(t-1)$ | $2$ |
| $b=0,\\ a\\ne0,\\ c=0$ | $t$ | $1$ |
| $a=b=0,\\ c\\ne0$ | $t-1$ | $1$ |
| $a=b=c=0$ | $1$ | $0$ |

Every row follows from necessary and sufficient coefficient conditions, not just from a polynomial guessed to kill the vector. In particular the cyclic vectors are exactly those with $b$ and $c$ nonzero. This classification works over every field because zero and one are distinct and the two factors remain coprime.

The example supplies its own cyclic vector. A general converse, “$\\deg m_T=\\dim V$ implies a cyclic vector exists,” needs a theorem ensuring a vector attains the operator minimum. The lcm of several vector minima need not equal one member, as the standard-basis example already showed. One cannot replace that missing existence argument by taking the basis vector with largest degree.

For nonzero finite-dimensional $V$, the forward input used later is the invariant-factor decomposition of its finite torsion $F[t]$-module, stated in Chapter 14, Sections 2 and 7. Given that decomposition, $m_T$ is the largest invariant factor, and its degree equals the total dimension only when there is a single nonzero cyclic summand. That summand supplies a generator. The general module structure theorem is a named algebraic input there, not proved by the elementary polynomial-division argument here. The zero space is generated by its zero vector and has unit minimum; it uses the separate empty-basis case.

This boundary preserves the useful elementary results already established: a supplied cyclic vector gives a companion basis; its vector minimum equals the operator minimum; and an explicit coprime construction can combine components in a worked case. None requires pretending that the later existence theorem has already been derived.

<a id="section-727-18-development-eigenvalue-values-do-not-detect-a-repeat"></a>
## 18. Development: eigenvalue values do not detect a repeated factor {#section-729-18-development-eigenvalue-values-do-not-detect-a-repeat}

In the worked example, zero and one are the only eigenvalues, and the minimum is $t^2(t-1)$. A polynomial can vanish at both eigenvalues without killing the operator. Take $p=t(t-1)$. It vanishes at zero and one, but $p(T)e_2=(T^2-T)e_2=-e_1\\ne0$. The repeated zero factor carries information that the two scalar values alone do not record.

This identifies the hypothesis in Section 7's Lagrange construction. The assumption there is annihilation by the product of distinct linear factors, not merely that a list contains all distinct eigenvalues. Here the tempting Lagrange polynomials $1-t$ and $t$ sum to one, but $T$ is not idempotent since $T^2e_2\\ne Te_2$. Their evaluations are therefore not the asserted complementary projections.

The correct polynomial residues specify more at the repeated factor. A polynomial is zero modulo $t^2$ exactly when its constant and linear coefficients vanish. In formal-derivative language this is $q(0)=q'(0)=0$, valid in every characteristic because $q'(0)$ equals its linear coefficient. No factorial has been inverted.

The projector polynomial $q_1=t^2$ consequently has residues zero modulo $t^2$ and one modulo $t-1$. Its complement $q_0=1-t^2$ has residues one modulo $t^2$ and zero modulo $t-1$. These are stronger conditions than the two point values. They encode the nilpotent part as well as the fixed part.

Among polynomials of degree below three these residue conditions determine each projector uniquely. If two solutions existed, their difference would be divisible by both coprime factors and therefore by their degree-three product, while having lower degree. It must be zero. This is the same remainder uniqueness that made the cyclic quotient well defined.

Higher repeated factors need their full polynomial congruences. Replacing them by a list of ordinary derivatives can require characteristic-sensitive factorial conversions, so the safest field-general formulation remains divisibility or residues modulo the factor powers. This example explains the obstruction without importing a general interpolation theorem beyond the exact polynomial arithmetic already proved.

<a id="section-741-19-errata-and-elaborations-of-original-solutions"></a>
## 19. Errata and elaborations of original solutions {#section-743-19-errata-and-elaborations-of-original-solutions}

<a id="section-743-original-exercise-5-zero-space-and-the-nilpotent-orbit"></a>
### Original Exercise 5: zero space and the nilpotent orbit {#section-745-original-exercise-5-zero-space-and-the-nilpotent-orbit}

The short solution is explicitly corrected for the zero-space case. On the zero space every polynomial evaluates to the unique zero endomorphism, so the annihilator ideal is all $F[t]$ and its monic generator is one. On a nonzero space, a nonzero constant polynomial acts as a nonzero scalar multiple of the identity; hence the zero and identity operators have minima $t$ and $t-1$ respectively.

For the nilpotent case, choose $v$ with $N^2v\\ne0$. If $av+bNv+cN^2v=0$, applying $N^2$ gives $aN^2v=0$, so $a=0$. Applying $N$ to the remaining relation gives $bN^2v=0$, so $b=0$, and then $c=0$. The orbit triple is independent. No lower-degree polynomial kills this vector, while $t^3$ kills the operator; therefore the operator minimum is exactly $t^3$.

<a id="section-749-original-exercise-17-the-scalar-observer-must-be-linear"></a>
### Original Exercise 17: the scalar observer must be linear {#section-751-original-exercise-17-the-scalar-observer-must-be-linear}

The original premise is explicitly clarified to require $\\phi\\in V^{*}$, leaving its heading, source line and complete key unchanged. A linear functional carries the vector identity $T^{k+3}v=2T^{k+1}v-T^kv$ to the stated scalar recurrence.

Without that hypothesis the implication fails. Over $\\mathbb R$, let $C=\\begin{pmatrix}0&0&-1\\\\1&0&2\\\\0&1&0\\end{pmatrix}$, $v=e_1$ and $\\phi(x)=x_1^2$. The columns give $C^3=2C-I$. But $a_0=1$, $a_1=0$ and $a_3=1$, while the claimed recurrence at zero would give $a_3=2a_1-a_0=-1$. The nonlinear observation rule does not preserve subtraction or scalar multiplication. This is a type repair, not a new task or a silent change to an existing learner answer.

<a id="section-755-20-optional-practice-extensions"></a>

<a id="section-304-summary"></a>
## Summary {#section-306-summary}

<a id="section-115-10-summary"></a>
Polynomial evaluation makes $V$ an $\\mathbb{F}[t]$-module. Minimal polynomials generate annihilator ideals; vector annihilators describe cyclic subspaces and companion matrices. Coprime factors yield polynomial projections, preparing primary decomposition.

<a id="section-117-exercises-with-full-solutions"></a>

<a id="section-820-summary"></a>
Polynomial evaluation turns an operator into an action of F[t]. The operator and vector minimal polynomials record exact annihilation, cyclic subspaces become polynomial quotients, and coprime factors provide projections and inverses through Bézout identities. Exact dependence and divisibility remain distinct from small numerical residuals.

## Exercises {#section-119-exercises-with-full-solutions}

<a id="section-119-1-evaluation-homomorphism"></a>
### 1. Evaluation homomorphism {#section-121-1-evaluation-homomorphism}

Prove $(pq)(T)=p(T)q(T)$.

<details>
<summary>Hint 1</summary>

Expand both polynomials and use the law for composing powers of one operator.

</details>

<details>
<summary>Hint 2</summary>

Compare the coefficient of each T^k in the double sum defining p(T)q(T).

</details>

<details>
<summary>Solution</summary>

**Solution.** Expanding $p=\\sum_i a_it^i$, $q=\\sum_j b_jt^j$, the product operator is $\\sum_{i,j}a_ib_jT^{i+j}$, exactly evaluation of the polynomial product.


</details>

<a id="section-145-2-kernel-is-an-ideal"></a>
### 2. Kernel is an ideal {#section-147-2-kernel-is-an-ideal}

Prove \${p:p(T)=0}$ is an ideal of $\\mathbb{F}[t]$.

<details>
<summary>Hint 1</summary>

Use the evaluation homomorphism established in Exercise 1.

</details>

<details>
<summary>Hint 2</summary>

Check closure under subtraction and under multiplication by an arbitrary polynomial.

</details>

<details>
<summary>Solution</summary>

**Solution.** It contains zero and is closed under differences by linearity. If $p(T)=0$, then $(qp)(T)=q(T)p(T)=0$ for every $q$, proving absorption.


</details>

<a id="section-171-3-divisibility-property"></a>
### 3. Divisibility property {#section-173-3-divisibility-property}

Prove $p(T)=0$ iff $m_T|p$.

<details>
<summary>Hint 1</summary>

Divide p by the monic polynomial m_T.

</details>

<details>
<summary>Hint 2</summary>

The remainder also annihilates T; minimality forces a remainder of smaller degree to be zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The annihilator ideal is generated by $m_T$, so its elements are exactly polynomial multiples of $m_T$.


</details>

<a id="section-197-4-similarity-invariance"></a>
### 4. Similarity invariance {#section-199-4-similarity-invariance}

Prove similar operators have the same minimal polynomial.

<details>
<summary>Hint 1</summary>

Write the conjugating relation for each power of the two operators.

</details>

<details>
<summary>Hint 2</summary>

Show p(STS^{-1})=Sp(T)S^{-1}, then compare their annihilator ideals.

</details>

<details>
<summary>Solution</summary>

**Solution.** Induction gives $p(P^{-1}TP)=P^{-1}p(T)P$; it vanishes exactly when $p(T)$ does. Thus the annihilator ideals, and their monic generators, agree.


</details>

<a id="section-223-5-small-examples"></a>
### 5. Small examples {#section-225-5-small-examples}

Find minimal polynomials of $0$, $I$, and a nilpotent $N$ with $N^3=0,N^2\\ne 0$.

<details>
<summary>Hint 1</summary>

Identify a monic annihilator in each case.

</details>

<details>
<summary>Hint 2</summary>

For the nilpotent example, use N^2≠0 to exclude every lower-degree annihilator.

</details>

<details>
<summary>Solution</summary>

**Solution.** On a nonzero vector space, the zero and identity operators have minimal polynomials $t$ and $t-1$; on the zero space both have minimal polynomial $1$. A nilpotent $N$ with $N^3=0,N^2\\ne0$ has minimal polynomial $t^3$: its cube vanishes, and a vector $v$ with $N^2v\\ne0$ gives an independent list $(v,Nv,N^2v)$, excluding a lower-degree annihilator.


</details>

<a id="section-249-6-smallest-invariant-span"></a>
### 6. Smallest invariant span {#section-251-6-smallest-invariant-span}

Prove $Z(v;T)$ is the smallest invariant subspace containing $v$.

<details>
<summary>Hint 1</summary>

Check what T does to every orbit vector T^kv.

</details>

<details>
<summary>Hint 2</summary>

Any invariant subspace containing v must contain the entire orbit and its span.

</details>

<details>
<summary>Solution</summary>

**Solution.** It contains $v$ and is preserved because applying $T$ shifts each power. Every invariant subspace containing $v$ contains all successive powers and hence their span.


</details>

<a id="section-275-7-cyclic-quotient"></a>
### 7. Cyclic quotient {#section-277-7-cyclic-quotient}

Prove $Z(v;T) \\simeq \\mathbb{F}[t]/(m_{T,v})$.

<details>
<summary>Hint 1</summary>

Map a polynomial p to p(T)v.

</details>

<details>
<summary>Hint 2</summary>

Identify its kernel as (m_{T,v}) and invoke the first isomorphism theorem.

</details>

<details>
<summary>Solution</summary>

**Solution.** The map $p\\to p(T)v$ is linear and onto by definition. Its kernel is the vector annihilator ideal $(m_{T,v})$; the first isomorphism theorem gives the quotient.


</details>

<a id="section-301-8-krylov-independence"></a>
### 8. Krylov independence {#section-303-8-krylov-independence}

If $\\operatorname{deg} m_{T,v}=r$, prove $(v,\\ldots,T^{r-1}v)$ is independent.

<details>
<summary>Hint 1</summary>

Translate a linear dependence into an annihilating polynomial of v.

</details>

<details>
<summary>Hint 2</summary>

A nonzero relation of degree below r contradicts the defining minimum degree.

</details>

<details>
<summary>Solution</summary>

**Solution.** A dependence would give a nonzero polynomial of degree below $r$ killing $v$, contradicting minimality of the monic generator. The defining degree-$r$ relation shows the list spans the cyclic subspace.


</details>

<a id="section-327-9-companion-matrix"></a>
### 9. Companion matrix {#section-329-9-companion-matrix}

Derive the companion matrix columns.

<details>
<summary>Hint 1</summary>

Use the ordered basis v,Tv,…,T^{r−1}v.

</details>

<details>
<summary>Hint 2</summary>

The first columns shift one place; reduce T^rv using m_{T,v}(T)v=0 for the last column.

</details>

<details>
<summary>Solution</summary>

**Solution.** $T(T^jv)=T^{j+1}v$ gives a single one immediately below the diagonal for the first $r-1$ columns. The relation for $T^rv$ gives final column $(-a_0,\\ldots,-a_{r-1})^T$.


</details>

<a id="section-353-10-vector-divides-operator-minimum"></a>
### 10. Vector divides operator minimum {#section-355-10-vector-divides-operator-minimum}

Prove $m_{T,v}|m_T$.

<details>
<summary>Hint 1</summary>

The polynomial m_T annihilates every vector.

</details>

<details>
<summary>Hint 2</summary>

Divide m_T by m_{T,v} and apply the remainder to v.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $m_T(T)=0$, it kills $v$; hence $m_T$ lies in the ideal generated by $m_{T,v}$.


</details>

<a id="section-379-11-lcm-over-a-basis"></a>
### 11. LCM over a basis {#section-381-11-lcm-over-a-basis}

If $(v_i)$ spans $V$, prove $m_T=lcm_i m_{T,v_i}$ (monic).

<details>
<summary>Hint 1</summary>

A polynomial annihilates T exactly when it annihilates every spanning vector.

</details>

<details>
<summary>Hint 2</summary>

Compare divisibility in both directions using the defining property of the least common multiple.

</details>

<details>
<summary>Solution</summary>

**Solution.** A polynomial kills $T$ iff it kills every spanning vector, iff it is divisible by every vector minimal polynomial, iff it is divisible by their least common multiple. The monic generator is therefore that lcm.


</details>

<a id="section-405-12-coprime-kernel-decomposition"></a>
### 12. Coprime kernel decomposition {#section-407-12-coprime-kernel-decomposition}

Prove $\\operatorname{ker}(ab)(T)=\\operatorname{ker} a(T) \\oplus \\operatorname{ker} b(T)$ when $\\operatorname{gcd}(a,b)=1$.

<details>
<summary>Hint 1</summary>

Choose u,v with ua+vb=1.

</details>

<details>
<summary>Hint 2</summary>

Apply this identity to a vector killed by a(T)b(T); assign each summand to the opposite kernel and check the intersection.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose $ra+sb=1$. For $v$ in the left kernel, write $v=ra(T)v+sb(T)v$; the first term is killed by $b(T)$, the second by $a(T)$. If a vector lies in both kernels, applying the Bézout identity gives it equals zero.


</details>

<a id="section-431-13-polynomial-inverse"></a>
### 13. Polynomial inverse {#section-433-13-polynomial-inverse}

If $\\operatorname{gcd}(p,m_T)=1$, construct $p(T)^{-1}$.

<details>
<summary>Hint 1</summary>

Use Bézout for p and m_T.

</details>

<details>
<summary>Hint 2</summary>

Evaluate up+vm_T=1 at T and use commutation of polynomial evaluations.

</details>

<details>
<summary>Solution</summary>

**Solution.** Bézout supplies $ap+bm_T=1$; evaluating gives $a(T)p(T)=I$. Commutativity also gives the reverse product, so the inverse is $a(T)$.


</details>

<a id="section-457-14-an-explicit-inverse"></a>
### 14. An explicit inverse {#section-459-14-an-explicit-inverse}

If $m_T=t^2+1$, find the inverse of $T-I$ over characteristic not two.

<details>
<summary>Hint 1</summary>

Reduce (t−1)(t+1) modulo t²+1.

</details>

<details>
<summary>Hint 2</summary>

The result is −2, so invert that scalar under the stated characteristic hypothesis.

</details>

<details>
<summary>Solution</summary>

**Solution.** $(t-1)(-t-1)=1-t^2$, which is congruent to $2$ modulo $t^2+1$. Thus $(T-I)^{-1}=(-T-I)/2$.


</details>

<a id="section-483-15-lagrange-projectors"></a>
### 15. Lagrange projectors {#section-485-15-lagrange-projectors}

For distinct $\\lambda_i$, prove $\\ell_i(\\lambda_j)=\\delta_{ij}$.

<details>
<summary>Hint 1</summary>

Evaluate the numerator of the Lagrange polynomial at each interpolation node.

</details>

<details>
<summary>Hint 2</summary>

At its own node every numerator factor cancels its denominator; at another node a numerator factor vanishes.

</details>

<details>
<summary>Solution</summary>

**Solution.** At $\\lambda_i$, every numerator factor equals its denominator partner, giving one. At any other $\\lambda_j$, the numerator contains the zero factor $t-\\lambda_j$.


</details>

<a id="section-509-16-projector-identities"></a>
### 16. Projector identities {#section-511-16-projector-identities}

Assuming $\\prod(T-\\lambda_iI)=0$, prove $\\sum \\ell_i(T)=I$.

<details>
<summary>Hint 1</summary>

Examine the polynomial ∑ℓ_i−1 at every distinct λ_i.

</details>

<details>
<summary>Hint 2</summary>

It is zero by interpolation, or is divisible by the split annihilating polynomial; evaluate at T.

</details>

<details>
<summary>Solution</summary>

**Solution.** The polynomial $\\sum \\ell_i-1$ has all $r$ distinct roots and degree below $r$, hence is zero. Evaluating gives the identity. Similar interpolation proves $\\ell_i\\ell_j$ is congruent to zero and $\\ell_i^2$ to $\\ell_i$ modulo the annihilating product.


</details>

<a id="section-535-17-recurrence"></a>
### 17. Recurrence {#section-537-17-recurrence}

Let $\\phi\\in V^{*}$ be a linear functional. If $T^3=2T-I$, derive a recurrence for $a_k=\\phi(T^kv)$.

<details>
<summary>Hint 1</summary>

Multiply T³=2T−I by T^k.

</details>

<details>
<summary>Hint 2</summary>

Apply both sides to v and then apply the linear functional φ.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiply by $T^k$ to get $T^{k+3}=2T^{k+1}-T^k$; apply to $v$ and then $\\phi$, yielding $a_{k+3}=2a_{k+1}-a_k$.


</details>

<a id="section-561-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-563-18-numerical-boundary}

Why can near dependence of $(v,Tv,\\ldots,T^rv)$ not establish a vector minimal polynomial?

<details>
<summary>Hint 1</summary>

Separate an exact relation from a small residual.

</details>

<details>
<summary>Hint 2</summary>

A nearly dependent Krylov list can arise from rounding even when its exact vectors are independent.

</details>

<details>
<summary>Solution</summary>

**Solution.** Near dependence depends on a norm, scale, rounding, and tolerance; exact annihilation is an algebraic equality. Perturbations can change minimal polynomial discontinuously, so numerical Krylov methods report residual-based approximations rather than exact invariant factors without certified arithmetic.

</details>

<a id="section-586-11-development-prove-the-polynomial-division-input-loca"></a>

<a id="section-757-20-optional-practice-extensions"></a>
### 19. LSP-12-E19: change the fixed eigenvalue {#section-761-lsp-12-e19-change-the-fixed-eigenvalue}

Assume the characteristic is not two, and define $Te_1=0$, $Te_2=e_1$, $Te_3=2e_3$. For $v=e_2+e_3$, derive its monic vector minimum, the companion matrix in its ordered Krylov basis, and the polynomial projection onto $\\ker(T-2I)$.

<details>
<summary>Hint 1</summary>

Compute v,Tv,T²v and inspect their e₁,e₂,e₃ coordinates.

</details>

<details>
<summary>Hint 2</summary>

Use the exact relation T³v=2T²v, then find a polynomial equal to zero at the nilpotent part and one at 2.

</details>

<a id="section-777-lsp-12-e20-a-second-mixed-factor-inverse"></a>
### 20. LSP-12-E20: a second mixed-factor inverse {#section-779-lsp-12-e20-a-second-mixed-factor-inverse}

Suppose $m_T=t^2(t-1)$ over a field of characteristic not two. Find a polynomial inverse for $T-2I$ by giving an explicit Bézout congruence. Explain why the corresponding assertion fails in characteristic two.

<details>
<summary>Hint 1</summary>

Seek a quadratic q with (t−2)q≡1 modulo t²(t−1).

</details>

<details>
<summary>Hint 2</summary>

Compare coefficients, and check separately why t−2 becomes t in characteristic two.

</details>

<a id="section-795-21-solutions-to-practice-extensions"></a>

<a id="section-843-solutions"></a>
## Solutions {#section-845-solutions}

<a id="section-797-21-solutions-to-practice-extensions"></a>
<a id="section-797-lsp-12-e19-change-the-fixed-eigenvalue-solution"></a>
### LSP-12-E19: change the fixed eigenvalue — solution {#section-799-lsp-12-e19-change-the-fixed-eigenvalue-solution}

<details>
<summary>Solution</summary>


The orbit begins $v=e_2+e_3$, $Tv=e_1+2e_3$, $T^2v=4e_3$, with $T^3v=2T^2v$. A relation among the first three has coefficients $\\beta$ at $e_1$ and $\\alpha$ at $e_2$, then $4\\gamma$ at $e_3$ after those vanish. Invertibility of four gives independence. Thus $m_{T,v}=t^3-2t^2$, and the ordered companion matrix is $\\begin{pmatrix}0&0&0\\\\1&0&0\\\\0&1&2\\end{pmatrix}$. The projection is $T^2/4$, whose standard matrix is $\\operatorname{diag}(0,0,1)$. It has the required image and is idempotent; the complementary projection is $I-T^2/4$.


</details>

<a id="section-808-lsp-12-e20-a-second-mixed-factor-inverse-solution"></a>
### LSP-12-E20: a second mixed-factor inverse — solution {#section-810-lsp-12-e20-a-second-mixed-factor-inverse-solution}

<details>
<summary>Solution</summary>


Put $q(t)=-1/2-t/4-t^2/4$. Direct multiplication gives $(t-2)q(t)=1-(t^3-t^2)/4$. Evaluating makes both product orders equal the identity, so $(T-2I)^{-1}=-I/2-T/4-T^2/4$. In characteristic two, $T-2I=T$ and its minimum has factor $t$, so it is not invertible. Indeed, if $T$ were invertible, $T^2(T-I)=0$ would imply $T-I=0$, contradicting its stated minimum. The characteristic restriction is part of the inverse theorem.

</details>

<a id="section-818-summary"></a>
`;export{e as default};