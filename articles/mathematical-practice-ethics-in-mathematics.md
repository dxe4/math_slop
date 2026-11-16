
# Ethics in Mathematics

This **L4 mathematical-practice guide** assumes experience making and attributing mathematical claims. Preparation is [Reading and Writing Mathematics](#/books/introduction-to-proof/reading-writing-mathematics) and [Literature Search](#/books/introduction-to-proof/literature-search). Its scope is responsible attribution, evidence, disclosure and treatment of collaborators. It adapts the retained [Toolkit chapter](#/books/mathematical-toolkit/ethics-in-mathematics). The scenarios support reasoned decisions; a venue or institution's actual policies govern its procedures.

Mathematics is often presented as a value-free discipline. Theorems are true or false independently of human preferences; proofs are valid or invalid regardless of who produces them. But the practice of mathematics---the choice of problems, the allocation of credit, the application of results, and the treatment of students and colleagues---is deeply embedded in human values. Ethical reasoning is as necessary for a working mathematician as proof technique.

This chapter examines the ethical dimensions of mathematical practice. It does not provide a code of conduct to memorize; it provides frameworks for recognizing and reasoning about ethical choices.

## Authorship and credit

Mathematical results are produced by people, and people need credit for employment, promotion, and funding. The allocation of credit is therefore not merely a courtesy; it is a material concern.

### Who is an author?

Many mathematics venues treat substantial intellectual contribution as central to authorship, but the applicable journal, society, institution, and collaboration policies control the decision. Examples of substantial contribution can include:
- Formulating the central problem or conjecture.
- Developing the proof strategy.
- Writing significant portions of the text.
- Conducting computations or verifying results that are essential to the claims.

Providing data, funding, or administrative support alone does not automatically establish authorship under many policies. Record those roles transparently through the venue's authorship, contributorship, and acknowledgment mechanisms.

### Ordering authors

Alphabetical order is common in mathematics, while contribution order and other conventions are also used, especially across disciplines. Agree on the order early, follow the relevant venue and community rules, and state contributor roles transparently.

### Citation ethics

For provenance, inspect and cite the original source with an exact locator. For the modern statement or proof actually used, cite an authoritative modern source as well: terminology, hypotheses, and corrections may differ from the original. A survey or textbook can legitimately support exposition or the modern formulation when its role is stated. Conversely, do not cite yourself merely to inflate metrics; cite work when it is relevant to the claim and credit it performs.

## Data and computation

Computational mathematics raises ethical questions about reproducibility, accuracy, and the presentation of results.

### Reproducibility

A computational claim needs enough evidence for an independent audit. Publish code, data, and parameter settings when permissions and confidentiality allow, and document justified restrictions when they do not. Record the software environment. A result that depends on a random seed or a specific version of a library must say so.

### Cherry-picking

Selecting only the simulations that support your conjecture, while hiding those that contradict it, is scientific misconduct. Report all relevant results, including negative ones. If computational constraints prevent exhaustive testing, say so explicitly.

### Error bounds

Presenting a numerical result without error bounds or confidence intervals misleads the reader about its reliability. An estimate of $3.14159$ is meaningless without knowing whether the uncertainty is $\pm 10^{-5}$ or $\pm 0.5$.

## Applications and dual-use

Mathematics is a tool. Like all tools, it can be used for harm.

### Encryption and surveillance

Number theory and algebraic geometry underpin modern cryptography. The same mathematics that protects privacy also enables surveillance. Mathematicians who develop cryptanalytic techniques must consider whether their work will be used to violate human rights.

### Optimization and inequality

Optimization algorithms improve logistics, scheduling, and resource allocation. They also enable price discrimination, worker surveillance, and automated decision-making that perpetuates bias. The mathematics is neutral; its deployment is not.

### Weapons and defense

Ballistics, signal processing, and operations research have direct military applications. Mathematicians working in these areas must grapple with the consequences of their work.

There is no universal answer to these questions. The ethical framework is: understand the likely applications, consider the balance of harms and benefits, and be transparent about your choices. Silence is not neutrality.

## Treatment of students and colleagues

### Mentorship

Advisors have power over students' careers. This power must be exercised responsibly:
- Provide regular feedback and meetings.
- Do not delay graduation for the advisor's convenience.
- Encourage independent thinking, even when it leads away from the advisor's preferred direction.
- Credit students appropriately for their contributions.

### Harassment and discrimination

Mathematics is not immune to the biases and power imbalances of society. Harassment, discrimination, and hostile environments destroy careers and waste talent. Every member of the community has a responsibility to intervene, support victims, and advocate for fair treatment.

### Collaboration ethics

Do not claim credit for work produced by collaborators without their consent. Do not share a collaborator's unpublished ideas without permission. Do not sabotage a collaborator's career out of competition.

## Common ethical failures

### The ghost author

A senior researcher adds their name to a paper they did not contribute to, exploiting junior collaborators for career advancement.

### The omitted citation

A researcher publishes a result that is essentially known, omitting the prior work to claim priority.

### The irreproducible computation

A researcher publishes impressive numerical results but refuses to share code or data, preventing verification.

### The harmful application

A researcher develops an algorithm for optimizing prison sentencing, knowing that the training data encode historical racism, and does not disclose this limitation.

## Practice exercises

### Exercise 1 {#mathematical-practice-ethics-ex-1}
A PhD student proves a lemma that is essential to a joint paper. The advisor writes most of the paper. How should authorship be determined?

<details><summary>Hint 1</summary>Record intellectual contributions before discussing order or seniority.</details>
<details><summary>Hint 2</summary>Apply the relevant venue policy transparently to both collaborators.</details>

### Exercise 2 {#mathematical-practice-ethics-ex-2}
You discover that a published paper contains a computational error that invalidates the main conclusion. The author is prominent and the paper is widely cited. What should you do?

<details><summary>Hint 1</summary>Establish the error and its exact effect before making an accusation.</details>
<details><summary>Hint 2</summary>Keep a clear evidence trail and use the editor's correction process.</details>

### Exercise 3 {#mathematical-practice-ethics-ex-3}
A company offers to fund your research on optimization algorithms, with the condition that you do not publish results that are unfavorable to their product. How do you respond?

<details><summary>Hint 1</summary>Separate legitimate confidentiality conditions from outcome-dependent suppression.</details>
<details><summary>Hint 2</summary>Propose terms allowing honest reporting of relevant unfavorable results.</details>

### Exercise 4 {#mathematical-practice-ethics-ex-4}
You are asked to review a paper that overlaps significantly with unpublished work you are doing with a collaborator. What is your ethical obligation?

<details><summary>Hint 1</summary>Disclose the overlap to the editor without sharing confidential collaborator details unnecessarily.</details>
<details><summary>Hint 2</summary>Do not use access to delay the paper or appropriate its ideas.</details>

### Exercise 5 {#mathematical-practice-ethics-ex-5}
Explain why "mathematics is neutral, so mathematicians bear no responsibility for how their work is used" is an inadequate ethical position.

<details><summary>Hint 1</summary>Distinguish truth of a proposition from decisions about its deployment.</details>
<details><summary>Hint 2</summary>Identify foreseeable consequences without claiming control of every possible use.</details>

### Exercise 6 {#mathematical-practice-ethics-ex-6}
A colleague routinely takes $6$ years to graduate PhD students while the departmental norm is $4$--$5$ years. The students are funded and productive, but their careers are delayed. Is this an ethical issue? Justify your answer.

<details><summary>Hint 1</summary>The stated durations are hypothetical; examine reasons and students' goals.</details>
<details><summary>Hint 2</summary>Distinguish necessary educational development from an advisor's convenience.</details>

## Solutions

<details><summary>Full solutions to Exercises 1–6</summary>

**Solution 1.** Consult the target venue's authorship policy and discuss roles transparently. Proving the essential lemma strongly supports the student's authorship. Whether writing and structuring the paper also supports the advisor's authorship depends on the intellectual contribution and the applicable policy; supervision alone should not settle the question. Document both roles and choose an order consistent with the declared disciplinary or venue convention.

**Solution 2.**
1. Verify the error carefully. Check your own calculations and ask a trusted colleague to confirm.
2. Contact the author privately, explaining the error and providing your reasoning. Give them time to respond.
3. If the author acknowledges the error, they may publish a correction or retraction.
4. If the author refuses to respond or disputes the error, contact the journal editor with your evidence.
5. If the error is significant and the journal does not act, consider writing a formal comment or correction for publication.

The prominence of the author is irrelevant to the obligation to correct the record.

**Solution 3.** The condition is unacceptable. It violates the principle of open inquiry and would compromise the integrity of your work. A proper response:

> "I appreciate the interest in my research. However, I cannot accept funding that restricts my ability to publish all results, including negative or unfavorable findings. Scientific integrity requires that conclusions follow from evidence, not from the funder's preferences. I would be happy to discuss alternative arrangements that do not impose publication restrictions."

If no alternative is possible, decline the funding.

**Solution 4.** You must disclose the conflict of interest to the editor immediately. The editor may ask you to recuse yourself from the review, or may ask you to review with the conflict noted. You must not use the review to delay the competing work or to steal ideas. The unpublished overlap does not disqualify you automatically, but it requires transparency.

**Solution 5.** This position confuses the abstract validity of a theorem with the concrete consequences of its application. A theorem about optimization is indeed true regardless of context. But the decision to develop, publish, or implement that theorem is a human choice with human consequences. Neutrality is a property of logical propositions, not of the people who produce them. Mathematicians, like all professionals, are responsible for the foreseeable consequences of their actions.

**Solution 6.** Yes, this can be an ethical issue. The advisor has a professional responsibility to support students' education and career development. Delaying graduation without pedagogical justification can harm students' job prospects, earning potential, and personal lives. "Productive" is not sufficient justification if the productivity serves the advisor's research program more than the student's independent development. The advisor should examine whether the extended timeline is necessary for the student's growth or merely convenient for the advisor's grants.

</details>

## Looking backward and forward

Continue with [Career Paths](#/articles/mathematical-practice-career-paths) for making professional choices that retain these responsibilities.

## Worked example: repair a claim and preserve contribution credit

A collaborator proposes that $x^2\equiv1$ modulo any positive integer implies $x\equiv1$ or $-1$. Another finds $3^2\equiv1$ modulo eight, although three is neither one nor seven. This is a complete counterexample to the unrestricted statement, not just a numerical hint that it might fail.

The team revises the claim to prime modulus $p$. Then $p$ divides $(x-1)(x+1)$, so Euclid's prime-divisor property gives $p\mid x-1$ or $p\mid x+1$. The revised theorem follows, including $p=2$, where the two listed classes coincide. Primality is doing the essential work.

A responsible contribution record distinguishes proposing the original question, discovering the counterexample, identifying the corrected hypothesis and writing the final proof. The counterexample is intellectually important even though the final paper states the repaired theorem. Cite any existing result actually used, discuss credit under the venue's policy and obtain agreement before circulating the joint draft. Neither seniority nor who typed the last version erases the others' work. If the initial unrestricted claim has already been shared, the correction should explicitly explain its failed scope rather than silently replacing it.

*Source provenance: adapted from Euler's preserved Ethics in Mathematics chapter, retaining its six scenarios and full responses while adding staged hints and a complete counterexample/repair worked case. Scenario-specific policies must be checked in the relevant institution or venue. Updated 14 November 2026. CC BY-SA 4.0. Draft.*
