# Read winding from a lifted loop

*Difficulty 3 of 5 · [Topology and modern geometry](index.md) · exercise 3 of 8*

For $p:R\to S^1$ given by $p(t)=(\cos(2\pi t),\sin(2\pi t))$, a loop γ at (1,0) has a lift starting at 0 and ending at 3. What is its winding number? What are the endpoints of the lift of its reverse and of the concatenation γ*γ? Explain why a homotopy through based loops cannot change these integers.

<details>
<summary>Hint 1</summary>

The endpoint difference of the lift is the winding number

</details>

<details>
<summary>Hint 2</summary>

Reverse a path by traversing its lift backward

</details>

<details>
<summary>Hint 3</summary>

Use homotopy lifting and discreteness of the fiber over the basepoint

</details>

<details>
<summary>Worked solution</summary>

The lift starts at 0 and ends at 3, so the winding number is 3. The reversed loop lifts from 0 to -3: one may translate the reversed original lift so that its initial point is 0. Concatenating γ with itself lifts first from 0 to 3 and then through a translate from 3 to 6, so its endpoint is 6. During a based homotopy, the endpoint of the uniquely chosen lift varies continuously but must remain in the discrete fiber $p^{-1}(1,0)=Z$. A continuous map from the connected parameter interval into Z is constant, so winding cannot change.

**Answer.** The windings are 3, -3, and 6; lift endpoints stay constant during based homotopy because they vary continuously in the discrete fiber Z.

</details>

*Tags: covering space, fundamental group, winding number*
