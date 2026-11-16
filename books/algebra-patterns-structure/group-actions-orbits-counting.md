
# Group Actions, Orbits, Stabilizers, and Counting

A group becomes useful when it acts. Rotations move vertices, matrices move
vectors, relabelings move colorings, and a group moves its own subgroups by
conjugation. The group laws then force a coherent family of reversible moves.
The central idea of this chapter is that motion and symmetry are two sides of
one equation:

$\lvert\operatorname{Orb}(x)\rvert\,\lvert G_x\rvert=\lvert G\rvert$.

For counting up to symmetry, the same incidence set can instead be counted by
group elements. That second count yields Burnside's lemma: the number of
orbits is the average number of fixed objects.

[Permutations, Cayley's Theorem, and Presentations](permutations-cayley-presentations.md)
supplies the systematic cycle calculus, symmetric-group conventions, and
faithful regular representation used here. The other local prerequisites are
cosets, Lagrange's theorem, kernels, and the first isomorphism theorem.

## 1. Actions are compatible reversible moves

**Definition 8.1 (Left group action).**

Let $G$ be a group and $X$ a set. A **left action** of $G$ on $X$ is a rule

$G \times X \to  X$, $(g,x) \to  g \cdot x$,

such that, for all $g,h \in G$ and $x \in X$,

$e \cdot x=x$, and $(gh) \cdot x=g \cdot (h \cdot x)$.

The order in the second law matters: $h$ moves the point first, then $g$.
Each map $x \to  g \cdot x$ is automatically a bijection, with inverse
$x \to  g^{-1} \cdot x$. Thus a group cannot act by genuinely irreversible maps.

If $\operatorname{Sym}(X)$ is the group of all bijections $X\to X$, an action is equivalently a
homomorphism

$\rho:G\to \operatorname{Sym}(X)$, where $\rho(g)(x)=g \cdot x$.

Indeed, the action law says exactly $\rho(gh)=\rho(g) \circ \rho(h)$, and the
identity law says $\rho(e)=id_X$. Conversely, any such homomorphism defines an
action by evaluation. This equivalence is the representation principle behind
all group actions: abstract multiplication becomes composition of concrete
moves.

### Worked example: rotations of a square

**Worked example 8.2 (A regular rotation action).**

Let $G=C_4=\langle r\rangle$ act on the four vertices $X=\{0,1,2,3\}$ by

$r^k \cdot i=i+k \bmod 4$.

The identity rotation fixes every vertex, and adding exponents corresponds to
composing rotations, so this is an action. It is **transitive**: any vertex
can be moved to any other vertex. No nonidentity rotation fixes vertex $0$.

### Nonexample: translations restricted to an interval

The additive group $\mathbb{Z}$ does not act on $X=\{0,1,2\}$ by $n \cdot x=x+n$, because
the proposed output can leave $X$. Replacing ordinary addition by reduction
modulo three produces a valid action. Closure is part of the typing, not an
optional later check.

## 2. Orbits partition the set

For $x \in X$, its **orbit** is

$\operatorname{Orb}(x)=G \cdot x=\{g \cdot x:g \in G\}$.

Define $x\sim y$ when $y=g \cdot x$ for some $g \in G$. This is an equivalence
relation:

- reflexive because $x=e \cdot x$;
- symmetric because $y=g \cdot x$ implies $x=g^{-1} \cdot y$;
- transitive because $y=g \cdot x$ and $z=h \cdot y$ imply
  $z=(hg) \cdot x$.

Consequently the orbits are disjoint or equal and partition $X$. The orbit
space, written $X/G$ or sometimes $G\setminus X$ for a left action, is the set of
orbits. It is a set of equivalence classes; it need not inherit a group
operation.

An action is **transitive** if it has one nonempty orbit. It is **trivial** if
every element fixes every point. The empty set supports a unique action, but
transitivity conventions for it vary; here transitive actions are assumed
nonempty.

### Worked example: multiplication on residues

**Worked example 8.3 (Residue orbits and gcd).**

The unit group $U(8)=\{1,3,5,7\}$ acts on $\mathbb{Z}/8\mathbb{Z}$ by multiplication. Its orbits
are

$\{[0]\}$, $\{[4]\}$, $\{[2],[6]\}$, $\{[1],[3],[5],[7]\}$.

Why can an odd unit not move $[2]$ to $[1]$? Multiplication by a unit preserves
$\gcd(a,8)$. In this example the gcd with eight completely labels the orbit.

## 3. Stabilizers measure residual symmetry

For $x \in X$, the **stabilizer** of $x$ is

$G_x=\{g \in G:g \cdot x=x\}$.

It is a subgroup. The identity fixes $x$. If $g$ and $h$ fix $x$, then

$(gh^{-1}) \cdot x=g \cdot (h^{-1} \cdot x)=g \cdot x=x$,

because $h \cdot x=x$ also implies $h^{-1} \cdot x=x$. The one-step subgroup
criterion applies.

Stabilizers at points in the same orbit are conjugate. If $y=a \cdot x$, then

$G_y=aG_xa^{-1}$.

To prove it, $g$ fixes $y$ exactly when

$g \cdot (a \cdot x)=a \cdot x$,

which, after acting by $a^{-1}$, is equivalent to
$(a^{-1}ga) \cdot x=x$. Thus $a^{-1}ga \in G_x$.

The action's **kernel** is the subgroup fixing every point:

$\ker \rho=\{g:g \cdot x=x \text{ for every } x \in X\}=\bigcap_{x \in X} G_x$.

The action is **faithful** when this kernel is trivial. Faithful does not mean
free. An action is **free** when every point stabilizer is trivial. A free
action is faithful when $X$ is nonempty, but a faithful action may have some
nontrivial point stabilizers.

### Example: a faithful action that is not free

The symmetric group $S_3$ acts faithfully on $\{1,2,3\}$. No nonidentity
permutation fixes all three points. Yet the transposition $(2 3)$ fixes the
point $1$, so its stabilizer is nontrivial and the action is not free.

## 4. Orbit–stabilizer is a coset theorem

**Theorem 8.4 (Orbit–stabilizer bijection).**

Fix $x \in X$. Define

$\Phi:G/G_x \to  \operatorname{Orb}(x)$, $\Phi(gG_x)=g \cdot x$.

This map is well-defined: if $gG_x=hG_x$, then $h^{-1}g \in G_x$, so

$g \cdot x=h \cdot ((h^{-1}g) \cdot x)=h \cdot x$.

It is onto by the definition of the orbit. It is one-to-one because
$g \cdot x=h \cdot x$ implies $(h^{-1}g) \cdot x=x$, hence $gG_x=hG_x$.
Therefore there is a bijection

$G/G_x \leftrightarrow  \operatorname{Orb}(x)$.

This is the **orbit–stabilizer theorem**. If $G$ is finite,

$|\operatorname{Orb}(x)|=[G:G_x]=|G|/|G_x|$,

or equivalently

$|G|=|\operatorname{Orb}(x)| |G_x|$.

The theorem does not assert that $G/G_x$ is a quotient group: $G_x$ need not
be normal. It is a bijection of a coset set with an orbit.

### Worked geometry: cube vertices

**Worked example 8.5 (Cube motion and residual symmetry).**

The rotation group of a cube has order $24$ and acts transitively on its eight
vertices. A rotation fixing a selected vertex may rotate the three edges
leaving that vertex through $0$, $120$, or $240$ degrees, so the stabilizer
has order three. Orbit–stabilizer checks

$24=8 \times 3$.

Conversely, knowing transitivity and the stabilizer already proves the group
has 24 rotations, provided every rotation is counted exactly once.

## 5. Transitive actions are coset actions

Every subgroup $H\le G$ produces an action of $G$ on the left coset set $G/H$:

$g \cdot (aH)=(ga)H$.

Representative independence is immediate: if $aH=bH$, then
$(ga)H=(gb)H$. This action is transitive because $b a^{-1}$ sends $aH$ to
$bH$. The stabilizer of the point $H$ is exactly $H$.

Conversely, let $G$ act transitively on nonempty $X$ and choose $x \in X$.
Orbit–stabilizer gives a $G$-equivariant bijection

$G/G_x \to  X$, $gG_x \to  g \cdot x$.

Equivariance means it respects the action:

$\Phi(a \cdot gG_x)=\Phi(agG_x)=ag \cdot x=a \cdot \Phi(gG_x)$.

Thus transitive $G$-sets are, up to an action-preserving bijection, exactly
coset spaces. Choosing a different base point replaces the stabilizer by a
conjugate subgroup, explaining why conjugacy classes of subgroups classify
transitive actions up to isomorphism.

The kernel of the coset action is

$core_G(H)=\bigcap_{g \in G} gHg^{-1}$,

the largest normal subgroup of $G$ contained in $H$. Hence the coset action is
faithful exactly when $H$ has trivial core.

## 6. Conjugation turns group structure into an action

Every group acts on itself by conjugation:

$g \cdot x=gxg^{-1}$.

The action law follows from

$(gh)x(gh)^{-1}=g(hxh^{-1})g^{-1}$.

The orbit of $x$ is its **conjugacy class**, and its stabilizer is the
**centralizer**

$C_G(x)=\{g:gx=xg\}$.

Orbit–stabilizer gives

$|Cl(x)|=[G:C_G(x)]$

for finite $G$. An element has a one-point conjugacy class exactly when it is
central. [Conjugacy, the Class Equation, and p-Groups](conjugacy-class-equation-p-groups.md)
sums these orbit sizes and derives their structural consequences for finite
$p$-groups.

Groups also act on their subgroups by conjugation: $g \cdot H=gHg^{-1}$. The
stabilizer of $H$ is its normalizer

$N_G(H)=\{g:gHg^{-1}=H\}$.

Thus the number of conjugates of $H$ is $[G:N_G(H)]$. The subgroup is normal
exactly when this orbit has one point.

## 7. Counting orbits by fixed points

Suppose a finite group $G$ acts on a finite set $X$. For $g \in G$, write

$\operatorname{Fix}(g)=\{x \in X:g \cdot x=x\}$.

Consider the incidence set

$I=\{(g,x) \in G \times X:g \cdot x=x\}$.

Count it by group elements:

$|I|=\sum_{g \in G}|\operatorname{Fix}(g)|$.

Count it by points:

$|I|=\sum_{x \in X}|G_x|$.

On an orbit $O$, every point stabilizer has size $|G|/|O|$. Therefore that
orbit contributes

$|O| \times |G|/|O|=|G|$

to the second sum. If there are $|X/G|$ orbits, then

$|I|=|G| |X/G|$.

Equating the counts proves **Burnside's lemma** (also called the
Cauchy–Frobenius lemma):

$|X/G|=(1/|G|) \sum_{g \in G}|\operatorname{Fix}(g)|$.

Despite the word “lemma,” this is a complete orbit-counting theorem. It counts
equivalence classes, not the total number of objects. The average is always an
integer because the double-count proof identifies it with an orbit count.

### Worked count: four beads and two colors

Let the rotation group $C_4$ act on binary colorings of four positions. There
are $2^4=16$ labeled colorings.

- identity fixes all $16$;
- the 90-degree and 270-degree rotations each force all positions equal, so
  each fixes $2$;
- the 180-degree rotation has two position cycles, so it fixes $2^2=4$.

Burnside gives

$(16+2+4+2)/4=6$

rotation classes. These are binary necklaces of length four when reflections
are not identified.

## 8. Cycles control fixed colorings

Let a permutation $g$ of $n$ positions have $c(g)$ disjoint cycles, counting
fixed positions as one-cycles. A coloring with $q$ available colors is fixed
by $g$ exactly when it is constant on each cycle. Hence

$|\operatorname{Fix}(g)|=q^{c(g)}$.

This rule turns orbit counting into cycle bookkeeping. The coefficient $q$
counts choices per cycle, not per position.

### Worked count: colorings of a triangle up to all rigid symmetries

The dihedral group $D_3$ has six elements and acts on three vertices. For
$q$ colors:

- identity has three cycles and fixes $q^3$ colorings;
- two nontrivial rotations each have one cycle and fix $q$;
- three reflections each have two cycles and fix $q^2$.

The number of colorings up to rotations and reflections is

$(q^3+3q^2+2q)/6$.

For $q=2$, this is $4$: zero, one, two, or three vertices of the first color.

## 9. Product actions and invariants

If $G$ acts on $X$ and $Y$, it acts diagonally on $X \times Y$ by

$g \cdot (x,y)=(g \cdot x,g \cdot y)$.

The stabilizer of $(x,y)$ is $G_x \cap G_y$. Orbits need not be products
of separate orbits because the same group element must move both coordinates.

An **invariant** is a function $f:X\to Y$ into a set with trivial $G$-action
such that $f(g \cdot x)=f(x)$. It is constant on orbits and therefore factors
uniquely through the orbit map $X\to X/G$. An invariant can prove two objects
are in different orbits; unless it is complete, equal invariant values do not
prove the objects lie in the same orbit.

For example, relabeling a graph preserves its degree multiset. Different
degree multisets prove nonisomorphism, but equal degree multisets do not in
general prove graph isomorphism.

## 10. Common errors

- Checking only $(gh) \cdot x=g \cdot(h \cdot x)$ and forgetting $e \cdot x=x$ does
  not establish an action.
- A group element acts as a bijection; a many-to-one operation is not a group
  action on that set.
- Orbits are subsets of $X$; stabilizers are subgroups of $G$.
- Orbit–stabilizer identifies an orbit with a coset **set**. Normality is not
  automatic.
- Faithful means only the identity fixes every point; free means only the
  identity fixes any specified point.
- Burnside averages fixed-object counts over group elements. It does not
  average orbit sizes.
- When counting colorings, determine cycles of positions under each symmetry;
  do not count cycles of colors.
- Choosing a rotation group counts necklaces; including reflections changes
  the acting group and counts bracelets.

## 11. Chapter summary and retrieval prompts

An action is a homomorphism into a permutation group. Orbits partition the
acted-on set, while stabilizers record the symmetries left at a point.
Orbit–stabilizer is the bijection $G/G_x \to  G \cdot x$. Every transitive action
is a coset action. Conjugation produces centralizers, normalizers, and
conjugacy classes. Burnside's lemma counts orbits by averaging fixed points.

Retrieve:

1. How does an action become a homomorphism?
2. Why is $G_x$ a subgroup?
3. Which map proves orbit–stabilizer, and where is well-definedness used?
4. How do free and faithful actions differ?
5. What incidence set proves Burnside's lemma?
6. Why does a position permutation with $c$ cycles fix $q^c$ colorings?

## Exercises with full solutions

### ALG-CH08-E001 — Exercise 1: Checking a residue action

Let $\mathbb{Z}$ act on $\mathbb{Z}/7\mathbb{Z}$ by $n \cdot [x]=[x+2n]$. Prove this is an action and
decide whether it is transitive, faithful, or free.

<details>
<summary>Hint 1</summary>

Check identity and composition with residue addition.

</details>

<details>
<summary>Hint 2</summary>

Compute the kernel and individual stabilizers in Z, separately from transitivity.

</details>

#### ALG-CH08-E001 — Solution

<details>
<summary>Solution</summary>

The identity integer $0$ fixes every class. Also

$(m+n) \cdot [x]=[x+2m+2n]=m \cdot(n \cdot[x])$,

so this is an action. Since $2$ is a unit modulo seven, for any $[x],[y]$
there is an $n$ with $2n=[y-x]$; the action is transitive. The stabilizer of
every point is $7\mathbb{Z}$, not trivial, so the action is not free. The kernel is
also $7\mathbb{Z}$, so the action of the infinite group $\mathbb{Z}$ is not faithful. The
induced action of $\mathbb{Z}/7\mathbb{Z}$ would be free and faithful.


</details>

### ALG-CH08-E002 — Exercise 2: An affine nonaction

For a group $G$, consider $g \cdot x=gx$ on a subset $X \subseteq G$. State the
exact condition on $X$ for this to define the restricted left-multiplication
action of all of $G$.

<details>
<summary>Hint 1</summary>

Require every left multiplication to preserve X.

</details>

<details>
<summary>Hint 2</summary>

If X has one member, translating it by all G reaches all of G.

</details>

#### ALG-CH08-E002 — Solution

<details>
<summary>Solution</summary>

We need $gx \in X$ for every $g \in G,x \in X$. If $X$ is
nonempty, choose $x \in X$. Then every $y \in G$ equals $(yx^{-1})x$, so closure
forces $y \in X$; hence $X=G$. The empty set also admits the unique restricted
action. Thus the only possibilities are $X=\varnothing$ and $X=G$.


</details>

### ALG-CH08-E003 — Exercise 3: Orbits are equivalence classes

Prove directly that two orbits are either disjoint or equal.

<details>
<summary>Hint 1</summary>

Use a point in an intersection of two orbits.

</details>

<details>
<summary>Hint 2</summary>

Inverses and composition express each base point through the other.

</details>

#### ALG-CH08-E003 — Solution

<details>
<summary>Solution</summary>

Suppose $z \in \operatorname{Orb}(x) \cap \operatorname{Orb}(y)$. Then $z=g \cdot x$ and
$z=h \cdot y$. Hence $y=h^{-1}g \cdot x$, so $y \in \operatorname{Orb}(x)$. Acting further shows
every element of $\operatorname{Orb}(y)$ lies in $\operatorname{Orb}(x)$. Reversing the roles gives the
opposite containment, so the orbits are equal.


</details>

### ALG-CH08-E004 — Exercise 4: Stabilizers along an orbit

If $y=a \cdot x$, prove $G_y=aG_xa^{-1}$.

<details>
<summary>Hint 1</summary>

Conjugate a stabilizer element by a.

</details>

<details>
<summary>Hint 2</summary>

Apply a⁻¹ to a fixing equation for the reverse inclusion.

</details>

#### ALG-CH08-E004 — Solution

<details>
<summary>Solution</summary>

An element $g$ lies in $G_y$ exactly when
$g \cdot(a \cdot x)=a \cdot x$. Applying $a^{-1}$ on the left gives
$(a^{-1}ga) \cdot x=x$, so $a^{-1}ga \in G_x$. This is equivalent to
$g \in aG_xa^{-1}$.


</details>

### ALG-CH08-E005 — Exercise 5: A faithful but nonfree action

Verify that $S_3$ acting on $\{1,2,3\}$ is faithful but not free.

<details>
<summary>Hint 1</summary>

An element fixing all three points is identity.

</details>

<details>
<summary>Hint 2</summary>

A transposition fixing one point shows failure of freeness.

</details>

#### ALG-CH08-E005 — Solution

<details>
<summary>Solution</summary>

A permutation fixing all three points is the identity, so the
kernel is trivial and the action is faithful. The transposition $(2 3)$ is
nonidentity but fixes $1$, so $S_{3,1}$ is nontrivial and the action is not
free.


</details>

### ALG-CH08-E006 — Exercise 6: Free finite actions

If finite $G$ acts freely on finite $X$, prove $|G|$ divides $|X|$.

<details>
<summary>Hint 1</summary>

Apply orbit–stabilizer to a trivial stabilizer.

</details>

<details>
<summary>Hint 2</summary>

All orbit sizes equal the group order, then sum over the partition.

</details>

#### ALG-CH08-E006 — Solution

<details>
<summary>Solution</summary>

Every stabilizer is trivial. Orbit–stabilizer makes every orbit
have size $|G|$. Since $X$ is a disjoint union of orbits, its size is a sum of
copies of $|G|$, hence is divisible by $|G|$.


</details>

### ALG-CH08-E007 — Exercise 7: The orbit–stabilizer map

For fixed $x$, prove $gG_x \to  g \cdot x$ is injective.

<details>
<summary>Hint 1</summary>

Assume two cosets produce the same image.

</details>

<details>
<summary>Hint 2</summary>

Act by the inverse of one representative to obtain stabilizer membership.

</details>

#### ALG-CH08-E007 — Solution

<details>
<summary>Solution</summary>

If $g \cdot x=h \cdot x$, act by $h^{-1}$ to obtain
$(h^{-1}g) \cdot x=x$. Thus $h^{-1}g \in G_x$, which is exactly the left-coset
equality $gG_x=hG_x$.


</details>

### ALG-CH08-E008 — Exercise 8: A cube stabilizer

The rotational symmetry group of a cube acts transitively on its six faces.
If the group has order 24, determine the order of a face stabilizer and
describe its elements geometrically.

<details>
<summary>Hint 1</summary>

Divide group size by orbit size.

</details>

<details>
<summary>Hint 2</summary>

The face stabilizer consists of rotations around the axis through that face and its opposite.

</details>

#### ALG-CH08-E008 — Solution

<details>
<summary>Solution</summary>

Orbit–stabilizer gives $|G_F|=24/6=4$. These are rotations by
$0$, $90$, $180$, and $270$ degrees about the axis through the centers of the
chosen face and its opposite face.


</details>

### ALG-CH08-E009 — Exercise 9: Coset action kernel

For the action of $G$ on $G/H$, prove the kernel is
$\bigcap_{a \in G}aHa^{-1}$.

<details>
<summary>Hint 1</summary>

Fixing aH means a⁻¹ga belongs to H.

</details>

<details>
<summary>Hint 2</summary>

Intersect these conjugate-subgroup conditions over a.

</details>

#### ALG-CH08-E009 — Solution

<details>
<summary>Solution</summary>

An element $g$ lies in the kernel exactly when
$gaH=aH$ for every $a$. This equality is equivalent to
$a^{-1}ga \in H$, or $g \in aHa^{-1}$. Requiring it for every $a$ gives the
displayed intersection. The intersection is normal and is contained in $H$.


</details>

### ALG-CH08-E010 — Exercise 10: Transitive actions of a cyclic prime group

Let $C_p$ act transitively on a nonempty finite set $X$, where $p$ is prime.
What sizes can $X$ have?

<details>
<summary>Hint 1</summary>

An orbit size is an index of a subgroup of C_p.

</details>

<details>
<summary>Hint 2</summary>

Lagrange leaves only two possible sizes.

</details>

#### ALG-CH08-E010 — Solution

<details>
<summary>Solution</summary>

By orbit–stabilizer, $|X|=[C_p:(C_p)_x]$. The only subgroup
orders of $C_p$ are $1$ and $p$, so the index is respectively $p$ or $1$.
Thus $|X|$ is $1$ or $p$.


</details>

### ALG-CH08-E011 — Exercise 11: Conjugacy in $S_3$

Find the conjugacy class and centralizer size of $(1 2)$ in $S_3$.

<details>
<summary>Hint 1</summary>

Conjugation relabels the transposition support.

</details>

<details>
<summary>Hint 2</summary>

Use class size to recover the centralizer size.

</details>

#### ALG-CH08-E011 — Solution

<details>
<summary>Solution</summary>

Conjugation relabels the moved points, so the class consists of
the three transpositions. Orbit–stabilizer gives centralizer size $6/3=2$.
Indeed the centralizer is $\{e,(1 2)\}$.


</details>

### ALG-CH08-E012 — Exercise 12: Number of conjugate subgroups

If $H\le G$ and $G$ is finite, prove the number of conjugates of $H$ is
$[G:N_G(H)]$.

<details>
<summary>Hint 1</summary>

Use conjugation on subgroups.

</details>

<details>
<summary>Hint 2</summary>

The stabilizer of H is its normalizer.

</details>

#### ALG-CH08-E012 — Solution

<details>
<summary>Solution</summary>

Let $G$ act on its subgroups by conjugation. The orbit of $H$ is
the set of its conjugates, and its stabilizer is by definition
$N_G(H)=\{g:gHg^{-1}=H\}$. Orbit–stabilizer gives the formula.


</details>

### ALG-CH08-E013 — Exercise 13: Burnside for a two-point flip

Let $C_2$ swap two positions colored from $q$ colors. Count colorings up to
the swap.

<details>
<summary>Hint 1</summary>

Count identity-fixed colorings and swap-fixed colorings.

</details>

<details>
<summary>Hint 2</summary>

The swap forces both positions to share a color.

</details>

#### ALG-CH08-E013 — Solution

<details>
<summary>Solution</summary>

The identity fixes all $q^2$ labeled colorings. The swap fixes
exactly the $q$ monochromatic colorings. Burnside gives
$(q^2+q)/2$, the number of unordered pairs of colors with repetition.


</details>

### ALG-CH08-E014 — Exercise 14: Five-bead binary necklaces

Count binary colorings of five cyclic positions up to rotation.

<details>
<summary>Hint 1</summary>

Each nonidentity rotation of five positions is a five-cycle.

</details>

<details>
<summary>Hint 2</summary>

Average its fixed count with identity's count.

</details>

#### ALG-CH08-E014 — Solution

<details>
<summary>Solution</summary>

The identity fixes $2^5=32$ colorings. Because five is prime,
each of the four nonidentity rotations is a single five-cycle and fixes only
the two constant colorings. Burnside gives
$(32+4 \times 2)/5=8$ necklaces.


</details>

### ALG-CH08-E015 — Exercise 15: Six-bead colorings under half-turn

Let $C_2$ act on six positions by a 180-degree rotation pairing opposite
positions. Count $q$-colorings up to this action.

<details>
<summary>Hint 1</summary>

Find the three position pairs under the half-turn.

</details>

<details>
<summary>Hint 2</summary>

Choose one color independently for each pair.

</details>

#### ALG-CH08-E015 — Solution

<details>
<summary>Solution</summary>

The identity fixes $q^6$ colorings. The half-turn has three
two-cycles, so a fixed coloring chooses one color per pair and there are
$q^3$. Burnside gives $(q^6+q^3)/2$ orbits.


</details>

### ALG-CH08-E016 — Exercise 16: Triangle bracelets with three colors

Use the full dihedral group to count colorings of a triangle's vertices from
three colors, allowing colors to repeat.

<details>
<summary>Hint 1</summary>

Separate identity, rotations, and reflections of the triangle.

</details>

<details>
<summary>Hint 2</summary>

Count one independent color per position cycle before averaging.

</details>

#### ALG-CH08-E016 — Solution

<details>
<summary>Solution</summary>

From the chapter's cycle count, the answer is
$(q^3+3q^2+2q)/6$. Substituting $q=3$ gives
$(27+27+6)/6=10$ bracelets.


</details>

### ALG-CH08-E017 — Exercise 17: Diagonal stabilizers

For diagonal action on $X \times Y$, prove
$G_{x,y}=G_x \cap G_y$.

<details>
<summary>Hint 1</summary>

An element fixes the pair exactly when it fixes both coordinates.

</details>

<details>
<summary>Hint 2</summary>

Translate the two conditions into intersection membership.

</details>

#### ALG-CH08-E017 — Solution

<details>
<summary>Solution</summary>

An element $g$ fixes $(x,y)$ exactly when
$(g \cdot x,g \cdot y)=(x,y)$, which holds exactly when $g$ fixes both $x$ and
$y$. This is membership in the intersection of their stabilizers.


</details>

### ALG-CH08-E018 — Exercise 18: An incomplete invariant

Show that the number of fixed points of a permutation is invariant under
conjugation in $S_n$, but explain why it is not a complete invariant when
$n\ge 4$.

<details>
<summary>Hint 1</summary>

Relabelling transports fixed points bijectively.

</details>

<details>
<summary>Hint 2</summary>

Two different fixed-point-free cycle types on four points demonstrate incompleteness.

</details>

#### ALG-CH08-E018 — Solution

<details>
<summary>Solution</summary>

Conjugation relabels points: if $\sigma(i)=i$, then
$(\tau \sigma \tau^{-1})(\tau(i))=\tau(i)$, giving a bijection between fixed-point
sets. For $n=4$, the permutations $(1 2)(3 4)$ and $(1 2 3 4)$ both have zero
fixed points but have different cycle types and different orders, so they are
not conjugate. Thus equal invariant values need not imply equal orbits.


</details>

### ALG-CH08-E019 — Exercise 19: Burnside's integrality

Without appealing merely to the statement of Burnside's lemma, prove
$\sum_g |\operatorname{Fix}(g)|$ is divisible by $|G|$.

<details>
<summary>Hint 1</summary>

Count incidence pairs by points and group their stabilizers by orbit.

</details>

<details>
<summary>Hint 2</summary>

Every orbit contributes exactly |G| to the sum.

</details>

#### ALG-CH08-E019 — Solution

<details>
<summary>Solution</summary>

Count pairs $(g,x)$ with $g \cdot x=x$ by points. Each orbit $O$
contributes $\sum_{x \in O}|G_x|$. Stabilizers in $O$ have size
$|G|/|O|$, so this contribution is $|O|(|G|/|O|)=|G|$. Summing over orbits
is therefore a multiple of $|G|$. Counting the same pairs by $g$ gives the
stated sum.


</details>

### ALG-CH08-E020 — Exercise 20: Action-preserving maps

Suppose $f:X\to Y$ satisfies $f(g \cdot x)=g \cdot f(x)$ for all $g,x$. Prove that
$f$ sends each orbit in $X$ into one orbit in $Y$, and prove
$G_x\le G_{f(x)}$.

<details>
<summary>Hint 1</summary>

Apply equivariance to every translate of x.

</details>

<details>
<summary>Hint 2</summary>

An element fixing x must also fix its image.

</details>

#### ALG-CH08-E020 — Solution

<details>
<summary>Solution</summary>

If $x'=g \cdot x$, then
$f(x')=f(g \cdot x)=g \cdot f(x)$, so the two images lie in the same orbit. If
$h \in G_x$, then $h \cdot x=x$; equivariance gives
$h \cdot f(x)=f(h \cdot x)=f(x)$, so $h \in G_{f(x)}$. Equality of stabilizers need
not hold if $f$ collapses information.


</details>

## ALG-CH08-P001 — Project: necklaces, bracelets, and the acting group

For six beads colored black or white, count equivalence classes under (a)
rotations and (b) rotations plus reflections. Build a table with one row for
each symmetry type, its number of elements, its cycle structure on positions,
and its number of fixed colorings. Explain why the two answers differ and
verify both by listing representatives grouped by number of black beads.

### Deliverables

Give a fixed-coloring table by symmetry type, a representative and orbit size for every rotational class, the bracelet classes by black-bead count, and a check that the rotational orbits contain all 64 labeled strings. Name the acting group for each identification.

### Solution framework and rubric

For $C_6$, rotations by $k$ positions have
$\gcd(6,k)$ cycles, hence fix $2^{\gcd(6,k)}$ colorings. The sum is

$64+2+4+8+4+2=84$,

so there are $84/6=14$ necklaces. For $D_6$, add three reflections through
opposite vertices, each with four cycles and $16$ fixed colorings, and three
through opposite edges, each with three cycles and $8$ fixed colorings. The
new fixed-count sum is $84+3(16)+3(8)=156$, giving $156/12=13$ bracelets.
The single merger occurs because a chiral pair of rotational classes becomes
equivalent after reflections are allowed. A complete representative audit
should total 64 labeled strings before quotienting and should not identify a
reflection unless it belongs to the declared acting group. The complete table is: identity, one element of cycle type $1^6$ fixing 64 strings; rotations by one or five, two elements of type $6$ fixing 2 each; rotations by two or four, two elements of type $3^2$ fixing 4 each; rotation by three, one element of type $2^3$ fixing 8; three vertex-axis reflections of type $1^2 2^2$ fixing 16 each; three edge-axis reflections of type $2^3$ fixing 8 each.

Using $1$ for black, rotational representatives grouped by black-bead count, with orbit sizes in parentheses, are: 0: `000000` (1); 1: `000001` (6); 2: `000011` (6), `000101` (6), `001001` (3); 3: `000111` (6), `001011` (6), `001101` (6), `010101` (2); 4: `001111` (6), `010111` (6), `011011` (3); 5: `011111` (6); 6: `111111` (1). The sizes sum to 64. Reflection exchanges the two six-string rotational classes represented by `001011` and `001101`; all other classes remain individual bracelet classes. Thus the bracelet distribution is $1,1,3,3,3,1,1$ by black-bead count. Rotation classes use $C_6$; the one extra merger is licensed only by $D_6$.

## Summary

An action turns group multiplication into reversible motion. Orbits partition objects, stabilizers retain their residual symmetries, and orbit–stabilizer identifies each orbit with a coset set. Double counting fixed-point incidences yields Burnside's orbit formula. Conjugation next applies this machinery to the internal structure of finite groups.
