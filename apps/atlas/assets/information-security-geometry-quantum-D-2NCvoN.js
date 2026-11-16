var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: information-security-geometry-quantum
title: "Information, Security, Geometry, and Quantum Models"
level: advanced-undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Information, Security, Geometry, and Quantum Models

Four computational fields reuse algorithms and proofs while changing what counts as a state, error, adversary, or observation. This chapter is a bridge, not a substitute for dedicated books in information theory, cryptography, geometry, graphics, or quantum computing.

This full cross-field reading retains its original chapter identity and all earlier mathematical material outside the computing book's twelve-chapter main route. Continue the information discussion in [Information Theory: Surprise and Entropy](../information-theory/surprise-entropy.md), and the distance, parity-check and repetition-code discussion in [Error-Correcting Codes: Linear Codes](../error-correcting-codes/linear-codes.md). Those authored chapters incorporate the information/coding portions and their original supported bridge questions. The cryptographic definitions and reductions continue in [Cryptography](../cryptography.md). Geometry, graphics and quantum passages, together with every original solution below, remain here under this mixed reading's original identity; no single-topic successor replaces the whole source or its learner notes.

## 1. Information is relative to a probability law

For a discrete random variable $X$ with probabilities $p(x)$, Shannon entropy is

$H(X)=-\\sum_{x} p(x) \\log_{2} p(x)$.

It is measured in bits because the logarithm base is two. A uniform variable on $m$ outcomes has entropy $\\log_{2}m$; a deterministic variable has entropy zero. Entropy is not the storage size of one unencoded object and not a synonym for disorder without a probability model.

A prefix-free binary code with lengths $l(x)$ has expected length $\\sum p(x)l(x)$. Kraft’s inequality constrains the lengths: $\\sum 2^{-l(x)}\\le 1$. Source coding connects expected description length to entropy for repeated draws under stated stationarity or block assumptions.

## 2. Error correction is geometric separation

A binary block code $C\\subseteq \\{0,1\\}^n$ has minimum Hamming distance

$d=\\min_{x\\ne y \\in C} distance(x,y)$.

If at most $t$ bits flip and $2t<d$, radius-$t$ balls around codewords are disjoint, so nearest-codeword decoding corrects uniquely. Distance $d$ also detects up to $d-1$ errors.

For a linear $[n,k]$ code with generator matrix $G$, messages map to codewords $mG$. A full parity-check matrix $H$ satisfies $\\ker H=C$ and has rank $n-k$; the necessary equation $GH^T=0$ alone is insufficient to guarantee this. A received word $r$ has syndrome $Hr^T$. Equal syndromes identify the same coset modulo $C$, not necessarily a unique error unless the decoding radius and code structure justify it.

## 3. Cryptographic claims quantify over adversaries

Correct encryption requires decrypting an honestly generated ciphertext to the message. Security is a different theorem: an adversary in a stated resource class should not distinguish experiments or forge with more than a bounded advantage.

One-time-pad secrecy assumes a uniformly random key as long as the message, used once and kept secret. Reusing the key gives $c1 \\oplus c2 = m1 \\oplus m2$, leaking a relation. Computational schemes replace information-theoretic secrecy with a hardness assumption and a probabilistic experiment.

Toy RSA arithmetic can demonstrate modular inversion and exponentiation. It cannot demonstrate modern semantic security: textbook deterministic RSA exposes equality and algebraic structure. Padding, parameter generation, side channels, and protocol composition are part of real security contracts. Never deploy educational code as cryptography.

## 4. Robust computational geometry

The orientation predicate for planar points $a,b,c$ is the sign of

$\\det(b-a,c-a) = (b_{x}-a_{x})(c_{y}-a_{y})-(b_{y}-a_{y})(c_{x}-a_{x})$.

Its sign distinguishes counterclockwise, clockwise, and collinear triples. Convex-hull algorithms, segment intersection, and triangulation build combinatorial decisions from this predicate.

With floating-point coordinates near collinearity, rounding can flip the sign or make logically inconsistent decisions across calls. A robust pipeline separates construction from predicates, uses exact integer arithmetic when coordinates and products fit, adaptive precision where needed, and an explicit degeneracy policy. A pretty picture is not a certificate that the combinatorial structure is correct.

## 5. Graphics is sampled projective geometry

Homogeneous coordinates represent a point $(x,y,z)$ as $(x,y,z,1)$ and directions with last coordinate zero. A 4-by-4 matrix combines affine transformations; a perspective projection later divides by a depth-related coordinate.

The graphics pipeline then clips, rasterizes primitives into samples, interpolates attributes, evaluates visibility and shading, and maps values to display. Each stage has invariants: clipping preserves the visible part of a primitive; barycentric weights sum to one; a depth test implements an ordering convention; color-space conversion changes which interpolation is physically meaningful.

Aliasing arises when sampling cannot distinguish high-frequency scene variation. Supersampling and filtering reduce artifacts under a signal model; they do not reconstruct arbitrary lost detail.

## 6. A qubit is a unit vector up to global phase

A pure qubit state is

$\\lvert \\psi\\rangle = \\alpha\\lvert 0\\rangle+\\beta\\lvert 1\\rangle$, with $\\lvert \\alpha\\rvert^{2}+\\lvert \\beta\\rvert^{2}=1$.

Measuring in the computational basis returns zero with probability $\\lvert \\alpha\\rvert^{2}$ and one with probability $\\lvert \\beta\\rvert^{2}$. Before measurement, amplitudes combine linearly and can interfere; they are complex numbers, not ordinary probabilities.

A closed-system gate is unitary, preserving inner products and norm. The Hadamard gate maps $\\lvert 0\\rangle$ to $(\\lvert 0\\rangle+\\lvert 1\\rangle)/\\sqrt{2}$ and $\\lvert 1\\rangle$ to $(\\lvert 0\\rangle-\\lvert 1\\rangle)/\\sqrt{2}$. Applying it twice returns the original state because the paths interfere.

For several qubits, states inhabit tensor products. Entangled states need not factor into single-qubit states. Measurement outcomes can be correlated while still obeying no-signalling constraints; correlation is not a classical hidden message channel.

## 7. Quantum algorithm claims need a complete cost model

A quantum procedure specifies state preparation, a sequence of allowed gates or oracle calls, measurements, and success probability. Query complexity can hide the cost of constructing an oracle or loading classical data. A polynomial speedup in query count is not automatically an end-to-end speedup.

Noise, fault tolerance, and readout repetitions also matter in physical implementation. A small state-vector simulation is exact mathematics up to floating arithmetic but scales exponentially in qubit count; simulating an algorithm classically does not reproduce its hardware resource claim.

## Worked audit: parity code and geometric decoding

The repetition code maps bit zero to $000$ and one to $111$. Minimum distance is three. Any one-bit error remains closer to its source codeword than the other, so majority decoding corrects one error. Two flips can produce a word closer to the wrong codeword.

This is exact combinatorial geometry in Hamming space. It says nothing about burst dependence, soft reliability values, channel mismatch, or rate efficiency. A channel model determines whether the code is useful, not distance alone.

## Bridge calculation: entropy versus code distance

Compression and error correction use redundancy in opposite directions. A biased source may have entropy below one bit per symbol and admit shorter average descriptions under its model. A channel code then adds structured bits so corrupted blocks remain geometrically separated. These steps are compatible but answer different questions: source coding concerns expected description length; channel coding concerns recovery under a noise contract. Neither supplies authentication against an active attacker.

## Bridge calculation: exact predicate, sampled image

For integer points $a=(0,0)$, $b=(4,0)$, and $c=(1,3)$, orientation is $4*3-0*1=12>0$. That exact sign fixes counterclockwise order. A graphics pipeline may then project, clip, rasterize, and filter the triangle, so individual pixels depend on additional conventions. The predicate theorem survives even when a low-resolution image looks degenerate; the image is a sampled consequence, not the definition.

## Bridge calculation: classical and quantum uncertainty

A classical mixture choosing $\\lvert 0\\rangle$ or $\\lvert 1\\rangle$ equally and the pure state $\\lvert +\\rangle$ both give uniform computational-basis outcomes. They differ under a Hadamard measurement: $\\lvert +\\rangle$ becomes $\\lvert 0\\rangle$ with certainty, while the mixture remains uniform. Thus one measurement distribution does not characterize a quantum state. Information claims must name the allowed observations, just as program equivalence names its contexts.

## Interface ledger

When crossing fields, record object, model, operation, evidence, and nonclaim. For coding: finite words, channel law, encode/decode, distance proof, no adversarial authentication. For cryptography: keyed algorithms, game oracle, reduction, conditional advantage, no side-channel theorem. For geometry: coordinates, arithmetic model, predicate/construction, determinant proof plus numerical audit, no display-independent perception claim. For quantum computation: normalized state, unitary/oracle access, measurement distribution, algorithm theorem, no omitted data-loading or hardware-speed claim.

## Common errors

- Treating entropy as an intrinsic property of a file without a source model.
- Saying a syndrome always identifies one error.
- Inferring security from correct decryption or large-looking numbers.
- Trusting plotted geometry when a near-zero predicate is numerically unstable.
- Interpolating display-encoded colors as though they were linear light.
- Squaring a quantum amplitude before paths have finished interfering.
- Quoting oracle complexity as total wall-clock advantage.

## Checks with solutions

1. **A code has distance seven. How many errors can it uniquely correct?** Three, because radius-three balls are disjoint and $2*3<7$.
2. **Why does global quantum phase not affect basis probabilities?** Multiplying every amplitude by unit complex $e^{i \\theta}$ leaves squared magnitudes unchanged.
3. **Why is orientation more trustworthy than a rendered angle?** It states the exact combinatorial predicate; rendering adds projection and sampling conventions.
4. **What does entropy require?** A probability law over source symbols or blocks; it is not an intrinsic label attached to one observed string.
5. **Why cannot all $n$-bit strings compress?** There are $2^n$ inputs but only $2^n-1$ shorter binary outputs, so injectivity fails.
6. **Separate compression from correction.** Compression removes model-predictable redundancy; correction adds structured redundancy to resist a declared error family.
7. **Why is a checksum not authentication?** An active adversary can alter data and recompute an unkeyed checksum.
8. **What does a cryptographic reduction establish?** A conditional implication from a successful adversary to an algorithm against a stated assumption, with resources and probability loss.
9. **Why must geometric arithmetic be named?** Exact real or integer predicates and floating computations can disagree through rounding, overflow, or degeneracy policy.
10. **What does a raster image omit?** The continuum object and rules for coordinates, clipping, samples, coverage, and filtering unless supplied separately.
11. **Normalize state $(1,i)$.** Divide by $\\sqrt{2}$ because its squared norm is $1+1=2$.
12. **Why is amplitude not probability?** Amplitudes are complex and add with phase; only squared magnitudes after combining alternatives give basis probabilities.
13. **How can a mixture and superposition look alike?** Both may give the same distribution in one basis, yet a different measurement reveals interference in the superposition.
14. **What does a query speedup omit?** Oracle construction, ordinary gates, data loading, qubits, error correction, shots, and output reading unless counted.
15. **Give the cross-field evidence pattern.** Name mathematical object, model, operation, claim, evidence, assumptions, and explicit nonclaim.
16. **Why keep this bridge despite specialist chapters?** It exposes shared claim structure and routes prerequisites while leaving full theorems to Chapters 15–18.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=machines-reductions-limits) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};