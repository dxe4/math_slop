var e=`---
id: deep-dive-complex-numbers
title: "Why Complex Numbers Are Geometric"
license: CC BY-SA 4.0
---

# Why Complex Numbers Are Geometric

**Before reading.** Read [Negative Numbers](../books/number-and-arithmetic/negative-numbers.md) and [Powers and Roots](../books/number-and-arithmetic/powers-roots.md). These are preparation for the ideas used below.

The symbol $i$, defined by $i^{2}=-1$, is often introduced as an algebraic repair that lets $x^{2}+1=0$ have solutions. That is true but undersells the idea. Complex multiplication is a compact language for scaling and rotating the plane.

## From ordered pairs to arithmetic

Write a complex number as $z=x+iy$, corresponding to the point or vector $(x,y)$.

Addition is componentwise:

$$(x+iy)+(u+iv)=(x+u)+i(y+v)$$

Geometrically this is vector addition. Multiplication follows ordinary expansion plus $i^{2}=-1$:

$$(x+iy)(u+iv)=(xu-yv)+i(xv+yu)$$

In coordinate form, multiplication by fixed $a+ib$ sends

$$(x,y) \\to (ax-by, bx+ay)$$

Its matrix is $\\begin{pmatrix}a&-b\\\\b&a\\end{pmatrix}$. The two columns are perpendicular and have equal length $\\sqrt{a^{2}+b^{2}}$. For a nonzero multiplier, this linear map scales all lengths uniformly and rotates without reflection. Multiplication by zero collapses the whole plane to one point.

### What complex numbers are not

A complex number is not merely a pair of real numbers. The pair $(3,4)$ could name a point, a vector, or an interval. The complex number $3+4i$ carries an extra operation---multiplication with the rule $i^{2}=-1$---that gives it geometric meaning. Without that rule, $(x,y)\\cdot(u,v)=(xu,yv)$ would be componentwise multiplication, which has no rotational interpretation.

To see why componentwise multiplication has different geometry, multiply $(1,2)$ by $(3,4)$ in that style: you get $(3,8)$. The first coordinate scales by 3, the second by 4. A unit square becomes a 3-by-4 rectangle, and angles of other lines generally change. Complex multiplication by a nonzero number, by contrast, applies the same scale factor $\\sqrt{a^{2}+b^{2}}$ in every direction and rotates every vector by the same angle. It is a similarity transformation; a general coordinatewise scaling need not be one.

Complex numbers also cannot be ordered in a way that respects addition and multiplication. For suppose $i>0$. Multiplying by $i$ gives $i^{2}=-1>0$, a contradiction. If $i<0$, multiplying by the negative number $i$ reverses the inequality, giving $-1>0$ again. So statements like "$z<w$" are undefined unless both are real. This is not a limitation to overcome; it is a structural fact. The plane has no natural linear ordering because it has more than one dimension.

## Polar form exposes the geometry

Let

$$r=|z|=\\sqrt{x^{2}+y^{2}}$$

and let $\\theta=\\arg(z)$ be an angle from the positive real axis. Then

$$z=r(\\cos\\theta+i \\sin\\theta)$$

Multiply $z_1=r_1(\\cos\\theta_1+i \\sin\\theta_1)$ and $z_2=r_2(\\cos\\theta_2+i \\sin\\theta_2)$. Angle-addition formulas give

$$z_1 z_2=r_1 r_2[\\cos(\\theta_1+\\theta_2)+i \\sin(\\theta_1+\\theta_2)]$$

Complex multiplication multiplies magnitudes and adds angles.

- Multiplication by $i$ rotates 90 degrees.
- Multiplication by $-1$ rotates 180 degrees.
- Multiplication by $2i$ doubles lengths and rotates 90 degrees.
- Multiplication by a unit complex number performs a pure rotation.

## Euler's formula

The exponential series is

$$e^{z} = 1+z+z^{2}/2!+z^{3}/3!+\\ldots$$

Set $z=i\\theta$. Even powers contribute real terms and odd powers imaginary terms:

$$e^{i\\theta} = (1-\\theta^{2}/2!+\\theta^{4}/4!-\\ldots) + i(\\theta-\\theta^{3}/3!+\\theta^{5}/5!-\\ldots)$$

$$= \\cos\\theta+i \\sin\\theta$$

Thus polar form becomes $z=re^{i\\theta}$, and the law $e^{a} e^{b}=e^{a+b}$ becomes the rotation rule.

The identity $e^{i\\pi}+1=0$ is not a numerical coincidence. A half-turn from 1 lands at -1.

## Roots become evenly spaced geometry

Solve $z^{n}=1$. In polar form, $|z|^{n}=1$, so $|z|=1$, and the angle must satisfy $n\\theta=2\\pi k$. Hence

$$z_{k}=e^{2\\pi ik/n}, \\text{ for } k=0,\\ldots,n-1.$$

The nth roots of unity are vertices of a regular n-gon on the unit circle. Their sum is zero for $n>1$: rotational symmetry leaves no preferred direction. Algebraically, the roots other than 1 are precisely the zeros of $1+z+\\ldots+z^{n-1}$, since $z^n-1=(z-1)(1+z+\\ldots+z^{n-1})$.

More generally, $z^{n}=re^{i\\phi}$ has roots

$$r^{1/n}e^{i(\\phi+2\\pi k)/n}$$

Every nonzero complex number has exactly $n$ nth roots when counted distinctly for this equation.

### Worked example: cube roots of $-8i$

Write $-8i$ in polar form. Its magnitude is $8$ and its angle is $-\\pi/2$ (or $3\\pi/2$). The cube roots have magnitude $8^{1/3}=2$ and angles

$$\\frac{-\\pi/2 + 2\\pi k}{3} \\quad \\text{for } k=0,1,2$$

This gives angles $-\\pi/6$, $\\pi/2$, and $7\\pi/6$. The three roots are

- $z_0 = 2(\\cos(-\\pi/6)+i\\sin(-\\pi/6)) = \\sqrt{3}-i$
- $z_1 = 2(\\cos(\\pi/2)+i\\sin(\\pi/2)) = 2i$
- $z_2 = 2(\\cos(7\\pi/6)+i\\sin(7\\pi/6)) = -\\sqrt{3}-i$

Plotting these confirms they form an equilateral triangle inscribed in the circle of radius 2.

## Conjugation and division

The conjugate of $z=x+iy$ is $\\bar{z}=x-iy$, reflection across the real axis. Then

$$z \\bar{z}=x^{2}+y^{2}=|z|^{2}$$

To divide by nonzero $w$, multiply numerator and denominator by $\\bar{w}$:

$$z/w = z \\bar{w} / |w|^{2}$$

Geometrically, division subtracts arguments and divides magnitudes. Algebraically, the conjugate clears the imaginary part from the denominator, turning division into multiplication by a real scalar.

### Worked example: dividing complex numbers

Compute $(1+2i)/(3-i)$. Multiply numerator and denominator by $3+i$:

$$\\frac{(1+2i)(3+i)}{(3-i)(3+i)} = \\frac{3+i+6i+2i^{2}}{9+1} = \\frac{1+7i}{10} = \\frac{1}{10}+\\frac{7}{10}i$$

The denominator becomes $3^{2}+1^{2}=10$, a real number, so the result is automatically in standard form.

## Common errors and repairs

- **Treating $|z+w|$ as $|z|+|w|$:** The triangle inequality says $|z+w|\\leq|z|+|w|$. For nonzero $z,w$, equality holds when they point in the same direction; equality also holds if either is zero. For $z=1$ and $w=i$, the left side is $\\sqrt{2}$ while the right side is $2$.
- **Writing $z<w$ for nonreal $z$ or $w$:** Complex numbers have no compatible order. Comparisons require real numbers.
- **Forgetting the periodicity of argument:** The equation $\\arg(z)=\\theta$ has infinitely many solutions differing by $2\\pi$. When solving $z^{n}=w$, all $n$ roots must be listed.
- **Dividing without conjugating:** Writing $\\frac{1}{1+i}=1+i$ is wrong. The correct calculation gives $\\frac{1-i}{2}$.

## Complex functions deform grids

A function $f(z)$ maps the plane to itself. Watching a grid deform reveals structure.

### Squaring

$f(z)=z^{2}$ doubles angles and squares radii. Every nonzero output has two square roots, one the negative of the other, so the map is two-to-one away from zero. The open right half-plane maps onto the plane with the nonpositive real axis removed: doubling angles in $(-\\pi/2,\\pi/2)$ gives angles in $(-\\pi,\\pi)$. Near zero, scale shrinks strongly; far away, it grows strongly.

### Reciprocal

$f(z)=1/z$ inverts radius and negates angle. Circles through the origin map to lines; small neighborhoods near zero explode toward infinity.

### Exponential

$e^{x+iy}=e^{x}(\\cos y+i \\sin y)$. Horizontal motion changes magnitude; vertical motion changes angle. Because adding $2\\pi i$ changes nothing, horizontal strips wrap around the punctured plane.

## Why complex differentiability is rigid

For a real function, a derivative compares approach along one line. In the complex plane, $h\\to 0$ from every direction. The quotient

$$[f(z+h)-f(z)]/h$$

must converge to one complex number regardless of direction.

Write $f(x+iy)=u(x,y)+iv(x,y)$. Comparing horizontal and vertical approaches yields the Cauchy-Riemann equations

$$u_{x}=v_{y}, \\quad u_{y}=-v_{x}.$$

These say the local derivative matrix has the special form $\\begin{pmatrix}a&-b\\\\b&a\\end{pmatrix}$: a rotation plus uniform scaling when the derivative is nonzero. Holomorphic maps preserve angles locally at such points; this is conformality. A zero derivative needs separate analysis.

The function $f(z)=\\bar{z}$ fails this test. Its derivative matrix is $\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$, which reflects rather than rotates. That is why it is not complex differentiable anywhere, even though it is perfectly smooth as a real function.

## Iteration and fractals

Iterate $z_{n+1}=z_{n}^{2}+c$. The Mandelbrot set consists of parameters $c$ for which the orbit starting at $z_0=0$ remains bounded. A simple escape fact makes computation possible: once $|z_{n}|>2$, the orbit diverges.

The boundary is intricate because tiny parameter changes can move an orbit between attracting behavior and escape. The image is a map of dynamical stability, not decorative randomness.

## Application: rotating in two dimensions

In computer graphics and robotics, rotating a point $(x,y)$ by angle $\\theta$ uses the same matrix as multiplication by $e^{i\\theta}$:

$$\\begin{pmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}$$

Representing the point as $x+iy$ and multiplying by $e^{i\\theta}$ packages the same real arithmetic into one geometric operation; ordinary complex multiplication still uses real arithmetic. Composing two rotations becomes multiplying two complex numbers---adding angles and multiplying magnitudes---without rederiving the angle-addition identities each time.

For example, to rotate $(3,4)$ by $60^{\\circ}$, write $z=3+4i$ and multiply by $\\cos 60^{\\circ}+i\\sin 60^{\\circ}=\\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$. The product is

$$\\left(\\frac{3}{2}-2\\sqrt{3}\\right)+i\\left(2+\\frac{3\\sqrt{3}}{2}\\right)$$

giving the rotated point directly.

## Connections and next steps

Complex numbers unify ideas from several fields. The rotation-plus-scaling matrix appears in linear algebra as a special orthogonal transformation. The angle-addition formulas are the trigonometric face of Euler's formula. The Cauchy-Riemann equations bridge multivariable calculus and geometry.

Looking forward, complex analysis studies integration along paths in the plane, residue calculus computes difficult real integrals, and conformal maps solve boundary-value problems in physics and engineering. The Mandelbrot set is an entry point to dynamical systems. All of these rest on the single geometric fact that complex multiplication scales and rotates.

## Exercises

<a id="deep-dive-complex-numbers-ex-1"></a>

### Exercise 1

1. Show multiplication by $(1+i)/\\sqrt{2}$ is a 45-degree rotation.

<details>
<summary>Hint 1</summary>

A complex multiplier acts by scaling its modulus and adding its argument.
</details>

<details>
<summary>Hint 2</summary>

Compute the modulus and angle of the given factor; a unit modulus leaves only a rotation.
</details>

<details>
<summary>Solution</summary>

The multiplier has modulus $\\sqrt{1^2+1^2}/\\sqrt2=1$ and argument $\\pi/4$. Multiplication therefore preserves every distance from the origin and adds $\\pi/4$ to every nonzero point’s argument: it is a 45-degree rotation.

</details>

<a id="deep-dive-complex-numbers-ex-2"></a>

### Exercise 2

2. Find all cube roots of $-8$ and plot them.

<details>
<summary>Hint 1</summary>

Write negative eight with magnitude eight and an argument of pi.
</details>

<details>
<summary>Hint 2</summary>

Cube roots divide the magnitude exponent and use all angles obtained from pi plus full turns.
</details>

<details>
<summary>Solution</summary>

Write $-8=8e^{i\\pi}$. Its cube roots are $2e^{i(\\pi+2\\pi k)/3}$ for $k=0,1,2$: $1+i\\sqrt3$, $-2$, and $1-i\\sqrt3$. All lie on the circle of radius 2, at angles separated by $2\\pi/3$.

</details>

### Further exercises

3. Describe the image under $z^{2}$ of a ray with fixed angle $\\theta$.
4. Show $|zw|=|z||w|$ using conjugates.
5. For $f(z)=\\bar{z}$, compare the difference quotient along real and imaginary increments to show it is not complex differentiable anywhere.
6. Compute $(1+i)^{10}$ using polar form and verify by binomial expansion.

Answers:

(3) a ray at angle $2\\theta$, with radius squared; (4) square both sides using $zw\\cdot \\overline{zw}=z \\bar{z} w \\bar{w}$; (5) quotients are 1 along real increments and -1 along imaginary increments; (6) $32i$.


## Why roots form a regular polygon

Write a nonzero complex number as $w=re^{i\\theta}$, where $r>0$. If $z^n=w$, its magnitude must satisfy $|z|^n=r$, so $|z|=r^{1/n}$. Its angle must satisfy $n\\phi=\\theta+2\\pi k$ for some integer $k$, because angles that differ by a whole turn describe the same direction. Thus the distinct roots are

$$z_k=r^{1/n}e^{i(\\theta+2\\pi k)/n},\\qquad k=0,1,\\ldots,n-1.$$

They lie at equally spaced angles on one circle. This is a theorem about the geometry of multiplication, not a mysterious extra rule for solving polynomial equations. For $w=-8=8e^{i\\pi}$ and $n=3$, the roots have radius 2 and angles $\\pi/3,\\pi,5\\pi/3$. Cubing any one triples its angle to an odd multiple of $\\pi$ and cubes its radius to 8.

The formula uses $w\\ne0$. When $w=0$, the only root is $z=0$, repeated $n$ times algebraically. A picture of $n$ distinct vertices would be false in that case.

## The angle seam and the logarithm

An angle has many numerical names: $\\theta$ and $\\theta+2\\pi k$ describe the same ray. To print one angle per nonzero complex number, we choose a *branch*, often $-\\pi<\\operatorname{Arg}z\\le\\pi$. That choice places a seam on the negative real axis. As a point crosses the seam, the printed angle jumps by almost $2\\pi$ even though the point moves continuously.

This matters for the principal complex logarithm, $\\operatorname{Log}z=\\ln|z|+i\\operatorname{Arg}z$. It is tempting to import the real identity $\\log(ab)=\\log a+\\log b$ without qualification. But with the chosen principal angle, $\\operatorname{Log}(-1)=i\\pi$, so two copies sum to $2\\pi i$, while $\\operatorname{Log}((-1)(-1))=\\operatorname{Log}(1)=0$. The values differ by a whole turn, $2\\pi i$. A continuously chosen logarithm can obey local rules on suitable regions, but no single-valued continuous logarithm exists on the entire punctured plane. The obstruction is the possibility of walking once around zero.

### Try it

1. Find the fourth roots of $16$ and explain their arrangement without expanding a polynomial.
2. Why does the root-polygon formula have only one distinct point when $w=0$?
3. Compute $\\operatorname{Log}((-i)(-i))$ and compare it with $2\\operatorname{Log}(-i)$ using $-\\pi<\\operatorname{Arg}z\\le\\pi$.

**Answers.** (1) They have radius 2 and angles $0,\\pi/2,\\pi,3\\pi/2$: $2,2i,-2,-2i$, the vertices of a square. (2) The magnitude equation forces $|z|=0$, so $z=0$; angle is undefined at zero and cannot create other roots. (3) $(-i)^2=-1$, so the principal logarithm is $i\\pi$. But $\\operatorname{Log}(-i)=-i\\pi/2$, so twice that is $-i\\pi$. The difference is $2\\pi i$, exactly one full turn in angle. If these answers seem like arbitrary exceptions, draw the roots and trace a path around the origin: the geometry reveals where the printed angle must jump.
`;export{e as default};