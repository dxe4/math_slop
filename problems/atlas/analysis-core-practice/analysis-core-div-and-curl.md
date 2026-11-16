# Divergence and curl of a polynomial field

*Difficulty 3 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 7 of 12*

Let $F(x, y, z) = (xy,\; yz,\; zx)$. Compute $\operatorname{div} F$ and $\operatorname{curl} F$. Is $F$ conservative? Is $F$ incompressible (divergence-free)?

<details>
<summary>Hint 1</summary>

$\operatorname{div} F = \partial_x P + \partial_y Q + \partial_z R$ for $F = (P, Q, R)$.

</details>

<details>
<summary>Hint 2</summary>

A conservative field on $\mathbb{R}^3$ must have zero curl.

</details>

<details>
<summary>Worked solution</summary>

With $P = xy$, $Q = yz$, $R = zx$: $\operatorname{div} F = \partial_x(xy) + \partial_y(yz) + \partial_z(zx) = y + z + x$. For the curl, $\operatorname{curl} F = (\partial_y R - \partial_z Q,\; \partial_z P - \partial_x R,\; \partial_x Q - \partial_y P) = (0 - y,\; 0 - z,\; 0 - x) = (-y, -z, -x)$. The curl is not identically zero, so $F$ is not conservative, even though $\mathbb{R}^3$ is simply connected and zero curl would have sufficed there. The divergence is also not identically zero, so the field is not incompressible: the net flux out of a small box is nonzero.

**Answer.** $\operatorname{div} F = x + y + z$ and $\operatorname{curl} F = (-y, -z, -x)$; $F$ is neither conservative nor incompressible.

</details>

*Tags: vector-calculus, divergence, curl*
