var e=`---
id: book-statistics-with-r
title: "Statistics with R: From Data to Inference"
level: undergraduate
license: CC BY-SA 4.0
---

# Statistics with R: From Data to Inference {#section-1-statistics-with-r-from-data-to-inference}

A data table does not arrive with its meaning attached. Someone decided what a row represents, which measurements to record, which units could enter the table, and which question the calculation should answer. Good statistical work makes those decisions visible before asking software for a result.

This L1–L2 book is a first course in statistics and R for readers comfortable with basic arithmetic, proportions, elementary algebra, tables, and coordinate graphs. It assumes no programming, probability, or statistics. The recurring path is

\\[
\\text{question}\\to\\text{units}\\to\\text{estimand}\\to\\text{mechanism}
\\to\\text{calculation}\\to\\text{uncertainty}\\to\\text{bounded conclusion}.
\\]

R is part of that reasoning. A script records the steps that produced an answer; assertions check claims about the data and calculation; tables and graphics expose structure; rerunning the script tests whether the recorded procedure is complete. Reproducibility alone does not make a target meaningful or an inference valid, so every computation remains tied to its units, provenance, assumptions, and limits.

<a id="section-12-the-route-through-the-book"></a>
## The route through the book {#section-14-the-route-through-the-book}

The opening chapters build the investigation itself: questions and estimands; the R console, scripts, help, and errors; vectors, types, dates, and missing values; project paths and data validation; distributions and honest graphics; table transformations and joins; then functions, iteration, and assertions.

The middle chapters introduce probability through named mechanisms. Sampling variation comes before randomization tests; randomization tests come before bootstrap intervals; confidence, tests, power, and practical importance are then considered as properties of repeated procedures rather than labels attached to a single output. The [Exact Randomization Lab](#/labs?lab=visual-lab-exact-randomization) is a companion to Chapter 9: it exposes the same four-unit, six-assignment fixture, inclusive tails, and all-tied boundary for direct exploration.

The later chapters compare proportions and means, develop simple and multiple linear models, introduce logistic regression, analyze categorical tables and one-way ANOVA, audit diagnostics and selection, and assemble rerunnable reports. The capstone asks for a complete analysis dossier from a literal raw source to a conclusion whose scope is no broader than the evidence.

The [Reader Guide](#/item/book-statistics-with-r?section=front:reader-guide) explains how to run the code and study the chapters. If any entry skill feels uncertain, begin with the [Prerequisite Diagnostic](#/item/book-statistics-with-r?section=front:prerequisite-diagnostic). Keep the [Notation and Conventions](#/item/book-statistics-with-r?section=front:notation-conventions) open while working.

<a id="section-22-what-the-examples-can-establish"></a>
## What the examples can establish {#section-24-what-the-examples-can-establish}

The retained small numerical fixtures are synthetic teaching data. They let you inspect a complete calculation, introduce a deliberate failure, and check a repair. They do not establish facts about real people, institutions, treatments, or populations. The main simple-line investigation and new model chapters also use three credited real datasets: Palmer penguins (CC0), UCI Banknote Authentication (CC BY 4.0), and UCI Iris (CC BY 4.0). Frozen CSV downloads are supplied for offline work; their observations are not claimed as original to this book.

The methods are deliberately bounded. The book does not teach specialist Bayesian computation, advanced generalized-linear-model theory, time series, survey estimation, missing-data methods, or causal identification from observational data. When one of those boundaries appears, the text explains why the current tools stop there.

Original prose, code, exercises, and synthetic fixtures are Math Atlas material released under CC BY-SA 4.0. External references support source-dependent claims. The three expressly credited datasets retain their own licenses; original prose and exercises do not copy external sources, and citations do not imply endorsement.

<a id="section-30-nineteen-chapter-route-and-offline-data"></a>
## Nineteen-chapter route and offline data {#section-32-nineteen-chapter-route-and-offline-data}

Chapters 1–13 retain their original order. [Multiple Regression](statistics-with-r/multiple-regression.md), [Logistic Regression](statistics-with-r/logistic-regression.md), and [Categorical Data, Chi-Square, and ANOVA](statistics-with-r/categorical-data-chi-square-anova.md) are Chapters 14–16. Diagnostics, reporting, and the capstone continue as Chapters 17–19. Their original R-14, R-15 and R-16 exercise, claim, fixture and project IDs remain unchanged: those semantic IDs do not depend on current chapter position.

Download [penguins.csv](/data/statistics-with-r/penguins.csv), [banknote-authentication.csv](/data/statistics-with-r/banknote-authentication.csv), and [iris-uci.csv](/data/statistics-with-r/iris-uci.csv) into a local data directory beside your work. The examples use base R and local relative paths, with no installation or network request during execution. The [source notes](#/item/book-statistics-with-r?section=back:references) give creators, source versions, licenses, schemas and transformations.
`;export{e as default};