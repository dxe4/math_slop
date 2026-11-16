# Recitation A. A rate, a tangent, and an accumulation

**Role:** guided recitation after limits, derivatives, rules, Riemann sums, and the Fundamental Theorem. Work through the decisions before reading the resolved calculation.

## A moving sensor makes the three ideas meet

A sensor reports velocity v(t)=t²−2t metres per second over 0≤t≤3. Its position change from time zero to time x is A(x)=∫₀ˣv(t)dt. Before integrating, predict when A increases and decreases. The sign of v, not the sign of A, decides this: v(t)=t(t−2) is negative on (0,2) and positive on (2,3). Thus A decreases until t=2 and increases afterward. The FTC says A′(t)=v(t) for interior times, because v is continuous.

An antiderivative is F(t)=t³/3−t², so A(x)=x³/3−x². In particular A(3)=9−9=0 metres. Zero displacement does not mean zero distance. The path travels backward by |A(2)−A(0)|=4/3 metres, then forward by |A(3)−A(2)|=4/3 metres, for total distance 8/3 metres. The integral of |v| recovers this number. This is a model check: the units of the integral are (metres/second)×seconds=metres.

At t=1 the velocity is −1 m/s. The position tangent A(1+h)≈A(1)−h predicts a decrease of 0.1 metres over the next tenth of a second. The exact difference is A(1.1)−A(1)=−0.1+(v′(1)/2)(0.1)²+(0.1)³/3. Here v′(1)=0, so the error is 1/3000 metres. The exact expansion separates the local linear prediction from the finite-step correction; a plot alone cannot supply this bound.

```notebook
fn v(x) = x^2-2*x;
fn A(x) = x^3/3-x^2;
diff A as recovered_v;
show recovered_v(1);
show A(3)-A(0);
integrate v from 0 to 3 count 60;
plot v from 0 to 3;
```

The integral command gives a finite midpoint approximation to signed displacement. To compute total distance, split at the sign change and reverse the sign on the negative segment. The notebook's numerical output is a check of arithmetic; the sign argument and FTC justify the model.

## Two tempting wrong moves

First, a student writes ∫₀³v=0, therefore the vehicle did not move. The equation reports net displacement. Asking for distance changes the integrand to |v| and requires locating the sign change at t=2.

Second, a student writes A′(1)=A(1)/1. The right side is an average accumulation rate over [0,1]; the derivative is the instantaneous rate v(1). Here A(1)=−2/3 metres, so the average is −2/3 m/s while the instantaneous rate is −1 m/s. They differ because velocity changed over the interval.

```exercise
{"id": "calc-recitation-distance", "type": "numeric", "prompt": "For \\(v(t)=t^2-2t\\) on [0,3], enter the total distance travelled in metres.", "answer": 2.6666666667, "tolerance": 0.0001, "hints": ["Split at t=2, where velocity changes sign.", "Distance is −∫₀²v+∫₂³v."], "feedback": "The signed displacement is zero; distance adds the magnitudes of the backward and forward parts.", "solution": "Since v(t)=t(t−2), it is negative on (0,2) and positive on (2,3). An antiderivative is \\(A(t)=t^3/3-t^2\\), with A(0)=0, A(2)=−4/3, and A(3)=0. The total distance is |A(2)−A(0)|+|A(3)−A(2)|=4/3+4/3=8/3 metres. The signed displacement is A(3)−A(0)=0 metres.", "transfer": "Changed case: use v(t)=t²−3t on [0,4]. Find the turning time, signed displacement, and total distance. Explain why the two integrals differ.", "transferSolution": "The turn is at t=3. With A(t)=t³/3−3t²/2, A(0)=0, A(3)=−9/2, and A(4)=−8/3. Displacement is −8/3 metres; distance is 9/2+(−8/3+9/2)=19/3 metres. Signed pieces partly cancel in the displacement but their magnitudes add in distance.", "feedbackCorrect": "The distance is 8/3 m. Now justify the split at t=2 and explain why the signed displacement is zero.", "feedbackIncorrect": "A zero signed integral is possible here. Locate t=2, integrate separately on each side, and add absolute changes."}
```

```exercise
{"id": "calc-recitation-average", "type": "written", "prompt": "Explain why \\(A(1)/1\\) and \\(A\\prime(1)\\) answer different physical questions. Give both values and units for the sensor model.", "hints": ["State the time interval and quantity divided by its duration.", "Use FTC to find the instantaneous rate, then compare its unit with the average."], "rubric": ["Computes average velocity −2/3 m/s", "Computes instantaneous velocity −1 m/s", "Identifies the interval and point each value concerns", "Connects A′=v to continuity of the rate"], "solution": "\\(A(1)/1=-2/3\\text{ m/s}\\) is the average velocity over [0,1], because A(1) is that interval's signed displacement. A′(1)=v(1)=−1 m/s is the instantaneous velocity at t=1. The FTC applies because v is continuous. The different values reflect a changing velocity.", "transfer": "Changed case: let v(t)=2t m/s for all real t, and A(x)=∫₀ˣv(t)dt. Compare A(1)/1 with A′(1), including units and the theorem used.", "transferSolution": "A(x)=x² metres. Average velocity on [0,1] is [A(1)−A(0)]/1=1 m/s. Since v is continuous, FTC gives A′(1)=v(1)=2 m/s (from the left on this observed interval, or two-sided if the model extends). The two rates answer interval and instant questions."}
```

```exercise
{"id": "calc-r2-recitation-param", "type": "written", "prompt": "For \\(v_c(t)=t^2-ct\\) on 0≤t≤3 with c>0, derive signed displacement and total distance as functions of c. Give separate cases for 0<c≤3 and c>3, and check the formulas agree at c=3.", "hints": ["The only possible interior sign change is t=c. Find A_c(t)=t³/3−ct²/2.", "If c≤3, add |A_c(c)−A_c(0)| and |A_c(3)−A_c(c)|. If c>3, velocity never becomes positive on the observed interval."], "rubric": ["Finds displacement 9−9c/2", "Splits sign cases at c=3", "Derives distance 9−9c/2+c³/3 for c≤3 and 9c/2−9 for c>3", "Checks the cases agree at c=3 and explains why"], "solution": "An antiderivative is A_c(t)=t³/3−ct²/2, so \\(D(c)=A_c(3)-A_c(0)=9-9c/2\\). If 0<c≤3, velocity is negative on (0,c) and positive on (c,3), with A_c(c)=−c³/6. Thus distance is −A_c(c)+[A_c(3)−A_c(c)]=9−9c/2+c³/3. If c>3, velocity is negative throughout (0,3], so distance is −D(c)=9c/2−9. Both formulas give 9/2 at c=3. The formula changes when the sign change leaves the observation interval.", "transfer": "Changed case: observe the same v_c only on [0,T], where T>0 is a parameter. Give the location of the case boundary and a dimensionally consistent distance formula.", "transferSolution": "The sign change occurs at t=c. If c≤T, A_c(T)=T³/3−cT²/2 and A_c(c)=−c³/6, so distance is A_c(T)−2A_c(c)=T³/3−cT²/2+c³/3. If c>T, all observed velocity is negative, so distance is cT²/2−T³/3. The boundary is c=T; the formulas coincide there at T³/6. Here t, c, and T are numerical time coordinates; a physical model must state the units carried by the coefficients of t² and t."}
```
