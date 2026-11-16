# Use close pairs to refute a global quadratic radius

*Medium · [Real analysis](index.md)*

For $f(x)=x^{2}$ on R, let $x_{n}=n$ and $y_{n}=n+1/n$. Which conclusion follows? Select the mathematically correct statement from the four alternatives.

**Options**

1. The input distance is $1/n\to 0$, while the output distance is 2+1/n²≥2, so f is not uniformly continuous.
2. The output distance tends to 0, so f is uniformly continuous.
3. The pairs show that f is discontinuous at every fixed real point.
4. Uniform continuity fails because the displayed output distances are unbounded.

```answer
{"answer":{"kind":"multiple_choice","expected":"the_input_distance_i","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["the_input_distance_i","the_output_distance","the_pairs_show_that","uniform_continuity_f"]}
```

<details>
<summary>Hint 1</summary>

Expand $(n+1/n)^{2}-n^{2}$.

</details>

<details>
<summary>Hint 2</summary>

A fixed positive output separation contradicts one global delta for $\varepsilon =1$.

</details>

<details>
<summary>Worked solution</summary>

Close input pairs drifting through the domain can defeat a global radius.

1. The input gap is $1/n$. The output gap is $(n+1/n)^{2}-n^{2}=2+1/n^{2}$.
2. Given any $\delta >0$, choose n large enough that $1/n<\delta$. The output gap still exceeds $1$, violating uniform continuity at $\varepsilon =1$.

</details>
