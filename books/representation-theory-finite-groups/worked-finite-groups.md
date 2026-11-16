
# Worked Groups: D_n, A_4, S_4 and SL_2(F_p)

The general theorems are most useful when a representation is constructed before its character is manipulated. This chapter gives complete complex irreducible lists for dihedral groups, A_4 and S_4, and a uniform irreducible projective-line family for SL_2(F_p). The last family is deliberately one representation for each prime, not a claim to give the full SL_2 character table.

Read [induction](induction-frobenius-mackey.md), [tensor operations](tensor-products-representation-ring.md) and [character-table completeness](character-tables.md). Write D_n for the group of order 2n, with n≥3. F_p means Z/pZ, whose nonzero elements have inverses by the Euclidean algorithm. All representation spaces below are complex, even when the group itself is defined over F_p.

## 1. The full dihedral family

Let ζ=exp(2πi/n). For an integer j define
$$\rho_j(r)=\begin{pmatrix}\zeta^j&0\\0&\zeta^{-j}\end{pmatrix},
\qquad
\rho_j(s)=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$
The matrices satisfy r^n=s²=e and srs=r^(−1), so construct a D_n-representation. Its character satisfies
$$\theta_j(r^a)=\zeta^{ja}+\zeta^{-ja},
\qquad \theta_j(r^as)=0.$$

If 2j is not divisible by n, the two eigenvalues of r are distinct. Any invariant line would be one of its two eigenlines, but s exchanges them. Thus ρ_j is irreducible. The representations for j and −j are equivalent by exchanging basis vectors. Conversely, equivalence forces the unordered eigenvalue pair of r to agree, so j≡±k mod n. If j=0, the representation splits into the two lines r↦1,s↦±1. When n is even, j=n/2 similarly splits into r↦−1,s↦±1.

A linear character sends r↦a,s↦b. The relations give a^n=b²=1 and a=a^(−1). Thus if n is odd there are two linear characters, with a=1,b=±1; if n is even there are four, with a,b independently ±1.

For odd n, choose j=1,…,(n−1)/2. The two linear characters and these two-dimensional irreducibles have squared degrees
$$2+4\frac{n-1}{2}=2n.$$
For even n choose j=1,…,n/2−1; the sum is
$$4+4\left(\frac n2-1\right)=2n.$$
Distinctness and the degree-square identity therefore prove these lists complete.

Each two-dimensional representation has a real form: take rotation through 2πj/n and reflection diag(1,−1) on R². Complexifying diagonalises the rotation into the two displayed eigenvalues. Thus all dihedral irreducibles have positive indicator, as do their real-valued linear characters.

The kernel of ρ_j consists of rotations r^a with n dividing ja; no reflection acts as I because its matrix exchanges the eigenlines. Hence ρ_j is faithful exactly when gcd(j,n)=1. Irreducible need not mean faithful: for D_6, j=2 gives an irreducible factoring through D_3.

## 2. Worked example: D_5

There are two linear characters and two degree-two irreducibles θ_1,θ_2. Let c=2cos(2π/5) and d=2cos(4π/5). On the classes e,{r,r⁴},{r²,r³},all reflections, of sizes 1,2,2,5, the rows are
$$
\begin{array}{c|rrrr}
1&1&1&1&1\\
\varepsilon&1&1&1&-1\\
\theta_1&2&c&d&0\\
\theta_2&2&d&c&0
\end{array}.
$$
The relations 1+ζ+ζ²+ζ³+ζ⁴=0 imply c+d=−1 and cd=−1. Therefore c²+d²=3. The θ_1 norm is (4+2c²+2d²)/10=1, and its inner product with θ_2 is (4+4cd)/10=0.

The tensor product θ_1² has character (4,c²,d²,0). Its decomposition can be read from rotation eigenvalues: the products give weights 2,0,0,−2 modulo five. The two zero-weight lines are exchanged by reflection and split as trivial plus sign; the remaining pair gives θ_2. Thus
$$\theta_1^2=1+\varepsilon+\theta_2.$$
This is a constructed tensor decomposition, consistent with the character calculation.

## 3. The tetrahedral group A_4

The normal Klein subgroup V_4 gives quotient A_4/V_4≅C_3 and three linear characters 1,λ,λ². The coordinate action on four labels splits into a fixed line and a real three-dimensional sum-zero representation W. On classes e,double transpositions,and the two 3-cycle classes, of sizes 1,3,4,4, its character is (3,−1,0,0). Its norm is (9+3)/12=1, and the degree squares 1+1+1+9=12 prove completeness together with the quotient lines.

The real W can be visualised by the four vectors
$$(1,1,1),\ (1,-1,-1),\ (-1,1,-1),\ (-1,-1,1).$$
They form a regular tetrahedron centred at the origin. Permuting them acts orthogonally on their three-dimensional span, and an even permutation has determinant one. This identifies A_4's real irreducible with the rotational symmetry of the tetrahedron.

Tensor formulas give
$$\operatorname{Sym}^2W=1+\lambda+\lambda^2+W,\qquad
\Lambda^2W=W.$$
Indeed χ_W²=(9,1,0,0) and χ_W(g²)=(3,3,0,0), so the symmetric and exterior characters are (6,2,0,0) and (3,−1,0,0). Their weighted inner products give the displayed decompositions. In particular the invariant symmetric quadratic form occurs once, while there is no invariant alternating form.

## 4. A complete construction for S_4

Order the classes as e,(12),(12)(34),(123),(1234), with sizes 1,6,3,8,6. The four-point permutation module yields the trivial line and the degree-three standard representation W, of character (3,1,−1,0,−1). Its sign twist has character (3,−1,−1,0,1).

For the degree-two representation U, let S_4 act on the three partitions into two unordered pairs:
$$12|34,\quad13|24,\quad14|23.$$
Its kernel is V_4, and the resulting quotient is S_3. The sum-zero plane of this three-point permutation action therefore has character (2,0,2,−1,0). Its norm is (4+3·4+8)/24=1, so it is irreducible.

Together with trivial and sign the five rows are
$$
\begin{array}{c|rrrrr}
1&1&1&1&1&1\\
\varepsilon&1&-1&1&1&-1\\
U&2&0&2&-1&0\\
W&3&1&-1&0&-1\\
\varepsilon W&3&-1&-1&0&1
\end{array}.
$$
The norm of W is (9+6+3+6)/24=1; the sign twist has the same norm and differs on transpositions. The degrees distinguish U and the linear rows. All five are therefore inequivalent irreducibles, and their degree squares add to 24, proving completeness.

All have real forms: quotient permutation modules, real coordinate subspaces and sign twisting constructed them over R. For W, the square map gives χ_W(g²)=(3,3,3,0,−1). Hence
$$\Lambda^2W=\varepsilon W,\qquad
\operatorname{Sym}^2W=1+U+W.$$
The determinant line of W is ε, as expected for the standard S_4 action. In real dimension three, exterior square differs from the original action by its orientation character.

## 5. The projective-line representation of SL_2(F_p)

Let G=SL_2(F_p), the determinant-one 2×2 matrices over F_p. It has order p(p²−1): its first column can be any nonzero vector, giving p²−1 choices, and each such column has exactly p possible second columns with determinant one, since a nonzero linear functional on F_p² has p-element fibres.

The projective line X=P¹(F_p) is the set of one-dimensional subspaces of F_p². It has p+1 elements, represented by the lines spanned by (x,1), x∈F_p, and the line ∞ spanned by (1,0). The group acts on X and hence on the complex permutation space C[X].

This action is doubly transitive. First, any nonzero vector v can be completed to a determinant-one ordered basis (v,w), so G sends ∞ to every line. Second, the stabiliser of ∞ contains all matrices [[1,b],[0,1]], which act on finite coordinates by x↦x+b. Those translations are transitive on F_p, so the stabiliser is transitive on the remaining p points.

**Theorem 12.1.** The sum-zero subspace St_p of C[P¹(F_p)] is irreducible of degree p.

*Proof.* Let π be the permutation character. Its average is one because the action is transitive. The average of π(g)² equals the number of orbits on X×X: it is the fixed-space dimension of that pair permutation representation. Double transitivity gives exactly two orbits, diagonal and off-diagonal. Thus ⟨π,π⟩=2 and ⟨π,1⟩=1. Since St_p is an actual complement to the fixed line over C, its character π−1 has norm 2−1−1+1=1. It is therefore irreducible. ∎

This is the rank-one Steinberg representation, constructed here entirely through a finite permutation action. We do not require the general theory of groups of Lie type.

## 6. Its kernel and character values

An element acting trivially on every projective line must preserve the coordinate lines, so is diagonal. Preserving the line of (1,1) makes its diagonal entries equal. Thus the projective-action kernel is the scalar subgroup {aI:a²=1}, namely {±I} for odd p and {I} for p=2.

The same is the kernel on St_p. If an element acts as I on St_p, it also acts as I on the fixed line, so it acts as I on C[X] and fixes every basis point. Thus St_p is faithful on the quotient PSL_2(F_p).

For g∈G, its character is the number of F_p-eigenlines minus one. There are four cases:

- A scalar matrix fixes all p+1 lines, so its character is p.
- A non-scalar matrix with a repeated eigenvalue has exactly one eigenline, so its character is zero.
- A matrix with two distinct eigenvalues in F_p has two eigenlines, so its character is one.
- A matrix whose characteristic polynomial is irreducible over F_p has no F_p-eigenline, so its character is −1.

These cases exhaust degree-two characteristic polynomials. For odd p one can distinguish them by the discriminant (tr g)²−4, remembering to distinguish a scalar matrix from a nonscalar repeated-root matrix. For p=2 use the polynomial itself; dividing by two in a quadratic formula would be invalid.

**Worked example.** For p=5, the identity and −I have character five. The unipotent [[1,1],[0,1]] has character zero. The matrix diag(2,3) has two distinct F_5-eigenvalues and character one. The matrix [[0,−1],[1,1]] has characteristic polynomial x²−x+1 and discriminant −3=2, a nonsquare in F_5; its character is −1.

For p=2 the group has order six and acts faithfully on three points, so identifies with S_3; St_2 is its standard plane. For p=3 the image on four points has order 24/2=12 and hence is A_4, the unique index-two subgroup of S_4. Thus St_3 is the tetrahedral degree-three irreducible. These small cases connect the uniform family to the earlier worked tables without claiming a full character classification for larger p.

The projective-line family also has an explicit real form: take the real sum-zero space inside R[X], with the same permutation matrices. Its complexification is St_p, already proved complex irreducible. The coordinate dot product restricts to a positive-definite invariant real form and extends to a symmetric invariant complex bilinear form. Therefore every St_p has Frobenius–Schur indicator one, including the even-degree cases. This conclusion uses the constructed real action, rather than only the real-valued list of trace values.

## A further SL_2 family from induction

Let B be the stabiliser of ∞, consisting of [[a,b],[0,a^(−1)]] with a∈F_p^× and b∈F_p. It has order p(p−1) and index p+1. Thus Ind_B^G1 is exactly the projective-line permutation representation, already decomposed as 1⊕St_p.

More generally take a homomorphism η:F_p^×→C^× and let B act on a line by [[a,b],[0,a^(−1)]]↦η(a). The top-left diagonal entry multiplies under multiplication of upper triangular matrices, so this really is a linear character. Its induction I_η has degree p+1.

There are two B-double cosets in G: they correspond to the two B-orbits on the projective line, {∞} and F_p. Choose representatives e and w=[[0,−1],[1,0]]. The second intersection B∩wBw^(−1) is the diagonal subgroup T. Conjugation by w inverts its diagonal parameter, so the conjugate line restricts to η^(−1) on T. Mackey's criterion gives
$$\langle\chi_{I_\eta},\chi_{I_\eta}\rangle
=1+\dim\operatorname{Hom}_T(\eta^{-1},\eta)
=1+\delta_{\eta^2,1}.$$
Hence I_η is irreducible when η² is nontrivial. If η²=1, its norm is two, so it is a sum of exactly two inequivalent irreducibles, each once; the theorem does not determine their separate degrees. For trivial η we already identified them as 1 and St_p.

**Worked example.** In F_5^×, the element 2 has order four. Define η(2)=i. Then η² is nontrivial, so I_η is a degree-six irreducible of SL_2(F_5). The central element −I has parameter −1=2² and acts by η(−1)=−1 on the induced representation: z(g⊗v)=g⊗zv for central z∈B. Thus this irreducible sees the central double cover that St_5 kills. Together the families illustrate genuinely different representation behaviour without claiming an exhaustive SL_2 table.

The same double-coset calculation prevents double-counting these induced representations. For any two diagonal characters η and θ, Frobenius reciprocity followed by Mackey gives
$$\langle\chi_{I_\eta},\chi_{I_\theta}\rangle
=\delta_{\eta,\theta}+\delta_{\eta,\theta^{-1}}.$$
The identity double coset compares the original B-characters. The other compares their restrictions to T after inversion; the unipotent part acts trivially on each inducing line, so no further condition remains. If η² is nontrivial, the irreducible I_η therefore agrees with I_(η inverse), while characters outside that inverse pair give inequivalent irreducibles. Equality follows from character classification, rather than merely from matching degrees.

For p=5, assigning η(2)=−i gives the inverse of the character in the worked example. It consequently produces the same degree-six irreducible, not a second one. Both inducing characters send minus one to minus one, consistently giving the same central action. Counting parameters before identifying this inverse symmetry would incorrectly enlarge the partial list of irreducibles. The calculation also explains why the quadratic inducing character is exceptional: it is its own inverse, and its norm is two rather than one.

A central element gives a useful restriction on possible tensor constituents. By Schur's lemma it acts on each irreducible as a scalar, recovered from its character value divided by degree. On a tensor product those two scalars multiply. Every irreducible summand of that tensor product must therefore have the same product scalar, because the central action on the whole tensor space is already that scalar times identity. For a central involution, this divides the irreducibles into positive and negative sectors, and tensoring follows the multiplication of signs. In particular two negative representations can have only positive constituents. The degree-six example for the central double cover and the projective-line family consequently obey different central constraints even before their full tensor decompositions are calculated.

## 7. Exercises

### REP-12-01 — Dihedral irreducibility

Prove ρ_j is irreducible exactly when 2j is not divisible by n.

<details>
<summary>Hint 1</summary>

Compare the two rotation eigenvalues.

</details>
<details>
<summary>Hint 2</summary>

When they coincide, the reflection has two eigenlines.

</details>
<details>
<summary>Full solution</summary>

If ζ^j≠ζ^(−j), a common invariant line must be a rotation eigenline, but reflection exchanges the two, so no such line exists. If the eigenvalues coincide, r acts as ±I and s diagonalises with eigenvectors (1,1),(1,−1), each giving an invariant line. Thus reducibility occurs exactly when ζ^(2j)=1, or n divides 2j.

</details>

### REP-12-02 — A nonfaithful irreducible

For D_6 take j=2. Find the kernel and identify the quotient action.

<details>
<summary>Hint 1</summary>

The rotation eigenvalue has order three.

</details>
<details>
<summary>Hint 2</summary>

Reflections still exchange the two eigenlines.

</details>
<details>
<summary>Full solution</summary>

The rotation acts by diag(exp(2πi/3),exp(−2πi/3)), so its kernel among rotations is {e,r³}. No reflection is in the kernel. Thus kerρ_2=⟨r³⟩ and the action factors faithfully through D_6/⟨r³⟩≅D_3. It is irreducible because its two rotation eigenvalues differ. Faithfulness and irreducibility are again distinct.

</details>

### REP-12-03 — Odd and even counts

Count the irreducibles of D_n from the constructed lists and compare with the conjugacy classes.

<details>
<summary>Hint 1</summary>

Rotations are paired with their inverses.

</details>
<details>
<summary>Hint 2</summary>

Reflections form one class for odd n and two for even n.

</details>
<details>
<summary>Full solution</summary>

For odd n there are 2+(n−1)/2=(n+3)/2 irreducibles. The classes are e, (n−1)/2 inverse rotation pairs and one reflection class, the same count. For even n there are 4+(n/2−1)=n/2+3 irreducibles. The classes are e,r^(n/2), n/2−1 other rotation pairs and two reflection classes. Again the counts agree, consistently with character completeness.

</details>

### REP-12-04 — A_4 exterior square

Derive Λ²W=W for the degree-three A_4 representation.

<details>
<summary>Hint 1</summary>

Its character is (3,−1,0,0).

</details>
<details>
<summary>Hint 2</summary>

The squared-element character is (3,3,0,0).

</details>
<details>
<summary>Full solution</summary>

The tensor-square character is (9,1,0,0). Subtracting the squared-element character and dividing by two gives (3,−1,0,0), the character of W itself. Character classification yields Λ²W≅W. This is compatible with its real orthogonal determinant-one action, for which an orientation identifies exterior two-vectors with vectors in dimension three.

</details>

### REP-12-05 — The S_4 quotient plane

Find the kernel of the action on the three pair partitions.

<details>
<summary>Hint 1</summary>

Each double transposition fixes all three partitions.

</details>
<details>
<summary>Hint 2</summary>

A transposition and a 3-cycle induce generators of S_3 on the partitions.

</details>
<details>
<summary>Full solution</summary>

The four elements of V_4 fix all three partitions. The induced action contains a transposition, from (12), and a 3-cycle, from (123), so its image is all S_3. Its kernel has order 24/6=4 and is therefore exactly V_4. The sum-zero plane of the three-point action is faithful for S_3, so its inflated S_4 representation has the same kernel.

</details>

### REP-12-06 — The S_4 tensor square

Decompose W⊗W for the standard S_4 representation.

<details>
<summary>Hint 1</summary>

Use Sym²W and Λ²W.

</details>
<details>
<summary>Hint 2</summary>

Their decompositions are 1+U+W and εW.

</details>
<details>
<summary>Full solution</summary>

The tensor square is the direct sum of its symmetric and exterior squares, hence W⊗W≅1⊕U⊕W⊕εW. The dimensions add to 1+2+3+3=9. Its character is (9,1,1,0,1), which also gives multiplicity one for those four rows and zero for sign by weighted inner products.

</details>

### REP-12-07 — Count determinant-one matrices

Prove |SL_2(F_p)|=p(p²−1).

<details>
<summary>Hint 1</summary>

Choose the first column to be nonzero.

</details>
<details>
<summary>Hint 2</summary>

For a fixed first column, determinant is a nonzero linear functional of the second.

</details>
<details>
<summary>Full solution</summary>

There are p²−1 nonzero first columns v. The equation det(v,w)=1 is one nonzero linear equation in the two coordinates of w. Its solution set is an affine line with p elements. Thus there are p(p²−1) matrices. No separate independence condition is needed, since determinant one already forces the columns independent.

</details>

### REP-12-08 — Double transitivity

Show that translations in the stabiliser of ∞ imply double transitivity of the projective-line action once transitivity is known.

<details>
<summary>Hint 1</summary>

Send the first point of an ordered distinct pair to ∞.

</details>
<details>
<summary>Hint 2</summary>

Then use a stabiliser element to position the second point.

</details>
<details>
<summary>Full solution</summary>

Given ordered distinct pairs (x,y) and (x',y'), first use transitivity to send x and x' separately to ∞. Their second points become finite coordinates. A translation fixes ∞ and sends one finite coordinate to the other. Composing the first map, that translation and the inverse of the second map sends (x,y) to (x',y'). Thus all distinct ordered pairs form one orbit.

</details>

### REP-12-09 — Projective kernel

Prove a matrix fixing every F_p-line in F_p² is scalar, including p=2.

<details>
<summary>Hint 1</summary>

Fixing the two coordinate lines makes it diagonal.

</details>
<details>
<summary>Hint 2</summary>

Then impose preservation of the line spanned by (1,1).

</details>
<details>
<summary>Full solution</summary>

A matrix preserving the coordinate lines is diag(a,d), with both entries nonzero. Its image of (1,1) is (a,d). To span the same line this must be a scalar multiple of (1,1), hence a=d. Thus the matrix is scalar. In SL_2 its scalar satisfies a²=1. Over F_2 only a=1 occurs; over odd F_p the solutions are ±1.

</details>

### REP-12-10 — A p=5 value

Evaluate the Steinberg character at [[0,−1],[1,0]] in SL_2(F_5).

<details>
<summary>Hint 1</summary>

Its characteristic polynomial is x²+1.

</details>
<details>
<summary>Hint 2</summary>

In F_5, both 2² and 3² equal −1.

</details>
<details>
<summary>Full solution</summary>

The characteristic polynomial has the distinct roots 2 and 3 in F_5. Thus the matrix has exactly two projective eigenlines. Its permutation character is two, and the sum-zero character is two minus one, namely one. The same written matrix over F_3 has no eigenline because x²+1 is irreducible there, so its corresponding value is −1.

</details>

### REP-12-11 — The small Steinberg cases

Identify St_2 and St_3 with representations already constructed in this book.

<details>
<summary>Hint 1</summary>

Their projective sets have three and four points.

</details>
<details>
<summary>Hint 2</summary>

Compute image orders using the scalar kernels.

</details>
<details>
<summary>Full solution</summary>

For p=2, SL_2(F_2) has order six and trivial projective kernel, so acts as all S_3 on three points. Its sum-zero degree-two representation is the standard S_3 plane. For p=3, the group has order 24 and kernel {±I}, so its image on four points has order twelve, hence is A_4. Its sum-zero degree-three representation is the tetrahedral irreducible. These identifications concern the projective quotient actions.

</details>

### REP-12-12 — Scope of the SL_2 family

For p=5, show the trivial representation and St_5 cannot exhaust all irreducibles of SL_2(F_5).

<details>
<summary>Hint 1</summary>

The group order is 120.

</details>
<details>
<summary>Hint 2</summary>

Compare 1²+5² with that order.

</details>
<details>
<summary>Full solution</summary>

The two known degree squares sum to 1+25=26, whereas |SL_2(F_5)|=5(25−1)=120. The regular degree-square identity leaves 94 unaccounted for, so other irreducibles necessarily exist. Our projective-line construction gives a uniform interesting family, not the full character table. Also St_5 kills −I, so it cannot alone detect every feature of the double cover SL_2→PSL_2.

</details>

## 8. Summary and next connection

Dihedral matrices and the degree-square certificate give complete dihedral lists. Quotients and permutation actions construct complete A_4 and S_4 tables. Double transitivity constructs the degree-p projective-line irreducible of SL_2(F_p), with character values determined by eigenlines and an explicitly stated quotient kernel. The next chapter changes the coefficient field and examines [modular representations](modular-representations-first-look.md), where these semisimple methods can fail.
