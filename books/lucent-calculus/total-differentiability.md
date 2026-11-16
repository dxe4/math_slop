# 50. Partial derivatives and the total derivative

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Calculus III · second lesson.** Prerequisite: [functions of several variables](multivariable-differentiation.md) and one-variable differentiation. The goal is to decide when two coordinate slopes really form one local plane. Work through the counterexamples before using the convenient continuous-partials theorem.

## Two easy experiments and one stronger question

For a scalar field \(f\) near an interior point \((a,b)\), the partial derivatives are

\[
f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h},
\qquad
f_y(a,b)=\lim_{k\to0}\frac{f(a,b+k)-f(a,b)}{k}.
\]

They are slopes of two *slices*, holding the other input fixed. If \(f(x,y)=x^2y+\sin y\), then \(f_x=2xy\) and \(f_y=x^2+\cos y\). A slice graph can show either slope but cannot by itself establish how \(f\) behaves when **both** inputs change. At a boundary point, one-sided coordinate rates may exist; the usual two-sided definition above assumes an open neighborhood in the domain.

The next scene uses the different field \(f(x,y)=x^2+xy+y^2\), whose slice at \(y=c\) is \(f(x,c)=x^2+xc+c^2\).

```mathviz
scene "One family of surface slices, not the whole surface";
domain -2 2;
range -3 8;
param c = 1 from -1.5 to 1.5;
param a = 0.7 from -1.5 to 1.5;
fn slice(x) = x^2+x*c+c^2;
plot slice color teal;
tangent slice at a;
```

Here the horizontal coordinate is \(x\), the vertical coordinate is \(z=f(x,c)\), and \(c\) selects a frozen \(y\). **Predict** the tangent slope at \(x=a\) before moving \(c\). The calculation \(f_x(a,c)=2a+c\) explains the movement. **Transfer:** edit the scene to \(x^2+c^2\); changing the slice height then leaves the tangent slope unchanged. It is incorrect to call this plot a full surface.

## The local-plane definition

Let \(r=\sqrt{h^2+k^2}\). We say \(f\) is **differentiable** at \((a,b)\) if there are numbers \(A,B\) and a remainder \(R(h,k)\) such that

\[
f(a+h,b+k)=f(a,b)+Ah+Bk+R(h,k),
\qquad
\lim_{(h,k)\to(0,0)}\frac{R(h,k)}{r}=0.
\]

The linear function \(Df(a,b)[h,k]=Ah+Bk\) is the **total derivative**. The denominator is the *whole displacement length*, so the approximation must work as the direction changes. The tangent plane to the graph is \(z=f(a,b)+A(x-a)+B(y-b)\). It is local; it does not assert that the graph actually lies in that plane.

The coefficients are forced. Put \(k=0\) in the definition and divide by nonzero \(h\). Because \(|R(h,0)/h|=|R(h,0)|/|h|\to0\), the first partial exists and equals \(A\). Setting \(h=0\) gives \(B=f_y(a,b)\). Thus **differentiability implies both partial derivatives**. Also, by the dot-product bound from [the multivariable introduction](multivariable-differentiation.md),

\[
|f(a+h,b+k)-f(a,b)|
\leq \sqrt{A^2+B^2}\,r+|R(h,k)|\to0,
\]

so differentiability implies continuity. Neither implication reverses without an extra hypothesis.

### Worked example: know the error, not just the plane

For \(f(x,y)=x^2+xy+y^2\) at \((1,1)\), the value is 3 and both partials are 3. With \(h=x-1\), \(k=y-1\), exact expansion gives

\[
f(1+h,1+k)=3+3h+3k+\underbrace{(h^2+hk+k^2)}_{R(h,k)}.
\]

Since \(|hk|\leq(h^2+k^2)/2\), we have \(|R|\leq3r^2/2\), hence \(|R|/r\leq3r/2\to0\). At \((1.02,0.97)\), the plane predicts \(2.97\); the exact value is \(2.9707\). The error \(0.0007\) comes from the displayed quadratic remainder, rather than from trusting a plot.

## Continuous partials are sufficient

If \(f_x\) and \(f_y\) exist on an open neighborhood of \((a,b)\) and are continuous **at** \((a,b)\), then \(f\) is differentiable there. The neighborhood assumption matters: we will apply one-variable mean value theorems on nearby horizontal and vertical segments.

To prove it, split the change by moving vertically from \((a,b)\) to \((a,b+k)\), then horizontally to \((a+h,b+k)\). For nonzero \(h,k\), the one-variable mean value theorem supplies numbers \(\theta,\eta\in(0,1)\) such that

\[
f(a+h,b+k)-f(a,b)
=h f_x(a+\theta h,b+k)+k f_y(a,b+\eta k).
\]

Subtract \(h f_x(a,b)+k f_y(a,b)\). The remainder is \(h\Delta_x+k\Delta_y\), where both derivative differences tend to zero as \((h,k)\to(0,0)\) by continuity. Since \(|h|/r\leq1\) and \(|k|/r\leq1\), \(|R|/r\leq|\Delta_x|+|\Delta_y|\to0\). If one increment is zero, the corresponding one-variable argument gives the same conclusion. This proves the theorem; the condition is sufficient, not a definition and not necessary.

### A continuous function whose partials and directional rates mislead

Define \(q(0,0)=0\) and \(q(x,y)=x^3/(x^2+y^2)\) elsewhere. It is continuous at the origin because \(|q(x,y)|\leq|x|\leq r\). On the axes, \(q(h,0)=h\) and \(q(0,k)=0\), so \(q_x(0,0)=1\) and \(q_y(0,0)=0\). The only possible total derivative would be \(L(h,k)=h\).

Along \((h,k)=(t,t)\) with \(t>0\), \(q(t,t)=t/2\). Thus \((q(t,t)-L(t,t))/\sqrt{2t^2}=(-t/2)/(\sqrt2t)=-1/(2\sqrt2)\), not zero. The function is **not differentiable** at the origin, despite continuity and both partials.

For every fixed direction \(u=(u_1,u_2)\ne0\), the directional difference quotient equals

\[
\lim_{t\to0}\frac{q(tu)-q(0)}{t}
=\frac{u_1^3}{u_1^2+u_2^2}.
\]

Every directional derivative exists, yet these values are not the dot product \((1,0)\cdot u=u_1\). Fixed-direction tests do not force a single local linear law.

### Why the sufficient theorem is not an equivalence

It is also possible to be differentiable at a point while a nearby partial derivative is discontinuous there. Define \(w(x,y)=x^2\sin(1/x)\) when \(x\ne0\), and \(w(0,y)=0\). At the origin, \(|w(h,k)|\leq h^2\leq h^2+k^2=r^2\), so \(w(h,k)/r\to0\). Its total derivative at the origin is therefore zero. For \(x\ne0\), however,

\[
w_x(x,y)=2x\sin(1/x)-\cos(1/x),
\]

while \(w_x(0,y)=\lim_{h\to0}h\sin(1/h)=0\). Approaching \(x=0\) through values where \(\cos(1/x)=1\) and where it equals \(-1\) produces different derivative values near the origin, so \(w_x\) is not continuous there. The local-plane definition decides differentiability; the continuous-partials theorem is a convenient proof route when its stronger hypotheses happen to hold. A plot with finitely many oscillations would not justify the limiting claim.

## Approximation in a model

Suppose \(T(x,y)=20+x^2y\) gives temperature in degrees Celsius and \(x,y\) are metres. At \((2,1)\), \(T=24\), \(T_x=T_y=4\) degrees/metre. For a displacement \((0.01,-0.02)\) metres, the plane predicts \(24+4(0.01)+4(-0.02)=23.96\) degrees. The exact value \(20+(2.01)^2(0.98)=23.959298\) differs by \(-0.000702\) degrees. The sign of the prediction depends on the **combination** of both motions.

## Check, revise, transfer

The saved task first reconstructs the counterexample just proved, so use it to check proof structure rather than as unfamiliar attainment evidence. The changed function after it is the independent transfer.

```exercise
{"id":"calc3-total-derivative-counterexample","type":"written","prompt":"A classmate says: q has partial derivatives (1,0) at the origin and every directional derivative exists, so its tangent plane is z=x. Use q(x,y)=x³/(x²+y²), q(0,0)=0, to assess that claim along one noncoordinate approach.","hints":["The candidate plane is forced by the two coordinate slices.","Test the remainder on y=x, then divide it by the displacement length."],"rubric":["Computes both partial derivatives correctly","Identifies the only possible linear map L(h,k)=h","Finds a nonzero normalized remainder along y=x","Explains why fixed directional derivatives do not imply total differentiability"],"solution":"The axes give q_x(0,0)=1 and q_y(0,0)=0. Along h=k=t>0, q(t,t)=t/2 while L(t,t)=t, so the error divided by √2 t is −1/(2√2), not zero. A candidate plane exists as an algebraic expression but fails the differentiability definition. Fixed-direction limits do not control all small displacements by one linear error bound."}
```

For a different function, define \(v(0,0)=0\) and \(v(x,y)=x^2y/(x^2+y^2)\) off the origin. [The multivariable introduction](multivariable-differentiation.md) proved continuity. Its coordinate partials at the origin are zero. Decide whether it is differentiable there, and prove the answer with a normalized remainder bound or witness. Does one extra power in the numerator settle the question?

<details><summary>Transfer solution</summary>

Along \(h=k=t>0\), \(v(t,t)=t/2\), so \(|v(t,t)|/r=1/(2\sqrt2)\), not zero. Thus \(v\) is continuous with zero partials, but not differentiable. The extra power made it continuous, yet the numerator's total degree three against a degree-two denominator leaves a first-order ridge. A differentiable variant is \(w=x^3y/(x^2+y^2)\), defined zero at the origin: \(|w|\leq|x||y|\leq r^2/2\), so \(|w|/r\to0\). Do not infer differentiability from continuity.

</details>
