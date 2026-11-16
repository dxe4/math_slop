var e=`---
id: book-cryptography
title: "Cryptography"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Cryptography

A cryptographic claim names a scheme, an adversary and an experiment. This Years 2–3 book proves secrecy and authentication results from exact hypotheses, then develops the public-key and advanced constructions in its thirteen-chapter route. Small examples expose the algebra; reductions explain the conditional security claim.

## Before you begin

Bring the arithmetic of [Number Theory](/books/library-book-number-theory-proof-reference/), groups and fields from [Finite Algebra](/books/library-book-finite-algebra-computation/), finite probability from [Probability](/books/library-book-probability-models-proofs/), and proof/counting methods from [Discrete Mathematics](/books/library-book-discrete-mathematics-proof-counting-structure/). The [reader guide](cryptography/front-matter/reader-guide.md) fixes notation and advantage conventions. The benchmark texts and every native seed are named in the [references and provenance](cryptography/back-matter/references.md).

## Chapter route

1. [Ciphers, Perfect Secrecy and What Secure Means](cryptography/ciphers-perfect-secrecy-security.md)
2. [Number Theory for Cryptography](cryptography/number-theory-for-cryptography.md)
3. [Adversaries, Games and Computational Security](cryptography/cryptographic-definitions-adversaries.md)
4. [Pseudorandom Generators and Stream Ciphers](cryptography/pseudorandom-generators-stream-ciphers.md)
5. [Block Ciphers, Pseudorandom Functions and Modes](cryptography/block-ciphers-prfs-modes.md)
6. [Message Authentication and Hash Functions](cryptography/message-authentication-hash-functions.md)
7. [Diffie–Hellman and ElGamal](cryptography/diffie-hellman-elgamal.md)
8. [RSA and Factoring](cryptography/rsa-factoring.md)
9. [Digital Signatures](cryptography/digital-signatures.md)
10. [Elliptic-Curve Cryptography](cryptography/elliptic-curve-cryptography.md)
11. [Primality Testing and Factoring Algorithms](cryptography/primality-factoring-algorithms.md)
12. [Zero-Knowledge Proofs](cryptography/zero-knowledge-proofs.md)
13. [Lattices and Post-Quantum Cryptography](cryptography/lattices-post-quantum-cryptography.md)

All thirteen chapters are available. Their worked examples and exercises distinguish mathematical correctness, distributional secrecy and computational assumptions. Every main construction has an explicit proof or a labelled cited input, and the public-key chapters state their reduction interfaces and losses.

For each theorem, reconstruct the oracle interface and quantify the adversary before following its reduction. Keep message lengths, fresh inputs, key distributions and operation costs with the theorem. A proof under one observation model does not automatically cover a stronger interface. Try an exercise before opening the staged hints and complete solution.

Entropy, channel capacity and error-correcting codes belong to the separate Information Theory and Error-Correcting Codes texts. This book uses the elementary probability it needs for security games and leaves the communication-theory development to those companions.
`;export{e as default};