var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: undecidability-and-reducibility
title: "Diagonalization, Undecidability, and Reducibility"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Diagonalization, Undecidability, and Reducibility

Undecidability is a theorem about the absence of any total correct algorithm under a formal model. It is not evidence that typical instances are hard, that no useful semi-algorithm exists, or that a particular implementation timed out. This chapter proves the core impossibility results and turns mapping reductions into a disciplined transport mechanism.

## 1. Countability and diagonal form

Finite words over a finite alphabet are countable: order them first by length, then lexicographically. Therefore machines and programs, having finite descriptions, are countable. For a nonempty finite alphabet, the word set is countably infinite, and its languages are uncountable because they correspond to infinite binary membership sequences. Hence most such languages are not decidable or even recognizable. For the empty alphabet, $\\Sigma^{\\ast}=\\{\\varepsilon\\}$ has only two languages, so the uncountability conclusion does not apply.

This counting proof establishes existence but usually gives no natural example. Diagonalization constructs a language disagreeing with the $i$th machine on the $i$th encoded input.

## 2. The acceptance problem

Let

$A_{\\mathrm{TM}}=\\{\\langle M,w\\rangle: M\\text{ accepts }w\\}$.

It is recognizable: a universal machine simulates $M$ on $w$ and accepts if $M$ accepts. It is not decidable.

Assume decider $H$ for $A_{\\mathrm{TM}}$. Build machine $D$ that on description $\\langle M\\rangle$ runs $H(\\langle M,\\langle M\\rangle\\rangle)$ and accepts exactly when $H$ rejects. Evaluate $D$ on $\\langle D\\rangle$. If $H$ says $D$ accepts itself, $D$ rejects; if $H$ says it does not, $D$ accepts. Both contradict correctness. Therefore $H$ cannot exist.

The construction needs a valid encoding and self-application, not a mystical program “knowing itself.” Its finite description is ordinary input data.

## 3. Halting and complements

The halting problem

$HALT_{\\mathrm{TM}}=\\{\\langle M,w\\rangle: M\\text{ eventually halts on }w\\}$

is recognizable by simulation and undecidable. Reduce $A_{\\mathrm{TM}}$ to it: given $\\langle M,w\\rangle$, construct machine $N$ that simulates $M(w)$, halts if $M$ accepts, and loops if $M$ rejects or loops. Then $N$ halts on empty input exactly when $M$ accepts $w$.

The complement of $A_{\\mathrm{TM}}$ is not recognizable. If both it and $A_{\\mathrm{TM}}$ were recognizable, dovetailing would decide $A_{\\mathrm{TM}}$, contradicting the theorem. Thus recognizable languages are not closed under complement.

## 4. Mapping reductions

For languages $A,B$, write $A \\le_{m}  B$ when a total computable function $f$ satisfies

$x \\in A \\iff f(x) \\in B$.

The direction reads: solve $A$ using a solver for $B$. Therefore:

- if $A \\le_{m}  B$ and $B$ is decidable, then $A$ is decidable;
- if $A \\le_{m}  B$ and $A$ is undecidable, then $B$ is undecidable;
- if $A \\le_{m}  B$ and $B$ is recognizable, then $A$ is recognizable.

To prove target $B$ undecidable, reduce a known undecidable $A$ **to** $B$. Reversing the arrow proves nothing useful about $B$.

A reduction proof has four parts: define $f$ on every input, prove it computable and terminating, prove both directions of membership equivalence, and handle malformed encodings.

## 5. Machine-language properties

Consider $E_{\\mathrm{TM}}=\\{\\langle M\\rangle:L(M)=\\varnothing\\}$. Reduce $A_{\\mathrm{TM}}$ to its complement. Given $\\langle M,w\\rangle$, construct $N$ that on any input simulates $M(w)$ and accepts if that simulation accepts. If $M$ accepts $w$, then $L(N)=\\Sigma^{\\ast} $; otherwise $L(N)=\\varnothing$. Thus deciding emptiness would decide $A_{\\mathrm{TM}}$.

Universality, finiteness, equivalence, and many other semantic properties of machine languages are undecidable. The construction wraps a fixed computation inside behavior selected by its outcome.

## 6. Rice's theorem

**Theorem 17.1 (Rice's).** Every nontrivial extensional property of recognizable languages is undecidable from a Turing-machine description. Extensional means it depends only on $L(M)$, not syntax or runtime. Nontrivial means some recognizable language has it and some does not.

Suppose first that the empty language does not have the property, and choose a recognizable witness language $A$ that does. Given $\\langle M,w\\rangle$, construct $N$ that, on input $y$, simulates $M(w)$ and begins recognizing $A$ on $y$ only after $M(w)$ accepts. Then $L(N)=\\varnothing$ if $M(w)$ never accepts and $L(N)=A$ if it does. A decider for the property would therefore decide $A_{TM}$. If the empty language has the property, apply the same construction to the complementary nontrivial property “does not have the property.” This proves the theorem without requiring a machine to change previously accepted words.

Rice's theorem does not cover syntactic questions such as “does this description contain ten states?” or all operational questions such as a fixed bounded step count. It also does not say the property is unrecognizable; recognizability needs separate analysis.

## 7. Post correspondence

An instance of the Post correspondence problem is a finite list of pairs $(u_i,v_i)$. Ask whether some nonempty index sequence makes concatenated tops and bottoms equal. PCP is recognizable by enumerating finite sequences and checking equality, but undecidable by reduction from computation histories.

The history construction encodes successive configurations as strings and uses tiles to enforce local step consistency. A matching sequence exists exactly when an accepting computation exists. This is a bridge from machine behavior to combinatorial word equations and then to grammar and logic undecidability results.

## 8. Fixed parameters and bounded variants

Many undecidable questions become decidable under a finite bound. “Does $M$ halt within $t$ steps?” is decidable by simulation for exactly $t$ steps. “Does a PCP instance have a match of length at most $k$?” is finite search. When the bound is part of binary input, complexity may still be high, but decidability changes.

Do not infer an unbounded solution by repeatedly increasing a timeout: members may eventually be found, while nonmembers never receive a conclusive stage.

## 9. Reduction audit

- Identify source and target languages before constructing anything.
- Make the transformer total, including malformed inputs.
- Prove $yes \\to  yes$ and $no \\to  no$, not merely one implication.
- Distinguish many-one, Turing, polynomial-time, and approximation reductions.
- An undecidable superclass may contain decidable restricted fragments.
- Undecidable does not mean random, paradoxical, or impossible to approximate in practice.

## Exercises with complete solutions

### 1. Countable machines

Why are machine descriptions countable?

**Solution.** They are finite words over a finite alphabet. Length-lexicographic order enumerates every such word; invalid descriptions can be skipped or assigned defaults.

### 2. Uncountable languages

Why are languages over $\\{0,1\\}$ uncountable?

**Solution.** Enumerate words $w_0,w_1,...$. Each language determines an infinite bit sequence by membership. Cantor's diagonal argument shows the set of infinite bit sequences is uncountable.

### 3. Recognizing acceptance

Construct a recognizer for $A_{\\mathrm{TM}}$.

**Solution.** Parse $\\langle M,w\\rangle$, simulate $M$ on $w$, accept if it enters accept, reject if it explicitly rejects, and otherwise continue. Members are eventually accepted.

### 4. Diagonal contradiction

If $D$ accepts exactly when $H$ says its input machine does not accept itself, what happens on $\\langle D\\rangle$?

**Solution.** $D$ accepts iff $H$ says $D$ does not accept, while correctness of $H$ says the opposite equivalence. Either Boolean outcome contradicts itself.

### 5. Reduction direction

To prove new problem $B$ undecidable using $A_{\\mathrm{TM}}$, which direction is required?

**Solution.** Prove $A_{\\mathrm{TM}}\\le_m B$. A decider for $B$ composed with the reduction would decide $A_{\\mathrm{TM}}$, impossible.

### 6. Transitivity

Prove mapping reducibility is transitive.

**Solution.** If $x \\in A \\iff f(x) \\in B$ and $y \\in B \\iff g(y) \\in C$, then $x \\in A \\iff g(f(x)) \\in C$. Composition of total computable functions is total computable.

### 7. Complement transfer

If $A \\le_{m}  B$, prove $complement A \\le_{m}  complement B$.

**Solution.** The same $f$ works because $x \\notin A$ iff $f(x) \\notin B$. Total computability is unchanged.

### 8. Empty-language wrapper

In Section 5, what is $L(N)$ if $M(w)$ loops?

**Solution.** On every input, $N$ waits forever for $M(w)$ to accept, so it accepts no input. Therefore $L(N)=\\varnothing$.

### 9. Rice boundary

Does Rice's theorem prove “has at most twenty states” undecidable?

**Solution.** No. That is a decidable syntactic property of the finite description and can differ between machines recognizing the same language, so it is not extensional.

### 10. Bounded halting

Why is halting within $t$ steps decidable?

**Solution.** Simulate exactly $t$ transitions or until halting. Both cases finish after a finite prescribed amount of work.

### 11. PCP recognition

Why is PCP recognizable?

**Solution.** Enumerate all nonempty finite index sequences by length, concatenate their top and bottom strings, and accept when equal. Any solution appears at a finite stage.

### 12. Timeout logic

Why can increasing timeouts recognize halting but not decide it?

**Solution.** A halting run eventually lies within some timeout and is found. A nonhalting run fails every finite timeout, but no particular failure proves that all later bounds fail, so rejection never becomes conclusive.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};