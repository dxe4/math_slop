
# Effective Functions, Encodings, and Universal Machines

Computability theory asks what can be achieved by a finite mechanical procedure with unbounded time and storage. Its theorems do not depend on a favorite programming language, but that invariance must be earned through encodings and simulations. This chapter develops partial functions, Turing machines, alternative models, universal interpretation, and enumeration without confusing mathematical idealization with a claim about physical infinity.

## 1. Partial functions and divergence

A partial function $f:\Sigma^{\ast}  \rightharpoonup  \Gamma^{\ast} $ may be undefined on some inputs. A machine **computes** $f$ when it halts with output $f(x)$ exactly for inputs in the domain and does not halt for inputs outside it. Divergence is not the same as returning a distinguished error value.

A language $L$ is **decidable** if a machine halts on every input and accepts exactly $L$. It is **recognizable** if a machine accepts exactly members but may run forever on nonmembers. A recognizer's rejection and nontermination must not be conflated in an API.

## 2. A machine contract

A deterministic single-tape Turing machine has finite states, tape alphabet with blank, input alphabet, transition function, initial state, and halting accept/reject states. One step reads the current cell, writes a symbol, moves left or right, and changes state. A configuration contains the complete finite nonblank tape content, head location, and control state.

The step relation is effective and local. A computation is its iterated trace. Multi-tape, stay-put, or two-way-infinite variants compute the same partial functions after explicit simulations. They may differ polynomially in runtime, so model equivalence at the computability level is not cost equality.

## 3. Encodings

Finite objects are encoded as words. A usable encoding is unambiguous and effectively parseable; malformed encodings receive explicit semantics. Tuples can use self-delimiting length prefixes or escaped separators. Machines themselves are finite tables and therefore encodable.

An encoding change preserves computability when translations both ways are computable on valid objects. Complexity preservation requires stronger bounds on translation time and size. A unary and binary integer encoding are computably interchangeable but exponentially different in length.

## 4. Closure and composition

Computable partial functions are closed under composition: simulate the first; if it halts, feed its output to the second. If either diverges, the composite diverges. Primitive operations on encoded words—testing empty, adding/removing a symbol, branching on a symbol—support larger routines through composition and iteration.

For languages, decidable sets are closed under Boolean operations because both deciders halt. Recognizable sets are closed under union and intersection by dovetailing simulations. Complement closure is the dividing boundary: if both $L$ and its complement are recognizable, then $L$ is decidable by running both recognizers in interleaved steps until one accepts.

## 5. Dovetailing

Running one possibly divergent computation to completion before another is unsafe. **Dovetailing** schedules stages: at stage $s$, advance each of the first $s$ simulations one step. Every individual simulation eventually receives arbitrarily many steps.

To recognize a union, alternate its recognizers on the same input and accept when either accepts. To enumerate outputs of a partial computable function over all inputs, dovetail the input computations and print outputs as they halt. Duplicates are allowed unless explicitly removed.

## 6. Universal machines

Because machine descriptions and inputs are words, a universal machine $U$ can parse pair $\langle M,x\rangle$ and simulate one step of $M$ at a time. Its invariant maps the encoded simulated configuration to $U$'s representation and proves each simulated step is matched by finitely many universal steps.

Universality yields an effective enumeration $M_0,M_1,...$ of machines. Invalid descriptions can denote a fixed rejecting machine. Every machine appears, perhaps more than once. This enumeration powers diagonal arguments; it does not enumerate total computable functions in a way that lets totality be decided.

## 7. Other equivalent models

Lambda calculus, partial recursive functions, register machines, and general-purpose idealized programming languages compute the same partial functions under conventional effective encodings. Proofs compile primitives and control structures between models.

The **Church–Turing thesis** is not a theorem equating a formal object with an informal phrase. It is the methodological claim that effectively calculable functions are exactly Turing-computable. Mathematical equivalence among formal models supports the thesis; no formal proof can quantify over every future informal notion without formalizing it first.

Nondeterministic Turing machines do not gain computability power: dovetail all branches and accept if one accepts. At complexity scale they may change resource classes, which Chapter 12 will measure.

## 8. Enumerators and recognizers

A language is recognizable exactly when some enumerator prints its members.

From a recognizer, dovetail it on every word and print words whose simulations accept. From an enumerator, recognize input $x$ by running the enumerator until it prints $x$; members eventually appear, while nonmembers may wait forever. For the empty language, the enumerator prints nothing.

An enumerator in strict length-lexicographic order decides its language provided it also halts after its final output when the language is finite: wait until it prints $x$, prints a later word, or terminates. The “later word” conclusion depends on the promised sorted order, and the finite-language case depends on the halting promise.

## 9. Implementation boundaries

A practical interpreter has finite memory, integer limits, timeouts, and external failures. A timeout establishes only that a run did not halt within a bound. It cannot distinguish divergence from slow termination. Sandboxing a simulated language is a security obligation separate from the mathematical universal-machine construction.

Traces help validate one simulation. Universal correctness requires a relation between simulated and host configurations plus initialization, step simulation, and halting/output lemmas.


## Parameterisation is a concrete program construction

The universal machine above can interpret a program together with its data. Fix an effective enumeration of output programs and write $\varphi_e(y)$ for the partial function of program index $e$ on input $y$. Programs in this convention have one successful output halt. A rejecting halt in a recognizer can be converted into an infinite loop when it is being interpreted as a partial-function computation; a successful output is not an error return. Thus the partial-function convention remains distinct from the language recognizer convention used earlier. Invalid descriptions may denote the fixed rejecting recognizer, while its normalized output-program interpretation diverges everywhere.

Pair inputs have an effective self-delimiting code, and write $\varphi_e(x,y)$ for running $e$ on that pair. There is a total computable function $s(e,x)$ such that
$$\varphi_{s(e,x)}(y)\simeq\varphi_e(x,y).$$
Here $\simeq$ means either both sides are undefined or both are defined with the same output. To construct $s(e,x)$, write a finite wrapper containing the constants $e,x$. On input $y$, it builds the pair code and runs the universal interpreter on that program and pair. Producing the wrapper copies finite constants into fixed interpreter instructions and always terminates. It does not execute the resulting program while producing its code. This is the one-parameter form of the parameterisation, or $s$-$m$-$n$, theorem; several parameters can be bundled into one tuple.

Universality and parameterisation have different jobs. Universality executes a description. Parameterisation produces a new description with fixed data built in. Confusing the two leads to a false claim that compiling a possibly divergent computation would itself have to wait for that computation to finish.

## The recursion theorem, proved in full

**Theorem 10.1 (Kleene recursion theorem, index form).** If $f$ is any total computable function from program indices to program indices, some index $e$ satisfies
$$\varphi_e\simeq\varphi_{f(e)}.$$
The conclusion is equality of partial functions, not equality of the two index numbers or equality of source text.

*Proof.* Define a partial computable two-argument procedure
$$\psi(x,y)\simeq\varphi_{f(s(x,x))}(y).$$
On input $(x,y)$ it computes $s(x,x)$, then $f$ of that number, then uses the universal interpreter. The first two computations terminate because $s$ and $f$ are total. The last computation is allowed to diverge. Consequently this procedure has some program index $a$, with $\varphi_a(x,y)\simeq\psi(x,y)$.

Let $e=s(a,a)$. For every input $y$, the parameterisation identity gives
$$\varphi_e(y)\simeq\varphi_a(a,y)
\simeq\varphi_{f(s(a,a))}(y)
=\varphi_{f(e)}(y).$$
Each equivalence includes divergence as well as successful output. Hence the partial functions agree on their domains and values, proving the theorem. ∎

The totality hypothesis on $f$ is part of the theorem. A transformation that sometimes fails to output a program index does not meet it. Conversely no uniform termination hypothesis is imposed on the output programs $f(e)$. They may compute partial functions; the proof preserves their divergence rather than turning them into deciders.

This fixed point does not contradict the halting diagonal argument. That argument rules out a total decider for a specified semantic property. Here $f$ is a syntactic program transformer, and the fixed point merely gives one program with the same behavior as its transformed version. The transformation $f(e)=e+1$ illustrates the distinction: it has no numerical fixed point, but the theorem still supplies indices of extensionally equal partial functions. Distinct programs can compute exactly the same thing.

The theorem also does not require a machine to discover its code by introspection. The index $e$ is constructed externally from a wrapper index $a$. In a programming language, specialised recursion mechanisms may make such constructions convenient, but those conveniences are not hypotheses of the mathematical proof.

## Worked example 1: a program that returns its own index

Given $e$, effectively produce a constant-output program that, on every input, returns the binary numeral for $e$. Call its index $f(e)$. This transformer is total computable because it merely writes a finite constant into a fixed program. By the recursion theorem there is $e$ with $\varphi_e=\varphi_{f(e)}$. Thus this particular program returns its own index on every input.

The result is not a claim that every program can inspect its own source, nor that the literal source text equals its numeric code. The output is a chosen encoding of one index in the fixed enumeration. If another enumeration is used, the construction and returned number may change. The proof guarantees the behavior without executing any sample program or treating a guessed self-description as evidence.

## Worked example 2: a pair code with an empty component

For binary words $u,v$, use $\langle u,v\rangle=1^{|u|}0uv$. The first zero ends the unary length prefix; the next $|u|$ bits form $u$, and all remaining bits form $v$. For $u=10,v=011$, the code is $11010011$. A parser reads two initial ones, then zero, then the two bits $10$, leaving $011$. For an empty first component the code is simply $0v$, so the empty word is not lost.

A string with no zero delimiter, or with too few following bits for the announced first length, is malformed. Rejecting those strings is a finite parsing decision. The encoding is injective because the initial prefix fixes the first length and hence both boundaries. Nesting the same construction codes triples or finite tuples. This supplies the data manipulation assumed by the universal wrapper, without claiming that every coding has the same quantitative efficiency.

## Worked example 3: a recognizer hidden behind an infinite first run

Suppose an enumerator is to list all accepted words of a machine $M$, and $w_0$ loops forever while $w_1$ accepts after five steps. Running $M(w_0)$ to completion before starting $M(w_1)$ never prints $w_1$. Instead at stage $s$ advance one step on each simulation with index at most $s$, retaining all configurations between stages. After stage one, the second simulation receives another step at every subsequent stage and eventually reaches its fifth step. It is then printed.

The same argument covers every fixed accepted input, whatever its finite index and accepting time. A nonmember may reject or loop; neither behavior causes a false output. Duplicate printing can be suppressed by retaining the finite set already printed at each finite stage, but duplicates do not affect the enumerated language. This is an existence proof for the entire enumeration, not an assumption that the first unsuccessful run will eventually reveal its failure.

## Exercises with complete solutions

### Exercise 1: Error versus divergence
<a id="effective-functions-and-universal-machines-ex-1"></a>

Why is returning $\mathrm{error}$ not the same as an undefined partial result?

<details>
<summary>Hint 1</summary>

Does the caller receive a finite output?

</details>
<details>
<summary>Hint 2</summary>

Divergence has no completed return event.

</details>
<details>
<summary>Solution</summary>

Returning $\mathrm{error}$ halts with an output in an enlarged codomain. Undefinedness is modeled by no halting output. A caller can observe the first result in finite time but may wait forever in the second case.

For example, returning an encoded error permits a caller to branch immediately on that output. A divergent computation provides no such finite observation. Whether a system has a timeout is an additional external policy, not a new output of the mathematical partial function.

</details>

### Exercise 2: Decidable implies recognizable
<a id="effective-functions-and-universal-machines-ex-2"></a>

Prove every decidable language is recognizable.

<details>
<summary>Hint 1</summary>

Use the existing decider unchanged.

</details>
<details>
<summary>Hint 2</summary>

A recognizer may reject nonmembers; it merely need not halt there.

</details>
<details>
<summary>Solution</summary>

A decider already accepts members and halts rejecting nonmembers. Ignoring the stronger rejection guarantee gives a recognizer.

</details>

### Exercise 3: Complement of a decidable set
<a id="effective-functions-and-universal-machines-ex-3"></a>

Construct its decider.

<details>
<summary>Hint 1</summary>

Totality is the important hypothesis.

</details>
<details>
<summary>Hint 2</summary>

Swap answers only after the original run halts.

</details>
<details>
<summary>Solution</summary>

Run the original decider, which always halts, and swap accept and reject outcomes. Totality makes this safe.

</details>

### Exercise 4: Recognizable intersection
<a id="effective-functions-and-universal-machines-ex-4"></a>

How can two recognizers recognize $A \cap B$?

<details>
<summary>Hint 1</summary>

A positive answer needs both recognizers to accept.

</details>
<details>
<summary>Hint 2</summary>

Interleave the two simulations instead of waiting for the first.

</details>
<details>
<summary>Solution</summary>

Dovetail both on the input and accept only after both have accepted. If the word is in both, both events eventually occur; otherwise at least one never accepts.

</details>

### Exercise 5: Two recognizers decide
<a id="effective-functions-and-universal-machines-ex-5"></a>

If $L$ and its complement are recognizable, prove $L$ decidable.

<details>
<summary>Hint 1</summary>

Each input lies on exactly one side.

</details>
<details>
<summary>Hint 2</summary>

Stop at the corresponding positive acceptance event.

</details>
<details>
<summary>Solution</summary>

Dovetail their recognizers. Exactly one must eventually accept for each input. Accept when the $L$ recognizer does and reject when the complement recognizer does, so the combined machine always halts correctly.

</details>

### Exercise 6: Unary versus binary
<a id="effective-functions-and-universal-machines-ex-6"></a>

Why does computable translation not preserve polynomial complexity automatically?

<details>
<summary>Hint 1</summary>

Compare the number with the size of its representation.

</details>
<details>
<summary>Hint 2</summary>

Printing a unary output can already require exponentially many symbols.

</details>
<details>
<summary>Solution</summary>

Unary encoding of $n$ has length $n$, while binary has length about $\log n$. A runtime polynomial in unary length may be exponential in binary length even though both translations are computable.

An integer with a binary representation of length $b$ may be almost $2^b$. Writing its unary form then needs that many symbols, so even a computable translation need not be polynomial in the shorter encoding. A complexity-preserving representation change must bound both translation time and output length.

</details>

### Exercise 7: Invalid descriptions
<a id="effective-functions-and-universal-machines-ex-7"></a>

Why assign them a default machine in an enumeration?

<details>
<summary>Hint 1</summary>

Every possible description then has a specified meaning.

</details>
<details>
<summary>Hint 2</summary>

Valid descriptions are still all included.

</details>
<details>
<summary>Solution</summary>

It makes the decoding map total without losing any valid machine. Every word then denotes some machine, simplifying universal simulation and diagonal indexing.

For the language enumeration, the fixed default rejects every input. When enumerating partial output functions, the stated normalization converts rejection to divergence. Each convention is total on descriptions but has different output semantics; one must name which enumeration is being used.

</details>

### Exercise 8: Dovetail fairness
<a id="effective-functions-and-universal-machines-ex-8"></a>

Why does stage scheduling eventually finish any halting simulation?

<details>
<summary>Hint 1</summary>

Fix one simulation index and one finite accepting time.

</details>
<details>
<summary>Hint 2</summary>

After its index enters the schedule it receives unboundedly many steps.

</details>
<details>
<summary>Solution</summary>

A computation with index $i$ needing $t$ steps receives at least $t$ steps by sufficiently large stages after $i$; stages grow without bound and include it thereafter.

</details>

### Exercise 9: Enumerator direction
<a id="effective-functions-and-universal-machines-ex-9"></a>

Build a recognizer from an arbitrary enumerator.

<details>
<summary>Hint 1</summary>

Watch every printed word.

</details>
<details>
<summary>Hint 2</summary>

Absence of a print is not a finite rejection certificate.

</details>
<details>
<summary>Solution</summary>

Run the enumerator and compare every printed word with input $x$. Accept when equal. If $x$ is in the language it eventually appears; otherwise the procedure may run forever, as recognizability permits.

</details>

### Exercise 10: Nondeterministic simulation
<a id="effective-functions-and-universal-machines-ex-10"></a>

Why not explore one nondeterministic branch to completion?

<details>
<summary>Hint 1</summary>

A different branch may accept while the first loops.

</details>
<details>
<summary>Hint 2</summary>

Enumerate all finite choice sequences by length.

</details>
<details>
<summary>Solution</summary>

That branch may be infinite while another has a finite accepting run. Dovetail all finite branch prefixes so every finite accepting computation is eventually discovered.

</details>

### Exercise 11: Universal invariant
<a id="effective-functions-and-universal-machines-ex-11"></a>

Name the core proof obligations for a universal interpreter.

<details>
<summary>Hint 1</summary>

Describe how a simulated configuration is represented.

</details>
<details>
<summary>Hint 2</summary>

Prove initialization, local progress and halting/output agreement.

</details>
<details>
<summary>Solution</summary>

Valid initialization represents the simulated initial configuration; every simulated step is matched by finitely many interpreter steps; simulated halting is detected; and decoded output agrees. Malformed descriptions need a separate total policy.

</details>

### Exercise 12: Timeout evidence
<a id="effective-functions-and-universal-machines-ex-12"></a>

What does a one-hour timeout prove?

<details>
<summary>Hint 1</summary>

The experiment has a finite stopping time.

</details>
<details>
<summary>Hint 2</summary>

A slower halting run is consistent with every finite timeout.

</details>
<details>
<summary>Solution</summary>

Only that the concrete run under the given platform and resource policy did not produce a halting result within one hour. It proves neither mathematical divergence nor undecidability.

</details>

[Book overview](#/books/formal-computation-proof-reference)


## Sources

This chapter copies and expands the preserved Effective Functions source, retaining its definitions, examples and twelve original complete solutions. The wrapper and recursion arguments are new exposition here. Michael Sipser, *Introduction to the Theory of Computation*, is the computability benchmark; see his [official MIT lecture index](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html). Sanjeev Arora and Boaz Barak provide [author-hosted complexity material](https://theory.cs.princeton.edu/complexity/). Formal-model equivalence statements are standard cited background, not proofs supplied by the Church–Turing thesis.

## Summary

Partial functions distinguish successful output from divergence. Effective encodings and universal simulation let programs operate on descriptions; dovetailing prevents one infinite run from blocking all others. Parameterisation is a terminating code construction, and its explicit diagonal wrapper proves the recursion theorem for total computable index transformations. The resulting fixed point is behavioural equality, with no numerical equality or halting decision implied.
