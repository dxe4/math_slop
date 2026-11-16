
# The Fundamental Theorem of Curves

Differentiating a curve produces curvature and torsion. The inverse question is more revealing: which functions can occur, and how much of the curve do they determine? In the plane, continuous signed curvature can be integrated directly into an angle and then into position. In space, the moving frame must first be reconstructed. Its differential equations turn the geometric question into a linear matrix equation.

This chapter proves the required existence and uniqueness result rather than assuming an earlier differential-equations course. The analytic inputs are uniform convergence, elementary integration, and a convergent exponential series. The geometric uniqueness will be up to a proper rigid motion, preserving the orientation of three-dimensional space. An arbitrary reflection can change the sign of torsion and therefore cannot be included without qualification.

## Reconstruction in the plane

**Theorem 5.1 — Fundamental theorem for oriented plane curves.** Let $k:I\to\mathbb R$ be continuous on an interval, fix $s_0\in I$, an initial point $p$, and a unit tangent direction represented by angle $\theta_0$. There is a unique unit-speed $C^2$ plane curve with that initial point and tangent and with signed curvature $k$. Curves with the same $k$ differ by an orientation-preserving rigid motion once their origins of arc length are aligned.

**Proof.** Define

$$\theta(s)=\theta_0+\int_{s_0}^s k(u)\,du,\qquad
\alpha(s)=p+\int_{s_0}^s(\cos\theta(u),\sin\theta(u))\,du.$$

The function $\theta$ is $C^1$, so $\alpha$ is $C^2$. Its derivative has norm one. Differentiation gives $\alpha''=kJ\alpha'$, so its signed curvature is exactly the prescribed function. For uniqueness, the tangent-angle theorem in Chapter 3 forces any other solution with the same initial tangent to have this same angle and hence the same derivative. The initial point then forces equality by integration. If initial points or tangents differ, a translation and a rotation align them; that proper rigid motion preserves signed curvature, so the established uniqueness applies. $\square$

Notice that $k$ may vanish or change sign. The plane construction uses the left normal, so it has no positivity requirement. The initial angle is determined only modulo $2\pi$, but replacing it by that amount leaves both sine and cosine unchanged and produces exactly the same curve. There is no ambiguity in the geometric data.

## The linear equation used for space frames

We write matrices with columns representing frame vectors and use a submultiplicative matrix norm. For example, the operator norm induced by the Euclidean norm satisfies $\|AB\|\le\|A\|\|B\|$. All matrix integrals and derivatives are componentwise. The following lemma applies to row-vector equations as well by viewing a row as a one-by-$m$ matrix.

**Lemma 5.2 — Linear matrix existence and uniqueness.** If $A:I\to\mathbb R^{m\times m}$ is continuous and $Q_0$ is any compatible initial matrix, then

$$Q'=QA,\qquad Q(s_0)=Q_0$$

has a unique $C^1$ solution on $I$.

**Proof.** First work on any compact interval $J\subseteq I$ containing $s_0$, and let $M$ bound $\|A\|$ there. Set $P_0(s)=Q_0$ and recursively $P_{n+1}(s)=\int_{s_0}^s P_n(u)A(u)\,du$. Induction gives

$$\|P_n(s)\|\le\|Q_0\|\frac{M^n|s-s_0|^n}{n!}.$$

The estimate holds on either side of $s_0$ by taking absolute values in the integral. The exponential series therefore bounds $\sum P_n$ uniformly on $J$. Its sum $Q$ is continuous. Uniform convergence allows integration term by term, giving $Q=Q_0+\int_{s_0}^s Q(u)A(u)\,du$. The integrand is continuous, so the Fundamental Theorem makes $Q$ differentiable with $Q'=QA$ and the correct initial value.

For uniqueness, the difference $D$ of two solutions satisfies $D(s_0)=0$ and $D=\int DA$. Let $C$ bound $\|D\|$ on $J$. Repeated substitution or induction gives $\|D(s)\|\le C M^n|s-s_0|^n/n!$ for every positive integer $n$. For fixed bounded $s$, this tends to zero, so $D=0$. Solutions built on different compact intervals agree on their overlaps by this uniqueness. Every point of $I$ lies with $s_0$ in such a compact interval, so these solutions fit together on all of $I$. $\square$

Two details prevent common gaps. The uniform exponential bound justifies passing from a series to an integral equation, and the integral equation then justifies differentiation. Merely formally differentiating an infinite series would omit that step. Also the argument constructs a global solution on the given interval because the equation is linear and its coefficients are bounded on each compact subinterval. General nonlinear equations can escape to infinity in finite time; the lemma makes no statement about them.

## Reconstructing a spatial frame

Given functions $\kappa,\tau$, form the skew-symmetric matrix

$$A(s)=\begin{pmatrix}0&-\kappa&0\\ \kappa&0&-\tau\\0&\tau&0\end{pmatrix}.$$

If $Q=(T\ N\ B)$ is the frame matrix, the equation $Q'=QA$ is exactly the three Frenet–Serret equations. Suppose the initial matrix $Q_0$ is orthogonal with determinant one. For the solution of Lemma 5.2,

$$(QQ^T)'=Q(A+A^T)Q^T=0.$$

Thus $QQ^T=I$. Since a square matrix with a right inverse is invertible, this also gives $Q^TQ=I$. Its determinant is always either one or minus one and varies continuously, so it stays one on the interval. Therefore its columns remain an oriented orthonormal frame. We have proved this preservation rather than presumed that the ODE solution would automatically have the desired geometry.

**Theorem 5.3 — Fundamental theorem of space curves.** Let $\kappa:I\to(0,\infty)$ be $C^1$ and $\tau:I\to\mathbb R$ continuous. For any point $p$ and positively oriented orthonormal initial frame $(T_0,N_0,B_0)$ at $s_0$, there exists a unique unit-speed $C^3$ curve with that initial point and frame, curvature $\kappa$ and torsion $\tau$. Any two such curves with the same functions and aligned arc-length origins differ by a proper rigid motion.

**Proof.** Solve $Q'=QA$ with the prescribed initial frame and define $\alpha(s)=p+\int_{s_0}^s T(u)\,du$. The frame preservation shows $\|\alpha'\|=1$. Its second derivative is $T'=\kappa N$. Positivity of $\kappa$ makes the Frenet principal normal exactly the constructed $N$ and makes the binormal exactly the constructed $B$. Since $\kappa$ is $C^1$ and $N$ is $C^1$, the second derivative is $C^1$, so $\alpha$ is $C^3$. The last frame equation gives the prescribed torsion by definition.

For uniqueness with fixed initial data, any candidate's Frenet frame solves the same linear equation, so the lemma makes its frame identical. Its position then agrees by integrating the common tangent from the same point. For two different initial frames, the matrix $R=Q_2(s_0)Q_1(s_0)^T$ is orthogonal with determinant one and maps the first frame to the second. Translate $R\alpha_1$ to match the second initial position. Proper rigid motions preserve curvature and torsion, so uniqueness with aligned initial data makes this transformed curve equal to $\alpha_2$. $\square$

The differentiability conditions are chosen to deliver an ordinary $C^3$ curve with classical torsion. With merely continuous positive curvature, the same frame construction still gives a meaningful weaker solution, but the usual third derivative need not exist. We do not silently identify that weaker statement with the theorem just proved.

## Worked examples

### Worked example 1 — A prescribed signed curvature through an inflection

Let $k(s)=s$, choose $p=(0,0)$ and $T_0=(1,0)$ at zero. The angle is $\theta(s)=s^2/2$, and the reconstructed curve is

$$\alpha(s)=\left(\int_0^s\cos(u^2/2)\,du,\ \int_0^s\sin(u^2/2)\,du\right).$$

The derivative has norm one, and differentiating once more gives $\alpha''=sJ\alpha'$, proving signed curvature $s$. No elementary antiderivative is needed. At zero the curve is regular but has zero curvature, so the plane reconstruction remains valid while the positive-curvature spatial theorem would not apply across the whole interval. These two theorems have deliberately different hypotheses.

### Worked example 2 — Constant spatial invariants

For constants $k>0$ and $t\in\mathbb R$, put $c=\sqrt{k^2+t^2}$ and

$$\alpha(s)=\left(\frac{k}{c^2}\cos(cs),\frac{k}{c^2}\sin(cs),\frac{t}{c}s\right).$$

Its speed is one: the two circular velocity components have total squared norm $k^2/c^2$, and the vertical component has squared norm $t^2/c^2$. Treating $cs$ as the angular parameter identifies a helix of radius $a=k/c^2$ and angular rise coefficient $b=t/c^2$. The previous chapter's formulas give curvature $a/(a^2+b^2)=k$ and torsion $b/(a^2+b^2)=t$. The fundamental theorem now proves every unit-speed curve with these constant invariants is properly congruent to this helix. If $t=0$, it is a circle; if $t\ne0$, it never closes because its vertical coordinate changes strictly.

### Worked example 3 — Initial data separate shape from placement

Two curves have identical prescribed positive curvature and torsion on one interval. Suppose the first starts at the origin with standard frame, while the second starts at $p=(1,2,3)$ with frame columns $T_0=(0,1,0)$, $N_0=(-1,0,0)$ and $B_0=(0,0,1)$. The rotation

$$R=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&1\end{pmatrix}$$

has determinant one and maps the first initial frame to the second. Consequently the second curve is $p+R\alpha_1(s)$ after aligning the chosen initial parameter. There is no need to solve the ODE again. Curvature and torsion determine the shape; an initial point and oriented frame determine its placement and initial direction.

## Closure and other limits of the theorem

Periodic functions $\kappa$ and $\tau$ need not produce a closed curve. A constant nonzero torsion helix is the simplest counterexample: its invariants are periodic for every period, while its position continually rises. Even a frame returning to its initial value does not by itself force closure. The integral of the tangent over a period must also vanish. Thus closure is an additional global condition, not a consequence of periodic coefficients alone.

Positive curvature is essential for this precise pair of invariants. When it vanishes, the principal normal and torsion can cease to be defined, and different framing conventions lead to different reconstruction statements. Nor can the theorem identify curves under an arbitrary reflection while keeping the same nonzero torsion: reflection reverses the ambient orientation and the sign of that invariant. These limits are part of the theorem's information, rather than inconvenient exceptions to suppress.

## Reading reconstruction as a geometric initial-value problem

The spatial construction separates two integrations with different roles. Solving the frame equation determines how tangent directions rotate relative to their initial frame. Integrating the first column then determines positions relative to the initial point. If the initial point changes while the frame stays fixed, only a translation changes. If the initial frame changes by a proper rotation, uniqueness of the linear equation rotates the entire resulting frame and the integrated curve by that same fixed rotation. This explains precisely why there is no additional hidden shape parameter in the theorem.

A shift of the arc-length origin requires care when comparing two data sets. Prescribing curvature as a function of distance from a marked point is stronger than prescribing an unmarked set of curvature values. If one curve has data $\kappa(s),\tau(s)$ and the other has $\kappa(s+c),\tau(s+c)$, their initial marks must be aligned by that shift before applying uniqueness. Merely having equal ranges, equal averages or the same maxima gives no such equality of functions. Reflection presents another distinction: it preserves curvature but reverses torsion under the fixed ambient orientation. The proper-congruence conclusion therefore records exactly the data used by the oriented frame equation.

## Exercises

### Exercise 5.1
<a id="fundamental-theorem-curves-ex-1"></a>
Reconstruct a unit-speed plane curve of constant signed curvature $c\ne0$ starting at the origin with tangent $(1,0)$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Integrate the angle $\theta(s)=cs$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Integrate sine and cosine separately and enforce the initial position.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The formula is $\alpha(s)=(\sin(cs)/c,(1-\cos(cs))/c)$. Its derivative is $(\cos(cs),\sin(cs))$ and its curvature is $c$. Its center is $(0,1/c)$ and radius $1/|c|$. Negative $c$ gives the opposite oriented turning. The initial point and tangent fix this particular placement, whereas the invariant alone determines only the circle shape up to an orientation-preserving rigid motion.
</details>

### Exercise 5.2
<a id="fundamental-theorem-curves-ex-2"></a>
Why does the plane theorem allow $k=0$ while the spatial theorem requires $\kappa>0$?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare how the two normals are defined.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
One uses a fixed rotation; the other divides by curvature.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
In the oriented plane, $N=JT$ is defined from every unit tangent, so an inflection causes no failure of the angle construction. For the spatial Frenet frame, $N=T'/\kappa$ and hence is undefined at zero curvature. The reconstruction theorem promises exactly that Frenet normal and its torsion, so it needs positivity. A different spatial framing could support another theorem, but it would use different prescribed data.
</details>

### Exercise 5.3
<a id="fundamental-theorem-curves-ex-3"></a>
Prove the iterative bound for the series terms in Lemma 5.2.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Assume the bound at index $n$ and integrate its product with $M$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Integrating a power creates the next factorial denominator.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The bound is immediate for $P_0=Q_0$. If it holds for $P_n$, then $\|P_{n+1}(s)\|\le\int_{s_0}^s\|Q_0\|M^{n+1}|u-s_0|^n/n!\,|du|$, interpreted with the corresponding ordered limits. This integral equals $\|Q_0\|M^{n+1}|s-s_0|^{n+1}/(n+1)!$. Induction proves the estimate on both sides of the initial point and supplies uniform convergence on every bounded subinterval.
</details>

### Exercise 5.4
<a id="fundamental-theorem-curves-ex-4"></a>
Show that a solution of $Q'=QA$ with skew-symmetric $A$ and orthogonal initial matrix stays orthogonal.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Differentiate $QQ^T$, which places $A+A^T$ together.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A square matrix with a right inverse has that same inverse on the left.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The product rule gives $(QQ^T)'=QAQ^T+QA^TQ^T=0$. Thus $QQ^T=I$ from the initial value. This makes $Q$ invertible with inverse $Q^T$, so $Q^TQ=I$ too. Its determinant is continuously either one or minus one and therefore retains its initial sign. This proves both orthonormality and preservation of the oriented-frame condition used in the geometric theorem.
</details>

### Exercise 5.5
<a id="fundamental-theorem-curves-ex-5"></a>
Give a unit-speed curve with $\kappa=1$, $\tau=1$ and verify the speed.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the constant-invariant helix with $c=\sqrt2$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The radius is one-half and vertical speed is $1/\sqrt2$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Take $\alpha(s)=(\tfrac12\cos(\sqrt2s),\tfrac12\sin(\sqrt2s),s/\sqrt2)$. The circular derivative components have squared norm one-half, and the vertical derivative contributes another one-half, giving speed one. Its helix parameters with angular parameter are $a=b=1/2$, so curvature and torsion are both one by the derived formulas. Translation or a proper rotation gives all other placements with the same invariants.
</details>

### Exercise 5.6
<a id="fundamental-theorem-curves-ex-6"></a>
Explain why periodic curvature and torsion do not guarantee closure.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Constant functions are periodic.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use a helix with nonzero vertical rise.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The curve in Exercise 5.5 has both invariants identically one, hence periodic with any chosen period. But its third coordinate is $s/\sqrt2$, which is strictly increasing, so it never returns to a previous point. Coefficient periodicity in the frame equation neither forces frame periodicity nor vanishing integral of the tangent. Both are separate global issues, and positional closure certainly requires the latter.
</details>

### Exercise 5.7
<a id="fundamental-theorem-curves-ex-7"></a>
Why does a reflection have to be excluded from the uniqueness phrase “up to a proper rigid motion” when torsion is nonzero?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Recall the scalar-triple-product transformation.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
An orthogonal reflection has determinant minus one.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
A reflection reverses the scalar triple product of the first three derivatives, while leaving the squared cross-product norm unchanged. It therefore reverses torsion. Two curves with the same prescribed nonzero torsion cannot in general be obtained from one another by simply reflecting one while keeping the same parameter. Proper rigid motions have determinant one and preserve both invariants, exactly as the proof requires.
</details>

### Exercise 5.8
<a id="fundamental-theorem-curves-ex-8"></a>
State a correct differentiability conclusion if the frame equation has only continuous $\kappa>0$ and continuous $\tau$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The matrix lemma gives a $C^1$ frame.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Integrating its tangent gives a $C^2$ position curve, but not necessarily a third derivative.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The coefficient matrix is continuous, so its frame solution is $C^1$ and remains orthonormal. Integrating $T$ gives a unit-speed $C^2$ curve with second derivative $\kappa N$ and classical curvature $\kappa$. Without additional regularity of $\kappa$, that second derivative need not be differentiable, so the ordinary third-derivative torsion quotient need not exist. One may discuss a frame-based weaker torsion, but cannot assert the proved $C^3$ theorem unchanged.
</details>

### Exercise 5.9
<a id="fundamental-theorem-curves-ex-9"></a>
If a unit-speed curve and its frame are periodic with period $L$, identify the additional integral condition needed for the position to be periodic.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Position changes by the integral of velocity.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use periodicity of the tangent to make the displacement independent of the initial parameter.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The necessary and sufficient condition is $\int_0^L T(s)\,ds=0$ after choosing any origin. Since $T$ is periodic, its integral over any interval of length $L$ is the same vector. The Fundamental Theorem gives $\alpha(s+L)-\alpha(s)=\int_s^{s+L}T(u)\,du$. Thus the displacement vanishes for every $s$ exactly when that one period integral is zero. Returning orientation alone does not make this translation vanish.
</details>

### Exercise 5.10
<a id="fundamental-theorem-curves-ex-10"></a>
Reconstruct the plane curve with $k(s)=s$ and initial tangent $(0,1)$ at the origin. Relate it to Worked example 1.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The initial angle is now $\pi/2$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Adding $\pi/2$ rotates the tangent and position integrals by a right angle.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The angle is $\theta(s)=\pi/2+s^2/2$. Therefore $\alpha(s)=(-\int_0^s\sin(u^2/2)\,du,\int_0^s\cos(u^2/2)\,du)$. This is the counterclockwise right-angle rotation of the curve in Worked example 1. It is unit speed and has the same signed curvature, illustrating the proper-rigid-motion part of the plane theorem without solving any new integral or differential equation.
</details>

## Sources

Original Euler prose, constructions and exercises, CC BY-SA 4.0. The linear matrix-series proof is supplied here and is not an assumed ODE prerequisite. A primary-author comparison is Sucharit Sarkar's [UCLA differential-geometry notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lecture 5. The plane and space frame seeds in the existing Unhurried and Quarto collections remain unchanged. Andrew Pressley's [second-edition publisher record](https://link.springer.com/book/10.1007/978-1-84882-891-9) identifies a standard book-scale reference.

## Summary

Continuous signed plane curvature determines an angle and then a unit-speed curve. Positive spatial curvature and continuous torsion determine an oriented frame through a proved linear matrix equation, then determine position by integration. Initial point and frame remove the freedom of proper rigid motion. Differentiability and positivity are needed for the classical torsion statement, while closure requires additional global information. The next chapter studies global turning and the relationship between length and enclosed area.
