var e=`---
parent_id: book-precalculus
chapter_id: trigonometric-equations
title: "Trigonometric Equations"
level: secondary
license: "CC BY-SA 4.0"
---

# Trigonometric Equations

A rotating wheel can reach the same height twice in one revolution and repeat those heights on every later revolution. An equation describing its height therefore asks for more than one angle. The principal value of an inverse trigonometric function supplies a useful starting angle, but the geometry and period supply the rest.

For example, $\\arcsin(1/2)=\\pi/6$ does not say that $\\pi/6$ is the only solution of $\\sin x=1/2$. The angle $5\\pi/6$ has the same vertical coordinate, and adding $2\\pi$ to either angle preserves the sine. Solving the equation means describing every permitted input, rather than reporting one inverse-function output.

This chapter develops a systematic way to do that. We shall obtain complete integer families for the three basic functions, filter those families to requested intervals, and use algebra and identities to handle more complicated equations. At every stage we will distinguish a reversible step from one that might discard or introduce possible solutions.

Required preparation is [Sine, Cosine and Tangent](sine-cosine-tangent.md), [Trigonometric Identities](trigonometric-identities.md), and [Inverse Trigonometric Functions](inverse-trigonometric-functions.md). We also use ordinary factorisation and quadratic equations. All angles are real and measured in radians. The notation $k\\in\\mathbb Z$ means that $k$ may be any integer, positive, negative or zero; separate families may use their own integer choices.

## What counts as a complete solution?

**Definition 8.1 (Solution set and periodic family).** A solution of a trigonometric equation is a real input at which all its expressions are defined and the equality holds. The *solution set* contains every such input satisfying any additional interval restriction. A formula such as

$$
x=\\frac\\pi4+k\\pi,\\qquad k\\in\\mathbb Z,
$$

is a *periodic family*: it describes all angles obtained by adding integer multiples of the indicated spacing to the starting angle.

A family does not need to begin with a positive angle. The families $x=-\\pi/4+2k\\pi$ and $x=7\\pi/4+2k\\pi$ describe the same set, because replacing $k$ by $k+1$ converts one description into the other. This freedom is helpful when an inverse function gives a negative principal value. It also means that two apparently different lists may contain duplicates.

An identity and an equation have different purposes. The identity $\\sin^2x+\\cos^2x=1$ holds for every real input. The equation $\\sin x=\\cos x$ holds only at certain angles. An identity may replace part of an equation without changing its solution set, provided any domain restrictions are retained.

## The three basic families

**Theorem 8.2 (Complete solutions of the basic equations).** Let $a$ be real.

If $|a|\\le1$, set $\\alpha=\\arcsin a$. Then

$$
\\sin x=a
\\quad\\Longleftrightarrow\\quad
x=\\alpha+2k\\pi\\ \\text{or}\\ x=\\pi-\\alpha+2k\\pi,
\\qquad k\\in\\mathbb Z.
$$

If $|a|\\le1$, set $\\beta=\\arccos a$. Then

$$
\\cos x=a
\\quad\\Longleftrightarrow\\quad
x=\\beta+2k\\pi\\ \\text{or}\\ x=-\\beta+2k\\pi,
\\qquad k\\in\\mathbb Z.
$$

If $|a|>1$, the sine and cosine equations have no real solutions. For every real $a$, with $\\gamma=\\arctan a$,

$$
\\tan x=a
\\quad\\Longleftrightarrow\\quad
x=\\gamma+k\\pi,
\\qquad k\\in\\mathbb Z.
$$

*Proof.* Suppose first that $|a|\\le1$, so $\\sin\\alpha=a$. Using the difference identity,

$$
\\sin x-\\sin\\alpha
=2\\cos\\left(\\frac{x+\\alpha}{2}\\right)
\\sin\\left(\\frac{x-\\alpha}{2}\\right).
$$

A real product is zero exactly when at least one factor is zero. Sine vanishes precisely at integer multiples of $\\pi$, so the second factor gives $x-\\alpha=2k\\pi$. Cosine vanishes precisely at $\\pi/2+k\\pi$, so the first gives $x+\\alpha=\\pi+2k\\pi$. These are the two displayed families, and the same identity verifies every angle in them.

For cosine, use $\\cos\\beta=a$ and

$$
\\cos x-\\cos\\beta
=-2\\sin\\left(\\frac{x+\\beta}{2}\\right)
\\sin\\left(\\frac{x-\\beta}{2}\\right).
$$

The zeros of the two sine factors give $x=-\\beta+2k\\pi$ or $x=\\beta+2k\\pi$. Sine and cosine never leave $[-1,1]$, proving the no-solution statement for larger magnitudes.

For tangent, the original equation requires $\\cos x\\ne0$, and the principal angle $\\gamma$ also has nonzero cosine. On that domain,

$$
\\tan x-\\tan\\gamma=\\frac{\\sin(x-\\gamma)}{\\cos x\\cos\\gamma}.
$$

The difference is zero exactly when $x-\\gamma=k\\pi$. Conversely, each such angle has $\\cos x=(-1)^k\\cos\\gamma\\ne0$ and the correct tangent. Thus every listed angle is permitted, and there are no others. ∎

The unit circle explains the two-family pattern: a horizontal line usually meets the circle in two points, as does a vertical line. At an extreme value $1$ or $-1$, the two points merge. Accordingly, when $a=\\pm1$, the two sine families describe the same set; the same is true for the cosine families. These duplicates should be combined rather than counted twice. For $\\sin x=0$, the two families combine neatly into $x=k\\pi$.

## Filtering families to an interval

**Example 8.3 (Negative starting angles are useful).** Solve $\\sin x=-\\sqrt2/2$ for all real $x$, and then on $[-\\pi,2\\pi]$.

The principal angle is $\\alpha=-\\pi/4$. The theorem gives

$$
x=-\\frac\\pi4+2k\\pi
\\quad\\text{or}\\quad
x=\\frac{5\\pi}{4}+2k\\pi,
\\qquad k\\in\\mathbb Z.
$$

These are the full real solutions. For the first family, the interval condition is

$$
-\\pi\\le-\\frac\\pi4+2k\\pi\\le2\\pi,
$$

which reduces to $-3/8\\le k\\le9/8$. Its integer choices are $0,1$, giving $-\\pi/4$ and $7\\pi/4$. For the second family, the same calculation gives $-9/8\\le k\\le3/8$, so $k=-1,0$, giving $-3\\pi/4$ and $5\\pi/4$. In increasing order the interval solutions are

$$
-\\frac{3\\pi}{4},\\quad-\\frac\\pi4,\\quad
\\frac{5\\pi}{4},\\quad\\frac{7\\pi}{4}.
$$

Neither interval endpoint is a solution. Filtering each integer family makes completeness explicit and avoids relying on a sketch of just one revolution.

Closed and open endpoints must be handled literally. On $[0,2\\pi]$, the equation $\\cos x=1$ has the distinct real solutions $0$ and $2\\pi$. They represent the same point after one rotation, but are different inputs. On $[0,2\\pi)$, only $0$ remains. A repeated appearance of the *same number* from two families should be removed; two different numbers should not be merged merely because they represent the same direction.

**Example 8.4 (A changed angle changes the spacing).** Solve

$$
\\cos(2x-\\pi/3)=-\\frac12
$$

for all real $x$ and on $[0,2\\pi)$.

Set $u=2x-\\pi/3$. The basic cosine solutions are $u=2\\pi/3+2k\\pi$ or $u=-2\\pi/3+2k\\pi$. Solving each linear equation for $x$ gives

$$
x=\\frac\\pi2+k\\pi
\\quad\\text{or}\\quad
x=-\\frac\\pi6+k\\pi,
\\qquad k\\in\\mathbb Z.
$$

The spacing is $\\pi$, because the factor $2$ in the original angle halves the $2\\pi$ spacing. On the requested interval, the first family gives $\\pi/2,3\\pi/2$, while the second gives $5\\pi/6,11\\pi/6$. Thus the complete interval list is

$$
\\frac\\pi2,\\quad\\frac{5\\pi}{6},\\quad
\\frac{3\\pi}{2},\\quad\\frac{11\\pi}{6}.
$$

A useful alternative is to transform the interval as well: $0\\le x<2\\pi$ corresponds to $-\\pi/3\\le u<11\\pi/3$. Restricting $u$ to a single turn would lose solutions. In general, solve for the whole angle expression first and only then undo its linear transformation.

## Factorisation without losing branches

**Result 8.5 (Factoring and substitution).** If $F(x)$ and $G(x)$ are real and defined, then $F(x)G(x)=0$ is equivalent to $F(x)=0$ or $G(x)=0$. If a trigonometric equation is rewritten as $p(u)=0$ with $u=\\sin x$ or $u=\\cos x$, only algebraic roots $u\\in[-1,1]$ can produce real angles.

*Proof.* The product assertion is the zero-product property of real numbers. For substitution, every real angle gives a sine or cosine in $[-1,1]$, so an algebraic root outside that interval is impossible. For each root inside the interval, the basic solution theorem describes exactly the angles that map to it. Taking the union of those families proves both necessity and sufficiency. ∎

Dividing an equation by $F(x)$ is different from factoring it. Division is reversible only when $F(x)\\ne0$. If the original equation permits zeros of $F$, dividing without treating that case first discards potential solutions. Keeping a factored product and setting each factor to zero is usually the clearer approach.

**Example 8.6 (An algebraic root that is not a sine value).** Solve

$$
2\\sin^2x-5\\sin x+2=0.
$$

Let $u=\\sin x$, with $-1\\le u\\le1$. The quadratic factors as

$$
2u^2-5u+2=(2u-1)(u-2).
$$

Its algebraic roots are $1/2$ and $2$. The root $2$ is impossible for real sine, so only $\\sin x=1/2$ remains. Therefore

$$
x=\\frac\\pi6+2k\\pi
\\quad\\text{or}\\quad
x=\\frac{5\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb Z.
$$

On $[0,2\\pi)$ these give $\\pi/6$ and $5\\pi/6$. The discarded root is not an approximate possibility; it is ruled out exactly by the range of sine. Writing $\\arcsin2$ would not supply a real angle.

**Example 8.7 (A division that would lose solutions).** Solve $\\sin2x=\\sin x$ for all real $x$.

The double-angle identity gives $2\\sin x\\cos x=\\sin x$. Move everything to one side and factor:

$$
\\sin x(2\\cos x-1)=0.
$$

Thus $\\sin x=0$ or $\\cos x=1/2$. The complete solutions are

$$
x=k\\pi,
\\quad\\text{or}\\quad
x=\\frac\\pi3+2k\\pi,
\\quad\\text{or}\\quad
x=-\\frac\\pi3+2k\\pi,
\\qquad k\\in\\mathbb Z.
$$

On $[0,2\\pi)$ the list is $0,\\pi/3,\\pi,5\\pi/3$. Dividing the original equation by $\\sin x$ would have kept only the cosine branch and lost every solution $x=k\\pi$. These lost angles are easily checked in the original equation: both sides are zero.

## Original domains and irreversible steps

Equations involving tangent or fractions may exclude angles before any algebra begins. Write those restrictions first. A later polynomial or trigonometric equation may make sense at excluded angles, but the original one still does not. Simplifying an expression cannot fill a missing input.

**Example 8.8 (Clearing a denominator creates extra possible answers).** Solve

$$
\\frac{1-\\cos^2x}{\\sin x}=1.
$$

The original denominator requires $\\sin x\\ne0$, so $x\\ne k\\pi$. On that domain, use $1-\\cos^2x=\\sin^2x$ and multiply by $\\sin x$:

$$
\\sin^2x=\\sin x,
\\qquad
\\sin x(\\sin x-1)=0.
$$

The first branch, $\\sin x=0$, consists entirely of forbidden angles. The second branch gives

$$
x=\\frac\\pi2+2k\\pi,\\qquad k\\in\\mathbb Z.
$$

At these angles the original denominator is $1$, cosine is zero, and the original fraction is $1$. They are therefore all valid solutions. The domain condition both rejects the false branch and makes the denominator-clearing step reversible on permitted inputs.

Squaring also needs a final check. From $A=B$ we may deduce $A^2=B^2$, but the converse permits either $A=B$ or $A=-B$. Thus squaring $\\sin x=\\cos x$ admits angles where sine and cosine have opposite signs. The squared equation supplies possible solutions, not automatically the final set. If both sides were known nonnegative, squaring would be reversible; without that sign information, substitution in the original equation is essential.

Another danger is replacing $\\sqrt{\\sin^2x}$ by $\\sin x$. The correct real identity is $\\sqrt{\\sin^2x}=|\\sin x|$. An absolute value cannot be removed without deciding the sign. Domain and sign information belong alongside the algebra, rather than being added as an afterthought.

## Parameters and changes in the number of solutions

**Theorem 8.9 (A parameter multiplying sine).** Let $a,b$ be fixed real numbers. For the equation $a\\sin x=b$:

- If $a=0$ and $b=0$, every real angle is a solution.
- If $a=0$ and $b\\ne0$, there are no solutions.
- If $a\\ne0$ and $|b/a|>1$, there are no real solutions.
- If $a\\ne0$ and $|b/a|\\le1$, apply Theorem 8.2 with sine value $b/a$, merging duplicate families at values $1$ and $-1$.

*Proof.* When $a=0$, the equation is simply $0=b$, independent of $x$. When $a\\ne0$, dividing by that nonzero constant gives the equivalent equation $\\sin x=b/a$. The range restriction and complete families follow from Theorem 8.2. ∎

The zero case must come before dividing by a parameter. An expression such as $b/a$ is meaningless at $a=0$, and no later choice of inverse function repairs that omission. For a nonzero parameter, the range test should still precede inverse evaluation.

**Example 8.10 (Four solutions merge into two).** For a real parameter $\\lambda$, solve $\\sin^2x=\\lambda$ and describe the solutions on $[0,2\\pi)$.

Since $0\\le\\sin^2x\\le1$, there are no real solutions if $\\lambda<0$ or $\\lambda>1$. If $\\lambda=0$, sine is zero, so all real solutions are $x=k\\pi$; the interval solutions are $0,\\pi$. If $\\lambda=1$, sine is $1$ or $-1$, giving all real solutions $x=\\pi/2+k\\pi$ and interval solutions $\\pi/2,3\\pi/2$.

For $0<\\lambda<1$, set $\\alpha=\\arcsin\\sqrt\\lambda$, so $0<\\alpha<\\pi/2$. Taking both signs of the square root gives $\\sin x=\\sqrt\\lambda$ or $\\sin x=-\\sqrt\\lambda$. Combining their families gives

$$
x=\\alpha+k\\pi
\\quad\\text{or}\\quad
x=-\\alpha+k\\pi,
\\qquad k\\in\\mathbb Z.
$$

On $[0,2\\pi)$ these are the four distinct angles

$$
\\alpha,\\quad\\pi-\\alpha,\\quad\\pi+\\alpha,\\quad2\\pi-\\alpha.
$$

At $\\lambda=0$ or $1$, these descriptions would coincide in pairs, which explains why the number of distinct solutions decreases. Treating endpoints separately avoids duplicate counting. It also keeps $2\\pi$ out of an interval whose right endpoint is excluded.

The common method is now visible: establish the domain, reduce the equation by reversible algebra or clearly marked possible-solution steps, apply range constraints, write every periodic family, filter to any requested interval, and check the original equation. A calculator can approximate an inverse value when needed, but expressions such as $\\arcsin(2/3)$ are exact answers. Completeness comes from the families and the argument, not from the number of decimal places displayed.

## Exercises

### Exercise 8.1
<a id="trigonometric-equations-ex-1"></a>

Solve $\\sin x=-1/2$ for all real $x$, and list its solutions on $[0,2\\pi)$.

<details>
<summary>Hint 1</summary>

Start with the principal angle $\\arcsin(-1/2)$.

</details>
<details>
<summary>Hint 2</summary>

Use both sine families, then shift negative starting angles by a full turn when making the interval list.

</details>
<details>
<summary>Solution</summary>

The principal angle is $-\\pi/6$. Thus all solutions are $x=-\\pi/6+2k\\pi$ or $x=7\\pi/6+2k\\pi$, with $k\\in\\mathbb Z$. The first family contributes $11\\pi/6$ on the requested interval and the second contributes $7\\pi/6$. Hence the interval list is $7\\pi/6,11\\pi/6$. Both have sine $-1/2$, and the basic theorem accounts for all possible angles.

</details>

### Exercise 8.2
<a id="trigonometric-equations-ex-2"></a>

Solve $\\cos x=1$ for all real $x$ and on $[-2\\pi,2\\pi]$. Explain why the two interval endpoints must both appear, while two identical families should not be counted twice.

<details>
<summary>Hint 1</summary>

The principal arccosine of $1$ is zero.

</details>
<details>
<summary>Hint 2</summary>

The two cosine families coincide here; filter the resulting single family using the closed interval.

</details>
<details>
<summary>Solution</summary>

The families $0+2k\\pi$ and $-0+2k\\pi$ are identical, so the full solution is $x=2k\\pi$, $k\\in\\mathbb Z$. On the interval, $-1\\le k\\le1$, giving $-2\\pi,0,2\\pi$. The endpoints are different real numbers and are both included by the interval. Duplicate descriptions of one number are removed, but distinct inputs separated by full turns remain distinct solutions.

</details>

### Exercise 8.3
<a id="trigonometric-equations-ex-3"></a>

Solve $\\tan(3x+\\pi/4)=1$ for all real $x$ and on $[0,2\\pi)$. Check that the resulting angles avoid the undefined inputs of the original tangent.

<details>
<summary>Hint 1</summary>

Solve for the entire angle $3x+\\pi/4$ using tangent's period $\\pi$.

</details>
<details>
<summary>Hint 2</summary>

After solving the linear equation for $x$, the interval condition becomes a restriction on its integer parameter.

</details>
<details>
<summary>Solution</summary>

We need $3x+\\pi/4=\\pi/4+k\\pi$, hence $x=k\\pi/3$, $k\\in\\mathbb Z$. On $[0,2\\pi)$, the integers are $k=0,1,2,3,4,5$, giving $0,\\pi/3,2\\pi/3,\\pi,4\\pi/3,5\\pi/3$. At every such angle the tangent input is $\\pi/4+k\\pi$, whose cosine is $(-1)^k/\\sqrt2\\ne0$. Thus all candidates lie in the original domain. The spacing is $\\pi/3$, not $\\pi$.

</details>

### Exercise 8.4
<a id="trigonometric-equations-ex-4"></a>

Solve $\\cos2x=0$ for all real $x$ and on $[-\\pi/2,\\pi/2]$.

<details>
<summary>Hint 1</summary>

Cosine vanishes at $\\pi/2+k\\pi$.

</details>
<details>
<summary>Hint 2</summary>

Divide the entire angle equation, including its integer term, by $2$.

</details>
<details>
<summary>Solution</summary>

From $2x=\\pi/2+k\\pi$ we obtain $x=\\pi/4+k\\pi/2$, $k\\in\\mathbb Z$. Filtering gives $-3/2\\le k\\le1/2$, so $k=-1,0$. The interval solutions are $-\\pi/4$ and $\\pi/4$. At either endpoint $x=\\pm\\pi/2$, the cosine input is $\\pm\\pi$ and its value is $-1$, so neither endpoint is a solution despite being included in the requested interval.

</details>

### Exercise 8.5
<a id="trigonometric-equations-ex-5"></a>

Solve $4\\sin^2x-1=0$ for all real $x$ and on $[0,2\\pi)$.

<details>
<summary>Hint 1</summary>

Factor the expression as a difference of squares in $\\sin x$.

</details>
<details>
<summary>Hint 2</summary>

Both values $1/2$ and $-1/2$ are permitted sine values, so both branches are needed.

</details>
<details>
<summary>Solution</summary>

The factorisation $(2\\sin x-1)(2\\sin x+1)=0$ gives $\\sin x=1/2$ or $\\sin x=-1/2$. A combined description is $x=\\pi/6+k\\pi$ or $x=5\\pi/6+k\\pi$, $k\\in\\mathbb Z$. Shifting by $\\pi$ changes the sign of sine, so these families contain both branches. On $[0,2\\pi)$ the solutions are $\\pi/6,5\\pi/6,7\\pi/6,11\\pi/6$. Taking only the positive square root would omit the last two.

</details>

### Exercise 8.6
<a id="trigonometric-equations-ex-6"></a>

Solve $\\sin x\\cos x=\\sin x$ for all real $x$. A learner divides by $\\sin x$ and reports only the solutions of $\\cos x=1$. Explain what is wrong with that argument.

<details>
<summary>Hint 1</summary>

Move all terms to one side and factor before dividing.

</details>
<details>
<summary>Hint 2</summary>

Compare the cosine branch with the family obtained from the sine factor; one branch is contained in the other.

</details>
<details>
<summary>Solution</summary>

The equation is equivalent to $\\sin x(\\cos x-1)=0$. The sine branch gives $x=k\\pi$, while the cosine branch gives $x=2k\\pi$. The second set is contained in the first, so all solutions are simply $x=k\\pi$, $k\\in\\mathbb Z$. The learner's reported equation $\\cos x=1$ gives only the even multiples of $\\pi$, omitting every odd multiple $(2k+1)\\pi$. More fundamentally, the division was unjustified at every original solution, since all of them have $\\sin x=0$. If one correctly restricts that divided branch to $\\sin x\\ne0$, it has no solutions at all: $\\cos x=1$ forces sine to be zero. All original solutions must therefore be recovered from the zero-factor case.

</details>

### Exercise 8.7
<a id="trigonometric-equations-ex-7"></a>

Solve $\\sin x/(1-\\cos x)=0$ for all real $x$. Explain why not every zero of sine is a solution.

<details>
<summary>Hint 1</summary>

Record the denominator restriction before applying the rule for a zero fraction.

</details>
<details>
<summary>Hint 2</summary>

For $x=k\\pi$, determine when cosine is $1$ and when it is $-1$.

</details>
<details>
<summary>Solution</summary>

The denominator requires $\\cos x\\ne1$, excluding $x=2k\\pi$. A permitted fraction equals zero exactly when its numerator is zero, so first obtain $x=k\\pi$. The even multiples are forbidden, while the odd multiples have denominator $1-(-1)=2$ and numerator zero. Therefore all solutions are $x=\\pi+2k\\pi$, $k\\in\\mathbb Z$. The zeros at full turns would produce an undefined fraction, not the value zero.

</details>

### Exercise 8.8
<a id="trigonometric-equations-ex-8"></a>

A learner squares $\\sin x=\\cos x$ and claims all angles $x=\\pi/4+k\\pi/2$ solve the original equation. Correct the argument, giving all real solutions and the solutions on $[0,2\\pi)$.

<details>
<summary>Hint 1</summary>

Squaring cannot distinguish equal values from values of opposite signs.

</details>
<details>
<summary>Hint 2</summary>

In the original equation cosine cannot be zero. Divide by it only after justifying that fact.

</details>
<details>
<summary>Solution</summary>

If cosine were zero, sine would be $1$ or $-1$, so equality would be impossible. We may therefore divide the original equation by cosine to get $\\tan x=1$. Its complete solutions are $x=\\pi/4+k\\pi$, $k\\in\\mathbb Z$, giving $\\pi/4,5\\pi/4$ on the interval. The squared equation also permits $\\sin x=-\\cos x$, producing the extra angles $3\\pi/4+k\\pi$. These must be rejected in the original equation. For example, at $3\\pi/4$ sine is positive and cosine is negative.

</details>

### Exercise 8.9
<a id="trigonometric-equations-ex-9"></a>

For a real parameter $p$, classify all real solutions of $p\\cos x=2$. Include all parameter cases and give periodic families whenever solutions exist.

<details>
<summary>Hint 1</summary>

Handle $p=0$ before dividing, then compare $|2/p|$ with the cosine range.

</details>
<details>
<summary>Hint 2</summary>

The endpoint parameters $p=2$ and $p=-2$ yield merged cosine families.

</details>
<details>
<summary>Solution</summary>

At $p=0$ the equation says $0=2$, so there are no solutions. If $0<|p|<2$, then $|2/p|>1$, again giving no real solutions. At $p=2$, we require $\\cos x=1$, so $x=2k\\pi$. At $p=-2$, we require $\\cos x=-1$, so $x=\\pi+2k\\pi$. If $|p|>2$, define $\\beta=\\arccos(2/p)$; then $0<\\beta<\\pi$ and all solutions are $x=\\beta+2k\\pi$ or $x=-\\beta+2k\\pi$. In all families $k\\in\\mathbb Z$. The strict inequality on $|p|$ keeps the two generic families distinct.

</details>

### Exercise 8.10
<a id="trigonometric-equations-ex-10"></a>

Solve $\\sin2x=\\cos x$ for all real $x$ and on $[0,2\\pi)$. Give an argument that includes any solutions where cosine vanishes.

<details>
<summary>Hint 1</summary>

Use the sine double-angle identity and bring the cosine term to the same side.

</details>
<details>
<summary>Hint 2</summary>

Factor out cosine rather than dividing by it; solve both resulting branches.

</details>
<details>
<summary>Solution</summary>

The equation becomes $2\\sin x\\cos x-\\cos x=0$, or $\\cos x(2\\sin x-1)=0$. Thus $\\cos x=0$ or $\\sin x=1/2$. All real solutions are

$$
x=\\frac\\pi2+k\\pi,
\\quad\\text{or}\\quad
x=\\frac\\pi6+2k\\pi,
\\quad\\text{or}\\quad
x=\\frac{5\\pi}{6}+2k\\pi,
\\qquad k\\in\\mathbb Z.
$$

On $[0,2\\pi)$ these give $\\pi/6,\\pi/2,5\\pi/6,3\\pi/2$. At the cosine-zero angles, the original left side is also zero, so they are valid and must not be discarded by division. Factorisation is equivalent to the original equation for every real input, establishing completeness.

</details>

## Summary

A principal inverse value is the starting point for a complete trigonometric solution, while symmetry and period supply the full integer families. Sine and cosine generally give two families, with duplicates at their extreme values; tangent gives one family with period $\\pi$. Filter the families carefully to an interval, respecting its endpoints. Factorisation preserves zero branches that division might lose, and a substitution such as $u=\\sin x$ carries the constraint $-1\\le u\\le1$. Original denominator restrictions and checks after squaring reject impossible answers. Parameter problems require zero and range cases before inverse evaluation. In [Complex Numbers and Polar Form](complex-numbers-polar-form.md), angles and their periodic descriptions will also locate numbers in the plane.

## Sources

The exposition, proofs, worked examples and exercises in this chapter are original. For another treatment of the standard methods, see OpenStax, *Algebra and Trigonometry 2e*, [9.5 Solving Trigonometric Equations](https://openstax.org/books/algebra-and-trigonometry-2e/pages/9-5-solving-trigonometric-equations) and [8.3 Inverse Trigonometric Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/8-3-inverse-trigonometric-functions). These primary-source pages were consulted on 13 November 2026; no passages or exercises have been copied.
`;export{e as default};