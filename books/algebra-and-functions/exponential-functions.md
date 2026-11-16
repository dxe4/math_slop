
# Exponential Functions

## Equal steps and equal multipliers

Two savings jars begin with the same amount. One receives a fixed addition each month; the other has its contents multiplied by the same factor each month. The first follows a linear pattern. The second follows an exponential pattern. Both can increase, but the mechanism of increase is different: a constant addition describes an absolute change, while a constant multiplier describes a relative change.

For example, the sequence $100,110,120,130$ adds $10$ each step. The sequence $100,110,121,133.1$ multiplies by $1.1$ each step. Their first increases agree, yet their later increases do not. In the second sequence, each increase is ten per cent of the current amount. Exponential does not simply mean “large” or “fast”. A quantity can decrease exponentially, and a growing exponential can change very little over a short observation period.

This chapter explains positive-base exponential functions, their graphs, their use in discrete growth models, and equations and inequalities that can be solved by comparing powers of the same base. You need [linear equations and inequalities](linear-equations-inequalities-systems.md), [functions, domain and graphs](functions-domain-graphs.md), [quadratic equations](quadratic-equations.md), and [surds and indices](surds-indices.md). Logarithms are introduced in the [next chapter](logarithms.md); they will solve exponent questions whose answers cannot conveniently be expressed by matching bases.

## From rational powers to a real function

For positive $a$, the previous chapter defined $a^{m/n}$ using the positive $n$th root of $a$. Thus $9^{1/2}=3$ and $8^{2/3}=4$. This supplies powers at every rational input, including negative inputs through reciprocals. A graph on the whole real line also needs values such as $2^{\sqrt2}$. Repeated multiplication alone does not define these: $\sqrt2$ is not a whole number of factors, or even a rational fraction of a whole number.

The intended values fit continuously between the rational powers. Rational approximations $1.4$, $1.41$, $1.414$, and so on suggest successively closer approximations to $2^{\sqrt2}$. This is a useful picture, but proving that all suitable approximating sequences give the same value requires properties of the real numbers and limits. A picture or calculator display cannot supply that proof.

**Theorem 10.1 (Real exponential extension; assumed result).** For every $a>0$, the rational-power function has a unique continuous extension $x\mapsto a^x$ to all real $x$, taking positive values. For all real $x,y$ and positive $a,b$, it satisfies

$$
a^{x+y}=a^xa^y,\qquad a^0=1,\qquad a^{-x}=\frac1{a^x},
$$

$$
(a^x)^y=a^{xy},\qquad (ab)^x=a^xb^x.
$$

For $a>1$ this extension is strictly increasing, has range $(0,\infty)$, approaches zero as $x$ decreases without bound, and increases without bound as $x$ increases without bound. For $0<a<1$ it is strictly decreasing, has the same range, approaches zero as $x$ increases without bound, and increases without bound as $x$ decreases without bound. For $a=1$ it is the constant function $1^x=1$.

This theorem is used without proof at this level. Its existence and continuity assertions belong to real analysis. The rational exponent laws have already been proved algebraically; extending those laws by limits is an additional argument, dependent on the extension theorem. We will use the stated theorem openly, rather than treating a list of decimal approximations as its proof. No calculus is required for the algebra and applications that follow.

**Definition 10.2 (Exponential function).** For $a>0$, $a\ne1$, the function $f:\mathbb R\to(0,\infty)$ given by $f(x)=a^x$ is the exponential function with base $a$. We discuss the permitted but constant case $a=1$ separately, because it is neither growth nor decay and is not one-to-one.

A negative base cannot supply this real function on every real input. For instance, $(-2)^{1/2}$ has no real value. A zero base also fails: negative inputs would require division by zero, and our convention leaves $0^0$ undefined. These objections concern the whole domain, not whether a particular integer power can be calculated. The expression $(-2)^3$ is perfectly well defined without creating an exponential function on $\mathbb R$.

Notice the role of the variable. In $x^3$ the base varies and the exponent is fixed: it is a power function. In $3^x$ the base is fixed and the exponent varies: it is exponential. At $x=2$ the values are $8$ and $9$ respectively; the similar-looking notation does not make the functions interchangeable.

## What the graph records

The basic function passes through $(0,1)$ because $a^0=1$. Its value is always positive, including at negative inputs. A negative exponent gives a reciprocal, so $2^{-3}=1/8$, which is a positive number below one. The graph never reaches the horizontal axis, although it gets arbitrarily close to it in the direction specified in Theorem 10.1. The line $y=0$ is its horizontal asymptote.

For base $2$, some useful coordinates are

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| $2^x$ | $1/4$ | $1/2$ | $1$ | $2$ | $4$ |
| $(1/2)^x$ | $4$ | $2$ | $1$ | $1/2$ | $1/4$ |

The identity $(1/2)^x=2^{-x}$ says that these two graphs are reflections in the vertical axis. Reading the first row from left to right multiplies by $2$; reading the second multiplies by $1/2$. A table is useful for locating points, but the asserted behaviour between them comes from the theorem, not from joining finitely many dots.

**Proposition 10.3 (Equal steps give equal ratios).** Let $f(x)=Ca^x$ with $C>0$ and $a>0$. For every real $x$ and real step $h$,

$$
\frac{f(x+h)}{f(x)}=a^h.
$$

*Proof.* By the index law, $f(x+h)=Ca^{x+h}=Ca^xa^h=f(x)a^h$. Division is valid because $f(x)>0$. ∎

In particular, a step of one multiplies by $a$, and a step of two multiplies by $a^2$. If measurements are spaced two hours apart, their common ratio is a two-hour factor. Calling that ratio an hourly factor would change the model. The step size always belongs with the multiplier.

## Transformations, domains and ranges

**Proposition 10.4 (Transformed exponential).** Suppose $a>0$, $a\ne1$, $A,c,h,k$ are real, $A\ne0$ and $c\ne0$. Then

$$
f(x)=Aa^{c(x-h)}+k
$$

has domain $\mathbb R$. Its range is $(k,\infty)$ when $A>0$, and $(-\infty,k)$ when $A<0$. Its horizontal asymptote is $y=k$.

*Proof.* The inner expression $c(x-h)$ takes every real value because $c\ne0$. The exponential therefore takes every positive value by Theorem 10.1. Multiplication by positive $A$ preserves that positive range; multiplication by negative $A$ makes it all negative values. Adding $k$ gives the stated intervals. In the direction where $a^{c(x-h)}$ approaches zero, $Aa^{c(x-h)}+k$ approaches $k$. It never equals $k$, since neither $A$ nor the exponential factor is zero. ∎

The exceptions are instructive. If $A=0$, the formula is constantly $k$. If $c=0$, it is constantly $A+k$, since its exponential factor is $a^0=1$. If $a=1$, it is also constantly $A+k$. None of these constant functions has one of the open half-line ranges in the proposition.

**Example 10.5 (A shifted and reflected graph).** Describe $f(x)=3-2^{x-1}$. Begin with $2^x$, shift the graph one unit right, reflect it in the horizontal axis, and shift it three units up. The domain remains $\mathbb R$. Since $2^{x-1}>0$, the output is always less than $3$; since the exponential attains every positive value, the range is exactly $(-\infty,3)$.

The function is strictly decreasing because the increasing exponential is multiplied by $-1$. At $x=0$, the value is $3-1/2=5/2$, giving the vertical-axis intercept. As $x$ decreases without bound, the exponential approaches zero, so $f(x)$ approaches $3$ from below. To find the horizontal-axis intercept would require $2^{x-1}=3$. That is a well-posed exponent question with one real answer, but we leave its exact logarithmic expression to the next chapter. The lack of an integer answer does not mean there is no intercept.

A composition can change the domain even though an exponential itself accepts every real input. For example, $g(x)=2^{1/(x-4)}$ requires $x\ne4$ because its inner expression is undefined there. The statement “exponentials have domain $\mathbb R$” describes the basic function, not every formula containing an exponential. Similarly, $\sqrt{2^x-1}$ requires $2^x\ge1$, so its domain is $[0,\infty)$.

## Growth and decay as models

**Definition 10.6 (Discrete constant-multiplier model).** If an initial amount $Q_0>0$ is multiplied by the same factor $a>0$ at each step, define $Q_{n+1}=aQ_n$ for whole numbers $n\ge0$. Repeated substitution gives

$$
Q_n=Q_0a^n.
$$

This formula can also be proved by induction: it holds at $n=0$, and if it holds at $n$, then $Q_{n+1}=aQ_0a^n=Q_0a^{n+1}$. The mathematical induction principle is developed further in the chapter on [sequences and series](sequences-series-binomial-theorem.md).

For a fractional increase $r>0$ per step, use $a=1+r$. A seven per cent increase uses $r=0.07$ and factor $1.07$, not factor $7$ or $0.07$. A fractional decrease $d$ with $0<d<1$ uses $a=1-d$. A seven per cent decrease therefore uses $0.93$. A factor of $1$ means no change. A proposed decrease greater than one hundred per cent gives a negative factor and does not describe the positive-amount exponential model used here.

**Example 10.7 (A decay model with units).** A hypothetical filter lets through $80\%$ of the light reaching it. Identical layers act independently in the sense that each transmits the same fraction of the light incident on that layer. If the incoming intensity is $500$ intensity units, what passes through three layers?

Each layer multiplies the current intensity by $0.8$, so $I_n=500(0.8)^n$ intensity units for a whole number $n$ of layers. Thus $I_3=500(0.512)=256$ intensity units. The reduction is $244$ units, or $48.8\%$ of the original, rather than $60\%$. Subtracting $20\%$ of the original three times would describe a different process. The exponent counts layers, so the stated model does not assign a physical meaning to $n=1.5$ without an additional assumption about a partial layer.

The same warning applies to time. A rule giving one payment or one reproduction event per month determines values at whole months. The curve $Q(t)=Q_0a^t$ can interpolate those values if $t$ is measured in months, but the interpolation is an additional modelling choice. It does not follow from the monthly recurrence alone. A smooth graph may be convenient without matching what happens between events.

Units also explain expressions such as $2^{t/3}$ when $t$ is a numerical measurement in hours: $t/3$ counts three-hour periods. More explicitly, the exponent is elapsed time divided by three hours, a dimensionless ratio. If the time variable were measured in minutes, the same process would use $2^{t/180}$. A bare numerical growth parameter changes when the time unit changes.

**Example 10.8 (Discrete compound interest).** In a hypothetical account, £$1200$ earns a nominal annual rate of $6\%$, compounded quarterly, with no fees or transactions. Here “nominal annual” means that each quarter receives one quarter of $0.06$, namely $0.015$. The multiplier per quarter is $1.015$. After $n$ whole quarters,

$$
A_n=1200(1.015)^n\ \text{pounds}.
$$

After one year, four quarters have passed, so

$$
A_4=1200(1.015)^4=1273.63626075\ \text{pounds},
$$

or £$1273.64$ when rounded to pennies at the end. This calculation assumes exact accumulation until that final rounding; a contract that rounds every quarter would need its own rounding rule. The effective annual percentage increase is $100((1.015)^4-1)\%=6.1363550625\%$. It exceeds $6\%$ because later quarters also earn interest on earlier interest.

More generally, a nominal annual rate $r$ compounded $m$ times per year gives $A_n=P(1+r/m)^n$ after $n$ complete compounding periods. Writing the exponent as $mt$ is appropriate when $t$ years corresponds to a whole number of periods. Neither this formula nor a larger choice of $m$ automatically establishes continuous compounding. The special base $e$ and continuously varying growth models can be studied later with explicit assumptions; they are not needed for the discrete calculations here.

## Equations and inequalities

**Proposition 10.9 (Comparing exponents).** Let $a>0$, $a\ne1$, and let $u,v$ be real numbers. Then $a^u=a^v$ if and only if $u=v$. If $a>1$, then $a^u<a^v$ if and only if $u<v$. If $0<a<1$, then $a^u<a^v$ if and only if $u>v$.

*Proof.* Strict increase preserves comparisons and prevents equal outputs at distinct inputs. Strict decrease reverses comparisons and also prevents equal outputs at distinct inputs. These properties come from Theorem 10.1. Applying them in both directions gives the equivalences. ∎

**Example 10.10 (Putting both sides over one base).** Solve $2^{x+1}=8^{x-1}$. Since $8=2^3$ and the base is positive, the real index laws give $8^{x-1}=2^{3x-3}$. Injectivity of base $2$ then gives $x+1=3x-3$, so $x=2$. Substitution verifies $2^3=8^1=8$. Matching exponents was valid only after the bases matched. An equation such as $2^x=3^{x+1}$ cannot be treated by simply equating $x$ and $x+1$.

**Example 10.11 (A decreasing base reverses order).** Solve $(1/3)^{2x-1}\ge(1/3)^{x+2}$. Because the base lies between zero and one, larger exponents give smaller outputs. Therefore the inequality is equivalent to $2x-1\le x+2$, giving $x\le3$. At $x=3$ the exponents agree. At $x=0$, the original comparison is $3\ge1/9$, confirming the expected side of the answer. The reversal here comes from a decreasing function, just as a negative multiplier reverses a linear inequality.

Some equations combine exponentials with polynomial algebra. Substituting $u=2^x$ into $2^{2x}-5\cdot2^x+4=0$ gives $u^2-5u+4=0$. Its roots are $1$ and $4$, both positive, so $2^x=1$ or $2^x=4$ gives $x=0$ or $x=2$. In another problem a nonpositive polynomial root would have to be rejected: $2^x$ can never be zero or negative. Substitution carries a range restriction as well as an algebraic equation.

## Common misconceptions

An exponential law combines multiplication of equal bases, not addition: $2^x+2^x=2\cdot2^x=2^{x+1}$, whereas $2^x2^x=2^{2x}$. These formulas happen to agree at $x=1$, which is why checking one convenient value is not a proof of an identity.

A positive-base exponential has no zero, but a translated exponential can have one. For example, $2^x-4=0$ at $x=2$. A horizontal asymptote describes behaviour far along the graph; it does not mean that every exponential-containing expression must be positive.

Finally, applying a percentage increase and then the same percentage decrease does not restore the original amount. The factors multiply: $1.1\cdot0.9=0.99$. The decrease is calculated from a different starting amount. Always identify the amount to which a percentage applies, the length of its period, and whether a continuous interpolation is actually part of the model.

## Exercises

### Exercise 10.1
<a id="exponential-functions-ex-1"></a>

For $f(x)=4^x$, find $f(-1)$, $f(0)$ and $f(1/2)$. State its domain, range and direction of change. Explain how the base-$1$ case differs.

<details>
<summary>Hint 1</summary>

Use a reciprocal, the zero-index rule, and a principal square root for the three evaluations.

</details>
<details>
<summary>Hint 2</summary>

A base greater than one gives strict increase. For base one, every power is the same.

</details>
<details>
<summary>Solution</summary>

The values are $1/4$, $1$ and $2$. The domain is $\mathbb R$ and the range is $(0,\infty)$; $f$ is strictly increasing by Theorem 10.1. With base $1$, the domain is still all real numbers, but the range is the singleton $\{1\}$. The constant function is neither strictly increasing nor strictly decreasing, and equality of its outputs provides no information about its inputs.

</details>

### Exercise 10.2
<a id="exponential-functions-ex-2"></a>

A positive sequence has values $40$, $50$, $62.5$ at three successive whole-number steps starting at $n=0$. Assuming a constant multiplier, find its formula and the value at $n=4$.

<details>
<summary>Hint 1</summary>

Divide each amount by the preceding amount. Compare the two ratios.

</details>
<details>
<summary>Hint 2</summary>

Use the initial value at step zero as the coefficient, and raise the ratio to the step number.

</details>
<details>
<summary>Solution</summary>

The ratios are $50/40=1.25$ and $62.5/50=1.25$. Under the stated assumption, $Q_n=40(1.25)^n$ for whole numbers $n\ge0$. Hence $Q_4=40(1.25)^4=97.65625$. Agreement of the two observed ratios supports the proposed pattern but does not prove that all future steps in a real process obey it. The formula follows from the constant-multiplier assumption supplied in the question.

</details>

### Exercise 10.3
<a id="exponential-functions-ex-3"></a>

Describe the domain, range, horizontal asymptote and direction of change of $g(x)=5+3(1/2)^{x+2}$. Find its vertical-axis intercept.

<details>
<summary>Hint 1</summary>

The positive exponential factor ranges over all positive numbers as $x$ ranges over $\mathbb R$.

</details>
<details>
<summary>Hint 2</summary>

A positive vertical multiplier preserves decreasing behaviour. Substitute $x=0$ for the intercept.

</details>
<details>
<summary>Solution</summary>

The domain is $\mathbb R$. Multiplication by $3$ keeps the exponential part positive and allows every positive value, so adding $5$ gives range $(5,\infty)$. The asymptote is $y=5$, approached from above as $x$ increases without bound. Since $1/2<1$, the function is strictly decreasing. Finally, $g(0)=5+3(1/2)^2=5+3/4=23/4$, so the intercept is $(0,23/4)$.

</details>

### Exercise 10.4
<a id="exponential-functions-ex-4"></a>

Solve $3^{2x-1}=27^{x+2}$ and check your answer in the original equation.

<details>
<summary>Hint 1</summary>

Rewrite $27$ as a power of $3$ before comparing exponents.

</details>
<details>
<summary>Hint 2</summary>

The exponent on the right becomes $3(x+2)$, including the multiplication of the constant term.

</details>
<details>
<summary>Solution</summary>

Because $27=3^3$, the equation is $3^{2x-1}=3^{3x+6}$. Base $3$ is strictly increasing and therefore one-to-one, so $2x-1=3x+6$. This gives $x=-7$. The original left side is $3^{-15}$ and the right side is $27^{-5}=(3^3)^{-5}=3^{-15}$. Thus the value satisfies the original equation, and injectivity shows there can be no other solution.

</details>

### Exercise 10.5
<a id="exponential-functions-ex-5"></a>

Solve $(1/2)^{3x+1}<(1/2)^{x-5}$. Explain the direction of the resulting linear inequality.

<details>
<summary>Hint 1</summary>

Decide whether increasing the exponent increases or decreases a power with base $1/2$.

</details>
<details>
<summary>Hint 2</summary>

The smaller output must come from the larger exponent.

</details>
<details>
<summary>Solution</summary>

The base-$1/2$ function is strictly decreasing, so the comparison is equivalent to $3x+1>x-5$. Subtracting $x+1$ gives $2x>-6$, hence $x>-3$. At $x=-3$ the exponents are both $-8$, so equality holds and the endpoint is excluded. The direction reverses when comparing exponents because of monotonic decrease; the later division by positive $2$ causes no further reversal.

</details>

### Exercise 10.6
<a id="exponential-functions-ex-6"></a>

A machine's modelled value starts at £$8000$ and decreases by $12\%$ at the end of each complete year. Find the value after three years. Does the rule alone specify the value after eighteen months?

<details>
<summary>Hint 1</summary>

A decrease of $12\%$ leaves $88\%$ of the current value after each step.

</details>
<details>
<summary>Hint 2</summary>

Use three whole-year multiplications. Distinguish the discrete update rule from an interpolation between updates.

</details>
<details>
<summary>Solution</summary>

The year-end model is $V_n=8000(0.88)^n$ pounds for whole years $n\ge0$. Thus $V_3=8000(0.681472)=£5451.776$, or £$5451.78$ to pennies. The rule alone gives no value between the specified updates. One could adopt a stepwise model or the continuous interpolation $8000(0.88)^t$, among other possibilities. Each needs an additional statement about what the value means between year ends; the integer data do not select one automatically.

</details>

### Exercise 10.7
<a id="exponential-functions-ex-7"></a>

A hypothetical deposit of £$2000$ earns a nominal annual rate of $8\%$ compounded half-yearly, with no fees, transactions or intermediate rounding. Find the amount after eighteen months and the effective increase over one year.

<details>
<summary>Hint 1</summary>

There are two compounding periods per year. Divide the nominal annual rate between them.

</details>
<details>
<summary>Hint 2</summary>

Eighteen months contains three complete half-year periods, while one year contains two.

</details>
<details>
<summary>Solution</summary>

The half-year rate is $0.08/2=0.04$, so the multiplier is $1.04$. After eighteen months the amount is $2000(1.04)^3=2000(1.124864)=£2249.728$, rounding finally to £$2249.73$. Over one year the multiplier is $(1.04)^2=1.0816$, so the effective annual increase is $8.16\%$. The exponent counts completed half-years, not months, and the effective increase includes interest earned on the first period's interest.

</details>

### Exercise 10.8
<a id="exponential-functions-ex-8"></a>

Solve $2^{2x}-3\cdot2^x-4=0$ over the real numbers.

<details>
<summary>Hint 1</summary>

Let $u=2^x$ and state the restriction this puts on $u$.

</details>
<details>
<summary>Hint 2</summary>

Use $2^{2x}=(2^x)^2$, then factor the resulting quadratic.

</details>
<details>
<summary>Solution</summary>

Set $u=2^x>0$. The equation becomes $u^2-3u-4=(u-4)(u+1)=0$, whose algebraic roots are $4$ and $-1$. The latter is impossible because a positive-base exponential is positive. The remaining equation $2^x=4=2^2$ gives $x=2$. Substitution into the original gives $16-12-4=0$, so the sole solution is confirmed. The positivity restriction is essential to the substitution.

</details>

### Exercise 10.9
<a id="exponential-functions-ex-9"></a>

Find the real domain of $h(x)=\sqrt{9-3^x}$. Then find all $x$ in that domain for which $h(x)=0$.

<details>
<summary>Hint 1</summary>

The exponential accepts every real input, but the outer square root imposes another condition.

</details>
<details>
<summary>Hint 2</summary>

Compare $3^x$ with $9=3^2$ using the increasing base-$3$ function.

</details>
<details>
<summary>Solution</summary>

The radicand must satisfy $9-3^x\ge0$, equivalently $3^x\le3^2$. Strict increase gives $x\le2$, so the domain is $(-\infty,2]$. The square root is zero exactly when its radicand is zero, giving $3^x=9$ and hence $x=2$. This lies in the domain and produces $\sqrt0=0$. The example shows why a composition need not inherit the full domain of the exponential alone.

</details>

### Exercise 10.10
<a id="exponential-functions-ex-10"></a>

An idealised positive quantity doubles every three hours. Its model is $Q(t)=Q_0 2^{t/3}$, where $Q_0>0$ and $t$ is measured in hours; continuous interpolation is explicitly assumed. Find its multiplier over six hours, rewrite the model using a time variable $s$ measured in minutes, and explain why the initial amount does not affect the doubling time.

<details>
<summary>Hint 1</summary>

Compare $Q(t+6)$ with $Q(t)$ using the addition law for exponents.

</details>
<details>
<summary>Hint 2</summary>

There are $180$ minutes in three hours. In a ratio of two amounts, the common factor $Q_0$ cancels.

</details>
<details>
<summary>Solution</summary>

The six-hour multiplier is $Q(t+6)/Q(t)=2^{6/3}=4$, independent of $t$. In minutes, the model is $Q(s)=Q_0 2^{s/180}$, with the argument now understood in minutes. To double from any starting time, the required duration $T$ in hours solves $Q(t+T)/Q(t)=2^{T/3}=2$. Injectivity gives $T/3=1$, so $T=3$ hours. The initial amount cancels because the model prescribes a relative change. The question explicitly assumed continuous interpolation; a discrete three-hour update rule alone would not supply every intermediate value.

</details>

## Summary

Positive-base rational powers extend to continuous real exponential functions by a real-analysis theorem assumed in this chapter. A base above one gives growth; a base between zero and one gives decay; base one gives a constant function. The basic domain is all real numbers and the nonconstant basic range is $(0,\infty)$. Transformations alter the range and asymptote, and compositions can restrict the domain.

Equal input steps produce equal ratios. This supports discrete percentage-change and compound-interest models when the multiplier, time unit and update rule are stated. Continuous interpolation is a further assumption. Equations with a common positive base different from one reduce to exponent equations; inequalities also require the base's direction of change. The [logarithms chapter](logarithms.md) develops the inverse operation that answers general exponent questions.

## Sources

This chapter develops the exponential material in Euler's [Exponential and Logarithmic Functions](../functions-equations-proof/exponential-and-logarithmic-functions.md) and the powers and percentage-change sections of `modules/textbooks/shared_foundations/00f-exp-log-trig.qmd`. Those sources remain available with their logarithmic arguments, domain examples, trigonometric material and references; this chapter does not replace their additional content. The same-base worked equation and Exercise 10.4 retain the seed's equations with full verification. The real-extension result is explicitly assumed here so that the required preparation remains pre-university.

For complementary explanations, see OpenStax, *Algebra and Trigonometry 2e*, [§6.1, Exponential Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-1-exponential-functions) and [§6.2, Graphs of Exponential Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-2-graphs-of-exponential-functions), consulted 13 November 2026. The surrounding exposition and additional examples and exercises are newly written.
