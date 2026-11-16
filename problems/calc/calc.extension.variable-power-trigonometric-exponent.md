# Use logarithmic differentiation with a changing exponent

*Medium · [Calculus](index.md)*

For $f(x)=x^{\sin x}$ on x&gt;0, find f′(π/2), with radians.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Take a logarithm to separate the variable base and exponent.

</details>

<details>
<summary>Hint 2</summary>

After differentiating, evaluate both the function value and the logarithmic derivative.

</details>

<details>
<summary>Worked solution</summary>

A variable exponent requires differentiating both exponent and logarithm of the base.

1. Write log f=sin x log x. Then f′/f=cos x log x+sin x/x.
2. At x=π/2 the cosine term vanishes, sin x=1 and f(x)=π/2.
3. Thus f′(π/2)=(π/2)(2/π)=1.

</details>
