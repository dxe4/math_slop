
# Groups, Subgroups, and Generated Structure

A group is the algebra of reversible composition. Integers can be undone by adding negatives, nonzero scalars by multiplying reciprocals, and symmetries by applying inverse motions. The objects differ, but associativity, identity, and inverses force the same equations in every case.

This chapter develops those consequences directly from the axioms and introduces subgroups as self-contained subsystems. The local prerequisite is [Operations, Structures, and Structure-Preserving Maps](operations-structures-homomorphisms.md).

Unless an operation is written additively, groups use multiplicative notation: the operation is juxtaposition, the identity is $e$, and the inverse of $g$ is $g^{-1}$. Multiplication need not mean numerical multiplication and need not commute.

## 1. The group contract

**Definition 2.1 (Group).**

A **group** is a set $G$ with a binary operation satisfying:

1. **associativity:** $(ab)c=a(bc)$ for all $a,b,c \in G$;
2. **identity:** some $e \in G$ satisfies $eg=g=ge$ for every $g$;
3. **inverses:** for every $g$, some $g^{-1}$ satisfies $gg^{-1}=e=g^{-1}g$.

Closure is already included in the phrase “binary operation on $G$.” If $ab=ba$ for every pair, the group is **abelian**.

The axioms say nothing about order, distance, size, continuity, or coordinates. They guarantee that finite products can be reassociated, that equations can be cancelled, and that every left or right multiplication is reversible.

### Basic examples

- $(\mathbb{Z},+)$ is abelian; its identity is $0$ and the inverse of $n$ is $-n$.
- $(\mathbb{Z}/n\mathbb{Z},+)$ is a finite abelian group.
- The nonzero elements of $\mathbb Q$, $\mathbb R$, or $\mathbb C$ form an abelian group under multiplication.
- Invertible $n$ by $n$ matrices over a field form $GL_n(F)$ under multiplication, generally nonabelian for $n\ge 2$.
- Bijections of a set $X$ form the symmetric group $\operatorname{Sym}(X)$ under composition.
- Symmetries of a geometric object form a group under composition.

### Nonexamples

- Natural numbers under addition lack additive inverses.
- Nonzero integers under multiplication lack most multiplicative inverses.
- All square matrices form a monoid, not a group, because singular matrices are not invertible.
- Integers under subtraction fail associativity and have no two-sided identity.

Naming the failed axiom is more informative than saying “not a group.”

## 2. Consequences of the axioms

Identity and inverses are unique, as proved in Chapter 1. Several other familiar rules require proof because commutativity is unavailable.

### Cancellation

If $ax=ay$, multiply on the left by $a^{-1}$:

$a^{-1}(ax)=a^{-1}(ay)$.

Associativity gives $(a^{-1}a)x=(a^{-1}a)y$, hence $x=y$. This is **left cancellation**. Similarly, $xa=ya$ implies $x=y$ by multiplying on the right.

The side matters. From $ax=b$, multiply on the left to get $x=a^{-1}b$. From $xa=b$, multiply on the right to get $x=ba^{-1}$. These expressions need not agree.

### Inverse of a product

For $a,b \in G$,

$(ab)^{-1}=b^{-1}a^{-1}$.

Indeed,

$(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=e$,

and the reverse product is also $e$. Inversion reverses order because undoing “first $b$, then $a$” requires undoing $a$ before $b$, depending on the composition convention.

For a longer product,

$(a_1a_2...a_k)^{-1}=a_k^{-1}...a_2^{-1}a_1^{-1}$.

### Equations have unique solutions

The equation $ax=b$ has the unique solution $x=a^{-1}b$; the equation $ya=b$ has the unique solution $y=ba^{-1}$. Existence comes from substitution, and uniqueness from cancellation.

This implies every row and column of a finite group table contains each group element exactly once. In row $a$, the map $x \to  ax$ is bijective, so no output repeats and every output occurs.

## 3. Powers and integer exponents

For $g \in G$, define

$g^0=e$, $g^n=g...g$ for positive $n$, and $g^{-n}=(g^{-1})^n$.

Associativity makes repeated products unambiguous. For all integers $m,n$,

$g^m g^n=g^{m+n}$ and $(g^m)^n=g^{mn}$.

These laws concern powers of one element. The identity

$(ab)^n=a^n b^n$

need not hold when $a$ and $b$ do not commute. For $n=2$, it would claim $abab=aabb$, which cancellation reduces to $ba=ab$.

### Worked noncommutative example

**Worked example 2.2 (Square symmetries remember order).**

Let $r$ rotate a square by $90$ degrees and let $s$ reflect across a vertical axis. Applying the reflection and rotation in opposite orders gives reflections across different diagonal axes, so $rs\ne sr$. The relation is

$srs=r^{-1}$,

equivalently $sr=r^{-1}s$. The square's eight symmetries form the dihedral group $D_4$ under composition.

This example will reappear when we discuss subgroups, cosets, and normality.

## 4. Subgroups are groups inside groups

A subset $H$ of a group $G$ is a **subgroup**, written $H\le G$, when the operation inherited from $G$ makes $H$ a group.

Associativity is inherited, so we need not reprove it. The standard test is:

**Theorem 2.3 (One-step subgroup criterion).**

**Subgroup criterion.** A nonempty subset $H$ of $G$ is a subgroup exactly when

$xy^{-1} \in H$

for every $x,y \in H$.

If $H$ is a subgroup, closure and inverses make the condition immediate. Conversely, choose $h \in H$. Taking $x=y=h$ gives $e=hh^{-1} \in H$. Taking $x=e,y=h$ gives $h^{-1} \in H$. Then for $x,z \in H$, use $y=z^{-1}$ to obtain $xz=x(z^{-1})^{-1} \in H$. Thus identity, inverses, and closure all hold.

An equivalent two-step test checks that $xy \in H$ and $x^{-1} \in H$ for all members, together with nonemptiness.

### Finite subgroup shortcut

If $H$ is a nonempty finite subset of $G$ closed under multiplication, then $H$ is a subgroup. For $h \in H$, the sequence

$h,h^2,h^3,...$

must repeat. If $h^i=h^j$ with $i<j$, cancellation gives $e=h^{j-i}$, so a positive power is the identity and the preceding power is $h^{-1}$. Thus inverses lie in $H$.

Finiteness is essential. The nonnegative integers are a nonempty subset of $(\mathbb{Z},+)$ closed under addition but not under additive inverses.

## 5. Core subgroup examples

### Multiples in the integers

**Worked example 2.4 (Integer subgroups).**

For an integer $n$,

$n\mathbb{Z}=\{nk:k \in \mathbb{Z}\}$

is a subgroup of $(\mathbb{Z},+)$. It contains zero. If $na,nb$ are in it, then

$na-(nb)=n(a-b)$

also lies in it, so the additive form of the subgroup criterion applies.

Every subgroup of $(\mathbb{Z},+)$ is of this form. If $H$ is nonzero, let $n$ be its least positive element. Divide any $h \in H$ by $n$: $h=qn+r$ with $0\le r<n$. Since $r=h-qn$ lies in $H$, minimality forces $r=0$. Thus every member is a multiple of $n$, and $H=n\mathbb{Z}$. The zero subgroup is $0\mathbb{Z}$.

### Roots of unity

The complex numbers satisfying $z^n=1$ form a subgroup of $\mathbb C^{\times}$. The product of two such numbers has $n$th power $1$; the inverse $z^{-1}$ also has $n$th power $1$. Geometrically these are equally spaced rotations of the unit circle.

### Matrix subgroups

**Worked example 2.5 (Determinant-one closure).**

The determinant-one matrices form $SL_n(F)\le GL_n(F)$ because

$\det(AB)=\det A\det B=1$

and $\det(A^{-1})=(\det A)^{-1}=1$. Symmetric invertible matrices do **not** generally form a subgroup: the product of symmetric matrices is symmetric exactly when they commute.

### Permutation subgroups

For a subset or structure on $X$, the permutations preserving it form a subgroup of $\operatorname{Sym}(X)$: composition preserves the structure, the identity does, and preservation of a relation in both directions (or setwise equality for a distinguished subset) ensures its inverse also preserves it. Geometry, graphs, codes, equations, and combinatorial designs all produce groups this way.

## 6. Intersections and generated subgroups

The intersection of any nonempty family of subgroups of $G$ is a subgroup. It contains $e$; if $x,y$ lie in every subgroup, then $xy^{-1}$ lies in every subgroup and hence in the intersection.

For a subset $S$ of $G$, the **subgroup generated by $S$**, written $\langle S\rangle$, is the intersection of all subgroups containing $S$. It is the smallest subgroup containing $S$.

Concretely, $\langle S\rangle$ consists of all finite words

$s_1^{\epsilon_1}...s_k^{\epsilon_k}$

where $s_j \in S$ and each $\epsilon_j$ is $1$ or $-1$, together with the empty word $e$. Repetitions are allowed. In a nonabelian group, word order matters.

For one element, $\langle g\rangle=\{g^n:n \in \mathbb{Z}\}$. This is a **cyclic subgroup**, developed fully in Chapter 3.

### Union failure

The union of two subgroups is a subgroup exactly when one contains the other. If neither contains the other, choose $h \in H\setminus K$ and $k \in K\setminus H$. If $H \cup K$ were a subgroup, $hk$ would lie in one of them. If $hk \in H$, then $k=h^{-1}(hk) \in H$, contradiction. If $hk \in K$, then $h=(hk)k^{-1} \in K$, contradiction.

Generated subgroups repair the union: $\langle H \cup K\rangle$ is the smallest subgroup containing both, though it need not equal the simple set product $HK=\{hk\}$ unless additional conditions hold.

## 7. Centralizers and the center

For $a \in G$, the **centralizer** of $a$ is

$C_G(a)=\{g \in G:ga=ag\}$.

It is a subgroup. The identity commutes with $a$. If $x,y$ commute with $a$, then

$(xy^{-1})a=x(y^{-1}a)=x(ay^{-1})=(xa)y^{-1}=(ax)y^{-1}=a(xy^{-1})$.

The **center** is

$Z(G)=\{g \in G:gx=xg \text{ for every } x \in G\}$.

It is the intersection of all centralizers, hence a subgroup. The group is abelian exactly when $Z(G)=G$.

The center separates “commutes with one chosen element” from “commutes with everything.” In $D_4$, the half-turn $r^2$ commutes with every symmetry, while a reflection does not commute with a quarter-turn.

## 8. Subgroup proofs as invariant proofs

Many subgroups are defined by preserving a quantity or satisfying an equation.

- A kernel is the set sent to an identity.
- A stabilizer is the set fixing an object.
- A determinant-one group preserves oriented volume.
- Orthogonal matrices preserve an inner product.
- Automorphisms preserve all declared operations of a structure.

The reliable proof template is:

1. show the identity satisfies the condition;
2. show composing two satisfying elements preserves it;
3. show undoing a satisfying element preserves it.

The one-step criterion can combine Steps 2 and 3, but the invariant interpretation often makes the separate checks clearer.

### Worked stabilizer

**Worked example 2.6 (A point-fixing subsystem).**

Let a group $G$ act by permutations on a set $X$, and fix $x \in X$. Define

$G_x=\{g \in G:g(x)=x\}$.

The identity fixes $x$. If $g,h$ fix $x$, then $(gh)(x)=g(h(x))=g(x)=x$. If $g(x)=x$, applying $g^{-1}$ gives $g^{-1}(x)=x$. Thus $G_x$ is a subgroup, called the stabilizer of $x$.

Group actions are treated systematically later; this proof already displays the subgroup pattern.

## 9. Common errors

### Treating the operation as commutative

Never swap factors unless commutativity or a specific commuting relation has been established. $a^{-1}b$ solves $ax=b$; $ba^{-1}$ solves $xa=b$.

### Proving only closure

An infinite nonempty subset closed under the operation may omit inverses. Use the full subgroup criterion unless the finite shortcut applies.

### Assuming the identity must be listed separately

A nonempty subset closed under $xy^{-1}$ automatically contains the identity. Show the step instead of adding an unnecessary hypothesis.

### Confusing generated set with generated subgroup

$S$ need not be closed. $\langle S\rangle$ includes every finite product of elements and inverses needed to force subgroup structure.

### Reading a table locally for associativity

Identity, inverse, and commutativity patterns are visible, but associativity concerns triples. Exhaust all triples or derive the table from a known associative operation.

## 10. Chapter summary and retrieval prompts

Groups encode reversible associative composition. Cancellation, unique solutions, product-inverse reversal, and exponent laws follow from the axioms. A subgroup is a nonempty subset closed under $xy^{-1}$. Intersections are subgroups; unions usually are not. Generated subgroups force closure, inverses, and finite products. Centralizers and centers measure commutation.

Retrieve:

1. Why is closure already part of the group definition?
2. Which side should multiply the equation $xa=b$?
3. Why does the finite closure shortcut fail for nonnegative integers?
4. What finite words belong to $\langle S\rangle$?
5. How does a centralizer differ from the center?

## Exercises with full solutions

### ALG-CH02-E001 — Exercise 1: Identify failed axioms

For each structure, identify why it is not a group: (a) positive integers under addition; (b) all real numbers under multiplication; (c) integers under subtraction.

<details>
<summary>Hint 1</summary>

Test the axioms separately for each structure.

</details>

<details>
<summary>Hint 2</summary>

Look for missing inverses, a zero obstruction, and a failure of associativity respectively.

</details>

#### ALG-CH02-E001 — Solution

<details>
<summary>Solution</summary>

(a) Additive inverses are absent. (b) Zero has no multiplicative inverse. (c) Subtraction is not associative and has no two-sided identity.


</details>

### ALG-CH02-E002 — Exercise 2: Solve equations without commuting

In a group, solve $axb=c$ for $x$.

<details>
<summary>Hint 1</summary>

Undo the left factor on the left and the right factor on the right.

</details>

<details>
<summary>Hint 2</summary>

Substitute your ordered expression into the original equation.

</details>

#### ALG-CH02-E002 — Solution

<details>
<summary>Solution</summary>

Multiply by $a^{-1}$ on the left and $b^{-1}$ on the right:

$x=a^{-1}cb^{-1}$.

Substitution gives $a(a^{-1}cb^{-1})b=c$. Factor order is essential.


</details>

### ALG-CH02-E003 — Exercise 3: Inverse of three factors

Prove $(abc)^{-1}=c^{-1}b^{-1}a^{-1}$.

<details>
<summary>Hint 1</summary>

Multiply by the proposed reversed inverse product.

</details>

<details>
<summary>Hint 2</summary>

Verify both multiplication orders using adjacent inverse pairs.

</details>

#### ALG-CH02-E003 — Solution

<details>
<summary>Solution</summary>

Multiply:

$(abc)(c^{-1}b^{-1}a^{-1})=ab(cc^{-1})b^{-1}a^{-1}=a(bb^{-1})a^{-1}=e$.

The reverse product similarly equals $e$, so uniqueness of inverse proves the formula.


</details>

### ALG-CH02-E004 — Exercise 4: When powers distribute

Prove $(ab)^2=a^2b^2$ exactly when $ab=ba$.

<details>
<summary>Hint 1</summary>

Expand the squares without swapping factors.

</details>

<details>
<summary>Hint 2</summary>

Cancel on appropriate sides to isolate a commutation equation.

</details>

#### ALG-CH02-E004 — Solution

<details>
<summary>Solution</summary>

If the elements commute, $abab=aabb$. Conversely, if $abab=aabb$, cancel $a$ on the left to get $bab=abb$, then cancel $b$ on the right to obtain $ba=ab$.


</details>

### ALG-CH02-E005 — Exercise 5: A subgroup of integers

Prove $6\mathbb{Z} \cap 15\mathbb{Z}=30\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

Intersection membership means simultaneous divisibility.

</details>

<details>
<summary>Hint 2</summary>

Compare common multiples with the least common multiple.

</details>

#### ALG-CH02-E005 — Solution

<details>
<summary>Solution</summary>

An integer lies in both sets exactly when it is divisible by both $6$ and $15$, equivalently by their least common multiple $30$. Thus the sets are equal. Each is a subgroup of $(\mathbb{Z},+)$.


</details>

### ALG-CH02-E006 — Exercise 6: Classify a subgroup

Let $H$ be the subgroup of $\mathbb{Z}$ generated by $18$ and $30$. Determine $H$.

<details>
<summary>Hint 1</summary>

Every generated integer is an integer combination of the two generators.

</details>

<details>
<summary>Hint 2</summary>

Find a positive gcd combination and prove all other combinations are its multiples.

</details>

#### ALG-CH02-E006 — Solution

<details>
<summary>Solution</summary>

Every integer combination $18a+30b$ is divisible by $\gcd(18,30)=6$, so $H \subseteq 6\mathbb{Z}$. Bézout gives $6=2(18)-1(30)$, so $6 \in H$, and all multiples of $6$ lie in $H$. Hence $H=6\mathbb{Z}$.


</details>

### ALG-CH02-E007 — Exercise 7: Roots of unity

List the fourth roots of unity and verify they form a group under multiplication.

<details>
<summary>Hint 1</summary>

Use arguments in multiples of a quarter-turn.

</details>

<details>
<summary>Hint 2</summary>

Multiplication and inverses add or negate those arguments modulo a full turn.

</details>

#### ALG-CH02-E007 — Solution

<details>
<summary>Solution</summary>

They are $\{1,i,-1,-i\}$. Products remain fourth roots because $(zw)^4=z^4w^4=1$; the identity is $1$; the inverse of $z$ is $z^{-1}=z^3$, also in the set. Associativity comes from complex multiplication.


</details>

### ALG-CH02-E008 — Exercise 8: A matrix subgroup

Show upper-triangular invertible $2$ by $2$ real matrices form a subgroup of $GL_2(\mathbb R)$.

<details>
<summary>Hint 1</summary>

Write an upper triangular matrix with both diagonal entries nonzero.

</details>

<details>
<summary>Hint 2</summary>

Calculate its inverse and the product of two such matrices.

</details>

#### ALG-CH02-E008 — Solution

<details>
<summary>Solution</summary>

The identity is upper triangular. A product of upper-triangular matrices is upper triangular and invertible. The inverse of $[[a,b],[0,d]]$, with $a,d$ nonzero, is $[[1/a,-b/(ad)],[0,1/d]]$, again upper triangular. Thus the subset is a subgroup.


</details>

### ALG-CH02-E009 — Exercise 9: Symmetric matrices fail

Give two invertible symmetric matrices whose product is not symmetric.

<details>
<summary>Hint 1</summary>

Choose a nonscalar diagonal matrix and a symmetric off-diagonal matrix.

</details>

<details>
<summary>Hint 2</summary>

Their product can differ from its transpose, which reverses the factor order.

</details>

#### ALG-CH02-E009 — Solution

<details>
<summary>Solution</summary>

Take

$A=[[1,1],[1,0]]$, $B=[[1,0],[0,2]]$.

Both are symmetric and invertible. But $AB=[[1,2],[1,0]]$, which is not symmetric. Thus invertible symmetric matrices are not closed under multiplication.


</details>

### ALG-CH02-E010 — Exercise 10: A permutation subgroup

In cycle notation, $(123)$ sends $1\mapsto2$, $2\mapsto3$, and $3\mapsto1$; a permutation product acts right to left. In $S_3$, show $\{e,(123),(132)\}$ is a subgroup.

<details>
<summary>Hint 1</summary>

Use the successive powers of the three-cycle.

</details>

<details>
<summary>Hint 2</summary>

Its cube is identity and its inverse is its square.

</details>

#### ALG-CH02-E010 — Solution

<details>
<summary>Solution</summary>

Let $r=(123)$. Then $r^2=(132)$ and $r^3=e$. The set is $\langle r\rangle=\{e,r,r^2\}$, so products and inverses remain in it. Hence it is a subgroup.


</details>

### ALG-CH02-E011 — Exercise 11: Finite closure shortcut

Prove a nonempty finite subset $H$ closed under multiplication contains the ambient identity.

<details>
<summary>Hint 1</summary>

Fix h in the finite subset and compare positive powers.

</details>

<details>
<summary>Hint 2</summary>

Repetition followed by cancellation gives a positive identity power.

</details>

#### ALG-CH02-E011 — Solution

<details>
<summary>Solution</summary>

Choose $h \in H$. The finite sequence $h,h^2,...$ repeats: $h^i=h^j$ for some $i<j$. Cancellation gives $e=h^{j-i}$. Closure places this positive power in $H$, so $e \in H$.


</details>

### ALG-CH02-E012 — Exercise 12: Intersections

Prove the intersection of an arbitrary nonempty family of subgroups is a subgroup.

<details>
<summary>Hint 1</summary>

The identity lies in every subgroup in the family.

</details>

<details>
<summary>Hint 2</summary>

Apply closure under xy⁻¹ in every member simultaneously.

</details>

#### ALG-CH02-E012 — Solution

<details>
<summary>Solution</summary>

Every subgroup contains $e$, so the intersection is nonempty. If $x,y$ lie in the intersection, they lie in each subgroup; each contains $xy^{-1}$, so this element lies in the intersection. The subgroup criterion applies.


</details>

### ALG-CH02-E013 — Exercise 13: Union criterion

Prove $H \cup K$ is a subgroup iff $H \subseteq K$ or $K \subseteq H$.

<details>
<summary>Hint 1</summary>

If neither inclusion holds, choose an element exclusive to each subgroup.

</details>

<details>
<summary>Hint 2</summary>

Their product cannot lie in either subgroup without a contradiction.

</details>

#### ALG-CH02-E013 — Solution

<details>
<summary>Solution</summary>

If one contains the other, the union is the larger subgroup. Conversely, if neither containment holds, choose $h \in H\setminus K$ and $k \in K\setminus H$. Closure of the union would place $hk$ in $H$ or $K$; multiplying by inverses then puts $k$ in $H$ or $h$ in $K$, contradiction.


</details>

### ALG-CH02-E014 — Exercise 14: Generated words

In an abelian group, show $\langle a,b\rangle=\{a^m b^n:m,n \in \mathbb{Z}\}$.

<details>
<summary>Hint 1</summary>

Commute powers to collect a general word.

</details>

<details>
<summary>Hint 2</summary>

Check that the displayed set is itself a subgroup containing both generators.

</details>

#### ALG-CH02-E014 — Solution

<details>
<summary>Solution</summary>

The displayed set contains $a,b$, the identity, products, and inverses, so it is a subgroup containing them. Conversely, every word in $a^{\pm 1},b^{\pm 1}$ can be reordered by commutativity and collected as $a^m b^n$. Therefore it is exactly the smallest subgroup containing $a,b$.


</details>

### ALG-CH02-E015 — Exercise 15: Centralizer subgroup

Prove $C_G(a)$ is a subgroup using the one-step criterion.

<details>
<summary>Hint 1</summary>

Take x and y commuting with a.

</details>

<details>
<summary>Hint 2</summary>

Derive commutation for y⁻¹ and then for xy⁻¹.

</details>

#### ALG-CH02-E015 — Solution

<details>
<summary>Solution</summary>

It contains $e$. If $x,y$ commute with $a$, then $y^{-1}$ also commutes with $a$, since $ya=ay$ implies $ay^{-1}=y^{-1}a$. Hence

$(xy^{-1})a=x(y^{-1}a)=x(ay^{-1})=(xa)y^{-1}=a(xy^{-1})$.

Thus $xy^{-1}$ lies in the centralizer.


</details>

### ALG-CH02-E016 — Exercise 16: The center

Prove $Z(G)$ is a subgroup and that $G$ is abelian iff $Z(G)=G$.

<details>
<summary>Hint 1</summary>

Express the center as the intersection of all centralizers.

</details>

<details>
<summary>Hint 2</summary>

Its equality with G says exactly that every pair commutes.

</details>

#### ALG-CH02-E016 — Solution

<details>
<summary>Solution</summary>

The center is the intersection of the centralizers $C_G(a)$ over all $a$, hence a subgroup. If the center is all of $G$, every element commutes with every other, so $G$ is abelian. The converse is immediate.


</details>

### ALG-CH02-E017 — Exercise 17: Homomorphism kernel as subgroup

Let $\phi:G\to H$ be a homomorphism. Prove $\ker \phi\le G$.

<details>
<summary>Hint 1</summary>

Apply the map to xy⁻¹ for two kernel elements.

</details>

<details>
<summary>Hint 2</summary>

Use identity and inverse preservation.

</details>

#### ALG-CH02-E017 — Solution

<details>
<summary>Solution</summary>

The kernel contains $e_G$ because homomorphisms send identity to identity. If $x,y$ lie in it,

$\phi(xy^{-1})=\phi(x)\phi(y)^{-1}=e_He_H^{-1}=e_H$.

Thus $xy^{-1}$ lies in the kernel, so the subgroup criterion applies.


</details>

### ALG-CH02-E018 — Exercise 18: Homomorphism image as subgroup

Prove $\operatorname{im} \phi\le H$.

<details>
<summary>Hint 1</summary>

Choose preimages of two image elements.

</details>

<details>
<summary>Hint 2</summary>

Their product with an inverse is again a reached element.

</details>

#### ALG-CH02-E018 — Solution

<details>
<summary>Solution</summary>

The image contains $e_H=\phi(e_G)$. If $\phi(x),\phi(y)$ are image elements, then

$\phi(x)\phi(y)^{-1}=\phi(xy^{-1})$,

which is again in the image. The subgroup criterion applies inside $H$.


</details>

### ALG-CH02-E019 — Exercise 19: Dihedral center

Using $r^4=e$, $s^2=e$, and $sr=r^{-1}s$, show $r^2$ is central in $D_4$ but $r$ is not.

<details>
<summary>Hint 1</summary>

Move s past powers of r using the given relation.

</details>

<details>
<summary>Hint 2</summary>

The half-turn equals its inverse, while the quarter-turn does not.

</details>

#### ALG-CH02-E019 — Solution

<details>
<summary>Solution</summary>

Powers of $r$ commute with $r^2$. Also

$sr^2=(sr)r=(r^{-1}s)r=r^{-1}(sr)=r^{-1}r^{-1}s=r^{-2}s=r^2s$,

since $r^4=e$. Thus $r^2$ commutes with generators $r,s$ and hence every word in them. But $sr=r^{-1}s$ differs from $rs$ because $r\ne r^{-1}$ for a quarter-turn, so $r$ is not central.


</details>

### ALG-CH02-E020 — Exercise 20: Transfer problem: automorphisms of a graph

Let $\operatorname{Aut}(X)$ be the bijections of a graph's vertex set that preserve adjacency in both directions. Prove $\operatorname{Aut}(X)$ is a group under composition.

<details>
<summary>Hint 1</summary>

Check that composition preserves adjacency in both directions.

</details>

<details>
<summary>Hint 2</summary>

The two-direction condition also guarantees inverse closure.

</details>

#### ALG-CH02-E020 — Solution

<details>
<summary>Solution</summary>

Composition of adjacency-preserving bijections is again a bijection and preserves adjacency. The identity does. If $f$ preserves adjacency in both directions, then vertices $u,v$ are adjacent exactly when $f(u),f(v)$ are; replacing them by inverse images shows $f^{-1}$ also preserves adjacency. Function composition is associative. Hence all group axioms hold.

</details>


## Summary

Group axioms justify cancellation, inverses, and unique equation solving without commuting factors. Subgroups inherit those laws once closure and inverses are established, while generated subgroups collect finite words in chosen elements and their inverses. Centralizers, centers, and stabilizers exemplify this structure. Cyclic groups next reduce one-generator behavior to integer arithmetic.
