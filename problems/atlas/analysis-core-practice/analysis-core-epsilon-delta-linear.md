# An epsilon-delta proof for a linear function

*Difficulty 2 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 4 of 12*

Prove that $\lim_{x \to 2} (3x - 1) = 5$ using the epsilon-delta definition, and exhibit an explicit $\delta$ that works for $\varepsilon = 0.01$.

<details>
<summary>Hint 1</summary>

Simplify $|(3x - 1) - 5|$ and factor out the coefficient of $x$.

</details>

<details>
<summary>Hint 2</summary>

Choose $\delta$ to be $\varepsilon$ divided by that coefficient.

</details>

<details>
<summary>Worked solution</summary>

We must show: for every $\varepsilon > 0$ there is a $\delta > 0$ such that $0 < |x - 2| < \delta$ implies $|(3x-1) - 5| < \varepsilon$. Simplify the target: $|(3x - 1) - 5| = |3x - 6| = 3|x - 2|$. Given $\varepsilon > 0$, choose $\delta = \varepsilon/3$. Then $0 < |x - 2| < \delta$ implies $3|x-2| < 3\delta = \varepsilon$, as required. For $\varepsilon = 0.01$ the explicit choice is $\delta = 0.01/3 \approx 0.00333$. The proof works backward (find what $\delta$ must be) and then forward (verify the implication); presenting only the backward scratch work is a common error, because the definition demands the forward implication.

**Answer.** With $\delta = \varepsilon/3$ the implication holds; for $\varepsilon = 0.01$, $\delta = 0.01/3 \approx 0.00333$.

</details>

*Tags: limits-continuity, epsilon-delta, proof*
