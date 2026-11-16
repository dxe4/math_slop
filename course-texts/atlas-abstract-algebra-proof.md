
# Abstract algebra I

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](#/courses/atlas-abstract-algebra-proof) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

This course develops groups, rings, polynomial arithmetic, fields, and first modules as a connected proof story. Its goal is to help you start from a new algebraic definition, test examples and nonexamples, identify a kernel or quotient, and justify every representative choice. Each numbered module opens as its own addressable lesson; this overview holds the entry diagnostic, four synthesis workshops, assessment, and capstone. The course is a substantial starting path through abstract algebra, not a substitute for a full textbook sequence.

Prerequisites are proof logic, modular arithmetic, polynomial manipulation, and elementary vector spaces. The [low-prerequisite orientation](../articles/algebra-patterns-machines.md) previews the structures. Use the [algebra book](#/books/algebra-patterns-structure) for a second exposition and broader exercise programs.

## Entry diagnostic and study contract

Before Module 1, try the following.

1. Prove that the composition of two bijections is a bijection.
2. Find every invertible residue modulo 8.
3. Explain why $x^2-2$ has no rational root.
4. Give a subspace of $\mathbb R^3$ and prove closure under addition and scalar multiplication.

Answers: (1) If $f:A\to B$ and $g:B\to C$ are bijections, then $f^{-1}\circ g^{-1}$ is a two-sided inverse of $g\circ f$; the inverse order matters. (2) The units are $[1],[3],[5],[7]$: each is relatively prime to 8, so Bézout supplies a multiplicative inverse, while an even residue has no inverse. (3) If $(a/b)^2=2$ in lowest terms, $a^2=2b^2$ makes $a$ even; substituting $a=2c$ makes $b^2=2c^2$ and $b$ even too, a contradiction. (4) The plane $W=\{(x,y,0):x,y\in\mathbb R\}$ works: sums and scalar multiples retain third coordinate 0, and the zero vector belongs to $W$. If 1 is difficult, complete [Proof Foundations](#/courses/atlas-proof-foundations) first. If 4 is difficult, review [Linear Algebra: A Standard Course](#/courses/atlas-linear-algebra-standard), especially Units 2–3 on subspaces, kernels, and images. If 2 is difficult, use [Congruences, Inverses, and CRT](../articles/congruences-crt.md) alongside the first modules.

For each module, keep four lists: definitions, examples, nonexamples, and maps. When proving a structural claim, name the axiom used. When constructing a quotient, verify representative independence. When claiming two structures differ, give an invariant. These habits are part of the subject, not editorial decoration.

**Planning estimate: 1,160 minutes (about 19 hours 20 minutes) for the core course.** The eight lesson estimates below total 850 minutes and include reading, worked calculations, and first attempts at each guided problem. Allow another 35 minutes for the diagnostic and repair, 65 for the workshops, 100 for the assessment, and 110 for the cumulative set: 1,160 minutes in all. A written capstone with a computational check is an **optional additional 3–5 hours**; this estimate does not promise a particular pace.

| Stage | Addressable modules | Supporting reading | Evidence |
| --- | --- | --- | --- |
| Groups and maps | 1–4 | [Groups and subgroups](../books/algebra-patterns-structure/groups-subgroups-generated-structure.md), [cosets and Lagrange](../books/algebra-patterns-structure/cosets-lagrange-index.md), [isomorphism theorems](../books/algebra-patterns-structure/group-homomorphisms-isomorphism-theorems.md) | Subgroup test, order formula, coset and quotient checks |
| Rings and polynomials | 5–6 | [Rings and domains](../books/algebra-patterns-structure/rings-subrings-domains.md), [ideals and quotients](../books/algebra-patterns-structure/ring-homomorphisms-ideals-quotients.md), [polynomial factorization](../books/algebra-patterns-structure/polynomial-rings-factorization.md) | Proper ideal audit, Bézout inverse, irreducibility certificate |
| Extensions and modules | 7–8 | [Fields and finite fields](../books/algebra-patterns-structure/fields-fractions-finite-fields.md), [field extensions](../books/algebra-patterns-structure/field-extensions-minimal-polynomials.md), [modules](#/books/morphisms-modules-categories) | Four-element field arithmetic, exact-sequence verification |
| Synthesis | Workshops, assessment, cumulative set | [Counterexamples and capstones](../books/algebra-patterns-structure/counterexamples-transfer-capstones.md) | Explain the hypotheses in a new example |

## The eight modules

## Module 1: groups from definitions

[Groups from definitions](atlas-abstract-algebra-proof/groups-from-definitions.md) — Check the axioms, derive inverse order, and prove the nonempty subgroup criterion.

## Module 2: cyclic groups and element order

[Cyclic groups and element order](atlas-abstract-algebra-proof/cyclic-groups-and-element-order.md) — Turn powers into congruences and derive the finite-order gcd formula.

## Module 3: cosets, Lagrange, and actions

[Cosets, Lagrange, and actions](atlas-abstract-algebra-proof/cosets-lagrange-and-actions.md) — Prove coset partitioning and the equivariant coset–orbit bijection.

## Module 4: homomorphisms and quotients

[Homomorphisms and quotients](atlas-abstract-algebra-proof/homomorphisms-and-quotients.md) — Check representative independence and prove the first isomorphism theorem.

## Module 5: rings and ideals

[Rings and ideals](atlas-abstract-algebra-proof/rings-ideals-and-quotients.md) — Build quotient rings and prove the proper prime/domain and maximal/field criteria.

## Module 6: polynomial rings

[Polynomial rings](atlas-abstract-algebra-proof/polynomial-arithmetic-and-fields.md) — Prove division, Bézout, irreducible quotient inverses, and the limits of root tests.

## Module 7: fields and extensions

[Fields and extensions](atlas-abstract-algebra-proof/field-extensions-and-finite-fields.md) — Prove tower-law and evaluation-kernel results and compute in a four-element field.

## Module 8: modules as the next unification

[Modules as the next unification](atlas-abstract-algebra-proof/modules-and-the-limits-of-vector-space-intuition.md) — Test vector-space habits and verify a nonsplit short exact sequence.

## Proof clinic: what can go wrong

- Cancelling a factor in a ring without checking it is not a zero divisor.
- Treating a left coset as a subgroup; most cosets do not contain the identity.
- Defining a quotient by a nonnormal subgroup or a nonideal additive subgroup.
- Claiming a polynomial is irreducible without naming its coefficient field.
- Assuming the order of a subgroup can be any divisor of the group order.
- Using a vector-space theorem over a ring without checking where scalar inverses enter.

## Workshop 1 — The smallest nonabelian group

Use [Module 3](atlas-abstract-algebra-proof/cosets-lagrange-and-actions.md) for cosets and [Module 4](atlas-abstract-algebra-proof/homomorphisms-and-quotients.md) for normality before this synthesis calculation.

The symmetric group $S_3$ contains

$$e,\ (12),\ (13),\ (23),\ (123),\ (132).$$

Composition is read right to left. The group is nonabelian because

$$(12)(23)=(123),\qquad (23)(12)=(132).$$

Element orders already reveal structure: the three transpositions have order 2, the two 3-cycles have order 3, and the identity has order 1. Lagrange's theorem permits only subgroup orders $1,2,3,6$. The subgroup

$$A_3=\{e,(123),(132)\}$$

has index 2, so it is normal. More concretely, it is the kernel of the sign homomorphism.

By contrast, $H=\{e,(12)\}$ is not normal. Conjugation by $(123)$ sends $(12)$ to $(23)$, which is not in $H$. Left and right cosets visibly disagree:

$$(13)H=\{(13),(123)\},\qquad H(13)=\{(13),(132)\}.$$

This is why the set of left cosets of an arbitrary subgroup cannot automatically be multiplied by $(aH)(bH)=abH$. Normality is the representative-independence condition.

**Check.** Why is every subgroup of an abelian group normal? Because $gHg^{-1}=H$: for $h\in H$, commutativity gives $ghg^{-1}=h$. The proof uses the group operation, not the subgroup's size.

## Workshop 2 — A quotient is the image with redundancy removed

Use the [first isomorphism theorem in Module 4](atlas-abstract-algebra-proof/homomorphisms-and-quotients.md) to justify each identification.

For an integer $n\ge1$, define $\varphi:\mathbb Z\to\mathbb Z/n\mathbb Z$ by $\varphi(k)=[k]$. It is surjective and

$$\ker\varphi=n\mathbb Z.$$

Two integers have the same image exactly when their difference lies in $n\mathbb Z$. The first isomorphism theorem therefore gives

$$\mathbb Z/n\mathbb Z\cong\operatorname{im}\varphi.$$

This familiar example contains the whole quotient pattern. A homomorphism forgets some distinctions; its kernel records exactly which inputs become indistinguishable; the quotient identifies precisely those inputs; and the induced map from the quotient to the image becomes one-to-one.

Now consider $\psi:\mathbb Z\to\mathbb Z/6\mathbb Z$ given by $\psi(k)=[2k]$. Its image is $\{[0],[2],[4]\}$ and its kernel is $3\mathbb Z$, so

$$\mathbb Z/3\mathbb Z\cong\{[0],[2],[4]\}.$$

The image is a subgroup of the additive group $\mathbb Z/6\mathbb Z$. It is not the set of units of the ring: additive and multiplicative structure answer different questions.

## Workshop 3 — Cancellation exposes the ring

See [Module 5](atlas-abstract-algebra-proof/rings-ideals-and-quotients.md) for the domain and ideal hypotheses used here.

In an integral domain, $ac=bc$ and $c\ne0$ imply $a=b$, because $(a-b)c=0$ and there are no zero divisors. In $\mathbb Z/6\mathbb Z$, cancellation fails:

$$[2][1]=[2]=[2][4],\qquad [1]\ne[4].$$

The factor $[2]$ is a zero divisor because $[2][3]=[0]$. The implication can be repaired by requiring the cancelled factor to be a unit, or more generally not a zero divisor. If $c$ is a unit, multiply $ac=bc$ by $c^{-1}$. If $c$ is merely nonzero in a domain, use the zero-product property.

Ideals encode which collapses respect ring multiplication. The additive subgroup $2\mathbb Z$ is an ideal of $\mathbb Z$ because every integer multiple of an even number is even. In the ring $M_2(\mathbb R)$, many additive subgroups fail to absorb multiplication from both sides; this is why noncommutative algebra distinguishes left, right, and two-sided ideals.

## Workshop 4 — Compute inside the field with four elements

[Module 6](atlas-abstract-algebra-proof/polynomial-arithmetic-and-fields.md) constructs quotient-field inverses; [Module 7](atlas-abstract-algebra-proof/field-extensions-and-finite-fields.md) proves uniqueness of low-degree representatives.

Let

$$F=\mathbb F_2[x]/(x^2+x+1),$$

and write $\alpha$ for the class of $x$. Because $x^2+x+1$ has no root in $\mathbb F_2$, it is irreducible, so $F$ is a field. Every element has a unique form

$$0,\quad1,\quad\alpha,\quad\alpha+1.$$

The defining relation is $\alpha^2+\alpha+1=0$. In characteristic 2, subtraction equals addition, so

$$\alpha^2=\alpha+1.$$

Now

$$\alpha(\alpha+1)=\alpha^2+\alpha=(\alpha+1)+\alpha=1.$$

Thus $\alpha^{-1}=\alpha+1$, and symmetrically $(\alpha+1)^{-1}=\alpha$. Also $\alpha^3=1$, so the three nonzero elements form a cyclic multiplicative group. This explicit computation links quotient rings, irreducible polynomials, field inverses, and cyclic groups.

Do not replace the polynomial by a decimal approximation to a complex root. The quotient is a four-element field of characteristic 2; it is not a subset of $\mathbb C$. The symbol $\alpha$ is governed by its algebraic relation inside this field.

## Assessment problems with worked answers

### 1. A subgroup from a kernel

Let $R$ be a commutative ring with identity and $n\ge1$. **Supplied determinant theorem:** $\det(AB)=\det(A)\det(B)$ for matrices over $R$. Using this result, show the determinant map $\det\colon\operatorname{GL}_n(R)\to R^\times$ is a homomorphism and identify its kernel.

**Answer.** Multiplicativity of determinant gives $\det(AB)=\det(A)\det(B)$. If $AB=I$, then $\det(A)\det(B)=1$, so an invertible matrix has unit determinant and the stated codomain is correct. The kernel consists of invertible matrices with determinant one, the special linear group $\operatorname{SL}_n(R)$. It is normal because every kernel is normal.

### 2. A quotient computation

Describe $\mathbb Z/12\mathbb Z$ modulo the subgroup generated by $4$.

**Answer.** $\langle4\rangle=\{0,4,8\}$. Its four cosets are represented by $0,1,2,3$. Reduction $[k]_{12}\mapsto[k]_4$ is well-defined because $4\mid12$, is onto, and has kernel $\langle[4]\rangle$. The first isomorphism theorem therefore gives $(\mathbb Z/12\mathbb Z)/\langle[4]\rangle\cong\mathbb Z/4\mathbb Z$.

### 3. A quotient-ring diagnosis

Is $\mathbb Z/15\mathbb Z$ a field?

**Answer.** No. The classes $3$ and $5$ are nonzero but multiply to zero. Equivalently, $(15)$ is not maximal: $(15)\subsetneq(3)\subsetneq\mathbb Z$.

### 4. Construct a finite field

Why is $\mathbb F_{2}[x]/(x^{2}+x+1)$ a field with four elements?

**Answer.** The polynomial has no root in $\mathbb F_{2}$: its values at $0$ and $1$ are both $1$, so a quadratic cannot factor and is irreducible. Bézout then supplies an inverse for every nonzero quotient class. Division by this monic degree-two polynomial leaves a unique remainder $a+bx$ with $a,b\in\mathbb F_2$: if two such remainders represented one class, their difference of degree below two would be a multiple of a degree-two polynomial, so it would be zero. There are exactly four classes.

### 5. Repair a module claim

A learner says “multiplication by a nonzero scalar is invertible on every module.” State the valid vector-space claim, explain why it does not imply any two nonzero vectors are scalar multiples, and give a $\mathbb Z$-module counterexample.

**Answer.** If $c$ is a nonzero scalar in a vector space over a field, the map $v\mapsto cv$ is invertible with inverse $v\mapsto c^{-1}v$. This does **not** say that two arbitrary nonzero vectors are scalar multiples: $(1,0)$ and $(0,1)$ in $\mathbb Q^2$ are not. On the $\mathbb Z$-module $\mathbb Z$, multiplication by the nonzero scalar 2 is injective but cannot reach 1, since $2r=1$ has no integer solution.

## Cumulative proof set with feedback

1. Prove that the center $Z(G)=\{z\in G:zg=gz\text{ for all }g\in G\}$ is a normal subgroup.
2. List the elements and orders in $\mathbb Z/8\mathbb Z$ under addition. How many generators does the group have?
3. Find the kernel and image of $\varphi:\mathbb Z\to\mathbb Z/12\mathbb Z$, $\varphi(k)=[4k]$, and identify the quotient supplied by the first isomorphism theorem.
4. In $\mathbb Z/10\mathbb Z$, find all zero divisors and all units.
### Algebra public reconstruction — Questions 5–6

5. Show that $x^2+1$ is reducible over $\mathbb F_5$ and irreducible over $\mathbb F_3$.
6. In the field $F$ from Workshop 4, compute $(\alpha+1)^2$ and verify its product with $\alpha+1$ is 1.

#### Cumulative proof set — Public solutions and feedback

**Solutions and feedback.**

**1. Center.** $e$ commutes with every $g$. If $z,w$ commute with every $g$, then $(zw)g=z(wg)=z(gw)=(zg)w=g(zw)$; if $z$ commutes with $g$, rearranging $zg=gz$ gives $z^{-1}g=gz^{-1}$. Thus the center is a subgroup. For $z\in Z(G)$, $gzg^{-1}=z$, so conjugation preserves it and the subgroup is normal. If your argument assumed *all* of $G$ commutative, redo it using only the selected $z$.

**2. Orders.** For $a=0,1,\ldots,7$, the formula $|[a]|=8/\gcd(8,a)$ gives $1,8,4,8,2,8,4,8$. Exactly the four odd classes have order 8, hence generate. Include $[0]$ and its order 1; it is easy to omit the identity when listing elements.

**3. Kernel and image.** The condition $[4k]_{12}=[0]$ is $12\mid4k$, equivalent to $3\mid k$. Hence $\ker\varphi=3\mathbb Z$. Its values cycle through $[0],[4],[8]$, so the image has three elements and the induced map $[k]_3\mapsto[4k]_{12}$ is a well-defined isomorphism. If you obtained a quotient of size four, distinguish the coefficient 4 from the kernel step size 3.

**4. Units and zero divisors.** A class is a unit precisely when its representative is coprime to 10, giving $[1],[3],[7],[9]$. The nonzero nonunits $[2],[4],[5],[6],[8]$ are zero divisors: for example $[2][5]=0$, $[4][5]=0$, $[5][2]=0$, $[6][5]=0$, and $[8][5]=0$. Here “zero divisor” excludes zero itself; state a different convention if you use one. Multiplicative inverses are unrelated to additive inverses.

#### Algebra public reconstruction — Models for Questions 5–6

**5. Change the field.** In $\mathbb F_5$, $2^2+1=0$, so $x^2+1=(x-2)(x+2)$. In $\mathbb F_3$, the values at $0,1,2$ are $1,2,2$. A degree-two polynomial over a field is reducible exactly when it has a root, so it is irreducible there. Checking values is enough here because the degree is two.

**6. Four-element field.** In characteristic 2, $(\alpha+1)^2=\alpha^2+2\alpha+1=\alpha^2+1=\alpha$. Multiplying by $\alpha+1$ gives $\alpha(\alpha+1)=\alpha^2+\alpha=1$. Reducing with $\alpha^2=\alpha+1$ at each step avoids treating $\alpha$ as an approximate complex number.

## Capstone

Choose two finite **groups** of the same size, such as $C_4$ and $C_2\times C_2$, or make an equally explicit alternative choice. Build their operation data, verify the group axioms, list subgroups, compute at least one quotient by a normal subgroup, and decide whether the groups are isomorphic using an invariant rather than exhaustive relabelling. Include one program that checks a finite claim and one proof that handles a whole family. State clearly which conclusions came from computation and which from proof. If you choose rings instead, replace “subgroup” with “ideal” and justify quotient multiplication.
