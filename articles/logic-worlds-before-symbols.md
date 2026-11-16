
# Tiny Worlds, Precise Claims: Logic Before Formalism

Logic asks what a claim says, what would make it true, and what would refute it. We can begin with tiny invented worlds where every object and relationship fits on one table. No symbolic background is assumed; each mark is introduced when it becomes useful.

## 1. Build a world

Our first world has three objects named $a$, $b$, and $c$. Some objects are **round**, and arrows record who points to whom.

| Object | Round? | Points to |
|---|---|---|
| a | yes | a |
| b | yes | b |
| c | no | c |

The sentence “every object is round” is false. One counterexample, $c$, is enough. The sentence “some object is round” is true. One witness, $a$ or $b$, is enough.

Words such as **every** and **some** are quantifiers. Mathematicians often write:

- $\forall x$ for “for every object x”;
- $\exists x$ for “there exists at least one object x.”

If $P(x)$ means “x is round,” then our two claims are $\forall x P(x)$ and $\exists x P(x)$. A letter such as $x$ is a temporary name. It ranges over the stated universe $\{a,b,c\}$.

The table is a **structure** or **model**: it supplies the objects and interprets the vocabulary. The same sentence can be true in one model and false in another. $\forall x P(x)$ becomes true if we add $c$ to the round list.

## 2. The game of witnesses and counterexamples

To test $\exists x P(x)$, the claimant chooses a witness. To test $\forall x P(x)$, a challenger searches for a counterexample.

This creates a useful game:

| Claim form | To establish it in a finite world | To refute it |
|---|---|---|
| Every x has property P | check every object | give one failing x |
| Some x has property P | give one successful x | check that every object fails |

In an infinite world, “check every object” may not be an available procedure. A proof must then explain why all cases follow from structure rather than from an endless list. Finite model checking and mathematical proof are related, but they are not the same task.

## 3. Negate the whole claim

Negation means “it is not the case that.” The negation of “every object is round” is not “no object is round.” It is “some object is not round.” Symbolically,

$not(\forall x P(x))$ means the same as $\exists x not P(x)$.

Likewise, “it is not true that some object is round” means “every object is not round”:

$not(\exists x P(x))$ means $\forall x not P(x)$.

Our world shows the difference. “Not every object is round” is true because $c$ fails. “No object is round” is false because $a$ and $b$ succeed.

### A language trap

“All that glitters is not gold” is often intended to mean “not everything that glitters is gold,” which allows some gold. Read literally as “every glittering thing is not gold,” it says none is gold. Formalization forces us to choose.

## 4. Order changes a nested claim

Let $R(x,y)$ mean “x points to y.” In our identity-arrow world, each object points to itself.

Consider:

1. $\forall x \exists y R(x,y)$: every source has some target;
2. $\exists y \forall x R(x,y)$: there is one target that every source points to.

The first is true. For $a$, choose $a$; for $b$, choose $b$; for $c$, choose $c$. The witness $y$ may depend on the previously chosen $x$.

The second is false. It asks for one $y$ chosen before the challenger selects $x$. No single object receives all three arrows.

Quantifiers do not commute. “Everyone likes someone” does not imply “someone is liked by everyone.” A witness chosen after seeing a case may vary with that case; a witness chosen first must work uniformly.

## 5. “If” describes the failing case precisely

The sentence “every round object is bright” can be written

$$\forall x (Round(x) \to Bright(x))$$

The arrow $\to$ means “if … then …”. An implication fails only when its first part is true and its second part is false. A non-round object is not a counterexample: the sentence made no brightness promise about it.

Suppose no objects are round. Then “every round object is bright” is true in the formal sense: there is no round object violating the promise. This is called **vacuous truth**. It can feel odd because everyday speakers may imply that round objects exist. Formal logic separates the conditional claim from the existence claim. To say both, write:

- some object is round; and
- every round object is bright.

## 6. The empty world boundary

What happens if the universe has no objects?

- $\forall x P(x)$ is true: there is no counterexample.
- $\exists x P(x)$ is false: there is no witness.

Many presentations of standard first-order logic require structures to have nonempty universes. The Atlas lab deliberately permits the empty case as a boundary experiment and announces the convention. The convention must be stated because it affects truth values and some metatheorems.

For the nested pair:

- $\forall x\exists y R(x,y)$ is vacuously true in the empty world because there is no source $x$;
- $\exists y\forall x R(x,y)$ is false because there is no candidate $y$.

Even there, quantifier order matters.

## 7. A claim and a pattern of marks are different levels

The string $\forall x P(x)$ is a piece of **syntax**. It is built according to formation rules. The tiny world and the rule for evaluating the string provide **semantics**. We write

$$M satisfies \phi$$

to say sentence $\phi$ is true in model $M$; a traditional symbol is $M ⊨ \phi$.

A proof system adds another relation: from assumptions $\Gamma$, a formal derivation may produce $\phi$, written $\Gamma ⊢ \phi$.

These marks answer different questions:

- $⊨$: is the claim true in all relevant models?
- $⊢$: is there a derivation using specified rules?

**Soundness** says derivable conclusions are semantically valid: proofs do not lead from true premises to a false conclusion. **Completeness of first-order logic** says every semantic consequence has a formal derivation in an appropriate proof calculus. This does not mean every sentence is provable from a particular mathematical theory. A theory can have several models that disagree.

## 8. Sets as membership worlds

A set is determined by which objects belong to it. If $A=\{a,b\}$ and $B=\{b,c\}$, then:

- intersection $A\cap B=\{b\}$ contains objects in both;
- union $A\cup B=\{a,b,c\}$ contains objects in either;
- difference $A\setminus B=\{a\}$ contains objects in A but not B;
- $A$ is a subset of $\{a,b,c\}$ because every member of A belongs to the larger set.

Set equality is extensional: $A=B$ exactly when every object belongs to A if and only if it belongs to B. Order and repeated listing do not create new members, so $\{a,b\}=\{b,a,a\}$.

### A diagonal surprise

For a finite set with $n$ objects, there are $2^{n}$ subsets because each object presents a yes/no membership choice. Three objects have eight subsets. A set can never be paired one-to-one with all of its subsets, even when it is infinite. Cantor’s diagonal argument proves this: given any proposed assignment $x \mapsto S_{x}$, form

$$D=\{x : x is not \in S_{x}\}$$

If $D=S_{d}$ for some $d$, then $d$ belongs to D exactly when $d$ does not belong to $S_{d}=D$, a contradiction. Thus D is missing from the list. This is a proof about any proposed assignment, not an attempt to enumerate the infinite power set.

## 9. Constructive information

A proof of “some x has property P” is especially informative when it supplies a witness and verifies P. In constructive mathematics, existence generally demands such construction rather than relying freely on the principle that every proposition is true or false.

Classical logic accepts **excluded middle**, $A or not A$, for every proposition A. Constructive settings do not generally assert this without evidence deciding A. That does not mean “both A and not A might be true”; contradiction remains contradiction. It means a proof of the disjunction must indicate which side holds.

Different foundations choose different logical and set-theoretic principles. The choice should be explicit rather than treated as a fight between “real” and “fake” mathematics.

## A worked finite evaluator

**Worked example.**

```text
procedure evaluate(formula, universe, interpretation, environment):
    if formula is an atomic predicate:
        look up its arguments through environment
        return whether the resulting tuple is listed
    if formula is NOT A:
        return not evaluate(A, ...)
    if formula is A AND B:
        return evaluate(A, ...) and evaluate(B, ...)
    if formula is FOR EVERY x, A:
        return true exactly when every element u makes A true with x := u
    if formula is THERE EXISTS x, A:
        return true exactly when some element u makes A true with x := u
```

For a sentence with $q$ nested quantifiers over $n$ objects, a direct search can inspect up to $n^{q}$ assignments. That exponential growth explains why even finite logical search becomes difficult. The invariant is: at recursion depth $j$, the environment records exactly the choices made for the first $j$ quantified variables.

## Practice

<a id="deep-dive-logic-worlds-before-symbols-ex-1"></a>

### Exercise 1

1. In the opening world, decide $\exists x not P(x)$ and give evidence.

<details>
<summary>Hint 1</summary>

An existential claim needs one object for which the property fails.
</details>

<details>
<summary>Hint 2</summary>

Inspect the named finite world for a witness outside P and state its name.
</details>

<details>
<summary>Solution</summary>

True, with counterexample-to-P witness $c$.

</details>

<a id="deep-dive-logic-worlds-before-symbols-ex-2"></a>

### Exercise 2

2. Negate “every book has some reader” without changing its meaning.

<details>
<summary>Hint 1</summary>

Negating a universal statement introduces an existential counterexample.
</details>

<details>
<summary>Hint 2</summary>

Inside that book witness, negate the existential reader claim by quantifying over every possible reader.
</details>

<details>
<summary>Solution</summary>

“There is a book for which every person is not a reader of it,” or $\exists b\forall r not Reads(r,b)$. Both quantifiers reverse and the relation is negated.

</details>

### Further exercises

3. Give a two-person relationship where everyone admires someone but nobody is admired by everyone.
4. If no dragons exist, is “every dragon can fly” true under material implication? Does it assert that dragons exist?
5. List all subsets of $\{a,b\}$.
6. Let P contain only $a$ and Q contain $a,b$. Decide $\forall x(P(x)\to Q(x))$ over $\{a,b,c\}$.
7. Explain the difference between “φ is true in this one model” and “φ follows from assumptions Γ in every model.”
8. In the empty-universe convention above, decide $\exists x(P(x) or not P(x))$.

## Answers


3. Let Ann admire Ann and Bo admire Bo, with no other admiration arrows. Each has a target, but neither target is admired by both.
4. The universal conditional is vacuously true because there is no failing dragon. It does not assert existence; add $\exists x Dragon(x)$ for that.
5. $\varnothing$, $\{a\}$, $\{b\}$, $\{a,b\}$.
6. True. The only P-object is $a$, and it is Q. Objects $b,c$ do not make the conditional fail because its antecedent is false there.
7. Truth in one model is local evidence about one interpretation. Semantic consequence means no model of Γ makes φ false. A complete proof calculus can derive exactly those first-order consequences, but one finite check does not establish the universal claim.
8. False. The inner disjunction would be true for any chosen object in classical logic, but the existential quantifier has no object to choose.

## Continue

Use the finite-model workshop to edit these worlds and inspect exact witness tables. Then take the standard logic and set course to separate syntax, semantics, deduction, sets, cardinality, and axioms. The guiding discipline remains: state the universe, interpret the symbols, keep quantifier order, and say whether the evidence is a witness, a counterexample, a model, or a proof.
