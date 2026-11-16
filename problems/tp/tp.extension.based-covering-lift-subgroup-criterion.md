# Prove the based lifting criterion by path endpoints

*Hard · [Topology problems](index.md)*

Let p:(E,e₀)→(B,b₀) be a covering, Y a path-connected locally path-connected space, and $f:(Y,y_0)\to(B,b_0)$ continuous. Prove that a based lift exists exactly when $f_*\pi_1(Y,y_0)\subset p_*\pi_1(E,e_0)$, and that it is unique. You may use path and homotopy lifting for coverings.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Define the proposed value at y as the endpoint of the lift of f applied to a path from y₀ to y.

</details>

<details>
<summary>Hint 2</summary>

The subgroup condition handles two path choices; a path-connected neighborhood mapped inside an evenly covered set gives continuity.

</details>

<details>
<summary>Model proof</summary>

The subgroup condition turns path-dependent endpoint transport into a well-defined continuous map.

1. If a lift f̃ exists, the lift of f∘α for any based loop α is f̃∘α and is a loop at e₀. Thus f\_\*\[α\] belongs to p\_\*π₁(E,e₀).
2. Conversely choose a path c from y₀ to y and let f̃(y) be the endpoint of the lift of f∘c starting at e₀. If c and d have the same endpoint, c followed by the reverse of d is a loop. Its f-image class lies in p\_\*π₁(E,e₀), so its lift is closed: a representative p∘ℓ with ℓ a loop lifts to ℓ, and homotopy lifting preserves the endpoint. Reversing and concatenating path lifts then shows the endpoints obtained from c and d agree.
3. For a given y, choose an evenly covered U about f(y). Local path connectedness gives a path-connected open neighborhood V of y with f(V)⊂U. Extend a fixed path to y by paths inside V. All resulting lifts remain in the single sheet over U selected at y. Hence f̃\|\_V is the sheet inverse composed with f, and is continuous.
4. The resulting map is based and satisfies p∘f̃=f. Any other based lift agrees along every path from y₀ by path-lift uniqueness, and hence agrees everywhere because Y is path connected.

**Self-assessment rubric**

- Derives the subgroup inclusion from images of lifted based loops.
- Uses the subgroup condition and homotopy lifting to show endpoints are independent of chosen paths.
- Uses local path connectedness to identify the construction with one local inverse on a neighborhood.
- Propagates agreement from the basepoint along paths.

</details>
