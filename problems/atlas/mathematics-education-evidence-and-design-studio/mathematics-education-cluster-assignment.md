# Count the assignments, not only the learners

*Difficulty 3 of 5 · [Mathematics education evidence and design studio](index.md) · exercise 7 of 12*

Eight schools, four per condition, are randomly assigned to two professional-learning programs. Researchers analyze 1,200 learner scores as if all learners were independently randomized and report a very narrow interval. Diagnose the inference problem and outline a repair.

<details>
<summary>Hint 1</summary>

The intervention was randomized eight times

</details>

<details>
<summary>Hint 2</summary>

Learners in a school share implementation and context

</details>

<details>
<summary>Worked solution</summary>

The assignment unit is the school, so there are eight independent randomization units, not 1,200. Outcomes within a school can be correlated through teachers, peers, leadership, and shared implementation. An analysis treating learners as independently assigned can severely understate uncertainty. The repair respects clustering in design and analysis, reports school-level assignment and attrition, uses a cluster-aware estimator or randomization analysis, and acknowledges that four clusters per arm provide limited precision and weak support for modeling many covariates. More learners within the same eight schools do not substitute for more assigned schools.

**Answer.** Analyze at or account for the eight randomized clusters; the original learner-independent interval is not defensible.

</details>

*Tags: mathematics-education-research, cluster-randomization, uncertainty*
