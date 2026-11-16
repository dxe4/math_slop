var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: machines-reductions-limits
title: "Machines, Reductions, and Computational Limits"
level: advanced-undergraduate
estimated_minutes: 135
license: CC BY-SA 4.0
---

# Machines, Reductions, and Computational Limits

A computational model is a mathematical object. By making memory and transitions explicit, we can prove closure, simulation, impossibility, and complexity results that do not depend on a particular programming language.

## 1. Languages as decision problems

Fix a finite alphabet $\\Sigma$. A language is a set $L\\subseteq\\Sigma^{\\ast}$ of finite strings. A machine **decides** $L$ if it halts on every input and accepts exactly strings in $L$. It **recognizes** $L$ if it accepts exactly members but may run forever on nonmembers.

This difference is the computational form of partial versus total correctness. A recognizer gives eventual positive evidence; a decider always supplies a Boolean answer.

## 2. Finite automata and memory

A deterministic finite automaton is a tuple $(Q,Sigma,\\delta,q0,F)$ with finite states, total transition function $\\delta:Q\\times Sigma\\to Q$, initial state, and accepting states. Extend $\\delta$ to strings recursively:

$\\delta*(q,\\varepsilon)=q$,

$\\delta*(q,wa)=\\delta(\\delta*(q,w),a)$.

The invariant after reading prefix $w$ is that the current state equals $\\delta*(q0,w)$. Acceptance is therefore a theorem about the final state.

Nondeterminism gives a set of possible current states. The subset construction uses each subset of $Q$ as a deterministic state. It can create up to $2^\\lvert Q\\rvert$ states, showing equivalence in expressive power but not necessarily succinctness.

## 3. Proving nonregularity

Finite automata have bounded memory. The pumping lemma captures one consequence: sufficiently long accepted strings can be split and a middle segment repeated while remaining accepted. It is a necessary property of regular languages, not a method for proving regularity.

For $L=\\{0^n1^n:n\\ge 0\\}$, assume regular with pumping length $p$. Choose $0^p1^p$. Any pumpable segment confined to the first $p$ symbols consists only of zeros. Pumping it changes the number of zeros but not ones, yielding a string outside $L$, contradiction.

The quantifier order matters: the adversary chooses an accepted string after $p$; the pumping decomposition may then be chosen by the lemma; the proof must defeat every allowed decomposition.

Myhill–Nerode offers a sharper view. Two prefixes are distinguishable if some suffix makes exactly one resulting string belong to $L$. A language is regular exactly when it has finitely many equivalence classes under indistinguishability. Distinct prefixes $0^i$ for the language above are separated by suffix $1^i$, giving infinitely many classes.

## 4. Stacks and context-free structure

A pushdown automaton adds an unbounded stack. It can match nested parentheses or counts in $0^n1^n$ by pushing for zeros and popping for ones. A context-free grammar recursively generates tree-shaped syntax.

Not every context-free grammar is unambiguous. The grammar $E\\to E+E \\lvert E*E \\rvert n$ gives two parse trees for $n+n*n$. Precedence-aware nonterminals repair this intended language of expressions. A parser accepting a string and a semantic evaluator assigning its meaning are distinct components.

## 5. Universal computation and undecidability

A Turing machine has finite control plus an unbounded tape and local head. Many reasonable programming models can simulate one another with polynomial or computable overhead, supporting model-robust computability theory.

The halting problem asks whether encoded program $P$ halts on input $x$. Suppose a decider $H(P,x)$ existed. Construct $D(P)$ that loops when $H(P,P)$ says halt and halts when it says loop. Running $D(D)$ contradicts either answer. Therefore no such total decider exists.

This diagonal proof concerns all encoded programs and inputs. It does not say termination can never be proved for a particular program or restricted language. Type systems, ranking functions, and proof assistants decide or verify substantial fragments.

## 6. Mapping reductions for undecidability

To show target problem $B$ undecidable, start with known undecidable $A$ and compute $f(x)$ such that $x\\in A \\iff f(x)\\in B$. If $B$ had a decider, composition would decide $A$.

The reduction must be an effective total transformation. Informally saying two problems “feel equivalent” proves nothing. It is also insufficient to encode only positive instances.

Rice’s theorem says every nontrivial semantic property of the partial function computed by a program is undecidable in the general Turing-complete setting. Syntactic properties such as “source contains a loop token” are outside its scope; restricted languages may make semantic questions decidable.

## 7. Complexity classes and careful boundaries

$P$ contains decision problems decidable in polynomial time. $\\mathsf{NP}$ contains those with polynomially verifiable polynomial-size certificates. A problem is $\\mathsf{NP}$-hard if every problem in $\\mathsf{NP}$ reduces to it; it is $\\mathsf{NP}$-complete if it is both $\\mathsf{NP}$-hard and in $\\mathsf{NP}$.

To establish completeness, two separate proofs are required:

1. give a polynomial-time verifier or decider showing membership in $\\mathsf{NP}$;
2. reduce a known $\\mathsf{NP}$-hard problem to the target.

An exponential algorithm does not prove $\\mathsf{NP}$-hardness. Failure to find a fast algorithm does not prove none exists. This text treats the possible equality or inequality of $P$ and $\\mathsf{NP}$ as an unresolved boundary, never as a premise hidden inside an algorithm analysis.

## 8. Space, randomness, and quantum classes

Complexity theory changes with the resource and computation model. $\\mathsf{PSPACE}$ permits polynomial work space, potentially exponential time. Randomized classes distinguish one-sided and two-sided bounded error. Quantum bounded-error computation uses uniform polynomial-size quantum circuits and measurement probabilities.

Containments often follow from simulations, while separations require lower bounds. A speedup for a specific oracle, promise problem, or structured instance family is not automatically a general separation of standard classes.

## Worked audit: reduction from path to reachability encoding

Suppose a system configuration graph has a vertex for every finite state and an edge for every valid step. Asking whether an error state is reachable is ordinary directed reachability. The transformation is useful only when the graph is explicit or successor states can be generated within the claimed resource bound. If the system has $k$ Boolean variables, its state graph may have $2^k$ vertices even when its transition rule is compact.

This “state explosion” does not make finite-state verification undecidable; it makes naive enumeration potentially expensive.

## Common errors

- Treating a nondeterministic transition as a random choice.
- Using the pumping lemma to claim a language is regular.
- Omitting the requirement that a decider halt on nonmembers.
- Reducing the target to a hard problem instead of the hard problem to the target.
- Calling any problem with an exponential known algorithm $\\mathsf{NP}$-complete.
- Turning a result for an oracle, promise, or restricted model into an unconditional class separation.

## Exercises with complete solutions

1. **Why is every finite language regular?** Build a finite trie whose paths spell its finitely many strings, with a rejecting sink for all other extensions.
2. **Can a recognizer for $L$ always decide $L$?** No. It may run forever on nonmembers; a separate recognizer for the complement would permit dovetailing into a decider.
3. **What are the two halves of an $\\mathsf{NP}$-completeness proof?** Membership in $\\mathsf{NP}$ and $\\mathsf{NP}$-hardness by correctly directed polynomial reductions.
4. **Construct a DFA for binary strings with an even number of ones.** Specify its states, transition function, start state, and accepting states, then justify it by an invariant.

   **Solution.** Use states $E$ and $O$, start and accept in $E$. Reading $0$ leaves the state unchanged; reading $1$ toggles $E$ and $O$. The invariant is: after any prefix, the state is $E$ exactly when that prefix contains an even number of ones. It holds for the empty prefix and is preserved because zero changes no parity while one reverses it. Acceptance therefore matches the language.
5. **Use closure to prove nonregularity.** Assuming $\\{0^n1^n:n\\ge 0\\}$ is nonregular, show $L=\\{w \\in \\{0,1\\}*: w has equally many zeros \\land ones\\}$ is nonregular.

   **Solution.** If $L$ were regular, intersect it with the regular language $0^{\\ast}1^{\\ast}$. Regular languages are closed under intersection, so the result would be regular. But $L\\cap 0^{\\ast}1^{\\ast}=\\{0^n1^n:n\\ge 0\\}$, contradicting the known nonregularity. The regular restriction is what forces all zeros before all ones; a vague appeal to counting would not establish the argument.
6. **Audit pumping-lemma quantifiers.** Why is choosing a convenient decomposition of $0^p1^p$ insufficient for proving nonregularity?

   **Solution.** Under the assumption of regularity, the lemma promises that there exists some legal decomposition $xyz$ with $\\lvert xy\\rvert\\le p$, $\\lvert y\\rvert>0$, and all pumped strings accepted. The nonregularity proof must show every decomposition satisfying those constraints fails for some pumping exponent. Because the first $p$ symbols are zeros, every legal $y$ is a nonempty block of zeros; pumping down defeats all choices at once.
7. **Distinguish NFA branching from probability.** An NFA has two transitions on symbol $a$, one leading eventually to acceptance and one to rejection. What is its answer, and why is no probability involved?

   **Solution.** The NFA accepts if at least one complete transition path consumes the input and ends accepting. Nondeterminism is existential branching in the mathematical acceptance definition; paths have no weights and are not sampled. A probabilistic automaton instead supplies transition probabilities and an acceptance threshold or error criterion. Treating NFA choices as fair coin flips changes the model and possibly the language.
8. **Give a grammar and parse for balanced parentheses.** Use one nonterminal and include concatenation.

   **Solution.** The grammar $S \\to SS \\lvert (S) \\rvert \\varepsilon$ generates balanced strings. For $()()$, derive $S \\Rightarrow SS \\Rightarrow (S)S \\Rightarrow ()S \\Rightarrow ()(S) \\Rightarrow ()()$. Soundness follows inductively because concatenation and wrapping preserve balance. Completeness follows by splitting a nonempty balanced word after its first return to height zero, or removing its matching outer pair when that return is at the end.
9. **Recognizable plus co-recognizable implies decidable.** Prove the claim by describing a machine.

   **Solution.** Let $M$ recognize $L$ and $N$ recognize its complement. On input $x$, simulate one step of $M(x)$, then one of $N(x)$, alternating forever. Exactly one input membership claim is true, so its corresponding recognizer eventually accepts. Accept when $M$ accepts and reject when $N$ accepts. The dovetailed machine halts on every input and decides $L$; running $M$ to completion before starting $N$ would fail if $M$ loops.
10. **Reduce acceptance to halting.** Given a machine-input pair $(M,w)$, construct $(M',w')$ such that $M$ accepts $w$ exactly when $M'$ halts on $w'$.

   **Solution.** Let $M'$ ignore its own input and simulate $M$ on $w$. If the simulation accepts, $M'$ halts; if it rejects or loops, $M'$ deliberately loops. Choose any fixed $w'$, such as the empty string. This effective mapping preserves yes and no instances, so a halting decider would decide acceptance. Merely using $M$ itself fails because $M$ might halt by rejecting.
11. **Classify a syntactic property under Rice's theorem.** Does Rice's theorem prove that “the source text contains the token \`while\`” is undecidable?

   **Solution.** No. The property concerns program syntax, not the partial function computed. It is decidable by scanning a finite source string. Rice's theorem applies to nontrivial semantic properties invariant under replacement by any program computing the same partial function. Two extensionally equivalent programs can differ in whether their text contains \`while\`, so the hypothesis does not apply.
12. **Verify Hamiltonian cycle membership in NP.** Specify a certificate and a verifier whose runtime is polynomial in a standard graph encoding.

   **Solution.** The certificate lists $n$ vertex identifiers in cyclic order. The verifier checks the list length, checks with a Boolean seen table that every vertex occurs exactly once, and checks that each consecutive pair plus the last-first pair is an edge. With an adjacency matrix this is $\\mathcal{O}(n^{2})$ including duplicate checks, or $\\mathcal{O}(n+m)$ preprocessing plus $\\mathcal{O}(n)$ edge queries with suitable lists. The certificate length and runtime are polynomial in the encoded graph size.
13. **Find the flaw in an NP-hardness argument.** A researcher gives an exponential algorithm for problem $B$ and concludes that $B$ is NP-hard.

   **Solution.** An upper-bound algorithm, especially a slow one, supplies no hardness lower bound. Many problems in $P$ also have obvious exponential algorithms. NP-hardness requires polynomial reductions from every NP problem, ordinarily obtained by reducing a known NP-hard problem to $B$. Even after hardness, NP-completeness additionally requires $B$ to be a decision problem in NP.
14. **Explain a promise-problem boundary.** An algorithm distinguishes two kinds of input only under a documented promise, but behaves arbitrarily outside it. Why is this not automatically a decider for the corresponding unrestricted language?

   **Solution.** A language decider must halt and answer correctly on every encoded input. A promise algorithm has obligations only on the promised subset; outside it, neither result nor termination may be constrained. To obtain an unrestricted decider one must efficiently verify the promise and define correct behavior on failures, or otherwise extend the proof. Ignoring this domain restriction enlarges the theorem without evidence.
15. **Bound explicit model checking.** A transition system has $k$ Boolean state variables and a successor routine polynomial in $k$. What can and cannot be inferred about reachability by exhaustive search?

   **Solution.** There are at most $2^k$ states. Graph search with duplicate detection therefore terminates and decides reachability, using exponential worst-case time and potentially exponential memory, even though each successor computation is polynomial. Finite state makes the question decidable; compact encoding does not make enumeration polynomial. Structural or symbolic methods may improve instances but need their own bounds.
16. **Separate undecidability from intractability.** Compare the halting problem with SAT using the guarantees presently established in this chapter.

   **Solution.** No total algorithm decides halting for arbitrary encoded programs and inputs. SAT is decidable—for example by exhaustive truth assignments—and lies in NP; it is NP-complete under polynomial reductions. Whether SAT has a polynomial-time algorithm is unresolved through the $P$ versus $\\mathsf{NP}$ question. Calling SAT “undecidable” or calling halting merely “exponential” confuses absence of any decider with an unsettled efficiency bound.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=randomness-approximation) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};