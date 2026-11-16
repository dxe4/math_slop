# Detection and correction from Hamming distance

*Difficulty 3 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 7 of 15*

A binary code has minimum distance $d=5$. Prove how many arbitrary bit errors it always detects and uniquely corrects. Explain why a syndrome need not identify a unique error outside that radius.

<details>
<summary>Hint 1</summary>

Two radius-t balls are disjoint when 2t<d

</details>

<details>
<summary>Hint 2</summary>

An undetected error would transform one codeword into another

</details>

<details>
<summary>Hint 3</summary>

Syndromes identify cosets

</details>

<details>
<summary>Worked solution</summary>

Any error of weight at most four cannot transform one codeword into a different codeword because distinct codewords are at distance at least five, so up to $d-1=4$ errors are always detected. Radius-two Hamming balls around codewords are disjoint because 2·2<5; therefore any received word within two flips of a codeword has that codeword as unique nearest candidate, so two errors are corrected. At three or more errors, balls can overlap or a word can be closer to another codeword. A parity-check syndrome identifies the coset of the error vector; multiple errors in the same coset share a syndrome. Unique decoding needs a restricted error set or a declared choice rule.

**Answer.** Distance five detects four errors and corrects two; beyond radius two a syndrome or nearest-codeword choice need not be unique.

</details>

*Tags: coding theory, Hamming distance, syndrome, decoding*
