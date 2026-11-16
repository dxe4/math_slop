
# Algebra in Other Subjects {#section-1-algebra-in-other-subjects}

<a id="section-1-mathematics-as-a-shared-language"></a>
## Mathematics as a shared language {#section-3-mathematics-as-a-shared-language}

In **Checking and Estimation** we learned to verify our work. This final chapter brings together every skill from the book---expressions, equations, graphs, inequalities, formulas, simplification, and checking---and applies them to problems from geography, economics, cooking, sport, and music. The algebra does not change; only the stories do.

<a id="section-5-geography-map-scales"></a>
## Geography: map scales {#section-7-geography-map-scales}

A map scale of $1 : 50\,000$ means 1 cm on the map represents $50\,000$ cm in reality. Since $50\,000$ cm $= 500$ m $= 0.5$ km, the scale factor is $0.5$ km per cm.

**Worked example.** Two towns are 8 cm apart on this map. What is the real distance?

Let $d$ be the real distance in kilometres and $m$ the map distance in centimetres. Then

$$d = 0.5m.$$

For $m = 8$:

$$d = 0.5 \times 8 = 4.$$

The real distance is 4 km.

**Worked example.** Rearrange to find the map distance given a real distance of 12 km.

$$m = \frac{d}{0.5} = 2d.$$

For $d = 12$: $m = 24$ cm.

<a id="section-27-economics-break-even-analysis"></a>
## Economics: break-even analysis {#section-29-economics-break-even-analysis}

A small business makes handmade candles. Fixed costs are £200 per month. Each candle costs £3 to make and sells for £7. How many candles must be sold to break even?

Let $n$ be the number of candles. Revenue is $R = 7n$. Total cost is $C = 200 + 3n$. Break-even occurs when $R = C$:

$$7n = 200 + 3n,$$
$$4n = 200,$$
$$n = 50.$$

The business must sell 50 candles to break even. Above 50, profit is $7n - (200 + 3n) = 4n - 200$ pounds.

<a id="section-39-cooking-scaling-recipes"></a>
## Cooking: scaling recipes {#section-41-cooking-scaling-recipes}

A recipe serves 4 people and requires 250 g of flour. How much flour is needed for 7 people?

Let $f$ be flour in grams and $p$ the number of people. The rate is $\frac{250}{4} = 62.5$ g per person. So

$$f = 62.5p.$$

For $p = 7$: $f = 62.5 \times 7 = 437.5$ g.

Alternatively, set up a proportion:

$$\frac{250}{4} = \frac{f}{7},$$

so $f = \frac{250 \times 7}{4} = 437.5$ g.

<a id="section-55-sport-calculating-pace"></a>
## Sport: calculating pace {#section-57-sport-calculating-pace}

A runner completes a 10 km race in 48 minutes. What is the average pace in minutes per kilometre?

Let $t$ be time in minutes and $d$ distance in kilometres. Pace $p$ is time divided by distance:

$$p = \frac{t}{d} = \frac{48}{10} = 4.8.$$

The pace is 4.8 minutes per kilometre, or 4 minutes 48 seconds per kilometre.

If the runner wants to finish in 42 minutes, what pace is required?

$$p = \frac{42}{10} = 4.2 \text{ minutes/km} = 4 \text{ minutes } 12 \text{ seconds/km}.$$

<a id="section-69-music-tempo-and-beat-duration"></a>
## Music: tempo and beat duration {#section-71-music-tempo-and-beat-duration}

Tempo is measured in beats per minute (BPM). At 120 BPM, there are 120 beats in 60 seconds, so each beat lasts

$$\frac{60}{120} = 0.5 \text{ seconds}.$$

At tempo $T$ BPM, the duration of one beat in seconds is

$$b = \frac{60}{T}.$$

**Worked example.** At 90 BPM, how long is one beat?

$$b = \frac{60}{90} = \frac{2}{3} \approx 0.667 \text{ seconds}.$$

A quarter note at this tempo lasts about $0.667$ seconds.

<a id="section-85-project-design-your-own-formula"></a>
## Project: design your own formula {#section-87-project-design-your-own-formula}

Choose a situation from your own life: travel time, phone battery usage, garden area, or any measurable relationship.

1. Identify the independent and dependent variables.
2. Collect at least four data points by measurement or reliable observation.
3. Plot the points and decide whether the relationship looks linear.
4. If linear, find the slope and intercept and write a formula.
5. Use your formula to predict a value you have not measured.
6. Check the prediction against reality.
7. Write a short report explaining your method, your formula, and any sources of error.

<a id="section-97-practice-exercises"></a>
## Recognising the structure before choosing a formula {#section-266-recognising-the-structure-before-choosing-a-formula}

The subjects in this chapter attach different names to quantities, but a name alone does not choose an algebraic rule. A cost may be proportional to a count, may include a fixed fee, or may change at a capacity limit. A distance may depend on elapsed time through a constant-speed model or through several different stages. Begin by describing what remains fixed, what can vary, and which choices are allowed. Only then ask which expression captures the stated relationship.

A useful model card has four sentences. Name the input and output, with units. State the domain of the input. Give the rule and the assumptions that make it applicable. Finally, state one conclusion that the rule does not establish. For a printing tariff, for example, the count may be a whole number, the output a number of pounds, the rule a supplied fee plus a charge per sheet, and the conclusion only a price under that tariff. The same calculation says nothing about whether every printed sheet will find a buyer.

These sentences keep mathematical and real-world questions connected without merging them. Algebra can prove what follows from the supplied assumptions. Whether an actual business has omitted a cost, whether a measurement is reliable, or whether a recipe behaves as assumed needs information beyond the manipulation. A model with a clearly marked boundary is more useful than a formula whose apparent simplicity hides the question it answers.

<a id="section-272-proportional-and-affine-costs"></a>
## Proportional and affine costs {#section-274-proportional-and-affine-costs}

In a proportional rule $C(n)=kn$, the output at zero is zero when zero belongs to the domain, and a common rate $k$ applies throughout the stated domain. Doubling an allowed input doubles its output because $C(2n)=k(2n)=2C(n)$. This conclusion assumes that both $n$ and $2n$ are allowed and that the same rule applies to each. If production stops at a capacity of twenty items, the equation does not promise a forty-item order.

A fixed fee changes the structure to an **affine rule** $C(n)=F+kn$. When zero is allowed, $C(0)=F$. Whenever both adjacent counts are allowed, their cost difference is $C(n+1)-C(n)=k$. The difference is constant, but the ratio need not be. For $n>0$ the average cost per item is

$$\frac{C(n)}n=\frac Fn+k.$$

When $F>0$, spreading the fee over more items lowers this average. It does not lower the total cost when $k>0$. The total, the extra cost of one more item, and the average per item are three different quantities.

Take a supplied tariff $C(n)=6+1.5n$ pounds for integer $0\le n\le20$. At $n=4$ the cost is £12; at $n=8$ it is £18. Doubling the count did not double the cost. At four items the average is £3, while at eight it is £2.25. The extra charge per item remains £1.50. The tariff has not contradicted itself: the three questions are using different operations on one consistent rule.

Working backwards also uses the domain. A quote of £21 gives $6+1.5n=21$, hence $n=10$, an allowed integer. A quote of £20 would give $n=28/3$, which is not an allowed order under this tariff. That result can reveal a mismatch between the quote and the model; rounding it to nine or ten would silently change the question. An inverse calculation produces a candidate input, which must still satisfy the original restrictions.

<a id="section-286-reconstructing-a-rule-without-inventing-a-law"></a>
## Reconstructing a rule without inventing a law {#section-288-reconstructing-a-rule-without-inventing-a-law}

If a rule is known to be affine, two distinct input-output pairs determine its slope and intercept. Suppose a synthetic table records $(n,C)=(0,6)$ and $(4,12)$. The first pair gives $F=6$. The second gives $6+4k=12$, so $k=3/2$. A third entry, such as $(8,18)$, checks whether that entry is consistent with the proposed affine rule. It does not add another free parameter.

The phrase “known to be affine” is essential. Without that restriction, another expression can agree at all the supplied inputs and differ elsewhere. For the three inputs just named,

$$G(n)=6+\frac32n+n(n-4)(n-8)$$

gives the same three costs, since the added product vanishes at 0, 4 and 8. At $n=1$ the product is 21, so this rule disagrees strongly with the tariff. The expression is not a sensible replacement pricing policy; it is a mathematical witness that three agreements alone cannot prove the affine assumption.

In a supplied exercise, a pricing card may state the rule, making the table a way to inspect its consequences. In an investigation using observations, the rule is instead a proposal to compare with further evidence. Separate those situations in the written report. “These synthetic entries satisfy this stated model” is an exact mathematical claim. “This business always follows this rule” is a claim about a business and needs its own support.

A failed comparison does not tell you automatically which component is wrong. The arithmetic may be wrong, a value may have been copied incorrectly, a fee may have been omitted, or the relationship may genuinely have changed. Check the smallest discrepancy first. Replacing a whole model because of one unverified transcription is as poorly supported as ignoring a verified disagreement merely because the graph looks straight.

<a id="section-300-rates-over-several-stages"></a>
## Rates over several stages {#section-302-rates-over-several-stages}

An average is defined by its purpose. Overall average speed is total distance divided by total time. It is not automatically the arithmetic mean of the stage speeds. Suppose a rider covers 12 kilometres at 12 km/h and another 12 kilometres at 6 km/h. The first stage takes one hour and the second two hours, so the whole trip is 24 kilometres in three hours. Its average speed is 8 km/h, rather than $(12+6)/2=9$ km/h.

The slower stage occupies more time. A speed-time table makes the weighting visible: during one hour the rider covers 12 kilometres, and during the other two hours 12 kilometres. Dividing the total distance by the total time gives the rate that, if held constant for all three hours, would cover the same 24 kilometres. It does not say that the rider actually travelled at that rate during either stage.

For positive stage times $t_1,t_2$ and constant stage speeds $v_1,v_2$, the distances are $v_1t_1$ and $v_2t_2$. Therefore

$$v_{\mathrm{average}}=\frac{v_1t_1+v_2t_2}{t_1+t_2}.$$

When the times are equal, the common factor cancels and the ordinary mean of the two speeds follows. When the distances are equal instead, the times generally differ. Write a time for each stage rather than transferring an averaging rule from one situation to another. Any resting time included in the trip must appear in the total time even if its distance contribution is zero.

Music supplies another rate relationship. At a constant tempo of $b>0$ beats per minute, one beat lasts $60/b$ seconds. A bar assigned four beats lasts $240/b$ seconds. At 60 beats per minute it lasts four seconds; at 120 it lasts two. The duration is inversely proportional to the positive tempo. Doubling the tempo halves the duration under the same beat assignment; it does not subtract a fixed number of seconds at every tempo.

The earlier sentence about a quarter note at 90 BPM assumes that a quarter note is assigned one beat. Its $2/3$-second value is the duration of one beat at that tempo; it is the duration of a quarter note only under that beat assignment. If a note receives a different number of beats, multiply the one-beat duration by that assigned count. The earlier whole-note exercise states its four-beat assignment explicitly.

<a id="section-316-scaling-lengths-areas-and-amounts"></a>
## Scaling lengths, areas and amounts {#section-318-scaling-lengths-areas-and-amounts}

A map ratio compares lengths measured in the same unit. At scale $1:200$, one centimetre on the plan represents 200 centimetres, or two metres, in the represented layout. A rectangular region measuring 2 cm by 3 cm on that plan represents lengths of four and six metres, with area 24 square metres under the rectangular model.

There are two equivalent ways to check the area conversion. Convert the lengths first and multiply $4\times6=24$ square metres. Alternatively, the plan area is 6 square centimetres, and each of its two length factors is multiplied by 200, so the real area is $6(200)^2=240000$ square centimetres. Since one square metre is $100\times100=10000$ square centimetres, this is again 24 square metres.

Multiplying the plan area by 200 only once would apply a length ratio to an area. The dimensional symbol $\mathrm{cm}^2$ records the two factors that must change. More generally, scaling both side lengths of a rectangle by a positive factor $s$ multiplies its area by $s^2$: $(sL)(sW)=s^2LW$. This follows from multiplication, rather than from the appearance of one particular drawing.

Scaling a recipe raises a different set of conditions. If a stated recipe uses a fixed mass per serving, proportional multiplication gives the ingredient amount for another number of servings. That model assumes the serving definition is retained and the amount can be divided as required. It does not establish that a tin, oven or storage box has enough capacity. Nor does a numerical proportion justify rounding every ingredient independently without checking the effect on the recipe's defined ratios.

To keep the stages separate, write the proportional requirement and the capacity restriction as two statements. A model might require $75q$ grams for $q$ servings, while a container permits at most 900 grams. Combining them gives $75q\le900$, hence $q\le12$. If servings must be whole, the allowed counts are the integers from zero through twelve. The formula and the inequality cooperate: one describes the requirement, and the other restricts which requests can be fulfilled.

<a id="section-328-comparing-alternatives-through-their-difference"></a>
## Comparing alternatives through their difference {#section-330-comparing-alternatives-through-their-difference}

A comparison can be simpler than calculating two long lists separately. Suppose two supplied tariffs are $A(n)=12+2n$ and $B(n)=4+(5/2)n$ pounds. Their cost difference is

$$A(n)-B(n)=8-\frac n2.$$

At $n=16$ the difference is zero. Below sixteen, the difference is positive, so A costs more; above sixteen, A costs less. The claim uses the common domain where both tariffs apply. A plan unavailable at a particular count cannot be selected merely because its extension would give a lower number there.

The equality count is a boundary between two comparisons, not necessarily the answer to every decision. A cash limit may make one or both tariffs unavailable. A capacity may exclude the crossing. A target profit may require a minimum count, and a batch rule may permit only multiples of four. Each condition narrows the same domain; solving only the cost-equality equation ignores those additional requirements.

Profit introduces another distinction. Under the stated assumption that all $n$ items sell at a fixed price $p$, revenue is $R(n)=pn$, and profit is $R(n)-C(n)$. An affordable plan need not be profitable, and a potentially profitable plan may need more upfront money than is available. These are different inequalities involving the same count. Express them separately before intersecting their solutions.

The practical output is often a set of permitted whole numbers, followed by a comparison within that set. A continuous graph can help locate boundaries, but it does not turn a fractional print count into an available action. Check the adjacent allowed counts when rounding a threshold. At an exact equality, state whether the condition says “at least,” “at most,” or a strict inequality; that wording decides whether the boundary belongs.

<a id="section-342-choosing-a-whole-count-with-a-reason"></a>
## Choosing a whole count with a reason {#section-344-choosing-a-whole-count-with-a-reason}

A threshold fraction should be interpreted before it is rounded. Suppose a supplied cost rule is $C(n)=9+(7/4)n$ pounds for nonnegative integer counts, and the budget is £40. Affordability means

$$9+\frac74n\le40,\qquad 7n\le124,\qquad n\le\frac{124}{7}.$$

Since $124/7=17+5/7$, the largest allowed integer is seventeen. Ordinary nearest-integer rounding would give eighteen and violate the budget. The direction of the inequality, together with the whole-count domain, selects the appropriate integer.

Direct checks make the boundary visible: $C(17)=9+119/4=155/4=38.75$, while $C(18)=9+126/4=81/2=40.50$. These two values are useful because the cost increases by the positive amount $7/4$ for each extra item. Once eighteen fails, every larger count fails as well. Without that increasing-rule premise, one failed neighbouring input would not rule out all later choices.

Suppose a second requirement says that a profit expression $(3/4)n-9$ must be at least £3. Solving gives $3n\ge48$, so $n\ge16$. Intersecting this condition with the budget and whole-number domain leaves exactly sixteen and seventeen. Profit increases by $3/4$ per extra item, so seventeen gives the larger profit among these two. A capacity of sixteen would instead leave only sixteen. The appropriate choice follows the entire collection of restrictions, rather than whichever inequality happened to be solved first.

This style of reasoning is a small optimality certificate. Show that the selected count is permitted, then show why no other permitted count improves the stated objective. For a finite list, a complete table can establish the comparison. For an increasing affine profit rule, the largest feasible count gives a shorter certificate. If the objective decreases or changes its rule, reconsider that argument. “Choose the biggest” is a consequence of the objective's structure here, not a general rule for planning.

<a id="section-356-a-cumulative-modeling-dossier"></a>
## A cumulative modeling investigation {#section-358-a-cumulative-modeling-dossier}

The optional dossier **AS-10-P01** below supplies all its numbers. Its purpose is to let you reconstruct a complete algebraic decision without first collecting measurements. It supplements the existing **design your own formula** project, whose request for actual collected data remains unchanged. Using this synthetic reference does not fulfil that real-data requirement, and no fictional observations should be labelled as measurements.

The dossier brings together the chapter sequence. Quantities and units determine the variables; affine expressions encode pricing; tables and coordinates make comparisons visible; equation solving locates equality counts; inequalities intersect the requirements; and checking tests both arithmetic and admissibility. A complete explanation joins these steps. A correct final plan without its conditions cannot show why another permitted plan was rejected.

Keep a first response, a later public-model comparison and a separately dated revision. Record any answer or earlier example you used. The public reference is comparison support, not unseen evidence of independent performance. There is no supplied clock or observation that verifies a delay between attempts. The criterion rubric describes mathematical features to inspect and repair; it does not award a course grade, establish mastery or measure how long this book takes.

When you finish, carry the model card back to a context of your own. Ask which quantities you can actually identify, where a proportional or affine assumption would come from, and what observation could distinguish a calculation mistake from a model failure. That question keeps algebra connected to evidence while preserving the boundary between the two.
<!-- EULER-AS-10-EXPOSITION-END -->

<!-- EULER-AS-10-PROJECT-PROMPT-BEGIN -->
<a id="section-368-as-10-p01-a-supplied-print-stall-decision"></a>
## AS-10-P01 — a supplied print-stall decision {#section-370-as-10-p01-a-supplied-print-stall-decision}

This is an optional synthetic dossier, separate from the earlier **design your own formula** task. Every numerical card below is an authored assumption, not an observed business record. No data collection, programming or external account is required to reproduce this finite reference.

A group chooses one printing plan for one batch of $n$ cards. Plan A charges a £12 setup fee and £2 per card; Plan B charges a £4 setup fee and £2.50 per card. The setup fee is charged once when that plan is selected, including at count zero. Each printed card sells for £3, and for this model all $n$ cards sell. There are no additional costs in this synthetic case. The full production cost must be paid before any sales, with no borrowing or reinvestment within the batch.

The following quotation table is supplied as a consistency check on the pricing cards, not as evidence for a law fitted to real observations.

| Cards $n$ | A's quoted cost, pounds | B's quoted cost, pounds |
| --- | --- | --- |
| 0 | 12 | 4 |
| 6 | 24 | 19 |
| 12 | 36 | 34 |
| 18 | 48 | 49 |
| 24 | 60 | 64 |

**Primary case AS-10-P01-P.** The available cash is £48, capacity is 24 cards, and the group requires a profit of at least £4. Allowed counts are whole numbers including zero. Among choices meeting every requirement, choose the plan and count that give the greatest profit.

A complete primary response has seven deliverables.

1. Define the input, cost, revenue and profit quantities, their units, the domain, and the assumption that converts printed count to sales count.
2. Derive both cost rules and the revenue rule. Check all five quotation rows. Explain how the affine assumption permits reconstruction from the rows at zero and six, and why the table alone would not prove that an arbitrary cost function is affine.
3. Complete a table of revenue and both profits at the five quoted counts. Give two cost-graph points for each plan, explaining how a line drawing relates to the whole-count domain.
4. Find each plan's exact break-even count and the cost-equality count between plans. Interpret these boundaries without confusing equality, affordability and a target profit.
5. Solve the budget, capacity and profit inequalities for each plan, then list every feasible whole count.
6. Select the best feasible choice and prove that no other feasible choice has a higher profit. State which constraint limits the selected count.
7. Recalculate the primary optimal count and profit if the cash limit alone changes to £46 and then £50. Keep all other primary assumptions. Explain why these are conditional predictions rather than observed sales outcomes.

**Changed case AS-10-P01-C.** Keep the same tariffs, £3 sale price, £48 cash and advance-payment rule. Capacity is now 14 cards, cards must be printed and sold in complete bundles of four, and the required profit is at least £1. Rebuild the domain and feasible sets, select the best choice, and show why simply carrying forward the primary choice or using count fourteen fails. This changed case alters the available actions, as well as two numerical requirements.

Keep separate first, comparison and revised worksheets with the dossier ID and any public help used. A supplied model comparison cannot demonstrate that a first attempt was independent.

<a id="section-400-criterion-rubric-for-as-10-p01"></a>
## Criterion rubric for AS-10-P01 {#section-402-criterion-rubric-for-as-10-p01}

Use this 0–8 rubric only as a public self-review description. For each row, award 2 when the complete stated evidence is present, 1 when an appropriate approach is visible but a named part is missing or wrong, and 0 when the required evidence is absent or based on a different model. Record the specific repair rather than relying on the total. No score here is a course grade or verified learner result.

| Criterion | Evidence for 2 points | Repair when incomplete |
| --- | --- | --- |
| Quantities and model | Correct units, whole-count primary domain, bundle-restricted changed domain, both fees and per-card rates, sale/advance-payment assumptions | Rebuild the model card; separate costs, revenue, profit and available cash |
| Algebra and comparison | Every quotation/revenue/profit row, both break-even counts, crossing at 16, and correct inequalities with all boundaries | Recalculate the first discrepant row, then substitute every boundary into its original requirement |
| Feasibility and decision | Complete primary and changed feasible sets, a justified maximum, and both cash-limit sensitivity results | Intersect the conditions before choosing; use a complete finite comparison or an increasing-profit argument |
| Explanation and limits | Clear graph/domain explanation, a reason finite agreement does not establish an unrestricted law, and truthful first/comparison/revision and synthetic-data limits | Label the assumptions and assistance actually used; replace an unsupported real-world claim with its conditional mathematical statement |
<!-- EULER-AS-10-PROJECT-PROMPT-END -->

<!-- EULER-AS-10-PROJECT-SOLUTION-BEGIN -->
<a id="section-413-solutions-to-as-10-p01"></a>
## Solutions to AS-10-P01 {#section-415-solutions-to-as-10-p01}

<a id="section-415-as-10-p01-complete-primary-reference"></a>
### AS-10-P01 — complete primary reference {#section-417-as-10-p01-complete-primary-reference}

Let $n$ be the whole number of cards printed and sold in this batch. Cost and revenue are in pounds. The supplied rules give

$$C_A(n)=12+2n,\qquad C_B(n)=4+\frac52n,\qquad R(n)=3n.$$

Thus $\Pi_A(n)=R(n)-C_A(n)=n-12$ and $\Pi_B(n)=R(n)-C_B(n)=n/2-4$. These equations incorporate the fixed fees once, and use the assumption that every printed card sells. They do not describe uncertain demand.

The table can be checked directly:

| $n$ | $C_A(n)$ | $C_B(n)$ | $R(n)$ | $\Pi_A(n)$ | $\Pi_B(n)$ |
| --- | --- | --- | --- | --- | --- |
| 0 | 12 | 4 | 0 | $-12$ | $-4$ |
| 6 | 24 | 19 | 18 | $-6$ | $-1$ |
| 12 | 36 | 34 | 36 | 0 | 2 |
| 18 | 48 | 49 | 54 | 6 | 5 |
| 24 | 60 | 64 | 72 | 12 | 8 |

For example, $C_B(18)=4+(5/2)18=49$ and $\Pi_B(18)=54-49=5$. That profit does not make the choice affordable: its £49 cost exceeds the £48 available before sales.

Under the stated affine restriction, the zero row supplies the setup fee. For A, the cost increase from 0 to 6 is $24-12=12$, giving slope $12/6=2$. For B, the increase is $19-4=15$, giving slope $15/6=5/2$. The other rows agree with those rules. Arbitrary functions could match these five inputs and differ between or beyond them, so table agreement alone would not prove the affine restriction.

For a cost graph, take horizontal axis $n$ in cards and vertical axis cost in pounds. Points $(0,12)$ and $(6,24)$ determine A's affine comparison line; $(0,4)$ and $(6,19)$ determine B's. Only the integer counts within the stated capacity represent primary actions. Connecting points helps compare the algebraic rules; it does not authorize fractional cards.

Break-even means profit zero. For A, $n-12=0$ gives $n=12$; for B, $n/2-4=0$ gives $n=8$. Both are whole counts. Equality of the two costs means $12+2n=4+(5/2)n$, so $8=n/2$ and $n=16$. At that count both costs are £44 and both profits are £4. None of these equality calculations by itself applies the entire feasibility contract.

For A, affordability gives $12+2n\le48$, hence $n\le18$. Profit at least £4 gives $n-12\ge4$, hence $n\ge16$. Intersecting with integer $0\le n\le24$ leaves

$$n\in\{16,17,18\}\quad\text{for A}.$$

For B, affordability gives $4+(5/2)n\le48$, hence $n\le88/5=17.6$. Profit at least £4 gives $n/2-4\ge4$, hence $n\ge16$. Intersecting with the whole-count capacity leaves

$$n\in\{16,17\}\quad\text{for B}.$$

All feasible choices can therefore be compared without a search program:

| Plan and count | Cost, pounds | Revenue, pounds | Profit, pounds |
| --- | --- | --- | --- |
| A, 16 | 44 | 48 | 4 |
| A, 17 | 46 | 51 | 5 |
| A, 18 | 48 | 54 | 6 |
| B, 16 | 44 | 48 | 4 |
| B, 17 | $93/2=46.5$ | 51 | $9/2=4.5$ |

The greatest profit is £6 from A with eighteen cards. The table is an exhaustive comparison of the feasible choices. Equivalently, each profit increases with its count, so the maximum for each plan occurs at its largest feasible count; A's £6 then exceeds B's £4.50. The budget, rather than the capacity of 24, limits the chosen count. Direct checks are $C_A(18)=48$, $18\le24$ and $\Pi_A(18)=6\ge4$.

For cash £46, A requires $n\le17$ and $n\ge16$, giving counts 16 and 17 with largest profit £5 at seventeen. B requires $n\le84/5=16.8$ and $n\ge16$, leaving only sixteen with profit £4. The best choice is A, seventeen cards, profit £5.

For cash £50, A requires $n\le19$ and $n\ge16$, so its largest feasible profit is £7 at nineteen cards. B requires $n\le92/5=18.4$ and $n\ge16$, so its largest feasible profit is £5 at eighteen cards. The best choice is A, nineteen cards, profit £7. All capacity checks still hold. These results change one specified constraint within the synthetic model; no actual additional sale is observed or guaranteed.

<a id="section-465-as-10-p01-complete-changed-reference"></a>
### AS-10-P01 — complete changed reference {#section-467-as-10-p01-complete-changed-reference}

The changed domain is the set of nonnegative multiples of four not exceeding fourteen:

$$n\in\{0,4,8,12\}.$$

The tariffs, revenue and profit formulas are unchanged, but the required profit is now at least £1. For A that condition is $n-12\ge1$, or $n\ge13$. No count in the changed domain satisfies it, so A has no feasible choice. Affordability of those smaller counts would not rescue the missing profit.

For B the profit condition is $n/2-4\ge1$, so $n\ge10$. Of the four allowed counts, only twelve qualifies. Its cost is $4+(5/2)12=34\le48$, and its profit is $36-34=2\ge1$. Thus B with twelve cards is the unique feasible choice and consequently gives the greatest feasible profit.

The domain and profit checks can be seen completely:

| Allowed $n$ | A's cost | A's profit | B's cost | B's profit |
| --- | --- | --- | --- | --- |
| 0 | 12 | $-12$ | 4 | $-4$ |
| 4 | 20 | $-8$ | 14 | $-2$ |
| 8 | 28 | $-4$ | 24 | 0 |
| 12 | 36 | 0 | 34 | 2 |

Every listed cost is affordable, so profit and the changed domain decide this case. The primary choice of eighteen exceeds the new capacity and is not a multiple of four. Count fourteen respects the capacity but is not an available bundle count. Ignoring that restriction would suggest B's profit of $14/2-4=3$ at fourteen, but this is the value of the extended formula at an inadmissible action. The correct report retains the two unused capacity places rather than inventing half a bundle.

This reference supplies exact public comparisons and repair targets. It neither performs the earlier project's real measurement work nor establishes an independent first attempt, observed retention or a qualified course result.
<!-- EULER-AS-10-PROJECT-SOLUTION-END -->

<!-- EULER-AS-10-NEW-PRACTICE-BEGIN -->
<a id="section-490-practice-extensions"></a>

## Summary

<a id="section-259-looking-back"></a>
This book began with a simple idea: a letter can hold a place. From that starting point we built expressions, solved equations, graphed stories, handled inequalities, rearranged scientific formulas, simplified complex expressions, and learned to check our work. We saw the same algebraic structures appear in cafés, taxis, gyms, maps, kitchens, and concert halls.

The skills practised here are not endpoints. They are tools for every quantitative subject that follows: geometry, statistics, calculus, physics, economics, and beyond. The habit of translating a story into symbols, manipulating those symbols with care, and translating back to check the answer is the foundation of mathematical reasoning.

<!-- EULER-AS-10-EXPOSITION-BEGIN -->
<a id="section-264-recognising-the-structure-before-choosing-a-formula"></a>

<a id="section-632-summary"></a>
The same algebra serves different subjects when quantities, units and assumptions are stated. Separate proportional rates from fixed charges, continuous quantities from whole packages, and an exact model calculation from evidence that the model applies.

**Where next.** Continue with [Algebra and Functions](#/books/algebra-and-functions) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-99-practice-exercises}

<a id="section-99-exercise-1"></a>
### Exercise 1 {#section-101-exercise-1}
On a map with scale $1 : 25\,000$, a lake measures 6 cm long. What is its real length in kilometres?

<details>
<summary>Hint 1</summary>

**Hint.** Apply the map scale to the measured length using the same units.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Convert the resulting centimetres to kilometres after the scaling step.

</details>

<details>
<summary>Solution</summary>

**Solution.** 1 cm represents $25\,000$ cm $= 0.25$ km. So

$$d = 0.25 \times 6 = 1.5.$$

The lake is 1.5 km long.

</details>

<a id="section-126-exercise-2"></a>
### Exercise 2 {#section-128-exercise-2}
A café sells coffee for £2.50 and has daily fixed costs of £80. Each coffee costs £0.80 to produce. How many coffees must be sold daily to break even?

<details>
<summary>Hint 1</summary>

**Hint.** Write separate expressions for revenue and total cost.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve equality first, then distinguish exact break-even from the least whole sales count that avoids a loss.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $n$ be coffees sold. Revenue $= 2.5n$. Cost $= 80 + 0.8n$. Break-even:

$$2.5n = 80 + 0.8n,$$
$$1.7n = 80,$$
$$n = \frac{80}{1.7} = \frac{800}{17} \approx 47.06.$$

The exact equality occurs at about $47.06$ coffees, which is not an admissible whole-number sale count. At 47 coffees the café still loses £0.10; at 48 it earns £1.60. Thus there is no integer count giving exact break-even, and 48 is the least whole number that avoids a loss.

</details>

<a id="section-155-exercise-3"></a>
### Exercise 3 {#section-157-exercise-3}
A recipe for 6 people uses 400 g of rice. How much rice is needed for 15 people?

<details>
<summary>Hint 1</summary>

**Hint.** Assume equal portions and a proportional recipe before scaling.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Find the mass per person or use the ratio of the two group sizes.

</details>

<details>
<summary>Solution</summary>

**Solution.** The rate is $\frac{400}{6} = \frac{200}{3}$ g per person. For 15 people:

$$\frac{200}{3} \times 15 = 200 \times 5 = 1000.$$

1 kg of rice is needed.

</details>

<a id="section-182-exercise-4"></a>
### Exercise 4 {#section-184-exercise-4}
A cyclist rides 35 km in 1 hour 45 minutes. Find the average speed in km/h.

<details>
<summary>Hint 1</summary>

**Hint.** Express the whole travel time in hours.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide the complete distance by the converted time, not by a decimal made from the minute digits.

</details>

<details>
<summary>Solution</summary>

**Solution.** 1 hour 45 minutes $= 1.75$ hours. Speed is

$$v = \frac{35}{1.75} = 20.$$

The average speed is 20 km/h.

</details>

<a id="section-209-exercise-5"></a>
### Exercise 5 {#section-211-exercise-5}
A piece of music is marked at 72 BPM. How many seconds does a whole note last if it receives four beats?

<details>
<summary>Hint 1</summary>

**Hint.** BPM gives beats per minute, while the question asks seconds for several beats.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Find seconds per beat, then multiply by the specified beat count.

</details>

<details>
<summary>Solution</summary>

**Solution.** One beat lasts $\frac{60}{72} = \frac{5}{6}$ seconds. A whole note lasts

$$4 \times \frac{5}{6} = \frac{20}{6} = \frac{10}{3} \approx 3.33 \text{ seconds}.$$

</details>

<a id="section-234-exercise-6"></a>
### Exercise 6 {#section-236-exercise-6}
A student claims that doubling every ingredient in a recipe always doubles the number of people it serves. Give a counterexample and explain when the claim fails.

<details>
<summary>Hint 1</summary>

**Hint.** A proportional ingredient rule does not remove physical capacity limits.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Choose a fixed tin, pan or oven whose capacity is exceeded by the doubled batch and name the failed assumption.

</details>

<details>
<summary>Solution</summary>

**Solution.** Consider a cake baked in a fixed-size tin. Doubling the batter would overflow the tin. The constraint is the tin's volume, not just the ingredient ratio. The claim fails whenever physical capacity---tin size, oven space, pot volume---limits the recipe. Algebra describes the proportional relationship, but context imposes additional constraints.

</details>

<a id="section-257-looking-back"></a>

<a id="section-492-practice-extensions"></a>
### Exercise 7 — AS-10-E07 — compare three cost questions {#section-496-as-10-e07-compare-three-cost-questions}

A supplied delivery tariff is $C(n)=5+2n$ pounds for integer $0\le n\le12$ parcels. Find the total cost, the extra cost of one more parcel, and the average cost per parcel at $n=4$ and $n=8$. Which of these quantities stays constant? Explain why doubling four parcels does not double the total bill. Find every allowed count whose total bill is at most £22.

<details>
<summary>Hint 1</summary>

**Hint.** Separate total cost, extra cost and average cost.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide by the parcel count only for the average, and keep the allowed integer range when solving the bill limit.

</details>



<a id="section-513-as-10-e08-reconstruct-a-trip-average"></a>
### Exercise 8 — AS-10-E08 — reconstruct a trip average {#section-515-as-10-e08-reconstruct-a-trip-average}

A cyclist covers 18 km at a constant 9 km/h and then 18 km at a constant 6 km/h, with no rest included. Find the total trip time and average speed. Diagnose the answer $7.5$ km/h obtained by averaging the two speeds. State a condition on two stage times under which the ordinary mean of their constant speeds would give the whole-trip average.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the time spent on each equal-distance stage.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Add distances and times before dividing; the ordinary speed mean needs equal stage times, not equal stage lengths.

</details>



<a id="section-532-as-10-e09-keep-the-scaling-dimension"></a>
### Exercise 9 — AS-10-E09 — keep the scaling dimension {#section-534-as-10-e09-keep-the-scaling-dimension}

A rectangular garden on a scale-$1:500$ plan measures 2 cm by 3 cm. Find the represented side lengths in metres and the area in square metres. A learner multiplies the plan area, 6 square centimetres, by 500 and reports that as the represented area. Explain the missing factor and verify the answer by two consistent routes. State the geometric/model assumption used.

<details>
<summary>Hint 1</summary>

**Hint.** A length scale applies separately to each side.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Calculate the represented sides in metres, then compare their product with scaling the plan area by the square of the length factor.

</details>

<!-- EULER-AS-10-NEW-PRACTICE-END -->

<!-- EULER-AS-10-SOLUTIONS-BEGIN -->

<a id="section-553-solutions-to-practice-extensions"></a>

<a id="section-606-a-further-practice-problem"></a>
<a id="section-606-exercise-10"></a>
### Exercise 10 {#section-608-exercise-10}
<a id="algebra-in-other-subjects-ex-10"></a>

A supplied paint model says that 0.5 litres covers 4 square metres at the same coverage rate throughout. Paint is sold only in 0.75-litre cans. How much paint does a 10-square-metre wall require, how many full cans must be bought, and how much paint remains if the model is exact and no paint is wasted?

<details>
<summary>Hint 1</summary>

**Hint.** Use proportional coverage to find the required litres before considering packaging.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide the requirement by the can capacity, then choose a whole count whose total volume is sufficient.

</details>
<details>
<summary>Solution</summary>

**Solution.** The required rate is $0.5/4=0.125$ litres per square metre. Ten square metres therefore needs $10(0.125)=1.25$ litres. One can supplies only 0.75 litres, which is insufficient; two supply $2(0.75)=1.5$ litres, which is sufficient. Thus the least whole purchase is two cans. The remainder is $1.5-1.25=0.25$ litres. Equivalently, the can-count condition is $0.75n\ge1.25$ with nonnegative integer $n$, giving $n\ge5/3$ and hence least $n$ equal to two. This conclusion uses the stated constant coverage and no-waste assumptions.

</details>

<a id="section-630-summary"></a>

## Solutions {#section-555-solutions-to-practice-extensions}

<a id="section-555-as-10-e07-solution"></a>
### AS-10-E07 — solution {#section-557-as-10-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

At four parcels, the bill is $C(4)=5+8=13$ pounds and the average is $13/4=3.25$ pounds per parcel. At eight parcels, the bill is $C(8)=5+16=21$ pounds and the average is $21/8=2.625$ pounds per parcel. Wherever both adjacent counts are allowed,

$$C(n+1)-C(n)=5+2(n+1)-(5+2n)=2.$$

The extra cost is always £2, but the total and average change. In particular, doubling the four-parcel bill would give £26, whereas the eight-parcel bill is £21: the fixed £5 fee is paid once rather than doubled.

The budget inequality is $5+2n\le22$, so $n\le17/2=8.5$. Intersecting with the stated whole-count domain gives every count $n\in\{0,1,2,3,4,5,6,7,8\}$. Count eight costs £21 and count nine costs £23; the increasing rule excludes all higher counts. Average cost was only requested at positive counts, since division by the zero count is undefined.

</details>

<a id="section-572-as-10-e08-solution"></a>
### AS-10-E08 — solution {#section-574-as-10-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

The first time is $18/9=2$ hours and the second $18/6=3$ hours. Total distance is 36 km and total time five hours, giving average speed $36/5=7.2$ km/h. The ordinary mean $(9+6)/2=7.5$ treats the speeds as if they acted for equal times, although the slower stage actually lasts longer.

For positive stage times $t_1,t_2$, the overall average is $(v_1t_1+v_2t_2)/(t_1+t_2)$. If $t_1=t_2=t>0$, this becomes $(tv_1+tv_2)/(2t)=(v_1+v_2)/2$. Equal positive stage times are therefore a sufficient condition. If the two speeds themselves are equal, unequal times also happen to give that same average; equal time is not claimed necessary in every case.

</details>

<a id="section-585-as-10-e09-solution"></a>
### AS-10-E09 — solution {#section-587-as-10-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

Each plan centimetre represents 500 cm, or 5 m. The represented sides are therefore 10 m and 15 m, giving area $10(15)=150$ square metres. Alternatively, the plan area is $2(3)=6$ square centimetres. Scaling each of its two length factors by 500 multiplies area by $500^2$:

$$6(500)^2=1500000\ \mathrm{cm}^2=150\ \mathrm{m}^2.$$

The last conversion divides by $100^2=10000$, since a square metre contains ten thousand square centimetres. The learner applied the length factor only once, losing the second factor. The calculation assumes that the indicated region is rectangular and both represented lengths use the same stated scale. It does not infer an arbitrary curved region's area from two spans.

</details>

<!-- EULER-AS-10-SOLUTIONS-END -->



<a id="section-604-a-further-practice-problem"></a>
