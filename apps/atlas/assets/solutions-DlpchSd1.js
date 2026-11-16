var e=`---
parent_id: book-algebra-from-stories
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions {#section-1-exercise-and-project-solutions}

These solutions show decisive reasoning for selected exercises from each chapter. They are organized by chapter and restate the key steps compactly. Where a chapter contains inline solutions, those are summarized here with brief justifications.

---

<a id="section-5-chapter-1-a-letter-can-hold-a-place"></a>
## Chapter 1: A letter can hold a place {#section-7-chapter-1-a-letter-can-hold-a-place}

1. **Translate "seven less than twice a number $n$" into an algebraic expression.**

   Twice the number is $2n$. Seven less than that quantity means subtract 7 from it: $2n - 7$.

2. **Expand $3(y + 4)$.**

   Distribute the 3 across both terms: $3(y + 4) = 3y + 12$.

   Check with $y = 2$: left side $3(2 + 4) = 18$; right side $3(2) + 12 = 18$.

3. **Taxi fare: £5 fixed plus £3 per mile. Fare for 8 miles.**

   $F = 3m + 5$. For $m = 8$: $F = 3 \\times 8 + 5 = 29$. The fare is £29.

4. **Evaluate $5x - 2$ when $x = 4$.**

   $5(4) - 2 = 20 - 2 = 18$.

5. **Perimeter of a rectangle with $l = 12$ and $w = 7$.**

   $P = 2l + 2w = 2(12) + 2(7) = 24 + 14 = 38$ metres.

6. **Explain $2x + 3x = 5x$ with a story.**

   Two bags of $x$ marbles plus three bags of $x$ marbles make five bags of $x$ marbles. The variable $x$ acts as a unit.

---

<a id="section-35-chapter-2-patterns-and-sequences"></a>
## Chapter 2: Patterns and Sequences {#section-37-chapter-2-patterns-and-sequences}

1. **Arithmetic sequence: $a_{1} = 4$, $d = 6$. Find the 8th term.**

   $a_{8} = 4 + (8 - 1) \\times 6 = 4 + 42 = 46$.

2. **Geometric sequence: $a_{1} = 5$, $r = 3$. Find the 5th term.**

   $a_{5} = 5 \\times 3^{4} = 5 \\times 81 = 405$.

3. **Next two terms and formula for $2, 5, 8, 11, \\dots$**

   Differences are constant at 3, so $a_{1} = 2$, $d = 3$. Next terms: $14$, $17$. Formula: $a_{n} = 3n - 1$.

   Check: $n = 1$ gives $2$; $n = 4$ gives $11$.

4. **Sum of first 20 terms of $5, 9, 13, 17, \\dots$**

   $a_{1} = 5$, $d = 4$. First find $a_{20} = 5 + 19 \\times 4 = 81$. Then $S_{20} = \\frac{20}{2}(5 + 81) = 10 \\times 86 = 860$.

5. **Bounce heights: dropped from 81 m, reaches $\\frac{1}{3}$ of previous height.**

   First bounce: $81 \\times \\frac{1}{3} = 27$ m. Sequence: $27, 9, 3, \\dots$ with $a_{1} = 27$, $r = \\frac{1}{3}$. Formula: $a_{n} = 27 \\times (\\frac{1}{3})^{n - 1} = 3^{4 - n}$.

   Check: $n = 1$ gives $27$; $n = 3$ gives $3$.

6. **Why primes are neither arithmetic nor geometric.**

   Differences $1, 2, 2, 4$ are not constant; ratios $3/2, 5/3, 7/5$ are not constant.

---

<a id="section-67-chapter-3-graphing-stories"></a>
## Chapter 3: Graphing Stories {#section-69-chapter-3-graphing-stories}

1. **Do $(0, 3)$, $(2, 7)$, $(4, 11)$, $(5, 14)$ lie on a straight line?**

   Slopes: $(7 - 3)/(2 - 0) = 2$, $(11 - 7)/(4 - 2) = 2$, $(14 - 11)/(5 - 4) = 3$. The last slope differs, so the points do not all lie on one line. The first three lie on $y = 2x + 3$.

2. **Line with slope $-2$ through $(4, 9)$.**

   $9 = -2(4) + c$ gives $c = 17$. Equation: $y = -2x + 17$.

3. **Car at 60 km/h for at most 5 hours.**

   $d = 60t$ with domain $0 \\leq t \\leq 5$. At $t = 3.5$: $d = 60 \\times 3.5 = 210$ km.

4. **Slope between $(-1, 4)$ and $(3, -8)$.**

   $m = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$. For every 1-unit increase in $x$, $y$ decreases by 3.

5. **Ball height $h = 20t - 5t^{2}$.**

   At $t = 1$: $h = 20 - 5 = 15$ m. At $t = 3$: $h = 60 - 45 = 15$ m. Hits ground when $5t(4 - t) = 0$, so $t = 4$ seconds (excluding $t = 0$).

6. **Why $y = x^{2}$ is not a straight line.**

   Slope from $(0, 0)$ to $(1, 1)$ is $1$; from $(1, 1)$ to $(2, 4)$ is $3$. Changing slope means the graph is curved.

---

<a id="section-95-chapter-4-equations-with-two-unknowns"></a>
## Chapter 4: Equations with Two Unknowns {#section-97-chapter-4-equations-with-two-unknowns}

1. **Solve by substitution: $y = 2x + 3$ and $3x + y = 18$.**

   Substitute: $3x + (2x + 3) = 18$, so $5x = 15$, $x = 3$. Then $y = 2(3) + 3 = 9$. Check: $3(3) + 9 = 18$. Solution: $(3, 9)$.

2. **Solve by elimination: $2x + 5y = 17$ and $4x - 5y = 7$.**

   Add: $6x = 24$, $x = 4$. Substitute: $2(4) + 5y = 17$, so $5y = 9$, $y = \\frac{9}{5} = 1.8$. Check: $4(4) - 5(1.8) = 16 - 9 = 7$. Solution: $(4, 1.8)$.

3. **Rectangle perimeter 30 cm, length 3 cm more than width.**

   $2l + 2w = 30$, $l = w + 3$. Substitute: $2(w + 3) + 2w = 30$, so $4w = 24$, $w = 6$, $l = 9$. Check: $2(9) + 2(6) = 30$.

4. **Show $3x + 2y = 8$ and $6x + 4y = 10$ has no solution.**

   Multiply first by 2: $6x + 4y = 16$. Compare with second: $6x + 4y = 10$. This gives $16 = 10$, impossible. The lines are parallel.

5. **Two trains toward each other at 80 km/h and 70 km/h from 450 km apart.**

   $80t + 70t = 450$, so $150t = 450$, $t = 3$ hours. Check: $240 + 210 = 450$.

6. **Why multiplying an equation by a nonzero constant preserves solutions.**

   If $ax + by = c$ holds for $(x, y)$, then $kax + kby = kc$ also holds. Conversely, if $k \\neq 0$, divide by $k$ to recover the original. The solution sets are identical.

---

<a id="section-123-chapter-5-inequalities-and-regions"></a>
## Chapter 5: Inequalities and Regions {#section-125-chapter-5-inequalities-and-regions}

1. **Solve $5x - 3 \\leq 17$.**

   $5x \\leq 20$, so $x \\leq 4$.

2. **Solve $-3x + 8 > 2$.**

   $-3x > -6$. Divide by $-3$ and reverse: $x < 2$.

3. **Café: tea £2, cake £3, budget £12.**

   $2t + 3c \\leq 12$ with $t, c \\geq 0$. Valid combinations: $(0, 4)$, $(3, 2)$, $(6, 0)$.

4. **System $y \\geq 2x - 3$, $y \\leq -x + 6$, $x \\geq 0$, $y \\geq 0$.**

   Intersection of sloped lines: $2x - 3 = -x + 6$, so $3x = 9$, $x = 3$, $y = 3$. Vertices: $(0, 0)$, $(0, 6)$, $(3, 3)$, $(1.5, 0)$.

5. **Why multiplying an inequality by a negative reverses the direction.**

   $3 < 5$ becomes $-3 > -5$ after reflection across zero on the number line. Multiplication by a negative reverses order.

6. **Farmer: at most 40 ha, wheat 2 ha/tonne, barley 1 ha/tonne, at least 5 t wheat and 10 t barley.**

   $2w + b \\leq 40$, $w \\geq 5$, $b \\geq 10$. Vertices: $(5, 10)$, $(5, 30)$, $(15, 10)$.

---

<a id="section-151-chapter-6-formulas-from-science"></a>
## Chapter 6: Formulas from Science {#section-153-chapter-6-formulas-from-science}

1. **Rearrange $V = IR$ for $R$; find $R$ when $V = 12$ and $I = 0.4$.**

   $R = V/I = 12/0.4 = 30 \\, \\Omega$.

2. **Cylinder $V = \\pi r^{2}h$; find $h$ when $V = 500$ and $r = 5$ (use $\\pi \\approx 3.14$).**

   $h = V/(\\pi r^{2}) = 500/(3.14 \\times 25) = 500/78.5 \\approx 6.37$ cm.

3. **Convert $-40^{\\circ}\\text{F}$ to Celsius.**

   $C = \\frac{5}{9}(-40 - 32) = \\frac{5}{9}(-72) = -40$. The scales agree at $-40$.

4. **Salt solution: 15 g in 250 g water, total volume 260 mL.**

   Mass fraction: $15/265 = 3/53 \\approx 0.0566$, about $5.66\\%$. Concentration: $15/0.26 \\approx 57.7$ g/L.

5. **Kinetic energy $E = \\frac{1}{2}mv^{2}$ for $m = 2$ kg, $v = 6$ m/s.**

   $E = \\frac{1}{2} \\times 2 \\times 36 = 36$ joules.

6. **Why $a + b \\neq 0$ is safe for a trapezium.**

   Division by zero is undefined. For a trapezium, parallel side lengths are positive, so $a + b > 0$ always.

---

<a id="section-179-chapter-7-equivalent-expressions"></a>
## Chapter 7: Equivalent Expressions {#section-181-chapter-7-equivalent-expressions}

1. **Simplify $7m + 4n - 3m + 2n$.**

   $(7m - 3m) + (4n + 2n) = 4m + 6n$.

2. **Expand $-4(3x - 2y + 5)$.**

   $-12x + 8y - 20$.

3. **Factorise $15p + 25q$.**

   Greatest common factor is 5: $5(3p + 5q)$.

4. **Factorise $x^{2} - 16$.**

   Difference of squares: $(x + 4)(x - 4)$.

5. **Show $(x + 2)^{2} \\neq x^{2} + 4$ by test value.**

   At $x = 1$: $(1 + 2)^{2} = 9$ but $1^{2} + 4 = 5$. Correct expansion: $x^{2} + 4x + 4$.

6. **Perimeter of a rectangle with length $(2x+3)$ metres and width $(x+1)$ metres.**

   The dimensionless real input must satisfy $2x+3>0$ and $x+1>0$, so the common story domain is $x>-1$. The perimeter is $P=2(2x+3)+2(x+1)=6x+8=2(3x+4)$ metres, with each equality justified by the distributive property. At $x=2$, the lengths are 7 and 3 metres and the perimeter is 20 metres; the formula gives the same value. This input check accompanies the identity, which holds throughout the stated domain.

---

<a id="section-207-chapter-8-simplification-strategies"></a>
## Chapter 8: Simplification Strategies {#section-209-chapter-8-simplification-strategies}

1. **Simplify $4(2x - 3) - 2(x + 5)$.**

   $8x - 12 - 2x - 10 = 6x - 22$.

2. **Simplify $3\\bigl[2(x + 1) - (x - 3)\\bigr]$.**

   Inner: $2x + 2 - x + 3 = x + 5$. Then $3(x + 5) = 3x + 15$.

3. **Simplify $\\frac{3x + 9}{3} + \\frac{4x - 8}{4}$.**

   $x + 3 + x - 2 = 2x + 1$.

4. **Expand and simplify $(x + 3)(x - 3) + (x + 2)^{2}$.**

   $(x^{2} - 9) + (x^{2} + 4x + 4) = 2x^{2} + 4x - 5$.

5. **Evaluate $2(a + 3) - 3(2a - 1)$ at $a = 4$ by both methods.**

   Simplify: $-4a + 9$. At $a = 4$: $-16 + 9 = -7$. Direct: $2(7) - 3(7) = -7$.

6. **Why $\\frac{x + 6}{2} \\neq x + 3$.**

   At $x = 2$: left side $4$, right side $5$. Correct: $\\frac{x}{2} + 3$.

---

<a id="section-235-chapter-9-checking-and-estimation"></a>
## Chapter 9: Checking and Estimation {#section-237-chapter-9-checking-and-estimation}

1. **Estimate $67 \\times 48$, then compute.**

   Estimate: $70 \\times 50 = 3500$. Exact: $67 \\times 48 = 3216$. Same order of magnitude.

2. **Solve $5(x - 3) = 2x + 9$ and check.**

   $5x - 15 = 2x + 9$, so $3x = 24$, $x = 8$. Check: $5(5) = 25$ and $2(8) + 9 = 25$.

3. **Area 84 cm$^{2}$, length 12 cm. Student writes width $= 84 \\times 12$.**

   Sanity check: width must be smaller than length. Correct: $w = 84/12 = 7$ cm.

4. **Estimate and compute $\\frac{312}{9.7}$.**

   Estimate: $300/10 = 30$. Exact: $312/9.7 = 3120/97$. The decimal approximation is $3120/97 \\approx 32.16$.

5. **When is checking $3x = 15$ sufficient, and what does an original-source check detect?**

   Subtracting 8 is reversible, so for every candidate $c$, $3c=15$ if and only if $3c+8=23$. A transformed check is sufficient once its copying and equivalence have been verified. If 23 was copied as 32, the copied equation gives $3x=24$ and $x=8$, which passes that transformed check. In the original source, $3(8)+8=32 \\ne23$, so an independent original-source check detects the copying error. It does not invalidate a verified equivalent check.

6. **Train 450 km in 3 hours. Backward check for 150 km/h.**

   $150 \\times 3 = 450$ km. The backward check confirms consistency.

---

<a id="section-263-chapter-10-algebra-in-other-subjects"></a>
## Chapter 10: Algebra in Other Subjects {#section-265-chapter-10-algebra-in-other-subjects}

1. **Map scale $1 : 25\\,000$, lake 6 cm. Real length?**

   $1$ cm $= 0.25$ km. $d = 0.25 \\times 6 = 1.5$ km.

2. **Coffee £2.50, fixed costs £80, cost £0.80 per coffee. Break-even?**

   $2.5n = 80 + 0.8n$, so $1.7n = 80$, $n = 800/17 \\approx 47.06$. No whole-number count gives exact equality: 47 coffees lose £0.10, while 48 earn £1.60. Therefore 48 is the least whole number that avoids a loss.

3. **Recipe 400 g rice for 6 people. Rice for 15 people?**

   Rate $400/6 = 200/3$ g per person. For 15: $(200/3) \\times 15 = 1000$ g $= 1$ kg.

4. **Cyclist 35 km in 1 hour 45 minutes. Average speed?**

   $1.75$ hours. $v = 35/1.75 = 20$ km/h.

5. **Music at 72 BPM. Whole note (4 beats) duration?**

   One beat: $60/72 = 5/6$ s. Whole note: $4 \\times 5/6 = 10/3 \\approx 3.33$ s.

6. **Counterexample: doubling ingredients always doubles servings.**

   A cake in a fixed tin would overflow. Physical capacity, not just proportion, limits the recipe.

---

<a id="section-291-project-solution-outline"></a>
## Project solution outline {#section-293-project-solution-outline}

**Design your own formula (Chapter 10).**

A complete project report should contain:

1. A clear statement of independent and dependent variables with units.
2. At least four data points collected by measurement or reliable observation.
3. A plotted table or description of the plotted points.
4. If linear, a calculated slope and intercept with working.
5. A formula stated in words and symbols.
6. A prediction for an untested value.
7. A comparison of the prediction against actual measurement.
8. A discussion of plausible sources of error (measurement precision, uncontrolled variables, rounding).

There is no single correct answer; the assessment is on clarity of method, correctness of algebra, and honesty about error.

<a id="section-308-finding-the-extension-keys"></a>
## Finding the extension keys {#section-310-finding-the-extension-keys}

The preceding compact lists cover the original numbered questions. The additional practice uses chapter-specific IDs AS-01-E07 through AS-10-E09, with three tasks per chapter. Each full key stays in its own chapter under **Solutions to practice extensions**, identified by exactly the same task ID. This keeps the complete assumptions, reasoning and interpretation beside the question. Compare only after retaining an attempt, and record any public solution you used.

The complete primary and changed references for the synthetic cumulative dossier AS-10-P01 stay in **Algebra in Other Subjects**, together with its self-review rubric. The preceding **Project solution outline** remains guidance for the open data-collection project; a supplied synthetic model is separate practice.

<a id="section-314-corrections-and-assumptions-for-the-compact-keys"></a>
## Corrections and assumptions for the short solutions {#section-316-corrections-and-assumptions-for-the-compact-keys}

The Chapter 9 compact entries 4 and 5 above now match their complete inline keys: the exact fraction is 3120/97 before rounding, and a verified equivalent transformed equation supplies a sufficient check. Returning to the original source is an independent way to detect an unverified copy or transformation. The old question numbers and full chapter tasks are retained; these corrections change the compact explanation, not a saved response or a grade.

Chapter 2, Question 3 fits an arithmetic continuation to the displayed values. The continuation is conditional on that model; four values alone do not determine every later term. The further development in that chapter supplies alternative continuations. For Chapter 3, Question 3, the five-hour bound is one chosen journey domain, not information supplied by the original question. For Chapter 5, Question 3, tea and cake purchases use nonnegative integer counts; the continuous half-plane describes a relaxation, and the listed combinations are whole-number purchases.
`;export{e as default};