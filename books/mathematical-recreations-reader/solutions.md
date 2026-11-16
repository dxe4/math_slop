
# Exercise Solutions {#section-1-exercise-and-project-solutions}

This retained answer digest follows the earlier nineteen-reading order and
covers its original five exercises per reading. It is preserved as a reference
for those original question numbers. The current fifteen primary chapters each
have ten exercises, two hints per exercise and complete inline solutions; their
inline statements and solutions are authoritative for the expanded manuscript.
The four earlier readings also remain available at their original addresses.
Use the glossary concordance to translate earlier chapter numbers into the
current sequence. A short digest is not a substitute for the hypotheses and
full reasoning of the corresponding chapter. Projects are open investigations; this digest does not supply project answer keys.

---

## Chapter 1: Invariants and Parity: What a Move Cannot Change

1. **Seventeen coins show heads. A move flips exactly two coins. Can all coins show tails?**

   No. The number of heads changes by $-2$, $0$, or $2$, so its parity stays odd. Zero heads is even.

2. **A token starts at $(0,0)$. Each move changes exactly one coordinate by $2$. Can it reach $(5,8)$?**

   No. Both coordinates remain even; the target's first coordinate is odd.

3. **Six glasses stand in a row, first three full and last three empty. Touching exactly one glass at a time, make full and empty alternate by moving the contents of only one glass.**

   Pour the contents of the second glass into the fifth. The states become full, empty, full, empty, full, empty. Precise verbs resolve the apparent trick.

4. **Integers are written on a board. A move selects $a,b$, erases them, and writes $a+b$ and $a-b$. Audit the claim: "If the sum of all entries is even initially, it remains even."**

   The claim is false. The old contribution from the selected entries is $a+b$; the new contribution is $(a+b)+(a-b)=2a$. Their difference is $a-b$, which is not always even. A valid modified rule must require every legal move, rather than one incidental move, to select a pair with even sum.

5. **A permutation of $1,\dots,n$ is changed by swapping adjacent entries. Prove that returning to the original order requires an even number of swaps.**

   An adjacent swap changes exactly one inversion pair, toggling inversion parity. The original order has the same parity at the end as at the start, so the number of toggles is even.

---

## Chapter 2: Colorings and Tilings: Local Pieces, Global Constraints

1. **Can a $5 \times 5$ board be tiled by dominoes?**

   No. Its area is $25$, odd, while every domino covers $2$ cells.

2. **Remove one black and one white square from an $8 \times 8$ board. Does checkerboard balance prove the remainder is tileable?**

   Balance alone is only a necessary condition in general. For this specific
   full board every such pair of removals is tileable: delete the opposite-colour
   cells from a spanning alternating cycle and pair consecutive cells on each
   remaining even-length path. The expanded chapter supplies the cycle explicitly.

3. **A $1 \times n$ strip is tiled by squares and dominoes. Let $T_n$ be the number of tilings. Derive a recurrence and compute $T_1$ through $T_6$.**

   $T_n = T_{n-1} + T_{n-2}$ with $T_0 = 1$, $T_1 = 1$. The values are $1, 2, 3, 5, 8, 13$.

4. **Prove a rectangle is domino-tileable exactly when at least one side length is even.**

   If one side is even, pair adjacent cells along that direction. If both sides are odd, the area is odd and cannot be partitioned into pieces of area $2$.

5. **A board has one cell for each pair $(r,c)$ with $1 \le r,c \le 10$. Tiles are $1 \times 4$ horizontal bars only. Determine whether the board can be tiled.**

   No. Each row of length $10$ would need to be partitioned into lengths $4$, but $10$ is not divisible by $4$.

---

## Chapter 3: Impartial Games: Winning and Losing Positions

1. **There are $15$ counters; each move removes $1$, $2$, or $3$. Who wins with perfect play, and what is the first move?**

   The first player removes $3$, leaving $12$, then complements every opponent removal $r$ with $4-r$.

2. **The allowed removals are $1$ or $2$. Classify heap sizes by their remainder modulo $3$.**

   Multiples of $3$ are losing; all others are winning. Remove the remainder to reach a multiple of $3$.

3. **For Nim heaps $(2,6,7)$, compute the nim-sum and give a winning move if one exists.**

   $2 \oplus 6 \oplus 7 = 3$, nonzero. Changing heap $6$ to $5$ gives nim-sum $0$; remove one counter from the second heap.

4. **Prove that two equal Nim heaps form a losing position.**

   $h \oplus h = 0$, so Bouton's theorem applies. Directly, copy the opponent's change in the other equal heap.

5. **Compute Grundy numbers $g(0)$ through $g(10)$ when one may remove $1$, $3$, or $4$ counters.**

   $0, 1, 0, 1, 2, 3, 2, 0, 1, 0, 1$. A period of $7$ is suggested but not proved by this table alone.

---

## Chapter 4: Dissections and Rearrangements: Area Without Illusions

1. **Cut a rectangle along one diagonal. What congruent pieces result, and how can they be rearranged into the original rectangle?**

   Two congruent right triangles. A half-turn about the midpoint of the diagonal exchanges them.

2. **Explain why a parallelogram of base $b$ and height $h$ has area $bh$ by a dissection.**

   Let $s$ be the horizontal displacement of the top side from the bottom side, with $b,h>0$. Choose a positive integer $n$ with $|s|/n\leq b$, and cut along horizontal lines into $n$ parallelogram strips of height $h/n$. Each strip has overhang at most its base, so cut off its end right triangle and translate it to the other end, obtaining a rectangle of base $b$ and height $h/n$; if $s=0$, the strips are already rectangles. Stack these rectangles to obtain a rectangle of base $b$ and height $h$, proving that the original area is $bh$.

3. **Use four right triangles to derive the Pythagorean identity, explicitly justifying the center's shape.**

   The inner quadrilateral has four equal sides $c$ and four right angles, so it is a square of area $c^2$. Equating areas gives $a^2+b^2=c^2$.

4. **Decide whether points $(0,0)$, $(5,2)$, and $(13,5)$ are collinear.**

   The slopes are $2/5$ and $5/13$. Since $2/5 \neq 5/13$, they are not collinear.

5. **Find the area of the polygon with cyclic vertices $(0,0),(4,0),(5,2),(2,4),(0,2)$.**

   By the shoelace formula, the area is $|32-4|/2 = 14$ square units.

---

## Chapter 5: Matchsticks, Coins, and Crossings: Spatial Rules Made Precise

1. **How many squares of all sizes are in a $3 \times 3$ grid of unit cells?**

   There are $9$ unit squares, $4$ squares of side $2$, and $1$ square of side $3$, for $14$ total.

2. **Six coins lie at positions $0,1,2,3,4,5$ on a line. Move one coin to make two stacks of three, if stacking a moved coin directly on any occupied position is allowed and a "move" may carry an existing stack.**

   In one move from six singletons, at most one destination stack can gain one coin, so no stack can reach three. The target is impossible under the one-move limit.

3. **Encode $HTTHH$ as bits. What results from flipping positions $2$, $3$, and $4$ without reversing them?**

   $HTTHH$ is $10011$. Toggling bits $2$ through $4$ gives $11101$, or $HHHTH$.

4. **Prove $K_{2,4}$ can be drawn without crossings by giving a construction.**

   Place the two degree-$4$ vertices at north and south poles and route the four paths along four separated arcs, placing one remaining vertex on each arc.

5. **Use Euler's formula to prove that a simple planar graph with $v \ge 3$ satisfies $e \le 3v-6$.**

   In a connected simple plane graph with $v \ge 3$, every face boundary has length at least $3$, so $3f \le 2e$. Euler's formula gives $v-e+f=2$; substituting yields $e \le 3v-6$. For a disconnected simple planar graph, place its components in disjoint regions and join them by noncrossing edges, preserving simplicity and the vertex count. Apply the connected bound to this augmented graph; the original graph has no more edges.

---

## Chapter 6: Probability Surprises: Condition Before You Count

1. **Two independent fair coins are tossed. Given that at least one is heads, what is the probability both are heads?**

   Conditioning removes $TT$, leaving three equal cases; the probability is $1/3$.

2. **A fair die is rolled. Given the result is even, what is the probability it exceeds $3$?**

   Conditional outcomes are $2, 4, 6$; two exceed $3$, so the probability is $2/3$.

3. **In the stated three-door protocol, calculate the chance that staying wins.**

   Staying wins exactly when the original choice was correct: probability $1/3$.

4. **Derive the probability that at least two of four independent fair coin tosses are heads.**

   $\binom{4}{2}+\binom{4}{3}+\binom{4}{4}=6+4+1=11$, so the probability is $11/16$.

5. **A disease has prevalence $1\%$. A test has $90\%$ sensitivity and a $5\%$ false-positive rate. Find the probability a randomly tested person has the disease given a positive result.**

   $P(\text{disease} \mid \text{positive}) = 90/(90+495) = 90/585 = 2/13 \approx 0.154$.

---

## Chapter 7: Encoding Tricks: Questions, Checks, and Hidden Structure

1. **How many yes/no questions are necessary and sufficient to find a chosen number among $1$ through $32$?**

   Five. Four questions have only $2^4=16$ answer patterns, too few; five bits label $32$ choices exactly.

2. **Append an even-parity bit to $1100101$. Would a flip of bits $2$ and $5$ be detected?**

   The data have four $1$s, so append $0$. Flipping two bits preserves even parity, so the parity check would not detect that error.

3. **One of $27$ coins is known to be heavier. Give a three-weighing strategy.**

   Split $27$ into three groups of $9$ and weigh two groups. Repeat with groups of $3$, then groups of $1$. Each outcome chooses one third.

4. **Find the Hamming distances among $0000$, $1110$, and $1001$. What is the minimum distance of this three-word code?**

   Distances are $3$, $2$, and $3$. The minimum is $2$, so this code detects one error but does not guarantee correction.

5. **Prove that no binary code of length $3$ with five codewords can correct every single-bit error.**

   Correcting one error requires disjoint Hamming balls of radius $1$. Each ball contains $4$ strings; five disjoint balls would require $20$ strings, but only $2^3=8$ exist.

---

## Chapter 8: Routes and Networks: Draw It in One Stroke

1. **A connected graph has vertex degrees $2,2,2,2$. What kind of Euler route is guaranteed?**

   An Euler circuit: the graph is connected and every degree is even.

2. **Can a graph have exactly three odd-degree vertices?**

   No. The sum of degrees is $2|E|$, which is even, so odd-degree vertices must occur in an even number.

3. **The edge list is $AB,BC,CD,DA,AC$. Determine whether an Euler trail exists and, if so, give one.**

   Degrees are $3,2,3,2$. Exactly $A$ and $C$ are odd, so an open trail exists: $A-B-C-D-A-C$.

4. **Prove that every finite tree with at least two vertices has at least two leaves.**

   Take a longest simple path. Its endpoints cannot have another neighbor off the path (or the path would extend) nor a second neighbor on the path (or a cycle would result). Thus both endpoints have degree one.

5. **Explain why removing any edge of a tree disconnects it and adding any new edge between existing vertices creates exactly one cycle.**

   The unique path between an edge's endpoints uses that edge; removing it leaves no alternate path. A new edge joins vertices already connected by one unique path; that path plus the new edge is exactly one cycle.

---

## Chapter 9: Constructive Challenges: Witnesses, Algorithms, and Certificates

1. **Prove that among five integers, two have the same remainder when divided by $4$.**

   The four possible remainder boxes are $0,1,2,3$. Five integers placed in them force two into one box.

2. **Construct the $4$-bit reflected Gray code from the $3$-bit list in the chapter.**

   Prefix $0$ to the list forward and $1$ to it backward:
   $0000,0001,0011,0010,0110,0111,0101,0100,1100,1101,1111,1110,1010,1011,1001,1000$.

3. **Give a counterexample to "largest coin first is always optimal" using denominations $1,3,4$.**

   For amount $6$, greedy selects $4,1,1$ (three coins), while $3,3$ uses two.

4. **Prove there are equally many even-cardinality and odd-cardinality subsets of a nonempty finite set.**

   Choose one distinguished element $x$. Toggle membership of $x$: every even subset is paired with exactly one odd subset, and toggling again is the inverse.

5. **Prove that every tournament has a directed Hamiltonian path, and make the proof an insertion algorithm.**

   Induct on the number of vertices. Maintain a directed path $v_1 \to \dots \to v_k$. To insert a new vertex $x$, scan from the left for the first $v_i$ such that $x \to v_i$. If none exists, append $x$; otherwise insert $x$ immediately before $v_i$.

---

## Chapter 10: Magic Squares

1. **Verify that the Lo Shu square has magic constant $15$.**

   Rows: $4+9+2=15$, $3+5+7=15$, $8+1+6=15$. Columns: $4+3+8=15$, $9+5+1=15$, $2+7+6=15$. Diagonals: $4+5+6=15$, $2+5+8=15$.

2. **Prove that no normal $2 \times 2$ magic square exists.**

   The magic constant would be $5$, but distinct entries from $\{1,2,3,4\}$ cannot satisfy all required equalities simultaneously.

3. **Apply the Siamese method to construct a $5 \times 5$ magic square and verify one row, one column, and one diagonal sum.**

   Row $1$: $17+24+1+8+15=65$. Column $3$: $1+7+13+19+25=65$. Main diagonal: $17+5+13+21+9=65$.

4. **In any normal $3 \times 3$ magic square, prove that the centre entry must be $5$.**

   Let the centre be $c$. The middle row, middle column, and two diagonals each sum to $15$. Adding these four sums counts $c$ four times and every other cell once, giving $4 \cdot 15 = 60 = 3 \cdot 15 + 3c$, so $c=5$.

5. **Let $M$ be a normal magic square of order $n$. Prove that replacing each entry $x$ by $n^2+1-x$ produces another magic square.**

   Each original row sums to $S = n(n^2+1)/2$, so the new row sums to $n(n^2+1)-S = S$. The magic constant is unchanged.

---

## Chapter 11: Latin Squares

1. **Write all reduced Latin squares of order $3$ and verify there is only one.**

   The centre entry cannot be $1$ (row $2$ would then be $2\,1\,3$, repeating $3$ in column $3$) or $2$ (column $2$ already has $2$), so it must be $3$. The remaining entries are forced, yielding exactly one reduced square.

2. **Construct two orthogonal Latin squares of order $4$ and verify orthogonality by superposition.**

   Using the direct construction in the chapter, superposition yields $16$ distinct ordered pairs.

3. **Prove that there are exactly $4$ reduced Latin squares of order $4$.**

   Reduction fixes the first row and column as $1234$. The second row begins
   with $2$; enumerating the permutations of $\{1,3,4\}$ that avoid the symbol
   already at the top of each column leaves exactly $2143$, $2341$, and $2413$.
   Enumerating the third row under the same row and column constraints gives the
   complete table

   | second row | admissible third row | forced fourth row |
   |---|---|---|
   | $2143$ | $3412$ | $4321$ |
   | $2143$ | $3421$ | $4312$ |
   | $2341$ | $3412$ | $4123$ |
   | $2413$ | $3142$ | $4321$ |

   The fourth row in each case is forced column by column by the missing symbol.
   Hence the four arrays in the table are Latin squares, and every possible
   reduced square occurs in the exhaustive second-row and third-row case split.

4. **Explain why the centre cell of a completed Sudoku grid is not constrained to any particular digit by symmetry alone.**

   Any permutation of the digits $1$ through $9$ transforms one completed Sudoku grid into another, so no single digit is forced.

5. **Let $n$ be a prime. Construct $n-1$ mutually orthogonal Latin squares of order $n$ using $\mathbb{F}_n$.**

   For each $k \in \{1,\dots,n-1\}$, define $L_k(i,j) = ki+j \pmod{n}$. The squares are Latin because $k \neq 0$ is invertible modulo $n$, and pairwise orthogonal because $(k-l)i$ determines $i$ uniquely.

---

## Chapter 12: Graph Puzzles

1. **A connected graph has vertex degrees $2,2,2,2$. What kind of Euler route is guaranteed?**

   An Euler circuit.

2. **Can a graph have exactly three odd-degree vertices?**

   No. The sum of degrees is even, so odd-degree vertices must occur in an even number.

3. **The edge list is $AB,BC,CD,DA,AC$. Determine whether an Euler trail exists and, if so, give one.**

   Exactly $A$ and $C$ are odd; an open trail is $A-B-C-D-A-C$.

4. **Prove that $K_5$ is not planar.**

   A simple planar graph with $v \ge 3$ satisfies $e \le 3v-6$. For $K_5$, $v=5$ and $e=10$, while $3v-6=9$.

5. **Prove that every finite tree with at least two vertices has at least two leaves.**

   Same argument as Chapter 8, Exercise 4: a longest simple path has degree-one endpoints.

---

## Chapter 13: Tiling Problems

1. **Can a $5 \times 5$ board be tiled by dominoes?**

   No; area $25$ is odd.

2. **Remove one black and one white square from an $8 \times 8$ board. Does checkerboard balance prove the remainder is tileable?**

   Balance alone does not prove it; equal colour counts are necessary but not sufficient in general. For the full $8 \times 8$ board, however, every such removal is tileable (Gomory's spanning-cycle argument; see Chapter 2).

3. **A $1 \times n$ strip is tiled by squares and dominoes. Let $T_n$ be the number of tilings. Derive the recurrence and compute $T_1$ through $T_6$.**

   $T_n = T_{n-1} + T_{n-2}$ with $T_0=1$, $T_1=1$. Values: $1,2,3,5,8,13$.

4. **Prove that a rectangle is domino-tileable exactly when at least one side length is even.**

   If one side is even, pair adjacent cells along that side. If both sides are odd, the area is odd.

5. **A board has one cell for each pair $(r,c)$ with $1 \le r,c \le 10$. Tiles are $1 \times 4$ horizontal bars only. Determine whether the board can be tiled.**

   No. Each row of length $10$ is not divisible by $4$.

---

## Chapter 14: Knot Theory for Fun

1. **Draw the trefoil knot and label its three crossings with $+1$ or $-1$. Compute the sum.**

   For the standard right-handed trefoil, all three crossings have the same sign, giving sum $+3$.

2. **Explain why no knot has crossing number $1$ or $2$.**

   A single crossing is removable by a type I Reidemeister move. Two crossings can be removed by a type II move unless they form a twist, which simplifies by a type I move.

3. **The Hopf link has two components and two crossings. Compute its linking number.**

   With signs $+1,+1$, the linking number is $(1+1)/2=1$. Reversing one component gives $-1$.

4. **Write the braid word $\sigma_1 \sigma_2^{-1} \sigma_1$ for the three-strand braid group. Draw its closure and identify the resulting knot or link.**

   The endpoint permutation is $(13)$, so the closure has two components. The middle crossing is a self-crossing removable by a type I move; the result is a Hopf link.

5. **Prove that the linking number is invariant under Reidemeister moves of type II and type III.**

   For type II, two intercomponent crossings of opposite sign cancel (and self-crossings are omitted). Type III preserves each corresponding crossing's sign and component pair.

---

## Chapter 15: Origami Mathematics

1. **Fold a square sheet so that one corner meets the midpoint of the opposite side. Identify triangle $ETQ$ and verify its $3:4:5$ ratio.**

   In a side-$10$ square, the identified right triangle has exact side lengths $15/4$, $5$, and $25/4$ cm, hence ratio $3:4:5$.

2. **A flat-foldable interior vertex has six creases. Determine all possible pairs $(M,V)$.**

   Solving $M+V=6$ and $M-V=\pm2$ gives $(M,V)=(4,2)$ or $(2,4)$.

3. **Verify the Kawasaki-Justin theorem for a vertex with angles $45^{\circ},90^{\circ},45^{\circ},90^{\circ},45^{\circ},45^{\circ}$.**

   The alternating sums are $135^{\circ}$ and $225^{\circ}$, not equal, so the vertex does not fold flat.

4. **Prove that a $60^\circ$ angle is not classically trisectable and describe the extra constraint in origami operation $6$.**

   For $x=2\cos20^\circ$, the triple-angle identity gives the irreducible polynomial $x^3-3x-1$. Its degree $3$ rules out a straightedge-and-compass construction. Operation $6$ maps two points to two lines simultaneously, producing the common-tangent condition that can solve a cubic.

5. **Prove the Maekawa-Justin theorem: at a flat-foldable vertex with $M$ mountain folds and $V$ valley folds, $M-V=\pm 2$.**

   A small non-self-intersecting cross-section of the flat-folded interior vertex is a simple closed polygonal curve, so its exact signed turning is $\pm360^\circ$. Mountains and valleys contribute opposite signed half-turns, giving $180^\circ(M-V)=\pm360^\circ$ and hence $M-V=\pm2$.

---

## Chapter 16: Card Shuffling

1. **Track the position of the top card through three consecutive out-shuffles of a $52$-card deck. Where does it end up?**

   Position $0$ stays at $0$ after every out-shuffle, because $2 \cdot 0 = 0$.

2. **Prove that after an out-shuffle of a $2n$-card deck, the card originally at position $k$ moves to $2k \bmod (2n-1)$ for $k<2n-1$.**

   Cards from the top half go to even positions $0,2,\dots,2n-2$; cards from the bottom half go to odd positions $1,3,\dots,2n-1$. The formula unifies both cases.

3. **Compute the order of the out-shuffle for a deck of $16$ cards.**

   The order of $2$ modulo $15$ is $4$, since $2^4 = 16 \equiv 1 \pmod{15}$.

4. **Explain why the in-shuffle of a $52$-card deck has order $52$.**

   Positions transform as $k \mapsto 2k+1 \pmod{53}$. Since $2$ is a primitive root modulo $53$, the multiplicative part has order $52$, and direct verification shows the full affine map also has order $52$.

5. **Let $d(k)$ be the total variation distance from uniform after $k$ riffle shuffles. Explain why $d(k)$ cannot increase with $k$.**

   Each shuffle is a Markov transition that cannot increase distance from stationarity. The drop is sharp: for $52$ cards, $d(k)$ is near $1$ for $k<5$, drops rapidly between $5$ and $8$, and is near $0$ for $k>8$.

---

## Chapter 17: Probability Paradoxes

1. **Two independent fair coins are tossed. Given that at least one is heads, what is the probability both are heads?**

   Conditioning removes $TT$, leaving three equal cases; the probability is $1/3$.

2. **A fair die is rolled. Given the result is even, what is the probability it exceeds $3$?**

   Conditional outcomes are $2,4,6$; two exceed $3$, so the probability is $2/3$.

3. **In the stated three-door Monty Hall protocol, calculate the chance that staying wins.**

   Staying wins exactly when the original choice was correct: probability $1/3$.

4. **Derive the probability that at least two of four independent fair coin tosses are heads.**

   $\binom{4}{2}+\binom{4}{3}+\binom{4}{4}=11$, so the probability is $11/16$.

5. **A disease has prevalence $1\%$. A test has $90\%$ sensitivity and a $5\%$ false-positive rate. Find the probability a randomly tested person has the disease given a positive result.**

   $P(\text{disease} \mid \text{positive}) = 90/585 = 2/13 \approx 0.154$.

---

## Chapter 18: Fractals

1. **After three iterations of the Cantor construction, what is the total length of the remaining intervals?**

   There are $8$ intervals, each of length $1/27$, so the total length is $8/27$.

2. **Prove that the area of the Koch snowflake is finite by summing the geometric series of added triangle areas.**

   If the initial equilateral triangle has area $A_0$, the total area is $A_0 \cdot \frac{8}{5}$. For initial side length one, $A_0=\sqrt3/4$, giving $2\sqrt3/5$ square units.

3. **Compute the Hausdorff dimension of the Sierpinski carpet.**

   The carpet consists of $8$ copies of itself, each scaled by $1/3$. Its Hausdorff dimension is $\log 8 / \log 3 \approx 1.8928$.

4. **For the Mandelbrot iteration $z_{n+1} = z_n^2 + c$ with $c = 0.25$, show that $z_n$ converges to $1/2$. What happens for $c = 0.26$?**

   For $c=0.25$, writing $z_n=1/2-\epsilon_n$ gives $\epsilon_{n+1}=\epsilon_n-\epsilon_n^2\to0$. For $c=0.26$, $z_{n+1}-z_n=(z_n-1/2)^2+0.01>0$; a bounded increasing orbit would converge to a real fixed point, but none exists, so the orbit tends to $+\infty$.

5. **Prove that the regular paperfolding sequence is not eventually periodic.**

   Its term $a_j$ is determined by the odd part of $j$: residues $1$ and $3$ modulo $4$ give opposite signs. Writing a proposed period as $2^q u$ and comparing sufficiently large indices $2^m$ or $3\cdot2^m$ with their translates by that period gives opposite signs, a contradiction.

---

## Chapter 19: A Recreation Laboratory: Search, Conjecture, Prove

1. **How many length-$5$ bit strings should the generator yield? Why?**

   $2^5 = 32$: each of five independent positions has two choices.

2. **Why must BFS use a queue rather than a last-in-first-out stack to guarantee a shortest unweighted path?**

   A queue processes all vertices at distance $d$ before any newly discovered vertex at distance $d+1$. A stack may pursue a long branch before a short goal edge elsewhere.

3. **A puzzle has at most $1000$ states and every generated neighbor is legal. Name two further facts needed before "search returned null" proves the target unreachable.**

   The state representation must distinguish all rule-relevant states, and the neighbor generator must include every legal move.

4. **Explain why random testing cannot prove two programs agree on all integer inputs.**

   Any finite random sample leaves infinitely many untested integers. Testing can find a counterexample, but universal agreement needs proof.

5. **Prove that in a finite graph BFS assigns each discovered vertex its shortest-path distance from the start.**

   Induct on queue layers. When a distance-$d$ vertex is processed, every newly discovered neighbor receives a path of length $d+1$. If it had a shorter path, its predecessor would lie in an earlier layer and would already have discovered it.
