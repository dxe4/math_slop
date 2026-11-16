# Convert a supplied Holder modulus into a sufficient radius

*Easy · [Real analysis](index.md)*

A real-valued function satisfies $|f(x)-f(y)|\le3\sqrt{|x-y|}$ on its domain. For tolerance epsilon=3/10, use the prescribed sufficient rule delta=(epsilon/3)^2. Find delta.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":100},"checker_scope":"Exact requested local variation or sufficient modulus only; no full continuity argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The square root is inverted by squaring the ratio.

</details>

<details>
<summary>Hint 2</summary>

This asks for the stated sufficient radius, not its possible optimum.

</details>

<details>
<summary>Worked solution</summary>

A nonlinear modulus gives a uniform radius independent of the two points.

1. The ratio epsilon/3 is (3/10)/3=1/10.
2. Squaring gives delta=1/100.
3. If \|x-y\|&lt;delta, then 3\*sqrt(\|x-y\|)&lt;3/10 as required.

</details>
