# A concise starting toolkit {#sec-topology-toolkit}

This short chapter supplies the language needed to enter topology. It is a
reference, not an elementary mathematics course. Return to a subsection when a
symbol becomes unfamiliar; later chapters repair more specialized prerequisites
at first use.

## Sets, membership, and logic {#sec-topology-set-toolkit}

A **set** is a collection of objects. Write $x\in A$ when $x$ belongs to $A$
and $x\notin A$ otherwise. The empty set is $\varnothing$. The union
$A\cup B$ contains objects in either set; the intersection $A\cap B$ contains
objects in both; and $A\setminus B$ removes the members of $B$ from $A$.
Writing $A\subseteq B$ means every member of $A$ is a member of $B$.

Statements with “every” and “there exists” require different evidence. To
disprove “every point has property $P$,” one counterexample is enough. To prove
it, an argument must handle an arbitrary point. The negation of “for every
$x$ there exists $y$” is “there exists $x$ for which no $y$ works.”

A family of sets can itself be a set. Its union is

$$
\bigcup_{i\in I}U_i
=\{x:x\in U_i\text{ for at least one }i\}.
$$

The index set $I$ may be finite or infinite. Topology will allow arbitrary
unions of open sets but only finite intersections; that asymmetry is central.

![A compact truth table shows how logical operations combine two statements.](figures/foundation-logic-table.png)

## Functions and inverse images {#sec-topology-map-toolkit}

A function $f:X\to Y$ assigns each input in $X$ exactly one output in $Y$.
It is **injective** when different inputs have different outputs, **surjective**
when every target is reached, and **bijective** when both hold. The composition
$g\circ f$ applies $f$ first and then $g$.

For $V\subseteq Y$, the **inverse image**

$$
f^{-1}(V)=\{x\in X:f(x)\in V\}
$$

is defined even when $f$ has no inverse function. Inverse images preserve all
unions, all intersections, and complements. This is why continuity is most
naturally defined through inverse images of open sets.

For a finite function, Python can calculate an inverse image exactly:

```python
def inverse_image(mapping: dict[str, int], target: set[int]) -> set[str]:
    return {point for point, value in mapping.items() if value in target}

function = {"a": 0, "b": 1, "c": 1}
print(inverse_image(function, {1}))
```

The result is exact for this finite mapping. It says nothing yet about
continuity because no open sets have been declared.

## Numbers, distance, and coordinates {#sec-topology-metric-toolkit}

Absolute value $|x-y|$ is distance on the real line. In the plane, Euclidean
distance is

$$
d_2(x,y)=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}.
$$

Taxicab distance is
$d_1(x,y)=|x_1-y_1|+|x_2-y_2|$. These give differently shaped balls but,
on finite-dimensional Euclidean space, the same collection of open sets.
Topology remembers those open sets rather than the numerical distances.

![A number line illustrates signed movement and unsigned distance.](figures/foundation-number-line.png)

Coordinates are descriptions, not the underlying point. A circle cannot be
described by one continuous angle without a seam, although overlapping angle
coordinates work locally. That local-versus-global tension drives much of the
book.

## Relations and equivalence classes

A relation $x\sim y$ is an **equivalence relation** when it is reflexive
($x\sim x$), symmetric, and transitive. The equivalence class
$[x]=\{y:y\sim x\}$ collects objects declared indistinguishable. The quotient
$X/{\sim}$ is the set of all classes.

For example, identifying real numbers that differ by an integer wraps the line
into a circle. In a finite program, a class can be represented by a canonical
label. The label is a computational choice; the mathematical class is the whole
set of equivalent objects.

## Proof patterns

Four proof patterns recur.

1. **Direct proof:** begin with the definition and transform its hypotheses.
2. **Contrapositive:** prove “not conclusion implies not hypothesis.”
3. **Contradiction:** assume the negation and derive an impossibility.
4. **Two containments:** prove sets equal by showing each is contained in the
   other.

An example cannot prove a universal theorem, and a picture cannot establish
continuity at every point. Conversely, a correct proof should still be checked
against examples and edge cases.

## Finite models and Python

A finite set is often represented by a tuple, list, or set; a function by a
dictionary; a relation by pairs; and a family of subsets by immutable frozenset
values. Hashable immutable representations make equality and membership checks
exact.

![Several familiar function families are compared across a common input range.](figures/foundation-function-families.png)

Every code block in this book runs independently. Public functions carry type
annotations, invalid finite inputs raise explicit errors, and loops have finite
bounds. Floating-point coordinates still require tolerances; combinatorial
incidence over integers can often be exact.

## A five-question entry check

Before Chapter 1, check that you can:

1. compute a union, intersection, complement, and inverse image;
2. distinguish “for every” from “there exists”;
3. compose two small functions;
4. explain the three axioms of an equivalence relation; and
5. distinguish a finite calculation from a proof about every object.

If one item is unfamiliar, reread only its short subsection. Chapter 1 begins
with finite sets and maps before any abstract topology is required.
