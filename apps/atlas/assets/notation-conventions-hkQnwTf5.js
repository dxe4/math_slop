var e=`---
parent_id: book-mathematical-toolkit
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, formatting conventions, and policies on ambiguity and accessibility.

## Notation

### Numbers, sets, and arithmetic

- $\\mathbb{N}$: the natural numbers $\\{1, 2, 3, \\dots\\}$. When $0$ is included, the text says so explicitly.
- $\\mathbb{Z}$: the integers.
- $\\mathbb{Q}$: the rational numbers.
- $\\mathbb{R}$: the real numbers.
- $\\mathbb{C}$: the complex numbers.
- $a \\mid b$: $a$ divides $b$; there exists an integer $k$ with $b = ak$.
- $\\gcd(a,b)$: the greatest common divisor of $a$ and $b$.
- $a \\bmod b$: for nonzero integer $b$, the least nonnegative remainder when $a$ is divided by $\\lvert b\\rvert$, so $0 \\leq a \\bmod b < \\lvert b \\rvert$.
- $\\lfloor x \\rfloor$: the greatest integer less than or equal to $x$.
- $\\lceil x \\rceil$: the least integer greater than or equal to $x$.
- $\\lvert x \\rvert$: the absolute value of $x$.

### Algebra and functions

- $f: X \\to Y$: a function from domain $X$ to codomain $Y$.
- $f(x)$: the value of $f$ at $x$.
- $y = mx + b$: slope-intercept form of a line, with slope $m$ and $y$-intercept $b$.
- $(x + a)(x + b) = x^{2} + (a + b)x + ab$: expansion identity.

### Logic and proof

- $\\forall$: for all, universal quantifier.
- $\\exists$: there exists, existential quantifier.
- $\\Rightarrow$: implies.
- $\\Leftrightarrow$: if and only if, equivalence.
- $\\square$: end-of-proof marker (tombstone).

### Statistics and estimation

- $\\bar{x}$: sample mean.
- $s$: sample standard deviation.
- $n$: sample size or number of observations.
- $\\pm$: plus or minus; used to express uncertainty intervals.

### Computing and collaboration

- **Git**: a distributed version control system.
- **BibTeX / BibLaTeX**: bibliography formats for LaTeX documents.
- **MSC**: Mathematics Subject Classification, used in MathSciNet and zbMATH.

## Formatting conventions

### LaTeX source rules

- For this book's declared portable source workflow, use command forms such as \`\\leq\`, \`\\geq\`, \`\\in\`, and \`\\mathbb{R}\` instead of raw Unicode math symbols. Unicode-capable engines and workflows may adopt a different documented input policy.
- Brace multi-character subscripts and superscripts: \`x^{10}\`, \`x_{\\max}\`, \`\\sum_{i=1}^{n}\`.
- Use \`amsmath\` and \`amssymb\` packages as the standard symbol set.
- Do not use \`\\hline\` inside math arrays; use booktabs or standard table environments for text tables.

### Theorem--proof pairs

- State the result first, clearly separated from its proof.
- Begin proofs with a signal word: *Proof:*
- End proofs with $\\square$ or QED.

### Cross-references

- Hard-coded references break when material is reordered. Use \`\\label\` and \`\\ref\` in LaTeX, or equivalent stable identifiers in other formats.
- Cross-reference only existing chapter ids and titles.

## Ambiguity policy

Every definition should be:

- **Precise:** No ambiguity about what satisfies it.
- **Logically determinate:** For an object in the stated domain, the definition gives an unambiguous condition. It need not provide an effective decision algorithm.
- **Motivated:** The reader understands why this concept is worth isolating.

When a symbol is introduced, its type and domain are stated explicitly. The same symbol is not reused for a different type of object in the same argument without warning.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\\leq$, $\\to$, and $\\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};