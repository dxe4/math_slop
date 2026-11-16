# Appendix B — Glossary and notation {#sec-comb-glossary}

**Bijection.** A one-to-one and onto map; it transports a count without loss.

**Binomial coefficient.** $\binom nk$, the number of $k$-subsets of an
$n$-element set.

**Composition.** A structure assembled from smaller ordered parts; also the
operation of applying one function after another.

**Generating function.** A formal power series whose coefficients encode a
sequence. Convergence is irrelevant for formal coefficient identities unless
analytic asymptotics are invoked.

**Graphon.** A symmetric measurable function from $[0,1]^2$ to $[0,1]$ used
as a dense graph limit, considered up to measure-preserving relabeling.

**Graph.** A vertex set together with an edge set. This book says explicitly
when loops, parallel edges, direction, or weights are allowed.

**Invariant.** A value unchanged by the chosen notion of equivalence, such as
vertex degree multiset under graph isomorphism.

**Hypergraph.** A vertex set together with hyperedges that are subsets of any
allowed size; it is $r$-uniform when every edge has exactly $r$ vertices.

**Laplacian.** For graph adjacency matrix $A$ and degree matrix $D$, the
positive semidefinite matrix $L=D-A$.

**Lattice.** A poset in which each pair has a meet and join. It is unrelated to
a geometric grid unless stated otherwise.

**Matching.** A set of pairwise vertex-disjoint edges.

**Matroid.** A finite ground set with an independence family containing the empty set and satisfying
heredity and exchange.

**Polytope.** The convex hull of finitely many points, equivalently a bounded
intersection of finitely many closed half-spaces.

**Partition.** Depending on context, either disjoint nonempty blocks covering
a set or a nonincreasing sequence of positive integers with prescribed sum.

**Poset.** A set with a reflexive, antisymmetric, transitive relation.

**Quasirandom graph sequence.** A dense graph sequence whose discrepancy,
fixed-subgraph counts, or equivalent spectral statistics approach those of a
uniform random graph with the same limiting edge density.

**Recurrence.** A rule defining sequence terms from earlier terms plus enough
initial data to determine a unique sequence.

**Simple graph.** An undirected graph with neither loops nor parallel edges.

**Species.** A rule assigning structures to finite label sets compatibly with
bijections; its exponential generating function records labeled counts.

**Sumset.** $A+B=\{a+b:a\in A,b\in B\}$ in a declared abelian group.

**Transfer theorem.** A result converting a generating function's controlled
local singular expansion into coefficient asymptotics.

**Transversal.** A vertex set meeting every edge of a hypergraph; also called
a hypergraph vertex cover.

**Spanning tree.** A connected acyclic subgraph containing every vertex.

**Weight.** A numeric statistic attached to an object. Weighted enumeration
sums monomials or other values instead of merely counting objects.

Frequently used notation includes $[n]=\{1,\ldots,n\}$, $S_n$ for the
permutations of $[n]$, $V(G)$ and $E(G)$ for graph vertices and edges,
$d(v)$ for degree, $\chi(G)$ for chromatic number, $K_n$ for the complete
graph, and $K_{a,b}$ for the complete bipartite graph. The coefficient operator
$[x^n]F(x)$ extracts the coefficient of $x^n$. For additive sets,
$r_{A+B}(s)$ counts ordered representations of $s$ as $a+b$.
