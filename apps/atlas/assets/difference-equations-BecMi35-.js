var e=`---
parent_id: book-functions-equations-proof
chapter_id: difference-equations
title: "Difference Equations"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Difference Equations

## Motivation: discrete dynamics

Where differential equations describe continuous change, **difference equations** describe change at discrete steps. They model populations that reproduce seasonally, financial accounts that compound monthly, digital signals sampled at fixed intervals, and algorithms whose runtime satisfies a recurrence. A difference equation relates the value of a sequence at one index to its values at earlier indices.

This chapter develops the theory of linear difference equations with constant coefficients: the characteristic equation method, the handling of repeated roots, and the particular-solution technique for nonhomogeneous equations. We emphasize the structural analogy with linear differential equations, which we treat in the next chapter.

## First-order linear difference equations

**Definition 8.1 (First-order linear difference equation).** An equation of the form

$$a_{n+1}=ra_{n}+f_{n},$$

where $r$ is a constant and $f_{n}$ is a known sequence, is a first-order linear difference equation. If $f_{n}=0$ for all $n$, it is **homogeneous**.

**Theorem 8.2 (Solution of the homogeneous equation).** The homogeneous equation $a_{n+1}=ra_{n}$ has general solution

$$a_{n}=Cr^{n},$$

where $C$ is determined by an initial condition.

**Proof.** By induction: $a_{1}=ra_{0}$, $a_{2}=ra_{1}=r^{2}a_{0}$, and in general $a_{n}=r^{n}a_{0}$. Setting $C=a_{0}$ gives the formula. ∎

**Theorem 8.3 (Solution of the nonhomogeneous equation).** The general solution of $a_{n+1}=ra_{n}+f_{n}$ is

$$a_{n}=Cr^{n}+\\sum_{k=0}^{n-1}r^{n-1-k}f_{k}.$$

**Proof.** Unfold the recurrence:

$$a_{n}=ra_{n-1}+f_{n-1}=r^{2}a_{n-2}+rf_{n-2}+f_{n-1}=\\cdots=r^{n}a_{0}+\\sum_{k=0}^{n-1}r^{n-1-k}f_{k}.$$

∎

**Example.** Solve $a_{n+1}=2a_{n}+1$ with $a_{0}=3$.

Using the formula with $r=2$ and $f_{n}=1$:

$$a_{n}=3\\cdot 2^{n}+\\sum_{k=0}^{n-1}2^{n-1-k}\\cdot 1=3\\cdot 2^{n}+(2^{n}-1)=4\\cdot 2^{n}-1=2^{n+2}-1.$$

Verification: $a_{0}=2^{2}-1=3$, and $2a_{n}+1=2(2^{n+2}-1)+1=2^{n+3}-2+1=2^{n+3}-1=a_{n+1}$. ∎

## Second-order linear homogeneous equations

**Definition 8.4.** A second-order linear homogeneous difference equation with constant coefficients has the form

$$a_{n+2}+pa_{n+1}+qa_{n}=0,$$

where $p,q$ are constants.

**Method of characteristic roots.** Seek solutions of the form $a_{n}=r^{n}$. Substitution gives

$$r^{n+2}+pr^{n+1}+qr^{n}=0\\quad\\Longrightarrow\\quad r^{2}+pr+q=0.$$

This is the **characteristic equation**.

**Theorem 8.5 (Distinct real roots).** If $r_{1}\\neq r_{2}$ are distinct real roots of the characteristic equation, the general solution is

$$a_{n}=Ar_{1}^{n}+Br_{2}^{n}.$$

**Proof.** Any linear combination satisfies the recurrence by linearity. The coefficients $A$ and $B$ are uniquely determined by $a_{0}$ and $a_{1}$ because the system

$$A+B=a_{0},\\qquad Ar_{1}+Br_{2}=a_{1}$$

has determinant $r_{2}-r_{1}\\neq 0$. ∎

**Theorem 8.6 (Repeated nonzero real root).** If $r\\ne0$ is a repeated root ($r^{2}+pr+q=0$ and $2r+p=0$), the general solution is

$$a_{n}=(A+Bn)r^{n}.$$

**Proof.** We know $r^{n}$ is a solution. To find a second linearly independent solution, try $a_{n}=nr^{n}$. Substituting:

$$(n+2)r^{n+2}+p(n+1)r^{n+1}+qnr^{n}=r^{n}\\bigl[n(r^{2}+pr+q)+2r^{2}+pr\\bigr]=r^{n}[0+r(2r+p)]=0.$$

Thus $nr^{n}$ is also a solution, and the general solution is the claimed linear combination. ∎

If the repeated root is $r=0$, then $p=q=0$ and the recurrence is simply $a_{n+2}=0$. Its solutions have arbitrary $a_0,a_1$ and satisfy $a_n=0$ for all $n\\ge2$; the displayed repeated-root formula does not encode the arbitrary value of $a_1$.

**Theorem 8.7 (Complex conjugate roots).** If the roots are $r=\\rho e^{\\pm i\\theta}$, the general real solution is

$$a_{n}=\\rho^{n}(C\\cos(n\\theta)+D\\sin(n\\theta)).$$

**Proof.** Write the complex solution as $A(\\rho e^{i\\theta})^{n}+B(\\rho e^{-i\\theta})^{n}$ and choose $A,B$ so that the result is real. Euler's formula gives the trigonometric form. ∎

## Nonhomogeneous equations: undetermined coefficients

**Example.** Solve $a_{n+2}-5a_{n+1}+6a_{n}=4^{n}$ with $a_{0}=0$, $a_{1}=1$.

The homogeneous characteristic equation is $r^{2}-5r+6=0$, with roots $r=2$ and $r=3$. The homogeneous solution is $a_{n}^{(h)}=A\\cdot 2^{n}+B\\cdot 3^{n}$.

For a particular solution, guess $a_{n}^{(p)}=C\\cdot 4^{n}$. Substituting:

$$C\\cdot 4^{n+2}-5C\\cdot 4^{n+1}+6C\\cdot 4^{n}=4^{n}C(16-20+6)=2C\\cdot 4^{n}.$$

We need $2C=1$, so $C=1/2$. The general solution is $a_{n}=A\\cdot 2^{n}+B\\cdot 3^{n}+\\frac{1}{2}\\cdot 4^{n}$.

Using initial conditions:
- $a_{0}=A+B+1/2=0$, so $A+B=-1/2$;
- $a_{1}=2A+3B+2=1$, so $2A+3B=-1$.

Solving: $B=0$ and $A=-1/2$. Thus $a_{n}=-\\frac{1}{2}\\cdot 2^{n}+\\frac{1}{2}\\cdot 4^{n}=\\frac{4^{n}-2^{n}}{2}$.

Verification: $a_{0}=(1-1)/2=0$, $a_{1}=(4-2)/2=1$. For the recurrence: $a_{n+2}-5a_{n+1}+6a_{n}=\\frac{1}{2}(4^{n+2}-2^{n+2})-\\frac{5}{2}(4^{n+1}-2^{n+1})+3(4^{n}-2^{n})=4^{n}(8-10+3)-2^{n}(2-5+3)=4^{n}$. ∎

## Common errors and how to avoid them

**Error: Forgetting initial conditions.** A second-order recurrence requires two initial values to determine a unique solution. One initial value leaves a one-parameter family.

**Error: Using the wrong root multiplicity form.** For a repeated nonzero root, the second solution is $nr^{n}$, not $r^{n}$ again. The zero-root case must be handled directly as above.

**Error: Guessing a particular solution that solves the homogeneous equation.** If a forcing term has the form $P(n)s^n$ with $s\\ne0$ and $s$ is a characteristic root of multiplicity $m$, multiply the usual trial form by $n^m$. For example, for forcing $2^n$ at a simple root $2$, replace $C2^n$ by $Cn2^n$; at a double root, an $n^2$ factor is required. Zero-root forcing requires a direct recurrence analysis rather than this ansatz.

## Practice exercises

### Exercise 1
Solve $a_{n+1}=3a_{n}$ with $a_{0}=5$, and verify the first three terms.

**Solution.** $a_{n}=5\\cdot 3^{n}$. Terms: $a_{0}=5$, $a_{1}=15$, $a_{2}=45$. Verification: $3\\cdot 5=15$ and $3\\cdot 15=45$. ∎

### Exercise 2
Solve $a_{n+2}=3a_{n+1}-2a_{n}$ with $a_{0}=3$, $a_{1}=5$, and verify by induction.

**Solution.** The characteristic equation is $r^{2}-3r+2=0$, roots $r=1,2$. General solution: $a_{n}=A+B\\cdot 2^{n}$. From $a_{0}=A+B=3$ and $a_{1}=A+2B=5$, we get $B=2$ and $A=1$. Thus $a_{n}=1+2^{n+1}$.

Verification: $a_{0}=1+2=3$, $a_{1}=1+4=5$. Assume true for $n$ and $n+1$. Then $3a_{n+1}-2a_{n}=3(1+2^{n+2})-2(1+2^{n+1})=3+3\\cdot 2^{n+2}-2-2^{n+2}=1+2^{n+3}=a_{n+2}$. ∎

### Exercise 3
Solve $a_{n+2}-4a_{n+1}+4a_{n}=0$ with $a_{0}=1$, $a_{1}=4$.

**Solution.** Characteristic equation: $r^{2}-4r+4=0$, repeated root $r=2$. General solution: $a_{n}=(A+Bn)2^{n}$. From $a_{0}=A=1$ and $a_{1}=(1+B)\\cdot 2=4$, we get $B=1$. Thus $a_{n}=(1+n)2^{n}$. Verification: $a_{0}=1$, $a_{1}=4$, and $a_{2}=(1+2)\\cdot 4=12=4\\cdot 4-4\\cdot 1$. ∎

### Exercise 4
Solve $a_{n+2}+a_{n}=0$ with $a_{0}=1$, $a_{1}=0$.

**Solution.** Characteristic equation: $r^{2}+1=0$, roots $r=\\pm i=e^{\\pm i\\pi/2}$. General real solution: $a_{n}=C\\cos(n\\pi/2)+D\\sin(n\\pi/2)$. From $a_{0}=C=1$ and $a_{1}=D\\cdot 1=0$, we get $D=0$. Thus $a_{n}=\\cos(n\\pi/2)$. The sequence is $1,0,-1,0,1,0,-1,0,\\dots$. ∎

### Exercise 5
Solve $a_{n+2}-5a_{n+1}+6a_{n}=2^{n}$ with $a_{0}=0$, $a_{1}=1$.

**Solution.** Homogeneous solution: $a_{n}^{(h)}=A\\cdot 2^{n}+B\\cdot 3^{n}$. Since $2^{n}$ solves the homogeneous equation, guess $a_{n}^{(p)}=Cn\\cdot 2^{n}$. Substituting:

$$C(n+2)2^{n+2}-5C(n+1)2^{n+1}+6Cn\\cdot 2^{n}=2^{n}\\bigl[4C(n+2)-10C(n+1)+6Cn\\bigr]=2^{n}(-2C).$$

We need $-2C=1$, so $C=-1/2$. General solution: $a_{n}=A\\cdot 2^{n}+B\\cdot 3^{n}-\\frac{n}{2}\\cdot 2^{n}$.

From $a_{0}=A+B=0$ and $a_{1}=2A+3B-1=1$, we get $2A+3B=2$, so $B=2$ and $A=-2$. Thus $a_{n}=-2\\cdot 2^{n}+2\\cdot 3^{n}-\\frac{n}{2}\\cdot 2^{n}=2\\cdot 3^{n}-(2+n/2)2^{n}$. ∎

## Looking forward and back

This chapter developed the theory of linear difference equations, emphasizing the characteristic equation method and its analogies with differential equations. The techniques of guessing solutions, handling repeated roots, and constructing particular solutions reappear in the next chapter, **Differential Equations**, where the continuous limit of a difference equation leads to derivatives and exponentials. In **Dynamical Systems**, we will study nonlinear recurrences where closed-form solutions are rare and qualitative behavior becomes the central question.
`;export{e as default};