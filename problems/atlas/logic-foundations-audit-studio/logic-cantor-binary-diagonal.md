# Defeat an alleged list by diagonalization

*Difficulty 3 of 5 · [Logic and foundations audit studio](index.md) · exercise 3 of 11*

Suppose s₀,s₁,s₂,… is claimed to list every infinite binary sequence, where s_n(k) is the kth bit of the nth sequence. Define a binary sequence d that is guaranteed not to occur on the list, prove the claim, and translate the result into a statement about the power set of N.

<details>
<summary>Hint 1</summary>

Change the nth bit of the nth row

</details>

<details>
<summary>Hint 2</summary>

To show d differs from s_n, inspect coordinate n

</details>

<details>
<summary>Hint 3</summary>

Identify a subset of N with its characteristic binary sequence

</details>

<details>
<summary>Worked solution</summary>

Define $d(n)=1-s_n(n)$. For any fixed n, d and s_n differ at coordinate n, so $d\ne s_n$. Therefore d is absent from the alleged complete list, no matter how the rows were chosen or whether some rows repeat. Binary sequences correspond bijectively to subsets of N by sending a sequence to the set of positions where its bit is 1. Hence no map $N\to P(N)$ is surjective and P(N) is uncountable. The argument proves non-surjectivity, not merely that one particular ordering was inconvenient.

**Answer.** Take $d(n)=1-s_n(n)$; it differs from row n at position n, so binary sequences—and therefore P(N)—cannot be enumerated by N.

</details>

*Tags: Cantor diagonal, power set, uncountability*
