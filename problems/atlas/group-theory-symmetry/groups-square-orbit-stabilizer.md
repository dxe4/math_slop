# Count with orbit-stabilizer

*Difficulty 3 of 5 · [Groups as symmetry and composition](index.md) · exercise 4 of 4*

The eight symmetries of a square act on its four vertices. For one chosen vertex $v$, find its orbit and stabilizer sizes, identify the stabilizing symmetries, and verify orbit-stabilizer.

<details>
<summary>Hint 1</summary>

Any vertex can be carried to any other vertex

</details>

<details>
<summary>Hint 2</summary>

Only two square symmetries fix a specified vertex

</details>

<details>
<summary>Worked solution</summary>

Rotations carry $v$ to each of the four vertices, so its orbit has size $4$. The identity fixes $v$. The reflection across the diagonal through $v$ and the opposite vertex also fixes $v$. No nontrivial rotation fixes a vertex, and the other three reflections move it, so the stabilizer has size $2$. Orbit-stabilizer gives $|\operatorname{Orb}(v)|\cdot|\operatorname{Stab}(v)|=4\cdot2=8$, exactly the order of the square's symmetry group.

**Answer.** Orbit size $4$; stabilizer $\{\text{identity},\text{ reflection in }v\text{'s diagonal}\}$ has size $2$; $4\cdot2=8$.

</details>

*Tags: group action, orbit-stabilizer, symmetry*
