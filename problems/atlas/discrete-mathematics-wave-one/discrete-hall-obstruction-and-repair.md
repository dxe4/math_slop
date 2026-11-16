# Hall obstruction and one repair

*Difficulty 3 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 7 of 15*

Projects A,B,C accept reviewers as follows: N(A)={1,2}, N(B)={1,2}, N(C)={2}. Prove that no distinct-reviewer assignment covers all projects. Then add one allowed project-reviewer edge that makes a covering matching possible and display it.

<details>
<summary>Hint 1</summary>

Test the subset of all three projects

</details>

<details>
<summary>Hint 2</summary>

A new reviewer 3 must enter the neighborhood of at least one project

</details>

<details>
<summary>Worked solution</summary>

For S={A,B,C}, the neighborhood is {1,2}, so |N(S)|=2<3=|S|. Hall's necessary condition fails, proving no covering matching exists. Add edge C-3, so N(C)={2,3}. A covering matching is A-1, B-2, C-3. The modification does more than increase a degree: it removes the exhibited neighborhood shortage and supplies an explicit assignment.

**Answer.** S={A,B,C} violates Hall; adding C-3 permits matching {A1,B2,C3}.

</details>

*Tags: matching, hall, graph-theory*
