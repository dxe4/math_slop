var e=`---
id: visual-lab-simple-functions
title: "Approximate from below and above"
license: CC BY-SA 4.0
---

# Approximate from below and above

How do dyadic simple functions squeeze the integral of x on [0,1]?

Refine a dyadic partition and inspect a point with denominator sixty-four. The table gives every cell, its lower value, upper value and length. Reset returns to eight cells. The plotted coordinates approximate the exact rational values shown in the text and table.

## What to notice

With $m=2^n$ cells, use lower value $k/m$ and upper value $(k+1)/m$ on cell $k$. Intervals are left closed and right open, except that the last includes one. The lower and upper functions enclose $f(x)=x$ pointwise under this convention. Their integrals are respectively $(m-1)/(2m)$ and $(m+1)/(2m)$, because each rectangle has width $1/m$. Their difference is $1/m$.

## Worked example

For four cells the lower integral is $3/8$ and the upper integral is $5/8$. At $x=3/8$, the containing cell has endpoints $1/4$ and $1/2$. Its two constant values enclose the inspected value. Refining to eight cells reduces the area gap from one quarter to one eighth.

## Scope

This is a finite simple-function example and a Darboux preparation for measure and integration. Its explicit sums prove convergence to one half in this example. They do not establish a theorem about arbitrary measurable functions or justify exchanging unrelated limits and integrals. The primary opening chapter explains why the later theory is needed.

## Preparation and continuation

- [Why measure](/resources/library%3Abook-measure-and-integration%3Awhy-measure/)

The interactive controls, reset and data table use the shared Euler Lab frame. Read marks and saved notes remain personal study records.
`;export{e as default};