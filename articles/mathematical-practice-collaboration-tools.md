
# Collaboration Tools

This **L4 mathematical-practice guide** assumes experience reading and revising proofs. Preparation is [Reading and Writing Mathematics](#/books/introduction-to-proof/reading-writing-mathematics). Its scope is keeping a team's mathematical source, decisions and responsibilities coherent. Software examples illustrate workflows; a project's own contribution rules determine which actions are appropriate. This article adapts the retained [Toolkit chapter](#/books/mathematical-toolkit/collaboration-tools), whose original source and learner identity remain available.

Modern mathematics is rarely a solitary activity. Research papers, textbooks, software libraries, and curricula are produced by teams distributed across institutions and time zones. Effective collaboration requires more than goodwill; it requires shared conventions, version control, clear communication protocols, and tools that preserve the integrity of mathematical reasoning while enabling parallel work.

This chapter surveys the practical infrastructure of mathematical collaboration. It assumes familiarity with the reading, writing, and search skills from earlier chapters and asks how those skills scale to a group setting.

## Version control for mathematics

Mathematical documents evolve. Definitions are refined, proofs are repaired, examples are added, and notation is standardized. Without a systematic record of changes, collaborators waste time reconciling conflicting versions or rediscovering why a previous approach was abandoned.

### Git for text-based sources

Git is a distributed version control system designed for text files. LaTeX source, Markdown, Python scripts, and BibTeX databases are all text-based and version well in Git.

**Core workflow:**
1. Clone the shared repository.
2. Create a branch for your changes: `git checkout -b fix-lemma-3`.
3. Edit, compile, and test locally.
4. Commit with a message explaining what changed and why: `git commit -m "Clarify hypothesis in Lemma 3: require compactness"`.
5. Push the branch and open a merge request for review.
6. After approval, merge into the main branch.

**Why branches matter:** Direct commits to the main branch bypass review and risk introducing errors that break the shared document for everyone.

### What not to version

Large generated binaries such as compiled PDFs and reproducible render outputs are usually poor Git candidates: they bloat history and cannot be diffed meaningfully. Track their source and build procedure instead. Authored image assets, small fixtures, and archival data may properly belong in version control when they are inputs rather than reproducible outputs; document that repository policy explicitly.

## Collaborative writing platforms

### Overleaf

Overleaf provides real-time collaborative editing of LaTeX documents in a web browser. It is excellent for rapid drafting, comment threads, and reviewing changes visually.

**Best practices:**
- If a shared writing platform provides a repository integration suitable for the project, agree who owns synchronization and conflict resolution. Otherwise maintain regular source exports in a separately governed repository. Consult the platform's current official documentation for availability and terms; this workflow does not depend on a particular subscription feature.
- Enable track changes during review phases.
- Resolve comment threads only when the underlying issue is fixed in the source.

### Shared file systems

For teams that prefer local editors, a shared file system with periodic synchronization works. The cost is higher coordination overhead: someone must manually merge changes and resolve conflicts.

## Communication protocols

Mathematical collaboration generates two kinds of communication: synchronous (meetings, video calls) and asynchronous (email, issue trackers, comment threads).

### Asynchronous first

Mathematics requires sustained attention. Interrupting a collaborator with a video call to ask a question that could have been an email destroys focus. Default to asynchronous communication unless the issue genuinely requires real-time back-and-forth.

### Issue trackers

An issue tracker---GitHub Issues, GitLab Issues, or a simple shared document---is a powerful tool for mathematical collaboration. Each issue should describe one concrete task:

- "Prove Lemma 4 without assuming continuity."
- "Check whether Example 2 satisfies the revised Definition 1."
- "Find a reference for the bound in Section 3."

Issues create an auditable record of what was decided, by whom, and why. They prevent decisions from being lost in email threads.

### Meeting discipline

When synchronous meetings are necessary, distribute an agenda in advance. Record decisions and action items in writing. A meeting without a written summary is a conversation, not a decision.

## Code collaboration

Computational mathematics---symbolic algebra, numerical simulation, data analysis---requires the same discipline as document collaboration, with additional concerns.

### Reproducible environments

A script that runs on one collaborator's laptop but fails on another's is a collaboration failure. Use environment specification tools (requirements files, conda environments, Docker containers) to pin dependencies.

### Code review

Before merging code, another collaborator should read it. Review checks:
- Correctness: Does the code implement the claimed algorithm?
- Testing: Are there tests for expected behavior and edge cases?
- Documentation: Are inputs, outputs, and assumptions documented?
- Style: Is the code readable and consistent with the project's conventions?

### Literate programming

Tools such as Jupyter notebooks and R Markdown interleave code, output, and exposition. They are excellent for exploration and communication but require discipline: version control of notebooks is difficult because output cells change on every run. Commit cleaned notebooks (no output) or export to plain Python scripts for version control.

## Resolving disagreements

Collaborators will disagree about definitions, proof strategies, notation, and presentation. Handle disagreements systematically:

1. **State the disagreement precisely.** What specific text or code is in dispute?
2. **Identify the criteria.** Is the issue about correctness, clarity, scope, or audience?
3. **Produce alternatives.** Each side should write the text or code they prefer.
4. **Evaluate against criteria.** Which alternative better satisfies the agreed goals?
5. **Record the decision.** Add a comment or issue note explaining why the chosen alternative was selected.

If disagreement persists, escalate to a third collaborator or the project lead. Deadlock is worse than either alternative.

## Common errors in collaboration

### The silent rewrite

A collaborator rewrites a section without notifying others. The original author discovers the change weeks later and must reconstruct whether their work was improved, misunderstood, or discarded.

**Prevention:** All substantive changes go through review. Minor edits (typos, formatting) may be committed directly, but the threshold for "minor" should be conservative.

### The branch graveyard

Branches are created for experiments, abandoned, and never deleted. The repository accumulates stale branches that confuse new collaborators.

**Prevention:** Delete branches after merging. Archive experimental branches with a descriptive name and a closing comment.

### The undocumented decision

A meeting concludes with a plan, but no written record exists. Two weeks later, collaborators implement incompatible versions of the plan.

**Prevention:** Every meeting produces a written summary stored in the shared project space.

## Practice exercises

### Exercise 1 {#mathematical-practice-collaboration-ex-1}
You and a collaborator are editing the same LaTeX file. You add a new theorem; your collaborator rewrites the introduction. Describe the Git workflow that allows both changes to be reviewed and merged without conflict.

<details><summary>Hint 1</summary>Distinguish separate branches from a guarantee that semantic changes are independent.</details>
<details><summary>Hint 2</summary>Update cross-references and claims after combining the two changes.</details>

### Exercise 2 {#mathematical-practice-collaboration-ex-2}
A Jupyter notebook contains a numerical experiment supporting a conjecture. Explain why committing the notebook with output cells to Git is problematic, and describe an alternative workflow.

<details><summary>Hint 1</summary>Separate authored inputs from reproducible generated output.</details>
<details><summary>Hint 2</summary>Keep parameters, environment and generation instructions with the source.</details>

### Exercise 3 {#mathematical-practice-collaboration-ex-3}
A team of four is writing a textbook chapter. Design a communication protocol specifying when to use issues, when to use email, and when to schedule a meeting.

<details><summary>Hint 1</summary>Choose channels according to whether an action needs a persistent owner.</details>
<details><summary>Hint 2</summary>Every substantive synchronous decision needs a written record.</details>

### Exercise 4 {#mathematical-practice-collaboration-ex-4}
Two collaborators disagree about whether a proof should use induction or the well-ordering principle. Outline the resolution process described in this chapter.

<details><summary>Hint 1</summary>Agree the audience and mathematical requirements before choosing a style.</details>
<details><summary>Hint 2</summary>Compare two concrete drafts against the same criteria.</details>

### Exercise 5 {#mathematical-practice-collaboration-ex-5}
A project uses Python for numerical computations. List three specific items that should appear in a `requirements.txt` file and explain why each matters for reproducibility.

<details><summary>Hint 1</summary>Identify the array, scientific-routine and plotting dependencies separately.</details>
<details><summary>Hint 2</summary>The historical pins in the solution illustrate recording an environment, not current installation advice.</details>

### Exercise 6 {#mathematical-practice-collaboration-ex-6}
Explain why "I fixed some typos" is an inadequate commit message, and write an improved version.

<details><summary>Hint 1</summary>Name the affected section and actual mathematical changes.</details>
<details><summary>Hint 2</summary>A changed exponent may deserve more explanation than a spelling correction.</details>

## Solutions

<details><summary>Full solutions to Exercises 1–6</summary>

**Solution 1.** Both collaborators work on separate branches. You create `branch-a` for the new theorem; your collaborator creates `branch-b` for the introduction rewrite. Each branch is pushed, reviewed via merge request, and approved independently. Git merges the changes. If the introduction and theorem reference each other, the second merge request is updated to resolve any cross-references before approval.

**Solution 2.** Output cells contain binary-like data (images, large tables) that change on every execution, producing spurious diffs and merge conflicts. The alternative workflow is to commit the notebook in a cleaned state (no output) or to maintain a parallel `.py` script containing the same code. Generate output locally or in a continuous integration pipeline, but do not version the output.

**Solution 3.**
- **Issues:** Use for concrete, actionable tasks ("Add Example 3 to Section 2," "Verify Theorem 5 proof"). Issues are persistent and searchable.
- **Email:** Use for announcements, scheduling, and matters that do not require tracking ("I will be unavailable next week").
- **Meetings:** Schedule only when real-time discussion is necessary (resolving a deadlock, planning chapter architecture, onboarding a new member). Every meeting produces a written summary posted as a comment on the relevant issue or in a shared document.

**Solution 4.**
1. State the disagreement: one collaborator prefers induction; the other prefers well-ordering.
2. Identify criteria: which approach is clearer for the intended audience? Which generalizes better to the next chapter? Which is shorter?
3. Produce alternatives: each collaborator writes the proof their way.
4. Evaluate: the team reads both versions and votes or discusses against the criteria.
5. Record: the chosen proof is merged, and a comment explains why the alternative was not selected.

**Solution 5.**
The following versions are historical illustrative environment records from the retained source, not recommendations to install those versions now.
- `numpy==1.24.3`: the array computation library; the pin fixes one important source of variation.
- `scipy==1.10.1`: scientific routines; different versions may use different algorithms or tolerances.
- `matplotlib==3.7.1`: plotting library; the pin reduces version-dependent rendering differences.

Pinned versions reduce failures caused by API changes or algorithm updates. They do not ensure bit-for-bit identity across operating systems, processors, BLAS libraries, fonts, or external data; record those dependencies when they matter.

**Solution 6.** The message does not say which typos, where, or why the changes were made. An improved version:

```
Fix typos in Section 3: standardize "continuous" spelling,
correct exponent in Equation (4), and add missing closing
parenthesis in Definition 2.
```

This message allows reviewers to verify the changes quickly and helps future readers understand the edit's scope.

</details>

## Looking backward and forward

This guide connects individual proof work to coordinated source changes. Continue with [Peer Review](#/articles/mathematical-practice-peer-review) for reports that explain their evidence and limits.

## Worked example: merge a hypothesis change with its explanation

A shared statement says that every continuous real function on a compact interval is bounded. One collaborator changes the interval to $(0,1]$ while another adds an explanation using the extreme-value theorem. The text edits can occupy different lines and still be mathematically incompatible.

The function $f(x)=1/x$ is continuous on $(0,1]$ and unbounded there: given $B>0$, choose $0<x<\min(1,1/(B+1))$ to obtain $f(x)>B$. The missing endpoint is therefore substantive. A successful merge must either restore a compact interval and keep the extreme-value argument, or replace the claim with a separately justified statement. Combining the words without reconciling their hypotheses produces a false theorem.

Record the issue as a statement-level decision: the selected domain, the justification and the counterexample to the discarded generalization. Assign one owner to update the theorem and another to follow its dependent examples and introduction. This case illustrates why a mechanically clean source merge cannot establish mathematical compatibility. No software operation is needed to see the conflict.

*Source provenance: adapted from Euler's preserved Toolkit chapter Collaboration Tools, with the original six questions and full solutions retained, staged hints added, and this worked mathematical case written for the article. Software-version examples are historical source records. Updated 14 November 2026. CC BY-SA 4.0. Draft.*
