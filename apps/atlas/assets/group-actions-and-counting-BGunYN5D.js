var e=`---
id: deep-dive-group-actions-counting
title: "Group Actions: Turning Symmetry into Counting"
license: CC BY-SA 4.0
---

# Group Actions: Turning Symmetry into Counting

**Before reading.** Read [Tiny Worlds, Precise Claims: Logic Before Formalism](../deep-dives/logic-worlds-before-symbols.md), [Divisibility and Modular Arithmetic](../books/introduction-to-proof/divisibility-modular-arithmetic.md) and [Groups, Subgroups, and Generated Structure](../books/algebra-patterns-structure/groups-subgroups-generated-structure.md). These are preparation for the ideas used below.

How many square necklaces can be colored black and white if rotating the necklace does not make a new design? Listing all $2^{4}$ colorings overcounts, but simply dividing by four fails because some colorings have extra symmetry. Group actions give a precise language for this varying amount of overcounting.

**Before reading.** You should be comfortable with groups, subgroups, cosets, and a proof by counting the same set in two ways. A bracelet permits reflections as well as rotations; a necklace here permits rotations only.

## From groups to actions

A **group** is a set $G$ with an associative product, an identity $e$, and an inverse for every element. An **action** of $G$ on a set $X$ assigns an element $g\\cdot x$ of $X$ to every $g\\in G$, $x\\in X$, such that

$e\\cdot x=x$ and $(gh)\\cdot x=g\\cdot(h\\cdot x)$.

The cyclic group $C_4=\\{e,r,r^{2},r^{3}\\}$ acts on the vertices of a square by quarter-turns. It also acts on colorings: rotate every colored vertex. An action is not just a collection of functions; the compatibility law says that multiplication in the group agrees with composition of transformations.

For $x\\in X$, its **orbit** is $Gx=\\{g\\cdot x:g\\in G\\}$. Two objects lie in one orbit exactly when symmetry makes them equivalent. Its **stabilizer** is

$$G_x=\\{g\\in G:g\\cdot x=x\\}$$

the subgroup of symmetries that preserve that particular object. It really is a subgroup: $e$ fixes $x$, and if $g,h$ fix $x$, then $h^{-1}$ and $gh^{-1}$ fix $x$ by the action laws.

An action is **transitive** if there is one orbit, and **free** if every stabilizer contains only $e$. It is **faithful** if no nonidentity element fixes *every* point. These are three different tests: transitivity concerns all orbit points, freeness concerns each point's stabilizer, and faithfulness concerns the intersection of all stabilizers. Rotations act transitively, freely, and faithfully on the four square vertices. The full dihedral group acts transitively and faithfully but not freely, because a reflection fixes a vertex. The trivial action of a nontrivial group on a one-point set is transitive but neither free nor faithful.

## Orbit-stabilizer theorem

For a finite nonempty group $G$ acting on any set $X$ and $x\\in X$,

$$|Gx| = |G| / |G_{x}|$$

The proof exposes the mechanism. Map $g\\in G$ to $g\\cdot x$. Two elements $g,h$ have the same image exactly when $g\\cdot x=h\\cdot x$, equivalently $(h^{-1}g)\\cdot x=x$, so $h^{-1}g\\in G_x$. Thus elements producing the same orbit point form $hG_x$ for a fixed $h$: a **left coset**. Every such coset has $|G_x|$ elements, so the group splits into $|Gx|$ equal fibers.

More precisely, $gG_x\\mapsto g\\cdot x$ is a well-defined bijection $G/G_x\\to Gx$: if $gG_x=hG_x$, then $h^{-1}g\\in G_x$ and the images agree; if the images agree, the same implication runs backward. It is also **equivariant**, since $k\\cdot(gG_x)=(kg)G_x$ maps to $(kg)\\cdot x=k\\cdot(g\\cdot x)$. Hence a transitive $G$-set is, with its action intact, the left-coset space of any point stabilizer. We have proved more than an equality of cardinalities.

Worked example: the rotation group of a cube has 24 elements. Choose one face. Its orbit contains all 6 faces, so its stabilizer has size $24/6=4$: the four rotations around the axis through that face and its opposite. This calculation finds a subgroup without listing all rotations.

Orbit-stabilizer also proves Lagrange's theorem. Let a subgroup $H$ act on $G$ by left multiplication, $h\\cdot g=hg$. Its orbit through $g$ is $Hg=\\{hg:h\\in H\\}$, a **right coset** of $H$, and has $|H|$ elements. These right cosets partition $G$, so $|H|$ divides $|G|$. The earlier fibers $gG_x$ were left cosets: the side reverses because there $G_x$ multiplies $g$ on the right.

## Burnside's counting lemma

Now assume $G$ is finite and nonempty **and $X$ is finite**. For $g\\in G$, let $\\operatorname{Fix}(g)=\\{x\\in X:g\\cdot x=x\\}$. Burnside's lemma says the number of orbits is

$$\\frac1{|G|}\\sum_{g\\in G}|\\operatorname{Fix}(g)|.$$

Despite its name, this is a double-counting argument. Count pairs $(g,x)$ with $g\\cdot x=x$. Counting first by $g$ gives the displayed sum. Counting by $x$ gives $\\sum_x|G_x|$. Within an orbit $O$, orbit-stabilizer says every $x\\in O$ has stabilizer size $|G|/|O|$; summing over its $|O|$ points contributes exactly $|G|$. Therefore each orbit contributes one after division by $|G|$.

### Worked binary necklace

**Worked example.**

Color four positions black or white, identifying rotations but not reflections. The identity fixes all 16 colorings. A 90-degree or 270-degree rotation fixes only the two constant colorings. A 180-degree rotation requires opposite positions to agree and fixes $2^{2}=4$ colorings. Hence

$$number of necklaces = (16+2+4+2)/4 = 6$$

Why did naive division give $16/4=4$? It silently assumed a free action, but constant colorings have stabilizer $C_4$, and alternating colorings have a nontrivial half-turn stabilizer. Their orbits are smaller than four.

If reflections are also identified, use the eight-element dihedral group. Two reflections through opposite vertices fix $2^{3}=8$ colorings each; two reflections through opposite edges fix $2^{2}=4$ each. Adding these to the rotational total gives $(24+16+8)/8=6$. Here even the **partition** is unchanged. Number positions $0,1,2,3$ and write their colors in that order. The six rotation-orbit representatives are $0000,0001,0011,0101,0111,1111$. Reflection $i\\mapsto-i\\pmod4$ sends them respectively to $0000,0100,0110,0101,0111,1111$. Each image is a rotation of its representative (for instance $0110$ is a turn of $0011$). Every other reflection is a rotation followed by this one, so none can merge two rotation orbits. Because $C_4\\le D_4$, each dihedral orbit is a union of rotation orbits. Equal finite counts together with this coarsening already prove that the partitions coincide; the representative check gives a direct verification.

Six beads show the actual difference. Rotations by $k=0,1,2,3,4,5$ have respectively $6,1,2,3,2,1$ position cycles and fix $64,2,4,8,4,2$ binary colorings, totaling $84$. Three reflection axes pass through opposite beads: each has two singleton positions and two swapped pairs, hence $2^4=16$ fixed colorings. Three axes pass between beads: each has three swapped pairs and $2^3=8$ fixed colorings. The reflection total is $3\\cdot16+3\\cdot8=72$. Burnside therefore gives $84/6=14$ necklaces and $(84+72)/12=13$ bracelets. To see the merged pair directly, reverse $001011$ to $110100$. The six rotations of $001011$ are $001011,010110,101100,011001,110010,100101$; $110100$ is absent. Reflection identifies these two distinct rotation orbits.

## Actions reveal algebraic structure

Every action determines a homomorphism $G\\to\\operatorname{Sym}(X)$, sending $g$ to the permutation $x\\mapsto g\\cdot x$. Its kernel is exactly $\\bigcap_{x\\in X}G_x$, the elements acting trivially everywhere. Thus the earlier faithfulness test says precisely that this homomorphism is injective. A free action is faithful when $X$ is nonempty, but a faithful action need not be free. Cayley's theorem follows by letting $G$ act on itself by left multiplication: if $hg=g$ for even one $g$, then $h=e$, so this action is free and faithful. Every group is therefore isomorphic to a subgroup of a permutation group.

Conjugation, $g\\cdot x=gxg^{-1}$, is another important action of a group on itself. Its orbits are conjugacy classes and its stabilizers are centralizers. Orbit-stabilizer gives

$$|\\operatorname{Cl}(x)|=[G:C_G(x)].$$

This turns questions about commuting elements into counting statements and is central to representation theory.

## Common traps

- An orbit is a subset of $X$; a stabilizer is a subgroup of $G$. They are different kinds of objects.
- A fixed point of one group element need not be fixed by the whole group.
- Dividing the raw number of objects by $|G|$ is justified only for a free action.
- Burnside counts orbits, not necessarily objects with no symmetry.
- The word "symmetry" must specify which transformations are allowed. Enlarging the group can merge orbits, but need not: it does for six binary beads and does not for four.

## Exercises

<a id="deep-dive-group-actions-counting-ex-1"></a>

### Exercise 1

1. Let $S_3$ act on $\\{1,2,3\\}$. Find the stabilizer of 1 and verify orbit-stabilizer.

<details>
<summary>Hint 1</summary>

A stabilizer contains exactly the permutations that leave the chosen point fixed.
</details>

<details>
<summary>Hint 2</summary>

List those permutations in S3 and multiply stabilizer size by orbit size to check the group order.
</details>

<details>
<summary>Solution</summary>

The identity and transposition $(23)$ fix 1, so the stabilizer has size 2; the orbit has size 3 and $6=2\\cdot3$.

</details>

<a id="deep-dive-group-actions-counting-ex-2"></a>

### Exercise 2

2. A regular hexagon has 12 geometric symmetries. How many fix a chosen vertex?

<details>
<summary>Hint 1</summary>

All six vertices lie in one orbit under the full hexagon symmetry group.
</details>

<details>
<summary>Hint 2</summary>

Use orbit-stabilizer with group order twelve and orbit size six, then identify the two fixing symmetries.
</details>

<details>
<summary>Solution</summary>

The vertex orbit has size 6, so its stabilizer has size $12/6=2$: the identity and the reflection through that vertex and the opposite vertex.

</details>

### Further exercises

3. Count colorings of the vertices of a triangle with three colors, up to rotation.
4. Show that a transitive action is isomorphic, as a $G$-set, to the action on left cosets $G/H$ for a stabilizer $H$.
5. Give an action that is faithful but not free.

### Answers


3. The identity fixes 27 colorings; each nontrivial rotation fixes 3 constant colorings. Burnside gives $(27+3+3)/3=11$.
4. Choose $x$ and put $H=G_x$. If $gH=hH$, then $h^{-1}g\\in H$ and $g\\cdot x=h\\cdot x$; the converse follows by reversing this argument. Thus $gH\\mapsto g\\cdot x$ is a bijection onto the one orbit. For $k\\in G$, the image of $k(gH)=(kg)H$ is $(kg)\\cdot x=k\\cdot(g\\cdot x)$, proving equivariance.
5. $S_3$ acting on $\\{1,2,3\\}$ is faithful, but a transposition fixes one point, so it is not free.

## General necklaces: cycles control fixed colorings

Consider $n$ positions arranged on a circle and $q$ available colors, identifying rotations. A rotation by $k$ positions partitions the locations into

$$\\gcd(n,k)$$

cycles. A coloring is fixed precisely when it is constant on each cycle, so that rotation fixes $q^{\\gcd(n,k)}$ colorings. Burnside gives

$$
N(n,q)=\\frac1n\\sum_{k=0}^{n-1}q^{\\gcd(n,k)}
=\\frac1n\\sum_{d\\mid n}\\varphi(d)q^{n/d}.
$$

The second expression groups rotations by cycle structure; $\\varphi(d)$ counts the appropriate rotation steps of order $d$. For six binary positions,

$$
N(6,2)=\\frac{2^6+2^1+2^2+2^3+2^2+2^1}{6}=14.
$$

This formula counts colorings up to rotation. If reflections are also allowed, the acting group changes to the dihedral group and new fixed-point counts are required. If adjacent equal colors are forbidden, $q^{\\gcd(n,k)}$ is no longer the correct fixed count because the local restriction couples the cycles. Burnside supplies an averaging framework; it does not count the fixed sets for us.

### Exact-color inventories

Suppose a binary necklace must contain exactly three black beads among six positions. For a rotation by $k$, a fixed coloring is constant on each rotation cycle, so each chosen black cycle contributes its entire cycle length. The identity fixes $\\binom63=20$ such colorings. Rotations by one or five positions have one cycle of length six and fix none. Rotations by two or four have two cycles of length three and fix two colorings, one for each choice of black cycle. The half-turn has three cycles of length two and cannot produce an odd number of black beads. Therefore the orbit count is

$$\\frac{20+0+2+0+2+0}{6}=4.$$

The inventory restriction changes only the fixed-set calculation. This is often the cleanest way to adapt Burnside to constrained colorings.

## Conjugation and the class equation

Let $G$ act on itself by conjugation. The orbit of $x$ is its conjugacy class, and its stabilizer is the centralizer

$$C_G(x)=\\{g\\in G:gx=xg\\}.$$

Orbit-stabilizer gives

$$|\\operatorname{Cl}(x)|=[G:C_G(x)].$$

For $S_3$, the conjugacy classes are

$$\\{e\\},\\qquad\\{(12),(13),(23)\\},\\qquad\\{(123),(132)\\}.$$

Their sizes are $1,3,2$. The corresponding centralizer sizes are $6,2,3$. The class equation is therefore

$$6=1+3+2.$$

This partition contains structural information. The center consists precisely of one-element conjugacy classes, because $x$ is fixed by every conjugation exactly when it commutes with every group element. Thus the calculation also shows $Z(S_3)=\\{e\\}$.

In any finite group, choose one representative $x_i$ from each conjugacy class of size greater than one. The classes partition $G$, while the singleton classes are exactly the elements of $Z(G)$. Consequently the full **class equation** is

$$|G|=|Z(G)|+\\sum_i[G:C_G(x_i)].$$

The sum has one term per noncentral class, rather than one term per noncentral element. This is why it can expose divisibility that counting individual elements hides.

Let $p$ be prime and $n\\ge1$, and let $|G|=p^n$. Then, every conjugacy-class size divides $p^n$ and is therefore a power of $p$. Every noncentral class has size divisible by $p$. Reducing the class equation modulo $p$ shows

$$|Z(G)|\\equiv |G|\\equiv0\\pmod p.$$

Since the identity lies in the center, the center is nonempty, so its size is at least $p$. Every nontrivial finite $p$-group therefore has nontrivial center. This theorem is a striking example of a counting action forcing algebraic structure.

## Further practice with feedback

1. Count rotational necklaces with five positions and two colors.
2. Count rotational necklaces with four positions and three colors.
3. In the action of $S_4$ on $\\{1,2,3,4\\}$, find the stabilizer size of 1.
4. If a group of order 21 acts on a set and one orbit has size 7, what is the stabilizer size of a point in that orbit?
5. Explain why a group of order $p^2$ cannot have trivial center.

**Answers.** (1) Because 5 is prime, the identity fixes $2^5=32$ colorings and each of the four nonidentity rotations fixes two constant colorings. The count is $(32+4\\cdot2)/5=8$. (2) Fixed counts for rotations through $0,90,180,270$ degrees are $3^4,3,3^2,3$, giving $(81+3+9+3)/4=24$. (3) The orbit has size 4, so orbit-stabilizer gives $24/4=6$; these are permutations of the other three points. (4) It is $21/7=3$. (5) The conjugation class argument above shows the center's order is a positive multiple of $p$; it is therefore at least $p$.

If 1 produced $32/5$, the action was treated as free. If 2 used the same fixed count for every nonidentity rotation, inspect cycle structures: a half-turn has two cycles, while a quarter-turn has one.

## Transfer problems: use the structure, then count

**A. Exactly three black beads.** Among six positions, require exactly three black beads. Count necklaces and bracelets separately. Identify which part of the six-bead calculation changes.

*Hint.* A fixed coloring is constant on each cycle, but its black cycles must have total length three. For a reflection through opposite beads, select one singleton and one swapped pair; a reflection between beads has only pairs.

*Solution.* Rotational fixed counts for $k=0,1,2,3,4,5$ are $20,0,2,0,2,0$, totaling $24$, so there are $24/6=4$ necklaces. Each of three reflections through opposite beads fixes $2\\cdot2=4$ eligible colorings: choose one of the two singletons and one of the two pairs to be black. The other three reflections fix none, since three black beads cannot be a union of pairs. Burnside gives $(24+3\\cdot4)/12=3$ bracelets. Thus one pair of rotational orbits merges. The chiral words $001011$ and $110100$ above each have three black beads and witness that merge. The group and averaging formula stayed the same; the fixed-set counts acquired the weight restriction.

**B. A stronger $p^2$ consequence.** Prove that every group of order $p^2$, where $p$ is prime, is abelian. A statement that the center is merely nontrivial is insufficient.

*Hint.* The class equation gives $|Z(G)|\\ge p$. If $|Z(G)|=p$, then $G/Z(G)$ has order $p$ and is cyclic. What happens when a quotient by the center is cyclic?

*Solution.* Lagrange and the class equation leave $|Z(G)|=p$ or $p^2$. The latter makes $G$ abelian immediately. In the former case $G/Z(G)$ has prime order, so it is generated by one coset $aZ(G)$. Write any $x,y\\in G$ as $x=a^iz_1$ and $y=a^jz_2$ with $z_1,z_2\\in Z(G)$. Then $xy=a^{i+j}z_1z_2=a^{j+i}z_2z_1=yx$. Thus this case is abelian too. The transfer step is the cyclic-quotient argument; the class equation alone supplies only a nontrivial center.

## Where this leads

Group actions connect algebra to combinatorics, geometry, and number theory. Galois groups act on polynomial roots; matrix groups act on vector spaces; fundamental groups act on covering spaces. Representation theory replaces a set $X$ by a vector space and studies group elements as linear maps, allowing characters and eigenvalues to record symmetry quantitatively.
`;export{e as default};