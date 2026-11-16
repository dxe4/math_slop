# Separate existence from uniqueness at a square-root boundary

*Difficulty 4 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 2 of 14*

For $x'=2\sqrt{\max(x,0)}$ with $x(0)=0$, exhibit infinitely many solutions, identify which Picard-Lindelof hypothesis fails, and state what continuity alone still supports locally.

<details>
<summary>Hint 1</summary>

Allow a solution to wait at zero until time a

</details>

<details>
<summary>Hint 2</summary>

After departure try a square

</details>

<details>
<summary>Hint 3</summary>

The state derivative of the vector field is unbounded near zero

</details>

<details>
<summary>Worked solution</summary>

For every $a\ge0$, define $x_a(t)=0$ for $t\le a$ and $x_a(t)=(t-a)^2$ for $t\ge a$. Both pieces agree with derivative zero at $t=a$. Before departure, both sides of the equation vanish; after departure, $x_a'=2(t-a)=2\sqrt{x_a}$. Thus every $a$ gives a solution, including the forever-zero solution. The vector field is continuous but not locally Lipschitz in $x$ at zero, so the contraction-based uniqueness hypothesis fails. A Peano existence theorem under continuity can still provide at least one local solution, but not a unique flow.

**Answer.** The waiting-time family $x_a=0$ up to a and $(t-a)^2$ afterward gives nonuniqueness; continuity remains, but local Lipschitz continuity fails.

</details>

*Tags: ordinary differential equations, existence, uniqueness, Lipschitz*
