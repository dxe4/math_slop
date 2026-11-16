# The rationals have measure zero

*Difficulty 3 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 8 of 12*

Prove that $\mathbb{Q} \cap [0, 1]$ has Lebesgue measure zero by exhibiting, for every $\varepsilon > 0$, a countable union of open intervals that covers the set and whose lengths sum to less than $\varepsilon$.

<details>
<summary>Hint 1</summary>

The rationals are countable, so enumerate them as $q_1, q_2, q_3, \dots$

</details>

<details>
<summary>Hint 2</summary>

Give the $n$-th point an interval whose length depends on $n$ so that the total length is a convergent geometric series you control.

</details>

<details>
<summary>Worked solution</summary>

Enumerate $\mathbb{Q} \cap [0, 1] = \{q_1, q_2, q_3, \dots\}$; this is possible because the rationals are countable. Given $\varepsilon > 0$, let $I_n$ be the open interval centered at $q_n$ of length $\varepsilon / 2^n$. Then the union $\bigcup_n I_n$ contains every $q_n$, hence covers the set, and the total length is $\sum_{n=1}^{\infty} \varepsilon / 2^n = \varepsilon \cdot 1 = \varepsilon$; using length $\varepsilon / 2^{n+1}$ instead makes the sum strictly less than $\varepsilon$. Since $\varepsilon$ was arbitrary, the infimum of such total lengths is $0$, which is exactly the definition of measure zero. The construction shows why countability is essential: the same argument fails for an uncountable set, which cannot be enumerated.

**Answer.** Cover $q_n$ by an interval of length $\varepsilon/2^n$; the total length $\varepsilon$ can be made arbitrarily small, so the set has measure zero.

</details>

*Tags: measure-theory, proof, countability*
