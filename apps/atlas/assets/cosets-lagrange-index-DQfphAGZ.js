var e=`---
parent_id: book-algebra-patterns-structure
chapter_id: cosets-lagrange-index
title: "Cosets, Index, and Lagrange's Theorem"
level: undergraduate
estimated_minutes: 215
license: CC BY-SA 4.0
---

# Cosets, Index, and Lagrange's Theorem

A subgroup $H$ occupies part of a group $G$. Multiplying all of $H$ by one element moves it to a translated copy called a coset. These copies have the same size as $H$, never partly overlap, and cover $G$. For finite groups, counting the resulting partition proves Lagrange's theorem:

$|G|=[G:H]|H|$.

The theorem turns subgroup containment into divisibility and forces every element order to divide the group order. The local prerequisites are Chapters 2 and 3, especially subgroup criteria and cyclic subgroups.

## 1. Left and right cosets

**Definition 4.1 (Left and right cosets).**

Let $H\\le G$ and $g \\in G$. The **left coset** of $H$ represented by $g$ is

$gH=\\{gh:h \\in H\\}$.

The **right coset** is

$Hg=\\{hg:h \\in H\\}$.

In an abelian group these sets agree, but not in general. A coset is usually not a subgroup: $gH$ contains the identity exactly when $g \\in H$, and in that case $gH=H$.

### Worked example in $S_3$

**Worked example 4.2 (Translation side changes a coset).**

In cycle notation, $(123)$ sends $1\\mapsto2$, $2\\mapsto3$, and $3\\mapsto1$; $(12)$ swaps $1$ and $2$. Compose permutations right to left. Let $H=\\{e,(12)\\}$ and $g=(123)$. Then

$gH=\\{(123),(123)(12)\\}=\\{(123),(13)\\}$.

On the other side,

$Hg=\\{(123),(12)(123)\\}=\\{(123),(23)\\}$.

Thus $gH\\ne Hg$. Both contain two elements, just like $H$, but their second elements differ.

This is not a contradiction: left and right translation are different actions in a noncommutative group.

## 2. Representatives are not unique

Many elements can name the same coset.

**Theorem 4.3 (Equality of left cosets).**

**Coset equality criterion.** For $g,k \\in G$, the following are equivalent:

1. $gH=kH$;
2. $k^{-1}g \\in H$;
3. $g \\in kH$.

If $gH=kH$, then $g=ge$ lies in $kH$, so $g=kh$ for some $h \\in H$, giving $k^{-1}g=h \\in H$. Conversely, if $k^{-1}g=h_0 \\in H$, then $g=kh_0$, and

$gH=kh_0H=kH$

because $h_0H=H$ for $h_0 \\in H$.

Equivalently, every member of a left coset is a representative of that same coset. The notation $gH$ names a set, not a distinguished point plus an attached subgroup.

For right cosets,

$Hg=Hk$ exactly when $gk^{-1} \\in H$.

Factor order changes because the translation side changes.

### Additive example

**Worked example 4.4 (Residues as cosets).**

Inside $(\\mathbb{Z},+)$, the cosets of $4\\mathbb{Z}$ are

$4\\mathbb{Z}$, $1+4\\mathbb{Z}$, $2+4\\mathbb{Z}$, $3+4\\mathbb{Z}$.

The representatives $1,5,-3$ all name the same coset because their pairwise differences are multiples of four. Cosets here are congruence classes modulo four.

## 3. Cosets partition the group

Every element $g$ lies in $gH$ because $g=ge$. Thus left cosets cover $G$.

Two left cosets are either equal or disjoint. Suppose $x \\in gH \\cap kH$. Then $x=gh_1=kh_2$ for some $h_1,h_2 \\in H$. Rearranging,

$k^{-1}g=h_2h_1^{-1} \\in H$.

The equality criterion gives $gH=kH$.

Therefore the distinct left cosets form a partition of $G$. The same is true of right cosets.

The relation

$x\\sim y$ exactly when $y^{-1}x \\in H$

is the equivalence relation whose classes are left cosets. Reflexivity, symmetry, and transitivity can be checked from subgroup closure. This viewpoint explains why partial overlap is impossible: equivalence classes always form a partition.

## 4. Every coset has the same size

For fixed $g$, define

$L_g:H\\to gH$, $L_g(h)=gh$.

It is onto by the definition of a coset. It is one-to-one because $gh_1=gh_2$ implies $h_1=h_2$ by cancellation. Its inverse sends $x \\in gH$ to $g^{-1}x$.

Thus $L_g$ is a bijection, so every left coset has the same cardinality as $H$. No finiteness is needed for the bijection.

Translation is not generally a group homomorphism from $H$ to $gH$; the target coset may not even be a group. The bijection is a counting device here, not an isomorphism claim.

## 5. Index and Lagrange's theorem

The **index** $[G:H]$ is the number of distinct left cosets of $H$ in $G$. There are equally many right cosets: inversion sends $gH$ bijectively to $Hg^{-1}$.

**Theorem 4.2 (Lagrange's).** If $G$ is finite and $H\\le G$, then

$|G|=[G:H]|H|$.

**Proof.** The distinct left cosets partition $G$. There are $[G:H]$ of them, and each contains $|H|$ elements by left translation. Adding their sizes gives the formula. $\\square$

Consequently, the order of a subgroup divides the order of a finite group, and the index is the quotient.

### Worked enumeration in $S_3$

**Worked example 4.5 (A complete coset partition).**

Let $H=\\{e,(12)\\}$. It has order two, while $S_3$ has order six. Lagrange predicts three left cosets. One choice of representatives gives

$H=\\{e,(12)\\}$,

$(13)H=\\{(13),(123)\\}$,

$(23)H=\\{(23),(132)\\}$.

These six elements are disjoint and exhaustive. Choosing $(123)$ instead of $(13)$ names the same second coset.

## 6. Element orders divide group order

For $g \\in G$, the cyclic subgroup $\\langle g\\rangle$ has size $\\operatorname{ord}(g)$. Applying Lagrange gives:

**Theorem 4.4 (Element-order).** In a finite group,

$\\operatorname{ord}(g)$ divides $|G|$.

Therefore

$g^{|G|}=e$

for every $g$: if $|G|=m \\operatorname{ord}(g)$, then $g^{|G|}=(g^{\\operatorname{ord}(g)})^m=e$.

This conclusion does not make $G$ cyclic. It constrains each element separately.

### Prime-order groups

If $|G|=p$ is prime and $g\\ne e$, then $\\operatorname{ord}(g)$ divides $p$ and is greater than one, so it equals $p$. Hence $\\langle g\\rangle=G$; every group of prime order is cyclic.

### No subgroup of forbidden order

A group of order $18$ can have subgroups only of orders $1,2,3,6,9,18$. Lagrange rules out order four or twelve immediately. It does not guarantee subgroups of every listed divisor. The converse of Lagrange is false; for instance, the alternating group $A_4$ has order twelve but no subgroup of order six. A later chapter will supply the conjugacy/action tools that explain this counterexample.

## 7. Arithmetic consequences

The units modulo $n$, written $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$, are the residue classes $[a]$ with $\\gcd(a,n)=1$, under multiplication. They form a group:

- products of units are units;
- $[1]$ is identity;
- Bézout gives an inverse: if $ax+ny=1$, then $[a][x]=[1]$.

There are $\\phi(n)$ units, where $\\phi$ is Euler's totient.

**Theorem 4.5 (Euler's).** If $\\gcd(a,n)=1$, then

$a^{\\phi(n)} \\equiv 1 \\bmod n$.

This is the element-order theorem in the finite group $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$.

For prime $p$, every nonzero residue is a unit and the group has $p-1$ elements. Thus

$a^{p-1} \\equiv 1 \\bmod p$

when $p$ does not divide $a$. Multiplying by $a$, and including the zero case, yields Fermat's form

$a^p \\equiv a \\bmod p$

for every integer $a$.

### Worked modular exponent

Compute $7^{100} \\bmod 15$. Since $\\gcd(7,15)=1$ and $\\phi(15)=8$, Euler gives $7^8 \\equiv 1$. Reduce $100=12\\cdot 8+4$, so

$7^{100} \\equiv 7^4 \\bmod 15$.

Now $7^2=49 \\equiv 4$, so $7^4 \\equiv 16 \\equiv 1$. The remainder is $1$.

Euler's theorem supplies a valid exponent, not necessarily the smallest. Here $[7]$ has order four, so reduction modulo four would be sharper.

## 8. Index two is special

If $[G:H]=2$, there are exactly two left cosets: $H$ and its complement $G\\setminus H$. There are also two right cosets, with the same $H$ and the same complement. Therefore

$gH=Hg$

for every $g$: if $g \\in H$, both equal $H$; if not, both equal $G\\setminus H$.

This property is called **normality**, developed in Chapter 5. Thus every subgroup of index two is normal.

The converse is false: a normal subgroup can have any index. In an abelian group every subgroup is normal, regardless of index.

## 9. Why coset multiplication is not automatic

It is tempting to multiply cosets by

$(gH)(kH)=(gk)H$.

But $g$ and $k$ are not unique representatives. Replacing $g$ by $gh_1$ and $k$ by $kh_2$ produces $gh_1kh_2$, and the middle factor $h_1$ cannot generally move past $k$. The output may depend on representatives.

For $H=\\{e,(12)\\}\\le S_3$, left and right cosets differ, already warning that multiplication of left cosets is not well-behaved. Chapter 5 proves that the representative formula is well-defined exactly when $H$ is normal.

Until that proof, a coset space $G/H$ is a set of left cosets, not automatically a group.

## 10. Common errors

- A coset $gH$ is not normally a subgroup and need not contain $e$.
- Equality $gH=kH$ is tested by $k^{-1}g \\in H$; factor order matters.
- Different representatives can name the same coset.
- Lagrange requires a finite ambient group for numerical divisibility.
- $d$ dividing $|G|$ does not guarantee a subgroup of order $d$.
- The statement $g^{|G|}=e$ does not imply $\\operatorname{ord}(g)=|G|$.
- Coset multiplication requires normality and a well-definedness proof.

## 11. Chapter summary and retrieval prompts

Left cosets are equivalence classes for $x\\sim y$ when $y^{-1}x \\in H$. They partition $G$, and translation gives each the same size as $H$. Counting this partition proves Lagrange. Element orders divide finite group order, prime-order groups are cyclic, and Euler/Fermat congruences follow from applying the theorem to unit groups. Cosets do not inherit a group operation unless the subgroup is normal.

Retrieve:

1. Which expression tests equality of two left cosets?
2. Why must two intersecting left cosets be equal?
3. Why is left translation a bijection but not necessarily a homomorphism?
4. Which implication in “subgroup order iff divisor” is false?
5. Why do index-two left and right cosets agree?

## Exercises with full solutions

### ALG-CH04-E001 — Exercise 1: Cosets in the integers

List the distinct cosets of $5\\mathbb{Z}$ in $\\mathbb{Z}$ and find the index.

<details>
<summary>Hint 1</summary>

Use division with remainder by five.

</details>

<details>
<summary>Hint 2</summary>

Two representatives agree exactly when their difference is a multiple of five.

</details>

#### ALG-CH04-E001 — Solution

<details>
<summary>Solution</summary>

They are $5\\mathbb{Z}$, $1+5\\mathbb{Z}$, $2+5\\mathbb{Z}$, $3+5\\mathbb{Z}$, and $4+5\\mathbb{Z}$. Every integer has exactly one remainder modulo five, so these exhaust the cosets and $[\\mathbb{Z}:5\\mathbb{Z}]=5$.


</details>

### ALG-CH04-E002 — Exercise 2: Equality test

Let $H\\le G$. Prove $gH=H$ exactly when $g \\in H$.

<details>
<summary>Hint 1</summary>

Compare gH with the identity representative's coset.

</details>

<details>
<summary>Hint 2</summary>

Apply the coset equality test.

</details>

#### ALG-CH04-E002 — Solution

<details>
<summary>Solution</summary>

Apply the equality criterion with representative $e$: $gH=eH$ exactly when $e^{-1}g=g \\in H$. Since $eH=H$, the result follows.


</details>

### ALG-CH04-E003 — Exercise 3: Every member represents

If $x \\in gH$, prove $xH=gH$.

<details>
<summary>Hint 1</summary>

Write x=gh for h in H.

</details>

<details>
<summary>Hint 2</summary>

Use hH=H after left translation.

</details>

#### ALG-CH04-E003 — Solution

<details>
<summary>Solution</summary>

Write $x=gh$ with $h \\in H$. Then $g^{-1}x=h \\in H$, so the coset equality criterion gives $xH=gH$.


</details>

### ALG-CH04-E004 — Exercise 4: Right-coset equality

Prove $Hg=Hk$ iff $gk^{-1} \\in H$.

<details>
<summary>Hint 1</summary>

Ask when g lies in Hk.

</details>

<details>
<summary>Hint 2</summary>

Solve the membership equation in the correct order.

</details>

#### ALG-CH04-E004 — Solution

<details>
<summary>Solution</summary>

If the cosets agree, $g$ lies in $Hk$, so $g=hk$ and $gk^{-1}=h \\in H$. Conversely, if $gk^{-1}=h_0 \\in H$, then $g=h_0k$, so $Hg=Hh_0k=Hk$ because $Hh_0=H$.


</details>

### ALG-CH04-E005 — Exercise 5: Cosets partition

Show directly that the relation $x\\sim y$ iff $y^{-1}x \\in H$ is an equivalence relation.

<details>
<summary>Hint 1</summary>

Use identity, inverse, and multiplication closure in H.

</details>

<details>
<summary>Hint 2</summary>

For transitivity multiply z⁻¹y and y⁻¹x in that order.

</details>

#### ALG-CH04-E005 — Solution

<details>
<summary>Solution</summary>

Reflexivity: $x^{-1}x=e \\in H$. Symmetry: if $y^{-1}x \\in H$, its inverse $x^{-1}y$ lies in $H$. Transitivity: if $y^{-1}x$ and $z^{-1}y$ lie in $H$, then $(z^{-1}y)(y^{-1}x)=z^{-1}x \\in H$.


</details>

### ALG-CH04-E006 — Exercise 6: Translation inverse

Write the inverse of $L_g:H\\to gH$, and prove both compositions are identities.

<details>
<summary>Hint 1</summary>

Undo left multiplication on its own side.

</details>

<details>
<summary>Hint 2</summary>

Check the inverse formula on both H and gH.

</details>

#### ALG-CH04-E006 — Solution

<details>
<summary>Solution</summary>

Define $M:gH\\to H$ by $M(x)=g^{-1}x$. If $x=gh$, then $M(x)=h \\in H$. Also $M(L_g(h))=g^{-1}gh=h$, and $L_g(M(x))=gg^{-1}x=x$. Thus the maps are inverse bijections.


</details>

### ALG-CH04-E007 — Exercise 7: Lagrange calculation

If $|G|=84$ and $|H|=7$, find $[G:H]$. Could $G$ have a subgroup of order $10$?

<details>
<summary>Hint 1</summary>

Divide the two orders using Lagrange.

</details>

<details>
<summary>Hint 2</summary>

A proposed subgroup order must divide eighty-four.

</details>

#### ALG-CH04-E007 — Solution

<details>
<summary>Solution</summary>

The index is $84/7=12$. A subgroup order must divide $84$; $10$ does not, so no such subgroup can exist.


</details>

### ALG-CH04-E008 — Exercise 8: Possible element orders

List all possible element orders in a group of order $45$.

<details>
<summary>Hint 1</summary>

An element order divides the group order.

</details>

<details>
<summary>Hint 2</summary>

List the divisors as candidates, without asserting each must occur.

</details>

#### ALG-CH04-E008 — Solution

<details>
<summary>Solution</summary>

Element orders must divide $45$, so the possibilities allowed by Lagrange are $1,3,5,9,15,45$. This list gives necessary possibilities, not a claim that every group of order $45$ contains every listed order.


</details>

### ALG-CH04-E009 — Exercise 9: Prime order

Prove a group of order $13$ has exactly twelve generators.

<details>
<summary>Hint 1</summary>

Use cyclicity of a group of prime order.

</details>

<details>
<summary>Hint 2</summary>

Every nonidentity element must generate.

</details>

#### ALG-CH04-E009 — Solution

<details>
<summary>Solution</summary>

Every nonidentity element has order dividing $13$ and greater than one, hence order $13$. Each of the twelve nonidentity elements generates the whole group.


</details>

### ALG-CH04-E010 — Exercise 10: A group of even order

Assuming a finite group has an element $g$ of even order, prove it has an element of order two.

<details>
<summary>Hint 1</summary>

Write the even order as 2m.

</details>

<details>
<summary>Hint 2</summary>

Test the mth power for both its square and nontriviality.

</details>

#### ALG-CH04-E010 — Solution

<details>
<summary>Solution</summary>

Write $\\operatorname{ord}(g)=2m$. Then $(g^m)^2=g^{2m}=e$. If $g^m=e$, the order of $g$ would divide $m$, contradicting minimality. Thus $g^m$ is nonidentity and has order two.


</details>

### ALG-CH04-E011 — Exercise 11: Powers by group order

If $|G|=60$, prove $g^{60}=e$ for every $g \\in G$.

<details>
<summary>Hint 1</summary>

Apply Lagrange to the cyclic subgroup of g.

</details>

<details>
<summary>Hint 2</summary>

Express sixty as a multiple of that subgroup's size.

</details>

#### ALG-CH04-E011 — Solution

<details>
<summary>Solution</summary>

Lagrange says $\\operatorname{ord}(g)$ divides $60$. Write $60=k \\operatorname{ord}(g)$. Then $g^{60}=(g^{\\operatorname{ord}(g)})^k=e$.


</details>

### ALG-CH04-E012 — Exercise 12: Euler reduction

Compute $11^{123} \\bmod 20$ using group order.

<details>
<summary>Hint 1</summary>

First check that eleven is a unit modulo twenty.

</details>

<details>
<summary>Hint 2</summary>

Reduce by the unit-group order, then calculate the remaining small power.

</details>

#### ALG-CH04-E012 — Solution

<details>
<summary>Solution</summary>

$\\gcd(11,20)=1$ and $\\phi(20)=8$, so $11^8 \\equiv 1$. Since $123 \\equiv 3 \\bmod 8$, reduce to $11^3$. Now $11^2=121 \\equiv 1 \\bmod 20$, so $11^3 \\equiv 11$.


</details>

### ALG-CH04-E013 — Exercise 13: Fermat calculation

Find $3^{1000} \\bmod 7$.

<details>
<summary>Hint 1</summary>

Use the order-six multiplicative group modulo seven.

</details>

<details>
<summary>Hint 2</summary>

Reduce the exponent and evaluate its remaining power.

</details>

#### ALG-CH04-E013 — Solution

<details>
<summary>Solution</summary>

Fermat gives $3^6 \\equiv 1 \\bmod 7$. Since $1000=166\\cdot 6+4$, reduce to $3^4=81 \\equiv 4 \\bmod 7$.


</details>

### ALG-CH04-E014 — Exercise 14: Unit-group order

List $(\\mathbb{Z}/10\\mathbb{Z})^{\\times}$ and verify its order agrees with $\\phi(10)$.

<details>
<summary>Hint 1</summary>

List residues coprime to ten.

</details>

<details>
<summary>Hint 2</summary>

Verify their inverses and compare the list with the totient.

</details>

#### ALG-CH04-E014 — Solution

<details>
<summary>Solution</summary>

The unit classes are those coprime to ten: $[1],[3],[7],[9]$. There are four, and indeed $\\phi(10)=4$.


</details>

### ALG-CH04-E015 — Exercise 15: Left and right cosets

For $H=\\{e,(12)\\}\\le S_3$, calculate $(123)H$ and $H(123)$.

<details>
<summary>Hint 1</summary>

Multiply the representative with every element of H on each side.

</details>

<details>
<summary>Hint 2</summary>

Track permutation images right to left.

</details>

#### ALG-CH04-E015 — Solution

<details>
<summary>Solution</summary>

With right-to-left composition,

$(123)H=\\{(123),(123)(12)\\}=\\{(123),(13)\\}$,

while

$H(123)=\\{(123),(12)(123)\\}=\\{(123),(23)\\}$.

They differ.


</details>

### ALG-CH04-E016 — Exercise 16: Index two

Prove an index-two subgroup has equal left and right cosets without using the word normal.

<details>
<summary>Hint 1</summary>

Separate representatives in H from those outside H.

</details>

<details>
<summary>Hint 2</summary>

The latter name the same complement on either side.

</details>

#### ALG-CH04-E016 — Solution

<details>
<summary>Solution</summary>

There are exactly two left cosets, one being $H$; the other is therefore $G\\setminus H$. The two right cosets likewise are $H$ and $G\\setminus H$. For $g \\in H$, both $gH$ and $Hg$ equal $H$; for $g \\notin H$, both equal the complement.


</details>

### ALG-CH04-E017 — Exercise 17: Infinite Lagrange caution

For $2\\mathbb{Z}\\le \\mathbb{Z}$, explain why both group and subgroup are infinite while the index is two.

<details>
<summary>Hint 1</summary>

Use the even and odd integer partition.

</details>

<details>
<summary>Hint 2</summary>

Ordinary division of infinite sizes does not determine finite index.

</details>

#### ALG-CH04-E017 — Solution

<details>
<summary>Solution</summary>

The two cosets are the even and odd integers. Infinite cardinalities do not support the finite numerical formula as ordinary multiplication and division, even though the coset partition and translation bijections remain valid. The index still counts two classes.


</details>

### ALG-CH04-E018 — Exercise 18: Coset multiplication warning

In $S_3$ with $H=\\{e,(12)\\}$, show that using representatives from the same left coset can change the proposed product class.

<details>
<summary>Hint 1</summary>

Use e and (12) as representatives of the same first coset.

</details>

<details>
<summary>Hint 2</summary>

Multiply by one fixed external representative and compare the resulting classes.

</details>

#### ALG-CH04-E018 — Solution

<details>
<summary>Solution</summary>

The elements $(13)$ and $(123)$ lie in the same left coset $(13)H$. Use $k=(13)$ for the second factor. Then $(13)(13)=e$, so the proposed output is $H$. But replacing the first representative by $(123)$ gives $(123)(13)=(23)$, whose left coset is not $H$. Thus $(gH)(kH)=(gk)H$ is not well-defined here.


</details>

### ALG-CH04-E019 — Exercise 19: Subgroup order versus existence

What exactly does Lagrange prove about a divisor $d$ of $|G|$?

<details>
<summary>Hint 1</summary>

Read the theorem in its stated implication direction.

</details>

<details>
<summary>Hint 2</summary>

Existence forces divisibility; a divisor alone supplies no existence proof.

</details>

#### ALG-CH04-E019 — Solution

<details>
<summary>Solution</summary>

It proves the forward implication: if a subgroup has order $d$, then $d$ divides $|G|$. It does not prove the converse that every divisor occurs as a subgroup order. Additional structure theorems are needed for existence.


</details>

### ALG-CH04-E020 — Exercise 20: Transfer problem: equal-size orbit blocks

A finite set of configurations is acted on freely and transitively within each symmetry class by a subgroup $H$: applying distinct $h \\in H$ to a configuration gives distinct configurations in its class. Prove every class has $|H|$ configurations and the total number is a multiple of $|H|$.

<details>
<summary>Hint 1</summary>

Map H to each symmetry class from a fixed configuration.

</details>

<details>
<summary>Hint 2</summary>

Freeness gives injectivity and transitivity gives surjectivity, then count the partition.

</details>

#### ALG-CH04-E020 — Solution

<details>
<summary>Solution</summary>

Fix configuration $x$. The map $h \\to  h(x)$ from $H$ to its class is onto by the class definition and one-to-one by freeness, so it is a bijection and the class has $|H|$ elements. Distinct classes partition the configuration set, so its total size is the number of classes times $|H|$. This is the same partition-counting mechanism as Lagrange, stated for a free action.

</details>


## Index through a chain and compatible coset data

The partition proof gives more than a divisibility test. It lets us count in stages and compare the information retained by two different coset descriptions. Throughout these arguments, cosets remain sets. No normality is assumed, and no multiplication on a coset space is introduced.

**Theorem 4.6 (Index multiplication).** If $H\\leq K\\leq G$, and both $[G:K]$ and $[K:H]$ are finite, then
$$
[G:H]=[G:K][K:H].
$$

*Proof.* Choose a set $T$ containing exactly one representative of each left $K$-coset in $G$, and a set $S$ containing exactly one representative of each left $H$-coset in $K$. The products $ts$, with $t\\in T$ and $s\\in S$, represent all left $H$-cosets in $G$.

Indeed, for any $g\\in G$, choose $t$ with $gK=tK$. Write $g=tk$, $k\\in K$. Choose $s$ with $kH=sH$ and write $k=sh$, $h\\in H$. Then $g=tsh$, proving coverage.

For distinctness, suppose $tsH=t's'H$. Since $s,s'\\in K$ and $H\\leq K$, this implies $tK=t'K$. Our representative choice forces $t=t'$. Cancelling that common left translation gives $sH=s'H$, so $s=s'$. Thus the products represent the cosets exactly once, and their number is $|T||S|$. ∎

The proof tracks the order of the two choices. First choose a large block $tK$, then a smaller block $tsH$ inside it. Reversing $ts$ to $st$ would change the construction in a noncommutative group. Neither representative set is generally a subgroup: it is a set of names for blocks. Counting works because those names are chosen uniquely, not because they carry their own group operation.

The ambient group need not be finite. A finite-index subgroup of an infinite group can itself be partitioned into finitely many smaller infinite blocks. The formula counts those blocks and never divides one infinite size by another. Conversely, if $[G:H]$ is finite, the two intermediate indices must be finite: distinct $K$-cosets contain distinct $H$-cosets, and distinct $H$-cosets inside $K$ remain distinct in $G$.

**Worked example 4.7 (An infinite group with a finite index tower).** Consider
$$
12\\mathbb Z\\leq4\\mathbb Z\\leq\\mathbb Z.
$$
Representatives for the cosets of $4\\mathbb Z$ in $\\mathbb Z$ are $0,1,2,3$. Representatives for the cosets of $12\\mathbb Z$ inside $4\\mathbb Z$ are $0,4,8$. Adding one from each list produces
$$
0,4,8;\\quad1,5,9;\\quad2,6,10;\\quad3,7,11.
$$
These are the twelve residue classes modulo twelve, grouped by their residues modulo four. Thus the index is $4\\cdot3=12$. To locate a particular integer, write $23=3+8+12$. Its large block is $3+4\\mathbb Z$, and its smaller block is $11+12\\mathbb Z$. The two representatives record distinct stages of the location.

Every group and subgroup in this example is infinite. The finite indices describe how many translated copies there are. The same distinction applies to geometric lattices: infinitely many points can be arranged in finitely many coset patterns relative to a subgroup, but the pattern count says nothing about a total finite number of points.

**Theorem 4.8 (Finite-index intersection bound).** For finite-index subgroups $H,K\\leq G$, their intersection $L=H\\cap K$ has finite index, with
$$
[G:L]\\leq[G:H][G:K].
$$

*Proof.* Intersections are subgroups by the subgroup criterion. Define a function of coset sets
$$
F:G/L\\longrightarrow(G/H)\\times(G/K),
\\qquad F(gL)=(gH,gK).
$$
If $gL=g'L$, the equality test gives $g'^{-1}g\\in L$, hence membership in both $H$ and $K$. The two output cosets therefore agree, proving well-definedness. Conversely, equality of both output cosets gives membership in both subgroups and hence $g'^{-1}g\\in L$. Thus the input cosets agree, proving injectivity. Its finite target has the product cardinality stated, so the bound follows. ∎

The output remembers two coarse descriptions of the same element. Together they determine its finer intersection coset, explaining injectivity. Surjectivity would assert that every pair of coarse descriptions is compatible, a different claim which can fail. Also, this is a map of sets; without normality, its source and targets need not be quotient groups.

Repeated application proves that an intersection of finitely many finite-index subgroups has finite index, bounded by the product of the indices. A possibly infinite family has no such conclusion. The intersection of all $2^j\\mathbb Z$, for positive integers $j$, is $\\{0\\}$: a nonzero integer cannot be divisible by arbitrarily large powers of two. Each subgroup has finite index, but their intersection has infinitely many singleton cosets. Finiteness of the collection is therefore a substantive hypothesis.

**Worked example 4.9 (Compatible residue descriptions).** Let $H=6\\mathbb Z$ and $K=10\\mathbb Z$. Their intersection is $30\\mathbb Z$, since thirty is the least positive common multiple. The intersection bound reads $30\\leq6\\cdot10$, and is strict.

The residues of a single integer modulo six and ten must have matching parity. This necessary condition is sufficient as well. Given representatives $a,b$ with even difference $b-a$, write $g=a+6t$. The condition modulo ten becomes
$$
6t\\equiv b-a\\pmod {10},
\\qquad
3t\\equiv(b-a)/2\\pmod5.
$$
The second equivalence follows by dividing the corresponding integer divisibility condition by two, not by treating two as a unit modulo ten. Three is invertible modulo five, with inverse two, so a solution $t$ exists and is unique modulo five. The resulting $g$ is therefore unique modulo thirty.

For instance, $1\\pmod6$ and $7\\pmod {10}$ are realized by $g=7$. In contrast, $1\\pmod6$ and $2\\pmod {10}$ cannot come from one integer because their parities disagree. There are exactly thirty compatible pairs among sixty selectable pairs: each of six residues modulo six allows five matching-parity residues modulo ten. This makes the strict index inequality visible as a compatibility restriction.

These results distinguish three tasks. Lagrange counts the elements inside each block when the ambient group is finite. Index multiplication counts nested blocks without requiring finite underlying groups. The intersection map asks which two block descriptions can refer to the same element. None of these counting statements alone supplies representative-independent coset multiplication. That further requirement is the subject of the next chapter.

## Summary

Cosets partition a group into equally sized translates, proving Lagrange for finite groups. Equality tests depend on the translation side, and representative multiplication needs normality. Index multiplication counts nested partitions even in infinite groups, while finite-index intersection bounds describe compatible coset information. The next chapter determines exactly when these blocks acquire a consistent group operation.
`;export{e as default};