# Propagate a measurement interval through a cube

*Difficulty 3 of 5 · [Powers, roots, and scale solved studio](index.md) · exercise 11 of 12*

A cube's side `s` is known to satisfy `1.99 m <= s <= 2.01 m`. Give certified lower and upper bounds for its volume, calculate both endpoint cubes, and explain why simply reporting `8 m^3` hides relevant information.

<details>
<summary>Hint 1</summary>

Cubing is increasing for positive lengths

</details>

<details>
<summary>Hint 2</summary>

Use `(2-0.01)^3` and `(2+0.01)^3`

</details>

<details>
<summary>Worked solution</summary>

For positive inputs the cube function is increasing, so `1.99^3<=V<=2.01^3`. Expanding gives `1.99^3=(2-0.01)^3=8-0.12+0.0006-0.000001=7.880599`, while `2.01^3=(2+0.01)^3=8+0.12+0.0006+0.000001=8.120601`. Hence `7.880599 m^3<=V<=8.120601 m^3`. The central calculation `2^3=8` is a useful estimate, but it does not communicate the uncertainty inherited from the side measurement; volume contains three length factors, so the interval must be propagated through the cube.

**Answer.** `7.880599 m^3<=V<=8.120601 m^3`; `8 m^3` is only the central estimate, not a certified exact volume.

</details>

*Tags: powers-roots, bounds, measurement, scale-factor*
