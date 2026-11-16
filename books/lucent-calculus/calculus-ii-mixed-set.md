# Problem set C. Derivatives, accumulation, and integration strategy

**Role:** independent work after the logarithm/exponential bridge, integration strategy workshop, and numerical integration. Suggested time: two 75-minute sessions. Each task asks for an argument or model choice as well as a result. Give hypotheses, domains, and units. Record an attempt before opening hints. Written responses are for self-review against a rubric; the page does not certify a proof.

## 1. Why does an exponential have this derivative? (10 points)

Starting from \(L(x)=\int_1^x dt/t\) for \(x>0\), establish enough facts to justify the derivative of its inverse \(E\). Identify the theorem at each step, and explain why the conclusion holds for every real input of \(E\).

```exercise
{"id":"calc-pset-c-log-exp","type":"written","prompt":"Prove that the inverse \\(E\\) of \\(L(x)=\\int_1^x dt/t\\) satisfies \\(E\\prime(u)=E(u)\\) for all real \\(u\\). Establish the range of \\(L\\), not merely local invertibility.","hints":["FTC gives L'(x)=1/x>0.","Use L(xy)=L(x)+L(y), then L(2^n)=nL(2)."],"rubric":["FTC derivative and strict monotonicity on positive domain","Product law justified or invoked from its proven lesson","Unbounded positive and negative L values with continuity show range all real numbers","Inverse derivative gives E'=1/(1/E)=E"],"solution":"FTC gives \\(L\\prime(x)=1/x>0\\), so \\(L\\) is continuous and strictly increasing on \\((0,\\infty)\\). For fixed \\(y>0\\), \\(L(xy)-L(x)\\) has derivative zero and equals \\(L(y)\\) at \\(x=1\\); hence \\(L(xy)=L(x)+L(y)\\). Since \\(L(2)>0\\), \\(L(2^n)=nL(2)\\to\\infty\\) and \\(L(2^{-n})=-nL(2)\\to-\\infty\\). Continuity makes its range all of \\(\\mathbb R\\). Its inverse \\(E\\) is defined on all of \\(\\mathbb R\\), and \\(E\\prime(u)=1/L\\prime(E(u))=E(u)\\)."}
```

## 2. A sensor with a moving accumulation window (8 points)

A sensor's rate is \(r(t)=t^2+1\) litres per minute. At clock time \(x\ge0\), a report covers the interval from \(x/2\) to \(x\). Let \(W(x)=\int_{x/2}^x r(t)dt\). Find \(W'(x)\) in two ways, interpret both boundary terms, and decide whether \(W\) increases for \(x\ge0\).

```exercise
{"id":"calc-pset-c-window","type":"written","prompt":"Differentiate \\(W(x)=\\int_{x/2}^x(t^2+1)\\,dt\\) in two ways. Explain the moving lower boundary and monotonicity for \\(x\\ge0\\).","hints":["Write W=A(x)-A(x/2) for an accumulation A.","Alternatively evaluate W as a polynomial first."],"rubric":["Uses upper-end speed +1 and lower-end speed +1/2","Obtains W'=r(x)-r(x/2)/2=1/2+7x^2/8","Confirms by direct evaluation of W","Interprets loss from moving start and proves positive derivative on the domain"],"solution":"Let \\(A(u)=\\int_0^u(t^2+1)\\,dt\\). Then \\(W=A(x)-A(x/2)\\), so \\(W\\prime=(x^2+1)-(x^2/4+1)/2=7x^2/8+1/2\\). Directly, \\(W=[t^3/3+t]_{x/2}^x=7x^3/24+x/2\\), whose derivative agrees. The upper endpoint adds fluid at its speed; the lower endpoint removes it at half speed. The net derivative is positive for \\(x\\ge0\\)."}
```

## 3. Global design under a changed constraint (10 points)

A closed cylinder has volume \(2\pi\) m³. End material costs four times as much per square metre as side material. The radius must satisfy \(0.4\le r\le0.8\) m. Find the least-cost design. A design memo claims that the unconstrained optimum is infeasible; assess that claim before selecting a boundary.

```exercise
{"id":"calc-pset-c-cylinder","type":"written","prompt":"Optimise a closed cylinder with \\(V=2\\pi\\), end-to-side unit-cost ratio \\(4\\), and \\(0.4\\le r\\le0.8\\) metres. Give radius, height, and a global reason; audit the claim that the unconstrained optimum is infeasible.","hints":["Use h=2/r^2 and C(r)=8*pi*r^2+4*pi/r after a consistent cost scale.","Inspect C'(r) on the allowed interval and compare with the unconstrained radius."],"rubric":["Sets volume and cost with a consistent unit-cost scale","Finds unconstrained r=4^(-1/3), about 0.630 m","Checks that it lies inside [0.4,0.8]","Finds corresponding h and justifies global minimum using convexity or sign/endpoint comparison"],"solution":"With side cost per area one, \\(C=8\\pi r^2+2\\pi rh\\). The volume condition gives \\(h=2/r^2\\), so \\(C(r)=8\\pi r^2+4\\pi/r\\). The derivative vanishes when \\(16\\pi r-4\\pi/r^2=0\\), or \\(r=4^{-1/3}\\approx0.630\\) m. This IS within \\([0.4,0.8]\\), disproving the memo. Since \\(C\\prime\\prime=16\\pi+8\\pi/r^3>0\\), it is the unique global minimum. The height is \\(h=2\\cdot4^{2/3}\\approx5.040\\) m."}
```

**Why the deliberate false premise?** Mathematical modeling includes checking given assertions. A learner who blindly pushes a stationary point to the nearest endpoint would manufacture a worse design. For a boundary case, change the constraint to \(0.7\le r\le0.8\); then \(C'>0\) on the allowed interval and \(r=0.7\) is best.

## 4. Rational structure and its excluded point (10 points)

Find an antiderivative of \((2x+1)/[(x-2)(x^2+4)]\), then decide whether its ordinary definite integral over \([0,3]\) exists. State the correct split if using improper limits.

```exercise
{"id":"calc-pset-c-rational","type":"written","prompt":"Decompose \\((2x+1)/[(x-2)(x^2+4)]\\), find an antiderivative on each domain interval, and assess its integral on \\([0,3]\\).","hints":["Use A/(x-2)+(Bx+C)/(x^2+4).","Inspect x=2 before any endpoint subtraction."],"rubric":["Correct coefficients A=5/8, B=-5/8, C=3/4","Correct logarithm and arctangent primitive on each interval","Separates one-sided improper integrals at x=2","Shows divergence rather than cancellation"],"solution":"The decomposition is \\(5/[8(x-2)]+(-5x/8+3/4)/(x^2+4)\\). A primitive on either side of \\(2\\) is \\((5/8)\\ln|x-2|-(5/16)\\ln(x^2+4)+(3/8)\\arctan(x/2)+C\\). Near \\(2\\), the integrand behaves like \\(5/[8(x-2)]\\). The left improper integral tends to \\(-\\infty\\), and the right tends to \\(+\\infty\\). Neither is finite, so the combined ordinary or improper integral does not exist. A principal value uses a different definition."}
```

## 5. A numerical method with a guarantee (8 points)

For \(I=\int_0^1x^4dx\), a computation must have absolute error at most \(10^{-5}\). Use the standard composite Simpson bound to find the smallest **even** \(n\) that the bound guarantees. Compare with the composite midpoint count guaranteed by its bound.

```exercise
{"id":"calc-pset-c-simpson-count","type":"numeric","prompt":"What is the smallest even Simpson subdivision count \\(n\\) guaranteed by the \\(C^4\\) error bound to achieve error at most \\(10^{-5}\\) for \\(\\int_0^1x^4\\,dx\\)?","answer":12,"tolerance":0,"hints":["The fourth derivative is 24 and the bound is 24/(180*n^4).","Test consecutive even n around the fourth-root threshold."],"feedback":"The correct guaranteed even count is 12. A close numerical answer alone is not a proof of the bound."}
```

<details><summary>Reasoning and comparison for 5</summary>

For \(x^4\), \(K_4=24\), so \(|I-S_n|\le2/(15n^4)\). The condition is \(n^4\ge 40000/3\), about \(13333.3\). For \(n=10\) the bound is larger than \(10^{-5}\); for \(n=12\) it is smaller. Thus 12 is the smallest guaranteed even count by this bound. For midpoint, \(K_2=\max_{[0,1]}12x^2=12\), giving \(|I-M_n|\le1/(2n^2)\). This requires \(n^2\ge50000\), hence \(n\ge224\). The actual errors may be much smaller; these are sufficient counts under the stated derivative bounds.

</details>

## 6. A gate under pressure (10 points)

A vertical triangular gate extends from the water surface to depth 2 m. Its horizontal width is \(w(z)=z\) metres at depth \(z\). Derive the hydrostatic force using water density \(1000\,\mathrm{kg/m^3}\) and \(g=9.8\,\mathrm{m/s^2}\). Then explain why multiplying that force by 2 m would not determine pumping work.

```exercise
{"id":"calc-pset-c-gate","type":"written","prompt":"Derive the force on a gate of width \\(w(z)=z\\) metres from depth \\(0\\) to \\(2\\) metres. Explain why force times \\(2\\) metres is not automatically pumping work.","hints":["Gauge pressure at depth z is rho*g*z.","A horizontal strip has area w(z)dz; work needs a displacement for material being moved."],"rubric":["Constructs dF=rho*g*z*w(z)dz","Integrates 9800*z^2 from 0 to 2","Obtains 78400/3 N with correct units","Distinguishes static pressure force from work due to displacement"],"solution":"Gauge pressure at depth \\(z\\) is \\(9800z\\,\\mathrm{N/m^2}\\). A strip has area \\(z\\,dz\\,\\mathrm{m^2}\\), so \\(dF=9800z^2\\,dz\\) and \\(F=9800[z^3/3]_0^2=78400/3\\,\\mathrm N\\). This is force on a stationary gate. Work needs a specified displacement and force during that motion; multiplying by the water depth invents a motion model."}
```

## 7. A finite sum with no integral (8 points)

A naive spreadsheet reports a nearly zero even midpoint sum of \(1/x\) over \([-1,1]\). Explain why neither symmetry nor agreement among several grids proves an improper integral exists. State how its two required limits behave. The course notebook may reject this request after detecting the pole.

```exercise
{"id":"calc-pset-c-pole","type":"written","prompt":"Assess a nearly zero naive midpoint spreadsheet sum for \\(1/x\\) on \\([-1,1]\\). State the left and right improper limits separately.","hints":["Integrate from -1 to -epsilon and from epsilon to 1.","The definition requires both one-sided limits to be finite."],"rubric":["Identifies the interior pole","Computes left limit minus infinity","Computes right limit plus infinity","Distinguishes finite cancellation or principal value from an improper integral"],"solution":"The integrand is undefined at zero. The left piece is \\(\\lim_{\\varepsilon\\downarrow0}\\int_{-1}^{-\\varepsilon}dx/x=\\lim\\ln\\varepsilon=-\\infty\\). The right piece is \\(\\lim_{\\varepsilon\\downarrow0}\\int_{\\varepsilon}^{1}dx/x=\\lim(-\\ln\\varepsilon)=+\\infty\\). Neither required limit is finite. Symmetric finite samples can cancel arithmetically; they do not establish an improper integral."}
```

## 8. Method selection in an unfamiliar product (8 points)

Evaluate \(\int_0^1x\ln(1+x)\,dx\), then give a simple inequality that checks the sign and scale of your answer. Do not use a numerical display as the sole justification.

```exercise
{"id":"calc-pset-c-parts","type":"written","prompt":"Find \\(\\int_0^1x\\ln(1+x)\\,dx\\) and a simple upper bound without computing the integral.","hints":["Use parts with u=ln(1+x), dv=x dx.","On [0,1], 0<=ln(1+x)<=x."],"rubric":["Chooses and executes integration by parts","Simplifies x^2/(1+x) by division","Obtains 1/4","Checks 0<=I<=1/3 by comparison"],"solution":"Parts with \\(u=\\ln(1+x)\\) and \\(dv=x\\,dx\\) gives \\(I=[x^2\\ln(1+x)/2]_0^1-\\tfrac12\\int_0^1x^2/(1+x)\\,dx\\). Since \\(x^2/(1+x)=x-1+1/(1+x)\\), the remaining integral is \\(\\ln2-1/2\\). Thus \\(I=(\\ln2)/2-(\\ln2)/2+1/4=1/4\\). Since \\(0\\le\\ln(1+x)\\le x\\) on \\([0,1]\\), comparison gives \\(0\\le I\\le1/3\\), consistent with the exact result."}
```

**Return a day later:** choose three of the eight problems at random. Before calculating, write the governing theorem and one plausible wrong approach. Explain why your new work does not depend on remembering the displayed solution.
