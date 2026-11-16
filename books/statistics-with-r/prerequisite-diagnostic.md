
# Prerequisite Diagnostic and Repair

This is a self-check, not an entrance exam. Try each prompt before reading its repair. A correct answer includes the reasoning, because the book will ask you to audit results rather than recognize them by appearance.

The assumed mathematics is basic arithmetic, proportions, elementary algebra, tables, and coordinate graphs. No R, programming, probability, or statistics is assumed.

## 1. Percentage as a proportion

**Prompt.** What is 20% of 80? Explain what operation turns the percentage into the requested part.

**Answer and repair.** “Percent” means “per hundred,” so

\[
20\%=\frac{20}{100}=0.20.
\]

The requested part is the proportion times the whole:

\[
0.20\times 80=16.
\]

A quick check is useful: 10% of 80 is 8, so 20% should be twice 8. If you obtained 400, you probably divided 80 by 0.20, which answers “how many groups of 20% fit into 80?” If you obtained 1,600, you multiplied by 20 without converting percent to a fraction of one.

**Ready when:** you can translate $r\%$ of $q$ into $(r/100)q$, and can estimate whether the result has the right size.

## 2. Slope and its units

**Prompt.** A line relating study time $x$, measured in hours, to a predicted score $y$, measured in points, has equation

\[
y=52+3x.
\]

Interpret the slope 3. What does it not say?

**Answer and repair.** Increasing $x$ by one hour changes the line's predicted score by 3 points. The slope's units are points per hour:

\[
\frac{\text{change in predicted score}}{\text{change in study time}}
=\frac{3\text{ points}}{1\text{ hour}}.
\]

The intercept 52 is the predicted score at zero hours; it is not the slope. The equation alone does not show that forcing any learner to study one more hour causes a three-point gain. That causal reading would require a suitable assignment or identification argument, not only a fitted line. It also does not promise the linear relationship remains reasonable far outside the observed range.

If slope feels unstable, choose two inputs, say $x=2$ and $x=3$. Their predictions are 58 and 61, so a one-hour increase corresponds to three predicted points.

**Ready when:** you describe a slope as change in response per one unit of predictor, include units, and separate association or prediction from causation.

## 3. A row and a unit

**Prompt.** A table records two blood-pressure readings for each of five people. Each reading occupies one row, so the table has ten rows. For a question about differences among people, are there ten independent people represented? What does one row represent, and what is the unit?

**Answer and repair.** There are five people. One row represents a person-at-a-measurement-time; the same person appears twice. For a question about people, the person is the unit and the two rows are repeated observations on that unit. Ten rows do not create ten independently selected people.

The repair is to write both statements explicitly:

- **row:** one recorded blood-pressure measurement for one named person at one time;
- **unit for the question:** one person, with two connected measurements.

Different questions can use different units. A quality-control question about individual measurement events might treat the event as its descriptive unit. The table shape alone cannot decide. Later methods must preserve the connection between repeated rows rather than pretending they arose from unrelated people.

**Ready when:** you can say what a row represents, identify repeated units through an ID, and explain why row count need not equal independent-unit count.

## 4. Scope and population

**Prompt.** A campus has 2,000 enrolled students. A researcher asks the first 40 people leaving the gym at 6 p.m. how many minutes they exercised that day. Identify (a) the observed sample, (b) the desired population if the question concerns all enrolled students, and (c) the strongest immediate description the data support.

**Answer and repair.** The observed sample is the 40 people approached while leaving that gym at that time. The desired population is all 2,000 enrolled students. The immediate statistic can describe the recorded answers from those 40 respondents, subject to measurement accuracy and any nonresponse.

The method did not give every enrolled student a known chance of selection. Gym users at 6 p.m. may differ from other students in exercise behavior, and some selected people may decline to answer. Therefore the sample mean does not automatically estimate the all-student mean without bias. A larger convenience sample could calculate its own average more precisely while retaining the same scope problem.

Repair the statement by narrowing it to the observed group—“among these 40 recorded gym leavers”—or repair the design by selecting students through a documented probability mechanism from an appropriate student list. These repairs answer different questions; changing the sentence does not retroactively improve the design.

**Ready when:** you distinguish the rows observed from the population named in the question and ask how selection connects them.

## 5. Files and working directories

**Prompt.** You saved `first-check.R` in a folder named `statistics-practice`. A terminal reports:

```text
Fatal error: cannot open file 'first-check.R': No such file or directory
```

What should you check before changing the R code?

**Answer and repair.** The message concerns the location or name of the script, so changing the arithmetic inside it cannot help. Check:

1. that the file is actually saved, with the exact name `first-check.R` rather than a similar name;
2. that the terminal's current working directory is `statistics-practice`;
3. that the command uses the relative filename `first-check.R` from that directory.

On the tested Linux setup, `pwd` prints the terminal's current directory and `ls` lists its visible entries. After moving to the correct folder, run:

```text
Rscript --vanilla first-check.R
```

A **path** tells the system where a file is. A relative path is interpreted from the current working directory. This is why the same filename can work in one directory and fail in another. Avoid solving the exercise by embedding a machine-specific absolute path in the script: it will usually fail for another reader and conceal the intended project structure.

If the message instead says `Rscript: command not found`, the terminal cannot locate the Rscript program. That is an installation or command-path issue, distinct from a missing `.R` file.

**Ready when:** you can locate a saved script, distinguish its folder from its contents, and run it from that folder without editing the analysis.

## Deciding where to begin

If all five answers and explanations felt secure, begin with the opening chapter and use its exercises as your next check. If one or two were uncertain, read the relevant repair above, invent a similar example, and solve it before moving on. If several were unfamiliar, spend a little time on basic proportions, coordinate graphs, and file navigation, then return. Chapter 2 teaches the R console, scripts, help, and error reading from the beginning.

Keep these five questions nearby throughout the book:

- Does the number have the right scale?
- What does a one-unit change mean?
- What does one row represent, and which rows belong to the same unit?
- Which population or process does the conclusion name?
- Can another reader locate and rerun the script from the recorded path?

The first four protect the meaning of an analysis. The fifth protects its reproducibility. You need both.

Original prose and examples in this diagnostic are Math Atlas material released under CC BY-SA 4.0.
