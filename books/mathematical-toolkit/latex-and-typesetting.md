
# LaTeX and Typesetting

Mathematical notation carries meaning through structure: the size and position of symbols, the grouping of subexpressions, and the visual separation of logical units. Handwritten mathematics and informal typed notes often obscure this structure. LaTeX is a typesetting system designed to encode mathematical structure explicitly, producing documents where the visual hierarchy matches the logical hierarchy.

This chapter is a practical introduction. It assumes no prior knowledge of LaTeX and focuses on the subset needed for papers, problem sets, and books. The goal is not encyclopedic coverage but reliable fluency: the ability to typeset any argument you can write clearly in prose.

## Why structure matters

Consider the expression $x^2/2k$. Does it mean $\frac{x^{2}}{2k}$ or $\frac{x^{2}}{2} \cdot k$ or $x^{2/(2k)}$? In handwritten work, context and spacing resolve the ambiguity. In a typed document, the ambiguity remains unless the structure is encoded explicitly.

LaTeX forces the writer to declare structure. The fraction $\frac{x^{2}}{2k}$ is written `\frac{x^{2}}{2k}`, making the numerator and denominator explicit. The writer cannot accidentally produce ambiguous output without also writing ambiguous code.

## A minimal document

Every LaTeX document has a preamble and a body:

```latex
\documentclass{article}
\usepackage{amsmath, amssymb}
\begin{document}
Hello, mathematics.
\end{document}
```

The `\documentclass` line sets the overall format. The `\usepackage` lines load extensions. The `amsmath` package provides the environments and commands used in this chapter; `amssymb` provides additional symbols such as $\mathbb{R}$ and $\subseteq$.

## Inline and display mathematics

LaTeX offers two modes for mathematics.

**Inline math** is enclosed in single dollar signs: `$...$`. It flows with the text and is appropriate for short expressions.

> The derivative of $x^{3}$ is $3x^{2}$.

**Display math** in LaTeX should use `\[...\]` for an unnumbered display or an `amsmath` environment such as `equation`, `align`, or `gather` when numbering or alignment is needed. The plain-TeX `$$...$$` delimiter is common in Markdown renderers but is not the recommended LaTeX2e interface.

$$
\int_{0}^{1} x^{2} \, dx = \frac{1}{3}.
$$

**Common error:** Using display math for every equation makes the document hard to read. Using inline math for complex expressions makes them hard to parse. Choose the mode that serves the reader.

## Fractions, roots, and exponents

### Fractions

The command `\frac{numerator}{denominator}` produces a stacked fraction:

$$
\frac{a + b}{c + d}.
$$

For simple fractions in inline text, use a slash to avoid excessive vertical space: $a/b$ rather than $\frac{a}{b}$.

### Roots

The command `\sqrt{expression}` produces a square root. An optional argument gives other roots:

$$
\sqrt{x^{2} + 1}, \qquad \sqrt[3]{x^{2} + 1}.
$$

### Exponents and subscripts

Use `^` for superscripts and `_` for subscripts. Braces are required for multi-character scripts:

| Wrong | Right |
|---|---|
| `$x^10$` | `$x^{10}$` |
| `$x_\max$` | `$x_{\max}$` |
| `$\sum_i=1^n$` | `$\sum_{i=1}^{n}$` |

**Common error:** Forgetting braces around multi-character subscripts or superscripts. `$x^10$` renders as $x^{1}0$, not $x^{10}$.

## Delimiters and sizing

Parentheses, brackets, and braces often need to resize to match their contents. The commands `\left` and `\right` do this automatically:

$$
\left( \sum_{i=1}^{n} a_{i} \right)^{2}.
$$

Without `\left` and `\right`, the parentheses remain small and look unbalanced.

For manual sizing, use `\bigl`, `\Bigl`, `\biggl`, `\Biggl` and their right counterparts. These are preferable when automatic sizing produces delimiters that are too large.

## Common symbols

The following table lists symbols used throughout this book:

| Symbol | LaTeX | Symbol | LaTeX |
|---|---|---|---|
| $\leq$ | `\leq` | $\geq$ | `\geq` |
| $\neq$ | `\neq` | $\approx$ | `\approx` |
| $\in$ | `\in` | $\notin$ | `\notin` |
| $\subseteq$ | `\subseteq` | $\cup$ | `\cup` |
| $\cap$ | `\cap` | $\emptyset$ | `\emptyset` |
| $\infty$ | `\infty` | $\partial$ | `\partial` |
| $\nabla$ | `\nabla` | $\forall$ | `\forall` |
| $\exists$ | `\exists` | $\Rightarrow$ | `\Rightarrow` |
| $\Leftrightarrow$ | `\Leftrightarrow` | $\to$ | `\to` |
| $\mathbb{R}$ | `\mathbb{R}` | $\mathbb{N}$ | `\mathbb{N}` |
| $\mathbb{Z}$ | `\mathbb{Z}` | $\mathbb{Q}$ | `\mathbb{Q}` |

**Portable workflow rule for this book:** Use command forms rather than raw Unicode math symbols in LaTeX source. This keeps spacing, font selection, and engine choice predictable in the book's declared build. Unicode-capable engines and projects may instead adopt a different documented input policy.

## Theorem environments

LaTeX can number and format theorems, lemmas, definitions, and proofs automatically:

```latex
\usepackage{amsthm}
\theoremstyle{definition}
\newtheorem{theorem}{Theorem}
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{definition}[theorem]{Definition}

\begin{theorem}
The sum of two even integers is even.
\end{theorem}

\begin{proof}
Let $m = 2a$ and $n = 2b$. Then $m + n = 2(a + b)$.
\end{proof}
```

The `[theorem]` argument shares the numbering sequence, so Lemma 3 follows Theorem 2.

## Labels and cross-references

Hard-coded references break when material is reordered. Use `\label` and `\ref` instead:

```latex
\begin{theorem}\label{thm:even-sum}
The sum of two even integers is even.
\end{theorem}

By Theorem~\ref{thm:even-sum}, ...
```

The tilde `~` produces a non-breaking space, preventing a line break between "Theorem" and the number.

## Displayed equation environments

For multi-line equations, use `align` from `amsmath`:

```latex
\begin{align}
(a + b)^{2} &= a^{2} + 2ab + b^{2} \\
&= (a - b)^{2} + 4ab.
\end{align}
```

The `&` character marks the alignment point (usually the relation symbol). The `\\` ends a line. Numbered lines get equation numbers; unnumbered variants use `align*`.

**Common error:** Using `\\` to end lines outside an alignment environment, or leaving a blank line before a display environment, which starts a new paragraph and adds unwanted vertical space.

## Practice exercises

### Exercise 1
Typeset the following expression correctly in LaTeX: the definite integral from $0$ to $\pi$ of $\sin^{2}(x)$ with respect to $x$ equals $\pi/2$.

### Exercise 2
Write LaTeX code for the quadratic formula: $x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}$. Ensure all multi-character superscripts and subscripts are braced.

### Exercise 3
Explain why `$\sum_i=1^n i^2$` renders incorrectly, and write the correct LaTeX.

### Exercise 4
Typeset the following system of equations with proper alignment:

$$
\begin{cases}
x + y + z = 6, \\
2x - y + 3z = 9, \\
x + 2y - z = 2.
\end{cases}
$$

### Exercise 5
Write a minimal LaTeX document containing a theorem, a proof, and a cross-reference to the theorem from later in the document.

### Exercise 6
Identify the errors in the following LaTeX fragment and correct them: `$$\frac{x^2+1}{x^2-1} = 1 + \frac{2}{x^2-1}$$ for all $x \neq \pm 1$.`

## Solutions

**Solution 1.**

```latex
\[
\int_{0}^{\pi} \sin^{2}(x) \, dx = \frac{\pi}{2}.
\]
```

The `\,` before $dx$ produces a thin space, standard for differential notation.

**Solution 2.**

```latex
\[
x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}.
\]
```

All superscripts are braced: `b^{2}`, `4ac`, `2a`.

**Solution 3.** The code `$\sum_i=1^n i^2$` renders as $\sum_{i}=1^{n}i^{2}$ because the subscript and superscript attach only to the immediately following token. The correct code is:

```latex
\[
\sum_{i=1}^{n} i^{2}.
\]
```

**Solution 4.**

```latex
\usepackage{amsmath}
...
\begin{cases}
x + y + z = 6, \\
2x - y + 3z = 9, \\
x + 2y - z = 2.
\end{cases}
```

The `cases` environment from `amsmath` provides the left brace and alignment.

**Solution 5.**

```latex
\documentclass{article}
\usepackage{amsmath, amsthm}
\theoremstyle{definition}
\newtheorem{theorem}{Theorem}
\begin{document}

\begin{theorem}\label{thm:pythagoras}
For a right triangle with positive legs $a$ and $b$ and hypotenuse $c$,
$a^{2} + b^{2} = c^{2}$.
\end{theorem}

\begin{proof}
Construct a square of side $a + b$ and put one copy of the triangle
in each corner, with its legs along the square sides and the four
hypotenuses enclosing the central region. The central region has four
sides of length $c$; each angle is $180$ degrees minus the two acute
angles of the triangle, hence $90$ degrees. It is therefore a square.
Comparing areas gives $(a+b)^{2}=4(ab/2)+c^{2}$, so
$a^{2}+2ab+b^{2}=2ab+c^{2}$ and $a^{2}+b^{2}=c^{2}$.
\end{proof}

As we saw in Theorem~\ref{thm:pythagoras}, ...

\end{document}
```

**Solution 6.** The fragment uses the plain-TeX `$$...$$` delimiter instead of the recommended LaTeX2e display interface and places prose immediately after the display. Corrected:

```latex
\[
\frac{x^{2} + 1}{x^{2} - 1} = 1 + \frac{2}{x^{2} - 1}
\]
for all $x \neq \pm 1$.
```

Alternatively, keep it inline: $\frac{x^{2} + 1}{x^{2} - 1} = 1 + \frac{2}{x^{2} - 1}$ for all $x \neq \pm 1$.

## Looking backward and forward

This chapter gave the practical tools to implement the writing discipline from *Mathematical Writing*. LaTeX enforces structure: every fraction has a numerator and denominator, every theorem has a statement and proof, every reference has a label. In the next chapter, *Literature Search*, we turn from producing documents to finding and evaluating the documents others have produced.
