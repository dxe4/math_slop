# Assessment studio

These original assessments combine calculation, explanation, and model interpretation. They are additional practice alongside the cumulative [Calculus I](calculus-i-synthesis.md), [Calculus II](calculus-ii-synthesis.md), and [Calculus III](calculus-iii-synthesis.md) examinations. The suggested times assume paper working and a basic calculator for arithmetic. Do not use the interactive scenes until you have completed the written attempt. Solutions follow each assessment for independent checking.

## Marking principles

Each numbered question is worth 10 marks. Unless a question states otherwise, award 2 for a sound setup and domain, 4 for correct mathematical work, 2 for justification or a hypothesis check, and 2 for an interpreted answer with relevant units. Equivalent methods earn equal credit. An early arithmetic slip should not erase later correct reasoning; a correct decimal unsupported by a method earns at most 2 marks. For a proof, replace “units” with a clear conclusion addressing the quantifiers.

Use the result diagnostically. Below 60%, revisit the worked examples and attempt the relevant chapter exercises again. From 60–79%, correct each lost mark and solve a nearby variant. At 80% or above, explain two solutions aloud and seek a counterexample to a theorem with one assumption removed. These thresholds are study suggestions, not validated placement standards.

## Midterm A: local change and models

Suggested time: 60 minutes. Total: 40 marks.

1. Define f(x)=(x²−9)/(x−3) when x≠3 and f(3)=k. Find the value of k making f continuous. For that value, compute f′(3) directly from the definition. Explain why using the quotient rule at 3 would be inappropriate for the original expression.
2. Let g(x)=ln(1+x²). Find g′ and g″, identify intervals of increase and decrease, and classify its stationary point. State its domain.
3. A rectangular poster has area 96 square centimetres. Its left and right margins are 1 cm each; its top and bottom margins are 2 cm each. Find the poster dimensions maximising printable area, subject to positive printable dimensions. Establish that the maximum is global on the feasible interval.
4. Use the mean value theorem to prove |√b−√a|≤|b−a|/2 whenever a,b≥1. Identify the interval and derivative bound. Is equality possible when a≠b?

<details><summary>Midterm A solutions</summary>

1. For x≠3, f(x)=x+3, so continuity requires k=6. Then [f(3+h)−f(3)]/h=[6+h−6]/h=1 for h≠0, giving derivative 1. The unsimplified quotient is undefined at 3 and does not satisfy the quotient rule’s nonzero-denominator condition there.
2. The domain is ℝ. g′=2x/(1+x²); g″=2(1−x²)/(1+x²)². The function decreases on (−∞,0) and increases on (0,∞). At zero it has a strict global minimum g(0)=0, since the derivative changes sign and 1+x²≥1. The second derivative changes sign at ±1, although these are not stationary points.
3. Let width be w and height 96/w. Positive printing requires 2<w<24. Printable area is P(w)=(w−2)(96/w−4)=104−4w−192/w. P′=−4+192/w², which vanishes at w=4√3; height is 8√3. The derivative is positive below this width and negative above it throughout (2,24), so it is the global maximum. The printable dimensions are (4√3−2) by (8√3−4) cm. Their product is 104−32√3 square centimetres.
4. If a=b, the assertion is immediate. Otherwise reorder so a<b and apply the theorem to √x on [a,b]. Its derivative is 1/(2√x)≤1/2, so the bound follows. The mean value point c lies strictly above a≥1, hence its derivative is strictly less than 1/2. Equality is impossible when a≠b.

</details>

## Midterm B: accumulation and improper limits

Suggested time: 60 minutes. Total: 40 marks.

1. Let A(x)=∫_1^(x²) ln(t) dt for x>0. Compute A′(x) by the fundamental theorem and also evaluate A explicitly. Confirm that differentiating the explicit formula agrees.
2. Evaluate ∫_0^1 x exp(2x) dx. Choose and state the integration method. Check the sign of your answer against the integrand.
3. A particle has velocity v(t)=t²−4 metres per second on 0≤t≤3. Find its displacement and total distance, explaining where you split any integral.
4. Classify ∫_1^∞ x^(−p) dx for all real p. Derive the criterion using finite upper limits rather than quoting the test. Then decide whether ∫_0^∞ x^(−p) dx can converge for any p.

<details><summary>Midterm B solutions</summary>

1. A′(x)=2x ln(x²)=4x ln x. An antiderivative of ln t is t ln t−t, so A(x)=x² ln(x²)−x²+1. Differentiating gives 2x ln(x²)+2x−2x, the same result. The endpoint x² stays positive under the stated domain.
2. Set u=x and dv=exp(2x)dx, so v=exp(2x)/2. Integration by parts gives [x exp(2x)/2−exp(2x)/4]_0^1=(e²+1)/4. This is positive, as expected. Omitting the factor 1/2 when integrating exp(2x) changes the answer.
3. Displacement is [t³/3−4t]_0^3=−3 m. Velocity is negative on [0,2) and positive on (2,3]. Distance is −∫_0^2 v+∫_2^3 v=16/3+7/3=23/3 m. The zero at t=2 determines the sign change.
4. For p≠1, the finite integral is (R^(1−p)−1)/(1−p). It tends to 1/(p−1) for p>1 and grows without bound for p<1. For p=1 it is ln R, which diverges. Near zero, convergence instead needs p<1. Since both ends must converge separately and the requirements conflict, no real p makes the full integral converge.

</details>

## Synthesis assessment

Suggested time: 90 minutes. Total: 40 marks.

1. A function is f(x)=exp(x)−1−x. Prove f(x)≥0 for every real x using derivatives. Then use Taylor’s theorem to bound |f(x)−x²/2| on |x|≤0.1 by an explicit number less than 0.0002. Show where the bound on the third derivative is used.
2. Determine the radius and complete interval of convergence of Σ from n=1 to ∞ of (x−1)ⁿ/(n·2ⁿ). Identify absolute and conditional convergence at the endpoints. Explain why the ratio test alone cannot finish the endpoint analysis.
3. A smooth wire follows x(t)=t, y(t)=2t^(3/2)/3 for 0≤t≤3. Find its length. A different parametrization traces the same wire and returns to its start: explain what happens to the length integral and why the visible image is insufficient to decide the answer.
4. Give one counterexample to each claim: a continuous function is differentiable; f′(c)=0 implies an extremum; terms tending to zero imply a convergent series; a smooth function equals its Taylor series near every point. Explain each example in one or two sentences.

<details><summary>Synthesis solutions</summary>

1. f′=exp(x)−1 is negative for x<0 and positive for x>0, giving a global minimum f(0)=0. Apply degree-two Taylor expansion to exp(x). Its third derivative is exp(t)≤exp(0.1)<1.2 for −0.1≤t≤0.1. Therefore |exp(x)−1−x−x²/2|≤1.2·0.1³/6=0.0002, with strict inequality because exp(0.1)<1.2. A tighter explicit bound using exp(0.1)<10/9 gives error <1/5400≈0.0001852. The inequality exp(0.1)≤1/(1−0.1)=10/9 follows from its convergent power series by comparing 1/n!≤1 termwise; it can also be established independently through elementary exponential bounds.
2. The ratio limit is |x−1|/2, giving radius 2. At x=−1 the terms are (−1)ⁿ/n, conditionally convergent. At x=3 they are 1/n, divergent. The interval is [−1,3), with absolute convergence inside. At both endpoints the ratio limit is 1, which is inconclusive.
3. x′=1 and y′=√t, so length is ∫_0^3 √(1+t)dt=(2/3)[(1+t)^(3/2)]_0^3=14/3. Traversing every segment outward and back gives 28/3. The integral counts traversal multiplicity; a static image displays only the set of points visited.
4. The function |x| is continuous but has unequal one-sided slopes at zero. The function x³ has derivative zero at zero while increasing through it. The harmonic series has terms tending to zero but diverges. The smooth function exp(−1/x²), assigned value zero at zero, has all derivatives zero there but is positive elsewhere, so its zero Taylor series does not represent it on a neighbourhood.

</details>

## Visual investigation: make a claim that survives the picture

Choose either tangent approximation to exp(x) or midpoint sums for x². Write a prediction with a specified interval and target error. Build or edit a scene, record at least three parameter choices, and calculate an error bound that certifies one choice. Then give an example where a similar-looking visual conclusion is false: a corner where a derivative fails, or a decaying tail whose improper integral diverges. Include the scene source so another learner can reproduce your experiment.

Mark out of 20: 4 for a precise question and prediction, 4 for a clear reproducible scene, 6 for correct mathematics and a valid bound, 4 for a counterexample and explanation of the display’s limits, and 2 for readable communication. Artistic complexity earns no independent marks. The visual’s job is to clarify the argument.

## Extension examination: models, geometry, and certified computation

Suggested time: 120 minutes for all eight questions, or 90 minutes for Questions 1–6. Each question is worth 10 marks. Questions 7–8 require multivariable differentiation and double integrals; attempt them after those units, or report the first six separately if you have not reached them yet.

Attempt the paper before opening the hints. Give exact expressions before decimals. A plot may help you check an answer afterward, but does not replace a domain restriction, error guarantee, or model assumption.

### Questions

1. **A guaranteed integral approximation.** Approximate I=∫₀²x²dx by the composite midpoint rule. You may use |I−Mₙ|≤K(b−a)³/(24n²), where |f″|≤K throughout [a,b]. Find the smallest integer n for which this bound guarantees error at most 0.001. Determine whether the midpoint approximation is above or below I, and explain why apparent agreement in a graph supplies no guarantee.
2. **A cooling simulation.** Temperature satisfies T′=−0.5(T−20), T(0)=80, with time in minutes and temperature in degrees Celsius. Derive Euler's update and take two steps with h=1 minute. Solve the differential equation exactly and compare both estimates at t=2. Then take one Euler step with h=3: explain why the result conflicts with this cooling model's qualitative behavior.
3. **Curvature and parametrization.** A curve is r(t)=(t,t²). Using κ=|x′y″−y′x″|/(x′²+y′²)^(3/2), find its curvature at t=0 and t=1. State where it bends more sharply. Reparametrize using t=s³. Explain why direct substitution into the curvature formula at s=0 fails, and whether this means the geometric curve has a corner there.
4. **Density is not probability.** A waiting time has density p(t)=ct on 0≤t≤3 minutes and zero elsewhere. Find c, P(T>2), the mean, and the median. State the units of density and explain why P(T=2)=0 does not make the interval probability zero. Coordinates t are numerical values measured in minutes.
5. **A design's sensitivity.** A closed cylindrical container of prescribed volume V>0 has normalized material cost C(r)=2πkr²+2V/r, with r>0 and relative end-material cost k>0. Derive the globally minimizing radius. If V increases by 3% and k increases by 6%, estimate the percentage change in that radius by differentials. Give the exact multiplicative change and distinguish it from the approximation.
6. **An error budget.** Compute ∫₀¹eˣdx with a midpoint rule whose individual function evaluations each have absolute error at most 0.00002. Assume exact endpoints, nodes, weights, and subsequent arithmetic. Using the midpoint bound from Question 1 and e<3, choose the smallest n that certifies total error at most 0.001 under this bound. Explain why the evaluation errors contribute at most 0.00002, rather than n times that amount. State a limitation of the certificate.
7. **Several-input direction of change.** Let f(x,y)=x²+2y². At P=(1,−1), calculate the gradient, the directional derivative in the unit direction (3/5,4/5), and the unit direction of steepest increase with its rate. Explain why normalizing the direction is essential. Classify the stationary point using the function itself.
8. **A nonuniform plate.** A plate occupies 0≤x≤2, 0≤y≤1 metres and has surface density ρ(x,y)=x+2y kg/m², with x,y numerical coordinates in metres. Set up and evaluate its mass and both center-of-mass coordinates. Justify the iterated integrals and compare the center with the rectangle's geometric midpoint.

<details><summary>Stage 1 hints: choose the structure</summary>

1. Bound the second derivative before solving an inequality in n.
2. Euler replaces each interval's slope by its value at the beginning.
3. Inspect the speed appearing in the denominator.
4. Normalize first; the cumulative distribution then gives a median.
5. Differentiate the one-variable cost after enforcing volume.
6. Separate the integration error from the error in computing the midpoint sum.
7. A directional derivative is a dot product with a unit vector.
8. A small rectangle contributes density times area; moments need an extra coordinate.

</details>

<details><summary>Stage 2 hints: resolve the key step</summary>

1. Here K=2, so the bound is 2/(3n²).
2. Subtract the ambient temperature: U=T−20 satisfies U′=−0.5U.
3. For t=s³, both coordinate derivatives vanish at s=0.
4. Inside the support, F(t)=ct²/2.
5. Take logarithmic differentials of r∗=(V/(2πk))^(1/3).
6. Each midpoint weight is 1/n. Use the triangle inequality on the weighted errors.
7. Cauchy–Schwarz determines the largest gradient dot product.
8. Compute ∫∫ρ, ∫∫xρ, and ∫∫yρ separately, then divide moments by mass.

</details>

<details><summary>Full worked solutions and marking guidance</summary>

1. The second derivative is 2 everywhere, so the bound is 2/(3n²). Requiring this to be at most 0.001 gives n²≥2000/3, hence the least integer is **26**. Its bound is 1/1014, approximately 0.000986. Since x² is strictly convex, its midpoint value on each subinterval lies below that subinterval's average, so Mₙ<I=8/3. In this particular quadratic example the exact error equals the bound. Pixels and finite samples cannot certify the requested absolute tolerance.

   **Marks:** derivative and hypotheses 2; inequality and integer choice 4; direction of error 2; explanation of certification 2.

2. Euler gives Tⱼ₊₁=Tⱼ−0.5h(Tⱼ−20). For h=1, the temperatures are 80, 50, 35. Separating U′=−0.5U gives T(t)=20+60exp(−t/2); at t=2 this is 20+60/e≈42.073°C. Euler underestimates by about 7.073°C. For h=3 the first update is 80−1.5(60)=−10°C. The exact excess above ambient stays positive, whereas Euler multiplies that excess by −0.5 and changes its sign. This numerical overshoot is a discretization artifact, not a prediction of the differential equation.

   **Marks:** update and steps 3; exact solution 3; comparison 2; overshoot interpretation 2.

3. Here x′=1, y′=2t, x″=0, y″=2, giving κ(t)=2/(1+4t²)^(3/2). Thus κ(0)=2 and κ(1)=2/(5√5); bending is sharper at zero. After reparametrization, r(s)=(s³,s⁶), whose derivative vanishes at s=0. The quoted formula assumes nonzero speed, so at zero it becomes an invalid 0/0 expression. The original parametrization remains regular there and gives curvature 2. A bad parametrization does not create a geometric corner.

   **Marks:** derivatives and formula 4; values and comparison 2; regularity explanation 4.

4. Normalization gives c∫₀³t dt=9c/2=1, hence c=2/9 in the stated numerical convention. The density's units are min⁻¹. Therefore P(T>2)=∫₂³2t/9 dt=5/9. The mean is ∫₀³2t²/9 dt=2 min. Since F(t)=t²/9 on the support, F(m)=1/2 gives m=3/√2 min. A singleton has zero width and zero integral; an interval has positive width and can accumulate positive probability.

   **Marks:** normalization 2; probability 2; mean 2; median 2; units and interpretation 2.

5. C′=4πkr−2V/r² vanishes at r∗=(V/(2πk))^(1/3). Since C″=4πk+4V/r³>0 and C tends to infinity at both ends of its positive domain, this is the unique global minimum. Logarithmic differentials give dr∗/r∗≈(0.03−0.06)/3=−0.01: approximately a 1% decrease. Exactly, r_new/r_old=(1.03/1.06)^(1/3)≈0.990476. The finite change is about −0.9524%; the differential is a first-order approximation.

   **Marks:** optimum 3; global justification 3; differential 2; exact comparison 2.

6. Let δⱼ denote each evaluation error. The computed midpoint sum differs from the exact midpoint sum by (1/n)Σδⱼ, whose absolute value is at most (1/n)n(0.00002)=0.00002. The mathematical quadrature error is less than 1/(8n²), using e<3. Thus 1/(8n²)+0.00002≤0.001 suffices, giving n²≥1/0.00784 and the least integer **12**. Its total bound is approximately 0.0008881. Twelve is minimal for this relaxed bound; retaining e instead of replacing it by 3 would already certify n=11. This certificate assumes the stated evaluation bound and exact remaining arithmetic; uncontrolled rounding or uncertain data would require additional allowances.

   **Marks:** weighted error 3; quadrature bound 2; budget and n 3; scope of guarantee 2.

7. The gradient is (2x,4y), hence ∇f(P)=(2,−4). Its dot product with (3/5,4/5) is −2. The steepest unit direction is (1,−2)/√5 and its rate is |∇f(P)|=2√5, by Cauchy–Schwarz. Without normalization, scaling a direction arbitrarily scales the derivative. The sole stationary point is (0,0); f≥0 with equality only there, so it is a strict global minimum.

   **Marks:** gradient 2; directional derivative 2; steepest direction and rate 3; normalization and minimum 3.

8. The density is continuous and nonnegative on the rectangle, so its iterated integrals represent mass and moments. Mass is ∫₀¹∫₀²(x+2y)dxdy=∫₀¹(2+4y)dy=4 kg. The x-weighted moment is ∫₀¹(8/3+4y)dy=14/3 kg·m; the y-weighted moment is ∫₀¹(2y+4y²)dy=7/3 kg·m. Dividing by mass gives (x̄,ȳ)=(7/6,7/12) m. Both coordinates exceed the geometric midpoint's coordinates (1,1/2), agreeing with density increasing in both directions.

   **Marks:** model and mass 3; two moments 4; center 2; interpretation 1.

</details>

After marking, revise one incorrect solution completely. Then alter one model assumption, predict the effect, and use a course scene or a short simulation to investigate it. Record which part of the original proof or error bound still applies.
