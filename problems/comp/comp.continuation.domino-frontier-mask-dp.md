# Tile a three-row strip by tracking unfinished horizontal dominoes

*Hard · [Computational arithmetic problems](index.md)*

How many tilings of a $3\times8$ rectangle use only $1\times2$ dominoes, with rotations allowed?

```answer
{"answer":{"kind":"integer","expected":"153","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

At a column boundary, record which of the three next-column cells are already occupied by horizontal dominoes.

</details>

<details>
<summary>Hint 2</summary>

Use symmetry between top and bottom masks, but do not merge masks that have different legal completions.

</details>

<details>
<summary>Worked solution</summary>

Boundary masks retain precisely the information a column completion needs.

1. From empty mask $0$, a completed column leaves masks $7,1,4$. Masks $1$ and $4$ each lead to $0$ and respectively $6$ and $3$; masks $3,6,7$ lead to $4,1,0$. Other masks are unreachable from the empty state.
2. Let $z$ count mask $0$, $u$ each of masks $1,4$, $v$ each of masks $3,6$, and $w$ mask $7$. One-column transfer is $(z,u,v,w)\mapsto(2u+w,z+v,u,z)$.
3. Starting at $(1,0,0,0)$, the even-column states at widths $2,4,6$ are $(3,0,1,0)$, $(11,0,4,0)$ and $(41,0,15,0)$.
4. After width $7$ the state is $(0,56,0,41)$ and after width $8$ it is $(153,0,56,0)$. A complete tiling has empty outgoing mask, so the answer is $153$.

</details>
