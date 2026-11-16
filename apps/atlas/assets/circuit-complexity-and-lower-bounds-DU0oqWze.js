var e=`---
parent_id: book-automata-computability-complexity
chapter_id: circuit-complexity-and-lower-bounds
title: "Circuit Complexity and Lower Bounds"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# Circuit Complexity and Lower Bounds {#section-1-circuit-complexity-and-lower-bounds}

A Turing machine is one finite algorithm for every input length. A circuit is one finite Boolean computation at one fixed length. A family supplies a separate circuit for each length, and those circuits need not have any effective relationship unless uniformity is required. This difference makes circuits a powerful model and makes careless transfers from circuit existence to algorithms invalid.

We develop the circuit material in the preserved resource chapter, prove polynomial circuit simulation, give an unconditional counting lower bound and prove elementary restrictions involving depth and monotonicity. These theorems have deliberately different scopes. A counting argument about some Boolean functions is not a lower bound for SAT, and an impossibility for AND/OR circuits without negation is not an impossibility for circuits with arbitrary Boolean gates.

<a id="section-5-fix-the-model-before-counting"></a>
## Fix the model before counting {#section-7-fix-the-model-before-counting}

A Boolean circuit is a finite directed acyclic graph. Its designated inputs are $x_1,\\ldots,x_n$; constant wires zero and one may be used. Each internal gate computes a specified Boolean operation on earlier wires, and one wire is designated as output. A topological order exists because the graph is finite and acyclic; evaluating gates in that order defines a unique output for every assignment.

Size here counts internal gates. Depth counts the largest number of internal gates on an input-to-output path, with constants and inputs at depth zero. Fan-in is the number of incoming wires; fan-out is the number of uses of a wire. Unless stated otherwise, fan-in is at most two and fan-out is unrestricted. AND, OR and NOT form a complete basis: every Boolean function has a formula in these operations, and hence a circuit. Unary NOT is allowed within the at-most-two convention.

A formula is a circuit whose internal results are not shared: its computation graph is a tree after repeated variable leaves are distinguished. A circuit can reuse an intermediate result by fan-out. Both compute Boolean functions; their representation sizes can differ. Gate count also differs from encoded length, because predecessor indices need bits. A circuit of size $s$ on $n$ inputs has an ordinary encoding of length $O((s+1)\\log(n+s+2))$ plus its fixed gate-type descriptions.

For counting it is convenient to allow all sixteen binary Boolean operations as gate types, with arguments repeated or ignored as necessary. This is a finite basis containing the usual operations, not unbounded truth-table gates on arbitrarily many inputs. Any lower bound against this stronger two-input model also holds against AND/OR/NOT circuits of the same size. Constant-size translations between fixed complete finite bases preserve broad polynomial size classes.

<a id="section-15-families-and-polynomial-size-computation"></a>
## Families and polynomial-size computation {#section-17-families-and-polynomial-size-computation}

A family $(C_n)_{n\\ge0}$ decides a language $L$ when $C_n(x)=1$ exactly for the strings $x\\in L$ of length $n$. The class $P/poly$ consists of languages with some polynomial-size family. No construction algorithm for $C_n$ is required by this definition. Small lengths can be handled by finitely many fixed circuits without affecting a polynomial asymptotic bound.

**Theorem 16.1 (Polynomial computation has polynomial circuits).** Every language in P has a polynomial-size circuit family. Moreover the circuits can be constructed from the unary length $1^n$ in polynomial time.

*Proof.* Fix a polynomial-time decider and a polynomial clock $T(n)\\ge n+1$. After the machine-model simulation of Chapter 9, use a fixed single-tape transition system with a polynomial clock, padding halted configurations by repetitions. Its configurations within the clock occupy only polynomially many tape cells. Encode each cell by its symbol together with a head-state label when present.

The next encoded label is a fixed Boolean function of the old label and neighbouring labels, since one machine step changes only one scanned cell and moves the head by one. The finite state and alphabet make this a constant-size Boolean operation on a constant number of bits. Use a constant-size circuit for each such bit update, one copy per cell per time layer. Initial input cells are the variable wires $x_i$, and the other labels are constants. An output circuit checks acceptance in the final layer.

Induction on time proves every layer represents the machine configuration on that input. The circuit therefore computes exactly the decider's answer. Its number of cells times number of layers is polynomial, and each local update has fixed size. A writer given $1^n$ can output those gates in their layer order using polynomially many loop iterations and polynomial-size indices. Thus both circuit size and construction time are polynomial. ∎

Conversely a polynomial-time constructor for polynomial-size circuits gives a P decider: on input $x$, compute $n=|x|$, construct $C_n$ and evaluate its gates in topological order. These steps are polynomial. We use this explicit polynomial-time uniformity convention; stronger logspace or other uniformity requirements are distinct definitions and should be named when used.

<a id="section-29-advice-explains-nonuniformity"></a>
## Advice explains nonuniformity {#section-31-advice-explains-nonuniformity}

An advice machine receives its ordinary input $x$ and a supplementary string $a_n$ depending only on $n=|x|$. If advice length is polynomial and the deterministic machine runs in polynomial time, its language lies in the advice form of P/poly. The advice need not be computable, and the same $a_n$ must work for every input of length $n$.

The advice and circuit definitions are equivalent. Given a polynomial-size circuit family, use an encoding of $C_n$ as advice and evaluate it. Its encoding is still polynomial length, including wire indices. Conversely unroll the polynomial-time advice machine as above, hardwiring the particular $a_n$ as constants in its initial layer. The remaining variable wires are exactly the input bits. This produces a polynomial-size family, with no claim of a uniform constructor when the advice sequence is noncomputable.

**Theorem 16.2 (Nonuniformity can encode an undecidable set).** P/poly contains a language that no ordinary machine decides; in particular P is properly contained in P/poly.

*Proof.* Let $U\\subseteq\\mathbb N$ be an undecidable set, supplied for example by the earlier diagonal halting theorem. Set $L_U=\\{x:|x|\\in U\\}$. For each length $n$, choose the constant-output circuit whose bit is the truth value of $n\\in U$. Every length slice has a constant-size circuit, so $L_U\\in P/poly$.

If an ordinary decider for $L_U$ existed, given a natural number $n$ we could construct $0^n$ and run that decider, deciding whether $n\\in U$. Producing $0^n$ need not be polynomial in the binary length of $n$, but it is computable and terminates; that is sufficient to contradict undecidability. Hence $L_U$ is undecidable and is not in P. The preceding theorem supplies the non-strict inclusion, giving strictness. ∎

There is no contradiction with finite circuit evaluation being easy. The missing operation is finding the correct circuit for arbitrary length. A separate existence statement at every length does not supply a uniform algorithm that writes those constant bits.

<a id="section-43-count-circuits-and-boolean-functions"></a>
## Count circuits and Boolean functions {#section-45-count-circuits-and-boolean-functions}

There are exactly $2^{2^n}$ Boolean functions on $n$ bits, because each of the $2^n$ assignments receives an independent output bit. We now compare this with the number of small two-input circuits.

A topologically numbered circuit of $r\\le s$ gates can be overdescribed by choosing one of sixteen operations and two predecessors for every gate, allowing any choice among the $n+s+2$ possible input, gate and constant names. This overcounts invalid forward references, which is harmless for an upper bound. Choose an output name too and sum over the $s+1$ possible gate counts. Thus the number of functions computable with at most $s$ gates is at most
$$(s+1)(n+s+2)\\,[16(n+s+2)^2]^s.$$
Different descriptions can compute the same function, so this remains an upper bound on the number of functions represented.

**Theorem 16.3 (Counting lower bound).** For all sufficiently large $n$, some Boolean function on $n$ inputs requires more than $\\lfloor2^n/(16n)\\rfloor$ gates, even with all binary Boolean gate types available.

*Proof.* Take $n\\ge16$ and $s=\\lfloor2^n/(16n)\\rfloor$. Then $s+1\\le2^n$ and $n+s+2\\le2^n$. The base-two logarithm of the displayed circuit-count bound is at most
$$2n+s(4+2n)\\le2n+2^n(1/8+1/(4n)).$$
For $n\\ge16$, $2n\\le2^{n-1}$ and $1/8+1/(4n)\\le9/64$. The entire expression is therefore at most $(41/64)2^n<2^n$. Consequently fewer than $2^{2^n}$ functions have such circuits, while that is the exact total number of functions. At least one is absent and needs more gates. ∎

The threshold is not intended as an optimized constant. The important order is exponential divided by $n$, with a declared finite gate basis and fan-in. If an arbitrary $n$-input truth-table gate counted as one, the statement would be false because each function would fit in one such gate.

The theorem does not place its hard function in NP or identify SAT as hard for circuits. A finite exhaustive search could choose the first missing truth table at each length and thereby define a decidable but extremely expensive language with large circuits. That observation still supplies no efficient membership algorithm and no separation between P and NP. Lower bounds for specific efficiently described families are a different challenge from counting all truth tables.

Every function also has some finite circuit. Write a disjunction of one full conjunction of literals for each accepting assignment, sharing the input negations if desired. There are at most $2^n$ terms, each with $n$ literals; binary AND and OR gates give size $O(n2^n)$. This simple upper bound and the counting lower bound agree on exponential scale without claiming an exact optimal circuit size for an individual function.

<a id="section-63-depth-limits-information-flow"></a>
## Depth limits information flow {#section-65-depth-limits-information-flow}

**Lemma 16.4 (Dependency bound).** In a fan-in-at-most-two circuit, the output of a depth-$d$ gate depends on at most $2^d$ distinct input variables.

*Proof.* At depth zero an input depends on itself and a constant on none. For a gate at depth at most $d$, both predecessor depths are at most $d-1$. By induction each predecessor depends on at most $2^{d-1}$ inputs, so their union has at most $2^d$. The gate cannot introduce dependence on a variable absent from both inputs. Sharing may reduce the union, never enlarge this bound. ∎

Any function depending on all $n$ inputs therefore needs depth at least $\\lceil\\log_2n\\rceil$. Dependence means that changing that input alone changes the output on some assignment. The lower bound applies to the declared bounded fan-in, even with unbounded fan-out and all sixteen binary operations. It fails for unbounded fan-in: one AND gate can depend on all $n$ variables at depth one.

**Worked example 16.5 (Eight-input AND).** Combine $(x_1,x_2)$, $(x_3,x_4)$, $(x_5,x_6)$ and $(x_7,x_8)$ by four AND gates. Combine the four outputs in two pairs, then AND those two results. This has seven gates and depth three, and associativity proves its output is the conjunction of all eight bits. Every input is relevant: set all others to one and flip that bit. The dependency lemma forces depth at least $\\lceil\\log_2 8\\rceil=3$, so this construction attains the depth lower bound. No assertion about an unrelated size-minimisation problem was needed.

<a id="section-73-restricting-the-basis-changes-lower-bounds"></a>
## Restricting the basis changes lower bounds {#section-75-restricting-the-basis-changes-lower-bounds}

A Boolean function is monotone if $a_i\\le b_i$ for every coordinate implies $f(a)\\le f(b)$. Inputs, constants, AND and OR are monotone. Induction in topological order proves that any circuit using only those operations computes a monotone function, regardless of its size. Negation is excluded from this statement.

**Worked example 16.6 (Parity is not monotone).** On two inputs parity has values zero at $00$, one at $10$ and $01$, and zero at $11$. The coordinatewise inequality $10\\le11$ changes its output from one down to zero. Hence parity cannot be computed by an AND/OR-only circuit. With NOT available it is computed by $(x\\land\\neg y)\\lor(\\neg x\\land y)$, using two NOT gates, two AND gates and one OR, for five gates under this basis. Treating XOR as a primitive gate would use a different basis. The impossibility proved for the restricted basis says nothing against this unrestricted small construction.

**Worked example 16.7 (Sharing is a representation issue).** Put $H=a\\land b$ and consider $(H\\lor c)\\land(H\\lor d)$. A direct circuit shares $H$, using one AND for it, two ORs and one final AND: four gates. A literal formula tree writes $a\\land b$ twice, giving five gates in that representation. Both compute the same function by substitution. Neither count proves a minimal size: distributivity rewrites the function as $H\\lor(c\\land d)$, giving a three-gate circuit. A comparison between two representations is therefore different from a lower bound excluding every smaller representation.

Deep results for constant-depth unbounded-fan-in circuits or stronger restricted classes require additional theorems. We do not infer them from the dependency lemma or monotonicity. The examples show why the gate basis, fan-in, depth, sharing and uniformity hypotheses must accompany every circuit complexity claim.

<a id="section-83-exercises"></a>
## Exercises {#section-85-exercises}

<a id="section-85-exercise-1"></a>
### Exercise 1 {#section-87-exercise-1}
<a id="circuit-complexity-and-lower-bounds-ex-1"></a>
Prove that every finite acyclic circuit has an evaluation order and that its value is independent of the chosen topological order.

<details>
<summary>Hint 1</summary>

A finite acyclic graph has a vertex with no remaining predecessors.

</details>
<details>
<summary>Hint 2</summary>

Each gate's operation is fixed once all its predecessors are known.

</details>
<details>
<summary>Solution</summary>

Repeatedly select a vertex with no predecessor among the remaining vertices. If none existed, following predecessors in the finite graph would eventually repeat a vertex and create a cycle, contrary to acyclicity. Removing the selected vertex therefore constructs a full topological order. Values at inputs and constants are fixed. Induction over any such order assigns each gate the unique operation on its already determined predecessors. The same predecessor equations hold in every order, so an induction by dependency depth shows the resulting values agree at every gate and at the output.

</details>

<a id="section-108-exercise-2"></a>
### Exercise 2 {#section-110-exercise-2}
<a id="circuit-complexity-and-lower-bounds-ex-2"></a>
Why does a polynomial gate count give a polynomial-length ordinary circuit encoding?

<details>
<summary>Hint 1</summary>

Each predecessor index is bounded by the number of inputs and gates.

</details>
<details>
<summary>Hint 2</summary>

A fixed gate basis uses only constant-size gate-type information.

</details>
<details>
<summary>Solution</summary>

For $s$ gates and $n$ inputs, each of two predecessor indices needs $O(\\log(n+s+2))$ bits. The gate type needs a constant number because the basis is fixed and finite. Listing the gates and output index therefore costs $O((s+1)\\log(n+s+2))$ bits plus routine delimiters. If $s$ is polynomial in $n$, this length is polynomial too. An encoding allowing arbitrary truth tables as constant-cost gate labels would violate the fixed-basis premise and require its own length analysis.

</details>

<a id="section-131-exercise-3"></a>
### Exercise 3 {#section-133-exercise-3}
<a id="circuit-complexity-and-lower-bounds-ex-3"></a>
Explain both directions of the equivalence between polynomial advice and polynomial-size circuits.

<details>
<summary>Hint 1</summary>

Use the circuit encoding as advice in one direction.

</details>
<details>
<summary>Hint 2</summary>

Hardwire the advice into the computation unrolling in the other.

</details>
<details>
<summary>Solution</summary>

Given a circuit family, provide the length-$n$ circuit encoding as the advice string. A deterministic evaluator computes it in polynomial time because the encoding has polynomial length. Given a polynomial-time advice machine, unroll its clocked computation for length $n$ and fix the particular advice bits as constants. Only the ordinary input bits remain variable, so the resulting circuit has polynomial size and the same answer on that slice. No uniform constructor follows unless the advice itself can be generated with the required efficiency. The same advice must serve all strings of one length.

</details>

<a id="section-154-exercise-4"></a>
### Exercise 4 {#section-156-exercise-4}
<a id="circuit-complexity-and-lower-bounds-ex-4"></a>
Why does the length-language construction put an undecidable language in P/poly without making it decidable?

<details>
<summary>Hint 1</summary>

Each length slice has just one required answer bit.

</details>
<details>
<summary>Hint 2</summary>

There need not be an algorithm producing those bits.

</details>
<details>
<summary>Solution</summary>

For undecidable $U$, let membership of $x$ depend only on whether $|x|\\in U$. The circuit at each length is the corresponding constant bit, so its size is bounded. If a uniform decider for this language existed, constructing $0^n$ and querying it would decide $U$. The contradiction shows why the circuit-existence statements cannot be converted to a uniform generator. Evaluation is easy after the correct bit is supplied; obtaining the correct bit for arbitrary length is the missing operation.

</details>

<a id="section-177-exercise-5"></a>
### Exercise 5 {#section-179-exercise-5}
<a id="circuit-complexity-and-lower-bounds-ex-5"></a>
Derive the circuit-count upper bound, explaining why invalid forward references do not hurt it.

<details>
<summary>Hint 1</summary>

Choose a gate type and two named predecessors at every position.

</details>
<details>
<summary>Hint 2</summary>

Counting extra invalid descriptions only increases the upper bound.

</details>
<details>
<summary>Solution</summary>

For any gate count $r\\le s$, each gate has at most $16(n+s+2)^2$ choices of type and predecessor names. There are at most $n+s+2$ output choices. Bounding every product by the largest exponent $s$ and summing over $s+1$ possible values of $r$ gives $(s+1)(n+s+2)[16(n+s+2)^2]^s$. Some choices refer to later gates or describe the same function several times. They only enlarge this count, so it remains an upper bound on valid represented functions, which is all the lower-bound argument needs.

</details>

<a id="section-200-exercise-6"></a>
### Exercise 6 {#section-202-exercise-6}
<a id="circuit-complexity-and-lower-bounds-ex-6"></a>
Does the counting theorem prove SAT requires exponential-size circuits? Give the exact missing step.

<details>
<summary>Hint 1</summary>

The theorem quantifies over all truth tables at one input length.

</details>
<details>
<summary>Hint 2</summary>

It does not identify the absent table as the SAT slice.

</details>
<details>
<summary>Solution</summary>

No. Counting proves that at least one function lies outside the small-circuit collection, but supplies no reason that SAT at that length is one of the absent functions. To prove an explicit SAT lower bound one must exclude every small circuit for that particular function, not just show that the space of all functions is larger. Nor does counting place its hard functions inside NP. Confusing those quantifiers would turn a general existence theorem into an unproved explicit lower bound and an unjustified class separation.

</details>

<a id="section-223-exercise-7"></a>
### Exercise 7 {#section-225-exercise-7}
<a id="circuit-complexity-and-lower-bounds-ex-7"></a>
Prove parity on $n\\ge1$ inputs depends on every input, and deduce its bounded-fan-in depth lower bound.

<details>
<summary>Hint 1</summary>

Set all other bits to zero.

</details>
<details>
<summary>Hint 2</summary>

Apply the dependency lemma to the output gate.

</details>
<details>
<summary>Solution</summary>

For each coordinate $i$, keep all other bits zero and change $x_i$ from zero to one. Parity changes from zero to one, so that coordinate is relevant. Thus the function depends on all $n$ inputs. A depth-$d$ circuit with fan-in at most two can depend on at most $2^d$ variables, so $n\\le2^d$ and $d\\ge\\lceil\\log_2n\\rceil$. This is a depth lower bound under the stated fan-in, not an exponential size lower bound or an impossibility with an XOR basis.

</details>

<a id="section-246-exercise-8"></a>
### Exercise 8 {#section-248-exercise-8}
<a id="circuit-complexity-and-lower-bounds-ex-8"></a>
Prove every AND/OR/constant circuit is monotone and give a concrete forbidden function.

<details>
<summary>Hint 1</summary>

Coordinatewise increases preserve both AND and OR.

</details>
<details>
<summary>Hint 2</summary>

Compare parity at $10$ and $11$.

</details>
<details>
<summary>Solution</summary>

Input coordinates and constants are monotone. If predecessor functions are monotone, increasing the input cannot decrease either of their values; applying AND or OR therefore cannot decrease the gate output. Topological induction makes every gate and output monotone. Two-input parity is not: $10\\le11$ coordinatewise but parity drops from one to zero. Hence that function has no circuit in the restricted basis at any size. Adding NOT invalidates the induction hypothesis and permits the explicit parity formula in the chapter.

</details>

<a id="section-269-exercise-9"></a>
### Exercise 9 {#section-271-exercise-9}
<a id="circuit-complexity-and-lower-bounds-ex-9"></a>
For $(H\\lor c)\\land(H\\lor d)$ with $H=a\\land b$, compare the direct shared circuit, the literal formula tree and a factored circuit. Is any count a proved minimum?

<details>
<summary>Hint 1</summary>

Count $H$ twice only in the literal tree.

</details>
<details>
<summary>Hint 2</summary>

Use distributivity to obtain $H\\lor(c\\land d)$.

</details>
<details>
<summary>Solution</summary>

The direct shared circuit has four gates: $H$, two ORs and the final AND. The literal tree duplicates $H$ and has five. The factored expression has three: $a\\land b$, $c\\land d$ and their OR. These are sizes of three explicitly written representations. None is a universal lower bound excluding all smaller circuits unless a separate argument is given. In particular the first comparison does not show that every formula for this function has five gates, because the factored expression itself is a smaller formula.

</details>

<a id="section-292-exercise-10"></a>
### Exercise 10 {#section-294-exercise-10}
<a id="circuit-complexity-and-lower-bounds-ex-10"></a>
Can one define a decidable language by choosing the first missing truth table from the counting proof at each sufficiently large length? Explain why that does not imply an efficient algorithm.

<details>
<summary>Hint 1</summary>

All circuits up to the stated finite size can be exhaustively listed.

</details>
<details>
<summary>Hint 2</summary>

The finite search space is enormous but a total search can still terminate.

</details>
<details>
<summary>Solution</summary>

At length $n\\ge16$, enumerate all valid circuits up to the size bound, evaluate each on all $2^n$ inputs and record its truth table. Enumerate truth tables in lexicographic order until one not in that finite collection appears; counting guarantees one exists. On input $x$, use the bit of that chosen table at $x$. Handle smaller lengths by a fixed constant. This is a terminating decision algorithm because every search is finite. Its runtime can be vastly larger than exponential, and the theorem supplies no polynomial bound or NP verifier. Decidability and efficient explicitness remain distinct properties.

</details>

<a id="section-315-sources"></a>
## Sources {#section-317-sources}

This new chapter expands the circuit and nonuniformity seed in [Time, Space, Circuits and Hierarchy Arguments](../formal-computation-proof-reference/resource-measures-and-hierarchies.md), whose original source and solutions remain unchanged. Sanjeev Arora and Boaz Barak, [*Computational Complexity: A Modern Approach*](https://theory.cs.princeton.edu/complexity/), is the benchmark for circuits and advice. The computation unrolling is the same proved local simulation used in this book's Cook–Levin chapter. Counting, dependency and monotonicity arguments are supplied here; stronger restricted-circuit theorems are outside this chapter.

<a id="section-319-summary"></a>
## Summary {#section-321-summary}

Fixed finite gates, fan-in, size, depth and uniformity determine the circuit model. Polynomial-time machines have uniformly constructible polynomial circuits, while arbitrary advice can encode undecidable length slices. Counting forces exponential-size circuits for some functions without identifying SAT as one. Dependency bounds and monotonicity give elementary lower bounds for their stated restrictions. A comparison of particular representations is not a minimum-size theorem, and none of these results resolves P versus NP.
`;export{e as default};