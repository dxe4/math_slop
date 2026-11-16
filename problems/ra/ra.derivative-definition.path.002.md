# Compare the two sides of an absolute-value corner

*Medium · [Real analysis](index.md)*

Let $f(x)=|x|$ on R. What happens to the difference quotient at $0$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Both one-sided limits are 0, so $f^{\prime}(0)=0$.
2. For $h>0$ the quotient is $1$ and for $h<0$ it is −1; the derivative at $0$ does not exist, although f is continuous there.
3. The derivative exists and equals $1$ because distances are nonnegative.
4. The derivative is −1 because only negative increments are needed.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_h_0_the","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["both_one_sided_limit","for_h_0_the","the_derivative_exist","the_derivative_is_1"]}
```

<details>
<summary>Hint 1</summary>

At $0$ the quotient is $|h|/h$.

</details>

<details>
<summary>Hint 2</summary>

A two-sided limit requires matching values from both signs of h.

</details>

<details>
<summary>Worked solution</summary>

Continuity can survive a corner where the derivative limit fails.

1. For positive h, \|h\|/h=1. For negative h, \|h\|/h=−1.
2. These one-sided limits differ, preventing a derivative. Yet $||x|-0|=|x|$ proves continuity at $0$.

</details>
