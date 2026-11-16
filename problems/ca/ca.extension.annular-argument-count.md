# Subtract the inner winding before adding annular poles

*Easy · [Complex analysis problems](index.md)*

A meromorphic f is nonzero and finite on both circles bounding an annulus. Traversing each circle separately counterclockwise gives image windings $5$ on the outer circle and 2 on the inner. There are four poles in the annulus, counted with order. Find its zero count with multiplicity.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The positively oriented annular boundary reverses the inner circle.

</details>

<details>
<summary>Hint 2</summary>

The annular winding is a difference of the two separately counterclockwise windings.

</details>

<details>
<summary>Worked solution</summary>

Boundary orientation gives the net winding for a multiply bounded region.

1. The positively oriented annulus has net image winding five minus two, or three.
2. The argument principle therefore gives Z-4=3 in that annulus.
3. The zero count is seven, with multiplicity.

</details>
