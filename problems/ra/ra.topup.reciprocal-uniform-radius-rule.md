# Use a global product lower bound to choose a uniform radius

*Medium · [Real analysis](index.md)*

For $f(x)=1/x$ on \[2,infinity), use the estimate \|f(x)-f(y)\|&lt;=\|x-y\|/4. With tolerance epsilon=1/10, compute delta=4 epsilon from this sufficient rule. No largest radius is requested.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":5},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Both x and y lie in the same lower-bounded positive domain.

</details>

<details>
<summary>Hint 2</summary>

Choose delta so delta/4 equals the tolerance.

</details>

<details>
<summary>Worked solution</summary>

A domain-wide denominator bound yields a radius independent of the center point.

1. For x,y&gt;=2, the product xy is at least four, so \|1/x-1/y\|=\|x-y\|/(xy)&lt;=\|x-y\|/4.
2. The prescribed rule gives delta=4/10=2/5.
3. If the input difference is strictly below this delta, the output difference is strictly below one tenth, uniformly over the full domain.

</details>
