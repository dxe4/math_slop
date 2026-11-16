# Recognize the least-upper-bound test

*Medium · [Real analysis](index.md)*

Let $S\subseteq R$ be nonempty and $s\in R$. Which condition is equivalent to s=sup S? Select the mathematically correct statement from the four alternatives.

**Options**

1. s is larger than at least one element of S.
2. s is an upper bound, and for every $\varepsilon >0$ some $x\in S$ satisfies $s-\varepsilon <x$.
3. $s\in S$, whether or not other elements exceed s.
4. s is an upper bound and $s-\varepsilon$ is also an upper bound for every $\varepsilon >0$.

```answer
{"answer":{"kind":"multiple_choice","expected":"s_is_an_upper","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["s_is_larger_than","s_is_an_upper","ss_whether_or_not","bound_for_every_0"]}
```

<details>
<summary>Hint 1</summary>

A supremum must first bound every element.

</details>

<details>
<summary>Hint 2</summary>

If a smaller number were also an upper bound, a positive gap would contradict the approximation requirement.

</details>

<details>
<summary>Worked solution</summary>

The arbitrary-gap condition rules out every smaller upper bound.

1. If s is the supremum, $s-\varepsilon$ cannot be an upper bound, so some element exceeds it.
2. Conversely, if the stated approximation property holds, every $t<s$ is exceeded by an element after taking $\varepsilon =s-t$. Therefore t is not an upper bound, establishing minimality of s.

</details>
