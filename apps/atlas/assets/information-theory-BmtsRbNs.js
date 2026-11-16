var e=`---
id: book-information-theory
title: "Information Theory"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Information Theory {#section-1-information-theory}

Information theory quantifies uncertainty under a probability model and connects it to the resources needed for representation, communication and decision. This L3 book keeps finite guarantees, asymptotic coding theorems and assumptions about data or noise separate.

Begin with the [reader guide](information-theory/front-matter/preface-and-reader-guide.md). Preparation is the first eleven chapters of [Probability: Models, Bounds, and Proofs](probability-models-proofs.md) and [Linear Algebra](linear-algebra-structure-proofs.md). Entropy is an expected quantity under a stated law; a compression ratio or a collection of observed frequencies is not a substitute for that law.

<a id="section-5-reading-sequence"></a>
## Reading sequence {#section-7-reading-sequence}

<a id="section-7-uncertainty-and-information"></a>
### Uncertainty and information {#section-9-uncertainty-and-information}

1. [Surprise and Entropy](information-theory/surprise-entropy.md).
2. [Joint and Conditional Entropy](information-theory/joint-conditional-entropy.md).
3. [Relative Entropy and Mutual Information](information-theory/relative-entropy-mutual-information.md).
4. [Inequalities and Data Processing](information-theory/inequalities-data-processing.md).

<a id="section-14-representing-sources"></a>
### Representing sources {#section-16-representing-sources}

5. [The Asymptotic Equipartition Property](information-theory/asymptotic-equipartition.md).
6. [Source Coding and Kraft’s Inequality](information-theory/source-coding-kraft.md).
7. [Huffman and Arithmetic Codes](information-theory/huffman-arithmetic-codes.md).
8. [Universal and Dictionary Codes](information-theory/universal-dictionary-codes.md).

<a id="section-21-communication-with-noise"></a>
### Communication with noise {#section-23-communication-with-noise}

9. [Channels and Capacity](information-theory/channels-capacity.md).
10. [The Noisy-channel Coding Theorem](information-theory/noisy-channel-coding-theorem.md).
11. [Gaussian Channels](information-theory/gaussian-channels.md).
12. [Linear Codes: A First Look](information-theory/linear-codes-first-look.md).

<a id="section-28-rates-and-applications"></a>
### Rates and applications {#section-30-rates-and-applications}

13. [Entropy Rate and Markov Sources](information-theory/entropy-rate-markov-sources.md).
14. [Rate-distortion](information-theory/rate-distortion.md).
15. [Information and Statistics](information-theory/information-statistics.md).
16. [Applications: Compression, Inference and Cryptographic Entropy](information-theory/applications-compression-inference-entropy.md).

 Its sixteen chapters include forty-eight worked examples, 160 exercises with two revealed hints and full solutions, and three analytical projects with worked solutions.
`;export{e as default};