
# Prerequisite Diagnostic and Repair Routes

## How to use this diagnostic

This is a routing instrument, not an entrance examination. It asks whether the small collection of skills used throughout the sixteen chapters is already available, recoverable with a short review, or ready to be learned just in time. A result does not measure mathematical talent. Its only purpose is to identify a productive starting point.

Set aside about seventy-five minutes. Work without software or notes, but use scratch paper. For each item record one of three states:

- **secure:** the result and decisive reason are both correct;
- **recoverable:** the method becomes clear after reading the first sentence of the answer;
- **repair:** the objects, notation, or required proof move remain unclear after reading the answer.

Do not assign yourself credit for a correct guess. Conversely, do not mark an entire topic for repair because of one arithmetic slip if the structure of the reasoning was sound. The pattern across groups matters more than a total score. Answers appear immediately because delay would make the routing tool less useful. Cover an answer while attempting its prompt.

The manuscript uses $N=\{0,1,2,\ldots\}$. A simple graph has no loops or parallel edges unless a section explicitly changes that convention. All diagnostic examples are finite, so no calculus or measure theory is required.

## Group A: sets, functions, relations, and proof language

### A1. Set operations and Cartesian products

Let $A=\{1,2,3\}$ and $B=\{2,4\}$. Find $A\cap B$, $A\cup B$, $A\setminus B$, and $A\times B$. Explain why $A\times B$ and $B\times A$ are generally different.

**Worked answer.** The shared elements form $A\cap B=\{2\}$. Collecting every element without repetition gives $A\cup B=\{1,2,3,4\}$. Removing members of $B$ from $A$ gives $A\setminus B=\{1,3\}$. A Cartesian-product element is an ordered pair, so

$$A\times B=\{(1,2),(1,4),(2,2),(2,4),(3,2),(3,4)\}$$

The first coordinate in $A\times B$ must come from $A$; in $B\times A$ it must come from $B$. For example, $(1,4)\in A\times B$, but $(1,4)\notin B\times A$ because $1\notin B$. This supports Chapter 1 and every later chapter that represents a relation or edge set as a set of pairs.

### A2. Functions and inverses of images

Define $f:\{0,1,2,3\}\to \{0,1\}$ by $f(x)$ equal to the remainder when $x$ is divided by $2$. Is $f$ injective? Is it surjective? Find $f^{-1}(\{1\})$.

**Worked answer.** The values are $f(0)=0$, $f(1)=1$, $f(2)=0$, and $f(3)=1$. The function is not injective because distinct inputs, such as $0$ and $2$, have the same output. It is surjective because both codomain elements occur. The inverse image is

$$f^{-1}(\{1\})=\{x:f(x)=1\}=\{1,3\}$$

Here $f^{-1}(\{1\})$ denotes an inverse image; it does not claim that $f$ has an inverse function. This distinction supports Chapters 1, 3, 9, and 15.

### A3. Relations and transitivity

On the integers, define $xRy$ when $|x-y|\le 1$. Determine whether $R$ is reflexive, symmetric, and transitive.

**Worked answer.** It is reflexive because $|x-x|=0\le 1$. It is symmetric because $|x-y|=|y-x|$. It is not transitive: $0R1$ and $1R2$, but $0$ is not related to $2$ because $|0-2|=2$. One counterexample disproves the universal transitivity condition. This supports Chapters 1 and 9; in particular, quotient classes require all three equivalence-relation properties.

### A4. Quantifiers and negation

Negate the statement “For every vertex $v$, there exists a vertex $w$ adjacent to $v$.”

**Worked answer.** The negation is: “There exists a vertex $v$ such that no vertex $w$ is adjacent to $v$.” Symbolically, negating $\forall v \exists w P(v,w)$ produces $\exists v \forall w \neg P(v,w)$. It is not enough to say “not every vertex has a neighbor” unless the equivalent witness statement is understood. Quantifier order is essential in Chapters 2, 5–8, and 12–14.

### A5. Implication and contrapositive

For an integer $n$, prove: if $n^{2}$ is even, then $n$ is even.

**Worked answer.** Use the contrapositive. If $n$ is odd, then $n=2k+1$ for some integer $k$. Hence

$$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$$

which is odd. Therefore an odd $n$ cannot have even square, so if $n^{2}$ is even, $n$ is even. The argument does not assume the desired conclusion. This proof pattern supports Chapter 2 and obstruction arguments in Chapters 5–7, 12, and 13.

## Group B: finite sums, counting, and recursion

### B1. Indexed sums

Evaluate $\sum_{i=1}^{4} (2i-1)$ and rewrite $\sum_{i=1}^{n} (a_{i}-a_{i-1})$ without a summation sign.

**Worked answer.** The first sum is $1+3+5+7=16$. Expanding the second gives

$$(a_{1}-a_{0})+(a_{2}-a_{1})+\ldots+(a_{n}-a_{n-1})$$

Every internal term cancels, leaving $a_{n}-a_{0}$. This is a telescoping sum. Indexed notation and cancellation support Chapters 3, 4, 7, 10, 11, and 13.

### B2. Product rule and combinations

How many length-five binary strings have exactly two ones? Give both a direct description and a calculation.

**Worked answer.** A string is determined uniquely by the two positions occupied by its ones. Choose a two-element subset of the five positions; the remaining positions contain zeros. Therefore the count is

$$\binom{5}{2}=5!/(2!3!)=10$$

The choice is unordered: selecting positions $2$ and $5$ is the same selection as $5$ and $2$, which is why $5\cdot 4=20$ would double-count. This supports Chapters 3, 7, 11, and 13.

### B3. Inclusion–exclusion

Among the integers from $1$ through $30$, how many are divisible by $2$ or by $3$?

**Worked answer.** There are $\lfloor 30/2\rfloor=15$ multiples of $2$ and $\lfloor 30/3\rfloor=10$ multiples of $3$. Their overlap consists of multiples of $\operatorname{lcm}(2,3)=6$, of which there are $\lfloor 30/6\rfloor=5$. Adding the first two counts counts every overlap element twice, so subtract it once:

$$15+10-5=20$$

This is the two-set inclusion–exclusion principle used in Chapters 3 and 11.

### B4. Induction and recurrence values

Let $a_{0}=2$ and $a_{n+1}=3a_{n}-2$. Compute $a_{1},a_{2},a_{3}$, conjecture a formula, and prove it for every $n\in N$.

**Worked answer.** The values are $a_{1}=4$, $a_{2}=10$, and $a_{3}=28$. These suggest $a_{n}=3^{n}+1$. For the base case, $3^{0}+1=2=a_{0}$. Assume $a_{n}=3^{n}+1$. Then

$$a_{n+1}=3a_{n}-2=3(3^{n}+1)-2=3^{n+1}+1$$

The base case and inductive step prove the formula for all $n\in N$. Checking three cases suggested the claim but did not prove it. This distinction supports Chapters 2, 4, 8, 11, and 15.

### B5. Coefficients of a polynomial product

Find the coefficient of $x^{4}$ in $(1+x+x^{2})(1+x^{3})$ and explain the corresponding choice count.

**Worked answer.** To obtain total exponent $4$, choose exponents $1$ and $3$; no other available pair from $\{0,1,2\}$ and $\{0,3\}$ sums to $4$. Thus the coefficient is $1$. Indeed,

$$(1+x+x^{2})(1+x^{3})=1+x+x^{2}+x^{3}+x^{4}+x^{5}$$

Multiplication combines choices and addition records alternative ways to reach the same total. This is the core interpretation behind generating functions in Chapters 4 and 11.

## Group C: graphs, probability, and strategic reasoning

### C1. Degrees and edges

A simple undirected graph has vertex degrees $3,3,2,2,2,2$. How many edges does it have, and why?

**Worked answer.** The degree sum is $3+3+2+2+2+2=14$. Each edge contributes one to the degree of each of its two endpoints, so the degree sum counts every edge twice. Therefore $2|E|=14$ and $|E|=7$. This incidence argument supports Chapters 5, 6, 7, 12, and 13.

### C2. Trees and hypotheses

A finite tree has $12$ vertices. How many edges does it have? Why would the same answer be unsafe for an arbitrary graph with $12$ vertices?

**Worked answer.** A finite tree with $n$ vertices has $n-1$ edges, so it has $11$. The conclusion relies on both connectedness and absence of cycles. An arbitrary graph may have no edges, all $\binom{12}{2}=66$ possible edges, or anything in between. Naming the hypotheses rather than recalling only a formula supports Chapters 5 and 12.

### C3. Finite probability and expectation

Choose uniformly from the four strings $00,01,10,11$. Let $X$ count the ones. Compute $E[X]$ directly.

**Worked answer.** The four values are $0,1,1,2$, each with probability $1/4$. Hence

$$E[X]=0(1/4)+1(1/4)+1(1/4)+2(1/4)=1$$

Uniformity was part of the experiment; it does not follow merely because the sample space is finite. This supports the finite probabilistic method in Chapter 7.

### C4. Backward reasoning in a game

There are four counters. Two players alternate removing one or two counters, and the player taking the last counter wins. Does the first player have a winning strategy?

**Worked answer.** Yes. The first player removes one counter, leaving three. If the second removes one, the first removes two; if the second removes two, the first removes one. In either case the first player takes the last counter. The invariant is that after the first player's moves the remaining number is a multiple of three. A strategy specifies a response to every legal opposing move, not merely one favorable play. This supports Chapter 8.

## Group D: quotient, order, design, matroid, and computation previews

### D1. Well-definedness on equivalence classes

On integers, let $a\sim b$ when $a-b$ is even. Does $F([a])=a+1$ define an integer-valued function on the quotient? Does $G([a])$ equal the parity of $a+1$ define a parity-valued function?

**Worked answer.** $F$ is not well-defined: $[0]=[2]$, but the proposed outputs are $1$ and $3$. A single quotient input would receive two integer outputs. By contrast, $G$ is well-defined. If $a-b$ is even, then $(a+1)-(b+1)=a-b$ is even, so $a+1$ and $b+1$ have the same parity. The codomain matters: an exact integer value is discarded differently from a parity value. This prepares Chapter 9.

### D2. Partial orders and maximal elements

Order the subsets of $\{1,2\}$ by inclusion. Identify the least element, greatest element, and all maximal elements.

**Worked answer.** The elements are $\varnothing,\{1\},\{2\},\{1,2\}$. The empty set is included in every subset, so it is least. Every subset is included in $\{1,2\}$, so $\{1,2\}$ is greatest. A maximal element has nothing strictly above it; therefore the only maximal element is $\{1,2\}$. The middle sets are incomparable with each other but are not maximal. This separates “maximal” from “greatest” and prepares Chapters 1 and 10.

### D3. Incidence double counting

Five blocks each contain three points. Count point–block incidences. If every point lies in exactly three blocks, how many points are there?

**Worked answer.** Counting by blocks gives $5\cdot 3=15$ incidences. If there are $v$ points and each lies in three blocks, counting by points gives $3v$. Both counts enumerate the same ordered pairs $(\text{point},\text{block})$ with the point in the block, so $3v=15$ and $v=5$. The argument illustrates the parameter constraints studied in Chapter 13.

### D4. Heredity and exchange

Let $E=\{a,b,c\}$ and let the family be $F=\{\varnothing,\{a\},\{b\},\{c\},\{a,b\}\}$. Is $F$ hereditary? Test the exchange condition: whenever $A,B\in F$ and $|A|<|B|$, some element of $B\setminus A$ can be added to $A$ while staying in $F$.

**Worked answer.** The family is hereditary because every subset of each listed set is also listed. Exchange fails: take the independent sets $\{c\}$ and $\{a,b\}$. The candidates from $\{a,b\}\setminus \{c\}$ are $a$ and $b$, but neither $\{a,c\}$ nor $\{b,c\}$ belongs to the family. Thus heredity alone does not give matroid structure. This prepares Chapter 14.

### D5. Experiment versus theorem

A program checks every simple graph on at most seven labeled vertices and finds that a property $P$ holds. Which claim is justified immediately: (i) every finite simple graph has $P$, or (ii) every generated graph on at most seven vertices has $P$? What else is needed even for (ii)?

**Worked answer.** Only (ii) is within the tested finite domain. The universal claim (i) includes infinitely many larger orders and requires an argument beyond the run. Even (ii) requires evidence that the generator produces every legal graph in the stated range, that its representation does not merge or omit cases improperly, and that the checker implements $P$ correctly. A reproducible command and output are useful but do not replace those proofs. This prepares Chapters 15 and 16 and protects the evidential boundary throughout the book.

## Routing table

Use the first column containing a `repair` result. A `recoverable` result usually calls for the short route rather than postponing the book.

| Diagnostic pattern | Repair route | Safe chapter entry | Recheck |
|---|---|---|---|
| Any repair in A1–A3 | Review membership, subset, products, function domain/codomain, inverse images, and the three relation properties. Build two examples and one counterexample of each object. | Chapter 1 after repair | Reattempt A1–A3 without the answers. |
| Repair in A4 or A5 | Translate five quantified sentences into witness form; practice direct proof, contrapositive, and counterexample. | Chapters 1–2, then any branch | Reattempt A4–A5 and label every hypothesis. |
| Repair in B1–B3 | Review finite indexed sums, factorials, subsets, product rule, and overlap correction. | Chapters 1–3 | Reattempt B1–B3 with changed small numbers. |
| Repair in B4 or B5 | Expand recursive definitions by hand; practice one induction; multiply short polynomials by coefficient collection. | Chapters 2–4 | Derive the first five terms of a new recurrence and explain one coefficient. |
| Repair in C1 or C2 | Draw small graphs; label vertices and edges; count incidences from both endpoints; distinguish paths, cycles, connectedness, and trees. | Chapters 1, 2, and 5 | Prove the degree-sum identity on a drawn graph. |
| Repair in C3 | Review finite sample spaces, declared probability masses, weighted averages, and indicator variables. | Chapters 1–3, then 7 | Compute expectation once by a value table and once with indicators. |
| Repair in C4 | Draw the finite game tree and mark winning and losing positions backward from terminal states. | Chapters 1, 2, and 8 | Solve the same game from five counters. |
| Repair in D1 | Review equivalence classes and prove that representative changes leave an output unchanged. | Chapters 1–2, then 9 | Test one valid and one invalid representative formula. |
| Repair in D2 | Review reflexivity, antisymmetry, transitivity, comparability, minimal/maximal, and least/greatest. | Chapters 1–2, then 10 | Draw the inclusion order on subsets of a three-element set. |
| Repair in D3 | Practice counting one incidence set in two ways and equating the totals. | Chapters 1, 3, then 13 | Count vertex–edge incidences in C1 again. |
| Repair in D4 | Review hereditary set systems and compare the exact quantifiers in exchange. | Chapters 1–3, then 14 | Construct a hereditary family and audit every exchange pair. |
| Repair in D5 | Separate examples, exhaustive bounded checks, randomized evidence, and universal proofs. | Chapter 2, then 15–16 | Write the exact quantified claim supported by a five-case table. |

Chapter 6 depends chiefly on A4–A5 and C1–C2. Chapter 11 depends chiefly on B1–B5. Chapter 12 builds on C1–C2 plus proof language. Chapters 13 and 14 use B2–B3 as well as their D-group previews. Chapter 16 is cumulative; enter it only after the earlier chapter dependencies named by its selected project.

For durable cross-references, the chapter-number routes above correspond to these stable IDs:

| Chapter | Stable ID | Diagnostic emphasis |
|---:|---|---|
| 1 | `sets-functions-relations-orders` | A1–A3 and D2 |
| 2 | `proof-induction-invariants` | A4–A5 and B4 |
| 3 | `counting-bijections-inclusion-exclusion` | B1–B3 |
| 4 | `recurrences-generating-functions` | B4–B5 |
| 5 | `graphs-trees-connectivity` | C1–C2 |
| 6 | `planarity-coloring-matchings` | A4–A5 and C1–C2 |
| 7 | `probabilistic-extremal-methods` | C3 with A4–A5 |
| 8 | `games-strategy-capstone` | C4 with B4 |
| 9 | `quotients-and-canonical-representatives` | D1 with A1–A3 |
| 10 | `finite-orders-lattices-mobius` | D2 with B1 |
| 11 | `advanced-enumeration-partitions` | B1–B5 |
| 12 | `graph-decompositions-orientations` | C1–C2 with A4–A5 |
| 13 | `designs-and-set-systems` | D3 with B2–B3 |
| 14 | `matroid-independence-bridge` | D4 with A1 and B2 |
| 15 | `exact-computation-experiments` | D5 with A4–A5 |
| 16 | `cumulative-projects-solutions` | all groups required by the selected project |

If five or more items across Groups A and B are marked `repair`, take a preparatory course in elementary proof and discrete mathematics before using this volume as a linear course. You may still read a motivating chapter, but do not let unfamiliar notation accumulate. If only one group needs repair, begin the safe entry route in the table and repair that group in parallel.

## Accessibility and study alternatives

The diagnostic does not depend on color, animation, drag gestures, or a visual-only diagram. Every structure is described in text and with explicit finite data. A reader using a screen reader may replace a hand-drawn graph with an adjacency list and may read $A\times B$ as “A cross B.” When symbolic density becomes tiring, say each quantifier and operation aloud before calculating.

Time limits are optional. Extra time, a quiet setting, large print, speech input, tactile counters, and one question per page do not change the mathematical skill being diagnosed. A learner with dyscalculia may use a basic calculator after first recording the intended operation; classify the mathematical method separately from arithmetic transcription. A learner who cannot draw may dictate the vertex and edge sets. Do not infer lack of understanding from handwriting, spelling, speed, or an inability to use one physical representation.

For every incorrect response, preserve the attempt and identify the first unsupported move. Repair that move, work one nearby example, and then retry the original after a delay. This produces more information than copying an entire model answer. In a study group, the explainer should state the objects, hypotheses, conclusion, and load-bearing step; the listener should ask for a counterexample when a hypothesis is omitted.

## Honest production boundary

This front-matter diagnostic is aligned to the sixteen-chapter edition. It provides prerequisite sampling and repair routing; it is not a validated placement test, psychometric instrument, accessibility certification, or guarantee of success. The prompts sample important entry skills but cannot represent every obstacle a learner may meet. Course instructors should adjust timing and routes to local learners and should not use a raw score for admission or exclusion.

The larger book also remains in production. Chapter sources exist, but whole-volume editing, expanded problem-bank work, historical-source review, accessibility audit, index and bibliography preparation, and reproducible print-page verification remain separate completion tasks. This diagnostic should therefore be reviewed again if chapter order, notation, or prerequisites change. Its strongest warranted claim is modest: a learner who attempts the problems, studies the worked answers, and follows the routing table has a clearer account of what to repair before each chapter than a learner who relies on a single undifferentiated readiness score.
