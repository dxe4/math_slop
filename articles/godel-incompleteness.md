
# Gödel Incompleteness: What Formal Arithmetic Cannot Settle

**Before reading.** Read [Predicates, Quantifiers and Structures](../books/introduction-to-logic-and-set-theory/predicates-quantifiers-structures.md), [Division, Euclid, and Bezout Certificates](../books/number-theory-proof-reference/division-euclid-bezout.md) and [Induction](../books/introduction-to-proof/induction.md). These are preparation for the ideas used below.

Could one choose explicit axioms and mechanical proof rules that settle every arithmetic question without contradiction? Gödel's incompleteness theorems show that any consistent, effectively presented theory capable of expressing enough elementary arithmetic must leave some sentence undecided. The result is precise; many dramatic slogans attributed to it are not.

The discussion assumes comfort with quantifiers, first-order theories, and the
difference between syntax and semantics. Computability language is motivated
below, but a first course in logic is the best prerequisite.

## Four notions that must be separated

A formal theory $T$ consists of a language, axioms, and inference rules.

- $T$ is **consistent** if it proves no contradiction.
- \(T\) is **syntactically complete** if for every sentence \(\phi\), either
  \(T\vdash\phi\) or \(T\vdash\neg\phi\).
- \(T\) is **sound for the standard natural numbers** if every arithmetic
  sentence it proves is true about \(\mathbb N\).
- $T$ is **effectively axiomatized** if an algorithm can enumerate its axioms, and therefore enumerate its formal proofs.

Consistency is weaker than soundness. A consistent theory could prove some false statement about the intended natural numbers while having a nonstandard model in which that statement holds.

There is also Gödel's **completeness theorem for first-order logic**: every sentence true in every model of a set of axioms is formally derivable from those axioms. It does not conflict with incompleteness. The completeness theorem relates semantic consequence to proof; incompleteness says a particular arithmetic theory has multiple models disagreeing about some sentence.

## Arithmetic can talk about syntax

A formula is a finite string, and a proof is a finite sequence of strings. Assign each symbol a number and encode sequences using arithmetic; this is **Gödel numbering**. Relations such as

\[
\operatorname{Proof}_T(p,q)
=\text{“\(p\) codes a \(T\)-proof of the sentence coded by \(q\)”}
\]

can be represented by arithmetic formulas when $T$ is effective. Define

\[
\operatorname{Prov}_T(q)
:\!\iff \exists p\,\operatorname{Proof}_T(p,q).
\]

The theory can now express facts about its own proofs without adding a word like "proof" to its basic language.

The key self-reference tool is the **diagonal lemma**: for any formula $\psi(x)$ with one free variable, there is a sentence $G$ such that

\[
T\vdash G\leftrightarrow\psi(\ulcorner G\urcorner).
\]

Here \(\ulcorner G\urcorner\) denotes the numeral naming \(G\)'s Gödel number.
The construction is analogous to a program obtaining its own source code, but
it is an exact syntactic theorem rather than a linguistic paradox.

Choose \(\psi(x)=\neg\operatorname{Prov}_T(x)\). Then \(G\) satisfies

\[
T\vdash G\leftrightarrow
\neg\operatorname{Prov}_T(\ulcorner G\urcorner).
\]

Informally, $G$ says, "I have no proof in $T$."

## Worked proof skeleton: why \(G\) cannot be proved

**Worked example.**

Assume \(T\) is consistent and nevertheless \(T\vdash G\). An actual proof
has some natural-number code \(n\). Because checking a finite proof is
elementary arithmetic, \(T\) can verify
\(\operatorname{Proof}_T(n,\ulcorner G\urcorner)\) and hence prove
\(\operatorname{Prov}_T(\ulcorner G\urcorner)\). But the defining equivalence
lets \(T\) also prove
\(\neg\operatorname{Prov}_T(\ulcorner G\urcorner)\), contradicting
consistency. Therefore \(T\nvdash G\).

Showing that \(T\nvdash\neg G\) for this exact sentence uses a stronger
correctness condition such as \(\omega\)-consistency. Rosser refined the
construction: a **Rosser sentence** compares a proof of itself with shorter
proofs of its negation. This yields the modern first theorem using mere
consistency.

**First incompleteness theorem.** Every consistent, effectively axiomatized
theory that represents enough arithmetic has a sentence \(R\) for which neither
\(R\) nor \(\neg R\) is provable in the theory.

The phrase "enough arithmetic" can be made exact; familiar systems such as Peano arithmetic and ZFC qualify. The theorem does not apply to every formal system.

## The second theorem

The consistency of $T$ can itself be expressed arithmetically, for example as

\[
\operatorname{Con}(T)
:\!\iff\neg\operatorname{Prov}_T(\ulcorner0=1\urcorner).
\]

Under standard derivability conditions, the reasoning behind the first theorem
can be formalized inside \(T\): roughly, \(T\) proves that if it is consistent,
then its Gödel sentence holds. If \(T\) also proved
\(\operatorname{Con}(T)\), it would prove \(G\), which the first argument rules
out when \(T\) is consistent.

**Second incompleteness theorem.** A consistent, effectively axiomatized theory containing enough arithmetic cannot prove its own formally expressed consistency.

This does not say consistency proofs are impossible. A stronger theory may prove the consistency of a weaker one, but then the stronger theory's consistency remains a new question. Nor does it mean mathematicians cannot have evidence for consistency; it limits what one qualifying system can certify internally.

## Counterexamples to overbroad versions

Presburger arithmetic, which uses addition but not multiplication of variables, is complete and decidable. The first-order theory of real closed fields is also complete and decidable. These systems avoid the theorem's full arithmetic strength.

**True arithmetic**, the set of all first-order sentences true in the standard natural numbers, is complete and consistent, but it is not effectively axiomatizable. This shows why effectiveness is essential.

A finite inconsistent theory can prove every sentence, so "proves every statement" is worthless without consistency. Conversely, incompleteness does not imply that any specific unsolved problem, such as the Riemann hypothesis, is independent of today's axioms.

## Computability connection

Suppose a consistent effective arithmetic theory were complete. To decide any
sentence \(\phi\), enumerate all \(T\)-proofs until a proof of \(\phi\) or
\(\neg\phi\) appears; completeness guarantees termination. Thus completeness
would make the theory decidable.

Arithmetic can encode whether programs halt. If the theory correctly settled every such encoded instance, it would decide the halting problem, which no algorithm can do. This is not the standard proof of Gödel's theorem, but it reveals the shared boundary: sufficiently expressive formal systems can simulate computation, including computations whose behavior cannot be decided uniformly.

## Common traps

- "Undecidable in $T$" does not mean meaningless or unknowable by every stronger system.
- Adding an undecidable sentence as an axiom does not complete the theory; new undecidable sentences arise.
- Incompleteness concerns formal theories, not the reliability of ordinary finite calculations.
- The theorem does not prove that all truths are subjective.
- A theory cannot establish its own consistency under the theorem's hypotheses; this is not the same as proving it inconsistent.

## Exercises

<a id="deep-dive-godel-incompleteness-ex-1"></a>

### Exercise 1

1. Explain why soundness implies consistency.

<details>
<summary>Hint 1</summary>

Soundness means every theorem of the theory is true in the intended model.
</details>

<details>
<summary>Hint 2</summary>

A contradiction is false there, so ask whether a sound theory could prove it.
</details>

<details>
<summary>Solution</summary>

A contradiction is false in the standard model, so a sound theory cannot prove one.

</details>

<a id="deep-dive-godel-incompleteness-ex-2"></a>

### Exercise 2

2. Why can all formal proofs of an effectively axiomatized theory be enumerated even if its theorems are undecidable?

<details>
<summary>Hint 1</summary>

Enumerating proofs asks for a list of successful finite certificates, not a decision about every sentence.
</details>

<details>
<summary>Hint 2</summary>

Check each finite candidate proof mechanically; absence of a proof need not be detectable.
</details>

<details>
<summary>Solution</summary>

Proof validity is a finite, mechanically checkable condition; enumeration need not tell us when a sentence has no proof.

</details>

### Further exercises

3. Which hypothesis fails for true arithmetic?
4. Reconcile first-order completeness with arithmetic incompleteness in one paragraph.
5. Why does adding a Gödel sentence $G_{T}$ to $T$ not permanently solve incompleteness?

### Answers


3. Effective axiomatizability: there is no algorithm enumerating exactly all standard arithmetic truths.
4. First-order completeness says every consequence shared by all models is provable; an incomplete arithmetic theory has nonstandard models that disagree on an undecided sentence, so neither it nor its negation holds in all models.
5. If the extension is consistent and effective and still contains enough arithmetic, the theorem applies again and constructs a new undecidable sentence for the extension.

## Where this leads

Incompleteness links proof theory, model theory, computability, and type theory. Modern work asks not only what is provable, but which axioms are required, how proof strength is measured, and how formal verification can give extraordinarily high assurance while keeping its trusted assumptions explicit.
