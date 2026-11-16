
# Rational Canonical Form over an Arbitrary Field {#section-1-rational-canonical-form-over-an-arbitrary-field}

Eigenvalue methods depend on polynomial splitting. Rational canonical form does not: it classifies a finite-dimensional operator over its original field using divisibility among monic polynomials. Its blocks are companion matrices and its invariants are unique.

<a id="section-3-1-operators-as-modules"></a>
## 1. Operators as modules {#section-5-1-operators-as-modules}

**Definition 14.1 (The operator module).**

Make $V$ an $\mathbb{F}[t]$-module by $p \cdot v=p(T)v$. Then:

- $\mathbb{F}[t]$-submodules are exactly $T$-invariant subspaces;
- module homomorphisms are exactly linear maps intertwining the operators;
- two operators are similar exactly when their $\mathbb{F}[t]$-modules are isomorphic.

Because $m_T$ annihilates all of $V$, this module is finitely generated and torsion.

<a id="section-15-2-structure-theorem-input"></a>
## 2. Structure theorem input {#section-17-2-structure-theorem-input}

The structure theorem for finitely generated torsion modules over the PID $\mathbb{F}[t]$ gives monic nonconstant polynomials

$f_1 \mid f_2 \mid \ldots \mid f_s$

such that

$V \simeq \oplus_{i=1}^s \mathbb{F}[t]/(f_i)$.

The $f_i$ are uniquely determined and called **invariant factors**. Their product is the characteristic polynomial and the largest is the minimal polynomial:

$\chi_T=\prod_i f_i$, $m_T=f_s$.

The dimension identity is $n=\sum_i \operatorname{deg} f_i$.

We use the PID theorem as a named algebraic input, but also connect it to computable presentation matrices below. A full proof proceeds by Smith normal form using Euclidean row and column operations over $\mathbb{F}[t]$. For the broader module setting and computational examples, see [Modules over PIDs](#/books/finite-algebra-computation/modules-over-pids), the Computational Algebra route's module-and-Smith-form chapter. The polynomial Smith reduction and uniqueness argument used here are also developed in this chapter's later sections.

<a id="section-33-3-companion-blocks"></a>
## 3. Companion blocks {#section-35-3-companion-blocks}

**Definition 14.2 (Companion-block convention).**

For monic

$f(t)=t^d+a_{d-1}t^{d-1}+\ldots+a_0$,

the companion matrix $C(f)$ represents multiplication by $t$ on $\mathbb{F}[t]/(f)$ in basis $(1,t,\ldots,t^{d-1})$:

$C(f)=\begin{pmatrix}0 & \ldots & 0 & -a_0 \\ 1 & \ldots & 0 & -a_1 \\ \vdots & \ddots & \vdots & \vdots \\ 0 & \ldots & 1 & -a_{d-1}\end{pmatrix}$.

Its minimal and characteristic polynomials both equal $f$. Therefore the block diagonal matrix

$C(f_1) \oplus \ldots \oplus C(f_s)$

has exactly the desired module. This is the **rational canonical form** or Frobenius form.

<a id="section-51-4-existence-and-uniqueness-theorem"></a>
## 4. Existence and uniqueness theorem {#section-53-4-existence-and-uniqueness-theorem}

**Theorem 14.3.** Every endomorphism of a nonzero finite-dimensional $F$-space is similar to exactly one block diagonal companion form whose monic block polynomials satisfy $f_1 \mid \ldots \mid f_s$.

Existence follows from the module structure theorem and cyclic quotient bases. Uniqueness follows from uniqueness of invariant factors. “Exactly one” means after fixing the conventional companion layout and block order; arbitrary permutations of blocks represent the same direct sum but not the normalized display.

Unlike Jordan form, rational form exists over every field and needs no eigenvalues.

<a id="section-59-5-elementary-divisors"></a>
## 5. Elementary divisors {#section-61-5-elementary-divisors}

Factor invariant factors into powers of monic irreducibles. The resulting prime powers $p^a$ are the **elementary divisors**. Regrouping cyclic summands by irreducible $p$ recovers primary decomposition.

Invariant factors align prime-power columns so each divides the next. Elementary divisors expose primary pieces and chain sizes. Both multisets determine the similarity class, but they organize the same data differently.

Example over $R$: invariant factors

$f_1=(t-1)$, $f_2=(t-1)^2(t^2+1)$

give elementary divisors $(t-1),(t-1)^2,(t^2+1)$. Over $R$, the quadratic remains one irreducible primary component; over $C$, it splits further.

<a id="section-71-6-computing-from-ti-a"></a>
## 6. Computing from $tI-A$ {#section-73-6-computing-from-ti-a}

Treat $tI-A$ as a matrix over the PID $\mathbb{F}[t]$. Smith normal form gives diagonal entries

$d_1 \mid d_2 \mid \ldots \mid d_n$,

where units may be omitted. The nonunit diagonal entries are the invariant factors. Equivalently, let $\Delta_k$ be the monic gcd of all $k\times k$ minors, with $\Delta_0=1$. Then

$d_k=\Delta_k/\Delta_{k-1}$.

The final determinant $\Delta_n=\chi_A$. Exact polynomial arithmetic is required. Specializing $t$ too early destroys the module presentation.

<a id="section-83-7-cyclicity-tests"></a>
## 7. Cyclicity tests {#section-85-7-cyclicity-tests}

The following are equivalent:

- $T$ has one invariant factor;
- $V$ is cyclic as an $\mathbb{F}[t]$-module;
- there exists $v$ with $(v,Tv,\ldots,T^{n-1}v)$ a basis;
- $\operatorname{deg} m_T=n$;
- $m_T=\chi_T$.

The equivalence follows because a single summand $\mathbb{F}[t]/(f)$ has dimension $\operatorname{deg} f$, while the largest invariant factor is the minimal polynomial and the product is characteristic.

<a id="section-95-8-what-the-form-reveals"></a>
## 8. What the form reveals {#section-97-8-what-the-form-reveals}

From rational form one reads:

- characteristic and minimal polynomials;
- all primary components and nilpotent exponents after factorization;
- dimensions of kernels of $p(T)^k$;
- whether the operator is cyclic or diagonalizable after a specified extension;
- similarity over the original field.

Trace and determinant alone are far coarser. Even characteristic and minimal polynomials together may not classify: invariant-factor multiplicities can differ while their product and largest factor agree.

<a id="section-107-9-relation-to-jordan-form"></a>
## 9. Relation to Jordan form {#section-109-9-relation-to-jordan-form}

If all irreducibles split into linear factors, elementary divisors $(t-\lambda)^k$ correspond to Jordan-block sizes. Rational blocks combine data across irreducibles according to divisibility; Jordan blocks separate by roots. Jordan form offers finer root-labeled pictures after splitting, while rational form preserves the original field and is canonical without root choices.

<a id="section-111-10-computational-boundary"></a>
## 10. Computational boundary {#section-113-10-computational-boundary}

Smith reduction over exact polynomial rings can suffer coefficient growth. Over finite or rational fields, modular and fraction-free methods improve computation. For floating matrices, exact invariant factors and Jordan structure are highly perturbation-sensitive; stable numerical algorithms use Schur forms and invariant subspace separation instead.

<a id="section-115-11-summary"></a>
## Investigation: classify without eigenvalues {#section-695-investigation-classify-without-eigenvalues}

Choose two $4\times 4$ matrices over $\mathbb{F}_2$ with the same characteristic polynomial but different rational forms.

1. Compute their minimal polynomials from power relations.
2. Determine invariant factors and companion blocks.
3. Prove they are not similar using a kernel dimension.
4. Verify the classification by enumerating Krylov spans, not invertible change matrices.

**Investigation solution.** Take $A=I_4$ and $B=C((t+1)^2) \oplus C((t+1)^2)$ over $\mathbb{F}_2$. Both have characteristic polynomial $(t+1)^4$. For $A$, $m_A=t+1$ and invariant factors are four copies of $t+1$. For $B$, $(B+I)^2=0$ but $B+I\ne 0$, so $m_B=(t+1)^2$ and invariant factors are two copies of $(t+1)^2$. They are not similar because $\operatorname{dim} \operatorname{ker}(A+I)=4$ whereas each size-two block contributes one, so $\operatorname{dim} \operatorname{ker}(B+I)=2$. Enumerating nonzero vectors confirms every $A$-Krylov span has dimension one, while a generator at the start of either companion chain has a two-dimensional $B$-Krylov span. This certifies the distinct module structures without searching $GL_4(\mathbb{F}_2)$.
<a id="section-703-12-the-presentation-matrix-records-the-operator-relatio"></a>
## 12. The presentation matrix records the operator relations {#section-705-12-the-presentation-matrix-records-the-operator-relatio}
The matrix $tI-A$ is not chosen just because its determinant is familiar. It records exactly the relations needed to turn polynomial coefficient columns into vectors acted on by $A$. Let $R=F[t]$ and define $\varepsilon:R^n\to F^n$ by
\[
\varepsilon\!\left(\sum_{k=0}^d t^kx_k\right)=
\sum_{k=0}^d A^kx_k,
\]
where each $x_k$ is a constant column. Give the target its $R$-module action $t\cdot v=Av$. Then $\varepsilon$ is an $R$-linear surjection, since every constant column is in its image.

The image of $tI-A$ lies in its kernel: applying $\varepsilon$ turns multiplication by $t$ into multiplication by $A$, so $\varepsilon((tI-A)q)=0$. Conversely, the telescoping identity
\[
t^kx-A^kx=(tI-A)\sum_{j=0}^{k-1}t^{k-1-j}A^jx
\]
holds for every constant column $x$ and $k\ge1$. Summing it shows that any polynomial column differs from the constant column $\varepsilon(q)$ by an element of $\operatorname{im}(tI-A)$. If $\varepsilon(q)=0$, the column itself belongs to that image. Thus the kernel is exactly the image, proving the presentation isomorphism $R^n/(tI-A)R^n\simeq V_A$.

This proof explains the role of each relation: $te_j$ is identified with the column describing $Ae_j$. Once these relations hold, all higher polynomial actions follow. It also makes clear why specializing $t$ to a number too soon loses information: the variable stands for the whole operator action, not for one chosen eigenvalue.

Suppose polynomial matrices $P,Q$ are invertible over $R$ and $D=P(tI-A)Q$. Then $\operatorname{im}D=P(\operatorname{im}(tI-A))$, so $[q]\mapsto[Pq]$ is an isomorphism between the two cokernels, with inverse induced by $P^{-1}$. Right multiplication changes relation generators; left multiplication changes the ambient module coordinates. These are independent choices and therefore matrix equivalence, not a similarity change $P^{-1}AP$ of the original constant operator matrix.

Invertibility is required over $F[t]$. Division by a nonconstant polynomial is not an allowed row operation there. For example, the one-by-one matrix $[t]$ presents the nonzero module $F[t]/(t)$, whereas $[1]$ presents zero. They become equivalent over the rational-function field $F(t)$, where $t$ is a unit, but that changes the coefficient ring and destroys the torsion information being classified.

<a id="section-723-13-follow-one-exact-polynomial-reduction-completely"></a>
## 13. Follow one exact polynomial reduction completely {#section-725-13-follow-one-exact-polynomial-reduction-completely}

**Worked example 14.1 (Smith reduction of a real rotation presentation).**
For $A=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$ over an arbitrary field, start with
\[
M=tI-A=\begin{pmatrix}t&1\\-1&t\end{pmatrix}.
\]
The following operations take place in $F[t]$, and each has an explicit inverse of the same kind:
\[
\begin{pmatrix}t&1\\-1&t\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&t\\t&-1\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&t\\0&-(t^2+1)\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&0\\0&-(t^2+1)\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&0\\0&t^2+1\end{pmatrix}.
\]
The steps are: swap the two columns; replace row 2 by row 2 minus $t$ times row 1; replace column 2 by column 2 minus $t$ times column 1; multiply row 2 by $-1$. In characteristic two, the last step is the identity and all signs are interpreted accordingly.

Thus the nonunit invariant factor is $t^2+1$ and the presented module is cyclic. A direct operator check agrees: $A^2=-I$, and $e_1,Ae_1=e_2$ is a basis. A polynomial of degree below two cannot kill $e_1$, so the minimum is $t^2+1$. This checks the reduction against an independent cyclic-vector certificate rather than relying only on the final diagonal.

Over $R$ the polynomial is irreducible, over $C$ it splits into distinct linear factors, and in characteristic two it equals $(t+1)^2$. The reduction itself remains valid in all these fields. What changes is the factorization used to interpret its primary pieces and diagonalizability. A rational-form calculation over the original field does not require factoring the resulting invariant polynomial at all.

The degree of the product of nonunit diagonal factors is two, matching the dimension of the original vector space. Unit entries contribute zero quotient modules and therefore no vector-space dimension. This explains why discarding an early unit in Smith form is legitimate, while discarding a repeated nonunit factor is not.

A second useful check concerns zero entries. A zero Smith diagonal entry would contribute a free summand $F[t]$, with infinitely many independent powers over $F$. Such a summand cannot occur in the finite-dimensional operator module. Equivalently, $\det(tI-A)$ is a nonzero monic polynomial, so this square presentation has full rank over $F(t)$ and no zero diagonal entries. The torsion hypothesis removes free polynomial directions, not ordinary finite-dimensional vector directions.

<a id="section-752-14-why-the-euclidean-pivot-process-terminates"></a>
## 14. Why the Euclidean pivot process terminates {#section-754-14-why-the-euclidean-pivot-process-terminates}
For polynomial matrices, the basic reduction mechanism can be justified through degree. Allowed moves swap two rows or columns, add a polynomial multiple of one to another, or multiply a row or column by a nonzero constant. Every move is invertible over $F[t]$. Nonzero constants are its units; a positive-degree polynomial is not a unit because degrees add under multiplication.

Choose a nonzero entry as a first pivot and move it to the upper-left corner. If another entry in its column is not divisible by it, divide that entry by the pivot and subtract the quotient times the pivot row. The remaining entry has smaller degree than the pivot. Swapping it into the pivot position strictly decreases pivot degree. The same argument applies to entries in the first row using column operations.

Repeat until the pivot divides every entry in its row and column, then clear those entries. This yields a block matrix $\left(\begin{smallmatrix}a&0\\0&B\end{smallmatrix}\right)$. If $a$ fails to divide an entry of $B$, add that entry's row to the first row. The first pivot stays $a$, while the first row now contains an entry not divisible by $a$. A Euclidean column step therefore produces a strictly lower-degree pivot. Restart clearing with this smaller pivot.

Pivot degree cannot decrease infinitely. Between decreases, the finite first row and column can be cleared by finitely many divisions and subtractions. Hence eventually the cleared pivot divides every remaining entry. Apply the same procedure to the smaller block. Its entries all start as multiples of the first pivot, and row and column additions within the block preserve that property. The next diagonal pivot is therefore a multiple of the first. Induction gives a diagonal divisibility chain.

If a remaining block is zero, leave its zero diagonal entries at the end. Normalize each nonzero pivot to monic by scaling with an inverse leading coefficient, a permitted constant unit. This proves existence of Smith reduction for finite matrices over the Euclidean ring $F[t]$. It does not claim the same degree algorithm works in every PID, where a polynomial degree need not exist.

This is a proof of termination in exact algebra. It is not a bound on coefficient growth or an assertion of floating-point stability. Each inverse move can be retained as a certificate relating the original presentation to the diagonal one. A claimed final diagonal without the allowed transformation relation and divisibility check would leave the main classification obligation unverified.

<a id="section-765-15-determinantal-ideals-give-a-precise-uniqueness-certi"></a>
## 15. Determinantal ideals give a precise uniqueness certificate {#section-767-15-determinantal-ideals-give-a-precise-uniqueness-certi}
For a polynomial matrix $M$, let $J_k(M)$ be the ideal generated by its $k$ by $k$ minors, with $J_0=(1)$. Elementary row and column operations preserve these ideals. To see this for adding a multiple of one row to another, expand each affected minor multilinearly in the changed row. It becomes an old minor plus a polynomial multiple of another old minor, or the extra term is zero because a row repeats. Thus every new minor lies in the old ideal. Applying the inverse row operation proves the reverse inclusion. Row swaps and constant scalings only introduce units; columns obey the same argument.

For $R=F[t]$, each nonzero ideal has a unique monic generator, its gcd. Suppose a Smith diagonal has monic entries $d_1|\cdots|d_r$, followed by zeros. For $k\le r$, every nonzero $k$-minor is a product $d_{i_1}\cdots d_{i_k}$ with $i_1<\cdots<i_k$. Since $i_j\ge j$, each $d_j$ divides $d_{i_j}$, so $d_1\cdots d_k$ divides every such minor. The minor using the first $k$ entries equals that product. Therefore $J_k=(d_1\cdots d_k)$.

It follows that the monic determinantal divisors satisfy $\Delta_k=d_1\cdots d_k$ and $d_k=\Delta_k/\Delta_{k-1}$. Thus a fixed polynomial presentation has at most one normalized Smith diagonal under these operations. This proves the matrix-equivalence uniqueness certificate used in Section 6; it is distinct from merely finding some diagonal matrix.

The largest $k$ with a nonzero minor determines $r$. In the presentation $tI-A$, the full determinant is nonzero, so all $n$ diagonal entries are nonzero. Their product is $\det(tI-A)$ after monic normalization. This identifies the characteristic polynomial in the presentation route, while the module summands identify the minimum as the largest nonunit factor.

The general module structure theorem in Section 2 remains an explicitly named algebraic input. The local reduction and determinantal-ideal argument explain what its matrix certificate means over $F[t]$. The kernel measurements in the next section give an additional intrinsic check on the primary exponents, independent of how a presentation was reduced.

One should keep the normalization conventions: invariant factors omit unit summands, whereas a square Smith diagonal still includes those units. Comparing lists without this convention can make identical module data look different. Multiplying a diagonal factor by a nonzero scalar changes its polynomial expression but not its ideal; requiring monic factors removes that unit ambiguity over a field.

<a id="section-778-16-kernel-dimensions-in-a-cyclic-module-follow-from-a-g"></a>
## 16. Kernel dimensions in a cyclic module follow from a gcd {#section-780-16-kernel-dimensions-in-a-cyclic-module-follow-from-a-g}

**Proposition 14.1 (Cyclic kernels and polynomial gcds).**
Let $f$ be monic of degree $d>0$ and let $T$ be multiplication by $t$ on $F[t]/(f)$. For any polynomial $h$, put $g=\gcd(f,h)$ monic, including $g=f$ when $h=0$. Write $f=g f_0$ and $h=g h_0$. Then $\gcd(f_0,h_0)=1$. A class represented by $r$ is in $\ker h(T)$ exactly when $f$ divides $hr$, equivalently when $f_0$ divides $h_0r$.

Bézout for $f_0,h_0$ proves this is equivalent to $f_0|r$: multiply a Bézout identity by $r$. Consequently all kernel classes are $f_0s+(f)$, with $s$ taken modulo $g$. The map
\[
F[t]/(g)\longrightarrow\ker h(T),\qquad
s+(g)\longmapsto f_0s+(f)
\]
is well-defined, onto and injective. For injectivity, $f|f_0s$ is equivalent to $g|s$ by cancellation in the polynomial domain. Polynomial division gives dimension $\deg g$. Thus
\[
\dim_F\ker h(T)=\deg\gcd(f,h).
\]

This proof supplies the block contribution used in the original kernel-count exercises. When $f=p^a$ for irreducible $p$ of degree $e$ and $h=p^k$, the contribution is $e\min(a,k)$. No Jordan classification is needed. When $h$ is coprime to $f$, the kernel is zero and Bézout also supplies the inverse of $h(T)$. When $f|h$, every class is killed. These boundary cases are contained in the same formula.

**Worked example 14.2 (Recover primary exponents from cyclic kernels).**

For a distinct worked example over $R$, let $p=t^2+1$ and take cyclic summands for $p$ and $p^3$. The underlying dimension is eight. The dimensions of $\ker p(T)^k$ for $k=1,2,3$ are $4,6,8$. Divide successive increments by $e=2$ to get $2,1,1$; these numbers count how many primary cyclic exponents are at least the corresponding $k$. Their consecutive differences show one exponent equal to one, none equal to two, and one equal to three.

More generally, if exponents are $a_1,\ldots,a_\ell$, then
\[
\frac{\dim\ker p(T)^k-\dim\ker p(T)^{k-1}}{\deg p}
=\#\{j:a_j\ge k\}.
\]
The right side is recovered from the operator alone. Differencing it recovers the multiplicity of every exponent. Thus primary kernel data provide an intrinsic uniqueness check on elementary divisors. One must fix the irreducible polynomial and its degree over the declared field; extending the field can split that polynomial and changes which kernels are being measured.


There is a parallel formula for the cyclic space generated by a particular vector. Represent the vector by $r+(f)$ and let $g=\gcd(f,r)$. A polynomial $h$ kills it exactly when $f|hr$. Dividing by $g$ and using coprimality shows this is equivalent to $(f/g)|h$. Hence its monic annihilator is $f/g$, and its Krylov space has dimension $\deg f-\deg g$.

For completeness, if that degree is $\ell$, then $r,Tr,\ldots,T^{\ell-1}r$ are independent: a relation would give an annihilating polynomial of degree below $\ell$. They span every higher iterate because the monic annihilator expresses $T^\ell r$ as a combination of earlier powers, and induction does the same for all higher powers. The zero vector corresponds to $g=f$ and the empty cyclic basis.

Thus a class generates the entire cyclic module exactly when $\gcd(f,r)=1$. Bézout then supplies a polynomial inverse of $r$ modulo $f$, so this is also the unit criterion in the quotient ring. For $f=p^a$ with irreducible $p$, the nongenerators are exactly the multiples of $p$. Over $F_q$ with $\deg p=e$, the full quotient has $q^{ea}$ elements and its multiple-of-$p$ subspace has $q^{e(a-1)}$ elements. Therefore the number of cyclic generators is $q^{ea}-q^{e(a-1)}$. The count follows from unique polynomial remainder coordinates, not from an executed search.

These formulas explain both the reach and the limitation of a Krylov test. A good starting vector may certify cyclicity by exhibiting a full basis. A starting vector with a short annihilator may simply be a nongenerator inside a cyclic module. The investigation's exhaustive tally removes that ambiguity for its finite example; a single failed starting vector does not.

<a id="section-815-17-align-primary-columns-and-keep-cyclicity-separate-fr"></a>
## 17. Align primary columns and keep cyclicity separate from existence {#section-817-17-align-primary-columns-and-keep-cyclicity-separate-fr}
Elementary divisors group by irreducible polynomial, while invariant factors require one divisibility chain. Arrange each irreducible's exponents in increasing order and align the lists on the right, filling missing early positions with exponent zero. Multiplying the aligned prime powers gives factors whose exponents increase for every irreducible, hence each factor divides the next.

**Worked example 14.3 (Align elementary divisors into invariant factors).**

For example, suppose the elementary divisors are $p^2,p^4,q,q^3,r^2$ for distinct monic irreducibles $p,q,r$. The two invariant factors are $p^2q$ and $p^4q^3r^2$. The absent early $r$ entry is a unit, not another cyclic summand. Their product retains every elementary contribution and their largest factor retains the largest exponent of each irreducible. The polynomial CRT combines coprime primary cyclic summands at each aligned position.

A finite-dimensional operator always has rational form, but need not have one cyclic vector spanning the whole space. In a decomposition into several invariant factors, each summand has its own cyclic generator. A vector may have components in several summands, yet its annihilator divides the least common multiple of their annihilators, which is the largest invariant factor. Thus no vector can generate a subspace larger than its degree.

Conversely, with one invariant factor $f$ of degree $n$, the class of 1 has independent powers through $t^{n-1}$, so it is a cyclic generator of the entire space. The dimension argument therefore distinguishes existence of rational form from cyclicity. The presence of companion blocks does not imply that there is only one block.

For a concrete warning, an identity operator on a four-dimensional space has rational form with four one-dimensional blocks. Every vector is an eigenvector, but its nonzero Krylov span is only one-dimensional. A nilpotent or unipotent operator can also have several separate cyclic summands. Testing one starting vector cannot certify that an operator has no global cyclic vector unless a theorem, such as the minimum-degree bound, rules it out.

The original investigation below is designed to make that distinction finite and auditable. Its full vector tally checks all starting vectors, while its power relation and kernel dimensions certify the two module structures. The enumeration is a complete mathematical table for that specified finite example, not a performance benchmark for a classification algorithm.


The primary kernel measurements also explain why the classification is intrinsic. An intertwining isomorphism $S$ satisfies $S\,p(T)^k=p(R)^kS$, so it maps each kernel isomorphically onto the corresponding kernel for the other operator. Their dimensions, and therefore every recovered prime-power multiplicity, agree. Right alignment then determines the same invariant factors. This checks uniqueness from operator data rather than from one particular list of row operations.

Conversely, matching invariant-factor lists provide explicit matching cyclic quotient models, and composing those model isomorphisms gives an invertible intertwiner. Thus existence of the module decomposition and the intrinsic recovery of its factors are distinct ingredients in the similarity classification. The local kernel proof makes the uniqueness data visible, while the retained module theorem supplies the general decomposition input.

Factorization is optional for obtaining rational form but needed for this particular primary interpretation. If an irreducible over $F$ splits over a larger field, the kernel measurements attached to its individual new factors describe finer pieces. That refinement does not contradict uniqueness over $F$: the scalar field and the list of irreducible labels have changed. Every comparison should name the field before comparing factor lists or kernel dimensions.

<a id="section-837-18-complete-krylov-tally-for-the-existing-finite-field-"></a>
## 18. Complete Krylov tally for the existing finite-field investigation {#section-839-18-complete-krylov-tally-for-the-existing-finite-field-}
This completes the existing investigation's last requested verification while preserving its two matrices and valid solution. Over $F_2$, $(t+1)^2=t^2+1$, so the companion block is $\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$. Thus $A=I_4$ and $B(a,b,c,d)=(b,a,d,c)$. In particular $B^2=I$, $B\ne I$, and $(B+I)^2=0$.

For a nonzero vector $v$, the $A$-Krylov space is its line. For $B$, the Krylov space is $\operatorname{span}(v,Bv)$ because $B^2v=v$. Its dimension is one exactly when $Bv=v$, since the only nonzero scalar in $F_2$ is one. The fixed-vector equations are $a=b,c=d$, giving the three nonzero solutions $0011,1100,1111$. All twelve other nonzero vectors give dimension two.

Here four-bit strings denote coordinate columns, and $K_j$ labels a distinct two-dimensional cyclic subspace. The full enumeration is:

| $v$ | $Bv$ | $\dim K_A(v)$ | $\dim K_B(v)$ | $B$-space |
|---|---|---:|---:|---|
| 0001 | 0010 | 1 | 2 | $K_1$ |
| 0010 | 0001 | 1 | 2 | $K_1$ |
| 0011 | 0011 | 1 | 1 | $\operatorname{span}(0011)$ |
| 0100 | 1000 | 1 | 2 | $K_2$ |
| 0101 | 1010 | 1 | 2 | $K_3$ |
| 0110 | 1001 | 1 | 2 | $K_4$ |
| 0111 | 1011 | 1 | 2 | $K_5$ |
| 1000 | 0100 | 1 | 2 | $K_2$ |
| 1001 | 0110 | 1 | 2 | $K_4$ |
| 1010 | 0101 | 1 | 2 | $K_3$ |
| 1011 | 0111 | 1 | 2 | $K_5$ |
| 1100 | 1100 | 1 | 1 | $\operatorname{span}(1100)$ |
| 1101 | 1110 | 1 | 2 | $K_6$ |
| 1110 | 1101 | 1 | 2 | $K_6$ |
| 1111 | 1111 | 1 | 1 | $\operatorname{span}(1111)$ |

The three nonzero vectors of $K_1,\ldots,K_6$ are respectively
\[
\begin{array}{c|ccc}
K_1&0001&0010&0011\\
K_2&0100&1000&1100\\
K_3&0101&1010&1111\\
K_4&0110&1001&1111\\
K_5&0111&1011&1100\\
K_6&1101&1110&0011
\end{array}
\]
together with zero in each plane. The listed pairs and their sums prove that these are six distinct cyclic planes, each with exactly two cyclic generators and one nonzero fixed vector.

Including zero, $A$ has starting-vector tally $(1,15,0)$ for dimensions $(0,1,2)$, while $B$ has $(1,3,12)$. Their distinct nonzero cyclic-subspace counts are fifteen lines for $A$, versus three lines and six planes for $B$. Neither has a four-dimensional Krylov span. This confirms the different rational forms without enumerating invertible change matrices.

For a direct cyclic-summand certificate, $e_1,Be_1=e_2$ and $e_3,Be_3=e_4$ form the standard basis. Their two spans are complementary invariant planes, each with minimum $(t+1)^2$. Also $\ker(B+I)$ has basis $1100,0011$ and dimension two, whereas $\ker(A+I)=F_2^4$. Similarity would preserve that kernel dimension, proving the two operators are not similar despite their common characteristic polynomial.

As an optional changed comparison within this investigation, use $C=C((t+1)^4)$. Its cyclic vector $e_1$ has the full companion basis $(e_1,Ce_1,C^2e_1,C^3e_1)$, so its minimum is $(t+1)^4$, its characteristic polynomial matches the original two, and $\dim\ker(C+I)=1$ by the cyclic gcd formula. More generally, the numbers of its starting vectors with Krylov dimensions $0,1,2,3,4$ are $1,1,2,4,8$: in $F_2[t]/((t+1)^4)$, the subspace killed by $(t+1)^j$ has $2^j$ elements, and consecutive differences count exact cyclic dimensions. This adds a public comparison certificate, not a ninth project.

A complete reconstruction checks the power relations; both invariant-factor lists; the distinguishing kernel dimensions; all fifteen rows and the zero case; and the complementary cyclic-summand basis. The changed comparison has its own gcd and companion-basis checks. These are exact hand-derived tables and proofs, with no software execution, seed or empirical output claimed.

<a id="section-883-19-optional-checks-for-cyclic-kernels-and-exact-present"></a>
## 21. Exact scope of the retained PID input {#section-945-21-exact-scope-of-the-retained-pid-input}
Section 2 already labels the general PID theorem as an import. The imported statement is finite generation over a commutative PID, giving a free part and cyclic nonunit factors in a divisibility chain, unique up to units; torsion removes the free part. A directly verified teaching source is David Zywina's Cornell Math 6310 course, notes by Linus Setiabrata, *Math 6310. Algebra* (2018), Theorem 3.24.1, printed page 54; Smith form is stated and its reduction proved in §3.25, printed pages 55–56, [author-hosted notes](https://math.mit.edu/~setia/6310fa18.pdf), inspected 4 November 2026. This supports the precise retained input, not a priority claim. The polynomial presentation, degree reduction, determinantal-ideal argument, gcd kernels and finite investigation certificates above are developed locally; they do not import Jordan classification or numerical stability.

<a id="section-946-summary"></a>

## Summary

<a id="section-117-11-summary"></a>
The $\mathbb{F}[t]$-module of an operator decomposes uniquely into cyclic quotients with dividing invariant factors. Companion matrices turn those summands into a canonical block form valid over arbitrary fields. Smith form of $tI-A$ provides an exact route to the invariants.

<a id="section-119-exercises-with-full-solutions"></a>

<a id="section-948-summary"></a>
Rational canonical form classifies an operator over its stated field by its ordered monic invariant factors. Polynomial presentations and determinantal divisors justify the classification, while elementary divisors expose the prime-power components. Similarity, ordinary matrix equivalence and floating-point approximation answer different questions.

## Exercises {#section-121-exercises-with-full-solutions}

<a id="section-121-1-submodules-and-invariance"></a>
### 1. Submodules and invariance {#section-123-1-submodules-and-invariance}

Prove an $F$-subspace is an $\mathbb{F}[t]$-submodule iff it is $T$-invariant.

<details>
<summary>Hint 1</summary>

A submodule is closed under multiplication by t.

</details>

<details>
<summary>Hint 2</summary>

Conversely, invariance under T gives closure under every polynomial in T.

</details>

<details>
<summary>Solution</summary>

**Solution.** A submodule is closed under multiplication by $t$, which is $T$, so it is invariant. Conversely invariance under $T$ implies closure under every power and linear combination, hence under every polynomial.


</details>

<a id="section-147-2-intertwiners"></a>
### 2. Intertwiners {#section-149-2-intertwiners}

Prove a linear $S$ is an $\mathbb{F}[t]$-module map iff $ST=RS$ for the source and target operators.

<details>
<summary>Hint 1</summary>

Check the module identity first for the scalar t.

</details>

<details>
<summary>Hint 2</summary>

The relation ST=RS implies the corresponding identity for every power and hence every polynomial.

</details>

<details>
<summary>Solution</summary>

**Solution.** Module linearity for $t$ says $S(Tv)=R(Sv)$. This identity extends by sums and powers to every polynomial; conversely module linearity includes the case $t$.


</details>

<a id="section-173-3-similarity-as-module-isomorphism"></a>
### 3. Similarity as module isomorphism {#section-175-3-similarity-as-module-isomorphism}

Prove the claim.

<details>
<summary>Hint 1</summary>

Translate an intertwining bijection into a change-of-basis equation.

</details>

<details>
<summary>Hint 2</summary>

Module isomorphisms are exactly invertible linear maps S with ST=RS.

</details>

<details>
<summary>Solution</summary>

**Solution.** An invertible intertwiner satisfies $ST=RS$, equivalently $R=STS^{-1}$, which is similarity. The converse equation makes $S$ an invertible module map.


</details>

<a id="section-199-4-companion-action"></a>
### 4. Companion action {#section-201-4-companion-action}

Derive $C(f)$ from multiplication by $t$ modulo $f$.

<details>
<summary>Hint 1</summary>

Use residue classes of 1,t,…,t^{d−1}.

</details>

<details>
<summary>Hint 2</summary>

Reduce t^d modulo the monic f for the last column.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiplication sends $t^j$ to $t^{j+1}$ for $j<d-1$, producing shift columns. It sends $t^{d-1}$ to $t^d=-a_0-\ldots-a_{d-1}t^{d-1}$, producing the last column.


</details>

<a id="section-225-5-companion-minimum"></a>
### 5. Companion minimum {#section-227-5-companion-minimum}

Prove $m_{C(f)}=f$.

<details>
<summary>Hint 1</summary>

The residue class of 1 is cyclic.

</details>

<details>
<summary>Hint 2</summary>

A polynomial kills it exactly when that polynomial is divisible by f.

</details>

<details>
<summary>Solution</summary>

**Solution.** $f(C)=0$ by the quotient relation. The vector $1$ has cyclic list $(1,t,\ldots,t^{d-1})$ independent, so no nonzero polynomial of degree below $d$ kills it. Hence the monic minimum has degree at least $d$ and must be $f$.


</details>

<a id="section-251-6-companion-characteristic-polynomial"></a>
### 6. Companion characteristic polynomial {#section-253-6-companion-characteristic-polynomial}

Prove $\chi_{C(f)}=f$.

<details>
<summary>Hint 1</summary>

Use that the block dimension is deg f.

</details>

<details>
<summary>Hint 2</summary>

Cayley–Hamilton makes the minimal polynomial divide the monic characteristic polynomial of the same degree.

</details>

<details>
<summary>Solution</summary>

**Solution.** The minimal polynomial $f$ divides the characteristic polynomial, and both are monic of degree $d$; therefore they are equal.


</details>

<a id="section-277-7-product-and-largest-factor"></a>
### 7. Product and largest factor {#section-279-7-product-and-largest-factor}

For a rational form, prove $\chi=\prod f_i$ and $m=f_s$.

<details>
<summary>Hint 1</summary>

Use the block diagonal determinant and the least common multiple of block minima.

</details>

<details>
<summary>Hint 2</summary>

The divisibility ordering makes the least common multiple the last invariant factor.

</details>

<details>
<summary>Solution</summary>

**Solution.** Characteristic polynomials multiply across blocks, and each companion block contributes $f_i$. The minimal polynomial of a block direct sum is the lcm of block minima; the divisibility chain makes this lcm $f_s$.


</details>

<a id="section-303-8-dimension-audit"></a>
### 8. Dimension audit {#section-305-8-dimension-audit}

Invariant factors have degrees $2,3,5$. What is $\operatorname{dim} V$?

<details>
<summary>Hint 1</summary>

Each cyclic summand has dimension equal to its defining polynomial's degree.

</details>

<details>
<summary>Hint 2</summary>

Add the dimensions of the direct summands.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each quotient $\mathbb{F}[t]/(f_i)$ has dimension $\operatorname{deg} f_i$, so the total is $2+3+5=10$.


</details>

<a id="section-329-9-valid-invariant-factors"></a>
### 9. Valid invariant factors {#section-331-9-valid-invariant-factors}

Can $t^2+1, t-1$ be listed as invariant factors over $R$?

<details>
<summary>Hint 1</summary>

Invariant factors must form a divisibility chain.

</details>

<details>
<summary>Hint 2</summary>

Neither listed polynomial divides the other over R.

</details>

<details>
<summary>Solution</summary>

**Solution.** Not in that order or any order because neither polynomial divides the other. They instead describe elementary cyclic summands; invariant factors must be recombined/aligned to form a divisibility chain, here a single factor $(t^2+1)(t-1)$ because the factors are coprime.


</details>

<a id="section-355-10-elementary-divisors"></a>
### 10. Elementary divisors {#section-357-10-elementary-divisors}

Find elementary divisors of $f_1=(t-1)(t+1)$, $f_2=(t-1)^3(t+1)^2$.

<details>
<summary>Hint 1</summary>

Factor each invariant factor into powers of irreducibles.

</details>

<details>
<summary>Hint 2</summary>

Each nonunit prime-power factor becomes one elementary divisor.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $\operatorname{char}F\ne2$, they are $(t-1),(t+1),(t-1)^3,(t+1)^2$, retaining one prime-power factor from each invariant-factor contribution. If $\operatorname{char}F=2$, then $t-1=t+1$, so $f_1=(t-1)^2$ and $f_2=(t-1)^5$; the elementary divisors are $(t-1)^2,(t-1)^5$.


</details>

<a id="section-381-11-reassemble-invariant-factors"></a>
### 11. Reassemble invariant factors {#section-383-11-reassemble-invariant-factors}

From elementary divisors $p,p^3,q^2$ with distinct irreducibles $p,q$, find invariant factors.

<details>
<summary>Hint 1</summary>

Sort the powers of each irreducible increasingly and align their largest entries.

</details>

<details>
<summary>Hint 2</summary>

Pad shorter lists on the left with exponent zero, then multiply entries in each column.

</details>

<details>
<summary>Solution</summary>

**Solution.** Align prime powers at the right of the longest list: the first invariant factor is $p$, and the second is $p^3q^2$, giving $p|p^3q^2$.


</details>

<a id="section-407-12-cyclic-equivalence"></a>
### 12. Cyclic equivalence {#section-409-12-cyclic-equivalence}

Prove $\operatorname{deg} m_T=n$ iff there is one invariant factor.

<details>
<summary>Hint 1</summary>

The dimension is the sum of invariant-factor degrees.

</details>

<details>
<summary>Hint 2</summary>

The last degree equals that sum only when every earlier nonunit summand is absent.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\operatorname{deg} m_T=\operatorname{deg} f_s$, while $n=\sum \operatorname{deg} f_i$. All factors have positive degree, so equality holds exactly when there is only the last factor.


</details>

<a id="section-433-13-cyclic-vector-criterion"></a>
### 13. Cyclic vector criterion {#section-435-13-cyclic-vector-criterion}

If $(v,Tv,\ldots,T^{n-1}v)$ is a basis, prove $m_T=\chi_T$.

<details>
<summary>Hint 1</summary>

The vector minimum has degree n because the first n orbit vectors are independent.

</details>

<details>
<summary>Hint 2</summary>

It divides m_T, which divides χ_T, and both latter polynomials have degree at most n.

</details>

<details>
<summary>Solution</summary>

**Solution.** The vector minimal polynomial has degree $n$, divides $m_T$, and $m_T$ divides degree-$n$ $\chi_T$. All monic degrees force equality.


</details>

<a id="section-459-14-a-nonsplitting-form"></a>
### 14. A nonsplitting form {#section-461-14-a-nonsplitting-form}

Find rational form of real rotation $\begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

Act on the first standard basis vector and its image.

</details>

<details>
<summary>Hint 2</summary>

Its orbit is a basis and its minimum is t²+1.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its minimum and characteristic polynomial are $t^2+1$ of degree two, so it is cyclic with one block $C(t^2+1)$, which under the stated companion convention is the same displayed matrix.


</details>

<a id="section-485-15-diagonal-rational-form"></a>
### 15. Diagonal rational form {#section-487-15-diagonal-rational-form}

What are invariant factors of $\operatorname{diag}(\lambda,\lambda,\mu)$ with $\lambda\ne \mu$?

<details>
<summary>Hint 1</summary>

Find the primary elementary divisors first.

</details>

<details>
<summary>Hint 2</summary>

Two λ-eigenvectors give two t−λ factors, while the μ-factor joins the larger invariant factor.

</details>

<details>
<summary>Solution</summary>

**Solution.** Elementary divisors are $(t-\lambda),(t-\lambda),(t-\mu)$. Aligning columns gives $f_1=t-\lambda$ and $f_2=(t-\lambda)(t-\mu)$; their product is the characteristic polynomial and the latter is the minimal polynomial.


</details>

<a id="section-511-16-same-chi-m-different-class"></a>
### 16. Same $\chi,m$, different class {#section-513-16-same-chi-m-different-class}

Give invariant-factor lists with the same product and largest factor but different intermediate factors.

<details>
<summary>Hint 1</summary>

Use several primary blocks of the same eigenvalue.

</details>

<details>
<summary>Hint 2</summary>

Keep their largest exponent and total exponent fixed while changing how the remaining exponents are partitioned.

</details>

<details>
<summary>Solution</summary>

**Solution.** For an irreducible $p$, use $(p,p^2,p^3)$ and $(p^3,p^3)$. Both are valid divisibility chains, both have product $p^6$, and both have largest factor $p^3$, but they are different invariant-factor lists. Their numbers of cyclic summands are three and two; correspondingly, the dimensions of $\ker p(T)$ are $3\deg p$ and $2\deg p$.


</details>

<a id="section-537-17-determinantal-divisors"></a>
### 17. Determinantal divisors {#section-539-17-determinantal-divisors}

If Smith diagonal is $1,p,pq$, find $\Delta_1,\Delta_2,\Delta_3$.

<details>
<summary>Hint 1</summary>

Determinantal divisors are products of the first k Smith entries.

</details>

<details>
<summary>Hint 2</summary>

Include the initial unit entry when forming each product.

</details>

<details>
<summary>Solution</summary>

**Solution.** Products of the first $k$ Smith entries give $\Delta_1=1$, $\Delta_2=p$, $\Delta_3=p^2q$. Nonunit invariant factors are $p,pq$.


</details>

<a id="section-563-18-why-ti-a"></a>
### 18. Why $tI-A$ {#section-565-18-why-ti-a}

Explain why Smith form of $A$ over $F$ does not classify similarity.

<details>
<summary>Hint 1</summary>

Constant row and column operations classify equivalence, not similarity.

</details>

<details>
<summary>Hint 2</summary>

The polynomial presentation tI−A retains the action of t, which an ordinary rank computation discards.

</details>

<details>
<summary>Solution</summary>

**Solution.** Smith form of a constant matrix permits independent row and column changes and records only rank. The polynomial presentation $tI-A$ encodes the action of $t$; polynomial equivalence preserves the full module and hence similarity data.


</details>

<a id="section-589-19-field-change"></a>
### 19. Field change {#section-591-19-field-change}

What happens to a block for irreducible $t^2+1$ after extending $R$ to $C$?

<details>
<summary>Hint 1</summary>

Factor t²+1 over C.

</details>

<details>
<summary>Hint 2</summary>

Its two coprime linear factors split the cyclic module into two eigenspaces.

</details>

<details>
<summary>Solution</summary>

**Solution.** The polynomial splits as $(t-i)(t+i)$ with distinct factors. The corresponding primary module decomposes into the two eigenspaces; a real rational block becomes two complex one-dimensional blocks.


</details>

<a id="section-615-20-diagonalizability-from-elementary-divisors"></a>
### 20. Diagonalizability from elementary divisors {#section-617-20-diagonalizability-from-elementary-divisors}

State and prove the criterion.

<details>
<summary>Hint 1</summary>

Translate diagonalizability into the split square-free minimal-polynomial criterion.

</details>

<details>
<summary>Hint 2</summary>

Every elementary divisor must be linear with exponent one.

</details>

<details>
<summary>Solution</summary>

**Solution.** The operator is diagonalizable over $F$ iff every elementary divisor is linear of exponent one. This is exactly the condition that the minimal polynomial, the lcm of elementary divisors, splits with distinct linear factors.


</details>

<a id="section-641-21-rank-data"></a>
### 21. Rank data {#section-643-21-rank-data}

For elementary divisors $t^2,t^4,t$, compute $\operatorname{dim} \operatorname{ker} T^k$ for $k=1,2,3,4$.

<details>
<summary>Hint 1</summary>

A nilpotent block of size s contributes min(k,s) to dim ker T^k.

</details>

<details>
<summary>Hint 2</summary>

Add the contributions for sizes 2,4,1 at each k.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each cyclic nilpotent block of size $s$ contributes $\min(k,s)$. Thus dimensions are $1+1+1=3$, $2+2+1=5$, $2+3+1=6$, and $2+4+1=7$.


</details>

<a id="section-667-22-numerical-boundary"></a>
### 22. Numerical boundary {#section-669-22-numerical-boundary}

Why is rational canonical form unsuitable as a primary floating-point normal form?

<details>
<summary>Hint 1</summary>

Consider how a tiny perturbation can change exact polynomial factors.

</details>

<details>
<summary>Hint 2</summary>

Canonical exact invariants can be discontinuous even when stable approximate invariant subspaces exist.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its invariant factors depend on exact polynomial gcds and ranks; arbitrarily small perturbations can change them. Coefficient formation and Smith operations amplify error. Stable numerical work instead uses orthogonal/unitary transformations and Schur-type forms with residual and separation estimates.


</details>

<a id="section-693-investigation-classify-without-eigenvalues"></a>

<a id="section-885-19-optional-checks-for-cyclic-kernels-and-exact-present"></a>
### 23. LSP-14-E23. Recover a cyclic kernel from a gcd {#section-886-lsp-14-e23-recover-a-cyclic-kernel-from-a-gcd}

Let $T$ be multiplication by $t$ on $F[t]/((t-1)^4(t+1))$, with $\operatorname{char}F\ne2$. Find $\dim\ker(T-I)^2$ and $\dim\ker(T+I)$. What changes in characteristic two if the same written defining polynomial and operators are interpreted there?

<details>
<summary>Hint 1</summary>

Use dim ker g(T)=deg gcd(g,f) on a cyclic module F[t]/(f).

</details>

<details>
<summary>Hint 2</summary>

When the characteristic is two, t−1 and t+1 coincide, so recompute the gcds with the merged power.

</details>

<a id="section-902-lsp-14-e24-a-nonunit-cannot-be-divided-away"></a>
### 24. LSP-14-E24. A nonunit cannot be divided away {#section-904-lsp-14-e24-a-nonunit-cannot-be-divided-away}

Over $F[t]$, reduce the presentation matrix $\left(\begin{smallmatrix}t&t\\0&t^2\end{smallmatrix}\right)$ to a Smith diagonal using allowed operations. State its cokernel and total dimension over $F$. Explain why dividing the first row by $t$ would change the classification problem.

<details>
<summary>Hint 1</summary>

Subtract the first column from the second.

</details>

<details>
<summary>Hint 2</summary>

The resulting diagonal t,t² already satisfies divisibility; only nonzero constants are units in F[t].

</details>

<a id="section-920-20-solutions-to-the-cyclic-kernel-and-presentation-chec"></a>

## Solutions

<a id="section-922-20-solutions-to-the-cyclic-kernel-and-presentation-chec"></a>
<a id="section-921-lsp-14-e23-recover-a-cyclic-kernel-from-a-gcd-solution"></a>
### LSP-14-E23. Recover a cyclic kernel from a gcd — solution {#section-923-lsp-14-e23-recover-a-cyclic-kernel-from-a-gcd-solution}

<details>
<summary>Solution</summary>


In characteristic different from two, the defining polynomial has distinct prime factors $t-1,t+1$. Its gcds with $(t-1)^2$ and $t+1$ are those same polynomials of degrees two and one. Therefore the kernel dimensions are two and one. In characteristic two, the defining polynomial becomes $(t-1)^5$ and $T+I=T-I$. The gcd with $(t-1)^2$ still has degree two, while the gcd with $t-1$ has degree one, so these two particular dimensions remain two and one. Their numerical equality across the field change does not preserve the factor interpretation: both kernels now belong to one primary component rather than two.


</details>

<a id="section-932-lsp-14-e24-a-nonunit-cannot-be-divided-away-solution"></a>
### LSP-14-E24. A nonunit cannot be divided away — solution {#section-934-lsp-14-e24-a-nonunit-cannot-be-divided-away-solution}

<details>
<summary>Solution</summary>


Replace column 2 by column 2 minus column 1 to obtain $\operatorname{diag}(t,t^2)$; this is already a monic divisibility chain. Its cokernel is $F[t]/(t)\oplus F[t]/(t^2)$, with total vector-space dimension three. The column operation is invertible over $F[t]$, with inverse adding column 1 back. Dividing row 1 by $t$ uses a nonunit and is not an invertible polynomial row operation; it would require moving to $F(t)$ or changing the presented relations. The nonzero torsion information cannot be removed by an illegal division.


</details>

<a id="section-943-21-exact-scope-of-the-retained-pid-input"></a>
