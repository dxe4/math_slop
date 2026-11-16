var e=`---
id: course-proof-foundations
title: "Introduction to proof"
level: secondary
estimated_minutes: 360
license: CC BY-SA 4.0
---

# Introduction to proof

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](/courses/atlas-proof-foundations/) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

A proof is not a ceremonial version of a calculation. It is an explanation that survives every allowed input. This four-session course teaches the smallest reliable toolkit for producing such explanations.

## How to use this course

For each session, first attempt the opening problem for ten minutes. Read with a pencil, pausing before every worked step. Complete the mastery check without notes. If you cannot explain why each line follows, revisit the definition rather than memorizing the proof.

The six-hour plan includes reading and rewriting proofs, not six hours of scrolling. For Session 1, use [logic in tiny worlds](#/item/deep-dive-logic-worlds-before-symbols) to test quantified claims, then write a one-paragraph explanation of a failed claim using [One Counterexample, Better Theorems](#/item/deep-dive-counterexamples-and-hypotheses). For Session 2, read the proof habits in [The Mathematical Toolkit](#/item/book-mathematical-toolkit) and rewrite one solution with every hypothesis named. For Session 3, use [Winning with Invariants](#/item/book-winning-with-invariants) to find a conserved quantity in a new game. Session 4 ends with the capstone and a peer-style audit. Allocate about 45 minutes to the reading, 30 minutes to attempted problems, and 15 minutes to correcting them in each session. If the readings are too advanced, stay with the worked problems here and record the exact missing prerequisite.

### Entry diagnostic

1. Negate “every integer is positive.”
2. State the difference between an example and a proof of a universal claim.
3. If $P\\Rightarrow Q$, write its contrapositive.
4. Explain what an induction step must assume and prove.

The answers are “some integer is not positive”; an example treats one case
while a proof supplies a reason covering every allowed case;
$\\neg Q\\Rightarrow\\neg P$; and the step assumes the statement at the current
index (or all earlier indices in strong induction) and proves it at the next
index. Begin with Session 1 if any answer is uncertain. Keep these responses
and compare them with the exit diagnostic.

## Session 1 — Know what the claim says

### Definitions are contracts

A definition specifies exactly what may be assumed. For an integer $n$:

- $n$ is even means there is an integer $k$ with $n = 2k$.
- $n$ is odd means there is an integer $k$ with $n = 2k + 1$.
- $a$ divides $b$, written $a | b$, means there is an integer $k$ with $b = ak$.

The definition is already a construction kit. To prove that the sum of two even integers is even, unpack both hypotheses:

> Let $a=2r$ and $b=2s$ for integers $r,s$. Then $a+b=2(r+s)$. Since $r+s$ is an integer, $a+b$ is even.

Every sentence has a job: introduce witnesses, perform algebra, and verify the witness is allowed.

### Quantifiers control the game

Compare:

1. For every integer $n$, there is an integer $m$ with $m>n$.
2. There is an integer $m$ such that for every integer $n$, $m>n$.

The first is true: after an opponent chooses $n$, choose $m=n+1$. The second asks for one integer chosen in advance that exceeds all integers; it is false. Order matters.

To negate a quantified claim, reverse quantifiers and negate the final property:

$\\neg(\\forall x, \\exists y, P(x,y))$

becomes

$\\exists x \\text{ such that } \\forall y, \\neg P(x,y)$.

### Implication and its relatives

For $P \\to Q$:

- the **converse** is $Q \\to P$ and need not be equivalent;
- the **contrapositive** is $\\neg Q \\to \\neg P$ and is equivalent;
- a **counterexample** makes $P$ true and $Q$ false.

Example: “If an integer is divisible by 4, it is even” is true. Its converse is false because 6 is even but not divisible by 4. Its contrapositive, “If an integer is not even, it is not divisible by 4,” is true.

### Mastery check

1. Negate: “For every integer $n$, there is an integer $m$ with $m>n$.” Keep both domains and the order of the quantifiers.
2. For an integer $n$, state the contrapositive: “If $n^{2}$ is divisible by 3, then $n$ is divisible by 3.”
3. A learner checks $n=0,1,2,3$ and concludes that $n^2\\le3n$ for every nonnegative integer $n$. Find a counterexample and explain what the four successful checks establish.

**Answers.**

1. There is an integer $n$ such that every integer $m$ satisfies $m\\le n$. The original statement is true, because $m=n+1$ works for any chosen $n$; its negation is false.
2. If $n$ is not divisible by 3, then $n^{2}$ is not divisible by 3. The integer domain is unchanged.
3. At $n=4$, the proposed inequality fails: $16>12$. The four calculations establish the claim only for the four tested inputs. They do not cover every nonnegative integer.

A universal statement about a finite, explicitly specified domain can be proved by checking every case. In problem 3 the domain is infinite, and the four selected cases do not exhaust it. Always ask both which inputs are allowed and whether your argument covers all of them.

## Session 2 — Choose a proof architecture

### Direct proof

Use a direct proof when definitions and known relations naturally move from hypothesis to conclusion.

**Claim.** The sum of two rational numbers is rational.

Write $x=a/b$ and $y=c/d$, where $a,b,c,d$ are integers and $b,d$ are nonzero. Then

$x+y = (ad+bc)/(bd)$.

The numerator and denominator are integers and $bd$ is nonzero, so the result meets the definition of rational.

### Contraposition

Use the contrapositive when the negated conclusion gives more usable structure.

**Claim.** If $n^{2}$ is even, then $n$ is even.

Instead assume $n$ is odd: $n=2k+1$. Then

$n^{2} = 4k^{2}+4k+1 = 2(2k^{2}+2k)+1$,

which is odd. Therefore the contrapositive—and hence the original claim—is true.

### Contradiction

Assume the claim fails, then derive two incompatible conclusions. The contradiction must use the assumption; otherwise it proves nothing about it.

**Claim.** There is no greatest prime.

Assume the complete list is $p_{1},\\ldots ,p_{n}$. Form $N=p_{1}p_{2}\\ldots p_{n}+1$. No listed prime divides $N$, because division leaves remainder 1. Yet every integer greater than 1 has a prime divisor. That divisor is absent from the supposedly complete list, a contradiction.

Notice that $N$ itself need not be prime. The argument only needs a prime factor of $N$.

### Existence and uniqueness are separate

“There exists exactly one $x$” contains two tasks:

1. exhibit or establish at least one solution;
2. show any two solutions must coincide.

**Example.** For real $a\\ne 0$, the equation $ax+b=0$ has exactly one solution. Existence: $x=-b/a$ works. Uniqueness: if $ax_{1}+b=0$ and $ax_{2}+b=0$, subtraction gives $a(x_{1}-x_{2})=0$; since $a\\ne 0$, $x_{1}=x_{2}$.

### Strategy selector

Ask:

- Does the conclusion name a definition I can build? Try direct proof.
- Does “not conclusion” have a clean algebraic form? Try contraposition.
- Does the claim rule out an object? Contradiction may expose incompatibility.
- Is the domain recursively generated? Try induction.
- Is the claim false? Search edge cases before proving anything.

### Mastery check

Prove that if integers $a$ and $b$ are odd, then $a^{2}+b^{2}$ is even but not divisible by 4.

Solution: write $a=2r+1$, $b=2s+1$. Odd squares have form $4k+1$ because $(2r+1)^{2}=4(r^{2}+r)+1$. Thus $a^{2}+b^{2}=4(r^{2}+r+s^{2}+s)+2$, which is even and leaves remainder 2 modulo 4.

## Session 3 — Induction, recursion, and invariants

### Induction is a propagation argument

To establish $P(n)$ for every integer $n\\ge n_{0}$:

1. prove the base case $P(n_{0})$;
2. assume $P(k)$ for an arbitrary $k\\ge n_{0}$;
3. use that assumption to prove $P(k+1)$.

The step is conditional. You do not assume the theorem for all $k$, nor do you merely verify the next numerical example.

**Example.** Prove $1+3+\\ldots +(2n-1)=n^{2}$ for $n\\ge 1$.

Base: at $n=1$, both sides equal 1. Assume the first $k$ odd numbers sum to $k^{2}$. Adding the next odd number gives

$k^{2} + (2(k+1)-1) = k^{2}+2k+1 = (k+1)^{2}$.

The identity propagates.

### Strong induction

Sometimes the next case needs several earlier cases. Strong induction assumes $P(n_{0}),\\ldots ,P(k)$ to prove $P(k+1)$.

**Claim.** Every integer $n\\ge 2$ is a product of primes.

The base case $n=2$ is a product of one prime. For $n>2$, assume the claim holds for every integer from 2 up to $n-1$. If $n$ is prime, it is already a product of one prime. Otherwise $n=ab$ with $2\\le a,b<n$. The strong induction hypothesis applies to both factors; concatenating their prime products gives a prime factorization of $n$.

### Loop invariants

Induction also proves algorithms. An invariant is a statement true before and after every loop iteration.

Start Euclid’s algorithm with positive integers $a,b$. While $b>0$, replace $(a,b)$ by $(b, a \\pmod{b})$. The invariant is

$\\gcd(a,b)=\\gcd(b,a\\bmod b)$.

Indeed, writing $a=qb+r$, a number divides both $a,b$ exactly when it divides both $b,r$. The new second coordinate satisfies $0\\le r<b$, so it strictly decreases while positive and must eventually reach zero. At that point the first coordinate is positive and equals the gcd. The invariant explains why the answer is preserved; the decreasing coordinate explains why the algorithm stops.

### Visual invariants

In the mutilated-chessboard problem, color is an invariant resource. Each domino consumes one square of each color. Removing two same-colored corners creates an imbalance no sequence of placements can repair. Invariants turn a huge search tree into one conserved quantity.

### Mastery check

1. Prove by induction that $2^n \\ge n+1$ for $n\\ge 0$.
2. In a loop that repeatedly replaces an even positive number $n$ by $n/2$, give a decreasing quantity that proves termination.

Answers: (1) base $1\\ge 1$; if $2^k\\ge k+1$, then $2^{k+1}\\ge 2k+2\\ge k+2$. (2) The positive integer $n$ strictly decreases at each iteration, so it cannot decrease forever.

## Session 4 — Build, break, and revise proofs

### Explore before formalizing

For a new claim:

1. compute the smallest and strangest cases;
2. change representation—a diagram, parity table, factorization, graph, or coordinate system;
3. identify what appears preserved;
4. state the lemma your examples suggest;
5. only then write the formal proof.

Exploration is not a proof, but it is often how a proof is discovered.

### Debugging checklist

Audit every proof for these common failures:

- **Undefined objects:** Did you divide by something that may be zero?
- **Reversed implication:** Did you use the converse of a known theorem?
- **Unjustified witness:** Does a claimed integer or element actually lie in the required set?
- **Hidden universality:** Did an example stand in for an arbitrary case?
- **Circular reasoning:** Is the target claim concealed inside a lemma?
- **Lost edge case:** Does the argument work at zero, at the boundary, or for an empty set?
- **Diagram dependence:** Would the reasoning survive a misleading drawing?

### A false proof, repaired

False argument: if $a^{2}=b^{2}$, cancel the squares to obtain $a=b$.

The valid conclusion is $(a-b)(a+b)=0$, so either $a=b$ or $a=-b$. The original cancellation silently treated squaring as one-to-one, but it is not. A counterexample is $a=1,b=-1$.

### Capstone

Choose one theorem from elementary number theory, graph theory, or linear algebra. Submit:

1. a definition glossary;
2. three exploratory examples and one failed conjecture;
3. a dependency map of lemmas;
4. a polished proof;
5. a proof audit explaining edge cases and why each hypothesis is necessary.

Good candidates include: infinitely many primes congruent to 3 modulo 4; every tree with at least two vertices has two leaves; or the kernel of a linear map is a subspace.

## Further practice

Use the \`proof-foundations\` set in \`content/exercises/exercise-bank.json\`. Attempt each prompt before revealing hints; after reading a solution, close it and reconstruct the argument from its key idea.

## Proof studio — a complete investigation

The short proofs above supply tools. This investigation shows how they fit together when the answer is not announced in advance. Work on each prompt before reading the next paragraph.

**Question.** What can be said about the square of an odd integer modulo 8? Try $1,3,5,7$. Their squares leave remainder 1. Four examples suggest a theorem, but do not prove it.

**Choose a representation.** Write an arbitrary odd integer as $n=2k+1$, where $k$ is an integer. Expanding gives

$$n^2=4k(k+1)+1.$$

The integers $k$ and $k+1$ are consecutive, so one is even. Thus $k(k+1)=2r$ for some integer $r$, and $n^2=8r+1$. The proof works for negative odd integers too: $k$ was arbitrary. The useful discovery was the *consecutive factors*, not the first four numerical squares.

**Use the theorem carefully.** If an integer square has remainder 3 modulo 8, the integer cannot be odd. In fact it cannot be even either: if $n=2k$, then $n^2=4k^2$ has remainder 0 or 4 modulo 8 according as $k$ is even or odd. Hence no integer square has remainder 3 modulo 8. This conclusion needs the even case; the odd-square theorem alone would not suffice.

**Name the boundary.** The converse “every number congruent to 1 modulo 8 is an odd square” is false: 17 has remainder 1 but lies strictly between $4^2=16$ and $5^2=25$. Necessary conditions are not automatically sufficient conditions.

### Practice with feedback

1. Prove that the product of two odd integers is odd. State where you use the fact that the witnesses are integers.
2. Negate “For every integer $n$ there is an integer $m$ with $m^2>n$.” Then decide whether the original and its negation are true.
3. A classmate writes: “$n^2$ is even, so $n$ is even because squaring preserves evenness.” Identify the missing logical step and repair it.
4. Find an integer that disproves “if $n^2$ is divisible by 4, then $n$ is divisible by 4.”

**Solutions.** (1) If $a=2r+1$ and $b=2s+1$, then $ab=2(2rs+r+s)+1$; the parenthesized expression is an integer, so this is the required odd form. (2) The negation is “There is an integer $n$ such that every integer $m$ satisfies $m^2\\le n$.” The original is true: after $n$ is chosen, take $m=|n|+1$, whose square exceeds $n$. The negation is false. (3) The proposed reason proves the forward implication “even $n$ implies even $n^2$,” not its converse. Prove the contrapositive: odd $n=2k+1$ gives odd $n^2=2(2k^2+2k)+1$. (4) Take $n=2$: $n^2=4$ is divisible by 4, while 2 is not. A single valid counterexample is enough to refute a universal implication.

## Capstone model and marking guide

One capstone candidate is: **every finite tree with at least two vertices has at least two leaves**. A tree means a connected graph with no cycle; a leaf has degree one. Here is a complete model proof you can compare with your own after trying.

Choose a path with as many vertices as possible. It has two distinct endpoints because the tree has at least two vertices. If an endpoint had a neighbor outside the path, the path could be extended, contradicting maximal length. If it had a second neighbor already on the path, that extra edge together with the path segment would form a cycle. Thus its only neighbor is the next vertex of the path, so it is a leaf. The same reasoning applies at the other endpoint.

The proof uses finiteness to ensure a longest path exists, connectedness to rule out isolated vertices in a nontrivial tree, and acyclicity to rule out a shortcut edge. Remove any one of those hypotheses and look for a counterexample. A strong submission states these dependencies, explains why the endpoints differ, and gives an example showing each hypothesis matters. An incomplete submission may draw a tree and point to two leaves without explaining why *every* permitted tree has them.

**Check the missing hypotheses after attempting the task.** Without finiteness, take the graph whose vertices are all integers and whose edges join consecutive integers: it is connected and acyclic, but every vertex has degree two. Without connectedness, two isolated vertices form a finite acyclic graph with no degree-one vertex. Without acyclicity, a triangle is finite and connected, but all three vertices have degree two. Each example keeps the other two hypotheses and has at least two vertices.

### Exit diagnostic

You are ready for a proof-led course when you can do three things without a model answer: translate a definition into usable witnesses, negate a quantified claim in the correct order, and say why a candidate proof covers every allowed case. If one skill is weak, redo its practice with a new example before moving on. Fluency comes from revising arguments, not from recognizing a solution once seen.


## Connected mini-paper — deleting leaves and certifying trees

The capstone above models one theorem. This continuation joins that theorem to new conclusions and to a procedure whose termination and correctness need separate proofs. It supplies a final connected mini-paper for the proof-readiness route, followed by a changed task and a later return task. The wider course and its earlier exercises remain part of the preparation.

Bring three preparation records: the corrected quantifier statement and implication from Language and logic; the tree-leaf hypothesis audit from Reusable proof structures; and the comparison of group, epsilon–delta, and linear-map definitions from Abstraction laboratories. Keep these records beside the paper. The graph paper uses the same habits—expand the definition, respect the order of choices, and justify closure under the proposed operation—but does not replace those earlier assignments.

The existing teaching is [the discrete book's proof, induction, invariants, and extremal-choice chapter](#/item/book-discrete-mathematics-proof-counting-structure?chapter=proof-induction-invariants), especially §§3, 8–9 and DM-CH02-E004, and [its graphs and trees chapter](#/item/book-discrete-mathematics-proof-counting-structure?chapter=graphs-trees-connectivity), especially §§4–6 and DM-CH05-E001–E002. The models below join those results into one bounded reference. Try each task before reading its model; if you use a hint or a model, retain the first attempt and identify the step you could not supply.

Allow one working sitting for PF-MP-1, another for PF-MP-2, and a learner-chosen later sitting for PF-MP-3. Record the actual dates and any source, hint, model, or outside help used. An elapsed interval or a saved study mark does not establish independent recall. These public tasks and criteria support self-review; they are not graded or verified evidence of mastery.

### Definitions and the paper contract

Throughout this paper a graph is finite, undirected, and simple: an edge joins two distinct vertices, and no pair has more than one edge. A path has no repeated vertices; its length is its number of edges, and a one-vertex path has length zero. A cycle has at least three edges and repeats only its starting vertex at the end. A graph is connected when it is nonempty and every two vertices are joined by a path. Its connected components are the maximal connected parts. A tree is a connected graph with no cycle. A forest is a graph with no cycle, including the empty graph. The degree of a vertex is its number of neighbors; a leaf has degree one, and an isolated vertex has degree zero.

Write $n$ for the current number of vertices, $m$ for the current number of edges, and $c$ for the current number of components. The empty graph has $n=m=c=0$. Deleting a vertex means deleting that vertex and every incident edge. Deleting an edge retains every vertex. A spanning tree of a graph retains every vertex and some of its edges and is a tree.

Submit a definition glossary, three exploratory examples, one failed conjecture with a counterexample, a dependency map, a connected proof, and an audit of hypotheses and boundary cases. Label theorems, examples, counterexamples, and observations separately. Include the three preparation records above as an appendix; explain one place where the graph proof needs the same definition-first discipline.

### PF-MP-1 — primary task

**Claim to investigate.** For every tree $T$ with $n\\ge1$ vertices, repeatedly deleting any leaf while more than one vertex remains is always possible, ends at a single vertex after exactly $n-1$ deletions, and shows that $T$ has exactly $n-1$ edges.

1. Explore a single vertex, a four-vertex path, and a four-vertex star. State the choices available at each deletion. Refute the conjecture that this procedure works for every finite connected simple graph.
2. State and negate, with its domain intact: “Every tree with at least two vertices has a leaf.” Prove the statement using a longest path, or cite the proved capstone lemma and reproduce its decisive step.
3. Prove that deleting a leaf from a tree with at least two vertices leaves a tree. Establish connectedness as well as absence of cycles.
4. Prove the edge formula by induction on the number of vertices. Then prove the procedure's termination and its claimed output for every permitted sequence of choices. Explain why a decreasing vertex count alone would not rule out getting stuck at a graph with several vertices.
5. Audit the roles of finiteness, connectedness, acyclicity, and the boundary $n=1$. Keep the failed conjecture for PF-MP-2.

**Hint after an attempt.** A simple path between two retained vertices cannot pass through the deleted leaf internally. Separate the assertion “another legal move exists” from “there can be only finitely many moves.”

### PF-MP-1 — model paper

**Exploration and a failed conjecture.** A single vertex has no edge and needs no deletion. For the path with edges $ab,bc,cd$, the initial leaves are $a,d$; deleting $a$ leaves the path $b-c-d$ with leaves $b,d$, deleting $d$ then leaves $b-c$ with leaves $b,c$, and deleting $b$ leaves $c$. For the star with edges $ab,ac,ad$, the initial choices are $b,c,d$. After deleting $b$, the choices are $c,d$; after deleting $c$, either endpoint of the remaining edge $ad$ may be deleted, leaving one vertex. Both four-vertex examples have three edges and use three deletions. These examples suggest the formula; the proof below covers arbitrary trees. A triangle refutes the stronger conjecture about all connected graphs: every vertex has degree two, so the leaf procedure cannot even start.

**Logical form.** The leaf statement quantifies over all finite simple undirected trees $T$ with $|V(T)|\\ge2$ and then asserts the existence of a vertex $v\\in V(T)$ with degree one. Its negation is: there exists such a tree $T$ for which every $v\\in V(T)$ has degree different from one. The triangle is not a counterexample to the leaf theorem, because it is not a tree.

**Lemma 1: a leaf exists.** Choose a longest path in a tree with at least two vertices. There is an edge because the graph is connected, so the path has two distinct endpoints. Finiteness guarantees a longest path exists. Every neighbor of an endpoint lies on the path, or that neighbor could extend it. The endpoint has its next path vertex as a neighbor; any other path neighbor would form a cycle with the segment between them. Thus the endpoint has degree one. The other endpoint is also a leaf.

**Lemma 2: deletion preserves the input class.** Let $v$ be a leaf of a tree $T$ with $n\\ge2$ vertices, and let $T'$ result from deleting $v$. It has $n-1\\ge1$ vertices. A cycle in $T'$ would already have been a cycle in $T$, so $T'$ is acyclic. Given two distinct retained vertices, connectedness of $T$ supplies a simple path between them. The leaf cannot be an internal vertex of that path: an internal path vertex has two distinct neighbors on the path, whereas $v$ has degree one. It is not an endpoint either, since both endpoints are retained. Thus the path lies in $T'$. A one-vertex remainder is connected by the length-zero-path convention. Hence $T'$ is a tree.

**Theorem: the edge count.** Induct on $n\\ge1$. A one-vertex simple graph has no edges, so $m=0=n-1$. For $n\\ge2$, assume every tree with $n-1$ vertices has $n-2$ edges. Lemma 1 gives a leaf, and Lemma 2 makes its deletion a tree with $n-1$ vertices. Deleting that leaf removes exactly one edge. The induction hypothesis therefore gives $m=(n-2)+1=n-1$. Each use of the induction hypothesis is on a smaller tree, not merely on a graph with fewer vertices.

**Procedure: termination and correctness.** While more than one vertex remains, the current graph is a tree by Lemma 2, so Lemma 1 guarantees another leaf. Every deletion reduces the positive integer vertex count by one, so after exactly $n-1$ deletions it is one. The graph cannot get stuck sooner, because the invariant “the current graph is a tree” supplies a legal move whenever its vertex count exceeds one. It cannot continue afterward because the stated stopping rule has been met. This argument holds for every available leaf choice; it does not promise the same surviving vertex. Termination comes from the decreasing count, and correctness comes from preservation of the input class and the leaf-existence lemma.

**Dependency and hypothesis audit.** Definitions and the longest-path argument give Lemma 1; Lemma 2 justifies the smaller instance; those lemmas support both the induction and the procedure. Finiteness supplies the extremal path and a finite deletion count. Connectedness prevents a nontrivial tree from consisting entirely of isolated vertices. Acyclicity rules out the second endpoint neighbor. The one-vertex boundary needs zero deletions and zero edges; it has no leaf. The earlier capstone's infinite integer path, two isolated vertices, and triangle show what can fail when the respective hypotheses are removed. An arbitrary vertex deletion is not a repair: deleting the middle vertex of $a-b-c$ disconnects its two remaining vertices.

**Preparation connection.** As in the earlier group, epsilon–delta, and kernel/image work, a smaller-looking object must still meet the definition that licenses the next step. Here “fewer vertices” is insufficient for the induction hypothesis until Lemma 2 establishes both tree conditions. Likewise “choose a leaf” requires a witness in every current permitted state, not a witness in one drawing.

### PF-MP-2 — changed task: one cycle remains

Change the hypothesis: $G$ is now a connected graph with $n$ vertices and exactly $n$ edges. The graph is still finite, undirected, and simple.

1. For vertices $\\{a,b,c,d\\}$ and edges $\\{ab,bc,ca,cd\\}$, run the leaf procedure from PF-MP-1 until it cannot continue. Give the residual graph and identify the failed hypothesis.
2. Repair the procedure by retaining all vertices and repeatedly deleting an edge that lies on a cycle, stopping when no cycle remains. Prove that each deletion preserves connectedness, that the process terminates, and that its output is a spanning tree.
3. Use PF-MP-1 to prove that exactly one edge is deleted when the input has $n$ edges. Prove that the original graph has exactly one cycle; do not infer that from the four-vertex example.
4. State precisely which properties the output preserves. Does the proof show that every vertex of the original graph lies on its cycle, or that different choices produce the same spanning tree?

**Hint after an attempt.** The rest of a cycle supplies an alternate route around a removed cycle edge. Count deletions only after proving that the final graph is a tree. To prove uniqueness of the original cycle, compare a purported second cycle with the edge you removed.

### PF-MP-2 — model and feedback

In the given graph, $d$ is the only leaf. Deleting $d$ and edge $cd$ leaves the triangle with edges $ab,bc,ca$. Each remaining vertex has degree two, so no leaf can be deleted although three vertices remain. Connectedness was retained; acyclicity was absent from the start. The decreasing vertex count did not supply a legal next move.

For the repaired procedure, suppose a cycle edge $uv$ is removed. Every original path that used $uv$ can replace that traversal by the other $u$–$v$ route around the cycle. This produces a walk between the same endpoints without the removed edge. If a vertex repeats in a finite walk, delete the segment between two consecutive occurrences of that vertex; repeating this operation yields a path. Thus the remaining graph is connected. No vertices were removed, and finiteness, simplicity, and undirectedness are retained.

At each step the nonnegative integer edge count decreases by one. Hence the procedure terminates. Its stopping condition is absence of cycles, and connectedness has been preserved throughout, so the output is a tree on the original $n$ vertices: a spanning tree. By PF-MP-1 it has $n-1$ edges. Starting with $n$ edges, the procedure has therefore deleted $n-(n-1)=1$ edge. In particular the input was not already a tree, and deleting any chosen cycle edge produces a tree after that one deletion.

For uniqueness, let $C$ be a cycle and let $e=uv$ be an edge on it. The graph $G-e$ is a tree by the preceding argument. Every cycle in $G$ must contain $e$, or it would remain a cycle in $G-e$. Removing $e$ from any such cycle gives a simple $u$–$v$ path in $G-e$. A tree has a unique simple path between two vertices: if two different paths existed, follow them to a divergence and their first subsequent reunion; the intervening segments would form a cycle. Consequently all cycles containing $e$ use the same remaining path, so $C$ is the only cycle in $G$.

In the four-vertex example, removing $ab$ instead of $d$ yields the spanning tree with edges $bc,ca,cd$. Removing $bc$ yields a different spanning tree. The procedure preserves the vertex set and reachability; it need not preserve path lengths or every adjacency. Vertex $d$ is not on the unique cycle. The theorem concerns the number of cycles, not membership of every vertex in a cycle, and it does not assert a unique spanning tree.

**Repair feedback.** If you wrote “there are $n$ edges, so there is one cycle,” insert the connected cycle-deletion proof and the final tree count; edge count alone is insufficient. If you removed a bridge, such as $cd$ in the example, connectedness fails: restrict the move to an edge known to lie on a cycle. If you used “the edge count decreases” to claim the output is connected, supply the alternate-route argument; termination does not prove the invariant. If you proved only the example, rewrite the proof for an arbitrary permitted graph before comparing it with the model.

### PF-MP-3 — return task: forests and stopping states

At a later sitting of your choice, begin with your own definitions and a blank proof before reopening the models. Record the actual date, earlier exposure to PF-MP-1/2, and any help used during this attempt. If you reopen help, keep that fact beside the revised proof. The later sitting is a study instruction, not an automatic claim of independent or delayed performance.

The new input $H$ is any graph under the paper's finite simple undirected convention; it may be empty or disconnected. Repeatedly delete any vertex of degree zero or one and its incident edges. Stop when no such vertex remains.

1. Prove that every sequence of permitted choices terminates and that its terminal graph is empty if and only if the original graph is a forest. If the terminal graph is nonempty, prove it contains a cycle. Do not claim that every terminal vertex lies on a cycle.
2. For a forest with $n$ vertices, $m$ edges, and $c$ components, prove $m=n-c$ by tracking $m-n+c$ during the deletions. Treat a leaf deletion and an isolated-vertex deletion separately; do not assume the formula you are proving.
3. Apply the procedure and formula to vertices $\\{a,b,c,d,e,f\\}$ with edges $\\{ab,bc,de\\}$. Then add edge $ac$ and describe the nonempty terminal graph. Explain why stopping after deleting leaves only would fail on the original forest.
4. Repair this proposed shortcut: “The input has $m=n-c$ edges, therefore every vertex can be deleted in any order.” Which condition controls each legal move?

**Hint after an attempt.** A nonempty forest either has an isolated vertex or has a nontrivial tree component with a leaf. If a fixed original cycle exists, consider the first of its vertices that the procedure would delete. For a nonempty residual graph of minimum degree at least two, use a longest path endpoint to construct a cycle.

### PF-MP-3 — model and feedback

**Termination and the forest direction.** Every move deletes one vertex, so at most the original number of vertices can be deleted. Deletion cannot create a cycle. Therefore, if the input is a forest, every residual graph is a forest. A nonempty residual forest has a component. If that component has one vertex, that vertex is isolated; if it has at least two vertices, it is a tree and has a leaf by PF-MP-1. Thus a legal move exists whenever a forest remains nonempty, so the terminal graph is empty. The initially empty graph already satisfies this conclusion with zero moves.

**The converse and a residual cycle.** If the input contains a cycle, none of its vertices can be the first cycle vertex deleted: before such a deletion, its two distinct cycle neighbors would still be present, giving it degree at least two. Thus all vertices and edges of that cycle remain, and the terminal graph is nonempty. This proves that empty termination implies the input was a forest, for every permitted sequence of choices.

There is also a direct certificate when the procedure stops nonempty. Every residual vertex then has degree at least two. Choose a longest simple path $v_0,v_1,\\ldots,v_k$ in that residual graph. All neighbors of $v_0$ lie on the path, or it could be extended. Besides $v_1$, there is another neighbor $v_j$ with $j\\ge2$. The path segment $v_0,v_1,\\ldots,v_j$ followed by edge $v_jv_0$ is a cycle. Finiteness supplies the longest path, and simplicity makes the two neighbors distinct and the cycle length at least three. This supplies a cycle somewhere in the residual graph. It does not place every residual vertex on a cycle: two disjoint triangles joined by a two-edge path have minimum degree two, but the middle vertex of the joining path lies on no cycle.

**The counting invariant.** A leaf deletion removes one vertex and exactly one edge. Its component remains connected by the retained-path argument from PF-MP-1 and remains nonempty, so the component count is unchanged. The changes in $(m,n,c)$ are $(-1,-1,0)$, leaving $m-n+c$ unchanged. An isolated-vertex deletion removes no edge, one vertex, and one entire component; its changes are $(0,-1,-1)$, again leaving $m-n+c$ unchanged. For a forest the process ends empty, where $m-n+c=0$. Preservation therefore gives $m-n+c=0$ initially, or $m=n-c$. The empty forest satisfies the same equation. This proof uses deletion preservation and the terminal value, not the desired formula as an induction hypothesis.

**The concrete cases.** The original graph has three components: path $a-b-c$, edge $d-e$, and isolated vertex $f$. Thus $n=6$, $c=3$, and the formula predicts $m=3$, matching the three listed edges. One legal sequence deletes $a,c,b,d,e,f$. After deleting $a$, vertex $c$ still has degree one; deleting it leaves $b$ isolated. Deleting $d$ leaves $e$ isolated. All six vertices are eventually deleted. A procedure that permits only leaves can remove the three edges but is then stuck with isolated vertices, including $f$, so degree zero must be allowed for empty termination.

After adding $ac$, vertices $a,b,c$ form a triangle. Vertices $d,e$ can be deleted, and $f$ can be deleted, but no triangle vertex can be deleted. The residual graph is that triangle. Now $n=6$, $m=4$, and $c=3$, so $m-n+c=1$; the forest formula no longer applies to the input. Both examples have the same number of components; the added cycle accounts for the changed edge count.

**Repairing the shortcut.** The equation is a global count, while permission to delete a vertex is a local degree condition. Even a path on three vertices satisfies $m=n-c$, but deleting its middle vertex is not a permitted move: its degree is two. The proved statement is that for a forest every sequence of choices **among degree-zero or degree-one vertices** ends empty. It does not permit arbitrary vertex order.

### Mini-paper self-review and repair

Compare the attempted arguments with the criteria below, keeping your original draft. Mark each criterion “supplied,” “needs repair,” or “used help”; these are personal review labels.

| Criterion | What a complete response supplies | Repair when it is missing |
| --- | --- | --- |
| Definitions and logical form | Graph convention, path/cycle distinction, empty and one-vertex conventions, and a negation retaining the tree domain | Rewrite the claim with its domain and witnesses before manipulating it |
| Connected chain | Longest-path leaf lemma, preservation under leaf deletion, edge-count induction, then procedure correctness | Add the missing lemma and cite it exactly where the next result uses it |
| Quantifiers over choices | Proof for every permitted leaf or cycle-edge choice, with no claim of a unique surviving vertex or spanning tree | Replace one drawn sequence by the invariant and legal-move argument |
| Changed hypothesis | A stalled triangle example, a connectivity-preserving edge move, one-deletion count, and the general unique-cycle proof | Separate the example, invariant, termination, final count, and uniqueness argument |
| Return transfer | Degree-zero cases, empty input, the forest equivalence, a residual-cycle certificate, and both invariant updates | Identify which component changes; distinguish “a cycle exists” from “all vertices lie on cycles” |
| Boundary and study record | Load-bearing hypotheses, the three preparation records, actual attempt dates, and actual help/model exposure | Reattempt the failed step with the help closed, retaining the exposure record and the earlier draft |

After a repair, check every later claim that depended on the changed step. Finish with a short paragraph saying which argument you can reconstruct, which still requires help, and one new example that tests the repaired boundary. A correct public model is a reference for that work; agreement with it alone does not verify an independent proof.
`;export{e as default};