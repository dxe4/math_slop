var e=`---
parent_id: book-cryptography
matter_id: reader-guide
title: "Reader Guide and Conventions"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Reader Guide and Conventions

Bring modular arithmetic, finite groups, elementary probability, counting and proof methods. Required linked preparation appears on the book page. Definitions and security experiments are mathematical objects: write their inputs, distributions, adversary queries and success events before following a proof. Small primes and short bitstrings make the worked examples hand-checkable; their size does not establish hardness for a growing family.

The thirteen-chapter route is fully authored. Follow the symmetric constructions before the public-key and advanced chapters so that each reduction uses previously defined experiments and advantage conventions. A named deep theorem is a cited input where its proof is outside the chapter, rather than a hidden local proof claim.

A guessing advantage in this book is the absolute difference between a hidden-bit success probability and one half. A distribution or oracle distinguishing advantage is the absolute gap between output-one probabilities. A forgery game uses its success probability. Keep the convention with each bound: converting guessing and distinguishing conventions can introduce a factor of two.

Messages, keys, seeds, nonces, counters and tags have separate roles. Legal domains and encodings are part of every theorem. A random function is sampled once and answers repeated inputs consistently. Every use of independence states which random objects and prior transcript are being conditioned on. Natural-number security parameters index families; concrete constants are not automatically negligible functions.

Try an exercise before opening its first hint. The second hint narrows the decisive step; the complete solution gives the argument and its hypotheses. The preserved code in the games chapter illustrates exact pad algebra and is not a report of any execution. Newly written exposition uses British spelling, while original source material retains its wording.
`;export{e as default};