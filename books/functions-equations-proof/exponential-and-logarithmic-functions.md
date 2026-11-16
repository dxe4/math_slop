
# Exponential and Logarithmic Functions

## Motivation: growth, decay, and scale

Exponential processes appear whenever a quantity changes by a constant multiplicative factor over equal intervals: population growth, radioactive decay, compound interest, and signal attenuation all share this structure. The exponential function $x\mapsto a^{x}$ turns additive steps in the exponent into multiplicative changes in the output, making it the natural language for such phenomena.

Logarithms invert this relationship. Where exponentials turn addition into multiplication, logarithms turn multiplication into addition. This inversion is not merely a computational convenience; it is a structural fact about the bijectivity of the exponential function on restricted domains, and it underlies everything from slide rules to information theory.

This chapter defines the real exponential and logarithmic functions precisely, proves their core algebraic and analytic properties, and studies the domain obligations that arise when they are composed with other functions.

## The real exponential function

**Definition 2.1 (Exponential function, base $a$).** For a real number $a>0$ with $a\neq 1$, the exponential function with base $a$ is

$$\exp_{a}:\mathbb{R}\to(0,\infty),\qquad \exp_{a}(x)=a^{x}.$$

The restriction $a>0$ ensures $a^{x}$ is defined for all real $x$ (via continuity from rational powers), and $a\neq 1$ avoids the constant function.

**Theorem 2.2 (Algebraic properties).** For all $x,y\in\mathbb{R}$ and $a>0$:

1. $a^{x+y}=a^{x}a^{y}$;
2. $a^{xy}=(a^{x})^{y}$ when the right side is defined;
3. $(ab)^{x}=a^{x}b^{x}$ for $a,b>0$.

These properties are proved first for integer and rational exponents by induction and uniqueness of $n$th roots, then extended to real exponents by continuity.

**Theorem 2.3 (Monotonicity and bijectivity).** If $a>1$, then $\exp_{a}$ is strictly increasing and bijective from $\mathbb{R}$ onto $(0,\infty)$. If $0<a<1$, it is strictly decreasing and also bijective from $\mathbb{R}$ onto $(0,\infty)$.

**Proof.** For $a>1$ and $x<y$, write $y=x+\delta$ with $\delta>0$. Then $a^{y}=a^{x}a^{\delta}$. Since $a^{\delta}>1$ for $\delta>0$ (proved first for rational $\delta$ by comparing $n$th roots, then by continuity for real $\delta$), we have $a^{y}>a^{x}$. Thus $\exp_{a}$ is strictly increasing, hence injective. For surjectivity, given any $y>0$, the intermediate value theorem applied to the continuous function $f(x)=a^{x}-y$ on a sufficiently large interval $[-M,M]$ guarantees a solution to $a^{x}=y$ because $a^{x}\to 0$ as $x\to -\infty$ and $a^{x}\to\infty$ as $x\to\infty$. The case $0<a<1$ follows by writing $a^{x}=(1/a)^{-x}$. ∎

## The natural logarithm and general logarithms

Because $\exp_{a}$ is bijective from $\mathbb{R}$ onto $(0,\infty)$, it has a two-sided inverse.

**Definition 2.4 (Logarithm, base $a$).** For $a>0$, $a\neq 1$, the logarithm base $a$ is the unique function $\log_{a}:(0,\infty)\to\mathbb{R}$ satisfying

$$a^{\log_{a}(y)}=y\quad\text{for all}\quad y>0$$

and

$$\log_{a}(a^{x})=x\quad\text{for all}\quad x\in\mathbb{R}.$$

The **natural logarithm** $\ln:(0,\infty)\to\mathbb{R}$ is $\log_{e}$, where $e=\lim_{n\to\infty}(1+1/n)^{n}$. The number $e$ is irrational and approximately $2.71828$.

**Theorem 2.5 (Logarithm laws).** For $a>0$, $a\neq 1$, and $u,v>0$:

1. $\log_{a}(uv)=\log_{a}(u)+\log_{a}(v)$;
2. $\log_{a}(u^{v})=v\log_{a}(u)$ for $v\in\mathbb{R}$;
3. $\log_{a}(u)=\frac{\ln u}{\ln a}$ (change of base).

**Proof of (1).** Let $x=\log_{a}(u)$ and $y=\log_{a}(v)$, so $u=a^{x}$ and $v=a^{y}$. Then $uv=a^{x+y}$, and taking $\log_{a}$ of both sides gives $\log_{a}(uv)=x+y=\log_{a}(u)+\log_{a}(v)$. ∎

## Domain obligations in composition

Exponentials and logarithms impose strict domain requirements that propagate through compositions.

**Example.** Find the natural domain of $f(x)=\ln(x^{2}-4)$.

The logarithm requires a positive argument, so we need $x^{2}-4>0$, which factors as $(x-2)(x+2)>0$. This inequality holds when $x<-2$ or $x>2$. Therefore

$$\operatorname{dom}(f)=(-\infty,-2)\cup(2,\infty).$$

**Example.** Find the natural domain of $g(x)=\sqrt{\ln(x-1)}$.

The outer square root requires $\ln(x-1)\ge 0$, which means $x-1\ge e^{0}=1$, so $x\ge 2$. The inner logarithm also requires $x-1>0$, so $x>1$. The stricter condition is $x\ge 2$. Thus $\operatorname{dom}(g)=[2,\infty)$.

**Common error.** Replacing $\ln(x^{2})$ by $2\ln(x)$ silently shrinks the domain from $\mathbb{R}\setminus\{0\}$ to $(0,\infty)$. The correct identity is $\ln(x^{2})=2\ln|x|$ for $x\neq 0$.

## Exponential and logarithmic equations

**Example.** Solve $2^{x+1}=8^{x-1}$.

Write both sides with base $2$: $8=2^{3}$, so $8^{x-1}=2^{3(x-1)}=2^{3x-3}$. The equation becomes $2^{x+1}=2^{3x-3}$. Since $\exp_{2}$ is injective, we equate exponents:

$$x+1=3x-3\quad\Longrightarrow\quad 2x=4\quad\Longrightarrow\quad x=2.$$

Verification: $2^{2+1}=2^{3}=8$ and $8^{2-1}=8^{1}=8$. ∎

**Example.** Solve $\log_{2}(x)+\log_{2}(x-2)=3$.

Domain conditions: $x>0$ and $x-2>0$, so $x>2$. Using the product law, $\log_{2}(x(x-2))=3$, hence $x(x-2)=2^{3}=8$. This gives $x^{2}-2x-8=0$, so $(x-4)(x+2)=0$. The candidate solutions are $x=4$ and $x=-2$. Only $x=4$ satisfies $x>2$. Verification: $\log_{2}(4)+\log_{2}(2)=2+1=3$. ∎

## Common errors and how to avoid them

**Error: Applying logarithm laws outside the domain.** The identity $\log_{a}(uv)=\log_{a}(u)+\log_{a}(v)$ requires $u>0$ and $v>0$ individually. Writing $\log((-2)(-3))=\log(-2)+\log(-3)$ is nonsense because the right side involves logarithms of negative numbers.

**Error: Forgetting to check extraneous solutions.** When logarithmic equations are transformed using algebraic laws, the domain may expand. Always filter candidates through the original domain constraints.

**Error: Confusing $\log_{a}(x+y)$ with $\log_{a}(x)+\log_{a}(y)$.** Logarithms convert multiplication to addition, not addition to anything simple. In general, $\log_{a}(x+y)$ has no simpler form.

## Practice exercises

### Exercise 1
Find the natural domain of $f(x)=\ln(3-2x)$ and determine whether $f$ is injective on that domain.

**Solution.** We need $3-2x>0$, so $x<3/2$. The domain is $(-\infty,3/2)$. Since $\ln$ is strictly increasing and $3-2x$ is strictly decreasing, the composition $f$ is strictly decreasing, hence injective. ∎

### Exercise 2
Solve $3^{2x-1}=27^{x+2}$.

**Solution.** Write $27=3^{3}$, so $27^{x+2}=3^{3(x+2)}=3^{3x+6}$. Equating exponents gives $2x-1=3x+6$, so $x=-7$. Verification: $3^{2(-7)-1}=3^{-15}$ and $27^{-7+2}=27^{-5}=(3^{3})^{-5}=3^{-15}$. ∎

### Exercise 3
Solve $\log_{5}(x+1)-\log_{5}(x-1)=1$.

**Solution.** Domain: $x+1>0$ and $x-1>0$, so $x>1$. Using the quotient law, $\log_{5}\bigl(\frac{x+1}{x-1}\bigr)=1$, so $\frac{x+1}{x-1}=5$. Cross-multiplying: $x+1=5x-5$, giving $4x=6$, so $x=3/2$. This satisfies $x>1$. Verification: $\log_{5}(5/2)-\log_{5}(1/2)=\log_{5}(5)=1$. ∎

### Exercise 4
Prove that $\log_{a}(b)\cdot\log_{b}(a)=1$ for all $a,b>0$ with $a\neq 1$ and $b\neq 1$.

**Solution.** By the change-of-base formula, $\log_{a}(b)=\frac{\ln b}{\ln a}$ and $\log_{b}(a)=\frac{\ln a}{\ln b}$. Multiplying gives $\frac{\ln b}{\ln a}\cdot\frac{\ln a}{\ln b}=1$. ∎

### Exercise 5
Find all real $x$ such that $e^{2x}-5e^{x}+6=0$.

**Solution.** Substitute $u=e^{x}$ (so $u>0$). The equation becomes $u^{2}-5u+6=0$, which factors as $(u-2)(u-3)=0$. Thus $u=2$ or $u=3$, giving $e^{x}=2$ or $e^{x}=3$. Hence $x=\ln 2$ or $x=\ln 3$. Both are valid because $e^{x}>0$ for all real $x$. Verification: for $x=\ln 2$, $e^{2x}=4$ and $5e^{x}=10$, so $4-10+6=0$; similarly for $x=\ln 3$, $e^{2x}=9$ and $5e^{x}=15$, so $9-15+6=0$. ∎

## Looking forward and back

This chapter applied the typed-function framework from **Functions are typed assignments** to exponentials and logarithms, emphasizing how domain restrictions determine invertibility. In the next chapter, **Trigonometric Functions**, we encounter periodic functions that are not globally injective, so invertibility requires severe domain restriction to a single period. Later, in **Complex Functions**, we will see how the exponential function extends to the complex plane and becomes periodic in a new direction, fundamentally changing its injectivity properties.
