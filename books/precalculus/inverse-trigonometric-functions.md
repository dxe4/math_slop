
# Inverse Trigonometric Functions

A trigonometric function starts with an angle and returns a number. For example, sine returns the vertical coordinate of a point on the unit circle. Often the information arrives in the opposite order: a measured ratio is known, and we need an angle that produces it. A ramp with known rise and horizontal run gives a tangent ratio; a point on a circle may give a cosine coordinate. Inverse trigonometric functions turn those numerical data into specified angles.

There is an immediate difficulty. Many angles have the same sine, cosine or tangent. The numbers $\pi/6$ and $5\pi/6$ have the same sine, and adding a whole turn produces infinitely many more examples. A function must return exactly one output for each permitted input. An inverse therefore requires a deliberate choice of which angles it may return.

The question of this chapter is: how can we recover an angle without forgetting that choice? We shall define three principal inverse functions, establish their domains and ranges, and use those ranges to determine exact values and signs. The next chapter will recover all the other angles when solving an equation.

Required preparation is [Sine, Cosine and Tangent](sine-cosine-tangent.md) and [Trigonometric Identities](trigonometric-identities.md), together with the earlier discussion of inverse functions. All angles are in radians unless a degree symbol is explicitly shown. Square roots mean the nonnegative real square root. That last convention will be crucial when a trigonometric identity gives a squared quantity.

## Choosing a single answer

**Definition 7.1 (Principal inverse trigonometric functions).** For a real number $t$ in the indicated domain, define:

| Function | Meaning of $y$ | Input domain | Principal output range |
| --- | --- | --- | --- |
| $y=\arcsin t$ | $\sin y=t$ | $[-1,1]$ | $[-\pi/2,\pi/2]$ |
| $y=\arccos t$ | $\cos y=t$ | $[-1,1]$ | $[0,\pi]$ |
| $y=\arctan t$ | $\tan y=t$ | $\mathbb R$ | $(-\pi/2,\pi/2)$ |

In each row, the output is the unique angle in the specified range satisfying the equation. It is called the *principal value*. The names arcsine, arccosine and arctangent refer to these functions.

The closed endpoints in the first two rows are intentional. Sine takes the values $-1$ and $1$ at $-\pi/2$ and $\pi/2$. Cosine takes $1$ and $-1$ at $0$ and $\pi$. Tangent, however, is undefined at $\pm\pi/2$ because cosine is zero there. No finite real input makes arctangent return either endpoint.

The inverse sine and inverse cosine have no real value outside $[-1,1]$. For example, $\arccos(6/5)$ is undefined as a real number. Arctangent accepts every real input, including negative values and zero. A large positive input gives an angle close to $\pi/2$, but still strictly less than it. Statements about this closeness describe the graph; no calculus is needed to define the function.

**Proposition 7.2 (Why the principal choices work).** Each definition assigns exactly one output to every input in its stated domain.

*Proof.* On the right semicircle, including the top and bottom endpoints, each height $t\in[-1,1]$ occurs at exactly one point with nonnegative horizontal coordinate. Its angle lies in $[-\pi/2,\pi/2]$, giving the required sine value. On the upper semicircle, each horizontal coordinate $t\in[-1,1]$ similarly occurs at exactly one point, giving a cosine angle in $[0,\pi]$.

For tangent and any real $t$, the point

$$
\left(\frac1{\sqrt{1+t^2}},\frac{t}{\sqrt{1+t^2}}\right)
$$

lies on the unit circle and has strictly positive horizontal coordinate. It therefore determines an angle in $(-\pi/2,\pi/2)$, and the ratio of its vertical to horizontal coordinates is $t$.

Uniqueness can also be checked algebraically. If $a<b$ both lie in the principal sine interval, the difference identity gives

$$
\sin b-\sin a
=2\cos\left(\frac{a+b}{2}\right)\sin\left(\frac{b-a}{2}\right)>0.
$$

The cosine factor is positive because the midpoint is strictly between $-\pi/2$ and $\pi/2$, and the sine factor is positive because its argument lies in $(0,\pi/2]$. Thus sine never repeats a value on that interval. For $0\le a<b\le\pi$,

$$
\cos b-\cos a
=-2\sin\left(\frac{a+b}{2}\right)\sin\left(\frac{b-a}{2}\right)<0,
$$

so cosine never repeats a value on its principal interval. Finally, if $-\pi/2<a<b<\pi/2$,

$$
\tan b-\tan a=\frac{\sin(b-a)}{\cos a\cos b}>0,
$$

because $0<b-a<\pi$ and both cosines are positive. Tangent is also one-to-one there. These facts establish uniqueness in all three constructions. ∎

These choices are conventions, but they are fixed conventions. Another restriction could define another inverse branch; it would have to be named and its range stated. In this book the unqualified symbols $\arcsin$, $\arccos$ and $\arctan$ always mean Definition 7.1.

## Inverse notation and exact values

The alternative notation $\sin^{-1}t$ often means $\arcsin t$, and calculators commonly use that notation. It does not mean the reciprocal $1/\sin t$. The reciprocal function is cosecant, written $\csc t$. Likewise $\cos^{-1}t$ as inverse-function notation differs from $\sec t=1/\cos t$, and inverse tangent differs from $\cot t=1/\tan t$ where that reciprocal exists. We use the names beginning with “arc” to keep the meaning explicit.

The distinction is mathematical as well as typographical. In $\arcsin(1/2)$ the input is a sine value and the output is an angle, namely $\pi/6$. In $1/\sin(1/2)$ the input $1/2$ is itself an angle in radians, and the output is a reciprocal ratio. These are different operations on differently interpreted data.

**Result 7.3 (The two orders of composition).** For $-1\le t\le1$,

$$
\sin(\arcsin t)=t,
\qquad
\cos(\arccos t)=t.
$$

For every real $t$, $\tan(\arctan t)=t$. In the reverse order,

$$
\arcsin(\sin x)=x\quad\text{if }-\pi/2\le x\le\pi/2,
$$

$$
\arccos(\cos x)=x\quad\text{if }0\le x\le\pi,
$$

and $\arctan(\tan x)=x$ if $-\pi/2<x<\pi/2$.

*Proof.* In the first order, the inverse function is defined to return an angle having the given trigonometric value. Applying that trigonometric function therefore gives the input back. In the reverse order, the stated restriction puts $x$ in the principal range. It is the unique angle there with the given value, so the inverse returns $x$. Without that restriction, it returns the principal representative instead. ∎

**Example 7.4 (Exact principal values).** Evaluate $\arcsin(-\sqrt3/2)$, $\arccos(-\sqrt2/2)$ and $\arctan(-1)$.

The angle $-\pi/3$ has sine $-\sqrt3/2$ and lies in $[-\pi/2,\pi/2]$, so the first answer is $-\pi/3$. The angle $3\pi/4$ has cosine $-\sqrt2/2$ and lies in $[0,\pi]$, giving the second answer. The angle $-\pi/4$ has tangent $-1$ and lies in $(-\pi/2,\pi/2)$, giving the third answer.

Each answer needs two checks: the required trigonometric value and membership in the principal range. For example, $5\pi/4$ also has cosine $-\sqrt2/2$, but it fails the second check. A correct ratio alone does not identify an inverse-function value.

**Example 7.5 (When “undoing” returns a different angle).** Evaluate

$$
\arcsin(\sin(7\pi/6)),\qquad
\arccos(\cos(-\pi/3)),\qquad
\arctan(\tan(5\pi/6)).
$$

First $\sin(7\pi/6)=-1/2$, whose principal arcsine is $-\pi/6$. Thus the first answer is $-\pi/6$, not $7\pi/6$. Next cosine is even, so $\cos(-\pi/3)=1/2$, and its principal arccosine is $\pi/3$. Finally tangent has period $\pi$, giving $\tan(5\pi/6)=\tan(-\pi/6)=-1/\sqrt3$. Its principal arctangent is $-\pi/6$.

There is no contradiction with the inverse identities. In all three reverse compositions, the original angle was outside the corresponding principal interval. Notice also that $\arctan(\tan(\pi/2))$ is undefined: the inner tangent has no value, so there is nothing for arctangent to receive.

## Symmetries and signs

**Proposition 7.6 (Useful principal-value identities).** For $t\in[-1,1]$,

$$
\arcsin(-t)=-\arcsin t,
\qquad
\arccos(-t)=\pi-\arccos t,
$$

$$
\arcsin t+\arccos t=\frac\pi2.
$$

For all real $t$, $\arctan(-t)=-\arctan t$.

*Proof.* Let $a=\arcsin t$. Then $-a$ remains in $[-\pi/2,\pi/2]$ and has sine $-t$, so uniqueness gives the first identity. The same argument with the odd tangent function proves the arctangent identity, since negating an angle preserves its principal open interval.

Let $b=\arccos t$. The angle $\pi-b$ lies in $[0,\pi]$ and has cosine $-\cos b=-t$. This proves the arccosine identity. Finally $\pi/2-a$ lies in $[0,\pi]$ and has cosine $\sin a=t$. Therefore $\arccos t=\pi/2-a$, proving the sum identity. All arguments include the permitted endpoints. ∎

The identity for arccosine differs from the oddness identities. In particular, $\arccos(-t)$ is generally not $-\arccos t$: a negative output would usually be outside its principal range. At $t=0$, arccosine returns $\pi/2$, not zero.

When an inverse expression supplies an angle, its range also supplies sign information. An arcsine angle has nonnegative cosine because it lies on the right semicircle. An arccosine angle has nonnegative sine because it lies on the upper semicircle. An arctangent angle has strictly positive cosine. These facts decide which square root to take in the Pythagorean identity.

**Example 7.7 (A mixed composition with a negative input).** Let $\theta=\arccos(-5/13)$. Find $\sin\theta$ and $\tan\theta$ exactly.

We know $\cos\theta=-5/13$ and $0\le\theta\le\pi$. Since cosine is negative, the angle is in the second quadrant, where sine is positive. The identity gives

$$
\sin^2\theta=1-\frac{25}{169}=\frac{144}{169}.
$$

Consequently $\sin\theta=12/13$, with a positive sign forced by the principal range. Division by the nonzero cosine gives

$$
\tan\theta=\frac{12/13}{-5/13}=-\frac{12}{5}.
$$

No decimal approximation of $\theta$ was needed. Drawing a right triangle with side lengths $5,12,13$ can help calculate magnitudes, but the quadrant determines the signs. Assigning a negative physical side length would confuse those two roles.

**Result 7.8 (Composition formulas with domains).** For $-1\le t\le1$,

$$
\cos(\arcsin t)=\sqrt{1-t^2},
\qquad
\sin(\arccos t)=\sqrt{1-t^2}.
$$

For $-1<t<1$,

$$
\tan(\arcsin t)=\frac{t}{\sqrt{1-t^2}}.
$$

For every real $t$,

$$
\cos(\arctan t)=\frac1{\sqrt{1+t^2}},
\qquad
\sin(\arctan t)=\frac{t}{\sqrt{1+t^2}}.
$$

*Proof.* If $a=\arcsin t$, then $\sin a=t$ and $\cos a\ge0$. The Pythagorean identity therefore forces $\cos a=\sqrt{1-t^2}$. If $b=\arccos t$, use $\cos b=t$ and $\sin b\ge0$ in the same way. Tangent is sine divided by cosine, which requires the strict restriction $|t|<1$ in the arcsine composition.

For $c=\arctan t$, we have $\tan c=t$ and $\cos c>0$. Divide $\sin^2c+\cos^2c=1$ by $\cos^2c$ to get $1+t^2=1/\cos^2c$. Taking the positive square root gives the formula for cosine. Multiplying by $\tan c=t$ gives the formula for sine. ∎

The strict and non-strict domains in this result are part of the formulas. At $t=1$, $\cos(\arcsin t)=0$ is valid, but $\tan(\arcsin t)$ is undefined because it would require tangent at $\pi/2$. Simplifying a composition does not remove restrictions imposed by either function.

## Domains of compositions

**Example 7.9 (An inner restriction and an outer restriction).** Find the real domain of

$$
f(x)=\arccos\left(\frac{2x-1}{3}\right)
$$

and of $g(x)=\tan(\arcsin(2x-1))$.

For $f$, its inner fraction is defined for every real input, but arccosine requires

$$
-1\le\frac{2x-1}{3}\le1.
$$

Multiplying by positive $3$, adding $1$ and dividing by positive $2$ gives $-1\le x\le2$. Both endpoints are allowed: $f(-1)=\pi$ and $f(2)=0$.

For $g$, arcsine first requires $-1\le2x-1\le1$, giving $0\le x\le1$. But the outer tangent is undefined when the inner angle is $-\pi/2$ or $\pi/2$. Those outputs occur at $x=0$ and $x=1$, respectively. Thus the full domain is $0<x<1$. On that domain,

$$
g(x)=\frac{2x-1}{\sqrt{1-(2x-1)^2}}.
$$

The zero denominator at the two endpoints confirms the outer restriction. Finding only the arcsine domain would have been an incomplete answer.

In an equation involving an inverse function, check the proposed output as well. The equation $\arcsin x=3\pi/4$ has no real solution because its right side is outside the principal range. Taking sine of both sides gives $x=\sqrt2/2$, but substituting back gives $\arcsin(\sqrt2/2)=\pi/4$. Taking sine is not a reversible operation on unrestricted angles; it can erase the information that distinguishes them.

## Recovering an angle from measurements

**Example 7.10 (A slope and a quadrant).** A ramp rises $7$ metres over a horizontal run of $24$ metres. Find an exact expression for its angle $\theta$ above the horizontal, and its sine and cosine.

The angle is acute, and the tangent ratio is $7/24$. Therefore

$$
\theta=\arctan(7/24).
$$

The Pythagorean theorem gives ramp length $\sqrt{7^2+24^2}=25$ metres. Hence $\sin\theta=7/25$ and $\cos\theta=24/25$. The units in the tangent ratio cancel; the inverse function returns an angle in radians. A calculator may provide an approximation if needed, but the expression using arctangent is already exact.

Now consider the ray from the origin through the point $(-24,7)$. Its inclination $\phi$ in $[0,2\pi)$ is in the second quadrant, with the same reference triangle. Thus

$$
\phi=\pi-\arctan(7/24).
$$

Its tangent is $-7/24$, but $\arctan(-7/24)$ lies in the fourth quadrant when represented by a negative principal angle. Tangent alone does not distinguish rays separated by $\pi$. The signs of both coordinates resolve that ambiguity. This will be useful when a point is described by an angle in [Complex Numbers and Polar Form](complex-numbers-polar-form.md).

For numerical work, keep track of the calculator's angle mode. A displayed number near $0.524$ and the displayed number $30$ can describe the same acute angle in radians and degrees, respectively. Neither is meaningful without its unit convention. Exact radian answers make the relationship to periods such as $2\pi$ easier to maintain.

## Exercises

### Exercise 7.1
<a id="inverse-trigonometric-functions-ex-1"></a>

Find the exact principal values of $\arcsin(1/2)$, $\arccos(-1/2)$ and $\arctan(\sqrt3)$. Justify each range choice.

<details>
<summary>Hint 1</summary>

Use the familiar special angles, but write the principal range beside each inverse function.

</details>
<details>
<summary>Hint 2</summary>

A negative cosine input requires an arccosine angle in the second quadrant.

</details>
<details>
<summary>Solution</summary>

The answers are $\pi/6$, $2\pi/3$ and $\pi/3$, respectively. Their sine, cosine and tangent are the given inputs. They lie in $[-\pi/2,\pi/2]$, $[0,\pi]$ and $(-\pi/2,\pi/2)$ respectively. For instance, $4\pi/3$ has the same cosine as $2\pi/3$, but is outside the arccosine range and cannot be its output.

</details>

### Exercise 7.2
<a id="inverse-trigonometric-functions-ex-2"></a>

Find the real domain of $h(x)=\arcsin(3x+2)$ and evaluate $h$ at both domain endpoints.

<details>
<summary>Hint 1</summary>

The input of arcsine must lie between $-1$ and $1$, inclusive.

</details>
<details>
<summary>Hint 2</summary>

Solve the double inequality before applying the endpoint values of arcsine.

</details>
<details>
<summary>Solution</summary>

We need $-1\le3x+2\le1$. Subtracting $2$ and dividing by positive $3$ gives $-1\le x\le-1/3$. At the left endpoint the input is $-1$, so $h(-1)=-\pi/2$. At the right endpoint the input is $1$, so $h(-1/3)=\pi/2$. Both endpoints are included because sine attains both extreme values on its closed principal interval.

</details>

### Exercise 7.3
<a id="inverse-trigonometric-functions-ex-3"></a>

Evaluate $\arccos(\cos(5\pi/3))$, $\arcsin(\sin(4\pi/3))$ and $\arctan(\tan(3\pi/4))$.

<details>
<summary>Hint 1</summary>

Evaluate the inner trigonometric functions first.

</details>
<details>
<summary>Hint 2</summary>

The outer inverse function must return its principal angle, even when the original angle lies elsewhere.

</details>
<details>
<summary>Solution</summary>

The inner values are $1/2$, $-\sqrt3/2$ and $-1$. Their principal inverse values are $\pi/3$, $-\pi/3$ and $-\pi/4$. Each has the correct trigonometric value and lies in the corresponding principal range. None of the three original angles lies in that range, so simply cancelling the function names would be invalid.

</details>

### Exercise 7.4
<a id="inverse-trigonometric-functions-ex-4"></a>

Explain the difference between $\arcsin(1/2)$ and $\csc(\pi/6)$. Compare $\arcsin 0$ with $1/\sin0$ as a second example of the distinction.

<details>
<summary>Hint 1</summary>

One operation recovers an angle; the other takes a reciprocal of a trigonometric value.

</details>
<details>
<summary>Hint 2</summary>

Recall that sine at zero is zero, while zero itself is a permitted arcsine input.

</details>
<details>
<summary>Solution</summary>

The inverse-function value is $\arcsin(1/2)=\pi/6$, an angle. The reciprocal value is $\csc(\pi/6)=1/\sin(\pi/6)=2$, a ratio. Also $\arcsin0=0$, whereas $1/\sin0=1/0$ is undefined. Thus inverse sine and reciprocal sine differ in purpose, output and even domain. The notation $\sin^{-1}$ must be read according to its inverse-function convention, rather than as an ordinary negative power.

</details>

### Exercise 7.5
<a id="inverse-trigonometric-functions-ex-5"></a>

Let $\theta=\arccos(-7/25)$. Find $\sin\theta$ and $\tan\theta$, explaining the signs.

<details>
<summary>Hint 1</summary>

Locate $\theta$ within its principal range using the negative cosine value.

</details>
<details>
<summary>Hint 2</summary>

Use $\sin^2\theta+\cos^2\theta=1$, then choose the sign appropriate to the quadrant.

</details>
<details>
<summary>Solution</summary>

The angle lies in the second quadrant, so sine is positive. We have $\sin^2\theta=1-49/625=576/625$, giving $\sin\theta=24/25$. Since cosine is $-7/25\ne0$, tangent is $(24/25)/(-7/25)=-24/7$. The negative sine root would satisfy the squared identity but contradict the principal arccosine range.

</details>

### Exercise 7.6
<a id="inverse-trigonometric-functions-ex-6"></a>

For $t\in[-1,1]$, prove directly from the principal ranges that $\arcsin t+\arccos t=\pi/2$. Check both endpoints explicitly.

<details>
<summary>Hint 1</summary>

Set $a=\arcsin t$ and examine the cosine of $\pi/2-a$.

</details>
<details>
<summary>Hint 2</summary>

Show that this new angle lies in the principal arccosine range before invoking uniqueness.

</details>
<details>
<summary>Solution</summary>

Since $-\pi/2\le a\le\pi/2$, the angle $b=\pi/2-a$ lies in $[0,\pi]$. Its cosine is $\sin a=t$, so uniqueness gives $b=\arccos t$. Rearranging proves the identity. At $t=-1$, the sum is $-\pi/2+\pi=\pi/2$. At $t=1$, it is $\pi/2+0=\pi/2$. The proof works at the endpoints because both principal intervals are closed there.

</details>

### Exercise 7.7
<a id="inverse-trigonometric-functions-ex-7"></a>

Find $\sin(2\arctan2)$ and $\cos(2\arctan2)$ exactly, without approximating the angle.

<details>
<summary>Hint 1</summary>

Let $a=\arctan2$ and obtain its sine and cosine using the principal-range formulas.

</details>
<details>
<summary>Hint 2</summary>

Apply the double-angle identities to those exact values.

</details>
<details>
<summary>Solution</summary>

We have $\cos a=1/\sqrt5$ and $\sin a=2/\sqrt5$. Therefore $\sin2a=2\sin a\cos a=4/5$, while $\cos2a=\cos^2a-\sin^2a=1/5-4/5=-3/5$. Here $a>\pi/4$ because its tangent exceeds $1$, and $a<\pi/2$, so $2a$ lies in the second quadrant. The positive sine and negative cosine agree with that location.

</details>

### Exercise 7.8
<a id="inverse-trigonometric-functions-ex-8"></a>

Solve $\arcsin(2x-1)=\pi/6$. Then decide whether $\arcsin(2x-1)=5\pi/6$ has any real solution.

<details>
<summary>Hint 1</summary>

Check both the allowed inner inputs and the allowed inverse-function outputs.

</details>
<details>
<summary>Hint 2</summary>

Taking sine of both sides is reversible here only when the proposed output lies in the principal arcsine range.

</details>
<details>
<summary>Solution</summary>

The inner restriction gives $0\le x\le1$. For the first equation, $\pi/6$ lies in the principal range. Taking sine gives $2x-1=1/2$, hence $x=3/4$. It belongs to the domain and substitution confirms the equation. The second equation has no real solution because $5\pi/6$ is outside $[-\pi/2,\pi/2]$. Taking sine would again produce $x=3/4$, but the original inverse value there is $\pi/6$, not $5\pi/6$.

</details>

### Exercise 7.9
<a id="inverse-trigonometric-functions-ex-9"></a>

Find the full real domain of $\tan(\arcsin x)$ and derive a formula for it without inverse trigonometric notation. Explain what happens at both excluded endpoints.

<details>
<summary>Hint 1</summary>

Arcsine permits a closed input interval, but tangent may impose a further restriction on its output.

</details>
<details>
<summary>Hint 2</summary>

Use the nonnegative cosine of an arcsine angle in the quotient defining tangent.

</details>
<details>
<summary>Solution</summary>

Arcsine initially requires $-1\le x\le1$. Its outputs at the two endpoints are $-\pi/2$ and $\pi/2$, where tangent is undefined. Thus the full domain is $(-1,1)$. Writing $a=\arcsin x$ gives $\sin a=x$ and $\cos a=\sqrt{1-x^2}>0$, so the expression is $x/\sqrt{1-x^2}$. At either endpoint the denominator is zero, matching the undefined tangent. The simplified formula must retain the strict domain.

</details>

### Exercise 7.10
<a id="inverse-trigonometric-functions-ex-10"></a>

A ray from the origin passes through $(-8,15)$. Find its inclination $\theta$ in $[0,2\pi)$ using arctangent, and determine its sine and cosine. Explain why $\arctan(-15/8)$ is not the requested inclination.

<details>
<summary>Hint 1</summary>

Use the signs of both coordinates to locate the ray before using the slope ratio.

</details>
<details>
<summary>Hint 2</summary>

The positive reference angle has tangent $15/8$, and the point is $17$ units from the origin.

</details>
<details>
<summary>Solution</summary>

The ray lies in the second quadrant. With $a=\arctan(15/8)$ acute, its inclination is $\theta=\pi-a$. The distance is $\sqrt{64+225}=17$, so $\sin\theta=15/17$ and $\cos\theta=-8/17$. The value $\arctan(-15/8)=-a$ is a negative principal angle representing a fourth-quadrant ray. It has the same tangent, but its ray is opposite to the requested one; adding $\pi$ gives $\theta$.

</details>

## Summary

The inverse sine, cosine and tangent return unique principal angles because their original functions are restricted to intervals where values do not repeat. Their domains and principal ranges determine every valid evaluation and composition. A reverse composition returns the original angle only within the relevant principal interval, and inverse notation must be distinguished from reciprocals. For mixed compositions, the Pythagorean identity supplies magnitudes while principal ranges supply signs. Domain checks must account for both the inner and outer functions. In the next chapter, principal values become starting points for the full periodic families of solutions to trigonometric equations.

## Sources

The exposition, proofs, worked examples and exercises in this chapter are original. A further treatment of the standard definitions and compositions is OpenStax, *Algebra and Trigonometry 2e*, [8.3 Inverse Trigonometric Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/8-3-inverse-trigonometric-functions). For the identities used in the proofs, see [9.2 Sum and Difference Identities](https://openstax.org/books/algebra-and-trigonometry-2e/pages/9-2-sum-and-difference-identities). These primary-source pages were consulted on 13 November 2026; no passages or exercises have been copied.
