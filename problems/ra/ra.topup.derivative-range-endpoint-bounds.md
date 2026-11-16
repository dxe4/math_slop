# Convert a two-sided derivative range into endpoint bounds

*Medium · [Real analysis](index.md)*

Let f be continuous on $[1,4]$, differentiable on (1,4), with -2&lt;=fprime(x)&lt;=3 there and f(1)=5. Return the sharp guaranteed lower and upper bounds on f(4).

```answer
{"answer":{"kind":"record_of_rationals","expected":{"lower":"-1","upper":"14"},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The mean value theorem multiplies a derivative value by interval length three.

</details>

<details>
<summary>Hint 2</summary>

Each extreme derivative can be realized by a linear function.

</details>

<details>
<summary>Worked solution</summary>

Derivative bounds become sharp endpoint-change bounds on an interval.

1. The mean value theorem gives f(4)-f(1)=3fprime(c) for some interior c.
2. The derivative range implies -6&lt;=f(4)-5&lt;=9, hence -1&lt;=f(4)&lt;=14.
3. The linear functions with slopes negative two and three through (1,5) attain the respective bounds, proving sharpness.

</details>
