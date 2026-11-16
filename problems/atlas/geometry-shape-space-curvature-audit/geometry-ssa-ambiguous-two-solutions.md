# Resolve the SSA ambiguous case

*Difficulty 4 of 5 · [Geometry from proof to curvature audit studio](index.md) · exercise 2 of 12*

A Euclidean triangle has $A=30$ degrees, side $a=5$ opposite A, and side $b=8$ opposite B. Find every possible angle B and corresponding third angle C, then approximate side c. Explain why SSA did not determine one congruence class.

<details>
<summary>Hint 1</summary>

The sine law gives sin $B=8$ sin30 degrees / $5=0.8$

</details>

<details>
<summary>Hint 2</summary>

Both B and 180 degrees minus B can have sine 0.8

</details>

<details>
<summary>Hint 3</summary>

Use c/sin $C=a/\sin$ A

</details>

<details>
<summary>Worked solution</summary>

The principal value is $B_1=\arcsin(0.8)\approx53.130^\circ$. Its supplement is $B_2\approx126.870^\circ$. Both are possible because $A+B<180^\circ$. The corresponding angles are $C_1=180^\circ-30^\circ-53.130^\circ=96.870^\circ$ and $C_2=180^\circ-30^\circ-126.870^\circ=23.130^\circ$. Since $a/\sin A=5/(1/2)=10$, $c_1=10\sin(96.870^\circ)\approx9.928$ and $c_2=10\sin(23.130^\circ)\approx3.928$. The two triangles are not congruent. The geometric circle used to place the endpoint of side $a$ meets the remaining ray twice; SSA lacks the included-angle or third-side information that would choose one intersection.

**Answer.** $B\approx 53.130$ degrees with $C\approx 96.870$ degrees and $c\approx 9.928$, or $B\approx 126.870$ degrees with $C\approx 23.130$ degrees and $c\approx 3.928$.

</details>

*Tags: SSA, law of sines, congruence, ambiguous case*
