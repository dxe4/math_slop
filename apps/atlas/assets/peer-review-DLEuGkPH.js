var e=`---
parent_id: book-mathematical-toolkit
chapter_id: peer-review
title: "Peer Review"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Peer Review

Peer review is one quality-control process in mathematical publishing. Journals and other venues ask readers to assess correctness, clarity, novelty, and fit, but procedures and depth vary. Review can improve a manuscript and inform an editor; it does not certify correctness, and no comparative claim that it is the most reliable possible filter is made here.

This chapter examines peer review from both sides: how to write a useful review, and how to respond to one. The skills are extensions of active reading and mathematical writing, applied to the specific context of evaluating work that is not your own.

## The purpose of peer review

Peer review serves multiple goals:

1. **Correctness:** Are the theorems true? Are the proofs valid? Are the computations accurate?
2. **Clarity:** Can a qualified reader follow the argument without undue effort?
3. **Novelty:** Does the work advance the field, or is it already known?
4. **Scope:** Is the work appropriate for the venue?
5. **Ethics:** Are citations fair? Is authorship accurate? Are there conflicts of interest?

A good review addresses all of these to the extent relevant. A bad review addresses only one, or none, and substitutes opinion for evidence.

## How to write a review

### Read twice

First, read for understanding. Do not judge. Follow the argument, check definitions, and reconstruct the proof structure. Second, read critically. Ask at every step: could this fail? Is the hypothesis used? Is the conclusion as strong as claimed?

### Check the mathematics

Verify definitions against standard usage. If an author defines "continuous" differently from the standard, note it. Check proof steps for gaps. If a step is justified by "it is well known that," determine whether it is indeed well known to the intended audience.

For computational claims, reproduce key calculations. A result that cannot be verified is not reviewed; it is merely noted.

### Evaluate the exposition

A correct proof that no one can read is not useful. Check that:
- Notation is introduced before use.
- Theorem statements include all hypotheses.
- Examples illustrate the main ideas.
- The introduction states the contribution clearly.

### Write the report

Structure the report in four parts:

1. **Summary:** In your own words, what does the paper claim and prove? This demonstrates that you understood the work.
2. **Assessment:** Is the paper correct, clear, and novel? Be specific. "The proof of Theorem 3 is incomplete because the case $n = 0$ is not handled" is useful; "the proof is wrong" is not.
3. **Detailed comments:** Line-by-line or section-by-section notes. Distinguish major issues (must be fixed) from minor issues (typos, suggestions).
4. **Recommendation:** Accept, minor revision, major revision, or reject. Justify the recommendation with reference to the venue's standards.

### Tone and professionalism

Review the work, not the author. "The proof omits the base case" is professional; "the author clearly does not understand induction" is not. The goal is to improve the literature, not to score points.

## How to respond to a review

Receiving criticism is difficult. A systematic response process helps.

### Read all comments before reacting

Some comments will seem unfair or mistaken. Others will reveal genuine errors. Reading everything first prevents defensive responses to minor issues and allows you to see patterns in the reviewer's concerns.

### Categorize comments

- **Correct and fixable:** Make the change and thank the reviewer.
- **Correct but requiring substantial work:** Explain the revision plan and timeline.
- **Disagree:** Explain your reasoning respectfully. Cite sources if possible.
- **Unclear:** Ask for clarification rather than guessing.

### Write a response document

For each reviewer comment, quote the comment and state your response. If you made a change, describe it. If you disagreed, explain why. This document demonstrates that you took the review seriously and helps the editor evaluate your revision.

## The limits of peer review

Peer review is not a guarantee of correctness. Mistakes survive review for many reasons:

- **Specialization gaps:** A reviewer may lack expertise in a subfield used by the paper.
- **Time and compensation:** Reviewing arrangements vary. Some reviewing is unpaid, and workload or deadline constraints can limit the depth of a report.
- **Social dynamics:** Prestige, institutional relationships, and other social biases can affect evaluation. Their direction and size must be established with evidence in the relevant context rather than assumed for every review.
- **Novel errors:** A genuinely new mistake has no literature to catch it.

The mathematical community compensates with post-publication scrutiny. Papers are read, taught, extended, and sometimes retracted. Peer review is the first filter, not the last.

## Common errors in reviewing

### The superficial review

A review that says "this looks fine" without checking details provides no value. It wastes the editor's time and misleads the author.

### The hostile review

A review that attacks the author rather than the work discourages honest submission and degrades the literature.

### The scope mistake

Rejecting a good paper because it does not match the reviewer's interests, or accepting a weak paper because it cites the reviewer's work, is a failure of professional responsibility.

### The impossible demand

Requesting that the author solve an unrelated open problem, or redo the work in a different framework, is not a valid review comment unless the venue explicitly requires such scope.

## Practice exercises

### Exercise 1
You are reviewing a paper that claims: "Every compact metric space is complete." The proof says: "Let $(x_{n})$ be a Cauchy sequence. By compactness, some subsequence converges. A Cauchy sequence with a convergent subsequence converges." Identify what is correct, what is missing, and what you would tell the author.

### Exercise 2
A reviewer writes: "The paper is too long and should be shortened." Explain why this comment is inadequate, and rewrite it as a useful review comment.

### Exercise 3
You receive a review claiming that your main theorem is false because the reviewer found a counterexample. The counterexample violates a hypothesis you stated explicitly. Draft a paragraph of your response document.

### Exercise 4
List three specific checks you would perform when reviewing a paper that relies heavily on numerical simulation.

### Exercise 5
Explain why a review that says "accept as is" for a $50$-page paper is suspicious, and what an editor should do.

### Exercise 6
A reviewer asks you to add a proof of a lemma that is standard in the field and appears in three well-known textbooks. Draft your response.

## Solutions

**Solution 1.** The claim is correct: every compact metric space is indeed complete. The proof sketch is essentially correct but compressed. What is missing:
- The author should cite or prove that a Cauchy sequence with a convergent subsequence converges.
- The author should verify that compactness in metric spaces implies sequential compactness (or use the appropriate form of compactness).
- The proof would benefit from a sentence connecting the subsequence limit to the original sequence limit.

Review comment: "Theorem 1 is correct, but the proof would be clearer with an explicit statement that a Cauchy sequence possessing a convergent subsequence converges to the same limit. Please also confirm which definition of compactness you are using (sequential compactness follows from compactness in metric spaces, but this is a theorem, not automatic)."

**Solution 2.** The comment is inadequate because it does not say which parts are too long, why they are too long, or what the author should cut. A useful version:

> "The paper is $50$ pages, while the journal's target is $25$ pages. Sections 4 and 5 contain extensive examples that, while illuminating, could be condensed or moved to supplementary material. The proof of Theorem 3 repeats calculations already present in Theorem 1; please reference the earlier proof instead of reproducing it."

**Solution 3.** Draft response:

> "We thank the reviewer for the careful reading. The proposed counterexample violates Hypothesis (ii) of Theorem 1, which requires that the function be defined on a closed interval. The counterexample uses $f(x) = 1/x$ on $(0, 1]$, which is not defined at $0$ and therefore does not satisfy the hypothesis. We have added a sentence after the theorem statement to emphasize this requirement."

**Solution 4.**
1. Reproduce a subset of the simulations with the stated parameters to verify numerical consistency.
2. Check that the numerical method is appropriate for the problem (stability, convergence, error bounds).
3. Verify that the code or data is available, and that the figures match the data files.

**Solution 5.** An unexplained one-line “accept as is” report gives the editor no evidence about which proofs, computations, references, or exposition the reviewer checked. Length alone does not prove that the review was superficial, and unusually clean papers do exist. The editor should ask for a substantive assessment or seek another report rather than infer diligence from the recommendation alone.

**Solution 6.** Draft response:

> "We appreciate the suggestion. The lemma is indeed standard; it appears as Lemma 2.3 in Smith (2019), Theorem 4.1 in Jones (2020), and as an exercise in Doe (2018). Rather than reproduce the proof, we have added a precise citation to Smith (2019) and noted that the result is standard in the field."

## Looking backward and forward

This chapter applied the reading and writing disciplines from earlier chapters to the social process of quality control. Peer review is a conversation between author and reader, mediated by an editor, with the shared goal of improving the literature. In the next chapter, *Conference Presentations*, we examine how to communicate mathematical results orally to an audience with limited time and attention.
`;export{e as default};