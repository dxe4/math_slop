var e=`---
parent_id: book-probability-models-proofs
chapter_id: independence-and-product-models
title: "Independence, Product Models, and Repeated Trials"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Independence, Product Models, and Repeated Trials

Independence is a factorisation property of a probability law. It is not implied by separate names, physical distance, lack of obvious causal contact, or repeated use of the same marginal distribution. When independence is appropriate, it turns complicated joint events into products and makes repetition mathematically tractable. When it is inappropriate, the same products can be confidently wrong.

This chapter distinguishes pairwise from mutual independence, constructs finite product laws, derives Bernoulli and waiting-time formulas, and proves the independent direction of Borel–Cantelli. It uses conditional probability from [Counting, Conditioning, and Bayes' Rule](#/item/book-probability-models-proofs?chapter=counting-conditioning-and-bayes).

## 1. Two events are independent when their joint mass factors

Events $A$ and $B$ are **independent** under $P$ when

$\\mathbb{P}(A\\cap B)=\\mathbb{P}(A)\\mathbb{P}(B)$.

If $\\mathbb{P}(B)>0$, this is equivalent to $\\mathbb{P}(A \\mid B)=\\mathbb{P}(A)$: learning $B$ does not change the probability of $A$. The factorisation definition is preferable because it remains meaningful when one event has probability zero.

### Independence is not disjointness

If disjoint events $A$ and $B$ both have positive probability, then

$\\mathbb{P}(A\\cap B)=0<\\mathbb{P}(A)\\mathbb{P}(B)$,

so they are not independent. Disjointness says they cannot occur together; independence says occurrence of one leaves the probability of the other unchanged.

An event of probability zero is independent of every event because both sides of the factorisation are zero. An event of probability one is also independent of every event because $\\mathbb{P}(A\\cap B)=\\mathbb{P}(B)$ when $\\mathbb{P}(A)=1$, up to the null complement. These boundary cases are algebraically valid even if they carry little intuitive information.

### Complement stability

If $A$ and $B$ are independent, then $A^{c}$ and $B$ are independent:

$\\mathbb{P}(A^{c}\\cap B)=\\mathbb{P}(B)-\\mathbb{P}(A\\cap B)$

$=\\mathbb{P}(B)-\\mathbb{P}(A)\\mathbb{P}(B)=\\mathbb{P}(A^{c})\\mathbb{P}(B)$.

Repeating the argument shows every choice of complementing either event preserves independence.

## 2. Pairwise independence is weaker than mutual independence

Events $A_{1},...,A_{n}$ are **mutually independent** when for every nonempty index set $J\\subseteq \\{1,...,n\\}$,

$\\mathbb{P}(\\cap_{j\\in J}A_{j})=\\prod_{j\\in J}\\mathbb{P}(A_{j})$.

Checking only pairs verifies **pairwise independence**. It does not control intersections of three or more events.

### Worked counterexample: parity constraint

Choose two independent fair bits $U,V$. Define events

$A=\\{U=1\\}$, $B=\\{V=1\\}$, $C=\\{U xor V=1\\}$.

The four pairs $(U,V)$ are equally likely. Each event has probability $1/2$. Every pair of events occurs together on exactly one of the four outcomes, so each pairwise intersection has probability $1/4$. Thus the events are pairwise independent.

But $A\\cap B\\cap C=\\varnothing$, because $U=V=1$ makes $U xor V=0$. Its probability is zero rather than $(1/2)^{3}=1/8$. The three events are not mutually independent.

The counterexample shows why “all correlations look absent in pairs” cannot establish a full product model.

## 3. Independence extends to families and information

An arbitrary family $(A_{i})_{i\\in I}$ is mutually independent if every finite subfamily satisfies the finite factorisation condition. Infinite intersections are not inserted directly into the definition; finite-dimensional factorisations, together with countable probability laws, determine the usable structure.

Two sigma-algebras $G$ and $H$ are independent when every $G\\in G$ is independent of every $H\\in H$. Random variables $X$ and $Y$ are independent when the sigma-algebras they generate are independent. Equivalently, for all measurable sets $C,D$,

$\\mathbb{P}(X\\in C,Y\\in D)=\\mathbb{P}(X\\in C)\\mathbb{P}(Y\\in D)$.

This formulation controls every event expressible through each variable, not just a selected pair of numerical summaries.

### Functions preserve independence

If $X$ and $Y$ are independent and $f,g$ are measurable, then $f(X)$ and $g(Y)$ are independent. Indeed,

$\\{f(X)\\in C\\}=\\{X\\in f^{-1}(C)\\}$

and similarly for $g$. These preimage events belong to the independent sigma-algebras.

The converse fails. Coarse functions may discard the very information carrying dependence.

## 4. Finite product laws construct independent coordinates

Let finite spaces $S$ and $T$ carry mass functions $p$ and $q$. On $\\Omega =S\\times T$, define

$\\mathbb{P}(\\{(s,t)\\})=p(s)q(t)$.

The masses are nonnegative and sum to

$\\sum_{s}\\sum_{t} p(s)q(t)=(\\sum_{s}p(s))(\\sum_{t}q(t))=1$.

Let coordinate variables be $X(s,t)=s$ and $Y(s,t)=t$. For subsets $C\\subseteq S$, $D\\subseteq T$,

$\\mathbb{P}(X\\in C,Y\\in D)=\\sum_{s\\in C}\\sum_{t\\in D}p(s)q(t)$

$=[\\sum_{s\\in C}p(s)][\\sum_{t\\in D}q(t)]$.

Thus the coordinates are independent with marginal laws $p$ and $q$.

For general measurable spaces, a product-measure theorem constructs a unique measure on the product sigma-algebra satisfying

$(P\\times Q)(A\\times B)=P(A)Q(B)$.

The theorem is substantial: not every subset of an uncountable Cartesian product belongs to the product sigma-algebra, and extension from rectangles must be proved. Durrett, *Probability: Theory and Examples*, 5th ed., Theorem 1.7.1, p. 38, is the exact source used for this imported existence-and-uniqueness step. This volume will use the theorem with its hypotheses rather than pretend the finite sum proof covers the general case.

### Independence is part of the construction

Writing $X_{1}$ and $X_{2}$ with the same marginal law does not make them independent. One construction may set $X_{2}=X_{1}$; another may use two coordinate projections on a product space. Both variables have the same individual distribution, but their joint laws differ completely.

## 5. Repeated Bernoulli trials

A **Bernoulli trial** with success parameter $p$ has outcomes $1$ and $0$ with probabilities $p$ and $1-p$. In $n$ independent repetitions, a particular binary sequence containing $k$ successes has probability

$p^{k}(1-p)^{n-k}$.

There are $\\binom{n}{k}$ locations for the successes, so the count

$S_{n}=X_{1}+...+X_{n}$

has the **binomial law**

$\\mathbb{P}(S_{n}=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$, for $k=0,...,n$.

Normalisation follows from the binomial theorem:

$\\sum_{k=0}^{n} \\binom{n}{k}p^{k}(1-p)^{n-k}=[p+(1-p)]^{n}=1$.

### At least one success

The complement of at least one success is all failures. Independence gives

$\\mathbb{P}(S_{n}\\ge 1)=1-(1-p)^{n}$.

Adding the single-trial probabilities would give the union bound $np$, which may exceed one and counts outcomes with multiple successes more than once.

## 6. Waiting time and memorylessness

Let $T$ be the trial number of the first success in independent Bernoulli trials with $0<p\\le 1$. To have $T=k$, the first $k-1$ trials fail and the $k$th succeeds:

$\\mathbb{P}(T=k)=(1-p)^{k-1}p$, for $k=1,2,...$.

The masses sum to one because the geometric series gives

$\\sum_{k\\ge 1}(1-p)^{k-1}p=1$.

The geometric waiting time is **memoryless**: for nonnegative integers $m,n$ with $\\mathbb{P}(T>m)>0$ (in particular, for all such $m,n$ if $0<p<1$; for $p=1$, only $m=0$),

$\\mathbb{P}(T>m+n \\mid T>m)=\\mathbb{P}(T>n)$.

Indeed, $\\mathbb{P}(T>r)=(1-p)^{r}$, so the conditional ratio is $(1-p)^{m+n}/(1-p)^{m}=(1-p)^{n}$ when $p<1$; the case $p=1$ is handled directly where the condition has positive probability.

Memorylessness is a theorem of this particular law, not a generic property of waiting. Without replacement, ageing components, and learning systems usually do have memory.

## 7. Conditional independence is a different factorisation

Events $A$ and $B$ are **conditionally independent given $C$**, with $\\mathbb{P}(C)>0$, when

$\\mathbb{P}(A\\cap B \\mid C)=\\mathbb{P}(A \\mid C)\\mathbb{P}(B \\mid C)$.

For random variables, conditional independence given $Z$ means the conditional joint law factors into conditional marginals, in an almost-sure sense developed later.

Marginal independence need not survive conditioning, as the “at least one head” example in the previous chapter showed. Conditional independence need not imply marginal independence either: group mixtures can associate variables whose within-group laws factor.

### Worked latent-group model

Choose $G\\in \\{0,1\\}$ fairly. Given $G=g$, let $X$ and $Y$ be independent Bernoulli variables with success probability $0.1$ if $g=0$ and $0.9$ if $g=1$. By construction, $X$ and $Y$ are conditionally independent given $G$.

Marginally, $\\mathbb{P}(X=1)=\\mathbb{P}(Y=1)=0.5$, but

$\\mathbb{P}(X=1,Y=1)=0.5(0.1^{2})+0.5(0.9^{2})=0.41$,

far larger than $0.25$. Shared uncertainty about the latent group induces dependence.

## 8. Infinite products and repeated opportunity

For mutually independent events $A_{1},...,A_{n}$, complement stability gives

$\\mathbb{P}(none of A_{1},...,A_{n})=\\prod_{i=1}^{n}[1-\\mathbb{P}(A_{i})]$.

The elementary bound $1-x\\le e^{-x}$ for $x\\ge 0$ yields

$\\prod_{i=m}^{n}[1-\\mathbb{P}(A_{i})]\\le \\exp(-\\sum_{i=m}^{n}\\mathbb{P}(A_{i}))$.

This converts divergence of a probability sum into disappearance of the “no occurrence” probability.

**Lemma 3.1 (Second Borel–Cantelli for independent events).** If the events $(A_{n})$ are mutually independent and

$\\sum_{n}\\mathbb{P}(A_{n})=\\infty$,

then $\\mathbb{P}(\\limsup A_{n})=1$.

**Proof.** Fix $m$. For $N\\ge m$, independence gives

$\\mathbb{P}(\\cap_{n=m}^{N} A_{n}^{c})=\\prod_{n=m}^{N}[1-\\mathbb{P}(A_{n})]$

$\\le \\exp(-\\sum_{n=m}^{N} \\mathbb{P}(A_{n}))\\to 0$.

As $N$ increases, these finite no-occurrence events decrease to $\\cap_{n\\ge m}A_{n}^{c}$. Continuity from above gives that infinite intersection probability zero. Therefore its complement, the tail union $\\cup_{n\\ge m}A_{n}$, has probability one. The tail unions decrease with $m$, and their intersection is $\\limsup A_{n}$; another use of continuity from above gives probability one. \`□\`

Together, the two Borel–Cantelli lemmas say that independent opportunities occur infinitely often exactly when their probability sum diverges. Without independence, divergence alone is insufficient: all $A_{n}$ could be the same event of probability $1/2$.

## 9. Independence audits in modelling

An independence declaration should answer:

1. Which events, variables, or sigma-algebras factor?
2. Under which law and after which conditioning information?
3. Is the claim pairwise or mutual?
4. What physical mechanism, randomisation design, or mathematical construction supports it?
5. Does sampling without replacement, shared environment, feedback, selection, or a latent group create dependence?
6. Are repeated likelihood terms conditionally independent under every compared hypothesis?
7. Is a product formula being used only on finite subcollections, or has an infinite product construction been justified?

“Assume iid” is a strong, compact model statement: **independent and identically distributed**. The identical part specifies equal marginal laws; the independent part specifies the joint factorisation. Neither implies the other.

## Further constructions and checks

### Worked Example 3.1: an independent subfamily inside a parity model

Take three independent fair bits $U,V,W$ and let $R=U\\mathbin{\\mathrm{xor}}V\\mathbin{\\mathrm{xor}}W$. Show that $U,V,R$ are mutually independent, while the family $U,V,W,R$ is not.

Fix prescribed bit values $u,v,r$. Once $u,v$ are fixed, exactly one of the two values of $W$ makes the parity equal to $r$. Thus exactly one of the eight equiprobable triples generates that prescribed output triple, with probability $1/8$. All eight output triples have equal probability. This proves full product factorisation for $U,V,R$, not only pairwise agreement.

For the four-variable family, the parity relation holds with probability one. A prescribed quadruple violating that relation has probability zero, whereas four independent fair bits would assign it probability $1/16$. The failure of independence therefore appears only after the fourth coordinate is included.

The same counting method explains the general construction: among $n-1$ independent bits and their parity, any proper subfamily is independent because at least one unseen original bit remains to choose the parity freely. A proof counts its fibres; checking a few correlations would miss the full-family constraint.

### Worked Example 3.2: measurable functions can hide dependence

Choose $J$ uniformly from $\\{0,1,2,3\\}$. Define $X=J$ and $Y=J$, so the variables are completely dependent. Let $A$ be the parity of $X$ and let $B$ indicate whether $Y$ is at least two.

The pairs $(A,B)$ at the four possible values of $J$ are $(0,0),(1,0),(0,1),(1,1)$. Each has probability one quarter. Therefore these two coarse functions are independent fair bits, even though their source variables are equal.

This does not contradict the theorem that functions of independent variables remain independent. That theorem is an implication in one direction. A function can throw away the particular information responsible for dependence. Observing the two coarse functions together reconstructs $J$, while observing either alone leaves two equally likely possibilities.

Consequently evidence about selected summaries cannot be promoted automatically to a statement about the full variables. Independence of complete sigma-algebras controls every measurable summary; independence of one chosen pair of summaries controls just that pair.

### Worked Example 3.3: repeated opportunity with shrinking probabilities

Let $(A_n)_{n\\ge2}$ be mutually independent with $P(A_n)=1/[n\\log n]$. The integral comparison for the positive decreasing function $1/(x\\log x)$ shows the probability sum diverges. The independent Borel–Cantelli lemma therefore gives infinitely many occurrences almost surely.

If instead $P(B_n)=1/[n(\\log n)^2]$, the corresponding series converges by the substitution $u=\\log x$ in its comparison integral. The first Borel–Cantelli lemma implies only finitely many occurrences almost surely, with no independence required.

Each probability tends to zero in both sequences. The one-time rarity alone therefore does not determine infinitely-often behavior. The accumulation of opportunities and their dependence matter. The first sequence cannot be treated as independent merely because its probabilities have been listed; independence is an extra construction hypothesis in the example.

## 10. Exercises with complete solutions

### 1. Disjoint and independent

**Exercise 3.1**
<a id="independence-and-product-models-ex-1"></a>

Suppose $A$ and $B$ are disjoint, $\\mathbb{P}(A)=0.3$, and $\\mathbb{P}(B)=0.4$. Are they independent?

<details>
<summary>Hint 1</summary>

Compute the intersection mass from disjointness.

</details>
<details>
<summary>Hint 2</summary>

Compare zero with the product of the two positive marginal probabilities.

</details>
<details>
<summary>Solution</summary>

**Solution.** Their intersection has probability zero, while $\\mathbb{P}(A)\\mathbb{P}(B)=0.12$. The factorisation fails, so they are not independent. Observing $A$ makes $B$ impossible.


</details>

### 2. Complement independence

**Exercise 3.2**
<a id="independence-and-product-models-ex-2"></a>

If $A$ and $B$ are independent, prove $A^{c}$ and $B^{c}$ are independent.

<details>
<summary>Hint 1</summary>

Use the complement of the union.

</details>
<details>
<summary>Hint 2</summary>

Insert independence into inclusion–exclusion and factor the result.

</details>
<details>
<summary>Solution</summary>

**Solution.** First, complementing $A$ gives independence of $A^{c}$ and $B$. Complementing $B$ in that pair gives independence of $A^{c}$ and $B^{c}$. Directly,

$\\mathbb{P}(A^{c}\\cap B^{c})=1-\\mathbb{P}(A\\cup B)$

$=1-\\mathbb{P}(A)-\\mathbb{P}(B)+\\mathbb{P}(A)\\mathbb{P}(B)$

$=[1-\\mathbb{P}(A)][1-\\mathbb{P}(B)]$.


</details>

### 3. Pairwise parity example

**Exercise 3.3**
<a id="independence-and-product-models-ex-3"></a>

For independent fair bits $U,V$, verify explicitly that events $\\{U=1\\}$ and $\\{U xor V=1\\}$ are independent.

<details>
<summary>Hint 1</summary>

Enumerate the four equiprobable bit pairs.

</details>
<details>
<summary>Hint 2</summary>

Count the pair belonging to both displayed events.

</details>
<details>
<summary>Solution</summary>

**Solution.** Event $\\{U=1\\}$ contains outcomes $(1,0),(1,1)$ and has probability $1/2$. Event $\\{U xor V=1\\}$ contains $(0,1),(1,0)$ and also has probability $1/2$. Their intersection is only $(1,0)$, with probability $1/4=(1/2)(1/2)$.


</details>

### 4. Why pair checks do not suffice

**Exercise 3.4**
<a id="independence-and-product-models-ex-4"></a>

In the parity construction, compute the triple intersection and compare it with the product of marginals.

<details>
<summary>Hint 1</summary>

Use the parity constraint when both original bits equal one.

</details>
<details>
<summary>Hint 2</summary>

Compare the resulting triple intersection with one eighth.

</details>
<details>
<summary>Solution</summary>

**Solution.** The conditions $U=1$, $V=1$, and $U xor V=1$ cannot all hold, so the intersection probability is zero. The product of the three marginal probabilities is $1/8$. Thus mutual independence fails despite every pair being independent.


</details>

### 5. Certain events

**Exercise 3.5**
<a id="independence-and-product-models-ex-5"></a>

Prove that if $\\mathbb{P}(A)=1$, then $A$ is independent of every event $B$.

<details>
<summary>Hint 1</summary>

The complement of a probability-one event is null.

</details>
<details>
<summary>Hint 2</summary>

Decompose B into its intersection with A and with the null complement.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $\\mathbb{P}(A^{c})=0$, the subset $B\\cap A^{c}$ has probability zero. Decomposing $B=(B\\cap A)\\cup (B\\cap A^{c})$ gives $\\mathbb{P}(B\\cap A)=\\mathbb{P}(B)$. This equals $\\mathbb{P}(A)\\mathbb{P}(B)=1\\cdot \\mathbb{P}(B)$.


</details>

### 6. A product rectangle

**Exercise 3.6**
<a id="independence-and-product-models-ex-6"></a>

Let $S=\\{a,b\\}$ have masses $(1/3,2/3)$ and $T=\\{0,1\\}$ have masses $(3/4,1/4)$. Under the product law, find $\\mathbb{P}(X=b,Y=1)$.

<details>
<summary>Hint 1</summary>

Read the singleton probability from the product construction.

</details>
<details>
<summary>Hint 2</summary>

Multiply the mass of b by the mass of one.

</details>
<details>
<summary>Solution</summary>

**Solution.** Coordinate independence gives $(2/3)(1/4)=1/6$. Equivalently, that singleton is assigned the product mass by construction.


</details>

### 7. Marginals of a product law

**Exercise 3.7**
<a id="independence-and-product-models-ex-7"></a>

Prove that the first coordinate in a finite product law has mass function $p$.

<details>
<summary>Hint 1</summary>

Sum the joint singleton masses over the other coordinate.

</details>
<details>
<summary>Hint 2</summary>

The second marginal's total mass is one.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $s\\in S$, sum over the second coordinate:

$\\mathbb{P}(X=s)=\\sum_{t\\in T}p(s)q(t)=p(s)\\sum_{t}q(t)=p(s)$.

Normalisation of $q$ is the decisive step.


</details>

### 8. A binomial probability

**Exercise 3.8**
<a id="independence-and-product-models-ex-8"></a>

For eight independent trials with success probability $1/4$, find the probability of exactly three successes.

<details>
<summary>Hint 1</summary>

First choose the positions of the three successes.

</details>
<details>
<summary>Hint 2</summary>

Each permitted binary path has the same product probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** Choose the three success positions and multiply the probability of any one such sequence:

$\\binom{8}{3}(1/4)^{3}(3/4)^{5}$.

The binomial coefficient accounts for disjoint sequences with the same count.


</details>

### 9. At least one failure

**Exercise 3.9**
<a id="independence-and-product-models-ex-9"></a>

Ten independent components each function with probability $0.98$. Find the probability at least one fails.

<details>
<summary>Hint 1</summary>

It is easier to count the complement: all components work.

</details>
<details>
<summary>Hint 2</summary>

Independence permits multiplication of the ten functioning probabilities.

</details>
<details>
<summary>Solution</summary>

**Solution.** All function with probability $0.98^{10}$. Therefore the complement event has probability

$1-0.98^{10}\\approx 0.1829$.

The union bound $10(0.02)=0.2$ is a valid but looser upper bound.


</details>

### 10. Geometric waiting

**Exercise 3.10**
<a id="independence-and-product-models-ex-10"></a>

For success probability $p=0.2$, find $\\mathbb{P}(T=4)$ and $\\mathbb{P}(T>4)$.

<details>
<summary>Hint 1</summary>

First success at four and no success through four are different events.

</details>
<details>
<summary>Hint 2</summary>

The former ends with success; the latter has four failures.

</details>
<details>
<summary>Solution</summary>

**Solution.** First success at trial four requires three failures and a success:

$\\mathbb{P}(T=4)=0.8^{3}\\cdot 0.2=0.1024$.

Waiting beyond four requires four failures: $\\mathbb{P}(T>4)=0.8^{4}=0.4096$.


</details>

### 11. Verify memorylessness

**Exercise 3.11**
<a id="independence-and-product-models-ex-11"></a>

For geometric $T$ with $0<p<1$, compute $\\mathbb{P}(T>7 \\mid T>3)$.

<details>
<summary>Hint 1</summary>

The longer waiting event is contained in the shorter.

</details>
<details>
<summary>Hint 2</summary>

Divide the two geometric tail probabilities using the positive denominator.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $\\{T>7\\}\\subseteq \\{T>3\\}$,

$\\mathbb{P}(T>7 \\mid T>3)=\\mathbb{P}(T>7)/\\mathbb{P}(T>3)=(1-p)^{7}/(1-p)^{3}=(1-p)^{4}$.

This equals $\\mathbb{P}(T>4)$.


</details>

### 12. Identical is not independent

**Exercise 3.12**
<a id="independence-and-product-models-ex-12"></a>

Let $X$ be a fair bit and set $Y=X$. Show that $X,Y$ are identically distributed but not independent.

<details>
<summary>Hint 1</summary>

Check the joint event where both variables equal one.

</details>
<details>
<summary>Hint 2</summary>

Its mass is inherited from one bit, rather than a product of separate trials.

</details>
<details>
<summary>Solution</summary>

**Solution.** Both are fair bits, so their marginal laws agree. But

$\\mathbb{P}(X=1,Y=1)=\\mathbb{P}(X=1)=1/2$,

whereas independence would require $(1/2)(1/2)=1/4$.


</details>

### 13. Independence without distinct physical devices

**Exercise 3.13**
<a id="independence-and-product-models-ex-13"></a>

Let one outcome be a uniformly random two-bit string, and let $X,Y$ be its first and second bits. Are the variables independent?

<details>
<summary>Hint 1</summary>

Check all four singleton pairs under the given uniform law.

</details>
<details>
<summary>Hint 2</summary>

Compare each with its two marginal masses; the device naming is irrelevant.

</details>
<details>
<summary>Solution</summary>

**Solution.** Yes. Each of the four pairs has probability $1/4$, while each marginal bit is fair. Thus every joint singleton mass is the product $1/2\\cdot 1/2$. Independence is a property of the joint law, not of whether the bits came from separately named devices.


</details>

### 14. Functions of independent variables

**Exercise 3.14**
<a id="independence-and-product-models-ex-14"></a>

If integer-valued $X,Y$ are independent, prove that their parity indicators are independent.

<details>
<summary>Hint 1</summary>

Express each parity event as a preimage under its variable.

</details>
<details>
<summary>Hint 2</summary>

The preimage events belong to independent generated sigma-algebras.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $f(x)=1$ when $x$ is even and zero otherwise, and similarly $g$. For $a,b\\in \\{0,1\\}$, events $\\{f(X)=a\\}$ and $\\{g(Y)=b\\}$ are preimages of subsets under $X$ and $Y$. Independence of the generated sigma-algebras makes every such pair factor, which is exactly independence of the indicators.


</details>

### 15. Conditional-independence mixture

**Exercise 3.15**
<a id="independence-and-product-models-ex-15"></a>

In the latent-group example with success probabilities $0.1$ and $0.9$, find $\\mathbb{P}(Y=1 \\mid X=1)$.

<details>
<summary>Hint 1</summary>

Use total probability over the latent group.

</details>
<details>
<summary>Hint 2</summary>

Divide the model's joint success mass by the positive first-success marginal.

</details>
<details>
<summary>Solution</summary>

**Solution.** We computed $\\mathbb{P}(X=1,Y=1)=0.41$, while $\\mathbb{P}(X=1)=0.5$. Hence

$\\mathbb{P}(Y=1 \\mid X=1)=0.41/0.5=0.82$.

This differs from the marginal $0.5$, displaying positive dependence created by the mixture.


</details>

### 16. Summable rare events

**Exercise 3.16**
<a id="independence-and-product-models-ex-16"></a>

If $\\mathbb{P}(A_{n})=1/n^{2}$, what can be concluded about infinitely many occurrences without any independence assumption?

<details>
<summary>Hint 1</summary>

Check whether the probability series converges.

</details>
<details>
<summary>Hint 2</summary>

The first Borel–Cantelli lemma has no independence requirement.

</details>
<details>
<summary>Solution</summary>

**Solution.** The series $\\sum_{n}1/n^{2}$ converges. The first Borel–Cantelli lemma therefore gives $\\mathbb{P}(\\limsup A_{n})=0$: with probability one only finitely many occur. Independence is unnecessary in the summable direction.


</details>

### 17. Divergent independent events

**Exercise 3.17**
<a id="independence-and-product-models-ex-17"></a>

If independent events satisfy $\\mathbb{P}(A_{n})=1/n$ for $n\\ge 2$, what can be concluded?

<details>
<summary>Hint 1</summary>

The supplied events are mutually independent.

</details>
<details>
<summary>Hint 2</summary>

Divergence of their probability sum invokes the second Borel–Cantelli lemma.

</details>
<details>
<summary>Solution</summary>

**Solution.** The harmonic tail diverges and the events are mutually independent, so the second Borel–Cantelli lemma gives $\\mathbb{P}(\\limsup A_{n})=1$. Almost surely infinitely many of them occur.


</details>

### 18. Divergence without independence

**Exercise 3.18**
<a id="independence-and-product-models-ex-18"></a>

Give events with $\\sum_{n}\\mathbb{P}(A_{n})=\\infty$ but $\\mathbb{P}(\\limsup A_{n})<1$.

<details>
<summary>Hint 1</summary>

Try using exactly the same positive-probability event at every time.

</details>
<details>
<summary>Hint 2</summary>

Its limsup is that single event, although the probability sum diverges.

</details>
<details>
<summary>Solution</summary>

**Solution.** Choose one event $A$ with $\\mathbb{P}(A)=1/2$ and set $A_{n}=A$ for every $n$. Then the probability sum diverges, while $\\limsup A_{n}=A$ has probability $1/2$. The events have perfect dependence, so the second Borel–Cantelli hypothesis fails.


</details>

### 19. Infinitely many heads

**Exercise 3.19**
<a id="independence-and-product-models-ex-19"></a>

In independent fair coin tosses, prove that heads occur infinitely often almost surely.

<details>
<summary>Hint 1</summary>

Let A_n record a head at toss n.

</details>
<details>
<summary>Hint 2</summary>

Mutual independence and divergence supply the infinitely-often conclusion.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $A_{n}$ be heads on toss $n$. The events are mutually independent and $\\sum_{n}\\mathbb{P}(A_{n})=\\sum_{n}1/2=\\infty$. The second Borel–Cantelli lemma yields $\\mathbb{P}(\\limsup A_{n})=1$, exactly the claim of infinitely many heads.


</details>

### 20. Repair an iid claim

**Exercise 3.20**
<a id="independence-and-product-models-ex-20"></a>

A data analyst observes that every measurement has the same histogram and declares the sequence iid. What has and has not been checked?

<details>
<summary>Hint 1</summary>

Separate the two words encoded by iid.

</details>
<details>
<summary>Hint 2</summary>

A marginal histogram says nothing by itself about joint factorisation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Similar marginal histograms provide empirical evidence, not proof, for the “identically distributed” component. They do not check joint factorisation at all: shared drift, batch effects, feedback, or latent conditions may create dependence. An iid model needs both a stable marginal mechanism and a defensible independence or randomisation argument, followed by diagnostics sensitive to dependence.


</details>

## 11. Investigation: pairwise is not mutual

Enumerate the four equally likely outcomes of two fair bits. Build a table of the indicators for $U=1$, $V=1$, and $U xor V=1$. Verify every singleton and pair frequency exactly, then verify the triple failure. Extend the construction to $n-1$ independent fair bits and their parity bit. Determine which proper subfamilies are independent and which full-family constraint remains. A program may enumerate the table, but the final explanation must prove the factorisation by counting fibres.

## Sources

For probability spaces, laws, integration and independence, see Rick Durrett, *Probability: Theory and Examples*, fifth edition, chapters 1–2, available on the [author's official Duke page](https://sites.math.duke.edu/~rtd/PTE/pte.html). The earlier undergraduate route is Blitzstein and Hwang, *Introduction to Probability*, linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/). The additional examples and proofs in this chapter are original developments of these standard topics.

## 12. Summary and forward route

Independence is an exact joint-law factorisation. Mutual independence controls every finite subcollection; pairwise checks are weaker. Product measures construct independent coordinates, while identical marginals alone do not. Independent Bernoulli trials produce binomial counts and geometric waiting times. Conditional independence is relative to information, and Borel–Cantelli shows how independence turns an infinite sum of opportunities into almost-sure recurrence.

The next chapter, [Random Variables, Laws, and Transformations](#/item/book-probability-models-proofs?chapter=random-variables-laws-and-transforms), replaces event-by-event descriptions with measurable numerical summaries and their distributions.
`;export{e as default};