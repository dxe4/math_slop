
# Dependent function and pair types

The simply typed lambda calculus fixes the type of every variable independently. In practice, we often want the type of an output to depend on the value of an input. This chapter introduces dependent function types ($\Pi$-types) and dependent pair types ($\Sigma$-types), gives explicit typing rules, and works examples that are impossible in the simply typed setting.

## Dependent function types

A dependent function type is written

$$\Pi x : A.\, B(x)$$

where $B(x)$ is a type that may depend on $x : A$. A term of this type is a function that, given $a : A$, returns a term of type $B(a)$.

The typing rules extend those of $\lambda^{\to}$:

$$\frac{\Gamma, x : A \vdash t : B(x)}{\Gamma \vdash \lambda x.\, t : \Pi x : A.\, B(x)}\;({\Pi}I)$$

$$\frac{\Gamma \vdash f : \Pi x : A.\, B(x) \quad \Gamma \vdash a : A}{\Gamma \vdash f\,a : B(a)}\;({\Pi}E)$$

When $B$ does not depend on $x$, this collapses to the ordinary function type $A \to B$.

## Dependent pair types

A dependent pair type is written

$$\Sigma x : A.\, B(x)$$

A term of this type is a pair $(a, b)$ where $a : A$ and $b : B(a)$. The typing rules are:

$$\frac{\Gamma \vdash a : A \quad \Gamma \vdash b : B(a)}{\Gamma \vdash (a, b) : \Sigma x : A.\, B(x)}\;({\Sigma}I)$$

$$\frac{\Gamma \vdash p : \Sigma x : A.\, B(x)}{\Gamma \vdash \pi_1(p) : A}\;({\Sigma}E_1) \qquad \frac{\Gamma \vdash p : \Sigma x : A.\, B(x)}{\Gamma \vdash \pi_2(p) : B(\pi_1(p))}\;({\Sigma}E_2)$$

The second projection's type depends on the first component. This is the key difference from the simple product $A \times B$.

## Worked example: vectors indexed by length

Let $\operatorname{Vec}(A, n)$ be the type of vectors of elements of type $A$ with length $n : \mathbb{N}$. The append function has type

$$\operatorname{append} : \Pi m : \mathbb{N}.\, \Pi n : \mathbb{N}.\, \operatorname{Vec}(A, m) \to \operatorname{Vec}(A, n) \to \operatorname{Vec}(A, m + n).$$

An implementation at this type cannot return a vector of the wrong length: the type checker rejects it. The length equation $m + n$ is part of the type.

A concrete instance: if $m = 2$, $n = 3$, and $v_1 : \operatorname{Vec}(A, 2)$, $v_2 : \operatorname{Vec}(A, 3)$, then $\operatorname{append}\,2\,3\,v_1\,v_2 : \operatorname{Vec}(A, 5)$.

## Worked example: constructive existence

The claim "there is an even natural number above 100" corresponds to the type

$$\Sigma n : \mathbb{N}.\, (100 < n) \times \Sigma k : \mathbb{N}.\, (n = 2k).$$

An inhabitant is the pair

$$(102, (p_{102}, (51, q_{102})))$$

where $p_{102}$ is evidence that $100 < 102$ and $q_{102}$ is evidence that $102 = 2 \cdot 51$. The witness $102$ and the divisor $51$ are explicit. The type ensures that any inhabitant must contain these components.

## Comparison: $\Sigma$ versus double negation

Intuitionistically, $\Sigma x : A.\, B(x)$ is stronger than $\neg\forall x : A.\, \neg B(x)$. The dependent pair gives an explicit witness $w : A$ and evidence $b : B(w)$. The double-negated statement says only that it is impossible for every $x$ to fail $B(x)$; it does not select a witness.

For a finite domain and a decidable predicate, exhaustive search can turn the double-negated statement into a witness. On a countably infinite domain, decidability alone is insufficient: that conversion requires an added search principle such as Markov's principle, or effective data such as a bound containing a witness. The dependent pair carries direct computational information; the double negation does not.

## Common errors

**Error: treating $\Pi$ as ordinary function space.** In $\Pi x : A.\, B(x)$, the codomain varies with the input. Type-checking an application $f\,a$ requires computing $B(a)$, which may involve evaluating $a$.

**Error: confusing $\Sigma$ with $\exists$ in classical logic.** A classical existential derivation need not compute a witness. The untruncated $\Sigma$-types here carry inspectable witnesses. A proof of $\exists x.\, B(x)$ in classical logic may not yield an inhabitant of $\Sigma x : A.\, B(x)$.

**Error: assuming all dependent types are executable.** Opaque axioms can introduce constants without additional computation rules. Other foundations, such as cubical presentations of univalence, supply their own computational interpretation; inspect the exact system.

## Formation and context order

Before introducing a dependent type, establish $\Gamma\vdash A\ \mathrm{type}$ and $\Gamma,x:A\vdash B(x)\ \mathrm{type}$. The second judgement is checked in a longer context because it can refer to $x$. A later declaration may mention an earlier one, but the earlier declaration cannot refer to a variable not yet introduced. This is why freely permuting dependent contexts is different from exchanging independent propositional assumptions.

For example, $n:\mathbb N,v:\mathrm{Vec}(A,n)$ is well formed when $A$ is already available. Writing the vector declaration before $n$ without binding that index elsewhere leaves an unbound term in its type. The dependency is not a printing preference: it determines which assignments can interpret the context. A substitution replacing $n$ must also replace its occurrences in the types of subsequent declarations.

Application substitutes an argument into a **type** as well as into a term body. If $f:\Pi x:A.B(x)$ and $a:A$, then $fa:B(a)$. A proposed use at $B(b)$ needs a conversion or a transport argument when $a,b$ are related, rather than an unmentioned replacement of the input. The identity chapter explains that distinction. For a constant family, substitution has no effect on the codomain, recovering the ordinary arrow rule.

The beta equations are $(\lambda x.t)a\equiv t[a/x]$ and $\pi_1(a,b)\equiv a$, $\pi_2(a,b)\equiv b$. The second projection is well typed because its expected type $B(\pi_1(a,b))$ computes to $B(a)$. Thus the computational rule and the dependent projection type agree exactly. If the expected family is attached to the wrong first field, merely having a term printed in the second position does not justify a pair introduction.

## Worked example: dependent currying

Let $A$ be a type, $B(x)$ a family over $A$, and $C(x,y)$ a family over $x:A,y:B(x)$. From
$$f:\Pi x:A.\Pi y:B(x).C(x,y)$$
construct
$$\operatorname{uncurry}(f)=\lambda p.f(\pi_1p)(\pi_2p).$$
Its domain is $\Sigma x:A.B(x)$ and its result at $p$ is $C(\pi_1p,\pi_2p)$. First projection supplies the index for the second application; second projection already has the type required at that index. Reversing the order without a corresponding argument changes the typing problem.

Conversely, given such a function $g$ on dependent pairs, define $\operatorname{curry}(g)=\lambda x.\lambda y.g(x,y)$. On explicitly supplied $a:A,b:B(a)$, the composite operations evaluate to the expected values by beta and projection rules. Claiming an equality of the two whole functions may additionally require a chosen eta rule or function extensionality; these pointwise computations alone should not be reported as every possible equality principle. The construction extends familiar currying while keeping the dependent result type visible.

## Finite search can carry its correctness proof

Suppose $A$ has a complete finite enumeration $a_1,\ldots,a_k$, and a uniform method decides each $B(a_i)$. An enumeration can contain duplicates; completeness means every element of $A$ occurs. Process the entries. A positive decision supplies a pair $(a_i,b_i):\Sigma x:A.B(x)$ immediately. If every decision is negative, the stored refutations and completeness give a function assigning each $x:A$ a refutation of $B(x)$.

This proves a decidability statement for the existential: either a witness pair exists constructively, or a function sends every alleged witness pair to contradiction. In the latter case project its witness, locate that witness in the finite enumeration, and apply the corresponding refutation to its proof field. A finite index can be selected by searching the supplied enumeration with its membership evidence; the exact representation of finiteness must provide that access rather than merely assert an unspecified cardinal bound.

Now suppose $h:\neg\neg\Sigma x:A.B(x)$. If the finite search returns a witness, use it. If it returns a refutation $q$ of all witness pairs, apply $h(q)$ and eliminate the resulting contradiction into the requested pair type. Thus double-negated existence yields a witness under these explicit finite decidability assumptions. The construction explains the earlier finite-domain claim rather than appealing to classical double-negation elimination in general.

An unbounded search over naturals is different. It can test each candidate eventually, but the double-negated premise alone does not supply a stage at which the search must succeed constructively. A known witness bound or an added principle supplies extra information. Merely replacing the finite enumeration by an infinite stream drops the termination argument. This distinction is central when a mathematical proof is read as a total programme.

## Witness types and proposition-valued existence

The dependent pair used here is data containing an inspectable witness. A proof assistant can also provide a proposition-valued existential whose elimination into arbitrary data is restricted. Its notation may look similar while its computational use differs. To extract a witness, inspect the actual formation and elimination rules, not just the English phrase there exists. The type-theoretic choice construction in Chapter 5 assumes untruncated dependent pairs precisely for this reason.

Likewise, a vector index establishes a length invariant for returned values in the consistent total core. It does not prove that a routine returns its arguments in the desired order, nor does it make an added divergent expression into a returned vector. The specification still needs to describe the relevant behaviour. Refinement through dependent types is powerful because it makes additional obligations expressible, not because it supplies all obligations without a proof.

## Substitution must preserve the family as well as its value

The dependent substitution lemma says that from $\Gamma,x:A\vdash t:B$ and $\Gamma\vdash u:A$, obtain $\Gamma\vdash t[u/x]:B[u/x]$. Unlike the simple-type version, its result type may visibly change. A simultaneous statement for well-formed types is needed as well. Prove these statements together by induction on the relevant formation and typing derivations; substitution into contexts and types is part of the operation.

For a variable equal to $x$, the supplied derivation of $u$ replaces its leaf. Another variable retains its context entry, with substitution applied to any dependent type there. For application, induction gives the substituted function and argument. The dependent result is obtained by substituting that argument into the substituted codomain. Capture-avoiding substitution commutes in the required way after the binder has been renamed fresh. Thus it agrees with first forming the original application result type and then replacing $x$.

For a dependent abstraction, freshen its binder against $u$, apply induction to the body under the extended context, then use dependent function introduction. For pair introduction, induction on the first component determines the substituted index; induction on the second yields exactly the fibre at that index. Projection is particularly instructive: the second projection's type substitutes both in the family and in the first projection of the pair. The structural identity between projecting a substituted term and substituting in its projection makes the resulting judgement agree. Conversion uses substitution preservation of the stipulated computation equations.

These cases explain why an implementation cannot substitute only in term bodies while leaving annotations and later declarations unchanged. The displayed result type is a mathematical part of the lemma. A syntactic routine that changes a witness but keeps a fibre attached to its old value has not implemented the required operation, even if both values happen to have the same nondependent base type.

## Nested witnesses keep their scope

Consider $\Sigma n:\mathbb N.\Sigma v:\mathrm{Vec}(A,n).P(n,v)$. A value first supplies a length, then a vector of that length, then evidence concerning that very vector. There is no requirement that $P$ be decidable in order to **check** supplied evidence under its rules. Decidability becomes relevant when a procedure is expected to search for that evidence without being given it.

A consumer can unpack the outer pair, obtaining a local $n$, and then unpack its second field to obtain $v$ and the property proof. Returning only $v$ to a context that forgets $n$ changes its interface: its type still refers to the hidden index. One valid interface is another dependent package retaining that index; another is an operation whose result type no longer mentions it, justified by the eliminator. A free occurrence of the local witness cannot simply escape its scope.

This dependence is useful in mathematical examples such as matrices with declared dimensions or polynomials with a degree bound. It also explains an apparent inconvenience: composing two operations may require proving that their intermediate indices match. The inconvenience exposes a real compatibility condition. If the application needs matrix multiplication, the inner dimensions cannot be ignored just because both inputs are called matrices. The type expresses the condition, while an equality or conversion argument justifies any proposed identification of dimensions.

## Mapping a dependent package without losing its index

Suppose $B$ and $C$ are families over the same type $A$, and for each index there is a function from the corresponding $B$ fibre to the corresponding $C$ fibre. This family of functions induces a map between the two dependent-pair types: unpack a pair, retain its first component, and apply the fibre function at that very index to the second component. The result is well typed because the output proof or data belongs to the fibre named by the retained index.

Formally, given $f:\Pi x:A.B(x)\to C(x)$ and $p:\Sigma x:A.B(x)$, the output is $(\pi_1p,f(\pi_1p)(\pi_2p))$. Second projection supplies a term of $B(\pi_1p)$, so the application returns $C(\pi_1p)$, exactly the fibre required for pair introduction. Using an unrelated index would leave an unsatisfied typing obligation even if the two base values had the same ordinary type.

Now take another fibrewise map from $C$ to a third family. On an explicitly supplied pair, mapping first with the first family and then with the second computes by projection rules to the pair whose second component is the composite fibre application. Mapping once with the fibrewise composite gives the same computed pair. Mapping with fibrewise identity similarly returns the supplied pair after reduction. These are concrete computation claims on introduced pairs. For an opaque pair variable, a whole-function equality may use the relevant dependent-pair elimination and propositional eta law, or stronger conversion rules if the chosen theory supplies them. Do not silently replace those hypotheses with an assumed judgemental eta equation.

One application is changing a certificate format while retaining its witness. A package containing a natural number and a proof of a strong property can be mapped to the same number with a weaker proved property. The witness has not been searched for again, and no choice principle was used. The fibrewise implication performs the conversion while the dependent pair keeps the evidence attached to the correct witness.

## Practice exercises

### Exercise 1
<a id="dependent-function-and-pair-types-ex-1"></a>
Give the type of a function that returns the head of a nonempty vector. The type should ensure the vector is nonempty.


<details><summary>Hint 1</summary>

Exclude length zero in the input index.

</details>
<details><summary>Hint 2</summary>

Use a successor length rather than an arbitrary length.

</details>
<details><summary>Solution</summary>

$\Pi n : \mathbb{N}.\, \Pi v : \operatorname{Vec}(A, \operatorname{succ}(n)).\, A$. The length is $\operatorname{succ}(n)$, which excludes zero.

</details>

### Exercise 2
<a id="dependent-function-and-pair-types-ex-2"></a>
Construct an inhabitant of $\Sigma n : \mathbb{N}.\, (n > 5) \times (n < 10)$.


<details><summary>Hint 1</summary>

Choose a natural strictly inside the two bounds.

</details>
<details><summary>Hint 2</summary>

Supply the number and both inequality proofs.

</details>
<details><summary>Solution</summary>

$(7, (p_7, q_7))$ where $p_7$ is evidence that $7 > 5$ and $q_7$ is evidence that $7 < 10$. Any $n \in \{6, 7, 8, 9\}$ works.

</details>

### Exercise 3
<a id="dependent-function-and-pair-types-ex-3"></a>
Explain why $\Pi x : A.\, B(x)$ generalizes $A \to B$.


<details><summary>Hint 1</summary>

Remove the dependency from the family.

</details>
<details><summary>Hint 2</summary>

Then substitution into the codomain has no effect.

</details>
<details><summary>Solution</summary>

When $B(x)$ is a constant type $B$ not depending on $x$, the dependent function type becomes $A \to B$. The rules collapse to the ordinary function rules.

</details>

### Exercise 4
<a id="dependent-function-and-pair-types-ex-4"></a>
Give a term of type $\Sigma f : (A \to A).\, \Pi x : A.\, \Pi y : A.\, (x = y) \to (f(x) = f(y))$.


<details><summary>Hint 1</summary>

Choose the identity function as the first field.

</details>
<details><summary>Hint 2</summary>

Its action on an equality needs no change to the supplied equality proof.

</details>
<details><summary>Solution</summary>

Take $f = \lambda x.\, x$, the identity on $A$. Then for any $x, y : A$ and $p : x = y$, we have $f(x) = x$ and $f(y) = y$, so $p$ itself is evidence that $f(x) = f(y)$. The pair is $(\lambda x.\, x, \lambda x.\, \lambda y.\, \lambda p.\, p)$.

</details>

### Exercise 5
<a id="dependent-function-and-pair-types-ex-5"></a>
If $p:\Sigma n:\mathbb N.\mathrm{Vec}(A,n)$, state the types of both projections and explain why the second is not generally a vector of an independently chosen length.

<details><summary>Hint 1</summary>

The first field supplies the index of the second.

</details>
<details><summary>Hint 2</summary>

Substitute the first projection into the family.

</details>
<details><summary>Solution</summary>

We have $\pi_1p:\mathbb N$ and $\pi_2p:\mathrm{Vec}(A,\pi_1p)$. An unrelated $m$ does not occur in that result type. To use the second field as a vector of length $m$, provide a suitable index equality and transport, or a definitional conversion when the indices compute identically. The pair records an actual dependency; it is not an ordinary product of a number and a vector at any requested index.

</details>

### Exercise 6
<a id="dependent-function-and-pair-types-ex-6"></a>
Type the dependent uncurrying term in the worked example, showing both application result types.

<details><summary>Hint 1</summary>

Apply $f$ first to the projected index.

</details>
<details><summary>Hint 2</summary>

The second projection has exactly the remaining domain type.

</details>
<details><summary>Solution</summary>

For $p:\Sigma x:A.B(x)$, the first application $f(\pi_1p)$ has type $\Pi y:B(\pi_1p).C(\pi_1p,y)$. The second projection has type $B(\pi_1p)$, so the next application has type $C(\pi_1p,\pi_2p)$. Abstracting over $p$ gives the desired dependent function. No index replacement or equality axiom is needed; the two projection rules already coordinate the types.

</details>

### Exercise 7
<a id="dependent-function-and-pair-types-ex-7"></a>
Explain the two outcomes of a finite search for a decidable predicate, including the evidence needed in the negative case.

<details><summary>Hint 1</summary>

A positive result contains a witness and its predicate proof.

</details>
<details><summary>Hint 2</summary>

The negative result must refute every possible witness, using completeness.

</details>
<details><summary>Solution</summary>

The positive result is $(a,b):\Sigma x:A.B(x)$ from a successful candidate decision. If none succeeds, retain each candidate's refutation and use completeness of the enumeration to refute $B(x)$ for arbitrary $x:A$. An alleged existential pair can then be projected and contradicted. Simply reporting that a loop found nothing omits completeness and correctness of the predicate decisions. Those hypotheses are what make the negative branch evidence rather than an observation about a particular incomplete search.

</details>

### Exercise 8
<a id="dependent-function-and-pair-types-ex-8"></a>
Why cannot a total vector head at type $\Pi n.\mathrm{Vec}(A,n)\to A$ be defined uniformly for arbitrary $A$ without extra assumptions? State a repaired type.

<details><summary>Hint 1</summary>

Allow $A$ itself to be empty.

</details>
<details><summary>Hint 2</summary>

The empty vector still exists at length zero.

</details>
<details><summary>Solution</summary>

Choose $A=0$ and supply the nil vector at index zero. The proposed total operation would return an inhabitant of zero, impossible in the consistent core. Restrict its input to $\Pi n.\mathrm{Vec}(A,Sn)\to A$, or return an optional result for unrestricted lengths. These repairs state different contracts. Choosing a default element would instead require supplying such an element of $A$, an assumption unavailable for arbitrary types.

</details>

### Exercise 9
<a id="dependent-function-and-pair-types-ex-9"></a>
Construct explicit data for an even natural number strictly between seventy and eighty, including the factor witness.

<details><summary>Hint 1</summary>

Choose a number in the interval divisible by two.

</details>
<details><summary>Hint 2</summary>

Seventy-two is twice thirty-six.

</details>
<details><summary>Solution</summary>

Choose $72$, give the finite inequality proofs $70<72$ and $72<80$, and return the factor witness $36$ with $72=2\cdot36$. For the type $\Sigma n:\mathbb N.(70<n)\times(n<80)\times\Sigma k:\mathbb N.(n=2k)$, these are exactly the requested fields, grouped according to the stated product association. The word even alone would omit the inner witness unless its chosen definition already carried it.

</details>

### Exercise 10
<a id="dependent-function-and-pair-types-ex-10"></a>
Why does a witness-producing function not automatically become usable when its output is replaced by an existential proposition with restricted elimination?

<details><summary>Hint 1</summary>

Compare the actual eliminators of the two result types.

</details>
<details><summary>Hint 2</summary>

The first projection belongs to the dependent-pair interface.

</details>
<details><summary>Solution</summary>

For an untruncated pair, $\pi_1$ directly returns the witness as data. A proposition-valued existential may permit elimination only into propositions, so applying that data projection is not a well-typed operation at its interface. A theorem or axiom allowing witness selection would be extra information. The two existence formulations can be logically related while offering different computational access. The claimed extraction must therefore name which result type it actually receives.

</details>

## Chapter summary

Dependent function types $\Pi x : A.\, B(x)$ generalize function types by allowing the codomain to depend on the input. Dependent pair types $\Sigma x : A.\, B(x)$ generalize products by allowing the second component's type to depend on the first. These types are essential for encoding predicates, indexed data structures, and constructive existence.

**Backward pointers:** This chapter extends the simply typed lambda calculus from Chapter 3. The BHK reading from Chapter 1 motivates the constructive interpretation of $\Sigma$ as existence with witness.

**Forward pointers:** Chapter 9, "Identity types and equality," introduces the type $a =_A b$, which is essential for stating and proving properties of dependent types. Chapter 10, "Universes and paradox control," explains how to type the types themselves.
