# Compute work on a genuinely spatial curve

*Medium · [Calculus](index.md)*

Let r(t)=(cos t,sin t,t), 0≤t≤1, and F(x,y,z)=(−y,x,z). Evaluate $\int_CF\cdot dr$ in the indicated increasing-t orientation.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the whole parametrization.

</details>

<details>
<summary>Hint 2</summary>

The first two dot-product terms combine using sin²+cos²=1.

</details>

<details>
<summary>Worked solution</summary>

Rotation and vertical change contribute separately to the work.

1. The velocity is (−sin t,cos t,1), while F(r(t))=(−sin t,cos t,t).
2. Their dot product is sin²t+cos²t+t=1+t.
3. The work is ∫₀¹(1+t)dt=3/2.

</details>
