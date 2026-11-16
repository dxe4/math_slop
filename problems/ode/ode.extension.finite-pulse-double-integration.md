# Separate a forcing pulse from the free drift after it

*Medium · [Differential equations problems](index.md)*

Let $y''(t)=1$ for 0&lt;t&lt;1 and y''(t)=0 for t&gt;1, with y(0)=y'(0)=0 and y,y' continuous at t=1. Find y(2).

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Exact requested invariant or response only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Solve on the first interval and carry both state values across the switch.

</details>

<details>
<summary>Hint 2</summary>

After the pulse, the derivative stays constant rather than returning to zero.

</details>

<details>
<summary>Worked solution</summary>

A finite acceleration pulse leaves a continuing velocity.

1. For 0&lt;=t&lt;=1, y(t)=t^2/2 and yprime(t)=t.
2. At t=1 the state is y=1/2 and yprime=1; continuity carries these into the unforced interval.
3. For t&gt;=1, y=1/2+(t-1), so y(2)=3/2.

</details>
