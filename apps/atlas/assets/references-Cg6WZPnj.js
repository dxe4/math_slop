var e=`---
parent_id: book-quantum-statistical-structures
matter_id: references
title: "References"
license: CC BY-SA 4.0
---

# References

The following works are cited or recommended throughout this book. All entries are real, published sources. URLs and DOIs are provided where stable identifiers exist.

## Quantum mechanics: foundations and formalism

**Michael A. Nielsen and Isaac L. Chuang**, *Quantum Computation and Quantum Information*, 10th Anniversary Edition. Cambridge University Press, 2010. ISBN 978-1-107-00217-3.

> The standard graduate reference for quantum information and the operator formalism. Chapter 2 covers density operators and POVMs, Chapter 8 covers quantum operations and channels, and Chapters 11–12 cover entropy and information topics used in this book.

**J. J. Sakurai and Jim Napolitano**, *Modern Quantum Mechanics*, 3rd ed. Cambridge University Press, 2021. ISBN 978-1-108-58728-0.

> A rigorous treatment of quantum mechanics from the postulates through scattering theory. Chapters 3–4 on angular momentum and symmetry complement the material in Chapters 2, 4, and 13 of this book.

**John Preskill**, Physics 219/Computer Science 219, *Quantum Computation*, chaptered lecture-note collection. California Institute of Technology. Current index accessed September 6, 2026: https://www.preskill.caltech.edu/ph229/

> Freely available graduate lecture notes from Caltech. Chapter 2, *Foundations I: States and Ensembles* (July 2015), Chapter 3, *Foundations II: Measurement and Evolution* (July 2015), Chapter 7, *Quantum Error Correction* (March 2026), and Chapter 10, *Quantum Shannon Theory* (June 2025), provide the relevant supplements. The collection changes over time, so these chapter titles and version dates are part of the locator.

## Statistical mechanics

**R. K. Pathria and P. D. Beale**, *Statistical Mechanics*, 3rd ed. Academic Press, 2011. ISBN 978-0-12-382188-1.

> A comprehensive graduate text covering classical and quantum statistical mechanics, ensembles, and phase transitions. Chapters 5–7 on quantum statistics and ideal gases parallel Chapters 9–11 of this book.

**Kerson Huang**, *Statistical Mechanics*, 2nd ed. John Wiley & Sons, 1987. ISBN 978-0-471-81518-1.

> A concise treatment with strong emphasis on the conceptual structure of ensembles and the thermodynamic limit. The discussion of Bose–Einstein condensation (Chapter 12) and the density of states (Chapter 5) are especially relevant.

## Quantum information and operator theory

**John Watrous**, *The Theory of Quantum Information*. Cambridge University Press, 2018. ISBN 978-1-107-18056-7.

> A mathematically rigorous treatment of quantum information theory from an operator-algebraic perspective. Chapters 2 and 4 cover operator and channel foundations; Chapter 6 covers bipartite entanglement. Together they provide the formal backbone for Chapters 7 and 8 of this book.

## Historical and supplementary sources

**Eugen Wigner**, *Gruppentheorie und ihre Anwendung auf die Quantenmechanik der Atomspektren*. Vieweg+Teubner Verlag, 1931. https://doi.org/10.1007/978-3-663-02555-9

> Wigner's early book develops group-theoretic quantum mechanics and is the historical source associated with the ray-symmetry theorem discussed in Chapter 13.

**E. P. Wigner**, "On Unitary Representations of the Inhomogeneous Lorentz Group," *Annals of Mathematics* 40, no. 1 (1939): 149–204. https://doi.org/10.2307/1968551

> A foundational classification of positive-energy irreducible unitary representations of the Poincaré group by mass and spin. It should not be conflated with the separate ray-symmetry theorem.

**G. Lindblad**, "On the Generators of Quantum Dynamical Semigroups," *Communications in Mathematical Physics* 48 (1976): 119–130. https://doi.org/10.1007/BF01608499

**Vittorio Gorini, Andrzej Kossakowski, and E. C. G. Sudarshan**, "Completely Positive Dynamical Semigroups of N-Level Systems," *Journal of Mathematical Physics* 17, no. 5 (1976): 821–825. https://doi.org/10.1063/1.522979

> The Lindblad and Gorini–Kossakowski–Sudarshan papers give independent 1976 characterizations of generators of completely positive dynamical semigroups; the latter is explicitly finite dimensional. Chapter 12 of this book presents the finite-dimensional GKSL equation.

**A. Peres**, "Separability Criterion for Density Matrices," *Physical Review Letters* 77 (1996): 1413–1415. https://doi.org/10.1103/PhysRevLett.77.1413

> Introduced the partial transpose criterion for entanglement detection. The partial trace and reduced density operators, central to Chapter 7, are prerequisites for understanding this result.

## How to use this bibliography

- **For review of linear algebra and Hilbert spaces:** Consult Nielsen & Chuang, Chapters 2 and 8, or Watrous, Chapters 1–2.
- **For the harmonic oscillator and canonical quantization:** Sakurai, Chapters 2 and 3, provides a complementary treatment.
- **For statistical mechanics and ensembles:** Pathria & Beale, Chapters 1–7, offers greater depth on the thermodynamic limit and phase transitions.
- **For channels, error correction, and decoherence:** Preskill's Chapters 3 and 7 (with the version dates recorded above), together with the Lindblad and Gorini–Kossakowski–Sudarshan papers, provide context beyond the finite-dimensional presentation in Chapter 12.
- **For symmetry and gauge theory:** Sakurai, Chapter 4, Wigner's 1931 book, and the separate 1939 Poincaré-representation paper are natural next steps after Chapter 13.
`;export{e as default};