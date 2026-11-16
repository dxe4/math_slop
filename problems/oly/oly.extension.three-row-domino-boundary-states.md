# Derive a tiling count with an auxiliary corner-defect state

*Hard · [Original olympiad-style problems](index.md)*

How many tilings of a $3$ by $6$ rectangle use edge-aligned 1 by 2 dominoes, allowed in either orientation, with no overlaps or gaps?

```answer
{"answer":{"kind":"integer","expected":"41","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A direct one-column recurrence needs a state with a corner cell already occupied from the next column.

</details>

<details>
<summary>Hint 2</summary>

Count a full board and a board with one specified end corner removed, using reflection to identify the two corner orientations.

</details>

<details>
<summary>Worked solution</summary>

Boundary defects create a closed two-state recurrence.

1. Let A\_n count full three-row width-n boards and B\_n count such boards with one end corner removed. For the relevant even A indices and odd B indices, A\_0=1 and B\_1=1.
2. At a full right boundary, either three horizontal dominoes cross the last two columns, leaving A\_(n-2), or one vertical plus one horizontal leaves either reflected corner-defect state, giving A\_n=A\_(n-2)+2B\_(n-1). At a defect boundary, a vertical last pair leaves A\_(n-1), while the alternative forces a horizontal staircase and leaves B\_(n-2), giving B\_n=A\_(n-1)+B\_(n-2).
3. Thus A\_2=3, B\_3=4, A\_4=11, B\_5=15, and A\_6=11+2 times 15=41. The boundary cases are disjoint and exhaustive.

</details>
