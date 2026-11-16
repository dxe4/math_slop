# A continuous image interval

*Difficulty 3 of 5 · [Topology and modern geometry](index.md) · exercise 2 of 8*

Let X be a nonempty compact connected topological space and $f:X\to R$ a continuous function. Prove that f(X) is a closed bounded interval [m,M] and that every value between m and M is attained. Identify exactly where compactness, connectedness, and nonemptiness are used.

<details>
<summary>Hint 1</summary>

Continuous images preserve compactness and connectedness

</details>

<details>
<summary>Hint 2</summary>

Characterize compact and connected subsets of R

</details>

<details>
<summary>Hint 3</summary>

Nonemptiness lets minima and maxima exist as actual points

</details>

<details>
<summary>Worked solution</summary>

Continuity and compactness make f(X) compact in R. By Heine–Borel it is closed and bounded; because X is nonempty, so is f(X), and compactness implies it contains its infimum m and supremum M. Continuity and connectedness make f(X) connected. The connected subsets of R are intervals, so containing m and M forces f(X) to contain every number between them. Hence $f(X)=[m,M]$. Compactness supplies boundedness and attained endpoints, connectedness fills the gaps, and nonemptiness ensures the endpoint quantities refer to a nonempty set.

**Answer.** $f(X)=[m,M]$: compactness gives attained extrema, connectedness gives all intermediate values, and nonemptiness makes the extrema meaningful.

</details>

*Tags: compactness, connectedness, continuous image*
