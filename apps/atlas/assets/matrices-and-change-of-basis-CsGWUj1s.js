var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: matrices-and-change-of-basis
title: "Matrices, Equivalence, and Change of Basis"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Matrices, Equivalence, and Change of Basis {#section-1-matrices-equivalence-and-change-of-basis}

A matrix is not a linear map. It is the coordinate record of a linear map after ordered bases have been chosen in both domain and codomain. That distinction explains why the same map has many matrices, why composition becomes multiplication, and why similarity, equivalence, and congruence obey different transformation laws.

This chapter turns the coordinate isomorphisms of Chapter 3 and the structural map theory of Chapter 5 into a disciplined calculus. Unless stated otherwise, every space is finite-dimensional over a field $F$; no order, norm, or notion of rounding is assumed.

<a id="section-5-1-coordinate-records-of-maps"></a>
## 1. Coordinate records of maps {#section-7-1-coordinate-records-of-maps}

**Definition 6.1 (Representing matrix).** Let $B=(v_1,\\ldots,v_n)$ be an ordered basis of $V$ and $C=(w_1,\\ldots,w_m)$ an ordered basis of $W$. For $T:V\\to W$, the **matrix of $T$ from $B$ to $C$** is the unique matrix

$[T]_C\\leftarrow B \\in M_{m by n}(F)$

satisfying

$[T(v)]_C=[T]_C\\leftarrow B [v]_B$.

Its $j$th column is $[T(v_j)]_C$. The arrow matters: input coordinates use $B$, output coordinates use $C$.

<a id="section-17-worked-example"></a>
### Worked example {#section-19-worked-example}

**Worked example 6.2 (An evaluation matrix).**

Let $T:\\mathbb{R}_2[x]\\to \\mathbb{R}^2$ be $T(p)=(p(0),p(1))$. With $B=(1,x,x^2)$ and $C=(e_1,e_2)$, the images have coordinates $(1,1)$, $(0,1)$, $(0,1)$, so

$[T]_C\\leftarrow B=\\begin{pmatrix}1 & 0 & 0 \\\\ 1 & 1 & 1\\end{pmatrix}$.

For $p=2-x+3x^2$, multiplying by $(2,-1,3)^T$ gives $(2,4)^T$, exactly $(p(0),p(1))^T$.

The assignment $T \\to  [T]_C\\leftarrow B$ is a vector-space isomorphism $L(V,W)\\to M_{m by n}(F)$. Matrix units therefore give $\\operatorname{dim} L(V,W)=mn$.

<a id="section-29-2-composition-forces-matrix-multiplication"></a>
## 2. Composition forces matrix multiplication {#section-31-2-composition-forces-matrix-multiplication}

**Theorem 6.3 (Composition in compatible coordinates).** For $T:U\\to V$ and $S:V\\to W$, with bases $A,B,C$,

$[S \\circ T]_C\\leftarrow A=[S]_C\\leftarrow B [T]_B\\leftarrow A$.

Indeed, applying both sides to $[u]_A$ gives

$[S(Tu)]_C=[S]_C\\leftarrow B[T(u)]_B=[S]_C\\leftarrow B[T]_B\\leftarrow A[u]_A$.

The rightmost map acts first. Matrix sizes audit the types: an $r by m$ matrix times an $m by n$ matrix is $r by n$.

The identity has matrix $I_n$ when the same basis is used on both sides. If $T$ is an isomorphism, $[T^{-1}]_B\\leftarrow C=([T]_C\\leftarrow B)^{-1}$.

<a id="section-43-3-change-of-coordinate-matrices"></a>
## 3. Change-of-coordinate matrices {#section-45-3-change-of-coordinate-matrices}

For two ordered bases $B,B'$ of $V$, define

$P_B\\leftarrow B'=[I_V]_B\\leftarrow B'$.

Thus $[v]_B=P_B\\leftarrow B'[v]_{B'}$. Its columns are the $B$-coordinates of the vectors of $B'$, and its inverse is $P_B'\\leftarrow B$.

If $T:V\\to W$, domain bases are $B,B'$, and codomain bases are $C,C'$, then

$[T]_{C'}\\leftarrow B'=P_{C'}\\leftarrow C [T]_C\\leftarrow B P_B\\leftarrow B'$.

This formula can be reconstructed by following coordinates rather than memorized. Convert $B'$ input coordinates to $B$, apply the old matrix, then convert $C$ output coordinates to $C'$.

<a id="section-57-worked-basis-change"></a>
### Worked basis change {#section-59-worked-basis-change}

**Worked example 6.4 (Coordinate conversion).**

On $\\mathbb{R}^2$, let $B=(e_1,e_2)$ and $B'=((1,1),(1,-1))$. Then

$P_B\\leftarrow B'=\\begin{pmatrix}1 & 1 \\\\ 1 & -1\\end{pmatrix}$,

and, over a field of characteristic not two,

$P_B'\\leftarrow B=(\\frac{1}{2})\\begin{pmatrix}1 & 1 \\\\ 1 & -1\\end{pmatrix}$.

If $T(x,y)=(x+2y,3y)$, its standard matrix is $A=\\begin{pmatrix}1 & 2 \\\\ 0 & 3\\end{pmatrix}$, while its $B'$-matrix is $P^{-1}AP=\\begin{pmatrix}3 & -2 \\\\ 0 & 1\\end{pmatrix}$.

<a id="section-71-4-similarity-one-operator-one-changing-basis"></a>
## 4. Similarity: one operator, one changing basis {#section-73-4-similarity-one-operator-one-changing-basis}

For an endomorphism $T:V\\to V$, changing the single basis from $B$ to $B'$ gives

$[T]_{B'}=P^{-1}[T]_B P$, where $P=P_B\\leftarrow B'$.

Matrices related by $A'=P^{-1}AP$ are **similar**. Similarity is an equivalence relation and means precisely that the matrices describe isomorphic operator pairs $(V,T)$ after a change of basis.

Similarity preserves every basis-independent operator property: invertibility, rank, nullity, traces and determinants once constructed, polynomial identities, invariant-factor data, and dimensions of kernels of powers. It need not preserve entries, individual columns, or Euclidean lengths unless the change is appropriately orthogonal or unitary.

<a id="section-81-5-equivalence-independent-domain-and-codomain-bases"></a>
## 5. Equivalence: independent domain and codomain bases {#section-83-5-equivalence-independent-domain-and-codomain-bases}

For a map $T:V\\to W$, domain and codomain bases may change independently. Matrices $A,A' \\in M_{m by n}(F)$ are **equivalent** when

$A'=Q^{-1}AP$

for invertible $P \\in GL_n(F)$ and $Q \\in GL_m(F)$. This is less restrictive than similarity. Two $m by n$ matrices over a field are equivalent exactly when they have the same rank.

<a id="section-89-rank-normal-form-theorem"></a>
### Rank normal form theorem {#section-91-rank-normal-form-theorem}

If $\\operatorname{rank} T=r$, choose a basis $(v_1,\\ldots,v_n)$ of $V$ so that $(v_{r+1},\\ldots,v_n)$ is a basis of $\\operatorname{ker} T$ and $(Tv_1,\\ldots,Tv_r)$ is a basis of $\\operatorname{im} T$. Extend the latter to a basis of $W$. In these bases,

$[T]=\\begin{pmatrix}I_r & 0 \\\\ 0 & 0\\end{pmatrix}$.

Therefore rank is the complete invariant under matrix equivalence. It is not a complete invariant under similarity: $I_2$ and $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ have equal rank but are not similar because the first satisfies $A-I=0$ and the second does not.

<a id="section-97-6-row-and-column-operations-interpreted"></a>
## 6. Row and column operations interpreted {#section-99-6-row-and-column-operations-interpreted}

Left multiplication by an elementary matrix performs a row operation; it changes the codomain coordinate system. Right multiplication performs the corresponding column operation; it changes the domain coordinate system. Gaussian reduction uses both kinds of invertible moves and thus proves equivalence to rank normal form.

For a homogeneous system $Ax=0$, row operations preserve the solution set in the fixed input coordinates because $EAx=0$ iff $Ax=0$. Column operations generally change coordinate descriptions of solutions; they correspond to the invertible substitution $x=Py$. Treating both as identical operations hides this difference.

<a id="section-103-7-four-transformation-laws-four-questions"></a>
## 7. Four transformation laws, four questions {#section-105-7-four-transformation-laws-four-questions}

- **Equality** $A'=A$: the same coordinate array.
- **Equivalence** $A'=Q^{-1}AP$: one map, independent bases in domain and codomain; classified by rank.
- **Similarity** $A'=P^{-1}AP$: one endomorphism, one basis used on both sides.
- **Congruence** $A'=P^TAP$ (or conjugate transpose in a sesquilinear setting): one bilinear form after both inputs change together.

Similarity is not congruence. Their invariants and classification theorems differ because their types differ.

<a id="section-112-8-matrix-units-and-elementary-operators"></a>
## 8. Matrix units and elementary operators {#section-114-8-matrix-units-and-elementary-operators}

Relative to bases $B,C$, let $E_{ij}$ have a single one in row $i$, column $j$. It represents the map sending $v_j$ to $w_i$ and every other $v_k$ to zero. The $mn$ matrix units form a basis of $M_{m by n}(F)$ and their corresponding maps form a basis of $L(V,W)$.

For square matrix units,

$E_{ij}E_{kl}=\\delta_{jk}E_{il}$.

This formula encodes composition: the output direction of the right map must match the input direction recognized by the left map.

<a id="section-122-9-exact-structure-versus-numerical-computation"></a>
## 9. Exact structure versus numerical computation {#section-124-9-exact-structure-versus-numerical-computation}

Over an exact field, rank is an integer determined by nonzero minors or row reduction. With floating-point data, nearly dependent columns can cross a threshold under perturbation. Row reduction without pivoting can magnify rounding error, and an exactly invertible matrix can be computationally ill-conditioned.

This chapter proves algebraic identities. It does not authorize conclusions such as “a small pivot is zero.” Numerical rank requires a norm, an error model, a scale, and a declared tolerance; stable algorithms belong to the numerical linear algebra volume.

<a id="section-128-10-common-errors"></a>
## 10. Common errors {#section-130-10-common-errors}

**Dropping the bases.** $[T]$ is ambiguous when several bases are active. Carry the coordinate arrow until the choice is stable.

**Reversing change matrices.** Reconstruct the formula by following a coordinate vector through conversions.

**Using similarity for a rectangular map.** Similarity concerns an endomorphism; general maps use equivalence.

**Calling row reduction a similarity.** Ordinary row reduction left-multiplies only and therefore usually changes the operator if domain and codomain have been identified.

**Assuming rank is numerically exact.** Exact nonzero and reliably distinguishable from zero are different claims.

<a id="section-140-11-summary"></a>
## 12. Coordinate arrows distinguish copies of the same column space {#section-615-12-coordinate-arrows-distinguish-copies-of-the-same-col}

An ordered basis defines an isomorphism from an abstract space to a coordinate space. Two bases of one $n$-dimensional space both produce numerical columns in $F^n$, but the decoding functions differ. A column is not fully specified for geometric interpretation until its basis label is known. This remains important when two matrices have compatible sizes.

Let $T:V\\to V$ be an endomorphism, but record it from basis $B$ to a different basis $C$, giving $A=[T]_{C\\leftarrow B}$. The output of this array is a $C$-coordinate column. A second copy of $A$ expects a $B$-coordinate column. Therefore the matrix representing $T^2$ from $B$ to $C$ is
\\[
 [T^2]_{C\\leftarrow B}
 =A\\,P_{B\\leftarrow C}\\,A,
\\]
rather than automatically $A^2$. The middle change is required by types. The usual power formula becomes valid when the same basis is used for every input and output.

For a small test over $R$, let $T=I$, let $B$ be standard, and let $C=((1,1),(0,1))$. The matrix whose columns are the $B$-coordinates of $C$ is
\\[
 Q=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix},
 \\qquad
 A=Q^{-1}=\\begin{pmatrix}1&0\\\\-1&1\\end{pmatrix}.
\\]
The identity endomorphism has this nonidentity array because the input and output bases differ. A second identity still has array $A$ from $B$ to $C$. Indeed $AQA=A$, while $A^2=\\begin{pmatrix}1&0\\\\-2&1\\end{pmatrix}\\ne A$. The erroneous square performs a second transformation on the coordinate numbers without the required decoding and re-encoding.

This example diagnoses a common misunderstanding of similarity. An endomorphism may be recorded using two different bases, but similarity describes the more restrictive comparison in which one basis is used on both sides before the change and another single basis on both sides afterwards. The underlying equality of domain and codomain alone does not make every displayed coordinate record a similarity representation.

A reliable multiplication check has two stages. Check the numerical dimensions, then check the labels of the intermediate coordinate space. If they disagree, insert the appropriate identity-map coordinate matrix. That matrix represents a change of description, not a new operation on the original vector. Conversely, if the labels already agree, no extra conversion belongs in the product. These two checks make composition a consequence of types rather than a visual guess from square array shapes.

<a id="section-636-13-one-rectangular-map-with-two-independent-basis-chang"></a>
## 13. One rectangular map with two independent basis changes {#section-638-13-one-rectangular-map-with-two-independent-basis-chang}

**Worked example 6.5 (Independent input and output bases).**

Use the map from the preceding chapter,
\\[
 T:F^3\\to F^2,\\qquad T(x,y,z)=(x+z,y+2z),
 \\qquad
 A=\\begin{pmatrix}1&0&1\\\\0&1&2\\end{pmatrix}
\\]
in standard bases $B,C$. Choose a new domain basis
\\[
 B'=(e_1+e_2,\\ e_2+e_3,\\ e_3)
\\]
and an independently chosen codomain basis
\\[
 C'=(f_1+f_2,\\ f_2).
\\]
The conversion matrices from new coordinates to old coordinates are
\\[
 P=\\begin{pmatrix}1&0&0\\\\1&1&0\\\\0&1&1\\end{pmatrix},
 \\qquad Q=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}.
\\]
Both are invertible over every field. Their inverse formulas are obtained by solving triangular coordinate equations:
\\[
 P^{-1}=\\begin{pmatrix}1&0&0\\\\-1&1&0\\\\1&-1&1\\end{pmatrix},
 \\qquad Q^{-1}=\\begin{pmatrix}1&0\\\\-1&1\\end{pmatrix}.
\\]
No division by two is involved; these remain basis changes in characteristic two.

First multiply on the right. The columns of $AP$ are the standard outputs of the three new input basis vectors:
\\[
 AP=\\begin{pmatrix}1&1&1\\\\1&3&2\\end{pmatrix}.
\\]
Then convert their output coordinates:
\\[
 A'=Q^{-1}AP
 =\\begin{pmatrix}1&1&1\\\\0&2&1\\end{pmatrix}.
\\]
This is a $2$ by $3$ record. A conjugation $P^{-1}AP$ is not even defined: the domain and codomain have different dimensions and their coordinate conversions have different sizes.

Check the result without trusting a product. A new input column $(a,b,c)^{\\mathsf T}$ decodes to $(a,a+b,b+c)$ in the standard domain. Applying $T$ gives $(a+b+c,a+3b+2c)$. In the $C'$ basis, the vector $(u,v)$ has coordinates $(u,v-u)$, so the output column is $(a+b+c,2b+c)^{\\mathsf T}$, exactly $A'(a,b,c)^{\\mathsf T}$. This independent generic-vector check verifies every column and the direction of both conversions.

In characteristic two the middle lower entry of $A'$ vanishes, but its first and third columns are still independent. A disappearing integer entry is not by itself a rank loss. Conversely the old example with columns $(1,1)$ and $(1,-1)$ ceases to be a basis in characteristic two. The relevant question is whether a conversion map is an isomorphism over the declared field, not whether its array looks familiar from real arithmetic.

The same map now has two records and one kernel. Standard kernel vectors are scalar multiples of $(-1,-2,1)$. Multiplying that direction by $P^{-1}$ gives $(-1,-1,2)$ in $B'$ coordinates, which $A'$ sends to zero. Different coordinate columns can describe the same abstract direction. Equality of kernel dimensions is invariant; equality of their numerical coordinate sets requires a fixed input basis.

<a id="section-683-14-rank-normal-form-deserves-explicit-witnesses"></a>
## 14. Rank normal form deserves explicit witnesses {#section-685-14-rank-normal-form-deserves-explicit-witnesses}

For the same map, define a third domain basis
\\[
 B''=(e_1,e_2,k),\\qquad k=(-1,-2,1).
\\]
Its first two images are $f_1,f_2$, and its last image is zero. Thus its matrix in $B''$ and standard codomain coordinates is
\\[
 J=\\begin{pmatrix}1&0&0\\\\0&1&0\\end{pmatrix}.
\\]
The change matrix and inverse are explicit:
\\[
 P_0=\\begin{pmatrix}1&0&-1\\\\0&1&-2\\\\0&0&1\\end{pmatrix},
 \\qquad
 P_0^{-1}=\\begin{pmatrix}1&0&1\\\\0&1&2\\\\0&0&1\\end{pmatrix}.
\\]
Multiplying $AP_0$ gives $J$. The products $P_0P_0^{-1}$ and $P_0^{-1}P_0$ are identities because the off-diagonal additions cancel. These are exact witnesses for equivalence to rank normal form, not just a rank count.

The witness also solves every inhomogeneous system. In new input coordinates, $Ju=(a,b)$ forces $u_1=a$, $u_2=b$ and leaves $u_3=t$ free. Decoding gives
\\[
 x=P_0(a,b,t)^{\\mathsf T}
   =(a-t,b-2t,t)^{\\mathsf T}.
\\]
The free coordinate is the coefficient of the kernel basis vector. Setting it to zero selects a right inverse; it is a choice of representative, not a proof that other solutions are redundant observations.

This calculation shows exactly how the structural theorem becomes a coordinate algorithm. Choose a kernel basis, choose lifts of an image basis, and extend an image basis in the codomain if needed. The resulting matrices display reached and forgotten directions. The theorem already proves that the construction works in general; the explicit witness here makes its choices and their reversibility visible in one instance.

It also explains why a rank normal form does not classify an endomorphism's iteration. The construction permits independent input and output bases. If one starts with an operator on one space and uses different bases for its two roles, the resulting block $J$ records a map but need not record that operator in a single basis. Multiplying its coordinate array repeatedly without conversions would silently change the problem. Kernel/image accounting and operator dynamics ask different classification questions.

Finally, an exact witness can be checked by multiplication without invoking determinants or a numerical tolerance. If the entries came from uncertain measurements, the certificate would instead certify the chosen exact input array. Whether that array represents the measurements faithfully is a separate data and perturbation question. Algebraic reversibility supplies no bound on how errors in those measurements propagate.

<a id="section-714-15-row-operations-transport-the-equations-and-the-right"></a>
## 15. Row operations transport the equations and the right-hand side {#section-716-15-row-operations-transport-the-equations-and-the-right}

A system has two inputs: its coefficient map and its right-hand side. Left multiplication by an invertible $E$ converts
\\[
 Ax=b\\quad\\hbox{to}\\quad EAx=Eb.
\\]
These systems have the same solutions in fixed input coordinates because $E$ is injective. Multiplying only the coefficient array while keeping $b$ unchanged generally gives a different problem. For a homogeneous system the distinction is hidden because $E0=0$.

With $A$ from the worked rectangular map and
\\[
 E=\\begin{pmatrix}1&0\\\\-1&1\\end{pmatrix},
 \\qquad b=\\begin{pmatrix}1\\\\0\\end{pmatrix},
\\]
one obtains
\\[
 EA=\\begin{pmatrix}1&0&1\\\\-1&1&1\\end{pmatrix},
 \\qquad Eb=\\begin{pmatrix}1\\\\-1\\end{pmatrix}.
\\]
The original solution $x=e_1$ still solves the transformed system. It fails the altered system with right-hand side $(1,0)^{\\mathsf T}$, since $(EA)e_1=(1,-1)^{\\mathsf T}$. This is an exact counterexample to treating the right-hand side as decoration.

Right multiplication has another meaning. Replacing $x$ by $Pu$ gives $APu=b$, with solutions transported back by $x=Pu$. In the rank-normal witness above, the numerical solution set to $Ju=b$ is not the old solution set to $Ax=b$ as a subset of one fixed coordinate space. The invertible change is what relates them. Column operations must therefore be recorded together with variable changes when reporting solutions.

The same bookkeeping gives certificates. If a proposed $x$ has residual $r=Ax-b$, its transformed residual is $Er$. The statement $r=0$ is equivalent to $Er=0$. A small norm of $Er$ need not imply the same numerical size of $r$, because that would require a bound on $E^{-1}$ in a chosen norm. Thus row-equivalent exact systems may have differently scaled residual displays. The exact theorem proves equality of zero sets, not equality of residual magnitudes.

A practical derivation can keep a short ledger: current equations, current right-hand side, current input-coordinate map, and inverse input-coordinate map. Each row move updates the first two; each column move updates the first and the variable map. At the end, decode free variables into the original input coordinates and verify them in the original equation. This procedure is justified by the identities above and prevents an otherwise correct elimination from answering a different system.

<a id="section-740-16-equivalence-forgets-distinctions-that-similarity-ret"></a>
## 16. Equivalence forgets distinctions that similarity retains {#section-742-16-equivalence-forgets-distinctions-that-similarity-ret}

Over $R$, take $A=\\operatorname{diag}(1,2)$ and $I_2$. They have the same full rank and are equivalent: choosing $Q=A$ and $P=I_2$ gives $Q^{-1}AP=I_2$. This changes output coordinates independently of input coordinates. As operators represented in a single basis they are not similar. Every conjugate of $I_2$ is still $I_2$, whereas $A\\ne I_2$. No determinant or eigenvalue computation is needed for that distinction.

The dynamical difference is concrete. Applying $A$ twice sends $(x,y)$ to $(x,4y)$; the identity leaves it unchanged. Under independent input/output conversions, iterating the simplified array without intermediate basis conversions is not iterating the original operator. Rank normal form intentionally discards this matching between input and output roles. Similarity retains it by using one conversion and its inverse on the same space.

More generally, if $A'=P^{-1}AP$ then $A'P^{-1}=P^{-1}A$: decoding and applying the two operators commute. A vector satisfying $Av=0$ corresponds to $P^{-1}v$ in the new kernel, and the same calculation for powers gives
\\[
 (A')^jP^{-1}v=P^{-1}A^jv.
\\]
Thus sequences of iterates, kernels of powers and invariant-subspace relations are transported together. Independent equivalence has no corresponding power identity unless the middle conversions happen to cancel. This explains structurally why later canonical forms classify operators using similarity rather than general matrix equivalence.

The allowable invariant must match the classification question. Equal rank is enough for equivalence of matrices of the same rectangular size over a field. It does not prove two operators are similar, even when their arrays are square. Conversely, different coordinate entries do not prove operators are different: a simultaneous input/output basis change may account for them. One should first ask which relation is allowed, then compute a quantity that it preserves.

There is a useful boundary on the rank statement itself. It is a theorem over a field, where each nonzero pivot can be inverted. Over the integers the one-entry matrices $(1)$ and $(2)$ have the same rational rank, but invertible one-entry integer changes are only $(1)$ and $(-1)$. Their left and right products cannot turn one into two. General-ring classification is outside this book's field theorem; changing the coefficient system changes the permitted isomorphisms.

<a id="section-756-17-a-form-changes-both-inputs-rather-than-an-output-vec"></a>
## 17. A form changes both inputs rather than an output vector {#section-758-17-a-form-changes-both-inputs-rather-than-an-output-vec}

The congruence law in the chapter's transformation table can be derived by following its types. Let $\\beta:V\\times V\\to F$ be bilinear and write
\\[
 \\beta(v,w)=[v]_B^{\\mathsf T}H[w]_B.
\\]
A new basis with conversion $[v]_B=P[v]_{B'}$ gives
\\[
 \\beta(v,w)=[v]_{B'}^{\\mathsf T}(P^{\\mathsf T}HP)[w]_{B'}.
\\]
Both slots are inputs, so the left factor is a transpose, not an inverse output conversion. This differs from a linear map $V\\to V$, whose output is a vector that must be re-encoded.

For $\\beta(v,w)=v_1w_1+v_2w_2$ over $R$, the standard form matrix is $H=I_2$. If the first new basis vector is doubled and the second unchanged, $P=\\operatorname{diag}(2,1)$. The new form matrix is $\\operatorname{diag}(4,1)$, because the first coordinate coefficient appears in both inputs. Meanwhile the identity operator still has single-basis matrix $P^{-1}I_2P=I_2$. The arrays start from the same numerical identity but describe objects with different types and hence different transformation laws.

This calculation does not yet classify forms; that later topic needs additional field and symmetry hypotheses. It supplies an early test for a proposed formula. Ask whether its columns encode output vectors, input coefficients, covectors or two-slot evaluations. Attaching a transpose or inverse merely because the array is square conceals the object that was being represented.

The neighbouring chapters now have a common language. The map chapter explains which directions are collapsed and how representative choices split a quotient. This chapter gives the coordinate conversions and explicit witnesses for those choices. Invariant-subspace and duality chapters will impose further structure on the same maps, so a useful coordinate choice must respect those added requirements. A convenient rectangular rank normal form is a complete answer to one question; it is a starting point, rather than a substitute, for those later classifications.

<a id="section-774-18-a-zero-output-row-is-a-consistency-condition"></a>
## 18. A zero output row is a consistency condition {#section-776-18-a-zero-output-row-is-a-consistency-condition}

The surjective worked map has no unreachable outputs. A rank-deficient example shows what rank normal form says about consistency as well as free variables. Over any field let
\\[
 A=\\begin{pmatrix}1&1&1\\\\2&2&2\\end{pmatrix}.
\\]
Its image is spanned by $(1,2)^{\\mathsf T}$, because every output is $(x+y+z)(1,2)^{\\mathsf T}$ and the first standard input reaches that vector. The image has dimension one even in characteristic two, where its second coordinate becomes zero.

Choose the domain conversion and codomain conversion
\\[
 P=\\begin{pmatrix}1&-1&0\\\\0&1&-1\\\\0&0&1\\end{pmatrix},
 \\qquad Q=\\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}.
\\]
The domain columns are $e_1,-e_1+e_2,-e_2+e_3$. The last two are independent kernel directions; triangular substitution recovers every old input coordinate. The codomain columns are the image basis vector $(1,2)$ and the complementary vector $(0,1)$. Their triangular inverse is $Q^{-1}=\\begin{pmatrix}1&0\\\\-2&1\\end{pmatrix}$. Applying the map to the three domain columns and then expressing the outputs in this codomain basis gives
\\[
 Q^{-1}AP=\\begin{pmatrix}1&0&0\\\\0&0&0\\end{pmatrix}.
\\]
These computations verify the asserted bases and the normal form over every field, without dividing by two.

For a right-hand side $b=(b_1,b_2)^{\\mathsf T}$, its transformed column is $(b_1,b_2-2b_1)^{\\mathsf T}$. The second zero row therefore imposes the condition $b_2-2b_1=0$. If that condition fails, the system has no solution regardless of its free input coordinates. If it holds, all new-coordinate solutions are $(b_1,u,v)$ with arbitrary $u,v$, and decoding gives
\\[
 x=P(b_1,u,v)^{\\mathsf T}
 =(b_1-u,u-v,v)^{\\mathsf T}.
\\]
Their coordinate sum is $b_1$, which checks the original system directly.

The functional $\\ell:F^2\\to F$, $\\ell(y_1,y_2)=y_2-2y_1$, gives a short certificate of impossibility. It satisfies $\\ell(Ax)=0$ for every input. Thus $\\ell(b)\\ne0$ proves inconsistency; for example $b=(0,1)$ is impossible in every characteristic. This is a linear map on the output space, not a vector in the input kernel. The transformed zero row has made that output constraint visible.

The two zero input columns and the one zero output row answer different questions. Input kernel directions parameterise indistinguishable solutions after consistency is established. The unused output coordinate tests whether any solution exists. This distinction previews the duality chapter's language of measurements annihilating an image, while the complete finite example already verifies the needed claim.


<a id="section-805-19-optional-practice-extensions"></a>

## Summary

<a id="section-142-11-summary"></a>
A matrix is a basis-dependent record of a basis-independent map. Columns record basis images, composition becomes multiplication, and coordinate conversion yields the general law $A'=Q^{-1}AP$. Independent domain/codomain changes produce equivalence and rank normal form; a common basis change for an operator produces similarity. Keeping these types visible prevents most formula errors.

<a id="section-144-exercises-with-full-solutions"></a>

<a id="section-890-summary"></a>
A representing matrix records basis images with source and destination coordinates attached. Composition requires compatible intermediate bases, and independent basis changes produce equivalence rather than necessarily similarity. Rank normal form classifies equivalence; polynomial identities survive similarity. Exact identities alone do not specify numerical thresholds. Invariant subspaces next make structural coordinate choices possible.

## Exercises {#section-146-exercises-with-full-solutions}

<a id="section-146-1-read-columns"></a>
### 1. Read columns {#section-148-1-read-columns}

If $[T]_C\\leftarrow B=\\begin{pmatrix}1 & 2 \\\\ -1 & 3 \\\\ 0 & 4\\end{pmatrix}$, state $T(v_1)$ and $T(v_2)$ in the basis $C=(w_1,w_2,w_3)$.

<details>
<summary>Hint 1</summary>

Each column describes one input basis vector.

</details>

<details>
<summary>Hint 2</summary>

Use its entries as coefficients of the ordered output basis.

</details>

<details>
<summary>Solution</summary>

**Solution.** The columns give $T(v_1)=w_1-w_2$ and $T(v_2)=2w_1+3w_2+4w_3$.


</details>

<a id="section-172-2-build-an-evaluation-matrix"></a>
### 2. Build an evaluation matrix {#section-174-2-build-an-evaluation-matrix}

Find the matrix of $T:\\mathbb{R}_2[x]\\to \\mathbb{R}^3$, $T(p)=(p(-1),p(0),p(1))$, in standard bases.

<details>
<summary>Hint 1</summary>

Apply the measurement map to each monomial basis vector.

</details>

<details>
<summary>Hint 2</summary>

Place each resulting triple in a column, preserving the measurement order.

</details>

<details>
<summary>Solution</summary>

**Solution.** The images of $1,x,x^2$ are $(1,1,1)$, $(-1,0,1)$, $(1,0,1)$. Hence the matrix is $\\begin{pmatrix}1 & -1 & 1 \\\\ 1 & 0 & 0 \\\\ 1 & 1 & 1\\end{pmatrix}$.


</details>

<a id="section-198-3-matrix-of-a-composition"></a>
### 3. Matrix of a composition {#section-200-3-matrix-of-a-composition}

Prove the composition formula by checking its $j$th column.

<details>
<summary>Hint 1</summary>

Track one input basis vector through the two maps.

</details>

<details>
<summary>Hint 2</summary>

Its output coordinate column must agree with the corresponding product column.

</details>

<details>
<summary>Solution</summary>

**Solution.** Column $j$ of $[T]_B\\leftarrow A$ is $[T(u_j)]_B$. Multiplying by $[S]_C\\leftarrow B$ gives $[S(Tu_j)]_C$, which is column $j$ of $[S \\circ T]_C\\leftarrow A$. Equality of every column proves the formula.


</details>

<a id="section-224-4-coordinate-direction"></a>
### 4. Coordinate direction {#section-226-4-coordinate-direction}

Let $B'=((1,1),(1,-1))$. Find the standard coordinates of a vector whose $B'$-coordinates are $(3,2)$.

<details>
<summary>Hint 1</summary>

Reconstruct the vector as a combination of the new basis.

</details>

<details>
<summary>Hint 2</summary>

The requested standard coordinates belong to the reconstructed vector, not to the coefficient pair alone.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $3(1,1)+2(1,-1)=(5,1)$. Equivalently, $P_B\\leftarrow B'(3,2)^T=(5,1)^T$.


</details>

<a id="section-250-5-inverse-transition"></a>
### 5. Inverse transition {#section-252-5-inverse-transition}

Prove $P_B\\leftarrow B'^{-1}=P_B'\\leftarrow B$.

<details>
<summary>Hint 1</summary>

Compose a coordinate conversion with its reverse.

</details>

<details>
<summary>Hint 2</summary>

Both orders fix every coordinate vector, proving a two-sided inverse.

</details>

<details>
<summary>Solution</summary>

**Solution.** Changing $B'$ coordinates to $B$ and back acts as the identity on every coordinate vector, so $P_B'\\leftarrow B P_B\\leftarrow B'=I$; reversing the conversions gives the other product $I$.


</details>

<a id="section-276-6-derive-the-general-transformation-law"></a>
### 6. Derive the general transformation law {#section-278-6-derive-the-general-transformation-law}

Derive $[T]_{C'}\\leftarrow B'=P_{C'}\\leftarrow C[T]_C\\leftarrow B P_B\\leftarrow B'$.

<details>
<summary>Hint 1</summary>

Label the basis of the input column at each stage.

</details>

<details>
<summary>Hint 2</summary>

Convert input first, apply the old matrix, and convert the output last.

</details>

<details>
<summary>Solution</summary>

**Solution.** Starting with $[v]_{B'}$, the right factor produces $[v]_B$; the middle factor produces $[Tv]_C$; the left factor produces $[Tv]_{C'}$. Since this holds for every coordinate vector, the product is the desired matrix.


</details>

<a id="section-302-7-similarity-preserves-polynomial-identities"></a>
### 7. Similarity preserves polynomial identities {#section-304-7-similarity-preserves-polynomial-identities}

If $A'=P^{-1}AP$, prove $f(A')=P^{-1}f(A)P$ for every polynomial $f$.

<details>
<summary>Hint 1</summary>

Start with powers and use induction.

</details>

<details>
<summary>Hint 2</summary>

Adjacent inverse transition factors cancel without commuting A and P.

</details>

<details>
<summary>Solution</summary>

**Solution.** Induction gives $(A')^k=P^{-1}A^kP$, since adjacent $PP^{-1}$ factors cancel. Taking the same linear combination of powers proves the claim. Thus $f(A)=0$ iff $f(A')=0$.


</details>

<a id="section-328-8-similarity-preserves-rank"></a>
### 8. Similarity preserves rank {#section-330-8-similarity-preserves-rank}

Prove similar matrices have the same rank without using determinants.

<details>
<summary>Hint 1</summary>

Interpret similarity as composition with isomorphisms.

</details>

<details>
<summary>Hint 2</summary>

One changes domain descriptions and the other carries the image bijectively to a new subspace.

</details>

<details>
<summary>Solution</summary>

**Solution.** As maps, $P^{-1}AP$ is a composition of $A$ with isomorphisms before and after it. The precomposition does not change the image dimension, and the postcomposition maps the image isomorphically to another subspace. Hence ranks agree.


</details>

<a id="section-354-9-equal-rank-implies-equivalence"></a>
### 9. Equal rank implies equivalence {#section-356-9-equal-rank-implies-equivalence}

Prove two $m by n$ matrices of rank $r$ are equivalent.

<details>
<summary>Hint 1</summary>

Take each matrix to its rank normal form.

</details>

<details>
<summary>Hint 2</summary>

Eliminate the common normal form to relate the original matrices by invertible left and right factors.

</details>

<details>
<summary>Solution</summary>

**Solution.** The rank-normal-form proof supplies invertible changes taking each matrix to $J_r=\\begin{pmatrix}I_r & 0 \\\\ 0 & 0\\end{pmatrix}$. If $Q_A^{-1}AP_A=J_r=Q_B^{-1}BP_B$, rearranging expresses $B$ as invertible left and right multiples of $A$, so they are equivalent.


</details>

<a id="section-380-10-rank-normal-form"></a>
### 10. Rank normal form {#section-382-10-rank-normal-form}

Find bases that put $T:\\mathbb{R}^3\\to \\mathbb{R}^2$, $T(x,y,z)=(x+y,y+z)$, into rank normal form.

<details>
<summary>Hint 1</summary>

Choose two inputs whose images form a codomain basis.

</details>

<details>
<summary>Hint 2</summary>

Add a kernel basis vector to make a domain basis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its kernel is $\\operatorname{span}((-1,1,-1))$. Take domain basis $(e_1,e_3,(-1,1,-1))$; images of the first two are the standard codomain basis. In these domain and standard codomain bases, the matrix is $\\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0\\end{pmatrix}$.


</details>

<a id="section-406-11-same-rank-not-similar"></a>
### 11. Same rank, not similar {#section-408-11-same-rank-not-similar}

Show $I_2$ and $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ are equivalent but not similar.

<details>
<summary>Hint 1</summary>

Use the rank-normal-form characterization for equivalence.

</details>

<details>
<summary>Hint 2</summary>

Conjugating an identity always returns the identity.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both have rank two, so they are equivalent. If $P^{-1}I_2P$ were the second matrix, the left side would still be $I_2$, a contradiction. Thus they are not similar.


</details>

<a id="section-432-12-row-operation-meaning"></a>
### 12. Row operation meaning {#section-434-12-row-operation-meaning}

If $E$ is invertible, prove $\\operatorname{ker}(EA)=\\operatorname{ker} A$.

<details>
<summary>Hint 1</summary>

Apply the inverse left factor to the zero-output equation.

</details>

<details>
<summary>Hint 2</summary>

Keep track of the same input coordinate x throughout.

</details>

<details>
<summary>Solution</summary>

**Solution.** $EAx=0$ iff $Ax=E^{-1}0=0$. Thus the sets of input coordinate vectors are equal.


</details>

<a id="section-458-13-column-operation-meaning"></a>
### 13. Column operation meaning {#section-460-13-column-operation-meaning}

For invertible $P$, relate $\\operatorname{ker}(AP)$ to $\\operatorname{ker} A$.

<details>
<summary>Hint 1</summary>

Write APy=0 as a statement about Py.

</details>

<details>
<summary>Hint 2</summary>

Solve for y using the inverse of P and interpret the coordinate change.

</details>

<details>
<summary>Solution</summary>

**Solution.** $APy=0$ iff $Py \\in \\operatorname{ker} A$, so $\\operatorname{ker}(AP)=P^{-1}(\\operatorname{ker} A)$. The coordinate set generally changes, though it represents the same abstract kernel after the input basis change.


</details>

<a id="section-484-14-matrix-units"></a>
### 14. Matrix units {#section-486-14-matrix-units}

Prove $E_{ij}E_{kl}=\\delta_{jk}E_{il}$.

<details>
<summary>Hint 1</summary>

Evaluate the composite on an arbitrary standard basis vector.

</details>

<details>
<summary>Hint 2</summary>

The intermediate basis index must match for a nonzero result.

</details>

<details>
<summary>Solution</summary>

**Solution.** $E_{kl}$ kills all basis vectors except $e_l$, which it sends to $e_k$. Then $E_{ij}$ sends $e_k$ to $e_i$ exactly when $k=j$, and otherwise to zero. This is precisely the stated formula.


</details>

<a id="section-510-15-dimension-of-a-map-space"></a>
### 15. Dimension of a map space {#section-512-15-dimension-of-a-map-space}

Prove $\\operatorname{dim} L(V,W)=(\\operatorname{dim} V)(\\operatorname{dim} W)$ by constructing a basis.

<details>
<summary>Hint 1</summary>

Prescribe one output basis vector on one input basis vector and zero elsewhere.

</details>

<details>
<summary>Hint 2</summary>

These elementary maps give unique coordinates for every linear map.

</details>

<details>
<summary>Solution</summary>

**Solution.** For bases $(v_j)$ and $(w_i)$, let $T_{ij}$ send $v_j$ to $w_i$ and all other basis vectors to zero. Every map has a unique expansion with its matrix entries as coefficients of the $T_{ij}$. There are $mn$ such maps.


</details>

<a id="section-536-16-invertibility-and-matrices"></a>
### 16. Invertibility and matrices {#section-538-16-invertibility-and-matrices}

Prove $T$ is an isomorphism iff one, hence every, square matrix representing it is invertible.

<details>
<summary>Hint 1</summary>

Translate the inverse map into matrices in compatible bases.

</details>

<details>
<summary>Hint 2</summary>

Conversely, use an inverse representing matrix to construct the inverse linear map.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $T$ is invertible, the composition formula makes the matrix of $T^{-1}$ an inverse matrix. If a representing matrix has an inverse, the corresponding matrix map is bijective; composing with coordinate isomorphisms shows $T$ is bijective. Other representations are products with invertible transition matrices and remain invertible.


</details>

<a id="section-562-17-field-boundary"></a>
### 17. Field boundary {#section-564-17-field-boundary}

Why does the displayed inverse for $\\begin{pmatrix}1 & 1 \\\\ 1 & -1\\end{pmatrix}$ fail in characteristic two, and what does that say about $((1,1),(1,-1))$ there?

<details>
<summary>Hint 1</summary>

Audit the denominator two in the proposed inverse.

</details>

<details>
<summary>Hint 2</summary>

In characteristic two, compare the two proposed basis vectors directly.

</details>

<details>
<summary>Solution</summary>

**Solution.** In characteristic two, $-1=1$, so the two listed vectors coincide and the determinant $-2$ is zero. They are not a basis, so no transition matrix between that list and a basis exists.


</details>

<a id="section-588-18-exact-versus-numerical-rank"></a>
### 18. Exact versus numerical rank {#section-590-18-exact-versus-numerical-rank}

For $A_{\\epsilon}=\\begin{pmatrix}1 & 1 \\\\ 1 & 1+\\epsilon\\end{pmatrix}$, determine the exact rank over $R$ for $\\epsilon=0$ and $\\epsilon\\ne 0$. Explain why this does not choose a floating-point rank threshold.

<details>
<summary>Hint 1</summary>

Subtract one row from the other exactly.

</details>

<details>
<summary>Hint 2</summary>

A nonzero exact pivot does not provide a scale or measurement-error model for numerical rank.

</details>

<details>
<summary>Solution</summary>

**Solution.** The determinant is $\\epsilon$; hence the exact rank is one at zero and two for every nonzero $\\epsilon$. In measured or rounded data, deciding whether a small $\\epsilon$ reflects signal or error requires a scale, norm, uncertainty model, and tolerance. Algebra alone supplies none of these.

</details>

<a id="section-613-12-coordinate-arrows-distinguish-copies-of-the-same-col"></a>

<a id="section-807-19-optional-practice-extensions"></a>
### 19. LSP-06-E19: change two unrelated bases {#section-809-lsp-06-e19-change-two-unrelated-bases}

Let $T:F^2\\to F^3$ have standard matrix $\\begin{pmatrix}1&0\\\\1&1\\\\0&1\\end{pmatrix}$. Use domain basis $B'=(e_1+e_2,e_2)$ and codomain basis $C'=(f_1,f_1+f_2,f_3)$. Find $[T]_{C'\\leftarrow B'}$ and check its first column directly as a vector in the codomain.

<details>
<summary>Hint 1</summary>

Apply T directly to each new domain basis vector.

</details>

<details>
<summary>Hint 2</summary>

For an output (r,s,t), solve its expansion in (f₁,f₁+f₂,f₃).

</details>

<a id="section-825-lsp-06-e20-multiply-only-compatible-coordinate-records"></a>
### 20. LSP-06-E20: multiply only compatible coordinate records {#section-827-lsp-06-e20-multiply-only-compatible-coordinate-records}

Over $R$, let $T(x,y)=(2x,3y)$, use standard input basis $B$ and output basis $C=((1,1),(0,1))$. Find $A=[T]_{C\\leftarrow B}$, the conversion $H=P_{B\\leftarrow C}$ and the matrix of $T^2$ from $B$ to $C$. Compare that matrix with $A^2$ and explain the difference.

<details>
<summary>Hint 1</summary>

The matrix A outputs C coordinates but accepts B coordinates.

</details>

<details>
<summary>Hint 2</summary>

Insert the conversion H between successive applications before comparing with A².

</details>

<a id="section-843-20-solutions-to-optional-practice-extensions"></a>

## Solutions

<a id="section-845-20-solutions-to-optional-practice-extensions"></a>
<a id="section-845-lsp-06-e19-change-two-unrelated-bases-solution"></a>
### LSP-06-E19: change two unrelated bases — solution {#section-847-lsp-06-e19-change-two-unrelated-bases-solution}

<details>
<summary>Solution</summary>

The new-to-standard conversions are
\\[
 P=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix},\\qquad
 Q=\\begin{pmatrix}1&1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix},\\qquad
 Q^{-1}=\\begin{pmatrix}1&-1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}.
\\]
Writing $A$ for the stated standard matrix, its product $AP$ is
$\\begin{pmatrix}1&0\\\\2&1\\\\1&1\\end{pmatrix}$, and hence
\\[
 [T]_{C'\\leftarrow B'}=Q^{-1}AP
 =\\begin{pmatrix}-1&-1\\\\2&1\\\\1&1\\end{pmatrix}.
\\]
The first new input is $e_1+e_2$, whose standard output is $(1,2,1)$. Its displayed new coordinates $(-1,2,1)$ decode to $-f_1+2(f_1+f_2)+f_3=(1,2,1)$, verifying the first column over every field.


</details>

<a id="section-867-lsp-06-e20-multiply-only-compatible-coordinate-records-"></a>
### LSP-06-E20: multiply only compatible coordinate records — solution {#section-869-lsp-06-e20-multiply-only-compatible-coordinate-records-}

<details>
<summary>Solution</summary>

Here
\\[
 H=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix},\\qquad
 A=H^{-1}\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}
   =\\begin{pmatrix}2&0\\\\-2&3\\end{pmatrix}.
\\]
The required record is
\\[
 AHA=H^{-1}\\begin{pmatrix}4&0\\\\0&9\\end{pmatrix}
     =\\begin{pmatrix}4&0\\\\-4&9\\end{pmatrix}.
\\]
Direct squaring gives $A^2=\\begin{pmatrix}4&0\\\\-10&9\\end{pmatrix}$, which differs. After the first application the column is in $C$ coordinates; $H$ converts it to the $B$ coordinates expected by the second application. Multiplying the two arrays without that conversion composes incompatible coordinate descriptions.

</details>


<a id="section-888-summary"></a>
`;export{e as default};