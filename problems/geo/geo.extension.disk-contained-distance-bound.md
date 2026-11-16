# Bound the distance between two disk points

*Easy · [Geometry and trigonometry problems](index.md)*

Two points lie in a closed disk of radius $5$. By triangle inequality through the center, what is the greatest possible distance between them?

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Each point is at most five units from the center.

</details>

<details>
<summary>Hint 2</summary>

The bound can be attained at opposite ends of a diameter.

</details>

<details>
<summary>Worked solution</summary>

Use a center-based distance bound and attain it.

1. For center $O$, $PQ\le PO+OQ\le5+5=10$.
2. Choose $P,Q$ as antipodal boundary points.
3. Their distance is $10$, so the bound is the actual maximum.

</details>
