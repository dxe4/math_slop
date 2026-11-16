
# Functions are typed assignments

## Why typing matters

In elementary algebra we often write $f(x)=x^{2}$ and treat the formula as the function. But a function is more than a formula: it is a triple consisting of a **domain** $A$, a **codomain** $B$, and a rule that assigns to each element $a\in A$ exactly one element $f(a)\in B$. We write this as

$$f:A\to B.$$

The set of actual outputs,

$$f(A)=\{f(a):a\in A\},$$

is called the **image** or **range** of $f$. The image may be strictly smaller than the codomain, and that distinction is not a mere technicality: it affects whether inverses exist, whether equations have solutions, and whether algebraic simplifications are legitimate.

This chapter introduces the typed view of functions, proves the basic facts about injectivity, surjectivity, and bijectivity, and shows how domain and codomain obligations propagate through composition and inversion. Everything here is preparation for the chapters that follow, where we will apply the same discipline to exponentials, trigonometric functions, polynomials, and eventually to functional equations and dynamical systems.

## Definitions

**Definition 1.1 (Function).** A function $f:A\to B$ consists of sets $A$ and $B$ together with an assignment rule such that for every $a\in A$ there exists exactly one $b\in B$, denoted $f(a)$, assigned to $a$.

**Definition 1.2 (Image).** The image of $f:A\to B$ is the set $f(A)=\{f(a):a\in A\}\subseteq B$.

**Definition 1.3 (Injective).** A function $f:A\to B$ is **injective** (or **one-to-one**) if for all $x_{1},x_{2}\in A$,

$$f(x_{1})=f(x_{2})\;\Longrightarrow\;x_{1}=x_{2}.$$

Equivalently, distinct inputs always produce distinct outputs.

**Definition 1.4 (Surjective).** A function $f:A\to B$ is **surjective** (or **onto** $B$) if for every $b\in B$ there exists at least one $a\in A$ with $f(a)=b$. Equivalently, $f(A)=B$.

**Definition 1.5 (Bijective).** A function is **bijective** if it is both injective and surjective.

## The same formula, different functions

Consider the two functions

- $f:\mathbb{R}\to\mathbb{R}$, defined by $f(x)=x^{2}$;
- $g:[0,\infty)\to[0,\infty)$, defined by $g(x)=x^{2}$.

Both use the same squaring formula, but they are different functions because their domains and codomains differ.

**Analysis of $f$.** Since the distinct inputs $1$ and $-1$ have the same output, $f(-1)=f(1)=1$, those inputs collide under $f$; therefore $f$ is **not injective**. Since $-1\in\mathbb{R}$ is in the codomain but no real $x$ satisfies $x^{2}=-1$, the function $f$ is **not surjective** onto $\mathbb{R}$.

**Analysis of $g$.** If $g(x_{1})=g(x_{2})$ with $x_{1},x_{2}\ge 0$, then $x_{1}^{2}=x_{2}^{2}$. Because both numbers are nonnegative, taking nonnegative square roots gives $x_{1}=x_{2}$; hence $g$ **is injective**. For any $y\ge 0$, the number $x=\sqrt{y}$ satisfies $g(x)=y$, so $g$ **is surjective** onto $[0,\infty)$. Therefore $g$ is bijective.

This example shows that algebraic formulas alone do not determine injectivity or surjectivity; the types matter.

## The inverse theorem

A function $g:B\to A$ is a **two-sided inverse** of $f:A\to B$ if

$$g\circ f=\operatorname{id}_{A}\quad\text{and}\quad f\circ g=\operatorname{id}_{B},$$

where $\operatorname{id}_{A}(a)=a$ for all $a\in A$ and similarly for $\operatorname{id}_{B}$.

**Theorem 1.6 (Existence of a two-sided inverse).** A function $f:A\to B$ has a two-sided inverse $g:B\to A$ if and only if $f$ is bijective.

**Proof.** ($\Rightarrow$) Suppose such a $g$ exists. To prove $f$ is injective, assume $f(x_{1})=f(x_{2})$. Applying $g$ to both sides gives $g(f(x_{1}))=g(f(x_{2}))$. Since $g\circ f=\operatorname{id}_{A}$, this simplifies to $x_{1}=x_{2}$. Thus $f$ is injective. To prove $f$ is surjective, let $b\in B$ be arbitrary. Set $a=g(b)\in A$. Then $f(a)=f(g(b))=b$ because $f\circ g=\operatorname{id}_{B}$. Hence every $b\in B$ is hit, so $f$ is surjective.

($\Leftarrow$) Suppose $f$ is bijective. For each $b\in B$, surjectivity guarantees at least one $a\in A$ with $f(a)=b$, and injectivity guarantees that this $a$ is unique. Define $g(b)$ to be this unique $a$. Then $g(f(a))=a$ for every $a\in A$ and $f(g(b))=b$ for every $b\in B$, so $g$ is a two-sided inverse. ∎

## One-sided inverses

Even when a two-sided inverse does not exist, one-sided inverses can reveal partial structure.

- If $g\circ f=\operatorname{id}_{A}$ for some $g:B\to A$, then $f$ must be injective. (The proof is the same as the injectivity argument above.)
- If $f\circ g=\operatorname{id}_{B}$ for some $g:B\to A$, then $f$ must be surjective. (The proof is the same as the surjectivity argument above.)

For a function $f:A\to B$, injectivity guarantees a left inverse when $A$ is nonempty: choose $a_{0}\in A$, send each value in the image of $f$ back to its unique preimage, and send every other element of $B$ to $a_{0}$. The nonempty hypothesis matters. If $A=\varnothing$ and $B\ne\varnothing$, the empty function $A\to B$ is injective, but no function $B\to A$ exists.

Surjectivity guarantees a right inverse precisely when one can choose an element from every fiber $f^{-1}(b)$, $b\in B$. This choice is automatic for finite $B$, and the axiom of choice guarantees it for arbitrary sets. In set theory without the axiom of choice, the assertion that every surjection has a right inverse is itself equivalent to the axiom of choice. If $B=\varnothing$, the existence of $f:A\to B$ forces $A=\varnothing$, and the empty function is a right inverse. Thus an injective non-surjective function with nonempty domain has a left inverse but no right inverse; a surjective noninjective function has no left inverse and has a right inverse when its fibers admit a choice function.

**Example.** Define $f:\mathbb{R}\to\mathbb{R}$ by $f(x)=e^{x}$. This is injective (strictly monotone) but not surjective onto $\mathbb{R}$ because the output is always positive. Define $g:\mathbb{R}\to\mathbb{R}$ by $g(y)=\ln y$ for $y>0$ and $g(y)=0$ for $y\leq 0$. Then $g(f(x))=\ln(e^{x})=x$ for every $x\in\mathbb{R}$, so $g$ is a left inverse of $f$. The equality $f(g(y))=y$ holds for $y>0$ but fails, for example, at $y=0$, so $g$ is not a right inverse.

## Common errors and how to avoid them

**Error: Confusing formula with function.** Students often say "the function $x^{2}$ is not injective" without specifying domain and codomain. The correct statement is that $f:\mathbb{R}\to\mathbb{R}$ given by $f(x)=x^{2}$ is not injective, while $g:[0,\infty)\to[0,\infty)$ given by $g(x)=x^{2}$ is injective.

**Error: Assuming surjectivity onto an unspecified codomain.** A function is surjective only relative to a stated codomain. $f(x)=x^{2}$ with domain $\mathbb{R}$ and codomain $[0,\infty)$ is surjective; with codomain $\mathbb{R}$ it is not.

**Error: Believing invertibility requires a formula.** The inverse theorem guarantees existence abstractly. Finding a closed formula for $g$ is a separate, often harder, problem. In many contexts---especially with transcendental functions and differential equations---we work with the inverse as a well-defined object even when no elementary formula is available.

## Practice exercises

### Exercise 1
Prove that if $g:B\to A$ satisfies $g\circ f=\operatorname{id}_{A}$, then $f$ is injective and $g$ is surjective.

**Solution.** Suppose $f(x_{1})=f(x_{2})$. Applying $g$ gives $g(f(x_{1}))=g(f(x_{2}))$, so $x_{1}=x_{2}$. Thus $f$ is injective. For any $a\in A$, we have $a=g(f(a))$, so $a$ lies in the image of $g$; therefore $g$ is surjective onto $A$. ∎

### Exercise 2
Let $f:\mathbb{Z}\to\mathbb{Z}$ be defined by $f(n)=2n$. Determine whether $f$ is injective, surjective, or bijective. Justify each claim.

**Solution.** If $f(n_{1})=f(n_{2})$, then $2n_{1}=2n_{2}$, so $n_{1}=n_{2}$; hence $f$ is injective. However, $1\in\mathbb{Z}$ is not of the form $2n$ for any integer $n$, so $f$ is not surjective. Consequently $f$ is not bijective. ∎

### Exercise 3
Define $h:(0,\infty)\to(0,\infty)$ by $h(x)=1/x$. Prove that $h$ is bijective and find its two-sided inverse.

**Solution.** If $h(x_{1})=h(x_{2})$, then $1/x_{1}=1/x_{2}$, so $x_{1}=x_{2}$; thus $h$ is injective. For any $y\in(0,\infty)$, the number $x=1/y$ satisfies $h(x)=y$, so $h$ is surjective. The inverse is $h^{-1}(y)=1/y$, which is the same formula because $h$ is self-inverse: $h(h(x))=x$ for all $x>0$. ∎

### Exercise 4
Construct a function $f:\{1,2,3\}\to\{a,b,c,d\}$ that is injective but not surjective. Explain why no function from this domain to this codomain can be surjective, and hence why a bijection between the two sets is impossible.

**Solution.** An injective non-surjective example is $f(1)=a$, $f(2)=b$, $f(3)=c$; the element $d$ is never hit. Any function from a three-element domain has at most three distinct outputs, so it cannot hit all four elements of the codomain. Thus no such function is surjective, and in particular none is bijective. ∎

### Exercise 5
Suppose $f:A\to B$ and $g:B\to C$ are both bijective. Prove that $g\circ f:A\to C$ is bijective, and express $(g\circ f)^{-1}$ in terms of $f^{-1}$ and $g^{-1}$.

**Solution.** Injectivity of $g\circ f$: if $(g\circ f)(x_{1})=(g\circ f)(x_{2})$, then $g(f(x_{1}))=g(f(x_{2}))$. Since $g$ is injective, $f(x_{1})=f(x_{2})$; since $f$ is injective, $x_{1}=x_{2}$. Surjectivity: let $c\in C$. Since $g$ is surjective, there exists $b\in B$ with $g(b)=c$. Since $f$ is surjective, there exists $a\in A$ with $f(a)=b$. Then $(g\circ f)(a)=c$. Hence $g\circ f$ is bijective.

For the inverse, we claim $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$. Indeed,

$$(f^{-1}\circ g^{-1})\circ(g\circ f)=f^{-1}\circ(g^{-1}\circ g)\circ f=f^{-1}\circ\operatorname{id}_{B}\circ f=f^{-1}\circ f=\operatorname{id}_{A},$$

and similarly in the opposite order. ∎

## Looking forward and back

This chapter established the typed view of functions and the fundamental link between bijectivity and invertibility. In the next chapter, **Exponential and Logarithmic Functions**, we apply these ideas to functions whose domains and ranges are constrained by positivity conditions, and we study how domain restrictions make transcendental functions invertible. Later chapters on **Complex Functions** and **Dynamical Systems** will revisit the inverse theorem in richer settings where the domain and codomain are no longer subsets of the real line.
