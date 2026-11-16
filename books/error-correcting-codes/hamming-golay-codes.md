
# Hamming and Golay Codes

Preparation is Chapter 2, projective directions over a finite field, binary inner products and elementary incidence counting. The Golay construction is proved from a displayed finite difference table; no exhaustive program or imported minimum-distance assertion is required.

## Perfect codes are exceptionally constrained

A perfect radius-$t$ code partitions the ambient Hamming space into disjoint balls of that radius. Hamming’s bound is then an equality. This is stronger than having an efficient decoder or a good stochastic error rate, and it concerns one particular radius.

We construct the $q$-ary Hamming family and a binary Golay code. The latter will come from an explicit eleven-point difference set, not an unexplained parameter assertion. The original [finite-algebra coding chapter](../finite-algebra-computation/algebraic-coding-theory.md) remains available; its Hamming-code discussion is expanded here with full rank, distance and packing arguments.

Throughout, finite-field arithmetic is exact. Binary weight is an integer count, while inner products of binary words are taken modulo two. We explicitly connect these two operations when using parity.

## Projective parity-check columns

Fix a finite field $\mathbb F_q$ and an integer $r\ge2$. The nonzero vectors of $\mathbb F_q^r$ split into one-dimensional subspaces, each with $q-1$ nonzero vectors. There are
$$
n=\frac{q^r-1}{q-1}
$$
such subspaces. Choose one nonzero representative from each as the columns of a matrix $H$.

Every standard basis direction occurs, so $H$ has rank $r$. Its kernel has dimension $n-r$. No column is zero, and no pair is proportional, so there are no weight-one or weight-two kernel words. Therefore distance is at least three.

Choose independent vectors $a,b$ representing two columns. Their sum lies on a third projective direction, distinct from both. The selected representative there is a nonzero multiple of $a+b$. These three columns have a nontrivial relation with all coefficients nonzero, so the kernel has a weight-three word. Distance is exactly three.

Thus the $q$-ary Hamming code has parameters $[n,n-r,3]$. Each nonzero syndrome $s$ is uniquely a scalar multiple $\alpha h_j$ of one selected column, identifying a unique single-symbol error at position $j$ with magnitude $\alpha$.

## Perfect packing and extension

The radius-one ball has volume $1+n(q-1)=q^r$. The code has $q^{n-r}$ words, so its disjoint balls have total size $q^n$. Hence every received word has a unique codeword within distance one.

For binary Hamming codes, append an overall parity bit to each codeword. The extended code has length $2^r$, the same dimension $2^r-1-r$, and minimum distance four. To prove it, every extended weight is even. Original weights one and two are impossible, and an original weight-three word becomes weight four. An original even weight at least four stays at least four; an odd weight at least three gains one.

The extended code detects three substitutions and corrects one. Its radius-one balls are generally not perfect packings. Appending a check changes the metric geometry, so perfection of the original code does not automatically survive.

For $r=2$, the binary Hamming code is the length-three repetition code. For $r=3$, it is the familiar $[7,4,3]$ code. The larger family follows from projective directions rather than a separate ad hoc matrix for every length.

## An eleven-point difference set

Work with residues modulo eleven and let
$$
D=\{1,3,4,5,9\}.
$$
The following lists the differences from each element to the other four elements, reduced modulo eleven:

| Element | Its four differences |
|---|---|
| 1 | 9, 8, 7, 3 |
| 3 | 2, 10, 9, 5 |
| 4 | 3, 1, 10, 6 |
| 5 | 4, 2, 1, 7 |
| 9 | 8, 6, 5, 4 |

Every nonzero residue appears exactly twice. Hence distinct translates of $D$ intersect in exactly two points. Their complements, each of size six in an eleven-point set, intersect in $11-5-5+2=3$ points.

This finite displayed identity is the entire incidence property needed below. Although $D$ is the quadratic-residue set modulo eleven, no unproved general quadratic-residue-code theorem is being used.

Let $B$ be the $11\times11$ binary matrix whose row indexed by $i$ is the incidence vector of the complement of $i+D$. Each row and each column has weight six, and distinct rows have intersection size three. Column weights follow because each point lies in exactly five translates of $D$ and six complements.

## A systematic construction of the extended binary Golay code

Build a $12\times12$ binary matrix
$$
A=\begin{pmatrix}
0&\boldsymbol1^T\\
\boldsymbol1&B
\end{pmatrix},
$$
and let $G=[I_{12}\mid A]$. Its row space $C$ has length 24 and dimension 12.

The first row of $A$ has weight eleven; every other row has weight seven. The first row intersects every other in six positions. Two distinct other rows intersect in $1+3=4$ positions. Therefore, over $\mathbb F_2$,
$$
AA^T=I_{12}.
$$
It follows that $GG^T=I_{12}+AA^T=0$. Thus $C$ is self-orthogonal and, having half the ambient dimension, self-dual.

The first generator row has weight twelve, while every other has weight eight. All are divisible by four. For binary words,
$$
\operatorname{wt}(u+v)=\operatorname{wt}(u)+\operatorname{wt}(v)
-2|\operatorname{supp}(u)\cap\operatorname{supp}(v)|.
$$
Orthogonal words have even intersection size. Inductively adding mutually orthogonal generator rows therefore preserves weight divisible by four. Every codeword of $C$ has weight divisible by four.

## Excluding weight four without an exhaustive search

A nonzero codeword has form $(u,uA)$. Since $A$ is invertible, both halves are nonzero. If total weight were four, the possible weight of $u$ would be one, two or three.

If $\operatorname{wt}(u)=1$, then $uA$ is a row of $A$, of weight seven or eleven, so total weight is eight or twelve.

If $\operatorname{wt}(u)=2$, it is the sum of two rows. Two ordinary rows give weight $7+7-2\cdot4=6$. The distinguished first row and an ordinary row give weight $11+7-2\cdot6=6$. Total codeword weight is again eight.

If $\operatorname{wt}(u)=3$, total weight four would force $uA$ to be a unit vector. But $AA^T=I$ implies $u=(uA)A^T$. A unit vector times $A^T$ is a column of $A$, and each column has weight seven or eleven. This contradicts weight three.

Thus there is no weight-four word. All nonzero weights are divisible by four, and an ordinary generator row has weight eight. Consequently $C$ has parameters $[24,12,8]$. This is an extended binary Golay code constructed and distance-proved from the displayed incidence table.

## Puncturing gives a perfect three-error code

Puncture any coordinate contained in one of the known weight-eight generator words. Since the original minimum distance is eight, puncturing is injective and preserves dimension twelve. All distances drop by at most one, while that particular weight-eight word drops to seven. The punctured code therefore has parameters $[23,12,7]$.

Its guaranteed radius is three. The binary ball volume is
$$
V_2(23,3)=1+23+\binom{23}2+\binom{23}3
=1+23+253+1771=2048.
$$
There are $2^{12}$ codewords, and $2^{12}\cdot2048=2^{23}$. Hence its radius-three balls partition the binary length-23 space. Every received word is uniquely within three changes of a codeword.

As with Hamming codes, perfect packing does not identify which heavy errors will be miscorrected. Any error pattern leading to another ball can make the decoder output another message. Perfection describes the partition, not arbitrary-error immunity.

## Deriving the extended weight enumerator

Because $C$ is binary self-dual and all its words have even weight, the all-one word is orthogonal to every word and hence belongs to $C$. Complementation therefore preserves the code. With divisibility by four and minimum distance eight, possible weights are $0,8,12,16,24$.

Let their counts be $1,a,b,a,1$. Since there are $4096$ words,
$$
2+2a+b=4096.
$$
Any pair of coordinate projections has rank two. Otherwise a nonzero linear combination of those coordinate functionals would vanish on $C$, giving a dual word of weight at most two, contrary to self-dual distance eight. Therefore each ordered coordinate pair equals $(1,1)$ in exactly $4096/4=1024$ codewords.

Counting ordered pairs of one positions in two ways yields
$$
56a+132b+240a+552=1024\cdot24\cdot23.
$$
Substitute $b=4094-2a$ to obtain $32a=24288$, so $a=759$ and $b=2576$. The weight polynomial is
$$
1+759z^8+2576z^{12}+759z^{16}+z^{24}.
$$
This is derived from the constructed code’s properties, not presented as the output of an unperformed enumeration.

## Special constructions and general limits

Hamming and Golay codes show that some packing bounds are exactly attainable. They do not imply a perfect code for arbitrary length or correction radius. Classifying perfect codes is a much deeper question than the constructions proved here.

The ternary Golay codes form another classical family, but their construction is outside this binary Golay derivation. No ternary parameter theorem is being inferred from a binary incidence matrix. The general $q$-ary Hamming proof, by contrast, applies to every declared finite field.

## A complete bounded-distance syndrome rule

For the punctured binary Golay code, a full-rank parity-check matrix has eleven rows, so there are $2^{11}=2048$ syndromes. The error patterns of weight at most three also number 2048. No two have the same syndrome: their difference would be a nonzero codeword of weight at most six, contradicting distance seven.

Thus assigning each syndrome its unique weight-at-most-three error defines a complete decoder. Every received word is corrected into the unique radius-three codeword. This argument proves that the assignment exists and is unique without reporting a generated lookup table.

A table implementation would store these 2048 representatives. The special code has a fixed short length, so such a table is a meaningful design option; it is not a general efficient algorithm for arbitrary codes of growing redundancy. More structured Golay decoding can reduce storage, but that is an additional algorithmic result.

## Worked example 3.1: A ternary Hamming code

Take $q=3$ and $r=2$. The four projective directions can be represented by $(1,0),(0,1),(1,1),(1,2)$. Their parity-check kernel has parameters $[4,2,3]$. There are nine codewords and each radius-one ball has $1+4\cdot2=9$ words, filling all $81$ ambient words. A syndrome $(2,1)$ is twice the column $(1,2)$, so it identifies error magnitude two at that column’s position.

## Worked example 3.2: One row of the Golay construction

Use an ordinary, nondistinguished row of $G=[I_{12}\mid A]$. Its systematic half has one nonzero coordinate. Its $A$ half has one leading one and six complement-incidence ones, for weight seven. The full codeword has weight eight, proving the constructed code’s distance upper bound. Puncturing its nonzero systematic coordinate yields a weight-seven word in the length-23 code, which combines with the general puncturing lower bound to prove exact distance seven.

## Worked example 3.3: Why extended Golay is not perfect at radius three

A binary radius-three ball in length 24 has size $1+24+276+2024=2325$. The extended Golay code has $4096$ words, while the space-to-code size ratio is $2^{24}/4096=4096$. Because $2325<4096$, its disjoint radius-three balls leave uncovered words. The punctured length-23 code is perfect at radius three, but its parity extension has a different packing geometry despite the stronger distance.

## Puncturing every coordinate gives the same weight counts

The extended Golay construction allows a stronger statement than puncturing one displayed weight-eight word. We can derive the weight counts through any chosen coordinate without assuming an unproved transitive automorphism group.

Fix a coordinate and let $a,b,c$ count weight-eight, weight-twelve and weight-sixteen codewords containing a one there. Complementation pairs weight-twelve words with other weight-twelve words and reverses that bit, so $b=1288$. It also maps weight-eight words containing the bit to weight-sixteen words not containing it, giving $c=759-a$.

Every pair of coordinates is uniform under a uniform codeword because dual distance exceeds two. Count, for the fixed coordinate, all ordered choices of another coordinate where both bits are one. There are 23 possible partners, each occurring in 1024 codewords.

Counting the same incidences by codeword weight gives $7a+11b+15c+23$. The final term is the all-one word. Substituting the previous identities yields $a=253$ and $c=506$.

Consequently every coordinate is contained in 253 weight-eight words. Puncturing any coordinate therefore lowers some weight-eight word to seven, while the general lower bound rules out smaller weight. Every such puncture has the proved perfect parameters.

The complete punctured weight distribution also follows. Its counts at weights seven and eight are 253 and 506; at eleven and twelve they are 1288 each; at fifteen and sixteen they are 506 and 253; there is one word of weight zero and one of weight 23. Puncturing is injective, so these counts still sum to the original 4096 words.

This argument uses only the established extended weight distribution, complementation and uniform coordinate pairs. It is not a report of enumerating every word, nor a proof that every two puncturing positions are related by an automorphism. Equal weight distributions are weaker than a coordinate-permutation equivalence theorem.

The deduction illustrates the power of moment information when the possible weights are already restricted. Few unknown counts remain, and independent incidence equations determine them. For a code with many possible weights, the same low-order moments may leave numerous distributions feasible.

Keeping those logical directions clear prevents a familiar parameter table from doing more work than its proof supplies. Here both the exact minimum distance and the punctured weight counts are consequences of explicit finite identities.

## Shortening the extended Golay construction twice

The constructed extended binary Golay code is self-dual and has minimum weight eight. Projection onto any two chosen coordinates is surjective onto the four binary pairs. Otherwise a nonzero linear functional on those two coordinates would vanish on every codeword. Extending its coefficients by zeros would give a dual word supported on at most two positions, contradicting the dual minimum weight eight.

The kernel of that projection therefore has dimension ten. Delete the two forced-zero coordinates from this kernel. The resulting shortened code has length twenty-two, dimension ten and minimum distance at least eight, because deletion removed only zeros from each remaining word. This reasoning proves the same parameter guarantee for every chosen coordinate pair, without an enumeration of the code. It also illustrates the difference between puncturing and shortening: deleting arbitrary coordinates can reduce weight, whereas imposing zeros first preserves every surviving word's weight but reduces dimension. Exact minimum distance would need either a surviving weight-eight word or another argument, so only the established lower bound is claimed.

## Exercises

### Exercise 3.1
<a id="hamming-golay-codes-ex-1"></a>

Why choose one parity-check column per projective direction?

<details>
<summary>Hint 1</summary>

A single error syndrome includes its nonzero magnitude.

</details>
<details>
<summary>Hint 2</summary>

Proportional columns would create ambiguity.

</details>
<details>
<summary>Solution</summary>

Each nonzero syndrome lies in one unique one-dimensional subspace and is a unique nonzero multiple of the selected representative. This identifies both position and magnitude. Repeated projective directions would give two positions capable of producing the same syndrome.

</details>

### Exercise 3.2
<a id="hamming-golay-codes-ex-2"></a>

Prove the projective Hamming code has distance exactly three.

<details>
<summary>Hint 1</summary>

No one or two columns are dependent.

</details>
<details>
<summary>Hint 2</summary>

Use two independent directions and their sum.

</details>
<details>
<summary>Solution</summary>

Zero columns and proportional pairs are absent, so distance is at least three. If representatives are $a,b$ and a nonzero multiple of $a+b$, their three columns have a relation with nonzero coefficients. This gives a weight-three kernel word and proves equality.

</details>

### Exercise 3.3
<a id="hamming-golay-codes-ex-3"></a>

Show binary parity extension raises Hamming distance from three to four.

<details>
<summary>Hint 1</summary>

Every extended word has even weight.

</details>
<details>
<summary>Hint 2</summary>

Track an original weight-three word.

</details>
<details>
<summary>Solution</summary>

An odd original weight gains one and an even weight stays unchanged. Original nonzero weights are at least three, so every extended weight is at least four. An original weight-three word exists and becomes four, giving the exact minimum.

</details>

### Exercise 3.4
<a id="hamming-golay-codes-ex-4"></a>

Derive the complement-intersection size in the eleven-point construction.

<details>
<summary>Hint 1</summary>

Two five-point translates intersect in two points.

</details>
<details>
<summary>Hint 2</summary>

Use inclusion-exclusion.

</details>
<details>
<summary>Solution</summary>

The union of the two translates has size $5+5-2=8$. The intersection of their complements has size $11-8=3$. This is the incidence number used for two ordinary rows of $B$.

</details>

### Exercise 3.5
<a id="hamming-golay-codes-ex-5"></a>

Prove $AA^T=I$ from the displayed row weights and intersections.

<details>
<summary>Hint 1</summary>

Inner products are intersection parity.

</details>
<details>
<summary>Hint 2</summary>

Separate the distinguished row from the others.

</details>
<details>
<summary>Solution</summary>

The diagonal entries are odd row weights, eleven or seven, hence one. Distinguished-versus-ordinary intersections have size six, and ordinary-versus-ordinary distinct intersections have size four, hence all off-diagonal entries vanish. This proves the identity over the binary field.

</details>

### Exercise 3.6
<a id="hamming-golay-codes-ex-6"></a>

Why does self-orthogonality plus dimension twelve imply self-duality at length 24?

<details>
<summary>Hint 1</summary>

The dual has dimension $24-12$.

</details>
<details>
<summary>Hint 2</summary>

Use containment of equal-dimensional subspaces.

</details>
<details>
<summary>Solution</summary>

Self-orthogonality gives $C\subseteq C^\perp$. Both dimensions equal twelve, so the containment is equality. Nondegeneracy of the ambient coordinate pairing supplies the dual dimension even though individual vectors can be self-orthogonal.

</details>

### Exercise 3.7
<a id="hamming-golay-codes-ex-7"></a>

Explain the weight-three systematic-half case in excluding weight-four Golay words.

<details>
<summary>Hint 1</summary>

The other half would have weight one.

</details>
<details>
<summary>Hint 2</summary>

Invert with $A^T$.

</details>
<details>
<summary>Solution</summary>

If $uA$ is a unit vector and $AA^T=I$, then $u=(uA)A^T$ is a column of $A$. Those columns have weights seven or eleven, contradicting the assumed systematic-half weight three. Hence that final possible split cannot produce total weight four.

</details>

### Exercise 3.8
<a id="hamming-golay-codes-ex-8"></a>

Why does the all-one word belong to the extended code?

<details>
<summary>Hint 1</summary>

Every word has even weight.

</details>
<details>
<summary>Hint 2</summary>

Use self-duality.

</details>
<details>
<summary>Solution</summary>

The inner product of any codeword with the all-one word is its weight parity, zero. Thus the all-one word belongs to the dual, which equals the code. Adding it complements a word, proving equality of the weight-eight and weight-sixteen counts.

</details>

### Exercise 3.9
<a id="hamming-golay-codes-ex-9"></a>

Verify the perfect-packing equality for the punctured Golay code.

<details>
<summary>Hint 1</summary>

Its correction radius is three.

</details>
<details>
<summary>Hint 2</summary>

Use the displayed ball volume.

</details>
<details>
<summary>Solution</summary>

Distance seven gives disjoint radius-three balls. Their volume is 2048, and there are 4096 centres, so their total is $2^{11}2^{12}=2^{23}$, exactly the ambient size. They therefore partition the space.

</details>

### Exercise 3.10
<a id="hamming-golay-codes-ex-10"></a>

Why is two-coordinate projection uniform in the weight-enumerator argument?

<details>
<summary>Hint 1</summary>

Failure of rank two gives a short dual word.

</details>
<details>
<summary>Hint 2</summary>

A surjective linear map has equal-size fibres.

</details>
<details>
<summary>Solution</summary>

If rank were less than two, some nonzero combination of the selected coordinate functionals would vanish on the code, producing a dual word of weight one or two. Distance eight forbids this. Rank two makes the four output pairs each have $2^{12-2}=1024$ preimages.

</details>

## Summary

Projective parity checks construct perfect $q$-ary single-error Hamming codes. An explicit eleven-point difference set constructs a self-dual doubly-even binary $[24,12,8]$ Golay code; a weight-four exclusion proves its distance. Puncturing gives a perfect $[23,12,7]$ code, and coordinate moments derive the extended weight enumerator.
