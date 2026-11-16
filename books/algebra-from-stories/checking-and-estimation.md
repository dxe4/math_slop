
# Checking and Estimation {#section-1-checking-and-estimation}

<a id="section-1-why-checking-matters"></a>
## Why checking matters {#section-3-why-checking-matters}

In **Simplification Strategies** we learned to manipulate expressions reliably. But even reliable procedures can go wrong: a sign flips, a digit transposes, a fraction is mishandled. This chapter is about catching those errors. We will estimate before calculating, substitute after solving, and use common sense to judge whether an answer is plausible.

<a id="section-5-estimation-by-rounding"></a>
## Estimation by rounding {#section-7-estimation-by-rounding}

Before reaching for a calculator or pen, ask: what should the answer be roughly? Rounding to one significant figure often gives a quick check.

**Worked example.** Estimate $48 \times 32$.

Round to one significant figure: $50 \times 30 = 1500$. The exact answer is $1536$, which is close to the estimate. If we obtained $153.6$ or $15360$, the estimate would flag the error.

**Worked example.** Estimate $\frac{198}{5.1}$.

Round: $\frac{200}{5} = 40$. The exact answer is approximately $38.8$, consistent with the estimate.

**Worked example.** Estimate $7.3 \times 8.9 + 102$.

Round: $7 \times 9 + 100 = 63 + 100 = 163$. The exact answer is $166.97$, which is in the same ballpark.

<a id="section-21-bounding-the-answer"></a>
## Bounding the answer {#section-23-bounding-the-answer}

Sometimes rounding up and down gives a range that the true answer must lie inside.

**Example.** Bound $23 \times 47$.

- Lower bound: $20 \times 40 = 800$.
- Upper bound: $30 \times 50 = 1500$.

The exact answer is $1081$, which lies between 800 and 1500. Tighter bounds are possible: $23 \times 47$ is clearly closer to $25 \times 50 = 1250$.

<a id="section-32-checking-equations-by-substitution"></a>
## Checking equations by substitution {#section-34-checking-equations-by-substitution}

The best check for a solved equation is to substitute the candidate solution back into the original.

**Example.** Solve $4x - 7 = 21$.

Add 7: $4x = 28$. Divide by 4: $x = 7$.

Check: $4(7) - 7 = 28 - 7 = 21$. The solution is correct.

**Example.** Solve $3(x + 2) = 2x + 11$.

Expand: $3x + 6 = 2x + 11$. Subtract $2x$: $x + 6 = 11$. Subtract 6: $x = 5$.

Check: left side $3(5 + 2) = 21$; right side $2(5) + 11 = 21$. Both sides agree.

<a id="section-48-common-error-checking-in-a-transformed-equation"></a>
### Common error: checking in a transformed equation {#section-50-common-error-checking-in-a-transformed-equation}

A student solves $2x + 4 = 10$ by subtracting 4 to get $2x = 6$, then divides by 2 to get $x = 3$. Checking only $2x = 6$ confirms that the candidate satisfies this transformed equation. It would not catch an error made when copying or transforming the original equation. Substituting in the **original** gives $2(3)+4=10$. For an equation, a successful substitution verifies this candidate; it does not by itself show that no other solutions exist. Here the reversible solving steps establish uniqueness.

<a id="section-52-checking-formulas-by-units"></a>
## Checking formulas by units {#section-54-checking-formulas-by-units}

In **Formulas from Science** we saw that units must be consistent. This is a powerful check.

**Example.** A student calculates speed as $v = \frac{t}{d}$ instead of $v = \frac{d}{t}$. The units would be hours per kilometre, not kilometres per hour. The wrong formula is immediately flagged.

**Example.** A student writes area $= 2\pi r$ (circumference) instead of $\pi r^{2}$. The units of $2\pi r$ are metres, not square metres. The error is caught.

<a id="section-60-sanity-checks-from-context"></a>
## Sanity checks from context {#section-62-sanity-checks-from-context}

Does the answer make sense in the real world?

**Example.** A student finds that a car journey of 200 km at 80 km/h takes 25 hours. Sanity check: at 80 km/h, the car covers 80 km in one hour, so 200 km should take between 2 and 3 hours. The answer 25 hours is absurd; a misplaced decimal may have turned the correct calculation $200/80=2.5$ into 25.

**Example.** A student calculates the cost of 5 sandwiches at £3 each plus £2 delivery as £150. Sanity check: 5 sandwiches cost about £15, plus £2 is about £17. £150 is ten times too large; the student probably multiplied 3 by 5 and then appended a zero.

<a id="section-68-working-backwards"></a>
## Working backwards {#section-70-working-backwards}

If a problem has a clear forward direction, work backwards from the answer to see if you recover the given information.

**Example.** A shop offers a 20\% discount. A customer pays £40. What was the original price?

Let the original price be $P$. Then $0.8P = 40$, so $P = 50$.

Work backwards: 20\% off £50 is £10, so the sale price is £40. This matches the given information.

<a id="section-78-practice-exercises"></a>
## From a rough estimate to a certificate {#section-229-from-a-rough-estimate-to-a-certificate}

A rough estimate and a guaranteed bound answer different questions. The estimate $50\times30$ is a useful first comparison for $48\times32$, but it does not by itself state the largest possible error. A bound must come with a reason that covers every allowed input. Before calculating, decide whether the numbers are exact quantities, rounded measurements, or deliberately chosen approximations. The same decimal can play any of these roles. A price of £2.50 may be exact within a pricing rule, whereas a measured length of 2.50 metres may stand for a small interval of possible lengths.

Keep three entries in a checking ledger: the original information, the calculation made from it, and the claim that the check supports. “The answer looks reasonable” is weaker than “the answer lies between these two proven limits.” Neither statement establishes that the original model represents the situation. A wrong model can produce internally consistent arithmetic. Checking therefore returns repeatedly to the source of the numbers and to the meaning of the quantities, rather than treating every later line as equally trustworthy.

Suppose a quantity is rounded to the nearest multiple of a positive step $h$. If the reported value is $r$, then a conservative statement is

$$r-\frac h2\le x\le r+\frac h2.$$

Every value that rounds to $r$ lies in this interval. A specified tie rule may exclude one endpoint, but retaining both endpoints gives a safe bound without needing to settle the ties. To see the half-step, place $r$ between its neighbouring permitted reports $r-h$ and $r+h$. The halfway locations are exactly $r-h/2$ and $r+h/2$. Values beyond them are closer to a neighbour. The claim concerns the stated rounding process; it is not a guarantee about a measuring instrument whose errors have not been bounded.

An exact clarification of the earlier sandwich check is useful here. Five sandwiches at £3 each plus £2 delivery cost exactly £17. A reported £150 is $150/17$ times that total, rather than exactly ten times it; exactly ten times would be £170. The large scale discrepancy rejects the reported answer, but it does not uniquely identify which mistaken operation produced it. A rough warning and an exact ratio are different claims.

The report “nearest ten” has $h=10$, while “nearest tenth” has $h=1/10$. The interval must use the same unit as the reported quantity. A length rounded to the nearest centimetre has a possible rounding difference of at most half a centimetre, not half a metre. Writing the unit beside the interval prevents an apparently small decimal from concealing a large change of scale.

<a id="section-243-positive-products-and-quotients"></a>
## Positive products and quotients {#section-245-positive-products-and-quotients}

Bounds can be carried through a calculation when the order rules justify each step. Suppose $0\le a\le L\le b$ and $0\le c\le W\le d$. Multiplying $L\ge a$ by the nonnegative $W$ gives $LW\ge aW$, and multiplying $W\ge c$ by the nonnegative $a$ gives $aW\ge ac$. Together these prove $LW\ge ac$. The upper bound follows in the same way: $LW\le bW\le bd$. Thus

$$ac\le LW\le bd.$$

The signs matter. If negative values are permitted, multiplying just the two lower endpoints need not give the smallest product. For example, numbers between $-3$ and $-2$ have positive products between 4 and 9. Their lower-endpoint product is 9, which is the upper bound. Use the sign information before selecting endpoints.

For a rectangle, suppose the reported length is 12 cm and the reported width is 8 cm, each rounded to the nearest centimetre. Under this rounding model,

$$\frac{23}{2}\le L\le\frac{25}{2},\qquad
\frac{15}{2}\le W\le\frac{17}{2}.$$

Both intervals are positive. The area therefore satisfies

$$\frac{345}{4}\le LW\le\frac{425}{4},$$

or $86.25\le LW\le106.25$ in square centimetres. Multiplying the two reports gives $12\times8=96$. That is a convenient estimate, but it is not the centre of the guaranteed area interval: the interval's centre is $96.25$. Relative to the estimate 96, the downward difference is at most $9.75$ and the upward difference at most $10.25$. A safe absolute-error bound is therefore $10.25$ square centimetres.

This example explains why “each input is accurate to half a unit, so the answer is accurate to half a unit” fails. The calculation changes both the size and the unit of the error. The product bound is conditional on the object being represented by the rectangular-area formula as well as on the two input bounds. A distorted shape requires another model even if its two measured spans are recorded carefully.

For a quotient the denominator needs special attention. If $0<a\le D\le b$ and $0<c\le T\le d$, then

$$\frac ad\le\frac DT\le\frac bc.$$

For the lower bound, $D/T\ge a/T\ge a/d$: replacing the numerator by a smaller nonnegative number lowers the quotient, and replacing its positive denominator by a larger number also lowers it. Reverse those choices for the upper bound. A denominator interval containing zero gives no permission to use this rule.

As a hand calculation, let a distance be between 59 and 61 kilometres and a positive travel time between $19/10$ and $21/10$ hours. The average speed is bounded by

$$\frac{590}{21}\le v\le\frac{610}{19}\quad\text{kilometres per hour}.$$

There is no need to round these endpoints to justify the interval. The estimate from 60 kilometres and 2 hours is 30. Its downward error is at most $30-590/21=40/21$, and its upward error at most $610/19-30=40/19$. The larger fraction is the safe bound for the estimate. It describes average speed over the stated trip, not speed at every instant.

<a id="section-276-differences-and-relative-error"></a>
## Differences and relative error {#section-278-differences-and-relative-error}

For subtraction, the smallest result comes from the smallest first quantity and the largest second quantity. If $a\le X\le b$ and $c\le Y\le d$, then

$$a-d\le X-Y\le b-c.$$

Indeed, $X\ge a$ and $-Y\ge-d$ can be added to prove the lower bound. Suppose the two quantities are known only to lie in $[19,21]$ and $[7,9]$. Their difference lies in $[10,14]$. Subtracting paired endpoints and reporting only $19-7=21-9=12$ would silently assume that the two unknown inputs always move together. The given separate bounds do not supply that relationship.

Before using vertical bars, define $|u|$ as the nonnegative distance from the real number $u$ to zero on the number line. Thus $|0.2|=0.2$, $|-0.2|=0.2$, and $|0|=0$. In particular, $|a-b|$ measures the distance between the real numbers $a$ and $b$: subtracting gives their signed separation, and the bars retain its nonnegative size. For an estimate and a true value, $|\widehat z-z|$ is therefore their distance, regardless of which lies to the left.

The **absolute error** of an estimate $\widehat z$ for a value $z$ is $|\widehat z-z|$. When $z\ne0$, its **relative error against the true value** is $|\widehat z-z|/|z|$. State the denominator: dividing by the estimate instead answers a different question. A guaranteed absolute bound $E$ does not automatically produce a relative bound unless the size of the true value is controlled away from zero. If $|z|\ge m>0$, then the relative error is at most $E/m$.

Subtraction can make this distinction visible. Suppose $X$ lies in $[9.9,10.1]$ and $Y$ lies in $[9.8,10.0]$. The midpoint reports give the difference $10.0-9.9=0.1$, while the interval rule gives $-0.1\le X-Y\le0.3$. Thus the absolute error of that estimate is at most $0.2$. The true difference might be zero, where relative error is undefined, or a very small nonzero number, where the relative error can be large. Small uncertainty in two fairly large inputs need not mean small relative uncertainty in their difference.

An uncertainty interval is also not a probability distribution. Knowing that a value belongs to an interval does not say that its centre is more likely than its edges. No percentage chance follows from the interval alone. Here the algebra supplies what remains true for every allowed value; a probability claim would need additional assumptions that this calculation does not contain.

<a id="section-292-keeping-shared-inputs-together"></a>
## Keeping shared inputs together {#section-294-keeping-shared-inputs-together}

An interval calculation can be safe without describing the exact set of possible outputs. This happens when the same unknown appears more than once. Suppose $2\le u\le3$. Separately bounding the two occurrences in $u-u$ gives the broad interval $[2-3,3-2]=[-1,1]$. Every actual output does belong to that interval, but the expression is exactly zero for every allowed $u$. The choices “first occurrence is 2” and “second occurrence is 3” cannot happen together when both occurrences mean the same input.

Simplifying first can preserve this connection. With $2\le u\le3$, the quotient $u/u$ equals 1 because the input is never zero. Treating the numerator and denominator as unrelated positive numbers gives the safe but less informative enclosure $[2/3,3/2]$. The algebraic identity gives the exact output. If the denominator could be zero, the cancellation would need its original exclusion, as in **Equivalent Expressions**. Neither an interval nor a convenient simplification removes that condition.

Conversely, do not assume a connection that has not been supplied. The earlier bounds on two separate quantities $X$ and $Y$ did not say that they shared one unknown. A table of allowed endpoints is not permission to pair only matching rows. Write repeated quantities with the same letter when the model really makes them the same, and use different letters when they may vary separately. The distinction changes the mathematical question.

A guaranteed decimal bound must also be rounded in the safe direction. Return to the speed interval with exact endpoints $590/21$ and $610/19$. To give an enclosing interval with two decimal places, rounding each endpoint to the nearest hundredth is not the appropriate instruction: enclosure has a different purpose. A valid outward-rounded statement is

$$28.09\le v\le32.11\quad\text{kilometres per hour}.$$

These claims can be checked without trusting a displayed decimal expansion. Since $28.09\times21=589.89<590$, the proposed lower decimal is below the exact lower endpoint. Since $32.11\times19=610.09>610$, the proposed upper decimal is above the exact upper endpoint. Positive multiplication preserves the comparisons. Rounding the lower endpoint upward would risk excluding an allowed speed, even if the reported number looked closer.

For a final report, choose the detail that serves the question. An exact fraction is useful for verifying a boundary; an outward-rounded interval can be easier to read beside a budget or a scale; a rough estimate can flag a misplaced decimal before any long calculation. Record which form you have used. Precision in the writing means matching the stated claim to its justification, rather than printing as many decimal places as possible.

<a id="section-308-using-a-residual-without-overclaiming"></a>
## Using a residual without overclaiming {#section-310-using-a-residual-without-overclaiming}

Substitution gives a particularly informative check for a linear equation. Consider $ax+b=c$ with exact coefficients and $a\ne0$. Its solution is $x_*=(c-b)/a$. For a candidate $t$, define the **residual**

$$r=at+b-c.$$

Subtract $ax_*+b-c=0$ to obtain $r=a(t-x_*)$. For real numbers $u,v$, $|uv|=|u||v|$: the signs determine which side of zero the product lies on, while multiplying their nonnegative magnitudes gives its distance from zero; a zero factor gives zero. Thus $|r|=|a||t-x_*|$. Dividing by the positive $|a|$ gives

$$|t-x_*|=\frac{|r|}{|a|}.$$

This is an exact error identity for this equation. It explains both the usefulness and the limits of a small residual. The residual is measured on the equation's output scale; the error in the unknown is measured on its input scale. The coefficient connects them.

For $4x-7=21$, the candidate $t=7.01$ has residual $4(7.01)-7-21=0.04$, so its distance from the exact solution is $0.04/4=0.01$. For $0.001x=1$, however, $t=999$ has residual $-0.001$ but is one whole unit from the solution 1000. Both calculations use exact terminating decimals. A rule such as “any residual smaller than one hundredth is good” ignores the scale factor $|a|$ and the precision the problem actually requires.

The formula also assumes that the checked coefficients are the original coefficients. If a line was copied incorrectly, a tiny residual for the copied equation says little about the source equation. Nor does this single-equation identity establish a general rule for every nonlinear equation or system. It is useful precisely because the algebra has identified its hypotheses and shown the relation it uses.

<a id="section-324-checks-that-can-agree-for-the-same-wrong-reason"></a>
## Checks that can agree for the same wrong reason {#section-326-checks-that-can-agree-for-the-same-wrong-reason}

Two calculations are not independent just because they run in opposite directions. Suppose the source pricing rule is a £4 fee plus £2.50 per item. For six items the cost is $4+2.5(6)=19$ pounds, and working backwards gives $(19-4)/2.5=6$. Now imagine copying the fee as £7. The forward calculation gives £22, and the backward calculation $(22-7)/2.5$ still gives six. The two copied calculations agree perfectly. Comparing the £7 entry with the original £4 rule detects the mistake.

Unit checking has a similar boundary. If $d$, $v$ and $t$ mean distance, constant speed and elapsed time, both $d=vt$ and $d=2vt$ have the units of distance. The units can reject $d=v+t$ under those meanings, but cannot select the correct numerical coefficient between the first two formulas. An independent relationship, a known case, or a derivation is still needed. Keep the dimensional check because it is useful, while naming exactly what it has checked.

Agreement at a finite set of inputs has another limit. The rules $f(x)=x+1$ and $g(x)=x+1+x(x-1)$ agree at $x=0$ and $x=1$. At $x=2$, the first gives 3 and the second gives 5. Two successful substitutions do not prove an identity between arbitrary expressions. If both rules were already known to be affine, two distinct input checks would be enough: subtracting the two equal-output equations forces their slopes to agree, then either input forces their intercepts to agree. The extra structural assumption is doing essential work.

Use a failed check as a location for repair. A wrong unit suggests returning to definitions and conversions; a large residual suggests returning to the equation steps; agreement with the wrong source suggests checking transcription; an interval that crosses a decision boundary suggests that more precision or a different decision is needed. Repeating the same operation more quickly does not address these different causes.

<a id="section-334-decisions-at-an-uncertain-boundary"></a>
## Decisions at an uncertain boundary {#section-336-decisions-at-an-uncertain-boundary}

Suppose one ticket price is reported as £18 to the nearest pound, and the same true price applies to all three tickets being bought. Under that rounding model, each ticket costs between £17.50 and £18.50, so the total lies between £52.50 and £55.50. A £54 budget may or may not be enough. The midpoint calculation $3(18)=54$ cannot settle the purchase. A budget of £55.50 is sufficient under these bounds; a budget below £52.50 is insufficient; between the bounds the information leaves the decision open.

The repeated common price creates no problem for these product bounds: multiplying the one price interval by the positive count three is justified directly. If tickets have different prices, add the three stated price intervals instead. In either case, write which prices, fees and quantities the model includes. An omitted booking fee is a model omission, not a rounding error.

The point of this chapter's certificates is to make such distinctions inspectable. Preserve exact fractions until a decimal is needed for communication, show which inequalities justify a bound, and state the conclusion in the units and domain of the original question. These habits connect the expression rules from earlier chapters to decisions that remain defensible when the answer is close to a limit.
<!-- EULER-AS-09-EXPOSITION-END -->

<!-- EULER-AS-09-NEW-PRACTICE-BEGIN -->
<a id="section-344-practice-extensions"></a>

## Summary

<a id="section-222-looking-back-and-forward"></a>
This chapter gathered techniques for verifying algebra: estimation, substitution, unit checking, sanity checks, and working backwards. These habits are not extra steps; they are part of doing algebra well.

In the next chapter, **Algebra in Other Subjects**, we will apply all the skills developed so far---expressions, equations, graphs, inequalities, formulas, simplification, and checking---to problems drawn from geography, economics, cooking, and sport. The mathematics does not change; only the stories do.

<!-- EULER-AS-09-EXPOSITION-BEGIN -->
<a id="section-227-from-a-rough-estimate-to-a-certificate"></a>

<a id="section-482-summary"></a>
Use checks that answer different questions: estimate the size, verify units, substitute into the original statement and work backwards. Passing selected numerical checks does not prove a universal identity or validate an unsupported model.

**Where next.** Continue with [Algebra and Functions](#/books/algebra-and-functions) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-80-practice-exercises}

<a id="section-80-exercise-1"></a>
### Exercise 1 {#section-82-exercise-1}
Estimate $67 \times 48$ by rounding to one significant figure, then calculate exactly and compare.

<details>
<summary>Hint 1</summary>

**Hint.** Round each factor separately to one significant figure.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the rounded product with the exact product, describing the direction of the discrepancy.

</details>

<details>
<summary>Solution</summary>

**Solution.** Round: $70 \times 50 = 3500$. Exact: $67 \times 48 = 3216$. The estimate is in the right order of magnitude. A result of 321.6 or 32160 would be flagged.

</details>

<a id="section-103-exercise-2"></a>
### Exercise 2 {#section-105-exercise-2}
Solve $5(x - 3) = 2x + 9$ and check by substitution.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the bracket before gathering the unknown terms.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use reversible additions and division, then check your result in the original brackets.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand: $5x - 15 = 2x + 9$. Subtract $2x$: $3x - 15 = 9$. Add 15: $3x = 24$. Divide by 3: $x = 8$.

Check: left side $5(8 - 3) = 25$; right side $2(8) + 9 = 25$. Agrees.

</details>

<a id="section-128-exercise-3"></a>
### Exercise 3 {#section-130-exercise-3}
A rectangle has area 84 cm$^{2}$ and length 12 cm. A student calculates the width as $84 \times 12 = 1008$ cm. Use a sanity check to find the error.

<details>
<summary>Hint 1</summary>

**Hint.** The width must multiply the given length to recover the area.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the proposed width with the size of the rectangle and check the units of multiplication versus division.

</details>

<details>
<summary>Solution</summary>

**Solution.** If the width were 1008 cm, the area would be $12 \times 1008 = 12096$ cm$^{2}$, not 84. Since a 12 cm by 12 cm square already has area 144 cm$^{2}$, the width must be less than 12 cm. The correct operation is division: $w = \frac{84}{12} = 7$ cm. Sanity check: $12 \times 7 = 84$.

</details>

<a id="section-151-exercise-4"></a>
### Exercise 4 {#section-153-exercise-4}
Estimate $\frac{312}{9.7}$ and then compute exactly.

<details>
<summary>Hint 1</summary>

**Hint.** Choose nearby numerator and denominator values that are easy to divide.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the exact calculation remove the decimal by multiplying numerator and denominator by the same power of ten.

</details>

<details>
<summary>Solution</summary>

**Solution.** Estimate: $\frac{300}{10} = 30$. Exact: $\frac{312}{9.7} = \frac{3120}{97}$. Its decimal approximation is $\frac{3120}{97} \approx 32.16$, which is in the expected range.

</details>

<a id="section-174-exercise-5"></a>
### Exercise 5 {#section-176-exercise-5}
After solving $3x + 8 = 23$, a student checks the candidate in $3x = 15$. Explain when this transformed check is sufficient. If the original equation was first copied as $3x + 8 = 32$ and then transformed to $3x = 24$, what does an independent check in the original equation detect?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish an equation known to be equivalent from one obtained through an unchecked copy.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the original right-hand side to check the result obtained after the copying error.

</details>

<details>
<summary>Solution</summary>

**Solution.** Subtracting 8 from both sides is reversible, so $3x + 8 = 23$ and $3x = 15$ are equivalent. For any candidate $c$, $3c = 15$ if and only if $3c + 8 = 23$. Thus checking the transformed equation is sufficient once its copying and equivalence have been verified; for example, $c = 5$ satisfies both. That check does not independently verify how the transformed equation was obtained. If 23 was copied as 32, solving $3x + 8 = 32$ gives $3x = 24$ and $x = 8$. This candidate passes $3(8) = 24$, but substitution in the original source gives $3(8) + 8 = 32 \ne 23$. Direct original-source substitution detects that unverified copying error. It protects against an unverified copy or transformation; it is not a reason to reject a known-equivalent check.

</details>

<a id="section-197-exercise-6"></a>
### Exercise 6 {#section-199-exercise-6}
A train travels 450 km in 3 hours. A student calculates the average speed as 150 km/h and checks by working backwards. Show the backward check and explain why it confirms the answer.

<details>
<summary>Hint 1</summary>

**Hint.** Average speed multiplied by elapsed time should reproduce the trip distance.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep hours and kilometres consistent when carrying out the backward calculation.

</details>

<details>
<summary>Solution</summary>

**Solution.** If the speed is 150 km/h, then in 3 hours the distance is $150 \times 3 = 450$ km. This matches the given distance. The backward check confirms that the calculated speed reproduces the original information.

</details>

<a id="section-220-looking-back-and-forward"></a>

<a id="section-346-practice-extensions"></a>
### Exercise 7 — AS-09-E07 — certify an area estimate {#section-350-as-09-e07-certify-an-area-estimate}

A rectangular panel has length $L$ cm and width $W$ cm. The available information is exactly $|L-20|\le1/2$ and $|W-5|\le1/2$. Give a guaranteed interval for its area. Bound the absolute error of the estimate $20\times5=100$ square centimetres. Can the information guarantee that the area is at most 110 square centimetres? Justify the decision, including a permitted counterexample if needed.

<details>
<summary>Hint 1</summary>

**Hint.** Convert both absolute-error bounds into positive endpoint intervals.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply the extreme allowed lengths and widths, then compare the area endpoints with the proposed estimate and stronger upper bound.

</details>



<a id="section-367-as-09-e08-compare-equal-residuals"></a>
### Exercise 8 — AS-09-E08 — compare equal residuals {#section-369-as-09-e08-compare-equal-residuals}

For the equation $0.02x+3=5$, check the candidate $t=99.5$. For $4x+3=5$, check the candidate $s=0.4975$. Calculate both residuals and both exact distances from the corresponding solutions. Explain why equal residual sizes do not mean equal errors in the unknown. State the hypothesis used when converting each residual to a distance.

<details>
<summary>Hint 1</summary>

**Hint.** Compute each residual using its own equation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For an affine equation with nonzero slope, divide the absolute residual by that slope magnitude to obtain input error.

</details>



<a id="section-386-as-09-e09-distinguish-a-check-from-an-identity"></a>
### Exercise 9 — AS-09-E09 — distinguish a check from an identity {#section-388-as-09-e09-distinguish-a-check-from-an-identity}

Let $f(x)=3x+1$ and $g(x)=3x+1+x(x-2)$ for real $x$. Compare them at 0, 2 and 1. A learner says that agreement at two inputs proves the expressions equivalent. Repair that claim. Then suppose a different rule is known in advance to be $h(x)=ax+b$. Prove that agreement with $f$ at 0 and 2 forces $h=f$ for every real input.

<details>
<summary>Hint 1</summary>

**Hint.** An input outside the shared roots of the extra product can distinguish the rules.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the affine-rule claim, use the two agreements to determine its two coefficients; keep that prior form assumption explicit.

</details>

<!-- EULER-AS-09-NEW-PRACTICE-END -->

<!-- EULER-AS-09-SOLUTIONS-BEGIN -->

<a id="section-407-solutions-to-practice-extensions"></a>

<a id="section-456-a-further-practice-problem"></a>
<a id="section-456-exercise-10"></a>
### Exercise 10 {#section-458-exercise-10}
<a id="checking-and-estimation-ex-10"></a>

A learner writes $48/0.6=8$. Without dividing first, explain whether the correct quotient must exceed 48. Use backward multiplication to test the proposed answer, find the correct value, and verify it.

<details>
<summary>Hint 1</summary>

**Hint.** The divisor is positive and smaller than one; think about what multiplying an unknown by it does.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The quotient q must satisfy $0.6q=48$. Compare the proposed value with that original multiplication requirement.

</details>
<details>
<summary>Solution</summary>

**Solution.** Because multiplication by a positive number below one decreases a positive value, $0.6q=48$ requires $q>48$. The proposed value eight already fails that size check. Backward multiplication gives $0.6(8)=4.8$, not 48, so it fails the original division requirement as well. Multiplying numerator and denominator by ten gives $48/0.6=480/6=80$. Finally $0.6(80)=48$, confirming the result. The incorrect value is ten times too small; the original-source check detects that misplaced decimal.

</details>

<a id="section-480-summary"></a>

## Solutions {#section-409-solutions-to-practice-extensions}

<a id="section-409-as-09-e07-solution"></a>
### AS-09-E07 — solution {#section-411-as-09-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

The given bounds say $39/2\le L\le41/2$ and $9/2\le W\le11/2$. All endpoints are positive, so the product rule gives

$$\frac{351}{4}\le LW\le\frac{451}{4},$$

or $87.75\le LW\le112.75$ square centimetres. The estimate 100 is at most $100-87.75=12.25$ above the true area and at most $112.75-100=12.75$ below it. Therefore $|100-LW|\le12.75$ square centimetres. The information cannot guarantee an upper limit of 110. For example, $L=20.4$ and $W=5.4$ satisfy both input bounds, but their product is $110.16>110$. The interval is a guaranteed enclosure, while that particular allowed pair supplies a direct counterexample to the stronger claim.

</details>

<a id="section-424-as-09-e08-solution"></a>
### AS-09-E08 — solution {#section-426-as-09-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

For the first equation, the residual is $0.02(99.5)+3-5=1.99+3-5=-0.01$. The exact solution is $x_*=2/0.02=100$, so $|99.5-100|=0.5$. Equivalently, the error identity gives $0.01/0.02=0.5$.

For the second equation the residual is $4(0.4975)+3-5=1.99+3-5=-0.01$ as well. Its exact solution is $s_*=2/4=0.5$, and the distance is $|0.4975-0.5|=0.0025=0.01/4$. Each calculation uses exact coefficients with a nonzero slope, so $|t-x_*|=|r|/|a|$ applies. The output discrepancies are the same, but division by different slope magnitudes gives different input errors. Neither residual verifies that the equation was copied correctly from its original source.

</details>

<a id="section-437-as-09-e09-solution"></a>
### AS-09-E09 — solution {#section-439-as-09-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

At 0, both rules give 1. At 2, both give 7 because $x(x-2)=0$. At 1, $f(1)=4$ while $g(1)=4-1=3$. Thus the expressions are not equivalent on all real inputs. Two agreements check those two inputs; the input 1 refutes the universal claim.

For the rule known to be affine, $h(0)=f(0)=1$ gives $b=1$. The second equality gives $2a+b=7$, so $2a+1=7$ and $a=3$. Substitution into the assumed form yields $h(x)=3x+1=f(x)$ for every real $x$. The conclusion depends on the prior affine-form restriction; it did not follow from two checks alone.

</details>

<!-- EULER-AS-09-SOLUTIONS-END -->



<a id="section-454-a-further-practice-problem"></a>
