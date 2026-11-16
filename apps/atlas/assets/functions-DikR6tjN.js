var e=`---
parent_id: book-introduction-to-proof
chapter_id: functions
title: "Functions"
level: undergraduate
license: CC BY-SA 4.0
---

# Functions

A formula does not tell the whole story of a function. The expression $x^2$ can define a function from the real numbers to the real numbers, or a function from the nonnegative real numbers to themselves. One of these functions is bijective and the other is not. To explain the difference, we must say which inputs are allowed and which outputs the function is claimed to reach.

This chapter treats functions as typed assignments. We prove the main tests for injections, surjections, and inverses, and then use images and inverse images to track subsets. The last section compares finite sets with infinite sets. In particular, the familiar conclusion that an injective self-map must also be surjective depends on finiteness; it is not a consequence of the definition of injection alone.

We assume the language of sets, ordered pairs, quantifiers, and direct proof. The preceding chapter's relation language is useful but not required for the first definitions. We write $\\mathbb N=\\{0,1,2,\\ldots\\}$ and $\\mathbb Z$ for the integers. When we discuss a finite set, its size means its number of distinct elements.

## Domain, codomain, and graph

**Definition 8.1.** A function $f:A\\to B$ assigns to every $a\\in A$ exactly one element $f(a)\\in B$. The set $A$ is the **domain** and $B$ is the **codomain**. The **range**, or image of the whole domain, is

$$f(A)=\\{f(a):a\\in A\\}\\subseteq B.$$

The domain, codomain, and assignment together specify the typed function. The codomain says where outputs are allowed to lie; it need not say that every element there actually occurs. The range records the outputs that do occur. An equation may correctly describe a rule but still fail to define the claimed function if some allowed input has no output in the stated codomain, or if an input has more than one proposed output.

The **graph** of $f:A\\to B$ is the set $\\{(a,f(a)):a\\in A\\}\\subseteq A\\times B$. Conversely, a subset $G\\subseteq A\\times B$ is the graph of a function $A\\to B$ exactly when, for each $a\\in A$, there is one and only one $b\\in B$ with $(a,b)\\in G$. “At least one” is the totality requirement; “at most one” is the uniqueness requirement. Both matter. The graph alone, viewed without its declared codomain, does not record whether unused elements have been added to that codomain.

For example, $x\\mapsto1/x$ is not a function $\\mathbb R\\to\\mathbb R$ under that formula: zero is an allowed input but has no value. Restricting the domain to $\\mathbb R\\setminus\\{0\\}$ repairs the failure. The rule $x\\mapsto\\sqrt{x}$ does define a function $[0,\\infty)\\to\\mathbb R$, where the square root denotes the unique nonnegative root. The relation $y^2=x$ from $[0,\\infty)$ to $\\mathbb R$ is not the graph of a function: for $x=4$ it contains both $(4,2)$ and $(4,-2)$.

The empty domain is legitimate. There is exactly one function from $\\varnothing$ to any set $B$, namely the empty graph: there is no input at which totality or uniqueness can fail. If $A$ is nonempty and $B=\\varnothing$, no function $A\\to B$ exists, since an element of $A$ would need an output in the empty set.

### Worked example 1: one formula, three types

Consider $f:\\mathbb R\\to\\mathbb R$, $f(x)=x^2$; $g:[0,\\infty)\\to[0,\\infty)$, $g(x)=x^2$; and $h:[0,\\infty)\\to\\mathbb R$, $h(x)=x^2$. All three rules are total and have outputs in the stated codomains. For $f$, the inputs $1$ and $-1$ are distinct but share the output $1$. No input has output $-1$. Thus $f$ misses a codomain element and has a collision.

For $g$, if $x,y\\ge0$ and $x^2=y^2$, their nonnegative square roots agree, so $x=y$. For each $b\\ge0$, the allowed input $\\sqrt b$ maps to $b$. Thus $g$ has neither a collision nor a missing codomain value. The function $h$ has the same graph as $g$ but a larger codomain. It still has no collision, but it misses the real number $-1$. These comparisons will become the definitions of injectivity and surjectivity.

## Injective, surjective, bijective

**Definition 8.2.** A function $f:A\\to B$ is **injective** if, for all $a,a'\\in A$,

$$f(a)=f(a')\\quad\\Longrightarrow\\quad a=a'.$$

It is **surjective** if, for every $b\\in B$, there is an $a\\in A$ with $f(a)=b$. It is **bijective** if it is both injective and surjective. Equivalently, an injection has at most one preimage for each codomain element, a surjection has at least one, and a bijection has exactly one.

To prove injectivity, begin with two arbitrary domain elements whose outputs are equal, and work toward equality of the inputs. To disprove it, exhibit two *distinct allowed inputs* with one output. To prove surjectivity, begin with an arbitrary codomain element and construct or otherwise prove the existence of a valid input mapping to it. To disprove it, name a codomain element with no preimage and prove it has none. A list of outputs can suggest a conclusion, but unless the domain is fully listed it does not establish a universal claim.

Surjectivity is relative to the codomain. Every function $f:A\\to B$ becomes surjective when its codomain is restricted to $f(A)$, with the same assignment and domain. That new typed function may be useful, but it is not a proof that the original codomain $B$ was already reached. Similarly, restricting the domain can remove collisions, but changes the function being studied.

### Worked example 2: an affine map on different number systems

Let $f:\\mathbb Z\\to\\mathbb Z$ be $f(n)=2n+1$. If $2m+1=2n+1$, cancellation gives $m=n$, so $f$ is injective. It is not surjective onto $\\mathbb Z$: the integer $0$ is not odd, so no integer $n$ satisfies $2n+1=0$. Its range is precisely the odd integers: every output is odd, and every odd integer has the form $2n+1$ by definition.

Now use the same formula for $F:\\mathbb R\\to\\mathbb R$. The same cancellation proves injection. Given an arbitrary $y\\in\\mathbb R$, take $x=(y-1)/2\\in\\mathbb R$; then $F(x)=y$. Thus $F$ is bijective. The difference is not a change in algebra: the proposed preimage $(y-1)/2$ need not be an integer when $y$ is an integer, while it is always a real number when $y$ is real.

## Composition and the direction of implications

If $f:A\\to B$ and $g:B\\to C$, their composition is $g\\circ f:A\\to C$, given by $(g\\circ f)(a)=g(f(a))$. The output type of $f$ is the input type of $g$. More generally, a composite can be formed when every output of $f$ lies in the domain of $g$; stating compatible types makes that requirement visible.

**Theorem 8.3.** The composite of two injections is injective, and the composite of two surjections is surjective. Consequently the composite of two bijections is bijective.

**Proof.** Suppose $f$ and $g$ are injective and $g(f(a))=g(f(a'))$. Injectivity of $g$ gives $f(a)=f(a')$, and injectivity of $f$ gives $a=a'$. Thus $g\\circ f$ is injective.

Now suppose both are surjective. Given $c\\in C$, surjectivity of $g$ gives $b\\in B$ with $g(b)=c$. Surjectivity of $f$ gives $a\\in A$ with $f(a)=b$. Hence $g(f(a))=c$, so the composite is surjective. Both conclusions apply when both maps are bijective. ∎

There are useful partial converses. If $g\\circ f$ is injective, then $f$ is injective: equality $f(a)=f(a')$ gives equal composite outputs, so $a=a'$. If $g\\circ f$ is surjective onto $C$, then $g$ is surjective: for each $c$ take an $a$ with $g(f(a))=c$ and use $b=f(a)$. The other converses do not follow in general. A noninjective $g$ may still be injective on the smaller subset $f(A)$; a nonsurjective $f$ may miss elements of $B$ that are irrelevant to reaching $C$ through $g$.

### Worked example 3: a composite hides a collision

Take $A=\\{0\\}$, $B=\\{0,1\\}$, and $C=\\{0\\}$. Let $f(0)=0$ and let $g(0)=g(1)=0$. The composite $g\\circ f$ is injective because its domain has only one element. Yet $g$ is not injective: its two distinct inputs have the same output. Here $f(A)=\\{0\\}$, so the composite never exposes the collision involving $1\\in B$. This example does not contradict the theorem: the theorem assumes *both* component maps are injective.

## Inverses and their proof

The identity function on $A$ is $\\operatorname{id}_A:A\\to A$, $\\operatorname{id}_A(a)=a$. A function $g:B\\to A$ is a **two-sided inverse** of $f:A\\to B$ if

$$g\\circ f=\\operatorname{id}_A\\quad\\text{and}\\quad f\\circ g=\\operatorname{id}_B.$$

The equations have different domains, so both must be checked. A formula that undoes $f$ on its image may fail to define an inverse on the entire declared codomain.

**Theorem 8.4 (inverse theorem).** A function $f:A\\to B$ has a two-sided inverse if and only if it is bijective. When it exists, the inverse is unique.

**Proof.** Suppose $g$ is a two-sided inverse. If $f(a)=f(a')$, applying $g$ gives $g(f(a))=g(f(a'))$, hence $a=a'$. Thus $f$ is injective. Given $b\\in B$, the element $g(b)\\in A$ satisfies $f(g(b))=b$, proving surjectivity.

Conversely, suppose $f$ is bijective. For each $b\\in B$, surjectivity gives an $a\\in A$ with $f(a)=b$, and injectivity makes that $a$ unique. Define $g(b)$ to be this unique element. The existence and uniqueness for each input make $g$ a function $B\\to A$. By definition, $f(g(b))=b$. Also $g(f(a))=a$, since $a$ is the unique preimage of $f(a)$. Hence both inverse identities hold. This uses unique preimages, not an arbitrary choice of representatives.

Finally, if $g$ and $h$ are both two-sided inverses, then for every $b\\in B$,

$$g(b)=g(f(h(b)))=h(b).$$

Therefore $g=h$. The argument also covers $A=B=\\varnothing$, for which the empty function is its own inverse. ∎

A left inverse alone, $g\\circ f=\\operatorname{id}_A$, guarantees that $f$ is injective. A right inverse alone, $f\\circ g=\\operatorname{id}_B$, guarantees that $f$ is surjective. These implications follow exactly as in the first half of the proof. We do not assume that every surjection has a right inverse without further justification: for an arbitrary family of nonempty fibers, selecting one member of every fiber is a choice principle. For a finite codomain, or when a section is explicitly given, the needed selections can be made or verified directly.

### Worked example 4: a genuine inverse

Define $f:(0,\\infty)\\to(0,\\infty)$ by $f(x)=1/x$. The output is positive for every allowed input. If $1/x=1/y$, multiplication by the positive number $xy$ gives $x=y$, so $f$ is injective. For $b>0$, the input $1/b$ is positive and $f(1/b)=b$, so $f$ is surjective. The inverse theorem applies, and the same reciprocal rule is the inverse: $f(f(x))=1/(1/x)=x$. Both compositions are well-defined on the specified positive domain.

## Images and inverse images of sets

For $S\\subseteq A$, the **image** is $f(S)=\\{f(a):a\\in S\\}\\subseteq B$. For $T\\subseteq B$, the **inverse image** is

$$f^{-1}(T)=\\{a\\in A:f(a)\\in T\\}.$$

This notation does not require an inverse function. It describes a subset of the domain for every function, including one that is not injective or surjective. The same symbol $f^{-1}$ has two related uses: applied to a set, it means inverse image; applied as a function $B\\to A$, it requires a bijection. The type of the expression tells us which meaning is intended.

**Theorem 8.5.** For subsets $T,U\\subseteq B$, inverse images satisfy

$$f^{-1}(T\\cup U)=f^{-1}(T)\\cup f^{-1}(U),\\qquad
f^{-1}(T\\cap U)=f^{-1}(T)\\cap f^{-1}(U),$$

and $f^{-1}(B\\setminus T)=A\\setminus f^{-1}(T)$.

**Proof.** Let $a\\in A$ be arbitrary. Then $a\\in f^{-1}(T\\cup U)$ exactly when $f(a)\\in T\\cup U$, exactly when $f(a)\\in T$ or $f(a)\\in U$, exactly when $a$ is in the union of the two inverse images. Replacing “or” by “and” gives the intersection identity. Finally, $f(a)\\in B\\setminus T$ exactly when $f(a)\\notin T$, proving the complement identity. Since these equivalences hold for every $a\\in A$, the corresponding sets are equal. ∎

Direct images behave differently with intersections. We always have $f(S\\cap U)\\subseteq f(S)\\cap f(U)$, because an input belonging to both sets has an output belonging to both images. The reverse inclusion can fail if different inputs in the two sets have the same output. For $f:\\mathbb R\\to\\mathbb R$ with $f(x)=x^2$, take $S=\\{-1\\}$ and $U=\\{1\\}$. Their intersection is empty, but both images are $\\{1\\}$. If $f$ is injective, the reverse inclusion does hold: equal output witnesses must be the same input.

## Finite and infinite sets

**Pigeonhole principle.** If a finite set $A$ has more elements than a finite set $B$, no function $A\\to B$ is injective. If $A$ has fewer elements than $B$, no function $A\\to B$ is surjective.

**Proof.** List the elements of $A$ one at a time. An injective function must assign a distinct codomain element to each listed input. After all elements are listed it would require more distinct elements of $B$ than $B$ contains, impossible. For the second statement, the image contains at most one output per input and therefore has at most $|A|$ elements. If $|A|<|B|$, it cannot equal $B$. The empty-set cases satisfy the same count. ∎

**Corollary 8.6.** If $A$ and $B$ are finite and have the same size, a function $f:A\\to B$ is injective if and only if it is surjective.

**Proof.** If $f$ is injective, the $|A|$ outputs are distinct. They form a subset of $B$ with $|B|$ elements, so the image is all of $B$. Conversely, if $f$ is surjective and two distinct inputs share an output, the image has at most $|A|-1$ elements, contradicting its equality with $B$. If both sets are empty, the empty function is both injective and surjective. ∎

### Worked example 5: an infinite counterexample

The shift $s:\\mathbb N\\to\\mathbb N$, $s(n)=n+1$, is injective: $m+1=n+1$ implies $m=n$. It is not surjective because $0$ is not $n+1$ for any $n\\in\\mathbb N$. Thus an injective self-map of an infinite set need not be surjective. In the opposite direction, $t(0)=0$ and $t(n)=n-1$ for $n\\ge1$ defines a surjective self-map of $\\mathbb N$: each $k$ is hit by $k+1$. It is not injective because $t(0)=t(1)=0$. These are separate examples for the two failed infinite analogues.

## Fibers and restrictions

For $b\\in B$, the **fiber** of $f:A\\to B$ over $b$ is $f^{-1}(\\{b\\})$. It is a set of inputs, possibly empty. The definition of injection says that every fiber contains at most one element; the definition of surjection says that every fiber contains at least one. A function is bijective exactly when every fiber contains one element. This description turns the inverse theorem into a construction: the inverse sends $b$ to the unique member of its fiber.

For example, under $f:\\mathbb R\\to\\mathbb R$, $f(x)=x^2$, the fiber over $4$ is $\\{-2,2\\}$, the fiber over $0$ is $\\{0\\}$, and the fiber over $-1$ is empty. These three fibers demonstrate a collision, a uniquely reached value, and a missing codomain value. Their sizes explain both failures of bijectivity. Restrict the domain to $[0,\\infty)$ and the fiber over $4$ becomes $\\{2\\}$, while the fiber over $-1$ remains empty. Restricting the codomain as well removes that last obstruction.

For $S\\subseteq A$, the **restriction** $f|_S:S\\to B$ has rule $f|_S(s)=f(s)$. Its graph is the part of the original graph with first coordinate in $S$. A restriction of an injection remains injective, because an equality between two outputs from $S$ is also an equality between outputs from $A$. A restriction of a surjection need not remain surjective: the identity map on $\\{0,1\\}$ is surjective, but its restriction to $\\{0\\}$ misses $1$. These observations are simple consequences of the quantifiers, and they help prevent a common mistake: a property of a function on a small domain does not automatically extend to a larger domain.

One can also change a codomain while retaining the graph, provided it contains every output. Enlarging a codomain preserves injectivity, because it creates no new inputs or output collisions. It can destroy surjectivity by introducing values not reached. Restricting the codomain to the image makes the function surjective, but it does not remove collisions. Thus domain restriction and codomain restriction solve different problems; neither should be hidden inside a statement that “the formula has an inverse.”

## A checklist for constructing a function

A proof that proposes $f(a)$ should check three things in order. First, for an arbitrary allowed $a$, the proposed expression exists. Division requires a nonzero denominator, a real square root requires a nonnegative radicand, and a definition by cases should cover all allowed inputs. Second, the result lies in the declared codomain. A real-valued formula does not automatically define a function into the integers. Third, the result is unique. If two cases overlap, their prescriptions must agree on the overlap; otherwise the rule gives two values to one input.

As an illustration, define $p:\\mathbb Z\\to\\mathbb Z$ by $p(n)=n/2$ when $n$ is even and $p(n)=(n-1)/2$ when $n$ is odd. Every integer is either even or odd, and it cannot be both, so exactly one case applies. In the even case $n=2k$ gives output $k\\in\\mathbb Z$; in the odd case $n=2k+1$ gives output $k\\in\\mathbb Z$. Hence the rule is a total function into the claimed codomain. It is surjective because $p(2k)=k$ for every integer $k$, and it is not injective because $p(0)=p(1)=0$. Notice that $k\\mapsto2k$ supplies an explicit right inverse here; no general choice principle is being invoked.

When a proposed rule involves equivalence classes, the third check has an additional form: different representatives of one class must give the same value. That well-definedness condition is the bridge back to the preceding chapter. Once it is established, the resulting quotient map can be studied using the same injection and surjection tests as any other function.

## Exercises

Try each problem before opening its hints. In every proof, specify the domain of the arbitrary element you introduce.

### Exercise 1: totality and uniqueness {#fun-e01}
Is the relation $y^2=x$ the graph of a function $[0,\\infty)\\to\\mathbb R$? What if the codomain is changed to $[0,\\infty)$?

<details><summary>Hint 1</summary>
Inspect the input $x=4$.
</details>
<details><summary>Hint 2</summary>
Use the uniqueness of the nonnegative square root for the second type.
</details>
<details><summary>Solution</summary>
For codomain $\\mathbb R$, the input $4$ is related to both $2$ and $-2$, so uniqueness fails. With codomain $[0,\\infty)$, each $x\\ge0$ has exactly one nonnegative square root $\\sqrt x$. Hence the restricted relation is the graph of a function.
</details>

### Exercise 2: an injection of integers {#fun-e02}
Determine whether $f:\\mathbb Z\\to\\mathbb Z$, $f(n)=2n$, is injective or surjective.

<details><summary>Hint 1</summary>
First equate two outputs.
</details>
<details><summary>Hint 2</summary>
Find an integer that is not even.
</details>
<details><summary>Solution</summary>
If $2m=2n$, cancellation gives $m=n$, so $f$ is injective. The integer $1$ has no integer preimage, since $2n$ is even. Thus $f$ is not surjective and is not bijective.
</details>

### Exercise 3: codomain matters {#fun-e03}
Let $f:\\mathbb R\\to\\mathbb R$ be $f(x)=x^2$. Find its range and decide what changes if its codomain is replaced by $[0,\\infty)$.

<details><summary>Hint 1</summary>
Every real square is nonnegative.
</details>
<details><summary>Hint 2</summary>
For a nonnegative output use its nonnegative square root.
</details>
<details><summary>Solution</summary>
The range is $[0,\\infty)$: squares are nonnegative, and $y\\ge0$ is the square of $\\sqrt y$. The original function is not surjective onto $\\mathbb R$. The codomain-restricted function is surjective, but it remains noninjective because $1$ and $-1$ still have the same output.
</details>

### Exercise 4: a left inverse {#fun-e04}
Suppose $f:A\\to B$ and $g:B\\to A$ satisfy $g\\circ f=\\operatorname{id}_A$. Prove that $f$ is injective and $g$ is surjective.

<details><summary>Hint 1</summary>
Apply $g$ to an equality of outputs of $f$.
</details>
<details><summary>Hint 2</summary>
For $a\\in A$, exhibit an element of $B$ that maps to $a$ under $g$.
</details>
<details><summary>Solution</summary>
If $f(a)=f(a')$, then $a=g(f(a))=g(f(a'))=a'$, so $f$ is injective. For any $a\\in A$, the element $f(a)\\in B$ satisfies $g(f(a))=a$. Hence $g$ is surjective onto $A$.
</details>

### Exercise 5: right inverse {#fun-e05}
Suppose $f:A\\to B$ and $h:B\\to A$ satisfy $f\\circ h=\\operatorname{id}_B$. Prove that $f$ is surjective and $h$ is injective.

<details><summary>Hint 1</summary>
Use $h(b)$ as a candidate preimage of $b$.
</details>
<details><summary>Hint 2</summary>
Apply $f$ to an equality $h(b)=h(b')$.
</details>
<details><summary>Solution</summary>
For $b\\in B$, $f(h(b))=b$, so $f$ is surjective. If $h(b)=h(b')$, applying $f$ yields $b=b'$, so $h$ is injective. The exercise assumes the section $h$ is supplied; it does not construct one for an arbitrary surjection.
</details>

### Exercise 6: inverse of a composite {#fun-e06}
For bijections $f:A\\to B$ and $g:B\\to C$, prove $(g\\circ f)^{-1}=f^{-1}\\circ g^{-1}$.

<details><summary>Hint 1</summary>
Check the domain and codomain of the proposed inverse.
</details>
<details><summary>Hint 2</summary>
Compose in both orders and cancel adjacent inverse pairs.
</details>
<details><summary>Solution</summary>
The proposed map goes from $C$ to $A$. Associativity and the inverse identities give $(f^{-1}\\circ g^{-1})\\circ(g\\circ f)=\\operatorname{id}_A$ and $(g\\circ f)\\circ(f^{-1}\\circ g^{-1})=\\operatorname{id}_C$. It is therefore the unique two-sided inverse.
</details>

### Exercise 7: inverse images {#fun-e07}
For $f:\\mathbb Z\\to\\mathbb Z$, $f(n)=2n$, find $f^{-1}(\\{0,1,2,3,4\\})$ and $f(\\{-2,-1,0,1,2\\})$.

<details><summary>Hint 1</summary>
An input belongs to the inverse image when its doubled value is in the given set.
</details>
<details><summary>Hint 2</summary>
List the even members of the first set.
</details>
<details><summary>Solution</summary>
The possible doubled values in the first set are $0,2,4$, with preimages $0,1,2$. Thus the inverse image is $\\{0,1,2\\}$. The direct image is $\\{-4,-2,0,2,4\\}$.
</details>

### Exercise 8: direct-image intersection {#fun-e08}
Prove that if $f:A\\to B$ is injective, then $f(S\\cap T)=f(S)\\cap f(T)$ for all $S,T\\subseteq A$.

<details><summary>Hint 1</summary>
The forward inclusion is always true.
</details>
<details><summary>Hint 2</summary>
For the reverse inclusion, compare the two input witnesses using injectivity.
</details>
<details><summary>Solution</summary>
If $y\\in f(S\\cap T)$, a witness in both sets shows $y\\in f(S)\\cap f(T)$. Conversely, if $y$ lies in both images, there are $s\\in S$ and $t\\in T$ with $f(s)=y=f(t)$. Injectivity gives $s=t$, so this element lies in $S\\cap T$ and $y\\in f(S\\cap T)$. Both inclusions give equality.
</details>

### Exercise 9: finite obstruction {#fun-e09}
Give an injective function from $\\{1,2,3\\}$ to $\\{a,b,c,d\\}$ and prove that no function in this direction is surjective.

<details><summary>Hint 1</summary>
Send the three inputs to three different letters.
</details>
<details><summary>Hint 2</summary>
How many distinct outputs can three inputs supply?
</details>
<details><summary>Solution</summary>
Set $f(1)=a$, $f(2)=b$, and $f(3)=c$. Its outputs are distinct, so it is injective. Any function from this three-element domain has at most three distinct outputs, while the codomain has four elements. It therefore misses at least one codomain element and cannot be surjective.
</details>

### Exercise 10: an infinite contrast {#fun-e10}
For $t:\\mathbb N\\to\\mathbb N$ defined by $t(0)=0$ and $t(n)=n-1$ when $n\\ge1$, prove surjectivity and disprove injectivity.

<details><summary>Hint 1</summary>
Given $k$, try input $k+1$.
</details>
<details><summary>Hint 2</summary>
Compare the outputs at $0$ and $1$.
</details>
<details><summary>Solution</summary>
For each $k\\in\\mathbb N$, $k+1\\ge1$ and $t(k+1)=k$, so $t$ is surjective. But $t(0)=0=t(1)$ with $0\\ne1$, so $t$ is not injective. This does not contradict the finite-set corollary because $\\mathbb N$ is infinite.
</details>

## Summary

A typed function has a domain, a codomain, and exactly one output for each input. Its range is the set of outputs actually reached. Injectivity rules out collisions; surjectivity reaches every codomain element; bijectivity means both. Composition preserves each property when both components have it. A two-sided inverse exists exactly for a bijection and is unique. Inverse images of sets exist for every function and respect unions, intersections, and complements. For finite sets of equal size, injection and surjection coincide; the shift on the natural numbers shows why finiteness cannot be omitted.

## Sources and further reading

- Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), Chapter 12, for functions, injections, surjections, and inverses. This chapter is independently written; the linked text is further reading.
- Euler's [Functions are typed assignments](../functions-equations-proof/functions-are-typed-assignments.md), for the original treatment of domain, codomain, inverse, and composition.
`;export{e as default};