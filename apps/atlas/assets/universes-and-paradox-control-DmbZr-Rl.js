var e=`---
parent_id: book-types-proofs-construction
chapter_id: universes-and-paradox-control
title: "Universes and paradox control"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Universes and paradox control

If every type can be the element of another type, self-referential constructions become possible. This chapter explains why a naive type-of-all-types leads to paradox, introduces universe hierarchies as a solution, and discusses universe polymorphism.

## The problem: Type : Type

Consider a naive system with a single universe $\\operatorname{Type}$ and $\\operatorname{Type} : \\operatorname{Type}$. In an expressive dependent type theory with the relevant dependent-product closure, this self-typing supports Girard-style paradoxes.

The construction is not the literal Russell set $\\{A\\mid A\\notin A\\}$: types and their terms do not reproduce naive set membership. Girard's argument instead uses impredicative dependent typing to build self-application. Thus $\\operatorname{Type}:\\operatorname{Type}$ is dangerous together with specified closure rules; the closure hypotheses are part of the theorem.

## Universe hierarchies

The standard solution is a cumulative hierarchy:

$$\\operatorname{Type}_0 : \\operatorname{Type}_1 : \\operatorname{Type}_2 : \\dots$$

Each $\\operatorname{Type}_i$ classifies small types and is itself a term of $\\operatorname{Type}_{i+1}$. If $A:\\operatorname{Type}_i$, then its elements have type $A$; there is no rule requiring those elements to belong to lower universes. Type formers such as $\\Pi$ and $\\Sigma$ assign a universe level from the levels of the types they combine.

The formation rule for a universe is:

$$\\frac{}{\\Gamma \\vdash \\operatorname{Type}_i : \\operatorname{Type}_{i+1}}\\;(\\text{Type})$$

The cumulativity rule says that if $A : \\operatorname{Type}_i$, then $A : \\operatorname{Type}_{i+1}$:

$$\\frac{\\Gamma \\vdash A : \\operatorname{Type}_i}{\\Gamma \\vdash A : \\operatorname{Type}_{i+1}}\\;(\\text{cumul})$$

This blocks the self-typing used by the paradox: $\\operatorname{Type}_i$ does not have type $\\operatorname{Type}_i$. The hierarchy is infinite, but any particular derivation uses only finitely many levels.

## Noncumulative hierarchies

Some systems use a noncumulative hierarchy, where $\\operatorname{Type}_i : \\operatorname{Type}_{i+1}$ but $A : \\operatorname{Type}_i$ does not imply $A : \\operatorname{Type}_{i+1}$. Instead, an explicit lifting operator is required. Noncumulative hierarchies are more rigid but can simplify certain metatheoretic arguments.

## Universe polymorphism

Fixing every definition at a specific universe level is inconvenient. Universe polymorphism allows definitions to be parameterized over universe levels. For example, the identity function can be defined once and used at any level:

$$\\operatorname{id} : \\Pi i.\\, \\Pi A : \\operatorname{Type}_i.\\, A \\to A$$

$$\\operatorname{id} = \\lambda i.\\, \\lambda A.\\, \\lambda x.\\, x$$

The level parameter $i$ is implicit in many concrete syntaxes. The elaborator inserts appropriate levels during type checking.

## The trusted foundation

The universe hierarchy is part of the trusted foundation of the type theory. User-facing omission of universe levels is elaborator convenience, not evidence that the issue has disappeared. When a proof assistant checks a definition, it verifies that all universe constraints are satisfied, even if the user never wrote a level explicitly.

Inconsistent universe constraints (for example, requiring $\\operatorname{Type}_i : \\operatorname{Type}_i$) are rejected by the type checker. This is the mechanical enforcement of paradox control.

## Common errors

**Error: assuming universe levels are irrelevant.** In some systems, inconsistent universe usage can lead to proof terms that the kernel rejects. Even when the user does not see levels, they constrain what can be defined.

**Error: confusing cumulative and noncumulative systems.** A definition valid in a cumulative system may require explicit lifts in a noncumulative one. Porting proofs between systems requires attention to this difference.

**Error: ignoring universe constraints in inductive definitions.** Large inductive types may require large universes. Defining an inductive type that quantifies over $\\operatorname{Type}_i$ typically lives in $\\operatorname{Type}_{i+1}$ or higher.

## Formation rules determine the level calculation

For the predicative cumulative hierarchy used in this chapter, take the formation convention
$$A:\\mathrm{Type}_i,\\quad x:A\\vdash B(x):\\mathrm{Type}_j
\\quad\\Longrightarrow\\quad
\\Pi x:A.B(x):\\mathrm{Type}_{\\max(i,j)}.$$
Use the same maximum for dependent pairs. This is an explicitly chosen rule, not a consequence of drawing a sequence of universes. A foundation can use different rules for a distinguished proposition sort or for particular inductive constructions. State the rule before calculating a definition's level.

If $A$ and $B$ are both classified by $\\mathrm{Type}_0$, their ordinary function type is also classified by $\\mathrm{Type}_0$. But the domain of a function ranging over **types** is the universe $\\mathrm{Type}_0$ itself, whose type is $\\mathrm{Type}_1$. Forgetting that shift is a common reason a small-looking polymorphic declaration unexpectedly needs a larger universe.

## Worked example 1: the level of a polymorphic identity

Fix a level $i$ and consider
$$I_i=\\Pi A:\\mathrm{Type}_i.\\;A\\to A.$$
Inside its binder, $A:\\mathrm{Type}_i$, so $A\\to A:\\mathrm{Type}_i$. The binder's domain is $\\mathrm{Type}_i$, which is classified by $\\mathrm{Type}_{i+1}$. The maximum rule therefore places $I_i$ in $\\mathrm{Type}_{i+1}$. A term is $\\lambda A.\\lambda x.x$ at this level-specific type.

This does not conflict with using identity at individual small types. Instantiating $I_i$ at a supplied $A:\\mathrm{Type}_i$ yields an ordinary function $A\\to A$, which is small at level $i$. The larger universe records the range of types over which the whole declaration quantifies. An interface can therefore be larger than each result obtained from one of its permitted type arguments.

In the earlier schematic notation $\\Pi i$, the level parameter is a parameter of a family of declarations. It is not automatically an ordinary natural-number input inside the type theory. Concrete assistants use a separate syntax of universe levels. Treating the schematic $i$ as an arbitrary term variable without supplying such an internal universe mechanism would add a rule that has not been stated.

## Worked example 2: packaging a type with an element

The dependent pair
$$E_i=\\Sigma A:\\mathrm{Type}_i.\\;A$$
stores a type at level $i$ together with one element of that type. Its domain again has level $i+1$, and its fibre has level $i$, so $E_i:\\mathrm{Type}_{i+1}$. A concrete value can be $(\\mathbb N,0)$ when naturals inhabit the chosen $i$-universe, using cumulativity if needed.

Projecting that value returns first a type and then an element of the projected type. It does not make a single fixed type that contains every element of every type at the same level. The package itself belongs to the next level, and its second projection's type depends on the stored first field. The distinction coordinates universe accounting with the dependent-pair rules rather than replacing them by a set of all sets.

There is no package $(0,t)$ with a closed element of the empty type in the consistent core, because the second field would still require such an element. Allowing all types as possible first fields does not erase the fibre obligation on the second. This is a useful check that a universe annotation has not silently been mistaken for a witness constructor.

## Worked example 3: incompatible level constraints

Suppose one declaration requires $u\\ge v+1$ and another requires $v\\ge u$. Combining them gives $u\\ge u+1$, impossible for natural-number levels. The failure concerns the simultaneous constraints, not either isolated inequality. Choosing an arbitrarily large level for both does not help: the strict offset remains contradictory.

Similarly, asking for $\\mathrm{Type}_i:\\mathrm{Type}_i$ under the stated hierarchy would require accommodating the universe's own successor level without the necessary shift. Cumulativity only moves a type upward; it never moves $\\mathrm{Type}_{i+1}$ down to $\\mathrm{Type}_i$. An implicit elaborator can infer an available larger level, but it cannot legitimately solve an impossible self-level constraint by silently reversing that direction.

These elementary inequalities illustrate how local declarations can be individually plausible and jointly inconsistent. A concrete kernel uses its exact level-expression rules, potentially including maxima and specialised operations. The example is not a complete implementation of a universe solver; it is an arithmetic proof that these particular constraints have no solution.

## Lifting is an interface, not an equality of universes

In a noncumulative presentation, an explicit lift can place a small type's data in a larger wrapper type. Write $\\mathrm{Lift}_{i,j}(A)$ for the wrapper, with operations $\\mathrm{up}:A\\to\\mathrm{Lift}(A)$ and $\\mathrm{down}:\\mathrm{Lift}(A)\\to A$ satisfying the chosen inverse equations. Whether these equations are definitional or propositional is part of the lift's rules.

For example, a small natural number may be packaged into a larger universe through up and recovered through down. The wrapper and original need not become the same type by definitional equality. A polymorphic function expecting the lifted type consumes wrapped values; a function expecting the original type consumes unwrapped values. Inserting these operations explicitly explains a port between cumulative and noncumulative systems without claiming the foundations have identical conversion rules.

A level-polymorphic definition provides a family that can be instantiated consistently at different levels. Two uses can have different level parameters without forcing the universes themselves equal. Conversely, a parameter fixed at one level within a declaration cannot always be reassigned at another occurrence without changing the interface. Surface inference should not conceal which uses are genuinely polymorphic.

## Impredicative propositions are a separate rule

System F allowed universal instantiation at a type that itself contained a quantifier. That impredicativity did not assert a universe with unrestricted self-typing. Dependent proof assistants can also designate an impredicative proposition sort while retaining stratified data universes. One must inspect both product formation and elimination from propositions before making a consistency or extraction claim.

Lean's official [universe reference](https://lean-lang.org/doc/reference/latest/The-Type-System/Universes/) distinguishes \`Sort\`, data universes and its special rule for proposition-valued functions. Its [quantifier reference](https://lean-lang.org/doc/reference/latest/Basic-Propositions/Quantifiers/) states that quantifying over a type of any permitted level can still yield a proposition when the codomain is a proposition. These specific rules should not be replaced by this chapter's generic cumulative maximum rule for data. The textual Lean exercises use explicit level parameters and make no claim of an unrestricted Type:Type rule.

## What stratification proves, and what it leaves to metatheory

The hierarchy gives a local syntactic obstruction: an expression requiring its own universe as an element of itself does not receive a derivation from the stated rules. The maximum calculations show where ordinary type formers belong. Neither fact alone proves that every other rule of a large foundation is consistent. A negative inductive declaration, a false primitive axiom or an unsound equality rule can create problems even when its printed universe indices look stratified. The preceding inductive chapter supplied a concrete negative-type example.

A consistency theorem must therefore name the whole system: its sorts, product rules, inductive schemes, identity rules, constants and conversion. A normalisation theorem likewise has an exact reduction relation. The universe hierarchy controls one source of impredicative self-reference within that larger account. Describing it as paradox control records its purpose; it should not be read as a stand-alone proof of every semantic property a proof assistant might claim.

In a finite derivation, the universe expressions arise at specific formation steps. If a type former combines two levels, its result uses the selected maximum or other stipulated operation. If a declaration quantifies over a universe, the domain contributes the successor level. Reconstructing these steps often locates a level mismatch more precisely than adding larger annotations everywhere. A larger annotation may help a genuine upper-bound problem but cannot solve the strict cyclic constraints from Worked Example 3.

Parameters also matter across module interfaces. A definition stated at a fixed small level cannot automatically accept a type from an arbitrary higher level. Generalising its level parameter can make the intended interface valid if every internal construction supports the same generalisation. If an internal operation is fixed to a smaller level, the generalised declaration needs a lift, a different helper or a genuinely restricted domain. Simply suppressing the annotations would hide the condition without satisfying it.

This is parallel to ordinary polymorphism. A function with one fixed input type is not the same interface as a function explicitly generic over that type. Universe polymorphism adds a further layer of genericity whose constraints remain in force. Reading both layers explains which mathematical structures a reusable theorem actually ranges over.

## Practice exercises

### Exercise 1
<a id="universes-and-paradox-control-ex-1"></a>
Explain why $\\operatorname{Type}_i : \\operatorname{Type}_i$ would enable a paradox.


<details><summary>Hint 1</summary>

Keep the dependent-product closure hypothesis with the self-typing assumption.

</details>
<details><summary>Hint 2</summary>

This is Girard-style self-application, not literal set membership.

</details>
<details><summary>Solution</summary>

In a dependent system with sufficiently expressive product formation, $\\operatorname{Type}_i : \\operatorname{Type}_i$ permits the impredicative self-application used in Girard's paradox, from which one can derive an inhabitant of the empty type. The self-typing and closure rules, rather than a literal Russell membership predicate, create the inconsistency.

</details>

### Exercise 2
<a id="universes-and-paradox-control-ex-2"></a>
In a cumulative system, if the only level information supplied is $A : \\operatorname{Type}_2$ and $B : \\operatorname{Type}_1$, what is the smallest universe level guaranteed to contain $A \\to B$?


<details><summary>Hint 1</summary>

Use the maximum of the supplied levels.

</details>
<details><summary>Hint 2</summary>

The smaller codomain can be lifted in the cumulative presentation.

</details>
<details><summary>Solution</summary>

The formation rule places $A\\to B$ in the maximum of the supplied levels, $\\operatorname{Type}_2$, after lifting $B$ by cumulativity. The premise does not rule out $A$ also inhabiting a lower universe, so $\\operatorname{Type}_2$ is the smallest level guaranteed by the stated information, not necessarily the smallest possible level of the particular type $A$.

</details>

### Exercise 3
<a id="universes-and-paradox-control-ex-3"></a>
State the difference between cumulative and noncumulative universe hierarchies.


<details><summary>Hint 1</summary>

Check whether classification moves upward automatically.

</details>
<details><summary>Hint 2</summary>

Otherwise supply an explicit lift interface.

</details>
<details><summary>Solution</summary>

In a cumulative hierarchy, if $A : \\operatorname{Type}_i$, then $A : \\operatorname{Type}_{i+1}$ automatically. In a noncumulative hierarchy, $A : \\operatorname{Type}_i$ does not imply $A : \\operatorname{Type}_{i+1}$; an explicit lifting operation is needed.

</details>

### Exercise 4
<a id="universes-and-paradox-control-ex-4"></a>
Why is universe polymorphism not the same as having a single universe?


<details><summary>Hint 1</summary>

Each use instantiates an actual level.

</details>
<details><summary>Hint 2</summary>

A parameterised family does not identify successive universes.

</details>
<details><summary>Solution</summary>

Universe polymorphism parameterizes definitions over levels, but each instantiation uses a specific level from the hierarchy. It does not collapse the hierarchy into a single self-containing universe. The paradox-avoiding structure remains intact.

</details>

### Exercise 5
<a id="universes-and-paradox-control-ex-5"></a>
Under the stated maximum rules, calculate the level of $\\Sigma A:\\mathrm{Type}_2.A$ and explain the source of the extra level.

<details><summary>Hint 1</summary>

The domain is the universe, not one of its elements.

</details>
<details><summary>Hint 2</summary>

$\\mathrm{Type}_2$ itself is classified by $\\mathrm{Type}_3$.

</details>
<details><summary>Solution</summary>

The domain has level three and the fibre $A$ has level two, so the dependent pair lies in $\\mathrm{Type}_{\\max(3,2)}=\\mathrm{Type}_3$. The shift comes from quantifying over types at level two. An individual supplied $A$ and its elements need not move to level three for every other use, but the whole package of a type with an element has the larger classification. Cumulativity may give still higher classifications without lowering this guaranteed one.

</details>

### Exercise 6
<a id="universes-and-paradox-control-ex-6"></a>
Solve or refute the constraints $u\\ge v+1$, $v\\ge2$; then compare them with $u\\ge v+1$, $v\\ge u$.

<details><summary>Hint 1</summary>

The first pair admits a finite increasing assignment.

</details>
<details><summary>Hint 2</summary>

The second pair creates a strict cycle.

</details>
<details><summary>Solution</summary>

For the first pair, $v=2,u=3$ satisfies both inequalities; larger compatible assignments also work. For the second, substitution gives $u\\ge u+1$, impossible for natural-number levels. Increasing both variables cannot remove the strict cycle. Thus a need for a higher level is different from a contradictory need to be strictly higher than oneself. The arithmetic diagnoses the stated constraints without claiming a general-purpose solver implementation.

</details>

### Exercise 7
<a id="universes-and-paradox-control-ex-7"></a>
Why is a schematic level parameter $i$ in a universe-polymorphic declaration not automatically an ordinary input $i:\\mathbb N$?

<details><summary>Hint 1</summary>

The syntax of levels and the syntax of terms are separately specified.

</details>
<details><summary>Hint 2</summary>

An internal type family indexed by all term-level universe codes would require additional rules.

</details>
<details><summary>Solution</summary>

Universe polymorphism can describe a metalevel family whose declarations carry formal level parameters. Substituting a permitted level expression instantiates the declaration. It does not by itself give an internal natural-number variable an operation returning the universe at that number. Such an internal construction needs a separately stated formation mechanism. Treating the two syntaxes as identical would add unstated expressive power and could invalidate the carefully stratified typing rules.

</details>

### Exercise 8
<a id="universes-and-paradox-control-ex-8"></a>
Given an explicit lift with up and down, explain how to use a small value with a function whose domain is the lifted type. What must not be assumed about conversion?

<details><summary>Hint 1</summary>

Package the value through the lift constructor.

</details>
<details><summary>Hint 2</summary>

An isomorphism of interfaces does not automatically identify types definitionally.

</details>
<details><summary>Solution</summary>

For $a:A$ and $f:\\mathrm{Lift}(A)\\to B$, apply $f(\\mathrm{up}(a))$. To recover the original data from a lifted value, use down with its stated inverse laws. Do not assume $A$ and its wrapper are definitionally the same type, nor that an arbitrary inverse law is computational unless the lift rules say so. Explicit insertion preserves the noncumulative system's distinction while allowing the intended data to cross the interface.

</details>

### Exercise 9
<a id="universes-and-paradox-control-ex-9"></a>
Explain why impredicative proposition quantification is not the unrestricted claim that every data universe contains itself.

<details><summary>Hint 1</summary>

The codomain sort is a hypothesis of the special product rule.

</details>
<details><summary>Hint 2</summary>

Data-valued products still obey their own universe rules.

</details>
<details><summary>Solution</summary>

A special rule can keep a quantified formula in the proposition sort when its codomain is a proposition, even if the quantified domain belongs to a higher data universe. It does not apply indiscriminately to data-valued dependent products or identify a universe with its own classifier. Elimination rules also distinguish proof data from general data. Consistency questions concern that exact combined foundation; merely observing impredicativity does not reproduce the Type:Type hypothesis of the cited paradox.

</details>

### Exercise 10
<a id="universes-and-paradox-control-ex-10"></a>
If $A:\\mathrm{Type}_0$ and $B(x):\\mathrm{Type}_2$, calculate a guaranteed level for $\\Pi x:A.B(x)$ and state what the premises do not establish about a particular family.

<details><summary>Hint 1</summary>

Apply the stated maximum formation rule.

</details>
<details><summary>Hint 2</summary>

A supplied upper classification does not exclude a smaller one in a cumulative system.

</details>
<details><summary>Solution</summary>

The rule gives $\\mathrm{Type}_{\\max(0,2)}=\\mathrm{Type}_2$. This is a guaranteed classification from the supplied premises. In a cumulative system the particular family could also admit a lower classification if additional information shows its fibres smaller. The stated premises alone do not establish such a lowering. Distinguishing a guaranteed level from a minimal possible level avoids reading an upper classification as an exact size theorem about every instance.

</details>

## Chapter summary

A naive $\\operatorname{Type} : \\operatorname{Type}$ leads to paradox. Universe hierarchies prevent self-membership by stratifying types into levels. Cumulative hierarchies allow implicit lifting; noncumulative hierarchies require explicit lifts. Universe polymorphism lets definitions work across levels without collapsing the hierarchy. The level structure is part of the trusted foundation, even when hidden by elaborator convenience.

**Backward pointers:** This chapter uses dependent types from Chapter 7, "Dependent function and pair types," and the type system from Chapter 3, "Simply typed lambda calculus."

**Forward pointers:** Chapter 12, "Constructive and Classical Existence," uses natural numbers, which are typically defined as an inductive type in $\\operatorname{Type}_0$. Chapter 16, "Proof assistant trust map," discusses the trusted computing base, including the universe hierarchy.
`;export{e as default};