var e=`---
id: visual-lab-finite-algebra-tables
title: "Finite Algebra Table Laboratory"
level: undergraduate
estimated_minutes: 75
license: CC BY-SA 4.0
---

# Finite Algebra Table Laboratory

This live Canvas laboratory turns a finite group into inspectable data. Choose one of five fixed group presets, read or select a product in its Cayley table, compare element orders, partition the elements into cosets, and test whether a quotient group exists. The displayed values are exact; colour only repeats information already carried by labels and tables. The live instrument uses those five built-in operations; it has no imported-table editor or general supplied-table validator.

Prerequisites are modular arithmetic and the definition of a group. The [orientation to algebraic structure](#/item/deep-dive-algebra-patterns-machines) develops those ideas from a triangle, while the [standard proof course](#/item/course-abstract-algebra-proof) proves the theorems used here.

## How to operate the laboratory

The **Finite group** control offers:

- $C_{4}$, addition modulo four;
- $C_{6}$, addition modulo six;
- $V_{4}$, coordinatewise addition in $(Z/2Z)^{2}$;
- $D_{3}\\cong S_{3}$, the six symmetries of a triangle;
- $U(8)=\\{1,3,5,7\\}$, multiplication of units modulo eight.

Choose a left factor and right factor from labelled controls, select a cell in the exact HTML table, or focus the canvas and use the arrow keys. \`Home\` selects the identity cell; $End$ selects the final row and column. Movement wraps around the finite table. The live status announces the selected equation and the subgroup result.

The **Subgroup H** control chooses a verified subgroup for coset experiments. Beneath the visual table, the page lists every element order and every left coset in text. When $H$ is normal, it also prints the quotient multiplication table as arrays of coset indices. When $H$ is not normal, it says why no quotient group exists.

No animation is needed: every change redraws immediately. The lab detects a reduced-motion preference and reports it, but the mathematical state is identical in either mode.

## Reading a Cayley table

The row gives the left factor and the column gives the right factor. The cell at row $a$, column $b$ contains $ab$. In an additive group such as $C_{4}$, this means $a+b \\pmod{4}$; the dot in the corner is a generic operation symbol rather than literal multiplication.

Every row of a group table is a permutation of the elements. To see why, fix $a$. If $ab=ac$, multiply on the left by $a^{-1}$ to obtain $b=c$; thus the map $b\\mapsto ab$ is injective. On a finite set, an injective self-map is surjective, so each output occurs exactly once. The same argument works for columns.

This is the **Latin-square property**. It is necessary for a finite group table, but it is not sufficient: an arbitrary Latin square may fail associativity or may not present an identity in the chosen labelling. The lab audits associativity separately on every triple and locates a two-sided identity and inverses.

## Five structures, three important contrasts

### $C_{4}$ versus $V_{4}$

Both groups have four elements and are commutative. Their element orders distinguish them. In $C_{4}$, the elements $1$ and $3$ have order four. Every nonidentity element of $V_{4}$ has order two. An isomorphism preserves powers and therefore preserves element order, so these groups cannot be isomorphic.

This is a useful computational habit: do not compare only size or table colour. Compute an invariant that every structure-preserving bijection must preserve.

### $D_{3}$ versus the abelian examples

Write the triangle symmetries as

$e,r,r^{2},s,rs,r^{2}s$,

where $r^{3}=e$, $s^{2}=e$, and $sr=r^{-1}s$. The engine represents an element as $r^a s^b$, with $a$ modulo three and $b$ modulo two. Multiplication is

$(r^a s^b)(r^c s^d)=r^(a+(-1)^b c)s^{b+d}$.

The exponent of $r$ is reduced modulo three and the exponent of $s$ modulo two. This formula is not symmetric in the two inputs. In the table, compare

$sr=r^{2}s$ and $rs=rs$.

They differ, so $D_{3}$ is nonabelian. A Cayley table makes the counterexample immediate, while the relation explains it symbolically.

### $V_{4}$ versus $U(8)$

The labels and operations look different: bit-pair addition versus multiplication modulo eight. Yet every nonidentity element in either group has order two, and the tables agree after a suitable relabelling. This suggests an isomorphism. One explicit map sends the three nonzero bit pairs to $3,5,7$ in an order compatible with multiplication.

The lab therefore illustrates both directions of structural thinking: a preserved invariant can disprove an isomorphism, while a relabelling that preserves every product proves one.

## Cosets partition the group

For a subgroup $H\\le G$, the left coset of $H$ represented by $g$ is

$gH=\\{gh\\colon h\\in H\\}$.

Two left cosets are either equal or disjoint. If $gH$ and $kH$ share an element, say $gh_{1}=kh_{2}$, then $k^{-1}g=h_{2}h_{1}^{-1}\\in H$, and this relation shows $gH=kH$. Thus the distinct cosets form a partition of $G$.

Every coset has the same size as $H$: multiplication by $g$ is a bijection from $H$ to $gH$. For finite groups this proves Lagrange’s theorem,

$|G|=[G\\colon H]|H|$.

Choose $H=⟨r⟩=\\{e,r,r^{2}\\}$ in $D_{3}$. The displayed left cosets are $H$ and $\\{s,rs,r^{2}s\\}$. Each has three elements, so the index is two.

Now choose $H=⟨s⟩=\\{e,s\\}$. There are three left cosets of size two. The partition still exists even though this subgroup is not normal.

## Why normality controls quotients

We would like to multiply cosets by

$(aH)(bH)=(ab)H$.

The difficulty is that a coset has many representatives. Replacing $a$ or $b$ must not change the result. This operation is well defined exactly when $H$ is **normal**, meaning $gH=Hg$ for every $g\\in G$.

The rotation subgroup $⟨r⟩$ is normal in $D_{3}$. Its two cosets form a quotient group of order two. The reflection subgroup $⟨s⟩$ is not normal: for example, its left and right cosets at $r$ disagree. The set of left cosets still has three members, but there is no representative-independent group product on them.

All subgroups of an abelian group are normal because $gh=hg$ makes $gH=Hg$ term by term. Try each subgroup of $C_{4}$, $C_{6}$, $V_{4}$, and $U(8)$ and compare this prediction with the quotient status.

## What the engine verifies

For a group of order $n$, the pure computation layer checks:

- the Latin-square condition, whose row and column comparisons also ensure every preset output is one of the declared element indices; the fixed operation formulas provide closure;
- associativity on all $n^{3}$ triples;
- commutativity on all $n^{2}$ ordered pairs;
- a two-sided identity and two-sided inverses;
- element orders by repeated multiplication, stopping by exponent $n$;
- subgroup validity before any normality or quotient computation;
- left/right coset equality for every representative;
- quotient products by multiplying representatives only after normality passes.

The exhaustive associativity audit is practical because the largest built-in group has only six elements. For a large finite group, $O(n^{3})$ table checking becomes expensive and a representation by generators, relations, matrices, or permutations may be better.

## Experiments with answers

**1. Find inverses in $C_{6}$.** Select row $a$ and find the column whose output is $0$.

**Answer.** The inverse of $a$ is $6-a \\pmod{6}$: the pairs are $0\\leftrightarrow 0$, $1\\leftrightarrow 5$, $2\\leftrightarrow 4$, and $3\\leftrightarrow 3$.

**2. Compare generators.** Which elements generate $C_{6}$?

**Answer.** The element orders are $1,6,3,2,3,6$, so $1$ and $5$ have order six and generate the whole group.

**3. Audit a candidate subset.** Why is $\\{0,1\\}$ not a subgroup of $C_{6}$?

**Answer.** It is not closed: $1+1=2 \\pmod{6}$, and $2$ is missing. A subset should not reach the normality or quotient stage until identity, closure, and inverses have been checked.

**4. Compute $C_{6}/⟨3⟩$.** Use $H=\\{0,3\\}$ and read the quotient table.

**Answer.** The cosets are $\\{0,3\\}$, $\\{1,4\\}$, and $\\{2,5\\}$. Adding their representatives gives the table of $C_{3}$, so $C_{6}/⟨3⟩\\cong C_{3}$.

**5. Disprove commutativity.** Give one ordered pair in $D_{3}$ whose reversed product differs.

**Answer.** $sr=r^{2}s$, while $rs=rs$. One counterexample is enough to disprove a universal law.

**6. Predict before selecting.** Is the whole group a normal subgroup, and what is its quotient?

**Answer.** Yes: $gG=G=Gg$ for every $g$. There is one coset, so the quotient is the one-element group.

## Accessibility and claim boundary

All structure and subgroup choices use labelled native controls, and every cell is available in a keyboard-focusable table with row and column headers. The property summary, element-order list and coset table carry the mathematical information without colour. The live property audit reports pass/fail values; it does not expose a first failed-law witness for an imported operation. Exhaustive checks establish the reported laws only for the finite table currently loaded. A visual pattern does not prove that an untested operation is associative, and agreement of invariants does not by itself prove two groups are isomorphic; the explicit product-preserving relabelling is required.

## Continue

[Finite Algebra by Hand and Program](#/item/book-finite-algebra-computation) derives the table algorithms and extends them to polynomial rings and finite fields. The [finite-field coding recipe](#/item/recipe-finite-field-arithmetic-coding) uses exact quotient arithmetic in an application. That chapter describes how a separate supplied-table algorithm can validate a binary operation before assuming group laws, with explicit witnesses for failed claims. Those algorithms extend the mathematical lesson beyond this fixed-preset live instrument.
`;export{e as default};