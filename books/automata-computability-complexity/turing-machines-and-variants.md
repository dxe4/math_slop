
# Turing Machines and Their Variants

A computational model is a mathematical object. By making memory and transitions explicit, we can prove closure, simulation, impossibility, and complexity results that do not depend on a particular programming language.

## 1. Languages as decision problems

Fix a finite alphabet $\Sigma$. A language is a set $L\subseteq\Sigma^{\ast}$ of finite strings. A machine **decides** $L$ if it halts on every input and accepts exactly strings in $L$. It **recognizes** $L$ if it accepts exactly members but may run forever on nonmembers.

This difference is the computational form of partial versus total correctness. A recognizer gives eventual positive evidence; a decider always supplies a Boolean answer.

## 2. Finite automata and memory

A deterministic finite automaton is a tuple $(Q,\Sigma,\delta,q_0,F)$ with finite states, total transition function $\delta:Q\times \Sigma\to Q$, initial state, and accepting states. Extend $\delta$ to strings recursively:

$\delta^{*}(q,\varepsilon)=q$,

$\delta^{*}(q,wa)=\delta(\delta^{*}(q,w),a)$.

The invariant after reading prefix $w$ is that the current state equals $\delta^{*}(q_0,w)$. Acceptance is therefore a theorem about the final state.

Nondeterminism gives a set of possible current states. The subset construction uses each subset of $Q$ as a deterministic state. It can create up to $2^{\lvert Q\rvert}$ states, showing equivalence in expressive power but not necessarily succinctness.

## 3. Proving nonregularity

Finite automata have bounded memory. The pumping lemma captures one consequence: sufficiently long accepted strings can be split and a middle segment repeated while remaining accepted. It is a necessary property of regular languages, not a method for proving regularity.

For $L=\{0^n1^n:n\ge 0\}$, assume regular with pumping length $p$. Choose $0^p1^p$. Any pumpable segment confined to the first $p$ symbols consists only of zeros. Pumping it changes the number of zeros but not ones, yielding a string outside $L$, contradiction.

The quantifier order matters: the adversary chooses an accepted string after $p$; the pumping decomposition may then be chosen by the lemma; the proof must defeat every allowed decomposition.

Myhill–Nerode offers a sharper view. Two prefixes are distinguishable if some suffix makes exactly one resulting string belong to $L$. A language is regular exactly when it has finitely many equivalence classes under indistinguishability. Distinct prefixes $0^i$ for the language above are separated by suffix $1^i$, giving infinitely many classes.

## 4. Stacks and context-free structure

A pushdown automaton adds an unbounded stack. It can match nested parentheses or counts in $0^n1^n$ by pushing for zeros and popping for ones. A context-free grammar recursively generates tree-shaped syntax.

Not every context-free grammar is unambiguous. The grammar $E\to E+E \lvert E*E \rvert n$ gives two parse trees for $n+n*n$. Precedence-aware nonterminals repair this intended language of expressions. A parser accepting a string and a semantic evaluator assigning its meaning are distinct components.

## 5. Universal computation and undecidability

A Turing machine has finite control plus an unbounded tape and local head. Many reasonable programming models can simulate one another with polynomial or computable overhead, supporting model-robust computability theory.

The halting problem asks whether encoded program $P$ halts on input $x$. Suppose a decider $H(P,x)$ existed. Construct $D(P)$ that loops when $H(P,P)$ says halt and halts when it says loop. Running $D(D)$ contradicts either answer. Therefore no such total decider exists.

This diagonal proof concerns all encoded programs and inputs. It does not say termination can never be proved for a particular program or restricted language. Type systems, ranking functions, and proof assistants decide or verify substantial fragments.

## 6. Mapping reductions for undecidability

To show target problem $B$ undecidable, start with known undecidable $A$ and compute $f(x)$ such that $x\in A \iff f(x)\in B$. If $B$ had a decider, composition would decide $A$.

The reduction must be an effective total transformation. Informally saying two problems “feel equivalent” proves nothing. It is also insufficient to encode only positive instances.

Rice’s theorem says every nontrivial semantic property of the partial function computed by a program is undecidable in the general Turing-complete setting. Syntactic properties such as “source contains a loop token” are outside its scope; restricted languages may make semantic questions decidable.

## 7. Complexity classes and careful boundaries

$P$ contains decision problems decidable in polynomial time. $\mathsf{NP}$ contains those with polynomially verifiable polynomial-size certificates. A problem is $\mathsf{NP}$-hard if every problem in $\mathsf{NP}$ reduces to it; it is $\mathsf{NP}$-complete if it is both $\mathsf{NP}$-hard and in $\mathsf{NP}$.

To establish completeness, two separate proofs are required:

1. give a polynomial-time verifier or decider showing membership in $\mathsf{NP}$;
2. reduce a known $\mathsf{NP}$-hard problem to the target.

An exponential algorithm does not prove $\mathsf{NP}$-hardness. Failure to find a fast algorithm does not prove none exists. This text treats the possible equality or inequality of $P$ and $\mathsf{NP}$ as an unresolved boundary, never as a premise hidden inside an algorithm analysis.

## 8. Space, randomness, and quantum classes

Complexity theory changes with the resource and computation model. $\mathsf{PSPACE}$ permits polynomial work space, potentially exponential time. Randomized classes distinguish one-sided and two-sided bounded error. Quantum bounded-error computation uses uniform polynomial-size quantum circuits and measurement probabilities.

Containments often follow from simulations, while separations require lower bounds. A speedup for a specific oracle, promise problem, or structured instance family is not automatically a general separation of standard classes.

## Worked audit: reduction from path to reachability encoding

Suppose a system configuration graph has a vertex for every finite state and an edge for every valid step. Asking whether an error state is reachable is ordinary directed reachability. The transformation is useful only when the graph is explicit or successor states can be generated within the claimed resource bound. If the system has $k$ Boolean variables, its state graph may have $2^k$ vertices even when its transition rule is compact.

This “state explosion” does not make finite-state verification undecidable; it makes naive enumeration potentially expensive.

## Common errors

- Treating a nondeterministic transition as a random choice.
- Using the pumping lemma to claim a language is regular.
- Omitting the requirement that a decider halt on nonmembers.
- Reducing the target to a hard problem instead of the hard problem to the target.
- Calling any problem with an exponential known algorithm $\mathsf{NP}$-complete.
- Turning a result for an oracle, promise, or restricted model into an unconditional class separation.


This chapter develops the precise machine model before the effective-function and undecidability chapters. It copies the full mathematical comparison and sixteen practice items of the preserved Machines, Reductions and Computational Limits, then supplies the detailed simulation arguments needed here. Its finite-memory and complexity comparisons are retained as context; the present new results concern machines with an unbounded work tape. No original source or identifier is removed.

## A complete deterministic tape convention

Fix a finite nonempty input alphabet $\Sigma$ and finite tape alphabet $\Gamma$ containing it and a blank not in $\Sigma$. A deterministic machine has finite states $Q$, initial state $q_0$, distinct accepting and rejecting states, and a partial table
$$\delta:(Q\setminus\{q_a,q_r\})\times\Gamma\rightharpoonup Q\times\Gamma\times\{L,R\}.$$
The tape cells are indexed by integers. Initially the input occupies cells $0,\ldots,n-1$, all other cells are blank, and the head is at zero. Entering a halting state stops. An undefined transition is treated as a rejecting halt; one can make that convention explicit by completing the finite table. Finite empty input is permitted even though the alphabet itself is nonempty.

A configuration records state, head position and the finite nonblank tape map. Blank cells outside the recorded map are implicit. Two finite descriptions differing only in redundant outer blanks encode the same configuration. One transition changes only the scanned symbol, head position and control state. A sequence of configurations is a valid run exactly when every adjacent pair satisfies that local table rule. Checking one proposed finite step or a bounded run is decidable by finite string manipulation.

A decider halts on all inputs; a recognizer must accept every member and must not accept a nonmember, but can reject or diverge there. For an output function we use a designated successful output halt and the fixed decoding convention for its finite output. A recognizer's rejection can be converted to a loop when a partial-function specification requires divergence outside its domain. These conventions determine the meaning of halting rather than being inferred from whether a program happened to print something.

## Stay moves and tape directions

A stay-put transition can be replaced by two ordinary moves: perform the intended write, move right into an auxiliary state remembering the intended next state, then move left without changing the newly scanned symbol and enter that state. The head returns to the original cell, so the intended configuration is recovered after two steps. On a one-way tape this also works at the left boundary. The auxiliary states are not original halting states, preventing a simulated halt midway through the two-step operation.

A one-way tape can plainly be simulated on a two-way tape by marking its origin and respecting that marker. Conversely, fold a two-way tape onto a one-way tape with two tracks. Physical cell $j\ge0$ stores the original cell $j$ on one track and cell $-j-1$ on the other. The control records which track holds the simulated head. Moving further into the nonnegative side moves right physically; moving toward zero moves left until physical zero is reached. On the negative track the directions reverse. Crossing the boundary between original cells $-1$ and $0$ changes tracks at physical zero without moving, and the stay construction handles that operation.

Each original cell has exactly one represented track location. A write changes that track only, leaving the other simulated cell unchanged. The case distinction on side and boundary proves every original move is represented by a bounded number of physical moves. Initialization places the input on the nonnegative track and blanks on the negative track. Induction on steps proves configuration agreement; final states and decoded output therefore agree. This is a simulation proof, not an assumption that a finite tape somehow already contains an infinite list of cells.

## Several tapes can be encoded on one

**Theorem 9.1 (Fixed multitape simulation).** A machine with a fixed finite number of tapes can be simulated by a one-tape machine with the same acceptance and divergence behavior.

*Proof.* Encode a finite window of all tape positions using a product alphabet with one symbol track and one head-marker track for each original tape. Keep the original finite control state in the simulator control. A marked boundary encloses every nonblank symbol and every head. Outer unrepresented positions mean blank. Initially this representation contains the input and all starting heads.

For one simulated step, scan the window to read the symbol at each marked head. There are only a fixed number of tapes with finite alphabets, so their tuple and the original state fit in finite control. Compute the transition. On subsequent scans change the specified symbol tracks and create new head marks at the neighbouring positions indicated by the movement directions. Use separate old and new marker tracks until every new mark is complete, then discard the old marks. This prevents one moving head from overwriting information another part of the scan still needs. Extend the window by blank positions at either end when a head moves outwards.

The encoding invariant says each track has exactly one head mark, its symbols and blanks represent the corresponding tape, and the stored state is the original state. The scans preserve it and produce precisely the next original configuration. If the original halts, the simulator enters the corresponding halt after completing the macrostep; if it never halts, the simulator performs infinitely many finite macrosteps and never announces a false halt. Output is decoded from its designated track. ∎

After $t$ original steps the used span is at most $n+O(t+1)$. A macrostep uses $O(n+t+1)$ physical steps because the number of tracks and scans is fixed. Thus $T$ steps can be simulated in $O(n+T(n+T+1))$ time, including initialization. For $T\ge n$ this is the familiar quadratic upper bound. Computability equivalence therefore does not assert identical running time. It asserts a terminating effective translation of machines and faithful simulation; a complexity comparison then counts the translation and macrostep costs separately.

## Nondeterminism adds branches, not random coins

A nondeterministic transition relation gives finitely many possible next configurations from any configuration. Acceptance means that some finite branch reaches an accepting state. A deterministic simulator explores the finite computation tree breadth first, or enumerates all finite sequences of transition choices and simulates their prescribed finite prefixes. Each finite accepting branch eventually appears. Thus nondeterministic recognizers recognize no additional languages.

If every branch of a nondeterministic machine halts on each input, finite branching implies its entire computation tree on that input is finite. To prove this, suppose the tree had arbitrarily large depth. Among finitely many children of the root one must have descendants at arbitrarily large depth; repeat that selection at each finite stage to obtain an infinite branch, contrary to the assumption. Equivalently a finitely branching infinite tree has an infinite path. This elementary tree argument is a metatheoretic existence argument, not an effective instruction for guessing which child has infinite descendants. Breadth-first exploration of a genuinely finite tree terminates and rejects if no accepting branch is present. In time-bounded complexity, all branches instead have a given finite clock, making exhaustive simulation finite directly.

A random choice follows a probability distribution; an existential nondeterministic branch does not. Selecting one branch and calling it typical can miss an accepting branch forever. The resource classes based on nondeterminism will later count branch length rather than this entire deterministic search tree.

## Worked example 1: a tape scan deciding a simple language

A machine decides binary words containing at least one one as follows. In its initial scan state, reading zero moves right without changing it; reading one enters accept; reading blank enters reject. No input symbol is blank, so the first blank after the finite word is reached after at most its length plus one inspections. For the empty word the first scanned cell is already blank, giving rejection. For a word with a one, the first such position is found before the blank and causes acceptance. This proves both the language relation and total termination.

For $0010$, the inspected positions carry $0,0,1$ and the run accepts at the third inspection; the trailing zero is irrelevant. A machine that continued scanning blank cells rather than halting would still recognize the same positive language but would no longer decide it. The difference is in the nonmember obligation, not in which successful trace is displayed.

## Worked example 2: crossing the folded origin

Suppose a simulated two-way head is at original cell $-2$, represented by negative track at physical cell one. A right move goes to original $-1$, negative track at physical zero. Another right move goes to original $0$, nonnegative track at physical zero; this is the track-switch stay operation. The next right move goes to original $1$, nonnegative track at physical one. The written symbol at physical zero on the negative track does not overwrite the original zero-cell symbol on its other track.

Reversing those moves reconstructs the original leftward route. The representation is therefore injective on locations and respects adjacency by a finite case analysis. Simply merging both original cells into the same unlabelled physical symbol would lose information; the separate tracks and side state are the essential invariant.

## Worked example 3: an infinite branch beside a finite witness

Let a nondeterministic machine on its first step choose between entering a loop and scanning a fixed finite input for a one. On input $01$, the scanning branch accepts after finitely many steps, so the nondeterministic machine accepts. A deterministic simulator choosing the looping branch first and waiting for it to finish would never discover that witness. Breadth-first simulation reaches the accepting branch at its finite depth and accepts.

On input $00$, no branch accepts, but the looping branch still prevents every branch from halting. The resulting device is a recognizer, not a nondeterministic decider under the all-branches-halting convention. No probability of success has been assigned to the initial split, so statements such as half the runs are correct are not part of its language semantics. A probabilistic machine would require a separately stated coin distribution and error contract.

## Exercises with complete solutions

### Exercise 1
<a id="turing-machines-and-variants-ex-1"></a>

Why is every finite language regular?

<details>
<summary>Hint 1</summary>

List all prefixes of the finitely many accepted words.

</details>
<details>
<summary>Hint 2</summary>

Add a sink to make every transition defined.

</details>
<details>
<summary>Solution</summary>

Build a finite trie whose paths spell its finitely many strings, with a rejecting sink for all other extensions.

The trie includes the empty prefix as its start and marks exactly complete listed words as accepting, including the start when the empty word belongs to the language. Missing transitions go to the rejecting sink, so a prefix that cannot lead to a listed word never accidentally accepts.

</details>

### Exercise 2
<a id="turing-machines-and-variants-ex-2"></a>

Can a recognizer for $L$ always decide $L$?

<details>
<summary>Hint 1</summary>

A recognizer can keep running on a negative input.

</details>
<details>
<summary>Hint 2</summary>

A separate complement recognizer supplies the missing positive event.

</details>
<details>
<summary>Solution</summary>

No. It may run forever on nonmembers; a separate recognizer for the complement would permit dovetailing into a decider.

The positive acceptance guarantee alone cannot decide when a still-running negative computation will never finish. Running the recognizer for longer finite periods supplies no final negative answer. The complement construction requires an actual separate recognizer and fair interleaving, not just reversing a timeout.

</details>

### Exercise 3
<a id="turing-machines-and-variants-ex-3"></a>

What are the two halves of an $\mathsf{NP}$-completeness proof?

<details>
<summary>Hint 1</summary>

Hardness is not membership.

</details>
<details>
<summary>Hint 2</summary>

State a bounded verifier and a reduction from a known hard source.

</details>
<details>
<summary>Solution</summary>

Membership in $\mathsf{NP}$ and $\mathsf{NP}$-hardness by correctly directed polynomial reductions.

The verifier argument must bound certificate length by a polynomial in instance length and reject every bounded certificate on no-instances. The hardness argument must preserve the membership equivalence and bound the transformer and output size. Neither half implies the other.

</details>

### Exercise 4
<a id="turing-machines-and-variants-ex-4"></a>

Construct a DFA for binary strings with an even number of ones.

Specify its states, transition function, start state, and accepting states, then justify it by an invariant.

<details>
<summary>Hint 1</summary>

Track parity after each prefix.

</details>
<details>
<summary>Hint 2</summary>

Zero preserves the state and one changes it.

</details>
<details>
<summary>Solution</summary>

Use states $E$ and $O$, start and accept in $E$. Reading $0$ leaves the state unchanged; reading $1$ toggles $E$ and $O$. The invariant is: after any prefix, the state is $E$ exactly when that prefix contains an even number of ones. It holds for the empty prefix and is preserved because zero changes no parity while one reverses it. Acceptance therefore matches the language.

</details>

### Exercise 5
<a id="turing-machines-and-variants-ex-5"></a>

Use closure to prove nonregularity.

Assuming $\{0^n1^n:n\ge 0\}$ is nonregular, show $L=\{w \in \{0,1\}^{*}: w\text{ has equally many zeros and ones}\}$ is nonregular.

<details>
<summary>Hint 1</summary>

Intersect with the regular language $0^*1^*$.

</details>
<details>
<summary>Hint 2</summary>

Regular languages are closed under intersection.

</details>
<details>
<summary>Solution</summary>

If $L$ were regular, intersect it with the regular language $0^{\ast}1^{\ast}$. Regular languages are closed under intersection, so the result would be regular. But $L\cap 0^{\ast}1^{\ast}=\{0^n1^n:n\ge 0\}$, contradicting the known nonregularity. The regular restriction is what forces all zeros before all ones; a vague appeal to counting would not establish the argument.

</details>

### Exercise 6
<a id="turing-machines-and-variants-ex-6"></a>

Audit pumping-lemma quantifiers.

Why is choosing a convenient decomposition of $0^p1^p$ insufficient for proving nonregularity?

<details>
<summary>Hint 1</summary>

The lemma only asserts that some legal decomposition exists; you do not get to pick it.

</details>
<details>
<summary>Hint 2</summary>

A contradiction must therefore defeat every decomposition with $\lvert xy\rvert\le p$ and $\lvert y\rvert>0$.

</details>
<details>
<summary>Solution</summary>

Under the assumption of regularity, the lemma promises that there exists some legal decomposition $xyz$ with $\lvert xy\rvert\le p$, $\lvert y\rvert>0$, and all pumped strings accepted. The nonregularity proof must show every decomposition satisfying those constraints fails for some pumping exponent. Because the first $p$ symbols are zeros, every legal $y$ is a nonempty block of zeros; pumping down defeats all choices at once.

</details>

### Exercise 7
<a id="turing-machines-and-variants-ex-7"></a>

Distinguish NFA branching from probability.

An NFA has two transitions on symbol $a$, one leading eventually to acceptance and one to rejection. What is its answer, and why is no probability involved?

<details>
<summary>Hint 1</summary>

Recall whether NFA acceptance asks for at least one accepting complete run or for all runs to accept.

</details>
<details>
<summary>Hint 2</summary>

Check whether the transition relation supplies numerical weights or a rule for sampling a branch.

</details>
<details>
<summary>Solution</summary>

The NFA accepts if at least one complete transition path consumes the input and ends accepting. Nondeterminism is existential branching in the mathematical acceptance definition; paths have no weights and are not sampled. A probabilistic automaton instead supplies transition probabilities and an acceptance threshold or error criterion. Treating NFA choices as fair coin flips changes the model and possibly the language.

</details>

### Exercise 8
<a id="turing-machines-and-variants-ex-8"></a>

Give a grammar and parse for balanced parentheses.

Use one nonterminal and include concatenation.

<details>
<summary>Hint 1</summary>

Use productions for the empty word, for wrapping a balanced word in a pair, and for concatenating two balanced words.

</details>
<details>
<summary>Hint 2</summary>

For a parse of $()()$, first split the start symbol into two copies and make each copy produce one pair.

</details>
<details>
<summary>Solution</summary>

The grammar $S \to SS \lvert (S) \rvert \varepsilon$ generates balanced strings. For $()()$, derive $S \Rightarrow SS \Rightarrow (S)S \Rightarrow ()S \Rightarrow ()(S) \Rightarrow ()()$. Soundness follows inductively because concatenation and wrapping preserve balance. Completeness follows by splitting a nonempty balanced word after its first return to height zero, or removing its matching outer pair when that return is at the end.

</details>

### Exercise 9
<a id="turing-machines-and-variants-ex-9"></a>

Recognizable plus co-recognizable implies decidable.

Prove the claim by describing a machine.

<details>
<summary>Hint 1</summary>

Neither recognizer may get all the time alone.

</details>
<details>
<summary>Hint 2</summary>

Accepting evidence must eventually appear on exactly one side.

</details>
<details>
<summary>Solution</summary>

Let $M$ recognize $L$ and $N$ recognize its complement. On input $x$, simulate one step of $M(x)$, then one of $N(x)$, alternating forever. Exactly one input membership claim is true, so its corresponding recognizer eventually accepts. Accept when $M$ accepts and reject when $N$ accepts. The dovetailed machine halts on every input and decides $L$; running $M$ to completion before starting $N$ would fail if $M$ loops.

</details>

### Exercise 10
<a id="turing-machines-and-variants-ex-10"></a>

Reduce acceptance to halting.

Given a machine-input pair $(M,w)$, construct $(M',w')$ such that $M$ accepts $w$ exactly when $M'$ halts on $w'$.

<details>
<summary>Hint 1</summary>

Make simulated rejection diverge rather than halt.

</details>
<details>
<summary>Hint 2</summary>

The target asks about any halt, not just acceptance.

</details>
<details>
<summary>Solution</summary>

Let $M'$ ignore its own input and simulate $M$ on $w$. If the simulation accepts, $M'$ halts; if it rejects or loops, $M'$ deliberately loops. Choose any fixed $w'$, such as the empty string. This effective mapping preserves yes and no instances, so a halting decider would decide acceptance. Merely using $M$ itself fails because $M$ might halt by rejecting.

</details>

### Exercise 11
<a id="turing-machines-and-variants-ex-11"></a>

Classify a syntactic property under Rice's theorem.

Does Rice's theorem prove that “the source text contains the token `while`” is undecidable?

<details>
<summary>Hint 1</summary>

Compare syntax with equality of computed partial functions.

</details>
<details>
<summary>Hint 2</summary>

Equivalent programs may have different source tokens.

</details>
<details>
<summary>Solution</summary>

No. The property concerns program syntax, not the partial function computed. It is decidable by scanning a finite source string. Rice's theorem applies to nontrivial semantic properties invariant under replacement by any program computing the same partial function. Two extensionally equivalent programs can differ in whether their text contains `while`, so the hypothesis does not apply.

</details>

### Exercise 12
<a id="turing-machines-and-variants-ex-12"></a>

Verify Hamiltonian cycle membership in NP.

Specify a certificate and a verifier whose runtime is polynomial in a standard graph encoding.

<details>
<summary>Hint 1</summary>

Use one original vertex ID per cycle position.

</details>
<details>
<summary>Hint 2</summary>

Check duplicates and the closing edge as well as consecutive edges.

</details>
<details>
<summary>Solution</summary>

The certificate lists $n$ vertex identifiers in cyclic order. The verifier checks the list length, checks with a Boolean seen table that every vertex occurs exactly once, and checks that each consecutive pair plus the last-first pair is an edge. With an adjacency matrix this is $\mathcal{O}(n^{2})$ including duplicate checks, or $\mathcal{O}(n+m)$ preprocessing plus $\mathcal{O}(n)$ edge queries with suitable lists. The certificate length and runtime are polynomial in the encoded graph size.

</details>

### Exercise 13
<a id="turing-machines-and-variants-ex-13"></a>

Find the flaw in an NP-hardness argument.

A researcher gives an exponential algorithm for problem $B$ and concludes that $B$ is NP-hard.

<details>
<summary>Hint 1</summary>

An upper bound does not establish hardness.

</details>
<details>
<summary>Hint 2</summary>

A simple problem may also have an unnecessarily exponential algorithm.

</details>
<details>
<summary>Solution</summary>

An upper-bound algorithm, especially a slow one, supplies no hardness lower bound. Many problems in $P$ also have obvious exponential algorithms. NP-hardness requires polynomial reductions from every NP problem, ordinarily obtained by reducing a known NP-hard problem to $B$. Even after hardness, NP-completeness additionally requires $B$ to be a decision problem in NP.

</details>

### Exercise 14
<a id="turing-machines-and-variants-ex-14"></a>

Explain a promise-problem boundary.

An algorithm distinguishes two kinds of input only under a documented promise, but behaves arbitrarily outside it. Why is this not automatically a decider for the corresponding unrestricted language?

<details>
<summary>Hint 1</summary>

The unrestricted input universe is larger than the promise.

</details>
<details>
<summary>Hint 2</summary>

Outside-promise correctness and halting need a separate argument.

</details>
<details>
<summary>Solution</summary>

A language decider must halt and answer correctly on every encoded input. A promise algorithm has obligations only on the promised subset; outside it, neither result nor termination may be constrained. To obtain an unrestricted decider one must efficiently verify the promise and define correct behavior on failures, or otherwise extend the proof. Ignoring this domain restriction enlarges the theorem without evidence.

</details>

### Exercise 15
<a id="turing-machines-and-variants-ex-15"></a>

Bound explicit model checking.

A transition system has $k$ Boolean state variables and a successor routine polynomial in $k$. What can and cannot be inferred about reachability by exhaustive search?

<details>
<summary>Hint 1</summary>

Count Boolean states before considering local successor cost.

</details>
<details>
<summary>Hint 2</summary>

A polynomial step routine does not shrink the exponential state set.

</details>
<details>
<summary>Solution</summary>

There are at most $2^k$ states. Graph search with duplicate detection therefore terminates and decides reachability, using exponential worst-case time and potentially exponential memory, even though each successor computation is polynomial. Finite state makes the question decidable; compact encoding does not make enumeration polynomial. Structural or symbolic methods may improve instances but need their own bounds.

</details>

### Exercise 16
<a id="turing-machines-and-variants-ex-16"></a>

Separate undecidability from intractability.

Compare the halting problem with SAT using the guarantees presently established in this chapter.

<details>
<summary>Hint 1</summary>

Ask whether any total decider exists first.

</details>
<details>
<summary>Hint 2</summary>

Then ask whether an existing decider can be polynomial.

</details>
<details>
<summary>Solution</summary>

No total algorithm decides halting for arbitrary encoded programs and inputs. SAT is decidable—for example by exhaustive truth assignments—and lies in NP. Whether SAT has a polynomial-time algorithm remains open. The later chapter [NP-Completeness and Reduction Design](np-completeness-and-reduction-design.md) proves its NP-completeness under polynomial reductions, making this equivalent to the $P$ versus $\mathsf{NP}$ question. Calling SAT “undecidable” or calling halting merely “exponential” confuses absence of any decider with an unsettled efficiency bound.

</details>

[Previous chapter](tree-languages-and-transducers.md) · [Book overview](#/books/automata-computability-complexity)


## Sources

The full seed is the preserved Machines, Reductions and Computational Limits; all sixteen original tasks and solutions remain, with new hints and simulation exposition. The finite-memory comparisons connect Chapters 1–6 to the present tape model. Michael Sipser, *Introduction to the Theory of Computation*, and his [official MIT lectures](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html) are the benchmark reference. A. M. Turing, [“On Computable Numbers”](https://theory.stanford.edu/~trevisan/cs172-07/turing36.pdf), is the primary historical source. The partial-function version of Rice cited in the seed and the language version proved later have distinct extensional domains; no identification between them is assumed without an encoding argument.

## Summary

A machine theorem begins with exact configurations, halting conventions and output semantics. Stay moves, tape direction and any fixed number of tapes can be simulated through explicit configuration invariants. These simulations preserve computation while exposing their cost. Nondeterministic acceptance requires a finite witness branch and fair deterministic exploration, with no probability distribution implied. Original finite-memory, reduction and complexity comparisons remain available as context for the later chapters.
