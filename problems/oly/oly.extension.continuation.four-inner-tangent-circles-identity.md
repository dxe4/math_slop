# A four-circle tangent-length identity

*Hard · [Original olympiad-style problems](index.md)*

Four circles of radii $0<r_i<1$ lie inside the unit circle, are internally tangent to it at distinct points $A_1,A_2,A_3,A_4$ in cyclic order, and have pairwise disjoint interiors. Let $t_{ij}$ be the distance between contact points on a common external tangent of circles $i,j$ (zero is allowed for a degenerate external tangent). Prove $t_{12}t_{34}+t_{23}t_{14}=t_{13}t_{24}$. You may use Ptolemy for four concyclic points.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The center of circle $i$ is $(1-r_i)A_i$, with $A_i$ a unit vector.

</details>

<details>
<summary>Hint 2</summary>

For two circles with center distance $d$, the external-tangent contact distance satisfies $t^2=d^2-(r_i-r_j)^2$. Expand it using the two center vectors.

</details>

<details>
<summary>Model proof</summary>

Every tangent distance factors into a chord length times one weight for each endpoint circle.

1. Write $c_i=(1-r_i)A_i$. The right triangle formed by the centers and parallel radii at an external tangent gives $t_{ij}^2=|c_i-c_j|^2-(r_i-r_j)^2$. Disjoint interiors ensure the tangent exists; the formula also covers a zero limiting length.
2. Expanding and using $|A_i|=|A_j|=1$ gives $t_{ij}^2=(1-r_i)(1-r_j)|A_i-A_j|^2$. All factors are nonnegative, so $t_{ij}=\sqrt{1-r_i}\sqrt{1-r_j}\,A_iA_j$.
3. Each of the products $t_{12}t_{34}$, $t_{23}t_{14}$, $t_{13}t_{24}$ contains the same positive weight $\prod_{i=1}^4\sqrt{1-r_i}$. After canceling it, the required equality is exactly $A_1A_2\,A_3A_4+A_2A_3\,A_1A_4=A_1A_3\,A_2A_4$.
4. This is Ptolemy for the four distinct contact points in their stated cyclic order. The ordering determines which two terms add, rather than permitting an arbitrary labeling.

**Self-assessment rubric**

- Express the centers and derive the external tangent length square.
- Factor the distance using the actual unit-circle contacts.
- Cancel the same positive four-circle weight in all terms.
- Apply Ptolemy with the specified cyclic order.

</details>
