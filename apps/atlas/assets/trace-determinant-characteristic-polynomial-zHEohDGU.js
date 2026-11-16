var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: trace-determinant-characteristic-polynomial
title: "Trace, Determinant, and the Characteristic Polynomial"
level: advanced-undergraduate
estimated_minutes: 225
license: CC BY-SA 4.0
---

# Trace, Determinant, and the Characteristic Polynomial {#section-1-trace-determinant-and-the-characteristic-polynomial}

Trace and determinant compress an operator into scalars; the characteristic polynomial compresses it into a polynomial. These summaries are basis-independent, but incomplete: distinct operators can share all three. Their value lies in identities, obstructions, and the first bridge between linear maps and polynomial algebra.

Throughout $V$ has dimension $n$ over a field $F$, and $T \\in L(V)$.

<a id="section-5-1-trace-as-contraction"></a>
## 1. Trace as contraction {#section-7-1-trace-as-contraction}

**Definition 11.1 (Trace).** For a matrix $A=(a_{ij})$, $\\operatorname{tr} A=\\sum_i a_{ii}$. If $A$ is the matrix of $T$, define $\\operatorname{tr} T=\\operatorname{tr} A$. This is basis-independent because

$\\operatorname{tr}(AB)=\\operatorname{tr}(BA)$

for rectangular compatible matrices: both sides equal $\\sum_{i,j}a_{ij}b_{ji}$. Hence $\\operatorname{tr}(P^{-1}AP)=\\operatorname{tr}(APP^{-1})=\\operatorname{tr} A$.

Trace is linear, $\\operatorname{tr} I=n$ interpreted in $F$, and $\\operatorname{tr}(ST)=\\operatorname{tr}(TS)$. The last identity does not imply $ST=TS$. The commutator $[S,T]=ST-TS$ always has trace zero; over fields where characteristic divides $n$, even $I$ can have trace zero.

Duality offers a structural view. Under $V^{*} \\otimes V \\simeq L(V)$, contraction $\\phi \\otimes v \\to  \\phi(v)$ becomes trace. Thus trace is the canonical contraction of one input and one output index.

<a id="section-17-2-determinant-identities"></a>
## 2. Determinant identities {#section-19-2-determinant-identities}

From the top exterior-power definition,

$\\operatorname{det}(ST)=\\operatorname{det} S \\operatorname{det} T$, $\\operatorname{det} I=1$, and $\\operatorname{det}(P^{-1}TP)=\\operatorname{det} T$.

Also $\\operatorname{det} T^{*}=\\operatorname{det} T$, because transposition leaves the Leibniz formula unchanged. If $T$ is invertible, $\\operatorname{det}(T^{-1})=(\\operatorname{det} T)^{-1}$. Scalar multiplication gives $\\operatorname{det}(aT)=a^n \\operatorname{det} T$, a reminder that determinant magnitude depends strongly on dimension and scale.

<a id="section-25-3-characteristic-polynomial"></a>
## 3. Characteristic polynomial {#section-27-3-characteristic-polynomial}

Define

$\\chi_T(t)=\\operatorname{det}(tI-T) \\in \\mathbb{F}[t]$.

It is monic of degree $n$ and independent of basis. With this sign convention,

$\\chi_T(t)=t^n-(\\operatorname{tr} T)t^{n-1}+\\ldots+(-1)^n \\operatorname{det} T$.

The coefficient identities follow by expanding $\\operatorname{det}(tI-A)$ and sorting terms by how many factors are chosen from $-A$ rather than $tI$; the exterior-power construction gives the general coefficient as $(-1)^k \\operatorname{tr}(\\Lambda^kT)$.

For a block upper triangular matrix $\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix}$,

$\\chi_T=\\chi_A \\chi_C$.

Thus restriction and quotient characteristic polynomials multiply along an invariant subspace.

<a id="section-43-4-eigenvalues-and-roots"></a>
## 4. Eigenvalues and roots {#section-45-4-eigenvalues-and-roots}

A scalar $\\lambda \\in F$ is an eigenvalue iff $T-\\lambda I$ is not invertible, iff

$\\chi_T(\\lambda)=0$.

The implication uses the determinant invertibility criterion. The polynomial may have no root in $F$: real plane rotation has $\\chi(t)=t^2+1$, so it has no real eigenvalue. Passing to a field extension may create roots without changing the displayed coefficients.

The **algebraic multiplicity** of $\\lambda$ is its multiplicity as a root of $\\chi_T$. Its **geometric multiplicity** is $\\operatorname{dim} \\operatorname{ker}(T-\\lambda I)$. Later we prove geometric multiplicity is at most algebraic multiplicity.

<a id="section-53-5-cayley-hamilton"></a>
## 5. Cayley–Hamilton {#section-55-5-cayley-hamilton}

**Theorem 11.2 (Cayley–Hamilton).** **Cayley–Hamilton theorem.** $\\chi_T(T)=0$.

One proof uses the adjugate identity over the polynomial ring:

$(tI-A)\\operatorname{adj}(tI-A)=\\chi_A(t)I$.

Direct substitution $t=A$ into a polynomial-matrix identity is unsafe because matrix coefficients may not commute with $A$. Instead expand $\\operatorname{adj}(tI-A)=B_0+tB_1+\\ldots+t^{n-1}B_{n-1}$. Comparing coefficients gives recurrences whose right-substitution and summation yield $\\chi_A(A)=0$. Equivalently, perform the argument in the commutative subalgebra $\\mathbb{F}[A]$ while keeping coefficient order explicit.

Cayley–Hamilton reduces every high power of $T$ to a combination of $I,T,\\ldots,T^{n-1}$. If $\\operatorname{det} T\\ne 0$, its constant term is nonzero and the identity expresses $T^{-1}$ as a polynomial in $T$.

<a id="section-65-example"></a>
### Example {#section-67-example}

**Worked example 11.3 (A characteristic relation and inverse).**

If $A=\\begin{pmatrix}2 & 1 \\\\ 0 & 3\\end{pmatrix}$, then $\\chi_A(t)=t^2-5t+6$. Hence $A^2-5A+6I=0$, so $A^5$ can be reduced recursively without five multiplications. Since $A$ is invertible, multiplying by $A^{-1}$ gives $A^{-1}=(5I-A)/6$ over a field in which six is invertible.

<a id="section-71-6-minimal-polynomial-preview"></a>
## 6. Minimal polynomial preview {#section-73-6-minimal-polynomial-preview}

The set \${p \\in \\mathbb{F}[t]:p(T)=0}$ is a nonzero ideal because Cayley–Hamilton supplies $\\chi_T$. Its unique monic generator is the **minimal polynomial** $m_T$. Therefore $m_T$ divides every annihilating polynomial, in particular $\\chi_T$.

Trace, determinant, and characteristic polynomial do not classify similarity. The matrices $I_2$ and $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ have trace two, determinant one, and characteristic polynomial $(t-1)^2$; their minimal polynomials are $t-1$ and $(t-1)^2$, so they are not similar.

<a id="section-77-7-newton-identities-and-exterior-coefficients"></a>
## 7. Newton identities and exterior coefficients {#section-79-7-newton-identities-and-exterior-coefficients}

Let $e_k(T)=\\operatorname{tr}(\\Lambda^kT)$, the sum of principal $k$-minors in coordinates. Then

$\\chi_T(t)=\\sum_{k=0}^n (-1)^k e_k(T)t^{n-k}$.

Here $e_0=1$, $e_1=\\operatorname{tr} T$, and $e_n=\\operatorname{det} T$. Newton identities relate these elementary coefficients to power traces $p_k=\\operatorname{tr}(T^k)$. For example, when two is invertible,

$e_2=((\\operatorname{tr} T)^2-\\operatorname{tr}(T^2))/2$.

Division-dependent formulas must be audited in positive characteristic; the integral polynomial identities remain meaningful before division.

<a id="section-89-8-exact-and-computational-boundaries"></a>
## 8. Exact and computational boundaries {#section-91-8-exact-and-computational-boundaries}

Exact characteristic polynomials can be expensive and numerically fragile to compute from floating data. Root-finding can be ill-conditioned, and small coefficient perturbations can move multiple roots dramatically. Stable eigensolvers typically avoid forming $\\chi_T$. Cayley–Hamilton is a theorem about exact operators, not a recommended matrix-power algorithm.

<a id="section-93-9-common-errors"></a>
## 9. Common errors {#section-95-9-common-errors}

- $\\operatorname{tr}(AB)=\\operatorname{tr}(A)\\operatorname{tr}(B)$ is generally false; trace is linear, not multiplicative.
- Equal characteristic polynomials do not imply similarity.
- A characteristic root in an extension field is not automatically an eigenvalue over the original field.
- Substituting a matrix into a polynomial identity with matrix coefficients requires a commutativity/order check.
- In characteristic $p$, integers in trace and coefficient identities are field elements and may vanish.

<a id="section-101-10-summary"></a>
## 11. Development: matrix substitution needs an order convention {#section-576-11-development-matrix-substitution-needs-an-order-conve}

A polynomial with scalar coefficients can be evaluated at an endomorphism because scalar multiples of the identity commute with every power of that endomorphism. A polynomial with arbitrary matrix coefficients requires more care. The indeterminate in a polynomial matrix is central during coefficient arithmetic; the matrix later substituted for it need not commute with those coefficients.

For an explicit failure, fix matrices $A,B$ with $AB\\ne BA$. Define left evaluation by $E(\\sum_jt^jB_j)=\\sum_jA^jB_j$. If $P(t)=B$ and $Q(t)=tI$, then $E(PQ)=AB$ but $E(P)E(Q)=BA$. Thus this evaluation is not a product-preserving map on all matrix-coefficient polynomials. For instance, $A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ and $B=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$ have products $\\operatorname{diag}(1,0)$ and $\\operatorname{diag}(0,1)$.

Consequently, substituting $t=A$ into $(tI-A)\\operatorname{adj}(tI-A)=\\chi_A(t)I$ and announcing that its left side is zero omits a proof. One must either establish the necessary commutation first or manipulate coefficients while preserving order. The next section does the latter.

The adjugate identity itself is a polynomial identity over the commutative ring $F[t]$. Its entries are signed minors, so the entries of $\\operatorname{adj}(tI-A)$ have degree at most $n-1$ when $n\\geq1$. Cofactor expansion proves $(tI-A)\\operatorname{adj}(tI-A)=\\det(tI-A)I$: diagonal entries give the determinant, and off-diagonal entries give a determinant with repeated rows. This step is legitimate because its scalar entries commute.

A useful distinction is between two multiplications. Multiplication of scalar polynomial entries occurs in the commutative ring $F[t]$. Multiplication of their matrix arrays still has a specified order. Passing from the former observation to an assertion that every resulting matrix coefficient commutes with $A$ would be an additional argument, not a field axiom.

The issue is not that matrices can never replace indeterminates. A single scalar-coefficient polynomial, or an expression inside the subalgebra $F[A]$, has a consistent evaluation. The warning concerns transferring a product identity across an evaluation map without checking its hypotheses. Stating the coefficient order makes the proof inspectable over every field and avoids relying on diagonalisation or eigenvalue splitting.

<a id="section-588-12-development-complete-the-ordered-cayley-hamilton-tel"></a>
## 12. Development: complete the ordered Cayley–Hamilton telescope {#section-590-12-development-complete-the-ordered-cayley-hamilton-tel}

Assume $n\\geq1$ and write $\\chi_A(t)=c_0+c_1t+\\cdots+c_{n-1}t^{n-1}+t^n$. Expand the adjugate as $B_0+tB_1+\\cdots+t^{n-1}B_{n-1}$. Comparing coefficients in the adjugate identity gives

$$-AB_0=c_0I,\\qquad
B_{k-1}-AB_k=c_kI\\quad(1\\leq k\\leq n-1),\\qquad
B_{n-1}=I.$$

These are equalities of matrices with the displayed order. Multiply the middle equality for index $k$ on the left by $A^k$, multiply the last equality on the left by $A^n$, and keep the first equality. The resulting left sides are

$$-AB_0,\\quad
A^kB_{k-1}-A^{k+1}B_k,\\quad
A^nB_{n-1}.$$

Their sum is zero: each negative term cancels the next positive term in exactly the same order. The right-side sum is $c_0I+c_1A+\\cdots+c_{n-1}A^{n-1}+A^n$. Hence $\\chi_A(A)=0$. No step commuted $A$ past a $B_k$, and no unjustified product evaluation was used.

For $n=1$, there are no middle terms; $B_0=I$ and the first equality already gives the conclusion. For the zero-dimensional space, the characteristic polynomial is the empty determinant $1$. Its evaluation is $I_{\\{0\\}}$, which is the zero endomorphism, so Cayley–Hamilton holds there too without an adjugate expansion.

The same coefficient relations explain afterward why the adjugate coefficients happen to commute with $A$. Starting from $B_{n-1}=I$, solve downward: $B_{k-1}=AB_k+c_kI$. Each $B_k$ is therefore a scalar polynomial in $A$. This is a derived fact. Assuming it before the coefficient argument would skip the very justification that makes substitution safe.

The proof is basis-independent in its conclusion. Choosing a basis supplied $A$, but evaluating a scalar polynomial respects change of basis: $p(P^{-1}AP)=P^{-1}p(A)P$. Thus the zero polynomial operator identity transfers back to $T$. The temporary matrices $B_k$ belong to the proof, rather than becoming new intrinsic choices in the theorem's statement.

Cayley–Hamilton establishes an exact annihilating relation. It neither says that this relation has smallest possible degree nor that repeated matrix multiplication using it is numerically stable. Those are different claims. The next chapter obtains the smallest monic relation by polynomial division and then distinguishes an operator relation from a relation holding only on one vector.

<a id="section-612-13-development-derive-the-exterior-coefficients-without"></a>
## 13. Development: derive the exterior coefficients without eigenvalues {#section-614-13-development-derive-the-exterior-coefficients-without}

Fix an ordered basis $e_1,\\ldots,e_n$, with column matrix $A$ for $T$. For increasing $k$-element index sets $I,J$, the coefficient of $e_I=e_{i_1}\\wedge\\cdots\\wedge e_{i_k}$ in $\\Lambda^kT(e_J)$ is $\\det A[I,J]$. Expand each $Te_j$ as a column combination and use multilinearity of the wedge. Repeated row indices vanish; the distinct indices reorder with permutation signs. Their coefficient sum is exactly the determinant of the indicated submatrix.

Taking the diagonal entries of this exterior matrix gives

$$e_k(T)=\\operatorname{tr}(\\Lambda^kT)
       =\\sum_{|I|=k}\\det A[I,I].$$

The sum uses principal minors, with the same row and column set. General minors describe the other entries of the exterior map; they are not all added to obtain its trace. At $k=0$, the exterior space is $F$ and its induced map is the identity, giving $e_0=1$. At $k=n$, the single principal minor is $\\det A$.

Now expand $\\det(tI-A)$ multilinearly in its columns. Select a subset $I$ of columns from $-A$ and take $te_j$ in the other columns. If $|I|=k$, the scalar factor is $(-1)^kt^{n-k}$. Expansion along the retained standard columns leaves the principal minor $A[I,I]$; paired row and column deletions give positive cofactor sign. Summing over the subsets yields

$$\\det(tI-A)=\\sum_{k=0}^n(-1)^ke_k(T)t^{n-k}.$$

This proves the coefficient identity over the original field. It assumes neither a diagonal basis nor that the characteristic polynomial splits. The eigenvalue formula in original Exercise 16 is a convenient special case, rather than the only route to the result.

For $n=3$, the second elementary coefficient is the sum of the three principal two-by-two minors. Explicitly it is $(a_{11}a_{22}-a_{12}a_{21})+(a_{11}a_{33}-a_{13}a_{31})+(a_{22}a_{33}-a_{23}a_{32})$. The off-diagonal products carry information that a product of diagonal entries alone would miss.

Alternation remains the governing rule in characteristic two. Repeated wedge inputs still vanish, while a minus sign becomes a plus sign in the field. The displayed formulas retain their signed notation with integers interpreted in $F$. They do not rely on deriving alternation from skew-symmetry by dividing by two. This is precisely the field boundary established in the preceding exterior-power chapter.

<a id="section-633-14-development-derive-the-division-free-newton-identiti"></a>
## 14. Development: derive the division-free Newton identities {#section-635-14-development-derive-the-division-free-newton-identiti}

Set $D(s)=\\det(I-sA)=\\sum_{k=0}^n(-1)^ke_ks^k$ and $p_j=\\operatorname{tr}(A^j)$ for $j\\geq1$. Use formal power series in $s$: a series is a list of coefficients, and multiplication at any specified degree uses only a finite sum. No analytic convergence or small real value of $s$ is being assumed.

The formal inverse of $I-sA$ is $\\sum_{r\\geq0}s^rA^r$, as direct multiplication cancels each positive-degree coefficient. Therefore the adjugate identity gives $\\operatorname{adj}(I-sA)=D(s)\\sum_{r\\geq0}s^rA^r$. The determinant here is scalar, so it commutes with every matrix coefficient.

Differentiating the finite Leibniz formula for $D$ chooses one differentiated entry in each product. Grouping the resulting terms by that entry gives

$$D'(s)=-\\operatorname{tr}\\{A\\,\\operatorname{adj}(I-sA)\\}
       =-D(s)\\sum_{j\\geq1}p_js^{j-1}.$$

The first equality is cofactor differentiation: the derivative of entry $-sa_{ij}$ is $-a_{ij}$, and the trace pairs it with adjugate entry $ji$. This derivation uses the product rule and finite sums, with no division by a characteristic-dependent integer.

Compare coefficients of $s^{k-1}$. After collecting signs, the result for $1\\leq k\\leq n$ is

$$k e_k=\\sum_{j=1}^k(-1)^{j-1}e_{k-j}p_j.$$

With $e_k=0$ for $k>n$, coefficient comparison also gives the same identity beyond degree $n$. In particular, $e_1=p_1$, $2e_2=p_1^2-p_2$, and $3e_3=e_2p_1-e_1p_2+p_3$. These are identities before any attempt to solve for $e_k$. Formal differentiation in characteristic $p$ is still valid; it simply multiplies a coefficient by the field element represented by its degree.

Multiplying the third identity by two and using the second gives $6e_3=p_1^3-3p_1p_2+2p_3$. This undivided identity also holds when two or three vanish in the field. Dividing its two sides by six would then be invalid and would discard the actual boundary.

If every integer from one through $n$ is invertible in $F$, the recurrence determines the elementary coefficients successively from power traces. This holds in characteristic zero and in characteristic greater than $n$. For a smaller characteristic, retain the equations as constraints and compute missing coefficients by another method, such as principal minors. A formal generating series is a way to organize finite coefficient proofs, not a license to ignore which inverses exist.

<a id="section-656-15-development-calculate-coefficients-and-locate-lost-i"></a>
## 15. Development: calculate coefficients and locate lost information {#section-658-15-development-calculate-coefficients-and-locate-lost-i}

**Worked example 11.4 (Recovering coefficients from power traces).**

Over $\\mathbb Q$, consider $A=\\begin{pmatrix}1&1&0\\\\0&2&1\\\\0&0&3\\end{pmatrix}$. Products of upper triangular matrices have diagonal entries equal to the products of the corresponding diagonal entries. Hence $p_1=6$, $p_2=14$ and $p_3=36$, without finding an eigenbasis.

Newton's identities give $e_1=6$, $e_2=(36-14)/2=11$, and $3e_3=11\\cdot6-6\\cdot14+36=18$, so $e_3=6$. Therefore $\\chi_A(t)=t^3-6t^2+11t-6$. The block-triangular determinant independently gives $(t-1)(t-2)(t-3)$, checking every sign and coefficient.

The same integer array can be interpreted in another field, but the rational division procedure cannot be transferred blindly. In characteristic two the displayed traces all become zero, while the reduced characteristic polynomial is $t^3+t$. In particular its second elementary coefficient is one. The equation $2e_2=p_1^2-p_2$ becomes zero equals zero and cannot recover that coefficient.

There is a stronger obstruction over $\\mathbb F_p$. Compare the identity matrix and the zero matrix of size $p$. Every positive power of the identity has trace $p=0$ in the field, while every positive power of the zero matrix also has trace zero. Nevertheless their characteristic polynomials are $(t-1)^p=t^p-1$ and $t^p$, and their determinants are one and zero.

The equality $(t-1)^p=t^p-1$ follows because the intermediate binomial coefficients are divisible by the prime $p$. Thus even the infinite collection of all power traces need not determine the characteristic polynomial in this characteristic. More trace calculations do not repair information that those invariants cannot distinguish.

This does not make trace or Newton's equations false. It specifies their exact scope. A scalar invariant can be useful for excluding similarity without being complete for classifying it. In characteristic zero, power traces through degree $n$ recover the characteristic polynomial by the recurrence, yet that polynomial still does not classify similarity. For example, the original identity and nontrivial Jordan block share it while their minimal polynomials differ.

A computation should therefore report both the invariant being recovered and the field in which recovery is justified. “All traces agree” may imply equal characteristic coefficients in one field and fail to do so in another. Even when the coefficients agree, a further structural classification question remains.

<a id="section-674-16-development-use-contraction-with-the-correct-dual-ty"></a>
## 16. Development: use contraction with the correct dual type {#section-676-16-development-use-contraction-with-the-correct-dual-ty}

For a vector $v$ and a linear functional $\\phi\\in V^{*}$, let $R(x)=\\phi(x)v$. In a chosen basis, write $v=\\sum_i v_ie_i$ and $\\phi=\\sum_j\\phi_je^j$. The matrix entries of $R$ are $v_i\\phi_j$, so

$$\\operatorname{tr}R=\\sum_i v_i\\phi_i=\\phi(v).$$

This verifies the contraction description directly. Its scalar is independent of the basis even though the coordinate factors change. Every matrix is a sum of such coordinate rank-one maps, so the rank-one calculation determines the linear contraction rule on all endomorphisms.

The same map satisfies $R^2(x)=\\phi(x)\\phi(v)v=\\phi(v)R(x)$. If $\\phi(v)=1$, it is a projection onto the line through $v$, with kernel $\\ker\\phi$. If $\\phi(v)=0$ but both factors are nonzero, it is a nonzero square-zero map. Thus trace zero can coexist with a nonzero operator even in dimension two.

**Worked example 11.5 (Zero trace with a nonzero square-zero map).**

For example, on $F^2$ take $v=e_1$ and $\\phi=e^2$. Then $R(e_2)=e_1$, $R(e_1)=0$, and its matrix has a single one above the diagonal. Its trace and determinant vanish, but its minimal polynomial is $t^2$. This links the scalar contraction with an actual operator relation, rather than treating trace zero as a geometric description of the whole map.

Here $V^{*}$ is the algebraic dual, as in Chapter 8. The dual operator has matrix $A^{\\mathsf T}$ in the dual basis. Over $\\mathbb C$, this transpose does not conjugate entries. For a one-dimensional operator with scalar $i$, the algebraic dual also has scalar $i$, so its determinant equals the original determinant.

An inner-product adjoint is a different construction, introduced later. With the usual complex inner product that same operator has adjoint scalar $-i$. Replacing the algebraic dual by this adjoint would conjugate the determinant and would change the meaning of the identity in Section 2. Types, rather than the star symbol alone, decide which statement is being used.

Trace is consequently useful in several roles: a coordinate sum, a basis-free contraction and a coefficient of a polynomial. Their equality has been justified, but none adds positivity, an inner product or an ordinary integer-valued rank in positive characteristic.

<a id="section-694-17-development-reduce-powers-without-claiming-numerical"></a>
## 17. Development: reduce powers without claiming numerical stability {#section-696-17-development-reduce-powers-without-claiming-numerical}

The original two-by-two example has relation $A^2=5A-6I$. Repeated exact substitution gives $A^3=19A-30I$, $A^4=65A-114I$ and $A^5=211A-390I$. Each step multiplies the previous remainder by $A$ and replaces its quadratic term using the same relation. No commutation issue arises because every coefficient is scalar.

A scalar-polynomial calculation packages the argument. Divide $t^N$ by $\\chi_A(t)$, writing $t^N=q(t)\\chi_A(t)+r(t)$ with $\\deg r<n$. Evaluation gives $A^N=r(A)$ by Cayley–Hamilton. If a lower-degree annihilating polynomial is known, division by it gives an even shorter remainder. The characteristic relation supplies an upper bound on the necessary degree, not necessarily the optimal one.

For $n\\geq1$, write $\\chi_A(t)=\\sum_{j=0}^nc_jt^j$ with $c_n=1$. If $c_0\\ne0$, the identity rearranges to

$$A\\left\\{\\sum_{j=1}^nc_jA^{j-1}\\right\\}=-c_0I.$$

All factors are polynomials in $A$, so the bracket times $-c_0^{-1}$ is both a left and a right inverse. For the displayed example this is $(5I-A)/6$, with the stated requirement that six be nonzero. In a field where the same integer array becomes singular, that denominator is not merely a software inconvenience.

Exact reduction may still be a poor floating-point method. Large scalar coefficients can cancel, rounded inputs need not satisfy the displayed relation exactly, and a small coefficient perturbation can change a multiple root's structure. A theorem that certifies a zero residual in exact arithmetic does not supply a bound for those errors.

The calculations above are hand-derived identities with their field conditions, not output from an executed power algorithm. They prepare polynomial calculus: the next chapter proves the division and annihilator statements and explains why one orbit may obey a shorter relation than the whole operator.

<a id="section-710-18-development-a-trace-criterion-for-nilpotence-has-a-f"></a>
## 18. Development: a trace criterion for nilpotence has a field boundary {#section-712-18-development-a-trace-criterion-for-nilpotence-has-a-f}

The coefficient identities give a useful positive theorem. Assume $n\\geq1$, that every integer from one through $n$ is invertible in $F$, and that $\\operatorname{tr}(A^j)=0$ for $1\\leq j\\leq n$. Newton's recurrence first gives $e_1=0$, then $e_2=0$, and inductively every $e_k=0$, because every term on its right contains a zero power trace and its left coefficient $k$ can be inverted.

Consequently $\\chi_A(t)=t^n$, and Cayley–Hamilton gives $A^n=0$. Thus vanishing of the first $n$ power traces forces nilpotence under the stated field condition. It is not necessary to test infinitely many powers or to find eigenvalues.

The converse holds over every field: a nilpotent endomorphism has all positive power traces zero. To see this without a splitting theorem, suppose $N^r=0$ and form the finite increasing sequence $\\{0\\}=\\ker N^0\\subseteq\\ker N\\subseteq\\cdots\\subseteq\\ker N^r=V$. Extend a basis successively along this sequence, using the finite basis-extension theorem.

For a basis vector first appearing at level $j$, its image under $N$ lies in level $j-1$, because $N^jv=0$ implies $N^{j-1}(Nv)=0$. Its column therefore uses only earlier basis vectors. The matrix is strictly upper triangular, and every positive power has zero diagonal. Basis invariance of trace proves the assertion for the original operator. No order, conjugation or analytic limit entered the proof.

Together these arguments establish an equivalence in characteristic zero or characteristic greater than $n$. In smaller characteristic only the nilpotent-to-traces direction is generally available: the identity operator of dimension $p$ in characteristic $p$ supplies the explicit failure of the converse.

Even in characteristic zero the conclusion is nilpotence, not that the operator vanishes. The nonzero square-zero rank-one map in Section 16 already distinguishes those statements. Likewise, $\\operatorname{tr}(A^2)$ is not generally a sum of nonnegative squares: its entry formula is $\\sum_{i,j}a_{ij}a_{ji}$. Positivity would require additional real symmetry or an appropriate adjoint, neither part of this theorem. This is why an invariant's algebraic meaning must be kept separate from a norm interpretation.

For a two-dimensional check over $\\mathbb Q$, $\\operatorname{diag}(1,-1)$ has trace zero but second-power trace two. It is not nilpotent, since its square is the identity. Checking only the first trace would miss this obstruction. By contrast the square-zero example has both traces zero and satisfies the conclusion. The theorem specifies which finite collection of invariants is sufficient, rather than treating one vanishing summary as decisive.

<a id="section-726-19-primary-source-scope-for-the-coefficient-arguments"></a>
## 19. Primary-source scope for the coefficient arguments {#section-728-19-primary-source-scope-for-the-coefficient-arguments}

For related order and substitution discussions, see Keith Conrad's author notes [Universal Identities, Section 2](https://kconrad.math.uconn.edu/blurbs/linmultialg/univid.pdf). Darij Grinberg's author paper [The trace Cayley–Hamilton theorem, Sections 3.3–3.7](https://arxiv.org/pdf/2510.20689) records division-free coefficient identities over commutative rings. These sections were consulted for scope, not as a substitute for the field-level derivations above. No full-paper, historical-priority or broader ring-theory qualification is claimed.

<a id="section-730-20-optional-practice-extensions"></a>

## Summary

<a id="section-103-10-summary"></a>
Trace is canonical contraction, determinant is the top exterior action, and the characteristic polynomial joins them as its first and last nontrivial coefficients. Roots detect eigenvalues over the stated field. Cayley–Hamilton guarantees an annihilating polynomial and opens polynomial operator theory.

<a id="section-105-exercises-with-full-solutions"></a>

<a id="section-794-summary"></a>
Trace and determinant are similarity invariants, and the characteristic polynomial organizes their coefficient information. Cayley–Hamilton follows from an ordered polynomial identity without substituting into noncommuting products carelessly. Exterior coefficients and undivided Newton identities expose field-sensitive recovery limits. Polynomial calculus next uses these identities to analyze generated invariant subspaces.

## Exercises {#section-107-exercises-with-full-solutions}

<a id="section-107-1-cyclic-trace"></a>
### 1. Cyclic trace {#section-109-1-cyclic-trace}

Prove $\\operatorname{tr}(ABC)=\\operatorname{tr}(BCA)=\\operatorname{tr}(CAB)$ for square compatible matrices.

<details>
<summary>Hint 1</summary>

Group two of the three factors into one matrix.

</details>

<details>
<summary>Hint 2</summary>

Apply the two-factor trace identity twice without commuting arbitrary factors.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply $\\operatorname{tr}(XY)=\\operatorname{tr}(YX)$ with $X=AB,Y=C$ to get $\\operatorname{tr}(ABC)=\\operatorname{tr}(CAB)$, then with $X=CA,Y=B$ to get $\\operatorname{tr}(CAB)=\\operatorname{tr}(BCA)$.


</details>

<a id="section-133-2-commutator-obstruction"></a>
### 2. Commutator obstruction {#section-135-2-commutator-obstruction}

Prove every commutator has trace zero.

<details>
<summary>Hint 1</summary>

Expand the trace of the difference.

</details>

<details>
<summary>Hint 2</summary>

Use cyclicity for the two terms.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\operatorname{tr}(ST-TS)=\\operatorname{tr}(ST)-\\operatorname{tr}(TS)=0$ by cyclic trace.


</details>

<a id="section-159-3-converse-failure"></a>
### 3. Converse failure {#section-161-3-converse-failure}

Over characteristic zero, show every trace-zero $2 by 2$ diagonal matrix is a commutator.

<details>
<summary>Hint 1</summary>

Try off-diagonal matrix units for the two factors.

</details>

<details>
<summary>Hint 2</summary>

Choose one scalar coefficient to match the requested diagonal entry.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $D=\\operatorname{diag}(a,-a)$, take $S=\\begin{pmatrix}0 & a \\\\ 0 & 0\\end{pmatrix}$, $T=\\begin{pmatrix}0 & 0 \\\\ 1 & 0\\end{pmatrix}$. Then $ST-TS=\\operatorname{diag}(a,-a)$.


</details>

<a id="section-185-4-trace-in-characteristic"></a>
### 4. Trace in characteristic {#section-187-4-trace-in-characteristic}

If $\\operatorname{dim} V=p$ over characteristic $p$, compute $\\operatorname{tr} I$.

<details>
<summary>Hint 1</summary>

Trace sums the diagonal ones as a field element.

</details>

<details>
<summary>Hint 2</summary>

Interpret the integer p in the stated characteristic.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is the field element represented by integer $p$, hence zero. This does not make $I$ the zero operator.


</details>

<a id="section-211-5-determinant-scaling"></a>
### 5. Determinant scaling {#section-213-5-determinant-scaling}

Prove $\\operatorname{det}(aT)=a^n \\operatorname{det} T$.

<details>
<summary>Hint 1</summary>

Apply scaling to every image in a top wedge.

</details>

<details>
<summary>Hint 2</summary>

There are n independently scaled factors.

</details>

<details>
<summary>Solution</summary>

**Solution.** On the top wedge, $(aT)v_1 ∧\\ldots∧(aT)v_n=a^n(Tv_1 ∧\\ldots∧ Tv_n)$.


</details>

<a id="section-237-6-constant-and-next-coefficient"></a>
### 6. Constant and next coefficient {#section-239-6-constant-and-next-coefficient}

Identify the constant and $t^{n-1}$ coefficients of $\\chi_T$.

<details>
<summary>Hint 1</summary>

Evaluate the determinant polynomial at zero for the constant term.

</details>

<details>
<summary>Hint 2</summary>

For the next term, select exactly one diagonal entry of −T and the remaining t factors.

</details>

<details>
<summary>Solution</summary>

**Solution.** At $t=0$, $\\operatorname{det}(-T)=(-1)^n \\operatorname{det} T$. Terms contributing to degree $n-1$ select one $-a_{ii}$ and all other diagonal $t$ factors, summing to $-\\operatorname{tr} T$.


</details>

<a id="section-263-7-block-factorization"></a>
### 7. Block factorization {#section-265-7-block-factorization}

Prove $\\chi_{\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix}}=\\chi_A\\chi_C$.

<details>
<summary>Hint 1</summary>

Inspect the block structure of tI−M.

</details>

<details>
<summary>Hint 2</summary>

Use the block-triangular determinant factorization.

</details>

<details>
<summary>Solution</summary>

**Solution.** $tI-M$ is block upper triangular with diagonal blocks $tI-A,tI-C$; its determinant is the product of their determinants.


</details>

<a id="section-289-8-eigenvalue-criterion"></a>
### 8. Eigenvalue criterion {#section-291-8-eigenvalue-criterion}

Prove $\\lambda$ is an eigenvalue iff $\\chi_T(\\lambda)=0$.

<details>
<summary>Hint 1</summary>

Rewrite the root condition as singularity of T−λI.

</details>

<details>
<summary>Hint 2</summary>

A square finite-dimensional map is singular exactly when it has a nonzero kernel.

</details>

<details>
<summary>Solution</summary>

**Solution.** A nonzero eigenvector lies in $\\operatorname{ker}(T-\\lambda I)$, so that map is singular and its determinant zero. Conversely determinant zero makes the map noninvertible; for a square finite-dimensional map, its kernel is nonzero.


</details>

<a id="section-315-9-field-extension"></a>
### 9. Field extension {#section-317-9-field-extension}

Find the characteristic polynomial of a 90-degree real rotation and interpret it over $R$ and $C$.

<details>
<summary>Hint 1</summary>

Compute det(tI−R).

</details>

<details>
<summary>Hint 2</summary>

Factor over each named field and distinguish real from complex eigenvectors.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $\\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$, it is $t^2+1$. It has no real roots, hence no real eigenvalues; over $C$ it factors $(t-i)(t+i)$ and both roots are eigenvalues after scalar extension.


</details>

<a id="section-341-10-verify-cayley-hamilton-in-dimension-two"></a>
### 10. Verify Cayley–Hamilton in dimension two {#section-343-10-verify-cayley-hamilton-in-dimension-two}

For $A=\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}$, verify $A^2-(a+d)A+(ad-bc)I=0$.

<details>
<summary>Hint 1</summary>

Compute the entries of all three matrix terms.

</details>

<details>
<summary>Hint 2</summary>

Verify both diagonal and off-diagonal cancellation explicitly.

</details>

<details>
<summary>Solution</summary>

**Solution.** Direct multiplication gives diagonal entries $a^2+bc-(a+d)a+ad-bc=0$ and similarly for the second; off-diagonal entries are $ab+bd-(a+d)b=0$ and $ca+dc-(a+d)c=0$.


</details>

<a id="section-367-11-reduce-a-power"></a>
### 11. Reduce a power {#section-369-11-reduce-a-power}

If $T^2-3T+2I=0$, express $T^4$ in terms of $T,I$.

<details>
<summary>Hint 1</summary>

Use the quadratic relation to replace every occurrence of T².

</details>

<details>
<summary>Hint 2</summary>

Multiply once to reduce T³, then once more to reduce T⁴.

</details>

<details>
<summary>Solution</summary>

**Solution.** $T^2=3T-2I$; then $T^3=3T^2-2T=7T-6I$ and $T^4=7T^2-6T=15T-14I$.


</details>

<a id="section-393-12-polynomial-inverse"></a>
### 12. Polynomial inverse {#section-395-12-polynomial-inverse}

If $T^3+2T-I=0$, prove $T$ invertible and find its inverse.

<details>
<summary>Hint 1</summary>

Rearrange the polynomial identity into a product with T.

</details>

<details>
<summary>Hint 2</summary>

All displayed factors are polynomials in T, so check the inverse on both sides.

</details>

<details>
<summary>Solution</summary>

**Solution.** Rearranging gives $T(T^2+2I)=I$. An endomorphism with a right inverse in finite dimension is invertible, so $T^{-1}=T^2+2I$.


</details>

<a id="section-419-13-similarity-invariants"></a>
### 13. Similarity invariants {#section-421-13-similarity-invariants}

Prove similar operators have the same characteristic polynomial.

<details>
<summary>Hint 1</summary>

Express tI−P⁻¹AP as a conjugate of tI−A.

</details>

<details>
<summary>Hint 2</summary>

Use multiplicativity of determinant and inverse-factor cancellation.

</details>

<details>
<summary>Solution</summary>

**Solution.** $tI-P^{-1}AP=P^{-1}(tI-A)P$; determinant multiplicativity cancels the determinants of $P^{-1},P$.


</details>

<a id="section-445-14-incompleteness"></a>
### 14. Incompleteness {#section-447-14-incompleteness}

Show $I_2$ and $J=\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ share trace, determinant, and characteristic polynomial but are not similar.

<details>
<summary>Hint 1</summary>

Compute the three invariants directly.

</details>

<details>
<summary>Hint 2</summary>

Compare the dimensions of the kernels of A−I, or observe that every conjugate of I remains I.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both invariants are $2,1,(t-1)^2$. Similarity to $I_2$ would give $P^{-1}I_2P=I_2$, never $J$; equivalently their kernels of $T-I$ have dimensions two and one.


</details>

<a id="section-471-15-transpose-invariants"></a>
### 15. Transpose invariants {#section-473-15-transpose-invariants}

Prove $A$ and $A^T$ have equal trace, determinant, and characteristic polynomial.

<details>
<summary>Hint 1</summary>

Trace compares diagonal entries.

</details>

<details>
<summary>Hint 2</summary>

For determinants reindex permutations, then apply the same fact to tI−A.

</details>

<details>
<summary>Solution</summary>

**Solution.** Diagonal entries give equal trace. The Leibniz formula is unchanged after reindexing inverse permutations, giving equal determinant. Then $\\operatorname{det}(tI-A^T)=\\operatorname{det}((tI-A)^T)=\\operatorname{det}(tI-A)$.


</details>

<a id="section-497-16-exterior-coefficient"></a>
### 16. Exterior coefficient {#section-499-16-exterior-coefficient}

For eigenvalues $\\lambda_1,\\ldots,\\lambda_n$ in a diagonal basis, compute $\\operatorname{tr}(\\Lambda^kT)$.

<details>
<summary>Hint 1</summary>

Apply the exterior map to increasing-index wedges of eigenvectors.

</details>

<details>
<summary>Hint 2</summary>

Sum their eigenvalue products to take its trace.

</details>

<details>
<summary>Solution</summary>

**Solution.** Exterior basis vector $e_{i_1} ∧ \\ldots ∧ e_{i_k}$ has eigenvalue product $\\lambda_{i_1}\\ldots \\lambda_{i_k}$. Trace is the sum over all $k$-subsets, the $k$th elementary symmetric polynomial.


</details>

<a id="section-523-17-positive-characteristic-audit"></a>
### 17. Positive-characteristic audit {#section-525-17-positive-characteristic-audit}

Why can the displayed formula for $e_2$ fail as a usable formula in characteristic two?

<details>
<summary>Hint 1</summary>

Locate the division in the proposed coefficient formula.

</details>

<details>
<summary>Hint 2</summary>

The undivided identity may remain true while no longer determining the unknown coefficient.

</details>

<details>
<summary>Solution</summary>

**Solution.** Division by two is impossible because two is zero and has no inverse. The undivided Newton identity $2e_2=(\\operatorname{tr} T)^2-\\operatorname{tr}(T^2)$ still holds, but reduces to a constraint rather than solving for $e_2$.


</details>

<a id="section-549-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-551-18-numerical-boundary}

Why is $\\left|\\operatorname{det} A\\right|$ alone not a scale-free conditioning measure?

<details>
<summary>Hint 1</summary>

Compare A with a nonzero scalar multiple.

</details>

<details>
<summary>Hint 2</summary>

A scale-free normwise condition number and determinant respond differently.

</details>

<details>
<summary>Solution</summary>

**Solution.** Replacing $A$ by $cA$ multiplies determinant by $\\left|c\\right|^n$ while leaving a normwise condition number unchanged. Dimension and units can make determinant tiny for a perfectly conditioned map, so a numerical conclusion requires scaling and singular-value or condition estimates.

</details>

<a id="section-574-11-development-matrix-substitution-needs-an-order-conve"></a>

<a id="section-732-20-optional-practice-extensions"></a>
### 19. LSP-11-E19: recover the adjugate coefficients in dimension three {#section-736-lsp-11-e19-recover-the-adjugate-coefficients-in-dimensi}

Suppose $\\chi_A(t)=t^3+c_2t^2+c_1t+c_0$ and $\\operatorname{adj}(tI-A)=B_0+tB_1+t^2B_2$. Derive $B_2,B_1,B_0$ from coefficient comparison, then derive Cayley–Hamilton using the constant equation. Explain why this reasoning does not assume commutation of arbitrary matrix coefficients.

<details>
<summary>Hint 1</summary>

Multiply the ordered polynomial matrices and compare coefficients of t.

</details>

<details>
<summary>Hint 2</summary>

Recover the highest coefficient first, recurse downwards, and use the constant equation last.

</details>

<a id="section-752-lsp-11-e20-identical-power-traces-in-characteristic-two"></a>
### 20. LSP-11-E20: identical power traces in characteristic two {#section-754-lsp-11-e20-identical-power-traces-in-characteristic-two}

Over $\\mathbb F_2$, compare $A=I_2$ and $B=0_2$. Compute all positive power traces and both characteristic polynomials. State what this example shows about recovering characteristic coefficients by dividing Newton identities.

<details>
<summary>Hint 1</summary>

Compute positive powers before interpreting their traces in F₂.

</details>

<details>
<summary>Hint 2</summary>

Compare the resulting polynomials and identify which division step is unavailable.

</details>

<a id="section-770-21-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-772-21-solutions-to-practice-extensions"></a>
<a id="section-772-lsp-11-e19-recover-the-adjugate-coefficients-in-dimensi"></a>
### LSP-11-E19: recover the adjugate coefficients in dimension three — solution {#section-774-lsp-11-e19-recover-the-adjugate-coefficients-in-dimensi}

<details>
<summary>Solution</summary>

The top coefficient gives $B_2=I$. The next gives $B_1-AB_2=c_2I$, hence $B_1=A+c_2I$. Then $B_0-AB_1=c_1I$ gives $B_0=A^2+c_2A+c_1I$. Finally $-AB_0=c_0I$ gives $A^3+c_2A^2+c_1A+c_0I=0$. Each multiplication retains $A$ on the left of its coefficient. Only after these recurrences are solved is it known that the particular $B_j$ are scalar polynomials in $A$; no general product-substitution rule was assumed.


</details>

<a id="section-782-lsp-11-e20-identical-power-traces-in-characteristic-two"></a>
### LSP-11-E20: identical power traces in characteristic two — solution {#section-784-lsp-11-e20-identical-power-traces-in-characteristic-two}

<details>
<summary>Solution</summary>

For every $k\\geq1$, $A^k=I_2$ and $\\operatorname{tr}(A^k)=2=0$ in $\\mathbb F_2$. Also $B^k=0_2$ has trace zero. Yet $\\chi_A(t)=(t-1)^2=t^2+1$ and $\\chi_B(t)=t^2$, with determinants one and zero. The undivided identity for $e_2$ reduces to $0=0$ for both matrices. There is no inverse of two with which to extract their different second coefficients, and additional power traces remain identical.

</details>


<a id="section-792-summary"></a>
`;export{e as default};