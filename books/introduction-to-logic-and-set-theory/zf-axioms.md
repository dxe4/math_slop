
# The Axioms of ZF {#section-1-the-axioms-of-zf}

Ordinary mathematical writing introduces sets by describing their elements. A foundational theory must explain when such descriptions determine sets. The tempting rule that every property determines a set is inconsistent. Zermelo–Fraenkel set theory, abbreviated ZF, replaces that rule with specific existence principles. They support familiar constructions while preventing the unrestricted collection responsible for Russell's contradiction.

We work with classical first-order logic, actual equality, nonempty domains and one nonlogical relation symbol, membership. Variables range over sets. There are no atoms, elements of a separate numerical sort, or built-in collection objects. Symbols for the empty set, ordered pairs, functions and natural numbers abbreviate constructions justified below or in Introduction to Proof. A displayed schema denotes one axiom for each formula of the first-order language; it is not a single second-order quantifier over properties.

Distinguish two levels throughout this chapter. We describe ZF in an ambient mathematical setting in which formulas and proofs are finite objects. Inside a model of ZF, membership means the model's interpreted relation, and the model's sets are its domain elements. An arbitrary model need not be a transitive collection of actual sets with actual membership. Later model arguments depend on keeping those interpretations separate.

<a id="section-7-equality-small-constructions-and-uniqueness"></a>
## Equality, small constructions and uniqueness {#section-9-equality-small-constructions-and-uniqueness}

**Axiom 7.1 (Extensionality).** Two sets with exactly the same elements are equal:
$$\forall a\forall b\,[\forall x(x\in a\leftrightarrow x\in b)\to a=b].$$
This principle concerns elements, not appearances of descriptions. It lets us prove uniqueness after an existence axiom supplies an object. Equality already has its logical substitution rules; Extensionality supplies a connection between equality and membership.

The empty-set axiom supplies a set with no elements. Extensionality makes it unique, so write $\varnothing$. Pairing supplies, for any $a,b$, a set whose elements are exactly $a$ and $b$. Write it $\{a,b\}$; taking equal arguments gives the singleton $\{a\}$. Union supplies a set $\bigcup A$ whose elements are exactly the members of members of $A$. Consequently $a\cup b=\bigcup\{a,b\}$ exists. These statements introduce particular sets, rather than a universal supply of arbitrary collections.

**Worked example 7.2 (An unordered pair really is unique).** Suppose $p$ and $q$ both satisfy the Pairing description for $a,b$. For every $x$, membership in either is equivalent to $x=a\lor x=b$. Thus $x\in p\leftrightarrow x\in q$ for every $x$, and Extensionality gives $p=q$. If $a=b$, the same reasoning gives $\{a,a\}=\{a\}$. A pair may therefore have one element. Pairing does not assert that two distinct elements always exist, and the empty set is not the same object as its singleton: the former has no elements whereas the latter has one.

Power Set supplies $\mathcal P(A)$ with
$$x\in\mathcal P(A)\leftrightarrow\forall y(y\in x\to y\in A).$$
Write the right-hand condition $x\subseteq A$. Within a model, Power Set collects every subset that is an object of that model. It does not promise that an external observer's entire collection of subsets is present. This distinction will explain why a countable model can satisfy an internal assertion of uncountability.

<a id="section-21-separation-restricts-a-set-already-available"></a>
## Separation restricts a set already available {#section-23-separation-restricts-a-set-already-available}

**Schema 7.3 (Separation).** For each formula $\varphi(x,\vec p)$, with the proposed output variable $b$ not free in that formula, include
$$\forall a\forall\vec p\,\exists b\forall x\,[x\in b\leftrightarrow(x\in a\land\varphi(x,\vec p))].$$
The set $a$ bounds the collection. Parameters are permitted and are universally quantified in the axiom. Renaming bound variables prevents accidental capture when a formula is substituted into the schema. Extensionality again gives uniqueness of the output.

For example, $a\cap b$ is obtained by separating those $x\in a$ satisfying $x\in b$. Relative complement is $a\setminus b$, not an unbounded complement of $b$ among all sets. To form an intersection of a nonempty family $A$, choose one member $a_0\in A$ and separate its elements belonging to every member of $A$. The choice here is one existential witness in a proof, not the axiom of choice. For an empty family, an unrestricted intersection would be a universal set, which does not exist in ZF.

**Theorem 7.4 (No universal set).** There is no set containing every set.

*Proof.* Suppose $U$ contains every set. Separation applied to $U$ gives
$$R=\{x\in U:x\notin x\}.$$
Since $R$ is a set, it belongs to $U$. Substituting $R$ into the defining equivalence gives $R\in R\leftrightarrow R\notin R$, a contradiction in classical logic. Hence no such $U$ exists. The contradiction uses Separation on a supposed set; it does not require Foundation. ∎

**Worked example 7.5 (Repairing unrestricted comprehension).** The instruction “take the set of all sets not containing themselves” has no justified bounding set. Replacing it by $R_a=\{x\in a:x\notin x\}$ is legitimate for each given $a$. Indeed $R_a\notin a$: if it belonged to $a$, its defining equivalence at itself would be contradictory. This does not say that $R_a$ fails to exist. It says that a construction within $a$ produces an object outside $a$. Confusing those conclusions is exactly the mistake that turns a useful restricted construction into the inconsistent universal rule.

<a id="section-37-replacement-collects-uniquely-determined-outputs"></a>
## Replacement collects uniquely determined outputs {#section-39-replacement-collects-uniquely-determined-outputs}

**Schema 7.6 (Replacement).** For every formula $\varphi(x,y,\vec p)$, with a fresh output-set variable $b$, include the assertion that
$$\forall x\in a\,\exists!y\,\varphi(x,y,\vec p)
\quad\Longrightarrow\quad
\exists b\forall y\,[y\in b\leftrightarrow\exists x\in a\,\varphi(x,y,\vec p)].$$
All parameters and the input set are universally quantified. The formula must determine one output for every input in $a$. It need not determine outputs for objects outside $a$. We may speak informally of a definable operation, but Replacement quantifies over sets and uses a formula; it does not quantify over a proper class treated as an additional object.

Separation removes elements from a known bound. Replacement instead supplies the image of a set under a functional description, even when no convenient bounding set for all outputs has been constructed. Different inputs may have the same output. Requiring injectivity would unnecessarily weaken the principle. Requiring a single output is essential to this formulation; a relation with many possible outputs requires a different argument or a specified choice rule.

For example, once ordinal successor is defined, Replacement takes the successors of all ordinals in a given set. Union can then form their supremum. In transfinite recursion, Replacement collects the values already uniquely determined at earlier stages; Union glues their compatible histories. Those are substantive uses, not merely ways to rename Separation.

A function in ZF is a set of ordered pairs satisfying the usual existence and uniqueness conditions on a specified domain. The notation $f(x)$ abbreviates its unique value. A definable operation on all sets need not itself be a set function: its graph may be too large. Replacement permits its restriction to any set domain without manufacturing a set of all inputs.

<a id="section-51-infinity-and-foundation"></a>
## Infinity and Foundation {#section-53-infinity-and-foundation}

Call a set $I$ inductive when $\varnothing\in I$ and $x\cup\{x\}\in I$ whenever $x\in I$. Infinity asserts that an inductive set exists. Write $S(x)=x\cup\{x\}$. Starting from an inductive witness $I$, Separation gives
$$\omega=\{x\in I:\text{every inductive set contains }x\}.$$
The phrase after the colon is a first-order formula quantifying over sets. The resulting set contains the empty set, because every inductive set does. If it contains $x$, then every inductive set contains $S(x)$, and $S(x)\in I$; hence it contains $S(x)$. Thus $\omega$ is inductive and lies inside every inductive set. Extensionality makes this least inductive set independent of the initial witness $I$.

The familiar induction principle follows: an inductive subset of $\omega$ equals $\omega$. For a definable property of natural numbers, Separation first gives the subset satisfying it, and the base and successor arguments show that subset is inductive. Infinity is the existence assertion; induction is a consequence of the least-set construction.

**Axiom 7.7 (Foundation).** Every nonempty set $a$ has an element $x$ disjoint from $a$: there is no $y$ with $y\in x$ and $y\in a$.

Foundation prohibits membership cycles. If $x\in x$, apply it to $\{x\}$: its only possible minimal member is $x$, but $x$ intersects $\{x\}$. More generally, a finite cycle yields a finite set of its vertices, every one of which has a member in that set. It also prohibits any descending membership sequence represented by a set function with domain $\omega$: Replacement collects the range, and every range element has its next value as a member of that range.

These are internal conclusions. An externally ill-founded model may satisfy Foundation because an external descending sequence is not represented by a function inside that model. Foundation does not turn first-order models automatically into transitive, externally well-founded universes. Nor is Foundation needed for the Russell argument above.

**Worked example 7.8 (Why singleton and element differ).** Foundation proves $a\notin a$. Nevertheless $a\in\{a\}$ always holds by Pairing. The expressions differ in their right-hand argument. For $a=\varnothing$, we get $\varnothing\in\{\varnothing\}$ and $\varnothing\notin\varnothing$. Reading braces as decoration would erase precisely the distinction on which the construction of natural numbers depends. The first three finite ordinals are $0=\varnothing$, $1=\{0\}$ and $2=\{0,1\}$; each is a different set, not a numeral painted onto one object.

<a id="section-67-using-the-axiom-list-responsibly"></a>
## Using the axiom list responsibly {#section-69-using-the-axiom-list-responsibly}

ZF consists of Extensionality, Empty Set, Pairing, Union, Power Set, Infinity, Separation, Replacement and Foundation, with ordinary classical first-order logic. Some presentations derive Empty Set from other axioms or use equivalent formulations of Replacement. Such economy does not change the central distinction between bounded selection and functional images. ZFC adds Choice; Choice is not hidden in the abbreviation ZF.

A proof about sets should identify the construction that supplies its objects. It need not annotate every union, but a step collecting outputs without a known bound should prompt a Replacement argument. A purported function must have a set graph and a unique output at each domain element. A proposed universal collection should prompt a question about whether it is a set or only a formula describing a class. These questions expose logical gaps while leaving ordinary mathematical notation usable.

The next chapter uses these principles to construct ordinal stages. Read its recursive definitions as existence theorems, rather than as permission to perform infinitely many unexplained choices. The finite constructions in this chapter supply the elementary cases; Replacement and Union supply the passage through arbitrary set-sized histories.

<a id="section-75-exercises"></a>
## Exercises {#section-77-exercises}

<a id="zf-axioms-ex1"></a>
**Exercise 7.1.** Construct $a\cap b$ and $a\setminus b$ and prove uniqueness. Identify every existence principle used.

<details>
<summary>Hint 1</summary>

Both outputs can be bounded by $a$. No universal complement is needed.

</details>
<details>
<summary>Hint 2</summary>

Use the formulas $x\in b$ and $x\notin b$, then compare two proposed outputs element by element.

</details>
<details>
<summary>Solution</summary>

Separation on $a$ with parameter $b$ gives $c$ satisfying $x\in c$ exactly when $x\in a$ and $x\in b$. The same schema with negated membership gives $d$ satisfying $x\in d$ exactly when $x\in a$ and $x\notin b$. For two candidates for either output, the defining formulas give identical membership for every set $x$, so Extensionality identifies them. No invocation of Power Set, Replacement, Infinity or Choice is required. The complements are relative to the supplied set $a$, which is why the argument does not contradict the absence of a universal set.

</details>

<a id="zf-axioms-ex2"></a>
**Exercise 7.2.** Prove that $\bigcup\varnothing=\varnothing$ and $\bigcup\{a\}=a$.

<details>
<summary>Hint 1</summary>

Expand the membership description in the Union axiom.

</details>
<details>
<summary>Hint 2</summary>

For the singleton, a witness in the family must equal $a$.

</details>
<details>
<summary>Solution</summary>

An element of $\bigcup\varnothing$ would belong to a member of the empty set. There is no such member, so the union has no elements and equals the empty set by Extensionality. Next, $x\in\bigcup\{a\}$ holds exactly when some $y\in\{a\}$ contains $x$. Pairing says that this $y$ must be $a$, so the condition is precisely $x\in a$. Extensionality gives the second equality. This argument concerns union, not intersection: an empty union has an immediate bounded existence axiom, whereas an unrestricted empty intersection would require a universal set.

</details>

<a id="zf-axioms-ex3"></a>
**Exercise 7.3.** Show that $\varnothing\in\mathcal P(a)$ for every set $a$, and determine $\mathcal P(\varnothing)$.

<details>
<summary>Hint 1</summary>

The empty set is a subset of every set because its universal membership condition is vacuous.

</details>
<details>
<summary>Hint 2</summary>

A subset of the empty set has no elements.

</details>
<details>
<summary>Solution</summary>

No object belongs to the empty set, so every object belonging to it belongs to $a$. Therefore it is a subset of $a$, and Power Set puts it in $\mathcal P(a)$. If $x\subseteq\varnothing$, then $x$ has no elements and Extensionality gives $x=\varnothing$. Conversely the empty set is a subset of itself. Hence the elements of $\mathcal P(\varnothing)$ are exactly the empty set, and $\mathcal P(\varnothing)=\{\varnothing\}$. In particular this power set is nonempty, and it differs from its input. Counting braces correctly matters even in this smallest example.

</details>

<a id="zf-axioms-ex4"></a>
**Exercise 7.4.** Prove $R_a=\{x\in a:x\notin x\}$ never belongs to $a$, without using Foundation.

<details>
<summary>Hint 1</summary>

Assume membership in $a$ solely for the contradiction argument.

</details>
<details>
<summary>Hint 2</summary>

Apply the defining equivalence at the existing set $R_a$.

</details>
<details>
<summary>Solution</summary>

Separation first supplies $R_a$. Suppose $R_a\in a$. Its definition then reduces to $R_a\in R_a$ if and only if $R_a\notin R_a$. If membership holds, the right-hand side denies it; if membership fails, the right-hand side holds and the equivalence asserts it. Classical logic therefore gives a contradiction, and $R_a\notin a$. The proof does not claim $R_a$ is nonexistent or that arbitrary sets contain themselves. Its only ingredients beyond first-order logic are Separation to construct $R_a$ and the assumed membership in $a$, which is discharged.

</details>

<a id="zf-axioms-ex5"></a>
**Exercise 7.5.** Show that an intersection of a nonempty set $A$ of sets exists. Explain why your construction cannot simply use the same instruction for $A=\varnothing$.

<details>
<summary>Hint 1</summary>

Take one witness $a_0\in A$.

</details>
<details>
<summary>Hint 2</summary>

Separate $x\in a_0$ satisfying $\forall a\in A\,x\in a$.

</details>
<details>
<summary>Solution</summary>

Nonemptiness supplies a member $a_0$. Separation gives $B=\{x\in a_0:\forall a\in A\,x\in a\}$. Any object belonging to every member of $A$ belongs to $a_0$, so $x\in B$ is equivalent simply to belonging to every member of $A$. This description is independent of the chosen witness and Extensionality gives uniqueness. When $A$ is empty, there is no $a_0$ available. Moreover “belongs to every member of $A$” is true for every set, so taking its unrestricted extension would produce the impossible universal set. One may define an empty intersection relative to a specified ambient set, but that is additional data.

</details>

<a id="zf-axioms-ex6"></a>
**Exercise 7.6.** Explain why Replacement applies to a constant output operation, and compute its image on an empty and on a nonempty domain.

<details>
<summary>Hint 1</summary>

Use the formula $y=c$ with parameter $c$.

</details>
<details>
<summary>Hint 2</summary>

The image description includes an existential quantifier over the input set.

</details>
<details>
<summary>Solution</summary>

For each input $x$, the formula $y=c$ has exactly one output, so it meets the functionality hypothesis regardless of the domain. Replacement gives $B$ with $y\in B$ equivalent to $\exists x\in a\,(y=c)$. If $a$ is empty, that existential is always false and $B=\varnothing$. If $a$ is nonempty, it is equivalent to $y=c$, and $B=\{c\}$. Distinct inputs can therefore collapse to a single output. The image axiom requires a function, not an injection, and the empty-domain case must not be silently replaced by a singleton merely because the operation has a constant description.

</details>

<a id="zf-axioms-ex7"></a>
**Exercise 7.7.** Prove that the least inductive set constructed in the text is independent of the inductive witness $I$.

<details>
<summary>Hint 1</summary>

First verify that each candidate is itself inductive.

</details>
<details>
<summary>Hint 2</summary>

Each candidate is contained in every inductive set, including the other candidate.

</details>
<details>
<summary>Solution</summary>

Let $W_I$ and $W_J$ arise from inductive witnesses $I,J$. The base element lies in each because every inductive set contains the empty set. If $x$ belongs to one candidate, every inductive set contains $x$ and hence its successor; the relevant witness also contains that successor. Thus both candidates are inductive. By their defining property, every element of $W_I$ belongs to the inductive set $W_J$, and conversely every element of $W_J$ belongs to $W_I$. Extensionality gives equality. The argument does not choose one witness from each of a family of sets; it compares two arbitrary witnesses already supplied.

</details>

<a id="zf-axioms-ex8"></a>
**Exercise 7.8.** Use Foundation to rule out a two-cycle $a\in b\in a$.

<details>
<summary>Hint 1</summary>

Apply Foundation to $\{a,b\}$.

</details>
<details>
<summary>Hint 2</summary>

Whichever element is selected has an element in the pair.

</details>
<details>
<summary>Solution</summary>

The pair $S=\{a,b\}$ exists and is nonempty. If $a\in b$ and $b\in a$, then $a$ contains $b\in S$, and $b$ contains $a\in S$. Thus neither possible member of $S$ is disjoint from $S$. This contradicts Foundation. The case $a=b$ is included: then the same argument prohibits self-membership. Notice that the contradiction concerns the membership relation, not subset inclusion. The legitimate relation $a\subseteq a$ is reflexive and does not contradict Foundation, because subset inclusion quantifies over elements instead of asserting that a set is one of its own elements.

</details>

<a id="zf-axioms-ex9"></a>
**Exercise 7.9.** Suppose a set function $f$ with domain $\omega$ satisfies $f(n+1)\in f(n)$ for every $n$. Derive a contradiction in ZF.

<details>
<summary>Hint 1</summary>

Collect the range of $f$ as a set.

</details>
<details>
<summary>Hint 2</summary>

A Foundation-minimal range member still has its successor value in the range.

</details>
<details>
<summary>Solution</summary>

Replacement gives $R=\{f(n):n\in\omega\}$, and $f(0)\in R$ makes it nonempty. Foundation supplies $x\in R$ with no member in $R$. Choose an index $n$ with $x=f(n)$; this is one existential witness. The assumed property gives $f(n+1)\in x$, while definition of the range gives $f(n+1)\in R$. This contradicts the chosen property of $x$. The proof uses a sequence represented by an internal set function. An external sequence through the domain of a model need not be an element of that model, so the argument cannot be used to declare every model externally well-founded.

</details>

<a id="zf-axioms-ex10"></a>
**Exercise 7.10.** A model $M$ satisfies Power Set. Must every externally specified subset of its natural-number object be an element of $M$? Give a precise answer.

<details>
<summary>Hint 1</summary>

Write the Power Set axiom with quantifiers ranging over the domain of $M$.

</details>
<details>
<summary>Hint 2</summary>

Compare a subset that exists externally with a subset represented internally.

</details>
<details>
<summary>Solution</summary>

No such conclusion follows. The axiom says that there is an internal object $p$ such that, for every domain element $x$, $M$ regards $x$ as a member of $p$ exactly when $M$ regards $x$ as a subset of its natural-number object. It quantifies only over objects represented in $M$. An externally selected subset of the model's domain need not have any representing element there. If the model is countable externally, only countably many domain elements can represent subsets, whereas the external subsets of an infinite countable set form an uncountable collection. This is a distinction between quantifier domains, not a failure of the model to satisfy its own axiom.

</details>

<a id="section-297-summary"></a>
## Summary {#section-299-summary}

ZF authorises particular constructions rather than unrestricted comprehension. Extensionality makes membership descriptions unique. Separation selects within a set; Replacement collects uniquely defined outputs. Infinity supports the least inductive set, and Foundation prohibits internally represented descending membership chains. All quantifiers in these axioms range over the model's own sets. Choice is a further principle, not part of ZF. These distinctions are the foundation for ordinal recursion, cardinal comparison and the later discussion of models.

<a id="section-301-sources-and-further-reading"></a>
## Sources and further reading {#section-303-sources-and-further-reading}

This chapter is new exposition expanding Reference desk C of the preserved [Logic Foundations reference](#/books/logic-foundations-proof-reference). The benchmark is Herbert B. Enderton, *Elements of Set Theory*, chapters 1–3. For an author's accessible treatment of the axioms and their elementary consequences, see Martin Bays, [*B1.2 Set Theory*](https://people.maths.ox.ac.uk/~bays/teaching/b1set/B1.2.pdf). The proofs and exercises here are supplied in the chapter.
