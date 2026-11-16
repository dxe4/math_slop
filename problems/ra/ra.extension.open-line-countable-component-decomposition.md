# Describe every open subset of the line by countably many intervals

*Hard · [Real analysis](index.md)*

Prove every open set $U\subseteq\mathbb R$ is a union of at most countably many pairwise disjoint open intervals, allowing unbounded intervals. Explain how rational density supplies countability and how the empty set is covered.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For x in U, unite all open intervals inside U that contain x.

</details>

<details>
<summary>Hint 2</summary>

Two resulting maximal intervals either coincide or are disjoint; assign one rational to each.

</details>

<details>
<summary>Model proof</summary>

The order of the line gives interval components, and a countable dense set labels them.

1. For each x in U, take the union I\_x of all open intervals containing x and contained in U. Such intervals exist by openness. Since they share x, their union is an open interval, possibly unbounded, and it is maximal among intervals inside U containing x.
2. If I\_x and I\_y intersect, their union is again an interval contained in U. Maximality gives I\_x=I\_y. Thus the distinct intervals are pairwise disjoint and cover U.
3. Fix an enumeration of the rationals. Each nonempty open interval contains a rational by density; assign it the first such rational in the enumeration. Disjoint intervals receive different rational labels, making the family at most countable. If U is empty, use the empty family, whose union is empty.

**Self-assessment rubric**

- Construct interval components and justify their openness and maximality.
- Prove intersecting components coincide and that they cover U.
- Give an injective rational labeling, allowing unbounded intervals and the empty family.

</details>
