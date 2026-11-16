var e=`---
parent_id: book-cryptography
matter_id: references
title: "References and Provenance"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# References and Provenance {#section-1-references-and-provenance}

Jonathan Katz and Yehuda Lindell, *Introduction to Modern Cryptography*, is the commissioning benchmark. Jonathan Katz's [author-maintained graduate lecture sequence](https://www.cs.umd.edu/~jkatz/gradcrypto/s11/lectures.html) identifies the perfect-secrecy, PRG, PRF and MAC route. Mihir Bellare and Phillip Rogaway, [*Introduction to Modern Cryptography*](https://www.cs.ucdavis.edu/~rogaway/classes/227/spring05/book/main.pdf), is an additional author-written benchmark for experiments, concrete reductions and oracle interfaces. These are references, not reproduced textbook prose.

<a id="section-3-native-provenance"></a>
## Native provenance {#section-5-native-provenance}

The complete computing-desk source \`algorithms-computation-proof-desk/cryptographic-definitions-adversaries.md\` is retained in chapter 3 with its original chapter ID, reference listing and all sixteen original solved questions. Its message subscripts are corrected to m_0, m_1 and m_b; new material adds complete probability-convention, negligibility and hybrid arguments, worked examples and staged hints. The source book declares the semantic alias to the new resource, and the original file remains.

Chapters 1, 2 and 4–6 are new text with fresh exercise IDs. Chapter 2 reads \`number-theory-proof-reference/algorithms-certificates-crypto-boundaries.md\` as its arithmetic seed. The finite-algebra cryptography chapter and Quarto number-theory cryptography chapter remain intact as sources for the later public-key chapters. No entropy or channel-coding chapter is moved into this book; the commissioned Information Theory and Error-Correcting Codes books own those subjects.

Chapters 7–13 are new text: the finite-algebra Diffie–Hellman source seeds chapter 7; the Quarto public-key chapter and Number Theory arithmetic sources seed chapters 8 and 11; the finite-algebra/Number Theory elliptic examples seed chapter 10. Chapters 9, 12 and 13 develop new signature, simulation and lattice constructions. Their reductions state their own assumptions, while their finite examples are worked algebra rather than executed software reports.

 The thirteen chapters retain the earlier sources, hypotheses and solutions.
`;export{e as default};