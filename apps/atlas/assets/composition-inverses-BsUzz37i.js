var e=`---
parent_id: book-precalculus
chapter_id: composition-inverses
title: "Composition and Inverses"
level: secondary
license: CC BY-SA 4.0
---

# Composition and Inverses

## Connecting rules and reversing them

A parcel company first calculates the total mass of a shipment from the number of boxes, then calculates postage from that mass. These are two functions connected in sequence. A different question starts from the postage and asks which shipment produced it. The first process is composition; the second concerns reversing a function. Both demand more care than merely putting one formula inside another or rearranging an equation.

This chapter develops those ideas from familiar algebra. You will compose functions in a stated order, find the inputs for which every stage is valid, and decide when a function has an inverse between chosen sets. You will find inverse formulas, explain why a quadratic needs a restricted domain, and distinguish an inverse function from a reciprocal and from a set of preimages. These distinctions will recur in graph transformations, logarithms, and inverse trigonometric functions.

## Preparation and notation

The required preparation is [Algebra and Functions](/books/library-book-algebra-and-functions/). In particular, its chapters on [functions, domains, and graphs](../algebra-and-functions/functions-domain-graphs.md), [quadratic functions](../algebra-and-functions/quadratic-functions.md), and [rational expressions](../algebra-and-functions/rational-expressions.md) supply the notation and algebra used here. You should be able to substitute an expression into a formula, solve a linear equation or inequality, preserve denominator restrictions, and use the principal square root. No calculus or formal proof course is required.

We work with real-valued functions on stated real domains, except when a finite set is explicitly given. The notation $x\\in A$ means that $x$ belongs to the set $A$. The interval $[a,b)$ includes $a$ and excludes $b$. A square root $\\sqrt{u}$ is defined over the reals for $u\\ge0$ and denotes the nonnegative root. Thus $\\sqrt{u^2}=|u|$, including when $u$ is negative.

## Functions include their allowed sets

**Definition 1.1 (Domain, codomain, and range).** A function $f:A\\to B$ assigns exactly one element of $B$ to each element of $A$. Its domain is $A$, its codomain is the stated destination set $B$, and its range is the set of outputs actually attained, $\\{f(x):x\\in A\\}$.

The range must be contained in the codomain, but need not equal it. For $f:\\mathbb R\\to\\mathbb R$ defined by $f(x)=x^2$, the range is $[0,\\infty)$ even though the codomain contains negative numbers. We could instead choose the codomain $[0,\\infty)$ without changing any input-output pair. The distinction will matter when we ask for an inverse on the whole codomain.

A formula with a smaller domain defines a restriction of the original function. The square function on $[0,\\infty)$ behaves differently under reversal from the square function on all real numbers. Its numerical formula is unchanged, but there are no longer two allowed inputs, such as three and negative three, producing the same positive output. Whenever domain information has been supplied, it takes priority over the natural domain suggested by a formula alone.

## Composition follows the output into the next rule

**Definition 1.2 (Composition and its domain).** Let $g$ and $f$ be functions with domains $D_g$ and $D_f$. The composition $f\\circ g$, read “$f$ after $g$”, has rule

$$
(f\\circ g)(x)=f(g(x))
$$

and domain

$$
D_{f\\circ g}=\\{x\\in D_g:g(x)\\in D_f\\}.
$$

Read the formula from the inside out: first compute $g(x)$, then use that output as the input of $f$. The two domain requirements describe the two stages. The first function must accept the original input, and the second must accept the number it receives. In a physical calculation, the units must match at the handover too. A postage rule expecting kilograms cannot receive a box count without a preceding mass conversion.

**Result 1.3 (Composition is well-defined on its stated domain).** Every input in $D_{f\\circ g}$ receives exactly one output from the composition.

*Reason.* Membership in $D_g$ supplies one value $g(x)$. Membership of that value in $D_f$ then supplies one value $f(g(x))$. Outside the stated set, at least one of those two stages is unavailable, so the sequential rule has not defined an output. ∎

If $g:A\\to B$ and $f:B\\to C$, the matching set $B$ guarantees that the composition is defined on all of $A$. In many formula questions we instead begin with separately specified domains and retain the inputs that pass both tests. It is the actual intermediate output that must be admitted. A large chosen codomain for $g$ is not, by itself, evidence that some particular intermediate output fails.

### Worked example 1.4 (Composition is sensitive to order)

Let $f(x)=2x-3$ and $g(x)=x^2$, both on all real numbers. Find $f\\circ g$, $g\\circ f$, and the product of their values.

For $f\\circ g$, square first and then apply the linear rule:

$$
(f\\circ g)(x)=f(x^2)=2x^2-3.
$$

For $g\\circ f$, apply the linear rule first and then square its whole output:

$$
(g\\circ f)(x)=g(2x-3)=(2x-3)^2.
$$

Both domains are all real numbers, but the functions differ. At zero their outputs are negative three and nine respectively. Composition is not generally commutative. The product is a third function, $f(x)g(x)=(2x-3)x^2=2x^3-3x^2$. Multiplying two outputs is different from passing one output into the next rule; the small composition circle does not mean multiplication.

### Worked example 1.5 (Checking both stages)

Let $f(t)=\\sqrt{t}$ on $[0,\\infty)$ and $g(x)=1/(x-1)$ on $\\mathbb R\\setminus\\{1\\}$. Find both compositions and their domains.

For $f\\circ g$, we first need $x\\ne1$. We also need $1/(x-1)\\ge0$ so that the square root can be taken. The numerator is positive, so this quotient is positive exactly when its denominator is positive. It is never zero. Therefore

$$
(f\\circ g)(x)=\\sqrt{\\frac1{x-1}},\\qquad x>1.
$$

For $g\\circ f$, the first stage requires $x\\ge0$. The second requires its input $\\sqrt{x}$ to differ from one, excluding $x=1$. Consequently

$$
(g\\circ f)(x)=\\frac1{\\sqrt{x}-1},\\qquad x\\ge0,\\ x\\ne1.
$$

Zero belongs to the second domain and gives output negative one; it does not belong to the first. Listing the stages prevents the error of using the same domain for both orders. We did not multiply an inequality by the unknown-sign quantity $x-1$; we determined its sign directly.

## Simplification does not restore a missing stage

### Worked example 1.6 (Square and square root in opposite orders)

Let $s(x)=x^2$ on $\\mathbb R$ and $r(x)=\\sqrt{x}$ on $[0,\\infty)$. Compute both compositions, retaining their domains.

For $s\\circ r$, the square root must be taken first, so $x\\ge0$. Squaring its value gives

$$
(s\\circ r)(x)=(\\sqrt{x})^2=x,\\qquad x\\ge0.
$$

The simplified formula $x$ can be evaluated at negative numbers, but the original sequential process cannot. Its domain remains $[0,\\infty)$.

For $r\\circ s$, every real input can first be squared, and its square is nonnegative. Hence

$$
(r\\circ s)(x)=\\sqrt{x^2}=|x|,\\qquad x\\in\\mathbb R.
$$

At negative four, this returns four, not the original input. Squaring has erased the sign, and the principal root cannot recover it. Thus these two functions, with these domains, do not undo one another in both directions. Writing $\\sqrt{x^2}=x$ without a sign restriction would conceal the failure.

Decomposing an expression into stages can help with both domain work and modelling. The rule $H(x)=\\sqrt{3x-5}$ can be built from $g(x)=3x-5$ followed by $f(t)=\\sqrt{t}$. Its domain condition is then $3x-5\\ge0$, or $x\\ge5/3$. Other decompositions are possible; there is no promise of uniqueness. The useful decomposition is one whose intermediate quantities have clear meanings and whose restrictions you can state.

**Theorem 1.7 (Associativity of composition).** If three functions $h,g,f$ can be applied in that order at an input, then

$$
((f\\circ g)\\circ h)(x)=(f\\circ(g\\circ h))(x).
$$

Both bracketings have exactly the domain consisting of inputs where $h(x)$ is defined, $g(h(x))$ is defined, and $f(g(h(x)))$ is defined.

*Proof.* Expanding either bracketing gives $f(g(h(x)))$. In both cases the same three stages must be permitted, so the domains agree as well as the values. ∎

Associativity allows us to regroup a sequence; it does not allow us to reorder the stages. A packaging charge applied before a discount may produce a different total from the same charge applied afterwards. The brackets in a long composition concern grouping, while the written order records the actual process.

## What must be true before reversal gives a function?

**Definition 1.8 (One-to-one, onto, and bijective).** A function $f:A\\to B$ is one-to-one, or injective, if different inputs in $A$ always have different outputs. It is onto $B$, or surjective, if every element of $B$ is an output. It is bijective if both conditions hold.

These properties address two different difficulties in running a rule backwards. A repeated output would leave a choice of original inputs. An unattained codomain value would leave no original input. An inverse function on all of $B$ must encounter neither difficulty. In ordinary language, each destination must have exactly one starting point.

For example, the square function $\\mathbb R\\to[0,\\infty)$ is onto but not one-to-one: both two and negative two produce four. The square function $[0,\\infty)\\to\\mathbb R$ is one-to-one but not onto: no allowed input produces negative one. Choosing both domain and codomain as $[0,\\infty)$ removes both obstructions. Restricting the domain and choosing the range as codomain serve distinct purposes.

**Definition 1.9 (Inverse function).** For $f:A\\to B$, an inverse is a function $f^{-1}:B\\to A$ satisfying

$$
f^{-1}(f(x))=x\\quad(x\\in A),\\qquad
f(f^{-1}(y))=y\\quad(y\\in B).
$$

**Theorem 1.10 (When an inverse exists).** A function $f:A\\to B$ has an inverse on all of $B$ exactly when it is bijective. That inverse is unique.

*Proof.* If an inverse exists and $f(x_1)=f(x_2)$, apply the inverse to get $x_1=x_2$, proving one-to-one behaviour. For every $y\\in B$, the equation $f(f^{-1}(y))=y$ supplies an input producing $y$, proving onto behaviour. Conversely, if $f$ is bijective, every $y\\in B$ has exactly one original input. Define $f^{-1}(y)$ to be that input. Both displayed identities then follow from this definition. Any inverse must choose that same unique input at every $y$, so it is unique. ∎

A one-to-one function always has an inverse from its range back to its domain. If its announced codomain is larger than the range, first make clear that the inverse's domain is the range, or explicitly change the chosen codomain. We shall state both sets whenever an inverse is constructed. Rearranging an equation supplies a candidate formula; these set conditions establish whether it is actually an inverse function of the specified assignment.

### Worked example 1.11 (An inverse on a restricted interval)

Let $f:[-2,4]\\to[-11,7]$ be given by $f(x)=3x-5$. Find its inverse with domain and range.

The rule is strictly increasing: if $u<v$, then $3u-5<3v-5$. It is therefore one-to-one. Its endpoint values are negative eleven and seven. For every $y\\in[-11,7]$, solving $y=3x-5$ gives $x=(y+5)/3$, which lies in $[-2,4]$. This also proves that every stated codomain value is attained.

Thus

$$
f^{-1}(y)=\\frac{y+5}{3},\\qquad
f^{-1}:[-11,7]\\to[-2,4].
$$

The original operation multiplies by three and subtracts five; reversal adds five and divides by three, in reverse order. Checking gives $f^{-1}(f(x))=x$ for $x\\in[-2,4]$ and $f(f^{-1}(y))=y$ for $y\\in[-11,7]$. Although the inverse formula itself is meaningful at one hundred, one hundred is outside the inverse domain of this specified function.

### Worked example 1.12 (Selecting a branch of a quadratic)

Consider $q(x)=(x-2)^2-1$. On all real numbers it is not one-to-one: the inputs one and three both give zero. Restrict it instead to

$$
q:[2,\\infty)\\to[-1,\\infty).
$$

To reverse the rule, solve $y=(x-2)^2-1$. This gives $(x-2)^2=y+1$. Because the allowed inputs satisfy $x-2\\ge0$, the correct root is $x-2=\\sqrt{y+1}$. Therefore

$$
q^{-1}(y)=2+\\sqrt{y+1},\\qquad y\\ge-1.
$$

Every such output of the inverse is at least two, as required. The compositions check explicitly:

$$
q(q^{-1}(y))=(\\sqrt{y+1})^2-1=y,
$$

and

$$
q^{-1}(q(x))=2+\\sqrt{(x-2)^2}=2+|x-2|=x
$$

on $x\\ge2$. The last equality uses the domain restriction; it would fail for $x<2$. Choosing the alternative domain $(-\\infty,2]$ would instead give the inverse $2-\\sqrt{y+1}$. Both choices are legitimate, but they describe different restricted functions. Writing a single inverse output as “plus or minus” would give two outputs for most inputs and would not define a function.

## Inverse, reciprocal, and preimage are different ideas

The superscript in $f^{-1}$ denotes reversal of a function under composition. It does not instruct us to take the reciprocal of a numerical output. For $f(x)=3x-5$ on all real numbers, the inverse is $(x+5)/3$, whereas the reciprocal rule is $1/(3x-5)$, undefined at $x=5/3$. They answer different questions: the inverse asks which input produced a supplied output; the reciprocal divides one by an output.

**Definition 1.13 (Preimage of a set).** For any function $f:A\\to B$ and subset $S$ of $B$, the preimage of $S$ is the set

$$
f^{-1}(S)=\\{x\\in A:f(x)\\in S\\}.
$$

This set notation does not require an inverse function to exist. It describes all inputs whose outputs meet a condition. For a single target value $y$, use the singleton set $\\{y\\}$: its preimage can have no elements, one element, or several. If a bijective function has an inverse, the preimage of $\\{y\\}$ is the singleton containing the inverse value. Keeping the braces visible helps distinguish a set of inputs from one inverse output.

### Worked example 1.14 (Preimages without an inverse)

For $f:\\mathbb R\\to\\mathbb R$, $f(x)=x^2$, find the preimages of $\\{9\\}$, $\\{-1\\}$, and $[1,4]$.

The equation $x^2=9$ gives $x=-3$ or $x=3$, so $f^{-1}(\\{9\\})=\\{-3,3\\}$. No real square is negative, so $f^{-1}(\\{-1\\})$ is the empty set. The condition $1\\le x^2\\le4$ means that the distance $|x|$ is between one and two inclusive. Hence

$$
f^{-1}([1,4])=[-2,-1]\\cup[1,2].
$$

These are valid preimage calculations despite the absence of an inverse function on the specified sets. The reciprocal $1/x^2$, in contrast, is a numerical rule on nonzero inputs. None of these operations can be substituted for another merely because inverse notation resembles a negative power.

## Reversing a sequence and reading its graph

**Theorem 1.15 (Inverse of a composition).** If $f:A\\to B$ and $g:B\\to C$ are bijective, then $g\\circ f$ is bijective and

$$
(g\\circ f)^{-1}=f^{-1}\\circ g^{-1}:C\\to A.
$$

*Proof.* Starting from any $z\\in C$, first use $g^{-1}$ to recover its unique input in $B$, then $f^{-1}$ to recover the unique input in $A$. Applying $g\\circ f$ to that result returns $z$. In the other direction, applying these reversals to $g(f(x))$ first returns $f(x)$ and then $x$. Thus both inverse identities hold on the stated sets. ∎

Reversing the order is familiar from everyday actions: an outer operation must be undone before an inner operation becomes accessible. For $H(x)=2(x+3)$ on all real numbers, subtracting three first would act on the wrong intermediate quantity. The inverse is $H^{-1}(y)=y/2-3$, obtained by halving before subtracting three.

On a graph, an inverse interchanges coordinates. If $(a,b)$ is on the graph of $f$, then $(b,a)$ is on the graph of its inverse when that inverse exists. This is reflection in the line $y=x$, using the same numerical scale on both axes. A horizontal line meeting the original graph twice signals repeated outputs, which become two outputs at one input after reflection. That is why a vertical-line test for the reversed graph corresponds to a horizontal-line test for one-to-one behaviour in the original.

A sketch can suggest this behaviour, but the domain and the function rule give the exact justification. For a restricted quadratic, reflect only the selected branch, including its endpoint conventions. Reflecting the whole parabola would describe a relation with two branches, not the inverse of the chosen one-to-one restriction.

## Exercises

### Exercise 1.1
<a id="composition-inverses-ex-1"></a>

A function $g$ has domain $\\{-1,0,2\\}$ with values $g(-1)=0$, $g(0)=2$, $g(2)=4$. A function $f$ has domain $\\{0,2,4\\}$ with values $f(0)=1$, $f(2)=-1$, $f(4)=3$. Find $(f\\circ g)(-1)$ and $(f\\circ g)(0)$. Determine the whole domain and values of $g\\circ f$.

<details>
<summary>Hint 1</summary>

**Hint.** Follow the intermediate output into the domain list of the next function.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the reverse composition, test each of the three inputs of $f$ and retain only those whose $f$ output appears among the inputs of $g$.

</details>
<details>
<summary>Solution</summary>

**Solution.** We get $f(g(-1))=f(0)=1$ and $f(g(0))=f(2)=-1$. In the reverse order, $f(0)=1$ is not in the domain of $g$, $f(2)=-1$ is, and $f(4)=3$ is not. Thus $g\\circ f$ has domain $\\{2\\}$ and its only value is $g(f(2))=g(-1)=0$. The intermediate domain test is necessary even when every value in the first table exists.

</details>

### Exercise 1.2
<a id="composition-inverses-ex-2"></a>

Let $f(x)=x+4$ and $g(x)=3x$ on $\\mathbb R$. Find both compositions and explain why having the same domain does not make them the same function.

<details>
<summary>Hint 1</summary>

**Hint.** In one order, addition happens after multiplication; in the other, the added four is also multiplied.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Evaluate the two candidate formulas at zero to exhibit their different outputs.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $(f\\circ g)(x)=3x+4$ and $(g\\circ f)(x)=3(x+4)=3x+12$. Both have domain $\\mathbb R$, because every stage accepts all real inputs. At zero their outputs are four and twelve, so their assignments differ. Equality of domains is necessary for equality of functions with the same chosen codomain, but the values must also agree at every input.

</details>

### Exercise 1.3
<a id="composition-inverses-ex-3"></a>

Let $f(t)=\\sqrt{t+2}$ on $[-2,\\infty)$ and $g(x)=3-x$ on $\\mathbb R$. Find both compositions with their domains.

<details>
<summary>Hint 1</summary>

**Hint.** For $f\\circ g$, require the intermediate value $3-x$ to lie in $[-2,\\infty)$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** In the other order, the linear function accepts every square-root output, so only the first-stage square-root restriction remains.

</details>
<details>
<summary>Solution</summary>

**Solution.** Substitution gives $(f\\circ g)(x)=\\sqrt{5-x}$. The condition $3-x\\ge-2$ gives $x\\le5$, so its domain is $(-\\infty,5]$. The reverse is $(g\\circ f)(x)=3-\\sqrt{x+2}$ with domain $[-2,\\infty)$. The endpoint five is allowed in the first composition because the root is zero, and negative two is allowed in the second for the same reason.

</details>

### Exercise 1.4
<a id="composition-inverses-ex-4"></a>

Let $f(t)=1/t$ on $\\mathbb R\\setminus\\{0\\}$ and $g(x)=x^2-4$ on $\\mathbb R$. Find $f\\circ g$ and $g\\circ f$, including every excluded input.

<details>
<summary>Hint 1</summary>

**Hint.** The reciprocal stage must never receive zero, regardless of where it appears in the sequence.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the first order solve $x^2-4=0$ to identify exclusions; in the reverse order the restriction is imposed before squaring.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first composition is $1/(x^2-4)$, with $x=-2,2$ excluded. Its first stage accepts all real inputs, but those two give zero to the reciprocal. The reverse is $1/x^2-4$, with only $x=0$ excluded: the reciprocal requires a nonzero original input, and the polynomial then accepts its output. The two denominator restrictions concern different quantities and must not be interchanged.

</details>

### Exercise 1.5
<a id="composition-inverses-ex-5"></a>

Let $g(x)=x^2$ with the restricted domain $[-2,3]$, and let $f(t)=\\sqrt{t}$ on $[0,\\infty)$. Find both compositions with their exact domains. Does the simplified formula for either composition enlarge its domain?

<details>
<summary>Hint 1</summary>

**Hint.** All outputs of $g$ are nonnegative, but the outputs of $f$ must also respect the specified upper input bound of $g$ when the order is reversed.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** In $g\\circ f$, require $\\sqrt{x}\\in[-2,3]$. Remember that the principal square root is nonnegative.

</details>
<details>
<summary>Solution</summary>

**Solution.** The composition $f\\circ g$ is $|x|$ on $[-2,3]$. No further restriction is needed because every square is nonnegative. The reverse gives $(\\sqrt{x})^2=x$, but it requires $x\\ge0$ and $\\sqrt{x}\\le3$, hence domain $[0,9]$. Neither shorter formula enlarges its domain. The unrestricted absolute-value rule and the identity on all real numbers would be different functions from these specified compositions.

</details>

### Exercise 1.6
<a id="composition-inverses-ex-6"></a>

The function $p:\\{1,2,3\\}\\to\\{a,b,c,d\\}$ assigns $p(1)=a$, $p(2)=c$, and $p(3)=b$. Is it one-to-one? Is it onto its codomain? Explain how to choose a codomain giving an inverse, and list that inverse's values.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the number of inputs producing each displayed output and look for a codomain element never produced.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Choose the actual range as the destination set, then reverse each of the three assignments.

</details>
<details>
<summary>Solution</summary>

**Solution.** The outputs are distinct, so $p$ is one-to-one. It is not onto $\\{a,b,c,d\\}$ because $d$ has no preimage, so there is no inverse on that whole codomain. Choosing $\\{a,b,c\\}$ instead makes the assignment bijective. Its inverse has values $p^{-1}(a)=1$, $p^{-1}(c)=2$, and $p^{-1}(b)=3$. There is no inverse value at $d$, because $d$ is outside the new inverse domain.

</details>

### Exercise 1.7
<a id="composition-inverses-ex-7"></a>

Let $f:[1,5]\\to[-3,5]$ have rule $f(x)=7-2x$. Find its inverse, state the inverse domain and range, and verify both composition identities.

<details>
<summary>Hint 1</summary>

**Hint.** Solve $y=7-2x$ for $x$, noting that a decreasing rule reverses the order of the endpoint outputs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The original range becomes the inverse domain. Use the interval endpoints to confirm that the inverse outputs lie in $[1,5]$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Solving gives $f^{-1}(y)=(7-y)/2$ on $[-3,5]$, with range $[1,5]$. The original rule is one-to-one because equal outputs imply equal inputs, and this formula supplies a permitted original input for every $y\\in[-3,5]$, proving onto behaviour. We have $(7-(7-2x))/2=x$ for $x\\in[1,5]$ and $7-2((7-y)/2)=y$ for $y\\in[-3,5]$. The endpoint five maps back to one, while negative three maps back to five.

</details>

### Exercise 1.8
<a id="composition-inverses-ex-8"></a>

Restrict $q(x)=(x-1)^2+2$ to $(-\\infty,1]$ and choose its range as codomain. Find the inverse and explain the sign of the square-root term.

<details>
<summary>Hint 1</summary>

**Hint.** The squared term has minimum zero, attained at the included endpoint.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** From $(x-1)^2=y-2$, use the fact that $x-1\\le0$ on the chosen domain to select the correct root.

</details>
<details>
<summary>Solution</summary>

**Solution.** The range is $[2,\\infty)$: every $y\\ge2$ is obtained from $x=1-\\sqrt{y-2}\\le1$. The inverse is therefore $q^{-1}(y)=1-\\sqrt{y-2}$ from $[2,\\infty)$ to $(-\\infty,1]$. The negative root is required because $x-1$ is nonpositive. Indeed, $q^{-1}(q(x))=1-|x-1|=x$ on $x\\le1$, and $q(q^{-1}(y))=y$ on $y\\ge2$. Choosing the positive root would produce values outside the selected domain except at the endpoint.

</details>

### Exercise 1.9
<a id="composition-inverses-ex-9"></a>

For $f:\\mathbb R\\to\\mathbb R$, $f(x)=x^2+1$, find the reciprocal rule and the preimage of $\\{5\\}$. Explain why $f$ has no inverse on the specified sets. Then restrict its domain to $[0,\\infty)$, choose the range as codomain, and find that restricted function's inverse.

<details>
<summary>Hint 1</summary>

**Hint.** A reciprocal divides one by an output; a preimage solves a condition on outputs. Neither requires an inverse function.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The original quadratic repeats values at opposite inputs. After restriction, solve $y=x^2+1$ using the nonnegative input branch.

</details>
<details>
<summary>Solution</summary>

**Solution.** The reciprocal is $1/(x^2+1)$ on all real inputs because its denominator is positive. The equation $x^2+1=5$ gives the preimage $\\{-2,2\\}$. The original function is not one-to-one and is not onto its real codomain, so it has no inverse on those sets. The restricted function $[0,\\infty)\\to[1,\\infty)$ is bijective and has inverse $\\sqrt{y-1}$ on $y\\ge1$. This inverse, the reciprocal, and the two-element preimage answer three distinct questions.

</details>

### Exercise 1.10
<a id="composition-inverses-ex-10"></a>

Let $f(x)=x+3$ and $g(x)=2x$ on $\\mathbb R$. Find the inverse of $H=g\\circ f$ by reversing its stages. Compare it with the incorrectly ordered candidate $g^{-1}\\circ f^{-1}$, and verify the correct inverse.

<details>
<summary>Hint 1</summary>

**Hint.** $H$ adds three before doubling. Undo the last operation first.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The correct reverse order halves the supplied output before subtracting three. Test each candidate at the output corresponding to the original input zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $H(x)=2x+6$, its inverse is $f^{-1}(g^{-1}(y))=y/2-3$. The wrongly ordered candidate is $(y-3)/2$, which gives $3/2$ at $y=H(0)=6$ rather than returning zero. For the correct rule, $H^{-1}(H(x))=(2x+6)/2-3=x$ and $H(H^{-1}(y))=2(y/2-3)+6=y$. All functions here have real domain and range, so both identities hold for every real input of the appropriate stage.

</details>

## Sources

This chapter is original exposition with original worked examples and exercises. For primary-source parallel reading, see OpenStax, *Precalculus 2e*, [1.4, Composition of Functions](https://openstax.org/books/precalculus-2e/pages/1-4-composition-of-functions) and [1.7, Inverse Functions](https://openstax.org/books/precalculus-2e/pages/1-7-inverse-functions). They provide further discussion of the named topics; no exercise statements or solutions have been copied here.

The preserved Euler source \`modules/atlas/content/books/functions-equations-proof/functions-are-typed-assignments.md\` supplies a more formal treatment of domains, codomains, and bijectivity. Its proof-oriented presentation is separate from this chapter, which develops the necessary ideas directly at pre-university level. The present text uses British spelling and is licensed CC BY-SA 4.0.

## Summary

Composition passes an output into the next function, so its domain records the validity of every stage. Order usually matters, while regrouping a valid sequence does not change its result. Simplification retains the original input restrictions. An inverse on a chosen codomain exists exactly when each codomain value comes from one and only one allowed input. Restricted quadratics show why the domain and selected branch are part of the answer.

An inverse function reverses an assignment, a reciprocal divides one by a value, and a preimage collects all inputs meeting an output condition. In [Transformations of Graphs](graph-transformations.md), composition with simple linear rules will explain how a graph's points and domain move together. The same distinction between an input operation and an output operation will determine the direction and size of every shift and scaling.
`;export{e as default};