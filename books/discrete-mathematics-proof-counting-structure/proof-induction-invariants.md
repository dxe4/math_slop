
# Proof, Induction, Recursion, Invariants, and Extremal Choice

A finite pattern may survive a billion cases for two very different reasons. Perhaps every case follows from a single structural argument. Or perhaps we merely tested a billion cases and the next one fails. Proof separates those situations.

This chapter assumes the set and relation language of Chapter 1. It develops proof patterns specifically for discrete structures. The aim is not a list of ceremonial templates. Each pattern makes a different use of the hypotheses.

## 1. Read the logical shape before choosing a method

An implication “if $P$, then $Q$” rules out one situation: $P$ true and $Q$ false. Its **contrapositive**, “if not $Q$, then not $P$,” rules out exactly the same situation and is logically equivalent. Its converse, “if $Q$, then $P$,” is a different claim.

Quantifiers also dictate the proof burden:

- To prove $\forall x P(x)$, choose an arbitrary allowed $x$ and prove $P(x)$ without adding special assumptions.
- To disprove $\forall x P(x)$, give one allowed counterexample.
- To prove $\exists x P(x)$, construct or otherwise establish at least one witness.
- To disprove $\exists x P(x)$, prove $P(x)$ fails for every allowed $x$.

The negation of “for every vertex there exists a neighbor” is “there exists a vertex with no neighbor,” not “every vertex has no neighbor.” Quantifiers reverse one at a time.

### Direct proof

**Claim.** The sum of two odd integers is even.

Let the odd integers be $2a+1$ and $2b+1$, where $a,b$ are integers. Their sum is $2(a+b+1)$, which is twice an integer and hence even. The definition of odd supplied representations; algebra produced the definition of even.

### Contraposition

**Claim.** If $n^{2}$ is even, then $n$ is even.

Prove the contrapositive. If $n$ is odd, write $n=2k+1$. Then $n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$, so $n^{2}$ is odd. Therefore an even square cannot come from an odd integer.

### Contradiction

Assume the claim false, combine that assumption with the hypotheses, and derive an impossibility. Contradiction is powerful when the negation provides a usable object, such as a smallest counterexample. It is weak when “suppose not” is written but never converted into information.

## 2. Counterexamples must satisfy every hypothesis

To refute “every connected graph has an even number of vertices,” one connected graph with an odd order suffices: a single vertex or a triangle. A disconnected three-vertex graph does not refute the statement, because it violates a hypothesis.

Boundary cases are particularly productive:

- empty set versus nonempty set;
- one vertex versus at least two;
- equality in an inequality;
- a repeated object when distinctness was intended;
- an infinite structure when a theorem assumes finite;
- a relation missing exactly one axiom.

**Diagnostic.** The claim “a relation that is symmetric and transitive is reflexive” is false. On $\{1,2\}$, the empty relation is symmetric and transitive vacuously but not reflexive. If nonemptiness of the relation is added, the claim still fails: $\{(1,1)\}$ is symmetric and transitive but omits $(2,2)$.

## 3. Induction proves propagation along a well-ordered index

The **principle of mathematical induction** says: if a statement $P(n)$ satisfies

1. $P(n_{0})$ is true, and
2. for every $k\ge n_{0}$, $P(k)$ implies $P(k+1)$,

then $P(n)$ is true for every integer $n\ge n_{0}$.

The base case is not a warm-up. It connects the implication chain to a true statement. The inductive step does not prove $P(k)$; it assumes $P(k)$ for an arbitrary $k$ and proves the next link.

### Worked proof: a finite sum

**Theorem 19.1.** For every $n\ge 1$,

$$1+3+5+\ldots+(2n-1)=n^{2}$$

**Proof.** For $n=1$, both sides equal $1$. Assume the identity holds for an arbitrary $k\ge 1$. The next sum is

$$[1+3+\ldots+(2k-1)]+(2(k+1)-1)$$

By the inductive hypothesis, this equals

$$k^{2}+2k+1=(k+1)^{2}$$

Thus the formula propagates from $k$ to $k+1$, completing the induction. ∎

The theorem is not proved by checking $n=1,2,3$. Those checks can reveal a mistaken formula; they cannot replace the propagation argument.

## 4. Strong induction matches recursive decomposition

In **strong induction**, the step may assume $P(j)$ for every $n_{0}\le j\le k$ when proving $P(k+1)$. It is logically equivalent to ordinary induction, but often aligns better with an object that can split into pieces of different sizes.

**Theorem 19.2.** Every integer $n\ge 2$ is a product of primes.

**Proof.** The base case $n=2$ holds because $2$ is prime. Now let $k\ge 2$ and assume every integer from $2$ through $k$ is a product of primes. Consider $k+1$. If it is prime, it is already a one-factor product of primes. If it is composite, write $k+1=ab$ with $2\le a,b\le k$. By the strong inductive hypothesis, both $a$ and $b$ are products of primes, so their product is too. Strong induction now covers every $n\ge 2$. ∎

The proof establishes existence, not uniqueness. A different theorem is needed to show prime factorizations are unique up to order.

## 5. Structural induction follows constructors

Some objects are defined recursively rather than indexed naturally. A full binary expression might be:

1. a variable, or
2. $(L \mathbin{\mathrm{op}} R)$, where $L$ and $R$ are smaller expressions.

To prove a property of every such expression, prove it for a variable and prove that if it holds for $L$ and $R$, it holds for $(L \mathbin{\mathrm{op}} R)$. This is **structural induction**.

### Worked tree identity

A **full binary tree** is either a single leaf or a root with exactly two full binary subtrees. We prove that if it has $i$ internal vertices, it has $i+1$ leaves.

Base constructor: a single leaf has $i=0$ and one leaf, so the formula holds. Recursive constructor: suppose left and right subtrees have $i_{L}+1$ and $i_{R}+1$ leaves. Joining them under a new internal root gives $i=1+i_{L}+i_{R}$ internal vertices and

$$(i_{L}+1)+(i_{R}+1)=i_{L}+i_{R}+2=i+1$$

leaves. The identity follows for every recursively constructed full binary tree.

## 6. Recursion defines; induction verifies

A recursive definition has base data and a rule for producing later data. For example,

$F_{0}=0$, $F_{1}=1$, and $F_{n}=F_{n-1}+F_{n-2}$ for $n\ge 2$.

The definition tells us how values depend on earlier ones. It does not automatically prove a closed formula, a growth bound, or termination of a program using the recurrence. Those require arguments.

Well-founded recursion needs a measure that decreases. Suppose a procedure on a positive integer replaces $n$ by $\lfloor n/2\rfloor$ until reaching zero. The nonnegative integer $n$ strictly decreases whenever it is positive, so infinite execution is impossible. Saying “the input gets smaller” is incomplete unless “smaller” belongs to an order with no infinite descending chain.

### A recursive counting example

Let $a_{n}$ count binary strings of length $n$ containing no consecutive ones. For $n\ge 2$, a valid string either ends in $0$, after any valid length-$n-1$ prefix, or ends in $01$, after any valid length-$n-2$ prefix. A string ending in $1$ must have a preceding $0$, and deleting that final $01$ is reversible. These cases are disjoint and exhaustive, so

$a_{n}=a_{n-1}+a_{n-2}$ for $n\ge 2$.

The initial values are $a_{0}=1$ (the empty string) and $a_{1}=2$ ($0$,$1$). Omitting $a_{0}$ often makes the recurrence awkward at the boundary.

## 7. Invariants rule out unreachable states

An **invariant** is a quantity or property preserved by every allowed move. If the initial and target states have different invariant values, the target is unreachable.

### Worked coloring invariant

Remove two opposite corners from an $8\times 8$ chessboard. Can the remaining squares be tiled by $31$ dominoes, each covering adjacent squares?

Color the board in the usual alternating colors. Opposite corners have the same color, so removing them leaves $30$ squares of one color and $32$ of the other. Every domino covers one square of each color. Therefore any domino tiling covers equal numbers of the two colors, impossible here.

The invariant proves impossibility. It does not say that equal color counts would guarantee a tiling; an invariant often supplies a necessary condition, not a sufficient one.

### Modular invariant

Begin with an integer and repeatedly add $6$ or subtract $9$. Every move changes the integer by a multiple of $3$, so its residue modulo $3$ is invariant. Starting from $1$, this invariant does **not** rule out reaching $100$, since $1\equiv100\pmod{3}$. It rules out $101$, whose residue is $2$. A proposed invariant must separate the actual endpoints.

## 8. Monovariants prove progress and termination

A **monovariant** changes strictly in one direction. In a finite state space, a strictly decreasing nonnegative integer measure proves termination.

Consider repeatedly replacing two positive integers $a\ge b$ by $b$ and the remainder $a \bmod b$, stopping when the second number is zero. The second component becomes a nonnegative integer smaller than $b$, so the process terminates. This is the termination half of Euclid’s algorithm. Correctness additionally needs the invariant $\gcd(a,b)=\gcd(b,a \bmod b)$.

Separating invariant and monovariant is useful:

- the invariant says the answer is unchanged;
- the monovariant says the procedure cannot run forever.

Neither alone proves total correctness.

## 9. Extremal choice creates rigid local structure

The **extremal principle** chooses a smallest, largest, earliest, or latest object and exploits the restrictions imposed by extremality.

**Theorem 19.3.** Every finite connected graph has a spanning tree.

**Proof by minimality.** Among all connected spanning subgraphs, choose one $H$ with the fewest edges; finiteness ensures a choice exists. If $H$ contained a cycle, removing one edge of that cycle would leave it connected: the rest of the cycle still joins the edge’s endpoints. This would produce a connected spanning subgraph with fewer edges, contradicting minimality. Therefore $H$ is connected and acyclic, so it is a spanning tree. ∎

Every hypothesis matters. “Spanning” keeps all vertices. “Connected” makes the subgraph useful. “Finite” guarantees the set of edge counts has a minimum. The cycle-removal step is where the graph structure enters.

### Longest-path reasoning

In a finite graph, choose a longest simple path $v_{0},\ldots,v_{k}$. Every neighbor of $v_{0}$ lies on the path; otherwise that neighbor could be prepended to make a longer simple path. This local constraint at an endpoint is a standard doorway to degree and coloring arguments. It does not say every vertex lies on the path.

## 10. Minimal counterexample proofs

Suppose a theorem about positive integers is false. If counterexamples form a nonempty set of positive integers, they have a least member. The least counterexample cannot decompose into smaller counterexamples, often forcing the desired conclusion.

This architecture must be justified:

1. identify a well-ordered size;
2. assume the counterexample set is nonempty;
3. choose a least counterexample;
4. transform it into smaller valid objects;
5. use minimality on those objects;
6. rebuild the original conclusion and contradict counterexample status.

“Take the smallest counterexample” is invalid when no size was defined, when sizes are not well ordered, or when the transformation leaves the theorem’s input class.

## 11. Common errors and proof repair

### Error: assuming the conclusion

To prove a graph is connected, writing “take a path between arbitrary vertices” assumes the very object whose existence is required. Repair: construct the path from hypotheses or use a known connected spanning subgraph.

### Error: proving examples

A table of the first twenty recurrence values may expose a pattern. Repair: state the pattern as a quantified claim and prove it by induction or another structural argument.

### Error: a drifting inductive variable

The inductive hypothesis concerns one arbitrary $k$, not all future indices. Repair: write the exact hypothesis on its own line and cite it only where its form matches.

### Error: invariant without preservation

Naming parity is not enough. Repair: compute how each allowed move changes parity.

### Error: termination confused with correctness

A decreasing measure says the process stops, not that it stops at the right answer. Pair it with an invariant or postcondition proof.

## 12. Exercises with worked solutions

### DM-CH02-E001 — induction with a boundary

Prove that $2^{n}\ge n+1$ for every integer $n\ge 0$.

#### DM-CH02-E001 — Solution

At $n=0$, both sides equal $1$. Assume $2^{k}\ge k+1$ for some $k\ge 0$. Then $2^{k+1}=2\cdot 2^{k}\ge 2(k+1)=2k+2$. Since $k\ge 0$, $2k+2\ge k+2$. Therefore $2^{k+1}\ge (k+1)+1$, completing induction. The last inequality is where the boundary $k\ge 0$ is used.

### DM-CH02-E002 — find and test an invariant

On a board, a move flips exactly two of five coins. Starting with all tails, can one reach a state with exactly one head?

#### DM-CH02-E002 — Solution

Track the parity of the number of heads. Flipping two coins can change the head count by $+2$, $0$, or $-2$, so parity is preserved. The initial state has zero heads, an even count; a state with one head has odd count. Therefore it is unreachable. The argument covers every move sequence, not just short ones.

### DM-CH02-E003 — termination plus correctness

For positive integers $a\ge b$, repeatedly replace $(a,b)$ by $(b,a-b)$ when $a>b$, swapping entries when necessary, and stop when they are equal. Explain why the process terminates and why the final common value is $\gcd(a,b)$.

#### DM-CH02-E003 — Solution

The sum $a+b$ is a positive integer and strictly decreases when the larger entry is replaced by the positive difference; swapping does not change it. Only finitely many decreases are possible, so the process terminates. For correctness, common divisors of $a$ and $b$ are exactly common divisors of $b$ and $a-b$: a divisor of $a,b$ divides the difference, while a divisor of $b,a-b$ divides $(a-b)+b=a$. Thus the gcd is invariant. At termination the pair is $(d,d)$, whose gcd is $d$; hence $d$ equals the original gcd.

### DM-CH02-E004 — extremal graph argument

Prove that every finite simple graph with minimum degree at least $2$ contains a cycle.

#### DM-CH02-E004 — Solution

Choose a longest simple path $v_{0},v_{1},\ldots,v_{k}$. The endpoint $v_{0}$ has at least two neighbors. Every neighbor lies on the path, or the path could be extended. One neighbor is $v_{1}$; choose another $v_{j}$ with $j\ge 2$. Then the edge $v_{0}v_{j}$ together with path edges $v_{0}v_{1},\ldots,v_{j-1}v_{j}$ forms a cycle. Finiteness guarantees a longest path, and minimum degree $2$ supplies the second neighbor.

## Chapter summary

Logical form chooses the proof burden. Induction propagates along an index; structural induction follows constructors; recursion defines objects while separate proofs establish properties. Invariants preserve impossibility information, monovariants prove progress, and extremal choices make local structure rigid. A good discrete proof displays the allowed objects, the load-bearing hypotheses, and the exact point where a general claim replaces finite experimentation.
