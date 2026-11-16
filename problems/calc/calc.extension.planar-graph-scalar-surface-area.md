# Compute a scalar surface measure from a graph factor

*Medium · [Calculus](index.md)*

Let S be z=x+y above x≥0,y≥0,x+y≤1. Find $\operatorname{area}(S)^2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

For a graph, the area factor is √(1+z\_x²+z\_y²).

</details>

<details>
<summary>Hint 2</summary>

Multiply that constant by the base triangle area before squaring.

</details>

<details>
<summary>Worked solution</summary>

Surface area uses the norm of a vector-area element.

1. The graph partials are z\_x=z\_y=1, so the area factor is √3.
2. The base triangle has area 1/2, giving area(S)=√3/2.
3. Its square is 3/4.

</details>
