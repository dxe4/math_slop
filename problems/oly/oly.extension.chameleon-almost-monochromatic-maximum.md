# Combine a color-difference invariant with an attaining sequence

*Hard · [Original olympiad-style problems](index.md)*

There are $13$ red, 15 green and 17 blue chameleons. When two of different colors meet, both change to the third color. What is the largest possible number of chameleons of one color?

```answer
{"answer":{"kind":"integer","expected":"44","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Each meeting changes all three color counts by the same residue modulo three.

</details>

<details>
<summary>Hint 2</summary>

For attainability, allow a preparatory meeting that creates enough of the two colors you will then consume.

</details>

<details>
<summary>Worked solution</summary>

A modular obstruction excludes complete agreement, while a two-stage legal sequence reaches the next integer.

1. The difference of any two color counts is invariant modulo three: changes are a permutation of (-1,-1,2). Initially the three count residues are distinct, whereas an all-one-color state with total forty-five has all residues zero. Thus forty-five of one color is impossible.
2. First let one red and one blue meet; the counts become twelve red, seventeen green and sixteen blue.
3. Then make sixteen green-blue meetings. Each adds two red, leaving forty-four red, one green and zero blue. This attains forty-four, the largest value below the impossible total forty-five.

</details>
