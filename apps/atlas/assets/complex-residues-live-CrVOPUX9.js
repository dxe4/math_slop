var e=`---
id: visual-lab-complex-residues
title: "Contours, Winding, and Residues Laboratory"
level: advanced-undergraduate
estimated_minutes: 100
license: CC BY-SA 4.0
---

# Contours, Winding, and Residues Laboratory

Complex integration turns local singularity data into global contour integrals. This laboratory links an oriented deformable ellipse, winding numbers, analytic and singular functions, residue-theorem predictions, and numerical quadrature with a refinement error audit.

[Open the runnable laboratory](#/labs?lab=visual-lab-complex-residues)

Choose among functions with zeros, simple or double poles, and the essential singularity $\\exp(1/z)$. Move and reshape the contour with labeled controls or the keyboard. Phase coloring is accompanied by a 25-point numerical table; contour integrals show both $N$- and $2N$-point midpoint estimates. If a singularity lies on the contour, or arithmetic exceeds a safe numerical range, the lab refuses the calculation and explains why.

## Oriented contour integrals

For a piecewise smooth closed curve $\\gamma :[a,b]\\to C$,

$∮_\\gamma f(z) dz = \\int _a^b f(\\gamma (t))\\gamma '(t)dt$.

Reversing orientation changes the sign. A numerical polygon or quadrature samples this parameter integral; agreement under refinement is evidence about an approximation, not by itself a proof of a complex-analytic theorem.

## Winding number

For $w$ not on the contour,

$Ind(\\gamma ,w) = (1/(2\\pi i))∮_\\gamma dz/(z-w)$

is an integer counting signed turns of $\\gamma$ around $w$. It remains unchanged under deformations that do not cross $w$. A contour may therefore move dramatically while preserving an integral whose enclosed singularities and winding numbers are unchanged.

## Residues

Let the contour be the positively oriented piecewise smooth Jordan boundary of a bounded region. Suppose $f$ is holomorphic on a neighborhood of the region's closure except at finitely many isolated interior singularities, with none on the contour. The singularities may be poles or essential singularities. Then

$∮_\\gamma f(z)dz = 2\\pi i \\sum Res(f,a_k) Ind(\\gamma ,a_k)$.

The hypotheses are load-bearing. A singularity on $\\gamma$ makes the ordinary contour integral improper and the basic residue theorem inapplicable. An essential singularity may still have a residue: $\\exp(1/z)=\\sum z^{-n}/n!$ has residue $1$, the coefficient of $z^{-1}$.

The lab implements simple ellipses in either orientation, so the displayed index is zero outside and $+1$ or $-1$ inside. General winding-weighted contour sums need the finite-region or homological hypotheses supplied by the [residue-theorem chapter](/books/complex-analysis/residue-theorem/). The $N$ versus $2N$ difference is a refinement diagnostic, not a certified bound for the true quadrature error. The essential preset is covered by the isolated-singularity statement above; it is not meromorphic across its essential singularity.

A double pole need not have nonzero residue. For example, $1/(z-a)^{2}$ has Laurent coefficient zero at $(z-a)^{-1}$, so its integral around a closed contour is zero despite the pole.

## Exercises with solutions

### 1. Orientation

If a counterclockwise contour integral equals $3+2i$, what is the value after reversing the same curve?

**Solution.** Reversing the parametrization negates $dz$, so the value is $-3-2i$.

### 2. One simple pole

Evaluate $∮ dz/(z-a)$ around a positively oriented circle enclosing $a$ once.

**Solution.** The residue is $1$ and the winding number is $1$, hence the integral is $2\\pi i$.

### 3. A zero-residue pole

Evaluate $∮ dz/(z-a)^{2}$ around the same circle.

**Solution.** The residue is the coefficient of $(z-a)^{-1}$, which is zero. The residue theorem gives integral zero.

### 4. Deformation boundary

Why may a contour be deformed without changing an integral only while it avoids crossing singularities?

**Solution.** In the region swept between the contours the integrand must remain holomorphic for the deformation/Cauchy argument. Crossing a pole changes its winding contribution and can change the integral by $2\\pi i$ times the relevant residue.

## Audit checklist

- Confirm orientation and parametrization.
- Locate every singularity and verify none is on the path.
- Compute winding numbers, not merely “inside/outside,” for general contours.
- State the domain on which the function is holomorphic or meromorphic.
- Compare numerical refinements with the residue prediction and report the discrepancy.
- Treat domain colors as a redundant qualitative encoding, never as a substitute for the numerical table.
`;export{e as default};