# Classify independent periods when an outer-loop test can cancel

*Hard · [Calculus](index.md)*

On U=R²∖{(−1,0),(1,0)}, let $F_{a,b}=a(-y,x+1)/((x+1)^2+y^2)+b(-y,x-1)/((x-1)^2+y^2)$. Prove it is curl-free and has a single-valued potential exactly when a=b=0. Compute periods around separate small circles and a large enclosing circle, showing why one zero outer period is insufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

A small circle around one missing point sees that angular field’s full period, while the other field is smooth inside it.

</details>

<details>
<summary>Hint 2</summary>

Use Green’s theorem on the large disk with both small disks removed.

</details>

<details>
<summary>Model proof</summary>

Two independent holes carry two period constraints, whose sum can vanish without either individual constraint vanishing.

1. For an angular field about a center, direct differentiation gives ∂\_xQ−∂\_yP=0 away from that center. Therefore both summands, and F\_{a,b}, are curl-free on U.
2. Choose counterclockwise circles of radius ε&lt;1 about the two missing points. The self-centered angular field has tangential magnitude 1/ε and line element εdt, giving period 2π. The other summand is smooth and curl-free on that small disk, so its period is zero by Green. The two small-loop periods are 2πa and 2πb.
3. A potential would force both closed-loop works to be zero, hence a=b=0. Conversely at a=b=0 the field is zero and a constant potential exists. This proves the exact classification.
4. For a large counterclockwise circle enclosing both small disks, Green on the punctured region gives outer period equal to the sum of the two counterclockwise small periods: 2π(a+b). Thus a=1,b=−1 makes the outer period zero but leaves nonzero independent periods and no potential. Testing only a loop enclosing all holes loses information.

**Self-assessment rubric**

- Checks local curl-free behavior on the actual twice-punctured domain.
- Calculates each self period and justifies the other summand’s zero period.
- Proves both necessity and sufficiency of a=b=0.
- Derives the outer sum with correct inner orientations and exhibits zero total without exactness.

</details>
