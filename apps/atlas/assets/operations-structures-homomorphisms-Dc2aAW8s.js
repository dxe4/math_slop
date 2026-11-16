var e=`---
parent_id: book-algebra-patterns-structure
chapter_id: operations-structures-homomorphisms
title: "Operations, Structures, and Structure-Preserving Maps"
level: undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Operations, Structures, and Structure-Preserving Maps

Abstract algebra starts with a change of question. Instead of asking only how to calculate with integers, matrices, permutations, or polynomials, we ask which rules make those calculations possible and which maps preserve the rules. A theorem proved from a small law can then travel to every system satisfying that law.

This chapter builds the language needed for that transfer. The central objects are a set equipped with operations and a map that respects them. The local prerequisites are sets, functions, modular arithmetic, and elementary proof. No previous group theory is assumed.

After this chapter you should be able to:

- decide whether a rule is a binary operation on a stated set;
- distinguish closure, associativity, identity, inverses, and commutativity;
- read and audit a finite operation table;
- prove that a rule on equivalence classes is well-defined;
- verify or refute a structure-preserving map;
- separate a bijection from an isomorphism;
- transport equations through a homomorphism without importing properties it does not preserve.

## 1. An operation includes its domain

**Definition 1.1 (Binary operation).**

A **binary operation** on a set $S$ is a function

$\\star:S \\times S \\to  S$.

For inputs $x,y$, its output is written $x \\star y$. Saying “on $S$” includes **closure**: every allowed pair must produce another element of $S$.

Ordinary addition is a binary operation on $\\mathbb{Z}$, $\\mathbb Q$, $\\mathbb R$, and $\\mathbb C$. Division is not a binary operation on any of those sets because a pair with second input zero has no permitted output. Subtraction is a binary operation on $\\mathbb{Z}$ but not on the positive integers, since $2-5$ leaves that set.

The same formula can define an operation on one set and fail on another. Consider

$x \\star y=\\sqrt{x^2+y^2}$.

It is closed on the nonnegative reals. On all real numbers it is also closed, but every output happens to be nonnegative. On the integers it is not closed because $1 \\star 1=\\sqrt{2}$ is not an integer.

### Worked audit: a shifted addition

**Worked example 1.2 (Shifted integer addition).**

On $\\mathbb{Z}$, define

$x \\star y=x+y+1$.

Closure follows because an integer sum plus one is an integer. Associativity is not inferred from the familiar plus sign inside the formula; calculate both parenthesizations:

$(x \\star y) \\star z=(x+y+1)+z+1=x+y+z+2$,

$x \\star (y \\star z)=x+(y+z+1)+1=x+y+z+2$.

Thus the operation is associative. It is commutative because $x+y+1=y+x+1$. Its identity is not ordinary zero: solve $e \\star x=x$ to get $e=-1$, and then check $x \\star (-1)=x$. The inverse of $x$ relative to $\\star$ solves $x \\star y=-1$, giving $y=-x-2$.

The operation looks unfamiliar, but the change of coordinates $f(x)=x+1$ satisfies

$f(x \\star y)=x+y+2=f(x)+f(y)$.

The shifted system is structurally the same as ordinary integer addition. This is the first example of an isomorphism.

## 2. Laws are quantified statements

An operation $\\star$ may satisfy some of the following laws.

- **Associativity:** $(x \\star y) \\star z=x \\star (y \\star z)$ for all $x,y,z$.
- **Commutativity:** $x \\star y=y \\star x$ for all $x,y$.
- **Identity:** an element $e$ satisfies $e \\star x=x=x \\star e$ for all $x$.
- **Inverse:** relative to an identity $e$, an inverse of $x$ is a $y$ with $x \\star y=e=y \\star x$.
- **Idempotence:** $x \\star x=x$ for every $x$.

These are distinct conditions and must be checked with their hypotheses; satisfying some does not automatically establish the others. Matrix multiplication is associative and has an identity but is generally not commutative. The operation $\\max$ on the integers is associative, commutative, and idempotent but has no identity within $\\mathbb{Z}$: an identity would have to be an integer no larger than every integer.

To prove a law, start with arbitrary allowed inputs. To disprove a law, one legal counterexample suffices. A handful of successful numerical tests does not prove a universal statement.

### Worked disproof: subtraction is not associative

**Worked example 1.3 (An associativity counterexample).**

On $\\mathbb{Z}$, compare

$(5-3)-1=1$

with

$5-(3-1)=3$.

The different results disprove associativity. Parentheses cannot be dropped from iterated subtraction.

### Uniqueness of identity

**Theorem 1.4 (Uniqueness of a two-sided identity).**

If $e$ and $f$ are both two-sided identities, then

$e=e \\star f=f$.

The first equality uses that $f$ is a right identity; the second uses that $e$ is a left identity. Thus a two-sided identity, if it exists, is unique.

If the operation is associative and $x$ has two two-sided inverses $y,z$, then

$y=y \\star e=y \\star (x \\star z)=(y \\star x) \\star z=e \\star z=z$.

Associativity is the step that changes parentheses. Without it, uniqueness of inverses need not follow.

## 3. A hierarchy of algebraic structures

Names compress collections of laws.

- A **magma** is a set with a binary operation.
- A **semigroup** is a magma whose operation is associative.
- A **monoid** is a semigroup with an identity.
- A **group** is a monoid in which every element has an inverse.
- An **abelian group** is a group whose operation is commutative.

The terminology is less important than the proof obligations. When a later theorem assumes a group, it may use closure, associativity, identity, and inverses. If commutativity is needed, the theorem must say so.

Common examples include:

- $\\mathbb{Z}$ under addition: an abelian group;
- positive real numbers under multiplication: an abelian group;
- all functions $X\\to X$ under composition: a monoid, usually not a group;
- bijections $X\\to X$ under composition: a group, usually not abelian;
- square real matrices under multiplication: a monoid, not a group because singular matrices lack inverses;
- invertible square matrices under multiplication: a group.

Chapter 2 develops group consequences and subgroup proofs in full. This hierarchy lets us state what structure a map is intended to preserve.

## 4. Finite operation tables are exact data

For a finite set, a **Cayley table** lists the output $x \\star y$ in row $x$, column $y$. A table defines a binary operation only when every cell contains exactly one element of the set.

Closure is visible from the entries. Commutativity is symmetry across the main diagonal. An identity row and column reproduce the headers in order. Inverses can be found by locating the identity in each row and column. Associativity is not visible from one local pattern; it requires checking all triples or proving the table comes from a known associative operation.

### Worked table: addition modulo three

**Worked example 1.5 (Residue arithmetic justifies a table).**

On $\\{0,1,2\\}$, define $a \\star b$ to be the remainder of $a+b$ modulo $3$.

| $\\star$ | 0 | 1 | 2 |
| --- | ---: | ---: | ---: |
| 0 | 0 | 1 | 2 |
| 1 | 1 | 2 | 0 |
| 2 | 2 | 0 | 1 |

The row and column labeled $0$ show the identity. The inverse of $1$ is $2$; the inverse of $2$ is $1$. Symmetry shows commutativity. Associativity is best proved from integer addition:

$[(a+b)+c] \\bmod 3=[a+(b+c)] \\bmod 3$.

That proof needs the operation on residue classes to be well-defined, addressed next.

## 5. Operations on equivalence classes need proof

Write $[a]_n$ for the congruence class of integer $a$ modulo $n$. We want to define

$[a]_n+[b]_n=[a+b]_n$.

Representatives are not unique: $[a]_n=[a+kn]_n$. The rule is **well-defined** if changing representatives never changes the output class.

Suppose $[a]_n=[a']_n$ and $[b]_n=[b']_n$. Then $n$ divides $a-a'$ and $b-b'$, so it divides their sum

$(a+b)-(a'+b')$.

Therefore $[a+b]_n=[a'+b']_n$. Addition is well-defined. The same calculation with

$ab-a'b'=a(b-b')+b'(a-a')$

proves multiplication of congruence classes is well-defined.

A formula on representatives is not automatically a function on classes. For example, “send $[a]_5$ to the integer $a$” is not well-defined because $[0]_5=[5]_5$ but the proposed outputs differ.

## 6. Homomorphisms preserve declared operations

Let $(S,\\star)$ and $(T,\\diamond)$ be sets with binary operations. A map

$\\phi:S\\to T$

is a **homomorphism** when

$\\phi(x \\star y)=\\phi(x) \\diamond \\phi(y)$

for every $x,y \\in S$.

Typing matters. The operation on the left belongs to the domain; the operation on the right belongs to the codomain.

Examples:

- $\\phi:\\mathbb{Z}\\to \\mathbb{Z}/n\\mathbb{Z}$, $\\phi(a)=[a]_n$, preserves addition.
- $\\exp:(\\mathbb R,+)\\to (\\mathbb R_{>0},\\times)$ preserves the operation because $\\exp(x+y)=\\exp(x)\\exp(y)$.
- determinant sends invertible real matrices under multiplication to nonzero real numbers under multiplication: $\\det(AB)=\\det(A)\\det(B)$.
- evaluation at $a$ sends polynomials under addition to scalars under addition and also preserves multiplication; when two operations are preserved, we later call it a ring homomorphism.

To refute a proposed homomorphism, find one pair where the preservation equation fails. The map $f:\\mathbb{Z}\\to \\mathbb{Z}$, $f(n)=n+1$, is bijective, but

$f(1+1)=3$ while $f(1)+f(1)=4$.

It is not a homomorphism of additive groups.

### Identity and inverse preservation

Suppose $\\phi:G\\to H$ is a homomorphism between groups with identities $e_G,e_H$. Then

$\\phi(e_G)=\\phi(e_G e_G)=\\phi(e_G)\\phi(e_G)$.

Multiplying by the inverse of $\\phi(e_G)$ gives $\\phi(e_G)=e_H$. Next,

$e_H=\\phi(e_G)=\\phi(xx^{-1})=\\phi(x)\\phi(x^{-1})$,

so $\\phi(x^{-1})=\\phi(x)^{-1}$.

These conclusions use the group laws in the codomain. For arbitrary magmas, operation preservation alone does not force a distinguished element to map to another unless the relevant structure and hypotheses are stated.

## 7. Isomorphisms say “same structure”

An **isomorphism** is a bijective homomorphism whose inverse is also a homomorphism. For groups, a bijective homomorphism automatically has a homomorphic inverse. If $u=\\phi(x)$ and $v=\\phi(y)$, then

$\\phi^{-1}(uv)=\\phi^{-1}(\\phi(x)\\phi(y))$

$=\\phi^{-1}(\\phi(xy))=xy=\\phi^{-1}(u)\\phi^{-1}(v)$.

When an isomorphism exists, we write $G \\cong H$. The elements may have different names and representations, but every equation built from the group operation, identity, and inverse translates across the map.

An isomorphism is stronger than equal size. Any two finite sets with the same number of elements are bijective, but their operations may differ. The integers modulo four under addition contain an element whose repeated addition has four distinct stages. The four-element system in which every nonidentity element added to itself gives zero has no such element. They are not isomorphic as groups despite equal cardinality.

### Law transport

If $\\phi:S\\to T$ is a surjective homomorphism and $\\star$ on $S$ is commutative, then $\\diamond$ on $T$ is commutative. Given $u,v \\in T$, choose preimages $x,y$. Then

$u \\diamond v=\\phi(x) \\diamond \\phi(y)=\\phi(x \\star y)$

$=\\phi(y \\star x)=v \\diamond u$.

Surjectivity is essential because otherwise the calculation proves commutativity only inside the image.

## 8. Kernels and images preview quotient structure

For a group homomorphism $\\phi:G\\to H$, its **kernel** is

$\\ker \\phi=\\{g \\in G:\\phi(g)=e_H\\}$,

and its **image** is

$\\operatorname{im} \\phi=\\{\\phi(g):g \\in G\\}$.

The kernel measures which elements become indistinguishable from the identity; the image records which outputs are reached. Later we will prove they are subgroups, kernels are normal, and

$G/\\ker \\phi \\cong \\operatorname{im} \\phi$.

For now, observe the equality test:

$\\phi(x)=\\phi(y)$ exactly when $\\phi(y^{-1}x)=e_H$,

exactly when $y^{-1}x \\in \\ker \\phi$.

The order $y^{-1}x$ matters in a noncommutative group. Quotient groups will package these fibers as cosets.

### Worked example: parity

Let $\\phi:(\\mathbb{Z},+)\\to (\\mathbb{Z}/2\\mathbb{Z},+)$ send $n$ to its parity class. Its kernel is the even integers and its image contains both classes, so it is onto. Two integers have the same parity exactly when their difference is even. The quotient construction will formalize the statement that integers modulo the even integers form the two-element group.

## 9. A proof and counterexample protocol

When meeting a proposed algebraic structure or map:

1. **State the set and operation types.** A formula without a domain is incomplete.
2. **Check closure before laws.** An output outside the set ends the claim.
3. **Separate laws.** Associativity, commutativity, identity, and inverses need distinct evidence.
4. **Use generic variables for proof.** Tables or examples can suggest, not establish, a universal law unless every finite case is exhausted.
5. **Track representatives.** A rule on classes needs a well-definedness proof.
6. **Write the homomorphism equation with both operations.** Do not replace it with “looks compatible.”
7. **Distinguish injective, surjective, and structure-preserving.** None implies the others without hypotheses.
8. **Name what is not preserved.** A group isomorphism need not preserve an additional ordering relation, distance, topology, or a second undeclared operation.

## 10. Chapter summary and retrieval prompts

An algebraic structure begins with a set and typed operations. Laws are quantified conditions, not visual similarities. Homomorphisms preserve declared operations; isomorphisms are reversible structure-preserving translations. Operations on equivalence classes require representative-independence proofs. Kernels record collapse and images record reach, anticipating quotients.

Retrieve before continuing:

1. Why is division not a binary operation on $\\mathbb Q$?
2. Where does associativity enter the proof that inverses are unique?
3. What must be checked before a formula defines an operation on congruence classes?
4. Why can a bijection fail to be an isomorphism?
5. Which hypothesis lets commutativity transport from a source to an entire target?

## Exercises with full solutions

### ALG-CH01-E001 — Exercise 1: Closure depends on the set

For each of $\\mathbb{Z}$, $\\mathbb Q$, and the positive integers, decide whether $x \\star y=x-y$ is a binary operation.

<details>
<summary>Hint 1</summary>

Check whether every allowed pair stays in the given set.

</details>

<details>
<summary>Hint 2</summary>

Try subtracting a larger positive integer from a smaller one.

</details>

#### ALG-CH01-E001 — Solution

<details>
<summary>Solution</summary>

It is closed on $\\mathbb{Z}$ and $\\mathbb Q$, so it is a binary operation there. It is not closed on positive integers: $2 \\star 5=-3$ is not positive.


</details>

### ALG-CH01-E002 — Exercise 2: Associativity audit

On $\\mathbb R$, define $x \\star y=x+2y$. Is $\\star$ associative or commutative?

<details>
<summary>Hint 1</summary>

Expand both parenthesizations using arbitrary inputs.

</details>

<details>
<summary>Hint 2</summary>

Compare their third-input coefficients, then exchange two unequal inputs to test commutativity.

</details>

#### ALG-CH01-E002 — Solution

<details>
<summary>Solution</summary>

$(x \\star y) \\star z=x+2y+2z$, while $x \\star(y \\star z)=x+2(y+2z)=x+2y+4z$; taking $z=1$ shows failure of associativity. Also $x+2y$ need not equal $y+2x$, so it is not commutative; for example, $0 \\star 1=2$ but $1 \\star 0=1$.


</details>

### ALG-CH01-E003 — Exercise 3: Identity for shifted addition

On $\\mathbb R$, let $x \\star y=x+y-7$. Find the identity and inverse of $x$.

<details>
<summary>Hint 1</summary>

Solve the identity equation before the inverse equation.

</details>

<details>
<summary>Hint 2</summary>

The inverse must produce the new identity, not ordinary zero.

</details>

#### ALG-CH01-E003 — Solution

<details>
<summary>Solution</summary>

Solve $x \\star e=x$: $x+e-7=x$, so $e=7$; the other side agrees because the operation is commutative. The inverse $y$ satisfies $x+y-7=7$, hence $y=14-x$.


</details>

### ALG-CH01-E004 — Exercise 4: An associative disguised product

On $\\mathbb R$, define $x \\star y=x+y+xy$. Prove associativity and find the identity. Which element has no inverse?

<details>
<summary>Hint 1</summary>

Consider what adding one does to the operation.

</details>

<details>
<summary>Hint 2</summary>

The translated multiplication proves associativity; inspect the exceptional inverse denominator.

</details>

#### ALG-CH01-E004 — Solution

<details>
<summary>Solution</summary>

Expand:

$(x \\star y) \\star z=x+y+z+xy+xz+yz+xyz$,

and the same expression results from $x \\star(y \\star z)$, so the operation is associative. The identity is $0$. Solving $x \\star y=0$ gives $y=-x/(1+x)$ when $x\\ne -1$. For $x=-1$, the left side is always $-1$, so $-1$ has no inverse. Thus the structure is a commutative monoid, not a group.


</details>

### ALG-CH01-E005 — Exercise 5: Maximum

Show $\\max$ on the nonnegative integers is an associative, commutative, idempotent operation with identity $0$, but not a group operation.

<details>
<summary>Hint 1</summary>

Use the order interpretation of maximum.

</details>

<details>
<summary>Hint 2</summary>

An inverse for a positive input would have to produce zero under maximum.

</details>

#### ALG-CH01-E005 — Solution

<details>
<summary>Solution</summary>

Maximum is closed and independent of order, so commutative. Both $\\max(\\max(x,y),z)$ and $\\max(x,\\max(y,z))$ select the largest of the three, proving associativity. $\\max(x,x)=x$, and $\\max(0,x)=x$. If $x>0$, no $y$ can satisfy $\\max(x,y)=0$, so $x$ has no inverse.


</details>

### ALG-CH01-E006 — Exercise 6: Table audit

On $\\{e,a,b\\}$, suppose a table has identity $e$, is commutative, and satisfies $a \\star a=b$, $a \\star b=e$. Determine $b \\star b$ if associativity holds.

<details>
<summary>Hint 1</summary>

Compare (a⋆a)⋆b with a⋆(a⋆b).

</details>

<details>
<summary>Hint 2</summary>

Use the supplied products and the identity property in those two expressions.

</details>

#### ALG-CH01-E006 — Solution

<details>
<summary>Solution</summary>

Associativity gives

$b \\star b=(a \\star a) \\star b=a \\star(a \\star b)=a \\star e=a$.

Together with the identity and commutativity, all cells are determined. The resulting table is addition modulo three after relabeling $a$ as $1$ and $b$ as $2$.


</details>

### ALG-CH01-E007 — Exercise 7: Composition is not commutative

Give two functions from $\\mathbb R$ to $\\mathbb R$ whose compositions in the two orders differ.

<details>
<summary>Hint 1</summary>

Choose one translation and one scaling.

</details>

<details>
<summary>Hint 2</summary>

Evaluate their two composites on the same input.

</details>

#### ALG-CH01-E007 — Solution

<details>
<summary>Solution</summary>

Let $f(x)=x+1$ and $g(x)=2x$. Then $(f \\circ g)(x)=2x+1$, while $(g \\circ f)(x)=2x+2$. Thus function composition is not generally commutative.


</details>

### ALG-CH01-E008 — Exercise 8: Modular multiplication is well-defined

Prove $[a]_n[b]_n=[ab]_n$ does not depend on representatives.

<details>
<summary>Hint 1</summary>

Write each changed representative as the old one plus a multiple of n.

</details>

<details>
<summary>Hint 2</summary>

Expand the difference of products to expose divisibility by n.

</details>

#### ALG-CH01-E008 — Solution

<details>
<summary>Solution</summary>

If $a \\equiv a'$ and $b \\equiv b'$ modulo $n$, then $n$ divides $a-a'$ and $b-b'$. Since

$ab-a'b'=a(b-b')+b'(a-a')$,

both terms on the right are divisible by $n$, so $ab \\equiv a'b'$. The output classes agree.


</details>

### ALG-CH01-E009 — Exercise 9: A non-well-defined rule

Does $F:\\mathbb{Z}/6\\mathbb{Z}\\to \\mathbb{Z}$ given by $F([a]_6)=a^2$ define a function?

<details>
<summary>Hint 1</summary>

Choose two representatives of one residue class.

</details>

<details>
<summary>Hint 2</summary>

Compare their squares in the integer target, not modulo six.

</details>

#### ALG-CH01-E009 — Solution

<details>
<summary>Solution</summary>

No. The same class has representatives $0$ and $6$, but the proposed outputs are $0$ and $36$. A function on classes must give one output for the class, independent of representative.


</details>

### ALG-CH01-E010 — Exercise 10: Reduction is a homomorphism

Prove $\\rho:(\\mathbb{Z},+)\\to (\\mathbb{Z}/n\\mathbb{Z},+)$, $\\rho(a)=[a]_n$, is an onto homomorphism.

<details>
<summary>Hint 1</summary>

Write the homomorphism equation with both additions.

</details>

<details>
<summary>Hint 2</summary>

Every target class has an integer representative.

</details>

#### ALG-CH01-E010 — Solution

<details>
<summary>Solution</summary>

$\\rho(a+b)=[a+b]_n=[a]_n+[b]_n=\\rho(a)+\\rho(b)$, so it preserves addition. Every residue class $[r]_n$ is the image of the integer $r$, so it is onto.


</details>

### ALG-CH01-E011 — Exercise 11: Exponential is an isomorphism

Prove $\\exp:(\\mathbb R,+)\\to (\\mathbb R_{>0},\\times)$ is an isomorphism.

<details>
<summary>Hint 1</summary>

Use the exponential addition identity.

</details>

<details>
<summary>Hint 2</summary>

Its inverse logarithm gives injectivity and surjectivity on positive reals.

</details>

#### ALG-CH01-E011 — Solution

<details>
<summary>Solution</summary>

The exponential law gives $\\exp(x+y)=\\exp(x)\\exp(y)$, so it is a homomorphism. It is injective because exponential is strictly increasing and surjective onto positive reals because every positive $y$ equals $\\exp(\\log y)$. Its inverse $\\log$ preserves operations via $\\log(ab)=\\log a+\\log b$ for positive $a,b$.


</details>

### ALG-CH01-E012 — Exercise 12: Absolute value

Is $a \\to  |a|$ a homomorphism (a) from $(\\mathbb R,+)$ to $(\\mathbb R,+)$ or (b) from $(\\mathbb R^{\\times},\\times)$ to $(\\mathbb R_{>0},\\times)$?

<details>
<summary>Hint 1</summary>

Test opposite nonzero inputs for the additive claim.

</details>

<details>
<summary>Hint 2</summary>

For the multiplicative claim, use the absolute value of a product.

</details>

#### ALG-CH01-E012 — Solution

<details>
<summary>Solution</summary>

It is not additive: $|1+(-1)|=0$ while $|1|+|-1|=2$. It is multiplicative on nonzero reals because $|ab|=|a|\\,|b|$, and its outputs are positive, so it is a homomorphism in (b).


</details>

### ALG-CH01-E013 — Exercise 13: Identity preservation

Let $\\phi:G\\to H$ be a group homomorphism. Prove $\\phi(e_G)=e_H$ without assuming $\\phi$ is onto.

<details>
<summary>Hint 1</summary>

Apply the homomorphism equation to the square of the source identity.

</details>

<details>
<summary>Hint 2</summary>

Cancel the repeated target factor without assuming surjectivity.

</details>

#### ALG-CH01-E013 — Solution

<details>
<summary>Solution</summary>

$\\phi(e_G)=\\phi(e_Ge_G)=\\phi(e_G)\\phi(e_G)$. Multiply on the left by $\\phi(e_G)^{-1}$ in $H$. This yields $e_H=\\phi(e_G)$. Surjectivity is unnecessary.


</details>

### ALG-CH01-E014 — Exercise 14: Powers are preserved

For a group homomorphism, prove $\\phi(g^n)=\\phi(g)^n$ for every integer $n$.

<details>
<summary>Hint 1</summary>

Use induction for positive powers.

</details>

<details>
<summary>Hint 2</summary>

Apply inverse preservation for negative powers and check the zero exponent.

</details>

#### ALG-CH01-E014 — Solution

<details>
<summary>Solution</summary>

For positive $n$, use induction and the homomorphism law. At $n=0$, both sides are the relevant identity. For negative $n$, write $g^n=(g^{-1})^{-n}$ and use $\\phi(g^{-1})=\\phi(g)^{-1}$ plus the positive case.


</details>

### ALG-CH01-E015 — Exercise 15: Equal size is insufficient

Give a bijection $f:\\mathbb{Z}/4\\mathbb{Z}\\to \\mathbb{Z}/4\\mathbb{Z}$ that is not a homomorphism of additive groups.

<details>
<summary>Hint 1</summary>

Every additive homomorphism preserves zero.

</details>

<details>
<summary>Hint 2</summary>

Find a bijective relabelling that moves zero.

</details>

#### ALG-CH01-E015 — Solution

<details>
<summary>Solution</summary>

Swap $[1]$ and $[2]$ while fixing $[0]$ and $[3]$. This is a bijection, but $f([1]+[1])=f([2])=[1]$, whereas $f([1])+f([1])=[2]+[2]=[0]$. Thus it does not preserve addition.


</details>

### ALG-CH01-E016 — Exercise 16: Product structures

If $(G,\\star)$ and $(H,\\diamond)$ are groups, prove $G \\times H$ is a group under

$(g,h)(g',h')=(g \\star g',h \\diamond h')$.

<details>
<summary>Hint 1</summary>

Write the identity and inverse as coordinate pairs.

</details>

<details>
<summary>Hint 2</summary>

Each axiom reduces to the corresponding axiom in the two factors.

</details>

#### ALG-CH01-E016 — Solution

<details>
<summary>Solution</summary>

Closure and associativity hold componentwise. The identity is $(e_G,e_H)$. The inverse of $(g,h)$ is $(g^{-1},h^{-1})$. Each group axiom reduces to the corresponding axiom in the two components.


</details>

### ALG-CH01-E017 — Exercise 17: Projection homomorphisms

For the product group, prove $\\pi_G(g,h)=g$ is a homomorphism and identify its kernel and image.

<details>
<summary>Hint 1</summary>

Apply the projection to a product.

</details>

<details>
<summary>Hint 2</summary>

Solve for pairs whose first coordinate is the target identity.

</details>

#### ALG-CH01-E017 — Solution

<details>
<summary>Solution</summary>

$\\pi_G((g,h)(g',h'))=g \\star g'=\\pi_G(g,h) \\star \\pi_G(g',h')$. The kernel consists of pairs whose first coordinate is $e_G$, namely $\\{e_G\\} \\times H$. Every $g$ is reached by $(g,e_H)$, so the image is all of $G$.


</details>

### ALG-CH01-E018 — Exercise 18: Transporting idempotence

Let $\\phi:S\\to T$ be a surjective homomorphism of magmas. If every $x \\in S$ satisfies $x \\star x=x$, prove every $y \\in T$ satisfies $y \\diamond y=y$.

<details>
<summary>Hint 1</summary>

Choose a source preimage of an arbitrary target element.

</details>

<details>
<summary>Hint 2</summary>

Transport its idempotence equation through the homomorphism.

</details>

#### ALG-CH01-E018 — Solution

<details>
<summary>Solution</summary>

Choose $x$ with $\\phi(x)=y$. Then

$y \\diamond y=\\phi(x) \\diamond \\phi(x)=\\phi(x \\star x)=\\phi(x)=y$.

Surjectivity supplies a preimage for arbitrary $y$.


</details>

### ALG-CH01-E019 — Exercise 19: Fibers and the kernel

For a group homomorphism, prove $\\phi(x)=\\phi(y)$ exactly when $y^{-1}x \\in \\ker \\phi$.

<details>
<summary>Hint 1</summary>

Multiply an equality of images by an inverse on the left.

</details>

<details>
<summary>Hint 2</summary>

Recognize the resulting expression as the image of y⁻¹x.

</details>

#### ALG-CH01-E019 — Solution

<details>
<summary>Solution</summary>

$\\phi(y^{-1}x)=\\phi(y)^{-1}\\phi(x)$. This equals the identity exactly when $\\phi(x)=\\phi(y)$. By definition, equality to the identity means $y^{-1}x$ lies in the kernel.


</details>

### ALG-CH01-E020 — Exercise 20: Transfer problem: relabeling a state machine

A finite state set $S$ has a reversible update operation forming a group $G$ of permutations. A relabeling $r:S\\to T$ is bijective. Define $\\Phi(g)=r \\circ g \\circ r^{-1}$. Prove $\\Phi$ is an isomorphism from the update group on $S$ to its relabeled update group on $T$.

<details>
<summary>Hint 1</summary>

Expand the relabelling of a product of updates.

</details>

<details>
<summary>Hint 2</summary>

Cancel adjacent r⁻¹r factors and use the reverse relabelling for the inverse map.

</details>

#### ALG-CH01-E020 — Solution

<details>
<summary>Solution</summary>

Each $\\Phi(g)$ is a permutation of $T$. For updates $g,h$,

$\\Phi(g \\circ h)=r \\circ g \\circ h \\circ r^{-1}$

$=(r \\circ g \\circ r^{-1}) \\circ(r \\circ h \\circ r^{-1})=\\Phi(g) \\circ \\Phi(h)$.

Thus $\\Phi$ is a homomorphism. Its inverse sends a permutation $k$ on $T$ to $r^{-1} \\circ k \\circ r$, so it is bijective and hence an isomorphism. Relabeling changes representation but not the composition structure.

</details>


## Summary

An algebraic structure includes its underlying set, typed operations, and stated laws. Homomorphisms preserve those operations; isomorphisms also preserve their reversible interpretation. Representative formulas require well-definedness, and equations travel only with their hypotheses. The next chapter develops the reversible associative structures called groups.
`;export{e as default};