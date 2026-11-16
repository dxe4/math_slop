# 20. Geometry and limits for functions of several variables

**Calculus III · first lesson.** Allow two study sessions and a problem session. You should already know one-variable limits, derivatives, the Pythagorean theorem, and the equation of a line. This lesson supplies the vector geometry needed later in calculus; no separate linear algebra course is assumed. By the end, you should be able to describe a domain geometrically, distinguish a graph from a level set, prove a two-variable limit with a distance bound, and disprove one with two paths.

## An input is a place, not a pair of unrelated numbers

A scalar field \(f:D\subseteq\mathbb R^2\to\mathbb R\) assigns an output to each point \((x,y)\) in its **domain**. A temperature map is a scalar field: \((x,y)\) locates a sensor and \(f(x,y)\) is its temperature. Its **graph** lives in three dimensions, \(\{(x,y,z):z=f(x,y)\}\). A **level set** \(f(x,y)=c\) lives in the input plane. Drawing a level curve is like drawing a contour on a map: it records equal outputs, not the height of a three-dimensional surface. We will use both representations and say which one each picture shows.

For example, \(f(x,y)=x^2+2y^2\) has elliptical level curves \(x^2+2y^2=c\) for \(c>0\). A different field \(g(x,y)=\sqrt{4-x^2-y^2}\) has domain the **closed disk** \(x^2+y^2\leq4\), because the square root requires a nonnegative argument. Its graph is the upper hemisphere; its level sets \(g=c\), for \(0\leq c\leq2\), are circles with radius \(\sqrt{4-c^2}\). The boundary circle belongs to the domain even though a two-sided partial derivative of \(g\) need not exist there. Distinguish domain, graph, and level set before differentiating anything.

```mathviz
scene "A displacement in the input plane";
domain -2 3;
range -2 3;
coordinates equal;
param a = 1 from -1 to 2;
param b = 0.5 from -1 to 2;
point origin = (0,0) color blue;
point location = (a,b) color rose;
segment radial from (0,0) to (a,b) color amber;
segment horizontal from (0,0) to (a,0) color teal;
segment vertical from (a,0) to (a,b) color teal;
```

**Predict:** Is the radial distance \(|a|+|b|\) or \(\sqrt{a^2+b^2}\)? Move one coordinate while keeping the other fixed. **Explain:** the right triangle gives the second formula. The teal legs encode coordinate changes; the amber segment encodes the whole displacement. **Transfer:** for a displacement from \((1,-2)\) to \((1+h,-2+k)\), write its length. Explain why \(h\to0\) alone says nothing about that length when \(k\) varies.

## The geometry we need

Write \(v=(v_1,v_2)\), \(\|v\|=\sqrt{v_1^2+v_2^2}\), and \(u\cdot v=u_1v_1+u_2v_2\). A **unit vector** has length one. The dot product measures the component of one displacement in the direction of another: \(u\cdot v=\|u\|\|v\|\cos\theta\). Thus \(u\cdot v=0\) means perpendicularity when neither vector is zero. We need one basic bound throughout this course:

\[
|u\cdot v|\leq\|u\|\,\|v\|.
\]

To see why, let \(u\ne0\) and note that \(\|v-tu\|^2\geq0\) for every real \(t\). This quadratic in \(t\) has its minimum at \(t=(u\cdot v)/\|u\|^2\). Substituting yields \(0\leq\|v\|^2-(u\cdot v)^2/\|u\|^2\), which is the claimed inequality after taking square roots. If \(u=0\), both sides are zero. This proof is useful because it does not assume a picture tells us a bound for every possible direction.

The affine equation \(z=c+Ah+Bk\) describes a plane over displacements \((h,k)\). Its two slopes are \(A\) and \(B\). Later, a differentiable scalar field will have one such plane that captures **all** small input directions at once. The vector \((A,B)\) is the gradient; the expression \(Ah+Bk=(A,B)\cdot(h,k)\) makes the connection to geometry precise.

### Three-dimensional geometry for later calculus

A point \(P=(x,y,z)\) in space and a displacement vector \(v=(v_1,v_2,v_3)\) use the same ordered triples but play different roles: points locate; vectors move. Their distance and dot product extend by one coordinate:

\[
\|v\|=\sqrt{v_1^2+v_2^2+v_3^2},
\qquad
u\cdot v=u_1v_1+u_2v_2+u_3v_3.
\]

The same minimum-of-\(\|v-tu\|^2\) proof gives \(|u\cdot v|\leq\|u\|\|v\|\) in space. If a nonzero vector \(n\) is normal to a plane through \(P_0\), every displacement \(P-P_0\) *within* that plane is perpendicular to \(n\), so its equation is \(n\cdot(P-P_0)=0\). Conversely this equation describes a plane because it imposes one independent linear condition on three coordinates. For \(n=(1,-2,2)\) and \(P_0=(1,0,-1)\), the plane is \(x-2y+2z+1=0\). A tempting wrong sign is exposed by substituting \(P_0\): \(1+2(-1)+1=0\), as required.

For two nonparallel vectors \(u,v\) in space, the **cross product**

\[
u\times v=(u_2v_3-u_3v_2,\;u_3v_1-u_1v_3,\;u_1v_2-u_2v_1)
\]

is perpendicular to both: substitute its components into \(u\cdot(u\times v)\) and the six terms cancel in pairs; the same holds for \(v\). Its length equals the area of the parallelogram spanned by \(u,v\), and its sign/orientation is fixed by the right-hand rule. Squaring the displayed components and collecting terms proves \(\|u\times v\|^2=\|u\|^2\|v\|^2-(u\cdot v)^2\); the right side is \(\|u\|^2\|v\|^2\sin^2\theta\). Later, surface integration will use \(r_s\times r_t\) as an **oriented area vector**, so reversing the parameter order reverses flux sign. At this stage, use it as a geometry tool; it is not a separate matrix course.

**Geometry check:** For \(u=(1,1,0)\) and \(v=(0,1,1)\), \(u\times v=(1,-1,1)\). Its dot product with each input vector is zero and its length is \(\sqrt3\). The plane through the origin spanned by \(u,v\) therefore has equation \(x-y+z=0\). Reversing the order to \(v\times u\) changes the normal's sign, but not the unoriented plane.

### Worked domain example: intersect the restrictions

For \(q(x,y)=\ln(9-x^2-y^2)/\sqrt{y-x}\), the logarithm requires \(x^2+y^2<9\), and the denominator requires \(y-x>0\). The domain is the open part of the radius-three disk lying above the line \(y=x\); neither the circle nor the diagonal belongs to it. Drawing one condition and forgetting the other is a common error. At \((0,1)\), both restrictions hold, so a small open disk around the point remains inside the domain. At \((0,0)\), the formula is undefined. A plot that omits the forbidden points cannot make them part of the domain.

## What does \((x,y)\to(a,b)\) require?

The limit \(\lim_{(x,y)\to(a,b)}f(x,y)=L\) means: for every \(\varepsilon>0\), there is \(\delta>0\) such that every domain point satisfying \(0<\sqrt{(x-a)^2+(y-b)^2}<\delta\) also satisfies \(|f(x,y)-L|<\varepsilon\). Every allowed approach matters. The value at \((a,b)\) need not exist. Continuity at a domain point means the limit exists and equals the value there.

One often proves a limit by bounding the output error in terms of \(r=\sqrt{(x-a)^2+(y-b)^2}\). Since \(|x-a|\leq r\) and \(|y-b|\leq r\), polynomial terms have useful bounds. For \(f(x,y)=x^2y\) at \((0,0)\), \(|x^2y|\leq r^3\). Given \(\varepsilon>0\), choose \(\delta=\varepsilon^{1/3}\). Then \(0<r<\delta\) gives \(|f|<\varepsilon\), proving the limit is zero through every path. A graph sampled on finitely many rays would not supply that universal step.

### Worked contrast: axes can lie

Define \(p(x,y)=xy/(x^2+y^2)\) off the origin and \(p(0,0)=0\). On both coordinate axes, \(p=0\). Along \(y=x\ne0\), however, \(p(x,x)=1/2\). If a limit existed, its restriction to every path approaching the origin would have that same value, so the limit does not exist. This proves failure using **two** paths. Checking several paths and finding agreement would never prove existence.

A related function behaves differently: define \(s(x,y)=x^2y/(x^2+y^2)\) off the origin and \(s(0,0)=0\). The inequality \(x^2/(x^2+y^2)\leq1\) gives \(|s(x,y)|\leq|y|\leq r\). Thus \(s\to0\) by a single bound valid for every direction. The fractions look similar, so simplifying an expression by visual resemblance is unreliable; track the power of the distance in the numerator.

## Along a path and along a sequence

If \(f(x,y)\to L\) at \((a,b)\), every path \(\gamma(t)\) in the domain with \(\gamma(t)\to(a,b)\) has \(f(\gamma(t))\to L\). The converse is delicate if “path” means only a few lines or smooth curves. A useful exact test is the **sequential criterion**: the limit is \(L\) if and only if every sequence of domain points \((x_n,y_n)\ne(a,b)\) approaching \((a,b)\) has \(f(x_n,y_n)\to L\). The forward direction follows by applying the distance condition to sufficiently late sequence terms. For the converse, if the distance condition fails at some \(\varepsilon_0>0\), choose a violating point within distance \(1/n\) for each \(n\); those points approach \((a,b)\) while their output errors stay at least \(\varepsilon_0\). This is the precise reason one counterexample sequence refutes a proposed limit.

### Independent checks

1. Describe the domain and boundary inclusion for \(\sqrt{1-x^2-y^2}/(y+1)\). Which restriction matters on the closed unit disk?
2. Prove \(xy\to0\) as \((x,y)\to(0,0)\) using the inequality \(2|xy|\leq x^2+y^2\). Supply a \(\delta(\varepsilon)\).
3. For \(u(x,y)=x^2y/(x^4+y^2)\) away from the origin, check the axes and then try \(y=x^2\). Decide whether a limit exists. Explain why the substitution is a strategic choice rather than a guess at a universal proof.
4. A student writes “the horizontal and vertical cross-sections both approach zero, so the surface is continuous.” Construct a rebuttal with a formula, and state what kind of bound *would* finish a proof of continuity.
5. Find a normal and the area of the parallelogram spanned by \((1,2,0)\) and \((0,1,2)\). Write the plane through \((1,0,0)\) parallel to both vectors. Which quantity changes sign if the vectors are swapped?

<details><summary>Guidance and complete answers</summary>

1. The square root allows the closed unit disk. On it \(y+1=0\) only at \((0,-1)\), which must be removed. The unit circle otherwise belongs, even though the numerator is zero there.
2. Since \(|xy|\leq r^2/2\), choose \(\delta=\sqrt{2\varepsilon}\). The strict input inequality yields \(|xy|<\varepsilon\).
3. Both axes give zero. Along \(y=x^2\), the value is \(x^4/(2x^4)=1/2\) for nonzero \(x\), so no limit exists. Matching the powers in the denominator exposes a path on which its two terms remain comparable.
4. Use \(p(x,y)=xy/(x^2+y^2)\) with value zero at the origin. Both coordinate axes give zero, but the diagonal gives \(1/2\). A bound \(|f(x,y)-f(0,0)|\leq\phi(r)\) with \(\phi(r)\to0\) would control every approach and establish continuity.
5. The cross product is \((4,-2,1)\), with length \(\sqrt{21}\); that is the parallelogram area. With \(P_0=(1,0,0)\), the plane is \(4(x-1)-2y+z=0\). Swapping input vectors negates the oriented normal but leaves its length and the plane unchanged.

</details>

**Later retrieval:** In the differentiability lesson, revisit \(p\) and compare it with a function that is continuous and has both partial derivatives, yet is still not differentiable. Which implication fails in each case?
