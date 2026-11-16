var e=`---
parent_id: book-introduction-to-proof
matter_id: latex-and-typesetting
title: "LaTeX and Typesetting"
level: undergraduate
license: CC BY-SA 4.0
---

# LaTeX and Typesetting

A proof has a logical structure before it has a page layout. Typesetting should expose that structure: declare the result, separate its proof, label important equations and give references that survive changes in order. A successful compilation does not establish that an argument is correct. This appendix is a practical companion to [Reading and Writing Mathematics](../reading-writing-mathematics.md), rather than an additional mathematics chapter.

The examples below are LaTeX source, shown in code fences so that you can copy the commands without confusing them with rendered mathematics. They describe ordinary document preparation, not commands that this website will execute. No additional software is needed to read the appendix.

## A complete small document

Save the following as \`proof-notes.tex\` if you are working in an existing LaTeX environment. Its theorem and proof are deliberately elementary so that the mathematical argument can be checked separately from its formatting.

\`\`\`latex
\\documentclass{article}
\\usepackage{amsmath,amssymb}
\\usepackage{amsthm}

\\newtheorem{theorem}{Theorem}
\\newtheorem{lemma}[theorem]{Lemma}
\\theoremstyle{definition}
\\newtheorem{definition}[theorem]{Definition}

\\begin{document}
\\section{Parity}

\\begin{definition}
An integer $n$ is even if $n=2k$ for some $k\\in\\mathbb{Z}$.
\\end{definition}

\\begin{theorem}[Sum of two even integers]\\label{thm:even-sum}
The sum of two even integers is even.
\\end{theorem}

\\begin{proof}
Let $m,n$ be even integers. Choose integers $a,b$ such that
$m=2a$ and $n=2b$. Then
\\[
  m+n=2a+2b=2(a+b).
\\]
Since $a+b$ is an integer, the sum is even by definition.
\\end{proof}

Theorem~\\ref{thm:even-sum} supplies the parity step we need.
\\end{document}
\`\`\`

The document class establishes the overall document form. The body lies between the document environment's opening and closing commands. A section is declared as a section rather than imitated with a large bold line. This preserves a meaningful hierarchy when headings are numbered or their appearance changes. The LaTeX team's [logical-structure lesson](https://www.learnlatex.org/en/lesson-04) explains this distinction.

The theorem declarations share one counter: a lemma or definition continues the same sequence as a theorem. The definition style is selected before declaring the definition environment. The proof environment supplies its end symbol; placing text in it still leaves the author responsible for the reasoning. When these packages are used together with the ordinary article class, load \`amsthm\` after \`amsmath\`, as specified in the AMS [usage guide](https://ctan.math.illinois.edu/macros/latex/required/amscls/doc/amsthdoc.pdf).

If LaTeX is already available, the ordinary command \`pdflatex proof-notes.tex\` processes this kind of file. Editors may provide the equivalent action. References can require a further run after labels change. Read the diagnostic messages and follow the existing environment's instructions; this appendix neither installs tools nor promises that any particular computer is configured for compilation.

## Inline mathematics and displayed equations

Use inline mathematics for short expressions that belong inside a sentence. Put a substantial equation in a display when the reader needs to inspect it on its own. Both forms remain parts of sentences and should have appropriate punctuation. The official [mathematics lesson](https://www.learnlatex.org/en/lesson-10) distinguishes these modes and notes that web renderers accepting LaTeX-like input are not necessarily running LaTeX itself.

\`\`\`latex
For every integer $n$, the number $n(n+1)$ is even.
In particular,
\\[
  2+4+\\cdots+2n=n(n+1).
\\]
\`\`\`

In a \`.tex\` document, use LaTeX display delimiters or the appropriate equation environment. Dollar-pair display notation is common in Markdown sources, including mathematics websites, but copying it between formats can change the layout behaviour. Keep the source conventions of the document you are actually writing.

Braces group the material belonging to a command, superscript or subscript. They do not appear in the printed expression. Compare the following inputs:

\`\`\`latex
x^{10}          % one exponent containing two digits
x_{n+1}        % one subscript containing an expression
\\sqrt{x^{2}+1}
\\sqrt[3]{x^{2}+1}
\\frac{a+b}{c+d}
\\sum_{i=1}^{n} i^{2}
\`\`\`

Writing \`x^10\` does not express the intended two-digit exponent: the ungrouped superscript attaches to the next token. Similarly, the summation's entire lower condition belongs inside one subscript group. A correctly grouped fraction still needs its mathematical domain stated in the surrounding prose; braces cannot make a zero denominator legitimate.

For the quadratic formula, keep both the grouping and the conditions visible:

\`\`\`latex
For real coefficients with $a\\ne0$ and $b^{2}-4ac\\ge0$,
\\[
  x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}.
\\]
\`\`\`

The display supplies the real roots of the corresponding quadratic equation under those conditions. If you are discussing complex roots instead, state that domain change explicitly rather than relying on the typography to communicate it.

## Alignment, systems and punctuation

Use an alignment environment for a chain of related equations. The following is an algebraic identity, with the alignment marker placed before the equality sign:

\`\`\`latex
\\begin{align*}
(a+b)^{2} &= a^{2}+2ab+b^{2} \\\\
          &= (a-b)^{2}+4ab.
\\end{align*}
\`\`\`

The row terminator separates the displayed rows, and the starred environment leaves them unnumbered. The [amsmath user guide](https://www.latex-project.org/help/documentation/amsldoc.pdf) documents alignment, equation numbering, delimiters and text within mathematics. An alignment marker is structural; ordinary spaces are not a substitute for it.

For a supplied system, an aligned block can sit inside a left brace. The invisible right delimiter balances the visible left delimiter syntactically.

\`\`\`latex
\\[
\\left\\{
\\begin{aligned}
x+y+z  &= 6, \\\\
2x-y+3z&= 9, \\\\
x+2y-z &= 2.
\\end{aligned}
\\right.
\\]
\`\`\`

A piecewise rule uses a different arrangement: each value is paired with its condition. State a domain and make the cases exhaustive and consistent mathematically; the environment does not check those requirements.

\`\`\`latex
\\[
|x|=
\\begin{cases}
 x, & \\text{if }x\\ge0, \\\\
-x, & \\text{if }x<0.
\\end{cases}
\\]
\`\`\`

For delimiters around a tall expression, automatic sizing or explicit matching sizes can improve readability. Neither changes the underlying grouping. Do not use oversized delimiters simply to make a short expression look more important.

\`\`\`latex
\\left(\\sum_{i=1}^{n} a_i\\right)^{2}
\\qquad
\\bigl((a+b)+c\\bigr)
\`\`\`

## References and sources

A semantic label such as \`thm:even-sum\` identifies the result rather than its current printed number. Keep that label when moving the theorem. Put a theorem label immediately after the environment's opening command, including any optional theorem name. A nonbreaking space between “Theorem” and its reference keeps them together typographically. The AMS guide explains the association between a label and the relevant counter.

For a numbered equation, use an equation label and a reference rather than typing its number in the prose:

\`\`\`latex
\\begin{equation}\\label{eq:factorisation}
  n^{2}-1=(n-1)(n+1).
\\end{equation}
Equation~\\eqref{eq:factorisation} is an algebraic identity.
\`\`\`

Bibliographic citations have a different purpose from equation labels. They identify a source, and need enough information for a reader to locate the relevant result. LaTeX supports several bibliography workflows; do not mix commands from different ones without understanding their requirements. The team's [citations and references lesson](https://www.learnlatex.org/en/lesson-12) explains the distinction between reference databases and the tools that use them. A citation key is not evidence that the cited theorem has the hypotheses needed by your argument.

For a short set of proof notes, a manually written source list can be sufficient. Record the author, title, relevant section and a working source link. For larger documents, use the bibliography conventions already established by the project. Preserve attribution when adapting an example and distinguish a mathematical reference from permission to reproduce its prose.

## A worked correction

Suppose a draft contains the following fragment:

\`\`\`latex
$$\\frac{x^2+1}{x^2-1}=1+\\frac{2}{x^2-1}$$ for all x.
\`\`\`

There are two separate matters to repair. The identity requires real $x\\ne1,-1$, because the denominator vanishes at the excluded inputs. Its display and text should also follow the document's LaTeX conventions. One complete repair is:

\`\`\`latex
For every real $x\\ne\\pm1$,
\\[
  \\frac{x^{2}+1}{x^{2}-1}
  =1+\\frac{2}{x^{2}-1}.
\\]
\`\`\`

The algebra is justified by writing the numerator as $(x^2-1)+2$ and dividing both terms by the nonzero denominator. Changing display syntax alone would not repair the missing domain; adding the domain alone would not improve the presentation. This distinction is the typesetting version of the reading record in the main chapter.

As a second exercise in transcription, here is the supplied integral identity from the earlier guide. This is a typesetting example, not a new proof of its value:

\`\`\`latex
\\[
  \\int_{0}^{\\pi}\\sin^{2}(x)\\,dx=\\frac{\\pi}{2}.
\\]
\`\`\`

The thin space before the differential is a conventional visual separation. The mathematical justification belongs to calculus. Keep that distinction when using an advanced formula to practise notation.

## A small revision exercise with a complete model

Write a theorem-and-proof document for the claim that the square of an odd integer is odd, and add a later reference to the theorem. A complete model can be obtained from the first document by replacing its theorem statement and proof with the following block, keeping the preamble and document environment:

\`\`\`latex
\\begin{theorem}\\label{thm:odd-square}
The square of every odd integer is odd.
\\end{theorem}
\\begin{proof}
Let $n$ be an odd integer. There is an integer $k$ such that
$n=2k+1$. Consequently,
\\[
 n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1.
\\]
The expression $2k^{2}+2k$ is an integer, so $n^{2}$ is odd.
\\end{proof}
Theorem~\\ref{thm:odd-square} proves the required parity fact.
\`\`\`

A useful checking criterion is whether the document declares the theorem environment, states the integer domain, introduces its witness, exhibits an integer witness for the conclusion and references the same semantic label later. Every mathematical part is visible in the model. Use the criterion to read the submitted argument line by line. A compiler can process its syntax without establishing the theorem.

## Sources and summary

This appendix develops Euler's [LaTeX and Typesetting](../../mathematical-toolkit/latex-and-typesetting.md), which remains available with its original exercises and examples. Primary references are the [LaTeX Project documentation](https://www.latex-project.org/help/documentation/), the [amsmath user guide](https://www.latex-project.org/help/documentation/amsldoc.pdf), and the American Mathematical Society's [amsthm usage guide](https://ctan.math.illinois.edu/macros/latex/required/amscls/doc/amsthdoc.pdf). The linked Learn LaTeX lessons provide introductory examples maintained by its authors; the command demonstrations above are written for this appendix.

Use semantic structure, grouped arguments and stable references to make a proof easier to read. Keep domains and mathematical reasons in the prose, even when a display looks complete. A well-presented argument is easier to examine, but correctness still rests on its definitions, assumptions and justified steps.
`;export{e as default};