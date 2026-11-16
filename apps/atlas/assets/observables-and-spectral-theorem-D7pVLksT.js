var e=`---
parent_id: book-quantum-statistical-structures
chapter_id: observables-and-spectral-theorem
title: "Observables and the spectral theorem"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Observables and the spectral theorem

## From states to measurements

In the previous chapter we established that a pure quantum state is a ray in a complex Hilbert space. A state by itself, however, predicts nothing. To connect the formalism with experiment we need **observables**: the mathematical objects that correspond to measurable physical quantities. This chapter develops the spectral theory of self-adjoint operators in finite and infinite dimensions, states the spectral theorem, and explains why self-adjointness---not merely Hermiticity or symmetry---is the correct requirement.

## Observables in finite dimensions

Let $\\mathcal{H}$ be a finite-dimensional complex Hilbert space, $\\dim\\mathcal{H} = d < \\infty$. An **observable** is a self-adjoint (Hermitian) operator $A = A^{\\dagger}$ acting on $\\mathcal{H}$. The spectral theorem for finite dimensions asserts that every such operator has a decomposition

$$A = \\sum_{a} a P_{a},$$

where the sum runs over the distinct eigenvalues $a \\in \\mathbb{R}$ of $A$, and $P_{a}$ is the orthogonal projection onto the eigenspace for eigenvalue $a$. The projections satisfy

$$P_{a}P_{a'} = \\delta_{aa'}P_{a}, \\qquad \\sum_{a}P_{a} = I.$$

For a pure state $|\\psi\\rangle$, the **Born probability** of obtaining outcome $a$ in a projective measurement of $A$ is

$$\\mathbb{P}(a) = \\langle\\psi|P_{a}|\\psi\\rangle = \\|P_{a}|\\psi\\rangle\\|^{2}.$$

The **expectation value** and **variance** are

$$\\langle A\\rangle = \\langle\\psi|A|\\psi\\rangle = \\sum_{a}a\\,\\mathbb{P}(a),$$
$$\\operatorname{Var}(A) = \\langle A^{2}\\rangle - \\langle A\\rangle^{2} = \\sum_{a}a^{2}\\,\\mathbb{P}(a) - \\Bigl(\\sum_{a}a\\,\\mathbb{P}(a)\\Bigr)^{2}.$$

## Worked example: spin-1/2 measurement

Consider the Pauli matrix $\\sigma_{z} = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$ on $\\mathcal{H} = \\mathbb{C}^{2}$. Its spectral decomposition is

$$\\sigma_{z} = (+1)\\,P_{+} + (-1)\\,P_{-}, \\qquad P_{+} = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}, \\quad P_{-} = \\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}.$$

For $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ with $|\\alpha|^{2} + |\\beta|^{2} = 1$, the probabilities are

$$\\mathbb{P}(+) = \\langle\\psi|P_{+}|\\psi\\rangle = |\\alpha|^{2}, \\qquad \\mathbb{P}(-) = |\\beta|^{2}.$$

The expectation is $\\langle\\sigma_{z}\\rangle = |\\alpha|^{2} - |\\beta|^{2}$. For $|\\psi\\rangle = |+\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt{2}$, we obtain $\\langle\\sigma_{z}\\rangle = 0$ and $\\operatorname{Var}(\\sigma_{z}) = 1$.

## The infinite-dimensional spectral theorem

In infinite dimensions the situation is richer. A **self-adjoint operator** $A$ on a Hilbert space $\\mathcal{H}$ satisfies $D(A) = D(A^{\\dagger})$ and $A|\\psi\\rangle = A^{\\dagger}|\\psi\\rangle$ for all $|\\psi\\rangle \\in D(A)$. Here $D(A)$ denotes the domain of $A$, a dense linear subspace of $\\mathcal{H}$.

The spectral theorem states that for every self-adjoint $A$ there exists a unique **projection-valued spectral measure** $P_{A}$ on the Borel $\\sigma$-algebra of $\\mathbb{R}$ such that

$$A = \\int_{-\\infty}^{\\infty}\\lambda\\,dP_{A}(\\lambda),$$

understood on the domain of vectors $|\\psi\\rangle$ for which $\\int\\lambda^{2}\\,d\\langle\\psi|P_{A}(\\lambda)|\\psi\\rangle < \\infty$. For any Borel set $B \\subseteq \\mathbb{R}$, the projection $P_{A}(B)$ represents the event that a measurement of $A$ yields a value in $B$.

The probability measure for outcome $\\lambda$ in state $|\\psi\\rangle$ is

$$\\mu_{\\psi}(B) = \\langle\\psi|P_{A}(B)|\\psi\\rangle.$$

## Why self-adjointness matters: the momentum operator

A formally symmetric differential expression is not automatically an observable. Consider the momentum operator $P = -i\\hbar\\,d/dx$ on $L^{2}([0,L])$. Integration by parts gives

$$\\langle\\phi|P\\psi\\rangle = \\int_{0}^{L}\\phi^{*}(x)\\bigl(-i\\hbar\\psi'(x)\\bigr)\\,dx = -i\\hbar\\bigl[\\phi^{*}\\psi\\bigr]_{0}^{L} + \\int_{0}^{L}\\bigl(-i\\hbar\\phi'(x)\\bigr)^{*}\\psi(x)\\,dx.$$

For the boundary term to vanish for all $\\phi,\\psi$ in the domain, one needs boundary conditions. The choice $\\psi(0) = \\psi(L) = 0$ makes $P$ symmetric but not self-adjoint: the adjoint has a larger domain. The choice $\\psi(L) = e^{i\\theta}\\psi(0)$ with fixed $\\theta$ yields a one-parameter family of self-adjoint extensions, each with a different discrete spectrum.

This example demonstrates that "Hermitian matrix intuition" is insufficient for differential operators. Self-adjointness includes the domain equality and determines which spectrum is realized.

## Common error: Hermitian versus self-adjoint

In finite dimensions every linear operator is bounded and defined on the whole space, so "Hermitian" and "self-adjoint" coincide. In infinite dimensions they do not. A symmetric operator $A$ satisfies $\\langle\\phi|A\\psi\\rangle = \\langle A\\phi|\\psi\\rangle$ for all $\\phi,\\psi \\in D(A)$, but may fail to be self-adjoint if $D(A) \\neq D(A^{\\dagger})$. Only self-adjoint operators are guaranteed a real spectrum and the spectral measure needed for quantum probabilities. A symmetric operator cannot have a nonreal eigenvalue: if $A\\psi=\\lambda\\psi$, symmetry makes $\\lambda\\|\\psi\\|^2=\\langle\\psi,A\\psi\\rangle$ real. The actual failure is subtler: a merely symmetric operator may have nonreal points in its spectrum, lack a self-adjoint spectral resolution, or generate no unitary dynamics until a self-adjoint extension is chosen.

## Practice exercises

### Exercise 1

Find the spectral decomposition of $\\sigma_{x} = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ and compute $\\langle\\sigma_{x}\\rangle$ for $|\\psi\\rangle = |0\\rangle$.

**Solution.** The eigenvalues are $\\pm 1$. The normalized eigenvectors are $|+\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt{2}$ with eigenvalue $+1$ and $|-\\rangle = (|0\\rangle - |1\\rangle)/\\sqrt{2}$ with eigenvalue $-1$. Thus $P_{+} = |+\\rangle\\langle +|$ and $P_{-} = |-\\rangle\\langle -|$. For $|0\\rangle$, we have $\\langle 0|\\sigma_{x}|0\\rangle = 0$, and indeed $\\mathbb{P}(+) = \\mathbb{P}(-) = 1/2$ gives $\\langle\\sigma_{x}\\rangle = (+1)(1/2) + (-1)(1/2) = 0$.

### Exercise 2

Let $A$ be a self-adjoint operator with spectral measure $P_A$, and let $|\\psi\\rangle\\in D(A^2)$ be normalized. Show that $\\langle\\psi|A^{2}|\\psi\\rangle = \\int\\lambda^{2}\\,d\\mu_{\\psi}(\\lambda)$ and deduce that $\\operatorname{Var}(A) \\geq 0$. (For merely $\\psi\\in D(A)$, interpret the second moment as $\\|A\\psi\\|^2$.)

**Solution.** By the functional calculus, $A^{2} = \\int\\lambda^{2}\\,dP_{A}(\\lambda)$. Taking the expectation in state $|\\psi\\rangle$ gives $\\langle\\psi|A^{2}|\\psi\\rangle = \\int\\lambda^{2}\\,d\\mu_{\\psi}(\\lambda)$. Since $\\langle A\\rangle = \\int\\lambda\\,d\\mu_{\\psi}(\\lambda)$, the variance is

$$\\operatorname{Var}(A) = \\int\\lambda^{2}\\,d\\mu_{\\psi}(\\lambda) - \\Bigl(\\int\\lambda\\,d\\mu_{\\psi}(\\lambda)\\Bigr)^{2} = \\int(\\lambda - \\langle A\\rangle)^{2}\\,d\\mu_{\\psi}(\\lambda) \\geq 0,$$

because the integrand is nonnegative and $\\mu_{\\psi}$ is a probability measure.

### Exercise 3

Show that no self-adjoint operator on a finite-dimensional Hilbert space can have a continuous spectrum.

**Solution.** In finite dimensions, if $A-\\lambda I$ is injective then it is surjective. A point in the continuous spectrum would require $A-\\lambda I$ to be injective with dense range but not surjective, which is impossible. Equivalently, the spectrum of a finite matrix is precisely its finite set of eigenvalues. A continuous spectrum need not contain an interval, so accumulation in an interval is not its definition.

## Looking backward and forward

This chapter connected the abstract state space of *Pure states are rays* to measurable quantities through the spectral theorem. We saw that self-adjointness is the precise requirement for an observable, not merely formal Hermiticity. The next chapter, *Unitary dynamics and generators*, asks how states and observables evolve in time, and introduces Stone's theorem linking unitary evolution to self-adjoint generators.
`;export{e as default};