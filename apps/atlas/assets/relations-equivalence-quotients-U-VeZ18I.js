var e=`---
parent_id: book-introduction-to-proof
chapter_id: relations-equivalence-quotients
title: "Relations, Equivalence, and Quotients"
level: undergraduate
license: CC BY-SA 4.0
---

# Relations, Equivalence, and Quotients

A train ticket may identify a passenger without recording every feature of the person. A remainder records something about an integer while ignoring its size. A quotient makes this kind of deliberate forgetting precise. It groups objects according to a stated relation and then treats each group as one new object. Before using a group in a calculation, we must prove that the calculation does not depend on which member we use to name it.

We assume familiarity with sets, ordered pairs, subsets, quantifiers, and direct proof. We use $\\mathbb Z$ for the integers. In particular, divisibility means that $n\\mid m$ if $m=nk$ for some integer $k$. We will distinguish a relation on one set from a relation between two sets, and we will keep the domain visible throughout. An assertion that is true for one domain may fail when the domain is enlarged.

## Relations are sets of ordered pairs

**Definition 7.1.** A relation from a set $A$ to a set $B$ is a subset $R\\subseteq A\\times B$. We write $aRb$ when $(a,b)\\in R$. A relation **on** $A$ is a relation from $A$ to itself: $R\\subseteq A\\times A$.

Order matters: $(a,b)$ and $(b,a)$ are different ordered pairs unless $a=b$. The phrase “$a$ is related to $b$” specifies the first coordinate and the second coordinate. Relations need not assign anything to every first coordinate, and one first coordinate can be related to several second coordinates. A function is a special kind of relation with additional existence and uniqueness requirements; it will be studied in the next chapter.

For a relation $R$ on $A$, the following properties quantify over elements of **that same set**:

- **Reflexive:** for every $a\\in A$, $aRa$.
- **Symmetric:** for all $a,b\\in A$, if $aRb$ then $bRa$.
- **Transitive:** for all $a,b,c\\in A$, if $aRb$ and $bRc$, then $aRc$.

These are three separate statements. To prove one, take arbitrary elements satisfying its hypotheses and derive its conclusion. To disprove one, a single appropriate counterexample is enough. For transitivity, the counterexample must supply *both* links $aRb$ and $bRc$ while the claimed link $aRc$ fails. Producing an unrelated pair says nothing about transitivity.

A relation is **antisymmetric** if $aRb$ and $bRa$ together imply $a=b$. Antisymmetry is not the negation of symmetry. Equality is both symmetric and antisymmetric; a relation can have neither property. The order relation $\\leq$ on the integers is reflexive, antisymmetric, and transitive, but it is not symmetric. Equivalence relations use symmetry instead of antisymmetry.

### Worked example 1: inspect a finite relation

Let $A=\\{1,2,3\\}$ and let

$$R=\\{(1,1),(2,2),(3,3),(1,2),(2,1)\\}.$$

The three diagonal pairs are present, so $R$ is reflexive. Each off-diagonal pair appears with its reverse, so $R$ is symmetric. To check transitivity, note that the only nontrivial links stay inside $\\{1,2\\}$, where all four ordered pairs are present. The point $3$ is related only to itself. Every two-step chain therefore has its required endpoint pair in $R$, so $R$ is transitive.

Now remove $(2,1)$. Reflexivity remains true, but symmetry fails because $1R2$ while $2R1$ does not hold. The remaining relation is still transitive: its only off-diagonal link is $1R2$, and adjoining either diagonal link does not create a new pair. This change demonstrates why the properties should be checked independently rather than inferred from a diagram's appearance.

## Equivalence classes

**Definition 7.2.** An **equivalence relation** on $A$ is a relation that is reflexive, symmetric, and transitive. We often write it as $\\sim$. For $a\\in A$, its **equivalence class** is

$$[a]=\\{x\\in A:x\\sim a\\}.$$

The class is a subset of $A$; the element $a$ is a member of that subset. Since $a\\sim a$, every class is nonempty. The notation $[a]$ uses one member to name the whole class, but it does not make that member uniquely special. Different names may denote the same set.

**Theorem 7.3 (class equality).** If $\\sim$ is an equivalence relation, then $[a]=[b]$ if and only if $a\\sim b$.

**Proof.** If $[a]=[b]$, reflexivity gives $a\\in[a]$, hence $a\\in[b]$ and $a\\sim b$. Conversely, suppose $a\\sim b$. If $x\\in[a]$, then $x\\sim a$, so transitivity gives $x\\sim b$. Thus $[a]\\subseteq[b]$. By symmetry $b\\sim a$, and the same reasoning gives $[b]\\subseteq[a]$. The two inclusions prove equality. ∎

A closely related statement is that two classes are either equal or disjoint. If $z$ lies in both $[a]$ and $[b]$, then $z\\sim a$ and $z\\sim b$. Symmetry and transitivity yield $a\\sim b$, so the theorem gives equality. The converse is immediate: equal classes are nonempty and therefore intersect.

### Worked example 2: congruence modulo four

On $\\mathbb Z$, define $a\\sim b$ if $4\\mid(a-b)$. Reflexivity holds because $a-a=4\\cdot0$. If $a-b=4k$, then $b-a=4(-k)$, proving symmetry. If $a-b=4k$ and $b-c=4\\ell$, then $a-c=4(k+\\ell)$, proving transitivity. Thus this is an equivalence relation.

The division algorithm says each integer has exactly one remainder $0,1,2,$ or $3$ upon division by four. Consequently there are four classes, $[0],[1],[2],[3]$. For instance, $[-1]=[3]$ because $-1-3=-4$ is divisible by four. These are four *sets of integers*, not four individual integers. The remainder provides a convenient name for each class; it does not turn the class itself into that remainder.

## Equivalence relations and partitions

**Definition 7.4.** A partition of $A$ is a family $\\mathcal P$ of nonempty subsets of $A$ such that every element of $A$ belongs to exactly one member of $\\mathcal P$. Equivalently, the blocks have union $A$ and distinct blocks are disjoint. The empty family is the partition of the empty set.

**Theorem 7.5 (equivalence–partition correspondence).** The classes of an equivalence relation on $A$ form a partition of $A$. Conversely, every partition of $A$ determines an equivalence relation whose classes are exactly its blocks. These two constructions undo one another.

**Proof.** Given an equivalence relation, each $a$ lies in $[a]$, so the union of the classes is $A$ and each class is nonempty. If two classes intersect, the preceding argument shows they are equal. Hence distinct classes are disjoint, and the classes form a partition.

Conversely, let $\\mathcal P$ be a partition. Declare $a\\sim b$ when $a$ and $b$ lie in the same block. Each $a$ lies in a block, so $a\\sim a$. Sharing a block is symmetric. If $a$ shares a block with $b$, and $b$ shares a block with $c$, the two blocks both contain $b$ and therefore are the same block. Thus $a$ shares a block with $c$, proving transitivity. The class of $a$ consists exactly of the members of its unique block.

Starting from a partition therefore returns precisely its blocks. Starting from an equivalence relation, two elements belong to the same class exactly when they are related, by class equality. Thus the relation recovered from its class partition is the original relation. The empty-set case also satisfies the argument: there are no elements needing a block, and the empty relation and empty partition correspond. ∎

This theorem permits two styles of construction. One can first write a rule comparing elements and prove all three properties. Alternatively, one can specify nonempty, disjoint blocks that cover the set and then use membership in a common block. Neither method permits overlapping blocks or uncovered elements. In examples, an explicit list of blocks is often the quickest way to see what information is being retained.

## Quotients and the canonical map

**Definition 7.6.** The quotient of $A$ by $\\sim$ is the set of its equivalence classes,

$$A/{\\sim}=\\{[a]:a\\in A\\}.$$

The canonical quotient map is $q:A\\to A/{\\sim}$, $q(a)=[a]$. It is a function because every $a$ has exactly one class, and it is surjective because every element of the quotient is a class $[a]$ for some $a$. Moreover,

$$q(a)=q(b)\\quad\\Longleftrightarrow\\quad a\\sim b.$$

The map is injective exactly when all classes are singletons. Indeed, injectivity together with $q(a)=q(b)$ forces $a=b$; conversely, singleton classes cannot give equal outputs for distinct elements. If $A$ is empty, the quotient is empty and the empty map remains both injective and surjective.

### Worked example 3: words under rearrangement

Let $W$ be the set of finite words over the alphabet $\\{a,b\\}$. Declare two words equivalent when they contain the same number of $a$'s and the same number of $b$'s. Equality of both counts is reflexive, symmetric, and transitive, so this is an equivalence relation. The class of $aab$ contains $aab$, $aba$, and $baa$; no other word has two $a$'s and one $b$. The class of $aa$ contains just $aa$.

The quotient forgets order but retains both letter counts. Length is therefore constant on a class: two words with the same counts have the same sum of counts. The first-letter rule does not have this property: $ab$ and $ba$ lie in one class but start with different letters. Thus “first letter of the class” is not a function on the quotient without adding extra structure. A quotient can forget exactly the information that a proposed later rule tries to use.

## Defining a function on classes

Suppose $f:A\\to B$ is already a function and we propose a new rule $F([a])=f(a)$ on $A/{\\sim}$. Since a class can have several names, we must first show that equivalent representatives give the same output.

**Theorem 7.7 (descent and factorization).** There exists a unique function $F:A/{\\sim}\\to B$ such that $f=F\\circ q$ if and only if

$$a\\sim b\\quad\\Longrightarrow\\quad f(a)=f(b).$$

**Proof.** If $f=F\\circ q$ and $a\\sim b$, then $q(a)=q(b)$, and hence $f(a)=F(q(a))=F(q(b))=f(b)$. Conversely, suppose the displayed implication holds. For a class $C$, there is an $a$ with $C=[a]$; define $F(C)=f(a)$. If also $C=[b]$, class equality gives $a\\sim b$, so the hypothesis gives $f(a)=f(b)$. The value is therefore well-defined. This construction uses only the fact that the particular class is nonempty and the value is independent of its member; it does not require choosing representatives simultaneously for all classes. For every $a$, $F(q(a))=F([a])=f(a)$.

If $G$ is another function with $G\\circ q=f$, then for any class $C=[a]$, $G(C)=G(q(a))=f(a)=F(C)$. Thus $G=F$. The same proof covers the empty quotient, where the unique function from the empty set has no values to check. ∎

The order of the argument matters: prove independence before treating the proposed expression as a function. A counterexample uses two equivalent representatives with different outputs. Showing that one convenient representative works is not enough, because another name for the same input may produce a different answer.

### Worked example 4: descending a parity rule

Let $a\\sim b$ mean $a-b$ is even. Define $f:\\mathbb Z\\to\\{-1,1\\}$ by $f(a)=(-1)^a$. If $a-b=2k$, then $(-1)^a=(-1)^b(-1)^{2k}=(-1)^b$. The descent theorem therefore supplies a unique map from the two parity classes to $\\{-1,1\\}$. It sends the even class to $1$ and the odd class to $-1$.

By contrast, the proposed rule $G([a])=a^2$ with codomain $\\mathbb Z$ fails: $0\\sim2$, but $0^2\\ne2^2$. The rule is not a function on parity classes. If the output were itself taken modulo two, the situation would differ: equivalent inputs would produce equivalent squares. The codomain and its equality relation are part of the well-definedness question.

## Operations and canonical representatives

A binary operation on classes requires independence in *both* positions. To propose $[a]\\star[b]=[a*b]$, prove that $a\\sim a'$ and $b\\sim b'$ imply $a*b\\sim a'*b'$. For addition modulo four, write $a-a'=4r$ and $b-b'=4s$. Then $(a+b)-(a'+b')=4(r+s)$, so addition of residue classes is well-defined. Only after this check should we use the class operation in algebraic identities.

A **canonical representative** is a member singled out by an explicit rule that gives exactly one member of each class. For congruence modulo $n\\ge1$, the division algorithm gives the unique remainder in $\\{0,\\dots,n-1\\}$. Existence follows from division; uniqueness follows because two such remainders differ by a multiple of $n$ whose absolute value is smaller than $n$. Naming a rule is essential: “pick the nicest element” is not a definition.

Not every equivalence relation comes equipped with a canonical representative. Nothing in the quotient construction requires a globally specified representative from every class. If a later proof needs an actual representative, it must state and justify the selection mechanism or work independently of the selection. For finite, explicitly listed classes one can often choose by a stated order; no arbitrary global choice is needed for the descent theorem above.

## Reading a quotient from a function

Every function gives a natural equivalence relation: two inputs are equivalent precisely when they have the same output. This construction explains the sense in which a quotient keeps exactly the information retained by a function. Suppose $f:A\\to B$ and define $a\\sim b$ if $f(a)=f(b)$. Reflexivity, symmetry, and transitivity follow from the corresponding properties of equality. The class of $a$ is the **fiber** of $f$ over $f(a)$: it contains every input with that same output, and no input with a different output.

The quotient map $q$ forgets which input in a fiber was used. The rule $\\Phi([a])=f(a)$ is well-defined by the definition of the relation. It is a bijection from $A/{\\sim}$ onto the image $f(A)$. To see injectivity, suppose $\\Phi([a])=\\Phi([b])$. Then $f(a)=f(b)$, so $a\\sim b$ and $[a]=[b]$. To see surjectivity, take $y\\in f(A)$; by definition $y=f(a)$ for some $a$, and then $y=\\Phi([a])$. The codomain here is the image, not all of $B$: a codomain value with no preimage cannot be reached by $\\Phi$.

For a concrete example, let $f:\\mathbb Z\\to\\mathbb N$ send $n$ to $|n|$, where $\\mathbb N$ includes zero. Then $m\\sim n$ exactly when $|m|=|n|$. The class of zero is $\\{0\\}$, while the class of a positive integer $k$ is $\\{k,-k\\}$. The induced bijection takes each class to its common absolute value. It does not say that every class has two elements; the zero class is an important exception. Nor does it identify a class with a number as a matter of equality: it constructs a particular bijection between two different kinds of objects.

This fiber construction is a practical proof strategy. When a proposed relation says that two objects have the same invariant, name the invariant and check that it really is a function. Equality of its outputs then proves the relation properties at once. The more difficult question is often whether the invariant is *complete*: do equal invariant values imply the equivalence relation one intended to study? Both directions must be checked. For example, equal length is a necessary condition for two binary words to be rearrangements, but it is not sufficient: $aa$ and $ab$ have equal length and different letter counts.

## A proof audit for class formulas

When a class formula appears, write its input type first. If the input is an element of $A/{\\sim}$, its name $[a]$ is a set, and another name $[b]$ can designate that same set. Then write the implication needed for the output type. For an ordinary set $B$, it is $a\\sim b\\Rightarrow f(a)=f(b)$. For a quotient-valued output it becomes equivalence of the two proposed outputs. For a statement about a pair of classes, it asks that replacing either representative preserve the truth value.

This audit avoids a circular argument. One cannot write “because $F$ is a function, equal classes have equal outputs” to prove that the formula defines $F$: the existence of the function is precisely what is at issue. Instead, establish the implication using the original relation and the original rule. Once the implication is proved, existence of the induced function follows, and only then is it legitimate to use its ordinary function properties. To disprove the proposal, display both representatives, verify their equivalence, and calculate two different outputs. The reader can then see the precise point at which the proposed definition breaks.

## Exercises

Try each problem before opening the hints. Every claim about a quotient should identify the original set and the equivalence relation.

### Exercise 1: relation properties {#rel-e01}
On $\\mathbb Z$ define $aRb$ when $a-b$ is divisible by $3$. Prove that $R$ is an equivalence relation.

<details><summary>Hint 1</summary>
Write each divisibility assertion using an integer multiplier.
</details>
<details><summary>Hint 2</summary>
For transitivity add $a-b$ and $b-c$.
</details>
<details><summary>Solution</summary>
For any $a$, $a-a=3\\cdot0$. If $a-b=3k$, then $b-a=3(-k)$. If also $b-c=3\\ell$, then $a-c=3(k+\\ell)$. These prove reflexivity, symmetry, and transitivity respectively.
</details>

### Exercise 2: a failed property {#rel-e02}
On $\\mathbb Z$ let $aRb$ mean $a-b=1$. Determine whether $R$ is reflexive, symmetric, and transitive.

<details><summary>Hint 1</summary>
Test the pair $(0,0)$ and then reverse $(1,0)$.
</details>
<details><summary>Hint 2</summary>
For transitivity use two successive increments.
</details>
<details><summary>Solution</summary>
Reflexivity fails since $0-0\\ne1$. Symmetry fails since $1R0$ but not $0R1$. Transitivity fails since $2R1$ and $1R0$, but $2R0$ is false.
</details>

### Exercise 3: classes meet {#rel-e03}
Prove directly that intersecting equivalence classes are equal.

<details><summary>Hint 1</summary>
Take an element $z$ in both classes.
</details>
<details><summary>Hint 2</summary>
Use symmetry to obtain $a\\sim z$ before applying transitivity.
</details>
<details><summary>Solution</summary>
If $z\\in[a]\\cap[b]$, then $z\\sim a$ and $z\\sim b$. Symmetry gives $a\\sim z$, so $a\\sim b$. For $x\\in[a]$, transitivity gives $x\\sim a\\sim b$, so $x\\in[b]$. Reversing $a,b$ gives the opposite inclusion. Hence the classes are equal.
</details>

### Exercise 4: a partition {#rel-e04}
Let $A=\\{1,2,3,4,5\\}$ and $\\mathcal P=\\{\\{1,3\\},\\{2\\},\\{4,5\\}\\}$. List every ordered pair in the relation induced by $\\mathcal P$.

<details><summary>Hint 1</summary>
Each block contributes its Cartesian square.
</details>
<details><summary>Hint 2</summary>
The first block contributes four pairs, not two.
</details>
<details><summary>Solution</summary>
The relation is $\\{(1,1),(1,3),(3,1),(3,3),(2,2),(4,4),(4,5),(5,4),(5,5)\\}$. Each pair has its entries in one common block, and all such pairs are listed.
</details>

### Exercise 5: a non-partition {#rel-e05}
Explain why $\\{\\{1,2\\},\\{2,3\\}\\}$ is not a partition of $\\{1,2,3\\}$. Show that “appears in a common displayed set” is not transitive.

<details><summary>Hint 1</summary>
Which element belongs to both sets?
</details>
<details><summary>Hint 2</summary>
Compare $1$ with $2$, then $2$ with $3$.
</details>
<details><summary>Solution</summary>
The two blocks intersect at $2$ but are distinct. The proposed relation has $1R2$ and $2R3$, but no displayed set contains both $1$ and $3$, so $1R3$ fails. Thus transitivity fails as well.
</details>

### Exercise 6: well-definedness {#rel-e06}
For integers modulo $6$, determine whether $F([a])=\\gcd(a,6)$ is well-defined. Take the greatest common divisor to be nonnegative.

<details><summary>Hint 1</summary>
If $a=b+6k$, compare common divisors of $a,6$ and $b,6$.
</details>
<details><summary>Hint 2</summary>
Subtract or add the multiple $6k$.
</details>
<details><summary>Solution</summary>
A positive integer divides both $a$ and $6$ exactly when it divides both $b$ and $6$: if it divides $b$ and $6$ it divides $a=b+6k$, and conversely it divides $b=a-6k$. The common positive divisors are identical, so their greatest members agree. The rule is well-defined.
</details>

### Exercise 7: an ill-defined order {#rel-e07}
Can one define $[a]\\preceq[b]$ modulo $3$ by requiring $a\\le b$? Explain.

<details><summary>Hint 1</summary>
Use $[0]=[3]$.
</details>
<details><summary>Hint 2</summary>
Compare $0$ and $3$ against the same representative of $[1]$.
</details>
<details><summary>Solution</summary>
No. Using $0$ and $1$ gives $0\\le1$, while the equivalent representatives $3$ and $1$ give $3\\nleq1$. The truth value depends on the chosen representative.
</details>

### Exercise 8: fibers {#rel-e08}
For $f:A\\to B$, set $a\\sim b$ exactly when $f(a)=f(b)$. Prove this is an equivalence relation and that $[a]\\mapsto f(a)$ is a bijection from $A/{\\sim}$ to $f(A)$.

<details><summary>Hint 1</summary>
Use equality to prove the three relation properties.
</details>
<details><summary>Hint 2</summary>
For injectivity on classes, translate equal outputs back into $a\\sim b$.
</details>
<details><summary>Solution</summary>
Equality is reflexive, symmetric, and transitive, so its pullback through $f$ has all three properties. The class rule is well-defined by its defining implication. Equal outputs imply $a\\sim b$ and therefore $[a]=[b]$, proving injectivity. Each $y\\in f(A)$ is $f(a)$ for some $a$, proving surjectivity onto $f(A)$.
</details>

### Exercise 9: subtraction {#rel-e09}
For $n\\ge1$, prove that $[a]-[b]=[a-b]$ is well-defined modulo $n$.

<details><summary>Hint 1</summary>
Change both representatives at once.
</details>
<details><summary>Hint 2</summary>
Expand $(a-b)-(a'-b')$.
</details>
<details><summary>Solution</summary>
If $a-a'=nr$ and $b-b'=ns$, then $(a-b)-(a'-b')=n(r-s)$. Thus $a-b\\sim a'-b'$, so both choices produce the same output class.
</details>

### Exercise 10: canonical residues {#rel-e10}
Prove that each class modulo $n\\ge1$ contains exactly one member of $\\{0,\\ldots,n-1\\}$.

<details><summary>Hint 1</summary>
Use the division algorithm for existence.
</details>
<details><summary>Hint 2</summary>
A nonzero multiple of $n$ cannot have absolute value less than $n$.
</details>
<details><summary>Solution</summary>
For any $a$, division gives $a=qn+r$ with $0\\le r<n$, so $a\\sim r$. If $r,s$ both lie in this range and are equivalent, $n\\mid(r-s)$ while $|r-s|<n$. Hence $r-s=0$ and $r=s$. Each class therefore has one and only one such representative.
</details>

## Summary

A relation is a set of ordered pairs with a specified domain. Reflexivity, symmetry, and transitivity are separate quantified properties; together they define an equivalence relation. Its classes partition the domain, and each partition yields exactly one equivalence relation. A quotient is a set of classes, with a canonical surjection from the original set. A function on representatives descends exactly when it is constant on classes. Operations need compatibility in every input. Canonical representatives require an explicit existence-and-uniqueness argument and are not needed merely to define a quotient.

## Sources and further reading

- Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), Chapter 11, especially §§11.1–11.5, for relations, equivalence classes, partitions, and modular arithmetic. This chapter is independently written; the linked text is further reading.
- Euler's [Quotients, Canonical Representatives, and Well-Defined Operations](../discrete-mathematics-proof-counting-structure/quotients-and-canonical-representatives.md), for additional quotient constructions and exercises.
`;export{e as default};