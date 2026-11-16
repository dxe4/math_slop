
# References and Notation

Benchmark references are Thomas Cover and Joy Thomas, *Elements of Information Theory*, and David MacKay, *Information Theory, Inference and Learning Algorithms*. Their theorems are used with explicit alphabet, integrability and limiting hypotheses; the exercises here are original.

Euler source connections are [Entropy, Codes, and the Price of Noise](../../articles/entropy-codes-noise.md) and [Information, Compression, Noise, and Coding](../algorithms-computation-proof-desk/information-compression-coding.md). Their original text and exercises remain available.

Write H for discrete entropy, h for differential entropy, D for relative entropy and I for mutual information. X^n denotes a length-n block, not an exponentiation of a variable. A source law describes messages; a channel kernel describes conditional output given input. Code rate, symbol entropy, minimum distance and error probability are distinct quantities.

## Theorems imported at the boundary

The weak and strong laws of large numbers and finite irreducible Markov occupation laws are prerequisite results, linked in their chapter contexts. The general stationary-ergodic equipartition theorem and LZ78 stationary-ergodic universality theorem are named continuations, not proofs claimed by the elementary stationary-rate or phrase-count arguments.

The finite iid AEP, fixed-rate source theorem, Kraft and McMillan inequalities, Huffman optimality, ideal arithmetic bound, count-code universality, finite memoryless channel theorem, average-power real Gaussian theorem, finite bounded-distortion theorem, finite-alphabet Sanov bounds, Fano reductions and regular finite-model Fisher calculations are derived in the manuscript. Gaussian squared-error rate-distortion, efficient capacity-approaching decoding and cryptographic extraction theorems are outside the proved scope.

For stochastic channels, an average error criterion weights a declared message distribution; a maximum error criterion controls each message. For combinatorial codes, distance controls all error patterns inside a radius. For lossy sources, distortion controls an explicitly declared loss. These are distinct notions of quality.

## Stable source identities

The primary book identity is library:book-information-theory. Each chapter appends its native chapter slug. The original entropy essay remains library:deep-dive-entropy-codes-noise, and the original algorithms chapter remains library:book-algorithms-computation-proof-desk:information-compression-coding. The nine exploration identities retain their explorations:information-theory-* namespace. No original reading is removed or its learner notes reassigned.
