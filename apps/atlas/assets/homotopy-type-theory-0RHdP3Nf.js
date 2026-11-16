var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: homotopy-type-theory
title: "Homotopy Type Theory"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Homotopy Type Theory

Homotopy type theory (HoTT) combines intensional type theory with ideas from homotopy theory. It supports foundations in which types may carry higher path structure rather than being restricted to sets. This chapter introduces the univalence axiom, higher inductive types, and the connection between type theory and homotopy theory.

## Types as spaces

In HoTT, types are interpreted as spaces and terms as points. The identity type $\\text{Id}_A(a, b)$ (or $a =_A b$) represents the space of paths from $a$ to $b$ in $A$.

**Definition 4.10 (path).** A *path* $p: a =_A b$ is an element of the identity type. Paths can be composed, inverted, and whiskered, satisfying the groupoid laws up to higher paths.

**Definition 4.11 (homotopy).** For functions $f, g: A \\to B$, a *homotopy* $H: f \\sim g$ is a function $H: \\prod_{x:A} (f(x) =_B g(x))$ assigning to each $x$ a path from $f(x)$ to $g(x)$.

## The univalence axiom

**Definition 4.12 (equivalence).** Write $\\operatorname{isEquiv}(f)$ when every homotopy fiber $\\sum_{a:A}(f(a)=b)$ is contractible, and define

$$A\\simeq B\\;:=\\;\\sum_{f:A\\to B}\\operatorname{isEquiv}(f).$$

Having a quasi-inverse $g:B\\to A$ with homotopies $fg\\sim\\mathrm{id}_B$ and $gf\\sim\\mathrm{id}_A$ characterizes equivalences, but raw quasi-inverse data is generally not itself a proposition. The right side of univalence uses the structured equivalence type $A\\simeq B$.

**Definition 4.13 (univalence).** The *univalence axiom* asserts that for types $A, B$:

$$(A =_{\\mathcal{U}} B) \\simeq (A \\simeq B).$$

That is, paths between types in the universe $\\mathcal{U}$ correspond to equivalences between types.

**Consequences of univalence.**
- **Function extensionality:** If $f \\sim g$, then $f = g$.
- **Propositional extensionality:** Equivalent propositions are equal.
- **Structure identity principle:** For suitably defined univalent notions of structure, an isomorphism of groups, rings, and similar structures induces an identity. This conclusion uses both univalence and the fact that the operations and laws transport along the underlying equivalence.

## Higher inductive types

**Definition 4.14 (higher inductive type).** A *higher inductive type* (HIT) is defined by generators for points and paths. The circle $S^1$ is the HIT with:
- A point $\\text{base}: S^1$.
- A path $\\text{loop}: \\text{base} =_{S^1} \\text{base}$.

**Theorem 4.15.** $\\pi_1(S^1) \\cong \\mathbb{Z}$.

**Proof architecture (encode--decode).** Circle recursion defines a family $\\mathrm{code}:S^1\\to\\mathcal U$ with $\\mathrm{code}(\\mathrm{base})=\\mathbb Z$ and transport along $\\mathrm{loop}$ equal to the successor equivalence of $\\mathbb Z$. Transporting $0$ along a based path gives

$$\\mathrm{encode}:(\\mathrm{base}=x)\\to\\mathrm{code}(x).$$

Conversely, integer powers of $\\mathrm{loop}$ define $\\mathrm{decode}:\\mathbb Z\\to(\\mathrm{base}=\\mathrm{base})$, and circle/path induction proves the two maps inverse. Thus the loop space at the base is equivalent to $\\mathbb Z$, yielding $\\pi_1(S^1)\\cong\\mathbb Z$. The universal property alone does not identify the loop space; the encode--decode argument supplies that step.

## Truncation levels

**Definition 4.16 ($n$-type).** A type $A$ is a *$(-2)$-type* (contractible) if there exists $a: A$ such that $\\prod_{x:A} (a = x)$. Inductively, $A$ is a *$(n+1)$-type* if for all $x, y: A$, the type $x =_A y$ is an $n$-type.

- $(-1)$-types are *propositions* (at most one element).
- $0$-types are *sets* (identity types are propositions).
- $1$-types are *groupoids*.

**Definition 4.17 (propositional truncation).** The *propositional truncation* $\\|A\\|_{-1}$ is the HIT with a constructor $|\\cdot|: A \\to \\|A\\|_{-1}$ and a path constructor making $\\|A\\|_{-1}$ a proposition.

## Common errors

**Error: treating HoTT as merely a programming language.** HoTT is also a foundation for mathematics. Univalence does not compute by the ordinary intensional reduction rules, but cubical type theories provide computational interpretations of univalence and related higher constructions. Claims that no computational interpretation is known are therefore obsolete unless restricted to a specified calculus.

**Error: confusing propositional equality with definitional equality.** In HoTT, $a = b$ is a type that may have many elements (paths). Definitional equality is a metatheoretic judgment with at most one proof.

**Error: assuming all types are sets.** In HoTT, only $0$-types are sets. Many important types (universes, HITs) have nontrivial higher structure.

## Practice exercises

**Exercise 1.** Show that function extensionality follows from univalence.

**Solution.** The standard proof is a dependency chain. Univalence first implies **weak function extensionality**: a dependent product of contractible types is contractible (HoTT Book, §4.9, Theorem 4.9.4). Weak function extensionality then implies that the canonical map $(f=g)\\to(f\\sim g)$ is an equivalence (Theorem 4.9.5). Applying its inverse to $H:f\\sim g$ gives $f=g$. An arbitrary homotopy $H$ does not by itself define the self-equivalence of the function type used in the former argument.

**Exercise 2.** Prove that the type of paths in a contractible type is contractible.

**Solution.** Let $A$ have center $c$ and contraction $h:\\prod_x(c=x)$. For fixed $x,y$, the path $h(x)^{-1}\\cdot h(y)$ is the center of $x=y$. Path induction reduces the assertion that every $p:x=y$ equals this center to reflexivity at $c$. Thus $x=y$ is contractible; the coherence comes from identity elimination, not merely from choosing two paths.

**Exercise 3.** Construct the suspension $\\Sigma A$ of a type $A$ as a higher inductive type.

**Solution.** $\\Sigma A$ has two points $\\text{N}, \\text{S}$ and for each $a: A$, a path $\\text{merid}(a): \\text{N} = \\text{S}$.

**Exercise 4.** Show that $\\Sigma S^0 \\simeq S^1$.

**Solution.** $S^0$ has two points, so its suspension has two poles and two meridians between them. Choose one meridian as a path identifying the poles; composing the other with its inverse yields one generating loop. HIT induction defines maps $\\Sigma S^0\\to S^1$ and $S^1\\to\\Sigma S^0$, and the computation rules give homotopies showing they are inverse. Hence $\\Sigma S^0\\simeq S^1$; the types are not literally identified by the constructor descriptions.

**Exercise 5.** Explain why the univalence axiom implies that isomorphic groups are equal.

**Solution.** A group is an underlying set-level type together with operations and proposition-valued laws. Univalence turns the underlying equivalence of a group isomorphism into a path of carrier types; function extensionality and the homomorphism equations identify the transported operations, while proof irrelevance handles the laws. This is the structure identity principle for groups. Univalence of carriers alone would not identify arbitrary, unrelated structures on them.

## Looking backward and forward

This chapter extended the type-theoretic ideas from “Linear Logic” and the flat file’s “Reference desk F — types and construction” to a homotopical setting. The univalence axiom provides a new foundation for structural mathematics. The remaining chapters (12–16) explore advanced topics in computability, proof theory, and applications.
`;export{e as default};