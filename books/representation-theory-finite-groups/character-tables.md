
# Character Tables

Read [Characters and Orthogonality](characters-and-orthogonality.md) first. Throughout this chapter representations and characters are complex, and $D_n$ denotes the dihedral group of order $2n$. The earlier Euler character-table reading is preserved and expanded here; its original source and identity remain available in Computational Algebra.

## What a character table encodes

A **character table** is the matrix whose rows are indexed by irreducible representations of a finite group and whose columns are indexed by conjugacy classes. The entry in row $i$ and column $j$ is the value of the $i$-th irreducible character on the $j$-th conjugacy class. This square matrix encapsulates the representation theory of the group in a compact, computationally accessible form. From it we can decompose any representation, test irreducibility, and compute tensor products.

## Orthogonality and the shape of the table

Let $G$ be a finite group with $r$ conjugacy classes. Over $\mathbb{C}$, there are exactly $r$ irreducible representations, so the character table is $r \times r$.

**First orthogonality relation.** For irreducible characters $\chi_{i}$ and $\chi_{j}$,

$$\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g) \overline{\chi_{j}(g)} = \delta_{ij}.$$

**Second orthogonality relation.** For conjugacy classes $C_{k}$ and $C_{l}$ with representatives $g_{k}$ and $g_{l}$,

$$\sum_{i=1}^{r} \chi_{i}(g_{k}) \overline{\chi_{i}(g_{l})} = \frac{|G|}{|C_{k}|} \delta_{kl}.$$

The first relation says rows are orthogonal (weighted by class size). The second says columns are orthogonal.

## Building the character table of $S_{3}$

The group $S_{3}$ has three conjugacy classes: $\{e\}$, the three transpositions, and the two $3$-cycles. There are three irreducible representations: trivial, sign, and standard (degree $2$).

We know $\chi_{\text{triv}} = (1, 1, 1)$ and $\chi_{\text{sign}} = (1, -1, 1)$. For the standard representation, $\chi_{\text{std}}(e) = 2$. The permutation representation on $\{1, 2, 3\}$ has character $(3, 1, 0)$, and it decomposes as trivial plus standard, so $\chi_{\text{std}} = (3, 1, 0) - (1, 1, 1) = (2, 0, -1)$.

The character table is:

$$\begin{array}{c|ccc}
S_{3} & 1 & (12) & (123) \\\
\chi_{\text{triv}} & 1 & 1 & 1 \\\ 
\chi_{\text{sign}} & 1 & -1 & 1 \\\ 
\chi_{\text{std}} & 2 & 0 & -1
\end{array}$$

Verify orthogonality: for rows $2$ and $3$,

$$\frac{1}{6}\bigl(1 \cdot 2 + 3 \cdot (-1) \cdot 0 + 2 \cdot 1 \cdot (-1)\bigr) = \frac{1}{6}(2 + 0 - 2) = 0.$$

## The character table of $D_{4}$

The dihedral group $D_{4}$ of order $8$ has five conjugacy classes: $\{e\}$, $\{r^{2}\}$, $\{r, r^{3}\}$, $\{s, r^{2}s\}$, $\{rs, r^{3}s\}$. There are five irreducible representations. Four have degree $1$ (because $D_{4}/\langle r^{2} \rangle \cong C_{2} \times C_{2}$ is abelian of order $4$), and one has degree $2$ (since $1^{2} + 1^{2} + 1^{2} + 1^{2} + 2^{2} = 8$).

The degree-$2$ representation sends $r$ to a rotation matrix and $s$ to a reflection. Its character is $(2, -2, 0, 0, 0)$. The four $1$-dimensional characters factor through the quotient $C_{2} \times C_{2}$ and are determined by the images of $r$ and $s$, each $\pm 1$.

## Decomposing representations

Given a representation $V$ with character $\chi_{V}$, its decomposition into irreducibles is determined by inner products:

$$V \cong \bigoplus_{i} m_{i} V_{i}, \qquad m_{i} = \langle \chi_{V}, \chi_{i} \rangle = \frac{1}{|G|} \sum_{g \in G} \chi_{V}(g) \overline{\chi_{i}(g)}.$$

**Worked example.** Decompose the action of $S_{3}$ on the set of ordered pairs $\{(i, j) : i \neq j\}$.

**Solution.** There are $6$ such pairs. The character counts pairs fixed coordinatewise:

$\chi(g)=|\{(i,j):i\ne j,\ g(i)=i,\ g(j)=j\}|$.

The identity fixes all six pairs. A transposition fixes only one point, so it fixes no ordered pair of distinct points, and a $3$-cycle fixes none. Thus $\chi=(6,0,0)$. The inner products are:
- $m_{\text{triv}} = (6 + 0 + 0)/6 = 1$,
- $m_{\text{sign}} = (6 + 0 + 0)/6 = 1$,
- $m_{\text{std}} = (12 + 0 + 0)/6 = 2$.

So $V \cong V_{\text{triv}} \oplus V_{\text{sign}} \oplus 2 V_{\text{std}}$.

## Common errors

- **Forgetting complex conjugation.** Characters of real representations are real-valued, but complex characters need not be. For $C_4$, the character sending a generator to $i$ has nonreal values and satisfies $\chi(g^{-1})=\overline{\chi(g)}$. Every irreducible character of $S_4$ itself is real-valued.
- **Using the wrong class sizes in orthogonality.** The first orthogonality relation can be rewritten as $\sum_{k} |C_{k}| \chi_{i}(g_{k}) \overline{\chi_{j}(g_{k})} = |G| \delta_{ij}$. Omitting the factor $|C_{k}|$ destroys orthogonality.
- **Assuming the character table determines the group.** Non-isomorphic groups can have identical character tables; the quaternion group $Q_{8}$ and the dihedral group $D_{4}$ both have the same character table.


## A complete construction of the dihedral rows

The order-eight dihedral presentation is D_4=⟨r,s:r⁴=s²=e, srs=r^(−1)⟩. To justify its four linear characters, send r↦a and s↦b with a,b∈{1,−1}. Every defining relation holds: a⁴=b²=1 and bab=a=a^(−1). These four homomorphisms are distinct, so give four inequivalent one-dimensional irreducibles. On the ordered classes e,r²,{r,r³},{s,r²s},{rs,r³s}, their rows are (1,1,a,b,ab).

For the remaining representation use
$$R=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
S=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$
They satisfy the presentation relations, so actually construct a representation. Its character is (2,−2,0,0,0). Its norm, with weights 1,1,2,2,2, is (4+4)/8=1, proving irreducibility. The squared degrees total 4·1²+2²=8, proving completeness. Therefore the table is
$$
\begin{array}{c|rrrrr}
 &e&r^2&r,r^3&s,r^2s&rs,r^3s\\ \hline
\chi_{++}&1&1&1&1&1\\
\chi_{+-}&1&1&1&-1&-1\\
\chi_{-+}&1&1&-1&1&-1\\
\chi_{--}&1&1&-1&-1&1\\
\theta&2&-2&0&0&0
\end{array}
$$
For example, the r² column has squared norm eight and therefore centraliser size eight, as expected for a central element. The r column has squared norm four and centraliser size four.

Orthogonality was used after constructing the two-dimensional representation. It would not have been enough to invent the last row to satisfy equations and then assume it was a character. A table-construction argument must either exhibit the representations or explain why a character-existence theorem supplies them.

## Worked example: the tetrahedral group A_4

The normal Klein four subgroup N consists of the identity and the three double transpositions. The quotient A_4/N is cyclic of order three. Composing its quotient map with the three complex characters of C_3 constructs three linear characters, denoted 1,λ,λ².

There are four conjugacy classes: e of size one, the double transpositions of size three, and two size-four classes of 3-cycles. To see the latter sizes, the centraliser in A_4 of a 3-cycle is its cyclic subgroup of order three, so each class has size twelve divided by three. Inversion exchanges these two classes. A 3-cycle is not conjugate to its inverse in A_4, because a conjugating permutation reversing its support has odd sign.

The coordinate permutation action on C⁴ has a fixed line and a three-dimensional sum-zero complement W. Its trace counts fixed points, so χ_W=(3,−1,0,0). Its norm is (9+3)/12=1, proving irreducibility. The three quotient characters and W have degree squares 1+1+1+9=12, proving completeness. Choose the two 3-cycle representatives so that λ has values ω and ω². The table is
$$
\begin{array}{c|rrrr}
&e&N\setminus\{e\}&C&C^{-1}\\ \hline
1&1&1&1&1\\
\lambda&1&1&\omega&\omega^2\\
\lambda^2&1&1&\omega^2&\omega\\
\chi_W&3&-1&0&0
\end{array}.
$$
The nonreal entries are forced by the quotient action, not by a choice of a nonreal basis for a real representation. Complex conjugation exchanges λ and λ².

## What the table recovers

The identity column gives every irreducible degree and hence the group order Σ_i d_i². The squared norm of a class column gives its centraliser size, so its class size is the group order divided by that norm. The degree-one rows are precisely the homomorphisms G→C^×. They factor through the abelianisation because a commutator maps to 1 in the abelian target.

A representation kernel is the union of classes on which its character equals its degree. Thus the table records kernels of irreducibles and of arbitrary direct sums: the latter are intersections of their constituent kernels. In fact every normal subgroup N occurs as such an intersection. Inflate the faithful regular representation of G/N to G; its kernel is exactly N, and its irreducible constituents have kernel intersection N. This is an existence statement about table data and representations, rather than a procedure for recovering individual subgroup elements without a labelled group.

A central class has one element. Equivalently its column norm is |G|. Since |χ_i(g)|≤d_i and Σ_i d_i²=|G|, this occurs exactly when every irreducible operator ρ_i(g) is scalar. The regular action then assembles those scalar blocks; the class-size formula confirms that g lies in the centre.

## Worked example: equal tables with different power maps

For Q_8, take
$$\rho(i)=\begin{pmatrix}i&0\\0&-i\end{pmatrix},\qquad
\rho(j)=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.$$
Both square to −I and anticommute, giving a representation of the quaternion relations. Its values on the five classes {1},{−1},{±i},{±j},{±k} are (2,−2,0,0,0). Its norm is one. Four linear characters come from Q_8/{±1}≅C_2×C_2. Hence the complete table agrees with the D_4 table after matching columns.

The groups are not isomorphic: D_4 has five elements of order two, while Q_8 has only −1. The ordinary table does not include the map that tells which class contains g². Every noncentral quaternion squares to −1; in D_4 the four reflections square to e, while r and r³ square to r².

This distinction changes the quantity |G|^(−1)Σ_g θ(g²) for the degree-two row. For D_4 it is [2·2+2·(−2)+4·2]/8=1. For Q_8 it is [2·2+6·(−2)]/8=−1. The later indicator chapter interprets these values through real and quaternionic forms. Here they simply exhibit additional information supplied by the power map beyond an unlabeled ordinary table.

## A disciplined table calculation

Begin with conjugacy classes and exact class sizes. Construct available representations from permutation actions, quotients or known matrices. Decompose their characters using weighted inner products. Use orthogonality to constrain missing entries, but justify the existence and irreducibility of any claimed new row. Finish with the degree-square or class-count completeness argument.

A table of orthogonal vectors of the right dimensions can still contain noncharacters if the representation-existence step is omitted. Conversely, exact constructed rows plus a saturated degree-square sum already prove completeness; no numerical approximation is necessary. For cyclotomic values, keep exact root-of-unity relations such as 1+ω+ω²=0 rather than interpreting rounded decimals as exact orthogonality.


## Rational character values and the field of matrices

The Q_8 degree-two row has only integer entries, yet it cannot be realised by real two-by-two matrices. Here is an elementary proof independent of the later indicator formula. In that representation the central element minus one must act as minus the identity. Thus real matrices A,B for i,j would satisfy A²=B²=−I and AB=−BA.

For any nonzero real vector v, the vectors v,Av are independent: a dependence would produce a real eigenvalue of A, impossible when its square is minus one. In that basis A has matrix J=[[0,−1],[1,0]]. Solving BJ=−JB forces B to have the form [[a,b],[b,−a]]. Its square is (a²+b²)I, which cannot be −I over R. This contradiction rules out a real form of degree two, and therefore also rules out a rational one.

The rational character values are compatible with this obstruction. A trace is a sum of eigenvalues, and the sum can lie in a smaller field even when no common basis puts every action matrix in that field. By contrast the S_3 standard plane was explicitly constructed with integer matrices, so it really does admit a rational form.

Consequently a character table over C classifies complex representation isomorphism types. To answer a field-of-definition question, one needs additional descent evidence, such as actual matrices, an invariant form or the indicator calculation developed later. Merely reading rational or real numbers in a row does not supply that evidence.

## Equal permutation characters can hide different set actions

The table also forgets some data that existed before linearisation. Consider two S_3-sets. Let X be a regular six-element orbit together with two fixed points. Let Y be a two-element coset orbit S_3/C_3 together with two copies of the three-element orbit S_3/C_2. Both sets have eight elements.

On the classes identity, transpositions and 3-cycles, the regular orbit has fixed-point counts (6,0,0). Each fixed point contributes (1,1,1), so χ_X=(8,2,2). The two-element orbit contributes (2,0,2), and each three-element orbit contributes (3,1,0). Therefore χ_Y is the same triple (8,2,2).

The complex permutation representations are isomorphic because their characters agree. Their common decomposition has three trivial constituents, one sign constituent and two standard-plane constituents; multiplying each multiplicity by its degree gives eight. Yet X and Y are not isomorphic as G-sets. An equivariant bijection must send each orbit onto an orbit of the same size, while the orbit-size lists are six,one,one for X and two,three,three for Y.

This is a concrete boundary on what a table reconstructs. It recovers the linear representation after basis vectors are allowed to mix by a general linear change of basis. It need not recover the distinguished permutation basis or the original set action. When a problem asks for a G-set isomorphism, an arbitrary invertible intertwiner is therefore insufficient; it must also send basis points bijectively to basis points.

The quaternion example also explains a boundary of the complex character criterion. Over C, equality of characters determines isomorphism and an irreducible character has inner product one. A proposed real representation must first be shown to exist over R; a real-valued character table row does not supply that existence. The contradiction with the real matrices proves a failure of descent, even though the complex representation and its complex character are entirely valid. The later Frobenius–Schur indicator detects this obstruction without trying every real matrix realisation.

Cyclotomic arithmetic also explains certain permutations of columns. Let m be the exponent of the finite group and take an integer a coprime to m. Every eigenvalue of every group element is an m-th root of unity. The cyclotomic automorphism raising those roots to the a-th power therefore sends a character value at g to its value at g raised to a as a group element. The latter means the trace at the power element, rather than the a-th power of the original trace. Moreover g and that power generate the same cyclic subgroup, so they have the same centraliser and their conjugacy classes have the same size. This supplies exact compatibility between cyclotomic conjugation, unit power maps and class weights. Powers not coprime to m need not give a permutation and must retain their separate class-power data.

## Practice exercises

### Exercise 1

Construct the character table of $C_{4} = \langle g \rangle$.

<details>
<summary>Hint 1</summary>

For a cyclic group, choose the scalar image of its generator.

</details>
<details>
<summary>Hint 2</summary>

The fourth roots of unity give four distinct one-dimensional actions.

</details>
<details>
<summary>Full solution</summary>

$C_{4}$ is abelian, so every irreducible representation is $1$-dimensional and every element is its own conjugacy class. The four irreducible characters send $g$ to $1, i, -1, -i$. The table is:

$$\begin{array}{c|cccc}
C_{4} & e & g & g^{2} & g^{3} \\\
\chi_{0} & 1 & 1 & 1 & 1 \\\ 
\chi_{1} & 1 & i & -1 & -i \\\ 
\chi_{2} & 1 & -1 & 1 & -1 \\\ 
\chi_{3} & 1 & -i & -1 & i
\end{array}$$

</details>

### Exercise 2

Show that the character table of $Q_{8} = \{\pm 1, \pm i, \pm j, \pm k\}$ is identical to that of $D_{4}$.

<details>
<summary>Hint 1</summary>

Compare the abelian quotients of the two order-eight groups.

</details>
<details>
<summary>Hint 2</summary>

Construct the degree-two Q_8 action using diagonal i and an off-diagonal square root of −I.

</details>
<details>
<summary>Full solution</summary>

$Q_{8}$ has five conjugacy classes: $\{1\}$, $\{-1\}$, $\{\pm i\}$, $\{\pm j\}$, $\{\pm k\}$. The quotient by $\{\pm 1\} \cong C_{2}$ is $C_{2} \times C_{2}$, giving four $1$-dimensional representations. The remaining irreducible representation has degree $2$ because $1^{2} + 1^{2} + 1^{2} + 1^{2} + 2^{2} = 8$. Its character is $(2, -2, 0, 0, 0)$, matching $D_{4}$. The four $1$-dimensional characters also match because both quotients are $C_{2} \times C_{2}$.

</details>

### Exercise 3

Decompose the tensor product $V_{\text{std}} \otimes V_{\text{std}}$ for $S_{3}$.

<details>
<summary>Hint 1</summary>

The tensor-product character is the pointwise product.

</details>
<details>
<summary>Hint 2</summary>

Use class weights 1,3,2 in each inner product.

</details>
<details>
<summary>Full solution</summary>

The character of a tensor product is the product of characters: $\chi_{\text{std}}^{2} = (4, 0, 1)$. Compute inner products with the irreducible characters of $S_{3}$:
- $m_{\text{triv}} = (4 + 0 + 2)/6 = 1$,
- $m_{\text{sign}} = (4 + 0 + 2)/6 = 1$,
- $m_{\text{std}} = (8 + 0 - 2)/6 = 1$.

Thus $V_{\text{std}} \otimes V_{\text{std}} \cong V_{\text{triv}} \oplus V_{\text{sign}} \oplus V_{\text{std}}$.

</details>

### Exercise 4

Over $\mathbb{C}$, prove that the number of irreducible representations of a finite group equals the number of conjugacy classes, using the completeness proof in Chapter 4.

<details>
<summary>Hint 1</summary>

Independence alone does not prove spanning.

</details>
<details>
<summary>Hint 2</summary>

Use the central-element proof of completeness in Chapter 4.

</details>
<details>
<summary>Full solution</summary>

The space of class functions on $G$ has dimension equal to the number of conjugacy classes. Row orthogonality gives independence. Chapter 4 proves spanning: a class function orthogonal to all irreducible characters defines a central group-algebra element with trace zero, hence scalar zero, on every irreducible. It acts by zero on the regular representation and therefore is zero itself. Thus the orthogonal complement vanishes, the irreducible characters form a basis, and their number equals the number of classes.

</details>


### REP-05-05 — Kernels in the dihedral table

Find the kernels of the four linear D_4 characters and of θ.

<details>
<summary>Hint 1</summary>

For a one-dimensional character, the kernel consists of entries equal to 1.

</details>
<details>
<summary>Hint 2</summary>

For θ use entries equal to its degree two, not absolute value two.

</details>
<details>
<summary>Full solution</summary>

The trivial character has kernel D_4. The row χ_(+−) has kernel ⟨r⟩, consisting of e,r²,r,r³. The row χ_(−+) has kernel {e,r²,s,r²s}. The row χ_(−−) has kernel {e,r²,rs,r³s}. Each is an index-two subgroup. The row θ equals two only at e, so its representation is faithful. Its value −2 at r² means that element acts by −I, not by I.

</details>

### REP-05-06 — Vertices of a square

Decompose the D_4 permutation representation on four square vertices. Choose s to fix two opposite vertices.

<details>
<summary>Hint 1</summary>

Count fixed vertices on the five ordered classes used above.

</details>
<details>
<summary>Hint 2</summary>

The permutation character is (4,0,0,2,0).

</details>
<details>
<summary>Full solution</summary>

The identity fixes four vertices, nontrivial rotations fix none, the s-class reflections fix two, and the other reflections fix none. Its inner products with χ_(ab) are [4+2·2b]/8=(1+b)/2, independent of a. Thus χ_(++) and χ_(−+) each occur once, while the two b=−1 rows do not occur. The inner product with θ is 4·2/8=1. The decomposition is χ_(++)+χ_(−+)+θ, of degree 1+1+2=4.

</details>

### REP-05-07 — Tensor square for D_4

Decompose θ⊗θ using its character.

<details>
<summary>Hint 1</summary>

Square the entries pointwise.

</details>
<details>
<summary>Hint 2</summary>

Every linear row has value one on both e and r².

</details>
<details>
<summary>Full solution</summary>

The tensor character is (4,4,0,0,0). Its inner product with any linear row is (4+4)/8=1. Its inner product with θ is (4·2+4·(−2))/8=0. Thus θ⊗θ is the direct sum of all four linear characters. Their total degree four matches dim(θ⊗θ)=2². The same ordinary tensor decomposition holds for the degree-two Q_8 character because its table is the same.

</details>

### REP-05-08 — A_4 tensor square

Use the A_4 table to decompose W⊗W for its degree-three irreducible W.

<details>
<summary>Hint 1</summary>

Its character is (9,1,0,0).

</details>
<details>
<summary>Hint 2</summary>

Weight the double-transposition column by three.

</details>
<details>
<summary>Full solution</summary>

The inner product with each linear character is (9+3)/12=1, because each has value one on N. The inner product with χ_W is (9·3+3·1·(−1))/12=2. Therefore W⊗W≅1⊕λ⊕λ²⊕W⊕W. The dimensions add to 1+1+1+3+3=9. Complex conjugation in the linear rows causes no extra terms because the tensor character vanishes on the two nonreal columns.

</details>

### REP-05-09 — Why class labels matter

The two 3-cycle classes in A_4 have equal size. Show that interchanging them exchanges λ and λ², and explain why this does not change the isomorphism types in the table.

<details>
<summary>Hint 1</summary>

Inspect the two nonreal entries of each linear row.

</details>
<details>
<summary>Hint 2</summary>

A table display has choices of ordering and representative; a representation is defined independently.

</details>
<details>
<summary>Full solution</summary>

The row λ is (1,1,ω,ω²) and λ² is (1,1,ω²,ω). Swapping the two last columns exchanges their displayed patterns; swapping the row names restores the original array. Both representations still exist and are nonisomorphic because their scalar values differ on a fixed labelled 3-cycle. The set of irreducible isomorphism classes is unchanged, but assigning a particular quotient generator to a particular root of unity requires a convention.

</details>

### REP-05-10 — Centre from column norms

Prove a class representative g is central exactly when its character-table column has squared norm |G|.

<details>
<summary>Hint 1</summary>

Column orthogonality identifies that norm with a centraliser order.

</details>
<details>
<summary>Hint 2</summary>

A centraliser has order |G| exactly when it is all G.

</details>
<details>
<summary>Full solution</summary>

The norm is Σ_i|χ_i(g)|²=|C_G(g)|. It equals |G| precisely when C_G(g)=G, which is equivalent to g commuting with every element. Equivalently the class size is one. In the D_4 and Q_8 displays, precisely the first two columns have norm eight, recovering their two-element centres.

</details>

### REP-05-11 — Same table, distinct involutions

Explain why matching the D_4 and Q_8 ordinary character tables does not match their involution counts.

<details>
<summary>Hint 1</summary>

The table includes values on classes but does not label powers of representatives.

</details>
<details>
<summary>Hint 2</summary>

Compare reflection squares with squares of ±i,±j,±k.

</details>
<details>
<summary>Full solution</summary>

In D_4, r² and all four reflections have order two, giving five involutions. In Q_8, only −1 has order two; all six noncentral elements square to −1 and have order four. Their ordinary table columns can still be matched because no entry specifies where a square lands. A power-map annotation would distinguish the groups, but the common ordinary array alone cannot recover that count.

</details>

### REP-05-12 — Certifying completeness

Suppose five pairwise inequivalent irreducible representations of a group of order 24 have degrees 1,1,2,3,3. Prove the list is complete. Explain why the same degree list without constructed representations is insufficient.

<details>
<summary>Hint 1</summary>

Compute the sum of degree squares.

</details>
<details>
<summary>Hint 2</summary>

Every missing irreducible contributes a positive square in the regular representation.

</details>
<details>
<summary>Full solution</summary>

The sum is 1+1+4+9+9=24. The regular-representation identity accounts for the degree squares of all irreducibles, so an omitted irreducible would make the total exceed the group order. Thus the constructed list is complete. A bare numerical partition of 24 into squares does not prove that representations of those degrees exist or are inequivalent. The construction and irreducibility hypotheses provide that essential evidence.

</details>

## Looking backward and forward

Character tables compress the representation theory of a finite group into a matrix that can be manipulated by hand or by program. The next chapter identifies the [group algebra](group-algebra-wedderburn.md) as a product of matrix algebras. The final project turns a constructed S_4 table into an exact certificate. Computational group methods supply conjugacy classes, but ordinary character data do not determine the group uniquely.
