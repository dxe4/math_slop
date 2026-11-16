
# First-Order Deduction and Soundness

## An arbitrary object is not a special object

The difference between “an arbitrary object” and “an object with a special property” is easy to lose in an informal proof. A quantifier rule must preserve that difference. From $P(a)$ one cannot normally conclude that everything satisfies $P$; from an existential statement one cannot normally choose a named favourite as its witness. Natural deduction handles these issues through conditions on variables and open assumptions.

This chapter extends exactly the classical propositional calculus of [Chapter 2](#/books/introduction-to-logic-and-set-theory/propositional-deduction-soundness-completeness). The structure and assignment semantics, coincidence lemma and substitution lemma of [Chapter 3](#/books/introduction-to-logic-and-set-theory/predicates-quantifiers-structures) are required. We will specify the additional rules, prove their soundness, and establish syntactic facts needed by the completeness construction. Our structures retain nonempty domains, total functions and equality as actual identity.

## Quantifier rules and their conditions

**Definition 4.1 (Universal rules).** Universal elimination permits the inference from $\forall x\varphi$ to $\varphi[t/x]$, where $t$ is free for $x$ or bound variables are first renamed to make substitution admissible. Universal introduction permits the inference from $\varphi$ to $\forall x\varphi$ provided $x$ is not free in any undischarged assumption of the derivation of $\varphi$.

Universal elimination can use a variable term. Thus one may infer $\varphi[y/x]$ even in a signature without constants. Introduction's condition is about all currently open assumptions, including temporary assumptions inside a larger proof. If an assumption has been discharged, it no longer blocks the rule. An unused premise outside the proof tree does not block it either: derivability permits using a subset of the stated premise set.

**Definition 4.2 (Existential rules).** Existential introduction permits the inference from $\varphi[t/x]$ to $\exists x\varphi$, with the same admissibility requirement. For existential elimination, suppose $\exists x\varphi$ has been derived and there is a subderivation of $C$ from a temporary assumption $\varphi[y/x]$. Infer $C$ and discharge that temporary assumption, provided $y$ is fresh in $\varphi$ and is not free in $C$ or in any other open assumption of the two premise derivations.

The fresh variable $y$ is called an eigenvariable. It acts as a temporary name for an unspecified witness. It may occur inside the case subproof but cannot survive as free information in the conclusion. Our freshness requirement is deliberately stronger than the minimal versions found in some calculi; bound variables can always be renamed in a finite proof to obtain this presentation.

The existential rule does not assert that a witness can be computed from a proof. It licenses reasoning that works regardless of which witness exists. If different branches use different existential statements, their eigenvariables should be chosen independently unless a reason for a common witness has been proved.

## Equality rules

**Definition 4.3 (Identity rules).** Reflexivity allows $t=t$ with no assumptions. Substitution allows the inference from $s=t$ and $\theta[s/v]$ to $\theta[t/v]$, for a formula template $\theta$ with designated free variable $v$, whenever both substitutions are admissible. Other free variables in the template keep their roles. Bound variables are renamed when necessary.

This is a formula schema, not an axiom saying that every arbitrary binary relation is equality. Selected occurrences may be replaced by choosing a template whose other occurrences are represented by fixed terms. For example, to replace the second argument in $R(s,s)$ only, use the template $R(s,v)$.

**Lemma 4.4 (Elementary identity consequences).** Symmetry, transitivity, function congruence and replacement within relation instances are derivable from these rules.

*Proof.* From $s=t$ and $s=s$, use $\theta(v)$ equal to $v=s$ to infer $t=s$. From $s=t$ and $t=u$, use the latter equality with template $s=v$ to infer $s=u$. For a function symbol and one argument position, start from reflexivity of $f(\ldots,s,\ldots)$ and substitute using the template $f(\ldots,s,\ldots)=f(\ldots,v,\ldots)$. This derives equality of the two function values when $s=t$. Repeat over the finitely many positions and use transitivity for several changed arguments. Relation replacement is a direct application of substitution with template $R(\ldots,v,\ldots)$. Symmetry permits replacement in the reverse direction as well. ∎

Equality is therefore stronger than merely having a reflexive symmetric transitive relation. Its substitution rule forces compatibility with every symbol and every admissible formula context. This compatibility will make the quotient term model in Chapter 5 well defined.

## Full soundness

**Theorem 4.5 (First-order soundness).** If $\Gamma\vdash\varphi$ in the specified classical natural-deduction calculus with these quantifier and equality rules, then $\Gamma\models\varphi$. Here the premises and conclusion may be open formulas, and semantic consequence uses one common assignment.

*Proof.* As in Chapter 2, induct on a finite derivation tree, proving that every structure and assignment satisfying its open assumptions satisfies its conclusion. Assumption leaves and all propositional rules are handled by the same truth-functional arguments. Those arguments apply to arbitrary first-order formulas because, at a fixed structure and assignment, their connectives have exactly the stated classical truth conditions. It remains to justify every new rule.

For universal elimination, suppose $M,s\models\forall x\varphi$. Let $a=t^{M,s}$. The universal clause gives $M,s[x\mapsto a]\models\varphi$, and the substitution lemma gives $M,s\models\varphi[t/x]$. For existential introduction, if $M,s\models\varphi[t/x]$, the same lemma gives the body at $s[x\mapsto t^{M,s}]$. That value is a witness in the domain, so the existential formula is true.

For universal introduction, let $M,s$ satisfy all open assumptions of the subderivation. Choose any $a\in M$. Since $x$ is not free in those assumptions, coincidence says that $s[x\mapsto a]$ still satisfies all of them. The induction hypothesis therefore makes $\varphi$ true at that reassignment. Because $a$ was arbitrary, $M,s\models\forall x\varphi$.

For existential elimination, let $M,s$ satisfy all the remaining open assumptions. The induction hypothesis for the existential premise supplies $a\in M$ with $M,s[x\mapsto a]\models\varphi$. Put $r=s[y\mapsto a]$. Because $y$ does not occur in $\varphi$, the substitution lemma and coincidence give $M,r\models\varphi[y/x]$. Every other open assumption of the witness subproof is also true at $r$: the eigenvariable condition and coincidence ensure its truth is unchanged. Apply induction to the witness subproof to obtain $M,r\models C$. Since $y$ is not free in $C$, coincidence gives $M,s\models C$, as required.

For identity reflexivity, both occurrences of $t$ have the same term value. For substitution, suppose $M,s\models s_0=t_0$ and $M,s\models\theta[s_0/v]$. The two terms have one common value $a$. By the substitution lemma, the latter premise says that $\theta$ is true at $s[v\mapsto a]$. Applying that lemma again gives $M,s\models\theta[t_0/v]$. We wrote the terms as $s_0,t_0$ here to distinguish them from the assignment $s$. All rules preserve the induction statement, proving soundness. ∎

The proof shows exactly what freshness prevents: an eigenvariable's semantic reassignment must leave the other assumptions and the conclusion unchanged. If it changed them, the conclusion would only be known under a specially chosen assignment, not under the assignment originally given.

**Corollary 4.6.** A satisfiable theory is syntactically consistent. A countermodel to $\Gamma\models\varphi$ proves $\Gamma\nvdash\varphi$.

*Proof.* A model cannot satisfy a derivable $\bot$, by soundness and the meaning of falsehood. The second assertion is the contrapositive of soundness. ∎

## Three worked examples

**Worked example 1 (Transporting an existential property).** From $\forall x(P(x)\to Q(x))$ and $\exists xP(x)$ derive $\exists xQ(x)$. Choose a fresh $y$ and open the witness assumption $P(y)$. Universal elimination gives $P(y)\to Q(y)$. Implication elimination yields $Q(y)$, and existential introduction yields $\exists xQ(x)$. Existential elimination discharges $P(y)$. The conclusion has no free $y$, and the original premises are sentences, so the eigenvariable conditions hold. The proof transports whichever witness the existential premise supplies; it does not need a previously named object.

**Worked example 2 (One partner for everyone).** Derive $\exists x\forall yR(x,y)\to\forall y\exists xR(x,y)$. Assume the antecedent. Choose a fresh witness variable $u$ and temporarily assume $\forall yR(u,y)$. For a fresh variable $v$, universal elimination gives $R(u,v)$, and existential introduction gives $\exists xR(x,v)$. The variable $v$ is free in no open assumption, so universal introduction gives $\forall v\exists xR(x,v)$. Rename its bound $v$ to $y$. This conclusion is independent of $u$, so existential elimination discharges the witness assumption. Finally discharge the original antecedent. Notice that the reverse order of quantifiers follows here because the same initial witness works for every argument; the converse has the two-object countermodel of Chapter 3.

**Worked example 3 (Uniqueness and equality).** Suppose $P(a)$ and $\forall x(P(x)\to x=a)$. Derive $\forall x(P(x)\leftrightarrow x=a)$. Let $y$ be fresh. Universal elimination supplies $P(y)\to y=a$. For the reverse implication assume $y=a$. Symmetry gives $a=y$, and equality substitution with $P(a)$ gives $P(y)$. Discharge $y=a$ to get $y=a\to P(y)$. Conjoin the two implications, obtaining the biconditional abbreviation. Since $y$ is free in neither original premise, universal introduction applies. Bound-variable renaming yields the displayed result. The proof uses both existence of the named $P$-object and uniqueness; uniqueness alone would permit $P$ to be empty.

## Syntactic tools for completeness

**Lemma 4.7 (Renaming and proof substitution).** A finite derivation can have its bound variables and eigenvariables renamed to avoid any given finite set of variable names. Weakening, proof substitution and the deduction theorem remain valid in first-order natural deduction after such renaming.

*Proof.* A finite proof contains finitely many variable occurrences and quantifier-rule applications. Choose distinct unused variable names for the binders and eigenvariables that could conflict. Rename a binder together with its bound occurrences, and an eigenvariable together with its occurrences in the corresponding subproof. The new names preserve all freshness conditions because they were chosen outside the proof and then kept distinct. To substitute one proof for open assumption leaves in another, first make their local names disjoint. Copy the finite tree and its discharge labels as in Lemma 2.2. A copied eigenvariable does not acquire a forbidden occurrence in the other proof's assumptions, because those names were avoided. Implication introduction and elimination then prove the deduction theorem exactly as before. ∎

**Lemma 4.8 (Fresh-constant elimination).** If a constant $c$ does not occur in $\Gamma$, and $\Gamma\vdash\theta[c/x]$ with $c$ absent from $\theta$, then $\Gamma\vdash\forall x\theta$, assuming $\theta$ has no other free variables or that they are retained as parameters. Adding new constants to a signature cannot make a previously consistent sentence theory inconsistent.

*Proof.* Only finitely many variable names occur in the given proof. First rename its bound variables and eigenvariables to avoid a fresh variable $y$. Replace every occurrence of $c$ in that finite proof by $y$. The formation rules and identity rules remain instances of the same schemas. Quantifier rules remain valid because their binders and eigenvariables avoid $y$. The open assumptions from $\Gamma$ are unchanged, since they did not contain $c$. The resulting conclusion is $\theta[y/x]$. The variable $y$ is free in none of those assumptions, so universal introduction gives $\forall y\theta[y/x]$, alpha-equivalent to $\forall x\theta$.

For the consistency assertion, suppose a contradiction proof appeared after adding constants. It uses finitely many new constants. Replace them one by one by distinct fresh variables, first renaming the proof's local variables to avoid all these names. The old sentence assumptions and $\bot$ remain unchanged, so this gives a contradiction proof already in the old signature, with variables still available as terms. That contradicts old consistency. ∎

The consistency assertion does not require finding a model in advance. It is precisely the syntactic conservativity needed before completeness has been proved.

**Lemma 4.9 (Classical quantifier duality).** Both directions of $\neg\forall x\varphi\leftrightarrow\exists x\neg\varphi$ are derivable; likewise both directions of $\neg\exists x\varphi\leftrightarrow\forall x\neg\varphi$ are derivable, with parameters retained and eigenvariables chosen fresh.

*Proof.* An existential counterexample contradicts a universal formula by existential elimination and universal elimination, giving $\exists x\neg\varphi\vdash\neg\forall x\varphi$. For the reverse direction, assume $\neg\forall x\varphi$ and temporarily $\neg\exists x\neg\varphi$. For fresh $y$, assume $\neg\varphi[y/x]$. Existential introduction contradicts the temporary assumption, so classical reductio yields $\varphi[y/x]$. Generalise $y$ to obtain $\forall x\varphi$, contradicting the original premise. Classical reductio discharges $\neg\exists x\neg\varphi$ and yields $\exists x\neg\varphi$.

For the second duality, from $\neg\exists x\varphi$ assume $\varphi[y/x]$ for fresh $y$, introduce the existential and obtain contradiction. Negation introduction gives $\neg\varphi[y/x]$; generalise to $\forall x\neg\varphi$. Conversely, with $\forall x\neg\varphi$, an assumed existential provides a fresh witness; its instance contradicts universal elimination. Discharge the existential to obtain its negation. In each generalisation the variable was chosen fresh in all other assumptions, and each existential witness disappears from the conclusion. ∎

## Exercises

### Exercise 4.1
<a id="first-order-deduction-soundness-ex-1"></a>

Derive $\forall xP(x)\vdash\exists xP(x)$ in a language with no constants.

<details>
<summary>Hint 1</summary>

Terms include variables as well as constants.

</details>
<details>
<summary>Hint 2</summary>

Instantiate with a fresh variable and then introduce the existential.

</details>
<details>
<summary>Solution</summary>

Universal elimination with term $y$ gives $P(y)$. Existential introduction from that instance gives $\exists xP(x)$. No assumption about $y$ was introduced, and the conclusion has no free $y$. Soundness uses nonempty domains: assignments give $y$ an actual object even though no constant names one.

</details>

### Exercise 4.2
<a id="first-order-deduction-soundness-ex-2"></a>

Why is the inference $P(y)\vdash\forall yP(y)$ an invalid universal-introduction step? Supply a countermodel to the consequence.

<details>
<summary>Hint 1</summary>

Inspect the free variables of the open assumption.

</details>
<details>
<summary>Hint 2</summary>

Use a two-element domain with a one-element predicate.

</details>
<details>
<summary>Solution</summary>

The variable $y$ is free in the open assumption $P(y)$, violating the rule. For a semantic counterexample take domain $\{a,b\}$, interpret $P$ as $\{a\}$ and assign $y$ to $a$. The premise is true, but the universal conclusion is false at $b$. Reassigning $y$ to $b$ would destroy the premise's truth, exactly the problem prevented by the side condition.

</details>

### Exercise 4.3
<a id="first-order-deduction-soundness-ex-3"></a>

Diagnose a proposed proof from $\exists xP(x)$ that assumes $P(y)$, concludes $P(y)$, and eliminates the existential to conclude $P(y)$.

<details>
<summary>Hint 1</summary>

Where does the proposed witness variable remain free?

</details>
<details>
<summary>Hint 2</summary>

The existential premise cannot specify the original assignment of $y$.

</details>
<details>
<summary>Solution</summary>

The proposed conclusion contains free $y$, violating existential elimination's condition. For domain $\{a,b\}$, predicate $P=\{a\}$ and assignment $y\mapsto b$, the existential premise is true but $P(y)$ false. The temporary witness could be $a$, but the rule cannot change the assignment of a variable that survives in the conclusion. A valid conclusion would be $\exists zP(z)$, which no longer names the temporary witness.

</details>

### Exercise 4.4
<a id="first-order-deduction-soundness-ex-4"></a>

Instantiate $\forall x\exists yR(x,y)$ with the term $y$, making substitution admissible.

<details>
<summary>Hint 1</summary>

The inner binder conflicts with the inserted variable.

</details>
<details>
<summary>Hint 2</summary>

Rename the inner bound variable first.

</details>
<details>
<summary>Solution</summary>

Alpha-rename the premise as $\forall x\exists zR(x,z)$, using fresh $z$. Universal elimination with $t=y$ then yields $\exists zR(y,z)$. The variable $y$ is free in that conclusion and refers to the assignment's chosen object. The captured expression $\exists yR(y,y)$ is not the permitted instance and can have a different truth value.

</details>

### Exercise 4.5
<a id="first-order-deduction-soundness-ex-5"></a>

From $a=b$ and $R(a,a)$ derive $R(b,a)$, replacing just the first argument.

<details>
<summary>Hint 1</summary>

Choose the formula template rather than replacing every printed occurrence.

</details>
<details>
<summary>Hint 2</summary>

Keep the second argument fixed in the template.

</details>
<details>
<summary>Solution</summary>

Take $\theta(v)=R(v,a)$. Then $\theta[a/v]=R(a,a)$ and $\theta[b/v]=R(b,a)$. Identity substitution with the premise $a=b$ gives the latter formula. The second $a$ in the template is a fixed term, so it is not among the designated free occurrences of $v$ being substituted.

</details>

### Exercise 4.6
<a id="first-order-deduction-soundness-ex-6"></a>

Prove $\exists x(P(x)\land Q(x))\vdash(\exists xP(x))\land(\exists xQ(x))$.

<details>
<summary>Hint 1</summary>

Open one fresh witness case for the conjunction.

</details>
<details>
<summary>Hint 2</summary>

Extract each conjunct and existentially generalise it before closing the case.

</details>
<details>
<summary>Solution</summary>

For fresh $y$, assume $P(y)\land Q(y)$. Conjunction elimination gives $P(y)$ and $Q(y)$. Existential introduction gives $\exists xP(x)$ and $\exists xQ(x)$; conjoin them. This final conjunction contains no free $y$, so existential elimination discharges the witness case. Only the original existential premise remains open.

</details>

### Exercise 4.7
<a id="first-order-deduction-soundness-ex-7"></a>

Use soundness to show that the reverse inference in Exercise 4.6 is not derivable in general.

<details>
<summary>Hint 1</summary>

The two existential witnesses may differ.

</details>
<details>
<summary>Hint 2</summary>

Interpret the predicates as disjoint nonempty singletons.

</details>
<details>
<summary>Solution</summary>

Take domain $\{a,b\}$ with $P=\{a\}$ and $Q=\{b\}$. Both separate existential statements are true, so their conjunction is true. No object satisfies both predicates, so the proposed existential conclusion is false. Soundness therefore excludes a derivation of that conclusion from those premises. An additional common-witness hypothesis would be needed.

</details>

### Exercise 4.8
<a id="first-order-deduction-soundness-ex-8"></a>

If a fresh constant $c$ occurs neither in a sentence theory $T$ nor in $\varphi(x)$, and $T\vdash\neg\varphi[c/x]$, prove $T\vdash\neg\exists x\varphi$.

<details>
<summary>Hint 1</summary>

First remove the special constant by Lemma 4.8.

</details>
<details>
<summary>Hint 2</summary>

A universal negative contradicts any existential witness.

</details>
<details>
<summary>Solution</summary>

Fresh-constant elimination gives $T\vdash\forall x\neg\varphi$. Temporarily assume $\exists x\varphi$ and open a fresh witness case $\varphi[y/x]$. Universal elimination gives $\neg\varphi[y/x]$, yielding contradiction. Existential elimination closes the case and leaves $\bot$ under the existential assumption. Negation introduction discharges that assumption and yields $\neg\exists x\varphi$ from $T$.

</details>

### Exercise 4.9
<a id="first-order-deduction-soundness-ex-9"></a>

Why may a proof of $T\vdash P(c)$ fail to give $T\vdash\forall xP(x)$ when $c$ occurs in $T$?

<details>
<summary>Hint 1</summary>

Try the theory containing only $P(c)$.

</details>
<details>
<summary>Hint 2</summary>

Replacing the constant would then change an open assumption.

</details>
<details>
<summary>Solution</summary>

Let $T=\{P(c)\}$. It derives $P(c)$ by an assumption leaf. In the two-element structure with $c=a$ and $P=\{a\}$, the theory is true while $\forall xP(x)$ is false. Soundness rules out the latter derivation. Syntactically, replacing $c$ by $y$ changes the premise to $P(y)$, where $y$ is free; universal introduction is then forbidden. The freshness hypothesis in Lemma 4.8 excludes exactly this situation.

</details>

### Exercise 4.10
<a id="first-order-deduction-soundness-ex-10"></a>

Derive $\forall x(P(x)\land Q(x))\vdash\forall xP(x)\land\forall xQ(x)$ and identify both universal-introduction conditions.

<details>
<summary>Hint 1</summary>

Instantiate the premise at a fresh variable.

</details>
<details>
<summary>Hint 2</summary>

The only open assumption is a sentence.

</details>
<details>
<summary>Solution</summary>

At fresh $y$, universal elimination gives $P(y)\land Q(y)$. Extract $P(y)$ and generalise to $\forall yP(y)$. Separately extract $Q(y)$ and generalise to $\forall yQ(y)$. In both cases $y$ is free in no open assumption because the sole premise is universally quantified. Conjoin the results and alpha-rename the bound variables to $x$. No unclosed witness or extra assumption is hidden in either generalisation.

</details>

## Sources

The argument develops Euler's CC BY-SA 4.0 reference seed, Theorem contract 1 and Reference desk A, into a specified calculus and a full soundness proof. The [Open Logic Project natural-deduction sources](https://github.com/OpenLogicProject/OpenLogic/tree/master/content/first-order-logic/natural-deduction) are a primary reference for quantifier rules. Its [Henkin-expansion source](https://github.com/OpenLogicProject/OpenLogic/blob/master/content/first-order-logic/completeness/henkin-expansions.tex) provides context for the fresh-constant tool. The exposition, examples and exercises above are original to this chapter.

## Summary

Universal introduction requires an arbitrary variable; existential elimination requires a temporary witness that leaves no forbidden free occurrences behind. Capture-avoiding instantiation and identity substitution are justified by the semantic substitution lemma. With those conditions, induction on derivations proves full first-order soundness. Renaming, proof substitution and fresh-constant elimination also give syntactic tools without assuming a model exists. The next chapter uses those tools to construct a model of every consistent sentence theory.
