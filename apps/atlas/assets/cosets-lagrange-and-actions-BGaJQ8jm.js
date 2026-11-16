var e=`---
parent_id: course-abstract-algebra-proof
chapter_id: cosets-lagrange-and-actions
---

# Module 3 — Cosets, Lagrange, and actions

**Question.** If a subgroup is a collection of moves we cannot distinguish, how many distinct positions remain? Cosets count the positions; an action explains why the same count appears as orbit size.

**Entry check.** For $H=\\{[0],[4],[8]\\}$ in additive $\\mathbb Z/12\\mathbb Z$, find $[1]+H$ and $[5]+H$. Both are $\\{[1],[5],[9]\\}$. If the second looked different, first compare sets rather than their chosen representatives.

For $H\\le G$, a **left coset** is $gH=\\{gh:h\\in H\\}$. The map $h\\mapsto gh$ from $H$ onto $gH$ has inverse $gh\\mapsto h$ by cancellation, so every coset has $|H|$ elements. Moreover
$$
aH=bH\\quad\\Longleftrightarrow\\quad b^{-1}a\\in H.
$$
Indeed, if $a=bh$ then $aH=bhH=bH$; if $aH=bH$, then $a\\in bH$. If $aH\\cap bH$ contains $x=ah_1=bh_2$, then $b^{-1}a=h_2h_1^{-1}\\in H$, and the cosets are equal. Thus distinct left cosets are disjoint. Every $g$ belongs to $gH$, so they partition $G$. For finite $G$, counting equal blocks proves **Lagrange's theorem**: $|G|=[G:H]|H|$. Applied to $\\langle g\\rangle$, it shows $|g|$ divides $|G|$ and hence $g^{|G|}=e$. It does not assert that every divisor occurs as a subgroup order.

A left action of $G$ on $X$ obeys $ex=x$ and $(gh)x=g(hx)$. The orbit is $Gx$ and stabilizer $G_x=\\{g:gx=x\\}$; the subgroup test follows from $(ab^{-1})x=a(b^{-1}x)=x$ when $a,b$ fix $x$. There is a canonical map
$$
G/G_x\\longrightarrow Gx,\\qquad gG_x\\longmapsto gx.
$$
If $gG_x=hG_x$, then $h^{-1}g\\in G_x$, so $gx=hx$: the map is well-defined. Conversely $gx=hx$ gives $h^{-1}g\\in G_x$, so it is injective. It is onto by the definition of orbit. Left multiplication on cosets is itself well-defined: if $gG_x=hG_x$, then $kgG_x=khG_x$ for every $k\\in G$. For $k\\in G$, the bijection is equivariant: $k(gG_x)=(kg)G_x$ maps to $(kg)x=k(gx)$. For finite $G$, counting yields $|Gx|=[G:G_x]$. This quotient is a **set of cosets** with an action; it is not automatically a quotient group. Group multiplication of cosets needs normality (Module 4).

**Worked example.** $S_3$ acts on $\\{1,2,3\\}$ by permutations. The stabilizer of 1 is $\\{e,(23)\\}$, of order 2; the orbit has three points, matching $6/2$. Left multiplication by $H$ on $G$ instead has orbits $Hg$, which are **right** cosets. Keep the action and coset orientation explicit. [Workshop 1 in the course overview](#/item/course-abstract-algebra-proof) computes cosets and normality in $S_3$. The [group actions essay](#/item/deep-dive-group-actions-counting) develops fixed-point counting.

## Guided practice

### 1. Starter — Find the blocks

List the left cosets of $H=\\langle[3]\\rangle$ in additive $\\mathbb Z/9\\mathbb Z$.

**Hint.** Find $H$ first and stop when all residues are covered.

**Reasoning.** $H=\\{[0],[3],[6]\\}$; the distinct cosets are $H$, $[1]+H=\\{[1],[4],[7]\\}$, and $[2]+H=\\{[2],[5],[8]\\}$. They partition nine elements into three blocks of size three.

### 2. Core — Orbit-stabilizer as a map

For the natural $S_3$ action, identify the coset corresponding to the point 2 when the base point is 1.

**Hint.** Choose any permutation sending 1 to 2.

**Reasoning.** $(12)G_1$ maps to $(12)1=2$. Every permutation sending 1 to 2 lies in the same left coset: if $g1=(12)1$, then $(12)^{-1}g$ fixes 1.

### 3. Transfer — An impossible group

Could a group of order 15 contain an element of order 4?

**Hint.** Apply Lagrange to the subgroup it generates.

**Reasoning.** Such an element would generate a subgroup of order 4, which would have to divide 15. It does not, so the element cannot exist. This says nothing about existence of subgroups of order 3 or 5 without further argument.

### 4. Proof audit — A quotient-set trap

A proof says $G/H$ is a group because cosets partition $G$. Locate the missing step.

**Hint.** Partitions give a set; what must be checked before multiplying blocks?

**Reasoning.** A partition alone supplies no operation. The proposed $(aH)(bH)=abH$ must be independent of the representatives $a,b$. This holds exactly for normal $H$; Module 4 supplies the proof and a failure in $S_3$.
`;export{e as default};