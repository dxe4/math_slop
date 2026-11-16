var e=`---
id: book-graph-theory
title: "Graph Theory"
level: advanced-undergraduate
estimated_minutes: 2550
license: CC BY-SA 4.0
production_state: drafting
---

# Graph Theory

Graphs turn pairwise relationships into vertices and edges. This book develops the subject from degree counts, paths, trees, and connectivity through flows, matchings, planarity, colouring, extremal questions, random graphs, spectra, and structural decompositions. Each chapter states its graph conventions and proof obligations explicitly.

## Audience and preparation

This is an advanced undergraduate text for readers comfortable with finite sets, functions, and mathematical proof. The Introduction to Proof chapters on direct arguments, sets, induction, and mathematical writing provide the proof background. The graph chapters in *Discrete Mathematics: Proof, Counting, and Structure* (graphs and connectivity; spanning trees and shortest paths; Euler and Hamilton graphs; planarity, colouring, and matchings) give a useful first encounter with the subject. Those chapters remain available as a gentler parallel route.

The spectral chapter also uses real inner products, eigenvalues, and the spectral theorem for real symmetric matrices. Readers who have not studied these ideas can use *Finite-Dimensional Linear Algebra: Structure and Proof* as preparation before that chapter; this is a local prerequisite for the spectral material, not for the rest of the book.

## Reading route

1. Graphs, Degrees, and Isomorphism
2. Paths, Cycles, and Connectivity
3. Trees
4. Eulerian and Hamiltonian Graphs
5. Bipartite Matching: Hall and Koenig
6. Matchings: Tutte and Berge
7. Menger and Connectivity
8. Flows and Max-Flow Min-Cut
9. Planar Graphs and Kuratowski
10. Graph Colouring: Brooks and Vizing
11. Five and Four Colours
12. Extremal Graphs: Turan
13. Ramsey Theory for Graphs
14. Random Graphs
15. Spectra and Expanders
16. Graph Minors and Wagner
17. Decompositions and Orientations

The manuscript develops original explanations, proofs, examples, and exercises. The earlier discrete-mathematics graph chapters are acknowledged as prior introductory treatments where relevant; this book substantially expands their scope. The source is typeset with Quarto.
`;export{e as default};