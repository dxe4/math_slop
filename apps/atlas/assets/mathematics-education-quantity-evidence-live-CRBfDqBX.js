var e=`---
id: visual-lab-mathematics-education-quantity-evidence
title: Quantity, Arrangement, and Evidence Laboratory
level: explorer
estimated_minutes: 55
license: CC-BY-4.0
---

# Quantity, arrangement, and evidence laboratory

Which collection has more objects? A row can look longer because it contains
more objects, because its objects are farther apart, or both. This instrument
keeps those quantities separate. It compares collections of zero through twenty
objects, uses exact integer grid positions, constructs a complete one-to-one
pairing, and follows every object through a rearrangement.

For a collection of $n$ objects with spacing $s$, its displayed grid span is
zero when $n\\le 1$ and otherwise

$span=(n-1)s$.

Span describes this drawing; it is not cardinality. In the preset with five
objects spaced four units apart and six objects spaced two units apart, the
spans are $16$ and $10$. The five-object row looks longer, but pairing leaves
one object from the six-object collection unmatched. Thus $5<6$ exactly.

## Conservation and representation

The A-to-A′ table maps token $A-i$ to the same token after rearrangement. This
is a bijection, so the number of tokens is preserved even when the span changes.
The engine also reports every non-reversed part-whole decomposition
$n=0+n, 1+(n-1), \\ldots$ and the exact base-ten form

$n=\\lfloor n/10\\rfloor\\times 10+(n \\pmod{10})\\times 1$.

The place-value preset therefore writes $14=1\\times 10+4\\times 1$. This is an arithmetic
identity. A physical bundle can make the unit exchange perceptible, but neither
the picture nor one response establishes a learner's stable understanding.

## Exact fallback and accessibility

Every visual fact appears in tables: count, spacing, span, tens and ones,
complete pairing rows, unmatched objects, the full A-to-A′ mapping, and
part-whole decompositions. A uses circles, B uses squares, and A′ uses rings, so
colour carries no unique meaning. All controls are labelled native range inputs
or buttons and work from a keyboard. The SVG is static, rendering is bounded by
twenty objects per collection, and reduced-motion preferences disable inherited
motion.

## Investigations

1. Load “five looks longer than six.” Explain why span answers a different
   question from one-to-one pairing.
2. Load “six rearranged three ways.” Identify the complete bijection and explain
   why equal number does not require equal span.
3. Set both counts to zero, then set one count to one. Explain why both empty and
   singleton rows have span zero but different cardinality.
4. Load fourteen. Find $14=7+7$, $14=4+10$, and the tens-and-ones form. Explain
   which descriptions preserve quantity and which change only grouping.
5. Create a state in which cardinality and span point in the same direction.
   Explain why agreement in one drawing still does not make span a definition
   of number.

## Evidence boundary

The displayed finite arithmetic and correspondences follow from the chosen
integers and the explicit bijections. The instrument does not measure a child's knowledge, attach an age
expectation, diagnose a misconception, or show that this representation causes
learning. If used in teaching, record a person's actions and words as local
evidence and use another task before making a broader inference.

The presets are intentionally small and culturally narrow: they model abstract
tokens, familiar base-ten notation, and a limited set of spatial arrangements.
They do not represent every way children name, group, gesture, or reason about
quantity. Treat an unexpected response as a prompt for a follow-up question,
not as a score inferred from the interface.
`;export{e as default};