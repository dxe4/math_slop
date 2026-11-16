
# Jordan Chains and Nilpotent Structure {#section-1-jordan-chains-and-nilpotent-structure}

Once the minimal polynomial splits, primary decomposition reduces classification to nilpotent operators. A nilpotent map is recorded by chains that move one step toward zero. Their lengths are determined by kernel growth, so Jordan structure is theorem rather than guesswork.

<a id="section-3-1-chains-and-blocks"></a>
## 1. Chains and blocks {#section-5-1-chains-and-blocks}

**Definition 16.1 (Chains and Jordan-block convention).**

For nilpotent $N$, a Jordan chain of length $s$ is $(v,Nv,\ldots,N^{s-1}v)$ with $N^s v=0$ and $N^{s-1}v\ne 0$, often ordered reversely so the matrix block $J_s(0)$ has ones above the diagonal. For $T=\lambda I+N$, the same chain yields $J_s(\lambda)$.

The nilpotent classification theorem says $V$ has a basis partitioned into such chains, and the multiset of lengths is unique. Thus a split operator is a direct sum of Jordan blocks.

<a id="section-11-2-kernel-growth-determines-blocks"></a>
## 2. Kernel growth determines blocks {#section-13-2-kernel-growth-determines-blocks}

**Proposition 16.1 (Kernel growth recovers block counts).**

Let $d_k=\operatorname{dim} \operatorname{ker} N^k$, with $d_0=0$. A block of size $s$ contributes $\min(k,s)$ to $d_k$. Therefore

$b_k=d_k-d_{k-1}$

is the number of blocks of size at least $k$, and

$c_k=b_k-b_{k+1}=2d_k-d_{k-1}-d_{k+1}$

is the number of blocks of size exactly $k$. Hence kernel dimensions uniquely recover the partition.

The sequence $b_k$ is nonincreasing; equivalently kernel increments decrease. This supplies a consistency check for proposed data.

<a id="section-27-3-constructing-chain-bases"></a>
## 3. Constructing chain bases {#section-29-3-constructing-chain-bases}

Choose complements $C_k$ so that

$\operatorname{ker} N^k=\bigl(\operatorname{ker} N^{k-1}+N(\operatorname{ker} N^{k+1})\bigr) \oplus C_k$.

For each basis vector $c\in C_k$, use $(c,Nc,\ldots,N^{k-1}c)$ as a chain and combine these chains over all $k$. The complement condition chooses chain heads that cannot be absorbed into shorter chains or extended from a higher kernel level. Independence follows by applying the largest relevant power of $N$ and descending through chain levels. Spanning follows from the dimension count encoded by $d_k$.

This constructive proof uses choices of lifts, so chain vectors are noncanonical even though chain lengths are canonical.

<a id="section-37-4-jordan-theorem"></a>
## 4. Jordan theorem {#section-39-4-jordan-theorem}

**Theorem 16.2 (Jordan form under splitting).**

If $m_T$ splits over $F$, primary decomposition gives $V=\oplus G_{\lambda}$. On each component $N_{\lambda}=T-\lambda I$ is nilpotent; choose its chain basis. Concatenation yields Jordan normal form. It is unique up to permutation of blocks because kernel growth for each $T-\lambda I$ recovers all sizes.

The exponent of $(t-\lambda)$ in $m_T$ is the largest block size. Algebraic multiplicity is the sum of block sizes, and geometric multiplicity is the number of blocks.

<a id="section-45-5-powers-and-functions"></a>
## 5. Powers and functions {#section-47-5-powers-and-functions}

For a block $J=\lambda I+N$ of size $s$,

$J^m=\sum_{k=0}^{\min(m,s-1)} \binom{m}{k}\lambda^{m-k}N^k\qquad(m\ge 0)$.

For polynomials, Taylor expansion is exact:

$p(\lambda I+N)=\sum_{k=0}^{s-1} p^{(k)}(\lambda)N^k/k!$

when the required factorials are invertible; Hasse derivatives give a characteristic-safe formulation. This explains why derivatives of functions appear beside Jordan blocks.

<a id="section-57-6-boundaries"></a>
## 6. Boundaries {#section-59-6-boundaries}

Jordan form requires splitting. It is extremely perturbation-sensitive and generally unsuitable as a floating-point computational form; Schur form is stable under unitary transformations. Even when a Jordan form exists, a chosen chain basis can be catastrophically ill-conditioned.

<a id="section-61-7-worked-reconstruction-from-kernel-data"></a>
## 7. Worked reconstruction from kernel data {#section-63-7-worked-reconstruction-from-kernel-data}

**Worked example 16.1 (Reconstruct a nilpotent partition and audit ranks).**

Suppose $N$ acts on a ten-dimensional space and exact computation gives

$\operatorname{dim} \operatorname{ker} N=4$, $\operatorname{dim} \operatorname{ker} N^2=7$, $\operatorname{dim} \operatorname{ker} N^3=9$, $\operatorname{dim} \operatorname{ker} N^4=10$.

Set $d_0=0$. The increments are

$b_1=4$, $b_2=3$, $b_3=2$, $b_4=1$, and $b_5=0$.

Thus there are four chains total, three of length at least two, two of length at least three, and one of length at least four. Subtract consecutive values:

- exactly length four: $b_4-b_5=1$;
- exactly length three: $b_3-b_4=1$;
- exactly length two: $b_2-b_3=1$;
- exactly length one: $b_1-b_2=1$.

The partition is therefore $(4,3,2,1)$, whose sizes sum to ten. The rank sequence provides a cross-check: $\operatorname{rank} N^k=10-d_k$, hence $(6,3,1,0)$. Directly from the partition, a block of size $s$ contributes $\max(s-k,0)$ to $\operatorname{rank}N^k$. Thus the four blocks contribute $3+2+1+0=6$ for $N$, $2+1+0+0=3$ for $N^2$, $1+0+0+0=1$ for $N^3$, and zero for $N^4$. Writing the contributions before summing prevents the common off-by-one error.

This example demonstrates a reliable workflow: include $d_0$, take first differences for “at least,” take second differences for “exactly,” check that block sizes sum to dimension, and independently recover ranks.

<a id="section-84-8-worked-jordan-classification"></a>
## 8. Worked Jordan classification {#section-86-8-worked-jordan-classification}

**Worked example 16.2 (Classify two eigenvalue components).**

Let $T$ have characteristic polynomial $(t-2)^5(t+1)^3$ over $R$, with

$\operatorname{dim} \operatorname{ker}(T-2I)=2$, $\operatorname{dim} \operatorname{ker}(T-2I)^2=4$, $\operatorname{dim} \operatorname{ker}(T-2I)^3=5$,

and

$\operatorname{dim} \operatorname{ker}(T+I)=2$, $\operatorname{dim} \operatorname{ker}(T+I)^2=3$.

For eigenvalue two, increments $(2,2,1)$ say two blocks reach length two and one reaches length three. Hence block sizes are $(3,2)$. For eigenvalue $-1$, increments $(2,1)$ give sizes $(2,1)$. The Jordan form is

$J_3(2) \oplus J_2(2) \oplus J_2(-1) \oplus J_1(-1)$.

The minimal polynomial is $(t-2)^3(t+1)^2$, taking the largest size at each eigenvalue. Geometric multiplicities are two and two; algebraic multiplicities are five and three. None of these conclusions requires solving for chain vectors. To construct a similarity matrix, however, one must choose chain heads and solve preimage equations; classification data determine lengths but not a preferred basis.

<a id="section-102-9-chains-and-discrete-dynamics"></a>
## 9. Chains and discrete dynamics {#section-104-9-chains-and-discrete-dynamics}

For $J=\lambda I+N$, the binomial formula reveals polynomial factors multiplying exponential ones. For $m\ge 2$ on a length-three chain,

$J^m=\lambda^mI+m \lambda^{m-1}N+\binom{m}{2}\lambda^{m-2}N^2$.

If $\lambda=1$ over $R$, orbit coordinates can grow quadratically even though every eigenvalue has absolute value one. Thus eigenvalue magnitudes alone do not control powers of a nonnormal, nondiagonalizable operator. If $\left|\lambda\right|<1$, polynomial factors are eventually dominated by exponential decay, but transient growth can still be large in an ill-conditioned chain basis. These are normed-field statements, not assertions over arbitrary $F$.

In characteristic $p$, binomial coefficients reduce modulo $p$. For example $(I+N)^p=I+N^p$ when the intermediate binomial coefficients vanish. If $N^p=0$, the operator can have finite order $p$; the same displayed Jordan block therefore supports different dynamical conclusions in different fields.

<a id="section-112-10-error-clinic"></a>
## 10. Error clinic {#section-114-10-error-clinic}

**Counting one kernel vector per block size rather than per block.** $\operatorname{dim} \operatorname{ker} N$ counts all blocks, including multiple blocks of the same size.

**Reading $d_k-d_{k-1}$ as exact size.** It counts blocks of size *at least* $k$. Take another difference for exact size.

**Choosing chain vectors only inside $\operatorname{ker} N$.** Kernel vectors are chain endpoints. Longer chains require preimages under $N$, which may not exist for an arbitrary kernel vector at the required depth.

**Using characteristic multiplicity as chain length.** Algebraic multiplicity is a total size. The largest chain is controlled by the minimal-polynomial exponent.

**Assuming chain order conventions are universal.** Ones may appear above or below the diagonal depending on whether a chain is listed head-to-tail or tail-to-head. State the convention before comparing matrices.

**Inferring blocks from rounded rank.** Every $d_k$ in the reconstruction must be exact or certified. Thresholded singular values can change the inferred partition; a numerical Schur analysis makes a different, stable claim.

<a id="section-126-11-proof-detail-why-kernel-increments-decrease"></a>
## 11. Proof detail: why kernel increments decrease {#section-128-11-proof-detail-why-kernel-increments-decrease}

**Lemma 16.3 (Monotonicity of kernel increments).**

There is a direct proof that does not assume Jordan form. For $k\ge 1$, define a map

$\phi_k:\operatorname{ker} N^{k+1}/\operatorname{ker} N^k \to  \operatorname{ker} N^k/\operatorname{ker} N^{k-1}$

by $\phi_k(v+\operatorname{ker} N^k)=Nv+\operatorname{ker} N^{k-1}$. It is well-defined: changing $v$ by $z \in \operatorname{ker} N^k$ changes $Nv$ by an element of $\operatorname{ker} N^{k-1}$. It is injective: if $Nv \in \operatorname{ker} N^{k-1}$, then $N^kv=0$, so $v \in \operatorname{ker} N^k$ and its quotient class is zero.

Therefore

$\operatorname{dim} \operatorname{ker} N^{k+1}-\operatorname{dim} \operatorname{ker} N^k \le  \operatorname{dim} \operatorname{ker} N^k-\operatorname{dim} \operatorname{ker} N^{k-1}$.

The declining increments are thus a theorem before any chain basis has been built. They also tell us how to choose chains: quotient directions at level $k+1$ inject into those at level $k$, so each surviving high-level direction must continue downward. Jordan blocks turn these nested injections into explicit strings of basis vectors.

<a id="section-142-12-constructing-actual-chains-in-a-four-dimensional-exa"></a>
## 12. Constructing actual chains in a four-dimensional example {#section-144-12-constructing-actual-chains-in-a-four-dimensional-exa}

Let $N$ have matrix

$\begin{pmatrix}0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0\end{pmatrix}$

in the standard basis. Then $Ne_3=e_2$, $Ne_2=e_1$, and $Ne_1=Ne_4=0$. Kernel data are $d_1=2$, $d_2=3$, $d_3=4$, so the increments $(2,1,1)$ prescribe blocks of sizes three and one.

To construct them, begin at the highest nonzero level. Choose $e_3$, whose second image $e_1$ is nonzero, producing chain $(e_3,e_2,e_1)$. The remaining kernel direction $e_4$ is not already the endpoint of that chain, so it supplies the length-one chain. Concatenating in the convention $(e_1,e_2,e_3,e_4)$ gives ones above the diagonal; concatenating heads first gives the transpose block convention.

Now replace $e_3$ by $e_3+e_4$. Its images are still $e_2,e_1$, and $(e_3+e_4,e_2,e_1,e_4)$ is another chain basis with the same block sizes. This shows concretely why Jordan vectors are not canonical. The invariant information is the filtration by kernels and its quotient dimensions, not a preferred lift through $N$.

<a id="section-154-exercises-with-full-solutions"></a>
## 13. A filtration basis can be certified one quotient at a time {#section-607-13-a-filtration-basis-can-be-certified-one-quotient-at-}

The general chain theorem needs more than independently constructed single chains: chains can overlap. A useful lemma separates that global issue from the choice of heads. Suppose
\[
 0=K_0\subseteq K_1\subseteq\cdots\subseteq K_s=V
\]
is a finite filtration. At each level $j$, choose a list $B_j$ in $K_j$ whose cosets form a basis of $K_j/K_{j-1}$. Then the concatenation of all these lists is a basis of $V$.

For independence, take a linear relation and project it to the highest quotient whose list occurs. All vectors from lower levels vanish there. The remaining coefficients are zero because the chosen cosets are independent. Remove that level and descend. Every coefficient is eventually zero. This argument does not assume the lists at different levels are disjoint in advance; it proves that their union has no overlap capable of causing a dependence.

For spanning, take $v\in K_s$. Its coset in $K_s/K_{s-1}$ is a combination of the cosets of $B_s$. Subtract that combination; the remainder lies in $K_{s-1}$. Repeat with the next quotient. At the end the remainder is in $K_0=0$. Thus the lists span every vector, not merely the vectors already used to build them. The proof gives an explicit descending decomposition procedure.

For a nilpotent operator use $K_j=\ker N^j$, with $s$ such that $N^s=0$. A chain head of length $k$ contributes one vector at each level $1,\ldots,k$: the vector $N^{k-j}v$ lies in $K_j$ but not $K_{j-1}$. The desired chain basis will follow if the vectors contributed at each level project to a basis of that quotient. This is the exact global condition missing from an argument that checks each chain separately.

The kernel increments $b_j=\dim K_j-\dim K_{j-1}$ therefore count how many vectors a chain basis must contribute at level $j$. The earlier quotient-injection proof already shows that these numbers decrease. We will use those actual injections to choose compatible quotient bases, turning the numerical constraint into a construction. No Jordan theorem is assumed in that construction.

<a id="section-621-14-compatible-quotient-bases-produce-all-jordan-chains"></a>
## 14. Compatible quotient bases produce all Jordan chains {#section-623-14-compatible-quotient-bases-produce-all-jordan-chains}

Write $Q_j=K_j/K_{j-1}$ and set $K_{s+1}=K_s=V$, so $Q_{s+1}=0$. The map
\[
 \overline N_j:Q_{j+1}\to Q_j,\qquad
 v+K_j\longmapsto Nv+K_{j-1}
\]
is well-defined and injective by the local proof in Section 11. We reuse that proved lemma rather than assume that applying $N$ to arbitrary chosen bases preserves independence.

Start at $Q_s$ and choose a basis. Moving downwards, the image under $\overline N_j$ of an already chosen basis of $Q_{j+1}$ is independent in $Q_j$. Extend that image to a basis of $Q_j$. Mark just the new basis vectors added at this step. Each marked class at level $j$ will start a chain of length $j$; the inherited classes already belong to longer chains.

Choose a representative $v$ in $K_j$ for each marked class. Because its class is nonzero in $K_j/K_{j-1}$, $N^{j-1}v\ne0$. Its successive images therefore form a length-$j$ chain. At any lower level $i$, the class of $N^{j-i}v$ is exactly the propagated class obtained by composing the quotient injections. The representatives need not satisfy additional correction equations: the quotient maps were defined by applying the actual operator $N$.

By construction, the classes of all chain vectors that reach level $i$ form the selected basis of $Q_i$. The filtration lemma now proves that all chain vectors together are independent and span $V$. This completes existence of a chain basis over any field for every finite-dimensional nilpotent map. It explains both proof obligations, instead of replacing one of them by the other.

The complement formula in Section 3 is the same construction in the original spaces. The inherited subspace of $Q_j$ is
\[
 \bigl(K_{j-1}+N(K_{j+1})\bigr)/K_{j-1}.
\]
Choosing a complement $C_j$ to $K_{j-1}+N(K_{j+1})$ inside $K_j$ selects representatives for the new quotient directions. A basis of each $C_j$ may therefore be used as the chain heads. The argument above shows why those choices work collectively, not merely why an individual head has the right length.

There are $b_j-b_{j+1}$ marked classes at level $j$, since the inherited subspace has dimension $b_{j+1}$. Consequently the construction has exactly the block counts in the earlier kernel formulas. Listing each chain tail first gives ones above the diagonal; listing it head first reverses that convention. Once existence is proved, uniqueness of the multiset of lengths follows from the already-derived kernel counts. The vectors and complements remain choices even though the count of every chain length is fixed.

<a id="section-644-15-a-five-dimensional-construction-with-overlapping-loo"></a>
## 15. A five-dimensional construction with overlapping-looking images {#section-646-15-a-five-dimensional-construction-with-overlapping-loo}

**Worked example 16.3 (Construct the actual chain basis).**

Let $V$ have basis $e_1,\ldots,e_5$ over any field and define $N$ by
\[
 Ne_1=0,\quad Ne_2=e_1,\quad Ne_3=e_2,\quad
 Ne_4=e_1,\quad Ne_5=e_4-e_2.
\]
Every basis image has been prescribed, so this determines a linear operator. Its images are not merely disjoint strings of standard basis vectors: $e_2$ and $e_4$ share the same image, and the fifth image is a difference. Those overlaps are precisely where careless chain selection can fail.

Solving the zero-image equation gives
\[
 K_1=\operatorname{span}(e_1,e_4-e_2).
\]
Indeed for coefficients $a_i$, the image is $(a_2+a_4)e_1+(a_3-a_5)e_2+a_5e_4$, which vanishes exactly when $a_5=a_3=0$ and $a_4=-a_2$. Also $N^2e_3=e_1$ and $N^2$ kills the other four standard vectors, so
\[
 K_2=\operatorname{span}(e_1,e_2,e_4,e_5),\qquad K_3=V.
\]
The dimensions are $2,4,5$. Their increments $(2,2,1)$ require one chain of length three and one of length two.

Choose the top quotient direction represented by $e_3$. Its chain is $e_3,e_2,e_1$. At level two, the inherited class is represented by $e_2$, and one new class is represented by $e_5$. Its chain is $e_5,e_4-e_2$. Their endpoints $e_1$ and $e_4-e_2$ form the kernel basis; no additional length-one chain is needed.

The tail-first concatenation is
\[
 B=(e_1,e_2,e_3,e_4-e_2,e_5).
\]
It is visibly a basis: replacing the fourth vector by itself plus the second recovers the standard list. Its conversion matrix is $P=I-E_{24}$ and its inverse is $I+E_{24}$, because $E_{24}^2=0$. Applying $N$ to each displayed vector shows
\[
 P^{-1}NP=J_3(0)\oplus J_2(0).
\]
This is a complete exact similarity witness, with no computation inferred from a rounded rank.

The complement formula is also checkable. At level three choose $C_3=\operatorname{span}(e_3)$, since $K_2$ has codimension one. At level two, $K_1+N(K_3)=\operatorname{span}(e_1,e_2,e_4)$, so $C_2=\operatorname{span}(e_5)$ completes $K_2$. At level one, $N(K_2)=K_1$, so $C_1=0$. These choices reproduce the two chain heads above in every characteristic. The minus signs are field operations, and no division or ordering of scalars is used.

<a id="section-679-16-hasse-coefficients-make-polynomial-evaluation-charac"></a>
## 16. Hasse coefficients make polynomial evaluation characteristic-safe {#section-681-16-hasse-coefficients-make-polynomial-evaluation-charac}

Ordinary Taylor notation divides by factorials. For polynomial evaluation on a nilpotent block there is a simpler definition that avoids that division. Define the Hasse coefficient $p^{[k]}(\lambda)$ by the exact polynomial identity
\[
 p(\lambda+u)=\sum_{k\ge0}p^{[k]}(\lambda)u^k.
\]
The sum is finite. If $p(t)=\sum_j a_jt^j$, the binomial theorem gives
\[
 p^{[k]}(\lambda)
 =\sum_{j\ge k}a_j\binom jk\lambda^{j-k},
\]
where the integer binomial coefficients are interpreted in the field. This formula defines the coefficient in every characteristic, without asking whether $k!$ is invertible.

For $J=\lambda I+N$ with $N^s=0$, substitute the commuting matrix $N$ for $u$ to obtain
\[
 p(J)=\sum_{k=0}^{s-1}p^{[k]}(\lambda)N^k.
\]
The substitution is legitimate because powers of one matrix commute and polynomial identities remain true under such evaluation. Terms of higher degree vanish by nilpotence. This is a finite algebraic identity, not an infinite series approximation.

When $k!$ is invertible, differentiating the monomials shows $p^{(k)}(\lambda)=k!p^{[k]}(\lambda)$, so the ordinary Taylor expression is recovered. In small characteristic, zero ordinary derivatives can hide nonzero Hasse coefficients. For $p(t)=t^p$ in characteristic $p$, its expansion is $\lambda^p+u^p$: the intermediate integer binomial coefficients vanish in the field. The Hasse coefficient of degree $p$ is one even though every positive ordinary derivative is zero.

For an explicit case, work in characteristic two on a size-three block $J=I+N$. Then $J^2=I+N^2$, and $N^2\ne0$. The polynomial $t^2$ has zero first derivative and zero second derivative in the field, but its Hasse coefficient of degree two is one. Dividing an already-zero second derivative by the zero scalar $2!$ is undefined; deleting the term is a false repair. The coefficient identity supplies the missing nonzero matrix contribution.

This perspective also explains the role of the largest block. To annihilate a size-$s$ block at $\lambda$, the first $s$ Hasse coefficients at $\lambda$ must vanish. Necessity follows because $I,N,\ldots,N^{s-1}$ are independent on that chain: apply a relation to its head and use chain independence. Sufficiency follows from the displayed truncation. Over characteristic zero these are the familiar derivative conditions; over arbitrary fields they mean divisibility by $(t-\lambda)^s$ without an illegal factorial division.

<a id="section-704-17-powers-and-inverses-stay-finite-on-a-nilpotent-block"></a>
## 17. Powers and inverses stay finite on a nilpotent block {#section-706-17-powers-and-inverses-stay-finite-on-a-nilpotent-block}

For nonnegative integer $m$, the existing block-power formula is the binomial theorem for the commuting matrices $\lambda I$ and $N$. Its coefficients are integers first and field elements second. There is no division by $k!$ in the assertion that an integer $\binom mk$ is mapped into the field. When $\lambda=0$, the term with exponent zero uses the constant monomial value one; if $m\ge s$, every surviving term vanishes and $J^m=0$. No negative power of a nilpotent block is defined.

If $\lambda\ne0$, set $X=\lambda^{-1}N$. The finite geometric identity gives
\[
 (\lambda I+N)^{-1}
 =\lambda^{-1}\sum_{k=0}^{s-1}(-X)^k.
\]
Multiplying by $\lambda(I+X)$ cancels adjacent terms and leaves $I$ plus a multiple of $X^s$, which is zero. This proves invertibility and the inverse formula over every field. Negative integer powers can then be obtained by multiplying this finite inverse, with no analytic convergence assumption.

Positive characteristic can change the order of an invertible operator. In characteristic $p$, repeated use of the commuting binomial identity gives
\[
 (I+N)^{p^e}=I+N^{p^e}.
\]
For a single block of size $s>1$, let $p^e$ be the least such power with $p^e\ge s$. Then $N^{p^e}=0$, while $N^{p^{e-1}}\ne0$ when $e\ge1$. The operator has order exactly $p^e$: its order divides $p^e$, hence is a power of $p$, and no smaller such power annihilates the nilpotent term. For $s=1$ the operator is the identity and has order one.

Thus a length-three unipotent block has order four in characteristic two and order three in characteristic three. Over $R$ the same nontrivial block has unbounded polynomial growth in some orbit coordinates. These are different theorems in different scalar settings, not a disagreement between two calculations. The finite-order statement uses only exact algebra; the growth statement additionally uses real magnitude.

A chain basis also reveals why eigenvalues alone miss this information. Every unipotent block has eigenvalue one, but a head travels through successively lower chain positions under $N$, leaving binomial contributions in powers of $I+N$. The number of surviving positions controls the degree of those terms. A diagonal block has no such coupling. Jordan theory records those couplings exactly while making no promise that an approximate data matrix has the same chain lengths.

<a id="section-725-18-kernel-endpoints-carry-a-separate-lift-depth-filtrat"></a>
## 18. Kernel endpoints carry a separate lift-depth filtration {#section-727-18-kernel-endpoints-carry-a-separate-lift-depth-filtrat}

An arbitrary nonzero vector in $\ker N$ is an endpoint of a chain of length one. Whether it can end a longer chain is a preimage question. Define
\[
 E_k=\ker N\cap\operatorname{im}N^{k-1}.
\]
A nonzero endpoint $e$ can be realised by a length-$k$ chain exactly when $e\in E_k$. In one direction a chain head $v$ has endpoint $N^{k-1}v$. In the other, if $e=N^{k-1}v$ and $Ne=0$, then $N^kv=0$ and the nonzero endpoint proves that $v$ has precisely the required length.

These endpoint spaces descend: $E_{k+1}\subseteq E_k$. Their dimensions recover the same kernel increments without assuming a chain basis. The map
\[
 N^{k-1}:K_k\longrightarrow E_k
\]
is onto by the preceding preimage argument and has kernel $K_{k-1}$. Rank–nullity therefore gives $\dim E_k=d_k-d_{k-1}=b_k$. The quotient levels describe possible heads modulo shorter directions, while the endpoint levels describe how far a kernel direction can be lifted. They are two descriptions of the same counts.

In the five-dimensional example, write $q=e_4-e_2$. Then $E_1=E_2=\operatorname{span}(e_1,q)$, $E_3=\operatorname{span}(e_1)$ and $E_4=0$. The endpoint $e_1$ supports the length-three chain; $q$ supports only length two. The kernel vector $e_1+q$ also has only lift depth two, because it does not belong to $E_3$. One preimage is $e_2+e_5$, but there is no length-three head ending there. Choosing a convenient kernel basis without checking this filtration can therefore obstruct an attempted chain construction.

This is a useful diagnostic when solving equations by hand. Before repeatedly asking for a preimage of an endpoint, test membership in the appropriate image power. A failed equation may reflect a genuine lack of lift depth rather than an arithmetic error. If the endpoint is liftable, adding an arbitrary element of $\ker N^{k-1}$ to a chosen head preserves its final endpoint, but can change intermediate vectors. Those are legitimate choices only when the collection of all chosen chains remains independent; the quotient-basis construction supplies that global certificate.

The endpoint interpretation also clarifies why a count of kernel vectors alone is insufficient. $\dim\ker N$ tells how many chains there are, while the nested $E_k$ tell how many of their endpoints support each depth. Their successive dimension drops count exactly where chains terminate. A diagram of strings is justified by those inclusions and lift equations, rather than supplied as evidence for them.

<a id="section-745-19-polynomial-evaluation-can-shorten-a-chain-without-ch"></a>
## 19. Polynomial evaluation can shorten a chain without changing its eigenvalue source {#section-747-19-polynomial-evaluation-can-shorten-a-chain-without-ch}

The Hasse formula lets us describe more than the value of a polynomial on a block. Suppose $J=\lambda I+N$ has size $s$, and let $r$ be the least positive index below $s$ for which $p^{[r]}(\lambda)\ne0$. Then
\[
 p(J)-p(\lambda)I=N^rH(N),
\]
where $H(0)=p^{[r]}(\lambda)\ne0$. The factor $H(N)$ is invertible: divide out its nonzero constant coefficient, leaving identity plus a nilpotent polynomial in $N$, and use the finite geometric inverse. It commutes with every power of $N$.

Consequently, for every positive $j$,
\[
 \ker\bigl(p(J)-p(\lambda)I\bigr)^j
 =\ker N^{rj}.
\]
For example, if the left product kills a vector, multiply by the inverse of $H(N)^j$ and commute the factors to obtain $N^{rj}v=0$. The reverse inclusion follows in the same way. Thus its kernel dimensions are $\min(rj,s)$, and the earlier difference formulas determine the new block sizes. If there is no such positive index below $s$, the polynomial value is scalar and all the new blocks have size one.

When $p'(\lambda)\ne0$, the first Hasse coefficient is nonzero and $r=1$. The coupling lengths on this block are preserved even though the eigenvalue changes from $\lambda$ to $p(\lambda)$. When the first nonzero coefficient occurs later, the coupling can shorten. This gives a precise local explanation of why a diagonalizable polynomial in an operator need not make the original operator diagonalizable.

For a size-four nilpotent block and $p(t)=t^2$, the new nilpotent part is $N^2$. Its kernel dimensions are two and four, giving two blocks of size two. This holds in every characteristic because no derivative division was used. The original single length-four chain has split into the even and odd positions under the two-step action.

For a size-three block at eigenvalue one, the same polynomial behaves differently across fields. Over $R$ its first coefficient is $p^{[1]}(1)=2$, so the resulting nilpotent coupling still has one block of size three. In characteristic two, $p(1+u)=1+u^2$, so the new nilpotent part is $N^2$ with kernel dimensions two and three. Its blocks have sizes two and one. This contrast is controlled by the coefficient field and the first nonzero Hasse term, not by a vague rule that taking a power always destroys a Jordan block.

For a direct sum of blocks the calculation applies separately on each invariant summand. Different original eigenvalues can be sent to the same value by $p$, but the summands still give a direct-sum block description; one must combine their block lists rather than replace them by one block of their total dimension. Polynomial evaluation can merge eigenvalues while leaving several independent chains at the merged value.


<a id="section-769-20-optional-practice-extensions"></a>
## 22. Definition and exercise corrections retained with their identities {#section-845-22-definition-and-exercise-corrections-retained-with-th}

Exercise 5 now names a nilpotent operator on a six-dimensional space before giving its three kernel counts. Its original printed heading and solution are retained. The added premise supplies the terminal dimension needed by that solution; it does not alter the general kernel-growth theorem or infer a chain termination from incomplete data.

The opening chain definition now explicitly requires $N^s v=0$ as well as $N^{s-1}v\ne0$. Without the terminal condition a segment of a longer chain need not span an invariant subspace and need not give the stated size-$s$ Jordan block. This definition repair changes no original exercise payload.

<a id="section-849-summary"></a>

## Summary

<a id="section-851-summary"></a>
Jordan chains describe split primary components through nilpotent orbits. Successive kernel dimensions recover the block sizes uniquely, and the largest block determines the corresponding minimal-polynomial exponent. Field characteristic affects polynomial formulas, while numerical perturbations can change exact chain structure.

## Exercises {#section-156-exercises-with-full-solutions}

<a id="section-156-1-chain-independence"></a>
### 1. Chain independence {#section-158-1-chain-independence}
Prove a length-$s$ chain is independent.

<details>
<summary>Hint 1</summary>

Apply a high enough power of N to a proposed dependence.

</details>

<details>
<summary>Hint 2</summary>

Start with the largest chain index carrying a nonzero coefficient and use the nonzero tail vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** In a dependence, apply the highest power of $N$ that leaves the earliest chain term nonzero; it isolates its coefficient. Descend successively to force all coefficients zero.


</details>

<a id="section-181-2-block-kernel"></a>
### 2. Block kernel {#section-183-2-block-kernel}
For $J_s(0)$, compute $\operatorname{dim} \operatorname{ker} J_s(0)^k$.

<details>
<summary>Hint 1</summary>

Write the action on the standard chain vectors.

</details>

<details>
<summary>Hint 2</summary>

Exactly the first min(k,s) chain positions are killed.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each power kills the first $\min(k,s)$ chain positions, so the dimension is $\min(k,s)$.


</details>

<a id="section-206-3-growth-formula"></a>
### 3. Growth formula {#section-208-3-growth-formula}
Prove $d_k-d_{k-1}$ counts blocks of size at least $k$.

<details>
<summary>Hint 1</summary>

Compute the contribution from one block first.

</details>

<details>
<summary>Hint 2</summary>

Its kernel increment is one until k reaches the block size, and zero thereafter.

</details>

<details>
<summary>Solution</summary>

**Solution.** A size-$s$ block contributes one to the difference exactly when $k\le s$; sum over blocks.


</details>

<a id="section-231-4-exact-sizes"></a>
### 4. Exact sizes {#section-233-4-exact-sizes}
Derive $c_k=2d_k-d_{k-1}-d_{k+1}$.

<details>
<summary>Hint 1</summary>

Subtract two consecutive counts of blocks of size at least k.

</details>

<details>
<summary>Hint 2</summary>

Use (d_k−d_{k−1})−(d_{k+1}−d_k).

</details>

<details>
<summary>Solution</summary>

**Solution.** Exact-$k$ blocks equal at-least-$k$ minus at-least-$k+1$; substitute $b_k=d_k-d_{k-1}$.


</details>

<a id="section-256-5-recover-a-partition"></a>
### 5. Recover a partition {#section-258-5-recover-a-partition}
For a nilpotent operator on a six-dimensional space, if $(d_1,d_2,d_3)=(3,5,6)$, find block sizes.

<details>
<summary>Hint 1</summary>

Form the successive kernel increments, including d₀=0.

</details>

<details>
<summary>Hint 2</summary>

They give counts of blocks of size at least 1,2,3; take differences for exact sizes.

</details>

<details>
<summary>Solution</summary>

**Solution.** Increments are $3,2,1$, so block counts at least lengths 1,2,3 are 3,2,1: sizes are $3,2,1$.


</details>

<a id="section-281-6-consistency"></a>
### 6. Consistency {#section-283-6-consistency}
Can $(d_1,d_2,d_3)=(2,5,6)$ occur?

<details>
<summary>Hint 1</summary>

Kernel increments must be weakly decreasing.

</details>

<details>
<summary>Hint 2</summary>

Compare the proposed first two increments.

</details>

<details>
<summary>Solution</summary>

**Solution.** Increments $2,3,1$ increase from 2 to 3, contradicting the nonincreasing at-least-block counts.


</details>

<a id="section-306-7-nilpotency-index"></a>
### 7. Nilpotency index {#section-308-7-nilpotency-index}
Prove the nilpotency index is the largest block size.

<details>
<summary>Hint 1</summary>

A block of length s survives at power s−1 and vanishes at power s.

</details>

<details>
<summary>Hint 2</summary>

For a direct sum, every block must vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** $N^k$ vanishes on a block exactly when $k$ reaches its size; it vanishes globally when it reaches the maximum.


</details>

<a id="section-331-8-geometric-multiplicity"></a>
### 8. Geometric multiplicity {#section-333-8-geometric-multiplicity}
Why is $\operatorname{dim} \operatorname{ker}(T-\lambda I)$ the number of $\lambda$-blocks?

<details>
<summary>Hint 1</summary>

Each λ-block contributes one vector killed by T−λI.

</details>

<details>
<summary>Hint 2</summary>

Blocks for other eigenvalues contribute none because their shifted restrictions are invertible.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each block contributes precisely its terminal chain vector to the kernel, one dimension.


</details>

<a id="section-356-9-algebraic-multiplicity"></a>
### 9. Algebraic multiplicity {#section-358-9-algebraic-multiplicity}
Why is algebraic multiplicity the sum of block sizes?

<details>
<summary>Hint 1</summary>

Use the determinant of a block triangular matrix.

</details>

<details>
<summary>Hint 2</summary>

A λ-block of size s contributes (t−λ)^s.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each size-$s$ block contributes characteristic factor $(t-\lambda)^s$; block characteristic polynomials multiply.


</details>

<a id="section-381-10-minimal-exponent"></a>
### 10. Minimal exponent {#section-383-10-minimal-exponent}
Prove the largest $\lambda$-block size is the exponent in $m_T$.

<details>
<summary>Hint 1</summary>

Compute the minimum of each Jordan block.

</details>

<details>
<summary>Hint 2</summary>

The minimum of their direct sum is their least common multiple.

</details>

<details>
<summary>Solution</summary>

**Solution.** The restriction minimum of a size-$s$ block is $(t-\lambda)^s$; the direct-sum minimum is their lcm, taking the largest exponent.


</details>

<a id="section-406-11-diagonalizable-test"></a>
### 11. Diagonalizable test {#section-408-11-diagonalizable-test}
Translate diagonalizability into block sizes.

<details>
<summary>Hint 1</summary>

A diagonal block of length one has no nonzero nilpotent part.

</details>

<details>
<summary>Hint 2</summary>

Compare the square-free minimum criterion with the largest block sizes.

</details>

<details>
<summary>Solution</summary>

**Solution.** It holds exactly when every block has size one, equivalently each primary nilpotent part is zero.


</details>

<a id="section-431-12-square-a-block"></a>
### 12. Square a block {#section-433-12-square-a-block}
Compute $J_3(\lambda)^2$.

<details>
<summary>Hint 1</summary>

Write J₃(λ)=λI+N and use commutation.

</details>

<details>
<summary>Hint 2</summary>

Expand the square as λ²I+2λN+N².

</details>

<details>
<summary>Solution</summary>

**Solution.** With $J=\lambda I+N$, it is $\lambda^2I+2\lambda N+N^2$, interpreted in $F$.


</details>

<a id="section-456-13-characteristic-two"></a>
### 13. Characteristic two {#section-458-13-characteristic-two}
What changes in Exercise 12?

<details>
<summary>Hint 1</summary>

Reduce the scalar coefficient 2 in the preceding expansion.

</details>

<details>
<summary>Hint 2</summary>

The mixed term vanishes in characteristic two, while N² need not vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** $2\lambda=0$, so the middle term vanishes. The binomial identity remains valid with coefficients reduced in the field.


</details>

<a id="section-481-14-polynomial-on-a-block"></a>
### 14. Polynomial on a block {#section-483-14-polynomial-on-a-block}
If $p(\lambda)=p'(\lambda)=0$, show $p(J_2(\lambda))=0$ in characteristic zero.

<details>
<summary>Hint 1</summary>

Reduce the polynomial modulo (t−λ)².

</details>

<details>
<summary>Hint 2</summary>

Its constant and linear Taylor coefficients both vanish; higher powers of N are zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Taylor truncation gives $p(\lambda)I+p'(\lambda)N=0$ because $N^2=0$.


</details>

<a id="section-506-15-similarity-uniqueness"></a>
### 15. Similarity uniqueness {#section-508-15-similarity-uniqueness}
Why do equal kernel dimensions for all powers and eigenvalues force equal Jordan forms?

<details>
<summary>Hint 1</summary>

Recover each exact block count from successive kernel dimensions.

</details>

<details>
<summary>Hint 2</summary>

The resulting multiset of blocks is precisely the Jordan classification data.

</details>

<details>
<summary>Solution</summary>

**Solution.** The difference formulas recover every block count for each eigenvalue, hence the same multiset of blocks.


</details>

<a id="section-531-16-rank-sequence"></a>
### 16. Rank sequence {#section-533-16-rank-sequence}
For blocks sizes $4,2$, compute ranks of $N,N^2,N^3,N^4$.

<details>
<summary>Hint 1</summary>

A block of size s has rank max(s−k,0) at power k.

</details>

<details>
<summary>Hint 2</summary>

Add those values for s=4 and s=2.

</details>

<details>
<summary>Solution</summary>

**Solution.** A size-$s$ block contributes $\max(s-k,0)$: ranks are $3+1=4$, $2+0=2$, $1$, $0$.


</details>

<a id="section-556-17-field-boundary"></a>
### 17. Field boundary {#section-558-17-field-boundary}
Why has a real 90-degree rotation no real Jordan form?

<details>
<summary>Hint 1</summary>

A Jordan form over a field has diagonal entries in that field.

</details>

<details>
<summary>Hint 2</summary>

The rotation has no real eigenvalue.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its minimal polynomial $t^2+1$ does not split over $R$; Jordan blocks require eigenvalues in the field.


</details>

<a id="section-581-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-583-18-numerical-boundary}
Why can small perturbations destroy a Jordan block?

<details>
<summary>Hint 1</summary>

Perturb the characteristic polynomial as well as the entries.

</details>

<details>
<summary>Hint 2</summary>

A repeated eigenvalue can split, changing both chain lengths and kernel dimensions.

</details>

<details>
<summary>Solution</summary>

**Solution.** A repeated eigenvalue can split into distinct roots under arbitrarily small perturbation, changing kernel-growth data discontinuously. Stable computations use residuals and Schur/invariant-subspace methods instead.

</details>

<a id="section-605-13-a-filtration-basis-can-be-certified-one-quotient-at-"></a>

<a id="section-771-20-optional-practice-extensions"></a>
### 19. LSP-16-E19: build a chain without assuming standard blocks {#section-773-lsp-16-e19-build-a-chain-without-assuming-standard-bloc}

On $F^4$ define $Ne_1=0$, $Ne_2=e_1$, $Ne_3=e_1+e_2$ and $Ne_4=e_2+e_3$. Construct a tail-first chain basis over every field, verify every chain step, and deduce the kernel dimensions and Jordan block sizes.

<details>
<summary>Hint 1</summary>

Start at e₄ and compute its successive N-images.

</details>

<details>
<summary>Hint 2</summary>

Verify N³e₄≠0 over every field; the resulting length-four orbit is an independent chain.

</details>

<a id="section-789-lsp-16-e20-use-hasse-coefficients-in-characteristic-two"></a>
### 20. LSP-16-E20: use Hasse coefficients in characteristic two {#section-791-lsp-16-e20-use-hasse-coefficients-in-characteristic-two}

Over $F_2$, let $J=I+N$ be a size-three Jordan block and take $p(t)=t^4+t^2$. Compute $p(J)$ from the expansion at one, explain why ordinary derivatives alone do not determine the answer here, and give $J^{-1}$ as a finite polynomial in $N$.

<details>
<summary>Hint 1</summary>

Substitute 1+z into p and reduce coefficients modulo two.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the surviving powers at N with N³=0; for the inverse multiply I+N by I+N+N².

</details>

<a id="section-807-21-solutions-and-a-terminal-dimension-elaboration"></a>

## Solutions

<a id="section-809-21-solutions-and-a-terminal-dimension-elaboration"></a>
<a id="section-809-lsp-16-e19-build-a-chain-without-assuming-standard-bloc"></a>
### LSP-16-E19: build a chain without assuming standard blocks — solution {#section-811-lsp-16-e19-build-a-chain-without-assuming-standard-bloc}

<details>
<summary>Solution</summary>


Starting from $e_4$ gives $Ne_4=e_2+e_3$, $N^2e_4=2e_1+e_2$, $N^3e_4=e_1$ and $N^4e_4=0$. The tail-first list
\[
 B=(e_1,\ 2e_1+e_2,\ e_2+e_3,\ e_4)
\]
is a basis because its coordinate matrix is upper triangular with diagonal entries one; successive substitution recovers every standard coordinate. Applying $N$ sends the second vector to the first, the third to the second and the fourth to the third. Those equalities remain valid in characteristic two, where $2e_1$ vanishes. Thus there is one block of size four, and the kernel dimensions are $1,2,3,4$.


</details>

<a id="section-824-lsp-16-e20-use-hasse-coefficients-in-characteristic-two"></a>
### LSP-16-E20: use Hasse coefficients in characteristic two — solution {#section-826-lsp-16-e20-use-hasse-coefficients-in-characteristic-two}

<details>
<summary>Solution</summary>


In $F_2$,
\[
 p(1+u)=(1+u)^4+(1+u)^2=u^4+u^2.
\]
Since $N^3=0$, substitution gives $p(J)=N^2\ne0$. All positive ordinary derivatives of this polynomial vanish, and the second factorial is zero, so an ordinary derivative/factorial formula is not available. The nonzero degree-two Hasse coefficient determines the result. Finally $J^{-1}=I+N+N^2$, since $(I+N)(I+N+N^2)=I+N^3=I$ in characteristic two.


</details>

<a id="section-839-original-exercise-5-why-the-terminal-dimension-matters-"></a>
### Original Exercise 5: why the terminal dimension matters — elaboration {#section-841-original-exercise-5-why-the-terminal-dimension-matters-}

The corrected prompt gives dimension six. Thus $d_3=6$ implies $K_3=V$ and all subsequent increments are zero. Starting with $(b_1,b_2,b_3,b_4)=(3,2,1,0)$ gives one block of each size one, two and three. Without that terminal information, the first three counts alone permit partitions $(s,2,1)$ for every $s\ge3$: their first three kernel dimensions are always $(3,5,6)$, but their total dimension is $s+3$. The explicit premise is what makes the retained answer determinate.

<a id="section-843-22-definition-and-exercise-corrections-retained-with-th"></a>
