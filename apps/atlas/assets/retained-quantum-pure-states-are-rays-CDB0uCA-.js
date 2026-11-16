var e=`---
parent_id: book-quantum-statistical-structures
matter_id: retained-quantum-pure-states-are-rays
title: "Pure states are rays"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Pure states are rays

## Why rays instead of vectors?

In classical mechanics the state of a particle is a point in phase space: a definite position and momentum. In quantum mechanics the situation is radically different. A pure state is described by a vector in a complex Hilbert space, yet two vectors that differ only by a global phase factor describe the *same* physical state. This chapter establishes the mathematical framework of projective Hilbert space and explains why the ray picture is forced on us by the structure of probability in quantum theory.

The key observation is that every probability in quantum mechanics comes from a squared modulus of an inner product. If we replace $|\\psi\\rangle$ by $e^{i\\alpha}|\\psi\\rangle$, every such modulus is unchanged. No experiment can detect the global phase $\\alpha$. Therefore the physical state space is not the unit sphere in Hilbert space but the set of equivalence classes of vectors under multiplication by a phase---the **projective Hilbert space**.

## Hilbert space and inner product

A **complex Hilbert space** $\\mathcal{H}$ is a complete inner-product space over $\\mathbb{C}$. The inner product is denoted $\\langle\\varphi|\\psi\\rangle$ and is linear in the second argument:

$$\\langle\\varphi|(a|\\psi_1\\rangle + b|\\psi_2\\rangle) = a\\langle\\varphi|\\psi_1\\rangle + b\\langle\\varphi|\\psi_2\\rangle.$$

Consequently it is antilinear in the first argument. The induced norm is $||\\psi\\rangle| = \\sqrt{\\langle\\psi|\\psi\\rangle}$. Completeness means every Cauchy sequence converges in this norm.

In finite dimensions every inner-product space is automatically complete. The space $\\mathbb{C}^{d}$ with the standard inner product $\\langle\\varphi|\\psi\\rangle = \\sum_{j=1}^{d}\\varphi_j^{*}\\psi_j$ is the canonical example. Infinite-dimensional examples include $L^{2}(\\mathbb{R})$ with $\\langle f|g\\rangle = \\int_{-\\infty}^{\\infty}f^{*}(x)g(x)\\,dx$.

## Rays and the projective space

A **ray** in $\\mathcal{H}$ is a one-dimensional subspace, or equivalently an equivalence class

$$[|\\psi\\rangle] = \\{c|\\psi\\rangle : c\\in\\mathbb{C}\\setminus\\{0\\}\\}.$$

Two nonzero vectors lie on the same ray exactly when one is a scalar multiple of the other. The **projective Hilbert space** $\\mathbb{P}(\\mathcal{H})$ is the set of all rays. A pure quantum state is an element of $\\mathbb{P}(\\mathcal{H})$.

It is convenient to work with normalized representatives, vectors satisfying $\\langle\\psi|\\psi\\rangle = 1$. Even then the representative is not unique: $|\\psi\\rangle$ and $e^{i\\alpha}|\\psi\\rangle$ are distinct normalized vectors on the same ray. The **global phase** $e^{i\\alpha}$ has no physical significance.

**Relative phases are physical.** If $|\\psi\\rangle = |\\psi_1\\rangle + |\\psi_2\\rangle$ and we change the phase of only one component, obtaining $|\\psi'\\rangle = |\\psi_1\\rangle + e^{i\\theta}|\\psi_2\\rangle$, the state generally changes. Only when the change is applied to *every* component simultaneously is the ray preserved.

## Orthonormal bases and Parseval's identity

An **orthonormal basis** $\\{|n\\rangle\\}_{n=1}^{d}$ (or countably infinite) satisfies $\\langle m|n\\rangle = \\delta_{mn}$. Every normalized vector expands as

$$|\\psi\\rangle = \\sum_{n}\\psi_n|n\\rangle, \\qquad \\psi_n = \\langle n|\\psi\\rangle.$$

Parseval's identity states

$$\\sum_{n}|\\psi_n|^{2} = \\langle\\psi|\\psi\\rangle = 1.$$

The complex numbers $\\psi_n$ are called **probability amplitudes**. The squared moduli $|\\psi_n|^{2}$ form a probability distribution: they are nonnegative and sum to one. This is the Born rule for a projective measurement in the basis $\\{|n\\rangle\\}$.

**Important:** a basis is tied to a measurement context. The decomposition of a state into basis vectors is not a decomposition into hidden classical alternatives that exist independently of the chosen measurement.

## Worked example: superposition on a qubit

Consider $\\mathcal{H} = \\mathbb{C}^{2}$ with orthonormal basis $\\{|0\\rangle, |1\\rangle\\}$. The state

$$|\\psi\\rangle = \\frac{1}{\\sqrt{2}}\\bigl(|0\\rangle + |1\\rangle\\bigr)$$

is normalized because

$$\\langle\\psi|\\psi\\rangle = \\frac{1}{2}(\\langle 0|0\\rangle + \\langle 0|1\\rangle + \\langle 1|0\\rangle + \\langle 1|1\\rangle) = \\frac{1}{2}(1 + 0 + 0 + 1) = 1.$$

Measurement in the $\\{|0\\rangle, |1\\rangle\\}$ basis yields outcome $0$ with probability $|\\langle 0|\\psi\\rangle|^{2} = 1/2$ and outcome $1$ with probability $1/2$.

Now consider the state with a relative phase:

$$|\\psi_\\theta\\rangle = \\frac{1}{\\sqrt{2}}\\bigl(|0\\rangle + e^{i\\theta}|1\\rangle\\bigr).$$

This is still normalized. The measurement probabilities in the same basis are unchanged:

$$|\\langle 0|\\psi_\\theta\\rangle|^{2} = \\frac{1}{2}, \\qquad |\\langle 1|\\psi_\\theta\\rangle|^{2} = \\frac{1}{2}.$$

However, $|\\psi\\rangle$ and $|\\psi_\\theta\\rangle$ lie on *different* rays when $\\theta \\not\\equiv 0 \\pmod{2\\pi}$. To see this, compute the inner product:

$$\\langle\\psi|\\psi_\\theta\\rangle = \\frac{1}{2}(1 + e^{i\\theta}).$$

If the rays were identical, the inner product with a normalized representative would have modulus one. Instead $|\\langle\\psi|\\psi_\\theta\\rangle| = |\\cos(\\theta/2)|$, which equals $1$ only when $\\theta = 0$. The relative phase $\\theta$ is therefore an observable property of the state, even though it does not affect the probabilities for the basis $\\{|0\\rangle, |1\\rangle\\}$. It *does* affect probabilities in other bases, such as $\\{|+\\rangle, |-\\rangle\\}$ with $|\\pm\\rangle = (|0\\rangle \\pm |1\\rangle)/\\sqrt{2}$.

## Common error: confusing global and relative phase

A frequent mistake is to assert that "phases do not matter in quantum mechanics." This is true only for **global** phases. A relative phase between superposed components is physically meaningful and can be detected by interference experiments. When writing $|\\psi\\rangle = \\sum_n \\psi_n |n\\rangle$, altering a single coefficient $\\psi_n \\to e^{i\\theta}\\psi_n$ changes the ray; altering every coefficient by the same phase does not.

Another common error is to treat the basis expansion as a classical mixture. The state $(|0\\rangle + |1\\rangle)/\\sqrt{2}$ is not "either $|0\\rangle$ or $|1\\rangle$ with equal probability"; it is a coherent superposition that exhibits interference when evolved or measured in a rotated basis.

## Practice exercises

### Exercise 1

Show that the ray equivalence relation $|\\psi\\rangle \\sim |\\phi\\rangle$ if $|\\psi\\rangle = c|\\phi\\rangle$ for some $c \\in \\mathbb{C}\\setminus\\{0\\}$ is indeed an equivalence relation.

**Solution.** Reflexivity: $|\\psi\\rangle = 1\\cdot|\\psi\\rangle$, so $|\\psi\\rangle \\sim |\\psi\\rangle$. Symmetry: if $|\\psi\\rangle = c|\\phi\\rangle$ with $c \\neq 0$, then $|\\phi\\rangle = c^{-1}|\\psi\\rangle$, so $|\\phi\\rangle \\sim |\\psi\\rangle$. Transitivity: if $|\\psi\\rangle = c|\\phi\\rangle$ and $|\\phi\\rangle = d|\\chi\\rangle$ with $c,d \\neq 0$, then $|\\psi\\rangle = (cd)|\\chi\\rangle$ and $cd \\neq 0$, so $|\\psi\\rangle \\sim |\\chi\\rangle$.

### Exercise 2

Verify that $|\\psi\\rangle = \\frac{1}{2}|0\\rangle + \\frac{\\sqrt{3}}{2}|1\\rangle$ is normalized, and compute the probabilities for outcomes $0$ and $1$ in the standard basis.

**Solution.** We compute $\\langle\\psi|\\psi\\rangle = (1/2)^{2} + (\\sqrt{3}/2)^{2} = 1/4 + 3/4 = 1$. The probability for outcome $0$ is $|\\langle 0|\\psi\\rangle|^{2} = (1/2)^{2} = 1/4$, and for outcome $1$ it is $|\\langle 1|\\psi\\rangle|^{2} = (\\sqrt{3}/2)^{2} = 3/4$.

### Exercise 3

Consider $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ with $\\alpha,\\beta \\in \\mathbb{C}$ and $|\\alpha|^{2} + |\\beta|^{2} = 1$. Show that multiplying both amplitudes by $e^{i\\chi}$ leaves all measurement probabilities unchanged, but multiplying only $\\beta$ by $e^{i\\chi}$ generally changes the state.

**Solution.** Under $|\\psi\\rangle \\to e^{i\\chi}|\\psi\\rangle$, each amplitude is multiplied by $e^{i\\chi}$, so $|\\langle n|\\psi\\rangle|^{2} \\to |e^{i\\chi}\\langle n|\\psi\\rangle|^{2} = |\\langle n|\\psi\\rangle|^{2}$. Under $\\beta \\to e^{i\\chi}\\beta$ only, the new state is $|\\psi'\\rangle = \\alpha|0\\rangle + e^{i\\chi}\\beta|1\\rangle$. The probabilities in the $\\{|0\\rangle,|1\\rangle\\}$ basis are unchanged, but the overlap with $|+\\rangle = (|0\\rangle+|1\\rangle)/\\sqrt{2}$ becomes $|\\langle +|\\psi'\\rangle|^{2} = |(\\alpha + e^{i\\chi}\\beta)/\\sqrt{2}|^{2}$, which varies with $\\chi$ unless $\\alpha\\beta = 0$.

## Looking forward

The ray picture tells us what a pure state is, but not how to extract numbers from it. The next chapter, *Observables and the spectral theorem*, introduces the self-adjoint operators that correspond to measurable quantities and derives the Born rule from the spectral decomposition.
`;export{e as default};