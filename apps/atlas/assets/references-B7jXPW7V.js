var e=`---
parent_id: book-finite-algebra-computation
matter_id: references
title: "References and Further Reading"
license: CC BY-SA 4.0
---

# References and Further Reading

This bibliography identifies the edition or version actually used for comparison, gives stable retrieval records, and states the job each source performs. It does not transfer a source's proof, notation, or exercise design into this book. The claim-level map below binds only the listed high-risk imports. Other named results marked as standard or imported in the chapters have not all received theorem-level citation verification in this audit; the boundary below records them instead of implying that a broad comparison text verifies each claim.

A named result or study is a retrieval convention, not a complete history. Algebraic ideas often developed across languages, institutions, and communities, and a modern statement may differ sharply from an early one.

## Abstract algebra, characters, and finite groups

- Dummit, D. S., & Foote, R. M. (2004). *Abstract Algebra* (3rd ed.). Wiley. [Publisher record](https://uat.store.wiley.com/en-us/abstract-algebra-3rd-edition-p-9780471433347). Used for broad comparison in groups, rings, fields, modules, Galois theory, and the elementary simplicity proof for alternating groups; it is not used here as a source for group cohomology.
- Artin, M. (2011). *Algebra* (2nd ed.). Pearson. [Publisher record](https://www.pearson.com/en-gb/subject-catalog/p/algebra-pearson-new-international-edition/P200000003607). Used for comparison in linear algebra, group theory, and Galois theory.
- Alperin, J. L., & Bell, R. B. (1995). *Groups and Representations*. Springer. [DOI record](https://doi.org/10.1007/978-1-4612-0799-3). Used for broader finite-group representation theory; no claim about its coverage of the Murnaghan--Nakayama rule is made here.
- Serre, J.-P. (1977). *Linear Representations of Finite Groups*. Springer, Graduate Texts in Mathematics 42. [DOI record](https://doi.org/10.1007/978-1-4684-9458-7). Character theory is on pp. 10--24; the number-of-irreducibles and class-function completeness argument used below is on pp. 19--20.
- Wilson, R. A. (2009). *The Finite Simple Groups*. Springer, Graduate Texts in Mathematics 251. [DOI record](https://doi.org/10.1007/978-1-84800-988-2). The Introduction, especially Section 1.2 within pp. 1--10, states the classification and its proof boundary; the later chapters survey the alternating, classical, exceptional, and sporadic families.
- Taylor, D. E. (1992). *The Geometry of the Classical Groups*. Heldermann, Sigma Series in Pure Mathematics 9. [Author-hosted edition](https://mail.maths.usyd.edu.au/u/don/papers/gcg.pdf). Theorem 4.5, p. 23, gives the simplicity of $PSL(m,F)$ with the two exceptions $PSL(2,2)$ and $PSL(2,3)$.
- Wodzicki, M. (2010). *Introduction to Algebra*. University of California, Berkeley course notes. [University-hosted notes](https://math.berkeley.edu/~wodzicki/H104.F10/H113.pdf). Theorem 6.8, pp. 57--59, proves uniqueness up to isomorphism of the simple group of order $60$.

These sources use different conventions for group actions, character inner products, and cohomology. Comparison is useful only after recording those conventions.

## Computational algebra

- Cox, D. A., Little, J., & O'Shea, D. (2015). *Ideals, Varieties, and Algorithms: An Introduction to Computational Algebraic Geometry and Commutative Algebra* (4th ed.). Springer, Undergraduate Texts in Mathematics. [DOI record](https://doi.org/10.1007/978-3-319-16721-3). Used for Gröbner bases, elimination theory, and computational algebraic geometry.
- Geddes, K. O., Czapor, S. R., & Labahn, G. (1992). *Algorithms for Computer Algebra*. Kluwer Academic Publishers. [Publisher archive record](https://link.springer.com/book/10.1007/b102438). Used for polynomial arithmetic, factorisation, and symbolic computation.
- von zur Gathen, J., & Gerhard, J. (2013). *Modern Computer Algebra* (3rd ed.). Cambridge University Press. [DOI record](https://doi.org/10.1017/CBO9781139856065). Used for fast polynomial and matrix algorithms; Section 14.3, pp. 382--389, treats the equal-degree Cantor--Zassenhaus stage.
- Holt, D. F., Eick, B., & O'Brien, E. A. (2005). *Handbook of Computational Group Theory*. Chapman & Hall/CRC. [Publisher record](https://www.routledge.com/Handbook-of-Computational-Group-Theory/Holt-Eick-OBrien/p/book/9781584883722). Used for permutation-group algorithms, coset enumeration, and matrix-group recognition.
- Luks, E. M. (1987). “Computing the composition factors of a permutation group in polynomial time.” *Combinatorica*, 7(1), 87--99. [DOI record](https://doi.org/10.1007/BF02579204); [author's university technical-report version](https://www.cs.uoregon.edu/Reports/TR-1985-007.pdf). The paper proves polynomial-time construction of a composition series and permutation representations of its factors from permutation generators.

## Coding theory and cryptography

- Huffman, W. C., & Pless, V. (2003). *Fundamentals of Error-Correcting Codes*. Cambridge University Press. [DOI record](https://doi.org/10.1017/CBO9780511807077). Used for linear, cyclic, BCH, and Reed--Solomon codes.
- Menezes, A. J., van Oorschot, P. C., & Vanstone, S. A. (1996). *Handbook of Applied Cryptography*. CRC Press. [Author-hosted book site](https://cacr.uwaterloo.ca/hac/index.html). Used for symmetric and public-key systems, elliptic-curve cryptography, and discrete logarithms.
- Silverman, J. H. (2009). *The Arithmetic of Elliptic Curves* (2nd ed.). Springer, Graduate Texts in Mathematics 106. [DOI record](https://doi.org/10.1007/978-0-387-09494-6). Used for the algebraic and arithmetic foundations of elliptic curves; cryptographic protocols are sourced through Menezes, van Oorschot, and Vanstone.

## Finite fields and Galois theory

- Lidl, R., & Niederreiter, H. (1997). *Finite Fields* (2nd ed.). Cambridge University Press. [Publisher record](https://www.cambridge.org/core/books/finite-fields/75BDAA74ABAE713196E718392B9E5E72). Used for finite-field structure, primitive polynomials, trace, and norm. The year is the standard second-edition imprint year.
- Stewart, I. (2015). *Galois Theory* (4th ed.). Chapman & Hall/CRC, issued 6 March 2015. [DOI record](https://doi.org/10.1201/b18187), ISBN 9780429172250. Used for undergraduate comparison in the Galois correspondence, solvability by radicals, and examples; no theorem locator or page claim is based on this comparison entry.
- Brzeziński, J. (2018). *Galois Theory Through Exercises*. Springer, Undergraduate Mathematics Series. [DOI record](https://doi.org/10.1007/978-3-319-72326-6). Theorem 15.4(b), in the proof chapter on pp. 109--150, supplies the unramified factorisation-to-cycle statement used in the quintic example.

## Historical sources

- Buchberger, B. (1965). *Ein Algorithmus zum Auffinden der Basiselemente des Restklassenringes nach einem nulldimensionalen Polynomideal*. PhD thesis, University of Innsbruck. Buchberger's [institutional history and thesis record](https://www3.risc.jku.at/people/buchberg/groebner_bases.html) identifies the thesis as the source of Gröbner bases, $S$-polynomials, the main criterion, and the algorithm.
- Buchberger, B. (1976). "A theoretical basis for the reduction of polynomials to canonical forms." *ACM SIGSAM Bulletin*, 10(3), 19--29. [DOI record](https://doi.org/10.1145/1088216.1088219). This is a later published treatment of the reduction theory.
- Knuth, D. E. (1997). *The Art of Computer Programming, Vol. 2: Seminumerical Algorithms* (3rd ed.). Addison-Wesley. [Author's edition record](https://www-cs-faculty.stanford.edu/~knuth/taocp.html). Used for polynomial arithmetic, pseudorandom numbers, and arithmetic algorithms.
- Shannon, C. E. (1948). "A mathematical theory of communication." *Bell System Technical Journal*, 27(3), 379--423, [Part I DOI](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x); 27(4), 623--656, [Part II DOI](https://doi.org/10.1002/j.1538-7305.1948.tb00917.x). The two installments establish foundational results for noisy-channel coding and channel capacity.
- Diffie, W., & Hellman, M. E. (1976). "New directions in cryptography." *IEEE Transactions on Information Theory*, 22(6), 644--654. [DOI record](https://doi.org/10.1109/TIT.1976.1055638); [author-hosted paper](https://ee.stanford.edu/~hellman/publications/24.pdf). It presents the public-key cryptosystem framework and the first practical unclassified public-key exchange. Hellman's [2017 Turing lecture](https://doi.org/10.1145/3104985) records Merkle's 1974 public-key distribution work and the earlier classified GCHQ work, and explains why sole-inventor shorthand is historically inadequate.
- Burnside, W. (1904). "On groups of order $p^{\\alpha}q^{\\beta}$." *Proceedings of the London Mathematical Society*, s2-1(1), 388--392. [DOI record](https://doi.org/10.1112/plms/s2-1.1.388). This is the primary source for the solvability theorem used in Chapter 12.

## Claim-level locator map

- **Dedekind factor-cycle theorem:** Brzeziński, Theorem 15.4(b), with the squarefree/unramified hypothesis checked in the manuscript's reductions.
- **Irreducible characters span the class functions:** Serre, pp. 19--20, inside the character-theory chapter on pp. 10--24.
- **Simplicity of $A_n$ for $n\\geq5$:** Dummit--Foote, Section 4.6, Theorem 24, beginning on p. 149.
- **Burnside's $p^a q^b$ theorem:** Burnside's 1904 paper, pp. 388--392. This source proves solvability when at most two primes divide the group order.
- **Simplicity of $PSL(2,q)$ outside $q=2,3$:** Taylor, Theorem 4.5, p. 23.
- **Uniqueness of the simple group of order $60$:** Wodzicki, Theorem 6.8, pp. 57--59.
- **Classification of finite simple groups and the $26$ sporadic groups:** Wilson, Introduction, Section 1.2 within pp. 1--10. Wilson states and surveys the classification; it does not reproduce the many-paper proof.
- **Cantor--Zassenhaus equal-degree splitting:** von zur Gathen--Gerhard, Section 14.3, pp. 382--389.
- **Permutation-group composition factors:** Luks, *Combinatorica* 7(1) (1987), 87--99, DOI 10.1007/BF02579204. The input is a group given by permutation generators; the output includes generators for a composition series and permutation representations of the factors.

## Proofs in the primary route and further study

The primary chapters now prove the finite-operation and queue-closure contracts, field quotient arithmetic, squarefree decomposition and Berlekamp refinement, finite-field elimination and certificates, quotient and CRT criteria, PID submodule and Smith theorems, Schreier generation and sifting, exact coset-table certificates, Buchberger’s criterion and termination, elimination, and exact LLL termination and its short-vector bound. Their new proof discussions, exercises and reference calculations are original Euler writing. The displayed programs are teaching implementations governed by those stated mathematical contracts.

The Groebner chapter separately states the Nullstellensatz and the complex closure/extension results with their named external hypotheses; those geometric results are not proved by its algebraic elimination proof. Earlier representation, character and simple-group surveys retain their own named imports and references as additional readings. The primary route no longer assumes their specialist theorems as undocumented earlier preparation.

For LLL, the original paper is A. K. Lenstra, H. W. Lenstra Jr. and L. Lovász, *Factoring polynomials with rational coefficients* (1982). The chapter proves its stated exact-arithmetic termination and approximation claims directly; it expressly distinguishes those proofs from the further operand-size estimates needed for a full bit-complexity theorem. For faster factorisation and computational group variants, use the existing von zur Gathen–Gerhard and Holt references alongside each algorithm’s precise hypotheses.

## Historical attribution checklist

Every historical or priority claim should record:

1. a classification as contemporary exposition, secondary history, translated primary source, or primary source;
2. verified author, title, edition, publisher or archive, and stable locator;
3. a note explaining whether the citation supports provenance, formulation, evidence, example, or broader context;
4. a check that modern terminology is not projected unchanged backward;
5. independent review of culturally broad claims and disputed priority.

## Reading-route recommendations

For a deeper treatment of group representation theory, proceed to Serre or Alperin and Bell. For computational algebra, von zur Gathen and Gerhard covers fast algorithms in depth, while Geddes, Czapor, and Labahn focuses on symbolic computation systems. For algebraic geometry, Cox, Little, and O'Shea is the natural next step. For coding theory, Huffman and Pless treats constructions beyond this book. For applied cryptography, Menezes, van Oorschot, and Vanstone supplies the protocol and security context that Silverman's arithmetic text does not attempt to provide.

## Citation policy for contributors

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};