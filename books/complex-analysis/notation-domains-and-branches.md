
# Notation, Domains, and Branches

All scalar functions are complex-valued unless real values are specified. The plane is \(\mathbb C=\{x+iy:x,y\in\mathbb R\}\), with modulus \(|z|=\sqrt{x^2+y^2}\). A domain is a nonempty connected open set. An entire function is holomorphic on the whole plane; holomorphy near one point means on a neighborhood, not merely differentiability at that point.

## Neighborhoods and convergence

The disk \(D(a,r)\) has radius \(r>0\) and strict inequality. Its closure is written with a bar. The notation \(K\Subset\Omega\) means a compact subset contained in the open set; it supplies a uniform surrounding margin. Local uniform convergence means uniform convergence on every such compact subset.

A function defined on an open disk need not be defined on its boundary. Every theorem using a boundary circle states a legal interior radius or assumes holomorphy on a neighborhood of the closed disk. An isolated singularity requires a complete deleted disk on which the function is holomorphic.

## Derivatives and series

The derivative \(f'(a)\) is a limit over all complex increments. The little-o notation \(r(h)=o(|h|)\) means \(|r(h)|/|h|\to0\). A real Jacobian is complex-linear precisely when it has the rotation-and-scale form required by Cauchy–Riemann.

A power series is considered on its actual convergence disk. A Laurent series has separately convergent nonnegative and negative parts on an annulus. Its residue is the coefficient of \((z-a)^{-1}\), not necessarily its leading pole coefficient. The order of a zero or pole is a positive integer under its stated nontriviality assumptions.

## Arguments and branches

An argument of a nonzero number is defined modulo \(2\pi\). The principal holomorphic logarithm has domain \(\mathbb C\setminus(-\infty,0]\) and argument range \((-\pi,\pi)\). This differs from a pointwise principal-argument convention that assigns a value on the negative ray.

A complex power means \(e^{aL(z)}\) with a chosen logarithm branch \(L\). Related powers in one identity use that same branch. Adding branch periods can alter a noninteger power, and logarithms of products can differ from sums by \(2\pi i\) multiples.

## Curves, boundaries, and infinity

Contours are oriented piecewise \(C^1\) paths, with traversal multiplicity included. A positive circle is counterclockwise. A region's positive outer boundary is counterclockwise and its inner hole boundaries are clockwise. A contour integral uses \(dz\); the nonnegative element \(ds\) describes a different integral.

An index is \((2\pi i)^{-1}\int dz/(z-a)\). It is defined only when the contour avoids \(a\). Its integer value counts argument change with sign and is invariant under homotopies avoiding that point.

Infinity is treated through the coordinate \(\zeta=1/z\), not as a finite complex number. A singularity at infinity is classified by \(f(1/\zeta)\) near zero. Residue at infinity includes the transformed differential, which contributes a minus sign and a reciprocal-square factor.

## Proof conventions

A stated theorem may invoke an earlier proved result. Additional imported preparation, such as Green or Arzelà–Ascoli, is named where used. A finite computation, heuristic picture, or observed numerical convergence is never substituted for a theorem's universal or infinite-time quantifiers.

## Summary

Domains, branches, convergence mode, orientation and multiplicity are part of each mathematical object. Keeping them attached prevents most incorrect transfers of familiar real identities into complex analysis.
