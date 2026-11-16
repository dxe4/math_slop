# Compose two parallel reflections

*Difficulty 3 of 5 · [Geometry from proof to curvature audit studio](index.md) · exercise 3 of 12*

Reflect point (x,y) first across line $x=0$ and then across line $x=3$. Derive the composite map, classify it, and verify one distance invariant and its inverse.

<details>
<summary>Hint 1</summary>

Reflection in $x=a$ maps x to 2a-x

</details>

<details>
<summary>Hint 2</summary>

Apply the second rule to the already reflected coordinate

</details>

<details>
<summary>Hint 3</summary>

A translation inverse uses the opposite vector

</details>

<details>
<summary>Worked solution</summary>

The first reflection sends (x,y) to (-x,y). Reflection across $x=3$ then sends the x-coordinate to $6-(-x)=x+6$, so the composite is $T(x,y)=(x+6,y)$, translation six units right. For any P,Q, their difference after translation is $T(P)-T(Q)=P-Q$, so distance is preserved. Its inverse is $T^{-1}(x,y)=(x-6,y)$, which also equals the two reflections performed in reverse order. The translation length is twice the separation of the mirror lines.

**Answer.** The composite is $(x,y)\mapsto (x+6,y)$, a distance-preserving translation with inverse $(x,y)\mapsto (x-6,y)$.

</details>

*Tags: reflection, isometry, composition, symmetry*
