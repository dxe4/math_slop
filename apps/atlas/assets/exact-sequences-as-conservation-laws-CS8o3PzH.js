var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: exact-sequences-as-conservation-laws
title: "Exact Sequences as Conservation Laws"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Exact Sequences as Conservation Laws

## Exactness

A sequence of $R$-modules and homomorphisms

$$\\cdots \\to A_{k+1} \\xrightarrow{f_{k+1}} A_k \\xrightarrow{f_k} A_{k-1} \\to \\cdots$$

is **exact** at $A_k$ if $\\operatorname{im} f_{k+1} = \\ker f_k$. It is a **short exact sequence** if it has the form

$$0 \\to A \\xrightarrow{i} B \\xrightarrow{p} C \\to 0,$$

exact at all positions. This means $i$ is injective, $p$ is surjective, and $\\operatorname{im} i = \\ker p$. Thus $A$ embeds as precisely the submodule of $B$ that is killed by $p$, while $C \\cong B/A$.

A short exact sequence **splits** if there exists a homomorphism $s:C \\to B$ with $p \\circ s = \\operatorname{id}_C$ (a section), equivalently a homomorphism $r:B \\to A$ with $r \\circ i = \\operatorname{id}_A$ (a retraction). Splitting implies $B \\cong A \\oplus C$, but the converse requires additional hypotheses: splitting always holds for vector spaces, but not for general modules.

## The long exact sequence of a pair

For a pair $(X,A)$ with $A \\subseteq X$, the **relative chains** are $C_*(X,A) = C_*(X)/C_*(A)$. The short exact sequence of chain complexes

$$0 \\to C_*(A) \\to C_*(X) \\to C_*(X,A) \\to 0$$

induces a **long exact sequence in homology**:

$$\\cdots \\to H_k(A) \\xrightarrow{i_*} H_k(X) \\xrightarrow{j_*} H_k(X,A) \\xrightarrow{\\partial} H_{k-1}(A) \\to \\cdots.$$

The **connecting homomorphism** $\\partial$ is defined as follows. A relative cycle in $C_k(X,A)$ is represented by a chain $c \\in C_k(X)$ whose boundary $d(c)$ lies in $C_{k-1}(A)$. Define $\\partial([c])=[d(c)] \\in H_{k-1}(A)$. This is well-defined because if $c$ is changed by a relative boundary $d(b)+a$ with $b \\in C_{k+1}(X)$ and $a \\in C_k(A)$, then $d(c)$ changes by $d(a)$, which is a boundary in $A$.

## Reduced homology

The **reduced homology** $\\widetilde{H}_*(X)$ is defined by augmenting the singular chain complex with a map $\\varepsilon:C_0(X) \\to \\mathbb{Z}$ sending each 0-simplex to 1. The augmented complex

$$\\cdots \\to C_1(X) \\to C_0(X) \\xrightarrow{\\varepsilon} \\mathbb{Z} \\to 0$$

has homology $\\widetilde{H}_*(X)$. For a nonempty path-connected space, $\\widetilde{H}_0(X)=0$ and $\\widetilde{H}_k(X)=H_k(X)$ for $k>0$. For a disjoint union of $c$ components, $\\widetilde{H}_0(X) \\cong \\mathbb{Z}^{c-1}$.

**The suspension isomorphism.** For any space $X$, the suspension $\\Sigma X = (X \\times [0,1])/(X \\times \\{0\\}, X \\times \\{1\\})$ satisfies

$$\\widetilde{H}_k(\\Sigma X) \\cong \\widetilde{H}_{k-1}(X).$$

This follows from Mayer--Vietoris (Chapter 8) applied to the two contractible cones that compose $\\Sigma X$.

## The five lemma

Consider a commutative diagram with exact rows:

$$\\begin{array}{ccccccccc}
A_1 & \\to & A_2 & \\to & A_3 & \\to & A_4 & \\to & A_5 \\\\
\\downarrow & & \\downarrow & & \\downarrow & & \\downarrow & & \\downarrow \\\\
B_1 & \\to & B_2 & \\to & B_3 & \\to & B_4 & \\to & B_5
\\end{array}$$

If the outer four vertical maps are isomorphisms, so is the middle one. This is the **five lemma**, a workhorse for comparing homologies.

## Common errors

**Error: assuming every short exact sequence splits.** The sequence $0 \\to \\mathbb{Z} \\xrightarrow{\\cdot 2} \\mathbb{Z} \\to \\mathbb{Z}/2\\mathbb{Z} \\to 0$ does not split over $\\mathbb{Z}$ because $\\mathbb{Z}$ has no element of order 2. Likewise, as a sequence of abelian groups (equivalently, $\\mathbb Z$-modules), $0 \\to \\mathbb{Z} \\to \\mathbb{Q} \\to \\mathbb{Q}/\\mathbb{Z} \\to 0$ does not split because every homomorphism from the torsion group $\\mathbb Q/\\mathbb Z$ to the torsion-free group $\\mathbb Q$ is zero. These are not short exact sequences of $\\mathbb Q$-vector spaces.

**Error: forgetting that $\\partial$ changes degree.** The connecting homomorphism in the long exact sequence of a pair decreases degree by 1: $\\partial:H_k(X,A) \\to H_{k-1}(A)$. It is easy to misplace the degree when doing computations.

**Error: using reduced homology inconsistently.** Reduced homology is convenient for suspensions and for removing the ubiquitous $\\mathbb{Z}$ in $H_0$, but one must remember that $\\widetilde{H}_0$ is defined differently from $H_0$.

## Worked example: the pair $(D^n,S^{n-1})$

For $n\\ge1$, the disk $D^n$ deformation retracts to a point, so $H_k(D^n)=0$ for $k>0$ and $H_0(D^n)=\\mathbb{Z}$. The long exact sequence of the pair $(D^n,S^{n-1})$ gives

$$\\cdots \\to H_k(D^n) \\to H_k(D^n,S^{n-1}) \\xrightarrow{\\partial} H_{k-1}(S^{n-1}) \\to H_{k-1}(D^n) \\to \\cdots.$$

Keeping the degree-zero end of the sequence gives the uniform statement

$$H_k(D^n,S^{n-1}) \\cong \\widetilde H_{k-1}(S^{n-1}) \\cong \\begin{cases} \\mathbb{Z} & k=n, \\\\ 0 & k \\neq n, \\end{cases}\\qquad k\\ge1.$$

This is the homology of an $n$-cell relative to its boundary, a basic building block for cellular homology.

## A full chain-level derivation

Exactness describes the precise obstruction left after applying a map. It is stronger than saying consecutive maps compose to zero: the latter gives only image contained in kernel. We now construct the connecting map for arbitrary short exact sequences of chain complexes and prove both containments at all three repeating positions. All modules are over a fixed ring R, all chain maps commute with the boundary d, and all complexes are homological, with d lowering degree.

### Theorem 10.1 — The connecting map is well defined

Suppose
$0\\longrightarrow A_*\\xrightarrow{i}B_*\\xrightarrow{p}C_*
\\longrightarrow0$
is exact in every degree. For a cycle c in C_n choose b in B_n with p(b)=c. Since p(db)=dc=0, there is a unique a in A_{n-1} with i(a)=db. Injectivity of i and d²=0 give da=0. Define the connecting map by delta[c]=[a].

If b is replaced by another lift b+i(u), the resulting a changes by du, hence its homology class is unchanged. If c is replaced by c+dv, choose a lift w of v and replace b by b+dw. Its boundary is unchanged. A further arbitrary lift differs by i(u), already handled. Thus the class depends only on [c]. Lifts of sums can be taken as sums, proving additivity. This proves well-definedness without assuming a splitting of the module sequence.

### Theorem 10.2 — All three exactness checks

At H_n(B), every class coming from A maps to zero in C because pi=0. Conversely if b is a cycle and [p(b)]=0, write p(b)=dc and lift c to w. Then b-dw lies in ker p, so equals i(a). Its boundary is zero, and injectivity of i makes a a cycle. Therefore [b]=i_*[a].

At H_n(C), a cycle lifted from a B-cycle has connecting image zero. Conversely if delta[c]=0, write its constructed a=du. The adjusted lift b-i(u) has boundary zero and still maps to c. Hence [c] lies in the image of p_*.

At H_{n-1}(A), i_*delta[c]=[db]=0. Conversely suppose a is an A-cycle and i(a)=db for some b in B_n. Then c=p(b) is a C-cycle, and the construction gives delta[c]=[a]. These are the two containments at each repeating position. Shifting n proves the entire long exact sequence.

### Proposition 10.3 — Naturality

For a commuting map of short exact chain sequences, the connecting squares commute. Indeed apply the middle vertical map to a chosen lift b. It becomes a lift of the image cycle, and its boundary is the image of db. Injectivity identifies the corresponding image in A. Thus both routes send a cycle to the same homology class. This lift calculation proves naturality directly; a choice made in a proof need not make the resulting map nonnatural.

For the pair sequence, i is inclusion and p is quotient, so the general delta becomes the boundary rule already stated. A relative cycle is allowed a nonzero boundary, but that boundary must lie inside the subcomplex. Confusing a relative cycle with an absolute cycle would erase the connecting homomorphism.

## Mayer–Vietoris from small chains

Let A and B have interiors covering X. Denote by C_*^{small}(X) the subgroup generated by singular simplices whose image lies wholly in A or wholly in B. Because every face stays in that same subspace, it is a subcomplex.

There is a degreewise short exact sequence
$0\\to C_*(A\\cap B)\\xrightarrow{s}
C_*(A)\\oplus C_*(B)\\xrightarrow{t}C_*^{small}(X)\\to0,$
where s(c)=(c,-c) and t(a,b)=a+b. Surjectivity holds because every small simplex belongs to one piece. For the kernel, the singular simplices are a free basis. An equality a+b=0 can have a nonzero coefficient only on basis simplices belonging to both pieces. Thus a is a chain in A intersection B and b=-a. This proves exactness and also explains the sign.

The [subdivision and excision chapter](homotopy-invariance-and-degree.md) proves that inclusion of small chains into all chains induces an isomorphism. Its ingredients are a Lebesgue number on each compact parameter simplex, iterated barycentric subdivision, and a support-controlled chain homotopy from subdivision to the identity. Only finitely many simplices occur in a chain, so one sufficiently large subdivision level works for the whole chain.

For clarity, the support property is what also gives injectivity. A small cycle that bounds in all chains can have its bounding chain subdivided until small. The prism between the original small cycle and its subdivision remains small, because every original small simplex and all pieces of its homotopy stay in its own A or B support. Hence it already bounds in the small complex.

Apply Theorems 10.1–10.2 to this short exact sequence and replace small-chain homology by H_*(X). This proves the displayed Mayer–Vietoris sequence, not merely a formal analogy with an exact row. In positive degree, the homology of the middle direct-sum chain complex is the direct sum of the homologies by taking cycles and boundaries componentwise.

If z=a+b is a small cycle with a in C_n(A), b in C_n(B), then da=-db belongs to their intersection. The connecting image is [da]. A different splitting changes that class by an intersection boundary, exactly as the general lift proof establishes. Choosing the opposite convention s(c)=(-c,c) reverses this connecting sign; the sequence remains exact, but calculations must use one convention consistently.

The interior-cover hypothesis cannot be replaced by the bare union equality. It is what permits subdivision into chains supported in the pieces. For CW subcomplex covers, suitable neighborhoods or the excisive-pair version justified by collars provide the same conclusion; one must state that justification rather than pretend every closed cover is an open cover.

## Splittings, dimensions, and what an exact sequence determines

A section of a surjection p:B→C gives the isomorphism A direct-sum C→B, (a,c)↦i(a)+s(c). It is injective because applying p kills the A term and leaves c; it is surjective because b-s(p(b)) belongs to ker p. Conversely a splitting of the sequence has such a section. An abstract group isomorphism B≅A⊕C without compatibility with the maps does not itself exhibit a splitting of the given sequence.

For vector spaces a surjection has a section: choose a basis of C and one preimage for every basis vector. For finite-dimensional exact sequences, rank-nullity then converts exactness into alternating dimension identities. The basis choices are not canonical. Over the integers the multiplication-by-two example above shows why dimension-style intuition fails.

Even knowing the end groups of a short exact sequence may not determine its middle group. The sequences
$0\\to\\mathbb Z/2\\to\\mathbb Z/4\\to\\mathbb Z/2\\to0$
and
$0\\to\\mathbb Z/2\\to(\\mathbb Z/2)^2\\to\\mathbb Z/2\\to0$
have the same end groups, but the first contains an element of order four while the second does not. Exactness constrains an extension; a splitting or further structure is needed to identify it.

## Worked examples with the maps visible

### Worked example 1 — An interval relative to its endpoints

Let X=[0,1] and A={0,1}. The relevant sequence is
$0\\to H_1(X,A)\\xrightarrow{\\delta}\\mathbb Z^2
\\xrightarrow{(u,v)\\mapsto u+v}\\mathbb Z
\\to H_0(X,A)\\to0.$
The last map is surjective, so H0(X,A)=0. Its kernel is generated by (-1,1), and delta is injective with exactly that image. Therefore H1(X,A)=Z. The oriented interval is a relative cycle whose boundary is endpoint1 minus endpoint0, giving the generator under delta.

### Worked example 2 — A circle from two overlapping arcs

Cover the circle by two contractible open arcs whose intersection has two contractible components. The degree-zero intersection map sends (u,v) to (u+v,-u-v) in Z². Its kernel is generated by (1,-1). Since the pieces have zero H1, exactness identifies H1(S1) with that kernel, hence Z. The extra intersection component, rather than a hidden one-dimensional cycle inside either arc, creates the circle class.

### Worked example 3 — A mapping cone detects a degree

Attach a two-cell to a circle by a map traversing that circle m times, m nonzero. Relative homology of the cell pair supplies a Z in degree two, and its connecting map to the circle H1 is multiplication by m. Exactness gives H2=ker(m)=0 and H1=coker(m)=Z/m. For m=0 the conclusion changes: the attaching map is nullhomotopic, giving H2=Z and H1=Z. Merely counting one cell in each dimension does not distinguish these cases.

### Worked example 4 — Reduced suspension bookkeeping

For a nonempty space X, its unreduced suspension is covered by two open cone neighborhoods, each contractible, whose overlap deformation retracts to X. Reduced Mayer–Vietoris gives the suspension isomorphism. The nonempty qualification avoids ambiguous empty-space cone conventions. In degree zero the augmented complex includes degree -1; for an empty space that convention must be stated before using a formula with negative degree. The original displayed suspension statement is interpreted with these augmentation conventions, not as a license to omit low-degree cases.

## Reading exactness as a computation

A useful calculation first writes the maps, then identifies their kernels and cokernels. For the torus and Klein-bottle decompositions retained below, the distinction between a zero map and multiplication by two is the entire difference. Homotopy types of pieces alone do not determine the inclusion maps.

The five-lemma proof retained in Exercise 7.1 is a complete element chase. It also illustrates why commutativity matters: without it a lift in one row need not track the other row's obstruction. Exactness supplies a preimage precisely after the relevant image has been shown to vanish.

The algebra established here feeds the skeletal computation in the next chapter and the coefficient theorems later. Each is an application of the same lift-boundary-correct procedure with a different short exact chain sequence.

## Practice exercises

<a id="exact-sequences-as-conservation-laws-legacy-ex-7-1"></a>
### Exercise 7.1

Prove the five lemma: in a commutative diagram with exact rows, if $f_1,f_2,f_4,f_5$ are isomorphisms, so is $f_3$.


<details>
<summary>Hint 1</summary>

Prove injectivity and surjectivity separately.

</details>
<details>
<summary>Hint 2</summary>

For injectivity lift through the left side of the diagram; for surjectivity first correct the image in the fourth group.

</details>
<details>
<summary>Full solution</summary>

**Solution.** We prove $f_3$ is injective. Suppose $f_3(a_3)=0$. Then $f_4(g_3(a_3))=h_3(f_3(a_3))=0$, so $g_3(a_3)=0$ since $f_4$ is injective. By exactness, $a_3=g_2(a_2)$ for some $a_2$. Then $h_2(f_2(a_2))=f_3(g_2(a_2))=0$, so $f_2(a_2)=h_1(b_1)$ for some $b_1$ by exactness. Since $f_1$ is surjective, $b_1=f_1(a_1)$ for some $a_1$. Then $f_2(g_1(a_1))=h_1(f_1(a_1))=h_1(b_1)=f_2(a_2)$, so $g_1(a_1)=a_2$ since $f_2$ is injective. Thus $a_3=g_2(a_2)=g_2(g_1(a_1))=0$.

For surjectivity, take $b_3$ in the lower middle group. Choose $a_4$ with $f_4(a_4)=h_3(b_3)$. Commutativity and exactness give $f_5(g_4(a_4))=h_4(h_3(b_3))=0$, so $g_4(a_4)=0$ because $f_5$ is injective. Hence $a_4=g_3(a_3)$ for some $a_3$. Now $h_3(b_3-f_3(a_3))=0$, so $b_3-f_3(a_3)=h_2(b_2)$ for some $b_2$. Choose $a_2$ with $f_2(a_2)=b_2$. Then $f_3(a_3+g_2(a_2))=b_3$, proving surjectivity. $\\square$


</details>

<a id="exact-sequences-as-conservation-laws-legacy-ex-7-2"></a>
### Exercise 7.2

Compute $H_*(X,A)$ when $A$ is a deformation retract of $X$.


<details>
<summary>Hint 1</summary>

The inclusion induces isomorphisms in homology.

</details>
<details>
<summary>Hint 2</summary>

Insert those maps in the pair sequence and use exactness at the relative terms.

</details>
<details>
<summary>Full solution</summary>

**Solution.** If $A$ is a deformation retract of $X$, the inclusion $i:A \\to X$ is a homotopy equivalence, so $i_*:H_*(A) \\to H_*(X)$ is an isomorphism. The long exact sequence of the pair gives $H_*(X,A)=0$ because $i_*$ is an isomorphism and the sequence is exact. $\\square$


</details>

<a id="exact-sequences-as-conservation-laws-legacy-ex-7-3"></a>
### Exercise 7.3

Show that $\\widetilde{H}_k(S^n) \\cong \\widetilde{H}_{k-1}(S^{n-1})$ for $n \\geq 1$.


<details>
<summary>Hint 1</summary>

Use two overlapping hemisphere neighborhoods.

</details>
<details>
<summary>Hint 2</summary>

Their overlap retracts onto the equator and both pieces are reduced-acyclic.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Cover $S^n$ by slightly enlarged upper and lower hemispheres $A$ and $B$. Their interiors cover, each is contractible, and $A\\cap B$ deformation retracts to $S^{n-1}$. Reduced Mayer--Vietoris (Chapter 8) then gives $\\widetilde{H}_k(S^n) \\cong \\widetilde{H}_{k-1}(S^{n-1})$. $\\square$


</details>

<a id="exact-sequences-as-conservation-laws-legacy-ex-7-4"></a>
### Exercise 7.4

Prove that if $X$ is path-connected and $A \\subseteq X$ is nonempty, then $H_0(X,A)=0$.


<details>
<summary>Hint 1</summary>

Inspect the degree-zero end of the pair sequence.

</details>
<details>
<summary>Hint 2</summary>

Every component of A maps to the one component of the connected X.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The long exact sequence gives $H_0(A) \\to H_0(X) \\to H_0(X,A) \\to 0$. Since $A$ is nonempty and $X$ is path-connected, the map $H_0(A) \\to H_0(X)$ is surjective (each component of $A$ maps to the single component of $X$). Thus $H_0(X,A)=0$. $\\square$


</details>

## Looking forward

Chapter 8 develops the Mayer--Vietoris sequence, the tool for computing homology of unions from homology of pieces. It is the homology analogue of van Kampen's theorem for the fundamental group. Chapter 9 introduces cohomology, where exact sequences reappear in the form of the universal coefficient theorem and the long exact sequence of a pair in cohomology.


## Mayer–Vietoris

## The theorem

Let $X$ be a topological space and $A,B \\subseteq X$ subspaces whose interiors cover $X$: $\\operatorname{int}(A) \\cup \\operatorname{int}(B)=X$. Then there is a long exact sequence

$$\\cdots \\to H_k(A \\cap B) \\xrightarrow{(i_{A*},-i_{B*})} H_k(A) \\oplus H_k(B) \\xrightarrow{j_{A*}+j_{B*}} H_k(X) \\xrightarrow{\\partial} H_{k-1}(A \\cap B) \\to \\cdots$$

called the **Mayer--Vietoris sequence**. The maps $i_A,i_B$ are inclusions of $A \\cap B$ into $A$ and $B$; the maps $j_A,j_B$ are inclusions of $A$ and $B$ into $X$.

The condition on interiors is essential. It ensures that the inclusion of chains supported in $A$ or $B$ into all chains of $X$ induces an isomorphism on homology, via the **excision theorem**.

**Theorem 10.4 (Excision).** If $Z \\subseteq A \\subseteq X$ with $\\overline{Z} \\subseteq \\operatorname{int}(A)$, then $H_*(X \\setminus Z, A \\setminus Z) \\cong H_*(X,A)$.

Removing a subspace whose closure lies in the interior of $A$ does not change relative homology. Removing an arbitrary closed set without checking the hypothesis can change the result.

## Sphere homology from Mayer--Vietoris

Use slightly thickened upper and lower hemispheres $A$ and $B$, whose interiors cover $S^n$. Each piece deformation retracts to a closed hemisphere, and their overlap deformation retracts to the equator $S^{n-1}$. Thus $A$ and $B$ are contractible and $A\\cap B\\simeq S^{n-1}$.

The reduced Mayer--Vietoris sequence is

$$\\cdots \\to \\widetilde{H}_k(A\\cap B) \\to \\widetilde{H}_k(A) \\oplus \\widetilde{H}_k(B) \\to \\widetilde{H}_k(S^n) \\xrightarrow{\\partial} \\widetilde{H}_{k-1}(A\\cap B) \\to \\cdots.$$

Since $\\widetilde{H}_k(A)=\\widetilde{H}_k(B)=0$ and $A\\cap B\\simeq S^{n-1}$, the connecting homomorphism is an isomorphism:

$$\\widetilde{H}_k(S^n) \\cong \\widetilde{H}_{k-1}(S^{n-1}).$$

Starting from $\\widetilde{H}_0(S^0) \\cong \\mathbb{Z}$ (since $S^0$ has two points), induction gives

For $n\\ge1$,

$$H_k(S^n;\\mathbb{Z}) = \\begin{cases} \\mathbb{Z} & k=0,n, \\\\ 0 & \\text{otherwise}. \\end{cases}$$

For $n=0$, the two components give $H_0(S^0;\\mathbb Z)\\cong\\mathbb Z^2$.

This agrees with the cellular computation and is a foundational result.

## The Klein bottle

Write the Klein bottle $K$ as two M\\"obius bands glued along their boundary circles, and thicken each band slightly across the gluing circle so that the interiors cover. Each piece retracts onto a core circle, while the overlap retracts onto the common boundary circle. Thus $H_0(M_i)=\\mathbb Z$, $H_1(M_i)=\\mathbb Z$, and $H_k(M_i)=0$ for $k\\ge2$, while the overlap has the homology of $S^1$.

The Mayer--Vietoris sequence in low degrees is

$$H_1(M_1 \\cap M_2) \\to H_1(M_1) \\oplus H_1(M_2) \\to H_1(K) \\to H_0(M_1 \\cap M_2) \\to H_0(M_1) \\oplus H_0(M_2) \\to H_0(K) \\to 0.$$

The map $H_0(M_1 \\cap M_2) \\to H_0(M_1) \\oplus H_0(M_2)$ sends $1 \\mapsto (1,-1)$ under the displayed Mayer--Vietoris sign convention, and is injective. Thus $H_1(K)$ is the cokernel of $H_1(M_1 \\cap M_2) \\to H_1(M_1) \\oplus H_1(M_2)$. Each inclusion of the boundary into a M\\"obius band sends the generator to twice the core generator (the boundary wraps twice around the core). The signed map is $(1 \\mapsto (2,-2))$ after compatible generator choices, so its cokernel is $\\mathbb{Z} \\oplus \\mathbb{Z}/2\\mathbb{Z}$. Therefore

$$H_1(K;\\mathbb{Z}) \\cong \\mathbb{Z} \\oplus \\mathbb{Z}/2\\mathbb{Z}, \\qquad H_2(K;\\mathbb{Z})=0.$$

## Common errors

**Error: applying Mayer--Vietoris without the interior covering hypothesis.** If $A$ and $B$ are closed sets whose union is $X$ but whose interiors do not cover $X$, the displayed theorem does not apply. The unthickened closed hemispheres meet only along their boundary, for example; slightly overlapping collar neighborhoods repair that cover. By contrast, $A=B=X$ does satisfy the hypothesis and gives a valid, if uninformative, exact sequence.

**Error: forgetting reduced homology for $H_0$.** In the reduced sequence, $\\widetilde{H}_0$ of a contractible space is 0. In the unreduced sequence, if $A,B,$ and $A\\cap B$ are nonempty and path-connected, the map $H_0(A\\cap B)\\to H_0(A)\\oplus H_0(B)$ is $1\\mapsto(1,-1)$ and is injective. Reduced homology often simplifies the bookkeeping, but it does not reverse that fact.

**Error: miscomputing the connecting homomorphism.** The map $\\partial:H_k(X) \\to H_{k-1}(A \\cap B)$ is defined by splitting a cycle in $X$ into chains in $A$ and $B$, taking the boundary of one piece, and observing that boundary lies in $A \\cap B$. The sign convention matters.

## Worked example: the wedge $S^n \\vee S^m$

Let $X=S^n \\vee S^m$ with $n,m \\geq 1$. Take $A$ a neighborhood of $S^n$ and $B$ a neighborhood of $S^m$, with $A \\cap B$ contractible. Mayer--Vietoris gives

$$\\cdots \\to H_k(A \\cap B) \\to H_k(A) \\oplus H_k(B) \\to H_k(X) \\to H_{k-1}(A \\cap B) \\to \\cdots.$$

Since $A \\cap B$ is contractible, $H_k(A \\cap B)=0$ for $k>0$. Thus $H_k(X) \\cong H_k(S^n) \\oplus H_k(S^m)$ for $k>0$, and $H_0(X)=\\mathbb{Z}$. The homology is the direct sum of the homologies of the summands.

## Practice exercises

<a id="exact-sequences-as-conservation-laws-legacy-ex-8-1"></a>
### Exercise 8.1

Compute $H_*(\\mathbb{RP}^2)$ using Mayer--Vietoris with $A$ a M\\"obius band and $B$ a disk.


<details>
<summary>Hint 1</summary>

Thicken the disk and Mobius-band cover.

</details>
<details>
<summary>Hint 2</summary>

The boundary circle maps with degree two into the band core.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Write $\\mathbb{RP}^2=M \\cup D^2$ where $M$ is a M\\"obius band and $D^2$ is a disk glued along the boundary circle, then thicken the pieces so their interiors cover. Their overlap retracts to $S^1$. We have $H_0(M)=H_0(D^2)=\\mathbb{Z}$, $H_1(M)=\\mathbb{Z}$, and no higher homology in either piece. The map $H_1(S^1) \\to H_1(M) \\oplus H_1(D^2)$ sends $1 \\mapsto (2,0)$ because the boundary of the M\\"obius band wraps twice around the core. Thus $H_1(\\mathbb{RP}^2)=\\mathbb{Z}/2\\mathbb{Z}$ and $H_2(\\mathbb{RP}^2)=0$. $\\square$


</details>

<a id="exact-sequences-as-conservation-laws-legacy-ex-8-2"></a>
### Exercise 8.2

Let $A$ and $B$ be finite subcomplexes of a finite CW complex. Prove that $\\chi(A \\cup B)=\\chi(A)+\\chi(B)-\\chi(A \\cap B)$.


<details>
<summary>Hint 1</summary>

Use field coefficients and finite-dimensional groups.

</details>
<details>
<summary>Hint 2</summary>

An exact finite sequence has alternating dimension sum zero.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Finite subcomplexes form an excisive pair, and their homology groups over a field are finite-dimensional and vanish above a finite degree. The alternating sum of dimensions in the resulting Mayer--Vietoris sequence is zero. Grouping the terms by space gives the formula. $\\square$


</details>

<a id="exact-sequences-as-conservation-laws-legacy-ex-8-3"></a>
### Exercise 8.3

Compute $H_*(S^1 \\times S^1)$ using Mayer--Vietoris.


<details>
<summary>Hint 1</summary>

Use a punctured torus and a disk.

</details>
<details>
<summary>Hint 2</summary>

The attaching boundary commutator maps to zero in first homology.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Let $A$ be a torus with the interior of a small disk removed and let $B$ be a slightly enlarged disk filling that hole; thicken both across the boundary so their interiors cover. Then $A\\simeq S^1\\vee S^1$, $B\\simeq pt$, and $A\\cap B\\simeq S^1$. The boundary circle represents the commutator in $\\pi_1(A)$ and hence maps to zero in $H_1(A)\\cong\\mathbb Z^2$; it also maps to zero in $H_1(B)$. Exactness gives $H_2(T^2)\\cong H_1(S^1)\\cong\\mathbb Z$, $H_1(T^2)\\cong H_1(A)\\cong\\mathbb Z^2$, and $H_0(T^2)\\cong\\mathbb Z$. $\\square$


</details>

<a id="exact-sequences-as-conservation-laws-legacy-ex-8-4"></a>
### Exercise 8.4

Assume the interiors of contractible subspaces $A$ and $B$ cover $X$. Express $\\widetilde H_k(X)$ in terms of $\\widetilde H_{k-1}(A\\cap B)$. What follows if $A\\cap B$ is path-connected, and what stronger conclusion follows if it is acyclic?


<details>
<summary>Hint 1</summary>

Use reduced Mayer–Vietoris.

</details>
<details>
<summary>Hint 2</summary>

Connectedness controls only reduced degree zero of the overlap; acyclicity controls every degree.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Reduced Mayer--Vietoris gives

$$\\widetilde H_k(X)\\cong\\widetilde H_{k-1}(A\\cap B).$$

Path-connectedness of the intersection implies only $\\widetilde H_1(X)=0$; its higher reduced homology may remain. If $A\\cap B$ is acyclic, then $X$ is acyclic. This homology calculation alone does not prove that $X$ is contractible. $\\square$


</details>

## Looking forward

Chapter 9 introduces cohomology, the dual theory to homology with a rich multiplicative structure. The cup product distinguishes spaces that homology groups alone cannot. Chapter 10 develops homotopy invariance and degree theory, connecting the fundamental group and homology through the Hurewicz theorem and the degree of maps between spheres.

## Further exercises

<a id="exact-sequences-as-conservation-laws-ex-9"></a>
### Exercise 10.9

For a short exact chain sequence, prove that delta commutes with a commuting map of chain sequences.

<details>
<summary>Hint 1</summary>

Apply the middle map to a chosen lift.

</details>

<details>
<summary>Hint 2</summary>

Its boundary is the image of the original boundary.

</details>

<details>
<summary>Full solution</summary>

If p(b)=c and i(a)=db, then for vertical chain maps one has p'(F_B b)=F_C c and d(F_B b)=F_B db=F_B i(a)=i'(F_A a). The connecting construction on the image cycle therefore returns [F_A a], which is exactly the other route. Well-definedness removes dependence on the selected lift.

</details>

<a id="exact-sequences-as-conservation-laws-ex-10"></a>
### Exercise 10.10

Let A,B be contractible with interiors covering X and overlap having three contractible components. Compute H1(X) and reduced H0(X).

<details>
<summary>Hint 1</summary>

Write the degree-zero intersection map.

</details>

<details>
<summary>Hint 2</summary>

Its kernel consists of triples with sum zero.

</details>

<details>
<summary>Full solution</summary>

The map Z³→Z² is (u,v,w)↦(u+v+w,-u-v-w). Its kernel is Z², so H1(X)=Z². Its cokernel is Z, giving H0(X)=Z and reduced H0(X)=0. Higher homology vanishes because the overlap and pieces have no positive-degree homology. This is a computation for the specified cover, not a claim every space with H1=Z² is a two-circle wedge.

</details>

## Sources

The connecting-map, exactness, and small-chain Mayer–Vietoris proofs are supplied here. Primary references: [Allen Hatcher, Algebraic Topology, Chapter 2](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html) and [J. P. May, A Concise Course, Chapters 12–14](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf). The original exact-sequence and merged Mayer–Vietoris text, eight exercise headings, statements, and solutions are retained.

## Summary

A short exact chain sequence yields a connecting map by lifting a cycle, taking its boundary, and identifying that boundary in the subcomplex. Three explicit chases prove the long sequence exact, and the same construction is natural. Mayer–Vietoris follows from the short exact sequence of small chains and the proved subdivision equivalence. Computations require the actual inclusion and connecting maps, not just group ranks.
`;export{e as default};