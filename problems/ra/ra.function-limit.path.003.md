# Keep the punctured domain in a cancellation proof

*Medium · [Real analysis](index.md)*

Let $f(x)=(x^{2}-4)/(x-2)$ on $D=R\setminus \{2\}$. Which argument proves its limit at $2$ is $4$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Substitute $x=2$ into the original formula and divide $0$ by $0$.
2. There is no limit because $2$ is outside the domain.
3. For $x\neq 2, f(x)=x+2$. Given $\varepsilon >0$ choose $\delta =\varepsilon$; then $0<|x-2|<\delta$ implies \|$f(x)-4$\|=$|x-2|<\varepsilon$.
4. The original function is defined at $2$ and cancellation gives its value $f(2)=4$.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_x_2_f","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["substitute_x_2_into","there_is_no_limit","for_x_2_f","the_original_functio"]}
```

<details>
<summary>Hint 1</summary>

A limit uses nearby domain points, not necessarily a value at the approach point.

</details>

<details>
<summary>Hint 2</summary>

Cancellation is valid on the stated punctured domain.

</details>

<details>
<summary>Worked solution</summary>

An equal rule on a punctured neighborhood transfers a local limit without restoring an excluded input.

1. Factor $x^{2}-4=(x-2) (x+2)$, giving $f(x)=x+2$ when $x\neq 2$.
2. The exact output error is \|x−2\|, so choosing $\delta =\varepsilon$ verifies every permitted nearby input.

</details>
