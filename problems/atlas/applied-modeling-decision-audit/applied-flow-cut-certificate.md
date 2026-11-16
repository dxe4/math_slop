# Certify a relief-network maximum flow

*Difficulty 3 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 4 of 12*

A source S has outgoing capacities 4 to A and 3 to B. You construct a feasible source-to-sink flow of value 7, with conservation at every intermediate node. Prove it is maximum and state what increasing a downstream edge alone may fail to change.

<details>
<summary>Hint 1</summary>

Use the cut containing only S

</details>

<details>
<summary>Hint 2</summary>

A cut is an upper bound

</details>

<details>
<summary>Hint 3</summary>

Compare a feasible lower bound with the upper bound

</details>

<details>
<summary>Worked solution</summary>

The cut {S} has capacity $4+3=7$, so every feasible source-to-sink flow has value at most 7: all net source flow must cross those two edges and neither may exceed capacity. The constructed feasible flow shows value at least 7 is attainable. Matching bounds prove the maximum is exactly 7 and this source cut is minimum. Increasing a downstream edge without increasing either source edge cannot raise maximum flow, because the same capacity-7 cut remains an upper bound.

**Answer.** Maximum flow is 7 by equality with the source cut; downstream expansion alone cannot overcome that unchanged bottleneck.

</details>

*Tags: network science, maximum flow, minimum cut, certificate*
