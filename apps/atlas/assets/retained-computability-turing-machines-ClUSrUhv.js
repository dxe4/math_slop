var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: chapter-12
title: "Computability and Turing Machines"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Chapter 12: Computability and the Halting Problem

This chapter develops the classical theory of computability: Turing machines, recursive functions, the halting problem, and Rice’s theorem. These results form the boundary between what can and cannot be computed algorithmically, and they underpin the incompleteness theorems discussed in later chapters.

## Turing machines

**Definition 17.1 (Turing machine).** A *Turing machine* $M$ is a tuple $(Q, \\Sigma, \\Gamma, \\delta, q_0, q_{\\text{accept}}, q_{\\text{reject}})$ where:
- $Q$ is a finite set of states.
- $\\Sigma$ is the input alphabet, not containing the blank symbol $\\sqcup$.
- $\\Gamma$ is the tape alphabet, with $\\Sigma \\subseteq \\Gamma$ and $\\sqcup \\in \\Gamma$.
- $\\delta: Q \\times \\Gamma \\to Q \\times \\Gamma \\times \\{L, R\\}$ is the transition function (partial).
- $q_0 \\in Q$ is the start state.
- $q_{\\text{accept}}, q_{\\text{reject}} \\in Q$ are the halting states.

**Definition 17.2 (computation).** A *configuration* is a triple $(q, u, v)$ where $q \\in Q$, $u \\in \\Gamma^*$ is the tape content left of the head, and $v \\in \\Gamma^*$ is the tape content at and right of the head. A *computation* is a sequence of configurations where each follows from the previous by $\\delta$.

**Definition 17.3 (decidability).** A language $L \\subseteq \\Sigma^*$ is *decidable* if there exists a Turing machine $M$ that halts on every input $w$ and accepts iff $w \\in L$. It is *recognizable* (recursively enumerable) if there exists $M$ that accepts exactly the strings in $L$ (but may loop on non-members).

## The halting problem

**Theorem 17.4 (Turing, 1936).** The halting problem is undecidable. Specifically, the language

$$\\text{HALT} = \\{\\langle M, w \\rangle : M \\text{ halts on input } w\\}$$

is not decidable.

**Proof.** Suppose $H$ decides HALT. Construct a machine $D$ that on input $\\langle M \\rangle$ runs $H$ on $\\langle M, \\langle M \\rangle \\rangle$. If $H$ accepts, $D$ loops forever; if $H$ rejects, $D$ halts. Then $D$ halts on $\\langle D \\rangle$ iff $H$ rejects $\\langle D, \\langle D \\rangle \\rangle$ iff $D$ does not halt on $\\langle D \\rangle$, contradiction.

**Corollary 17.5.** The complement of HALT is not recognizable.

## Rice’s theorem

**Theorem 17.6 (Rice, 1953).** Let $\\mathcal{P}$ be any nontrivial property of the language recognized by a Turing machine (i.e., $\\mathcal{P}$ is neither empty nor contains all recognizable languages). Then the language

$$L_{\\mathcal{P}} = \\{\\langle M \\rangle : L(M) \\in \\mathcal{P}\\}$$

is undecidable.

**Proof sketch.** Suppose $L_{\\mathcal{P}}$ is decidable. Let $M_\\emptyset$ be a machine recognizing $\\emptyset$, and assume without loss of generality that $\\langle M_\\emptyset \\rangle \\notin L_{\\mathcal{P}}$. Let $M_{\\text{all}}$ be a machine with $L(M_{\\text{all}}) \\in \\mathcal{P}$. Given $\\langle M, w \\rangle$, construct $M'$ that on input $x$ simulates $M$ on $w$; if $M$ halts, simulate $M_{\\text{all}}$ on $x$. Then $L(M') = L(M_{\\text{all}})$ if $M$ halts on $w$, and $L(M') = \\emptyset$ otherwise. Deciding $L_{\\mathcal{P}}$ for $M'$ would decide HALT, contradiction.

## The arithmetical hierarchy

**Definition 17.7.** A relation $R \\subseteq \\mathbb{N}^k$ is $\\Sigma^0_1$ if there exists a computable relation $S$ such that

$$R(n_1, \\dots, n_k) \\iff \\exists m \\, S(n_1, \\dots, n_k, m).$$

It is $\\Pi^0_1$ if $R(n_1, \\dots, n_k) \\iff \\forall m \\, S(n_1, \\dots, n_k, m)$. Inductively, $\\Sigma^0_{n+1}$ relations are existential over $\\Pi^0_n$, and $\\Pi^0_{n+1}$ are universal over $\\Sigma^0_n$.

**Theorem 17.8.** HALT is $\\Sigma^0_1$-complete. The set of indices of total computable functions is $\\Pi^0_2$-complete.

## Common errors

**Error: confusing recognizability with decidability.** A recognizable language may not be decidable. The halting problem is recognizable but not decidable.

**Error: applying Rice’s theorem to machine properties.** Rice’s theorem applies to properties of the *language* recognized, not to properties of the machine itself (e.g., “$M$ has 5 states” is decidable).

**Error: assuming the halting problem is the only undecidable problem.** Many problems are undecidable, and reductions from HALT are the standard proof method.

## Practice exercises

**Exercise 1.** Show that the set of Turing machines that accept at least one string is recognizable.

**Solution.** Simulate $M$ on all strings in parallel (dovetailing). If $M$ accepts any string, this simulation eventually discovers it.

**Exercise 2.** Prove that the set of Turing machines that accept all strings is not recognizable.

**Solution.** Reduce $\\overline{\\mathrm{HALT}}$ to this set. Given $\\langle M,w\\rangle$, construct a machine $N$ that, on input $x$, simulates $M$ on $w$ for exactly $|x|$ steps and accepts iff no halt was seen. If $M$ never halts on $w$, then $N$ accepts every string. If $M$ halts after $t$ steps, every input of length at least $t$ is rejected. Thus $\\langle N\\rangle$ belongs to $\\mathrm{ALL}_{TM}$ exactly when $\\langle M,w\\rangle\\in\\overline{\\mathrm{HALT}}$. A recognizer for $\\mathrm{ALL}_{TM}$ would recognize $\\overline{\\mathrm{HALT}}$, impossible.

**Exercise 3.** Show that if $L$ and $\\overline{L}$ are both recognizable, then $L$ is decidable.

**Solution.** Run recognizers for $L$ and $\\overline{L}$ in parallel. Exactly one will eventually accept, deciding membership.

**Exercise 4.** State Rice’s theorem and explain why “$M$ halts on input 0” is not a counterexample.

**Solution.** “$M$ halts on input 0” is behavioral, not purely syntactic, but it is not invariant under the recognized language: two machines may both fail to accept $0$, with one halting in a reject state and the other looping. Rice's theorem as stated concerns extensional properties of $L(M)$, so it does not cover this property. A version formulated for partial functions has a different extensional domain.

**Exercise 5.** Construct a mapping reduction from HALT to the set $\\mathrm{NONEMPTY}_{TM}=\\{\\langle N\\rangle:L(N)\\neq\\emptyset\\}$.

**Solution.** Given $\\langle M,w\\rangle$, output a machine $N_{M,w}$ that ignores its input, simulates $M$ on $w$, and accepts exactly when that simulation halts. If $M$ halts on $w$, then $L(N_{M,w})=\\Sigma^*$; otherwise its language is empty. The map from codes $\\langle M,w\\rangle$ to $\\langle N_{M,w}\\rangle$ is computable, and membership is preserved. This is a complete construction rather than an appeal to unspecified encoding tiles.

## Looking backward and forward

This chapter grounded the logical foundations in concrete computation. The undecidability results connect to “Reference desk D — consistency and independence” and prepare for the incompleteness theorems in Chapter 13. The arithmetical hierarchy will reappear in the analysis of definability.
`;export{e as default};