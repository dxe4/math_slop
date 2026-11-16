# Odd sums by induction

*Difficulty 2 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 5 of 15*

Prove by induction that the sum of the first n positive odd integers is n^2 for every integer n at least 1. Identify the exact use of the inductive hypothesis.

<details>
<summary>Hint 1</summary>

The nth odd integer is 2n-1

</details>

<details>
<summary>Hint 2</summary>

Add 2(k+1)-1 to the assumed sum k^2

</details>

<details>
<summary>Worked solution</summary>

For n=1, the sum is 1=1^2. Assume for an arbitrary k≥1 that 1+3+...+(2k-1)=k^2. The sum through the next odd integer is k^2+[2(k+1)-1] by the inductive hypothesis. This simplifies to k^2+2k+1=(k+1)^2. Thus the base and propagation step establish the identity for every n≥1. The hypothesis is used only when the previous partial sum is replaced by k^2.

**Answer.** Base n=1; the step gives k^2+2k+1=(k+1)^2.

</details>

*Tags: induction, proof, induction-recursion*
