var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: space-curves-frenet-serret
title: "Space Curves: The Frenet–Serret Frame and Torsion"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Space Curves: The Frenet–Serret Frame and Torsion

A plane curve turns within one plane. A space curve can also twist its turning plane, so curvature alone cannot describe it. A helix and a circle may have constant curvature, but only the helix climbs out of its successive osculating planes. The Frenet–Serret frame records this additional behavior through torsion.

The hypotheses in this chapter are substantial. A curve must be regular, and its curvature must be positive wherever the Frenet frame is used. We take $C^3$ regularity so that the torsion formula has its required derivatives. The oriented plane frame in the preceding chapter worked at zero signed curvature because its normal was supplied by a fixed plane orientation. In three dimensions the principal normal is defined from the derivative of the tangent, so it cannot be normalized when that derivative vanishes.

## The moving orthonormal frame

**Definition 4.1 — Frenet frame.** Let $\\alpha:I\\to\\mathbb R^3$ be unit speed and $C^3$, with $\\kappa=\\|\\alpha''\\|>0$. Define

$$T=\\alpha',\\qquad N=\\frac{T'}\\kappa,\\qquad B=T\\times N.$$

The vectors form a positively oriented orthonormal basis. Indeed $T'$ is perpendicular to the unit vector $T$, the normalization makes $N$ unit, and the cross product gives the unique unit vector completing that orientation. The tangent line is spanned by $T$. The osculating plane is spanned by $T,N$, the normal plane by $N,B$, and the rectifying plane by $T,B$, all translated through the curve point.

Because $\\alpha$ is $C^3$, the vector $T'$ is $C^1$, and positivity of its norm makes $\\kappa,N,B$ at least $C^1$. Thus differentiating the frame is justified. One cannot begin differentiating $N=T'/\\kappa$ at an inflection while simply declaring that the resulting formulas continue to hold there.

**Definition 4.2 — Torsion.** Define $\\tau=-B'\\cdot N$, with differentiation with respect to arc length. The minus sign is part of the convention. Replacing it by the opposite convention changes the signs in the frame equations and in any formula for torsion; one must change the whole system consistently.

## Deriving the frame equations

**Theorem 4.3 — Frenet–Serret equations.** Under the stated hypotheses,

$$T'=\\kappa N,\\qquad N'=-\\kappa T+\\tau B,\\qquad B'=-\\tau N.$$

**Proof.** The first identity is the definition. Unit length gives $N'\\cdot N=0$, while differentiating $N\\cdot T=0$ gives $N'\\cdot T=-N\\cdot T'=-\\kappa$. Thus $N'=-\\kappa T+cB$ for some scalar $c$. Differentiating $B\\cdot B=1$ gives $B'\\cdot B=0$. Differentiating $B\\cdot T=0$ gives $B'\\cdot T=-B\\cdot T'=0$. Hence $B'$ has only an $N$ component, and its definition makes that component $-\\tau$. Finally differentiating $N\\cdot B=0$ gives $c=N'\\cdot B=-N\\cdot B'=\\tau$. This proves every coefficient. $\\square$

The derivative matrix of an orthonormal frame is skew-symmetric. Here curvature couples $T$ to $N$, and torsion couples $N$ to $B$. There is no direct $T$–$B$ coefficient because $T'$ defines $N$. These structural observations explain why there are two functions, rather than nine independent derivative coefficients, in the frame system.

The equations are local differential statements. Torsion zero at one point means that the binormal derivative vanishes there; it does not mean that the entire curve is planar. Conversely the same curve may pass through a flat point where this frame is undefined, even though it remains contained in one plane. The next proposition therefore keeps positivity of curvature and connectedness of the parameter interval.

**Proposition 4.4 — Planarity criterion.** A regular $C^3$ curve with positive curvature on a connected interval lies in one affine plane if and only if its torsion is identically zero.

**Proof.** If $\\tau=0$, then $B'=0$, so $B=B_0$ is constant. Since $\\alpha'\\cdot B_0=0$, the function $\\alpha\\cdot B_0$ is constant, placing the curve in an affine plane perpendicular to $B_0$. Conversely, if the curve lies in a plane with fixed unit normal $b$, then both $T$ and $T'$ lie in its direction plane. Positivity of curvature makes $B$ equal to $b$ or $-b$. Its continuity on a connected interval forces one fixed sign, so $B'=0$ and $\\tau=0$. $\\square$

## Formulas for an arbitrary regular parameter

Let $\\gamma(t)$ be regular with speed $v>0$. With $ds/dt=v$, the chain rule and the first frame equation give

$$\\gamma'=vT,\\qquad \\gamma''=v'T+v^2\\kappa N.$$

The two acceleration components have different meanings. The tangential component changes speed; the normal component changes direction. Taking a cross product eliminates the tangential component:

$$\\gamma'\\times\\gamma''=v^3\\kappa B.$$

Consequently positive curvature is equivalent to a nonzero cross product of velocity and acceleration, and

$$\\kappa=\\frac{\\|\\gamma'\\times\\gamma''\\|}{v^3},\\qquad
B=\\frac{\\gamma'\\times\\gamma''}{\\|\\gamma'\\times\\gamma''\\|}.$$

Differentiate $\\gamma''=v'T+v^2\\kappa N$ with respect to $t$. Its $B$ component is $v^3\\kappa\\tau$, because only differentiating $N$ contributes to that component. Dotting with $\\gamma'\\times\\gamma''=v^3\\kappa B$ gives

$$\\det(\\gamma',\\gamma'',\\gamma''')=v^6\\kappa^2\\tau.$$

**Theorem 4.5 — Curvature and torsion quotients.** Where $\\gamma$ is $C^3$ and $\\gamma'\\times\\gamma''\\ne0$,

$$\\tau=\\frac{(\\gamma'\\times\\gamma'')\\cdot\\gamma'''}{\\|\\gamma'\\times\\gamma''\\|^2}.$$

The curvature and binormal formulas above hold on the same set. This derivation states exactly why a zero denominator is excluded. It also separates the third-derivative requirement for torsion from the second-derivative requirement for curvature.

## Invariance, orientation and scale

Under any regular $C^3$ clock change $t=\\phi(u)$, curvature is unchanged at corresponding points. The cross product gains $(\\phi')^3$ and its norm gains $|\\phi'|^3$, matching speed cubed. For torsion, the scalar triple product of the three new derivatives gains $(\\phi')^6$: every lower-order extra term repeats a velocity or acceleration vector and has zero determinant. The squared cross-product norm also gains $(\\phi')^6$. Thus torsion is unchanged even when the parameter direction reverses.

This differs from signed plane curvature. On reversing a space curve, $T$ and $B$ change sign while $N$ stays the same; the two sign changes in the torsion equation cancel. Torsion does depend on the orientation of ambient three-dimensional space. If an orthogonal map $Q$ has determinant minus one, its scalar triple products change sign, so $\\tau$ changes sign. Proper rigid motions, with determinant plus one, preserve it. Reflections exchange right-handed and left-handed helices.

Positive spatial scaling by $c$ divides both curvature and torsion by $c$. The numerator of torsion has three factors of length and its denominator four. Its units, like curvature's, are inverse length. These laws are useful consistency checks when a complicated cross-product calculation is simplified.

## Reversal checked directly on the frame

The determinant calculation can be verified without third-derivative expansion. Let $\\alpha(s)$ be unit speed with positive curvature, and reverse its traversal by $\\widetilde\\alpha(u)=\\alpha(-u)$ on the reversed interval. Then $\\widetilde T(u)=-T(-u)$, while differentiating once more gives $\\widetilde T'(u)=T'(-u)$. Hence $\\widetilde\\kappa(u)=\\kappa(-u)$ and $\\widetilde N(u)=N(-u)$. Taking their cross product gives $\\widetilde B(u)=-B(-u)$. Finally,

$$\\widetilde B'(u)=B'(-u)=-\\tau(-u)N(-u),$$

which is the Frenet equation with $\\widetilde\\tau(u)=\\tau(-u)$. The argument tracks corresponding points and proves the invariance with the chosen minus-sign convention intact. It does not compare values at unrelated equal parameter numbers.

This also isolates what fails at zero curvature. Regularity still supplies $T$, and the plane perpendicular to $T$ still exists, but $T'/\\|T'\\|$ no longer selects a normal within that plane. Many unit normals are available, and rotating a chosen normal pair changes its derivative coefficients. Such a choice may be useful, but those coefficients cannot automatically be called the Frenet torsion. A continuous limit of a quotient on one side is an additional fact to establish, not a definition that resolves every zero-curvature point. The planar cubic example demonstrates the stronger obstruction: the normalized binormal has incompatible one-sided limits even though the normal plane perpendicular to the velocity remains perfectly well-defined.

## Worked examples

### Worked example 1 — A circular helix

Let $\\gamma(t)=(a\\cos t,a\\sin t,bt)$ with $a>0$ and $b\\in\\mathbb R$. The speed is $\\sqrt{a^2+b^2}$. Its first two derivatives have cross product

$$(ab\\sin t,-ab\\cos t,a^2),$$

whose squared norm is $a^2(a^2+b^2)$. The third derivative is $(a\\sin t,-a\\cos t,0)$, so the scalar triple product is $a^2b$. Therefore

$$\\kappa=\\frac{a}{a^2+b^2},\\qquad \\tau=\\frac{b}{a^2+b^2}.$$

Both are constant. The assumption $a>0$ ensures the cross product never vanishes. If $b=0$, this is a circle and torsion is zero. Replacing $b$ by $-b$ preserves curvature and reverses torsion, giving the reflected helix rather than merely a different clock on the same oriented-space shape.

### Worked example 2 — A planar cubic at a flat point

For $\\gamma(t)=(t,t^3,0)$, the velocity is nonzero everywhere but the cross product of velocity and acceleration is $(0,0,6t)$. Thus curvature vanishes at zero, and the Frenet frame is undefined there. On $t>0$, the binormal is $(0,0,1)$; on $t<0$, it is $(0,0,-1)$. Both branches have zero torsion because their scalar triple products vanish. The curve is planar, but the positive-curvature planarity criterion applies separately on the two open half-intervals. Declaring a single continuous principal-normal frame across zero would contradict the computed binormal limits.

### Worked example 3 — Curvature and torsion at one point

Take $\\gamma(t)=(t,t^2,t^3)$. At zero the first three derivatives are $(1,0,0)$, $(0,2,0)$ and $(0,0,6)$. Speed is one there, the cross product is $(0,0,2)$, and its squared norm is four. Hence $\\kappa(0)=2$ and $\\tau(0)=12/4=3$. The tangent, principal normal and binormal there are the standard ordered coordinate vectors. These values describe local bending and twisting at one point; they do not establish constant curvature or constant torsion along the curve. Indeed the derivatives away from zero change, so a separate calculation would be required for any global assertion.

## A useful consequence: generalized helices

**Proposition 4.6 — Constant-angle criterion.** For a curve with positive curvature, its tangent makes a constant angle with some fixed unit vector if and only if $\\tau/\\kappa$ is constant on the connected interval.

**Proof.** If $\\tau/\\kappa=m$ is constant, then $a=(mT+B)/\\sqrt{1+m^2}$ is unit and has derivative $(m\\kappa-\\tau)N/\\sqrt{1+m^2}=0$. Its dot product with $T$ is constant. Conversely suppose fixed unit $a$ has constant dot product $c$ with $T$. Differentiating gives $a\\cdot N=0$, so $a=cT+dB$. Differentiating $a\\cdot B$ gives $d'=a\\cdot(-\\tau N)=0$. Differentiating $a\\cdot N=0$ now yields $-c\\kappa+d\\tau=0$. The constant $d$ cannot vanish, because that equation would force $c=0$, contradicting $\\|a\\|=1$. Thus $\\tau/\\kappa=c/d$ is constant. $\\square$

The word generalized matters. A constant angle does not require both curvature and torsion individually to be constant. Their ratio may be constant while their magnitudes vary. The circular helix is the special case in which both are constant, and its full characterization will follow from the reconstruction theorem in the next chapter.

## Detecting planarity on an interval

Suppose a connected interval carries a unit-speed curve with positive curvature and identically zero torsion. The last Frenet equation says that its binormal is constant on that interval. Write this fixed unit vector as $b$. Since the tangent is perpendicular to the binormal, differentiating $b\\cdot(\\alpha(s)-\\alpha(s_0))$ gives zero. Its initial value is zero, so every point of the curve lies in the affine plane through its initial point perpendicular to $b$. This proves planarity from the equations, with no appeal to a drawing.

Conversely, a positive-curvature curve lying in a fixed plane has both its tangent and principal normal in that plane. Their cross product is one of the two fixed unit normals to it. Continuity on the connected interval fixes the sign, making the binormal constant and the torsion zero. The positive-curvature assumption ensures that the Frenet normal exists throughout this argument. Vanishing torsion at a single parameter value gives only a statement at that value; it cannot imply that a neighborhood, much less the whole curve, lies in one plane. Likewise, if curvature vanishes between separate intervals, a conclusion on one Frenet interval does not automatically select a common plane for the other intervals.

## Exercises

### Exercise 4.1
<a id="space-curves-frenet-serret-ex-1"></a>
Derive the $T$ coefficient of $N'$ using only orthogonality and $T'=\\kappa N$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Differentiate $N\\cdot T=0$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The dot product $N\\cdot N$ is one.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Differentiating gives $N'\\cdot T+N\\cdot T'=0$. Substituting $T'=\\kappa N$ gives $N'\\cdot T=-\\kappa$. Since the frame is orthonormal, that dot product is precisely the coefficient of $T$ in the expansion of $N'$. It is not a coefficient in the fixed coordinate basis; mixing those two bases would obscure the calculation.
</details>

### Exercise 4.2
<a id="space-curves-frenet-serret-ex-2"></a>
Find curvature and torsion of $(2\\cos t,2\\sin t,t)$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the helix calculation with its positive-radius hypothesis.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The common denominator is the squared speed.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Here $a=2$ and $b=1$, so speed squared is five. The derived formulas give $\\kappa=2/5$ and $\\tau=1/5$. Both are constant and curvature is positive, so the Frenet frame is valid at every point. Reflecting the third coordinate produces torsion $-1/5$ while preserving curvature, which confirms that the sign records spatial handedness rather than traversal direction.
</details>

### Exercise 4.3
<a id="space-curves-frenet-serret-ex-3"></a>
Prove that reversing the parameter preserves torsion. Explain why this does not contradict reversal of signed plane curvature.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Count the total power of the clock derivative in the torsion numerator.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The denominator is a squared cross-product norm.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The transformed triple product has factor $(\\phi')^6$, and the squared cross-product norm has the same factor. Their ratio is unchanged even if $\\phi'<0$. Signed plane curvature instead has a determinant factor $(\\phi')^3$ divided by $|\\phi'|^3$, so it changes sign. The quantities use different frames: the plane's left normal is fixed by its orientation, while the space curve's principal normal follows its acceleration.
</details>

### Exercise 4.4
<a id="space-curves-frenet-serret-ex-4"></a>
Show that torsion identically zero implies planarity when curvature is positive on a connected interval.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the last Frenet equation to fix a normal vector.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Differentiate the dot product of position with that fixed vector.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The equation $B'=-\\tau N$ gives constant $B=B_0$. Then $(\\alpha\\cdot B_0)'=T\\cdot B_0=0$, so $\\alpha\\cdot B_0$ is constant. The image therefore lies in one affine plane perpendicular to $B_0$. Connectedness ensures the derivative-zero quantities are constant across the interval. The frame must exist throughout, which is why positive curvature is included in the hypotheses.
</details>

### Exercise 4.5
<a id="space-curves-frenet-serret-ex-5"></a>
For a regular non-unit-speed curve derive the tangential acceleration $v'T$ and normal acceleration $v^2\\kappa N$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Start with $\\gamma'=vT$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use $dT/dt=(dT/ds)(ds/dt)$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Differentiation gives $\\gamma''=v'T+v(dT/dt)$. The chain rule makes $dT/dt=v\\kappa N$, so $\\gamma''=v'T+v^2\\kappa N$. These terms are orthogonal. The first may be nonzero on a straight line if the traveller changes speed; the second may be nonzero at constant speed if the route turns. Acceleration by itself therefore does not distinguish timing from geometry.
</details>

### Exercise 4.6
<a id="space-curves-frenet-serret-ex-6"></a>
Compute $\\kappa(0)$ and $\\tau(0)$ for $(t,2t^2,t^3)$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Evaluate the three derivative vectors at zero.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the cross product's norm for curvature and its squared norm for torsion.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
At zero the derivatives are $(1,0,0)$, $(0,4,0)$ and $(0,0,6)$. Speed is one and the cross product is $(0,0,4)$, so curvature is four. The triple product is twenty-four and the squared cross-product norm is sixteen, so torsion is $3/2$. The denominator is nonzero, validating the calculation; these are point values, not assertions that the functions remain constant nearby.
</details>

### Exercise 4.7
<a id="space-curves-frenet-serret-ex-7"></a>
Explain why zero torsion at just one point does not prove planarity. Give a regular example with positive curvature and torsion zero at zero but not nearby.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Replace the cubic third coordinate in the preceding example by a fourth power.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
For $(t,t^2,t^4)$ the triple product is proportional to $t$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $\\gamma=(t,t^2,t^4)$, the velocity's first component is one, so regularity holds. The cross product has third component two and is never zero. The third derivative is $(0,0,24t)$, giving triple product $48t$. Torsion is zero at zero and nonzero at every nearby nonzero parameter. If the curve lay in one plane, the proved converse planarity criterion would force torsion identically zero. Hence one vanishing value is insufficient.
</details>

### Exercise 4.8
<a id="space-curves-frenet-serret-ex-8"></a>
What are the units and positive-scaling laws of curvature and torsion?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Count length factors in the two quotient formulas.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A cross product contributes two factors and a triple product three.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Curvature has length-squared numerator and length-cubed denominator after parameter units cancel. Torsion has length-cubed numerator and length-fourth denominator. Both have inverse-length units. Scaling all positions by $c>0$ therefore divides each by $c$, as also follows directly by substituting the scaled derivatives. The signs of torsion and the frame orientation are unchanged by positive dilation.
</details>

### Exercise 4.9
<a id="space-curves-frenet-serret-ex-9"></a>
Suppose $\\tau=2\\kappa$ on an interval with positive curvature. Construct a fixed unit vector making a constant angle with the tangent.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Seek a constant linear combination of $T$ and $B$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Differentiate $2T+B$ using the frame equations.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Let $a=(2T+B)/\\sqrt5$. It has norm one by orthonormality. Its derivative is $(2\\kappa-\\tau)N/\\sqrt5=0$, so it is fixed. Its dot product with $T$ equals $2/\\sqrt5$ at every point. This conclusion does not require constant $\\kappa$; the generalized helix condition concerns the constant ratio rather than the two functions separately.
</details>

### Exercise 4.10
<a id="space-curves-frenet-serret-ex-10"></a>
Explain precisely why the Frenet frame of $(t,t^3,0)$ fails to extend continuously across zero, although the curve is smooth and regular.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compute the direction of velocity crossed with acceleration.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The binormal has opposite one-sided limits.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The cross product is $(0,0,6t)$. Its normalization is $(0,0,1)$ on the positive side and $(0,0,-1)$ on the negative side. No value at zero can make these two limits equal. The curve remains smooth and its velocity has first component one, but curvature vanishes at zero, so normalizing the tangent derivative is invalid there. The left-normal plane frame can remain continuous because it is a different construction.
</details>

## Sources

Original Euler text and exercises, CC BY-SA 4.0. The unchanged local seed is Quarto Calculus Chapter 28, together with the [Unhurried plane-frame reading](/articles/ga-dg-frenet/), whose two-dimensional scope is retained. Sucharit Sarkar's [UCLA notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lectures 3–6, provide a verified primary-author reference. The formulas and proofs here are independently developed with explicit positive-curvature hypotheses.

## Summary

Positive curvature turns tangent differentiation into a principal normal and binormal. Orthogonality gives the Frenet–Serret equations, and their third coefficient defines torsion. Cross-product and triple-product formulas allow arbitrary regular parameters, with separate second- and third-derivative requirements. Torsion survives parameter reversal but changes under spatial reflection. Identically zero torsion gives planarity only where the frame exists. The next chapter reverses these calculations by constructing a curve from prescribed curvature and torsion.
`;export{e as default};