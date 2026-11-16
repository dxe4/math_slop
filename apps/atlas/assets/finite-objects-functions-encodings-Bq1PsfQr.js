var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: finite-objects-functions-encodings
title: "Finite Objects, Functions, Relations, and Encodings"
level: undergraduate
estimated_minutes: 115
license: CC BY-SA 4.0
---

# Finite Objects, Functions, Relations, and Encodings

Programs store bit strings, arrays, records, and pointers. Mathematics lets several representations stand for the same abstract object. The central discipline is to specify the encoding and prove that operations respect its meaning.

**Learning purpose.** This chapter turns the contract language of Chapter 1
into a vocabulary for finite computational objects. You should leave able to
choose an abstract value, a concrete encoding, an equality relation, and a size
measure without silently confusing them. Local prerequisite: the quantifier
and counterexample ideas of the previous chapter.

## 1. Finite sets as extensional objects

A set is determined by membership, not order or repetition. $\\{a,b\\}$ equals $\\{b,a,a\\}$. A list is different: order and multiplicity matter. Confusing the two breaks both algorithms and specifications.

For finite sets $A,B$, union contains elements in either; intersection contains elements in both; difference $A\\setminus B$ contains elements in $A$ not $B$. The power set $P(A)$ contains all subsets and has $2^\\lvert A\\rvert$ elements.

That exponential is computationally significant. Enumerating “all subsets” is not an innocent loop: a 60-element set has more than a quintillion subsets.

## 2. Tuples, products, and records

An ordered pair $(a,b)$ remembers position. The Cartesian product $A\\times B$ contains every such pair with first coordinate in $A$ and second in $B$. If $A,B$ are finite, $\\lvert A\\times B\\rvert=\\lvert A\\rvert\\lvert B\\rvert$.

A record type is a labeled product. A system state might be

$State = Position \\times Queue \\times BooleanFlags$.

An invariant selects the valid subset of this product. For example, a queue’s recorded length must equal the number of abstract elements and stay within capacity.

## 3. Functions and partial functions

A total function $f:A\\to B$ assigns exactly one $B$-value to every $A$-input. A partial function may be undefined on some inputs. Division on integer pairs is partial when the divisor can be zero. An implementation can model partiality by an option result, an error value, or an explicit precondition.

Injective functions do not merge distinct inputs. Surjective functions reach every codomain value. Bijective functions have inverses. For finite sets of equal size, injection, surjection, and bijection imply one another; this finiteness hypothesis matters.

Composition corresponds to pipelines. If $f:A\\to B$ and $g:B\\to C$, then $g\\circ f:A\\to C$. The intermediate types are proof obligations: a parser’s output must belong to the evaluator’s input domain.

## 4. Relations and graph views

A binary relation $R$ from $A$ to $B$ is a subset of $A\\times B$. On one set, properties include:

- reflexive: $aRa$ for every $a$;
- symmetric: $aRb$ implies $bRa$;
- antisymmetric: $aRb$ and $bRa$ imply $a=b$;
- transitive: $aRb$ and $bRc$ imply $aRc$.

An equivalence relation is reflexive, symmetric, and transitive; it partitions a set into equivalence classes. A partial order is reflexive, antisymmetric, and transitive; its diagram records precedence without inventing comparisons between incomparable elements.

A directed graph is a set of vertices with an edge relation. A database table, transition system, and dependency graph are therefore instances of the same mathematical form, but their relation properties differ.

## 5. Closures compute implied structure

The reflexive transitive closure $R*$ relates $a$ to $b$ when a path of zero or more $R$ steps connects them. Reachability is a closure operation.

For a finite graph, Warshall’s dynamic program uses invariant:

> After stage $k$, table entry $(i,j)$ is true exactly when a path from $i$ to $j$ exists whose intermediate vertices come from the first $k$ vertices.

The update allows paths avoiding vertex $k$ or decomposing through it. This is a precise example of replacing unbounded path search by a finite inductive state.

## 6. Encodings and size

An encoding maps abstract objects to finite strings. It should be unambiguous and effectively decodable for algorithmic use. Several encodings can represent the same graph:

- adjacency matrix: $n^{2}$ Boolean entries;
- adjacency lists: roughly $n+m$ vertex and edge records;
- edge list: $m$ endpoint pairs plus vertex information.

Matrix scanning may cost $\\Theta(n^{2})$ even for a sparse graph. List traversal can cost $\\Theta(n+m)$. Complexity statements inherit representation choices.

Canonical encoding assigns one representation to each abstract object, making equality easy but possibly expensive to compute. Noncanonical encodings require an equivalence relation: two syntax trees may differ while denoting the same associative expression.

## 7. Countability and programs

Every finite string over a finite alphabet can be ordered first by length, then lexicographically. Thus programs described by finite strings form a countable set. Infinite binary sequences are uncountable by diagonalization, so most such sequences cannot be generated by any finite program.

This cardinality observation is not an algorithm for finding a particular uncomputable sequence. Existence and explicit construction remain different demands.

## 8. Algebraic data types and induction principles

A recursively generated tree can be defined by constructors:

- $Leaf(value)$ is a tree;
- if $left,right$ are trees, then $Node(left,right)$ is a tree.

Structural induction follows the constructors. To prove property $P$ for every tree, prove it for each leaf and prove that $P(left)$ and $P(right)$ imply $P(Node(left,right))$.

Define size by $size(Leaf)=1$ and $size(Node(l,r))=1+size(l)+size(r)$. Define leaf count similarly. Structural induction can prove every full binary tree has odd size: leaves have size one; combining two odd subtree sizes plus one gives odd.

## 9. Quotients and implementation identity

Sometimes multiple concrete values intentionally represent one abstract value. Rational pairs $(p,q)$ with $q\\ne 0$ represent the same rational when $ps=qr$ for pairs $(p,q),(r,s)$. Reducing by gcd and requiring the denominator to be positive chooses a canonical representative, but equality can also be checked by cross multiplication with overflow care.

In programming, case-insensitive identifiers, normalized paths, alpha-equivalent bound variables, and graph isomorphism all involve quotienting by an equivalence relation. Hashing or ordering such values must respect equivalence: equal abstract values need equal hashes.

## 10. Representation maps and commuting operations

Let $C$ be valid concrete states and $A$ abstract values. An abstraction map
$\\alpha:C\\to A$ explains what a representation means. A concrete operation
$op_{C}:C\\to C$ correctly implements abstract $op_{A}:A\\to A$ when the diagram commutes:

\\[\\alpha(op_{C}(c)) = op_{A}(\\alpha(c))\\]

for every valid $c$, with preconditions and failure cases added when operations
are partial.

For a bit-vector representation of a subset of universe
$U=\\{u_{0},\\ldots,u_{n-1}\\}$, define $\\alpha(bits)=\\{u_{i}:bits[i]=1\\}$. Concrete bitwise
OR implements set union because for every $u_{i}$, the output bit is one exactly
when the bit is one in the left or right input, exactly the membership rule for
union. This elementwise biconditional is the proof, not merely resemblance of
the symbols \`OR\` and \`union\`.

The same bit vector can encode a binary integer under a different abstraction
map. Representation has no meaning without its map.

## 11. Encodings need parsing boundaries

Suppose natural numbers are encoded in decimal without leading zeros except
for zero, separated by commas. Sequence $[2,34]$ encodes as $2,34$. If commas
are omitted, $234$ could mean $[2,34]$, $[23,4]$, or $[234]$. An injective
encoding prevents this ambiguity.

Length-prefix encoding writes each component’s length before the component;
delimiter encoding reserves or escapes a symbol. A decoder must reject malformed
lengths, invalid escapes, trailing data, and noncanonical alternatives if
canonical identity matters.

**Prefix-free** codewords have no codeword as prefix of another. This permits
instantaneous sequential decoding. Unique decodability is more general: a
stream may still have one factorization even if no codeword boundary is known
immediately. Do not substitute one property for the other.

## 12. Worked proof: adjacency-list breadth-first search

Represent a finite directed graph by an array whose entry for vertex $u$ lists
exactly its outgoing neighbors. The abstraction map turns list entries into the
edge relation. Structural validity requires every named neighbor be a declared
vertex. In the representation used for the following $\\Theta(\\lvert V\\rvert+
\\lvert E\\rvert)$ scan, each outgoing neighbor occurs at most once, so stored
entries correspond one-to-one with abstract edges. An implementation that
permits duplicates must instead count stored entries, say $M$, and state its
bound as $\\Theta(\\lvert V\\rvert+M)$.

Breadth-first search keeps queue $Q$, discovered set $D$, and distance $d$.
The representation invariant includes:

1. every queued vertex lies in $D$;
2. every discovered non-source vertex has a parent edge from a vertex with
   distance one less;
3. queue distances are nondecreasing;
4. every processed vertex has had every list entry examined.

The parent chain proves each recorded $d(v)$ is an achievable path length. For
minimality, suppose the first removed vertex whose distance is not minimal is
$v$. Take a shortest path and its predecessor $u$. Then $d(u)$ is smaller, so
$u$ was removed earlier and its adjacency list would discover $v$ at distance
at most $d(u)+1$, contradiction.

With valid adjacency lists, each vertex enters once and each stored edge is
examined once, giving $\\mathcal{O}(\\lvert V\\rvert+\\lvert E\\rvert)$. With an adjacency matrix, scanning each
processed row gives $\\mathcal{O}(\\lvert V\\rvert^{2})$. The abstract graph and algorithmic idea are the
same; encoding changes the cost proof.

## 13. Sparse, dense, and implicit objects

A matrix with mostly zero entries can be stored densely, by nonzero triples, or
by compressed rows. A graph can be stored explicitly or by a successor
function that generates neighbors.

An implicit state system with $k$ Boolean variables can describe $2^k$ states
using a compact transition rule. Saying its input has size $k$ while an
algorithm enumerates every state yields exponential $\\mathcal{O}(2^k)$ behavior, even if
each successor calculation is cheap.

This distinction appears in games, model checking, dynamic programming, and
quantum simulation. A compact description is not a compact explicit state
space.

## 14. Equivalence, canonicalization, and hashing

Assume a key type has equivalence $\\sim$. A hash function used in an equality-based
table must satisfy

$x\\sim y \\implies hash(x)=hash(y)$.

The converse need not hold; collisions are allowed and resolved with an
equality check. If equal abstract values hash differently, lookup may fail even
though equality would say the key is present.

Canonicalization chooses representative \`canon(x)\` with:

- $canon(x)\\sim x$;
- $x\\sim y$ implies \`canon(x)=canon(y)\`;
- applying canonicalization twice changes nothing.

Sorting members can canonicalize a finite set only when there is a stable total
order and duplicates are removed. Lowercasing text is not a universal
canonicalization for human-language identity; the equivalence itself must be
specified.

## 15. Cardinality as an impossibility tool

If finite sets $A,B$ have $\\lvert A\\rvert>\\lvert B\\rvert$, no injection $A\\to B$ exists. Therefore any
lossless fixed-length encoding of all $n$-bit strings needs at least $n$ bits:
there are $2^n$ inputs but fewer than $2^n$ shorter fixed-length outputs.

Compression succeeds by using variable lengths, restricting the source set,
or allowing loss/error. A compressor cannot map every $n$-bit input to a
strictly shorter distinct output. The proof is pigeonhole, not a statement
that a particular structured file cannot compress.

Likewise, storing one of $m$ equally possible states needs at least
$\\left\\lceil \\log_{2}m \\right\\rceil$ binary bits in a fixed-length injective code. This is a counting
lower bound before runtime or hardware details enter.

## 16. Round-trip laws for encoders and decoders

An encoder $encode:A\\to Strings$ and partial decoder $decode:Strings⇀A$ need more
than example round trips. The central correctness law is

$decode(encode(a))=a$ for every $a \\in A$.

This says encoding never loses abstract information. It implies that \`encode\`
is injective: if \`encode(a)=encode(b)\`, applying \`decode\` gives $a=b$.

The reverse equation needs care. For every **canonical valid** string $s$, one
may require

$encode(decode(s))=s$.

If several strings intentionally represent one object, the right side instead
becomes \`canonicalize(s)\`. For example, if leading zeroes are accepted for
natural numbers, decoding $007$ gives seven and re-encoding might give $7$.
The first round-trip law holds; literal reverse round trip does not.

Consider a sequence encoding that writes $length:payload$ for each component.
Encoding \`['ab','c']\` as \`2:ab1:c\` is uniquely scanned when lengths count the
same units as the decoder—bytes if the parser advances bytes, code points if it
advances code points. A proof of round trip proceeds by induction on sequence
length. The empty sequence maps to the empty stream. For a nonempty sequence,
the first prefix gives exactly the first payload; the induction hypothesis
decodes the remaining concatenation. Malformed negative lengths, truncated
payloads, nonnumeric prefixes, and trailing fragments belong outside the
decoder domain and should be rejected explicitly.

This theorem is also a security boundary. A parser that silently accepts two
encodings for a signed message while a verifier canonicalizes only one can
create disagreement about what was authenticated.

## 17. Product states turn comparison into reachability

Suppose deterministic finite machines $M$ and $N$ read the same alphabet. A
pair $(p,q)$ records their states after the same input prefix. The product
transition is

$(p,q) --a-\\to (\\delta_{M}(p,a),\\delta_{N}(q,a))$.

Induction on word length proves the **product invariant**: after word $w$, the
product state equals $(\\delta_{M}*(p0,w),\\delta_{N}*(q0,w))$. Therefore the two
machines disagree on some word exactly when a reachable product state has one
accepting component and one rejecting component.

For finite machines, breadth-first search from the initial pair decides this
question. If it reaches a disagreement, parent pointers reconstruct a word;
the product invariant proves that word is a genuine distinguishing witness. If
search exhausts all reachable pairs without disagreement, every word ends in
an agreement pair, so the languages are equal. That last conclusion covers
infinitely many words because every word maps into the finite reachable product.

There are at most $\\lvert Q_{M}\\rvert\\lvert Q_{N}\\rvert$ pairs. A shortest path is simple, so when a
witness exists one has length less than the number of reachable product states.
This is both a termination bound and a finite upper bound for exhaustive
testing—provided the transition tables were first validated as total functions.

The same product idea compares an implementation state with a specification
state, combines a system with a monitor for forbidden behavior, and synchronizes
protocol participants. State explosion is the price: multiplying compact
components can produce a huge explicit graph.

## 18. Value size is not encoding length

An integer $W$ written in binary has length $\\left\\lfloor \\log_{2}W \\right\\rfloor+1$ when $W>0$.
Consequently an algorithm taking $\\mathcal{O}(nW)$ steps is not polynomial in the binary
input length; it can be exponential in $\\log W$. Such a bound is often called
**pseudopolynomial**.

For example, a table indexed by every total $0,\\ldots,W$ may solve a bounded-sum
problem in $\\mathcal{O}(nW)$ operations. If $W=2^k$, the numeric table has exponentially
many columns compared with the $k+1$ bits used to write $W$. If $W$ were encoded
in unary, the same running time would be polynomial in input length. Complexity
belongs to an encoding, not just an abstract number.

Bit cost matters even when the number of loop iterations is small. Repeated
squaring uses $\\mathcal{O}(\\log e)$ multiplications to form $x^e$, but the operands can
grow to $\\Theta(e \\log \\lvert x\\rvert)$ bits. A unit-cost arithmetic model and a bit-operation
model support different theorems. Neither is intrinsically wrong; the model
must be declared and suited to the claim.

## Worked audit: deterministic transition table

Let states be $\\{0,1,2\\}$, alphabet $\\{a,b\\}$, and transition table $\\delta$. A table row per state and column per symbol represents a total function only if every cell contains exactly one valid state. Missing cells make it partial; multiple destinations make it a relation or nondeterministic transition.

Encode a run on word $abba$ as repeated function application. The invariant after prefix length $i$ is that stored state equals the extended transition $\\delta*(q0, word[0..i))$. This connects a mutable loop variable to the abstract function.

## Common errors

- Treating a list as a set and silently dropping duplicates.
- Calling a relation a function when one input has several outputs.
- Using antisymmetric as a synonym for “not symmetric.”
- Claiming an algorithm is linear without naming its encoding.
- Defining equality for a quotient representation but giving an inconsistent hash.
- Proving a recursive-tree property only for balanced trees.


## Worked example 1: interpreting the same bits correctly

Let the ordered universe be $U=(red,green,blue)$. Under the subset abstraction, bit vector $101$ represents $\\{red,blue\\}$ and $011$ represents $\\{green,blue\\}$. Their bitwise OR is $111$, representing the union $U$. Their bitwise AND is $001$, representing the intersection $\\{blue\\}$. For each coordinate, OR produces one exactly when at least one input contains that universe member. The membership conditions therefore prove the union law for every pair of bit vectors of this length, not merely the two displayed inputs.

Under a binary-integer abstraction, the same three strings represent five, three and seven. The equation “OR represents union” says nothing about ordinary integer addition: five plus three is eight, outside three-bit unsigned range. The concrete operation and its abstract claim are connected by the chosen map, so reusing storage does not allow a proof about one interpretation to be transferred to another.

## Worked example 2: a self-delimiting sequence code

Write a natural number in binary, using $0$ for zero and otherwise no leading zeroes. If its payload has $k$ bits, prefix it by $k$ ones followed by a zero. Five has payload $101$ and code $1110101$; two has payload $10$ and code $11010$. Their sequence code is the concatenation $111010111010$.

To decode, count ones until the first zero, obtaining $k$, then read exactly $k$ payload bits and repeat on the remaining stream. In the displayed string the first prefix says three, recovering $101$; the next says two, recovering $10$. The decoder therefore returns $[5,2]$. A missing zero, zero-length payload request, truncated payload or forbidden leading zero is rejected. Each valid prefix fixes one exact boundary, and induction on sequence length proves the complete round-trip law. The empty sequence has the empty encoding. All lengths here count bits, so no byte-versus-character ambiguity is present.

## Worked example 3: equality of rational representations

Consider pairs $(2,4)$ and $(-3,-6)$ with nonzero denominators. Their cross products are $2(-6)=-12$ and $4(-3)=-12$, so they represent the same rational. Normalising the denominator's sign and dividing by the positive gcd sends both to $(1,2)$. A hash of their raw ordered pairs may differ, which is unsuitable if the key equality identifies equal rationals.

A consistent approach is to normalize first and hash the resulting integer pair. Equal rationals have the same reduced positive-denominator representation: if two reduced pairs satisfy $ps=qr$, coprimality forces matching numerators and denominators. For these two concrete keys, either normalization or exact cross multiplication recognizes the same value, and the hash contract follows from using the common canonical pair. Fixed-width implementations additionally need an overflow policy for products and gcd inputs; the mathematical proof assumes exact integer arithmetic.

## Practice with solutions

### Exercise 1
<a id="finite-objects-functions-encodings-ex-1"></a>

How many binary relations are there on an $n$-element set? Include $n=0$.

<details>
<summary>Hint 1</summary>

A relation chooses which ordered pairs belong.

</details>
<details>
<summary>Hint 2</summary>

There are $n^2$ ordered pairs, each independently present or absent.

</details>
<details>
<summary>Solution</summary>

1. **How many relations are there on an $n$-element set?** A relation is a subset of $A\\times A$, which has $n^{2}$ pairs, so there are $2^{n^{2}}$ relations.

The power-set count gives $2^{n^2}$. At $n=0$, the product set is empty and its only subset is the empty relation, agreeing with $2^0=1$. No symmetry, reflexivity or other law has been required; imposing such laws changes the count.

</details>

### Exercise 2
<a id="finite-objects-functions-encodings-ex-2"></a>

Why is the reflexive-transitive closure $R^*$ reflexive, even for vertices with no outgoing edge?

<details>
<summary>Hint 1</summary>

The definition permits a path of zero steps.

</details>
<details>
<summary>Hint 2</summary>

Such a path has one vertex and no edge requirement.

</details>
<details>
<summary>Solution</summary>

2. **Why is reachability reflexive in $R*$?** A path of zero steps connects every vertex to itself.

For every vertex $v$, the sequence consisting only of $v$ is a zero-length path from $v$ to itself. Hence $(v,v)\\in R^*$ independently of which pairs belong to $R$. Positive-length reachability would be a different relation and need not be reflexive.

</details>

### Exercise 3
<a id="finite-objects-functions-encodings-ex-3"></a>

Can every finite partial order be listed in an order respecting its comparisons? Give a proof.

<details>
<summary>Hint 1</summary>

Show every nonempty finite remainder has a minimal element.

</details>
<details>
<summary>Hint 2</summary>

A strictly descending chain cannot repeat and cannot exceed the number of elements.

</details>
<details>
<summary>Solution</summary>

3. **Can a finite partial order always be topologically listed?** Yes; repeatedly choose a minimal remaining element. Finiteness guarantees one exists in every nonempty remainder.

Choose a minimal element and place it first. No other element is required to precede it. Remove it and repeat, or apply induction to the smaller induced poset. The process ends after every element is removed, and each required predecessor was removed earlier. This constructs a linear extension, including the empty listing for the empty poset.

</details>

### Exercise 4
<a id="finite-objects-functions-encodings-ex-4"></a>

What storage and edge-query properties does an adjacency matrix give for a finite graph?

<details>
<summary>Hint 1</summary>

There is one cell for every ordered vertex pair.

</details>
<details>
<summary>Hint 2</summary>

A fixed-index cell answers one adjacency query without scanning neighbors.

</details>
<details>
<summary>Solution</summary>

4. **What does an adjacency matrix buy?** Constant-time edge lookup and simple dense operations, at $\\Theta(n^{2})$ storage even when few edges exist.

With vertex indices and constant-time cell access, an edge query takes constant time. The representation stores $n^2$ cells even for an edgeless graph. Enumerating all neighbors by scanning one row takes $\\Theta(n)$ cell inspections, so a full scan takes $\\Theta(n^2)$. These are representation-model statements, rather than intrinsic costs of the abstract graph.

</details>

### Exercise 5
<a id="finite-objects-functions-encodings-ex-5"></a>

For input $[a,b,a]$ with $a\\ne b$, compare its list length, its underlying set cardinality, and the effect of removing duplicates.

<details>
<summary>Hint 1</summary>

Count positions separately from distinct values.

</details>
<details>
<summary>Hint 2</summary>

Set equality discards both order and repeated occurrences.

</details>
<details>
<summary>Solution</summary>

5. **List or set?** Input $[a,b,a]$ has length three as a list and cardinality
   two as a set. A function that removes duplicates changes list equality but
   preserves its underlying set.

There are three positions, while the underlying set is exactly $\\{a,b\\}$ with two elements. Stable duplicate removal gives $[a,b]$, changing list length and list equality while preserving the underlying set. A list contract promising multiplicity preservation would therefore be violated even though a set-valued contract could be satisfied.

</details>

### Exercise 6
<a id="finite-objects-functions-encodings-ex-6"></a>

How can an integer-division interface represent division by zero honestly?

<details>
<summary>Hint 1</summary>

Decide whether to restrict the domain or describe failure in the output type.

</details>
<details>
<summary>Hint 2</summary>

Returning an ordinary integer silently does not mark undefined mathematical input.

</details>
<details>
<summary>Solution</summary>

6. **Partial function repair.** Integer division by zero is undefined.
   **Solution:** restrict the domain to nonzero divisors, or make the codomain
   an explicit success/error sum. Returning zero silently implements neither
   usual division contract.

A precondition requiring nonzero divisor gives a partial-domain interface. A total interface can instead return a tagged success value for allowed division and a tagged error for zero divisor. The usual quotient convention, such as Euclidean or truncating division, must also be stated on valid inputs. Returning untagged zero on an invalid input does not satisfy either convention without an additional explicit contract.

</details>

### Exercise 7
<a id="finite-objects-functions-encodings-ex-7"></a>

Prove that divisibility on positive integers is a partial order but is not symmetric.

<details>
<summary>Hint 1</summary>

Use factor witnesses for transitivity and positivity for antisymmetry.

</details>
<details>
<summary>Hint 2</summary>

If each of two positive numbers divides the other, multiply their quotient witnesses.

</details>
<details>
<summary>Solution</summary>

7. **Relation properties.** Divisibility on positive integers is reflexive,
   antisymmetric, and transitive, hence a partial order. It is not symmetric:
   $2$ divides $4$, while $4$ does not divide $2$.

Reflexivity uses $a=1a$. If $b=ka$ and $c=\\ell b$, then $c=(\\ell k)a$, proving transitivity. If also $a=mb$, positivity gives $1=mk$, so the positive integers $m,k$ are both one and $a=b$. Finally $2\\mid4$ but $4\\nmid2$, disproving symmetry.

</details>

### Exercise 8
<a id="finite-objects-functions-encodings-ex-8"></a>

Explain the path decomposition used in a Warshall reachability update at vertex $k$, including paths that initially revisit $k$.

<details>
<summary>Hint 1</summary>

Reachability needs existence of a path, not preservation of a repeated walk.

</details>
<details>
<summary>Hint 2</summary>

Delete cycles before splitting at the selected intermediate vertex.

</details>
<details>
<summary>Solution</summary>

8. **Closure computation.** Why does Warshall allow vertex $k$ at most once in
   its decomposition? **Solution:** a path using intermediates through $k$
   splits at one chosen occurrence into $i\\to k$ and $k\\to j$ subpaths whose other
   intermediates are from earlier stages; cycles through $k$ can be removed
   for reachability.

A reachable pair has a simple path after repeated-vertex loops are deleted. If that path uses $k$ internally, it uses it once and splits into a path to $k$ and a path from $k$, neither with $k$ as an internal vertex. Their other intermediate vertices lie among the earlier permitted vertices. If it avoids $k$, the earlier table already records it. Conversely concatenating the two recorded pieces gives a valid walk and hence reachability. Include reflexive diagonal entries when computing $R^*$.

</details>

### Exercise 9
<a id="finite-objects-functions-encodings-ex-9"></a>

Give different sequences whose component strings concatenate to $111$, and describe an unambiguous repair.

<details>
<summary>Hint 1</summary>

The concatenation does not record the internal boundaries.

</details>
<details>
<summary>Hint 2</summary>

Distinguish component delimiters from symbols allowed inside a component.

</details>
<details>
<summary>Solution</summary>

9. **Encoding ambiguity.** Give two sequences represented by $111$ when bits
   are concatenated without lengths. **Solution:** $[1,11]$, $[11,1]$, and
   $[111]$ all do. A delimiter or length prefix repairs decoding.

The sequences $[1,11]$, $[11,1]$ and $[111]$ are distinct but have the same raw concatenation. A reserved delimiter with an escaping rule, or a length prefix measured in declared units, supplies boundaries. Its decoder must prove a round-trip law and reject malformed framing; simply choosing one of the possible factorizations does not recover the original sequence.

</details>

### Exercise 10
<a id="finite-objects-functions-encodings-ex-10"></a>

Can unequal abstract keys have equal hashes? Can equal abstract keys have different hashes in a correct equality-based table?

<details>
<summary>Hint 1</summary>

A hash selects candidate locations, while equality decides whether a candidate is the key.

</details>
<details>
<summary>Hint 2</summary>

The required implication has only one direction.

</details>
<details>
<summary>Solution</summary>

10. **Hash contract.** Can unequal values share a hash? **Solution:** yes;
    collision resolution checks equality. Equal abstract values may not have
    different hashes in a correct equality-based table.

The requirement is $x\\sim y\\implies hash(x)=hash(y)$. Collisions for nonequivalent keys are allowed because equality checks separate them. If equivalent keys have different hashes, lookup may inspect a different bucket and report absence even though an equivalent key was inserted. Thus equality-compatible hashing is necessary for the usual table argument, while collision freedom is not.

</details>

### Exercise 11
<a id="finite-objects-functions-encodings-ex-11"></a>

A compact transition rule uses forty Boolean state variables. How many explicit valuations can it describe, and what does that mean for enumeration cost?

<details>
<summary>Hint 1</summary>

Each coordinate has two possible values.

</details>
<details>
<summary>Hint 2</summary>

The product rule counts all complete coordinate assignments.

</details>
<details>
<summary>Solution</summary>

11. **Implicit size.** A transition rule over 40 Boolean variables is short,
    but how many valuations exist? **Solution:** $2^{40}$; explicit enumeration
    is exponential in the compact variable count.

There are $2^{40}$ valuations. Explicitly visiting every state requires at least that many visits, even if one successor calculation is cheap and the transition rule has a short description. As the variable count $k$ varies, this is exponential $2^k$ in that compact parameter. A short implicit encoding must not be confused with a small explicit state list.

</details>

### Exercise 12
<a id="finite-objects-functions-encodings-ex-12"></a>

Prove that no injective encoding sends every eight-bit string to a binary string of length at most seven.

<details>
<summary>Hint 1</summary>

Count all shorter outputs, including the empty string.

</details>
<details>
<summary>Hint 2</summary>

Use the finite geometric sum and pigeonhole.

</details>
<details>
<summary>Solution</summary>

12. **Compression lower bound.** Why can no injective map send every 8-bit
    string to a string of at most 7 bits? **Solution:** there are 256 inputs but
    only $1+2+\\ldots+2^{7}=255$ binary strings of length at most seven, including
    the empty string.

There are $2^8=256$ inputs. The possible outputs number $\\sum_{j=0}^7 2^j=2^8-1=255$. An injection would assign distinct outputs to all 256 inputs, requiring at least 256 possible outputs. The contradiction rules out universal strict compression of this input set while preserving exact recoverability.

</details>

### Exercise 13
<a id="finite-objects-functions-encodings-ex-13"></a>

A decoder accepts $5$, $05$ and $005$ for the natural number five, while its encoder emits $5$. Which round-trip law can hold, and which literal law fails?

<details>
<summary>Hint 1</summary>

Begin with an abstract value for the first round trip.

</details>
<details>
<summary>Hint 2</summary>

Begin with a noncanonical string for the reverse direction.

</details>
<details>
<summary>Solution</summary>

13. **One-sided round trip.** A decoder accepts $5$, $05$, and $005$ as the
    same natural and the encoder emits $5$. **Solution:**
    $decode(encode(n))=n$ can hold for every natural, while
    $encode(decode(s))=s$ fails for noncanonical strings such as $05$.

For every natural $n$, decoding its encoder output can return $n$, so information about abstract values is retained. But encoding the decode of $05$ yields $5$, which differs as a string. The reverse law therefore holds only on canonical valid strings, or with canonicalisation on the right-hand side. Accepted alternatives do not by themselves make the encoder noninjective.

</details>

### Exercise 14
<a id="finite-objects-functions-encodings-ex-14"></a>

Two deterministic total finite machines over the same alphabet have three and five states. Bound the length of a shortest distinguishing word if one exists.

<details>
<summary>Hint 1</summary>

Follow the word in the product state graph.

</details>
<details>
<summary>Hint 2</summary>

A shortest path to disagreement cannot repeat a product vertex.

</details>
<details>
<summary>Solution</summary>

14. **Product witness bound.** Machines have three and five states. What
    witness-length bound follows from the full product? **Solution:** if a
    disagreement is reachable, a breadth-first simple path has length at most
    $15-1=14$; using only reachable pairs may improve this bound.

The full product has fifteen vertices. If a shortest disagreement path repeated a vertex, deleting the intervening cycle would give a shorter word reaching the same final disagreement, a contradiction. Thus a shortest witness path is simple and has at most fourteen edges, one per input symbol. Replacing fifteen by the number of reachable pairs improves the bound when some product states cannot occur.

</details>

### Exercise 15
<a id="finite-objects-functions-encodings-ex-15"></a>

An algorithm has operation bound $\\mathcal O(nB)$ with positive bound $B$ encoded in binary. Why is that not necessarily polynomial in input length?

<details>
<summary>Hint 1</summary>

The written length of $B$ is logarithmic in its value.

</details>
<details>
<summary>Hint 2</summary>

Set $B=2^k$ and compare the table width with the written parameter.

</details>
<details>
<summary>Solution</summary>

15. **Pseudopolynomial diagnosis.** An algorithm runs in $\\mathcal{O}(nB)$ for a bound
    $B$ supplied in binary. **Solution:** this is polynomial in the numeric
    value but potentially exponential in the $\\Theta(\\log B)$ encoding length.
    Calling it polynomial requires unary encoding or another restriction.

The number $2^k$ takes $k+1$ binary digits, while a table indexed by all values through $B$ has $2^k+1$ columns. Therefore the displayed operation bound can be exponential in this part of the input length. It is called pseudopolynomial. Unary encoding or a proved polynomial upper bound on $B$ in the other input parameters would support a different polynomial-time claim.

</details>

### Exercise 16
<a id="finite-objects-functions-encodings-ex-16"></a>

An encoder prefixes UTF-8 byte length while its decoder advances by Unicode code points. Explain why round trip can fail and how to repair the contract.

<details>
<summary>Hint 1</summary>

A non-ASCII code point may occupy several bytes.

</details>
<details>
<summary>Hint 2</summary>

The prefix and the scan must count the same concrete units.

</details>
<details>
<summary>Solution</summary>

16. **Decoder units.** An encoder prefixes UTF-8 byte length, while a decoder
    advances Unicode code points. **Solution:** round trip can fail on a
    multibyte character. Both sides must count the same representation units,
    and tests should include malformed and non-ASCII boundaries.

A one-code-point character can have a two-byte UTF-8 encoding. A prefix saying two bytes cannot be interpreted as a request for two code points without consuming too much data or reporting truncation. Specify byte counts and advance through bytes, then validate the decoded text, or specify code-point counts and scan code points consistently. Truncated multibyte sequences and trailing data need explicit rejection rules; examples alone do not prove the round-trip law.

</details>

## Representation-design investigation

Represent a directed graph in three ways: adjacency matrix, adjacency lists,
and a successor predicate. For each, state structural validation, abstraction
map, equality convention, storage in terms of vertices and edges, edge-query
cost, neighbor-enumeration cost, and one malformed representation. Then prove
that one traversal produces the same reachable vertex set under all three
valid representations even though its operation count differs.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=claims-counterexamples-specifications) · [Book overview](#/item/book-algorithms-computation-proof-desk)

## Sources

For a primary companion text, see Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [Mathematics for Computer Science, MIT OpenCourseWare](https://www.ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/). The original chapter text, proofs, investigations and numbered practice items are retained here; the additional examples, staged hints and developed solution explanations are new Euler exposition under the chapter licence.

## Summary

Finite sets, sequences, functions and relations have different equality and validity conditions. An encoding needs a decoding boundary, an abstraction map and a stated size measure. Quotient representations require operations and hashes to respect abstract equality. Round-trip and product-state proofs relate concrete computation to abstract meaning, while counting prevents impossible lossless encodings. The next chapter develops the induction and invariant methods used to prove those relationships for all finite inputs.
`;export{e as default};