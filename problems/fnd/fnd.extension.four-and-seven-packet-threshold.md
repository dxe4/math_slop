# Prove a sharp threshold for two packet sizes

*Hard · [Foundations bridge](index.md)*

Using packets of 4 or 7 objects, prove 17 objects cannot be assembled, but every integer total $N\ge18$ can be. Packets must be used whole, with nonnegative integer counts. Conclude the largest unattainable nonnegative total.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For total 17 only zero, one or two size-7 packets are possible.

</details>

<details>
<summary>Hint 2</summary>

Build four consecutive totals beginning at 18, then add packets of size 4.

</details>

<details>
<summary>Model proof</summary>

A block of consecutive attainable residues provides a proof for every later total.

1. If 4a+7b=17 with a,b≥0 integers, b is 0,1 or 2. The remainders 17,10,3 are none divisible by 4, so 17 is impossible.
2. The next four totals have constructions 18=7+7+4, 19=7+4+4+4, 20=4+4+4+4+4 and 21=7+7+7.
3. For every N≥18, divide N−18 by 4 as 4q+r with 0≤r≤3. Start with the displayed construction for 18+r and add q size-4 packets.
4. Thus all totals at least 18 are possible, while 17 is not. The largest unattainable nonnegative total is exactly 17.

**Self-assessment rubric**

- Exhausts the admissible numbers of size-7 packets to rule out 17.
- Gives valid constructions for all four totals 18 through 21.
- Uses quotient and remainder modulo 4 to construct every N≥18 and concludes sharpness.

</details>
