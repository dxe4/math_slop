# Find a fixed-point limit only after proving convergence

*Hard · [Real analysis](index.md)*

Let $x_1=3$ and x\_(n+1)=(x\_n+4/x\_n)/2. Find the real limit, with positivity, bounds and monotonicity justified in the model solution.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Show values at least two remain at least two.

</details>

<details>
<summary>Hint 2</summary>

Compare the next value with the current value on that invariant range.

</details>

<details>
<summary>Worked solution</summary>

An invariant positive range makes the fixed-point equation legitimate after monotone convergence.

1. For x&gt;=2, the next value satisfies (x+4/x)/2-2=(x-2)^2/(2x)&gt;=0. Also its difference from x is (4-x^2)/(2x)&lt;=0.
2. Starting from three, the sequence therefore stays at least two and decreases, so it converges to some L&gt;=2.
3. Continuity of the recurrence on that positive range gives L=(L+4/L)/2, hence L^2=4 and L=2.

</details>
