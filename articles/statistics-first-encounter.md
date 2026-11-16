
# Statistics Before Formulas: Variation, Comparison, and Honest Questions

**Before reading.** Read [Ratio and Proportion](../books/number-and-arithmetic/ratio-proportion.md) and [Percentages](../books/number-and-arithmetic/percentages.md). These are preparation for the ideas used below.

Statistics begins when a sensible question meets data that vary. If every object were identical, one measurement would settle everything. Real heights differ, buses arrive at different times, and even the same person’s pulse changes from minute to minute. Statistics gives us language for describing that variation and disciplined ways to learn from an incomplete sample.

This first encounter assumes arithmetic, fractions, and percentages. It does not assume algebra or calculus. Its goal is not to make uncertainty disappear. The goal is to say what the data show, what the study design permits, and what remains uncertain.

## 1. Ask a question a dataset can answer

“Are school lunches good?” hides several possible questions. We might ask about taste ratings, nutrition, cost, waste, or differences among schools. A useful statistical question names:

- the **units** being studied, such as lunches or students;
- a **variable**, such as grams discarded or a rating from 1 to 5;
- a target group and time period;
- the comparison or quantity of interest.

For example: “Among lunches served at this school during October, what fraction were more than one-quarter uneaten?” This question does not yet say how to select lunches or measure waste, but it exposes those decisions.

A **population** is the collection we want to understand. A **sample** is the collection actually observed. If we inspect only lunches from the first table beside the serving line, the sample may not represent the population. More measurements do not automatically repair a biased selection rule.

## 2. A small dataset in several representations

Suppose ten students record minutes spent waiting for a bus:

$$2, 3, 3, 4, 4, 5, 6, 7, 7, 19$$

The **mean** is the total divided by the count:

$(2+3+3+4+4+5+6+7+7+19)/10 = 60/10 = 6$ minutes.

The **median** is the middle after ordering. With ten observations, average the fifth and sixth: $(4+5)/2=4.5$ minutes. The mean is larger because the 19-minute wait pulls it upward. Neither answer is dishonest; they answer different questions. The mean shares the total equally among all observations. The median marks a point with at least half the data on either side.

The **range** is $19-2=17$ minutes. A more resistant spread summary is the interquartile range, the width of the middle half. Here the lower five values have median 3 and the upper five have median 7, so $IQR=7-3=4$ minutes. Exact quartile conventions can differ for small samples; name the convention when the distinction matters.

A text-only dot plot is an equivalent visual summary:

```text
minutes  2  3  4  5  6  7   8–18  19
count    1  2  2  1  1  2     0    1
```

The table makes the isolated long wait visible without relying on color or shape. A graph should always preserve labels, units, counts, and an accessible table.

## 3. Variation is information, not clutter

Imagine another route with waits

$$5, 5, 5, 5, 5, 6, 6, 6, 6, 6$$

Its mean is 5.5 minutes, close to the first route’s mean of 6, but its behavior is much more predictable. Reporting only one center hides an operational difference. A useful summary usually includes sample size, center, spread, units, unusual values, and the shape or frequency table.

Do not delete the value 19 merely because it is inconvenient. First ask whether it is a recording error, a genuine rare delay, or evidence of a different process. Correct a demonstrated error while keeping an audit trail. If it is real, report analyses with and without it only when both answer meaningful questions.

## 4. From samples to uncertainty

Suppose 18 of 30 randomly selected lunches were rated “good.” The **sample proportion** is $18/30=0.60$, but it is unlikely to equal the population proportion exactly. If we repeatedly drew random samples of 30, their proportions would vary.

We can see this with slips of paper: put 60 blue and 40 white slips in a bag, mix, draw 30 with replacement, and record the blue fraction. Repeat. A computer can repeat faster, but the physical experiment reveals the mechanism. A results table might be:

```text
repeat             1     2     3     4     5
blue out of 30    17    21    16    20    18
sample fraction  .57   .70   .53   .67   .60
```

The changing answers are **sampling variability**. A large random sample generally varies less than a small random sample, but random sampling does not protect against misleading questions, nonresponse, inaccurate measurements, or a population that changes after collection.

## 5. Comparison needs a denominator

“Treatment A produced twice as many recoveries” is incomplete. If A treated 200 people and B treated 50, raw counts cannot compare recovery chances. Use a common denominator:

```text
             recovered   not recovered   total   recovery rate
treatment A      120           80          200        60%
treatment B       35           15           50        70%
```

B has fewer recoveries but a larger observed recovery rate. This does not yet prove B causes better outcomes. Patients may have differed before treatment. A randomized experiment uses chance to assign treatments so that, apart from random imbalance, pre-existing differences are not systematically tied to the treatment.

An **observational study** observes choices or exposures without assigning them. It can estimate associations and generate important evidence, but a difference may reflect confounding. Good observational analysis measures plausible confounders, checks sensitivity, and states the remaining identification assumptions.

## 6. Three claims that must not be confused

1. **Description:** “In these 30 lunches, 60% were rated good.” This concerns observed data.
2. **Generalization:** “About 60% of this school’s October lunches would be rated good.” This requires a credible sampling process and uncertainty statement.
3. **Causation:** “Changing the menu would increase good ratings.” This requires a design or assumptions supporting an intervention claim.

A polished chart does not promote a descriptive claim into a causal one.

## 7. Worked comparison and a tempting error

**Worked example.**

Two clubs ask members whether a new meeting time works:

```text
club             yes   responses   members
Astronomy         24       30         60
Robotics          18       20         20
```

Among respondents, the rates are $24/30=80\%$ and $18/20=90\%$. It is tempting to conclude that Robotics members are more supportive. But response rates are $30/60=50\%$ and $20/20=100\%$. If dissatisfied Astronomy members were less likely to answer, the 80% may overstate support. The data establish only the response-conditional rates. The missing responses are not known to resemble the observed ones.

A transparent report gives both tables, explains the missingness, and perhaps gives bounds. If all 30 nonresponding Astronomy members said no, support among all members would be $24/60=40\%$; if all said yes, it would be $54/60=90\%$. That wide interval is honest information about what the design failed to learn.

## Practice with worked answers

### 1. Choose summaries

<a id="deep-dive-statistics-first-encounter-ex-1"></a>

**Exercise 1.**

A repair shop’s completion times are $1, 2, 2, 2, 3, 3, 4, 20$ days. Compute the mean and median. Which better describes a typical routine job?


<details>
<summary>Hint 1</summary>

The eight completion times are already ordered, so locate the two middle observations.
</details>
<details>
<summary>Hint 2</summary>

Add all eight times for the mean; average positions four and five for the median, then compare sensitivity to twenty.
</details>
<details>
<summary>Solution</summary>

The total is 37, so the mean is $37/8=4.625$ days. The median is the average of the fourth and fifth values, $(2+3)/2=2.5$ days. The mean describes equal sharing of total waiting time and is important for capacity; the median better describes a typical routine observation because the 20-day case strongly affects the mean. Report both and investigate the long case.

</details>

### 2. Identify the population

<a id="deep-dive-statistics-first-encounter-ex-2"></a>

**Exercise 2.**

A library surveys people leaving at 2 p.m. on Tuesday about weekend opening hours. Name the sample, a plausible target population, and one selection concern.


<details>
<summary>Hint 1</summary>

Name the people who had an actual chance to appear in the Tuesday afternoon survey.
</details>
<details>
<summary>Hint 2</summary>

Contrast that selected group with everyone whose weekend-opening preference the library might want to infer.
</details>
<details>
<summary>Solution</summary>

The sample is Tuesday-afternoon visitors who agree to answer. A plausible population is all current or potential library users. Workers, weekend-only visitors, and people who stopped visiting because the hours are inconvenient may be underrepresented.

</details>

### 3. Separate claims

Students who voluntarily joined a tutoring program later had higher test scores than those who did not. Is this description, generalization, or causation?

**Answer.** The observed score difference is descriptive. Generalizing requires a sampling argument. Claiming tutoring caused the difference is not justified without accounting for self-selection and other confounders; motivation or prior attainment may affect both participation and score.

## Where to go next

Repair fractions and percentages if denominators still feel slippery. Continue to **descriptive statistics** for richer summaries, **sampling and study design** for representative evidence, and **statistical inference** for interval and test procedures. Move sideways to an interactive resampling table or a programming simulation. Later routes include regression, experimental design, Bayesian inference, causal inference, time series, survival analysis, and spatial statistics. This lesson is an orientation, not a complete statistics course: it deliberately omits probability distributions, formal estimators, proofs, and computation.
