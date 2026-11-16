
# Linear Logic

Linear logic, introduced by Jean-Yves Girard in 1987, is a refinement of classical and intuitionistic logic in which formulas are treated as resources that must be consumed exactly once. It has deep connections to computer science (type systems, proof nets, semantics of programming languages) and to category theory. This chapter introduces the sequent calculus, the multiplicative and additive connectives, and the exponentials.

## The sequent calculus

**Definition 14.1 (linear sequent).** A *sequent* has the form $\Gamma \vdash \Delta$ where $\Gamma$ and $\Delta$ are multisets of formulas. The intended meaning is that the resources in $\Gamma$ can be transformed into the resources in $\Delta$.

**Structural rules in classical logic:**
- Weakening: from $\Gamma \vdash \Delta$, infer $\Gamma, A \vdash \Delta$.
- Contraction: from $\Gamma, A, A \vdash \Delta$, infer $\Gamma, A \vdash \Delta$.
- Exchange: from $\Gamma, A, B, \Gamma' \vdash \Delta$, infer $\Gamma, B, A, \Gamma' \vdash \Delta$.

In linear logic, weakening and contraction are *not* freely available. They are recovered through the *exponential* modalities.

## Multiplicative connectives

**Definition 14.2 (multiplicative conjunction, tensor).** $A \otimes B$ represents having both $A$ and $B$ as resources.

$$\frac{\Gamma \vdash A, \Delta \quad \Gamma' \vdash B, \Delta'}{\Gamma, \Gamma' \vdash A \otimes B, \Delta, \Delta'}$$

**Definition 14.3 (multiplicative disjunction, par).** $A \mathbin{\mathrm{par}} B$ (usually written with an inverted ampersand) is the De Morgan dual of tensor. In a one-sided sequent calculus, its rule combines $A$ and $B$ in the same succedent context. It is not exclusive choice; the additive connective $\oplus$ carries the internal-choice rule.

**Definition 14.4 (linear implication).** $A \multimap B$ is defined as $A^\perp \mathbin{\mathrm{par}} B$, where $A^\perp$ is the linear negation.

**Definition 14.5 (linear negation).** $A^\perp$ is the De Morgan dual of $A$:
- $(A \otimes B)^\perp = A^\perp \mathbin{\mathrm{par}} B^\perp$
- $(A \mathbin{\mathrm{par}} B)^\perp = A^\perp \otimes B^\perp$
- $(A \oplus B)^\perp = A^\perp \mathbin{\&} B^\perp$
- $(A \mathbin{\&} B)^\perp = A^\perp \oplus B^\perp$
- $1^\perp = \bot$, $\bot^\perp = 1$
- $0^\perp = \top$, $\top^\perp = 0$

## Additive connectives

**Definition 14.6 (additive conjunction, with).** $A \mathbin{\&} B$ offers both behaviours under the same resources; the consumer selects which component is used.

$$\frac{\Gamma \vdash A, \Delta \quad \Gamma \vdash B, \Delta}{\Gamma \vdash A \mathbin{\&} B, \Delta}$$

**Definition 14.7 (additive disjunction, plus).** $A \oplus B$ makes an internal choice: a proof supplies either the left component or the right component.

$$\frac{\Gamma \vdash A, \Delta}{\Gamma \vdash A \oplus B, \Delta} \quad \frac{\Gamma \vdash B, \Delta}{\Gamma \vdash A \oplus B, \Delta}$$

## Exponentials

**Definition 14.8 (of course, !).** $!A$ means unlimited use of $A$ is permitted. It allows weakening and contraction:

$$\frac{\Gamma \vdash \Delta}{\Gamma, !A \vdash \Delta} \quad \frac{\Gamma, !A, !A \vdash \Delta}{\Gamma, !A \vdash \Delta}$$

Dereliction makes one ordinary use available:

$$\frac{\Gamma,A\vdash\Delta}{\Gamma,!A\vdash\Delta}.$$

Promotion, whose side condition requires the surrounding reusable context to be exponential, introduces $!$ on the other side. The full exponential calculus needs all four rules; weakening and contraction alone do not explain how $!A$ supplies an $A$.

**Definition 14.9 (why not, ?).** $?A$ is the De Morgan dual of $!A$: $?A = (!A^\perp)^\perp$.

**Theorem 14.10 (one fragmentary translation of intuitionistic logic).** Restrict formulas to atoms, conjunction, and implication. Fix the call-by-name translation $(\cdot)^*$ by $p^*=p$, $(A\land B)^*=A^*\mathbin{\&}B^*$, and $(A\to B)^*=!A^*\multimap B^*$. A derivable intuitionistic sequent $A_1,\ldots,A_n\vdash B$ in this fragment maps to $!A_1^*,\ldots,!A_n^*\vdash B^*$. The translation of the entire reusable context is essential; the isolated equation for implication is not by itself an embedding theorem. Extending the theorem to disjunction or falsity requires additional, explicitly chosen clauses and is outside this displayed fragment.

## Proof nets

**Definition 14.11 (proof net).** A *proof net* is a graphical representation of a linear logic proof that eliminates bureaucratic distinctions between sequent proofs. It consists of a linking of atomic formulas satisfying certain correctness criteria (e.g., the Danos–Regnier criterion).

**Theorem 14.12 (sequentialization, unit-free MLL).** For the standard unit-free multiplicative syntax and Danos--Regnier correctness criterion, a proof structure is a proof net if and only if it sequentializes to a sequent-calculus proof. Units, additives, and exponentials require additional syntax and correctness machinery.

Proof nets are the canonical proof objects of linear logic, analogous to lambda terms for intuitionistic logic.

## Common errors

**Error: treating linear implication like intuitionistic implication.** An unmarked hypothesis $A$ cannot in general be weakened or contracted when proving $B$ from $A$. Marking a hypothesis with $!$ licenses the structural behaviour through the exponential rules.

**Error: forgetting that weakening and contraction are restricted.** In linear logic, you cannot freely discard or duplicate formulas. The exponential modalities control where these operations are allowed.

**Error: confusing multiplicative and additive connectives.** $A \otimes B$ means you have both; $A \mathbin{\&} B$ means you have a choice. In classical logic, both are represented by $\land$, but they behave differently in linear logic.

## A single-conclusion fragment for explicit derivations

The earlier two-sided notation presents the classical setting. For the next examples fix the intuitionistic single-conclusion fragment, writing $\Gamma\vdash A$. Contexts are multisets of **occurrences**. Tensor introduction splits them: from $\Gamma\vdash A$ and $\Delta\vdash B$ derive $\Gamma,\Delta\vdash A\otimes B$. Tensor elimination unpacks one occurrence of $A\otimes B$ into one $A$ and one $B$. Linear implication introduction discharges one $A$ from a derivation of $B$, producing $A\multimap B$; application consumes both that function and one input of type $A$.

For with, both introduction premises use the **same** context: from $\Gamma\vdash A$ and $\Gamma\vdash B$ derive $\Gamma\vdash A\mathbin{\&}B$. Its elimination selects one branch. For plus, introduction chooses one injection; elimination requires a derivation of one common result from either possible payload, again with the same surrounding resources in each branch. These rules distinguish alternative behaviours from simultaneously produced outputs.

An occurrence in a context is not the same thing as a truth value known forever. In a resource reading, an unmarked assumption provides one use according to the chosen rules. An exponential assumption has additional structural permissions. A programming interpretation must specify how such permissions correspond to operations on actual data; linear logic does not assert that arbitrary physical objects are clonable whenever someone writes an exclamation mark beside their names.

## Worked example 1: exchanging a tensor

To prove $A\otimes B\vdash B\otimes A$, first use tensor elimination to work under one $a:A$ and one $b:B$. The identity axiom proves $B$ using the $b$ context and $A$ using the $a$ context. Tensor introduction splits the available context into precisely those two disjoint pieces and constructs the output pair in reversed order. Repacking the input by tensor elimination proves the displayed sequent.

In linear term notation, write $\lambda p.\mathrm{let}\ a\otimes b=p\ \mathrm{in}\ b\otimes a$. Each bound resource occurs once. The proof does not use contraction and does not require commutativity of a multiplication operation on the data themselves. Exchange of context order is a structural permission of this particular calculus, allowing the resources to be used in the opposite output order.

## Worked example 2: linear currying in both directions

From a supplied $f:(A\otimes B)\multimap C$, assume $a:A$ and then $b:B$. Tensor introduction forms $a\otimes b$ with a disjoint one-use context for each input. Apply $f$ to obtain $C$. Discharging $b$ and then $a$ gives $A\multimap(B\multimap C)$. Discharging $f$ supplies the forward conversion as a linear function.

Conversely, from $g:A\multimap(B\multimap C)$ and $p:A\otimes B$, unpack $p$ into $a,b$. Applying $g$ to $a$ consumes both and produces $B\multimap C$; applying that result to $b$ produces $C$. Discharge $p$ to obtain $(A\otimes B)\multimap C$, then discharge $g$. Every original resource has been used exactly once in both constructions. Under the corresponding beta/eta equality rules the conversions express the usual currying isomorphism; the two derivations already establish mutual implication without assuming an equality convention silently.

The whole context matters. An ordinary intuitionistic proof can use its function input twice or discard an argument; such a proof does not automatically translate to the same unmarked linear type. The explicit exponential translation supplies reusable permissions where needed, instead of pretending that the linear arrow alone means an ordinary reusable function interface.

## Worked example 3: with is not tensor

For an arbitrary atom $p$, the sequent $p\vdash p\mathbin{\&}p$ has two identity premises with the same input context. It offers either of two ways to return the supplied $p$, according to which branch the consumer requests. It does not return two independent copies at once. The tensor sequent $p\vdash p\otimes p$ instead asks its introduction rule to split one occurrence between two simultaneously required premises, leaving one without its input.

In the cut-free unit-free multiplicative-exponential calculus, the latter is impossible for the stated arbitrary atom, as in Exercise 4. Extending that nonderivability statement to proofs containing cuts uses the standard cut-elimination theorem, a cited metatheorem here. The atomic and fragment hypotheses are essential: exponential formulas already permit duplication, and unit formulas have their own rules. A picture of one resource being split cannot replace checking those formal hypotheses.

## The reusable-context translation, proved rule by rule

For the atom/conjunction/implication translation stated earlier, every assumption of an intuitionistic context receives an outer exponential. We can verify the sound direction of the translation by induction on the original derivation. This proof permits the ordinary cut/composition rule of the chosen linear presentation; it does not prove cut elimination.

An intuitionistic assumption translates by linear identity on its translated formula and dereliction from its exponential. Other reusable assumptions may be weakened. Source weakening and contraction are justified by the corresponding exponential structural rules, so repeated or unused source labels create no missing linear permission.

Conjunction introduction has two source premises under the same context. Their translations have the same reusable context, so with-introduction applies. Conjunction elimination selects the appropriate with component, composing the existing derivation with the selected projection through cut. No tensor split is required, which is why this translation uses with rather than silently substituting tensor for every conjunction.

For implication introduction, the source derivation under an extra assumption $A$ translates under an extra $!A^*$. Linear implication introduction discharges that occurrence and returns $!A^*\multimap B^*$, exactly the chosen translation of the implication. For implication elimination, one premise provides this translated function and the other provides $A^*$. Promote the latter to $!A^*$: promotion is allowed because **every** surrounding hypothesis is exponential. Compose the function with that promoted input. The two copied reusable contexts can then be merged by exponential contraction. This yields the required translated conclusion.

These cases exhaust the commissioned fragment. They establish that source derivability produces target derivability under the displayed translation. A converse, an equality-preserving embedding, or an extension to more connectives is an additional theorem. The local proof never claims those conclusions from the isolated equation for the arrow. This is the same discipline used for Curry–Howard: specify the presentations and exact direction of the result.

## Proof nets: the limits of a diagram

In the standard unit-free multiplicative setting, a switching selects one premise edge at each par node. The Danos–Regnier condition requires each switching graph to be connected and acyclic. The sequentialisation theorem quoted earlier concerns that precise syntax and condition. Adding units, additives or exponentials changes the representation and the required correctness machinery; a drawing satisfying a simplified tree check is not automatically a proof of a formula in the richer system.

For an atomic identity followed by par introduction, the two dual atoms share an axiom link and the par node gives the formula from Exercise 5. A complete textual description of those links already captures the tiny example. In a larger proof structure, correct local connections are not sufficient: every permitted switching must meet the global condition. A visual resemblance to a lambda term or a graph is not itself the theorem connecting the object to a sequent proof.

## Practice exercises

### Exercise 1
<a id="linear-logic-ex-1"></a>
Prove $A \vdash A$ in linear logic.

<details><summary>Hint 1</summary>

Inspect the identity rule.

</details>
<details><summary>Hint 2</summary>

No structural rule or connective introduction is needed.

</details>
<details><summary>Solution</summary>

This is the identity axiom, valid for all formulas in linear logic.

</details>

### Exercise 2
<a id="linear-logic-ex-2"></a>
Show that $(A \otimes B) \multimap C$ is equivalent to $A \multimap (B \multimap C)$.

<details><summary>Hint 1</summary>

Unpack a tensor to obtain one occurrence of each component.

</details>
<details><summary>Hint 2</summary>

Compare the two complete currying derivations in the worked example.

</details>
<details><summary>Solution</summary>

Both formulas express that given one $A$ and one $B$, you can produce one $C$. The proof uses the associativity of tensor and the definition of linear implication. More explicitly, the forward map takes f, then a, then b, forms their tensor and applies f once. The reverse map takes g and one tensor, unpacks a and b, applies g to a and then the resulting function to b. Every resource is used exactly once, and linear arrow introduction discharges precisely those inputs.

</details>

### Exercise 3
<a id="linear-logic-ex-3"></a>
Under the fixed call-by-name translation of the atom--conjunction--implication fragment above, translate the intuitionistic formula $(A \land B) \to C$.

<details><summary>Hint 1</summary>

Use the fixed conjunction clause of the displayed translation.

</details>
<details><summary>Hint 2</summary>

The implication clause adds an exponential to the translated domain.

</details>
<details><summary>Solution</summary>

It becomes

$$!(A^*\mathbin{\&}B^*)\multimap C^*.$$

This answer follows the stated translation rather than silently switching between tensor and with. If the formula occurs as a reusable hypothesis in a translated sequent, the context translation adds its outer $!$ as well.

</details>

### Exercise 4
<a id="linear-logic-ex-4"></a>
For an arbitrary atom $p$, explain why $!p \vdash p \otimes p$ is provable while $p \vdash p \otimes p$ is not derivable in unit-free multiplicative-exponential linear logic.

<details><summary>Hint 1</summary>

The exclamation-marked assumption licenses contraction and dereliction.

</details>
<details><summary>Hint 2</summary>

The arbitrary unmarked atom cannot supply both sides of a tensor split.

</details>
<details><summary>Solution</summary>

Contract $!p$ to two copies, derelict each copy to $p$, and apply tensor introduction. In a cut-free proof of $p\vdash p\otimes p$, tensor introduction would have to split the single atomic occurrence between two premises, leaving one premise without a matching $p$; no rule can create it. The restriction to an arbitrary atom matters: formulas such as $!B$ and multiplicative units have structural rules that defeat the blanket claim for every $A$.

</details>

### Exercise 5
<a id="linear-logic-ex-5"></a>
Draw a proof net for $\vdash A^\perp \mathbin{\mathrm{par}} A$.

<details><summary>Hint 1</summary>

Start from the atomic identity axiom link.

</details>
<details><summary>Hint 2</summary>

Add the par node and inspect its two switchings.

</details>
<details><summary>Solution</summary>

The proof net has two atomic formulas $A^\perp$ and $A$ linked by an axiom edge. The par node combines them into $A^\perp \mathbin{\mathrm{par}} A$. This is the linear logic version of the law of excluded middle for atomic formulas.

</details>

### Exercise 6
<a id="linear-logic-ex-6"></a>
Give a resource-by-resource derivation of $A\otimes B\vdash B\otimes A$. State the structural rule allowing the order change.

<details><summary>Hint 1</summary>

Unpack the tensor into two occurrences.

</details>
<details><summary>Hint 2</summary>

Use disjoint identity premises for the output tensor.

</details>
<details><summary>Solution</summary>

After tensor elimination, use $b:B\vdash B$ and $a:A\vdash A$ as identity premises. Tensor introduction combines their disjoint contexts into $a:A,b:B\vdash B\otimes A$, up to exchange. Reintroducing the packed input gives the requested sequent. Exchange permits reordering context occurrences; no weakening or contraction was used. The linear term unpacks the input once and returns the two fields in the opposite order.

</details>

### Exercise 7
<a id="linear-logic-ex-7"></a>
Explain why $p\vdash p\mathbin{\&}p$ does not contradict the resource restriction preventing $p\vdash p\otimes p$ for an arbitrary atom.

<details><summary>Hint 1</summary>

Compare the contexts in the two introduction rules.

</details>
<details><summary>Hint 2</summary>

One output offers alternatives; the other requests both simultaneously.

</details>
<details><summary>Solution</summary>

With-introduction uses two identity derivations sharing the same context and offers a consumer one selected branch. Tensor introduction must partition the context between two simultaneously required outputs. The single atomic occurrence cannot inhabit both disjoint input contexts. The distinction is therefore in the formal rules and their interpretation, not an accidental choice of symbol. It says nothing about formulas already marked reusable by an exponential.

</details>

### Exercise 8
<a id="linear-logic-ex-8"></a>
Where is promotion used in the proof of the intuitionistic implication-elimination translation, and why is its side condition satisfied?

<details><summary>Hint 1</summary>

The translated function expects an exponential input.

</details>
<details><summary>Hint 2</summary>

Every translated source assumption has an outer exponential.

</details>
<details><summary>Solution</summary>

The function premise yields $!A^*\multimap B^*$, while the argument premise initially yields $A^*$. Promotion changes that argument result to $!A^*$. Its surrounding context consists entirely of exponentially translated assumptions, exactly the required side condition. Application/composition can then produce $B^*$. Duplicated copies of the reusable context are merged by exponential contraction. Omitting promotion would leave the application domain mismatched.

</details>

### Exercise 9
<a id="linear-logic-ex-9"></a>
Does the displayed fragment translation prove an embedding theorem for arbitrary disjunction and falsity formulas? Explain what is missing.

<details><summary>Hint 1</summary>

List the recursive clauses defining the translation.

</details>
<details><summary>Hint 2</summary>

The induction proof handles exactly the rules for those clauses.

</details>
<details><summary>Solution</summary>

No. The translation defines clauses only for atoms, conjunction and implication, and its derivation induction covers those connectives. Disjunction and falsity need chosen target formulas and proofs that their introduction/elimination rules translate correctly under the reusable context. A converse or preservation of proof equality would also require additional work. An informal analogy between connectives supplies none of those missing definitions or theorem directions.

</details>

### Exercise 10
<a id="linear-logic-ex-10"></a>
State what must be checked before using the unit-free multiplicative proof-net sequentialisation theorem for a proposed diagram.

<details><summary>Hint 1</summary>

First identify the syntax of every node and link.

</details>
<details><summary>Hint 2</summary>

Correctness quantifies over every switching, not just one pleasing drawing.

</details>
<details><summary>Solution</summary>

The proof structure must belong to the specified unit-free multiplicative syntax, have legal dual-atom axiom links and the proper connective nodes, and satisfy connectedness and acyclicity for every Danos–Regnier switching. The cited sequentialisation theorem then relates that object to a sequent proof. Units, additive choices and exponentials require different machinery, so silently adding them would leave the theorem's hypotheses. Local visual neatness alone does not establish the global switching property.

</details>

## Chapter summary

Linear contexts track occurrences, while exponentials license specific structural permissions. Tensor splits resources for simultaneous results; with reuses a context across alternative behaviours; plus carries a chosen alternative. The explicit currying derivations and reusable-context translation show why the surrounding context is part of a correspondence theorem. Proof-net results require their exact fragment and switching conditions. The next chapter studies higher identity structure in a different extension of the basic type-theoretic framework.


## Sources

The original logic bibliography supplies the Girard linear-logic and Danos–Regnier proof-net references. The reusable-context translation above proves only its stated atom/conjunction/implication sound direction. Cut elimination and sequentialisation remain cited metatheorems of their exact fragments.
