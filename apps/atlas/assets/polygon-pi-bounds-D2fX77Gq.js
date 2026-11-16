var e=`---
id: visual-lab-polygon-pi-bounds
title: "Polygon doubling and circle bounds"
license: CC BY-SA 4.0
---

# Polygon doubling and circle bounds

How does polygon doubling narrow circle-perimeter bounds?

Double the sides of regular inscribed and circumscribed polygons around a unit circle. Compare the displayed half-perimeters and their gap. The construction starts from a regular hexagon with exact side data; it does not need a decimal approximation to pi as an input. Reset restores that initial polygon.

## What to notice

If $s$ and $c$ denote the sine and cosine of half a polygon's central angle, the exact half-perimeters are $ns$ and $ns/c$. Doubling uses the half-angle construction. The expressions $s/\\sqrt{2(1+c)}$ and $s/(1+c)$ give the new sine and tangent without subtracting two nearly equal numbers. The geometric inclusion and tangent argument establish the lower and upper perimeter inequalities.

## Worked example

For the initial hexagon, $s=1/2$ and $c=\\sqrt3/2$. The two exact half-perimeters are three and $2\\sqrt3$. Doubling gives a narrower geometric enclosure. Numerical table entries are rounded illustrations of exact geometric quantities; ordinary floating-point arithmetic is not an outward-rounded interval certificate.

## Scope

This is a modern reconstruction of a polygon argument, connected to historical source reading. It does not claim to reproduce a particular manuscript's notation, date, numerical table or original method without documentary evidence. The linked article explains the distinction between a historical witness and a modern mathematical reconstruction.

## Preparation and continuation

- [Deep dive reading historical algorithms](/resources/library%3Adeep-dive-reading-historical-algorithms/)
- [Circles chords tangents angles](/resources/library%3Abook-euclidean-geometry-trigonometry%3Acircles-chords-tangents-angles/)

The interactive controls, reset and data table use the shared Euler Lab frame. Read marks and saved notes remain personal study records.
`;export{e as default};