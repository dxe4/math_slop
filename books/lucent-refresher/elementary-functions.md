# Trigonometric, exponential, and logarithmic functions

Use this summary to choose a full chapter in [Precalculus](#/books/precalculus) or [Algebra and Functions](#/books/algebra-and-functions). Allow about five minutes to read, then 15–25 minutes for the five retained exercises and comparison. Book study takes additional time; these are planning estimates, and self-checkmarks are not grades.

## Radians and the unit circle

Radians measure arc length divided by radius: a full turn is $2\pi$, so $\pi$ radians equals 180 degrees. The unit-circle point is $(\cos\theta,\sin\theta)$, giving $\cos^2\theta+\sin^2\theta=1$, $\cos(-\theta)=\cos\theta$, and $\sin(-\theta)=-\sin\theta$. Both functions repeat after $2\pi$. Tangent is $\sin\theta/\cos\theta$, undefined at $\theta=\pi/2+k\pi$ for integers $k$.

For example, $\sin x=1/2$ has solutions $\pi/6$ and $5\pi/6$ in $[0,2\pi)$; add $2k\pi$ to either family for all real solutions. Use [Radians and the Unit Circle](../precalculus/radians-unit-circle.md), [Sine, Cosine, and Tangent](../precalculus/sine-cosine-tangent.md), and [Trigonometric Equations](../precalculus/trigonometric-equations.md) for derivations and practice.

## Frequency and amplitude

For $A\sin(bx)$ with $b\ne0$, the amplitude is $|A|$ and $2\pi/|b|$ is a period. It is the smallest positive period when $A\ne0$. If $A=0$, the function is constant and has every positive period, with no smallest one. Predict why doubling positive $b$ doubles the number of oscillations in the same window.

```mathviz
scene "Compare oscillations";
domain -6.283185 6.283185;
range -1.5 1.5;
param b = 1 from 0.5 to 3;
fn f(x) = sin(b*x);
fn g(x) = sin(x);
plot f color blue;
plot g color orange;
```

The window approximates $[-2\pi,2\pi]$; the exact period remains $2\pi/|b|$. Calculus uses radian inputs for its usual trigonometric derivative formulas. See [Transformations of Graphs](../precalculus/graph-transformations.md) for reciprocal horizontal scaling.

## Exponentials and logarithms

The strictly increasing exponential $e^x$ maps $\mathbb R$ onto $(0,\infty)$; its inverse $\ln x$ has domain $(0,\infty)$. Thus $\ln(e^x)=x$ for every real $x$, while $e^{\ln x}=x$ requires $x>0$. For $a,b>0$, exponent laws give $\ln(ab)=\ln a+\ln b$ and $\ln(a/b)=\ln a-\ln b$. There is no corresponding sum law: at $a=b=1$, $\ln(a+b)=\ln2\ne0$. Also $\ln(x^2)=2\ln|x|$ for $x\ne0$.

The equation $e^{2x}=5$ gives $x=(\ln5)/2$. For $\ln(x-1)+\ln(x+1)=\ln3$, require $x>1$ before combining to get $x^2-1=3$; of the candidates $\pm2$, only two is allowed. Use [Exponential Functions](../algebra-and-functions/exponential-functions.md) and [Logarithms](../algebra-and-functions/logarithms.md) for full treatments.

## Exercises

1. Convert 150 degrees to radians and evaluate its sine.
2. Find all solutions of cos x = 0 on [0,2π].
3. State the amplitude and smallest positive period of −3 sin(2x).
4. Solve ln(x − 2) = 0 and justify the domain restriction.
5. Simplify ln(e³√a) for a > 0.

<details>
<summary>Hints and solutions</summary>

1. Multiply by $\pi/180$: the angle is $5\pi/6$. Its sine is $1/2$ by unit-circle symmetry.
2. Cosine is the horizontal coordinate, zero at $\pi/2$ and $3\pi/2$. Neither endpoint is a solution.
3. The amplitude is three and the smallest positive period is $2\pi/2=\pi$. The negative coefficient reflects the graph vertically.
4. Require $x>2$. Exponentiating gives $x-2=e^0=1$, so $x=3$, which is allowed and gives $\ln1=0$.
5. Positivity of $a$ permits the product and power laws: $\ln(e^3\sqrt a)=\ln(e^3)+\ln(a^{1/2})=3+\tfrac12\ln a$.

</details>
