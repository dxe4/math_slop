# 51. The gradient, moving paths, and level geometry

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Calculus III · third lesson.** Prerequisite: the [total derivative](total-differentiability.md). Plan two study sessions: one for the geometry and one for the chain rule and implicit curves. You should leave able to distinguish a rate per unit time from a rate per unit distance, compute a tangent plane, and explain why a nonzero gradient is normal to a regular level curve.

## From a plane to a directional rate

When \(f\) is differentiable at \(p=(a,b)\), its total derivative is

\[
Df(p)[h,k]=f_x(p)h+f_y(p)k
=\nabla f(p)\cdot(h,k),
\qquad
\nabla f=(f_x,f_y).
\]

For a **unit** direction \(u\), substitute displacement \(tu\) into the definition and divide by \(t\). The remainder satisfies \(R(tu)/t\to0\) because \(\|tu\|=|t|\). Consequently the directional derivative is \(D_uf(p)=\nabla f(p)\cdot u\). Cauchy–Schwarz shows \(|D_uf|\leq\|\nabla f\|\). If the gradient is nonzero, the maximum occurs in its direction and equals \(\|\nabla f\|\); the minimum occurs opposite it. If \(\nabla f=0\), every first-order directional rate vanishes, but actual values may still rise quadratically.

The unit condition matters. A velocity vector \(v\) with \(\|v\|=3\) measures change in *time* at three length units per time unit; normalizing it changes the question. Units should expose that error.

### Worked example: a temperature path

Let \(T(x,y)=x^2+2y^2\) degrees and let a sensor move along \(r(t)=(1+t,\tfrac12-t)\) metres, where \(t\) is seconds. At \(t=0\), \(\nabla T=(2,2)\) degrees/metre and velocity \(r'(0)=(1,-1)\) metres/second, so the rate is zero degrees/second. Direct substitution verifies \(T(r(t))=\tfrac32+3t^2\). The sensor's temperature does change after it moves; it has only **zero instantaneous first-order change** at \(t=0\). Its path is the tangent *line* to a contour, not the contour itself.

## See the contour and the local surface together

The investigation uses the positive quadratic family \(f(x,y)=c_xx^2+c_yy^2\), initially \(c_x=1\), \(c_y=2\). The controls change both coefficients and the selected point \(P=(a,b)\). The contour occupies the \(x,y\) input plane. The separate surface panel is an oblique projection of the graph \(z=f(x,y)\): screen coordinates are \(X=x+0.35y\), \(Y=0.5y+0.4z\). It is a projection of three axes onto two screen dimensions, not another contour. The red point \(P\) appears in both views; the teal grid is the local tangent plane at that point.

```investigation
surface-contour
```

**Predict before moving a control:** at \((a,b)=(1,\tfrac12)\), which way can one move without a first-order change in \(f\)? Write a direction and a candidate plane. **Explore:** move \(a\) and \(b\) separately. The display reports \(f(a,b)\), the partials \(f_x=2c_xa\), \(f_y=2c_yb\), and \(\|\nabla f\|\). Compare the drawn contour tangent with the gradient, then find a point where both partials vanish. **Explain:** at the default coefficients and point, \(f=\tfrac32\), \(\nabla f=(2,2)\), a unit contour-tangent direction is \((1,-1)/\sqrt2\), and the tangent plane is

\[
z=\tfrac32+2(x-1)+2(y-\tfrac12)=2x+2y-\tfrac32.
\]

Along the *straight* tangent line \((x,y)=(1+t,\tfrac12-t)\), \(f=\tfrac32+3t^2\); it is constant to first order, not exactly constant. **Transfer:** before changing the display, calculate a unit tangent direction, fastest-increase direction and tangent plane for \(g(x,y)=4x^2+y^2\) at \((\tfrac12,1)\). Set \(c_x=4\), \(c_y=1\), \(a=\tfrac12\), \(b=1\). Compare both views and all readouts with your prediction. Finally compose \(g\) with a straight tangent line and explain why the resulting quadratic change does not contradict the zero first-order rate. Save your explanation, inspect the worked answer below, and revise any step that the visual or algebra challenges.

## Prove the path chain rule

Let \(r(t)=(x(t),y(t))\) be differentiable at \(t_0\), with \(r(t_0)=p\), and let \(f\) be differentiable at \(p\). Then

\[
\frac{d}{dt}f(r(t))\bigg|_{t=t_0}
=\nabla f(p)\cdot r'(t_0)
=f_x(p)x'(t_0)+f_y(p)y'(t_0).
\]

The proof composes two local linear approximations. Write \(\Delta r=r(t_0+s)-p=r'(t_0)s+o(|s|)\). Differentiability of \(f\) gives \(f(p+\Delta r)-f(p)=\nabla f(p)\cdot\Delta r+o(\|\Delta r\|)\). Because \(\|\Delta r\|=O(|s|)\), the final remainder is \(o(|s|)\). Divide by \(s\) and let \(s\to0\). This argument still works when \(r'(t_0)=0\); one must not divide by the path's speed in that case.

For a path in three dimensions, the same argument gives \(\frac{d}{dt}F(r(t))=\nabla F(r(t))\cdot r'(t)\), provided \(F\) and \(r\) are differentiable at the relevant points. For a composite \(H(s,t)=f(x(s,t),y(s,t))\), holding \(t\) fixed and applying the path rule gives \(H_s=f_xx_s+f_yy_s\), and similarly for \(H_t\). This is the multivariable chain rule in coordinate form; every outer partial is evaluated at the inner point.

When both outputs of an inner map matter, organize those four rates in a small table. If \(\Phi(s,t)=(x(s,t),y(s,t))\), its derivative sends an input displacement \((h,k)\) to the first-order output displacement

\[
D\Phi(s,t)[h,k]=(x_s h+x_t k,\;y_s h+y_t k).
\]

In matrix notation this is the \(2\times2\) array \(J_\Phi=\begin{pmatrix}x_s&x_t\\y_s&y_t\end{pmatrix}\) acting on \((h,k)\). It is a bookkeeping form of the local linear map, not a new assumption. Composing local approximations gives \(D(f\circ\Phi)=Df\circ D\Phi\). The error remains smaller than the input displacement because \(\Delta\Phi=D\Phi[h,k]+o(\sqrt{h^2+k^2})\), and the outer remainder is \(o(\|\Delta\Phi\|)\). This extends the one-path proof and explains why the chain rule multiplies rates in the correct order.

For a concrete check, let \(\Phi(s,t)=(s^2-t^2,2st)\) and \(f(u,v)=u^2+v^2\). Algebra gives \(f(\Phi(s,t))=(s^2+t^2)^2\). At \((1,1)\), \(\Phi=(0,2)\), \(\nabla f=(0,4)\), and \(J_\Phi=\begin{pmatrix}2&-2\\2&2\end{pmatrix}\); therefore the composite gradient is \((8,8)\). Differentiating \((s^2+t^2)^2\) directly gives the same result. The determinant of this inner map is \(4(s^2+t^2)\); in the later change-of-variables lesson it will measure local area scaling. That fact needs a separate geometric argument and cannot be inferred just from the chain rule for scalar outputs.

### A second path check

Let \(f(x,y)=xy\) and \(r(t)=(\cos t,\sin t)\). Direct composition yields \(f(r(t))=\tfrac12\sin(2t)\), whose derivative is \(\cos(2t)\). The chain rule gives \(\nabla f=(y,x)\) and \(r'=(-\sin t,\cos t)\), hence \(-\sin^2t+\cos^2t=\cos(2t)\). At \(t=\pi/6\) the rate is \(1/2\) per unit time. The circular path has unit speed, so here the per-time and per-distance numerical rates happen to agree.

## Why a gradient is normal to a level curve

If a differentiable path \(r(t)\) stays on \(f=c\), then \(f(r(t))=c\). Differentiating gives \(\nabla f(r(t))\cdot r'(t)=0\). At a **regular point** where \(\nabla f\ne0\) and \(r'(t)\ne0\), the gradient is a normal vector to the level curve. At a point with zero gradient, the equation \(0=0\) gives no unique tangent. For \(f=x^2+2y^2\), the zero level contains only the origin, and talking about its unique contour tangent there would be misleading.

To describe a level curve \(F(x,y)=c\) locally as \(y=y(x)\), a common sufficient condition is that \(F\) is continuously differentiable near the point and \(F_y\ne0\) there. The implicit function theorem then provides a local differentiable \(y(x)\), and differentiating \(F(x,y(x))=c\) yields \(y'=-F_x/F_y\). This fraction is **not** valid when \(F_y=0\); a curve may instead be locally written as \(x=x(y)\), or it may be singular. The theorem supplies local existence; the chain-rule calculation supplies the slope.

For the ellipse \(x^2+2y^2=3\) at \((1,1)\), \(F_y=4\ne0\), so \(dy/dx=-2/4=-1/2\). A tangent vector is \((2,-1)\) and a normal is \((2,4)\). At \((\sqrt3,0)\), \(F_y=0\) and the tangent is vertical; the quotient for \(dy/dx\) cannot represent it, though \(F_x\ne0\) allows \(x\) as a function of \(y\).

## Independent work

```exercise
{"id":"calc3-gradient-time-distance","type":"written","prompt":"For T=x²+2y² and r(t)=(1+t,1/2−t), calculate the rate at t=0 per unit time and per unit distance. Explain why the temperature is not constant on that straight path.","hints":["The speed at zero is √2 metres/second.","Substitute the path into T and inspect the first nonzero term."],"rubric":["Finds gradient (2,2) and velocity (1,−1)","Gets zero for both instantaneous rates with appropriate units","Shows exact path temperature 3/2+3t²","Distinguishes zero derivative from constant function"],"solution":"The chain rule gives (2,2)·(1,−1)=0 degrees/second. Dividing by speed √2 gives 0 degrees/metre. Yet substitution gives T(r(t))=3/2+3t², which exceeds its initial value for every nonzero sufficiently small t. The tangent line has zero first-order change; its quadratic change is real."}
```

1. For \(g(x,y)=4x^2+y^2\) at \((\tfrac12,1)\), complete the transfer from the investigation. Explain what happens along your straight tangent line.
2. A particle follows \(r(t)=(t,t^2)\) through \(f(x,y)=x^2+y^2\). At \(t=1\), find rate per time, speed, and rate per distance. Which number can change under a new time parametrisation of the same geometric path?
3. At \((1,0)\) on \(x^2+y^2=1\), calculate the slope \(dy/dx\) from the formal fraction \(-F_x/F_y\). What fails? Give a valid tangent line using a normal vector.
4. If a path has \(r'(t_0)=0\), explain why \(df/dt=0\) follows from the chain rule but a unit direction \(r'(t_0)/\|r'(t_0)\|\) is undefined.
5. For \(H(s,t)=\exp(s^2+t^2)\), compute \(\nabla H(1,1)\) directly and by composing \(f(u)=e^u\) with \(u=s^2+t^2\). Which derivative is evaluated at the **inner output**, and why would \(f'(1)\) be wrong?

<details><summary>Worked answers and checks</summary>

1. \(g=2\), \(\nabla g=(4,2)\). One unit tangent is \((-1,2)/\sqrt5\); fastest increase uses \((2,1)/\sqrt5\), with rate \(2\sqrt5\). The plane is \(z=2+4(x-\tfrac12)+2(y-1)\). On the straight tangent path \((\tfrac12-t,1+2t)\), \(g=2+8t^2\), so it leaves the level curve except at \(t=0\).
2. \(f(r(t))=t^2+t^4\), so at \(t=1\) rate per time is 6. The velocity is \((1,2)\), speed \(\sqrt5\), and rate per distance \(6/\sqrt5\). A smooth change of clock changes velocity and rate per time; with the same orientation it leaves the geometric rate per distance unchanged.
3. \(F_y=2y=0\), so the quotient is undefined. \(\nabla F(1,0)=(2,0)\) is horizontal, making the tangent vertical: \(x=1\).
4. The chain rule gives \(\nabla f\cdot0=0\). Division by zero speed cannot define an instantaneous path direction; the path might reverse or have different one-sided directions.
5. Directly, \(\nabla H=(2s e^{s^2+t^2},2t e^{s^2+t^2})\), so \(\nabla H(1,1)=(2e^2,2e^2)\). By the chain rule, the inner gradient at \((1,1)\) is \((2,2)\) and the outer derivative is \(f'(u)=e^u\) evaluated at \(u=2\), yielding the same vector. Evaluating \(f'\) at 1 would ignore the actual inner output.

</details>
