# Interference is not classical coin flipping

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 15 of 15*

Starting from $\lvert0\rangle$, apply the Hadamard gate twice and derive the final state. Contrast this with measuring after the first gate and then applying Hadamard again.

<details>
<summary>Hint 1</summary>

$H\lvert0\rangle=(\lvert0\rangle+\lvert1\rangle)/\sqrt{2}$

</details>

<details>
<summary>Hint 2</summary>

$H\lvert1\rangle=(\lvert0\rangle-\lvert1\rangle)/\sqrt{2}$

</details>

<details>
<summary>Hint 3</summary>

Measurement removes the coherent superposition in this basis

</details>

<details>
<summary>Worked solution</summary>

Without an intermediate measurement, $H(H\lvert0\rangle)=(H\lvert0\rangle+H\lvert1\rangle)/\sqrt{2}=[(\lvert0\rangle+\lvert1\rangle)+(\lvert0\rangle-\lvert1\rangle)]/2=\lvert0\rangle$; the $\lvert1\rangle$ amplitudes cancel and $\lvert0\rangle$ amplitudes add. If measured after the first $H$, outcome $0$ or $1$ occurs with probability $1/2$ and the post-measurement state is the observed basis state. Applying $H$ to either basis state gives equal computational-basis probabilities, so the final measurement is $0$ or $1$ with probability $1/2$ after averaging. The difference shows amplitudes interfere before measurement; replacing them with classical probabilities too early loses phase information.

**Answer.** Coherent $H^2$ returns $\lvert0\rangle$; an intervening computational-basis measurement makes the final outcomes uniform instead.

</details>

*Tags: quantum computing, Hadamard gate, measurement, interference*
