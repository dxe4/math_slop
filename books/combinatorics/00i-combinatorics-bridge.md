# A concise starting toolkit {#sec-comb-bridge}

This chapter supplies the notation used everywhere else. Read it once, then
return only when a later chapter points here. Combinatorics needs comfort with
finite sets and careful reasoning, not a long sequence of prerequisite courses.

## Sets and descriptions

A **set** is a collection with no order and no repeated membership. Write
$x\in A$ when $x$ belongs to $A$, $A\subseteq B$ when every member of $A$ is
also in $B$, and $|A|$ for the number of elements when $A$ is finite. An
ordered tuple such as $(a,b)$ is different from the set $\{a,b\}$: order and
repetition can matter in a tuple.

The union $A\cup B$ contains elements in at least one set; the intersection
$A\cap B$ contains elements in both. The difference $A\setminus B$ removes
members of $B$ from $A$. The Cartesian product

$$
A\times B=\{(a,b):a\in A,\ b\in B\}
$$

records a choice from $A$ followed by a choice from $B$. For finite sets,
$|A\times B|=|A||B|$. This is the product rule in set notation.

<figure id="fig-comb-foundation-logic">
<img src="figures/foundation-logic-table.png" alt="A finite truth table displays combinations of two logical inputs and the results of basic logical operations." style="width:88%">

<figcaption>

Figure 1: Finite representations support logical, numeric, and functional views used throughout the book.

</figcaption>
</figure>

## Functions and inverse questions

A function $f:A\to B$ assigns each input exactly one output. It is **injective**
if different inputs have different outputs, **surjective** if every output is
attained, and **bijective** if both. A bijection is the strongest elementary
counting proof: it pairs the objects in two sets without loss or duplication.

For $S\subseteq B$, the inverse image is
$f^{-1}(S)=\{a\in A:f(a)\in S\}$. This notation does not require an inverse
function. Composition means $(g\circ f)(a)=g(f(a))$.

```python
from collections.abc import Hashable, Iterable
from typing import TypeVar

T = TypeVar("T", bound=Hashable)
U = TypeVar("U", bound=Hashable)

def is_bijection(domain: Iterable[T], images: Iterable[U], codomain: Iterable[U]) -> bool:
    domain_list = list(domain)
    image_list = list(images)
    codomain_list = list(codomain)
    return (
        len(set(domain_list)) == len(domain_list)
        and len(set(codomain_list)) == len(codomain_list)
        and len(domain_list) == len(image_list)
        and len(set(image_list)) == len(domain_list)
        and set(image_list) == set(codomain_list)
    )

print(is_bijection(range(4), [1, 3, 0, 2], range(4)))
```

The finite check confirms one supplied table is bijective. It does not prove a
symbolic rule is bijective for every input size.

## Statements and proof moves

An implication $P\Rightarrow Q$ says every case satisfying $P$ satisfies $Q$.
Its contrapositive $\neg Q\Rightarrow\neg P$ is equivalent; its converse need
not be. A universal claim is disproved by one counterexample. An existence
claim needs one valid construction, while a uniqueness claim also needs an
argument excluding every alternative.

Induction proves a statement $P(n)$ by establishing a base value and showing
$P(n)\Rightarrow P(n+1)$. Strong induction may use all earlier cases. A
minimal-counterexample proof assumes the smallest failure and transforms it
into a smaller one. Combinatorial proofs frequently show that two formulas
count the same set in different ways.

## Sums, products, and factorials

For integers $a\le b$,

$$
\sum_{k=a}^{b}u_k=u_a+u_{a+1}+\cdots+u_b,
\qquad
\prod_{k=a}^{b}u_k=u_a u_{a+1}\cdots u_b.
$$

The empty sum is $0$ and the empty product is $1$. The factorial
$n!=1\cdot2\cdots n$ counts orders of $n$ distinct objects, with $0!=1$ so
boundary formulas remain valid. Exponents record repeated independent choices:
$q^n$ words of length $n$ can be formed from an alphabet of size $q$.

<figure id="fig-comb-foundation-number">
<img src="figures/foundation-number-line.png" alt="Equivalent fractions, decimals, and percentages are aligned at identical points on a number line." style="width:88%">

<figcaption>

Figure 2: Exact values may share several representations without changing their combinatorial role.

</figcaption>
</figure>

## Tiny probability and linear algebra

When all outcomes in a finite sample space $\Omega$ are equally likely,
$\Pr(A)=|A|/|\Omega|$. For a finite random variable $X$,

$$
\mathbb E[X]=\sum_x x\Pr(X=x).
$$

Linearity, $\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]$, does not require
independence. Later probabilistic arguments often define indicator variables
$I_A$, equal to $1$ when event $A$ occurs and $0$ otherwise, so
$\mathbb E[I_A]=\Pr(A)$.

A vector is an ordered list; a matrix is a rectangular table that can encode a
graph or a linear map. Matrix multiplication combines weighted two-step
connections. Rank counts independent rows or columns. Chapters using
determinants or finite fields introduce them locally.

## Python as a finite laboratory

Python integers are exact, and itertools supplies reliable generators for
finite products, permutations, and combinations. Prefer iterators when a full
list would be unnecessarily large. State the finite universe explicitly and
test edge cases such as $n=0$.

```python
from itertools import combinations
from math import comb

def subsets_of_size(size: int, chosen: int) -> list[tuple[int, ...]]:
    if size < 0 or not 0 <= chosen <= size:
        raise ValueError("require 0 <= chosen <= size")
    return list(combinations(range(size), chosen))

objects = subsets_of_size(5, 2)
if len(objects) != comb(5, 2):
    raise RuntimeError("enumeration and formula disagree")
print(objects)
```

<figure id="fig-comb-foundation-functions">
<img src="figures/foundation-function-families.png" alt="Plots of several elementary function families show different domains and growth patterns." style="width:88%">

<figcaption>

Figure 3: Several function families remind us that one symbolic representation does not fit every domain.

</figcaption>
</figure>

Enumeration provides data and catches mistakes; it is not a proof for
unbounded $n$. A useful workflow is: define the objects, derive a count, test
small instances independently, explain why the construction is reversible,
and only then generalize.

## A readiness checklist

You are ready for Chapter 1 if you can distinguish a set from a sequence,
explain why a bijection proves equal finite cardinalities, expand a short sum,
and read a Python loop. When any item feels unfamiliar, use this chapter as a
lookup page. The relevant idea will also be rebuilt in context.
