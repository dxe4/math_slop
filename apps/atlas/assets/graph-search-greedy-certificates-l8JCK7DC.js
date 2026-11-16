var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: graph-search-greedy-certificates
title: "Graph Search, Greedy Exchange, and Certificates"
level: undergraduate
estimated_minutes: 145
license: CC BY-SA 4.0
---

# Graph Search, Greedy Exchange, and Certificates {#section-1-graph-search-greedy-exchange-and-certificates}

A graph turns local relationships into a global object. An algorithm that visits vertices is easy to run; the mathematical work is proving that it visits exactly the right vertices, that an optimization choice is safe, and that its output carries evidence a second program can check.

<a id="section-3-1-graph-contracts-and-representations"></a>
## 1. Graph contracts and representations {#section-5-1-graph-contracts-and-representations}

A finite directed graph is $G=(V,E)$ with $E \\subseteq V x V$. An undirected edge $\\{u,v\\}$ has no orientation. Undirected graphs in this chapter are simple: their edges join distinct vertices and there are no parallel edges. A path is a sequence whose consecutive vertices are adjacent; its length is its number of edges. A directed cycle is a positive-length closed path whose vertices are distinct except for its equal first and last vertices; a loop or two opposite arcs between distinct vertices can therefore form a directed cycle. A simple undirected cycle has length at least three and the same vertex-distinctness condition, so traversing one edge out and back is not a cycle. Weighted problems add $w:E \\to R$ and must say whether negative weights are permitted. This online definition clarification leaves the retained draft PDF unchanged.

An adjacency list stores the outgoing neighbors of each vertex. Iterating all lists takes $\\Theta(\\lvert V\\rvert+\\lvert E\\rvert)$ when every vertex is represented. An adjacency matrix uses $\\Theta(\\lvert V\\rvert^{2})$ cells and answers adjacency queries in constant time. The theorem being proved is representation independent; the cost theorem is not.

<a id="section-9-2-breadth-first-search"></a>
## 2. Breadth-first search {#section-11-2-breadth-first-search}

Breadth-first search (BFS) starts from $s$, keeps a FIFO queue, and assigns distance $d[v]=d[u]+1$ when $v$ is first discovered from $u$. Its central invariant is:

> Before a vertex at distance label $k+1$ is removed, every reachable vertex at graph distance at most $k$ has been discovered with its exact distance.

The proof is induction on true shortest-path distance. A shortest path to a vertex at distance $k+1$ has a predecessor at distance $k$, which the induction hypothesis says is processed in time to discover it. No earlier discovery can have a longer label because the queue processes nondecreasing labels. Parent pointers therefore form shortest paths, not merely reachability witnesses.

![Directed graph arranged in BFS layers zero through three, with a dashed frontier after layer one](figures/bfs-distance-layers.svg)

*Figure 7.1. The example has edges $s\\to a,s\\to b,a\\to c,b\\to c,b\\to d,
c\\to e,d\\to e$. Its exact distances from $s$ are $0$; $1$ for $a,b$; $2$
for $c,d$; and $3$ for $e$. Once layer $1$ is processed, FIFO order places
only layer-$2$ vertices at the current frontier, which is the geometry behind
the nondecreasing-label invariant.*

<a id="section-25-3-depth-first-search"></a>
## 3. Depth-first search {#section-27-3-depth-first-search}

Depth-first search (DFS) completely explores one unfinished branch before returning. Color states—white, gray, black—make the proof obligations visible. Gray vertices are precisely the active recursion stack. In a directed graph, an edge to gray is a certificate of a directed cycle. When DFS finishes $u$, every vertex reachable from $u$ through vertices white at entry has been explored.

For a directed acyclic graph, decreasing DFS finish time is a topological order: an edge $u \\to v$ cannot point from later to earlier in that order. If $v$ were unfinished when inspected it would finish first; if already finished, it already has the earlier finish time.

<a id="section-31-4-shortest-paths-and-the-settled-set-lemma"></a>
## 4. Shortest paths and the settled-set lemma {#section-33-4-shortest-paths-and-the-settled-set-lemma}

Dijkstra's algorithm repeatedly settles an unsettled vertex of least tentative distance and relaxes its outgoing edges. Its proof needs nonnegative weights. Suppose $u$ is the first incorrectly settled vertex. On a shortest path to $u$, let $x$ be the first unsettled vertex and $y$ its settled predecessor. Relaxing $y \\to x$ gives $d[x]$ no larger than the shortest-path length to $x$, which is no larger than the path length to $u$ because remaining weights are nonnegative. Thus $u$ could not be selected with an excessive label.

A single negative edge breaks the monotonic step even when there is no negative cycle. The failure is about the hypothesis, not an implementation detail.

<a id="section-37-5-greedy-choice-through-exchange"></a>
## 5. Greedy choice through exchange {#section-39-5-greedy-choice-through-exchange}

A greedy algorithm commits to a locally preferred feasible choice. Correctness never follows from the word “greedy.” An exchange proof starts with an optimal solution $O$, compares its first disagreement with the greedy solution $G$, and replaces an element of $O$ by the greedy element without losing feasibility or value. Repeating the exchange transforms $O$ into $G$.

For interval scheduling, sort by finishing time and repeatedly choose the next compatible interval. If an optimal schedule begins with interval $o$ while greedy begins with $g$, then $finish(g)\\le finish(o)$. Replacing $o$ by $g$ cannot block any later interval, so an optimal schedule exists with the greedy first choice. Induction handles the remaining suffix.

<a id="section-43-6-spanning-trees-and-cuts"></a>
## 6. Spanning trees and cuts {#section-45-6-spanning-trees-and-cuts}

A spanning tree of a connected undirected graph connects every vertex with $\\lvert V\\rvert-1$ edges and has no cycle. Suppose the current forest $F$ is contained in at least one minimum spanning tree, and a cut respects $F$ by having no forest edge cross it. A light edge $e$ crossing that cut is safe: choose a minimum spanning tree $T$ containing $F$. If $T$ omits $e$, adding $e$ creates a cycle containing another crossing edge $f$. Because the cut respects $F$, that edge $f$ is not in $F$; replacing $f$ by $e$ preserves a tree containing $F$, and lightness means its weight does not increase. This restores the inductive premise for Kruskal and Prim.

Equal weights mean the minimum tree need not be unique. The algorithm may return one optimum; uniqueness is a separate claim.

<a id="section-49-7-certificates-and-independent-checkers"></a>
## 7. Certificates and independent checkers {#section-51-7-certificates-and-independent-checkers}

An output should make its claim cheaply auditable. A reachability certificate is a path. An unreachability certificate can be the discovered set $R$ containing $s$, excluding $t$, and closed under outgoing edges. A spanning-tree certificate lists $\\lvert V\\rvert-1$ valid edges and can be checked for connectivity. An MST certificate additionally needs evidence of optimality, such as the cut-safe choices or a cycle-property checker.

A checker is useful only if soundness is proved: acceptance implies the claim. Completeness—every true claim has an accepted certificate—is a different theorem. Keeping the producer and checker conceptually separate catches shared assumptions.

<a id="section-55-8-dependency-free-reference-implementation"></a>
## 8. Dependency-free reference implementation {#section-57-8-dependency-free-reference-implementation}

This Python program exposes BFS distances and parents. Its input contract uses
finite, mutually orderable vertex labels, excludes \`None\` as a label, and
requires every named neighbor to be a graph vertex. Sorted neighbors make its
output reproducible; sorting is not needed for correctness. If $R$ is the set
reached from \`start\` and $d(u)$ its stored outdegree, this particular code costs
$O(\\lvert R\\rvert+\\sum_{u\\in R} d(u)\\log(d(u)+1))$ under constant-time hash
operations. An unsorted adjacency scan costs $O(\\lvert R\\rvert+\\sum_{u\\in R}
d(u))$; scanning or initializing every vertex gives the familiar
$O(\\lvert V\\rvert+\\lvert E\\rvert)$ bound.

\`\`\`python
from collections import deque

def bfs(graph, start):
    distance = {start: 0}
    parent = {start: None}
    queue = deque([start])
    while queue:
        u = queue.popleft()
        for v in sorted(graph.get(u, ())):
            if v not in distance:
                distance[v] = distance[u] + 1
                parent[v] = u
                queue.append(v)
    return distance, parent

def path(parent, target):
    if target not in parent:
        return None
    answer = []
    while target is not None:
        answer.append(target)
        target = parent[target]
    return answer[::-1]

if __name__ == "__main__":
    graph = {"a": {"b", "c"}, "b": {"d"}, "c": {"d"}, "d": set()}
    distance, parent = bfs(graph, "a")
    assert distance["d"] == 2
    assert path(parent, "d") in (["a", "b", "d"], ["a", "c", "d"])
    print(distance, path(parent, "d"))
\`\`\`

The assertions test an example, not the theorem. The invariant and induction prove all finite inputs satisfying the representation contract.

<a id="section-102-9-failure-modes"></a>
## 9. Failure modes {#section-104-9-failure-modes}

- Marking a BFS vertex visited only when removed can enqueue it many times.
- Using a stack instead of a queue preserves reachability but loses shortest-edge guarantees.
- Applying Dijkstra with negative weights invalidates the settled-set proof.
- Calling any locally cheapest choice optimal without an exchange, cut, or structural theorem.
- Reporting a tree without checking that its edges belong to the input graph.


<a id="section-111-worked-example-1-a-bfs-tree-and-a-shortest-distance-cer"></a>
## Worked example 1: a BFS tree and a shortest-distance certificate {#section-113-worked-example-1-a-bfs-tree-and-a-shortest-distance-cer}

Take directed edges $s\\to a,s\\to b,a\\to c,b\\to c,b\\to d,c\\to e,d\\to e$. Initially the queue contains only $s$, with label zero. Removing $s$ discovers $a,b$ with label one. Removing $a$ discovers $c$ with label two; removing $b$ leaves the already discovered $c$ unchanged and discovers $d$ with label two. Removing $c$ discovers $e$ with label three; the later edge from $d$ cannot rediscover it. One possible parent chain for $e$ is $s,a,c,e$.

The chain proves that a length-three route exists. For a separate lower certificate, assign labels $0,1,1,2,2,3$ to $s,a,b,c,d,e$ and inspect every input edge: each satisfies $d(v)\\le d(u)+1$. Along any route of length $\\ell$ from $s$ to $e$, repeated inequalities yield $d(e)\\le\\ell$. Thus every route has length at least three, matching the parent route. In general parent paths and edge inequalities together certify shortest labels on a reachable set closed under outgoing edges. A certificate omitting that closure could hide a shortcut through an unlisted vertex.

The FIFO proof explains why BFS constructs these labels: when it removes a vertex of label $k$, every queued label is $k$ or $k+1$, in nondecreasing order. Newly discovered neighbours get $k+1$ and are appended. Induction on shortest path length then ensures each reachable vertex is first discovered with its true distance. Marking at discovery prevents multiple queue insertions and supports the stated linear scan bound.

<a id="section-119-worked-example-2-a-complete-interval-exchange-step"></a>
## Worked example 2: a complete interval-exchange step {#section-121-worked-example-2-a-complete-interval-exchange-step}

Use nonempty half-open intervals $[a,b)$ with $a<b$, allowing a new interval to begin when the previous one ends. Consider $[0,3)$, $[1,2)$, $[2,4)$ and $[3,5)$. Earliest-finish greedy selects $[1,2)$ then $[2,4)$, obtaining two intervals. Choosing the shortest duration alone would need an additional tie rule and has no general optimality proof; finish time is the quantity used in the exchange.

For a proof, let $O$ be a maximum-cardinality schedule and let $o$ be its first interval. If $g$ has minimum finish time among all available intervals, then $f(g)\\le f(o)$. Every later interval of $O$ starts at or after $f(o)$ and therefore at or after $f(g)$. Replacing $o$ by $g$ preserves feasibility and cardinality. Thus an optimum starts with $g$. Restrict to intervals starting at or after $f(g)$ and apply induction on the number of remaining intervals. This proves greedy optimality for the whole finite family, including the empty family. It does not prove weighted interval scheduling: replacing one interval may change total weight, so that problem has a different objective and proof.

<a id="section-125-worked-example-3-an-mst-exchange-with-tied-weights"></a>
## Worked example 3: an MST exchange with tied weights {#section-127-worked-example-3-an-mst-exchange-with-tied-weights}

Let the undirected connected graph have edges $ab=1$, $bc=1$, $ac=1$, $cd=2$, $bd=3$. The forest $F=\\{ab\\}$ is contained in the tree $T=\\{ab,ac,cd\\}$ of weight four. The cut $\\{a,b\\}\\mid\\{c,d\\}$ respects $F$. Its light crossing edge can be $bc$ of weight one. Adding $bc$ to $T$ creates cycle $a,b,c,a$; remove $ac$, which also crosses the cut and is outside $F$. The resulting tree $\\{ab,bc,cd\\}$ still weighs four and contains the enlarged forest.

Every spanning tree must attach $d$ using an edge of weight at least two and must use two further edges of weight at least one, so four is a lower bound and both trees are optimal. The exchange proof does not require strict inequality between $e$ and $f$; equal weights preserve optimality and permit multiple MSTs. For disconnected graphs the object is instead a spanning forest with one tree per component. A claim promising one spanning tree must check connectedness rather than silently returning a forest under the same name.

<a id="section-131-practice-with-fully-explained-solutions"></a>
## Practice with fully explained solutions {#section-133-practice-with-fully-explained-solutions}


<a id="section-134-exercise-1"></a>
### Exercise 1 {#section-136-exercise-1}
<a id="graph-search-greedy-certificates-ex-1"></a>

Why is every BFS parent edge an input edge?

<details>
<summary>Hint 1</summary>

Inspect the only step that assigns a parent.

</details>
<details>
<summary>Hint 2</summary>

That assignment uses an edge just read from the input adjacency list.

</details>
<details>
<summary>Solution</summary>

A parent is assigned only while scanning an adjacency-list entry $u \\to v$; therefore the stored pair is in $E$.

If a parent were later overwritten without an input-edge check, that property would require an additional argument. The stated BFS assigns it exactly once at discovery. Following those assignments decreases recorded distance by one until the source, so it also gives a finite path rather than a parent cycle.

</details>

<a id="section-160-exercise-2"></a>
### Exercise 2 {#section-162-exercise-2}
<a id="graph-search-greedy-certificates-ex-2"></a>

Why can BFS labels differ by at most one across an undirected edge?

<details>
<summary>Hint 1</summary>

Extend a shortest route by the undirected edge.

</details>
<details>
<summary>Hint 2</summary>

Apply the same argument in the reverse direction.

</details>
<details>
<summary>Solution</summary>

A shortest path to either endpoint followed by the edge reaches the other, so each true distance is at most the other plus one.

The statement is about reached endpoints in the same component. If $d(u)$ is finite, appending edge $uv$ gives $d(v)\\le d(u)+1$. Reversing the edge gives $d(u)\\le d(v)+1$. Combining yields $|d(u)-d(v)|\\le1$. Unreachable labels require an explicit infinity convention rather than ordinary subtraction.

</details>

<a id="section-186-exercise-3"></a>
### Exercise 3 {#section-188-exercise-3}
<a id="graph-search-greedy-certificates-ex-3"></a>

Give a graph where DFS does not find a shortest path.

<details>
<summary>Hint 1</summary>

Include a long branch and a direct edge to the target.

</details>
<details>
<summary>Hint 2</summary>

Choose the long branch first in the DFS neighbour order.

</details>
<details>
<summary>Solution</summary>

With edges $s-a$, $a-b$, $b-t$, and $s-t$, DFS that chooses $a$ first records a length-three route although the direct edge has length one.

Take an undirected graph and explore neighbour $a$ before $t$ at $s$. The recursion can reach $t$ through $a,b$ before ever inspecting the direct edge $st$. Its first parent chain then has three edges. DFS still proves reachability; it was never assigned the FIFO layer invariant that proves shortest-edge distances for BFS.

</details>

<a id="section-212-exercise-4"></a>
### Exercise 4 {#section-214-exercise-4}
<a id="graph-search-greedy-certificates-ex-4"></a>

What certifies that $t$ is unreachable from $s$?

<details>
<summary>Hint 1</summary>

Try a set closed under outgoing edges.

</details>
<details>
<summary>Hint 2</summary>

Induct on the length of every possible source path.

</details>
<details>
<summary>Solution</summary>

Provide a set $R$ containing $s$, not $t$, such that every outgoing neighbor of a vertex in $R$ is also in $R$. Any path from $s$ stays in $R$ by induction, so cannot reach $t$.

The certificate does not need to list all reachable vertices exactly. A closed superset excluding the target is sufficient. Its soundness follows by induction from source membership and edge closure; a checker must inspect all outgoing neighbours of every listed vertex rather than merely sample them.

</details>

<a id="section-238-exercise-5"></a>
### Exercise 5 {#section-240-exercise-5}
<a id="graph-search-greedy-certificates-ex-5"></a>

Why is a directed edge to a gray DFS vertex a cycle?

<details>
<summary>Hint 1</summary>

Gray vertices are active recursion frames.

</details>
<details>
<summary>Hint 2</summary>

The stack path and back edge close a directed cycle.

</details>
<details>
<summary>Solution</summary>

The gray target is an ancestor on the active recursion path; that tree path followed by the back edge closes a directed cycle.

The active stack contains a directed tree path from the gray ancestor to the current vertex. Closing it with the scanned arc gives a positive closed directed walk, and its stack vertices are distinct. Thus it is a cycle under the stated definition. A gray edge in an undirected traversal needs its parent-edge exception, so the directed hypothesis matters.

</details>

<a id="section-264-exercise-6"></a>
### Exercise 6 {#section-266-exercise-6}
<a id="graph-search-greedy-certificates-ex-6"></a>

Why does a DAG have a vertex of indegree zero?

<details>
<summary>Hint 1</summary>

Assume every vertex has a predecessor.

</details>
<details>
<summary>Hint 2</summary>

A repeated vertex in the finite predecessor chain yields a cycle.

</details>
<details>
<summary>Solution</summary>

Otherwise follow predecessors forever. Finiteness forces a repeated vertex, producing a directed cycle, a contradiction.

Choose predecessors successively only for finitely many steps, more than the number of vertices. Some vertex repeats by the pigeonhole principle. Taking a shortest repeated segment gives a directed cycle. Therefore an acyclic finite graph must contain an indegree-zero vertex. Finiteness is essential: an infinite predecessor chain need not repeat.

</details>

<a id="section-290-exercise-7"></a>
### Exercise 7 {#section-292-exercise-7}
<a id="graph-search-greedy-certificates-ex-7"></a>

Where does Dijkstra use nonnegativity?

<details>
<summary>Hint 1</summary>

Look at the first unsettled vertex of a shortest path.

</details>
<details>
<summary>Hint 2</summary>

The remaining suffix cannot have negative length.

</details>
<details>
<summary>Solution</summary>

It uses that the remaining suffix of a shortest path cannot reduce its length below the prefix reaching the first unsettled vertex.

Every finite tentative label is the length of an actual discovered path, so it cannot underestimate the optimum. The nonnegative suffix argument proves the complementary upper bound when a minimum tentative label is settled. Both assertions together establish equality; omitting the path-realisation invariant would leave half of the correctness proof unstated.

</details>

<a id="section-316-exercise-8"></a>
### Exercise 8 {#section-318-exercise-8}
<a id="graph-search-greedy-certificates-ex-8"></a>

Give a negative-edge counterexample to Dijkstra.

<details>
<summary>Hint 1</summary>

Give the settled target a small direct label and a later negative shortcut.

</details>
<details>
<summary>Hint 2</summary>

No negative cycle is needed for failure.

</details>
<details>
<summary>Solution</summary>

Edges $s\\to u=1$, $s\\to v=2$, $v\\to u=-3$. Settling $u$ first gives 1, but the shortest distance is $-1$ through $v$.

The directed graph has no edge leaving $u$, hence no directed cycle. After settling $s$, labels are one and two, so the standard no-reopening version settles $u$ at one. Processing $v$ later reveals the route of length minus one, too late for that settled claim. A method allowing repeated corrections is a different algorithm with a different theorem.

</details>

<a id="section-342-exercise-9"></a>
### Exercise 9 {#section-344-exercise-9}
<a id="graph-search-greedy-certificates-ex-9"></a>

Why does interval scheduling sort by finish rather than duration?

<details>
<summary>Hint 1</summary>

Compare the end of the first chosen interval with an optimal first interval.

</details>
<details>
<summary>Hint 2</summary>

Earlier finish preserves every later compatible interval.

</details>
<details>
<summary>Solution</summary>

A short interval may finish late and block many later jobs. Earliest finish maximizes the remaining time region, which is exactly what the exchange proof uses.

The unweighted objective counts intervals, so replacing one with another preserves objective value. The exchange keeps the later schedule feasible because every later start is after the old first finish, which is no earlier than the greedy finish. A weighted objective could lose value in this replacement and needs another method.

</details>

<a id="section-368-exercise-10"></a>
### Exercise 10 {#section-370-exercise-10}
<a id="graph-search-greedy-certificates-ex-10"></a>

Can two distinct MSTs have the same weight?

<details>
<summary>Hint 1</summary>

Use a triangle with all weights equal.

</details>
<details>
<summary>Hint 2</summary>

Each choice of an omitted edge yields a spanning tree.

</details>
<details>
<summary>Solution</summary>

Yes. A triangle whose three edges all weigh one has three different two-edge spanning trees, each of weight two.

The three trees all have two edges and total weight two. Any spanning tree on three vertices has two edges, so none can have lower weight when each edge weighs one. This both exhibits distinct candidates and proves their optimality, rather than just asserting that tie weights might occur.

</details>

<a id="section-394-exercise-11"></a>
### Exercise 11 {#section-396-exercise-11}
<a id="graph-search-greedy-certificates-ex-11"></a>

Why does adding an edge to a tree create exactly one cycle?

<details>
<summary>Hint 1</summary>

A tree has one path between the endpoints.

</details>
<details>
<summary>Hint 2</summary>

Every new cycle must use the added edge.

</details>
<details>
<summary>Solution</summary>

The tree already has a unique path between the edge endpoints. The new edge closes that path; any cycle containing the new edge must use that unique path.

</details>

<a id="section-418-exercise-12"></a>
### Exercise 12 {#section-420-exercise-12}
<a id="graph-search-greedy-certificates-ex-12"></a>

Why does removing any edge from a tree disconnect it?

<details>
<summary>Hint 1</summary>

Assume the endpoints remain connected after deletion.

</details>
<details>
<summary>Hint 2</summary>

Their remaining path would make an old cycle.

</details>
<details>
<summary>Solution</summary>

If its endpoints remained connected, that alternative path plus the removed edge would have formed a cycle in the original tree.

</details>

<a id="section-442-exercise-13"></a>
### Exercise 13 {#section-444-exercise-13}
<a id="graph-search-greedy-certificates-ex-13"></a>

What is the adjacency-list cost of BFS?

<details>
<summary>Hint 1</summary>

Count reached vertices and scanned adjacency entries separately.

</details>
<details>
<summary>Hint 2</summary>

The reference code sorts neighbours in addition to scanning them.

</details>
<details>
<summary>Solution</summary>

Standard BFS without neighbor sorting enqueues each reached vertex at most once and scans each outgoing entry of a reached vertex once. Thus a source-local search costs $\\Theta(\\lvert R\\rvert+\\lvert E_R\\rvert)$ for reached vertices $R$ and their scanned entries $E_R$, under constant-time dictionary/set operations. If the routine initializes all vertices but traverses only the source component, the cost is $\\Theta(\\lvert V\\rvert+\\lvert E_R\\rvert)$. It becomes $\\Theta(\\lvert V\\rvert+\\lvert E\\rvert)$ if all stored edges are scanned, or if every vertex is reached. The reproducible reference code above additionally pays $O(\\sum_{u\\in R}d(u)\\log(d(u)+1))$ to sort neighbor lists.

</details>

<a id="section-466-exercise-14"></a>
### Exercise 14 {#section-468-exercise-14}
<a id="graph-search-greedy-certificates-ex-14"></a>

Does a shortest-path tree contain every shortest path?

<details>
<summary>Hint 1</summary>

A parent tree chooses only one predecessor.

</details>
<details>
<summary>Hint 2</summary>

Two equal-length routes may reach the same vertex.

</details>
<details>
<summary>Solution</summary>

No. It selects one parent per reached vertex; ties can create other shortest paths not present in the selected tree.

</details>

<a id="section-490-exercise-15"></a>
### Exercise 15 {#section-492-exercise-15}
<a id="graph-search-greedy-certificates-ex-15"></a>

Separate certificate soundness from producer correctness.

<details>
<summary>Hint 1</summary>

Quantify first over every accepted certificate, then over producer runs.

</details>
<details>
<summary>Hint 2</summary>

The two implications have different premises.

</details>
<details>
<summary>Solution</summary>

Checker soundness says any accepted object proves the claim. Producer correctness says the algorithm always constructs an accepted object for valid inputs. Either can fail independently.

</details>

<a id="section-514-exercise-16"></a>
### Exercise 16 {#section-516-exercise-16}
<a id="graph-search-greedy-certificates-ex-16"></a>

How should an unreachable target be represented?

<details>
<summary>Hint 1</summary>

The source-to-itself route has length zero.

</details>
<details>
<summary>Hint 2</summary>

Use a typed missing value so it differs from a legitimate empty-edge route.

</details>
<details>
<summary>Solution</summary>

Return an explicit option such as \`None\`, not an empty path: the empty path validly connects a vertex to itself and would be ambiguous.

</details>

<a id="section-538-project-certificate-carrying-route-planner"></a>
## Project: certificate-carrying route planner {#section-540-project-certificate-carrying-route-planner}

Implement BFS for a directed graph using only the language standard library. For a reachable query, output a path and write an independent checker that verifies endpoints and every edge. For an unreachable query, output the closed reachable set described above and check closure. Supply the BFS invariant, prove both checker soundness statements, test empty and disconnected graphs, and report $\\lvert V\\rvert$, $\\lvert E\\rvert$, scanned edges, and maximum queue length. A polished submission distinguishes evidence generated by the algorithm from evidence established by its tests.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=cost-amortization-lower-bounds) · [Next chapter](#/item/book-algorithms-computation-proof-desk?chapter=data-structures-amortization) · [Book overview](#/item/book-algorithms-computation-proof-desk)


<a id="section-545-sources"></a>
## Sources {#section-547-sources}

The original native chapter and every original worked solution and reference implementation remain in this source, developed for the twelve-chapter L2 route. Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [*Mathematics for Computer Science*](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), is an author-written reference for finite proofs and computational foundations.

<a id="section-549-summary"></a>
## Summary {#section-551-summary}

BFS combines FIFO layers with parent witnesses to establish shortest-edge distances. DFS supports cycle and topological arguments. Dijkstra needs nonnegative weights, and greedy optimality needs an exchange theorem. Tree cut exchanges preserve an optimal extension even with ties. Certificates require their own soundness arguments, with explicit graph and representation assumptions.
`;export{e as default};