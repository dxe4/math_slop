
# Reverse Mathematics

Reverse mathematics is a program in mathematical logic that asks: which set-existence axioms are necessary and sufficient to prove theorems of ordinary mathematics? Rather than proving a theorem from strong axioms, one seeks the weakest subsystem of second-order arithmetic in which the theorem is provable. This chapter introduces the main subsystems, gives representative reversals, and explains the significance of the phenomenon.

## Second-order arithmetic

**Definition 10.1 ($\mathsf{Z}_2$).** *Second-order arithmetic* is a two-sorted theory with number variables $x, y, z, \dots$ and set variables $X, Y, Z, \dots$. The language includes $0, S, +, \cdot, <$ for numbers and $\in$ for set membership. The axioms are:
- The basic axioms for $0, S, +, \cdot, <$ (successor, addition, multiplication, order).
- The induction axiom: $\forall X\,((0\in X\land\forall n\,(n\in X\to Sn\in X))\to\forall n\,n\in X)$.
- The comprehension scheme: for every formula $\varphi(n)$ (possibly with set parameters), $\exists X \, \forall n \, (n \in X \leftrightarrow \varphi(n))$.

Subsystems of $\mathsf{Z}_2$ restrict the comprehension scheme.

## The Big Five

Many benchmark theorems studied by the program are equivalent over a weak base theory $\mathsf{RCA}_0$ to one of five recurring subsystems:

### $\mathsf{RCA}_0$: Recursive Comprehension Axiom

**Axioms.** Basic axioms, $\Sigma^0_1$ induction, and $\Delta^0_1$ comprehension: if $\varphi(n)$ is equivalent to a $\Sigma^0_1$ formula and to a $\Pi^0_1$ formula, then the set $\{n : \varphi(n)\}$ exists.

**What it proves.** Basic algebra, computability theory, and the existence of computable sets. It does not prove the existence of non-computable sets.

### $\mathsf{WKL}_0$: Weak König’s Lemma

**Axiom.** Every infinite binary tree has an infinite path.

**Representative equivalents (with standard second-order codes).** The compactness of $[0,1]$ for countable coded open covers, the extreme value theorem for coded continuous functions, and the countable-consistent-theory/countable-model formulation of first-order completeness. Exact coding matters; nearby formulations can have different strength.

**Theorem 10.2.** $\mathsf{WKL}_0$ is strictly stronger than $\mathsf{RCA}_0$.

### $\mathsf{ACA}_0$: Arithmetical Comprehension Axiom

**Axiom.** Arithmetical comprehension: for every arithmetical formula $\varphi(n)$ (no set quantifiers), $\{n : \varphi(n)\}$ exists.

**Representative equivalents.** The Bolzano–Weierstrass theorem, the existence of a basis for every countable vector space, and König’s lemma for arbitrary coded finitely branching trees. The completeness formulation just listed belongs under $\mathsf{WKL}_0$, not here.

**Theorem 10.3.** $\mathsf{ACA}_0$ proves $\mathsf{WKL}_0$ and is strictly stronger.

### $\mathsf{ATR}_0$: Arithmetical Transfinite Recursion

**Axiom.** If $X$ is a well-ordering, then arithmetical definitions can be iterated along $X$.

**Representative equivalents.** Ulm-type classification results for suitable countable abelian groups, the perfect set theorem for closed sets, and open (equivalently here, clopen) determinacy for games on natural numbers, with the standard coding used in second-order arithmetic.

### $\Pi^1_1\text{-}\mathsf{CA}_0$: $\Pi^1_1$ Comprehension

**Axiom.** For every $\Pi^1_1$ formula $\varphi(n)$, $\{n : \varphi(n)\}$ exists.

**Representative result with its verified base.** Over $\mathsf{ATR}_0$, $\Pi^1_1\text{-}\mathsf{CA}_0$ is equivalent to the Kondô uniformization theorem for $\Pi^1_1$ relations, with the standard second-order codes (Simpson, §VI.2). This statement is not being calibrated over $\mathsf{RCA}_0$. Strong Cantor--Bendixson decomposition principles also occur at this level, but their exact formulations and bases must be stated separately. Open-game determinacy was already assigned to $\mathsf{ATR}_0$; changing notation from “open” to $\Sigma^0_1$ does not move it to $\Pi^1_1\text{-}\mathsf{CA}_0$.

## A representative reversal

**Theorem 10.4 (over $\mathsf{RCA}_0$).** The following are equivalent:
1. $\mathsf{WKL}_0$.
2. Every coded continuous function $2^\omega\to\mathbb N$ has bounded range.
3. Every coded continuous real-valued function on $[0,1]$ is bounded.
4. Every such function on $[0,1]$ attains a maximum.
5. The coded Heine--Borel compactness theorem for $[0,1]$.

**Proof sketch ($2 \Rightarrow 1$).** Work contrapositively. If an infinite binary tree $T$ had no path, then for each $x\in2^\omega$ there would be a least $n$ with $x\upharpoonright n\notin T$. This exit-time map is continuous in the coded sense. It is unbounded because $T$ has nodes of arbitrary length, each extendible to an infinite binary sequence. That contradicts (2), so every infinite binary tree has a path. The remaining equivalences translate compactness and uniform bounds between standard codes for Cantor space and $[0,1]$.

## Common errors

**Error: confusing reverse mathematics with constructive mathematics.** Reverse mathematics uses classical logic and studies subsystems of second-order arithmetic. Constructive mathematics uses intuitionistic logic and has different foundational goals. Some results overlap, but the programs are distinct.

**Error: forgetting what the base records.** If $\mathsf{RCA}_0\vdash\varphi\leftrightarrow\psi$, every stronger theory extending $\mathsf{RCA}_0$ also proves that equivalence. Naming the weak base records the calibration: each implication can be proved with only those axioms. Translation to a different language, such as ZF, is a separate question.

**Error: ignoring the base theory.** A reversal $\varphi \leftrightarrow \psi$ over $\mathsf{RCA}_0$ means $\mathsf{RCA}_0 \vdash \varphi \to \psi$ and $\mathsf{RCA}_0 \vdash \psi \to \varphi$. Without specifying the base theory, the claim is meaningless.


## Codes, internal truth, and the base theory

The set quantifiers of a subsystem range over the sets supplied by its model, not automatically over the whole external power set of its number domain. An **omega-model** has the standard natural numbers as its first sort and a specified collection of subsets of them as its second sort. A nonstandard model may also have nonstandard numbers. These are distinct phenomena: changing the second sort already changes which comprehension and path assertions hold while leaving ordinary finite calculations unchanged.

Number quantifiers in an arithmetical formula may alternate without bound fixed in advance by the theory, but each individual formula is finite. A formula is arithmetical when it has no set quantifiers; it may still use set parameters. In the base theory, a Delta-one definition means a proved equivalence between a Sigma-one and a Pi-one presentation, with the allowed parameters. It does not mean that an external observer happens to know both descriptions agree in the standard model. The internal proof of equivalence is what licenses comprehension.

A binary tree is a set of finite zero-one strings closed under initial segments. Infinite means that it has strings of every finite length. A path is a set coding an infinite binary sequence all of whose finite prefixes lie in the tree. Even if an external mathematician sees a path, a model may omit every such path from its set sort. Weak König's lemma asserts existence inside that sort. This is why an ordinary classical compactness argument cannot simply be inserted into a proof advertised as taking place in the base theory.

### Worked example 1: finite discoveries and an infinite requirement

Suppose two disjoint enumerations have discovered the number 1 on the positive side and 3 on the negative side by stage 4. A compatible string of length 4 must have bit 1 equal to 1 and bit 3 equal to 0; its other bits are currently free. Later discoveries impose further requirements, including requirements on those other bits. For each length choose the finite string satisfying discoveries visible at that length. The collection of all compatible strings is a tree: shortening a string removes positions and moves to an earlier stage, so it cannot add a discovery requirement. A single arbitrary compatible string at each length need not form a path, because these separate choices need not be nested. Weak König's lemma supplies the coherent infinite choice that the finite observations alone do not supply.

## A complete separation of the first two systems

We now prove one strictness result rather than treating the whole hierarchy as a diagram with unexplained arrows. Fix an effective enumeration of partial computable functions. Enumerate a number e into A if its own computation on input e halts with output 0; enumerate it into B if that computation halts with output 1. Ignore other outputs and divergent computations. These sets are computably enumerable and disjoint because a deterministic computation has at most one output.

There is no computable separating set C with A contained in C and B disjoint from C. If there were, its total zero-one characteristic function would occur at some index e. If it outputs 0 on e, then e enters A, contradicting the assertion that A is contained in C. If it outputs 1, then e enters B, contradicting disjointness from C. Both possible characteristic values contradict separation. Notice that this argument does not require the enumerations of A and B to finish or their union to be all natural numbers.

Choose finite stage approximations to these enumerations by bounded simulation. Put a string sigma of length n into T precisely when its first n bits satisfy every positive or negative discovery made by stage n about numbers below n. Membership in T is computable by a finite calculation. It is prefix closed because discoveries persist and an earlier stage has fewer constraints. Disjointness permits a compatible string of every length: assign the finitely many required bits and put zero elsewhere. Thus T is an infinite computable binary tree. Every path through it separates A from B, since a discovery at stage s is respected by all sufficiently long prefixes. Consequently T has no computable path.

Let REC be the collection of all computable subsets of the standard natural numbers. The two-sorted structure (N, REC) satisfies the base theory. Arithmetic defining axioms hold in N. Every induction instance, including those with computable set parameters, is true in the standard number domain. If a predicate has equivalent Sigma-one and Pi-one definitions relative to finitely many computable parameter sets, run the two semidecisions in parallel. Exactly one succeeds on each input; this gives a total computable characteristic function. Its set is in REC, establishing the required Delta-one comprehension. The tree T is in REC but none of its paths is. Therefore this omega-model satisfies the base theory and fails weak König's lemma. In particular the base theory cannot prove weak König's lemma, assuming the ordinary soundness of our external metatheory. This is a full model separation, not an appeal to difficulty finding a path.

### Worked example 2: what the omega-model changes

The equation 7+5=12 has the same truth value in (N, REC) and (N, P(N)). So does every first-order sentence with the same fixed computable parameter sets. The assertion that the particular tree T has a path changes truth value between those two second sorts. In the full power-set structure ordinary classical König compactness supplies a path; in REC no such set is available. There is no contradiction and no changing definition of finite computation. A second-order existential assertion is being evaluated with a different range for its witness.

## From arithmetical comprehension to paths

Here is a direct proof of the implication from arithmetical comprehension to weak König's lemma. For an infinite binary tree T form the set E of nodes sigma such that for every m there is an extension of sigma in T of length at least m. This is an arithmetical definition with parameter T, so arithmetical comprehension supplies E. The empty string lies in E. If sigma lies in E, one of its two children lies in E: otherwise each child has a finite bound on the lengths of its extensions, and the maximum of those two bounds is a bound above sigma, a contradiction. This use of two bounds is a finite argument, not countable choice.

Starting at the root, choose child 0 whenever it belongs to E and child 1 otherwise. Membership in E makes this a determinate recursive construction relative to E. The base theory's relative recursive comprehension collects its graph and hence its sequence of bits. Every chosen prefix belongs to E and therefore to T, so the resulting set is a path. The argument isolates exactly where the stronger axiom was used: forming the arithmetically defined set E of infinitely extendible nodes. The subsequent path construction is effective once E is given.

A useful calibration is that arithmetical comprehension is equivalent, over the base, to the existence of the range of every injection. The forward implication is immediate: membership in the range is an existential number formula. For the reverse direction, fix a set X. Enumerate, using X, halting events for programs with oracle X. Construct an X-computable injection g whose range contains the even number 2e exactly when program e halts. At each stage queue newly observed, previously unreported halting events; serve the oldest queued event by outputting its even code. If the queue is empty output a fresh odd number reserved for that stage. No even code is repeated, and no odd code is repeated. Every queued event is eventually served because only finitely many events precede it. The range principle supplies the range of g, and recursive comprehension then extracts the jump X' from its even entries.

Repeating this argument supplies each finite iterate of the jump relative to any finite join of the given parameter sets. The elementary arithmetical-hierarchy coding theorem says, by induction on a formula's number-quantifier structure, that its truth predicate with those parameters is computable in some finite jump: atomic predicates are computable, Boolean operations preserve relative decidability, and an existential search is decided by one more jump. Universal quantifiers use complementation. Applying relative recursive comprehension gives the set defined by any particular arithmetical formula. This proves arithmetical comprehension. The finite number of iterations depends on the fixed formula; no set collecting all iterated jumps has been asserted.

## A full Cantor-space reversal

For precision, represent a continuous map from Cantor space to the natural numbers by an **associate** a on finite binary strings. Positive a(s) means that every extension of s has output a(s)-1; this value persists on longer strings. Every infinite binary sequence must have some prefix on which a is positive. These conditions are part of the representation. Arbitrary externally continuous functions without a supplied code are not the objects quantified over by the theorem.

Assume weak König's lemma. Form the binary tree of strings all of whose prefixes have associate value zero. If this tree had nodes at every length, a path would contradict the defining totality of the associate. Thus some level N has no such nodes. Each length-N string has a positive prefix. There are only finitely many strings and prefixes up to that level, so the maximum of their positive labels gives a finite bound on every output. The finite collection and its maximum are available in the weak base; the path argument is the additional principle.

Conversely, assume every map with such an associate has bounded range, and suppose an infinite binary tree T has no path in the available set universe. Every infinite sequence then has a least prefix outside T. Define its output to be that prefix length. A finite string already witnessing its first exit supplies an associate label one more than that length; before any exit give label zero. This is a recursive construction from T and satisfies persistence and totality under the assumed absence of a path. Its range is unbounded: for each m choose a node of T of length m and extend it by zeros to a computable infinite sequence. Its first exit must occur after m, since T is prefix closed. A bounded range is impossible. Classical contraposition therefore gives a path. This establishes the equivalence for the stated associate convention using only the described base constructions. The interval, maximum-attainment and vector-space calibrations above remain named standard-code results from Simpson, not consequences proved merely by changing the word “Cantor” to “interval”.

### Worked example 3: extracting a digit without assuming its set

For an injection f consider the rational partial sums in original Exercise 3. To recover whether k occurs, suppose earlier base-four digits have already been recovered and subtracted from the subsequential limit. If digit k+1 is absent, the residual is at most one third of its place value. If it is present, the residual is at least its full place value. The open gap between these two bounds permits a rational-approximation decision: refine the approximation until its error interval lies on one side of a threshold halfway through the gap. It must eventually do so. Repeat this finite procedure through digit k+1. This explains why ambiguous positional expansions do not invalidate this specially restricted zero-one encoding; the unused digits create a separation gap. The existence of the subsequential limit, not an assumed range characteristic function, supplies the information used by the decision.

## Practice exercises

<a id="reverse-mathematics-ex-1"></a>

**Exercise 1.** Show that $\mathsf{RCA}_0$ proves the existence of the graph of every computable function whose totality is provable in $\mathsf{RCA}_0$.


<details>
<summary>Hint 1</summary>

Use the computation relation and the internally proved totality.

</details>

<details>
<summary>Hint 2</summary>

Produce both an existential and a universal definition of the same graph.

</details>

<details>
<summary>Solution</summary>

Let a program index define a functional computation relation $C(n,m,s)$, and assume $\mathsf{RCA}_0$ proves $\forall n\,\exists!m\,\exists s\,C(n,m,s)$. Then $f(n)=m$ is $\Sigma^0_1$ via $\exists s\,C(n,m,s)$. By the proved totality and uniqueness it is equivalent internally to the $\Pi^0_1$ condition $\forall k\,\forall s\,(C(n,k,s)\to k=m)$. Thus $\Delta^0_1$ comprehension produces the graph. External totality with no proof in the base theory is not enough.

</details>

<a id="reverse-mathematics-ex-2"></a>

**Exercise 2.** Prove that $\mathsf{WKL}_0$ implies the existence of a separating set for any pair of disjoint $\Sigma^0_1$ sets.


<details>
<summary>Hint 1</summary>

Make finite strings respect discoveries only up to their own length.

</details>

<details>
<summary>Hint 2</summary>

A path eventually sees each fixed enumeration event.

</details>

<details>
<summary>Solution</summary>

Fix computable stage approximations $A_s,B_s$. Put a binary string $\sigma$ of length $n$ in $T$ when, for every $i<n$ discovered by stage $n$, $i\in A_n$ implies $\sigma(i)=1$ and $i\in B_n$ implies $\sigma(i)=0$. These are bounded, hence decidable, requirements. Disjointness makes a compatible string of every length, so $T$ is infinite. A path $X$ through $T$ eventually respects every discovery: $A\subseteq X$ and $B\cap X=\emptyset$.

</details>

<a id="reverse-mathematics-ex-3"></a>

**Exercise 3.** Show that $\mathsf{ACA}_0$ is equivalent to the statement “every bounded sequence of reals has a convergent subsequence” (Bolzano–Weierstrass).


<details>
<summary>Hint 1</summary>

For the forward implication choose infinitely occupied intervals.

</details>

<details>
<summary>Hint 2</summary>

For the reverse implication encode an injection range with base-four digits and a gap.

</details>

<details>
<summary>Solution</summary>

The original calibrated argument follows; the additional range and digit-gap details above make its dependencies explicit.

In $\mathsf{ACA}_0$, start with a coded bounded sequence. Arithmetical comprehension determines which rational subintervals contain infinitely many terms; repeatedly choose an infinitely occupied half and then a later term in it. The nested intervals and chosen indices give a convergent subsequence.

Conversely, let $f:\mathbb N\to\mathbb N$ be injective and set

$$q_n=\sum_{i<n}4^{-(f(i)+1)}.$$

Bolzano--Weierstrass supplies a convergent subsequence with limit $x$. The base-$4$ digits of $x$ are $0$ or $1$, with digit $1$ in position $k+1$ exactly when $k$ lies in the range of $f$. These digits can be recovered successively from rational approximations to $x$: after the $k$th digit, the remaining tail is at most $\frac13 4^{-(k+1)}$, whereas a present digit contributes $4^{-(k+1)}$. The resulting range set gives arithmetical comprehension. This construction uses no pre-existing characteristic function for the range.

</details>

<a id="reverse-mathematics-ex-4"></a>

**Exercise 4.** State the formulation of completeness that is equivalent to $\mathsf{WKL}_0$ over $\mathsf{RCA}_0$.


<details>
<summary>Hint 1</summary>

Specify a countable coded language and a syntactically consistent theory.

</details>

<details>
<summary>Hint 2</summary>

Distinguish coded-model existence from weaker completeness formulations.

</details>

<details>
<summary>Solution</summary>

For a countable coded language and a countable syntactically consistent theory, the assertion that there is a countable coded model is equivalent to $\mathsf{WKL}_0$ over $\mathsf{RCA}_0$. The forward construction finds a path through the binary tree of finite Henkin decisions. Other coding or weak-completeness formulations may be provable already in $\mathsf{RCA}_0$, so the label “completeness theorem” alone is not a calibration.

</details>

<a id="reverse-mathematics-ex-5"></a>

**Exercise 5.** Why must reverse mathematics formulate order-type claims with codes rather than quantify over a unique set-theoretic ordinal?


<details>
<summary>Hint 1</summary>

List the two sorts of the language.

</details>

<details>
<summary>Hint 2</summary>

Replace an ordinal object by a coded order and an isomorphism relation.

</details>

<details>
<summary>Solution</summary>

Second-order arithmetic has numbers and sets of numbers, not arbitrary von Neumann ordinals. A countable order is represented by a set coding its relation. A legitimate statement is that two coded well-orders are comparable by an isomorphism with an initial segment; this identifies their order types up to coded isomorphism. $\mathsf{ATR}_0$ supports the transfinite recursions used in such comparisons, but “there exists a unique ordinal” must first be translated into this coding language.

</details>

## Looking backward and forward

This chapter applied the set-theoretic and logical machinery from previous chapters to a precise analysis of mathematical strength. The subsystems connect to “Descriptive Set Theory” through $\mathsf{ATR}_0$ and $\Pi^1_1\text{-}\mathsf{CA}_0$, and to “Model Theory” through the completeness theorem reversal. The next chapter, “Decidable and Undecidable Theories”, asks which theories admit a decision procedure for their theorems.

## Further practice

<a id="reverse-mathematics-ex-6"></a>

**Exercise 6.** Prove that the computable separator tree in this chapter has no computable path.

<details>
<summary>Hint 1</summary>

Identify a path with its zero-one characteristic function.

</details>

<details>
<summary>Hint 2</summary>

Diagonalise at that function’s own program index.

</details>

<details>
<summary>Solution</summary>

Any path C separates A from B because each discovery is enforced at all sufficiently long levels. If C were computable, let e index its total characteristic function. Output 0 at e puts e in A and contradicts A contained in C; output 1 puts e in B and contradicts B disjoint from C. These are the only outputs of a characteristic function. Therefore no path is computable.

</details>

<a id="reverse-mathematics-ex-7"></a>

**Exercise 7.** Why does the least-child path construction from E not itself require arithmetical comprehension again?

<details>
<summary>Hint 1</summary>

Treat E as an available set parameter.

</details>

<details>
<summary>Hint 2</summary>

Each next bit is decided by one membership query.

</details>

<details>
<summary>Solution</summary>

Once E exists, the successor choice is a total deterministic recursive procedure relative to E: test the zero-child, otherwise take the one-child. Induction shows a permitted child always exists. Its graph has equivalent existential-computation and universal-uniqueness definitions relative to E, so relative Delta-one comprehension suffices. The arithmetical comprehension was used to obtain E, not at each later bit.

</details>

<a id="reverse-mathematics-ex-8"></a>

**Exercise 8.** Explain the queue discipline in the injection-range proof. Why is serving merely some pending event insufficient?

<details>
<summary>Hint 1</summary>

Consider a pending small event continually passed over.

</details>

<details>
<summary>Hint 2</summary>

Count the finitely many arrivals placed before a fixed event.

</details>

<details>
<summary>Solution</summary>

Without fairness a particular event could remain forever unreported while later arrivals were always selected; then the proposed range would omit a halting index. In a first-in-first-out queue, a fixed event has finitely many earlier events at its arrival. Each nonempty stage removes the oldest one and no later arrival moves ahead of it. Thus after finitely many services it is output. Each event is enqueued only once, and the fresh odd outputs never collide with even ones, so totality and injectivity also hold.

</details>

<a id="reverse-mathematics-ex-9"></a>

**Exercise 9.** Prove the finite-level bound from an associate and weak König’s lemma.

<details>
<summary>Hint 1</summary>

Use strings with no positive prefix as the tree.

</details>

<details>
<summary>Hint 2</summary>

A level missing that tree supplies finitely many determining values.

</details>

<details>
<summary>Solution</summary>

The zero-prefix strings form a prefix-closed binary tree. An infinite path would have no positive associate prefix, contradicting totality. Weak König’s lemma therefore implies a finite level N with no tree node. Every length-N string has a positive prefix. The finitely many positive values among prefixes of length at most N have a maximum M; any infinite sequence extends one such prefix, so persistence makes its output at most M-1. Nonempty Cantor space ensures at least one positive value occurs.

</details>

<a id="reverse-mathematics-ex-10"></a>

**Exercise 10.** Does the omega-model separation establish that every model of the base omits a path through T? Explain.

<details>
<summary>Hint 1</summary>

A nonprovability argument needs one countermodel.

</details>

<details>
<summary>Hint 2</summary>

Compare REC with the full second sort.

</details>

<details>
<summary>Solution</summary>

No. The structure with second sort REC is one countermodel to the universal path principle. The full second sort contains a path through T by classical König’s lemma and is also a model of the base. The separation shows that the base axioms do not force every model to contain such a set. It does not show that adding the path is inconsistent or that no model of the base can satisfy weak König’s lemma.

</details>

## Sources

The original Big Five overview, five exercises and their arguments are retained. Stephen G. Simpson, *Subsystems of Second Order Arithmetic*, second edition, is the reference for the exact standard-code equivalences, the later strictness separations and the stated Kondô calibration over the specified base. The complete local proofs here are the computable-tree omega-model separation, arithmetical-comprehension implication, injection-range calibration and associate version of the Cantor bounded-range reversal. The original interval and Bolzano–Weierstrass arguments remain explicitly distinguished from a full development of all coding lemmas in the reference.

## Summary

A reversal is two implications over a named base and a named coding of objects. A computable infinite tree without computable paths separates the first two systems through the omega-model REC. Arithmetical comprehension supplies the set of infinitely extendible nodes and hence a path. Injection ranges recover finite jumps and arithmetical comprehension. Associates make a precise Cantor-space bounded-range reversal possible. Other benchmark equivalences retain their explicit reference and base, so the hierarchy is a collection of calibrated theorems rather than a claim that all classical mathematics has been proved here.
