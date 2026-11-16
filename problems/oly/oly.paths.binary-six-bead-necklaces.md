# Count rotational orbits by fixed configurations

*Hard · [Original olympiad-style problems](index.md)*

How many necklaces of $6$ beads colored black or white exist if rotations are identified but reflections are considered different? Colors may repeat.

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

For each of the six rotations, count the colorings it fixes.

</details>

<details>
<summary>Hint 2</summary>

The average number of fixed colorings equals the number of rotational orbits, by counting orbit-stabilizer pairs.

</details>

<details>
<summary>Worked solution</summary>

A fixed-point average handles colorings with different rotational symmetries.

1. The identity rotation fixes all $2^6=64$ colorings. Rotations by one or five positions each fix 2; by two or four positions each fix 4; by three positions fixes 8.
2. The orbit-counting average is $(64+2+4+8+4+2)/6$. This follows because each orbit contributes six pairs of a coloring and a rotation fixing it.
3. The quotient is $84/6=14$.

</details>
