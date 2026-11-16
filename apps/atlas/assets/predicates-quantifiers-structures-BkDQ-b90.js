var e=`---
parent_id: book-introduction-to-logic-and-set-theory
chapter_id: predicates-quantifiers-structures
title: "Predicates, Quantifiers and Structures"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Predicates, Quantifiers and Structures

## Statements about objects

Propositional logic treats its atoms as whole statements. It cannot express the difference between “every object has a suitable partner” and “one object is a suitable partner for everyone.” First-order logic supplies variables, terms, relations and quantifiers to express that difference. The semantics must now say what the objects are, how the symbols are interpreted, and which objects the free variables currently name.

You should be comfortable with sets, functions, relations and the syntax–semantics distinction from the first two chapters. The [Introduction to Proof](/books/library-book-introduction-to-proof/) supplies the elementary background. The [witness laboratory](/conditions/witnesses/index.html) is a concrete companion: when an existential claim is made, ask for an object in the stated domain satisfying the full condition. A witness for one existential statement need not work for another.

The outcome of this chapter is a precise meaning for $M,s\\models\\varphi$. Here $M$ is a structure, $s$ an assignment and $\\varphi$ a formula. We will prove the substitution lemma that connects formal replacement with semantic reassignment. That lemma is the reason the quantifier rules in the next chapter are sound.

## Signatures, terms and formulas

**Definition 3.1 (Signature).** A first-order signature $L$ is a set of constant symbols, function symbols and relation symbols, each function and relation symbol carrying a specified finite arity. We take relation arities to be positive; allowing zero-place relations would simply add propositional atoms. Logical symbols, including equality, are separate from the signature. There are countably many variables $x_0,x_1,\\ldots$.

For example, the group signature has a constant $e$, a binary function symbol $\\cdot$ and a unary function symbol for inverse. The order signature can have just one binary relation symbol $<$. Naming a symbol “$+$” does not impose addition laws: those belong to a theory or a particular interpretation. The language is finitary even if the set of nonlogical symbols is uncountable, because each symbol has finite arity and each expression is finite.

**Definition 3.2 (Terms and formulas).** Variables and constants are terms. If $f$ has arity $n$ and $t_1,\\ldots,t_n$ are terms, then $f(t_1,\\ldots,t_n)$ is a term. Atomic formulas are $t=u$ and $R(t_1,\\ldots,t_n)$ with the indicated arity. Falsehood is a formula. Build further formulas using the propositional connectives and $\\forall x\\varphi$, $\\exists x\\varphi$.

Terms name objects once interpreted; formulas make assertions. A binary relation symbol takes two terms, not two formulas. In the language with a unary function $f$ and binary relation $R$, $R(f(x),y)$ is a formula, but $f(R(x,y))$ is not a term. Equality is logical equality throughout this book. Its eventual interpretation is actual identity of domain elements, not an arbitrary equivalence relation.

The construction-tree method from Chapter 1 still applies. Function and relation arities determine how many children each application has. A quantifier node has a bound-variable label and one formula child. Structural induction can therefore be used separately for terms and formulas.

**Definition 3.3 (Free variables and sentences).** All variables in a term are free. For an atomic formula, its free-variable set is the union of those in its terms. Negation preserves the set; binary connectives take unions; and

$$\\operatorname{FV}(\\forall x\\varphi)=\\operatorname{FV}(\\exists x\\varphi)=\\operatorname{FV}(\\varphi)\\setminus\\{x\\}.$$

A sentence has no free variables. An individual occurrence is bound when it lies in the scope of a quantifier binding that variable and no nearer such quantifier changes the binder.

The same letter can have both free and bound occurrences. In $P(x)\\land\\exists xR(x,y)$, the first occurrence of $x$ is free, the occurrence in $R$ is bound, and $y$ is free. Renaming the bound variable gives $P(x)\\land\\exists zR(z,y)$ and makes the two roles visibly distinct. Such a renaming must use a name that does not capture existing free occurrences.

## Substitution without capture

**Definition 3.4 (Admissible substitution).** The notation $\\varphi[t/x]$ replaces free occurrences of $x$ by a term $t$. A term is free for $x$ in $\\varphi$ if no variable occurring in $t$ becomes bound at a replaced occurrence. Under that condition direct replacement is admissible. For general substitution, first rename conflicting bound variables to fresh names and then perform the replacement. Bound occurrences of $x$ are left untouched.

In $\\exists yR(x,y)$, directly replacing free $x$ by $y$ would give $\\exists yR(y,y)$. The new $y$ would be captured. The correct capture-avoiding result is $\\exists zR(y,z)$, after a preliminary renaming. The two expressions say different things. The first asks for a reflexive pair; the second asks for a partner related to the object named by the free $y$.

There are always enough fresh variables for a finite expression or derivation: it contains only finitely many variable names. We regard formulas differing only by legitimate renaming of bound variables as interchangeable presentations, called alpha-equivalent formulas. This convention is about binders; replacing free variable names changes the assignment-dependent assertion unless assignments are changed with them.

For terms, substitution is simpler because there are no binders. Replace a variable leaf $x$ by $t$ and apply the same replacement recursively to the arguments of every function application. The distinction between term substitution and formula substitution matters precisely at quantifier nodes.

## Structures and assignments

**Definition 3.5 (Structure).** An $L$-structure $M$ has a nonempty domain, also written $M$. Each constant $c$ is interpreted as an element $c^M$, each $n$-ary function $f$ as a total function $f^M:M^n\\to M$, and each $n$-ary relation $R$ as a subset $R^M\\subseteq M^n$. Equality is interpreted as identity.

Nonempty domains and total functions are standing conventions. A partially defined operation, such as reciprocal on all real numbers, cannot be placed directly in a function symbol without changing the domain, supplying a total extension, or representing its graph by a relation with a domain condition. The logical semantics should not silently fill in undefined mathematical operations.

**Definition 3.6 (Assignment and term value).** An assignment $s$ maps every variable to an element of $M$. Write $s[x\\mapsto a]$ for the assignment agreeing with $s$ except that it sends $x$ to $a$. The value $t^{M,s}$ is defined by $x^{M,s}=s(x)$, $c^{M,s}=c^M$, and

$$f(t_1,\\ldots,t_n)^{M,s}=f^M(t_1^{M,s},\\ldots,t_n^{M,s}).$$

An assignment is not part of the interpretation of the signature: changing $s$ does not change $f^M$ or $R^M$. Constants have fixed values in a structure, whereas variables can be reassigned. Distinct constant symbols may name the same element; no unique-names convention is assumed.

**Definition 3.7 (Satisfaction).** Write $M,s\\models t=u$ when the two term values are identical, and $M,s\\models R(t_1,\\ldots,t_n)$ when their value tuple belongs to $R^M$. Falsehood is never satisfied. Interpret the propositional connectives by their classical truth conditions. Finally,

$$M,s\\models\\forall x\\varphi\\quad\\text{iff}\\quad M,s[x\\mapsto a]\\models\\varphi\\text{ for every }a\\in M,$$

$$M,s\\models\\exists x\\varphi\\quad\\text{iff}\\quad M,s[x\\mapsto a]\\models\\varphi\\text{ for some }a\\in M.$$

The quantifier changes one variable's assignment while retaining the others. It ranges over all domain elements, whether or not any closed term names them. The domain itself is fixed during this evaluation. First-order quantifiers range over objects, not over arbitrary subsets or interpretations of a predicate symbol.

## The basic semantic lemmas

**Lemma 3.8 (Coincidence).** Term value depends only on the variables in the term. Formula satisfaction depends only on free variables: if $s,r$ agree on $\\operatorname{FV}(\\varphi)$, then $M,s\\models\\varphi$ if and only if $M,r\\models\\varphi$.

*Proof.* For terms, induction follows the function applications: equal argument values give equal function values. Atomic formulas then have equal term values and hence the same truth. Connectives preserve the assertion by their truth conditions. For $\\forall x\\psi$, suppose $s,r$ agree on the free variables of that formula. For each $a\\in M$, the assignments $s[x\\mapsto a]$ and $r[x\\mapsto a]$ agree on all free variables of $\\psi$: they agree on $x$ by construction, and on every other relevant variable by hypothesis. Apply induction to $\\psi$ and quantify over the same domain. The existential case uses the same assignment comparison with “some” in place of “every”. ∎

A sentence's truth consequently does not depend on an assignment; write $M\\models\\sigma$. This is why theories are usually sets of sentences. For open formulas, $M,s\\models\\Gamma$ means that the same assignment satisfies every member, rather than choosing a new assignment for each premise.

**Lemma 3.9 (Substitution).** For every term $u$,

$$u[t/x]^{M,s}=u^{M,s[x\\mapsto t^{M,s}]}.$$

For every formula $\\varphi$, with substitution admissible or made capture avoiding,

$$M,s\\models\\varphi[t/x]\\quad\\text{iff}\\quad M,s[x\\mapsto t^{M,s}]\\models\\varphi.$$

*Proof.* The term assertion follows by induction. At the variable $x$, both sides are $t^{M,s}$; other variables and constants keep their values. Function applications combine the equal argument values using the same interpreted function. This proves the atomic formula cases, and the propositional connectives follow immediately by induction.

Consider a quantifier $Qy\\psi$. If $y=x$, substitution does not enter its scope. The quantifier's reassignment of $x$ overwrites any prior value, so both sides have the same truth. If $y\\ne x$, rename the binder when necessary so that $y$ does not occur in $t$. For each $a\\in M$, coincidence gives $t^{M,s[y\\mapsto a]}=t^{M,s}$. Moreover the two reassignments to distinct variables commute. Applying induction to $\\psi$ with the assignment $s[y\\mapsto a]$ therefore identifies the substituted body's truth with its truth at $s[x\\mapsto t^{M,s}][y\\mapsto a]$. Quantify over $a$, universally or existentially according to $Q$. These are exactly the two sides of the desired equivalence. Bound-variable renaming itself preserves satisfaction by the same reassignment argument with a fresh variable. ∎

The freshness condition in this proof is substantive. Without it, the value of the inserted term could change while the surrounding quantifier varies its variable. The incorrect captured substitution would then no longer correspond to one fixed reassignment of $x$.

## Three worked examples

**Worked example 1 (Changing a structure).** Take $L=\\{c,f,P\\}$, with $f$ unary and $P$ unary. In a structure with domain $\\mathbb Z$, let $c^M=0$, $f^M(n)=n+1$, and $P^M$ be the even integers. If $s(x)=3$, the term $f(f(x))$ has value $5$, so $P(f(f(x)))$ is false. The sentence $P(c)$ is true. The sentence $\\forall x(P(x)\\to\\neg P(f(x)))$ is also true: adding one to an even integer produces an odd integer. If we retain the same domain and function but change $P$ to the nonnegative integers, that last sentence becomes false at $x=0$. The symbol strings have not changed; their interpretation has.

**Worked example 2 (Quantifier order).** Let the domain be $\\{a,b\\}$ and let $R$ contain exactly $(a,a)$ and $(b,b)$. The sentence $\\forall x\\exists yR(x,y)$ is true: for $x=a$ choose $y=a$, and for $x=b$ choose $y=b$. The sentence $\\exists y\\forall xR(x,y)$ is false. The candidate $y=a$ fails at $x=b$, and the candidate $y=b$ fails at $x=a$. Thus swapping the quantifiers changes the claim. In the first sentence the chosen partner can depend on $x$; the second requires one partner to work for every $x$.

**Worked example 3 (Seeing capture semantically).** Work in $M=(\\mathbb N,<)$, where $R(u,v)$ means $u<v$. Start with $\\varphi=\\exists yR(x,y)$ and substitute the term $y$ for the free $x$. Capture avoidance gives $\\exists zR(y,z)$, which is true at any assignment: if $s(y)=k$, choose $z=k+1$. The captured expression $\\exists yR(y,y)$ is false because no natural number is less than itself. The substitution lemma predicts the first result: reassigning $x$ to the current value of $y$ asks whether that fixed number has a larger natural number. It does not ask whether some number is smaller than itself.

## Consequence and expressive boundaries

**Definition 3.10 (Theory and consequence).** A theory is a set $T$ of sentences in a fixed signature. A model of $T$ satisfies every member. Write $T\\models\\sigma$ if every model of $T$ satisfies $\\sigma$. For open-formula premises, $\\Gamma\\models\\varphi$ means that every structure and every single assignment satisfying all members of $\\Gamma$ also satisfies $\\varphi$.

The nonempty-domain convention makes $\\exists x(x=x)$ valid, even in a language with no constants. It also makes $\\forall x\\psi$ equivalent to $\\psi$ when $x$ is not free in $\\psi$. In empty-domain semantics that latter equivalence could fail when $\\psi$ is false. An empty structure is therefore not an overlooked special case of our semantics; it belongs to a different convention.

Quantifier movement needs hypotheses. If $x$ is not free in $\\psi$, then $\\forall x(\\varphi\\to\\psi)$ is equivalent to $(\\exists x\\varphi)\\to\\psi$. To see this, if $\\psi$ is true both sides are true. If it is false, the left requires every instance of $\\varphi$ to be false, and the right requires the existential antecedent to be false: the same condition. The condition on free variables ensures that $\\psi$ keeps one truth value as $x$ varies.

Equality does not impose any special representation of domain elements. In a structure of residue classes modulo three, two integer representatives may name the same class. Equality of domain elements then means equality of classes. Treating the integers themselves as the domain and interpreting logical equality as congruence modulo three would violate our convention; a separate relation symbol can express congruence there.

## Exercises

### Exercise 3.1
<a id="predicates-quantifiers-structures-ex-1"></a>

In $L=\\{c,f,R\\}$ with $f$ unary and $R$ binary, classify $f(c)$, $R(f(c),x)$ and $R(x)$ as a term, a formula, or malformed.

<details>
<summary>Hint 1</summary>

Check the declared arity before checking truth.

</details>
<details>
<summary>Hint 2</summary>

A relation application is a formula, while a function application is a term.

</details>
<details>
<summary>Solution</summary>

The constant $c$ is a term, so $f(c)$ is a term. Both $f(c)$ and $x$ are terms, so $R(f(c),x)$ is an atomic formula with the correct two arguments. The expression $R(x)$ supplies only one argument to a binary relation and is malformed. None of these classifications depends on an interpretation.

</details>

### Exercise 3.2
<a id="predicates-quantifiers-structures-ex-2"></a>

Find the free variables of $P(x)\\land\\forall x(R(x,y)\\to\\exists yP(y))$ and rename its bound variables to show their scopes.

<details>
<summary>Hint 1</summary>

Track occurrences, including the two different roles of $y$.

</details>
<details>
<summary>Hint 2</summary>

The inner existential does not bind the earlier occurrence of $y$ in $R$.

</details>
<details>
<summary>Solution</summary>

The free-variable set is $\\{x,y\\}$. The $x$ in the first conjunct is free. The $x$ in $R$ is bound by the universal quantifier. The $y$ in $R$ is free, while the $y$ in $P(y)$ is bound by the existential quantifier. Using fresh $u,v$ gives $P(x)\\land\\forall u(R(u,y)\\to\\exists vP(v))$, with exactly the same free variables and meaning.

</details>

### Exercise 3.3
<a id="predicates-quantifiers-structures-ex-3"></a>

Compute the capture-avoiding substitution of $f(y)$ for free $x$ in $\\forall y(R(x,y)\\lor P(x))$.

<details>
<summary>Hint 1</summary>

The inserted term contains the current binder's variable.

</details>
<details>
<summary>Hint 2</summary>

Rename that binder to a fresh $z$ before substitution.

</details>
<details>
<summary>Solution</summary>

First replace the bound $y$ by fresh $z$, obtaining $\\forall z(R(x,z)\\lor P(x))$. Substitution now gives $\\forall z(R(f(y),z)\\lor P(f(y)))$. The remaining $y$ is free, as required: its assignment determines the one object $f^M(s(y))$ while $z$ ranges over the domain. Direct replacement under $\\forall y$ would change that object as the quantifier varied $y$.

</details>

### Exercise 3.4
<a id="predicates-quantifiers-structures-ex-4"></a>

In $\\mathbb Z$ with $f(n)=n+2$ and $c=1$, evaluate $f(f(x))=f(c)$ under $s(x)=-1$ and under $r(x)=0$.

<details>
<summary>Hint 1</summary>

Compute both term values separately.

</details>
<details>
<summary>Hint 2</summary>

The right-hand side is independent of the assignment.

</details>
<details>
<summary>Solution</summary>

The right-hand value is $f(1)=3$ in both assignments. Under $s$, the left value is $f(f(-1))=f(1)=3$, so equality holds. Under $r$, it is $f(f(0))=f(2)=4$, so equality fails. The structure is fixed; only the free variable's assignment changed.

</details>

### Exercise 3.5
<a id="predicates-quantifiers-structures-ex-5"></a>

Prove $\\forall x(\\varphi\\land\\psi)\\equiv(\\forall x\\varphi)\\land(\\forall x\\psi)$ in the assignment semantics.

<details>
<summary>Hint 1</summary>

Fix an arbitrary structure and assignment.

</details>
<details>
<summary>Hint 2</summary>

“Both for every object” and “each for every object” describe the same condition.

</details>
<details>
<summary>Solution</summary>

At $M,s$, the left side holds exactly when, for every $a\\in M$, both $M,s[x\\mapsto a]\\models\\varphi$ and $M,s[x\\mapsto a]\\models\\psi$ hold. This is equivalent to the conjunction of the two assertions that all $a$ satisfy the first condition and all $a$ satisfy the second. Those are exactly the two universal formulas on the right. The argument allows other free variables because their assignment remains fixed throughout.

</details>

### Exercise 3.6
<a id="predicates-quantifiers-structures-ex-6"></a>

Prove $\\exists x(\\varphi\\lor\\psi)\\equiv(\\exists x\\varphi)\\lor(\\exists x\\psi)$.

<details>
<summary>Hint 1</summary>

For one direction, take the witness supplied by the left side.

</details>
<details>
<summary>Hint 2</summary>

For the other direction, use the witness for whichever right-hand disjunct holds.

</details>
<details>
<summary>Solution</summary>

If the left side holds, some $a$ makes at least one body true, so that same $a$ witnesses one of the right-hand existential statements. Conversely, if either existential on the right holds, its witness makes the corresponding disjunct true and therefore makes the disjunction true. It witnesses the left side. Both implications keep the same structure and the same assignments to other free variables.

</details>

### Exercise 3.7
<a id="predicates-quantifiers-structures-ex-7"></a>

Refute $\\forall x(P(x)\\lor Q(x))\\models(\\forall xP(x))\\lor(\\forall xQ(x))$.

<details>
<summary>Hint 1</summary>

Use two objects requiring different disjuncts.

</details>
<details>
<summary>Hint 2</summary>

Let the predicates partition a two-element domain into singletons.

</details>
<details>
<summary>Solution</summary>

Take domain $\\{a,b\\}$, $P=\\{a\\}$ and $Q=\\{b\\}$. Each object satisfies one disjunct, so the universal premise holds. But $b$ falsifies $P$ and $a$ falsifies $Q$, so both universal statements in the conclusion are false. Their disjunction is false, giving a countermodel.

</details>

### Exercise 3.8
<a id="predicates-quantifiers-structures-ex-8"></a>

Translate “exactly one object satisfies $P$” using quantifiers and equality, and prove that your formula has that meaning.

<details>
<summary>Hint 1</summary>

Separate existence from uniqueness.

</details>
<details>
<summary>Hint 2</summary>

Require every other $P$-object to equal the chosen witness.

</details>
<details>
<summary>Solution</summary>

Use $\\exists x(P(x)\\land\\forall y(P(y)\\to y=x))$. A witness $a$ satisfies $P$, giving existence. The universal clause says that any $b$ satisfying $P$ equals $a$, giving uniqueness. Conversely, if precisely one object $a$ satisfies $P$, it witnesses the existential and every $P$-object equals it, so the universal clause holds. Actual identity is essential to the uniqueness interpretation.

</details>

### Exercise 3.9
<a id="predicates-quantifiers-structures-ex-9"></a>

Show $\\exists y\\forall xR(x,y)\\models\\forall x\\exists yR(x,y)$, and explain why its converse fails.

<details>
<summary>Hint 1</summary>

A single successful universal partner can be reused.

</details>
<details>
<summary>Hint 2</summary>

For the converse use the diagonal relation from Worked example 2.

</details>
<details>
<summary>Solution</summary>

If $b$ witnesses the premise, then for every $a$ the relation $R(a,b)$ holds. For that $a$, the same $b$ witnesses the existential conclusion, proving the universal statement. Conversely, on domain $\\{a,b\\}$ with relation $\\{(a,a),(b,b)\\}$, every object has itself as partner but no one partner works for both. Thus the reverse implication is invalid.

</details>

### Exercise 3.10
<a id="predicates-quantifiers-structures-ex-10"></a>

Explain the role of nonempty domains in the validity of $\\exists x(x=x)$, including a language without constants.

<details>
<summary>Hint 1</summary>

Existential satisfaction requires an element, not a name for it.

</details>
<details>
<summary>Hint 2</summary>

In any nonempty domain choose an object and use identity's reflexivity.

</details>
<details>
<summary>Solution</summary>

Given any structure in our semantics, choose $a$ in its nonempty domain. Under the reassignment $x\\mapsto a$, the two terms $x$ have identical values, so $x=x$ is true. Thus $a$ witnesses the existential. No constant symbol is needed: assignments range over objects whether named or unnamed. With an empty domain there would be no possible witness, so the formula would be false under that different convention.

</details>

## Sources

This chapter develops the syntax and substitution distinctions in Euler's CC BY-SA 4.0 reference seed, Reference desk A. Its definitions, examples and exercises are newly written. The primary [Open Logic Project syntax-and-semantics sources](https://github.com/OpenLogicProject/OpenLogic/tree/master/content/first-order-logic/syntax-and-semantics) provide further formal presentations of assignments and satisfaction. The conventions used here are explicitly nonempty domains, finitary signatures, total function interpretations and logical equality as identity.

## Summary

A signature specifies symbols and arities; a structure interprets them on a nonempty domain. Assignments supply values for free variables, and quantifiers vary those values over the domain. Coincidence explains why sentences have assignment-independent truth. Capture-avoiding substitution corresponds exactly to reassignment, as the substitution lemma proves. Quantifier order and shared witnesses carry mathematical content that propositional letters alone cannot express. The next chapter uses these facts to justify the quantifier and equality rules of first-order deduction.
`;export{e as default};