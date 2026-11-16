var e=`---
parent_id: book-functions-equations-proof
chapter_id: complex-functions
title: "Complex Functions"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Complex Functions

## Motivation: closing algebraic gaps

The real numbers are insufficient for solving even simple polynomial equations: $x^{2}+1=0$ has no real solution. By introducing a new number $i$ with $i^{2}=-1$, we obtain the **complex numbers** $\\mathbb{C}=\\{a+bi:a,b\\in\\mathbb{R}\\}$. This extension does more than add roots of quadratics; it guarantees that every nonconstant polynomial has a root, and it reveals deep connections between exponential growth and circular motion.

This chapter defines complex functions of a complex variable, studies the complex exponential and its relationship to trigonometric functions, and proves the fundamental theorem of algebra. We assume familiarity with the real exponential and trigonometric functions from the preceding chapters.

## The complex plane and arithmetic

**Definition 4.1 (Complex number).** A complex number is an expression $z=a+bi$ where $a,b\\in\\mathbb{R}$ and $i^{2}=-1$. The **real part** is $\\operatorname{Re}(z)=a$ and the **imaginary part** is $\\operatorname{Im}(z)=b$.

**Definition 4.2 (Modulus and argument).** The **modulus** of $z=a+bi$ is $|z|=\\sqrt{a^{2}+b^{2}}$. If $z\\neq 0$, the **argument** $\\arg(z)$ is the angle $\\theta$ such that $a=|z|\\cos\\theta$ and $b=|z|\\sin\\theta$, measured from the positive real axis.

**Definition 4.3 (Complex conjugate).** The conjugate of $z=a+bi$ is $\\overline{z}=a-bi$.

**Theorem 4.4 (Properties of conjugation).** For all $z,w\\in\\mathbb{C}$:

1. $\\overline{z+w}=\\overline{z}+\\overline{w}$;
2. $\\overline{zw}=\\overline{z}\\,\\overline{w}$;
3. $z\\overline{z}=|z|^{2}$;
4. $z+\\overline{z}=2\\operatorname{Re}(z)$ and $z-\\overline{z}=2i\\operatorname{Im}(z)$.

## The complex exponential function

**Definition 4.5 (Complex exponential).** For $z=x+iy$ with $x,y\\in\\mathbb{R}$, define

$$\\exp(z)=e^{x}(\\cos y+i\\sin y).$$

**Theorem 4.6 (Euler's formula).** For all real $\\theta$,

$$e^{i\\theta}=\\cos\\theta+i\\sin\\theta.$$

**Proof.** The complex exponential is defined precisely so that this identity holds. The deeper content is that this definition is the unique analytic continuation of the real exponential that preserves the homomorphism property $e^{z+w}=e^{z}e^{w}$. ∎

**Theorem 4.7 (Periodicity in the imaginary direction).** For all $z\\in\\mathbb{C}$ and $k\\in\\mathbb{Z}$,

$$\\exp(z+2\\pi ki)=\\exp(z).$$

**Proof.** Write $z=x+iy$. Then $z+2\\pi ki=x+i(y+2\\pi k)$. By definition,

$$\\exp(z+2\\pi ki)=e^{x}\\bigl(\\cos(y+2\\pi k)+i\\sin(y+2\\pi k)\\bigr)=e^{x}(\\cos y+i\\sin y)=\\exp(z).$$

Thus $2\\pi i$ is a period of the complex exponential. By contrast, the real
exponential has no nonzero real period. ∎

**Theorem 4.8 (Nonvanishing).** $\\exp(z)\\neq 0$ for all $z\\in\\mathbb{C}$.

**Proof.** $|\\exp(z)|=e^{\\operatorname{Re}(z)}>0$ for all $z$. ∎

## Complex trigonometric functions

Using Euler's formula, we extend sine and cosine to complex arguments.

**Definition 4.9.** For $z\\in\\mathbb{C}$,

$$\\cos z=\\frac{e^{iz}+e^{-iz}}{2},\\qquad \\sin z=\\frac{e^{iz}-e^{-iz}}{2i}.$$

**Theorem 4.10 (Pythagorean identity in $\\mathbb{C}$).** For all $z\\in\\mathbb{C}$,

$$\\cos^{2}z+\\sin^{2}z=1.$$

**Proof.** Substitute the definitions:

$$\\cos^{2}z+\\sin^{2}z=\\frac{(e^{iz}+e^{-iz})^{2}}{4}+\\frac{(e^{iz}-e^{-iz})^{2}}{-4}=\\frac{e^{2iz}+2+e^{-2iz}-e^{2iz}+2-e^{-2iz}}{4}=1.$$

∎

**Remark.** Unlike their real counterparts, $\\cos z$ and $\\sin z$ are not bounded on $\\mathbb{C}$. For example, $\\cos(iy)=\\frac{e^{-y}+e^{y}}{2}=\\cosh y$, which grows without bound as $y\\to\\infty$.

## The fundamental theorem of algebra

**Theorem 4.11 (Fundamental theorem of algebra).** Every nonconstant polynomial $p\\in\\mathbb{C}[z]$ has at least one root in $\\mathbb{C}$.

**Proof.** Suppose $p(z)=a_nz^n+\\cdots+a_0$ with $a_n\\ne0$ and $n\\ge1$. For sufficiently large $|z|$, the leading term dominates the sum of all lower-degree terms, so $|p(z)|\\to\\infty$. Choose $R$ so that $|p(z)|>|p(0)|$ outside the closed disk $|z|\\le R$. Continuity gives a point $z_0$ in that compact disk where $|p|$ is minimal; the choice of $R$ makes it a global minimum.

Assume $p(z_0)\\ne0$ and put $q(w)=p(z_0+w)/p(z_0)$. For the least $k\\ge1$ with nonzero coefficient after the constant term, write

$$q(w)=1+b_kw^k+w^{k+1}r(w),\\qquad b_k\\ne0,$$

where $r$ is a polynomial. Choose the argument of $w$ so that $b_kw^k=-|b_k||w|^k$. For sufficiently small $|w|>0$, we have both $|b_k||w|^k<1$ and $|w^{k+1}r(w)|<\\tfrac12|b_k||w|^k$. Therefore

$$|q(w)|\\le 1-|b_k||w|^k+|w^{k+1}r(w)|<1,$$

contradicting the minimality of $|p(z_0)|$. Hence $p(z_0)=0$. ∎

**Corollary 4.12 (Complete factorization).** Every degree-$n$ complex polynomial factors as

$$p(z)=a_{n}(z-r_{1})(z-r_{2})\\cdots(z-r_{n})$$

for some $r_{1},\\dots,r_{n}\\in\\mathbb{C}$, counting multiplicities.

## Common errors and how to avoid them

**Error: Applying real inequalities to complex numbers.** There is no useful ordering on $\\mathbb{C}$ compatible with the field operations. Statements like "$z<w$" for non-real complex numbers are meaningless.

**Error: Assuming boundedness of complex trig functions.** $\\sin z$ and $\\cos z$ are unbounded on $\\mathbb{C}$. Arguments that rely on boundedness, such as some convergence proofs, fail in the complex setting.

**Error: Confusing modulus with absolute value.** The modulus $|z|$ generalizes the real absolute value, but $|z|^{2}=z\\overline{z}$, not $z^{2}$. For example, $|i|^{2}=1$ while $i^{2}=-1$.

## Practice exercises

### Exercise 1
Express $(1+i)^{10}$ in the form $a+bi$.

**Solution.** In polar form, $1+i=\\sqrt{2}\\,e^{i\\pi/4}$. Raising to the 10th power: $(1+i)^{10}=(\\sqrt{2})^{10}e^{i\\cdot 10\\pi/4}=2^{5}e^{i\\cdot 5\\pi/2}=32e^{i(2\\pi+\\pi/2)}=32e^{i\\pi/2}=32i$. Thus $a=0$ and $b=32$. ∎

### Exercise 2
Find all complex solutions to $z^{3}=1$.

**Solution.** Write $z=re^{i\\theta}$. Then $r^{3}e^{i3\\theta}=1=e^{i\\cdot 0}$. Thus $r=1$ and $3\\theta=2\\pi k$ for $k\\in\\mathbb{Z}$. The distinct solutions occur for $k=0,1,2$: $\\theta=0,2\\pi/3,4\\pi/3$. The roots are $1$, $e^{2\\pi i/3}=-1/2+i\\sqrt{3}/2$, and $e^{4\\pi i/3}=-1/2-i\\sqrt{3}/2$. ∎

### Exercise 3
Prove that $|z+w|^{2}+|z-w|^{2}=2(|z|^{2}+|w|^{2})$ for all $z,w\\in\\mathbb{C}$ (the parallelogram law).

**Solution.** Expand using $|u|^{2}=u\\overline{u}$:

$$|z+w|^{2}=(z+w)(\\overline{z}+\\overline{w})=|z|^{2}+z\\overline{w}+\\overline{z}w+|w|^{2},$$

$$|z-w|^{2}=(z-w)(\\overline{z}-\\overline{w})=|z|^{2}-z\\overline{w}-\\overline{z}w+|w|^{2}.$$

Adding eliminates the cross terms, giving $2|z|^{2}+2|w|^{2}$. ∎

### Exercise 4
Show that $\\overline{e^{z}}=e^{\\overline{z}}$ for all $z\\in\\mathbb{C}$.

**Solution.** Let $z=x+iy$. Then $e^{z}=e^{x}(\\cos y+i\\sin y)$, so $\\overline{e^{z}}=e^{x}(\\cos y-i\\sin y)=e^{x}(\\cos(-y)+i\\sin(-y))=e^{x-iy}=e^{\\overline{z}}$. ∎

### Exercise 5
Find all roots of $z^{2}+2z+5=0$ in $\\mathbb{C}$.

**Solution.** By the quadratic formula, $z=\\frac{-2\\pm\\sqrt{4-20}}{2}=\\frac{-2\\pm\\sqrt{-16}}{2}=\\frac{-2\\pm 4i}{2}=-1\\pm 2i$. Verification: $(-1+2i)^{2}+2(-1+2i)+5=1-4i-4-2+4i+5=0$, and similarly for $-1-2i$. ∎

## Looking forward and back

This chapter extended the exponential and trigonometric functions to the complex plane, revealing that the apparent distinction between growth and oscillation is an artifact of restricting to the real line. The complex exponential is both, unified by Euler's formula. In the next chapter, **Power Series**, we develop the analytic machinery---series expansions---that makes such extensions rigorous and systematic. Later, in **Analytic Continuation**, we will see how power series provide a principled way to extend functions beyond their original domains.
`;export{e as default};