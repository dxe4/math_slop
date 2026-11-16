var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: quotients-and-canonical-representatives
title: "Quotients, Canonical Representatives, and Well-Defined Operations"
level: undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Quotients, Canonical Representatives, and Well-Defined Operations

Mathematics often declares that distinctions no longer matter. Integers that differ by a multiple of $n$ represent the same residue. Paths with the same endpoints may represent the same connection. Configurations related by rotation may represent the same necklace. This act of forgetting is powerful, but it creates an obligation: every definition made after forgetting must be independent of the information discarded.

The earlier chapter on sets, functions, and relations proved that equivalence relations and partitions describe the same grouping. We now use those groups as mathematical objects. The main questions are:

1. What exactly is a quotient set?
2. When does a rule on representatives define a function on classes?
3. When can one choose a preferred, or canonical, representative?
4. Which statements about the original set descend to the quotient?

Throughout, $\\sim$ is an equivalence relation on a set $X$, $[x]=\\{y\\in X:y\\sim x\\}$, and $X/\\sim$ denotes the set of equivalence classes. No algebra is assumed beyond integer arithmetic.

## 1. The quotient is a set of classes

The **quotient set** of $X$ by $\\sim$ is

$$X/\\sim = \\{[x] : x\\in X\\}$$

Its elements are subsets of $X$, not elements of $X$. The **quotient map** or **projection** is

$q:X\\to X/\\sim$, $q(x)=[x]$.

It is always surjective because every class has the form $[x]$. It is injective exactly when every class is a singleton, equivalently when $x\\sim y$ implies $x=y$.

The notation contains apparent duplication: if $x\\sim y$, then $[x]=[y]$, so the same class appears under several names. Set notation removes duplicates. The equality test is fundamental.

**Theorem 20.1 (Class equality).** For an equivalence relation, $[x]=[y]$ if and only if $x\\sim y$.

**Proof.** If $[x]=[y]$, reflexivity gives $x\\in [x]=[y]$, hence $x\\sim y$. Conversely suppose $x\\sim y$. If $z\\in [x]$, then $z\\sim x$; transitivity with $x\\sim y$ gives $z\\sim y$, so $[x]\\subseteq [y]$. Symmetry gives $y\\sim x$, and the same argument gives the reverse inclusion. Thus the classes are equal. ∎

### Worked example 1: parity as a two-element quotient

On $Z$, define $a\\sim b$ when $a-b$ is even. There are exactly two classes:

$[0]=\\{\\ldots,-4,-2,0,2,4,\\ldots\\}$ and $[1]=\\{\\ldots,-3,-1,1,3,5,\\ldots\\}$.

Every integer is even or odd, so every class is one of these. They differ because $0$ is not equivalent to $1$. Therefore $Z/\\sim$ has two elements even though $Z$ is infinite. The quotient map remembers parity and forgets magnitude and sign.

This illustrates compression: quotient cardinality counts kinds of elements under the chosen equivalence, not original elements.

## 2. Partitions build quotients without pairwise checking

Suppose $P$ is a partition of $X$: its blocks are nonempty, pairwise disjoint, and have union $X$. Define $x\\sim _{P} y$ when $x$ and $y$ lie in the same block. Then $\\sim _{P}$ is an equivalence relation, and $X/\\sim _{P}$ is exactly the family of blocks in $P$.

This lets us specify a quotient in either direction:

- give a rule comparing two elements, then prove reflexivity, symmetry, and transitivity;
- give nonoverlapping exhaustive blocks, then use same-block membership.

Neither route may omit its audit. A family of overlapping subsets is not a partition, while a relation that merely “looks like similarity” may fail transitivity.

### Worked example 2: quotienting a directed graph by mutual reachability

Let a directed graph have vertices $\\{a,b,c,d,e\\}$ and arrows

$a\\to b$, $b\\to a$, $b\\to c$, $c\\to d$, $d\\to c$, $d\\to e$.

Say $u\\sim v$ if $u$ reaches $v$ and $v$ reaches $u$, allowing paths of length zero. Reflexivity follows from length-zero paths, symmetry is built into the condition, and transitivity follows by concatenating paths. The classes are $\\{a,b\\}$, $\\{c,d\\}$, and $\\{e\\}$.

Collapse each class to one vertex. There is an arrow from class $A$ to distinct class $B$ when some original arrow goes from a member of $A$ to a member of $B$. The result is

$$\\{a,b\\} \\to \\{c,d\\} \\to \\{e\\}$$

No directed cycle can remain between distinct classes. If quotient classes $C_{0},\\ldots,C_{k}=C_{0}$ formed a directed cycle, paths around the cycle would make every vertex in those classes mutually reachable, so the classes would have been one class. Quotienting has converted a cyclic reachability system into an acyclic one.

## 3. Representative formulas need a well-definedness proof

We often try to define $F:X/\\sim \\to Y$ by a formula

$$F([x]) = expression involving x$$

The symbol $[x]$ can name the same input using many representatives. The proposed rule is **well-defined** precisely when

$x\\sim x'$ implies $F([x])=F([x'])$.

This condition is not a stylistic extra. If it fails, the formula assigns two outputs to one input, so it is not a function.

**Representative test.** A proposed rule $F([x])=f(x)$ defines a function $X/\\sim \\to Y$ if and only if $f$ is constant on every equivalence class.

**Proof.** If $F$ exists, then $x\\sim x'$ gives $[x]=[x']$, so $f(x)=F([x])=F([x'])=f(x')$. Conversely, if $f$ is constant on classes, define $F(C)$ to be $f(x)$ for any $x\\in C$. Every class is nonempty, and constancy makes the value independent of the choice. ∎

### Worked example 3: one rule descends and one does not

Use parity equivalence on $Z$. The rule $F([a])=(-1)^{a}$ is well-defined: if $a-b=2k$, then

$$(-1)^{a}=(-1)^{b+2k}=(-1)^{b}((-1)^{2})^{k}=(-1)^{b}$$

But $G([a])=a^{2}$ is not well-defined. Since $[0]=[2]$, the single quotient input $[0]$ would have to map both to $0^{2}=0$ and $2^{2}=4$. One counterexample ends the question.

Notice that $a^{2} \\bmod 2$ would be well-defined. Whether information descends depends on the codomain and equality used there.

## 4. The factorization principle

The representative test has a useful structural form.

**Theorem 20.2 (Factorization).** Let $q:X\\to X/\\sim$ be the quotient map and $f:X\\to Y$. There exists a unique function $F:X/\\sim \\to Y$ satisfying

$$f = F∘q$$

if and only if $x\\sim x'$ implies $f(x)=f(x')$.

**Proof.** If $f=F∘q$ and $x\\sim x'$, then $q(x)=q(x')$; hence

$$f(x)=F(q(x))=F(q(x'))=f(x')$$

Conversely, assume $f$ is constant on classes. Set $F([x])=f(x)$. The representative test proves this is well-defined, and then $(F∘q)(x)=F([x])=f(x)$. For uniqueness, if $G∘q=f$, then every quotient element is $[x]=q(x)$ for some $x$, and

$$G([x])=G(q(x))=f(x)=F([x])$$

Thus $G=F$. ∎

The quotient is therefore the most economical domain through which every class-constant function factors. This is sometimes called a universal property, but the proof above is the important content: existence is well-definedness, and uniqueness is surjectivity of $q$.

### Worked example 4: length descends to words modulo rearrangement

Fix an alphabet. Declare two finite words equivalent when one is a rearrangement of the other, meaning each letter occurs equally many times in both. The length function $\\ell(word)$ is constant on each class because the sum of all letter counts is unchanged. Thus there is a unique function on rearrangement classes sending a class to its common word length.

The first-letter function does not descend. $AB$ and $BA$ are equivalent but have different first letters. The quotient retains multiplicities and discards positions; any descended function may use the retained data but cannot depend on discarded order.

## 5. Operations require compatibility in every input

Suppose $X$ has a binary operation $*$, and we propose

$$[x] \\mathbin{\\star} [y] = [x*y]$$

There are now two representative choices. The necessary condition is

$x\\sim x' \\land y\\sim y'$ imply $x*y \\sim x'*y'$.

An equivalence relation satisfying this condition is a **congruence** for the operation. When compatibility holds, the operation descends to the quotient.

**Theorem 20.4 (Descent for binary operations).** If $\\sim$ is a congruence for $*$, then $[x]\\mathbin{\\star}[y]=[x*y]$ is a well-defined binary operation on $X/\\sim$.

**Proof.** Each quotient input can be renamed: $[x]=[x']$ and $[y]=[y']$ exactly when $x\\sim x'$ and $y\\sim y'$. Congruence gives $x*y\\sim x'*y'$, hence $[x*y]=[x'*y']$. The output is a class in $X/\\sim$, so the rule is both well-defined and closed. ∎

Equations satisfied by $*$ descend. For example, if $*$ is associative, then

$$([x]\\mathbin{\\star}[y])\\mathbin{\\star}[z]=[(x*y)*z]=[x*(y*z)]=[x]\\mathbin{\\star}([y]\\mathbin{\\star}[z])$$

This proof uses well-definedness already established; algebraic manipulation alone cannot replace it.

### Worked example 5: arithmetic modulo $n$

Fix $n\\ge 1$ and define $a\\equiv b (mod n)$ when $n$ divides $a-b$. Suppose $a\\equiv a'$ and $b\\equiv b'$. Write $a-a'=nr$ and $b-b'=ns$. Then

$$(a+b)-(a'+b')=n(r+s)$$

so addition is compatible. Also

$$ab-a'b'=a(b-b')+b'(a-a')=n(as+b'r)$$

so multiplication is compatible. Therefore

$[a]+[b]=[a+b]$ and $[a][b]=[ab]$

are well-defined on the $n$ residue classes.

For $n=5$, $[3]+[4]=[7]=[2]$ and $[3][4]=[12]=[2]$. Choosing $-2$ instead of $3$ and $9$ instead of $4$ yields sum $7$ and product $-18$, still in class $[2]$. The compatibility proof covers all choices; the calculation merely illustrates it.

### Worked example 6: an equivalence that is not a congruence

On integers define $a\\sim b$ when $|a|=|b|$. This is an equivalence relation. Try to descend addition by $[a]\\mathbin{\\star}[b]=[a+b]$. Since $1\\sim -1$ and $1\\sim 1$, compatibility would require $1+1 \\sim -1+1$. But $2$ is not equivalent to $0$. Hence addition does not descend.

The failure is not that the classes are poorly defined; the equivalence is valid. It is that this equivalence forgets signs while addition depends on their interaction.

## 6. Inherited predicates also need invariance

One may propose a predicate on classes: “$[x]$ has property $P$ if $x$ has property $P$.” This is well-defined only if $P(x)$ and $P(x')$ have the same truth value whenever $x\\sim x'$.

Under congruence modulo $4$, “is even” descends because numbers differing by a multiple of $4$ have the same parity. “Is positive” does not: $1\\equiv-3 (mod 4)$, but one is positive and one is not.

Relations require compatibility in both coordinates. A proposed relation

$[x] R [y]$ exactly when $x S y$

is well-defined only when changing either representative preserves the truth of $S$. Ordinary integer order does not descend modulo $n$: modulo $5$, $[1]=[6]$, yet $1\\le 3$ is true while $6\\le 3$ is false.

## 7. Choosing representatives

A **system of representatives** or **transversal** for $X/\\sim$ is a subset $T\\subseteq X$ meeting every equivalence class in exactly one element. Then the restriction $q|_{T}:T\\to X/\\sim$ is a bijection.

For a finite set, representatives can be chosen by selecting one element from each block. For infinitely many classes, the statement that every partition has a transversal is a genuine choice principle; we will not assume or prove its most general form here. Many concrete quotients come with an explicit selection rule.

A **canonical representative** is a representative determined unambiguously by specified structure rather than an unstated arbitrary choice. “Canonical” is relative to the available data. If $X$ has a total order and each class has a least element, choosing that least element is canonical relative to the order.

**Proposition 20.3 (Least-representative).** Let $(X,\\le )$ be well-ordered, meaning every nonempty subset has a least element. Every equivalence class has a unique least member, and the set of these least members is a transversal.

**Proof.** Each class is nonempty, so well-ordering gives a least member. A class cannot have two distinct least members: if both $a$ and $b$ were least, then $a\\le b$ and $b\\le a$, and antisymmetry gives $a=b$. Distinct classes are disjoint, so their least members differ. Thus exactly one chosen member lies in each class. ∎

For congruence modulo $n\\ge 1$, every class contains exactly one integer in $\\{0,1,\\ldots,n-1\\}$. Existence follows from integer division $a=qn+r$ with $0\\le r<n$. If $r$ and $s$ in that interval are congruent, $n$ divides $r-s$, while $|r-s|<n$; hence $r=s$.

### Worked example 7: canonical binary necklaces

Consider length-five binary strings equivalent under cyclic rotation. Each class is finite. Order strings lexicographically using $0<1$, and choose the least rotation as canonical representative.

For $10100$, the rotations are

$$10100, 01001, 10010, 00101, 01010$$

The least is $00101$. Thus every input rotation normalizes to the same output. Some strings have fewer than five distinct rotations—for instance $00000$—but taking a set of rotations removes duplicates, and a finite nonempty set still has one least member.

This normalization solves equality testing: two necklaces are equivalent exactly when their canonical strings agree. It does not imply that the canonical string has special mathematical importance beyond the selected lexicographic convention.

## 8. Normalization and idempotence

A **normalization map** for a quotient is a function $N:X\\to X$ such that

1. $N(x)\\sim x$ for every $x$;
2. $x\\sim y$ implies $N(x)=N(y)$.

Its image contains exactly one member of every class. Moreover $N$ is idempotent:

$$N(N(x))=N(x)$$

Indeed $N(x)\\sim x$, so class constancy gives $N(N(x))=N(x)$. Conversely, a chosen transversal $T$ defines a normalization by sending every element to the unique point where its class meets $T$.

Normalization separates two tasks. The quotient map sends an element to an abstract class; normalization sends it to a concrete representative in the original set. Confusing them causes type errors: $[x]$ is generally a subset of $X$, while $N(x)$ lies in $X$.

Computationally, a normalization routine should be tested for class preservation, class constancy, and idempotence. Idempotence alone is insufficient: the constant map is idempotent but cannot normalize a quotient with several classes while preserving classes.

### Comparing two quotient descriptions

Sometimes the same classification is presented by different raw objects. Suppose $\\sim$ is an equivalence relation on $X$, $\\approx$ is one on $Y$, and $f:X\\to Y$ respects them:

$x\\sim x'$ implies $f(x)\\approx f(x')$.

Then $f$ induces a well-defined function

$f̄:X/\\sim \\to Y/\\approx$, $f̄([x])=[f(x)]$.

The proof is exactly the representative test: replacing $x$ by $x'$ produces equivalent outputs, hence the same output class. This induced map need not inherit injectivity or surjectivity from superficial features of the formula, so both properties should be checked at the class level.

There are useful exact criteria. The induced map $f̄$ is injective precisely when

$f(x)\\approx f(x')$ implies $x\\sim x'$.

It is surjective precisely when every $y\\in Y$ is equivalent to some $f(x)$. These statements follow by expanding equality of quotient classes. Together they say that $f̄$ is a bijection when $f$ preserves and detects equivalence and reaches every target class.

For example, map an integer $a$ to its parity word: $E$ if $a$ is even and $O$ if it is odd. Quotient integers modulo $2$, and give $\\{E,O\\}$ the equality relation. The induced map sends $[0]$ to $E$ and $[1]$ to $O$; it is a bijection even though the raw map from infinitely many integers to two words is not injective. Quotient injectivity asks whether equal *classified outputs* came from equal *input classes*, not whether raw representatives coincide.

This construction composes cleanly. If $f:X\\to Y$ and $g:Y\\to Z$ respect the relevant equivalences, then the map induced by $g∘f$ equals $ḡ∘f̄$, because both send $[x]$ to $[g(f(x))]$. This gives a reliable way to build a complicated quotient map from checked stages.

## 9. Counting quotient classes

For finite $X$, the quotient classes form a partition, so

$$|X| = \\sum_{C\\in X/\\sim } |C|$$

If every class has the same size $m$, then $|X/\\sim |=|X|/m$. Equal class size must be proved, not guessed from one example. Rotation classes of strings can have different sizes because some strings have nontrivial periods.

If a finite set carries a function $f:X\\to Y$, the relation $x\\sim y$ when $f(x)=f(y)$ has classes equal to the nonempty fibers. The quotient $X/\\sim$ is in bijection with the image $f(X)$: send $[x]$ to $f(x)$. This is well-defined by the definition of the relation, injective because equal values mean equal classes, and surjective onto the image.

### Worked example 8: quotient by a statistic

Let $X=P(\\{1,2,3,4\\})$ and define $A\\sim B$ when $|A|=|B|$. The possible cardinalities are $0,1,2,3,4$, so there are five classes. Their sizes are $1,4,6,4,1$, which sum to $16=2^{4}$. The map $[A]\\mapsto |A|$ is a bijection from the quotient to $\\{0,1,2,3,4\\}$. Choosing a canonical representative requires an additional convention; for example, the least $k$-element subset in lexicographic order.

## 10. Common errors and repair strategies

1. **Treating $[x]$ as the element $x$.** Track types: $x\\in X$, while $[x]\\in X/\\sim$ and $[x]\\subseteq X$.
2. **Checking only one convenient representative.** Well-definedness quantifies over every equivalent replacement.
3. **Checking one input of a binary operation.** Both representatives may change; state the two-coordinate compatibility implication.
4. **Assuming equivalence implies congruence.** Compatibility is extra structure, as absolute-value classes show.
5. **Using the desired algebra before proving descent.** First prove the quotient operation is a function; only then verify equations.
6. **Calling a representative canonical without naming the rule.** Specify the order, reduction procedure, or structural property that forces uniqueness.
7. **Assuming each orbit has full size.** Symmetry may fix objects and shrink classes.
8. **Confusing normalization with classification.** A normal form is useful only after proving equivalent inputs get the same form and inequivalent inputs do not.
9. **Descending an order automatically.** Relations and predicates need invariance just as functions do.
10. **Proving only idempotence of a normalizer.** Also prove class preservation and constancy on classes.
11. **Assuming a raw injection is the only route to quotient injection.** Use the class-level detection criterion; many-to-one raw maps can induce bijections after quotienting.

## 11. Exercises with fully worked solutions

### DM-CH09-E001 — equality of classes

Let $\\sim$ be an equivalence relation on $X$. Prove that if $[a]\\cap [b]\\ne \\varnothing$, then $[a]=[b]$, without citing the class equality theorem.

#### DM-CH09-E001 — Solution

Choose $c\\in [a]\\cap [b]$. Then $c\\sim a$ and $c\\sim b$. Symmetry gives $a\\sim c$, and transitivity yields $a\\sim b$. If $x\\in [a]$, then $x\\sim a\\sim b$, so $x\\in [b]$; hence $[a]\\subseteq [b]$. Similarly $b\\sim a$, so the same argument gives $[b]\\subseteq [a]$. Therefore $[a]=[b]$.

### DM-CH09-E002 — a descended function

On $Z$, let $a\\sim b$ when $a-b$ is divisible by $6$. Determine whether $F([a])=\\gcd(a,6)$ is well-defined.

#### DM-CH09-E002 — Solution

If $a\\sim b$, then $a=b+6k$. A positive integer divides both $a$ and $6$ exactly when it divides both $b+6k$ and $6$. If it divides $b$ and $6$, it divides $a$; conversely, if it divides $a$ and $6$, it divides $a-6k=b$. Thus $a$ and $b$ have the same common positive divisors with $6$, and therefore the same greatest common divisor with $6$. The rule is well-defined.

### DM-CH09-E003 — detect ambiguity

On nonzero integers, define $a\\sim b$ when $a$ and $b$ have the same sign. Does $H([a])=|a|$ define a quotient function?

#### DM-CH09-E003 — Solution

No. The positive integers all form one class, but representatives $1$ and $2$ would give outputs $1$ and $2$. Although absolute value ignores the sign symbol, it does not ignore magnitude, while this quotient discards magnitude. A single class receiving unequal values proves ambiguity.

### DM-CH09-E004 — subtraction modulo $n$

For $n\\ge 1$, prove $[a]-[b]=[a-b]$ is well-defined modulo $n$.

#### DM-CH09-E004 — Solution

Suppose $a\\equiv a'$ and $b\\equiv b' (mod n)$. Then $a-a'=nr$ and $b-b'=ns$ for integers $r,s$. Hence

$$(a-b)-(a'-b')=(a-a')-(b-b')=n(r-s)$$

Thus $a-b\\equiv a'-b' (mod n)$, exactly the required two-input compatibility. Therefore changing either representative leaves the output class unchanged.

### DM-CH09-E005 — order does not descend

Attempt to define $[a]\\le [b]$ modulo $3$ when $a\\le b$ as integers. Give two representative choices for the same pair of classes that produce opposite truth values.

#### DM-CH09-E005 — Solution

Consider classes $[0]$ and $[1]$. Using representatives $0$ and $1$, the statement $0\\le 1$ is true. But $3\\in [0]$ and $1\\in [1]$, while $3\\le 1$ is false. Thus the truth value depends on representatives, and the proposed relation is not well-defined.

### DM-CH09-E006 — quotient by fibers

Let $f:X\\to Y$, and define $x\\sim y$ iff $f(x)=f(y)$. Prove that $\\Phi:X/\\sim \\to f(X)$ given by $\\Phi([x])=f(x)$ is a bijection.

#### DM-CH09-E006 — Solution

If $[x]=[x']$, then $x\\sim x'$, so $f(x)=f(x')$; hence $\\Phi$ is well-defined. If $\\Phi([x])=\\Phi([y])$, then $f(x)=f(y)$, so $x\\sim y$ and $[x]=[y]$; thus $\\Phi$ is injective. Every $z\\in f(X)$ equals $f(x)$ for some $x\\in X$, and then $z=\\Phi([x])$; thus it is surjective. Therefore $\\Phi$ is bijective.

### DM-CH09-E007 — canonical residues

Prove that every congruence class modulo $n\\ge 1$ contains exactly one integer $r$ with $-\\lfloor n/2\\rfloor \\le r<\\lceil n/2\\rceil$.

#### DM-CH09-E007 — Solution

The interval contains $n$ consecutive integers. Given $a$, apply division to $a+\\lfloor n/2\\rfloor$: write it as $qn+s$ with $0\\le s<n$. Put $r=s-\\lfloor n/2\\rfloor$. Then $r$ lies in the stated interval and differs from $a$ by a multiple of $n$, proving existence. If two integers $r,r'$ in the interval are congruent, then $n$ divides $r-r'$. Their difference has absolute value less than $n$, so it must be zero. Hence $r=r'$, proving uniqueness.

### DM-CH09-E008 — normalization criterion

Suppose $N:X\\to X$ satisfies $N(x)\\sim x$ and $N(x)=N(y)$ whenever $x\\sim y$. Prove that $N(x)=N(y)$ if and only if $x\\sim y$.

#### DM-CH09-E008 — Solution

The forward implication needs the class-preservation condition. If $N(x)=N(y)=z$, then $z\\sim x$ and $z\\sim y$. Symmetry gives $x\\sim z$, and transitivity gives $x\\sim y$. The reverse implication is the assumed constancy. Thus equality of normal forms decides equivalence exactly.

### DM-CH09-E009 — product quotients

Let $\\sim _{A}$ and $\\sim _{B}$ be equivalence relations on $A$ and $B$. On $A\\times B$, define $(a,b)\\approx(a',b')$ iff $a\\sim _{A} a'$ and $b\\sim _{B} b'$. Prove that $(A\\times B)/\\approx$ is in bijection with $(A/\\sim _{A})\\times (B/\\sim _{B})$.

#### DM-CH09-E009 — Solution

First, coordinatewise reflexivity, symmetry, and transitivity show that $\\approx$ is an equivalence relation. Define

$$F([(a,b)])=([a],[b])$$

If $(a,b)\\approx(a',b')$, then $[a]=[a']$ and $[b]=[b']$, so $F$ is well-defined. It is surjective because any pair of classes $([a],[b])$ is the image of $[(a,b)]$. If $F([(a,b)])=F([(a',b')])$, equality in both coordinates gives $a\\sim _{A} a'$ and $b\\sim _{B} b'$, hence the input classes agree. Thus $F$ is injective and therefore bijective.

### DM-CH09-E010 — rotations and class sizes

List the rotation classes of binary strings of length $3$, choose the lexicographically least representative of each, and verify the class-size sum.

#### DM-CH09-E010 — Solution

The strings $000$ and $111$ are each fixed by every rotation, giving singleton classes with representatives $000$ and $111$. Rotations of $001$ are $\\{001,010,100\\}$, with representative $001$. Rotations of $011$ are $\\{011,110,101\\}$, with representative $011$. These four disjoint classes contain $1+1+3+3=8=2^{3}$ strings, so they exhaust the set. The quotient has four elements, but its classes do not all have the same size.

## Chapter summary and connections

A quotient turns equivalence classes into elements and the quotient map records exactly which distinctions were forgotten. A representative formula descends precisely when it is constant on classes; a binary operation descends when the equivalence is compatible in both inputs. The factorization theorem packages this obligation and proves uniqueness. Canonical representatives provide concrete normal forms when a specified rule gives one unique element per class, and equality of valid normal forms decides equivalence.

These ideas point backward to partitions, inverse images, and closure. They point forward to finite orders, where collapsing mutually reachable elements produces a poset; to enumeration, where quotient classes count objects up to symmetry; to graphs, where contraction compresses structure; and to algebra, where congruences create new systems with inherited operations. In every setting the same discipline applies: identify what is forgotten, then prove that every claimed output depends only on what remains.
`;export{e as default};