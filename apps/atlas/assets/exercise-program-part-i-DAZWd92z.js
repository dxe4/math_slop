var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
matter_id: exercise-program-part-i
id: supplement-discrete-mathematics-proof-counting-structure-exercise-program-part-i
title: "Exercise Program, Part I: Foundations Through Games"
level: undergraduate
license: CC BY-SA 4.0
production_state: released
---

# Exercise Program, Part I: Foundations Through Games

This supplement contains 118 fully solved exercises for Chapters 1–8. It is a problem bank, not a replacement for the definitions and proofs in the chapters. Every exercise states its finite universe or other needed hypotheses. Difficulty labels describe the amount of synthesis expected: **introductory** problems rehearse one idea, **intermediate** problems combine two ideas, and **advanced** problems require proof design, a counterexample, or an exact certificate.

## Allocation

| Chapter | Subject | Introductory | Intermediate | Advanced | Total |
|---|---|---:|---:|---:|---:|
| 1 | Sets, Functions, Relations, Orders, and Closure | 5 | 5 | 5 | 15 |
| 2 | Proof, Induction, Recursion, Invariants, and Extremal Choice | 5 | 5 | 5 | 15 |
| 3 | Counting by Bijection, Decomposition, and Inclusion–Exclusion | 5 | 5 | 5 | 15 |
| 4 | Recurrences and Generating Functions | 5 | 5 | 5 | 15 |
| 5 | Graphs, Trees, and Connectivity | 5 | 5 | 5 | 15 |
| 6 | Planarity, Coloring, and Matchings | 5 | 5 | 5 | 15 |
| 7 | Probabilistic and Extremal Methods | 5 | 5 | 4 | 14 |
| 8 | Finite Games, Strategy, and a Structural Capstone | 5 | 5 | 4 | 14 |
| **Total** |  | **40** | **40** | **38** | **118** |

Diagrams are not required. Whenever a graph, order, or game tree is described, an edge list, cover list, move list, or state table supplies the plain-text equivalent.

## Chapter 1: Sets, Functions, Relations, Orders, and Closure

### DM-SP1-E001 — Boolean bookkeeping (introductory)

Let the universe be $U=\\{1,2,3,4,5,6\\}$, with $A=\\{1,2,4\\}$ and $B=\\{2,3,5\\}$. Compute $(A\\cup B)^{c}$ and $A^{c}\\cap B^{c}$, where complements are relative to $U$, and explain why the agreement is not accidental.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the union first, and keep the universe $U$ fixed when taking either complement.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For the explanation, take an arbitrary element of $U$ and translate “outside the union” into two membership conditions.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E001 — Solution

$A\\cup B=\\{1,2,3,4,5\\}$, so $(A\\cup B)^{c}=\\{6\\}$. Also $A^{c}=\\{3,5,6\\}$ and $B^{c}=\\{1,4,6\\}$, whose intersection is $\\{6\\}$. In general, an element lies outside $A\\cup B$ exactly when it lies outside both $A$ and $B$; this proves De Morgan’s law element by element.

</details>

### DM-SP1-E002 — Power-set parity (introductory)

List the subsets of $\\{p,q,r\\}$ that contain $p$. Give a bijection from this family to the subsets that do not contain $p$.

<details>
<summary>Hint 1</summary>

**Hint.** Once $p$ is included, only the choices about $q$ and $r$ remain free.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Try changing just the membership of $p$. Describe an inverse operation to prove that your map is a bijection.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E002 — Solution

The subsets containing $p$ are $\\{p\\}$, $\\{p,q\\}$, $\\{p,r\\}$, and $\\{p,q,r\\}$. Toggle membership of $p$: send $S$ to $S\\mathbin{\\triangle}\\{p\\}$. The outputs are $\\varnothing,\\{q\\},\\{r\\},\\{q,r\\}$. Toggling twice returns $S$, so the map is a bijection and the two families have equal size.

</details>

### DM-SP1-E003 — Image versus inverse image (introductory)

Define $f:\\{0,1,2,3\\}\\to \\{0,1\\}$ by $f(x)$ equal to the remainder of $x$ modulo $2$. Find $f(\\{0,1,2\\})$ and $f^{-1}(\\{0\\})$. Is $f$ injective or surjective?

<details>
<summary>Hint 1</summary>

**Hint.** An image collects output values; an inverse image collects inputs meeting an output condition.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Tabulate the four input-output pairs, then check separately whether outputs repeat and whether every codomain element occurs.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E003 — Solution

The image is $\\{0,1\\}$ because the set contains both even and odd inputs. The inverse image is $\\{0,2\\}$. Since $f(0)=f(2)$, the function is not injective. Both codomain values occur, so it is surjective.

</details>

### DM-SP1-E004 — Relation checklist (introductory)

On the integers define $aRb$ when $a-b$ is divisible by $4$. Decide whether $R$ is reflexive, symmetric, and transitive.

<details>
<summary>Hint 1</summary>

**Hint.** Write each divisibility assertion as an integer multiple of $4$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For symmetry negate the difference; for transitivity add the two differences sharing the middle integer.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E004 — Solution

It is reflexive because $a-a=0$ is divisible by $4$. If $4$ divides $a-b$, it divides $-(a-b)=b-a$, so $R$ is symmetric. If $4$ divides $a-b$ and $b-c$, it divides their sum $a-c$, so $R$ is transitive. Thus $R$ is an equivalence relation.

</details>

### DM-SP1-E005 — A small order (introductory)

Order $\\{1,2,3,6\\}$ by divisibility. List its minimal, maximal, least, and greatest elements.

<details>
<summary>Hint 1</summary>

**Hint.** In this order, “below” means “divides,” rather than ordinary numerical comparison.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For least and greatest, compare a candidate with every element; for minimal and maximal, rule out strict predecessors or successors.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E005 — Solution

The unique minimal and least element is $1$, since it divides every element. The unique maximal and greatest element is $6$, since every listed element divides $6$. The terms coincide here, but they need not do so in an arbitrary partial order.

</details>

### DM-SP1-E006 — Difference does not distribute that way (intermediate)

Test the proposed identity $A\\setminus (B\\cup C)=(A\\setminus B)\\cup (A\\setminus C)$. Give a smallest counterexample and state the correct identity.

<details>
<summary>Hint 1</summary>

**Hint.** Try a universe with one element and choose its memberships in $B$ and $C$ differently.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An element survives subtraction of $B\\cup C$ only if it survives both exclusions. Translate that requirement into a set operation.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E006 — Solution

Take $A=B=C=\\{x\\}$. The left side is empty, while the right side is $\\varnothing\\cup \\varnothing=\\varnothing$, so that does not refute it. Instead take $A=\\{x\\}$, $B=\\{x\\}$, $C=\\varnothing$: the left side is empty, while the right side is $\\varnothing\\cup \\{x\\}=\\{x\\}$. Elementwise negation of “in $B$ or $C$” gives the correct identity $A\\setminus (B\\cup C)=(A\\setminus B)\\cap (A\\setminus C)$.

</details>

### DM-SP1-E007 — Fibers and injectivity (intermediate)

For a function $f:A\\to B$, the fiber over $b$ is $f^{-1}(\\{b\\})$. Prove that $f$ is injective if and only if every fiber has at most one element.

<details>
<summary>Hint 1</summary>

**Hint.** Write out what it means for two inputs to lie in the fiber over the same $b$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Prove each implication separately, using an equality of outputs to put both inputs in one fiber in the converse direction.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E007 — Solution

If $f$ is injective and two elements $x,y$ lie in one fiber, then $f(x)=b=f(y)$, so $x=y$. Conversely, if every fiber has at most one element and $f(x)=f(y)=b$, then $x,y\\in f^{-1}(\\{b\\})$; hence $x=y$. Both directions use exactly the definition of injectivity.

</details>

### DM-SP1-E008 — Composing surjections (intermediate)

Let $f:A\\to B$ and $g:B\\to C$ be surjective. Prove that $g∘f:A\\to C$ is surjective. Does the conclusion follow if only $g$ is surjective? Give a finite counterexample.

<details>
<summary>Hint 1</summary>

**Hint.** To reach a given $c\\in C$, work backward through $g$ first and then through $f$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For the counterexample, let $g$ be an identity map on two elements and choose $f$ whose image misses one of them.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E008 — Solution

Given $c\\in C$, choose $b\\in B$ with $g(b)=c$, then choose $a\\in A$ with $f(a)=b$; thus $(g∘f)(a)=c$. If only $g$ is surjective, the conclusion can fail: take $A=\\{a\\}$, $B=\\{0,1\\}$, $C=\\{0,1\\}$, let $f(a)=0$, and let $g$ be the identity. Then $g$ is surjective but $g∘f$ misses $1$.

</details>

### DM-SP1-E009 — Partition from data (intermediate)

On $\\{0,1,2,3,4,5\\}$ let $xRy$ when $x$ and $y$ have the same parity and are either both below $3$ or both at least $3$. List the equivalence classes and verify that they partition the set.

<details>
<summary>Hint 1</summary>

**Hint.** Attach to each integer the pair of attributes “parity” and “side of $3$.”

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Group integers with identical attribute pairs, then check nonemptiness, disjointness, and coverage rather than just listing blocks.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E009 — Solution

The classes are $\\{0,2\\}$, $\\{1\\}$, $\\{3,5\\}$, and $\\{4\\}$. Each is nonempty, no two overlap, and their union is the entire set. Equality of the two recorded attributes—parity and threshold side—is reflexive, symmetric, and transitive, so these blocks are indeed equivalence classes.

</details>

### DM-SP1-E010 — Bounds in a product order (intermediate)

In $\\{0,1,2\\}^{2}$ use coordinatewise order. Find the greatest lower bound and least upper bound of $(0,2)$ and $(2,1)$. Give the answer as coordinates, so no diagram is needed.

<details>
<summary>Hint 1</summary>

**Hint.** A coordinatewise lower bound must satisfy two inequalities for each of the given points.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Choose each coordinate as large as those lower-bound inequalities permit; reverse this reasoning for an upper bound.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E010 — Solution

A common lower bound cannot exceed $0$ in the first coordinate or $1$ in the second; $(0,1)$ achieves both, so it is the greatest lower bound. A common upper bound must be at least $2$ in both relevant coordinate maxima; $(2,2)$ is the least upper bound. Thus meet and join are coordinatewise minimum and maximum.

</details>

### DM-SP1-E011 — Cantor’s diagonal step, finite version (advanced)

Let $A$ be finite and $F:A\\to P(A)$ any function. Define $D=\\{a\\in A:a\\notin F(a)\\}$. Prove that $D$ is not in the image of $F$.

<details>
<summary>Hint 1</summary>

**Hint.** Assume some input $d$ has $F(d)=D$ and ask whether $d$ belongs to $D$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Apply the defining membership rule for $D$ at that same $d$, then substitute the assumed equality of sets.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E011 — Solution

Suppose $D=F(d)$ for some $d\\in A$. By definition of $D$, $d\\in D$ if and only if $d\\notin F(d)$. Substituting $F(d)=D$ yields $d\\in D$ if and only if $d\\notin D$, a contradiction. Thus no $d$ maps to $D$; in particular, no function from $A$ onto $P(A)$ exists.

</details>

### DM-SP1-E012 — Closure generated by implications (advanced)

On $U=\\{a,b,c,d,e\\}$, close a set under the rules $a\\Rightarrow b$, $b\\Rightarrow c$, $a\\Rightarrow d$, and $\\{c,d\\}\\Rightarrow e$. Compute the closure of $\\{a\\}$ and of $\\{b,d\\}$. Prove that applying closure twice changes nothing.

<details>
<summary>Hint 1</summary>

**Hint.** Apply every rule whose premise is currently available, including the rule with two premises.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For idempotence, explain why the stopping set already satisfies every implication, so starting from it cannot activate a new conclusion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E012 — Solution

From $\\{a\\}$, add $b,d$, then $c$, then $e$, giving all of $U$. From $\\{b,d\\}$, add $c$, then $e$, giving $\\{b,c,d,e\\}$. Once the process stops, every rule whose premise is contained in the result already has its conclusion there. A second application can therefore add nothing. Since closure never removes elements, $\\operatorname{cl}(\\operatorname{cl}(S))=\\operatorname{cl}(S)$.

</details>

### DM-SP1-E013 — Two maximal elements, no greatest element (advanced)

Construct a five-element poset with exactly two maximal elements and exactly one minimal element, but no greatest element. Supply its cover relations as a plain-text alternative to a Hasse diagram and justify the claims.

<details>
<summary>Hint 1</summary>

**Hint.** Build upward from one bottom element, then branch into two incomparable top elements.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use two intermediate elements to reach five elements in total; verify that transitivity introduces no comparison between your two tops.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E013 — Solution

Use elements $\\{0,a,b,m,n\\}$ with covers $0<a$, $0<b$, $a<m$, $a<n$, and $b<n$. Transitive comparisons are also understood. The only minimal element is $0$. Neither $m$ nor $n$ lies below another element, so both are maximal; every other element lies below one of them. Since $m$ and $n$ are incomparable, neither is above every element, and no greatest element exists.

</details>

### DM-SP1-E014 — When a relation quotient is safe (advanced)

Let $\\sim$ be an equivalence relation on $A$. Define a proposed relation on classes by $[x]\\prec[y]$ when $xRy$, where $R$ is another relation on $A$. State and prove a necessary and sufficient condition for this definition to be independent of representatives.

<details>
<summary>Hint 1</summary>

**Hint.** Replacing $x$ or $y$ by an equivalent element must not change the truth value of $xRy$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Express that requirement for arbitrary $x\\sim x'$ and $y\\sim y'$, then prove necessity and sufficiency using equality of classes.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E014 — Solution

The condition is: whenever $x\\sim x'$ and $y\\sim y'$, one has $xRy$ if and only if $x'Ry'$. If it holds, every pair of representatives gives the same truth value, so the class relation is well defined. Conversely, if the class relation is well defined, $[x]=[x']$ and $[y]=[y']$; hence its truth cannot change when $x,y$ are replaced by $x',y'$, which is exactly the condition.

</details>

### DM-SP1-E015 — Classify a closure operator (advanced)

Let $G$ be a finite simple graph and let $c(S)$ be the union of all connected components meeting $S\\subseteq V(G)$. Prove that $c$ is extensive, monotone, and idempotent. Characterize its closed sets.

<details>
<summary>Hint 1</summary>

**Hint.** Treat connected components as disjoint blocks, and ask which blocks meet the starting set.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For idempotence, compare the blocks meeting $S$ with those meeting $c(S)$; a closed set must contain each block that it touches.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E015 — Solution

Every vertex of $S$ lies in a component meeting $S$, so $S\\subseteq c(S)$. If $S\\subseteq T$, each component meeting $S$ also meets $T$, giving $c(S)\\subseteq c(T)$. The components meeting $c(S)$ are precisely those already meeting $S$, so $c(c(S))=c(S)$. A set is closed exactly when it is a union of whole connected components; taking only part of a component would force the omitted vertices into its closure.

</details>

## Chapter 2: Proof, Induction, Recursion, Invariants, and Extremal Choice

### DM-SP1-E016 — Negation with quantifiers (introductory)

Negate: “For every integer $n$, if $n^{2}$ is even, then $n$ is even.” Write the negation without the words “it is not true that.”

<details>
<summary>Hint 1</summary>

**Hint.** First negate the outer “for every,” keeping the domain of integers explicit.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The negation of an implication requires its hypothesis to hold and its conclusion to fail; apply this before simplifying parity language.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E016 — Solution

The negation is: “There exists an integer $n$ such that $n^{2}$ is even and $n$ is odd.” Negating a universal produces an existential, and negating $P\\Rightarrow Q$ produces $P\\land \\neg Q$. The original theorem is true, so the negated statement has no witness.

</details>

### DM-SP1-E017 — Contrapositive divisibility (introductory)

Prove: if an integer $n$ is not divisible by $3$, then $n^{2}$ is not divisible by $3$.

<details>
<summary>Hint 1</summary>

**Hint.** Every integer has one of three possible remainders modulo $3$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Under the hypothesis, square only the two permitted remainders and compare the resulting remainders with zero.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E017 — Solution

The residues of $n$ modulo $3$ are $0,1,2$. Under the hypothesis only $1,2$ occur, and their squares are congruent to $1,4\\equiv1$. Thus $n^{2}$ is not divisible by $3$. Equivalently, this proves the contrapositive of “if $3|n^{2}$, then $3|n$.”

</details>

### DM-SP1-E018 — A triangular sum (introductory)

Prove by induction that $1+2+⋯+n=n(n+1)/2$ for every integer $n\\ge 1$.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the case $n=1$ from the step taking $n$ to $n+1$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** In the induction step, replace the first $n$ summands by the assumed formula, then factor after adding $n+1$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E018 — Solution

At $n=1$, both sides are $1$. Assume the formula at $n$. Adding $n+1$ gives $n(n+1)/2+(n+1)=(n+1)(n+2)/2$, the required formula at $n+1$. The base case and propagation establish the statement for all $n\\ge 1$.

</details>

### DM-SP1-E019 — Recursive list length (introductory)

Lists are built from the empty list and the operation $prepend(x,L)$. Define length recursively and prove by structural induction that $length(L)\\ge 0$ for every finite list.

<details>
<summary>Hint 1</summary>

**Hint.** Give one length rule for each constructor: the empty list and prepending.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The inductive case should assume nonnegativity for $L$ and show why the constructor preserves it.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E019 — Solution

Define $length(empty)=0$ and $length(prepend(x,L))=1+length(L)$. The base constructor has nonnegative length. If the recursively built list $L$ has nonnegative length, prepending gives at least $1$. Structural induction covers every finite list because those are exactly the objects generated by the two constructors.

</details>

### DM-SP1-E020 — A parity obstruction (introductory)

A move replaces two integers on a board by their sum. Starting from $1,1,1,1,1$, can repeated moves end with the single integer $4$?

<details>
<summary>Hint 1</summary>

**Hint.** Look for a quantity involving all entries that is unchanged when $a,b$ are replaced by $a+b$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare this conserved quantity in the initial board and the proposed singleton; decreasing the number of entries addresses a different question.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E020 — Solution

The total sum is invariant: replacing $a,b$ by $a+b$ preserves it. Initially the sum is $5$; a final singleton must therefore be $5$, not $4$. Hence the requested state is unreachable. The number of entries decreases, but that is a monovariant proving termination, not the obstruction.

</details>

### DM-SP1-E021 — Find the missing base case (intermediate)

A purported induction proves $2^{n}\\ge n^{2}$ by observing that $2^{n+1}\\ge 2n^{2}\\ge (n+1)^{2}$. Determine the smallest starting value for which that propagation inequality is valid and supply all needed base cases.

<details>
<summary>Hint 1</summary>

**Hint.** Solve the inequality $2n^{2}\\ge(n+1)^{2}$ independently of the target claim.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The first integer where propagation works need not satisfy $2^{n}\\ge n^{2}$ itself. Check the prospective starting case before using induction.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E021 — Solution

$2n^{2}\\ge (n+1)^{2}$ is equivalent to $n^{2}-2n-1\\ge 0$, valid for integers $n\\ge 3$. To begin propagation at $3$, one needs $2^{3}\\ge 3^{2}$, which is false. But the target holds at $n=4$ ($16=16$), and the propagation inequality holds from $4$ onward. Thus the theorem is $2^{n}\\ge n^{2}$ for all $n\\ge 4$, with base case $4$.

</details>

### DM-SP1-E022 — Strong induction and postage (intermediate)

Prove that every integer $n\\ge 12$ can be written as $4a+5b$ for nonnegative integers $a,b$.

<details>
<summary>Hint 1</summary>

**Hint.** Try an induction step that adds one $4$-stamp to a smaller representation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Subtracting $4$ means the first four integers in the claimed range need their own representations before the step can cover everything.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E022 — Solution

Verify $12=3\\cdot 4$, $13=2\\cdot 4+5$, $14=4+2\\cdot 5$, and $15=3\\cdot 5$. For strong induction, let $n\\ge 16$ and assume every integer from $12$ through $n-1$ is representable. Then $n-4\\ge 12$, so write $n-4=4a+5b$; hence $n=4(a+1)+5b$. Four consecutive base cases are needed because the induction step subtracts $4$.

</details>

### DM-SP1-E023 — Recursive exponentiation invariant (intermediate)

Consider the algorithm: while $n>0$, if $n$ is odd set $r←rb$; set $b←b^{2}$ and $n←\\lfloor n/2\\rfloor$. Initially $r=1$, $b=x$, and $n=N\\ge 0$. Prove that on termination $r=x^{N}$.

<details>
<summary>Hint 1</summary>

**Hint.** Track a product involving the accumulator $r$, the current base $b$, and the remaining exponent $n$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check the cases $n=2k$ and $n=2k+1$ using the old values in each update; then use the value of $n$ at termination.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E023 — Solution

Maintain $r b^{n}=x^{N}$. If $n=2k$, the update gives $r(b^{2})^{k}=rb^{n}$. If $n=2k+1$, it gives $(rb)(b^{2})^{k}=rb^{n}$. Thus the invariant holds after every iteration. The nonnegative integer $n$ strictly decreases when positive, so the loop terminates at $n=0$; then the invariant reads $r=x^{N}$.

</details>

### DM-SP1-E024 — Tiling invariant (intermediate)

Remove two opposite corners from an $8\\times 8$ checkerboard. Prove that the remaining board cannot be tiled by $1\\times 2$ dominoes.

<details>
<summary>Hint 1</summary>

**Hint.** Color square $(i,j)$ according to the parity of $i+j$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the colors of the removed corners, then ask what color balance every domino would contribute.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E024 — Solution

Opposite corners have the same color under the usual alternating coloring. Removing them leaves $30$ squares of that color and $32$ of the other. Every domino covering adjacent squares covers one of each color. A domino tiling would therefore cover equal color counts, contradicting $30\\ne 32$. The checkerboard coloring is also a text-accessible description: color $(i,j)$ by the parity of $i+j$.

</details>

### DM-SP1-E025 — Termination by lexicographic descent (intermediate)

States are pairs $(a,b)$ of nonnegative integers. A move either decreases $a$, or leaves $a$ fixed and decreases $b$. Prove that no infinite move sequence exists.

<details>
<summary>Hint 1</summary>

**Hint.** The second coordinate may increase when the first decreases, so the sum need not descend.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** If an infinite play existed, the nonnegative first coordinate would eventually stop decreasing. Analyze all moves after that point.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E025 — Solution

Order pairs lexicographically. If $a$ decreases, the pair decreases regardless of $b$; otherwise $a$ is fixed and $b$ decreases. Suppose an infinite sequence existed. Since $a$ can decrease only finitely often, it would eventually be constant; thereafter $b$ would decrease at every move, impossible indefinitely among nonnegative integers. Thus lexicographic descent is well founded here.

</details>

### DM-SP1-E026 — Minimal counterexample repair (advanced)

Prove that every integer $n\\ge 2$ is a product of primes, using a minimal counterexample. Do not assume unique factorization.

<details>
<summary>Hint 1</summary>

**Hint.** Assume a counterexample exists and select its least value.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A composite least counterexample factors into two smaller integers at least $2$; ask what minimality says about each factor.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E026 — Solution

Suppose the claim fails and choose the least counterexample $n\\ge 2$. It cannot be prime, since then it is already a product of one prime. Thus $n=ab$ with $2\\le a,b<n$. By minimality, each of $a,b$ is a product of primes. Concatenating those products represents $n$, contradicting its choice. Only existence, not uniqueness, was used.

</details>

### DM-SP1-E027 — Extremal interval proof (advanced)

Let $n\\ge 1$, and let $I_{1},\\ldots,I_{n}$ be closed intervals on the real line, every two of which intersect. Prove that all $n$ intervals share a common point.

<details>
<summary>Hint 1</summary>

**Hint.** Write each interval as $[l_j,r_j]$ and choose an extremal endpoint as a possible common point.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For the largest left endpoint $L$, use pairwise intersection to bound every right endpoint, and maximality to bound every left endpoint.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E027 — Solution

Choose an interval whose left endpoint $L$ is largest. For every interval $I_{j}=[l_{j},r_{j}]$, pairwise intersection with the chosen interval implies $r_{j}\\ge L$; maximality gives $l_{j}\\le L$. Hence $L\\in I_{j}$ for every $j$. The extremal choice converts all pairwise information into one common witness.

</details>

### DM-SP1-E028 — Counterexample to a tempting converse (advanced)

The sum of two irrational real numbers can be irrational. Refute the converse claim “if $x+y$ is irrational, then both $x$ and $y$ are irrational,” while satisfying its premise.

<details>
<summary>Hint 1</summary>

**Hint.** A counterexample must keep the sum irrational while making at least one summand rational.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Start with a rational number and an irrational number; prove their sum cannot be rational by subtracting the rational summand.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E028 — Solution

Take $x=1$ and $y=\\sqrt{2}$. Then $x+y=1+\\sqrt{2}$ is irrational: if it were rational, subtracting $1$ would make $\\sqrt{2}$ rational. Yet $x$ is rational. This is a valid counterexample because it satisfies the premise and falsifies the conclusion; merely choosing two numbers with rational sum would not address the implication.

</details>

### DM-SP1-E029 — Structural induction on formulas (advanced)

Propositional formulas are built from variables using $\\neg$ and $\\land$. Let $v(F)$ count variable occurrences and $c(F)$ count connective occurrences. Prove that a fully parenthesized formula has exactly $v(F)+c(F)$ tokens if each variable and connective counts as one and parentheses are ignored.

<details>
<summary>Hint 1</summary>

**Hint.** Use the three formation cases: a variable, a negation, and a conjunction.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Track how variable count, connective count, and token count change in each constructor; parentheses contribute nothing under the stated convention.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E029 — Solution

For a variable, the token count is $1=v+0$. If $F=\\neg G$, structural induction gives $v(G)+c(G)$ tokens in $G$; adding $\\neg$ yields $v(F)+c(F)$. If $F=(G\\land H)$, ignoring parentheses, concatenate the tokens of $G$, one $\\land$, and those of $H$. The total is $v(G)+v(H)+c(G)+c(H)+1=v(F)+c(F)$.

</details>

### DM-SP1-E030 — Invariant plus monovariant (advanced)

Start with a nonempty finite multiset of positive integers. A move replaces two unequal entries $a<b$ by $a$ and $b-a$. Prove that every play terminates and that the greatest common divisor of all entries is unchanged.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the effect of one move on the sum and, separately, on the set of common divisors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For the gcd, show that a divisor divides $a,b$ exactly when it divides $a,b-a$. For termination use the positivity of the decrease in the sum.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E030 — Solution

The sum decreases from $a+b$ to $a+(b-a)=b$, a drop of $a>0$; as a positive integer, it cannot decrease forever. For the invariant, $\\gcd(a,b)=\\gcd(a,b-a)$, and all other entries are untouched, so the gcd of the whole multiset is preserved. At termination no unequal pair remains, so all entries equal a common value $g$. Their gcd is then $g$; invariance proves that $g$ is exactly the original gcd.

</details>

## Chapter 3: Counting by Bijection, Decomposition, and Inclusion–Exclusion

### DM-SP1-E031 — Restricted codes (introductory)

How many four-character codes have a letter from $\\{A,B,C\\}$ followed by three distinct digits from $\\{0,1,2,3,4\\}$?

<details>
<summary>Hint 1</summary>

**Hint.** Treat the letter and the three ordered digit positions as successive choices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** After choosing a digit it cannot be reused, so the number of available digits drops at each position; leading zero is permitted here.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E031 — Solution

Choose the letter in $3$ ways. Choose and order the digits in $5\\cdot 4\\cdot 3=60$ ways. The choices have unique descriptions and are independent, so the product rule gives $3\\cdot 60=180$ codes.

</details>

### DM-SP1-E032 — Committees with a designated chair (introductory)

From eight people, how many three-person committees with one chair can be formed?

<details>
<summary>Hint 1</summary>

**Hint.** A committee with a chair is a set of three together with one distinguished member.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Count by selecting the committee first, or select the chair first and then an unordered pair of other members.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E032 — Solution

Choose the committee in $\\binom{8}{3}=56$ ways and then its chair in $3$ ways, giving $168$. Equivalently, choose the chair first in $8$ ways and two other members in $\\binom{7}{2}=21$ ways; $8\\cdot 21=168$. The agreement double-counts the same structured objects.

</details>

### DM-SP1-E033 — A simple bijection (introductory)

Show bijectively that the subsets of an $n$-element set containing a fixed element $x$ are counted by $2^{n-1}$.

<details>
<summary>Hint 1</summary>

**Hint.** Remove the required element $x$ and describe exactly what freedom remains.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Construct an inverse by adding $x$ back; this also explains why the target is the power set of an $(n-1)$-element set.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E033 — Solution

Delete $x$ from such a subset. This maps to an arbitrary subset of the remaining $n-1$ elements. The inverse adds $x$. Hence the families are in bijection, and the target family has $2^{n-1}$ members.

</details>

### DM-SP1-E034 — Pigeonholes by residue (introductory)

Prove that among any seven integers, two have the same remainder modulo $6$.

<details>
<summary>Hint 1</summary>

**Hint.** Classify each chosen integer by its remainder, rather than its size.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the number of integers with the number of possible remainder classes and apply the pigeonhole principle.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E034 — Solution

There are only six residue classes $0,1,\\ldots,5$. Assign each of the seven integers to its remainder class. By the pigeonhole principle, some class contains at least two integers, whose difference is therefore divisible by $6$.

</details>

### DM-SP1-E035 — Two-set inclusion–exclusion (introductory)

In a group of $80$ students, $47$ study algebra, $39$ study combinatorics, and $18$ study both. How many study at least one, and how many study neither?

<details>
<summary>Hint 1</summary>

**Hint.** Adding the two subject totals counts students studying both subjects twice.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Correct that overlap once, then take the complement within the group of $80$ to obtain the number studying neither.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E035 — Solution

Inclusion–exclusion gives $47+39-18=68$ studying at least one; those in both were initially counted twice and are subtracted once. Therefore $80-68=12$ study neither.

</details>

### DM-SP1-E036 — Binary strings with separated ones (intermediate)

Count binary strings of length $8$ containing exactly three ones and no adjacent ones.

<details>
<summary>Hint 1</summary>

**Hint.** Represent a string by the increasing positions $i_1<i_2<i_3$ of its ones.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Remove one required separating position before the second one and two before the third: examine $j_k=i_k-(k-1)$ and its inverse.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E036 — Solution

If the one-positions are $i_{1}<i_{2}<i_{3}$ with gaps at least two, set $j_{k}=i_{k}-(k-1)$. Then $1\\le j_{1}<j_{2}<j_{3}\\le 6$, and this transformation is reversible. Thus the count is $\\binom{6}{3}=20$.

</details>

### DM-SP1-E037 — A double-counted incidence (intermediate)

Prove $k \\binom{n}{k}=n \\binom{n-1}{k-1}$ for $1\\le k\\le n$ by counting pairs $(S,x)$ with $S\\subseteq \\{1,\\ldots,n\\}$, $|S|=k$, and $x\\in S$.

<details>
<summary>Hint 1</summary>

**Hint.** The pair $(S,x)$ records both a committee and one marked member.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare choosing the set before its marked member with choosing the marked element before the remaining members.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E037 — Solution

Choose $S$ then its marked member: $\\binom{n}{k}k$ pairs. Or choose $x$ first, then the other $k-1$ members from the remaining $n-1$: $nC(n-1,k-1)$. Both count the same pairs, proving the identity.

</details>

### DM-SP1-E038 — Onto maps to three labels (intermediate)

How many surjections are there from a four-element set onto $\\{a,b,c\\}$?

<details>
<summary>Hint 1</summary>

**Hint.** Begin with all functions and exclude the event of missing each target label.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An intersection of two missing-label events leaves only one possible output label; account for these intersections by inclusion–exclusion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E038 — Solution

There are $3^{4}$ maps. Subtract maps missing a specified label: $3\\cdot 2^{4}$. Add back maps missing two specified labels: $\\binom{3}{2}\\cdot 1^{4}$. Thus the number is $81-48+3=36$. No map can miss all three labels because the domain is nonempty.

</details>

### DM-SP1-E039 — Bounded solutions (intermediate)

Count nonnegative integer solutions of $x+y+z=9$ satisfying $x\\le 3$.

<details>
<summary>Hint 1</summary>

**Hint.** Count all nonnegative solutions first, then remove those violating the upper bound.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** In a violating solution, subtract $4$ from $x$ to obtain an unrestricted nonnegative solution with a smaller total.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E039 — Solution

Without the bound there are $\\binom{11}{2}=55$ solutions. Bad solutions have $x\\ge 4$; put $x'=x-4$, giving $x'+y+z=5$ and $\\binom{7}{2}=21$ solutions. Therefore $55-21=34$ satisfy the bound.

</details>

### DM-SP1-E040 — Circular arrangements with an anchor (intermediate)

Six distinct people sit around a circular table, where rotations are identified but reflections are not. How many seatings place Ada next to Bo?

<details>
<summary>Hint 1</summary>

**Hint.** Fix Ada's seat to choose one representative of each rotation class.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** There are two adjacent seats available to Bo. After choosing one, arrange the other people without identifying reflected arrangements.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E040 — Solution

Anchor Ada to remove rotations. Bo has two neighboring seats. Arrange the other four people in the remaining seats in $4!$ ways. The count is $2\\cdot 4! = 48$. No further division by two is allowed because mirror images remain distinct.

</details>

### DM-SP1-E041 — Three forbidden positions (advanced)

Count permutations of $\\{1,2,3,4,5\\}$ in which none of $1,2,3$ occupies its own position; $4$ and $5$ are unrestricted.

<details>
<summary>Hint 1</summary>

**Hint.** Let $A_i$ denote permutations fixing $i$, only for the three restricted labels.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** If a specified collection of $j$ labels is fixed, freely permute the other $5-j$ labels; alternate these intersection counts.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E041 — Solution

Let $A_{i}$ mean $i$ is fixed for $i=1,2,3$. Inclusion–exclusion gives
$$5! - \\binom{3}{1}4! + \\binom{3}{2}3! - \\binom{3}{3}2! =120-72+18-2=64$$
Intersections fix the selected labels, leaving all other labels freely permuted.

</details>

### DM-SP1-E042 — An exact occupancy profile (advanced)

Distribute seven distinct balls among three labeled boxes so that the box sizes are $2,2,3$. Count assignments.

<details>
<summary>Hint 1</summary>

**Hint.** First decide which labeled box has size three.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Once that box and its balls are chosen, distinguish the two remaining labeled boxes when choosing which two balls go to the first.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E042 — Solution

First choose which box receives three balls ($3$ choices). Choose its balls in $\\binom{7}{3}=35$ ways, then choose two of the remaining four for the first of the other labeled boxes in $\\binom{4}{2}=6$ ways; the last two are forced. Total: $3\\cdot 35\\cdot 6=630$. Equivalently, sum the multinomial count $7!/(2!2!3!)$ over the three locations of size three.

</details>

### DM-SP1-E043 — Rotation classes of square colorings (advanced)

Count colorings of the four vertices of a square with black or white, identifying colorings under rotations only. Use fixed-point counts rather than dividing $16$ by $4$.

<details>
<summary>Hint 1</summary>

**Hint.** For each of the four rotations, partition the vertices into cycles of that rotation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A fixed coloring must be constant on each cycle, giving two color choices per cycle; average the four fixed-coloring counts.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E043 — Solution

For a finite group acting on a finite set, the number of orbits equals the average number of objects fixed by a group element. Indeed, double-count pairs $(g,x)$ with $g$ fixing $x$: summing by $g$ gives the fixed-point total, while each orbit contributes exactly the group size because orbit size times stabilizer size equals that size. Here the identity rotation fixes all $16$ colorings. Rotations by $90°$ and $270°$ each fix $2$, while the $180°$ rotation fixes $2^{2}=4$. The number of rotation classes is therefore $(16+2+4+2)/4=6$. These are rotation classes (often called necklaces), not bracelets, because reflections are not identified.

</details>

### DM-SP1-E044 — Forced close pair (advanced)

Choose six distinct integers from $\\{1,2,\\ldots,10\\}$. Prove that two chosen integers are consecutive.

<details>
<summary>Hint 1</summary>

**Hint.** Group the ten available integers into disjoint small sets within which any two are consecutive.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Choose five disjoint consecutive pairs, then compare six selections with those five groups.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E044 — Solution

Partition into five pairs $\\{1,2\\},\\{3,4\\},\\{5,6\\},\\{7,8\\},\\{9,10\\}$. Selecting six integers forces two selections from one pair. Those two integers are consecutive. This pairing proves the claim but is stronger in structure than merely using ten singleton positions.

</details>

### DM-SP1-E045 — Count by the last occurrence (advanced)

Prove $\\sum_{k=1}^{n} k2^{k-1}=(n-1)2^{n}+1$ by counting or algebraically deriving a recurrence, and check $n=3$.

<details>
<summary>Hint 1</summary>

**Hint.** Call the partial sum $S_n$ and isolate its final summand.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the proposed expression for $S_{n-1}$ in the resulting recurrence, and check both a base case and the requested numerical case.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E045 — Solution

Let $S_{n}$ denote the sum. Then $S_{n}=S_{n-1}+n2^{n-1}$. The proposed formula gives $(n-2)2^{n-1}+1+n2^{n-1}=(n-1)2^{n}+1$, with base $S_{1}=1$. At $n=3$, the left side is $1+4+12=17$, and the right side is $2\\cdot 8+1=17$. This is an inductive algebraic count audit.

</details>

## Chapter 4: Recurrences and Generating Functions

### DM-SP1-E046 — First-order recurrence (introductory)

Solve $a_{n}=a_{n-1}+3$ for $n\\ge 1$, with $a_{0}=2$.

<details>
<summary>Hint 1</summary>

**Hint.** Write the first few terms and examine the change at each step.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** After $n$ steps there have been $n$ equal increments from $a_0$; verify the resulting expression in the recurrence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E046 — Solution

Repeated substitution gives $a_{n}=2+3n$. Verification: at $n=0$ it gives $2$, and $a_{n}-a_{n-1}=(2+3n)-(2+3n-3)=3$.

</details>

### DM-SP1-E047 — A geometric forcing term (introductory)

Solve $a_{n}=2a_{n-1}$ for $n\\ge 1$, with $a_{0}=5$.

<details>
<summary>Hint 1</summary>

**Hint.** Each application multiplies the previous term by the same factor.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Count how many doublings separate $a_n$ from $a_0$, then verify the initial value as well as the recurrence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E047 — Solution

Each step doubles the preceding value, so $a_{n}=5\\cdot 2^{n}$. The formula satisfies the initial value and $5\\cdot 2^{n}=2(5\\cdot 2^{n-1})$.

</details>

### DM-SP1-E048 — Derive a tiling recurrence (introductory)

Let $t_{n}$ count tilings of a $1\\times n$ board by squares of length $1$ and dominoes of length $2$. Give a recurrence and initial values.

<details>
<summary>Hint 1</summary>

**Hint.** Partition tilings by the length of their last tile.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Deleting the last tile leaves a smaller board. Count the empty board explicitly so that the first recurrence step works.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E048 — Solution

A tiling ends in either a square, leaving a tiling of length $n-1$, or a domino, leaving one of length $n-2$. These cases are disjoint, so $t_{n}=t_{n-1}+t_{n-2}$ for $n\\ge 2$. The empty board has one tiling, $t_{0}=1$, and $t_{1}=1$.

</details>

### DM-SP1-E049 — Read coefficients (introductory)

Find $[x^{5}](1+x)^{7}$ and $[x^{5}](1-x)^{-1}$ as formal power-series coefficients.

<details>
<summary>Hint 1</summary>

**Hint.** Use the binomial expansion for the polynomial and the formal geometric-series identity for the reciprocal.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Match the exponent $5$ in each expansion; evaluation of the functions at a number is not coefficient extraction.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E049 — Solution

By the binomial theorem, $[x^{5}](1+x)^{7}=\\binom{7}{5}=21$. Since $(1-x)^{-1}=\\sum_{n\\ge 0}x^{n}$ formally, the second coefficient is $1$. No analytic convergence claim is needed.

</details>

### DM-SP1-E050 — Product as choices (introductory)

What does $[x^{7}](1+x+x^{2})(1+x^{3})$ count, and what is its value?

<details>
<summary>Hint 1</summary>

**Hint.** A term in the product comes from choosing one monomial in each factor.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the requested exponent with the greatest sum of two available exponents before doing any expansion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E050 — Solution

It counts choices of one exponent from $\\{0,1,2\\}$ and one from $\\{0,3\\}$ whose sum is $7$. The largest possible sum is $5$, so the coefficient is $0$. As a combinatorial model, it could count selecting up to two unit-weight objects of one type and at most one weight-three object.

</details>

### DM-SP1-E051 — Repeated characteristic root (intermediate)

Solve $a_{n}=6a_{n-1}-9a_{n-2}$ for $n\\ge 2$, with $a_{0}=2$, $a_{1}=9$.

<details>
<summary>Hint 1</summary>

**Hint.** Factor the characteristic polynomial $r^2-6r+9$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A repeated root requires both a constant and a linear factor in $n$ multiplying its exponential; use both initial values to determine their coefficients.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E051 — Solution

The characteristic polynomial is $(r-3)^{2}$, so $a_{n}=(A+Bn)3^{n}$. From $a_{0}=2$, $A=2$. Then $a_{1}=3(2+B)=9$, so $B=1$. Therefore $a_{n}=(n+2)3^{n}$.

</details>

### DM-SP1-E052 — Nonhomogeneous recurrence (intermediate)

Solve $a_{n}=2a_{n-1}+1$, $a_{0}=0$.

<details>
<summary>Hint 1</summary>

**Hint.** Try shifting the sequence by a constant so that the added $1$ disappears.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Equivalently, find a constant particular solution and add a multiple of the homogeneous solution; impose $a_0$ last.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E052 — Solution

A constant particular solution $c$ satisfies $c=2c+1$, hence $c=-1$. The homogeneous part is $A2^{n}$; $a_{0}=A-1=0$ gives $A=1$. Thus $a_{n}=2^{n}-1$. Direct substitution verifies the formula.

</details>

### DM-SP1-E053 — Generating function from partial sums (intermediate)

If $a_{n}=n+1$, find $A(x)=\\sum_{n\\ge 0}a_{n}x^{n}$ as a rational formal series.

<details>
<summary>Hint 1</summary>

**Hint.** Start from the formal geometric series and differentiate it term by term.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Adjust the power of $x$ after differentiation, then combine a series for $n$ with a series for $1$ to obtain coefficients $n+1$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E053 — Solution

Since $\\sum_{n\\ge 0}x^{n}=(1-x)^{-1}$, formal differentiation gives $\\sum_{n\\ge 1}nx^{n-1}=(1-x)^{-2}$. Multiplying by $x$ and adding the geometric series yields $\\sum(n+1)x^{n}=x/(1-x)^{2}+1/(1-x)=1/(1-x)^{2}$.

</details>

### DM-SP1-E054 — Restricted compositions (intermediate)

Let $c_{n}$ count ordered compositions of $n$ using parts $1$ and $3$. Derive a recurrence and compute $c_{0},\\ldots,c_{6}$.

<details>
<summary>Hint 1</summary>

**Hint.** Separate a composition according to whether its final part is $1$ or $3$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use one empty composition of zero and no compositions of a negative number, then compute successive terms from the recurrence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E054 — Solution

With the empty composition counted, $c_{0}=1$; take $c_{n}=0$ for $n<0$. The last part is $1$ or $3$, so $c_{n}=c_{n-1}+c_{n-3}$. This gives $1,1,1,2,3,4,6$ for indices $0$ through $6$.

</details>

### DM-SP1-E055 — Coefficient convolution (intermediate)

Compute $[x^{6}](1-x)^{-2}(1+x^{2})$.

<details>
<summary>Hint 1</summary>

**Hint.** Multiplication by $x^2$ shifts each coefficient two positions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Find the general coefficient of $(1-x)^{-2}$, then identify the two coefficients that can contribute to degree six.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E055 — Solution

Since $(1-x)^{-2}=\\sum_{n\\ge 0}(n+1)x^{n}$, the coefficient receives $7$ from multiplying by $1$ and the coefficient of $x^{4}$, namely $5$, from multiplying by $x^{2}$. The answer is $12$. This explicitly applies convolution rather than substituting $x=6$.

</details>

### DM-SP1-E056 — Rational series implies recurrence (advanced)

Let $A(x)=(1+x)/(1-2x-x^{2})=\\sum_{n\\ge 0}a_{n}x^{n}$. Derive the initial values and recurrence.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the rational-series identity by its denominator before taking coefficients.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Handle degrees zero and one separately; at higher degrees the numerator contributes nothing and the recurrence becomes homogeneous.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E056 — Solution

Multiplying gives $(1-2x-x^{2})A(x)=1+x$. Coefficient $x^{0}$ gives $a_{0}=1$; coefficient $x^{1}$ gives $a_{1}-2a_{0}=1$, so $a_{1}=3$. For $n\\ge 2$, the right coefficient is zero, hence $a_{n}=2a_{n-1}+a_{n-2}$.

</details>

### DM-SP1-E057 — A finite-state recurrence (advanced)

Let $a_{n}$ count binary strings of length $n$ with no occurrence of $111$. Derive a recurrence with enough initial values, and find $a_{5}$.

<details>
<summary>Hint 1</summary>

**Hint.** For length at least three, inspect the beginning of the string until its first zero; avoiding $111$ limits the possibilities.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Partition by initial blocks $0$, $10$, or $110$. Removing the block leaves an arbitrary valid shorter string; count lengths zero, one, and two separately.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E057 — Solution

For $n\\ge 3$, a valid string begins with exactly one of $0$, $10$, or $110$: otherwise its first three symbols would be $111$. Deleting that prefix leaves an arbitrary valid string, and prefixing any of those blocks to a valid string cannot create $111$ across the join. Count lengths zero, one, and two separately. Thus $a_{n}=a_{n-1}+a_{n-2}+a_{n-3}$ for $n\\ge 3$, with $a_{0}=1$, $a_{1}=2$, $a_{2}=4$. Then $a_{3}=7$, $a_{4}=13$, and $a_{5}=24$.

</details>

### DM-SP1-E058 — Weighted coin selections (advanced)

Use a generating function to count solutions of $a+2b+5c=10$ in nonnegative integers with $a\\le 2$.

<details>
<summary>Hint 1</summary>

**Hint.** Use one factor for each variable, with exponents recording its contribution to $a+2b+5c$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The $a$-factor is finite. To extract degree ten, separate the possible values of $c$ and use parity to restrict $a$ in each case.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E058 — Solution

The generating function is $(1+x+x^{2})(1-x^{2})^{-1}(1-x^{5})^{-1}$. Split by $c$. If $c=0$, $a$ must have the parity of $10$, so $a=0$ or $2$, giving two solutions. If $c=1$, $a$ must be odd, so $a=1$, giving one. If $c=2$, $a=b=0$, giving one. Total coefficient: $4$.

</details>

### DM-SP1-E059 — Dominant root with cancellation (advanced)

The recurrence $a_{n}=3a_{n-1}-2a_{n-2}$ has roots $1,2$. Give initial values for which the $2^{n}$ term vanishes, and explain why naming the largest root alone would predict the wrong growth.

<details>
<summary>Hint 1</summary>

**Hint.** Write the general solution as a linear combination of the two characteristic-root terms.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Express the coefficient of $2^n$ in terms of $a_0$ and $a_1$, then choose initial values making that coefficient zero.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E059 — Solution

The general form is $a_{n}=A+B2^{n}$. Choose $a_{0}=a_{1}=7$; then $A+B=7$ and $A+2B=7$, so $B=0$ and $a_{n}=7$. Although $2$ is the largest characteristic root, its coefficient is zero. Dominant-root reasoning must first account for the initial conditions.

</details>

### DM-SP1-E060 — Experiment and proof boundary (advanced)

Suppose exact computation gives $a_{n}\\le n^{2}$ for $0\\le n\\le 100$, where $a_{n}=2a_{n-1}+1$ and $a_{0}=0$. Diagnose the claim and determine exactly when the inequality fails.

<details>
<summary>Hint 1</summary>

**Hint.** Solve the recurrence symbolically before trusting the reported numerical range.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare small values with $n^2$. After finding a failure, study $D_n=2^n-1-n^2$ and its relation to $D_{n+1}$ to prove persistence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E060 — Solution

The solved recurrence is $a_{n}=2^{n}-1$. The computation itself cannot prove a universal inequality. Checking small values, $a_{4}=15\\le 16$, while $a_{5}=31>25$; so the reported computation through $100$ is inconsistent and should trigger an implementation audit. If $D_{n}=2^{n}-1-n^{2}>0$, then $D_{n+1}=2D_{n}+n^{2}-2n$, which is positive for $n\\ge 3$. Hence failure begins exactly at $n=5$ and persists.

</details>

## Chapter 5: Graphs, Trees, and Connectivity

All graphs in this section are finite and simple. Edge lists are complete plain-text alternatives to drawings.

### DM-SP1-E061 — Degree ledger (introductory)

A graph has vertex set $\\{a,b,c,d,e\\}$ and edge set $\\{ab,ac,bc,bd,de\\}$. List the degrees and verify the handshaking identity.

<details>
<summary>Hint 1</summary>

**Hint.** For each vertex, count the listed edges having it as an endpoint.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Add the degree counts and compare with twice the number of listed edges; every edge should contribute exactly two incidences.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E061 — Solution

The degrees are $\\operatorname{deg}(a)=2$, $\\operatorname{deg}(b)=3$, $\\operatorname{deg}(c)=2$, $\\operatorname{deg}(d)=2$, and $\\operatorname{deg}(e)=1$. Their sum is $10$, which equals twice the five edges. The odd-degree vertices are $b,e$, an even-sized set.

</details>

### DM-SP1-E062 — Walk, trail, or path (introductory)

In the graph with edges $\\{12,23,31,34\\}$, classify the vertex sequence $1,2,3,1,3,4$ as a walk, trail, or path.

<details>
<summary>Hint 1</summary>

**Hint.** Check the consecutive pairs first, then compare the edges and vertices used along the sequence.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The graph is undirected, so $31$ and $13$ are the same edge when checking whether an edge repeats.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E062 — Solution

Every consecutive pair is an edge, so it is a walk. The edge $13$ is traversed twice, once as $3,1$ and once as $1,3$, so it is not a trail. Vertices $1$ and $3$ repeat, so it is not a path.

</details>

### DM-SP1-E063 — Components from an edge list (introductory)

For $V=\\{1,2,3,4,5,6,7\\}$ and $E=\\{12,23,45,46\\}$, list the connected components.

<details>
<summary>Hint 1</summary>

**Hint.** Start at one unused vertex and collect everything reachable along listed edges.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Repeat on the remaining vertices, remembering that a vertex with no incident edge still belongs to a component.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E063 — Solution

The components are $\\{1,2,3\\}$, $\\{4,5,6\\}$, and $\\{7\\}$. The listed paths connect vertices within each block, and no edge joins different blocks. The isolated vertex is itself a component.

</details>

### DM-SP1-E064 — Tree edge count (introductory)

A connected acyclic graph has $17$ vertices. How many edges does it have? State why neither adjective may be omitted.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the graph class specified by both connectedness and acyclicity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use its edge-count formula, then consider separately what extra components or an extra cycle would do to that count.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E064 — Solution

It is a tree, so it has $17-1=16$ edges. A disconnected acyclic graph is a forest and may have fewer; a connected graph with cycles may have more. Thus connectedness and acyclicity are both load-bearing.

</details>

### DM-SP1-E065 — Bipartition by layers (introductory)

The graph has edges $\\{ab,bc,cd,de,ea\\}$. Is it bipartite? Give a certificate.

<details>
<summary>Hint 1</summary>

**Hint.** Read the edge list as a closed sequence starting at $a$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Try alternating two colors along that sequence and inspect the closing edge; an odd cycle is a certificate rather than merely a failed coloring attempt.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E065 — Solution

These edges form a cycle of length five. Alternating two colors around the cycle forces $a$ and $e$ to receive the same color even though $ae$ is an edge. Thus the odd cycle is a certificate that the graph is not bipartite.

</details>

### DM-SP1-E066 — Unique path consequence (intermediate)

Prove that adding an edge between two nonadjacent vertices of a tree creates exactly one cycle.

<details>
<summary>Hint 1</summary>

**Hint.** Use the unique path between the new edge's endpoints in the original tree.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate possible cycles into those containing the added edge and those not containing it; use uniqueness and acyclicity respectively.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E066 — Solution

The tree has a unique path $P$ between the endpoints. The new edge together with $P$ forms a cycle. Any cycle containing the new edge would yield, after deleting that edge, a second path between the endpoints in the original tree. Any cycle not containing it would already be a tree cycle. Hence exactly one cycle is created.

</details>

### DM-SP1-E067 — Bridge certificate (intermediate)

Prove that an edge $e=uv$ is a bridge if and only if it lies on no cycle.

<details>
<summary>Hint 1</summary>

**Hint.** If an edge lies on a cycle, follow the rest of that cycle between its endpoints.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For the converse, interpret “not a bridge” as the existence of a replacement path after deletion, then restore the edge.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E067 — Solution

If $e$ lies on a cycle, the remaining portion of that cycle is a $u$–$v$ path after $e$ is deleted, so its endpoints and hence its original component stay connected. Conversely, if $e$ is not a bridge, a $u$–$v$ path remains in $G-e$; adding $e$ to that path forms a cycle containing $e$.

</details>

### DM-SP1-E068 — Spanning-tree construction (intermediate)

For the connected graph with edges $\\{12,23,34,41,13\\}$, give a spanning tree and justify it from the edge list.

<details>
<summary>Hint 1</summary>

**Hint.** Select enough edges to reach every vertex without closing a cycle.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A path through all four vertices would suffice; justify both spanning and absence of a cycle from its edge list.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E068 — Solution

The edge set $\\{12,23,34\\}$ spans all four vertices and forms the path $1-2-3-4$. It is connected and has no cycle, hence is a spanning tree. The omitted edges $41,13$ each would create a cycle if added.

</details>

### DM-SP1-E069 — Distance layers (intermediate)

In the graph with edges $\\{sa,sb,ac,bc,bd,ce\\}$, compute distances from $s$ and use them to give a bipartition.

<details>
<summary>Hint 1</summary>

**Hint.** Build successive layers of vertices reached in zero, one, two, and more steps from $s$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Try assigning colors by parity of distance, then check every listed edge explicitly; distance layers alone do not prove bipartiteness for arbitrary graphs.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E069 — Solution

Distances are $d(s)=0$, $d(a)=d(b)=1$, $d(c)=d(d)=2$, and $d(e)=3$. Even layers give $\\{s,c,d\\}$ and odd layers $\\{a,b,e\\}$. Every listed edge joins consecutive-parity layers, so these sets form a bipartition.

</details>

### DM-SP1-E070 — Leaves forced by degrees (intermediate)

A tree has four vertices of degree $3$, and every other vertex has degree $1$ or $2$. Prove it has at least six leaves.

<details>
<summary>Hint 1</summary>

**Hint.** Combine the handshaking identity with the tree edge count to eliminate the total number of vertices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** In the sum of $\\operatorname{deg}(v)-2$, degree-two vertices vanish; compare the contributions of the four branching vertices and the leaves.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E070 — Solution

For a tree, $\\sum_{v}(\\operatorname{deg}(v)-2)=-2$. Each degree-three vertex contributes $1$, each leaf contributes $-1$, and degree-two vertices contribute $0$. If there are $L$ leaves, $4-L=-2$, so in fact $L=6$. The claimed lower bound follows, with equality forced under the stated degree restriction.

</details>

### DM-SP1-E071 — Intersections of tree paths (advanced)

Let $P$ and $Q$ be two simple paths in a tree $T$. Prove that their common vertices, together with their common edges, form either the empty graph, one vertex, or a simple path.

<details>
<summary>Hint 1</summary>

**Hint.** Take any two common vertices and compare the segments joining them along the two paths.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Tree-path uniqueness makes every vertex between those two common as well. Combine connectedness with the degree bound inherited from a path.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E071 — Solution

If the paths have at most one common vertex, the claim is immediate. Otherwise choose common vertices $x,y$. A tree has a unique simple $x$–$y$ path. The portion of $P$ between $x,y$ and the portion of $Q$ between them must both be that unique path, so every vertex between them is common. Thus the intersection is connected. It is acyclic as a subgraph of $T$ and has maximum degree at most two as a subgraph of a path; every nontrivial connected graph with those properties is a simple path.

</details>

### DM-SP1-E072 — Center of a tree (advanced)

Repeatedly delete all leaves from a finite tree with at least two vertices, stopping before a round whenever only one vertex or two adjacent vertices remain. Prove that the process ends in one of those states, and that deleting leaves does not change which remaining paths are longest among remaining vertices.

<details>
<summary>Hint 1</summary>

**Hint.** Show first that the path between any two surviving vertices cannot use a leaf internally.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For longest paths, compare a path before pruning with its endpoints removed, and a longest path afterward with leaf neighbors restored; handle a one-vertex remainder separately.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E072 — Solution

Each round preserves connectedness and acyclicity on the remaining vertices, because the unique path between two surviving vertices cannot use a deleted leaf internally. Unless at most two adjacent vertices remain, a finite tree has at least two leaves, so size decreases. For one deletion round, let $T'$ be the pruned tree. A longest path of $T$ has leaf endpoints, so deleting those endpoints leaves a path in $T'$ two edges shorter. Conversely, each endpoint of a longest path in nontrivial $T'$ was not a leaf of $T$ and therefore has a deleted-leaf neighbor; adjoining one at each end extends it by two edges. If $T'$ is one vertex, that vertex has two deleted-leaf neighbors because the round began with at least three vertices. Hence a longer path in $T'$ would extend to a longer path in $T$, a contradiction. Longest paths are therefore preserved up to deleting or restoring their leaf endpoints, and iteration ends at one vertex or one edge.

</details>

### DM-SP1-E073 — Connectivity lower bound (advanced)

Prove that every connected graph on $n\\ge 1$ vertices has at least $n-1$ edges, and characterize equality.

<details>
<summary>Hint 1</summary>

**Hint.** Grow a spanning tree by adding an edge each time a new vertex is reached.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare its edge set with that of the original graph; equality of the counts leaves no edge outside the tree.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E073 — Solution

A connected graph has a spanning tree, obtained for example by keeping the first edge that discovers each new vertex. That tree has $n-1$ edges, so the graph has at least that many. Equality means the graph consists exactly of its spanning tree, hence is acyclic. Conversely every tree is connected and has $n-1$ edges.

</details>

### DM-SP1-E074 — Degree sequence impossibility (advanced)

Can a simple graph have degree sequence $(4,4,1,1,1)$? Give two independent obstructions if possible.

<details>
<summary>Hint 1</summary>

**Hint.** Check the parity of the degree sum before attempting a construction.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For an independent obstruction, ask what adjacency to two degree-four vertices forces on each of the remaining three vertices.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E074 — Solution

No. The degree sum is $11$, odd, contradicting the handshaking lemma. Also, in a five-vertex simple graph, a degree-four vertex is adjacent to every other vertex. Two such vertices force each of the remaining three vertices to have degree at least two, contradicting their listed degree one. Either certificate suffices.

</details>

### DM-SP1-E075 — Fundamental cycles as certificates (advanced)

Let $T$ be a spanning tree of connected $G$. For every edge $e\\notin T$, define $C_{e}$ as $e$ plus the unique path in $T$ between its endpoints. Prove that every cycle of $G$ contains at least one non-tree edge and explain how one such edge yields an explicit cycle certificate.

<details>
<summary>Hint 1</summary>

**Hint.** What would a cycle using only tree edges imply about $T$?

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For a selected non-tree edge, list the unique tree path between its endpoints. This need not be the same cycle you originally started with.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E075 — Solution

A cycle cannot lie entirely in $T$ because a tree is acyclic, so it contains some $e\\notin T$. Independently of the original cycle, the endpoints of $e$ have a unique tree path; adding $e$ produces $C_{e}$. Listing that path followed by $e$ is a checkable cycle certificate requiring no picture.

</details>

## Chapter 6: Planarity, Coloring, and Matchings

### DM-SP1-E076 — Euler arithmetic (introductory)

A connected planar embedding has $v=8$ and $e=12$. How many faces does it have?

<details>
<summary>Hint 1</summary>

**Hint.** Use Euler's formula for the given connected planar embedding.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Solve for the face variable and remember that the unbounded region is included in its meaning.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E076 — Solution

Euler’s formula $v-e+f=2$ gives $f=2-v+e=6$. This counts the unbounded face as well as bounded faces.

</details>

### DM-SP1-E077 — A greedy coloring (introductory)

Color the graph with vertex order $1,2,3,4,5$ and edges $\\{12,13,23,24,35,45\\}$ greedily using the least available positive color.

<details>
<summary>Hint 1</summary>

**Hint.** Process vertices in the specified order, recording only colors already assigned to neighbors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** At each step choose the smallest positive integer absent from those neighbor colors; later neighbors impose no restriction yet.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E077 — Solution

Vertex $1$ gets color $1$; $2$ gets $2$; $3$, adjacent to both, gets $3$; $4$ is adjacent only to earlier vertex $2$, so gets $1$; $5$ is adjacent to earlier vertices $3,4$, colored $3,1$, so gets $2$. The resulting sequence is $1,2,3,1,2$ and is proper.

</details>

### DM-SP1-E078 — Matching check (introductory)

In the graph with edges $\\{ab,ac,bd,cd,de\\}$, which of $\\{ac,bd\\}$ and $\\{ab,bd\\}$ are matchings?

<details>
<summary>Hint 1</summary>

**Hint.** A matching forbids shared endpoints between distinct chosen edges.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Write the two endpoints of each proposed edge and look for a repeated vertex within each candidate family.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E078 — Solution

$\\{ac,bd\\}$ is a matching because its edges have four distinct endpoints. $\\{ab,bd\\}$ is not: both edges meet at $b$. A matching condition concerns shared vertices, not merely repeated edges.

</details>

### DM-SP1-E079 — Hall on a small family (introductory)

Applicants $\\{A,B,C\\}$ can take jobs with neighborhoods $N(A)=\\{1,2\\}$, $N(B)=\\{2,3\\}$, $N(C)=\\{1,3\\}$. Exhibit a matching covering all applicants.

<details>
<summary>Hint 1</summary>

**Hint.** Choose one allowed job for each applicant, avoiding jobs already used.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A list of three distinct allowed assignments is enough to certify feasibility; no exhaustive Hall-condition calculation is needed for this request.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E079 — Solution

Match $A$ to $1$, $B$ to $2$, and $C$ to $3$. Each assigned job is allowed and no job repeats, so this is a covering matching and an explicit certificate of feasibility.

</details>

### DM-SP1-E080 — Alternating path terminology (introductory)

Let $M=\\{a1,b2\\}$ in a bipartite graph containing edges $a1,a2,b2,b3,c3$. Audit the claim that $c-3-b-2-a$ is an augmenting path, reading symbols alternately as left vertices and numbered right vertices. If the claim fails, give an actual augmenting path.

<details>
<summary>Hint 1</summary>

**Hint.** Mark each traversed edge as belonging or not belonging to $M$, then inspect alternation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Also identify the unmatched vertices. An unused edge directly joining two of them already gives an augmenting path.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E080 — Solution

Its first two edges are $c3$ and $3b=b3$, neither in $M$, so as written the path is not alternating and therefore not augmenting. Under the stated $M$, the one-edge path $c-3$ is augmenting because both endpoints are unmatched and its only edge is outside $M$. The exercise diagnoses that endpoint freedom alone is insufficient without alternation.

</details>

### DM-SP1-E081 — Planar girth bound (intermediate)

Prove that a connected simple planar graph with $v\\ge 3$ and no triangles satisfies $e\\le 2v-4$.

<details>
<summary>Hint 1</summary>

**Hint.** Count edge-sides around faces, including repeated appearances of a bridge.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** With simplicity, no triangles, and $v\\ge3$, each face boundary walk has length at least four; combine that total-length inequality with Euler's formula.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E081 — Solution

Every face boundary has length at least four. Counting edge-sides gives $4f\\le 2e$, so $f\\le e/2$. Euler’s formula yields $2=v-e+f\\le v-e/2$, hence $e\\le 2v-4$. Simplicity and absence of triangles justify the face-length bound.

</details>

### DM-SP1-E082 — Nonplanarity certificate by inequality (intermediate)

Use an edge bound to prove $K_{3,3}$ is nonplanar.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the vertex and edge counts of $K_{3,3}$ from its two parts.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the triangle-free planar edge bound, since bipartiteness excludes triangles, and compare its permitted edge total with the actual count.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E082 — Solution

$K_{3,3}$ is simple, bipartite, has $v=6$, and has $e=9$. A planar bipartite graph with at least three vertices has no odd face boundary and in particular satisfies $e\\le 2v-4=8$. Since $9>8$, $K_{3,3}$ cannot be planar.

</details>

### DM-SP1-E083 — Degeneracy coloring (intermediate)

Prove that if every nonempty subgraph of $G$ has a vertex of degree at most $k$, then $G$ is $(k+1)$-colorable.

<details>
<summary>Hint 1</summary>

**Hint.** Use the hypothesis repeatedly on the graph remaining after a vertex is removed.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Color in reverse removal order. Compare the number of already colored neighbors with the number of available colors.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E083 — Solution

Repeatedly remove a vertex of degree at most $k$, which exists in every remaining nonempty subgraph. Reverse the removal order and color greedily. When a vertex is restored, at most $k$ already colored neighbors forbid colors, so one of $k+1$ colors remains. This constructs a proper coloring.

</details>

### DM-SP1-E084 — Augmentation increases size (intermediate)

Prove that toggling membership of all edges along an augmenting path produces a matching with one more edge.

<details>
<summary>Hint 1</summary>

**Hint.** Along an augmenting path, compare the numbers of edges currently inside and outside the matching.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check endpoints, internal vertices, and vertices off the path separately to show toggling preserves the matching condition.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E084 — Solution

Along the path, unmatched and matched edges alternate, beginning and ending unmatched. Toggling pairs every internal vertex with the other incident path edge, while the formerly unmatched endpoints each become matched. Outside the path nothing changes. The path contains one more unmatched than matched edge, so the new matching has size $|M|+1$.

</details>

### DM-SP1-E085 — Comparing two matchings (intermediate)

Let $M$ and $N$ be matchings in the same finite graph. Can a connected component formed by the edges in the symmetric difference $M\\mathbin{\\triangle}N$ contain a vertex of degree three or an odd cycle? Prove a complete structural classification of its nonempty components.

<details>
<summary>Hint 1</summary>

**Hint.** Each vertex can be incident to at most one edge from each of the two matchings.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A nontrivial component of maximum degree two is a path or cycle. Adjacent edges must alternate between the matchings; ask what this forces on cycle length.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E085 — Solution

No. At a vertex, at most one incident edge belongs to $M$ and at most one belongs to $N$, so its degree in the symmetric-difference graph is at most two. Moreover, consecutive component edges must alternate between $M\\setminus N$ and $N\\setminus M$; two adjacent edges from either one would violate the matching property. A finite connected graph of maximum degree two is a path or a cycle, and an alternating cycle has even length. Thus every nonempty component of $M\\mathbin{\\triangle}N$ is an alternating path or an alternating even cycle.

</details>

### DM-SP1-E086 — Six-color consequence (advanced)

Prove that every simple planar graph is $6$-colorable using only Euler’s edge bound and greedy deletion.

<details>
<summary>Hint 1</summary>

**Hint.** Convert Euler's planar edge bound into a bound on average degree.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Apply the same observation to each remaining subgraph, treating graphs with fewer than three vertices directly, then reverse the deletion order to color.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E086 — Solution

Every planar graph with at least three vertices has average degree less than $6$, so it has a vertex of degree at most $5$. The same holds for every subgraph, which remains planar. Repeatedly delete such a vertex, then restore vertices in reverse order. At most five neighbor colors are forbidden at each restoration, so six colors suffice.

</details>

### DM-SP1-E087 — Why an edge count is inconclusive (advanced)

Give a nonplanar simple graph satisfying $e\\le 3v-6$, and explain why the planar edge inequality is only a one-way test.

<details>
<summary>Hint 1</summary>

**Hint.** Look for a graph ruled out by the stronger bipartite planar bound even though it passes the general bound.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare both inequalities on $K_{3,3}$ and explain why passing a necessary numerical condition supplies no embedding.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E087 — Solution

$K_{3,3}$ has $v=6$, $e=9$, and $9\\le 12=3v-6$, yet it is nonplanar by the bipartite bound from Exercise 082. Every planar simple graph satisfies the general inequality, but satisfying it does not construct an embedding. Necessary conditions need not be sufficient.

</details>

### DM-SP1-E088 — Derive Hall from a covering matching (advanced)

Let $G=(L,R;E)$ have a matching covering $L$. Prove that $|N(S)|\\ge |S|$ for every $S\\subseteq L$.

<details>
<summary>Hint 1</summary>

**Hint.** Restrict the covering matching to any chosen subset $S$ of the left part.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Map each vertex of $S$ to its matched partner; explain both why the image lies in $N(S)$ and why partners cannot coincide.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E088 — Solution

Each vertex of $S$ is matched to a distinct vertex of $R$, and every such partner lies in $N(S)$. The matching therefore gives an injection from $S$ into $N(S)$. Finite cardinalities then imply $|S|\\le |N(S)|$.

</details>

### DM-SP1-E089 — Minimum vertex cover certificate (advanced)

In the bipartite graph with edges $\\{a1,a2,b1,b3,c2,c3\\}$, find a maximum matching and a vertex cover of the same size.

<details>
<summary>Hint 1</summary>

**Hint.** Try to match all three left vertices to distinct numbered vertices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All left vertices also form a cover. Use the displayed matching to give a lower bound for every cover and an upper bound for every matching.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E089 — Solution

The edges $\\{a1,b3,c2\\}$ form a matching of size three and cover all three left vertices. The set $\\{a,b,c\\}$ is a vertex cover of size three because every edge has a left endpoint there. Any vertex cover must contain at least one endpoint of each edge in the displayed matching, so it has size at least three. The equal-size certificates prove both are optimal.

</details>

### DM-SP1-E090 — List-coloring boundary (advanced)

Each vertex of a cycle receives a list of two permitted colors. Is every cycle necessarily colorable from its lists? Prove or refute with explicit lists.

<details>
<summary>Hint 1</summary>

**Hint.** The lists are allowed to be identical at every vertex, so ordinary two-coloring is a special case.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Choose an odd cycle and give its vertices the same two-color list; follow the forced alternation around the closing edge.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E090 — Solution

No. For a triangle, give every vertex the same list $\\{red,blue\\}$. A proper list-coloring would be a proper two-coloring of the triangle, impossible because following alternating colors around an odd cycle forces the last vertex to match the first. This counterexample also shows that list size two does not by itself imply two-colorability.

</details>

## Chapter 7: Probabilistic and Extremal Methods

Every probability space below is finite. Random choices are uniform unless another distribution is stated.

### DM-SP1-E091 — Expected fixed points (introductory)

A permutation of $\\{1,2,\\ldots,n\\}$ is chosen uniformly, with $n\\ge 1$. Find the expected number of fixed points without assuming the fixed-point events are independent.

<details>
<summary>Hint 1</summary>

**Hint.** Use one indicator variable for the event that each particular element is fixed.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Count permutations fixing a specified element, then sum the indicator expectations; linearity does not require independence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E091 — Solution

Let $I_{i}$ indicate that $i$ is fixed. Exactly $(n-1)!$ of the $n!$ permutations fix $i$, so $E[I_{i}]=1/n$. The number of fixed points is $X=\\sum I_{i}$; linearity gives $E[X]=n\\cdot (1/n)=1$. Independence is unnecessary.

</details>

### DM-SP1-E092 — A random cut (introductory)

Place each vertex of a graph independently into $L$ or $R$, each with probability $1/2$. If the graph has $m$ edges, find the expected number crossing between the parts.

<details>
<summary>Hint 1</summary>

**Hint.** For one edge, enumerate the four possible assignments of its endpoints to $L$ and $R$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Introduce a crossing indicator for each edge and sum their expectations; independence between different crossing indicators is unnecessary.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E092 — Solution

For each edge, its endpoints land on opposite sides in two of the four equally likely assignments, so its crossing indicator has expectation $1/2$. Summing over the $m$ edges gives expected crossing count $m/2$. Therefore some cut has at least $m/2$ crossing edges.

</details>

### DM-SP1-E093 — Uniform subset probability (introductory)

A three-element subset of $\\{a,b,c,d,e,f,g,h\\}$ is chosen uniformly. What is the probability that it contains at least one of $a,b$?

<details>
<summary>Hint 1</summary>

**Hint.** Count the complementary event that neither distinguished element is chosen.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare three-element subsets of the six undistinguished elements with all three-element subsets of the eight-element universe.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E093 — Solution

There are $\\binom{8}{3}=56$ equally likely subsets. The complement event avoids both distinguished elements, so it has $\\binom{6}{3}=20$ outcomes. Therefore the required probability is $1-20/56=36/56=9/14$. Counting the complement avoids overlap between “contains $a$” and “contains $b$.”

</details>

### DM-SP1-E094 — First-moment conclusion (introductory)

A nonnegative integer-valued random variable $X$ has $E[X]=0.3$. Prove that some outcome has $X=0$.

<details>
<summary>Hint 1</summary>

**Hint.** Suppose every outcome had $X\\ne0$ and use the integer-valued hypothesis.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Nonnegative integers different from zero are at least one; compare the resulting lower bound on the average with the stated expectation.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E094 — Solution

If every outcome had $X\\ge 1$, the average would be at least $1$, contradicting $E[X]=0.3$. Therefore at least one outcome has $X=0$. The conclusion is existence, not that most outcomes are defect-free.

</details>

### DM-SP1-E095 — Ramsey scope (introductory)

Explain precisely what $R(3,3)\\le 6$ says about red-blue edge-colorings, and what it does not say about five vertices.

<details>
<summary>Hint 1</summary>

**Hint.** Unpack the Ramsey notation into a statement beginning “every coloring” on a specified complete graph.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An upper bound guarantees forcing at the stated size; consider what extra construction or argument would be needed to make a claim below that size.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E095 — Solution

It says every red-blue coloring of the edges of $K_{6}$ contains a monochromatic triangle. It does not say every coloring of $K_{5}$ has one, nor does it itself construct a five-vertex coloring without one. An upper bound is a universal forcing statement at and above the stated size, not a lower-bound construction below it.

</details>

### DM-SP1-E096 — Biased random cut (intermediate)

Put each vertex in $L$ with probability $p$ and in $R$ with probability $1-p$, independently. Find the expected cut size and the value of $p$ maximizing it.

<details>
<summary>Hint 1</summary>

**Hint.** For a fixed edge, its endpoints can cross in either of two orientations.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Sum crossing indicators, then complete the square in the resulting quadratic in $p$ and respect $0\\le p\\le1$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E096 — Solution

An edge crosses with probability $p(1-p)+(1-p)p=2p(1-p)$, so the expectation is $2mp(1-p)$. Completing the square, $2p(1-p)=1/2-2(p-1/2)^{2}$, maximized at $p=1/2$. The maximum expectation is $m/2$.

</details>

### DM-SP1-E097 — Independent set by random deletion (intermediate)

Let $G$ have $n$ vertices and $m$ edges. Select each vertex independently with probability $p$, then delete one endpoint from every surviving edge. Prove that some independent set has size at least $pn-mp^{2}$.

<details>
<summary>Hint 1</summary>

**Hint.** Let $Y$ count selected vertices and $Z$ count edges whose two endpoints were selected.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The deletion stage removes at most $Z$ vertices. Average the random lower bound $Y-Z$, then use that some outcome reaches at least its average.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E097 — Solution

Let $Y$ be selected vertices and $Z$ surviving edges. Their expectations are $pn$ and $mp^{2}$. Deleting at most one vertex per surviving edge leaves an independent set of size at least $Y-Z$: after processing every surviving edge, none remains. Hence some outcome has $Y-Z\\ge E[Y-Z]=pn-mp^{2}$.

</details>

### DM-SP1-E098 — Optimize the alteration bound (intermediate)

Assume $m>0$. Optimize the bound $pn-mp^{2}$ over $0\\le p\\le 1$, and state the result with its necessary case distinction.

<details>
<summary>Hint 1</summary>

**Hint.** The bound is a concave quadratic; find its unrestricted maximizing value of $p$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check whether that value belongs to $[0,1]$. If it lies beyond the interval, compare the appropriate boundary value, and remember set sizes are integers.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E098 — Solution

The quadratic has unconstrained maximizer $p=n/(2m)$. If $m\\ge n/2$, this lies in $[0,1]$ and yields $n^{2}/(4m)$. If $m<n/2$, the maximum on $[0,1]$ occurs at $p=1$, yielding $n-m$. Thus the alteration argument guarantees at least the corresponding quantity (and an integer set of at least its ceiling).

</details>

### DM-SP1-E099 — Two-color triangle expectation (intermediate)

Color every edge of $K_{n}$ independently red or blue with equal probability. Find the expected number of monochromatic triangles.

<details>
<summary>Hint 1</summary>

**Hint.** Use one indicator for each three-vertex set, and calculate its monochromatic probability.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The all-red and all-blue cases are disjoint. Sum over triples even though different triangle events can share edges.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E099 — Solution

For a fixed triple, all three edges are red with probability $1/8$ and all blue with probability $1/8$, so it is monochromatic with probability $1/4$. There are $\\binom{n}{3}$ triples. Linearity gives expectation $\\binom{n}{3}/4$, although triangle events overlap and are not mutually independent.

</details>

### DM-SP1-E100 — Average degree extremal step (intermediate)

Prove that every graph with average degree at least $d$ has a subgraph of minimum degree at least $d/2$, where $d\\ge 0$ is real.

<details>
<summary>Hint 1</summary>

**Hint.** Repeatedly delete a vertex whose current degree is below the desired threshold.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** If all vertices were removed, charge each original edge when its first endpoint is deleted; compare the total charge with the original average degree.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E100 — Solution

Repeatedly delete a vertex whose current degree is less than $d/2$. If all vertices were deleted, each deleted vertex would be charged fewer than $d/2$ edges that remained at its deletion; every original edge is charged exactly once, so $m<nd/2$, contradicting original average degree $2m/n\\ge d$. Therefore a nonempty remainder exists and has minimum degree at least $d/2$.

</details>

### DM-SP1-E101 — Prove the triangle-free edge bound (advanced)

Let $G$ be triangle-free on $n$ vertices. Prove $|E(G)|\\le n^{2}/4$ using degrees and one edge-local observation.

<details>
<summary>Hint 1</summary>

**Hint.** For an edge $uv$, triangle-freeness restricts the overlap of $N(u)$ and $N(v)$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Sum the resulting degree bound over edges, identify a sum of squared degrees, and apply Cauchy's inequality; separate the case of no edges before dividing.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E101 — Solution

For every edge $uv$, triangle-freeness makes $N(u)$ and $N(v)$ disjoint, so $\\operatorname{deg}(u)+\\operatorname{deg}(v)\\le n$. Summing over edges gives $\\sum_{v} \\operatorname{deg}(v)^{2}\\le mn$, because vertex $v$ appears in $\\operatorname{deg}(v)$ edge-summands. Cauchy’s inequality gives $(2m)^{2}=(\\sum \\operatorname{deg}(v))^{2}\\le n\\sum \\operatorname{deg}(v)^{2}\\le mn^{2}$. If $m>0$, divide by $m$ to obtain $m\\le n^{2}/4$; for $m=0$ it is immediate.

</details>

### DM-SP1-E102 — A Ramsey recurrence (advanced)

Prove $R(s,t)\\le R(s-1,t)+R(s,t-1)$ for integers $s,t\\ge 2$, using the convention that $R(s,t)$ forces a red $K_{s}$ or blue $K_{t}$.

<details>
<summary>Hint 1</summary>

**Hint.** At one vertex, split the other vertices into red neighbors and blue neighbors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** If both groups fell below their respective Ramsey thresholds, their total would be too small. Apply the appropriate smaller Ramsey number within a large group.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E102 — Solution

Let $N$ be the right side and color $K_{N}$. At a vertex $v$, at least $R(s-1,t)$ incident edges are red or at least $R(s,t-1)$ are blue; otherwise the two neighbor counts sum to at most $N-2$. In the first case, the red-neighbor subgraph has a red $K_{s-1}$, which with $v$ gives red $K_{s}$, or a blue $K_{t}$. The second case is symmetric.

</details>

### DM-SP1-E103 — Lower bound by expectation (advanced)

Prove that if $\\binom{n}{k}2^{1-\\binom{k}{2}}<1$, then there exists a red-blue coloring of $K_{n}$ with no monochromatic $K_{k}$.

<details>
<summary>Hint 1</summary>

**Hint.** Choose a random coloring and count monochromatic $k$-vertex sets with an indicator sum.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For one such set, account for every edge being the same color. Use the hypothesis to make the integer-valued count have expectation below one.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E103 — Solution

Color edges independently and uniformly. A fixed $k$-vertex set is all red or all blue with probability $2\\cdot 2^{-\\binom{k}{2}}=2^{1-\\binom{k}{2}}$. If $X$ counts monochromatic $K_{k}$ sets, linearity gives the displayed expression for $E[X]$. Because it is less than one and $X$ is a nonnegative integer, some outcome has $X=0$.

</details>

### DM-SP1-E104 — Stability is an additional claim (advanced)

For even $n$, construct a triangle-free graph with $n^{2}/4-n/2$ edges that can be made complete bipartite by adding only $n/2$ edges. Explain why its edge count alone does not prove a general stability theorem.

<details>
<summary>Hint 1</summary>

**Hint.** Start with the balanced complete bipartite graph and remove a small collection of edges.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A perfect matching removes the requested number without destroying bipartiteness. Then contrast the quantifiers in one construction with those in a stability theorem.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E104 — Solution

Start with $K_{n/2,n/2}$ and delete a matching of size $n/2$. It remains bipartite and therefore triangle-free, has the required edge count, and adding the deleted matching restores the extremal graph. This is one near-extremal example. A stability theorem quantifies over every sufficiently near-extremal triangle-free graph, so exhibiting one well-structured family does not prove that universal assertion.

</details>

## Chapter 8: Finite Games, Strategy, and a Structural Capstone

Unless stated otherwise, a player unable to move loses. A strategy must prescribe a legal move after every reachable opponent response.

### DM-SP1-E105 — Backward labels (introductory)

A game has positions $A,B,C,D$ with moves $A\\to B$, $A\\to C$, $B\\to D$, and $C\\to D$; $D$ has no move. Label every position winning or losing for the player to move.

<details>
<summary>Hint 1</summary>

**Hint.** Label the position with no moves first, then work backward through its predecessors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A position with a losing successor is winning; one whose every successor is winning is losing.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E105 — Solution

$D$ is losing. Both $B$ and $C$ are winning because each moves to losing $D$. Every move from $A$ goes to a winning position, so $A$ is losing. This is backward induction on the listed acyclic move graph, which is also the plain-text game diagram.

</details>

### DM-SP1-E106 — Subtract one or two (introductory)

From a heap of $n$ tokens, a move removes $1$ or $2$. Determine the losing positions and give a strategy.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the first few labels from the terminal heap and compare them by remainder modulo three.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** To prove a proposed losing class, show moves from it always leave it and that every other class has a legal move into it.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E106 — Solution

Positions divisible by $3$ are losing. From such a position every move reaches a nonmultiple; from a nonmultiple remove its remainder modulo $3$, either $1$ or $2$, to reach a multiple. This induction starts at $0$, which is losing. The strategy repeats that reply after every opponent move.

</details>

### DM-SP1-E107 — Misère boundary (introductory)

In the one-heap game where each move removes exactly one token and the player taking the last token loses, classify positions by parity.

<details>
<summary>Hint 1</summary>

**Hint.** Start at one token, where the special last-token rule directly determines the outcome.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Every move changes parity. Propagate the labels upward from that base, without assuming an outcome for an unspecified empty starting position.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E107 — Solution

With one token, the player to move must take the last and loses, so $1$ is losing. Every move changes parity. Thus even positive heaps move to an odd losing heap and are winning; odd heaps move to an even winning heap and are losing. The empty starting state needs a separately declared convention and is not used here.

</details>

### DM-SP1-E108 — Strategy versus line of play (introductory)

A root has moves to $X$ and $Y$. From $X$, the opponent can choose $P$ or $Q$. At $P$ the original player may choose $p1$ or $p2$, and at $Q$ may choose $q1$ or $q2$; those four destinations are terminal. Is “move to $X$, then if the opponent chooses $P$, move to $p1$” a strategy for the original player? Explain.

<details>
<summary>Hint 1</summary>

**Hint.** A strategy must supply a decision after every opponent response reachable under its earlier choices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Follow the opponent's branch through $Q$ and inspect whether the quoted prescription tells the original player what to do there.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E108 — Solution

No. It gives a legal decision after the branch through $P$, but prescribes nothing after the opponent chooses $Q$. A strategy must specify a move at every decision point reachable under every opponent response, whether or not the resulting strategy wins. Adding either $q1$ or $q2$ for the $Q$ branch would make the prescription complete on the route beginning at $X$.

</details>

### DM-SP1-E109 — A mex calculation (introductory)

In a subtraction game allowing removal of $1$ or $2$, compute Grundy values $g(0),\\ldots,g(6)$ under normal play.

<details>
<summary>Hint 1</summary>

**Hint.** Begin with the terminal value, then take the smallest nonnegative integer absent from successor values.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** At heap size one, only one subtraction is legal; from size two onward inspect the preceding two computed values.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E109 — Solution

$g(0)=0$. Recursively, $g(n)=\\operatorname{mex}(\\{g(n-1),g(n-2)\\})$, omitting negative indices. The values are $0,1,2,0,1,2,0$. Thus the pattern has period three, matching the losing multiples of three.

</details>

### DM-SP1-E110 — Subtract one, three, or four (intermediate)

Compute winning and losing positions through $n=12$ for the heap game with moves $\\{1,3,4\\}$. State a conjectured pattern but distinguish it from the finite computation.

<details>
<summary>Hint 1</summary>

**Hint.** Build the table in increasing heap size, using only subtractions not exceeding the heap.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Mark a heap winning if at least one legal successor is losing. Look for repeated residue classes afterward, while keeping a finite table distinct from a universal proof.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E110 — Solution

Starting with $0=L$, recursive labeling gives $1=W,2=L,3=W,4=W,5=W,6=W,7=L,8=W,9=L,10=W,11=W,12=W$. The data suggest losing residues $0,2$ modulo $7$. That periodic statement is only a conjecture until proved; an induction can prove it by checking that legal moves leave those residues and that every other residue has a move into them.

</details>

### DM-SP1-E111 — Prove the periodic strategy (intermediate)

Complete the proof suggested in Exercise 110: positions congruent to $0$ or $2$ modulo $7$ are exactly the losing positions.

<details>
<summary>Hint 1</summary>

**Hint.** For residues $0$ and $2$ modulo seven, list all residues obtainable by subtracting $1$, $3$, or $4$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For every other residue, exhibit a subtraction reaching a proposed losing residue; check that it is legal at the smallest heap sizes before applying induction.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E111 — Solution

From a positive heap of residue $0$, legal subtraction by $1,3,4$ reaches residues $6,4,3$. For residue $2$, the base heap $n=2$ has only the legal move to $1$; for every larger such heap ($n\\ge 9$), subtraction reaches residues $1,6,5$. None is in $\\{0,2\\}$. Conversely, residues $1,3,4$ can subtract $1,3,4$, respectively, to reach residue $0$, while residues $5,6$ can subtract $3,4$, respectively, to reach residue $2$. With $0$ and $2$ checked as bases, induction on heap size proves the classification.

</details>

### DM-SP1-E112 — Two-heap mirror strategy (intermediate)

Two heaps begin with equal size. A move removes any positive number of tokens from exactly one heap. Prove the second player wins.

<details>
<summary>Hint 1</summary>

**Hint.** Look for a relation between the heaps that the second player can restore after each opponent move.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Starting from equal heaps, the opponent's subtraction from one heap can be copied in the other. Check legality, termination, and the initially empty case.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E112 — Solution

If both heaps have size zero, the first player has no legal move and loses, so the second wins without moving. Otherwise maintain equality after each second-player move. If the first player removes $r$ tokens from one heap, the second removes $r$ from the other, which is legal because the heaps were equal before the pair of moves. This response restores equality. Finiteness ensures termination, and eventually the second player makes the last move.

</details>

### DM-SP1-E113 — Sum of small game values (intermediate)

Two independent heaps use subtraction moves $\\{1,2\\}$ and have sizes $4$ and $5$. Using the values from Exercise 109 and binary xor, decide whether the position is winning and give a winning move.

<details>
<summary>Hint 1</summary>

**Hint.** Find each heap's Grundy value using the earlier table, then take their binary xor.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Search the legal changes of a single heap for one making the two Grundy values equal, so the resulting xor is zero.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E113 — Solution

$g(4)=1$ and $g(5)=2$, so the xor is $1 xor 2=3\\ne 0$; the position is winning. Reduce the heap of size $5$ to size $4$ by removing one: the new xor is $g(4) xor g(4)=1 xor 1=0$. This is legal and hands the opponent a zero-value sum.

</details>

### DM-SP1-E114 — Exact state-table audit (intermediate)

An experiment labels a position losing exactly when all recorded successors are winning. Give two checks needed before treating its table as a proof certificate for all positions of size at most $N$.

<details>
<summary>Hint 1</summary>

**Hint.** The word “all” in the labeling rule is justified only if successor generation is complete.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Also ask why a row can rely on its successors without a circular argument; identify a decreasing state order and check terminal states.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E114 — Solution

First verify completeness: every legal successor of every in-scope state must be generated, not merely sampled. Second verify a well-founded order: every successor used in the recursion must be smaller or already certified, so no circular labels occur. One must also check terminal labels and canonicalization of equivalent states. With these conditions, induction over the state order turns the exhaustive table into a finite proof for the stated bound only.

</details>

### DM-SP1-E115 — Strategy stealing with explicit hypotheses (advanced)

Consider a finite, deterministic, perfect-information placement game with alternating moves, no draws, and at least one legal opening. Assume the rules and winning condition are unchanged when player names are swapped. Fix a legal opening $x$. Assume also this precise extra-move property: after playing $x$, the first player can simulate any proposed second-player strategy with names swapped; if that strategy requests a cell already occupied by an extra first-player piece, some other legal placement may be substituted, and having those extra first-player pieces never destroys a forced win. Prove that $x$ is a winning opening, and state the construction’s limitation.

<details>
<summary>Hint 1</summary>

**Hint.** Assume the fixed opening $x$ does not win and use determinacy with the no-draw hypothesis.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Follow the stated simulation and substitution property with player names swapped, then compare the simulated win with the supposed opponent strategy; distinguish existence from an explicit continuation.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E115 — Solution

Suppose $x$ were not winning. Determinacy and the absence of draws would give the second player a winning strategy. The first plays the identified opening $x$ and then simulates that strategy with player names exchanged, using the stated substitution rule whenever an extra first-player piece occupies a requested cell. Symmetry makes the simulated moves applicable, and extra-move monotonicity preserves the simulated win. This would make both the second-player strategy and the first-player simulation winning, a contradiction. Thus the specific opening $x$ is winning. The proof identifies a playable opening, but its continuation is nonconstructive unless the hypothetical opponent strategy and all substitute moves can actually be extracted.

</details>

### DM-SP1-E116 — Design a finite-game verifier (advanced)

Specify pseudocode for labeling a finite acyclic game graph and state a certificate that another reader can check without running the program.

<details>
<summary>Hint 1</summary>

**Hint.** Process successors before predecessors in the acyclic move graph.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For a winning row store one losing successor; for a losing row list every successor. Include a decreasing rank so a reader can rule out circular justification.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E116 — Solution

Process positions in reverse topological order. Set $\\operatorname{label}[p]=L$ if $p$ has no successor or every successor is $W$; otherwise set $\\operatorname{label}[p]=W$ and store one successor labeled $L$. A certificate lists the complete successor set and label of every position, a topological rank decreasing along each move, and for every $W$ position its stored losing successor. A reader checks terminal rows, ranks, all-successor claims for $L$, and the witness for $W$.

</details>

### DM-SP1-E117 — Winning labels are not enough for sums (advanced)

Let game $A$ have one move to terminal $0$. Let game $B$ have moves to $0$ and to $A$; these edge lists are the complete plain-text game graphs. Both $A$ and $B$ are winning under normal play. Use Grundy values to prove that knowing only “winning” is insufficient to predict a disjunctive sum: compare $A+A$ with $B+A$.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the mex of the successor-value set separately for $A$ and for $B$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both nonzero values mean winning in isolation, but compare the two different xors after adding the same game $A$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E117 — Solution

The terminal value is $g(0)=0$. Hence $g(A)=\\operatorname{mex}\\{0\\}=1$, while $g(B)=\\operatorname{mex}\\{0,1\\}=2$. Both nonzero values label winning positions, so a binary winning/losing table does not distinguish them. For sums, $g(A+A)=1 xor 1=0$, making $A+A$ losing, whereas $g(B+A)=2 xor 1=3$, making $B+A$ winning. The differing xor results prove that full Grundy values carry information lost by win/loss labels.

</details>

### DM-SP1-E118 — Eight-chapter synthesis certificate (advanced)

Let $G$ have vertices $\\{1,2,3,4,5,6\\}$ and edges $\\{12,23,31,34,45,56\\}$. Produce a compact certificate containing: its components, one cycle, a spanning tree, the number of proper two-colorings, and the result of a game in which players alternately delete one edge and the player deleting the last edge wins. State exactly which conclusions are proved.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the requested certificate into connectivity, cycle, tree, coloring, and game claims.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the triangle for the coloring obstruction, remove a triangle edge to seek a spanning tree, and count how many edge deletions any complete play must make; keep the conclusions specific to this graph.

</details>

<details>
<summary>Solution</summary>

#### DM-SP1-E118 — Solution

The graph has one component. $1-2-3-1$ is a cycle. Removing edge $31$ leaves the spanning tree with edges $\\{12,23,34,45,56\\}$. Because the triangle is odd, there are zero proper two-colorings. The edge-deletion game has exactly six moves regardless of choices, so the second player makes the sixth and last move and wins. The remaining-edge parity flips on each deletion, while the total number of moves is fixed. These certificates prove the claims for this labeled graph only. They do not count its spanning trees, determine its chromatic number beyond “greater than two” (though three is readily constructible), or establish a theorem for arbitrary graphs.

</details>

## Closing study guidance

Use the difficulty labels diagnostically. If an introductory solution feels mysterious, return to the chapter definition it invokes. For an intermediate problem, write the intermediate object—fiber, invariant, recurrence, spanning tree, matching, or random variable—before calculating. For an advanced problem, audit every hypothesis and separate the certificate for this finite instance from any universal claim. A correct solution should be reproducible from the text alone; none of these exercises requires interpreting color, spatial placement, or animation.
`;export{e as default};