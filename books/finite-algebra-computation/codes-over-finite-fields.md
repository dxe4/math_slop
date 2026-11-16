
# Codes over Finite Fields

A linear code over a finite field $F_q$ is a subspace $C\subseteq F_q^n$. A generator matrix records a spanning row basis, and a parity-check matrix $H$ describes the same subspace as $C=\ker H$. Exact elimination from Chapter 4 converts between these two representations: row reduction finds the generator rank, while a basis for the right nullspace of the generator gives parity-check rows. The rank–nullity theorem proves that a full-rank check matrix has $n-\dim C$ rows; it does not by itself prove an error-correction guarantee.

For example, over $F_2$ the repetition code is the span of $(1,1,1)$. The matrix with rows $(1,1,0)$ and $(0,1,1)$ has that span as its kernel: its equations force all three coordinates equal, and its rank is two. This is the computational linear-algebra navigation companion, excluded from the eleven substantive main chapters. Distances, decoding, BCH and Reed–Solomon theory belong in [Error-Correcting Codes: Linear Codes](#/books/error-correcting-codes/linear-codes), rather than a second coding course here.

The [earlier coding reading](algebraic-coding-theory.md) remains available with its original identity and examples alongside that full continuation. The [finite-field arithmetic recipe](#/articles/recipe-finite-field-arithmetic-coding) gives an additional existing worked route. No new coding or cryptographic guarantee follows merely from a correct finite-field implementation.
