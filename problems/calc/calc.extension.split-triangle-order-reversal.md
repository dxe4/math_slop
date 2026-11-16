# Combine two vertical pieces into one horizontal integral

*Medium · [Calculus](index.md)*

Let I=∫₀¹∫₀ˣeʸdy dx+∫₁²∫₀^{2−x}eʸdy dx. Find $(I+4)/e$ by describing the common triangular region.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

At a height y∈\[0,1\], the horizontal interval runs from x=y to x=2−y.

</details>

<details>
<summary>Hint 2</summary>

The horizontal width is 2−2y.

</details>

<details>
<summary>Worked solution</summary>

Changing slicing direction can combine a split description of one region.

1. The two pieces form 0≤y≤1, y≤x≤2−y. Thus I=∫₀¹(2−2y)eʸdy.
2. Now ∫₀¹eʸdy=e−1 and ∫₀¹y eʸdy=1 by parts. Hence I=2(e−1)−2=2e−4.
3. Therefore (I+4)/e=2.

</details>
