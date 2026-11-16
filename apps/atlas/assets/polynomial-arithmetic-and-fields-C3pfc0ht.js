var e=`---
parent_id: course-abstract-algebra-proof
chapter_id: polynomial-arithmetic-and-fields
---

# Module 6 — Polynomial arithmetic and fields

**Question.** How can an equation such as $x^2+1=0$ become valid without pretending it already has a root in the base field? Polynomial division and quotient rings let us adjoin a root while controlling every resulting element.

**Entry check.** Divide $x^3-1$ by $x^2-1$ over $\\mathbb Q$: $x^3-1=x(x^2-1)+(x-1)$. If the remainder's degree is not smaller than 2, revisit long division.

Let $F$ be a field and $0\\ne g\\in F[x]$. The leading coefficient of $g$ is invertible. If $\\deg f\\ge\\deg g$, subtract a suitable scalar multiple of $x^{\\deg f-\\deg g}g$ to cancel the leading term of $f$. Each step strictly lowers degree, so after finitely many steps
$$
f=qg+r,\\qquad r=0\\ \\text{or}\\ \\deg r<\\deg g.
$$
If two such expressions existed, their difference would give $(q-q')g=r'-r$ of degree below $\\deg g$; a nonzero product has degree at least $\\deg g$, so both differences vanish. This proves existence and uniqueness. The field assumption is used to divide by the leading coefficient.

Repeated division gives a Euclidean algorithm: the last nonzero remainder $d$ divides both starting polynomials, and every common divisor divides $d$ (trace divisibility backward through the remainder equations). Normalizing $d$ to be monic makes it the gcd. Tracing those equations backward also gives **Bézout's identity** $d=uf+vg$ for some $u,v\\in F[x]$. For example, with $f=x^3-1$, $g=x^2-1$, the first remainder is $x-1$, and $g=(x+1)(x-1)$; hence $x-1=f-xg$ is a Bézout expression.

A positive-degree polynomial $p$ is **irreducible over $F$** if it is not a product of two positive-degree polynomials in $F[x]$. If $p$ is irreducible and $[a]\\ne0$ in $F[x]/(p)$, then $p\\nmid a$, so $\\gcd(a,p)=1$. Bézout gives $ua+vp=1$; reducing modulo $p$ gives $[u][a]=[1]$. Thus every nonzero class has an inverse, proving the quotient is a field directly. Polynomial division gives a unique representative of degree below $\\deg p$ for each class.

For degrees 2 and 3 over a field, reducibility is equivalent to having a root: a nontrivial factorization must contain a degree-one factor, and $x-a$ divides $f$ exactly when $f(a)=0$. In degree 4 this test fails: $x^4+4=(x^2-2x+2)(x^2+2x+2)$ over $\\mathbb Q$, although it has no rational root because it is positive on $\\mathbb R$. Always name the coefficient field. $x^2+1$ is irreducible over $\\mathbb R$ but factors over $\\mathbb C$; $\\mathbb R[x]/(x^2+1)\\cong\\mathbb C$ via $[a+bx]\\mapsto a+bi$.

## Guided practice

### 1. Starter — A root test

Is $x^2+x+1$ irreducible over $\\mathbb F_2$?

**Hint.** Evaluate at both field elements.

**Reasoning.** The values at 0 and 1 are both 1 in characteristic 2. A quadratic with no root is irreducible, so the quotient is a four-element field.

### 2. Core — Construct an inverse

Find the inverse of $[x]$ in $\\mathbb F_2[x]/(x^2+x+1)$.

**Hint.** Rewrite the defining equation as $x(x+1)=1$ modulo the polynomial.

**Reasoning.** $x(x+1)=x^2+x=(x^2+x+1)+1$, and characteristic 2 turns the sign into plus. Hence $[x]^{-1}=[x+1]$. The nonzero class exists because the irreducible polynomial cannot divide $x$.

### 3. Transfer — Same polynomial, different field

Decide whether $x^2+1$ is irreducible over $\\mathbb F_3$ and over $\\mathbb F_5$.

**Hint.** A quadratic has a factor exactly when it has a root.

**Reasoning.** Modulo 3 the values at 0, 1, 2 are 1, 2, 2, so it is irreducible. Modulo 5, $2^2+1=0$, and $x^2+1=(x-2)(x+2)$. The field must be stated in the conclusion.

### 4. Proof audit — A false high-degree test

“$x^4+4$ has no rational root, so it is irreducible over $\\mathbb Q$.” Repair the argument.

**Hint.** Multiply $(x^2-2x+2)(x^2+2x+2)$.

**Reasoning.** The product is $(x^2+2)^2-(2x)^2=x^4+4$. The polynomial has no rational root but factors into quadratics. The root criterion only characterizes irreducibility in degrees 2 and 3.
`;export{e as default};