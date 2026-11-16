# Appendix A — Readiness and proof workshop {#sec-topology-readiness}

This appendix is a repair station, not a prerequisite course. Use only the
section named by a chapter's preparation route.

## Set equality

To prove $A=B$, prove $A\subseteq B$ and $B\subseteq A$. Begin each containment
with an arbitrary element and unfold definitions. For an inverse-image identity,
the chain

$$
x\in f^{-1}(B)
\Longleftrightarrow f(x)\in B
$$

is usually the decisive first move.

## Quantifier audit

“For every neighborhood $U$, there is an index $N$, such that for every
$n\ge N$” allows $N$ to depend on $U$ but not on the later $n$. Negating this
statement reverses each quantifier:

> There is a neighborhood $U$ such that for every $N$, some $n\ge N$ lies
> outside $U$.

Write quantifiers before manipulating a convergence statement.

## Functions and factorization

To show a rule on equivalence classes is well defined, prove it gives the same
output for every representative. To prove two functions equal, compare their
values at an arbitrary input. A commutative diagram is an equality of composed
maps; calculate both routes.

## Linear algebra for homology

Kernel means inputs sent to zero; image means outputs actually reached.
Rank–nullity says

$$
\dim V=\dim\ker T+\operatorname{rank}T.
$$

Over the two-element field, addition is exclusive-or and $1+1=0$. Row reduction
works as usual without scaling pivots.

## Proof-versus-computation checklist

Before claiming a theorem from code, ask:

1. Is the mathematical domain finite and fully enumerated?
2. Are coordinates exact integers or floating-point approximations?
3. Does a sampled graph represent the object or merely one model of it?
4. Which universal quantifier remains unchecked?
5. Which theorem connects the finite representation to the intended space?

## Symbols translated into Python names

Mathematical subscripts become descriptive collection positions rather than
single-letter APIs. In the advanced chapters:

| Mathematical object | Python name |
|---|---|
| $\phi_i(x)$ | `partition_weights(point, centers, radius)[i]` |
| $A\xrightarrow F B\xrightarrow G C$ | `map_into_middle`, `map_out_of_middle` |
| $(b_p(X))_p$, $(b_q(Y))_q$ | `left_betti`, `right_betti` |
| $f_*:H_k(X)\to H_k(X)$ | `induced_maps[k]` |
| an oriented cochain value $c([u,v])$ | `edge_values[(start, end)]` |
| monodromy $T$ | `monodromy` |

The translation makes a formula executable without asking the reader to retain
all symbol choices. It does not alter the mathematical types: matrices still
need a declared field, and a sampled complex remains only a finite model.
