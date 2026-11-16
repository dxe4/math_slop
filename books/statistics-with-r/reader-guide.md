
# Reader Guide

You can begin this book without having used R or taken a statistics course. Basic arithmetic, proportions, elementary algebra, tables, and coordinate graphs are enough. The diagnostic following this guide checks those skills and explains repairs. Later chapters introduce probability when it becomes necessary.

The goal is larger than learning commands. By the end of the route, you should be able to state a question precisely, identify what each row represents, declare the population or process you want to understand, choose a calculation that matches the data-producing mechanism, quantify the right source of uncertainty, and write a conclusion with an honest boundary. You should also be able to rerun the analysis from a script and explain what every important line does.

## A productive way to read

Each investigation begins before the code. On paper, write four things:

1. the **unit**—the entity or event of interest—and whether one unit contributes more than one row;
2. the **variable**, including its measurement units and possible missing values;
3. the **estimand**, the exact quantity the question asks about;
4. the **mechanism** that selected units, assigned conditions, measured values, and created exclusions, including which observations, if any, a model treats as independent.

Then predict the rough result. If eight values are all between 2 and 14 minutes, a reported mean of 750 minutes should look wrong before any formal check. After running the code, compare the output with your prediction and read every warning or error. Finally, state what the result does and does not support.

Do not rush past adverse examples. A duplicated key, a missing row, an observational group label, or a skewed value is often where the statistical idea becomes visible. When an example fails, ask which part failed: the R expression, the data contract, the probability mechanism, or the interpretation.

## Console and script: two useful places

The **R console** evaluates an expression you enter and prints its result. It is useful for a quick question such as `20 / 100 * 80`. The prompt is commonly shown as `>`; type the expression after the prompt, without typing the `>` itself.

A **script** is a plain-text file containing R expressions. A script preserves the order of the analysis so it can be inspected and run again. Use a filename ending in `.R`, such as `first-check.R`. This small script uses only base R:

```r
# first-check.R
percent <- 20 / 100
whole <- 80
part <- percent * whole

stopifnot(abs(part - 16) <= 1e-10 + 1e-8 * abs(16))
part
```

The assignment arrow `<-` gives a value a name. Text after `#` is a comment. `stopifnot()` stops the script if its condition is false; silence from that line means the check passed. The final line asks R to print the value `16`.

To use the console, start R in the directory containing your work and enter expressions one at a time. To run the saved script from a terminal on the tested Linux setup, change to the directory containing the file and enter:

```text
Rscript --vanilla first-check.R
```

`Rscript` runs the file. `--vanilla` starts without loading or saving a personal workspace, which makes hidden state less likely. If the terminal says that the file cannot be opened, first check the current directory and the spelling of the filename. If it says that `Rscript` is not found, R is not available through that terminal's command path; resolve the local installation before continuing. This book's recorded computational checks use R 4.6.0 on Linux. That record does not establish behavior on untested systems.

The repository's maintainer check is a different interface. Learners run ordinary `.R` scripts with `Rscript` or enter commands in the R console. The command `node scripts/check-r-book.mjs` is for maintainers validating the book's Markdown sources; it is not required for the exercises.

## Reading code without guessing

Work from the inside outward. In `mean(c(2, 4, 6))`, `c()` first combines three numbers into a vector, then `mean()` calculates their arithmetic mean. Parentheses pass inputs to a function. Square brackets select positions or rows. R counts positions from 1.

Whenever a chapter introduces a command, read the prose explanation before adapting it. Small changes can alter the question. For example, `mean(x, na.rm = TRUE)` computes a mean after omitting explicit missing values; it does not show that omission is scientifically defensible. Likewise, grouping rows by a label does not show that the groups were randomly assigned.

All executable examples use the base R distribution without add-on packages. Earlier examples define synthetic fixtures locally. The real-data chapters use three frozen downloads: [penguins.csv](../../downloads/statistics-with-r/penguins.csv), [banknote-authentication.csv](../../downloads/statistics-with-r/banknote-authentication.csv), and [iris-uci.csv](../../downloads/statistics-with-r/iris-uci.csv). Put them in a local data directory beside the chapter, or run from the repository root. The local locators support both layouts and execution makes no network request. Each chapter and companion defines its required objects for a fresh session. If code works only because an object remains from yesterday's console, the procedure is incomplete.

## Practice, hints, and solutions

Each chapter has ten supported exercises. The original eight per legacy chapter retain their exact R IDs, statements and full companion answers, and each gains two questions. Every chapter question now has two staged hint disclosures and a full explained solution disclosure. Separate companions remain available with their original IDs. Try an exercise before opening its solution. A useful attempt contains more than an output:

- the unit, target, and mechanism when the problem is statistical;
- a hand calculation or rough magnitude check;
- the R expressions used, including explicit missing-value choices;
- one sentence interpreting the result in context;
- one sentence giving a boundary or plausible failure.

If you use a hint, write the next step yourself before reading further. When you use a solution, compare the reasoning and assumptions, not merely the printed number. A different method may be sound if it answers the same question under the same conditions.

The solution sections are reference material rather than numbered chapters. Most chapters link directly to their chapter-level solution section. Every chapter's solution section is also available from the book contents under the matching chapter ID; within that section, the matching exercise heading carries the same exercise ID. For example, the opening chapter's solutions appear at [Solutions: A Question, a Row, and an Estimand](solutions-question-row-estimand.md).

The book contains eight extended guided activities. Seven are marked with an `R-..-I01` investigation ID; Chapter 9's guided Monte Carlo activity retains its earlier descriptive heading. For each activity, make a prediction, state the controls, run the code, inspect the table or plot alternative, interpret the result, and examine a failure case. Cumulative projects ask you to connect several chapters. Their rubrics reward a defensible target, visible exclusions, correct computation, uncertainty, accessibility, and limitations. A decision to stop because the mechanism cannot support the proposed inference can be an excellent statistical conclusion.

## Tables, plots, and accessibility

A graph is one representation of values, not a source of extra evidence. Quantitative plots in this book have labeled axes and units, use marks besides color to distinguish groups, and are accompanied by a table and prose account. You can reason from the numeric alternative if a plot is unavailable or difficult to perceive.

When you make your own display, describe its structure in words: what each axis represents, the observed range, the main comparison, and any point that changes the reading. Never rely on color alone. Preserve the table that was plotted so another reader can check the visual claim exactly.

## A compact investigation ledger

Before presenting a result, complete this ledger:

| Question | What to record |
|---|---|
| Target | Population or process, variable, summary, conditions, and time |
| Unit and rows | What one unit is; what one row is; whether units repeat |
| Provenance | How the values were created or obtained; fixture version when synthetic |
| Mechanism | Sampling, assignment, measurement, missingness, and exclusions |
| Computation | Script, named inputs, explicit checks, and displayed outputs |
| Uncertainty | Which repeated mechanism varies; method and assumptions |
| Conclusion | Numerical result, practical meaning, and boundary |

If you cannot complete one row, name the missing information. An explicit gap is more useful than a polished sentence whose scope the data cannot support.

Original prose, code, exercises, and synthetic fixtures in this book are Math Atlas material released under CC BY-SA 4.0.

## Model chapters and stable practice IDs

This is a no-calculus L1–L2 route. The simple-line chapter first proves least-squares identities using a small hand example, then carries the main empirical investigation on more than one hundred recorded penguins. Chapter 14 extends to multiple regression, Chapter 15 introduces binary logistic probabilities and thresholds, and Chapter 16 compares categorical counts and group means. Normal-model and large-sample reference results are stated with their assumptions rather than presented as elementary proofs.

Diagnostics, reports and the capstone are now Chapters 17–19. Their R-14, R-15 and R-16 labels remain stable exercise and project names. New chapters use R-MULTI, R-LOGIT and R-CAT labels to avoid collisions. Use those names when referring to earlier work; chapter position is navigation, while the semantic label identifies the question.
