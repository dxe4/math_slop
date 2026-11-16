# Compare average graph rates on two equal-width intervals

*Medium · [Foundations bridge](index.md)*

For $f(x)=x^2$ return \[average rate on \[−1,1\], average rate on \[1,3\]\], where rate on \[a,b\] is (f(b)−f(a))/(b−a). No derivatives are required.

```answer
{"answer":{"kind":"vector","expected":["0","4"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Evaluate all endpoint outputs first.

</details>

<details>
<summary>Hint 2</summary>

Use each interval’s nonzero width as its denominator.

</details>

<details>
<summary>Worked solution</summary>

A nonlinear graph can have different secant slopes on equal-width intervals.

1. The needed outputs are f(−1)=1, f(1)=1 and f(3)=9.
2. The first rate is (1−1)/2=0 and the second is (9−1)/2=4.
3. Thus the vector is \[0,4\]; these are average coordinate rates, not a claim of one constant slope.

</details>
