# Calculus I–II cumulative examination: choose the theorem, then calculate

**Place in the route:** after the mixed problem set and numerical-integration lesson. Suggested closed-notes sitting: 105 minutes, 60 points; then a separate correction session. The problems are original. A self-reviewed written response is preparation for instructor feedback, not a certified grade.

State domain and regularity hypotheses whenever a theorem requires them. Credit is awarded for a valid model and reasoning even when arithmetic is unfinished. Sketches or notebook output can check an answer, but neither replaces the requested argument.

## Problem 1. A moving window with no elementary primitive (10 points)

Let \(H(x)=\int_x^{x^2+1}e^{-t^2}\,dt\). Derive \(H'(x)\), calculate \(H'(0)\) and \(H''(0)\), and give the second-order local approximation to \(H(h)\) near zero. Explain why your calculation does not need an elementary formula for \(\int e^{-t^2}dt\).

```exercise
{"id":"calc-exam-ftc-window","type":"written","prompt":"For \\(H(x)=\\int_x^{x^2+1}e^{-t^2}\\,dt\\), find \\(H\\prime(x)\\), \\(H\\prime(0)\\), \\(H\\prime\\prime(0)\\), and the quadratic local approximation at zero. State the FTC hypothesis.","hints":["Write H=A(x^2+1)-A(x) for A(u)=integral_0^u exp(-t^2)dt.","Differentiate the upper-bound term as a product before setting x=0."],"rubric":["Uses continuity of exp(-t^2) to invoke FTC","Finds H'=2x exp(-(x^2+1)^2)-exp(-x^2)","Finds H'(0)=-1 and H''(0)=2/e","States H(h)=H(0)-h+h^2/e+o(h^2) and explains no elementary primitive is required"],"solution":"The integrand is continuous on \\(\\mathbb R\\), so \\(A(u)=\\int_0^u e^{-t^2}\\,dt\\) has \\(A\\prime(u)=e^{-u^2}\\). Writing \\(H=A(x^2+1)-A(x)\\) gives \\(H\\prime=2xe^{-(x^2+1)^2}-e^{-x^2}\\). Hence \\(H\\prime(0)=-1\\). Differentiating again, the first term contributes \\(2e^{-1}\\) at zero; the second contributes zero. Thus \\(H\\prime\\prime(0)=2/e\\) and \\(H(h)=H(0)-h+h^2/e+o(h^2)\\). The definite integral \\(H(0)=\\int_0^1e^{-t^2}\\,dt\\) need not be expressed by an elementary primitive."}
```

## Problem 2. A route where the endpoints tie (10 points)

A runner may travel \(s\) km along a road at 4 km/h, then cross a field at 2 km/h. The destination is 4 km along the road and 3 km perpendicular to it. Assume \(0\le s\le4\), constant speeds, straight field path. Find the fastest \(s\), the minimum time, and both endpoint times. Give a global argument rather than a local stationary calculation alone.

```exercise
{"id":"calc-exam-route","type":"written","prompt":"Optimise \\(T(s)=s/4+\\sqrt{(4-s)^2+9}/2\\) for \\(0\\le s\\le4\\). Report both endpoint times and justify the global result.","hints":["T' is 1/4-(4-s)/(2sqrt((4-s)^2+9)).","Let u=4-s and check a positive root after squaring."],"rubric":["Builds or correctly uses the time objective and feasible domain","Finds s=4-sqrt(3) and checks feasibility","Shows T''>0 or compares all candidates globally","Obtains T_min=1+3sqrt(3)/4 hours and both endpoints 5/2 hours"],"solution":"\\(T\\prime=1/4-(4-s)/[2\\sqrt{(4-s)^2+9}]\\). With \\(u=4-s\\ge0\\), the stationary equation \\(\\sqrt{u^2+9}=2u\\) gives \\(u=\\sqrt3\\), so \\(s=4-\\sqrt3\\). Also \\(T\\prime\\prime=9/[2((4-s)^2+9)^{3/2}]>0\\), proving it is the unique global minimiser. Its time is \\(1+3\\sqrt3/4\\) hours. Both endpoints have time \\(5/2\\) hours. Equal endpoint values do not make the objective constant."}
```

## Problem 3. A rational primitive and an invalid crossing (10 points)

Find a primitive of \(1/(1+x^2)^2\). Then evaluate the proper integral \(\int_0^1dx/(1+x^2)^2\). A peer argues that \(\int_{-1}^1dx/x^2\) should be zero because the two sides cancel by symmetry. Identify both errors in that claim.

```exercise
{"id":"calc-exam-rational-pole","type":"written","prompt":"Integrate \\(1/(1+x^2)^2\\) on \\([0,1]\\) and assess the claim that \\(\\int_{-1}^1dx/x^2=0\\) by odd symmetry.","hints":["Differentiate x/(1+x^2) and compare its numerator with 1.","Check both the parity and the separate improper limits of 1/x^2."],"rubric":["Derives primitive atan(x)/2+x/[2(1+x^2)]","Finds proper integral pi/8+1/4","States 1/x^2 is even and positive, not odd","Computes divergent one-sided improper integrals at zero"],"solution":"Since \\([x/(1+x^2)]\\prime=(1-x^2)/(1+x^2)^2\\), half this derivative plus \\(1/[2(1+x^2)]\\) equals \\(1/(1+x^2)^2\\). A primitive is \\(\\arctan(x)/2+x/[2(1+x^2)]\\), giving \\(\\int_0^1dx/(1+x^2)^2=\\pi/8+1/4\\). The function \\(1/x^2\\) is even and positive, not odd, and undefined at zero. Both one-sided improper integrals diverge to \\(+\\infty\\)."}
```

## Problem 4. A certificate for a non-elementary integral (10 points)

You need an absolute error at most \(5\times10^{-4}\) for \(I=\int_0^1e^{-x^2}dx\) using a composite midpoint rule. Establish a valid bound on \(|f''|\) over the entire interval, then find the smallest positive integer \(n\) guaranteed by the usual midpoint error bound. Explain the difference between the guarantee and comparing two successive numerical outputs.

```exercise
{"id":"calc-exam-midpoint-certificate","type":"written","prompt":"For \\(I=\\int_0^1e^{-x^2}\\,dx\\), certify midpoint error at most \\(0.0005\\). Bound \\(|f\\prime\\prime|\\) on \\([0,1]\\), find the smallest guaranteed \\(n\\), and explain why two close outputs alone do not certify error.","hints":["f''(x)=(4x^2-2)exp(-x^2).","For 0<=x<=1, |4x^2-2|<=2 and exp(-x^2)<=1."],"rubric":["Correct second derivative and uniform K2=2 bound","Applies |I-M_n|<=K2/(24n^2)=1/(12n^2)","Finds n=13 from the inequality and checks n=12 fails the bound","Distinguishes a theorem bound from agreement of two approximations"],"solution":"\\(f\\prime\\prime(x)=(4x^2-2)e^{-x^2}\\). On \\([0,1]\\), \\(|4x^2-2|\\le2\\) and \\(e^{-x^2}\\le1\\), so \\(K_2=2\\) is valid. The midpoint bound is \\(|I-M_n|\\le2/(24n^2)=1/(12n^2)\\). To make this at most \\(1/2000\\) requires \\(n^2\\ge500/3\\), hence \\(n\\ge13\\); \\(n=12\\) fails this sufficient bound. Two close numerical estimates may share error and do not by themselves bound their distance to \\(I\\)."}
```

## Problem 5. Probability is an accumulation model (10 points)

A waiting-time model has density \(p(t)=c(1+t)\) for \(0\le t\le2\) minutes, and zero elsewhere; \(t\) denotes the numerical time in minutes. Find \(c\), the probability of waiting more than one minute, and the expected waiting time. Explain why \(p(1)\) is not the probability of an exactly one-minute wait.

```exercise
{"id":"calc-exam-density","type":"written","prompt":"For \\(p(t)=c(1+t)\\) on \\([0,2]\\), find \\(c\\), \\(P(T>1)\\), and \\(E[T]\\); explain why \\(p(1)\\) is not \\(P(T=1)\\).","hints":["Normalise total area first.","Integrate p from 1 to 2 for the interval probability; integrate t*p for the expectation."],"rubric":["Finds c=1/4 with nonnegative support","Finds P(T>1)=5/8","Finds E[T]=7/6 minutes","Distinguishes density units from a single-point probability of zero"],"solution":"Normalisation gives \\(1=c\\int_0^2(1+t)\\,dt=4c\\), so \\(c=1/4\\). The interval probability is \\(P(T>1)=\\int_1^2(1+t)/4\\,dt=5/8\\). The mean is \\(E[T]=\\int_0^2t(1+t)/4\\,dt=7/6\\) minutes. Density has units \\(\\mathrm{min}^{-1}\\); a probability is an area over an interval. An exact single time has probability zero in this continuous model."}
```

## Problem 6. An inverse hyperbolic primitive (10 points)

Using the definitions of \(\sinh\) and \(\cosh\) from exponentials, derive an exact value for \(\int_0^1dx/\sqrt{1+x^2}\). You may either establish the inverse of \(\sinh\) or differentiate its logarithmic formula, but state the domain. A peer suggests \(\arctan(1)\) because the denominator contains \(1+x^2\). Explain the peer's mistake.

```exercise
{"id":"calc-exam-hyperbolic-primitive","type":"written","prompt":"Using \\(\\operatorname{arsinh}x=\\ln(x+\\sqrt{1+x^2})\\), derive \\(\\int_0^1 dx/\\sqrt{1+x^2}\\). Explain why \\(\\arctan1\\) is the wrong answer.","hints":["The logarithm argument is positive for every real x.","Differentiate the logarithm, then evaluate at 0 and 1; compare with the derivative of arctangent."],"rubric":["Checks positivity of x+sqrt(1+x^2) for all real x","Derives derivative 1/sqrt(1+x^2)","Obtains ln(1+sqrt(2))","Distinguishes arctangent derivative 1/(1+x^2) from the required integrand"],"solution":"Because \\(\\sqrt{1+x^2}>|x|\\), the logarithm argument \\(x+\\sqrt{1+x^2}\\) is positive for all real x. Its logarithmic derivative is \\((1+x/\\sqrt{1+x^2})/(x+\\sqrt{1+x^2})=1/\\sqrt{1+x^2}\\). FTC gives \\(\\int_0^1 dx/\\sqrt{1+x^2}=\\ln(1+\\sqrt2)-\\ln1=\\ln(1+\\sqrt2)\\). The derivative of \\(\\arctan x\\) is \\(1/(1+x^2)\\), without the square root, so that primitive answers a different integral."}
```

## Correction session

After attempting the paper, choose one incomplete or incorrect solution and write a second version. Mark the exact first unjustified step, the theorem or model assumption needed to repair it, and one altered input that would force a different result. For Problem 2, increasing the perpendicular distance far enough moves the formal stationary point outside the road segment; for Problem 4, changing to \(\sqrt x\) removes the bounded second derivative at zero. These are new reasoning checks rather than repetitions of the same arithmetic.
