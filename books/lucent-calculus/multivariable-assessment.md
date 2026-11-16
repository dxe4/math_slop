# Calculus III checkpoint: local change and constrained extrema

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Role:** individual cumulative assessment after Problem set C3 and before multiple integration. Suggested closed-book sitting: 100 minutes, 80 points, followed by an open-book correction. State any theorem and its hypotheses when you use it. A plotted point, a calculator answer, or an unchecked multiplier equation does not finish a proof. The questions deliberately combine earlier limits, local approximation, path reasoning, and optimization without naming the method in each part.

## 1. A curve that defeats every fixed direction (20 points)

Define \(F(0,0)=0\) and \(F(x,y)=x^3y/(x^4+y^2)\) elsewhere. Show that \(F\) is continuous at the origin and that every directional derivative there is zero. Then decide whether \(F\) is differentiable there. Explain why the function you used to prove continuity did not suffice to prove differentiability.

```exercise
{"id":"calc3-exam-ridge","type":"written","prompt":"Submit a complete argument for continuity, all fixed directional derivatives, and differentiability or failure for F=x³y/(x⁴+y²), F(0,0)=0.","hints":["Apply 2|x²y|≤x⁴+y² to bound F.","For a fixed direction u, substitute (x,y)=tu and separate u_2=0 from u_2≠0.","To test the total derivative, balance x⁴ and y² with y=x²."],"rubric":["Proves |F|≤|x|/2 and hence continuity","Computes directional derivative zero for every fixed direction, including axes","Identifies the candidate total derivative as zero","Uses y=x² to obtain a nonzero normalized remainder and concludes not differentiable","Explains o(1) continuity is weaker than o(r) differentiability"],"solution":"Because 2|x²y|≤x⁴+y², |F|=|x|·|x²y|/(x⁴+y²)≤|x|/2→0, proving continuity. For u=(u1,u2) with u2≠0, F(tu)=t² u1³u2/(t²u1⁴+u2²), so F(tu)/t→0. On either axis it is identically zero, so every directional derivative is zero. Thus any total derivative would be the zero linear map. Along y=x² with x>0, F(x,x²)=x/2, and its input distance is x√(1+x²). Hence F/r=1/[2√(1+x²)]→1/2, violating the required o(r) remainder. The bound |F|≤|x|/2 is enough for continuity but only O(r), not o(r)."}
```

**Marking note:** Checking only \(y=mx\) for many \(m\) earns no conclusion about differentiability. The curved path is chosen because it balances the denominator terms.

## 2. A line, a level curve, and a plane (20 points)

Let \(f(x,y)=x^2+xy\) and \(p=(1,1)\). Compute the tangent plane to \(z=f(x,y)\) at \(p\), and a direction tangent to the level curve \(f=2\) in the input plane. A student walks on the *straight line* \(r(t)=(1+t,1-3t)\). Find the first nonzero term of \(f(r(t))-2\). Then change only the path's \(y\)-coordinate to \(1-3t+\beta t^2\) and choose \(\beta\) so that the change vanishes through order \(t^2\). State whether this new polynomial path lies exactly on the level curve.

```exercise
{"id":"calc3-exam-level-plane","type":"written","prompt":"For f=x²+xy at (1,1), distinguish the tangent plane, a level-curve tangent, the straight path r=(1+t,1−3t), and the corrected path y=1−3t+beta*t².","hints":["Compute ∇f=(2x+y,x).","Substitute the straight and corrected paths exactly rather than relying on a first-order picture."],"rubric":["Finds f(p)=2, ∇f(p)=(3,1), plane z=2+3(x−1)+(y−1)","Gives a level tangent direction proportional to (1,−3)","Computes exact straight-path change −2t²","Finds beta=2 and exact corrected-path residual 2t³","States the corrected polynomial path is not exactly on the level curve"],"solution":"At p, f=2 and ∇f=(3,1), so the graph tangent plane is z=2+3(x−1)+(y−1). A level-curve tangent is (1,−3), perpendicular to the gradient. On r(t)=(1+t,1−3t), exact expansion gives f(r(t))=2−2t². For the corrected path, f(1+t,1−3t+beta*t²)=2+(beta−2)t²+beta*t³. Choose beta=2; the residual is then 2t³, nonzero for nonzero t. The polynomial path agrees with the genuine level curve to second order but does not stay on it exactly."}
```

**Marking note:** A zero gradient dot velocity certifies only the first-order rate. The path may depart from the level set at second or third order.

## 3. An interior minimum and a boundary maximum (20 points)

On the filled triangle \(D=\{(x,y):x\geq0,\ y\geq0,\ x+y\leq3\}\), find the absolute minimum and maximum of

\[
Q(x,y)=x^2+2y^2-2x-4y.
\]

Use one argument based on completing squares and the geometry of \(D\), then audit all boundary types or give a separate convexity proof that covers the entire triangle. State why the extreme-value theorem applies.

```exercise
{"id":"calc3-exam-triangle","type":"written","prompt":"Find all absolute extrema of Q=x²+2y²−2x−4y on x≥0,y≥0,x+y≤3. Justify globality, including the boundary.","hints":["Complete the square: Q=(x−1)²+2(y−1)²−3.","For a maximum, write any point in the triangle as a convex combination of its three vertices."],"rubric":["States Q continuous and D compact, so extrema exist","Finds unique minimum −3 at interior point (1,1)","Finds maximum 6 at vertex (0,3)","Justifies boundary/global maximum with an edge audit or a valid convex-combination argument","Does not confuse an interior Hessian result with a global boundary conclusion"],"solution":"Q=(x−1)²+2(y−1)²−3, so Q≥−3 everywhere, with equality only at (1,1), which lies inside D. The triangle is closed and bounded, hence compact; continuity ensures both extrema. Q is strictly convex. Any p in D is a convex combination of vertices v0=(0,0), v1=(3,0), v2=(0,3); convexity gives Q(p)≤sum lambda_i Q(v_i)≤max{0,3,6}=6. Equality at v2 gives the absolute maximum 6; strict convexity and the unique larger vertex value rule out other maximizers. Alternatively, an edge audit yields the same comparison."}
```

**Marking note:** The convexity inequality here concerns the **maximum** on a convex polytope. The interior minimum follows directly from the completed squares.

## 4. A regular ellipse plus an isolated singular point (20 points)

Let the feasible set be \(S=\{(x,y):G(x,y)=0\}\), with

\[
G(x,y)=\left(\frac{x^2}{4}+y^2-1\right)(x^2+y^2).
\]

Find all absolute extrema of \(L(x,y)=3x+y\) on \(S\). Partition \(S\) before applying any multiplier equation. At which feasible points is \(\nabla G=0\), and why does a multiplier-only search risk an incomplete answer?

```exercise
{"id":"calc3-exam-mixed-constraint","type":"written","prompt":"Optimize L=3x+y on G=(x²/4+y²−1)(x²+y²)=0. Identify regular and singular feasible components before calculating.","hints":["A product is zero when either factor is zero; over real numbers x²+y²=0 is one point.","On the ellipse write x=2u,y=v, with u²+v²=1, and apply Cauchy–Schwarz."],"rubric":["Identifies S as ellipse plus isolated origin and states compactness","Finds ellipse extrema ±√37 at ±(12/√37,1/√37)","Checks L(0,0)=0 and compares all components","Shows ∇G=0 at origin and nonzero on ellipse","Explains regular multiplier necessity does not cover singular feasible points"],"solution":"The feasible set is the ellipse x²/4+y²=1 together with (0,0), so it is compact and L continuous. On the ellipse let u=x/2,v=y; then u²+v²=1 and L=6u+v. Cauchy–Schwarz gives −√37≤L≤√37, with equality at (u,v)=±(6,1)/√37, or (x,y)=±(12/√37,1/√37). At the isolated origin L=0, so the global extrema remain ±√37. Write H=x²/4+y²−1 and K=x²+y². Then ∇G=K∇H+H∇K. On the ellipse H=0,K>0 and ∇H=(x/2,2y)≠0, so points there are regular. At the origin K=0 and ∇K=0, hence ∇G=0. The multiplier condition is not guaranteed there; describing the feasible set is necessary before using it."}
```

## Correction and transfer

After marking, revise one answer whose **method** failed, not merely its arithmetic. State the unjustified step, replace it with a valid bound, path, or candidate audit, and solve this changed question: replace \(G\) in Problem 4 by \(G=(x^2/4+y^2-1)(x^2+y^2-\tfrac14)\). The feasible set now contains an ellipse and a small circle; all components are regular because they do not intersect. Predict which component controls the extrema of \(L=3x+y\), then prove it by comparing the two support values \(\sqrt{37}\) and \(\sqrt{10}/2\). The ellipse still controls both extrema. A previous solution that ignored the extra component would have the right value for the wrong reason.
