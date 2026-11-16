# Problem set C3. Several inputs and constrained decisions

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Role:** independent Calculus III set after the recitation. Suggested time: three to four hours, 70 points. For Problems 1–7, save an attempt before revealing hints or solutions. Each prompt names the mathematical result required but does not name the method you must select. Sketches and the investigation may help you form a conjecture; the written argument must establish the claim. A calculator or notebook may check arithmetic, but it cannot replace a universal limit bound or a candidate audit.

## 1. A different narrow ridge (10 points)

Define \(F(0,0)=0\) and, elsewhere, \(F(x,y)=xy^2/(x^2+y^4)\). Determine the limit along every fixed line through the origin, then decide whether \(F\) is continuous at the origin. Explain how the denominator suggests a nonlinearly approaching path.

```exercise
{"id":"calc3-set-ridge","type":"written","prompt":"Submit the line checks, your decisive path, and a conclusion about continuity for F=xy²/(x²+y⁴), F(0,0)=0.","hints":["For y=mx, simplify before taking x to zero; include both axes.","Balance x² against y⁴ to find a curved path."],"rubric":["Correct fixed-line limit zero for every slope, including vertical","Chooses a curved path such as x=y² and explains term balance","Computes value 1/2 on that path","Concludes no two-variable limit and no continuity"],"solution":"On y=mx with m≠0, F(x,mx)=m²x³/(x²+m⁴x⁴)=m²x/(1+m⁴x²), which tends to zero. On both axes F=0. Set x=y², with y≠0. Then F(y²,y)=y⁴/(y⁴+y⁴)=1/2. This path tends to the origin and disagrees with the line limits, so the two-variable limit does not exist and F is discontinuous there."}
```

## 2. One extra power: is it enough? (10 points)

Let \(H(0,0)=0\) and \(H(x,y)=x^2y^2/(x^2+y^2)\) otherwise. Decide whether it is differentiable at the origin and identify its total derivative. Then replace the numerator by \(xy^2\), keeping the same denominator, and decide again. State why both coordinate partials alone cannot settle the second case.

```exercise
{"id":"calc3-set-remainder","type":"written","prompt":"Give a normalized remainder bound for H=x²y²/(x²+y²) and a counterexample for J=xy²/(x²+y²), both defined zero at the origin.","hints":["Use x²y²≤(x²+y²)²/4 for H.","For J, the axes force a candidate linear map; test x=y=t."],"rubric":["Finds H partials and total derivative zero","Bounds |H|/r≤r/4 and proves differentiability","Finds J partials zero but |J(t,t)|/(√2|t|) nonzero","Clearly distinguishes continuity, partials, and differentiability"],"solution":"Both coordinate slices of H are zero, so any total derivative is zero. Writing r²=x²+y², the inequality 4x²y²≤r⁴ gives |H|≤r²/4 and |H|/r≤r/4→0, proving differentiability with zero derivative. For J both axis partials are also zero, but J(t,t)=t/2 for nonzero t. For t>0 the normalized remainder equals 1/(2√2), so J is not differentiable. Coordinate slopes do not control diagonal displacement."}
```

## 3. A plane with an explicit error budget (10 points)

For \(P(x,y)=e^x\cos y\), find the tangent plane at \((0,0)\). Prove that whenever \(r=\sqrt{x^2+y^2}\leq1\), the absolute difference between \(P(x,y)\) and the plane is at most \(e r^2/2\). A statement that the error is “small” does not earn the bound.

```exercise
{"id":"calc3-set-exp-error","type":"written","prompt":"Derive the tangent plane for e^x cos y at the origin and a uniform error bound (e/2)(x²+y²) for r≤1.","hints":["Add and subtract e^x.","Use |e^x−1−x|≤e^{|x|}x²/2 and |cos y−1|≤y²/2."],"rubric":["Computes value 1 and gradient (1,0), hence plane 1+x","Splits error into exponential and cosine contributions","Proves each quadratic bound under r≤1","Concludes differentiability from an O(r²) bound"],"solution":"P(0,0)=1, P_x(0,0)=1 and P_y(0,0)=0, so the plane is z=1+x. Write e^x cos y−(1+x)=[e^x−(1+x)]+e^x(cos y−1). Taylor's one-variable remainder gives |e^x−1−x|≤e^{|x|}x²/2, and 1−cos y≤y²/2. Since |x|≤r≤1, e^{|x|}≤e; thus the error is at most e(x²+y²)/2=e r²/2. Dividing by r gives a bound er/2→0, verifying the local plane."}
```

## 4. A path tangent to an ellipse (10 points)

At \((1,1)\) on \(x^2+2y^2=3\), find the tangent-line slope and an equation of the tangent line. Now write the local level curve as \(y=y(x)\) and calculate \(y''(1)\) by differentiating the constraint twice. Explain why the tangent line does not stay on the ellipse.

```exercise
{"id":"calc3-set-level-curvature","type":"written","prompt":"For x²+2y²=3 near (1,1), find y'(1), y''(1), the tangent line, and the first nonzero constraint error along that line.","hints":["The implicit function theorem applies because F_y(1,1)=4.","Differentiate 2x+4yy'=0 once more."],"rubric":["Checks nonzero F_y and finds y'=-1/2","Finds y''=-3/4","Gives tangent line y=1−(x−1)/2","Shows constraint along line equals 3+(3/2)(x−1)² and explains first-order versus exact"],"solution":"F_y=4y=4 at (1,1), so y is locally a differentiable function of x. Differentiating x²+2y²=3 gives 2x+4yy'=0 and y'(1)=−1/2. Differentiating again gives 2+4(y')²+4yy''=0, so y''(1)=−3/4. The tangent line is y=1−(x−1)/2. Set h=x−1 and substitute (1+h,1−h/2): the constraint left side is 3+(3/2)h². It agrees only to first order and leaves the ellipse for nonzero h."}
```

## 5. An inconclusive Hessian is not an answer (10 points)

Classify the origin for \(K(x,y)=(x+y)^2-y^4\). Calculate the Hessian determinant there, then decide the classification from actual nearby values. Explain what the two chosen paths reveal that the quadratic approximation misses.

```exercise
{"id":"calc3-set-degenerate-hessian","type":"written","prompt":"Classify (0,0) for K=(x+y)²−y⁴, showing both the second-derivative test result and a decisive sign comparison.","hints":["Compute A=2, B=2, C=2 at the origin.","On y=−x the quadratic term vanishes; on y=0 it does not."],"rubric":["Computes Hessian determinant zero and labels test inconclusive","Finds positive values along y=0","Finds negative values along y=−x","Concludes saddle and explains the hidden fourth-order term"],"solution":"The Hessian is [[2,2],[2,2]], so D=4−4=0 and the second-order test gives no conclusion. On y=0, K=x²>0 for x≠0. On y=−x, K=−x⁴<0 for x≠0. Both paths approach the origin, where K=0, so every neighborhood has larger and smaller values: it is a saddle. The quadratic term vanishes on the diagonal y=−x, allowing the fourth-order term to decide the sign there."}
```

## 6. A regular curved boundary (10 points)

Find every absolute maximum and minimum of \(xy\) on the filled ellipse \(E=\{(x,y):x^2/9+y^2/4\leq1\}\). Include interior stationary points, boundary candidates, and an independent inequality check of your values. Explain why the constraint qualification holds on the ellipse boundary.

```exercise
{"id":"calc3-set-ellipse","type":"written","prompt":"Audit the interior and boundary of x²/9+y²/4≤1 to find all absolute extrema of xy. Check the values by an inequality.","hints":["On the boundary set u=x/3 and v=y/2, so u²+v²=1.","Use 2|uv|≤u²+v² and identify every equality case."],"rubric":["Notes compactness/continuity and interior stationary origin with value zero","Finds maximum 3 and minimum −3 on boundary","Lists equality points with coordinates and signs","Checks ∇g=(2x/9,y/2)≠0 on boundary and gives an independent bound"],"solution":"The filled ellipse is compact and xy continuous. Interior stationarity solves (y,x)=(0,0), giving value 0. Write u=x/3,v=y/2; throughout E, u²+v²≤1 and |xy|=6|uv|≤3(u²+v²)≤3. Equality requires u²=v²=1/2 and u²+v²=1. Same signs give maximum 3 at (3/√2,2/√2) and (−3/√2,−2/√2); opposite signs give minimum −3 at (3/√2,−2/√2) and (−3/√2,2/√2). On the boundary ∇g=(2x/9,y/2) cannot vanish, since that would force x=y=0, which is not on it. A multiplier search is therefore valid there and agrees with the inequality."}
```

## 7. A singular curve and its regular arcs (10 points)

On the truncated cusp \(C=\{(x,y):y^2=x^3,\ 0\leq x\leq1\}\), find the absolute extrema of \(f(x,y)=x+y\). Partition the cusp into regular points, the singular origin, and endpoints before comparing values. The parametrisation \(x=t^2,y=t^3\), \(-1\leq t\leq1\), may help. Explain why solving only the regular multiplier equations would be incomplete.

```exercise
{"id":"calc3-set-cusp","type":"written","prompt":"Find all absolute extrema of x+y on y²=x³ with 0≤x≤1, including the singular point and both endpoints.","hints":["The parametrisation t↦(t²,t³), −1≤t≤1, covers both branches.","Differentiate t²+t³ and compare t=−1,−2/3,0,1."],"rubric":["Justifies full parametrisation and compactness","Separates singular t=0 and endpoints t=±1 from regular arc candidates","Computes derivative t(2+3t) and all values","Correctly identifies minimum 0 at t=−1 and t=0, maximum 2 at t=1"],"solution":"The map t↦(t²,t³), −1≤t≤1, covers C once except the two branches meet at t=0. The compact parameter interval makes extrema exist. The objective is φ(t)=t²+t³ with derivative t(2+3t), so interior critical parameters are t=−2/3 and t=0. Values are φ(−1)=0, φ(−2/3)=4/27, φ(0)=0, φ(1)=2. Hence the minimum 0 occurs at (1,−1) and (0,0), and the maximum 2 at (1,1). The origin is singular for g=y²−x³ because ∇g=(−3x²,2y)=0 there, and endpoint checks are separate from the multiplier theorem."}
```

**Delayed retrieval (after the next integration lesson):** A student draws a continuous-looking surface for Problem 1 and infers continuity. Without consulting these answers, reproduce the curved witness and explain why a uniform distance bound worked for Problem 2's \(H\) but cannot work for Problem 1's \(F\). Then explain why a singular constraint point in Problem 7 also needs a separate check despite a smooth-looking plot.
