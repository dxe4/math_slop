# Defeat every pumping decomposition

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 4 of 15*

Use the pumping lemma to prove $L=\{0^n1^n:n\ge0\}$ is not regular. Make the quantifier order explicit and explain why exhibiting only one decomposition would be insufficient.

<details>
<summary>Hint 1</summary>

Assume a pumping length p

</details>

<details>
<summary>Hint 2</summary>

Choose $0^p1^p$

</details>

<details>
<summary>Hint 3</summary>

The pumpable segment lies among the first p symbols

</details>

<details>
<summary>Worked solution</summary>

Assume $L$ regular. Then there exists $p$ such that every $w\in L$ of length at least $p$ has some decomposition $w=xyz$ with $|xy|\le p$, $|y|>0$, and $xy^iz\in L$ for all $i\ge0$. Choose $w=0^p1^p$. For every decomposition satisfying the length bounds, $y$ consists of $k\ge1$ zeros because the first $p$ symbols are all zero. Pump $i=0$. The result has $p-k$ zeros and $p$ ones, so it is not in $L$, contradicting the promised decomposition. The proof must defeat every allowed decomposition because after the proof chooses $w$, the lemma is free to choose whichever $x,y,z$ works; selecting one convenient failed split does not rule out another.

**Answer.** Every legal y is a nonempty zero block; pumping it away breaks equality, contradicting regularity.

</details>

*Tags: automata, pumping lemma, nonregular language, quantifiers*
