
# Inductive Types and Recursion

An inductive declaration describes finite data through constructors and supplies a principle for using all data of that form. Recursion computes a value by following the constructors. Induction proves a property by following the same structure. The principles are related, but a case split alone does not automatically grant a correctness theorem about recursive subdata. This chapter makes the relation explicit for natural numbers, lists, binary trees and length-indexed vectors.

We work in an intensional dependent type theory with the previously stated function, pair and identity rules and the strictly positive inductive declarations described here. No general fixed-point operator is assumed. The constructors, eliminators and computation equations are part of the selected foundation. Proving consistency for an arbitrary new inductive-declaration mechanism is a separate metatheoretical task; a few examples do not establish that every proposed declaration is safe.

## Naturals: constructors and elimination

The natural-number type has constructors $0:\mathbb N$ and $S:\mathbb N\to\mathbb N$. Its induction principle uses a motive $P:\mathbb N\to\mathrm{Type}$, base evidence $b:P(0)$ and a step
$$s:\Pi n:\mathbb N.\;P(n)\to P(Sn).$$
It produces $\operatorname{ind}_{\mathbb N}(P,b,s):\Pi n:\mathbb N.P(n)$. The computation equations are
$$\operatorname{ind}_{\mathbb N}(P,b,s,0)\equiv b,$$
$$\operatorname{ind}_{\mathbb N}(P,b,s,Sn)\equiv s(n,\operatorname{ind}_{\mathbb N}(P,b,s,n)).$$
The recursive call is on the immediate predecessor. With a constant motive $P(n)=B$, this is ordinary recursion into $B$. With a proposition-valued motive it is proof by induction. Thus computation and proof use one structural principle with different result families.

The step receives evidence at $n$ because it is building evidence at $Sn$. It does not receive evidence at every natural number, nor permission to invoke the desired theorem on the same input again. That distinction rules out circular arguments disguised as recursion. A finite constructor representation supplies the decreasing structure that makes the eliminator's equations meaningful.

## Worked example 1: addition and a right-zero proof

Choose addition recursive in its **first** argument:
$$0+n\equiv n,\qquad(Sm)+n\equiv S(m+n).$$
These equations define a function $\mathbb N\to\mathbb N\to\mathbb N$ by recursion on the first input, with the second input retained as a parameter. For example,
$$2+1\equiv S(1+1)\equiv S(S(0+1))\equiv S(S1)=3.$$
No commutativity theorem has been used to evaluate this expression.

Prove $\Pi m.\;m+0=m$ by induction on $m$. At zero, the equation reduces to $0=0$, so reflexivity supplies the base proof. At $Sm$, the left side computes to $S(m+0)$. The induction hypothesis $m+0=m$ can be mapped through successor using congruence, yielding $S(m+0)=Sm$. This closes the step. The proof is an instance of the eliminator with motive $P(m)=(m+0=m)$.

In contrast, $0+n=n$ follows by direct computation for arbitrary $n$. The two laws have the same mathematical status as equalities, but different definitional behaviour under this chosen recursion direction. A proof assistant may define its own standard addition in the other direction; never transfer a definitional-equality claim by notation alone. The Lean chapter uses a locally defined operation to make this choice visible.

## Lists and structural recursion

For a fixed type $A$, lists have constructors $\mathrm{nil}:\mathrm{List}(A)$ and $\mathrm{cons}:A\to\mathrm{List}(A)\to\mathrm{List}(A)$. A list is finite constructor data. The induction principle requires a proof at nil and a step deriving the property of $\mathrm{cons}(a,xs)$ from the property of the immediate tail $xs$, for each $a:A$.

Define length and append by
$$\ell(\mathrm{nil})\equiv0,\quad\ell(\mathrm{cons}(a,xs))\equiv S(\ell(xs)),$$
$$\mathrm{app}(\mathrm{nil},ys)\equiv ys,$$
$$\mathrm{app}(\mathrm{cons}(a,xs),ys)\equiv\mathrm{cons}(a,\mathrm{app}(xs,ys)).$$
The second parameter $ys$ remains unchanged while the first list gets structurally smaller. The result can therefore be computed without an unrestricted termination oracle. A routine that recurses on a different representation needs an explicit decreasing measure or another justified recursion principle.

## Worked example 2: length of an append

**Theorem 8.1.** For lists $xs,ys:\mathrm{List}(A)$,
$$\ell(\mathrm{app}(xs,ys))=\ell(xs)+\ell(ys).$$

*Proof.* Fix $ys$ and induct on $xs$. For nil, both sides compute to $\ell(ys)$, using addition's zero equation. For $\mathrm{cons}(a,xs)$, the left side computes to $S(\ell(\mathrm{app}(xs,ys)))$. The induction hypothesis identifies the inner length with $\ell(xs)+\ell(ys)$. Congruence under $S$ gives $S(\ell(xs)+\ell(ys))$. The right side computes to that same expression by the successor equations for length and addition. Hence the step closes. ∎

The proof follows the recursive definition of append. It does not assume that length preservation establishes element order: a list of the right length can still contain different elements. Stronger specifications of append would also describe which elements occur and in what order. An index records one invariant, not every desired property of the operation.

## Tree motives have one hypothesis per recursive field

Let $\mathrm{Tree}(A)$ have constructors $\mathrm{leaf}:A\to\mathrm{Tree}(A)$ and $\mathrm{node}:\mathrm{Tree}(A)\to\mathrm{Tree}(A)\to\mathrm{Tree}(A)$. Induction at a node supplies a hypothesis for each subtree. A fold likewise supplies one recursively computed value per child. There is no need to impose an arbitrary linear order on all trees before using this structural principle.

For example define leaf count by $L(\mathrm{leaf}(a))=1$ and $L(\mathrm{node}(l,r))=L(l)+L(r)$. Define node count by $N(\mathrm{leaf}(a))=0$ and $N(\mathrm{node}(l,r))=1+N(l)+N(r)$. Induction proves $L(t)=N(t)+1$: it holds at a leaf; at a node substitute both induction hypotheses and rearrange the finite natural sums. The arithmetic rearrangement needs the corresponding addition laws, rather than an unsupported claim of definitional equality between differently bracketed sums.

## Worked example 3: vectors and a total head

An indexed family records the constructor result's length:
$$\mathrm{nilV}:\mathrm{Vec}(A,0),$$
$$\mathrm{consV}:\Pi n.\;A\to\mathrm{Vec}(A,n)\to\mathrm{Vec}(A,Sn).$$
A total head operation can have type $\Pi n.\mathrm{Vec}(A,Sn)\to A$. For a cons input, return its first element. A nil input would require zero to equal a successor index. The no-confusion property of the natural constructors excludes that case in the family eliminator. It is not resolved by inventing a default element of arbitrary type $A$.

If the input type instead allowed $\mathrm{Vec}(A,n)$ for arbitrary $n$, nil would be an actual permitted input. A total head at result type $A$ would then require extra data or a changed specification. One choice is an optional result; another is a proof that the length is nonzero. The type of an operation determines which cases must be handled, so restricting the domain to nonempty vectors is a mathematical contract rather than an error-suppression trick.

Indexed append follows the same constructor equations as list append. In the nil case, the expected index $0+n$ computes to $n$. In the cons case, the recursive output has index $m+n$; cons produces index $S(m+n)$, which matches $(Sm)+n$ by the chosen first-argument recursion. A different definition of addition may require a propositional index equality and transport at this step.

## Positivity and circular data

Strict positivity restricts how the type being defined can appear in constructor inputs. Lists and trees contain recursive data directly; their eliminators recurse on that contained data. A dangerous proposed constructor is
$$\mathrm{roll}:(D\to0)\to D.$$
The occurrence of $D$ to the left of the inner arrow is negative. If this declaration were admitted with unrestricted case elimination and the expected computation equation, define
$$\delta(d)=\operatorname{case}(d;\mathrm{roll}(f)\mapsto f(d)):0.$$
This is a nonrecursive definition of $\delta:D\to0$. Put $r=\mathrm{roll}(\delta):D$. Then $\delta(r)$ contracts to $\delta(r)$ again, producing a closed expression of empty type and an infinite reduction. The declaration has bypassed the structural termination discipline.

The example explains a concrete rejection condition. It is not a proof that every possible negative declaration in every extended language has the same behaviour; positivity conditions belong to a specified foundational scheme. Nested, mutual and higher inductive definitions require further admissibility rules. The current finite examples do not authorise those extensions automatically.

## Choosing the motive

When induction becomes difficult, first inspect what the recursive hypothesis needs to state. Proving a property with an extra parameter fixed can give a hypothesis too weak for a recursive call that changes that parameter. Generalising the parameter into the motive can repair the argument. This changes the statement being proved by induction to a stronger universal one, not the constructor data itself.

For instance, a tail-recursive reverse function carries an accumulator. Its correctness theorem should usually relate the result to the reverse of the input followed by the current accumulator, rather than asserting correctness only at the empty accumulator. A recursive call on a nonempty accumulator can then use the general hypothesis. The same issue occurs in programme verification: a loop invariant must cover all states reached by the loop, not only its initial state.

State what is definitionally equal at each constructor and which arithmetic or equality theorem handles the remaining step. A proof that silently treats every true index equation as computation may be mathematically suggestive but will not explain the actual dependent derivation. The identity chapter supplies transport when the types agree only propositionally; the Lean chapter shows how to inspect the corresponding goals.

## Worked example 4: the accumulator theorem in full

Let singleton $[a]$ abbreviate cons of $a$ with nil. Define ordinary reverse by $\mathrm{rev}(\mathrm{nil})=\mathrm{nil}$ and $\mathrm{rev}(\mathrm{cons}(a,xs))=\mathrm{app}(\mathrm{rev}(xs),[a])$. Define accumulator reverse by $\mathrm{revAcc}(\mathrm{nil},z)=z$ and $\mathrm{revAcc}(\mathrm{cons}(a,xs),z)=\mathrm{revAcc}(xs,\mathrm{cons}(a,z))$. Both recursions follow the first list's immediate tail.

The useful theorem is that for **every** list $z$, accumulator reverse of $xs$ with $z$ equals ordinary reverse of $xs$ appended to $z$. Prove it by induction on $xs$, with the universal quantifier over $z$ inside the motive. At nil both sides compute to $z$. At cons, the left side becomes the recursive call on the tail with accumulator $\mathrm{cons}(a,z)$. The induction hypothesis is available at that changed accumulator and yields reverse of the tail appended to that cons list.

On the right, expanding ordinary reverse gives the tail's reverse appended to singleton $[a]$, then appended to $z$. Associativity of append, proved in Exercise 4, rewrites this as the tail's reverse appended to the result of appending singleton $[a]$ to $z$. That latter append computes to $\mathrm{cons}(a,z)$, exactly matching the expression from the induction hypothesis. Thus the successor-like case closes. Specialising the proved theorem to nil, then using the right-unit append law, yields correctness of reverse started with an empty accumulator.

The strengthened theorem has done specific work: its hypothesis accepts the accumulator reached by the recursive call. Assuming correctness only at nil would not justify the same step. This is a complete small example of choosing an invariant from the actual computation, rather than choosing a familiar induction phrase and hoping its hypothesis will fit.

## Folds and a reusable correctness argument

A binary-tree fold into a type $B$ is specified by a leaf map $b:A\to B$ and a node operation $j:B\to B\to B$. Its equations return $b(a)$ at a leaf and apply $j$ to the two child fold results at a node. Consider a second fold into $C$, with corresponding maps $c,k$, and a function $f:B\to C$. Suppose $f(b(a))=c(a)$ for each label and $f(j(u,v))=k(f(u),f(v))$ for all $u,v:B$.

Then applying $f$ after the first fold equals the second fold, on every tree. At a leaf this is the first assumed equality. At a node, unfold the first fold and use the second assumed equality. The two subtree induction hypotheses replace the transformed child results by the second fold's child results. The second fold's node equation identifies the final expression. These are all constructor cases, so tree induction proves the claim.

This fold argument separates the datatype's structural proof from the operations chosen to interpret it. The hypotheses are essential: a function failing to preserve the node operation need not commute with folding. It is often easier to verify the two algebraic equations than to reanalyse every possible finite tree. The result is a mathematical correctness theorem for a specified fold, not an empirical assertion about an implementation's speed or stack use. Those resource properties require a representation and cost model in addition to the structural equations.

## Exercises

### Exercise 1
<a id="inductive-types-and-recursion-ex-1"></a>
Define doubling by natural recursion and prove $d(n)=n+n$, using the stated first-argument addition equations and any needed addition lemmas explicitly.

<details><summary>Hint 1</summary>

Take $d(0)=0$ and $d(Sn)=S(S(d(n)))$.

</details>
<details><summary>Hint 2</summary>

Use the lemma $m+Sn=S(m+n)$, proved by induction on $m$.

</details>
<details><summary>Solution</summary>

First prove the suggested lemma. At $m=0$ both sides compute to $Sn$; at $Sm$, the defining successor equation and congruence of the induction hypothesis give the result. Now induct on $n$. Zero is reflexive. At successor, the doubling equation and induction hypothesis give $S(S(n+n))$. The sum $(Sn)+(Sn)$ computes to $S(n+Sn)$, and the lemma makes this $S(S(n+n))$. Thus the two sides agree. The proof names the nondefinitional arithmetic step.

</details>

### Exercise 2
<a id="inductive-types-and-recursion-ex-2"></a>
State the motive, base proof and step proof for the right-zero addition theorem, rather than only saying “by induction”.

<details><summary>Hint 1</summary>

The motive must mention the variable being analysed.

</details>
<details><summary>Hint 2</summary>

The successor step maps an equality through $S$.

</details>
<details><summary>Solution</summary>

Use $P(m)=(m+0=m)$. The base is reflexivity after $0+0$ reduces to zero. Given $p:m+0=m$, the step is the congruence proof $\operatorname{ap}_S(p):S(m+0)=Sm$; the defining equation converts its left endpoint to $(Sm)+0$. Applying natural induction to these data returns a proof for every $m$. This specifies all arguments to the eliminator and makes its computation rule accountable.

</details>

### Exercise 3
<a id="inductive-types-and-recursion-ex-3"></a>
Prove $\mathrm{app}(xs,\mathrm{nil})=xs$ by list induction.

<details><summary>Hint 1</summary>

Follow the first argument of append.

</details>
<details><summary>Hint 2</summary>

Apply the cons constructor to the tail equality.

</details>
<details><summary>Solution</summary>

For nil, append reduces to nil and reflexivity proves the result. For $\mathrm{cons}(a,xs)$, append reduces to $\mathrm{cons}(a,\mathrm{app}(xs,\mathrm{nil}))$. The induction hypothesis identifies its tail with $xs$. Congruence under the function $z\mapsto\mathrm{cons}(a,z)$ gives the required equality. The recursive argument is the immediate tail, so the induction hypothesis is precisely at an allowed smaller constructor input.

</details>

### Exercise 4
<a id="inductive-types-and-recursion-ex-4"></a>
Prove associativity of list append without using a list-length theorem as a substitute for list equality.

<details><summary>Hint 1</summary>

Induct on the first list with the other two as parameters.

</details>
<details><summary>Hint 2</summary>

Both successor-like cases have the same head and recursively related tails.

</details>
<details><summary>Solution</summary>

The statement is $\mathrm{app}(\mathrm{app}(xs,ys),zs)=\mathrm{app}(xs,\mathrm{app}(ys,zs))$. At nil both sides reduce to $\mathrm{app}(ys,zs)$. At $\mathrm{cons}(a,xs)$, each side reduces to cons of $a$ with the corresponding tail expression in the induction hypothesis. Congruence of cons proves equality. Equal lengths alone would permit lists with different entries or order, so it would not prove this stronger theorem.

</details>

### Exercise 5
<a id="inductive-types-and-recursion-ex-5"></a>
Explain why a node case for the binary-tree family needs two induction hypotheses. State their types for a motive $P$.

<details><summary>Hint 1</summary>

Inspect how many recursive fields the constructor contains.

</details>
<details><summary>Hint 2</summary>

Each immediate subtree supplies its own property.

</details>
<details><summary>Solution</summary>

For $\mathrm{node}(l,r)$, the step receives $l,r:\mathrm{Tree}(A)$ and hypotheses $P(l)$ and $P(r)$, and must produce $P(\mathrm{node}(l,r))$. There are two independent recursive fields. Omitting one hypothesis would make common proofs unnecessarily weak; assuming $P$ of the whole node would instead be circular. A fold has the analogous pair of recursively computed child results at its target type.

</details>

### Exercise 6
<a id="inductive-types-and-recursion-ex-6"></a>
Why does a length-indexed vector type not by itself prove that a sorting programme sorts?

<details><summary>Hint 1</summary>

Consider returning the original vector unchanged.

</details>
<details><summary>Hint 2</summary>

Separate length, ordering and preservation of entries.

</details>
<details><summary>Solution</summary>

The identity operation has type $\mathrm{Vec}(A,n)\to\mathrm{Vec}(A,n)$ and preserves the length index, yet an unsorted input remains unsorted. A sorting specification also needs a chosen order, a proof that the output is ordered, and a relation such as permutation showing that its entries match the input. The index establishes one invariant. It does not supply every desired property merely because the function is well typed.

</details>

### Exercise 7
<a id="inductive-types-and-recursion-ex-7"></a>
Explain both index equations used by vector append under first-argument addition recursion.

<details><summary>Hint 1</summary>

The nil result is the second input vector.

</details>
<details><summary>Hint 2</summary>

Cons increments the recursively obtained length.

</details>
<details><summary>Solution</summary>

In the nil case the target index $0+n$ computes to $n$, matching the second input. In the cons case a recursive append has index $m+n$ and adding a head produces $S(m+n)$. The expected index $(Sm)+n$ computes to that same expression. These are definitional matches for the stated operation. Changing its recursion direction can make the successor match require a separate propositional equality and transport, without changing the mathematical length theorem.

</details>

### Exercise 8
<a id="inductive-types-and-recursion-ex-8"></a>
Reconstruct the bad negative-type diagonal using $\mathrm{roll}:(D\to0)\to D$. Identify the computation returning to its initial term.

<details><summary>Hint 1</summary>

Destruct a rolled function and apply it to the original value.

</details>
<details><summary>Hint 2</summary>

Supply that very consumer to roll.

</details>
<details><summary>Solution</summary>

Define $\delta(d)=\operatorname{case}(d;\mathrm{roll}(f)\mapsto f(d))$. It has type $D\to0$ if the proposed eliminator is admitted. Put $r=\mathrm{roll}(\delta)$. Then $\delta(r)$ unfolds and case-reduces to $\delta(r)$, giving a repeatable cycle at type zero. The negative occurrence permits this circular interaction without an explicit recursive definition. A strictly positive inductive scheme rejects the declaration rather than accepting the loop as a proof of falsehood.

</details>

### Exercise 9
<a id="inductive-types-and-recursion-ex-9"></a>
Distinguish case analysis from induction for a natural-number property $P$.

<details><summary>Hint 1</summary>

Both distinguish zero from successor.

</details>
<details><summary>Hint 2</summary>

Only one supplies a recursive property hypothesis automatically.

</details>
<details><summary>Solution</summary>

Case analysis on $n$ gives a zero case and a successor case with a predecessor $m$. It does not by itself give $P(m)$. Induction gives the same constructor distinction together with $P(m)$ in the successor step, justified by the eliminator. Confusing them can conceal an unsupported use of the theorem at a smaller input. Conversely, when each case is solved without a recursive property, ordinary case analysis may already suffice.

</details>

### Exercise 10
<a id="inductive-types-and-recursion-ex-10"></a>
Why can a theorem about a recursive accumulator need a universally quantified motive? Give the relevant logical shape.

<details><summary>Hint 1</summary>

The recursive call may use a different accumulator.

</details>
<details><summary>Hint 2</summary>

Prove the relation for every accumulator before specialising to the empty one.

</details>
<details><summary>Solution</summary>

Use a motive such as $P(xs)=\Pi a.\;R(\mathrm{revAcc}(xs,a),xs,a)$, where $R$ expresses the intended relation. The tail induction hypothesis then applies at the updated accumulator used by the recursive call. A hypothesis proving the property only at an empty accumulator would not justify that call. After proving the universal result, instantiate it at empty to obtain the original desired theorem. Generalising strengthens the induction statement to match the computation's reachable states.

</details>

## Summary and sources

Constructors describe finite data; eliminators justify structural computation and proof. Natural and list induction follow their recursive fields, and tree induction supplies one hypothesis per child. Indexed constructors make some invariants part of the result type, while positivity controls a concrete route to circular falsehood. Motives and definitional equations must match the actual recursion.

The basic dependent-inductive conventions follow the Univalent Foundations Program's *Homotopy Type Theory* and the comparison framework of Pierce's *Types and Programming Languages*. These examples state their own constructors and computation equations; no installed assistant is presumed. The next chapter develops identity elimination and transport for index equalities that computation does not settle.
