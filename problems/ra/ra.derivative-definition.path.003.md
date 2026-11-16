# Use a finite derivative to establish continuity

*Medium · [Real analysis](index.md)*

Assume $f^{\prime}(a)$ exists as a finite real number at an interior point a. Which argument establishes continuity at a? Select the mathematically correct statement from the four alternatives.

**Options**

1. The quotient can be evaluated by setting $h=0$ directly.
2. Every function with a bounded value at a is continuous there.
3. For $h\neq 0, f(a+h)-f(a)=h$ times the difference quotient; the factors tend to $0$ and finite f′(a), so the difference tends to $0$.
4. A finite derivative at a forces $f(a)=0$.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_h_0_f","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["the_quotient_can_be","every_function_with","for_h_0_f","a_finite_derivative"]}
```

<details>
<summary>Hint 1</summary>

Use an identity valid for nonzero h.

</details>

<details>
<summary>Hint 2</summary>

A product of a factor tending to zero and a factor with a finite limit tends to zero.

</details>

<details>
<summary>Worked solution</summary>

A finite derivative controls the unscaled function increment.

1. The difference-quotient limit is finite by hypothesis.
2. Multiplying that quotient by h recovers $f(a+h)-f(a)$, whose limit is therefore $0$. This is continuity at a.

</details>
