# Spanning trees complete four

*Medium · [Original Putnam-style training](index.md)*

How many labelled spanning trees does the complete graph $K_4$ have? Give a direct count by degree types.

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A tree on four vertices is either a star or a path.

</details>

<details>
<summary>Hint 2</summary>

Count each shape using labelled vertices without double counting reversal.

</details>

<details>
<summary>Worked solution</summary>

These are the only tree degree patterns on four vertices, so the total is $4+12=16$.

1. A star is determined by its center, giving four labelled stars.
2. A path is determined by an ordering of all four labels, but reversal gives the same undirected path, so there are $4!/2=12$ paths.
3. These are the only tree degree patterns on four vertices, so the total is $4+12=16$.

</details>
