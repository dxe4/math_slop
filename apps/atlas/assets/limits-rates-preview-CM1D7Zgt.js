var e=`---
parent_id: book-precalculus
chapter_id: limits-rates-preview
title: "Limits and Rates of Change: A First Look"
level: secondary
license: CC BY-SA 4.0
---

# Limits and Rates of Change: A First Look

## What happens near a point?

An average rate of change compares two different inputs. A car's average velocity over a ten-second interval uses its displacement during those ten seconds. What might a velocity at a single instant mean? Dividing a displacement of zero by a time interval of zero cannot answer the question. Instead, we can compare positions at distinct nearby times and ask whether those average velocities approach a definite number as the interval becomes shorter.

That question leads to limits. A limit describes nearby behaviour, which can differ from the value of a formula at the target input. In this chapter we build an informal but careful first understanding. Algebra will justify the simple limits we calculate. Tables can illustrate an argument but will not be used to prove that every sufficiently nearby input behaves as claimed. The full definitions, general limit laws, and wider theory belong to calculus.

Required preparation is function domains, factorisation, inequalities, and the quadratic algebra developed in [Algebra and Functions](/atlas/#/item/book-algebra-and-functions). [Parametric and Polar Curves](parametric-polar-curves.md) explains why a position may depend on a parameter such as time. We work with real functions and distinguish exact formulas from measured data. A physical interpretation always includes the model's domain and units.

## A limit is separate from a function value

**Definition 12.1 (Informal finite limit).** We write

$$
\\lim_{x\\to a}f(x)=L
$$

when the values of $f(x)$ approach the single real number $L$ as the input approaches $a$ through allowed nearby inputs other than $a$. The intended meaning is that the output can be kept as close to $L$ as desired by requiring all such inputs to be sufficiently close to $a$. This concerns a whole neighbourhood of allowed inputs, not just one selected sequence of sample points.

The input $a$ need not belong to the domain. If it does, changing only $f(a)$ does not change this nearby behaviour. For now we use two-sided notation at interior points where the domain has inputs on both sides of $a$. At endpoints we will explicitly use a right-hand or left-hand limit. Calculus will make these domain conventions precise and introduce the formal epsilon–delta definition; that formalism is not assumed here.

The arrow in $x\\to a$ does not mean “substitute $a$ into every expression.” It asks about nearby inputs. Substitution is often justified for familiar polynomial expressions, but it can be meaningless for an original rational expression whose denominator is zero at $a$. Simplifying at other inputs can still reveal its limit.

**Example 12.2 (A hole in a formula).** Investigate

$$
f(x)=\\frac{x^2-9}{x-3},\\qquad x\\ne3,
$$

near $x=3$.

Factorisation gives $x^2-9=(x-3)(x+3)$. For every $x\\ne3$, cancellation by the nonzero factor gives $f(x)=x+3$. Consequently

$$
f(x)-6=x-3\\qquad(x\\ne3).
$$

The output's distance from $6$ equals the input's distance from $3$. Requiring the latter to be below any chosen positive tolerance guarantees the same for the former. This algebraic comparison justifies $\\lim_{x\\to3}f(x)=6$ for all sufficiently nearby domain inputs. It does not assign a value to the original formula at $3$, where its denominator remains zero.

We could define a new function $g$ by setting $g(x)=f(x)$ for $x\\ne3$ and $g(3)=6$. That fills the hole. Alternatively, assigning $g(3)=20$ would leave the same limit $6$ while making the point value different. The limit belongs to nearby behaviour, so a single reassigned point does not control it.

A removable hole is a missing or mismatched point that can be repaired by assigning the limiting value. This term distinguishes the situation from a jump: at a jump, the two sides demand different values and no single assignment can satisfy both.

## One-sided approaches and domain endpoints

**Definition 12.3 (One-sided limits).** A right-hand limit, written $\\lim_{x\\to a^+}f(x)=L$, considers allowed inputs greater than $a$. A left-hand limit, written $\\lim_{x\\to a^-}f(x)=L$, considers allowed inputs less than $a$.

At an interior point, a finite two-sided limit exists exactly when both one-sided limits exist and have the same value. The necessity is immediate from the nearby-behaviour description: if all nearby values approach one number, the values on either side do so. Conversely, if both sides approach the same number, a sufficiently small interval satisfying both side conditions controls every nearby input other than the centre.

**Example 12.4 (A jump cannot be repaired at one point).** Let

$$
p(x)=
\\begin{cases}
2x+1,&x<1,\\\\
x+4,&x\\ge1.
\\end{cases}
$$

For $x<1$, the difference from $3$ is $p(x)-3=2(x-1)$, so values from the left approach $3$. For $x>1$, the difference from $5$ is $p(x)-5=x-1$, so values from the right approach $5$. Thus

$$
\\lim_{x\\to1^-}p(x)=3,
\\qquad \\lim_{x\\to1^+}p(x)=5.
$$

The function value is $p(1)=5$ because the second branch includes equality. The two-sided limit does not exist, since the one-sided answers disagree. Replacing $p(1)$ by $3$, $4$, or any other number cannot alter the formulas on either side, so it cannot remove the jump. The issue is the nearby values, rather than which branch owns the endpoint.

At a domain endpoint, a side might be unavailable. For $q(x)=\\sqrt x$ with domain $[0,\\infty)$, the approach to zero is from the right. Its values approach zero: to make $\\sqrt x$ smaller than a chosen positive output tolerance, it suffices to choose $0\\le x$ smaller than the square of that tolerance. There are no allowed negative inputs from which to form a left-hand approach. We therefore write $\\lim_{x\\to0^+}\\sqrt x=0$ rather than treating the missing side as an additional computed value.

**Definition 12.5 (Continuity, informally).** A function is continuous at an interior domain point $a$ if its nearby limit exists and equals $f(a)$. At an included endpoint, use the available one-sided limit. This says that the function's assigned value agrees with its nearby behaviour.

Continuity is not the same as being drawn without lifting a pencil in every possible display. A plotting window can hide a hole or a jump. The definition asks about the values and the domain. A limit may exist where there is no function value; a function value may exist where there is no limit; both may exist and disagree. All three distinctions occur in the examples above.

## Why simple algebraic limits work

We will use a few limit conclusions that can be checked directly with algebra. If $x=a+h$ and $h$ becomes small, a linear function satisfies

$$
(m(a+h)+b)-(ma+b)=mh.
$$

Its output difference has magnitude $|m|\\,|h|$, which becomes as small as desired with $|h|$. This establishes the expected nearby value for a linear expression, including a constant when $m=0$.

**Proposition 12.6 (Quadratic nearby values).** For $f(x)=Ax^2+Bx+C$, with fixed real coefficients, and any real $a$,

$$
\\lim_{x\\to a}f(x)=f(a).
$$

*Algebraic justification.* Set $x=a+h$. Expansion gives

$$
f(a+h)-f(a)=h(2Aa+B+Ah).
$$

For $|h|<1$, the magnitude is at most

$$
|h|\\bigl(|2Aa+B|+|A|\\bigr).
$$

The bracket is a fixed nonnegative number. If it is zero, the difference is zero. If it is positive, choosing $|h|$ smaller than any desired output tolerance divided by that number makes the output difference smaller than that tolerance; also keep $|h|<1$. This controls every sufficiently small $h$, proving the nearby-value statement without relying on a numerical table. ∎

This argument supplies the precise reason substitution works for a quadratic. It does not license substitution into an arbitrary expression. In particular, $0/0$ is not a real number or the name of a limit. It signals that a direct attempted substitution has not answered the question. Factorisation, rationalisation, or other analysis may then be needed, and in some cases no finite limit exists.

## Average rates compare distinct inputs

**Definition 12.7 (Average rate and difference quotient).** If $f$ is defined at distinct inputs $a$ and $b$, the average rate of change from $a$ to $b$ is

$$
\\frac{f(b)-f(a)}{b-a}.
$$

Putting $b=a+h$ gives the difference quotient

$$
D_a(h)=\\frac{f(a+h)-f(a)}{h},
$$

where $h\\ne0$ and both $a$ and $a+h$ must belong to the domain.

On a graph this is the slope of the secant line through $(a,f(a))$ and $(a+h,f(a+h))$. If the input is time in seconds and the output is position in metres, the quotient has units metres per second. If the output is temperature in degrees Celsius and the input is time in minutes, the units are degrees Celsius per minute. Units belong to the ratio; they are not supplied by its numerical value alone.

A negative $h$ compares the base input with an earlier input. The formula remains a slope because both numerator and denominator use the same ordering. Reversing the two inputs changes both signs, leaving the quotient unchanged. Average velocity can be negative because displacement is signed; speed and total distance travelled ask different questions.

**Example 12.8 (Average velocity for a quadratic position).** A model gives $s(t)=3t^2+2t$ metres for $0\\le t\\le5$, with time $t$ in seconds. Find the average velocity from $t=2$ to $t=5/2$, and then the difference quotient based at $t=2$.

The positions are $s(2)=16$ and $s(5/2)=95/4$. The displacement is $95/4-16=31/4$ metres over $1/2$ second, so the average velocity is $(31/4)/(1/2)=31/2$ metres per second.

For a general increment $h$, expansion gives

$$
s(2+h)=3(2+h)^2+2(2+h)=16+14h+3h^2.
$$

Thus, for $h\\ne0$ with $-2\\le h\\le3$,

$$
D_2(h)=\\frac{14h+3h^2}{h}=14+3h.
$$

Substitution of $h=1/2$ gives $31/2$, agreeing with the earlier average. The allowed interval comes from $0\\le2+h\\le5$. The expression $14+3h$ has a value at zero, but the original quotient still does not: cancelling $h$ used $h\\ne0$.

## From average rate to an instantaneous rate

**Definition 12.9 (Instantaneous rate, as a preview).** At an interior point $a$, if the difference quotients have a finite two-sided limit as $h\\to0$, that limit is the instantaneous rate of change at $a$:

$$
\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}.
$$

Calculus calls this number the derivative at $a$, often denoted $f'(a)$. Here we calculate only examples justified directly by algebra. At a domain endpoint, we will explicitly say “right-hand rate” or “left-hand rate” when only one direction of increments is allowed.

The definition uses distinct nearby inputs at every nonzero increment. It does not set $h=0$ in a quotient. An algebraically simplified expression may extend to zero and reveal the limit, just as filling a removable hole revealed a limit earlier in the chapter. The extended expression and the original quotient have different domains.

**Theorem 12.10 (Instantaneous rate of a quadratic).** If $f(x)=Ax^2+Bx+C$ for real $A,B,C$, then its instantaneous rate at any real $a$ is $2Aa+B$.

*Proof.* For every nonzero $h$,

$$
\\begin{aligned}
\\frac{f(a+h)-f(a)}h
&=\\frac{A(a^2+2ah+h^2)+B(a+h)+C-(Aa^2+Ba+C)}h\\\\
&=\\frac{(2Aa+B)h+Ah^2}{h}
=2Aa+B+Ah.
\\end{aligned}
$$

The difference between this quotient and $2Aa+B$ is $Ah$. Its magnitude is $|A|\\,|h|$, which becomes as small as desired as $h$ approaches zero from either side. Hence the difference quotient has the stated limit. If $A=0$ the quotient is already the constant $B$, so the argument includes linear functions. ∎

In Example 12.8, this gives the instantaneous velocity $14$ metres per second at $t=2$. The earlier average was $15.5$ metres per second, because it described a nonzero interval rather than a single instant. The discrepancy is exactly $3h$ for an interval increment $h$. The rate is a consequence of the assumed continuous-time model; measurements over one interval alone would not establish that model.

**Example 12.11 (The limiting secant line).** Find the limiting secant slope for $f(x)=x^2-4x+1$ at $a=3$ and write the line through the graph point with that slope.

Here $A=1$, $B=-4$, so Theorem 12.10 gives slope $2(3)-4=2$. The graph point is $(3,f(3))=(3,-2)$. The line is therefore

$$
y+2=2(x-3),\\qquad y=2x-8.
$$

To see how it compares with the quadratic nearby, set $x=3+h$. The quadratic gives $-2+2h+h^2$ and the line gives $-2+2h$, differing by $h^2$. The secant slopes equal $2+h$ for nonzero $h$, approaching $2$ from both sides. In calculus this line is the tangent defined by the limiting slope. A tangent need not mean a line that intersects the entire graph at exactly one point; the limiting behaviour is the feature used here.

## Limits can exist when rates do not

**Example 12.12 (A continuous corner).** Let $f(x)=|x|$. At zero, its values approach $0=f(0)$, since $|f(x)-0|=|x|$. Thus it is continuous there. Its difference quotient at zero is nevertheless

$$
\\frac{|h|-0}{h}
=\\begin{cases}
-1,&h<0,\\\\
1,&h>0.
\\end{cases}
$$

The left-hand quotient limit is $-1$ and the right-hand quotient limit is $1$. They disagree, so there is no two-sided instantaneous rate at zero. Continuity does not guarantee a single limiting secant slope. The issue is not an inability to divide by zero; every quotient used above has a nonzero denominator. The issue is that the nearby quotient values approach two different numbers.

At an endpoint, a one-sided rate can also fail to be finite. For $q(x)=\\sqrt x$ on $[0,\\infty)$, the right-hand difference quotient at zero is $\\sqrt h/h=1/\\sqrt h$ for $h>0$. This grows beyond every fixed positive bound as $h$ decreases to zero. Although the function values approach zero, the quotients do not approach a finite real rate. We do not call infinity a real slope.

## Data and model choices

A finite table can suggest a limit, but it observes only finitely many inputs. An unobserved input could behave differently unless a formula or an argument controls it. Similarly, if a computer gives close values at several tiny increments, rounding or cancellation can influence the displayed differences. The exact algebra above shows why the claimed behaviour holds for every sufficiently small nonzero increment in its domain.

Discrete observations require an additional modelling choice before instantaneous continuous-time language applies. Suppose positions at integer times are $s_n=n^2$ metres for $n\\ge0$. One possible interpolation is $F(t)=t^2$. Another joins each pair of consecutive observations by a straight segment. On $n\\le t\\le n+1$ this second interpolation is

$$
G(t)=n^2+(2n+1)(t-n),
$$

because the displacement from $n^2$ to $(n+1)^2$ is $2n+1$. Both rules agree with every integer observation. Between zero and one, however, $G(t)=t$, while $F(t)=t^2$. At $t=1/4$ their values are $1/4$ and $1/16$, and their instantaneous rates are $1$ and $1/2$, respectively, by the linear and quadratic calculations already proved.

Thus even knowing all those integer-time positions does not uniquely specify between-time positions or rates. A physical assumption, such as a stated motion law, is needed. For a process defined only at integer times, an average change per step is meaningful without pretending that the input can vary through arbitrarily small real intervals.

## Exercises

Use algebra to justify nearby behaviour rather than taking a table as proof. State the original domain and distinguish a quotient from an extension of its simplified formula at the missing point.

### Exercise 12.1
<a id="limits-rates-preview-ex-1"></a>

For $f(x)=(x^2-16)/(x-4)$, find the original domain and its limit as $x\\to4$. Does the original expression define $f(4)$?

<details>
<summary>Hint 1</summary>

Factor the numerator, and note where cancellation is permitted.

</details>
<details>
<summary>Hint 2</summary>

For $x\\ne4$ the simplified formula is $x+4$. Compare its distance from $8$ with the input's distance from $4$.

</details>
<details>
<summary>Solution</summary>

The domain is $\\mathbb R\\setminus\\{4\\}$. For every domain input, $f(x)=(x-4)(x+4)/(x-4)=x+4$. Hence $f(x)-8=x-4$, so outputs are as close to $8$ as the inputs are to $4$. This proves the limit is $8$. The original expression has denominator zero at $4$ and does not define $f(4)$. Setting that value to $8$ would define an extension, rather than change the domain of the original quotient by cancellation.

</details>

### Exercise 12.2
<a id="limits-rates-preview-ex-2"></a>

Let $g(x)=x+2$ for $x\\ne1$, and $g(1)=9$. Find $\\lim_{x\\to1}g(x)$ and decide whether $g$ is continuous at $1$. What replacement value would make it continuous?

<details>
<summary>Hint 1</summary>

The limit uses nearby inputs different from one, so the isolated assigned value does not determine it.

</details>
<details>
<summary>Hint 2</summary>

At nearby inputs, $g(x)-3=x-1$. Compare the resulting limit with the specified point value.

</details>
<details>
<summary>Solution</summary>

For $x\\ne1$, $g(x)-3=x-1$, so the nearby values approach $3$. Therefore the limit is $3$, while $g(1)=9$. They disagree, making the function discontinuous at $1$. Replacing the assigned value by $g(1)=3$ would make it continuous there. The value change affects one point only and does not alter the already established limit.

</details>

### Exercise 12.3
<a id="limits-rates-preview-ex-3"></a>

Let $p(x)=x+1$ for $x<0$ and $p(x)=2x+3$ for $x\\ge0$. Find both one-sided limits at zero, the point value, and whether a two-sided limit exists.

<details>
<summary>Hint 1</summary>

Use the formula on the appropriate side for each approach. The equality condition determines only the point value.

</details>
<details>
<summary>Hint 2</summary>

The left values differ from $1$ by $x$, while the right values differ from $3$ by $2x$.

</details>
<details>
<summary>Solution</summary>

The left-hand limit is $1$, since $p(x)-1=x$ for $x<0$. The right-hand limit is $3$, since $p(x)-3=2x$ for $x>0$. The point value is $p(0)=3$, using the second branch. Because the one-sided limits differ, the two-sided limit does not exist. Changing the value at zero cannot make the two side limits agree, so this is a jump rather than a removable hole.

</details>

### Exercise 12.4
<a id="limits-rates-preview-ex-4"></a>

For $f(x)=\\sqrt{x-2}$ on $[2,\\infty)$, state the appropriate one-sided limit at $2$ and justify its value using an output tolerance.

<details>
<summary>Hint 1</summary>

Only inputs to the right of $2$ are available in the domain.

</details>
<details>
<summary>Hint 2</summary>

To make $\\sqrt{x-2}$ smaller than a positive number $c$, require $0<x-2<c^2$.

</details>
<details>
<summary>Solution</summary>

The right-hand limit is $\\lim_{x\\to2^+}\\sqrt{x-2}=0$. Given any positive desired output tolerance $c$, every input with $0<x-2<c^2$ gives $0<\\sqrt{x-2}<c$. This controls all sufficiently close allowed inputs, justifying the limit. The function value is $f(2)=0$, so the function is continuous at this endpoint in the one-sided sense. There is no left-hand approach within the given domain.

</details>

### Exercise 12.5
<a id="limits-rates-preview-ex-5"></a>

For $f(x)=2x^2-3x+5$, find the average rate of change from $x=1$ to $x=4$. Then compute the difference quotient based at $a=1$ and its limiting value.

<details>
<summary>Hint 1</summary>

Calculate the two endpoint values for the average. For the general quotient, expand $f(1+h)$ before subtracting $f(1)$.

</details>
<details>
<summary>Hint 2</summary>

You should obtain $f(1+h)=4+h+2h^2$. Cancellation is permitted only for $h\\ne0$.

</details>
<details>
<summary>Solution</summary>

Here $f(1)=4$ and $f(4)=25$, so the average rate is $(25-4)/(4-1)=7$. For nonzero $h$, the difference quotient is $(4+h+2h^2-4)/h=1+2h$. Its difference from $1$ has magnitude $2|h|$, so the instantaneous rate is $1$. The average corresponds to $h=3$ and equals $1+2(3)=7$; it need not equal the limiting rate based at the first endpoint.

</details>

### Exercise 12.6
<a id="limits-rates-preview-ex-6"></a>

A position model is $s(t)=4t^2-t$ metres for $0\\le t\\le3$, with $t$ in seconds. Find its instantaneous velocity at $t=1$ and the allowed nonzero increments in the difference quotient there.

<details>
<summary>Hint 1</summary>

Apply the quadratic calculation with $A=4$, $B=-1$, and base input $a=1$.

</details>
<details>
<summary>Hint 2</summary>

The second time $1+h$ must remain between zero and three. The quotient simplifies to $7+4h$.

</details>
<details>
<summary>Solution</summary>

The instantaneous velocity is $2(4)(1)-1=7$ metres per second. Directly, $s(1)=3$ and $s(1+h)=3+7h+4h^2$, giving quotient $7+4h$ for $h\\ne0$. The domain requires $0\\le1+h\\le3$, so the allowed increments satisfy $-1\\le h\\le2$ with $h\\ne0$. Both signs occur arbitrarily close to zero, and the quotient tends to $7$ from both sides.

</details>

### Exercise 12.7
<a id="limits-rates-preview-ex-7"></a>

Find the limiting secant slope for $f(x)=2x^2+1$ at $x=-1$. Write the line through the graph point with that slope.

<details>
<summary>Hint 1</summary>

Find both the rate $2Aa+B$ and the graph value $f(a)$.

</details>
<details>
<summary>Hint 2</summary>

The point is $(-1,3)$ and the slope is negative. Use point-slope form.

</details>
<details>
<summary>Solution</summary>

The quadratic rate formula gives $2(2)(-1)+0=-4$. Since $f(-1)=3$, the line is $y-3=-4(x+1)$, or $y=-4x-1$. The difference quotient based at $-1$ is $-4+2h$ for nonzero $h$, so its values approach $-4$ from both sides. This limiting slope, together with the fixed graph point, specifies the tangent in the sense introduced in this chapter.

</details>

### Exercise 12.8
<a id="limits-rates-preview-ex-8"></a>

For $f(x)=|x-2|$, examine continuity and the existence of a two-sided instantaneous rate at $a=2$.

<details>
<summary>Hint 1</summary>

The point value is zero. Compare the distance of nearby outputs from zero with $|x-2|$.

</details>
<details>
<summary>Hint 2</summary>

The difference quotient at $2$ is $|h|/h$. Evaluate it separately for positive and negative $h$.

</details>
<details>
<summary>Solution</summary>

The function is continuous at $2$, because $f(2)=0$ and the magnitude of the output difference is exactly $|x-2|$, which approaches zero. For nonzero $h$, the quotient is $|h|/h$, equal to $-1$ for $h<0$ and $1$ for $h>0$. Its one-sided limits differ, so there is no two-sided instantaneous rate at $2$. This shifted corner again demonstrates that continuity does not imply the existence of a limiting secant slope.

</details>

### Exercise 12.9
<a id="limits-rates-preview-ex-9"></a>

For $f(x)=x^2$ restricted to $[0,2]$, find the right-hand rate at $0$ and the left-hand rate at $2$. Explain the allowed signs of the increments.

<details>
<summary>Hint 1</summary>

At zero the second input is $h$; at two it is $2+h$. Keep both inside the domain.

</details>
<details>
<summary>Hint 2</summary>

The respective quotients simplify to $h$ and $4+h$ for allowed nonzero $h$.

</details>
<details>
<summary>Solution</summary>

At zero, allowed nonzero increments satisfy $0<h\\le2$. The quotient is $h^2/h=h$, so the right-hand rate is $0$. At two, allowed increments satisfy $-2\\le h<0$. Expansion gives $((2+h)^2-4)/h=4+h$, so the left-hand rate is $4$. The restricted domain supplies only one side at each endpoint. We therefore identify these as one-sided rates rather than assume unavailable times or inputs on the other side.

</details>

### Exercise 12.10
<a id="limits-rates-preview-ex-10"></a>

A process is recorded only at integer times with values $s_n=n^2$ metres. Find the average change per one-second step from time $n$ to time $n+1$. Does this information alone determine an instantaneous velocity at every noninteger time?

<details>
<summary>Hint 1</summary>

Subtract consecutive recorded values and divide by the one-second interval.

</details>
<details>
<summary>Hint 2</summary>

Compare a quadratic continuous interpolation with the straight-segment interpolation described in the chapter.

</details>
<details>
<summary>Solution</summary>

The displacement is $(n+1)^2-n^2=2n+1$ metres in one second, so the step's average velocity is $2n+1$ metres per second. The integer observations alone do not determine the between-time motion. Both $F(t)=t^2$ and the piecewise linear rule $G(t)=n^2+(2n+1)(t-n)$ for $n\\le t\\le n+1$ match every observation. At $t=1/4$, their rates are $1/2$ and $1$, respectively. An instantaneous velocity therefore needs a stated continuous-time model, not just the discrete records.

</details>

## Summary

Limits describe nearby values and are distinct from a formula's value at the target input. Removable holes, jumps, and domain endpoints require different decisions. One-sided limits make the available direction explicit; matching sides give an interior two-sided limit. Simple algebra can control every sufficiently nearby input, while a finite table alone cannot prove a limit.

An average rate compares distinct inputs. Its difference quotient requires a nonzero increment, even if a simplified expression extends to zero. An instantaneous rate is the finite limiting value of those quotients when it exists. Expansion proves that a quadratic has rate $2Aa+B$ at $a$, but a continuous corner can have no two-sided rate. Units and domain restrictions remain part of every interpretation, and discrete observations do not automatically specify continuous motion.

Continue with [Limits and Continuity](/calculus/#chapter/04) in Euler's Calculus course for formal definitions, limit laws, and proofs. Its earlier [Functions and Mathematical Language](/calculus/#chapter/01) chapter is available if you want another pass through domains and function notation before beginning the calculus core.

## Sources

The explanations, algebraic proofs, examples, exercises, and model comparisons in this chapter are original. For a wider calculus treatment, see Gilbert Strang and Edwin Herman, *Calculus Volume 1*, OpenStax, [2.2 The Limit of a Function](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function) and [3.1 Defining the Derivative](https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative), consulted 13 November 2026. These readings proceed further into calculus than this informal bridge. OpenStax identifies its text licence as CC BY-NC-SA 4.0; the links are references, and this chapter does not reproduce its text or figures. This Euler chapter is licensed CC BY-SA 4.0.
`;export{e as default};