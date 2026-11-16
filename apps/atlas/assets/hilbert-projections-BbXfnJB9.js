var e=`---
id: visual-lab-hilbert-projections
title: "Nearest points and perpendicular error"
license: CC BY-SA 4.0
---

# Nearest points and perpendicular error

Which multiple of (1,k) is nearest to (a,b)?

Choose a point, an integer line slope and a trial coefficient. The model gives the exact rational projection coefficient and residual, and compares the trial squared error with the minimum. The picture shows approximate positions; the identities in the table use rational arithmetic. Reset restores the native starting point and trial.

## What to notice

Let $v=(1,k)$ and $x=(a,b)$. The closest multiple is $tv$ with $t=\\langle x,v\\rangle/\\langle v,v\\rangle=(a+kb)/(1+k^2)$. The denominator is strictly positive. The residual is perpendicular to $v$. Expanding the squared norm gives $\\|x-sv\\|^2=\\|x-tv\\|^2+(1+k^2)(s-t)^2$, so the displayed excess is nonnegative and vanishes only for the minimizing coefficient.

## Worked example

For $x=(2,1)$ and $k=1$, the coefficient is $3/2$. The projection is $(3/2,3/2)$ and the residual is $(1/2,-1/2)$, whose squared norm is one half. The trial coefficient one gives squared error one. Its excess is $2(1-3/2)^2=1/2$, exactly accounting for the difference.

## Scope

The lab proves the finite Euclidean line calculation. The full projection theorem needs a Hilbert space and a closed subspace; arbitrary normed spaces do not inherit the same perpendicular-error identity. The linked source separates quotient distance, existence and uniqueness hypotheses.

## Preparation and continuation

- [Normed banach spaces](/resources/library%3Abook-functional-analysis%3Anormed-banach-spaces/)
- [Hilbert spaces](/resources/library%3Abook-functional-analysis%3Ahilbert-spaces/)

The interactive controls, reset and data table use the shared Euler Lab frame. Read marks and saved notes remain personal study records.
`;export{e as default};