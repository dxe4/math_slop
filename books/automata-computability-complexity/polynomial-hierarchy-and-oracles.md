
# The Polynomial Hierarchy and Oracles

An NP certificate supplies one existentially chosen string. More complicated computational claims can ask for a choice that works against every challenge, followed by another response. Alternating polynomially bounded quantifiers give the polynomial hierarchy. If the number of alternations is part of the input rather than a fixed constant of the class, quantified Boolean formulas express the full power of polynomial space.

An oracle is another way to formulate access to a difficult predicate. It returns an exact yes or no answer to a query language. Its answer is not a guessed certificate, and a negative answer need not have an NP witness. We will distinguish these meanings, prove the PSPACE-completeness of quantified Boolean truth in full, and state precisely what the resulting containments do and do not separate.

All inputs and quantified witnesses are finite binary strings. Polynomial bounds are uniform and fixed for each language, not chosen separately for each input. Machines have read-only input and polynomially bounded work tapes as in the preceding chapters. A Boolean quantifier ranges over the nonempty two-element domain $\{0,1\}$; this fact justifies later quantifier movements across formulas in which its variable does not occur freely.

## Fixed alternation defines a hierarchy

Let $\Sigma_0^P=\Pi_0^P=P$. For fixed $k\ge1$, a language is in $\Sigma_k^P$ if membership has the form
$$x\in L\quad\Longleftrightarrow\quad
\exists y_1\forall y_2\exists y_3\cdots Q_k y_k\ R(x,y_1,\ldots,y_k),$$
where each $y_i$ is a binary block of polynomially bounded length and $R$ is decidable in deterministic polynomial time. Padding and length fields permit exact polynomial block lengths without changing the class. The final quantifier alternates according to parity. The class $\Pi_k^P$ starts universally instead; negating the matrix and switching every quantifier shows that it consists exactly of complements of $\Sigma_k^P$ languages.

Thus $\Sigma_1^P=NP$ and $\Pi_1^P=coNP$. Let $PH=\bigcup_{k\ge0}\Sigma_k^P$. Adding an unused block proves the standard inclusions between successive levels. Those inclusions do not assert strictness. In particular this chapter proves neither $P\ne NP$ nor $NP\ne coNP$ nor that the hierarchy has infinitely many distinct levels.

Each fixed-level predicate is in PSPACE. Store its input, one assignment to the polynomially many quantified bits and a depth-first counter for the current quantifier. Evaluate the polynomial-time matrix at leaves. Existential nodes accept if some child accepts; universal nodes accept if both Boolean children accept. Exponential time is possible, but assignments and the depth-first stack use only polynomial space. Therefore $PH\subseteq PSPACE$, with no strictness conclusion.

**Worked example 14.1 (The order of responses).** The formula $\forall u\exists v\,(u\leftrightarrow v)$ is true: after seeing $u$, choose $v=u$. The formula $\exists v\forall u\,(u\leftrightarrow v)$ is false: whichever fixed value is chosen for $v$, the opposite value of $u$ falsifies the matrix. A separate witness for each challenge is different from one witness working for every challenge. The two formulas have the same connective matrix and different quantifier dependencies, so exchanging adjacent unlike quantifiers is not a harmless change of notation.

## Quantified Boolean truth is in PSPACE

Let TQBF contain the encodings of closed quantified Boolean formulas that evaluate to true. Use a fixed effective syntax; malformed or open inputs are rejected. A formula may have nested quantifiers or a prenex prefix followed by an ordinary Boolean matrix. Capture-avoiding bound-variable renaming makes the conventions interchangeable in polynomial size when moving a binder only past subformulas where its variable is not free.

A depth-first evaluator stores the formula, a current Boolean assignment and a recursion position. At an existential binder it tries false and then true until a successful branch appears. At a universal binder it checks both branches. On returning, the old binding is restored, so nested reuse of a variable name cannot corrupt an outer assignment. The quantifier depth and formula size bound both stored assignment information and control frames polynomially. Every recursive call reduces the remaining syntax, so evaluation terminates. Hence TQBF is in PSPACE.

This algorithm does not materialise the full binary assignment tree. Storing all branches simultaneously could take exponential space. It also does not claim polynomial time: even a simple depth-first search can examine exponentially many assignments. The proof is about maximum simultaneous work storage.

## A polynomial formula for exponentially long reachability

Fix an arbitrary language $L\in PSPACE$ and one deterministic machine $M$ deciding it in polynomial space. For input $x$ choose a polynomially bounded configuration-code length $m$ large enough to include every possible configuration of its run. State, work contents, head positions and input position are included. Every valid configuration is one $m$-bit string, so there are at most $2^m$ of them. Let $I_x$ be the initial code and $\operatorname{Acc}_x(D)$ test validity and accepting state.

There are polynomial-size Boolean formulas $\operatorname{Valid}_x(C)$ and $\operatorname{Step}_x(C,D)$ for code validity and one machine transition. One explicit construction enumerates the polynomially many possible work-head and input-head positions and the fixed finite transition cases. A case checks the old control and scanned symbols, the new control and head positions, the one written cell and equality of all other cells. There are only a fixed number of tapes, so the number of position combinations is polynomial in the input length and space bound. Each equality and unchanged-cell check also has polynomial length. Taking their disjunction gives a formula, not an exponentially expanded circuit. The input symbols of $x$ are fixed constants in it.

Use vector equality as the conjunction of its $m$ bit equalities. Define $F_0(A,B)$ by
$$\operatorname{Valid}_x(A)\land\operatorname{Valid}_x(B)\land
(A=B\lor\operatorname{Step}_x(A,B)).$$
For $i\ge1$, with fresh $m$-bit vectors $Z,X,Y$, define
$$F_i(A,B)=\exists Z\,[\operatorname{Valid}_x(Z)\land
\forall X\forall Y\,(
((X=A\land Y=Z)\lor(X=Z\land Y=B))\to F_{i-1}(X,Y))].$$
Every occurrence of a vector quantifier abbreviates $m$ separate Boolean quantifiers. All recursively introduced bound variables are fresh. Most importantly, the recursive formula occurs **once**. Writing two separate copies for the two halves would double size at every level and fail to give a polynomial reduction.

**Lemma 14.2 (Truth of the reachability formula).** $F_i(A,B)$ is true exactly when valid configurations $A,B$ are connected by a path of at most $2^i$ transitions.

*Proof.* The base formula gives exactly valid equal endpoints or one valid step. Suppose the assertion holds at $i-1$. If a path of length at most $2^i$ exists, choose its midpoint after at most $2^{i-1}$ edges, using its target if the path is shorter. Both halves have length at most $2^{i-1}$. Choose that valid midpoint for $Z$. For arbitrary $X,Y$, the antecedent matters only for the two specified ordered pairs, and induction makes the corresponding half-path formula true. All other pairs make the implication vacuous, so the universal formula holds.

Conversely, a witness $Z$ makes the universal implication true for $X=A,Y=Z$ and for $X=Z,Y=B$. Hence both recursive half formulas are true. Induction gives two valid paths of the required lengths; concatenation gives the claimed path. This also proves endpoint validity. No other universally chosen pairs impose an unintended reachability demand. ∎

For $i=m$, the formula tests a length bound $2^m$. Any accepting reachable configuration has a simple path of at most $2^m-1$ edges, because repeated configurations can be removed. Therefore
$$\Phi_x=\exists D\,[\operatorname{Acc}_x(D)\land F_m(I_x,D)]$$
is true exactly when $M$ accepts $x$.

Each level adds only fresh vectors and polynomial-size equality and validity formulas, with one copy of the earlier formula. There are $m$ levels, and $m$ is polynomial in $|x|$. The base transition formula is polynomial as well. Variable names encoded in binary add at most a polynomial factor. Thus $\Phi_x$ has polynomial length and a polynomial-time writer can construct it recursively without ever constructing an exponential configuration graph.

If a prenex target syntax is desired, move the fresh recursive binders out through their Boolean contexts after renaming. None binds a variable in those surrounding contexts, and Boolean quantifier domains are nonempty, so these standard equivalences preserve truth without duplicating the matrix. The size stays polynomial. Every output is a closed valid formula. Since the original PSPACE language $L$ was arbitrary, this proves PSPACE-hardness.

**Theorem 14.3.** TQBF is PSPACE-complete under polynomial-time many-one reductions.

*Proof.* Membership was proved by depth-first evaluation, and hardness by the formula $x\mapsto\Phi_x$ above. Both directions of its truth equivalence and its polynomial construction size were established explicitly. ∎

**Worked example 14.4 (The universal pair selector).** On the path $a\to b\to c$, $F_1(a,c)$ chooses $Z=b$. Its universal pair test asks for $F_0(a,b)$ and $F_0(b,c)$, both true by an edge. The pair $(a,c)$ itself makes the antecedent false unless it coincides with a chosen half, so it is not incorrectly required to be a one-step edge. A midpoint that does not connect both halves fails one of the two selected universal pairs. This is how one recursive occurrence enforces two semantic obligations without two syntactic copies.

## Fixed-level complete quantified formulas

For fixed $k$, let $QBF_k$ be true formulas with at most $k$ alternating blocks starting existentially and an arbitrary polynomially represented Boolean formula matrix. It is in $\Sigma_k^P$ by its own prefix. Conversely take a $\Sigma_k^P$ predicate. Compile its polynomial-time matrix computation into a polynomial circuit on the witness blocks, as in Cook–Levin. Introduce gate variables with a conjunction $E$ expressing all gate equivalences and output bit $g$.

If the last original block is existential, append the gate variables to that block and use matrix $E\land g$. A witness assignment to the original blocks has an accepting computation exactly when that uniquely determined gate assignment exists with output one. If the last block is universal, append gate variables universally and use matrix $E\to g$. Inconsistent gate assignments satisfy the implication vacuously; the unique consistent assignment tests exactly the actual output. Thus in either case no extra alternation is introduced. This proves $\Sigma_k^P$-hardness and completeness of $QBF_k$. The matrix is an arbitrary Boolean formula: casually insisting on a restricted normal form at the wrong final quantifier can change the class.

The difference from TQBF is that $k$ is a constant defining the problem family. Allowing an input to contain an unbounded number of blocks is precisely what the PSPACE reduction uses. A long polynomial-size quantified formula does not automatically belong to one fixed hierarchy level.

## Oracles answer both signs exactly

For a fixed language $A$, an oracle machine may write a query $q$ and receive the correct bit for $q\in A$ in one oracle-answer step. Writing the query still costs time. Queries can depend on earlier answers. Define $P^A$ and $NP^A$ with deterministic and nondeterministic polynomial-time query machines respectively. The oracle is not assumed efficiently computable by an ordinary machine.

**Worked example 14.5 (A negative answer is useful).** A deterministic SAT-oracle machine decides UNSAT with one query: ask whether $F$ is satisfiable and accept exactly when the answer is no. This does not prove UNSAT lies in NP. An NP certificate supplies positive evidence checked by an ordinary polynomial algorithm; an oracle supplies exact negative answers as part of its model. Confusing the two would turn a model assumption into a theorem about certificates.

There is a useful full transcript argument: $P^{SAT}\subseteq\Sigma_2^P\cap\Pi_2^P$. For a polynomial-time oracle computation, existentially guess its answer transcript and satisfying assignments for all queries answered yes. Replay the deterministic computation to reconstruct its adaptive queries and verify that these positive certificates work. Universally quantify candidate assignments for every query answered no and require each to falsify its query. Bundle the polynomially many positive witnesses into one existential block and the negative challenges into one universal block. The matrix is polynomial time and additionally checks that the replay accepts. A truthful accepting oracle run supplies the existential data; conversely these checks force every transcript answer correct, so any accepted transcript is a genuine accepting run. Hence the language is in $\Sigma_2^P$. The class $P^{SAT}$ is closed under complement by flipping its final answer, so it is also in $\Pi_2^P$.

The standard broader characterisation $\Sigma_{k+1}^P=NP^{QBF_k}$ is a cited oracle-characterisation theorem; its full adaptive-query proof is not supplied here. Baker, Gill and Solovay's cited relativisation theorem gives oracles for which P and NP coincide and other oracles for which they differ. Those oracle worlds do not decide the unrelativised equality. They show why a proof method applying uniformly to every oracle cannot alone resolve that question in one direction.

## Collapse statements are conditional

If $\Sigma_k^P=\Pi_k^P$ for some $k\ge1$, then $PH=\Sigma_k^P$. To see this, $\Sigma_k^P$ is closed under adding a polynomially bounded existential block by merging it into its first existential block. Under the assumed equality it is also closed under adding a universal block, using the universal-first representation. Starting with a polynomial-time matrix and wrapping any fixed number of bounded quantifier blocks therefore stays in the same class. This absorbs every finite level of PH; the reverse inclusion is its definition.

In particular if $P=NP$, then $P=coNP$, and bounded existential or universal quantification of a P predicate remains in P. Peeling any fixed finite prefix from the inside out collapses PH to P. These are implications, not evidence that their hypotheses hold. The chapter has proved complete problems and containments while keeping all unresolved separations unresolved.

## Exercises

### Exercise 1
<a id="polynomial-hierarchy-and-oracles-ex-1"></a>
Evaluate $\exists u\forall v\,(u\lor v)$ and describe a winning witness.

<details>
<summary>Hint 1</summary>

Try a witness that makes the matrix independent of the challenge.

</details>
<details>
<summary>Hint 2</summary>

Taking $u=1$ makes the disjunction true for both values of $v$.

</details>
<details>
<summary>Solution</summary>

The formula is true. Choose $u=1$ before seeing $v$. Then $1\lor0=1$ and $1\lor1=1$, so every challenge succeeds. This is one fixed witness working against both values, rather than two unrelated choices after the universal move. A witness $u=0$ would fail at $v=0$, but the existential quantifier needs only one successful witness. The calculation illustrates the required quantifier order, not a probabilistic success rate.

</details>

### Exercise 2
<a id="polynomial-hierarchy-and-oracles-ex-2"></a>
Show that $\forall u\exists v\,(u\leftrightarrow v)$ and $\exists v\forall u\,(u\leftrightarrow v)$ differ in truth.

<details>
<summary>Hint 1</summary>

The first existential choice may depend on the preceding value.

</details>
<details>
<summary>Hint 2</summary>

For the second formula challenge a fixed $v$ with its opposite.

</details>
<details>
<summary>Solution</summary>

The universal-first formula is true by choosing $v=u$. For the existential-first formula, fix either proposed value $v$. The universal choice $u=1-v$ makes equivalence false. Therefore no fixed $v$ works, and the second formula is false. A complete explanation names the dependency allowed in the first case and rules out both proposed values in the second. Merely saying that quantifiers do not commute would not compute these two instances.

</details>

### Exercise 3
<a id="polynomial-hierarchy-and-oracles-ex-3"></a>
Explain why depth-first quantified-formula evaluation uses polynomial space despite exponentially many assignments.

<details>
<summary>Hint 1</summary>

Only the currently explored branch needs an assignment.

</details>
<details>
<summary>Hint 2</summary>

Return from one child before evaluating the other.

</details>
<details>
<summary>Solution</summary>

Store the input formula, the current binding for each active quantified variable and a stack position indicating which child is being evaluated. Each has polynomial size in the formula length. After the first Boolean value returns, retain its one-bit result, restore the earlier bindings and reuse the workspace for the second value. The total number of leaves can be exponential, increasing time, but all leaves are not stored together. This establishes a space bound rather than a polynomial-time decision procedure.

</details>

### Exercise 4
<a id="polynomial-hierarchy-and-oracles-ex-4"></a>
Prove the midpoint formula $F_i$ still handles a path shorter than $2^{i-1}$.

<details>
<summary>Hint 1</summary>

Choose the target as midpoint.

</details>
<details>
<summary>Hint 2</summary>

The second half can have length zero because the base includes equality.

</details>
<details>
<summary>Solution</summary>

If a path from $A$ to $B$ has length at most $2^{i-1}$, take $Z=B$. The first recursive requirement is that path itself, and the second is the length-zero path from $B$ to $B$. Induction accepts both. The universal selector demands only those two pairs, and all other pairs have false antecedent. Without equality in the base formula, a short path ending at a sink could fail to admit a padded second half, so the at-most formulation is essential.

</details>

### Exercise 5
<a id="polynomial-hierarchy-and-oracles-ex-5"></a>
Why would the naive formula $G_i(A,B)=\exists Z[G_{i-1}(A,Z)\land G_{i-1}(Z,B)]$ fail as a polynomial reduction when $i$ is polynomial?

<details>
<summary>Hint 1</summary>

Count recursive copies in its syntax.

</details>
<details>
<summary>Hint 2</summary>

Its size recurrence doubles the earlier size at every level.

</details>
<details>
<summary>Solution</summary>

Even with only linear equality overhead, its length satisfies $S_i\ge2S_{i-1}$, so $S_i\ge2^iS_0$. With $i=m$ polynomial in the input, this can be exponential rather than polynomial. The semantic midpoint idea is correct, but its direct written formula is too large for the required reduction. The universal pair selector keeps one recursive occurrence and makes the size additive per level. A hardness proof must establish both logical correctness and efficient construction size.

</details>

### Exercise 6
<a id="polynomial-hierarchy-and-oracles-ex-6"></a>
Explain why the PSPACE hardness proof needs no canonical unique accepting configuration.

<details>
<summary>Hint 1</summary>

The outer vector $D$ is existentially quantified.

</details>
<details>
<summary>Hint 2</summary>

The predicate $\operatorname{Acc}_x(D)$ checks any valid accepting endpoint.

</details>
<details>
<summary>Solution</summary>

The final formula asks for some valid configuration $D$ with accepting state that is reachable from the initial code. Any actual accepting run supplies its endpoint, and any satisfying endpoint supplies an accepting run by the reachability lemma. Therefore the machine need not erase its work tape or move heads to fixed final locations. Such a normalization would also be possible, but it would require its own simulation argument. The existential endpoint avoids that additional obligation without changing the polynomial bound.

</details>

### Exercise 7
<a id="polynomial-hierarchy-and-oracles-ex-7"></a>
Why are gate variables universal, with matrix $E\to g$, when completing a universal last block of $QBF_k$?

<details>
<summary>Hint 1</summary>

Each original input assignment has exactly one consistent gate assignment.

</details>
<details>
<summary>Hint 2</summary>

An inconsistent gate assignment must not create an artificial failure.

</details>
<details>
<summary>Solution</summary>

For fixed original witnesses, $E$ holds for exactly the actual circuit evaluation. Under $\forall z(E\to g)$, every inconsistent $z$ makes the implication true and the one consistent $z$ tests the actual output bit. Thus the universal condition is equivalent to that output being one. Using $E\land g$ universally would demand even inconsistent gate assignments satisfy $E$, which is impossible. Adding existential gates after the universal block would instead introduce an extra alternation; the stated construction preserves the fixed level.

</details>

### Exercise 8
<a id="polynomial-hierarchy-and-oracles-ex-8"></a>
Describe a deterministic SAT-oracle algorithm for UNSAT and explain why this is not an ordinary NP certificate argument.

<details>
<summary>Hint 1</summary>

One exact oracle answer suffices.

</details>
<details>
<summary>Hint 2</summary>

Accept on the answer no.

</details>
<details>
<summary>Solution</summary>

Query the supplied formula to SAT and accept precisely when the oracle says it has no satisfying assignment. The oracle model promises that this negative answer is exact, so the procedure decides UNSAT with one query. An NP verifier has no such external answering power: it must check a polynomial witness using ordinary deterministic polynomial work. Nothing here constructs short witnesses for all unsatisfiable formulas or proves NP equals coNP. It is an algorithm in a stronger explicitly defined query model.

</details>

### Exercise 9
<a id="polynomial-hierarchy-and-oracles-ex-9"></a>
State what follows from $\Sigma_2^P=\Pi_2^P$, and separate the conclusion from an unconditional claim.

<details>
<summary>Hint 1</summary>

The common class is closed under both kinds of additional bounded block.

</details>
<details>
<summary>Hint 2</summary>

Apply the proved collapse argument with $k=2$.

</details>
<details>
<summary>Solution</summary>

Under that hypothesis, adding an existential block merges into a $\Sigma_2$ representation, while adding a universal block merges into its equal $\Pi_2$ representation. Iterating absorbs every fixed finite prefix, so $PH=\Sigma_2^P$. This is a conditional theorem. The chapter has not established the equality of those two levels, and the existence of complete quantified-formula problems does not establish it either. A complete answer states the premise along with the conclusion rather than reporting a collapsed hierarchy as known fact.

</details>

### Exercise 10
<a id="polynomial-hierarchy-and-oracles-ex-10"></a>
Does TQBF being PSPACE-complete prove $PH\ne PSPACE$ or $P\ne NP$? Give the exact missing inference.

<details>
<summary>Hint 1</summary>

Completeness supplies reductions and a space upper bound.

</details>
<details>
<summary>Hint 2</summary>

It supplies no lower bound excluding the smaller classes.

</details>
<details>
<summary>Solution</summary>

No. Completeness says every PSPACE language reduces to TQBF in polynomial time and TQBF itself is in PSPACE. It does not show that TQBF lies outside PH or P, and it does not supply a language in NP outside P. Establishing either claimed separation would require an additional lower-bound or nonmembership argument. The ability to write arbitrarily many quantifier blocks describes a complete representation; it does not by itself prove that no fixed-level method or polynomial algorithm can decide that representation.

</details>

## Sources

New exposition for this book, building on its preserved configuration-graph and Cook–Levin sources. Sanjeev Arora and Boaz Barak, [*Computational Complexity: A Modern Approach*](https://theory.cs.princeton.edu/complexity/), is the benchmark for the hierarchy and cited oracle characterisation. Michael Sipser's [official MIT lecture index](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html) includes PSPACE-completeness. The oracle-relativisation input is Theodore Baker, John Gill and Robert Solovay, [“Relativizations of the P =? NP Question”](https://doi.org/10.1137/0204037), *SIAM Journal on Computing* 4 (1975), 431–442. Its full oracle constructions are cited rather than claimed here. The QBF reduction, evaluation and fixed-level formula arguments are proved in the chapter.

## Summary

Fixed polynomially bounded quantifier alternation defines PH, while arbitrary closed quantified Boolean formulas are PSPACE-complete. The full reduction keeps a single recursive reachability subformula and verifies polynomial size as well as truth. Gate variables can be quantified without adding a fixed-level alternation when their consistency condition is used correctly. Oracles supply exact answers of both signs; they are not NP witnesses. Collapse statements retain their hypotheses, and no open unrelativised separation is asserted.
