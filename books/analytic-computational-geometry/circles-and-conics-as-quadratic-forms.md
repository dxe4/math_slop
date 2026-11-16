
# Circles and Conics as Quadratic Forms

This earlier reading remains available with its original exercises and learner identity. The current computational route is [Conic Predicates](conic-predicates.md); full geometric classification and focus/directrix equivalence are proved in [Conics in Coordinates](../conics-solids-projections/conics-in-coordinates.md).

Circles, ellipses, parabolas, and hyperbolas are united by a single algebraic structure: the quadratic form. Representing a conic as a symmetric matrix makes classification a matter of linear algebra, and it connects the geometric definitions---foci, directrices, and cross-sections---to the computational tools of eigenvalues and coordinate changes. This chapter defines the general conic, shows how to reduce it to standard form, and gives a robust classifier that refuses to label degenerate or empty cases.

## The general conic equation

A general conic in the plane is the set of points $X=(x,y)$ satisfying

$$X^{T}QX+q^{T}X+f=0,$$

where $Q$ is a symmetric $2\times 2$ matrix, $q$ is a vector in $\mathbb{R}^{2}$, and $f$ is a scalar. Expanded in coordinates, this is

$$Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0,$$

with $Q=\begin{pmatrix}A&B/2\\B/2&C\end{pmatrix}$, $q=(D,E)$, and $f=F$.

Multiplying all coefficients by a nonzero scalar does not change the locus. For nonempty, nondegenerate real conics, equality of loci forces the defining irreducible quadratic polynomials to be proportional. Degenerate or lower-dimensional real loci need separate treatment: $x^{2}+y^{2}=0$ and $x^{2}+2y^{2}=0$ both have the singleton real locus $\{(0,0)\}$ although their coefficients are not proportional.

## Translation to remove linear terms

If $Q$ is invertible, we can complete the square to remove the linear term. Write $X=Y-c$ where $c$ is chosen so that the linear term in $Y$ vanishes. Substituting gives

$$(Y-c)^{T}Q(Y-c)+q^{T}(Y-c)+f=0.$$

The coefficient of $Y$ is $-2Qc+q$. Setting this to zero yields $c=\frac{1}{2}Q^{-1}q$. The equation becomes

$$Y^{T}QY+f'=0,$$

where $f'=f-\frac{1}{4}q^{T}Q^{-1}q$.

## Rotation to diagonalize $Q$

Because $Q$ is real and symmetric, it has an orthonormal eigenbasis. Let $Q=R^{T}DR$ where $D=\operatorname{diag}(\lambda_{1},\lambda_{2})$ and $R$ is orthogonal. Setting $Z=RY$ gives

$$Z^{T}DZ+f'=0,$$

or $\lambda_{1}z_{1}^{2}+\lambda_{2}z_{2}^{2}+f'=0$. This is the standard form.

## Classification by eigenvalues

The signs of the eigenvalues classify the quadratic part:

- **Same nonzero sign** ($\lambda_{1}\lambda_{2}>0$): ellipse-like;
- **Exactly one zero eigenvalue** ($\lambda_{1}\lambda_{2}=0$ with $Q\ne0$): parabola-like; if $Q=0$, both eigenvalues vanish and the equation is linear, constant, empty, or all of the plane;
- **Opposite signs** ($\lambda_{1}\lambda_{2}<0$): hyperbola-like.

These labels describe the quadratic part only. A complete classifier must also check the rank of the full conic matrix and the existence of real points. The equation $x^{2}+y^{2}+1=0$ has ellipse-like quadratic part but no real locus. The equation $x^{2}-y^{2}=0$ factors as $(x-y)(x+y)=0$ and represents two intersecting lines, not a hyperbola.

A robust classifier reports ``degenerate or empty'' rather than forcing every coefficient tuple into a picture label.

## Worked reduction

Reduce $4x^{2}+9y^{2}-8x+36y+4=0$ to standard form.

Group by variable:

$$4(x^{2}-2x)+9(y^{2}+4y)=-4.$$

Complete the square:

$$4(x-1)^{2}-4+9(y+2)^{2}-36=-4.$$

Simplify:

$$4(x-1)^{2}+9(y+2)^{2}=36.$$

Divide by $36$:

$$\frac{(x-1)^{2}}{9}+\frac{(y+2)^{2}}{4}=1.$$

This is an ellipse centered at $(1,-2)$ with semimajor axis $a=3$ and semiminor axis $b=2$.

## Ray--conic intersection

To intersect a ray $X(t)=P+tv$ with a conic, substitute into the quadratic equation. This gives

$$at^{2}+bt+c=0,$$

where the coefficients depend on $P$, $v$, and the conic parameters. The discriminant $\Delta=b^{2}-4ac$ determines how many real intersections the ray line has. Then filter by the ray condition $t\geq 0$ or the segment condition $0\leq t\leq 1$.

For stable root computation when cancellation threatens, use the following procedure. Let $\delta=b^{2}-4ac$. After confirming $\delta\geq 0$, compute

$$q=-\frac{1}{2}\bigl(b+s\sqrt{\delta}\bigr),\qquad s=\begin{cases}1,&b\geq 0,\\-1,&b<0.\end{cases}$$

Then the roots are $q/a$ and $c/q$. If $a=0$ and $b\ne0$, solve the linear equation $bt+c=0$. If $a=b=0$, the equation has every parameter as a solution when $c=0$ and none when $c\ne0$. In the quadratic case, handle $q=0$ as the double root $-b/(2a)$. Near $\delta=0$, a floating-point implementation needs a scale-aware policy for a slightly negative computed discriminant; silently clamping every negative value can manufacture tangencies that do not exist.

## Common errors

- **Forgetting the scale invariance.** Multiplying all coefficients by $-1$ gives the same locus, but the eigenvalues change sign. A classifier that looks only at the sign of $A$ without considering scale may mislabel.
- **Ignoring degenerate cases.** The discriminant $B^{2}-4AC$ classifies the quadratic part, but it does not detect empty loci or factorable equations.
- **Unstable quadratic formula.** Computing $(-b+\sqrt{\delta})/(2a)$ when $b$ and $\sqrt{\delta}$ are nearly equal loses significant digits. The stable formulation above avoids this.
- **Confusing the algebraic locus with the allowed parameter interval.** A ray may intersect the conic algebraically at two points, but only one may satisfy $t\geq 0$.

## Practice exercises with solutions

### Exercise 1
Classify the conic $x^{2}-4xy+4y^{2}-3x+6y+2=0$.

**Solution.** Put $u=x-2y$. Then the equation is $u^{2}-3u+2=(u-1)(u-2)=0$. The real locus is the pair of parallel lines $x-2y=1$ and $x-2y=2$, so this is a degenerate conic rather than a parabola.

### Exercise 2
Reduce $9x^{2}+4y^{2}-18x+16y-11=0$ to standard form and identify the center and semiaxes.

**Solution.** $9(x^{2}-2x)+4(y^{2}+4y)=11$, so $9(x-1)^{2}+4(y+2)^{2}=36$, giving

$$\frac{(x-1)^{2}}{4}+\frac{(y+2)^{2}}{9}=1.$$

This is an ellipse centered at $(1,-2)$ with semiaxes $a=3$ (vertical) and $b=2$ (horizontal).

### Exercise 3
Find the intersection of the ray from $(0,0)$ in direction $(1,1)$ with the circle $x^{2}+y^{2}=4$.

**Solution.** Substitute $x=t$, $y=t$: $2t^{2}=4$, so $t=\sqrt{2}$ (taking the positive root for the ray). The intersection is $(\sqrt{2},\sqrt{2})$.

### Exercise 4
Explain why $x^{2}+y^{2}+1=0$ has no real points despite having ellipse-like quadratic part.

**Solution.** The left side is always at least $1$ for real $x$ and $y$, so it can never equal zero. The quadratic part is positive definite, but the constant term shifts the locus away from the origin.

### Exercise 5
For the conic $x^{2}-y^{2}=0$, find the real locus and explain why it is not a hyperbola.

**Solution.** The equation factors as $(x-y)(x+y)=0$. The real locus is the union of the two lines $y=x$ and $y=-x$. A hyperbola is a smooth curve; this is a degenerate conic consisting of two intersecting lines.

## Looking backward and forward

This chapter represented conics as quadratic forms, showed how translation and rotation reduce them to standard form, and classified them by eigenvalues. The ray--conic intersection formula connects the algebraic representation to geometric queries.

The next chapter, **Conic Focus--Directrix Computation**, derives the focal properties of ellipses, parabolas, and hyperbolas from the focus--directrix definition. The formulas for center, semiaxes, and eccentricity follow from completing the square, and they become ill-conditioned near the parabolic limit where the eccentricity approaches $1$.
