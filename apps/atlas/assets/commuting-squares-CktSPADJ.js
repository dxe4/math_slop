var e=`---
id: visual-lab-commuting-squares
title: "Two paths through a diagram"
license: CC BY-SA 4.0
---

# Two paths through a diagram

Do four module maps give the same composite on every residue?

Choose a finite residue module and the four scalar maps around a square. Compare the two composites on every residue in the captioned table. Reset restores the initial square. Every map is multiplication by its displayed scalar in the same residue ring, so the domains and codomains are part of the construction.

## What to notice

Write the top, left, right and bottom scalars as $a,b,c,d$. The two paths act by $ca$ and $db$. They agree on every element of the cyclic module exactly when $ca=db$ modulo the modulus: necessity follows by evaluating at the residue one, and sufficiency by multiplying that equality by any residue. A single unequal row supplies a witness of failure.

## Worked example

Modulo five, take top two, right three, left one and bottom one. Both composite scalars are one modulo five, since six and one have the same residue. Thus both paths fix every input. Changing the bottom scalar to two makes the input one a witness: one path returns one and the other two.

## Scope

This finite square illustrates a universal equality of two specified composites. It does not infer commutativity from one favorable input, and it does not assert that every diagram commutes. General module maps can have larger generating sets and must respect their relations. The primary chapter develops the surrounding algebra.

## Preparation and continuation

- [Modules linear algebra over a ring](/resources/library%3Abook-morphisms-modules-categories%3Amodules-linear-algebra-over-a-ring/)

The interactive controls, reset and data table use the shared Euler Lab frame. Read marks and saved notes remain personal study records.
`;export{e as default};