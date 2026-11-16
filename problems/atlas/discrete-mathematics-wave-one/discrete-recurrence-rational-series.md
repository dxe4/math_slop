# Boundary terms in a generating function

*Difficulty 2 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 6 of 15*

Let a_0=2, a_1=5, and a_n=3a_(n-1)-2a_(n-2) for n at least 2. Derive the ordinary generating function A(x), including all boundary terms, and extract a closed form.

<details>
<summary>Hint 1</summary>

Write A-2-5x for the terms starting at n=2

</details>

<details>
<summary>Hint 2</summary>

The shifted sums are x(A-2) and x^2A

</details>

<details>
<summary>Worked solution</summary>

Let A=Σ_(n≥0)a_nx^n. Summing the recurrence from n=2 gives A-2-5x=3x(A-2)-2x^2A. Rearranging, A(1-3x+2x^2)=2-x, so A=(2-x)/[(1-x)(1-2x)]. Partial fractions give A=-1/(1-x)+3/(1-2x). Therefore a_n=-1+3·2^n. The numerator records the two initial conditions; omitting them would produce the wrong sequence.

**Answer.** A(x)=(2-x)/((1-x)(1-2x)); a_n=3·2^n-1.

</details>

*Tags: generating-functions, recurrence-relations, boundary*
