var e=`---
parent_id: book-algebra-from-stories
chapter_id: formulas-from-science
title: "Formulas from Science"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Formulas from Science {#section-1-formulas-from-science}

<a id="section-1-why-science-needs-algebra"></a>
## Why science needs algebra {#section-3-why-science-needs-algebra}

In **Inequalities and Regions** we learned to describe boundaries and feasible choices. Science pushes this further: physical laws are expressed as formulas, and using them requires the same algebraic skills---substitution, rearrangement, and interpretation---that we have been building. This chapter practises those skills with formulas from physics, chemistry, and everyday measurement. The goal is not to teach the science itself, but to show how algebra serves as the language of quantitative reasoning.

<a id="section-5-rearranging-formulas"></a>
## Rearranging formulas {#section-7-rearranging-formulas}

A formula such as $F = ma$ (force equals mass times acceleration) expresses $F$ in terms of $m$ and $a$. Sometimes we know $F$ and $m$ and need $a$. We rearrange by undoing operations.

**Worked example.** Solve $F = ma$ for $a$.

Divide both sides by $m$ (assuming $m \\neq 0$):

$$a = \\frac{F}{m}.$$

**Worked example.** The formula for the area of a trapezium is

$$A = \\frac{1}{2}(a + b)h,$$

where $a$ and $b$ are the parallel sides and $h$ is the height. Solve for $h$.

Multiply both sides by 2:

$$2A = (a + b)h.$$

Divide by $(a + b)$ (assuming $a + b \\neq 0$):

$$h = \\frac{2A}{a + b}.$$

<a id="section-29-common-error-dividing-only-one-term"></a>
### Common error: dividing only one term {#section-31-common-error-dividing-only-one-term}

When solving $2A = (a + b)h$ for $h$, a student might write $h = \\frac{2A}{a} + b$. This is wrong because the divisor $(a + b)$ must divide the entire product, not just $a$. To avoid this, treat $(a + b)$ as a single quantity in parentheses.

<a id="section-33-temperature-conversion"></a>
## Temperature conversion {#section-35-temperature-conversion}

The Celsius and Fahrenheit scales are related by

$$F = \\frac{9}{5}C + 32.$$

**Worked example.** Convert $25^{\\circ}\\text{C}$ to Fahrenheit.

$$F = \\frac{9}{5}(25) + 32 = 45 + 32 = 77.$$

So $25^{\\circ}\\text{C} = 77^{\\circ}\\text{F}$.

**Example.** Convert $98.6^{\\circ}\\text{F}$ to Celsius.

Subtract 32: $F - 32 = \\frac{9}{5}C$.

Multiply by $\\frac{5}{9}$: $C = \\frac{5}{9}(F - 32)$.

$$C = \\frac{5}{9}(98.6 - 32) = \\frac{5}{9}(66.6) = 37.$$

So $98.6^{\\circ}\\text{F} = 37^{\\circ}\\text{C}$.

<a id="section-55-density-and-concentration"></a>
## Density and concentration {#section-57-density-and-concentration}

Density is mass per unit volume:

$$\\rho = \\frac{m}{V}.$$

**Example.** A metal block has mass 270 g and volume 100 cm$^{3}$. Find its density.

$$\\rho = \\frac{270}{100} = 2.7 \\text{ g/cm}^{3}.$$

**Example.** Rearrange $\\rho = \\frac{m}{V}$ to make $m$ the subject.

Multiply both sides by $V$:

$$m = \\rho V.$$

If the density of water is $1 \\text{ g/cm}^{3}$, then 250 cm$^{3}$ of water has mass $1 \\times 250 = 250$ g.

<a id="section-73-speed-distance-and-time"></a>
## Speed, distance, and time {#section-75-speed-distance-and-time}

The fundamental formula is

$$d = vt,$$

where $d$ is distance, $v$ is speed, and $t$ is time.

**Example.** A car travels at 80 km/h for 2.5 hours. How far does it go?

$$d = 80 \\times 2.5 = 200.$$

The distance is 200 km.

**Example.** A train covers 300 km in 4 hours. What is its average speed?

Rearrange: $v = \\frac{d}{t} = \\frac{300}{4} = 75$. The average speed is 75 km/h.

<a id="section-91-electrical-power"></a>
## Electrical power {#section-93-electrical-power}

Power in an electrical circuit is given by

$$P = IV,$$

where $P$ is power in watts, $I$ is current in amperes, and $V$ is voltage in volts.

**Example.** A lamp draws 0.5 A at 230 V. What power does it consume?

$$P = 0.5 \\times 230 = 115.$$

The power is 115 W.

**Example.** A heater consumes 2000 W from a 230 V supply. What current does it draw?

Rearrange: $I = \\frac{P}{V} = \\frac{2000}{230} = \\frac{200}{23} \\approx 8.70$. The current is approximately 8.70 A.

<a id="section-109-checking-units"></a>
## Checking units {#section-111-checking-units}

Every formula carries a unit structure. If the units do not match, the calculation is suspect.

**Example.** In $d = vt$, if $v$ is in km/h and $t$ is in hours, then $d$ is in km. If $t$ were in minutes, we would need to convert it to hours before multiplying.

**Example.** In $P = IV$, amperes times volts give watts: $\\text{A} \\times \\text{V} = \\text{W}$. This is a consistency check, not a derivation, but it catches many errors.

<a id="section-117-practice-exercises"></a>
## formulas and models {#section-280-further-development-for-formulas-and-models}

<a id="section-282-reading-a-formula-as-a-relationship"></a>
## Reading a formula as a relationship {#section-284-reading-a-formula-as-a-relationship}

A formula can answer different questions without changing its meaning. In $d=vt$, one question gives $v$ and $t$ and asks for $d$. Another gives $d$ and $t$ and asks for $v$. The letter we want is the **subject** of the rearrangement. The other given quantities act as parameters for that calculation. A parameter is not a new kind of number: it is a quantity we hold fixed while asking how the unknown can vary.

Start a calculation by writing a small quantity record. For a constant-speed model it might say: $d$ is distance in kilometres, $t$ is elapsed time in hours, $v$ is speed in kilometres per hour, and $t>0$. The last condition matters when dividing by time. If the journey lasts zero hours, the displayed quotient $d/t$ does not define an average speed. A formula with its quantity record is more useful than an isolated string of letters because the record explains which operations and answers are allowed.

The same letter can mean different things in different models. The $F$ in $F=ma$ denotes force; the $F$ in the temperature conversion denotes a Fahrenheit reading. Do not combine those two formulas merely because they share a letter. Similarly, $V$ may denote a volume in one section and a voltage in another. A written description and units resolve the meaning. The algebraic pattern may be reusable even when the quantities are different.

Before manipulating, say the relationship in words. “The recorded height is two centimetres plus three centimetres for every minute elapsed” becomes $h=2+3t$ when $h$ and $t$ denote numerical readings in those units. It does not become $h=2(3t)$: the two-centimetre starting height is added once, rather than multiplied by elapsed time. This translation step distinguishes a fixed contribution from a contribution that grows with the input.

<a id="section-292-undoing-a-formula-in-the-reverse-order"></a>
## Undoing a formula in the reverse order {#section-294-undoing-a-formula-in-the-reverse-order}

Imagine building an output from the unknown. In $h=2+3t$, first multiply $t$ by $3$, then add $2$. To recover $t$, undo the last operation first: subtract $2$, then divide by $3$. The resulting formula is

$$t=\\frac{h-2}{3}.$$

The brackets say that the entire difference is divided by $3$. The rule $t=h-2/3$ would undo a different sequence of operations. For $h=11$, the correct calculation gives $t=3$, whereas $11-2/3$ does not. Substitution into the original formula verifies $2+3(3)=11$.

Now include a model boundary. Suppose the height rule is supplied only for $0\\le t\\le4$ minutes. Its outputs range from $2$ to $14$ centimetres. A target $h=11$ gives the allowed time $3$. A target $h=17$ gives the algebraic candidate $t=5$, but that time is outside the stated interval. The candidate does not answer the original bounded question. We have not proved what the height is after four minutes, because the supplied model did not describe that part of the process.

This is a useful distinction between **rearranging** and **applying** a formula. Rearranging establishes an equivalent relationship under specified arithmetic conditions. Applying also requires that the given and recovered values belong to the model's domain. Record both parts: “Subtracting and dividing gives $t=5$; the supplied model permits only $0\\le t\\le4$, so it supplies no time for that target.” That conclusion preserves the information instead of silently extending it.

A more general affine rule is $q=a+bt$. If $b\\ne0$, the inverse calculation is $t=(q-a)/b$. If $b=0$, division is unavailable and the original rule becomes $q=a$. When the specified output equals $a$, every allowed $t$ satisfies it; when the output differs from $a$, none does. The zero case is a question about the original equation, not a reason to invent a value for a quotient with denominator zero.

<a id="section-306-keep-the-case-that-division-would-discard"></a>
## Keep the case that division would discard {#section-308-keep-the-case-that-division-would-discard}

The same issue appears in product formulas. For the algebraic equation $F=ma$, a nonzero known $m$ gives the unique candidate $a=F/m$. If we temporarily allow $m=0$ as an algebra exercise, the equation becomes $F=0$. It has every real $a$ as a solution when $F=0$, and no solution when $F\\ne0$. A physical model may require positive mass and therefore exclude that case before calculation. Distinguish the arithmetic classification from the physical assumptions instead of treating a zero-mass calculation as a new physical law.

The original Exercise 1 uses the symbolic resistance formula only when $I\\ne0$; its given current of $0.4$ ampere satisfies that condition. If $I=0$, the algebraic equation $V=IR$ requires $V=0$ and then leaves $R$ undetermined; for $V\\ne0$ it has no solution. In original Exercise 2, $h=V/(\\pi r^2)$ requires $r\\ne0$. A genuine cylinder's positive radius supplies this condition, as does the given radius of $5$ centimetres. A zero-radius object is outside that geometric question. These explicit conditions accompany the original symbolic answers without changing their numerical worked cases.

When a sum is the divisor, test the whole sum. In the trapezium formula, the required condition is $a+b\\ne0$, rather than two separate conditions $a\\ne0$ and $b\\ne0$. In unrestricted real algebra, $a=3$ and $b=-3$ are both nonzero but have sum zero. For a genuine trapezium, the positive lengths make $a+b>0$, so the geometric domain supplies the needed condition. The story can justify a division, but the justification should be stated.

There is also a difference between a formula that calculates a quantity and a formula that defines an average. The equation $d=vt$ describes a constant speed $v$ over time $t$, or describes the total distance using the average speed $v=d/t$ for a positive-duration journey. It does not assert that the instantaneous speed was the same throughout every journey with that average. Two journeys can cover the same total distance in the same total time while distributing their motion differently.

For example, travelling $30$ kilometres during the first hour and $50$ during the second gives total distance $80$ kilometres in two hours, hence average speed $40$ kilometres per hour. The equation $80=40(2)$ is correct for those totals. It does not replace the two supplied hourly distances by $40$ and $40$. Algebra respects what its symbols were defined to record; a correct total does not supply missing detail about the process.

<a id="section-318-temperature-readings-and-temperature-differences"></a>
## Temperature readings and temperature differences {#section-320-temperature-readings-and-temperature-differences}

The addition of $32$ makes Celsius-to-Fahrenheit conversion different from a pure scaling rule. To see this, take two readings related by

$$F_1=\\frac95C_1+32,\\qquad F_2=\\frac95C_2+32.$$

Subtract the first equation from the second. The fixed offsets cancel:

$$F_2-F_1=\\frac95(C_2-C_1).$$

Thus a rise of $5$ Celsius degrees corresponds to a rise of $9$ Fahrenheit degrees. We do not add $32$ to a temperature difference. The addition is needed when locating a reading on a scale whose zero is different, not when comparing two positions on that same scale.

For a concrete check, $10^\\circ\\text{C}$ corresponds to $50^\\circ\\text{F}$, and $20^\\circ\\text{C}$ corresponds to $68^\\circ\\text{F}$. Doubling the Celsius reading has not doubled the Fahrenheit reading: $68\\ne100$. However, the change is $10$ Celsius degrees and $18$ Fahrenheit degrees, satisfying the difference rule. “Twice as large” must therefore name which numerical reading or difference is being compared; it cannot be moved unchanged between these two scales.

This affine pattern appears in other supplied conversions and calibration rules. A scale factor changes differences, while an offset changes the starting reference. If a graph of the relationship is a straight line, the scale factor is its slope and the offset is its intercept. That connection uses the graphing chapter: a straight line need not pass through the origin. Only a rule with zero intercept has the direct-proportion form $q=bt$.

<a id="section-334-a-complete-calibration-ledger"></a>
## A complete calibration ledger {#section-336-a-complete-calibration-ledger}

Consider an explicitly synthetic container model. The empty container has mass $18$ grams. A uniform liquid has density $4/5$ gram per millilitre, and $V$ denotes a liquid volume between $0$ and $100$ millilitres. Assume this density stays fixed throughout the supplied range. The total mass reading $M$, in grams, is

$$M=18+\\frac45V,\\qquad 0\\le V\\le100.$$

The following table comes from that stated model; it is not a report of an experiment.

| Liquid volume $V$ in millilitres | Liquid mass in grams | Total mass $M$ in grams |
| --- | --- | --- |
| $0$ | $0$ | $18$ |
| $25$ | $20$ | $38$ |
| $50$ | $40$ | $58$ |
| $75$ | $60$ | $78$ |
| $100$ | $80$ | $98$ |

Each increase of $25$ millilitres adds $20$ grams. The fixed container mass explains why total mass is not proportional to liquid volume: doubling $V$ from $25$ to $50$ doubles the liquid mass from $20$ to $40$, but changes total mass from $38$ to $58$.

Suppose a total reading of $94$ grams is supplied. Subtract the container mass before dividing by density:

$$94-18=\\frac45V,\\qquad V=76\\cdot\\frac54=95.$$

The recovered volume is $95$ millilitres, within the allowed range. The original check is $18+(4/5)(95)=18+76=94$. Dividing $94$ directly by $4/5$ would mistakenly assign the container's mass to the liquid. A clear quantity record prevents that mistake before any arithmetic is performed.

A reading of $110$ grams would produce $V=(110-18)(5/4)=115$ millilitres. That candidate lies outside the calibration range, so the supplied model does not license it. A total reading below $18$ grams is also outside this model's output range. Such a reading may signal a different container, a different liquid, or an unsuitable assumption, but the formula alone cannot identify which explanation is correct.

Units provide a second route to checking the inverse. Dividing grams by grams per millilitre leaves millilitres:

$$\\frac{\\text{g}}{\\text{g}/\\text{mL}}=\\text{mL}.$$

The same density is $800$ grams per litre, because one litre is $1000$ millilitres. The inferred $95$ millilitres is $0.095$ litre, so the liquid mass is also $800(0.095)=76$ grams. Changing units changes the numerical coefficient together with the numerical input; changing only one of them changes the calculation.

<a id="section-366-choosing-the-denominator-in-a-concentration"></a>
## Choosing the denominator in a concentration {#section-368-choosing-the-denominator-in-a-concentration}

A mass fraction compares the mass of one component with the total mass. Let $s\\ge0$ grams of salt be combined with $w>0$ grams of water, with no loss of either mass. The salt mass fraction is

$$c=\\frac{s}{w+s}.$$

The denominator is the mass of the whole mixture. The ratio $s/w$ answers a different question: salt mass compared with water mass. Even though both ratios have no remaining unit, they need not have the same value. Units alone cannot decide which denominator expresses the intended comparison.

To recover the required salt mass from a chosen fraction, regard $w$ and $c$ as given. Since $w+s>0$, multiply the equation by that denominator, then collect the terms containing $s$:

$$c(w+s)=s,\\qquad cw+cs=s,\\qquad cw=(1-c)s.$$

For $0\\le c<1$, the coefficient $1-c$ is positive, so

$$s=\\frac{cw}{1-c}.$$

With $w=180$ grams and $c=1/10$, this gives $s=18/(9/10)=20$ grams. The total mass is $200$ grams and the original fraction is $20/200=1/10$. Using $s=cw$ would instead give $18$ grams, whose fraction is $18/198=1/11$. The distinction comes from whether the added salt belongs in the total.

The boundary conditions explain the formula's limits. With positive water mass, $c=0$ requires $s=0$. The value $c=1$ is impossible for finite $s$, because the positive water mass remains part of the denominator. If the problem changes to $w=0$ and $s>0$, the fraction is $1$ for every positive $s$, so it no longer determines a unique salt mass. Do not divide by $1-c$ and overlook that changed situation.

A mass fraction also does not determine grams per litre unless the final volume is supplied. Adding component volumes is a separate model assumption, not an algebraic consequence of adding their masses. This is why the original concentration exercise provides a total volume. Keep the chosen comparison, the units and the physical assumptions in separate lines of the quantity record.

<a id="section-388-finding-a-missing-coefficient-is-a-different-question"></a>
## Finding a missing coefficient is a different question {#section-390-finding-a-missing-coefficient-is-a-different-question}

Sometimes the quantities to recover are the parameters of the formula itself. Suppose a synthetic instrument is **assumed** to follow $Q=a+bt$, where $t$ is elapsed minutes and $Q$ is a numerical scale reading. Two supplied pairs are $(t,Q)=(0,14)$ and $(5,29)$. Substitution gives

$$14=a+0b,\\qquad 29=a+5b.$$

The first equation gives $a=14$. Subtracting it from the second gives $15=5b$, so $b=3$ scale units per minute. The resulting rule is $Q=14+3t$. This uses the earlier two-unknowns chapter: the two parameters are found from two simultaneous requirements, rather than guessed from the size of a reading.

Within the assumed affine family, these two different input values determine one rule. They do not establish that an actual instrument follows that family at every other input. A third supplied pair $(2,20)$ is consistent, since $14+3(2)=20$. A pair $(2,21)$ would be inconsistent with the same exact affine rule. Neither result alone identifies a physical cause. The third reading checks the model at an additional input; the assumptions still state where the rule is intended to apply.

This also explains why one product equation may contain too little information. If a circuit model supplies only $V=IR$ and a numerical voltage of $12$ volts, both $I=0.4$ ampere with $R=30$ ohms and $I=0.2$ ampere with $R=60$ ohms satisfy it. Asking for a unique resistance needs a current value or another independent condition. Writing $R=12/I$ for $I\\ne0$ describes the remaining relationship; it does not turn an unspecified $I$ into a known number.

<a id="section-400-units-check-compatibility-not-the-whole-model"></a>
## Units check compatibility, not the whole model {#section-402-units-check-compatibility-not-the-whole-model}

An equation that adds a time to a distance is unsuitable unless an additional conversion or relationship explains how those quantities are to be compared. Multiplication and division combine units as well as numbers. That is why a speed multiplied by a duration can produce a distance, whereas speed plus duration does not have the required unit structure.

Correct units are necessary for the intended interpretation, but do not force a particular numerical factor. Both $vt$ and $2vt$ have distance units. In the supplied constant-speed model, only $d=vt$ expresses the stated meaning of $v$ as distance per unit time. The factor of two cannot be justified merely by saying that the units match. Return to the definition or given model to decide between formulas that are dimensionally compatible.

Use this distinction when checking a rearrangement: units can expose an impossible operation, while substitution and the reversible algebraic steps establish the relationship being claimed. Context then determines whether those assumptions and inputs answer the original question. These checks cooperate; none silently supplies the missing information needed by another.

<a id="section-408-what-a-successful-rearrangement-establishes"></a>
## What a successful rearrangement establishes {#section-410-what-a-successful-rearrangement-establishes}

A complete explanation can now follow a short sequence: name the unknown and given quantities; state the model's allowed inputs; undo operations with each nonzero condition recorded; check the recovered candidate in the original relationship; then interpret its domain and units. This is an explanation of this calculation, not a mechanical demand to repeat every step when it is already clear.

The physical formulas in the original exercises are supplied model relationships for practising algebra, not assertions that each relationship applies in every physical setting. For the numerical circuit examples, use the stated relation with the given current and voltage held fixed.

The scientific model and the algebraic inference have different responsibilities. From the supplied calibration assumptions, the inverse volume calculation follows exactly. The calculation does not establish that a real liquid has that constant density, that a real scale has no error, or that a model remains valid outside its stated interval. Those questions require information beyond rearranging symbols. Keeping that boundary visible lets algebra clarify a scientific claim without pretending to supply missing observations.
<!-- EULER-AS-06-EXPOSITION-END -->

<!-- EULER-AS-06-QUESTIONS-START -->
<a id="section-418-practice-extensions"></a>

## Summary

<a id="section-273-looking-back-and-forward"></a>
This chapter practised the essential skill of rearranging formulas: treating the target variable as the unknown and undoing every operation that surrounds it. We worked with temperature, density, speed, and power, and we checked units to catch errors.

In the next chapter, **Equivalent Expressions**, we return to pure algebra and ask when two expressions represent the same value for every substitution. This question leads to simplification, factorisation, and a deeper understanding of algebraic structure.

<!-- EULER-AS-06-EXPOSITION-START -->
<a id="section-278-further-development-for-formulas-and-models"></a>

<a id="section-562-summary"></a>
Rearranging a formula means undoing the operations surrounding the requested unknown, using only permitted divisions. Keep units and modelling assumptions alongside the algebra, and distinguish a measured quantity from a change in that quantity.

**Where next.** Continue with [Algebra and Functions](/books/library-book-algebra-and-functions/) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-119-practice-exercises}

<a id="section-119-exercise-1"></a>
### Exercise 1 {#section-121-exercise-1}
Rearrange $V = IR$ to make $R$ the subject, then find the resistance when $V = 12$ V and $I = 0.4$ A.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the factor multiplying the requested unknown.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide by the given nonzero current and retain the resistance units when substituting.

</details>

<details>
<summary>Solution</summary>

**Solution.** Divide by $I$: $R = \\frac{V}{I}$. Then $R = \\frac{12}{0.4} = 30$. The resistance is $30 \\, \\Omega$ (ohms).

</details>

<a id="section-142-exercise-2"></a>
### Exercise 2 {#section-144-exercise-2}
The volume of a cylinder is $V = \\pi r^{2}h$. Solve for $h$ and find the height when $V = 500$ cm$^{3}$ and $r = 5$ cm. Use $\\pi \\approx 3.14$.

<details>
<summary>Hint 1</summary>

**Hint.** Treat the radius-dependent factor as one multiplier of h.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide by pi times the square of the radius; square the radius before inserting the supplied approximation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Divide by $\\pi r^{2}$:

$$h = \\frac{V}{\\pi r^{2}} = \\frac{500}{3.14 \\times 25} = \\frac{500}{78.5} \\approx 6.37.$$

The height is approximately 6.37 cm.

</details>

<a id="section-169-exercise-3"></a>
### Exercise 3 {#section-171-exercise-3}
Convert $-40^{\\circ}\\text{F}$ to Celsius.

<details>
<summary>Hint 1</summary>

**Hint.** Use the inverse Fahrenheit-to-Celsius rule, including its offset.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Subtract the Fahrenheit offset before multiplying by the scale factor.

</details>

<details>
<summary>Solution</summary>

**Solution.**

$$C = \\frac{5}{9}(-40 - 32) = \\frac{5}{9}(-72) = -40.$$

So $-40^{\\circ}\\text{F} = -40^{\\circ}\\text{C}$. This is the temperature at which the two scales agree.

</details>

<a id="section-196-exercise-4"></a>
### Exercise 4 {#section-198-exercise-4}
A solution contains 15 g of salt dissolved in 250 g of water. Find the concentration as a fraction, as a percentage, and in grams per litre if the total volume is 260 mL.

<details>
<summary>Hint 1</summary>

**Hint.** Mass fraction uses the mass of the whole mixture.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep mass fraction and mass per volume distinct; convert millilitres to litres for the latter.

</details>

<details>
<summary>Solution</summary>

**Solution.** The mass fraction is $\\frac{15}{250 + 15} = \\frac{15}{265} = \\frac{3}{53} \\approx 0.0566$. The percentage is approximately $5.66\\%$.

For grams per litre: 15 g in 260 mL is $\\frac{15}{0.26} \\approx 57.7$ g/L.

</details>

<a id="section-221-exercise-5"></a>
### Exercise 5 {#section-223-exercise-5}
The kinetic energy of a moving object is $E = \\frac{1}{2}mv^{2}$. Find the energy of a 2 kg object moving at 6 m/s.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the square of the speed before the other multiplications.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Insert mass and speed into the complete supplied formula, retaining the factor one half.

</details>

<details>
<summary>Solution</summary>

**Solution.**

$$E = \\frac{1}{2} \\times 2 \\times 6^{2} = 1 \\times 36 = 36.$$

The kinetic energy is 36 joules.

</details>

<a id="section-248-exercise-6"></a>
### Exercise 6 {#section-250-exercise-6}
Explain why dividing both sides of $2A = (a + b)h$ by $a + b$ is valid only when $a + b \\neq 0$, and describe what $a + b = 0$ would mean for a trapezium.

<details>
<summary>Hint 1</summary>

**Hint.** Division is reversible only for a nonzero divisor.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the algebraic zero-sum case with the positive side lengths required by a genuine trapezium.

</details>

<details>
<summary>Solution</summary>

**Solution.** Division by zero is undefined in the real numbers. If $a + b = 0$, then $a = -b$. Since $a$ and $b$ are lengths of parallel sides of a trapezium, they must be positive. Therefore $a + b = 0$ is impossible for a genuine trapezium, and the division is always safe in this geometric context.

</details>

<a id="section-271-looking-back-and-forward"></a>

<a id="section-420-practice-extensions"></a>
### Exercise 7 — AS-06-E07 — Recovering a calibrated volume {#section-424-as-06-e07-recovering-a-calibrated-volume}

A synthetic calibration model is $M=24+(3/5)V$, where $M$ is total mass in grams and $V$ is volume in millilitres, with $0\\le V\\le150$. Recover the volume for $M=72$, state its units and check it in the original rule. Does this model supply a volume for $M=18$? Finally, replace the coefficient $3/5$ by zero and explain which mass readings determine a unique volume.

<details>
<summary>Hint 1</summary>

**Hint.** Undo the fixed mass contribution before dividing by the rate.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check the allowed volume interval after solving, then consider the zero-rate model without division.

</details>



<a id="section-441-as-06-e08-a-change-is-not-a-reading"></a>
### Exercise 8 — AS-06-E08 — A change is not a reading {#section-443-as-06-e08-a-change-is-not-a-reading}

Two Celsius readings are $10$ and $35$. Convert each reading to Fahrenheit and calculate the change on each scale. A learner says, “A change must also include the $32$, so the Fahrenheit rise is $(9/5)(35-10)+32$.” Identify the first mistaken assumption. Use another pair of Celsius readings of your choice to show why doubling a Celsius reading need not double its Fahrenheit reading.

<details>
<summary>Hint 1</summary>

**Hint.** Convert each temperature reading separately before taking their difference.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Subtract the two affine formulas and see what happens to the common offset; use a second pair to test doubling.

</details>



<a id="section-460-as-06-e09-choosing-a-target-mass-fraction"></a>
### Exercise 9 — AS-06-E09 — Choosing a target mass fraction {#section-462-as-06-e09-choosing-a-target-mass-fraction}

Under the supplied no-mass-loss mixture model $c=s/(w+s)$, use $180$ grams of water to obtain salt mass fraction $c=1/4$. Find $s$, verify the fraction and explain why multiplying $180$ by $1/4$ gives the wrong target. Could positive water mass give $c=1$ with finite salt mass? If the water mass were changed to zero, would a mass fraction of $1$ determine a unique positive salt mass? State whether these data alone determine grams of salt per litre.

<details>
<summary>Hint 1</summary>

**Hint.** The denominator contains the salt as well as the water.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply by the total mass and collect the terms involving salt; examine zero water separately and do not infer volume from mass alone.

</details>

<!-- EULER-AS-06-QUESTIONS-END -->

<!-- EULER-AS-06-SOLUTIONS-START -->

<a id="section-481-solutions-to-practice-extensions"></a>

<a id="section-536-a-further-practice-problem"></a>
<a id="section-536-exercise-10"></a>
### Exercise 10 {#section-538-exercise-10}
<a id="formulas-from-science-ex-10"></a>

A supplied constant-power model relates energy $E$ in joules, power $P$ in watts and elapsed time $t$ in seconds by $E=Pt$. A device uses constant power 20 W. Find the energy used in 90 seconds, then find how long it takes to use 900 J. Check both answers in the original model and state the assumption that permits the same power throughout.

<details>
<summary>Hint 1</summary>

**Hint.** Identify which quantity is unknown in each use of the same formula.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For time, divide energy by the nonzero power and keep seconds as the time unit.

</details>
<details>
<summary>Solution</summary>

**Solution.** For 90 seconds the model gives $E=20(90)=1800$ J. For 900 J, the equation is $900=20t$. Since 20 is nonzero, divide by it to obtain $t=900/20=45$ seconds. The checks are $1800=20(90)$ and $900=20(45)$, each in the stated units. Both calculations assume the supplied constant 20 W power throughout the relevant interval. If power changes with time, this one constant-product model is insufficient without further information.

</details>

<a id="section-560-summary"></a>

## Solutions {#section-483-solutions-to-practice-extensions}

<a id="section-483-as-06-e07-solution"></a>
### AS-06-E07 — solution {#section-485-as-06-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

Subtracting the fixed container contribution gives $72-24=(3/5)V$, so $48=(3/5)V$ and $V=48(5/3)=80$ millilitres. This is an allowed input. Substitution gives $24+(3/5)(80)=24+48=72$ grams.

For $M=18$, rearrangement gives $V=(18-24)(5/3)=-10$ millilitres, outside $0\\le V\\le150$. Equivalently, the model's smallest possible total mass is $24$ grams. It supplies no allowed volume for that reading.

With zero coefficient, the changed model is $M=24$ for every allowed volume. A reading of $24$ is compatible with every $V$ in the stated interval; any different reading is compatible with none. No mass reading determines a unique volume in that changed model. Dividing by zero would conceal these two cases.

</details>

<a id="section-498-as-06-e08-solution"></a>
### AS-06-E08 — solution {#section-500-as-06-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

The conversions are $F_1=(9/5)(10)+32=50$ and $F_2=(9/5)(35)+32=95$. The Celsius change is $35-10=25$ degrees; the Fahrenheit change is $95-50=45$ degrees, equal to $(9/5)(25)$.

The learner applies a reading-conversion formula to a difference. Subtracting the two reading equations cancels their identical offsets; adding another $32$ to the change is unjustified. The proposed rise would be $77$ rather than $45$ Fahrenheit degrees.

For instance, $10^\\circ\\text{C}$ converts to $50^\\circ\\text{F}$, while twice that Celsius reading, $20^\\circ\\text{C}$, converts to $68^\\circ\\text{F}$. Since $68\\ne2(50)$, this pair disproves the proposed doubling rule. The offset is why numerical readings and their changes need separate treatment.

</details>

<a id="section-513-as-06-e09-solution"></a>
### AS-06-E09 — solution {#section-515-as-06-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

The equation is $1/4=s/(180+s)$. Its denominator is positive for the allowed $s\\ge0$. Multiplication gives $180+s=4s$, hence $s=60$ grams. The total mass is $240$ grams, and $60/240=1/4$.

Multiplying $180$ by $1/4$ gives $45$ grams, but then the actual mixture fraction is $45/(180+45)=45/225=1/5$. That calculation treats the water mass as the total, omitting the added salt.

With $w>0$, $s/(w+s)<1$ for every finite $s\\ge0$, so fraction $1$ is impossible. With $w=0$ and $s>0$, the fraction equals $s/s=1$ for every positive salt mass, so it does not identify one mass. The empty mixture $s=w=0$ has no defined fraction.

Grams per litre additionally requires the final volume. Neither the mass fraction nor these masses supplies that volume. No volume-additivity or density assumption was given.

</details>

<!-- EULER-AS-06-SOLUTIONS-END -->



<a id="section-534-a-further-practice-problem"></a>
`;export{e as default};