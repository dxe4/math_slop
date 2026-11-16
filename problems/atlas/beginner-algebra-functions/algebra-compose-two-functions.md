# Function composition is ordered

*Difficulty 2 of 5 · [Algebra and functions from first principles](index.md) · exercise 4 of 4*

Let $f(x) = 2x - 1$ and $g(x) = x^2 + 3$. Compute $f(g(-2))$ and $g(f(-2))$, then explain why the answers need not agree.

<details>
<summary>Hint 1</summary>

For $f(g(-2))$, evaluate $g(-2)$ first

</details>

<details>
<summary>Hint 2</summary>

For $g(f(-2))$, evaluate $f(-2)$ first

</details>

<details>
<summary>Worked solution</summary>

First, $g(-2) = (-2)^2 + 3 = 7$, so $f(g(-2)) = f(7) = 14 - 1 = 13$. In the other order, $f(-2) = -5$, so $g(f(-2)) = g(-5) = 25 + 3 = 28$. Composition means feeding one output into the other function, and changing which rule acts first generally changes the intermediate input and the final result.

**Answer.** $f(g(-2)) = 13$, while $g(f(-2)) = 28$.

</details>

*Tags: functions, composition, evaluation*
