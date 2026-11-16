# Construct a continuous function with no secant-matching derivative

*Hard · [Real analysis](index.md)*

Construct a continuous polygonal function f on $[0,1]$ with $f(0)=0$ and $f(1)=1$ for which NO interior point where $f^{\prime}$ exists satisfies the Mean Value Theorem conclusion $f'(c)=\frac{f(1)-f(0)}{1-0}$. Submit exact rational vertices, one x,y pair per line without parentheses, with strictly increasing x coordinates from $0,0$ to $1,1$; connect consecutive vertices by straight segments. Negative heights and redundant collinear vertices are allowed. The format permits $2$–$17$ vertices, at most $80$ digits per coordinate, $512$ digits total and $2,048$ characters. In your optional explanation, check the whole function, including any supplied vertex where a derivative exists, and explain which theorem hypothesis fails. A corner somewhere is not by itself enough to ensure that the conclusion fails. The arbitrary-vertex construction interaction is newly authored; see Jiří Lebl, Basic Analysis §4.2 for the theorem and the classical absolute-value obstruction.

*Source: Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §4.2 (https://www.jirka.org/ra/html/sec\_mvt.html). Mathematical background reference to the mean value theorem and absolute-value obstruction. Euler authors the arbitrary-vertex construction interaction and explanations; this citation does not claim copied source prose or a figure. CC BY-SA 4.0 is selected from the source’s dual licence for adapted components; new Euler educational material uses the same licence: https://creativecommons.org/licenses/by-sa/4.0/*

```answer
{"answer":{"kind":"mvt_polyline_with_open_reasoning","expected_constraints":{"model":"unit_secant_avoidance"},"checker_scope":"Checks every segment of a valid ordered rational polyline in the declared format, accepting exactly those with no segment of slope 1. Existing derivatives at collinear vertices introduce no additional slopes. All permitted rational heights, redundant collinear nodes and valid vertex counts are allowed. Malformed graphs/resource excess are invalid; valid graphs with any slope-1 segment are incorrect. Written continuity, differentiability and counterexample arguments remain unassessed. The checker assesses this complete structured rule within the declared finite polygonal format. It does not assess the optional explanation or claim that all possible continuous counterexamples must be polygonal."}}
```

<details>
<summary>Hint 1</summary>

First compute the endpoint secant from the fixed endpoints. On each open straight segment, the derivative is that segment’s slope.

</details>

<details>
<summary>Hint 2</summary>

Inspect every segment, not only a corner. At a supplied interior vertex, compare the two one-sided slopes; they can agree even when the vertex is explicitly listed.

</details>

<details>
<summary>Worked solution</summary>

A failed theorem hypothesis permits counterexamples, but the conclusion must be checked separately on the entire constructed function.

1. The fixed endpoints give secant slope $\frac{f(1)-f(0)}{1-0}=1$. Linear interpolation is continuous across each shared vertex and on the closed interval.
2. Every open segment has derivative equal to its rise divided by its positive run. Hence a graph fails the requested conclusion exactly when every segment has rise different from run, equivalently slope different from $1$.
3. At an interior vertex, unequal neighboring slopes give no derivative. If the slopes agree, the derivative exists and equals their common segment slope. Such redundant collinear vertices are allowed and add no new derivative values.
4. For example, vertices $(0,0),(1/4,1/2),(3/4,-1/2),(1,1)$ have slopes $2,-2,6$. None equals $1$; their corners lack derivatives. Another accepted graph $(0,0),(1/4,1/2),(1/2,1),(1,1)$ has slopes $2,2,0$ and an existing nonunit derivative at the redundant vertex.
5. A graph can have corners and still realize secant slope $1$ elsewhere. For example $(0,0),(1/4,1/4),(1/2,0),(1,1)$ has a slope-$1$ first segment, so $c=1/8$ satisfies the conclusion and this graph fails the requested counterexample.
6. The width-weighted mean of all segment slopes is the global slope $1$. If every slope differs from $1$, some slopes must lie below $1$ and some above $1$; at least one genuine corner must occur. Thus the constructed example fails interior differentiability, while preserving continuity. This is consistent with the Mean Value Theorem.

</details>
