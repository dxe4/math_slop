var e=`---
id: course-discrete-mathematics-advanced
title: "Discrete Mathematics Advanced: Extremality, Randomness, and Exchange"
level: advanced-undergraduate
estimated_minutes: null
---

# Discrete Mathematics Advanced: Extremality, Randomness, and Exchange

<!-- euler-course-route -->

## Current course route

Follow the [current chapter syllabus](/courses/atlas-discrete-mathematics-advanced/), based on [Matroids and Extremal Combinatorics](/books/library-book-discrete-combinatorial-structures/). Its chapters, exercises and preparation links form the present course route.

Preparation courses: [Discrete mathematics](/courses/atlas-discrete-mathematics-structures/) · [Graph theory](/courses/course-graph-theory/) · [Linear algebra II](/courses/atlas-linear-algebra-standard/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A dense graph, a random construction, a matching, and a greedy selection may concern the same finite object while requiring different proofs. This course joins extremal and probabilistic combinatorics, matching and flow, and discrete independence structures. Its central question is: which hypotheses turn a plausible bound or algorithm into a certificate, and what survives when those hypotheses change?

## Course contract and manual records

The stable course identity is \`course-discrete-mathematics-advanced\`; the route slug is \`discrete-mathematics-advanced\`. The five units below are required in order, followed by the fixed primary, changed, and public reconstruction projects. Their work identities are \`DMA-U1\` through \`DMA-U5\`, \`DMA-P\`, \`DMA-C\`, and \`DMA-R\`. Diagnostic questions are \`DMA-D1\` through \`DMA-D5\`; source assignments are \`DMA-S1\` through \`DMA-S8\`. Preserve these identities when naming work.

Preparation means finite sets, binomial coefficients, induction and contradiction, finite simple graphs, conditional probability, and expectation. Calculus is unnecessary for the graph sampling optimization, which we complete by a square. The native preparation bridges in Unit 3 supply the algebraic hypergraph optimizer and exponential notation used in the selected probability proofs; Unit 4 supplies the finite-dimensional real-completeness argument needed for arbitrary real capacities. The linear-matroid example in DMA-S6 §3 is optional; no assigned task depends on span or dimension. Linear algebra and advanced probability become useful for later study, but the selected matroid and dependency arguments do not assume their whole specialist books. Some sources are graduate reference chapters; only the named passages and exercises are required here.

The study time depends on the selected reading, attempts and corrections. Source chapter minutes and the number of questions are not a calibrated course total. Plan a reading-and-writing session around one argument, then record actual time if useful. Finishing a list is not evidence of mastery, and self-reported checkmarks are not grades.

For **every** diagnostic, source exercise, unit problem, and project, keep three separate dated text files locally: \`WORK-ID-YYYY-MM-DD-first.txt\`, \`WORK-ID-YYYY-MM-DD-comparison.txt\`, and \`WORK-ID-YYYY-MM-DD-revised.txt\`. A source exercise uses a name such as \`DMA-S2-E03\`. Save the first file before opening its public answer; never overwrite it. In the comparison file record which source sections, hints, public models, people, or tools you used, when you opened them, and which steps changed. If an answer was already familiar, record that exposure. Put the corrected argument and its hypotheses in the revised file, retaining all earlier files. The [worksheet portfolio instructions](/guide/learner-records/#keep-a-worksheet-portfolio) describe manual recovery. These files are not allocated shared writing tasks, grades, an unseen examination, or a verified delay measurement.

DMA-P, DMA-C, and DMA-R are new native projects in this course; they are not submissions for the retained source projects. The primary specimen is fixed, rather than chosen from an open project menu. All requested work has a public model below or in its exact source key. Source projects that ask the reader to choose a graph are optional extensions with no claim that a complete key exists for the chosen graph. This selection does not qualify whole books, replace existing courses, or cover every specialist branch of combinatorics. Designs, algebraic/enumerative combinatorics, general matroid minors, and research seminars need further study.

## Diagnostic and repair keys

Attempt all five with a written reason. Then compare and repair the particular gap; no pass score is inferred.

1. **DMA-D1.** A bipartite simple graph has three left vertices of degree two and two right vertices of degree three. Find its edge count and justify the count.
2. **DMA-D2.** Let $N(a)=N(b)=\\{x\\}$ and $N(c)=\\{y,z\\}$. Does $|N(\\{a,b,c\\})|=3$ establish a covering matching?
3. **DMA-D3.** Let $B$ be a fair zero-one variable and $X=Y=B$. Compute $E[X+Y]$ and $E[XY]$. Which calculation can use linearity without independence?
4. **DMA-D4.** Are stable vertex sets of path $a-b-c$ a matroid? Supply the exact augmentation test.
5. **DMA-D5.** For a graph with $n=6,m=2$, maximize $6p-2p^2$ over $0\\le p\\le1$ and state the alteration conclusion.

**Complete diagnostic keys.** D1: the sum of degrees is $3\\cdot2+2\\cdot3=12$. Each undirected edge contributes two ends, so there are six edges. Equivalently count only left ends, each edge once. Repair graph modelling at [graphs and trees](#/item/book-discrete-mathematics-proof-counting-structure?chapter=graphs-trees-connectivity), the handshaking section.

D2: no. The subset $\\{a,b\\}$ has one neighbor for two elements. Any matching covers at most one of them; $a\\mapsto x,c\\mapsto y$ attains size two. Repair the universal subset quantifier at [Hall, §§8–9](#/item/book-discrete-mathematics-proof-counting-structure?chapter=planarity-coloring-matchings), then redo DM-CH06-E004 and its named solution.

D3: $E[X+Y]=1$, but $E[XY]=E[B]=1/2$, whereas $E[X]E[Y]=1/4$. Finite linearity always applies; factoring a product does not. Repair at [probabilistic construction, prerequisites and §§1,6](#/item/book-discrete-combinatorial-structures?chapter=probabilistic-alteration-dependence), then Exercise 6 and its solution.

D4: the family is $\\varnothing,\\{a\\},\\{b\\},\\{c\\},\\{a,c\\}$. Take $I=\\{b\\}$ and $J=\\{a,c\\}$. Neither candidate from $J\\setminus I$ can augment $I$, so augmentation fails despite heredity. Repair at [independence axioms, §§1–2 and Exercise 1](#/item/book-discrete-combinatorial-structures?chapter=independence-augmentation-cryptomorphisms).

D5: the unconstrained critical value $6/(2\\cdot2)=3/2$ is inadmissible. For $0\\le p<q\\le1$, $f(q)-f(p)=(q-p)(6-2(p+q))>0$. Hence the maximum is $f(1)=4$. Delete at most one endpoint per edge from all six vertices; at least four remain stable. Repair the constrained parameter at [alteration, §§3–4 and Exercise 3](#/item/book-discrete-combinatorial-structures?chapter=probabilistic-alteration-dependence).

## Ordered source assignments and feedback

Complete the following sequence together with its indicated native unit. Read the selected proof before comparing the written exercise answer. The numbered exercise and its solution are in the **same linked chapter**; locators below distinguish complete keys from open projects. Names such as “Exercise 4” are local to that chapter.

| Order and work | Required reading and exact exercises | Complete public key and use |
| --- | --- | --- |
| DMA-S1, Unit 1 | [Turán, equality, and stability](#/item/book-discrete-combinatorial-structures?chapter=turan-symmetrization-stability), §§1–2 and 4–7; Exercises **1, 2, 4–12** | §9, “Solved exercises”, the Solution immediately following each named exercise. Use §5's separate clique-removal induction for the bound and equality; full §3 symmetrization and Exercise 3 are not required. |
| DMA-S2, Unit 2 | [Extremal sets, shadows, and compression](#/item/book-discrete-combinatorial-structures?chapter=extremal-set-compression), §§1–10; Exercises **1–12** | §12, “Solved exercises”, each Exercise 1–12 and its complete Solution. Includes the range failure, link failure, and set-pairs cross-condition. |
| DMA-S3, Unit 3 | [Probabilistic construction, alteration, and dependence](#/item/book-discrete-combinatorial-structures?chapter=probabilistic-alteration-dependence), prerequisites and §§1–10 (use the native algebraic optimizer for §4; the final simplified corollary in §7 is optional); Exercises **1–10** | §13, “Solved exercises”, each Exercise 1–10 and its complete Solution. §11's choose-your-own construction project is optional and is not a keyed requirement. |
| DMA-S4, Unit 4 first | [Planarity, coloring, and matchings](#/item/book-discrete-mathematics-proof-counting-structure?chapter=planarity-coloring-matchings), §§6–10; **DM-CH06-E003 and DM-CH06-E004** | §12, the separately headed “DM-CH06-E003 — Solution” and “DM-CH06-E004 — Solution”. §§7–8 contain complete augmenting-path and Hall proofs; unrelated planar/coloring exercises are not assigned. |
| DMA-S5, Unit 4 second | [Conserved flow](#/item/book-applied-modeling-proof-reference?chapter=networks-flow-diffusion), “Conserved flow and cuts” and “Worked certificate and sensitivity”; **Exercises 1–5 only** | “Complete solutions”, numbered **1–5**. Unit 4 below completes the integral termination argument explicitly. Diffusion, random walks, causal material, Exercises 6–18, and the open source project are outside this assignment. |
| DMA-S6, Unit 5 first | [Independence and augmentation](#/item/book-discrete-combinatorial-structures?chapter=independence-augmentation-cryptomorphisms), §§1–3 (the linear-matroid example is optional) and 5–6; **Exercises 1–5** | §8, “Solved exercises”, each Exercise 1–5 and its complete Solution. §5 reconstructs augmentation from rank axioms; the forward rank-submodularity proof is supplied natively below. |
| DMA-S7, Unit 5 second | [Uniform, partition, and transversal families](#/item/book-discrete-combinatorial-structures?chapter=uniform-partition-transversal), §§1–6 and 8–9; **Exercises 1–8** | §11, “Solved exercises”, each Exercise 1–8 and its complete Solution. The full alternating-path augmentation and dummy-slot deficiency proofs are included. Dual answers in Exercises 1–2 use the elementary complement-of-bases and closure definitions stated there. |
| DMA-S8, Unit 5 third | [Weighted greedy objectives](#/item/book-discrete-combinatorial-structures?chapter=weighted-greedy-objectives), §§1–5 and 7–9; **Exercises 1–10** | §11, “Solved exercises”, each Exercise 1–10 and its complete Solution. For Exercises 7–8 read the §6 certificate statement. The native prefix-rank and fundamental-circuit proofs below supply both the greedy theorem and the complete local certificate without requiring the source's separate exchange-bijection chapter. |

The existing graph-theory deep reading has a fully proved **local augmentation** lesson and a Hall statement; it is useful additional exposition, not the source of a complete Hall proof here. The actual Hall proof assigned above belongs to DMA-S4. Likewise, a reference chapter's publication label is not an assessment of this course or of the whole book.

These SHA-256 pins identify the original required chapter versions. They are source provenance, not a learner workload or a generated catalog fingerprint. The future independent audit reads the actual files and the case tables printed below.

\`\`\`json
{
  "record_id": "DMA-SOURCE-PINS",
  "sources": [
    {"id":"DMA-S1","path":"modules/math_test/content/books/discrete-combinatorial-structures/turan-symmetrization-stability.md","sha256":"5a34855d356c9f0d35b023ad49fb8f6401fcf3c4ba1928464913b2f95f433068","exercises":[1,2,4,5,6,7,8,9,10,11,12]},
    {"id":"DMA-S2","path":"modules/math_test/content/books/discrete-combinatorial-structures/extremal-set-compression.md","sha256":"2b8fdeebe34fd5ec9f29a0b25695cc2b7714232c58cde21aa75d165d8cf72f34","exercises":[1,2,3,4,5,6,7,8,9,10,11,12]},
    {"id":"DMA-S3","path":"modules/math_test/content/books/discrete-combinatorial-structures/probabilistic-alteration-dependence.md","sha256":"93e20e7f64746c670e77315359e4808cda5e678ae587d264e7779ff394fb621c","exercises":[1,2,3,4,5,6,7,8,9,10]},
    {"id":"DMA-S4","path":"modules/math_test/content/books/discrete-mathematics-proof-counting-structure/planarity-coloring-matchings.md","sha256":"d84ea5aceacd26ff67c62344f4e545f80047d492ca1ec2ea34f61b286fd176c1","exercises":["DM-CH06-E003","DM-CH06-E004"]},
    {"id":"DMA-S5","path":"modules/math_test/content/books/applied-modeling-proof-reference/networks-flow-diffusion.md","sha256":"b73a06707b400433bce85d01397a789f2b9c0c0b7ccd33d427fbebf9d881c512","exercises":[1,2,3,4,5]},
    {"id":"DMA-S6","path":"modules/math_test/content/books/discrete-combinatorial-structures/independence-augmentation-cryptomorphisms.md","sha256":"62391a5546f17b2539f05feeb33badbaddf75346a5e7a05051607d49d4ee9452","exercises":[1,2,3,4,5]},
    {"id":"DMA-S7","path":"modules/math_test/content/books/discrete-combinatorial-structures/uniform-partition-transversal.md","sha256":"17a371eec5749a12d1d6a8e2b58b4fc177b0573b45c106817cbd3db5d527ac4e","exercises":[1,2,3,4,5,6,7,8]},
    {"id":"DMA-S8","path":"modules/math_test/content/books/discrete-combinatorial-structures/weighted-greedy-objectives.md","sha256":"46dccf68684476d86fa9566cf2a9f662c7a4cac4687b8576a0cc791ed350b604","exercises":[1,2,3,4,5,6,7,8,9,10]}
  ]
}
\`\`\`

## Unit 1 — Extremal graphs and stability

**DMA-U1.** First perform DMA-S1. Throughout this unit a graph is finite, undirected, loopless, and simple. “Triangle-free” excludes three distinct pairwise adjacent vertices. A complete $r$-partite graph has independent parts of sizes $n_1,\\ldots,n_r$ and every crossing edge, so

$$e=\\frac{n^2-\\sum_i n_i^2}{2}.$$

Moving one vertex from size $u$ to size $v$ with $u\\ge v+2$ increases $e$ by $u-v-1>0$. Thus balanced parts maximize edges inside this family. The full Turán theorem says that **every** $K_{r+1}$-free finite simple graph has at most the balanced value $t_r(n)$, with equality exactly for the balanced complete $r$-partite graph. The required general proof and equality analysis are DMA-S1 §5; balancing alone proves only the multipartite assertion. A nonadjacent clone preserves clique-freeness because a clique through the clone transfers to its model vertex. That local lemma alone neither proves termination of an arbitrary repeated procedure nor transfers equality back to its input.

Here is a self-contained triangle-free proof that also measures error. Choose a maximum-degree vertex $v$, put $\\Delta=d(v)$, $A=N(v)$, and $B=V\\setminus A$. The set $A$ is stable: an edge within it would form a triangle with $v$. Write $m_B=e(G[B])$. Summing degrees of vertices in $B$ gives

$$e(A,B)+2m_B\\le\\Delta|B|=\\Delta(n-\\Delta).$$

Since $e=e(A,B)+m_B$,

$$e+m_B\\le\\Delta(n-\\Delta)=\\frac{n^2}{4}-(\\Delta-n/2)^2\\le\\frac{n^2}{4}.$$

Therefore $e\\le\\lfloor n^2/4\\rfloor$ (Mantel). For $n\\ge2$, equality in this **integer** bound forces $m_B=0$ and $\\Delta(n-\\Delta)=\\lfloor n^2/4\\rfloor$: otherwise the integer chain would lose at least one. Thus the parts are $\\lfloor n/2\\rfloor,\\lceil n/2\\rceil$, all crossing edges occur, and $G$ is the balanced complete bipartite graph. Conversely it is triangle-free and attains the bound. The empty and one-vertex cases are immediate. Notice that for odd $n$, equality in the integer bound does not mean $e=n^2/4$.

For any such graph set $D=n^2/4-e\\ge0$. The same proof gives $m_B\\le D$ and $|\\Delta-n/2|\\le\\sqrt D$. Deleting the $m_B$ internal edges makes it bipartite. Missing crossing edges number

$$\\Delta(n-\\Delta)-e(A,B)=\\Delta(n-\\Delta)-e+m_B\\le2D.$$

Thus at most $3D$ total deletions and additions complete this particular bipartition. Actual integer counts may be much smaller. This is a theorem about the maximum-degree partition and edit operations, not a claim that every near-extremizer has an arbitrary chosen partition.

**Worked comparison and DMA-U1-P1.** Compare $K_{2,4}$ with $K_{3,3}$ minus one crossing edge. Determine density, equality, partition balance, deletions, and missing crossing edges for each. **Full key:** both have $n=6,e=8,D=1$, below Mantel's maximum nine. In $K_{2,4}$ a degree-four vertex gives parts $(4,2)$, zero internal edges, and zero missing crossing edges; the imbalance is one. In $K_{3,3}-e$, choose a degree-three vertex; its neighborhood is the entire opposite part, so the parts are $(3,3)$, with zero internal edges and one missing crossing edge. The imbalance is zero. Both satisfy the theorem's coarse bounds, but equal edge counts do not imply equal reconstruction costs or isomorphism: their degree multisets are respectively $(4,4,2,2,2,2)$ and $(3,3,3,3,2,2)$.

**DMA-U1-P2.** On twelve vertices compare complete tripartite sizes $(4,4,4)$ and $(6,3,3)$. Does a three-edge deficit bound the edit distance of an arbitrary $K_4$-free input from that displayed graph? **Full key:** their counts are $(144-48)/2=48$ and $(144-54)/2=45$. The squared deviations from four are $4+1+1=6=2\\cdot3$. This identity assumes complete tripartite structure. It supplies no edit-distance estimate for an arbitrary original graph merely because symmetrization can produce a multipartite output. Repair this distinction at DMA-S1 §§6–7 and Exercise 10.

## Unit 2 — Extremal sets and compression

**DMA-U2.** Perform DMA-S2. In the subset lattice of $[n]$, an antichain contains no two distinct comparable sets. A permutation's successive initial sets form a chain. A given $k$-set is an initial set in $k!(n-k)!$ permutations. Counting pairs of an antichain member and a permutation whose chain contains it gives

$$\\sum_{A\\in\\mathcal A}|A|!(n-|A|)!\\le n!,\\qquad
\\sum_{A\\in\\mathcal A}\\binom n{|A|}^{-1}\\le1.$$

Since every binomial coefficient is at most $\\binom n{\\lfloor n/2\\rfloor}$, this proves the middle-level antichain bound. It is a necessary bound; an arbitrary list of level counts satisfying it need not admit an antichain.

For a $k$-uniform family $\\mathcal F$, its lower shadow consists of all $(k-1)$-subsets contained in its members. Count incidence edges between these two levels: exactly $k|\\mathcal F|$ leave the family and at most $(n-k+1)|\\partial\\mathcal F|$ enter its shadow. Hence

$$|\\partial\\mathcal F|\\ge\\frac{k|\\mathcal F|}{n-k+1}.$$

This universal bound is not an exact minimum-shadow formula for every family size. When the full $k$th level is used, every lower incidence is present, so equality holds. We will apply this to **bases as a uniform set family**, after separately proving matroid axioms; a shadow inequality does not itself prove matroid exchange.

A left compression $C_{ij}$ replaces $j$ by $i<j$ only when $j\\in A$, $i\\notin A$, and the proposed replacement is absent from the family. A collision keeps both old members. Pairing $S+i$ with $S+j$ shows cardinality and uniformity are preserved: occupancies $00,10,11$ stay fixed and $01$ becomes $10$. Every nontrivial move lowers the nonnegative integer potential $\\sum_{A\\in\\mathcal F}\\sum_{a\\in A}a$, so repeated nontrivial moves terminate. DMA-S2 §§4–5 prove shadow nonincrease and preservation of ordinary intersection with full case checks. They are additional preservation theorems, not consequences of termination.

**DMA-U2-P1.** Apply $C_{13}$ to the following actual family, give the complete collision ledger and its shadow, and compare potentials.

\`\`\`json
{"record_id":"DMA-U2-P1","n":4,"family":[[1,2],[2,3],[3,4]],"shift":[1,3],"shifted":[[1,2],[2,3],[1,4]],"shadow":[[1],[2],[3],[4]],"potential_before":15,"potential_after":13}
\`\`\`

**Full key:** $12$ stays fixed. The proposed image of $23$ is $12$, already present, so $23$ also stays. The image of $34$ is absent $14$, so it moves. Both shadows are the four singletons. The potential decreases from $3+5+7=15$ to $3+5+5=13$. Pointwise mapping followed by deduplication would incorrectly lose a member. The input is not intersecting ($12$ and $34$ are disjoint), so no intersection hypothesis has been invoked. These three pairs have normalized-chain weight $3/6=1/2$.

**DMA-U2-P2.** Refute both claims: (a) an intersecting family of triples on five points has at most $\\binom42$ members; (b) removing a common distinguished point preserves intersection. **Full key:** (a) all $\\binom53=10$ triples intersect, since two disjoint triples would require six points. Ten exceeds six; the usual sharp star bound assumes $n\\ge2k$, which fails here. (b) $\\{123,145\\}$ is intersecting, but its link at $1$ is $\\{23,45\\}$, a disjoint pair. Deletion and link are still cross-intersecting in the stated source sense; the link alone need not be intersecting. Repair at DMA-S2 §§6,8 and Exercises 9–10. The cyclic uniform-intersection proof and set-pairs proof are required source arguments; neither is being claimed as a consequence of the local shadow calculation.

## Unit 3 — Random constructions, alteration, and dependence

**DMA-U3.** Perform DMA-S3. Name the random coordinates before writing probabilities. For a finite graph, assign each vertex independently a fair bit. Let $I_e$ indicate different endpoint bits. Independence of the **two endpoint coordinates** gives $E[I_e]=1/2$. Finite linearity, which needs no independence between edge indicators, gives expected cut size $m/2$. Some outcome has at least that many crossing edges. Conditional expectation constructs one: after any partial assignment, the two choices for the next bit average to the current conditional expectation; choose a larger one. For this graph objective the conditional expectations are explicit sums, so the choice is computable. This is not a promise for every implicit probability model.

For alteration, select vertices independently with probability $p\\in[0,1]$. Let $X$ count selected vertices and $Y$ count edges whose two endpoints are selected. Then $E[X-Y]=np-mp^2$. For any particular sample, scan the initially contained edges and delete an endpoint if both are still present. No new contained edge is created, each deletion is charged to a distinct initially contained edge, and the final set is stable with size at least $X-Y$. Thus some stable set has size at least $np-mp^2$, rounded **up** to an integer. This uses one combined variable; a large sample and a low-defect sample could otherwise be different outcomes.

For $m>0$ complete the square:

$$np-mp^2=\\frac{n^2}{4m}-m\\left(p-\\frac{n}{2m}\\right)^2.$$

If $n/(2m)\\le1$, choose that probability; otherwise the quadratic increases up to the admissible endpoint one and yields $n-m$. If $m=0$, take every vertex. For an $r$-uniform hypergraph the same deletion charge gives $np-mp^r$; DMA-S3 §§3–4 prove and optimize that separate contract. A bound on a repaired output is not a statement that all samples attain it, nor that this method finds a maximum stable set.

**Preparation bridge for the required hypergraph optimizer.** The derivative notation in DMA-S3 §4 is a shortcut, not an extra calculus requirement. Here is an algebraic proof for every integer $r\\ge2$. When $m>0$ put $p_*=(n/(rm))^{1/(r-1)}$. For $p_*>0$ and $t=p/p_*$,

$$np-mp^r=np_*\\left(t-\\frac{t^r}{r}\\right),\\qquad
 t^r-rt+r-1=(t-1)^2\\sum_{j=0}^{r-2}(r-1-j)t^j\\ge0\\quad(t\\ge0).$$

The polynomial identity follows by expanding the right side and cancelling consecutive coefficients. It shows the maximum over nonnegative $p$ occurs at $p_*$, with value $(1-1/r)np_*$. Use it only if $p_*\\le1$. If $p_*>1$, then $n>rm$; for $0\\le p<q\\le1$ the identity $q^r-p^r=(q-p)\\sum_{j=0}^{r-1}q^{r-1-j}p^j$ gives $f(q)-f(p)\\ge(q-p)(n-rm)>0$. The admissible maximum is therefore at one. This proves every optimizer used in the assigned hypergraph exercises without differentiating. For example $n=24,m=64,r=3$ gives $p_*=1/(2\\sqrt2)$ and bound $4\\sqrt2$, which rounds up to six because $25<32<36$; it does not round up to seven.

**Preparation bridge for the required exponential-tail proof.** The needed real-number property is completeness: every nonempty bounded-above set has a supremum. For $t\\ge0$, define $\\exp(t)=\\sum_{k\\ge0}t^k/k!$. The series converges because, after sufficiently many terms, each next-term ratio is at most $1/2$. The same geometric domination on any bounded interval gives continuity. Multiplying the nonnegative convergent series and applying the binomial theorem gives $\\exp(x+y)=\\exp(x)\\exp(y)$ for $x,y\\ge0$. Set $\\exp(-t)=1/\\exp(t)$ to extend the product rule to all real inputs. The series gives $\\exp(h)>1$ for $h>0$, so the product rule makes it strictly increasing, and $\\exp(t)\\ge1+t$ makes it unbounded above. Continuity and bisection, with completeness supplying the point in the nested closed intervals, show that every $z\\ge1$ is $\\exp(\\lambda)$ for a unique $\\lambda\\ge0$. This inverse is $\\ln z$ for $z\\ge1$; for $0<z<1$ define $\\ln z=-\\ln(1/z)$. Write $e^t=\\exp(t)$ and $a^b=\\exp(b\\ln a)$ for positive $a$.

The inequality $1+u\\le\\exp(u)$ for $u\\ge0$ follows directly from the series. For mutually independent Bernoulli coordinates $B_i$ with means $p_i$, independence factors the finite sum over all bit outcomes, giving

$$E[e^{\\lambda\\sum_i B_i}]=\\prod_i(1+p_i(e^\\lambda-1))
\\le\\exp\\left(\\mu(e^\\lambda-1)\\right),\\quad \\mu=\\sum_i p_i,\\ \\lambda\\ge0.$$

Markov applied to this nonnegative exponential bounds $P(X\\ge a)$ by $\\exp(\\mu(e^\\lambda-1)-\\lambda a)$. With $\\delta>0$, choose $a=(1+\\delta)\\mu$ and $\\lambda=\\ln(1+\\delta)$ to obtain exactly DMA-S3 §7's main multiplicative bound. The $\\delta=0$ bound is one; if $\\mu=0$, every Bernoulli coordinate is zero almost surely and the displayed bound at zero is again one. The final simplified $\\exp(-\\delta^2\\mu/3)$ corollary and its calculus-style estimate are optional. Exercise 10 asks where the finite product factorization needs independence, which is now explicit.

For the constants used below, $e=\\sum1/k!<3$: $k!\\ge2^{k-1}$ for $k\\ge2$, with strict inequality from $k=3$, bounds the tail by a geometric series of sum one. Also $(1+1/d)^d\\le\\sum_{k=0}^d1/k!\\le e$ for positive integer $d$, by expanding binomially and using $\\binom dk/d^k\\le1/k!$. These facts supply the local-lemma constant without an unexplained analytic estimate.

A dependency graph for events $A_i$ must make each $A_i$ independent of the **joint sigma-algebra** of all its nonneighbors. Pairwise independence is insufficient. Independent underlying coordinates supply a safe graph by connecting any events sharing coordinates. The symmetric local lemma states that $P(A_i)\\le p$ and maximum dependency degree $d$ imply positive probability of avoiding all bad events if $ep(d+1)\\le1$. It proves existence, not a sampler or a claim that the events are all independent.

Here is the proof mechanism, needed to see the joint hypothesis. If $0<x<1$ and $p\\le x(1-x)^d$, induct on the number of conditioned avoidances. Split them into neighbors of $i$ and nonneighbors. Conditioning on the nonneighbors leaves $P(A_i)\\le p$ by joint independence. Reveal at most $d$ neighbor avoidances; the induction bounds each conditional bad probability by $x$, so their avoidance product is at least $(1-x)^d$. The final conditional probability is at most $p/(1-x)^d\\le x$. The same induction keeps each conditioning event positive. Multiplying successive avoidance factors, each at least $1-x>0$, proves simultaneous avoidance. For $d\\ge1$ take $x=1/(d+1)$ and use $(1+1/d)^d\\le e$; for $d=0$ joint independence and $p<1$ suffice. DMA-S3 §9 supplies the complete conditional argument; its §7 exponential-tail proof uses a different, mutual-independence factorization.

**DMA-U3-P1.** Audit this printed probability table. Are the events “coordinate $i$ is one” pairwise independent? Is the empty graph a dependency graph? Can all three bad events be avoided?

\`\`\`json
{"record_id":"DMA-U3-P1","outcomes":[{"bits":[0,0,1],"probability":[1,4]},{"bits":[0,1,0],"probability":[1,4]},{"bits":[1,0,0],"probability":[1,4]},{"bits":[1,1,1],"probability":[1,4]}],"marginals":[[1,2],[1,2],[1,2]],"pair_joints":[[1,4],[1,4],[1,4]],"triple_joint":[1,4],"avoidance":[0,1]}
\`\`\`

**Full key:** each marginal is $1/2$ and each two-event joint probability is $1/4$, so all pairs are independent. Yet the triple joint is $1/4$, not $1/8$, and $P(A_1\\mid A_2\\cap A_3)=1$, not $1/2$. Thus independence from the joint nonneighbor sigma-algebra fails and the empty graph is invalid. No row is $000$, so avoidance has probability zero. A supposed independent-events conclusion would be false. Repair at DMA-S3 §8, not by changing the marginal probabilities.

**DMA-U3-P2.** In a 10-uniform hypergraph, each vertex belongs to at most three edges. Prove a two-coloring with no monochromatic edge exists, using $e<3$. **Full key:** random vertex colors are independent. A fixed edge is monochromatic with probability $2/2^{10}=1/512$. Joining intersecting hyperedges is a valid dependency graph; an edge has at most $10(3-1)=20$ neighbors, counting every overlap and tolerating overcount. Hence $ep(d+1)<3\\cdot21/512=63/512<1$. The local lemma applies. This does not furnish a specific coloring of an unspecified hypergraph. Omitting an overlap is unsafe; counting it twice only weakens the bound. Repair at DMA-S3 §§8–9 and Exercises 7–8.

## Unit 4 — Matching deficiency and flow certificates

**DMA-U4.** Perform DMA-S4, then DMA-S5. A matching is a set of edges with disjoint endpoints; maximal means no single edge can be added, while maximum means largest cardinality. Alternating paths can change a certificate without discarding any previously covered internal vertex. Their symmetric-difference proof and Hall's full proof are DMA-S4 §§7–8. We now join them to flow rather than treating Hall as a slogan.

A directed finite network has distinct source $s$, sink $t$, nonnegative finite capacities, and edge flows between zero and capacity. At every other vertex inflow equals outflow; value is **net** outflow from $s$. Summing these conservation equations over a cut's source side $S$ cancels internal edges and gives

$$|f|=f(S,V\\setminus S)-f(V\\setminus S,S)\\le c(S,V\\setminus S).$$

For each original arc, retain its identity: its forward residual capacity is $c_e-f_e$ and its backward residual capacity is $f_e$. Parallel residual contributions, including those from antiparallel original arcs, must not overwrite one another. A residual $s$–$t$ path with positive bottleneck augments value and preserves feasibility. If none exists, let $S$ be all vertices reachable from $s$ by positive residual arcs. Every original outgoing cut arc is saturated; every original incoming cut arc carries zero flow. The displayed inequality is equality. Thus a feasible flow and an equal-capacity cut prove both maximum flow and minimum cut, independently of the path history.

For **integer capacities**, start at the integral zero flow and always use a full path bottleneck. Every residual capacity and every resulting flow stays integral. Each successful augmentation increases value by a **positive integer**, at least one. Value is bounded above by the finite sum of capacities leaving $s$, so there can be only finitely many successful augmentations. A complete residual search then either augments or returns the equal-capacity cut. This supplies the termination step needed in DMA-S5 Exercise 5. For rational capacities, one common denominator scales the finite problem to integers; the scaled bound may be large. For arbitrary real or irrational capacities there is no guaranteed positive integer increment, so this termination proof does not apply to unrestricted path choices. It is not a claim that every such run fails. The shortest-residual-path rule has a separate finite combinatorial termination argument; it is not established by the integer bound.

The finite-real **max-flow/min-cut theorem itself** does survive. Here is the analytical preparation rather than an implicit compactness prerequisite. Use real completeness, the supremum property stated in Unit 3. Every bounded real sequence has a convergent subsequence: repeatedly bisect a containing closed interval and keep a half containing infinitely many terms. The retained nested intervals have lengths tending to zero; completeness gives their common point, and successively choosing larger indices from those intervals yields convergence to it. In a finite box, repeat this subsequence selection for each coordinate; after finitely many coordinates, all converge together. This is the sequential compactness fact needed here.

The feasible edge-flow vectors form a nonempty compact subset of a finite box: zero is feasible, each coordinate lies in $[0,c_e]$, and limits preserve every coordinate bound and every linear conservation equality. The source value is linear and bounded above by total outgoing capacity. Let $v$ be its supremum; choose feasible vectors with values within $1/k$ of $v$. The subsequence argument gives a feasible limit, and finite linear sums preserve its limiting value $v$. Thus a maximum is attained. A positive residual path would improve that maximum, so none exists; its reachable cut proves equality as above. This existence proof does not implement exact arithmetic for irrational input.

To encode a bipartite graph with left side $L$ and right side $R$, use arcs $s\\to u$ of capacity one, $u\\to v$ for each allowed pair of capacity $M=|L|+1$, and $v\\to t$ of capacity one. An integral flow uses at most one compatibility arc at any used left or right vertex, so its positive compatibility arcs form a matching; conversely a matching gives an integral flow of its size. There is a cut of capacity $|L|$. A minimum cut therefore crosses no capacity-$M$ arc. Writing $X=S\\cap L$, its right part must contain $N(X)$; removing extra right vertices does not increase cut capacity. Its value is

$$|L\\setminus X|+|N(X)|.$$

Every such $X$ also supplies that cut. Consequently

$$\\nu(G)=\\min_{X\\subseteq L}(|L\\setminus X|+|N(X)|)
=|L|-\\max_{X\\subseteq L}(|X|-|N(X)|).$$

The empty subset makes the maximum deficiency nonnegative. Hall's condition is exactly zero deficiency. This is a full min-cut derivation of matching deficiency. Restricting $L$ to any specified element set later gives transversal rank. Equal whole-side counts alone do not establish any of these conclusions.

**DMA-U4-P1.** For the following printed capacity/flow table, verify conservation, value seven, two minimum cuts, and the complete residual-reachability certificate. Each row is \`[from,to,capacity,flow]\`.

\`\`\`json
{"record_id":"DMA-U4-P1","arcs":[["s","a",4,4],["s","b",3,3],["a","b",2,2],["a","t",2,2],["b","t",5,5]],"value":7,"minimum_cuts":[["s"],["s","a","b"]],"residual_reachable":["s"]}
\`\`\`

**Full key:** $a$ receives four and sends $2+2$; $b$ receives $3+2$ and sends five. Every edge is saturated and nonnegative. Source net outflow and sink inflow are seven. Cuts $\\{s\\}$ and $\\{s,a,b\\}$ have capacities $4+3=7$ and $2+5=7$. The only positive residual arcs are $a\\to s:4$, $b\\to s:3$, $b\\to a:2$, $t\\to a:2$, $t\\to b:5$. Thus no positive residual arc leaves $s$, and the reachable set is exactly $\\{s\\}$. Increasing only $a\\to t$ leaves the first cut binding; increasing only $s\\to a$ leaves the second binding. These are throughput claims about the specified static network.

**DMA-U4-P2.** Let $N(a)=\\{x,y\\}$, $N(b)=\\{x\\}$, $N(c)=\\{y,z\\}$ and start with $a\\mapsto x,c\\mapsto y$. Find a covering matching, with every reassignment justified. **Full key:** the simple alternating path $b-x-a-y-c-z$ starts at unmatched $b$ and ends at free $z$. Remove $ax,cy$ and insert $bx,ay,cz$. Internal vertices lose one chosen edge and gain one; endpoints gain one. The new matching covers all three left vertices. Its size cannot exceed three, so it is maximum. The need to move $a,c$ does not mean their selected element set had become dependent. Repair a frozen-assignment error at DMA-S7 §8 and Exercise 8.

## Unit 5 — Independence, transversals, and greedy choice

**DMA-U5.** Perform DMA-S6–S8 in that order. A finite independence system contains the empty set and is closed under taking subsets. A matroid additionally requires: for independent $I,J$ with $|I|<|J|$, **some** $e\\in J\\setminus I$ makes $I+e$ independent. This equalizes all inclusion-maximal independent subsets of a fixed set: otherwise the smaller could be augmented. The common maximum size is rank $r(A)$. Repeated feasible addition terminates because the ground set is finite and extends any independent set to a basis of a specified superset.

For completeness, rank is submodular. Choose a basis $B_0$ of $A\\cap B$, extend it to a basis $B_A$ of $A$, then to a basis $C$ of $A\\cup B$. Every added member of $C\\setminus B_A$ lies outside $A$ (otherwise $B_A$ was not maximal in $A$), hence in $B\\setminus A$. The independent set $B_0\\cup(C\\setminus B_A)$ lies in $B$, so

$$r(A\\cap B)+r(A\\cup B)-r(A)\\le r(B).$$

This proves the forward rank axiom needed to pair with DMA-S6 §5's reverse construction. A rank-shaped formula on an arbitrary hereditary family need not have this property.

A **transversal matroid** lives on elements $L$, not on compatibility edges. A subset is independent if some matching assigns each of its elements to distinct right-side slots. Empty-set membership and heredity follow by restricting a matching. To prove augmentation, take matchings $P,Q$ covering exactly $I,J$, with $|P|<|Q|$. Remove common edges. In their union each vertex has degree at most two, so components are alternating simple paths, even cycles, or isolated vertices. Some component has more $Q$ than $P$ edges. It is an odd path starting and ending with $Q$ edges; in the bipartite graph its endpoints are an element of $J\\setminus I$ and a slot unused by $P$. Flip it. Every old element of $I$ retains one matching edge and the new endpoint is covered. Thus the **element sets** satisfy augmentation. The certificate edges may change. Unit 4 now gives for every $S\\subseteq L$

$$r(S)=|S|-\\max_{X\\subseteq S}(|X|-|N(X)|).$$

Uniform $U(r,n)$ means all subsets of size at most $r$ are independent; it is presented by $r$ slots adjacent to every element. Partition matroids have disjoint blocks with capacities, and rank $\\sum_i\\min(|S\\cap E_i|,c_i)$; create $c_i$ slots accepting that block. Overlapping quota constraints do not inherit this theorem. A circuit is a minimal dependent set. Closure is $\\operatorname{cl}(S)=\\{e:r(S+e)=r(S)\\}$; the dual's bases are complements of the original bases. These definitions suffice for the selected elementary circuit, closure, and dual calculations.

Here is a greedy proof without an unassigned circuit-exchange lemma. Scan all elements by nonincreasing additive weight, accepting exactly when independence is preserved. At every completed weight prefix $S_j$, the selected elements form a maximal independent subset there; a previously rejected element cannot become feasible in a larger accepted set, by heredity. Thus the prefix contains exactly $r(S_j)$ accepted elements. The final output $G$ is a basis of rank $r(E)$.

Let the distinct weights be $\\alpha_1>\\cdots>\\alpha_k$. For **any** basis $B$,

$$w(B)=\\alpha_k r(E)+\\sum_{j=1}^{k-1}(\\alpha_j-\\alpha_{j+1})|B\\cap S_j|.$$

Each coefficient in the sum is positive, and $|B\\cap S_j|\\le r(S_j)=|G\\cap S_j|$. Both bases have the same last term even if $\\alpha_k<0$, so $w(B)\\le w(G)$. This proves maximum-weight **basis** optimality for arbitrary real weights and any fixed tie order. For an optional independent set, delete negative elements and apply the same theorem to the positive-weight restriction; zeros may be skipped by convention. For exact cardinality $k\\le r(E)$, truncation to size at most $k$ is a matroid and its bases are the exact-$k$ feasible sets. A cap does not make an infeasible exact size feasible.

Conversely, if augmentation fails for $I,J$, put $a=|I\\setminus J|$, $b=|J\\setminus I|>a$ and choose $\\varepsilon>0$ with $(1+\\varepsilon)a<b$. Weights $1+\\varepsilon$ on $I$, one on $J\\setminus I$, zero elsewhere make greedy first accept all of $I$ and then reject every $J\\setminus I$ element. The feasible set $J$ is better by $b-(1+\\varepsilon)a>0$. Thus universal additive nonnegative greedy correctness among finite hereditary families forces augmentation. Correctness for one weight table does not do so. The following proof closes the fundamental-circuit certificate used in DMA-S8 Exercises 7–8 without importing an exchange-bijection lemma.

**Fundamental circuit and replacement lemma.** For a basis $B$ and $e\\notin B$, the dependent finite set $B+e$ contains a minimal dependent set $C$, which must contain $e$ because $B$ is independent. If $b\\in C-e$, start with independent $C-b$ and repeatedly augment toward $B$ until reaching size $|B|$. Augmentation permits a next member of $B$ whenever the current independent set is smaller. That member cannot be $b$, since the current set still contains $C-b$ and adding $b$ would recreate $C$. Thus the final basis is exactly $B-b+e$. If $b\\notin C$, the set $B-b+e$ still contains $C$ and is dependent. This proves replacement is feasible exactly for $b\\in C-e$. It also proves uniqueness: any other minimal dependent subset $D\\subseteq B+e$ gives exactly the same set of feasible deletions, so $D-e=C-e$ and $D=C$. Denote it $C(e,B)$.

**Complete local weight certificate.** A basis $B$ is maximum weight exactly when $w(b)\\ge w(e)$ for every $e\\notin B$ and every $b\\in C(e,B)-e$. Necessity follows from the feasible improving replacement if an inequality fails. For sufficiency, fix a weight threshold $t$ and let $E_t=\\{e:w(e)\\ge t\\}$. For every $e\\in E_t\\setminus B$, all members of $C(e,B)-e$ have weight at least $w(e)\\ge t$, so $C(e,B)\\subseteq (B\\cap E_t)+e$. Thus no such $e$ augments $B\\cap E_t$, making it a maximal independent subset of $E_t$, of size $r(E_t)$. The prefix-weight identity proved above then gives $w(B)\\ge w(B')$ for every basis $B'$. Every replacement condition and every threshold needed in source Exercises 7–8 is now justified. Optional independent sets still require their distinct positive-weight stopping contract.

**DMA-U5-P1.** In $U(2,3)$, weights are $6,-1,-4$. Give the maximum basis and optional selection. **Full key:** the three basis weights are $6-1=5$, $6-4=2$, and $-1-4=-5$. The first pair is the maximum basis. The singleton of weight six is the maximum optional selection; every negative addition reduces its value. A positive-only scan solves the latter problem and returns no basis. Repair at DMA-S8 §§1–2 and Exercise 2.

**DMA-U5-P2.** Give both an augmentation failure and a greedy failure for stable vertices of a three-vertex path and for edge matchings of a three-edge path.

\`\`\`json
{"record_id":"DMA-U5-P2","stable":{"vertices":["p","q","r"],"edges":[["p","q"],["q","r"]],"weights":{"p":2,"q":3,"r":2},"small":["q"],"large":["p","r"],"greedy":["q"],"optimum":["p","r"]},"matching":{"vertices":["p","q","r","s"],"edges":[["p","q"],["q","r"],["r","s"]],"weights":[2,3,2],"small":[1],"large":[0,2],"greedy":[1],"optimum":[0,2]}}
\`\`\`

**Full key:** for stable vertices, $\\{q\\}$ cannot add $p$ or $r$, although $\\{p,r\\}$ is larger and stable. Greedy takes weight three and rejects both weight-two endpoints, losing to four. For edge matchings, the middle edge alone cannot add either outside edge, although the outside pair is a matching. The same weights give three versus four. These families are hereditary but not matroids. This does not contradict the transversal result: that ground set consists of matchable **left vertices**, not the matching's edges or all stable vertex sets of the graph. Repair at DMA-S6 §§1–3 and Exercise 3.

## Primary project — One graph, five certificates

**DMA-P, fixed required specimen.** Use exactly the following $K_{3,2}$. Matrix rows are left elements and columns are right slots. Underlying graph vertices are the disjoint union, with only the indicated cross edges. Network rows give capacity and the proposed model flow. Cut counts are numbers of equally likely vertex-bit assignments, including complementary assignments separately. The probability $5/12$ below is for **vertex sampling in alteration**, not the fair-bit cut experiment.

\`\`\`json
{
  "record_id":"DMA-P",
  "left":["a","b","c"],"right":["x","y"],"adjacency":[[1,1],[1,1],[1,1]],
  "weights":{"a":7,"b":4,"c":-2},
  "arcs":[["s","a",1,1],["s","b",1,1],["s","c",1,0],["a","x",4,1],["a","y",4,0],["b","x",4,0],["b","y",4,1],["c","x",4,0],["c","y",4,0],["x","t",1,1],["y","t",1,1]],
  "matching":[["a","x"],["b","y"]],"minimum_cut":["s","a","b","c","x","y"],
  "deficient_set":["a","b","c"],"deficiency":1,"matching_size":2,
  "maximum_degree_vertex":"x","n":5,"m":6,"mantel_bound":6,"stability_deficit":[1,4],"internal_edges":0,"missing_cross_edges":0,
  "cut_distribution":[[0,2],[2,6],[3,16],[4,6],[6,2]],"expected_cut":[3,1],
  "alteration_p":[5,12],"alteration_bound":[25,24],"alpha":3,
  "sample":["a","b","x","y"],"repaired":["a","b"],
  "independent_sets":[[],["a"],["b"],["c"],["a","b"],["a","c"],["b","c"]],
  "bases":[["a","b"],["a","c"],["b","c"]],"circuits":[["a","b","c"]],"rank":2,
  "max_basis":["a","b"],"max_basis_weight":11,"max_optional":["a","b"],"max_optional_weight":11,
  "base_shadow":[["a"],["b"],["c"]]
}
\`\`\`

Write one coherent portfolio with five connected sections: (1) prove the sharp triangle-free bound and classify equality for this graph, recording the stability partition; (2) establish matching maximum, Hall deficiency, feasible flow, residual reachable set, and equal-capacity cut; (3) derive the entire fair-cut distribution and the alteration guarantee, supply a deterministic repair trace, and identify a joint-dependence obstruction; (4) identify the transversal matroid, every independent set, its bases/circuit, rank, shadow, and a weighted objective certificate; (5) refute the inference that edge matchings and graph-stable vertex sets therefore form matroids. Include the universal proof behind each finite certificate. A picture may accompany the matrix, but the text/matrix must stand alone. Save first, comparison, and revised files as specified above.

**Complete DMA-P public model.** All six edges go between $\\{a,b,c\\}$ and $\\{x,y\\}$, so no triangle occurs. There are five vertices and six edges, attaining $\\lfloor25/4\\rfloor=6$. Unit 1 classifies it as the balanced extremizer $K_{3,2}$. Choosing maximum-degree $x$ gives $A=\\{a,b,c\\}$, $B=\\{x,y\\}$ and no internal or missing crossing edge. The real deficit is $25/4-6=1/4$, not zero; the imbalance is $|3-5/2|=1/2=\\sqrt D$. The inequality chain is $6+0\\le3\\cdot2=6\\le25/4$.

The displayed matching covers $a,b$. At most two left elements can use the two slots. The full left set has deficiency $3-2=1$; all its proper nonempty subsets have at least their own size in neighbors, so maximum deficiency is exactly one. Unit 4 gives $\\nu=3-1=2$. In the network $a,b$ each pass one unit and $c$ passes zero; $x,y$ each receive and send one. All capacities are respected, source value is two, and cut $\\{s,a,b,c,x,y\\}$ has only the two unit arcs into $t$. For a residual search, the unused source arc reaches $c$, its unused compatibility arcs reach $x,y$, and reverse positive matching arcs reach $a,b$; no residual arc into $t$ is available. Hence this cut is the complete reachable set. Feasible flow and cut certify optimality without relying on an unsuccessful drawing search.

For the cut distribution let $i$ of the three left vertices and $j$ of the two right vertices have bit one. The cut count is $i(2-j)+(3-i)j$, with multiplicity $\\binom3i\\binom2j$. At $j=0$ counts are $2i$; at $j=2$ they are $6-2i$; at $j=1$ all sixteen assignments have count three. Combining gives the printed table: counts $0,2,3,4,6$ occur $2,6,16,6,2$ times out of 32. Its average is $96/32=3=m/2$. The bipartition itself cuts all six, so the existence lower bound is weaker than the optimum. Around the four-cycle $a-x-b-y-a$, all four edges cross in two of the sixteen assignments to its four vertices, probability $1/8$, whereas a product of four $1/2$ marginals would give $1/16$. Thus edge indicators are not mutually independent; linearity remains valid.

Alteration uses $p=5/(2\\cdot6)=5/12$, and $5p-6p^2=25/24$, so it certifies a stable set of size at least two. The exact stability number is three: either all selected vertices lie on one side, or any chosen pair from opposite sides forms an edge; the larger side has size three. In sample $\\{a,b,x,y\\}$, four edges are initially present. Scan compatibility edges in left-row, right-column order and delete the lexicographically larger endpoint when both remain: edge $ax$ deletes $x$, edge $ay$ deletes $y$, and all later edges are already destroyed. Output is $\\{a,b\\}$. Two deletions are at most four initial bad edges. This one sample need not attain the expectation of $X-Y$; its $X-Y=4-4=0$, and its output still exceeds that conservative pointwise lower bound.

Every subset of $\\{a,b,c\\}$ of size at most two can be matched; the triple cannot. Thus the printed seven independent sets define $U(2,3)$, with the three displayed bases, one circuit $abc$, and $r(S)=\\min(|S|,2)$. The rank is justified by matchability and augmentation, not just by notation. The bases form an antichain with normalized-chain sum $3/\\binom32=1$. Their lower shadow is all three singletons, attaining $2\\cdot3/(3-2+1)=3$. Left compression preserves this full level. Basis weights are $11,5,2$ in displayed order, so $ab$ is the maximum basis and the positive-only optional optimum, both eleven. At thresholds seven and four, prefix ranks are one and two; the chosen pair saturates both.

Finally, graph-stable sets are a different family: $I=\\{x\\}$ is stable and $J=\\{a,b\\}$ is larger and stable, but neither $a$ nor $b$ augments $I$. Edge matchings also fail augmentation: take $I=\\{bx\\}$ and $J=\\{ax,by\\}$. Each candidate shares an endpoint with $bx$. The successful exchange law for matchable left-element sets therefore makes no such claim for these other ground sets.

## Changed project — Broken hypotheses and surviving certificates

**DMA-C, fixed required changed case.** Replace the primary adjacency and weights by the following data. Use the same arc conventions and deletion order. Rebuild the five sections of the portfolio, explicitly identifying which primary conclusions survive and which change. Also answer each hypothesis-failure challenge printed after the table; all are required.

\`\`\`json
{
  "record_id":"DMA-C",
  "left":["a","b","c"],"right":["x","y","z"],"adjacency":[[1,0,0],[1,0,0],[0,1,1]],
  "weights":{"a":8,"b":7,"c":-3},
  "arcs":[["s","a",1,1],["s","b",1,0],["s","c",1,1],["a","x",4,1],["b","x",4,0],["c","y",4,1],["c","z",4,0],["x","t",1,1],["y","t",1,1],["z","t",1,0]],
  "matching":[["a","x"],["c","y"]],"minimum_cut":["s","a","b","x"],
  "deficient_set":["a","b"],"deficiency":1,"matching_size":2,
  "maximum_degree_vertex":"x","n":6,"m":4,"mantel_bound":9,"stability_deficit":[5,1],"internal_edges":2,"missing_cross_edges":6,
  "cut_distribution":[[0,4],[1,16],[2,24],[3,16],[4,4]],"expected_cut":[2,1],
  "alteration_p":[3,4],"alteration_bound":[9,4],"alpha":4,
  "sample":["a","b","c","x","y","z"],"repaired":["a","b","c"],
  "independent_sets":[[],["a"],["b"],["c"],["a","c"],["b","c"]],
  "bases":[["a","c"],["b","c"]],"circuits":[["a","b"]],"rank":2,
  "max_basis":["a","c"],"max_basis_weight":5,"max_optional":["a"],"max_optional_weight":8,
  "base_shadow":[["a"],["b"],["c"]]
}
\`\`\`

**Complete DMA-C graph model.** It is a disjoint union of the two stars on $\\{a,b,x\\}$ and $\\{c,y,z\\}$. It remains triangle-free with six vertices and four edges, far below the extremal nine. Choose maximum-degree $x$ (ties are harmless). Then $A=\\{a,b\\}$, $B=\\{c,x,y,z\\}$, with two internal edges $cy,cz$, two crossing edges, and $2\\cdot4-2=6$ missing crossing edges. The stability chain reads $4+2=6\\le2\\cdot4=8\\le9$; $D=5$, so both deletion and completion bounds are weak but valid. The original left/right partition instead has zero internal edges; the theorem's proof partition must not be silently replaced when reporting its numbers.

The whole left set has three neighbors for three vertices, but the subset $ab$ has only $x$, so complete coverage fails. At most one of $a,b$ and at most $c$ can be matched; $ax,cy$ achieves two. Every subset has deficiency at most one, with $ab$ attaining one, hence rank and matching number are two. The printed flow respects all capacities and conserves at each intermediate vertex. Its source value is two. Cut $\\{s,a,b,x\\}$ crosses $s\\to c$ and $x\\to t$, each capacity one. Residually $s$ reaches unmatched $b$, then $x$, then $a$ by the reverse of $ax$, and reaches no other vertex. This proves the stated reachable min-cut and exposes the hidden Hall obstruction.

Each star's fair-cut count is distributed $0,1,2$ with multiplicities $2,4,2$ among its eight assignments: fix the center, then count how many of its two independent leaves disagree. Disjoint stars use disjoint coordinates, so convolving gives $4,16,24,16,4$ for total counts $0,1,2,3,4$ among 64 assignments. The mean is two; a cut of all four edges exists. Alteration chooses $p=6/8=3/4$ and gives $6p-4p^2=9/4$, rounding up to three. A maximum stable set is $\\{a,b,y,z\\}$ of size four; each three-vertex star contributes at most two, proving optimality. Starting from all six, the ordered edges $ax,bx,cy,cz$ delete $x$ at $ax$, skip $bx$, delete $y$, then delete $z$, leaving $abc$. Three deletions are at most four original bad edges, and size three exceeds $X-Y=2$.

The element matroid now has partition blocks $\\{a,b\\}$ of capacity one and $\\{c\\}$ of capacity one. Its only circuit is $ab$, bases are $ac,bc$, and $r(S)=\\min(|S\\cap\\{a,b\\}|,1)+\\min(|S\\cap\\{c\\}|,1)$. It is not $U(2,3)$, since the pair $ab$ is dependent. Its two bases have normalized-chain sum $2/3$ and shadow $a,b,c$ of size three; the shadow lower bound is only two. Basis weights are five and four, so maximum basis is $ac$ of weight five; the optional optimum is $a$ of weight eight. At thresholds eight, seven, and minus three the prefix ranks are one, one, two. A basis must eventually accept the negative coloop $c$; optional selection need not. In this **particular changed graph**, edge matchings do form a partition matroid: at most one edge can be chosen in each disjoint two-edge star. This special fact does not restore a universal theorem for all graphs. Stable vertex sets still fail augmentation, using $\\{x\\}$ and $\\{a,b\\}$.

**DMA-C hypothesis-failure challenges and complete models.** The following are actual finite counterexample inputs, independent of whether a numerically plausible bound happens to hold for the changed graph.

\`\`\`json
{"record_id":"DMA-C-FAILURES","triangle":{"vertices":["u","v","w"],"edges":[["u","v"],["v","w"],["w","u"]]},"parallel":{"vertices":["u","v"],"edges":[["u","v"],["u","v"],["u","v"],["u","v"],["u","v"]]},"fractional_capacity":[1,2],"irrational_capacity":"sqrt(2)-1","nonlinear_weights":{"a":4,"b":3,"c":2},"penalty_pair":["a","b"],"penalty":10}
\`\`\`

1. Add $ab$ to the changed graph and diagnose the Unit 1 and bipartite-flow claims. **Model:** $a,b,x$ now form a triangle and $ab$ lies within the declared left side. The triangle-free proof and the specified bipartite matching construction no longer apply to the enlarged graph. Its edge count five still lies below nine, which does not rescue the missing hypotheses. The standalone triangle in the table is decisive against an unconditional Mantel inequality: three edges exceed $\\lfloor3^2/4\\rfloor=2$.
2. Drop simplicity but keep triangle-freeness. **Model:** the printed two-vertex multigraph has five parallel edges and no triangle on three distinct vertices, but five exceeds $\\lfloor2^2/4\\rfloor=1$. Counting neighbors as degrees and using a simple-graph theorem is invalid.
3. Drop independent random coordinates while retaining pairwise-independent event marginals. **Model:** DMA-U3-P1 has the same $1/2$ marginals and $1/4$ pair joints as independent fair bits, but no all-zero outcome. It invalidates the empty dependency graph, not linearity. Its triple joint is $1/4$ instead of $1/8$.
4. Drop integral capacities in the termination proof. **Model:** a single $s\\to t$ arc of capacity $1/2$ has a first bottleneck $1/2$, not a positive integer; capacity $\\sqrt2-1$ gives an irrational bottleneck strictly between zero and one, since $1<\\sqrt2<2$. Both simple examples terminate in one step, but refute the proposed “at least one per step” proof. Finite-real max-flow/min-cut still follows from compactness and residual optimality; arbitrary path-choice termination needs a different argument.
5. Keep a matroid but drop the additive objective. On the **primary** $U(2,3)$ replace its weights by the printed $4,3,2$ and subtract ten when both $a,b$ are selected. **Model:** additive greedy chooses $ab$ but its true score is $7-10=-3$. The other basis scores are $ac=6$ and $bc=5$, so $ac$ is optimal. The feasible family still satisfies augmentation; it is additivity that failed. Do not apply this challenge's $U(2,3)$ feasibility to the changed graph's different matroid.

## Public reconstruction — Rebuild the argument

**DMA-R, required later public task.** After finishing and revising DMA-C, choose and record a later date to reconstruct the argument from the following new data. First state from memory the definitions of deficiency, a dependency graph, a matroid, and the basis/optional objective distinction. Then rebuild the same five connected sections used in DMA-P, including a general proof at each bridge and an exact repair trace. Attempt before reopening your saved comparisons if that suits your study, but record whatever help and public exposure actually occurs. The model below is already public; this is supported reconstruction, not unseen work or a verified delayed assessment.

\`\`\`json
{
  "record_id":"DMA-R",
  "left":["a","b","c","d"],"right":["x","y"],"adjacency":[[1,1],[1,1],[1,1],[1,1]],
  "weights":{"a":5,"b":-1,"c":-2,"d":-4},
  "arcs":[["s","a",1,1],["s","b",1,1],["s","c",1,0],["s","d",1,0],["a","x",5,1],["a","y",5,0],["b","x",5,0],["b","y",5,1],["c","x",5,0],["c","y",5,0],["d","x",5,0],["d","y",5,0],["x","t",1,1],["y","t",1,1]],
  "matching":[["a","x"],["b","y"]],"minimum_cut":["s","a","b","c","d","x","y"],
  "deficient_set":["a","b","c","d"],"deficiency":2,"matching_size":2,
  "maximum_degree_vertex":"x","n":6,"m":8,"mantel_bound":9,"stability_deficit":[1,1],"internal_edges":0,"missing_cross_edges":0,
  "cut_distribution":[[0,2],[2,8],[4,44],[6,8],[8,2]],"expected_cut":[4,1],
  "alteration_p":[3,8],"alteration_bound":[9,8],"alpha":4,
  "sample":["a","b","c","x"],"repaired":["a","b","c"],
  "independent_sets":[[],["a"],["b"],["c"],["d"],["a","b"],["a","c"],["a","d"],["b","c"],["b","d"],["c","d"]],
  "bases":[["a","b"],["a","c"],["a","d"],["b","c"],["b","d"],["c","d"]],
  "circuits":[["a","b","c"],["a","b","d"],["a","c","d"],["b","c","d"]],"rank":2,
  "max_basis":["a","b"],"max_basis_weight":4,"max_optional":["a"],"max_optional_weight":5,
  "base_shadow":[["a"],["b"],["c"],["d"]]
}
\`\`\`

**Complete DMA-R public model.** The graph is $K_{4,2}$, so it is triangle-free and has six vertices and eight edges. It is not Mantel-extremal, since nine is possible in $K_{3,3}$. Choosing degree-four $x$ gives $A=\\{a,b,c,d\\}$ and $B=\\{x,y\\}$. Both internal and missing crossing counts are zero; $D=9-8=1$ and imbalance $|4-3|=1=\\sqrt D$. The chain is $8+0\\le4\\cdot2=8\\le9$. Being a complete bipartite graph does not by itself mean globally extremal; balance matters.

Only two slots exist. The full four-element left set has deficiency two; every subset of size $k>0$ has exactly two neighbors and deficiency $k-2\\le2$, while the empty subset has deficiency zero. Thus maximum deficiency is two and $\\nu=4-2=2$. The printed matching attains it. The flow sends one through $a,x$ and one through $b,y$, satisfying all conservation and capacity constraints. Its value is two; the all-but-$t$ cut has capacity two. The unused arcs $s\\to c,s\\to d$ reach both remaining left vertices; their positive compatibility arcs reach $x,y$, whose backward matching arcs reach $a,b$. Both sink arcs are saturated, so no residual path reaches $t$. This proves the entire stated reachable cut, not merely its numerical capacity.

For fair cuts let $i$ of four left vertices and $j$ of two right vertices have bit one. The crossing count is $i(2-j)+(4-i)j$. At $j=0$ it is $2i$; at $j=2$ it is $8-2i$; at $j=1$ it is always four, contributing 32 assignments. The remaining binomial counts give $2,8,44,8,2$ assignments at $0,2,4,6,8$. Their total is 64 and weighted sum 256, so the mean is four. All eight edges can cross. A four-cycle again has all four indicators one with probability $1/8$, not $1/16$, so summing expectations needs no false mutual-independence claim. Vertex-coordinate overlap, not pairwise event tests alone, must justify a proposed dependency graph; the parity counterexample still refutes the latter shortcut.

Alteration uses $p=6/(2\\cdot8)=3/8$. Its exact bound is $6(3/8)-8(3/8)^2=9/8$, rounded up to two. The true stability number is four, witnessed by all left vertices and bounded above by the larger side of a complete bipartite graph. In sample $abcx$, the initially contained edges are $ax,bx,cx$. The ordered repair deletes $x$ at $ax$ and then skips the destroyed remaining edges, leaving $abc$. There is one deletion versus three initial bad edges, and output size three is at least $X-Y=4-3=1$. This trace is a checked witness, not a probabilistic calibration.

The element matroid is $U(2,4)$: all pairs and smaller sets are matchable, triples are not. Its eleven independent sets, six bases, and four triple circuits are printed. Every subset has rank $\\min(|S|,2)$. The six bases have normalized-chain sum $6/\\binom42=1$; their lower shadow consists of all four singletons and attains $2\\cdot6/(4-2+1)=4$. The full pair level is unchanged by compression. In displayed basis order the weights are $4,3,1,-3,-5,-6$. Thus $ab$ is the maximum-weight basis, while singleton $a$ is the maximum optional independent set with weight five. At the positive threshold five the prefix rank is one; the basis adds $b$ to reach rank two at threshold minus one. Its negative weight is compulsory only for the basis objective.

Stable vertices still fail matroid augmentation with $I=\\{x\\}$, $J=\\{a,b\\}$, and edge matchings with $I=\\{bx\\}$, $J=\\{ax,by\\}$. The proof of transversal augmentation keeps the ground set of left elements fixed while changing matching certificates, so these failures do not conflict with it. The full general arguments to reconstruct are: maximum-degree stability with its simple/triangle-free hypotheses; cut conservation, integral residual termination and the min-cut deficiency derivation; linearity plus charged alteration with independent vertex sampling; alternating-path transversal augmentation; and the prefix-rank weighted proof. Finite enumeration confirms the printed cases and does not replace any of these universal proofs.

**Reconstruction repair map.** If a graph bound fails, redo DMA-U1-P1 and DMA-S1 Exercises 5–6,10, then explain the odd-primary deficit $1/4$. If the matching/flow bridge fails, redo DMA-U4-P1–P2 and DMA-S4 E003–E004, then derive the cut formula for an arbitrary $X$. If dependence or rounding fails, redo DMA-U3-P1 and DMA-S3 Exercises 3,6–8,10. If the ground set or objective changes silently, redo DMA-U5-P1–P2 and DMA-S7 Exercise 8, then list the return matroid's actual eleven independent sets. Preserve the first reconstruction, comparison, and repaired reconstruction as separate dated files.

## Descriptive review and next study

Use these criteria on each first/comparison/revised triplet and on each complete portfolio. They describe the writing; they are not point scores, a pass threshold, or an individual grade.

| Criterion | A usable mathematical account | Repair when absent |
| --- | --- | --- |
| Model and hypotheses | Names finite ground sets, graph simplicity, side labels, capacities, random coordinates, and additive objective | Find the first theorem whose hypotheses were not checked and give the printed changed counterexample |
| General argument | Explains why the theorem applies beyond the specimen, including termination, subset quantifiers, and dependency conditions | Reconstruct the named source/native proof before relying on the finite table |
| Attainment and obstruction | Supplies both a feasible matching/flow/selection and a bound/cut/deficient set, with all entries checked | Produce the missing side of the certificate rather than calling a search maximum |
| Probability and limits | Derives an exact distribution/expectation, charged repair, admissible parameter, and the distinction from an optimum | Recompute the table from outcomes; state which independence is actually used |
| Change and reconstruction | Revisits every affected claim, retains earlier writing, and records help/public comparison | Name a failed hypothesis and preserve a dated revision with its corrected scope |

Optional next work can extend the fixed cases to other graph sizes or revisit the source's open alteration project. Those extensions need their own inputs, full comparison, and claim boundaries. The selected course establishes the stated extremal/probabilistic, matching/flow, and independence bridges; its public models support study and review without claiming unseen performance, calibrated completion, or a whole specialist combinatorics education.
`;export{e as default};