
# The Quantifier Bridge: Epsilon–Delta Limits Without Handwaving

**Before reading.** Read [Functions, Domains, and Graphs](../books/algebra-and-functions/functions-domain-graphs.md), [Inequalities and Regions](../books/algebra-from-stories/inequalities-and-regions.md) and [Equivalent Expressions](../books/algebra-from-stories/equivalent-expressions.md). These are preparation for the ideas used below.

The informal sentence “$f(x)$ gets close to $L$ when $x$ gets close to $a$” is useful intuition, but it leaves three questions unanswered. How close is close? Must the rule work at every nearby input? Who chooses the tolerances? The epsilon–delta definition answers all three and turns a moving-picture intuition into a checkable guarantee.

This lesson assumes comfort with functions, absolute value, and inequalities. Its goal is not to replace intuition. It teaches you to state exactly what the intuition promises.

## The neighborhood game

We write

$$\lim_{x\to a} f(x)=L$$

when the following statement is true:

> For every $\varepsilon>0$, there exists $\delta>0$ such that, for every input $x$, if $0<|x-a|<\delta$, then $|f(x)-L|<\varepsilon$.

The positive number $\varepsilon$ is an output tolerance. An examiner is allowed to request any vertical accuracy, however small. After seeing that request, we choose a positive input tolerance $\delta$. Our choice succeeds only if every punctured input in the horizontal window lands inside the requested vertical window.

The condition $0<|x-a|$ deliberately excludes $x=a$. A limit concerns nearby behavior; $f(a)$ may be different from $L$ or may not exist. The condition $|x-a|<\delta$ describes the open interval $(a-\delta,a+\delta)$, while $|f(x)-L|<\varepsilon$ describes $(L-\varepsilon,L+\varepsilon)$.

The order of the quantifiers is the heart of the definition:

$$\forall\varepsilon>0\;\exists\delta>0\;\forall x$$

The chosen $\delta$ may depend on $\varepsilon$ and on the fixed function and point. It may not depend on the later choice of $x$. Reversing the first two quantifiers would ask for one horizontal window that achieves every possible vertical accuracy, which ordinarily forces the function to be exactly constant there.

## Worked proof: a linear function

**Worked example.**

Prove $\lim_{x\to 4} (3x-2)=10$.

We begin by working backward from the requested conclusion:

$$|(3x-2)-10| = |3x-12| = 3|x-4|$$

To make this less than $\varepsilon$, it is enough to require $|x-4|<\varepsilon/3$. This exploration discovers the choice. The formal proof then runs forward:

Let $\varepsilon>0$ be arbitrary. Choose $\delta=\varepsilon/3$. If $0<|x-4|<\delta$, then

$$|(3x-2)-10| = 3|x-4| < 3\delta = \varepsilon$$

Therefore the limit is 10.

Notice the proof does not test a few values of $\varepsilon$. It gives a construction that works for every positive $\varepsilon$.

## Worked proof: controlling a variable factor

Prove $\lim_{x\to 2} x^{2}=4$.

Factoring gives

$$|x^{2}-4|=|x-2||x+2|$$

We control $|x-2|$ directly, but $|x+2|$ also varies. First impose the convenient restriction $\delta\le 1$. Then $|x-2|<1$ implies $1<x<3$, so $|x+2|<5$. Under that local bound,

$$|x^{2}-4|<5|x-2|$$

Now choose $\delta=\min(1, \varepsilon/5)$. If $0<|x-2|<\delta$, both controls hold and

$$|x^{2}-4|<5|x-2|<5\delta\le \varepsilon$$

The number 5 is not sacred. A sharper local estimate could produce a larger $\delta$; a limit proof needs a valid guarantee, not the largest possible window.

This “bound the harmless factor, spend the remaining tolerance on the small factor” pattern recurs throughout analysis.

## Holes, jumps, and why pictures are evidence rather than proof

Define

$g(x)=(x^{2}-1)/(x-1)$ for $x\ne 1$, and leave $g(1)$ undefined.

For all permitted nearby inputs, $g(x)=x+1$, so $\lim_{x\to 1}g(x)=2$. The hole at the center is irrelevant. If we instead define $g(1)=900$, the limit remains 2, though the resulting function is not continuous at 1.

Now define $h(x)=-1$ for $x<0$ and $h(x)=1$ for $x\ge 0$. It has no two-sided limit at 0. Suppose a candidate limit were $L$. Inputs approaching from the left produce $-1$, while inputs approaching from the right produce $1$. With $\varepsilon=1/2$, no single band centered at $L$ can eventually contain both values because their distance is 2. Choosing smaller $\delta$ never removes either side.

A graph can suggest these facts but cannot display arbitrarily small scales. A plotter may even connect a jump or hide a narrow spike. The definition is a scale-independent certificate.

## Continuity is a limit with the center restored

At an accumulation point $a$ of its domain, a function $f$ is continuous at $a$ when $\lim_{x\to a}f(x)=f(a)$. The direct definition, which also covers isolated domain points, is:

> For every $\varepsilon>0$, there exists $\delta>0$ such that $|x-a|<\delta$ implies $|f(x)-f(a)|<\varepsilon$.

Here excluding the center is unnecessary because at $x=a$ the output error is zero. Continuity says small enough input errors guarantee a requested output error. This is a robustness statement, not merely “the graph can be drawn without lifting a pencil.”

For a function $f:D\to\mathbb R$, continuity **at each point** of $D$ says

$$\forall a\in D\;\forall\varepsilon>0\;\exists\delta>0\;\forall x\in D:\quad |x-a|<\delta\Longrightarrow |f(x)-f(a)|<\varepsilon.$$

The choice of $\delta$ can depend on both $a$ and $\varepsilon$. **Uniform continuity** on $D$ moves the center after the choice:

$$\forall\varepsilon>0\;\exists\delta>0\;\forall a,x\in D:\quad |x-a|<\delta\Longrightarrow |f(x)-f(a)|<\varepsilon.$$

Here one $\delta$ must work for every pair of inputs in $D$. The change in order is small on the page and substantial in use: a device with one input-error tolerance can be operated anywhere in its specified range.

### The fixed-tolerance failure for $x^2$ on $\mathbb R$

To disprove uniform continuity we must exhibit one output tolerance that defeats *every* proposed $\delta$. Set $\varepsilon_0=1$. Given any $\delta>0$, let $h=\min(\delta/2,1)$ and choose $a=1/h$, $x=a+h$. Then $0<|x-a|=h<\delta$ (also when $\delta>2$), but

$$|x^2-a^2|=2ah+h^2=2+h^2\ge 2>\varepsilon_0.$$

The witnesses $a$ and $x$ are chosen *after* $\delta$; that is exactly the negation of the uniform statement. At every fixed $a$, the earlier local-factor proof still gives continuity. No contradiction arises because its $\delta$ is allowed to shrink as $|a|$ grows.

On $[-M,M]$, where $M\ge0$, the same function does have one rule for the whole interval. For $x,a\in[-M,M]$,

$$|x^2-a^2|=|x-a||x+a|\le2M|x-a|.$$

If $M>0$, choose $\delta=\varepsilon/(2M)$; if $M=0$, any positive $\delta$ works. More generally, the **compact-interval guarantee** says every continuous real function on a closed bounded interval is uniformly continuous. The proof uses compactness to turn local control into one finite collection of neighborhoods; the explicit estimate above shows what that common control looks like for this particular function. A bounded interval without its endpoints is not enough for every continuous function: $1/x$ on $(0,1)$ is a counterexample.

### Uniform convergence chooses a threshold, not an input window

For functions $f_n:D\to\mathbb R$, pointwise convergence to $f$ means

$$\forall x\in D\;\forall\varepsilon>0\;\exists N\;\forall n\ge N:\quad |f_n(x)-f(x)|<\varepsilon.$$

Uniform convergence means

$$\forall\varepsilon>0\;\exists N\;\forall n\ge N\;\forall x\in D:\quad |f_n(x)-f(x)|<\varepsilon.$$

The index $N$ is an integer and may depend on $\varepsilon$, but not on $x$. Uniform continuity instead chooses a *distance* $\delta$ to compare two inputs of one function. For example, $f_n(x)=x^n$ on $[0,1]$ tends pointwise to $f(x)=0$ for $x<1$ and $f(1)=1$. It does not converge uniformly: for each $n\ge1$, choose $x_n=2^{-1/n}<1$. Then $|f_n(x_n)-f(x_n)|=1/2$. The bad input may move with $n$, precisely because a uniform $N$ must cover all inputs. This example also shows why a pointwise limit of continuous functions need not be continuous.

## An accessible visual model

Imagine a coordinate plane with two translucent strips. A horizontal strip spans all points whose heights lie between $L-\varepsilon$ and $L+\varepsilon$. A vertical strip spans inputs between $a-\delta$ and $a+\delta$, with a thin line at $a$ removed. A successful $\delta$ means the graph segment inside the punctured vertical strip lies entirely inside the horizontal strip.

A nonvisual equivalent is a table with columns “requested output error,” “chosen input error,” and “verified worst-case bound.” For $3x-2$ at 4, the rows $(0.3,0.1,0.3)$ and $(0.0006,0.0002,0.0006)$ illustrate the rule $\delta=\varepsilon/3$, but the algebra certifies all rows at once.

## Common mistakes and repairs

- **Setting $x=a$:** substitution checks a point value, not nearby behavior. Repair it by estimating $|f(x)-L|$ from the assumption on $|x-a|$.
- **Choosing $\varepsilon$ yourself:** the proof must answer an arbitrary request. Begin with “Let $\varepsilon>0$.”
- **Letting $\delta$ depend on $x$:** then each troublesome input can receive a custom window, and no neighborhood is controlled. Give $\delta$ before considering an arbitrary $x$.
- **Writing $\delta=\varepsilon$ without checking:** sometimes it works, often it does not. Derive an inequality.
- **Treating evidence as a guarantee:** a sequence of decimal evaluations cannot cover every nearby real input.
- **Proving equality instead of tolerance:** the goal is $|f(x)-L|<\varepsilon$, not $f(x)=L$.

## Exercises with worked answers

### 1. A second linear proof

<a id="deep-dive-epsilon-delta-limits-ex-1"></a>

**Exercise 1.**

Prove $\lim_{x\to -1}(5-2x)=7$.


<details>
<summary>Hint 1</summary>

Rewrite the output error as a constant multiple of the input error.
</details>
<details>
<summary>Hint 2</summary>

The coefficient is two, so choose the input tolerance to spend only half the requested output tolerance.
</details>
<details>
<summary>Solution</summary>

Let $\varepsilon>0$ and choose $\delta=\varepsilon/2$. If $0<|x+1|<\delta$, then

$$|(5-2x)-7|=|-2x-2|=2|x+1|<2\delta=\varepsilon$$

</details>

### 2. A product that needs a local bound

<a id="deep-dive-epsilon-delta-limits-ex-2"></a>

**Exercise 2.**

Prove $\lim_{x\to 3}x^{2}=9$.


<details>
<summary>Hint 1</summary>

Factor the difference of squares into the small input difference and a varying second factor.
</details>
<details>
<summary>Hint 2</summary>

First restrict inputs to within one of three; this gives a fixed bound for the second factor.
</details>
<details>
<summary>Solution</summary>

If additionally $|x-3|<1$, then $2<x<4$ and $|x+3|<7$. Choose $\delta=\min(1,\varepsilon/7)$. The assumption gives

$$|x^{2}-9|=|x-3||x+3|<7|x-3|<7\delta\le \varepsilon$$

</details>

### 3. Disprove a proposed limit

Show that $\lim_{x\to 0} h(x)$ does not equal 1 for the jump function above.

**Answer.** To negate the limit statement, it is enough to find one $\varepsilon>0$ such that every $\delta>0$ admits a violating input. Take $\varepsilon=1$. For any $\delta>0$, choose $x=-\delta/2$. Then $0<|x|<\delta$, but $|h(x)-1|=|-1-1|=2$, not less than 1.

### 4. Read the quantifiers

What is wrong with: “For every $\varepsilon>0$, choose $\delta=|x-a|/2$”?

**Answer.** The proposed $\delta$ uses $x$, but $x$ is quantified only after $\delta$ has been chosen. It does not define one neighborhood that controls all nearby inputs.

### 5. Connect to sequences

If $\lim_{x\to a}f(x)=L$ and $x_{n}\to a$ with every $x_{n}\ne a$, explain why $f(x_{n})\to L$.

**Answer.** Given $\varepsilon$, take the $\delta$ supplied by the function limit. Since $x_{n}\to a$, eventually $|x_{n}-a|<\delta$; the terms are not equal to $a$, so eventually $0<|x_{n}-a|<\delta$, and therefore $|f(x_{n})-L|<\varepsilon$. The converse is also true over the real numbers and becomes the sequential criterion for limits.

## A proof with a denominator

The rule “make $|x-a|$ small” becomes more interesting when another factor can blow up. Prove $\lim_{x\to2}1/x=1/2$. For $x\ne0$,

$$\left|\frac1x-\frac12\right|=\frac{|x-2|}{2|x|}.$$

If we require $|x-2|<1$, then $1<x<3$, so $|x|>1$. The error is consequently less than $|x-2|/2$. Given an arbitrary $\varepsilon>0$, choose $\delta=\min(1,2\varepsilon)$. Every permitted $x$ with $0<|x-2|<\delta$ satisfies

$$\left|\frac1x-\frac12\right|<\frac{|x-2|}{2}<\frac{\delta}{2}\le\varepsilon.$$

The first restriction kept the denominator away from zero; the second spent the requested tolerance. Do not simply replace $|x|$ by 2 because $x$ is *near* 2, not necessarily equal to it. This local-bound step is the main new skill in many epsilon–delta proofs.

## How to prove a limit fails

The logical negation of “$f(x)$ approaches $L$ at $a$” is:

> There exists an $\varepsilon_0>0$ such that for every $\delta>0$ there is an allowed $x$ with $0<|x-a|<\delta$ and $|f(x)-L|\ge\varepsilon_0$.

Notice who moves first. To refute the claim, choose one vertical tolerance and show that no matter how narrow a horizontal window is proposed, a bad input remains. This is stronger than finding a single point where $f(x)\ne L$.

For $f(x)=\sin(1/x)$ on $x\ne0$, two families of points approach zero from the positive side:

$$x_n=\frac1{\pi/2+2\pi n},\qquad y_n=\frac1{3\pi/2+2\pi n}.$$

Yet $f(x_n)=1$ and $f(y_n)=-1$ for every $n$. If a limit $L$ existed, both constant output sequences would have to approach $L$, which is impossible. Oscillation persists at every scale. A plot with finitely many pixels may miss it; the two sequences do not.

The sequential argument uses a theorem: for $f:D\to\mathbb R$ at an accumulation point $a$ of $D$, $\lim_{x\to a}f(x)=L$ exactly when every sequence $x_n\in D\setminus\{a\}$ with $x_n\to a$ satisfies $f(x_n)\to L$. The puncture excludes the constant sequence at $a$, whose output may differ from the limit. One direction follows directly from epsilon–delta, as Exercise 5 showed. For the converse, if no $\delta$ works for some $\varepsilon_0$, choose a violating $x_n\in D$ with $0<|x_n-a|<1/n$; those inputs form a sequence contradicting the claimed sequential property.

## Domains and one-sided approach

A limit can only test inputs that belong to the function's domain. For $f(x)=\sqrt{x}$ at $a=0$, the meaningful approach in the real domain is from the right. The limit is zero because $|\sqrt{x}-0|<\varepsilon$ whenever $0\le x<\varepsilon^2$. A two-sided statement over all real $x$ would ask about negative inputs where $f$ is undefined.

Most treatments require $a$ to be an accumulation point of the domain: there must be allowed points arbitrarily close to $a$ other than $a$ itself. Otherwise the punctured-window condition could be vacuously true for *every* proposed limit. Naming this boundary prevents a definition from claiming information where there are no nearby observations.

## Practice: build or break the guarantee

1. Prove $\lim_{x\to-1}(x^2+2x)= -1$. Try factoring the output error before choosing $\delta$.
2. Show that $q(x)=1$ for rational $x$ and $q(x)=0$ for irrational $x$ has no limit at any real $a$.
3. A student chooses $\delta=\varepsilon/(2|x|)$ to prove a limit. What is wrong with the timing of this choice, and what sort of local bound could repair it?

**Solutions.** (1) $x^2+2x+1=(x+1)^2$. Given $\varepsilon>0$, choose $\delta=\sqrt{\varepsilon}$; then $0<|x+1|<\delta$ implies $|(x^2+2x)-(-1)|=|x+1|^2<\varepsilon$. (2) Every open interval around $a$ contains rational and irrational inputs. If a common limit $L$ existed, both the constant output 1 along rationals and 0 along irrationals would approach it, which is impossible. (3) $\delta$ must be chosen before the later arbitrary $x$; a formula involving $x$ is not one uniform window. Restrict $|x-a|<1$ first, bound $|x|\le|a|+1$ there, and choose a tolerance using that fixed bound.

## Practice ladder: which choice is allowed to depend on what?

### 1. Local control

Prove directly that $f(x)=x^2$ is continuous at a specified real number $a$. Give a $\delta$ in terms of $a$ and $\varepsilon$.

**Hint.** First force $|x-a|<1$, then bound $|x+a|$ by something independent of $x$.

**Reasoned solution.** Under $|x-a|<1$, $|x+a|\le|x-a|+2|a|<1+2|a|$. Choose $\delta=\min(1,\varepsilon/(1+2|a|))$. Then, whenever $|x-a|<\delta$ (including $x=a$),
$$
\begin{aligned}
|x^2-a^2|&\le(1+2|a|)|x-a|\\
&<(1+2|a|)\delta\le\varepsilon.
\end{aligned}
$$
Its dependence on $a$ is legal for continuity at $a$.

### 2. One rule for a bounded range

For $f(x)=x^2$ on $[-3,3]$, find a single $\delta$ that guarantees $|f(x)-f(a)|<0.06$ for every $a,x$ in the interval. Explain why the local rule from Problem 1 is not, by itself, a uniform-continuity proof.

**Hint.** Bound $|x+a|$ using both inputs' membership in the interval.

**Reasoned solution.** $|x+a|\le6$, so $\delta=0.01$ works: $|x-a|<0.01$ gives $|x^2-a^2|<6(0.01)=0.06$. Problem 1 supplies a possibly different $\delta$ for each center. It proves uniformity only after a bound on all those choices is established; the estimate here supplies that bound directly.

### 3. A moving witness

Let $g_n(x)=x/n$ on $\mathbb R$. Show that $g_n(x)\to0$ for each fixed $x$, but not uniformly on $\mathbb R$. Then decide whether each $g_n$ is uniformly continuous.

**Hint.** For the first failure, fix $\varepsilon_0=1$ and choose an input after $N$ is proposed. For the last claim, compare $g_n(x)$ and $g_n(a)$.

**Reasoned solution.** For fixed $x$ and $\varepsilon>0$, any integer $N>|x|/\varepsilon$ gives $|g_n(x)|<\varepsilon$ for $n\ge N$. For every proposed $N\ge1$, taking $n=N$ and $x=2N$ gives $|g_n(x)|=2\ge1$, so no uniform threshold works. Yet $|g_n(x)-g_n(a)|=|x-a|/n$; for each fixed $n\ge1$, $\delta=n\varepsilon$ works at every center. Uniform continuity of each function and uniform convergence of a sequence are different claims.

## Connections and next steps

The local proofs above explain how a tolerance is built; the global examples explain when a single choice must serve many inputs. In [Quantified sequence limits](../course-texts/atlas-sequences-series-convergence/quantified-sequence-limits.md), the role of a neighborhood width becomes a threshold index. [Uniform limits and safe interchanges](../course-texts/atlas-sequences-series-convergence/uniform-limits-and-safe-interchanges.md) then uses a shared threshold to justify continuity and integration statements. Return to the fixed-$\varepsilon$ counterexamples here whenever a proposed interchange silently lets its threshold depend on the point.
