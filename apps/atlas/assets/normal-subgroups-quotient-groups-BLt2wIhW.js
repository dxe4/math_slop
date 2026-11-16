var e=`---
parent_id: book-algebra-patterns-structure
chapter_id: normal-subgroups-quotient-groups
title: "Normal Subgroups and Quotient Groups"
level: undergraduate
estimated_minutes: 225
status: draft
license: CC BY-SA 4.0
---

# Normal Subgroups and Quotient Groups

Cosets always partition a group, but they do not always multiply consistently. A subgroup is **normal** when left and right translation agree, or equivalently when conjugation never moves the subgroup outside itself. Exactly then, the set of cosets inherits a group operation.

Quotient groups turn a chosen collection of elements into a new identity. They formalize modular arithmetic, parity, sign, orientation, and every “ignore these internal moves” construction that respects multiplication. The local prerequisite is [Cosets, Index, and Lagrange's Theorem](#/item/book-algebra-patterns-structure?chapter=cosets-lagrange-index).

## 1. Normality has several equivalent forms

**Definition 5.1 (Normal subgroup).**

Let $N\\le G$. We call $N$ a **normal subgroup**, written $N \\trianglelefteq G$, when

$gN=Ng$

for every $g \\in G$.

The condition does not say every element of $N$ commutes with every element of $G$. It says the two coset **sets** agree.

The following conditions are equivalent:

1. $gN=Ng$ for every $g$;
2. $gNg^{-1}=N$ for every $g$;
3. $gng^{-1} \\in N$ for every $g \\in G,n \\in N$;
4. $gNg^{-1} \\subseteq N$ for every $g$.

From $gN=Ng$, multiply the equality of sets on the right by $g^{-1}$ to obtain $gNg^{-1}=N$. Equality implies containment. If containment holds for every $g$, apply it to $g^{-1}$:

$g^{-1}Ng \\subseteq N$.

Conjugating both sides by $g$ gives $N \\subseteq gNg^{-1}$, so equality follows. Finally,

$gNg^{-1}=N$

is equivalent to saying every individual conjugate $gng^{-1}$ belongs to $N$.

The one-element form is often the easiest test.

### Worked failure in $S_3$

**Worked example 5.2 (Conjugation leaves the subgroup).**

Let $H=\\{e,(12)\\}$. Conjugating $(12)$ by $(123)$ relabels its moved points:

$(123)(12)(123)^{-1}=(23)$.

This is not in $H$, so $H$ is not normal. Correspondingly, Chapter 4 found different left and right cosets.

### Worked success

**Worked example 5.3 (An index-two normal subgroup).**

The alternating subgroup $A_3=\\{e,(123),(132)\\}$ has index two in $S_3$, so it is normal. Conjugating a 3-cycle by any permutation produces another 3-cycle, also showing conjugation preserves the set.

## 2. Sources of normal subgroups

### Every subgroup of an abelian group

If $G$ is abelian and $H\\le G$, then

$ghg^{-1}=hgg^{-1}=h$.

Thus every subgroup is normal.

### The center

For $z \\in Z(G)$, conjugation gives $gzg^{-1}=z$, so $Z(G) \\trianglelefteq G$. More generally, any subgroup contained in the center is normal.

### Index-two subgroups

Chapter 4 proved every index-two subgroup has matching left and right cosets, hence is normal.

### Kernels

If $\\phi:G\\to H$ is a homomorphism and $n \\in \\ker \\phi$, then

$\\phi(gng^{-1})=\\phi(g)\\phi(n)\\phi(g)^{-1}=\\phi(g)e\\phi(g)^{-1}=e$.

Thus $\\ker \\phi \\trianglelefteq G$. This is the principal source: Chapter 6 will prove every normal subgroup is the kernel of the canonical quotient homomorphism.

### Intersections

Any intersection of normal subgroups is normal. If $n$ lies in every $N_i$, then every conjugate lies in every $N_i$ and hence in their intersection.

Unions still usually fail to be subgroups. Products of normal subgroups behave better and are treated later.

## 3. Conjugation changes viewpoint

For fixed $g$, the map

$c_g:G\\to G$, $c_g(x)=gxg^{-1}$

is an automorphism, called an **inner automorphism**. It preserves products:

$c_g(xy)=gxyg^{-1}=gx(g^{-1}g)yg^{-1}=c_g(x)c_g(y)$.

Its inverse is $c_{g^{-1}}$.

Normal subgroups are precisely the subgroups invariant under every inner automorphism. This parallels invariant subspaces in linear algebra: the subset survives every transformation in a declared family.

Conjugation preserves element order. If $x^n=e$, then

$(gxg^{-1})^n=gx^ng^{-1}=e$,

and applying conjugation by $g^{-1}$ gives equality of orders. It also sends $\\langle x\\rangle$ to $\\langle gxg^{-1}\\rangle$.

### Normalizer

For a subgroup $H\\le G$, its **normalizer** is

$N_G(H)=\\{g \\in G:gHg^{-1}=H\\}$.

It is a subgroup, contains $H$, and is the largest subgroup of $G$ in which $H$ is normal. Thus $H \\trianglelefteq G$ exactly when $N_G(H)=G$.

This construction separates local from global normality: a subgroup is always normal in itself, often normal in a larger normalizer, but not necessarily in all of $G$.

## 4. Quotient multiplication

Let $N \\trianglelefteq G$. The quotient set $G/N$ consists of left cosets $gN$. Define

$(gN)(hN)=(gh)N$.

The formula is useful only if it is independent of representatives.

Suppose $gN=g'N$ and $hN=h'N$. Write $g'=gn_1$ and $h'=hn_2$ with $n_1,n_2 \\in N$. Then

$g'h'=gn_1hn_2$

$=gh(h^{-1}n_1h)n_2$.

Normality puts $h^{-1}n_1h$ in $N$, and the product with $n_2$ remains in $N$. Therefore $g'h'$ and $gh$ lie in the same coset. Multiplication is well-defined.

This calculation exposes the exact obstruction: an internal subgroup factor must pass across an external representative, which requires closure under conjugation.

### Normality is necessary

Conversely, suppose the representative formula defines a well-defined multiplication on left cosets. For $n \\in N$, the representatives $e$ and $n$ name the same coset $N$. Thus

$(N)(gN)$

computed with $e,g$ gives $gN$, while computed with $n,g$ gives $ngN$. Well-definedness forces $gN=ngN$, and the left-coset equality criterion gives

$g^{-1}ng \\in N$.

Since this holds for every $g,n$, $N$ is normal.

Therefore:

**Theorem 5.4 (Representative multiplication criterion).**

**Quotient criterion.** Coset multiplication $(gN)(hN)=(gh)N$ is well-defined exactly when $N \\trianglelefteq G$.

## 5. The quotient is a group

Once well-definedness is proved, the group axioms descend from $G$.

- Associativity: $((gN)(hN))(kN)=((gh)k)N=(g(hk))N$.
- Identity: the coset $N=eN$ satisfies $N(gN)=gN=(gN)N$.
- Inverse: $(gN)^{-1}=g^{-1}N$ because $(gN)(g^{-1}N)=N$.

The quotient identity is the entire subgroup $N$, not the element $e$ alone. Every $n \\in N$ becomes quotient identity because $nN=N$.

The canonical map

$\\pi:G\\to G/N$, $\\pi(g)=gN$,

is an onto homomorphism:

$\\pi(gh)=(gh)N=(gN)(hN)$.

Its kernel is $N$, because $gN=N$ exactly when $g \\in N$. Thus every normal subgroup occurs as a homomorphism kernel.

If $G$ is finite, then

$|G/N|=[G:N]=|G|/|N|$.

## 6. Fundamental examples

### Modular arithmetic

Every subgroup $n\\mathbb{Z}$ is normal in the abelian group $(\\mathbb{Z},+)$. The quotient $\\mathbb{Z}/n\\mathbb{Z}$ consists of congruence classes, with

$(a+n\\mathbb{Z})+(b+n\\mathbb{Z})=(a+b)+n\\mathbb{Z}$.

This is the archetype for quotient notation.

### Parity

$\\mathbb{Z}/2\\mathbb{Z}$ collapses all even integers to quotient zero and all odd integers to the other class. The canonical map records parity.

### Sign of a permutation

Here parity of a permutation means parity of a transposition decomposition; Chapter 7 proves this parity is well-defined. For $n\\ge2$, the sign map $\\operatorname{sgn}:S_n\\to \\{1,-1\\}$ is a surjective homomorphism under multiplication. Its kernel is $A_n$, the even permutations, so $A_n \\trianglelefteq S_n$ and $S_n/A_n$ has order two. Chapter 6 will express this quotient as an isomorphism with $\\{1,-1\\}$. For $n=1$, $S_1=A_1$ and the quotient is trivial.

### A quotient of $D_4$

**Worked example 5.5 (Forgetting a half-turn).**

Let $D_4=\\langle r,s | r^4=e, s^2=e, srs=r^{-1}\\rangle$. The subgroup $N=\\langle r^2\\rangle=\\{e,r^2\\}$ is central, hence normal. The quotient has four cosets:

$N$, $rN$, $sN$, $rsN$.

Both $rN$ and $sN$ have order two. They commute in the quotient because

$srN=r^{-1}sN=rsN$,

where $r^{-1}N=rN$ since they differ by $r^2 \\in N$. Thus $D_4/N$ is isomorphic to $C_2 \\times C_2$, not to $C_4$.

The quotient has erased the distinction between a quarter-turn and its inverse.

## 7. What a quotient preserves and forgets

A quotient preserves equations compatible with identifying every element of $N$ with identity. It can simplify a nonabelian group into an abelian one, decrease element orders, and merge distinct subgroups or conjugacy classes.

For $g \\in G$, the order of $gN$ is the least positive $k$ such that

$g^k \\in N$.

It divides the order of $g$ when the latter is finite, but may be smaller. In $D_4/\\langle r^2\\rangle$, the element $r$ has order four while $rN$ has order two.

A quotient does not choose a representative. Statements about a coset must be invariant when multiplied by elements of $N$. Length, matrix trace, or geometric position may fail to descend unless proved compatible.

## 8. Abelian quotients and commutators

Define the **commutator** of $g,h$ by

$[g,h]=ghg^{-1}h^{-1}$.

It equals $e$ exactly when $g$ and $h$ commute. Let $[G,G]$ denote the subgroup generated by all commutators. It is normal; conjugating a commutator gives the commutator of the conjugated elements, so conjugation preserves the generating set.

For normal $N$, the quotient $G/N$ is abelian exactly when $[G,G] \\subseteq N$. Indeed,

$(gN)(hN)=(hN)(gN)$

exactly when $ghN=hgN$, which is equivalent to $ghg^{-1}h^{-1} \\in N$.

Thus $G/[G,G]$ is abelian and is the largest abelian quotient in the sense that every homomorphism from $G$ to an abelian group kills all commutators and therefore factors through it. The formal factorization theorem arrives in Chapter 6.

## 9. Simple groups as quotient atoms

A nontrivial group is **simple** when its only normal subgroups are $\\{e\\}$ and $G$. Such a group has no nontrivial proper quotient groups.

Cyclic groups of prime order are simple because they have no nontrivial proper subgroups at all. A cyclic group of composite order is not simple: a proper divisor produces a nontrivial subgroup, normal because the group is abelian.

Simple does not mean “easy” or “has no subgroups.” Nonabelian simple groups have many subgroups but no nontrivial normal ones. They act as composition factors in later finite-group theory.

## 10. Common errors

- Normality does not mean every $n \\in N$ commutes with every $g \\in G$.
- Checking $gHg^{-1}=H$ for one $g$ is insufficient unless that element generates all relevant conjugations.
- A quotient element is a coset; quotient identity is $N$.
- The formula $(gN)(hN)=(gh)N$ needs normality and a representative-independence proof.
- A normal subgroup need not have index two.
- Element order can shrink in a quotient.
- Equal quotient cosets mean representatives differ by the subgroup, not that representatives are equal.

## 11. Chapter summary and retrieval prompts

Normal subgroups are invariant under conjugation and have equal left and right cosets. Kernels, centers, index-two subgroups, and subgroups of abelian groups are normal. Coset multiplication is well-defined exactly for normal subgroups, producing $G/N$ with identity $N$ and canonical projection kernel $N$. Quotients deliberately erase internal distinctions and can expose simpler structure.

Retrieve:

1. How do you pass from conjugation containment to equality?
2. Why must every kernel be normal?
3. Which factor in the well-definedness proof needs to cross a representative?
4. What is the order of $gN$ testing?
5. Which subgroup must a quotient contain to become abelian?

A quotient does not determine how its cosets are assembled into the original group. For an explicit example, reduction from the cyclic group of order four to the cyclic group of order two has kernel of order two. Projection from the product of two cyclic groups of order two onto its first factor also has a cyclic kernel of order two and the same quotient. Nevertheless the two original groups are not isomorphic: the first has an element of order four, while every nonidentity element of the second squares to identity.

The distinction can be seen directly in a lift of the nonidentity quotient element. In the cyclic group of order four, its generator has order four although its coset has order two. In the product group a lift has order two already. More generally the order of gN is the least positive exponent m with g raised to m belonging to N, when such an exponent exists. It requires entry into the kernel, rather than equality to identity in G. Thus a quotient-order calculation supplies information about powers modulo N but cannot recover the exact order of every representative. Kernel and quotient must be supplemented by the multiplication between chosen lifts to reconstruct the whole group.

## Exercises with full solutions

### ALG-CH05-E001 — Exercise 1: Abelian normality

Prove every subgroup of $(\\mathbb{Z}/18\\mathbb{Z},+)$ is normal.

<details>
<summary>Hint 1</summary>

Use commutativity of the ambient additive group.

</details>

<details>
<summary>Hint 2</summary>

Conjugation fixes every subgroup element individually.

</details>

#### ALG-CH05-E001 — Solution

<details>
<summary>Solution</summary>

The group is abelian. For additive notation, $g+H=H+g$ for every $g$, so every subgroup is normal.


</details>

### ALG-CH05-E002 — Exercise 2: Center normality

Prove every subgroup $H\\le Z(G)$ is normal in $G$.

<details>
<summary>Hint 1</summary>

Conjugate an arbitrary element of H.

</details>

<details>
<summary>Hint 2</summary>

Centrality allows the outside factors to cancel.

</details>

#### ALG-CH05-E002 — Solution

<details>
<summary>Solution</summary>

For $h \\in H$ and $g \\in G$, centrality gives $ghg^{-1}=hgg^{-1}=h \\in H$. The conjugation criterion proves normality.


</details>

### ALG-CH05-E003 — Exercise 3: Index two

If $|G|=30$ and $|H|=15$, prove $H \\trianglelefteq G$.

<details>
<summary>Hint 1</summary>

Compute the index of H.

</details>

<details>
<summary>Hint 2</summary>

Apply the two-coset complement argument.

</details>

#### ALG-CH05-E003 — Solution

<details>
<summary>Solution</summary>

Lagrange gives $[G:H]=2$. Every index-two subgroup is normal because the unique nontrivial left coset and right coset are both $G\\setminus H$.


</details>

### ALG-CH05-E004 — Exercise 4: A kernel

For $\\phi:\\mathbb{Z}\\to \\mathbb{Z}/6\\mathbb{Z}$, $\\phi(n)=[n]_6$, find the kernel and construct the quotient.

<details>
<summary>Hint 1</summary>

Find integers reducing to zero.

</details>

<details>
<summary>Hint 2</summary>

Describe their cosets and the induced residue addition.

</details>

#### ALG-CH05-E004 — Solution

<details>
<summary>Solution</summary>

The kernel is $6\\mathbb{Z}$. The quotient $\\mathbb{Z}/6\\mathbb{Z}$ consists of the six additive cosets $r+6\\mathbb{Z}$, with addition of representatives modulo the subgroup. Here the codomain and quotient use the same standard notation because the canonical map is exactly reduction modulo six.


</details>

### ALG-CH05-E005 — Exercise 5: Non-normal subgroup in $S_3$

Show $\\langle (12)\\rangle$ is not normal using conjugation by $(13)$.

<details>
<summary>Hint 1</summary>

Conjugation relabels the two moved points.

</details>

<details>
<summary>Hint 2</summary>

Check whether the resulting transposition belongs to the stated subgroup.

</details>

#### ALG-CH05-E005 — Solution

<details>
<summary>Solution</summary>

Conjugation relabels the transposed points:

$(13)(12)(13)^{-1}=(23)$.

This is not in $\\{e,(12)\\}$, so the subgroup is not invariant under conjugation.


</details>

### ALG-CH05-E006 — Exercise 6: Normalizer subgroup

Prove $N_G(H)$ is a subgroup.

<details>
<summary>Hint 1</summary>

Treat normalizer membership as set preservation under conjugation.

</details>

<details>
<summary>Hint 2</summary>

Composites and inverses of these conjugations preserve the same subgroup.

</details>

#### ALG-CH05-E006 — Solution

<details>
<summary>Solution</summary>

The identity normalizes $H$. If $x,y$ normalize $H$, then

$(xy^{-1})H(xy^{-1})^{-1}=x(y^{-1}Hy)x^{-1}=xHx^{-1}=H$,

because $y^{-1}$ also normalizes $H$. The one-step subgroup criterion applies.


</details>

### ALG-CH05-E007 — Exercise 7: Intersections

Prove an arbitrary intersection of normal subgroups is normal.

<details>
<summary>Hint 1</summary>

Establish subgroup closure of the intersection.

</details>

<details>
<summary>Hint 2</summary>

A conjugate of a common member remains in every normal subgroup.

</details>

#### ALG-CH05-E007 — Solution

<details>
<summary>Solution</summary>

The intersection is a subgroup. If $x$ lies in it, then $gxg^{-1}$ lies in every normal subgroup in the family, hence in the intersection. The conjugation criterion applies.


</details>

### ALG-CH05-E008 — Exercise 8: Quotient equality

For normal $N$, prove $gN=hN$ iff $h^{-1}g \\in N$ and explain why this does not require normality.

<details>
<summary>Hint 1</summary>

Apply the earlier left-coset equality criterion.

</details>

<details>
<summary>Hint 2</summary>

Normality is needed for multiplication, not for this equality test.

</details>

#### ALG-CH05-E008 — Solution

<details>
<summary>Solution</summary>

This is the ordinary left-coset equality criterion, valid for every subgroup. Normality is required for multiplying the cosets, not for comparing them as sets.


</details>

### ALG-CH05-E009 — Exercise 9: Quotient inverses

Prove $(gN)^{-1}=g^{-1}N$.

<details>
<summary>Hint 1</summary>

Multiply the proposed inverse coset on both sides.

</details>

<details>
<summary>Hint 2</summary>

Both results are the whole identity coset N.

</details>

#### ALG-CH05-E009 — Solution

<details>
<summary>Solution</summary>

Quotient multiplication gives $(gN)(g^{-1}N)=gg^{-1}N=N$, and the reverse product also gives $N$. Hence $g^{-1}N$ is the inverse coset.


</details>

### ALG-CH05-E010 — Exercise 10: Quotient order

If $|G|=72$ and $N \\trianglelefteq G$ has order $9$, find $|G/N|$.

<details>
<summary>Hint 1</summary>

Use the quotient-order formula.

</details>

<details>
<summary>Hint 2</summary>

A whole N-coset is one quotient element.

</details>

#### ALG-CH05-E010 — Solution

<details>
<summary>Solution</summary>

The quotient order is the index: $|G/N|=72/9=8$.


</details>

### ALG-CH05-E011 — Exercise 11: Order in a quotient

Let $g$ have order $12$ and suppose $\\langle g\\rangle \\cap N=\\langle g^4\\rangle$ for normal $N$. Find the order of $gN$.

<details>
<summary>Hint 1</summary>

The quotient returns when gᵏ enters N.

</details>

<details>
<summary>Hint 2</summary>

Find the smallest positive exponent in the stated cyclic intersection.

</details>

#### ALG-CH05-E011 — Solution

<details>
<summary>Solution</summary>

The order is the least positive $k$ with $g^k \\in N$. Inside $\\langle g\\rangle$, membership in the intersection $\\langle g^4\\rangle$ first occurs at $k=4$. Therefore $gN$ has order four.


</details>

### ALG-CH05-E012 — Exercise 12: A quotient of integers

Show $(3\\mathbb{Z})/(12\\mathbb{Z})$ has four elements and is cyclic.

<details>
<summary>Hint 1</summary>

Use the coset of three as generator.

</details>

<details>
<summary>Hint 2</summary>

Find the first positive multiple of three lying in twelve times the integers.

</details>

#### ALG-CH05-E012 — Solution

<details>
<summary>Solution</summary>

Since $12\\mathbb{Z}\\le 3\\mathbb{Z}$, the cosets are $12\\mathbb{Z}$, $3+12\\mathbb{Z}$, $6+12\\mathbb{Z}$, and $9+12\\mathbb{Z}$. The coset $3+12\\mathbb{Z}$ generates them by repeated addition, so the quotient is cyclic of order four.


</details>

### ALG-CH05-E013 — Exercise 13: Quotient of $S_3$

List the cosets of $A_3$ in $S_3$ and write their multiplication table.

<details>
<summary>Hint 1</summary>

Separate the even and odd permutations.

</details>

<details>
<summary>Hint 2</summary>

Use multiplication of signs to build the two-element table.

</details>

#### ALG-CH05-E013 — Solution

<details>
<summary>Solution</summary>

The two cosets are $A_3$ and $(12)A_3$, consisting respectively of even and odd permutations. The first is identity; the product of two odd cosets is even because odd times odd is even. Thus the table is that of $C_2$: $\\begin{array}{c|cc}\\cdot&A_3&(12)A_3\\\\\\hline A_3&A_3&(12)A_3\\\\(12)A_3&(12)A_3&A_3\\end{array}$.


</details>

### ALG-CH05-E014 — Exercise 14: Quotient can reduce order

Give an example of an element of order six whose image in a quotient has order two.

<details>
<summary>Hint 1</summary>

Use a six-element additive cycle and a reduction map.

</details>

<details>
<summary>Hint 2</summary>

Choose a kernel that removes enough powers to leave order two.

</details>

#### ALG-CH05-E014 — Solution

<details>
<summary>Solution</summary>

In $\\mathbb{Z}/6\\mathbb{Z}$, take generator $[1]$ and quotient by the subgroup $\\langle [2]\\rangle=\\{ [0],[2],[4] \\}$ of order three. The coset $[1]+\\langle [2]\\rangle$ has order two because doubling it gives the subgroup, while it is not identity.


</details>

### ALG-CH05-E015 — Exercise 15: Abelian quotient criterion

Prove $G/N$ is abelian iff every commutator lies in $N$.

<details>
<summary>Hint 1</summary>

Compare ghN and hgN.

</details>

<details>
<summary>Hint 2</summary>

Translate their equality into commutator membership, using normality to handle ordering.

</details>

#### ALG-CH05-E015 — Solution

<details>
<summary>Solution</summary>

The quotient is abelian exactly when, for every $g,h$,

$(gN)(hN)(gN)^{-1}(hN)^{-1}=N$.

The left side is $ghg^{-1}h^{-1}N=[g,h]N$, which equals quotient identity exactly when $[g,h] \\in N$.


</details>

### ALG-CH05-E016 — Exercise 16: Commutators die in abelian targets

If $\\phi:G\\to A$ and $A$ is abelian, prove $[G,G] \\subseteq \\ker \\phi$.

<details>
<summary>Hint 1</summary>

Apply the map to one commutator.

</details>

<details>
<summary>Hint 2</summary>

Commutativity kills its image; then use subgroup generation.

</details>

#### ALG-CH05-E016 — Solution

<details>
<summary>Solution</summary>

For every commutator,

$\\phi(ghg^{-1}h^{-1})=\\phi(g)\\phi(h)\\phi(g)^{-1}\\phi(h)^{-1}=e$

because elements of $A$ commute. The kernel is a subgroup, so it contains the subgroup generated by all commutators.


</details>

### ALG-CH05-E017 — Exercise 17: Simple cyclic groups

Prove $\\mathbb{Z}/n\\mathbb{Z}$ is simple exactly when $n$ is prime.

<details>
<summary>Hint 1</summary>

Use the subgroup classification of a cyclic group.

</details>

<details>
<summary>Hint 2</summary>

A composite order has a proper nontrivial divisor, whereas a prime order does not.

</details>

#### ALG-CH05-E017 — Solution

<details>
<summary>Solution</summary>

For $n=1$, the group is trivial and therefore is not simple under the chapter's definition, which requires a nontrivial group. If $n$ is prime, the only subgroup orders divide $n$, so only the trivial and full subgroup exist. If $n>1$ is composite, choose a proper nontrivial divisor $d$; the cyclic group has a subgroup of order $d$, and all subgroups are normal because it is abelian. Thus it is not simple.


</details>

### ALG-CH05-E018 — Exercise 18: Normal closure

Let $S \\subseteq G$. Show the intersection of all normal subgroups containing $S$ is the smallest normal subgroup containing $S$.

<details>
<summary>Hint 1</summary>

G itself belongs to the family being intersected.

</details>

<details>
<summary>Hint 2</summary>

Intersection normality and containment establish the minimal property.

</details>

#### ALG-CH05-E018 — Solution

<details>
<summary>Solution</summary>

The family is nonempty because it contains $G$. Its intersection is normal and contains $S$. Any normal subgroup containing $S$ appears in the family, so the intersection is contained in it. This proves minimality. The intersection is called the normal closure of $S$.


</details>

### ALG-CH05-E019 — Exercise 19: Failed quotient rule

Why can the nonnormal subgroup $\\langle (12)\\rangle$ not be used to make $S_3/\\langle (12)\\rangle$ a quotient group with representative multiplication?

<details>
<summary>Hint 1</summary>

Representative multiplication must not depend on representative choices.

</details>

<details>
<summary>Hint 2</summary>

Use the conjugation obstruction or a concrete coset-product counterexample.

</details>

#### ALG-CH05-E019 — Solution

<details>
<summary>Solution</summary>

Conjugation by $(123)$ sends $(12)$ outside the subgroup, so normality fails. The quotient criterion says representative multiplication is then not well-defined: changing a coset representative can change the proposed output coset. The set of three left cosets still exists, but not this quotient-group operation.


</details>

### ALG-CH05-E020 — Exercise 20: Transfer problem: ignoring internal moves

A robot state group $G$ includes a normal subgroup $N$ of internal recalibrations that should be observationally invisible. Explain why observable states form $G/N$, how actions combine, and what would go wrong if $N$ were not normal.

<details>
<summary>Hint 1</summary>

Invisible recalibrations identify members of one coset.

</details>

<details>
<summary>Hint 2</summary>

Normality is what makes combined observable actions independent of representatives.

</details>

#### ALG-CH05-E020 — Solution

<details>
<summary>Solution</summary>

Two states are observationally equivalent when they differ by an internal recalibration, so an observable state is a coset $gN$. Sequential actions should combine by $(gN)(hN)=ghN$. Normality proves this is independent of the chosen hidden recalibrations attached to $g$ and $h$. The observable identity is $N$, and inverse observation is $g^{-1}N$. If $N$ were not normal, inserting an internal move before one representative could alter the final observable coset, so composition would not be a function of observable states alone.

</details>


## Summary

Normality is invariance under conjugation, rather than elementwise commutation. It is exactly the condition making representative coset multiplication well-defined. Quotient groups erase a normal subgroup as a whole and may reduce element orders or remove noncommutativity. The next chapter identifies such information loss precisely through homomorphism kernels and images.
`;export{e as default};