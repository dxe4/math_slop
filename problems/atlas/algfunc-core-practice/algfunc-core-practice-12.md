# From recurrence to closed form

*Difficulty 5 of 5 · [Algebra & Functions Core Practice](index.md) · exercise 12 of 12*

A sequence is defined by $a_0=3$ and $a_{n+1}=2a_n+1$ for $n\ge 0$. Find an explicit formula for $a_n$ and prove it by induction.

<details>
<summary>Hint 1</summary>

Compute the first few terms to guess the pattern: $a_0=3$, $a_1=7$, $a_2=15$, $a_3=31$.

</details>

<details>
<summary>Hint 2</summary>

Notice that each term is one less than a power of $2$.

</details>

<details>
<summary>Hint 3</summary>

Verify the base case $n=0$ and assume the formula for $n=k$ to prove it for $n=k+1$.

</details>

<details>
<summary>Worked solution</summary>

Computing terms: $a_0=3$, $a_1=2(3)+1=7$, $a_2=2(7)+1=15$, $a_3=2(15)+1=31$. These are $4-1$, $8-1$, $16-1$, $32-1$, suggesting $a_n=2^{n+2}-1$. Equivalently $a_n=4\cdot 2^{n}-1$. Proof by induction: Base case $n=0$: $2^{0+2}-1=4-1=3=a_0$. Inductive step: assume $a_k=2^{k+2}-1$. Then $a_{k+1}=2a_k+1=2(2^{k+2}-1)+1=2^{k+3}-2+1=2^{k+3}-1$, which matches the formula with $n=k+1$. By induction, $a_n=2^{n+2}-1$ for all $n\ge 0$.

**Answer.** $a_n=2^{n+2}-1$ (or $4\cdot 2^{n}-1$)

</details>

*Tags: sequences-recurrences, sequences-series, functional-equations*
