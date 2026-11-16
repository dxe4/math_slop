# Compute both centroid coordinates from slice moments

*Medium · [Calculus](index.md)*

A lamina has uniform area density on $0\le x\le1$, $0\le y\le x^2$. Return its centroid \[x̄,ȳ\].

```answer
{"answer":{"kind":"vector","expected":["3/4","3/10"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The area is the integral of the slice height x².

</details>

<details>
<summary>Hint 2</summary>

The y-moment of a vertical slice is half the square of its height.

</details>

<details>
<summary>Worked solution</summary>

Centroid coordinates normalize different first moments by the same area.

1. The area is A=∫₀¹x²dx=1/3. The moment giving x̄ is ∫₀¹x·x²dx=1/4.
2. The moment giving ȳ is ∫₀¹(x²)²/2 dx=1/10.
3. Thus x̄=(1/4)/(1/3)=3/4 and ȳ=(1/10)/(1/3)=3/10, giving \[3/4,3/10\].

</details>
