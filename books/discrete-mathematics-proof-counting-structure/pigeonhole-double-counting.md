
# Pigeonhole and Double Counting

Counting does more than produce totals. It can force two objects to share a property, rule out a proposed arrangement, or guarantee that some participant has an unusually large number of connections. These conclusions often arise without finding the particular objects involved. The proof compares what the whole arrangement must contain with what it could contain if the desired conclusion were false.

This chapter develops two connected methods. The pigeonhole principle assigns objects to a limited collection of boxes and forces a crowded box. Double counting describes a single finite set of incidences, then counts it in two different ways. The first method frequently proves that something exists; the second frequently produces an identity or a necessary inequality. Combining them turns a total into a statement about at least one individual object.

The required preparation is [Introduction to Proof](#/books/introduction-to-proof), including finite sets, functions, contradiction and quantified statements. Within this book, read [Counting by Bijection, Decomposition, and Inclusion–Exclusion](counting-bijections-inclusion-exclusion.md) and [Permutations, Combinations, and Binomial Coefficients](permutations-combinations-binomial.md). We use $|A|$ for the number of elements of a finite set $A$, and $\binom nk$ for the number of its $k$-element subsets when $|A|=n$. The existing counting and proof chapters remain useful preparation; here their brief introductions to these methods receive a separate, developed treatment.

Every object set and every box set in this chapter is finite. A box is simply a classification, not necessarily a physical container. Identifying the right classifications, and proving that each object belongs to exactly one of them, is usually the part that requires mathematical imagination.

## Boxes are fibres of a function

**Definition 3.1 (Box assignment).** Let $A$ and $B$ be finite sets with $|A|=N$ and $|B|=k\ge1$. A box assignment is a function $f:A\to B$. For each $b\in B$, the set
$$A_b=\{a\in A:f(a)=b\}$$
is the fibre over $b$, or the set of objects in that box.

The fibres are disjoint and cover $A$. Each object has an image, so it appears in at least one fibre; uniqueness of its image prevents it from appearing in two different fibres. Consequently,
$$N=\sum_{b\in B}|A_b|.$$
Some fibres may be empty. There is no assumption that every box is used, that all boxes have equal size, or that assignments are random.

**Theorem 3.2 (Pigeonhole principle).** If a function assigns $N$ objects to $k$ boxes, where $N$ and $k$ are finite integers satisfying $N>k\ge1$, then some box contains at least two objects.

*Proof.* If every fibre had size at most one, the disjoint-fibre sum would give
$$N=\sum_{b\in B}|A_b|\le\sum_{b\in B}1=k,$$
contrary to $N>k$. Therefore some fibre has at least two elements. Equivalently, the assignment cannot be injective. ∎

The principle gives an existence statement, not the identity of the crowded box. It also does not say that every box is crowded. For example, placing all objects in one box may leave every other box empty. The strict inequality matters: $k$ objects can occupy $k$ boxes one per box, so equality alone does not force a collision.

**Theorem 3.3 (Generalized pigeonhole principle and sharp threshold).** For finite integers $N\ge0$ and $k\ge1$, some box in any assignment of $N$ objects to $k$ boxes contains at least $\lceil N/k\rceil$ objects. For a positive integer $r$, the condition
$$N>k(r-1)$$
guarantees a box containing at least $r$ objects. With no further information, this threshold cannot be decreased.

Here $\lceil x\rceil$ is the least integer at least $x$, called its ceiling.

*Proof.* If $N=0$, every box is empty and the first assertion gives the correct bound zero. Otherwise put $q=\lceil N/k\rceil$. If every box contained at most $q-1$ objects, then $N\le k(q-1)$. But $q-1<N/k$ by the definition of ceiling, so $k(q-1)<N$, a contradiction.

For the threshold assertion, if every box contained at most $r-1$ objects, their total would be at most $k(r-1)$. Thus a larger total forces a box of size at least $r$. At the boundary $N=k(r-1)$, placing exactly $r-1$ objects in every box avoids that conclusion. This construction shows why the strict threshold is necessary for a universal guarantee. ∎

The ceiling bound itself is optimal. Write $N=tk+s$ with integers $t\ge0$ and $0\le s<k$. Put $t+1$ objects in $s$ boxes and $t$ in the remaining boxes. The largest occupancy is exactly $\lceil N/k\rceil$. Showing a lower bound that holds for every arrangement and constructing an arrangement attaining it are separate tasks; together they establish a sharp bound.

**Worked Example 3.4 (A guaranteed busiest day).** A team files $38$ reports during seven days. Each report belongs to the single day on which it was filed. How many reports must some day contain, and can a larger universal guarantee be justified?

The objects are reports and the boxes are days. Since $\lceil38/7\rceil=6$, some day contains at least six reports. To see that seven cannot be guaranteed, distribute the reports with daily totals $6,6,6,5,5,5,5$. These totals add to $38$, and none reaches seven. Thus six is the strongest guaranteed lower bound from these data alone. No assumption about evenly distributed work was used in the proof; a nearly even distribution was used only to demonstrate sharpness.

A useful variation allows different capacities. If box $i$ has an allowed occupancy at most $c_i$, where all $c_i$ are nonnegative integers, then at most $\sum_i c_i$ objects can fit without exceeding an allowed capacity. More than that total forces a violation somewhere. This follows from exactly the same sum argument and is often more natural than pretending all boxes have the same capacity.

## Choose boxes that encode the conclusion

Saying “apply pigeonhole” is incomplete unless the assignment and the consequence of sharing a box are explained. If the desired conclusion concerns divisibility of a difference, remainder classes are useful boxes. If it concerns a pair with a prescribed sum, use complementary pairs. If it concerns distance, divide a region into small cells. These choices translate a qualitative relationship into a collision of classifications.

**Worked Example 3.5 (An exact extremal bound from complementary pairs).** Let $n\ge1$ be an integer. Prove that any selection of $n+1$ distinct numbers from $\{1,2,\ldots,2n\}$ contains two whose sum is $2n+1$. What is the largest possible size of a selection avoiding such a pair?

Partition the available numbers into $n$ boxes:
$$\{1,2n\},\{2,2n-1\},\ldots,\{n,n+1\}.$$
Each number belongs to exactly one box and the two numbers in each box sum to $2n+1$. The $n+1$ selected numbers force a box containing two selected numbers. Distinctness ensures they are the two different members of that box, giving the required pair.

To avoid such a pair, a selection can use at most one number from each box, so it has size at most $n$. The selection $\{1,2,\ldots,n\}$ attains this size and avoids the sum: any two distinct members, if present, have sum at most $2n-1$, which is less than $2n+1$. Thus the extremal maximum is exactly $n$. The upper bound comes from counting restricted choices, while the matching example proves attainability.

**Worked Example 3.6 (Geometric boxes and boundary care).** Prove that among any $19$ distinct points in the rectangle $[0,6]\times[0,3]$, two are at distance at most $\sqrt2$.

Divide the rectangle into $18$ unit-square cells, using six horizontal-coordinate intervals and three vertical-coordinate intervals. To make a genuine partition, take intervals $[0,1),[1,2),\ldots,[4,5),[5,6]$ horizontally, and $[0,1),[1,2),[2,3]$ vertically. A cell is a product of one interval of each kind. These endpoint conventions assign every boundary point to exactly one cell.

Two points share a cell by the pigeonhole principle. Their horizontal coordinates differ by at most one, and so do their vertical coordinates. The squared distance is therefore at most $1^2+1^2=2$, giving distance at most $\sqrt2$. The conclusion is an existence guarantee, not a claim to have found the closest pair. This argument also does not prove that $19$ is the smallest number that forces the stated distance bound; its cell count supplies a sufficient threshold.

The partition condition prevents a subtle error. Closed unit squares overlap at edges, so simply saying that every point is “put in a square” leaves an assignment unspecified. One could choose a consistent tie-breaking rule instead of half-open intervals, but the rule must exist. In contrast, objects need not have distinct numerical labels when they are distinct occurrences: repeated entries in a list can be treated as different objects indexed by their positions.

## Averages convert totals into witnesses

**Theorem 3.7 (Finite averaging principle).** For real numbers $x_1,\ldots,x_k$ with finite $k\ge1$ and average $\mu=(x_1+\cdots+x_k)/k$, some term is at least $\mu$ and some term is at most $\mu$. If the terms are integers and their sum is $S$, some term is at least $\lceil S/k\rceil$ and some term is at most $\lfloor S/k\rfloor$.

The floor $\lfloor x\rfloor$ is the greatest integer at most $x$.

*Proof.* If all terms were strictly less than $\mu$, their sum would be strictly less than $k\mu$, contradicting the definition of $\mu$. If all were strictly greater, their sum would be strictly greater than $k\mu$, again a contradiction. An integer at least $\mu$ is at least its ceiling, and an integer at most $\mu$ is at most its floor. ∎

This theorem includes the generalized pigeonhole principle by taking the terms to be box occupancies. It does not assert that any term equals the average. For occupancies $2$ and $5$, the average is $3.5$, and neither box has that occupancy. Nor does knowing an average determine how many terms are above it. The conclusion promises at least one witness on each side, with equality allowed.

## Count incidences by rows and columns

**Definition 3.8 (Finite incidence relation).** Let $X$ and $Y$ be finite sets. An incidence relation is a subset $I\subseteq X\times Y$. For $x\in X$, define $d_X(x)$ to be the number of $y$ for which $(x,y)\in I$. Define $d_Y(y)$ similarly by counting first coordinates incident with $y$.

You can imagine a table with one row per member of $X$ and one column per member of $Y$. Put a mark in a cell exactly when its pair is incident. A row total counts incidences at one object of the first kind; a column total counts them at one object of the second kind. Unlike a box assignment, one object of $X$ may be incident with many objects of $Y$.

**Theorem 3.9 (Incidence double counting).** For finite $X$, $Y$ and $I\subseteq X\times Y$,
$$\sum_{x\in X}d_X(x)=|I|=\sum_{y\in Y}d_Y(y).$$

*Proof.* Partition $I$ by its first coordinate. The part with first coordinate $x$ has exactly $d_X(x)$ elements. These parts are disjoint and exhaustive, giving the first equality by the sum rule. Partitioning the same set $I$ by its second coordinate gives the second equality. Empty sets cause no exception: the corresponding incidence set and sums are empty and have value zero. ∎

The objects counted on both sides are pairs, not merely people or groups. Counting the same individual several times is correct if each occurrence belongs to a different incidence pair. The real error would be failing to specify the pairs, counting some pair twice on one side, or comparing counts of two different incidence sets.

**Worked Example 3.10 (Group membership forces a large group).** Twenty participants each join exactly three of eight discussion groups. Prove that at least one group has at least eight participants. Could all groups have size seven?

Take $X$ to be the participants, $Y$ the groups, and $(x,y)\in I$ when participant $x$ joins group $y$. Counting by participants gives $|I|=20\cdot3=60$. Therefore the eight group sizes sum to $60$. Their average is $7.5$, so some integer group size is at least eight. If all groups had size seven, the total would be $56$, contradicting the exact incidence count.

Participants may join more than one group, so the group member sets are not a partition of the participants. Applying the sum rule directly to those overlapping member sets would be misleading. The incidence pairs do form a set counted exactly once in each grouping. The count imposes a necessary condition; additional scheduling or eligibility constraints would need their own analysis.

A regular incidence arrangement illustrates the same theorem symbolically. If each of $v$ points belongs to exactly $r$ labeled blocks and every one of $b$ blocks contains exactly $k$ points, then $vr=bk$. These are counts of point-block incidences. When proposed parameters violate the equality, the arrangement is impossible. Satisfying the equality alone does not construct an arrangement or establish any extra pairwise restrictions.

**Theorem 3.11 (Counting marked subsets).** For a finite $n$-element set $X$ with $n\ge1$,
$$\sum_{S\subseteq X}|S|=n2^{n-1}.$$
Equivalently, grouping subsets by size gives
$$\sum_{k=1}^{n}k\binom nk=n2^{n-1}.$$

*Proof.* Count pairs $(x,S)$ where $S\subseteq X$ and $x\in S$. For each fixed subset $S$, there are $|S|$ choices of the marked element $x$, giving the sum on the left. Alternatively, choose $x$ first in $n$ ways. The remaining elements of $S$ are an arbitrary subset of the other $n-1$ elements, giving $2^{n-1}$ choices. Thus the total is $n2^{n-1}$. There are $\binom nk$ subsets of size $k$, so grouping the first sum by subset size gives the equivalent expression. ∎

**Worked Example 3.12 (Total active switches across all configurations).** A panel has six labeled switches, each either on or off. Across every one of its $2^6=64$ configurations, add up the number of switches that are on. Find the total without listing configurations.

A configuration corresponds to its subset of on-switches. The theorem gives a total of $6\cdot2^5=192$ active-switch occurrences. Direct incidence counting says the same thing: each particular switch is on in exactly $32$ configurations, since the other five switches can be chosen freely. Adding over the six switches gives $192$. Dividing by the $64$ configurations gives average occupancy three, although individual configurations range from zero on-switches to six.

## Handshaking is incidence counting

**Definition 3.13 (Finite simple undirected graph and degree).** A finite simple undirected graph consists of a finite vertex set $V$ and an edge set $E$ whose elements are two-element subsets of $V$. The degree $d(v)$ is the number of edges containing vertex $v$.

“Simple” excludes loops and repeated edges; “undirected” means that $\{u,v\}$ has no preferred order. These definitions suffice for the applications here. Later graph chapters develop paths, connectivity and other structure. No claim about connectivity follows merely from a degree total.

**Theorem 3.14 (Degree-sum formula, or handshaking lemma).** For every finite simple undirected graph,
$$\sum_{v\in V}d(v)=2|E|.$$

*Proof.* Count $I=\{(v,e)\in V\times E:v\in e\}$. Counting by vertices gives the degree sum. Each edge is a two-element set, so it contributes exactly two different pairs when counting by edges. Hence $|I|=2|E|$, proving the equality. The formula also covers a graph with no edges or no vertices, since all relevant counts are zero. ∎

**Corollary 3.15 (Odd-degree vertices).** Every finite simple undirected graph has an even number of vertices of odd degree.

*Proof.* Split the degree sum into its even-degree and odd-degree terms. The full sum is even by the handshaking lemma, and the sum of the even terms is even. Thus the sum of the odd terms is even. Modulo two, a sum of $t$ odd integers has the same parity as $t$, so the number $t$ of odd-degree vertices must be even. ∎

**Worked Example 3.16 (What a network total forces).** A finite simple network has twelve vertices and twenty edges. Prove that some vertex has degree at least four and some vertex has degree at most three.

The degree sum is $2\cdot20=40$, so the average degree is $40/12=10/3$. The finite averaging principle gives a degree at least $\lceil10/3\rceil=4$ and a degree at most $\lfloor10/3\rfloor=3$. These may be different vertices; indeed no integer degree could equal the average. The data do not force a vertex of degree exactly four, a vertex of degree exactly three, or a connected network. The argument provides lower and upper witnesses without those additional conclusions.

The same method supplies a useful edge bound. If $|V|=n$, every vertex in a simple graph has degree at most $n-1$ when $n\ge1$, so
$$2|E|=\sum_v d(v)\le n(n-1).$$
Hence $|E|\le\binom n2$. Equality requires every vertex to be adjacent to every other vertex and is attained by taking all possible edges. For $n=0$ the bound also holds directly, since there are no edges. This is an extremal proof: a universal upper bound is paired with a construction attaining it.

The hypotheses matter. A loop has only one endpoint as a vertex set but contributes two to the usual loop-aware degree convention, so the incidence set above would need refinement to count endpoint occurrences. Directed graphs have separate incoming and outgoing degrees. We have excluded these cases rather than silently applying the simple-graph definition to them.

## Counting restricted pairs gives extremal bounds

**Theorem 3.17 (Pair-packing bound).** Let $X$ be a finite set of $v$ points, and let $\mathcal B$ be a finite collection of $b$ distinct subsets of $X$, each containing exactly $k$ points, where $2\le k\le v$. If every pair of distinct points belongs to at most one member of $\mathcal B$, then
$$b\binom k2\le\binom v2.$$

*Proof.* Count pairs $(T,B)$ where $B\in\mathcal B$ and $T$ is a two-element subset of $B$. Each block $B$ contains exactly $\binom k2$ such subsets, so the total is $b\binom k2$. Counting by $T$, there are $\binom v2$ possible point pairs, and the hypothesis allows each pair to occur in at most one block. Therefore the same total is at most $\binom v2$, giving the inequality. ∎

**Worked Example 3.18 (A bound is not automatically an exact maximum).** Fifteen people form distinct four-person teams, with no pair of people allowed to serve together in two teams. Show that there are at most seventeen teams.

Each team uses $\binom42=6$ unordered pairs of people. Across fifteen people there are $\binom{15}2=105$ possible pairs. Since no pair can be reused, $6b\le105$, so the integer number of teams satisfies $b\le17$. This is a proved upper bound. We have not constructed seventeen valid teams, so we have not proved that the maximum is seventeen. Equality or near-equality questions can require more information than a single incidence count provides.

The direction of the inequality comes from the restriction: at most one block per pair gives an upper bound. A requirement of at least one occurrence would reverse that comparison. Exact occurrence conditions give equalities. Keeping these phrases distinct is a reliable way to check an extremal counting argument.

## Exercises

### Exercise 3.1
<a id="pigeonhole-double-counting-ex-1"></a>

Fifty-three records are assigned to eight labels, each record receiving exactly one label. Prove that some label is used at least seven times, and show that eight uses cannot be guaranteed.

<details>
<summary>Hint 1</summary>

Calculate the ceiling of the average occupancy.

</details>
<details>
<summary>Hint 2</summary>

For sharpness, divide $53$ by $8$ and distribute the remainder one at a time.

</details>
<details>
<summary>Solution</summary>

The average occupancy is $53/8=6.625$, so some label has at least seven records. To avoid eight records on every label, use five label totals of seven and three totals of six. Their sum is $35+18=53$, and the maximum is seven. This construction shows that a stronger universal guarantee of eight would be false.

</details>

### Exercise 3.2
<a id="pigeonhole-double-counting-ex-2"></a>

Find the least integer $N$ such that every list of $N$ integers contains four entries with the same remainder on division by seven. Prove both the guarantee and its minimality.

<details>
<summary>Hint 1</summary>

There are seven remainder boxes, and avoiding four in a box permits at most three in each.

</details>
<details>
<summary>Hint 2</summary>

Construct a list of $21$ distinct integers with exactly three in each remainder class.

</details>
<details>
<summary>Solution</summary>

The threshold is $N=7(4-1)+1=22$. With $22$ entries, some remainder class contains at least four, since seven boxes of size at most three hold only $21$. The list $0,1,\ldots,20$ has exactly three entries in each remainder class modulo seven, so $21$ entries do not guarantee four. Any shorter initial sublist also avoids four, establishing minimality.

</details>

### Exercise 3.3
<a id="pigeonhole-double-counting-ex-3"></a>

Prove that among any sixteen distinct integers there are two whose difference is divisible by fifteen. Explain why the argument does not guarantee that their sum is divisible by fifteen.

<details>
<summary>Hint 1</summary>

Assign each integer to its remainder on division by fifteen.

</details>
<details>
<summary>Hint 2</summary>

Write the two colliding integers as $15u+r$ and $15v+r$.

</details>
<details>
<summary>Solution</summary>

There are fifteen remainder classes, so sixteen inputs force two with one common remainder $r$. Their difference is $(15u+r)-(15v+r)=15(u-v)$, divisible by fifteen. Their sum is $15(u+v)+2r$, which need not be divisible by fifteen. In fact the sixteen integers $1,16,31,\ldots,226$ all have remainder one, so every pair has sum with remainder two, providing a counterexample to the proposed sum guarantee.

</details>

### Exercise 3.4
<a id="pigeonhole-double-counting-ex-4"></a>

Let $a_1,\ldots,a_9$ be any nine integers, with negative and zero values allowed. Prove that some nonempty consecutive segment has sum divisible by nine.

<details>
<summary>Hint 1</summary>

Introduce partial sums $S_0=0$ and $S_j=a_1+\cdots+a_j$.

</details>
<details>
<summary>Hint 2</summary>

There are ten partial sums but only nine possible remainders. Subtract the earlier partial sum from the later one.

</details>
<details>
<summary>Solution</summary>

The ten indexed partial sums $S_0,\ldots,S_9$ occupy nine remainder classes. Thus some $S_i$ and $S_j$, with $0\le i<j\le9$, have the same remainder. Their difference $S_j-S_i=a_{i+1}+\cdots+a_j$ is divisible by nine. Because $j>i$, the segment is nonempty. Equal numerical partial sums are allowed: their difference is zero, which is divisible by nine. The objects are indexed partial sums, so repeated values cause no difficulty.

</details>

### Exercise 3.5
<a id="pigeonhole-double-counting-ex-5"></a>

Prove that among any thirteen distinct points in $[0,4]\times[0,3]$, two are at distance at most $\sqrt2$. Make your boundary assignment explicit.

<details>
<summary>Hint 1</summary>

Partition the rectangle into twelve cells of unit width and height.

</details>
<details>
<summary>Hint 2</summary>

Use half-open coordinate intervals except at the outermost endpoint, then bound both coordinate differences of points in one cell.

</details>
<details>
<summary>Solution</summary>

Horizontally use $[0,1),[1,2),[2,3),[3,4]$ and vertically use $[0,1),[1,2),[2,3]$. Their products form twelve disjoint cells covering the rectangle. Thirteen points force two into one cell. Their coordinate differences have magnitude at most one, so their squared distance is at most two and their distance at most $\sqrt2$. The endpoint conventions make the box assignment a function even for points on dividing lines.

</details>

### Exercise 3.6
<a id="pigeonhole-double-counting-ex-6"></a>

Seventeen participants each join exactly four of nine groups. Prove that some group has at least eight members. Could every group have exactly eight members?

<details>
<summary>Hint 1</summary>

Count participant-group incidences before averaging the group sizes.

</details>
<details>
<summary>Hint 2</summary>

Compare the required incidence total with nine groups of size eight.

</details>
<details>
<summary>Solution</summary>

There are $17\cdot4=68$ incidences. The nine group sizes therefore average $68/9$, which is between seven and eight. Some integer size is at least eight. If every group had size eight, the incidence total would be $9\cdot8=72$, contradicting $68$. The existence of a group at least as large as eight does not imply that every group has that size or that all groups are equally large.

</details>

### Exercise 3.7
<a id="pigeonhole-double-counting-ex-7"></a>

For every integer $n\ge2$, prove by double counting that
$$\sum_{k=2}^{n}\binom nk\binom k2=\binom n2\,2^{n-2}.$$
Specify the objects counted on both sides.

<details>
<summary>Hint 1</summary>

Count a subset together with a distinguished unordered pair inside it.

</details>
<details>
<summary>Hint 2</summary>

Choose the pair first on one side, then decide independently which of the remaining elements belong to the larger subset.

</details>
<details>
<summary>Solution</summary>

Fix an $n$-element set $X$ and count pairs $(S,T)$ with $T\subseteq S\subseteq X$ and $|T|=2$. If $|S|=k$, there are $\binom nk$ choices for $S$ and $\binom k2$ choices for $T$, giving the sum on the left after partitioning by $k$. Alternatively, choose $T$ in $\binom n2$ ways. Each of the other $n-2$ elements may be included in $S$ or omitted, giving $2^{n-2}$ choices. Both procedures count the same finite incidence set once, proving the identity.

</details>

### Exercise 3.8
<a id="pigeonhole-double-counting-ex-8"></a>

A finite simple undirected graph has eleven vertices. Ten vertices have degree five, and the remaining vertex has degree $d$. What parity must $d$ have, and what numerical bounds must it satisfy? State which conclusions are necessary conditions rather than an existence construction.

<details>
<summary>Hint 1</summary>

Use the degree sum $50+d$ and the fact that it equals twice an integer.

</details>
<details>
<summary>Hint 2</summary>

In a simple graph on eleven vertices, a vertex can be adjacent to at most ten others.

</details>
<details>
<summary>Solution</summary>

The degree sum is $10\cdot5+d=50+d$, which must be even. Therefore $d$ is even. Simplicity also gives $0\le d\le10$, so the only possible numerical candidates are $0,2,4,6,8,10$. The number of edges, if the graph exists, is $(50+d)/2$. These parity and size conditions are necessary; this calculation by itself does not construct a graph for every candidate or prove that every candidate is realizable.

</details>

### Exercise 3.9
<a id="pigeonhole-double-counting-ex-9"></a>

Prove that every finite simple undirected graph on $n\ge2$ vertices has two vertices of equal degree. Explain why merely listing the possible degrees $0,1,\ldots,n-1$ is not yet enough.

<details>
<summary>Hint 1</summary>

Ask whether degree zero and degree $n-1$ can occur together.

</details>
<details>
<summary>Hint 2</summary>

Once one of those two values is excluded, there are at most $n-1$ degree boxes for $n$ vertices.

</details>
<details>
<summary>Solution</summary>

If a vertex has degree $n-1$, it is adjacent to every other vertex, so no vertex can have degree zero. If no vertex has degree $n-1$, that value is absent instead. In either case all degrees lie in a set of at most $n-1$ possible values. Assigning the $n$ vertices to their degree values forces a collision. The initial list has $n$ values for $n$ vertices, which alone would allow distinct occupancies; the incompatibility of the two extreme degrees supplies the missing restriction.

</details>

### Exercise 3.10
<a id="pigeonhole-double-counting-ex-10"></a>

A set of twelve points supports a collection of distinct four-point blocks. No pair of points may occur together in two different blocks. Prove that there are at most nine blocks. Do not assume that every point belongs to the same number of blocks.

<details>
<summary>Hint 1</summary>

Fix one point. Each block containing it uses three other points, and those partners cannot repeat.

</details>
<details>
<summary>Hint 2</summary>

Bound each point's block-membership count, then double count all point-block incidences.

</details>
<details>
<summary>Solution</summary>

For a fixed point $x$, the other members of blocks containing $x$ must be disjoint across those blocks. Otherwise a repeated partner $y$ would make the pair $\{x,y\}$ occur twice. There are only eleven other points, and each such block uses three of them, so $x$ belongs to at most $\lfloor11/3\rfloor=3$ blocks. Summing over all twelve points gives at most $36$ point-block incidences. If there are $b$ blocks, counting by blocks gives exactly $4b$ incidences. Hence $4b\le36$, so $b\le9$. This is an upper bound, with no assertion here that nine is attainable.

</details>

## Sources and provenance

This chapter is original exposition with original worked examples and exercises. The retained local seeds are the brief pigeonhole, incidence and handshaking discussions in **Counting by Bijection, Decomposition, and Inclusion–Exclusion**, together with **Proof, Induction, Recursion, Invariants, and Extremal Choice**; those source chapters are not removed. Primary open-textbook comparison and further reading: [§2.1, The Pigeonhole Principle, University of Lethbridge open text](https://opentext.uleth.ca/Ramsey/sec_Pigeon.html), and Oscar Levin's [*Discrete Mathematics: An Open Introduction*, §1.4, Combinatorial Proofs](https://discrete.openmathbooks.org/dmoi3/sec_comb-proofs.html) and [§4.1, Definitions, including the Handshake Lemma](https://discrete.openmathbooks.org/dmoi3/sec_gt-intro.html). These links provide alternative treatments and context; their exercise sets are not reproduced.

## Summary

A finite assignment partitions its objects into fibres, so a total exceeding the combined box capacities forces a crowded box. The generalized pigeonhole principle turns an average occupancy into an integer lower bound, and a matching construction establishes sharpness when one is available. Effective boxes encode the desired conclusion, with endpoint and distinctness conventions made explicit. Incidence double counting compares row and column totals of one specified set of pairs; averaging then converts those totals into witnesses. The degree-sum formula, its odd-degree corollary and pair-packing inequalities are applications of the same idea. Necessary counting conditions can rule out an arrangement without proving existence when they are satisfied. In [Recurrences and Generating Functions](recurrences-generating-functions.md), counting will also use the way a large object decomposes into smaller ones, leading to equations that organize whole sequences of counts.
