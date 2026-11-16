var e=`---
id: visual-lab-exact-randomization
title: "Exact Randomization: All Six Assignments"
level: undergraduate
estimated_minutes: 35
license: CC BY-SA 4.0
---

# Exact Randomization: All Six Assignments

An exact randomization test begins with the experiment’s assignment rule. In this laboratory, four units have fixed observed outcomes $(1,2,4,8)$, exactly two units receive treatment, and every one of the $\\binom{4}{2}=6$ treatment pairs is equally likely. Because the assignment space is tiny, we can inspect every possibility rather than simulate a sample of them.

[Open the runnable exact randomization experiment](#/labs?lab=visual-lab-exact-randomization)

## How to use the laboratory

1. Keep **Separated outcomes** and choose assignment 6, which treats units 3 and 4.
2. Start with the **upper** tail. Locate the observed diamond and confirm that only one of six assignments has a statistic at least as large.
3. Switch to the **absolute two-sided** tail. Find the equally extreme negative contrast and explain why the count becomes two of six.
4. Move through all six observed assignments. The distribution stays fixed because only the observed label and tail threshold change.
5. Choose **All outcomes tied**. Inspect both tails and the complete table before interpreting $p=6/6$.

Every control is a native form control. With a keyboard, use Tab to move between controls, arrow keys to move within selects or radio buttons, and Space or Enter to choose. The table after the figure contains all values shown by the graphic.

## What is random and what is fixed?

Let $Z$ identify the two treated units and let

$$
T(Z)=\\overline{Y}_{\\mathrm{treated}}-\\overline{Y}_{\\mathrm{control}}.
$$

The assignment $Z$ is random under the stated design. The four outcomes are held fixed when we enumerate assignments. This calculation tests the **sharp null hypothesis** that treatment has no effect for any unit: each unit would have the same outcome under treatment and control. Under that null, all missing potential outcomes are supplied by the observed fixed outcome, so $T(Z)$ can be calculated for every allowed assignment.

For outcomes $(1,2,4,8)$, lexicographic treatment pairs give the six contrasts

$$
-4.5,\\;-2.5,\\;1.5,\\;-1.5,\\;2.5,\\;4.5.
$$

When units 3 and 4 are treated, the observed statistic is $4.5$. The inclusive upper-tail p-value is

$$
p_{\\mathrm{upper}}=\\frac{\\#\\{T(Z)\\ge 4.5\\}}{6}=\\frac{1}{6}=0.1667.
$$

For the prechosen absolute two-sided rule,

$$
p_{\\mathrm{two\\text{-}sided}}=\\frac{\\#\\{|T(Z)|\\ge 4.5\\}}{6}=\\frac{2}{6}=0.3333.
$$

The fraction deliberately keeps denominator 6 visible: it records how many assignments were inspected. The decimal is a second representation of the same exact count, not a Monte Carlo estimate.

## Why ties count

“At least as extreme” includes equality. With the fully tied outcome fixture $(3,3,3,3)$, every assignment has contrast zero. Whichever assignment is called observed, every other assignment ties it. Both displayed tail rules therefore give $6/6=1$.

This boundary case reveals the discrete resolution of the test. With only six equally likely assignments, attainable p-values occur in steps of $1/6$. Such a test can be conservative at a chosen level $\\alpha$: it may be impossible to reject even when a continuous approximation suggests a more finely graded answer. Ties make that discreteness especially visible; silently dropping them would make the p-value too small.

## What the conclusion requires

The comparison of $p$ with $\\alpha$ is design based. Its validity here rests on all of the following:

- exactly two units were assigned to treatment uniformly among the six pairs;
- the sharp null fixes every unit’s outcome across reassignments;
- one unit’s treatment does not change another unit’s outcome (no interference);
- the statistic and upper or absolute two-sided tail were chosen before inspecting the result; and
- all six allowed assignments, including ties, are counted.

The six rows are six possible assignments in one experiment. They are not six independent observations or six sampled datasets. If “treated” and “control” merely label observational groups formed by choice, access, or circumstance, this assignment distribution is not justified by exchangeability language alone. A causal interpretation would need a credible assignment mechanism or additional causal assumptions.

Even in a randomized experiment, the p-value is not the probability that the null hypothesis is true. It measures how often the chosen statistic is at least as extreme under the sharp null and the stated assignment rule. The calculation concerns these four units; extrapolation to a wider population needs a sampling or transport argument that this small design does not provide.

## Reasoning exercises

1. **Recover the first contrast.** For assignment 1, treatment goes to units 1 and 2. Compute both means and explain why the contrast is $-4.5$.
2. **Use complement symmetry.** Every treated pair has a complementary treated pair. Without recomputing all means, explain why their contrasts have opposite signs.
3. **Move the observed label.** Choose assignment 5, whose contrast is $2.5$. Count the upper tail and the absolute two-sided tail by hand. Explain every included tie.
4. **Audit a tail chosen late.** A researcher reports the smaller of the upper- and lower-tail p-values after looking at the sign. Explain why the displayed one-tail calibration no longer applies without adjusting the procedure.
5. **Challenge the design.** Suppose the two treated units volunteered. Identify the exact step of the enumeration argument that is no longer warranted. State what extra evidence would be needed for a causal claim.
6. **Explain conservatism.** At $\\alpha=0.05$, list the possible positive p-values in this six-assignment experiment. Why can no outcome configuration produce rejection with these unadjusted inclusive rules?

This guide and its synthetic fixtures are original Math Atlas material released under CC BY-SA 4.0.

`;export{e as default};