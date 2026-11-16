# Find the square of a mean-value point

*Medium · [Calculus](index.md)*

For $f(x)=x^3$ on \[0,1\], the mean value theorem gives c∈(0,1) with f′(c)=(f(1)−f(0))/(1−0). Find c².

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Compute the secant slope over the complete interval.

</details>

<details>
<summary>Hint 2</summary>

Set the derivative 3c² equal to that slope.

</details>

<details>
<summary>Worked solution</summary>

The requested square is exact rational even though c itself is irrational.

1. The endpoint secant slope is 1.
2. The mean-value equation is 3c²=1.
3. Thus c²=1/3; c=1/√3 lies in (0,1), so it is admissible.

</details>
