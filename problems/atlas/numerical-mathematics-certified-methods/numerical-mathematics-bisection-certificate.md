# Bisection with a location certificate

*Difficulty 2 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 3 of 16*

Let `f(x)=cos x-x` on `[0,1]`. Justify that a root exists, and give the bracket width and maximum midpoint location error after ten bisections. State what additional fact would be needed to claim the root is unique.

<details>
<summary>Hint 1</summary>

Use continuity and endpoint signs

</details>

<details>
<summary>Hint 2</summary>

Each bisection halves the interval width

</details>

<details>
<summary>Worked solution</summary>

The function is continuous because cosine and the identity function are continuous. At zero, `f(0)=1>0`; at one, `f(1)=cos 1-1<0`. The intermediate-value theorem therefore gives at least one root in `(0,1)`. Starting width is one, so after ten bisections the retained bracket has width `2^-10=1/1024`. Its midpoint is at distance at most half that width, `1/2048`, from some root in the bracket. Existence plus a narrow bracket does not alone prove uniqueness. One sufficient argument is that `f'(x)=-sin x-1<0` throughout `[0,1]`; strict decrease permits at most one zero. The derivative argument must be stated separately from bisection's location certificate.

**Answer.** A root exists; width is 1/1024 and midpoint error is at most 1/2048. Strict monotonicity proves uniqueness.

</details>

*Tags: root-finding, bisection, certificate*
