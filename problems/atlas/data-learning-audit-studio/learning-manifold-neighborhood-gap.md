# A connected manifold yields a disconnected sample graph

*Difficulty 4 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 8 of 9*

On the unit circle, sample points at angles $0$, $0.1$, $0.2$, $\pi$, $\pi+0.1$, and $\pi+0.2$. Build the symmetrized $1$-nearest-neighbor graph using Euclidean chord distance. Show that it is disconnected even though the circle is connected, and identify assumptions a manifold-learning claim would need before treating graph distances as global geometry.

<details>
<summary>Hint 1</summary>

Chord distance for angular separation $\theta$ is $2\sin(|\theta|/2)$ for separations up to $\pi$

</details>

<details>
<summary>Hint 2</summary>

Within each three-point cluster a neighbor is about $0.1$ away

</details>

<details>
<summary>Hint 3</summary>

Every cross-cluster separation is close to $\pi$ and has chord length close to $2$

</details>

<details>
<summary>Worked solution</summary>

Within each cluster, adjacent angular gaps are 0.1, so their chord distances are $2\sin(0.05)$, about 0.100. The smallest separation between the two clusters is $\pi-0.2$, with chord distance $2\sin((\pi-0.2)/2)=2\cos(0.1)$, about 1.990. Thus every point chooses a nearest neighbor in its own three-point cluster. Symmetrizing the chosen edges does not add a cross-cluster edge, so the graph has two components. The latent circle is connected; sparse, highly nonuniform sampling failed to represent the missing arcs. Recovery claims need density or coverage conditions, a neighborhood scale compatible with curvature and reach, controlled noise, and graph connectivity without shortcut edges. A visually tidy embedding cannot replace these assumptions.

**Answer.** Within-cluster distances are about 0.100 while every cross-cluster distance is at least about 1.990, so the 1-NN graph has two components despite a connected latent circle.

</details>

*Tags: manifold learning, nearest-neighbor graph, sampling, connectivity*
