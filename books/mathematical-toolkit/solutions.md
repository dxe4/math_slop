
# Exercise and Project Solutions

These solutions show decisive reasoning for every exercise in the ten chapters. They are organized by chapter and preserve the notation and conventions used throughout the book.

---

## Chapter 1: Read mathematics actively

1. **Negate the statement: "For every real $x$, there is an integer $n$ with $n > x$."**

   The negation is: "There exists a real $x$ such that every integer $n$ satisfies $n \leq x$." Both quantifiers change type, and the inequality is negated. The original statement is true (the integers are unbounded above), so its negation is false; but the logical form of the negation is what the exercise tests.

2. **A rectangle has measured sides $12.0 \pm 0.1$ cm and $5.0 \pm 0.1$ cm. Give a defensible interval for its area.**

   The true side lengths lie in $[11.9, 12.1]$ and $[4.9, 5.1]$. Since all endpoints are positive, the area lies in:
   $$
   [11.9 \cdot 4.9,\; 12.1 \cdot 5.1] = [58.31,\; 61.71] \text{ cm}^{2}.
   $$
   This is an interval bound from the stated measurement uncertainties, not a probability interval.

3. **Prove directly that the sum of two even integers is even, naming the definition you use.**

   Write the integers as $m = 2a$ and $n = 2b$ with $a, b \in \mathbb{Z}$. Their sum is:
   $$
   m + n = 2a + 2b = 2(a + b),
   $$
   and $a + b$ is an integer because $\mathbb{Z}$ is closed under addition. By the definition of evenness, the sum is even.

4. **Prove by contrapositive: if $n^{2}$ is even for an integer $n$, then $n$ is even.**

   The contrapositive says that if $n$ is odd, then $n^{2}$ is odd. Write $n = 2k + 1$ for some integer $k$; then:
   $$
   n^{2} = (2k + 1)^{2} = 4k^{2} + 4k + 1 = 2(2k^{2} + 2k) + 1,
   $$
   which is odd. Therefore the original implication holds.

5. **Show that repeatedly replacing a positive integer $m > 1$ by $\lfloor m/2 \rfloor$ must terminate at $1$. Identify a monovariant.**

   The current positive integer is a strictly decreasing monovariant whenever it exceeds $1$, because $1 \leq \lfloor m/2 \rfloor < m$ for all $m > 1$. A strictly decreasing sequence of positive integers cannot continue forever, so it reaches $1$.

6. **For large positive $x$, explain why $\frac{1}{\sqrt{x^{2} + 1} + x}$ is a more reliable floating-point form of $\sqrt{x^{2} + 1} - x$.**

   The direct form subtracts two nearly equal numbers when $x$ is large, which destroys relative accuracy through catastrophic cancellation. Multiplying by the conjugate gives the exactly equal second form, which uses addition in the denominator and avoids that cancellation.

7. **A model predicts $y = ax + b$. List one observation pattern that would make $a$ and $b$ non-identifiable.**

   If every observed input has the same value $x = c$, then the data determine only the combination $ac + b$. Many pairs $(a, b)$ give the same predictions, so the parameters are not separately identifiable.

8. **A program verifies an identity for every integer from $1$ through one million. What has it proved, and what has it not proved?**

   It proves the identity for the tested integers, assuming the implementation and arithmetic are correct. It does not prove an unrestricted statement for all integers; that needs a mathematical argument or a finite exhaustive domain.

---

## Chapter 2: Mathematical Writing

1. **Rewrite the following argument to honor the reader contract: "Since $A$ is invertible, $\det(A) \neq 0$, so the system $Ax = b$ has a unique solution."**

   A corrected version:

   > Let $A$ be an $n \times n$ matrix with entries in a field $\mathbb{F}$, and let $b \in \mathbb{F}^{n}$. If $A$ is invertible, then $\det(A) \neq 0$, and the linear system $Ax = b$ has the unique solution $x = A^{-1}b$.

   *Proof:* Since $A$ is invertible, there exists $A^{-1}$ such that $A^{-1}A = I$. Then $Ax = b$ implies $x = A^{-1}b$. Uniqueness follows because if $x_{1}$ and $x_{2}$ are solutions, then $A(x_{1} - x_{2}) = 0$, so $x_{1} - x_{2} = A^{-1}0 = 0$. $\square$

2. **Write a precise definition of what it means for a sequence $(a_{n})$ to be bounded above. Then give one example and one nonexample.**

   Definition: A sequence $(a_{n})_{n \in \mathbb{N}}$ of real numbers is **bounded above** if there exists $M \in \mathbb{R}$ such that $a_{n} \leq M$ for all $n \in \mathbb{N}$.

   - Example: $a_{n} = 1 - \frac{1}{n}$ is bounded above by $M = 1$ (and also by $M = 2$).
   - Nonexample: $a_{n} = n$ is not bounded above. For any proposed $M$, choose $n = \lceil M \rceil + 1$; then $a_{n} > M$.

3. **State the contrapositive of: "If a function $f : \mathbb{R} \to \mathbb{R}$ is differentiable at $a$ and $a$ is a local maximum, then $f'(a) = 0$." Identify every hypothesis explicitly.**

   Work in the domain where $f$ is differentiable at $a$, so that $f'(a)$ is defined. The contrapositive is: "If $f$ is differentiable at $a$ and $f'(a)\neq0$, then $a$ is not a local maximum of $f$." This avoids attaching a numerical condition to an undefined derivative.

   The original hypotheses are:
   - $f : \mathbb{R} \to \mathbb{R}$;
   - $f$ is differentiable at $a$;
   - $a$ is a local maximum of $f$.

   The conclusion is $f'(a) = 0$.

4. **A student writes: "$\sqrt{x^{2}} = x$ for all real $x$." Diagnose the error, then write a corrected statement with a short proof.**

   The error is that $\sqrt{x^{2}} = \lvert x \rvert$, not $x$, when $x < 0$. Corrected statement:

   > For every real $x$, $\sqrt{x^{2}} = \lvert x \rvert$.

   *Proof:* If $x \geq 0$, then $\sqrt{x^{2}} = x = \lvert x \rvert$. If $x < 0$, then $x^{2} = (-x)^{2}$ with $-x > 0$, so $\sqrt{x^{2}} = -x = \lvert x \rvert$. In both cases, $\sqrt{x^{2}} = \lvert x \rvert$. $\square$

5. **Rewrite the following proof fragment to remove the backward discovery structure and present it linearly: "We need $n^{2}$ odd. If $n$ is odd, say $n = 2k + 1$, then $n^{2} = 4k^{2} + 4k + 1$, which is odd. So we should assume $n$ is odd. Wait, we wanted the contrapositive."**

   Restructured proof:

   > *Proof:* We prove the contrapositive. Suppose $n$ is odd. Then $n = 2k + 1$ for some integer $k$. Squaring gives:
   > $$
   > n^{2} = (2k + 1)^{2} = 4k^{2} + 4k + 1 = 2(2k^{2} + 2k) + 1,
   > $$
   > which is odd. Therefore, if $n^{2}$ is even, $n$ must be even. $\square$

6. **Explain why the sentence "The function is continuous because it is a polynomial" is incomplete as written, and complete it properly.**

   The sentence omits the theorem being invoked: every polynomial function $p : \mathbb{R} \to \mathbb{R}$ is continuous on $\mathbb{R}$. A complete version:

   > The function $f(x) = 3x^{2} - 2x + 5$ is continuous on $\mathbb{R}$ because it is a polynomial, and every polynomial is continuous on $\mathbb{R}$.

---

## Chapter 3: LaTeX and Typesetting

1. **Typeset the following expression correctly in LaTeX: the definite integral from $0$ to $\pi$ of $\sin^{2}(x)$ with respect to $x$ equals $\pi/2$.**

   ```latex
   $$
   \int_{0}^{\pi} \sin^{2}(x) \, dx = \frac{\pi}{2}.
   $$
   ```

   The `\,` before $dx$ produces a thin space, standard for differential notation.

2. **Write LaTeX code for the quadratic formula: $x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}$. Ensure all multi-character superscripts and subscripts are braced.**

   ```latex
   $$
   x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}.
   $$
   ```

   All superscripts are braced: `b^{2}`, `4ac`, `2a`.

3. **Explain why `\sum_i=1^n i^2` renders incorrectly, and write the correct LaTeX.**

   The code `$\sum_i=1^n i^2$` renders as $\sum_{i}=1^{n}i^{2}$ because the subscript and superscript attach only to the immediately following token. The correct code is:

   ```latex
   $$
   \sum_{i=1}^{n} i^{2}.
   $$
   ```

4. **Typeset the following system of equations with proper alignment:**

   $$
   \begin{cases}
   x + y + z = 6, \\
   2x - y + 3z = 9, \\
   x + 2y - z = 2.
   \end{cases}
   $$

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

5. **Write a minimal LaTeX document containing a theorem, a proof, and a cross-reference to the theorem from later in the document.**

   ```latex
   \documentclass{article}
   \usepackage{amsmath, amsthm}
   \theoremstyle{definition}
   \newtheorem{theorem}{Theorem}
   \begin{document}

   \begin{theorem}\label{thm:pythagoras}
   For a right triangle with legs $a$ and $b$ and hypotenuse $c$,
   $a^{2} + b^{2} = c^{2}$.
   \end{theorem}

   \begin{proof}
   Construct a square of side $a + b$ and arrange four copies
   of the triangle inside it. Compare areas.
   \end{proof}

   As we saw in Theorem~\ref{thm:pythagoras}, ...

   \end{document}
   ```

6. **Identify the errors in the following LaTeX fragment and correct them: `$$\frac{x^2+1}{x^2-1} = 1 + \frac{2}{x^2-1}$$ for all $x \neq \pm 1$.`**

   The fragment uses the plain-TeX `$$...$$` delimiter instead of the recommended LaTeX2e display interface and places prose immediately after the display. Corrected:

   ```latex
   \[
   \frac{x^{2} + 1}{x^{2} - 1} = 1 + \frac{2}{x^{2} - 1}
   \]
   for all $x \neq \pm 1$.
   ```

   Alternatively, keep it inline: $\frac{x^{2} + 1}{x^{2} - 1} = 1 + \frac{2}{x^{2} - 1}$ for all $x \neq \pm 1$.

---

## Chapter 4: Literature Search

1. **You need to learn about the probabilistic method in combinatorics. Name two search strategies: one using MSC codes and one using keyword searches. Which databases would you use for each?**

   Using MSC codes: search MathSciNet or zbMATH for code 05C80 (random graphs) or 05D40 (probabilistic methods). Using keywords: search Google Scholar or arXiv for "probabilistic method combinatorics" or "Erdos probabilistic method." Use MathSciNet or zbMATH for specialist MSC-based retrieval; use Google Scholar for broader cross-disciplinary discovery, then inspect the records and record the service and access date.

2. **A paper on arXiv claims to prove the Riemann Hypothesis. List three specific checks you would perform before investing time in reading the proof.**

   1. Check whether the author has a history of credible work in analytic number theory.
   2. Search MathSciNet and zbMATH for any published version; if none exists after a reasonable time, the claim is unvetted.
   3. Look for expert commentary on math blogs, MathOverflow, or social media; the mathematical community often discusses extraordinary claims quickly.

3. **You find two papers with contradictory theorems about the same class of graphs. Outline a systematic process for determining which result (if either) you should trust.**

   1. Verify that both papers use the same definitions; contradictory theorems often stem from incompatible definitions.
   2. Check the hypotheses carefully; one result may apply to a narrower class of graphs.
   3. Look for peer review status; a refereed paper has survived independent scrutiny.
   4. Search for subsequent papers that cite both; the literature may have resolved the conflict.
   5. Attempt to reproduce the simpler proof yourself; errors often appear under close reading.

4. **Explain why a paper with $500$ citations might still be unreliable for your specific purpose.**

   Citation count measures influence, not correctness or relevance. The paper might be cited because it introduced a technique widely used in unrelated areas. It might contain a famous error that generated follow-up work. It might be too general for your specific question, or its hypotheses might not match your setting.

5. **Design a BibTeX entry for a hypothetical journal article. Include all required fields and explain why each matters.**

   ```bibtex
   @article{smith2024planar,
     author  = {Smith, Jane and Doe, John},
     title   = {A New Characterization of Planar Graphs},
     journal = {Journal of Graph Theory},
     year    = {2024},
     volume  = {95},
     number  = {3},
     pages   = {201--215},
     doi     = {10.1002/jgt.12345}
   }
   ```

   - `author`: identifies who is responsible for the work.
   - `title`: describes the content.
   - `journal`: indicates the venue and its refereeing standards.
   - `year`: places the work in historical context.
   - `volume`, `number`, `pages`: allow precise retrieval.
   - `doi`: provides a persistent digital identifier.

6. **You are writing a thesis chapter and need to cite a result that appears in a textbook, a lecture note PDF, and the original $1950$ journal article. Which source should you prioritize, and why?**

   For provenance, inspect and cite the original $1950$ journal article with an exact locator. For the modern statement or proof actually used, also cite an authoritative modern source: terminology and hypotheses may have changed, and publication does not by itself guarantee correctness. A textbook may supply the clearest modern formulation; lecture notes may be useful discovery aids, but their version and review status must be checked rather than inferred. Match each citation to the job it performs.

---

## Chapter 5: Collaboration Tools

1. **You and a collaborator are editing the same LaTeX file. You add a new theorem; your collaborator rewrites the introduction. Describe the Git workflow that allows both changes to be reviewed and merged without conflict.**

   Both collaborators work on separate branches. You create `branch-a` for the new theorem; your collaborator creates `branch-b` for the introduction rewrite. Each branch is pushed, reviewed via merge request, and approved independently. Git merges the changes. If the introduction and theorem reference each other, the second merge request is updated to resolve any cross-references before approval.

2. **A Jupyter notebook contains a numerical experiment supporting a conjecture. Explain why committing the notebook with output cells to Git is problematic, and describe an alternative workflow.**

   Output cells contain binary-like data (images, large tables) that change on every execution, producing spurious diffs and merge conflicts. The alternative workflow is to commit the notebook in a cleaned state (no output) or to maintain a parallel `.py` script containing the same code. Generate output locally or in a continuous integration pipeline, but do not version the output.

3. **A team of four is writing a textbook chapter. Design a communication protocol specifying when to use issues, when to use email, and when to schedule a meeting.**

   - **Issues:** Use for concrete, actionable tasks ("Add Example 3 to Section 2," "Verify Theorem 5 proof"). Issues are persistent and searchable.
   - **Email:** Use for announcements, scheduling, and matters that do not require tracking ("I will be unavailable next week").
   - **Meetings:** Schedule only when real-time discussion is necessary (resolving a deadlock, planning chapter architecture, onboarding a new member). Every meeting produces a written summary posted as a comment on the relevant issue or in a shared document.

4. **Two collaborators disagree about whether a proof should use induction or the well-ordering principle. Outline the resolution process described in this chapter.**

   1. State the disagreement: one collaborator prefers induction; the other prefers well-ordering.
   2. Identify criteria: which approach is clearer for the intended audience? Which generalizes better to the next chapter? Which is shorter?
   3. Produce alternatives: each collaborator writes the proof their way.
   4. Evaluate: the team reads both versions and votes or discusses against the criteria.
   5. Record: the chosen proof is merged, and a comment explains why the alternative was not selected.

5. **A project uses Python for numerical computations. List three specific items that should appear in a `requirements.txt` file and explain why each matters for reproducibility.**

   - `numpy==1.24.3`: the array computation library; the pin fixes one important source of variation.
   - `scipy==1.10.1`: scientific routines; different versions may use different algorithms or tolerances.
   - `matplotlib==3.7.1`: plotting library; the pin reduces version-dependent rendering differences.

   Pinned versions reduce failures caused by API changes or algorithm updates. They do not ensure identical results across operating systems, hardware, system numerical libraries, fonts, or external data; record those dependencies when they matter.

6. **Explain why "I fixed some typos" is an inadequate commit message, and write an improved version.**

   The message does not say which typos, where, or why the changes were made. An improved version:

   ```
   Fix typos in Section 3: standardize "continuous" spelling,
   correct exponent in Equation (4), and add missing closing
   parenthesis in Definition 2.
   ```

   This message allows reviewers to verify the changes quickly and helps future readers understand the edit's scope.

---

## Chapter 6: Peer Review

1. **You are reviewing a paper that claims: "Every compact metric space is complete." The proof says: "Let $(x_{n})$ be a Cauchy sequence. By compactness, some subsequence converges. A Cauchy sequence with a convergent subsequence converges." Identify what is correct, what is missing, and what you would tell the author.**

   The claim is correct: every compact metric space is indeed complete. The proof sketch is essentially correct but compressed. What is missing:
   - The author should cite or prove that a Cauchy sequence with a convergent subsequence converges.
   - The author should verify that compactness in metric spaces implies sequential compactness (or use the appropriate form of compactness).
   - The proof would benefit from a sentence connecting the subsequence limit to the original sequence limit.

   Review comment: "Theorem 1 is correct, but the proof would be clearer with an explicit statement that a Cauchy sequence possessing a convergent subsequence converges to the same limit. Please also confirm which definition of compactness you are using (sequential compactness follows from compactness in metric spaces, but this is a theorem, not automatic)."

2. **A reviewer writes: "The paper is too long and should be shortened." Explain why this comment is inadequate, and rewrite it as a useful review comment.**

   The comment is inadequate because it does not say which parts are too long, why they are too long, or what the author should cut. A useful version:

   > "The paper is $50$ pages, while the journal's target is $25$ pages. Sections 4 and 5 contain extensive examples that, while illuminating, could be condensed or moved to supplementary material. The proof of Theorem 3 repeats calculations already present in Theorem 1; please reference the earlier proof instead of reproducing it."

3. **You receive a review claiming that your main theorem is false because the reviewer found a counterexample. The counterexample violates a hypothesis you stated explicitly. Draft a paragraph of your response document.**

   > "We thank the reviewer for the careful reading. The proposed counterexample violates Hypothesis (ii) of Theorem 1, which requires that the function be defined on a closed interval. The counterexample uses $f(x) = 1/x$ on $(0, 1]$, which is not defined at $0$ and therefore does not satisfy the hypothesis. We have added a sentence after the theorem statement to emphasize this requirement."

4. **List three specific checks you would perform when reviewing a paper that relies heavily on numerical simulation.**

   1. Reproduce a subset of the simulations with the stated parameters to verify numerical consistency.
   2. Check that the numerical method is appropriate for the problem (stability, convergence, error bounds).
   3. Verify that the code or data is available, and that the figures match the data files.

5. **Explain why a review that says "accept as is" for a $50$-page paper is suspicious, and what an editor should do.**

   An unexplained one-line “accept as is” report gives the editor no evidence about which proofs, computations, references, or exposition the reviewer checked. Length alone does not prove superficial review. The editor should ask for a substantive assessment or seek another report.

6. **A reviewer asks you to add a proof of a lemma that is standard in the field and appears in three well-known textbooks. Draft your response.**

   > "We appreciate the suggestion. The lemma is indeed standard; it appears as Lemma 2.3 in Smith (2019), Theorem 4.1 in Jones (2020), and as an exercise in Doe (2018). Rather than reproduce the proof, we have added a precise citation to Smith (2019) and noted that the result is standard in the field."

---

## Chapter 7: Conference Presentations

1. **You have $15$ minutes to present a paper containing three theorems, two lemmas, and four examples. Select what to include and justify your choices.**

   Include:
   - The main theorem (the strongest or most surprising result).
   - One example that motivates the theorem and one that shows why the hypothesis matters.
   - The proof idea in two sentences, focusing on the novel technique.
   - One open problem.

   Omit: the two lemmas (mention them as "technical tools"), the weaker theorems (mention them as corollaries), and two of the examples (they are for the paper, not the talk).

   Justification: A talk is a trailer, not the full film. The audience should leave wanting to read the paper.

2. **Design a single slide that states a theorem, illustrates it with a diagram, and highlights the hypothesis that distinguishes it from prior work. Describe the layout.**

   Layout description:
   - **Top third:** Theorem statement in $28$-point font, centered.
   - **Middle third:** A simple diagram (e.g., a graph, a geometric figure, or a commutative diagram) illustrating the theorem's conclusion.
   - **Bottom third:** A highlighted box in a contrasting color containing the distinguishing hypothesis, with an arrow pointing to the part of the diagram where it matters.
   - **Left margin:** A small breadcrumb indicating where we are in the talk (e.g., "Step 3 of 5").

3. **You are asked a question you cannot answer. Write three possible responses, ranging from fully honest to evasive. Evaluate which is most professional.**

   1. Honest: "That is an excellent question, and I do not know the answer. I would need to think about it further."
   2. Partially honest: "That is related to work by Smith, though I have not checked whether their methods apply here."
   3. Evasive: "That is addressed in the full paper."

   The first is most professional. It respects the questioner, admits limits without shame, and invites follow-up discussion.

4. **A colleague puts $8$ bullet points of text on every slide. Write a constructive suggestion for improving their next talk.**

   > "Your content is strong, but the slides may be hard to follow at speed. Consider reducing each slide to one idea: a theorem, a diagram, or a key point. Move supporting text to your speaking notes. The audience will retain more if they listen to you rather than reading paragraphs."

5. **You have $20$ minutes for a board talk. Estimate how many complete theorem statements you can write legibly, and explain your calculation.**

   A legible theorem statement on a board takes approximately $90$--$120$ seconds to write, including pauses for explanation. In $20$ minutes, allowing $3$ minutes for opening and closing, you have $17$ minutes of board time. At $2$ minutes per theorem, you can write approximately $8$ complete theorem statements if you say nothing else. Realistically, with explanations and diagrams, plan for $2$--$3$ theorem statements per talk.

6. **Explain why starting a talk with a slide full of notation definitions is usually ineffective, and suggest an alternative opening.**

   A notation slide forces the audience to memorize symbols before they know why the symbols matter. Working memory is limited; spending it on notation leaves none for concepts. An alternative opening presents a concrete problem first, then introduces notation as needed to solve it. The symbols acquire meaning from context rather than from a dictionary.

---

## Chapter 8: Grant Writing

1. **You are writing a $15$-page NSF Project Description under a solicitation that uses that limit. Allocate its internal page budget and explain which proposal components remain separate.**

   | Section | Pages | Justification |
   | --- | --- | --- |
   | Background | $3$ | Enough to establish gap and significance. |
   | Research plan | $7$ | Technical core with hypotheses, methods, and risk controls. |
   | Prior results and feasibility | $2$ | Evidence supporting the proposed work. |
   | Broader impacts | $2$ | Concrete, assessable activities. |
   | Timeline | $1$ | Visual; milestones and deliverables. |

   The Project Summary, References Cited, Budget and Budget Justification, and other required forms are separate proposal components. The current solicitation and PAPPG control the final structure and limits.

2. **Rewrite the following weak aim as a strong aim: "We will study the properties of prime numbers."**

   Strong aim:

   > "We will use a segmented sieve to enumerate every twin-prime pair $(p,p+2)$ with $p\leq 10^{9}$. We will publish the implementation and the resulting list, and verify the count with an independently written second implementation."

   This states a finite question, a suitable method, concrete outputs, and a reproducible success criterion. The computation would establish the complete list only up to the stated bound; it would not decide whether infinitely many twin primes exist.

3. **A reviewer asks why you need $3$ months of summer salary instead of $1$. Draft a one-paragraph response.**

   > "The proposed project requires sustained, uninterrupted focus on technical proof development that is incompatible with a full teaching load. Three months of summer support will allow the PI to work intensively on Aim 2, which involves classifying exceptional cases in a $20$-dimensional parameter space. Preliminary work during a one-month pilot last summer confirmed that meaningful progress requires blocks of at least six uninterrupted weeks."

4. **List three concrete broader impacts for a project in pure algebraic geometry, avoiding generic claims.**

   1. Develop interactive visualizations of algebraic surfaces for undergraduate calculus courses, tested at two partner institutions with pre- and post-assessments.
   2. Mentor two PhD students and one postdoc, with explicit professional development plans and placement targets.
   3. Organize a public lecture series on the mathematics of symmetry, with recordings archived and distributed to high school teachers.

5. **Explain why "preliminary data" from an unpublished calculation is valuable in a grant proposal, even if it does not constitute a theorem.**

   Preliminary data demonstrates feasibility. It shows the PI has engaged with the problem, identified obstacles, and developed tools. Even negative preliminary data is valuable: it shows the PI understands why naive approaches fail and has a plausible alternative. A proposal with no preliminary work is a promise; a proposal with preliminary work is evidence.

6. **A colleague's proposal is rejected with the comment "the significance is unclear." Diagnose the likely problem and suggest a revision strategy.**

   The likely problem is that the proposal describes the technical work without explaining why anyone should care. The colleague probably opened with background rather than with the problem's importance.

   Revision strategy:
   1. Rewrite the opening paragraph to state the problem and its consequences in one sentence each.
   2. Add a paragraph explicitly connecting the technical result to a broader question or application.
   3. Include a sentence in the summary that a non-specialist could understand and find compelling.
   4. Ask a colleague from a different subfield to read the opening and state what they think the problem is.

---

## Chapter 9: Ethics in Mathematics

1. **A PhD student proves a lemma that is essential to a joint paper. The advisor writes most of the paper. How should authorship be determined?**

   The essential lemma is a strong case for including the student. Whether the advisor's writing and structuring also meet the authorship threshold depends on the applicable journal, society, institution, and collaboration policies; writing alone is not automatically decisive across venues. The collaborators should compare their contributions with those policies, agree on an order that follows the relevant field or venue convention, and state contributor roles transparently. A primarily editorial contribution may instead belong in the acknowledgments if the governing policy does not treat it as authorship.

2. **You discover that a published paper contains a computational error that invalidates the main conclusion. The author is prominent and the paper is widely cited. What should you do?**

   1. Verify the error carefully. Check your own calculations and ask a trusted colleague to confirm.
   2. Contact the author privately, explaining the error and providing your reasoning. Give them time to respond.
   3. If the author acknowledges the error, they may publish a correction or retraction.
   4. If the author refuses to respond or disputes the error, contact the journal editor with your evidence.
   5. If the error is significant and the journal does not act, consider writing a formal comment or correction for publication.

   The prominence of the author is irrelevant to the obligation to correct the record.

3. **A company offers to fund your research on optimization algorithms, with the condition that you do not publish results that are unfavorable to their product. How do you respond?**

   The condition is unacceptable. It violates the principle of open inquiry and would compromise the integrity of your work. A proper response:

   > "I appreciate the interest in my research. However, I cannot accept funding that restricts my ability to publish all results, including negative or unfavorable findings. Scientific integrity requires that conclusions follow from evidence, not from the funder's preferences. I would be happy to discuss alternative arrangements that do not impose publication restrictions."

   If no alternative is possible, decline the funding.

4. **You are asked to review a paper that overlaps significantly with unpublished work you are doing with a collaborator. What is your ethical obligation?**

   You must disclose the conflict of interest to the editor immediately. The editor may ask you to recuse yourself from the review, or may ask you to review with the conflict noted. You must not use the review to delay the competing work or to steal ideas. The unpublished overlap does not disqualify you automatically, but it requires transparency.

5. **Explain why "mathematics is neutral, so mathematicians bear no responsibility for how their work is used" is an inadequate ethical position.**

   This position confuses the abstract validity of a theorem with the concrete consequences of its application. A theorem about optimization is indeed true regardless of context. But the decision to develop, publish, or implement that theorem is a human choice with human consequences. Neutrality is a property of logical propositions, not of the people who produce them. Mathematicians, like all professionals, are responsible for the foreseeable consequences of their actions.

6. **A colleague routinely takes $6$ years to graduate PhD students while the departmental norm is $4$--$5$ years. The students are funded and productive, but their careers are delayed. Is this an ethical issue? Justify your answer.**

   Yes, this can be an ethical issue. The advisor has a professional responsibility to support students' education and career development. Delaying graduation without pedagogical justification can harm students' job prospects, earning potential, and personal lives. "Productive" is not sufficient justification if the productivity serves the advisor's research program more than the student's independent development. The advisor should examine whether the extended timeline is necessary for the student's growth or merely convenient for the advisor's grants.

---

## Chapter 10: Career Paths

1. **You are in the third year of a PhD in algebraic geometry. List three concrete steps you could take this year to keep open the option of an industry career after graduation.**

   1. Take a course or complete online certifications in programming (Python, SQL) and machine learning.
   2. Complete a summer internship or part-time project with a company that uses quantitative methods.
   3. Attend industry-oriented conferences (e.g., NeurIPS, KDD, JMM industry sessions) and build relationships with practitioners.

2. **A tenure-track position requires $6$ papers in $6$ years. You have $4$ strong papers and $2$ weaker ones that could be published quickly. Discuss the ethical and strategic dimensions of this situation.**

   Ethically, publishing weak papers to meet a quota is questionable. It dilutes the literature, wastes reviewers' time, and may mislead readers about the significance of the work. Strategically, weak papers can harm your reputation if they contain errors or are seen as padding. A better approach: submit the $4$ strong papers to strong venues, and use the remaining time to develop one high-quality paper rather than two weak ones. If the tenure clock is inflexible, discuss the situation with your mentor or department chair; some institutions allow extensions for compelling reasons.

3. **Explain why teaching experience is valuable even for a student who plans to work in quantitative finance.**

   Teaching forces you to explain complex ideas clearly and to anticipate misconceptions. These skills are essential in finance, where you must communicate models to traders, regulators, and clients. Teaching also develops patience, organization, and the ability to handle questions under pressure---all valuable in client-facing roles.

4. **You receive two job offers: a postdoc at a prestigious university with a famous advisor, and a data science position at a mid-sized company with a $30\%$ higher salary. List three non-salary factors you should consider.**

   1. **Intellectual freedom:** The postdoc offers time to pursue your own research questions; the industry role may direct your work toward company priorities.
   2. **Long-term trajectory:** The postdoc builds a research record that opens future academic and research positions; the industry role builds skills that open senior technical and management roles.
   3. **Location and lifestyle:** Consider where you want to live, the cost of living, work-life balance, and the presence of a professional community in your field.

5. **A colleague tells you that "only failed researchers go into industry." Draft a response that is both honest and professional.**

   > "I understand that view, but I do not think it is accurate. Many excellent researchers move to industry because they want to work on different problems, at a different pace, or with different impact. Industry roles require serious quantitative skills, and many industrial researchers continue to publish and contribute to the field. The choice between academia and industry is a matter of fit and values, not a measure of ability."

6. **Design a $5$-year plan for a mathematician who wants to transition from academia to technology, starting from a tenure-track assistant professorship.**

   | Year | Actions |
   | --- | --- |
   | $1$ | Begin learning industry-relevant skills (programming, cloud platforms). Attend one industry conference. |
   | $2$ | Take a sabbatical or summer position in a technology company. Build a portfolio of applied projects. |
   | $3$ | Publish applied work that bridges academia and industry. Expand network through conferences and collaborations. |
   | $4$ | Apply for senior technical roles. Negotiate leave or transition arrangement with current institution. |
   | $5$ | Transition to industry role. Maintain academic connections through adjunct teaching or consulting. |
