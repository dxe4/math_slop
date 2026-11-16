var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: reference-desk-a-levels-of-language
title: "First-Order Syntax, Semantics and Soundness"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# First-Order Syntax, Semantics and Soundness

Every argument in logic and foundations moves across at least four distinct layers. Confusing them is the most common source of error in the subject. This chapter establishes the hierarchy, introduces the vocabulary used throughout the book, and works examples that stay cleanly inside one layer at a time.

## The four layers

| Layer | Objects | Typical notation | Question |
|---|---|---|---|
| Object language | terms and formulas | $\\forall x \\, P(x)$ | Is this a well-formed expression? |
| Structure plus assignment | domain and interpretations | $\\mathcal{M}, s \\models \\varphi$ | Is $\\varphi$ true under this interpretation? |
| Proof calculus | formulas and derivations | $T \\vdash \\varphi$ | Is there a finite derivation from $T$? |
| Metalanguage | statements about the above | “$T$ has a model” | What theorem are we proving about syntax or semantics? |

Quotation prevents level slips. A number may satisfy an arithmetic formula; a string encoding that formula is a different object. Gödel coding relates the levels inside arithmetic but does not erase them.

## Object language: syntax

Given a signature $L$, record each symbol’s arity. Define terms recursively. Define formulas recursively from atomic formulas, connectives, and quantifiers.

**Definition 1.5 (signature).** A *signature* $L$ is a set of constant symbols, function symbols with specified arities, and relation symbols with specified arities.

**Definition 1.6 ($L$-term).** The set of $L$-*terms* is the smallest set such that:
1. Every constant symbol of $L$ is an $L$-term.
2. Every variable is an $L$-term.
3. If $f$ is an $n$-ary function symbol of $L$ and $t_1, \\dots, t_n$ are $L$-terms, then $f(t_1, \\dots, t_n)$ is an $L$-term.

**Definition 1.7 ($L$-formula).** The set of $L$-*formulas* is the smallest set such that:
1. If $R$ is an $n$-ary relation symbol and $t_1, \\dots, t_n$ are $L$-terms, then $R(t_1, \\dots, t_n)$ is an atomic formula. In first-order logic with equality, $t_1=t_2$ is also atomic.
2. If $\\varphi$ and $\\psi$ are formulas, so are $\\neg \\varphi$, $(\\varphi \\land \\psi)$, $(\\varphi \\lor \\psi)$, and $(\\varphi \\to \\psi)$.
3. If $\\varphi$ is a formula and $x$ is a variable, then $\\forall x \\, \\varphi$ and $\\exists x \\, \\varphi$ are formulas.

Track variable occurrences, not merely variable names: in

$$P(x) \\land \\exists x \\, Q(x,y),$$

the first $x$ is free while the later $x$ occurrences are bound. Alpha-renaming the binder gives the equivalent $P(x) \\land \\exists z \\, Q(z,y)$ and makes scope visible.

**Definition 1.8 (free and bound variables).** An occurrence of variable $x$ in formula $\\varphi$ is *bound* if it lies inside the scope of a quantifier $\\forall x$ or $\\exists x$; otherwise it is *free*. A formula with no free variables is a *sentence*.

**Definition 1.9 (capture-avoiding substitution).** The substitution $\\varphi[t/x]$ replaces free $x$-occurrences by term $t$ only when variables in $t$ will not become accidentally bound. Formally, if $t$ contains a variable $y$ that would fall under the scope of a $\\forall y$ or $\\exists y$ in $\\varphi$, first alpha-rename that binder to a fresh variable, then substitute.

A formal substitution lemma connects syntactic replacement with semantic reassignment: if $\\mathcal{M}, s \\models \\varphi[t/x]$ and the substitution is capture-avoiding, then $\\mathcal{M}, s' \\models \\varphi$ where $s'$ agrees with $s$ except possibly at $x$, and $s'(x)$ is the denotation of $t$ in $\\mathcal{M}$ under $s$.

## Structure plus assignment: semantics

**Definition 1.10 ($L$-structure).** An $L$-*structure* $\\mathcal{M}$ consists of a nonempty domain $M$, an interpretation of each constant symbol as an element of $M$, each $n$-ary function symbol as a function $M^n \\to M$, and each $n$-ary relation symbol as a subset of $M^n$.

**Definition 1.11 (satisfaction).** Given an $L$-structure $\\mathcal{M}$ and a variable assignment $s: \\text{Vars} \\to M$, the satisfaction relation $\\mathcal{M}, s \\models \\varphi$ is defined by recursion on formulas:
- $\\mathcal{M}, s \\models R(t_1, \\dots, t_n)$ iff $(t_1^{\\mathcal{M},s}, \\dots, t_n^{\\mathcal{M},s}) \\in R^{\\mathcal{M}}$.
- In logic with equality, $\\mathcal{M},s\\models t_1=t_2$ iff $t_1^{\\mathcal M,s}$ and $t_2^{\\mathcal M,s}$ denote the same element of $M$; equality is not an arbitrary interpreted binary relation.
- $\\mathcal{M}, s \\models \\neg \\varphi$ iff $\\mathcal{M}, s \\not\\models \\varphi$.
- $\\mathcal{M}, s \\models (\\varphi \\land \\psi)$ iff $\\mathcal{M}, s \\models \\varphi$ and $\\mathcal{M}, s \\models \\psi$.
- $\\mathcal{M}, s \\models (\\varphi \\lor \\psi)$ iff $\\mathcal{M}, s \\models \\varphi$ or $\\mathcal{M}, s \\models \\psi$.
- $\\mathcal{M}, s \\models (\\varphi \\to \\psi)$ iff $\\mathcal{M}, s \\not\\models \\varphi$ or $\\mathcal{M}, s \\models \\psi$.
- $\\mathcal{M}, s \\models \\forall x \\, \\varphi$ iff for every $a \\in M$, $\\mathcal{M}, s[x/a] \\models \\varphi$.
- $\\mathcal{M}, s \\models \\exists x \\, \\varphi$ iff there exists $a \\in M$ such that $\\mathcal{M}, s[x/a] \\models \\varphi$.

Here $s[x/a]$ is the assignment that agrees with $s$ except that it sends $x$ to $a$.

**Example.** Let $L = \\{P, c\\}$ where $P$ is a unary relation and $c$ a constant. Let $\\mathcal{M}$ have domain $\\{0,1\\}$, $P^{\\mathcal{M}} = \\{0\\}$, and $c^{\\mathcal{M}} = 0$. Then:
- $\\mathcal{M} \\models P(c)$ because $c^{\\mathcal{M}} = 0 \\in P^{\\mathcal{M}}$.
- $\\mathcal{M} \\models \\exists x \\, P(x)$ because $0 \\in P^{\\mathcal{M}}$.
- $\\mathcal{M} \\not\\models \\forall x \\, P(x)$ because $1 \\notin P^{\\mathcal{M}}$.

## Proof calculus: derivations

A proof calculus is a set of axioms and inference rules. The exact choice varies by textbook, but all standard calculi for classical first-order logic are equivalent in the sense that they derive exactly the same formulas from the same premises.

**Definition 1.12 (derivability).** $T \\vdash \\varphi$ means there exists a finite sequence of formulas ending in $\\varphi$, each of which is either a logical axiom, a member of $T$, or follows from earlier formulas by an inference rule.

Common inference rules include:
- *Modus ponens*: from $\\varphi$ and $\\varphi \\to \\psi$, infer $\\psi$.
- *Universal generalization*: from $\\varphi$, infer $\\forall x \\, \\varphi$, provided $x$ is not free in any premise used to derive $\\varphi$.
- *Existential elimination*: from $\\exists x\\,\\varphi(x)$, reason in a subderivation with $\\varphi(c)$ for a fresh eigenconstant $c$, and discharge that temporary assumption when deriving a conclusion in which $c$ does not occur. Treating $\\varphi(c)$ as an unrestricted global consequence is unsound.

The restriction on universal generalization is essential: omitting it makes the rule unsound. For example, from $P(x)$ (with $x$ free) one cannot infer $\\forall x \\, P(x)$ unless $x$ was introduced as an arbitrary element with no special assumptions.

## Metalanguage: theorems about logic

The metalanguage is ordinary mathematical prose, often informal set theory, used to state and prove facts about object languages, structures, and calculi.

**Examples of metalanguage statements:**
- “Every consistent first-order theory has a model.” (This is the completeness theorem; proved in Chapter “Model Theory”.)
- “First-order logic is compact.” (Proved in Chapter “Model Theory”.)
- “ZF does not prove the continuum hypothesis.” (Discussed in Chapter “Forcing”.)

These statements are not formulas of the object language; they are claims about formulas, structures, and derivations made in the metalanguage.

## Common errors

**Error: confusing truth with provability.**
A student writes: “$\\mathcal{M} \\models \\varphi$, therefore $T \\vdash \\varphi$.” Truth in one structure does not imply derivability from $T$. Completeness applies only after showing $T\\models\\varphi$, meaning that *every* model of $T$ satisfies $\\varphi$.

**Error: level slip in Gödel numbering.**
A number $n$ may code a formula $\\varphi$. The statement “$n$ is even” is an arithmetic claim about a number. The statement “$\\varphi$ is provable” is a metatheoretic claim. The arithmetized proof predicate $\\text{Prf}_T(n, m)$ is a formula of arithmetic that represents derivability; it is not identical to the metatheoretic notion, though under derivability conditions the two align.

**Error: empty domain assumptions.**
Standard first-order structures are required to have nonempty domains. If empty structures are admitted, some equivalences involving unused quantified variables need adjustment. Always state the convention before invoking a metatheorem.


## Preparation and the chosen calculus

The prerequisite is [Introduction to Logic and Set Theory](/books/library-book-introduction-to-logic-and-set-theory/), particularly its full syntax, substitution, natural-deduction and completeness arguments. Here we consolidate those foundations at a level suitable for model theory and proof theory. Signatures are set-sized and finitary; structures have nonempty domains, functions are total, and logical equality denotes actual identity. Ambient set theory is ZFC when arbitrary language sizes or simultaneous choices are used. This convention does not add choice axioms to an object theory being interpreted.

The introductory description of calculi above is deliberately general. For the soundness theorem below choose the same classical natural-deduction calculus as the prerequisite book. Its formulas also include logical falsehood $\\bot$, never satisfied. Assumptions are leaves of a finite tree, and introduction rules mark which temporary assumptions are discharged. Open assumptions are exactly those not discharged on the way to the root.

**Definition 1.1 (Rules fixed here).** Conjunction introduction combines $A,B$; elimination selects either conjunct. Disjunction introduction inserts either disjunct; elimination combines a proof of $C$ from temporary $A$ and a proof of that same $C$ from temporary $B$, discharging the two case assumptions, with a proof of $A\\lor B$. Implication introduction discharges $A$ from a proof of $B$; elimination is modus ponens. Negation introduction discharges $A$ from a proof of falsehood; elimination combines $A,\\neg A$ into falsehood. Explosion derives any formula from falsehood. Classical reductio discharges $\\neg A$ from a proof of falsehood and concludes $A$.

Universal elimination substitutes a free-for term in the body. Universal introduction binds a variable free in no open assumption. Existential introduction generalises an admissible term instance. Existential elimination uses a fresh variable $y$ in a temporary instance $A[y/x]$, with $y$ absent freely from the conclusion and all other open assumptions and chosen fresh in $A$. Bound variables are renamed to make all these substitutions capture avoiding. Identity rules are reflexivity $t=t$ and substitution from $s=t$ and $B[s/v]$ to $B[t/v]$, for a free-variable template whose substitutions are admissible.

These conditions name one actual calculus rather than an unspecified collection of valid rules. They also make room for equality without confusing an arbitrary equivalence relation with identity. Nonlogical axioms are premises; soundness for them is relative to structures satisfying those premises.

## The two semantic induction lemmas

**Lemma 1.2 (Coincidence).** Term value depends only on the variables in the term, and satisfaction depends only on free variables of the formula.

*Proof.* For terms, induction on applications gives equal argument values under agreeing assignments and hence equal function values. This gives atomic agreement. Boolean connectives preserve agreement. For $QxA$, assignments agreeing on its free variables still agree on all free variables of $A$ after both send $x$ to any one chosen object. Apply induction to the body and quantify over that common domain, for either quantifier. ∎

**Lemma 1.3 (Full substitution lemma).** If substitution is admissible or first made capture avoiding, then

$$M,s\\models A[t/x]\\quad\\Longleftrightarrow\\quad M,s[x\\mapsto t^{M,s}]\\models A.$$

*Proof.* The accompanying term identity is $u[t/x]^{M,s}=u^{M,s[x\\mapsto t^{M,s}]}$, proved first by term induction. It gives atomic formula cases; Boolean cases follow recursively. At binder $Qy$, if $y=x$, replacement does not enter and the quantifier overwrites the earlier $x$ assignment. Otherwise rename $y$ so it is absent from $t$. Then $t^{M,s[y\\mapsto a]}=t^{M,s}$ by coincidence, and assignments to distinct $x,y$ commute. Apply induction to the body at $s[y\\mapsto a]$ and quantify over $a$. Renaming a bound variable preserves truth by the same fresh reassignment calculation. ∎

The lemma is an equivalence, strengthening the one direction stated earlier. It is not a statement that terms are themselves domain elements before interpretation. Syntax, assignment and semantic value appear as different objects on its two sides.

## Soundness for all the displayed rules

**Theorem 1.4 (Soundness).** If $\\Gamma\\vdash A$ in Definition 1.1, every structure and assignment satisfying all open premises in $\\Gamma$ satisfies $A$.

*Proof.* Induct on the finite proof tree, with the stronger assertion for its actual open assumptions. An assumption leaf is immediate. Conjunction introduction and elimination use the two conjunct truth conditions. Disjunction introduction has a true disjunct; elimination uses whichever disjunct is true to select a case proof, so its common conclusion follows. Modus ponens uses the false-row condition for material implication. Implication introduction holds because either its antecedent is false or, when true, the induction hypothesis for its subproof gives its consequent.

For negation introduction, a valuation satisfying the remaining assumptions cannot satisfy the discharged assumption as well, since induction would make falsehood true. Thus that assumption is false. Negation elimination and explosion are sound because no structure and assignment satisfy the relevant open assumptions of a derived contradiction. Classical reductio is sound because if its conclusion $A$ were false, the additional assumption $\\neg A$ would be true and the subproof would again force falsehood.

For universal elimination, instantiate the universal at object $t^{M,s}$ and use Lemma 1.3. Existential introduction uses the same object as witness. For universal introduction, fix any object $a$ and reassign the generalised variable to $a$. Coincidence preserves all open assumptions, so induction gives the body at that assignment; arbitrariness gives the universal formula. For existential elimination, choose a witness $a$ to its existential premise, and assign the fresh variable $y$ to it. Substitution gives the temporary instance. Coincidence preserves every other open assumption, so induction gives the case conclusion. Since $y$ is not free in that conclusion, coincidence transfers it back to the original assignment.

Reflexivity is identity of a term value with itself. For equality substitution, the two terms have the same value; Lemma 1.3 therefore interprets both instances by the same reassignment of the template variable. This proves the conclusion. Every rule is covered. ∎

Soundness does not assert truth in one intended structure merely from consistency. It says a derivation preserves truth in every model of its assumptions. Completeness, reviewed in the next chapter and proved in the prerequisite, supplies the converse semantic-to-syntactic direction for first-order sentences under its stated metatheory.

## Worked example 1: a free and a bound use of one name

Consider $P(x)\\land\\exists xR(x,y)$ on domain $\\{0,1\\}$ with $P=\\{0\\}$ and $R=\\{(1,0)\\}$. At assignment $x=0,y=0$, the first conjunct is true and the existential is witnessed by one. Hence the conjunction is true. At $x=1,y=0$, the first conjunct becomes false, although the existential remains true. Renaming the bound $x$ to $z$ gives $P(x)\\land\\exists zR(z,y)$ and makes this independence visible. Quantifying one occurrence of a name does not bind an earlier occurrence outside its scope.

## Worked example 2: an inadmissible captured instance

In natural numbers with $R(u,v)$ meaning $u<v$, $\\exists yR(x,y)$ is true for every value of its free $x$. Replacing $x$ by the free variable $y$ requires renaming the binder, giving $\\exists zR(y,z)$; at $y=4$, five is a witness. The captured expression $\\exists yR(y,y)$ is false for every assignment. Thus the renaming step changes a superficially plausible string replacement into the actual semantic reassignment guaranteed by Lemma 1.3.

## Worked example 3: transporting a witness safely

From $\\forall x(P(x)\\to Q(x))$ and $\\exists xP(x)$, open a witness case $P(y)$ for fresh $y$. Instantiate the universal at $y$, use modus ponens to obtain $Q(y)$, and introduce $\\exists xQ(x)$. This conclusion no longer contains free $y$, and neither original sentence does, so existential elimination closes the case. The resulting proof transports whatever witness exists; it never claims that $P(c)$ holds for an arbitrarily preselected constant.

## Practice exercises

### Exercise 1
<a id="reference-desk-a-levels-of-language-ex-1"></a>

Let $L = \\{R, f, c\\}$ where $R$ is binary, $f$ is unary, and $c$ is a constant. In the formula $\\forall x \\, (R(x, f(y)) \\to \\exists y \\, R(f(y), x))$, identify all free and bound occurrences of each variable.

<details>
<summary>Hint 1</summary>

Identify each binder’s exact scope.

</details>
<details>
<summary>Hint 2</summary>

The inner existential does not reach backward into the antecedent.

</details>
<details>
<summary>Solution</summary>

**Solution.** The term-occurrences of $x$ in the matrix are bound by $\\forall x$. The first term-occurrence of $y$ (in the antecedent's $f(y)$) is free, while the term-occurrence of $y$ in the consequent's $f(y)$ is bound by $\\exists y$. The symbol written next to $\\exists$ is the binder, not a further occurrence of a variable term. Thus $y$ has one free and one bound term-occurrence, plus one binding occurrence.

</details>

### Exercise 2
<a id="reference-desk-a-levels-of-language-ex-2"></a>

Perform capture-avoiding substitution of $f(y)$ for free $x$ in $\\exists y \\, R(x, y)$.

<details>
<summary>Hint 1</summary>

The inserted term contains the current binder’s variable.

</details>
<details>
<summary>Hint 2</summary>

Rename the binder to a name absent from the term before replacing free x.

</details>
<details>
<summary>Solution</summary>

**Solution.** The term $f(y)$ contains $y$, which would be captured by $\\exists y$. First alpha-rename: $\\exists z \\, R(x, z)$. Then substitute: $\\exists z \\, R(f(y), z)$. The naïve $\\exists y \\, R(f(y), y)$ changes the meaning by making the second $y$ bound.

</details>

### Exercise 3
<a id="reference-desk-a-levels-of-language-ex-3"></a>

Construct a structure $\\mathcal{M}$ with domain $\\{0,1,2\\}$ and a unary relation $P$ such that $\\mathcal{M} \\models \\exists x \\, P(x) \\land \\exists x \\, \\neg P(x)$ but $\\mathcal{M} \\not\\models \\exists x \\, (P(x) \\land \\neg P(x))$.

<details>
<summary>Hint 1</summary>

Choose a predicate that is nonempty but not the whole domain.

</details>
<details>
<summary>Hint 2</summary>

The two existential witnesses can be different objects.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $P^{\\mathcal{M}} = \\{0, 1\\}$. Then $0 \\in P^{\\mathcal{M}}$ gives $\\exists x \\, P(x)$, and $2 \\notin P^{\\mathcal{M}}$ gives $\\exists x \\, \\neg P(x)$. But no element is both in and not in $P^{\\mathcal{M}}$, so $\\exists x \\, (P(x) \\land \\neg P(x))$ is false.

</details>

### Exercise 4
<a id="reference-desk-a-levels-of-language-ex-4"></a>

Explain why universal generalization requires that $x$ not be free in any premise.

<details>
<summary>Hint 1</summary>

Reassign the proposed generalisation variable.

</details>
<details>
<summary>Hint 2</summary>

If an open premise changes truth, the soundness induction fails.

</details>
<details>
<summary>Solution</summary>

**Solution.** Suppose we allowed generalization from premises containing free $x$. From the premise $P(x)$ we could infer $\\forall x \\, P(x)$. But $P(x)$ with $x$ free is only asserted for a particular (though unspecified) element. Generalizing would claim it holds for all elements, which is a stronger statement not warranted by the premise. The restriction ensures $x$ was introduced as genuinely arbitrary.

</details>

### Exercise 5
<a id="reference-desk-a-levels-of-language-ex-5"></a>

State the following in the metalanguage: “There is no formula that is true in every structure.” Is this statement true?

<details>
<summary>Hint 1</summary>

Quantify over formulas, structures and assignments in the metalanguage.

</details>
<details>
<summary>Hint 2</summary>

A tautology provides a counterexample; compactness concerns a different finite-model assertion.

</details>
<details>
<summary>Solution</summary>

**Solution.** Metalanguage statement: “There does not exist an $L$-formula $\\varphi$ such that for every $L$-structure $\\mathcal{M}$ and every assignment $s$, $\\mathcal{M}, s \\models \\varphi$.” This is false: any tautology such as $\\forall x \\, (P(x) \\to P(x))$ is true in every structure. The genuinely true statement in this neighborhood is that no single sentence is true in *exactly* the finite structures: if $\\varphi$ had arbitrarily large finite models, then compactness (adjoin new constants forced to be pairwise distinct) would produce an infinite model of $\\varphi$.

</details>

### Exercise 6
<a id="reference-desk-a-levels-of-language-ex-6"></a>

Prove that satisfaction of a sentence does not depend on an assignment.

<details>
<summary>Hint 1</summary>

Use coincidence.

</details>
<details>
<summary>Hint 2</summary>

A sentence has an empty free-variable set.

</details>
<details>
<summary>Solution</summary>

Any two assignments agree on the empty set of free variables. Lemma 1.2 therefore gives the same truth value under both, which justifies writing M models the sentence without an assignment.

</details>

### Exercise 7
<a id="reference-desk-a-levels-of-language-ex-7"></a>

Give a countermodel to $\\exists xP(x)\\land\\exists xQ(x)\\models\\exists x(P(x)\\land Q(x))$.

<details>
<summary>Hint 1</summary>

Separate the two witnesses.

</details>
<details>
<summary>Hint 2</summary>

Use disjoint nonempty predicates on two objects.

</details>
<details>
<summary>Solution</summary>

On domain $\\{a,b\\}$ let $P=\\{a\\}$ and $Q=\\{b\\}$. Both separate existentials hold, but their predicates have empty intersection. Thus no common witness exists and the conclusion fails.

</details>

### Exercise 8
<a id="reference-desk-a-levels-of-language-ex-8"></a>

Derive symmetry of equality from reflexivity and template substitution.

<details>
<summary>Hint 1</summary>

Begin with s=t and s=s.

</details>
<details>
<summary>Hint 2</summary>

Use the template v=s.

</details>
<details>
<summary>Solution</summary>

From $s=t$ and $s=s$, substitute along the former in template $v=s$. Its instance at $s$ is reflexivity and its instance at $t$ is $t=s$, proving symmetry without a separate axiom.

</details>

### Exercise 9
<a id="reference-desk-a-levels-of-language-ex-9"></a>

Why can nonempty-domain semantics validate $\\forall xA\\to\\exists xA$ when the signature has no constants?

<details>
<summary>Hint 1</summary>

Variables are terms and assignments denote objects.

</details>
<details>
<summary>Hint 2</summary>

Instantiate at a fresh variable and existentially generalise.

</details>
<details>
<summary>Solution</summary>

From the universal premise, universal elimination gives $A[y/x]$ at a fresh variable term. Existential introduction gives the conclusion. Nonempty domains ensure assignments have a value for y even without a constant name. With empty domains the universal could be true and the existential false.

</details>

### Exercise 10
<a id="reference-desk-a-levels-of-language-ex-10"></a>

Prove that a countermodel to $\\Gamma\\models A$ rules out a derivation in the displayed calculus.

<details>
<summary>Hint 1</summary>

Use soundness as a conditional.

</details>
<details>
<summary>Hint 2</summary>

Apply its contrapositive, retaining the same premises.

</details>
<details>
<summary>Solution</summary>

If a derivation existed, Theorem 1.4 would make A true in every structure and assignment satisfying Gamma. The specified countermodel satisfies Gamma and falsifies A, a contradiction. Thus no such derivation exists; finite sampling without a countermodel would not establish that syntactic conclusion.

</details>

## Looking forward

The next chapter, “Model Theory”, develops the semantic layer in depth: elementary equivalence, the compactness theorem, and the Löwenheim–Skolem theorems. Later chapters on “Forcing” and “Large Cardinals” return to the metalanguage with increasingly sophisticated set-theoretic machinery.

## Sources

The original CC BY-SA 4.0 chapter body and five original solutions are retained, with its stable chapter identity unchanged. The added proofs develop the same natural-deduction calculus as Euler's L3 logic book. A primary teaching reference is the [Open Logic Project natural-deduction source](https://github.com/OpenLogicProject/OpenLogic/tree/master/content/first-order-logic/natural-deduction). The general sequent calculus of Chapter 6 is separately specified; equivalence of presentations is not a licence to omit their rule conditions.

## Summary

Syntax, interpretation, derivation and metatheory are different levels. Coincidence and capture-safe substitution connect them precisely. The explicit classical natural-deduction rules, including their quantifier side conditions and identity rules, admit a full soundness induction. Countermodels refute derivability, while consistency alone does not establish truth in an intended model. Model theory next studies the models and extensions compatible with a theory.
`;export{e as default};