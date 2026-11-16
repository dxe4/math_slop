var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: data-structures-amortization
title: "Data Structures, Amortization, and Representation Tradeoffs"
level: undergraduate
estimated_minutes: 140
license: CC BY-SA 4.0
---

# Data Structures, Amortization, and Representation Tradeoffs {#section-1-data-structures-amortization-and-representation-tradeof}

A data structure is a mathematical value hidden behind a changing concrete state. Its proof has three layers: the representation invariant says which states are legal, the abstraction function says which value a legal state denotes, and each operation proves that its result and new state satisfy the public contract.

<a id="section-3-1-abstract-values-and-concrete-states"></a>
## 1. Abstract values and concrete states {#section-5-1-abstract-values-and-concrete-states}

A stack is abstractly a finite sequence. It can be represented by an array prefix, a linked chain, or two queues. Clients should observe the same \`push\`, \`pop\`, and \`top\` behavior. They need not observe allocation addresses or unused capacity.

For an array stack with storage $A$ and size $n$, an invariant is $0 \\le n \\le len(A)$, and the abstract sequence is $A[0:n]$. A correct \`push(x)\` writes at $A[n]$ after ensuring capacity, increments $n$, and denotes the old sequence followed by $x$. A correct \`pop\` requires $n>0$, decrements first, and returns the old last element.

<a id="section-9-2-dynamic-arrays"></a>
## 2. Dynamic arrays {#section-11-2-dynamic-arrays}

If a full array of capacity $c$ grows to $2c$, one append can cost $\\Theta(c)$, yet a sequence of $m$ appends costs $\\Theta(m)$. Aggregate analysis groups copies by resize: capacities $1,2,4,\\ldots$ give fewer than $2m$ copied elements before size $m$, plus $m$ writes.

The accounting method charges three units per append: one pays the current write and two saved credits pay future moves. The potential method uses $Phi=2n-c$ in a suitable growth regime; amortized cost is actual cost plus the potential change. Potential is analysis currency, not elapsed time.

Shrinking whenever one deletion makes the array nonfull causes thrashing. A hysteresis rule—grow when full, shrink when one-quarter full—separates resize thresholds and restores constant amortized update cost.

<a id="section-17-3-linked-structures"></a>
## 3. Linked structures {#section-19-3-linked-structures}

A singly linked list represents the sequence reached from \`head\` by following \`next\`. Its invariant requires an acyclic finite chain and a size equal to the number of reachable nodes. Constant-time insertion at the head does not imply constant-time search or tail deletion.

Pointer updates must be ordered so reachability is not lost. To insert $x$ after node $p$, first set \`new.next=p.next\`, then $p.next=new$. The abstraction proof compares the old and new reachability sequence.

<a id="section-23-4-hash-tables"></a>
## 4. Hash tables {#section-25-4-hash-tables}

A hash table maps keys to buckets. With chaining, the representation invariant says every stored entry lies in the bucket selected by the current hash rule and no key occurs twice. Expected constant-time claims require a probability or distribution hypothesis; they are not deterministic worst-case guarantees.

At load factor $\\alpha=n/m$, simple uniform hashing gives expected unsuccessful search proportional to $1+\\alpha$. An adversary who can force collisions can create a linear chain. Resizing changes bucket positions, so rehashing must recompute placement rather than copy bucket indices blindly.

<a id="section-29-5-binary-search-trees"></a>
## 5. Binary search trees {#section-31-5-binary-search-trees}

For each node with key $k$, a strict binary-search-tree invariant places all left-subtree keys below $k$ and all right-subtree keys above $k$ (or states a duplicate policy). Inorder traversal is therefore sorted by structural induction.

A search inspects at most $h+1$ nodes in a tree of edge-height $h$, and its worst-case successful or unsuccessful cost is $\\Theta(h+1)$ when a query follows a deepest route. A root hit still costs $\\Theta(1)$ even when the tree is tall. Search is $\\Theta(\\log n)$ in the worst case only under a balance guarantee. Inserting sorted keys into an unbalanced tree can produce height $n-1$. Rotation preserves inorder order while changing height; the proof checks the few affected subtrees rather than redrawing the whole tree.

<a id="section-35-6-heaps-and-priority-queues"></a>
## 6. Heaps and priority queues {#section-37-6-heaps-and-priority-queues}

A binary min-heap stored in an array has shape implicitly and satisfies $A[parent(i)] \\le A[i]$. The minimum is at index zero. Insertion appends then bubbles upward; deletion swaps in the last element then bubbles downward. Each step moves one level, so the worst-case cost is $\\mathcal{O}(\\log n)$.

Bottom-up heap construction is linear, not $\\Theta(n \\log n)$. Most nodes are near leaves and move little. The number of nodes of height exactly $h$ is at most $\\lceil n/2^{h+1}\\rceil$ (up to the incomplete last level); summing $h$ possible moves over these height classes gives a convergent weighted geometric series times $n$.

<a id="section-41-7-disjoint-sets"></a>
## 7. Disjoint sets {#section-43-7-disjoint-sets}

Union-find maintains a partition under \`find\` and \`union\`. A parent forest represents each set by its root. Union by rank attaches the root of smaller rank under the root of larger rank and increments rank on a tie. Before compression, rank bounds tree height under the stated update rule. Path compression rewires nodes toward the root without changing ranks, so afterward rank remains an upper bound used by the analysis rather than the node's actual current depth.

The celebrated inverse-Ackermann amortized bound needs a substantial theorem. For this course it is enough to prove correctness, show logarithmic height for union by size without compression, and identify the stronger bound as a forward result rather than hand-wave it.

<a id="section-47-8-persistence-and-aliasing"></a>
## 8. Persistence and aliasing {#section-49-8-persistence-and-aliasing}

In a persistent structure, old versions remain observable. Path copying creates new nodes along the update route and shares unchanged subtrees. Correctness needs a noninterference argument: updating the new root must not mutate nodes reachable from an old root.

Aliasing makes local-looking updates global. Ownership, immutability, or explicit reference reasoning is part of the representation contract, not a language-specific nuisance.

<a id="section-53-9-dependency-free-dynamic-array-model"></a>
## 9. Dependency-free dynamic array model {#section-55-9-dependency-free-dynamic-array-model}

\`\`\`python
class Vector:
    def __init__(self):
        self._items = [None]
        self._size = 0

    def append(self, value):
        if self._size == len(self._items):
            grown = [None] * (2 * len(self._items))
            for i in range(self._size):
                grown[i] = self._items[i]
            self._items = grown
        self._items[self._size] = value
        self._size += 1

    def pop(self):
        if self._size == 0:
            raise IndexError("pop from empty vector")
        self._size -= 1
        value = self._items[self._size]
        self._items[self._size] = None
        return value

    def values(self):
        return self._items[:self._size]

if __name__ == "__main__":
    vector = Vector()
    for number in range(100):
        vector.append(number)
    assert vector.values() == list(range(100))
    assert [vector.pop() for _ in range(3)] == [99, 98, 97]
\`\`\`

This intentionally omits shrinking, iteration invalidation, and concurrency. A production contract must decide all three.

<a id="section-91-10-choosing-representations"></a>
## 10. Choosing representations {#section-93-10-choosing-representations}

There is no universally best structure. Record the operation mix, input scale, memory model, ordering needs, worst-case latency constraints, concurrency, persistence, and adversarial control. An asymptotically faster structure can lose on small inputs or locality, but benchmark evidence does not repeal the asymptotic theorem. The honest decision records both.


<a id="section-96-worked-example-1-a-nonnegative-potential-for-doubling"></a>
## Worked example 1: a nonnegative potential for doubling {#section-98-worked-example-1-a-nonnegative-potential-for-doubling}

The expression $2n-c$ above is useful after growth has made the array at least half full, but it can be negative at initialization. For an append-only array of capacity $c\\ge1$, use the total potential $\\Phi(n,c)=\\max(0,2n-c)$. Initially $n=0,c=1$, so potential is zero. Charge one for writing the new entry and one for each copied old entry, excluding allocator overhead except for an additional constant or linear charge stated separately.

Without resizing, actual cost is one and increasing $n$ changes potential by at most two, so amortized cost is at most three. At a resize, the old size equals capacity $c$, with potential $c$. The new capacity is $2c$ and new size $c+1$, with potential two. Actual cost is $c+1$, giving amortized cost $(c+1)+(2-c)=3$. Summing and using nonnegativity gives at most $3m$ item assignments for $m$ appends. If allocation initializes all new cells, each growth adds another linear charge; the geometric series still gives constant amortized append cost with a larger constant.

For the first five appends, capacities after each operation are $1,2,4,4,8$, sizes are $1,2,3,4,5$, and potentials are $1,2,2,4,2$. Actual assignment costs are $1,2,3,1,5$, totaling twelve. Amortized charges are $2,3,3,3,3$, totaling fourteen, exactly actual work plus final potential. This calculation corrects the initialization qualification without altering the represented sequence or the individual linear resize cost.

<a id="section-104-worked-example-2-heap-construction-counts-heights-not-m"></a>
## Worked example 2: heap construction counts heights, not maximum height {#section-106-worked-example-2-heap-construction-counts-heights-not-m}

Consider an array heap with $n$ entries indexed from zero. A node at index $i$ has a leftmost descendant $h$ levels below at index $2^h(i+1)-1$, if that index is below $n$. Therefore the number of nodes of height at least $h$ is $\\lfloor n/2^h\\rfloor$. In a bottom-up construction, sift-down at a node traverses at most its height, with a fixed constant number of comparisons and swaps per level.

The sum of all heights is
$$\\sum_{h\\ge1}\\#\\{v:\\operatorname{height}(v)\\ge h\\}
=\\sum_{h\\ge1}\\lfloor n/2^h\\rfloor<n.$$
Thus all level traversals together cost $O(n)$; visiting every starting node adds another linear term. This exact inequality supplies the detail behind the earlier weighted-series sketch, including incomplete bottom levels. For $n=7$, four leaves have height zero, two nodes have height one and the root height two, totaling four. Processing each node as though it had root height would instead give an unnecessary logarithmic factor.

Correctness is by reverse-index induction: when sifting a node, its child subtrees are already heaps. Moving the smaller child upward repairs the violated parent edge while leaving both off-path subtrees unchanged. The only remaining possible violation moves downward until it reaches a legal position or leaf. Thus the resulting subtree is a heap, and the final root processing establishes the whole array invariant.

<a id="section-115-worked-example-3-union-by-size-and-an-explicit-depth-bo"></a>
## Worked example 3: union by size and an explicit depth bound {#section-117-worked-example-3-union-by-size-and-an-explicit-depth-bo}

Maintain a forest whose roots carry exact component sizes. To unite different roots, attach the smaller component's root to the larger one's root, resolving equal sizes by any fixed rule, and add the two sizes at the new root. Parent paths remain acyclic: the new edge joins different trees and points to the root of the other tree. Both old components now reach that root, while all other components keep theirs. This proves correctness of the partition update.

Whenever an element's depth increases by one, its old component was attached beneath a component at least as large. Its new component therefore has at least twice the previous size. Starting at size one, depth $h$ requires a component of size at least $2^h$. Since no component exceeds the total $N$ elements, $h\\le\\lfloor\\log_2N\\rfloor$. On eight elements, repeatedly merging equal-size components permits depths one, two and three, matching the doubling argument.

Path compression later shortens routes without changing their root, so it preserves the represented partition and cannot invalidate this upper bound. The stronger inverse-Ackermann amortized theorem is not proved by this size-doubling argument; it remains the expressly cited forward result. The distinction between a correctness proof, a logarithmic height bound and a sharper sequence-cost bound is part of the data structure's mathematical contract.

<a id="section-123-practice-with-fully-explained-solutions"></a>
## Practice with fully explained solutions {#section-125-practice-with-fully-explained-solutions}


<a id="section-126-exercise-1"></a>
### Exercise 1 {#section-128-exercise-1}
<a id="data-structures-amortization-ex-1"></a>

State an array-stack abstraction function.

<details>
<summary>Hint 1</summary>

Ignore cells beyond the current size.

</details>
<details>
<summary>Hint 2</summary>

Specify the order of the first $n$ cells, not merely their set.

</details>
<details>
<summary>Solution</summary>

For legal state $(A,n)$, map it to the sequence $A[0],\\ldots,A[n-1]$; unused cells have no abstract meaning.

The abstraction maps a legal concrete state to an ordered sequence, so repeated values keep their multiplicities and positions. The precondition $0\\le n\\le\\operatorname{len}(A)$ guarantees all those indices exist. Altering an unused cell leaves the abstract value unchanged; altering a used cell may change it even if the set of distinct entries stays the same.

</details>

<a id="section-152-exercise-2"></a>
### Exercise 2 {#section-154-exercise-2}
<a id="data-structures-amortization-ex-2"></a>

Why clear a popped cell?

<details>
<summary>Hint 1</summary>

The abstract sequence no longer contains the removed entry.

</details>
<details>
<summary>Hint 2</summary>

A stale concrete reference can still keep memory reachable.

</details>
<details>
<summary>Solution</summary>

It is irrelevant to the sequence abstraction, but clearing prevents an obsolete reference from retaining an object and makes the unused region easier to audit.

After decrementing size, the old last cell lies outside the abstract prefix, so clearing it is not needed for stack-value correctness. It can still matter to memory management: a garbage collector sees concrete references, including unused cells, and may retain an otherwise unreachable object. Separate these resource and abstraction claims rather than treating one as a proof of the other.

</details>

<a id="section-178-exercise-3"></a>
### Exercise 3 {#section-180-exercise-3}
<a id="data-structures-amortization-ex-3"></a>

Bound copies during $m$ doubling appends.

<details>
<summary>Hint 1</summary>

List the capacities at which copying occurs.

</details>
<details>
<summary>Hint 2</summary>

Sum a geometric series and add each new write.

</details>
<details>
<summary>Solution</summary>

Resize copies form $1+2+4+\\ldots+2^k < 2^{k+1} \\le 2m$; adding the $m$ new writes gives fewer than $3m$ assignments up to constants.

For $m\\ge1$, copied capacities are powers of two strictly below $m$. Their sum is below $2m$; the $m$ new-entry writes give fewer than $3m$ item assignments. For $m=0$ the total is zero and is handled separately. Allocation or initialization charges must either be included explicitly or covered by an additional geometric sum.

</details>

<a id="section-204-exercise-4"></a>
### Exercise 4 {#section-206-exercise-4}
<a id="data-structures-amortization-ex-4"></a>

Why is amortized constant not worst-case constant?

<details>
<summary>Hint 1</summary>

Separate one operation from the total sequence.

</details>
<details>
<summary>Hint 2</summary>

One append can still copy every old entry.

</details>
<details>
<summary>Solution</summary>

A resize still takes linear time on one operation; amortization bounds the total over a sequence.

The quantifiers differ: an amortized theorem bounds the sum over every operation sequence, whereas a worst-case per-operation theorem bounds every individual operation. A full capacity-$c$ array can require $c$ copies on its next append. Other cheap appends pay for that event in the aggregate proof, but they do not make the event itself constant time.

</details>

<a id="section-230-exercise-5"></a>
### Exercise 5 {#section-232-exercise-5}
<a id="data-structures-amortization-ex-5"></a>

Give a thrashing sequence.

<details>
<summary>Hint 1</summary>

Put the size next to the resize threshold.

</details>
<details>
<summary>Hint 2</summary>

Alternate deletion and insertion around that same threshold.

</details>
<details>
<summary>Solution</summary>

If capacity shrinks as soon as size falls below capacity, alternating append and delete at the boundary can copy nearly the entire array every operation.

For a rule shrinking capacity to current size immediately after deletion, begin with $n$ entries in capacity $n$. Delete once to force a copy into capacity $n-1$, then append to force growth. Repeat near the chosen capacity boundary. The copies can remain proportional to the current size. Distinct growth and shrink thresholds ensure many cheap operations occur between opposite resizes.

</details>

<a id="section-256-exercise-6"></a>
### Exercise 6 {#section-258-exercise-6}
<a id="data-structures-amortization-ex-6"></a>

What must a list cycle checker establish?

<details>
<summary>Hint 1</summary>

Follow node identity rather than repeated values.

</details>
<details>
<summary>Hint 2</summary>

A bounded prefix that looks acyclic does not cover a longer chain.

</details>
<details>
<summary>Solution</summary>

It must either exhibit a repeated reachable node or prove traversal reaches \`None\`; merely limiting traversal depth can miss a longer cycle.

A mathematical acyclicity proof uses the representation invariant or an explicit algorithm whose repeated-node condition is sound and whose traversal is justified for the entire finite reachable graph. Seeing no repeat among the first hundred nodes is inconclusive if the structure has a hundred-and-one-node cycle. Repeated payload values are not enough either: the property concerns repeated node identities.

</details>

<a id="section-282-exercise-7"></a>
### Exercise 7 {#section-284-exercise-7}
<a id="data-structures-amortization-ex-7"></a>

Why can a hash table degrade to linear search?

<details>
<summary>Hint 1</summary>

Put every key in one bucket.

</details>
<details>
<summary>Hint 2</summary>

Now query a missing key that must scan the chain.

</details>
<details>
<summary>Solution</summary>

If all $n$ keys occupy one chain, locating a missing key inspects all $n$; expected bounds require assumptions preventing systematic collision.

With separate chaining, a missing-key query may have to compare against every entry in the selected bucket. If all $n$ keys collide there, the cost is linear in $n$ under constant-time key comparison. An expectation theorem can still hold over a specified random hash choice, but it cannot delete this possible worst-case state from the deterministic analysis.

</details>

<a id="section-308-exercise-8"></a>
### Exercise 8 {#section-310-exercise-8}
<a id="data-structures-amortization-ex-8"></a>

Why rehash after growth?

<details>
<summary>Hint 1</summary>

Bucket indices depend on capacity.

</details>
<details>
<summary>Hint 2</summary>

Recompute the hash-to-bucket mapping for each entry.

</details>
<details>
<summary>Solution</summary>

Bucket selection depends on the new bucket count, so an entry legal under the old modulus may belong elsewhere under the new one.

For example a key with hash value ten belongs to bucket two when capacity is four and bucket four when capacity is six. Leaving it in its old numbered bucket would make a search using the new modulus miss it. Rehashing preserves the invariant that each stored key is found where the current lookup rule searches.

</details>

<a id="section-334-exercise-9"></a>
### Exercise 9 {#section-336-exercise-9}
<a id="data-structures-amortization-ex-9"></a>

Prove inorder traversal of a BST is sorted.

<details>
<summary>Hint 1</summary>

Apply the induction hypothesis to each subtree.

</details>
<details>
<summary>Hint 2</summary>

Use the strict cross-subtree ordering around the root.

</details>
<details>
<summary>Solution</summary>

By induction each subtree traversal is sorted; every left key is below the root and every right key above it, so concatenating left, root, right is sorted.

The empty tree gives an empty sorted sequence. Inductively, each child traversal is sorted. Every entry of the left traversal is below the root and every entry of the right traversal above it, so concatenating left, root and right remains sorted. The traversal also visits every node once, giving the required key multiset rather than only an ordering assertion.

</details>

<a id="section-360-exercise-10"></a>
### Exercise 10 {#section-362-exercise-10}
<a id="data-structures-amortization-ex-10"></a>

Give a worst-case unbalanced BST.

<details>
<summary>Hint 1</summary>

Insert keys in increasing order.

</details>
<details>
<summary>Hint 2</summary>

Each new key follows only right-child links.

</details>
<details>
<summary>Solution</summary>

Insert $1,2,\\ldots,n$; every node becomes a right child, giving height $n-1$ and linear search.

With distinct increasing keys, each search for the insertion position takes the right branch until the current end. The resulting tree is a chain of $n$ nodes with edge-height $n-1$. Searching for its largest key visits all nodes; searching for the root does not. This distinguishes a worst-case over queries from the cost of every particular query.

</details>

<a id="section-386-exercise-11"></a>
### Exercise 11 {#section-388-exercise-11}
<a id="data-structures-amortization-ex-11"></a>

Why is the root minimum in a min-heap?

<details>
<summary>Hint 1</summary>

Follow the parent chain from any node.

</details>
<details>
<summary>Hint 2</summary>

Compose the heap inequalities by transitivity.

</details>
<details>
<summary>Solution</summary>

Repeated parent inequalities show the root is no greater than every descendant; every array node is its descendant.

For any node, take its finite parent chain to the root. Each edge states that the parent key is no larger than the child key, so transitivity makes the root key no larger than that node. Since all nodes are reached by such chains under the complete-tree shape invariant, the root is a global minimum, including when equal keys occur.

</details>

<a id="section-412-exercise-12"></a>
### Exercise 12 {#section-414-exercise-12}
<a id="data-structures-amortization-ex-12"></a>

Why can heap construction be linear?

<details>
<summary>Hint 1</summary>

Count nodes of height at least $h$.

</details>
<details>
<summary>Hint 2</summary>

Sum those counts over levels instead of multiplying every node by root height.

</details>
<details>
<summary>Solution</summary>

Only few nodes have large height. Summing $n/2^{h+1}$ nodes times $h$ possible moves yields $\\mathcal{O}(n)$.

The complete proof above bounds the total of node heights by $\\sum_{h\\ge1}\\lfloor n/2^h\\rfloor<n$. Sifting at each node costs at most a constant times its height plus constant setup. Summing those bounds gives linear work. The shape property is essential: an arbitrary tall binary tree would not have this distribution of heights.

</details>

<a id="section-438-exercise-13"></a>
### Exercise 13 {#section-440-exercise-13}
<a id="data-structures-amortization-ex-13"></a>

What partition does union-find represent?

<details>
<summary>Hint 1</summary>

Follow parent pointers to a root.

</details>
<details>
<summary>Hint 2</summary>

Equality of roots defines an equivalence relation on elements.

</details>
<details>
<summary>Solution</summary>

Two elements share a set exactly when repeated parent links lead to the same root.

Every node in a legal finite parent forest reaches exactly one root because parent links have no directed cycle except the root self-pointer. Equality of those roots is reflexive, symmetric and transitive, hence partitions the elements. A union operation changes the abstraction by merging exactly the two selected root classes; a find operation should preserve every class.

</details>

<a id="section-464-exercise-14"></a>
### Exercise 14 {#section-466-exercise-14}
<a id="data-structures-amortization-ex-14"></a>

Why does path compression preserve that partition?

<details>
<summary>Hint 1</summary>

A compressed edge ends at an ancestor.

</details>
<details>
<summary>Hint 2</summary>

The terminal root is unchanged for the node and its descendants.

</details>
<details>
<summary>Solution</summary>

It only changes a node's parent to an ancestor with the same root, so equivalence by common root is unchanged.

Replacing $x$'s parent by its existing root cannot introduce a cycle, because that root was already above $x$ and points to itself. All paths formerly passing through $x$ now use a shorter suffix to the same root. Paths not passing through it are unchanged. Therefore no two previously distinct root classes become equal and no old class is split.

</details>

<a id="section-490-exercise-15"></a>
### Exercise 15 {#section-492-exercise-15}
<a id="data-structures-amortization-ex-15"></a>

What can break persistence?

<details>
<summary>Hint 1</summary>

Find a node reachable from two version roots.

</details>
<details>
<summary>Hint 2</summary>

Mutating that one shared node changes both observed values.

</details>
<details>
<summary>Solution</summary>

Mutating a node shared by old and new roots changes both versions, violating the promise that old values remain observable.

For example an old tree root and a new path-copied root may share an untouched subtree. If an update changes a node inside that shared subtree in place, a traversal from the old root observes the new value too. Path copying must continue through every mutated node, or use an ownership argument proving the old version cannot observe it.

</details>

<a id="section-516-exercise-16"></a>
### Exercise 16 {#section-518-exercise-16}
<a id="data-structures-amortization-ex-16"></a>

Separate invariant checking from operation proof.

<details>
<summary>Hint 1</summary>

A checker inspects one state or run.

</details>
<details>
<summary>Hint 2</summary>

An operation theorem quantifies over all legal prestates and inputs.

</details>
<details>
<summary>Solution</summary>

Runtime checks can detect some illegal concrete states. An operation proof universally shows a legal pre-state and satisfied precondition produce the specified result and another legal state.

Checking one poststate can expose an invariant violation but says nothing about legal prestates that were not used. The operation theorem must show that every legal prestate satisfying the precondition terminates with the specified return value and a new state whose abstraction has the intended update. Dynamic checking is useful evidence for particular executions, while that quantified implication is the mathematical contract.

</details>

<a id="section-542-audit-recipe"></a>
## Audit recipe {#section-544-audit-recipe}

For any structure, write a six-row table: abstract value, concrete fields, representation invariant, abstraction function, operation preconditions, and observable postconditions. Then add one cost column naming the unit operation and one adversary column naming what the input controls. This small document prevents representation accidents from masquerading as abstract behavior.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=graph-search-greedy-certificates) · [Next chapter](#/item/book-algorithms-computation-proof-desk?chapter=randomness-approximation) · [Book overview](#/item/book-algorithms-computation-proof-desk)


<a id="section-549-sources"></a>
## Sources {#section-551-sources}

The existing native chapter, its mathematical examples, implementation and original practice solutions are retained and developed here for the L2 route. The prerequisite is [Introduction to Proof](/books/library-book-introduction-to-proof/). See Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [*Mathematics for Computer Science*](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), for proof and discrete computational foundations.

<a id="section-553-summary"></a>
## Summary {#section-555-summary}

Each representation must preserve its abstract value and legal state conditions. Dynamic-array potentials bound sequence cost, heap height sums explain linear construction, and union-by-size doubling proves logarithmic depth. Expected hashing, worst-case search and amortized update costs make different promises; persistence adds an obligation to preserve observable old versions.
`;export{e as default};