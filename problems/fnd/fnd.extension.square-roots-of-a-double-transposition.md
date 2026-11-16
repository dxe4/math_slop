# Count function square roots of a specified permutation

*Hard · [Foundations bridge](index.md)*

How many functions f:{1,2,3,4}→{1,2,3,4} satisfy $f(f(1))=2$, f(f(2))=1, f(f(3))=4 and f(f(4))=3? Count functions, not written cycle notations.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The square f² is bijective, forcing f itself to be bijective.

</details>

<details>
<summary>Hint 2</summary>

Examine which cycle types can square to the two transpositions (1 2)(3 4).

</details>

<details>
<summary>Worked solution</summary>

A prescribed iterate restricts both invertibility and the possible cycle structure of its root.

1. If f(x)=f(y), applying f gives f²(x)=f²(y), and the prescribed f² is injective, so x=y. A selfmap of this finite set is therefore a permutation.
2. Fixed points and two-cycles square to fixed points, and a three-cycle squares to a three-cycle. Thus f must be a four-cycle, whose opposite elements are exchanged by its square.
3. In a four-cycle beginning with 1, the opposite entry must be 2. The remaining positions are 3 and 4 in either order, giving (1 3 2 4) or (1 4 2 3).
4. These are two different functions and both square to (1 2)(3 4). Every four-cycle can be written beginning with 1, so the count is exactly 2.

</details>
